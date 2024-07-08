export default function SearchBarLayout({
	// Box,
	Link,
	// FormControl,
	// diadanh,
	onAddressChange,
	isBookingPage,
	filterAddress,
	setFilterAddress,
	address,
	// Select,
	// MenuItem,
	// OutlinedInput,
	// MenuProps,
	getStyles,
	theme,
	vungMien,
	mien,
	filterMien,
	setFilterMien,
	onMienChange,
	filterDiaDanh,
}) {
	return (
		<>
			<div className="md:w-2/4  mt-2 border-none mb-2 z-50 md:sticky top-0 left-0 right-0">
				<div
					className=" w-full overflow-hidden rounded-lg"
					data-testid="search-form"
				>
					<div className="md:flex md:justify-between md:gap-5">
						{/* Vùng miền */}
						<button
							type="button"
							data-testid="search-form-destination"
							className="w-full rounded-md col-span-1 md:col-span-3 pl-5 pr-11 h-12 mb-2 md:pr-5 text-left truncate bg-white group "
						>
							<span className="flex items-center justify-center 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span className="relative flex flex-col justify-center w-full truncate">
									<div className="w-full">
										<select
											className="outline-none w-full border-none text-gray-500"
											value={isBookingPage ? filterMien : undefined}
											defaultValue={[]}
											onChange={
												isBookingPage ? (e) => setFilterMien(e.target.value) : onMienChange
											}
										>
											<option
												disabled
												value=""
												className="bg-white hover:bg-gray-100 text-gray-500"
											>
												<i className="fa-solid fa-earth-asia mr-2"></i>
												<em>Chọn vùng miền</em>
											</option>
											<option value="">Xem tất cả vùng miền</option>

											{vungMien.map((vung) => (
												<option
													key={vung.id}
													value={`${vung.id}`}
													className="text-gray-700 bg-white hover:bg-gray-100"
													style={getStyles(vung.tenVungMien, vung.tenVungMien, theme)}
												>
													{vung.tenVungMien}
												</option>
											))}
										</select>
									</div>
								</span>
							</span>
						</button>
						{/* Địa danh */}
						<button
							type="button"
							data-testid="search-form-destination"
							className="w-full rounded-md col-span-1 md:col-span-4 mb-2 px-12 md:px-5 text-left truncate bg-white group h-12 "
						>
							<span className="flex items-center justify-center 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span className="relative flex flex-col justify-center w-full truncate">
									<div className="w-full">
										<select
											className="outline-none w-full text-gray-500"
											value={isBookingPage ? filterAddress : undefined}
											defaultValue={[]}
											onChange={
												isBookingPage
													? (e) => setFilterAddress(e.target.value)
													: onAddressChange
											}
										>
											<option
												disabled
												value=""
												className="text-gray-700 bg-white hover:bg-gray-100"
											>
												<i className="fa-solid fa-location-dot mr-2"></i>
												<em>Chọn tỉnh thành</em>
											</option>
											<option value="">Xem tất cả tỉnh thành</option>

											{filterDiaDanh.map((khuvuc) => (
												<option
													className="text-gray-700 bg-white hover:bg-gray-100"
													key={khuvuc.id}
													value={`${khuvuc.id}`}
													style={getStyles(khuvuc.tenTinhThanh, khuvuc.tenTinhThanh, theme)}
												>
													{khuvuc.tenTinhThanh}
												</option>
											))}
										</select>
									</div>
								</span>
							</span>
						</button>
						{/* Tìm */}
						<span className="flex items-center mb-2 justify-end col-span-1">
							<Link
								to={`/booking/${mien}/${address}`}
								type="button"
								className={`
									flex items-center justify-center h-12 md:rounded-lg px-6
									text-md font-semibold text-white
									bg-blue-500 hover:bg-blue-600 w-full
								`}
								data-testid="search-button"
							>
								<span
									className="inline-flex flex-shrink-0 mr-1 leading-none transform "
									aria-hidden="true"
								>
									<i className="fa-solid fa-magnifying-glass"></i>
								</span>
								<span className="text-center text-base tracking-widest">Tìm</span>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
