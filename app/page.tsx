import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";
import People from "@/components/People";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomePage />
      <Features />
      <Works />
      <About />
      <People />
    </div>
  );
}
