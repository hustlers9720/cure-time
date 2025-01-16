import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import assets from '../assets/assets'

const Sidebar = () => {
    const { atoken } = useContext(AdminContext)
    return (
        <div className="min-h-screen bg-gray-50 border-r w-64 md:w-80 lg:w-64 px-4 py-6 flex flex-col">
            {atoken && (
                <ul className="space-y-4">
                    <li>
                        <NavLink
                            to="/admin-dashboard"
                            className={({ isActive }) =>
                                `flex items-center space-x-4 p-3 rounded-md ${isActive
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-500'
                                }`
                            }
                        >
                            <img src={assets.home_icon} alt="Dashboard" className="w-6 h-6" />
                            <p className="font-medium">Dashboard</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/all-appointment"
                            className={({ isActive }) =>
                                `flex items-center space-x-4 p-3 rounded-md ${isActive
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-500'
                                }`
                            }
                        >
                            <img src={assets.appointment_icon} alt="Appointment" className="w-6 h-6" />
                            <p className="font-medium">Appointment</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-doctor"
                            className={({ isActive }) =>
                                `flex items-center space-x-4 p-3 rounded-md ${isActive
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-500'
                                }`
                            }
                        >
                            <img src={assets.add_icon} alt="Add Doctor" className="w-6 h-6" />
                            <p className="font-medium">Add Doctor</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/doctor-list"
                            className={({ isActive }) =>
                                `flex items-center space-x-4 p-3 rounded-md ${isActive
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-500'
                                }`
                            }
                        >
                            <img src={assets.people_icon} alt="Doctors List" className="w-6 h-6" />
                            <p className="font-medium">Doctors List</p>
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Sidebar
