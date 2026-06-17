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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('review-track');
            const prevBtn = document.getElementById('prev-review');
            const nextBtn = document.getElementById('next-review');
            const slides = track.children;
            let currentIndex = 0;
            let autoSlideInterval;

            function getVisibleItems() {
                if (window.innerWidth >= 1024) return 3; // lg:w-1/3
                if (window.innerWidth >= 768) return 2;  // md:w-1/2
                return 1;                                // w-full
            }

            function updateSlider() {
                const itemWidth = slides[0].offsetWidth;
                track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }

            function nextSlide() {
                const visibleItems = getVisibleItems();
                if (currentIndex < slides.length - visibleItems) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Loop back
                }
                updateSlider();
            }

            function prevSlide() {
                const visibleItems = getVisibleItems();
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = slides.length - visibleItems; // Loop to end
                }
                updateSlider();
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

            // Auto-slide motion
            function startInterval() {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }

            function resetInterval() {
                clearInterval(autoSlideInterval);
                startInterval();
            }

            window.addEventListener('resize', () => {
                const visibleItems = getVisibleItems();
                if (currentIndex > slides.length - visibleItems) {
                    currentIndex = Math.max(0, slides.length - visibleItems);
                }
                updateSlider();
            });

            startInterval();
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
      

<nav className="w-full border-b border-white/5 bg-[#0A0C10] py-4 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-xl tracking-tight">
<span className="font-semibold text-[#F5A524]">VICKYNO</span>
<span className="font-medium text-white">TINT &amp; SOUND</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium">
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Services</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Reviews</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Why Us</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Contact</a>
</div>
<a className="px-5 py-2.5 text-base font-medium text-black bg-[#F5A524] hover:bg-[#E0931D] rounded-md transition-colors flex items-center gap-2" href="tel:9516978999">
<iconify-icon height="1.2em" icon="solar:phone-linear" width="1.2em"></iconify-icon>
                (951) 697-8999
            </a>
</div>
</nav>
<main className="flex-grow flex flex-col">

<section className="relative pt-32 pb-48 flex items-center min-h-[85vh]">

<div className="absolute inset-0 z-0">
<img alt="Car Dashboard" className="w-full h-full object-cover object-right" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10] via-[#0A0C10]/95 to-[#0A0C10]/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<div className="flex items-center gap-2 text-[#F5A524] text-sm font-medium uppercase tracking-wider mb-6">
<iconify-icon height="1.2em" icon="solar:volume-loud-linear" width="1.2em"></iconify-icon>
                        Moreno Valley's Trusted Auto Experts
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                        Premium Quality <br/>
<span className="text-[#F5A524]">Every Time.</span>
</h1>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-xl">
                        Expert window tinting, top-tier audio systems, car wraps, LED lights, and custom vehicle upgrades. Juan, Eduardo and the team deliver clean, efficient, and professional work for every vehicle.
                    </p>
<div className="flex items-center gap-4 mb-10">
<div className="flex gap-1 text-[#F5A524]">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-linear" width="1.2em"></iconify-icon>
</div>
<span className="text-base text-zinc-400 font-medium">4.2 / 5 — 143 Google Reviews</span>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="px-6 py-3.5 text-base font-medium text-black bg-[#F5A524] hover:bg-[#E0931D] rounded-md transition-colors flex items-center gap-2">
                            Get a Free Quote
                            <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</button>
<button className="px-6 py-3.5 text-base font-medium text-white border border-white/20 hover:bg-white/5 rounded-md transition-colors">
                            Call (951) 697-8999
                        </button>
</div>
</div>
</div>
</section>

<section className="bg-[#14161C] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-sm font-medium text-[#F5A524] uppercase tracking-wider block mb-3">What We Do</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                        Our <span className="text-[#F5A524]">Services</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#1B1E26] rounded-xl overflow-hidden border border-white/5 flex flex-col group">
<div className="h-48 relative overflow-hidden">
<img alt="Window Tinting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620065096515-c266814b62db?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B1E26] to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 bg-[#0A0C10] p-2 rounded-lg border border-white/10 text-[#F5A524]">
<iconify-icon height="1.2em" icon="solar:sun-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Window Tinting</h3>
<p className="text-base text-zinc-400 mb-6 flex-grow">Bubble-free, streak-free window tinting. Fast, efficient, and backed by warranty. We ensure high-quality optical clarity for your vehicle.</p>
<a className="text-[#F5A524] text-base font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                                Get Quote <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>

<div className="bg-[#1B1E26] rounded-xl overflow-hidden border border-white/5 flex flex-col group">
<div className="h-48 relative overflow-hidden">
<img alt="Stereo &amp; Audio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B1E26] to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 bg-[#0A0C10] p-2 rounded-lg border border-white/10 text-[#F5A524]">
<iconify-icon height="1.2em" icon="solar:music-note-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Auto Audio Systems</h3>
<p className="text-base text-zinc-400 mb-6 flex-grow">Custom speaker upgrades, subwoofers, double-din radios, and backup camera setups. High-end equipment at great prices.</p>
<a className="text-[#F5A524] text-base font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                                Get Quote <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>

<div className="bg-[#1B1E26] rounded-xl overflow-hidden border border-white/5 flex flex-col group">
<div className="h-48 relative overflow-hidden">
<img alt="Car Wraps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542316335-15aebf1b88e1?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B1E26] to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 bg-[#0A0C10] p-2 rounded-lg border border-white/10 text-[#F5A524]">
<iconify-icon height="1.2em" icon="solar:monitor-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Car Wraps &amp; LEDs</h3>
<p className="text-base text-zinc-400 mb-6 flex-grow">Take your vehicle to the next level with precision car wrapping and custom LED light installations that make your ride stand out.</p>
<a className="text-[#F5A524] text-base font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                                Get Quote <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>

<div className="bg-[#1B1E26] rounded-xl overflow-hidden border border-white/5 flex flex-col group">
<div className="h-48 relative overflow-hidden">
<img alt="Security" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B1E26] to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 bg-[#0A0C10] p-2 rounded-lg border border-white/10 text-[#F5A524]">
<iconify-icon height="1.2em" icon="solar:shield-check-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Alarms &amp; Remotes</h3>
<p className="text-base text-zinc-400 mb-6 flex-grow">Viper alarm installations, security enhancements, and remote reprogramming to keep your vehicle fully protected.</p>
<a className="text-[#F5A524] text-base font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                                Get Quote <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0C10] py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<span className="text-sm font-medium text-[#F5A524] uppercase tracking-wider block mb-3">Testimonials</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                            What Our <span className="text-[#F5A524]">Customers Say</span>
</h2>
<p className="text-lg text-zinc-400">143 reviews on Google with a 4.2-star average. Here's why our customers trust us.</p>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors z-10 relative" id="prev-review">
<iconify-icon height="1.5em" icon="solar:alt-arrow-left-linear" width="1.5em"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors z-10 relative" id="next-review">
<iconify-icon height="1.5em" icon="solar:alt-arrow-right-linear" width="1.5em"></iconify-icon>
</button>
</div>
</div>

<div className="relative -mx-3 px-3">
<div className="flex transition-transform duration-500 ease-in-out" id="review-track">

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex">
<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex flex-col relative w-full h-full">
<iconify-icon className="absolute top-8 right-8 text-[#F5A524]/20 w-10 h-10" icon="solar:chat-square-quote-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#272A33] flex items-center justify-center text-white font-medium text-lg">CP</div>
<div>
<h4 className="text-white font-medium text-base">Chef Paul R.</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-[#F5A524] bg-[#F5A524]/10 px-2 py-0.5 rounded">Local Guide</span>
</div>
</div>
</div>
<div className="flex gap-1 text-[#F5A524] mb-4">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-base text-zinc-400 leading-relaxed flex-grow">Always Mr Juan &amp; Team do the best. Great value &amp; very professional 👏🏽. They have done 3 cars for my family. Clean &amp; efficient always. And let's not forget about auto sound systems. Thank you Brother's.</p>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex">
<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex flex-col relative w-full h-full">
<iconify-icon className="absolute top-8 right-8 text-[#F5A524]/20 w-10 h-10" icon="solar:chat-square-quote-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#272A33] flex items-center justify-center text-white font-medium text-lg">CE</div>
<div>
<h4 className="text-white font-medium text-base">Chris Estrada</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-[#F5A524] bg-[#F5A524]/10 px-2 py-0.5 rounded">Local Guide</span>
</div>
</div>
</div>
<div className="flex gap-1 text-[#F5A524] mb-4">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-base text-zinc-400 leading-relaxed flex-grow">Came in because my fusion developed a rattle in the passenger door. Figured it was time to upgrade anyways. Vickyno treated me right!!! The car has separate tweeters, so a little more involved than normal.</p>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex">
<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex flex-col relative w-full h-full">
<iconify-icon className="absolute top-8 right-8 text-[#F5A524]/20 w-10 h-10" icon="solar:chat-square-quote-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#272A33] flex items-center justify-center text-white font-medium text-lg">MM</div>
<div>
<h4 className="text-white font-medium text-base">M Martinez</h4>
</div>
</div>
<div className="flex gap-1 text-[#F5A524] mb-4">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-base text-zinc-400 leading-relaxed flex-grow">Wow, Juan and Eduardo are the best, I love their attention, kindness and professionalism towards their clients! If you ever need window tinting, sound systems installation or any other similar services, please come here.</p>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex">
<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex flex-col relative w-full h-full">
<iconify-icon className="absolute top-8 right-8 text-[#F5A524]/20 w-10 h-10" icon="solar:chat-square-quote-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#272A33] flex items-center justify-center text-white font-medium text-lg">MF</div>
<div>
<h4 className="text-white font-medium text-base">Max Flores</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-[#F5A524] bg-[#F5A524]/10 px-2 py-0.5 rounded">Local Guide</span>
</div>
</div>
</div>
<div className="flex gap-1 text-[#F5A524] mb-4">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-base text-zinc-400 leading-relaxed flex-grow">I've gotten all my cars tinted at Vickyno Tint &amp; Sound. Great customer service. Great quality work and they never disappoint. Highly recommend coming here for tint or other sound services.</p>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex">
<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex flex-col relative w-full h-full">
<iconify-icon className="absolute top-8 right-8 text-[#F5A524]/20 w-10 h-10" icon="solar:chat-square-quote-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#272A33] flex items-center justify-center text-white font-medium text-lg">JA</div>
<div>
<h4 className="text-white font-medium text-base">Juan A</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-[#F5A524] bg-[#F5A524]/10 px-2 py-0.5 rounded">Local Guide</span>
</div>
</div>
</div>
<div className="flex gap-1 text-[#F5A524] mb-4">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-base text-zinc-400 leading-relaxed flex-grow">Great costumer service. Loved how my wrap came up. Did my window tint, got LED lights and got my car wrap. I recommend this place to anyone that wants a simple window tint or to take it to the next level.</p>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex">
<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex flex-col relative w-full h-full">
<iconify-icon className="absolute top-8 right-8 text-[#F5A524]/20 w-10 h-10" icon="solar:chat-square-quote-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#272A33] flex items-center justify-center text-white font-medium text-lg">CJ</div>
<div>
<h4 className="text-white font-medium text-base">Corey Jackson</h4>
</div>
</div>
<div className="flex gap-1 text-[#F5A524] mb-4">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-base text-zinc-400 leading-relaxed flex-grow">Since i got my first car (92 cutlass) in 2009 ive been going to Vickyno. Nobody else has touched my cars and I'm now on my 5th whip. Great people, Great work, Great management.</p>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex">
<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex flex-col relative w-full h-full">
<iconify-icon className="absolute top-8 right-8 text-[#F5A524]/20 w-10 h-10" icon="solar:chat-square-quote-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#272A33] flex items-center justify-center text-white font-medium text-lg">RB</div>
<div>
<h4 className="text-white font-medium text-base">Rainbow</h4>
</div>
</div>
<div className="flex gap-1 text-[#F5A524] mb-4">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-base text-zinc-400 leading-relaxed flex-grow">Recommend this place! I called about 2pm asking if they had time to tint my windows and front windshield, they said yes. Brought it in and was out in about 2 hours flat amazing service 🔥🔥🔥🔥</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#14161C] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-sm font-medium text-[#F5A524] uppercase tracking-wider block mb-3">The Difference</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                        Why Choose <span className="text-[#F5A524]">Vickyno</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex gap-5 items-start">
<div className="p-3.5 rounded-lg bg-[#0A0C10] border border-white/10 text-[#F5A524] shrink-0">
<iconify-icon height="1.5em" icon="solar:cup-star-linear" width="1.5em"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight text-white mb-2">Decades of Experience</h4>
<p className="text-base text-zinc-400 leading-relaxed">Trusted by the Inland Empire community for years. Juan, Eduardo &amp; the team know their craft inside out.</p>
</div>
</div>

<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex gap-5 items-start">
<div className="p-3.5 rounded-lg bg-[#0A0C10] border border-white/10 text-[#F5A524] shrink-0">
<iconify-icon height="1.5em" icon="solar:wrench-linear" width="1.5em"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight text-white mb-2">Expert Installation</h4>
<p className="text-base text-zinc-400 leading-relaxed">From simple window tinting to complex double din radios and Viper alarms. We use top-of-the-line techniques.</p>
</div>
</div>

<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex gap-5 items-start">
<div className="p-3.5 rounded-lg bg-[#0A0C10] border border-white/10 text-[#F5A524] shrink-0">
<iconify-icon height="1.5em" icon="solar:heart-linear" width="1.5em"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight text-white mb-2">Customer-First Service</h4>
<p className="text-base text-zinc-400 leading-relaxed">We provide honest recommendations, great prices, and make sure you leave entirely satisfied.</p>
</div>
</div>

<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex gap-5 items-start">
<div className="p-3.5 rounded-lg bg-[#0A0C10] border border-white/10 text-[#F5A524] shrink-0">
<iconify-icon height="1.5em" icon="solar:shield-check-linear" width="1.5em"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight text-white mb-2">Quality Warranty</h4>
<p className="text-base text-zinc-400 leading-relaxed">We stand behind our work. If something isn't right, like a tint bubble, our warranty process is quick and easy.</p>
</div>
</div>

<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex gap-5 items-start">
<div className="p-3.5 rounded-lg bg-[#0A0C10] border border-white/10 text-[#F5A524] shrink-0">
<iconify-icon height="1.5em" icon="solar:bolt-linear" width="1.5em"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight text-white mb-2">Complete Upgrades</h4>
<p className="text-base text-zinc-400 leading-relaxed">Experienced in comprehensive visual and audio upgrades. We do LEDs, wraps, cameras, and comprehensive audio.</p>
</div>
</div>

<div className="bg-[#1B1E26] border border-white/5 rounded-xl p-8 flex gap-5 items-start">
<div className="p-3.5 rounded-lg bg-[#0A0C10] border border-white/10 text-[#F5A524] shrink-0">
<iconify-icon height="1.5em" icon="solar:clock-circle-linear" width="1.5em"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight text-white mb-2">Fast Turnaround</h4>
<p className="text-base text-zinc-400 leading-relaxed">Efficient scheduling to fit your busy life. Many of our tint and radio installs are done within a couple of hours.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0C10] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-sm font-medium text-[#F5A524] uppercase tracking-wider block mb-3">Get in Touch</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                        Visit Us or <span className="text-[#F5A524]">Request a Quote</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

<div>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                            Stop by our shop in the Moreno Valley Commerce Center or give us a call for a free estimate. We're happy to walk you through options to upgrade your ride.
                        </p>
<div className="space-y-8 mb-10">
<div className="flex gap-4 items-start">
<div className="p-3 rounded-lg bg-[#1B1E26] border border-white/5 text-[#F5A524] shrink-0 mt-1">
<iconify-icon height="1.2em" icon="solar:map-point-linear" width="1.2em"></iconify-icon>
</div>
<div>
<h5 className="text-base font-medium text-white mb-1">23920 Alessandro Blvd Ste C</h5>
<p className="text-base text-zinc-500">Moreno Valley, CA 92553</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-3 rounded-lg bg-[#1B1E26] border border-white/5 text-[#F5A524] shrink-0 mt-1">
<iconify-icon height="1.2em" icon="solar:phone-linear" width="1.2em"></iconify-icon>
</div>
<div>
<h5 className="text-base font-medium text-white mb-1">(951) 697-8999</h5>
<p className="text-base text-zinc-500">Call us during business hours</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-3 rounded-lg bg-[#1B1E26] border border-white/5 text-[#F5A524] shrink-0 mt-1">
<iconify-icon height="1.2em" icon="solar:clock-circle-linear" width="1.2em"></iconify-icon>
</div>
<div>
<h5 className="text-base font-medium text-white mb-1">Mon – Sun: 9 AM – 6 PM</h5>
<p className="text-base text-zinc-500">Open 7 Days a week</p>
</div>
</div>
</div>
</div>

<div className="bg-transparent">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-[#1B1E26] border border-white/5 rounded-lg px-4 py-3.5 text-base text-white placeholder:text-zinc-500 focus:border-[#F5A524] focus:ring-1 focus:ring-[#F5A524] outline-none transition-all" placeholder="Your Name" type="text"/>
<input className="w-full bg-[#1B1E26] border border-white/5 rounded-lg px-4 py-3.5 text-base text-white placeholder:text-zinc-500 focus:border-[#F5A524] focus:ring-1 focus:ring-[#F5A524] outline-none transition-all" placeholder="Phone Number" type="tel"/>
</div>
<input className="w-full bg-[#1B1E26] border border-white/5 rounded-lg px-4 py-3.5 text-base text-white placeholder:text-zinc-500 focus:border-[#F5A524] focus:ring-1 focus:ring-[#F5A524] outline-none transition-all" placeholder="Email Address" type="email"/>
<div className="relative">
<select className="w-full bg-[#1B1E26] border border-white/5 rounded-lg px-4 py-3.5 text-base text-zinc-300 appearance-none focus:border-[#F5A524] focus:ring-1 focus:ring-[#F5A524] outline-none transition-all cursor-pointer">
<option disabled="" selected="" value="">Select Service</option>
<option value="tinting">Window Tinting</option>
<option value="stereo">Audio Systems &amp; Radios</option>
<option value="alarms">Alarms &amp; Remotes</option>
<option value="wraps">Car Wraps &amp; LEDs</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<input className="w-full bg-[#1B1E26] border border-white/5 rounded-lg px-4 py-3.5 text-base text-white placeholder:text-zinc-500 focus:border-[#F5A524] focus:ring-1 focus:ring-[#F5A524] outline-none transition-all" placeholder="Vehicle (Year, Make, Model)" type="text"/>
<textarea className="w-full bg-[#1B1E26] border border-white/5 rounded-lg px-4 py-3.5 text-base text-white placeholder:text-zinc-500 h-32 resize-none focus:border-[#F5A524] focus:ring-1 focus:ring-[#F5A524] outline-none transition-all" placeholder="Tell us what you need..."></textarea>
<button className="w-full bg-[#F5A524] hover:bg-[#E0931D] text-black font-medium text-base py-4 rounded-lg transition-colors mt-2" type="submit">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#0A0C10] py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
<div className="flex items-center gap-2 text-lg tracking-tight">
<span className="font-semibold text-[#F5A524]">VICKYNO</span>
<span className="font-medium text-white">TINT &amp; SOUND</span>
</div>
<div className="text-sm font-medium">
                © 2024 Vickyno Tint &amp; Sound. 23920 Alessandro Blvd Ste C, Moreno Valley, CA 92553
            </div>
<div className="flex gap-6 font-medium">
<a className="hover:text-zinc-300 transition-colors" href="#">Services</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Reviews</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
