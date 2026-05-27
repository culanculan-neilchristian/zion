"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

export function Hero() {
  const terminalSteps = [
    { num: "01", label: "Discover & Define", status: "done", icon: "✓" },
    { num: "02", label: "Architect & Blueprint", status: "done", icon: "✓" },
    { num: "03", label: "Build & Iterate", status: "active", icon: "▶" },
    { num: "04", label: "Test & Refine", status: "queued", icon: "—" },
    { num: "05", label: "Launch & Sustain", status: "queued", icon: "—" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-[calc(var(--nav-height)+3rem)] px-6 md:px-12 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-radial-[circle,rgba(205,162,70,0.07)_0%,transparent_70%] blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-radial-[circle,rgba(205,162,70,0.04)_0%,transparent_70%] blur-[100px]" />
        
        {/* Spiral Animation Background */}
        <div className="absolute inset-0 opacity-[0.4] mix-blend-screen">
          <SpiralAnimation />
        </div>
        
        <div className="hero-grid absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gold/12 border border-solid border-gold/18 rounded-full text-[0.7rem] font-semibold text-gold-light tracking-[0.12em] uppercase mb-8">
            <span className="w-[7px] h-[7px] bg-gold rounded-full animate-blink" />
            Kingdom-Driven Technology
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.08] text-white mb-7">
            Building <em className="italic text-gold">Frameworks</em> for a Higher Purpose.
          </h1>
          <p className="text-[1.05rem] leading-[1.75] text-gray-400 font-light max-w-[500px] mb-10">
            IT development and servicing for organizations building awesome things for the Kingdom. Our production-grade systems and processes ensure your technology serves the mission it was made for.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#zpl" className="no-underline">
              <Button variant="gold" className="group">
                Explore Our Process
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#contact" className="no-underline">
              <Button variant="ghost">Start a Conversation</Button>
            </a>
          </div>

          <div className="mt-14 pt-8 border-t border-solid border-gray-800">
            <div className="text-[0.68rem] font-medium text-gray-600 tracking-[0.14em] uppercase mb-4">
              Trusted by Kingdom organizations
            </div>
            <div className="flex flex-wrap gap-10 items-center">
              {["Jesus.Net Philippines", "Turn Vertical", "HopeBegins", "eSTAR Foundation", "Glassbox PH"].map((logo) => (
                <span key={logo} className="font-display text-[1.05rem] font-medium text-gray-600 tracking-tight hover:text-gray-400 transition-colors">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="lg:block"
        >
          <div className="bg-gray-900 border border-solid border-gray-750 rounded-2xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="flex items-center gap-[7px] px-[18px] py-[14px] bg-gray-850 border-b border-solid border-gray-750">
              <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
              <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
              <div className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
              <span className="ml-auto font-mono text-[0.65rem] text-gray-600 tracking-wider">zion-production-line.sys</span>
            </div>
            <div className="p-6">
              {terminalSteps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <div className="flex items-center gap-3.5 p-3 rounded-lg border border-solid border-transparent transition-all hover:bg-gold/5 hover:border-gold/10 group">
                    <div className="w-[26px] h-[26px] shrink-0 bg-gold text-gray-950 rounded-md flex items-center justify-center font-mono text-[0.7rem] font-bold">
                      {step.num}
                    </div>
                    <span className="text-[0.82rem] text-gray-300 font-medium flex-1">{step.label}</span>
                    <span className={cn(
                      "font-mono text-[0.65rem] px-2 py-1 rounded",
                      step.status === "done" ? "text-[#34D399] bg-[#34D399]/10" :
                      step.status === "active" ? "text-gold-light bg-gold/12" :
                      "text-gray-600 bg-gray-600/10"
                    )}>
                      {step.icon} {step.status}
                    </span>
                  </div>
                  {idx < terminalSteps.length - 1 && (
                    <div className="w-[1.5px] h-2.5 bg-gray-750 ml-3.5 rounded-sm" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
