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



            !(function () {
              if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: !1 };
                var i = document.createElement("script");
                i.src =
                  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
                i.onload = function () {
                  window.UnicornStudio.isInitialized ||
                    (window.UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
                };
                (document.head || document.body).appendChild(i);
              }
            })();
          


    (function() {
      const el = document.getElementById('terminal-aura-emjs78kc81f067uvn');
      if (!el) return;
      
      const lines = [
        { 
          prompt: '~', 
          promptClass: 'text-[#c6f91f]', 
          content: 'init_sequence.sh', 
          contentClass: 'text-white/70' 
        },
        { 
          prompt: '>', 
          promptClass: 'text-slate-600', 
          content: 'Loading modules...', 
          contentClass: 'text-slate-600' 
        },
        { 
          prompt: '>', 
          promptClass: 'text-slate-600', 
          content: 'Connected (24ms)', 
          contentClass: 'text-slate-600',
          completedHtml: '<span class="text-slate-600 mr-2">&gt;</span><span class="text-[#c6f91f]">Connected</span> <span class="text-slate-500">(24ms)</span>'
        }
      ];

      async function runTerminal() {
        while (true) {
          el.innerHTML = '';
          
          for (const line of lines) {
            const row = document.createElement('div');
            row.className = 'flex items-center';
            el.appendChild(row);

            const prompt = document.createElement('span');
            prompt.className = `${line.promptClass} mr-2`;
            prompt.textContent = line.prompt;
            row.appendChild(prompt);

            const content = document.createElement('span');
            content.className = line.contentClass;
            row.appendChild(content);

            const cursor = document.createElement('span');
            cursor.className = 'w-1.5 h-3 bg-[#c6f91f] ml-1 block animate-pulse';
            row.appendChild(cursor);

            const text = line.content;
            for (let i = 0; i < text.length; i++) {
              content.textContent += text[i];
              await new Promise(r => setTimeout(r, 30 + Math.random() * 40));
            }

            cursor.remove();
            
            if (line.completedHtml) {
              row.innerHTML = line.completedHtml;
            }
            
            await new Promise(r => setTimeout(r, 400));
          }

          const lastRow = el.lastElementChild;
          if (lastRow) {
            const endCursor = document.createElement('span');
            endCursor.className = 'inline-block w-1.5 h-3 bg-[#c6f91f] ml-1 align-middle animate-pulse';
            lastRow.appendChild(endCursor);
          }
          
          await new Promise(r => setTimeout(r, 2500));
        }
      }
      
      runTerminal();
    })();
  


    (function() {
      const container = document.currentScript.parentElement;
      if (!container) return;
      
      const source = container.querySelector('#node-source');
      const sourceGlow = container.querySelector('#source-glow');
      const sourceIcon = container.querySelector('#source-icon');
      const targets = container.querySelectorAll('.node-target');
      const paths = container.querySelectorAll('path');
      const packet = container.querySelector('#packet');
      const packetAnim = container.querySelector('#packet-anim');
      
      let currentIndex = 0;
      
      const animate = async () => {
        if (!container.isConnected) return;

        // 1. Activate Source
        source.classList.add('border-[#c6f91f]', 'shadow-[0_0_15px_rgba(198,249,31,0.15)]');
        sourceIcon.classList.replace('text-white/70', 'text-[#c6f91f]');
        sourceGlow.classList.remove('opacity-0');
        
        await new Promise(r => setTimeout(r, 600));
        
        // 2. Choose Target
        const targetIndex = currentIndex % targets.length;
        currentIndex++;
        
        const path = paths[targetIndex];
        const target = targets[targetIndex];
        
        // 3. Highlight Path
        paths.forEach(p => p.classList.add('opacity-20'));
        path.classList.remove('opacity-20');
        path.classList.replace('text-white/10', 'text-[#c6f91f]');
        path.classList.add('opacity-100', 'drop-shadow-[0_0_3px_rgba(198,249,31,0.5)]');

        // 4. Send Packet
        packet.style.opacity = '1';
        packetAnim.innerHTML = ''; 
        const mpath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
        mpath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", '#' + path.id);
        packetAnim.appendChild(mpath);
        packetAnim.beginElement();
        
        await new Promise(r => setTimeout(r, 600));

        // 5. Activate Target
        target.classList.add('border-[#c6f91f]', 'scale-110', 'bg-[#c6f91f]/10', 'shadow-[0_0_15px_rgba(198,249,31,0.2)]');
        target.querySelector('svg').classList.replace('text-slate-600', 'text-[#c6f91f]');
        packet.style.opacity = '0';

        await new Promise(r => setTimeout(r, 1200));

        // 6. Reset
        source.classList.remove('border-[#c6f91f]', 'shadow-[0_0_15px_rgba(198,249,31,0.15)]');
        sourceIcon.classList.replace('text-[#c6f91f]', 'text-white/70');
        sourceGlow.classList.add('opacity-0');
        
        path.classList.replace('text-[#c6f91f]', 'text-white/10');
        path.classList.remove('opacity-100', 'drop-shadow-[0_0_3px_rgba(198,249,31,0.5)]');
        paths.forEach(p => p.classList.remove('opacity-20'));
        
        target.classList.remove('border-[#c6f91f]', 'scale-110', 'bg-[#c6f91f]/10', 'shadow-[0_0_15px_rgba(198,249,31,0.2)]');
        target.querySelector('svg').classList.replace('text-[#c6f91f]', 'text-slate-600');
        
        await new Promise(r => setTimeout(r, 600));
        
        requestAnimationFrame(animate);
      };

      setTimeout(animate, 500);
    })();
  


    (function() {
      const initGridAnimation = () => {
        const container = document.getElementById('grid-aura-emjszhattn1hypgv');
        if (!container) return;
        
        // Select direct div children (cells)
        const cells = Array.from(container.children).filter(el => el.tagName === 'DIV' && !el.classList.contains('absolute'));
        if (cells.length === 0) return;

        let activeIndex = 0;
        // Styles for active state
        const activeClasses = ['bg-[#c6f91f]/20', 'z-10', 'shadow-[0_0_15px_rgba(198,249,31,0.15)]', 'shadow-[inset_0_0_0_1px_rgba(198,249,31,0.5)]'];
        const inactiveClasses = ['border-transparent'];
        
        const runSequence = async () => {
          if (!container.isConnected) return;
          
          const cell = cells[activeIndex];
          
          // FADE IN: Remove inactive base styles, add active highlight styles
          cell.classList.remove(...inactiveClasses);
          cell.classList.add(...activeClasses);
          
          // HOLD: Wait for fade in (700ms) + brief hold (300ms)
          await new Promise(r => setTimeout(r, 1000));
          
          // FADE OUT: Remove active styles, revert to inactive
          cell.classList.remove(...activeClasses);
          cell.classList.add(...inactiveClasses);
          
          // WAIT: Allow fade out to complete before moving to next cell
          // strict sequential timing
          await new Promise(r => setTimeout(r, 700));
          
          // Move to next cell index
          activeIndex = (activeIndex + 1) % cells.length;
          
          // Loop
          requestAnimationFrame(runSequence);
        };
        
        runSequence();
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGridAnimation);
      } else {
        initGridAnimation();
      }
    })();
  


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('is-visible');
              }, i * 100);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('main h1, main h2, main h3, main p, main button, main a.btn, main .group, main .grid > div, footer h1, footer a, footer p, footer span').forEach(el => {
          if (!el.closest('.animate-marquee') && !el.closest('script') && !el.closest('style')) {
            el.classList.add('reveal-on-scroll');
            observer.observe(el);
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
      

<header className="border-dashed sticky z-50 bg-[#000000] w-full top-0 backdrop-blur-md">
<div className="grid grid-cols-12 h-16 sm:h-20">

<div className="col-span-4 hidden md:flex items-center">
<a className="flex items-center justify-center hover:bg-[#ffffff]/10 transition-colors border-dashed text-xs font-medium text-white tracking-wide font-geist h-full border-white/10 border-r pr-8 pl-8" href="/platform">
        PLATFORM
      </a>
<a className="flex items-center justify-center hover:bg-[#ffffff]/10 hover:text-white transition-colors border-dashed text-xs font-medium tracking-wide font-geist h-full border-white/10 border-r pr-8 pl-8" href="/solutions">
        SOLUTIONS
      </a>
<a className="flex items-center justify-center hover:bg-[#ffffff]/10 hover:text-white transition-colors border-dashed text-xs font-medium tracking-wide font-geist h-full border-white/10 border-r pr-8 pl-8" href="/pricing">PRICING</a>
</div>

<div className="col-span-2 md:hidden flex items-center pl-6 border-r border-dashed border-white/10">
<svg className="lucide lucide-menu w-6 h-6 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>

<div className="col-span-8 md:col-span-4 flex relative items-center justify-center">
<a className="inline-flex items-center justify-center bg-center w-[150px] h-[70px] bg-[url(https://cdn.midjourney.com/32174ccb-ec70-4753-b37d-38912a75a560/0_1.png?w=800&amp;q=80)] bg-cover rounded-full" href="/home"></a>
</div>

<div className="col-span-2 md:col-span-4 flex items-center justify-end">
<a className="hidden md:flex items-center justify-center hover:bg-[#ffffff]/10 hover:text-white transition-colors border-dashed text-xs font-medium tracking-wide font-geist h-full border-white/10 border-r border-l pr-8 pl-8" href="/docs">DOCS</a><a className="hidden md:flex items-center justify-center hover:bg-[#ffffff]/10 hover:text-white transition-colors border-dashed text-xs font-medium tracking-wide font-geist h-full border-white/10 border-r border-l pr-8 pl-8" href="/entreprise">
        ENTERPRISE
      </a>
<a className="md:w-auto flex items-center justify-center hover:text-[#c6f91f] transition-colors gap-2 text-xs font-medium text-white tracking-wide font-geist w-full h-full pr-8 pl-8" href="/login">
        LOGIN
        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</header>

<main className="flex-grow flex flex-col">

<div className="grid grid-cols-1 lg:grid-cols-2 border-dashed border-white/10 border-b">

<div className="relative overflow-hidden flex flex-col lg:px-20 lg:py-24 pt-16 pr-6 pb-16 pl-6 justify-center border-dashed border-white/10 border-r bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900/40 via-[#05080A] to-[#05080A] reveal-on-scroll">

<div aria-hidden="true" className="absolute inset-0 pointer-events-none">

<div className="absolute right-0 top-0 h-full w-full lg:w-[65%] overflow-hidden [mask-image:radial-gradient(ellipse_at_right,black_15%,transparent_70%)] opacity-80">
<div className="-z-10 w-full h-full absolute top-0 left-0" data-us-project="E7TG42wNeNmEgWi9qKeK"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-[#05080A] via-[#05080A]/70 to-transparent"></div>
</div>

<div className="relative z-10 max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<span className="flex h-2 w-2 rounded-full bg-[#c6f91f]"></span>
<p className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist text-white/70 reveal-on-scroll">
                Public Beta v2.0
              </p>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 font-geist font-light tracking-tighter reveal-on-scroll">
              Scale revenue with
              <br/>
<span className="font-geist font-light tracking-tighter text-white/70">
                autonomous
              </span>
<br/>
              sales agents.
            </h1>
<p className="text-lg sm:text-xl leading-relaxed max-w-lg mb-12 font-light font-geist text-white/80 reveal-on-scroll">
              Deploy AI workers that prospect, engage, and book meetings
              automatically. Focus your team on closing, not chasing.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 border border-dashed border-white/10 max-w-lg rounded-sm overflow-hidden">
<button className="group flex gap-3 hover:bg-[#c6f91f]/5 transition-all duration-300 sm:border-b-0 sm:border-r border-dashed reveal-on-scroll hover:border hover:border-[#c6f91f] hover:shadow-[inset_0_0_10px_2px_rgba(198,249,31,0.1)] border-white/10 border-b pt-5 pr-8 pb-5 pl-8 gap-x-3 gap-y-3 items-center justify-center">
<span className="uppercase text-xs font-medium text-[#c6f91f] tracking-wide font-geist">
    Start Free Trial
  </span>
</button>
<button className="group flex items-center justify-center gap-3 px-8 py-5 hover:bg-white/5 transition-all duration-300 reveal-on-scroll">
<span className="text-white font-medium tracking-wide text-xs uppercase font-geist">
                  Book Demo
                </span>
<svg className="w-4 h-4 text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>

<style>
            .us-canvas canvas {
              width: 100% !important;
              height: 100% !important;
              display: block;
              transform: scale(1.2) translateX(8%);
              transform-origin: right center;
            }
          </style>

</div>

<div className="overflow-hidden reveal-on-scroll bg-gradient-to-r from-[#c6f91f] to-[#000000] z-10 relative" style={{maskImage: 'linear-gradient(210deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(210deg, transparent, black 0%, black 100%, transparent)'}}>

<div className="absolute inset-0 bg-gradient-to-br from-[#c6f91f]/10 via-[#05080A] to-[#05080A] opacity-40"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c6f91f]/5 blur-[120px] rounded-full pointer-events-none"></div>

<div className="z-10 flex lg:p-16 h-full pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">

<div className="overflow-hidden flex flex-col md:flex-row md:h-[500px] bg-[#0B0F13] w-full h-[600px] max-w-2xl border-white/10 border rounded-xl shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)] backdrop-blur-xl">

<div className="md:w-64 flex flex-col bg-[#080B0E]/60 w-full border-white/5 border-r pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-8 h-8 rounded bg-[#c6f91f] flex items-center justify-center text-black font-geist font-semibold" style={{}}>
                    V
                  </div>
<div className="h-4 w-20 bg-white/10 rounded"></div>
</div>
<div className="space-y-1 overflow-y-auto no-scrollbar flex-1">
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-300 cursor-pointer text-xs font-geist" style={{}}>
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                    Overview
                  </div>
<div className="flex items-center gap-3 px-3 py-2 bg-[#c6f91f]/10 text-[#c6f91f] border border-[#c6f91f]/20 rounded-lg cursor-pointer text-xs font-medium font-geist" style={{}}>
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                    Live Analytics
                  </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-300 cursor-pointer text-xs font-geist" style={{}}>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    Pipeline
                  </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-300 cursor-pointer text-xs font-geist" style={{}}>
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                    Agents
                  </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-300 cursor-pointer text-xs font-geist" style={{}}>
<svg className="lucide lucide-workflow w-4 h-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
                    Workflows
                  </div>
<div className="mt-4 pt-4 border-t border-white/5">
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-300 cursor-pointer text-xs font-geist" style={{}}>
<svg className="lucide lucide-settings-2 w-4 h-4" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                      Integration
                    </div>
</div>
</div>
</div>

<div className="flex-1 p-6 flex flex-col bg-transparent relative">
<div className="flex justify-between items-center mb-6">
<h3 className="text-white font-medium text-sm font-geist reveal-on-scroll" style={{}}>
                    Revenue Forecast
                  </h3>
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-400 border border-white/5 font-geist" style={{}}>
                    Q3 2024
                  </span>
</div>
<div className="mb-8">
<div className="text-4xl text-white mb-1 font-geist font-light tracking-tighter" style={{}}>
                    $892,104.50
                  </div>
<div className="text-xs text-slate-500 flex items-center gap-2 font-geist" style={{}}>
<span className="text-[#c6f91f] bg-[#c6f91f]/10 px-1 rounded font-geist" style={{}}>
                      +12.4%
                    </span>
                    vs last month
                  </div>
</div>

<div className="grid grid-cols-1 gap-6">
<div className="bg-[#0E1216]/60 border border-white/5 rounded-lg p-5 reveal-on-scroll">
<div className="flex justify-between items-start mb-4">
<div className="">
<div className="text-xs text-slate-400 mb-1 font-geist" style={{}}>
                          Active Deals
                        </div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-medium text-white font-geist" style={{}}>
                            1,248
                          </span>
<span className="text-[10px] font-medium text-[#c6f91f] font-geist" style={{}}>
                            +85 this week
                          </span>
</div>
</div>
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>

<div className="h-32 w-full relative mt-2">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-slate-700 font-mono" style={{}}>
<div className="border-b border-white/5 w-full h-0"></div>
<div className="border-b border-white/5 w-full h-0"></div>
<div className="border-b border-white/5 w-full h-0"></div>
<div className="border-b border-white/5 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#c6f91f" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#c6f91f" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0,110 C30,105 50,90 80,95 C110,100 140,70 170,75 C200,80 230,50 260,30 C270,25 290,35 310,10 L310,128 L0,128 Z" fill="url(#chartGradient)"></path>
<path d="M0,110 C30,105 50,90 80,95 C110,100 140,70 170,75 C200,80 230,50 260,30 C270,25 290,35 310,10" fill="none" stroke="#c6f91f" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="98%" cy="10%" fill="#c6f91f" r="3" stroke="#05080A" strokeWidth="2"></circle>
</svg>
</div>

<div className="flex justify-between mt-2 text-[10px] text-slate-600 font-medium px-1 uppercase tracking-wider" style={{}}>
<span className="font-geist" style={{}}>Mon</span>
<span className="font-geist" style={{}}>Tue</span>
<span className="font-geist" style={{}}>Wed</span>
<span className="font-geist" style={{}}>Thu</span>
<span className="font-geist" style={{}}>Fri</span>
<span className="font-geist" style={{}}>Sat</span>
<span className="font-geist" style={{}}>Sun</span>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[10px] font-medium text-slate-500 uppercase tracking-widest" style={{}}>
<div className="flex items-center gap-1 hover:text-white cursor-pointer font-geist" style={{}}>
<svg className="lucide lucide-arrow-left w-3 h-3" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                    Prev
                  </div>
<div className="flex items-center gap-1 hover:text-white cursor-pointer font-geist" style={{}}>
                    Next
                    <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
<div className="border-dashed bg-[#05080A] border-white/10 border-b group/footer">
<div className="max-w-screen-2xl mr-auto ml-auto">
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="col-span-12 md:col-span-2 py-8 px-6 md:px-10 border-b md:border-b-0 md:border-r border-dashed border-white/10 flex items-center bg-[#05080A] relative z-20 reveal-on-scroll">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase font-geist" style={{}}>
                TRUSTED TEAMS
              </span>
</div>

<div className="col-span-12 md:col-span-10 relative overflow-hidden h-20 flex items-center reveal-on-scroll" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="animate-marquee">

<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter font-geist">
                    ACME
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    ORBITAL
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex gap-1 items-center font-semibold text-lg text-white tracking-tighter font-geist">
                    INTER
                    <span className="font-extralight font-geist">ACT</span>
</div>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-normal tracking-tighter text-lg italic font-geist">
                    Starlight
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex gap-1 items-center font-medium text-lg text-white font-mono font-geist">
                    QUAN
                    <span className="text-[#c6f91f] font-geist">.</span>
                    AI
                  </div>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-semibold tracking-tighter text-lg font-geist">
                    VERTEX
                  </span>
</div>

<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter font-geist">
                    ACME
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    ORBITAL
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex gap-1 items-center font-semibold text-lg text-white tracking-tighter font-geist">
                    INTER
                    <span className="font-extralight font-geist">ACT</span>
</div>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-normal tracking-tighter text-lg italic font-geist">
                    Starlight
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex gap-1 items-center font-medium text-lg text-white font-mono font-geist">
                    QUAN
                    <span className="text-[#c6f91f] font-geist">.</span>
                    AI
                  </div>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-semibold tracking-tighter text-lg font-geist">
                    VERTEX
                  </span>
</div>

<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter font-geist">
                    ACME
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    ORBITAL
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex gap-1 items-center font-semibold text-lg text-white tracking-tighter font-geist">
                    INTER
                    <span className="font-extralight font-geist">ACT</span>
</div>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-normal tracking-tighter text-lg italic font-geist">
                    Starlight
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex gap-1 items-center font-medium text-lg text-white font-mono font-geist">
                    QUAN
                    <span className="text-[#c6f91f] font-geist">.</span>
                    AI
                  </div>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-semibold tracking-tighter text-lg font-geist">
                    VERTEX
                  </span>
</div>
</div>
</div>
</div>
</div>
<style>
          @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
          .animate-marquee {
              display: flex;
              width: fit-content;
              animation: marquee-scroll 80s linear infinite;
          }
          .group\/footer:hover .animate-marquee {
              animation-play-state: paused;
          }
        </style>
</div>

<section className="border-dashed bg-[#05080A] border-white/10 border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative gap-x-8 gap-y-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-[#c6f91f] tracking-widest font-geist">
                    01. Platform
                  </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                  Automate your
                  <span className="">entire</span>
                  revenue stack.
                </h2>
<p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll" style={{}}>
                  Deploy autonomous agents, intelligent workflows, and neural
                  routing to scale your sales motion without adding headcount.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="sm:w-auto hover:bg-slate-200 transition-colors font-medium text-black font-geist text-center bg-white w-full rounded-none pt-3 pr-6 pb-3 pl-6" href="#">
                  View documentation
                </a>
<a className="group flex items-center gap-2 text-white font-geist hover:text-indigo-300 transition-colors reveal-on-scroll" href="#">
                  Explore platform
                  <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent" style={{}}></div>
</div>
<section className="border-dashed z-10 bg-[#05080A] border-white/10 border-b relative">


<div className="grid grid-cols-1 md:grid-cols-12 border-dashed border-white/10 border-b">
<div className="col-span-12 md:col-span-4 md:p-12 md:border-b-0 md:border-r border-dashed flex flex-col border-white/10 border-b pt-8 pr-8 pb-8 pl-8 justify-center reveal-on-scroll">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-cpu w-4 h-4 text-[#c6f91f]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
                    Core Engine
                  </span>
</div>
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tighter mb-4 font-geist reveal-on-scroll">
                  Built for speed.
                </h2>
<p className="text-sm leading-relaxed font-geist text-white/70 reveal-on-scroll" style={{}}>
                  Engineered to handle enterprise volume without losing the
                  human touch. Our architecture scales with your demand.
                </p>
</div>
<div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-white/10 reveal-on-scroll">

<div className="group hover:bg-white/[0.02] transition-colors overflow-hidden reveal-on-scroll pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex flex-col overflow-hidden bg-slate-900/50 w-full h-24 border-white/5 border rounded mb-6 pt-3 pr-3 pb-3 pl-3 relative">
<div className="flex gap-1.5 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="font-mono text-[10px] text-slate-500 space-y-1 h-full cursor-default min-h-[60px]" id="terminal-aura-emjs78kc81f067uvn"><div className="flex items-center"><span className="text-[#c6f91f] mr-2">~</span><span className="text-white/70">i</span><span className="w-1.5 h-3 bg-[#c6f91f] ml-1 block animate-pulse"></span></div></div>
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#c6f91f]/10 blur-[40px] rounded-full group-hover:bg-[#c6f91f]/20 transition-colors"></div>

</div>
<h3 className="text-white font-medium mb-2 flex items-center gap-2 font-geist reveal-on-scroll">
                    Instant Deployment
                  </h3>
<p className="text-xs leading-relaxed font-geist reveal-on-scroll" style={{}}>
                    Go from signup to active prospecting in under 5 minutes with
                    pre-configured agent templates.
                  </p>
</div>

<div className="p-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden reveal-on-scroll">
<div className="mb-6 relative h-24 w-full flex items-center justify-center">

<div className="flex w-full h-full relative items-center justify-center overflow-hidden rounded-lg group reveal-on-scroll">

<div className="flex w-full h-full max-w-[320px] pr-4 pl-4 relative items-center justify-between overflow-visible">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 320 96">

<path className="transition-colors duration-500" d="M 44 48 C 120 48, 180 16, 276 16" fill="none" id="route-p1" stroke="currentColor" strokeWidth="1.5"></path>
<path className="text-white/10 transition-colors duration-500" d="M 44 48 C 120 48, 180 48, 276 48" fill="none" id="route-p2" stroke="currentColor" strokeWidth="1.5"></path>
<path className="text-white/10 transition-colors duration-500" d="M 44 48 C 120 48, 180 80, 276 80" fill="none" id="route-p3" stroke="currentColor" strokeWidth="1.5"></path>

<circle className="opacity-0 shadow-[0_0_8px_#c6f91f]" fill="#c6f91f" id="packet" r="3" style={{opacity: '0'}}>
<animatemotion begin="indefinite" calcmode="spline" dur="0.6s" fill="freeze" id="packet-anim" keypoints="0;1" keysplines="0.4 0 0.2 1" keytimes="0;1"><mpath xlink:href="#route-p1"></mpath></animatemotion>
</circle>
</svg>

<div className="relative z-10 w-9 h-9 rounded-lg bg-[#0E1216] border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300" id="node-source">
<div className="absolute inset-0 bg-[#c6f91f]/20 rounded-lg blur-md transition-opacity duration-300" id="source-glow">
</div>
<svg className="relative z-10 transition-colors duration-300" fill="none" height="16" id="source-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>

<div className="flex flex-col gap-3 z-10 py-2">

<div className="node-target flex transition-all duration-300 bg-[#0E1216] w-6 h-6 border-white/10 border rounded-md items-center justify-center" id="target-0">
<svg className="transition-colors duration-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>

<div className="node-target flex transition-all duration-300 bg-[#0E1216] w-6 h-6 border-white/10 border rounded-md items-center justify-center" id="target-1">
<svg className="text-slate-600 transition-colors duration-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>

<div className="node-target flex transition-all duration-300 bg-[#0E1216] w-6 h-6 border-white/10 border rounded-md items-center justify-center" id="target-2">
<svg className="text-slate-600 transition-colors duration-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
</div>

</div>
</div>
<h3 className="text-white font-medium mb-2 flex items-center gap-2 font-geist reveal-on-scroll">
                    Neural Routing
                  </h3>
<p className="text-xs leading-relaxed font-geist text-white/70 reveal-on-scroll" style={{}}>
                    Intelligent lead distribution based on intent signals,
                    company size, and historical close rates.
                  </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-white/10 border-dashed border-white/10 border-b">

<div className="flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors pt-6 pr-6 pb-6 pl-6 gap-x-3 gap-y-3 reveal-on-scroll" style={{}}>
<svg className="lucide lucide-zap w-5 h-5 text-slate-400 group-hover:text-[#c6f91f] transition-colors" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<div className="">
<h4 className="text-white text-sm font-medium font-geist">
                    Real-time Sync
                  </h4>
<p className="text-[10px] text-slate-500 mt-1 font-geist reveal-on-scroll" style={{}}>
                    Bi-directional CRM updates.
                  </p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<svg className="lucide lucide-shield-check w-5 h-5 text-slate-400 group-hover:text-[#c6f91f] transition-colors" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<h4 className="text-white text-sm font-medium font-geist">
                    SOC2 Compliant
                  </h4>
<p className="text-[10px] text-slate-500 mt-1 font-geist reveal-on-scroll" style={{}}>
                    Enterprise-grade security.
                  </p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<svg className="lucide lucide-globe w-5 h-5 text-slate-400 group-hover:text-[#c6f91f] transition-colors" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<div className="">
<h4 className="text-white text-sm font-medium font-geist">
                    Global Data
                  </h4>
<p className="text-[10px] text-slate-500 mt-1 font-geist reveal-on-scroll" style={{}}>
                    180+ countries supported.
                  </p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<svg className="lucide lucide-code-2 w-5 h-5 text-slate-400 group-hover:text-[#c6f91f] transition-colors" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<div className="">
<h4 className="text-white text-sm font-medium font-geist">
                    API First
                  </h4>
<p className="text-[10px] text-slate-500 mt-1 font-geist reveal-on-scroll" style={{}}>
                    Full programmatic access.
                  </p>
</div>
</div>
</div>
</section>
</div>
</section>
<section className="border-dashed bg-[#05080A] border-white/10 border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative gap-x-8 gap-y-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-[#c6f91f] tracking-widest font-geist">
                    02. Meet Yuna
                  </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                  Automate your
                  <span className="">entire</span>
                  revenue stack with Yuna.
                </h2>
<p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll" style={{}}>
                  Deploy Yuna's autonomous agents, intelligent workflows, and
                  neural routing to scale your sales motion without adding
                  headcount.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="sm:w-auto hover:bg-slate-200 transition-colors font-medium text-black font-geist text-center bg-white w-full rounded-none pt-3 pr-6 pb-3 pl-6" href="#">
                  Start with Yuna
                </a>
<a className="group flex items-center gap-2 text-white font-geist hover:text-indigo-300 transition-colors reveal-on-scroll" href="#">
                  See how it works
                  <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent" style={{}}></div>
</div>
<section className="border-dashed z-10 bg-[#05080A] border-white/10 border-b relative">

<div className="grid grid-cols-1 md:grid-cols-12 border-dashed border-white/10 border-b">

<div className="col-span-12 md:col-span-4 md:border-b-0 md:border-r overflow-hidden group border-dashed reveal-on-scroll h-[360px] border-white/10 border-b relative">

<div className="flex -translate-y-16 opacity-80 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="absolute w-[280px] h-[280px] rounded-full border border-white/5"></div>
<div className="absolute w-[200px] h-[200px] rounded-full border border-white/5"></div>
<div className="absolute w-[120px] h-[120px] rounded-full border border-white/5"></div>

<div className="absolute w-[280px] h-[280px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg_240deg,rgba(198,249,31,0.2)_360deg)] animate-[spin_4s_linear_infinite]"></div>

<div className="absolute top-10 left-10 flex items-center gap-2 z-10">
<div className="w-1.5 h-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></div>
<span className="text-[10px] text-[#c6f91f] uppercase tracking-widest font-geist font-medium">
                      Yuna Active
                    </span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 z-10 bg-gradient-to-t from-[#05080A] via-[#05080A]/80 to-transparent pt-20">
<h3 className="text-white font-medium text-lg mb-2 font-geist reveal-on-scroll">
                    INTELLIGENT ORCHESTRATION
                  </h3>
<p className="text-xs leading-relaxed font-geist pr-4 text-white/70 reveal-on-scroll" style={{}}>
                    Yuna organizes and prioritizes every task to ensure
                    efficient execution.
                  </p>
</div>
</div>

<div className="col-span-12 md:col-span-4 md:border-b-0 md:border-r border-dashed flex flex-col reveal-on-scroll h-[360px] border-white/10 border-b pt-8 pr-8 pb-8 pl-8" style={{}}>
<style>
                  @keyframes progress-loop {
                    0% { width: 0%; opacity: 0.5; }
                    20% { width: 10%; opacity: 1; }
                    100% { width: 100%; opacity: 0; }
                  }
                  @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(2); opacity: 0; }
                  }
                </style>
<div className="mb-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-white font-medium text-lg font-geist reveal-on-scroll">
                      REAL-TIME INSIGHTS
                    </h3>
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6f91f] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#c6f91f]"></span>
</span>
<span className="text-[10px] text-[#c6f91f] font-mono tracking-wider uppercase">Live</span>
</div>
</div>
<p className="text-xs leading-relaxed font-geist text-white/70 reveal-on-scroll" style={{}}>
                    Stay updated with Yuna's live notifications across all your
                    platforms.
                  </p>
</div>
<div className="flex-1 space-y-4">

<div className="group cursor-pointer reveal-on-scroll">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-[#c6f91f]/10 border border-[#c6f91f]/20 flex items-center justify-center text-[#c6f91f]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2l-7 7V9h-5v7l-5-5V5z"></path>
</svg>
</div>
<span className="text-[10px] font-semibold text-[#c6f91f] uppercase tracking-wide font-geist">
                          Yuna Alert
                        </span>
</div>
<span className="text-[10px] text-slate-600 font-mono" style={{}}>
                        PROCESSING
                      </span>
</div>
<div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]" style={{animation: 'progress-loop 2s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-white/20 transition-colors" style={{}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</div>
<span className="text-[10px] font-semibold text-slate-500 group-hover:text-white uppercase tracking-wide font-geist transition-colors" style={{}}>
                          Figma Update
                        </span>
</div>
<span className="text-[10px] text-slate-600 font-mono" style={{}}>
                        SYNCING
                      </span>
</div>
<div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-slate-500 group-hover:bg-white transition-colors" style={{animation: 'progress-loop 3s ease-in-out infinite', animationDelay: '0.5s'}}></div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-white/20 transition-colors" style={{}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</div>
<span className="text-[10px] font-semibold text-slate-500 group-hover:text-white uppercase tracking-wide font-geist transition-colors" style={{}}>
                          Facebook Alert
                        </span>
</div>
<span className="text-[10px] text-slate-600 font-mono" style={{}}>
                        UPDATING
                      </span>
</div>
<div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-slate-500 group-hover:bg-white transition-colors" style={{animation: 'progress-loop 2.5s ease-out infinite', animationDelay: '1.2s'}}></div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-white/20 transition-colors" style={{}}>
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</div>
<span className="text-[10px] font-semibold text-slate-500 group-hover:text-white uppercase tracking-wide font-geist transition-colors" style={{}}>
                          Linkedin Notification
                        </span>
</div>
<span className="text-[10px] text-slate-600 font-mono" style={{}}>
                        CHECKING
                      </span>
</div>
<div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-slate-500 group-hover:bg-white transition-colors" style={{animation: 'progress-loop 4s linear infinite', animationDelay: '0.8s'}}></div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 reveal-on-scroll bg-[#05080A] h-[360px] relative" style={{}}>

<div className="grid grid-cols-4 grid-rows-4 divide-x divide-y divide-white/5 border-white/5 border-b absolute top-0 right-0 bottom-0 left-0" id="grid-aura-emjszhattn1hypgv">

<div className="reveal-on-scroll transition-all duration-700 ease-in-out border"></div>
<div className="bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent"></div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
</div>
</div>

<div className="bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent"></div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-center relative reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">

<div className="absolute inset-0 bg-[#c6f91f]/20 blur-[30px]"></div>
<div className="relative z-10 text-[#c6f91f]">
<svg fill="#c6f91f" height="48" stroke="#05080A" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded bg-[#15191E] flex items-center justify-center text-[8px] font-bold text-slate-600 tracking-wider">
      YUNA
    </div>
</div>

<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9 9h.01"></path>
<path d="M15 9h.01"></path>
<path d="M10 16c1.5 1.5 2.5 1.5 4 0"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded bg-[#15191E] flex items-center justify-center text-[8px] font-bold text-slate-600 tracking-wider">
      YUNA
    </div>
</div>

<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded bg-[#15191E] flex items-center justify-center text-[8px] font-bold text-slate-600 tracking-wider">
      YUNA
    </div>
</div>
<div className="bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent"></div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-slate-600 font-serif">
      Y
    </div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll transition-all duration-700 ease-in-out border border-transparent">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m4.93 4.93 14.14 14.14"></path>
</svg>
</div>
</div>


</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<div className="col-span-12 md:col-span-8 md:border-b-0 md:border-r border-dashed overflow-hidden reveal-on-scroll border-white/10 border-b pt-16 pr-8 pb-8 pl-8 relative">

<div className="flex gap-[1px] pointer-events-none opacity-100 w-full h-full pr-8 absolute right-0 bottom-0 items-end justify-end">
<style>
    @keyframes barOutlineAnim {
      0% { height: 0; opacity: 0; }
      5% { height: 0; opacity: 1; }
      20% { height: var(--h); opacity: 1; }
      80% { height: var(--h); opacity: 1; }
      90% { height: var(--h); opacity: 0; }
      100% { height: 0; opacity: 0; }
    }
    @keyframes barFillAnim {
      0%, 20% { height: 0; opacity: 1; }
      40% { height: 100%; opacity: 1; }
      75% { height: 100%; opacity: 1; }
      85% { height: 100%; opacity: 0; }
      100% { height: 0; opacity: 0; }
    }
  </style>

<div className="w-24 relative border-t border-l border-r border-dashed border-white/10" style={{'--h': '20%', animation: 'barOutlineAnim 6s ease-in-out infinite'}}>
<div className="absolute bottom-0 left-0 w-full bg-white/[0.02]" style={{animation: 'barFillAnim 6s ease-in-out infinite'}}></div>
</div>

<div className="w-24 relative border-t border-l border-r border-dashed border-white/10" style={{'--h': '40%', animation: 'barOutlineAnim 6s 0.1s ease-in-out infinite'}}>
<div className="absolute bottom-0 left-0 w-full bg-white/[0.02]" style={{animation: 'barFillAnim 6s 0.1s ease-in-out infinite'}}></div>
</div>

<div className="w-24 relative border-t border-l border-r border-dashed border-white/10" style={{'--h': '60%', animation: 'barOutlineAnim 6s 0.2s ease-in-out infinite'}}>
<div className="absolute bottom-0 left-0 w-full bg-white/[0.02]" style={{animation: 'barFillAnim 6s 0.2s ease-in-out infinite'}}></div>
</div>

<div className="w-24 relative border-t border-l border-r border-dashed border-[#c6f91f]/30" style={{'--h': '80%', animation: 'barOutlineAnim 6s 0.3s ease-in-out infinite'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#c6f91f]">
<svg fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<div className="absolute bottom-0 left-0 w-full bg-[#c6f91f]/5" style={{animation: 'barFillAnim 6s 0.3s ease-in-out infinite'}}></div>
</div>
</div>
<div className="relative z-10 mt-12">
<div className="text-[64px] leading-none font-light text-[#c6f91f] tracking-tighter font-geist mb-2">
                    150%
                  </div>
<h3 className="text-white font-medium text-lg mb-2 uppercase tracking-wide font-geist reveal-on-scroll">
                    Growth with Yuna
                  </h3>
<p className="text-sm leading-relaxed font-geist max-w-md text-white/70 reveal-on-scroll" style={{}}>
                    Empower teams with Yuna to drive measurable success. Turn
                    insights into actions that scale your business fast.
                  </p>
</div>
</div>

<div className="col-span-12 md:col-span-4 p-8 flex flex-col justify-end pt-16 h-full min-h-[300px] reveal-on-scroll">
<div className="mt-auto">
<h3 className="text-white font-medium text-lg mb-2 uppercase tracking-wide font-geist reveal-on-scroll">
                    Yuna's Global Network
                  </h3>
<p className="text-sm leading-relaxed font-geist text-white/70 reveal-on-scroll" style={{}}>
                    Collaborate with brands and teams who share your vision.
                    Build lasting partnerships based on trust and innovation.
                  </p>
</div>
</div>
</div>
</section>
</div>
</section>
<section className="border-dashed bg-[#05080A] border-white/10 border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative gap-x-8 gap-y-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-[#c6f91f] tracking-widest font-geist">
                    03. Customers
                  </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                  Loved by
                  <span className="">modern</span>
                  sales teams.
                </h2>
<p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll" style={{}}>
                  See how high-growth companies are scaling with Volt.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="sm:w-auto hover:bg-slate-200 transition-colors font-medium text-black font-geist text-center bg-white w-full rounded-none pt-3 pr-6 pb-3 pl-6" href="#">
                  Read stories
                </a>
<a className="group flex items-center gap-2 text-white font-geist hover:text-indigo-300 transition-colors reveal-on-scroll" href="#">
                  View customers
                  <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent" style={{}}></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 font-geist items-stretch">

<div className="group relative flex h-full flex-col bg-[#05080A] reveal-on-scroll">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"></div>
</div>
<div className="relative flex-1 flex flex-col p-10">
<div className="flex items-center gap-2 text-white/90">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
<span className="text-sm font-semibold tracking-wide">
                    Boltshift
                  </span>
</div>
<div className="mt-8 text-white/20">
<svg className="" fill="currentColor" height="34" viewbox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
</div>
<p className="mt-6 text-[17px] leading-relaxed text-white/85 min-h-[210px] reveal-on-scroll">
                  "Our outbound motion was always strong under the hood, but we
                  struggled to scale it efficiently. Now with Yuna, the workflow
                  feels sharp, autonomous, and incredibly intuitive—it's made
                  our sales process so much smoother."
                </p>
<div className="mt-10 flex justify-end">
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-0.5" href="#">
                    Read case study
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 border-t border-white/10 divide-x divide-white/10 h-[120px]">
<div className="p-7 flex flex-col justify-center reveal-on-scroll">
<div className="text-4xl font-semibold tracking-tight text-white">
                    60%
                  </div>
<div className="mt-2 text-xs font-medium text-white/70">
                    Training time reduction
                  </div>
</div>
<div className="p-7 flex flex-col justify-center reveal-on-scroll">
<div className="text-4xl font-semibold tracking-tight text-white">
                    $2.3M
                  </div>
<div className="mt-2 text-xs font-medium text-white/70">
                    Annual efficiency savings
                  </div>
</div>
</div>
<div className="flex items-center gap-3 border-t border-white/10 p-7 h-[88px]">
<img alt="Julian Singh" className="w-10 h-10 rounded-full object-cover bg-slate-800 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div>
<div className="text-sm font-semibold text-white">
                    Julian Singh
                  </div>
<div className="text-xs text-white/70">
                    COO
                    <span className="text-white/80">Boltshift</span>
</div>
</div>
</div>
</div>

<div className="group relative flex h-full flex-col bg-[#05080A] reveal-on-scroll">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"></div>
</div>
<div className="relative flex-1 flex flex-col p-10">
<div className="flex items-center gap-2 text-white/90">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
<path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path>
</svg>
<span className="text-sm font-semibold tracking-wide">
                    Warpspeed
                  </span>
</div>
<div className="mt-8 text-white/20">
<svg fill="currentColor" height="34" viewbox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
</div>
<p className="mt-6 text-[17px] leading-relaxed text-white/85 min-h-[210px] reveal-on-scroll">
                  "We knew our tech was solid, but our reach didn't reflect
                  that. After deploying Yuna, everything just clicked—meetings
                  got easier to book, and prospects finally 'got' the value
                  proposition instantly."
                </p>
<div className="mt-10 flex justify-end">
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-0.5" href="#">
                    Read case study
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 border-t border-white/10 divide-x divide-white/10 h-[120px]">
<div className="p-7 flex flex-col justify-center reveal-on-scroll">
<div className="text-4xl font-semibold tracking-tight text-white">
                    500x
                  </div>
<div className="mt-2 text-xs font-medium text-white/70">
                    Pipeline growth post-launch
                  </div>
</div>
<div className="p-7 flex flex-col justify-center reveal-on-scroll">
<div className="text-4xl font-semibold tracking-tight text-white">
                    95%
                  </div>
<div className="mt-2 text-xs font-medium text-white/70">
                    Lead-to-Deal accuracy
                  </div>
</div>
</div>
<div className="flex items-center gap-3 border-t border-white/10 p-7 h-[88px]">
<img alt="Aisha Clark" className="w-10 h-10 rounded-full object-cover bg-slate-800 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<div className="text-sm font-semibold text-white">
                    Aisha Clark
                  </div>
<div className="text-xs text-white/70">
                    CEO
                    <span className="text-white/80">Warpspeed</span>
</div>
</div>
</div>
</div>

<div className="group relative flex h-full flex-col bg-[#05080A] reveal-on-scroll">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"></div>
</div>
<div className="relative flex-1 flex flex-col p-10">
<div className="flex items-center gap-2 text-white/90">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
<span className="text-sm font-semibold tracking-wide">
                    Ephemeral
                  </span>
</div>
<div className="mt-8 text-white/20">
<svg fill="currentColor" height="34" viewbox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
</div>
<p className="mt-6 text-[17px] leading-relaxed text-white/85 min-h-[210px] reveal-on-scroll">
                  "We came in with a manual process and left with a system that
                  feels completely aligned with our mission. Yuna really
                  understood our needs and turned that into something
                  emotionally resonant for our customers."
                </p>
<div className="mt-10 flex justify-end">
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-0.5" href="#">
                    Read case study
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 border-t border-white/10 divide-x divide-white/10 h-[120px]">
<div className="p-7 flex flex-col justify-center reveal-on-scroll">
<div className="text-4xl font-semibold tracking-tight text-white">
                    4.6x
                  </div>
<div className="mt-2 text-xs font-medium text-white/70">
                    Conversation frequency
                  </div>
</div>
<div className="p-7 flex flex-col justify-center reveal-on-scroll">
<div className="text-4xl font-semibold tracking-tight text-white">
                    0.8 sec
                  </div>
<div className="mt-2 text-xs font-medium text-white/70">
                    Avg response time
                  </div>
</div>
</div>
<div className="flex items-center gap-3 border-t border-white/10 p-7 h-[88px]">
<img alt="Linh Tran" className="w-10 h-10 rounded-full object-cover bg-slate-800 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
<div>
<div className="text-sm font-semibold text-white">Linh Tran</div>
<div className="text-xs text-white/70">
                    VP of Product
                    <span className="text-white/80">Ephemeral</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-dashed bg-[#05080A] border-white/10 border-b pt-24 pb-24">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative gap-x-8 gap-y-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-[#c6f91f] tracking-widest font-geist">
                    04. Pricing
                  </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                  Transparent
                  <span className="">pricing</span>
                  .
                </h2>
<p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll" style={{}}>
                  Start small and scale as you grow. No hidden fees.
                </p>
</div>
<div className="flex items-center gap-3 bg-white/5 p-1 rounded-lg border border-white/5">
<button className="px-4 py-1.5 text-xs font-medium text-black bg-[#c6f91f] rounded font-geist reveal-on-scroll">
                  Monthly
                </button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors font-geist reveal-on-scroll" style={{}}>
                  Yearly
                </button>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent" style={{}}></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="flex flex-col group hover:bg-white/[0.04] transition-colors duration-300 h-full border-white/10 border rounded-none p-10 relative reveal-on-scroll">

<div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#c6f91f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#c6f91f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[#c6f91f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-[#c6f91f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="mb-8">
<span className="inline-block px-3 py-1 text-xs font-medium text-slate-300 border border-white/10 rounded bg-white/5 group-hover:text-[#c6f91f] group-hover:border-[#c6f91f] group-hover:bg-[#c6f91f]/10 transition-colors duration-300 font-geist">
        Starter
      </span>
</div>
<div className="mb-2 flex items-baseline gap-1">
<span className="text-5xl font-medium text-white tracking-tight font-geist">
        $49
      </span>
<span className="text-lg text-white/70 font-geist">
        /month
      </span>
</div>
<p className="text-white/70 text-sm mb-8 font-geist font-light reveal-on-scroll">
      Perfect for individuals getting started.
    </p>
<button className="w-full py-4 mb-10 rounded-lg border border-white/10 bg-transparent text-white group-hover:bg-[#c6f91f] group-hover:text-black group-hover:border-[#c6f91f] transition-all duration-300 text-sm font-medium font-geist reveal-on-scroll">
      Start Free Trial
    </button>
<div className="mt-auto">
<h4 className="text-white font-medium mb-6 font-geist text-sm">
        What's included
      </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-white/70 text-sm font-light font-geist">
            2 AI Sales Agents
          </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-white/70 text-sm font-light font-geist">
            1,000 Leads per month
          </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-white/70 text-sm font-light font-geist">
            Basic CRM Sync
          </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-white/70 text-sm font-light font-geist">
            Email Support
          </span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col group hover:bg-white/[0.04] transition-colors duration-300 h-full border-white/10 border rounded-none p-10 relative reveal-on-scroll">

<div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#c6f91f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#c6f91f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[#c6f91f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-[#c6f91f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="mb-8">
<span className="inline-block px-3 py-1 text-xs font-medium text-slate-300 border border-white/10 rounded bg-white/5 group-hover:text-[#c6f91f] group-hover:border-[#c6f91f] group-hover:bg-[#c6f91f]/10 transition-colors duration-300 font-geist">
        Growth
      </span>
</div>
<div className="mb-2 flex items-baseline gap-1">
<span className="text-5xl font-medium text-white tracking-tight font-geist">
        $149
      </span>
<span className="text-lg text-white/70 font-geist">
        /month
      </span>
</div>
<p className="text-white/70 text-sm mb-8 font-geist font-light reveal-on-scroll">
      For scaling teams that need more power.
    </p>
<button className="w-full py-4 mb-10 rounded-lg border border-white/10 bg-transparent text-white group-hover:bg-[#c6f91f] group-hover:text-black group-hover:border-[#c6f91f] transition-all duration-300 text-sm font-medium font-geist reveal-on-scroll">
      Schedule a call
    </button>
<div className="mt-auto">
<h4 className="text-white font-medium mb-6 font-geist text-sm">
        What's included
      </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-white/70 text-sm font-light font-geist">
            10 AI Sales Agents
          </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-white/70 text-sm font-light font-geist">
            10,000 Leads per month
          </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-white/70 text-sm font-light font-geist">
            Advanced CRM Integration
          </span>
</li>
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-white/70 text-sm font-light font-geist">
            Priority Support
          </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-dashed bg-[#05080A] border-white/10 border-t pt-20 pb-10">
<div className="max-w-6xl mx-auto w-full flex flex-col font-geist">

<div className="relative bg-[#c6f91f] text-black w-full overflow-hidden border-x border-t border-dashed border-white/10">

<div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none">
<div className="border-r border-dashed border-black/10 h-full"></div>
<div className="border-r border-dashed border-black/10 h-full"></div>
<div className="border-r border-dashed border-black/10 h-full"></div>
<div className="h-full"></div>
</div>
<div className="relative z-10 px-6 py-16 md:px-12 md:py-20 flex flex-col justify-between min-h-[400px]">

<a className="group flex items-start justify-between w-full mb-24 md:mb-32 reveal-on-scroll" href="mailto:hello@yuna.ai">
<span className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] leading-none font-semibold tracking-tighter break-all reveal-on-scroll">
                HELLO@YUNA.AI
              </span>
<div className="pt-2 md:pt-6">
<svg className="w-10 h-10 md:w-20 md:h-20 transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</a>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 md:text-base leading-relaxed z-20 text-sm font-medium relative gap-x-12 gap-y-12">

<div className="flex flex-col gap-x-4 gap-y-4">
<p className="font-semibold reveal-on-scroll">+1 (415) 872-3094</p>
<p className="max-w-[200px] text-black/80 reveal-on-scroll">
                  425 Innovation Drive Suite 210 San Francisco, CA 94107
                </p>
</div>

<div className="flex flex-col gap-4">
<span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Product
                </span>
<div className="flex flex-col gap-2">
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Work
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    About Us
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Insights
                  </a>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Legal
                </span>
<div className="flex flex-col gap-2">
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Terms of Service
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Privacy Policy
                  </a>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Connect
                </span>
<div className="flex flex-col gap-2">
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    X (Twitter)
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Dribbble
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    LinkedIn
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-[#05080A] text-white w-full overflow-hidden border-x border-b border-dashed border-white/10">

<div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none opacity-20">
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="h-full"></div>
</div>

<div className="relative z-10 w-full flex justify-center items-end leading-none select-none pt-12">
<h1 className="text-[24vw] md:text-[20rem] font-semibold tracking-tighter text-center leading-[0.75] mb-[-0.08em] mix-blend-screen text-white reveal-on-scroll">
              YUNA
            </h1>
</div>
</div>
</div>
</footer>




    </>
  );
}
