import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="w-screen">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
