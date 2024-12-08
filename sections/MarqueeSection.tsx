"use client";

import SkillsBadge from "@/components/SkillsBadge";
import Marquee from "react-fast-marquee";

function MarqueeSection({}) {
  return (
    <div className="flex flex-col mt-[-160px]">
      <div className="block dark:hidden">
        <Marquee
          speed={15}
          gradient
          gradientColor="#f3f3e3"
          gradientWidth={50}
          autoFill
        >
          <SkillsBadge />
        </Marquee>
        <Marquee
          speed={15}
          gradient
          gradientColor="#f3f3e3"
          gradientWidth={50}
          autoFill
          direction="right"
        >
          <SkillsBadge />
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;
