import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import cureTimeImage from '../assets/hello-removebg-preview.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between px-6 py-3 bg-gray-50 shadow-md w-full max-w-screen-xl mx-auto">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <img
                    onClick={() => navigate('/')}
                    src={cureTimeImage}
                    alt="CureTime Logo"
                    className="h-10 w-auto cursor-pointer object-contain rounded-sm"
                />
                <span className="text-xl font-semibold text-gray-800">CureTime</span>
            </div>

            {/* Navigation Links */}
            <ul className="gap-6 items-center hidden md:flex font-medium">
                <NavLink to="/" className="text-gray-700 hover:text-blue-500">
                    <li className="cursor-pointer">Home</li>
                </NavLink>
                <NavLink to="/doctor" className="text-gray-700 hover:text-blue-500">
                    <li className="cursor-pointer">All Doctors</li>
                </NavLink>
                <NavLink to="/about" className="text-gray-700 hover:text-blue-500">
                    <li className="cursor-pointer">About</li>
                </NavLink>
                <NavLink to="/contact" className="text-gray-700 hover:text-blue-500">
                    <li className="cursor-pointer">Contact</li>
                </NavLink>
            </ul>

            {/* User Actions */}
            <div>
                {token ? (
                    <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                        <div className="absolute top-0 right-0 pt-12 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                <p onClick={() => navigate('/profile')} className="hover:text-black cursor-pointer">
                                    My Profile
                                </p>
                                <p
                                    onClick={() => navigate('/MyAppointment')}
                                    className="hover:text-black cursor-pointer"
                                >
                                    My Appointments
                                </p>
                                <p
                                    onClick={() => setToken(false)}
                                    className="hover:text-black cursor-pointer"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Create Account
                    </button>
                )}
                <img
                    className="ml-10 w-6 md:hidden"
                    onClick={() => setShowMenu(true)}
                    src={assets.menu_icon}
                    alt="Menu"
                />
                {/** Mobile Menu */}
                <div
                    className={`${showMenu ? 'fixed w-full h-full' : 'hidden'
                        } md:hidden bg-white top-0 right-0 bottom-0 z-20`}
                >
                    <div className="relative h-full">
                        <img
                            className="absolute top-4 right-4 w-8 cursor-pointer"
                            onClick={() => setShowMenu(false)}
                            src={assets.cross_icon}
                            alt="Close"
                        />
                        <div className="flex items-center justify-between px-5 py-6">
                            <img className="w-12" src={cureTimeImage} alt="CureTime" />
                        </div>
                        <ul className="flex flex-col items-center gap-4 mt-8 text-lg font-medium">
                            <NavLink className='px-4 py-2 rounded inline-block' onClick={() => setShowMenu(false)} to="/">
                                <p>Home</p>
                            </NavLink>
                            <NavLink className='px-4 py-2 rounded inline-block' onClick={() => setShowMenu(false)} to="/about">
                                About
                            </NavLink>
                            <NavLink className='px-4 py-2 rounded inline-block' onClick={() => setShowMenu(false)} to="/doctor">
                                All Doctors
                            </NavLink>
                            <NavLink className='px-4 py-2 rounded inline-block' onClick={() => setShowMenu(false)} to="/contact">
                                Contact
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
