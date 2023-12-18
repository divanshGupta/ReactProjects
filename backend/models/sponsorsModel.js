// import mongoose from "mongoose";

// const sponsorSchema = mongoose.Schema(
//     {
//         orgName: {
//             type: String,
//             required: true,
//         },
//         orgType: {
//             type: String,
//             required: true,
//         },
//         industry: {
//             type: String,
//             required: true,
//         },
//         budget: {
//             type: Number
//         },
//         socials:{
//             type:String
//         }
//     },
//     {
//         timestamps: true,
//     }
// );

// export const Sponsor = mongoose.model('Sponsor', sponsorSchema);
import mongoose from "mongoose";

const socialsSchema = mongoose.Schema(
    {
        platform: {
            type: String,
            required: true,
            enum: ["LinkedIn", "Instagram", "Facebook"], // Specify the allowed platforms
        },
        options: {
            followers: {
                type: String,
            },
            following: {
                type: String,
            },
        },
    }
);

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
            type: Number,
        },
        socials: [socialsSchema], // Use an array to allow multiple socials entries
    },
    {
        timestamps: true,
    }
);

export const Sponsor = mongoose.model('Sponsor', sponsorSchema);
