import React, { type ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function SkillLogo({ title, children }: Props) {
  return (
    <div className="group flex gap-2.5 items-center px-4 py-2 rounded-full bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {children}
      </div>
      <span className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
        {title}
      </span>
    </div>
  );
}
