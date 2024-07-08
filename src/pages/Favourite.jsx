import FavouriteLayout from '@/layout/Favourite';
import { auth, firestore } from '@/utils/firebase.config';
import Checkbox from '@mui/material/Checkbox';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';

const Favourite = () => {
	const [currentUser, setCurrentUser] = React.useState(null);
	const [userFavorites, setUserFavorites] = React.useState([]);

	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
				// Lấy thông tin người dùng hiện tại và mảng "favorites"
				const userRef = doc(firestore, 'users', user.uid);
				const fetchUserFavorites = async () => {
					const userDoc = await getDoc(userRef);
					if (userDoc.exists()) {
						setUserFavorites(userDoc.data().favorites || []);
					}
				};
				fetchUserFavorites();
			} else {
				setCurrentUser(null);
			}
		});
	}, []);
	const [favorites, setFavorites] = React.useState([]); // Thay đổi trạng thái yêu thích thành một mảng

	React.useEffect(() => {
		if (currentUser) {
			// Load user's favorites when the component mounts
			const userRef = doc(firestore, 'users', currentUser.uid);
			const loadFavorites = async () => {
				const userDoc = await getDoc(userRef);
				if (userDoc.exists()) {
					const userFavorites = userDoc.data().favorites || [];
					setFavorites(userFavorites);
				}
			};
			loadFavorites();
		}
	}, [currentUser]);

	const handleFavoriteChange = async (itemId) => {
		if (currentUser) {
			const userRef = doc(firestore, 'users', currentUser.uid);
			let updatedFavorites; // Định nghĩa biến updatedFavorites ở đây

			if (favorites.includes(itemId)) {
				// Item is already in favorites, remove it
				updatedFavorites = favorites.filter((favoriteId) => favoriteId !== itemId);
			} else {
				// Item is not in favorites, add it
				updatedFavorites = [...favorites, itemId];
			}
			if (userFavorites.some((favorite) => favorite.id === itemId.id)) {
				//remove it
				updatedFavorites = userFavorites.filter((favorite) => favorite.id !== itemId.id);
			}

			await updateDoc(userRef, { favorites: updatedFavorites }); // Cập nhật dữ liệu Firestore
			// Cập nhật trạng thái yêu thích sau khi cập nhật Firestore thành công
			setFavorites(updatedFavorites);
		}
	};
	return (
		<>
			<FavouriteLayout
				Link={Link}
				userFavorites={userFavorites}
				currentUser={currentUser}
				handleFavoriteChange={handleFavoriteChange}
				Checkbox={Checkbox}
			/>
		</>
	);
};

export default Favourite;
