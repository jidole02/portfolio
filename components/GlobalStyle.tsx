import { useRecoilValue } from "recoil";
import { themaState } from "./../recoil/atom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentThema = useRecoilValue(themaState);
  return (
    <div>
      {children}
      <style jsx global>
        {`
          * {
            transition: 0.3s;
          }
          :root {
            --main-text-color: ${currentThema === "light" ? "black" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
