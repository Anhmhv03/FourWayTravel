import 'flowbite';
import { useEffect, useMemo, useState } from 'react';
const BookingLayout = ({
	khachsan,
	filterKhachSan = [],
	getRatingText, Link,
	handleFavoriteChange, Checkbox,
	labelFavorite, userFavorites,
	handleAddToRecentlyViewed,
	selectedTinhThanh, selectedVungMien,
	filterDiaDanh, vungMien, regionDict,
	phong = [], findCheapestRoom,
}) => {
	// useMemo to get the cheapest room name for each hotel
	const cheapestRooms = useMemo(() => {
		return filterKhachSan.reduce((acc, hotel) => {
			const cheapestRoom = findCheapestRoom(phong, [hotel]);
			acc[hotel.id] = cheapestRoom ? cheapestRoom.tenPhong : 'Không có phòng';
			return acc;
		}, {});
	}, [filterKhachSan, phong, findCheapestRoom]);

	// limit load khách sạn
	const [numHotelsDisplayed, setNumHotelsDisplayed] = useState(4);
	const numHotelsPerPage = 4; // Số lượng khách sạn mỗi lần hiển thị thêm
	const [searchQuery, setSearchQuery] = useState('');
	const [khachSanList, setKhachSanList] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		// Filter the khachSanList based on the searchQuery
		const filteredResults = filterKhachSan.filter((item) =>
			item.title.toLowerCase().includes(searchQuery.toLowerCase())
		);

		setSearchResults(filteredResults);
	}, [searchQuery, khachSanList]);

	// Đếm số phòng
	const demPhong = (idKS) => {
		const filteredPhongKS = phong.filter((item) => item.khachSanId === idKS);
		let totalAvailableRooms = 0;
		totalAvailableRooms = filteredPhongKS.reduce((total, room) => {
			if (typeof room.trangThaiPhong === 'string') {
				if (room.trangThaiPhong === 'Trống') {
					return total;
				} else {
					return ++total;
				}
			} else {
				if (room.trangThaiPhong.lichSuDatPhong?.some((item) => item.trangThai) === true) {
					return ++total;
				} else {
					return total;
				}
			}
		}, 0);
		return filteredPhongKS.length - totalAvailableRooms;
	}


	return (
		<>

			<div className=" w-3/4 mx-auto mt-6">
				<input
					className='input_search translucent-bg block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					type="text"
					placeholder="Tìm kiếm theo tên..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				{/* Filter vùng miền */}
				{selectedVungMien && selectedVungMien?.tenVungMien && (
					<h1 className="mt-4 w-full font-semibold text-md tracking-normal mb-2">
						Khu vực :
						<button
							className={`
							py-1.5 mx-2 mb-2 text-sm font-medium text-gray-900 
											focus:outline-none rounded-lg
						`}
						>
							<Link to={`/booking/`}>ALL</Link>
						</button>
						<button
							className={`
							py-1.5 ml-2 px-4  mb-2 text-sm font-medium
							text-white bg-gray-400 outline-none 
							focus:outline-none rounded-md 
							 active:text-blue-700
						`}
						>
							{selectedVungMien.tenVungMien}
						</button>
						{Array.isArray(vungMien) &&
							vungMien
								.filter((item) => item.tenVungMien !== selectedVungMien.tenVungMien)
								.map((item, index) => (
									<>
										<Link to={`/booking/${regionDict[item.tenVungMien]}`}>
											<button
												key={index}
												className={`
											py-1.5 px-2 me-2 mb-2 text-sm font-medium text-gray-900 
											focus:outline-none rounded-lg
										
										`}
											>
												{item.tenVungMien}
											</button>
										</Link>
									</>
								))}
					</h1>
				)}
				{!selectedVungMien?.tenVungMien && (
					<>
						<h1 className="mt-4 w-full font-semibold text-md tracking-normal mb-2">
							Xem tất cả khu vực :
							<button
								className={`
									py-1.5 ml-2 px-2 me-2 mb-2 text-sm font-medium
									text-white bg-gray-400 outline-none 
									focus:outline-none rounded-md 
									active:text-blue-700
								`}
							>
								ALL
							</button>
							{Array.isArray(vungMien) &&
								vungMien.map((item, index) => (
									<>
										<Link to={`/booking/${regionDict[item.tenVungMien]}/`}>
											<button
												key={index}
												className={`
												py-1.5 px-1 mb-2 text-sm font-medium text-gray-900 
											focus:outline-none rounded-lg
										`}
											>
												{item.tenVungMien}
											</button>
										</Link>
									</>
								))}
						</h1>
					</>
				)}

				{/* Filter tỉnh thành */}
				{selectedTinhThanh && selectedTinhThanh.tenTinhThanh && (
					<div className="mt-4 w-full font-semibold text-md tracking-normal mb-5 flex items-center flex-wrap">
						<h1 className="mb-2">Khách sạn tại :</h1>
						<button
							className={`
							py-1.5 px-2 me-2 mb-2 text-sm font-medium text-gray-900 
											focus:outline-none rounded-lg
						`}
						>
							<Link to={`/booking/${regionDict[selectedTinhThanh.vungMien]}/`}>ALL</Link>
						</button>
						<button
							className={`
							py-1.5 ml-2 px-2 me-2 mb-2 text-sm font-medium
							text-white bg-gray-400 outline-none 
							focus:outline-none rounded-md 
							 active:text-blue-700
						`}
						>
							{selectedTinhThanh.tenTinhThanh}
						</button>

						{filterDiaDanh
							.filter((item) => item.tenTinhThanh !== selectedTinhThanh.tenTinhThanh)
							.map((item, index) => (
								<>
									<Link to={`/booking/${regionDict[item.vungMien]}/${item?.id}`}>
										<button
											key={index}
											className={`
											py-1.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 
											focus:outline-none rounded-lg0 
									`}
										>
											{item.tenTinhThanh}
										</button>
									</Link>
								</>
							))}
					</div>
				)}
				{!selectedTinhThanh?.tenTinhThanh && (
					<>
						<div className="mt-4 w-full font-semibold text-md tracking-normal mb-5 flex items-center flex-wrap">
							<h1 className="mb-2">Xem tất cả khách sạn :</h1>
							<button
								className={`
									py-1.5 ml-2 px-2 me-2 mb-2 text-sm font-medium
									text-white bg-gray-400 outline-none 
									focus:outline-none rounded-md 
									active:text-blue-700
								`}
							>
								ALL
							</button>
							{filterDiaDanh.map((item, index) => (
								<>
									<Link to={`/booking/${regionDict[item.vungMien]}/${item?.id}`}>
										<button
											key={index}
											className={`
												py-1.5 px-2 me-2 mb-2 text-sm font-medium text-gray-900 
												focus:outline-none rounded-lg
											`}
										>
											{item.tenTinhThanh}
										</button>
									</Link>
								</>
							))}
						</div>
					</>
				)}
				{searchQuery && (
					<>
						{/* Display search results */}
						{searchResults.length > 0 ? (
							searchResults.slice(0, numHotelsDisplayed).map((item) => (
								<div key={item.id} className="mt-2 bg-white rounded-lg mb-4 h-auto shadow-product hover:scale-103 transition ease-in-out delay-50 duration-200">
									<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
										<div className="col-span-1">
											<img
												src={item.img}
												alt={item.title}
												className="rounded-t-lg md:rounded-l-lg md:rounded-t-none md:rounded-tl-lg w-full h-48 md:h-full object-cover"
											/>
										</div>
										<div className="ml-3 md:ml-0 col-span-1 md:col-span-2">
											<div className="mt-2">
												<div className="flex items-center justify-between">
													<Link
														to={`/booking/chitiet/${item.id}`}
														className="font-semibold text-lg"
														onClick={() =>
															handleAddToRecentlyViewed(
																item.id,
																item.tinhThanh,
																item.title,
																item.img,
																item.lastViewed,
															)
														}
													>
														{item.title}
													</Link>
													{userFavorites.some((favorite) => favorite.id === item.id) ? (
														<Checkbox
															{...labelFavorite}
															onChange={() => handleFavoriteChange(item.id, item)}
															icon={<i className="fa-solid fa-heart text-red-500"></i>}
															checkedIcon={<i className="fa-regular fa-heart"></i>}
														/>
													) : (
														<Checkbox
															{...labelFavorite}
															onChange={() => handleFavoriteChange(item.id, item)}
															icon={<i className="fa-regular fa-heart"></i>}
															checkedIcon={<i className="fa-solid fa-heart text-red-500"></i>}
														/>
													)}
												</div>
											</div>
											<div className="flex items-center justify-start mt-2 text-sm">
												<span className="font-semibold text-sm mr-1">
													<i className="fa-solid fa-star mb-1 mr-1 text-primary-cam"></i>
													{item.star} - {getRatingText(item.star)}
												</span>
											</div>
											<div className="flex items-center justify-start mt-2 text-sm">
												<span className="text-sm mr-1">
													<span className="font-semibold"> Địa chỉ: </span>
													{item.diaChi}
												</span>
											</div>
											<div className="flex flex-wrap gap-2 mb-2">
												{item.tienich?.slice(0, 4).map((value, index) => (
													<div key={index} className="w-auto h-8 border-none bg-gray-200 rounded-lg mt-1">
														<div className="flex justify-start items-center  pt-1 text-mm gap-1">
															<div className="p-1">{value} </div>
														</div>
													</div>
												))}
											</div>
										</div>
										<div className="block m-2 col-span-1 md:col-span-2 relative">
											<div className="flex flex-col w-auto rounded-lg border-none bg-gray-200">
												<div className="flex flex-wrap items-center gap-1 mt-1 ml-3 text-xs">
													<p className="border-none rounded-lg mt-1">Gần đây:</p>
													{item.diaDiemGanDay?.slice(0, 2).map((value, index) => (
														<div key={index} className="w-auto border-none rounded-lg">
															<div className="flex justify-start items-center pt-1 text-mm truncate">
																{index > 0 && <span>,</span>}
																<div className="p-1">{value}</div>
															</div>
														</div>
													))}
												</div>
												<div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-2 ">
													<span className="flex items-center text-sm font-medium mr-4">
														{cheapestRooms[item.id]}
														<i className="fa-solid fa-user ml-2"></i>
													</span>
													{/* {demPhong(item.id) > 0 ? (
														<div className="">
															<p className="text-sm font-semibold text-primary-cam">
																Còn {demPhong(item.id)} phòng
															</p>
														</div>
													) : (
														<></>
													)} */}
												</div>
											</div>
											<div className="w-full h-14 border-none rounded-lg py-2 mt-3 flex gap-2 flex-wrap bg-primary-xanh transition-all hover:opacity-80">
												<Link
													to={`/booking/chitiet/${item.id}`}
													className="w-full flex items-center justify-center h-11 rounded-md"
													onClick={() =>
														handleAddToRecentlyViewed(
															item.id,
															item.tinhThanh,
															item.title,
															item.img,
															item.lastViewed,
														)
													}
												>
													<p className="text-white font-light text-base">
														Xem chi tiết
													</p>
												</Link>
											</div>
										</div>
									</div>
								</div>
							))
						) : (
							<p>Không có kết quả tìm kiếm phù hợp.</p>
						)}
					</>
				)}

				{khachsan ? (
					<>
						{!selectedTinhThanh?.tenTinhThanh || !selectedTinhThanh ? (
							<>
								{khachsan.slice(0, numHotelsDisplayed).map((item) => (
									<>
										<div className="mt-2 bg-white rounded-lg mb-4 h-auto shadow-product hover:scale-103 transition ease-in-out delay-50 duration-200">
											<div
												key={item.id}
												className="grid grid-cols-1 md:grid-cols-5 gap-8"
											>
												<div className="col-span-1">
													<img
														src={item.img}
														alt={item.title}
														className="rounded-t-lg md:rounded-l-lg md:rounded-t-none md:rounded-tl-lg w-full h-48 md:h-full object-cover"
													/>
												</div>
												<div className="ml-3 md:ml-0 col-span-1 md:col-span-2">
													<div className="mt-2">
														<div className="flex items-center justify-between">
															<Link
																to={`/booking/chitiet/${item.id}`}
																className="font-semibold text-lg"
																onClick={() =>
																	handleAddToRecentlyViewed(
																		item.id,
																		item.tinhThanh,
																		item.title,
																		item.img,
																		item.lastViewed,
																	)
																}
															>
																{item.title}
															</Link>

															{/* Yêu thích */}
															{userFavorites.some(
																(favorite) => favorite.id === item.id,
															) ? (
																<>
																	<Checkbox
																		{...labelFavorite}
																		onChange={() =>
																			handleFavoriteChange((item.id, item))
																		}
																		icon={
																			<i className="fa-solid fa-heart text-red-500"></i>
																		}
																		checkedIcon={
																			<i className="fa-regular fa-heart"></i>
																		}
																	/>
																</>
															) : (
																<>
																	<Checkbox
																		{...labelFavorite}
																		onChange={() =>
																			handleFavoriteChange((item.id, item))
																		}
																		icon={<i className="fa-regular fa-heart"></i>}
																		checkedIcon={
																			<i className="fa-solid fa-heart text-red-500"></i>
																		}
																	/>
																</>
															)}
														</div>
													</div>

													<div className="flex items-center justify-start mt-2 text-sm">
														<span className="font-semibold text-sm mr-1">
															<i className="fa-solid fa-star mb-1 mr-1 text-primary-cam"></i>
															{item.star} - {getRatingText(item.star)}
														</span>
														{/* <p className="text-sm">(30 đánh giá)</p> */}
													</div>
													<div className="flex items-center justify-start mt-2 text-sm">
														<span className=" text-sm mr-1">
															<span className="font-semibold"> Địa chỉ: </span>
															{item.diaChi}
														</span>
													</div>
													{/* <span className="text-sm font-semibold">Tiện ích:</span> */}
													<div className="flex flex-wrap gap-2 mb-2">
														{item.tienich?.slice(0, 4).map((value, index) => (
															<div
																key={index}
																className="w-auto h-8 border-none bg-gray-200 rounded-lg mt-1 "
															>
																<div className="flex justify-start items-center  pt-1 text-mm gap-1">
																	<div className="p-1">{value} </div>
																</div>
															</div>
														))}
													</div>
													{/* <button onClick={handleOpen}>Tiện ích</button> */}
												</div>
												<div className="block m-2 col-span-1 md:col-span-2 relative">
													<div className="flex flex-col w-auto rounded-lg border-none bg-gray-200">
														<div className="flex flex-wrap items-center gap-1 mt-1 ml-3 text-xs">
															<p className="border-none rounded-lg mt-1">Gần đây:</p>
															{item.diaDiemGanDay?.slice(0, 2).map((value, index) => (
																<div
																	key={index}
																	className="w-auto border-none rounded-lg"
																>
																	<div className="flex justify-start items-center pt-1 text-mm truncate">
																		{/* Kiểm tra nếu không phải là mục đầu tiên, thêm dấu phẩy */}
																		{index > 0 && <span>,</span>}
																		<div className="p-1">{value}</div>
																	</div>
																</div>
															))}
														</div>

														<div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-2 ">
															<span className="flex items-center text-sm font-medium mr-4">
																{cheapestRooms[item.id]}
																<i className="fa-solid fa-user ml-2"></i>
															</span>
															{/* {demPhong(item.id) > 0 ? (
																<div className="">
																	<p className="text-sm font-semibold text-primary-cam">
																		Còn {demPhong(item.id)} phòng
																	</p>
																</div>
															) : (
																<></>
															)} */}
														</div>
														{/* <div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-1">
															{lowestPriceDict[item.id] > 0 ? (
																<>
																	<span className="flex text-md font-semibold mr-4">
																		{lowestPriceDict[item.id]?.toLocaleString(
																			'vi',
																		) + ' VNĐ'}
																	</span>
																</>
															) : (
																<></>
															)}
														</div> */}
													</div>
													<div className="w-full h-14 border-none rounded-lg py-2 mt-3 flex gap-2 flex-wrap bg-primary-xanh transition-all hover:opacity-80">
														<Link
															to={`/booking/chitiet/${item.id}`}
															className="w-full flex items-center justify-center h-11 rounded-md"
															onClick={() =>
																handleAddToRecentlyViewed(
																	item.id,
																	item.tinhThanh,
																	item.title,
																	item.img,
																	item.lastViewed,
																)
															}
														>
															<p className="text-white font-light text-base">
																Xem chi tiết
															</p>
														</Link>
													</div>
												</div>
											</div>
										</div>

									</>
								))}
								<button
									className={`
												py-2.5 ml-2 px-4 me-2 mb-2 text-sm font-medium
												focus:outline-none bg-blue-500 rounded-lg border 
												hover:bg-blue-700 active:text-blue-700 focus:z-10 focus:ring-4
											`}
									onClick={() => {
										// Tăng số lượng khách sạn đã được hiển thị lên numHotelsPerPage
										setNumHotelsDisplayed(numHotelsDisplayed + numHotelsPerPage);
									}}
								>
									Xem thêm
								</button>
							</>
						) : (
							<>
								{filterKhachSan.slice(0, numHotelsDisplayed).map((item) => (
									<>
										<div className="mt-2 bg-white rounded-lg mb-4 h-auto shadow-product hover:scale-103 transition ease-in-out delay-50 duration-200">
											<div
												key={item.id}
												className="grid grid-cols-1 md:grid-cols-5 gap-8"
											>
												<div className="col-span-1">
													<img
														src={item.img}
														alt={item.title}
														className="rounded-t-lg md:rounded-l-lg md:rounded-t-none md:rounded-tl-lg w-full h-48 md:h-full object-cover"
													/>
												</div>
												<div className="ml-3 md:ml-0 col-span-1 md:col-span-2">
													<div className="mt-2">
														<div className="flex items-center justify-between">
															<Link
																to={`/booking/chitiet/${item.id}`}
																className="font-semibold text-lg"
																onClick={() =>
																	handleAddToRecentlyViewed(
																		item.id,
																		item.tinhThanh,
																		item.title,
																		item.img,
																		item.lastViewed,
																	)
																}
															>
																{item.title}
															</Link>

															{/* Yêu thích */}
															{userFavorites.some(
																(favorite) => favorite.id === item.id,
															) ? (
																<>
																	<Checkbox
																		{...labelFavorite}
																		onChange={() =>
																			handleFavoriteChange((item.id, item))
																		}
																		icon={
																			<i className="fa-solid fa-heart text-red-500"></i>
																		}
																		checkedIcon={
																			<i className="fa-regular fa-heart"></i>
																		}
																	/>
																</>
															) : (
																<>
																	<Checkbox
																		{...labelFavorite}
																		onChange={() =>
																			handleFavoriteChange((item.id, item))
																		}
																		icon={<i className="fa-regular fa-heart"></i>}
																		checkedIcon={
																			<i className="fa-solid fa-heart text-red-500"></i>
																		}
																	/>
																</>
															)}
														</div>
													</div>

													<div className="flex items-center justify-start mt-2 text-sm">
														<span className="font-semibold text-sm mr-1">
															<i className="fa-solid fa-star mb-1 mr-1 text-primary-cam"></i>
															{item.star} - {getRatingText(item.star)}
														</span>
														{/* <p className="text-sm">(30 đánh giá)</p> */}
													</div>
													<div className="flex items-center justify-start mt-2 text-sm">
														<span className=" text-sm mr-1">
															<span className="font-semibold"> Địa chỉ: </span>
															{item.diaChi}
														</span>
													</div>
													{/* <span className="text-sm font-semibold">Tiện ích:</span> */}
													<div className="flex flex-wrap gap-2 mb-2">
														{item.tienich?.slice(0, 4).map((value, index) => (
															<div
																key={index}
																className="w-auto h-8 border-none bg-gray-200 rounded-lg mt-1 "
															>
																<div className="flex justify-start items-center  pt-1 text-mm gap-1">
																	<div className="p-1">{value} </div>
																</div>
															</div>
														))}
													</div>
													{/* <button onClick={handleOpen}>Tiện ích</button> */}
												</div>
												<div className="block m-2 col-span-1 md:col-span-2 relative">
													<div className="flex flex-col w-auto rounded-lg border-none bg-gray-200">
														<div className="flex flex-wrap items-center gap-1 mt-1 ml-3 text-xs">
															<p className="border-none rounded-lg mt-1">Gần đây:</p>
															{item.diaDiemGanDay?.slice(0, 2).map((value, index) => (
																<div
																	key={index}
																	className="w-auto border-none rounded-lg"
																>
																	<div className="flex justify-start items-center pt-1 text-mm truncate">
																		{/* Kiểm tra nếu không phải là mục đầu tiên, thêm dấu phẩy */}
																		{index > 0 && <span>,</span>}
																		<div className="p-1">{value}</div>
																	</div>
																</div>
															))}
														</div>
														<div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-2">
															<span className="flex opacity text-sm font-medium items-center mr-4 w-1/2 truncate">
																{cheapestRooms[item.id]}
																<i className="fa-solid fa-user mb-0.5 ml-2"></i>
															</span>
														</div>
														{/* <div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-1 gap-2">
															<span className=" font-bold text-lg">
																{lowestPriceDict[item.id] > 0 ? (
																	<>
																		<span className="flex text-md font-semibold mr-4">
																			{lowestPriceDict[item.id]?.toLocaleString(
																				'vi',
																			) + ' VNĐ'}
																		</span>
																	</>
																) : (
																	<></>
																)}
															</span>
														</div> */}
													</div>
													<div className="w-full h-14 border-none rounded-lg py-2 mt-3 flex gap-2 flex-wrap bg-primary-xanh transition-all hover:opacity-80">
														<Link
															to={`/booking/chitiet/${item.id}`}
															className="w-full flex items-center justify-center h-11 rounded-md"
															onClick={() =>
																handleAddToRecentlyViewed(
																	item.id,
																	item.tinhThanh,
																	item.title,
																	item.img,
																	item.lastViewed,
																)
															}
														>
															<p className="text-white font-light text-base">
																Xem chi tiết
															</p>
														</Link>
													</div>
												</div>
											</div>
										</div>

									</>
								))}
								<button
									className={`
												py-2.5 ml-2 px-4 me-2 mb-2 text-sm font-medium
												focus:outline-none bg-blue-500 rounded-lg border 
												hover:bg-blue-700 active:text-blue-700 focus:z-10 focus:ring-4
											`}
									onClick={() => {
										// Tăng số lượng khách sạn đã được hiển thị lên numHotelsPerPage
										setNumHotelsDisplayed(numHotelsDisplayed + numHotelsPerPage);
									}}
								>
									Xem thêm
								</button>
							</>
						)}
					</>
				) : (
					<>
						<p>Không tìm được phòng</p>
					</>
				)}
			</div>
		</>
	);
};

export default BookingLayout;
