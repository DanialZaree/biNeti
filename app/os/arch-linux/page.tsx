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
            Arch Linux
          </h1>
          <p className="text-lg">arch.hxcdn.ir</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="-z-10 absolute mask-linear-from-transparent mask-linear-to-white fill-zinc-700 mx-auto w-auto h-full"
          >
            <path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554c-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.6 6.6 0 0 1-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973c1.426.12 2.534 2.096 2.478 4.409a6.5 6.5 0 0 1-.146 1.243c2.58.505 5.352 1.787 8.914 3.844c-.702-1.293-1.33-2.459-1.929-3.57c-.943-.73-1.926-1.682-3.933-2.713c1.38.359 2.367.772 3.137 1.234c-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5l.034.107l.038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"></path>
          </svg>
        </div>
        <div className="gap-4 grid md:grid-cols-2">
          <div className="flex flex-col gap-8 bg-card p-4 border border-border min-w-0">
            <div className="flex flex-col gap-2">
              <h2 className="font-heading font-semibold text-xl uppercase tracking-wider">
                استفاده از میرور
              </h2>
              <p className="text-muted-foreground">
                برای استفاده از میرور Arch Linux کافیه اون رو به فایل
                /etc/pacman.d/mirrorlist تون اضافه بکنید.
              </p>
            </div>

            <div dir="ltr" className="rounded-sm overflow-hidden font-mono">
              <div className="flex justify-between items-center bg-chart-5 px-2 py-1">
                <span className="overflow-hidden text-muted-foreground text-sm text-ellipsis text-nowrap">
                  /etc/pacman.d/mirrorlist
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard("Server = https://arch.hxcdn.ir/$repo/os/$arch", 0)
                  }
                  className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer aria-expanded:bg-muted aria-expanded:text-foreground size-7 [&_svg:not([class*='size-'])]:size-3"
                >
                  {copiedIndex === 0 ? (
                    <Check size={20} className="text-green-500" />
                  ) : (
                    <Copy size={20} />
                  )}
                </button>
              </div>
              <div className="flex flex-col bg-background p-2 overflow-x-auto text-[.96rem] scrollbar">
                <div className="flex items-center gap-3">
                  <span className="opacity-30 select-none">1</span>
                  <code className="text-nowrap">
                    Server = https://arch.hxcdn.ir/$repo/os/$arch
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
