import React from "react";
import {
  HomeHBar,
  HomeHStyledLink,
  HomeHNavBar,
  HomeHLogoLink,
  HomeHSpanLink,
} from "./components.styles";

const HeaderBar = () => {
  return (
    <HomeHBar>
      <HomeHLogoLink href={"/"}>
        Coffee<HomeHSpanLink>Blog</HomeHSpanLink>
      </HomeHLogoLink>
      <HomeHNavBar>
        <HomeHStyledLink href="/courses">Courses</HomeHStyledLink>
        <HomeHStyledLink href="/contact">Contact Us</HomeHStyledLink>
      </HomeHNavBar>
    </HomeHBar>
  );
};

export default HeaderBar;
