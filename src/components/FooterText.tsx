import React from "react";
import { FtInformation, FtSpanPoint, FtStyledLink } from "./components.styles";

const FooterText = () => {
  return (
    <FtInformation>
      <FtStyledLink href={"#"}>
        Privacy <FtSpanPoint>. </FtSpanPoint>
      </FtStyledLink>
      <FtStyledLink href={"#"}>
        Conditions <FtSpanPoint>. </FtSpanPoint>
      </FtStyledLink>
      <FtStyledLink href={"#"}>
        Publicity <FtSpanPoint>. </FtSpanPoint>
      </FtStyledLink>
      <FtStyledLink href={"#"}>Cookies</FtStyledLink> © 2023
    </FtInformation>
  );
};

export default FooterText;
