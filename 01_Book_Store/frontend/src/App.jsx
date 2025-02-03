import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen max-w-7xl mx-auto px-4 py-6 font-primaryFont">
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
