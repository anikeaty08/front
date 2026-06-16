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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function() {
            const slider = document.getElementById('hero-slider');
            const prevBtn = document.getElementById('slider-prev');
            const nextBtn = document.getElementById('slider-next');
            const dots = document.querySelectorAll('#slider-dots button');
            let currentSlide = 0;
            const slideCount = 3;
            let slideInterval;

            function updateSlider() {
              if (!slider) return;
              slider.style.transform = `translateX(-${currentSlide * 100}%)`;
              dots.forEach((dot, index) => {
                if (index === currentSlide) {
                  dot.className = 'w-8 h-1 rounded-full bg-white transition-all';
                } else {
                  dot.className = 'w-2 h-1 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer';
                }
              });
            }

            function nextSlide() {
              currentSlide = (currentSlide + 1) % slideCount;
              updateSlider();
            }

            function startInterval() {
              slideInterval = setInterval(nextSlide, 5000);
            }

            function resetInterval() {
              clearInterval(slideInterval);
              startInterval();
            }

            if (nextBtn) {
              nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
              });
            }

            if (prevBtn) {
              prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slideCount) % slideCount;
                updateSlider();
                resetInterval();
              });
            }

            dots.forEach((dot, index) => {
              dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
                resetInterval();
              });
            });

            startInterval();
            updateSlider();
          })();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-slate-950/80 border-slate-800/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-6">
<button className="lg:hidden transition-colors text-slate-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<nav className="hidden lg:flex space-x-8">
<a className="text-sm font-medium text-white" href="#">Latest</a>
<a className="text-sm font-medium transition-colors text-slate-400 hover:text-white" href="#">
                Reviews
              </a>
<a className="text-sm font-medium transition-colors text-slate-400 hover:text-white" href="#">
                Editorials
              </a>
<a className="text-sm font-medium transition-colors text-slate-400 hover:text-white" href="#">
                Buying Guides
              </a>
</nav>
</div>

<div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2">
<a className="font-serif text-xl font-semibold tracking-tighter uppercase text-white" href="#">
              Man of Many
            </a>
</div>

<div className="flex items-center gap-4">
<button className="transition-colors flex items-center text-slate-400 hover:text-white">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-4 w-px hidden sm:block bg-slate-800"></div>
<button className="transition-colors hidden sm:flex items-center gap-2 text-slate-400 hover:text-white">
<span className="text-xs font-medium">Sign In</span>
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-white border border-slate-700 hover:border-slate-500 rounded-sm hover:bg-slate-800 transition-colors uppercase ml-2" href="#">
              Subscribe
            </a>
</div>
</div>
</div>
</header>

<main>

<section className="w-full relative overflow-hidden h-[70vh] min-h-[500px]">
<div className="relative w-full h-full flex transition-transform duration-700 ease-in-out" id="hero-slider">

<div className="w-full h-full flex-shrink-0 relative group">
<img alt="Luxury Watch" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 max-w-7xl mx-auto flex flex-col justify-end h-full">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<span className="bg-white text-slate-900 px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase">
                    Cover Story
                  </span>
<span className="text-white/90 text-xs flex items-center gap-1.5 font-medium tracking-wide">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
                    8 min read
                  </span>
</div>
<h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-tight mb-5 drop-shadow-md">
                  The Evolution of the Modern Tool Watch
                </h1>
<a className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest hover:text-slate-300 transition-colors mb-4" href="#">
                  Read Cover Story
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative group">
<img alt="Chronograph" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 max-w-7xl mx-auto flex flex-col justify-end h-full">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<span className="bg-white text-slate-900 px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase">
                    Review
                  </span>
</div>
<h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-tight mb-5 drop-shadow-md">
                  Testing the Limits: The New Titanium Chronograph
                </h1>
<a className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest hover:text-slate-300 transition-colors mb-4" href="#">
                  Read The Review
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative group">
<img alt="Dress Watch" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 max-w-7xl mx-auto flex flex-col justify-end h-full">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<span className="bg-white text-slate-900 px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase">
                    Editorial
                  </span>
</div>
<h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-tight mb-5 drop-shadow-md">
                  Why Smaller Case Sizes Are Making a Grand Return
                </h1>
<a className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest hover:text-slate-300 transition-colors mb-4" href="#">
                  Read Editorial
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>


<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10" id="slider-dots">
<button className="w-8 h-1 rounded-full bg-white transition-all"></button>
<button className="w-2 h-1 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer"></button>
<button className="w-2 h-1 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer"></button>
</div>

</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 border-t border-slate-800/60">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-serif font-semibold tracking-tight text-white">
                Latest Dispatches
              </h3>
<a className="text-sm font-medium flex items-center gap-1 transition-colors text-slate-400 hover:text-white" href="#">
                View All
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="space-y-10">

<article className="group flex flex-col sm:flex-row gap-6 items-start">
<a className="w-full sm:w-2/5 lg:w-1/3 shrink-0 overflow-hidden rounded-xl border relative border-slate-800" href="#">
<img alt="Vintage Watch" className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-xl ring-white/10"></div>
</a>
<div className="flex flex-col justify-center w-full sm:w-3/5 lg:w-2/3 pt-1">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Market Trends
                    </span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-xs text-slate-400">Oct 24, 2023</span>
</div>
<a href="#">
<h4 className="text-xl sm:text-2xl font-serif font-semibold tracking-tight mb-3 transition-colors text-white group-hover:text-slate-300">
                      Navigating the Vintage Market: A Beginner's Guide
                    </h4>
</a>
<p className="text-sm leading-relaxed mb-4 line-clamp-2 text-slate-400">
                    Entering the world of vintage collecting can be daunting. We
                    break down the essential terminology, red flags, and hidden
                    gems to look out for.
                  </p>
<a className="text-xs font-medium flex items-center gap-1.5 uppercase tracking-wide group/link text-white" href="#">
                    Read Article
                    <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</article>
<hr className="border-slate-800/60"/>

<article className="group flex flex-col sm:flex-row gap-6 items-start">
<a className="w-full sm:w-2/5 lg:w-1/3 shrink-0 overflow-hidden rounded-xl border relative border-slate-800" href="#">
<img alt="Watch Movement" className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-xl ring-white/10"></div>
</a>
<div className="flex flex-col justify-center w-full sm:w-3/5 lg:w-2/3 pt-1">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Deep Dive
                    </span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-xs text-slate-400">Oct 22, 2023</span>
</div>
<a href="#">
<h4 className="text-xl sm:text-2xl font-serif font-semibold tracking-tight mb-3 transition-colors text-white group-hover:text-slate-300">
                      Understanding the Co-Axial Escapement
                    </h4>
</a>
<p className="text-sm leading-relaxed mb-4 line-clamp-2 text-slate-400">
                    We dissect one of the most significant horological
                    inventions of the 20th century and explain why it
                    revolutionized mechanical timekeeping.
                  </p>
<a className="text-xs font-medium flex items-center gap-1.5 uppercase tracking-wide group/link text-white" href="#">
                    Read Article
                    <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</article>
<hr className="border-slate-800/60"/>

<article className="group flex flex-col sm:flex-row gap-6 items-start">
<a className="w-full sm:w-2/5 lg:w-1/3 shrink-0 overflow-hidden rounded-xl border relative border-slate-800" href="#">
<img alt="Independent Watch" className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-xl ring-white/10"></div>
</a>
<div className="flex flex-col justify-center w-full sm:w-3/5 lg:w-2/3 pt-1">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Independent
                    </span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-xs text-slate-400">Oct 20, 2023</span>
</div>
<a href="#">
<h4 className="text-xl sm:text-2xl font-serif font-semibold tracking-tight mb-3 transition-colors text-white group-hover:text-slate-300">
                      The Rise of the Independent Watchmaker
                    </h4>
</a>
<p className="text-sm leading-relaxed mb-4 line-clamp-2 text-slate-400">
                    Away from the corporate conglomerates, a new breed of
                    artisans is redefining high horology with avant-garde
                    designs and meticulous hand-finishing.
                  </p>
<a className="text-xs font-medium flex items-center gap-1.5 uppercase tracking-wide group/link text-white" href="#">
                    Read Article
                    <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</article>

<div className="pt-6 flex justify-center">
<button className="px-6 py-3 border rounded-lg text-sm font-medium transition-colors shadow-sm border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Explore The Archives
                </button>
</div>
</div>
</div>

<aside className="lg:col-span-4 space-y-12">

<div className="bg-slate-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-slate-800">

<div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-slate-800/50 blur-2xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-5">
<iconify-icon className="text-white" icon="solar:crown-star-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase bg-slate-800/80 text-white rounded-sm border border-slate-700">
                    Exclusive Access
                  </span>
</div>
<h4 className="text-xl font-serif font-semibold tracking-tight text-white mb-2">
                  Join The Collector's Circle
                </h4>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Unlock exclusive horology insights, private market intel, and
                  premium editorial content reserved strictly for our members.
                </p>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all placeholder:text-slate-500" placeholder="Enter your email" type="email"/>
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" icon="solar:mailbox-linear" width="18"></iconify-icon>
</div>
<button className="w-full bg-white text-slate-900 rounded-lg px-4 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors shadow-sm" type="submit">
<span className="flex items-center justify-center gap-2">
                      Unlock Premium Access
                      <iconify-icon icon="solar:lock-keyhole-unlocked-linear" width="18"></iconify-icon>
</span>
</button>
<p className="text-xs text-slate-500 text-center mt-2">
                    No spam. Unsubscribe anytime.
                  </p>
</form>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
<iconify-icon className="text-white" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
<h4 className="text-lg font-serif font-semibold tracking-tight text-white">
                  Trending Now
                </h4>
</div>
<ul className="space-y-5">

<li className="flex gap-4 items-start group cursor-pointer">
<span className="text-xl font-serif font-semibold mt-0.5 transition-colors text-slate-700 group-hover:text-white">
                    01
                  </span>
<div>
<a href="#">
<h5 className="text-sm font-medium tracking-tight leading-snug group-hover:underline decoration-slate-300 underline-offset-2 mb-1 text-white group-hover:decoration-slate-600">
                        The 10 Best Daily Drivers Under $5,000 for 2024
                      </h5>
</a>
<p className="text-xs text-slate-400">
                      Buying Guide · 120k Views
                    </p>
</div>
</li>

<li className="flex gap-4 items-start group cursor-pointer">
<span className="text-xl font-serif font-semibold mt-0.5 transition-colors text-slate-700 group-hover:text-white">
                    02
                  </span>
<div>
<a href="#">
<h5 className="text-sm font-medium tracking-tight leading-snug group-hover:underline decoration-slate-300 underline-offset-2 mb-1 text-white group-hover:decoration-slate-600">
                        Hands-On: The Revamped Classic Divers
                      </h5>
</a>
<p className="text-xs text-slate-400">Review · 95k Views</p>
</div>
</li>

<li className="flex gap-4 items-start group cursor-pointer">
<span className="text-xl font-serif font-semibold mt-0.5 transition-colors text-slate-700 group-hover:text-white">
                    03
                  </span>
<div>
<a href="#">
<h5 className="text-sm font-medium tracking-tight leading-snug group-hover:underline decoration-slate-300 underline-offset-2 mb-1 text-white group-hover:decoration-slate-600">
                        Auction Report: Rare Platinum Perpetual Calendar Breaks
                        Records
                      </h5>
</a>
<p className="text-xs text-slate-400">News · 88k Views</p>
</div>
</li>

<li className="flex gap-4 items-start group cursor-pointer">
<span className="text-xl font-serif font-semibold mt-0.5 transition-colors text-slate-700 group-hover:text-white">
                    04
                  </span>
<div>
<a href="#">
<h5 className="text-sm font-medium tracking-tight leading-snug group-hover:underline decoration-slate-300 underline-offset-2 mb-1 text-white group-hover:decoration-slate-600">
                        How to Properly Store Your Mechanical Collection
                      </h5>
</a>
<p className="text-xs text-slate-400">Guide · 72k Views</p>
</div>
</li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-slate-400">
                Explore by Topic
              </h4>
<div className="flex flex-wrap gap-2">
<a className="px-3 py-1.5 border rounded-full text-xs font-medium transition-colors shadow-sm bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white" href="#">
                  Chronographs
                </a>
<a className="px-3 py-1.5 border rounded-full text-xs font-medium transition-colors shadow-sm bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white" href="#">
                  Divers
                </a>
<a className="px-3 py-1.5 border rounded-full text-xs font-medium transition-colors shadow-sm bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white" href="#">
                  Haute Horlogerie
                </a>
<a className="px-3 py-1.5 border rounded-full text-xs font-medium transition-colors shadow-sm bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white" href="#">
                  Vintage
                </a>
<a className="px-3 py-1.5 border rounded-full text-xs font-medium transition-colors shadow-sm bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white" href="#">
                  Auctions
                </a>
<a className="px-3 py-1.5 border rounded-full text-xs font-medium transition-colors shadow-sm bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white" href="#">
                  Industry News
                </a>
</div>
</div>
</aside>
</div>
</section>
</main>

<footer className="border-t py-12 lg:py-16 mt-12 bg-slate-950 border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<a className="font-serif text-2xl font-semibold tracking-tighter uppercase text-white" href="#">
              Man of Many
            </a>
<p className="text-xs font-medium text-slate-400">
              The Authority on Men's Timepieces.
            </p>
</div>
<div className="flex items-center gap-6">
<a className="transition-colors text-slate-500 hover:text-white" href="#">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="transition-colors text-slate-500 hover:text-white" href="#">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 border-slate-800">
<p className="text-xs text-slate-400">
            © 2024 Horology Journal. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
