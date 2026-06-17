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



        // INTRO ANIMATION LOGIC
        document.addEventListener('DOMContentLoaded', () => {
            const overlay = document.getElementById('intro-overlay');
            const w = window.innerWidth;
            const h = window.innerHeight;
            const cellSize = 60; // Size of each grid cell
            const cols = Math.ceil(w / cellSize);
            const rows = Math.ceil(h / cellSize);
            const total = cols * rows;

            // Calculate center
            const centerX = Math.floor(cols / 2);
            const centerY = Math.floor(rows / 2);

            let html = '';
            for(let i = 0; i < total; i++) {
                const x = i % cols;
                const y = Math.floor(i / cols);
                
                // Calculate distance from center for wave delay
                const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
                const delay = dist * 0.05; // 0.05s delay per unit distance

                html += `<div class="intro-cell" style="width:${cellSize}px; height:${cellSize}px;">
                    <span class="plus-anim" style="animation-delay: ${delay}s;">+</span>
                </div>`;
            }
            overlay.innerHTML = html;

            // Trigger exit after animation completes
            // Furthest distance approx
            const maxDist = Math.sqrt(Math.pow(cols/2, 2) + Math.pow(rows/2, 2));
            const maxDelay = maxDist * 0.05;
            
            setTimeout(() => {
                overlay.classList.add('intro-exit-anim');
            }, (maxDelay * 1000) + 600); // Wait for last plus to appear + small buffer
            
            // Remove from DOM after exit
            setTimeout(() => {
                overlay.style.display = 'none';
            }, (maxDelay * 1000) + 600 + 900); // + exit duration
        });

        // Custom Cursor Logic
        const cursor = document.getElementById('custom-cursor');
        const bodyElement = document.body;
        const gridLayer = document.getElementById('cursor-grid');

        document.addEventListener('mousemove', (e) => {
            // Update custom cursor
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            // Update grid mask position
            if(gridLayer) {
                gridLayer.style.setProperty('--x', e.clientX + 'px');
                gridLayer.style.setProperty('--y', e.clientY + 'px');
            }
        });

        // Add hover effect listeners to all clickable elements
        function updateClickableListeners() {
            const clickables = document.querySelectorAll('a, button, input, textarea, .clickable-element');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', () => bodyElement.classList.add('hovering-clickable'));
                el.addEventListener('mouseleave', () => bodyElement.classList.remove('hovering-clickable'));
            });
        }
        
        // Initial init
        updateClickableListeners();

        // Drag Scrolling for Team Section
        const slider = document.getElementById('team-slider');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active'); // active style is redundant with grabbing in css but kept for logic
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });

        function toggleNav() {
            const nav = document.getElementById('nav-overlay');
            const body = document.getElementById('app-body');
            
            if (nav.classList.contains('-translate-x-full')) {
                nav.classList.remove('-translate-x-full');
                body.style.overflow = 'hidden';
            } else {
                nav.classList.add('-translate-x-full');
                body.style.overflow = '';
            }
        }

        function toggleTheme(mode) {
            const body = document.getElementById('app-body');
            const bgDark = document.getElementById('bg-dark');
            const bgLight = document.getElementById('bg-light');
            const gridContainer = document.getElementById('grid-container');
            const gridLines = document.querySelectorAll('.grid-line');
            const mainTitle = document.getElementById('main-title');
            const navCta = document.getElementById('nav-cta');
            
            const navOverlay = document.getElementById('nav-overlay');
            const navGridContainer = document.getElementById('nav-grid-container');
            const navGridLines = document.querySelectorAll('.nav-grid-line');
            const navFooterBorder = document.querySelector('.nav-border-color');

            const btnDark = document.getElementById('btn-dark');
            const btnLight = document.getElementById('btn-light');
            const switcherContainer = document.getElementById('switcher-container');
            
            if (mode === 'light') {
                body.classList.remove('bg-gray-950', 'text-white', 'selection:bg-white/20', 'selection:text-white');
                body.classList.add('bg-white', 'text-gray-900', 'selection:bg-black/10', 'selection:text-black', 'light-mode');
                
                navOverlay.classList.remove('bg-gray-950', 'text-white');
                navOverlay.classList.add('bg-white', 'text-gray-900');
                
                bgDark.classList.remove('opacity-100');
                bgDark.classList.add('opacity-0');
                bgLight.classList.remove('opacity-0');
                bgLight.classList.add('opacity-100');

                gridContainer.classList.remove('border-white/5');
                gridContainer.classList.add('border-black/5');
                gridLines.forEach(line => {
                    line.classList.remove('border-white/5');
                    line.classList.add('border-black/5');
                });

                navGridContainer.classList.remove('border-white/5');
                navGridContainer.classList.add('border-black/5');
                navGridLines.forEach(line => {
                    line.classList.remove('border-white/5');
                    line.classList.add('border-black/5');
                });
                
                if(navFooterBorder) {
                    navFooterBorder.classList.remove('border-white/10');
                    navFooterBorder.classList.add('border-black/10');
                }

                mainTitle.classList.remove('text-white', 'mix-blend-overlay', 'opacity-90');
                mainTitle.classList.add('text-gray-950', 'opacity-[0.03]'); 

                navCta.classList.remove('bg-white', 'text-gray-950');
                navCta.classList.add('bg-gray-950', 'text-white');

                switcherContainer.classList.remove('border-white/10');
                switcherContainer.classList.add('border-black/10');

                btnDark.className = "clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 text-gray-400 hover:text-gray-900";
                btnLight.className = "clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 bg-white text-gray-900 shadow-sm border border-black/5";

            } else {
                body.classList.add('bg-gray-950', 'text-white', 'selection:bg-white/20', 'selection:text-white');
                body.classList.remove('bg-white', 'text-gray-900', 'selection:bg-black/10', 'selection:text-black', 'light-mode');
                
                navOverlay.classList.add('bg-gray-950', 'text-white');
                navOverlay.classList.remove('bg-white', 'text-gray-900');

                bgDark.classList.add('opacity-100');
                bgDark.classList.remove('opacity-0');
                bgLight.classList.add('opacity-0');
                bgLight.classList.remove('opacity-100');

                gridContainer.classList.add('border-white/5');
                gridContainer.classList.remove('border-black/5');
                gridLines.forEach(line => {
                    line.classList.add('border-white/5');
                    line.classList.remove('border-black/5');
                });

                navGridContainer.classList.add('border-white/5');
                navGridContainer.classList.remove('border-black/5');
                navGridLines.forEach(line => {
                    line.classList.add('border-white/5');
                    line.classList.remove('border-black/5');
                });

                if(navFooterBorder) {
                    navFooterBorder.classList.add('border-white/10');
                    navFooterBorder.classList.remove('border-black/10');
                }

                mainTitle.classList.add('text-white', 'mix-blend-overlay', 'opacity-90');
                mainTitle.classList.remove('text-gray-950', 'opacity-[0.03]');

                navCta.classList.add('bg-white', 'text-gray-950');
                navCta.classList.remove('bg-gray-950', 'text-white');

                switcherContainer.classList.add('border-white/10');
                switcherContainer.classList.remove('border-black/10');

                btnDark.className = "clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 bg-white/10 text-white shadow-sm";
                btnLight.className = "clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 text-white/40 hover:text-white";
            }
            
            updateClickableListeners();
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
      

<div id="intro-overlay"></div>

<div id="custom-cursor">
<div className="cursor-icon">
<iconify-icon height="24" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>

<div className="fixed inset-0 z-[100] w-full h-full bg-gray-950 text-white transform -translate-x-full transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col justify-between overflow-hidden" id="nav-overlay">
<div className="absolute inset-0 w-full h-full pointer-events-none px-6 md:px-12 z-0">
<div className="grid grid-cols-4 h-full border-x border-white/5 w-full mx-auto max-w-[1920px]" id="nav-grid-container">
<div className="border-r border-white/5 h-full hidden md:block nav-grid-line"></div>
<div className="border-r border-white/5 h-full hidden md:block nav-grid-line"></div>
<div className="border-r border-white/5 h-full hidden md:block nav-grid-line"></div>
<div className="hidden md:block"></div>
</div>
</div>
<div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-12">
<div className="flex justify-end items-start">
<button className="group clickable-element flex items-center gap-3 text-xs tracking-widest hover:opacity-70 transition-opacity uppercase" onclick="toggleNav()">
                    [ Close ]
                    <iconify-icon className="group-hover:rotate-90 transition-transform duration-500" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col items-center justify-center gap-2 md:gap-4 w-full">
<a className="clickable-element nav-item-blur text-[11vw] md:text-[8vw] leading-[0.9] font-normal tracking-tighter text-center select-none" href="#">
                    MISSION
                </a>
<a className="clickable-element nav-item-blur text-[11vw] md:text-[8vw] leading-[0.9] font-normal tracking-tighter text-center select-none" href="#">
                    PROJEKTE
                </a>
<div className="relative group">
<a className="clickable-element nav-item-blur text-[11vw] md:text-[8vw] leading-[0.9] font-normal tracking-tighter text-center select-none block" href="#">
                        TEAM
                    </a>
</div>
<a className="clickable-element nav-item-blur text-[11vw] md:text-[8vw] leading-[0.9] font-normal tracking-tighter text-center select-none" href="#contact" onclick="toggleNav()">
                    KONTAKT
                </a>
</div>
<div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10 nav-border-color">
<div className="text-xs font-light opacity-40">
                    © 2025 Orvia Heritage.
                </div>
<div className="flex items-center gap-10">
<a className="clickable-element group flex items-center gap-2 hover:opacity-100 opacity-60 transition-opacity" href="tel:+41441234567">
<span className="text-[11px] tracking-widest uppercase">Tel. +41 44 987 65 43</span>
</a>
<a className="clickable-element group flex items-center gap-2 hover:opacity-100 opacity-60 transition-opacity" href="mailto:contact@orvia.ch">
<span className="text-[11px] tracking-widest uppercase">hello@orvia.ch</span>
</a>
</div>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-screen z-0 transition-opacity duration-700 opacity-100 pointer-events-none overflow-hidden" id="bg-dark">
<div className="absolute top-0 w-full h-full bg-cover bg-center blur-md opacity-90" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8622f19d-a712-4ba3-84bb-4245196ff743_3840w.jpg\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<img alt="Lucerne Switzerland Night Aerial" className="w-full h-full object-cover opacity-100 scale-105 absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-gray-950"></div>
</div>
<div className="absolute top-0 left-0 w-full h-screen z-0 bg-[#F2F2F2] transition-opacity duration-700 opacity-0 pointer-events-none overflow-hidden" id="bg-light">
<div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white"></div>
</div>

<div className="fixed inset-0 z-[5] w-full h-full pointer-events-none mix-blend-overlay">
<div className="w-full h-full grid-bg transition-opacity duration-700" id="cursor-grid"></div>
</div>

<div className="fixed inset-0 z-10 w-full h-full pointer-events-none px-6 md:px-12">
<div className="grid grid-cols-4 h-full border-x border-white/5 w-full mx-auto max-w-[1920px] transition-colors duration-700" id="grid-container">
<div className="relative border-r border-white/5 h-full hidden md:block transition-colors duration-700 grid-line">
<span className="absolute top-1/2 -left-3 text-xs font-extralight text-current opacity-40 -rotate-90 tracking-widest transition-colors duration-700">01</span>
</div>
<div className="relative border-r border-white/5 h-full hidden md:block transition-colors duration-700 grid-line">
<span className="absolute bottom-32 -right-3 text-xs font-extralight text-current opacity-40 tracking-widest transition-colors duration-700">02</span>
</div>
<div className="relative border-r border-white/5 h-full hidden md:block transition-colors duration-700 grid-line">
<span className="absolute top-32 -left-3 text-xs font-extralight text-current opacity-40 tracking-widest transition-colors duration-700">03</span>
</div>
<div className="hidden md:block"></div>
</div>
</div>
<div className="relative z-20 w-full mx-auto max-w-[1920px]">

<section className="flex flex-col md:px-12 h-screen min-h-[700px] pt-8 pr-6 pb-8 pl-6 relative justify-between">
<div className="flex items-start justify-between w-full">
<div className="flex items-center gap-8 md:gap-12">
<button className="clickable-element group flex flex-col items-start gap-1.5 p-2 -ml-2 hover:opacity-70 transition-opacity z-30" onclick="toggleNav()">
<span className="w-8 h-[1px] bg-current block group-hover:w-10 transition-all duration-300"></span>
<span className="block group-hover:w-8 transition-all duration-300 delay-75 bg-current w-5 h-[1px]"></span>
</button>

<a className="clickable-element std-btn" href="#contact" id="nav-cta">
                        KONTAKT
                    </a>
</div>
<div className="flex items-center gap-1 text-xs md:text-sm font-extralight tracking-wide opacity-80">
<span className="font-light">EN</span>
<span className="opacity-50 mx-1">|</span>
<span className="clickable-element hover:opacity-100 transition-colors opacity-60">DE</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
<h1 className="text-[17vw] leading-none tracking-tighter font-normal text-white mix-blend-overlay opacity-90 select-none text-center transition-all duration-700" id="main-title">
                    ORVIA
                </h1>
</div>
<div className="w-full flex flex-col md:flex-row items-end justify-between gap-8 pb-4 md:pb-8">
<div className="max-w-lg">
<h2 className="leading-snug md:text-3xl text-xl font-light opacity-95 tracking-tight transition-colors duration-700">
                        Im Raum Zürich - Luzern entwickeln wir Wohneigentumsprojekte mit Charakter
                    </h2>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-60 animate-bounce duration-[2000ms]">
<span className="text-[10px] tracking-[0.2em] uppercase font-light">Scroll</span>
<iconify-icon className="opacity-80" height="24" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
<div className="flex items-center">
<div className="glass-panel p-1 rounded-full border border-white/10 flex items-center gap-1 transition-colors duration-500" id="switcher-container">
<button className="clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 bg-white/10 text-white shadow-sm" id="btn-dark" onclick="toggleTheme('dark')">
<iconify-icon height="18" icon="solar:moon-linear" width="18"></iconify-icon>
</button>
<button className="clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 text-white/40 hover:text-white" id="btn-light" onclick="toggleTheme('light')">
<iconify-icon height="18" icon="solar:sun-2-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative w-full py-24 px-6 md:px-12 border-t border-current/5 transition-colors duration-700">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 w-full mx-auto">
<div className="flex items-start gap-3 md:col-span-1 opacity-70">
<span className="mt-1.5 text-[10px]">
<iconify-icon height="12" icon="solar:stop-bold" width="12"></iconify-icon>
</span>
<span className="text-xs tracking-[0.2em] font-medium uppercase">Mission</span>
</div>
<div className="md:col-span-3 flex flex-col gap-16 md:pr-12 lg:pr-24">
<h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] md:leading-[1.1]">
                        Orvia is building exclusive Swiss residential heritage to invigorate the Zurich-Lucerne region with scalable, reliable, and character-driven architecture.
                    </h3>
<div className="max-w-2xl">
<p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                            Living space is the lifeblood of our community. Switzerland needs advanced development capability to unlock our most scalable and valuable cultural resources for future generations.
                        </p>
</div>
<div className="pt-4">
<button className="clickable-element std-btn theme-btn">
                            Learn More
                        </button>
</div>
</div>
</div>
</section>

<section className="w-full pt-16 pb-24 px-6 md:px-12 border-t border-current/5 bg-current/0 transition-colors duration-700">
<div className="flex items-start gap-3 opacity-70 mb-16">
<span className="mt-1.5 text-[10px]">
<iconify-icon height="12" icon="solar:stop-bold" width="12"></iconify-icon>
</span>
<span className="text-xs tracking-[0.2em] font-medium uppercase">Projekte</span>
</div>
<div className="flex flex-col border border-current/10 bg-current/[0.02]">

<div className="clickable-element grid grid-cols-1 md:grid-cols-2 border-b border-current/10 group project-card-hover cursor-none">
<div className="relative h-[280px] md:h-[450px] overflow-hidden border-b md:border-b-0 md:border-r border-current/10">
<img alt="Villa Küsnacht Interior" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="relative p-6 md:p-12 lg:p-16 flex flex-col justify-between">
<div className="w-full flex justify-between items-start mb-6">
<div>
<h3 className="text-3xl md:text-4xl font-light tracking-tight mb-2">Residenz Küsnacht</h3>
<p className="text-xs font-medium opacity-50 uppercase tracking-widest">7 Bedroom / 320 sq. m.</p>
</div>
<span className="text-4xl font-extralight opacity-30 tracking-tight">01</span>
</div>
<div className="max-w-md">
<p className="text-base md:text-lg font-light leading-relaxed opacity-80 mb-8">
                                Expansive living area, master suite with luxurious amenities, premium Swiss materials, and customizable spaces.
                            </p>
<button className="clickable-element std-btn theme-btn w-max text-xs">
<iconify-icon height="14" icon="solar:record-circle-linear" width="14"></iconify-icon>
                                Ansehen
                            </button>
</div>
<div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 text-sm font-light opacity-40">
                            2023
                        </div>
</div>
</div>

<div className="clickable-element grid grid-cols-1 md:grid-cols-2 border-b border-current/10 group project-card-hover cursor-none">
<div className="relative p-6 md:p-12 lg:p-16 flex flex-col justify-between order-2 md:order-1 border-t md:border-t-0 border-current/10">
<div className="w-full flex justify-between items-start mb-6">
<div>
<h3 className="text-3xl md:text-4xl font-light tracking-tight mb-2">Penthouse Zürichberg</h3>
<p className="text-xs font-medium opacity-50 uppercase tracking-widest">5 Bedroom / 180 sq. m.</p>
</div>
<span className="text-4xl font-extralight opacity-30 tracking-tight">02</span>
</div>
<div className="max-w-md">
<p className="text-base md:text-lg font-light leading-relaxed opacity-80 mb-8">
                                Experience the allure of urban living with panoramic cityscape vistas at the Zürichberg Penthouse.
                            </p>
<button className="clickable-element std-btn theme-btn w-max text-xs">
<iconify-icon height="14" icon="solar:record-circle-linear" width="14"></iconify-icon>
                                Ansehen
                            </button>
</div>
<div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 text-sm font-light opacity-40">
                            2022
                        </div>
</div>
<div className="relative h-[280px] md:h-[450px] overflow-hidden order-1 md:order-2 border-l-0 md:border-l border-current/10">
<img alt="Penthouse Zurichberg" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>

<div className="clickable-element grid grid-cols-1 md:grid-cols-2 group project-card-hover cursor-none">
<div className="relative h-[280px] md:h-[450px] overflow-hidden border-b md:border-b-0 md:border-r border-current/10">
<img alt="Villa Lake Zurich" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="relative p-6 md:p-12 lg:p-16 flex flex-col justify-between">
<div className="w-full flex justify-between items-start mb-6">
<div>
<h3 className="text-3xl md:text-4xl font-light tracking-tight mb-2">Villa Seestrasse</h3>
<p className="text-xs font-medium opacity-50 uppercase tracking-widest">6 Bedroom / 410 sq. m.</p>
</div>
<span className="text-4xl font-extralight opacity-30 tracking-tight">03</span>
</div>
<div className="max-w-md">
<p className="text-base md:text-lg font-light leading-relaxed opacity-80 mb-8">
                                A modern masterpiece directly on the lake, combining raw concrete with warm wooden accents.
                            </p>
<button className="clickable-element std-btn theme-btn w-max text-xs">
<iconify-icon height="14" icon="solar:record-circle-linear" width="14"></iconify-icon>
                                Ansehen
                            </button>
</div>
<div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 text-sm font-light opacity-40">
                            2021
                        </div>
</div>
</div>
</div>

<div className="w-full flex justify-center mt-12">
<button className="clickable-element std-btn theme-btn w-auto px-8">
                    Alle Projekte
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="relative w-full pt-20 pb-24 px-6 md:px-12 border-t border-current/5 transition-colors duration-700 overflow-hidden">
<div className="absolute right-0 top-12 opacity-[0.03] select-none pointer-events-none mix-blend-overlay">
<h2 className="text-[22vw] leading-none tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-b from-current to-transparent">MEMBERS</h2>
</div>
<div className="flex items-start gap-3 opacity-70 mb-12 relative z-10">
<span className="mt-1.5 text-[10px]">
<iconify-icon height="12" icon="solar:stop-bold" width="12"></iconify-icon>
</span>
<span className="text-xs tracking-[0.2em] font-medium uppercase">Team</span>
</div>
<div className="relative w-full z-10">

<div className="flex overflow-x-auto gap-8 md:gap-24 pb-8 -mx-6 px-6 md:px-0 md:mx-0 custom-scrollbar select-none" id="team-slider">

<div className="flex flex-col md:flex-row items-center md:items-start gap-8 shrink-0 group">

<div className="clickable-element relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] overflow-hidden shadow-2xl bg-gray-800">
<img alt="Antoni Kunz" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 pointer-events-none" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

<a className="absolute bottom-4 right-4 group/mail flex items-center justify-end bg-white text-black rounded-full shadow-lg hover:bg-gray-100 mail-btn-anim overflow-hidden h-10 w-10 hover:w-[170px] cursor-none pr-1" href="mailto:antoni@orvia.ch">
<span className="opacity-0 group-hover/mail:opacity-100 whitespace-nowrap text-[11px] font-medium transition-opacity duration-300 delay-100 absolute left-4">antoni@orvia.ch</span>
<div className="w-8 h-8 flex items-center justify-center shrink-0 relative z-10">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</a>
</div>
<div className="flex flex-col pt-4 max-w-[240px]">
<span className="text-[10px] tracking-[0.2em] font-medium uppercase opacity-50 mb-2">CEO &amp; Founder</span>
<h3 className="text-4xl md:text-5xl font-light tracking-tight leading-none mb-6">
                                ANTONI<br/>KUNZ
                            </h3>
<div className="flex items-center gap-4 opacity-60">
<a className="clickable-element hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center md:items-start gap-8 shrink-0 group">
<div className="clickable-element relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] overflow-hidden shadow-2xl bg-gray-800">
<img alt="Daniel Tradams" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 pointer-events-none" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<a className="absolute bottom-4 right-4 group/mail flex items-center justify-end bg-white text-black rounded-full shadow-lg hover:bg-gray-100 mail-btn-anim overflow-hidden h-10 w-10 hover:w-[170px] cursor-none pr-1" href="mailto:daniel@orvia.ch">
<span className="opacity-0 group-hover/mail:opacity-100 whitespace-nowrap text-[11px] font-medium transition-opacity duration-300 delay-100 absolute left-4">daniel@orvia.ch</span>
<div className="w-8 h-8 flex items-center justify-center shrink-0 relative z-10">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</a>
</div>
<div className="flex flex-col pt-4 max-w-[240px]">
<span className="text-[10px] tracking-[0.2em] font-medium uppercase opacity-50 mb-2">Architect</span>
<h3 className="text-4xl md:text-5xl font-light tracking-tight leading-none mb-6">
                                DANIEL<br/>TRADAMS
                            </h3>
<div className="flex items-center gap-4 opacity-60">
<a className="clickable-element hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon></a>
<a className="clickable-element hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center md:items-start gap-8 shrink-0 group">
<div className="clickable-element relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] overflow-hidden shadow-2xl bg-gray-800">
<img alt="Grace Morgan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 pointer-events-none" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<a className="absolute bottom-4 right-4 group/mail flex items-center justify-end bg-white text-black rounded-full shadow-lg hover:bg-gray-100 mail-btn-anim overflow-hidden h-10 w-10 hover:w-[170px] cursor-none pr-1" href="mailto:grace@orvia.ch">
<span className="opacity-0 group-hover/mail:opacity-100 whitespace-nowrap text-[11px] font-medium transition-opacity duration-300 delay-100 absolute left-4">grace@orvia.ch</span>
<div className="w-8 h-8 flex items-center justify-center shrink-0 relative z-10">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</a>
</div>
<div className="flex flex-col pt-4 max-w-[240px]">
<span className="text-[10px] tracking-[0.2em] font-medium uppercase opacity-50 mb-2">UI Designer</span>
<h3 className="text-4xl md:text-5xl font-light tracking-tight leading-none mb-6">
                                GRACE<br/>MORGAN
                            </h3>
<div className="flex items-center gap-4 opacity-60">
<a className="clickable-element hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon></a>
<a className="clickable-element hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full pt-24 pb-12 px-6 md:px-12 border-t border-current/5 transition-colors duration-700 overflow-hidden" id="contact">
<div className="flex items-start gap-3 opacity-70 mb-16">
<span className="mt-1.5 text-[10px]">
<iconify-icon height="12" icon="solar:stop-bold" width="12"></iconify-icon>
</span>
<span className="text-xs tracking-[0.2em] font-medium uppercase">Kontakt</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
<div className="flex flex-col gap-10 order-2 md:order-1">
<div className="group relative">
<input className="clickable-element w-full bg-transparent border-b border-current/20 py-4 text-sm md:text-base focus:outline-none focus:border-current transition-colors placeholder:text-current/40 font-light" placeholder="Your Name" type="text"/>
</div>
<div className="group relative">
<input className="clickable-element w-full bg-transparent border-b border-current/20 py-4 text-sm md:text-base focus:outline-none focus:border-current transition-colors placeholder:text-current/40 font-light" placeholder="Your Email" type="email"/>
</div>
<div className="group relative">
<textarea className="clickable-element w-full bg-transparent border-b border-current/20 py-4 text-sm md:text-base focus:outline-none focus:border-current transition-colors placeholder:text-current/40 resize-none h-auto min-h-[60px] font-light" placeholder="Share your thoughts" rows="1"></textarea>
</div>
<div className="pt-8">
<button className="clickable-element std-btn theme-btn w-full md:w-auto">
                            SHARE YOUR FEEDBACK
                         </button>
</div>
</div>
<div className="relative flex flex-col justify-center items-center md:items-start text-center md:text-left order-1 md:order-2 w-full">
<div className="absolute inset-0 -top-20 -bottom-20 scale-125 md:scale-110 pointer-events-none opacity-30">
<svg className="w-full h-full stroke-current fill-none" strokeWidth="0.5" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M45.7,-76.3C58.9,-69.3,69.1,-58.3,77.3,-46.3C85.5,-34.3,91.7,-21.3,92.6,-8.1C93.5,5.1,89.1,18.5,81.3,29.9C73.5,41.3,62.3,50.7,50.4,58.3C38.5,65.9,25.9,71.7,12.7,73.5C-0.5,75.3,-14.3,73.1,-27.2,68.4C-40.1,63.7,-52.1,56.5,-62.3,46.8C-72.5,37.1,-80.9,24.9,-84.1,11.2C-87.3,-2.5,-85.3,-17.7,-77.8,-30.2C-70.3,-42.7,-57.3,-52.5,-44.6,-59.8C-31.9,-67.1,-19.5,-71.9,-6.2,-72.5C7.1,-73.1,23.1,-79.5,32.5,-83.3L45.7,-76.3Z" transform="translate(100 100)"></path>
</svg>
</div>
<div className="relative z-10 w-full break-words">
<h2 className="text-[12vw] md:text-[9vw] leading-[0.85] select-none font-normal tracking-tighter uppercase w-full">
<span className="relative block" style={{textShadow: '2px 0px 0px rgba(255, 0, 0, 0.4), -2px 0px 0px rgba(0,255,255,0.4)'}}>Contact</span>
<span className="relative block pl-[0.5em] mt-2" style={{textShadow: '2px 0px 0px rgba(255, 0, 0, 0.4), -2px 0px 0px rgba(0,255,255,0.4)'}}>
<span className="text-[0.6em] align-middle mr-2 font-light tracking-tighter opacity-70">————</span> US
                             </span>
</h2>
</div>
<p className="relative z-10 mt-12 max-w-sm text-sm md:text-base font-light opacity-60 leading-relaxed mx-auto md:mx-0 pl-0 md:pl-24">
                        It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!
                     </p>
</div>
</div>

<div className="mt-32 pt-12 border-t border-current/5">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="hover:opacity-100 transition-opacity">
<iconify-icon height="36" icon="simple-icons:archdaily" width="96"></iconify-icon>
</div>
<div className="hover:opacity-100 transition-opacity">
<iconify-icon height="36" icon="simple-icons:dezeen" width="96"></iconify-icon>
</div>
<div className="hover:opacity-100 transition-opacity">
<iconify-icon height="36" icon="simple-icons:vogue" width="96"></iconify-icon>
</div>
<div className="hover:opacity-100 transition-opacity">
<iconify-icon height="36" icon="simple-icons:designboom" width="96"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="relative w-full pt-12 pb-12 px-6 md:px-12 transition-colors duration-700 overflow-hidden flex flex-col justify-end">
<div className="w-full leading-none flex justify-center select-none pointer-events-none">
<h1 className="text-[26vw] font-semibold tracking-tighter text-current opacity-90 leading-[0.8] -mb-[0.05em] mix-blend-overlay">
                    ORVIA
                </h1>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 w-full border-t border-current/10 pt-8 mt-4 text-xs md:text-sm font-medium tracking-wide opacity-60">
<div className="flex items-end">
<span>©2025</span>
</div>
<div className="flex flex-col gap-1 md:items-start justify-end">
<a className="clickable-element hover:text-current hover:opacity-100 transition-colors" href="#">Impressum</a>
<a className="clickable-element hover:text-current hover:opacity-100 transition-colors" href="#">Datenschutz</a>
</div>
<div className="flex flex-col gap-1 md:items-start justify-end">
<a className="clickable-element hover:text-current hover:opacity-100 transition-colors" href="mailto:hello@orvia.ch">hello@orvia.ch</a>
<a className="clickable-element hover:text-current hover:opacity-100 transition-colors" href="tel:+41449876543">+41 44 987 65 43</a>
</div>
<div className="flex flex-col gap-1 md:items-end justify-end text-left md:text-right">
<span>Bahnhofstrasse 10</span>
<span>8001 Zürich</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
