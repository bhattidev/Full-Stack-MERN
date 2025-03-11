import express from 'express';
import Book from './boook.model';
const router = express.Router();

// post      : when  something from frontend to db
// get       : when get something back from db
// put/patch : when edite or update something
// delete    : when delete something
router.post('/create.book', async (req, res) => {
	try {
		const newBook = await Book({});
	} catch (error) {}
});

export default router;
