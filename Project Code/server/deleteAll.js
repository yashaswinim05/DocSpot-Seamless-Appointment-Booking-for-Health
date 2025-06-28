const mongoose = require('mongoose');
require('dotenv').config(); // Loads .env with MONGO_URL

const Appointment = require('./models/appointmentModel'); // Adjust path if needed
const Doctor = require('./models/doctorModel'); // Optional
const User = require('./models/userModel'); // Optional

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  await Appointment.deleteMany({});
  await Doctor.deleteMany({});
  await User.deleteMany({});
  console.log("✅ All data deleted.");
  mongoose.disconnect();
})
.catch((err) => {
  console.error("❌ Error deleting records:", err);
});