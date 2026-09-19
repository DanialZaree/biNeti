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
          <div className="sm:hidden flex items-center gap-2">
            {!menuOpen && (
              <Link
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-wider whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 bg-primary-foreground text-primary hover:bg-primary-foreground/80 h-9 gap-1.5 px-3.5"
                href="https://github.com/danialzaree"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21" />
                </svg>
                <span>گیت‌هاب</span>
              </Link>
            )}
            <button
              onClick={menuHandler}
              type="button"
              aria-label="Toggle menu"
              data-slot="button"
              className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest uppercase transition-all outline-none select-none hover:bg-muted hover:text-foreground size-10 cursor-pointer"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>
      <nav
        className={`${menuOpen ? "sm:hidden top-14 z-30 fixed inset-x-0 px-4 py-8 w-full transition-all translate-y-0 duration-300 ease-in-out bg-card/95 backdrop-blur-lg border-b border-border shadow-xl" : "sm:hidden z-30 fixed inset-x-0 px-4 py-8 w-full transition-all -translate-y-full duration-300 ease-in-out"}`}
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
