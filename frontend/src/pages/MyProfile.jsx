import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import assets from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const { userData, setUserData, token, backendUrl, loadUserProfile } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState(false)

    const updateUserProfile = async () => {

        try {

            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('gender', userData.gender);
            formData.append('phone', userData.phone);
            formData.append('address', JSON.stringify(userData.address));
            formData.append('dob', userData.dob);

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfile()
                setIsEdit(false);
                setImage(false);
            } else {
                toast.error(error.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }

    return userData && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl flex flex-col md:flex-row items-start">
                {/* Left Section: Profile Image */}
                <div className="w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                    {isEdit ?
                        <label htmlFor='image'>

                            <div className='inline-block relative cursor-pointer'>
                                <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                                <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />

                            </div>
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
                        </label> :
                        <img
                            src={userData.image}
                            alt="Profile"
                            className="w-40 h-40 rounded-full border-4 border-blue-500"
                        />
                    }

                    {isEdit ? (
                        <input
                            type="text"
                            value={userData.name}
                            onChange={(e) =>
                                setUserData((prev) => ({ ...prev, name: e.target.value }))
                            }
                            className="mt-4 text-lg font-semibold text-gray-800 text-center border-b-2 border-blue-500 outline-none focus:border-blue-700"
                        />
                    ) : (
                        <p className="mt-4 text-xl font-semibold text-gray-800">{userData.name}</p>
                    )}
                </div>

                {/* Right Section: User Info */}
                <div className="w-full md:w-2/3 px-6">
                    <hr className="border-gray-300 mb-6 md:hidden" />

                    {/* Contact Information */}
                    <div className="mb-6">
                        <p className="text-lg font-semibold text-gray-700 mb-3">Contact Information</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-600">Email ID:</p>
                                <p className="text-gray-800">{userData.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Phone:</p>
                                {isEdit ? (
                                    <input
                                        type="text"
                                        value={userData.phone}
                                        onChange={(e) =>
                                            setUserData((prev) => ({ ...prev, phone: e.target.value }))
                                        }
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-800">{userData.phone}</p>
                                )}
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Address:</p>
                                {isEdit ? (
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            value={userData.address.line1}
                                            onChange={(e) =>
                                                setUserData((prev) => ({
                                                    ...prev,
                                                    address: { ...prev.address, line1: e.target.value },
                                                }))
                                            }
                                            placeholder="Address Line 1"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="text"
                                            value={userData.address.line2}
                                            onChange={(e) =>
                                                setUserData((prev) => ({
                                                    ...prev,
                                                    address: { ...prev.address, line2: e.target.value },
                                                }))
                                            }
                                            placeholder="Address Line 2"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                ) : (
                                    <p className="text-gray-800">
                                        {userData.address.line1}
                                        <br />
                                        {userData.address.line2}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Basic Information */}
                    <div>
                        <p className="text-lg font-semibold text-gray-700 mb-3">Basic Information</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-600">Gender:</p>
                                {isEdit ? (
                                    <select
                                        value={userData.gender}
                                        onChange={(e) =>
                                            setUserData((prev) => ({ ...prev, gender: e.target.value }))
                                        }
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                ) : (
                                    <p className="text-gray-800">{userData.gender}</p>
                                )}
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Birthday:</p>
                                {isEdit ? (
                                    <input
                                        type="date"
                                        value={userData.dob}
                                        onChange={(e) =>
                                            setUserData((prev) => ({ ...prev, dob: e.target.value }))
                                        }
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-800">{userData.dob}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Edit/Save Button */}
                    <div className="mt-6 flex justify-end">
                        {isEdit ? (
                            <button
                                onClick={updateUserProfile}
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                            >
                                Save Information
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsEdit(true)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
