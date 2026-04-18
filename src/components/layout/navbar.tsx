import DecryptedText from "../DecryptedText";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../theme-provider";
import { useSound } from "@/hooks/use-sound";
import { clickSoftSound } from "../../lib/click-soft";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [play] = useSound(clickSoftSound);
  const isDarkMode = theme === "dark";

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 w-fit flex mx-auto   backdrop-blur-md bg-white/70 dark:bg-[#060010]/60 border-b border-zinc-200 dark:border-white/5 transition-colors duration-300">
      <div className="mx-auto flex w-[53rem] items-center justify-between px-4 sm:px-6 lg:px-8 py-4 ">
        <DecryptedText
          text="~/ankit_panwar"
          animateOn="inViewHover"
          revealDirection="start"
          sequential={true}
          characters="ABCD1234!?"
          speed={30}
          maxIterations={20}
          className="text-sm  font-semibold tracking-tight text-zinc-900 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-white transition-colors cursor-pointer"
        />

        <div className="flex gap-6 text-sm font-medium items-center text-zinc-600 dark:text-zinc-400">
          <p
            onClick={() => navigate("/")}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => navigate("/projects")}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </p>

          <DarkModeSwitch
            onClick={() => play()}
            size={18}
            sunColor="#52525b"
            moonColor="#e4e4e7"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </div>
      </div>
    </nav>
  );
}
