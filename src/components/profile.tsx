import { location, name, profileImage, role } from "@/data/profile";
import { Clock, MapPin } from "@phosphor-icons/react";
import { format } from "date-and-time";
import { useEffect, useState } from "react";
import PixelTransition from "./PixelTransition";
import RotatingText from "./rotatingTest";

export default function Profile() {
  const [time, setTime] = useState<string>(`${format(new Date(), "HH:mm:ss")}`);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(`${format(new Date(), "HH:mm:ss")}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    // 1. Increased top margin (mt-24) to give breathing room from the navbar.
    // 2. Changed to items-center so the image and text balance each other vertically.
    <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 mt-24 px-2 sm:px-4">
      {/* Avatar Container: Added shrink-0 so it doesn't squish, and p-1.5 for the glass border */}
      <div className="shrink-0 rounded-2xl bg-white/40 dark:bg-[#060010]/50 backdrop-blur-sm shadow-xl border border-white/60 dark:border-white/10 transition-all duration-300 p-1.5">
        <PixelTransition
          firstContent={
            <img
              src={profileImage}
              // Fixed invalid h-26/w-26. Standardized to h-24 (mobile) and h-28 (desktop).
              className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl object-cover dark:grayscale hover:grayscale-0 transition-all duration-500"
            />
          }
          secondContent={
            <img
              src={profileImage}
              className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl object-cover"
            />
          }
          gridSize={8}
          pixelColor="#f4f4f5"
          once={false}
          animationStepDuration={0.4}
          className="h-24 w-24 sm:h-28 sm:w-28 border-0 bg-zinc-200 dark:bg-zinc-900 rounded-xl"
        />
      </div>

      {/* Info Container: Centered on mobile (items-center), left-aligned on desktop (sm:items-start) */}
      <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
        {/* Name: Smoothed the scaling from 3xl (mobile) to 42px (desktop) */}
        <h1 className="font-geist text-3xl sm:text-[42px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300 leading-none sm:leading-tight">
          {name}
        </h1>

        {/* Role: Slightly larger on desktop (sm:text-lg) to match the larger name */}
        <div className="text-base sm:text-lg font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
          <RotatingText
            texts={role}
            mainClassName=""
            staggerFrom="center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.05}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
            splitBy="words"
            auto
            loop
          />
        </div>

        {/* Badges: Left commented out, but updated the flex alignment (justify-center sm:justify-start) so they align correctly if uncommented */}
        {/* <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-white/5 px-3 py-1.5 border border-zinc-200 dark:border-white/10 transition-colors duration-300">
            <MapPin weight="fill" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-white/5 px-3 py-1.5 border border-zinc-200 dark:border-white/10 transition-colors duration-300">
            <Clock weight="fill" />
            <span suppressHydrationWarning>{time}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
