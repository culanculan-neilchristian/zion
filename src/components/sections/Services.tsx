"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Code, Settings, Users, Monitor, Zap } from "lucide-react";

const SERVICES = [
  {
    title: "Custom Software",
    desc: "Web apps, mobile platforms, and enterprise systems designed from the ground up for mission-driven organizations.",
    icon: Code,
  },
  {
    title: "Infrastructure & DevOps",
    desc: "Cloud architecture, CI/CD pipelines, and scalable infrastructure to keep your operations running securely.",
    icon: Zap,
  },
  {
    title: "Technology Consulting",
    desc: "Strategic guidance on tech decisions, digital transformation roadmaps, and system audits aligned to your vision.",
    icon: Settings,
  },
  {
    title: "Managed IT Services",
    desc: "Ongoing support, maintenance, and monitoring so your team stays focused on the mission while we handle the tech.",
    icon: Users,
  },
  {
    title: "UI/UX & Product Design",
    desc: "User-centered design that makes complex systems intuitive — from wireframes to high-fidelity prototypes.",
    icon: Monitor,
  },
  {
    title: "Cybersecurity",
    desc: "Protect your data with security audits, penetration testing, compliance frameworks, and incident response planning.",
    icon: Shield,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gray-950 py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="font-mono text-[0.72rem] font-medium text-gold tracking-[0.14em] uppercase mb-3.5 flex items-center justify-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-gold rounded-sm" />
            What We Do
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3rem)] font-bold text-white leading-[1.15] mb-4">
            Technology That Serves the Mission
          </h2>
          <p className="text-[1rem] leading-[1.7] text-gray-400 font-light max-w-[560px] mx-auto">
            From concept to deployment and beyond — we build, maintain, and scale the systems that power Kingdom-oriented organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 bg-gray-900 border border-solid border-gray-800 rounded-xl transition-all duration-400 ease-out-expo relative overflow-hidden hover:border-gold/20 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-gold to-gold-light scale-x-0 origin-left transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
              <div className="w-11 h-11 bg-gold/12 border border-solid border-gold/15 rounded-lg flex items-center justify-center mb-5.5">
                <svc.icon size={20} className="text-gold" />
              </div>
              <h3 className="font-display text-[1.2rem] font-bold text-white mb-2.5">
                {svc.title}
              </h3>
              <p className="text-[0.87rem] leading-[1.65] text-gray-400 font-light">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
