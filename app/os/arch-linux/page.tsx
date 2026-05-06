"use client"
import Navbar from "@/app/components/Navbar";
import { Copy, Check } from "lucide-react"; // Import Check icon for feedback
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
            Void Linux
          </h1>
          <p className="text-lg">void.hxcdn.ir</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="-z-10 absolute mask-linear-from-transparent mask-linear-to-white fill-zinc-700 mx-auto w-auto h-full"
          >
            <path d="M15.818 12a3.82 3.82 0 0 1-3.82 3.82A3.82 3.82 0 0 1 8.178 12a3.82 3.82 0 0 1 3.82-3.82a3.82 3.82 0 0 1 3.82 3.82m3.179 9.73l-2.726-2.725A8.2 8.2 0 0 1 12 20.212A8.21 8.21 0 0 1 3.788 12a8.2 8.2 0 0 1 1.209-4.269l-2.73-2.73A12 12 0 0 0 0 12c0 6.627 5.373 12 12 12a12 12 0 0 0 6.997-2.27M12 0a12 12 0 0 0-6.997 2.27L7.73 4.994A8.2 8.2 0 0 1 12 3.788A8.21 8.21 0 0 1 20.212 12a8.2 8.2 0 0 1-1.209 4.269l2.73 2.73A12 12 0 0 0 24 12c0-6.627-5.373-12-12-12"></path>
          </svg>
        </div>
        <div className="gap-4 grid md:grid-cols-2">
          <div className="flex flex-col gap-8 bg-card p-4 border border-border min-w-0">
            <div className="flex flex-col gap-2">
              <h2 className="font-heading font-semibold text-xl uppercase tracking-wider">
                استفاده از میرور
              </h2>
              <p className="text-muted-foreground">
                برای استفاده از میرور Void Linux ما دو راه دارید، یا با استفاده
                از xmirror اون رو تغییر بدید و یا بصورت دستی که هر دو رو پایین
                می‌تونید مشاهده کنید.
              </p>
            </div>

            <div dir="ltr" className="rounded-sm overflow-hidden font-mono">
              <div className="flex justify-between items-center bg-chart-5 px-2 py-1">
                <span className="overflow-hidden text-muted-foreground text-sm text-ellipsis text-nowrap">
                  Terminal
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard("xmirror -s https://void.hxcdn.ir", 0)}
                  className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer aria-expanded:bg-muted aria-expanded:text-foreground size-7 [&_svg:not([class*='size-'])]:size-3"
                >
                  {copiedIndex === 0 ? (
                    <Check size={20} className="text-green-500" />
                  ) : (
                    <Copy size={20} />
                  )}
                </button>
              </div>
              <div
                className="flex flex-col bg-background p-2 overflow-x-auto text-[.96rem] scrollbar"
              >
                <div className="flex items-center gap-3">
                  <span className="opacity-30 select-none">$</span>
                  <code className="text-nowrap">
                    xmirror -s https://void.hxcdn.ir
                  </code>
                </div>
              </div>
            </div>

            <div dir="ltr" className="rounded-sm overflow-hidden font-mono">
              <div className="flex justify-between items-center bg-chart-5 px-2 py-1">
                <span className="overflow-hidden text-muted-foreground text-sm text-ellipsis text-nowrap">
                  Terminal
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(
`mkdir -p /etc/xbps.d
cp /usr/share/xbps.d/*-repository-*.conf /etc/xbps.d/
sed -i 's|https://repo-default.voidlinux.org|https://void.hxcdn.ir|g' /etc/xbps.d/*-repository-*.conf`, 1
                  )}
                  className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer aria-expanded:bg-muted aria-expanded:text-foreground size-7 [&_svg:not([class*='size-'])]:size-3"
                >
                  {copiedIndex === 1 ? (
                    <Check size={20} className="text-green-500" />
                  ) : (
                    <Copy size={20} />
                  )}
                </button>
              </div>
              <div
                className="flex flex-col bg-background p-2 overflow-x-auto text-[.96rem] scrollbar"
              >
                <div className="flex items-center gap-3">
                  <span className="opacity-30 select-none">$</span>
                  <code className="text-nowrap">mkdir -p /etc/xbps.d</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="opacity-30 select-none">$</span>
                  <code className="text-nowrap">
                    cp /usr/share/xbps.d/*-repository-*.conf /etc/xbps.d/
                  </code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="opacity-30 select-none">$</span>
                  <code className="text-nowrap">
                    sed -i
                    's|https://repo-default.voidlinux.org|https://void.hxcdn.ir|g'
                    /etc/xbps.d/*-repository-*.conf
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