import { WifiOff, GlobeX, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="top-0 z-40 sticky slide-in-from-top mx-auto sm:p-4 w-full max-w-6xl transition-all animate-in duration-1000 ease-in-out container">
        <nav className="flex justify-between items-center bg-card backdrop-blur-md p-4 sm:border border-border border-b h-14 size-full overflow-hidden">
          <Link className="flex items-center gap-2" href={"/"}>
            <div>
              <GlobeX size={30} />
            </div>
            <h1 className="font-bold text-2xl">بی‌نتی</h1>
          </Link>
          <ul className="not-sm:hidden flex gap-2">
            <li>
              <Link
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2  aria-invalid:border-destructive/50 aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4"
                href={"#"}
              >
                سرویس ها
              </Link>
            </li>
            <li>
              <Link
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2  aria-invalid:border-destructive/50 aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4"
                href={"#"}
              >
                داکیومنت
              </Link>
            </li>
            <li>
              <Link
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2  aria-invalid:border-destructive/50 aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 bg-primary-foreground text-primary hover:bg-primary-foreground/80 h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4"
                href={"#"}
              >
                حمایت
              </Link>
            </li>
          </ul>
          <button
            type="button"
            data-slot="button"
            className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-3.5 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-11 sm:hidden"
          >
            <Menu />
          </button>
        </nav>
      </header>
      <nav className="sm:hidden top-14 z-30 fixed inset-x-0 px-4 py-8 w-full transition-all -translate-y-full duration-300 ease-in-out">
        <ul className="flex flex-col gap-4 w-full">
          <li>
            <a
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-3.5 border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-input/30 h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4 w-full"
              href="/#docs"
            >
              داکیومنتن‌ها
            </a>
          </li>
          <li>
            <a
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-3.5 border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-input/30 h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4 w-full"
              href="/#services"
            >
              سرویس‌ها
            </a>
          </li>
          <li>
            <a
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-3.5 bg-primary text-primary-foreground hover:bg-primary/80 h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4 w-full"
              href="/#donate"
            >
              حمایت
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
