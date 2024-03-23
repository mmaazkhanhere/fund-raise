import CampaignCategories from "@/components/homepage/campaign-categories";
import Hero from "@/components/homepage/hero";
import QuoteSection from "@/components/homepage/quote-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection />
      <CampaignCategories />
    </main>
  );
}
