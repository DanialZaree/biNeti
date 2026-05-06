import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const Azar = localFont({
  src: [
    {
      path: "../public/fonts/AzarMehr-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AzarMehr-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "بی‌نتی | ابزارهای رایگان مدیریت قطعی‌ها",
    template: "%s | بی‌نتی - ابزارهای هوشمند برای روزهای سخت",
  },
  description:
    "بی‌نتی (Bi Neti) مجموعه‌ای از ابزارهای رایگان و هوشمند برای مدیریت هزینه‌ها، کاهش مصرف و مقابله با قطعی‌های اینترنت و برق است. ابزارهای کاربردی و رایگان را همینجا تجربه کنید.",
  keywords: [
    "بی نتی",
    "Bi Neti",
    "ابزار رایگان",
    "مدیریت قطعی اینترنت",
    "مدیریت قطعی برق",
    "کاهش مصرف",
    "ابزار مدیریت هزینه",
    "بهینه‌سازی مصرف",
    "ابزارهای هوشمند ایرانی",
    "مدیریت شبکه",
  ],
  authors: [{ name: "تیم بی‌نتی" }],
  creator: "Bi Neti Team",
  publisher: "Bi Neti",
  metadataBase: new URL("https://bineti.ir"),

  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.svg",
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://bineti.ir",
    title: "بی‌نتی | ابزارهای رایگان مدیریت قطعی‌ها",
    description:
      "با ابزارهای رایگان بی‌نتی، قطعی‌ها را مدیریت کنید. ابزارهای کاربردی برای کاهش مصرف اینترنت و برق بدون هزینه.",
    siteName: "Bi Neti",
    images: [
      {
        url: "/og-image.avif",
        width: 1200,
        height: 630,
        alt: "بی‌نتی - ابزارهای مدیریت قطعی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بی‌نتی | ابزارهای رایگان مدیریت قطعی‌ها",
    description:
      "ابزارهای هوشمند و رایگان برای مدیریت قطعی‌های اینترنت و برق. همین حالا شروع کنید.",
    images: ["/og-image.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        dir="rtl"
        lang="fa"
        className={`${Azar.className} h-full antialiased scroll-smooth scrollbar`}
      >
        <body className="flex flex-col min-h-full">
          <div className="-top-10 sm:top-0 -z-10 absolute inset-x-0 place-self-center backdrop-blur-3xl w-full max-w-6xl h-80 animate-in duration-1000 fade-in">
            <Image
              src="/img/pattern.svg"
              className="absolute inset-0 opacity-40 w-full h-full mix-blend-soft-light"
              width={1080}
              height={240}
              loading="eager"
              fetchPriority="high"
              alt="pattern svg"
            />
          </div>
          {children}
        </body>
      </html>
      <Footer />
    </>
  );
}
