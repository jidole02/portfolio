import styled from "@emotion/styled";
import { props } from "./interface";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { scrollY } from "../../recoil/atom";

const arr = [1, 2, 3, 4];

const ProjectTemplete = ({
  title,
  description,
  tag,
  stack,
  projectName,
  index,
}: props) => {
  const scrollValue = useRecoilValue(scrollY);
  const [offsetTop, setOffsetTop] = useState(0);
  useEffect(() => {
    const temp = document.getElementById(`projectContainer${index}`)?.offsetTop;
    temp && setOffsetTop(temp);
  }, []);
  return (
    <Container
      style={index && index % 2 === 0 ? { alignItems: "flex-end" } : {}}
      id={`projectContainer${index}`}
      isNow={scrollValue + 650 > offsetTop}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <HashTagContainer>
        {tag.map((content, index) => (
          <div key={index}># {content}</div>
        ))}
      </HashTagContainer>
      <StackContainer>
        {stack.map((s, index) => (
          <div key={index}>{s}</div>
        ))}
      </StackContainer>
      <ImageContainer>
        {arr.map((number, index) => (
          <img key={index} src={`/${projectName}${number}.png`} />
        ))}
      </ImageContainer>
    </Container>
  );
};

export default ProjectTemplete;

const Container = styled.div<{ isNow: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: ${({ isNow }) => (isNow ? 1 : 0)};
  transition: 1s;
  transform: ${({ isNow }) => (isNow ? 0 : "translateX(-60px) ")};
  & h1 {
    font-size: 35px;
    color: var(--base-text-color);
    font-weight: 800;
  }
  & p {
    margin-top: 10px;
    font-size: 23px;
    color: var(--sub-color);
    font-weight: 600;
  }
`;

const HashTagContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 10px;
  & div {
    font-size: 18px;
    font-weight: 500;
    color: var(--main-color);
  }
`;

const StackContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  & div {
    font-size: 20px;
    font-weight: 600;
    color: var(--sub-color);
    padding: 10px 15px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: var(--grey100);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  & img {
    border-radius: 5px;
    width: 320px;
    height: 180px;
    object-fit: cover;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.2);
      transform: scale(1.4);
    }
  }
`;
