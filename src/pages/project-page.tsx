import Project from "@/components/project";
import { Projects } from "@/data/projects";
import React from "react";

export default function ProjectPage() {
  return (
    <div
      className={
        "flex flex-col gap-6 mt-4 mx-auto max-w-[53rem] justify-centers "
      }
    >
      <h1 className="font-figtree  text-center text-5xl pt-12  text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors duration-300">
        {" "}
        Projects{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {Projects.map((project, index) => (
          <Project
            key={index}
            projectTitle={project.title}
            projectDescription={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            techstack={project.techStack}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </Project>
        ))}
      </div>
    </div>
  );
}
