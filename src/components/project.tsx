import type { ReactNode } from "react";
import BorderGlow from "./BorderGlow";
import { GithubLogo, Globe } from "@phosphor-icons/react";
import { useTheme } from "./theme-provider";

interface Props {
  projectTitle: string;
  projectDescription: string;
  liveLink: string;
  githubLink: string;
  techstack: string[];
  children: ReactNode;
}

export default function Project({
  projectTitle,
  projectDescription,
  liveLink,
  githubLink,
  techstack,
  children,
}: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <BorderGlow
      isDark={isDark}
      edgeSensitivity={18}
      glowColor={isDark ? "40 80 80" : "40 80 50"}
      backgroundColor={isDark ? "#0a0a0a" : "#ffffff"}
      borderRadius={21}
      glowRadius={80}
      glowIntensity={1}
      coneSpread={24}
      animated={false}
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
      className="h-full"
    >
      <div className="flex flex-col h-full rounded-[20px] p-2 font-geist bg-white/80 dark:bg-zinc-950/50 transition-colors duration-300">
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800/50 aspect-video w-full bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
          {children}
        </div>

        <div className="flex flex-col flex-grow p-4 gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {projectTitle}
            </h2>
            <div className="flex gap-3 text-zinc-500 dark:text-zinc-400">
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              >
                <Globe size={22} weight="regular" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              >
                <GithubLogo size={22} weight="regular" />
              </a>
            </div>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">
            {projectDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {techstack.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BorderGlow>
  );
}
