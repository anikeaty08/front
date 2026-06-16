import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
headline: ['Montserrat', 'sans-serif'],
body: ['Roboto Slab', 'serif'],
},
colors: {
arBlue: '#1877F2',
arYellow: '#FCBC32',
},
boxShadow: {
'glow-blue': '0 0 40px -5px rgba(24, 119, 242, 0.5)',
'glow-yellow': '0 0 40px -5px rgba(252, 188, 50, 0.5)',
},
animation: {
'spin-slow': 'spin 20s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



      function toggleTheme() {
          const html = document.documentElement;
          const isDark = html.classList.contains('dark');

          if (isDark) {
              html.classList.remove('dark');
              html.classList.add('light');
              localStorage.setItem('theme', 'light');
          } else {
              html.classList.remove('light');
              html.classList.add('dark');
              localStorage.setItem('theme', 'dark');
          }
      }

      // Initialize Theme based on storage or preference
      (function() {
          const storedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const html = document.documentElement;

          if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
              html.classList.remove('light');
              html.classList.add('dark');
          } else {
              html.classList.remove('dark');
              html.classList.add('light');
          }
      })();
    


      (function() {
          const navbar = document.getElementById('navbar');
          const navInner = document.getElementById('nav-inner');

          function updateNav() {
              const scrollY = window.scrollY;
              if (scrollY > 20) {
                  // Wrapper spacing
                  navbar.classList.remove('pt-0');
                  navbar.classList.add('pt-6');

                  // Inner styling (Floating State)
                  navInner.classList.remove('w-full', 'max-w-7xl', 'h-24', 'rounded-none', 'border-b');
                  navInner.classList.add('w-[92%]', 'max-w-5xl', 'h-20', 'rounded-2xl', 'border', 'shadow-2xl', 'shadow-black/5');
              } else {
                  // Reset to Fixed State
                  navbar.classList.add('pt-0');
                  navbar.classList.remove('pt-6');

                  navInner.classList.add('w-full', 'max-w-7xl', 'h-24', 'rounded-none', 'border-b');
                  navInner.classList.remove('w-[92%]', 'max-w-5xl', 'h-20', 'rounded-2xl', 'border', 'shadow-2xl', 'shadow-black/5');
              }
          }

          window.addEventListener('scroll', updateNav, { passive: true });
          // Initial check
          updateNav();
      })();
    


      window.addEventListener('load', () => {
          const loader = document.getElementById('initial-loader');
          if (loader) {
              setTimeout(() => {
                  loader.classList.add('opacity-0', 'pointer-events-none');
                  setTimeout(() => loader.remove(), 700);
              }, 1500);
          }
      });
    


      document.addEventListener("DOMContentLoaded", () => {
        const words = ["Intelligence", "Automation", "Performance", "Precision", "Efficiency"];
        let index = 0;
        const el = document.getElementById("dynamic-word");
        if (!el) return;
        setInterval(() => {
          el.classList.add("opacity-0", "translate-y-2");
          el.classList.remove("opacity-100", "translate-y-0");
          setTimeout(() => {
            index = (index + 1) % words.length;
            el.textContent = words[index];
            el.classList.remove("opacity-0", "translate-y-2");
            el.classList.add("opacity-100", "translate-y-0");
          }, 500);
        }, 3000);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-[100] bg-white dark:bg-[#0B0C0E] flex flex-col items-center justify-center transition-opacity duration-700 ease-out" id="initial-loader">
<div className="flex items-center gap-1 mb-8 opacity-0 animate-fade-up" style={{animationDelay: '0.1s', opacity: '1'}}>
<span className="text-4xl font-headline font-light text-arBlue tracking-tight">
          ads
        </span>
<span className="text-4xl font-headline text-black dark:text-white tracking-tight font-normal">
          remedy
        </span>
<span className="text-4xl font-headline font-semibold text-arBlue">.</span>
</div>

<div className="relative w-64 h-[2px] bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">

<div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-arBlue to-transparent animate-loader-beam blur-[2px]"></div>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern"></div>

<div className="absolute -top-[50px] lg:-top-[100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] flex items-center justify-center opacity-80 dark:opacity-60">

<div className="perspective-1000 w-[500px] h-[500px] flex items-center justify-center">
<div className="relative w-[340px] h-[340px] transform-style-3d animate-model-spin">



<div className="absolute inset-0 bg-arYellow rounded-[60px]" style={{transform: 'translateZ(-5px)'}}></div>
<div className="absolute inset-0 bg-arYellow rounded-[60px]" style={{transform: 'translateZ(-10px)'}}></div>
<div className="absolute inset-0 bg-arYellow rounded-[60px]" style={{transform: 'translateZ(-15px)'}}></div>
<div className="absolute inset-0 bg-arYellow rounded-[60px]" style={{transform: 'translateZ(-20px)'}}></div>

<div className="absolute inset-0 bg-white border-[44px] border-arYellow rounded-[60px] overflow-hidden transform-style-3d" style={{transform: 'translateZ(0px)', boxShadow: '0 20px 50px rgba(0,0,0,0.1)'}}>

<div className="absolute inset-0 bg-white">

<div className="absolute -bottom-8 -left-8 w-56 h-56 bg-arBlue rounded-full"></div>

<div className="absolute bottom-8 left-8 w-28 h-28 bg-[#111111] rounded-full flex items-center justify-center">

<div className="absolute top-6 right-6 w-7 h-7 bg-white rounded-full"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-arYellow rounded-[60px] flex items-center justify-center border-[44px] border-arYellow bg-white" style={{transform: 'translateZ(-21px) rotateY(180deg)'}}>
<div className="absolute inset-0 bg-white rounded-[10px]">

<div className="absolute -bottom-8 -left-8 w-56 h-56 bg-arBlue rounded-full"></div>
<div className="absolute bottom-8 left-8 w-28 h-28 bg-[#111111] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-arBlue/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pt-0" id="navbar">
<div className="w-full max-w-7xl px-6 h-24 flex items-center justify-between bg-white/80 dark:bg-[#0B0C0E]/80 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06] rounded-none transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" id="nav-inner">

<a className="flex items-center gap-0.5 group" href="#">
<span className="text-3xl font-headline font-light text-arBlue tracking-tight">
            ads
          </span>
<span className="text-3xl font-headline text-black dark:text-white tracking-tight font-medium">
            remedy
          </span>
<span className="text-3xl font-headline font-semibold text-arBlue mb-1">
            .
          </span>
</a>

<div className="hidden md:flex items-center gap-8 font-body font-normal">
<a className="text-base text-black/60 dark:text-white/60 hover:text-arBlue dark:hover:text-arBlue transition-colors" href="#services">
            Solutions
          </a>
<a className="text-base text-black/60 dark:text-white/60 hover:text-arBlue dark:hover:text-arBlue transition-colors" href="#process">
            Process
          </a>
<a className="text-base text-black/60 dark:text-white/60 hover:text-arBlue dark:hover:text-arBlue transition-colors" href="#results">
            Case Studies
          </a>
</div>

<div className="flex items-center gap-4">

<button className="p-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-black/60 dark:text-white/60" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="22"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="22"></iconify-icon>
</button>
<a className="hidden sm:flex h-11 px-7 items-center justify-center rounded-lg bg-arBlue text-white text-base font-headline font-medium hover:brightness-110 transition-all shadow-lg shadow-arBlue/20" href="#contact">
            Schedule a Call
          </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-48 pb-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center">

<div className="animate-fade-up inline-flex items-center gap-2.5 px-5 py-2 rounded-lg border border-arBlue/20 bg-arBlue/5 text-arBlue mb-10 backdrop-blur-md">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arBlue opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-arBlue"></span>
</span>
<span className="text-sm font-medium tracking-wide uppercase font-headline">
              Outcome-As-A-Service
            </span>
</div>

<h1 className="animate-fade-up delay-100 font-headline font-bold text-5xl md:text-7xl lg:text-[110px] leading-[0.9] tracking-tight text-black dark:text-white mb-10">
            Rewiring Advertising
            <br/>

<span className="inline-flex flex-wrap justify-center gap-x-3 md:gap-x-5">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-arBlue to-blue-400">
                with
              </span>
<span className="inline-block transition-all duration-500 ease-in-out opacity-100 translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-arBlue to-blue-400 pb-2" id="dynamic-word">
                Intelligence
              </span>
</span>
</h1>

<p className="animate-fade-up delay-200 font-body text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-3xl leading-relaxed mb-14">
            An AI-powered monetization platform focusing on
            Outcome-As-A-Service. We bridge the gap between premium publishers
            and global demand.
          </p>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-10 rounded-xl bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm border border-black/[0.06] dark:border-white/[0.06] hover:border-arBlue/30 transition-colors group">
<iconify-icon className="text-arBlue mb-5 text-5xl tracking-tight" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-5xl font-headline font-bold text-arBlue mb-3">
            10+ Years
          </h3>
<p className="text-base font-normal text-black/60 dark:text-white/60">
            in AdTech Innovation
          </p>
</div>

<div className="p-10 rounded-xl bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm border border-black/[0.06] dark:border-white/[0.06] hover:border-arBlue/30 transition-colors group">
<iconify-icon className="text-arBlue mb-5 text-5xl" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-5xl font-headline font-bold text-arBlue mb-3">
            $80M+
          </h3>
<p className="text-base font-normal text-black/60 dark:text-white/60">
            Revenue Generated
          </p>
</div>

<div className="p-10 rounded-xl bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm border border-black/[0.06] dark:border-white/[0.06] hover:border-arBlue/30 transition-colors group">
<iconify-icon className="text-arBlue mb-5 text-5xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-5xl font-headline font-bold text-arBlue mb-3">
            400+
          </h3>
<p className="text-base font-normal text-black/60 dark:text-white/60">
            Publishers Served
          </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28 relative z-10" id="services">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-headline font-bold text-black dark:text-white mb-5 tracking-tight">
          What We Do
        </h2>
<div className="h-1.5 w-24 bg-arYellow rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 rounded-xl bg-white dark:bg-[#131418] border border-black/[0.08] dark:border-white/[0.08] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
<div className="w-14 h-14 rounded-xl bg-arBlue/10 flex items-center justify-center text-arBlue mb-8 group-hover:bg-arBlue group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-headline font-semibold text-black dark:text-white mb-4">
            Yield Optimization
          </h3>
<p className="text-base text-black/60 dark:text-white/60 leading-relaxed">
            Maximizing revenue through intelligent floor pricing and dynamic
            allocation strategies.
          </p>
</div>

<div className="group p-8 rounded-xl bg-white dark:bg-[#131418] border border-black/[0.08] dark:border-white/[0.08] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
<div className="w-14 h-14 rounded-xl bg-arBlue/10 flex items-center justify-center text-arBlue mb-8 group-hover:bg-arBlue group-hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-headline font-semibold text-black dark:text-white mb-4">
            Ad Operations
          </h3>
<p className="text-base text-black/60 dark:text-white/60 leading-relaxed">
            End-to-end management of your ad stack, ensuring 99.9% uptime and
            compliance.
          </p>
</div>

<div className="group p-8 rounded-xl bg-white dark:bg-[#131418] border border-black/[0.08] dark:border-white/[0.08] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
<div className="w-14 h-14 rounded-xl bg-arBlue/10 flex items-center justify-center text-arBlue mb-8 group-hover:bg-arBlue group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-hand-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-headline font-semibold text-black dark:text-white mb-4">
            Account Management
          </h3>
<p className="text-base text-black/60 dark:text-white/60 leading-relaxed">
            Dedicated experts providing strategic guidance and weekly
            performance reviews.
          </p>
</div>

<div className="group p-8 rounded-xl bg-white dark:bg-[#131418] border border-black/[0.08] dark:border-white/[0.08] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
<div className="w-14 h-14 rounded-xl bg-arBlue/10 flex items-center justify-center text-arBlue mb-8 group-hover:bg-arBlue group-hover:text-white transition-colors">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-headline font-semibold text-black dark:text-white mb-4">
            Global Demand
          </h3>
<p className="text-base text-black/60 dark:text-white/60 leading-relaxed">
            Access to premium Tier-1 advertisers and unique demand sources
            worldwide.
          </p>
</div>
</div>
</section>

<section className="bg-neutral-50 dark:bg-white/[0.02] border-y border-black/[0.06] dark:border-white/[0.06]" id="process">
<div className="max-w-7xl mx-auto px-6 py-28">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<h2 className="text-4xl md:text-5xl font-headline font-bold text-black dark:text-white mb-8">
              Engineered for Growth
            </h2>
<p className="text-xl text-black/60 dark:text-white/60 font-light mb-12">
              Our methodology is scientific. We don't guess; we calculate,
              implement, and iterate.
            </p>
<div className="relative pl-10 border-l-2 border-arBlue shadow-[0_0_15px_rgba(24,119,242,0.5)]">
<div className="mb-12 relative">
<span className="absolute -left-[45px] top-1 w-7 h-7 rounded-full bg-arBlue border-[5px] border-white dark:border-[#0B0C0E]"></span>
<h4 className="text-2xl font-headline font-semibold text-black dark:text-white mb-3">
                  Audit
                </h4>
<p className="text-base text-black/60 dark:text-white/60">
                  Deep dive analysis of current stack efficiency and revenue
                  leakage.
                </p>
</div>
<div className="mb-12 relative">
<span className="absolute -left-[45px] top-1 w-7 h-7 rounded-full bg-white dark:bg-[#0B0C0E] border-[3px] border-arBlue"></span>
<h4 className="text-2xl font-headline font-semibold text-black dark:text-white mb-3">
                  Strategy
                </h4>
<p className="text-base text-black/60 dark:text-white/60">
                  Custom roadmap design tailored to your specific audience and
                  verticals.
                </p>
</div>
<div className="mb-12 relative">
<span className="absolute -left-[45px] top-1 w-7 h-7 rounded-full bg-white dark:bg-[#0B0C0E] border-[3px] border-arBlue"></span>
<h4 className="text-2xl font-headline font-semibold text-black dark:text-white mb-3">
                  Implementation
                </h4>
<p className="text-base text-black/60 dark:text-white/60">
                  Seamless integration of Header Bidding, OpenBidding, and PMPs.
                </p>
</div>
<div className="relative">
<span className="absolute -left-[45px] top-1 w-7 h-7 rounded-full bg-white dark:bg-[#0B0C0E] border-[3px] border-arBlue"></span>
<h4 className="text-2xl font-headline font-semibold text-black dark:text-white mb-3">
                  Optimization
                </h4>
<p className="text-base text-black/60 dark:text-white/60">
                  Continuous A/B testing and AI-driven adjustments.
                </p>
</div>
</div>
</div>

<div className="relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-arYellow/10 to-arBlue/10 blur-3xl rounded-full opacity-50"></div>
<div className="relative w-full max-w-lg bg-white dark:bg-[#131418] rounded-xl border-[1px] border-arYellow p-8 shadow-2xl">
<div className="flex items-center gap-4 mb-8 border-b border-black/5 dark:border-white/5 pb-6">
<div className="p-3 bg-arBlue/10 rounded-xl text-arBlue">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<div className="text-sm text-black/40 dark:text-white/40 uppercase tracking-wider font-semibold">
                    Live Status
                  </div>
<div className="text-base font-medium text-black dark:text-white">
                    System Optimization
                  </div>
</div>
<div className="ml-auto text-arBlue animate-pulse">
<iconify-icon icon="solar:record-circle-bold" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-6">

<div className="flex justify-between items-center p-4 rounded-lg bg-neutral-50 dark:bg-white/5">
<span className="text-base text-black/60 dark:text-white/60">
                    Fill Rate
                  </span>
<span className="text-base font-semibold text-black dark:text-white">
                    98.4%
                  </span>
</div>

<div className="flex justify-between items-center p-4 rounded-lg bg-neutral-50 dark:bg-white/5">
<span className="text-base text-black/60 dark:text-white/60">
                    eCPM
                  </span>
<span className="text-base font-semibold text-arBlue">+35%</span>
</div>

<div className="flex justify-between items-center p-4 rounded-lg bg-neutral-50 dark:bg-white/5">
<span className="text-base text-black/60 dark:text-white/60">
                    Viewability
                  </span>
<span className="text-base font-semibold text-black dark:text-white">
                    82%
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="results">
<div className="bg-neutral-50 dark:bg-[#131418] rounded-2xl border border-black/5 dark:border-white/10 p-10 md:p-16 text-black dark:text-white relative overflow-hidden transition-colors duration-500">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-arBlue/10 dark:bg-arBlue/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
<div>
<div className="text-arBlue dark:text-arYellow text-sm font-semibold uppercase tracking-widest mb-6">
              Featured Case Study
            </div>
<h3 className="text-4xl font-headline font-bold mb-3 tracking-tight">
              Bright Mountain Media
            </h3>
<p className="text-black/60 dark:text-white/60 mb-10 font-light text-xl">
              Partnered with Adsremedy to overhaul their programmatic stack.
            </p>
<div className="flex items-baseline gap-3 mb-3">
<span className="text-6xl font-headline font-bold text-arBlue">
                770%
              </span>
<span className="text-2xl text-black/80 dark:text-white/80">
                Revenue Increase
              </span>
</div>
<p className="text-base text-black/40 dark:text-white/40">
              Year over Year Growth
            </p>
</div>
<div className="bg-white dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10 p-8 backdrop-blur-sm shadow-sm dark:shadow-none transition-colors duration-500">

<div className="h-56 w-full">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 300 100">
<defs>
<lineargradient id="growthGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#FCBC32" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#FCBC32" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 90 C 50 85, 100 80, 150 40 C 200 10, 250 15, 300 5" fill="none" stroke="#FCBC32" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
<path d="M0 90 C 50 85, 100 80, 150 40 C 200 10, 250 15, 300 5 V 100 H 0 Z" fill="url(#growthGradient)" stroke="none"></path>

<circle cx="300" cy="5" fill="#FFFFFF" r="5" stroke="#FCBC32" strokeWidth="2.5"></circle>
</svg>
</div>
<div className="flex justify-between mt-6 text-sm text-black/40 dark:text-white/40 font-mono">
<span>Q1 2023</span>
<span>Q4 2023</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-headline font-semibold text-center text-black dark:text-white mb-12">
        Latest Insights
      </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10 overflow-hidden shadow-sm h-[420px]">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7401530450395009024" title="Embedded post" width="100%"></iframe>
</div>
<div className="bg-white dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10 overflow-hidden shadow-sm h-[420px]">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7409886381893832705" title="Embedded post" width="100%"></iframe>
</div>
<div className="bg-white dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10 overflow-hidden shadow-sm h-[420px]">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7396861333427748864" title="Embedded post" width="100%"></iframe>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-28" id="contact">
<div className="text-center mb-12">
<h2 className="text-4xl font-headline font-bold text-black dark:text-white mb-5">
          Start Monetizing Smarter
        </h2>
<p className="text-lg text-black/60 dark:text-white/60">
          Join the platform redefining adtech.
        </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2 ml-1">
              Full Name
            </label>
<input className="w-full h-12 px-5 rounded-lg bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-arBlue outline-none transition-colors text-black dark:text-white text-base" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2 ml-1">
              Email
            </label>
<input className="w-full h-12 px-5 rounded-lg bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-arBlue outline-none transition-colors text-black dark:text-white text-base" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2 ml-1">
            Website URL
          </label>
<input className="w-full h-12 px-5 rounded-lg bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-arBlue outline-none transition-colors text-black dark:text-white text-base" placeholder="https://" type="url"/>
</div>
<div>
<label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2 ml-1">
            I am a...
          </label>
<div className="relative">
<select className="w-full h-12 px-5 rounded-lg bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-arBlue outline-none transition-colors appearance-none text-black dark:text-white text-base">
<option>Publisher</option>
<option>Advertiser</option>
</select>
<div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-black/40 dark:text-white/40">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full h-14 mt-8 rounded-lg bg-arBlue hover:bg-blue-600 text-white font-headline font-semibold text-base transition-colors shadow-lg shadow-arBlue/20" type="submit">
          Schedule a Call
        </button>
</form>
</section>

<footer className="border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#0B0C0E] py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">

<a className="flex items-center gap-0.5" href="#">
<span className="text-2xl font-headline font-light text-arBlue tracking-tight">
              ads
            </span>
<span className="text-2xl font-headline font-semibold text-black dark:text-white tracking-tight">
              remedy
            </span>
<span className="text-2xl font-headline font-bold text-arBlue mb-0.5">
              .
            </span>
</a>
</div>
<div className="text-base text-black/40 dark:text-white/40 font-light">
          © 2024 Adsremedy. All rights reserved.
        </div>
<div className="flex gap-8">
<a className="text-black/40 dark:text-white/40 hover:text-arBlue transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
<a className="text-black/40 dark:text-white/40 hover:text-arBlue transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="24"></iconify-icon>
</a>
</div>
</div>
</footer>






    </>
  );
}
