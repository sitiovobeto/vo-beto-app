"use client";

import { useIsMobile } from "@/hooks/useDimension";
import Image from "next/image";

export const Banner = () => {
  const isMobile = useIsMobile();

  return (
    <div className={`${isMobile ? "h-[208px]" : "h-[225px]"} relative`}>
      <Image
        src={`/images/${isMobile ? "banner_mobile" : "banner_desktop"}.svg`}
        alt="Logo"
        fill
      />
    </div>
  );
};
