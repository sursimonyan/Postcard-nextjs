import Layout from '../components/Layout/Layout';
import '../styles/main-styles/globals.scss';
import '../styles/main-styles/variables.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
