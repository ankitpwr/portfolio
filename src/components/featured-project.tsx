import Project from "./project";
import { Projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-4">
        {/* Added dynamic text colors and transitions */}
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 font-geist tracking-tight transition-colors duration-300">
          Featured Projects
        </h1>
        {/* Adjusted the gradient line so it fades cleanly in light mode */}
        <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-300 dark:from-zinc-800 to-transparent transition-colors duration-300"></div>
      </div>

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
    </section>
  );
}
