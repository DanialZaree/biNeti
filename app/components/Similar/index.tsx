import Image from "next/image";
import Link from "next/link";
import { AppWindowMac } from "lucide-react";

const products = [
  {
  id: 21,
  name: "Bazitory",
  description: "آنلاین بازی کردن خیلی از بازی‌ها با اینترنت داخلی.",
  image: "/img/bazitory.avif",
  alt: "Bazitory Cover",
  link: "https://bazitory.com/"
},
{
  id: 22,
  name: "DevNeeds",
  description: "مقایسه و جستجو بین تمامی میرورهای ایران + آموزش استفاده از میرورها و دسترسی به میرورهای پرسرعت.",
  image: "/img/devneeds.avif",
  alt: "DevNeeds Cover",
  link: "https://devneeds.ir/"
},
{
  id: 23,
  name: "Bokhary",
  description: "ارائه‌دهنده‌ی سرویس‌های ارتباطی و دیگر داکیومنتیشن‌ها.",
  image: "/img/bokhary.avif",
  alt: "Bokhary Cover",
  link: "https://bokhary.fun/"
},
{
  id: 24,
  name: "Scorpian",
  description: "بهترین مخزن گیتهاب ایران با دسترسی سریع به پروژه‌های متن‌باز.",
  image: "/img/scorpian.avif",
  alt: "Scorpian Cover",
  link: "https://scorpian.ir/"
}
];

export default function Similar() {
  return (
    <section
      className="flex flex-col gap-4 mt-10 p-4 scroll-mt-22"
      id="document"
    >
      <div className="flex w-full">
        <span className="flex justify-center items-center p-2 border-2 border-border size-14">
          <AppWindowMac />
        </span>
        <div className="flex flex-col flex-1 justify-between">
          <h2 className="my-auto pr-4 font-semibold text-lg">وبسایت‌های مشابه</h2>
          <div className="bg-linear-to-l to-transparent from-border w-full h-0.5"></div>
        </div>
      </div>
      <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            data-slot="card"
            data-size="default"
            className="group/card relative flex flex-col gap-8 data-[size=sm]:gap-5 bg-card/60 shadow-sm backdrop-blur-md mx-auto py-8 data-[size=sm]:py-5 pt-0 has-[>Image:first-child]:pt-0 *:[Image:first-child]:rounded-none *:[Image:last-child]:rounded-none ring-1 ring-foreground/5 w-full max-w-sm overflow-hidden text-card-foreground text-sm"
          >
            <div className="relative bg-zinc-800 aspect-video">
              <Image
                src={product.image}
                alt={product.alt}
                loading="lazy"
                fetchPriority="low"
                width={2560}
                height={1440}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              data-slot="card-header"
              className="@container/card-header group/card-header items-start gap-1.5 grid has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] auto-rows-min px-8 group-data-[size=sm]/card:px-5 [.border-b]:pb-8 group-data-[size=sm]/card:[.border-b]:pb-5 rounded-none"
            >
              <div
                data-slot="card-title"
                className="font-heading font-semibold text-foreground text-lg uppercase tracking-wider"
                dir="auto"
              >
                {product.name}
              </div>
              <div
                data-slot="card-description"
                className="text-muted-foreground text-sm/relaxed"
              >
                {product.description}
              </div>
            </div>
            <div
              data-slot="card-footer"
              className="flex items-center mt-auto px-8 group-data-[size=sm]/card:px-5 [.border-t]:pt-8 group-data-[size=sm]/card:[.border-t]:pt-5"
            >
              <Link
                href={product.link}
                target="_blank"
                className="group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 bg-primary-foreground text-primary hover:bg-primary-foreground/80 h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4 w-full"
              >
                <span>ورود به {product.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
