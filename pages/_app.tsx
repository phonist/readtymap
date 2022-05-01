import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const { emotionCache = clientSideEmotionCache } = pageProps;
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
