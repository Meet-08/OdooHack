import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    profilePic: {
        data: Buffer,
        contentType: String
    }
    /*
    role: {
        type: String,
        enum: ["citizen", "official", "admin"], // Different user roles
        default: "citizen",
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    */
});

export const User = mongoose.model("User", userSchema);
