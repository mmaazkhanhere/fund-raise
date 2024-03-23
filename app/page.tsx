import CampaignCategories from "@/components/homepage/campaign-categories";
import CampaigningNow from "@/components/homepage/campaigning-now";
import Hero from "@/components/homepage/hero";
import ImpactStories from "@/components/homepage/impact-stories";
import QuoteSection from "@/components/homepage/quote-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection />
      <CampaigningNow />
      <CampaignCategories />
      <ImpactStories />
    </main>
  );
}
