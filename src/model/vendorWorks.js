const mongoose = require('mongoose');

const vendorWorkSchema = new mongoose.Schema({
    vendor: {
        type: mongoose.Types.ObjectId,
        ref: "VerifiedVendor"
    },
    email:{

        type: String,
        required: true,
    },
    
    name: {
        type: String,
        required: true,
        minlength: 6
    },
    profileImage: {
        data: Buffer,
        contentType: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }  
});

const VendorWork = mongoose.model('VendorWork', vendorWorkSchema);

module.exports = VendorWork;
