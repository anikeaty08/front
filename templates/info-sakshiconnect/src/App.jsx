import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('slider-track');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const slideCount = dots.length;
            
            let currentIndex = 0;
            let autoSlideInterval;

            // Update UI based on index
            function updateSlider(index) {
                if (index < 0) index = slideCount - 1;
                if (index >= slideCount) index = 0;
                
                currentIndex = index;
                
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                dots.forEach((dot, i) => {
                    if (i === currentIndex) {
                        dot.className = 'slider-dot w-2 h-2 rounded-full transition-all duration-300 bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)] scale-110';
                    } else {
                        dot.className = 'slider-dot w-2 h-2 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/60';
                    }
                });
            }

            const nextSlide = () => updateSlider(currentIndex + 1);
            const prevSlide = () => updateSlider(currentIndex - 1);

            const startAutoSlide = () => {
                autoSlideInterval = setInterval(nextSlide, 3000);
            };
            const stopAutoSlide = () => {
                clearInterval(autoSlideInterval);
            };

            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    updateSlider(index);
                    stopAutoSlide();
                    startAutoSlide();
                });
            });

            let touchStartX = 0;
            let touchEndX = 0;

            track.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });

            track.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, { passive: true });

            function handleSwipe() {
                const swipeThreshold = 50;
                if (touchStartX - touchEndX > swipeThreshold) {
                    nextSlide(); 
                }
                if (touchEndX - touchStartX > swipeThreshold) {
                    prevSlide(); 
                }
            }

            startAutoSlide();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-pink-600/20 blur-[120px] pointer-events-none z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">

<header className="flex flex-col text-center mb-16 items-center">

<div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full p-1 bg-gradient-to-tr from-pink-500 to-purple-500 shadow-[0_0_30px_rgba(236,72,153,0.4)]">
<img alt="Sakshi Rajput" className="w-full h-full object-cover border-[#0f0f1a] border-4 rounded-full" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/857be35d-647a-46f9-a226-73e724e6bab4_320w.jpg"/>
</div>
<h1 className="sm:text-5xl md:text-6xl bg-clip-text text-glow-pink text-4xl font-medium text-transparent tracking-tight bg-gradient-to-r from-white via-pink-100 to-white mb-2">Sakshi Rajput</h1>
<p className="text-base sm:text-lg text-gray-400 font-light tracking-wide uppercase mt-2">
                Digital Creator <span className="text-pink-500/50 mx-2">|</span> Student <span className="text-purple-500/50 mx-2">|</span> Vlogger
            </p>
</header>

<section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors duration-500"></div>
<h3 className="text-lg font-medium tracking-tight text-gray-200 mb-4 border-b border-white/5 pb-2">Contact Info</h3>
<ul className="space-y-4 relative z-10">
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-pink-400">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</div>
                        +91 98765 43210
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
                        collab@sakshi.com
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-pink-400">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
                        New Delhi, India
                    </li>
</ul>
</div>

<div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-center">
<div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-500"></div>
<div className="flex items-center gap-4 mb-4 relative z-10">
<div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-200">Education</h3>
</div>
<p className="text-gray-300 font-light relative z-10 leading-relaxed text-sm">
                    Graduate in <br/> <span className="text-white font-medium">Bachelor of Arts</span>
</p>
</div>

<div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-center">
<div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors duration-500"></div>
<h3 className="text-lg font-medium tracking-tight text-gray-200 mb-4 border-b border-white/5 pb-2">Connect</h3>
<div className="flex flex-wrap gap-3 relative z-10">

<a aria-label="Instagram" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] group/icon" href="https://www.instagram.com/sakshirajput024_" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl text-gray-300 group-hover/icon:text-white transition-colors" icon="mdi:instagram"></iconify-icon>
</a>

<a aria-label="Snapchat" className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500/20 hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] group/icon bg-white/5 w-11 h-11 border-white/10 border rounded-full backdrop-blur-md" href="/#" rel="noopener noreferrer" target="_blank">
<iconify-icon className="group-hover/icon:text-white transition-colors text-xl text-gray-300" height="20" icon="mdi:snapchat" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</a>

<a aria-label="Facebook" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group/icon" href="#" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl text-gray-300 group-hover/icon:text-white transition-colors" icon="ic:baseline-facebook"></iconify-icon>
</a>

<a aria-label="YouTube" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-red-600/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] group/icon" href="#" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl text-gray-300 group-hover/icon:text-white transition-colors" icon="mdi:youtube"></iconify-icon>
</a>

<a aria-label="Threads" className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group/icon bg-white/5 w-11 h-11 border-white/10 border rounded-full backdrop-blur-md" href="https://www.threads.com/@sakshirajput024_" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl text-gray-300 group-hover/icon:text-white transition-colors" icon="akar-icons:threads-fill"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="mb-20 py-8">
<h2 className="text-xl md:text-2xl font-medium tracking-tight mb-6 text-center text-gray-200">Featured Highlights</h2>
<div className="relative w-full max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(139,92,246,0.15)] border border-white/10 bg-[#0f0f1a] group">

<div className="flex slider-track w-full touch-pan-y" id="slider-track">
<div className="w-full flex-shrink-0 relative">
<img alt="Highlight 1" className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="w-full flex-shrink-0 relative">
<img alt="Highlight 2" className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent opacity-80"></div>
</div>
<div className="w-full flex-shrink-0 relative">
<img alt="Highlight 3" className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent opacity-80"></div>
</div>
<div className="w-full flex-shrink-0 relative">
<img alt="Highlight 4" className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent opacity-80"></div>
</div>
<div className="w-full flex-shrink-0 relative">
<img alt="Highlight 5" className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent opacity-80"></div>
</div>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none z-20" id="prev-btn">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="-translate-y-1/2 flex group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none text-white bg-black/40 opacity-0 w-10 h-10 border-white/20 border rounded-full absolute top-1/2 right-4 backdrop-blur-md items-center justify-center z-20" id="next-btn">
<iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
<button className="slider-dot w-2 h-2 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/60"></button>
<button className="slider-dot w-2 h-2 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/60"></button>
<button className="slider-dot w-2 h-2 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/60"></button>
<button className="slider-dot w-2 h-2 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/60"></button>
<button className="slider-dot w-2 h-2 rounded-full transition-all duration-300 bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)] scale-110"></button>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-xl md:text-2xl font-medium tracking-tight mb-6 text-gray-200">Recent Feed</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
<div className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-white/5 group">
<img alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/976a27d2-a8ba-4150-bb58-674cc57132e1_800w.jpg)] bg-cover bg-center pb-4 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<iconify-icon className="text-white text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<div className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-white/5 group">
<img alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57481c4b-76a2-4f59-a20c-dd1dd3fb1f5c_800w.jpg)] bg-cover bg-center pb-4 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<iconify-icon className="text-white text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<div className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-white/5 group">
<img alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5307685-c104-4214-bd8c-f2ab3392d924_800w.jpg)] bg-cover bg-center pb-4 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<iconify-icon className="text-white text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<div className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-white/5 group">
<img alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb4a6eaf-465f-474f-a039-421d1466cf55_320w.jpg)] bg-cover bg-center pb-4 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<iconify-icon className="text-white text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<div className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-white/5 group">
<img alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73fb3624-105c-4191-a232-1a53a8c9ea6a_320w.jpg)] bg-cover bg-center pb-4 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<iconify-icon className="text-white text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<div className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-white/5 group">
<img alt="Gallery 6" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f52087f2-90a4-45f2-93b1-dcc3d0d6cb52_320w.jpg)] bg-cover bg-center pb-4 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<iconify-icon className="text-white text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="mb-10">
<div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-colors duration-500 pointer-events-none"></div>
<div className="flex items-center justify-center gap-4 mb-8 relative z-10">
<div className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
<iconify-icon className="text-pink-400 text-xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight">Expertise &amp; Skills</h2>
</div>
<div className="flex flex-wrap z-10 relative gap-x-4 gap-y-4 justify-center">
<span className="px-5 py-2.5 rounded-full border border-pink-500/30 text-sm bg-pink-500/10 text-pink-100 shadow-[0_0_10px_rgba(236,72,153,0.1)] hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:border-pink-500/50 hover:-translate-y-1 transition-all cursor-default backdrop-blur-sm">
                        Confidence
                    </span>
<span className="hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:border-purple-500/50 hover:-translate-y-1 transition-all cursor-default text-sm text-purple-100 bg-purple-500/10 border-purple-500/30 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_10px_rgba(168,85,247,0.1)] backdrop-blur-sm">
                        Blogger
                    </span>
<span className="px-5 py-2.5 rounded-full border border-pink-500/30 text-sm bg-pink-500/10 text-pink-100 shadow-[0_0_10px_rgba(236,72,153,0.1)] hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:border-pink-500/50 hover:-translate-y-1 transition-all cursor-default backdrop-blur-sm">
                        Brand Strategy
                    </span>
<span className="px-5 py-2.5 rounded-full border border-purple-500/30 text-sm bg-purple-500/10 text-purple-100 shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:border-purple-500/50 hover:-translate-y-1 transition-all cursor-default backdrop-blur-sm">
                        Content Creation
                    </span>
<span className="px-5 py-2.5 rounded-full border border-pink-500/30 text-sm bg-pink-500/10 text-pink-100 shadow-[0_0_10px_rgba(236,72,153,0.1)] hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:border-pink-500/50 hover:-translate-y-1 transition-all cursor-default backdrop-blur-sm">
                        Lifestyle
                    </span>
</div>
</div>
</section>

<footer className="mt-20 pt-8 border-t border-white/10 text-center flex flex-col items-center justify-center">
<div className="mb-4">
<span className="text-xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 uppercase">SR</span>
</div>
<p className="text-xs text-gray-500 font-light tracking-wide">
                © 2024 Sakshi Rajput | All Rights Reserved
            </p>
</footer>
</div>



    </>
  );
}
