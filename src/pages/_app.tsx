import '../styles/globals.css';

import mockServiceWorker from 'mocks';
import type { AppProps } from 'next/app';

import { ApolloProvider } from '../lib/apollo';

// if (process.env.MOCK_SERVICE_WORKER === '1') {
mockServiceWorker();
// }

const App = ({
  Component,
  pageProps: { initialApolloState, ...pageProps },
}: AppProps) => {
  return (
    <ApolloProvider initialState={initialApolloState || {}}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
