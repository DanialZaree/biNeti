import Image from "next/image";
import Link from "next/link";
import { AppWindow } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Excalidraw",
    description:
      "تخته وایت‌بردی که باهاش می‌تونید به راحتی نمودار و وایرفریم‌ و با یک حس دست‌نویس بودن رسم کنید.",
    image: "/img/excalidraw.avif",
    alt: "Excalidraw Cover",
    link: "https://excalidraw.hxlab.ir/",
  },
  {
    id: 2,
    name: "BentoPDF",
    description:
      "مجموعه ابزارهای مرتبط با PDF. مرج کردن، جدا کردن، تبدیل کردن و غیره.",
    image: "/img/pdf.avif",
    alt: "BentoPDF Cover",
    link: "https://pdf.hxlab.ir/",
  },
  {
    id: 3,
    name: "VERT",
    description:
      "وب‌اپلیکیشن تبدیل فرمت فایل‌ها بطور کامل در مرورگر امن خودتون.",
    image: "/img/vert.avif",
    alt: "VERT Cover",
    link: "https://vert.hxlab.ir/",
  },
  {
    id: 4,
    name: "MonkeyType",
    description: "وب‌اپلیکیشن تمرین و تست سرعت تایپ",
    image: "/img/type.avif",
    alt: "MonkeyType Cover",
    link: "https://type.hxlab.ir/",
  },
  {
    id: 5,
    name: "Moodist",
    description: "صداهای محیطی برای بهبود تمرکز و آرامش.",
    image: "/img/moodist.avif",
    alt: "Moodist Cover",
    link: "https://moodist.hxlab.ir/",
  },
  {
    id: 6,
    name: "Screego",
    description:
      "اشتراک گذاری صفحه‌تون با هرکسی که آیدی سِشِن رو بدونه! خیلی سریع، روون و ساده.",
    image: "/img/screego.avif",
    alt: "Screego Cover",
    link: "https://screego.hxlab.ir/",
  },
  {
    id: 7,
    name: "DrawIO",
    description: "وب‌اپلیکیشن حرفه‌ای برای رسم انواع دیاگرام‌ها.",
    image: "/img/drawio.avif",
    alt: "DrawIO Cover",
    link: "https://drawio.hxlab.ir/",
  },
  {
    id: 8,
    name: "Icones",
    description: "کالکشن خیلی بزرگ و کامل از آیکون‌ها.",
    image: "/img/icones.avif",
    alt: "Icones Cover",
    link: "https://icones.hxlab.ir/",
  },
  {
    id: 9,
    name: "IT Tools",
    description:
      "یه مجموعه‌ی خیلی بزرگ از ابزارهای دم دستی برای برنامه‌نویس‌ها و فعالان IT.",
    image: "/img/it-tools.avif",
    alt: "IT Tools Cover",
    link: "https://it-tools.hxlab.ir/",
  },
  {
    id: 10,
    name: "CyberChef",
    description:
      "یک وب‌اپلیکیشن برای رمزگذاری، کدگذاری، فشرده‌سازی و تجزیه و تحلیل داده‌ها.",
    image: "/img/cyberchef.avif",
    alt: "CyberChef Cover",
    link: "https://cyberchef.hxlab.ir/",
  },
  {
    id: 11,
    name: "EchoIP",
    description: "دریافت اطلاعات آیپی‌آدرستون.",
    image: "/img/ip.avif",
    alt: "EchoIP Cover",
    link: "https://ip.hxlab.ir/",
  },
];

export default function Services() {
  return (
    <section
      className="flex flex-col gap-4 mt-10 p-4 scroll-mt-22"
      id="services"
    >
      <div className="flex w-full">
        <span className="flex justify-center items-center p-2 border-2 border-border size-14">
          <AppWindow />
        </span>
        <div className="flex flex-col flex-1 justify-between">
          <h2 className="my-auto pr-4 font-semibold text-lg">سرویس‌ها</h2>
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
