import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitData = async () => {
        try {
            const response = await axios.post('http://localhost:8888/admin/signup', {
                cinemaName: name,
                email,
                address,
                password,
                confirmPassword
            });
            if (response) {
                console.log("Hello", response);
                navigate('/login');
            }
        } catch (error) {
            toast.error('User Already Exists');
            console.error('Error during signup:', error);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative flex flex-col text-gray-700 bg-transparent shadow-md rounded-xl p-8 bg-white w-[28rem]"> {/* Adjusted width here */}
                <h2 className="text-2xl mb-4 text-center">Sign Up</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">Cinema Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        className="border w-full p-2"
                        placeholder="Enter cinema name..."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="border w-full p-2"
                        placeholder="Enter email..."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-1">Cinema Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleAddressChange}
                        className="border w-full p-2"
                        placeholder="Enter cinema address..."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="border w-full p-2"
                        placeholder="Enter password..."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="border w-full p-2"
                        placeholder="Confirm password..."
                    />
                </div>
                <button
                    onClick={submitData}
                    className="mt-6 block w-full select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-opacity-50"
                    type="button">
                    Sign Up
                </button>
                <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-red-500">
                        Sign In
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Signup;
