import React from "react";
import Project from "./project";
import orbit from "../assets/orbit-lookup-1.png";

export default function FeaturedProjects() {
  return (
    <section className=" flex flex-col gap-3 w-full">
      {/* Section Header with sleek horizontal line */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-zinc-100 font-geist tracking-tight">
          Featured Projects
        </h1>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Project
          projectTitle="Orbit"
          liveLink="https://x.com/ankit_pam"
          githubLink="https://x.com/ankit_pam"
          projectDescription="An uptime monitoring system featuring status heatmaps, performance debugging, and a robust notification engine."
          techstack={["Node.js", "React", "Redis", "Prisma", "PostgreSQL"]}
        >
          <img
            src={orbit}
            className="w-full h-full object-cover"
            alt="Orbit Preview"
          />
        </Project>

        <Project
          projectTitle="ASCII Stream"
          liveLink="#"
          githubLink="#"
          projectDescription="A real-time video and image streaming application that converts media into customizable ASCII art with grayscale and color theme logic."
          techstack={["React", "TypeScript", "Canvas API", "FFmpeg"]}
        >
          {/* Replace src with your actual image later */}
          <img
            src={orbit}
            className="w-full h-full object-cover grayscale opacity-60"
            alt="ASCII Preview"
          />
        </Project>

        <Project
          projectTitle="Canvas Collab"
          liveLink="#"
          githubLink="#"
          projectDescription="A real-time collaborative whiteboard application supporting complex shapes, panning, zooming, and WebSocket synchronization."
          techstack={["HTML Canvas", "React", "WebSockets", "Node.js"]}
        >
          <img
            src={orbit}
            className="w-full h-full object-cover grayscale opacity-60"
            alt="Canvas Preview"
          />
        </Project>

        <Project
          projectTitle="Workflow Ext"
          liveLink="#"
          githubLink="#"
          projectDescription="A browser extension leveraging Chrome Runtime and Alarms APIs to streamline developer workflows and productivity."
          techstack={["JavaScript", "Chrome APIs", "Webpack", "HTML/CSS"]}
        >
          <img
            src={orbit}
            className="w-full h-full object-cover grayscale opacity-60"
            alt="Extension Preview"
          />
        </Project>
      </div>
    </section>
  );
}
