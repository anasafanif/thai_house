"use client";

/**
 * Reusable Thai-inspired decorative SVGs: lotus motif and border/line pattern.
 * Used in Hero, Why Us, and Footer. All inline, no extra requests.
 */

export function LotusMotif({
  className = "",
  opacity = "0.15",
}: {
  className?: string;
  opacity?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="currentColor"
      className={className}
      aria-hidden
      style={{ opacity }}
    >
      {/* Simplified lotus: outer petals ring */}
      <g transform="translate(60,60)">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const a = (i * 45 * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={35 * Math.cos(a)}
              cy={35 * Math.sin(a)}
              rx="12"
              ry="20"
              transform={`rotate(${i * 45} 0 0)`}
            />
          );
        })}
        {/* Inner circle (flower center) */}
        <circle r="14" fill="currentColor" />
      </g>
    </svg>
  );
}

export function LotusMotifSmall({
  className = "",
  opacity = "0.12",
}: {
  className?: string;
  opacity?: string;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="currentColor"
      className={className}
      aria-hidden
      style={{ opacity }}
    >
      <g transform="translate(40,40)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <ellipse
            key={i}
            cx={22 * Math.cos((i * 60 * Math.PI) / 180)}
            cy={22 * Math.sin((i * 60 * Math.PI) / 180)}
            rx="8"
            ry="14"
            transform={`rotate(${i * 60} 0 0)`}
          />
        ))}
        <circle r="10" fill="currentColor" />
      </g>
    </svg>
  );
}

/** Traditional-style line pattern for section dividers or footer top border */
export function ThaiBorderLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      className={className}
      aria-hidden
    >
      {/* Repeating curved motif */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <path
          key={i}
          d={`M${i * 22} 6 Q${i * 22 + 11} 0 ${i * 22 + 22} 6 Q${i * 22 + 11} 12 ${i * 22 + 22} 6`}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/** Small ornament for end of a divider (e.g. lotus bud shape) */
export function DividerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 2C10 4 8 8 8 12s2 8 4 10 4-2 4-6-2-8-4-10zm0 4a4 4 0 110 8 4 4 0 010-8z" />
    </svg>
  );
}
