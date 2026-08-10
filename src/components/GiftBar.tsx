"use client";

import { useState } from "react";
import { Heart, Lock } from "lucide-react";
import { campaign, formatMoney } from "@/data/campaign";

export default function GiftBar() {
  const [selected, setSelected] = useState<number | "other">(campaign.defaultGiftAmount);

  return (
    <section
      id="gift"
      className="glow-band flex flex-col gap-[28px] px-[24px] py-[26px] sm:px-[36px] xl:flex-row xl:items-center xl:gap-[22px] xl:py-[24px]"
    >
      {/* Signature lockup */}
      <div className="shrink-0 xl:w-[292px] xl:pl-[8px]">
        <p className="flex items-end gap-[10px]">
          <span className="glow-script font-script whitespace-nowrap text-[42px] leading-[1.05] sm:text-[43px]">
            Gift a little glow
          </span>
          <Heart size={20} strokeWidth={1.9} fill="currentColor" className="glow-heart-solid mb-[10px]" />
        </p>
        <p className="mt-[4px] text-[11px] font-semibold tracking-[0.215em] text-[#9c9289]">
          EVERY GIFT BRINGS HER CLOSER
        </p>
      </div>

      {/* Supporting copy */}
      <p className="text-[14.5px] leading-[1.5] text-[#5d564f] xl:min-w-[188px] xl:max-w-[266px] xl:flex-[0_1_266px]">
        Your support can help {campaign.name} take her next step towards confidence and a future she deserves.
      </p>

      {/* Amount chooser */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-[12px]">
          {campaign.giftAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setSelected(amount)}
              data-selected={selected === amount}
              aria-pressed={selected === amount}
              className="glow-chip h-[53px] min-w-[91px] shrink-0 px-[18px] text-[17px] font-medium"
            >
              {formatMoney(amount)}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelected("other")}
            data-selected={selected === "other"}
            aria-pressed={selected === "other"}
            className="glow-chip h-[53px] min-w-[91px] shrink-0 px-[18px] text-[17px] font-medium"
          >
            Other
          </button>
        </div>

        <p className="mt-[16px] flex items-start gap-[10px] text-[14px] text-[#6f6862] xl:items-center">
          <Lock size={15} strokeWidth={1.9} className="mt-[3px] shrink-0 text-[#8a8079] xl:mt-0" />
          100% secure. You can choose to remain anonymous.
        </p>
      </div>

      {/* Primary action */}
      <button
        type="button"
        className="glow-btn-ember ember-rim flex h-[62px] w-full shrink-0 items-center justify-center gap-[16px] px-[30px] text-[19px] font-semibold xl:w-[271px]"
      >
        Gift a Little Glow
        <Heart size={22} strokeWidth={1.9} />
      </button>
    </section>
  );
}
