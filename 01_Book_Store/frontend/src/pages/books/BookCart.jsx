import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice'; // Adjusted import

const BookCart = ({ book }) => {
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product)); // Corrected dispatch
	};

	return (
		<div className="rounded-lg transition-shadow duration-300">
			<div className="flex flex-col md:flex-row gap-4">
				{/* Book Image */}
				<div className="h-60 sm:h-72 sm:flex-shrink-0 border rounded-md">
					<Link to={`/books/${book._id}`}>
						<img
							src={
								book.coverImage
									? getImgUrl(book.coverImage)
									: '/assets/default-book.png'
							}
							alt={book.title || 'Book Cover'}
							className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
						/>
					</Link>
				</div>

				{/* Book Info */}
				<div className="flex flex-col justify-between">
					<div>
						<Link to={`/books/${book._id}`}>
							<h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
								{book.title}
							</h3>
						</Link>
						<p className="text-gray-600 mb-5 overflow-hidden">
							{book.description.length > 70
								? `${book.description.slice(0, 70)}...`
								: book.description || 'Book Description'}
						</p>
					</div>

					<div>
						<p className="font-medium mb-3">
							${book?.newPrice.toFixed(2)}
							{book?.oldPrice && (
								<span className="line-through font-normal ml-2">
									${book.oldPrice.toFixed(2)}
								</span>
							)}
						</p>

						{/* Add to Cart Button */}
						<button
							onClick={() => handleAddToCart(book)}
							className="btn-secondary flex items-center gap-1 text-nowrap overflow-hidden">
							<FiShoppingCart />
							<span>Add to Cart</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookCart;
