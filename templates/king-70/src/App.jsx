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
gtag('config', 'G-H15WVD7PYG');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            (function() {
              // 1. Target Impressions
              const impInput = document.getElementById('hero-imp-input');
              const btnMinus = document.getElementById('hero-imp-minus');
              const btnPlus = document.getElementById('hero-imp-plus');

              if(impInput && btnMinus && btnPlus) {
                const updateImp = (delta) => {
                  let current = parseInt(impInput.value.replace(/,/g, ''), 10) || 560000000;
                  current += delta;
                  if(current < 10000000) current = 10000000;
                  if(current > 1000000000) current = 1000000000;
                  impInput.value = current.toLocaleString('en-US');
                };
                btnMinus.addEventListener('click', () => updateImp(-10000000));
                btnPlus.addEventListener('click', () => updateImp(10000000));
              }

              // 2. Gender Focus
              const btnMale = document.getElementById('hero-gender-male');
              const btnFemale = document.getElementById('hero-gender-female');

              const activeGenderClass = "flex-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 ease-in-out focus:outline-none cursor-pointer".split(' ');
              const inactiveGenderClass = "flex-1 bg-white/5 border border-white/10 text-slate-400 hover:text-white text-xs font-medium py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 ease-in-out focus:outline-none cursor-pointer".split(' ');

              if(btnMale && btnFemale) {
                btnMale.addEventListener('click', () => {
                  btnMale.className = activeGenderClass.join(' ');
                  btnFemale.className = inactiveGenderClass.join(' ');
                });
                btnFemale.addEventListener('click', () => {
                  btnFemale.className = activeGenderClass.join(' ');
                  btnMale.className = inactiveGenderClass.join(' ');
                });
              }

              // 3. Geo & Platform Pills
              const activePillClass = "bg-blue-600 border border-blue-500 text-white text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.3)] cursor-pointer transition-all duration-200 ease-in-out hero-geo-btn";
              const inactivePillClass = "bg-white/5 border border-white/10 text-slate-400 hover:text-white text-[10px] font-medium px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out hero-geo-btn";

              const activePlatClass = "bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out hero-platform-btn";
              const inactivePlatClass = "bg-white/5 border border-white/10 text-slate-400 hover:text-white text-[10px] font-medium px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out hero-platform-btn";

              document.querySelectorAll('.hero-geo-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                  const isActive = btn.classList.contains('bg-blue-600');
                  btn.className = isActive ? inactivePillClass : activePillClass;
                });
              });

              document.querySelectorAll('.hero-platform-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                  const isActive = btn.classList.contains('bg-blue-600/20');
                  btn.className = isActive ? inactivePlatClass : activePlatClass;
                });
              });

              // 4. Brand Integrity Toggle
              const brandToggle = document.getElementById('hero-brand-toggle');
              const brandInd = document.getElementById('hero-brand-indicator');
              const brandIcon = document.getElementById('hero-brand-icon');

              if(brandToggle && brandInd) {
                brandToggle.addEventListener('click', (e) => {
                  e.preventDefault();
                  const isActive = brandInd.classList.contains('bg-blue-600');
                  if(isActive) {
                    brandInd.className = "w-4 h-4 rounded bg-transparent border border-white/20 flex items-center justify-center text-transparent transition-all duration-200";
                    if(brandIcon) brandIcon.style.opacity = '0';
                  } else {
                    brandInd.className = "w-4 h-4 rounded bg-blue-600 border border-blue-500 flex items-center justify-center text-white shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-200";
                    if(brandIcon) brandIcon.style.opacity = '1';
                  }
                });
              }

              // 5. Launch Button
              const launchBtn = document.getElementById('hero-launch-btn');
              const launchText = document.getElementById('hero-launch-text');
              const launchIcon = document.getElementById('hero-launch-icon');

              if(launchBtn) {
                launchBtn.addEventListener('click', () => {
                  launchBtn.classList.add('scale-95', 'opacity-80');
                  launchText.innerText = "Launching...";
                  if(launchIcon) launchIcon.classList.add('translate-x-1');

                  setTimeout(() => {
                    launchBtn.classList.remove('scale-95', 'opacity-80');
                    launchText.innerText = "Launch Campaign";
                    if(launchIcon) launchIcon.classList.remove('translate-x-1');
                  }, 600);
                });
              }
            })();
          


              (function() {
                let count = 10394056;
                const counterEl = document.getElementById('view-counter-emmuf8');
                if (counterEl) {
                  setInterval(() => {
                    count += Math.floor(Math.random() * 45) + 5;
                    counterEl.innerText = count.toLocaleString('en-US');
                  }, 1500);
                }
              })();
            


          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "15min", {origin:"https://app.cal.com"});
          Cal.ns["15min"]("inline", {
            elementOrSelector:"#my-cal-inline-15min",
            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
            calLink: "floods-uuua06/15min",
          });
          Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        


      (function() {
        function updateView() {
          const path = window.location.pathname;
          const hash = window.location.hash;
          const isTerms = path.includes('/terms') || hash === '#terms';

          document.querySelectorAll('body > section').forEach(sec => {
            if (sec.id !== 'terms-view') {
              sec.style.display = isTerms ? 'none' : '';
            }
          });

          const termsView = document.getElementById('terms-view');
          if (termsView) {
            if (isTerms) {
              termsView.classList.remove('hidden');
              if (!window.location.hash || window.location.hash === '#terms') {
                window.scrollTo(0,0);
              }
            } else {
              termsView.classList.add('hidden');
            }
          }
        }

        document.body.addEventListener('click', (e) => {
          const link = e.target.closest('a');
          if (link) {
            const href = link.getAttribute('href');
            if (!href) return;

            if (href === '/terms' || href === '#terms') {
              e.preventDefault();
              window.history.pushState(null, '', '/terms');
              updateView();
            } else if (href === '/' || href === '#home' || href === '#') {
              const path = window.location.pathname;
              if (path.includes('/terms') || window.location.hash === '#terms') {
                e.preventDefault();
                window.history.pushState(null, '', '/');
                updateView();
              }
            } else if (href.startsWith('#')) {
              const path = window.location.pathname;
              if (path.includes('/terms') || window.location.hash === '#terms') {
                e.preventDefault();
                window.history.pushState(null, '', '/' + href);
                updateView();
                setTimeout(() => {
                  const el = document.querySelector(href);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }
          }
        });

        window.addEventListener('popstate', updateView);

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', updateView);
        } else {
          updateView();
        }
      })();
    


      lucide.createIcons();
    


      (function() {
          const initInteractiveBlocks = () => {
              const blocks = document.querySelectorAll('.feature-block');
              const tabs = document.querySelectorAll('.tab-content');

              if (!blocks.length) return;

              blocks.forEach(block => {
                  block.addEventListener('click', () => {
                      blocks.forEach(b => {
                          b.classList.remove('bg-white', 'border-slate-200', 'border-l-4', 'border-l-blue-600', 'shadow-md', '-translate-y-1', 'opacity-100');
                          b.classList.add('border-transparent', 'opacity-60', 'hover:bg-slate-100/50');
                          const iconBg = b.querySelector('.icon-bg');
                          if(iconBg) {
                              iconBg.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
                              iconBg.classList.add('bg-slate-100', 'text-slate-500');
                          }
                          const h3 = b.querySelector('h3');
                          if(h3) {
                              h3.classList.remove('text-slate-900');
                              h3.classList.add('text-slate-700');
                          }
                      });

                      block.classList.add('bg-white', 'border-slate-200', 'border-l-4', 'border-l-blue-600', 'shadow-md', '-translate-y-1', 'opacity-100');
                      block.classList.remove('border-transparent', 'opacity-60', 'hover:bg-slate-100/50');
                      const activeIconBg = block.querySelector('.icon-bg');
                      if(activeIconBg) {
                          activeIconBg.classList.add('bg-blue-600', 'text-white', 'shadow-md');
                          activeIconBg.classList.remove('bg-slate-100', 'text-slate-500');
                      }
                      const activeH3 = block.querySelector('h3');
                      if(activeH3) {
                          activeH3.classList.add('text-slate-900');
                          activeH3.classList.remove('text-slate-700');
                      }

                      tabs.forEach(t => {
                          t.classList.remove('opacity-100', 'z-10');
                          t.classList.add('opacity-0', 'pointer-events-none', 'z-0');
                      });
                      const targetId = block.getAttribute('data-target');
                      const targetTab = document.getElementById(targetId);
                      if (targetTab) {
                          targetTab.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
                          targetTab.classList.add('opacity-100', 'z-10');
                      }
                  });
              });

              let count = 2847291;
              const counterEl = document.getElementById('impression-counter');
              if (counterEl && !window.hasInitCounter) {
                  window.hasInitCounter = true;
                  setInterval(() => {
                      count += Math.floor(Math.random() * 25) + 5;
                      counterEl.innerText = count.toLocaleString();
                  }, 1200);
              }
          };

          if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initInteractiveBlocks);
          } else {
              initInteractiveBlocks();
          }

          if (typeof lucide !== 'undefined') {
              lucide.createIcons();
          }
      })();
    


      (function() {
          const initProcessSteps = () => {
              const steps = document.querySelectorAll('.process-step');
              const visuals = document.querySelectorAll('.step-visual');
              const stepBg = document.querySelector('.step-bg');

              if (!steps.length) return;

              steps.forEach(step => {
                  step.addEventListener('click', () => {
                      const target = step.getAttribute('data-step');

                      // Reset all steps
                      steps.forEach(s => {
                          s.classList.remove('bg-white', 'border-blue-600', 'shadow-xl', 'translate-x-0', 'opacity-100');
                          s.classList.add('bg-transparent', 'border-transparent', 'translate-x-4', 'opacity-60');
                          const num = s.querySelector('.step-number');
                          if (num) {
                              num.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-600/30');
                              num.classList.add('bg-slate-200', 'text-slate-500');
                          }
                          const title = s.querySelector('h3');
                          if (title) {
                              title.classList.remove('text-slate-900');
                              title.classList.add('text-slate-500');
                          }
                      });

                      // Activate clicked step
                      step.classList.add('bg-white', 'border-blue-600', 'shadow-xl', 'translate-x-0', 'opacity-100');
                      step.classList.remove('bg-transparent', 'border-transparent', 'translate-x-4', 'opacity-60');
                      const activeNum = step.querySelector('.step-number');
                      if (activeNum) {
                          activeNum.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-600/30');
                          activeNum.classList.remove('bg-slate-200', 'text-slate-500');
                      }
                      const activeTitle = step.querySelector('h3');
                      if (activeTitle) {
                          activeTitle.classList.add('text-slate-900');
                          activeTitle.classList.remove('text-slate-500');
                      }

                      // Update visuals
                      visuals.forEach(v => {
                          v.classList.remove('opacity-100', 'scale-100', 'z-10');
                          v.classList.add('opacity-0', 'scale-95', 'z-0', 'pointer-events-none');
                      });
                      const activeVisual = document.getElementById(`visual-${target}`);
                      if (activeVisual) {
                          activeVisual.classList.remove('opacity-0', 'scale-95', 'z-0', 'pointer-events-none');
                          activeVisual.classList.add('opacity-100', 'scale-100', 'z-10');
                      }

                      // Update BG color
                      if (stepBg) {
                          if (target === '1') stepBg.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[80px] rounded-full pointer-events-none transition-all duration-700 step-bg';
                          if (target === '2') stepBg.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/20 blur-[80px] rounded-full pointer-events-none transition-all duration-700 step-bg';
                          if (target === '3') stepBg.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/20 blur-[80px] rounded-full pointer-events-none transition-all duration-700 step-bg';
                      }
                  });
              });

              if (typeof lucide !== 'undefined') {
                  lucide.createIcons();
              }
          };

          if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initProcessSteps);
          } else {
              setTimeout(initProcessSteps, 100);
          }
      })();
    
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
      

<div className="flex overflow-x-auto no-scrollbar md:justify-between text-[10px] md:text-xs z-[60] md:pr-6 md:pl-6 text-slate-400 bg-black w-full max-w-[100vw] border-white/5 border-b pt-1.5 pr-4 pb-1.5 pl-4 relative items-center justify-start">
<div className="flex gap-2.5 md:gap-4 flex-nowrap md:flex-wrap md:justify-center shrink-0 font-medium items-center justify-start">
<span className="hidden md:flex items-center gap-1.5 shrink-0">
<span className="flex items-center gap-0.5 ml-1">
<div className="flex bg-[#00B67A] w-3 h-3 rounded-[2px] items-center justify-center">
<iconify-icon className="text-white w-2 h-2" height="8" icon="solar:star-bold" style={{color: 'rgb(255, 255, 255)'}} width="8"></iconify-icon>
</div>
<div className="flex bg-[#00B67A] w-3 h-3 rounded-[2px] items-center justify-center">
<iconify-icon className="text-white w-2 h-2" height="8" icon="solar:star-bold" style={{color: 'rgb(255, 255, 255)'}} width="8"></iconify-icon>
</div>
<div className="bg-[#00B67A] w-3 h-3 flex items-center justify-center rounded-[2px]">
<iconify-icon className="text-white w-2 h-2" height="8" icon="solar:star-bold" style={{color: 'rgb(255, 255, 255)'}} width="8"></iconify-icon>
</div>
<div className="bg-[#00B67A] w-3 h-3 flex items-center justify-center rounded-[2px]">
<iconify-icon className="text-white w-2 h-2" height="8" icon="solar:star-bold" style={{color: 'rgb(255, 255, 255)'}} width="8"></iconify-icon>
</div>
<div className="bg-[#00B67A] w-3 h-3 flex items-center justify-center rounded-[2px]">
<iconify-icon className="text-white w-2 h-2" height="8" icon="solar:star-bold" style={{color: 'rgb(255, 255, 255)'}} width="8"></iconify-icon>
</div>
</span>
</span>
<span className="hidden md:inline text-slate-700 shrink-0">|</span>
<span className="hidden md:inline text-slate-300 shrink-0">
          50+ Collaborators
        </span>
<span className="hidden lg:inline text-slate-700 shrink-0">|</span>
<span className="inline md:hidden lg:inline whitespace-nowrap shrink-0 text-slate-300 ml-[max(0px,calc(50vw_-_160px))] md:ml-0">
          35,700,000,000+ Views Generated‎
        </span>
</div>
<div className="flex items-center gap-2.5 md:gap-3 font-medium text-slate-300 shrink-0 ml-2.5 md:ml-0 after:content-[''] after:w-2 md:after:hidden">
<span className="hidden md:inline shrink-0">
          Official Partners:‎ ‎ ‎ Meta‎ ‎ ‎ Google‎ ‎ ‎ TikTok‎ ‎ ‎ Snapchat
        </span>
<span className="inline md:hidden text-slate-700 shrink-0">|</span>
<span className="text-[9px] uppercase font-bold text-blue-400 tracking-[0.2em] bg-blue-500/10 border-blue-500/20 border rounded px-2 py-0.5 shadow-[0_0_10px_rgba(59,130,246,0.2)] shrink-0 whitespace-nowrap">
          UA Compliant
        </span>
</div>
</div>

<nav className="sticky top-0 w-full z-50 border-b border-white/5 bg-[#030305]/70 backdrop-blur-2xl">
<div className="flex h-14 max-w-7xl mr-auto ml-auto pr-5 pl-5 items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-xl font-bold tracking-tighter lowercase flex items-center gap-2" href="#">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            floods
          </a>
<div className="hidden md:flex items-center gap-6 text-xs font-semibold">
<a className="text-slate-400 hover:text-white transition-colors" href="#how-it-works">
              How it works
            </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#case-studies">
              Case Studies
            </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#faq">
              FAQ
            </a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hover:bg-slate-200 hover:scale-105 transition-all cursor-pointer text-[10px] md:text-xs md:px-5 md:py-2 leading-tight md:max-w-none font-semibold text-black text-center bg-white max-w-[150px] rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_0_30px_rgba(255,255,255,0.15)]" onclick="window.location.href='https://floods.fr'" role="button">
            Click &amp; check the main floods.fr for details.
          </button>
</div>
</div>
</nav>

<section className="overflow-hidden flex flex-col pt-6 pb-6 px-4 relative justify-start">

<div className="absolute inset-0 tech-grid z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[450px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none -z-10 animate-float-slow"></div>
<div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none -z-10"></div>
<div className="bg-gradient-to-b from-transparent via-[#030305]/80 to-[#030305] z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col text-center w-full z-10 mt-2 mr-auto mb-4 ml-auto pr-4 pl-4 relative items-center">
<div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5 overflow-hidden mx-auto shadow-[0_0_30px_rgba(59,130,246,0.2)] mb-4">
<img alt="Block Blast logo" className="w-full h-full object-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4fa2ff1-0066-49bf-9a58-89e8af700fdf_3840w.png"/>
</div>
<h1 className="flex flex-col items-center text-center w-full max-w-4xl mr-auto mb-10 ml-auto" style={{textWrap: 'balance'}}>
<span className="block leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] text-4xl font-semibold text-white tracking-tight pt-3 pb-3">The ORGANIC feed runs 24/7. King isn't in it.</span>
<span className="block bg-clip-text glow-text leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] text-3xl font-semibold text-transparent tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mt-1 mb-1 pt-2 pb-2 translate-y-1">
            We put it there.
          </span>
</h1>
<p className="leading-relaxed md:text-2xl text-base font-medium text-gray-300 text-center w-full max-w-2xl mr-auto ml-auto" style={{textWrap: 'balance'}}>Your users watch 300+ organic videos a day. None of them are Candy Crush. We change that.</p>
</div>

<div className="flex flex-col md:flex-row gap-8 md:gap-10 z-10 md:mt-12 w-full max-w-4xl mt-6 mx-auto relative items-center justify-center">

<div className="glass-panel grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 flex-1 md:w-[55%] shrink-0 z-20 w-full max-w-xl rounded-2xl pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 transform scale-[0.8] origin-top md:transform-none">

<div className="col-span-1 md:col-span-2">
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
              Target Impressions
            </label>
<div className="flex items-center bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-sm transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
<button className="px-3 py-3 text-slate-400 hover:text-white bg-white/5 border-r border-white/10 transition-colors focus:outline-none cursor-pointer" id="hero-imp-minus">
<svg className="w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12h8"></path>
</svg>
</button>
<input className="flex-1 text-center font-semibold text-xl tracking-tight text-white py-3 bg-transparent focus:outline-none" id="hero-imp-input" readonly="" type="text" value="560,000,000"/>
<button className="px-3 py-3 text-slate-400 hover:text-white bg-white/5 border-l border-white/10 transition-colors focus:outline-none cursor-pointer" id="hero-imp-plus">
<svg className="w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12h8"></path>
<path d="M12 8v8"></path>
</svg>
</button>
</div>
</div>

<div className="">
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
              Gender Focus
            </label>
<div className="flex gap-2">
<button className="flex-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 ease-in-out focus:outline-none cursor-pointer" id="hero-gender-male">
<svg className="w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                Male
              </button>
<button className="flex-1 bg-white/5 border border-white/10 text-slate-400 hover:text-white text-xs font-medium py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 ease-in-out focus:outline-none cursor-pointer" id="hero-gender-female">
<svg className="w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                Female
              </button>
</div>
</div>

<div className="">
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
              Age Range
            </label>
<div className="w-full bg-black/50 border border-white/10 rounded-lg py-2 px-3 flex items-center justify-between transition-colors hover:border-blue-500/50">
<span className="text-xs font-semibold text-white">18 - 34</span>
<svg className="w-4 h-4 text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line>
<line x1="10" x2="3" y1="4" y2="4"></line>
<line x1="21" x2="12" y1="12" y2="12"></line>
<line x1="8" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="16" y1="20" y2="20"></line>
<line x1="12" x2="3" y1="20" y2="20"></line>
<line x1="14" x2="14" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="10" y2="14"></line>
<line x1="16" x2="16" y1="18" y2="22"></line>
</svg>
</div>
</div>

<div className="col-span-1">
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
              Geos
            </label>
<div className="flex flex-wrap gap-1.5">
<span className="hero-geo-btn bg-blue-600 border border-blue-500 text-white text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.3)] cursor-pointer transition-all duration-200 ease-in-out">
                🇺🇸 US
              </span>
<span className="hero-geo-btn bg-white/5 border border-white/10 text-slate-400 hover:text-white text-[10px] font-medium px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out">
                🇫🇷 FR
              </span>
<span className="hero-geo-btn bg-white/5 border border-white/10 text-slate-400 hover:text-white text-[10px] font-medium px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out">
                🇧🇷 BR
              </span>
<span className="hero-geo-btn bg-white/5 border border-white/10 text-slate-400 hover:text-white text-[10px] font-medium px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out">
                🇬🇧 UK
              </span>
</div>
</div>

<div className="col-span-1">
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
              Platform Target
            </label>
<div className="flex flex-wrap gap-1.5">
<span className="hero-platform-btn bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out">
                TikTok
              </span>
<span className="hover:text-white flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out hero-platform-btn text-[10px] font-medium text-slate-400 bg-white/5 border-white/10 border rounded px-2 py-1">
                Instagram
              </span>
<span className="flex items-center gap-1 cursor-pointer transition-all duration-200 ease-in-out hero-platform-btn text-[10px] font-semibold text-blue-400 bg-blue-600/20 border-blue-500/30 border rounded px-2 py-1">
                Youtube
              </span>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
<div className="flex flex-col gap-2 w-full md:w-auto">
<div className="flex items-center gap-2">
<span className="glow-text text-2xl font-semibold text-white tracking-tight">$0.15-$1.00</span>
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-1">
                  CPM
                </span>
<div className="bg-white/5 border border-white/10 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1 ml-2">
<svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
                  Guaranteed
                </div>
</div>
<label className="flex items-center gap-2 cursor-pointer group w-fit transition-all duration-200" id="hero-brand-toggle">
<div className="w-4 h-4 rounded bg-blue-600 border border-blue-500 flex items-center justify-center text-white shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-200" id="hero-brand-indicator">
<svg className="w-3 h-3 transition-opacity duration-200" fill="none" height="12" id="hero-brand-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                  Brand integrity rules set
                </span>
</label>
</div>
<button className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] cursor-pointer" id="hero-launch-btn">
<span className="" id="hero-launch-text" onclick="window.location.href='https://cal.com/floods-uuua06/15min?layout=mobile&amp;overlayCalendar=true'" role="button">
                Launch Campaign
              </span>
<svg className="w-4 h-4 transition-transform duration-200" fill="none" height="16" id="hero-launch-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

</div>

<div className="md:w-[45%] shrink-0 animate-float-slow flex w-full max-w-[220px] z-10 relative justify-center">

<div className="absolute -left-8 top-[20%] glass-panel px-2.5 py-1 rounded-full text-[9px] font-semibold text-white z-20 animate-float-badge flex items-center gap-1 shadow-lg border border-white/10">
<i className="w-2.5 h-2.5 text-blue-400" data-lucide="video"></i>
            TikTok
          </div>
<div className="absolute -right-6 top-[45%] glass-panel px-2.5 py-1 rounded-full text-[9px] font-semibold text-white z-20 animate-float-badge delay-1000 flex items-center gap-1 shadow-lg border border-white/10">
<i className="w-2.5 h-2.5 text-purple-400" data-lucide="instagram"></i>
            Reels
          </div>
<div className="absolute -left-5 top-[70%] glass-panel px-2.5 py-1 rounded-full text-[9px] font-semibold text-white z-20 animate-float-badge delay-2000 flex items-center gap-1 shadow-lg border border-white/10">
<i className="w-2.5 h-2.5 text-red-400" data-lucide="youtube"></i>
            Shorts
          </div>

<div className="md:h-[460px] border-[8px] overflow-hidden bg-black w-full h-[420px] z-10 border-slate-800 rounded-[2.5rem] relative shadow-[0_20px_40px_rgba(0,0,0,0.8)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[18px] bg-slate-800 rounded-b-lg z-50"></div>

<style>
              @keyframes feed-scroll-2 {
                0%, 40% { transform: translateY(0%); }
                50%, 90% { transform: translateY(-50%); }
                100% { transform: translateY(0%); }
              }
              .animate-feed-scroll-2 { animation: feed-scroll-2 8s ease-in-out infinite; }
            </style>
<div className="w-full h-[200%] animate-feed-scroll-2 flex flex-col">
<div className="relative w-full h-1/2 bg-black">
<video autoplay="" className="z-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://res.cloudinary.com/dpklxai6v/video/upload/v1775480636/AQMHhxLUp9-JDy9huNuyb0m2ULBWXYwU-jg3cDG8jgWarXM-FesEVYthwYryJHS4sh1m5oAX988WauVkR8vsq4twhGDgmgmv2C-9Kuqe2A_twkx3t.mp4"></video>
<div className="absolute top-8 left-5 z-10 bg-black/50 text-white/70 text-[9px] uppercase font-semibold px-2 py-1 rounded backdrop-blur-md">
                  AD
                </div>
</div>
<div className="relative w-full h-1/2 bg-black">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0" loop="" muted="" playsinline="" src="https://res.cloudinary.com/dpklxai6v/video/upload/v1775480649/202603221413_fxzkct.mp4"></video>
<div className="absolute top-8 right-5 z-10 bg-blue-600 text-white text-[9px] uppercase font-semibold px-2 py-1 rounded shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  ORGANIC
                </div>
</div>
</div>
</div>
</div>
</div>
<p className="text-base font-medium text-center max-w-2xl mx-auto leading-relaxed z-20 relative mt-10 mb-6 px-4 md:text-2xl" style={{textWrap: 'balance'}}>
<span className="font-semibold text-white drop-shadow-sm">
          We deliver billions of organic impressions
        </span>
<span className="text-slate-400">
          across TikTok, Reels, and Shorts. Same targeting as paid ads - geo,
          gender, age, platform. But organic.
        </span>
<span className="font-semibold text-emerald-300">Verified.</span>
<span className="font-semibold text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] ml-1">
          25x cheaper.
        </span>
</p>
</section>

<section className="overflow-hidden border-y bg-[#050508] border-white/5 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 mb-10 relative z-20 flex flex-col items-center text-center">
<span className="text-[9px] font-medium tracking-[0.3em] text-blue-500 uppercase mb-3 block glow-text">
          Content Examples
        </span>
<h2 className="md:text-4xl text-2xl font-medium text-white tracking-tight mb-3">What Candy Crush looks like in the feed.</h2>
</div>
<div className="z-0 relative flex flex-col items-center justify-center w-full px-6">
<div className="flex flex-col gap-3 items-center">
<div className="bg-[#0a0a0f] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center shadow-lg hover:border-blue-500/50 transition-colors w-[260px] h-[462px] md:w-[320px] md:h-[570px]">
<video autoplay="" className="z-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" loop="" muted="" playsinline="" src="https://res.cloudinary.com/dpklxai6v/video/upload/v1775480649/202603221413_fxzkct.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
</div>
<span className="uppercase flex justify-center items-center gap-1.5 text-xs font-normal text-slate-300 tracking-widest text-center w-full mt-2">
<span className="" id="view-counter-emmuf8">10,394,056</span>
            views
            
</span>
</div>
<p className="text-sm italic text-slate-500 text-center max-w-[400px] mt-8 mr-auto ml-auto">
          This is one example. We produce tens of thousands of clips per
          campaign.
        </p>
</div>
</section>
<section className="bg-[#050508] pt-24 pb-24 px-5 relative">
<div className="max-w-3xl mx-auto text-center">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">Candy Crush players are scrolling right now.</h2>
<div className="flex flex-col md:flex-row gap-8 justify-center">
<div className="glass-panel rounded-xl p-6 min-w-[180px] flex-1">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">
              300+
            </div>
<div className="uppercase text-base text-white tracking-widest">
              organic videos watched daily per user
            </div>
</div>
<div className="glass-panel rounded-xl p-6 min-w-[180px] flex-1">
<div className="glow-text text-4xl font-semibold text-blue-400 tracking-tight mb-2">
              0
            </div>
<div className="uppercase text-base text-white tracking-widest">are from KING</div>
</div>
<div className="glass-panel rounded-xl p-6 min-w-[180px] flex-1">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">
              80%
            </div>
<div className="uppercase text-base text-white tracking-widest">
              of screen time is the organic feed
            </div>
</div>
</div>
<p className="text-base font-semibold text-slate-300 mt-12">
          We fill that gap. At industrial scale. Data-Driven.
        </p>
</div>
</section>
<section className="bg-[#08080c] border-white/5 border-t pt-24 pr-5 pb-24 pl-5 relative">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-12">
          We've done this, at scale
        </h2>
<div className="grid grid-cols-2 md:flex md:flex-nowrap gap-3 md:gap-6 justify-center w-full">
<div className="glass-panel rounded-xl px-3 py-4 md:p-6 text-center flex-1 min-w-0 md:min-w-[160px] flex flex-col items-center justify-center overflow-hidden">
<div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              10B+
            </div>
<div className="text-[9px] md:text-xs uppercase break-words leading-tight text-white tracking-widest w-full mt-1">
              impressions/month
            </div>
</div>
<div className="glass-panel rounded-xl px-3 py-4 md:p-6 text-center flex-1 min-w-0 md:min-w-[160px] flex flex-col items-center justify-center overflow-hidden">
<div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              7,500+
            </div>
<div className="text-[9px] md:text-xs uppercase break-words leading-tight text-white tracking-widest w-full mt-1">
              verified accounts
            </div>
</div>
<div className="glass-panel rounded-xl px-3 py-4 md:p-6 text-center flex-1 min-w-0 md:min-w-[160px] flex flex-col items-center justify-center overflow-hidden">
<div className="text-2xl md:text-3xl font-bold text-blue-400 glow-text tracking-tight">
              $0.80
            </div>
<div className="text-[9px] md:text-xs uppercase break-words leading-tight text-white tracking-widest w-full mt-1">
              avg CPM
            </div>
</div>
<div className="glass-panel rounded-xl px-3 py-4 md:p-6 text-center flex-1 min-w-0 md:min-w-[160px] flex flex-col items-center justify-center overflow-hidden">
<div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              80+
            </div>
<div className="text-[9px] md:text-xs uppercase break-words leading-tight text-white tracking-widest w-full mt-1">
              managed campaigns
            </div>
</div>
</div>
<div className="mt-12 flex flex-col md:flex-row gap-6 justify-center text-left">
<div className="w-full md:w-1/2 bg-[#0a0a0f] border border-white/5 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 flex flex-col overflow-hidden">
<div className="aspect-video relative overflow-hidden bg-[#111]">
<img alt="Rainbet Case Study" className="w-full h-full object-cover" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a93928b3-57d2-4186-b7ed-8d45a60e7ea2_1600w.png"/>
</div>
<div className="p-6 flex flex-col gap-5">
<div className="flex border-white/5 border-b pb-5 items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-1">
                    Total Views
                  </span>
<span className="text-2xl font-semibold text-white tracking-tight">
                    4.2B
                  </span>
</div>
<div className="flex flex-col text-right">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-1">
                    Spent
                  </span>
<span className="text-2xl font-semibold text-white tracking-tight">
                    $2.14M
                  </span>
</div>
</div>
<div className="flex justify-between items-center"></div>
</div>
</div>
<div className="w-full md:w-1/2 bg-[#0a0a0f] border border-white/5 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 flex flex-col overflow-hidden">
<div className="aspect-video relative overflow-hidden bg-[#111]">
<img alt="Stake Case Study" className="w-full h-full object-cover" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3ae985f-2429-43d4-90a1-a129335d2000_1600w.png"/>
</div>
<div className="p-6 flex flex-col gap-5">
<div className="flex justify-between items-center pb-5 border-b border-white/5">
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-1">
                    Total Views
                  </span>
<span className="text-2xl font-semibold text-white tracking-tight">
                    12.4B
                  </span>
</div>
<div className="flex flex-col text-right">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-1">
                    Spent
                  </span>
<span className="text-2xl font-semibold text-white tracking-tight">
                    $5.04M
                  </span>
</div>
</div>
<div className="flex justify-between items-center"></div>
</div>
</div>
</div>
<p className="text-base font-medium text-slate-400 text-center mt-12">We show data. Book 15 minutes and we walk you through King on the organic feed.</p>
</div>
</section>
<section className="overflow-hidden bg-[#030305] border-white/5 border-t pt-24 pr-5 pb-24 pl-5 relative">
<div className="absolute inset-0 tech-grid opacity-20 pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[450px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="z-10 text-center max-w-3xl mr-auto ml-auto relative">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
          Book a call.
        </h2>
<p className="md:text-xl text-lg font-normal text-white">15 minutes. We show you what King looks like in the organic feed.</p>
<div className="mt-8 mb-8 flex flex-col items-center gap-3">
<span className="text-slate-500 uppercase tracking-widest text-[10px]">
            or reach out directly:
          </span>
<div className="flex flex-col md:flex-row gap-3 w-full max-w-[280px] md:max-w-none mx-auto justify-center">
<a className="glass-panel rounded-full text-white font-medium text-sm px-6 py-3 flex items-center justify-center gap-2.5 transition-colors hover:bg-white/5" href="mailto:contact@floods.fr">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
              contact@floods.fr
            </a>
<a className="glass-panel rounded-full text-white font-medium text-sm px-6 py-3 flex items-center justify-center gap-2.5 transition-colors hover:bg-white/5" href="https://wa.me/33640893194">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
              +33 6 40 89 31 94
            </a>
</div>
</div>
</div>
<div className="w-full max-w-[900px] mx-auto bg-[#0a0a0f] border border-white/10 rounded-[1.5rem] shadow-[0_15px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(37,99,235,0.15)] min-h-[500px] md:h-[550px] relative overflow-hidden z-10">
<div className="z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 to-transparent absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 pointer-events-none"></div>

<style>
          #my-cal-inline-15min::-webkit-scrollbar { display: none; }
          #my-cal-inline-15min { scrollbar-width: none; -ms-overflow-style: none; }
        </style>
<div className="cal-inline-container" id="my-cal-inline-15min" style={{width: '100%', height: '100%', overflow: 'scroll', position: 'relative', zIndex: '20'}}>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>
            .cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
          </style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style></div>


</div>
</section>

<section className="z-10 flex flex-col bg-blue-600 py-12 px-5 relative items-center justify-center text-center">
<div className="max-w-2xl mx-auto flex flex-col items-center">
<iconify-icon className="text-white/80 w-6 h-6 mb-3" height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
<h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
          Want to understand how we do this?
        </h2>
<p className="text-sm text-white/70 font-medium mt-2 mb-6">
          Full case studies. Process breakdown. FAQ. Everything on our main
          site.
        </p>
<a className="hover:scale-105 transition-all bg-white text-blue-600 font-bold rounded-full px-8 py-3 text-sm uppercase tracking-widest inline-block shadow-lg" href="https://floods.fr" rel="noopener noreferrer" target="_blank">
          Visit floods.fr →
        </a>
</div>
</section>

<main className="hidden bg-white text-slate-800 min-h-screen pt-24 pb-24 px-5 relative z-10" id="terms-view">
<div className="max-w-[700px] mr-auto ml-auto">
<a className="inline-flex items-center gap-2 text-blue-600 font-medium mb-6 hover:text-blue-700 transition-colors" href="/">
<svg className="w-4 h-4" data-icon-set="solar" data-solar="arrow-left-linear" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
          Back to home
        </a>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
          Terms of Service
        </h1>
<p className="text-slate-500 font-normal mb-10">Last updated: March 2026</p>
<div className="space-y-8 text-slate-600 leading-relaxed text-sm md:text-base">
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              1. Introduction
            </h2>
<p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              2. Definitions
            </h2>
<p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              3. Services Description
            </h2>
<p>
              Proin gravida dolor sit amet nisl consectetur, quis pulvinar est
              venenatis. Aenean aliquet est id auctor euismod. Donec et diam ac
              sem scelerisque commodo.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              4. Account Registration
            </h2>
<p>
              Phasellus sit amet nulla ut nulla facilisis elementum. Vivamus vel
              magna vitae nulla vestibulum facilisis. Curabitur vel lectus sed
              purus pellentesque.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              5. Payment Terms
            </h2>
<p>
              Suspendisse potenti. In hac habitasse platea dictumst. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              6. Intellectual Property
            </h2>
<p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              7. Confidentiality
            </h2>
<p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              8. Data Privacy
            </h2>
<p>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              9. Limitation of Liability
            </h2>
<p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              10. Termination
            </h2>
<p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              11. Governing Law
            </h2>
<p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur.
            </p>
</section>
<section>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
              12. Contact Information
            </h2>
<p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur.
            </p>
</section>
</div>
</div>
</main>

<footer className="bg-[#030305] border-white/5 border-t pt-16 pr-5 pb-16 pl-5">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-white text-xl font-semibold tracking-tight lowercase flex items-center gap-2 mb-5 w-fit" href="#">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              floods
            </a>
<p className="text-[9px] uppercase block glow-text font-semibold text-blue-500 tracking-[0.3em] mb-5">
              DATA-driven Organic Distribution.
            </p>
<div className="space-y-2 text-xs text-slate-400 font-normal">
<p className="">• 10B+ impressions/month</p>
<p className="">• 10-25x cheaper than paid</p>
<p className="">• 7500+ verified accounts</p>
</div>
<a className="inline-block hover:text-blue-300 transition-colors text-base font-medium text-blue-400 mt-6" href="/mailto:contact@floods.fr">
              contact@floods.fr
            </a>
</div>
<div className="">
<h5 className="text-white font-medium text-xs mb-4 uppercase tracking-wider">
              Company
            </h5>
<ul className="space-y-3 text-xs font-normal text-slate-400">
<li className="">
<a className="hover:text-white transition-colors" href="#how-it-works">
                  How it works
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#case-studies">
                  Case Studies
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#faq">
                  FAQ
                </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium text-xs mb-4 uppercase tracking-wider">
              Legal
            </h5>
<ul className="space-y-3 text-xs font-normal text-slate-400">
<li className="">
<a className="hover:text-white transition-colors" href="/terms">
                  Terms of Service
                </a>
</li>
<li className=""></li>
<li className=""></li>
</ul>
</div>
</div>
<div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-5">
<p className="text-xs text-slate-500 font-normal">
            © 2026 Floods LLC. All rights reserved.
          </p>
<div className="flex gap-5">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>





<div className="" id="livechat-widget-container">
<iframe className="" loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
</div>
<div className="" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(245, 158, 11)'}}></span>
<span className="heyo-status-text">Away</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(245, 158, 11)'}}></span>
<span className="heyo-status-text">Away</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(245, 158, 11)'}}></span>
<span className="heyo-status-text">Away</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(245, 158, 11)'}}></span>
<span className="heyo-status-text">Away</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{position: 'fixed', top: '0px', left: '0px', width: '100dvw', height: '100dvh', borderRadius: '0px', boxShadow: 'none', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{position: 'fixed', top: '0px', left: '0px', width: '100dvw', height: '100dvh', borderRadius: '0px', boxShadow: 'none', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{position: 'fixed', top: '0px', left: '0px', width: '100dvw', height: '100dvh', borderRadius: '0px', boxShadow: 'none', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{position: 'fixed', top: '0px', left: '0px', width: '100dvw', height: '100dvh', borderRadius: '0px', boxShadow: 'none', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{position: 'fixed', top: '0px', left: '0px', width: '100dvw', height: '100dvh', borderRadius: '0px', boxShadow: 'none', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container">
<iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{position: 'fixed', top: '0px', left: '0px', width: '100dvw', height: '100dvh', borderRadius: '0px', boxShadow: 'none', display: 'none'}}></iframe>
<div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0">
<img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/>
<div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}>
<div className="heyo-name-row">
<span className="heyo-name">Hugues</span>
<span className="heyo-role">- Founder</span>
</div>
<div className="heyo-status-row">
<span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span>
<span className="heyo-status-text">Offline</span>
</div>
</div>
<button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>
          Chat now
        </button>
<span className="heyo-unread-badge" style={{display: 'none'}}></span>
</div>
</div>
<div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" data-fallback="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%239ca3af' d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11'/%3E%3C/svg%3E"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div><div className="right" id="livechat-widget-container"><iframe loading="eager" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://heyo.so/embed/chat/69b418d618885bb49a415605?host=&amp;lang=fr-FR" style={{width: '360px', height: '640px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px', display: 'none'}}></iframe><div aria-label="Open chat" className="heyo-card" style={{backgroundColor: 'rgb(0, 0, 0)', display: 'flex'}} tabindex="0"><img alt="" className="heyo-avatar" src="https://cdn.heyo.so/users/69b418d618885bb49a4155f5/avatar"/><div style={{display: 'flex', flexDirection: 'column', minWidth: '0px'}}><div className="heyo-name-row"><span className="heyo-name">Hugues</span><span className="heyo-role"> - Founder</span></div><div className="heyo-status-row"><span className="heyo-status-dot" style={{backgroundColor: 'rgb(156, 163, 175)'}}></span><span className="heyo-status-text">Offline</span></div></div><button className="heyo-chat-now" style={{color: 'rgb(0, 0, 0)'}}>Chat now</button><span className="heyo-unread-badge" style={{display: 'none'}}></span></div></div>
    </>
  );
}
