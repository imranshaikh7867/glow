import { ChevronRight, Lock } from "lucide-react";
import Sparkle from "./icons/Sparkle";
import { campaign } from "@/data/campaign";

export default function TrustBand() {
  return (
    <section className="glow-band flex flex-col gap-[24px] px-[24px] py-[22px] sm:px-[34px] xl:flex-row xl:items-stretch xl:gap-0 xl:py-[16px]">
      {/* Verified fundraiser */}
      <div className="flex items-center gap-[24px] xl:flex-[678] xl:pr-[30px]">
        <span className="glow-sparkle-emblem shrink-0">
          <Sparkle size={31} className="relative" style={{ filter: "drop-shadow(0 0 7px rgba(240,190,126,0.8))" }} />
          <Sparkle
            size={13}
            className="absolute right-[10px] top-[12px]"
            style={{ filter: "drop-shadow(0 0 6px rgba(240,190,126,0.8))" }}
          />
          <Sparkle
            size={9}
            className="absolute bottom-[14px] right-[16px]"
            style={{ filter: "drop-shadow(0 0 5px rgba(240,190,126,0.8))" }}
          />
        </span>

        <div className="min-w-0">
          <h3 className="text-[13px] font-bold leading-none tracking-[0.135em] text-[#2f2822]">VERIFIED FUNDRAISER</h3>
          <p className="mt-[11px] text-[15.5px] leading-[1.45] text-[#5d564f]">
            {campaign.name}&rsquo;s procedure, quote and clinic have been verified by Glow.{" "}
            <a href="#" className="glow-link ml-[7px] inline-flex items-center gap-[6px] whitespace-nowrap font-medium">
              Learn more
              <ChevronRight size={16} strokeWidth={2} />
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden w-px shrink-0 self-center bg-[#eadfcd] xl:block xl:h-[57px]" aria-hidden />
      <div className="h-px w-full bg-[#eee5d6] xl:hidden" aria-hidden />

      {/* Privacy */}
      <div className="flex items-center gap-[24px] xl:flex-[471] xl:pl-[36px]">
        <span className="glow-lock-emblem shrink-0">
          <Lock size={23} strokeWidth={1.7} />
        </span>

        <div className="min-w-0">
          <h3 className="text-[13px] font-bold leading-none tracking-[0.135em] text-[#2f2822]">PRIVACY ON HER TERMS</h3>
          <p className="mt-[11px] max-w-[402px] text-[15.5px] leading-[1.45] text-[#5d564f]">
            {campaign.name} has chosen to share her story and progress publicly.{" "}
            <a href="#" className="glow-link font-medium">
              Learn about privacy on Glow.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
