// import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/css/Scrollbar.css';

const SearchList = () => {
	return (
		<>
			<div className="fresnel-container fresnel-lessThan-l "></div>
			<div className="fresnel-container fresnel-between-l-2xl "></div>
			<div className="fresnel-container fresnel-greaterThanOrEqual-2xl w-full">
				<div className="mx-auto py-6 Wrapper_content__FmHBo px-7 2xs:px-8 l:px-14 2xl:px-5 w-78">
					{/* <div className="grid grid-cols-2 gap-x-4"> */}
					<div className="flex flex-wrap gap-2.5 flex-auto w-full sm:flex-nowrap">
						<section className="w-full sm:w-1/2">
							<h2
								className="text-heading-l text-2xl font-bold mb-3 px-3 l:px-4 2xl:px-0"
								id="more-popular-searches"
							>
								Tìm kiếm phổ biến miền bắc
							</h2>
							<div className="h-64 relative rounded-lg py-4 overflow-hidden px-4 bg-grey-200 p-2.5 bg-2">
								<div className="overflow-auto ScrollContainer_scrollbar__S7Lrn h-full ScrollContainer_white__Ot9KQ">
									<div className="mb-6">
										<ul
											aria-labelledby="more-popular-searches"
											className="grid gap-x-2 gap-y-3 grid-cols-2"
										>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Hà Nội
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Quảng Ninh
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Vĩnh Phúc
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bắc Ninh
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Hải Dương
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Hải Phòng
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Hưng Yên
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Thái Bình
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Hà Nam
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Nam Định
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Ninh Bình
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Hà Giang
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Cao Bằng
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Lào Cai
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bắc Kạn
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Lạng Sơn
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Tuyên Quang
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Yên Bái
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Thái Nguyên
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Điện Biên
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t ml-3 mr-4 mb-4 from-grey-200"></div>
							</div>
						</section>
						<section className="w-full sm:w-1/2">
							<h2
								className="text-heading-l text-2xl font-bold mb-3 px-3 l:px-4 2xl:px-0"
								id="international-sites"
							>
								Tìm kiếm phổ biến miền trung
							</h2>
							<div className="h-64 relative rounded-lg py-4 overflow-hidden px-4 bg-grey-200 p-2.5 bg-2">
								<div className="overflow-auto ScrollContainer_scrollbar__S7Lrn h-full ScrollContainer_white__Ot9KQ">
									<div className="mb-6">
										<ul
											aria-labelledby="international-sites"
											className="grid gap-x-2 gap-y-3 grid-cols-2"
										>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Thanh Hóa
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Nghệ An
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Hà Tĩnh
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Quảng Bình
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Quảng Trị
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Thừa Thiên-Huế
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Đà Nẵng
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Quảng Nam
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Quảng Ngãi
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bình Định
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Phú Yên
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Khánh Hòa
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Ninh Thuận
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bình Thuận
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Lâm Đồng
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Gia Lai
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Kon Tom
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Đắk Lắk
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Đắk Nông
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className=""></div>
							</div>
						</section>
						<section className="w-full sm:w-1/2">
							<h2
								className="text-heading-l text-2xl font-bold mb-3 px-3 l:px-4 2xl:px-0"
								id="international-sites"
							>
								Tìm kiếm phổ biến miền nam
							</h2>
							<div className="h-64 relative rounded-lg py-4 overflow-hidden px-4 bg-grey-200 p-2.5 bg-2">
								<div className="overflow-auto ScrollContainer_scrollbar__S7Lrn h-full ScrollContainer_white__Ot9KQ">
									<div className="mb-6">
										<ul
											aria-labelledby="international-sites"
											className="grid gap-x-2 gap-y-3 grid-cols-2"
										>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Cần Thơ
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bình Dương
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Đồng Nai
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn TP. Hồ Chí Minh
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bà Rịa Vũng Tàu
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Long An
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Đồng Tháp
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Tiền Giang
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn An Giang
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bến Tre
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Vĩnh Long
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Tây Ninh
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bình Phước
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Trà Vinh
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Hậu Giang
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Kiên Giang
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Sóc Trăng
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Bạc Liêu
												</Link>
											</li>
											<li>
												<Link
													to=""
													className="block max-w-full text-xm text-m font-bold truncate"
												>
													Khách sạn Cà Mau
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className=""></div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchList;
