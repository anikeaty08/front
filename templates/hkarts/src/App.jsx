import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Book Viewer Logic
        document.addEventListener('DOMContentLoaded', () => {
            const viewer = document.getElementById('book-viewer');
            const slides = document.querySelectorAll('.book-slide');
            const dots = document.querySelectorAll('.book-dot');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const amazonUrl = 'https://www.amazon.com/dp/B0GNK2769B';
            
            let currentIndex = 0;
            const totalSlides = slides.length;

            function updateViewer(index) {
                // Update Slides
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('slide-enter');
                        slide.classList.add('slide-active');
                    } else {
                        slide.classList.remove('slide-active');
                        slide.classList.add('slide-enter');
                    }
                });

                // Update Dots
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.replace('bg-white/20', 'bg-white');
                        dot.classList.replace('scale-75', 'scale-100');
                        dot.classList.remove('hover:bg-white/50');
                    } else {
                        dot.classList.replace('bg-white', 'bg-white/20');
                        dot.classList.replace('scale-100', 'scale-75');
                        dot.classList.add('hover:bg-white/50');
                    }
                });
            }

            // Navigation Events
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent opening Amazon link
                currentIndex = (currentIndex + 1) % totalSlides;
                updateViewer(currentIndex);
            });

            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateViewer(currentIndex);
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentIndex = index;
                    updateViewer(currentIndex);
                });
            });

            // Click entire viewer to go to Amazon
            viewer.addEventListener('click', () => {
                window.open(amazonUrl, '_blank', 'noopener,noreferrer');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 bg-pattern opacity-[0.04]"></div>

<div className="absolute -top-32 -left-32 w-96 h-96 border-[1px] border-white/5 rounded-full opacity-50"></div>
<div className="absolute -top-16 -left-16 w-64 h-64 border-[1px] border-white/5 rounded-full opacity-50"></div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 border-[1px] border-white/5 rounded-full opacity-50"></div>

<div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-[#e69b55]/10 blur-[120px] rounded-full"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] opacity-80"></div>
</div>

<header className="flex md:px-12 md:py-8 flex-shrink-0 z-20 w-full pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<a className="block hover:opacity-80 transition-opacity" href="/">
<img alt="HK Arts" className="md:h-12 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4caea15-df2d-4c6a-b584-e45729cce4f8_800w.png"/>
</a>
<div className="flex items-center">
<a className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-light text-neutral-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm" href="https://linktr.ee/hkarts.store" rel="noopener noreferrer" target="_blank">
      Follow Us
    </a>
</div>
</header>

<main className="flex-grow flex md:px-12 md:py-0 z-10 pt-8 pr-6 pb-8 pl-6 relative items-center justify-center">
<div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">


<div className="order-2 md:order-1 flex flex-col max-w-lg md:max-w-xl xl:max-w-2xl mx-auto md:mx-0">
<p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3 font-normal">
                    Premium Adult Coloring Book
                </p>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white mb-4 md:mb-5 leading-none drop-shadow-md">
                    Rajasthan
                </h1>
<p className="text-2xl md:text-3xl text-[#e69b55] font-normal mb-5 md:mb-6 leading-snug">
                    50 intricate designs inspired by architecture, culture, people, landscapes, and tradition.
                </p>
<p className="text-xl md:text-2xl text-neutral-300 mb-6 md:mb-8 font-light leading-relaxed">
                    Step into Rajasthan’s timeless beauty through a calming, culture-rich coloring journey. Designed for quiet focus, creative flow, and giftable elegance.
                </p>
<ul className="space-y-3 mb-8 md:mb-10">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#e69b55] mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-200 font-light">50 Rajasthan-inspired illustrations</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#e69b55] mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-200 font-light">Single-sided pages for clean coloring</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#e69b55] mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-200 font-light">Detailed, immersive, never overwhelming</span>
</li>
</ul>
<div className="">
<a className="inline-flex items-center justify-center bg-white text-black px-10 py-4 rounded-full text-lg font-normal tracking-wide hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10 w-full sm:w-auto" href="https://www.amazon.com/dp/B0GNK2769B" rel="noopener noreferrer" target="_blank">
                        Buy on Amazon
                    </a>
<p className="text-sm text-neutral-500 mt-4 text-center sm:text-left font-light">
                        Paperback and hardcover options available on Amazon.
                    </p>
</div>
</div>

<div className="order-1 md:order-2 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] mx-auto group relative">

<div className="relative w-full aspect-[3/4] rounded-sm sm:rounded-md cursor-pointer transition-transform duration-500 hover:scale-[1.015] shadow-2xl shadow-black" id="book-viewer">

<img alt="Rajasthan Cover" className="book-slide slide-active absolute inset-0 w-full h-full object-cover rounded-sm sm:rounded-md border border-white/10 bg-neutral-900 transition-all duration-500 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f61bb9ea-5f63-4abd-9b7b-099cb0698b2e_1600w.png"/>

<img alt="Sample Page 1" className="book-slide slide-enter absolute inset-0 w-full h-full object-cover rounded-sm sm:rounded-md border border-white/10 bg-neutral-900 transition-all duration-500 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1985f3fa-eaef-4aff-8c93-fe90af61c7bd_1600w.png"/>

<img alt="Sample Page 2" className="book-slide slide-enter absolute inset-0 w-full h-full object-cover rounded-sm sm:rounded-md border border-white/10 bg-neutral-900 transition-all duration-500 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6935b2af-4d4c-4e5a-99ce-1bd8dfee7592_1600w.png"/>

<img alt="Sample Page 3" className="book-slide slide-enter absolute inset-0 w-full h-full object-cover rounded-sm sm:rounded-md border border-white/10 bg-neutral-900 transition-all duration-500 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/520644c3-df4a-4d88-bb34-86e252da10bc_1600w.png"/>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 z-20" id="prev-btn">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 z-20" id="next-btn">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-sm sm:rounded-md z-10"></div>
</div>

<div className="flex justify-center gap-2 mt-6">
<button className="book-dot w-2 h-2 rounded-full bg-white transition-all duration-300 scale-100"></button>
<button className="book-dot w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 scale-75"></button>
<button className="book-dot w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 scale-75"></button>
<button className="book-dot w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 scale-75"></button>
</div>
<p className="text-sm text-center text-neutral-500 mt-3 font-light">Click to view on Amazon</p>
</div>
</div>
</main>

<footer className="w-full flex-shrink-0 text-center py-6 md:py-8 z-20 relative">
<p className="text-sm text-neutral-600 font-light tracking-wide">
            © 2026 HK Arts. All rights reserved.
        </p>
</footer>



    </>
  );
}
