import { Calendar, Check, Heart } from "lucide-react";
import Sparkle from "./icons/Sparkle";
import { campaign, type JourneyStep } from "@/data/campaign";

function StepIcon({ icon }: { icon: JourneyStep["icon"] }) {
  switch (icon) {
    case "check":
      return <Check size={25} strokeWidth={1.9} />;
    case "heart":
      return <Heart size={24} strokeWidth={1.9} />;
    case "calendar":
      return <Calendar size={23} strokeWidth={1.7} />;
    case "sparkle":
      return <Sparkle size={24} />;
  }
}

export default function JourneyCard() {
  return (
    <section className="glow-card flex flex-col px-[24px] pb-[24px] pt-[21px]">
      <h2 className="font-serif text-[25px] leading-[1.2] text-[#1f1811]">{campaign.name}&rsquo;s Journey</h2>
      <span className="glow-rule mt-[11px] w-[67px]" aria-hidden />

      <ol className="mt-[12px] flex flex-col">
        {campaign.journey.map((step, index) => {
          const isLast = index === campaign.journey.length - 1;

          return (
            <li key={step.title} className="relative flex gap-[16px] pb-[5px] last:pb-0">
              {/* Node + rail */}
              <div className="relative flex shrink-0 flex-col items-center">
                <span className={`glow-node ${step.state === "done" ? "glow-node--done" : "glow-node--todo"}`}>
                  <span className="glow-node__halo" aria-hidden />
                  <span className="glow-node__rim" aria-hidden />
                  <span className="relative">
                    <StepIcon icon={step.icon} />
                  </span>
                </span>
                {!isLast ? (
                  <span className="mt-[7px] w-px flex-1 border-l border-dotted border-[#d5c3a4]" aria-hidden />
                ) : null}
              </div>

              {/* Copy */}
              <div className="flex min-w-0 flex-1 gap-3 pt-[5px]">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold leading-[1.15] text-[#241c15]">{step.title}</h3>
                  <p className="mt-[8px] text-[13.5px] leading-[1.42] text-[#6f6862] xl:max-w-[210px]">
                    {step.body}
                    {/* Atomic from xl up, where the design shows the linked
                        sentence starting on its own line. */}
                    {step.bodyTail ? (
                      <span className="xl:inline-block">
                        {step.bodyTail.lead}
                        <a href={step.bodyTail.link.href} className="glow-link">
                          {step.bodyTail.link.label}
                        </a>
                      </span>
                    ) : null}
                  </p>
                </div>
                <span className="shrink-0 whitespace-nowrap text-[13.5px] text-[#6f6862]">{step.meta}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
