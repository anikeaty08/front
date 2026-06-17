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
      
      document.addEventListener('DOMContentLoaded', () => {
        // Lucide icons
        lucide.createIcons();
        // Enforce 1.5 stroke width
        document.querySelectorAll('svg.lucide').forEach(svg => {
          svg.setAttribute('stroke-width', '1.5');
        });

        // Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Countdown and seats logic
        const now = new Date();
        const targetDate = new Date();
        // Set deadline 14 days from now (customize if needed)
        targetDate.setDate(now.getDate() + 14);

        const msPerDay = 24 * 60 * 60 * 1000;
        const rawDaysLeft = Math.ceil((targetDate - now) / msPerDay);
        const daysLeft = Math.max(0, rawDaysLeft);
        const totalWindow = 14;
        // Seats decrease as we approach the date
        let seatsRemaining = Math.max(0, Math.min(300, Math.round(300 * (daysLeft / totalWindow))));
        // Add some variability based on hour to feel dynamic but deterministic
        const hour = now.getHours();
        seatsRemaining = Math.max(0, Math.min(seatsRemaining - Math.floor((hour % 6) * 3), 300));

        const daysEl = document.getElementById('daysLeft');
        const seatsEl = document.getElementById('seatsLeft');
        if (daysEl) daysEl.textContent = daysLeft;
        if (seatsEl) seatsEl.textContent = seatsRemaining;

        // Accordion
        const buttons = document.querySelectorAll('[data-acc-btn]');
        buttons.forEach((btn) => {
          btn.addEventListener('click', () => {
            const panel = btn.parentElement.querySelector('[data-acc-panel]');
            const icon = btn.querySelector('i.lucide');
            const boltShell = btn.querySelector('span[style*="polygon"]');
            const isOpen = !panel.classList.contains('hidden');

            // Toggle panel
            panel.classList.toggle('hidden');

            // Swap plus/minus
            if (icon) {
              icon.remove();
              const newIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              newIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
              newIcon.setAttribute('width', '24');
              newIcon.setAttribute('height', '24');
              newIcon.setAttribute('viewBox', '0 0 24 24');
              newIcon.setAttribute('fill', 'none');
              newIcon.classList.add('lucide', 'w-4', 'h-4', 'text-white');
              newIcon.setAttribute('stroke', 'currentColor');
              newIcon.setAttribute('stroke-width', '1.5');
              newIcon.setAttribute('stroke-linecap', 'round');
              newIcon.setAttribute('stroke-linejoin', 'round');
              // Path for plus or minus
              if (isOpen) {
                // going to close -> show plus
                newIcon.innerHTML = '<path d="M12 5v14M5 12h14"></path>';
              } else {
                // opening -> show minus
                newIcon.innerHTML = '<path d="M5 12h14"></path>';
              }
              btn.querySelector('span.relative').appendChild(newIcon);
            }

            // Rotate "bolt" shell for mechanical feel
            if (boltShell) {
              boltShell.style.transition = 'transform 300ms ease';
              boltShell.style.transform = panel.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(90deg)';
              boltShell.style.boxShadow = panel.classList.contains('hidden') ? '0 0 0 0 rgba(186,12,47,0)' : '0 0 0 2px rgba(186,12,47,0.3)';
            }
          });

          // Hover glow ring
          btn.addEventListener('mouseenter', () => {
            const boltShell = btn.querySelector('span[style*="polygon"]');
            if (boltShell) boltShell.style.boxShadow = '0 0 0 2px rgba(186,12,47,0.3)';
          });
          btn.addEventListener('mouseleave', () => {
            const panel = btn.parentElement.querySelector('[data-acc-panel]');
            const boltShell = btn.querySelector('span[style*="polygon"]');
            if (boltShell && panel.classList.contains('hidden')) {
              boltShell.style.boxShadow = '0 0 0 0 rgba(186,12,47,0)';
            }
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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-sm bg-[#BA0C2F] grid place-items-center shadow-lg shadow-[#BA0C2F]/20 ring-1 ring-white/10">
<span className="text-[11px] tracking-tight font-semibold" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>MB</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm tracking-tight" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>MELFRED BORZALL</span>
<span className="text-[11px] text-white/60" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>American Manufacturing • Est. 1946</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<a className="text-white/80 hover:text-white transition" href="#benefits">Benefits</a>
<a className="text-white/80 hover:text-white transition" href="#preview">Preview</a>
<a className="text-white/80 hover:text-white transition" href="#faq">FAQ</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-md bg-[#BA0C2F] hover:bg-black transition-colors px-3.5 py-2 text-sm font-medium shadow-lg shadow-[#BA0C2F]/20 ring-1 ring-white/10" href="#cta" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-4 h-4" data-lucide="ticket"></i>
          Reserve Seat
        </a>
</div>
</header>

<section className="relative">
<div className="absolute inset-0">
<img alt="HDD drilling rig in action" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90"></div>
<div className="absolute inset-0 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(transparent 0, rgba(255,255,255,0.06) 1px), radial-gradient(transparent 0, rgba(255,255,255,0.06) 1px)', backgroundSize: '24px 24px', backgroundPosition: '0 0, 12px 12px'}}></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-24">

<div className="flex items-center gap-3 mb-6">
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-3.5 h-3.5" data-lucide="factory"></i>
            Built by Pros. Made in USA.
          </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
            Field-Tested
          </span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>
          FREE HDD 101 — <span className="text-[#BA0C2F]">First 300 Seats</span>
</h1>

<p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
          Learn horizontal directional drilling fundamentals from the ground up. Fast, practical, and built for crews who get it done.
        </p>

<div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">

<div className="inline-flex items-center gap-3 rounded-md bg-white/5 backdrop-blur px-4 py-2.5 ring-1 ring-white/10">

<div className="relative">
<svg className="w-5 h-5 text-[#BA0C2F] animate-spin" fill="none" style={{animationDuration: '4.5s'}} viewbox="0 0 24 24">
<path d="M12 2c2 2 3 4 3 6s-1 4-3 6-3 4-3 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M9 20h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M11 4l2 2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex items-baseline gap-2">
<span className="text-white/70 text-xs" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Seats Left</span>
<span className="text-2xl font-semibold tracking-tight" id="seatsLeft" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>300</span>
<span className="text-white/40 text-xs" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>/ 300</span>
</div>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-[#BA0C2F] hover:bg-black transition-colors px-6 py-3 text-sm font-semibold shadow-lg shadow-[#BA0C2F]/20 ring-1 ring-white/10" href="#cta" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-4 h-4 mr-2" data-lucide="send"></i>
              Reserve Free Seat
            </a>
<a className="inline-flex items-center justify-center rounded-md bg-transparent hover:bg-white/5 transition-colors px-6 py-3 text-sm font-medium ring-1 ring-white/15" href="#preview" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-4 h-4 mr-2" data-lucide="play"></i>
              Watch Preview
            </a>
</div>
</div>

<div className="absolute right-4 sm:right-8 top-6 sm:top-10">
<div className="relative">
<span className="absolute inset-0 rounded-full bg-[#BA0C2F]/40 animate-ping"></span>
<div className="relative grid place-items-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#BA0C2F] ring-1 ring-white/10 shadow-lg shadow-[#BA0C2F]/30">
<div className="text-center leading-tight">
<div className="text-xl font-semibold tracking-tight" id="daysLeft" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>14</div>
<div className="text-[10px] uppercase" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Days Left</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-18 border-t border-white/10 bg-neutral-950" id="benefits">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

<div className="group relative rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-6 hover:ring-[#BA0C2F]/40 transition">
<div className="absolute inset-0 rounded-lg" style={{background: 'radial-gradient(120px 60px at 15% 15%, rgba(255,255,255,0.06), transparent 60%)'}}></div>
<div className="flex items-center gap-4">
<div className="relative w-14 h-14 rounded-md bg-gradient-to-b from-neutral-800 to-neutral-900 ring-1 ring-white/10 flex items-center justify-center">

<span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-neutral-700 ring-1 ring-black/50"></span>
<span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-neutral-700 ring-1 ring-black/50"></span>
<span className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-neutral-700 ring-1 ring-black/50"></span>
<span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-neutral-700 ring-1 ring-black/50"></span>
<div className="relative flex items-center gap-1.5">
<i className="w-5 h-5 text-white/90" data-lucide="timer"></i>
<i className="w-5 h-5 text-[#BA0C2F]" data-lucide="play"></i>
</div>
</div>
<div>
<div className="text-lg tracking-tight font-semibold" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>Learn Fast</div>
<p className="text-sm text-white/70" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Bite-sized modules, real crew footage, zero fluff.</p>
</div>
</div>
</div>

<div className="group relative rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-6 hover:ring-[#BA0C2F]/40 transition overflow-hidden">
<div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1544213456-b2dcf59bdd98?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="flex items-center gap-4">
<div className="relative w-14 h-14 rounded-md bg-gradient-to-b from-neutral-800 to-neutral-900 ring-1 ring-white/10 grid place-items-center">
<i className="w-6 h-6 text-white" data-lucide="award"></i>
</div>
<div>
<div className="text-lg tracking-tight font-semibold" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>Earn Creds</div>
<p className="text-sm text-white/70" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Get a certificate to show you’ve mastered the basics.</p>
</div>
</div>
</div>

<div className="group relative rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-6 hover:ring-[#BA0C2F]/40 transition">
<div className="flex items-center gap-4">
<div className="relative w-14 h-14 rounded-md bg-gradient-to-b from-neutral-800 to-neutral-900 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">

<img alt="BobbleFred" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30"></div>
<i className="relative w-6 h-6 text-[#BA0C2F]" data-lucide="wrench"></i>
</div>
<div>
<div className="text-lg tracking-tight font-semibold" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>Grab Free Swag</div>
<p className="text-sm text-white/70" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>First 300 get exclusive MB gear. Don’t miss it.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-20 border-t border-white/10" id="preview">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/60">
<div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent z-10"></div>
<img alt="Drill crew on site" className="w-full h-72 sm:h-[420px] object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>

<div className="absolute top-4 left-4 z-20">
<span className="inline-flex items-center gap-2 rounded-md bg-black/60 px-3 py-1.5 ring-1 ring-white/10">
<i className="w-4 h-4 text-[#BA0C2F]" data-lucide="badge-check"></i>
<span className="text-xs font-medium" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>HDD 101</span>
</span>
</div>

<button aria-label="Play 30-second preview" className="group absolute inset-0 grid place-items-center z-20">
<span className="relative">
<span className="absolute -inset-4 rounded-full bg-[#BA0C2F]/30 blur-xl opacity-60 group-hover:opacity-80 transition"></span>
<span className="grid place-items-center text-white">
<div className="w-16 h-16 md:w-20 md:h-20 bg-[#BA0C2F] ring-1 ring-white/20 shadow-lg shadow-[#BA0C2F]/30 hover:bg-black transition-colors" style={{clipPath: 'polygon(15% 0%, 85% 0%, 100% 35%, 50% 100%, 0% 35%)'}}>
<i className="w-7 h-7 md:w-8 md:h-8 mx-auto mt-4" data-lucide="play"></i>
</div>
</span>
</span>
</button>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-xs text-white/80" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Watch 30-sec preview</span>
</div>
</div>
</div>
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl tracking-tight mb-3" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>What you’ll master</h2>
<ul className="space-y-3 text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-[#BA0C2F]" data-lucide="target"></i>
                Reading the ground and shot planning
              </li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-[#BA0C2F]" data-lucide="compass"></i>
                Tooling, fluids, and steering fundamentals
              </li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-[#BA0C2F]" data-lucide="hard-hat"></i>
                Crew workflow and field safety
              </li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-[#BA0C2F]" data-lucide="shield"></i>
                Avoiding costly mistakes in the bore
              </li>
</ul>
<div className="mt-6 flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 text-xs rounded-md bg-white/5 ring-1 ring-white/10 px-2.5 py-1.5" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
                45–60 min
              </span>
<span className="inline-flex items-center gap-2 text-xs rounded-md bg-white/5 ring-1 ring-white/10 px-2.5 py-1.5" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-3.5 h-3.5" data-lucide="file-badge"></i>
                Completion certificate
              </span>
<span className="inline-flex items-center gap-2 text-xs rounded-md bg-white/5 ring-1 ring-white/10 px-2.5 py-1.5" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-3.5 h-3.5" data-lucide="trophy"></i>
                Free swag (first 300)
              </span>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-md bg-[#BA0C2F] hover:bg-black transition-colors px-5 py-3 text-sm font-semibold shadow-lg shadow-[#BA0C2F]/20 ring-1 ring-white/10" href="#cta" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-4 h-4" data-lucide="ticket"></i>
                Claim my free seat
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-20 border-t border-white/10" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<h3 className="text-2xl sm:text-3xl tracking-tight mb-6" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>Frequently Asked Questions</h3>
<div className="space-y-3">

<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<button className="w-full flex items-center justify-between bg-black px-4 sm:px-5 py-4 text-left hover:ring-1 hover:ring-[#BA0C2F]/50 transition" data-acc-btn="">
<span className="text-sm sm:text-base font-medium text-white" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Who should take HDD 101?</span>
<span className="ml-4 shrink-0">
<span className="relative inline-grid place-items-center w-8 h-8" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.15)'}}>
<i className="w-4 h-4 text-white transition-transform" data-lucide="plus"></i>
</span>
</span>
</button>
<div className="hidden bg-neutral-900/70 px-4 sm:px-5 py-4 border-t border-white/10" data-acc-panel="">
<p className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                New crew members, ops managers, and anyone needing a fast, practical primer on HDD fundamentals.
              </p>
</div>
</div>

<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<button className="w-full flex items-center justify-between bg-black px-4 sm:px-5 py-4 text-left hover:ring-1 hover:ring-[#BA0C2F]/50 transition" data-acc-btn="">
<span className="text-sm sm:text-base font-medium text-white" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>How long is the course?</span>
<span className="ml-4 shrink-0">
<span className="relative inline-grid place-items-center w-8 h-8" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.15)'}}>
<i className="w-4 h-4 text-white transition-transform" data-lucide="plus"></i>
</span>
</span>
</button>
<div className="hidden bg-neutral-900/70 px-4 sm:px-5 py-4 border-t border-white/10" data-acc-panel="">
<p className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                Plan for 45–60 minutes including quick checks and a completion quiz.
              </p>
</div>
</div>

<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<button className="w-full flex items-center justify-between bg-black px-4 sm:px-5 py-4 text-left hover:ring-1 hover:ring-[#BA0C2F]/50 transition" data-acc-btn="">
<span className="text-sm sm:text-base font-medium text-white" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Do I get a certificate?</span>
<span className="ml-4 shrink-0">
<span className="relative inline-grid place-items-center w-8 h-8" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.15)'}}>
<i className="w-4 h-4 text-white transition-transform" data-lucide="plus"></i>
</span>
</span>
</button>
<div className="hidden bg-neutral-900/70 px-4 sm:px-5 py-4 border-t border-white/10" data-acc-panel="">
<p className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                Yes. Complete HDD 101 and download a certificate for your records.
              </p>
</div>
</div>

<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<button className="w-full flex items-center justify-between bg-black px-4 sm:px-5 py-4 text-left hover:ring-1 hover:ring-[#BA0C2F]/50 transition" data-acc-btn="">
<span className="text-sm sm:text-base font-medium text-white" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>How do the first 300 get swag?</span>
<span className="ml-4 shrink-0">
<span className="relative inline-grid place-items-center w-8 h-8" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.15)'}}>
<i className="w-4 h-4 text-white transition-transform" data-lucide="plus"></i>
</span>
</span>
</button>
<div className="hidden bg-neutral-900/70 px-4 sm:px-5 py-4 border-t border-white/10" data-acc-panel="">
<p className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                Reserve your seat and complete the course—details will be emailed to eligible participants.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="cta">
<div className="absolute inset-0">
<img alt="Close-up drill head" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
<div className="absolute inset-0 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(transparent 0, rgba(255,255,255,0.05) 1px), radial-gradient(transparent 0, rgba(255,255,255,0.05) 1px)', backgroundSize: '26px 26px', backgroundPosition: '0 0, 13px 13px'}}></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="max-w-2xl">
<h4 className="text-3xl sm:text-4xl tracking-tight mb-4" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>
            Seats are filling fast — Secure yours now!
          </h4>
<p className="text-white/80 mb-8 max-w-xl" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
            First 300 get in free and score exclusive gear. Lock in your spot today.
          </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-[#BA0C2F] hover:bg-black transition-colors px-6 py-3 text-sm font-semibold shadow-lg shadow-[#BA0C2F]/20 ring-1 ring-white/10" href="#" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-4 h-4 mr-2" data-lucide="rocket"></i>
              Reserve Free Seat
            </a>
<a className="inline-flex items-center justify-center rounded-md bg-transparent hover:bg-white/5 transition-colors px-6 py-3 text-sm font-medium ring-1 ring-white/15" href="#faq" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
<i className="w-4 h-4 mr-2" data-lucide="help-circle"></i>
              Questions?
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-sm bg-[#BA0C2F] grid place-items-center ring-1 ring-white/10">
<span className="text-[10px] tracking-tight font-semibold" style={{fontFamily: 'Oswald, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif'}}>MB</span>
</div>
<p className="text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>© <span id="year"></span> Melfred Borzall. All rights reserved.</p>
</div>
<div className="flex items-center gap-4">
<a className="text-xs text-white/60 hover:text-white transition" href="#" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Privacy</a>
<a className="text-xs text-white/60 hover:text-white transition" href="#" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Terms</a>
<a className="text-xs text-white/60 hover:text-white transition" href="#" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Contact</a>
</div>
</div>
</footer>



    </>
  );
}
