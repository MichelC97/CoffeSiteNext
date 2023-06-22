import React from "react";
import { FooterBackground, ContainerDiv } from "./components.styles";
import { FooterBar, FooterText } from "@/components";

const Footer = () => {
  return (
    <FooterBackground>
      <ContainerDiv>
        <FooterBar />
        <FooterText />
      </ContainerDiv>
    </FooterBackground>
  );
};

export default Footer;
