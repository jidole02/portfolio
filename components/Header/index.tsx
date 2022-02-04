import styled from "@emotion/styled";
import ThemaToggleButton from "./ThemaToggleButton";
import Menu from "./Menu";

const Header = () => {
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
  padding-top: 35px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  padding-bottom: 10px;
  width: inherit;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 70px;
`;
