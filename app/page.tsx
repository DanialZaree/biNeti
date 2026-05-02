import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col flex-1 justify-between items-center sm:items-start bg-white dark:bg-black px-16 py-32 w-full max-w-3xl">
        <Navbar/>
      </main>
    </div>
  );
}
