import { signIn, signOut } from 'next-auth/client';

export async function loginAPI(data) {
	console.log(data);
	const options = {
		//redirect: false,
		username: data.username,
		password: data.password,
		//signinUrl: 'http://localhost:3001/api/auth',
		//callbackUrl: `${window.location.origin}/api/auth`,
		//callbackUrl: router.query.callbackUrl,
		//callbackUrl: 'http://localhost:3001/api/auth',
		//url: 'http://localhost:3001/api/auth',
	};

	const result = await signIn('credentials', options);

	console.log(result);

	return result;
}

export async function loginClient(data) {
	console.log(data);
	const options = {
		//redirect: false,
		username: data.username,
		password: data.password,
		//signinUrl: 'http://localhost:3001/api/auth',
		//callbackUrl: `${window.location.origin}/api/auth`,
		//callbackUrl: router.query.callbackUrl,
		//callbackUrl: 'http://localhost:3000/login',
		//url: 'http://localhost:3001/api/auth',
	};

	const result = await signIn('credentials', options);

	console.log(result);

	return result;
}

export async function LogOut(data) {
	signOut();
}
