import { useRecoilState } from "recoil";
import { themaState } from "./../../recoil/atom";
import styled from "@emotion/styled";
import ThemaToggleButton from "./ThemaToggleButton";
import Menu from "./Menu";

const Header = () => {
  const [thema, setThema] = useRecoilState(themaState);

  const changeThema = () => {
    thema === "light" ? setThema("dark") : setThema("light");
  };

  return (
    <Wrapper>
      <MenuContainer>
        <Menu content="소개" />
        <Menu content="기술스택" />
        <Menu content="프로젝트" />
        <Menu content="그외" />
      </MenuContainer>
      <ThemaToggleButton />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  padding-top: 35px;
  display: flex;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 70px;
`;
