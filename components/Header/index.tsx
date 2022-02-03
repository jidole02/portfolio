import { useRecoilState } from "recoil";
import { themaState } from "./../../recoil/atom";
import styled from "@emotion/styled";
import ThemaToggleButton from "./ThemaToggleButton";

const Header = () => {
  const [thema, setThema] = useRecoilState(themaState);

  const changeThema = () => {
    thema === "light" ? setThema("dark") : setThema("light");
  };

  return (
    <Wrapper>
      <ThemaToggleButton />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  padding-top: 35px;
`;
