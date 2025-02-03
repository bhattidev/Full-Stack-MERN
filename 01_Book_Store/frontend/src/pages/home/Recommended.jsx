import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import BookCart from '../books/BookCart';

const Recommended = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch('books.json')
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	return (
		<div className="py-16">
			<h2 className="text-3xl font-semibold mb-6">Recommended For You</h2>
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
				{books.length > 0 &&
					books.slice(8, 18).map((book, index) => (
						<SwiperSlide key={index}>
							<BookCart book={book} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default Recommended;
