import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };
    const submitData = async () => {
        try {
            const response = await axios.post('http://localhost:8888/admin/login',
                {
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
                    //console.log("Decoded Token ",decodedToken)
                    window.localStorage.setItem('myToken', tokenString)
                    navigate('/');
                    window.location.reload(false)//to reload the current web page.
                    // So, the purpose of window.location.reload(false) in this code is to refresh the page after successful login, ensuring that any changes dependent on the user's authentication status are applied immediately.
                    // The parameter false passed to reload() indicates that the browser should reload the page from the cache, if possible.
                    // If you pass true instead, it forces the browser to reload the page from the server, bypassing the cache.
                }
            }
        }
        catch (error) {
            toast.error("Wrong Password");
            console.error('Error during login:', error);
        }
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Login
                    </h4>
                    <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Nice to meet you! Enter your details to enter.
                    </p>
                    <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                        <div className="flex flex-col gap-6 mb-1">
                            <h6
                                className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Your Email
                            </h6>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input placeholder="name@mail.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                            </div>
                            <h6
                                className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Password
                            </h6>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="password" placeholder="********"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                            </div>
                        </div>
                        {/* <div className="inline-flex items-center">
                            <label className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
                                <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                    id="remember" />
                                <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="remember">
                                <p className="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                    I agree the
                                    <a href="#" className="font-medium transition-colors hover:text-gray-900">
                                        &nbsp;Terms and Conditions
                                    </a>
                                </p>
                            </label>
                        </div> */}
                        <button
                            onClick={submitData}
                            className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">

                            Login
                        </button>
                        <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                            Don't have an account?
                            <Link to="/signup" className="font-medium text-gray-900">
                                Signup
                            </Link>
                        </p>
                    </form>
                </div></div>
            <ToastContainer />
        </>
    )
}

export default Login