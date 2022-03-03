import styled from "@emotion/styled";
import Facebook from "../../assets/facebook";
import Github from "../../assets/github";
import Insta from "../../assets/insta";
import { keyframes } from "@emotion/react";
import { ReactElement } from "react";

const Button = ({
  children,
  adress,
}: {
  children: ReactElement;
  adress: string;
}) => {
  const copyAdress = () => {
    window.open(adress);
  };
  return <button onClick={copyAdress}>{children}</button>;
};

const Contact = () => {
  return (
    <Wrapper>
      <Button children={<Github />} adress="https://github.com/jidole02" />
      <Button
        children={<Facebook />}
        adress="https://www.facebook.com/profile.php?id=100012148756964"
      />
      <Button
        children={<Insta />}
        adress="https://www.instagram.com/ji_won_1214/"
      />
    </Wrapper>
  );
};

export default Contact;

const wrapperAnime = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  opacity: 0;
  animation: ${wrapperAnime} 1s;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  & button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0px 0px 6px rgb(255, 255, 255, 0.3);
    background-color: var(--grey100);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      box-shadow: 0px 0px 10px rgb(255, 255, 255, 0.6);
    }
    & svg {
      & path {
        fill: var(--sub-color);
      }
    }
  }
`;
