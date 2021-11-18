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

	useEffect(() => {
		if (!session) {
			setLoadedSession(session);
			console.log('No Session');
			setIsLoading(false);
		} else {
			console.log('With Session');
		}
	}, [session]);

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		updateFormData({
			...formData,
			[name]: value,
		});
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			console.log(formData);
			await sessionService.login(formData);
		} catch (e) {}
	};

	return (
		<div>
			<h3>Status {status}</h3>
			<h3>Session: {isLoading ? Yes : No}</h3>
			<form onSubmit={onSubmitHandler}>
				<label>Username</label>
				<input type="text" onChange={onChangeHandler} />
				<label>Password</label>
				<input type="password" onChange={onChangeHandler} />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
