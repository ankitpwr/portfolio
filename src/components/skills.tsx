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
      <SkillLogo title="tailwindCss">
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
      <SkillLogo title="zustand">
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
    <div className="  mt-12 flex flex-col ">
      <h1 className="text-xl">Tools that I have used</h1>
      <div
        // style={{ height: "200px", position: "relative", overflow: "hidden" }}
        className="flex flex-col gap-1 relative overflow-hidden  h-fit "
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
        />
      </div>
    </div>
  );
}
