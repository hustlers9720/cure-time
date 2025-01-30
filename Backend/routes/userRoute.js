import express from 'express';

import { registerUser, userLogin, userProfile, updateUserProfile, bookAppointment, listAppointment, cancelAppointment, paymentRazorPay, verifyRazorpay } from '../controllers/userController.js';
import authUser from '../middleware/authUser.js';
import upload from '../middleware/multer.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', userLogin);
userRouter.get('/get-profile', authUser, userProfile)
userRouter.post('/update-profile', upload.single('image'), authUser, updateUserProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.get('/appointments', authUser, listAppointment)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)

userRouter.post('/payment-razorpay', authUser, paymentRazorPay)

userRouter.post('/verifyRazorpay', authUser, verifyRazorpay)


export default userRouter