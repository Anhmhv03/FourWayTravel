import { Link } from 'react-router-dom';

// import React from 'react';

const Partner = () => {
	return (
		<>
			<div className="partner-container fresnel-container fresnel-greaterThanOrEqual-l w-78 m-auto ">
				<section className="bg-grey-100 max-w-screen overflow-hidden relative py-3 bg-opacity-50">
					<div className="mx-auto Wrapper_box__4K_5d px-4 2xs:px-5 l:px-10 2xl:px-5">
						<h2 className="font-bold text-xl my-2 px-2">Các đối tác chính của Four Way Travel</h2>
						<ul className="list-partner flex items-center list-none justify-start gap-5">
							<li className="partner my-2 px-2 flex flex-shrink-0 items-center justify-center min-w-0 h-4">
								<Link
									to="https://www.booking.com/index.vi.html"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/626.png"
										className="image-partner flex-grow-0 flex-shrink-0 max-h-4 w-auto"
										alt=""
									/>
								</Link>
							</li>

							<li className="partner my-2 px-2 flex flex-shrink-0 items-center justify-center min-w-0 h-4">
								<Link
									to="https://www.agoda.com/?cid=1844104&ds=B3WVlzbQMpTsg3Rb"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/395.png"
										className="image-partner flex-grow-0 flex-shrink-0 max-h-4 w-auto"
										alt=""
									/>
								</Link>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</>
	);
};

export default Partner;
