import styled from "@emotion/styled";
import Email from "../../assets/email";
import Facebook from "../../assets/facebook";
import Github from "../../assets/github";
import Phone from "../../assets/phone";

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

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
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
