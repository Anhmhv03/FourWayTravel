import { auth, firestore } from "@/utils/firebase.config";
import Button from '@mui/material/Button';
import {
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../assets/css/custom_color.css";
import "../assets/css/login.css";
import { routes } from '../utils/routes';

const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);

            // Lưu thông tin người dùng
            const userDocRef = doc(firestore, "users", result.user.uid);
            const userSnapshot = await getDoc(userDocRef);

            if (userSnapshot.exists()) {
                // Nếu tài liệu người dùng đã tồn tại trong Firestore
                const userData = {
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                };

                // Bổ sung email nếu nó đã tồn tại
                if (result.user.email) {
                    userData.email = result.user.email;
                }

                await updateDoc(userDocRef, userData);
            } else {
                // Tạo tài liệu người dùng mới nếu chưa tồn tại
                const userData = {
                    uid: result.user.uid,
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                    isOnline: true,
                    isAdmin: false,
                    lastMessageTime: null,
                };
                await setDoc(userDocRef, userData);
            }

            if (navigator.geolocation) {
                navigate(routes.HOME);
            }
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    };

    return (
        <>
            <Button onClick={signInWithGoogle}
                className="border-t mt-2 border-2 border-gray-900 flex items-center justify-center w-full">
                <span>Đăng nhập với Google</span>
            </Button>
        </>
    );
}
export default Login;

