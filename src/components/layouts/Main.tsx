import { ReactNode } from 'react';
import { appBarHeight, closeNavWidth, drawerWidth } from '../../config';

import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type MainBoxProps = {
  open: boolean;
  theme: Theme;
};

const MainBox = styled(Box)(({ open, theme }: MainBoxProps) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingLeft: open ? 10 : closeNavWidth + 10,
  height: `calc(100vh - ${appBarHeight * 2}px)`,
  marginTop: appBarHeight,
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

interface MainProps {
  open: boolean;
  children: ReactNode;
}

const Main = ({ open, children }: MainProps) => {
  const theme = useTheme();

  return (
    <MainBox theme={theme} open={open}>
      {children}
    </MainBox>
  );
};

export default Main;
