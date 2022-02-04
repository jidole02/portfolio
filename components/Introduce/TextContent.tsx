import styled from "@emotion/styled";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & .top-intro {
    color: var(--base-text-color);
    font-size: 25px;
  }
  & .field {
    color: var(--main-color);
    margin-top: 15px;
    font-size: 25px;
    font-weight: 400;
    text-transform: uppercase;
  }
  & .name {
    color: var(--base-text-color);
    font-size: 50px;
    font-weight: 400;
    margin-top: 30px;
    & b {
      font-weight: 700;
      color: var(--base-text-color);
    }
  }
  & .my-description {
    color: var(--sub-color);
    margin-top: 50px;
    font-size: 20px;
  }
`;
