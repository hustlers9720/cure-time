🏥 Cure Time - Medical Appointment Management System
1️⃣ Description
Cure Time is a full-stack web application designed to:

📅 Manage doctor appointments efficiently
🏥 Maintain patient profiles securely
🔑 Ensure authentication for doctors, patients, and admins
💳 Support online payments for consultations
📊 Provide dashboards for admins, doctors, and users.

2️⃣ Technologies Used :
2.1️⃣ Frontend
React.js - For building an interactive UI
Axios - To handle API requests
React Router - For managing page navigation
CSS - For styling UI components

2.2️⃣ Backend
Node.js - Server-side runtime
Express.js - Web framework for handling API requests
MongoDB - NoSQL database for storing user & appointment data
Mongoose - Object Data Modeling (ODM) for MongoDB
Cloudinary - Cloud storage for images (doctor profiles, reports)
Razorpay - Secure payment gateway integration

2.3️⃣ Authentication & Security
JWT (JSON Web Token) - For secure authentication
bcrypt.js - For encrypting passwords
Multer - To handle file uploads securely

3️⃣ Folder Structure
3.1️⃣ Admin (/admin)
📂 Main directories:

node_modules/ - Dependencies
public/ - Static files
src/ - Source code
📂 Inside /src/

Assets (/assets) - Images & static files
Components (/components)
Navbar.jsx - Navigation bar
Sidebar.jsx - Sidebar menu
Context (/context)
AdminContext.jsx - Manages admin state
AppContext.jsx - Global app state
DoctorContext.jsx - Doctor-related state management
Pages (/pages/)
Admin (/Admin/)
AddDoctor.jsx - Add new doctors
AllAppointments.jsx - View all appointments
Dashboard.jsx - Admin overview panel
DoctorsList.jsx - Manage doctor list
Doctor (/Doctor/)
DoctorAppointment.jsx - View upcoming appointments
DoctorDashboard.jsx - Doctor's control panel
DoctorProfile.jsx - Manage doctor profile
Login.jsx - Authentication page
App.jsx - Main application entry point
main.jsx - Root file

3.2️⃣ Backend (/backend)
📂 Configuration (/config/)

cloudinary.js - Cloudinary API setup
mongodb.js - Database connection setup
📂 Controllers (/controllers/)

adminController.js - Admin-related logic
doctorController.js - Doctor-related logic
userController.js - User-related logic
📂 Middleware (/middleware/)

authAdmin.js - Admin authentication
authDoctor.js - Doctor authentication
authUser.js - User authentication
multer.js - File uploads handler
📂 Models (/models/)

appointmentModel.js - Appointment schema
doctorModel.js - Doctor schema
userModel.js - User schema
📂 Routes (/routes/)

adminRoute.js - Admin API routes
doctorRoute.js - Doctor API routes
userRoute.js - User API routes
Other Files:

.env - Environment variables
.gitignore - Ignored files
package.json - Dependencies
server.js - Server entry point

3.3️⃣ Frontend (/frontend)
📂 Source (/src/)

Assets (/assets/) - Static assets
Components (/components/)
Banner.jsx - Home page banner
Footer.jsx - Footer component
Header.jsx - Main header
Navbar.jsx - Navigation bar
RelatedDoctors.jsx - Suggests similar doctors
SpecialityMenu.jsx - Lists doctor specialities
TopDoctors.jsx - Highlights top-rated doctors
Context (/context/)
AppContext.jsx - Global state management
Pages (/pages/)
About.jsx - About page
Appointment.jsx - Appointment booking
Contact.jsx - Contact page
Doctor.jsx - Doctor profile page
Home.jsx - Home page
Login.jsx - User authentication page
MyAppointments.jsx - User's booked appointments
MyProfile.jsx - User profile management
App.jsx - Main React entry point
main.jsx - Renders the app
Other Files:

.env - Environment variables
.gitignore - Ignored files
eslint.config.js - Code linting rules
index.html - Main HTML file

4️⃣ Features
4.1️⃣ User Authentication
Secure login & registration for users, doctors, and admins
JWT-based authentication for secure sessions
4.2️⃣ Doctor Management
Admin adds, edits, and removes doctors
Doctors manage profiles & availability
4.3️⃣ Appointment Booking
Users book appointments based on doctor availability
Automated confirmation emails & notifications
4.4️⃣ Payment Integration
Payments handled via Razorpay
Secure transaction validation
4.5️⃣ Admin Dashboard
View all users, doctors, & appointments
Manage transactions & users
4.6️⃣ Doctor Dashboard
View upcoming appointments
Option to accept/reject appointments
4.7️⃣ User Profile Management
Users can update profiles & medical history
View past & upcoming appointments
4.8️⃣ File Upload & Management
Users upload medical reports securely via Cloudinary
Doctors can view shared reports

5️⃣ Installation & Setup
5.1️⃣ Prerequisites
✅ Node.js & npm installed
✅ MongoDB installed & running

5.2️⃣ Backend Setup
📌 Navigate to the backend folder:

cd backend
📌 Install dependencies:

npm install
📌 Set up .env file with:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
📌 Start the backend server:


npm start
5.3️⃣ Frontend Setup
📌 Navigate to the frontend folder:


cd frontend
📌 Install dependencies:

npm install
📌 Start the frontend server:

npm run dev


6️⃣ Contributing
Fork the repository
Create a new branch (feature-xyz)
Commit your changes
Push to the branch
Submit a Pull Request

7️⃣ License
This project is licensed under the MIT License 📜 

Frontend--https://cure-time-ivory.vercel.app/
Admin--https://cure-time-admin.onrender.com/

for any Query you may ask at adigoyal9720@gmail.com
