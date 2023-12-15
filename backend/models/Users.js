import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username:{
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
            required: true
        },
        token: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

export const Users = mongoose.model('Users', UserSchema);