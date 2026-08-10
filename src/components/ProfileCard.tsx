import Image from "next/image";
import { Calendar, Check, Heart, MapPin, Sparkles } from "lucide-react";
import { campaign } from "@/data/campaign";

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-[7px]">
        <span className="text-[#8a7a66]">{icon}</span>
        <span className="text-[12.5px] font-bold leading-none text-[#2f2822]">{label}</span>
      </div>
      <p className="mt-[9px] whitespace-nowrap text-[12px] leading-[1.3] text-[#6f6862]">{value}</p>
    </div>
  );
}

export default function ProfileCard() {
  return (
    <section className="glow-card glow-card--plain flex flex-col p-[8px] md:flex-row">
      {/* Portrait */}
      <div className="relative w-full shrink-0 md:w-[300px] xl:w-[48.8%]">
        <div className="glow-photo relative aspect-[366/395] w-full overflow-hidden">
          <Image
            src={campaign.photo}
            alt={`${campaign.name}, ${campaign.age}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 366px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex min-w-0 flex-1 flex-col px-[20px] pb-[24px] pt-[28px] md:pb-[19px] md:pl-[26px] md:pr-[8px] md:pt-[50px]">
        <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[12px] md:ml-[7px]">
          <h1 className="font-serif text-[38px] leading-[1.05] tracking-[-0.005em] text-[#1f1811] md:text-[46px]">
            {campaign.name}, {campaign.age}
          </h1>
          {campaign.verified ? (
            <span className="glow-badge inline-flex items-center gap-[8px] px-[18px] py-[8px] text-[14px] font-semibold leading-none">
              <Check size={15} strokeWidth={2.6} className="text-[#c99a5c]" />
              Verified
            </span>
          ) : null}
        </div>

        <p className="mt-[21px] flex items-center gap-[10px] text-[16px] text-[#4a443e] md:ml-[7px]">
          <MapPin size={17} strokeWidth={1.8} className="shrink-0 text-[#453f39]" />
          {campaign.location}
        </p>

        {/* Quote */}
        <figure className="mt-[28px] flex gap-[16px] md:ml-[7px]">
          <span className="font-serif select-none text-[40px] leading-[0.72] text-[#dcc7a6]" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="font-serif max-w-[282px] text-[18px] italic leading-[1.62] text-[#2b241d] md:text-[20px]">
            {campaign.quote}
            <Heart size={17} strokeWidth={1.9} className="glow-heart-solid ml-[9px] inline-block align-[-2px]" />
          </blockquote>
        </figure>

        {/* Procedure / Clinic / Date */}
        <div className="mt-auto flex flex-wrap gap-x-[20px] gap-y-[18px] pt-[36px] min-[1380px]:flex-nowrap">
          <MetaItem icon={<Sparkles size={14} strokeWidth={1.9} />} label="Procedure" value={campaign.procedure} />
          <MetaItem icon={<MapPin size={14} strokeWidth={1.9} />} label="Clinic" value={campaign.clinic} />
          <MetaItem icon={<Calendar size={14} strokeWidth={1.9} />} label="Date" value={campaign.date} />
        </div>
      </div>
    </section>
  );
}
