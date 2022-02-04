import styled from "@emotion/styled";
import Email from "../../assets/email";
import Facebook from "../../assets/facebook";
import Github from "../../assets/github";
import Phone from "../../assets/phone";
import { keyframes } from "@emotion/react";

const Contact = () => {
  return (
    <Wrapper>
      <button>
        <Github />
      </button>
      <button>
        <Email />
      </button>
      <button>
        <Facebook />
      </button>
      <button>
        <Phone />
      </button>
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
    & svg {
      & path {
        fill: var(--sub-color);
      }
    }
  }
`;
