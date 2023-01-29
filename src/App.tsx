import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Footer, Main } from "./components";
import {useCheckCookies} from "./hooks";

function App() {

  useCheckCookies("MyToken", 1);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
