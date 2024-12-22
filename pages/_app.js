import '../styles/globals.css'; // Import your global CSS file here
import '../styles/index.css';
import Layout from './layout';


function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>;
}

export default MyApp;
