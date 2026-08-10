/** Four-point ember star used throughout the Glow brand. */
export default function Sparkle({
  size = 16,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M12 0.6c.35 4.7 1.6 7.6 3.5 9.1 1.35 1.05 3.9 1.8 7.9 2.3-4 .5-6.55 1.25-7.9 2.3-1.9 1.5-3.15 4.4-3.5 9.1-.35-4.7-1.6-7.6-3.5-9.1-1.35-1.05-3.9-1.8-7.9-2.3 4-.5 6.55-1.25 7.9-2.3C10.4 8.2 11.65 5.3 12 .6Z" />
    </svg>
  );
}
