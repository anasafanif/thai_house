"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ShimmerButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const shimmerBg =
  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)";

const ShimmerButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, ShimmerButtonProps>(
  function ShimmerButton(
    { href, children, className = "", onClick, type = "button", disabled = false },
    ref
  ) {
    const base =
      "inline-block px-8 py-3.5 font-medium bg-gold text-charcoal rounded-md hover:bg-gold-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:scale-[0.98] hover:shadow-softGoldHover relative overflow-hidden";
    const content = (
      <span className="relative z-10">{children}</span>
    );
    const shimmerLayer = (
      <span
        className="absolute inset-0 z-0 bg-no-repeat opacity-60 bg-[length:200%_100%] animate-shimmer"
        style={{ backgroundImage: shimmerBg }}
        aria-hidden
      />
    );

    if (href) {
      return (
        <Link href={href} className={`${base} ${className}`} ref={ref as React.Ref<HTMLAnchorElement>}>
          <motion.span
            className="block relative"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {shimmerLayer}
            {content}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${base} ${className}`}
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {shimmerLayer}
        {content}
      </motion.button>
    );
  }
);

export default ShimmerButton;
