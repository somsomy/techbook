import { useMemo, ReactNode, useContext } from 'react';

import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider
} from '@mui/material/styles';
import { ThemeSettingContext } from '../contexts/ThemeContext';

interface ThemeProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProps) {
  const { mode } = useContext(ThemeSettingContext);
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: {
        mode: mode === 'light' ? 'light' : 'dark'
      }
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
