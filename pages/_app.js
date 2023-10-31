import '../styles/globals.css'
import { FavoriteContextProvider } from '../Fav';

function MyApp({ Component, pageProps }) {
  return (
 <FavoriteContextProvider ><Component {...pageProps} /> </FavoriteContextProvider>
  )
}

export default MyApp
