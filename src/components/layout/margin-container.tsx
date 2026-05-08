import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function MarginContainer() {
  return (
    // Removed overflow-x-hidden (which breaks sticky) and md:px-96 (which squished desktop view)
    <div className="w-full overflow-hidden min-h-screen flex flex-col pb-20 transition-colors duration-300 bg-zinc-50 dark:bg-[#000000] text-zinc-900 dark:text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}
