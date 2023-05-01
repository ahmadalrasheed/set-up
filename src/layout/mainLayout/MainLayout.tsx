import React from "react";
import { Header, Footer } from "../../components";
import { Main } from "./Theme";
import { useLocation } from "react-router-dom";
import { existingRoutes } from "../../router";

interface MainLayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: MainLayoutProps) {
  const location = useLocation();
  const isRealURL = existingRoutes.includes(location.pathname);

  return (
    <div>
      {isRealURL && <Header />}
      <Main>{children}</Main>
      {isRealURL && <Footer />}
    </div>
  );
}

export default Layout;
