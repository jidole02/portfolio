import styled from "@emotion/styled";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { scrollY } from "../../recoil/atom";

interface Props {
  content: string;
  from: number;
  to: number;
}

const Menu = ({ content, from, to }: Props) => {
  const scrollValue = useRecoilValue(scrollY);
  function moveScroll() {
    window.scrollTo({ top: from, behavior: "smooth" });
  }
  return (
    <Wrapper onClick={moveScroll}>
      <span>{content}</span>
      {from <= scrollValue && to > scrollValue && <div />}
    </Wrapper>
  );
};

export default Menu;

const anime = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  & span {
    font-size: 20px;
    color: var(--base-text-color);
  }
  & div {
    background-color: var(--main-color);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-top: 10px;
    animation: ${anime} 0.5s linear;
  }
`;
