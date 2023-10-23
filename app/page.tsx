import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomePage />
      <Features />
    </div>
  );
}
