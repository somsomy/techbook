import { createContext, ReactNode, useState } from 'react';

const initialState = {
  mode: 'light',
  onChangeMode: () => {}
};

const ThemeSettingContext = createContext(initialState);

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeSettingProvider = ({ children }: ThemeContextProps) => {
  const [mode, setMode] = useState<string>(initialState.mode);

  const onChangeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const value = {
    mode: mode,
    onChangeMode: onChangeMode
  };

  return <ThemeSettingContext.Provider value={value}>{children}</ThemeSettingContext.Provider>;
};

export { ThemeSettingProvider, ThemeSettingContext };
