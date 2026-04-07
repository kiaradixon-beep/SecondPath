const express = require('express');
const router = express.Router();

let facilities = [];

router.get('/facilities', (req, res) => {
    res.json(facilities);
});

router.get('/facilities/:id', (req, res) => {
    const facility = facilities.find(f => f.id === parseInt(req.params.id));
    if (!facility) return res.status(404).send('Facility not found');
    res.json(facility);
});

router.post('/facilities', (req, res) => {
    const facility = {
        id: facilities.length + 1,
        name: req.body.name,
        location: req.body.location,
        capacity: req.body.capacity
    };
    facilities.push(facility);
    res.status(201).json(facility);
});

router.put('/facilities/:id', (req, res) => {
    const facility = facilities.find(f => f.id === parseInt(req.params.id));
    if (!facility) return res.status(404).send('Facility not found');

    facility.name = req.body.name;
    facility.location = req.body.location;
    facility.capacity = req.body.capacity;

    res.json(facility);
});

router.delete('/facilities/:id', (req, res) => {
    const index = facilities.findIndex(f => f.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Facility not found');

    facilities.splice(index, 1);
    res.status(204).send();
});

module.exports = router;
