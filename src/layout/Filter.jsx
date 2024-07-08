// @ts-nocheck
import { Popover } from '@mui/material';
import { useRef, useState } from 'react';

export default function Filter() {
	const anchorEle = useRef();
	const [isOpen, setIsopen] = useState(false);

	return (
		<>
			<button
				type="button"
				data-testid="search-form-guest-selector"
				ref={anchorEle}
				onClick={() => setIsopen(true)}
				className="w-full col-span-1 px-5 text-left truncate bg-white border-t md:border-l md:border-t-0 group h-14 active:bg-grey-200"
			>
				<span className="flex items-center 2xl:p-2 2xl:hover:bg-grey-200 2xl:rounded-md">
					<span
						className="inline-flex flex-shrink-0 mr-3 leading-none transform "
						aria-hidden="true"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							className="max-w-full max-h-full pointer-events-none"
						>
							<path
								d="M21 12a3.1 3.1 0 00-1-2.31V6a1 1 0 00-1-1H5a1 1 0 00-1 1v3.69A3.1 3.1 0 003 12a1 1 0 00-1 1v4a2 2 0 002 2h16a2 2 0 002-2v-4a1 1 0 00-1-1zm-7.76-1a1.72 1.72 0 011.51-1h3.5a1.5 1.5 0 01.75.2 1.87 1.87 0 01.91 1.21A1.87 1.87 0 0120 12h-7a2.2 2.2 0 01.24-1zM5 6h14v3.12a2.36 2.36 0 00-.75-.12h-3.5a2.78 2.78 0 00-2.59 2 3.27 3.27 0 00-.16 1 3.27 3.27 0 00-.16-1 2.78 2.78 0 00-2.59-2h-3.5a2.36 2.36 0 00-.75.12zm-.91 5.41A1.87 1.87 0 015 10.2a1.5 1.5 0 01.75-.2h3.5a1.72 1.72 0 011.51 1 2.2 2.2 0 01.24 1H4a1.87 1.87 0 01.09-.59zM21 17a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h18z"
								fill="currentColor"
							/>
						</svg>
					</span>
					<span className="relative flex flex-col w-full truncate">
						<span
							className="text-xs leading-tight truncate text-grey-700"
							data-testid="search-form-guest-selector-label"
						>
							Số khách và lưu trú
						</span>
						<span
							className="text-sm font-bold leading-normal truncate text-grey-900"
							data-testid="search-form-guest-selector-value"
						>
							2 khách, 1 lưu trú
						</span>
					</span>
				</span>
			</button>

			<Popover
				open={isOpen}
				anchorEl={anchorEle?.current}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				onClose={() => setIsopen(false)}
			>

				{/* Fiter */}
				<div className="relative bg-white rounded-md Flyout_wrapper__Y6ACW shadow-popover ">
					<div className="FlyoutGuestsRooms_flyoutWidth__O7VpR">
						<div className="flex justify-center px-6 pt-6 align-center ">
							<div data-testid="guests-rooms">
								<div className="grid grid-rows-3 gap-4 mb-6">
									<div className="flex items-center justify-between">
										<label
											htmlFor="number-input65"
											className="font-bold text-m"
										>
											Người lớn
										</label>
										<div className="grid grid-flow-col gap-4 auto-cols-auto">
											<button
												type="button"
												data-testid="adults-amount-minus-button"
												className="text-blue-800 border rounded-full h-9 w-9 hover:text-blue-900"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={24}
															height={24}
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<path
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
																vectorEffect="non-scaling-stroke"
																d="M6 12h12"
															></path>
														</svg>
													</span>
													<span className="sr-only">Ít hơn</span>
												</span>
											</button>
											<input
												min="1"
												max="48"
												minLength="1"
												maxLength="2"
												className="w-10 m-0 text-center border appearance-none NumberInput_input__i1zP_ h-9 border-grey-300 rounded-xs"
												type="number"
												id="number-input65"
												data-testid="adults-amount"
												value={2}
											/>
											<button
												type="button"
												data-testid="adults-amount-plus-button"
												className="text-blue-800 border rounded-full h-9 w-9 hover:text-blue-900"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
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
																strokeMiterlimit="10"
																strokeWidth="2"
															>
																<path
																	vectorEffect="non-scaling-stroke"
																	d="M6 12h12M12 6v12"
																></path>
															</g>
														</svg>
													</span>
													<span className="sr-only">Thêm</span>
												</span>
											</button>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="number-input66"
											className="font-bold text-m"
										>
											Trẻ em
										</label>
										<div className="grid grid-flow-col gap-4 auto-cols-auto">
											<button
												type="button"
												disabled=""
												data-testid="children-amount-minus-button"
												className="text-blue-300 border rounded-full cursor-not-allowed h-9 w-9"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<path
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
																vectorEffect="non-scaling-stroke"
																d="M6 12h12"
															></path>
														</svg>
													</span>
													<span className="sr-only">ít hơn</span>
												</span>
											</button>
											<input
												min="0"
												max="42"
												minLength="1"
												maxLength="2"
												className="w-10 m-0 text-center border appearance-none NumberInput_input__i1zP_ h-9 border-grey-300 rounded-xs"
												type="number"
												id="number-input66"
												data-testid="children-amount"
												value="0"
											/>
											<button
												type="button"
												data-testid="children-amount-plus-button"
												className="text-blue-800 border rounded-full h-9 w-9 hover:text-blue-900"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<g
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
															>
																<path
																	vectorEffect="non-scaling-stroke"
																	d="M6 12h12M12 6v12"
																></path>
															</g>
														</svg>
													</span>
													<span className="sr-only">thêm</span>
												</span>
											</button>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="number-input133"
											className="font-bold text-m"
										>
											lưu trú
										</label>
										<div className="grid grid-flow-col gap-4 auto-cols-auto">
											<button
												type="button"
												disabled=""
												data-testid="rooms-amount-minus-button"
												className="text-blue-300 border rounded-full cursor-not-allowed h-9 w-9"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<path
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
																vectorEffect="non-scaling-stroke"
																d="M6 12h12"
															></path>
														</svg>
													</span>
													<span className="sr-only">ít hơn</span>
												</span>
											</button>
											<input
												min="1"
												max="6"
												minLength="1"
												maxLength="2"
												className="w-10 m-0 text-center border appearance-none NumberInput_input__i1zP_ h-9 border-grey-300 rounded-xs"
												type="number"
												id="number-input133"
												data-testid="rooms-amount"
												value="1"
											/>
											<button
												type="button"
												data-testid="rooms-amount-plus-button"
												className="text-blue-800 border rounded-full h-9 w-9 hover:text-blue-900"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<g
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
															>
																<path
																	vectorEffect="non-scaling-stroke"
																	d="M6 12h12M12 6v12"
																></path>
															</g>
														</svg>
													</span>
													<span className="sr-only">thêm</span>
												</span>
											</button>
										</div>
									</div>
									<div className="flex flex-row py-6 border-t border-grey-300">
										<div className="w-full text-m">
											<h2 className="font-bold">Cho phép mang theo vật nuôi</h2>
											<h3>Chỉ hiển thị những nơi lưu trú cho phép mang theo vật nuôi</h3>
										</div>
										<div className="flex flex-row-reverse items-center">
											<input
												className="relative flex items-center justify-center flex-shrink-0 border appearance-none Checkbox_checkbox--large__bw_up border-grey-500 rounded-xs"
												type="checkbox"
												id="checkbox-45"
												data-testid="pet-friendly-filter"
											/>
										</div>
									</div>
									<div className="px-8 py-3 rounded-t-md shadow-nux-15">
										<div className="flex items-baseline justify-between ">
											<button
												type="button"
												data-testid="guest-selector-reset"
												className="font-bold uppercase text-grey-700 text-m disabled:text-grey-300 disabled:cursor-not-allowed"
												disabled=""
											>
												Chọn lại
											</button>
											<button
												type="button"
												className="w-20 h-10 font-bold text-white bg-blue-800 rounded-md disabled:cursor-not-allowed PrimaryButton_small__8N1se PrimaryButton_enabled__KCd_i"
												data-testid="guest-selector-apply"
											>
												Áp dụng
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Popover>
		</>
	);
}
