import styled from "@emotion/styled";
import ThemaToggleButton from "./ThemaToggleButton";
import Menu from "./Menu";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  }, []);
  return (
    <Wrapper>
      <Container>
        <MenuContainer>
          <Menu content="소개" from={0} to={680} />
          <Menu content="기술스택" from={680} to={1510} />
          <Menu content="프로젝트" from={1510} to={4000} />
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
