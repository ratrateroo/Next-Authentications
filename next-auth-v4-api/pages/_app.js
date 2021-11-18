import '../styles/globals.css';

import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, session, pageProps }) {
	return (
		<SessionProvider
			session={session}
			basePath={'http://localhost:3000/api/auth'}
			baseUrl={'http://localhost:3000/api/auth'}>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
