import React, { useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';
import * as sessionService from '../services/sessionService';
const initialFormData = {
	username: '',
	password: '',
};

const Login = () => {
	const [formData, updateFormData] = useState(initialFormData);
	const [isLoading, setIsLoading] = useState(true);

	const { data: session, status } = useSession();
	//const loading = status === 'loading';

	useEffect(async () => {
		if (!session) {
			setIsLoading(true);
			console.log('No Session');
			setIsLoading(false);
		} else {
			console.log('With Session');
		}
	}, [status]);

	// const onChangeHandler = (e) => {
	// 	const { name, value } = e.target;
	// 	console.log(formData);
	// 	updateFormData({
	// 		...formData,
	// 		[name]: value,
	// 	});
	// };

	// const onSubmitHandler = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		console.log(formData);
	// 		await sessionService.login(formData);
	// 	} catch (e) {}
	// };

	const loginClientHandler = async () => {
		await sessionService.loginClient({
			username: 'username',
			password: 'password',
		});
	};
	const loginApiHandler = async () => {
		await sessionService.loginAPI({
			username: 'username',
			password: 'password',
		});
	};

	const signoutHandler = async () => {
		await sessionService.LogOut({
			username: 'username',
			password: 'password',
		});
	};

	return (
		<div>
			<h3>Status: {status}</h3>
			<h3>Session: {isLoading ? 'No' : 'Yes'}</h3>
			{/* <form onSubmit={onSubmitHandler}>
				<label>Username</label>
				<input type="text" name="username" onChange={onChangeHandler} />
				<label>Password</label>
				<input type="password" name="password" onChange={onChangeHandler} />
				<button type="submit">Login</button>
			</form> */}

			{status === 'authenticated' ? (
				<button type="button" onClick={signoutHandler}>
					SignOut
				</button>
			) : (
				<button type="button" onClick={loginClientHandler}>
					Login to Client Server
				</button>
			)}

			<button type="button" onClick={loginApiHandler}>
				Login to Api Server
			</button>
		</div>
	);
};

export default Login;
