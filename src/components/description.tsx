import { description } from "@/data/profile";

export default function Description() {
  return (
    <div className="mt-6 px-2 sm:px-4">
      <p className="font-geist text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}
