"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Jesus.Net Philippines — Digital Ministry Portal",
    desc: "A full-scale digital missions portal featuring pathway-based navigation for individuals, churches, and Bible study leaders. Reach millions across 160+ countries.",
    tags: ["Web Platform", "Ministry Tech", "Multi-Tool"],
    monogram: "J.NET",
    link: "https://jesus.net.ph",
    featured: true,
  },
  {
    title: "Turn Vertical — Digital Evangelism Platform",
    desc: "Website and mobile app empowering believers to record testimonies and share Gospel videos via QR codes and links.",
    tags: ["Web App", "Mobile App", "Video Platform"],
    monogram: "TV",
    link: "https://turnvertical.org",
  },
  {
    title: "HopeBegins.Today — Faith-Based Mental Health",
    desc: "A ministry website for a faith-driven mental health coaching program combining Christian principles with technology.",
    tags: ["Ministry Website", "Booking System"],
    monogram: "HB",
    link: "https://hopebegins.today",
  },
  {
    title: "Glassbox Philippines — Systems Integration",
    desc: "End-to-end systems integration for an architectural finishes company, connecting inventory and ordering workflows.",
    tags: ["Systems Integration", "Enterprise"],
    monogram: "GB",
  },
  {
    title: "Himala Every Day — Devotional Landing Page",
    desc: "A beautifully crafted landing page for a daily devotional ministry reaching readers in 25+ languages.",
    tags: ["Landing Page", "UI/UX"],
    monogram: "HED",
    link: "https://himalaeveryday.ph",
  },
  {
    title: "eSTAR Foundation — Ministry Impact Reporting",
    desc: "A missions-focused reporting platform featuring the Harvest database that maps churches and unreached communities.",
    tags: ["Impact Reporting", "Missions Data"],
    monogram: "eSF",
    link: "https://www.estar.ws/",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-950 py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="font-mono text-[0.72rem] font-medium text-gold tracking-[0.14em] uppercase mb-3.5 flex items-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-gold rounded-sm" />
            Our Work
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3rem)] font-semibold text-white leading-[1.15] mb-4">
            Projects Built on Purpose
          </h2>
          <p className="text-[1rem] leading-[1.7] text-gray-400 font-light max-w-[560px]">
            Systems we've built for organizations doing Kingdom work across multiple sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group bg-gray-900 border border-solid border-gray-800 rounded-xl overflow-hidden transition-all duration-400 ease-out-expo hover:border-gold/20 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]",
                project.featured && "md:col-span-2"
              )}
            >
              <div className={cn(
                "relative overflow-hidden h-[200px]",
                project.featured && "md:h-[260px]"
              )}>
                <div className="absolute inset-0 bg-linear-to-br from-gray-850 to-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,var(--color-gold)_0,var(--color-gold)_1px,transparent_0,transparent_50%)] bg-[length:18px_18px]" />
                  <span className="font-display text-[3.2rem] font-semibold text-gold/12 tracking-wider z-10 group-hover:text-gold/20 transition-colors">
                    {project.monogram}
                  </span>
                </div>
              </div>
              <div className="p-7 md:p-8">
                <div className="flex flex-wrap gap-2 mb-3.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[0.6rem] font-medium px-2.5 py-1 bg-gold/8 text-gold rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-[1.25rem] font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-[0.85rem] leading-[1.65] text-gray-400 font-light">{project.desc}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-[0.78rem] font-semibold text-gold tracking-wide no-underline group/link"
                  >
                    Visit Project 
                    <ArrowRight size={14} className="transition-all duration-300 group-hover/link:translate-x-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

