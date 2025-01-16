import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const DoctorsList = () => {
    const { doctors, atoken, getAllDoctors, changeAvailability } = useContext(AdminContext);

    useEffect(() => {
        if (atoken) {
            getAllDoctors();
        }
    }, [atoken]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Doctors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {doctors.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:bg-blue-100 hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-full mb-4"
                        />
                        <div className="text-center">
                            <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.speciality}</p>
                        </div>
                        <div className="mt-4 flex items-center space-x-2">
                            <input
                                onChange={() => changeAvailability(item._id)}
                                type="checkbox"
                                checked={item.available}
                                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400 focus:ring-opacity-50"
                                readOnly
                            />
                            <p className="text-sm text-gray-600">
                                {item.available ? 'Available' : 'Not Available'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsList;
