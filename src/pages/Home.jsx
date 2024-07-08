import headerBanner from '@/assets/img/bannerQN.jpg';
import Tabs from '@/pages/Tabs';
import XemGanDay from '@/pages/xemGanDay';
import Product from './Product';
import SearchBar from './SearchBar';
const Home = () => {
	return (
		<>
			<div className="w-screen h-600 relative flex items-center justify-center flex-col bg-banner">
				<img
					className="w-full h-full absolute object-cover opacity-75"
					src={headerBanner}
					alt="banner header"
				/>
				<div className="z-50 mb-2 w-1/2 text-center">
					<h1 className="text-4xl text-white font-bold tracking-wide">
						Khuyến mãi cuối năm, đặt phòng ngay thôi!
					</h1>
				</div>
				<div className="z-50 mb-10 w-1/2 text-center">
					<h1 className="text-xl text-white">
						Đặt phòng và yên tâm tận hưởng kì nghỉ tuyệt vời của bạn, với sự đồng hành của FourWayTravel!
					</h1>
				</div>
				<SearchBar />
			</div>
			<XemGanDay />
			<Tabs />
			<Product />
		</>
	);
};

export default Home;
