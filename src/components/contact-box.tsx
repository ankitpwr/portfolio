import { type ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface Props {
  title: string;
  link: string;
  children?: ReactNode;
}

export default function ContactBox({ title, link, children }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger>
        {" "}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="group bg-white dark:bg-[#151418] text-zinc-600 dark:text-zinc-200 text-sm border border-zinc-200 dark:border-[#292929] flex justify-center text-center items-center px-3 py-2 gap-2 rounded-lg font-figtree hover:bg-zinc-50 dark:hover:bg-[#1f1e24] hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 shadow-sm"
        >
          {children}
          {/* <span>{title}</span> */}
        </a>
      </TooltipTrigger>
      <TooltipContent className="rounded-lg font-geist">
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
