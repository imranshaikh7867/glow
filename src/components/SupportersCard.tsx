import { ArrowRight, Heart } from "lucide-react";
import { campaign, formatMoney } from "@/data/campaign";

export default function SupportersCard() {
  return (
    <section className="glow-card flex w-full flex-col px-[24px] pb-[26px] pt-[26px] sm:px-[25px]">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-serif text-[25px] leading-[1.2] text-[#1f1811]">Recent Supporters</h2>
        <button
          type="button"
          aria-label="Save this fundraiser"
          className="mt-[4px] shrink-0 text-[#e0c58f] transition-colors hover:text-[#d3a95f]"
        >
          <Heart size={21} strokeWidth={1.7} />
        </button>
      </div>

      <ul className="mt-[23px] flex flex-col gap-[20px]">
        {campaign.supporters.map((supporter) => (
          <li key={supporter.name} className="flex items-center gap-[12px] sm:gap-[18px]">
            <span className="glow-avatar text-[16px] font-medium">{supporter.name.charAt(0)}</span>

            <span className="min-w-0 flex-1 truncate text-[15px] font-semibold text-[#241c15]">{supporter.name}</span>

            <span className="shrink-0 text-[16px] font-semibold text-[#241c15] xl:w-[74px]">
              {formatMoney(supporter.amount)}
            </span>

            <span className="shrink-0 whitespace-nowrap text-right text-[13px] text-[#a8a29a]">{supporter.when}</span>

            <Heart size={20} strokeWidth={1.8} fill="currentColor" className="glow-heart-solid shrink-0" />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="glow-btn-ghost mx-auto mt-[31px] flex h-[44px] w-full max-w-[296px] items-center justify-center gap-[19px] px-[22px] text-[15.5px] font-semibold"
      >
        See all supporters
        <ArrowRight size={19} strokeWidth={1.9} className="text-[#b98a4a]" />
      </button>
    </section>
  );
}
