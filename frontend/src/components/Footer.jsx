import React from 'react';
import cureTimeImage from '../assets/new logo.png';

const Footer = () => {
    return (
        <div className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Logo and Description */}
                    <div className="flex-1 text-center md:text-left">
                        <img src={cureTimeImage} alt="CureTime Logo" className="mx-auto md:mx-0 w-32 mb-4" />
                        <p className="text-sm leading-relaxed">
                            An online doctor appointment web app simplifies healthcare access by allowing users to book consultations with doctors seamlessly. It offers features like real-time availability, appointment scheduling, and reminders.
                        </p>
                    </div>
                    {/* Company Links */}
                    <div className="flex-1 text-center md:text-left ml-20">
                        <p className="font-semibold text-lg mb-4">COMPANY</p>
                        <ul className="space-y-2">
                            <li className="hover:text-gray-600 cursor-pointer">Home</li>
                            <li className="hover:text-gray-600 cursor-pointer">About us</li>
                            <li className="hover:text-gray-600 cursor-pointer">Contact us</li>
                            <li className="hover:text-gray-600 cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="font-semibold text-lg mb-4">GET IN TOUCH</p>
                        <ul className="space-y-2">
                            <li className="hover:text-gray-600 cursor-pointer">+1-212-456-7980</li>
                            <li className="hover:text-gray-600 cursor-pointer">adigoyal9720@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8">
                    <hr className="border-gray-300" />
                    <p className="text-center text-sm mt-4">
                        &copy; 2024 CureTime - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
