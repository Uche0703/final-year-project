const { type } = require("jquery");
const mongoose = require("mongoose");

const bookedVendorSchema = mongoose.Schema({
    vendorRef: {
        type: mongoose.Types.ObjectId,
        ref: "VerifiedVendor"
    },
    userRef: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5, // Assuming a 5-star rating system
        default: null // Set to null initially if no rating is provided
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BookedVendor = mongoose.model("BookedVendor", bookedVendorSchema);
module.exports = BookedVendor;
