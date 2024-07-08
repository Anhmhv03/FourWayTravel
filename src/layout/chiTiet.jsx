const ChiTietLayout = ({
	data, Link, user, khachSan,
	renderStars, getRatingText, checkIcon,
	navigate, setCurrentItemIds,
	currentItemIds, shuffleArrayWithoutDuplicates,

	Box, Modal, styleModal, openModal,
	handleOpenModal, handleCloseModal,
	styles, dataForBox1, dataForBox2,

	binhLuan, handleInputChange,
	handleSendComment, filteredBinhLuanArray,

	getRelativeTime, phongKS,

}) => {

	// let totalAvailableRooms = 0;
	let totalPhongDon = 0;
	let totalPhongDoi = 0;
	let totalPhongLon = 0;
	if (phongKS) {
		// totalAvailableRooms = phongKS.reduce((total, room) => {
		// 	if (typeof room.trangThaiPhong === 'string') {
		// 		if (room.trangThaiPhong === 'Trống') {
		// 			return total;
		// 		} else {
		// 			return ++total;
		// 		}
		// 	} else {
		// 		const arrayLichSu = room.trangThaiPhong;
		// 		if (arrayLichSu.lichSuDatPhong?.some(item => item.trangThai) === true) {
		// 			return ++total;
		// 		} else {
		// 			return total;
		// 		}
		// 	}
		// }, 0);

		totalPhongDon = phongKS.reduce((total, room) => {
			if (room.loaiPhong === 'Phòng đơn') {
				return ++total;
			} else {
				return total;
			}
		}, 0);
		// Tổng phòng đơn
		totalPhongDoi = phongKS.reduce((total, room) => {
			if (room.loaiPhong === 'Phòng đôi') {
				return ++total;
			} else {
				return total;
			}
		}, 0);
		// Tổng phòng đôi
		totalPhongDoi = phongKS.reduce((total, room) => {
			if (room.loaiPhong === 'Phòng đôi') {
				return ++total;
			} else {
				return total;
			}
		}, 0);

		// Tổng phòng lớn
		totalPhongLon = phongKS.reduce((total, room) => {
			if (room.soNguoi > 2) {
				return ++total;
			} else {
				return total;
			}
		}, 0);
	}

	// Lấy ngày hiện tại
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
	const currentYear = currentDate.getFullYear();
	const currentDay = currentDate.getDate();

	// Tạo một mảng chứa tất cả các ngày trong tháng hiện tại
	const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
	const allDays = Array.from({ length: daysInMonth }, (_, i) => String(i + 1).padStart(2, '0'));

	// Map qua các phòng và tính toán các ngày còn trống
	const formattedAvailableDaysByRoom = phongKS.map((room) => {
		// Định dạng ngày checkin và checkout
		const checkinDay = room.trangThaiPhong?.checkinTime?.slice(0, 2);
		const checkoutDay = room.trangThaiPhong?.checkoutTime?.slice(0, 2);

		// Loại bỏ các ngày đã được sử dụng và chỉ lấy ngày sau ngày hiện tại
		const availableDays = allDays.filter(day => {
			const dayNumber = parseInt(day, 10);
			return (
				dayNumber !== parseInt(checkinDay, 10) &&
				dayNumber !== parseInt(checkoutDay, 10) &&
				dayNumber >= currentDay
			);
		});

		// Định dạng lại các ngày còn lại thành dd/mm/yy và thêm xuống dòng sau mỗi ngày
		const formattedAvailableDays = availableDays.map(day => `${day}/${String(currentMonth).padStart(2, '0')}/${String(currentYear)}\n`);

		return formattedAvailableDays;
	});

	return (
		<>
			<div className="container-details w-full h-auto">

				<div className="w-3/4 mx-auto mt-2">
					<div className="flex flex-wrap md:flex-nowrap justify-between">
						<div
							key={data.id}
							className="flex flex-col items-start justify-center"
						>
							<div className="flex flex-wrap items-center gap-2">
								<h1 className="text-2xl font-bold my-2">{data.title}</h1>
								<p className="render text-xm font-normal text-primary-xanh flex items-center pt-0.5">
									Khách sạn
									<span className="text-sm ml-2 text-primary-cam">{renderStars(data.star)}</span>
								</p>
							</div>
							<div className="flex items-center justify-start my-2 text-sm">
								<span className="font-semibold text-sm mr-1">
									<i className="fa-solid fa-location-dot text-primary-xanh"></i>
								</span>
								<p className="text-sm font-medium ">
									{data.diaChi}{' '}
									<span className="">
										<a
											className="text-primary-xanh font-semibold"
											href=""
										>
											Xem bản đồ
										</a>
									</span>
								</p>
							</div>
						</div>
						<div className="flex flex-auto flex-col items-end justify-center">
							<a href="#choose_room">
								<button className="flex items-center justify-center w-full px-8 md:px-4 py-4 md:w-64 rounded-md bg-primary-xanh hover:scale-95 transition ease-in-out delay-50 duration-200 text-white font-semibold">
									Chọn phòng
									<i className="fa-solid fa-angle-right ml-1"></i>
								</button>
							</a>
						</div>
					</div>
					{/* start images */}
					<div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full mt-5">
						<div className="col-span-1 md:col-span-3 w-full max-h-96">
							<img
								className="w-full rounded-lg h-full object-cover"
								src={data.img}
								alt={data.title}
							/>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 col-span-1 md:col-span-2 h-auto md:max-h-96 overflow-hidden">
							{data.imgPhu?.map((image) => (
								<>
									<div className="col-span-1">
										<img
											className="w-full rounded-lg h-32 object-cover "
											src={image}
											alt={data.title}
										/>
									</div>
								</>
							))}
						</div>
					</div>
					{/* end images */}
					<div className="grid grid-cols-1 md:grid-cols-5  w-full gap-4 mt-5">
						{/* Giới thiệu */}
						<div className="grid-cols-1 md:col-span-2  shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="font-semibold text-base">Giới thiệu cơ sở khách sạn</h2>
									<div className="">
										<button
											onClick={handleOpenModal}
											className=" font-semibold text-sm tracking-wide"
										>
											Xem thêm <i className="fa-regular fa-chevron-right text-mm"></i>
										</button>

										<Modal
											open={openModal}
											onClose={handleCloseModal}
										>
											<Box sx={styleModal}>
												<h1 className="text-3xl font-bold">{data.title}</h1>
												<div className="w-full h-0.5 bg-gray-300 mb-6"></div>

												<div id="modal-modal-description">{data.detail}</div>
											</Box>
										</Modal>
									</div>
								</div>
								<div className="">
									<p
										className="text-sm font-normal leading-relaxed"
										style={styles}
									>
										{data.detail}
									</p>
								</div>
							</div>
						</div>
						{/* Trong khu vực */}
						<div className="grid-cols-1 md:col-span-3  shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="mb-4">
									<h2 className="text-base font-semibold">Trong khu vực</h2>
								</div>
								<div className="flex justify-between w-full gap-3">
									<div className="w-1/2">
										{dataForBox1?.map((diaDiemGanDay) => (
											<div
												key={diaDiemGanDay}
												className="flex justify-start items-center gap-2 mb-4"
											>
												<i className="fa-solid fa-location-dot text-primary-xanh"></i>
												<span className="text-sm font-medium">{diaDiemGanDay}</span>
											</div>
										))}
									</div>
									<div className="w-1/2">
										{dataForBox2?.map((diaDiemGanDay) => (
											<div
												key={diaDiemGanDay}
												className="flex justify-start items-center gap-2 mb-4"
											>
												<i className="fa-solid fa-location-dot text-primary-xanh"></i>
												<span className="text-sm font-medium">{diaDiemGanDay}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						{/* Tiện ích */}
						<div className="grid-cols-1 md:col-span-2 	shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-base font-semibold">Tiện ích chính</h2>
								</div>
								<div className="grid grid-cols-3 md:grid-cols-1">
									{data.tienich?.map((tienIch) => (
										<div
											key={tienIch}
											className="flex justify-start items-center gap-2 mb-4"
										>
											<i className={`fa-light text-primary-xanh ${checkIcon(tienIch)}`}></i>
											<span className="text-sm font-medium truncate">{tienIch}</span>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* Khách bình luận */}
						<div className="grid-cols-1 md:col-span-3 shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-base font-semibold">Khách nói gì về kỳ nghỉ của họ</h2>
								</div>
								<div className="">
									<div className="flex items-center mb-5">
										<p className="flex items-center gap-0.5 bg-stone-100 text-primary-xanh text-sm font-semibold p-1.5 rounded-ss">
											{data.star}{' '}
											<i className="fa-solid fa-star text-white-100 mb-0.5 text-xs"></i>
										</p>
										<p className="ml-2 font-medium text-gray-900 ">{getRatingText(data.star)}</p>
										<span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500" />
										<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
											376 đánh giá
										</p>
									</div>
									<div className="mb-4">
										<h2 className="text-md font-semibold">Hạng mục:</h2>
									</div>
									<div className="gap-8 sm:grid sm:grid-cols-2">
										<div>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Nhân viên phục vụ
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
															style={{ width: '88%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.8
													</span>
												</dd>
											</dl>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Tiện nghi
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
															style={{ width: '89%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.9
													</span>
												</dd>
											</dl>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Sạch sẽ
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
															style={{ width: '88%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.8
													</span>
												</dd>
											</dl>
										</div>
										<div>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Thoải mái
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
															style={{ width: '89%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.9
													</span>
												</dd>
											</dl>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Đáng giá tiền
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
															style={{ width: '70%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														7.0
													</span>
												</dd>
											</dl>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Địa điểm
												</dt>
												<dd className="flex items-center">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
															style={{ width: '89%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.9
													</span>
												</dd>
											</dl>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* start loại phòng  */}
				{
					<>
						{phongKS.length > 0 ? (
							<>
								<div className="w-3/4 mx-auto py-2 flex justify-start items-center my-3 gap-3">
									<h1 className="text-sm border-2 border-gray-300 rounded-3xl py-2 px-5">
										Tất cả các phòng : {phongKS.length}
									</h1>
									{totalPhongDon > 0 ? (
										<>
											<h1 className="text-sm border-2 border-gray-300 rounded-3xl py-2 px-5">
												Phòng đơn : {totalPhongDon}
											</h1>
										</>
									) : (
										<></>
									)}

									{totalPhongDoi > 0 ? (
										<>
											<h1 className="text-sm border-2 border-gray-300 rounded-3xl py-2 px-5">
												Phòng đôi : {totalPhongDoi}
											</h1>
										</>
									) : (
										<></>
									)}
									{totalPhongLon > 0 ? (
										<>
											<h1 className="text-sm border-2 border-gray-300 rounded-3xl py-2 px-5">
												Phòng lớn : {totalPhongLon}
											</h1>
										</>
									) : (
										<></>
									)}
									{/* {phongKS.length - totalAvailableRooms > 0 ? (
										<>
											<h1 className="text-sm border-2 border-gray-300 rounded-3xl py-2 px-5">
												Tất cả các phòng trống: {phongKS.length - totalAvailableRooms}
											</h1>
										</>
									) : (
										<></>
									)} */}
								</div>
							</>
						) : (<></>)}
						{phongKS?.map((room, index) => (
							<div
								className="shadow-3xl w-3/4 mx-auto mt-2 rounded-md px-3 py-3"
								id="choose_room"
								key={room.id}
							>
								<div className="bg-white mt-3 px-6 py-3 rounded-md">
									<div className="mb-3">
										<h1 className="text-xl font-extrabold">Phòng {room?.tenPhong}</h1>
									</div>
									<div className="md:flex md:justify-between md:gap-4">
										<div className="shadow-2xl md:w-2/6 md:pb-4 rounded-lg">
											<div className="">
												<img
													src={room?.img}
													alt={room?.tenPhong}
													className="w-full h-52 object-cover rounded-qq"
												/>
											</div>
											<div className="flex justify-start text-lg items-center gap-3 pl-3 mt-3">
												<i className="fa-solid fa-door-open"></i>
												<span className="text-md">
													Trạng thái :
													{formattedAvailableDaysByRoom[index].length > 0 ? (
														<span className="text-green-500">
															{' '}
															còn trống
														</span>
													) : (
														<span className="text-red-500">
															{' '}
															đã hết
														</span>
													)}
												</span>
											</div>
										</div>

										<div className="md:w-4/6 md:h-auto shadow-3xl rounded-lg py-5 ">
											<div className="px-6 md:flex md:justify-between">
												<div className="flex flex-col ">
													<h1 className="font-semibold text-center">Chọn ngày</h1>
													<select className="mt-3 text-md" >
														{formattedAvailableDaysByRoom[index]
															.filter(day => {
																// Loại bỏ các ngày trùng với lichSu.checkinTime và lichSu.checkoutTime
																const checkinDay = room?.trangThaiPhong?.lichSuDatPhong?.map(lichSu => lichSu.checkinTime.slice(0, 2));
																const checkoutDay = room?.trangThaiPhong?.lichSuDatPhong?.map(lichSu => lichSu.checkoutTime.slice(0, 2));
																return !checkinDay?.includes(day.slice(0, 2)) && !checkoutDay?.includes(day.slice(0, 2));
															})
															?.map((day, dayIndex) => (
																<option key={dayIndex} value={day}>
																	{day}
																</option>
															))}
													</select>

													<div className="font-medium text-xm text-gray-600 tracking-wider rounded-md mt-3">
														<span>
															{room?.khuyenmai ? (
																<>
																	<div className="">
																		<span className="rounded-md font-medium text-xm bg-gray-300 p-2 text-gray-600 tracking-wider">
																			Khuyến mãi {room?.khuyenmai}{' '}
																			{room?.isPercentage == true ? '%' : 'VND'}
																		</span>
																	</div>
																</>
															) : (
																<></>
															)}
														</span>
													</div>
												</div>

												<div className="border-x-2 border-solid border-gray-200 px-5">
													<div className="mb-2">
														<h1 className="font-semibold text-center">Sức chứa</h1>
													</div>
													<div className="flex justify-center items-center gap-2">
														{room?.soNguoi === 1 && <i className="fa-solid fa-user"></i>}
														{room?.soNguoi === 2 && (
															<>
																<i className="fa-solid fa-user"></i>
																<i className="fa-solid fa-user"></i>
															</>
														)}
														{room?.soNguoi === 3 && (
															<>
																<i className="fa-solid fa-user"></i>
																<i className="fa-solid fa-user"></i>
																<i className="fa-solid fa-user"></i>
															</>
														)}
														{room?.soNguoi === 4 && (
															<>
																<i className="fa-solid fa-user"></i>
																<i className="fa-solid fa-user"></i>
																<i className="fa-solid fa-user"></i>
																<i className="fa-solid fa-user"></i>
															</>
														)}
													</div>
													<p className="font-bold text-mm tracking-wider text-xanhbg-primary-xanh mt-2">
														{room?.loaiPhong}
													</p>
												</div>
												<div className="pl-2 pb-2">
													{/* <p className="font-medium text-mm tracking-wider  mb-2">Bao gồm thuế mỗi đêm</p> */}
													<p className="font-bold text-lg tracking-wider mb-1">
														{room.price.toLocaleString('vi')} VND
													</p>

													<p className="font-bold text-primary-cam text-mm tracking-wider text-xanhbg-primary-xanh">
														Không tính VAT
													</p>
													{formattedAvailableDaysByRoom[index].length > 0 ? (
														<div className="bg-primary-xanh mr-1 w-28 my-2 text-center rounded-lg">
															<Link to={`/datphong/${room.id}`}>
																<button className="px-3 py-2 text-base text-white">
																	Đặt ngay
																</button>
															</Link>
														</div>
													) : (
														<div className="bg-gray-300 mr-1 w-28 text-center rounded-lg">
															<Link>
																<button disabled className="px-3 py-2 text-base text-white">
																	Đặt ngay
																</button>
															</Link>
														</div>
													)}
												</div>
											</div>
											<div className="px-6 md:flex md:justify-between">
												<div className="flex justify-start items-center gap-4 ">
													<i className="fa-solid fa-money-check-dollar text-primary-xanh"></i>
													<div className="text-xm font-medium tracking-wider">
														<p className="">Thanh toán khi nhận phòng</p>
													</div>
												</div>


											</div>
											<div className="px-6 md:flex md:justify-between gap-2 mt-4">
												{room.imgPhu?.map((item, index) => (
													<div key={index}>
														<img
															src={item}
															alt={`Image ${index}`}
															className="w-full h-24 object-cover rounded-lg"
														/>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</>
				}
				{/* end loại phòng  */}

				{/* Nhắn bình luận */}
				<div className="w-3/4 mx-auto my-4">
					<div className="">
						{filteredBinhLuanArray?.length > 0 ? (
							<h1 className="text-xl font-semibold my-5">{filteredBinhLuanArray?.length} bình luận</h1>
						) : null}
					</div>
					<div className="flex gap-2">
						<textarea
							className=" w-full h-7 border-b border-gray-200 outline-none focus:border-b-2 focus:border-gray-400"
							name="binhluan"
							value={binhLuan}
							onChange={handleInputChange}
							cols="30"
							placeholder="Viết bình luận..."
							rows="10"
						></textarea>

						<button
							className="px-6 py-2 font-light text-white bg-primary-xanh hover:bg-primary-xanh rounded-md flex items-center justify-between"
							onClick={handleSendComment}
						>
							Gửi
							<i className="fa-solid fa-paper-plane mb-0.5 ml-2"></i>
						</button>

					</div>
				</div>

				{/* Bình luận */}
				<div className="w-3/4 mx-auto my-7">
					<div className="flex w-full justify-start items-center flex-wrap">
						{khachSan && filteredBinhLuanArray ? (
							filteredBinhLuanArray?.map((item, index) => (
								<div
									key={index}
									className="flex mt-5 justify-start items-center w-full gap-2 shadow-sm"
								>
									<div className="">
										<img
											className="rounded-full border w-auto h-8"
											src={item?.img}
											alt="User img"
										/>
									</div>
									<div className="">
										<div className="flex items-center justify-start gap-1">
											<p className="text-sm font-semibold">@{item?.tenNguoiDung}</p>
											<span className="text-sm font-medium text-gray-400 tracking-wide">
												{getRelativeTime(item?.thoiGianBinhLuan)}
											</span>
										</div>
										<p className="w-full truncate text-base mt-1 font-light">{item?.noiDung}</p>
									</div>
								</div>
							))
						) : (
							<p>Chưa có bình luận nào.</p>
						)}
					</div>
				</div>

				{/* Những khách sạn còn trống phòng tại Four Way Travel */}
				<div className="bg-gray-200 w-3/4 mx-auto mt-2 rounded-md px-3 py-6">
					<div className="mb-4">
						<h1 className="text-black text-xl -tracking-normal font-semibold">
							Những khách sạn còn trống phòng tại Four Way Travel
						</h1>
					</div>

					<div className="flex justify-start gap-3 items-center bg-primary-xanh p-3 rounded-md">
						<img
							src="https://ik.imagekit.io/tvlk/image/imageResource/2020/04/14/1586844222168-9f81c6c60bcffcde668cf46de941aa3c.png?tr=q-75"
							alt=""
							className="w-9 h-9"
						/>
						<span className="text-white text-sm font-semibold tracking-wider">
							Phải đặt khách sạn trong thời điểm không chắc chắn này? Hãy chọn khách sạn có thể hủy miễn
							phí!
						</span>
					</div>
					{khachSan ? (
						<>
							{shuffleArrayWithoutDuplicates(khachSan, currentItemIds)
								?.slice(0, 3)
								.map((item) => (
									<>
										<div className="bg-white mt-3 px-6 py-3 rounded-md ">
											<div className="mb-3">
												<h1 className="text-xl font-extrabold">{item.title}</h1>
											</div>
											<div className="md:flex md:justify-between md:gap-4 ">
												<div className="shadow-2xl md:w-2/6 rounded-lg">
													<div className="">
														<img
															src={item.img}
															alt={item.title}
															className="w-full h-52 object-cover rounded-lg"
														/>
													</div>
												</div>

												<div className="md:w-4/6 md:h-52 shadow-2xl rounded-lg">
													<div className="px-6 md:flex md:justify-between">
														<div className="flex flex-col">
															{item.tienich?.slice(0, 3).map((tienIch) => (
																<div
																	className="flex gap-3 justify-start items-center mb-3 font-medium text-xm tracking-wider"
																	key={tienIch}
																>
																	<i
																		className={`fa-light ${checkIcon(
																			tienIch,
																		)} text-primary-xanh`}
																	></i>
																	<span>{tienIch}</span>
																</div>
															))}
														</div>

														<div className="">
															<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm  tracking-wider">
																<i className="fa-solid fa-ban text-primary-xanh"></i>
																<span>Hủy khách sạn có thu phí</span>
															</div>
															<div className="flex gap-3 justify-start items-center mb-1 font-medium text-xm text-xanhbg-primary-xanh tracking-wider">
																<i className="fa-solid fa-question text-primary-xanh"></i>
																<span>Chính sách hủy khách sạn</span>
															</div>
														</div>
														{/* <div className="">
															<p className="font-bold text-mm tracking-wider">
																/ phòng / đêm
															</p>
															<p className="font-bold text-mm tracking-wider text-xanhbg-primary-xanh">
																Giá cuối cùng
															</p>
														</div> */}
													</div>
													<div className="px-6 mt-6 md:flex md:justify-between">
														<div className="flex justify-start items-center gap-4 ">
															<i className="fa-solid fa-money-check-dollar text-primary-xanh"></i>
															<div className="text-xm font-medium tracking-wider">
																<p className="">Thanh toán khi nhận phòng</p>
																<p className="">
																	Đặt bây giờ và thanh toán khi nhận phòng!
																</p>
															</div>
														</div>
														<div className="bg-primary-xanh w-28 text-center rounded-lg">
															<button
																className="px-3 py-2 text-base text-white"
																onClick={() => {
																	setCurrentItemIds((prevItemIds) => [
																		...prevItemIds,
																		item.id,
																	]);
																	navigate(`/booking/chitiet/${item.id}`);
																}}
															>
																Xem chi tiết
															</button>
														</div>
													</div>
													<div className="w-11/12 h-0.5 bg-gray-100 m-auto mt-4"></div>
													{item.voucher ? (
														<>
															<div className="md:px-6 md:mt-6 md:flex md:justify-start md:items-center md:gap-4 px-6 mt-6 pb-5 flex justify-start items-center gap-4">
																<i className="fa-solid fa-hotel text-primary-xanh"></i>
																<p className="text-xm font-medium ">
																	Ưu đãi giờ chót - giảm {item.voucher} %
																</p>
															</div>
														</>
													) : (
														<></>
													)}
												</div>
											</div>
										</div>
									</>
								))}
						</>
					) : (
						<>
							<p>Không tìm được khách sạn</p>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default ChiTietLayout;