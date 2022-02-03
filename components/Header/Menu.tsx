import styled from "@emotion/styled";

interface Props {
  content: string;
}

const Menu = ({ content }: Props) => {
  return (
    <Wrapper>
      <span>{content}</span>
      {content === "소개" && <div />}
    </Wrapper>
  );
};

export default Menu;

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
  }
`;
