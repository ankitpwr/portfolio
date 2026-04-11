import React from "react";

import StackIcon from "tech-stack-icons";
import LogoLoop from "./LogoLoop";
import SkillLogo from "./skills-logos";
const techLogos = [
  {
    node: (
      <SkillLogo title="TypeScript">
        <StackIcon name="typescript" className="w-6 h-6 " />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="JavaScript">
        <StackIcon name="js" className="w-6 h-6 " />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="React">
        <StackIcon name="react" className="w-6 h-6 " />,
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="tailwindCss">
        <StackIcon name="tailwindcss" className="w-6 h-6" />,
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="NextJs">
        <StackIcon name="nextjs2" className="w-6 h-6 " />,
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="zustand">
        <StackIcon name="zustand" className="w-6 h-6" />,
      </SkillLogo>
    ),
  },
];

export default function Skills() {
  return (
    <div className="  mt-12 flex flex-col gap-2 ">
      <h1 className="text-xl">Skills</h1>
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}
