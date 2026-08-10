/**
 * The Glow progress meter — a glass capsule filled with molten ember light.
 *
 * Layers: ambient spill → track → fill (gold ▸ ember ▸ gold) → glitter dust
 *         → centre streak → bright cap at the fill edge.
 */
export default function GlowMeter({
  percent,
  height = 28,
  label,
  className = "",
}: {
  percent: number;
  height?: number;
  label?: string;
  className?: string;
}) {
  const value = Math.min(Math.max(percent, 0), 100);

  return (
    <div className={`relative ${className}`}>
      <span className="glow-meter__spill" aria-hidden />
      <div
        className="glow-meter"
        style={
          {
            "--meter-h": `${height}px`,
            "--meter-value": `${value}%`,
          } as React.CSSProperties
        }
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `${value}% of goal reached`}
      >
        <div className="glow-meter__fill">
          <span className="glow-meter__rays" aria-hidden />
          <span className="glow-meter__dust" aria-hidden />
          <span className="glow-meter__dust--fine" aria-hidden />
          <span className="glow-meter__streak" aria-hidden />
        </div>
        <span className="glow-meter__cap" aria-hidden />
      </div>
    </div>
  );
}
