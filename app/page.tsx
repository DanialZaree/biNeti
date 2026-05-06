import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SystemOs from "./components/SystemOs";
import Services from "./components/Services";
import Document from "./components/Document";
import Similar from "./components/Similar";
import Support from "./components/Support";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 mx-auto max-w-6xl container">
        <Navbar />
        <Hero />
        <SystemOs />
        <Services />
        <Document />
        <Support/>
        <Similar />
      </div>
    </>
  );
}
