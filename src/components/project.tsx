import type { ReactNode } from "react";
import BorderGlow from "./BorderGlow";
import { GithubLogoIcon, GlobeIcon } from "@phosphor-icons/react";
import ContactBox from "./contact-box";

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
      backgroundColor="#060010"
      borderRadius={21}
      glowRadius={40}
      glowIntensity={0.8}
      coneSpread={24}
      animated={false}
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
    >
      <div className="flex flex-col rounded p-2 font-geist">
        {children}
        <div className="flex justify-between p-4">
          <h1 className="text-lg">{projectTitle}</h1>
          <div className="flex gap-4">
            <GlobeIcon size={24} />
            <GithubLogoIcon size={24} weight="bold" />
          </div>
        </div>
        <div className="flex flex-col p-4">
          <p>{projectDescription}</p>
          <div className="flex gap-2 ">
            {techstack.map((tech, index) => (
              <h1 key={index} className="k">
                {tech}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </BorderGlow>
  );
}
