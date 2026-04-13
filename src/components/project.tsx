import type { ReactNode } from "react";
import BorderGlow from "./BorderGlow";
import { GithubLogo, Globe } from "@phosphor-icons/react";

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
  return (
    <BorderGlow
      edgeSensitivity={18}
      glowColor="40 80 80"
      backgroundColor="#0a0a0a"
      borderRadius={21}
      glowRadius={40}
      glowIntensity={0.8}
      coneSpread={24}
      animated={false}
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
      className="h-full"
    >
      <div className="flex flex-col h-full rounded-[20px] p-2 font-geist bg-zinc-950/50">
        <div className="overflow-hidden rounded-xl border border-zinc-800/50 aspect-video w-full bg-zinc-900">
          {children}
        </div>

        <div className="flex flex-col flex-grow p-4 gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
              {projectTitle}
            </h2>
            <div className="flex gap-3 text-zinc-400">
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <Globe size={22} weight="regular" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <GithubLogo size={22} weight="regular" />
              </a>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed flex-grow">
            {projectDescription}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {techstack.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-800/40 text-zinc-300 border border-zinc-700/50"
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
