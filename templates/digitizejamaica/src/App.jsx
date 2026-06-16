import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function () {
          if (!window.UnicornStudio) {
            var s = document.createElement("script");
            s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
            s.async = true;
            s.onload = function () {
              if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
                UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
              }
            };
            (document.head || document.body).appendChild(s);
          } else if (!window.UnicornStudio.isInitialized) {
            UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        })();
      


      // Scroll animations
      document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
          observer.observe(el);
        });
        
        document.querySelectorAll(".scroll-fade").forEach((el) => {
          observer.observe(el);
        });

        // Spotlight effect
        document.querySelectorAll(".group").forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--x", `${x}px`);
                card.style.setProperty("--y", `${y}px`);
            });
        });
      });

      // Tab logic
      const tabs = document.querySelectorAll('.pb-tab');
      const title = document.getElementById('pb-title');
      const tagline = document.getElementById('pb-tagline');
      const p1 = document.getElementById('pb-p1');
      const p2 = document.getElementById('pb-p2');

      const content = {
        capture: {
          title: "Lead Capture",
          tagline: "CONVERT VISITORS INTO CUSTOMERS.",
          p1: "Automatically pipe leads from your website builder directly into your CRM. No manual entry required.",
          p2: "Score leads based on engagement and assign high-value prospects to your best sales reps instantly."
        },
        pipeline: {
          title: "Pipeline Management",
          tagline: "VISUALIZE YOUR SALES PROCESS.",
          p1: "Drag and drop deals through your pipeline stages. AI predicts close probability and suggests next steps.",
          p2: "Never let a deal slip through the cracks with automated reminders and inactivity alerts."
        },
        booking: {
          title: "Auto-Booking",
          tagline: "ELIMINATE SCHEDULING FRICTION.",
          p1: "Share your calendar link and let prospects book time directly. Syncs with Google, Outlook, and iCloud.",
          p2: "Send automated confirmations and reminders to reduce no-show rates by up to 40%."
        }
      };

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Remove active state from all
          tabs.forEach(t => {
             t.classList.remove('bg-white/[0.06]', 'text-white', 'ring-1', 'ring-white/20');
             t.classList.add('bg-white/[0.04]', 'text-zinc-300');
          });

          // Add active state to clicked
          tab.classList.remove('bg-white/[0.04]', 'text-zinc-300');
          tab.classList.add('bg-white/[0.06]', 'text-white', 'ring-1', 'ring-white/20');

          // Update content
          const key = tab.getAttribute('data-key');
          const data = content[key];
          
          title.innerText = data.title;
          tagline.innerText = data.tagline;
          p1.innerText = data.p1;
          p2.innerText = data.p2;
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="58" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)'}}>
<div className="absolute inset-0" data-us-project="VaqT3bxlc2sugR8faApF"></div>

</div>

<header className="sticky z-30 top-0 [animation:fadeSlideIn_0.8s_ease-out_0s_both]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="supports-[backdrop-filter]:bg-black/30 border-white/10 border rounded-2xl mt-4 backdrop-blur">
<div className="flex sm:pl-3 sm:pr-3 bg-[#000000] border-[#ffffff]/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 items-center justify-between">
<div className="flex items-center gap-3">

<a className="flex items-center gap-2 group" href="#">
<span className="text-xl font-semibold tracking-tight text-white">DIGITIZE AI</span>
</a>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#">
                Marketing
              </a>
<a className="hover:text-white transition-colors" href="#crm">
                CRM &amp; Sales
              </a>
<a className="hover:text-white transition-colors" href="#services">
                Services
              </a>
<a className="hover:text-white transition-colors" href="#pricing">
                Pricing
              </a>
</nav>
<div className="flex gap-3 items-center justify-center">
<a className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-white hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] text-sm font-medium text-white/90 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md ring-0 pt-3 pr-5 pb-3 pl-5 shadow-[0_0_15px_rgba(59,130,246,0.15)]" href="#" onclick="toggleOnboarding(true); return false;" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
                Get Started
                <svg className="lucide lucide-arrow-right stroke-[1.5]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="sm:px-6 sm:pt-24 sm:pb-28 lg:pr-8 lg:pt-40 lg:pl-8 lg:pb-0 max-w-7xl mt-4 mr-auto ml-auto pt-16 pr-8 pb-20 pl-8">

<div className="pointer-events-none select-none relative">

<span className="float-cursor -top-12 sm:-top-16 float-chip-1 -translate-x-1/2 absolute left-[55%] -translate-y-8">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                New Lead: +$2,400
              </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>

<span className="float-cursor hidden md:block float-chip-2 absolute top-12 right-[2%] translate-x-8 translate-y-12">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                SEO Score: 98/100
              </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>

<span className="float-cursor absolute left-[10%] bottom-6 hidden sm:block float-chip-3">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                Invoice Paid: #4022
              </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>
</div>

<div className="text-center">
<h1 className="sm:text-6xl md:text-7xl text-4xl font-semibold text-white tracking-tight max-w-5xl mr-auto ml-auto">
<span className="text-white/95">Run your entire business.</span>
<span className="inline-block relative">
<span className="absolute -inset-1 rounded-md blur-2xl bg-blue-500/30"></span>
<span className="relative">
<span className="z-10 relative">
<span className="inline-block relative">
<span className="-inset-1 [--fx-filter:blur(20px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] bg-gradient-to-br from-white/0 via-white/10 to-white/0 rounded-md ring-blue-400/70 ring-2 absolute"></span>
<span className="px-2">One Platform</span>
</span>
</span>
</span>
</span>
</h1>
<p className="leading-relaxed text-lg text-slate-300 max-w-5xl mt-6 mx-auto">
              Marketing, CRM, SEO, Invoicing, and Support—all done by AI. It's
              like having 8 employees for as low as $0/month. Replace HubSpot,
              Salesforce, Zendesk, and your entire tech stack with autonomous
              agents.
            </p>

<div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center">
<a className="btn-wrapper" href="#" onclick="toggleOnboarding(true); return false;" style={{-DotSize: '8px', -LineWeight: '1px', -LineDistance: '0.8rem 1rem', -AnimationSpeed: '0.35s', -DotColor: '#fffa', -LineColor: '#fffa', -GridColor: '#fff3', position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: 'auto', height: 'auto', padding: 'var(--line-distance)', backgroundColor: 'rgba(0, 0, 0, 0)', userSelect: 'none'}}>
<style>
                  .btn-wrapper::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: inherit; pointer-events: none; background-color: #0000; background-image: repeating-linear-gradient(45deg, var(--grid-color) 0 1px, transparent 2px 5px); opacity: 0; z-index: -1; } .btn-wrapper:has(.btn:hover)::after { animation: opacity-anim calc(var(--animation-speed) * 4) ease-in-out forwards; } @keyframes opacity-anim { 80% { opacity: 0; } 100% { opacity: 1; } } .btn-wrapper .btn { position: relative; display: flex; justify-content: center; align-items: center; padding: 0.8rem 1.25rem; background-color: #ffffff; border: 1px solid #ffffff; color: #09090b; font-family: "Inter", sans-serif; letter-spacing: -0.01em; font-size: 1rem; font-weight: 600; text-transform: capitalize; border-radius: 6px; cursor: pointer; transition: all .2s ease-in-out; } .btn-wrapper .btn:hover { background-color: #25358b; color: #ffffff; transform: scale(1.05); letter-spacing: .06em; border-color: #25358b; } .btn-wrapper .btn:active { background-color: #1e2b70; transform: scale(.98); letter-spacing: .02em; } .btn-wrapper .dot { position: absolute; width: var(--dot-size); aspect-ratio: 1; border-radius: 2px; background-color: var(--dot-color); transition: all .3s ease-in-out; opacity: 0; } .btn-wrapper:has(.btn:hover) .dot.top.left { top: 50%; left: 20%; animation: move-top-left var(--animation-speed) ease-in-out forwards; } @keyframes move-top-left { 100% { top: calc(var(--dot-size) * -0.5); left: calc(var(--dot-size) * -0.5); opacity: 1; } } .btn-wrapper:has(.btn:hover) .dot.top.right { top: 50%; right: 20%; animation: move-top-right var(--animation-speed) ease-in-out forwards; animation-delay: calc(var(--animation-speed)*.6); } @keyframes move-top-right { 100% { top: calc(var(--dot-size) * -0.5); right: calc(var(--dot-size) * -0.5); opacity: 1; } } .btn-wrapper:has(.btn:hover) .dot.bottom.right { bottom: 50%; right: 20%; animation: move-bottom-right var(--animation-speed) ease-in-out forwards; animation-delay: calc(var(--animation-speed)*1.2); } @keyframes move-bottom-right { 100% { bottom: calc(var(--dot-size) * -0.5); right: calc(var(--dot-size) * -0.5); opacity: 1; } } .btn-wrapper:has(.btn:hover) .dot.bottom.left { bottom: 50%; left: 20%; animation: move-bottom-left var(--animation-speed) ease-in-out forwards; animation-delay: calc(var(--animation-speed)*1.8); } @keyframes move-bottom-left { 100% { bottom: calc(var(--dot-size) * -0.5); left: calc(var(--dot-size) * -0.5); opacity: 1; } } .btn-wrapper .line { position: absolute; transition: all .3s ease-in-out; } .btn-wrapper .line.horizontal { height: var(--line-weight); width: 100%; background-image: repeating-linear-gradient(90deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4)); } .btn-wrapper .line.vertical { width: var(--line-weight); height: 100%; background-image: repeating-linear-gradient(0deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4)); }
                </style>
<div className="line horizontal top"></div>
<div className="line vertical right"></div>
<div className="line horizontal bottom"></div>
<div className="line vertical left"></div>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<button className="btn bg-[#ffffff]">
<span className="btn-text">Get Started</span>
</button>
</a>
<a className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-white text-base font-medium text-white/90 bg-white/5 rounded-md pt-3 pr-5 pb-3 pl-5 border border-white/10 hover:bg-white/10" href="#services">
                How it works
              </a>
</div>
<p className="mt-6 text-sm text-slate-400 font-medium">
              No credit card needed to get started
            </p>

<div className="overflow-hidden w-full border-white/10 border rounded-2xl mt-24 mb-24 relative shadow-2xl backdrop-blur-xl bg-black/40">

<div className="flex border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
<div className="text-xs text-slate-400 font-medium">
                  Digitize AI Business OS
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">

<aside className="hidden md:block md:col-span-2 bg-black/30 border-white/10 border-r pt-4 pr-3 pb-3 pl-3">
<div className="space-y-1">

<div className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-500/10 text-blue-400 font-medium text-xs">
<svg className="lucide lucide-megaphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m3 11 18-5v12L3 14v-3z"></path>
<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
</svg>
                      Marketing
                    </div>

<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs transition">
<svg className="lucide lucide-users-round" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
                      Lead Gen
                    </div>

<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs transition">
<svg className="lucide lucide-search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
                      SEO Hub
                    </div>

<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs transition">
<svg className="lucide lucide-contact" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<circle cx="12" cy="10" r="2"></circle>
<line x1="8" x2="8" y1="2" y2="4"></line>
<line x1="16" x2="16" y1="2" y2="4"></line>
</svg>
                      CRM
                    </div>

<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs transition">
<svg className="lucide lucide-receipt" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2 1-2 1Z"></path>
<path d="M14 8H8"></path>
<path d="M16 12H8"></path>
<path d="M13 16H8"></path>
</svg>
                      Invoicing
                    </div>

<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs transition">
<svg className="lucide lucide-calendar-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="m9 16 2 2 4-4"></path>
</svg>
                      Booking
                    </div>

<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs transition">
<svg className="lucide lucide-layout-template" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
                      Website Builder
                    </div>

<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs transition">
<svg className="lucide lucide-headset" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path>
<path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
</svg>
                      Support
                    </div>
</div>
</aside>

<main className="md:col-span-7 bg-black/20 relative flex flex-col">

<div className="flex gap-2 text-xs text-slate-300 border-white/10 border-b p-3 items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold text-white">
                        Campaign: Q3 Growth
                      </span>
<div className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px]">
                        Active
                      </div>
</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 bg-white text-black text-xs rounded hover:bg-zinc-200 font-medium">
                        + New Campaign
                      </button>
</div>
</div>

<div className="grid grid-cols-3 gap-3 p-4 border-b border-white/10">
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                        Total Leads
                      </div>
<div className="text-xl font-semibold text-white">1,248</div>
<div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
<svg className="lucide lucide-trending-up" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
                        +12.5%
                      </div>
</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                        Conversion Rate
                      </div>
<div className="text-xl font-semibold text-white">4.8%</div>
<div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
<svg className="lucide lucide-trending-up" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
                        +0.8%
                      </div>
</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                        Ad Spend
                      </div>
<div className="text-xl font-semibold text-white">$842</div>
<div className="text-[10px] text-slate-500 mt-1">
                        Budget: $2k
                      </div>
</div>
</div>

<div className="p-4 flex-1 overflow-auto">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-white">
                        Recent Leads
                      </h3>
<button className="text-xs text-blue-400 hover:text-blue-300">
                        View All
                      </button>
</div>
<div className="space-y-2">

<div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition group cursor-pointer" style={{-X: '443px', -Y: '768.3125px'}}>
<div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">
                          AS
                        </div>
<div className="ml-3 flex-1">
<div className="text-xs font-medium text-white">
                            Acme Solutions
                          </div>
<div className="text-[10px] text-slate-400">
                            Sarah Jenkins • CEO
                          </div>
</div>
<div className="flex flex-col items-end">
<div className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] rounded">
                            Qualified
                          </div>
<div className="text-[10px] text-slate-500 mt-1">
                            2m ago
                          </div>
</div>
</div>

<div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition group cursor-pointer" style={{-X: '443px', -Y: '696.3125px'}}>
<div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                          GT
                        </div>
<div className="ml-3 flex-1">
<div className="text-xs font-medium text-white">
                            Globex Tech
                          </div>
<div className="text-[10px] text-slate-400">
                            Mike Ross • VP Sales
                          </div>
</div>
<div className="flex flex-col items-end">
<div className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-[10px] rounded">
                            Negotiation
                          </div>
<div className="text-[10px] text-slate-500 mt-1">
                            15m ago
                          </div>
</div>
</div>

<div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition group cursor-pointer" style={{-X: '443px', -Y: '624.3125px'}}>
<div className="h-8 w-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-xs">
                          SL
                        </div>
<div className="ml-3 flex-1">
<div className="text-xs font-medium text-white">
                            Stark Labs
                          </div>
<div className="text-[10px] text-slate-400">
                            Tony S. • Founder
                          </div>
</div>
<div className="flex flex-col items-end">
<div className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] rounded">
                            New Lead
                          </div>
<div className="text-[10px] text-slate-500 mt-1">
                            1h ago
                          </div>
</div>
</div>

<div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition group cursor-pointer" style={{-X: '443px', -Y: '552.3125px'}}>
<div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xs">
                          WB
                        </div>
<div className="ml-3 flex-1">
<div className="text-xs font-medium text-white">
                            Wayne Bros
                          </div>
<div className="text-[10px] text-slate-400">
                            Bruce W. • Director
                          </div>
</div>
<div className="flex flex-col items-end">
<div className="px-2 py-0.5 bg-red-500/10 text-red-400 text-[10px] rounded">
                            Unqualified
                          </div>
<div className="text-[10px] text-slate-500 mt-1">
                            3h ago
                          </div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-l p-4">

<div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-white">
                        Pending Invoices
                      </span>
<span className="text-[10px] text-slate-400">View All</span>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-300">#INV-2049</span>
<span className="text-white font-medium">$4,500</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-300">#INV-2050</span>
<span className="text-white font-medium">$1,200</span>
</div>
<div className="w-full bg-white/10 h-px my-2"></div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400">Total Pending</span>
<span className="text-orange-400 font-medium">$5,700</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-white">
                        SEO Health
                      </span>
<span className="text-[10px] text-green-400">Good</span>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Site Speed</span>
<span className="text-white">98/100</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[98%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Backlinks</span>
<span className="text-white">1,402</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[75%]"></div>
</div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 border border-white/10">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-bot text-purple-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<span className="text-xs font-medium text-white">
                        AI Support Agent
                      </span>
</div>
<div className="p-2 bg-black/40 rounded text-[10px] text-slate-300 leading-relaxed italic">
                      "I've just handled a booking request for Tuesday at 2 PM.
                      Calendar updated."
                    </div>
</div>
</aside>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 -z-0 top-24 flex justify-center">
<div className="h-72 w-[80%] max-w-4xl rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:px-8 lg:pt-20 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] max-w-6xl mr-auto ml-auto pt-16 pr-6 pl-6 items-center">
<div className="overflow-hidden sm:px-8 sm:py-10 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-none pt-8 pr-4 pb-8 pl-4 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '0'}}>

<div className="flex border-slate-900 border-b pb-4 gap-x-4 gap-y-4 items-center justify-between">
<span className="text-[11px] uppercase font-medium text-sky-300 tracking-[0.2em]">
            OUR PRODUCT · WORKFLOWS
          </span>
<button className="hidden text-[11px] font-medium text-slate-300 hover:text-slate-50 sm:inline-flex items-center gap-1">
            Read more
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-800/80">
<svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>

<div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
<div className="text-left">
<h2 className="sm:text-3xl lg:text-4xl text-2xl font-semibold text-slate-50 tracking-tight">
  You control the targets. <span className="block text-slate-400">Digitize compounds the growth.</span>
</h2>
</div>
<p className="sm:text-sm md:text-right md:ml-auto text-xs text-slate-300 max-w-md">
            Digitize watches every signal across your stack, 24/7. No
            spreadsheets, no guesswork—just a clear lane from insight to impact.
          </p>
</div>

<div className="grid md:grid-cols-3 mt-10 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6">

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-sm pt-5 pr-5 pb-5 pl-5 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '2px'}}>

<div className="flex items-center justify-between text-[10px] text-slate-400">
<span className="uppercase tracking-[0.16em] text-slate-300">
                ACTIVE SIGNALS
              </span>
<span className="text-slate-500">#1</span>
</div>

<div className="overflow-hidden sm:h-56 bg-center w-full h-52 bg-cover border-0 rounded-2xl mt-4" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/46310446-fa52-4b6b-a02e-ec8293b13acf/0_2.png?w=800&amp'}}></div>

<h3 className="mt-5 text-sm font-medium tracking-tight text-slate-50">
              Stay informed, always.
            </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
              Get instant alerts when usage spikes, risk behavior appears, or
              expansion intent crosses your threshold.
            </p>
<div className="mt-4 flex items-center gap-2 text-[11px] text-slate-300">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-600">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6 9 17l-5-5"></path>
</svg>
</span>
              Automated trading-style alerts for your pipeline.
            </div>
</div>

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-sm pt-5 pr-5 pb-5 pl-5 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '2px'}}>
<div className="flex items-center justify-between text-[10px] text-slate-400">
<span className="uppercase tracking-[0.16em] text-slate-300">
                ADVANCED ENGINE
              </span>
<span className="text-slate-500">#2</span>
</div>
<div className="overflow-hidden sm:h-56 bg-center w-full h-52 bg-cover border-0 rounded-2xl mt-4" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/9342fab6-af2f-477a-93c9-7ec9543783ca/0_1.png?w=800&amp'}}></div>
<h3 className="mt-5 text-sm font-medium tracking-tight text-slate-50">
              AI-powered precision.
            </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
              Let Digitize handle the split-second decisions—so reps and CSMs
              stay focused on conversations, not configuration.
            </p>
<ul className="mt-4 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 bg-sky-400 w-4 rounded-full"></span>
                Real-time health &amp; expansion scoring
              </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-4 rounded-full bg-blue-400"></span>
                SLA-aware task generation
              </li>
</ul>
</div>

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-sm pt-5 pr-5 pb-5 pl-5 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '2px'}}>
<div className="flex items-center justify-between text-[10px] text-slate-400">
<span className="uppercase tracking-[0.16em] text-slate-300">
                REAL-TIME TRIGGERS
              </span>
<span className="text-slate-500">#3</span>
</div>
<div className="overflow-hidden sm:h-56 bg-center w-full h-52 bg-cover border-0 rounded-2xl ring-0 mt-4" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/bad59b7f-e21e-48bd-910b-ca59e24c2644/0_0.png?w=800&amp'}}></div>
<h3 className="mt-5 text-sm font-medium tracking-tight text-slate-50">
              Tailor your experience.
            </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
              Customize triggers, thresholds, and owners to match how your team
              really works—no engineering ticket required.
            </p>
<div className="mt-4 flex items-center gap-2 text-[11px] text-slate-300">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-600">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</span>
              Multi-channel actions: tasks, emails, webhooks, and more.
            </div>
</div>
</div>

<div className="grid gap-4 text-[11px] sm:grid-cols-3 text-slate-400 border-slate-900 border-t mt-8 pt-4 gap-x-4 gap-y-4">
<div className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<p className="">
              Automated workflows keep your revenue motion running—even while
              you sleep.
            </p>
</div>
<div className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-400"></span>
<p className="">
              SOC2-ready, enterprise secure, and live in under 14 days for most
              teams.
            </p>
</div>
<div className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<p className="">
              Trusted by growth teams at 100+ modern B2B companies.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/10 overflow-hidden" id="use-cases">

<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Powering ambition across every industry
          </h2>
<p className="text-slate-400 text-lg">
            Whether you're selling properties, shipping products, or designing
            interfaces, Digitize AI adapts to your specific workflow needs.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-white/20" style={{-X: '649px', -Y: '-901.1875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-center gap-4 relative">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-blue-300 group-hover:text-blue-500/20 group-hover:border-blue-500/20 transition-all duration-300">
<svg className="lucide lucide-home w-6 h-6 stroke-[1.5]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Real Estate Agents
                </h3>
</div>
</div>
</div>

<div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-white/20" style={{-X: '307.671875px', -Y: '-901.1875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-center gap-4 relative">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-indigo-300 group-hover:text-indigo-500/20 group-hover:border-indigo-500/20 transition-all duration-300">
<svg className="lucide lucide-briefcase w-6 h-6 stroke-[1.5]" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Service Providers
                </h3>
</div>
</div>
</div>

<div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-white/20" style={{-X: '-33.6640625px', -Y: '-901.1875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-center gap-4 relative">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-orange-300 group-hover:text-orange-500/20 group-hover:border-orange-500/20 transition-all duration-300">
<svg className="lucide lucide-utensils w-6 h-6 stroke-[1.5]" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Restaurant Owners
                </h3>
</div>
</div>
</div>

<div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-white/20" style={{-X: '649px', -Y: '-1013.1875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-center gap-4 relative">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-purple-300 group-hover:text-purple-500/20 group-hover:border-purple-500/20 transition-all duration-300">
<svg className="lucide lucide-megaphone w-6 h-6 stroke-[1.5]" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Marketing Agency Owners
                </h3>
</div>
</div>
</div>

<div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-white/20" style={{-X: '307.671875px', -Y: '-1013.1875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-center gap-4 relative">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-emerald-300 group-hover:text-emerald-500/20 group-hover:border-emerald-500/20 transition-all duration-300">
<svg className="lucide lucide-shopping-bag w-6 h-6 stroke-[1.5]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  E-commerce Store Owners
                </h3>
</div>
</div>
</div>

<div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-white/20" style={{-X: '-33.6640625px', -Y: '-1013.1875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-center gap-4 relative">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-sky-300 group-hover:text-sky-500/20 group-hover:border-sky-500/20 transition-all duration-300">
<svg className="lucide lucide-plane w-6 h-6 stroke-[1.5]" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Travel Agency Owners
                </h3>
</div>
</div>
</div>

<div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-white/20" style={{-X: '649px', -Y: '-1125.1875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-center gap-4 relative">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-pink-300 group-hover:text-pink-500/20 group-hover:border-pink-500/20 transition-all duration-300">
<svg className="lucide lucide-pen-tool w-6 h-6 stroke-[1.5]" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Freelance Designers &amp; Devs
                </h3>
</div>
</div>
</div>

<div className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-white/20" style={{-X: '307.671875px', -Y: '-1125.1875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-center gap-4 relative">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-yellow-300 group-hover:text-yellow-500/20 group-hover:border-yellow-500/20 transition-all duration-300">
<svg className="lucide lucide-truck w-6 h-6 stroke-[1.5]" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Logistics &amp; Delivery
                </h3>
</div>
</div>
</div>

<div className="group relative p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20 rounded-xl hover:border-white/30 transition-all duration-300" style={{-X: '-33.6640625px', -Y: '-1125.1875px'}}>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="flex items-center justify-center h-full gap-3 relative">
<svg className="lucide lucide-sparkles w-5 h-5 text-indigo-400 fill-indigo-400/20 animate-pulse" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h3 className="text-base font-semibold text-white">
                And everyone in between
              </h3>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative" id="services">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">

<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/6 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

<div className="sm:p-10 flex flex-col pt-6 pr-6 pb-6 pl-6">
<h2 className="sm:text-5xl md:text-5xl text-4xl font-semibold text-white tracking-tight mt-4">
              Your team of 8 AI agents
              <span className="block">ready to work 24/7</span>
</h2>
<p className="md:text-lg text-base text-zinc-300/90 max-w-2xl mt-4">
              From first click to final payment. A complete suite of AI
              employees to manage your entire customer lifecycle automatically.
            </p>
<div className="mt-10 space-y-6">

<section className="group overflow-hidden md:p-6 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative" id="card-marketing" style={{-X: '609px', -Y: '-1739.1875px'}}>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-rocket text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s-1 2.38-1 4z"></path>
<path d="M15 13v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s-2.38 1-4 1z"></path>
</svg>
<span className="font-medium">Marketing Portal</span>
</div>
<div className="space-y-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="text-sm text-white/90 mb-2">Campaign Status</p>
<div className="flex items-center gap-2 text-xs text-white/60 font-mono">
<span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        Sending Email Blast...
                      </div>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
                  AI Marketing Manager
                </h3>
<p className="mt-1.5 text-sm text-white/70">
                  Launch email, social, and ad campaigns with your AI agent. It
                  tracks ROI and optimizes spends instantly.
                </p>
</section>

<section className="group overflow-hidden md:p-6 rounded-3xl ring-white/10 ring-1 pt-5 pr-5 pb-5 pl-5 relative" id="card-seo" style={{-X: '609px', -Y: '-2041.1875px'}}>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-bar-chart-big text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<rect height="7" rx="1" width="4" x="7" y="10"></rect>
<rect height="12" rx="1" width="4" x="15" y="5"></rect>
</svg>
<span className="font-medium">SEO Hub</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="text-xs text-white/60 mb-1">Rank</p>
<p className="text-xl font-semibold text-white">#1</p>
</div>
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="text-xs text-white/60 mb-1">Keywords</p>
<p className="text-xl font-semibold text-white">450+</p>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
                  AI SEO Specialist
                </h3>
<p className="mt-1.5 text-sm text-white/70">
                  AI-driven keyword analysis and site optimization to help you
                  rank higher.
                </p>
</section>
</div>
<div className="mt-auto"></div>
</div>

<div className="flex flex-col gap-6 p-6 sm:p-10 lg:col-start-2">

<section className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6" style={{-X: '105px', -Y: '-1439.1875px'}}>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-bot text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<span className="font-medium">Virtual Customer Service</span>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="bg-white/10 rounded-lg p-2 text-xs text-white/80">
                    "I can help you reschedule that booking."
                  </div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
                AI Support Agent
              </h3>
<p className="mt-1.5 text-sm text-white/70">
                Your AI employee handles tickets, questions, and bookings day
                and night, instantly.
              </p>
</section>

<section className="group overflow-hidden md:p-6 ring-1 ring-white/10 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative" style={{-X: '105px', -Y: '-1705.1875px'}}>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-credit-card text-yellow-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<span className="font-medium">Invoicing &amp; Booking</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-white/70">
<svg className="lucide lucide-check text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Auto-recurring billing</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<svg className="lucide lucide-check text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Real-time calendar sync</span>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
                AI Accountant &amp; Booking
              </h3>
<p className="mt-1.5 text-sm text-white/70">
                Integrated booking system that automatically generates invoices
                and collects payment.
              </p>
</section>

<section className="group overflow-hidden md:p-6 ring-1 ring-white/10 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative" style={{-X: '105px', -Y: '-1979.1875px'}}>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-layout-grid text-pink-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
<span className="font-medium">Website Builder</span>
</div>
<div className="h-2 w-full rounded-full bg-white/10 overflow-hidden mb-2">
<div className="h-full rounded-full bg-pink-400" style={{width: '85%'}}></div>
</div>
<p className="text-xs text-white/60">Site performance score: 98</p>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">
                AI Website Builder
              </h3>
<p className="mt-1.5 text-sm text-white/70">
                Create stunning, SEO-optimized landing pages and full sites in
                minutes.
              </p>
</section>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative" id="crm">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">
<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl"></div>

<div className="mb-10 sm:p-10 pt-6 pr-6 pb-0 pl-6">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Lead Generation &amp; CRM
          </h2>
<p className="mt-4 text-lg text-white/70 max-w-2xl">
            Capture leads from your website, organize them in your CRM, and book
            meetings automatically.
          </p>
</div>

<div className="relative mb-10 sm:px-10 px-6">
<div className="flex md:w-auto gap-3 w-max overflow-x-auto pb-2" id="pb-tabs">
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white ring-1 ring-white/20 whitespace-nowrap" data-key="capture">
              Lead Capture
            </button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white whitespace-nowrap" data-key="pipeline">
              Pipeline Management
            </button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white whitespace-nowrap" data-key="booking">
              Auto-Booking
            </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-xl">
<h3 className="md:text-2xl text-2xl font-semibold text-white tracking-tight mb-3" id="pb-title">
                Lead Capture
              </h3>
<p className="text-[12px] tracking-tight text-zinc-200 uppercase mb-4" id="pb-tagline">
                CONVERT VISITORS INTO CUSTOMERS.
              </p>
<p className="text-white/80 text-sm leading-relaxed" id="pb-p1">
                Automatically pipe leads from your website builder directly into
                your CRM. No manual entry required.
              </p>
<p className="text-white/80 text-sm leading-relaxed mt-4" id="pb-p2">
                Score leads based on engagement and assign high-value prospects
                to your best sales reps instantly.
              </p>
<a className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 hover:bg-zinc-100 h-11 px-5 ring-1 ring-white/20 text-sm font-medium transition shadow-[0_8px_24px_-8px_rgba(255,255,255,0.2)]" href="#">
                Try Lead Capture
                <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="flex items-center justify-center p-6 sm:p-10 bg-white/[0.02]">
<div className="relative w-full max-w-sm">
<div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

<div className="relative rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl overflow-hidden">
<div className="flex items-center border-b border-white/10 bg-white/5 px-3 py-2">
<div className="flex gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="ml-4 h-4 w-32 rounded-full bg-white/10"></div>
</div>
<div className="p-4 space-y-3">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-500/20"></div>
<div className="space-y-1">
<div className="h-2 w-24 bg-white/20 rounded"></div>
<div className="h-1.5 w-16 bg-white/10 rounded"></div>
</div>
<div className="ml-auto h-6 w-12 bg-green-500/20 rounded-md"></div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-purple-500/20"></div>
<div className="space-y-1">
<div className="h-2 w-20 bg-white/20 rounded"></div>
<div className="h-1.5 w-14 bg-white/10 rounded"></div>
</div>
<div className="ml-auto h-6 w-12 bg-yellow-500/20 rounded-md"></div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-pink-500/20"></div>
<div className="space-y-1">
<div className="h-2 w-28 bg-white/20 rounded"></div>
<div className="h-1.5 w-20 bg-white/10 rounded"></div>
</div>
<div className="ml-auto h-6 w-12 bg-blue-500/20 rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10" id="pricing">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Pricing
        </h2>
<p className="mt-4 text-slate-400 text-lg">
          Start for free, scale as you grow.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8 backdrop-blur hover:border-white/20 transition-all">
<h3 className="text-xl font-medium text-white">Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white">$0</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="mt-4 text-sm text-slate-400">
            Perfect for solopreneurs testing the waters.
          </p>
<ul className="mt-8 space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              1 AI Agent (Marketing)
            </li>
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              100 Leads/mo
            </li>
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Basic CRM
            </li>
</ul>
<a className="mt-8 block w-full rounded-lg bg-white/10 py-3 text-center text-sm font-medium text-white hover:bg-white/20 transition" href="#">
            Get Started
          </a>
</div>

<div className="relative rounded-3xl border border-blue-500/30 bg-neutral-900/80 p-8 backdrop-blur shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
            Most Popular
          </div>
<h3 className="text-xl font-medium text-white">Growth</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white">$49</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="mt-4 text-sm text-slate-400">
            For growing businesses needing full automation.
          </p>
<ul className="mt-8 space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              All 8 AI Agents
            </li>
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Unlimited Leads
            </li>
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Advanced SEO &amp; Analytics
            </li>
</ul>
<a className="mt-8 block w-full rounded-lg bg-blue-600 py-3 text-center text-sm font-medium text-white hover:bg-blue-500 transition shadow-lg shadow-blue-500/25" href="#">
            Start Free Trial
          </a>
</div>

<div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8 backdrop-blur hover:border-white/20 transition-all">
<h3 className="text-xl font-medium text-white">Scale</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white">$199</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="mt-4 text-sm text-slate-400">
            Custom solutions for large organizations.
          </p>
<ul className="mt-8 space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Dedicated Account Manager
            </li>
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              API Access
            </li>
<li className="flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Custom Integrations
            </li>
</ul>
<a className="mt-8 block w-full rounded-lg bg-white/10 py-3 text-center text-sm font-medium text-white hover:bg-white/20 transition" href="#">
            Contact Sales
          </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-white">DIGITIZE AI</span>
</div>
<div className="text-sm text-slate-500">
          © 2024 Digitize AI Inc. All rights reserved.
        </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition" href="#">Twitter</a>
<a className="text-slate-400 hover:text-white transition" href="#">LinkedIn</a>
<a className="text-slate-400 hover:text-white transition" href="#">GitHub</a>
</div>
</div>
</footer>



    </>
  );
}
