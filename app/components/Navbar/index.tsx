"use client";
import { GlobeX, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function menuHandler() {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <>
      <header className="top-0 z-40 sticky slide-in-from-top mx-auto sm:p-4 w-full max-w-6xl transition-all animate-in duration-1000 ease-in-out container">
        <nav className="flex justify-between items-center bg-card/80 backdrop-blur-md p-4 sm:border border-border border-b h-14 size-full overflow-hidden">
          <Link
            className="flex items-center gap-2"
            href={"/"}
          >
            <div>
              <GlobeX size={30} />
            </div>
            <h1 className="font-bold text-2xl">بی‌نتی</h1>
          </Link>
          <ul className="not-sm:hidden flex gap-2">
            <li>
              <Link
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 border-border bg-transparent hover:bg-border/50 hover:text-foreground h-10 gap-1.5 px-5"
                href={"/#os"}
              >
                سیستم‌عامل‌ها
              </Link>
            </li>
            <li>
              <Link
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 border-border bg-transparent hover:bg-border/50 hover:text-foreground h-10 gap-1.5 px-5"
                href={"/#services"}
              >
                سرویس‌ها
              </Link>
            </li>
            <li>
              <Link
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 border-border bg-transparent hover:bg-border/50 hover:text-foreground h-10 gap-1.5 px-5"
                href={"/#document"}
              >
                داکیومنت‌ها
              </Link>
            </li>
            <li>
              <Link
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 bg-primary-foreground text-primary hover:bg-primary-foreground/80 h-10 gap-1.5 px-6"
                href={"https://github.com/danialzaree"}
                target="_blank"
                rel="noreferrer"
              >
                گیت‌هاب
              </Link>
            </li>
          </ul>
          <button
            onClick={menuHandler}
            type="button"
            aria-label="Toggle menu"
            data-slot="button"
            className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest uppercase transition-all outline-none select-none hover:bg-muted hover:text-foreground size-11 sm:hidden cursor-pointer"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>
      <nav
        className={`${menuOpen ? "sm:hidden top-14 z-30 fixed inset-x-0 px-4 py-8 w-full transition-all translate-y-0 duration-300 ease-in-out bg-card/95 backdrop-blur-lg border-b border-border shadow-xl" : "sm:hidden top-14 z-30 fixed inset-x-0 px-4 py-8 w-full transition-all -translate-y-full duration-300 ease-in-out"}`}
      >
        <ul className="flex flex-col gap-4 w-full">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-border bg-transparent hover:bg-muted hover:text-foreground text-xs font-semibold tracking-widest uppercase transition-all h-10 gap-1.5 px-6 w-full"
              href="/#os"
            >
              سیستم‌عامل‌ها
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-border bg-transparent hover:bg-muted hover:text-foreground text-xs font-semibold tracking-widest uppercase transition-all h-10 gap-1.5 px-6 w-full"
              href="/#services"
            >
              سرویس‌ها
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-border bg-transparent hover:bg-muted hover:text-foreground text-xs font-semibold tracking-widest uppercase transition-all h-10 gap-1.5 px-6 w-full"
              href="/#document"
            >
              داکیومنت‌ها
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-primary-foreground text-primary hover:bg-primary-foreground/80 text-xs font-semibold tracking-widest uppercase transition-all h-10 gap-1.5 px-6 w-full"
              href={"https://github.com/danialzaree"}
              target="_blank"
              rel="noreferrer"
            >
              گیت‌هاب (danialzaree)
            </Link>
          </li>
        </ul>
      </nav>
      {menuOpen ? (
        <div
          onClick={() => setMenuOpen(false)}
          className="sm:hidden block top-0 z-10 fixed bg-background/50 backdrop-blur-lg w-full h-svh animate-in fade-in cursor-pointer"
        />
      ) : null}
    </>
  );
}
