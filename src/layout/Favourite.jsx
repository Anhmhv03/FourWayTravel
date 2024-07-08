const FavouriteLayout = ({ Link, userFavorites, currentUser, handleFavoriteChange, Checkbox, labelFavorite }) => {
	return (
		<>
			{currentUser ? (
				<>
					{userFavorites ? (
						<>
							<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
								<span className="self-start mr-4">
									<Link
										to="/"
										className="flex items-center text-blue-500 text-md hover:text-blue-700"
									>
										<i className="fa-solid fa-chevron-left"></i>
										Trước
									</Link>
								</span>

								<div className="px-2 w-full m-auto flex flex-col gap-1 items-start">
									<div className="px-2 w-full m-auto flex flex-wrap md:flex-nowrap gap-1 justify-start items-center">
										<h1
											className="text-md md:text-xl font-semibold  text-heading-xl text-gray-900"
											data-testid="favorites-page-headline"
										>
											Khách sạn bạn đã thích
										</h1>
										<span className="text-md md:text-xl font-semibold text-blue-600">
											({userFavorites.length} danh sách)
										</span>
									</div>

									<section
										className="w-full"
										data-testid="favorites-page-items-list"
									>
										<ul className="p-0">
											{userFavorites.map((item, index) => (
												<>
													<div
														key={item.id}
														className="w-full"
													>
														<div className="rounded-sm border p-3 flex flex-col md:flex-row justify-between item gap-5">
															<div className="w-full md:w-1/5">
																<img
																	className="w-full h-32 rounded-lg object-cover"
																	src={item.img}
																	alt={item.title}
																/>
															</div>
															<div className="w-full md:w-3/5">
																<div className="flex justify-between items-center">
																	<h1 className="font-semibold text-xl">{item.title}</h1>
																	<div className="relative Tooltip_wrapper__ameta">
																		<div
																			aria-describedby="tooltip--__1"
																			className="leading-none"
																		>
																			<button
																				type="button"
																				className="flex ml-2"
																				data-testid="accommodation-card-favorite-list-button"
																			>
																				{userFavorites.some(
																					(favorite) =>
																						favorite.id ===
																						item.id,
																				) ? (
																					<>
																						<Checkbox
																							{...labelFavorite}
																							onChange={() =>
																								handleFavoriteChange(
																									(item.id,
																										item),
																								)
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
																								handleFavoriteChange(
																									(item.id,
																										item),
																								)
																							}
																							icon={
																								<i className="fa-regular fa-heart"></i>
																							}
																							checkedIcon={
																								<i className="fa-solid fa-heart text-red-500"></i>
																							}
																						/>
																					</>
																				)}
																				<span className="sr-only">
																					Loại bỏ trong
																					danh sách yêu
																					thích
																				</span>
																			</button>
																		</div>
																	</div>
																</div>

																<div className="">
																	<p className="render text-xm font-normal text-primary-xanh flex items-center">
																		Khách Sạn

																	</p>
																</div>
																<div className="flex items-center justify-start mt-2 text-sm">
																	<span className="font-semibold text-sm mr-1">
																		<i className="fa-solid fa-location-dot text-primary-do"></i>
																	</span>
																	<p className="text-sm font-medium ">{item.diaChi} </p>
																</div>
																<div className="flex flex-wrap gap-2 mb-2">
																	{item.tienich.slice(0, 4).map((value, index) => (
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
															</div>
															<div className="w-full md:w-1/5 flex flex-row md:flex-col justify-between">
																<div className="p-2 flex flex-col w-full h-full rounded-lg bg-gray-200 justify-between ">
																	<p className="text-gray-900 text-mm w-full">
																		Kiểm tra giá và lượng lưu trú
																		vào ngày bạn chọn
																	</p>
																	<Link
																		className="text-white w-full px-3 py-2 self-end text-xs text-center font-bol rounded-lg bg-gray-500 border-b border-gray-500 hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-500 disabled:bg-gray-300 disabled:border-gray-300 "
																		to={`/booking/chitiet/${item.id}`}
																	>
																		Kiểm tra giá
																	</Link>

																</div>
															</div>
														</div>
													</div>

												</>
											))}
										</ul>
									</section>

								</div>
							</main>
						</>
					) : (
						<>
							<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
								<span className="self-start mr-10">
									<Link
										to="/"
										className="flex items-center text-blue-500 text-md hover:text-blue-700"
									>
										<i className="fa-solid fa-chevron-left"></i>
										Trước
									</Link>
								</span>

								<div className="w-full">
									<div className="px-4">
										<h1
											className="font-bold text-heading-xl text-gray-900"
											data-testid="favorites-page-headline"
										>
											Nơi lưu trú bạn đã thích
										</h1>
										<p className="mt-1 mb-3 text-m text-gray-900">0 danh sách</p>
									</div>
									<Link to="/listluutru">
										<section
											className="px-4 mx-auto max-w-screen-2xl"
											data-testid="favorites-page-items-list"
										>
											<ul className="grid grid-cols-1 gap-4 list-none l:grid-cols-3">
												<li className="flex flex-col w-full gap-2 my-3">
													<a href="/vi/fa/n%C6%A1i-b%E1%BA%A1n-l%C6%B0u-tr%C3%BA-ti%E1%BA%BFp-theo?listId=">
														<div className="relative l:max-w-xs">
															<img
																className="h-full rounded-sm cursor-pointer w-255 h-159 full wobject-cover hover:opacity-75"
																src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen,f_auto,h_150,q_auto,w_240/dummy.jpeg"
																loading="lazy"
																draggable="false"
																data-testid="favorite-list-item-element-image"
																alt="Nơi bạn lưu trú tiếp theo"
															/>
														</div>
														<p className="flex flex-wrap max-w-xs mt-2 font-semibold gap-x-2 FavoriteListItem_listName__zqNpN">
															Nơi bạn lưu trú tiếp theo
															<span className="font-normal">(0 lưu trú)</span>
														</p>
													</a>
												</li>
											</ul>
										</section>
									</Link>
								</div>
							</main>
						</>
					)}
				</>
			) : (
				<>
					<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
						<span className="self-start mr-10">
							<Link
								to="/"
								className="flex items-center text-blue-500 text-md hover:text-blue-700"
							>
								<i className="fa-solid fa-chevron-left"></i>
								Trước
							</Link>
						</span>

						<div className="flex items-center px-3 py-3 mb-5 border rounded-lg shadow-3xl border-gray-300 ">
							<span className="inline-flex p-2 mr-2 leading-none transform bg-blue-200 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									className="max-w-full max-h-full pointer-events-none"
								>
									<path
										d="M20.42 4.82A5.23 5.23 0 0016.5 3 5.37 5.37 0 0012 5.58 5.37 5.37 0 007.5 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.74 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.58-4.25zM21 9.18v.17c0 4.94-7.07 9.5-9 10.65-1.92-1.15-9-5.71-9-10.65v-.17a.41.41 0 000-.11A4.81 4.81 0 017.5 4a4.39 4.39 0 013.66 2.12L12 7.44l.84-1.32A4.39 4.39 0 0116.5 4 4.81 4.81 0 0121 9.07a.41.41 0 000 .11z"
										fill="currentColor"
									></path>
								</svg>
							</span>
							<section>
								<h2 className="font-bold text-heading-m text-gray-900">
									Theo dõi nơi lưu trú bạn thích
								</h2>
								<p className="text-m ">
									<button
										id="favorites-login"
										className="px-1 text-blue-800 cursor-pointer hover:underline "
									>
										Đăng nhập hoặc tạo tài khoản
									</button>
									để lưu nơi lưu trú bạn thích vào tài khoản và tạo danh sách riêng của mình.
								</p>
							</section>
						</div>
					</main>
				</>
			)}
		</>
	);
};

export default FavouriteLayout;
