const express = require("express");
const router = express.Router();
const Staff = require("../models/Staff");

// Get all staff
router.get("/", async (req, res) => {
  const staff = await Staff.find();
  res.json(staff);
});

// Add staff
router.post("/", async (req, res) => {
  const staff = await Staff.create(req.body);
  res.json(staff);
});

// Update staff (role, suspended, etc.)
router.put("/:id", async (req, res) => {
  const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(staff);
});

// Delete staff
router.delete("/:id", async (req, res) => {
  await Staff.findByIdAndDelete(req.params.id);
  res.json({ message: "Staff removed" });
});

module.exports = router;
