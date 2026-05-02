export default function Blog() {
  return (
    <section className="flex flex-col w-full">
      <div className="h-[1px] flex-grow bg-gradient-to-r bg-zinc-300 dark:bg-zinc-900 mb-6 "></div>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-500 font-geist tracking-tight transition-colors duration-300">
          Blogs
        </h1>
      </div>
      <div className="flex items-center justify-center mt-4 italic font-sans text-zinc-500">
        onto...
      </div>
    </section>
  );
}
