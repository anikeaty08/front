import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          


      // GSAP Animation System
      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);
        
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          gsap.set(".hero-eyebrow, .hero-title, .hero-subtitle, .hero-context, .hero-actions, .hero-panel, .section-content, .spotlight, .animate-on-scroll", { opacity: 1, y: 0, visibility: "visible" });
          return;
        }

        // 1. Hero Entrance Timeline
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        heroTl
          .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
          .from(".hero-title", { y: 30, opacity: 0, duration: 1, skewY: 1 }, "-=0.6")
          .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7")
          .from(".hero-context", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-actions", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-panel", { y: 40, opacity: 0, duration: 1.2, filter: "blur(10px)" }, "-=0.6");

        // 2. Section Reveals on Scroll
        const sections = gsap.utils.toArray(".section");
        
        sections.forEach((section) => {
          // Skip Hero (it has its own timeline)
          if (section.querySelector('.hero-title')) return;

          const spotlight = section.querySelector(".spotlight");
          const content = section.querySelector(".section-content");
          const children = section.querySelectorAll(".animate-on-scroll");
          
          const stTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
              // markers: true // Debug if needed
            }
          });

          // Reveal Spotlight
          if(spotlight) {
            stTl.from(spotlight, { opacity: 0, duration: 1.2 });
          }
          
          // Reveal Main Content
          if(content) {
            // Note: "<" starts at same time as previous animation
            stTl.from(content, { y: 30, opacity: 0, duration: 0.8 }, "<+=0.1"); 
          }

          // Stagger Children (Grids, cards, etc)
          if(children.length > 0) {
            stTl.from(children, { 
              y: 20, 
              opacity: 0, 
              duration: 0.6, 
              stagger: 0.08,
              clearProps: "all" 
            }, "-=0.5");
          }
        });

        // Ensure triggers are calculated correctly
        ScrollTrigger.refresh();
      });
    


      // Mobile Menu (Preserved)
      document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('mobile-menu-button');
        // Simple shim since the menu items were removed in the user provided HTML for brevity
      });
    


      // Pipeline Switcher Logic (Preserved)
      function switchPipeline(index) {
        // 1. Update Buttons
        const btns = document.querySelectorAll('.pipeline-btn');
        const line = document.getElementById('active-line');

        btns.forEach((btn, i) => {
          const tag = btn.querySelector('.tag-label');
          const title = btn.querySelector('h3');
          const desc = btn.querySelector('p');

          if (i === index) {
            btn.classList.add('active');
            if(tag) {
               tag.classList.remove('text-[#52525b]', 'border-[#242424]');
               tag.classList.add('text-[#6366f1]', 'border-[#6366f1]/30');
            }
            if(title) {
              title.classList.remove('text-[#52525b]');
              title.classList.add('text-[#e8e8e8]');
            }
             if(desc) {
              desc.classList.remove('text-[#3f3f46]');
              desc.classList.add('text-[#a1a1aa]');
            }
          } else {
            btn.classList.remove('active');
            if(tag) {
               tag.classList.remove('text-[#6366f1]', 'border-[#6366f1]/30');
               tag.classList.add('text-[#52525b]', 'border-[#242424]');
            }
            if(title) {
              title.classList.remove('text-[#e8e8e8]');
              title.classList.add('text-[#52525b]');
            }
             if(desc) {
              desc.classList.remove('text-[#a1a1aa]');
              desc.classList.add('text-[#3f3f46]');
            }
          }
        });

        if (line) line.style.top = (index * 33.33) + '%';

        // 2. Update Right Panel Visuals
        const visuals = document.querySelectorAll('.pipeline-visual');
        const tagLabel = document.getElementById('pipeline-header-tag');

        const tags = ['INPUT::ACTIVE', 'GOVERN::ACTIVE', 'OUTPUT::ACTIVE'];
        if(tagLabel) tagLabel.textContent = tags[index];

        // Define transition states per visual index
        const anims = [
          {
            // State 0: Slide from X
            active: ['opacity-100', 'translate-x-0', 'z-10'],
            inactive: ['opacity-0', '-translate-x-4', 'pointer-events-none', 'z-0']
          },
          {
            // State 1: Scale In
            active: ['opacity-100', 'scale-100', 'z-10'],
            inactive: ['opacity-0', 'scale-95', 'pointer-events-none', 'z-0']
          },
          {
            // State 2: Slide from Y
            active: ['opacity-100', 'translate-y-0', 'z-10'],
            inactive: ['opacity-0', 'translate-y-8', 'pointer-events-none', 'z-0']
          }
        ];

        visuals.forEach((vis, i) => {
          const conf = anims[i];
          if (i === index) {
            vis.classList.remove(...conf.inactive);
            vis.classList.add(...conf.active);
          } else {
            vis.classList.remove(...conf.active);
            vis.classList.add(...conf.inactive);
          }
        });
      }
    


      // Hero Panel Toggle (Preserved)
      window.toggleHeroPanel = function(state) { const inputPanel = document.getElementById('panel-input'); const outputPanel = document.getElementById('panel-output'); const outputCard = document.getElementById('output-card'); const btnInput = document.getElementById('btn-input'); const btnOutput = document.getElementById('btn-output'); if (state === 'input') { inputPanel.classList.remove('opacity-0', 'translate-y-4', 'z-0'); inputPanel.classList.add('opacity-100', 'translate-y-0', 'z-10'); outputPanel.classList.remove('opacity-100', 'translate-y-0', 'z-10'); outputPanel.classList.add('opacity-0', 'translate-y-4', 'z-0'); outputCard.classList.remove('scale-100'); outputCard.classList.add('scale-95'); btnInput.classList.remove('text-[#52525b]', 'border-transparent', 'hover:text-[#a1a1aa]'); btnInput.classList.add('bg-[#242424]', 'text-[#e8e8e8]', 'border-[#3f3f46]'); btnOutput.classList.remove('bg-[#242424]', 'text-[#e8e8e8]', 'border-[#3f3f46]'); btnOutput.classList.add('text-[#52525b]', 'border-transparent', 'hover:text-[#a1a1aa]'); } else { inputPanel.classList.remove('opacity-100', 'translate-y-0', 'z-10'); inputPanel.classList.add('opacity-0', 'translate-y-4', 'z-0'); outputPanel.classList.remove('opacity-0', 'translate-y-4', 'z-0'); outputPanel.classList.add('opacity-100', 'translate-y-0', 'z-10'); setTimeout(() => { outputCard.classList.remove('scale-95'); outputCard.classList.add('scale-100'); }, 50); btnOutput.classList.remove('text-[#52525b]', 'border-transparent', 'hover:text-[#a1a1aa]'); btnOutput.classList.add('bg-[#242424]', 'text-[#e8e8e8]', 'border-[#3f3f46]'); btnInput.classList.remove('bg-[#242424]', 'text-[#e8e8e8]', 'border-[#3f3f46]'); btnInput.classList.add('text-[#52525b]', 'border-transparent', 'hover:text-[#a1a1aa]'); } };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#242424]">
<div className="sm:px-6 flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center flex-shrink-0 md:mr-4">
<span className="text-[#e8e8e8] font-display text-lg sm:text-xl uppercase tracking-tighter cursor-default">
            Buildr
          </span>
</div>
<div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="group relative px-1 py-2 text-[13px] font-medium text-[#e8e8e8] transition-colors tracking-tight" href="#">
            System
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[#a1a1aa] hover:text-[#e8e8e8] transition-colors tracking-tight" href="#">
            Use Cases
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[#a1a1aa] hover:text-[#e8e8e8] transition-colors tracking-tight" href="#">
            Explore
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[#a1a1aa] hover:text-[#e8e8e8] transition-colors tracking-tight" href="#">
            Docs
          </a>
</div>
<div className="flex items-center gap-3 sm:gap-6">
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[#242424] bg-[#131313]/40 hover:bg-[#181818] transition-colors" id="mobile-menu-button">
<iconify-icon className="text-[#e8e8e8] text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="hidden sm:block text-[13px] font-normal text-[#a1a1aa] hover:text-[#e8e8e8] transition-colors" href="#">
            Sign in
          </a>
<a className="text-xs px-5 py-2.5 bg-[#e8e8e8] text-[#0b0b0b] font-semibold rounded tracking-tight transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.35)]" href="#">
            Become a Creator
          </a>
</div>
</div>
</nav>


<main className="section section--main overflow-hidden min-h-screen flex flex-col sm:px-6 sm:pt-36 sm:pb-24 z-10 pt-24 pr-4 pb-20 pl-4 relative">
<div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>
</div>
<div className="mx-auto text-center relative max-w-7xl flex-1 flex flex-col items-center">

<div className="absolute -top-20 sm:-top-32 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[600px] h-[200px] sm:h-[300px] blur-[80px] sm:blur-[100px] rounded-full pointer-events-none bg-[#6366f1]/10"></div>
<div className="relative z-10 flex flex-col items-center w-full max-w-5xl">

<div className="hero-eyebrow flex items-center gap-3 mb-6">
<div className="w-1 h-1 rounded-full bg-[#6366f1]"></div>
<span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
              AI Infrastructure for Builders
            </span>
<div className="w-1 h-1 rounded-full bg-[#6366f1]"></div>
</div>

<h1 className="hero-title sm:text-6xl md:text-7xl uppercase leading-[0.95] text-4xl font-semibold text-[#e8e8e8] tracking-tighter font-display mb-3 drop-shadow-2xl">
            The Operating System
            <br/>
            for AI Creators.
          </h1>
<p className="hero-subtitle text-[#cfcfcf] text-lg sm:text-xl font-normal tracking-tight mb-8 leading-tight">
            Design, secure, and deploy AI systems — without exposing your logic.
          </p>

<p className="hero-context text-sm sm:text-base text-[#a1a1aa] max-w-xl mx-auto mb-10 leading-relaxed font-light text-center">
            Buildr is not another AI tool or prompt library. It’s a system layer
            that turns fragile logic into secure, reusable, production-ready
            products — without exposing your IP.
          </p>

<div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mb-16">
<button className="w-full sm:w-auto px-8 py-3 bg-[#e8e8e8] text-[#0b0b0b] text-sm font-semibold rounded tracking-tight transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-[1.01]">
              Become a Creator
            </button>
<button className="w-full sm:w-auto px-6 py-3 bg-transparent text-[#a1a1aa] border border-[#242424] hover:border-[#52525b] hover:text-[#e8e8e8] text-sm font-medium rounded transition-all flex items-center justify-center gap-2 group">
              View the System
            </button>
</div>

<div className="hero-panel w-full max-w-4xl mx-auto rounded-lg border border-[#242424] bg-[#0b0b0b] shadow-[0_0_50px_-20px_rgba(99,102,241,0.15)] overflow-hidden relative">

<div className="flex items-center justify-between px-4 py-3 border-b border-[#242424] bg-[#131313]/50 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-[#242424] border border-[#3f3f46]"></div>
<div className="w-2 h-2 rounded-full bg-[#242424] border border-[#3f3f46]"></div>
<div className="w-2 h-2 rounded-full bg-[#242424] border border-[#3f3f46]"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-[#52525b] ml-2">
                  System_Preview::v1.0
                </span>
</div>

<div className="flex bg-[#0b0b0b] rounded p-1 border border-[#242424]">
<button className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider font-medium rounded bg-[#242424] text-[#e8e8e8] border border-[#3f3f46] shadow-sm transition-all" id="btn-input" onclick="toggleHeroPanel('input')">
                  Input
                </button>
<button className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider font-medium rounded text-[#52525b] hover:text-[#a1a1aa] border border-transparent transition-all" id="btn-output" onclick="toggleHeroPanel('output')">
                  Output
                </button>
</div>
</div>

<div className="relative h-[340px] bg-[#0b0b0b] group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>

<div className="absolute inset-0 p-6 sm:p-10 transition-all duration-500 opacity-100 translate-y-0 z-10 flex flex-col justify-center" id="panel-input">
<div className="font-mono text-xs sm:text-sm leading-loose text-[#a1a1aa]">
<div className="flex gap-3">
<span className="text-[#6366f1]">const</span>
<span className="text-[#e8e8e8]">systemConfig</span>
                    = {
                  </div>
<div className="pl-6 py-0.5">
<span className="text-[#52525b]">
                      // Define core logic parameters
                    </span>
</div>
<div className="pl-6">
<span className="text-[#e8e8e8]">model</span>
                    :
                    <span className="text-[#9f9a92]">'claude-3.5-sonnet'</span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[#e8e8e8]">temperature</span>
                    :
                    <span className="text-[#6366f1]">0.1</span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[#e8e8e8]">guardrails</span>
                    : [
                    <span className="text-[#9f9a92]">'pii_redaction'</span>
                    ,
                    <span className="text-[#9f9a92]">'topic_lock'</span>
                    ],
                  </div>
<div className="pl-6">
<span className="text-[#e8e8e8]">context</span>
                    :
                    <span className="text-[#6366f1]">await</span>
<span className="text-[#e8e8e8]">kb.retrieve</span>
                    (
                    <span className="text-[#9f9a92]">'q3_financials'</span>
                    )
                  </div>
<div>};</div>
</div>
<div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-50">
<span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse"></span>
<span className="text-[10px] font-mono text-[#52525b] uppercase tracking-widest">
                    System Ready
                  </span>
</div>
</div>

<div className="absolute inset-0 transition-all duration-500 opacity-0 translate-y-4 z-0 flex items-center justify-center" id="panel-output">
<div className="w-full max-w-sm bg-[#131313] border border-[#242424] rounded-lg p-6 shadow-2xl relative overflow-hidden transform transition-all duration-500 scale-95" id="output-card">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-transparent"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#242424] flex items-center justify-center">
<iconify-icon className="text-[#e8e8e8] text-sm" icon="solar:chart-square-bold"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-bold text-[#e8e8e8] uppercase tracking-wide">
                          Q3 Forecast
                        </h4>
<p className="text-[10px] text-[#52525b]">
                          Automated Analysis
                        </p>
</div>
</div>
<span className="text-[9px] font-mono text-[#6366f1] bg-[#6366f1]/10 px-2 py-1 rounded border border-[#6366f1]/20">
                      COMPLETED
                    </span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-end gap-2 h-16">
<div className="w-1/4 bg-[#242424] h-[40%] rounded-t"></div>
<div className="w-1/4 bg-[#242424] h-[60%] rounded-t"></div>
<div className="w-1/4 bg-[#242424] h-[50%] rounded-t"></div>
<div className="w-1/4 bg-[#6366f1] h-[80%] rounded-t shadow-[0_0_15px_rgba(99,102,241,0.3)]"></div>
</div>
<div className="h-2 w-full bg-[#242424] rounded-full"></div>
<div className="h-2 w-2/3 bg-[#242424] rounded-full"></div>
</div>
<button className="w-full py-2 bg-[#e8e8e8] text-[#0b0b0b] text-[10px] font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity">
                    View Full Report
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


<section className="section section--surface section-divider py-24 md:py-32">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative z-10 animate-on-scroll">
<span className="font-mono text-[10px] uppercase tracking-widest text-[#6366f1] mb-3 block">
              Protocol v1.0
            </span>
<h2 className="text-3xl md:text-5xl font-display text-[#e8e8e8] uppercase tracking-tighter leading-none mb-6">
              RAW LOGIC
              <br/>
<span className="text-[#6366f1]">→ PRODUCTION</span>
</h2>
<p className="text-[#a1a1aa] text-sm font-light leading-relaxed mb-12 max-w-md">
              Buildr converts prompt logic into protected, deployable
              products—without exposing your IP.
            </p>
<div className="relative flex flex-col gap-0" id="pipeline-controls">

<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#242424]"></div>
<div className="absolute left-0 top-0 w-[2px] bg-[#6366f1] h-[33.33%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_0_15px_#6366f1]" id="active-line"></div>

<button className="pipeline-btn active group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(0)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-bold text-[#e8e8e8] transition-colors">
                    LOGIC INGESTION
                  </h3>
<span className="font-mono text-[9px] text-[#6366f1] border border-[#6366f1]/30 px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    INPUT
                  </span>
</div>
<p className="text-sm font-light text-[#a1a1aa] leading-relaxed max-w-sm">
                  Turn raw ideas and prompts into structured system input.
                </p>
</button>

<button className="pipeline-btn group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(1)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-bold text-[#52525b] group-hover:text-[#e8e8e8] transition-colors">
                    ENCAPSULATION &amp; SECURITY
                  </h3>
<span className="font-mono text-[9px] text-[#52525b] border border-[#242424] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    GOVERN
                  </span>
</div>
<p className="text-sm font-light text-[#3f3f46] group-hover:text-[#a1a1aa] leading-relaxed max-w-sm transition-colors">
                  Lock your logic behind secure system boundaries.
                </p>
</button>

<button className="pipeline-btn group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(2)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-bold text-[#52525b] group-hover:text-[#e8e8e8] transition-colors">
                    PRODUCTION DEPLOYMENT
                  </h3>
<span className="font-mono text-[9px] text-[#52525b] border border-[#242424] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    OUTPUT
                  </span>
</div>
<p className="text-sm font-light text-[#3f3f46] group-hover:text-[#a1a1aa] leading-relaxed max-w-sm transition-colors">
                  Ship your system as a real app or API.
                </p>
</button>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#0b0b0b] rounded-2xl border border-[#242424] overflow-hidden shadow-2xl flex flex-col group animate-on-scroll">

<div className="flex items-center justify-between px-4 py-3 border-b border-[#242424] bg-[#131313]/50 backdrop-blur-md z-20">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#242424] border border-[#3f3f46]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#242424] border border-[#3f3f46]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#242424] border border-[#3f3f46]"></div>
</div>
<span className="text-[10px] font-mono text-[#52525b] uppercase tracking-widest">
                SYSTEM STATE :: PIPELINE_v1
              </span>
<div className="text-[9px] font-mono font-bold text-[#6366f1] bg-[#6366f1]/10 px-2 py-1 rounded border border-[#6366f1]/20 transition-all duration-300" id="pipeline-header-tag">
                INPUT::ACTIVE
              </div>
</div>

<div className="relative flex-1 w-full bg-[#0b0b0b]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>

<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-100 translate-x-0 z-10" id="pipeline-visual-0">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-[#242424]">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-[#e8e8e8]">
                      Intake Parsing
                    </span>
</div>
<span className="text-[10px] font-mono text-[#52525b]">
                    01 / 03
                  </span>
</div>

<div className="flex-1 grid grid-cols-2 gap-6 min-h-0">

<div className="flex flex-col gap-2">
<span className="text-[9px] uppercase tracking-widest text-[#52525b] mb-1">
                      Source Tokens
                    </span>
<div className="px-3 py-2 rounded border border-[#242424] bg-[#131313] text-[10px] text-[#a1a1aa] font-mono border-l-2 border-l-[#6366f1] shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                      Prompt logic
                    </div>
<div className="px-3 py-2 rounded border border-[#242424] bg-[#131313] text-[10px] text-[#a1a1aa] font-mono">
                      Variables
                    </div>
<div className="px-3 py-2 rounded border border-[#242424] bg-[#131313] text-[10px] text-[#a1a1aa] font-mono">
                      Constraints
                    </div>
</div>

<div className="flex flex-col gap-3 relative pl-4 border-l border-[#242424] border-dashed">
<span className="text-[9px] uppercase tracking-widest text-[#52525b] mb-1">
                      Processing
                    </span>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[#242424] text-[9px] flex items-center justify-center text-[#e8e8e8] border border-[#3f3f46]">
                        1
                      </div>
<span className="text-[10px] text-[#e8e8e8]">
                        Structure extracted
                      </span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[#242424] text-[9px] flex items-center justify-center text-[#e8e8e8] border border-[#3f3f46]">
                        2
                      </div>
<span className="text-[10px] text-[#e8e8e8]">
                        Parameters resolved
                      </span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[#242424] text-[9px] flex items-center justify-center text-[#e8e8e8] border border-[#3f3f46]">
                        3
                      </div>
<span className="text-[10px] text-[#e8e8e8]">
                        Version created
                      </span>
</div>
</div>
</div>

<div className="mt-auto pt-4 border-t border-[#242424]">
<span className="text-[9px] uppercase tracking-widest text-[#52525b] mb-2 block">
                    Status
                  </span>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-[#6366f1]/10 border border-[#6366f1]/20 text-[9px] text-[#6366f1] font-mono flex items-center gap-1.5">
<iconify-icon className="text-xs" icon="solar:check-circle-bold"></iconify-icon>
                      Logic ingested
                    </span>
<span className="px-2 py-1 rounded bg-[#242424] border border-[#3f3f46] text-[9px] text-[#a1a1aa] font-mono flex items-center gap-1.5">
<iconify-icon className="text-[#52525b] text-xs" icon="solar:check-circle-bold"></iconify-icon>
                      System-readable
                    </span>
</div>
</div>
</div>

<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-0 scale-95 pointer-events-none z-0" id="pipeline-visual-1">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-[#242424]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#e8e8e8]" icon="solar:shield-check-bold"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-[#e8e8e8]">
                      Security Layer
                    </span>
</div>
<span className="text-[10px] font-mono text-[#52525b]">
                    02 / 03
                  </span>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative my-2">

<div className="w-full bg-[#0b0b0b] border border-[#3f3f46] rounded-xl p-5 relative z-10 shadow-2xl flex flex-col gap-3 group">
<div className="absolute inset-0 bg-[#6366f1]/5 rounded-xl pointer-events-none opacity-50"></div>
<div className="flex items-center justify-between border-b border-[#242424] pb-2 mb-1">
<span className="text-[9px] uppercase tracking-wider text-[#6366f1]">
                        Encapsulation Vault
                      </span>
<iconify-icon className="text-[#6366f1] text-xs" icon="solar:lock-bold"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-[10px] text-[#e8e8e8]">
<iconify-icon className="text-[#52525b]" icon="solar:server-square-linear"></iconify-icon>
                      Logic moved server-side
                    </div>
<div className="flex items-center gap-2 text-[10px] text-[#e8e8e8]">
<iconify-icon className="text-[#52525b]" icon="solar:eye-closed-linear"></iconify-icon>
                      Prompts hidden from client
                    </div>
</div>

<div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full w-20 text-right pr-3">
<span className="text-[9px] uppercase tracking-widest text-[#52525b] block mb-1">
                      Policies
                    </span>
<div className="text-[9px] text-[#a1a1aa] leading-tight">
                      Guardrails enforced
                    </div>
<div className="text-[9px] text-[#a1a1aa] leading-tight mt-1">
                      Access controlled
                    </div>
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full w-20 text-left pl-3">
<span className="text-[9px] uppercase tracking-widest text-[#52525b] block mb-1">
                      Audit
                    </span>
<div className="text-[9px] text-[#a1a1aa] leading-tight">
                      Logging enabled
                    </div>
</div>
</div>

<div className="mt-auto pt-4 border-t border-[#242424] flex items-center justify-between">
<div className="flex gap-1">
<div className="h-1 w-6 rounded-full bg-[#6366f1] shadow-[0_0_5px_#6366f1]"></div>
<div className="h-1 w-6 rounded-full bg-[#6366f1] shadow-[0_0_5px_#6366f1]"></div>
</div>
<div className="text-[9px] font-mono text-[#6366f1] uppercase tracking-wide flex items-center gap-2">
<span>IP Protected</span>
<span className="w-1 h-1 rounded-full bg-[#6366f1]"></span>
<span>Policies Active</span>
</div>
</div>
</div>

<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-0 translate-y-8 pointer-events-none z-0" id="pipeline-visual-2">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-[#242424]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#e8e8e8]" icon="solar:rocket-bold-duotone"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-[#e8e8e8]">
                      Deployment
                    </span>
</div>
<span className="text-[10px] font-mono text-[#52525b]">
                    03 / 03
                  </span>
</div>

<div className="flex-1 flex flex-col gap-5">

<div>
<span className="text-[9px] uppercase tracking-widest text-[#52525b] mb-2 block">
                      Target
                    </span>
<div className="flex gap-2">
<div className="flex-1 bg-[#18181b] border border-[#6366f1] p-2.5 rounded text-center shadow-[0_0_15px_rgba(99,102,241,0.15)]">
<iconify-icon className="text-[#e8e8e8] text-sm mb-1" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span className="text-[10px] text-[#e8e8e8] font-bold block">
                          Web App
                        </span>
</div>
<div className="flex-1 bg-[#0b0b0b] border border-[#242424] p-2.5 rounded text-center opacity-60">
<iconify-icon className="text-[#a1a1aa] text-sm mb-1" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-[10px] text-[#a1a1aa] block">
                          API Endpoint
                        </span>
</div>
</div>
</div>

<div>
<span className="text-[9px] uppercase tracking-widest text-[#52525b] mb-2 block">
                      Configuration
                    </span>
<div className="space-y-2.5 bg-[#131313]/50 p-3 rounded border border-[#242424]">
<div className="flex items-center gap-2 text-[10px] text-[#a1a1aa]">
<iconify-icon className="text-[#6366f1]" icon="solar:check-square-bold"></iconify-icon>
                        Public interface defined
                      </div>
<div className="flex items-center gap-2 text-[10px] text-[#a1a1aa]">
<iconify-icon className="text-[#6366f1]" icon="solar:check-square-bold"></iconify-icon>
                        Usage metered
                      </div>
<div className="flex items-center gap-2 text-[10px] text-[#a1a1aa]">
<iconify-icon className="text-[#6366f1]" icon="solar:check-square-bold"></iconify-icon>
                        Access keys issued
                      </div>
</div>
</div>
</div>

<div className="mt-auto pt-4 border-t border-[#242424]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-bold text-[#e8e8e8] uppercase tracking-wide">
                      Launch Status
                    </span>
<span className="flex items-center gap-1 text-[9px] text-[#e8e8e8] bg-[#10b981]/10 px-1.5 py-0.5 rounded border border-[#10b981]/20 shadow-[0_0_5px_rgba(16,185,129,0.2)]">
<span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                      System Live
                    </span>
</div>
<div className="h-1 w-full bg-[#242424] rounded-full overflow-hidden">
<div className="h-full bg-[#6366f1] w-full shadow-[0_0_10px_#6366f1]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="section section--main section-divider py-28 md:py-36">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 animate-on-scroll">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-1 h-1 rounded-full bg-[#6366f1]"></div>
<span className="text-[11px] font-medium font-mono uppercase tracking-[0.2em] text-[#71717a]">
              Intended Users
            </span>
<div className="w-1 h-1 rounded-full bg-[#6366f1]"></div>
</div>
<h2 className="text-4xl md:text-6xl font-display text-[#e8e8e8] uppercase tracking-tighter leading-[0.95] mb-6">
            Built For
            <span className="text-[#6366f1]">→ Builders</span>
</h2>
<p className="text-base text-[#a1a1aa] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            Buildr isn't a collection of prompts; it's an operating system
            designed to adapt. Whether you're shipping products, managing
            clients, or selling expertise, our infrastructure transforms your
            logic into a scalable asset.
          </p>
<div className="flex flex-col items-center gap-6">
<p className="text-xs text-[#52525b] font-medium tracking-widest uppercase">
              Built for builders who ship systems, not demos.
            </p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-2.5 py-1 rounded border border-[#242424] bg-[#131313] text-[10px] text-[#71717a] font-mono uppercase tracking-wide">
                Reusable logic
              </span>
<span className="px-2.5 py-1 rounded border border-[#242424] bg-[#131313] text-[10px] text-[#71717a] font-mono uppercase tracking-wide">
                Protected IP
              </span>
<span className="px-2.5 py-1 rounded border border-[#242424] bg-[#131313] text-[10px] text-[#71717a] font-mono uppercase tracking-wide">
                Deployable outputs
              </span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">

<div className="group relative flex flex-col p-8 rounded-2xl bg-[#131313] border border-[#242424] shadow-[0_0_30px_rgba(99,102,241,0.05)] hover:border-[#6366f1]/40 transition-all duration-300 h-full overflow-hidden animate-on-scroll">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent opacity-60"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#e8e8e8] border-b border-[#6366f1] pb-0.5">
                SaaS Founder
              </span>
<span className="text-[10px] font-mono text-[#52525b]">01</span>
</div>
<h3 className="text-xl text-[#e8e8e8] font-display uppercase tracking-tight mb-3">
              Lead Engines
            </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8 flex-1">
              Create free tools like "ROI Calculators" or "Audit Generators" to
              capture emails and qualify leads automatically.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#e8e8e8] hover:text-[#6366f1] transition-colors" href="#">
                View Blueprint
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative flex flex-col p-8 rounded-2xl bg-[#0b0b0b] border border-[#242424] hover:border-[#3f3f46] transition-all duration-300 h-full overflow-hidden animate-on-scroll">
<div className="absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-[#242424] group-hover:border-[#52525b] transition-colors"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#52525b] group-hover:text-[#a1a1aa] transition-colors">
                Agency Operator
              </span>
<span className="text-[10px] font-mono text-[#52525b]">02</span>
</div>
<h3 className="text-xl text-[#e8e8e8] font-display uppercase tracking-tight mb-3">
              Client Deliverables
            </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8 flex-1">
              Systematize internal SEO, copy, or design reviews. Ensure
              consistent quality across all client accounts.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#52525b] group-hover:text-[#e8e8e8] transition-colors" href="#">
                See Configuration
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative flex flex-col p-8 rounded-2xl bg-[#0b0b0b] border border-[#242424] hover:border-[#3f3f46] transition-all duration-300 h-full overflow-hidden animate-on-scroll">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-[#242424] group-hover:bg-[#3f3f46] transition-colors"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#52525b] group-hover:text-[#a1a1aa] transition-colors">
                Consultant
              </span>
<span className="text-[10px] font-mono text-[#52525b]">03</span>
</div>
<h3 className="text-xl text-[#e8e8e8] font-display uppercase tracking-tight mb-3">
              Advisory Systems
            </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8 flex-1">
              Package your specific expertise into a paid diagnostic tool. Sell
              your brain, not just your time.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#52525b] group-hover:text-[#e8e8e8] transition-colors" href="#">
                View Output
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-y border-[#242424] bg-[#0b0b0b]/30 mb-20 animate-on-scroll">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
<div className="flex gap-4 items-start">
<span className="font-mono text-[10px] text-[#52525b] border border-[#242424] px-1.5 py-0.5 rounded">
                01
              </span>
<div>
<h4 className="text-[11px] font-bold uppercase tracking-wide text-[#e8e8e8] mb-1">
                  No blank canvas
                </h4>
<p className="text-[11px] text-[#a1a1aa] font-light">
                  Start from structured inputs
                </p>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-[#242424]"></div>
<div className="flex gap-4 items-start">
<span className="font-mono text-[10px] text-[#52525b] border border-[#242424] px-1.5 py-0.5 rounded">
                02
              </span>
<div>
<h4 className="text-[11px] font-bold uppercase tracking-wide text-[#e8e8e8] mb-1">
                  Protected logic
                </h4>
<p className="text-[11px] text-[#a1a1aa] font-light">
                  IP stays server-side
                </p>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-[#242424]"></div>
<div className="flex gap-4 items-start">
<span className="font-mono text-[10px] text-[#52525b] border border-[#242424] px-1.5 py-0.5 rounded">
                03
              </span>
<div>
<h4 className="text-[11px] font-bold uppercase tracking-wide text-[#e8e8e8] mb-1">
                  Ship surfaces
                </h4>
<p className="text-[11px] text-[#a1a1aa] font-light">
                  Outputs become products
                </p>
</div>
</div>
</div>
</div>
<div className="text-center mb-12">
<p className="text-xs font-mono text-[#52525b] uppercase tracking-widest">
            Same system. Two perspectives: build it once, ship it everywhere.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#242424] rounded-2xl overflow-hidden bg-[#131313] shadow-2xl animate-on-scroll">
<div className="p-8 lg:p-12 relative flex flex-col justify-between group border-b lg:border-b-0 lg:border-r border-[#242424]">
<div className="absolute top-6 left-6 z-10">
<span className="text-[10px] font-semibold uppercase tracking-widest text-[#6366f1] border border-[#6366f1]/20 px-2 py-1 rounded bg-[#6366f1]/5">
                Creator View
              </span>
</div>
<div className="mt-12 space-y-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500 mb-16">
<div className="font-mono text-xs text-[#71717a] leading-loose">
<div className="flex gap-4">
<span className="text-[#6366f1]">const</span>
<span className="text-[#e8e8e8]">workflow</span>
                  = {
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[#e8e8e8]">inputs</span>
                  :
                  <span className="text-[#9f9a92]">['business_type', 'goal']</span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[#e8e8e8]">model</span>
                  :
                  <span className="text-[#6366f1]">Types.Model.CLAUDE_3_5</span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[#e8e8e8]">temperature</span>
                  :
                  <span className="text-[#6366f1]">0.2</span>
</div>
<div className="flex gap-4">};</div>
</div>
</div>
<div>
<h3 className="text-xl text-[#e8e8e8] font-display uppercase tracking-tight mb-2">
                Total Control
              </h3>
<p className="text-sm text-[#a1a1aa] leading-relaxed max-w-sm">
                You define the variables, the model parameters, and the cost.
                The backend complexity is yours to manage.
              </p>
</div>
</div>
<div className="p-8 lg:p-12 relative bg-[#18181b] flex flex-col justify-between group">
<div className="absolute top-6 left-6 z-10">
<span className="text-[10px] font-semibold uppercase tracking-widest text-[#52525b] border border-[#242424] px-2 py-1 rounded bg-[#131313]">
                User View
              </span>
</div>
<div className="mt-12 mb-16 relative flex justify-center items-center">
<div className="bg-[#131313] border border-[#242424] rounded-lg shadow-lg transform group-hover:-translate-y-1 transition-transform duration-500 w-full max-w-xs overflow-hidden">
<div className="h-8 bg-[#0b0b0b] border-b border-[#242424] flex items-center px-3 justify-between">
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[#242424]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#242424]"></div>
</div>
<div className="h-1 w-8 bg-[#242424] rounded-full"></div>
</div>
<div className="p-5 space-y-3">
<div>
<label className="block text-[9px] text-[#71717a] uppercase tracking-wider mb-1.5">
                      Business Type
                    </label>
<div className="h-7 w-full bg-[#0b0b0b] border border-[#242424] rounded px-2 flex items-center">
<span className="text-[10px] text-[#e8e8e8]">
                        SaaS Platform
                      </span>
</div>
</div>
<div>
<label className="block text-[9px] text-[#71717a] uppercase tracking-wider mb-1.5">
                      Goal
                    </label>
<div className="h-7 w-full bg-[#0b0b0b] border border-[#242424] rounded px-2 flex items-center">
<span className="text-[10px] text-[#e8e8e8]">
                        Increase retention
                      </span>
</div>
</div>
<div className="w-full h-7 bg-[#e8e8e8] rounded flex items-center justify-center mt-2 cursor-pointer hover:bg-white transition-colors">
<span className="text-[9px] font-bold uppercase text-[#0b0b0b] tracking-wide">
                      Generate Report
                    </span>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xl text-[#e8e8e8] font-display uppercase tracking-tight mb-2">
                Radical Simplicity
              </h3>
<p className="text-sm text-[#a1a1aa] leading-relaxed max-w-sm">
                Your customers don't see prompts. They see a clean, professional
                interface that solves their problem instantly.
              </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[10px] font-mono text-[#52525b] uppercase tracking-[0.2em] opacity-80">
            Different builders. Different paths. One underlying system.
          </p>
</div>
</div>
</section>


<section className="section section--surface section-divider py-24 md:py-32">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<span className="font-mono text-[10px] uppercase tracking-widest text-[#71717a] mb-3 block">
              // Outcomes
            </span>
<h2 className="text-3xl md:text-5xl font-display text-[#e8e8e8] uppercase tracking-tighter leading-none mb-4">
              USE CASES
              <br/>
<span className="text-[#6366f1]">→ OUTCOMES</span>
</h2>
<p className="text-sm text-[#a1a1aa] leading-relaxed font-light">
              Shift from fragile prompts to durable assets. Buildr transforms
              raw logic into scalable, secure, and revenue-generating products.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden bg-[#242424] border border-[#242424] rounded-[2rem] shadow-2xl gap-px">

<div className="group bg-[#0b0b0b] hover:bg-[#131313] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[#6366f1]/20 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/60 to-transparent opacity-70"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[#6366f1] mb-4 block">
                // API
              </span>
<h3 className="text-lg font-semibold text-[#e8e8e8] mb-2 tracking-tight">
                Monetized Endpoints
              </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8">
                Turn your unique logic into a metered API business. Charge per
                request, not per hour.
              </p>
</div>
<div className="text-[10px] font-mono text-[#52525b] group-hover:text-[#6366f1] transition-colors flex items-center gap-2">
              Logic → Revenue
            </div>
</div>

<div className="group bg-[#0b0b0b] hover:bg-[#131313] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[#6366f1]/20 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/60 to-transparent opacity-70"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[#6366f1] mb-4 block">
                // EXPERTISE
              </span>
<h3 className="text-lg font-semibold text-[#e8e8e8] mb-2 tracking-tight">
                Advisory Systems
              </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8">
                Package your consulting brain into a diagnostic tool that sells
                your expertise 24/7.
              </p>
</div>
<div className="text-[10px] font-mono text-[#52525b] group-hover:text-[#6366f1] transition-colors flex items-center gap-2">
              Time → Scale
            </div>
</div>

<div className="group bg-[#0b0b0b] hover:bg-[#131313] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[#6366f1]/20 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/60 to-transparent opacity-70"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[#6366f1] mb-4 block">
                // GROWTH
              </span>
<h3 className="text-lg font-semibold text-[#e8e8e8] mb-2 tracking-tight">
                Lead Engines
              </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8">
                Deploy free tools that capture, qualify, and route leads
                automatically.
              </p>
</div>
<div className="text-[10px] font-mono text-[#52525b] group-hover:text-[#6366f1] transition-colors flex items-center gap-2">
              Traffic → Pipeline
            </div>
</div>

<div className="group bg-[#0b0b0b] hover:bg-[#131313] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[#6366f1]/20 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-4 block">
                // INTERNAL
              </span>
<h3 className="text-lg font-semibold text-[#e8e8e8] mb-2 tracking-tight">
                Internal Workflows
              </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8">
                Replace scattered ChatGPT threads with a unified, secure system
                for your team.
              </p>
</div>
<div className="text-[10px] font-mono text-[#52525b] group-hover:text-[#71717a] transition-colors">
              Chat → System
            </div>
</div>

<div className="group bg-[#0b0b0b] hover:bg-[#131313] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[#6366f1]/20 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-4 block">
                // CLIENT
              </span>
<h3 className="text-lg font-semibold text-[#e8e8e8] mb-2 tracking-tight">
                White-Labeled Products
              </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8">
                Deliver custom AI tools to clients without handing over your
                source prompts.
              </p>
</div>
<div className="text-[10px] font-mono text-[#52525b] group-hover:text-[#71717a] transition-colors">
              Service → Asset
            </div>
</div>

<div className="group bg-[#0b0b0b] hover:bg-[#131313] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[#6366f1]/20 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-4 block">
                // OPS
              </span>
<h3 className="text-lg font-semibold text-[#e8e8e8] mb-2 tracking-tight">
                Operational Backbones
              </h3>
<p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8">
                Codify manual SOPs into intelligent agents that run without
                supervision.
              </p>
</div>
<div className="text-[10px] font-mono text-[#52525b] group-hover:text-[#71717a] transition-colors">
              Manual → Automated
            </div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[11px] font-mono text-[#52525b] tracking-widest uppercase opacity-80">
            All of these outcomes are powered by the same underlying system.
          </p>
</div>
</div>
</section>


<section className="section section--main section-divider py-32">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">

<div className="mb-20 max-w-4xl mx-auto text-center">
<div className="flex items-center gap-3 mb-6 justify-center animate-on-scroll">
<span className="text-[10px] font-mono uppercase tracking-widest text-[#52525b]">
              Architecture :: Core
            </span>
<div className="h-px w-8 bg-[#242424]"></div>
<span className="text-[10px] font-mono text-[#52525b]">
              System Guarantees
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-[#e8e8e8] uppercase tracking-tighter leading-[0.9] mb-6 animate-on-scroll">
            Immutable Core.
            <br/>
<span className="text-[#6366f1]">Infinite Scale.</span>
</h2>
<p className="text-base text-[#a1a1aa] font-light leading-relaxed mb-10 max-w-2xl mx-auto animate-on-scroll">
            Outcomes compound because the architecture is stable. Buildr
            provides a single, encrypted layer that validates inputs, protects
            logic, and governs execution across every product you ship.
          </p>

<div className="flex flex-wrap items-center gap-8 border-t border-[#242424] pt-6 justify-center animate-on-scroll">
<div>
<div className="text-lg font-semibold text-[#e8e8e8] tracking-tight">
                100%
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[#52525b] mt-1">
                Typed Schema
              </div>
</div>
<div className="w-px h-8 bg-[#242424]"></div>
<div>
<div className="text-lg font-semibold text-[#e8e8e8] tracking-tight">
                AES-256
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[#52525b] mt-1">
                Logic Encryption
              </div>
</div>
<div className="w-px h-8 bg-[#242424]"></div>
<div>
<div className="text-lg font-semibold text-[#e8e8e8] tracking-tight">
                0ms
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[#52525b] mt-1">
                Added Latency
              </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">

<div className="group bg-[#131313] border border-[#242424] p-6 rounded-2xl relative overflow-hidden hover:border-[#3f3f46] transition-all duration-300">
<div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-3xl text-[#52525b]" icon="solar:hashtag-square-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[#52525b] block mb-4 border-b border-[#242424] pb-2 w-max">
              Layer: Structure
            </span>
<h3 className="text-base font-semibold text-[#e8e8e8] mb-2">
              Schema Enforcement
            </h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed mb-8 font-light">
              Every input is typed and validated against strict definitions
              before processing.
            </p>
<div className="mt-auto flex justify-between items-end">
<span className="text-[9px] font-mono text-[#52525b] bg-[#0b0b0b] px-1.5 py-0.5 rounded border border-[#242424]">
                Ad-hoc → Defined
              </span>
</div>
</div>

<div className="group bg-[#18181b] border border-[#242424] p-6 rounded-2xl relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-[#6366f1]/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/5 to-transparent opacity-40 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-5 opacity-100">
<iconify-icon className="text-3xl text-[#6366f1]" icon="solar:lock-keyhole-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[#6366f1] block mb-4 border-b border-[#6366f1]/20 pb-2 w-max relative z-10">
              Layer: Encapsulation
            </span>
<h3 className="text-base font-semibold text-[#e8e8e8] mb-2 relative z-10">
              Logic Protection
            </h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed mb-8 font-light relative z-10">
              IP stays server-side. Prompts and logic are never exposed to the
              client.
            </p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-[9px] font-mono text-[#a1a1aa] bg-[#0b0b0b] px-1.5 py-0.5 rounded border border-[#242424]">
                Prompts → Protected
              </span>
</div>
</div>

<div className="group bg-[#131313] border border-[#242424] p-6 rounded-2xl relative overflow-hidden hover:border-[#3f3f46] transition-all duration-300">
<div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-3xl text-[#52525b]" icon="solar:settings-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[#52525b] block mb-4 border-b border-[#242424] pb-2 w-max">
              Layer: Governance
            </span>
<h3 className="text-base font-semibold text-[#e8e8e8] mb-2">
              Policy Control
            </h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed mb-8 font-light">
              Centralized constraints on cost, rate limits, and safety for every
              request.
            </p>
<div className="mt-auto flex justify-between items-end">
<span className="text-[9px] font-mono text-[#52525b] bg-[#0b0b0b] px-1.5 py-0.5 rounded border border-[#242424]">
                Variance → Predictable
              </span>
</div>
</div>

<div className="group bg-[#18181b] border border-[#242424] p-6 rounded-2xl relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-[#6366f1]/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/5 to-transparent opacity-40 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-5 opacity-100">
<iconify-icon className="text-3xl text-[#6366f1]" icon="solar:rocket-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[#6366f1] block mb-4 border-b border-[#6366f1]/20 pb-2 w-max relative z-10">
              Layer: Deployment
            </span>
<h3 className="text-base font-semibold text-[#e8e8e8] mb-2 relative z-10">
              Unified Interface
            </h3>
<p className="text-xs text-[#a1a1aa] leading-relaxed mb-8 font-light relative z-10">
              One core serves APIs, internal tools, and apps simultaneously.
            </p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-[9px] font-mono text-[#a1a1aa] bg-[#0b0b0b] px-1.5 py-0.5 rounded border border-[#242424]">
                Logic → Product
              </span>
</div>
</div>
</div>

<div className="mt-20 border-t border-[#242424] pt-8 text-center animate-on-scroll">
<p className="text-[10px] font-mono text-[#52525b] uppercase tracking-[0.2em]">
            This is the system that makes every outcome repeatable.
          </p>
</div>
</div>
</section>


<section className="section section--surface section-divider py-40">
<div className="spotlight"></div>
<div className="section-content max-w-3xl mx-auto px-6 relative z-10">
<div className="relative rounded-3xl border border-[#242424] bg-[#0b0b0b]/40 backdrop-blur-sm p-8 md:p-14 text-center overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent"></div>
<h2 className="text-4xl md:text-6xl font-display text-[#e8e8e8] mb-6 uppercase tracking-tighter leading-[0.95]">
            CREATOR ACCESS
            <br/>
<span className="text-[#6366f1]">→ UNLOCKED</span>
</h2>
<p className="text-sm md:text-base text-[#a1a1aa] mb-10 max-w-lg mx-auto leading-relaxed font-light">
            Turn fragile prompts into protected, deployable systems your users
            can trust.
          </p>

<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[#6366f1]"></div>
<span className="text-[11px] text-[#e8e8e8] font-mono tracking-wide">
                Protected Logic
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[#6366f1]"></div>
<span className="text-[11px] text-[#e8e8e8] font-mono tracking-wide">
                Deploy as App or API
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[#6366f1]"></div>
<span className="text-[11px] text-[#e8e8e8] font-mono tracking-wide">
                Governed Policies
              </span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
<input className="w-full sm:w-72 bg-[#0b0b0b] border border-[#242424] rounded px-4 py-3.5 text-sm text-[#e8e8e8] placeholder-[#52525b] focus:outline-none focus:border-[#6366f1] transition-colors shadow-inner" placeholder="Enter your email" type="email"/>
<button className="w-full sm:w-auto px-10 py-3.5 bg-[#e8e8e8] text-[#0b0b0b] text-sm font-semibold rounded tracking-tight hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
              Become a Creator
            </button>
</div>

<div className="mb-10">
<a className="inline-flex items-center gap-1.5 text-[11px] text-[#52525b] hover:text-[#e8e8e8] transition-colors group border-b border-transparent hover:border-[#52525b] pb-0.5" href="#">
              Or explore the system
              <iconify-icon className="text-xs text-[#52525b] group-hover:text-[#e8e8e8] transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex flex-col items-center gap-5">
<div className="space-y-1.5">
<p className="text-[10px] text-[#71717a] font-medium">
                Next: we’ll email access details and onboarding steps.
              </p>
<p className="text-[10px] text-[#52525b] opacity-60">
                No spam. Your email stays private.
              </p>
</div>
<div className="flex items-center gap-3">
<span className="px-2.5 py-1 rounded border border-[#242424] bg-[#0b0b0b]/30 text-[9px] font-mono uppercase tracking-widest text-[#52525b]">
                Limited Onboarding
              </span>
<span className="px-2.5 py-1 rounded border border-[#242424] bg-[#0b0b0b]/30 text-[9px] font-mono uppercase tracking-widest text-[#52525b]">
                Access Reviewed
              </span>
</div>
</div>
</div>
</div>
</section>


<footer className="py-12 border-t border-[#242424] bg-[#0b0b0b]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-10">
<span className="text-[#e8e8e8] font-display text-lg uppercase tracking-tighter">
              Buildr
            </span>
<div className="flex gap-6">
<a className="text-xs font-normal text-[#a1a1aa] hover:text-[#e8e8e8] transition-colors" href="#">
                Twitter
              </a>
<a className="text-xs font-normal text-[#a1a1aa] hover:text-[#e8e8e8] transition-colors" href="#">
                GitHub
              </a>
<a className="text-xs font-normal text-[#a1a1aa] hover:text-[#e8e8e8] transition-colors" href="#">
                Status
              </a>
</div>
</div>
<div className="text-[11px] font-medium text-[#52525b] uppercase tracking-widest">
            © 2024 Buildr Systems
          </div>
</div>
</div>
</footer>








    </>
  );
}
