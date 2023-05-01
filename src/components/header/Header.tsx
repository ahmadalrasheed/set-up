import React from "react";
import { HeaderContainer } from "./Theme";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../sharedComponents";
import { BrowserRouter, Link } from "react-router-dom";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      {t("header")}
      <LanguageSwitcher />
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
      <Link to="/hshdhdhd">wrong page</Link>
    </HeaderContainer>
  );
};

export default Header;
