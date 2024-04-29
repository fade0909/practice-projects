import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
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
            max: [9999, 'Publish year must be a four-digit number']

        },
    },
    {
        timestamps: true,
    }

)

export const Book = mongoose.model('Bookstore', bookSchema);