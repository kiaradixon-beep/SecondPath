const staffRoutes = require("./routes/staff");
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api', require('./routes/analytics'));
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/behaviors'));
app.use('/api', require('./routes/facilities'));
app.use('/api', require('./routes/reports'));
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
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);
