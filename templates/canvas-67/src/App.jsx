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



        lucide.createIcons();
        
        // Update clock
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            document.getElementById('clock').textContent = `${hours}:${minutes}`;
        }
        updateClock();
        setInterval(updateClock, 1000);
        
        // Canvas panning
        const canvasContainer = document.getElementById('canvasContainer');
        const canvas = document.getElementById('canvas');
        
        let isPanning = false;
        let startX, startY, scrollLeft, scrollTop;
        
        canvasContainer.addEventListener('mousedown', (e) => {
            if (e.target.closest('.card')) return;
            isPanning = true;
            startX = e.pageX - canvasContainer.offsetLeft;
            startY = e.pageY - canvasContainer.offsetTop;
            scrollLeft = canvasContainer.scrollLeft;
            scrollTop = canvasContainer.scrollTop;
        });
        
        canvasContainer.addEventListener('mousemove', (e) => {
            if (!isPanning) return;
            e.preventDefault();
            const x = e.pageX - canvasContainer.offsetLeft;
            const y = e.pageY - canvasContainer.offsetTop;
            const walkX = (x - startX) * 1.5;
            const walkY = (y - startY) * 1.5;
            canvasContainer.scrollLeft = scrollLeft - walkX;
            canvasContainer.scrollTop = scrollTop - walkY;
        });
        
        canvasContainer.addEventListener('mouseup', () => {
            isPanning = false;
        });
        
        canvasContainer.addEventListener('mouseleave', () => {
            isPanning = false;
        });
        
        // Card dragging
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            let isDragging = false;
            let currentX, currentY, initialX, initialY;
            
            card.addEventListener('mousedown', (e) => {
                isDragging = true;
                initialX = e.clientX - card.offsetLeft + canvasContainer.scrollLeft;
                initialY = e.clientY - card.offsetTop + canvasContainer.scrollTop;
                card.style.zIndex = '1000';
                e.stopPropagation();
            });
            
            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                currentX = e.clientX - initialX + canvasContainer.scrollLeft;
                currentY = e.clientY - initialY + canvasContainer.scrollTop;
                card.style.left = currentX + 'px';
                card.style.top = currentY + 'px';
            });
            
            document.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    card.style.zIndex = '1';
                }
            });
        });
        
        // Center canvas initially
        canvasContainer.scrollLeft = 0;
        canvasContainer.scrollTop = 0;
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between p-6 md:p-8">
<div className="flex items-center gap-1 text-black">
<span className="text-lg">☺✿</span>
<span className="font-medium text-base tracking-tight">ddd°agency</span>
<span className="text-lg">🏁</span>
</div>
<div className="hidden md:block text-black">
<p className="text-xl md:text-2xl font-normal tracking-tight">creative communications</p>
<p className="text-xl md:text-2xl font-normal tracking-tight">agency©</p>
</div>
<nav className="hidden lg:flex flex-col gap-1 text-black">
<a className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity" href="#">Company</a>
<a className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity" href="#">Solution</a>
<a className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity" href="#">Case</a>
<a className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity" href="#">Update</a>
</nav>
<a className="text-xl md:text-2xl font-medium tracking-tight text-black hover:opacity-70 transition-opacity" href="#">Contact us</a>
</header>

<footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8">
<div></div>
<div className="flex items-center gap-2 text-black">
<span className="text-xl md:text-2xl font-medium tracking-tight">Lviv</span>
<span className="text-sm font-normal text-neutral-600">UA</span>
<span className="text-xl md:text-2xl font-medium tracking-tight" id="clock">17:43</span>
</div>
<div className="flex items-center gap-1 text-black">
<span className="text-xl md:text-2xl font-medium tracking-tight">Eng</span>
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</footer>

<div className="canvas-container w-full h-full overflow-hidden" id="canvasContainer">
<div className="relative w-[6000px] h-[6000px]" id="canvas">

<div className="card absolute bg-white rounded-none shadow-lg" data-card="1" style={{left: '200px', top: '200px', width: '280px', height: '420px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-48 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="2" style={{left: '1100px', top: '350px', width: '260px', height: '240px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-32 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="3" style={{left: '2000px', top: '180px', width: '340px', height: '400px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-56 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="4" style={{left: '2900px', top: '450px', width: '200px', height: '300px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-40 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="5" style={{left: '350px', top: '1100px', width: '240px', height: '280px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-36 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="6" style={{left: '1350px', top: '1250px', width: '300px', height: '350px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-44 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="7" style={{left: '2300px', top: '1100px', width: '260px', height: '320px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-40 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="8" style={{left: '180px', top: '1900px', width: '180px', height: '260px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-32 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="9" style={{left: '900px', top: '2100px', width: '320px', height: '380px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-48 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="10" style={{left: '1800px', top: '2000px', width: '280px', height: '300px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-40 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="11" style={{left: '2700px', top: '1850px', width: '240px', height: '340px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-44 bg-neutral-100"></div>
</div>

<div className="card absolute bg-white rounded-none shadow-lg" data-card="12" style={{left: '1400px', top: '2800px', width: '260px', height: '280px'}}>
<div className="p-5">
<span className="text-base text-neutral-500 font-normal">card</span>
</div>
<div className="w-full h-36 bg-neutral-100"></div>
</div>
</div>
</div>


    </>
  );
}
