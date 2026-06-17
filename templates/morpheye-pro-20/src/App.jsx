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



          (function() {
              const heroSection = document.getElementById('hero-section');
              const panels = heroSection ? heroSection.querySelectorAll('.parallax-panel') : [];

              if(heroSection && panels.length > 0) {
                  heroSection.addEventListener('mousemove', (e) => {
                      const x = (e.clientX / window.innerWidth - 0.5) * 2;
                      const y = (e.clientY / window.innerHeight - 0.5) * 2;

                      panels.forEach(panel => {
                          const depth = parseFloat(panel.getAttribute('data-depth')) || 0.2;
                          const moveX = x * 40 * depth;
                          const moveY = y * 40 * depth;
                          const rotateX = -y * 8 * depth;
                          const rotateY = x * 8 * depth;

                          panel.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                      });
                  });

                  heroSection.addEventListener('mouseleave', () => {
                      panels.forEach(panel => {
                          panel.style.transform = `translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)`;
                      });
                  });
              }

              const spotlights = heroSection ? heroSection.querySelectorAll('.hero-spotlight') : [];
              spotlights.forEach(spotlight => {
                  spotlight.addEventListener('mousemove', (e) => {
                      const rect = spotlight.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      spotlight.style.setProperty('--mouse-x', `${x}px`);
                      spotlight.style.setProperty('--mouse-y', `${y}px`);
                  });
              });

              const counter = heroSection ? heroSection.querySelector('.counter-up') : null;
              if (counter) {
                  let start = 0;
                  const target = parseFloat(counter.getAttribute('data-target'));
                  const duration = 2000;
                  const increment = target / (duration / 16);

                  const updateCounter = () => {
                      start += increment;
                      if (start < target) {
                          counter.innerText = start.toFixed(1);
                          requestAnimationFrame(updateCounter);
                      } else {
                          counter.innerText = target.toFixed(1);
                      }
                  };
                  setTimeout(updateCounter, 800);
              }
          })();
        


      lucide.createIcons();
    
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
      

<div className="top-0 w-full h-screen -z-10 absolute" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen opacity-40">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,165,0.08)_0%,transparent_60%)] blur-[80px]"></div>
</div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-[#020606]/60 backdrop-blur-xl border-b border-white/5"></div>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 shrink-0 relative logo-canvas-container" id="nav-logo">
<canvas className="w-full h-full" height="80" id="nav-logo-canvas" width="80"></canvas>
</div>
<span className="text-base font-normal tracking-tight text-white">
            MORPHEYE-PRO
          </span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-white/50">
<a className="hover:text-white transition-colors" href="#">Markets</a>
<a className="hover:text-white transition-colors" href="#">Analytics</a>
<a className="hover:text-white transition-colors" href="#">Terminal</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-white/50 hover:text-white transition-colors" href="#">
            Connect
          </a>
<a className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-normal hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)]" href="#">
            Trade Now
          </a>
</div>
</div>
</header>
<main className="">

<section className="min-h-screen flex overflow-hidden pt-32 pb-20 relative items-center" id="hero-section">
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,165,0.08)_0%,transparent_60%)] blur-[80px]"></div>
<div className="absolute inset-0 opacity-40">
<div className="absolute left-[20%] w-32 h-[150%] bg-gradient-to-t from-transparent via-[#00BFA5]/10 to-transparent blur-[40px] animate-[energy-wave_8s_ease-in-out_infinite]"></div>
<div className="absolute left-[50%] w-48 h-[150%] bg-gradient-to-t from-transparent via-[#00E676]/5 to-transparent blur-[50px] animate-[energy-wave_12s_ease-in-out_infinite_2s]"></div>
<div className="absolute right-[20%] w-24 h-[150%] bg-gradient-to-t from-transparent via-[#004D40]/10 to-transparent blur-[30px] animate-[energy-wave_10s_ease-in-out_infinite_4s]"></div>
</div>
<div className="absolute inset-0">
<div className="absolute left-[25%] w-[2px] h-8 bg-gradient-to-t from-transparent to-[#00E676] rounded-full blur-[1px] animate-[particle-rise_5s_linear_infinite]"></div>
<div className="absolute left-[45%] w-[2px] h-12 bg-gradient-to-t from-transparent to-[#00E676] rounded-full blur-[2px] animate-[particle-rise_7s_linear_infinite_1s]"></div>
<div className="absolute left-[65%] w-[1px] h-6 bg-gradient-to-t from-transparent to-[#00BFA5] rounded-full blur-[1px] animate-[particle-rise_6s_linear_infinite_2s]"></div>
</div>
</div>

<div className="absolute top-1/2 right-[5%] md:right-[15%] -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-40 flex items-center justify-center pointer-events-none">

<div className="absolute inset-0 rounded-full border border-[#00BFA5]/20 shadow-[0_0_120px_rgba(0,191,165,0.15),inset_0_0_80px_rgba(0,230,118,0.1)]"></div>
<div className="absolute w-[70%] h-[70%] rounded-full border border-[#00E676]/30 shadow-[0_0_60px_rgba(0,230,118,0.2)] animate-[ping-slow_5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
<div className="absolute w-[50%] h-[50%] rounded-full border border-[#00E676]/40 shadow-[0_0_40px_rgba(0,230,118,0.3)] animate-[ping-slow_5s_cubic-bezier(0,0,0.2,1)_infinite_2.5s]"></div>

<div className="hero-logo-wrapper relative">
<div className="hero-logo-glow w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
<img alt="MORPHEYE-PRO Logo" className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(0,230,118,0.3)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e39306a-3582-4a9f-a07c-588b14db7905_1600w.png"/>
</div>
</div>

<div className="absolute w-[90%] h-[90%] rounded-full animate-[spin_15s_linear_infinite]">
<div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#00E676] rounded-full shadow-[0_0_10px_#00E676] -translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="absolute w-[110%] h-[110%] rounded-full border border-[#004D40]/10 animate-[spin_25s_linear_infinite_reverse]">
<div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white/60 rounded-full shadow-[0_0_8px_white] -translate-x-1/2 translate-y-1/2"></div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-6 relative z-10 w-full items-center">
<div className="lg:col-span-6 flex flex-col justify-center relative z-20 pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00E676]/20 bg-[#004D40]/20 backdrop-blur-md text-[#00E676] text-xs font-normal uppercase tracking-widest mb-8 w-max shadow-[0_0_15px_rgba(0,230,118,0.1)] pointer-events-auto">
<div className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse shadow-[0_0_5px_#00E676]"></div>
              Polymarket Terminal
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white mb-8 leading-[1.05] emerald-text-glow transition-all duration-500 pointer-events-auto">
              Predictive
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E676] to-[#004D40] drop-shadow-[0_0_20px_rgba(0,230,118,0.3)]">
                Omniscience.
              </span>
</h1>
<p className="text-lg md:text-xl text-white/60 mb-10 max-w-md font-extralight leading-relaxed pointer-events-auto">
              The world's first autonomous trading matrix. Synthesize
              market data, direct algorithmic strategies, and conjure profit realities from
              pure thought within a living neural interface.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-start pointer-events-auto">
<button className="btn-scan px-8 py-4 rounded-full bg-[#00E676] text-black text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(0,230,118,0.3)] flex items-center gap-2 border border-[#00E676]">
                Commence Trading
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="btn-ripple px-8 py-4 rounded-full border border-[#00E676]/30 bg-[#004D40]/20 backdrop-blur-md text-white text-sm font-normal hover:bg-[#00E676]/10 hover:border-[#00E676]/50 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(0,230,118,0.05)]">
<i className="w-4 h-4 text-[#00E676]" data-lucide="play-circle" strokeWidth="1.5"></i>
                View Analytics
              </button>
</div>
</div>
<div className="lg:col-span-6 md:h-[600px] hidden sm:block parallax-container w-full h-[500px] z-10 relative" id="hero-parallax">
<div className="parallax-panel absolute top-[10%] right-[15%] w-[240px] glass-panel-green hero-spotlight rounded-2xl flex flex-col p-5 shadow-2xl z-10 anim-float" data-depth="0.15">
<div className="flex justify-between items-center mb-4 opacity-70">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#00E676]" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-xs text-[#00E676] uppercase tracking-widest font-mono">
                    MARKETS
                  </span>
</div>
<div className="w-1 h-1 bg-[#00E676] rounded-full animate-pulse shadow-[0_0_4px_#00E676]"></div>
</div>
<div className="flex items-end gap-1.5 h-16 mt-2 border-b border-[#00E676]/20 pb-1">
<div className="w-full bg-gradient-to-t from-[#00E676]/40 to-[#00E676]/80 rounded-t-sm animate-[pulse-bar_2s_ease-in-out_infinite]"></div>
<div className="w-full bg-gradient-to-t from-[#00E676]/20 to-[#00E676]/60 rounded-t-sm animate-[pulse-bar-2_2.5s_ease-in-out_infinite]"></div>
<div className="w-full bg-gradient-to-t from-[#00BFA5]/50 to-[#00E676] rounded-t-sm animate-[pulse-bar-3_1.8s_ease-in-out_infinite] shadow-[0_0_8px_rgba(0,230,118,0.4)]"></div>
<div className="w-full bg-gradient-to-t from-[#00E676]/30 to-[#00E676]/70 rounded-t-sm animate-[pulse-bar_3s_ease-in-out_infinite]"></div>
<div className="w-full bg-gradient-to-t from-[#004D40]/40 to-[#00E676]/50 rounded-t-sm animate-[pulse-bar-2_2.2s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="parallax-panel absolute top-[35%] left-[5%] w-[360px] glass-panel-green hero-spotlight border border-[#00E676]/30 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden z-20 anim-float-rev" data-depth="0.4">
<div className="absolute inset-0 bg-gradient-to-br from-[#00E676]/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 p-8 flex flex-col h-full">
<div className="flex items-center gap-2 mb-6 opacity-60">
<div className="w-2 h-2 rounded-full bg-[#00E676]/50"></div>
<div className="w-2 h-2 rounded-full bg-[#00E676]/30"></div>
<div className="w-2 h-2 rounded-full bg-[#00E676]/10"></div>
<span className="ml-auto text-xs text-[#00E676] font-mono tracking-widest uppercase">
                    Data Stream
                  </span>
</div>
<div className="">
<p className="text-xs text-white/60 uppercase tracking-widest font-normal mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-[#00E676]" data-lucide="activity" strokeWidth="1.5"></i>
                    Evaluating Odds
                  </p>
<div className="text-xl text-white font-normal tracking-tight leading-snug w-full h-14">
<span className="typewriter-text inline-block">
                      "Synthesizing probability matrix...
                    </span>
</div>
<div className="w-full h-1 bg-[#00E676]/10 rounded-full mt-6 overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#004D40]/80 via-[#00BFA5] to-[#00E676] w-[60%] shadow-[0_0_10px_#00E676]">
<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/80"></div>
</div>
</div>
</div>
</div>
</div>
<div className="parallax-panel absolute bottom-[10%] right-[5%] w-[180px] glass-panel-green hero-spotlight rounded-2xl z-10 flex items-center justify-center p-6 border-[#00E676]/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] anim-float" data-depth="0.25">
<div className="text-center w-full">
<div className="flex items-center justify-center gap-2 mb-2 opacity-80">
<i className="w-6 h-6 text-[#00E676]" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<div className="text-4xl font-normal tracking-tight text-white mb-1 flex items-center justify-center">
<span className="counter-up" data-target="99.8">0.8</span>
<span className="text-sm text-[#00E676] ml-1">%</span>
</div>
<div className="text-xs text-white/50 uppercase tracking-widest font-normal font-mono">
                  Accuracy
                </div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<span className="text-xs text-[#00E676] uppercase tracking-widest font-mono">
            Descend
          </span>
<div className="w-px h-10 bg-gradient-to-b from-[#00E676]/30 to-transparent relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-4 bg-[#00E676] shadow-[0_0_8px_#00E676] animate-[scroll-probe_1.5s_ease-in-out_infinite]"></div>
</div>
</div>

</section>

<section className="py-12 border-y border-white/5 bg-[#020404] overflow-hidden relative">
<div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#020404] to-transparent z-10"></div>
<div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#020404] to-transparent z-10"></div>
<div className="flex items-center gap-12 whitespace-nowrap anim-marquee">
<div className="flex items-center gap-12">
<span className="text-sm font-normal text-white/30 uppercase tracking-[0.2em]">
              Empowering Market Makers
            </span>
<i className="w-5 h-5 text-white/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
              Alpha Node
            </span>
<i className="w-5 h-5 text-white/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
              Nexus Trading
            </span>
<i className="w-5 h-5 text-white/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
              Kinetix Capital
            </span>
<i className="w-5 h-5 text-white/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
              Oblivion Quants
            </span>
</div>
<div className="flex items-center gap-12 ml-12">
<span className="text-sm font-normal text-white/30 uppercase tracking-[0.2em]">
              Empowering Market Makers
            </span>
<i className="w-5 h-5 text-white/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
              Alpha Node
            </span>
<i className="w-5 h-5 text-white/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
              Nexus Trading
            </span>
<i className="w-5 h-5 text-white/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
              Kinetix Capital
            </span>
<i className="w-5 h-5 text-white/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
              Oblivion Quants
            </span>
</div>
</div>
</section>
</main>


    </>
  );
}
