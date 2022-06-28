import {createContext, useState, useEffect} from 'react';

const ThemeCtx = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    var initTheme = localStorage.getItem("praddyTheme")
    if (initTheme == null){
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(darkThemeMq ? "dark" : "light");
    } else {
      setTheme(JSON.parse(initTheme))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("praddyTheme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeCtx.Provider value={[theme, setTheme]}>
      {children}
    </ThemeCtx.Provider>
  )
}

export default ThemeCtx
