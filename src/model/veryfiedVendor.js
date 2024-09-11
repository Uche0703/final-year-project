const mongoose = require('mongoose');

const verifiedVendorSchema = new mongoose.Schema({
    userRefs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userProfession', // Ensure this matches the model name
        required: true
    },
    userRef:{
        type:mongoose.Types.ObjectId,
        ref:"User"
      },
    verification_status: {
        type: String,
        enum: ['Pending', 'Verified', 'Declined'],
        default: 'Pending'
    },
    profileImage: String,
    imageType: String
    // Add other fields if necessary
});

const VerifiedVendor = mongoose.model('VerifiedVendor', verifiedVendorSchema);
module.exports = VerifiedVendor;
