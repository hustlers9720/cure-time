import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-blue-500 flex rounded-lg px-6 sm:px-14 lg:px-12 my-20 md:mx-10 relative overflow-hidden">
            {/* Left Side */}
            <div className="flex-1 py-8 sm:py-16 lg:py-24 lg:pl-5">
                <div className="leading-snug">
                    <p className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                        Book Appointment
                    </p>
                    <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-white mt-2">
                        With 100+ Trusted Doctors
                    </p>
                </div>
                <button onClick={() => { navigate('/login'), scrollTo(0, 0) }} className="mt-6 px-6 py-3 bg-white text-blue-500 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition">
                    Create Account
                </button>
            </div>

            {/* Right Side */}
            <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full w-[500px] h-[500px] -top-20 -right-32 z-0"></div>
                <img
                    className="w-full max-w-md absolute bottom-0 right-0 z-10"
                    src={assets.appointment_img}
                    alt="Appointment"
                />
            </div>
        </div>
    );
};

export default Banner;
