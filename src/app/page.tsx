import AboutCard from "@/components/AboutCard";
import GiftBar from "@/components/GiftBar";
import GlowGoalCard from "@/components/GlowGoalCard";
import JourneyCard from "@/components/JourneyCard";
import ProfileCard from "@/components/ProfileCard";
import SiteHeader from "@/components/SiteHeader";
import SupportersCard from "@/components/SupportersCard";
import TrustBand from "@/components/TrustBand";

export default function CampaignPage() {
  return (
    <div className="glow-page">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1440px] px-[20px] pb-[32px] pt-[16px] sm:px-[34px]">
        {/* Profile + funding */}
        <div className="grid gap-[12px] xl:grid-cols-[minmax(0,628fr)_minmax(0,520fr)]">
          <ProfileCard />
          <GlowGoalCard />
        </div>

        {/* Trust */}
        <div className="mt-[17px]">
          <TrustBand />
        </div>

        {/* Story columns */}
        <div className="mt-[18px] grid gap-[21px] md:grid-cols-2 xl:grid-cols-[minmax(0,310fr)_minmax(0,399fr)_minmax(0,404fr)]">
          <AboutCard />
          <JourneyCard />
          <div className="flex md:col-span-2 xl:col-span-1">
            <SupportersCard />
          </div>
        </div>

        {/* Gift */}
        <div className="mt-[16px]">
          <GiftBar />
        </div>
      </main>
    </div>
  );
}
