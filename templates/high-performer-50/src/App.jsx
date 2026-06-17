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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    document.addEventListener('DOMContentLoaded', () => {
      const diagramGroups = {
        core: document.getElementById('diagram-core'),
        process: document.getElementById('diagram-process'),
        mindset: document.getElementById('diagram-mindset'),
        dynamics: document.getElementById('diagram-dynamics'),
        intersections: document.getElementById('diagram-intersections'),
        orbit: document.getElementById('diagram-orbit')
      };
      
      const captionEl = document.querySelector('#diagram-caption span');
      const captions = {
        core: 'The Singularity',
        engines: 'Three Core Engines',
        intersections: 'Friction Zones Detected',
        orbit: 'Outer Boundary Layer'
      };

      const resetDiagram = () => {
        Object.values(diagramGroups).forEach(g => { 
          if(g) {
            g.classList.remove('active'); 
            g.style.opacity = '';
          }
        });
      };

      const activateState = (trigger) => {
        resetDiagram();
        if (trigger === 'core') {
          diagramGroups.core.classList.add('active');
          diagramGroups.orbit.style.opacity = '0.1';
        } else if (trigger === 'engines') {
          diagramGroups.process.classList.add('active');
          diagramGroups.mindset.classList.add('active');
          diagramGroups.dynamics.classList.add('active');
          diagramGroups.core.style.opacity = '0.3';
        } else if (trigger === 'intersections') {
          diagramGroups.intersections.classList.add('active');
          diagramGroups.intersections.style.opacity = '1';
          diagramGroups.process.style.opacity = '0.1';
          diagramGroups.mindset.style.opacity = '0.1';
          diagramGroups.dynamics.style.opacity = '0.1';
        } else if (trigger === 'orbit') {
          diagramGroups.orbit.classList.add('active');
          diagramGroups.core.style.opacity = '0.1';
        }
        
        if(captionEl && captions[trigger]) {
          captionEl.textContent = captions[trigger];
        }
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const trigger = entry.target.getAttribute('data-trigger');
            activateState(trigger);
          }
        });
      }, {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1
      });

      document.querySelectorAll('.scroll-chapter').forEach(el => observer.observe(el));
      
      // Initialize first state
      setTimeout(() => activateState('core'), 500);
    });
  


  document.addEventListener('DOMContentLoaded', () => {
    // Flashlight Card Logic
    document.querySelectorAll('.flashlight-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    });

    // Scrollytelling Logic
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Activate when card is in middle 10% of screen
      threshold: 0
    };

    const diagramGroups = {
      process: document.getElementById('group-process'),
      mindset: document.getElementById('group-mindset'),
      dynamics: document.getElementById('group-dynamics'),
      core: document.getElementById('group-core')
    };
    
    const coreDot = document.getElementById('core-dot');
    const glow = document.getElementById('diagram-glow');

    // Helper to reset diagram
    function resetDiagram() {
      Object.values(diagramGroups).forEach(group => {
        if(!group) return;
        const circle = group.querySelector('.diagram-circle');
        const text = group.querySelector('.diagram-text');
        
        group.classList.remove('diagram-active');
        if(circle) circle.classList.remove('diagram-active');
        if(text) text.classList.remove('text-active');
      });
      if(coreDot) coreDot.classList.remove('text-blue-500', 'drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]');
      if(glow) glow.style.opacity = '0';
    }

    // Helper to activate section
    function activateSection(target) {
      resetDiagram();
      const group = diagramGroups[target];
      
      if (target === 'core') {
        if(coreDot) {
          coreDot.classList.add('text-blue-500', 'drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]');
        }
        // Activate all rings dimly or specifically the core
        Object.values(diagramGroups).forEach(g => {
           if(g === diagramGroups.core) return;
           const c = g.querySelector('.diagram-circle');
           if(c) {
             c.style.stroke = '#3b82f6';
             c.style.opacity = '0.3';
           }
        });
        if(glow) glow.style.opacity = '1';
        return;
      } 
      
      // Reset explicit styles from core state
      Object.values(diagramGroups).forEach(g => {
         const c = g.querySelector('.diagram-circle');
         if(c) {
           c.style.stroke = '';
           c.style.opacity = '';
         }
      });

      if (group) {
        group.classList.add('diagram-active');
        const circle = group.querySelector('.diagram-circle');
        const text = group.querySelector('.diagram-text');
        
        if(circle) circle.classList.add('diagram-active');
        if(text) text.classList.add('text-active');
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target.getAttribute('data-target');
          activateSection(target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-step').forEach(step => {
      observer.observe(step);
    });
  });



          (function() {
            // Intersection Observer with a tight margin to detect middle of viewport
            const options = {
              root: null,
              rootMargin: '-45% 0px -45% 0px',
              threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const index = entry.target.getAttribute('data-index');
                  updateActiveState(index);
                }
              });
            }, options);

            // Observe all testimonial items
            const items = document.querySelectorAll('.testimonial-item');
            items.forEach(item => observer.observe(item));

            // Click to scroll functionality for avatars
            const avatars = document.querySelectorAll('.avatar-indicator');
            avatars.forEach(avatar => {
              avatar.addEventListener('click', () => {
                const targetIndex = avatar.getAttribute('data-target');
                const targetItem = document.querySelector(`.testimonial-item[data-index="${targetIndex}"]`);
                if (targetItem) {
                  targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  updateActiveState(targetIndex);
                }
              });
            });

            function updateActiveState(index) {
              // Toggle active class on text items
              items.forEach(item => {
                if (item.getAttribute('data-index') === index) {
                  item.classList.add('active');
                } else {
                  item.classList.remove('active');
                }
              });

              // Toggle active class on avatars
              avatars.forEach(avatar => {
                if (avatar.getAttribute('data-target') === index) {
                  avatar.classList.add('active');
                } else {
                  avatar.classList.remove('active');
                }
              });
            }

            // Initialize first item as active
            setTimeout(() => updateActiveState('0'), 100);
          })();
        


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        document.querySelectorAll('.aura-reveal').forEach((el) => {
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter(c => c.classList.contains('aura-reveal'));
            const index = siblings.indexOf(el);
            if (index > 0) el.style.animationDelay = `${index * 100}ms`;
          }
          observer.observe(el);
        });

        document.querySelectorAll('.flashlight-card').forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          });
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
      

<div className="aura-background-component fixed top-0 w-full -z-10 h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div></div>

<div className="fixed inset-0 bg-stripes pointer-events-none z-0"></div>


<nav className="fixed flex pr-4 pl-4 top-6 right-0 left-0 justify-center">
<div className="flex shadow-black/50 bg-[#000000] w-full max-w-4xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://cdn.midjourney.com/a3840b63-36c4-4a6b-80dd-5c41d0f4a259/0_0.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Benefits</a>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Plans</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
<a className="hover:bg-zinc-200 transition-colors text-sm font-semibold text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">
          Get Started
        </a>
</div>
</nav>
<main className="relative z-10">

<div className="container border-x flex flex-col text-center max-w-7xl border-white/10 mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 uppercase tracking-wider animate-pulse aura-reveal is-visible">
    For High-Performing Professionals
  </div>

<h1 className="md:text-7xl lg:text-8xl bg-clip-text leading-[1.1] aura-reveal is-visible text-4xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-zinc-500 max-w-5xl mr-auto mb-6 ml-auto" style={{animationDelay: '100ms'}}>
    You've mastered your career.
    <br/>
    Why is everything else still broken?
  </h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal aura-reveal is-visible" style={{animationDelay: '200ms'}}>
    One universal process for work, relationships, health, and wealth. Stop collecting systems. Install the operating
    system.
  </p>

<div className="flex flex-col sm:flex-row aura-reveal is-visible gap-x-4 gap-y-4 items-center" style={{animationDelay: '300ms'}}>
<a className="inline-flex items-center gap-2 hover:bg-zinc-200 transition-colors text-sm font-semibold text-black bg-white rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="#">
      Take the 5-Minute Diagnostic
      <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors" href="#">
      See How It Works
    </a>
</div>

<div className="aura-reveal is-visible text-xs font-medium text-zinc-500 tracking-wide mt-6" style={{animationDelay: '400ms'}}>
    29 years R&amp;D • 7M+ decisions analyzed
  </div>
</div><section className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none">
</div>

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12 relative z-10">
<div className="flex-1 aura-reveal">
<div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-orange-500/30 bg-orange-500/10 text-orange-200 text-xs font-medium tracking-wide uppercase">
      System Diagnostics
    </div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
      Why Ambitious <span className="text-zinc-500">People Fail</span>
</h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="leading-relaxed lg:text-left text-lg text-zinc-400 text-right">
  The 3 traps of partial systems. Identify the bottlenecks preventing your upgrade.
</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-white/[0.01] relative z-10 aura-reveal" style={{animationDelay: '200ms'}}>

<div className="group md:p-12 hover:bg-white/[0.02] transition-colors duration-300 pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex group-hover:text-orange-400 transition-colors text-orange-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 shadow-inner items-center justify-center">
<svg className="lucide lucide-telescope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.153a.934.934 0 0 1 .698-1.165l6.18-1.318a.934.934 0 0 1 1.108.702l.537 2.153a.934.934 0 0 1-.698 1.165z">
</path>
<path d="m13.482 9.064 5.917-1.263a.934.934 0 0 1 1.108.702l.537 2.153a.934.934 0 0 1-.698 1.165l-5.917 1.263">
</path>
<path d="M12 18h8"></path>
<path d="M16 18v3"></path>
<path d="M8 12 5 22"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">Unrealistic</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-12">Wanting what's not possible.</p>
<div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">Outcome</span>
<span className="text-xs font-mono text-orange-400 uppercase tracking-wider">Stagnant</span>
</div>
<span className="text-xs text-zinc-700 font-mono">01</span>
</div>
</div>

<div className="group md:p-12 hover:bg-white/[0.02] transition-colors duration-300 pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex group-hover:text-orange-400 transition-colors text-orange-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 shadow-inner items-center justify-center">
<svg className="lucide lucide-wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
<path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
<path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">Undeliberate</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-12">Thoughtless effort.</p>
<div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">Outcome</span>
<span className="text-xs font-mono text-orange-400 uppercase tracking-wider">Unmotivated</span>
</div>
<span className="text-xs text-zinc-700 font-mono">02</span>
</div>
</div>

<div className="group relative p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300">
<div className="flex group-hover:text-orange-400 transition-colors text-orange-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 shadow-inner items-center justify-center">
<svg className="lucide lucide-compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">Uninformed</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-12">Unaware of what is possible.</p>
<div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">Outcome</span>
<span className="text-xs font-mono text-orange-400 uppercase tracking-wider">Stuck</span>
</div>
<span className="text-xs text-zinc-700 font-mono">03</span>
</div>
</div>
</div>

<div className="z-10 border-x md:px-12 md:py-8 flex flex-col md:flex-row gap-6 aura-reveal bg-red-500/5 w-full border-white/10 border-b mt-0 pt-6 pr-6 pb-6 pl-6 relative gap-x-6 gap-y-6 items-center justify-between" style={{animationDelay: '100ms'}}>
<div className="flex items-center gap-6">
<div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500">
<svg className="lucide lucide-alert-octagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-red-500/60 font-mono uppercase tracking-widest mb-1">Intersection Detected</span>
<span className="text-xl md:text-2xl font-oswald text-red-500 uppercase tracking-tight">Total Frustration</span>
</div>
</div>
<div className="hidden md:flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-red-500 animate-pulse"></div>
<span className="text-xs font-mono text-red-500/50 uppercase tracking-widest">System Failure Mode</span>
</div>
</div>
</section>
<div className="container border-x max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="mb-12">
<h2 className="text-4xl font-bold text-white tracking-tight">System Definition</h2>
<p className="text-zinc-400 mt-2">Core terminology for the operating system.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-black/40 backdrop-blur-sm rounded-none overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10">
<div className="lg:col-span-7 flex flex-col flashlight-card aura-reveal" style={{'--mouse-x': '89px', '--mouse-y': '5.75px'}}>
<div className="p-8 md:p-12 border-b border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent relative group">
<div className="flex flex-col md:flex-row items-center gap-12 h-full">
<div className="relative w-full max-w-xs shrink-0">
<div className="z-20 group-hover:-translate-y-2 transition-transform duration-500 ease-out bg-zinc-900/60 border-white/10 border rounded-2xl p-5 relative shadow-2xl backdrop-blur-xl">
<div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-xl mb-4 shadow-lg shadow-blue-900/20">
<svg className="lucide lucide-trending-up w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div className="text-sm font-medium text-white mb-0.5">
                Up-grade (noun)
              </div>
<div className="text-xs text-zinc-500 mb-6 font-mono">
                /ˈəpˌɡrād/
              </div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
<div className="text-xs text-zinc-400">System Status: Active</div>
</div>
</div>
<div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full z-10 opacity-30"></div>
</div>
<div className="text-left">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
              The Improvement Logic
            </h3>
<p className="text-base text-zinc-400 leading-relaxed mb-6">
              An upgrade is simply an improvement where the <span className="text-white font-medium">benefit of change</span> outweighs the cost. It applies to where you are, what you have, or what you do.
            </p>
<div className="inline-flex items-center text-sm font-medium text-blue-400">
              Fundamental Principle
            </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 flex-grow">
<div className="p-8 md:p-10 bg-gradient-to-br from-transparent to-white/[0.02] relative overflow-hidden group">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 relative z-10">
            Universal Scope
          </h3>
<p className="text-sm text-zinc-400 relative z-10">
            From travel plans to career paths.
          </p>
</div>
<div className="p-8 md:p-10 flex flex-col justify-center bg-black/50">
<div className="text-4xl md:text-5xl font-mono font-semibold tracking-tighter text-white mb-1">
            B &gt; C
          </div>
<div className="text-sm text-zinc-400">Benefit &gt; Cost Logic</div>
</div>
</div>
</div>
<div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-zinc-900/20 flashlight-card aura-reveal" style={{animationDelay: '100ms', '--mouse-x': '109.171875px', '--mouse-y': '199.25px'}}>
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
          Improve Any Option
        </h3>
<p className="text-base text-zinc-400 leading-relaxed mb-10">
          It’s an improvement to an option you have. Whether it's a plan for a trip, a relationship dynamic, or your daily business routine.
        </p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4 group">
<div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
<svg className="lucide lucide-briefcase w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<div>
<span className="block text-white font-medium text-sm">Career &amp; Business</span>
<span className="text-sm text-zinc-500">Professional trajectory optimization.</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
<svg className="lucide lucide-users w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div>
<span className="block text-white font-medium text-sm">Relationships</span>
<span className="text-sm text-zinc-500">Improving human connection dynamics.</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
<svg className="lucide lucide-clock w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<span className="block text-white font-medium text-sm">Routine &amp; Environment</span>
<span className="text-sm text-zinc-500">Day-to-day systems architecture.</span>
</div>
</li>
</ul>
</div>
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] w-fit flex items-center gap-2">
        Define Your Upgrade
        <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div><section className="relative border-b border-white/10">
<div className="container mx-auto max-w-7xl border-x border-white/10">
<div className="flex flex-col lg:flex-row">

<div className="w-full relative z-20 bg-[#020202] text-white border-b border-white/10 font-sans">
<style>
    .diagram-group { transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0.2; transform-origin: center; }
    .diagram-group.active { opacity: 1; filter: drop-shadow(0 0 15px rgba(59,130,246,0.3)); }
    .diagram-group.active path, .diagram-group.active circle { stroke: #3b82f6; stroke-width: 2px; }
    .diagram-group.active text { fill: #fff; font-weight: 600; }
    
    .diagram-label { transition: all 0.4s ease; opacity: 0.5; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; fill: #71717a; }
    
    /* Glow effect for core */
    .core-pulse { animation: corePulse 3s infinite; }
    @keyframes corePulse {
      0%, 100% { fill-opacity: 0.2; stroke-opacity: 0.5; }
      50% { fill-opacity: 0.5; stroke-opacity: 1; }
    }
  </style>
<div className="flex flex-col lg:flex-row min-h-screen">

<div className="hidden lg:flex lg:w-1/2 lg:sticky lg:top-0 lg:h-screen items-center justify-center border-r border-white/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 to-[#020202] overflow-hidden relative">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
<div className="relative w-[500px] h-[500px] z-10">
<svg className="w-full h-full" fill="none" id="master-diagram" viewbox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">

<defs>
<radialgradient cx="0" cy="0" gradienttransform="translate(300 300) rotate(90) scale(300)" gradientunits="userSpaceOnUse" id="active-grad" r="1">
<stop stop-color="#3b82f6" stop-opacity="0.1"></stop>
<stop offset="1" stop-color="#3b82f6" stop-opacity="0"></stop>
</radialgradient>
</defs>

<g className="diagram-group" id="diagram-orbit" style={{opacity: '0.1'}}>
<circle className="opacity-50" cx="300" cy="320" r="260" stroke="#27272a" stroke-dasharray="4 4" strokeWidth="1"></circle>
<circle className="opacity-30" cx="300" cy="320" r="220" stroke="#27272a" strokeWidth="1"></circle>
<path d="M300 60 L300 90" stroke="#3b82f6" strokeWidth="1"></path>
<path d="M560 320 L530 320" stroke="#3b82f6" strokeWidth="1"></path>
<path d="M40 320 L70 320" stroke="#3b82f6" strokeWidth="1"></path>
</g>

<g className="diagram-group" id="diagram-process" style={{}}>
<circle className="" cx="300" cy="220" fill="black" fillOpacity="0.2" r="110" stroke="#3f3f46" strokeWidth="1.5"></circle>
<text className="diagram-label" text-anchor="middle" x="300" y="160">Process</text>
<path className="text-zinc-800" d="M300 130 L300 150" stroke="currentColor" strokeWidth="1"></path>
</g>

<g className="diagram-group" id="diagram-mindset" style={{}}>
<circle cx="205" cy="385" fill="black" fillOpacity="0.2" r="110" stroke="#3f3f46" strokeWidth="1.5"></circle>
<text className="diagram-label" text-anchor="middle" x="160" y="450">Mindset</text>
</g>

<g className="diagram-group" id="diagram-dynamics" style={{}}>
<circle cx="395" cy="385" fill="black" fillOpacity="0.2" r="110" stroke="#3f3f46" strokeWidth="1.5"></circle>
<text className="diagram-label" text-anchor="middle" x="440" y="450">Dynamics</text>
</g>

<g className="diagram-group opacity-0" id="diagram-intersections" style={{}}>

<path d="M260 300 Q280 320 260 360" fill="none" stroke="#3f3f46" strokeWidth="1"></path>

<path d="M340 300 Q320 320 340 360" fill="none" stroke="#3f3f46" strokeWidth="1"></path>

<path d="M300 380 L300 420" fill="none" stroke="#3f3f46" strokeWidth="1"></path>
<text className="text-[8px] fill-zinc-600 uppercase tracking-widest" text-anchor="end" x="230" y="300">Deliberate</text>
<text className="text-[8px] fill-zinc-600 uppercase tracking-widest" text-anchor="start" x="370" y="300">Informed</text>
<text className="text-[8px] fill-zinc-600 uppercase tracking-widest" text-anchor="middle" x="300" y="480">Realistic</text>
</g>

<g className="diagram-group" id="diagram-core" style={{}}>
<path className="core-pulse" d="M300 290 L260 360 L340 360 Z" fill="#3b82f6" stroke="#3b82f6" strokeWidth="0"></path>
<circle cx="300" cy="330" fill="white" r="4"></circle>
<circle className="opacity-50 animate-spin-slow" cx="300" cy="330" r="40" stroke="#3b82f6" stroke-dasharray="2 2" strokeWidth="1"></circle>
</g>
</svg>

<div className="absolute bottom-12 left-0 w-full text-center transition-opacity duration-500" id="diagram-caption">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse">The Singularity</span>
            System Idle
          </div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 bg-[#020202] relative z-20">

<div className="min-h-screen flex flex-col justify-center p-8 md:p-16 border-b border-white/5 scroll-chapter" data-trigger="core">
<div className="mb-8 text-blue-500">

<svg className="lg:hidden w-16 h-16 mb-6" viewbox="0 0 100 100">
<path d="M50 20 L20 80 L80 80 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor"></path>
<circle cx="50" cy="55" fill="white" r="5"></circle>
</svg>
<div className="font-mono text-xs text-blue-400 mb-2 uppercase tracking-widest">01. Origin Point</div>
<h2 className="text-4xl md:text-5xl font-oswald text-white uppercase tracking-tight mb-6">Upgrade Intelligence</h2>
</div>
<p className="text-xl text-zinc-400 leading-relaxed font-light mb-8 max-w-md">
          The singularity where mindset, process, and dynamics converge. It is not just about working harder; it is the ability to instinctively recognize optimization opportunities in any chaotic environment.
        </p>
<div className="grid grid-cols-2 gap-4 max-w-md">
<div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg">
<div className="text-2xl font-light text-white mb-1">10x</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Output Velocity</div>
</div>
<div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg">
<div className="text-2xl font-light text-white mb-1">0%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Signal Loss</div>
</div>
</div>
</div>

<div className="min-h-screen flex flex-col justify-center p-8 md:p-16 border-b border-white/5 scroll-chapter" data-trigger="engines">
<div className="font-mono text-xs text-zinc-500 mb-8 uppercase tracking-widest">02. System Components</div>
<h2 className="text-3xl md:text-4xl font-oswald text-white uppercase tracking-tight mb-12">The Triad Engines</h2>

<div className="space-y-6 max-w-lg">

<div className="group p-6 bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/10 hover:border-blue-500/30 transition-all duration-300 rounded-xl backdrop-blur-sm">
<div className="flex items-start gap-4">
<div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2">The Process</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                  A universal 5-step algorithm for executing change. Baseline → Desires → Options → Decisions → Implementation.
                </p>
</div>
</div>
</div>

<div className="group p-6 bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/10 hover:border-purple-500/30 transition-all duration-300 rounded-xl backdrop-blur-sm">
<div className="flex items-start gap-4">
<div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a8 8 0 0 1 8 8"></path><path d="M12 2a8 8 0 0 0-8 8"></path><path d="M2 10a10 10 0 1 0 20 0"></path></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">The Mindset</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                  To the uninitiated, chaos is stress. To the Upgrader, chaos is just uninterpreted data waiting to be structured.
                </p>
</div>
</div>
</div>

<div className="group p-6 bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 rounded-xl backdrop-blur-sm">
<div className="flex items-start gap-4">
<div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:text-emerald-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h10"></path><path d="M9 4v16"></path><path d="m3 9 3 3-3 3"></path><path d="M12 6A7 7 0 0 1 22 19"></path></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">The Dynamics</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                  The invisible forces of friction and momentum. Stop fighting gravity; build a plane.
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="min-h-screen flex flex-col justify-center p-8 md:p-16 border-b border-white/5 scroll-chapter" data-trigger="intersections">
<div className="font-mono text-xs text-zinc-500 mb-8 uppercase tracking-widest">03. Friction Points</div>
<h2 className="text-3xl md:text-4xl font-oswald text-white uppercase tracking-tight mb-12">The Tensions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 border border-white/10 bg-zinc-900/20 rounded-lg">
<div className="flex items-center gap-3 mb-4 text-orange-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="text-xs uppercase tracking-wider font-semibold">Trap 01</span>
</div>
<h4 className="text-white font-medium mb-2">Fantasy vs. Reality</h4>
<p className="text-sm text-zinc-500">Without Process, Mindset is just dreaming.</p>
</div>
<div className="p-6 border border-white/10 bg-zinc-900/20 rounded-lg">
<div className="flex items-center gap-3 mb-4 text-red-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
<span className="text-xs uppercase tracking-wider font-semibold">Trap 02</span>
</div>
<h4 className="text-white font-medium mb-2">Careless Action</h4>
<p className="text-sm text-zinc-500">Without Mindset, Process becomes robotic.</p>
</div>
<div className="md:col-span-2 p-6 border border-white/10 bg-zinc-900/20 rounded-lg">
<div className="flex items-center gap-3 mb-4 text-zinc-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
<span className="text-xs uppercase tracking-wider font-semibold">The Goal</span>
</div>
<h4 className="text-white font-medium mb-2">Deliberate Speed</h4>
<p className="text-sm text-zinc-500">Where all three engines fire in sync.</p>
</div>
</div>
</div>

<div className="min-h-[50vh] flex flex-col justify-center p-8 md:p-16 scroll-chapter" data-trigger="orbit">
<div className="font-mono text-xs text-zinc-500 mb-8 uppercase tracking-widest">04. Boundary Layer</div>
<h2 className="text-3xl md:text-4xl font-oswald text-white uppercase tracking-tight mb-8">System Properties</h2>
<ul className="space-y-4 border-l border-white/10 pl-8">
<li className="group cursor-pointer">
<span className="block text-white text-lg font-medium group-hover:text-blue-400 transition-colors">Measurement</span>
<span className="text-sm text-zinc-500">Quantifying the gap between baseline and desire.</span>
</li>
<li className="group cursor-pointer">
<span className="block text-white text-lg font-medium group-hover:text-blue-400 transition-colors">Adaptability</span>
<span className="text-sm text-zinc-500">Self-correction during the implementation phase.</span>
</li>
<li className="group cursor-pointer">
<span className="block text-white text-lg font-medium group-hover:text-blue-400 transition-colors">Scale</span>
<span className="text-sm text-zinc-500">Applying the formula to larger datasets.</span>
</li>
</ul>
</div>
</div>
</div>

</div>

<div className="lg:w-1/2 bg-[#020202] relative z-10">

<div className="hidden lg:block h-[10vh]"></div>

<div className="min-h-[70vh] lg:min-h-screen flex items-center justify-center p-6 lg:p-12 scroll-step" data-target="core">
<div className="w-full max-w-md flashlight-card bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/5 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">The Upgrade Intelligence</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
              The singularity where mindset, process, and dynamics converge. It is the ability to instinctively recognize optimization opportunities in any chaotic environment.
            </p>
</div>
</div>

<div className="min-h-[70vh] lg:min-h-screen flex items-center justify-center p-6 lg:p-12 scroll-step" data-target="process">
<div className="w-full max-w-md flashlight-card bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/5 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">The Upgrade Process™</h3>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">
              A universal 5-step algorithm for executing change. It strips away emotional hesitation and focuses purely on the mechanics of execution.
            </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-500">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Baseline → Desires
              </li>
<li className="flex items-center gap-3 text-sm text-zinc-500">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Options → Decisions
              </li>
<li className="flex items-center gap-3 text-sm text-zinc-500">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Implementation
              </li>
</ul>
</div>
</div>

<div className="min-h-[70vh] lg:min-h-screen flex items-center justify-center p-6 lg:p-12 scroll-step" data-target="mindset">
<div className="w-full max-w-md flashlight-card bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/5 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a8 8 0 0 1 8 8"></path><path d="M12 2a8 8 0 0 0-8 8"></path><path d="M2 10a10 10 0 1 0 20 0"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">The Upgrade Mindset™</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
              Recognizing improvement as life's fundamental operating system. To the uninitiated, chaos is stress. To the Upgrader, chaos is just uninterpreted data waiting to be structured.
            </p>
</div>
</div>

<div className="min-h-[70vh] lg:min-h-screen flex items-center justify-center p-6 lg:p-12 scroll-step" data-target="dynamics">
<div className="w-full max-w-md flashlight-card bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/5 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">The Upgrade Dynamics™</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
              The physics of growth. Understanding the invisible forces of friction and momentum that act upon your decisions. Stop fighting gravity; build a plane.
            </p>
</div>
</div>

<div className="hidden lg:block h-[10vh]"></div>
</div>
</div>
</div>
</section>

<section className="container border-x max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
<div className="flex-1 aura-reveal">
<div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-purple-500/30 bg-purple-500/10 text-purple-200 text-xs font-medium tracking-wide uppercase">
              Intelligent Protection
            </div>
<h2 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] text-6xl text-white tracking-tight font-oswald">
              Speed Without
              
              Compromise
            </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
              Your connection, supercharged by our global node network.
            </p>
<div className="flex w-full justify-end">
<span className="text-sm text-zinc-500 font-mono">001 — 003</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-[#0A0A0A] border border-white/10 mb-10 overflow-hidden group shadow-2xl shadow-purple-900/20 aura-reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-800/20 blur-[120px] rounded-full pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10"></div>

<div className="absolute inset-10 md:inset-16 flex border border-white/5 bg-[#050505] shadow-2xl z-20">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-black/20 backdrop-blur-md">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<div className="w-8 h-8 bg-purple-600/20 flex items-center justify-center border-l-2 border-purple-500">
<svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div className="w-8 h-8 flex items-center justify-center opacity-50">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="flex-1 p-8 relative overflow-hidden">

<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<span className="text-sm font-mono text-zinc-300 tracking-wider">
                    OPTIMIZATION_ACTIVE
                  </span>
</div>
<div className="flex gap-3">
<div className="px-3 py-1 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer">
                    Protocol: Wireguard
                  </div>
<div className="px-3 py-1 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer">
                    IP: 192.168.X.X
                  </div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 aura-reveal">

<div className="border border-white/10 bg-white/[0.02] p-4 group/card hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-purple-500/10 border border-purple-500/20">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
<path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 font-mono">
                      Reduced from 45ms
                    </span>
</div>
<div className="text-lg text-white font-medium">12ms</div>
<div className="text-xs text-zinc-500 mt-1">
                    Military grade standard
                  </div>
</div>

<div className="border border-white/10 bg-white/[0.02] p-4 group/card hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-blue-500/10 border border-blue-500/20">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
<path d="M8.5 8.5v.01"></path>
<path d="M16 15.5v.01"></path>
<path d="M12 12v.01"></path>
<path d="M11 17v.01"></path>
<path d="M7 14v.01"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 font-mono">
                      No Packet Loss
                    </span>
</div>
<div className="text-lg text-white font-medium">100%</div>
<div className="text-xs text-zinc-500 mt-1">Latency: 14ms</div>
</div>

<div className="col-span-2 mt-4">
<div className="text-xs text-zinc-500 font-mono mb-3 uppercase tracking-wider">
                    Recent Activity
                  </div>
<div className="space-y-1">
<div className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-green-500"></div>
<span className="text-sm text-zinc-300">
                          Route Re-optimized
                        </span>
</div>
<span className="text-xs text-zinc-600 font-mono">
                        00:00:05
                      </span>
</div>
<div className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-blue-500"></div>
<span className="text-sm text-zinc-400">
                          Jitter Spike Mitigated
                        </span>
</div>
<span className="text-xs text-zinc-600 font-mono">
                        00:01:12
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-transparent to-transparent z-30 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent z-30 pointer-events-none"></div>

<div className="absolute right-[5%] top-[20%] w-24 h-24 border border-white/5 bg-white/[0.02] backdrop-blur-sm z-10 rotate-45 opacity-20"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/10">
<div className="group pt-6 pr-4 cursor-pointer">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Smart Pathing
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              We find the fastest physical path to the game server.
            </p>
</div>
<div className="relative pt-6 pr-4 px-0 md:px-4 cursor-pointer">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.7)]"></div>
<h3 className="text-sm font-semibold text-white mb-2">FPS Boost</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
              Free up system resources and optimize network drivers.
            </p>
</div>
<div className="group pt-6 pr-4 px-0 md:px-4 cursor-pointer">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Packet Loss Fix
            </h3>
<p className="leading-relaxed group-hover:text-zinc-400 transition-colors text-xs text-zinc-500">
              Redundant data transmission ensures 0% packet loss.
            </p>
</div>
<div className="group pt-6 px-0 md:px-4 cursor-pointer">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Game Support
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Custom profiles for over 1000+ competitive titles.
            </p>
</div>
</div>
</section>

<section className="container border-x max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<style>
          .testimonial-item {
            transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
            opacity: 0.15;
            filter: blur(4px);
            transform: scale(0.96) translateX(-10px);
          }
          .testimonial-item.active {
            opacity: 1;
            filter: blur(0);
            transform: scale(1) translateX(0);
          }
          .avatar-indicator {
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            opacity: 0.3;
            filter: grayscale(100%);
            transform: scale(1);
            border-color: rgba(255, 255, 255, 0.05);
            box-shadow: none;
          }
          .avatar-indicator.active {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1.4);
            border-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 40px -5px rgba(168, 85, 247, 0.4);
            z-index: 20;
          }
          .avatar-indicator::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
          }
        </style>

<div className="flex flex-col lg:flex-row lg:items-end z-10 mb-24 relative gap-x-12 gap-y-12 justify-between">
<div className="flex-1">
<h2 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] text-6xl text-white tracking-tight font-oswald" style={{}}>What They Said</h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12">
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
              Voices of our satisfied clients from around the globe.
            </p>
<div className="w-full flex justify-end">
<span className="text-sm text-zinc-500 font-mono">
                SCROLL TO READ
              </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative min-h-[800px]">

<div className="lg:col-span-9 flex flex-col gap-40 lg:pb-40 pt-12 pb-12 gap-x-40 gap-y-40">

<div className="testimonial-item group relative aura-reveal" data-index="0">
<div className="md:pl-12 relative">

<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z">
</path>
</svg>
</div>
<blockquote className="md:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight mb-8">Mr. Upgrade's booking strategies are invariably creative and often ingenious.</blockquote>
<div className="flex items-center gap-4">

<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Prof. Thomas Y. Levin
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Princeton University
                    </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="1">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z">
</path>
</svg>
</div>
<blockquote className="md:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight mb-8">
        Bennett has built a subscription engine that’s priceless
      </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Seth Godin
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Author, 22 Bestsellers in 39 Languages
                    </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="2">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z">
</path>
</svg>
</div>
<blockquote className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tight mb-8">
        Matthew is outstanding at what he does.
      </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Ari Fleischer
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Former White House Press Secretary
                    </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="3">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z">
</path>
</svg>
</div>
<blockquote className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tight mb-8">
        I can't say enough about Matthew
      </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Paul Haggis
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Two-Time Academy Award Winn
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-3 sticky flex-col gap-8 h-fit pr-4 top-[40vh] gap-x-8 gap-y-8 items-end">
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="0">
<img className="w-full h-full object-cover transition-all" src="https://cdn.prod.website-files.com/6751fd80391c160684560de2/68b20d21d590d2fcbeda39a3_Levin_Thomas%2012.png"/>
</div>
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="1">
<img className="w-full h-full object-cover transition-all" src="https://cdn.prod.website-files.com/6751fd80391c160684560de2/68b20d75df272d625f498201_image%2032021.png"/>
</div>
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="2">
<img className="w-full h-full object-cover transition-all" src="https://cdn.prod.website-files.com/6751fd80391c160684560de2/68b20dad8138e0ed47c0c824_image22.png"/>
</div>
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="3">
<img className="w-full h-full object-cover transition-all" src="https://cdn.prod.website-files.com/6751fd80391c160684560de2/68b20de860ede0eccc5c2bb0_image2.png"/>
</div>
</div>
</div>

</section>

<section className="w-full bg-black text-white relative border-b border-white/10">

<div className="container border-x max-w-7xl border-white/10 mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col lg:flex-row lg:items-end justify-between py-24 gap-12">

<div className="flex-1 aura-reveal">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9]">
                Simple Pricing Plans
              </h1>
</div>

<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
                No hourly rates. No surprise charges. No scope creep penalties.
                Just transparent pricing for transformational work.
              </p>
<div className="w-full flex justify-end">
<span className="text-sm text-zinc-500 font-mono">003 — 003</span>
</div>
</div>
</div>
</div>

<div className="container max-w-7xl mx-auto border-x border-t border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

<div className="flex flex-col p-8 md:p-12 h-full flashlight-card aura-reveal">
<div className="mb-16">
<h2 className="text-3xl font-normal mb-6">Monthly Pass</h2>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                  Full access to our global node network for a month. Perfect
                  for testing the waters.
                </p>
</div>
<div className="border-t border-white/10 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<span className="block text-zinc-500 text-sm mb-6">
                      Include
                    </span>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Website strategy and UX design
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Custom web design
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Responsive development
                      </li>
</ul>
<div className="mt-24">
<div className="text-4xl lg:text-5xl font-normal tracking-tight">
                        $9.99
                      </div>
</div>
</div>

<div className="flex flex-col h-full">
<div className="mb-10">
<span className="block text-zinc-500 text-sm mb-2">
                        Timeline
                      </span>
<div className="text-white">12-18 weeks</div>
</div>
<div className="mb-12">
<span className="block text-zinc-500 text-sm mb-2">Team</span>
<div className="text-white leading-relaxed text-sm">
                        Strategist, 2 Designers, 2 Developers, Project Manager
                      </div>
</div>
<div className="mt-auto pt-6">
<button className="w-full py-4 px-6 bg-zinc-900 border border-white/10 text-white text-sm hover:bg-zinc-800 transition-colors">
                        Start Your Project
                      </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 md:p-12 h-full">
<div className="mb-16">
<h2 className="text-3xl font-normal mb-6">Annual Pro</h2>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                  Maximum savings for the dedicated gamer. Includes priority
                  routing and beta features.
                </p>
</div>
<div className="border-t border-white/10 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<span className="block text-zinc-500 text-sm mb-6">
                      Include
                    </span>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Priority Node Access
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Early Access Features
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Multi-Device Support
                      </li>
</ul>
<div className="mt-24">
<div className="text-4xl lg:text-5xl font-normal tracking-tight">
                        $89.99
                      </div>
</div>
</div>

<div className="flex flex-col h-full">
<div className="mb-10">
<span className="block text-zinc-500 text-sm mb-2">
                        Timeline
                      </span>
<div className="text-white">16-24 weeks</div>
</div>
<div className="mb-12">
<span className="block text-zinc-500 text-sm mb-2">Team</span>
<div className="text-white leading-relaxed text-sm">
                        Product Strategist, UX Researcher, 2 Designers, 2-3
                        Developers
                      </div>
</div>
<div className="mt-auto pt-6">
<button className="w-full py-4 px-6 bg-zinc-900 border border-white/10 text-white text-sm hover:bg-zinc-800 transition-colors">
                        Start Your Project
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-black text-white border-t border-white/10 font-sans relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto border-x border-white/10 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
</svg>
<span className="text-sm font-medium text-white">YouTube</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
<span className="text-sm font-medium text-white">Twitter</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span className="text-sm font-medium text-white">Instagram</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
<span className="text-sm font-medium text-white">Facebook</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 min-h-[300px]">

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Product
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Technology
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Integrations
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Releases
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Resources
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Docs
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Tutorials
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Company
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Team
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Culture
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Jobs
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Legal
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Imprint
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Data Policy
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Cookie Policy
                </a>
</li>
</ul>
</div>
</div>

<div className="px-8 md:px-12 pb-24 pt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">

<span className="text-3xl font-semibold tracking-tighter text-white">
                FINEX.
              </span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs font-medium">
              Optimizing the internet for the next generation of competitive
              gaming.
            </p>
</div>
<div className="w-full lg:w-auto flex flex-col md:flex-row gap-0">
<div className="relative w-full md:w-80 group">
<input className="bg-white text-black text-xs font-mono font-medium placeholder:text-black/50 px-5 py-4 w-full h-full outline-none uppercase transition-colors rounded-none" placeholder="GAMER@EMAIL.COM" type="email"/>
</div>
<button className="bg-zinc-900 text-white text-[11px] tracking-wide font-semibold px-8 py-4 border border-zinc-800 hover:bg-zinc-800 transition-colors uppercase whitespace-nowrap">
              Subscribe
            </button>
</div>
</div>
</div>
</footer>



    </>
  );
}
