import mongoose from "mongoose";

const sponsorSchema = mongoose.Schema(
    {
        orgName: {
            type: String,
            required: true,
        },
        orgType: {
            type: String,
            required: true,
        },
        industry: {
            type: String,
            required: true,
        },
        budget: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

export const Sponsor = mongoose.model('Sponsor', sponsorSchema);