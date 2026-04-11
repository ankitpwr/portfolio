import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function MarginContainer() {
  return (
    <div
      className={`w-screen h-fit flex flex-col md:px-96 pb-20 text-white bg-black `}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
