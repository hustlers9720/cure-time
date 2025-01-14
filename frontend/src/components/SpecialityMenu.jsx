import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div className='flex flex-col items-center gap-3 px-16 text-gray-800' id='speciality'>
            <h1 className='text-3xl font-medium mt-2'> Find by Speciality</h1>
            <p className='sm:w-1/2 text-center text-sm'>Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {specialityData.map((item, index) => {

                    return (
                        <Link onClick={() => scrollTo(0)} key={index} to={`/doctor/${item.speciality}`} className="flex flex-col  cursor-pointer items-center gap-2 hover:translate-y-[-10px] transition-all duration-500">
                            <img src={item.image} alt={item.speciality} className="w-20 h-20 mb-2 rounded-full" />
                            <p className="text-gray-700 text-sm font-medium">{item.speciality}</p>
                        </Link>
                    );
                })}

            </div>
        </div>
    )
}

export default SpecialityMenu
