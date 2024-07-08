import { useDocsQuery } from '@/hooks/useFirestore';
import LichSuDPLayout from '@/layout/lichSuDP';
import { auth, firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';

const LichSuDP = () => {
	const { data: phong } = useDocsQuery('phong');
	const { data: khachSan } = useDocsQuery('khachsan');
	const [currentUser, setCurrentUser] = React.useState(null);

	React.useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			if (user) {
				fetchUserDatPhong(user.uid);
			}
		});

		return () => unsubscribe();
	}, []);

	const [userDatPhong, setUserDatPhong] = React.useState([]);

	const fetchUserDatPhong = async (userId) => {
		const userRef = doc(firestore, 'users', userId);
		const userDoc = await getDoc(userRef);
		if (userDoc.exists()) {
			setUserDatPhong(userDoc.data().datphong || []);
		}
	};

	// Filter phòng và khách sạn
	const filteredPhong = phong.filter((item) =>
		userDatPhong.some((datPhongItem) => datPhongItem.phongID === item.id),
	);

	const ID_ks_phong = filteredPhong.map((item) => {
		return item.khachSanId;
	})
	const filterKhachSan = khachSan.filter(item => ID_ks_phong.includes(item.id));

	const renderStars = (soSao) => {
		let stars = [];
		for (let i = 0; i < soSao; i++) {
			stars.push(
				<i
					key={i}
					className="fa-solid fa-star text-white-100"
				></i>,
			);
		}
		return stars;
	};
	return (
		<>
			<LichSuDPLayout
				Link={Link}
				currentUser={currentUser}
				userDatPhong={userDatPhong}
				phong={phong}
				renderStars={renderStars}
				filteredPhong={filteredPhong}
				filterKhachSan={filterKhachSan}
			/>
		</>
	);
};

export default LichSuDP;
