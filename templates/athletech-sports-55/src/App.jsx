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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      // Before/After draggable handle
      (function() {
        const container = document.getElementById('ba-container');
        const handle = document.getElementById('ba-handle');
        const after = document.getElementById('ba-after');
        if (!container || !handle || !after) return;
        let dragging = false;

        function setPos(clientX) {
          const rect = container.getBoundingClientRect();
          let pct = ((clientX - rect.left) / rect.width) * 100;
          pct = Math.max(0, Math.min(100, pct));
          handle.style.left = pct + '%';
          after.style.clipPath = `inset(0 0 0 ${pct}%)`;
        }

        handle.addEventListener('mousedown', (e) => { dragging = true; e.preventDefault(); });
        handle.addEventListener('touchstart', (e) => { dragging = true; }, { passive: true });
        window.addEventListener('mouseup', () => { dragging = false; });
        window.addEventListener('touchend', () => { dragging = false; });
        window.addEventListener('mousemove', (e) => { if (dragging) setPos(e.clientX); });
        window.addEventListener('touchmove', (e) => { if (dragging && e.touches[0]) setPos(e.touches[0].clientX); }, { passive: true });
        container.addEventListener('click', (e) => { setPos(e.clientX); });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="qpSlPSWA2bdkUAYztz8z"></div>

</div>

<svg height="0" style={{position: 'absolute'}} width="0">
<symbol id="dunkman" viewbox="0 0 100 120">
<path d="M62 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9zM40 26c2-2 8-4 13-4s10 2 13 5l8 12c2 3 1 6-1 8l-6 4-5-8v15l8 20c1 3 0 6-3 7s-6-1-7-4l-6-16-4 6 4 18c1 3-1 6-4 6s-5-2-6-5l-5-22c-1-3 0-6 2-8l5-7v-14l-6 5c-2 2-5 1-7-1l-6-8c-2-2-1-5 1-7zM70 38l-1 1 4 6 3-2-6-5zM82 14c4-2 8 1 8 5l-2 4-8-2 2-7z" fill="currentColor"></path>
<circle cx="80" cy="22" fill="none" r="6" stroke="currentColor" strokeWidth="2"></circle>
<path d="M86 20 L94 18 M86 24 L94 26" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</symbol>
</svg>

<div className="bg-black text-white text-xs">
<div className="max-w-[1600px] mx-auto px-5 py-2 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-3">
<a aria-label="Instagram" href="#">
<iconify-icon icon="solar:instagram-linear" width="14"></iconify-icon>
</a>
<a aria-label="Facebook" href="#">
<iconify-icon icon="solar:facebook-linear" width="14"></iconify-icon>
</a>
<a aria-label="TikTok" href="#">
<iconify-icon icon="solar:tiktok-linear" width="14"></iconify-icon>
</a>
</div>
<span className="hidden sm:inline tracking-wider">
            +1 (888) ATHLETECH
          </span>
</div>
<div className="hidden md:block tracking-[0.2em] uppercase text-xs">
          Welcome to ATHLETECH — Custom Sports Uniforms
        </div>
<div className="flex items-center gap-3">
<a aria-label="Account" href="#">
<iconify-icon icon="solar:user-linear" width="14"></iconify-icon>
</a>
<a aria-label="Cart" href="#">
<iconify-icon icon="solar:cart-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white border-b border-[#dee2e6]">
<div className="max-w-[1180px] mx-auto px-5 py-4 flex items-center justify-between">
<div className="flex-1 flex items-center gap-4">
<button aria-label="Search" className="text-[#282828] hover:text-[#e43737] transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button aria-label="Menu" className="md:hidden text-[#282828]">
<iconify-icon icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
</div>
<a className="flex flex-col items-center" href="#">
<div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#FFD700]">
<svg height="32" width="28"><use href="#dunkman"></use></svg>
</div>
<span className="font-heading text-base tracking-[0.25em] mt-1 text-[#282828]">
            ATHLETECH
          </span>
</a>
<div className="flex-1 flex items-center justify-end gap-4">
<a aria-label="Account" className="text-[#282828] hover:text-[#e43737] transition-colors hidden sm:block" href="#">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</a>
<a aria-label="Wishlist" className="text-[#282828] hover:text-[#e43737] transition-colors hidden sm:block" href="#">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</a>
<button aria-label="Cart" className="text-[#282828] hover:text-[#e43737] transition-colors relative">
<iconify-icon className="" icon="solar:bag-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-2 bg-[#e43737] text-white text-[10px] w-4 h-4 flex items-center justify-center" style={{borderRadius: '3px'}}>
              0
            </span>
</button>
</div>
</div>

<nav className="border-t border-[#dee2e6] hidden md:block">
<ul className="max-w-[1180px] mx-auto px-5 flex items-center justify-center gap-7 text-xs tracking-[0.15em] uppercase font-medium">
<li className="nav-item relative">
<a className="block py-3 text-[#e43737] hover:text-black transition-colors" href="#">
              Build Uniform
            </a>
</li>
<li className="nav-item relative">
<a className="block py-3 text-[#282828] hover:text-[#e43737] transition-colors flex items-center gap-1" href="#">
              Baseball
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<div className="dropdown hidden absolute top-full left-0 bg-white border border-[#dee2e6] min-w-[200px] py-3 z-50">
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Packages
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Uniforms
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Full Button Jerseys
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Two Button Jerseys
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Pullover Jerseys
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Long Pants
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Knickers Pants
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Cage Jacket
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Hoodies
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Bags
              </a>
</div>
</li>
<li className="nav-item relative">
<a className="block py-3 text-[#282828] hover:text-[#e43737] transition-colors flex items-center gap-1" href="#">
              Basketball
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<div className="dropdown hidden absolute top-full left-0 bg-white border border-[#dee2e6] min-w-[200px] py-3 z-50">
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Packages
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Uniforms
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Reversible Uniforms
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Jerseys
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Shooting Shirt
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Shorts
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Jackets
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Hoodies
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Backpack
              </a>
</div>
</li>
<li className="nav-item relative">
<a className="block py-3 text-[#282828] hover:text-[#e43737] transition-colors flex items-center gap-1" href="#">
              Football
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<div className="dropdown hidden absolute top-full left-0 bg-white border border-[#dee2e6] min-w-[200px] py-3 z-50">
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Packages
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Uniforms
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Jerseys
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Pants
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Compression Shirts
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Compression Shorts
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Hoodies
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Jackets
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Duffle Bags
              </a>
</div>
</li>
<li className="nav-item relative">
<a className="block py-3 text-[#282828] hover:text-[#e43737] transition-colors flex items-center gap-1" href="#">
              Hockey
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<div className="dropdown hidden absolute top-full left-0 bg-white border border-[#dee2e6] min-w-[180px] py-3 z-50">
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Uniforms
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Jerseys
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Shells
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Socks
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Hoodies
              </a>
</div>
</li>
<li className="nav-item relative">
<a className="block py-3 text-[#282828] hover:text-[#e43737] transition-colors flex items-center gap-1" href="#">
              Soccer
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<div className="dropdown hidden absolute top-full left-0 bg-white border border-[#dee2e6] min-w-[180px] py-3 z-50">
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Packages
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Uniforms
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Jerseys
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Shorts
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Jackets
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Pants
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Bags
              </a>
</div>
</li>
<li className="nav-item relative">
<a className="block py-3 text-[#282828] hover:text-[#e43737] transition-colors flex items-center gap-1" href="#">
              Tennis
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
</li>
<li className="nav-item relative">
<a className="block py-3 text-[#282828] hover:text-[#e43737] transition-colors flex items-center gap-1" href="#">
              Volleyball
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<div className="dropdown hidden absolute top-full left-0 bg-white border border-[#dee2e6] min-w-[200px] py-3 z-50">
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Packages
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Men's Uniforms
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Women's Uniforms
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Jerseys
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Shorts
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Hoodies
              </a>
<a className="block px-5 py-2 text-xs hover:text-[#e43737] tracking-normal normal-case text-[#282828]" href="#">
                Bags
              </a>
</div>
</li>
<li className="nav-item relative">
<a className="block py-3 text-[#282828] hover:text-[#e43737] transition-colors flex items-center gap-1" href="#">
              Wrestling
              <iconify-icon className="" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
</li>
</ul>
</nav>

<div className="bg-[#282828] text-white overflow-hidden">
<div className="marquee-track flex whitespace-nowrap py-2.5 text-xs tracking-[0.2em] uppercase">
<div className="flex shrink-0">
<span className="px-8">★ Gear Up With Premium Quality Apparel</span>
<span className="px-8">★ Custom Designs For Every Team</span>
<span className="px-8">★ Unmatched Comfort &amp; Durability</span>
<span className="px-8">★ No Minimum Order Required</span>
<span className="px-8">★ Fast Turnaround Delivery</span>
</div>
<div aria-hidden="true" className="flex shrink-0">
<span className="px-8">★ Gear Up With Premium Quality Apparel</span>
<span className="px-8">★ Custom Designs For Every Team</span>
<span className="px-8">★ Unmatched Comfort &amp; Durability</span>
<span className="px-8">★ No Minimum Order Required</span>
<span className="px-8">★ Fast Turnaround Delivery</span>
</div>
</div>
</div>
</header>

<section className="relative bg-[#f4f4f2] overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="font-heading text-[18vw] tracking-tight text-[#e8e6e2] leading-none select-none">
          SPORTS
        </span>
</div>
<div className="relative max-w-[1180px] mx-auto px-5 pt-6">
<p className="text-xs tracking-[0.3em] uppercase text-[#282828] text-center">
          ATHLETECH Custom Uniform
          <span className="mx-2 text-[#e43737]">|</span>
          Best Selling Uniform
        </p>
</div>
<div className="max-w-[1180px] mr-auto ml-auto pt-8 pr-5 pb-12 pl-5 relative">
<div className="relative w-full aspect-[1490/560] overflow-hidden bg-[#f4f4f2]">
<img alt="Custom football uniforms lineup" className="object-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="text-center mt-10 max-w-2xl mx-auto">
<h1 className="font-heading text-3xl md:text-5xl tracking-tight text-[#282828]">
            DESIGN YOUR LEGACY
          </h1>
<p className="text-sm md:text-base text-[#5b5b5b] mt-3">
            100% Custom Sports Uniforms · No Minimum Orders · Fast Turnaround
          </p>
<div className="flex flex-wrap items-center justify-center gap-3 mt-6">
<a className="bg-[#e43737] text-white px-7 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-black transition-colors" href="#">
              Start Designing
            </a>
<a className="border border-[#282828] text-[#282828] px-7 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#282828] hover:text-white transition-colors" href="#">
              Get a Quote
            </a>
</div>
</div>
</div>
</section>

<div className="max-w-[1180px] mx-auto px-5 py-4">
<div className="inline-flex items-center gap-2 border border-[#dee2e6] px-3 py-1.5" style={{borderRadius: '50rem'}}>
<img alt="" className="w-4 h-3" src="https://cdn.shopify.com/static/images/flags/mx.svg?width=18"/>
<span className="text-xs text-[#282828]">United States (USD $)</span>
<iconify-icon className="text-[#5b5b5b]" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<section className="py-12 md:py-16">
<div className="max-w-[1180px] mx-auto px-5">
<h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-center text-[#282828] mb-10">
          Our Product Categories
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-5">

<a className="product-card group border border-[#dee2e6] block" href="#">
<div className="aspect-square bg-[#f4f4f2] flex items-center justify-center overflow-hidden">
<div className="text-[#0A0E1A] img-primary">
<svg height="150" width="120"><use href="#dunkman"></use></svg>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs tracking-[0.15em] uppercase text-[#282828] font-medium">
                Baseball Uniforms
              </p>
<p className="text-xs text-[#5b5b5b] mt-1">From $49.00</p>
</div>
</a>
<a className="product-card group border border-[#dee2e6] block" href="#">
<div className="aspect-square bg-[#f4f4f2] flex items-center justify-center overflow-hidden">
<div className="text-[#7B1F2B] img-primary">
<svg height="150" width="120"><use href="#dunkman"></use></svg>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs tracking-[0.15em] uppercase text-[#282828] font-medium">
                Basketball Uniforms
              </p>
<p className="text-xs text-[#5b5b5b] mt-1">From $39.00</p>
</div>
</a>
<a className="product-card group border border-[#dee2e6] block" href="#">
<div className="aspect-square bg-[#f4f4f2] flex items-center justify-center overflow-hidden">
<div className="text-[#e43737] img-primary">
<svg className="" height="150" width="120">
<use className="" href="#dunkman"></use>
</svg>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs tracking-[0.15em] uppercase text-[#282828] font-medium">
                Football Uniforms
              </p>
<p className="text-xs text-[#5b5b5b] mt-1">From $69.00</p>
</div>
</a>
<a className="product-card group border border-[#dee2e6] block" href="#">
<div className="aspect-square bg-[#f4f4f2] flex items-center justify-center overflow-hidden">
<div className="text-[#282828] img-primary">
<svg className="" height="150" width="120">
<use href="#dunkman"></use>
</svg>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs tracking-[0.15em] uppercase text-[#282828] font-medium">
                Soccer Uniforms
              </p>
<p className="text-xs text-[#5b5b5b] mt-1">From $44.00</p>
</div>
</a>
<a className="product-card group border border-[#dee2e6] block" href="#">
<div className="aspect-square bg-[#f4f4f2] flex items-center justify-center overflow-hidden">
<div className="text-[#0A0E1A] img-primary">
<svg height="150" width="120"><use href="#dunkman"></use></svg>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs tracking-[0.15em] uppercase text-[#282828] font-medium">
                Hockey Uniforms
              </p>
<p className="text-xs text-[#5b5b5b] mt-1">From $59.00</p>
</div>
</a>
<a className="product-card group border border-[#dee2e6] block" href="#">
<div className="aspect-square bg-[#f4f4f2] flex items-center justify-center overflow-hidden">
<div className="text-[#5b5b5b] img-primary">
<svg height="150" width="120"><use href="#dunkman"></use></svg>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs tracking-[0.15em] uppercase text-[#282828] font-medium">
                Volleyball Uniforms
              </p>
<p className="text-xs text-[#5b5b5b] mt-1">From $42.00</p>
</div>
</a>
<a className="product-card group border border-[#dee2e6] block" href="#">
<div className="aspect-square bg-[#f4f4f2] flex items-center justify-center overflow-hidden">
<div className="text-[#FFD700] img-primary">
<svg className="" height="150" width="120">
<use href="#dunkman"></use>
</svg>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs tracking-[0.15em] uppercase text-[#282828] font-medium">
                Tennis Apparel
              </p>
<p className="text-xs text-[#5b5b5b] mt-1">From $35.00</p>
</div>
</a>
<a className="product-card group border border-[#dee2e6] block" href="#">
<div className="aspect-square bg-[#f4f4f2] flex items-center justify-center overflow-hidden">
<div className="text-[#7B1F2B] img-primary">
<svg height="150" width="120"><use href="#dunkman"></use></svg>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs tracking-[0.15em] uppercase text-[#282828] font-medium">
                Wrestling Singlets
              </p>
<p className="text-xs text-[#5b5b5b] mt-1">From $54.00</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-[#dee2e6]">
<div className="max-w-[1180px] mx-auto px-5">
<h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-center text-[#282828] mb-2">
          Design &amp; Build Your Own
        </h2>
<p className="text-center text-sm text-[#5b5b5b] mb-10">
          Select a sport to launch our step-by-step configurator
        </p>
<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs tracking-[0.2em] uppercase font-medium">
<a className="text-[#282828] hover:text-[#e43737] transition-colors" href="#">
            Baseball Uniform
          </a>
<span className="text-[#dee2e6] hidden md:inline">|</span>
<a className="text-[#282828] hover:text-[#e43737] transition-colors" href="#">
            Basketball Uniform
          </a>
<span className="text-[#dee2e6] hidden md:inline">|</span>
<a className="text-[#282828] hover:text-[#e43737] transition-colors" href="#">
            Football Uniform
          </a>
<span className="text-[#dee2e6] hidden md:inline">|</span>
<a className="text-[#282828] hover:text-[#e43737] transition-colors" href="#">
            Hockey Uniform
          </a>
</div>

<div className="mt-10 relative aspect-[16/7] bg-[#f4f4f2] border border-[#dee2e6] overflow-hidden" id="ba-container">
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs tracking-[0.3em] uppercase text-[#5b5b5b] absolute top-5 left-5">
              Before
            </span>
<div className="text-[#5b5b5b]">
<svg height="220" width="180"><use href="#dunkman"></use></svg>
</div>
</div>
<div className="absolute inset-0 overflow-hidden" id="ba-after" style={{clipPath: 'inset(0 0 0 50%)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#7B1F2B] to-[#e43737] flex items-center justify-center">
<span className="text-xs tracking-[0.3em] uppercase text-white absolute top-5 right-5">
                After
              </span>
<div className="text-[#FFD700]">
<svg height="220" width="180"><use href="#dunkman"></use></svg>
</div>
</div>
</div>
<div className="absolute top-0 bottom-0 w-0.5 bg-white before-after-handle flex items-center justify-center" id="ba-handle" style={{left: '50%', transform: 'translateX(-50%)'}}>
<div className="w-10 h-10 bg-white border border-[#dee2e6] flex items-center justify-center" style={{borderRadius: '50rem'}}>
<iconify-icon className="text-[#282828]" icon="solar:double-alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f4f4f2] py-12">
<div className="max-w-[1180px] mx-auto px-5">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div>
<p className="font-heading text-3xl md:text-4xl text-[#e43737]">
              1500+
            </p>
<p className="text-xs tracking-[0.1em] uppercase mt-2 text-[#282828]">
              Positive Customer Reviews
            </p>
</div>
<div>
<p className="font-heading text-3xl md:text-4xl text-[#e43737]">
              15000+
            </p>
<p className="text-xs tracking-[0.1em] uppercase mt-2 text-[#282828]">
              Custom Gear Delivered
            </p>
</div>
<div>
<p className="font-heading text-3xl md:text-4xl text-[#e43737]">
              3000+
            </p>
<p className="text-xs tracking-[0.1em] uppercase mt-2 text-[#282828]">
              Orders Delivered Worldwide
            </p>
</div>
<div>
<p className="font-heading text-3xl md:text-4xl text-[#e43737]">
              US BRAND
            </p>
<p className="text-xs tracking-[0.1em] uppercase mt-2 text-[#282828]">
              Custom Gear Across the Country
            </p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-[1180px] mx-auto px-5">
<h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-center text-[#282828] mb-10">
          Why Choose ATHLETECH
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
<div className="border border-[#dee2e6] p-6 text-center">
<iconify-icon className="text-[#e43737]" icon="solar:palette-linear" width="36"></iconify-icon>
<h3 className="font-heading text-base tracking-[0.1em] uppercase mt-4">
              100% Customizable
            </h3>
<p className="text-xs text-[#5b5b5b] mt-2 leading-relaxed">
              Every color, font, number and logo is yours to design.
            </p>
</div>
<div className="border border-[#dee2e6] p-6 text-center">
<iconify-icon className="text-[#e43737]" icon="solar:delivery-linear" width="36"></iconify-icon>
<h3 className="font-heading text-base tracking-[0.1em] uppercase mt-4">
              Fast Turnaround
            </h3>
<p className="text-xs text-[#5b5b5b] mt-2 leading-relaxed">
              From design approval to your doorstep in record time.
            </p>
</div>
<div className="border border-[#dee2e6] p-6 text-center">
<iconify-icon className="text-[#e43737]" icon="solar:verified-check-linear" width="36"></iconify-icon>
<h3 className="font-heading text-base tracking-[0.1em] uppercase mt-4">
              No Minimum Orders
            </h3>
<p className="text-xs text-[#5b5b5b] mt-2 leading-relaxed">
              One jersey or fifty — we make it happen.
            </p>
</div>
<div className="border border-[#dee2e6] p-6 text-center">
<iconify-icon className="text-[#e43737]" icon="solar:medal-star-linear" width="36"></iconify-icon>
<h3 className="font-heading text-base tracking-[0.1em] uppercase mt-4">
              Premium Materials
            </h3>
<p className="text-xs text-[#5b5b5b] mt-2 leading-relaxed">
              Pro-grade fabrics built for game-day performance.
            </p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 bg-[#0A0E1A] text-white">
<div className="max-w-[1180px] mx-auto px-5">
<h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-center mb-12">
          How It Works
        </h2>
<div className="grid md:grid-cols-3 gap-8 relative">
<div className="text-center">
<div className="w-16 h-16 mx-auto border-2 border-[#FFD700] flex items-center justify-center mb-4">
<span className="font-heading text-xl text-[#FFD700]">01</span>
</div>
<h3 className="font-heading text-lg tracking-[0.15em] uppercase">
              Design
            </h3>
<p className="text-xs text-white/70 mt-2">
              Use our configurator or upload your art.
            </p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto border-2 border-[#FFD700] flex items-center justify-center mb-4">
<span className="font-heading text-xl text-[#FFD700]">02</span>
</div>
<h3 className="font-heading text-lg tracking-[0.15em] uppercase">
              Approve
            </h3>
<p className="text-xs text-white/70 mt-2">
              Review your mock-up and confirm details.
            </p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto border-2 border-[#FFD700] flex items-center justify-center mb-4">
<span className="font-heading text-xl text-[#FFD700]">03</span>
</div>
<h3 className="font-heading text-lg tracking-[0.15em] uppercase">
              Receive
            </h3>
<p className="text-xs text-white/70 mt-2">
              Get game-ready uniforms shipped to your team.
            </p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-[1180px] mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
<div className="">
<h2 className="font-heading text-2xl md:text-4xl tracking-tight text-[#282828]">
            Custom Team Uniforms —
            <br/>
            Designed For Performance, Unity &amp; Style
          </h2>
<p className="text-sm text-[#5b5b5b] mt-5 leading-relaxed">
            ATHLETECH builds custom sports uniforms engineered for athletes who
            refuse to compromise. From premium sublimated fabrics to precision
            tailoring, every kit reflects your team's identity. Whether you're
            suiting up a championship roster or kitting out a youth league, our
            process delivers gear that performs as hard as you do.
          </p>
<a className="inline-block mt-6 bg-[#e43737] text-white px-7 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-black transition-colors" href="#">
            Read More
          </a>
</div>
<div className="aspect-[4/3] bg-[#f4f4f2] border border-[#dee2e6] flex items-center justify-center">
<div className="text-[#0A0E1A]">
<svg className="" height="280" width="220">
<use href="#dunkman"></use>
</svg>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-[#dee2e6]">
<div className="max-w-[1180px] mx-auto px-5">
<h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-center text-[#282828] mb-10">
          Featured Products
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
<div className="product-card border border-[#dee2e6] relative group">
<div className="absolute top-3 left-3 z-10 bg-[#e43737] text-white text-[10px] font-bold px-2 py-1" style={{borderRadius: '3px'}}>
              SHIPS FREE
            </div>
<div className="aspect-square bg-[#f4f4f2] relative overflow-hidden">
<img alt="Custom Basketball Uniform" className="img-primary absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://sportscustomuniform.com/cdn/shop/files/23_9bfe6fb2-6b0a-463d-ba99-7ab982c78558.jpg?v=1776511188&amp;width=533"/>
<img alt="Custom Basketball Uniform alternate view" className="img-secondary absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://sportscustomuniform.com/cdn/shop/files/24_ebc1ff14-4377-48df-8d8f-929e1fc7237a.jpg?v=1776511188&amp;width=533"/>
<div className="overlay absolute inset-x-0 bottom-0 bg-black/85 text-white text-xs tracking-[0.15em] uppercase text-center py-3 font-medium cursor-pointer">
                + Add to Cart
              </div>
</div>
<div className="p-4">
<p className="text-xs tracking-[0.1em] uppercase text-[#5b5b5b]">
                Basketball
              </p>
<h3 className="text-sm font-medium mt-1 text-[#282828]">
                Custom Basketball Uniform
              </h3>
<p className="text-sm font-semibold mt-1 text-[#282828]">
                From $39.00
              </p>
</div>
</div>
<div className="product-card border border-[#dee2e6] relative group">
<div className="absolute top-3 left-3 z-10 bg-[#d73f0f] text-white text-[10px] font-bold px-2 py-1" style={{borderRadius: '3px'}}>
              SALE
            </div>
<div className="aspect-square bg-[#f4f4f2] relative overflow-hidden">
<img alt="Custom Baseball Uniform" className="img-primary absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://sportscustomuniform.com/cdn/shop/files/23.jpg?v=1776322259&amp;width=533"/>
<img alt="Custom Baseball Uniform alternate view" className="img-secondary absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://sportscustomuniform.com/cdn/shop/files/24.jpg?v=1776322259&amp;width=533"/>
<div className="overlay absolute inset-x-0 bottom-0 bg-black/85 text-white text-xs tracking-[0.15em] uppercase text-center py-3 font-medium cursor-pointer">
                + Add to Cart
              </div>
</div>
<div className="p-4">
<p className="text-xs tracking-[0.1em] uppercase text-[#5b5b5b]">
                Baseball
              </p>
<h3 className="text-sm font-medium mt-1 text-[#282828]">
                Custom Baseball Sublimated
              </h3>
<p className="text-sm font-semibold mt-1">
<span className="text-[#d73f0f]">$49.00</span>
<span className="text-[#5b5b5b] line-through font-normal ml-1">
                  $69.00
                </span>
</p>
</div>
</div>
<div className="product-card border border-[#dee2e6] relative group">
<div className="aspect-square bg-[#0A0E1A] relative overflow-hidden flex items-center justify-center">
<div className="text-[#FFD700] img-primary">
<svg height="170" width="140"><use href="#dunkman"></use></svg>
</div>
<div className="overlay absolute inset-x-0 bottom-0 bg-black/85 text-white text-xs tracking-[0.15em] uppercase text-center py-3 font-medium cursor-pointer">
                + Add to Cart
              </div>
</div>
<div className="p-4">
<p className="text-xs tracking-[0.1em] uppercase text-[#5b5b5b]">
                Football
              </p>
<h3 className="text-sm font-medium mt-1 text-[#282828]">
                Pro-Cut Football Jersey
              </h3>
<p className="text-sm font-semibold mt-1 text-[#282828]">
                From $69.00
              </p>
</div>
</div>
<div className="product-card border border-[#dee2e6] relative group">
<div className="absolute top-3 left-3 z-10 bg-[#e43737] text-white text-[10px] font-bold px-2 py-1" style={{borderRadius: '3px'}}>
              NEW
            </div>
<div className="aspect-square bg-[#7B1F2B] relative overflow-hidden flex items-center justify-center">
<div className="text-white img-primary">
<svg className="" height="170" width="140">
<use href="#dunkman"></use>
</svg>
</div>
<div className="overlay absolute inset-x-0 bottom-0 bg-black/85 text-white text-xs tracking-[0.15em] uppercase text-center py-3 font-medium cursor-pointer">
                + Add to Cart
              </div>
</div>
<div className="p-4">
<p className="text-xs tracking-[0.1em] uppercase text-[#5b5b5b]">
                Soccer
              </p>
<h3 className="text-sm font-medium mt-1 text-[#282828]">
                Pro Soccer Kit
              </h3>
<p className="text-sm font-semibold mt-1 text-[#282828]">
                From $44.00
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 bg-[#f4f4f2]">
<div className="max-w-[1180px] mx-auto px-5">
<h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-center text-[#282828] mb-10">
          What Teams Say
        </h2>
<div className="grid md:grid-cols-3 gap-5">
<div className="bg-white border border-[#dee2e6] p-6">
<div className="flex gap-0.5 text-[#FFD700] mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-[#282828] leading-relaxed">
              "Best custom uniforms we've ever ordered. The fabric, the print,
              the fit — championship level. Our whole roster is hooked."
            </p>
<p className="text-xs tracking-[0.1em] uppercase mt-4 text-[#5b5b5b]">
              Marcus Hall · Eastside Hawks Basketball
            </p>
</div>
<div className="bg-white border border-[#dee2e6] p-6">
<div className="flex gap-0.5 text-[#FFD700] mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-[#282828] leading-relaxed">
              "Turnaround was faster than promised and the design team helped
              polish our logo. We'll be back every season."
            </p>
<p className="text-xs tracking-[0.1em] uppercase mt-4 text-[#5b5b5b]">
              Sara Lin · Westwood Volleyball Club
            </p>
</div>
<div className="bg-white border border-[#dee2e6] p-6">
<div className="flex gap-0.5 text-[#FFD700] mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-[#282828] leading-relaxed">
              "Our parents bought every player a custom set. ATHLETECH made the
              entire process effortless from sketch to delivery."
            </p>
<p className="text-xs tracking-[0.1em] uppercase mt-4 text-[#5b5b5b]">
              Coach Diaz · Riverside Little League
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0E1A] text-white">
<div className="max-w-[1180px] mx-auto px-5 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
<div className="">
<p className="text-xs tracking-[0.3em] uppercase text-[#FFD700]">
            Partnership
          </p>
<h2 className="font-heading text-2xl md:text-4xl tracking-tight mt-3">
            ATHLETECH × MipTags
          </h2>
<p className="font-heading text-lg md:text-xl mt-2">
            Every Uniform, Digitally Connected.
          </p>
<p className="text-sm text-white/70 mt-4 leading-relaxed">
            Each ATHLETECH uniform ships with an embedded NFC + QR tag powered
            by MipTags. Players, fans, and scouts tap to instantly access stats,
            video reels, and team rosters — right from the jersey.
          </p>
<a className="inline-block mt-6 bg-[#FFD700] text-black px-7 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white transition-colors" href="https://miptags.com">
            Learn More
          </a>
</div>
<div className="flex items-center justify-center">
<div className="border border-white/20 p-10 inline-flex flex-col items-center gap-4">
<iconify-icon className="text-[#FFD700]" icon="solar:tag-linear" width="56"></iconify-icon>
<p className="font-heading text-2xl tracking-[0.2em]">MIPTAGS</p>
<p className="text-xs tracking-[0.2em] uppercase text-white/60">
              Digital Technology
            </p>
</div>
</div>
</div>
</section>

<section className="md:py-16 pt-12 pb-12">
<div className="max-w-[760px] mx-auto px-5">
<h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-center text-[#282828] mb-10">
          Frequently Asked Questions
        </h2>
<div className="space-y-3">
<details className="border border-[#dee2e6]">
<summary className="flex items-center justify-between p-5 text-sm font-medium text-[#282828]">
<span>What customization options are available?</span>
<iconify-icon className="faq-icon text-[#e43737]" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-[#5b5b5b] leading-relaxed">
              Full color customization, team names, player names, numbers, logos
              and sponsors. Choose from 5 font families and pro-grade fabric
              finishes.
            </div>
</details>
<details className="border border-[#dee2e6]">
<summary className="flex items-center justify-between p-5 text-sm font-medium text-[#282828]">
<span>How long is the turnaround time?</span>
<iconify-icon className="faq-icon text-[#e43737]" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-[#5b5b5b] leading-relaxed">
              Standard production is 14–21 business days from design approval.
              Rush options ship in as little as 7 days.
            </div>
</details>
<details className="border border-[#dee2e6]">
<summary className="flex items-center justify-between p-5 text-sm font-medium text-[#282828]">
<span>Is there a minimum order quantity?</span>
<iconify-icon className="faq-icon text-[#e43737]" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-[#5b5b5b] leading-relaxed">
              No minimums. Order a single jersey or kit out an entire league —
              pricing scales with quantity.
            </div>
</details>
<details className="border border-[#dee2e6]">
<summary className="flex items-center justify-between p-5 text-sm font-medium text-[#282828]">
<span>How does sizing work?</span>
<iconify-icon className="faq-icon text-[#e43737]" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-[#5b5b5b] leading-relaxed">
              Every product page includes a size chart modal. We offer XS–3XL
              plus youth sizing on most styles, with sample kits available on
              request.
            </div>
</details>
<details className="border border-[#dee2e6]">
<summary className="flex items-center justify-between p-5 text-sm font-medium text-[#282828]">
<span>What artwork files do you accept?</span>
<iconify-icon className="faq-icon text-[#e43737]" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-[#5b5b5b] leading-relaxed">
              We accept AI, EPS, SVG, PDF, PNG, and JPG. Vector files are
              preferred for crisp printing — our team can also help redraw
              raster art.
            </div>
</details>
<details className="border border-[#dee2e6]">
<summary className="flex items-center justify-between p-5 text-sm font-medium text-[#282828]">
<span>Do you offer rush orders?</span>
<iconify-icon className="faq-icon text-[#e43737]" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-[#5b5b5b] leading-relaxed">
              Yes. Rush production is available with a 15–25% upgrade depending
              on quantity and complexity.
            </div>
</details>
<details className="border border-[#dee2e6]">
<summary className="flex items-center justify-between p-5 text-sm font-medium text-[#282828]">
<span>What's your refund &amp; revision policy?</span>
<iconify-icon className="faq-icon text-[#e43737]" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-[#5b5b5b] leading-relaxed">
              Unlimited design revisions before production. Custom items are
              non-refundable once approved, but we guarantee defects and
              printing errors at no charge.
            </div>
</details>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-[#dee2e6]">
<div className="max-w-[1180px] mx-auto px-5">
<h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-center text-[#282828] mb-2">
          Follow Us On Instagram
        </h2>
<p className="text-center text-sm text-[#5b5b5b] mb-10">
          @athletech.uniforms
        </p>
<div className="grid grid-cols-3 md:grid-cols-6 gap-3">
<div className="aspect-square bg-[#0A0E1A] flex items-center justify-center text-[#FFD700]">
<svg height="60" width="50"><use href="#dunkman"></use></svg>
</div>
<div className="aspect-square bg-[#7B1F2B] flex items-center justify-center text-white">
<svg height="60" width="50"><use href="#dunkman"></use></svg>
</div>
<div className="aspect-square bg-[#e43737] flex items-center justify-center text-white">
<svg height="60" width="50"><use href="#dunkman"></use></svg>
</div>
<div className="aspect-square bg-[#5b5b5b] flex items-center justify-center text-white">
<svg height="60" width="50"><use href="#dunkman"></use></svg>
</div>
<div className="aspect-square bg-[#FFD700] flex items-center justify-center text-black">
<svg height="60" width="50"><use href="#dunkman"></use></svg>
</div>
<div className="aspect-square bg-[#282828] flex items-center justify-center text-[#FFD700]">
<svg height="60" width="50"><use href="#dunkman"></use></svg>
</div>
</div>
</div>
</section>

<section className="bg-[#f4f4f2] py-12">
<div className="max-w-[760px] mx-auto px-5 text-center">
<h2 className="font-heading text-xl md:text-2xl tracking-[0.1em] uppercase text-[#282828]">
          Join The ATHLETECH Team
        </h2>
<p className="text-sm text-[#5b5b5b] mt-2">
          Get 10% off your first order — plus drops, deals, and team spotlights.
        </p>
<form className="flex flex-col sm:flex-row gap-0 mt-6 max-w-md mx-auto">
<input className="flex-1 border border-[#dee2e6] px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#282828]" placeholder="Enter your email" style={{borderRadius: '0'}} type="email"/>
<button className="bg-[#e43737] text-white px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-black transition-colors" type="submit">
            Subscribe
          </button>
</form>
</div>
</section>

<footer className="bg-[#0A0E1A] text-white">
<div className="md:py-16 max-w-[1600px] mr-auto ml-auto pt-12 pr-5 pb-12 pl-5">
<div className="grid md:grid-cols-4 gap-10 max-w-[1180px] mx-auto">
<div>
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center text-black">
<svg height="26" width="22"><use href="#dunkman"></use></svg>
</div>
<span className="font-heading text-base tracking-[0.25em]">
                ATHLETECH
              </span>
</div>
<p className="text-xs text-white/60 mt-4 leading-relaxed">
              Custom sports uniforms engineered for athletes who play to win.
              Design your kit, own your legacy.
            </p>
<div className="flex gap-4 mt-5">
<a aria-label="Instagram" className="text-white/70 hover:text-[#FFD700]" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
</a>
<a aria-label="TikTok" className="text-white/70 hover:text-[#FFD700]" href="#">
<iconify-icon icon="solar:tiktok-linear" width="18"></iconify-icon>
</a>
<a aria-label="Facebook" className="text-white/70 hover:text-[#FFD700]" href="#">
<iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-heading text-sm tracking-[0.2em] uppercase mb-4">
              Quick Links
            </h4>
<ul className="space-y-2 text-xs text-white/70">
<li><a className="hover:text-[#FFD700]" href="#">Home</a></li>
<li><a className="hover:text-[#FFD700]" href="#">About Us</a></li>
<li>
<a className="hover:text-[#FFD700]" href="#">Build Uniform</a>
</li>
<li><a className="hover:text-[#FFD700]" href="#">FAQ</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Contact</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Size Guide</a></li>
<li>
<a className="hover:text-[#FFD700]" href="#">Order Tracking</a>
</li>
<li>
<a className="hover:text-[#FFD700]" href="#">Privacy Policy</a>
</li>
<li>
<a className="hover:text-[#FFD700]" href="#">Terms of Service</a>
</li>
</ul>
</div>
<div>
<h4 className="font-heading text-sm tracking-[0.2em] uppercase mb-4">
              Team Uniforms
            </h4>
<ul className="space-y-2 text-xs text-white/70">
<li><a className="hover:text-[#FFD700]" href="#">Baseball</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Basketball</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Football</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Hockey</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Soccer</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Tennis</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Volleyball</a></li>
<li><a className="hover:text-[#FFD700]" href="#">Wrestling</a></li>
</ul>
</div>
<div className="">
<h4 className="font-heading text-sm tracking-[0.2em] uppercase mb-4">
              Contact Info
            </h4>
<ul className="space-y-2 text-xs text-white/70">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>[PLACEHOLDER — TO BE UPDATED]</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:phone-linear" width="16"></iconify-icon>
<span>+1 (888) ATHLETECH</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:letter-linear" width="16"></iconify-icon>
<span>hello@athletech.com</span>
</li>
</ul>
<form className="mt-5 flex">
<input className="flex-1 bg-white/10 border border-white/20 px-3 py-2.5 text-xs focus:outline-none focus:border-[#FFD700]" placeholder="Email" style={{borderRadius: '0'}} type="email"/>
<button className="bg-[#e43737] text-white px-4 py-2.5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#FFD700] hover:text-black transition-colors">
                Subscribe
              </button>
</form>
</div>
</div>

<div className="max-w-[1180px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
<div>© 2026 ATHLETECH. All rights reserved.</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#FFD700]" icon="solar:tag-linear" width="14"></iconify-icon>
<span>
              Powered by
              <a className="text-[#FFD700] hover:underline font-semibold tracking-[0.1em]" href="https://miptags.com">
                MIPTAGS
              </a>
              Digital Technology
            </span>
</div>
<div className="inline-flex gap-2 border-white/20 border pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center" style={{borderRadius: '50rem'}}>
<img alt="" className="w-4 h-3" src="https://cdn.shopify.com/static/images/flags/mx.svg?width=18"/>
<span>United States (USD $)</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</footer>


    </>
  );
}
