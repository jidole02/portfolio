import { useRecoilState, useRecoilValue } from "recoil";
import { scrollY, themaState } from "../recoil/atom";
import styled from "@emotion/styled";
import Header from "./Header/index";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentThema = useRecoilValue(themaState);
  const [scrollValue, setScrollValue] = useRecoilState(scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });
  }, []);
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <style jsx global>
        {`
          * {
            transition: 0.5s;
            color: white;
          }
          :root {
            --base-text-color: ${currentThema === "dark" ? "white" : "black"};
            --main-color: ${currentThema === "dark" ? "#2DFFDB" : "#00A589"};
            --sub-color: ${currentThema === "dark" ? "#D8FFED" : "#009751"};
            --grey100: ${currentThema === "dark" ? "#1B2630" : "#FFFFFF"};
            --main-width: 1480px;
          }
          body,
          .headercover {
            background: ${currentThema === "dark" ? "#0C1020" : "#EEFAFF"};
          }
          body::-webkit-scrollbar-track {
            background: none;
          }
          body::-webkit-scrollbar-thumb {
            background-color: ${currentThema === "dark"
              ? "#2DFFDB"
              : "#00A589"};
          }
          header {
            background: ${currentThema === "dark" ? "#0C1020" : "#EEFAFF"};
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
  width: var(--main-width);
  position: relative;
`;
