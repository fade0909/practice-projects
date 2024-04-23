import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongodbUrl } from './config.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware for parsing request body
// Allow Origins with default of cors(*)
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(234).send('Welcome to MERN Stack Bookstore');
});

app.use('/books', booksRoute);

mongoose.connect(mongodbUrl)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })