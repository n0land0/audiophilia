import '../styles/globals.css';

import mockServiceWorker from 'mocks';
import type { AppProps } from 'next/app';

// if (process.env.MOCK_SERVICE_WORKER === '1') {
mockServiceWorker();
// }

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
