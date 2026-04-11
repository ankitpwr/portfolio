import React, { type ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function SkillLogo({ title, children }: Props) {
  return (
    <div className="flex gap-1  items-center p-2 rounded-lg">
      {children}
      <h1 className="text-base align-text-bottom">{title}</h1>
    </div>
  );
}
