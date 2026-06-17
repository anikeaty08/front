import React, { useEffect, useState } from 'react';
import UnicornScene from 'unicornstudio-react';

export default function App() {
  const [email, setEmail] = useState('');

  // Intersection Observer for scroll animations
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    // Implementation placeholder
    setEmail('');
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-white/20 selection:text-white pt-32">
      
      {/* Background (component) added by Aura / Unicorn Studio */}
      <div 
        className="aura-background-component top-0 w-full h-screen mix-blend-screen -z-20 absolute" 
        data-alpha-mask="80" 
        style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}
      >
        <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
          <div className="absolute w-full h-full left-0 top-0 -z-10">
             <UnicornScene projectId="7WRlj4TRuUxuldc6GVDM" />
          </div>
        </div>
      </div>

      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-7xl grid-lines hidden md:block border-r border-l border-white/[0.03]"></div>

      {/* Floating Glass Pill Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
        <nav className="flex md:gap-12 bg-neutral-950 w-full h-14 max-w-5xl border-white/10 border rounded-full mr-auto ml-auto pr-3 pl-6 shadow-lg backdrop-blur-xl gap-x-6 gap-y-6 items-center justify-between">
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white">nexus<span className="text-white/40">.io</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Methodology</a>
            <a href="#" className="hover:text-white transition-colors">Integration</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium">
            <a href="#" className="hidden sm:block text-neutral-400 hover:text-white px-3">Log in</a>
            
            {/* Dark Mode Gradient Pill Button */}
            <button 
              className="hover:bg-white/10 transition-all flex text-sm font-medium text-neutral-200 bg-gradient-to-b from-white/30 via-white/0 to-white/10 rounded-full px-4 py-2 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset] gap-x-2 gap-y-x-2 items-center" 
              style={{position: 'relative', 
                '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}
            >
              <span className="text-xs font-semibold tracking-tight">Start free</span>
              <iconify-icon icon="solar:arrow-right-linear" width="14" height="14" className="text-neutral-400" />
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="z-10 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-32 pl-6 relative">
        
        {/* Hero Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-white"></span>
            v2.0 is now live
          </div>
          
          <h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] md:text-8xl leading-[1] text-7xl font-medium text-white tracking-tight mb-8">
            Synchronize velocity <br className="hidden md:block" />
            with intelligent automation.
          </h1>
          
          <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] md:text-2xl leading-relaxed text-xl font-light text-neutral-400 tracking-tight max-w-2xl mr-auto mb-12 ml-auto">
            Connect your tools, automate the busy work, and focus on shipping products that matter.
          </p>

          {/* Input Form */}
          <form onSubmit={handleWaitlistSubmit} className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] flex flex-col sm:flex-row gap-3 group max-w-lg mr-auto ml-auto relative gap-x-3 gap-y-3 items-center justify-center">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="work@company.com" 
              className="w-full sm:flex-1 bg-[#161616] border border-white/10 rounded-full px-6 py-3.5 text-base outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all placeholder:text-neutral-600 shadow-lg h-[52px] text-white" 
            />
            
            <button 
              type="submit"
              className="group flex overflow-hidden transition-all duration-300 hover:from-white/15 hover:via-white/10 hover:to-white/5 focus:ring-2 focus:ring-white/20 focus:outline-none sm:w-auto bg-gradient-to-b from-white/20 via-white/0 to-white/20 w-full h-[52px] rounded-full pt-3 pr-6 pb-3 pl-6 relative gap-x-2 gap-y-2 items-center justify-center" 
              style={{boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.08), 0 2px 8px rgba(0, 0, 0, 0.4)', 
                position: 'relative', 
                '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}
            >
              <span className="text-sm font-semibold tracking-tight relative z-10 text-white/90 group-hover:text-white transition-colors">
                Get Access
              </span>
              <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 relative z-10 text-white/60 group-hover:text-white transition-colors group-hover:translate-x-0.5" width="16" height="16" />
            </button>
          </form>
          
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] mt-8 flex items-center justify-center gap-2 text-sm text-neutral-500 font-medium">
            <iconify-icon icon="solar:shield-check-linear" width="16" height="16" className="text-neutral-500" />
            <span>SOC2 Compliant &amp; Encrypted Data</span>
          </div>
        </div>

        {/* Dashboard / Bento Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] absolute -left-12 top-0 text-xs font-mono text-neutral-700 hidden xl:block">01</div>
          
          {/* Arrow SVG Left */}
          <svg className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] absolute -left-12 -top-16 w-32 h-32 text-neutral-700 hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M80 80 C 40 80, 20 60, 20 20" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arrowhead)"></path>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"></polygon>
              </marker>
            </defs>
          </svg>
          <span className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] absolute -left-20 -top-20 text-sm text-neutral-600 font-handwriting hidden lg:block rotate-[-10deg]">Sync Events</span>

          {/* LEFT COLUMN */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] bg-[#0C0D0F] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">Upcoming</div>
                <button className="text-neutral-600 hover:text-neutral-300 transition-colors flex items-center justify-center">
                   <iconify-icon icon="solar:close-circle-linear" width="20" height="20" />
                </button>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <iconify-icon icon="solar:clipboard-list-linear" width="12" height="12" className="text-white" />
                </div>
                <span className="text-sm text-neutral-400 font-medium">Product Sync</span>
              </div>

              <h3 className="text-2xl text-white mb-2 font-medium tracking-tight">Design Review</h3>
              <p className="text-base text-neutral-500 mb-8 font-medium">10:00 - 11:30 AM</p>

              <div className="border-t border-white/5 pt-5 flex items-center justify-between">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border-[3px] border-[#0C0D0F] flex items-center justify-center text-xs text-neutral-300 font-bold">JD</div>
                  <div className="w-10 h-10 rounded-full bg-neutral-700 border-[3px] border-[#0C0D0F] flex items-center justify-center text-xs text-white font-bold">AS</div>
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border-[3px] border-[#0C0D0F] flex items-center justify-center text-xs text-white font-bold">+3</div>
                </div>
                <button className="bg-white/5 text-white hover:bg-white/10 text-sm px-5 py-2.5 rounded-full font-semibold transition-colors border border-white/5">Join</button>
              </div>
            </div>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-[#0C0D0F] rounded-[2rem] p-6 border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors">
              <div>
                <div className="text-base font-semibold text-white">Quick Actions</div>
                <div className="text-sm text-neutral-500 mt-1 font-medium">Press <span className="text-white/80 px-1 py-0.5 rounded bg-white/10 text-xs">cmd</span> + <span className="text-white/80 px-1 py-0.5 rounded bg-white/10 text-xs">k</span></div>
              </div>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">
                  <iconify-icon icon="solar:play-circle-linear" width="20" height="20" />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">
                  <iconify-icon icon="solar:keyboard-linear" width="20" height="20" />
                </button>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="md:col-span-3 relative">
            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] absolute -top-10 left-0 text-xs font-mono text-neutral-700 hidden xl:block">02</div>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] h-full bg-[#0C0D0F] rounded-[2.5rem] p-8 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 opacity-80">
                  <iconify-icon icon="solar:graph-up-linear" width="16" height="16" className="text-white" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Growth</span>
                </div>
                <h2 className="text-7xl text-white leading-none font-medium tracking-tight">10x</h2>
              </div>

              <div className="relative z-10 mt-12">
                <div className="flex mb-6 space-x-1.5">
                  <div className="h-1.5 w-8 bg-neutral-800 rounded-full"></div>
                  <div className="h-1.5 w-8 bg-neutral-700 rounded-full"></div>
                  <div className="h-1.5 w-12 bg-white rounded-full shadow-none"></div>
                </div>
                <p className="text-xl text-neutral-200 leading-snug font-semibold tracking-tight">
                  Scale your output with automated pipelines.
                </p>
                <p className="text-sm text-neutral-500 mt-3 font-medium">Based on Q3 metrics.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.8s_both] md:col-span-5 relative flex items-center justify-center bg-white/[0.02] rounded-[2.5rem] border border-white/5 border-dashed">
            <div className="absolute -top-10 right-0 text-xs font-mono text-neutral-700 hidden xl:block">03</div>

            <svg className="absolute -right-12 -top-12 w-32 h-32 text-neutral-700 hidden lg:block rotate-90" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M20 80 C 60 80, 80 60, 80 20" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arrowhead)"></path>
            </svg>
            <span className="absolute -right-16 -top-16 text-sm text-neutral-600 font-handwriting hidden lg:block rotate-[10deg]">Auto-sort tasks</span>

            <div className="relative w-full max-w-sm h-80 flex items-center justify-center scale-95 md:scale-100">
              
              <div className="absolute top-0 left-8 right-8 h-56 bg-[#1A1A1A] rounded-3xl border border-white/5 shadow-sm opacity-60 scale-90 translate-y-6 -z-20 flex p-6">
                <div className="flex items-center gap-2 text-neutral-500">
                  <iconify-icon icon="simple-icons:jira" width="18" height="18" style={{filter: 'grayscale(100%)'}}></iconify-icon>
                  <span className="text-xs font-semibold">Jira</span>
                </div>
              </div>

              <div className="absolute top-5 left-4 right-4 h-60 bg-[#1A1A1A] rounded-3xl border border-white/10 shadow-sm opacity-90 scale-95 translate-y-3 -z-10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <iconify-icon icon="simple-icons:discord" width="18" height="18" style={{filter: 'grayscale(100%)'}}></iconify-icon>
                  <span className="text-xs font-bold text-neutral-200">Discord</span>
                </div>
                <div className="h-2.5 w-2/3 bg-white/10 rounded-full mb-3"></div>
                <div className="h-2.5 w-1/2 bg-white/10 rounded-full"></div>
              </div>

              <div className="absolute top-10 left-0 right-0 bg-[#0C0D0F] rounded-3xl border border-white/10 shadow-xl p-8 z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-1.5 rounded-lg bg-white/5 text-neutral-300 flex items-center justify-center">
                    <iconify-icon icon="simple-icons:notion" width="18" height="18" style={{filter: 'invert(1)'}}></iconify-icon>
                  </div>
                  <span className="text-sm font-bold text-neutral-200">Notion</span>
                  <span className="ml-auto text-xs text-neutral-500 font-medium">Just now</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-neutral-500 font-semibold mb-1.5 uppercase tracking-wide">New Task</p>
                    <p className="text-xl font-semibold text-neutral-100 leading-tight">
                      Review Q4 Financials with external auditors.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-neutral-500 text-xs font-semibold">
                        <iconify-icon icon="solar:calendar-linear" width="16" height="16" className="mr-2 text-neutral-600" />
                        Nov 24
                      </div>
                      <div className="flex items-center text-neutral-500 text-xs font-semibold">
                        <iconify-icon icon="solar:clock-circle-linear" width="16" height="16" className="mr-2 text-neutral-600" />
                        2:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer Logos (Monotone) */}
      <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.9s_both] border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
          <p className="text-center text-xs text-neutral-600 font-bold tracking-widest mb-10 uppercase">Trusted by innovators at</p>
          <div className="flex flex-wrap gap-8 md:gap-16 hover:grayscale-0 hover:opacity-100 transition-all duration-500 opacity-40 grayscale gap-x-12 gap-y-8 items-center justify-center">
            <iconify-icon icon="simple-icons:stripe" height="32" className="text-white"></iconify-icon>
            <iconify-icon icon="simple-icons:vercel" height="26" className="text-white"></iconify-icon>
            <iconify-icon icon="simple-icons:linear" height="26" className="text-white"></iconify-icon>
            <iconify-icon icon="simple-icons:airbnb" height="28" className="text-white"></iconify-icon>
            <iconify-icon icon="simple-icons:shopify" height="26" className="text-white"></iconify-icon>
          </div>
        </div>
      </div>

      <div className="relative border-b border-white/5 bg-[#050505]">
        <div className="absolute inset-y-0 left-0 right-0 mx-auto max-w-7xl border-l border-r border-white/5 pointer-events-none z-0 hidden md:block">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
          <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium mb-8">
              Benefits
            </div>
            
            <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] md:text-6xl text-4xl font-medium text-white tracking-tight mb-6">
              Improve every step of the customer journey
            </h2>
            
            <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] text-lg text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
              Convert faster, speed up activation, reduce post-sales cost, and boost retention with intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            
            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] relative md:px-8 group">
              <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                
                <div className="relative z-10 w-48 bg-[#0F0F0F] rounded-lg border border-white/10 shadow-2xl p-4 flex flex-col gap-3 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="h-1 w-12 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full"></div>
                    <div className="h-1.5 w-2/3 bg-neutral-800 rounded-full"></div>
                  </div>
                  
                  <div className="mt-2 self-center bg-white/5 border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5">
                    <iconify-icon icon="solar:check-circle-bold" className="text-white text-xs"></iconify-icon>
                    <span className="text-[10px] font-medium text-neutral-300">POC Generated</span>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Increase sales and conversions</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Don't let time kill deals. Automatically turn sales and discovery calls into fully functional and customized POCs instantly.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] relative md:px-8 group">
              <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>
                
                <div className="relative z-10 w-24 h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white/10 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" fill="#0F0F0F" stroke="currentColor" strokeWidth="1"></path>
                  </svg>
                  <iconify-icon icon="solar:users-group-rounded-linear" className="text-white text-3xl relative z-20"></iconify-icon>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Free up your post-sales team</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Give your onboarding team the ability to focus on higher leverage tasks while the platform handles configuration and setup.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] relative md:px-8 group">
              <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex items-end justify-center pb-8 px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-white tracking-tight">130%</div>
                    <div className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide">Net Retention</div>
                  </div>
                </div>

                <svg className="w-full h-32 overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="white" stopOpacity="0.1"></stop>
                      <stop offset="100%" stopColor="transparent" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0 120 L 50 100 L 100 105 L 150 60 L 200 20" fill="url(#chartGradient)" stroke="none"></path>
                  <path d="M0 120 L 50 100 L 100 105 L 150 60 L 200 20" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"></path>
                  
                  <circle cx="0" cy="120" r="2" fill="#262626" stroke="white" strokeWidth="1.5"></circle>
                  <circle cx="50" cy="100" r="2" fill="#262626" stroke="white" strokeWidth="1.5"></circle>
                  <circle cx="100" cy="105" r="2" fill="#262626" stroke="white" strokeWidth="1.5"></circle>
                  <circle cx="150" cy="60" r="2" fill="#262626" stroke="white" strokeWidth="1.5"></circle>
                  <circle cx="200" cy="20" r="3" fill="#fff" className="group-hover:scale-150 transition-transform origin-center"></circle>

                  <rect x="175" y="0" width="40" height="20" rx="4" fill="#fff" fillOpacity="0.1" stroke="rgba(255,255,255,0.2)"></rect>
                  <text x="195" y="14" fontFamily="sans-serif" fontSize="10" fill="white" textAnchor="middle">100%</text>
                </svg>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Activate customers faster</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Spend meaningfully less time onboarding your customers and more time supporting and renewing contracts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <section className="relative bg-[#050505] text-white py-32 overflow-hidden border-b border-white/5">
        <div className="z-0 opacity-[0.15] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}}></div>
        <div className="max-w-7xl z-10 mr-auto ml-auto pt-6 pr-6 pb-24 pl-6 relative">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 text-[10px] md:text-xs font-mono text-neutral-500 uppercase tracking-[0.2em] gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white">02</span>
              <span className="w-12 h-px bg-white/10"></span>
            </div>
            <div className="text-white/40">// SYSTEM ARCHITECTURE</div>
            <div className="hidden md:block text-right">THREE PHASES OF AUTOMATION</div>
          </div>

          <div className="text-center max-w-6xl mx-auto mb-32 relative">
            <h2 className="leading-[0.9] md:text-8xl lg:text-8xl text-5xl font-medium text-white tracking-tighter mb-8">
              Unified Engine <br />
              <span className="transition-colors duration-500 hover:text-white cursor-default text-neutral-600">for Global Scale.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed tracking-tight">
              We employed intelligent adaptive protocols to maintain consistency and velocity across all development environments.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-between px-16 mb-16 opacity-20">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-full"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-full"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
            <div className="group relative">
              <div className="absolute -top-12 left-0 text-xs font-mono text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">01</div>

              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    <iconify-icon icon="solar:database-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    <iconify-icon icon="solar:server-square-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-150">
                    <iconify-icon icon="solar:magnifer-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                </div>
                <div className="flex gap-1.5 opacity-40">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3 group-hover:text-blue-400 transition-colors">Discover &amp; Analyze</h3>
              <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                Identify bottlenecks in your data pipeline. Our agents automatically map your infrastructure to find optimization opportunities.
              </p>
            </div>

            <div className="group relative">
              <div className="absolute -top-12 left-0 text-xs font-mono text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">02</div>

              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    <iconify-icon icon="solar:code-circle-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    <iconify-icon icon="solar:cpu-bolt-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-150">
                    <iconify-icon icon="solar:infinity-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                </div>
                <div className="flex gap-1.5 opacity-40">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
                </div>
              </div>

              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3 group-hover:text-blue-400 transition-colors">Build &amp; Implement</h3>
              <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                Deploy solutions instantly. The system generates and tests code patches, ensuring zero downtime during implementation.
              </p>
            </div>

            <div className="group relative">
              <div className="absolute -top-12 left-0 text-xs font-mono text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">03</div>

              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    <iconify-icon icon="solar:shield-check-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    <iconify-icon icon="solar:chart-square-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-150">
                    <iconify-icon icon="solar:globe-linear" className="text-lg text-white"></iconify-icon>
                  </div>
                </div>
                <div className="flex gap-1.5 opacity-40">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
                </div>
              </div>

              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3 group-hover:text-blue-400 transition-colors">Deliver &amp; Monitor</h3>
              <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                Ensure efficient execution and tracking. Real-time dashboards give you visibility into performance metrics and health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-32 overflow-hidden bg-[#050505] border-white/5 border-b pt-24 pb-24 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-lg text-neutral-400 font-light leading-relaxed">
              Start for free, upgrade as you scale. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col relative group hover:border-white/10 transition-colors">
              <div className="mb-2 text-neutral-300 font-medium tracking-tight">Starter</div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white tracking-tight">$0</span>
                <span className="text-neutral-500 font-medium">/mo</span>
              </div>
              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">Perfect for side projects and learning the basics.</p>

              <button className="w-full py-3 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors mb-8">Get Started</button>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <iconify-icon icon="solar:check-read-linear" className="text-white/60" width="16" height="16" />
                  <span>1 Seat</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <iconify-icon icon="solar:check-read-linear" className="text-white/60" width="16" height="16" />
                  <span>2 Active Projects</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <iconify-icon icon="solar:check-read-linear" className="text-white/60" width="16" height="16" />
                  <span>Community Support</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] p-8 rounded-[2rem] border border-white/10 bg-[#0A0A0A] flex flex-col relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-white font-medium tracking-tight">Pro</div>
                  <div className="px-3 py-1 rounded-full bg-white text-[10px] text-black font-bold uppercase tracking-wide">Popular</div>
                </div>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-white tracking-tight">$49</span>
                  <span className="text-neutral-500 font-medium">/mo</span>
                </div>
                <p className="text-sm text-neutral-400 mb-8 leading-relaxed">For professional teams shipping into production.</p>

                <button className="w-full py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]">Start Free Trial</button>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <iconify-icon icon="solar:check-read-linear" className="text-white" width="16" height="16" />
                    <span>Unlimited Seats</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <iconify-icon icon="solar:check-read-linear" className="text-white" width="16" height="16" />
                    <span>Unlimited Projects</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <iconify-icon icon="solar:check-read-linear" className="text-white" width="16" height="16" />
                    <span>Analytics Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <iconify-icon icon="solar:check-read-linear" className="text-white" width="16" height="16" />
                    <span>24/7 Priority Support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col relative group hover:border-white/10 transition-colors">
              <div className="mb-2 text-neutral-300 font-medium tracking-tight">Enterprise</div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white tracking-tight">Custom</span>
              </div>
              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">Advanced security and controls for large organizations.</p>

              <button className="w-full py-3 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors mb-8">Contact Sales</button>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <iconify-icon icon="solar:check-read-linear" className="text-white/60" width="16" height="16" />
                  <span>SSO &amp; SAML</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <iconify-icon icon="solar:check-read-linear" className="text-white/60" width="16" height="16" />
                  <span>Dedicated Success Manager</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <iconify-icon icon="solar:check-read-linear" className="text-white/60" width="16" height="16" />
                  <span>99.99% Uptime SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[#050505] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-5xl md:text-7xl font-medium text-white tracking-tight mb-8">
            Ready to accelerate?
          </h2>
          <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12">
            Join thousands of developers using Nexus to automate their workflows and ship better software.
          </p>

          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black text-sm font-semibold tracking-tight hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Start building for free
            </button>
            <button className="px-8 py-4 rounded-full bg-transparent border border-white/10 text-white text-sm font-semibold tracking-tight hover:bg-white/5 transition-colors flex items-center gap-2">
              Talk to an expert
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-20">
            <div className="col-span-2 md:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-bold tracking-tight text-white">nexus<span className="text-white/40">.io</span></span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                The intelligence layer for high-velocity engineering teams. Automate, optimize, and scale without friction.
              </p>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-neutral-600 font-medium">© 2024 Nexus Inc. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="text-neutral-600 hover:text-white transition-colors">
                 <iconify-icon icon="simple-icons:twitter" width="20" height="20" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors">
                 <iconify-icon icon="simple-icons:github" width="20" height="20" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors">
                 <iconify-icon icon="simple-icons:linkedin" width="20" height="20" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}