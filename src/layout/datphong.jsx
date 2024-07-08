const DatphongLayout = ({
	data,
	handleChange,
	handleSubmit,
	formData,
	formErrors,
	numberOfDaysStayed,
	filterKhachSan,
	renderStars,
	timNhanNgayTrung, timTraNgayTrung
}) => {

	return (

		<>
			<div className="container w-3/4 m-auto">
				{Object.keys(formErrors).length > 0 && (
					<div
						className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 mt-2"
						role="alert"
					>
						<p className="font-bold">Cần chú ý</p>
						<ul>
							{Object.keys(formErrors).map((key) => {
								return <li key={key}>{formErrors[key]}</li>;
							})}
						</ul>
					</div>
				)}
				<div className="flex flex-col-reverse md:flex-row  md:gap-4 md:justify-between">
					<div className="w-full md:w-4/6 drop-shadow">
						<form onSubmit={handleSubmit}>
							<div className="bg-white border-2 border-primary-xanh rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
								<div className="-mx-3 grid grid-cols-4 md:mb-4">
									<div className="flex w-full mb-2 sm:mb-0 col-span-4 sm:col-span-1">
										<div className="px-3 w-full">
											<label
												className="block tracking-wide text-grey-darker text-sm  mb-2"
												htmlFor="grid-state"
											>
												Danh xưng <span className="text-primary-xanh font-semibold">*</span>
											</label>
											<div className="relative">
												<select
													name="tieuDe" // Add the 'name' attribute to link with formData
													className="block outline-none text-sm appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2 px-4 pr-8 rounded"
													id="grid-state"
													value={formData.tieuDe} // Control the input with formData state
													onChange={handleChange} // Set the event handler
												>
													<option
														name="tieuDe"
														value={`Ông`}
													>
														Ông
													</option>
													<option
														name="tieuDe"
														value={`Bà`}
													>
														Bà
													</option>
													<option
														name="tieuDe"
														value={`Anh`}
													>
														Anh
													</option>
													<option
														name="tieuDe"
														value={`Chị`}
													>
														Chị
													</option>
												</select>
												<div className="pointer-events-none absolute inset-y-1/2 right-0 -translate-y-1/4 flex items-center px-2 text-grey-darker">
													<i className="fa-regular fa-chevron-down"></i>
												</div>
											</div>
										</div>
									</div>
									<div className="w-full px-3 col-span-2 sm:col-span-1">
										<label
											className="block tracking-wide text-grey-darker text-sm mb-2"
											htmlFor="grid-last-name"
										>
											Họ <span className="text-primary-xanh font-semibold">*</span>
										</label>
										<input
											className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
											id="grid-last-name"
											type="text"
											name="lastName"
											value={formData.lastName}
											onChange={handleChange}
											placeholder=""
										/>
									</div>
									<div className="w-full px-3 mb-2 md:mb-0 col-span-2 sm:col-span-2">
										<label
											className="block tracking-wide text-grey-darker text-sm mb-2"
											htmlFor="grid-first-name"
										>
											Tên <span className="text-primary-xanh font-semibold">*</span>
										</label>
										<input
											className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3"
											id="grid-first-name"
											type="text"
											name="firstName"
											value={formData.firstName}
											onChange={handleChange}
											placeholder=""
										/>
									</div>
								</div>

								{/* Chọn thời gian đặt phòng */}
								<div className="-mx-3 flex flex-wrap justify-between mb-4 relative">
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label
											className="block tracking-wide text-grey-darker text-sm mb-2"
											htmlFor="checkin-time"
										>
											Thời gian nhận phòng{' '}
											<span className="text-primary-xanh font-semibold">*</span>
										</label>
										<input
											className="block outline-none text-sm appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2 px-4 pr-8 rounded"
											id="checkin-time"
											type="date"
											name="checkinTime"
											min={new Date().toISOString().split('T')[0]}
											value={formData.checkinTime}
											onChange={handleChange}
										/>
									</div>

									<div className="w-full md:w-1/2 px-3">
										<label
											className="block tracking-wide text-grey-darker text-sm mb-2"
											htmlFor="checkout-time"
										>
											Thời gian trả phòng{' '}
											<span className="text-primary-xanh font-semibold">*</span>
										</label>
										<input
											className="block outline-none text-sm appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2 px-4 pr-8 rounded"
											id="checkout-time"
											type="date"
											name="checkoutTime"
											min={
												formData.checkinTime
													? new Date(formData.checkinTime).toISOString().split('T')[0]
													: undefined
											}
											value={formData.checkoutTime}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="-mx-3 flex flex-col md:flex-row mb-4">
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block tracking-wide text-grey-darker text-sm mb-2"
											htmlFor="grid-email"
										>
											Email <span className="text-primary-xanh font-semibold">*</span>
										</label>
										<input
											className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
											id="grid-email"
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											placeholder=""
										/>
									</div>
								</div>
								<div className="-mx-3 flex flex-wrap mb-2">
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block tracking-wide text-grey-darker text-sm mb-2"
											htmlFor="grid-phone"
										>
											Số điện thoại <span className="text-primary-xanh font-semibold">*</span>
										</label>
										<input
											className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
											id="grid-city"
											type="text"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											placeholder="+84 |"
										/>
									</div>
								</div>

								<div className="-mx-3 flex mb-2">
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block tracking-wide text-grey-darker text-sm mb-2"
											htmlFor="grid-phone"
										>
											Yêu cầu thêm <span className="text-primary-xanh font-semibold">*</span>
										</label>
										<textarea
											name="additionalRequest" // Add 'name' attribute to link with formData
											className="w-full border h-20 p-3 outline-none rounded-sm text-sm"
											cols="30"
											rows="10"
											placeholder="Ví dụ: Sở thích về Giường, địa điểm đón hoặc trả khách"
											value={formData.additionalRequest} // Control the input with formData state
											onChange={handleChange} // Set the event handler
										></textarea>
									</div>
								</div>
							</div>


							<div className="bg-white px-3 py-4 mb-4 border-primary-xanh border-2 rounded-lg">
								<h1 className="text-lg font-semibold tracking-wide px-3">Chính sách Khách sạn</h1>
								<div className="rounded-sm px-3">
									<div className="flex justify-start items-center my-2 gap-3 ">
										<i className="fa-light fa-file-lines text-lg text-primary-xanh"></i>
										<span className="font-semibold text-sm tracking-wide">
											Khách sạn <span className="capitalize">{filterKhachSan.title}</span>
										</span>
									</div>
									<div className="flex flex-wrap justify-start items-center my-2 gap-2 p-26px">
										<span className="font-semibold text-sm">Hủy đặt phòng:</span>
										<p className="text-sm tracking-wide ">
											Nếu hủy, thay đổi hoặc không đến, khách sẽ nhận được email thông báo đặt
											phòng thất bại.
										</p>
									</div>
								</div>
							</div>
							<div className="bg-white px-3 py-4 border-primary-xanh border-2 rounded-lg">
								<h1 className="text-lg font-semibold tracking-wide px-3">Phương thức thanh toán</h1>
								<div className="w-full h-0.2 bg-gray-500 my-5"></div>
								<div className="w-full px-3">
									<div className="relative">
										<select
											className="block outline-none text-sm appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2 px-4 pr-8 rounded"
											id="grid-state"
										>
											<option>Thanh toán online</option>
											<option>Thanh toán tiền mặt</option>
										</select>
										<div className="pointer-events-none absolute inset-y-1/2 right-0 -translate-y-1/4 flex items-center px-2 text-grey-darker">
											<i className="fa-regular fa-chevron-down"></i>
										</div>
									</div>
								</div>
								<div className="flex items-center px-3 mt-4">
									<input
										id="default-radio-1"
										type="radio"
										defaultValue=""
										name="default-radio"
										className="w-4 h-4  bg-gray-100 border-gray-300"
									/>
									<label
										htmlFor="default-radio-1"
										className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800"
									>
										Vui lòng đọc kỹ và đồng ý với điều khoản đặt phòng bằng cách đánh dấu vào ô bên
										cạnh.
									</label>
								</div>
								<div className="mt-3 px-3">
									<button
										type="submit"
										className={`
											w-36 py-3 bg-primary-xanh borrder-none rounded-md 
											text-white text-base font-semibold tracking-wide
										`}
										value="Send"
									>
										Đặt phòng
									</button>
								</div>
							</div>
						</form>
					</div>

					<div className="w-full md:w-2/6 mt-2 drop-shadow ">
						<div className="w-full h-auto bg-white border-primary-xanh border-2 rounded-lg p-5">
							<div className="flex flex-wrap items-center justify-between gap-4">
								<div className="md:flex md:gap-3">
									<img
										src={data.img}
										alt={data.title}
										className="w-full max-h-48 md:w-auto md:max-h-28 rounded-md object-cover"
									/>
									<div className="md:flex md:flex-col md:gap-2">
										<p className="font-semibold text-sm">{filterKhachSan.title}</p>
										<p className="font-semibold text-sm text-primary-cam">
											{renderStars(filterKhachSan.star)}
										</p>
									</div>
								</div>
								<div className="Title">
									<h1 className="md:text-lg font-bold">Phòng {data.tenPhong}</h1>
									<p className="md:text-sm font-semibold mt-3 tracking-wide">Số {data.soPhong}</p>
								</div>
							</div>

							<div className="flex justify-between mt-4">
								<div className="flex justify-start items-center gap-2">
									<span className="text-gray-400 md:text-sm tracking-wide">Thời gian ở:</span>
								</div>
								<span className="flex flex-nowrap justify-end md:flex-wrap md:text-sm">
									{numberOfDaysStayed} ngày
								</span>
							</div>
							<div className="flex justify-between mt-4">
								<span className="flex gap-1 text-gray-400 md:text-sm tracking-wide ">Giá ngày:</span>

								<span className="md:text-sm font-medium">{data.price?.toLocaleString('vi')}</span>
							</div>

							<div className="flex justify-between mt-4">
								<span className="text-gray-400 md:text-sm">Phí dịch vụ</span>
								<span className="flex md:text-sm text-primary-xanh font-semibold">MIỄN PHÍ</span>
							</div>

							<div className="mt-4 flex justify-between items-center">
								<span className="font-semibold text-lg md:text-base">Tổng tiền</span>
								<p className="text-lg md:text-base font-semibold text-primary-cam">
									{(data.price * numberOfDaysStayed).toLocaleString('vi')} VND
								</p>
							</div>
							<div className="w-full p-6 text-sm md:text-xs bg-gray-100 border-none rounded-md mt-6">
								Phòng của bạn đang được chờ xác nhận. Tư vấn viên sẽ sớm liên hệ với bạn
							</div>
							<div className="flex gap-4 items-center bg-gray-100 p-3 mt-4 border-none rounded-md w-full text-lg md:text-base">
								<i className="fa-regular fa-phone text-gray-400"></i>
								<span className="flex flex-wrap gap-1 items-center text-sm">
									Gọi <b className="font-semibold">1900 1011</b>
									để được hỗ trợ 24/7
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DatphongLayout;
