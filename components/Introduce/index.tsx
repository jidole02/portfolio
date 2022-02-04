import styled from "@emotion/styled";
import Contact from "./Contact";
import TextContent from "./TextContent";

const Introduce = () => {
  return (
    <Wrapper>
      <Container>
        <TextContent />
        <Contact />
      </Container>
    </Wrapper>
  );
};

export default Introduce;

const Wrapper = styled.div`
  padding-top: 170px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
