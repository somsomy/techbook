import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/layouts/Layout';
import { ThemeSettingProvider } from '../src/contexts/ThemeContext';
import ThemeProvider from '../src/theme/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeSettingProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeSettingProvider>
  );
}

export default MyApp;
