export default function MenuLayOut({
	Logo, Link,
	Button, Menu, MenuItem, Box, Typography,
	anchorEl, open, handleClick, handleClose,

	ITEM_HEIGHT,

	styleModal, Modal, openModal, handleOpenModal, handleCloseModal,

	Login, user, signOut, anchorE4, open4, handleClick4, handleClose4,

}) {
	return (
		<>
			<div className="mx-auto border-2 w-full relative">
				<div className="fresnel-container fresnel-lessThan-2xl w-3/4 mx-auto">
					<header className="flex justify-evenly items-center h-14 ">
						<Link to="/">
							<img
								src={Logo}
								alt="Logo FourWay Travel"
								className="object-contain w-auto h-10 relative"
							/>
						</Link>
						<nav className="h-full self-end ml-auto">
							<ul className="flex h-full s:mr-0 text-grey-900">
								{/* Yêu thích */}
								<li className="h-full list-none flex relative">
									<div className="flex justify-center">
										<Link
											to="/favourite"
											className="flex w-full items-center h-full cursor-pointer hover:bg-grey-200 px-2"
										>
											<Button>
												<i className="fa-regular fa-heart text-black leading-none inline-flex transform text-lg md:text-sm"></i>
												<span className="hidden md:flex text-sm text-black space-nowrap pl-2 normal-case">
													Yêu thích
												</span>
											</Button>
										</Link>
									</div>
								</li>

								{/* Login */}
								{user ? (
									<>
										<li className="h-full list-none flex relative">
											<div className="flex justify-center">
												<Button
													className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4"
													id="user-button"
													aria-controls={open4 ? 'user-menu' : undefined}
													aria-expanded={open4 ? 'true' : undefined}
													aria-haspopup="true"
													onClick={handleClick4}
												>
													<div className="flex items-center justify-center py-2">
														<img className="flex items-center h-8 w-8 rounded-full ring-2"
															src={user.photoURL} alt={user.displayName} />
													</div>
												</Button>
											</div>
											<Menu
												id="user-menu"
												MenuListProps={{
													'aria-labelledby': 'user-button',
												}}
												anchorEl={anchorE4}
												open={open4}
												onClose={handleClose4}
												PaperProps={{
													style: {
														maxHeight: ITEM_HEIGHT * 4.5,
														width: '21ch',
													},
												}}
											>
												<span className="flex items-center justify-center text-sm text-black space-nowrap mx-2 py-2 normal-case truncate">
													{user.displayName}
												</span>
												<MenuItem>
													<Button onClick={signOut}
														className="border-t mt-2 border-2 border-gray-900 flex items-center justify-center w-full">
														<span>Đăng xuất</span>
													</Button>
												</MenuItem>
											</Menu>

										</li>
									</>
								) : (
									<>
										<li className="h-full list-none flex relative">
											<div className="flex justify-center">
												<Button
													onClick={handleOpenModal}
													className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4"
												>
													<i className="fa-regular fa-circle-user leading-none inline-flex transform text-black text-lg md:text-sm"></i>
													<span className="hidden md:flex text-xs md:text-sm text-black space-nowrap mx-2 normal-case truncate">
														Đăng nhập
													</span>
												</Button>
											</div>
											<Modal
												open={openModal}
												onClose={handleCloseModal}
												aria-labelledby="modal-modal-title"
												aria-describedby="modal-modal-description"
											>
												<Box sx={styleModal}>
													<Typography
														id="modal-modal-title"
														variant="h6"
														component="h2"
													>
														<span className="font-bold">Đăng nhập</span>
													</Typography>
													<Typography
														id="modal-modal-description"
														sx={{ mt: 2 }}
														component="div"
													>
														<form>
															<div className="mb-6">
																<label
																	htmlFor="email"
																	className="block mb-2 text-sm font-bold text-black"
																>
																	Tài khoản email
																</label>
																<input
																	type="email"
																	id="email"
																	className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500"
																	placeholder="name@flowbite.com"
																	required
																/>
															</div>
															<div className="mb-6">
																<label
																	htmlFor="password"
																	className="block mb-2 text-sm font-bold text-black"
																>
																	Mật khẩu
																</label>
																<input
																	type="password"
																	id="password"
																	className="bg-white border  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500"
																	required
																/>
															</div>
															<div className="flex items-start mb-6">
																<div className="flex items-center h-5">
																	<input
																		id="remember"
																		type="checkbox"
																		defaultValue
																		className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
																		required
																	/>
																</div>
																<label
																	htmlFor="remember"
																	className="ml-2 text-sm font-medium text-gray-900"
																>
																	Remember me
																</label>
															</div>
															<button
																type="submit"
																className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
															>
																Submit
															</button>
														</form>
													</Typography>
													<hr className="mt-2" />
													<Login />
												</Box>
											</Modal>
										</li>
									</>
								)
								}
								{/* Menu */}
								<li className="h-full list-none flex relative">
									<Button
										id="menu-btn"
										aria-controls={open ? 'menu-btn' : undefined}
										aria-haspopup="true"
										aria-expanded={open ? 'true' : undefined}
										onClick={handleClick}
									>
										<i className="fa-solid fa-bars leading-none inline-flex transform text-black text-lg md:text-sm"></i>
										<span className="hidden md:flex text-sm text-black space-nowrap pl-2 normal-case">
											Menu
										</span>
									</Button>
									<Menu
										id="menu-btn"
										anchorEl={anchorEl}
										open={open}
										onClose={handleClose}
										MenuListProps={{
											'aria-labelledby': 'menu-btn',
										}}
									>
										<div className="flex flex-col justify-start">
											{user ?
												(
													<>
														<Link
															// onClick={handleClose}
															to='/xemganday'
															className="w-full border-b py-2 px-4 text-left hover:text-blue-500"
														>
															<i className="fa-solid fa-clock-rotate-left"></i> Xem gần đây
														</Link>
														<Link
															// onClick={handleClose}
															to='/lichsudatphong'
															className="w-full border-b py-2 px-4 text-left hover:text-blue-500"
														>
															<i className="fa-regular fa-bookmark"></i> Lịch sử đặt hàng
														</Link>
													</>
												) : (
													<></>
												)
											}

											<button
												onClick={handleClose}
												className="w-full py-2 px-4 text-left hover:text-blue-500"
											>
												<i className="fa-light fa-life-ring"></i> Hỗ trợ và trợ giúp
											</button>
										</div>
									</Menu>
								</li>
							</ul>
						</nav>
					</header>
				</div>
			</div>

		</>
	);
}