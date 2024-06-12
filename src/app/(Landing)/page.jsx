import Header from "@/components/layouts/Header";
import Hero from "./Hero";
import Keuntungan from "./Keuntungan";
import Review from "./Review";
import FAQ from "./FAQ";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Keuntungan />
      <Review />
      <FAQ />
    </main>
  );
}
