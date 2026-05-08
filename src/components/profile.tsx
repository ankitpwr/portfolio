import { name, profileImage, role } from "@/data/profile";
import PixelTransition from "./PixelTransition";
import RotatingText from "./rotatingTest";

export default function Profile() {
  return (
    <div className="relative z-10 flex flex-row items-center md:items-center gap-6 md:gap-8 mt-12 md:mt-24 px-4 md:px-0">
      <div className="w-fit h-fit rounded-2xl bg-white/40 dark:bg-[#060010]/50 backdrop-blur-sm shadow-xl border border-white/60 dark:border-white/10 transition-all duration-300 p-1.5 flex-shrink-0">
        <PixelTransition
          firstContent={
            <img
              src={profileImage}
              className="h-24 w-24 md:h-28 md:w-28 rounded-xl object-cover dark:grayscale hover:grayscale-0 transition-all duration-500"
            />
          }
          secondContent={
            <img
              src={profileImage}
              className="h-24 w-24 md:h-28 md:w-28 rounded-xl object-cover"
            />
          }
          gridSize={8}
          pixelColor="#f4f4f5"
          once={false}
          animationStepDuration={0.4}
          className="h-24 w-24 md:h-28 md:w-28 bg-zinc-200 dark:bg-zinc-900 rounded-xl overflow-hidden"
        />
      </div>

      <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
        <h1 className="font-geist text-2xl md:text-[42px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300 leading-none sm:leading-tight">
          {name}
        </h1>

        <div className="text-sm sm:text-lg font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
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
      </div>
    </div>
  );
}
