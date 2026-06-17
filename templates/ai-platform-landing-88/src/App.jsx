import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Reveal body to prevent FOUC (Flash of Unstyled Content)
        gsap.set("body", { visibility: "visible" });

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Simple Nav Scroll Shadow
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });

        // Initialize GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            
            // Nav Bar
            gsap.to(".nav-anim", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            });

            // Hero Elements
            gsap.from(".hero-anim", {
                y: 30,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });

            // Logos Section
            gsap.from(".logo-title", {
                scrollTrigger: {
                    trigger: ".logo-section",
                    start: "top 90%",
                },
                opacity: 0,
                y: 10,
                duration: 0.8,
                ease: "power2.out"
            });

            gsap.from(".logo-anim span", {
                scrollTrigger: {
                    trigger: ".logo-section",
                    start: "top 85%",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Generic Fade Up Sections (Problem/Solution)
            gsap.utils.toArray('.fade-up-section').forEach(section => {
                gsap.from(section.children, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out"
                });
            });

            // Features Header
            gsap.from(".fade-up-header", {
                scrollTrigger: {
                    trigger: ".fade-up-header",
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Feature Cards Stagger
            gsap.from(".card-anim", {
                scrollTrigger: {
                    trigger: "#features",
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Workflow Timeline Line
            gsap.from(".timeline-line", {
                scrollTrigger: {
                    trigger: "#workflow",
                    start: "top 60%",
                },
                scaleY: 0,
                duration: 1.5,
                ease: "power3.inOut"
            });

            // Workflow Timeline Steps
            gsap.from(".timeline-step", {
                scrollTrigger: {
                    trigger: "#workflow",
                    start: "top 60%",
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power3.out"
            });

            // Showcase Blocks
            gsap.utils.toArray('.showcase-block').forEach(block => {
                // Animate text content
                gsap.from(block.querySelectorAll('.fade-up-content'), {
                    scrollTrigger: {
                        trigger: block,
                        start: "top 75%",
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
                
                // Animate visuals/cards with a scale effect
                gsap.from(block.querySelectorAll('.scale-anim'), {
                    scrollTrigger: {
                        trigger: block,
                        start: "top 75%",
                    },
                    scale: 0.95,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out"
                });
            });

            // Bottom CTA
            gsap.from(".cta-anim", {
                scrollTrigger: {
                    trigger: ".cta-section",
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Footer
            gsap.from(".footer-anim > div", {
                scrollTrigger: {
                    trigger: ".footer-anim",
                    start: "top 90%",
                },
                y: 20,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-2] bg-grid-pattern pointer-events-none"></div>
<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] aspect-square bg-indigo-500/10 rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-950/60 border-b border-white/5 opacity-0 nav-anim">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tighter text-white">SYNTHESIS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-normal">
<a className="hover:text-white transition-colors" href="#features">Platform</a>
<a className="hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors" href="#showcase">Showcase</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm text-zinc-300 hover:text-white transition-colors font-medium">Log in</button>
<button className="bg-white text-zinc-950 text-sm font-medium px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">Get Started</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="hero-anim inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
<span className="text-xs font-medium text-zinc-300">Engine v2.0 Online</span>
</div>
<h1 className="hero-anim text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-[1.1] mb-8">
                Design systems,<br/>generated by intelligence.
            </h1>
<p className="hero-anim text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-12">
                Blend minimal clarity with futuristic depth. Output production-ready interfaces with pure semantic structures, perfect editorial spacing, and subtle micro-interactions.
            </p>
<div className="hero-anim flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-white text-zinc-950 text-base font-medium px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    Initialize Project
                </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 text-base font-medium text-white px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
<iconify-icon className="text-xl text-zinc-400" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    View Architecture
                </button>
</div>
</div>
</section>

<section className="logo-section py-12 border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<p className="logo-title text-xs text-zinc-500 font-medium tracking-widest uppercase text-center mb-8">Powering interfaces for industry leaders</p>
<div className="logo-anim flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-xl md:text-2xl font-semibold tracking-tighter">LINEAR</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">VERCEL</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">STRIPE</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">RAYCAST</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">FRAMER</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="fade-up-section max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800">
<iconify-icon className="text-zinc-500" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">The Old Paradigm</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                    Templates feel generic.<br/>Custom builds take weeks.
                </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-zinc-400 font-normal">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
</div>
<p>Visual builders create bloated, unmaintainable code structures that break under pressure.</p>
</li>
<li className="flex items-start gap-4 text-zinc-400 font-normal">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
</div>
<p>Generic themes lack the premium typography and subtle depth expected by modern users.</p>
</li>
</ul>
</div>

<div className="surface-card scale-anim p-8 md:p-12 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[60px] rounded-full group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
<div className="relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">The New Standard</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white leading-tight">
                        Semantic, generative components in seconds.
                    </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-zinc-300 font-normal">
<iconify-icon className="mt-1 text-xl text-indigo-400" icon="solar:code-circle-linear"></iconify-icon>
<p>Pure utility classes mapped to strict design tokens. Zero external dependencies.</p>
</li>
<li className="flex items-start gap-4 text-zinc-300 font-normal">
<iconify-icon className="mt-1 text-xl text-indigo-400" icon="solar:layers-linear"></iconify-icon>
<p>Flawless spatial hierarchy, responsive down to the pixel, ready for production.</p>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 fade-up-header">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Engineered for perfection.</h2>
<p className="text-zinc-400 text-base md:text-lg font-normal">Every component is strictly governed by a cohesive design system, ensuring absolute consistency across your entire surface area.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="surface-card card-anim p-8 flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:text-field-focus-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Typography First</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Algorithmic font scaling, precise line-heights, and tight tracking on headings for editorial clarity.</p>
</div>
</div>

<div className="surface-card card-anim p-8 flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:tuning-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Fluid Sub-grids</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Strict 12-column adherence with generous internal padding and proportional negative space.</p>
</div>
</div>

<div className="surface-card card-anim p-8 flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Subtle Kinetics</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Hardware-accelerated micro-interactions, soft shadows on hover, and staggered visual reveals.</p>
</div>
</div>

<div className="surface-card card-anim p-8 flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:moon-fog-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Deep Contrast</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Layered neutral palettes with precise opacity stops to create depth without overwhelming gradients.</p>
</div>
</div>

<div className="surface-card card-anim p-8 flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Adaptive Layouts</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Mobile-first architectural approach ensuring complex data structures collapse elegantly on smaller screens.</p>
</div>
</div>

<div className="surface-card card-anim p-8 flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2 tracking-tight">Production Ready</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Semantic HTML5 tags, accessibility attributes built-in, and pure CSS frameworks mapped correctly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-zinc-900/20 border-y border-white/5 relative" id="workflow">
<div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16">
<div className="md:sticky md:top-32 self-start fade-up-header">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Seamless execution.</h2>
<p className="text-zinc-400 text-base font-normal">From raw context to deployed interface in a deterministic, controllable pipeline.</p>
</div>
<div className="relative space-y-12">

<div className="timeline-line absolute top-4 left-6 bottom-4 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent origin-top"></div>

<div className="timeline-step relative pl-20 group">
<div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center z-10 group-hover:border-indigo-400/50 transition-colors">
<span className="text-sm font-medium text-zinc-400 group-hover:text-indigo-400">01</span>
</div>
<h4 className="text-xl font-semibold text-white mb-3 tracking-tight">Inject Context</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Provide your core messaging, brand guidelines, or unstructured thought dumps. The engine maps intent to structural wireframes.</p>
</div>

<div className="timeline-step relative pl-20 group">
<div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center z-10 group-hover:border-indigo-400/50 transition-colors">
<span className="text-sm font-medium text-zinc-400 group-hover:text-indigo-400">02</span>
</div>
<h4 className="text-xl font-semibold text-white mb-3 tracking-tight">Define Parameters</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Select aesthetic blends, interaction models, and spatial density. Toggle between minimal utility and expressive depth.</p>
</div>

<div className="timeline-step relative pl-20 group">
<div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-zinc-950 border border-indigo-500/30 flex items-center justify-center z-10 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
<span className="text-sm font-medium text-indigo-300">03</span>
</div>
<h4 className="text-xl font-semibold text-white mb-3 tracking-tight">Generate &amp; Deploy</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Compile instantly into highly optimized code components. Copy directly or deploy to your preferred hosting environment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 overflow-hidden" id="showcase">
<div className="max-w-7xl mx-auto space-y-32">

<div className="showcase-block grid md:grid-cols-2 gap-16 items-center">
<div className="scale-anim order-2 md:order-1 relative aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-zinc-950 border border-white/5 rounded-xl shadow-2xl relative overflow-hidden flex flex-col p-6">
<div className="w-full h-8 flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<div className="w-1/3 h-4 bg-zinc-800 rounded mb-4"></div>
<div className="w-full h-2 bg-zinc-800/50 rounded mb-2"></div>
<div className="w-4/5 h-2 bg-zinc-800/50 rounded mb-8"></div>
<div className="mt-auto flex gap-4">
<div className="w-full h-24 rounded-lg bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-500/20"></div>
<div className="w-full h-24 rounded-lg bg-zinc-800/30 border border-white/5"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none z-[-1]"></div>
</div>
<div className="order-1 md:order-2 space-y-6 fade-up-content">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Glassmorphism done right.</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
                        We avoid heavy, muddy blurs. Instead, we compute exact opacity values layered over subtle grain and grid textures to create a sense of deep space that feels native and lightweight.
                    </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon>
                            Hardware accelerated backdrops
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon>
                            Subtle inner light borders
                        </li>
</ul>
</div>
</div>

<div className="showcase-block grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 fade-up-content">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Precision components.</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
                        Say goodbye to default browser outlines and generic inputs. Every interactive element—from toggles to select dropdowns—is custom-drawn via CSS for a cohesive branded experience.
                    </p>
<div className="pt-6 flex flex-col gap-4 max-w-sm">

<div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
<span className="text-sm font-medium text-white">Enable Analytics</span>
<div className="w-10 h-6 bg-indigo-500 rounded-full p-1 cursor-pointer transition-colors relative">
<div className="w-4 h-4 bg-white rounded-full translate-x-4 transition-transform shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
<span className="text-sm font-medium text-white">Dark Mode Focus</span>
<div className="w-4 h-4 rounded-sm border-2 border-indigo-400 bg-indigo-500/20 flex items-center justify-center cursor-pointer">
<iconify-icon className="text-white text-xs" icon="solar:check-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="scale-anim relative aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">

<div className="w-[85%] h-[85%] bg-[#0d0d0d] rounded-xl border border-zinc-800 p-6 font-mono text-xs overflow-hidden text-zinc-500">
<div className="flex gap-2 mb-4">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<p><span className="text-indigo-400">export const</span> <span className="text-blue-300">Toggle</span> = ({ <span className="text-orange-300">checked</span> }) =&gt; {</p>
<p className="pl-4">return (</p>
<p className="pl-8">&lt;<span className="text-blue-400">button</span></p>
<p className="pl-12 text-zinc-400">className={`</p>
<p className="pl-16 text-green-400">relative inline-flex h-6 w-10 shrink-0</p>
<p className="pl-16 text-green-400">cursor-pointer rounded-full border-2</p>
<p className="pl-16 text-green-400">transition-colors duration-200 ease-in-out</p>
<p className="pl-12 text-zinc-400">`}</p>
<p className="pl-8">&gt;</p>
<p className="pl-12">&lt;<span className="text-blue-400">span</span></p>
<p className="pl-16 text-zinc-400">className={`</p>
<p className="pl-20 text-green-400">pointer-events-none inline-block h-5 w-5</p>
<p className="pl-20 text-green-400">transform rounded-full bg-white shadow</p>
<p className="pl-16 text-zinc-400">`}</p>
<p className="pl-12">/&gt;</p>
<p className="pl-8">&lt;/<span className="text-blue-400">button</span>&gt;</p>
<p className="pl-4">)</p>
<p>}</p>
</div>
</div>
</div>
</div>
</section>

<section className="cta-section py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent z-[-1]"></div>
<div className="cta-anim max-w-3xl mx-auto text-center space-y-8 relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Stop tweaking.<br/>Start shipping.
            </h2>
<p className="text-base md:text-lg text-zinc-400 font-normal max-w-xl mx-auto">
                Join thousands of developers and designers building the next generation of web applications with unparalleled speed and aesthetic quality.
            </p>
<div className="pt-4">
<button className="bg-white text-zinc-950 text-base font-medium px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                    Create Free Account
                </button>
</div>
<p className="text-xs text-zinc-500 font-medium">No credit card required. 14-day full access.</p>
</div>
</section>

<footer className="footer-anim border-t border-white/5 bg-zinc-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2 space-y-4">
<span className="text-sm font-medium tracking-tighter text-white">SYNTHESIS</span>
<p className="text-sm text-zinc-500 font-normal max-w-xs">
                    The advanced intelligence layer for modern interface generation. Built for those who care about details.
                </p>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4">Product</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Components</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4">Resources</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Design System</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4">Company</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2024 Synthesis UI. All rights reserved.</p>
<div className="flex gap-4 text-zinc-600">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:figma-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:programming-linear"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
