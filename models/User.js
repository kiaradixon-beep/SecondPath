const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },

    password: { 
        type: String, 
        required: true 
    },

    // ⭐ User Role
    role: {
        type: String,
        enum: [
            'staff',          // Logs daily behavior
            'supervisor',     // Reviews youth progress, adjusts plans
            'admin',          // Facility-level admin
            'super_admin'     // YOU — controls all facilities
        ],
        required: true,
        default: 'staff'
    },

    // ⭐ Facility Assignment
    // Staff, supervisors, and admins belong to ONE facility
    // Super Admin can access ALL facilities
    facilityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',
        default: null
    },

    // ⭐ Permissions (auto-expandable)
    permissions: {
        canLogBehavior: { type: Boolean, default: false },
        canReviewProgress: { type: Boolean, default: false },
        canAdjustPlans: { type: Boolean, default: false },
        canCustomizeFacility: { type: Boolean, default: false },
        canAccessAnalytics: { type: Boolean, default: false },
        canManageFacilities: { type: Boolean, default: false }
    },

    // ⭐ Timestamps
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
