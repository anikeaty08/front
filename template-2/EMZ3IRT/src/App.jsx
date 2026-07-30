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
      
<div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 md:p-8" style={{backgroundImage: `radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.15), rgba(255, 255, 255, 0))`}}>

<header className="text-center z-10 mb-8 md:mb-12">
<div className="animate-fade-in-down" style={{opacity: `0`}}>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400">
                    Dimensional Artifacts
                </h1>
</div>
<div className="animate-fade-in-down" style={{opacity: `0`, animationDelay: `200ms`}}>
<p className="mt-3 max-w-xl mx-auto text-sm md:text-base font-light text-neutral-400">
                    A curated collection of digital constructs. Hover over an artifact to inspect its form.
                </p>
</div>
</header>

<div className="w-full max-w-7xl" style={{perspective: `2000px`}}>
<div className="group grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 transition-transform duration-[1500ms] ease-out" style={{transformStyle: `preserve-3d`, transform: `rotateX(12deg) rotateZ(-3deg)`}}>

<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `400ms`}}>
<img alt="3D Render 1" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1639762681057-408e52192e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `425ms`}}>
<img alt="3D Render 2" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1635805737704-5ca433329199?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `450ms`}}>
<img alt="3D Render 3" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `475ms`}}>
<img alt="3D Render 4" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1637420425895-97a23905c236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `500ms`}}>
<img alt="3D Render 5" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1618090584222-3438a45a3d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `525ms`}}>
<img alt="3D Render 6" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1617783422452-65295db61596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `550ms`}}>
<img alt="3D Render 7" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1632516643720-e7f5d7d608e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `575ms`}}>
<img alt="3D Render 8" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1665413791128-6c8483811a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `600ms`}}>
<img alt="3D Render 9" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1655185497013-db98aca06149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `625ms`}}>
<img alt="3D Render 10" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1655721529232-2fee3df36379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `650ms`}}>
<img alt="3D Render 11" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1618398182989-5d9b2f489a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `675ms`}}>
<img alt="3D Render 12" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1598977138706-53693333b2a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `700ms`}}>
<img alt="3D Render 13" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1664363492753-37015d781846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `725ms`}}>
<img alt="3D Render 14" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638389333735-a13c87383204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `750ms`}}>
<img alt="3D Render 15" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638272181966-d89505877189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `775ms`}}>
<img alt="3D Render 16" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1643101389814-a994c6f93d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `800ms`}}>
<img alt="3D Render 17" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1611141644833-19cd2b0d45a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `825ms`}}>
<img alt="3D Render 18" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1658193822256-78c53919e16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `850ms`}}>
<img alt="3D Render 19" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1636955845833-94f6c4436531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `875ms`}}>
<img alt="3D Render 20" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638483243534-3183959242ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `900ms`}}>
<img alt="3D Render 21" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1634733600149-a3fec13a4362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `925ms`}}>
<img alt="3D Render 22" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638184984605-e8b5a121957e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `950ms`}}>
<img alt="3D Render 23" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638259494921-1f9c2a658257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `975ms`}}>
<img alt="3D Render 24" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638555629163-9366f8185442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `1000ms`}}>
<img alt="3D Render 25" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638982325910-856b7c3a2a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `1025ms`}}>
<img alt="3D Render 26" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1655395340303-31a4731b05a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `1050ms`}}>
<img alt="3D Render 27" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638153678760-39f8244d3242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `1075ms`}}>
<img alt="3D Render 28" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1638202960018-936d73739e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `1100ms`}}>
<img alt="3D Render 29" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1637894121280-99c80101b072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
<div className="relative aspect-square animate-pop-in transition-all duration-500 ease-in-out group-hover:opacity-50 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:[transform:translateZ(80px)_scale(1.15)]" style={{transformStyle: `preserve-3d`, opacity: `0`, animationDelay: `1125ms`}}>
<img alt="3D Render 30" className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-cyan-400/20" src="https://images.unsplash.com/photo-1641424292193-955a8f4c7b8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
