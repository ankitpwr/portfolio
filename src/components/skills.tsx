import LogoLoop from "./LogoLoop";
import SkillLogo from "./skills-logos";
import { BackendSkill, FrontendSkill } from "@/data/skills";
import { useTheme } from "./theme-provider";

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const frontendTech = FrontendSkill.map((skill) => ({
    node: (
      <SkillLogo title={skill.name}>
        <skill.Icon className="w-[20px] h-[20px] text-zinc-700 dark:text-zinc-300" />
      </SkillLogo>
    ),
  }));

  const backendTech = BackendSkill.map((skill) => ({
    node: (
      <SkillLogo title={skill.name}>
        <skill.Icon className="w-[20px] h-[20px] text-zinc-700 dark:text-zinc-300" />
      </SkillLogo>
    ),
  }));

  return (
    <section className="flex flex-col w-full px-4 md:px-0 ">
      <div className="h-[1px] flex-grow bg-gradient-to-r bg-zinc-300 dark:bg-zinc-900 mb-6 "></div>

      <div className="flex items-center gap-4 ">
        <h1 className="text-xl font-semibold dark:text-zinc-500 text-zinc-900 font-geist tracking-tight transition-colors duration-300">
          Skills & Tools
        </h1>
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
          fadeOutColor={isDark ? "#000000" : "#fafafa"}
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
