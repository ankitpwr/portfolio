import { Clock, MapPin } from "@phosphor-icons/react";
import whiplash from "../assets/whiplash.jpg";
import { format } from "date-and-time";
import { useEffect, useState } from "react";

export default function Profile() {
  const [time, setTime] = useState<string>(`${format(new Date(), "HH:mm:ss")}`);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(`${format(new Date(), "HH:mm:ss")}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    // -mt-12 pulls the entire profile section up over the banner
    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 -mt-12 px-2 sm:px-4">
      {/* Avatar Container with a dark background to hide the banner line behind it */}
      <div className="rounded-2xl bg-[#060010] p-1.5 shadow-xl border border-white/10">
        <img
          src={whiplash}
          className="h-28 w-28 sm:h-32 sm:w-32 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
          alt="Ankit Panwar"
        />
      </div>

      {/* Info Container */}
      <div className="flex flex-col gap-1.5 pb-2">
        <h1 className="font-geist text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Ankit Panwar
        </h1>
        <div className="font-geist text-base font-medium text-zinc-400">
          Full-Stack Developer
        </div>

        {/* Badges */}
        <div className="mt-1 flex flex-wrap gap-4 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 border border-white/10">
            <MapPin weight="fill" />
            <span>India</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 border border-white/10">
            <Clock weight="fill" />
            <span suppressHydrationWarning>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
