import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { scrollY } from "../../recoil/atom";

const Stair = () => {
  const scrollValue = useRecoilValue(scrollY);
  const stairArr = [
    "#6891FF",
    "#68B4FF",
    "#68E0FF",
    "#68FFEA",
    "#68FFC3",
    "#68FF90",
    "#85FF68",
    "#F0FF68",
  ];
  return (
    <Wrapper>
      {stairArr.map((color, index) => {
        const [stairOffset, setStairOffset] = useState(0);
        useEffect(() => {
          const stair: any =
            document && document.getElementById(`stair${index}`)?.offsetTop;
          setStairOffset(stair);
        }, []);
        return (
          <StairPiece
            id={`stair${index}`}
            key={index}
            color={color}
            index={index}
            length={stairArr.length}
            isOut={scrollValue > stairOffset}
          />
        );
      })}
    </Wrapper>
  );
};

export default Stair;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 200px;
`;

const stairAnime = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:0.8;
}
`;

const StairPiece = styled.div<{
  color: string;
  index: number;
  length: number;
  isOut: boolean;
}>`
  width: 230px;
  height: 60px;
  border-radius: 10px;
  position: absolute;
  background-color: ${({ color }) => color};
  margin-left: ${({ index, length }) => `${index * (100 / length - 0.5)}%`};
  margin-top: ${({ index, length }) => `${(length - index) * 40}px`};
  animation: ${stairAnime} 2s;
  animation-delay: ${({ index }) => `${index * 0.3}s`};
  opacity: 0;
  animation-fill-mode: forwards;
  transform: ${({ isOut }) => (isOut ? `translateX(calc(100vw + 230px))` : ``)};
  transition: 2s;
`;
