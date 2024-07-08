// import banner1 from '../assets/img/HOTELVIETANH.jpg';
import banner2 from '../assets/img/banner2_pnt.png';

const ProductLayout = ({
	khachsan, highestPriceDict,
	renderStars,
	Link,
	hotKhachSan,
	handleAddToRecentlyViewed,
	khachSanVip,
	styles,
}) => {

	return (
		<>
			<div className="mx-auto w-3/4 mt-4 px-0 py-0 ">
				<div className="flex justify-center items-center gap-2">
					<i className="fa-solid fa-fire text-2xl text-primary-cam"></i>
					<h1 className="my-6 text-sm md:text-3xl font-semibold tracking-wide text-center">
						Những chỗ nghỉ nổi bật được đề xuất cho quý khách
					</h1>
				</div>

				<div className="w-full">
					<div className="md:flex mb-4 gap-2 md:w-full md:flex-wrap justify-between">
						{khachsan ? (
							<>
								{hotKhachSan.slice(0, 8).map((item, index) => (
									<>
										<div
											className="md:w-w24 rounded-tl-2xl transition-all mb-3 h-340 hover:shadow-vv"
											key={index}
										>
											<Link
												to={`/booking/chitiet/${item.id}`}
												onClick={() =>
													handleAddToRecentlyViewed(
														item.id,
														item.tinhThanh,
														item.title,
														item.tienich,
														item.detail,
														item.img,
														item.lastViewed,
													)
												}
											>
												<div className="w-full">
													<img
														src={item.img}
														alt={item.title}
														className=" rounded-tl-2xl rounded-br-2xl w-full h-52 mb-0.5"
													/>
													<div className="text-black w-full p-2">
														<p className="text-sm font-semibold tracking-wide mb-0.5 w-full truncate">
															{item.title}
														</p>
														<div className=" text-xs tracking-wider">
															<div
																className="mb-1 text-md"
																style={styles}
															>
																{item.detail}
															</div>
															<div className="flex justify-start gap-2 w-full truncate text-primary-xanh">
																<i className="fa-solid fa-location-dot"></i>
																<p className="text-md">{item.diaChi}</p>
															</div>
														</div>
													</div>
												</div>
											</Link>
										</div>
									</>
								))}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
			<div className="mx-auto w-3/4 mt-4 px-0 py-0 ">
				<div className="">
					<img
						src={banner2}
						alt="Banner FourWay Travel"
						className="w-full mt-2 mx-auto  rounded-lg"
					/>
				</div>
				<div className="flex justify-center items-center gap-2">
					<i className="fa-solid fa-crown text-2xl text-primary-cam"></i>
					<h1 className="my-6 text-sm md:text-3xl font-semibold tracking-wide text-center">
						Những khách sạn sang trọng được đề xuất cho quý khách
					</h1>
				</div>

				<div className="">
					<div className="md:flex mb-4 gap-2 w-full md:flex-wrap">
						{khachsan ? (
							<>
								{khachSanVip.slice(0, 8).map((item, index) => (
									<>
										<div
											className="md:w-w24 m-auto rounded-tl-2xl transition-all mb-3 h-340 hover:shadow-vv"
											key={index}
										>
											<Link
												to={`/booking/chitiet/${item.id}`}
												onClick={() =>
													handleAddToRecentlyViewed(
														item.id,
														item.tinhThanh,
														item.title,
														item.detail,
														item.img,
														item.lastViewed,
													)
												}
											>
												<div className="w-full">
													<div className="relative">
														<img
															src={item.img}
															alt={item.title}
															className=" rounded-tl-2xl rounded-br-2xl w-full h-52 mb-0.5"
														/>
														<div className="absolute bottom-0 z-50 bg-gray-600">
															<p className="px-3 py-1 text-sm text-white">
																Giá từ: {(highestPriceDict[item.id])?.toLocaleString('vi') || 'N/A'} VND
															</p>
														</div>
													</div>
													<div className="text-black w-full p-2">
														<p className="text-sm font-semibold tracking-wide mb-0.5 w-full truncate">
															{item.title}
														</p>
														<div className=" text-xs tracking-wider">
															<div className="mb-1 text-primary-cam">
																{renderStars(item.star)}
															</div>
															<div
																className="mb-1 text-md"
																style={styles}
															>
																{item.detail}
															</div>
															<div className="flex justify-start gap-2 w-full text-primary-xanh  truncate">
																<i className="fa-solid fa-location-dot "></i>
																<p className="text-md">{item.diaChi}</p>
															</div>
														</div>
													</div>
												</div>
											</Link>
										</div>
									</>
								))}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductLayout;
