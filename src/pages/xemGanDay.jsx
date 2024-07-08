import { useDocsQuery } from '@/hooks/useFirestore';
import XemGanDayLayout from '@/layout/xemGanDay';
import { auth, firestore } from '@/utils/firebase.config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import React from 'react';
import { Link } from 'react-router-dom';

const XemGanDay = () => {
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

						// Sort the array based on the lastViewed property in descending order
						fetchedUserXemGanDay.sort((a, b) => b.lastViewed - a.lastViewed);

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

	// xóa lịch sử xem gần đây theo thời gian
	// const autoDeleteXemGanDay = async () => {
	// 	if (currentUser) {
	// 		const userRef = doc(firestore, 'users', currentUser.uid);
	// 		const xemGanDayRef = collection(userRef, 'xemGanDay');

	// 		try {
	// 			// Lấy thời điểm hiện tại
	// 			const currentTime = new Date();

	// 			// Xác định thời điểm 1 phút trước
	// 			const oneMinuteAgo = new Date(currentTime.getTime() - 30000); // 60000 milliseconds = 1 phút

	// 			// Lấy các tài liệu có trường 'lastViewed' trước thời điểm 1 phút trước
	// 			const querySnapshot = await getDocs(query(xemGanDayRef, where('lastViewed', '<', oneMinuteAgo)));

	// 			const deletePromises = [];

	// 			// Thực hiện xóa từng tài liệu
	// 			querySnapshot.forEach((doc) => {
	// 				deletePromises.push(deleteDoc(doc.ref));
	// 			});

	// 			// Chờ cho tất cả các hành động xóa hoàn thành
	// 			await Promise.all(deletePromises);

	// 			// console.log(`Xóa xem gần đây sau 30s  thành công.`);
	// 		} catch (error) {
	// 			// console.error('Lỗi không thể nào xóa xem gần đây sau 30s được:', error);
	// 		}
	// 	}
	// };
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
			<XemGanDayLayout
				currentUser={currentUser}
				khachSan={khachSan}
				userXemGanDay={userXemGanDay}
				Link={Link}
				handleAddToRecentlyViewed={handleAddToRecentlyViewed}
			/>
		</>
	);
};

export default XemGanDay;
