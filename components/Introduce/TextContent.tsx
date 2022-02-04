import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const TextContent = () => {
  return (
    <Wrapper>
      <span className="top-intro">한걸음씩 성장해가는</span>
      <h3 className="field">frontend developer</h3>
      <h1 className="name">
        <b>정지원</b> 입니다
      </h1>
      <p className="my-description">
        누구에게나 친절하게, 누구보다도 과감하게, 누구에게도 부끄럽지 않게
        <br />
        세상을 빛낼 수 있는 개발자가 되고 싶습니다
      </p>
    </Wrapper>
  );
};

export default TextContent;

const textAnime = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  * {
    opacity: 0;
    animation: ${textAnime} 1s;
  }
  & .top-intro {
    color: var(--base-text-color);
    font-size: 25px;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  & .field {
    color: var(--main-color);
    margin-top: 15px;
    font-size: 25px;
    font-weight: 400;
    text-transform: uppercase;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }
  & .name {
    color: var(--base-text-color);
    font-size: 50px;
    font-weight: 400;
    margin-top: 30px;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    & b {
      font-weight: 700;
      color: var(--base-text-color);

      animation-delay: 2s;
      animation-fill-mode: forwards;
    }
  }
  & .my-description {
    color: var(--sub-color);
    margin-top: 50px;
    font-size: 20px;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }
`;
