import { githubUsername } from "@/data/profile";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./theme-provider";

export function GithubHeatmaps() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const explicitTheme = {
    light: ["#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#3f3f46"],
    dark: ["#18181b", "#3f3f46", "#71717a", "#a1a1aa", "#ebebeb"],
  };

  return (
    <section className="flex flex-col gap-6 w-full">
      <div className="h-[1px] flex-grow bg-gradient-to-r bg-zinc-300 dark:bg-zinc-900  "></div>

      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-500 font-geist tracking-tight transition-colors duration-300">
          GitHub Activity
        </h1>
      </div>

      <div className="rounded-[20px] backdrop-blur-sm flex justify-center overflow-hidden w-full font-geist">
        <GitHubCalendar
          username={githubUsername}
          colorScheme={isDark ? "dark" : "light"}
          theme={explicitTheme}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          style={{
            color: isDark ? "#a1a1aa" : "#52525b",
            padding: "2px",
            transition: "color 0.3s ease",
          }}
          year={"last"}
        />
      </div>
    </section>
  );
}
