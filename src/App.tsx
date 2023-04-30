import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Footer, Main } from "./components";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <>
      <div dir={direction}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
