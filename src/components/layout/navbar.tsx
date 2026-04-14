import DecryptedText from "../DecryptedText";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../theme-provider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-[#060010]/60 border-b border-zinc-200 dark:border-white/5 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 font-geist">
        <DecryptedText
          text="~/ankit_panwar"
          animateOn="inViewHover"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
          speed={50}
          maxIterations={10}
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-white transition-colors cursor-pointer"
        />

        <div className="flex gap-6 text-sm font-medium items-center text-zinc-600 dark:text-zinc-400">
          <a
            href="#"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            About
          </a>

          <DarkModeSwitch
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
