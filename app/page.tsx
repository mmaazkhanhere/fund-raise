import CampaignCategories from "@/components/homepage/campaign-categories";
import CampaigningNow from "@/components/homepage/campaigning-now";
import Hero from "@/components/homepage/hero";
import ImpactStories from "@/components/homepage/impact-stories";
import QuoteSection from "@/components/quote-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection
        quote={`The Earth is what we all have in common. It's our only home. And unless we protect it, we will not survive.`}
      />
      <CampaigningNow />
      <CampaignCategories />
      <ImpactStories />
    </main>
  );
}
