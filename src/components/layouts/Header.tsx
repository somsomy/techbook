import { drawerWidth } from '../../config';

import { IconButton, Switch, Theme, Toolbar, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Nav from './Nav';
import { ChangeEvent, useContext, useState } from 'react';
import { ThemeSettingContext } from '../../contexts/ThemeContext';

interface ThemeProps {
  theme: Theme;
}

const isNotOpen = (prop: PropertyKey) => prop !== 'open';

const openedMixin = ({ transitions }: Theme) => ({
  width: drawerWidth,
  transition: transitions.create('width', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = ({ transitions, spacing, breakpoints }: Theme) => ({
  transition: transitions.create('width', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${spacing(7)} + 1px)`,
  [breakpoints.up('sm')]: {
    width: `calc(${spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }: ThemeProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

type Props = {
  position: string;
  open: boolean;
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => isNotOpen(prop)
})<Props>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => isNotOpen(prop) })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open
      ? { ...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme) }
      : { ...closedMixin(theme), '& .MuiDrawer-paper': closedMixin(theme), width: drawerWidth })
  })
);

type HeaderProps = {
  open: boolean;
  handleDrawerOpen: () => void;
};

const Header = ({ open, handleDrawerOpen }: HeaderProps) => {
  const theme = useTheme();
  const { onChangeMode } = useContext(ThemeSettingContext);

  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeMode();
    setChecked(event.target.checked);
  };

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: 'rgb(0 0 0 / 81%)'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            TechBook
          </Typography>
          <Switch checked={checked} onChange={handleChange} color="secondary" />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Nav open={open} />
      </Drawer>
    </>
  );
};

export default Header;
