import { useDocsQuery } from '@/hooks/useFirestore';
import UserXemGanDayLayout from '@/layout/userXemGanDay';
import { auth, firestore } from '@/utils/firebase.config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
const UserXemGanDay = () => {
	const [currentUser, setCurrentUser] = React.useState(null);
	const { data: khachSan } = useDocsQuery('khachsan');
	const [userXemGanDay, setUserXemGanDay] = React.useState([]);

	React.useEffect(() => {
		const fetchUserData = async (user) => {
			if (user) {
				setCurrentUser(user);

				const userRef = doc(firestore, 'users', user.uid);

				try {
					const userDoc = await getDoc(userRef);

					if (userDoc.exists()) {
						const fetchedUserXemGanDay = userDoc.data().xemGanDay || [];
						setUserXemGanDay(fetchedUserXemGanDay);
					} else {
						setUserXemGanDay([]);
					}
				} catch (error) {
					console.error('Error fetching user Xem Gan Day:', error);
				}
			} else {
				setCurrentUser(null);
				setUserXemGanDay([]);
			}
		};

		const unsubscribe = auth.onAuthStateChanged(fetchUserData);

		return () => {
			unsubscribe();
		};
	}, []);
	const [xemGanDay, setXemGanDay] = React.useState([]);

	const handleAddToRecentlyViewed = async (itemId, tinhThanh, title, img) => {
		// Check if there is a currentUser
		if (currentUser) {
			// Define a reference to the user's document in Firestore
			const userRef = doc(firestore, 'users', currentUser.uid);

			// Load the user's xemGanDay data
			const userDoc = await getDoc(userRef);
			let updatedXemGanDay = [];

			if (userDoc.exists()) {
				// If the user document exists, get the current xemGanDay data
				updatedXemGanDay = userDoc.data().xemGanDay || [];

				// Check if the itemId is already in xemGanDay
				const itemIndex = updatedXemGanDay.findIndex((item) => item.id === itemId);

				if (itemIndex !== -1) {
					// If it's already in xemGanDay, update the views count
					updatedXemGanDay[itemIndex].views += 1;
					// Move the item to the beginning of the array
					const [movedItem] = updatedXemGanDay.splice(itemIndex, 1);
					updatedXemGanDay.unshift({ ...movedItem, lastViewed: new Date() });
				} else {
					// If it's not in xemGanDay, add it with views count as 1
					updatedXemGanDay.unshift({ id: itemId, tinhThanh, title, img, views: 1, lastViewed: new Date() });
				}
			} else {
				// If the user document doesn't exist, create xemGanDay with the current item
				updatedXemGanDay = [{ id: itemId, tinhThanh, title, img, views: 1, lastViewed: new Date() }];
			}

			// Update the xemGanDay field in the user's document
			await updateDoc(userRef, { xemGanDay: updatedXemGanDay });

			// Set the updated xemGanDay in the component state
			setXemGanDay(updatedXemGanDay);
		}
	};
	return (
		<>
			<UserXemGanDayLayout
				currentUser={currentUser}
				userXemGanDay={userXemGanDay}
				Link={Link}
				handleAddToRecentlyViewed={handleAddToRecentlyViewed}

			/>
		</>
	);
};

export default UserXemGanDay;
