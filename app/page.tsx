import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full overflow-y-scroll bg-cover bg-no-repeat bg-[url('/background.webp')] -z-50">
  <Navbar />
  <Hero />
</main>
  );
}
