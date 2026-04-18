import { location, name, profileImage, role } from "@/data/profile";
import { Clock, MapPin } from "@phosphor-icons/react";
import { format } from "date-and-time";
import { useEffect, useState } from "react";
import PixelTransition from "./PixelTransition";

export default function Profile() {
  const [time, setTime] = useState<string>(`${format(new Date(), "HH:mm:ss")}`);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(`${format(new Date(), "HH:mm:ss")}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 px-2 sm:px-4">
      <div className="rounded-2xl bg-white/40 dark:bg-[#060010]/50 backdrop-blur-sm -mt-12 p-1.5 shadow-xl border border-white/60 dark:border-white/10 transition-all duration-300">
        <PixelTransition
          firstContent={
            <img
              src={profileImage}
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-xl object-cover dark:grayscale hover:grayscale-0 transition-all duration-500"
            />
          }
          secondContent={
            <img
              src={profileImage}
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-xl object-cover"
            />
          }
          gridSize={8}
          pixelColor="#f4f4f5"
          once={false}
          animationStepDuration={0.4}
          className="h-28 w-28 sm:h-32 sm:w-32 border-0 bg-zinc-200 dark:bg-zinc-900 rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-1.5 mt-3 sm:mt-3 sm:mb-0">
        <h1 className="font-geist text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          {name}
        </h1>
        <div className="font-geist text-base font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
          {role}
        </div>

        <div className="mt-1 flex flex-wrap gap-4 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-white/5 px-2.5 py-1 border border-zinc-200 dark:border-white/10 transition-colors duration-300">
            <MapPin weight="fill" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-white/5 px-2.5 py-1 border border-zinc-200 dark:border-white/10 transition-colors duration-300">
            <Clock weight="fill" />
            <span suppressHydrationWarning>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
