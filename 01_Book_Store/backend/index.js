import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './src/book/book.route.js';

import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Mongoose
async function main() {
	await mongoose.connect(process.env.DB_URL);
}

// middlewares
app.use(express.json());
app.use(
	cors({
		origin: ['http:/localhost:5173'],
		credentials: true,
	})
);

main()
	.then(() => console.log('Mongodb connect successfully!'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

//Password
//0p3SiIhG17kk9w5o

// Routes
app.use('/api/books', bookRoute);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
