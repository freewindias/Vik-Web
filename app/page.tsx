import Hero from "./components/Hero";


export const revalidate = 30;

export default function Home() {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <Hero />
    </div>
  );
}
