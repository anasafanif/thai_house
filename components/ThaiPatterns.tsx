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

/** Repeating Thai/lotus pattern for section backgrounds - use as overlay */
export function ThaiPatternRepeat({
  className = "",
  opacity = "0.06",
  id = "thai-lotus-repeat",
}: {
  className?: string;
  opacity?: string;
  id?: string;
}) {
  const size = 80;
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full text-gold-dark"
        style={{ opacity }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <g transform={`translate(${size / 2}, ${size / 2})`}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <ellipse
                  key={i}
                  cx={14 * Math.cos((i * 60 * Math.PI) / 180)}
                  cy={14 * Math.sin((i * 60 * Math.PI) / 180)}
                  rx="4"
                  ry="8"
                  transform={`rotate(${i * 60} 0 0)`}
                  fill="currentColor"
                />
              ))}
              <circle r="5" fill="currentColor" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

/** Thai-style corner ornament (e.g. for cards or section frames) */
export function CornerOrnament({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const rotations: Record<string, string> = {
    "top-left": "rotate-0",
    "top-right": "scale-x-[-1]",
    "bottom-left": "scale-y-[-1]",
    "bottom-right": "scale-[-1]",
  };
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={`absolute w-12 h-12 text-gold/50 ${rotations[position]} ${className}`}
      aria-hidden
    >
      <path d="M4 4v20h20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4h20v20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12h8M12 4v8" strokeLinecap="round" />
    </svg>
  );
}

/** Subtle diagonal line pattern (Thai temple / fabric style) for backgrounds */
export function ThaiDiagonalPattern({
  className = "",
  opacity = "0.04",
  id = "thai-diagonal",
}: {
  className?: string;
  opacity?: string;
  id?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full text-gold-dark"
        style={{ opacity }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path d="M0 12h24M12 0v24" stroke="currentColor" strokeWidth="0.6" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

/** Decorative Thai border frame - use around panels or images */
export function ThaiBorderFrame({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl pointer-events-none" aria-hidden />
      <div className="absolute top-3 left-3 right-3 bottom-3 border border-gold/20 rounded-xl pointer-events-none" aria-hidden />
      <div className="absolute top-2 left-2">
        <CornerOrnament position="top-left" />
      </div>
      <div className="absolute top-2 right-2">
        <CornerOrnament position="top-right" />
      </div>
      <div className="absolute bottom-2 left-2">
        <CornerOrnament position="bottom-left" />
      </div>
      <div className="absolute bottom-2 right-2">
        <CornerOrnament position="bottom-right" />
      </div>
      {children}
    </div>
  );
}
