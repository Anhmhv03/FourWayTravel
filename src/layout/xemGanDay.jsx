const XemGanDayLayout = ({ currentUser, userXemGanDay, Link, handleAddToRecentlyViewed }) => {
	// Sort userXemGanDay based on lastViewed property in descending order
	const sortedUserXemGanDay = [...userXemGanDay].sort((a, b) => new Date(b.lastViewed) - new Date(a.lastViewed));

	return (
		<>
			<div className="w-3/4 mx-auto mb-4">
				<h1 className="mt-4 mb-2 text-base pl-1 py-2 font-medium leading-tight font-poppins">
					<i className="fa-solid fa-clock-rotate-left text-primary-cam "></i> Xem gần đây
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{currentUser ? (
						sortedUserXemGanDay.length ? (
							sortedUserXemGanDay.slice(0, 4).map((item, index) => {
								const formattedDate =
									item.lastViewed && typeof item.lastViewed.toDate === 'function'
										? item.lastViewed.toDate().toLocaleDateString('en-US', {
												year: 'numeric',
												month: '2-digit',
												day: '2-digit',
										  })
										: '';

								return (
									<Link
										to={`/booking/chitiet/${item.id}`}
										onClick={() =>
											handleAddToRecentlyViewed(
												item.id,
												item.tinhThanh,
												item.title,
												item.img,
												item.lastViewed,
											)
										}
										key={index}
									>
										<div className="borde-none shadow-xgd p-0 rounded-md relative grid grid-col-4">
											<div className="flex items-center col-span-1 relative">
												<div className="p-2 w-20 h-16">
													<img
														src={item.img}
														alt={item.title}
														className="rounded-sm w-full h-full object-cover"
													/>
												</div>
												<div className="flex flex-col truncatee">
													<p className="text-sm tracking-wide md:text-sm">{item.title}</p>
													<p className="text-sm tracking-wide md:text-sm ">{item.danhmuc}</p>
													<p className="text-sm tracking-wide md:text-sm font-semibold">
														{item.tinhThanh}
													</p>
												</div>
											</div>
										</div>
									</Link>
								);
							})
						) : (
							<p className="w-full col-span-2 md:col-span-4">
								Không có mục nào trong danh sách xem gần đây.
							</p>
						)
					) : (
						<p className="w-full col-span-2 md:col-span-4">
							Vui lòng đăng nhập để xem danh sách xem gần đây.
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default XemGanDayLayout;
