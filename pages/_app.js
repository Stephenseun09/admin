import Layout from "../components/layout/Layout";
import NavCtxProvider from "../store/context/nav-ctx";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NavCtxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavCtxProvider>
  );
}

export default MyApp;
