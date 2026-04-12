import React, { type ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function SkillLogo({ title, children }: Props) {
  return (
    <div className="flex gap-2.5 items-center px-4 py-2 rounded-full bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-300 text-zinc-400 hover:text-zinc-100 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-center">{children}</div>
      <span className="text-sm font-medium tracking-wide">{title}</span>
    </div>
  );
}
