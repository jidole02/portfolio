import styled from "@emotion/styled";
import ThemaToggleButton from "./ThemaToggleButton";
import Menu from "./Menu";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <MenuContainer>
          <Menu content="소개" />
          <Menu content="기술스택" />
          <Menu content="프로젝트" />
          <Menu content="그외" />
        </MenuContainer>
        <ThemaToggleButton />
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding-top: 35px;
  position: fixed;
  z-index: 2;
  padding-bottom: 10px;
  width: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: var(--main-width);
  display: flex;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 70px;
`;
