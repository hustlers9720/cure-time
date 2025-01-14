import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'

// api for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        if (!name || !password || !email || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: 'missing details' })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please Enter valid Email' })

        }


        if (password.length < 8) {
            return res.json({ success: false, message: 'Please Enter valid Strong password' })

        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            speciality,
            address: JSON.parse(address),
            degree,
            about,
            experience,
            fees,
            date: Date.now()
        }

        const newdoctor = new doctorModel(doctorData)
        await newdoctor.save()

        res.json({ success: true, message: 'Docotor Added SuccessFully' })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

// api for the admin login 
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: 'Invalid Admin Details' })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addDoctor, loginAdmin }