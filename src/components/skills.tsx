import StackIcon from "tech-stack-icons";
import LogoLoop from "./LogoLoop";
import SkillLogo from "./skills-logos";

const frontendTech = [
  {
    node: (
      <SkillLogo title="TypeScript">
        <StackIcon name="typescript" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="JavaScript">
        <StackIcon name="js" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="React">
        <StackIcon name="react" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Tailwind CSS">
        <StackIcon name="tailwindcss" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Next.js">
        <StackIcon name="nextjs2" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Zustand">
        <StackIcon name="zustand" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
];

const backendTech = [
  {
    node: (
      <SkillLogo title="Node.js">
        <StackIcon name="nodejs" variant="dark" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Express.js">
        <StackIcon name="expressjs" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="WebSocket">
        <StackIcon name="socketio" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="PostgreSQL">
        <StackIcon name="postgresql" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Redis">
        <StackIcon name="redis" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Docker">
        <StackIcon name="docker" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="AWS">
        <StackIcon name="aws" className="w-5 h-5" />
      </SkillLogo>
    ),
  },
];

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
