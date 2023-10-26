import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import News from "@/components/News";
import People from "@/components/People";
import Works from "@/components/Works";
import Image from "next/image";
import HomePage from "./homepage/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomePage />
      <Features />
      <Works />
      <About />
      <People />
      <News />
      <ContactUs />
    </div>
  );
}
