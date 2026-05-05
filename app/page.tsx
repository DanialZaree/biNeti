import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SystemOs from "./components/SystemOs";
import Services from "./components/Services";
import Document from "./components/Document";
import Similar from "./components/Similar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="-top-6 -z-10 absolute inset-x-0 place-self-center bg-white blur-[128px] w-full max-w-6xl h-56 animate-in duration-1000 mix-blend-soft-light fade-in">
        <Image src={"/img/pattern.svg"} width={720} height={240} alt=""/>
      </div>
      <div className="flex flex-col gap-16 mx-auto max-w-6xl container">
        <Navbar />
        <Hero />
        <SystemOs />
        <Services />
        <Document />
        <Similar />
      </div>
      <Footer />
    </>
  );
}
