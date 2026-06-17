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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Single Page Application Navigation Logic
      function navigate(pageId) {
        // Find current active page
        const pages = document.querySelectorAll('.page-section');

        pages.forEach(page => {
          if (page.classList.contains('page-active')) {
            page.classList.remove('page-active');
            page.classList.add('page-exit');

            // Wait for CSS transition to complete before hiding
            setTimeout(() => {
              page.classList.add('hidden');
            }, 700);
          }
        });

        // Setup Target Page
        const target = document.getElementById(pageId);
        target.classList.remove('hidden');

        // Force browser reflow to ensure display block applies before opacity changes
        void target.offsetWidth;

        // Bring target page into view
        target.classList.remove('page-exit');
        target.classList.add('page-active');

        // Reset scroll position
        target.scrollTo({ top: 0, behavior: 'auto' });
      }

      // Mobile Menu Navigation
      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            // Slight delay to allow display change to register
            setTimeout(() => {
                menu.classList.remove('opacity-0', 'pointer-events-none');
            }, 10);
        } else {
            menu.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                menu.classList.add('hidden');
            }, 300);
        }
      }

      function navigateMobile(pageId) {
        toggleMobileMenu();
        setTimeout(() => navigate(pageId), 300);
      }

      // Call-to-action handlers
      function scrollToCalendar() {
        const cal = document.getElementById('booking-calendar');
        if (cal) {
          cal.scrollIntoView({ behavior: 'smooth' });
        }
      }

      function openOleyAI() {
        // Routes to contact page as placeholder for AI agent trigger
        navigate('contact');
      }

      // Calendar Modal Logic
      function openCalendarModal() {
        document.getElementById('calendar-modal').classList.remove('hidden');
        document.getElementById('calendar-modal').classList.add('flex');
        setTimeout(() => {
          document.getElementById('calendar-modal-backdrop').classList.remove('opacity-0');
          document.getElementById('calendar-modal-content').classList.remove('opacity-0', 'translate-y-4', 'scale-95');
        }, 10);
      }

      function closeCalendarModal() {
        document.getElementById('calendar-modal-backdrop').classList.add('opacity-0');
        document.getElementById('calendar-modal-content').classList.add('opacity-0', 'translate-y-4', 'scale-95');
        setTimeout(() => {
          document.getElementById('calendar-modal').classList.add('hidden');
          document.getElementById('calendar-modal').classList.remove('flex');
        }, 300);
      }

      // Application Modal Logic
      function openApplicationModal() {
        document.getElementById('app-modal').classList.remove('hidden');
        document.getElementById('app-modal').classList.add('flex');
        setTimeout(() => {
          document.getElementById('app-modal-backdrop').classList.remove('opacity-0');
          document.getElementById('app-modal-content').classList.remove('opacity-0', 'translate-y-4', 'scale-95');
        }, 10);
      }

      function closeApplicationModal() {
        document.getElementById('app-modal-backdrop').classList.add('opacity-0');
        document.getElementById('app-modal-content').classList.add('opacity-0', 'translate-y-4', 'scale-95');
        setTimeout(() => {
          document.getElementById('app-modal').classList.add('hidden');
          document.getElementById('app-modal').classList.remove('flex');
        }, 300);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#030303]/80 backdrop-blur-2xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<div className="flex-shrink-0 flex items-center cursor-pointer group" onclick="navigate('home')">
<div className="flex flex-col">
<span className="leading-none text-xl font-medium text-white tracking-tighter">
                OLEY POWER
              </span>
<span className="text-xs font-normal tracking-widest text-zinc-500 uppercase mt-1">
                Marketing
              </span>
</div>
</div>
<div className="hidden md:flex items-center space-x-2 bg-white/[0.02] border border-white/[0.05] rounded-full px-2 py-1.5 backdrop-blur-md">
<div className="relative group">
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all flex items-center gap-1 cursor-default">
                Services
                <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute left-0 top-full pt-2 w-56 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
<div className="rounded-2xl bg-[#030303]/95 backdrop-blur-xl border border-white/[0.05] overflow-hidden shadow-2xl">
<button className="block w-full text-left px-4 py-3 text-xs text-zinc-400 hover:bg-white/[0.05] hover:text-white transition-colors" onclick="navigate('services')">
                    Business Solutions Package
                  </button>
<button className="block w-full text-left px-4 py-3 text-xs text-zinc-400 hover:bg-white/[0.05] hover:text-white transition-colors border-t border-white/[0.05]" onclick="navigate('va-services')">
                    VA Services
                  </button>
</div>
</div>
</div>
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all" onclick="navigate('results')">
              Results
            </button>
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all" onclick="navigate('career')">
              Career
            </button>
<button className="hover:text-white hover:bg-white/[0.05] transition-all text-xs font-normal text-zinc-400 rounded-full pt-1.5 pr-4 pb-1.5 pl-4" onclick="navigate('about')">
              About
            </button>
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all" onclick="navigate('contact')">
              Contact
            </button>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex group transition-all hover:bg-zinc-200 text-xs font-normal text-black bg-white rounded-full pt-2 pr-5 pb-2 pl-5 gap-x-2 gap-y-2 items-center" onclick="openCalendarModal()">
              Book a Call
              <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="md:hidden w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="toggleMobileMenu()">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-[#030303]/95 backdrop-blur-2xl hidden flex-col justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none" id="mobile-menu">
<button className="absolute top-5 right-4 w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="toggleMobileMenu()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="flex flex-col items-center gap-8 text-lg font-normal tracking-tight w-full px-6">
<div className="w-full text-center py-2 flex flex-col items-center gap-2">
<span className="text-white transition-colors cursor-default w-full text-center py-1 font-normal">
            Services
          </span>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-1 text-base font-light" onclick="navigateMobile('services')">
            Business Solutions Package
          </a>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-1 text-base font-light" onclick="navigateMobile('va-services')">
            VA Services
          </a>
</div>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('results')">
          Results
        </a>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('career')">
          Career
        </a>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('about')">
          About
        </a>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('contact')">
          Contact
        </a>
<button className="mt-4 w-full max-w-xs px-6 py-3.5 rounded-full bg-white text-black font-normal text-sm flex items-center justify-center gap-2" onclick="toggleMobileMenu(); openCalendarModal()">
          Book a Call
          <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<main className="page-container relative">

<div className="absolute inset-0 z-0 pointer-events-none fixed">
<div className="absolute inset-0 bg-grid opacity-40"></div>
<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] mix-blend-screen"></div>
</div>

<div className="page-section page-exit hidden" id="home">
<section className="pt-32 pb-20 lg:pt-40 lg:pb-32 max-w-7xl mx-auto px-4 relative flex flex-col items-center justify-center min-h-[90vh] shrink-0">
<div className="w-full max-w-4xl text-center z-20 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.05] text-xs font-normal tracking-widest mb-8 text-teal-400 uppercase backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Systems Online v2.0
            </div>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-6 leading-[1.05]">
              AI-Powered Growth
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 glow-text">
                For Real Businesses
              </span>
</h1>
<p className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Oley Power Marketing builds the digital infrastructure that
              predictable revenue demands. We turn cold traffic into closed
              deals using next-gen automation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-normal text-sm hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="scrollToCalendar()">
                Book a Strategy Call
              </button>
<button className="sm:w-auto hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 flex group text-sm font-normal text-white w-full border border-white/10 rounded-full px-7 py-3.5 gap-x-2 items-center justify-center backdrop-blur-md" onclick="openOleyAI()">
<iconify-icon className="text-lg text-teal-400" icon="solar:chat-round-dots-linear"></iconify-icon>
                Ask Oley AI
              </button>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 pb-32 relative z-20 border-t border-white/[0.05] pt-24 mt-10 shrink-0">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white mb-4">
                Core Infrastructure
              </h2>
<p className="text-zinc-400 text-sm max-w-xl font-light">
                We don't just run ads. We architect end-to-end revenue machines
                designed to capture, nurture, and close leads on autopilot.
              </p>
</div>
<button className="flex items-center gap-2 text-xs font-normal text-teal-400 hover:text-teal-300 transition-colors group pb-1 uppercase tracking-widest" onclick="navigate('services')">
              Explore Packages
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="p-8 rounded-3xl glass-card transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-2">
                Omnichannel Ads
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Precision-targeted campaigns across Meta, Google, and TikTok to
                flood your funnel with high-intent prospects.
              </p>
</div>
<div className="p-8 rounded-3xl glass-card transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:cpu-setting-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-2">
                AI Agents
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Deploy custom AI architecture to instantly engage, qualify, and
                book appointments 24/7 without human delay.
              </p>
</div>
<div className="p-8 rounded-3xl glass-card transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-2">
                CRM &amp; Automations
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Seamlessly integrate lead flow into robust CRMs with automated
                sequences that prevent deals from slipping.
              </p>
</div>
<div className="p-8 rounded-3xl glass-card transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:sort-from-bottom-to-top-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-2">
                Conversion Funnels
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Custom-built landing pages engineered strictly for conversion
                rate optimization and maximizing your ROI.
              </p>
</div>
</div>
<div className="mt-32 pt-24 border-t border-white/[0.05] scroll-mt-24" id="booking-calendar">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4">
                Initialize Growth
              </h2>
<p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
                Select a time below to see how we can architect your revenue
                machine.
              </p>
</div>
<div className="w-full max-w-4xl mx-auto glass-card rounded-3xl p-4 sm:p-8">
<iframe data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-unique-id-mapped="true" id="UGBPGc4JvHVoiaVku2XZ_1774623020977" scrolling="yes" src="https://api.leadconnectorhq.com/widget/booking/UGBPGc4JvHVoiaVku2XZ" style={{width: '100%', border: 'none', overflow: 'auto', borderRadius: '1rem'}}></iframe>
<br/>

</div>
</div>
</section>

<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="services">
<section className="pt-36 pb-24 max-w-7xl mx-auto px-4 relative shrink-0 flex-1 w-full">
<div className="text-center mb-16">
<div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase mb-4">
              Oley Power Marketing LLC
            </div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4">
              Business Solutions Package
            </h2>
<p className="text-zinc-400 max-w-xl mx-auto text-sm font-light">
              Automated systems engineered to scale your revenue to the next
              tier.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 relative z-10">

<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300 relative">
<div className="mb-5">
<h3 className="text-base font-normal tracking-tight text-white mb-1">
                  Starter Package
                </h3>
<p className="text-xs text-zinc-500">Entry / Local Businesses</p>
</div>
<div className="mb-5 pb-5 border-b border-white/[0.05]">
<div className="text-3xl font-normal tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  $1,000
                  <span className="text-sm text-zinc-500 font-normal">
                    – $2,500
                  </span>
</div>
<div className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-normal">
                  Per Month
                </div>
</div>
<div className="mb-6">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-3">
                  Perfect For
                </div>
<div className="text-xs text-zinc-400 leading-relaxed font-light">
                  Small businesses, Realtors, local shops, and startups.
                </div>
</div>
<div className="flex-1">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-4">
                  Includes
                </div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Social media management (8–12 posts)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Basic ads setup (Facebook/IG)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Light SEO / Google presence
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Monthly report
                    </span>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-white/[0.05] text-xs font-light text-zinc-500">
                👉 Aligns with small business budgets ($1K–$4K typical)
              </div>
</div>

<div className="p-8 rounded-3xl bg-white/[0.03] border border-teal-500/20 flex flex-col h-full relative shadow-[0_0_30px_rgba(45,212,191,0.03)] transform md:-translate-y-2 group hover:border-teal-500/40 transition-all duration-300">
<div className="absolute -top-3 left-8 bg-teal-500/10 border border-teal-500/30 text-teal-400 px-3 py-1 rounded-full text-xs font-normal tracking-widest uppercase backdrop-blur-md">
                Your Sweet Spot
              </div>
<div className="mb-5 mt-2">
<h3 className="text-base font-normal tracking-tight text-white mb-1">
                  Growth Package
                </h3>
<p className="text-xs text-teal-200/60">Agencies Live Here</p>
</div>
<div className="mb-5 pb-5 border-b border-white/[0.05]">
<div className="text-3xl font-normal tracking-tight text-teal-400">
                  $3,000
                  <span className="text-sm text-zinc-400 font-normal">
                    – $6,000
                  </span>
</div>
<div className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-normal">
                  Per Month
                </div>
</div>
<div className="mb-6">
<div className="text-xs font-normal uppercase tracking-widest text-teal-500/70 mb-3">
                  Perfect For
                </div>
<div className="text-xs text-zinc-300 leading-relaxed font-light">
                  Businesses ready to scale, credit repair, travel, real estate,
                  and dealerships.
                </div>
</div>
<div className="flex-1">
<div className="text-xs font-normal uppercase tracking-widest text-teal-500/70 mb-4">
                  Includes
                </div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      Paid ads (FB + Google)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      Funnel / landing pages
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      CRM + lead automation
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      Content + creatives
                    </span>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-teal-500/20 text-xs font-light text-teal-200/80">
                👉 Most agencies live here ($2.5K–$6K avg).
                <span className="font-normal text-teal-400 block mt-1">
                  💡 This is where YOU should focus closing deals.
                </span>
</div>
</div>

<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300 relative">
<div className="mb-5">
<h3 className="text-base font-normal tracking-tight text-white mb-1">
                  Authority Package
                </h3>
<p className="text-xs text-zinc-500">High-Ticket Clients</p>
</div>
<div className="mb-5 pb-5 border-b border-white/[0.05]">
<div className="text-3xl font-normal tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  $7,500
                  <span className="text-sm text-zinc-500 font-normal">– $15k</span>
</div>
<div className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-normal">
                  Per Month
                </div>
</div>
<div className="mb-6">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-3">
                  Perfect For
                </div>
<div className="text-xs text-zinc-400 leading-relaxed font-light">
                  Call centers, multi-location businesses, and high-ticket
                  industries (legal, finance, timeshare).
                </div>
</div>
<div className="flex-1">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-4">
                  Includes
                </div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Full funnel system (ads + CRM + automation)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      AI chatbot (your specialty 🔥)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Email/SMS campaigns
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Retargeting systems
                    </span>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-white/[0.05] text-xs font-light text-zinc-500">
                👉 Scaling businesses commonly invest $5K–$15K/month.
              </div>
</div>

<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300 relative">
<div className="mb-5">
<h3 className="text-base font-normal tracking-tight text-white mb-1">
                  Elite / Performance
                </h3>
<p className="text-xs text-zinc-500">Your CEO Level</p>
</div>
<div className="mb-5 pb-5 border-b border-white/[0.05]">
<div className="text-3xl font-normal tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  $15k
                  <span className="text-sm text-zinc-500 font-normal">– $50k+</span>
</div>
<div className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-normal">
                  Per Month
                </div>
</div>
<div className="mb-6">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-3">
                  Perfect For
                </div>
<div className="text-xs text-zinc-400 leading-relaxed font-light">
                  National brands, enterprise operations, and revenue share
                  deals.
                </div>
</div>
<div className="flex-1">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-4">
                  Includes
                </div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Full marketing team
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      AI systems + automation
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Call center integration
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Performance-based scaling
                    </span>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-white/[0.05] text-xs font-light text-zinc-500">
                👉 Enterprise campaigns can hit $50K/month+
              </div>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section page-active" id="va-services">
<section className="pt-36 pb-24 max-w-7xl mx-auto px-4 relative shrink-0 flex-1 w-full">
<div className="text-center mb-20">
<div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase mb-4">
              Oley Power Marketing
            </div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-6">
              Business Growth Tailored to Your Needs
            </h2>
<p className="text-zinc-400 max-w-2xl mx-auto text-sm font-light mb-10 leading-relaxed">
              Streamline your brand with high-impact marketing solutions that
              save time, boost conversions, and deliver measurable results.
            </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 justify-center">
<a className="hover:scale-[1.02] transition-transform duration-300 inline-flex items-center justify-center text-sm font-normal text-black bg-white rounded-full pt-3.5 pr-7 pb-3.5 pl-7 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://calendar.app.google/D4x359SjKXopsAx57" target="_blank">
                Get Started
              </a>
</div>
</div>

<div className="mb-32">
<div className="text-center mb-12">
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-3">
                Our Services
              </h3>
<p className="text-zinc-400 text-sm font-light">
                Comprehensive marketing solutions designed to scale your
                business:
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<h4 className="text-lg font-normal tracking-tight text-white mb-3">
                  Solar Appointment Setting
                </h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Reach more customers with tailored solar lead appointment
                  strategies.
                </p>
</div>
<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h4 className="text-lg font-normal tracking-tight text-white mb-3">
                  Lead Generation
                </h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Expand your sales pipeline with targeted, high-quality leads.
                </p>
</div>
<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-lg font-normal tracking-tight text-white mb-3">
                  Virtual Assistants
                </h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Delegate tasks to skilled professionals so you can focus on
                  growth.
                </p>
</div>
<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h4 className="text-lg font-normal tracking-tight text-white mb-3">
                  Medical Billing &amp; Virtual Assistance
                </h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Streamline your healthcare operations with skilled
                  professionals who handle your billing, claims, and
                  administrative tasks, so you can focus on patient care and
                  practice growth.
                </p>
</div>
<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h4 className="text-lg font-normal tracking-tight text-white mb-3">
                  Underwriters &amp; Document Reviewers
                </h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Ensure accuracy and reduce risk with detail-oriented
                  professionals who evaluate applications, verify documents, and
                  maintain compliance, so you can make confident decisions and
                  focus on growing your business.
                </p>
</div>
<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:card-linear"></iconify-icon>
</div>
<h4 className="text-lg font-normal tracking-tight text-white mb-3">
                  Credit Repair Disputer Package
                </h4>
<div className="text-sm text-zinc-400 font-light leading-relaxed space-y-4">
<p>
                    Our Credit Repair Package is designed to provide you with
                    the tools and resources you need to improve your credit
                    score and increase your financial stability. Whether you’re
                    dealing with overdue bills, high credit card balances, or
                    other credit-related issues, our team of experienced
                    professionals can help.
                  </p>
<p>
                    Our package includes a comprehensive credit analysis to help
                    identify areas where you can improve your credit score,
                    personalized credit repair plans tailored to your specific
                    needs, and ongoing support and guidance throughout the
                    credit repair process. We’ll work with you every step of the
                    way to ensure that you have the tools and knowledge you need
                    to take control of your finances and improve your credit
                    standing.
                  </p>
</div>
</div>
</div>
</div>

<div className="mb-32">
<div className="text-center mb-12">
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-3">
                Why Choose Us
              </h3>
<p className="text-zinc-400 text-sm font-light">
                We’re committed to delivering exceptional marketing services
                that drive real results for your business.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-3xl glass-card text-center">
<iconify-icon className="text-3xl text-teal-400 mb-4" icon="solar:cup-star-linear"></iconify-icon>
<h4 className="text-base font-normal text-white mb-2">
                  Proven Track Record
                </h4>
<p className="text-xs text-zinc-400 font-light">
                  Years of experience delivering measurable outcomes.
                </p>
</div>
<div className="p-6 rounded-3xl glass-card text-center">
<iconify-icon className="text-3xl text-teal-400 mb-4" icon="solar:settings-linear"></iconify-icon>
<h4 className="text-base font-normal text-white mb-2">
                  Customized Solutions
                </h4>
<p className="text-xs text-zinc-400 font-light">
                  Tailored strategies to meet your unique business needs.
                </p>
</div>
<div className="p-6 rounded-3xl glass-card text-center">
<iconify-icon className="text-3xl text-teal-400 mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-base font-normal text-white mb-2">
                  Trusted by Leading Brands
                </h4>
<p className="text-xs text-zinc-400 font-light">
                  Partnerships with industry leaders across sectors.
                </p>
</div>
<div className="p-6 rounded-3xl glass-card text-center">
<iconify-icon className="text-3xl text-teal-400 mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h4 className="text-base font-normal text-white mb-2">
                  24/7 Availability
                </h4>
<p className="text-xs text-zinc-400 font-light">
                  Round-the-clock support whenever you need us.
                </p>
</div>
</div>
</div>

<div className="mb-32">
<div className="text-center mb-16">
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-3">
                Our Impact
              </h3>
<p className="text-zinc-400 text-sm font-light">
                Making a difference in businesses and communities:
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
<div className="text-center sm:border-l border-white/10 sm:pl-4 py-2">
<div className="text-5xl font-normal text-white tracking-tight mb-3">
                  1,200+
                </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest">
                  Families Supported
                </div>
</div>
<div className="text-center sm:border-l border-white/10 sm:pl-4 py-2">
<div className="text-5xl font-normal text-white tracking-tight mb-3">
                  15,000+
                </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest">
                  Volunteer Hours Logged
                </div>
</div>
<div className="text-center sm:border-l border-white/10 sm:pl-4 py-2">
<div className="text-5xl font-normal text-white tracking-tight mb-3">
                  99%
                </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest">
                  Customer Satisfaction
                </div>
</div>
</div>
</div>

<div className="mb-32">
<div className="text-center mb-12">
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-3">
                What Our Clients Say
              </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl glass-card flex flex-col">
<div className="flex items-center gap-1 text-teal-400 mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-8 flex-1">
                  “Oley Power Marketing transformed our business by handling all
                  the calls and appointments—our team can focus on closing
                  deals.”
                </p>
<div>
<h5 className="text-white text-sm font-normal mb-0.5">
                    Carlos T.
                  </h5>
<p className="text-xs text-zinc-500 font-light">
                    Solar Sales Manager, SolarTech Solutions
                  </p>
</div>
</div>
<div className="p-8 rounded-3xl glass-card flex flex-col">
<div className="flex items-center gap-1 text-teal-400 mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-8 flex-1">
                  “Their virtual assistants are incredibly skilled and
                  professional. We’ve seen a 40% increase in productivity since
                  partnering with Oley Power Marketing.”
                </p>
<div>
<h5 className="text-white text-sm font-normal mb-0.5">
                    Sarah Mitchell
                  </h5>
<p className="text-xs text-zinc-500 font-light">
                    Operations Director, GreenEnergy Corp
                  </p>
</div>
</div>
<div className="p-8 rounded-3xl glass-card flex flex-col">
<div className="flex items-center gap-1 text-teal-400 mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-8 flex-1">
                  “The lead generation services exceeded our expectations.
                  Quality leads, professional service, and excellent ROI. Highly
                  recommend!”
                </p>
<div>
<h5 className="text-white text-sm font-normal mb-0.5">
                    Michael Chen
                  </h5>
<p className="text-xs text-zinc-500 font-light">
                    CEO, Apex Marketing
                  </p>
</div>
</div>
</div>
</div>

<div className="text-center p-10 md:p-16 rounded-3xl bg-white/[0.02] border border-teal-500/20 relative overflow-hidden shadow-[0_0_30px_rgba(45,212,191,0.03)]">
<div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none"></div>
<h3 className="text-2xl md:text-4xl font-normal tracking-tight text-white mb-4 relative z-10">
              Let Us Handle the Hard Work
            </h3>
<p className="text-zinc-400 text-sm font-light mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their
              operations with our marketing solutions.
            </p>
<a className="px-8 py-4 rounded-full bg-white text-black font-normal text-sm hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-flex items-center justify-center relative z-10" href="https://calendar.app.google/D4x359SjKXopsAx57" target="_blank">
              Get Started Today!
            </a>
<p className="text-zinc-500 text-xs font-light mt-8 max-w-2xl mx-auto relative z-10">
              We work hard to help businesses grow. Our dedicated team provides
              exceptional marketing services tailored to your unique needs.
            </p>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="results">
<section className="pt-36 pb-20 max-w-7xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[70vh]">
<div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-[1.1]">
                Proven Protocol.
                <br/>
                Real Revenue.
              </h2>
<p className="text-zinc-400 mb-12 text-sm leading-relaxed font-light">
                We don't measure "likes" or "impressions." Our KPIs are strictly
                tied to your bottom line. Since 2022, we've deployed over $5M in
                ad spend with sustained profitability.
              </p>
<div className="grid grid-cols-2 gap-8">
<div className="border-l border-white/10 pl-6">
<div className="text-4xl font-normal text-white mb-2 tracking-tight">
                    $12M+
                  </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest">
                    Revenue Tracked
                  </div>
</div>
<div className="border-l border-white/10 pl-6">
<div className="text-4xl font-normal text-white mb-2 tracking-tight">
                    84k
                  </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest">
                    Leads Generated
                  </div>
</div>
</div>
</div>
<div className="space-y-4 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-3xl rounded-full"></div>
<div className="p-6 rounded-3xl glass-card relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-normal text-white block">
                      Solar Energy Group
                    </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                      B2C Conversion
                    </span>
</div>
</div>
<p className="text-xs text-zinc-400 mb-5 font-light">
                  Reduced cost-per-lead by 38% while increasing appointment set
                  rate by 2.5x using AI follow-up.
                </p>
<div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[85%] rounded-full"></div>
</div>
</div>
<div className="p-6 rounded-3xl glass-card relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
<iconify-icon className="text-xl" icon="solar:globus-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-normal text-white block">
                      E-commerce Tech
                    </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                      MRR Scaling
                    </span>
</div>
</div>
<p className="text-xs text-zinc-400 mb-5 font-light">
                  Scaled from $50k to $240k MRR in 7 months through automated
                  outbound systems.
                </p>
<div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
<div className="h-full bg-teal-400 w-[60%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section page-exit hidden" id="career">
<section className="pt-32 pb-24 lg:pt-40 max-w-4xl mx-auto px-4 relative z-20 flex-1 shrink-0 w-full">
<div className="mb-12">
<h1 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
              Join Our Network
            </h1>
<p className="text-zinc-400 text-base font-light">
              We partner with top-tier companies looking for hungry, driven
              individuals to scale their operations.
            </p>
</div>

<div className="p-8 md:p-10 rounded-3xl glass-card relative overflow-hidden group">
<div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none transform rotate-12">
<iconify-icon className="text-[240px]" icon="solar:headset-linear"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.05] text-xs font-normal tracking-widest mb-6 text-teal-400 uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Now Hiring
            </div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-2">
              Call Center Sales Representatives
            </h2>
<div className="flex items-center gap-2 mb-8">
<span className="text-lg text-white font-normal">
                Rental Super Flexx
              </span>
<span className="text-zinc-600 text-sm">•</span>
<span className="text-sm text-zinc-400 font-light">Full-time</span>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 border-b border-white/[0.05] pb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="">
                  500 State Road 436, Suite 2026
                  <br/>
                  Casselberry, FL 32707
                </span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<span>Monday through Friday</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<span>Strictly Commission-Based</span>
</div>
</div>
<div className="leading-relaxed z-10 text-sm font-light text-zinc-400 relative space-y-8">
<p className="text-base text-zinc-300">
                Rental Super Flexx is looking for motivated, money-driven, and
                confident phone sales reps to join our growing team.
              </p>
<p>
                If you have call center experience, enjoy speaking with people,
                and want the opportunity to earn based on your performance, this
                could be the right fit for you.
              </p>
<div className="grid md:grid-cols-2 gap-8 pt-4">
<div className="">
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we're looking for:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Strong communication skills</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                        Sales or call center experience preferred
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                        Positive attitude and professional mindset
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                        Self-motivated individuals ready to close deals
                      </span>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we offer:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Monday through Friday schedule</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span className="">Professional office environment</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span className="">Growth opportunity</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span className="">
                        Unlimited earning potential for the right person
                      </span>
</li>
</ul>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.03] mt-8">
<p className="text-zinc-300">
                  We are looking for people who are hungry to work, ready to
                  learn, and serious about making money. Apply today and request
                  an application. Send us a message for more information or to
                  get started.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="hover:scale-[1.02] transition-transform duration-300 text-sm font-normal text-black text-center bg-white rounded-full pt-3.5 pr-7 pb-3.5 pl-7 shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="openApplicationModal()" role="button">
                  Submit Application
                </button>
</div>
<div className="flex flex-wrap gap-2 pt-6">
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #NowHiring
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CallCenterJobs
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #SalesJobs
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CasselberryJobs
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CommissionOnly
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #RentalSuperFlexx
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #HiringNow
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #FloridaJobs
                </span>
</div>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl glass-card relative overflow-hidden group mt-10">
<div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none transform rotate-12">
<iconify-icon className="text-[240px]" icon="solar:card-linear"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.05] text-xs font-normal tracking-widest mb-6 text-teal-400 uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Now Hiring
            </div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-2">
              Sales Representatives
            </h2>
<div className="flex items-center gap-2 mb-8">
<span className="text-lg text-white font-normal">
                True Credit Advisors AI
              </span>
<span className="text-zinc-600 text-sm">•</span>
<span className="text-sm text-zinc-400 font-light">
                Commission-Only
              </span>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 border-b border-white/[0.05] pb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="">
                  4000 Hollywood Ave, Suite 555-S
                  <br/>
                  Hollywood, FL
                </span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<span className="">
                  Monday through Friday
                  <br/>
                  (Flexible Hours)
                </span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<span>High-Commission</span>
</div>
</div>
<div className="space-y-8 text-sm font-light text-zinc-400 leading-relaxed relative z-10">
<p className="text-base text-zinc-300">
                True Credit Advisors AI is looking for motivated, driven, and
                confident Sales Representatives to join our elite team of
                advocates and credit advisors.
              </p>
<p className="">
                This is a high-commission, commission-only opportunity for
                individuals who are hungry to grow, close deals, and earn based
                on performance. If you are self-motivated, love helping people,
                and want unlimited income potential, this could be the perfect
                fit.
              </p>
<div className="grid md:grid-cols-2 gap-8 pt-4">
<div className="">
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we're looking for:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                        Strong communication and people skills
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Sales experience is a plus</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                        Self-driven and goal-oriented mindset
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                        Professional attitude and strong work ethic
                      </span>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we offer:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span className="">High commission earning potential</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Flexible Monday through Friday schedule</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Set your own hours</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Opportunity to work with a fast-growing company
                      </span>
</li>
</ul>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.03] mt-8">
<p className="text-zinc-300">
                  If you are ready to join a company that values ambition,
                  leadership, and results, apply today and become part of True
                  Credit Advisors AI.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="hover:scale-[1.02] transition-transform duration-300 text-sm font-normal text-black text-center bg-white rounded-full pt-3.5 pr-7 pb-3.5 pl-7 shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="openApplicationModal()" role="button">
                  Submit Application
                </button>
</div>
<div className="flex flex-wrap gap-2 pt-6">
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #NowHiring
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #SalesJobs
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #TrueCreditAdvisorsAI
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #HollywoodFL
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CommissionOnly
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CreditAdvisors
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #FloridaJobs
                </span>
</div>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl glass-card relative overflow-hidden group mt-10">
<div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none transform rotate-12">
<iconify-icon className="text-[240px]" icon="solar:globus-linear"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.05] text-xs font-normal tracking-widest mb-6 text-teal-400 uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Now Hiring
            </div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-2">
              Work From Home Vacation Planners
            </h2>
<div className="flex items-center gap-2 mb-8">
<span className="text-lg text-white font-normal">
                DD Vacations Club
              </span>
<span className="text-zinc-600 text-sm">•</span>
<span className="text-sm text-zinc-400 font-light">
                Commission-Only
              </span>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 border-b border-white/[0.05] pb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span>
                  Work From Home
                  <br/>
<span className="text-zinc-500 text-xs">
                    (Main Hub: Hollywood, FL)
                  </span>
</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<span>
                  Flexible Hours
                  <br/>
<span className="text-zinc-500 text-xs">
                    (Set your own schedule)
                  </span>
</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<span>Strictly Commission-Based</span>
</div>
</div>
<div className="space-y-8 text-sm font-light text-zinc-400 leading-relaxed relative z-10">
<p className="text-base text-zinc-300">
                DD Vacations Club is looking for motivated, energetic, and
                money-driven individuals to join our team as Vacation Planners /
                Vacation Package Specialists.
              </p>
<p className="">
                This is a work-from-home career opportunity with the main hub
                based in Hollywood, Florida. We are looking for people who are
                ready to grow, enjoy helping others plan memorable vacations,
                and want the chance to build real income while working
                independently. No ladder campaign — straight into the role of
                Vacation Planner / Vacation Package Provider.
              </p>
<p className="">
                This is more than just a job — it's an opportunity to step into
                a role where you can grow, enjoy great perks, and even position
                yourself to become your own boss.
              </p>
<div className="grid md:grid-cols-2 gap-8 pt-4">
<div className="">
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we're looking for:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Strong communication skills</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Sales or customer service experience preferred
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Positive, professional attitude</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                        Self-motivated and goal-oriented mindset
                      </span>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we offer:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Work-from-home opportunity</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span className="">Great perks</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Performance-based earning potential</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Opportunity for personal growth</span>
</li>
</ul>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.03] mt-8">
<p className="text-zinc-300">
                  If you are ready to start a new career, work from home, and
                  become part of a company focused on travel, opportunity, and
                  growth, we would love to hear from you. Message us today to
                  request an application and apply.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="hover:scale-[1.02] transition-transform duration-300 text-sm font-normal text-black text-center bg-white rounded-full pt-3.5 pr-7 pb-3.5 pl-7 shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="openApplicationModal()" role="button">
                  Submit Application
                </button>
</div>
<div className="flex flex-wrap gap-2 pt-6">
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #NowHiring
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #WorkFromHome
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #VacationPlanner
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #DDVacationsClub
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #TravelJobs
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CommissionBased
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #HiringNow
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #FloridaOpportunity
                </span>
</div>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="about">
<section className="pt-40 pb-20 max-w-5xl mx-auto px-4 text-center flex-1 shrink-0 w-full">
<div className="mb-12 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
            The Mission
          </div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            Performance is the
            <br/>
            only language we speak.
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left border-t border-white/[0.05] pt-16">
<div>
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6">
<span className="text-xs font-normal">01</span>
</div>
<h3 className="text-white font-normal mb-3 text-sm tracking-wide">
                Strategy
              </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                We don't guess. We build models based on historical data and
                market arbitrage opportunities. Every campaign starts with a
                deep dive into your unit economics.
              </p>
</div>
<div>
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6">
<span className="text-xs font-normal">02</span>
</div>
<h3 className="text-white font-normal mb-3 text-sm tracking-wide">
                Engineering
              </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                Marketing is now a software problem. We treat your growth stack
                like a codebase: tested, scalable, and continuously optimized
                for zero downtime.
              </p>
</div>
<div>
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6">
<span className="text-xs font-normal">03</span>
</div>
<h3 className="text-white font-normal mb-3 text-sm tracking-wide">
                Execution
              </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                Our team works as an extension of yours. We operate with the
                speed of a startup and the precision of a laboratory. If it
                doesn't scale, we don't build it.
              </p>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="contact">
<section className="pt-36 pb-20 max-w-7xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
<div>
<div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
                Communication Link
              </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
                Ready to scale?
                <br/>
                Let's talk.
              </h2>
<p className="text-zinc-400 text-sm mb-12 max-w-md leading-relaxed font-light">
                Whether you have a question about our revenue systems or want to
                explore a partnership, our team is ready to assist you.
              </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 border border-white/[0.05]">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-xs uppercase font-normal text-zinc-600 tracking-widest mb-1">
                      Email
                    </div>
<a className="text-sm font-normal text-white hover:text-teal-400 transition-colors" href="mailto:info@oleypower.com">
                      info@oleypower.com
                    </a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 border border-white/[0.05]">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<div className="text-xs uppercase font-normal text-zinc-600 tracking-widest mb-1">
                      Phone
                    </div>
<a className="text-sm font-normal text-white hover:text-teal-400 transition-colors" href="tel:+18883336314">
                      888-333-6314
                    </a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 border border-white/[0.05]">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<div className="text-xs uppercase font-normal text-zinc-600 tracking-widest mb-1">
                      HQ
                    </div>
<div className="text-sm font-normal text-white">Miami, FL</div>
</div>
</div>
</div>
</div>
<div className="glass-card rounded-3xl p-4 md:p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 w-full rounded-2xl overflow-hidden min-h-[600px] bg-white/[0.01]">
<div className="ep-iFrameContainer" id="inline-rMki37LyxYem47LoP6LL-div" style={{borderRadius: '3px', display: 'block'}}>
<div className="ep-wrapper" id="inline-rMki37LyxYem47LoP6LL-wrapper" style={{borderRadius: '3px'}}>
<iframe data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-unique-id-mapped="true" id="inline-rMki37LyxYem47LoP6LL" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/rMki37LyxYem47LoP6LL" style={{width: '100%', height: '100%', border: 'none', pointerEvents: 'none', overflow: 'auto', display: 'none'}} title="Contact Us Form"></iframe>
</div>
</div>

</div>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="privacy">
<section className="pt-36 pb-20 max-w-4xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
            Legal Protocol
          </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
            Privacy Policy
          </h2>
<p className="text-sm text-zinc-500 mb-16 font-light">
            Last Updated: March 2026
          </p>
<div className="space-y-12 text-sm text-zinc-400 font-light leading-relaxed pb-12">
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                1. Information We Collect
              </h3>
<p className="mb-4">
                We collect information you provide directly to us when utilizing
                our services, filling out forms, or communicating with our team.
                This includes personal information such as your name, email
                address, phone number, and business details necessary to
                architect your marketing infrastructure.
              </p>
<p>
                We also automatically collect certain information when you visit
                our website, including your IP address, browser type, operating
                system, and data regarding your interactions with our platform
                to ensure optimal performance.
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                2. How We Use Your Information
              </h3>
<p className="mb-4">
                The information we collect is strictly used to provide,
                maintain, and improve our services. This includes:
              </p>
<ul className="list-disc pl-5 space-y-2 text-zinc-400">
<li>Deploying targeted advertising campaigns and AI agents.</li>
<li>
                  Processing transactions and sending related information.
                </li>
<li>Responding to your comments, questions, and requests.</li>
<li>
                  Analyzing trends, usage, and activities in connection with our
                  services.
                </li>
</ul>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                3. Data Security Protocol
              </h3>
<p className="mb-4">
                We treat your data like the high-value asset it is. We implement
                robust, enterprise-grade security measures designed to protect
                your personal and business information from unauthorized access,
                alteration, disclosure, or destruction.
              </p>
<p>
                However, please note that no method of transmission over the
                internet or method of electronic storage is 100% secure. While
                we strive to use commercially acceptable means to protect your
                personal information, we cannot guarantee its absolute security.
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                4. Third-Party Sharing
              </h3>
<p>
                We do not sell, trade, or rent your personal identification
                information to others. We may share generic aggregated
                demographic information not linked to any personal
                identification information with our business partners, trusted
                affiliates, and advertisers for the purposes outlined above. We
                may use third-party service providers to help us operate our
                business, such as CRM platforms and ad networks, provided that
                these parties agree to keep this information confidential.
              </p>
</div>
<div>
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                5. Contact Us
              </h3>
<p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact our compliance team at
                <a className="text-teal-400 hover:text-teal-300 transition-colors" href="mailto:privacy@oleypower.com">
                  privacy@oleypower.com
                </a>
                .
              </p>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="terms">
<section className="pt-36 pb-20 max-w-4xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
            Legal Protocol
          </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
            Terms of Service
          </h2>
<p className="text-sm text-zinc-500 mb-16 font-light">
            Last Updated: March 2026
          </p>
<div className="space-y-12 text-sm text-zinc-400 font-light leading-relaxed pb-12">
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                1. Acceptance of Terms
              </h3>
<p>
                By accessing and using the services provided by Oley Power
                Marketing ("Company," "we," "us," or "our"), you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our services or website.
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                2. Service Delivery &amp; Performance
              </h3>
<p className="mb-4">
                We provide AI-powered marketing infrastructure, ad management,
                and automated CRM solutions. While we utilize industry-leading
                strategies to generate leads and revenue, marketing
                intrinsically involves variables beyond our control (e.g.,
                algorithm updates, market shifts). Therefore, we do not
                guarantee specific financial results or exact ROI metrics unless
                explicitly outlined in a custom performance contract.
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                3. Intellectual Property
              </h3>
<p>
                All custom AI agents, funnels, proprietary automation sequences,
                and codebase developed by Oley Power Marketing remain our
                intellectual property unless full ownership is explicitly
                transferred in your service agreement. Client-provided assets
                (logos, images, brand guidelines) remain the sole property of
                the client.
              </p>
</div>
<div>
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                4. Liability Limitations
              </h3>
<p>
                In no event shall Oley Power Marketing be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the services.
              </p>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="cancellation">
<section className="pt-36 pb-20 max-w-4xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
            Legal Protocol
          </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
            Cancellation &amp; Refunds
          </h2>
<p className="text-sm text-zinc-500 mb-16 font-light">
            Last Updated: March 2026
          </p>
<div className="space-y-12 text-sm text-zinc-400 font-light leading-relaxed pb-12">
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                1. Monthly Retainers &amp; Subscriptions
              </h3>
<p>
                Our marketing infrastructure and service packages are billed on
                a month-to-month basis unless a longer term is specified in your
                agreement. You may cancel your monthly retainer with a
                <strong>30-day written notice</strong>
                prior to your next billing cycle. Notices must be sent to
                <a className="text-teal-400 hover:text-teal-300" href="mailto:billing@oleypower.com">
                  billing@oleypower.com
                </a>
                .
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                2. Refund Policy
              </h3>
<p className="mb-4">
                Due to the upfront labor, engineering, and digital nature of our
                services (e.g., ad setup, AI agent programming, funnel
                creation),
                <strong>we do not offer refunds</strong>
                for services already rendered or ad spend that has been
                deployed.
              </p>
<p>
                If you choose to cancel mid-cycle, you will continue to have
                access to the services through the end of your current paid
                billing period, after which the services will be terminated. No
                prorated refunds are provided for partial months.
              </p>
</div>
<div>
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                3. Pausing Campaigns
              </h3>
<p>
                Clients may request to pause their campaigns for up to 30 days
                without losing their CRM data or custom buildouts. Pauses longer
                than 30 days may incur a reactivation fee to rebuild
                integrations and update APIs.
              </p>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>
</main>

<div className="fixed inset-0 z-[70] items-center justify-center p-4 hidden" id="calendar-modal">
<div className="absolute inset-0 bg-[#030303]/80 backdrop-blur-md opacity-0 transition-opacity duration-300" id="calendar-modal-backdrop" onclick="closeCalendarModal()"></div>
<div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl opacity-0 translate-y-4 scale-95 transition-all duration-300 max-h-[90vh] flex flex-col overflow-hidden" id="calendar-modal-content">
<div className="flex items-center justify-between p-6 border-b border-white/[0.05]">
<h3 className="text-xl font-normal text-white tracking-tight">
            Book a Strategy Call
          </h3>
<button className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="closeCalendarModal()">
<iconify-icon className="text-lg" height="18" icon="solar:close-circle-linear" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-auto p-2 sm:p-6 bg-[#0a0a0a]">
<iframe data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-unique-id-mapped="true" id="iFrameResizer0" scrolling="yes" src="https://api.leadconnectorhq.com/widget/booking/UGBPGc4JvHVoiaVku2XZ" style={{width: '100%', height: '600px', border: 'none', borderRadius: '1rem', overflow: 'auto'}}></iframe>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden items-center justify-center p-4" id="app-modal">
<div className="absolute inset-0 bg-[#030303]/80 backdrop-blur-md opacity-0 transition-opacity duration-300" id="app-modal-backdrop" onclick="closeApplicationModal()"></div>
<div className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl opacity-0 translate-y-4 scale-95 transition-all duration-300 max-h-[90vh] flex flex-col overflow-hidden" id="app-modal-content">
<div className="flex items-center justify-between p-6 border-b border-white/[0.05]">
<div>
<h3 className="text-xl font-normal text-white tracking-tight">
              Submit Application
            </h3>
<p className="text-xs text-zinc-500 mt-1">
              We'll review your details and get back to you shortly.
            </p>
</div>
<button className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="closeApplicationModal()">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-auto p-6 bg-[#0a0a0a]">
<form className="space-y-4" onsubmit="event.preventDefault(); closeApplicationModal(); alert('Application submitted successfully!');">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                  First Name
                </label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors" placeholder="John" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                  Last Name
                </label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                Email Address
              </label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                Phone Number
              </label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                Position Applying For
              </label>
<select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-teal-500/50 transition-colors appearance-none">
<option value="rsf">
                  Rental Super Flexx - Call Center Rep
                </option>
<option value="tca">True Credit Advisors AI - Sales Rep</option>
<option value="ddv">
                  DD Vacations Club - Vacation Planner
                </option>
</select>
</div>
<div className="pt-4">
<button className="w-full px-7 py-3.5 rounded-xl bg-white text-black font-normal text-sm hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="submit">
                Submit Now
              </button>
</div>
</form>
</div>
</div>
</div>



    </>
  );
}
