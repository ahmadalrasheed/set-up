import React from "react";
import { HeaderContainer } from "./Theme";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../sharedComponents";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      {t("header")}
      <LanguageSwitcher />
    </HeaderContainer>
  );
};

export default Header;
