import { GitHubCalendar } from "react-github-calendar";

export function GithubHeatmaps() {
  // Custom grayscale theme matching your image
  const minimalTheme = {
    light: ["#f0f0f0", "#c4c4c4", "#a0a0a0", "#7a7a7a", "#4d4d4d"],
    dark: ["#1a1a1a", "#333333", "#4d4d4d", "#666666", "#808080"],
  };

  return (
    <div className="mt-12 flex flex-col gap-2 ">
      <h1 className="text-xl font-geist">My Contribution</h1>
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
