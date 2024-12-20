import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};

function Layouts({ children }: Props) {
  return (
    <div>
      <NavBar />
      <div>{children ?? <Outlet />}</div>
    </div>
  );
}

export default Layouts;
