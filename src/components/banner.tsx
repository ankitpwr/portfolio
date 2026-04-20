import { banner } from "@/data/profile";

export default function Banner() {
  return (
    <div className="relative w-full h-fit  overflow-hidden shadow-sm">
      <img
        src={banner}
        className="w-full object-cover o  dark:grayscale dark:hover:grayscale-0 transition-all duration-400"
      />
    </div>
  );
}
