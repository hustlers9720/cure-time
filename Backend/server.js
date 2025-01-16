import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';

const app = express();

app.use(express.json())
app.use(cors());
connectDB();
connectCloudinary();


// end points
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.get('/', function (req, res) {
    res.send('its running')
})

app.listen(3000, function (req, res) {
    console.log('Server is running');

})