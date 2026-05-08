import Contacts from "@/components/contacts";
import Description from "@/components/description";
import FeaturedProjects from "@/components/featured-project";
import Footer from "@/components/footer";
import { GithubHeatmaps } from "@/components/github-heatmap";
import Profile from "@/components/profile";
import Skills from "@/components/skills";
import Blog from "../components/blog";

export default function Home() {
  return (
    <div className="md:min-h-screen flex flex-col transition-colors duration-300 ">
      <main className="  mx-auto w-full px-4 md:px-0 max-w-[53rem]">
        {" "}
        <Profile />
        <Description />
        <Contacts />
        <div className="mt-20 flex flex-col gap-20">
          <Skills />
          <GithubHeatmaps />
          <FeaturedProjects />
          <Blog />
          <Footer />
        </div>
      </main>
    </div>
  );
}
