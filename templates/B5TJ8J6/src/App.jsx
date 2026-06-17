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
      
      const menu = document.getElementById('menu');
      const listItems = Array.from(menu.querySelectorAll('li'));
      const inputField = menu.querySelector('input[type="text"]');
      const hue1 = document.getElementById('h1');
      const hue2 = document.getElementById('h2');
      const h1v = document.getElementById('h1v');
      const h2v = document.getElementById('h2v');

      function openMenuAt(x, y) {
        // Prepare for measurement (ensure it's not pointer-blocked)
        menu.classList.remove('pointer-events-none');
        // Size
        const rect = menu.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const padX = 20;
        const padY = 16;
        let nx = x, ny = y;
        if (nx + rect.width > vw - padX) nx = Math.max(padX, vw - rect.width - padX);
        if (ny + rect.height > vh - padY) ny = Math.max(padY, vh - rect.height - padY);
        menu.style.left = nx + 'px';
        menu.style.top = ny + 'px';

        // Animate in
        requestAnimationFrame(() => {
          menu.classList.remove('opacity-0', 'scale-[0.98]');
          menu.classList.add('opacity-100');
          menu.style.pointerEvents = 'auto';
        });
      }

      function closeMenu() {
        menu.classList.add('opacity-0', 'scale-[0.98]');
        menu.classList.remove('opacity-100');
        menu.style.pointerEvents = 'none';
        setTimeout(() => {
          if (document.activeElement === inputField) document.activeElement.blur();
          inputField.value = '';
          listItems.forEach(li => li.classList.remove('ring-1', 'ring-white/30', '!bg-white/[0.06]'));
        }, 200);
      }

      document.addEventListener('contextmenu', (e) => {
        const isInside = menu.contains(e.target);
        e.preventDefault();
        if (!isInside) openMenuAt(e.clientX, e.clientY);
      });

      document.addEventListener('pointerdown', (e) => {
        const inside = menu.contains(e.target);
        const isSlider = e.target.matches('input[type="range"]');
        if (!inside && !isSlider) closeMenu();
        if (inside) {
          const li = e.target.closest('li');
          if (li) {
            listItems.forEach(n => n.classList.remove('ring-1', 'ring-white/30', '!bg-white/[0.06]'));
            li.classList.add('ring-1', 'ring-white/30', '!bg-white/[0.06]');
          }
        }
      });

      function setHueVars() {
        document.body.style.setProperty('--hue1', hue1.value);
        document.body.style.setProperty('--hue2', hue2.value);
        h1v.textContent = hue1.value;
        h2v.textContent = hue2.value;
      }
      hue1.addEventListener('input', () => { setHueVars(); openMenuAt(menu.offsetLeft, menu.offsetTop); });
      hue2.addEventListener('input', () => { setHueVars(); openMenuAt(menu.offsetLeft, menu.offsetTop); });

      // Randomize initial hues
      const r1 = 120 + Math.floor(Math.random() * 240);
      const r2 = r1 - 80 + (Math.floor(Math.random() * 60) - 30);
      hue1.value = r1;
      hue2.value = Math.max(0, Math.min(360, r2));
      setHueVars();

      // Icons
      window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Accessibility: open with ⌘K / Ctrl+K
      window.addEventListener('keydown', (e) => {
        const cmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
        if (cmdK) {
          e.preventDefault();
          const centerX = Math.round(window.innerWidth / 2 - menu.getBoundingClientRect().width / 2);
          const centerY = Math.round(window.innerHeight / 3);
          openMenuAt(centerX, centerY);
          inputField.focus();
        }
        if (e.key === 'Escape') closeMenu();
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
      
<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-80" style={{backgroundImage: 'linear-gradient(120deg, hsl(var(--hue2) 70% 8% / 0.65), hsl(var(--hue1) 70% 8% / 0.65))'}}></div>
<div className="absolute inset-0 bg-center bg-cover mix-blend-overlay" style={{backgroundImage: 'var(--bg)', filter: 'saturate(1.1) contrast(1.05) brightness(0.9)'}}></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 20% -10%, hsl(var(--hue1) 70% 25% / 0.35), transparent 60%), radial-gradient(1000px 600px at 110% 110%, hsl(var(--hue2) 80% 25% / 0.3), transparent 60%)'}}></div>
<div className="absolute inset-0 backdrop-blur-[2px]"></div>
</div>
<main className="min-h-screen flex flex-col justify-between px-6 md:px-10 py-8" id="app">
<header className="max-w-3xl">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white/90">
          Neon Glass Context menu
        </h1>
<p className="text-sm md:text-base text-slate-400 mt-2">
          Right-click to open
        </p>
</header>
<footer className="mt-12 md:mt-0">
<div className="w-full md:max-w-xl ml-auto">
<h2 className="text-sm font-medium tracking-tight text-white/80 mb-3">Pick your own colors!</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="group block">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Hue 1</span>
<span className="text-xs text-slate-400 tabular-nums" id="h1v">255</span>
</div>
<input className="w-full appearance-none cursor-pointer rounded-full h-2 bg-slate-800/70 ring-1 ring-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60" id="h1" max="360" min="0" style={{accentColor: 'hsl(var(--hue1) 80% 60%)'}} type="range" value="255"/>
</label>
<label className="group block">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Hue 2</span>
<span className="text-xs text-slate-400 tabular-nums" id="h2v">222</span>
</div>
<input className="w-full appearance-none cursor-pointer rounded-full h-2 bg-slate-800/70 ring-1 ring-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60" id="h2" max="360" min="0" style={{accentColor: 'hsl(var(--hue2) 80% 60%)'}} type="range" value="222"/>
</label>
</div>
</div>
</footer>
</main>
<aside className="fixed top-36 left-4 z-50 w-[300px] md:w-[340px] opacity-0 scale-[0.98] pointer-events-none transition-all duration-300 ease-out" id="menu" style={{borderRadius: '22px', border: '1px solid hsl(var(--hue2) 12% 20% / 0.9)', background: 'linear-gradient(225deg, hsl(var(--hue1) 50% 10% / 0.45), hsl(var(--hue2) 50% 10% / 0.10) 40%), linear-gradient(0deg, rgba(8,10,15,0.66), rgba(8,10,12,0.66))', backdropFilter: 'blur(12px)', boxShadow: '0 10px 24px -12px hsl(var(--hue1) 50% 2% / 0.8), 0 22px 48px -18px hsl(var(--hue2) 50% 4% / 0.7)'}}>
<div className="relative p-3 md:p-4">
<span aria-hidden="" className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-[60px] blur-2xl mix-blend-screen opacity-70" style={{background: 'radial-gradient(60% 60% at 60% 40%, hsl(var(--hue1) 100% 65% / 0.45), transparent 60%)'}}></span>
<span aria-hidden="" className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-[60px] blur-2xl mix-blend-screen opacity-70" style={{background: 'radial-gradient(60% 60% at 50% 50%, hsl(var(--hue2) 100% 65% / 0.45), transparent 60%)'}}></span>
<span aria-hidden="" className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/10"></span>
<label className="relative flex items-center gap-2 rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/[0.06] transition-colors duration-200 group" style={{padding: '10px 12px'}}>
<i className="shrink-0 text-slate-400 group-hover:text-slate-300 transition-colors" data-lucide="search" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<input className="w-full bg-transparent outline-none placeholder:text-slate-500 text-slate-200 text-sm font-normal" placeholder="type a command or search" type="text"/>
<kbd className="ml-2 hidden sm:flex items-center gap-0.5 rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400 ring-1 ring-inset ring-white/10">⌘K</kbd>
</label>
<div className="mt-4 space-y-3">
<section className="space-y-2">
<header className="px-1 text-xs font-medium text-slate-400">Suggestions</header>
<ul className="space-y-1">
<li className="group flex items-center gap-2 rounded-lg ring-1 ring-transparent px-2 py-2 cursor-pointer transition-all duration-200" style={{background: 'linear-gradient(90deg, hsl(var(--hue1) 20% 15% / 0) 0%, hsl(var(--hue1) 35% 18% / 0.24) 22%, hsl(220 10% 8% / 0.25) 100%)'}}>
<i className="text-slate-300/80 group-hover:text-white transition-colors" data-lucide="calendar" style={{width: '18px', height: '18px', strokeWidth: '1.25'}}></i>
<span className="text-sm text-slate-200/90 group-hover:text-white">Calendar</span>
<span className="ml-auto inline-flex h-5 items-center rounded-md px-1.5 text-[10px] text-slate-400 ring-1 ring-inset ring-white/10 bg-white/5">C</span>
</li>
<li className="group flex items-center gap-2 rounded-lg ring-1 ring-transparent px-2 py-2 cursor-pointer transition-all duration-200 hover:ring-white/10 hover:bg-white/[0.04]">
<i className="text-slate-300/80 group-hover:text-white transition-colors" data-lucide="calculator" style={{width: '18px', height: '18px', strokeWidth: '1.25'}}></i>
<span className="text-sm text-slate-200/90 group-hover:text-white">Calculator</span>
<span className="ml-auto inline-flex h-5 items-center rounded-md px-1.5 text-[10px] text-slate-400 ring-1 ring-inset ring-white/10 bg-white/5">⌘⌥C</span>
</li>
<li className="group flex items-center gap-2 rounded-lg ring-1 ring-transparent px-2 py-2 cursor-pointer transition-all duration-200 hover:ring-white/10 hover:bg-white/[0.04]">
<i className="text-slate-300/80 group-hover:text-white transition-colors" data-lucide="messages-square" style={{width: '18px', height: '18px', strokeWidth: '1.25'}}></i>
<span className="text-sm text-slate-200/90 group-hover:text-white">Messages</span>
<span className="ml-auto inline-flex h-5 items-center rounded-md px-1.5 text-[10px] text-slate-400 ring-1 ring-inset ring-white/10 bg-white/5">M</span>
</li>
</ul>
</section>
<div className="h-px bg-white/10"></div>
<section className="space-y-2">
<header className="px-1 text-xs font-medium text-slate-400">Settings</header>
<ul className="space-y-1">
<li className="group flex items-center gap-2 rounded-lg ring-1 ring-transparent px-2 py-2 cursor-pointer transition-all duration-200 hover:ring-white/10 hover:bg-white/[0.04]">
<i className="text-slate-300/80 group-hover:text-white transition-colors" data-lucide="user" style={{width: '18px', height: '18px', strokeWidth: '1.25'}}></i>
<span className="text-sm text-slate-200/90 group-hover:text-white">Profile</span>
</li>
<li className="group flex items-center gap-2 rounded-lg ring-1 ring-transparent px-2 py-2 cursor-pointer transition-all duration-200 hover:ring-white/10 hover:bg-white/[0.04]">
<i className="text-slate-300/80 group-hover:text-white transition-colors" data-lucide="credit-card" style={{width: '18px', height: '18px', strokeWidth: '1.25'}}></i>
<span className="text-sm text-slate-200/90 group-hover:text-white">Billing</span>
</li>
</ul>
</section>
</div>
</div>
</aside>
<div className="fixed bottom-5 left-6 flex items-center gap-3">
<a className="text-[10px] tracking-tight text-white/60 hover:text-white/90 transition-colors inline-flex items-center gap-1 ring-1 ring-white/10 rounded-md px-2 py-1 bg-white/5" href="https://codepen.io/simeydotme" target="_blank">Made by Simey</a>
<a className="text-white/70 hover:text-white/90 transition-colors" href="https://twitter.com/simeydotme" target="_blank">
<i data-lucide="twitter" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</a>
<a className="text-white/70 hover:text-white/90 transition-colors" href="https://github.com/simeydotme" target="_blank">
<i data-lucide="github" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</a>
</div>


    </>
  );
}
