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



tailwind.config = { darkMode: 'class' }



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons
      lucide.createIcons();

      // Mobile menu toggle
      const burgerMenuBtn = document.getElementById('burgerMenuBtn');
      const closeMenuBtn = document.getElementById('closeMenuBtn');
      const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

      burgerMenuBtn.addEventListener('click', () => {
          mobileMenuOverlay.classList.remove('hidden');
          mobileMenuOverlay.classList.add('flex');
          lucide.createIcons();
      });

      closeMenuBtn.addEventListener('click', () => {
          mobileMenuOverlay.classList.add('hidden');
          mobileMenuOverlay.classList.remove('flex');
      });

      // Close menu when clicking on a link
      mobileMenuOverlay.querySelectorAll('nav a').forEach(link => {
          link.addEventListener('click', () => {
              mobileMenuOverlay.classList.add('hidden');
              mobileMenuOverlay.classList.remove('flex');
          });
      });

      // Theme toggle
      const themeToggle = document.getElementById('themeToggle');
      const html = document.documentElement;

      // Check for saved theme preference or default to light
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          html.classList.add('dark');
      }

      themeToggle.addEventListener('click', () => {
          html.classList.toggle('dark');
          const isDark = html.classList.contains('dark');
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
          lucide.createIcons();
      });

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
      let startX, startY;
      let canvasX = -500, canvasY = -200;

      canvasContainer.addEventListener('mousedown', (e) => {
          if (e.target.closest('.card')) return;
          isPanning = true;
          startX = e.clientX - canvasX;
          startY = e.clientY - canvasY;
          canvasContainer.style.cursor = 'grabbing';
      });

      canvasContainer.addEventListener('mousemove', (e) => {
          if (!isPanning) return;
          canvasX = e.clientX - startX;
          canvasY = e.clientY - startY;
          canvas.style.left = canvasX + 'px';
          canvas.style.top = canvasY + 'px';
      });

      canvasContainer.addEventListener('mouseup', () => {
          isPanning = false;
          canvasContainer.style.cursor = 'grab';
      });

      canvasContainer.addEventListener('mouseleave', () => {
          isPanning = false;
          canvasContainer.style.cursor = 'grab';
      });

      // Card dragging
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
          let isDragging = false;
          let cardStartX, cardStartY;
          let cardOffsetX, cardOffsetY;

          card.addEventListener('mousedown', (e) => {
              e.stopPropagation();
              isDragging = true;
              card.style.zIndex = '100';
              card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';

              const rect = card.getBoundingClientRect();
              const canvasRect = canvas.getBoundingClientRect();

              cardOffsetX = e.clientX - rect.left;
              cardOffsetY = e.clientY - rect.top;
              cardStartX = rect.left - canvasRect.left;
              cardStartY = rect.top - canvasRect.top;

              document.addEventListener('mousemove', onCardMove);
              document.addEventListener('mouseup', onCardUp);
          });

          function onCardMove(e) {
              if (!isDragging) return;

              const canvasRect = canvas.getBoundingClientRect();
              const newX = e.clientX - canvasRect.left - cardOffsetX;
              const newY = e.clientY - canvasRect.top - cardOffsetY;

              card.style.left = newX + 'px';
              card.style.top = newY + 'px';
          }

          function onCardUp() {
              isDragging = false;
              card.style.zIndex = '1';
              card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              document.removeEventListener('mousemove', onCardMove);
              document.removeEventListener('mouseup', onCardUp);
          }
      });

      // Touch support for mobile
      canvasContainer.addEventListener('touchstart', (e) => {
          if (e.target.closest('.card')) return;
          isPanning = true;
          startX = e.touches[0].clientX - canvasX;
          startY = e.touches[0].clientY - canvasY;
      });

      canvasContainer.addEventListener('touchmove', (e) => {
          if (!isPanning) return;
          e.preventDefault();
          canvasX = e.touches[0].clientX - startX;
          canvasY = e.touches[0].clientY - startY;
          canvas.style.left = canvasX + 'px';
          canvas.style.top = canvasY + 'px';
      });

      canvasContainer.addEventListener('touchend', () => {
          isPanning = false;
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
      


<header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-start justify-between">

<div className="flex items-center gap-1">
<span className="text-base tracking-tight text-black dark:text-white font-normal">
          ☺✿ ddd°agency ✦✦
        </span>
</div>

<div className="hidden md:block">
<p className="text-3xl text-black dark:text-white tracking-tight font-medium">
          creative communications
        </p>
<p className="text-3xl text-black dark:text-white tracking-tight font-medium">
          agency©
        </p>
</div>

<nav className="hidden lg:flex flex-col text-3xl font-medium tracking-tight text-black dark:text-white">
<a className="hover:opacity-70 transition-opacity" href="#">Company</a>
<a className="hover:opacity-70 transition-opacity" href="#">Solution</a>
<a className="hover:opacity-70 transition-opacity" href="#">Case</a>
<a className="hover:opacity-70 transition-opacity" href="#">Update</a>
</nav>

<div className="hidden lg:block text-3xl font-medium tracking-tight text-black dark:text-white">
<a className="hover:opacity-70 transition-opacity" href="#">Contact us</a>
</div>

<button aria-label="Open menu" className="lg:hidden flex items-center justify-center w-10 h-10 text-black dark:text-white hover:opacity-70 transition-opacity" id="burgerMenuBtn">
<i className="w-7 h-7" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</header>

<div className="fixed inset-0 z-[60] bg-neutral-400 dark:bg-neutral-800 hidden flex-col transition-colors duration-300" id="mobileMenuOverlay">

<div className="px-6 py-6 flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="text-base tracking-tight text-black dark:text-white font-normal">
            ☺✿ ddd°agency ✦✦
          </span>
</div>
<button aria-label="Close menu" className="flex items-center justify-center w-10 h-10 text-black dark:text-white hover:opacity-70 transition-opacity" id="closeMenuBtn">
<i className="w-7 h-7" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<nav className="flex-1 flex flex-col items-center justify-center gap-6">
<a className="text-4xl font-medium tracking-tight text-black dark:text-white hover:opacity-70 transition-opacity" href="#">
          Company
        </a>
<a className="text-4xl font-medium tracking-tight text-black dark:text-white hover:opacity-70 transition-opacity" href="#">
          Solution
        </a>
<a className="text-4xl font-medium tracking-tight text-black dark:text-white hover:opacity-70 transition-opacity" href="#">
          Case
        </a>
<a className="text-4xl font-medium tracking-tight text-black dark:text-white hover:opacity-70 transition-opacity" href="#">
          Update
        </a>
<a className="text-4xl font-medium tracking-tight text-black dark:text-white hover:opacity-70 transition-opacity" href="#">
          Contact us
        </a>
</nav>

<div className="px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-xl font-medium tracking-tight text-black dark:text-white">
            Lviv
          </span>
<span className="text-sm font-medium text-black dark:text-white">UA</span>
</div>
<div className="flex items-center gap-4 text-xl font-medium tracking-tight text-black dark:text-white">
<span>Eng</span>
<i className="w-5 h-5" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<footer className="fixed bottom-0 left-0 right-0 z-50 px-6 py-6 flex items-end justify-between">
<div>
<button aria-label="Toggle theme" className="theme-toggle flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-all" id="themeToggle">
<i className="w-5 h-5 hidden dark:block" data-lucide="sun" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 block dark:hidden" data-lucide="moon" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="flex items-center gap-4">
<span className="text-3xl font-medium tracking-tight text-black dark:text-white">
          Lviv
        </span>
<span className="text-sm font-medium text-black dark:text-white">UA</span>
<span className="text-3xl font-medium tracking-tight text-black dark:text-white" id="clock">
          17:43
        </span>
</div>

<div className="flex items-center gap-4 text-3xl font-medium tracking-tight text-black dark:text-white cursor-pointer hover:opacity-70 transition-opacity">
<span>Eng</span>
<i className="w-6 h-6" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</div>
</footer>

<div className="canvas-container absolute inset-0 overflow-hidden" id="canvasContainer">
<div className="absolute" id="canvas" style={{width: '4000px', height: '4000px', left: '-500px', top: '-200px'}}>

<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="1" style={{left: '0px', top: '300px', width: '200px', height: '340px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>

<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="2" style={{left: '500px', top: '220px', width: '220px', height: '220px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>

<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="3" style={{left: '980px', top: '320px', width: '300px', height: '360px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>

<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="4" style={{left: '1380px', top: '350px', width: '120px', height: '200px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>

<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="5" style={{left: '320px', top: '740px', width: '200px', height: '140px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>

<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="6" style={{left: '700px', top: '600px', width: '180px', height: '200px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>

<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="7" style={{left: '1100px', top: '800px', width: '240px', height: '180px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="8" style={{left: '2200px', top: '300px', width: '180px', height: '280px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="9" style={{left: '2100px', top: '900px', width: '260px', height: '200px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="10" style={{left: '400px', top: '1500px', width: '220px', height: '300px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="11" style={{left: '1000px', top: '1400px', width: '160px', height: '240px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="12" style={{left: '1600px', top: '1550px', width: '200px', height: '180px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="13" style={{left: '2300px', top: '1350px', width: '280px', height: '220px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="14" style={{left: '100px', top: '2000px', width: '240px', height: '260px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="15" style={{left: '700px', top: '1900px', width: '180px', height: '320px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="16" style={{left: '1250px', top: '2050px', width: '200px', height: '200px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="17" style={{left: '1850px', top: '1950px', width: '150px', height: '280px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
<div className="card absolute bg-white dark:bg-neutral-700 shadow-sm" data-card="18" style={{left: '2400px', top: '1800px', width: '220px', height: '240px'}}>
<div className="p-4">
<span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
              card
            </span>
</div>
</div>
</div>
</div>


    </>
  );
}
