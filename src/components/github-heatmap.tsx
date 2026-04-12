import { GitHubCalendar } from "react-github-calendar";

export function GithubHeatmaps() {
  // Custom grayscale theme matching your image
  const minimalTheme = {
    light: ["#f0f0f0", "#c4c4c4", "#a0a0a0", "#7a7a7a", "#4d4d4d"],
    dark: ["#1a1a1a", "#333333", "#4d4d4d", "#666666", "#808080"],
  };

  return (
    <div className=" flex flex-col gap-2 ">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-zinc-100 font-geist tracking-tight">
          Github Activity
        </h1>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
      </div>
      <div className="p-6 border border-zinc-800 rounded-xl bg-[#0d1117]">
        <GitHubCalendar
          username="ankitpwr"
          colorScheme="dark"
          theme={minimalTheme}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
        />
      </div>
    </div>
  );
}
