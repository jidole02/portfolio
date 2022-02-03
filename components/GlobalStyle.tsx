interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
