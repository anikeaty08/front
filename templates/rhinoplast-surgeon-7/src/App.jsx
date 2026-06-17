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

        // --- Custom Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        
        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Dot follows immediately
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Add hover effect for links and buttons
        const hoverElements = document.querySelectorAll('a, button, .cursor-pointer');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

        // Loop for smooth ring movement
        function cursorLoop() {
            // Lerp for ring
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
            
            requestAnimationFrame(cursorLoop);
        }
        cursorLoop();


        // --- Scroll Animation Logic ---
        const videoWrapper = document.getElementById('video-wrapper');
        const scrollHint = document.getElementById('scroll-hint');
        
        // State for smooth scrolling (Lerp)
        let currentScroll = 0;
        let targetScroll = 0;
        const ease = 0.05; 
        
        // Dimensions
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        const initialSize = 350; 
        
        window.addEventListener('resize', () => {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
        });

        function animateScroll() {
            targetScroll = window.scrollY;
            currentScroll += (targetScroll - currentScroll) * ease;
            
            // Offset logic: Animation starts after the Hero section (100vh)
            // So we subtract windowHeight from the scroll position for calculations
            const animationStart = windowHeight; 
            const activeScroll = currentScroll - animationStart;
            
            // If we are in the hero section, keep circle closed or hidden
            if (activeScroll < 0) {
                videoWrapper.style.width = `${initialSize}px`;
                videoWrapper.style.height = `${initialSize}px`;
                // Optional: Hide it if you don't want it visible until sticky part
                // But usually it's nice to see it ready.
            } else {
                // Determine progress within the scrollable main container
                // We want full expansion after scrolling about 1.5 screen heights past the start
                const maxScrollDist = windowHeight * 1.5;
                let progress = Math.min(Math.max(activeScroll / maxScrollDist, 0), 1);
                
                // Calculate size
                const finalSize = Math.sqrt(windowWidth**2 + windowHeight**2) * 1.5; // Multiply by 1.5 to ensure corners covered
                const currentSize = initialSize + (finalSize - initialSize) * progress;
                
                videoWrapper.style.width = `${currentSize}px`;
                videoWrapper.style.height = `${currentSize}px`;

                // Fade out scroll hint
                if(progress > 0.1) {
                    scrollHint.style.opacity = Math.max(1 - (progress - 0.1) * 5, 0);
                } else {
                    scrollHint.style.opacity = 1;
                }
            }

            requestAnimationFrame(animateScroll);
        }

        animateScroll();
    
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
      

<div id="cursor-dot"></div>
<div id="cursor-ring"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
<div className="text-2xl font-bold tracking-tight text-white uppercase">
            Kochol
        </div>
<button className="group space-y-1.5 p-2 hover:opacity-70 transition-opacity">
<span className="block w-8 h-[2px] bg-white group-hover:w-6 transition-all ml-auto"></span>
<span className="block w-6 h-[2px] bg-white transition-all ml-auto"></span>
</button>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-neutral-900">

<div className="absolute inset-0 z-0">

<img alt="Surgeon Background" className="w-full h-full object-cover opacity-60" src="https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
</div>
<div className="relative z-10 w-full h-full px-6 md:px-12 pt-20 flex flex-col justify-center">
<div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">

<div className="lg:col-span-8 flex flex-col justify-center space-y-8 lg:space-y-12 h-full pb-20 lg:pb-0">
<div>
<p className="text-indigo-400 font-medium tracking-widest text-sm md:text-base uppercase mb-4 md:mb-6">
                            A Millimetric Surgery
                        </p>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-white">
                            THE ART OF <br/>
<span className="text-neutral-200">RHINOPLASTY</span>
</h1>
</div>
<div className="max-w-xl">
<p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
                            Una obra escultórica que depende tanto de la precisión milimétrica como del sentido estético del cirujano.
                        </p>
</div>

<div className="pt-8">
<div className="relative group cursor-pointer w-24 h-24 md:w-32 md:h-32 rounded-full border border-indigo-500/50 hover:border-indigo-400 flex items-center justify-center transition-all duration-500 hover:scale-110 bg-black/20 backdrop-blur-sm">
<div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-ping opacity-20"></div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-white">Scroll</span>
<i className="w-4 h-4 text-white animate-bounce" data-lucide="arrow-down"></i>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-4 flex-col justify-end h-full pb-24 items-end">
<div className="relative group cursor-pointer">
<div className="overflow-hidden rounded-2xl border border-white/10 w-72 h-44 bg-neutral-800 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 fill-white text-white ml-1" data-lucide="play"></i>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3 justify-end text-neutral-300 group-hover:text-white transition-colors">
<span className="text-sm font-medium tracking-wide">Mirá la entrevista</span>
<i className="w-5 h-5" data-lucide="play-circle"></i>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="relative h-[400vh]" id="main-container">

<div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-white text-neutral-900">

<div className="absolute inset-0 flex flex-col items-center justify-center z-0 px-4">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-[30vw] xl:gap-[400px] w-full justify-center text-center">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter shrink-0 text-neutral-900">
                        WHO IS
                    </h1>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter shrink-0 text-neutral-900">
                        KOCHOL
                    </h1>
</div>
<div className="absolute bottom-12 md:bottom-20 text-center space-y-4" id="scroll-hint">
<p className="text-lg md:text-xl font-medium text-neutral-500 tracking-tight">
                        Descubre la apasionante historia detrás de este experto
                    </p>
</div>
</div>

<div className="absolute z-20 flex items-center justify-center overflow-hidden rounded-full shadow-2xl will-change-transform" id="video-wrapper" style={{width: '0px', height: '0px'}}>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/7579951/7579951-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</main>

<section className="relative bg-neutral-950 text-white py-32 px-6 md:px-12 z-30">
<div className="max-w-4xl mx-auto space-y-12">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1]">
                A vision for precision in modern surgery.
            </h2>
<div className="grid md:grid-cols-2 gap-12 text-lg text-neutral-400 leading-relaxed">
<p>
                    Dr. Kochol has revolutionized the approach to intricate medical procedures. By combining state-of-the-art technology with decades of hands-on experience, the gap between possibility and reality has been bridged.
                </p>
<p>
                    From the operating room to academic lecture halls, the commitment to excellence remains unwavering. Explore the methodology that defines a new era of medical care.
                </p>
</div>
<div className="pt-8">
<button className="group flex items-center gap-3 text-white font-medium text-xl hover:text-indigo-400 transition-colors">
                    Read Biography <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>


    </>
  );
}
