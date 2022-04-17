import { closeNavWidth, drawerWidth } from '../../config';

import styled from '@emotion/styled';
import { Box, Theme, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FooterProps {
  theme: Theme;
  open: boolean;
}

const FooterBox = styled(Box)(({ theme, open }: FooterProps) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  paddingLeft: open ? 10 : closeNavWidth + 10,
  bottom: 0,
  width: '100%',
  minHeight: '48px',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Footer = ({ open }: any) => {
  const theme = useTheme();

  return (
    <FooterBox theme={theme} open={open}>
      <Typography>SOM & STAR @2022</Typography>
    </FooterBox>
  );
};

export default Footer;
