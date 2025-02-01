import React, { useEffect, useState } from 'react';
import BookCart from '../books/BookCart';

const TopSellers = () => {
	const [books, setBooks] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('choose a genre');

	useEffect(() => {
		fetch('books.json')
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	const filteredBooks =
		selectedCategory === 'choose a genre'
			? books
			: books.filter(
					(book) =>
						book.category.toLowerCase() === selectedCategory.toLowerCase()
				);

	const categories = [
		'choose a genre',
		'Business',
		'Fiction',
		'Horror',
		'Adventure',
	];

	return (
		<div className="py-10">
			<h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

			{/* Category Filtering */}
			<div className="mb-8 flex items-center">
				<select
					onChange={(e) => setSelectedCategory(e.target.value)}
					value={selectedCategory}
					className="border bg-[#EAEAEA] border-red-300 rounded-md px-4 py-2 focus:outline-none">
					{categories.map((category, index) => (
						<option
							key={index}
							value={category}>
							{category}
						</option>
					))}
				</select>
			</div>

			{filteredBooks.map((book, index) => (
				<BookCart
					key={index}
					book={book}
				/>
			))}
		</div>
	);
};

export default TopSellers;
