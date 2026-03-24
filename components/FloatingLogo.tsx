"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function FloatingLogoInner() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      <Image
        src="/logo.png"
        alt="Thai House Massage et Spa"
        width={120}
        height={120}
        className="h-24 w-24 md:h-32 md:w-32 object-contain"
        priority
      />
    </motion.div>
  );
}

export const FloatingLogo = memo(FloatingLogoInner);
