import Link from "next/link";

import { HeartHandshake,Heart } from "lucide-react";

export default function Support() {
  return (
    <section className="flex flex-col gap-4 p-4 scroll-mt-22" id="os">
      <div className="flex w-full">
        <span className="flex justify-center items-center p-2 border-2 border-border size-14">
          <HeartHandshake />
        </span>
        <div className="flex flex-col flex-1 justify-between">
          <h2 className="my-auto pr-4 font-semibold text-lg">حامیان پروژه</h2>
          <div className="bg-linear-to-l to-transparent from-border w-full h-0.5"></div>
        </div>
      </div>
      <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3">
        <div
          data-slot="card"
          data-size="default"
          className="group/card flex flex-col justify-center items-center gap-6 data-[size=sm]:gap-5 bg-card bg-linear-190 from-pink-900/30 to-transparent shadow-sm mx-auto px-8 py-8 data-[size=sm]:py-5 has-[&gt;img:first-child]:pt-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none ring-1 ring-foreground/5 max-w-sm overflow-hidden text-card-foreground text-sm"
        >
        <Heart size={50} fill="#fccee8" stroke="#fccee8"/>
          <h3 className="text-shadow-glow text-shadow-pink-950 font-bold text-pink-200 text-3xl">
            رضایت شما!
          </h3>
          <p className="text-pink-200/80 text-center">
            مهم‌ترین چیز برای ما کمکیه که بتونیم توی این شرایط به شما بکنیم.
            همین که از این سایت استفاده کنین و راضی باشین، خودش بزرگ‌ترین
            حمایته!
          </p>
          <div
            data-slot="card-footer"
            className="flex items-center mt-auto px-8 group-data-[size=sm]/card:px-5 [.border-t]:pt-8 group-data-[size=sm]/card:[.border-t]:pt-5"
          >
            <Link
              href={"https://donofa.ir/bineti"}
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 bg-primary-foreground text-primary hover:bg-primary-foreground/80 h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4 w-full"
            >
              <span>حمایت</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
