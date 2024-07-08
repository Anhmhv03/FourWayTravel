import { useDocQuery, useDocsQuery } from '@/hooks/useFirestore';
import DatphongLayout from '@/layout/datphong';
import { auth, firestore } from '@/utils/firebase.config';
import axios from 'axios';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useParams } from 'react-router-dom';

const Datphong = () => {
	const { id } = useParams();
	const { data } = useDocQuery('phong', id);
	const { data: khachSan } = useDocsQuery('khachsan');
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


	const timNhanNgayTrung = data.trangThaiPhong?.lichSuDatPhong?.map(item => item?.checkinTime);
	const timTraNgayTrung = data.trangThaiPhong?.lichSuDatPhong?.map(item => item?.checkoutTime);

	// console.log('Ngày nhận: ' + timNhanNgayTrung);
	// console.log('Ngày trả: ' + timTraNgayTrung);


	const filterKhachSan = khachSan.find((item) => item.id === data.khachSanId);
	const db = getFirestore();
	const [formData, setFormData] = React.useState({
		title: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		additionalRequest: '',
		checkinTime: '',
		checkoutTime: '',
		// cccd: '',
	});

	const [formErrors, setFormErrors] = React.useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		const selectedValue = e.target.value; // Get the selected value
		updateFirebaseWithSelectedValue(selectedValue); // Call the function to update Firebase
	};

	const validateForm = () => {
		let errors = {};
		if (!formData.firstName.trim()) errors.firstName = 'Tên không được để trống';
		if (!formData.lastName.trim()) errors.lastName = 'Họ không được để trống';
		if (!formData.email) {
			errors.email = 'Email không được để trống';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Email không hợp lệ';
		}

		if (!formData.phone.trim()) {
			errors.phone = 'Số điện thoại không được để trống';
		} else if (formData.phone.trim().length !== 10 || !/^\d{10}$/.test(formData.phone.trim())) {
			errors.phone = 'Số điện thoại phải có đúng 10 số';
		}

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); // Reset time to 00:00:00 for comparison

		// Validate checkinTime
		if (!formData.checkinTime) {
			errors.checkinTime = 'Vui lòng chọn ngày nhận phòng';
		} else if (new Date(formData.checkinTime) < currentDate) {
			errors.checkinTime = 'Ngày nhận phòng không thể trước ngày hiện tại';
		}

		// Validate checkoutTime
		if (!formData.checkoutTime) {
			errors.checkoutTime = 'Vui lòng chọn ngày trả phòng';
		} else if (new Date(formData.checkoutTime) < new Date(formData.checkinTime)) {
			errors.checkoutTime = 'Ngày trả phòng không thể trước ngày nhận phòng';
		} else if (new Date(formData.checkoutTime).getMonth() > currentDate.getMonth()) {
			errors.checkoutTime = 'Không chọn ngày trả phòng qua tháng hiện tại';
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};
	//Hàm này để lấy thông tin user đã đặt phòng
	const getAllUsersBookings = async () => {
		const usersCollectionRef = collection(db, 'users');
		const usersSnapshot = await getDocs(usersCollectionRef);

		const allUsersBookings = [];

		usersSnapshot.forEach((userDoc) => {
			const userData = userDoc.data();
			const userBookings = userData.datphong || [];
			allUsersBookings.push(...userBookings);
		});

		return allUsersBookings;
	};
	// cập nhật 2 hàm này để sài được thống kê
	const handleBookingSuccess = async (phongID) => {
		try {
			const phongDocRef = doc(db, 'phong', phongID);
			const phongDoc = await getDoc(phongDocRef);

			if (phongDoc.exists()) {
				const price = phongDoc.data().price || 0;
				const currentCount = phongDoc.data().bookingCount || 0;
				const currentRevenue = phongDoc.data().totalRevenue || 0;
				const newRevenue = currentRevenue + parseFloat(price);

				await updateDoc(phongDocRef, {
					bookingCount: currentCount + 1,
					totalRevenue: newRevenue,
				});

				// console.log('Booking count and total revenue incremented successfully.');
			} else {
				// console.error('LuuTru document does not exist.');
			}
		} catch (error) {
			// console.error('Error updating booking count and total revenue:', error);
		}
	};


	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			alert('Vui lòng sửa các lỗi trước khi đặt phòng.');
			return;
		}
		// Kiểm tra xung đột ngày
		const isDateConflicting = (checkin, checkout, existingCheckinDates, existingCheckoutDates) => {
			const formatDateString = (date) => {
				const d = new Date(date);
				return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
			};

			const formattedCheckin = formatDateString(checkin);
			const formattedCheckout = formatDateString(checkout);

			for (let i = 0; i < existingCheckinDates.length; i++) {
				if (
					formattedCheckin >= existingCheckinDates[i] &&
					formattedCheckin < existingCheckoutDates[i] ||
					formattedCheckout > existingCheckinDates[i] &&
					formattedCheckout <= existingCheckoutDates[i]
				) {
					return false; // Trùng ngày, cần chọn lại
				}
			}
			return true; // Không trùng, có thể tiếp tục
		};

		// Sử dụng hàm kiểm tra trùng ngày
		const isDateAvailable = isDateConflicting(
			formData.checkinTime,
			formData.checkoutTime,
			timNhanNgayTrung,
			timTraNgayTrung
		);

		if (!isDateAvailable) {
			alert('Ngày đã chọn trùng với ngày đã đặt, vui lòng chọn ngày khác.');
			return;
		} else {
			// Tiến hành các bước tiếp theo nếu ngày không trùng
		}


		try {
			const submissionTime = new Date();
			const formattedSubmissionTime = submissionTime.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

			// Tiếp tục với quá trình lưu thông tin đặt phòng nếu không có xung đột
			const bookingId = `${Date.now()}`;

			// Reference the user's document in the 'users' collection
			const userDocRef = doc(db, 'users', user.uid);

			// Get the current user's document
			const userDoc = await getDoc(userDocRef);

			// If the document exists, retrieve the current datphong formarray and append the new booking
			let newDatphongArray = [];
			if (userDoc.exists()) {
				const userData = userDoc.data();
				newDatphongArray = userData.datphong ? [...userData.datphong] : [];
			}
			// Format checkinTime and checkoutTime
			const formattedCheckinTime = new Date(formData.checkinTime)
				.toLocaleString('vi-VN', {
					timeZone: 'Asia/Ho_Chi_Minh',
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
				})
				.split(', ')[0];
			const formattedCheckoutTime = new Date(formData.checkoutTime)
				.toLocaleString('vi-VN', {
					timeZone: 'Asia/Ho_Chi_Minh',
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
				})
				.split(', ')[0];
			// Append the new booking with a unique ID to the datphong array
			newDatphongArray.push({
				uid: bookingId,
				phongID: id,
				khachID: filterKhachSan.id,
				ngayThanhToan: formattedSubmissionTime,
				tongTien: data.price * numberOfDaysStayed,
				giaGoc: data.price,
				bookingDetails: {
					...formData,
					checkinTime: formattedCheckinTime,
					checkoutTime: formattedCheckoutTime,
					bookingStatus: 'Đang chờ duyệt',
				},
			});

			// Update the document with the new datphong array
			await setDoc(userDocRef, { datphong: newDatphongArray }, { merge: true });
			// Cập nhật cái này để sử dụng được thống kê
			handleBookingSuccess(id);

			alert('Thông tin đặt phòng đã được lưu thành công!');
			// Clear the form
			setFormData({
				tieuDe: '',
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				additionalRequest: '',
				checkinTime: '',
				checkoutTime: '',
				// cccd: '',
				bookingStatus: 'Đang chờ duyệt', // Add this line
			});

			const { tieuDe, firstName, lastName, additionalRequest, bookingStatus } = formData;
			const { img, tenPhong, price, loaiPhong } = data;
			const { tinhThanh, diaChi, title } = filterKhachSan;
			// Chuẩn bị dữ liệu email
			const emailData = {
				to: formData.email,
				subject: `Thông tin booking FourWayTravel`,
				html: `	
					<!doctype html>
					<html lang="en">
						<head>
							<meta charset="UTF-8" />
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1.0"
							/>
							<title>Mail from FourWayTravel</title>
							<link rel="stylesheet" />
						</head>
						<body>
							<div style="width: 100%; background-color: #e6e6e6">
								<div
									class="container"
									style="width: 60%; margin: 0 auto; background-color: white"
								>
									<div
										class="header"
										style="width: 100%; display: flex; justify-content: center"
									>
										<div
											class="logo"
											style="
												width: 100%;
												height: 50px;
												position: relative;
												display: flex;
												justify-content: center;
												align-items: center;
											"
										>
											<img
												src="https://firebasestorage.googleapis.com/v0/b/hotel-fourwaytravel.appspot.com/o/Logo.png?alt=media&token=f948c7fd-43ae-46b2-95fe-e92ad0a54053"
												style="
													width: 200px;
													height: 50px;
													object-fit: contain;
													position: absolute;
													top: 50%;
													left: 50%;
													transform: translate(-50%, -50%);
													margin: auto; 
												"
											/>
										</div>
									</div>
									<div
										class="title"
										style="margin-left: 2rem; margin-right: 2rem"
									>
										<h3>Kính gửi: Quý ${tieuDe ? tieuDe : `khách hàng`} ${lastName} ${firstName}</h3>
										<h3>Cám ơn Quý khách đã sử dụng dịch vụ đặt phòng của FourWay Travel.</h3>

										<h3 class="ttdh">Thông tin đơn hàng:</h3>
										<table style="border-collapse: collapse; width: 100%">
											<tr>
												<td
													colspan="2"
													style="padding: 10px 10px 10px 0"
												>
													<img
														src="${img}"
														style="
															width: 250px;
															height: 250px;
															object-fit: contain;
															display: block;
															margin: 0 auto;
														"
													/>
												</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Mã giao dịch</td>
												<td style="padding: 10px 10px 10px 0">${bookingId}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Thời gian thanh toán</td>
												<td style="padding: 10px 10px 10px 0">${formattedSubmissionTime}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Khu vực</td>
												<td style="padding: 10px 10px 10px 0">${tinhThanh}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Địa chỉ</td>
												<td style="padding: 10px 10px 10px 0">${diaChi}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Tên khách sạn</td>
												<td style="padding: 10px 10px 10px 0">${title}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Tên phòng</td>
												<td style="padding: 10px 10px 10px 0">${tenPhong}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Loại phòng</td>
												<td style="padding: 10px 10px 10px 0">${loaiPhong}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Thời gian nhận</td>
												<td style="padding: 10px 10px 10px 0">14:00:00 ${formattedCheckinTime}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Thời gian trả</td>
												<td style="padding: 10px 10px 10px 0">12:00:00 ${formattedCheckoutTime}</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Tổng cộng</td>
												<td style="padding: 10px 10px 10px 0">${numberOfDaysStayed} ngày</td>
											</tr>

											<tr>
												<td style="padding: 10px 10px 10px 0">Giá thuê phòng</td>
												<td style="padding: 10px 10px 10px 0">${price.toLocaleString('vi')} VND</td>
											</tr>
											<tr>
												<td style="padding: 10px 10px 10px 0">Tổng cộng của quý khách là</td>
												<td style="padding: 10px 10px 10px 0">
													${(price * numberOfDaysStayed).toLocaleString('vi')} VND
												</td>
											</tr>

											${additionalRequest == ''
						? ``
						: `
											<tr>
												<td style="padding: 10px 10px 10px 0">Yêu cầu thêm</td>
												<td style="padding: 10px 10px 10px 0">${additionalRequest}</td>
											</tr>
											`
					}
											${bookingStatus
						? `
												<tr>
													<td style="padding: 10px 10px 10px 0">Trạng thái</td>
													<td style="padding: 10px 10px 10px 0; color:#888888">${bookingStatus}</td>
												</tr>
											`
						: `
												<tr>
													<td style="padding: 10px 10px 10px 0">Trạng thái</td>
													<td style="padding: 10px 10px 10px 0; color:#888888">Đang chờ duyệt</td>
												</tr>
											`
					}
											
										</table>
									</div>
									<div
										class="footer"
										style="
											display: flex;
											justify-content: space-around;
											align-items: start;
											margin-top: 1rem;
											width: 100%;
											border-top: 1px solid #999;
											background-color: rgb(0, 48, 120);
											color: #e6e6e6;
											flex-wrap: wrap;
										"
									>
										<img
											src="https://firebasestorage.googleapis.com/v0/b/hotel-fourwaytravel.appspot.com/o/footerLogo.png?alt=media&token=639847c0-fdf3-4e67-b0b0-0e85bb1be2b5"
											style="
												width: 200px;
												height: 100px;
												object-fit: contain;
												margin-top: 1.5rem;
												margin-right: 1rem;
												margin-left: 10px;
											"
										/>
										<div
											class="title-footer"
											style="margin-top: 0.5rem; margin-right: 0.5rem"
										>
											<p>Mọi chi tiết xin liên hệ: Trung tâm thanh toán điện tử - MOMO</p>
											<p>Địa chỉ: QTSC 9 Builingg, Tô Ký, Tân Chánh Hiệp ,Q.12 , Tòa T</p>
											<p>
												Email:
												<a
													href="#"
													style="color: white"
												>
													support.fourwaytravel@gmail.com
												</a>
											</p>
											<p>Số điện thoại: 1900 1530 hoặc 08.9999.1530</p>
											<p>
												Website:
												<a
													href="#"
													style="color: white"
												>
													https://hotel-fourwaytravel.web.app/
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</body>
					</html>
				`,
			};

			// Gửi yêu cầu POST đến server
			try {
				const response = await axios.post('http://14.225.198.206:2020/sendmail', emailData);
				// const response = await axios.post('http://localhost:3000/sendmail', emailData);
			} catch (error) {
				// console.error('Error sending email:', error);
			}
		} catch (error) {
			// console.error('Error updating document: ', error);
			alert('Lỗi khi lưu thông tin đặt phòng.');
		}
	};

	const updateFirebaseWithSelectedValue = (selectedValue) => {
		// Define the collection and document where you want to update the value
		const collectionRef = firestore.collection('thanhtoan'); // Change to your collection name
		const documentRef = collectionRef.doc('YOUR_DOCUMENT_ID'); // Replace with the document ID you want to update

		// Update the 'tieuDe' field with the selected value
		documentRef
			.update({
				tieuDe: selectedValue,
			})
			.then(() => {
				// console.log(`Document updated with value: ${selectedValue}`);
			})
			.catch((error) => {
				// console.error('Error updating document:', error);
			});
	};

	const [numberOfDaysStayed, setNumberOfDaysStayed] = React.useState(1);

	// Function to calculate total price and number of days stayed
	const calculateOriginPriceAndDays = () => {
		const checkinDate = new Date(formData.checkinTime);
		const checkoutDate = new Date(formData.checkoutTime);
		const diffTime = Math.abs(checkoutDate - checkinDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		setNumberOfDaysStayed(diffDays);
		// const OriginPrice = diffDays * data.price;
		// setFormData({ ...formData, OriginPrice });
	};

	// Effect to update total price and number of days when dates change
	React.useEffect(() => {
		if (formData.checkinTime && formData.checkoutTime) {
			calculateOriginPriceAndDays();
		}
	}, [formData.checkinTime, formData.checkoutTime]);

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

	return (
		<>
			<DatphongLayout
				data={data}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
				formErrors={formErrors}
				updateFirebaseWithSelectedValue={updateFirebaseWithSelectedValue}
				numberOfDaysStayed={numberOfDaysStayed}
				filterKhachSan={filterKhachSan}
				renderStars={renderStars}
				timNhanNgayTrung={timNhanNgayTrung}
				timTraNgayTrung={timTraNgayTrung}
			/>
		</>
	);
};

export default Datphong;
