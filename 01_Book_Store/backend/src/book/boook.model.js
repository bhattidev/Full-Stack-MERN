import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		trending: {
			type: Boolean,
			required: true,
		},
		coverImage: {
			type: String,
			required: true,
		},
		OldPrice: Number,
		NewPrice: Number,
		createAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestanps: true,
	}
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
