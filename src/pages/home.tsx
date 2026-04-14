import Banner from "@/components/banner";
import Contacts from "@/components/contacts";
import Description from "@/components/description";
import FeaturedProjects from "@/components/featured-project";
import Footer from "@/components/footer";
import { GithubHeatmaps } from "@/components/github-heatmap";
import Profile from "@/components/profile";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen  text-white  flex flex-col">
      <main className="mx-auto w-full max-w-204  ">
        <Banner />
        <Profile />
        <Description />
        <Contacts />

        <div className=" mt-20 flex flex-col gap-14">
          <Skills />
          <GithubHeatmaps />
          <FeaturedProjects />
          <Footer />
        </div>
      </main>
    </div>
  );
}
