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



      const spotlight = document.getElementById('mouse-spotlight');
      if (spotlight) {
        window.addEventListener('mousemove', (e) => {
          spotlight.style.setProperty('--x', `${e.clientX}px`);
          spotlight.style.setProperty('--y', `${e.clientY}px`);
          spotlight.style.opacity = '1';
        });
        window.addEventListener('mouseleave', () => {
          spotlight.style.opacity = '0';
        });
      }
    


      document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.reveal-on-scroll, .reveal-slide-left, .reveal-slide-right').forEach(el => observer.observe(el));
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
      
<div className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 opacity-0" id="mouse-spotlight" style={{background: 'radial-gradient(circle 600px at var(--x, 50%) var(--y, 50%), rgba(86, 109, 243, 0.15), transparent 40%)', '--x': '199px', '--y': '5px', opacity: '1'}}></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-900 opacity-[0.1] blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[400px] bg-indigo-900 opacity-[0.05] blur-[100px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 backdrop-blur-md bg-black/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<a className="flex items-center gap-2 text-lg font-medium text-white tracking-tighter" href="#">
<span className="w-2 h-2 rounded-full bg-[#566DF3]"></span>
            CHRONOM AI
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">
            Log in
          </a>
<a className="text-sm font-medium bg-[#566DF3] hover:bg-[#485cd4] text-white px-4 py-2 rounded-full transition-all shadow-[0_0_15px_-3px_rgba(86,109,243,0.4)]" href="#demo">
            Book a demo
          </a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-[#000000] to-transparent blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-[#566DF3] mb-8 reveal-on-scroll">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
<span className="" style={{}}>Optimize Your Digital Workspace</span>
</div>
<h1 className="md:text-7xl leading-[1.1] reveal-on-scroll text-5xl font-semibold text-white tracking-tight mb-6 pb-2 drop-shadow-2xl capitalize">
          Orchestrate your
          <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 saturate-150">
            M365 Universe.
          </span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto reveal-on-scroll delay-100" style={{}}>
          Chronom AI helps organizations cut costs, boost productivity, and
          optimize security across Microsoft 365 - instantly.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll delay-200">
<a className="sm:w-auto hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-black bg-white w-full rounded-full pt-3 pr-8 pb-3 pl-8" href="#demo" style={{}}>
            Book a Demo
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="javascript:void(0)" onclick="document.getElementById('video-modal').classList.remove('hidden'); document.getElementById('video-modal').classList.add('flex'); var i = document.querySelector('#video-modal iframe'); i.src = i.dataset.src;">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
            How it works
          </a>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative group reveal-on-scroll">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen"></div>
<div className="absolute -inset-1 bg-gradient-to-b from-[#566DF3]/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>

<div className="absolute -top-[3px] -left-[3px] w-48 h-48 rounded-tl-2xl bg-gradient-to-br from-[#566DF3] via-[#566DF3]/40 to-transparent pointer-events-none z-0"></div>
<div className="absolute -bottom-[3px] -right-[3px] w-48 h-48 rounded-br-2xl bg-gradient-to-tl from-[#566DF3] via-[#566DF3]/40 to-transparent pointer-events-none z-0"></div>
<div className="relative z-10 rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>

<div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-5 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  Unused Licenses
                </span>
<svg aria-hidden="true" className="iconify text-red-400 iconify--lucide" data-icon="lucide:alert-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4m0 4h.01"></path>
</g>
</svg>
</div>
<div className="text-3xl font-medium tracking-tight text-white mb-1">
                142
              </div>
<div className="text-xs text-red-400 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
                +$4,260/mo waste
              </div>
</div>

<div className="p-5 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  Potential Savings
                </span>
<svg aria-hidden="true" className="iconify text-[#566DF3] iconify--lucide" data-icon="lucide:wallet" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</g>
</svg>
</div>
<div className="text-3xl font-medium tracking-tight text-white mb-1">
                $52k
              </div>
<div className="text-xs text-emerald-400 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
                Recoverable instantly
              </div>
</div>

<div className="p-5 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  Optimization Score
                </span>
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:activity" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-3xl font-medium tracking-tight text-white mb-1">
                94%
              </div>
<div className="text-xs text-neutral-500">
                Top 5% of organizations
              </div>
</div>

<div className="md:col-span-3 h-48 rounded-lg border border-white/5 bg-white/[0.02] relative overflow-hidden flex items-end p-6 gap-2">

<div className="w-full bg-[#566DF3]/10 h-[40%] rounded-sm relative group cursor-pointer hover:bg-[#566DF3]/20 transition-colors">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  $12k
                </div>
</div>
<div className="w-full bg-[#566DF3]/20 h-[60%] rounded-sm relative group cursor-pointer hover:bg-[#566DF3]/30 transition-colors">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  $18k
                </div>
</div>
<div className="w-full bg-[#566DF3]/40 h-[30%] rounded-sm relative group cursor-pointer hover:bg-[#566DF3]/50 transition-colors">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  $9k
                </div>
</div>
<div className="w-full bg-[#566DF3] h-[85%] rounded-sm relative group cursor-pointer shadow-[0_0_15px_rgba(86,109,243,0.3)]">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<div className="w-full bg-[#566DF3]/20 h-[50%] rounded-sm"></div>
<div className="w-full bg-[#566DF3]/10 h-[45%] rounded-sm"></div>
<div className="absolute top-6 right-6 text-xs text-neutral-500 text-right">
<div className="text-white font-medium">Monthly Spend</div>
<div>Last 6 months</div>
</div>
</div>
</div>
</div>
<div className="absolute -top-10 -right-4 z-20 hidden lg:flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md shadow-2xl animate-float max-w-[280px]">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div className="">
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">
              Upcoming Renewal
            </div>
<div className="text-xs text-white font-medium leading-relaxed">
              436 E3 licenses are about to renew in
              <span className="text-orange-400">24 days</span>
</div>
</div>
</div>
<div className="absolute bottom-20 -left-4 z-20 hidden lg:flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md shadow-2xl animate-float-delayed max-w-[280px]">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="18" x2="23" y1="8" y2="13"></line>
<line x1="23" x2="18" y1="8" y2="13"></line>
</svg>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">
              Waste Detected
            </div>
<div className="text-xs text-white font-medium leading-relaxed">
              43 Inactive users consuming licenses detected
            </div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<p className="reveal-on-scroll text-sm text-neutral-500 mb-5" style={{}}>
          Trusted by forward-thinking IT teams
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 transition-all duration-500 reveal-on-scroll">

<div className="h-8 md:h-10 text-white flex items-center hover:opacity-100 transition-opacity cursor-default" title="Bluewave Technology Group">
<svg className="h-full w-auto overflow-visible" fill="currentColor" viewbox="0 0 240 60">
<path d="M150 16h40a3 3 0 0 1 0 6h-40a3 3 0 0 1 0-6z" opacity="0.6"></path>
<path d="M165 29h50a3 3 0 0 1 0 6h-50a3 3 0 0 1 0-6z" opacity="0.8"></path>
<path d="M180 42h30a3 3 0 0 1 0 6h-30a3 3 0 0 1 0-6z" opacity="0.4"></path>
<text fontFamily="Inter, sans-serif" fontSize="36" font-weight="700" letter-spacing="-1" x="0" y="38">
                Bluewave
              </text>
<text fontFamily="Inter, sans-serif" fontSize="9" font-weight="600" letter-spacing="2.5" opacity="0.8" x="2" y="54">
                TECHNOLOGY GROUP
              </text>
</svg>
</div>

<div className="h-9 md:h-11 text-white flex items-center hover:opacity-100 transition-opacity cursor-default" title="Cloud Edge">
<svg className="h-full w-auto overflow-visible" fill="currentColor" viewbox="0 0 220 50">
<text fontFamily="Inter, sans-serif" fontSize="28" font-weight="800" letter-spacing="-0.5" x="0" y="35">
                CLOUD
              </text>
<g transform="translate(110, 25)">
<circle cx="0" cy="0" fill="none" r="16" stroke="currentColor" strokeWidth="2.5"></circle>
<path d="M-8 -3 h16 v5 h-16 z" fill="currentColor"></path>
<circle cx="-4" cy="-8" fill="currentColor" r="1.5"></circle>
<circle cx="4" cy="-8" fill="currentColor" r="1.5"></circle>
<path d="M12 -14 l3 3 l-3 3 l-3-3 z" fill="currentColor"></path>
<path d="M18 -8 l2 2 l-2 2 l-2-2 z" fill="currentColor"></path>
</g>
<text className="" fontFamily="Inter, sans-serif" fontSize="28" font-weight="800" letter-spacing="-0.5" x="140" y="35">
                EDGE
              </text>
</svg>
</div>

<div className="h-8 md:h-10 text-white flex items-center hover:opacity-100 transition-opacity cursor-default" title="SoftStackers">
<svg className="h-full w-auto overflow-visible" fill="currentColor" viewbox="0 0 240 50">
<g transform="translate(15, 25)">
<rect height="4" rx="1" transform="rotate(-8) translate(0, -2)" width="22" x="-14" y="-14"></rect>
<rect height="4" rx="1" transform="rotate(-4) translate(2, 0)" width="22" x="-14" y="-5"></rect>
<rect height="4" rx="1" transform="rotate(0) translate(4, 0)" width="22" x="-14" y="4"></rect>
<rect height="4" rx="1" transform="rotate(4) translate(2, 0)" width="22" x="-14" y="13"></rect>
</g>
<text className="" fill="none" fontFamily="Inter, sans-serif" fontSize="34" font-weight="300" letter-spacing="-0.5" stroke="currentColor" strokeWidth="0.8" x="50" y="35">
                Soft
              </text>
<text className="" fill="currentColor" fontFamily="Inter, sans-serif" fontSize="34" font-weight="700" letter-spacing="-0.5" x="118" y="35">
                Stackers
              </text>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="benefits">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-[#566DF3] mb-6 w-fit reveal-slide-left">
<svg className="iconify iconify--lucide" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="" style={{}}>Cost Optimization</span>
</div>
<h2 className="md:text-5xl leading-[1.1] capitilize text-4xl font-semibold text-white tracking-tight mb-6 capitalize reveal-slide-left" style={{}}>
            Stop paying for licenses
            <span className="text-[#566DF3]">nobody uses.</span>
</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8 delay-100 reveal-slide-left">
            Chronom AI finds the waste hiding in your Microsoft 365 environment.
            Unused subscriptions, redundant features, and forgotten accounts
            silently drain your budget.
          </p>
</div>
<div className="relative overflow-x-hidden overflow-y-visible h-auto reveal-slide-right">

<div className="absolute inset-0 bg-gradient-to-r from-[#566DF3]/20 to-purple-500/10 blur-3xl opacity-30"></div>

<div className="absolute bottom-0 right-4 bg-[#111] border border-white/10 rounded-xl p-3 shadow-2xl flex items-center gap-3 z-10 w-[200px]">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="transform -rotate-90 w-10 h-10">
<circle cx="20" cy="20" fill="transparent" r="16" stroke="#333" strokeWidth="3"></circle>
<circle cx="20" cy="20" fill="transparent" r="16" stroke="#566DF3" stroke-dasharray="100" stroke-dashoffset="15" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute text-[10px] font-semibold text-white">
                85%
              </div>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-neutral-400 uppercase tracking-wider font-semibold">
                Optimized
              </span>
<span className="text-xs font-semibold text-emerald-400">
                +15% Savings
              </span>
</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-500">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>

<div className="p-6 bg-[#0A0A0A]">

<div className="flex gap-4 mb-6 flex-col sm:flex-row">
<div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10">
<div className="flex items-center justify-between mb-2">
<div className="text-[10px] text-red-400 font-medium uppercase tracking-wider">
                      Waste Detected
                    </div>
<svg className="text-red-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">
                    $14,250
                    <span className="text-sm text-neutral-500 font-normal ml-1">
                      /yr
                    </span>
</div>
</div>
<div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-[#566DF3]/5 to-transparent border border-[#566DF3]/10">
<div className="flex items-center justify-between mb-2">
<div className="text-[10px] text-[#566DF3] font-medium uppercase tracking-wider">
                      Inactive Users
                    </div>
<svg className="text-[#566DF3]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">
                    24
                    <span className="text-sm text-neutral-500 font-normal ml-1">
                      accounts
                    </span>
</div>
</div>
</div>

<div className="overflow-x-hidden -mx-6 px-6 pb-2">
<div className="min-w-[600px] lg:min-w-0 space-y-2">

<div className="grid grid-cols-12 text-[9px] text-neutral-500 font-medium uppercase tracking-wider px-3 pb-2">
<div className="col-span-4">User</div>
<div className="col-span-3">License</div>
<div className="col-span-3">Last Active</div>
<div className="col-span-2 text-right">Action</div>
</div>

<div className="grid grid-cols-12 items-center p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group">
<div className="col-span-4 flex items-center gap-2.5">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-[10px] flex items-center justify-center text-white font-medium shadow-inner">
                        SJ
                      </div>
<div className="min-w-0">
<div className="text-xs text-white font-medium truncate">
                          Sarah Jenkins
                        </div>
<div className="text-[9px] text-neutral-500 truncate">
                          sarah.j@company.com
                        </div>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-300 border border-white/5">
                        E5 Enterprise
                      </span>
</div>
<div className="col-span-3 text-[10px] text-red-400 font-medium flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                      90 days ago
                    </div>
<div className="col-span-2 text-right">
<button className="text-[10px] bg-red-500/10 hover:bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/20 transition-colors font-medium">
                        Revoke
                      </button>
</div>
</div>

<div className="grid grid-cols-12 items-center p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group">
<div className="col-span-4 flex items-center gap-2.5">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-[10px] flex items-center justify-center text-white font-medium shadow-inner">
                        MK
                      </div>
<div className="min-w-0">
<div className="text-xs text-white font-medium truncate">
                          Mike Klein
                        </div>
<div className="text-[9px] text-neutral-500 truncate">
                          m.klein@company.com
                        </div>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-300 border border-white/5">
                        E3 Plan
                      </span>
</div>
<div className="col-span-3 text-[10px] text-orange-400 font-medium flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      45 days ago
                    </div>
<div className="col-span-2 text-right">
<button className="text-[10px] bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 px-2 py-1 rounded border border-orange-500/20 transition-colors font-medium">
                        Downgrade
                      </button>
</div>
</div>

<div className="grid grid-cols-12 items-center p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group">
<div className="col-span-4 flex items-center gap-2.5">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-[10px] flex items-center justify-center text-white font-medium shadow-inner">
                        DT
                      </div>
<div className="min-w-0">
<div className="text-xs text-white font-medium truncate">
                          Dev Team Shared
                        </div>
<div className="text-[9px] text-neutral-500 truncate">
                          dev.ops@company.com
                        </div>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-300 border border-white/5">
                        P2 Plan
                      </span>
</div>
<div className="col-span-3 text-[10px] text-neutral-400 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      2 days ago
                    </div>
<div className="col-span-2 text-right">
<div className="text-[10px] text-emerald-500 flex items-center justify-end gap-1 font-medium">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        Active
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/20" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-[#566DF3] mb-6">
<svg className="iconify iconify--lucide" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
<span className="" style={{}}>Governance and Control</span>
</div>
<h2 className="md:text-5xl leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-6 capitalize">
            Complete control over
            <span className="text-neutral-400">your environment</span>
</h2>
<p className="text-neutral-400">
            Eliminate redundancy and consolidate overlapping tools without
            losing capability.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-white/20 transition-all duration-500 md:row-span-2 flex flex-col reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-br from-[#566DF3]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex flex-col h-full z-10 relative">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#566DF3] group-hover:bg-[#566DF3] group-hover:text-white transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:crosshair" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path>
</g>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                Pinpoint Unused Licenses
              </h3>
<p className="leading-relaxed text-neutral-400 mb-8">
                Identify every dormant subscription and orphaned account
                bleeding your budget instantly.
              </p>
<div className="relative w-full rounded-xl bg-white/5 border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-white/10 transition-colors flex-1 min-h-[14rem]">
<div className="space-y-3 w-full max-w-[80%]">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 opacity-40">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="h-2 w-20 bg-white/10 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-[#566DF3]/10 border border-[#566DF3]/20 group-hover:scale-105 group-hover:bg-[#566DF3]/20 transition-all duration-300 relative z-10">
<div className="w-8 h-8 rounded-full bg-[#566DF3]/20 flex items-center justify-center text-[#566DF3]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4m0 4h.01"></path>
</g>
</svg>
</div>
<div className="h-2 w-24 bg-white/20 rounded-full"></div>
<div className="ml-auto text-[10px] text-[#566DF3] font-mono font-bold tracking-wide">
                      UNUSED
                    </div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 opacity-40">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-white/20 transition-all duration-500 reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="z-10 flex flex-col lg:flex-row gap-6 h-full relative gap-x-6 gap-y-6">
<div className="flex flex-col justify-between lg:w-1/2">
<div className="">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down-circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path className="" d="M12 8v8m-4-4l4 4l4-4"></path>
</g>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                    Reduce SaaS Spend
                  </h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                    Research security and storage stacks to identify
                    consolidation potential between different resources.
                  </p>
</div>
</div>
<div className="relative flex-1 min-h-[12rem] lg:h-auto w-full rounded-xl bg-white/5 border border-white/5 overflow-hidden p-6 group-hover:border-white/10 transition-colors flex flex-col justify-end">
<div className="flex items-end justify-center gap-3 h-full w-full pb-2">
<div className="flex flex-col items-center gap-2 w-8 group/bar">
<div className="w-full bg-white/10 h-16 rounded-sm relative overflow-hidden"></div>
<span className="text-[10px] text-neutral-500 font-medium">
                      Sec
                    </span>
</div>
<div className="flex flex-col items-center gap-2 w-8 group/bar">
<div className="w-full bg-white/10 h-12 rounded-sm relative overflow-hidden"></div>
<span className="text-[10px] text-neutral-500 font-medium">
                      Store
                    </span>
</div>
<div className="flex flex-col items-center gap-2 w-8 group/bar">
<div className="w-full bg-emerald-500/20 h-20 rounded-sm relative overflow-hidden group-hover:h-10 transition-all duration-700 ease-out border-t border-x border-emerald-500/50">
<div className="absolute bottom-0 w-full h-full bg-emerald-500/20"></div>
</div>
<span className="text-[10px] text-emerald-400 font-medium">
                      Dupe
                    </span>
</div>
<div className="flex flex-col items-center gap-2 w-8 group/bar">
<div className="w-full bg-white/10 h-10 rounded-sm relative overflow-hidden"></div>
<span className="text-[10px] text-neutral-500 font-medium">
                      Apps
                    </span>
</div>
</div>
<div className="absolute top-3 right-3 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                  -35%
                </div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-white/20 transition-all duration-500 reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col lg:flex-row gap-6">
<div className="flex flex-col justify-between lg:w-1/2">
<div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sliders-horizontal" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                    Rightsize Environment
                  </h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                    Check mailboxes, storage, and apps to find the best fit for
                    every user—stop overpaying for unused.
                  </p>
</div>
</div>
<div className="relative flex-1 min-h-[12rem] lg:h-auto w-full rounded-xl bg-white/5 border border-white/5 overflow-hidden flex flex-col justify-center gap-4 px-6 group-hover:border-white/10 transition-colors">
<div className="w-full">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1.5 font-medium tracking-wide uppercase">
<span>Mailbox</span>
<span className="text-white">50GB</span>
</div>
<div className="relative w-full h-1.5 bg-white/10 rounded-full">
<div className="absolute top-0 left-0 h-full bg-purple-500 w-[70%] group-hover:w-[40%] transition-all duration-1000 ease-in-out"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[70%] group-hover:left-[40%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000 ease-in-out"></div>
</div>
</div>
<div className="w-full">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1.5 font-medium tracking-wide uppercase">
<span>Storage</span>
<span className="text-white">1TB</span>
</div>
<div className="relative w-full h-1.5 bg-white/10 rounded-full">
<div className="absolute top-0 left-0 h-full bg-white/20 w-[40%] group-hover:w-[60%] transition-all duration-1000 ease-in-out"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[40%] group-hover:left-[60%] w-3 h-3 bg-neutral-400 rounded-full transition-all duration-1000 ease-in-out"></div>
</div>
</div>
<div className="w-full">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1.5 font-medium tracking-wide uppercase">
<span>Apps</span>
<span className="text-white">Opt</span>
</div>
<div className="relative w-full h-1.5 bg-white/10 rounded-full">
<div className="absolute top-0 left-0 h-full bg-purple-500/50 w-[85%] group-hover:w-[75%] transition-all duration-1000 ease-in-out"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[85%] group-hover:left-[75%] w-3 h-3 bg-purple-300 rounded-full transition-all duration-1000 ease-in-out"></div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 relative z-10" id="demo">
<div className="max-w-6xl mx-auto">

<div className="relative overflow-hidden rounded-[2.5rem] bg-black border border-white/10 isolate group shadow-2xl reveal-on-scroll">


<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

<div className="absolute right-0 top-0 bottom-0 w-[60%] bg-gradient-to-l from-[#566DF3]/80 via-[#566DF3]/30 to-transparent blur-[120px] opacity-90 pointer-events-none z-0"></div>
<div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/20 blur-[90px] rounded-full pointer-events-none mix-blend-overlay z-0"></div>

<div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center lg:py-32">


<h2 className="sm:text-6xl md:text-7xl text-5xl font-semibold text-white tracking-tighter max-w-4xl mb-6 drop-shadow-xl capitalize">
              Realize your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-200">
                potential.
              </span>
<br/>
              Start saving today.
            </h2>

<p className="max-w-xl text-lg text-blue-100/80 mb-10 leading-relaxed font-medium">
              Get a comprehensive audit of your environment and see exactly how
              much you can save in under 15 minutes.
            </p>

<form className="flex flex-col gap-3 sm:flex-row shadow-blue-900/20 w-full max-w-md shadow-2xl gap-x-3 gap-y-3 justify-center">
<button className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-blue-50 hover:scale-105 active:scale-95" type="submit">
                Book demo
                <svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
<p className="mt-6 text-xs font-medium text-blue-200/60">
              No credit card required. Free initial audit.
            </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-20 pb-10 px-6 bg-black relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#566DF3]/5 to-transparent pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 flex flex-col gap-6 gap-x-6 gap-y-6">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<span className="w-2.5 h-2.5 rounded-full bg-[#566DF3] shadow-[0_0_12px_rgba(86,109,243,0.8)]"></span>
            CHRONOM AI
          </a>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
            The intelligent platform for Microsoft 365 cost optimization,
            security governance, and operational efficiency.
          </p>
<div className="flex flex-col mt-4 gap-x-4 gap-y-4">
<div className="flex flex-col sm:flex-row gap-3 gap-x-3 gap-y-3">
<a className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all text-xs font-medium text-neutral-300 group" href="#">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-white transition-colors iconify--simple-icons" data-icon="simple-icons:amazonaws" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6.763 10.036q.002.446.088.71c.064.176.144.368.256.576c.04.063.056.127.056.183q.002.12-.152.24l-.503.335a.4.4 0 0 1-.208.072q-.12-.002-.239-.112a2.5 2.5 0 0 1-.287-.375a6 6 0 0 1-.248-.471q-.934 1.101-2.347 1.101c-.67 0-1.205-.191-1.596-.574q-.588-.575-.59-1.533c0-.678.239-1.23.726-1.644c.487-.415 1.133-.623 1.955-.623c.272 0 .551.024.846.064c.296.04.6.104.918.176v-.583q-.001-.909-.375-1.277c-.255-.248-.686-.367-1.3-.367c-.28 0-.568.031-.863.103q-.443.106-.862.272a2 2 0 0 1-.28.104a.5.5 0 0 1-.127.023q-.168.002-.168-.247v-.391c0-.128.016-.224.056-.28a.6.6 0 0 1 .224-.167a4.6 4.6 0 0 1 1.005-.36a4.8 4.8 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647q.66.645.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144a1.8 1.8 0 0 0 .758-.51a1.3 1.3 0 0 0 .272-.512c.047-.191.08-.423.08-.694v-.335a7 7 0 0 0-.735-.136a6 6 0 0 0-.75-.048c-.535 0-.926.104-1.19.32c-.263.215-.39.518-.39.917c0 .375.095.655.295.846c.191.2.47.296.838.296m6.41.862c-.144 0-.24-.024-.304-.08c-.064-.048-.12-.16-.168-.311L7.586 5.55a1.4 1.4 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783q.227-.001.31.08c.065.048.113.16.16.312l1.342 5.284l1.245-5.284q.058-.24.151-.312a.55.55 0 0 1 .32-.08h.638c.152 0 .256.025.32.08c.063.048.12.16.151.312l1.261 5.348l1.381-5.348q.074-.24.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2c0 .04-.009.08-.017.128a1 1 0 0 1-.056.2l-1.923 6.17q-.072.24-.168.311a.5.5 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08c-.063-.056-.119-.16-.15-.32l-1.238-5.148l-1.23 5.14c-.04.16-.087.264-.15.32c-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143c-.399-.096-.71-.2-.918-.32c-.128-.071-.215-.151-.247-.223a.6.6 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247q.072 0 .144.024c.048.016.12.048.2.08q.408.181.878.279c.319.064.63.096.95.096c.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758a.78.78 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.9 1.9 0 0 1-.4-1.158q0-.502.216-.886c.144-.255.335-.479.575-.654c.24-.184.51-.32.83-.415c.32-.096.655-.136 1.006-.136c.175 0 .359.008.535.032c.183.024.35.056.518.088q.24.058.455.127q.216.072.336.144a.7.7 0 0 1 .24.2a.43.43 0 0 1 .071.263v.375q-.002.254-.184.256a.8.8 0 0 1-.303-.096a3.65 3.65 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223s-.375.383-.375.71c0 .224.08.416.24.567c.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767s.367.702.367 1.117c0 .343-.072.655-.207.926a2.2 2.2 0 0 1-.583.703c-.248.2-.543.343-.886.447c-.36.111-.734.167-1.142.167m1.509 3.88c-2.626 1.94-6.442 2.969-9.722 2.969c-4.598 0-8.74-1.7-11.87-4.526c-.247-.223-.024-.527.272-.351c3.384 1.963 7.559 3.153 11.877 3.153c2.914 0 6.114-.607 9.06-1.852c.439-.2.814.287.383.607m1.094-1.246c-.336-.43-2.22-.207-3.074-.103c-.255.032-.295-.192-.063-.36c1.5-1.053 3.967-.75 4.254-.399c.287.36-.08 2.826-1.485 4.007c-.215.184-.423.088-.327-.151c.32-.79 1.03-2.57.695-2.994" fill="currentColor"></path>
</svg>
                AWS Marketplace
              </a>
<a className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all text-xs font-medium text-neutral-300 group" href="#">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-[#0078D4] transition-colors iconify--simple-icons" data-icon="simple-icons:microsoftazure" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892l4.947 3.675c.28.208.618.32.966.32m-3.084-12.531l3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76l-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684" fill="currentColor"></path>
</svg>
                Azure Marketplace
              </a>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-medium text-emerald-400 w-fit">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
              SOC 2 Type II Compliant
            </div>
</div>
</div>
<div className="lg:col-start-4">
<h4 className="text-sm font-semibold text-white mb-5">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#features">
                Features
              </a>
</li>
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Security
              </a>
</li>
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Integrations
              </a>
</li>
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Pricing
              </a>
</li>
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Changelog
              </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-5">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#">
                About
              </a>
</li>
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Blog
              </a>
</li>
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Contact
              </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-5">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Privacy Policy
              </a>
</li>
<li>
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Terms of Service
              </a>
</li>
<li className="">
<a className="hover:text-[#566DF3] transition-colors" href="#">
                Cookie Policy
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xs text-neutral-600 font-medium">
          © 2024 Chronom AI Inc. All rights reserved.
        </div>
<div className="flex gap-5 text-neutral-500">
<a className="hover:text-white transition-colors p-1" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="hover:text-white transition-colors p-1" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300" id="video-modal" onclick="if(event.target === this) { this.classList.add('hidden'); this.classList.remove('flex'); this.querySelector('iframe').src = 'about:blank'; }">
<div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
<button className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors backdrop-blur-md group" onclick="var m=document.getElementById('video-modal');m.classList.add('hidden');m.classList.remove('flex');m.querySelector('iframe').src='about:blank';" type="button">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<iframe allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" src="about:blank" title="YouTube video player"></iframe>
</div>
</div>


    </>
  );
}
