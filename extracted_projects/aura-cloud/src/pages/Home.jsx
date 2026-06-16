import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { sharedAnimState } from '../shared/animationState';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Background Values Animations
      gsap.to({val: 0}, {
        val: 1,
        duration: 3.5,
        ease: "power2.inOut",
        onUpdate: function() {
            sharedAnimState.introValue = this.targets()[0].val;
        }
      });

      gsap.to("#bg-canvas", {
        y: "35%",
        scale: 1.22,
        ease: "none",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
      });

      // Ambient Blobs
      gsap.to(".blob-1", {
        y: -180, x: 60, ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true }
      });
      gsap.to(".blob-2", {
        y: -100, x: -70, ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true }
      });
      gsap.to(".blob-3", {
        y: -140, x: 40, ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true }
      });

      gsap.to({val: 0}, {
        val: 1, ease: "none",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true
        },
        onUpdate: function() {
            sharedAnimState.scrollValue = this.targets()[0].val;
        }
      });

      gsap.to({val: 0}, {
        val: 1, ease: "power2.out",
        scrollTrigger: {
            trigger: "#showcase-section",
            start: "top 70%",
            end: "bottom 30%",
            scrub: true
        },
        onUpdate: function() {
            sharedAnimState.burstValue = this.targets()[0].val;
        }
      });

      // Hero Elements
      gsap.to('.reveal-word', {
        y: "0%", duration: 1.4, stagger: 0.12, ease: "power4.out", delay: 0.2,
        scrollTrigger: { trigger: "#hero-title", start: "top 95%" }
      });
      gsap.fromTo('.hero-label', 
        { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.6 }
      );
      gsap.fromTo('.hero-sub', 
        { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.1 }
      );
      gsap.fromTo('.hero-orb', 
        { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", stagger: 0.12, delay: 0.9 }
      );
      gsap.fromTo("header", 
        { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
      );
      gsap.fromTo("#hero-ctas", 
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1.35 }
      );

      // Features
      gsap.to('.reveal-feature-word', {
        y: "0%", duration: 1.2, stagger: 0.1, ease: "power4.out",
        scrollTrigger: { trigger: "#features-title", start: "top 85%" }
      });
      gsap.fromTo(".feature-card", 
        { opacity: 0, y: 80, rotateY: 6 },
        { 
            opacity: 1, y: 0, rotateY: 0, duration: 1.1, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: "#features-section", start: "top 72%" }
        }
      );
      gsap.utils.toArray(".parallax-element").forEach((el) => {
        let speed = parseFloat(el.getAttribute("data-speed") || "0.1");
        gsap.fromTo(el, 
            { y: 0 },
            { 
                y: () => -180 * speed, ease: "none",
                scrollTrigger: { trigger: "#features-section", start: "top bottom", end: "bottom top", scrub: true }
            }
        );
      });

      // Metrics
      gsap.fromTo(".metrics-copy", 
        { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#metrics-section", start: "top 78%" } }
      );
      gsap.utils.toArray(".stat-card").forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 24, scale: 0.96 },
            {
                opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out", delay: index * 0.08,
                scrollTrigger: { trigger: "#metrics-section", start: "top 78%" }
            }
        );
        gsap.to(card, {
            y: index % 2 === 0 ? -10 : -18, repeat: -1, yoyo: true, duration: 2.8 + index * 0.2, ease: "sine.inOut"
        });
      });

      // Schema Section
      gsap.fromTo(".schema-copy", 
        { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: "#schema-section", start: "top 78%" } }
      );
      gsap.fromTo(".schema-node", 
        { opacity: 0, scale: 0.85, y: 30 },
        { 
            opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.08,
            scrollTrigger: { trigger: "#schema-section", start: "top 75%" }
        }
      );
      gsap.fromTo(".central-node", 
        { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: "#schema-section", start: "top 75%" } }
      );
      gsap.to(".schema-line", {
        strokeDashoffset: 0, duration: 1.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: "#schema-section", start: "top 72%" }
      });
      gsap.to(".pulse-a", { x: 115, y: 50, repeat: -1, duration: 2.6, ease: "none" });
      gsap.to(".pulse-b", { x: -140, y: 95, repeat: -1, duration: 3.1, ease: "none" });
      gsap.to(".pulse-c", { x: 110, y: -42, repeat: -1, duration: 2.8, ease: "none" });
      gsap.to(".central-node > div", { rotate: 360, duration: 22, repeat: -1, ease: "none" });

      // Showcase
      gsap.fromTo(".showcase-copy", 
        { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#showcase-section", start: "top 80%" } }
      );
      gsap.utils.toArray(".showcase-card").forEach((card, index) => {
        gsap.fromTo(card,
            { y: 100, opacity: 0, rotateX: 6 },
            {
                y: 0, opacity: 1, rotateX: 0, duration: 1.1, ease: "power3.out", delay: index * 0.05,
                scrollTrigger: { trigger: card, start: "top 85%" }
            }
        );
        gsap.to(card, {
            y: () => -30 - (index * 10), ease: "none",
            scrollTrigger: { trigger: "#showcase-section", start: "top bottom", end: "bottom top", scrub: true }
        });
      });
      gsap.to(".mini-panel", { y: -8, repeat: -1, yoyo: true, duration: 2.8, stagger: 0.12, ease: "sine.inOut" });
      gsap.fromTo(".bar-fill", 
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.2, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: document.body, start: "top 80%" } }
      );
      gsap.to(".predict-rings", { rotate: 360, repeat: -1, duration: 16, ease: "none" });

      // Process
      gsap.fromTo(".process-copy", 
        { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#process-section", start: "top 80%" } }
      );
      gsap.utils.toArray(".timeline-item").forEach((item) => {
        gsap.fromTo(item,
            { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 82%" } }
        );
      });
      gsap.utils.toArray(".timeline-card").forEach((card, index) => {
        gsap.to(card, { y: index % 2 === 0 ? -10 : -14, repeat: -1, yoyo: true, duration: 3.5 + index * 0.2, ease: "sine.inOut" });
      });

      // CTA
      gsap.fromTo(".cta-copy", 
        { opacity: 0, y: 50, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: "#cta-section", start: "top 78%" } }
      );
      gsap.fromTo(".cta-actions", 
        { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.15, scrollTrigger: { trigger: "#cta-section", start: "top 72%" } }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 w-full min-h-screen border-l border-r border-white/5 flex flex-col">
      
      {/* Top Corner Squares */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-black border border-white/20"></div>
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-black border border-white/20"></div>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-end px-6 md:px-12 lg:px-24 w-full relative pb-32 pt-32 min-h-[90vh]">
        <div className="absolute right-[10%] top-[18%] hidden xl:block">
            <div className="hero-orb orb-float relative w-28 h-28 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl">
                <div className="absolute inset-3 rounded-full border border-cyan-400/20"></div>
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.18),transparent_38%)] blur-sm"></div>
            </div>
        </div>

        <div className="absolute left-[10%] bottom-[18%] hidden xl:block">
            <div className="hero-orb orb-float-delay relative w-20 h-20 rounded-full border border-white/10 bg-gradient-to-br from-teal-500/10 to-transparent backdrop-blur-xl"></div>
        </div>

        <div className="w-full max-w-2xl z-10 mr-0 xl:mr-12 text-left">
            <div className="hero-label flex items-center gap-2 text-xs tracking-widest font-medium text-gray-400 uppercase mb-8">
                <iconify-icon icon="solar:diamonds-linear" width="14" height="14" style={{strokeWidth: 1.5}}></iconify-icon>
                <span>Fluid Infrastructure</span>
            </div>

            <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-[5rem] tracking-tight font-medium leading-[1.05] mb-8 text-white flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4">
                <span style={{overflow: 'hidden', display: 'inline-flex', verticalAlign: 'top'}}>
                    <span className="reveal-word pb-2" style={{display: 'inline-block'}}>Architect</span>
                </span>
                <span style={{overflow: 'hidden', display: 'inline-flex', verticalAlign: 'top'}}>
                    <span className="reveal-word pb-2" style={{display: 'inline-block'}}>Without</span>
                </span>
                <span className="basis-full h-0 m-0 p-0 hidden md:block"></span>
                <span style={{overflow: 'hidden', display: 'inline-flex', verticalAlign: 'top'}}>
                    <span className="reveal-word pb-2" style={{display: 'inline-block'}}>Boundaries</span>
                </span>
            </h1>

            <p className="hero-sub text-sm md:text-base text-gray-400 max-w-lg mb-12 leading-relaxed font-normal opacity-90">
                A deployment engine that mirrors the natural flow of your development. Expand, observe, and adapt
                your cloud environment with liquid precision.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8 opacity-0" id="hero-ctas">
                <Link to="#" className="relative group rounded-full p-[1px] bg-gradient-to-r from-cyan-500/60 via-teal-500/60 to-cyan-500/60 transition-colors duration-500">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/40 to-teal-500/40 blur-md group-hover:opacity-100 opacity-60 transition-opacity duration-500">
                    </div>
                    <div className="relative w-full h-full bg-black/80 backdrop-blur-md hover:bg-black/60 transition-colors text-white rounded-full px-6 py-3 text-sm font-medium tracking-wide flex items-center gap-2">
                        Deploy Now
                        <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" style={{strokeWidth: 1.5}}></iconify-icon>
                    </div>
                </Link>

                <Link to="#" className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors backdrop-blur-sm">
                    View Documentation
                </Link>
            </div>
        </div>
      </main>

      {/* Features */}
      <section id="features-section" className="relative w-full px-6 md:px-12 lg:px-24 pb-44 pt-12 z-10">
        <div className="w-full max-w-6xl mx-auto">
            <h2 id="features-title" className="section-heading text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium mb-16 text-white flex flex-wrap gap-x-3 gap-y-2">
                <span style={{overflow: 'hidden', display: 'inline-flex', verticalAlign: 'top'}}>
                    <span className="reveal-feature-word pb-1" style={{display: 'inline-block'}}>Immerse</span>
                </span>
                <span style={{overflow: 'hidden', display: 'inline-flex', verticalAlign: 'top'}}>
                    <span className="reveal-feature-word pb-1" style={{display: 'inline-block'}}>in</span>
                </span>
                <span style={{overflow: 'hidden', display: 'inline-flex', verticalAlign: 'top'}}>
                    <span className="reveal-feature-word pb-1" style={{display: 'inline-block'}}>depth.</span>
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="parallax-element feature-card group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent h-full" data-speed="0.07">
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 h-full border border-white/5 flex flex-col justify-between hover:bg-black/40 transition-colors duration-500">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                                <iconify-icon icon="solar:layers-linear" width="24" height="24" className="text-cyan-400"></iconify-icon>
                            </div>
                            <h3 className="text-xl tracking-tight font-medium text-white mb-3">Fluid Auto-Scaling</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-normal">
                                Resources expand and contract organically based on traffic pressures, ensuring
                                pristine performance under heavy loads.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="parallax-element feature-card group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent h-full mt-0 md:mt-12" data-speed="0.16">
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 h-full border border-white/5 flex flex-col justify-between hover:bg-black/40 transition-colors duration-500">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                                <iconify-icon icon="solar:shield-linear" width="24" height="24" className="text-teal-400"></iconify-icon>
                            </div>
                            <h3 className="text-xl tracking-tight font-medium text-white mb-3">Impenetrable Security</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-normal">
                                Isolated runtime environments wrap your services in a protective layer, isolating
                                critical components from external threats.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="parallax-element feature-card group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent h-full mt-0 md:mt-24" data-speed="0.24">
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 h-full border border-white/5 flex flex-col justify-between hover:bg-black/40 transition-colors duration-500">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                                <iconify-icon icon="solar:chart-linear" width="24" height="24" className="text-cyan-300"></iconify-icon>
                            </div>
                            <h3 className="text-xl tracking-tight font-medium text-white mb-3">Deep Observability</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-normal">
                                Peer into the exact health and telemetry of your infrastructure with real-time
                                logging spanning every microservice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics-section" className="relative w-full px-6 md:px-12 lg:px-24 pb-40 z-10">
        <div className="max-w-6xl mx-auto">
            <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.12),transparent_35%)]"></div>
                <div className="relative bg-black/60 backdrop-blur-xl rounded-[2rem] border border-white/5 px-8 py-12 md:px-12">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        <div className="metrics-copy max-w-xl">
                            <div className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">Live Performance Layer</div>
                            <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.05] font-medium mb-5">
                                Infrastructure that feels alive.
                            </h2>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                Watch the platform breathe in real time. Through every request burst, scale event,
                                and regional failover, the system stays fluid.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 min-w-full lg:min-w-[28rem] lg:max-w-[30rem]">
                            <div className="stat-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Latency</div>
                                <div className="text-3xl md:text-4xl font-medium tracking-tight mb-2">18ms</div>
                                <div className="text-sm text-emerald-400">-32% under peak</div>
                            </div>
                            <div className="stat-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Regions</div>
                                <div className="text-3xl md:text-4xl font-medium tracking-tight mb-2">24</div>
                                <div className="text-sm text-teal-400">globally active</div>
                            </div>
                            <div className="stat-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Uptime</div>
                                <div className="text-3xl md:text-4xl font-medium tracking-tight mb-2">99.99%</div>
                                <div className="text-sm text-cyan-400">multi-zone resilient</div>
                            </div>
                            <div className="stat-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Deploys</div>
                                <div className="text-3xl md:text-4xl font-medium tracking-tight mb-2">8.2k</div>
                                <div className="text-sm text-cyan-200">this week</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Creative Animated Schema */}
      <section id="schema-section" className="relative w-full px-6 md:px-12 lg:px-24 pb-44 z-10">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                <div className="schema-copy">
                    <div className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">Creative Flow Schema</div>
                    <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.05] font-medium mb-6">
                        A living system map, not a static diagram.
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
                        Services, routing, intelligence, and recovery nodes stay connected through an animated
                        architecture layer that makes the whole platform feel alive.
                    </p>
                </div>

                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 md:p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.12),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.12),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(45,212,191,0.08),transparent_30%)]"></div>

                    <div className="absolute top-8 left-10 w-24 h-24 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    <div className="absolute right-8 bottom-10 w-24 h-24 rounded-full bg-teal-500/10 blur-3xl"></div>

                    <div className="relative aspect-[1.15/1] w-full">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 620" fill="none">
                            <path className="schema-line line-a" d="M165 150C240 150 255 155 320 205" stroke="url(#grad1)" strokeWidth="2"></path>
                            <path className="schema-line line-b" d="M580 165C650 165 695 175 745 220" stroke="url(#grad2)" strokeWidth="2"></path>
                            <path className="schema-line line-c" d="M450 255C450 315 450 335 450 400" stroke="url(#grad3)" strokeWidth="2"></path>
                            <path className="schema-line line-d" d="M320 470C365 435 390 425 450 420" stroke="url(#grad4)" strokeWidth="2"></path>
                            <path className="schema-line line-e" d="M580 470C535 435 510 425 450 420" stroke="url(#grad5)" strokeWidth="2"></path>
                            <path className="schema-line line-f" d="M320 205C360 240 395 250 450 255" stroke="url(#grad1)" strokeWidth="2"></path>
                            <path className="schema-line line-g" d="M580 165C540 228 512 245 450 255" stroke="url(#grad2)" strokeWidth="2"></path>

                            <defs>
                                <linearGradient id="grad1" x1="165" y1="150" x2="320" y2="205" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#06B6D4" stopOpacity="0.85"></stop>
                                    <stop offset="1" stopColor="#2DD4BF" stopOpacity="0.85"></stop>
                                </linearGradient>
                                <linearGradient id="grad2" x1="580" y1="165" x2="745" y2="220" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#2DD4BF" stopOpacity="0.85"></stop>
                                    <stop offset="1" stopColor="#67E8F9" stopOpacity="0.85"></stop>
                                </linearGradient>
                                <linearGradient id="grad3" x1="450" y1="255" x2="450" y2="400" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#22D3EE" stopOpacity="0.85"></stop>
                                    <stop offset="1" stopColor="#5EEAD4" stopOpacity="0.85"></stop>
                                </linearGradient>
                                <linearGradient id="grad4" x1="320" y1="470" x2="450" y2="420" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#06B6D4" stopOpacity="0.85"></stop>
                                    <stop offset="1" stopColor="#22D3EE" stopOpacity="0.85"></stop>
                                </linearGradient>
                                <linearGradient id="grad5" x1="580" y1="470" x2="450" y2="420" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#67E8F9" stopOpacity="0.85"></stop>
                                    <stop offset="1" stopColor="#2DD4BF" stopOpacity="0.85"></stop>
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Nodes */}
                        <div className="schema-node orb-float absolute left-[6%] top-[12%] rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3 min-w-[8.5rem]">
                            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">Ingress</div>
                            <div className="text-sm font-medium">Traffic Edge</div>
                        </div>

                        <div className="schema-node orb-float-delay absolute left-[28%] top-[24%] rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3 min-w-[8.5rem]">
                            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">Router</div>
                            <div className="text-sm font-medium">Adaptive Mesh</div>
                        </div>

                        <div className="schema-node orb-float-delay-2 absolute right-[8%] top-[16%] rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3 min-w-[8.5rem]">
                            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">Signal</div>
                            <div className="text-sm font-medium">Telemetry Hub</div>
                        </div>

                        <div className="schema-node central-node absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
                            <div className="relative w-40 h-40 rounded-full border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(45,212,191,0.12)]">
                                <div className="absolute inset-3 rounded-full border border-cyan-400/20 animate-spin [animation-duration:18s]"></div>
                                <div className="absolute inset-8 rounded-full border border-teal-400/20 animate-spin [animation-duration:12s] [animation-direction:reverse]"></div>
                                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_45%_55%,rgba(6,182,212,0.18),transparent_45%)] blur-sm"></div>
                                <div className="relative text-center">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-gray-400 mb-2">Core Brain</div>
                                    <div className="text-base font-medium tracking-tight">Flow Engine</div>
                                </div>
                            </div>
                        </div>

                        <div className="schema-node orb-float-delay absolute left-[22%] bottom-[8%] rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3 min-w-[8.5rem]">
                            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">Deploy</div>
                            <div className="text-sm font-medium">Region Sync</div>
                        </div>

                        <div className="schema-node orb-float absolute right-[18%] bottom-[8%] rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3 min-w-[8.5rem]">
                            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">Recovery</div>
                            <div className="text-sm font-medium">Failover Layer</div>
                        </div>

                        {/* Pulses */}
                        <div className="pulse pulse-a absolute left-[32%] top-[28%] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
                        <div className="pulse pulse-b absolute right-[24%] top-[25%] w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.8)]"></div>
                        <div className="pulse pulse-c absolute left-1/2 top-[62%] w-3 h-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Sticky Showcase */}
      <section id="showcase-section" className="relative w-full px-6 md:px-12 lg:px-24 pb-40 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="showcase-copy lg:sticky lg:top-28 self-start">
                <div className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">Adaptive Orchestration</div>
                <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.05] font-medium mb-6">
                    Every layer moves with intent.
                </h2>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
                    A visual stack of modules that shifts with scroll. Each surface floats at a different depth to
                    create a premium parallax feel.
                </p>
            </div>

            <div className="space-y-6">
                <div className="showcase-card rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6 md:p-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.12),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.1),transparent_30%)]"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">Routing Mesh</div>
                                <h3 className="text-2xl tracking-tight font-medium">Traffic redistributes instantly</h3>
                            </div>
                            <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                                <iconify-icon icon="solar:routes-linear" width="22" height="22"></iconify-icon>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="mini-panel rounded-2xl border border-white/10 bg-black/40 p-4 h-24 flex items-end text-xs text-gray-400">NA-East</div>
                            <div className="mini-panel rounded-2xl border border-white/10 bg-black/30 p-4 h-32 flex items-end text-xs text-gray-400">EU-Core</div>
                            <div className="mini-panel rounded-2xl border border-white/10 bg-black/40 p-4 h-20 flex items-end text-xs text-gray-400">APAC</div>
                        </div>
                    </div>
                </div>

                <div className="showcase-card rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_26%),radial-gradient(circle_at_10%_80%,rgba(6,182,212,0.12),transparent_30%)]"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">Signal Engine</div>
                                <h3 className="text-2xl tracking-tight font-medium">Telemetry with depth</h3>
                            </div>
                            <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                                <iconify-icon icon="solar:pulse-2-linear" width="22" height="22"></iconify-icon>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="signal-bar h-3 rounded-full bg-white/5 overflow-hidden">
                                <div className="bar-fill h-full w-[72%] bg-gradient-to-r from-cyan-500/70 to-teal-500/70 rounded-full"></div>
                            </div>
                            <div className="signal-bar h-3 rounded-full bg-white/5 overflow-hidden">
                                <div className="bar-fill h-full w-[54%] bg-gradient-to-r from-teal-500/70 to-emerald-500/70 rounded-full"></div>
                            </div>
                            <div className="signal-bar h-3 rounded-full bg-white/5 overflow-hidden">
                                <div className="bar-fill h-full w-[88%] bg-gradient-to-r from-cyan-400/70 to-cyan-600/70 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showcase-card rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_10%,rgba(255,255,255,0.06),transparent_20%),radial-gradient(circle_at_40%_100%,rgba(20,184,166,0.1),transparent_35%)]"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">Recovery Layer</div>
                                <h3 className="text-2xl tracking-tight font-medium">Failover without friction</h3>
                            </div>
                            <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                                <iconify-icon icon="solar:refresh-linear" width="22" height="22"></iconify-icon>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="mini-panel rounded-2xl border border-white/10 bg-black/40 p-5">
                                <div className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">Primary</div>
                                <div className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-white/10"></div>
                            </div>
                            <div className="mini-panel rounded-2xl border border-white/10 bg-black/40 p-5">
                                <div className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">Fallback</div>
                                <div className="w-full h-16 rounded-2xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-white/10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Process */}
      <section id="process-section" className="relative w-full px-6 md:px-12 lg:px-24 pb-44 z-10">
        <div className="max-w-6xl mx-auto">
            <div className="process-copy mb-14">
                <div className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">Flow Sequence</div>
                <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.05] font-medium max-w-2xl">
                    From signal to deployment in one continuous stream.
                </h2>
            </div>

            <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0"></div>

                <div className="space-y-10">
                    <div className="timeline-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="md:pr-14">
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-300 mb-4">
                                <span>01</span>
                                <span>Observe</span>
                            </div>
                            <h3 className="text-2xl font-medium tracking-tight mb-3">Collect every pulse</h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                Capture incoming demand, response patterns, and pressure points before they become
                                system-level friction.
                            </p>
                        </div>
                        <div className="md:pl-14">
                            <div className="timeline-card rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 min-h-[13rem] flex items-center">
                                <div className="w-full space-y-3">
                                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                                        <div className="bar-fill h-full w-[65%] rounded-full bg-gradient-to-r from-cyan-500/70 to-teal-400/70"></div>
                                    </div>
                                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                                        <div className="bar-fill h-full w-[82%] rounded-full bg-gradient-to-r from-teal-500/70 to-emerald-500/70"></div>
                                    </div>
                                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                                        <div className="bar-fill h-full w-[58%] rounded-full bg-gradient-to-r from-emerald-500/70 to-cyan-500/70"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="md:order-2 md:pl-14">
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-teal-300 mb-4">
                                <span>02</span>
                                <span>Predict</span>
                            </div>
                            <h3 className="text-2xl font-medium tracking-tight mb-3">Model incoming pressure</h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                Anticipate scale requirements using live infrastructure signals, not rigid
                                thresholds.
                            </p>
                        </div>
                        <div className="md:order-1 md:pr-14">
                            <div className="timeline-card rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 min-h-[13rem] flex items-center justify-center">
                                <div className="predict-rings relative w-32 h-32 rounded-full border border-white/10">
                                    <div className="absolute inset-3 rounded-full border border-teal-400/30"></div>
                                    <div className="absolute inset-7 rounded-full border border-cyan-400/30"></div>
                                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(6,182,212,0.18),transparent,rgba(20,184,166,0.18),transparent)] blur-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="md:pr-14">
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-300 mb-4">
                                <span>03</span>
                                <span>Deploy</span>
                            </div>
                            <h3 className="text-2xl font-medium tracking-tight mb-3">Shift capacity instantly</h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                Re-route compute, duplicate services, and rebalance the stack in real time while
                                keeping the user experience untouched.
                            </p>
                        </div>
                        <div className="md:pl-14">
                            <div className="timeline-card rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 min-h-[13rem] flex items-center">
                                <div className="grid grid-cols-3 gap-3 w-full">
                                    <div className="mini-panel h-20 rounded-2xl bg-white/5 border border-white/10"></div>
                                    <div className="mini-panel h-28 rounded-2xl bg-gradient-to-b from-cyan-500/20 to-teal-500/10 border border-white/10"></div>
                                    <div className="mini-panel h-16 rounded-2xl bg-white/5 border border-white/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="md:order-2 md:pl-14">
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-300 mb-4">
                                <span>04</span>
                                <span>Recover</span>
                            </div>
                            <h3 className="text-2xl font-medium tracking-tight mb-3">Absorb impact and continue</h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                The flow bends, redistributes, and stabilizes so service continuity remains
                                uninterrupted during failure scenarios.
                            </p>
                        </div>
                        <div className="md:order-1 md:pr-14">
                            <div className="timeline-card rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 min-h-[13rem] flex items-center justify-center">
                                <div className="w-full h-24 rounded-[2rem] border border-white/10 bg-black/40 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-cyan-500/25 to-teal-500/15"></div>
                                    <div className="absolute right-0 top-0 bottom-0 w-[28%] bg-gradient-to-r from-emerald-500/15 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-section" className="relative w-full px-6 md:px-12 lg:px-24 pb-32 z-10">
        <div className="max-w-6xl mx-auto">
            <div className="relative rounded-[2.5rem] p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(6,182,212,0.16),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(20,184,166,0.14),transparent_35%)]"></div>
                <div className="relative rounded-[2.5rem] border border-white/5 bg-black/60 backdrop-blur-xl px-8 py-16 md:px-14 md:py-20 text-center">
                    <div className="cta-copy">
                        <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Ready to Enter the Flow</div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.02] font-medium max-w-4xl mx-auto mb-6">
                            Build systems that move like water and recover like instinct.
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                            Shape a cloud layer that scales, adapts, and responds with elegance. No rigid edges. No
                            broken momentum.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 cta-actions">
                        <Link to="#" className="relative group rounded-full p-[1px] bg-gradient-to-r from-cyan-500/60 via-teal-500/60 to-emerald-500/60">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/40 via-teal-500/40 to-emerald-500/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative px-7 py-3 rounded-full bg-black/85 backdrop-blur-md text-sm font-medium flex items-center gap-2">
                                Start Deploying
                                <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                            </div>
                        </Link>
                        <Link to="#" className="px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-sm font-medium">
                            Book a Walkthrough
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}