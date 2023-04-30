import React from "react";
import { FooterContainer } from "./Theme";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return <FooterContainer>{t("footer")}</FooterContainer>;
};

export default Footer;
