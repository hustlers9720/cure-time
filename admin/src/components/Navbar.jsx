import React from 'react';
import { AdminContext } from '../context/AdminContext';
import { useContext } from 'react';
import logo from '../assets/new logo.png';
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';


const Navbar = () => {
    const { atoken, setAToken } = useContext(AdminContext);
    const { dToken, setDToken } = useContext(DoctorContext)
    const navigate = useNavigate();

    const logout = () => {
        navigate('/')
        if (atoken) {
            setAToken(''); localStorage.removeItem('atoken');
        }

        if (dToken) {
            setDToken('');
            localStorage, removeItem('dToken');
        }
    };

    return (
        <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
            {/* Left Section: Logo and Role */}
            <div className="flex items-center space-x-4">
                <img onClick={() => navigate('/doctor-dashboard')} src={logo} alt="Logo" className="w-20 h-18 object-contain" />
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
