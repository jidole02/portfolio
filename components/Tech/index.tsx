import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ThechArr } from "./techArr";
import { keyframes } from "@emotion/react";

const Tech = () => {
  const arr = ThechArr;
  const [doubleArr, setDoubleArr] = useState<any[]>([]);
  const [toggle, setToggle] = useState(false);

  function pushArrToDoubleArr() {
    let tempArr: any[] = [];
    let result: any[] = [];
    for (let i = 1; i < arr.length + 1; i++) {
      tempArr.push(arr[i - 1]);
      if (i % 5 === 0 || i === arr.length) {
        let temp = JSON.parse(JSON.stringify(tempArr));
        result.push(temp);
        tempArr.length = 0;
      }
    }
    setDoubleArr(result);
  }

  function rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(pushArrToDoubleArr, []);

  return (
    <Wrapper>
      <ChangeTextSizeButton
        onClick={() => setToggle(!toggle)}
        className="anime"
        id="anime"
      >
        여기를 눌러보세요!
      </ChangeTextSizeButton>
      {doubleArr.map((arr: any[], index) => (
        <Line key={index} className="anime">
          {arr.map((tech, index) => (
            <TechText rand={rand(3, 10)} toggle={index % 2} key={index}>
              {tech}
            </TechText>
          ))}
        </Line>
      ))}
    </Wrapper>
  );
};

export default Tech;

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Line = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  transition: 3s;
`;

const TechText = styled.span<{ rand: number; toggle: number }>`
  color: var(--sub-color);
  font-size: ${({ rand }) => `${rand * 8}px`};
  transition: 0.2s;
  text-transform: ${({ toggle }) => (toggle === 0 ? "uppercase" : "none")};
`;

const anime = keyframes`
  0%{
    opacity:0.5;
  }
  50%{
    opacity:1;
  }
  100%{
    opacity:0.5;
  }
`;

const ChangeTextSizeButton = styled.button`
  font-size: 20px;
  color: var(--main-color);
  margin-bottom: 30px;
  /*   animation: ${anime} 1s infinite linear; */
  transition: 1s;
  &:hover {
    opacity: 1;
    animation: none;
  }
`;
