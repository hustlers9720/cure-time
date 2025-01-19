import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const DoctorProfile = () => {
    const { profileData, setProfileData, getProfileData, dToken, backendUrl } = useContext(DoctorContext);
    const { currency } = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false)

    const updateProfile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                available: profileData.available
            }

            const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, {
                headers: {
                    Authorization: `Bearer ${dToken}`
                }
            })

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false);
                getProfileData()
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            // console.log();

        }
    }
    useEffect(() => {
        if (dToken) {
            getProfileData();
        }
    }, [dToken]);

    return profileData && (
        <div className="container mx-auto px-4 py-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-center bg-blue-500 text-white p-6">
                    <img
                        src={profileData.image}
                        alt="Doctor"
                        className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-4 sm:mb-0"
                    />
                    <div className="sm:ml-6 text-center sm:text-left">
                        <h2 className="text-2xl font-semibold">{profileData.name}</h2>
                        <p className="text-lg">{profileData.degree} - {profileData.speciality}</p>
                        <button className="mt-2 bg-white text-blue-500 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                            {profileData.experience} Years of Experience
                        </button>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="p-6">
                    {/* About Section */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800">About</h3>
                        <p className="text-gray-600 mt-2">{profileData.about}</p>
                    </div>

                    {/* Appointment Fees */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800">Appointment Fees</h3>
                        <p className="text-gray-600 mt-2">
                            {currency}
                            {isEdit ? <input type="Number" onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}
                        </p>
                    </div>

                    {/* Address */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600 mt-2">
                            {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.address.line1} /> : profileData.address.line1}
                            <br />
                            {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address.line2} /> : profileData.address.line2}
                        </p>
                    </div>

                    {/* Availability */}
                    <div className="flex items-center mb-6">
                        <input
                            onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
                            checked={profileData.available}
                            type="checkbox"
                            id="available"
                            className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="available" className="ml-2 text-gray-800">Available</label>
                    </div>

                    {/* Edit Button */}
                    <div className="text-center">

                        {isEdit ?
                            <button onClick={updateProfile} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
                                Save Profile
                            </button> :
                            <button onClick={() => setIsEdit(true)} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
                                Edit Profile
                            </button>
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
