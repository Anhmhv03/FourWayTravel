export default function FooterLayout({ windowWidth, Link }) {
	return (
		<>
			{windowWidth < 720 ? (
				<>
					<footer>
						<div className="py-6 mx-auto mt-12 border-t-2 bg-5 2xl:py-14 2xl:pb-16 px-7 2xs:px-8 l:px-14 2xl:px-5">
							<div className="flex flex-col justify-between flex-shrink-0 w-3/4 mx-auto mb-6">
								<h2 className="py-4 mb-4 text-3xl font-bold text-primary-footer">FOUR WAY TRAVEL</h2>
								<div className="grid grid-cols-1 gap-4">
									<div className="flex flex-col col-span-1 gap-8">
										<div className="List1">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Công ty</h2>
											<ul className="text-sm font-medium text-primary-footer">
												<li className="mb-4">
													<Link
														to="#"
														className=" hover:underline"
													>
														Tìm hiểu
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Cơ hội làm việc
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Tin tức
													</Link>
												</li>
											</ul>
										</div>
										<div className="pt-4 border-t-2 List2">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Hỗ trợ</h2>
											<ul className="text-sm font-medium text-primary-footer">
												<li className="mb-4">
													<Link
														to="#"
														className=" hover:underline"
													>
														Cách hoạt động
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Điều khoản sự dụng
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Thông tin pháp lý
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Thông báo bảo mật
													</Link>
												</li>
											</ul>
										</div>
									</div>

									<div className="col-span-1 Input_form">
										<h2 className="mb-6 text-lg font-bold text-primary-footer">
											Tìm nguồn cảm hứng đặc biệt cho kỳ nghỉ tiếp theo của bạn - đăng ký nhận bản
											tin của chúng tôi.
										</h2>
										<form>
											<label
												htmlFor="default-search"
												className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-primary-footer"
											>
												Search
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<svg
														className="w-4 h-4 text-gray-500 dark:text-gray-400"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 20 20"
													>
														<path
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
														/>
													</svg>
												</div>
												<input
													type="search"
													id="default-search"
													className="block w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-gray-400 rounded-lg "
													placeholder="Địa chỉ email..."
													required
												/>
												<button
													type="submit"
													className="text-primary-footer absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
												>
													Đăng ký
												</button>
											</div>
										</form>
										<p className="mt-4 leading-normal text-left text-primary-footer text-s">
											Copyright 2023 FourWay Travel.
										</p>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</>
			) : (
				<>
					<footer>
						<div className="py-6 mx-auto mt-12 border-t-2 bg-5 2xl:py-14 2xl:pb-16 px-7 2xs:px-8 l:px-14 2xl:px-5">
							<div className="flex flex-col justify-between flex-shrink-0 w-3/4 mx-auto mb-6">
								<h2 className="py-4 mb-4 text-3xl font-bold text-primary-footer">FOUR WAY TRAVEL</h2>
								<div className="grid grid-cols-3 gap-4">
									<div className="flex flex-wrap col-span-1 gap-8">
										<div className="List1">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Công ty</h2>
											<ul className="text-sm font-medium text-primary-footer">
												<li className="mb-4">
													<Link
														to="/timhieu"
														className=" hover:underline"
													>
														Tìm hiểu
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="cohoi"
														className="hover:underline"
													>
														Cơ hội làm việc
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="tintuc"
														className="hover:underline"
													>
														Tin tức
													</Link>
												</li>
											</ul>
										</div>
										<div className="List2">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Hỗ trợ</h2>
											<ul className="text-sm font-medium text-primary-footer">
												<li className="mb-4">
													<Link
														to="cachhoatdong"
														className=" hover:underline"
													>
														Cách hoạt động
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="/dieukhoan"
														className="hover:underline"
													>
														Điều khoản sự dụng
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="/thongtin"
														className="hover:underline"
													>
														Thông tin pháp lý
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="thongbao"
														className="hover:underline"
													>
														Thông báo bảo mật
													</Link>
												</li>
											</ul>
										</div>
									</div>

									<div className="col-span-2 Input_form">
										<h2 className="mb-6 text-lg font-bold text-primary-footer">
											Tìm nguồn cảm hứng đặc biệt cho kỳ nghỉ tiếp theo của bạn - đăng ký nhận bản
											tin của chúng tôi.
										</h2>
										<form>
											<label
												htmlFor="default-search"
												className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-primary-footer"
											>
												Search
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<svg
														className="w-4 h-4 text-gray-500 dark:text-gray-400"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 20 20"
													>
														<path
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
														/>
													</svg>
												</div>
												<input
													type="search"
													id="default-search"
													className="block w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-gray-400 rounded-lg "
													placeholder="Địa chỉ email..."
													required
												/>
												<button
													type="submit"
													className="text-primary-footer absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
												>
													Đăng ký
												</button>
											</div>
										</form>
										<p className="mt-4 leading-normal text-left text-grey-500 text-s text-primary-footer">
											Copyright 2023 FourWay Travel.
										</p>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</>
			)}
		</>
	);
}
