import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function MarginContainer() {
  return (
    <div
      className={`w-screen h-screen flex flex-col md:px-96 text-white bg-black `}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
