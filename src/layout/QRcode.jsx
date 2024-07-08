import ip15 from '@/assets/img/images1.png';
import maQR from '@/assets/img/QR.png';
const QRcode = () => {
	return (
		<>
			<div className="mt-4 w-3/4 m-auto">
				<section
					data-testid="app-install-section"
					className="relative pt-8 bg-2 px-4 overflow-hidden rounded-lg flex flex-col-reverse md:flex-row h-auto md:h-250"
				>
					<div className="w-full mb-4 -mt-52 mr-11 md:mt-0 md:w-3/6">
						<h2 className="text-heading-l font-bold text-md md:text-2xl mb-1 truncate">Trải nghiệm website fourWayTravel</h2>
						<h3 className="text-heading-s font-semibold text-md truncate">
							Dễ dàng so sánh giá để tiết kiệm mọi lúc, mọi nơi.
						</h3>
						<div className="flex justify-center md:justify-start mt-4">
							<img
								src={maQR}
								alt="Mã QR fourWayTravel"
								className='object-contain w-32'
								loading='lazy'
							/>
						</div>
					</div>
					<div className="text-blue-700 ">
						<svg
							viewBox="0 210 384 406"
							transform="translate(0 -30)"
							xmlns="http://www.w3.org/2000/svg"
							className='w-300 h-400'
						>
							<defs>
								<clipPath
									id="app-install8"
									clipPathUnits="userSpaceOnUse"
								>
									<ellipse
										ry="201"
										rx="188"
										cy="203"
										cx="192"
									></ellipse>
								</clipPath>
							</defs>
							<ellipse
								ry="199"
								rx="188"
								cy="203"
								cx="192"
								fill="white"
							></ellipse>
							<g
								clipPath="url(#app-install8)"
								transform="translate(0 -6)"
							>
								<image
									width={258}
									height={293}
									x={75}
									y={200}
									href={ip15}
								></image>
							</g>
							<ellipse
								strokeWidth={8}
								stroke="currentColor"
								ry={199}
								rx={188}
								cy={203}
								cx={192}
								fill="none"
							></ellipse>
						</svg>
					</div>
				</section>
			</div>
		</>
	);
};

export default QRcode;
