export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-6 mt-20 pb-8 font-geist">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent transition-colors duration-300"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-zinc-600 dark:text-zinc-500 text-sm gap-4 transition-colors duration-300">
        <p>
          Designed & Built by{" "}
          <span className="text-zinc-900 dark:text-zinc-300 hover:text-zinc-600 dark:hover:text-white transition-colors duration-300 font-medium">
            Ankit
          </span>
        </p>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 shadow-sm dark:shadow-none backdrop-blur-sm transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
            1,234 visitors
          </span>
        </div>
      </div>
    </footer>
  );
}
