import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import { serviceMessage } from '../../../services/serviceMessage';

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: 'userSignIn',

			name: 'credentials',
			// credentials: {
			// 	username: {
			// 		label: 'Username',
			// 		type: 'text',
			// 		placeholder: 'jsmith',
			// 	},
			// 	password: { label: 'Password', type: 'password' },
			// },
			async authorize(credentials, req) {
				// console.log(req.body);
				// console.log(req.query);
				// console.log(req.headers);
				// console.log(req.method);
				console.log('Reply');
				const reply = await serviceMessage('Hello World');
				console.log(reply.message);
				return reply;
				//return credentials;
				//return credentials;
				// console.log(credentials);
				// const user = {
				// 	id: 1,
				// 	name: 'J Smith',
				// 	email: 'jsmith@example.com',
				// };

				// if (user) {
				// 	// Any object returned will be saved in `user` property of the JWT
				// 	return user;
				// } else {
				// 	// If you return null or false then the credentials will be rejected
				// 	return null;
				// 	// You can also Reject this callback with an Error or with a URL:
				// 	// throw new Error('error message') // Redirect to error page
				// 	// throw '/path/to/redirect'        // Redirect to a URL
				// }
				// let usersData = await User.query()
				// 	.withGraphFetched('[user_roles]')
				// 	.where({
				// 		username: credentials.username,
				// 		is_active: true,
				// 	})
				// 	.first();

				// if (typeof usersData == 'undefined') {
				// 	sendResponse(res, 400, { message: 'incorrect username!' });
				// } else {
				// 	if (
				// 		!bcrypt.compareSync(credentials.password, usersData.password)
				// 	)
				// 		sendResponse(res, 400, {
				// 			message: 'incorrect password!',
				// 		});
				// 	else {
				// 		console.log('Login Success...');
				// 		//sendResponse(res, 200, usersData);
				// 		return {
				// 			id: usersData.id,
				// 			username: usersData.username,
				// 			password: usersData.password,
				// 		};
				// 	}
				// }
			},
		}),
	],
	pages: {
		//signIn: 'http://localhost:3001/api/auth/signin',
		//   signOut: '/auth/signout',
		//   error: '/auth/error', // Error code passed in query string as ?error=
		//   verifyRequest: '/auth/verify-request', // (used for check email message)
		//   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
		//newUser: 'http://localhost:3001/api/auth/signin',
	},
	callbacks: {
		// async redirect({ url, baseUrl }) {
		// 	return baseUrl;
		// },
		// jwt: async ({ token }) => {
		// 	return token;
		// },
		//session: () => {},
		// jwt: ({ token, user }) => {
		// 	if (user) {
		// 		token.id = user.id;
		// 	}
		// },
		// signIn(user, account, profile) {
		// 	return true;
		// },
		// async jwt(token, user, account, profile, isNewUser) {
		// 	return token;
		// },
		// async signIn(user, account, profile) {
		// 	return true;
		// },
		// async redirect(url, baseUrl) {
		// 	return 'http://localhost:3000/login';
		// },
		// async session(session, user) {
		// 	return session;
		// },
		// async jwt(token, user, account, profile, isNewUser) {
		// 	return token;
		// },
	},
	secret: 'test',
	jwt: {
		secret: 'test',
	},
});
