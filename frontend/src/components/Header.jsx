import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden items-center mt-2">
            {/* Left Side */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-8 md:py-12">
                <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-tight">
                    Seamless Appointments ,<br /> with Trusted Doctors
                </p>
                <div className="flex items-center gap-4">
                    <img src={assets.group_profiles} alt="Profiles" className="w-16 md:w-20" />
                    <p className="text-white text-ls md:text-base">
                        Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.
                    </p>
                </div>

                <a
                    href="#speciality"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                    Book Appointment
                    <img src={assets.arrow_icon} alt="Arrow" className="w-4 h-4" />
                </a>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 flex items-center justify-center">
                <img
                    src={assets.header_img}
                    alt="Header Illustration"
                    className="w-[90%] md:w-[80%] h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default Header;
