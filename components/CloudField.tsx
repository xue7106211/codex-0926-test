"use client";

import { useMemo, type CSSProperties } from "react";

type CloudConfig = {
  id: number;
  top: number;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
  variant: "soft" | "haze";
};

type CSSVarStyle = CSSProperties & {
  "--cloud-duration"?: string;
  "--cloud-scale"?: string;
};

const CLOUD_COUNT = 14;

function createClouds(): CloudConfig[] {
  return Array.from({ length: CLOUD_COUNT }, (_, index) => {
    const variant = Math.random() > 0.75 ? "haze" : "soft";
    return {
      id: index,
      top: Math.random() * 90,
      scale: 0.6 + Math.random() * 0.9,
      duration: 38 + Math.random() * 26,
      delay: Math.random() * -40,
      opacity: variant === "haze" ? 0.25 + Math.random() * 0.2 : 0.45 + Math.random() * 0.35,
      variant,
    };
  });
}

export function CloudField() {
  const clouds = useMemo(createClouds, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-indigo-900/40" />
      {clouds.map((cloud) => {
        const style: CSSVarStyle = {
          top: `${cloud.top}%`,
          opacity: cloud.opacity,
          "--cloud-duration": `${cloud.duration}s`,
          "--cloud-scale": `${cloud.scale}`,
          animationDelay: `${cloud.delay}s`,
        };

        return (
          <div
            key={cloud.id}
            style={style}
            data-variant={cloud.variant}
            className="cloud animate-drift"
          >
            <div className="cloud-shape animate-float" />
          </div>
        );
      })}
    </div>
  );
}

export default CloudField;
