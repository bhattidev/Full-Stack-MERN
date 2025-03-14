import React, { useEffect, useState } from 'react';
import BookCart from '../books/BookCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

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

			{/* Swiper  */}
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				navigation={true}
				breakpoints={{
					'@0.00': {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					'@1.00': {
						slidesPerView: 1,
						spaceBetween: 40,
					},
					'@1.25': {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					'@2.50': {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				modules={[Pagination, Navigation]}
				className="mySwiper">
				{filteredBooks.length > 0 &&
					filteredBooks.map((book, index) => (
						<SwiperSlide key={index}>
							<BookCart book={book} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default TopSellers;
