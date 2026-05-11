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

    
      </div>
    </footer>
  );
}
