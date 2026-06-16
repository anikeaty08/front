import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
lime: '#D4FF33',
electric: '#2E5CFF',
navy: '#020617',
}
}
}
}
}



      const mobileToggle = document.getElementById('mobile-toggle');
      const mobileBackdrop = document.getElementById('mobile-backdrop');
      const mobileDrawer = document.getElementById('mobile-drawer');

      function toggleMobileMenu() {
          const isHidden = mobileBackdrop.classList.contains('hidden');

          if (isHidden) {
              // Open
              mobileBackdrop.classList.remove('hidden');
              // Small timeout to allow display:block to apply before opacity transition
              setTimeout(() => mobileBackdrop.classList.add('active'), 10);
              mobileDrawer.classList.remove('translate-x-full');
              document.body.style.overflow = 'hidden'; // Prevent scrolling
          } else {
              // Close
              mobileBackdrop.classList.remove('active');
              mobileDrawer.classList.add('translate-x-full');
              setTimeout(() => mobileBackdrop.classList.add('hidden'), 300);
              document.body.style.overflow = '';
          }
      }

      mobileToggle.addEventListener('click', toggleMobileMenu);
    


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-electric/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image-gradient-b pointer-events-none"></div>
</div>

<nav className="fixed z-50 flex sm:pt-6 pt-4 pr-4 pl-4 top-0 right-0 left-0 justify-center">
<div className="border-white/[0.08] md:px-3 md:py-2 flex shadow-black/40 transition-all duration-300 hover:border-white/[0.12] group/nav bg-[#0f172a]/80 w-fit h-auto border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">

<a className="flex items-center gap-2.5 group shrink-0 pt-1 pr-4 pb-1 pl-2" href="/">
<span className="text-white font-bold text-lg tracking-tight">
            ShiftWorks
          </span>
</a>


<div className="hidden md:flex border-white/[0.03] flex-1 bg-black/20 max-w-fit border rounded-xl pt-1 pr-1 pb-1 pl-1 items-center justify-center">

<div className="relative group/menu">
<button className="lg:px-4 text-[11px] lg:text-xs hover:text-white transition-colors duration-200 flex font-medium text-slate-400 pt-1.5 pr-3 pb-1.5 pl-3 relative gap-x-1 gap-y-1 items-center">
              Solutions
              <svg className="lucide lucide-chevron-down opacity-50 w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>

<div className="submenu absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 w-56">
<div className="bg-[#1C1F26] border border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-xl flex flex-col gap-0.5">
<a className="block hover:bg-white/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/shiftworksai.com/workshops">
<div className="text-xs font-medium text-white">Workshops</div>
<div className="text-[10px] text-slate-500">
                    Phase 1: Foundations
                  </div>
</a>
<a className="block hover:bg-white/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/shiftworksai.com/audits">
<div className="text-xs font-medium text-white">Audits</div>
<div className="text-[10px] text-slate-500">
                    Phase 2: Deep Dive
                  </div>
</a>
<a className="block hover:bg-white/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/shiftworksai.com/automations">
<div className="text-xs font-medium text-white">
                    Advanced Automations
                  </div>
<div className="text-[10px] text-slate-500">Phase 3: Scale</div>
</a>
<a className="block hover:bg-white/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/premium">
<div className="text-xs font-medium text-brand-lime">
                    Premium Advisory
                  </div>
<div className="text-[10px] text-slate-500">Ongoing support</div>
</a>
</div>
</div>
</div>

<div className="relative group/menu">
<button className="lg:px-4 text-[11px] lg:text-xs hover:text-white transition-colors duration-200 flex font-medium text-slate-400 pt-1.5 pr-3 pb-1.5 pl-3 relative gap-x-1 gap-y-1 items-center">
              How It Works
              <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="submenu absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 w-48">
<div className="bg-[#1C1F26] border border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-xl flex flex-col gap-0.5">
<a className="block hover:bg-white/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/shiftworksai.com/standard-route">
<div className="text-xs font-medium text-white">
                    Standard Route
                  </div>
</a>
</div>
</div>
</div>

<a className="lg:px-4 text-[11px] lg:text-xs hover:text-white transition-colors duration-200 font-medium text-slate-400 pt-1.5 pr-3 pb-1.5 pl-3" href="/shiftworksai.com/pricing">
            Pricing
          </a>

<div className="group/menu relative">
<div className="submenu absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 w-56">
<div className="bg-[#1C1F26] border border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-xl flex flex-col gap-0.5">
<a className="block hover:bg-white/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/shiftworksai.com/grey-label">
<div className="text-xs font-medium text-white">
                    Grey-Label Partnerships
                  </div>
</a>
<a className="block hover:bg-white/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/shiftworksai.com/referrals">
<div className="text-xs font-medium text-white">
                    Referral Partners
                  </div>
</a>
<a className="block hover:bg-white/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/shiftworksai.com/careers">
<div className="text-xs font-medium text-white">Careers</div>
</a>
</div>
</div>
<button className="lg:px-4 text-[11px] lg:text-xs hover:text-white transition-colors duration-200 flex font-medium text-slate-400 pt-1.5 pr-3 pb-1.5 pl-3 relative gap-x-1 gap-y-1 items-center">
              Partnerships
              <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>

<div className="hidden md:flex items-center gap-2 pl-2"></div>

<button className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors" id="mobile-toggle">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</nav>


<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] backdrop-fade hidden" id="mobile-backdrop" onclick="toggleMobileMenu()"></div>

<div className="fixed inset-y-0 right-0 w-[85%] sm:w-[320px] bg-[#020617] border-l border-white/10 z-[70] transform translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] shadow-2xl flex flex-col" id="mobile-drawer">

<div className="flex items-center justify-between p-5 border-b border-white/5">
<span className="text-sm font-semibold text-white tracking-tight">
          Menu
        </span>
<button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors" onclick="toggleMobileMenu()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-1">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3 mt-2">
          Product
        </div>
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="/solutions">
<svg className="lucide lucide-box text-brand-electric" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
</svg>
          Solutions
        </a>
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="/how-it-works">
<svg className="lucide lucide-workflow text-brand-lime" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
          How It Works
        </a>
<div className="h-px bg-white/5 my-3 mx-3"></div>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
          Company
        </div>
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="/pricing">
          Pricing
        </a>
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="/partnerships">
          Partnerships
        </a>
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="/careers">
          Careers
        </a>
</div>

<div className="p-4 border-t border-white/5 bg-black/20">
<a className="flex items-center justify-center w-full py-3 bg-brand-electric text-white font-semibold rounded-xl hover:bg-[#1a45e6] transition-colors mb-2" href="/get-started">
          Get Started
        </a>
<a className="flex items-center justify-center w-full py-3 bg-white/5 text-slate-300 font-semibold rounded-xl hover:bg-white/10 transition-colors" href="/demo">
          See Demo
        </a>
</div>
</div>



<main className="lg:px-8 lg:pt-48 sm:px-6 z-10 max-w-7xl mr-auto ml-auto pt-32 pr-[5%] pb-20 pl-[5%] relative">
<div className="grid lg:grid-cols-2 gap-16 items-start mt-8">

<div className="flex flex-col z-20 max-w-xl pt-8 relative items-start">

<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-brand-lime/20 bg-brand-lime/5 text-brand-lime text-[11px] font-semibold mb-8 backdrop-blur-md cursor-default">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-lime"></span>
</span>
<span className="tracking-wide" style={{}}>ShiftWorks</span>
</div>

<div className="sm:h-[140px] lg:text-6xl leading-[1.1] phrase-rotator font-bold text-white tracking-tight w-full mb-6 text-4xl sm:text-5xl h-[140px] sm:h-[180px]">
<span className="">
              Your team,
              <br/>
              but faster.
            </span>
<span className="">
              Workflows that
              <br/>
              actually work.
            </span>
<span className="translate-y-4">
              Stop wasting time
              <br/>
              on repetitive work.
            </span>
</div>

<p className="leading-relaxed text-lg text-slate-400 max-w-lg mb-10">
            We start with live AI workshops that save employees
            <span className="text-brand-lime font-medium" style={{}}>
              10–20% of their time
            </span>
            , then design workflows and automations that scale.
          </p>

<div className="flex flex-wrap items-center gap-3">
<a className="group hover:bg-[#1a45e6] transition-all flex items-center gap-2 text-sm font-semibold text-white h-12 rounded-full pr-7 pl-7 shadow-[0_0_30px_-10px_rgba(46,92,255,0.6)]" href="https://shiftworksai.com/contact">
              Get in Touch
            </a>
<a className="hover:border-white/20 hover:bg-white/5 hover:text-white transition-all flex items-center gap-2 text-sm font-semibold text-slate-300 bg-transparent h-12 border-white/10 border rounded-full pr-7 pl-7" href="https://shiftworksai.com/demo">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
              See Demo
            </a>
</div>
<div className="flex flex-col sm:flex-row w-full max-w-xl border-white/10 border-t mt-8 pt-6 sm:-translate-x-4 sm:scale-90 gap-6 sm:gap-4 items-start sm:items-center justify-between">
<div className="flex items-center gap-3 w-full sm:w-auto">
<svg className="lucide lucide-zap text-brand-lime shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
<div className="">
<div className="text-lg font-bold text-white leading-none">
                  10–20%
                </div>
<div className="text-[10px] uppercase font-medium text-slate-500 tracking-wide">
                  Productivity Lift
                </div>
</div>
</div>
<div className="hidden sm:block w-px h-8 bg-white/10"></div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<svg className="lucide lucide-fast-forward text-brand-electric shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 19 22 12 13 5 13 19"></polygon>
<polygon points="2 19 11 12 2 5 2 19"></polygon>
</svg>
<div className="">
<div className="leading-none text-lg font-bold text-white">50%</div>
<div className="text-[10px] uppercase font-medium text-slate-500 tracking-wide">
                  Faster Workflows
                </div>
</div>
</div>
<div className="hidden sm:block w-px h-8 bg-white/10"></div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<svg className="lucide lucide-bot text-brand-lime shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect className="" height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<div className="">
<div className="text-lg font-bold text-white leading-none">
                  100%
                </div>
<div className="text-[10px] uppercase font-medium text-slate-500 tracking-wide">
                  Automated Tasks
                </div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block w-full h-[600px] relative">
<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none" viewbox="0 0 500 680" xmlns="http://www.w3.org/2000/svg">
<path className="flow-line opacity-50" d="M130 40 C 130 150, 370 140, 370 250 C 370 360, 130 360, 130 470 C 130 580, 350 530, 400 610" stroke="url(#gradientPath)" stroke-dasharray="8 8" strokeWidth="2"></path>
<defs>
<lineargradient id="gradientPath" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#2E5CFF" stop-opacity="0.3"></stop>
<stop offset="50%" stop-color="#D4FF33" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#D4FF33" stop-opacity="0.8"></stop>
</lineargradient>
</defs>
</svg>
<div className="hover:bg-white/[0.05] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-electric/10 group -translate-y-16 cursor-pointer w-[260px] z-10 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute top-0 left-0 backdrop-blur-xl translate-x-16" onclick="window.location.href='/workshops';window.location.href='/shiftworksai.com/workshops';window.location.href='/shiftworksai.com/workshops'" role="button">
<div className="flex mb-3 items-center justify-between">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-lime/10 text-brand-lime border border-brand-lime/20">
                PHASE 1
              </span>
<svg className="lucide lucide-users w-4 h-4 text-slate-500 group-hover:text-brand-lime transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Workshops</h3>
<p className="leading-snug text-xs text-slate-400 mb-3">
              Live AI Foundations Workshop to unlock 10–20% productivity in one
              afternoon.
            </p>
<div className="flex -space-x-2 opacity-80">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-[#0f172a] flex items-center justify-center text-[8px] text-white">
                AI
              </div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-[#0f172a]"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-[#0f172a]"></div>
</div>
</div>
<div className="hover:bg-white/[0.05] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-electric/10 group -translate-x-6 -translate-y-8 -translate-y-6 -translate-x-16 cursor-pointer z-10 w-[260px] border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute top-[150px] right-0 backdrop-blur-xl translate-y-1" onclick="window.location.href='/audits';window.location.href='/shiftworksai.com/audits'" role="button">
<div className="flex mb-3 items-center justify-between">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-electric/10 text-brand-electric border border-brand-electric/20">
                PHASE 2
              </span>
<svg className="lucide lucide-search w-4 h-4 text-slate-500 group-hover:text-brand-electric transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle className="" cx="11" cy="11" r="8"></circle>
</svg>
</div>
<h3 className="text-sm font-semibold text-white mb-1">
              Workflow Audit
            </h3>
<p className="text-xs text-slate-400 leading-snug mb-3">
              4-week deep dive into your processes, with a playbook for 30–50%
              faster workflows.
            </p>
<div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden flex">
<div className="w-1/2 bg-white/10"></div>
<div className="w-1/2 bg-brand-electric"></div>
</div>
</div>
<div className="hover:bg-white/[0.05] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-electric/10 group -translate-x-3 -translate-y-16 -translate-x-1 z-10 w-[260px] border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute top-[390px] left-4 backdrop-blur-xl cursor-pointer" onclick="window.location.href='/automations';window.location.href='/shiftworksai.com/automations'" role="button">
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                PHASE 3
              </span>
<svg className="lucide lucide-workflow w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
</div>
<h3 className="text-sm font-semibold text-white mb-1">
              Advanced Automations
            </h3>
<p className="text-xs text-slate-400 leading-snug mb-3">
              High-leverage automations that handle repetitive work end-to-end.
            </p>
<div className="flex items-center gap-1 opacity-80">
<div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center">
<svg className="lucide lucide-mail w-2.5 h-2.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</div>
<svg className="lucide lucide-arrow-right w-3 h-3 text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
<div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center">
<svg className="lucide lucide-sheet w-2.5 h-2.5 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x="3" x2="21" y1="9" y2="9"></line>
<line x="3" x2="21" y1="15" y2="15"></line>
<line className="" x="9" x2="9" y1="9" y2="21"></line>
<line className="" x="15" x2="15" y1="9" y2="21"></line>
</svg>
</div>
<svg className="lucide lucide-arrow-right w-3 h-3 text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
<div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center">
<svg className="lucide lucide-pie-chart w-2.5 h-2.5 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
</svg>
</div>
</div>
</div>
<div className="border-brand-electric/40 hover:border-brand-electric/60 transition-all duration-300 hover:scale-105 hover:shadow-brand-electric/30 group overflow-hidden z-10 bg-gradient-to-br from-brand-electric/20 to-brand-navy w-[280px] border rounded-2xl pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 shadow-[0_0_40px_-10px_rgba(46,92,255,0.3)] scale-75 cursor-pointer" onclick="window.location.href='/shiftworksai.com/premium'" role="button">
<div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
<svg className="lucide lucide-crown w-16 h-16 text-white rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
<path d="M5 21h14"></path>
</svg>
</div>
<div className="flex items-center justify-between mb-4 relative z-10">
<span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white border border-white/20 shadow-sm">
                PREMIUM
              </span>
</div>
<h3 className="text-base font-semibold text-white mb-2 relative z-10">
              Ongoing Advisory
            </h3>
<p className="text-xs text-slate-300 leading-relaxed relative z-10">
              White-glove advisory, continuous workflow design, and priority
              automation builds.
            </p>
</div>
</div>
</div>
<div className="z-20 w-full mt-24 mb-20 relative">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Inside the AI Foundations Workshop
          </h2>
<p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A hands-on session designed to turn your team into AI power users in
            a single afternoon.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="hover:bg-white/[0.04] transition-colors group border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 cursor-pointer" onclick="window.location.href='/workshops';window.location.href='/shiftworksai.com/workshops'" role="button">
<div className="w-12 h-8 rounded-full bg-brand-electric/10 border border-brand-electric/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
<svg className="lucide lucide-graduation-cap w-4 h-4 text-brand-electric" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
<path d="M6 12v5c3 0 6-2 6-2s3 2 6 2v-5"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-white mb-2" style={{}}>
              Learn
            </h3>
<p className="leading-relaxed text-sm text-slate-400">
              Employees learn the core AI skills and concepts they need to use
              AI confidently in their day-to-day.
            </p>
</div>

<div className="hover:bg-white/[0.04] transition-colors group border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6" onclick="window.location.href='/workshops';window.location.href='/shiftworksai.com/workshops'" role="button">
<div className="w-12 h-8 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
<svg className="lucide lucide-target w-4 h-4 text-brand-lime" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Practice</h3>
<p className="leading-relaxed text-sm text-slate-400">
              Complete guided exercises that help them build real proficiency
              using AI in everyday tasks.
            </p>
</div>

<div className="hover:bg-white/[0.04] transition-colors group border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6" onclick="window.location.href='/workshops';window.location.href='/shiftworksai.com/workshops'" role="button">
<div className="w-12 h-8 rounded-full bg-brand-electric/10 border border-brand-electric/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
<svg className="lucide lucide-wand-2 w-4 h-4 text-brand-electric" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
<path d="m14 7 3 3"></path>
<path d="M5 6v4"></path>
<path d="M19 14v4"></path>
<path d="M10 2v2"></path>
<path d="M7 8H3"></path>
<path d="M21 16h-4"></path>
<path d="M11 3H9"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Apply</h3>
<p className="leading-relaxed text-sm text-slate-400">
              We show how to apply AI to common workflows using universal
              examples.
            </p>
</div>

<div className="hover:bg-white/[0.04] transition-colors group border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6" onclick="window.location.href='/workshops';window.location.href='/shiftworksai.com/workshops'" role="button">
<div className="w-12 h-8 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
<svg className="lucide lucide-gift w-4 h-4 text-brand-lime" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" width="18" x="3" y="8"></rect>
<path d="M12 8v13"></path>
<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Equip</h3>
<p className="leading-relaxed text-sm text-slate-400">
              Everyone leaves with the knowledge + resources they need to start
              saving time—same day.
            </p>
</div>
</div>
</div>
<div className="mt-24 border-t border-white/10 pt-24 relative z-20">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            The Smarter Path
            <span className="text-slate-500 font-normal block sm:inline">
              (Without the Nonsense)
            </span>
</h2>
</div>
<div className="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-white/10 z-0"></div>

<div className="relative group z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-2xl bg-[#0B1120] border border-brand-lime shadow-[0_0_25px_-5px_rgba(212,255,51,0.3)] flex items-center justify-center mb-8 relative group-hover:scale-105 transition-transform duration-300 border-brand-electric shadow-[0_0_25px_-5px_rgba(46,92,255,0.3)]">
<svg className="lucide lucide-zap text-brand-lime text-brand-electric" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<div className="absolute -bottom-3 px-3 py-1 bg-brand-lime text-brand-navy text-[10px] font-semibold rounded-full uppercase tracking-wider border border-brand-navy">
                Start Here
              </div>
</div>
<div className="hover:bg-white/[0.04] transition-colors flex flex-col cursor-pointer w-full h-full border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6" onclick="window.location.href='/workshops';window.location.href='/shiftworksai.com/workshops'" role="button">
<h3 className="text-lg font-semibold text-white mb-3">
                Phase 1 — Workshops
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Start here if you’re tired of your team asking what AI ‘actually
                does.’ We teach the essentials, cut the confusion, and get
                everyone saving time by the end of the session.
              </p>
</div>
</div>

<div className="relative group z-10 flex flex-col items-center text-center">
<div className="group-hover:border-brand-electric flex group-hover:scale-105 transition-transform duration-300 bg-[#0B1120] w-20 h-20 border-purple-400 border rounded-2xl mb-8 relative shadow-[0_0_25px_-5px_rgba(192,132,252,0.3)] items-center justify-center">
<svg className="lucide lucide-search group-hover:text-brand-electric transition-colors text-purple-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<div className="hover:bg-white/[0.04] transition-colors flex flex-col w-full h-full border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 cursor-pointer" onclick="window.location.href='/audits';window.location.href='/shiftworksai.com/audits'" role="button">
<h3 className="text-lg font-semibold text-white mb-3">
                Phase 2 — Workflow Audit
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Once your team knows the basics, we map out where all your time
                is disappearing. No jargon. No 80-page PDF. Just a clear, honest
                plan for working faster.
              </p>
</div>
</div>

<div className="relative group z-10 flex flex-col items-center text-center">
<div className="group-hover:border-purple-400 flex group-hover:scale-105 transition-transform duration-300 bg-[#0B1120] w-20 h-20 border-white/10 border rounded-2xl mb-8 relative items-center justify-center" onclick="window.location.href='/automations'" role="button">
<svg className="lucide lucide-settings group-hover:text-purple-400 transition-colors w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(192, 132, 252)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="hover:bg-white/[0.04] transition-colors flex flex-col w-full h-full border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6" onclick="window.location.href='/automations';window.location.href='/shiftworksai.com/automations'" role="button">
<h3 className="text-lg font-semibold text-white mb-3">
                Phase 3 — Advanced Automations
              </h3>
<p className="leading-relaxed text-sm text-slate-400" style={{}}>
                And when you’re ready to stop doing the same repetitive tasks
                forever? We build automations that finally take them off your
                plate. Permanently.
              </p>
</div>
</div>
</div>
<div className="mt-16 text-center max-w-2xl mx-auto px-6">
<p className="italic text-slate-500" style={{}}>
            Do all three, or just one. We don’t believe in all-or-nothing. We
            just believe in making your work… work better.
          </p>
</div>
</div>
</main>
<section className="sm:py-24 overflow-hidden border-white/[0.05] w-full border-t pt-20 pb-20 relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-electric/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image-gradient-b"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center px-[15%] sm:px-6">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Ready to upgrade how your team works?
        </h2>
<p className="text-sm sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto">
          Book a workshop or request a demo and we’ll show you exactly where
          your time savings are hiding.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto flex items-center justify-center hover:bg-[#1a45e6] transition-all hover:shadow-[0_0_40px_-5px_rgba(46,92,255,0.5)] text-sm font-semibold text-white w-full h-12 rounded-full pr-8 pl-8 shadow-[0_0_30px_-10px_rgba(46,92,255,0.6)]" href="https://shiftworksai.com/workshops">
            Book a Workshop
          </a>
<a className="sm:w-auto flex items-center justify-center hover:border-white/20 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold text-slate-300 bg-transparent w-full h-12 border-white/10 border rounded-full pr-8 pl-8" href="https://shiftworksai.com/demo">
            See Demo
          </a>
</div>
</div>
</section>
<footer className="py-12 border-t border-white/[0.05] relative z-10 bg-[#020617]">
<div className="max-w-7xl mx-auto px-[15%] sm:px-6 flex flex-col items-center gap-2 text-center">
<div className="text-sm text-slate-500 hover:text-slate-400 transition-colors">
          info@shiftworksai.com
        </div>
</div>
</footer>



    </>
  );
}
