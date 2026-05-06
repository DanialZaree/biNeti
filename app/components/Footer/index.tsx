import Link from "next/link";
import { GlobeX } from "lucide-react";
export default function Footer() {
  return (
    <footer className="group flex flex-col bg-background mt-16 border-border border-t w-full transition-all">
      <div className="gap-6 grid sm:grid-cols-3 mx-auto my-8 sm:my-16 px-4 max-w-6xl container">
        <div className="flex flex-col flex-1 justify-between items-center gap-16">
            <GlobeX size={120}/>
        </div>
        <div className="flex *:flex flex-col flex-1 not-sm:justify-self-center *:items-center gap-2 *:gap-2 not-sm:mx-auto *:w-fit *:hover:text-foreground *:text-muted-foreground *:text-nowrap *:transition-colors">
          <h3 className="font-semibold text-foreground!">لینک‌های کاربردی</h3>
          <a href="/#os">
            ● <span>سیستم‌عامل‌ها</span>
          </a>
          <a href="/#services">
            ● <span>سرویس‌ها</span>
          </a>
          <a href="/#document">
            ● <span>داکیومنتیشن‌ها</span>
          </a>
        </div>
        <div className="flex *:flex flex-col flex-1 not-sm:justify-self-center *:items-center gap-2 *:gap-2 not-sm:mx-auto *:w-fit *:hover:text-foreground *:text-muted-foreground *:text-nowrap *:transition-colors">
          <h3 className="font-semibold text-foreground!">راه‌های ارتباطی</h3>
          <Link target="_blank" href="ts3server://bazitory.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
              />
            </svg>
            <span>گیت‌هاب</span>
          </Link>
          <Link target="_blank" href="https://t.me/danialzaree0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9.642-2.618q-1.458.607-5.831 2.513q-.711.282-.744.552c-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4q4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02c.059.052.053.15.047.177c-.038.161-1.534 1.552-2.308 2.271q-.344.324-.683.653c-.474.457-.83.8.02 1.36c.861.568 1.73 1.134 2.57 1.733c.414.296.786.56 1.246.519c.267-.025.543-.276.683-1.026c.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393a.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117c-.376.007-.953.207-3.73 1.362"
              />
            </svg>
            <span>تلگرام</span>
          </Link>
        </div>
      </div>
      <svg
        viewBox="0 0 1206 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mask-linear-from-5% mask-linear-from-transparent mask-linear-to-white fill-transparent group-hover:fill-primary-foreground stroke-muted-foreground hover:stroke-primary mx-auto w-full max-w-6xl transition-all duration-1500 container"
      >
        <path d="M 642.95 251.301 L 579.25 251.301 L 479.15 94.501 L 479.15 251.301 L 418.6 251.301 L 418.6 0.001 L 489.65 0.001 L 582.4 145.251 L 582.4 0.001 L 642.95 0.001 L 642.95 251.301 Z M 758.1 193.901 L 869.75 193.901 L 869.75 251.301 L 691.95 251.301 L 691.95 0.001 L 867.3 0.001 L 867.3 57.401 L 758.1 57.401 L 758.1 93.451 L 857.15 93.451 L 857.15 150.851 L 758.1 150.851 L 758.1 193.901 Z M 1031.45 59.851 L 1031.45 251.301 L 965.3 251.301 L 965.3 59.851 L 888.3 59.851 L 888.3 0.001 L 1108.45 0.001 L 1108.45 59.851 L 1031.45 59.851 Z M 103.95 251.301 L 0 251.301 L 0 0.001 L 100.8 0.001 Q 142.1 0.001 166.075 17.501 Q 190.05 35.001 190.05 67.901 Q 190.05 84.351 181.65 97.301 Q 173.25 110.251 157.5 119.701 Q 176.75 127.751 187.075 141.751 Q 197.4 155.751 197.4 175.701 Q 197.4 211.051 172.55 231.176 Q 147.7 251.301 103.95 251.301 Z M 1204.35 0.001 L 1204.35 251.301 L 1138.2 251.301 L 1138.2 0.001 L 1204.35 0.001 Z M 296.45 0.001 L 296.45 251.301 L 230.3 251.301 L 230.3 0.001 L 296.45 0.001 Z M 98.7 147.701 L 59.85 147.701 L 59.85 199.151 L 98.7 199.151 Q 117.25 199.151 126.175 192.151 Q 135.1 185.151 135.1 173.251 Q 135.1 161.701 126.175 154.701 Q 117.25 147.701 98.7 147.701 Z M 95.55 52.151 L 59.85 52.151 L 59.85 95.551 L 95.55 95.551 Q 112 95.551 119.875 89.601 Q 127.75 83.651 127.75 73.501 Q 127.75 63.701 119.875 57.926 Q 112 52.151 95.55 52.151 Z" />
      </svg>
    </footer>
  );
}
