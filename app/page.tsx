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
      <div className="-top-10 sm:top-0 absolute inset-x-0 place-self-center backdrop-blur-3xl w-full max-w-6xl h-80 animate-in duration-1000 fade-in">
  
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
