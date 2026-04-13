import orbit from "../assets/orbit-lookup-1.png";
import sketch from "../assets/sketch-lookup-1.png";
import detox from "../assets/extension-on.png";
import luminous from "../assets/luminous-lookup.png";
import luminous2 from "../assets/luminous-lookup-2.png";

export interface ProjectData {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

export const Projects: ProjectData[] = [
  {
    title: "Orbit",
    description:
      "An uptime monitoring system featuring status heatmaps, performance debugging, and a robust notification engine.",
    techStack: ["React", "NodeJs", "Redis", "Prisma", "Supabase", "Docker"],
    liveLink: "https://github.com/ankitpwr/Orbit.git",
    githubLink: "https://github.com/ankitpwr/Orbit.git",
    image: orbit,
  },

  {
    title: "Sketch",
    description:
      "A real-time collaborative whiteboard application supporting complex shapes, panning, zooming, and WebSocket synchronization",
    techStack: [
      "React",
      "NodeJs",
      "WebSocket",
      "Canvas APIs",
      "Roughjs",
      "Perfect Freehand",
      "Prisma",
    ],
    liveLink: "https://sketch-frontend-hazel.vercel.app",
    githubLink: "https://github.com/ankitpwr/Sketch.git",
    image: sketch,
  },

  {
    title: "Luminous",
    description:
      "A real-time video and image streaming application that converts media into customizable ASCII art with grayscale and color theme logic.",
    techStack: ["React", "Mediastream APIs", "Canvas APIs"],
    liveLink: "https://luminous-ecru.vercel.app/",
    githubLink: "https://github.com/ankitpwr/Luminous.git",
    image: luminous2,
  },
  {
    title: "Detox",
    description:
      "Detox is a Chrome extension that transforms YouTube into a distraction-free learning environment by filtering your feed to only show videos related to your current focus topic.",
    techStack: ["Typescript", "Chrome Extension API", "Manifest V3"],
    liveLink: "https://github.com/ankitpwr/DetoxYT.git",
    githubLink: "https://github.com/ankitpwr/DetoxYT.git",
    image: detox,
  },
];
