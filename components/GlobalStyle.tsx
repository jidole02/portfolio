import { useRecoilValue } from "recoil";
import { themaState } from "./../recoil/atom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentThema = useRecoilValue(themaState);

  console.log(currentThema);

  return (
    <div>
      {children}
      <style jsx global>
        {`
          * {
            color: blue;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
