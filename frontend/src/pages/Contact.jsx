import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
    return (
        <div className="bg-gray-50 py-10">
            {/* Header */}
            <div className="text-center text-2xl font-semibold text-gray-700 mb-8">
                <p>CONTACT <span className="text-blue-600">US</span></p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
                {/* Image */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                        <img
                            src={assets.contact_image}
                            alt="Contact"
                            className="w-full md:w-64 rounded-md object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-4">
                        {/* Office Information */}
                        <div>
                            <p className="text-lg font-semibold text-gray-800">OUR OFFICE</p>
                            <p className="text-sm text-gray-600">123 CureTime Street, Healthcare City</p>
                            <p className="text-sm text-gray-600">Phone: +1-234-567-890</p>
                        </div>

                        {/* Careers Information */}
                        <div>
                            <p className="text-lg font-semibold text-gray-800">Careers at CURETIME</p>
                            <p className="text-sm text-gray-600">Learn more about our teams and job openings.</p>
                            <button className="mt-4 px-6 py-2 bg-blue-500 text-white text-sm rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                                Explore Jobs
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
