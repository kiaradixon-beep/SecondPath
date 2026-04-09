const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api', require('./routes/analytics'));
app.use('/api', require('./routes/auth'));        // <-- includes /api/register
app.use('/api', require('./routes/behaviors'));
app.use('/api', require('./routes/facilities'));
app.use('/api', require('./routes/reports'));

const staffRoutes = require("./routes/staff");
app.use("/staff", staffRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Youth Behavior Tracking System API is running');
});

// ⭐ IMPORTANT: Only ONE port declaration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
