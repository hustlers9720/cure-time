import React, { useState, useEffect, useContext } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import assets from '../../assets/assets';

const DoctorAppointment = () => {
    const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext);
    const [loading, setLoading] = useState(false);
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

    useEffect(() => {
        const fetchAppointments = async () => {
            if (dToken) {
                setLoading(true);
                await getAppointments();
                setLoading(false);
            }
        };
        fetchAppointments();
    }, [dToken]);

    return (
        <div className="w-full max-w-6xl mx-auto my-8 p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-lg shadow-lg">
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <p className="text-lg font-medium text-gray-500 animate-pulse">Loading...</p>
                </div>
            ) : (
                <>
                    <p className="mb-6 text-2xl font-semibold text-gray-700 border-b pb-3">All Appointments</p>
                    <div className="hidden sm:grid grid-cols-7 gap-4 bg-gray-200 py-3 px-6 text-gray-800 font-semibold rounded-t-md shadow-inner">
                        <p>#</p>
                        <p>Patient</p>
                        <p>Payment Status</p>
                        <p>Age</p>
                        <p>Date & Time</p>
                        <p>Fees</p>
                        <p>Action</p>
                    </div>
                    <div className="space-y-5">
                        {appointments?.reverse().map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 sm:grid-cols-7 gap-4 items-center py-4 px-6 border rounded-md shadow-md bg-white hover:bg-blue-50 transition-all duration-200"
                            >
                                <p className="font-medium text-gray-600">{index + 1}</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        className="w-12 h-12 rounded-full object-cover shadow-sm"
                                        src={item?.userData?.image || 'https://via.placeholder.com/150'}
                                        alt="Patient"
                                    />
                                    <p className="font-medium text-gray-800">{item?.userData?.name || 'N/A'}</p>
                                </div>
                                <p
                                    className={`text-sm font-medium ${item.payment ? 'text-green-600' : 'text-yellow-600'
                                        }`}
                                >
                                    {item.payment ? 'Online' : 'Cash'}
                                </p>
                                <p className="text-sm text-gray-600">{calculateAge(item.userData.dob)}</p>
                                <p className="text-sm text-gray-600">{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
                                <p className="text-sm text-gray-600">{currency}{item.amount}</p>
                                {item.cancelled ? (
                                    <p className="text-sm font-medium text-red-500">Cancelled</p>
                                ) : item.isCompleted ? (
                                    <p className="text-sm font-medium text-green-500">Completed</p>
                                ) : (
                                    <div className="flex gap-4">
                                        <img
                                            onClick={() => cancelAppointment(item._id)}
                                            className="cursor-pointer w-8 h-8 transform hover:scale-110 transition-transform"
                                            src={assets.cancel_icon}
                                            alt="Cancel"
                                        />
                                        <img
                                            onClick={() => completeAppointment(item._id)}
                                            className="cursor-pointer w-8 h-8 transform hover:scale-110 transition-transform"
                                            src={assets.tick_icon}
                                            alt="Complete"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default DoctorAppointment;
