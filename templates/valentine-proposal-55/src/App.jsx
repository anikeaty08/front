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



        function sayYes() {
            const btnContainer = document.getElementById("buttons-container");
            const message = document.getElementById("message");
            
            // Graceful exit for buttons
            btnContainer.style.opacity = '0';
            btnContainer.style.transform = 'scale(0.95)';
            btnContainer.style.pointerEvents = 'none';
            
            setTimeout(() => {
                btnContainer.style.display = 'none';
                message.classList.remove('hidden');
                // Force reflow
                void message.offsetWidth;
                message.classList.remove('opacity-0', 'translate-y-4');
                spawnConfetti();
            }, 300);
        }

        function moveButton() {
            const btn = document.getElementById("no-btn");
            
            // Calculate safe area (viewport minus button size and padding)
            const padding = 20;
            const btnWidth = btn.offsetWidth;
            const btnHeight = btn.offsetHeight;
            const maxX = window.innerWidth - btnWidth - padding;
            const maxY = window.innerHeight - btnHeight - padding;
            
            const newX = Math.max(padding, Math.random() * maxX);
            const newY = Math.max(padding, Math.random() * maxY);

            // Use fixed positioning to escape the flex container smoothly
            btn.style.position = "fixed";
            btn.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
            btn.style.left = newX + "px";
            btn.style.top = newY + "px";
            
            // Dynamic icon change for fun
            const icons = ['solar:sad-circle-linear', 'solar:confounded-circle-linear', 'solar:expressionless-circle-linear'];
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            btn.querySelector('iconify-icon').setAttribute('icon', randomIcon);
        }

        function spawnConfetti() {
            const colors = ['#f43f5e', '#fb7185', '#fda4af', '#ffe4e6'];
            const duration = 3000;
            const end = Date.now() + duration;

            (function frame() {
                const particle = document.createElement('div');
                particle.innerHTML = '❤️';
                particle.style.position = 'fixed';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = '-20px';
                particle.style.fontSize = Math.random() * 20 + 10 + 'px';
                particle.style.zIndex = '100';
                particle.style.opacity = '1';
                particle.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
                particle.style.transition = 'top 2s ease-in, opacity 2s ease-in';
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.style.top = '105vh';
                    particle.style.opacity = '0';
                }, 50);

                setTimeout(() => particle.remove(), 2000);

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-300/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-pink-300/20 rounded-full blur-[120px] mix-blend-multiply"></div>
<div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-red-200/20 rounded-full blur-[80px] mix-blend-multiply"></div>
</div>
<main className="relative z-10 w-full max-w-[480px] p-6">
<div className="glass-panel smooth-shadow rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/10">

<div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-50 to-white border border-rose-100 flex items-center justify-center text-rose-500 shadow-sm mb-6">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>

<h1 className="font-dancing text-5xl md:text-6xl text-rose-600 drop-shadow-sm mb-3 leading-none">
                Alizay Rasool <span className="text-rose-400 text-4xl align-middle">❤️</span>
</h1>
<h2 className="text-lg font-light text-rose-900/60 tracking-tight mb-8">
                Will You Be My Valentine?
            </h2>

<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-rose-100 shadow-inner mb-8 group">
<img alt="Our Memory" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&amp;w=800&amp;auto=format&amp;fit=crop'" src="memory.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent pointer-events-none"></div>
</div>

<div className="w-full relative min-h-[64px] flex flex-col items-center justify-center">
<div className="flex items-center gap-4 transition-all duration-500" id="buttons-container">
<button className="group relative overflow-hidden bg-rose-500 text-white text-base font-normal py-3 px-8 rounded-full shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-32 flex justify-center items-center gap-2" onclick="sayYes()">
<span className="relative z-10">YES</span>
<iconify-icon className="relative z-10 text-white/90" icon="solar:heart-bold"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<button className="bg-white border border-rose-100 text-rose-500 text-base font-normal py-3 px-8 rounded-full shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 w-32 flex justify-center items-center gap-2 z-50" id="no-btn" onclick="moveButton()" onmouseover="moveButton()">
<span>NO</span>
<iconify-icon icon="solar:sad-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="hidden opacity-0 transform translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" id="message">
<div className="flex flex-col items-center gap-2">
<p className="text-3xl font-dancing text-rose-600">YAYYY 😍❤️</p>
<p className="text-sm font-normal text-rose-800/70 tracking-wide">I promise to love you forever Alizay 🌹💍</p>
</div>
</div>
</div>

<div className="mt-12 pt-6 border-t border-rose-100/60 w-full">
<p className="text-xs text-rose-900/30 font-light flex items-center justify-center gap-1.5">
                    Made with endless love by 
                    <span className="font-normal text-rose-900/50 tracking-tight">Muneeb ur Rehman</span>
<iconify-icon className="text-rose-300" icon="solar:heart-shine-linear"></iconify-icon>
</p>
</div>
</div>
</main>


    </>
  );
}
