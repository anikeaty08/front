import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Carousel Logic
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide');
            const indicatorsContainer = document.getElementById('indicators');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const carousel = document.getElementById('carousel');
            
            let currentIndex = 0;
            const totalSlides = slides.length;
            let autoPlayInterval;
            const INTERVAL_TIME = 7000;

            // Generate Indicators
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = `h-1 rounded-full transition-all duration-500 ease-in-out ${index === 0 ? 'w-12 bg-amber-500' : 'w-4 bg-zinc-700 hover:bg-zinc-500'}`;
                dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                dot.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(dot);
            });
            
            const dots = indicatorsContainer.querySelectorAll('button');

            function updateCarousel() {
                slides.forEach((slide, index) => {
                    const img = slide.querySelector('img');
                    
                    if (index === currentIndex) {
                        slide.classList.remove('opacity-0');
                        slide.classList.add('opacity-100', 'slide-active');
                        slide.style.zIndex = '10';
                        
                        // Subtle zoom effect reset
                        img.classList.remove('scale-100');
                        img.classList.add('scale-105');
                        
                        dots[index].className = 'h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500';
                    } else {
                        slide.classList.remove('opacity-100', 'slide-active');
                        slide.classList.add('opacity-0');
                        slide.style.zIndex = '0';
                        
                        img.classList.remove('scale-105');
                        img.classList.add('scale-100');
                        
                        dots[index].className = 'h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500';
                    }
                });
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            }

            function goToSlide(index) {
                currentIndex = index;
                updateCarousel();
                resetInterval();
            }

            function startInterval() {
                autoPlayInterval = setInterval(nextSlide, INTERVAL_TIME);
            }

            function resetInterval() {
                clearInterval(autoPlayInterval);
                startInterval();
            }

            // Button controls
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });

            // Swipe controls
            let touchStartX = 0;
            let touchEndX = 0;

            carousel.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            carousel.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            function handleSwipe() {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) {
                    nextSlide();
                    resetInterval();
                }
                if (touchEndX > touchStartX + swipeThreshold) {
                    prevSlide();
                    resetInterval();
                }
            }

            // Initialize
            startInterval();
            
            // Trigger initial zoom effect on first load
            setTimeout(() => {
                slides[0].querySelector('img').classList.add('scale-105');
            }, 50);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 flex bg-gradient-to-b from-zinc-950/80 to-transparent w-full pt-8 pr-6 pb-8 pl-6 top-0 items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-diamond text-amber-500 w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
<span className="text-lg font-medium tracking-tight uppercase tracking-widest text-zinc-100">
                Infinite Luxury
            </span>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:flex text-lg text-zinc-300 hover:text-amber-500 transition-colors">Collection</button>
<button className="hidden md:flex text-lg text-zinc-300 hover:text-amber-500 transition-colors">Heritage</button>
<button className="text-zinc-100 hover:text-amber-500 transition-colors p-2">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="relative w-full h-screen" id="carousel">

<div className="relative w-full h-full" id="slides-container">

<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 slide slide-active" style={{zIndex: '10'}}>
<div className="z-10 bg-zinc-950/30 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-start items-end p-6 pt-28 md:p-16 md:pt-32 lg:pr-24 pointer-events-none">
</div>
<img alt="Vintage 1908 Car" className="object-center transition-transform duration-[10000ms] ease-out origin-center w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-32 left-6 md:left-16 lg:left-24 z-20 w-full max-w-2xl pr-6 slide-content">
<span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">Lot No. 001</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">The 1908<br/>Scat Racer</h2>
<p className="text-lg text-zinc-400 mb-8 max-w-md">A masterclass in early 20th-century engineering. Preserved with uncompromised integrity.</p>
<button className="group flex items-center gap-3 text-lg font-medium text-zinc-100 hover:text-amber-500 transition-colors">
                        Explore provenance 
                        <span className="bg-amber-500/10 p-2 rounded-full group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 slide" style={{zIndex: '0'}}>
<div className="absolute inset-0 bg-zinc-950/40 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Classic Black Car" className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out origin-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-32 left-6 md:left-16 lg:left-24 z-20 w-full max-w-2xl pr-6 slide-content">
<span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">Lot No. 042</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">Midnight<br/>Silhouette</h2>
<p className="text-lg text-zinc-400 mb-8 max-w-md">Flawless lines meet pure power in this definitive piece of automotive history.</p>
<button className="group flex items-center gap-3 text-lg font-medium text-zinc-100 hover:text-amber-500 transition-colors">
                        Explore provenance 
                        <span className="bg-amber-500/10 p-2 rounded-full group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 slide" style={{zIndex: '0'}}>
<div className="absolute inset-0 bg-zinc-950/30 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Vintage Car Detail" className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out origin-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-32 left-6 md:left-16 lg:left-24 z-20 w-full max-w-2xl pr-6 slide-content">
<span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">Private Collection</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">Unrivaled<br/>Craftsmanship</h2>
<p className="text-lg text-zinc-400 mb-8 max-w-md">Bespoke details finished in brass and leather, untouched by time.</p>
<button className="group flex items-center gap-3 text-lg font-medium text-zinc-100 hover:text-amber-500 transition-colors">
                        Explore provenance 
                        <span className="bg-amber-500/10 p-2 rounded-full group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-12 left-6 md:left-16 lg:left-24 z-30 flex items-center gap-8 w-full pr-12">
<div className="flex gap-3" id="indicators">

<button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button></div>
<div className="flex-1 h-px bg-zinc-800"></div>
<div className="flex gap-4 pr-6 md:pr-16 lg:pr-24">
<button className="text-zinc-400 hover:text-amber-500 transition-colors p-2 border border-zinc-800 rounded-full hover:border-amber-500/50 bg-zinc-950/50 backdrop-blur-sm" id="prev-btn">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="text-zinc-400 hover:text-amber-500 transition-colors p-2 border border-zinc-800 rounded-full hover:border-amber-500/50 bg-zinc-950/50 backdrop-blur-sm" id="next-btn">
<svg aria-hidden="true" className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</main>


    </>
  );
}
