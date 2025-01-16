import React from 'react';
import { AdminContext } from '../context/AdminContext';
import { useContext } from 'react';
import logo from '../assets/hello-removebg-preview.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const { atoken, setAToken } = useContext(AdminContext);
    const navigate = useNavigate();

    const logout = () => {
        navigate('/')
        if (atoken) {
            setAToken(''); localStorage.removeItem('atoken');
        }
    };

    return (
        <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
            {/* Left Section: Logo and Role */}
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
                <p className="text-lg font-semibold text-gray-700">
                    {atoken ? 'Admin' : 'Doctor'}
                </p>
            </div>


            {/* Right Section: Logout Button */}
            <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
                Logout
            </button>
        </div>
    );
};

export default Navbar;
