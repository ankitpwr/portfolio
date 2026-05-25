import type { IconType } from "react-icons";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiBun,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiPostgresql,
  SiRedis,
  SiDocker,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { LiaAws } from "react-icons/lia";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

export type Skill = {
  name: string;
  Icon: IconType;
};

export const FrontendSkill: Skill[] = [
  { name: "TypeScript", Icon: BiLogoTypescript },
  { name: "JavaScript", Icon: BiLogoJavascript },
  { name: "React", Icon: RiReactjsFill },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Zustand", Icon: GiBearFace },
  { name: "Bun", Icon: SiBun },
];

export const BackendSkill: Skill[] = [
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express", Icon: SiExpress },
  { name: "websocket", Icon: SiSocketdotio },
  { name: "Prisma", Icon: SiPrisma },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redis", Icon: SiRedis },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS", Icon: LiaAws },
];
