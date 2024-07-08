// import Loading from '@/components/Loading';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';

const Header = lazy(() => import('@/pages/Header'))
const Footer = lazy(() => import('@/pages/Footer'))
const Main = lazy(() => import('@/pages/index'))
const Booking = lazy(() => import('@/pages/Booking'))
const ChiTiet = lazy(() => import('@/pages/chiTiet'))
const ListLuutru = lazy(() => import('@/pages/ListLuutru'))
const Favourite = lazy(() => import('@/pages/Favourite'))
const Datphong = lazy(() => import('@/pages/Datphong'));
const UserXemGanDay = lazy(() => import('@/pages/userXemGanDay'));
const LichSuDP = lazy(() => import('@/pages/lichSuDP'));

const DieuKhoan = lazy(() => import('@/layout/Dieukhoan'));
const Cohoi = lazy(() => import('@/layout/Cohoi'));
const TimHieu = lazy(() => import('@/layout/Timhieu'));
const ThongTin = lazy(() => import('@/layout/Thongtin'));
const Thongbao = lazy(() => import('@/layout/Thongbao'));
const Tintuc = lazy(() => import('@/layout/Tintuc'));
const Hoatdong = lazy(() => import('@/layout/Hoatdong'));

const Login = lazy(() => import('@/auth/Login'));

export default function App() {
	return (
		<Suspense fallback={
			<Backdrop
				sx={{ zIndex: 500 }}
				open
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		}>
			<Header />
			<Routes>
				<Route
					path={routes.HOME}
					element={<Main />}
				>
				</Route>
				<Route
					path={routes.BOOKING}
					element={<Booking />}
				/>
				<Route
					path={routes.ALLKHACHSAN}
					element={<Booking />}
				/>
				<Route
					path={routes.FILTERTINHTHANH}
					element={<Booking />}
				/>
				<Route
					path={routes.FILTERVUNGMIEN}
					element={<Booking />}
				/>
				<Route
					path={routes.LOGIN}
					element={<Login />}
				/>
				<Route
					path={routes.FILTERKHACHSAN}
					element={<Booking />}
				/>
				<Route
					path={routes.CHITIET}
					element={<ChiTiet />}
				/>
				<Route
					path={routes.Favourite}
					element={<Favourite />}
				/>
				<Route
					path={routes.ListKhachSan}
					element={<ListLuutru />}
				/>
				<Route
					path={routes.DATPHONG}
					element={<Datphong />}
				/>
				<Route
					path={routes.CHITIET}
					element={<ChiTiet />}
				/>
				<Route
					path={routes.USERXEMGANDAY}
					element={<UserXemGanDay />}
				/>
				<Route
					path={routes.LICHSUDP}
					element={<LichSuDP />}
				/>

				<Route
					path={routes.TIMHIEU}
					element={<TimHieu />}
				/>
				<Route
					path={routes.COHOI}
					element={<Cohoi />}
				/>
				<Route
					path={routes.HOATDONG}
					element={<Hoatdong />}
				/>
				<Route
					path={routes.DIEUKHOAN}
					element={<DieuKhoan />}
				/>
				<Route
					path={routes.THONGTIN}
					element={<ThongTin />}
				/>
				<Route
					path={routes.THONGBAO}
					element={<Thongbao />}
				/>
				<Route
					path={routes.TINTUC}
					element={<Tintuc />}
				/>
			</Routes>
			<Footer />
		</Suspense>
	);
}
