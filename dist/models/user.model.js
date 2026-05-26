"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//  [profile _image:{_id ,path:,public_id}]
// cloudinary
const userSchema = new mongoose_1.default.Schema({
    full_name: {
        type: String,
        required: [true, "full_name is required"],
        minLength: [3, "Name must be 3 char. long"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "user already exists with provides email"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [6, "password must be 6 char. long"],
    },
    phone: {
        type: String,
    },
    //! role
    role: {
        type: String,
        enum: ["ADMIN", "USER", "SUPER_ADMIN"],
        default: "USER",
    },
    // ! profile_image:{path:'',public_id:''}
    profile_image: {
        type: {
            path: {
                type: String,
                required: true,
            },
            public_id: {
                type: String,
                requird: true,
            },
        },
    },
}, { timestamps: true });
//! model
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
