import { banner } from "@/data/profile";

export default function Banner() {
  return (
    <div className="relative w-full h-36  overflow-hidden shadow-2xl">
      <img
        src={banner}
        className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-400"
      />
    </div>
  );
}
