const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["Staff", "Supervisor", "Admin"], default: "Staff" },
  suspended: { type: Boolean, default: false },
});

module.exports = mongoose.model("Staff", staffSchema);
