import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-8'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                <div className='text-sm flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
                    <p className='text-sm font-light'>CureTime is an innovative doctor appointment platform designed to bridge the gap between patients and healthcare professionals seamlessly. With a user-friendly interface and advanced scheduling features.</p>
                    <p>CureTime transforms the way people interact with healthcare services by eliminating the traditional barriers of appointment booking. By integrating features like real-time slot availability, doctor ratings, and personalized profiles.</p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>At CureTime, our vision is to revolutionize healthcare by making it accessible, reliable, and efficient for everyone. We aim to build a platform that empowers patients to take charge of their health and provides doctors with the tools they need to deliver exceptional care. By harnessing the power of technology.</p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-20">
                {/* Efficiency Card */}
                <div className="border px-6 md:px-10 py-6 sm:py-8 flex flex-col gap-4 text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg shadow-md cursor-pointer">
                    <b className="text-lg md:text-xl">Efficiency</b>
                    <p className="text-xs md:text-sm leading-snug">
                        Streamlined appointment scheduling that fits seamlessly into your lifestyle, ensuring no time is wasted.
                    </p>
                </div>

                {/* Convenience Card */}
                <div className="border px-6 md:px-10 py-6 sm:py-8 flex flex-col gap-4 text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg shadow-md cursor-pointer">
                    <b className="text-lg md:text-xl">Convenience</b>
                    <p className="text-xs md:text-sm leading-snug">
                        Access a network of trusted healthcare professionals in your area with just a few clicks.
                    </p>
                </div>

                {/* Personalization Card */}
                <div className="border px-2 md:px-10 py-6 sm:py-8 flex flex-col gap-4 text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg shadow-md cursor-pointer">
                    <b className="text-lg md:text-xl">Personalization</b>
                    <p className="text-xs md:text-sm leading-snug">
                        Tailored healthcare solutions designed to meet your individual needs. From doctor recommendations to scheduling preferences, we ensure every interaction is customized for you.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default About
