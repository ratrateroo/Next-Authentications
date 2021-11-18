export async function login(data) {
	const providers = await getProviders();
	let redirectUrl = 'http://location:3001';
	const url = new URL(location.href);
	redirectUrl = url.searchParams.get('callbackUrl');

	//const router = useRouter();
	//login using next auth signIn
	//console.log(router);
	const options = {
		//redirect: false,
		username: data.username,
		password: data.password,
		signinUrl: 'http://localhost:3001/api/auth',
		//callbackUrl: `${window.location.origin}/api/auth`,
		//callbackUrl: router.query.callbackUrl,
		callbackUrl: 'http://localhost:3001/api/auth',
		url: 'http://localhost:3001/api/auth',
	};

	console.log('DATA ' + data.username);
	console.log(providers);

	const result = await signIn('userSignIn', options);

	console.log('Result: ' + result);

	return result;

	// const _login = async () => {
	// 	const url = '/api/login';
	// 	const res = await fetch(url, {
	// 		...requestConfig.post,
	// 		body: JSON.stringify(data),
	// 	});

	// 	let statusCode = res.status;
	// 	let responseData = await res.json();

	// 	if (statusCode == 200) {
	// 		toast.success('Login Successfully.');
	// 		Router.push('/dashboard');
	// 	} else {
	// 		toast.error(`Login Failed! ${responseData.message}`);
	// 	}

	// 	throw responseData.message;
	// };

	// return _login();
}
