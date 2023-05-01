import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Footer, Main } from "./components";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { AppRouter } from "./router";
import { Layout } from "./layout";

function App() {
  const { i18n } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <>
      <Helmet>
        <html lang={i18n.language} dir={direction} />
      </Helmet>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
