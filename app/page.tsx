import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";

export default function Home() {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <Hero />
    </div>
  );
}
