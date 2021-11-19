import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		Providers.Credentials({
			async authorize(credentials, req) {
				console.log(req.body);
				console.log(req.query);
				console.log(req.headers);
				console.log(req.method);

				return credentials;
			},
		}),
	],
});
