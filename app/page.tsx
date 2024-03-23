import CampaignCategories from "@/components/homepage/campaign-categories";
import CampaigningNow from "@/components/homepage/campaigning-now";
import Hero from "@/components/homepage/hero";
import QuoteSection from "@/components/homepage/quote-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection />
      <CampaigningNow />
      <CampaignCategories />
    </main>
  );
}
