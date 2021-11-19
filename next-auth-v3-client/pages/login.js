import React, { useState, useEffect } from 'react';

import * as sessionService from '../services/sessionService';
import { useRouter } from 'next/router';
import {
	useSession,
	getSession,
	getCsrfToken,
	getProviders,
} from 'next-auth/client';
const initialFormData = {
	username: '',
	password: '',
};

const Login = () => {
	const [session, loading] = useSession();
	//const [formData, updateFormData] = useState(initialFormData);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(async () => {
		if (!session) {
			setIsLoading(true);
			console.log('No Session');
			setIsLoading(false);
		} else {
			console.log('With Session');
		}
	}, [loading]);

	useEffect(() => {
		const checkSession = async () => {
			const sessionData = await getSession();
			const csrfToken = await getCsrfToken();
			const providers = await getProviders();
			console.log('Providers', providers);
			console.log(sessionData);
			console.log(csrfToken);
		};
		checkSession();
	}, []);

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
			<h3>Status: {loading ? 'Loading' : 'Loaded'}</h3>
			<h3>Session: {isLoading ? 'No' : 'Yes'}</h3>
			{/* <form onSubmit={onSubmitHandler}>
				<label>Username</label>
				<input type="text" name="username" onChange={onChangeHandler} />
				<label>Password</label>
				<input type="password" name="password" onChange={onChangeHandler} />
				<button type="submit">Login</button>
			</form> */}

			{session ? (
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
			<div>
				{!session && (
					<>
						Not signed in <br />
						<button onClick={() => signIn()}>Sign in</button>
					</>
				)}
				{session && (
					<>
						Signed in as {session.user.email} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Login;
