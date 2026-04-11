import React from "react";
import BorderGlow from "./BorderGlow";
import Project from "./project";
import orbit from "../assets/orbit-lookup-1.png";

export default function FeaturedProjects() {
  return (
    <div className="mt-12 flex flex-col gap-2 ">
      <h1 className="text-xl font-geist">Featured Projects</h1>
      <div className="md:grid md:grid-cols-2 gap-8 ">
        <Project
          projectTitle="Orbit"
          liveLink={"https://x.com/ankit_pam"}
          githubLink={"https://x.com/ankit_pam"}
          projectDescription="an uptime monitoring system to monitor of your website and api's"
          techstack={["NodeJs", "React", "Redis", "Prisma", "PostgreSQL"]}
        >
          <img src={orbit} className="rounded-lg" />
        </Project>
        <Project
          projectTitle="Orbit"
          liveLink={"https://x.com/ankit_pam"}
          githubLink={"https://x.com/ankit_pam"}
          projectDescription="an uptime monitoring system to monitor of your website and api's"
          techstack={["NodeJs", "React", "Redis", "Prisma", "PostgreSQL"]}
        >
          <img src={orbit} className="rounded-lg" />
        </Project>
        <Project
          projectTitle="Orbit"
          liveLink={"https://x.com/ankit_pam"}
          githubLink={"https://x.com/ankit_pam"}
          projectDescription="an uptime monitoring system to monitor of your website and api's"
          techstack={["NodeJs", "React", "Redis", "Prisma", "PostgreSQL"]}
        >
          <img src={orbit} className="rounded-lg" />
        </Project>
        <Project
          projectTitle="Orbit"
          liveLink={"https://x.com/ankit_pam"}
          githubLink={"https://x.com/ankit_pam"}
          projectDescription="an uptime monitoring system to monitor of your website and api's"
          techstack={["NodeJs", "React", "Redis", "Prisma", "PostgreSQL"]}
        >
          <img src={orbit} className="rounded-lg" />
        </Project>
      </div>
    </div>
  );
}
