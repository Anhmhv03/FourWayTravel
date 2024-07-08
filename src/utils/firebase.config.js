import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// // 	Firebase chính
export const firebaseConfig = {
	apiKey: 'AIzaSyCA4NDwEP87kbIHv3pTT8-Zf2H0PjLmDDU',
	authDomain: 'hotel-fourwaytravel.firebaseapp.com',
	projectId: 'hotel-fourwaytravel',
	storageBucket: 'hotel-fourwaytravel.appspot.com',
	messagingSenderId: '859448634168',
	appId: '1:859448634168:web:661c754d107e4d123b2fcd',
	measurementId: 'G-PH9FFG3CNK',
};

// // 	Firebase phụ
// export const firebaseConfig = {
// 	apiKey: 'AIzaSyDbOQXdfYi3iC5_iurCkWzcvACSOQ2jsLY',
// 	authDomain: 'hotel-fourwaytravel1.firebaseapp.com',
// 	projectId: 'hotel-fourwaytravel1',
// 	storageBucket: 'hotel-fourwaytravel1.appspot.com',
// 	messagingSenderId: '537298631411',
// 	appId: '1:537298631411:web:51b51d9b36df7e9982d586',
// 	measurementId: 'G-7C56NPP0Z4',
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
