import StackIcon from "tech-stack-icons";
import LogoLoop from "./LogoLoop";
import SkillLogo from "./skills-logos";
const frontendTech = [
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
        <StackIcon name="react" className="w-6 h-6 " />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="TailwindCss">
        <StackIcon name="tailwindcss" className="w-6 h-6" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="NextJs">
        <StackIcon name="nextjs2" className="w-6 h-6 " />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Zustand">
        <StackIcon name="zustand" className="w-6 h-6" />
      </SkillLogo>
    ),
  },
];

const backendTech = [
  {
    node: (
      <SkillLogo title="NodeJs">
        <StackIcon name="nodejs" className="w-6 h-6" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="ExpressJs">
        <StackIcon name="expressjs" className="w-6 h-6" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="PostgreSQL">
        <StackIcon name="postgresql" className="w-6 h-6" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Redis">
        <StackIcon name="redis" className="w-6 h-6" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="Docker">
        <StackIcon name="docker" className="w-6 h-6" />
      </SkillLogo>
    ),
  },
  {
    node: (
      <SkillLogo title="AWS">
        <StackIcon name="aws" className="w-6 h-6" />
      </SkillLogo>
    ),
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-zinc-100 font-geist tracking-tight">
          Skills & Tools
        </h1>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
      </div>
      <div
        // style={{ height: "200px", position: "relative", overflow: "hidden" }}
        className="flex flex-col  relative overflow-hidden  h-fit "
      >
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={frontendTech}
          speed={50}
          direction="left"
          logoHeight={60}
          gap={30}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners-1s"
          className="font-figtree"
        />
        <LogoLoop
          logos={backendTech}
          speed={50}
          direction="right"
          logoHeight={60}
          gap={30}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners-2"
          className="font-figtree"
        />
      </div>
    </div>
  );
}
