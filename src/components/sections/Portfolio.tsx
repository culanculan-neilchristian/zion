"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink, Maximize2, Apple } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CATEGORIES = ["All", "Ministry", "Web & Mobile", "Enterprise"];

interface ProjectType {
  title: string;
  desc: string;
  tags: string[];
  monogram: string;
  link?: string;
  appStore?: string;
  featured?: boolean;
  category: string;
  image?: string;
}

const PROJECTS: ProjectType[] = [
  {
    title: "Jesus.Net Philippines — Digital Ministry Portal",
    desc: "A full-scale digital missions portal featuring pathway-based navigation for individuals, churches, and Bible study leaders. Reach millions across 160+ countries.",
    tags: ["Web Platform", "Ministry Tech", "Multi-Tool"],
    monogram: "J.NET",
    link: "https://jesus.net.ph",
    featured: true,
    category: "Ministry",
    image: "/images/jesus-site.jpg",
  },
  {
    title: "Turn Vertical — Digital Evangelism Platform",
    desc: "Website and mobile app empowering believers to record testimonies and share Gospel videos via QR codes and links.",
    tags: ["Web App", "Mobile App", "Video Platform"],
    monogram: "TV",
    appStore: "https://apps.apple.com/my/app/turn-vertical/id6758944157",
    category: "Web & Mobile",
    image: "/images/turn-vertical-siteB.jpg",
  },
  {
    title: "HopeBegins.Today — Faith-Based Mental Health",
    desc: "A ministry website for a faith-driven mental health coaching program combining Christian principles with technology.",
    tags: ["Ministry Website", "Booking System"],
    monogram: "HB",
    link: "https://hopebegins.today",
    category: "Ministry",
    image: "/images/hope-begins-site.jpg",
  },
  {
    title: "Glassbox Philippines — Systems Integration",
    desc: "End-to-end systems integration for an architectural finishes company, connecting inventory and ordering workflows.",
    tags: ["Systems Integration", "Enterprise"],
    monogram: "GB",
    category: "Enterprise",
    image: "/images/glassbox-site.png",
  },
  {
    title: "Himala Every Day — Devotional Landing Page",
    desc: "A beautifully crafted landing page for a daily devotional ministry reaching readers in 25+ languages.",
    tags: ["Landing Page", "UI/UX"],
    monogram: "HED",
    link: "https://himalaeveryday.ph",
    category: "Ministry",
    image: "/images/himala-site.jpg",
  },
  {
    title: "eSTAR Foundation — Ministry Impact Reporting",
    desc: "A missions-focused reporting platform featuring the Harvest database that maps churches and unreached communities.",
    tags: ["Impact Reporting", "Missions Data"],
    monogram: "eSF",
    link: "https://www.estar.ws/",
    category: "Enterprise",
    image: "/images/estar-site.jpg",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="bg-gray-950 py-16 md:py-28 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-10">
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

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-10 pb-4 border-b border-gray-900/60">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative px-4 py-2 text-[0.78rem] font-mono tracking-wider uppercase transition-colors duration-300 rounded-md cursor-pointer select-none",
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gold/10 border border-gold/30 rounded-md z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Container */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group bg-gray-900 border border-solid border-gray-800/80 rounded-xl overflow-hidden transition-all duration-400 ease-out-expo hover:border-gold/20 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] flex flex-col justify-between",
                    project.featured && "md:col-span-2"
                  )}
                >
                  <div className="flex flex-col">
                    {/* Image Container */}
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className={cn(
                        "relative overflow-hidden h-[220px] cursor-pointer w-full bg-gray-950",
                        project.featured && "md:h-[300px]"
                      )}
                    >
                      {project.image ? (
                        <>
                          {/* Image Overlays */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-40" />
                          <div className="absolute inset-0 bg-gold/5 opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-100" />
                          
                          {/* Zoom Indicator */}
                          <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-950/70 border border-gray-800/80 flex items-center justify-center text-white opacity-0 transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <Maximize2 size={14} className="text-gold" />
                          </div>

                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes={project.featured ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                          />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-linear-to-br from-gray-850 to-gray-800 flex items-center justify-center">
                          <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,var(--color-gold)_0,var(--color-gold)_1px,transparent_0,transparent_50%)] bg-[length:18px_18px]" />
                          <span className="font-display text-[3.2rem] font-semibold text-gold/12 tracking-wider z-10 group-hover:text-gold/20 transition-colors">
                            {project.monogram}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meta & Description */}
                    <div className="p-7 md:p-8">
                      <div className="flex flex-wrap gap-2 mb-3.5">
                        {project.tags.map(tag => (
                          <span key={tag} className="font-mono text-[0.6rem] font-medium px-2.5 py-1 bg-gold/8 text-gold rounded-full uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 
                        onClick={() => setSelectedProject(project)}
                        className="font-display text-[1.3rem] font-semibold text-white mb-2 cursor-pointer hover:text-gold transition-colors duration-300"
                      >
                        {project.title}
                      </h3>
                      <p className="text-[0.85rem] leading-[1.65] text-gray-400 font-light">{project.desc}</p>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="px-7 pb-7 md:px-8 md:pb-8 pt-0 flex items-center gap-5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-gold tracking-wide no-underline group/link"
                      >
                        Visit Project 
                        <ArrowRight size={14} className="transition-all duration-300 group-hover/link:translate-x-1" />
                      </a>
                    )}
                    
                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-gold tracking-wide no-underline group/link"
                      >
                        App Store 
                        <ArrowRight size={14} className="transition-all duration-300 group-hover/link:translate-x-1" />
                      </a>
                    )}
                    
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-gray-950/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[960px] w-full bg-gray-900 border border-gray-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-gray-950/60 border border-gray-800/60 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Left Side: Large Image */}
              <div className="relative w-full md:w-3/5 h-[240px] md:h-[480px] bg-gray-950 overflow-hidden shrink-0">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-gray-850 to-gray-800 flex items-center justify-center">
                    <span className="font-display text-[4.8rem] font-semibold text-gold/10 tracking-wider">
                      {selectedProject.monogram}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Side: Description & Meta */}
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-between bg-gray-900">
                <div>
                  <span className="inline-block font-mono text-[0.62rem] font-semibold px-2.5 py-1 bg-gold/10 text-gold rounded-full uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  
                  <h3 className="font-display text-[1.45rem] font-semibold text-white mt-4 mb-3 leading-snug">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="font-mono text-[0.58rem] text-gray-400 border border-gray-800 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[0.88rem] leading-[1.7] text-gray-300 font-light mb-6">
                    {selectedProject.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-gray-800/60">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-gold hover:bg-gold-light text-gray-950 font-semibold rounded-lg text-[0.82rem] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(205,162,70,0.2)] group/btn"
                    >
                      Visit Live Website
                      <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}

                  {selectedProject.appStore && (
                    <a
                      href={selectedProject.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-black hover:bg-zinc-900 text-white font-semibold rounded-lg text-[0.82rem] transition-all duration-300 border border-zinc-800 hover:border-zinc-700 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] group/btn cursor-pointer"
                    >
                      <Apple size={14} className="fill-white text-white" />
                      Download on App Store
                      <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-3 px-4 text-center border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-lg text-[0.82rem] transition-colors cursor-pointer"
                  >
                    Close Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

