import '../src/styles/css/global.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '../src/components/header';

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();

  const onSearch = (e: string) => {
    route.push(`/items?search=${e}`);
  };
  return (
    <>
      <Header onSearch={onSearch} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
