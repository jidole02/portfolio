import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { themaState } from "./../../recoil/atom";

const ThemaToggleButton = () => {
  const [toggle, setToggle] = useState(false);
  const [thema, setThema] = useRecoilState(themaState);

  const handleToggle = () => {
    if (toggle) {
      setThema("dark");
    } else {
      setThema("light");
    }
    setToggle(!toggle);
  };

  return (
    <Wrapper
      onClick={handleToggle}
      style={
        toggle
          ? { background: "linear-gradient(to right, #4A68FF, #C1CFFF)" }
          : { background: "linear-gradient(to right, #48ffb0, #00c26e)" }
      }
    >
      <div
        className="circle-wrap"
        style={toggle ? { width: "100%" } : { width: "23px" }}
      >
        <div className="circle" />
      </div>
    </Wrapper>
  );
};

export default ThemaToggleButton;

const Wrapper = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 24px;
  background-color: blue;
  padding: 4px;
  position: relative;
  & .circle-wrap {
    display: flex;
    width: 23px;
    justify-content: flex-end;
  }
  & .circle {
    width: 23px;
    height: 23px;
    background: white;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
  }
`;
