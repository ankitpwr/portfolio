import StackIcon from "tech-stack-icons";
import LogoLoop from "./LogoLoop";
import SkillLogo from "./skills-logos";
import { BackendSkill, FrontendSkill } from "@/data/skills";

const frontendTech = FrontendSkill.map((skill) => ({
  node: (
    <SkillLogo title={`${skill.charAt(0).toUpperCase() + skill.slice(1)}`}>
      <StackIcon name={`${skill}`} variant="dark" className="w-4 h-4" />
    </SkillLogo>
  ),
}));

const backendTech = BackendSkill.map((skill) => ({
  node: (
    <SkillLogo title={`${skill.charAt(0).toUpperCase() + skill.slice(1)}`}>
      <StackIcon name={`${skill}`} variant="dark" className="w-4 h-4" />
    </SkillLogo>
  ),
}));

export default function Skills() {
  return (
    <section className="flex flex-col  w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-zinc-100 font-geist tracking-tight">
          Skills & Tools
        </h1>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
      </div>

      <div className="flex flex-col gap-1 relative overflow-hidden w-full py-2">
        <LogoLoop
          logos={frontendTech}
          speed={35}
          direction="left"
          logoHeight={48}
          gap={24}
          hoverSpeed={10}
          scaleOnHover
          fadeOut={true}
          fadeOutColor="#060010"
          ariaLabel="Frontend Technology Stack"
        />

        <LogoLoop
          logos={backendTech}
          speed={35}
          direction="right"
          logoHeight={48}
          gap={24}
          hoverSpeed={10}
          scaleOnHover
          fadeOut={true}
          fadeOutColor="#060010"
          ariaLabel="Backend Technology Stack"
        />
      </div>
    </section>
  );
}
