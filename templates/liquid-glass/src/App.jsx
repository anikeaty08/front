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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    const container = document.querySelector('.container');
    const cards = document.querySelectorAll('.glass');
    
    cards.forEach(card => {
      let isDragging = false;
      let startX, startY;
      let currentX = 0, currentY = 0;
      const defaultTransform = card.getAttribute('data-default-transform');

      card.addEventListener('mousedown', (e) => {
        isDragging = true;
        card.classList.add('dragging');
        card.style.zIndex = 1000;
        
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        
        // Calculate rotation based on horizontal displacement
        // Max rotation at ±200px displacement
        const rotation = (currentX / window.innerWidth) * 30; // Max 30 degrees rotation
        
        card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          card.classList.remove('dragging');
          
          // Reset position smoothly
          setTimeout(() => {
            card.style.zIndex = '';
            card.style.transform = defaultTransform;
            currentX = 0;
            currentY = 0;
          }, 100);
        }
      });

      // Touch events for mobile
      card.addEventListener('touchstart', (e) => {
        isDragging = true;
        card.classList.add('dragging');
        card.style.zIndex = 1000;
        
        const touch = e.touches[0];
        startX = touch.clientX - currentX;
        startY = touch.clientY - currentY;
      });

      document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const touch = e.touches[0];
        currentX = touch.clientX - startX;
        currentY = touch.clientY - startY;
        
        // Calculate rotation based on horizontal displacement
        const rotation = (currentX / window.innerWidth) * 30; // Max 30 degrees rotation
        
        card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;
      });

      document.addEventListener('touchend', () => {
        if (isDragging) {
          isDragging = false;
          card.classList.remove('dragging');
          
          // Reset position smoothly
          setTimeout(() => {
            card.style.zIndex = '';
            card.style.transform = defaultTransform;
            currentX = 0;
            currentY = 0;
          }, 100);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>
</div>
<div className="relative w-full max-w-7xl flex flex-col items-center justify-center gap-16">

<div className="text-center">
<h1 className="sm:text-7xl md:text-8xl text-6xl font-medium text-white tracking-tighter py-2" style={{maskImage: 'linear-gradient(130deg, transparent, black 55%, black 55%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 55%, black 55%, transparent)'}}>
        A new way to browse
      </h1>
</div>

<div className="container relative w-full flex items-center justify-center" style={{height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

<div className="glass" data-default-transform="rotate(-12deg) translateY(-8px)" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))', boxShadow: '0 25px 45px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1.25rem', margin: '0 -50px', transform: 'rotate(-12deg) translateY(-8px)', zIndex: '1', '--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)', filter: 'var(--fx-filter)', WebkitFilter: 'var(--fx-filter)'}}>
<div className="absolute inset-4 rounded-xl bg-gradient-to-br shadow-2xl overflow-hidden backdrop-blur-sm border-gradient before:rounded-xl from-neutral-900/95 to-neutral-950/95 text-neutral-100">
<div className="p-6 h-full flex flex-col">

<div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-br ring-1 ring-white/10 mb-4 shadow-lg from-neutral-800/80 to-neutral-900/80">
<svg className="h-4 w-4 text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-6 flex-1 text-neutral-300">
              "The attention to detail is phenomenal. Every interaction feels fluid and intentional. It's rare to find a team that truly understands both aesthetics and functionality."
            </p>

<div className="pt-4 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<img alt="Emma Wilson" className="h-7 w-7 rounded-full object-cover ring-2 ring-white/20 shadow-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eb366a2b-0e75-461b-a90d-4fa55013bfb1_320w.webp"/>
<div>
<div className="text-xs font-semibold text-neutral-100">Emma Wilson</div>
<div className="text-xs text-neutral-400">Creative Director, Studio Co.</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-semibold text-neutral-300">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass" data-default-transform="rotate(-4deg) translateY(0)" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08))', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1.25rem', margin: '0 -50px', transform: 'rotate(-4deg) translateY(0)', zIndex: '2', '--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)', filter: 'var(--fx-filter)', WebkitFilter: 'var(--fx-filter)'}}>
<div className="absolute inset-4 rounded-xl bg-gradient-to-br shadow-2xl overflow-hidden backdrop-blur-sm border-gradient before:rounded-xl from-neutral-900/98 to-neutral-950/98 text-neutral-100">
<div className="p-6 h-full flex flex-col">

<div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-br from-blue-950/80 to-cyan-950/80 ring-1 ring-blue-500/20 mb-4 shadow-lg">
<svg className="h-4 w-4 text-blue-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-6 flex-1 text-neutral-300">
              "Game-changing platform. The liquid glass aesthetic combined with powerful features creates an experience that's both beautiful and incredibly efficient. Highly recommend."
            </p>

<div className="pt-4 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<img alt="Alex Morrison" className="h-7 w-7 rounded-full object-cover ring-2 ring-white/20 shadow-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d0b8220b-c182-4e5d-ad78-ea11614e87fe_320w.webp"/>
<div>
<div className="text-xs font-semibold text-neutral-100">Alex Morrison</div>
<div className="text-xs text-neutral-400">CEO, TechVenture Inc.</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-semibold text-neutral-300">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass" data-default-transform="rotate(10deg) translateY(6px)" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))', boxShadow: '0 25px 45px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1.25rem', margin: '0 -50px', transform: 'rotate(10deg) translateY(6px)', zIndex: '1', '--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)', filter: 'var(--fx-filter)', WebkitFilter: 'var(--fx-filter)'}}>
<div className="absolute inset-4 rounded-xl bg-gradient-to-br shadow-2xl overflow-hidden backdrop-blur-sm border-gradient before:rounded-xl from-neutral-900/95 to-neutral-950/95 text-neutral-100">
<div className="p-6 h-full flex flex-col">

<div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-950/80 to-cyan-950/80 ring-1 ring-emerald-500/20 mb-4 shadow-lg">
<svg className="h-4 w-4 text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-6 flex-1 text-neutral-300">
              "Absolutely stunning design system. The glassmorphic elements feel premium without being overwhelming. Perfect balance of form and function that our users love."
            </p>

<div className="pt-4 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<img alt="Maya Patel" className="h-7 w-7 rounded-full object-cover ring-2 ring-white/20 shadow-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b69bdb4f-049a-4d93-bdb1-052c7a93b452_320w.webp"/>
<div>
<div className="text-xs font-semibold text-neutral-100">Maya Patel</div>
<div className="text-xs text-neutral-400">Lead Designer, Pixel Labs</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-semibold text-neutral-300">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="text-center max-w-md w-full px-4">
<h2 className="text-xl font-medium text-white mb-6">Join the Waitlist</h2>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border-white/5 border before:rounded-full text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all text-sm backdrop-blur-xl" placeholder="Enter your email" type="email"/>
<div className="inline-block group relative">
<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient text-sm font-medium text-white/80 hover:text-white tracking-tight bg-white/5 backdrop-blur-xl rounded-full before:rounded-full py-3 px-5 relative items-center justify-center gap-2" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}} type="submit">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="relative">Join Waitlist</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</form>
</div>
</div>


    </>
  );
}
