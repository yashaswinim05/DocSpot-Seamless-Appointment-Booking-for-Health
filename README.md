
# DocSpot - Seamless Appointment Booking for Health

## Full Stack Development with MERN

DocSpot is an online doctor appointment booking system designed to simplify the process of scheduling appointments with healthcare professionals. It offers real-time booking, role-based access, and easy management for users, doctors, and admins.

---

## 📂 Project Features

- ✅ Role-based Login for Users, Doctors, Admins  
- ✅ Doctor Management and Approval  
- ✅ Real-time Appointment Scheduling  
- ✅ Admin Controls and User Management  
- ✅ Responsive UI with React and Material UI  

---

## 🛠️ Tech Stack

- **Frontend:** React, Material UI  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  

---

## 📁 Project Folder Structure

```
├── client      # React Frontend
├── server      # Express Backend API
├── Project Report
├── Video Demo
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js  
- NPM  
- MongoDB  

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/docspot-appointment-booking.git

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

---

## 🖥️ Running the Application

Start MongoDB server locally, then:

```bash
# Start Frontend
cd client
npm start

# Start Backend
cd ../server
npm start
```

Application runs on:  
Frontend: `http://localhost:3000`  
Backend API: `http://localhost:5000`  

---

## 🔒 Authentication

- Email & Password based authentication for all roles  
- Planned future enhancement: JWT Security  

---

## 📋 API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | `/api/users/register` | Register a new user   |
| POST   | `/api/users/login`    | Login for users       |
| GET    | `/api/users/doctors`  | Fetch doctor list     |
| POST   | `/api/appointments`   | Book an appointment   |

---

## 🖥️ User Interfaces

- Login & Registration Pages  
- Doctor Listing & Booking Form  
- User & Doctor Dashboards  
- Admin Approval Page  

---

## 🧪 Testing

- Backend APIs tested using Postman  
- Frontend tested across browsers with Chrome DevTools  

---

## 👨‍💻 Team Members

- Mamidi Yashaswini (Team Leader)  
- Chinthakayala Balaji  
- Veligandla Pranathi  
- Shaik Irfan  
- Koneti Sreevidya  

---

## 🎥 Demo

Video demo available inside the `Video Demo` folder in the project repository.

---

# 📌 Note
This project is designed for academic and learning purposes, focusing on core MERN stack development.
