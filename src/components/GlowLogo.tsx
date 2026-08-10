import Link from "next/link";

/**
 * The wordmark star: a four-point ember star whose lower ray elongates down to
 * meet the top-right tip of the "w", exactly as in the brand lockup.
 */
function WordmarkStar() {
  return (
    <svg
      width={13}
      height={36}
      viewBox="0 0 12 36"
      fill="currentColor"
      className="absolute -right-[10px] top-[2px] text-[#cda06a]"
      style={{ filter: "drop-shadow(0 0 6px rgba(226,178,112,0.75))" }}
      aria-hidden
    >
      <path d="M6 0c.42 5.6 1 8.1 6 9-5 .9-5.58 3.4-6 27-.42-23.6-1-26.1-6-27 5-.9 5.58-3.4 6-9Z" />
    </svg>
  );
}

export default function GlowLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-block shrink-0 ${className}`} aria-label="Glow — gift a little glow">
      {/* inline-block so the box hugs "Glow" — the tagline below is wider, and
          the star is positioned against the wordmark, not the lockup. */}
      <span className="relative inline-block">
        <span className="glow-wordmark font-display block text-[50px] font-medium leading-[0.9] tracking-[0.005em] sm:text-[59px]">
          Glow
        </span>
        <WordmarkStar />
      </span>
      <span className="mt-[6px] block text-[9px] font-semibold tracking-[0.235em] text-[#7d746c] sm:text-[10px]">
        GIFT A LITTLE GLOW
      </span>
    </Link>
  );
}
