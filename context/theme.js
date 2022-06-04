import {createContext, useState} from 'react';

const ThemeCtx = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeCtx.Provider value={[theme, setTheme]}>
      {children}
    </ThemeCtx.Provider>
  )
}

export default ThemeCtx
