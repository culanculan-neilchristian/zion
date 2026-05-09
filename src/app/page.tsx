import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ZPL } from "@/components/sections/ZPL";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <div className="w-full h-px divider-gradient" />
      <Services />
      <div className="w-full h-px divider-gradient" />
      <ZPL />
      <div className="w-full h-px divider-gradient" />
      <Portfolio />
      <div className="w-full h-px divider-gradient" />
      <About />
      <div className="w-full h-px divider-gradient" />
      <Contact />
      <Footer />
    </main>
  );
}
