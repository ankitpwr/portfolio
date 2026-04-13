import Project from "./project";
import { Projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className=" flex flex-col gap-3 w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-zinc-100 font-geist tracking-tight">
          Featured Projects
        </h1>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Projects.map((project) => (
          <Project
            projectTitle={project.title}
            projectDescription={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            techstack={project.techStack}
          >
            <img src={project.image} className="w-full h-full object-cover" />
          </Project>
        ))}
      </div>
    </section>
  );
}
