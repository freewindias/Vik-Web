import Hero from "../components/Hero";
import Brush from "../components/animated-gifs/brush";
import Timeline from "../components/timeline/page";

export const revalidate = 30;
const events = [
  {
    image:
      "https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-power-cables-on-a-railway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "First Exhibition",
    description: "Vikrant Belu's first exhibition showcasing his early works.",
    location: "New York, 2010",
    year: "2010",
  },
  {
    image:
      "https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Modern Art Gallery",
    description: "A collection of contemporary pieces by Vikrant Belu.",
    location: "Los Angeles, 2015",
    year: "2015",
  },
  {
    image:
      "https://images.pexels.com/photos/25539612/pexels-photo-25539612/free-photo-of-the-view-from-the-top-of-a-tall-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "International Art Fair",
    description: "Featured artist at the International Art Fair.",
    location: "Paris, 2020",
    year: "2020",
  },

  {
    year: "2022",
    image:
      "https://images.pexels.com/photos/25539612/pexels-photo-25539612/free-photo-of-the-view-from-the-top-of-a-tall-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Event Title",
    description: "Event Description",
    location: "Event Location",
  },
  {
    year: "2021",
    image:
      "https://images.pexels.com/photos/16848795/pexels-photo-16848795/free-photo-of-relaxation-in-luxembourg-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Another Event Title",
    description: "Another Event Description",
    location: "Another Event Location",
  },
  // Add more events as needed
];
export default function AboutPage() {
  return (
    <>
      <div className="mt-6">
        <h1>about Page</h1>
        <Hero />
        <Timeline events={events} />
        <div className="grid h-max  w-screen">{/* <Brush /> */}</div>
        <div></div>
      </div>
    </>
  );
}
