import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import assets from '../../assets/assets';

const AllAppointment = () => {
    const { atoken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

    const [loading, setLoading] = useState(true); // State to track loading

    const fetchData = async () => {
        if (atoken) {
            setLoading(true);
            await getAllAppointments();
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [atoken]);

    return (
        <div className="w-full max-w-6xl m-5">
            <p className="mb-3 text-lg font-medium">All Appointments</p>
            {/* Show a loading spinner or message while data is being fetched */}
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <p className="text-gray-500">Loading appointments...</p>
                </div>
            ) : (
                <div>
                    {/* Header Row */}
                    <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-200">
                        <p>#</p>
                        <p>Patient</p>
                        <p>Age</p>
                        <p>Date & Time</p>
                        <p>Doctor</p>
                        <p>Fees</p>
                        <p>Actions</p>
                    </div>
                    {/* Appointments List */}
                    {appointments?.map((item, index) => (
                        <div
                            key={index}
                            className="grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-cols-1 py-3 px-6 border-b border-gray-200 items-center"
                        >
                            <p>{index + 1}</p>
                            <div className="flex items-center space-x-2">
                                <img
                                    src={item.userData.image}
                                    alt={item.userData.name}
                                    className="w-8 h-8 rounded-full border border-gray-300"
                                />
                                <p>{item.userData.name}</p>
                            </div>
                            <p className="hidden sm:block">{calculateAge(item.userData.dob)}</p>
                            <p>
                                {slotDateFormat(item.slotDate)} , {item.slotTime}
                            </p>
                            <div className="flex items-center space-x-2">
                                <img
                                    className="w-8 h-8 rounded-full bg-gray-200"
                                    src={item.docData.image}
                                    alt={item.docData.name}
                                />
                                <p>{item.docData.name}</p>
                            </div>
                            <p>
                                {currency}
                                {item.amount}
                            </p>
                            {item.cancelled ? (
                                <p className="text-red-400 text-xs font-medium">Cancelled</p>
                            ) : item.isCompleted
                                ? <p className='text-green-500 text-xs font-medium'>Completed</p>
                                : (
                                    <img
                                        onClick={() => cancelAppointment(item._id)}
                                        className="w-10 cursor-pointer hover:scale-105 transition"
                                        src={assets.cancel_icon}
                                        alt="Cancel"
                                    />
                                )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllAppointment;
