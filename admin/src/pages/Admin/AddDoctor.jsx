import React, { useContext } from 'react'
import assets from '../../assets/assets'
import { useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState(1)
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General Physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl, atoken } = useContext(AdminContext)

    const onSubmitHandeler = async (event) => {
        event.preventDefault();
        try {
            if (!docImg) {
                return toast.error('Image not Selected')
            }
            const formData = new FormData()
            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

            formData.forEach((value, key) => {
                console.log(`${key} :  ${value}`);
            });

            console.log(import.meta.env.VITE_BACKEND_URL);
            const { data } = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/admin/add-doctor', formData, { headers: { atoken } })

            if (data.success) {
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setEmail('')
                setPassword('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            } else {
                toast.headers(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error);

        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
            <form onSubmit={onSubmitHandeler} className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Add Doctor</h2>

                <div className="space-y-6">
                    {/* Upload Doctor Picture */}
                    <div className="flex flex-col items-center space-y-2">
                        <label htmlFor="doc-image" className="cursor-pointer">
                            <img
                                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                                alt="Upload"
                                className="w-20 h-20 object-cover border border-gray-300 rounded-full"
                            />
                        </label>
                        <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-image" hidden />
                        <p className="text-sm text-gray-600">Upload Doctor Picture</p>
                    </div>

                    {/* Doctor Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-700 mb-1">Doctor Name</p>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder="Name"
                                required
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 mb-1">Doctor Email</p>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 mb-1">Doctor Password</p>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 mb-1">Experience</p>
                            <select
                                onChange={(e) => setExperience(e.target.value)}
                                value={experience}
                                required
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value={1}>1 Year</option>
                                <option value={2}>2 Year</option>
                                <option value={3}>3 Year</option>
                                <option value={4}>4 Year</option>
                                <option value={5}>5 Year</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-gray-700 mb-1">Doctor Fees</p>
                            <input
                                onChange={(e) => setFees(e.target.value)}
                                value={fees}
                                type="number"
                                placeholder="Fees"
                                required
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 mb-1">Speciality</p>
                            <select
                                onChange={(e) => setSpeciality(e.target.value)}
                                value={speciality}
                                required
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="General physician">General physician</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-gray-700 mb-1">Education Details</p>
                            <input
                                onChange={(e) => setDegree(e.target.value)}
                                value={degree}
                                type="text"
                                placeholder="Education"
                                required
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 mb-1">Address</p>
                            <input
                                onChange={(e) => setAddress1(e.target.value)}
                                value={address1}
                                type="text"
                                placeholder="Address 1"
                                required
                                className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                onChange={(e) => setAddress2(e.target.value)}
                                value={address2}
                                type="text"
                                placeholder="Address 2"
                                required
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    {/* About Doctor */}
                    <div>
                        <p className="text-gray-700 mb-1">About Doctor</p>
                        <textarea
                            onChange={(e) => setAbout(e.target.value)}
                            value={about}
                            placeholder="Write about Doctor"
                            required
                            rows={5}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            Add Doctor
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddDoctor
