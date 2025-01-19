import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ docId, speciality }) => {
    const { doctors } = useContext(AppContext);
    const [relDoc, setRelDoc] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id != docId)
            setRelDoc(doctorsData);

        }
    }, [doctors, speciality, docId])
    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Top Doctors To Book</h1>
            <p className="sm:w-1/2 text-center text-sm">Simply browse to our extensive list of doctors</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {relDoc.slice(0, 5).map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                        >
                            {/* Updated image container */}
                            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className="bg-blue-50 w-full aspect-w-1 aspect-h-1">
                                <img
                                    className="w-full h-full object-contain"
                                    src={item.image}
                                    alt={`${item.name}'s profile`}
                                />
                            </div>
                            <div className="p-4">
                                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></p>
                                    <p>{item.available ? 'Available' : 'Not Available'}</p>
                                </div>
                                <p className="font-semibold text-gray-900 text-lg">{item.name}</p>
                                <p className="text-gray-600 text-sm">{item.speciality}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button onClick={() => { navigate('/doctor'); scrollTo(0, 0) }} className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">More</button>
        </div>

    )
}

export default RelatedDoctors
