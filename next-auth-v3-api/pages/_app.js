import '../styles/globals.css';

import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
	return (
		<Provider
			session={pageProps.session}
			options={{
				basePath: 'http://localhost:3000/api/auth',
				basePath: 'http://localhost:3000/api/auth',
			}}>
			<Component {...pageProps} />;
		</Provider>
	);
}
export default MyApp;
