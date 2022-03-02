import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ThechArr } from "./techArr";

const Tech = () => {
  const arr = ThechArr;
  const [doubleArr, setDoubleArr] = useState<any[]>([]);

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
      {doubleArr.map((arr: any[], index) => (
        <Line key={index}>
          {arr.map((tech, index) => (
            <TechText rand={rand(2, 8)} key={index}>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -5px;
`;

const Line = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const TechText = styled.span<{ rand: number }>`
  color: var(--base-text-color);
  font-size: ${({ rand }) => `${rand * 10}px`};
`;
