import 'tailwindcss/tailwind.css';
import { Auth0Provider } from '@auth0/auth0-react';


const App = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={'dev-pqtgmoe1.us.auth0.com'}
      clientId={'fyE1naCgyfsUjOuO3OF1FHkmrR5IMFqw'}
      redirectUri={'http://localhost:3000/'}>
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default App;
