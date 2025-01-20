import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {

    const backendUrl = "https://cure-time-backend.onrender.com"
    // const [atoken, setAToken] = useState(localStorage.getItem('atoken') ? localStorage.getItem('atoken') : '')
    const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')
    const [appointments, setAppointments] = useState([])
    console.log(backendUrl)
    const [profileData, setProfileData] = useState(false)

    const [dashData, setDashData] = useState(false)
    const getAppointments = async () => {
        try {
            // console.log(dToken);
            const { data } = await axios.get(backendUrl + '/api/doctor/appointments', {
                headers: {
                    Authorization: `Bearer ${dToken}`
                }
            })
            if (data.success) {
                setAppointments(data.appointments);
                console.log(data.appointments);

            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }


    const completeAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/doctor/complete-appointment`,
                { appointmentId },
                {
                    headers: {
                        Authorization: `Bearer ${dToken}` // Correctly format the token
                    }
                }
            );
            if (data.success) {
                toast.success(data.message);
                await getAppointments(); // Ensure appointments are refreshed
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            // console.error(error);
            toast.error(error.response?.data?.message);
        }
    };



    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/doctor/cancel-appointment', { appointmentId }, {
                headers: {
                    Authorization: `Bearer ${dToken}` // Correctly format the token
                }
            })
            if (data.success) {
                toast.success(data.message)
                getAppointments()
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            // console.log(error);
            toast.error(error.message)
        }
    }


    // api for the data showing on doctor dashboard
    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/dashboard', {
                headers: {
                    Authorization: `Bearer ${dToken}` // Correctly format the token
                }
            })
            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData);


            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            // console.log(error);
            toast.error(error.message)
        }
    }


    // api to fetch the doctor profile for doctor panel
    const getProfileData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/profile', {
                headers: {
                    Authorization: `Bearer ${dToken}` // Correctly format the token
                }
            })

            if (data.success) {
                setProfileData(data.profileData)
                console.log(data.profileData);

            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        dToken, setDToken, backendUrl, appointments, setAppointments, getAppointments, completeAppointment, cancelAppointment, getDashData, dashData, setDashData, getProfileData, profileData
        , setProfileData
    }
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}



export default DoctorContextProvider
