import Logo from '@/assets/img/17.png';
import Login from '@/auth/Login';
import MenuLayOut from '@/layout/Menu';
import { auth, firestore } from '@/utils/firebase.config';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React from 'react';
import { Link } from 'react-router-dom';

const styleModal = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const ITEM_HEIGHT = 36;

const Header = () => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};


	// Modal
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	const [anchorE4, setAnchorE4] = React.useState(null);
	const open4 = Boolean(anchorE4);
	const handleClick4 = (event) => {
		setAnchorE4(event.currentTarget);
	};
	const handleClose4 = () => {
		setAnchorE4(null);
	};

	const [user, setUser] = React.useState(null);
	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			}
			else {
				setUser(null);
			}
		});
	}, []);
	const signOut = async () => {
		try {
			if (user && user.uid) {
				const userDocRef = doc(firestore, 'users', user.uid);

				// Check if the document exists
				const docSnap = await getDoc(userDocRef);
				if (docSnap.exists()) {
					await updateDoc(userDocRef, { isOnline: false });
				} else {
					console.log('No such document!');
				}
			}
			await auth.signOut();
			window.location.href = '/';
		} catch (error) {
			console.error('Sign out error:', error);
		}
	};


	return (
		<MenuLayOut
			Logo={Logo}
			Link={Link}
			Button={Button}
			Menu={Menu}
			MenuItem={MenuItem}
			anchorEl={anchorEl}
			open={open}
			handleClick={handleClick}
			handleClose={handleClose}
			ITEM_HEIGHT={ITEM_HEIGHT}
			styleModal={styleModal}
			Box={Box}
			Typography={Typography}
			Modal={Modal}
			openModal={openModal}
			handleOpenModal={handleOpenModal}
			handleCloseModal={handleCloseModal}

			Login={Login}
			user={user}
			signOut={signOut}
			anchorE4={anchorE4}
			open4={open4}
			handleClick4={handleClick4}
			handleClose4={handleClose4}
		/>
	);
};

export default Header;