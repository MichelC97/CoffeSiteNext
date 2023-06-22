import { ContainerDiv, HeaderImg } from "./components.styles";
import { HeaderBar } from "@/components";

const Header = () => {
  return (
    <HeaderImg>
      <ContainerDiv>
        <HeaderBar />
      </ContainerDiv>
    </HeaderImg>
  );
};

export default Header;
