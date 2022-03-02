import styled from "@emotion/styled";
import Contact from "./Contact";
import Stair from "./Stair";
import TextContent from "./TextContent";

const Introduce = () => {
  return (
    <Wrapper>
      <Container>
        <Stair />
        <TextContent />
        <Contact />
      </Container>
    </Wrapper>
  );
};

export default Introduce;

const Wrapper = styled.div`
  padding-top: 170px;
  height: 100vh; ;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
