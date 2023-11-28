import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        // id:{
        //     type: mongoose.Schema.Types.ObjectId,
        // }, 
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);

