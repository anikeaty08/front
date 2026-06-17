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



      // Simple routing logic for the demo
      function route(pageId) {
        // Hide all pages
        const pages = ['landing', 'pricing', 'about', 'contact', 'blog'];
        pages.forEach(id => {
          const el = document.getElementById('page-' + id);
          if (el) el.classList.add('hidden');
        });

        // Show requested page (default to landing if missing)
        const target = document.getElementById('page-' + pageId) || document.getElementById('page-landing');
        target.classList.remove('hidden');

        // Reset scroll
        window.scrollTo(0, 0);
      }

      function toggleMenu() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
      }

      function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const content = faqItem.querySelector('.faq-content');
    const icon = faqItem.querySelector('.faq-icon');
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.querySelector('.faq-content').style.maxHeight = '0';
        item.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
      }
    });
    
    // Toggle current item
    if (isOpen) {
      content.style.maxHeight = '0';
      icon.style.transform = 'rotate(0deg)';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.style.transform = 'rotate(45deg)';
    }
  }
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="route('landing')">
<div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
<svg aria-hidden="true" className="lucide lucide-triangle w-6 h-6 fill-current rotate-180" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
</div>
<span className="text-white text-xl font-medium tracking-tight">
            AETHER
          </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#" onclick="route('landing')">
            Home
          </a>
<a className="hover:text-white transition-colors" href="/about" onclick="route('about')">
            About
          </a>
<a className="hover:text-white transition-colors" href="/pricing" onclick="route('pricing')">
            Pricing
          </a>
<a className="hover:text-white transition-colors" href="/contact" onclick="route('contact')">
            Contact
          </a>
</div>

<div className="flex items-center gap-4">
<button className="group relative hidden md:inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900" onclick="route('pricing')">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#050505_50%,#10b981_100%)]"></span>
<span className="inline-flex cursor-pointer items-center justify-center transition-colors group-hover:bg-[#050505]/80 text-sm font-medium text-white bg-[#050505] w-full h-full rounded-lg pt-4 pr-8 pb-4 pl-8 backdrop-blur-3xl" onclick="window.location.href='/contact'" role="button">Get started now</span>
</button>
<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-white/5 bg-[#050505] absolute w-full p-4 flex flex-col gap-4" id="mobile-menu">
<a className="block py-2 text-sm" href="#" onclick="route('landing'); toggleMenu()">
          Home
        </a>
<a className="block py-2 text-sm" href="#" onclick="route('pricing'); toggleMenu()">
          Pricing
        </a>
<a className="block py-2 text-sm" href="#" onclick="route('about'); toggleMenu()">
          About
        </a>
<a className="block py-2 text-sm" href="#" onclick="route('blog'); toggleMenu()">
          Blog
        </a>
<a className="block py-2 text-sm" href="#" onclick="route('contact'); toggleMenu()">
          Contact
        </a>
</div>
</nav>

<main className="pt-20 min-h-screen relative overflow-hidden" id="app-content">

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-20"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-20"></div>

<div className="page-section fade-in" id="page-landing">

<section className="pt-20 pr-6 pb-32 pl-6 relative">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto items-center" style={{animation: 'slideUp 0.8s ease forwards'}}>
<style>
    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-emerald-400 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium text-[10px] uppercase tracking-wider">
      New
    </span>
<span className="">Introducing AI Workflow 2.0</span>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
<h1 className="leading-[1.1] md:text-7xl lg:text-6xl text-5xl font-medium text-white tracking-tight mb-8">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
      AI solutions
    </span>
    designed
    <br/>
    for your business needs
  </h1>
<p className="md:text-xl leading-relaxed text-lg text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">
    Built for efficiency and scalability, it adapts to your workflow
    and boosts productivity across your entire organization.
  </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group hover:bg-emerald-400 transition-all flex font-medium text-[#050505] bg-emerald-500 rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="route('pricing');window.location.href='/contact'" role="button">
      Get started now
      <svg aria-hidden="true" className="lucide lucide-trending-up w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</button>
</div>
</div>
</section>

<section className="text-center max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<p className="text-lg text-slate-400 mb-12">
            Trust by 1000+ brands and organizations worldwide
          </p>
<div className="flex flex-wrap hover:grayscale-0 transition-all duration-500 opacity-50 grayscale gap-x-12 gap-y-12 items-center justify-center">
<div className="flex items-center gap-2 text-2xl font-bold text-white">
<svg aria-hidden="true" className="lucide lucide-slack w-8 h-8" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect className="" height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
    slack
  </div>
<div className="flex items-center gap-2 text-2xl font-bold text-white">
<span className="bg-white text-black rounded px-1 text-lg font-serif">
                N
              </span>
    Notion
  </div>
<div className="flex items-center gap-2 text-2xl font-bold text-white">
<svg aria-hidden="true" className="lucide lucide-box w-8 h-8 fill-current" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z">
</path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
    Airtable
  </div>
<div className="flex items-center gap-2 text-2xl font-medium text-white">
<svg aria-hidden="true" className="lucide lucide-figma w-6 h-6" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
    Figma
  </div>
<div className="flex items-center gap-2 text-2xl font-bold text-white italic">
    Trello
  </div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-4">Why Choose Us?</h2>
<p className="text-lg text-slate-400">
              Everything you need to automate, optimize, and scale
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl border border-white/10 bg-[#0A0C10] hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center">

<div className="h-40 w-full flex items-center justify-center mb-6 relative">

<svg className="overflow-visible" height="80" viewbox="0 0 120 80" width="120">

<path d="M10 70 A 50 50 0 0 1 110 70" fill="none" stroke="#1e293b" strokeLinecap="round" strokeWidth="8"></path>

<path className="group-hover:stroke-dashoffset-40 transition-all duration-1000 ease-out" d="M10 70 A 50 50 0 0 1 110 70" fill="none" stroke="url(#gauge-gradient)" stroke-dasharray="157" stroke-dashoffset="157" strokeLinecap="round" strokeWidth="8" style={{strokeDashoffset: '100'}}></path>

<g className="origin-[60px_70px] transition-transform duration-700 ease-out group-hover:rotate-45">
<rect fill="#e2e8f0" height="50" rx="2" width="4" x="58" y="20"></rect>
<circle cx="60" cy="70" fill="#e2e8f0" r="6"></circle>
</g>
<defs>
<lineargradient id="gauge-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#34d399"></stop>
<stop offset="100%" stop-color="#10b981"></stop>
</lineargradient>
</defs>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-Time Intelligence</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Access accurate, real-time data to drive smarter decisions.
              </p>
</div>

<div className="group p-8 rounded-3xl border border-white/10 bg-[#0A0C10] hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center">

<div className="h-40 w-full flex items-center justify-center mb-6 gap-3 items-end pb-4">
<div className="w-8 bg-white/5 border border-white/10 rounded-t-lg h-12 group-hover:h-20 transition-all duration-500 ease-out delay-75"></div>
<div className="w-8 bg-white/10 border border-white/10 rounded-t-lg h-16 group-hover:h-28 transition-all duration-500 ease-out delay-100"></div>
<div className="w-8 bg-emerald-500/20 border border-emerald-500/30 rounded-t-lg h-24 group-hover:h-32 transition-all duration-500 ease-out shadow-[0_0_20px_rgba(16,185,129,0.2)]"></div>
<div className="w-8 bg-white/5 border border-white/10 rounded-t-lg h-14 group-hover:h-24 transition-all duration-500 ease-out delay-150"></div>
</div>
<h3 className="text-xl font-medium text-white mb-2">Measurable Impact</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Track performance, uncover insights, and achieve data-backed growth.
              </p>
</div>

<div className="group p-8 rounded-3xl border border-white/10 bg-[#0A0C10] hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center">

<div className="h-40 w-full flex items-center justify-center mb-6 relative">
<svg className="text-slate-700 group-hover:text-emerald-500/50 transition-colors duration-500" height="120" viewbox="0 0 120 120" width="120">

<line stroke="currentColor" strokeWidth="1" x1="60" x2="30" y1="60" y2="30"></line>
<line stroke="currentColor" strokeWidth="1" x1="60" x2="90" y1="60" y2="30"></line>
<line stroke="currentColor" strokeWidth="1" x1="60" x2="100" y1="60" y2="70"></line>
<line stroke="currentColor" strokeWidth="1" x1="60" x2="20" y1="60" y2="80"></line>
<line stroke="currentColor" strokeWidth="1" x1="60" x2="60" y1="60" y2="100"></line>

<circle className="group-hover:fill-emerald-400 transition-colors delay-75" cx="30" cy="30" fill="#334155" r="4"></circle>
<circle className="group-hover:fill-emerald-400 transition-colors delay-100" cx="90" cy="30" fill="#334155" r="4"></circle>
<circle className="group-hover:fill-emerald-400 transition-colors delay-150" cx="100" cy="70" fill="#334155" r="4"></circle>
<circle className="group-hover:fill-emerald-400 transition-colors delay-200" cx="20" cy="80" fill="#334155" r="4"></circle>
<circle className="group-hover:fill-emerald-400 transition-colors delay-300" cx="60" cy="100" fill="#334155" r="4"></circle>

<circle className="text-white group-hover:stroke-emerald-400 transition-colors" cx="60" cy="60" fill="#0f172a" r="12" stroke="currentColor" strokeWidth="2"></circle>
<path d="M56 60h8" stroke="white" strokeLinecap="round"></path>
<path d="M60 56v8" stroke="white" strokeLinecap="round"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Seamless Integration</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Connect tools, teams, and workflows with intelligent automation.
              </p>
</div>
</div>
</section>


<section className="max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-4">Features</h2>
<p className="text-lg text-slate-400">
              Everything you need to automate, optimize, and scale
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 group relative rounded-3xl border border-white/10 bg-[#0A0C10] p-8 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="h-48 mb-6 flex flex-col items-center justify-center">
<div className="w-full max-w-[280px] space-y-3">

<div className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs font-medium text-slate-400">
<div className="flex items-center gap-2">
<svg className="opacity-70" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.12a4 4 0 0 1 0 7.75"></path>
</svg>
                      Employee Tracking
                    </div>
<svg className="opacity-50" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 21h5v-5"></path>
</svg>
</div>

<div className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/10 bg-white/[0.05] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] text-xs font-medium text-white relative z-10 scale-105">
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                      Payment reminder
                    </div>
<svg className="text-emerald-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>

<div className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs font-medium text-slate-400">
<div className="flex items-center gap-2">
<svg className="opacity-70" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
                      Cost Management
                    </div>
<svg className="opacity-50" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 21h5v-5"></path>
</svg>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Automate repetitive tasks
                </h3>
<p className="text-slate-400 leading-relaxed">
                  We help you streamline internal operations by automating
                  manual workflows.
                </p>
</div>
</div>

<div className="lg:col-span-2 group relative rounded-3xl border border-white/10 bg-[#0A0C10] p-8 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="h-48 mb-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/10 bg-[#0A0C10] z-20 flex items-center justify-center shadow-[0_0_50px_rgba(56,189,248,0.15)] group-hover:shadow-[0_0_60px_rgba(56,189,248,0.25)] transition-all">
<div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent"></div>
<svg className="text-white relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M5 3v4"></path>
<path d="M9 3v4"></path>
<path d="M3 5h4"></path>
<path d="m3 9 4-4"></path>
</svg>
</div>


<div className="absolute top-4 left-[15%] w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 transform -rotate-6">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>

<div className="absolute bottom-4 left-[10%] w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 transform rotate-3">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
</svg>
</div>

<div className="absolute top-2 right-[20%] w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 transform rotate-12">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</div>

<div className="absolute bottom-8 right-[15%] w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 transform -rotate-3">
<span className="font-serif text-lg font-bold">N</span>
</div>

<div className="absolute top-1/4 left-[35%] w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-500 blur-[1px]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
<path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path>
<path d="m9 12 5.09-5.09L12 19l5.09-5.09"></path>
</svg>
</div>
<div className="absolute bottom-1/4 right-[35%] w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-500 blur-[1px]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.9 5.8a2 2 0 0 1-1.28 1.28L3 12l5.8 1.9a2 2 0 0 1 1.28 1.28L12 21l1.9-5.8a2 2 0 0 1 1.28-1.28L21 12l-5.8-1.9a2 2 0 0 1-1.28-1.28L12 3Z"></path>
</svg>
</div>
</div>

<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Automated Workflows
                </h3>
<p className="text-slate-400 leading-relaxed max-w-2xl">
                  Boost efficiency across teams with smart automation. Build
                  intelligent workflows that automate multi-step processes
                  across tools and platforms.
                </p>
</div>
</div>

<div className="lg:col-span-1 group relative rounded-3xl border border-white/10 bg-[#0A0C10] p-8 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-40 mb-6 relative flex flex-col items-center">
<div className="w-full max-w-[260px] bg-[#0F1115] border border-white/10 rounded-lg p-3 shadow-2xl">

<div className="flex items-center gap-2 bg-[#050505] border border-white/10 rounded-md px-3 py-1.5 mb-3">
<span className="text-[10px] text-slate-500">
                      Research anything...
                    </span>
<div className="ml-auto bg-white text-[#050505] text-[9px] font-bold px-2 py-0.5 rounded">
                      Research
                    </div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between p-2 rounded bg-white/[0.03] border border-white/5">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<span className="text-[9px] text-slate-400">
                          Software &amp; App Industry
                        </span>
</div>
<svg className="text-slate-600" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<div className="flex items-center justify-between p-2 rounded bg-white/[0.03] border border-white/5">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<span className="text-[9px] text-slate-400">
                          UX &amp; UI Design Industry
                        </span>
</div>
<svg className="text-slate-600" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Real-Time Intelligence
                </h3>
<p className="text-slate-400 leading-relaxed">
                  Make smarter decisions with live data insights. Tap into
                  real-time data streams.
                </p>
</div>
</div>

<div className="lg:col-span-1 group relative rounded-3xl border border-white/10 bg-[#0A0C10] p-8 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-40 mb-6 relative flex flex-col items-center">
<div className="w-full max-w-[280px] bg-[#0F1115] border border-white/10 rounded-lg overflow-hidden shadow-2xl">

<div className="bg-white/[0.03] border-b border-white/5 px-3 py-2 flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
</div>
<div className="flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
<span className="text-[8px] text-slate-400">Code</span>
<svg className="text-slate-500" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
</div>

<div className="p-3 font-mono text-[9px] leading-relaxed text-slate-500">
<div className="flex gap-2">
<span className="text-slate-700 select-none">1</span>
<span className="">
<span className="text-purple-400">class</span>
<span className="text-yellow-100">AutomationAgent</span>
                        :
                      </span>
</div>
<div className="flex gap-2">
<span className="text-slate-700 select-none">2</span>
<span className="pl-2">
<span className="text-purple-400">def</span>
<span className="text-blue-400">__init__</span>
                        (self, limit):
                      </span>
</div>
<div className="flex gap-2">
<span className="text-slate-700 select-none">3</span>
<span className="pl-4">
                        self.
                        <span className="text-white">activation_limit</span>
                        = limit
                      </span>
</div>
<div className="flex gap-2">
<span className="text-slate-700 select-none">4</span>
<span className="pl-4">
                        self.
                        <span className="text-white">current_mode</span>
                        =
                        <span className="text-emerald-400">"idle"</span>
</span>
</div>
<div className="flex gap-2 opacity-50">
<span className="text-slate-700 select-none">5</span>
<span className="pl-2">...</span>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Custom AI Agent development
                </h3>
<p className="text-slate-400 leading-relaxed">
                  We develop custom AI agents that integrate seamlessly with
                  your tools.
                </p>
</div>
</div>

<div className="lg:col-span-1 group relative rounded-3xl border border-white/10 bg-[#0A0C10] p-8 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-40 mb-6 relative flex items-center justify-center">
<div className="relative w-full max-w-[200px] h-[120px]">

<div className="absolute top-0 left-0 w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center z-10">
<svg className="text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v-6M6 20V10M18 20V4"></path>
</svg>
</div>

<div className="absolute top-1/2 left-0 w-8 h-8 rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center -translate-y-1/2 translate-x-4 opacity-30"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none text-white/10" style={{zIndex: '0'}}>
<path d="M40 24 C 60 40, 100 80, 150 70" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>

<div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border border-white/20 bg-gradient-to-br from-white/[0.08] to-transparent flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="m20 4-4 4"></path>
<path d="m4 20 4-4"></path>
</svg>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  AI Strategy Consulting
                </h3>
<p className="text-slate-400 leading-relaxed">
                  Get expert guidance to implement AI solutions that drive
                  business growth.
                </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="relative z-10">
<h2 className="md:text-5xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">
        Integrates with
        <br/>
                your favorite tools
      </h2>
<p className="leading-relaxed text-lg text-slate-400 max-w-lg mb-10">
        Enhance productivity, streamline processes, and keep everything
        connected without disrupting your existing workflow.
      </p>
<button className="group border border-white/10 hover:border-emerald-500/50 hover:bg-white/5 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 text-sm">
                Explore integrations
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>

<div className="relative">


<div className="grid grid-cols-3 sm:grid-cols-4 transform hover:opacity-100 transition-opacity duration-700 opacity-70 rotate-6 scale-110 gap-x-4 gap-y-4">

<div className="aspect-square bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline className="" points="14 2 14 8 20 8"></polyline>
</svg>
</div>
<div className="aspect-square bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default">
<svg className="group-hover:text-emerald-400 transition-colors w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '32px', height: '32px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<div className="aspect-square bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default">
<svg className="group-hover:text-emerald-400 transition-colors w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path className="" d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</div>
<div className="aspect-square bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
</div>

<div className="aspect-square bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</div>
<div className="aspect-square bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center hover:bg-emerald-500/20 transition-all duration-300 group cursor-default shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<svg className="w-8 h-8 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
</path>
</svg>
</div>
<div className="aspect-square flex hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default border-white/5 border rounded-2xl items-center justify-center">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path className="" d="M7 7h3v9H7z"></path>
<path d="M14 7h3v5h-3z"></path>
</svg>
</div>
<div className="aspect-square bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3"></path>
<path d="M22 19a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2"></path>
<path d="M17.5 21a2 2 0 0 1-2 2H22"></path>
<path d="M14.5 21a2 2 0 0 0-2 2H2"></path>
<path d="M2 19a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2"></path>
<path d="M8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
<path d="M19 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
</svg>
</div>

<div className="aspect-square flex hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default border-white/5 border rounded-2xl items-center justify-center">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="aspect-square flex hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default border-white/5 border rounded-2xl items-center justify-center">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<div className="aspect-square bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div className="aspect-square flex hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default border-white/5 border rounded-2xl items-center justify-center">
<svg className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
<path d="M12 12v9"></path>
<path className="" d="m16 16-4-4-4 4"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="border border-white/10 bg-[#050505] rounded-3xl overflow-hidden shadow-2xl">

<div className="grid grid-cols-1 border-white/10 border-b">
<div className="md:col-span-2 border-white/10 border-r pt-10 pr-10 pb-10 pl-10">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                  How It Works
                </h2>
<p className="text-slate-400 text-lg">
                  A simple, fast, and secure platform to manage your AI
                  workflows in just a few steps.
                </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="group relative p-8 hover:bg-white/[0.01] transition-colors">
<div className="absolute top-8 left-8 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-medium text-white">
                  1
                </div>
<div className="mt-12 mb-8 h-48 relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-center gap-3 select-none">

<div className="space-y-1">
<div className="h-2 w-12 bg-white/20 rounded-full"></div>
<div className="h-9 w-full bg-white/5 border border-white/10 rounded flex items-center px-3 text-xs text-slate-500 font-mono">
                      john@doe.mail
                    </div>
</div>
<div className="space-y-1">
<div className="h-2 w-16 bg-white/20 rounded-full"></div>
<div className="h-9 w-full bg-white/5 border border-white/10 rounded flex items-center px-3 text-xs text-slate-500 font-mono">
                      ••••••••••
                    </div>
</div>
<div className="h-9 w-full bg-white/5 border border-white/10 rounded flex items-center justify-center text-xs text-slate-400 mt-1">
                    Create account
                  </div>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                  Create your account
                </h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  Sign up easily and secure your profile in just a few steps to
                  get started.
                </p>
</div>

<div className="group relative p-8 hover:bg-white/[0.01] transition-colors">
<div className="absolute top-8 left-8 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-medium text-white">
                  2
                </div>
<div className="mt-12 mb-8 h-48 relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-center gap-3 select-none">

<div className="space-y-2">
<div className="h-2 w-24 bg-white/20 rounded-full"></div>
<div className="h-14 w-full bg-[#050505] border border-white/10 rounded-lg flex items-center justify-between px-3">
<span className="text-lg text-white font-medium font-mono">
                        1,000
                      </span>
<div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded text-[10px] text-white font-medium border border-white/5">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span>TOKENS</span>
<svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
<div className="flex justify-between px-1 text-[10px] text-slate-600 font-mono">
<span>Allocated</span>
<span className="text-emerald-500">0.024/sec</span>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                  Configure resources
                </h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  Allocate your compute tokens or connect your data sources to
                  start processing.
                </p>
</div>

<div className="group relative p-8 hover:bg-white/[0.01] transition-colors">
<div className="absolute top-8 left-8 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-medium text-white">
                  3
                </div>
<div className="mt-12 mb-8 h-48 relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-0 flex flex-col select-none">

<div className="border-b border-white/5 p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2v20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div className="flex-1">
<div className="h-2 w-16 bg-white/20 rounded-full mb-1.5"></div>
<div className="h-1.5 w-8 bg-emerald-500/40 rounded-full"></div>
</div>
<div className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      +12%
                    </div>
</div>
<div className="border-b border-white/5 p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</div>
<div className="flex-1">
<div className="h-2 w-12 bg-white/20 rounded-full mb-1.5"></div>
<div className="h-1.5 w-10 bg-emerald-500/40 rounded-full"></div>
</div>
<div className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      +8.2%
                    </div>
</div>
<div className="p-3 flex items-center gap-3 opacity-50">
<div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div className="flex-1">
<div className="h-2 w-14 bg-white/20 rounded-full mb-1.5"></div>
<div className="h-1.5 w-6 bg-slate-500/40 rounded-full"></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                  Deploy &amp; Scale
                </h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  Launch your agents and enjoy a platform that makes automation
                  seamless.
                </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Effortless workflows, powerful performance, and strong protection.
            </h2>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0A0C10] overflow-hidden shadow-2xl shadow-emerald-900/10">

<div className="border-b border-white/5 p-4 flex items-center justify-between bg-white/5">
<div className="flex items-center gap-2">
<div className="text-emerald-400">
<svg aria-hidden="true" className="lucide lucide-triangle w-5 h-5 rotate-180 fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
</div>
<span className="text-white font-medium tracking-tight ml-2">
                  AETHER
                </span>
<div className="h-4 w-[1px] bg-white/20 mx-2"></div>
<div className="flex gap-4 text-xs font-medium text-slate-400">
<span className="text-white">Analytics</span>
<span>Customers</span>
<span>Products</span>
<span>Settings</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-xs text-indigo-300">
                  JD
                </div>
</div>
</div>

<div className="p-6 md:p-8">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl text-white font-medium">Dashboard</h3>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-user-plus w-3 h-3" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="19" x2="19" y1="8" y2="14"></line>
<line x1="22" x2="16" y1="11" y2="11"></line>
</svg>
                  Invite users
                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-400 uppercase tracking-wider">
                      Total Users
                    </span>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      +17.5%
                    </span>
</div>
<div className="text-2xl text-white font-medium">10,230</div>
</div>
<div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-400 uppercase tracking-wider">
                      Sessions
                    </span>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      +87.5%
                    </span>
</div>
<div className="text-2xl text-white font-medium">78.6%</div>
</div>
<div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-400 uppercase tracking-wider">
                      Click Rate
                    </span>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      +37.8%
                    </span>
</div>
<div className="text-2xl text-white font-medium">76.2%</div>
</div>
<div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-400 uppercase tracking-wider">
                      Pageviews
                    </span>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      +14.5%
                    </span>
</div>
<div className="text-2xl text-white font-medium">58,677</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 h-80 relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h4 className="text-sm font-medium text-white">
                      Transaction history
                    </h4>
<span className="text-xs text-slate-500">View more ↗</span>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-sm border border-white/20"></div>
<span className="text-slate-300">Tesla Inc.</span>
</div>
<span className="text-white">$1,250.00</span>
<span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                        Processing
                      </span>
</div>
<div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-sm border border-white/20"></div>
<span className="text-slate-300">Adobe Systems</span>
</div>
<span className="text-white">$870.50</span>
<span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                        Processing
                      </span>
</div>
<div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-sm border border-white/20"></div>
<span className="text-slate-300">Stripe, Inc</span>
</div>
<span className="text-white">$4,250.00</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                        Success
                      </span>
</div>
<div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-sm border border-white/20"></div>
<span className="text-slate-300">Figma</span>
</div>
<span className="text-white">$1,250.00</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                        Success
                      </span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0A0C10] to-transparent"></div>
</div>

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 h-80 flex flex-col relative">
<div className="flex justify-between items-center mb-6">
<h4 className="text-sm font-medium text-white">
                      Monthly expenses
                    </h4>
<span className="text-xs text-slate-500">View more ↗</span>
</div>
<div className="mb-4">
<div className="text-3xl font-medium text-white">$15,300</div>
<div className="text-xs text-slate-500 mt-1">
<span className="text-emerald-400">97.5% ↗</span>
                      vs 0.00% last year
                    </div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 mt-4 px-2">
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[30%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[45%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[25%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[60%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[75%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[50%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[80%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[40%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[55%] hover:bg-emerald-500 transition-colors"></div>
<div className="w-full bg-emerald-500 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

</div>
<div className="flex justify-between text-[10px] text-slate-500 mt-2 px-2">
<span>Jan</span>
<span>Dec</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<h2 className="text-3xl md:text-5xl font-medium text-white text-center mb-16 tracking-tight">
            What our clients say
          </h2>
<style>
            :root {
              --dur: 38s;
            }
        
            /* mai mic = mai rapid */
        
            @keyframes marquee-left {
              0% {
                transform: translateX(0);
              }
        
              100% {
                transform: translateX(-50%);
              }
            }
        
            @keyframes marquee-right {
              0% {
                transform: translateX(-50%);
              }
        
              100% {
                transform: translateX(0);
              }
            }
        
            .marquee-left {
              animation: marquee-left var(--dur) linear infinite;
            }
        
            .marquee-right {
              animation: marquee-right var(--dur) linear infinite;
            }
          </style>
<div className="space-y-6">

<div className="w-full overflow-hidden relative group [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
<div className="flex gap-6 w-max items-start marquee-left group-hover:[animation-play-state:paused]">

<div className="flex gap-6 items-start">

<div className="group relative flex flex-col p-6 rounded-2xl min-w-[340px] md:min-w-[380px] bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none">
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
<img alt="Anne James" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
</div>
<div>
<div className="text-sm font-medium text-white">Anne James</div>
<div className="flex text-emerald-400 gap-0.5 mt-0.5">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
</div>
</div>
<p className="relative z-10 text-sm text-slate-400 leading-relaxed mt-4">
                      "The workflow automation has completely transformed how our team operates. Intuitive, fast, reliable."
                    </p>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl min-w-[340px] md:min-w-[380px] bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none">
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
<img alt="Alex Volks" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=2"/>
</div>
<div>
<div className="text-sm font-medium text-white">Alex Volks</div>
<div className="flex text-emerald-400 gap-0.5 mt-0.5">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
</div>
</div>
<p className="relative z-10 text-sm text-slate-400 leading-relaxed mt-4">
                      "Aether's integration capabilities are unmatched. We connected our entire stack in less than an hour."
                    </p>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl min-w-[340px] md:min-w-[380px] bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none">
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
<img alt="Mary James" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=3"/>
</div>
<div>
<div className="text-sm font-medium text-white">Mary James</div>
<div className="flex text-emerald-400 gap-0.5 mt-0.5">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
</div>
</div>
<p className="relative z-10 text-sm text-slate-400 leading-relaxed mt-4">
                      "Real-time intelligence gives us insights we didn't know we needed. Essential for our strategy."
                    </p>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl min-w-[340px] md:min-w-[380px] bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none">
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
<img alt="Chris Ford" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=4"/>
</div>
<div>
<div className="text-sm font-medium text-white">Chris Ford</div>
<div className="flex text-emerald-400 gap-0.5 mt-0.5">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
</div>
</div>
<p className="relative z-10 text-sm text-slate-400 leading-relaxed mt-4">
                      "Super clean UI, smooth onboarding, and everything feels fast. Love it."
                    </p>
</div>
</div>

<div className="flex gap-6 items-start">

</div>
</div>
</div>

<div className="w-full overflow-hidden relative group [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
<div className="flex gap-6 w-max items-start marquee-right group-hover:[animation-play-state:paused]">

<div className="flex gap-6 items-start">

<div className="group relative flex flex-col p-6 rounded-2xl min-w-[340px] md:min-w-[380px] bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none">
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
<img alt="Sara Miles" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=5"/>
</div>
<div>
<div className="text-sm font-medium text-white">Sara Miles</div>
<div className="flex text-emerald-400 gap-0.5 mt-0.5">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
</div>
</div>
<p className="relative z-10 text-sm text-slate-400 leading-relaxed mt-4">
                      "Rock solid performance, great support, and the UI is genuinely enjoyable."
                    </p>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl min-w-[340px] md:min-w-[380px] bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none">
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
<img alt="Dan White" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=6"/>
</div>
<div>
<div className="text-sm font-medium text-white">Dan White</div>
<div className="flex text-emerald-400 gap-0.5 mt-0.5">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
</div>
</div>
<p className="relative z-10 text-sm text-slate-400 leading-relaxed mt-4">
                      "Setup was painless. Within minutes we were shipping faster with fewer errors."
                    </p>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl min-w-[340px] md:min-w-[380px] bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none">
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
<img alt="Laura Kent" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=7"/>
</div>
<div>
<div className="text-sm font-medium text-white">Laura Kent</div>
<div className="flex text-emerald-400 gap-0.5 mt-0.5">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
</div>
</div>
<p className="relative z-10 text-sm text-slate-400 leading-relaxed mt-4">
                      "It's the first tool our team adopted instantly. Everything just makes sense."
                    </p>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl min-w-[340px] md:min-w-[380px] bg-[#0A0C10]/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-[#0A0C10]/80 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none">
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden ring-2 ring-white/5 shrink-0">
<img alt="Mike Stone" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=8"/>
</div>
<div>
<div className="text-sm font-medium text-white">Mike Stone</div>
<div className="flex text-emerald-400 gap-0.5 mt-0.5">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
</div>
</div>
<p className="relative z-10 text-sm text-slate-400 leading-relaxed mt-4">
                      "No fluff. Just powerful features that actually save us hours every week."
                    </p>
</div>
</div>

<div className="flex gap-6 items-start">

</div>
</div>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="border border-white/10 bg-[#050505] rounded-3xl overflow-hidden">
<div className="grid grid-cols-1 border-b border-white/10">
<div className="md:p-10 md:border-b-0 md:border-r border-white/10 border-b pt-8 pr-8 pb-8 pl-8">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
          Your Questions, Answered
        </h2>
<p className="text-slate-400">
          Find everything you need to know about Aether, from security
          to supported workflows.
        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="md:border-r flex cursor-pointer hover:bg-white/[0.02] transition-colors group border-white/10 border-b pt-6 pr-6 pb-6 pl-6 flex-col faq-item">
<div className="flex items-center justify-between w-full" onclick="toggleFAQ(this)">
<span className="text-white font-medium">What is Aether?</span>
<svg className="faq-icon w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<div className="faq-content overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-slate-400 leading-relaxed mt-4 text-sm">
            Aether is an AI-powered automation platform that helps businesses streamline workflows, integrate tools, and deploy intelligent agents without requiring coding expertise. Built for efficiency and scalability.
          </p>
</div>
</div>

<div className="flex cursor-pointer hover:bg-white/[0.02] transition-colors group border-white/10 border-b pt-6 pr-6 pb-6 pl-6 flex-col faq-item">
<div className="flex items-center justify-between w-full" onclick="toggleFAQ(this)">
<span className="text-white font-medium">How fast are workflows?</span>
<svg className="faq-icon w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<div className="faq-content overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-slate-400 leading-relaxed mt-4 text-sm">
            Workflows execute in milliseconds with our optimized infrastructure. Real-time processing ensures your automations run instantly, with sub-second response times even for complex multi-step processes.
          </p>
</div>
</div>

<div className="md:border-r flex cursor-pointer hover:bg-white/[0.02] transition-colors group border-white/10 border-b pt-6 pr-6 pb-6 pl-6 flex-col faq-item">
<div className="flex items-center justify-between w-full" onclick="toggleFAQ(this)">
<span className="text-white font-medium">Is Aether secure?</span>
<svg className="faq-icon w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<div className="faq-content overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-slate-400 leading-relaxed mt-4 text-sm">
            Yes. We use enterprise-grade encryption, SOC 2 Type II compliance, and zero-trust architecture. Your data is encrypted at rest and in transit, with regular security audits and penetration testing.
          </p>
</div>
</div>

<div className="flex cursor-pointer hover:bg-white/[0.02] transition-colors group border-white/10 border-b pt-6 pr-6 pb-6 pl-6 flex-col faq-item">
<div className="flex items-center justify-between w-full" onclick="toggleFAQ(this)">
<span className="text-white font-medium">Do I need coding skills?</span>
<svg className="faq-icon w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<div className="faq-content overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-slate-400 leading-relaxed mt-4 text-sm">
            Not at all. Aether is built for everyone with a visual, drag-and-drop interface. Advanced users can add custom code if needed, but it's entirely optional. Build powerful automations without writing a single line.
          </p>
</div>
</div>

<div className="md:border-r flex cursor-pointer hover:bg-white/[0.02] transition-colors group border-white/10 border-b pt-6 pr-6 pb-6 pl-6 flex-col faq-item">
<div className="flex items-center justify-between w-full" onclick="toggleFAQ(this)">
<span className="text-white font-medium">Which models are supported?</span>
<svg className="faq-icon w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<div className="faq-content overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-slate-400 leading-relaxed mt-4 text-sm">
            We support all major AI models including GPT-4, Claude, Gemini, Llama, and more. Switch between models seamlessly or use multiple models in the same workflow. Custom model endpoints are also supported.
          </p>
</div>
</div>

<div className="flex cursor-pointer hover:bg-white/[0.02] transition-colors group border-white/10 border-b pt-6 pr-6 pb-6 pl-6 flex-col faq-item">
<div className="flex items-center justify-between w-full" onclick="toggleFAQ(this)">
<span className="text-white font-medium">Can I access Aether on mobile?</span>
<svg className="faq-icon w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<div className="faq-content overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-slate-400 leading-relaxed mt-4 text-sm">
            Yes! Aether is fully responsive and works beautifully on mobile devices. Monitor workflows, check analytics, and manage agents on the go with our native iOS and Android apps coming soon.
          </p>
</div>
</div>

<div className="md:border-r flex cursor-pointer hover:bg-white/[0.02] transition-colors group border-white/10 border-b md:border-b-0 pt-6 pr-6 pb-6 pl-6 flex-col faq-item">
<div className="flex items-center justify-between w-full" onclick="toggleFAQ(this)">
<span className="text-white font-medium">What are the platform fees?</span>
<svg className="faq-icon w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<div className="faq-content overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-slate-400 leading-relaxed mt-4 text-sm">
            We offer flexible pricing based on usage. Start free with generous limits, then scale with pay-as-you-go or monthly plans. No hidden fees, no lock-in contracts. Visit our pricing page for details.
          </p>
</div>
</div>

<div className="flex cursor-pointer hover:bg-white/[0.02] transition-colors group pt-6 pr-6 pb-6 pl-6 flex-col faq-item">
<div className="flex items-center justify-between w-full" onclick="toggleFAQ(this)">
<span className="text-white font-medium">How do I contact support?</span>
<svg className="faq-icon w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<div className="faq-content overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-slate-400 leading-relaxed mt-4 text-sm">
            Reach us via live chat (available 24/7), email at support@aether.ai, or through our help center. Enterprise customers get dedicated support channels and priority response times.
          </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-20 relative">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-emerald-900/10 px-6 py-20 text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              Ready to transform your workflow?
            </h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Join thousands of forward-thinking companies using Aether to build
              intelligent, automated, and scalable business processes.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group bg-white hover:bg-slate-200 text-[#050505] px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2" onclick="route('pricing')">
                Get started for free
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
                Contact Sales
              </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020617] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="text-emerald-400">
<svg className="lucide lucide-triangle w-6 h-6 fill-current rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
</div>
<span className="text-white text-xl font-medium tracking-tight">
                    AETHER
                  </span>
</a>
<p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
                  The next generation of AI automation. Designed to help teams
                  build, deploy, and scale intelligent agents effortlessly.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5 4 1.7 8.1.3 8.1.3-3.3-3.3-3.9-8.4-3.9-8.4 4.5 1.5 6.3 3.8 6.3 3.8 0-2.4.9-4.8 1.2-5.4z"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Features
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Integrations
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Pricing
                    </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Changelog
                    </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Docs
                    </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                      About Us
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>
                      Pricing
                    </a>
</li>
<li className=""></li>
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Contact
                    </a>
</li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Community
                    </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Help Center
                    </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors" href="#">
                      API Reference
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Status
                    </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="/privacy-policy">
                      Privacy Policy
                    </a>
</li>
<li className="">
<a className="hover:text-emerald-400 transition-colors" href="#">
                      Terms of Service
                    </a>
</li>
<li className=""></li>
<li className=""></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-xs">
                © 2024 Aether AI Inc. All rights reserved.
              </p>
<div className="flex items-center gap-2"></div>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-[60vh] pt-32 px-6 text-center fade-in" id="page-pricing">
<h1 className="text-5xl font-medium text-white mb-6">
          Simple, transparent pricing
        </h1>
<p className="text-slate-400 mb-8">
          Page content placeholder for Routing demo.
        </p>
<button className="text-emerald-400 hover:text-emerald-300 underline" onclick="route('landing')">
          Back to Home
        </button>
</div>
<div className="hidden min-h-[60vh] pt-32 px-6 text-center fade-in" id="page-about">
<h1 className="text-5xl font-medium text-white mb-6">About Aether</h1>
<p className="text-slate-400 mb-8">
          We are building the future of autonomous workflows.
        </p>
<button className="text-emerald-400 hover:text-emerald-300 underline" onclick="route('landing')">
          Back to Home
        </button>
</div>
<div className="hidden min-h-[60vh] pt-32 px-6 text-center fade-in" id="page-contact">
<h1 className="text-5xl font-medium text-white mb-6">Get in touch</h1>
<p className="text-slate-400 mb-8">
          Our team is ready to answer your questions.
        </p>
<button className="text-emerald-400 hover:text-emerald-300 underline" onclick="route('landing')">
          Back to Home
        </button>
</div>
</main>


    </>
  );
}
