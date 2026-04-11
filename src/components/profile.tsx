import { ClockIcon, CodeIcon, MapPin } from "@phosphor-icons/react";
import whiplash from "../assets/whiplash.jpg";
import { format } from "date-and-time";
import { useEffect, useState } from "react";
import RotatingText from "./ui/rotating";

export default function Profile() {
  const [time, setTime] = useState<string>(`${format(new Date(), "HH:mm:ss")}`);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(`${format(new Date(), "HH:mm:ss")}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex relative py-2">
      <div className="px-1 py-1 absolute -top-8  rounded-xl bg-white">
        <img src={whiplash} className="w-32 h-32 rounded-xl " />
      </div>
      <div className="flex flex-col pl-42 gap-2">
        <h1 className="text-2xl">Ankit Panwar</h1>
        <div className="flex gap-2 text-lg items-center  text-[#b4b4b4]">
          <h1>Full-Stack Developer</h1>
        </div>
        <div className="flex gap-4 text-xs items-center text-[#b4b4b4]">
          <div className="flex gap-1">
            <MapPin color="#b4b4b4" size={16} />
            <h1>India</h1>
          </div>
          <div className="flex gap-1">
            <ClockIcon color="#b4b4b4" size={16} />
            <h1>{time}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
