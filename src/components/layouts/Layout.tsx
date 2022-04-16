import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { createContext } from 'react';

const ScrollToTop = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);
  return null;
};

// export let HeaderBgContext: any = createContext();

// eslint-disable-next-line react/prop-types
const Layout = ({ children }: any) => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
