import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import assets from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const DoctorDashboard = () => {
    const { dashData, getDashData, dToken, cancelAppointment, completeAppointment } = useContext(DoctorContext);
    const { slotDateFormat } = useContext(AppContext)


    useEffect(() => {
        if (dToken) {
            getDashData();
        }
    }, [dToken]);



    return dashData && (
        <div className="m-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
                    <img src={assets.earning_icon} alt="Earnings" className="w-12 h-12 mr-4" />
                    <div>
                        <p className="text-2xl font-semibold text-blue-500">$ {dashData.earnings}</p>
                        <p className="text-gray-600">Earnings</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
                    <img src={assets.appointment_icon} alt="Appointments" className="w-10 h-12 mr-4" />
                    <div>
                        <p className="text-2xl font-semibold text-green-500">{dashData.appointments}</p>
                        <p className="text-gray-600">Appointments</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
                    <img src={assets.patients_icon} alt="Patients" className="w-12 h-12 mr-4" />
                    <div>
                        <p className="text-2xl font-semibold text-purple-500">{dashData.patients}</p>
                        <p className="text-gray-600">Patients</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <img src={assets.list_icon} alt="Latest Bookings" className="w-8 h-8 mr-3" />
                    <p className="text-lg font-semibold text-gray-800">Latest Bookings</p>
                </div>
                <div className="space-y-4">
                    {dashData.latestAppointments.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 border rounded-lg p-4 hover:shadow transition"
                        >
                            <div className="flex items-center">
                                <img
                                    src={item.userData.image}
                                    alt={item.userData.name}
                                    className="w-12 h-12 rounded-full border-2 border-blue-500 mr-4"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{item.userData.name}</p>
                                    <p className="text-xs text-gray-600">{slotDateFormat(item.slotDate)}</p>
                                </div>
                            </div>
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
            </div>
        </div>
    );
};

export default DoctorDashboard;
