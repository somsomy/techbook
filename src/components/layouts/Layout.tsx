import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const ScrollToTop = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);
  return null;
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ScrollToTop />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Main open={open}>{children}</Main>
      <Footer open={open} />
    </>
  );
};

export default Layout;
