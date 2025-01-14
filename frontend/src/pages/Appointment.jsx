import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const [docInfo, setDocInfo] = useState(null);

    const [docSlots, setDocSlots] = useState([]);
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [selectedTime, setSelectedTime] = useState('');

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const FetchDocInfo = () => {
        const docInfo = doctors.find(doc => doc._id === docId);
        setDocInfo(docInfo);
    };

    const getAvailableSlot = () => {
        const slots = [];
        const today = new Date();

        for (let i = 0; i < 7; i++) {
            const currDate = new Date(today);
            currDate.setDate(today.getDate() + i);

            const endTime = new Date(currDate);
            endTime.setHours(21, 0, 0, 0);

            if (i === 0) {
                currDate.setHours(Math.max(currDate.getHours() + 1, 10));
                currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currDate.setHours(10, 0, 0, 0);
            }

            const timeslots = [];
            while (currDate < endTime) {
                timeslots.push({
                    datetime: new Date(currDate),
                    time: currDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                });
                currDate.setMinutes(currDate.getMinutes() + 30);
            }

            slots.push(timeslots);
        }
        setDocSlots(slots);
    };

    useEffect(() => {
        FetchDocInfo();
    }, [docId, doctors]);

    useEffect(() => {
        if (docInfo) {
            getAvailableSlot();
        }
    }, [docInfo]);

    const handleDaySelection = (index) => {
        setSelectedDayIndex(index);
        setSelectedTime('');
    };

    return docInfo && (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-3">
            {/* Doctor Info Section */}
            <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                    <img
                        src={docInfo.image}
                        alt={`${docInfo.name}`}
                        className="w-40 h-40 rounded-full border-2 border-gray-300"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-semibold text-gray-800">{docInfo.name}</h2>
                        <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{docInfo.degree} - {docInfo.speciality}</p>
                    <button className="mt-3 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md">
                        {docInfo.experience} Experience
                    </button>
                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                            About <img src={assets.info_icon} alt="Info" className="w-5 h-5" />
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{docInfo.about}</p>
                    </div>
                    <p className="text-gray-700 mt-4">Appointment Fee:
                        <span className="text-gray-600"> {currencySymbol}{docInfo.fees}</span>
                    </p>
                </div>
            </div>

            {/* Booking Slots Section */}
            <div className="mt-8">
                <h4 className="font-medium text-gray-700 text-lg text-center mb-4">Select Your Appointment Date</h4>
                <div className="flex justify-center gap-3 overflow-x-auto">
                    {docSlots.map((daySlots, index) => (
                        <button
                            key={index}
                            className={`w-20 h-20 flex flex-col items-center justify-center text-center rounded-lg text-sm font-medium ${selectedDayIndex === index
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => handleDaySelection(index)}
                        >
                            <span className="text-lg font-bold">
                                {daySlots[0]?.datetime.getDate()}
                            </span>
                            <span className="text-sm">{daysOfWeek[daySlots[0]?.datetime.getDay()]}</span>
                        </button>
                    ))}
                </div>

                <div className="mt-6">
                    <h5 className="font-medium text-gray-700 text-center mb-4">Select Your Appointment Time</h5>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {docSlots[selectedDayIndex]?.map((slot, i) => (
                            <button
                                key={i}
                                className={`px-3 py-2 rounded-md text-sm ${selectedTime === slot.time
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                                    }`}
                                onClick={() => setSelectedTime(slot.time)}
                            >
                                {slot.time}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedTime && (
                    <p className="mt-6 text-green-600 font-small text-center">
                        Selected Appointment: {daysOfWeek[docSlots[selectedDayIndex][0]?.datetime.getDay()]}, {docSlots[selectedDayIndex][0]?.datetime.getDate()} at {selectedTime}
                    </p>
                )}

            </div>
            <div className='text-center'>
                <button className='bg-blue-600 text-white text-small font-light rounded-full my-6 px-10 py-2' >Book an Appointment</button>
            </div>

            <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
    );
};

export default Appointment;
