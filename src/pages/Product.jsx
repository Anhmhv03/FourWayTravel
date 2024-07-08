import '@/assets/css/hotTab.css';
import { useDocsQuery } from '@/hooks/useFirestore';
import ProductLayout from '@/layout/Product';
import { auth, firestore } from '@/utils/firebase.config';
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
const Product = () => {
	const { data: phong } = useDocsQuery('phong');
	const { data: khachsan } = useDocsQuery('khachsan');
	const renderStars = (soSao) => {
		let stars = [];
		for (let i = 0; i < soSao; i++) {
			stars.push(
				<i
					key={i}
					className="fa-solid fa-star text-white-100"
				></i>,
			);
		}
		return stars;
	};

	const styles = {
		display: '-webkit-box',
		WebkitLineClamp: 1,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
	};
	const hotKhachSan = khachsan.filter((item) => item.hot === true);
	const khachSanVip = khachsan.filter((item) => item.star === 5);
	const LuuTruGiamGia = khachsan.filter((item) => item.voucher > 0);

	const [currentUser, setCurrentUser] = React.useState(null);

	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});
	}, []);

	const [xemGanDay, setXemGanDay] = React.useState([]);
	const handleAddToRecentlyViewed = async (itemId, danhmuc, title, img, price) => {
		// Kiểm tra xem itemId đã tồn tại trong xemGanDay chưa
		const itemIndex = xemGanDay.findIndex((item) => item.id === itemId);
		if (itemIndex !== -1) {
			// Nếu đã tồn tại, thì tăng số lần xem lên 1
			const updatedXemGanDay = [...xemGanDay];
			updatedXemGanDay[itemIndex].views += 1;
			setXemGanDay(updatedXemGanDay);
		} else {
			// Nếu itemId chưa có trong mảng, thêm itemId vào mảng với số lần xem là 1
			const newItem = { id: itemId, danhmuc, title, img, price, views: 1 };
			setXemGanDay([...xemGanDay, newItem]);
		}

		if (currentUser) {
			// Nếu có người dùng đăng nhập, bạn có thể lưu xemGanDay vào Firestore
			const userRef = doc(firestore, 'users', currentUser.uid);
			await updateDoc(userRef, { xemGanDay: xemGanDay });
			const xemGanDayRef = collection(userRef, 'xemGanDay');
			const itemDoc = await getDoc(doc(xemGanDayRef, itemId));

			try {
				if (itemDoc.exists()) {
					// If the item exists, update the 'views' field only
					const currentViews = itemDoc.data().views || 0;
					await updateDoc(doc(xemGanDayRef, itemId), { views: currentViews + 1 });
				} else {
					// If the item doesn't exist, setDoc to create a new document
					await setDoc(doc(xemGanDayRef, itemId), { id: itemId, danhmuc, title, img, price, views: 1 });
				}

				// Perform any other actions needed when a user views details
				console.log(`User is viewing details for item with ID: ${itemId}`);
			} catch (error) {
				console.error('Error handling recently viewed:', error);
			}
		}
	};
	const topDiscountedLuuTru = [...LuuTruGiamGia].sort((a, b) => b.voucher - a.voucher).slice(0, 4);

	// lấy giá lớn nhất từ phòng khách sạn
	const highestPriceDict = useMemo(() => {
		const kq = {};

		khachSanVip.forEach((vipHotel) => {
			const roomsForHotel = phong.filter((room) => room.khachSanId === vipHotel.id);
			if (roomsForHotel.length > 0) {
				const highestPriceRoom = roomsForHotel.reduce((maxPriceRoom, currentRoom) => {
					return currentRoom.price > maxPriceRoom.price ? currentRoom : maxPriceRoom;
				}, roomsForHotel[0]);
				kq[vipHotel.id] = highestPriceRoom.price;
			}
		});

		return kq;
	}, [khachSanVip, phong]);

	return (
		<>
			<ProductLayout
				styles={styles}
				highestPriceDict={highestPriceDict}
				khachsan={khachsan}
				khachSanVip={khachSanVip}
				hotKhachSan={hotKhachSan}
				renderStars={renderStars}
				Link={Link}
				handleAddToRecentlyViewed={handleAddToRecentlyViewed}
				LuuTruGiamGia={LuuTruGiamGia}
				topDiscountedLuuTru={topDiscountedLuuTru}
			/>
		</>
	);
};

export default Product;
