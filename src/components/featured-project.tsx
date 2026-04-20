import Project from "./project";
import { Projects } from "@/data/projects";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function FeaturedProjects() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col w-full">
      <div className="h-[1px] flex-grow bg-gradient-to-r bg-zinc-300 dark:bg-zinc-900 mb-6 "></div>

      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-500 font-geist tracking-tight transition-colors duration-300">
          Featured Projects
        </h1>
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
      <div className="w-full flex items-center justify-center mt-8">
        <Button
          onClick={() => navigate("/projects")}
          variant={"outline"}
          className="w-36 font-figtree rounded-lg p-4 cursor-pointer"
        >
          Show all projects
        </Button>
      </div>
    </section>
  );
}
