import StackIcon from "tech-stack-icons";
import LogoLoop from "./LogoLoop";
import SkillLogo from "./skills-logos";
import { BackendSkill, FrontendSkill } from "@/data/skills";
import { useTheme } from "./theme-provider";

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const frontendTech = FrontendSkill.map((skill) => ({
    node: (
      <SkillLogo title={`${skill.charAt(0).toUpperCase() + skill.slice(1)}`}>
        <StackIcon
          name={`${skill}`}
          variant={isDark ? "dark" : "light"}
          className="w-4 h-4"
        />
      </SkillLogo>
    ),
  }));

  const backendTech = BackendSkill.map((skill) => ({
    node: (
      <SkillLogo title={`${skill.charAt(0).toUpperCase() + skill.slice(1)}`}>
        <StackIcon
          name={`${skill}`}
          variant={isDark ? "dark" : "light"}
          className="w-4 h-4"
        />
      </SkillLogo>
    ),
  }));

  return (
    <section className="flex flex-col w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold dark:text-zinc-100 text-zinc-900 font-geist tracking-tight transition-colors duration-300">
          Skills & Tools
        </h1>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-300 dark:from-zinc-800 to-transparent transition-colors duration-300"></div>
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
          // #fafafa is the exact hex for Tailwind's bg-zinc-50
          fadeOutColor={isDark ? "#060010" : "#fafafa"}
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
          fadeOutColor={isDark ? "#060010" : "#fafafa"}
          ariaLabel="Backend Technology Stack"
        />
      </div>
    </section>
  );
}
