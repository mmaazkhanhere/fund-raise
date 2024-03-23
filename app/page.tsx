import Hero from "@/components/hero";
import Navbar from "@/components/layout/navbar";
import QuoteSection from "@/components/quote-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuoteSection />
    </main>
  );
}
