export default function Hero() {
  return (
    <section className="relative flex sm:flex-row-reverse flex-col justify-center items-center blur-in-sm mt-12 h-72 animate-in duration-1000 fade-in-30">
      <div className="flex flex-col flex-1 justify-center items-center gap-6 text-center shrink-0">
        <h2 className="relative md:max-w-fit max-w-2xs sm:max-w-md font-bold text-3xl sm:text-5xl text-balance">
          <span>مجموعه‌ای از برنامه‌های کار راه بنداز</span>
          <span
            data-slot="badge"
            data-variant="default"
            className="group/badge inline-flex top-0 md:-top-5 left-0 sm:left-2 md:-left-8 absolute justify-center items-center gap-1.5 bg-primary-foreground p-0 px-2 py-1 has-data-[icon=inline-start]:ps-0 has-data-[icon=inline-end]:pe-0 border-0 aria-invalid:border-destructive focus-visible:border-ring rounded-full aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 w-fit [&amp;&gt;svg]:size-3! overflow-hidden font-semibold text-[0.625rem] text-primary [a]:hover:text-foreground/70 uppercase tracking-widest whitespace-nowrap -rotate-25 transition-colors [&amp;&gt;svg]:pointer-events-none shrink-0"
          >
            رایگان!
          </span>
        </h2>
        <p className="font-semibold text-lg">
          <span className="text-shadow-glow text-shadow-green-700 text-green-500">
            رایگان
          </span>
          <span>، برای </span>
          <span className="text-shadow-glow text-shadow-pink-700 text-pink-500">
            همه
          </span>
          <span>.</span>
        </p>
      </div>
    </section>
  );
}
