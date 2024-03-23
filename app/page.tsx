import FeatureCampaigns from "@/components/homepage/feature-campaigns";
import Hero from "@/components/homepage/hero";
import QuoteSection from "@/components/homepage/quote-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection />
      <FeatureCampaigns />
    </main>
  );
}
