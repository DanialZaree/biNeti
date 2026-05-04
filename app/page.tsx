import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SystemOs from "./components/SystemOs";
import Services from "./components/Services";
import Document from "./components/Document";
import Similar from "./components/Similar";

export default function Home() {
  return (
    <div >
        <Navbar/>
        <Hero/>
        <SystemOs/>
        <Services/>
        <Document/>
        <Similar/>
    </div>
  );
}
