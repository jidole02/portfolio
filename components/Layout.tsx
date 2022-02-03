import { useRecoilValue } from "recoil";
import { themaState } from "../recoil/atom";
import styled from "@emotion/styled";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentThema = useRecoilValue(themaState);
  return (
    <Wrapper>
      <Container>{children}</Container>
      <style jsx global>
        {`
          * {
            transition: 0.3s;
            color: white;
          }
          :root {
            --base-text-color: ${currentThema === "dark" ? "white" : "black"};
            --main-color: ${currentThema === "dark" ? "#2DFFDB" : "#00A589"};
            --sub-color: ${currentThema === "dark" ? "#D8FFED" : "#009751"};
            --grey100: ${currentThema === "dark" ? "#2E2E2E" : "#FFFFFF"};
          }
          body {
            background: ${currentThema === "dark" ? "#0C1020" : "#F5FCFF"};
          }
        `}
      </style>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1480px;
`;
