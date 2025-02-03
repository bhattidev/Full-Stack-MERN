import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Register = () => {
	const [message, setMeassage] = useState('');
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	const handleGooogleSignIn = () => {};
	return (
		<div className="h-[calc(100vh-120px)] flex justify-center items-center">
			<div className="w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4">
				<h2 className="text-xl font-semibold mb-4">Please Register</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 text-sm font-bold mb-2">
							Email
						</label>
						<input
							defaultValue="test"
							{...register('email')}
							type="email"
							name="email"
							id="email"
							placeholder="Email Address"
							className="shadow appearance-none border rounded w-full py-2 px-3 loading-tight focus:outline-none focus:shadow focus:bg-gray-100"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-bold mb-2 ">
							Password
						</label>
						<input
							{...register('password', { required: true })}
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="shadow appearance-none border rounded w-full py-2 px-3 loading-tight focus:outline-none focus:shadow  focus:bg-gray-100"
						/>
					</div>
					{message && (
						<p className="text-red-500 text-xs italic mb-3">{message}</p>
					)}
					<div>
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none ">
							Register
						</button>
					</div>
				</form>
				<p className="align-baseline font-medium mt-4 text-sm">
					Have an account? Please{' '}
					<Link
						to={'/login'}
						className="text-blue-500 hover:text-blue-700">
						Login
					</Link>
				</p>
				{/* {Google Sign} */}
				<div className="mt-4">
					<button
						onClick={handleGooogleSignIn}
						className="w-full flex flex-wrap gap-1 items-center justify-center bg-[#0d0842] hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none">
						<FaGoogle className="mr-2" />
						Sign in with Google
					</button>
				</div>
				<p className="mt-5 text-center text-gray-500 text-xs">
					@2025 Book Store. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Register;
