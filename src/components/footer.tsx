export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-6 mt-20 pb-8 font-geist">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-zinc-500 text-sm gap-4">
        <p>
          Designed & Built by{" "}
          <span className="text-zinc-300 hover:text-white transition-colors duration-200 font-medium">
            Ankit
          </span>
        </p>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">1,234 visitors</span>
        </div>
      </div>
    </footer>
  );
}
