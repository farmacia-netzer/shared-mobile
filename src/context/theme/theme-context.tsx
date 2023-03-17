import React, { createContext } from 'react';

export interface ThemeI {
  dark: boolean;
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  secondary: string;
  text: {
    secondary: string;
    primary: string
  };
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}
interface ThemeContextProps {
  theme: ThemeI
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const NetzerThemeProvider = ({ children, theme }: any) => {

  return (
    <ThemeContext.Provider
      value={{
        theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
