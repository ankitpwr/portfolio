import Banner from "@/components/banner";
import Contacts from "@/components/contacts";
import Description from "@/components/description";
import Profile from "@/components/profile";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Banner />
      <Profile />
      <Description />
      <Contacts />
      <Skills />
    </div>
  );
}
