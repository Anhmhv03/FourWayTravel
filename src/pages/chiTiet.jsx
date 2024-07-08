import { useDocQuery, useDocsQuery } from '@/hooks/useFirestore';
import ChiTietLayout from '@/layout/chiTiet';
import { auth, firestore } from '@/utils/firebase.config';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const styleModal = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 650,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const chiTiet = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { data } = useDocQuery('khachsan', id);

	const [user, setUser] = React.useState(null);
	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
	}, []);

	const { data: khachSan } = useDocsQuery('khachsan');
	const { data: phong } = useDocsQuery('phong');

	const filteredPhongKS = phong.filter((item) => item.khachSanId === data.id);

	const styles = {
		display: '-webkit-box',
		WebkitLineClamp: 3,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
	};

	const shuffleArrayWithoutDuplicates = (array, currentItems) => {
		const remainingItems = array.filter((item) => !currentItems.includes(item.id));
		const shuffledArray = [...remainingItems];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}
		return shuffledArray;
	};
	const [currentItemIds, setCurrentItemIds] = useState([]);

	// Địa điểm gần đây
	const [dataForBox1, setDataForBox1] = useState([]);
	const [dataForBox2, setDataForBox2] = useState([]);

	useEffect(() => {
		// Assuming you have some data source like diaDiemGanDayList
		const diaDiemGanDayList = data.diaDiemGanDay;

		// Take the first 3 items for box1
		const dataForBox1 = diaDiemGanDayList?.slice(0, 3);

		// Take the remaining items for box2
		const dataForBox2 = diaDiemGanDayList?.slice(3);

		// Update state with the data for each box
		setDataForBox1(dataForBox1);
		setDataForBox2(dataForBox2);
	}, [data.diaDiemGanDay]);

	//không lặp trùng id chi tiết

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

	const checkIcon = (tienIch) => {
		if (tienIch === 'Điều hòa') {
			return 'fa-light fa-snowflake';
		}
		if (tienIch === 'WiFi') {
			return 'fa-wifi';
		}
		if (tienIch === 'Với đầy đủ bữa ăn') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đường cho xe lăn') {
			return 'fa-wheelchair';
		}
		if (tienIch === 'Thanh toán tại nơi lưu trú') {
			return 'fa-money-bill';
		}
		if (tienIch === 'Với 1 bữa ăn') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đầy đủ dịch vụ') {
			return 'fa-bell-concierge';
		}
		if (tienIch === 'Gia đình') {
			return 'fa-people-roof';
		}
		if (tienIch === 'Biển') {
			return 'fa-water';
		}
		if (tienIch === 'Bể bơi') {
			return 'fa-water-ladder';
		}
		if (tienIch === 'Gồm bữa sáng') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đậu xe') {
			return 'fa-square-parking';
		}
		if (tienIch === 'Bồn tắm nước nóng') {
			return 'fa-bath';
		}
		if (tienIch === 'Spa') {
			return 'fa-spa';
		}
		if (tienIch === 'Miễn phí Đổi/Hủy') {
			return 'fa-road-circle-check';
		}
		if (tienIch === 'Chấp nhận vật nuôi') {
			return 'fa-paw';
		}
		if (tienIch === 'Nhà hàng') {
			return 'fa-utensils';
		}
		if (tienIch === 'Phòng Gym') {
			return 'fa-dumbbell';
		}
		return null;
	};

	// Modal xem thêm
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	// Bình luận
	const [binhLuan, setBinhLuan] = useState('');

	const handleInputChange = (e) => {
		setBinhLuan(e.target.value);
	};

	const handleSendComment = () => {
		if (!binhLuan.trim()) {
			console.error('Bình luận không được để trống');
			return;
		}

		// Check if the user is logged in and has user data
		if (!user) {
			console.error('Người dùng chưa đăng nhập');
			// You can add additional handling here, like showing a login prompt
			return;
		}

		// Include user data in the comment
		const commentData = {
			id: id, // ID của nơi lưu trú
			tenNguoiDung: user.displayName, // Assuming user will always have a displayName
			img: user.photoURL, // Assuming user will always have a photoURL
			noiDung: binhLuan, // Nội dung bình luận
			trangThai: false,
		};

		saveComment(commentData);
		setBinhLuan(''); // Clear the comment input after submission
	};

	const saveComment = async (commentData) => {
		const khachSanDocRef = doc(firestore, 'khachsan', commentData.id);

		try {
			const docSnapshot = await getDoc(khachSanDocRef);
			if (docSnapshot.exists()) {
				const khachSanData = docSnapshot.data();
				const currentTimestamp = new Date().toLocaleDateString('vi-VN'); // Get current date in "dd/mm/yy" format
				const updatedComment = { ...commentData, thoiGianBinhLuan: currentTimestamp, trangThai: false }; // Add timestamp and trangThai to commentData
				const updatedBinhluan = khachSanData.binhluan ? arrayUnion(updatedComment) : [updatedComment];

				await updateDoc(khachSanDocRef, { binhluan: updatedBinhluan });

			} else {
				console.error('Document không tồn tại');
			}
		} catch (error) {
			console.error('Lỗi khi thêm bình luận: ', error);
		}
	};

	const [binhLuanArray, setBinhLuanArray] = useState([]);

	useEffect(() => {
		const fetchBinhLuanData = async () => {
			try {
				const khachSanDocRef = doc(firestore, 'khachsan', id);
				const docSnapshot = await getDoc(khachSanDocRef);

				if (docSnapshot.exists()) {
					const khachSanData = docSnapshot.data();
					const binhLuan = khachSanData.binhluan || [];
					setBinhLuanArray(binhLuan);
				} else {
					console.error('Document không tồn tại');
				}
			} catch (error) {
				console.error('Lỗi khi lấy dữ liệu bình luận: ', error);
			}
		};

		fetchBinhLuanData();
	}, [id]);

	const getRelativeTime = (dateString) => {
		const commentDate = new Date(dateString);
		const currentDate = new Date();
		const commentDay = commentDate.getDate();
		const commentMonth = commentDate.getMonth();
		const commentYear = commentDate.getFullYear();
		const currentDay = currentDate.getDate();
		const currentMonth = currentDate.getMonth();
		const currentYear = currentDate.getFullYear();

		const currentTimestamp = currentDay + '/' + (currentMonth + 1) + '/' + currentYear;

		if (commentDay === currentDay && commentMonth === currentMonth && commentYear === currentYear) {
			return 'Hôm nay';
		} else if (dateString === currentTimestamp) {
			return 'Hôm nay'; // Ngày hiện tại trùng với ngày trong thoiGianBinhLuan
		} else {
			return `${dateString}`; // Hiển thị thoiGianBinhLuan
		}
	};

	const filteredBinhLuanArray = binhLuanArray.filter((item) => item.trangThai === true);


	return (
		<>
			<ChiTietLayout
				data={data}
				getRatingText={getRatingText}
				renderStars={renderStars}
				Link={Link}
				khachSan={khachSan}
				checkIcon={checkIcon}
				//lặp trung id
				navigate={navigate}
				shuffleArrayWithoutDuplicates={shuffleArrayWithoutDuplicates}
				currentItemIds={currentItemIds}
				setCurrentItemIds={setCurrentItemIds}
				//lặp trung id

				//địa điểm gần đây
				dataForBox1={dataForBox1}
				dataForBox2={dataForBox2}
				//địa điểm gần đây

				//modal xem thêm
				Box={Box}
				Button={Button}
				Modal={Modal}
				styleModal={styleModal}
				openModal={openModal}
				handleOpenModal={handleOpenModal}
				handleCloseModal={handleCloseModal}
				styles={styles}

				// bình luận
				binhLuan={binhLuan}
				handleInputChange={handleInputChange}
				handleSendComment={handleSendComment}
				binhLuanArray={binhLuanArray}
				filteredBinhLuanArray={filteredBinhLuanArray}

				// phòng khách sạn
				phongKS={filteredPhongKS}
				getRelativeTime={getRelativeTime}
			/>
		</>
	);
};

export default chiTiet;
