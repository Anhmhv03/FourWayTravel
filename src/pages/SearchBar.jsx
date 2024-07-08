import { useDocsQuery } from '@/hooks/useFirestore';
import Filter from '@/layout/Filter';
import SearchBarLayout from '@/layout/SearchBar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};
function getStyles(name, isBookingPage, theme) {
	return {
		fontWeight:
			isBookingPage.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}
// function sanitizeAddress(address) {
// 	if (address === undefined || address === null) {
// 		return '';
// 	}
// 	// Normalize and remove diacritics
// 	let cleanAddress = address.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// 	// Remove spaces
// 	cleanAddress = cleanAddress.replace(/\s+/g, '');
// 	return cleanAddress;
// }

const SearchBar = () => {
	const { data: diadanh } = useDocsQuery('tinhthanh');
	const { data: vungMien } = useDocsQuery('vungmien');

	const [address, setAddress] = useState('');
	const [mien, setMien] = useState('');

	const location = useLocation();
	const isBookingPage = location.pathname === '/booking';

	const [filterAddress, setFilterAddress] = useState(address);
	const [filterMien, setFilterMien] = useState(mien);

	const theme = useTheme();

	// Lọc danh sách vùng miền theo vùng miền được chọn
	const selectedVungMien = vungMien.find((item) => item.id === mien);

	// Lọc danh sách địa danh dựa trên vùng miền được chọn
	const filterDiaDanh = diadanh.filter((item) => {
		if (!selectedVungMien) {
			return true; // Nếu không có vùng miền được chọn, hiển thị tất cả địa danh
		}
		return item.vungMien === selectedVungMien.tenVungMien;
	});
	return (
		<>
			<SearchBarLayout
				Link={Link}
				Box={Box}
				InputLabel={InputLabel}
				FormControl={FormControl}
				// selection
				NativeSelect={NativeSelect}
				Select={Select}
				MenuItem={MenuItem}
				OutlinedInput={OutlinedInput}
				MenuProps={MenuProps}
				getStyles={getStyles}
				theme={theme}

				diadanh={diadanh}
				// handleSearch={handleSearch}
				onAddressChange={(e) => setAddress(e?.target?.value)}
				onMienChange={(e) => setMien(e?.target?.value)}
				useLocation={useLocation}

				Filter={Filter}
				location={location}
				isBookingPage={isBookingPage}
				// filter tỉnh thành
				filterAddress={filterAddress}
				filterDiaDanh={filterDiaDanh}
				setFilterAddress={setFilterAddress}
				// filter vùng miền
				filterMien={filterMien}
				setFilterMien={setFilterMien}

				address={address}
				mien={mien}
				vungMien={vungMien}


			/>
		</>
	);
};

export default SearchBar;
