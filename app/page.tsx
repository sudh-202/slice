// import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Info1 from "@/components/Info1";
import Info2 from "@/components/Info2";
import Info3 from "@/components/Info3";
import Navbar from "@/components/Navbar";

// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full overflow-y-clip  bg-cover bg-no-repeat bg-[url('/background.webp')] -z-50">
      <Navbar  />
      <Hero />
     <Info />
     <Info1 />
     <Info2/>
     <Info3 />
     {/* <Footer /> */}
    </main>
  );
}
