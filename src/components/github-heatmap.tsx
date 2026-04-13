import { githubUsername } from "@/data/profile";
import { GitHubCalendar } from "react-github-calendar";

export function GithubHeatmaps() {
  // Sleek, high-contrast monochrome theme matching Tailwind's Zinc scale
  const explicitTheme = {
    light: ["#f4f4f5", "#d4d4d8", "#a1a1aa", "#71717a", "#3f3f46"],
    dark: ["#18181b", "#27272a", "#3f3f46", "#71717a", "#a1a1aa"],
  };

  return (
    <section className="flex flex-col gap-6 w-full">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-zinc-100 font-geist tracking-tight">
          GitHub Activity
        </h1>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
      </div>

      {/* Calendar Container */}
      <div className="rounded-[20px]  backdrop-blur-sm flex justify-center overflow-hidden w-full font-geist">
        <GitHubCalendar
          username={githubUsername}
          colorScheme="dark"
          theme={explicitTheme}
          blockSize={11}
          blockMargin={4}
          fontSize={14}
          style={{
            color: "#a1a1aa", // Forces the text to match text-zinc-400
            padding: "2px",
          }}
          year={"last"}
        />
      </div>
    </section>
  );
}
