"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Lightbulb, Target } from "lucide-react";

const VALUES = [
  {
    title: "Excellence for the Kingdom",
    desc: "We believe technology built for a higher purpose deserves a higher standard of craftsmanship.",
    icon: Target,
  },
  {
    title: "Radical Transparency",
    desc: "No black boxes. You have full visibility into our process, progress, and pricing at every step.",
    icon: Lightbulb,
  },
  {
    title: "Mission Alignment",
    desc: "We don't just build tech; we serve your mission. Our success is measured by your organization's impact.",
    icon: Heart,
  },
  {
    title: "Production Integrity",
    desc: "The ZPL ensures that everything we ship is battle-tested, secure, and ready to scale.",
    icon: CheckCircle2,
  },
];

export function About() {
  return (
    <section id="about" className="bg-gray-900 py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32"
          >
            <div className="font-mono text-[0.72rem] font-medium text-gold tracking-[0.14em] uppercase mb-3.5 flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-gold rounded-sm" />
              Who We Are
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3rem)] font-bold text-white leading-[1.15] mb-4">
              Driven by Values, Guided by Vision.
            </h2>
            <p className="text-[1rem] leading-[1.7] text-gray-400 font-light mb-8">
              Zion Systems & Build was founded on the belief that the organizations doing the most important work in the world should have access to the best technology. We aren't just a service provider — we are a partner in your mission.
            </p>
            
            <div className="p-7 bg-gold/4 border-l-4 border-solid border-gold rounded-r-xl">
              <p className="font-display text-[1.15rem] italic text-gray-200 leading-[1.55]">
                "Our goal is to remove the technical barriers that hinder Kingdom-focused organizations from reaching their full potential. We build the frameworks so you can focus on the fruit."
              </p>
              <cite className="block mt-3 text-[0.78rem] font-medium text-gold not-italic uppercase tracking-wide">
                — Founding Vision, Zion Systems
              </cite>
            </div>
          </motion.div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-[1.3rem] font-bold text-white mb-1.5">Our Core Values</h3>
              <p className="text-[0.88rem] text-gray-400 font-light mb-6">The non-negotiables that guide every line of code we write.</p>
              <div className="flex flex-col gap-5">
                {VALUES.map((value, idx) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 shrink-0 bg-gold/12 border border-solid border-gold/12 rounded-lg flex items-center justify-center">
                      <value.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-[0.92rem] font-semibold text-white mb-1">{value.title}</h4>
                      <p className="text-[0.82rem] leading-[1.6] text-gray-400 font-light">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
