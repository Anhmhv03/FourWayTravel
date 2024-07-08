const ListLuutruLayout = ({
	Link
}) => {

	return (
		<>
			<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
				<span className="self-start mr-10">
					<Link
						to="/favourite"
						className="flex items-center text-blue-500 text-md hover:text-blue-700"
					>
						<i className="fa-solid fa-chevron-left"></i>
						Trước
					</Link>
				</span>
				{/* end svg */}
				<div className="w-full">
					<div className="px-4">
						<h1
							className="font-bold text-heading-xl text-grey-900"
							data-testid="favorites-page-headline"
						>
							<div className="text-3xl FavoriteAccommodationsPageContent_listName__ziyg9">
								Nơi bạn lưu trú tiếp theo
							</div>
						</h1>
						<p className="mt-1 text-grey-900 text-l">0 kỳ lưu trú đã lưu trú</p>
					</div>
					<section
						className="px-4 mx-auto max-w-screen-2xl"
						data-testid="favorites-page-items-list"
					>
						<div className="my-6 space-y-6">
							<h2 className="font-bold text-heading-m">
								Lưu, sắp xếp và so sánh nơi lưu trú bạn thích
							</h2>
							<ul className="space-y-4 text-l">
								<li className="flex items-center space-x-3">
									<span className="inline-flex flex-shrink-0 p-2 leading-none text-blue-600 transform rounded-full bg-blue-50">
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
									<div>
										<span className="pr-1 font-bold">Thu hẹp</span>
										kết quả tìm kiếm bằng cách lưu nơi lưu trú bạn thích tại đây
									</div>
								</li>
								<li className="flex items-center space-x-3">
									<span className="inline-flex flex-shrink-0 p-2 leading-none text-blue-800 transform rounded-full bg-blue-50">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											className="max-w-full max-h-full pointer-events-none"
										>
											<g
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeMiterlimit={10}
												strokeWidth={2}
											>
												<path
													vectorEffect={'non-scaling-stroke'}
													d="M8 6h12M8 12h12M8 18h12"
												></path>
											</g>
											<g fill="currentColor">
												<circle
													cx={4}
													cy={6}
													r={1}
												></circle>
												<circle
													cx={4}
													cy={12}
													r={1}
												></circle>
												<circle
													cx={4}
													cy={18}
													r={1}
												></circle>
											</g>
										</svg>
									</span>
									<div>
										Đăng nhập để lưu nơi lưu trú bạn thích và xem lại sau, cũng như
										<span className="pl-1 font-bold">tạo danh sách riêng của bạn</span>
									</div>
								</li>
								<li className="flex items-center space-x-3">
									<span className="inline-flex flex-shrink-0 p-2 leading-none text-blue-800 transform rounded-full bg-blue-50">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											className="max-w-full max-h-full pointer-events-none"
										>
											<g fill="currentColor">
												<path d="M20 6h-1v1h1v13H7v-1H6v1a1 1 0 001 1h13a1 1 0 001-1V7a1 1 0 00-1-1z"></path>
												<path d="M17 18a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v13a1 1 0 001 1zM4 17V4h13v13z"></path>
												<path d="M6.5 11H10v3.5a.5.5 0 001 0V11h3.5a.5.5 0 000-1H11V6.5a.5.5 0 00-1 0V10H6.5a.5.5 0 000 1z"></path>
											</g>
										</svg>
									</span>
									<div>
										<span className="pr-1 font-bold">So sánh</span>
										các nơi lưu trú bạn thích để chọn nơi lưu trú hoàn hảo
									</div>
								</li>
							</ul>
							<div className="flex flex-col items-start space-y-6">
								<Link
									role="link"
									tabIndex="0"
									className="inline-block px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-md"
									data-testid="favourites-list-search-stays-button"
									to='/booking'
								>
									Tìm kiếm nơi lưu trú
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default ListLuutruLayout;
