import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const MyAppointment = () => {
    const { backendUrl, token, getDoctorsData } = useContext(AppContext);
    const [appointments, setAppointments] = useState([]);
    const months = [' ', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_');
        return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2];
    };

    const getUserAppointments = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } });

            if (data.success) {
                setAppointments(data.appointments.reverse());
                console.log(data.appointments);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/cancel-appointment',
                { appointmentId },
                { headers: { token } }
            );

            if (data.success) {
                toast.success(data.message);

                // Update local state to reflect cancellation
                setAppointments((prevAppointments) =>
                    prevAppointments.map((appointment) =>
                        appointment._id === appointmentId
                            ? { ...appointment, cancelled: true }
                            : appointment
                    )
                );

                // Optionally refresh other related data
                getUserAppointments()
                getDoctorsData();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (token) {
            getUserAppointments();
        }
    }, [token]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-8">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    My Appointments
                </h2>
                <div className="space-y-6">
                    {appointments.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 border rounded-lg shadow-sm p-4 hover:shadow-md transition"
                        >
                            {/* Doctor Image */}
                            <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
                                <img
                                    src={item.docData.image}
                                    alt={item.name}
                                    className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
                                />
                            </div>

                            {/* Doctor Info */}
                            <div className="w-full md:w-2/4 px-4">
                                <p className="text-lg font-semibold text-gray-800">{item.docData.name}</p>
                                <p className="text-sm text-gray-600">{item.docData.speciality}</p>
                                <div className="mt-3">
                                    <p className="text-sm text-gray-600">Address:</p>
                                    <p className="text-gray-800">{item.docData.address.line1}</p>
                                    <p className="text-gray-800">{item.docData.address.line2}</p>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">
                                    <span className="font-medium text-gray-800">Date & Time:</span>{' '}
                                    {slotDateFormat(item.slotDate)} | {item.slotTime}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="w-full md:w-1/4 mt-4 md:mt-0 flex flex-col items-center md:items-end">
                                {!item.cancelled && !item.isCompleted && (
                                    <button className="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mb-2">
                                        Pay Online
                                    </button>
                                )}
                                {!item.cancelled && !item.isCompleted && (
                                    <button
                                        onClick={() => cancelAppointment(item._id)}
                                        className="w-full md:w-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                    >
                                        Cancel Appointment
                                    </button>
                                )}
                                {item.cancelled && !item.isCompleted && (
                                    <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
                                        Appointment Cancelled
                                    </button>
                                )}
                                {
                                    item.isCompleted &&
                                    <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;
