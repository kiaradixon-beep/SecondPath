const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', require('./routes/analytics'));
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/behaviors'));
app.use('/api', require('./routes/facilities'));
app.use('/api', require('./routes/reports'));

app.get('/', (req, res) => {
    res.send('Youth Behavior Tracking System API is running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

