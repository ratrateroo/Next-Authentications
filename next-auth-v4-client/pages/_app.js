import React from 'react';

import { SessionProvider } from 'next-auth/react';

export default function MyApp({ Component, session, pageProps, ...appProps }) {
	const getContent = () => {
		if ([`/`].includes(appProps.router.pathname))
			return <Component {...pageProps} />;

		return (
			<SessionProvider
				session={session}
				basePath={'http://localhost:3001/api/auth'}
				//baseUrl={'http://localhost:3001/api/auth'}
			>
				<Component {...pageProps} />
				{}
			</SessionProvider>
		);
	};

	return getContent();
}
