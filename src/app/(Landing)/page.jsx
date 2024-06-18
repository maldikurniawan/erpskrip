import Header from "@/components/layouts/Header";
import Hero from "./Hero";
import Fitur from "./Fitur";
import Keuntungan from "./Keuntungan";
import Peta from "./Peta";
import Review from "./Review";
import FAQ from "./FAQ";
import Banner from "./Banner";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Fitur />
      <Keuntungan />
      <Peta />
      <Review />
      <FAQ />
      <Banner />
    </main>
  );
}
