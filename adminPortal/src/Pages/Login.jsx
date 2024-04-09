import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    const submitData = async () => {
        try {
            const response = await axios.post('http://localhost:8888/admin/login', {
                email,
                password
            });
            if (response && response.data) {
                const token = response.data.token;
                const decodedToken = parseJwt(token);
                const tokenString = JSON.stringify({
                    id: decodedToken.id,
                    email: decodedToken.email
                });
                if (tokenString) {
                    window.localStorage.setItem('myToken', tokenString);
                    navigate('/');
                    window.location.reload(false);
                }
            }
        } catch (error) {
            toast.error('Wrong Password');
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="relative flex flex-col text-gray-700 bg-transparent shadow-md rounded-xl p-8 bg-white">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Login
                    </h4>
                    <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Nice to meet you! Enter your details to enter.
                    </p>
                    <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                        <div className="flex flex-col gap-6 mb-1">
                            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Your Email
                            </h6>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    placeholder="name@mail.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all focus:border-gray-900 focus:outline-none"
                                />
                            </div>
                            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Password
                            </h6>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all focus:border-gray-900 focus:outline-none"
                                />
                            </div>
                        </div>
                        <button
                            onClick={submitData}
                            className="mt-6 block w-full select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-opacity-50"
                            className="mt-6 block w-full select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Login
                        </button>
                        <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                            Don't have an account?{' '}
                            <Link to="/signup" className="font-medium text-red-500">
                                Signup
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Login;
