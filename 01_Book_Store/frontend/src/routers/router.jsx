import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/home/home';
import Login from '../components/Login';
import Register from '../components/Register';
import CartPage from '../pages/books/CartPage';
import Checkout from '../pages/books/Chekout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/order',
				element: <div>Order</div>,
			},
			{
				path: '/about',
				element: <div>About</div>,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/cart',
				element: <CartPage />,
			},
			{
				path: '/checkout',
				element: <Checkout />,
			},
		],
	},
]);

export default router;
