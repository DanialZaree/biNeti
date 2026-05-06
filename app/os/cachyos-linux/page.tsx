"use client";
import Navbar from "@/app/components/Navbar";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function page() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-8 mx-auto px-4 max-w-6xl container">
        <div className="relative flex flex-col justify-center items-center gap-4 max-h-[70svh] size-full aspect-square font-mono">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center">
            CachyOS
          </h1>
          <p className="text-lg">cachyos.hxcdn.ir</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="SVGRoot"
            version="1.1"
            viewBox="0 0 17.921 17.921"
            className="-z-10 absolute mask-linear-from-transparent mask-linear-to-white fill-zinc-700 mx-auto w-auto h-full"
          >
            <circle
              cx="64.51"
              cy="62.02"
              r="87.45"
              opacity="0"
              strokeWidth=".27971"
            ></circle>
            <path d="m4.3286 1.9244h8.3458l-2.1127 3.6528h-4.526l-1.8859 3.2605 1.9121 3.306h8.8286l-2.1664 3.7456h-8.5747l-4.1369-7.1525 3.9605-6.8475z"></path>
            <path d="m3.973 1.8893 6.5887 3.6879 2.1127-3.6528z"></path>
            <path d="m6.0619 12.144-1.9125 3.7456h8.5747l2.1664-3.7456z"></path>
            <path d="m3.973 1.8893 6.5887 3.6879h-4.526l-1.8859 3.2605 1.9121 3.306-1.9125 3.7456-4.1369-7.1525 3.9605-6.8475"></path>
            <path d="m0.0125 8.7368 4.1373 0.10091 0.11568 0.19788-4.123-0.082887z"></path>
            <path d="m10.562 5.5772-6.5887-3.6879-0.50106 0.9021 4.9947 2.7648z"></path>
            <path d="m6.0029 5.5427 6.7111-3.7832-2.169 3.5579z"></path>
            <path d="m6.0356 5.5772 6.6388-3.6528-2.1127 3.6528z"></path>
            <path d="m0.0125 8.7368 6.0231-3.1596-1.8859 3.2605z"></path>
            <path d="m0.0125 8.7368 6.0231-3.1596-0.4069-0.6354-5.1908 3.0036z"></path>
            <path d="m6.0356 5.5772-2.0626-3.6879 0.17673 6.9484z"></path>
            <path d="m6.0619 12.144 6.6622 3.7456 2.1664-3.7456z"></path>
            <path d="m3.973 1.8893-0.50106 0.9021 0.048066 6.0168 0.62973 0.029556z"></path>
            <path d="m4.1498 8.8377-3.1586 1.5811 3.1583 5.4705z"></path>
            <path d="m4.1498 8.8377v7.0516l0.77392-1.5077 0.059767-4.1337z"></path>
            <path d="m4.1494 15.889-0.29801-0.53544 1.9191-3.6995 0.29137 0.48935z"></path>
            <path d="m0.99115 10.419 3.1586-1.5811-0.62972-0.029556-2.7405 1.307z"></path>
            <path d="m0.99115 10.419 5.0708 1.7248-1.9121-3.306z"></path>
            <path d="m6.0619 12.144-5.0708-1.7248 0.55061 0.94903 4.1672 1.5109z"></path>
            <path d="m6.0619 12.144 6.6622 3.7456 0.79849-1.4187-4.2878-2.3635z"></path>
            <g transform="matrix(.14699 0 0 .14672 -.84757 -.42617)">
              <circle cx="117.95" cy="75.441" r="9.6894"></circle>
              <circle cx="118.08" cy="75.341" r="9.6894"></circle>
            </g>
            <g transform="matrix(.14699 0 0 .14672 -.20056 -.74963)">
              <circle cx="93.138" cy="55.045" r="7.3559"></circle>
              <circle cx="93.239" cy="54.969" r="7.3559"></circle>
            </g>
            <g transform="matrix(.14699 0 0 .14672 -.17051 -.32616)">
              <circle cx="103.06" cy="26.657" r="3.7877"></circle>
              <circle cx="103.11" cy="26.618" r="3.7877"></circle>
            </g>
            <path d="m6.0356 5.5772-2.0626-3.6879 0.52544-0.0074221 1.9387 3.4465z"></path>
          </svg>
        </div>
        <div className="gap-4 grid md:grid-cols-2">
          <div className="flex flex-col gap-8 bg-card p-4 border border-border min-w-0">
            <div className="flex flex-col gap-2">
              <h2 className="font-heading font-semibold text-xl uppercase tracking-wider">
                استفاده از میرور
              </h2>
              <p className="text-muted-foreground">
                برای استفاده از میرور CachyOS کافیه mirrorlist های داخل
                دایرکتوری /etc/pacman.d تون رو آپدیت کنید.
              </p>
            </div>

            <div dir="ltr" className="rounded-sm overflow-hidden font-mono">
              <div className="flex justify-between items-center bg-chart-5 px-2 py-1">
                <span className="overflow-hidden text-muted-foreground text-sm text-ellipsis text-nowrap">
                  /etc/pacman.d/cachyos-mirrorlist
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      "Server = https://cachyos.hxcdn.ir/repo/$arch/$repo",
                      0,
                    )
                  }
                  className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer aria-expanded:bg-muted aria-expanded:text-foreground size-7 [&_svg:not([class*='size-'])]:size-3"
                >
                  {copiedIndex === 0 ? (
                    <Check size={24} className="text-green-500" />
                  ) : (
                    <Copy size={24} />
                  )}
                </button>
              </div>
              <div className="flex flex-col bg-background p-2 overflow-x-auto text-[.96rem] scrollbar">
                <div className="flex items-center gap-3">
                  <span className="opacity-30 select-none">1</span>
                  <code className="text-nowrap">
                    Server = https://cachyos.hxcdn.ir/repo/$arch/$repo
                  </code>
                </div>
              </div>
            </div>

            <div dir="ltr" className="rounded-sm overflow-hidden font-mono">
              <div className="flex justify-between items-center bg-chart-5 px-2 py-1">
                <span className="overflow-hidden text-muted-foreground text-sm text-ellipsis text-nowrap">
                  /etc/pacman.d/cachyos-v3-mirrorlist
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      "Server = https://cachyos.hxcdn.ir/repo/$arch_v3/$repo",
                      1,
                    )
                  }
                  className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer aria-expanded:bg-muted aria-expanded:text-foreground size-7 [&_svg:not([class*='size-'])]:size-3"
                >
                  {copiedIndex === 1 ? (
                    <Check size={24} className="text-green-500" />
                  ) : (
                    <Copy size={24} />
                  )}
                </button>
              </div>
              <div className="flex flex-col bg-background p-2 overflow-x-auto text-[.96rem] scrollbar">
                <div className="flex items-center gap-3">
                  <span className="opacity-30 select-none">1</span>
                  <code className="text-nowrap">
                    Server = https://cachyos.hxcdn.ir/repo/$arch_v3/$repo
                  </code>
                </div>
              </div>
            </div>

            <div dir="ltr" className="rounded-sm overflow-hidden font-mono">
              <div className="flex justify-between items-center bg-chart-5 px-2 py-1">
                <span className="overflow-hidden text-muted-foreground text-sm text-ellipsis text-nowrap">
                  /etc/pacman.d/cachyos-v4-mirrorlist
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(` Server = https://cachyos.hxcdn.ir/repo/$arch_v4/$repo`,
                      2,
                    )
                  }
                  className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer aria-expanded:bg-muted aria-expanded:text-foreground size-7 [&_svg:not([class*='size-'])]:size-3"
                >
                  {copiedIndex === 2 ? (
                    <Check size={24} className="text-green-500" />
                  ) : (
                    <Copy size={24} />
                  )}
                </button>
              </div>
              <div className="flex flex-col bg-background p-2 overflow-x-auto text-[.96rem] scrollbar">
                <div className="flex items-center gap-3">
                  <span className="opacity-30 select-none">1</span>
                  <code className="text-nowrap">
                    Server = https://cachyos.hxcdn.ir/repo/$arch_v4/$repo
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
