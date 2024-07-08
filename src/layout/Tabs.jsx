import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../assets/css/Tabs.css';

function TabPanel(props) {
	const { children, value, index } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export default function BasicTabs({ value, sortedData, handleChange }) {
	return (
		<>
			<Box className="container my-4 rounded-lg">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					{sortedData.map((vung, index) => (
						<Tab
							key={vung.id}
							label={vung.tenVungMien}
							{...a11yProps(index)}
						/>
					))}
				</Tabs>

				{sortedData.map((vung, index) => (
					<TabPanel
						key={vung.id}
						value={value}
						index={index}
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full h-auto md:h-300">
							{vung.tinhthanh.map((tt) => (
								<Link
									to={`/booking//${tt.id}`}
									key={tt.id}
								>
									<div className="box-img relative">
										<div className="backdrop-blur-sm w-full z-50 bg-black/30 bottom-0 absolute p-2">
											<h4 className="name-travel">{tt.tenTinhThanh}</h4>
											<h4 className="total-room">
												<span className="total-number">{tt.count}</span> Khách Sạn
											</h4>
										</div>
										<img
											src={tt.img}
											alt={tt.tenTinhThanh}
											className="image"
										/>
									</div>
								</Link>
							))}
						</div>
					</TabPanel>
				))}
			</Box>

			<div className="mt-6 mx-auto w-3/4 px-0 py-0">
				<div className="bg-white">
					<div className="mx-auto pt-10 pb-12 l:py-10 Wrapper_box__4K_5d px-4 2xs:px-5 l:px-10 2xl:px-5">
						<section className="md:flex md:flex-wrap justify-between items-center gap-5">
							<div className="md:w-1/4 m-auto text-center">
								<picture>
									<source
										media="(min-width:80px)"
										srcSet="https://www.trivago.vn/_static/images/ValueProposition/SearchDesktop.svg"
										type="image/svg+xml"
									/>
									<img
										className="w-300"
										src="https://www.trivago.vn/_static/images/ValueProposition/SearchDesktop.svg"
										alt="Tự tin so sánh"
									/>
								</picture>
								<div className="ValueProposition_textSection__zPh83">
									<h3 className="text-xl my-2 font-bold ValueProposition_heading__FoB8J">
										Tìm dễ dàng
									</h3>
									<p className="font-extralight">
										Tìm tất cả các khách sạn của FourWay Travel chỉ sau vài giây.
									</p>
								</div>
							</div>
							<div className="md:w-1/4 m-auto text-center">
								<picture>
									<source
										media="(min-width:980px)"
										srcSet="https://www.trivago.vn/_static/images/ValueProposition/CompareDesktop.svg"
										type="image/svg+xml"
									/>
									<img
										className="w-300"
										src="https://www.trivago.vn/_static/images/ValueProposition/CompareDesktop.svg"
										alt="Tự tin so sánh"
									/>
								</picture>
								<div className="ValueProposition_textSection__zPh83">
									<h3 className="text-xl my-2 font-bold ValueProposition_heading__FoB8J">
										Tự tin so sánh
									</h3>
									<p className="font-extralight">
										So sánh giá phòng khách sạn trên hàng trăm trang web cùng lúc.
									</p>
								</div>
							</div>
							<div className="md:w-1/4 m-auto text-center">
								<picture className="w-300">
									<source
										className="w-300"
										srcSet="https://www.trivago.vn/_static/images/ValueProposition/SaveDesktop.svg"
										type="image/svg+xml"
									/>
									<img
										className="w-300"
										src="https://www.trivago.vn/_static/images/ValueProposition/SaveDesktop.svg"
										alt="Tiết kiệm nhiều"
									/>
								</picture>
								<div className="ValueProposition_textSection__zPh83">
									<h3 className="text-xl my-2 font-bold ValueProposition_heading__FoB8J">
										Tiết kiệm nhiều
									</h3>
									<p className="font-extralight">
										Khám phá ưu đãi hấp dẫn để đặt trên trang web của chúng tôi.
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
