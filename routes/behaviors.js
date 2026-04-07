const express = require('express');
const router = express.Router();

router.post('/log', (req, res) => {
    res.status(201).json({
        message: 'Behavior logged successfully!',
        data: req.body
    });
});

router.get('/log', (req, res) => {
    res.status(200).json({
        message: 'Retrieved logged behaviors!',
        data: []
    });
});

module.exports = router;
