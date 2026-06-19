"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "ZPL", href: "#zpl" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-out-expo border-b border-solid",
          isScrolled
            ? "bg-gray-950/92 backdrop-blur-2xl border-gold/12 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-gray-950/60 backdrop-blur-2xl border-gold/6"
        )}
      >
        <a href="#hero" className="flex items-center gap-3.5 group no-underline">
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="w-10 h-10 shrink-0 object-contain"
          />
          <div className="flex flex-col leading-none">
            <div className="font-display text-[1.25rem] font-bold text-white tracking-tight">
              Zion <span className="text-gold">Systems & Build</span>
            </div>
            <div className="text-[0.6rem] font-normal text-gray-500 tracking-[0.18em] uppercase mt-0.5">
              Frameworks for a Higher Purpose
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={cn(
                "relative px-4.5 py-2 text-[0.78rem] font-medium tracking-[0.1em] uppercase transition-colors no-underline",
                activeLink === link.name ? "text-gold" : "text-gray-400 hover:text-gray-100",
                "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1.5px] after:bg-gold after:transition-[width] after:duration-300 after:ease-out-expo",
                activeLink === link.name ? "after:w-[18px]" : "after:w-0"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5.5 py-2.5 font-body text-[0.78rem] font-semibold text-gray-950 bg-gold rounded-md tracking-[0.06em] uppercase transition-all duration-300 ease-out-expo hover:bg-gold-light hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(205,162,70,0.3)] no-underline"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center bg-none border-none text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-[72px] left-0 right-0 bottom-0 bg-gray-950/98 backdrop-blur-[30px] z-50 flex flex-col p-8 transition-all duration-400 ease-out-expo md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-[10px]"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => {
              setActiveLink(link.name);
              setIsMenuOpen(false);
            }}
            className={cn(
              "block py-4.5 text-[1.1rem] font-medium border-b border-solid border-gray-800 transition-colors no-underline",
              activeLink === link.name ? "text-gold" : "text-gray-400 hover:text-gold"
            )}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-6 text-center py-4 bg-gold text-gray-950 font-semibold rounded-lg no-underline"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
