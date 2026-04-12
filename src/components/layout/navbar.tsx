export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#060010]/60 border-b border-white/5">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 font-geist">
        <h1 className="text-sm font-semibold tracking-tight text-zinc-200 hover:text-white transition-colors cursor-pointer">
          ~/ankit_panwar
        </h1>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
