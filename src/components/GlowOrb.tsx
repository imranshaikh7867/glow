/**
 * The Glow Orb — Glow's signature element.
 *
 * It is built from stacked layers of light rather than a flat coloured circle:
 *   bloom    → far light spilling onto the surface behind it
 *   corona   → tight halo hugging the sphere, fades to fully transparent
 *   sphere   → dimensional body, lit from the upper-left
 *   speckles → ember dust suspended inside
 *   rim      → luminous edge
 *   flares   → bright bursts on the rim
 *
 * Every outer layer ends on a fully transparent colour stop, so the glow
 * never terminates on a hard edge.
 */
export default function GlowOrb({
  percent,
  caption = "of goal",
  size = 120,
  className = "",
}: {
  percent: number;
  caption?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`glow-orb ${className}`}
      style={{ "--orb-size": `${size}px` } as React.CSSProperties}
      role="img"
      aria-label={`${percent}% of goal reached`}
    >
      <span className="glow-orb__bloom" aria-hidden />
      <span className="glow-orb__corona" aria-hidden />
      <span className="glow-orb__sphere" aria-hidden />
      <span className="glow-orb__speckles" aria-hidden />
      <span className="glow-orb__edge" aria-hidden />
      <span className="glow-orb__ring-soft" aria-hidden />
      <span className="glow-orb__rim" aria-hidden />
      <span className="glow-orb__flare" aria-hidden />
      <span className="glow-orb__flare--top" aria-hidden />

      <div className="glow-orb__content">
        <span
          className="font-serif text-[#fffaf0] tracking-[-0.01em]"
          style={{
            fontSize: size * 0.285,
            textShadow: "0 1px 10px rgba(180,104,26,0.45), 0 0 22px rgba(255,236,200,0.5)",
          }}
        >
          {percent}%
        </span>
        <span
          className="mt-[6px] text-[#fff6e6]"
          style={{
            fontSize: size * 0.108,
            textShadow: "0 1px 6px rgba(180,104,26,0.4)",
          }}
        >
          {caption}
        </span>
      </div>
    </div>
  );
}
