import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterIcon,
  FBar,
  FStyledLink,
  FNavBar,
  FLogoLink,
  FSpanLink,
} from "./components.styles";

const FooterBar = () => {
  return (
    <FBar>
      <FLogoLink href={"/"}>
        Coffee<FSpanLink>Blog</FSpanLink>
      </FLogoLink>
      <FNavBar>
        <FStyledLink href="/aboutus">About Us</FStyledLink>
        <FooterIcon href={"/"} hovercolor="rgb(23, 169, 253)">
          <FaFacebook />
        </FooterIcon>
        <FooterIcon href={"/"} hovercolor="rgb(255, 0, 0)">
          <FaYoutube />
        </FooterIcon>
        <FooterIcon href={"/"} hovercolor="rgb(225, 48, 108)">
          <FaInstagram />
        </FooterIcon>
        <FooterIcon href={"/"} hovercolor="rgb(29, 155, 240)">
          <FaTwitter />
        </FooterIcon>
      </FNavBar>
    </FBar>
  );
};

export default FooterBar;
