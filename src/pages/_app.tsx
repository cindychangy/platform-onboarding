import { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import Head from 'next/head';
import { EuiErrorBoundary } from '@elastic/eui';
import { globalStyes } from '../styles/global.styles';

import { EuiProvider } from '@elastic/eui';

import createCache from '@emotion/cache';

const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const emotionCache = createCache({
    key: 'eui-styles',
    container:
      typeof document !== 'undefined'
        ? document.querySelector('meta[name="eui-styles-global"]')
        : null,
  });

  return (
    <>
      <Head>
        {/* You can override this in other pages - see index.tsx for an example */}
        <title>Platform Onboarding Prototype</title>
      </Head>
      <Global styles={globalStyes} />
      <EuiProvider colorMode="light" cache={emotionCache}>
        <EuiErrorBoundary>
          <Component {...pageProps} />
        </EuiErrorBoundary>
      </EuiProvider>
    </>
  );
};

export default EuiApp;
