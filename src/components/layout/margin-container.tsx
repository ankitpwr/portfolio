import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function MarginContainer() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:px-96 pb-20 transition-colors duration-300 bg-zinc-50 dark:bg-[#000000] text-zinc-900 dark:text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}
