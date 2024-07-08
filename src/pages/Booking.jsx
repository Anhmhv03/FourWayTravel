import { useDocsQuery } from '@/hooks/useFirestore';
import BookingLayout from '@/layout/Booking';
import { auth, firestore } from '@/utils/firebase.config';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
const labelFavorite = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Booking = () => {
	const { vungmien, address } = useParams();
	const { data: khachsan } = useDocsQuery('khachsan');
	const { data: tinhthanh } = useDocsQuery('tinhthanh');
	const { data: vungMien } = useDocsQuery('vungmien');
	const { data: phong } = useDocsQuery('phong');

	const findCheapestRoom = (rooms, hotels) => {
		// Filter rooms that belong to the given hotels
		const eligibleRooms = rooms.filter((room) => hotels.some((hotel) => hotel.id === room.khachSanId));

		// Sort the rooms by price in ascending order
		eligibleRooms.sort((a, b) => a.price - b.price);

		// Return the cheapest room or null if no rooms are available
		return eligibleRooms.length > 0 ? eligibleRooms[0] : null;
	};

	// Trong tệp Booking.js, thêm hàm findAllRoom
	const findAllRoom = async (rooms, hotels) => {
		const allRoom = rooms.filter((room) => hotels.some((hotel) => hotel.id === room.khachSanId));
		return allRoom;
	};

	const regionDict = useMemo(() => {
		return vungMien?.reduce((acc, item) => {
			acc[item.tenVungMien] = item.id;
			return acc;
		}, {});
	}, [vungMien]);

	// filter
	const filterVungMien = vungMien.find((item) => item.id === vungmien);
	// Lọc danh sách địa danh dựa trên vùng miền được chọn
	const filterDiaDanh = tinhthanh.filter((item) => {
		if (!filterVungMien) {
			return true; // Nếu không có vùng miền được chọn, hiển thị tất cả địa danh
		}
		return item.vungMien === filterVungMien.tenVungMien;
	});
	// Initialize filterKhachSan with all khachsan data
	let filterKhachSan = khachsan;

	let selectedVungMien = null;
	let selectedTinhThanh = null;

	// Check if address is not empty or undefined
	if (vungmien) {
		selectedVungMien = Array.isArray(vungMien) ? vungMien.find((tt) => tt.id === vungmien) : null;
		// Filter khachsan if selectedTinhThanh is valid and has a text property
		if (selectedVungMien && selectedVungMien.tenVungMien) {
			filterKhachSan = khachsan.filter((item) => item.vungMien === selectedVungMien.tenVungMien);
		}
	}
	// Check if address is not empty or undefined
	if (address) {
		selectedTinhThanh = Array.isArray(tinhthanh) ? filterDiaDanh.find((tt) => tt.id === address) : null;
		// Filter khachsan if selectedTinhThanh is valid and has a text property
		if (selectedTinhThanh && selectedTinhThanh.tenTinhThanh) {
			filterKhachSan = khachsan.filter((item) => item.tinhThanh === selectedTinhThanh.tenTinhThanh);
		}
	}

	const getRatingText = (star) => {
		if (star > 4) return 'Xuất sắc';
		if (star > 3) return 'Tuyệt vời';
		if (star === 3) return 'Bình thường';
		return 'Giá rẻ';
	};
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
	const [favorites, setFavorites] = React.useState([]); // Thay đổi trạng thái yêu thích thành một mảng

	React.useEffect(() => {
		if (currentUser) {
			// Load user's favorites when the component mounts
			const userRef = doc(firestore, 'users', currentUser.uid);
			const loadFavorites = async () => {
				const userDoc = await getDoc(userRef);
				if (userDoc.exists()) {
					const userFavorites = userDoc.data().favorites || [];
					setFavorites(userFavorites);
				}
			};
			loadFavorites();
		}
	}, [currentUser]);

	const handleFavoriteChange = async (itemId) => {
		if (currentUser) {
			const userRef = doc(firestore, 'users', currentUser.uid);
			let updatedFavorites; // Định nghĩa biến updatedFavorites ở đây

			if (favorites.includes(itemId)) {
				// Item is already in favorites, remove it
				updatedFavorites = favorites.filter((favoriteId) => favoriteId !== itemId);
			} else {
				// Item is not in favorites, add it
				updatedFavorites = [...favorites, itemId];
			}
			if (userFavorites.some((favorite) => favorite.id === itemId.id)) {
				//remove it
				updatedFavorites = userFavorites.filter((favorite) => favorite.id !== itemId.id);
			}

			await updateDoc(userRef, { favorites: updatedFavorites }); // Cập nhật dữ liệu Firestore
			// Cập nhật trạng thái yêu thích sau khi cập nhật Firestore thành công
			setFavorites(updatedFavorites);
		}
	};

	const [userFavorites, setUserFavorites] = React.useState([]);

	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
				// Lấy thông tin người dùng hiện tại và mảng "favorites"
				const userRef = doc(firestore, 'users', user.uid);
				const fetchUserFavorites = async () => {
					const userDoc = await getDoc(userRef);
					if (userDoc.exists()) {
						setUserFavorites(userDoc.data().favorites || []);
					}
				};
				fetchUserFavorites();
			} else {
				setCurrentUser(null);
			}
		});
	}, []);

	const [xemGanDay, setXemGanDay] = React.useState([]);

	const handleAddToRecentlyViewed = async (itemId, tinhThanh, title, img) => {
		// Check if there is a currentUser
		if (currentUser) {
			// Define a reference to the user's document in Firestore
			const userRef = doc(firestore, 'users', currentUser.uid);

			// Load the user's xemGanDay data
			const userDoc = await getDoc(userRef);
			let updatedXemGanDay = [];

			if (userDoc.exists()) {
				// If the user document exists, get the current xemGanDay data
				updatedXemGanDay = userDoc.data().xemGanDay || [];

				// Check if the itemId is already in xemGanDay
				const itemIndex = updatedXemGanDay.findIndex((item) => item.id === itemId);

				if (itemIndex !== -1) {
					// If it's already in xemGanDay, update the views count
					updatedXemGanDay[itemIndex].views += 1;
					// Move the item to the beginning of the array
					const [movedItem] = updatedXemGanDay.splice(itemIndex, 1);
					updatedXemGanDay.unshift({ ...movedItem, lastViewed: new Date() });
				} else {
					// If it's not in xemGanDay, add it with views count as 1
					updatedXemGanDay.unshift({ id: itemId, tinhThanh, title, img, views: 1, lastViewed: new Date() });
				}
			} else {
				// If the user document doesn't exist, create xemGanDay with the current item
				updatedXemGanDay = [{ id: itemId, tinhThanh, title, img, views: 1, lastViewed: new Date() }];
			}

			// Update the xemGanDay field in the user's document
			await updateDoc(userRef, { xemGanDay: updatedXemGanDay });

			// Set the updated xemGanDay in the component state
			setXemGanDay(updatedXemGanDay);
		}
	};

	const [open, setOpen] = useState(false);
	const [selectedAmenity, setSelectedAmenity] = useState(null);

	const handleOpen = (amenity) => {
		setSelectedAmenity(amenity);
		setOpen(true);
	};

	const handleClose = () => {
		setSelectedAmenity(null);
		setOpen(false);
	};

	return (
		<>
			<div className="w-full bg-blue-300 py-5 mx-auto ">
				<div className="w-3/4 mx-auto flex flex-col md:flex-row items-center justify-between">
					<div className="flex gap-2 w-full md:w-1/4">
						<Link
							to="/"
							className="hover:underline"
						>
							Trang chủ
						</Link>{' '}
						/
						<Link
							to="/booking"
							className="underline"
						>
							Tìm khách sạn
						</Link>
					</div>
					<SearchBar />
				</div>
			</div>
			<BookingLayout
				khachsan={filterKhachSan}
				filterKhachSan={filterKhachSan}
				React={React}
				FormControl={FormControl}
				renderStars={renderStars}
				MenuItem={MenuItem}
				Select={Select}
				getRatingText={getRatingText}
				Link={Link}
				handleFavoriteChange={handleFavoriteChange}
				Checkbox={Checkbox}
				labelFavorite={labelFavorite}
				userFavorites={userFavorites}
				handleAddToRecentlyViewed={handleAddToRecentlyViewed}
				//start modal
				open={open}
				handleClose={handleClose}
				handleOpen={handleOpen}
				Box={Box}
				Button={Button}
				Typography={Typography}
				Modal={Modal}
				selectedAmenity={selectedAmenity}
				selectedVungMien={selectedVungMien}
				selectedTinhThanh={selectedTinhThanh}
				filterDiaDanh={filterDiaDanh}
				vungMien={vungMien}
				tinhthanh={tinhthanh}
				regionDict={regionDict}
				phong={phong}
				findCheapestRoom={findCheapestRoom}
				findAllRoom={findAllRoom}
			/>
		</>
	);
};

export default Booking;
