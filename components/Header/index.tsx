import { useRecoilState } from "recoil";
import { themaState } from "./../../recoil/atom";

const Header = () => {
  const [thema, setThema] = useRecoilState(themaState);

  const changeThema = () => {
    thema === "light" ? setThema("dark") : setThema("light");
  };

  return (
    <div>
      <button onClick={changeThema}>테마 변경</button>
    </div>
  );
};

export default Header;
