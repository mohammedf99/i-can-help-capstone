import React, { useEffect } from "react";
import "../styles/globals.css";
import { appWithTranslation, i18n } from "next-i18next";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../Utilities/Providers/AuthProvider";
import DataProvider from "../Utilities/Providers/DataProvider";
// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <AuthProvider>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
      <ToastContainer />
    </AuthProvider>
  );
}
export default appWithTranslation(App);
