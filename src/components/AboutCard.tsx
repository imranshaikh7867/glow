import { Heart } from "lucide-react";
import { campaign } from "@/data/campaign";

export default function AboutCard() {
  return (
    <section className="glow-card flex flex-col px-[26px] pb-[22px] pt-[24px] sm:px-[31px]">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-serif text-[25px] leading-[1.2] text-[#1f1811]">About {campaign.name}</h2>
        <button
          type="button"
          aria-label={`Save ${campaign.name}'s fundraiser`}
          className="mt-[4px] shrink-0 text-[#e0c58f] transition-colors hover:text-[#d3a95f]"
        >
          <Heart size={21} strokeWidth={1.7} />
        </button>
      </div>

      <div className="mt-[19px] space-y-[12px] text-[14.5px] leading-[1.62] text-[#67605a] xl:max-w-[244px]">
        {campaign.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          {campaign.aboutClosing}
          <Heart size={16} strokeWidth={1.9} className="glow-heart-solid ml-[8px] inline-block align-[-2px]" />
        </p>
      </div>

      <button
        type="button"
        className="glow-btn-ghost mt-[26px] flex h-[40px] w-fit items-center gap-[11px] px-[22px] text-[15px] font-medium"
      >
        <Heart size={18} strokeWidth={1.8} className="text-[#dcb87f]" />
        Follow {campaign.name}
      </button>
    </section>
  );
}
