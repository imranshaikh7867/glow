import { Heart, Info } from "lucide-react";
import GlowMeter from "./GlowMeter";
import GlowOrb from "./GlowOrb";
import { campaign, formatMoney, percentFunded, remaining } from "@/data/campaign";

export default function GlowGoalCard() {
  return (
    <section
      id="glow-goal"
      className="glow-card glow-card--warm flex flex-col px-[24px] pb-[28px] pt-[32px] sm:px-[32px] sm:pb-[31px] sm:pt-[43px]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-[10px]">
            <h2 className="text-[13.5px] font-bold leading-none tracking-[0.145em] text-[#4a423a]">GLOW GOAL</h2>
            <span
              className="text-[#a99b88]"
              title={`${formatMoney(remaining)} still needed to reach the Glow Goal`}
            >
              <Info size={15} strokeWidth={1.8} />
            </span>
          </div>

          <p className="mt-[19px] font-serif text-[44px] leading-[0.98] tracking-[-0.01em] text-[#1f1811] sm:text-[54px]">
            {formatMoney(campaign.raised)}
          </p>

          <p className="mt-[17px] text-[20px] text-[#5f584f] sm:text-[23px]">
            of {formatMoney(campaign.goal)} goal
          </p>
        </div>

        {/* The orb sets its own `display`, so visibility is toggled on a wrapper. */}
        <div className="hidden shrink-0 sm:mr-[34px] sm:block">
          <GlowOrb percent={percentFunded} size={143} className="mt-[21px]" />
        </div>
      </div>

      {/* Mobile orb — centred beneath the figures */}
      <div className="mt-[30px] flex justify-center sm:hidden">
        <GlowOrb percent={percentFunded} size={146} />
      </div>

      <GlowMeter
        percent={percentFunded}
        height={33}
        label={`${formatMoney(campaign.raised)} raised of ${formatMoney(campaign.goal)} goal`}
        className="mt-[34px] sm:mt-[50px]"
      />

      <div className="mt-[30px] flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:mt-[43px]">
        <p className="flex items-center gap-[11px] text-[15px] text-[#3a342d]">
          <Heart size={19} strokeWidth={1.8} className="text-[#dcb87f]" />
          Raised by {campaign.supporterCount} kind hearts
        </p>
        <p className="text-[15px] text-[#3a342d]">{campaign.daysLeft} days to go</p>
      </div>
    </section>
  );
}
