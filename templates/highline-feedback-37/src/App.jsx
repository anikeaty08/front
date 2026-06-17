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



      // Icons
      lucide.createIcons();

      // Animate hero path dot
      (function animateHeroPath() {
        const path = document.getElementById('highlinePath');
        const dot = document.getElementById('highlineDot');
        if (!path || !dot) return;
        const len = path.getTotalLength();
        let t = 0;
        function frame() {
          t = (t + 2) % len;
          const p = path.getPointAtLength(t);
          dot.setAttribute('cx', p.x);
          dot.setAttribute('cy', p.y);
          requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      })();

      // Animate infinity loop dot
      (function animateInfinity() {
        const path = document.getElementById('infinityPath');
        const dot = document.getElementById('loopDot');
        if (!path || !dot) return;
        const len = path.getTotalLength();
        let t = 0;
        function frame() {
          t = (t + 3) % len;
          const p = path.getPointAtLength(t);
          dot.setAttribute('cx', p.x);
          dot.setAttribute('cy', p.y);
          requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      })();

      // Pillar scroll rhythm: highlight in order and update progress bar
      (function pillarRhythm() {
        const cards = document.querySelectorAll('.pillar-card');
        const progress = document.getElementById('pillarProgress');
        if (!cards.length || !progress) return;

        const opts = { threshold: 0.4 };
        const activeClass = [
          'ring-1','ring-indigo-200','shadow-sm'
        ];
        function setActive(el, on) {
          activeClass.forEach(c => el.classList.toggle(c, on));
        }

        const seen = new Set();
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActive(entry.target, true);
              seen.add(entry.target.dataset.step);
            } else {
              setActive(entry.target, false);
              seen.delete(entry.target.dataset.step);
            }
            // Update progress width (0..100)
            const width = Math.min(100, Math.max(0, (Array.from(seen).length / cards.length) * 100));
            progress.style.width = width + '%';
          });
        }, opts);

        cards.forEach(c => io.observe(c));
      })();

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const id = anchor.getAttribute('href');
          if (id && id.length > 1) {
            e.preventDefault();
            const el = document.querySelector(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-70" style={{background: 'radial-gradient(48% 48% at 50% 50%, rgba(39,67,155,0.15) 0%, rgba(109,94,252,0.14) 35%, rgba(26,31,56,0.06) 65%, rgba(26,31,56,0) 80%)'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-50">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex h-14 items-center justify-between rounded-xl backdrop-blur ring-1 px-3 bg-white/70 ring-black/5">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-md" style={{background: 'linear-gradient(135deg,#0f172a 0%,#3b82f6 60%,#8b5cf6 100%)'}}>
<svg className="lucide lucide-line-chart text-white" data-lucide="line-chart" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="flex items-baseline gap-2">
<span className="text-base sm:text-lg font-semibold tracking-tight" style={{}}>
                Highline
              </span>
<span className="text-xs sm:text-sm text-gray-500" style={{}}>
                by Qualtrics
              </span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="transition-colors text-sm font-medium hover:text-gray-900 text-gray-700" href="#pillars" style={{}}>
              How it works
            </a>
<a className="text-sm font-medium transition-colors text-gray-700 hover:text-gray-900" href="#tiers" style={{}}>
              Product tiers
            </a>
<a className="text-sm font-medium transition-colors text-gray-700 hover:text-gray-900" href="#loop" style={{}}>
              Omni-channel
            </a>
<a className="text-sm font-medium transition-colors text-gray-700 hover:text-gray-900" href="#why" style={{}}>
              Why Highline
            </a>
</div>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg ring-1 transition-colors text-gray-700 hover:text-gray-900 ring-black/5 bg-white" href="#cta" style={{}}>
              Book a Demo
              <svg className="lucide lucide-calendar text-gray-800" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm text-white" href="#cta" style={{background: 'linear-gradient(135deg, #023D3C 0%, #034745 60%, #3b82f6 100%)'}}>
              Start Free Trial
              <svg className="lucide lucide-arrow-right text-white" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>
</header>

<section className="pt-32 pb-20 relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center" style={{}}>

<div className="lg:col-span-6" style={{}}>
<div className="inline-flex items-center gap-2 text-xs font-medium ring-1 px-3 py-1 rounded-full text-gray-700 ring-black/5 bg-white">
<span className="text-gray-900" style={{}}>Highline</span>
<span className="text-gray-400" style={{}}>•</span>
<span className="" style={{}}>by Qualtrics</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-gray-900" style={{}}>
            Simplify how you capture feedback.
          </h1>
<p className="mt-5 text-base sm:text-lg max-w-xl text-gray-600" style={{}}>
            AI Listening Agents that help you generate surveys, understand
            feedback, and respond instantly. Listen. Learn. Respond.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl pt-3 pr-5 pb-3 pl-5 shadow text-white" href="#cta" style={{background: 'linear-gradient(135deg, #023D3C 0%, #034745 60%, #3b82f6 100%)'}}>
              Start Free Trial
            </a>
<a className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl ring-1 transition-colors text-gray-800 bg-white ring-black/5 hover:bg-gray-50" href="#cta" style={{}}>
              Book a Demo
              <svg className="lucide lucide-calendar text-gray-800" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>

<div className="grid grid-cols-3 max-w-lg mt-8 gap-x-6 gap-y-6">
<div className="">
<div className="text-2xl tracking-tight font-semibold" style={{}}>
                Omni‑channel
              </div>
<div className="text-xs text-gray-500 mt-1" style={{}}>
                Surveys, Social, Website, Cusotmer Support
              </div>
</div>
<div className="border-l pl-6">
<div className="text-2xl tracking-tight font-semibold" style={{}}>
                AI insights
              </div>
<div className="text-xs text-gray-500 mt-1" style={{}}>
                Recommendations in real time
              </div>
</div>
<div className="border-l pl-6">
<div className="text-2xl tracking-tight font-semibold" style={{}}>
                Actions
              </div>
<div className="text-xs text-gray-500 mt-1" style={{}}>
                Refunds, reorders, routes
              </div>
</div>
</div>
</div>

<div className="lg:col-span-6" style={{}}>
<div className="relative rounded-3xl ring-1 overflow-hidden ring-black/5 bg-white">
<div className="absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(70% 80% at 20% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(139, 92, 246, 0.12) 40%, rgba(255, 255, 255, 0) 70%)'}}></div>
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-700" style={{}}>
                  Flow of feedback
                </span>
<div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full ring-1 text-gray-600 bg-white ring-black/5" style={{}}>
                  Live
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
</div>
<div className="aspect-[4/3] overflow-hidden bg-gradient-to-br w-full ring-1 rounded-2xl relative from-slate-900 via-indigo-900 to-slate-900 ring-black/5">


<div className="inline-flex gap-2 text-xs ring-1 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-6 left-6 backdrop-blur items-center text-white/90 bg-white/10 ring-white/20" style={{}}>
<svg className="lucide lucide-mic text-white" data-lucide="mic" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
                  Voice
                </div>
<div className="absolute top-6 right-6 inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full backdrop-blur text-white/90 bg-white/10 ring-white/20" style={{}}>
<svg className="lucide lucide-globe-2 text-white" data-lucide="globe-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Web
                </div>
<div className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full backdrop-blur text-white/90 bg-white/10 ring-white/20" style={{}}>
<svg className="lucide lucide-message-square text-white" data-lucide="message-square" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                  Surveys
                </div>
<div className="absolute bottom-6 right-6 inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full backdrop-blur text-white/90 bg-white/10 ring-white/20" style={{}}>
<svg className="lucide lucide-share-2 text-white" data-lucide="share-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                  Social
                </div>
<svg className="absolute inset-0 w-full h-full" data-icon-replaced="true" id="infinitySVG" preserveaspectratio="xMidYMid meet" strokeWidth="2" style={{color: 'rgb(17, 24, 39)'}} viewbox="0 0 800 480">
<defs className="" style={{}}></defs>

<path className="" d="M100,240 C100,140 220,140 300,240 C380,340 420,340 500,240 C580,140 700,140 700,240 C700,340 580,340 500,240 C420,140 380,140 300,240 C220,340 100,340 100,240 Z" fill="none" id="infinityPath" opacity="0.9" stroke="url(#gradLoop)" strokeLinecap="round" strokeWidth="6" style={{filter: 'drop-shadow(rgba(99, 102, 241, 0.35) 0px 0px 14px)'}}></path>

<circle className="" cx="111.807373046875" cy="286.02734375" fill="#ffffff" id="loopDot" r="7" stroke="#22d3ee" strokeWidth="2" style={{}}></circle>
</svg>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-600">
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2 bg-white ring-black/5" style={{}}>
<span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)'}}></span>
                  Listen
                </div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2 bg-white ring-black/5" style={{}}>
<span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(135deg,#8b5cf6,#22d3ee)'}}></span>
                  Learn
                </div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2 bg-white ring-black/5" style={{}}>
<span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(135deg,#22d3ee,#3b82f6)'}}></span>
                  Respond
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20" id="pillars">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-10">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold" style={{}}>
            Listen. Learn. Respond.
          </h2>
<div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
<span style={{}}>Scroll to follow the rhythm</span>
<svg className="lucide lucide-mouse-pointer-2 text-gray-500" data-lucide="mouse-pointer-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="pillar-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 bg-white ring-black/5" data-step="1">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{background: 'linear-gradient(135deg,#0ea5e9,#6366f1)'}}>
<svg className="lucide lucide-radio text-white" data-lucide="radio" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="text-xs text-gray-500" style={{}}>01</span>
</div>
<h3 className="mt-4 text-xl font-medium tracking-tight" style={{}}>
              Listen
            </h3>
<p className="mt-2 text-sm text-gray-600" style={{}}>
              Capture customer sentiment across surveys, websites, voice, and
              social.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs ring-1 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 text-gray-700 bg-gray-50 ring-gray-200">
                Surveys
              </span>
<span className="text-xs ring-1 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 text-gray-700 bg-gray-50 ring-gray-200">
                Customer Support
              </span>
<span className="text-xs ring-1 px-2.5 py-1 rounded-full text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
                Reviews
              </span>
</div>
</div>

<div className="pillar-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 bg-white ring-black/5" data-step="2">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{background: 'linear-gradient(135deg,#8b5cf6,#22d3ee)'}}>
<svg className="lucide lucide-brain-circuit text-white" data-lucide="brain-circuit" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<span className="text-xs text-gray-500" style={{}}>02</span>
</div>
<h3 className="mt-4 text-xl font-medium tracking-tight" style={{}}>
              Learn
            </h3>
<p className="mt-2 text-sm text-gray-600" style={{}}>
              Use AI to analyze feedback and surface actionable recommendations
              in real time.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs ring-1 px-2.5 py-1 rounded-full text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
                Topic discovery
              </span>
<span className="text-xs ring-1 px-2.5 py-1 rounded-full text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
                Sentiment
              </span>
<span className="text-xs ring-1 px-2.5 py-1 rounded-full text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
                Next‑best action
              </span>
</div>
</div>

<div className="pillar-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 bg-white ring-black/5" data-step="3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{background: 'linear-gradient(135deg,#3b82f6,#22d3ee)'}}>
<svg className="lucide lucide-zap text-white" data-lucide="zap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xs text-gray-500" style={{}}>03</span>
</div>
<h3 className="mt-4 text-xl font-medium tracking-tight" style={{}}>
              Respond
            </h3>
<p className="mt-2 text-sm text-gray-600" style={{}}>
              Automate actions like refunds, reorders, reschedules, or routing
              to the right team member.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs ring-1 px-2.5 py-1 rounded-full text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
                CRM
              </span>
<span className="text-xs ring-1 px-2.5 py-1 rounded-full text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
                Ticketing
              </span>
<span className="text-xs ring-1 px-2.5 py-1 rounded-full text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
                Payments
              </span>
</div>
</div>
</div>

<div className="mt-8 h-2 w-full rounded-full ring-1 overflow-hidden bg-gray-100 ring-black/5">
<div className="h-full rounded-full" id="pillarProgress" style={{width: '0%', background: 'linear-gradient(90deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 50%, rgb(34, 211, 238) 100%)'}}></div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="tiers">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex mb-10 items-center justify-between">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold" style={{}}>
            Product tiers
          </h2>
<span className="text-sm text-gray-600" style={{}}>
            Upgrade anytime as your needs grow.
          </span>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="relative rounded-2xl ring-1 p-6 sm:p-8 bg-white ring-black/5">
<div className="flex items-center justify-between">
<div className="inline-flex gap-2 text-xs ring-1 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
                Highline Essentials
                <span className="w-1.5 h-1.5 rounded-full" style={{background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)'}}></span>
</div>
<span className="text-xs text-gray-500" style={{}}>Base</span>
</div>
<h3 className="mt-4 text-2xl tracking-tight font-semibold" style={{}}>
              Surveys + Insights
            </h3>
<p className="mt-2 text-sm text-gray-600" style={{}}>
              Generate and analyze surveys. Understand feedback automatically.
            </p>
<div className="flex gap-3 mt-6 gap-x-3 gap-y-3 items-center">
<a className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm text-white" href="#cta" style={{background: 'linear-gradient(135deg, #023D3C 0%, #034745 60%, #3b82f6 100%)'}}>
                Start Free Trial
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl ring-1 transition-colors text-gray-800 bg-white ring-black/5 hover:bg-gray-50" href="#cta" style={{}}>
                Book a Demo
                <svg className="lucide lucide-calendar text-gray-800" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div><ul className="mt-6 space-y-3 text-sm text-gray-700">
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-check mt-0.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Adaptive surveys that capture personalized feedback from every
                customer
              </li>
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-check mt-0.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Identify customer experience gaps by viewing themes and trends
                across responses
              </li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-start">
<svg className="lucide lucide-check mt-0.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Real‑time improvements to capture feedback
              </li>
</ul>
</div>

<div className="sm:p-8 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative bg-white ring-black/5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full text-gray-700 bg-gray-50 ring-gray-200" style={{}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'linear-gradient(135deg,#8b5cf6,#22d3ee)'}}></span>
                Highline Plus
              </div>
<span className="text-xs text-gray-500" style={{}}>Most popular</span>
</div>
<h3 className="mt-4 text-2xl tracking-tight font-semibold" style={{}}>
              Social Listening + Website AI
            </h3>
<p className="mt-2 text-sm text-gray-600" style={{}}>
              Adds social listening and an AI assistant that lives on your site
              for chat or voice.
            </p>
<div className="flex gap-3 mt-6 gap-x-3 gap-y-3 items-center">
<a className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm text-white" href="#cta" style={{background: 'linear-gradient(135deg, #023D3C 0%, #034745 60%, #3b82f6 100%)'}}>
                Start Free Trial
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl ring-1 transition-colors text-gray-800 bg-white ring-black/5 hover:bg-gray-50" href="#cta" style={{}}>
                Book a Demo
                <svg className="lucide lucide-calendar text-gray-800" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div><ul className="mt-6 space-y-3 text-sm text-gray-700">
<li className="flex gap-2 gap-x-2 gap-y-2 items-start" style={{}}>Analyze social feedback from Google Reviews, Instagram, Facebook, and X/Twitter<svg className="lucide lucide-check mt-0.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-start" style={{}}>
<svg className="lucide lucide-check mt-0.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Customer support AI assistant (chat + voice) for your website
              </li>
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-check mt-0.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Deeper integrations and automations to resolve customer issues
              </li>
</ul>
</div>

</div>
</div>
</section>

<section className="py-20" id="loop">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold" style={{}}>
              Omni‑Channel Understanding
            </h2>
<p className="mt-4 text-base sm:text-lg text-gray-600" style={{}}>
              Your customer data is never static. Highline connects every signal
              across every channel — adapting in real time.
            </p>
<ul className="mt-6 space-y-3 text-sm text-gray-700">
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-merge mt-0.5 text-gray-800" data-lucide="merge" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m8 6 4-4 4 4"></path><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path><path d="m20 22-5-5"></path></svg>
                Unified signals: surveys, web, voice, and social
              </li>
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-sparkles mt-0.5 text-gray-800" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                AI recommendations per customer
              </li>
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-workflow mt-0.5 text-gray-800" data-lucide="workflow" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
                Seamless hand‑offs to your tools and teams
              </li>
</ul>
</div>
<div className="lg:col-span-7">
<div className="relative rounded-3xl ring-1 p-6 ring-black/5 bg-white">
<div className="aspect-[5/3] overflow-hidden bg-gradient-to-br w-full ring-1 rounded-2xl relative from-slate-900 via-indigo-900 to-slate-900 ring-black/5" style={{}}>
<svg className="w-[532px] h-[319px] absolute top-0 right-0 bottom-0 left-0" data-icon-replaced="true" id="infinitySVG" strokeWidth="2" style={{width: '532px', height: '319px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 800 480">
<defs className="" style={{}}>
<lineargradient id="gradLoop" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="50%" stop-color="#8b5cf6"></stop>
<stop offset="100%" stop-color="#22d3ee"></stop>
</lineargradient>
</defs>

<path className="" d="M100,240 C100,140 220,140 300,240 C380,340 420,340 500,240 C580,140 700,140 700,240 C700,340 580,340 500,240 C420,140 380,140 300,240 C220,340 100,340 100,240 Z" fill="none" id="infinityPath" opacity="0.9" stroke="url(#gradLoop)" strokeLinecap="round" strokeWidth="6" style={{filter: 'drop-shadow(rgba(99, 102, 241, 0.35) 0px 0px 14px)'}}></path>

<circle className="" cx="698.8489990234375" cy="256.1971740722656" fill="#ffffff" id="loopDot" r="7" stroke="#22d3ee" strokeWidth="2" style={{}}></circle>
</svg>

<div className="absolute top-6 left-6 inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full backdrop-blur text-white/90 bg-white/10 ring-white/20" style={{}}>
<svg className="lucide lucide-message-square text-white" data-lucide="message-square" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                  Survey
                </div>
<div className="absolute top-6 right-6 inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full backdrop-blur text-white/90 bg-white/10 ring-white/20" style={{}}>
<svg className="lucide lucide-bot text-white" data-lucide="bot" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                  Assistant
                </div>
<div className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full backdrop-blur text-white/90 bg-white/10 ring-white/20" style={{}}>
<svg className="lucide lucide-mic text-white" data-lucide="mic" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
                  Voice
                </div>
<div className="absolute bottom-6 right-6 inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full backdrop-blur text-white/90 bg-white/10 ring-white/20" style={{}}>
<svg className="lucide lucide-megaphone text-white" data-lucide="megaphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
                  Social
                </div>
</div>
<div className="mt-4 text-xs text-gray-600" style={{}}>
                Continuous loop: capture → analyze → act → measure.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20 bg-gray-50" id="why">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 text-xs ring-1 px-3 py-1.5 rounded-full text-gray-700 bg-white ring-black/5" style={{}}>
            Why Highline
          </div>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight font-semibold" style={{}}>
            Built with the power of Qualtrics.
          </h3>
<p className="mt-3 text-sm text-gray-600" style={{}}>
            Industry-leading feedback expertise meets real-world AI. Highline
            reimagines intelligence for the modern customer experience.
          </p>
<div className="mt-6 rounded-2xl ring-1 p-5 bg-white ring-black/5">
<blockquote className="text-base text-gray-900" style={{}}>
              “Qualtrics, reimagined for the AI era.”
            </blockquote>
</div>
</div>
<div className="lg:col-span-7">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold" style={{}}>
            Simplified by AI agents.
          </h3>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl ring-1 p-5 bg-white ring-black/5">
<div className="flex items-center gap-2 text-gray-800">
<svg className="lucide lucide-award" data-lucide="award" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-sm font-medium" style={{}}>
                  Industry‑leading feedback expertise
                </span>
</div>
<p className="mt-2 text-sm text-gray-600" style={{}}>
                Grounded in years of proven methodologies and best practices.
              </p>
</div>
<div className="rounded-2xl ring-1 p-5 bg-white ring-black/5">
<div className="flex items-center gap-2 text-gray-800">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium" style={{}}>
                  AI‑driven insights and recommendations
                </span>
</div>
<p className="mt-2 text-sm text-gray-600" style={{}}>
                Guidance that adapts to each customer moment.
              </p>
</div>
<div className="rounded-2xl ring-1 p-5 bg-white ring-black/5">
<div className="flex items-center gap-2 text-gray-800">
<svg className="lucide lucide-zap" data-lucide="zap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium" style={{}}>
                  Real‑time response automation
                </span>
</div>
<p className="mt-2 text-sm text-gray-600" style={{}}>
                Reschedule, refund, reorder, or route — instantly.
              </p>
</div>
<div className="rounded-2xl ring-1 p-5 bg-white ring-black/5">
<div className="flex items-center gap-2 text-gray-800">
<svg className="lucide lucide-toggle-left" data-lucide="toggle-left" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="3"></circle><rect height="14" rx="7" width="20" x="2" y="5"></rect></svg>
<span className="text-sm font-medium" style={{}}>
                  Easy setup and intuitive UI
                </span>
</div>
<p className="mt-2 text-sm text-gray-600" style={{}}>
                Launch quickly with guided workflows and smart defaults.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl ring-1 bg-gradient-to-br ring-black/5 from-slate-900 via-indigo-900 to-slate-900">
<div className="absolute inset-0" style={{background: 'radial-gradient(50% 60% at 80% 30%, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.14) 30%, rgba(255,255,255,0) 70%)'}}></div>
<div className="px-6 sm:px-10 py-14 sm:py-16 relative">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white" style={{}}>
                  Start listening differently.
                </h3>
<p className="mt-3 text-base sm:text-lg text-white/70" style={{}}>
                  Join early adopters transforming how they capture and act on
                  customer feedback.
                </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 transition text-sm font-semibold ring-1 rounded-xl pt-3 pr-5 pb-3 pl-5 shadow backdrop-blur hover:bg-white/15 text-white bg-white/10 ring-white/10" href="#" style={{}}>
                    Start Free Trial
                  </a>
<a className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl ring-1 transition-colors text-gray-800 bg-white ring-black/5 hover:bg-gray-50" href="#" style={{}}>
                    Book a Demo
                    <svg className="lucide lucide-calendar text-gray-800" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-2xl ring-1 p-5 bg-white/5 ring-white/10">
<div className="flex items-center justify-between">
<span className="text-sm text-white/80" style={{}}>
                      Feedback pipeline
                    </span>
<span className="text-xs inline-flex items-center gap-1 text-emerald-300" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Healthy
                    </span>
</div>
<div className="mt-4 space-y-2">
<div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
<div className="h-full rounded-full" style={{width: '82%', background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)'}}></div>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
<div className="h-full rounded-full" style={{width: '67%', background: 'linear-gradient(90deg,#8b5cf6,#22d3ee)'}}></div>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
<div className="h-full rounded-full" style={{width: '54%', background: 'linear-gradient(90deg,#22d3ee,#3b82f6)'}}></div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/80">
<div className="ring-1 rounded-lg px-3 py-2 bg-white/5 ring-white/10" style={{}}>
                      Surveys
                    </div>
<div className="ring-1 rounded-lg px-3 py-2 bg-white/5 ring-white/10" style={{}}>
                      Social
                    </div>
<div className="ring-1 rounded-lg px-3 py-2 bg-white/5 ring-white/10" style={{}}>
                      Voice
                    </div>
</div>
</div>
</div>
</div>
<div className="mt-6 text-xs text-white/60" style={{}}>
              Highline by Qualtrics.
            </div>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md" style={{background: 'linear-gradient(135deg,#0f172a,#6d5efc 70%,#3a8fff)'}}></div>
<div className="text-base font-semibold tracking-tight" style={{}}>
              Highline
            </div>
<div className="text-xs text-gray-500" style={{}}>by Qualtrics</div>
</div>
<div className="flex items-center gap-6 text-sm text-gray-600">
<a className="hover:text-gray-900" href="#pillars" style={{}}>
              How it works
            </a>
<a className="hover:text-gray-900" href="#tiers" style={{}}>Tiers</a>
<a className="hover:text-gray-900" href="#loop" style={{}}>
              Omni‑channel
            </a>
<a className="hover:text-gray-900" href="#why" style={{}}>Why</a>
</div>
<div className="text-sm text-gray-500" style={{}}>
            © 2025 Qualtrics. All rights reserved.
          </div>
</div>
</div>
</footer>
<textarea className="-edit" style={{fontSize: '12px', fontWeight: '400', fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial', color: 'rgb(55, 65, 81)', lineHeight: '16px', textAlign: 'start', textTransform: 'none', letterSpacing: 'normal', position: 'absolute', left: '129px', top: '1445px', width: '143.133px', height: '28px', boxSizing: 'border-box', padding: '6px 12px', margin: '0px', border: 'none', background: 'transparent', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea>


    </>
  );
}
