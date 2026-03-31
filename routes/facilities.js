'use strict';

const express = require('express');
const router = express.Router();

// Mock Data
let facilities = [];

// Get all facilities
router.get('/facilities', (req, res) => {
    res.json(facilities);
});

// Get a facility by ID
router.get('/facilities/:id', (req, res) => {
    const facility = facilities.find(f => f.id === parseInt(req.params.id));
    if (!facility) return res.status(404).send('Facility not found');
    res.json(facility);
});

// Create a new facility
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

// Update a facility
router.put('/facilities/:id', (req, res) => {
    const facility = facilities.find(f => f.id === parseInt(req.params.id));
    if (!facility) return res.status(404).send('Facility not found');

    facility.name = req.body.name;
    facility.location = req.body.location;
    facility.capacity = req.body.capacity;
    res.json(facility);
});

// Delete a facility
router.delete('/facilities/:id', (req, res) => {
    const facilityIndex = facilities.findIndex(f => f.id === parseInt(req.params.id));
    if (facilityIndex === -1) return res.status(404).send('Facility not found');
    facilities.splice(facilityIndex, 1);
    res.status(204).send();
});

module.exports = router;