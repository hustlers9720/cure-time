import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctor = () => {
    const { speciality } = useParams();
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [filterDoc, setFilterDoc] = useState([]);

    // Filter doctors based on the selected speciality
    useEffect(() => {
        if (speciality) {
            setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
        } else {
            setFilterDoc(doctors);
        }
    }, [speciality, doctors]);

    return (
        <div className="p-6">
            <p className="text-xl font-bold mb-4">Browse through the doctor speciality</p>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Speciality List */}
                <div className="flex flex-col gap-4 text-gray-800" >
                    {[
                        'General physician',
                        'Dermatologist',
                        'Gynecologist',
                        'Pediatricians',
                        'Neurologist',
                        'Gastroenterologist',
                    ].map((category, index) => (
                        <p
                            key={index}
                            className="border border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-100 cursor-pointer "
                            onClick={() => speciality === category ? navigate('/doctor') : navigate(`/doctor/${category}`)}
                        >
                            {category}
                        </p>
                    ))}
                </div>

                {/* Doctors List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                    {filterDoc.length > 0 ? (
                        filterDoc.map((item, index) => (
                            <div
                                key={index}
                                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300"
                                onClick={() => navigate(`/appointment/${item._id}`)}
                            >
                                {/* Doctor Image */}
                                <div className="bg-blue-50 w-full aspect-w-1 aspect-h-1">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={item.image}
                                        alt={`${item.name}'s profile`}
                                    />
                                </div>
                                {/* Doctor Details */}
                                <div className="p-4">
                                    <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                                        <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></p>
                                        <p>{item.available ? 'Available' : 'Not Available'}</p>
                                    </div>
                                    <p className="font-semibold text-gray-900 text-lg">{item.name}</p>
                                    <p className="text-gray-600 text-sm">{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No doctors available for this speciality.</p>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Doctor;
