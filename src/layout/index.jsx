import { Tabs } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AboutFTW from './AboutFTW';
import Footer from './Footer';
import Header from './Header';
import Partner from './Partner';
import QRcode from './QRcode';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Partner />
			<Tabs />
			<QRcode />
			<AboutFTW />
			<SearchList />
			<Footer />
			<SearchBar />
		</>
	);
}
