"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-solid border-gray-850">
      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="w-7 h-7">
            <rect
              x="1.5"
              y="1.5"
              width="37"
              height="37"
              rx="8"
              className="stroke-gold stroke-[1.5] fill-none"
            />
            <path
              d="M12 28L20 10L28 28"
              className="stroke-gold stroke-[2.2] stroke-round stroke-join fill-none"
            />
            <line
              x1="14.5"
              y1="23"
              x2="25.5"
              y2="23"
              className="stroke-gold stroke-[1.8] stroke-round"
            />
          </svg>
          <div className="font-display text-[0.95rem] font-bold text-gray-400">
            Zion <span className="text-gold-dark">Systems & Build</span>
          </div>
        </div>

        <div className="flex gap-8">
          {["Home", "Services", "ZPL", "Portfolio", "About"].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[0.75rem] font-medium text-gray-500 uppercase tracking-wider hover:text-gold transition-colors no-underline"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="text-[0.72rem] text-gray-600">
          © {new Date().getFullYear()} Zion Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
