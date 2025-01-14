import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctor from './pages/Doctor'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/doctor/:speciality' element={<Doctor />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/MyAppointment' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
