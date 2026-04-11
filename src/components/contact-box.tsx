import { type ReactNode } from "react";

interface Props {
  title: string;
  link: string; //https://x.com/ankit_pam
  children?: ReactNode;
}

export default function ContactBox({ title, link, children }: Props) {
  return (
    <div
      onClick={() => (window.location.href = link)}
      className="bg-[#151418] text-base border border-[#292929] flex justify-center text-center items-center px-3 py-2 gap-2 rounded-lg font-figtree"
    >
      {children}
      <p>{title}</p>
    </div>
  );
}
