"use client";

import React from "react";

interface LogoProps {
  orientation?: "horizontal" | "vertical"; // Maintained for backward compatibility
  className?: string;
  lightMode?: boolean;
}

export default function Logo({ className = "", lightMode = false }: LogoProps) {
  // Exact color values extracted from the high-res logo image
  const tealColor = lightMode ? "#FFFFFF" : "#1D3F3B"; // White or Dark Forest Teal
  const terracottaColor = lightMode ? "#C8A45D" : "#A9725C"; // Gold or Terracotta

  // MODULARS letters (rendered in Terracotta, height = 50)
  const modularsLetters = [
    { name: "M", path: "M 0 50 v -50 h 12 l 14 22 l 14 -22 h 12 v 50 h -12 v -30 l -14 22 l -14 -22 v 30 z", w: 52 },
    { name: "O", custom: true, w: 52 },
    { name: "D", path: "M 0 0 h 22 c 16 0 26 10 26 25 s -10 25 -26 25 h -22 z", w: 48 },
    { name: "U", path: "M 0 0 h 13 v 28 c 0 5 4 9 7 9 s 7 -4 7 -9 v -28 h 13 v 28 c 0 12 -9 22 -20 22 s -20 -10 -20 -22 z", w: 40 },
    { name: "L", path: "M 0 0 h 13 v 37 h 24 v 13 h -37 z", w: 37 },
    { name: "A", custom: true, w: 48 },
    { name: "R", path: "M 0 50 v -50 h 24 c 14 0 22 7 22 17 c 0 8 -5 13 -12 15 l 14 18 h -15 l -11 -15 h -9 v 15 z", w: 48 },
    { name: "S", path: "M 35 12 c 0 -7 -6 -12 -15 -12 s -15 5 -15 12 c 0 5 3 8 9 10 l 12 3 c 8 2 14 6 14 13 c 0 8 -7 12 -20 12 s -20 -4 -20 -12 h 12 c 0 4 3 6 8 6 s 8 -2 8 -6 c 0 -3 -3 -5 -9 -6 l -12 -3 c -8 -2 -13 -6 -13 -12 c 0 -5 5 -9 12 -9 s 12 2 12 5 z", w: 40 }
  ];

  // INDUS letters (rendered in Forest Teal, height = 30)
  const indusLetters = [
    { name: "I", path: "M 0 0 h 8 v 30 h -8 z", w: 8 },
    { name: "N", path: "M 0 30 v -30 h 8 l 14 18 v -18 h 8 v 30 h -8 l -14 -18 v 18 z", w: 30 },
    { name: "D", path: "M 0 0 h 14 c 10 0 16 6 16 15 s -6 15 -16 15 h -14 z", w: 30 },
    { name: "U", path: "M 0 0 h 8 v 17 c 0 3 2 5 5 5 s 5 -2 5 -5 v -17 h 8 v 17 c 0 7 -6 13 -13 13 s -13 -6 -13 -13 z", w: 26 },
    { name: "S", path: "M 3 22 h 8 c 0 1 1 2 3 2 s 3 -1 3 -2 c 0 -1 -2 -2 -5 -3 l -3 -1 c -4 -1 -7 -3 -7 -6 c 0 -5 4 -8 9 -8 s 9 3 9 6 h -7 c 0 -1 -1 -2 -3 -2 s -3 1 -3 2 c 0 1 1 2 5 3 l 5 1 c 6 1 9 3 9 7 c 0 5 -5 8 -11 8 s -11 -3 -11 -8 z", w: 24 }
  ];

  // Spacing gaps between characters
  const gap = 12;

  // Calculate INDUS letter X coordinates
  let currentIndusX = 15;
  const indusPlacements = indusLetters.map((item) => {
    const x = currentIndusX;
    currentIndusX += item.w + gap;
    return { ...item, x };
  });

  // Calculate MODULARS letter X coordinates
  let currentModularsX = 15;
  const modularsPlacements = modularsLetters.map((item) => {
    const x = currentModularsX;
    currentModularsX += item.w + gap;
    return { ...item, x };
  });

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="15 25 470 425"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* =========================================================
            PART 1: HOUSE GRAPHIC MARK (Shifted up to prevent overlap)
           ========================================================= */}
        <g transform="translate(0, -20)">
          {/* House Outline (Dark Forest Teal) */}
          <path
            d="M 130 272 L 130 130 L 250 50 L 370 130 L 370 272 L 272 272"
            stroke={tealColor}
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left bottom floor segment */}
          <path
            d="M 130 272 L 228 272"
            stroke={tealColor}
            strokeWidth="24"
            strokeLinecap="round"
          />

          {/* Hanging Lamp (Center Top) */}
          <line x1="250" y1="75" x2="250" y2="150" stroke={tealColor} strokeWidth="5.5" />
          {/* Lampshade */}
          <path
            d="M 226 158 C 226 138, 274 138, 274 158 Z"
            fill={tealColor}
          />
          {/* Glowing Bulb */}
          <circle cx="250" cy="162" r="4.5" fill="#FFEAA7" />
          
          {/* Light cone beam */}
          <polygon
            points="244,166 200,260 300,260 256,166"
            fill="url(#glow-gradient-vertical-logo)"
            opacity="0.3"
          />

          {/* Tripod Floor Lamp (Left) */}
          <path d="M 160 178 C 160 162, 188 162, 188 178 Z" fill={terracottaColor} />
          <line x1="174" y1="178" x2="152" y2="272" stroke={tealColor} strokeWidth="3.5" />
          <line x1="174" y1="178" x2="174" y2="272" stroke={tealColor} strokeWidth="3.5" />
          <line x1="174" y1="178" x2="196" y2="272" stroke={tealColor} strokeWidth="3.5" />

          {/* Potted Plant (Left Center) */}
          <path d="M 207 236 L 219 236 L 216 272 L 210 272 Z" fill={terracottaColor} />
          <path d="M 213 236 L 213 214" stroke={tealColor} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 213 236 C 208 226, 204 224, 205 218" stroke={tealColor} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 213 236 C 218 226, 222 224, 221 218" stroke={tealColor} strokeWidth="3.5" strokeLinecap="round" />

          {/* Cross-Leg Table (Center Floor Gap) */}
          <rect x="220" y="222" width="60" height="8" rx="4" fill={tealColor} />
          <line x1="230" y1="230" x2="270" y2="284" stroke={tealColor} strokeWidth="6" strokeLinecap="round" />
          <line x1="270" y1="230" x2="230" y2="284" stroke={tealColor} strokeWidth="6" strokeLinecap="round" />

          {/* Armchair (Right) */}
          <path d="M 314 238 C 304 220, 344 220, 334 238 C 334 248, 314 248, 314 238 Z" fill={terracottaColor} />
          <path d="M 308 244 C 308 240, 340 240, 340 244 L 340 256 C 340 262, 308 262, 308 256 Z" fill={tealColor} />
          <line x1="316" y1="258" x2="311" y2="272" stroke={tealColor} strokeWidth="3.5" />
          <line x1="332" y1="258" x2="337" y2="272" stroke={tealColor} strokeWidth="3.5" />
        </g>

        {/* =========================================================
            PART 2: TYPOGRAPHY
           ========================================================= */}
        {/* INDUS */}
        <g transform="translate(0, 282)">
          {indusPlacements.map((item, idx) => (
            <path key={idx} d={item.path} fill={tealColor} transform={`translate(${item.x}, 0)`} />
          ))}
        </g>

        {/* MODULARS */}
        <g transform="translate(0, 326)">
          {modularsPlacements.map((item, idx) => {
            if (item.custom && item.name === "O") {
              // Return O Circle Badge
              return (
                <g key={idx} transform={`translate(${item.x}, 0)`}>
                  <circle cx="26" cy="26" r="26" fill={terracottaColor} />
                  <rect x="13" y="26" width="26" height="17" fill="white" />
                  <polygon points="26,8 4,26 48,26" fill={tealColor} />
                  <polyline points="6,26 26,10 46,26" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="19" y="30" width="6" height="5" fill={terracottaColor} />
                  <rect x="27" y="30" width="6" height="5" fill={terracottaColor} />
                  <rect x="19" y="37" width="6" height="5" fill={terracottaColor} />
                  <rect x="27" y="37" width="6" height="5" fill={terracottaColor} />
                </g>
              );
            }
            if (item.custom && item.name === "A") {
              // Return custom A with hanging lamp
              return (
                <g key={idx} transform={`translate(${item.x}, 0)`}>
                  {/* A outline */}
                  <path d="M 0 50 L 18 0 h 12 l 18 50 h -13 L 30 35 h -12 L 5 50 z M 14 25 h 20 L 24 11 z" fill={terracottaColor} />
                  {/* Hanging lamp */}
                  <line x1="24" y1="12" x2="24" y2="30" stroke={tealColor} strokeWidth="2.5" />
                  <path d="M 19 30 C 19 25, 29 25, 29 30 Z" fill={tealColor} />
                  <circle cx="24" cy="32" r="1.5" fill="#FFEAA7" />
                  {/* Light Rays */}
                  <line x1="24" y1="35" x2="24" y2="40" stroke={tealColor} strokeWidth="1.2" />
                  <line x1="21" y1="34" x2="18" y2="38" stroke={tealColor} strokeWidth="1.2" />
                  <line x1="27" y1="34" x2="30" y2="38" stroke={tealColor} strokeWidth="1.2" />
                  <line x1="22" y1="35" x2="20" y2="39" stroke={tealColor} strokeWidth="1.2" />
                  <line x1="26" y1="35" x2="28" y2="39" stroke={tealColor} strokeWidth="1.2" />
                </g>
              );
            }
            // Normal letter path
            return (
              <path key={idx} d={item.path} fill={terracottaColor} transform={`translate(${item.x}, 0)`} />
            );
          })}
        </g>

        {/* TAGLINE */}
        <text
          x="250"
          y="426"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="21"
          letterSpacing="0.08em"
          fill={tealColor}
        >
          SMART MODULAR, SEAMLESS SPACES.
        </text>

        {/* Gradient */}
        <defs>
          <linearGradient id="glow-gradient-vertical-logo" x1="250" y1="166" x2="250" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C8A45D" stopOpacity="0.0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
