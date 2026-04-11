import Banner from "@/components/banner";
import Contacts from "@/components/contacts";
import Description from "@/components/description";
import FeaturedProjects from "@/components/featured-project";
import { GithubHeatmaps } from "@/components/github-heatmap";
import Profile from "@/components/profile";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full ">
      <Banner />
      <Profile />
      <Description />
      <Contacts />
      <Skills />
      <GithubHeatmaps />
      <FeaturedProjects />
    </div>
  );
}
