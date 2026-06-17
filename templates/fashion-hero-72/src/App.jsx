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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        let currentSlide = 0;
        let slides = [];
        let totalSlides = 0;
        let slideInterval;
        const intervalTime = 5000;
        
        // Setup initial pagination
        function init() {
            slides = document.querySelectorAll('.slide');
            totalSlides = slides.length;
            const paginationContainer = document.getElementById('pagination-container');
            paginationContainer.innerHTML = '';
            
            for(let i=0; i<totalSlides; i++) {
                const btn = document.createElement('button');
                btn.onclick = () => goToSlide(i);
                btn.className = 'group relative h-1 w-12 rounded-full bg-white/20 overflow-hidden transition-all hover:bg-white/40';
                btn.innerHTML = `<div class="progress-bar-fill h-full bg-white rounded-full"></div>`;
                paginationContainer.appendChild(btn);
            }
            updateSlides();
            resetTimer();
            updateCheckIcons('fade'); // Default check
        }

        function updateSlides() {
            const progressBars = document.querySelectorAll('.progress-bar-fill');
            
            // Reset state
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            progressBars.forEach(bar => {
                bar.style.animation = 'none';
                bar.offsetHeight; /* trigger reflow */
                bar.style.width = '0%';
            });

            // Set Active
            if(slides[currentSlide]) {
                slides[currentSlide].classList.add('active');
                
                // Set progress bars for completed slides
                for(let i=0; i<currentSlide; i++) {
                    if(progressBars[i]) progressBars[i].style.width = '100%';
                }
                
                // Animate current bar
                if(progressBars[currentSlide]) {
                    progressBars[currentSlide].style.animation = `progress ${intervalTime}ms linear forwards`;
                }
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlides();
            resetTimer();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlides();
            resetTimer();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
            resetTimer();
        }

        function resetTimer() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        // --- Settings Panel Logic ---

        // Dropdown Toggle
        const dropdownBtn = document.getElementById('dropdown-trigger');
        const dropdownMenu = document.getElementById('dropdown-menu');
        
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdownMenu.classList.remove('open');
        });

        // Set Effect
        function setEffect(effect, label) {
            document.body.setAttribute('data-effect', effect);
            document.getElementById('current-effect-label').innerText = label;
            updateCheckIcons(effect);
        }

        function updateCheckIcons(selectedEffect) {
            const options = document.querySelectorAll('.effect-option');
            options.forEach(opt => {
                const icon = opt.querySelector('.check-icon');
                if (opt.getAttribute('onclick').includes(selectedEffect)) {
                    icon.classList.remove('opacity-0');
                } else {
                    icon.classList.add('opacity-0');
                }
            });
        }

        // Add Slide Functionality
        const newImages = [
            "https://images.unsplash.com/photo-1509631179647-b8d2175949e2?q=80&w=2576&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
        ];

        function addNewSlide() {
            const container = document.getElementById('slider-container');
            // Clone the first slide to keep structure
            const template = slides[0].cloneNode(true);
            
            // Randomize content for the new slide
            const randomImg = newImages[Math.floor(Math.random() * newImages.length)];
            const img = template.querySelector('img');
            img.src = randomImg;
            
            const title = template.querySelector('h1');
            title.innerHTML = "Defined by <br/> the unexpected.";
            
            const badge = template.querySelector('.inline-flex');
            badge.innerHTML = `<iconify-icon icon="lucide:zap" width="12" stroke-width="2"></iconify-icon> Flash Drop`;

            // Reset classes
            template.classList.remove('active');
            
            // Insert before controls (which are at the bottom of main)
            const controls = document.querySelector('.absolute.bottom-12');
            container.insertBefore(template, controls);
            
            // Re-init logic to pick up new slide
            init();
            
            // Go to the new slide immediately
            goToSlide(totalSlides - 1);
        }

        // Initialize
        init();

    
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
      

<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-black/20 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<span className="text-lg font-medium tracking-tighter"> iVISION.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
<a className="hover:text-white transition-colors" href="#">Collection</a>
<a className="hover:text-white transition-colors" href="#">Editorial</a>
<a className="hover:text-white transition-colors" href="#">Campaigns</a>
<a className="hover:text-white transition-colors" href="#">Stores</a>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
</div>
</div>
</nav>

<div className="fixed top-24 right-6 z-50 w-64 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl ring-1 ring-white/5">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Config</span>
<iconify-icon className="text-zinc-500" icon="lucide:settings-2" width="14"></iconify-icon>
</div>
<div className="space-y-4">

<div className="relative z-20">
<label className="text-xs text-zinc-400 font-medium mb-1.5 block">Transition Effect</label>
<button className="w-full h-9 px-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-sm text-zinc-200 hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/20" id="dropdown-trigger">
<span id="current-effect-label">Fade</span>
<iconify-icon className="text-zinc-500" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>

<div className="dropdown-menu absolute top-full left-0 w-full mt-2 bg-[#111] border border-white/10 rounded-lg overflow-hidden shadow-xl p-1" id="dropdown-menu">
<div className="effect-option cursor-pointer px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md flex items-center justify-between" onclick="setEffect('fade', 'Fade')">
                        Fade <iconify-icon className="check-icon text-white" icon="lucide:check" width="14"></iconify-icon>
</div>
<div className="effect-option cursor-pointer px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md flex items-center justify-between" onclick="setEffect('slide', 'Slide')">
                        Slide <iconify-icon className="check-icon text-white opacity-0" icon="lucide:check" width="14"></iconify-icon>
</div>
<div className="effect-option cursor-pointer px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md flex items-center justify-between" onclick="setEffect('scale', 'Scale')">
                        Scale <iconify-icon className="check-icon text-white opacity-0" icon="lucide:check" width="14"></iconify-icon>
</div>
<div className="effect-option cursor-pointer px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md flex items-center justify-between" onclick="setEffect('vertical', 'Vertical')">
                        Vertical <iconify-icon className="check-icon text-white opacity-0" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
</div>

<div>
<button className="group w-full h-9 rounded-lg bg-white text-black text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors active:scale-95" onclick="addNewSlide()">
<iconify-icon icon="lucide:plus" strokeWidth="2.5" width="14"></iconify-icon>
                    Add Slide
                </button>
</div>
</div>
</div>

<main className="relative h-screen w-full flex flex-col justify-center items-center bg-black" id="slider-container">

<div className="slide active">
<div className="slide-bg">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150 mix-blend-overlay"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center slide-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-200 text-xs font-medium mb-6 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                    Winter Collection '24
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white pb-2 drop-shadow-lg">
                    Orchestrate <br/>
                    the incredible.
                </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed drop-shadow-md">
                    Redefining modern aesthetics with precision tailoring and sustainable materials. The future of fashion is here.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group h-12 px-6 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                        View Lookbook
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="2.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-6 rounded-full border border-white/20 bg-black/20 text-white font-medium text-sm hover:bg-black/40 transition-colors backdrop-blur-md">
                        Our Story
                    </button>
</div>
</div>
</div>

<div className="slide">
<div className="slide-bg">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150 mix-blend-overlay"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center slide-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-200 text-xs font-medium mb-6 backdrop-blur-md">
<iconify-icon icon="lucide:sparkles" strokeWidth="2" width="12"></iconify-icon>
                   New Arrivals
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white pb-2 drop-shadow-lg">
                    Global style, <br/>
                    delivered locally.
                </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed drop-shadow-md">
                    Experience the texture of luxury. Designed in Milan, crafted for the world's most demanding wardrobes.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group h-12 px-6 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                        Shop Collection
                        <iconify-icon className="transition-transform group-hover:-rotate-12" icon="lucide:shopping-bag" strokeWidth="2.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-6 rounded-full border border-white/20 bg-black/20 text-white font-medium text-sm hover:bg-black/40 transition-colors backdrop-blur-md">
                        Find a Store
                    </button>
</div>
</div>
</div>

<div className="slide">
<div className="slide-bg">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150 mix-blend-overlay"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center slide-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-200 text-xs font-medium mb-6 backdrop-blur-md">
<iconify-icon icon="lucide:gem" strokeWidth="2" width="12"></iconify-icon>
                   Limited Edition
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white pb-2 drop-shadow-lg">
                    Beauty built <br/>
                    for the bold.
                </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed drop-shadow-md">
                    Uncompromising quality and visionary design. Join the movement that is changing the face of modern couture.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group h-12 px-6 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                        Pre-order Now
                        <iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="lucide:arrow-up-right" strokeWidth="2.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-6 rounded-full border border-white/20 bg-black/20 text-white font-medium text-sm hover:bg-black/40 transition-colors backdrop-blur-md">
                        Campaign
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-12 left-0 w-full z-20">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

<div className="flex gap-3" id="pagination-container"><button className="group relative h-1 w-12 rounded-full bg-white/20 overflow-hidden transition-all hover:bg-white/40"><div className="progress-bar-fill h-full bg-white rounded-full" style={{animation: '5000ms linear 0s 1 normal forwards running progress', width: '0%'}}></div></button><button className="group relative h-1 w-12 rounded-full bg-white/20 overflow-hidden transition-all hover:bg-white/40"><div className="progress-bar-fill h-full bg-white rounded-full" style={{animation: 'auto ease 0s 1 normal none running none', width: '0%'}}></div></button><button className="group relative h-1 w-12 rounded-full bg-white/20 overflow-hidden transition-all hover:bg-white/40"><div className="progress-bar-fill h-full bg-white rounded-full" style={{animation: 'auto ease 0s 1 normal none running none', width: '0%'}}></div></button></div>

<div className="flex gap-4">
<button className="w-10 h-10 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-zinc-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all active:scale-95" onclick="prevSlide()">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-zinc-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all active:scale-95" onclick="nextSlide()">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
</main>


    </>
  );
}
