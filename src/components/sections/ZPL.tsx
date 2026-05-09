"use client";

import React from "react";
import { motion } from "framer-motion";

const PHASES = [
  {
    num: "I",
    title: "Discover & Define",
    desc: "Deep-dive into your mission, stakeholders, and goals. We map the full vision before writing a single line of code.",
  },
  {
    num: "II",
    title: "Architect & Blueprint",
    desc: "System design, technology selection, and structural planning with full transparency and client sign-off.",
  },
  {
    num: "III",
    title: "Build & Iterate",
    desc: "Sprint-based development with continuous feedback. You see progress every week, not just at the end.",
  },
  {
    num: "IV",
    title: "Test & Refine",
    desc: "Rigorous QA, security review, and performance testing. Nothing passes the gate unless it meets the standard.",
  },
  {
    num: "V",
    title: "Launch & Sustain",
    desc: "Deployment, monitoring, and ongoing support. We don't just hand off — we walk beside you post-launch.",
  },
];

export function ZPL() {
  return (
    <section id="zpl" className="bg-gray-900 py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono text-[0.72rem] font-medium text-gold tracking-[0.14em] uppercase mb-3.5 flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-gold rounded-sm" />
              Our Signature Process
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3rem)] font-semibold text-white leading-[1.15] mb-4">
              The Zion Production Line&trade;
            </h2>
            <p className="text-[1rem] leading-[1.7] text-gray-400 font-light max-w-[560px] mb-8">
              Our proprietary development methodology — the <strong className="text-gold font-semibold">ZPL</strong> — is what sets us apart. A battle-tested, phase-gated operating framework that brings order, excellence, and accountability to every build.
            </p>
            
            <div className="p-6 bg-gold/5 border border-solid border-gold/12 rounded-xl mb-8">
              <p className="text-[0.9rem] leading-[1.7] text-gray-300 font-normal">
                Think of it as a production line where <strong>every station has a purpose</strong>, every handoff is intentional, and the final product reflects the standard of the Kingdom. Nothing ships without passing through our quality gate.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3.5">
              {[
                { val: "5", label: "Core Phases" },
                { val: "98%", label: "On-Time Rate" },
                { val: "0", label: "Shortcuts" },
              ].map((m, idx) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center py-5 px-3 bg-gray-850 border border-solid border-gray-800 rounded-xl hover:border-gold/20 transition-colors"
                >
                  <div className="font-display text-[2rem] font-semibold text-gold leading-none">{m.val}</div>
                  <div className="text-[0.68rem] font-medium text-gray-500 uppercase tracking-wider mt-1.5">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-3.5">
            {PHASES.map((phase, idx) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex gap-4.5 p-5.5 bg-gray-850 border border-solid border-gray-800 rounded-xl transition-all duration-350 ease-out-expo hover:border-gold/20 hover:bg-gold/4 hover:translate-x-1"
              >
                <div className="font-display text-[1.8rem] font-semibold text-gold leading-none shrink-0 w-[30px] opacity-70 group-hover:opacity-100 transition-opacity">
                  {phase.num}
                </div>
                <div>
                  <h4 className="text-[0.95rem] font-semibold text-white mb-1.5">{phase.title}</h4>
                  <p className="text-[0.82rem] leading-[1.6] text-gray-400 font-light">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
