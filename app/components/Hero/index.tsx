import { Info } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center mt-6 gap-6 animate-in duration-1000 fade-in px-4">
      <div className="w-full max-w-3xl mx-auto p-4 rounded-lg bg-card/80 border border-border backdrop-blur-md shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
        <div className="flex items-center justify-center p-2 rounded-md border border-sky-400/60 text-foreground shrink-0">
          <Info className="size-5 text-sky-400" />
        </div>
        <div className="flex-1 text-muted-foreground leading-relaxed text-xs sm:text-sm">
          <span className="text-foreground font-semibold">داستان پروژه بی‌نتی: </span>
          این مجموعه در روزهای اختلال و قطعی اینترنت بین‌الملل، جهت دسترسی آسان و رایگان کاربران ایرانی به ابزارها و داکیومنت‌های حیاتی به‌صورت سلف‌هاست بر روی سرورهای داخلی میزبانی شده بود. هم‌اکنون پیوند تمامی ابزارها به وب‌سایت‌های مرجع و رسمی متصل شده‌اند.
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-center items-center gap-6 text-center shrink-0 py-6">
        <h2 className="relative md:max-w-fit max-w-2xs sm:max-w-md font-bold text-3xl sm:text-5xl text-balance">
          <span>مجموعه‌ای از برنامه‌های کار راه بنداز</span>
          <span
            data-slot="badge"
            data-variant="default"
            className="group/badge inline-flex top-0 md:-top-5 left-0 sm:left-2 md:-left-8 absolute justify-center items-center gap-1.5 bg-primary-foreground p-0 px-2 py-1 border-0 rounded-full w-fit overflow-hidden font-semibold text-[0.625rem] text-primary uppercase tracking-widest whitespace-nowrap -rotate-25 transition-colors shrink-0"
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
