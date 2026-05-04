import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SystemOs from "./components/SystemOs";

export default function Home() {
  return (
    <div >
        <Navbar/>
        <Hero/>
        <SystemOs/>
    </div>
  );
}
