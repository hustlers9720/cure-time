import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
    const { doctors } = useContext(AppContext);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-8">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    My Appointments
                </h2>
                <div className="space-y-6">
                    {doctors.slice(0, 2).map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 border rounded-lg shadow-sm p-4 hover:shadow-md transition"
                        >
                            {/* Doctor Image */}
                            <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
                                />
                            </div>

                            {/* Doctor Info */}
                            <div className="w-full md:w-2/4 px-4">
                                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.speciality}</p>
                                <div className="mt-3">
                                    <p className="text-sm text-gray-600">Address:</p>
                                    <p className="text-gray-800">{item.address.line1}</p>
                                    <p className="text-gray-800">{item.address.line2}</p>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">
                                    <span className="font-medium text-gray-800">Date & Time:</span>{' '}
                                    25 July, 2024 | 8:30 AM
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="w-full md:w-1/4 mt-4 md:mt-0 flex flex-col items-center md:items-end">
                                <button className="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mb-2">
                                    Pay Online
                                </button>
                                <button className="w-full md:w-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                                    Cancel Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;
