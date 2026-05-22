import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  iconSize?: number;
}

export default function Logo({
  className = "",
  showText = true,
  textColor = "text-brand-charcoal",
  iconSize = 48,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Hand-crafted high-performance SVG representation of the heart-dog-cat brand logo */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand-green transition-transform duration-500 hover:scale-105"
      >
        {/* Heart background outline */}
        <path
          d="M260 410C110 320 20 200 65 95C110 -10 240 60 260 120C280 60 410 -10 455 95C500 200 410 320 260 410Z"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-35"
        />
        
        {/* Intricate Dog Silhouette (facing left) */}
        <path
          d="M170 360 C170 320, 150 250, 160 200 C165 175, 155 160, 140 160 C125 160, 120 170, 115 160 C110 150, 125 125, 145 120 C165 115, 190 120, 205 140 C220 160, 230 180, 230 215 C230 250, 220 300, 220 360"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Intricate Cat Silhouette (facing right, intersecting gracefully) */}
        <path
          d="M330 360 C330 320, 350 250, 340 200 C335 175, 345 160, 360 160 C375 160, 380 170, 385 160 C390 150, 375 125, 355 120 C335 115, 310 120, 295 140 C280 160, 270 180, 270 215 C270 250, 280 300, 280 360"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Dog Eye & Cat Eye details */}
        <circle cx="160" cy="145" r="8" fill="currentColor" />
        <circle cx="340" cy="145" r="8" fill="currentColor" />
        
        {/* Heart Center connection dot */}
        <circle cx="250" cy="220" r="12" fill="currentColor" className="text-brand-orange animate-pulse" />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-heading text-xl font-black tracking-tight ${textColor}`}>
            PET <span className="text-brand-green">POINT</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.25em] text-[#8C8A7F] uppercase">
            Amman • Premium
          </span>
        </div>
      )}
    </div>
  );
}
