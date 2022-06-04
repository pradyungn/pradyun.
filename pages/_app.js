import '../styles/globals.css'
import { ThemeProvider } from '../context/theme'

const MyApp = ({ Component, pageProps }) => {

  return (
  <ThemeProvider>
    <Component {...pageProps}/>
  </ThemeProvider>
)}

export default MyApp
