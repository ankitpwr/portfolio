import { githubUsername } from "@/data/profile";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./theme-provider";

export function GithubHeatmaps() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const explicitTheme = {
    light: ["#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#3f3f46"],
    dark: ["#18181b", "#27272a", "#3f3f46", "#71717a", "#a1a1aa"],
  };

  return (
    <section className="flex flex-col gap-6 w-full">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 font-geist tracking-tight transition-colors duration-300">
          GitHub Activity
        </h1>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-300 dark:from-zinc-800 to-transparent transition-colors duration-300"></div>
      </div>

      {/* Calendar Container */}
      <div className="rounded-[20px] backdrop-blur-sm flex justify-center overflow-hidden w-full font-geist">
        <GitHubCalendar
          username={githubUsername}
          colorScheme={isDark ? "dark" : "light"}
          theme={explicitTheme}
          blockSize={11}
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
