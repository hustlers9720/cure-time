import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import assets from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const Dashboard = () => {
    const { atoken, getDashData, cancelAppointment, dashData } = useContext(AdminContext);
    const { slotDateFormat } = useContext(AppContext)
    useEffect(() => {
        if (atoken) {
            getDashData();
        }
    }, [atoken]);

    return dashData && (
        <div className="m-5">
            {/* Summary Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <img src={assets.doctor_icon} alt="Doctors" className="w-12 h-12 mr-4" />
                    <div>
                        <p className="text-2xl font-semibold text-blue-500">{dashData.doctors}</p>
                        <p className="text-gray-600">Doctors</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <img src={assets.appointment_icon} alt="Appointments" className="w-12 h-12 mr-4" />
                    <div>
                        <p className="text-2xl font-semibold text-green-500">{dashData.appointments}</p>
                        <p className="text-gray-600">Appointments</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <img src={assets.patients_icon} alt="Patients" className="w-12 h-12 mr-4" />
                    <div>
                        <p className="text-2xl font-semibold text-purple-500">{dashData.patients}</p>
                        <p className="text-gray-600">Patients</p>
                    </div>
                </div>
            </div>

            {/* Latest Bookings Section */}
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
                                    src={item.docData.image}
                                    alt={item.docData.name}
                                    className="w-12 h-12 rounded-full border-2 border-blue-500 mr-4"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{item.docData.name}</p>
                                    <p className="text-xs text-gray-600">{slotDateFormat(item.slotDate)}</p>
                                </div>
                            </div>
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
            </div>
        </div>
    );
};

export default Dashboard;
