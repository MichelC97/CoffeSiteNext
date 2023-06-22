import { HomeHeaderImg, ContainerDiv } from "./components.styles";
import { HeaderBar, HeaderText } from "@/components";

const HeaderHome = () => {
  return (
    <HomeHeaderImg>
      <ContainerDiv>
        <HeaderBar />
      </ContainerDiv>
      <HeaderText />
    </HomeHeaderImg>
  );
};

export default HeaderHome;
