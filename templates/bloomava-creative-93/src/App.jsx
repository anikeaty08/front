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
},
colors: {
background: '#ffffff',
foreground: '#111111',
muted: '#f4f4f4',
'muted-foreground': '#666666',
border: '#e5e5e5',
accent: '#ff7a59',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<section className="relative min-h-[600px] md:min-h-[800px] w-full flex flex-col justify-between overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0" loop="" muted="" playsinline="">
<source src="https://cdn.midjourney.com/video/e9ae660f-6e61-495d-9a68-b48a3ff6779d/0.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-neutral-900/50 z-0 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-transparent to-neutral-900/90 z-0"></div>
<header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-8">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:hexagon-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg md:text-xl font-semibold tracking-tighter uppercase">
            Bloomava
          </span>
</div>
<button className="text-white hover:text-neutral-300 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</header>
<div className="relative z-10 px-6 md:px-12 pb-12 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-8">
<h1 className="text-white leading-none tracking-tighter">
<span className="block text-5xl md:text-7xl font-extralight opacity-80 mb-2 md:mb-0">
              Smart
            </span>
<span className="block text-7xl md:text-9xl font-semibold -ml-1 md:-ml-2 mt-[-10px] md:mt-[-20px]">
              Design
            </span>
</h1>
<div className="flex gap-4 mt-8 md:mt-12">
<div className="w-16 h-12 rounded-md overflow-hidden border border-white/20 shadow-sm">
<img alt="abstract 3d" className="w-full h-full object-cover" src="https://storage.googleapis.com/banani-generated-images/generated-images/6278f0e9-1ba7-4339-8cdb-1838da3dd8b3.jpg"/>
</div>
<div className="w-16 h-12 rounded-md overflow-hidden border border-white/20 shadow-sm">
<img alt="futuristic ui" className="w-full h-full object-cover" src="https://storage.googleapis.com/banani-generated-images/generated-images/eeb56093-88d8-4b07-bc3d-60030534870f.jpg"/>
</div>
<div className="w-16 h-12 rounded-md overflow-hidden border border-white/20 shadow-sm">
<img alt="modern branding" className="w-full h-full object-cover" src="https://storage.googleapis.com/banani-generated-images/generated-images/b8f2ac50-f332-4256-8251-ca59f30675c1.jpg"/>
</div>
</div>
</div>
<div className="md:col-span-4 text-white mt-8 md:mt-0">
<h2 className="text-2xl md:text-3xl font-normal mb-4 tracking-tight">
            Our visuals
          </h2>
<p className="text-sm opacity-80 mb-8 max-w-sm font-light leading-relaxed">
            Crafting digital experiences that merge functional purpose with
            exceptional aesthetic clarity.
          </p>
<button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-normal gap-2 border border-white/30 text-white hover:bg-white hover:text-neutral-900 transition-all duration-300">
            Discover More
          </button>
</div>
</div>
</section>

<section className="border-b border-border bg-background py-8 md:py-12">
<div className="flex flex-wrap items-center justify-center md:justify-between gap-8 px-6 md:px-12 max-w-7xl mx-auto">
<div className="flex items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<span className="text-sm md:text-base font-semibold tracking-tighter uppercase">
            NEXUS
          </span>
</div>
<div className="flex items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<span className="text-sm md:text-base font-semibold tracking-tighter uppercase">
            VERTEX
          </span>
</div>
<div className="flex items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<span className="text-sm md:text-base font-semibold tracking-tighter uppercase">
            QUANTUM
          </span>
</div>
<div className="flex items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer hidden sm:flex">
<span className="text-sm md:text-base font-semibold tracking-tighter uppercase">
            AURA
          </span>
</div>
<div className="flex items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer hidden md:flex">
<span className="text-sm md:text-base font-semibold tracking-tighter uppercase">
            ECHO
          </span>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
<div className="md:col-span-2 hidden md:block">
<div className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
          About Us
        </div>
</div>
<div className="md:col-span-4">
<div className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 md:hidden">
          About Us
        </div>
<div className="rounded-2xl overflow-hidden h-[400px] md:h-[600px] shadow-sm">
<img alt="cinematic lighting" className="w-full h-full object-cover" src="https://storage.googleapis.com/banani-generated-images/generated-images/eea96a29-6967-4b15-a0c3-bfdf5584ab87.jpg"/>
</div>
</div>
<div className="md:col-span-6 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-tight mb-8 md:mb-12">
          The role of user experience in modern design architectures.
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
<div>
<div className="text-4xl md:text-5xl font-extralight mb-2 tracking-tight">
              4K
            </div>
<h3 className="font-medium text-sm md:text-base mb-2">
              Happy customers
            </h3>
<p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
              We believe that the key to our success lies in understanding the
              core needs of our clients.
            </p>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" src="https://storage.googleapis.com/banani-avatars/avatar/male/18-25/European/1"/>
<img alt="avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" src="https://storage.googleapis.com/banani-avatars/avatar/male/18-25/European/2"/>
<img alt="avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" src="https://storage.googleapis.com/banani-avatars/avatar/male/18-25/European/3"/>
</div>
<span className="text-xs text-muted-foreground">
                Sustainable creativity.
              </span>
</div>
</div>
<div className="bg-muted/50 rounded-2xl p-6 flex flex-col justify-between border border-border/50">
<iconify-icon className="text-neutral-500 mb-4" icon="solar:like-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-xs md:text-sm font-normal text-muted-foreground mb-1">
                Satisfaction rate
              </div>
<div className="text-4xl md:text-5xl font-extralight tracking-tight">
                95%
              </div>
</div>
</div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs font-medium text-muted-foreground mb-2">
<span>Strategy</span>
<span>75%</span>
</div>
<div className="h-1 w-full bg-muted rounded-full overflow-hidden">
<div className="h-full bg-foreground w-[75%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-muted-foreground mb-2">
<span>Design</span>
<span>85%</span>
</div>
<div className="h-1 w-full bg-muted rounded-full overflow-hidden">
<div className="h-full bg-foreground w-[85%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 bg-neutral-50 border-t border-border/50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16">
<div className="md:col-span-3">
<div className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Featured Portfolio
            </div>
</div>
<div className="md:col-span-9 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight max-w-md leading-tight">
              Explore our latest branding and design projects
            </h2>
<button className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-normal gap-2 bg-foreground text-background hover:bg-neutral-800 transition-colors">
              View All
              <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
<div className="md:col-span-2 relative group cursor-pointer">
<div className="rounded-2xl overflow-hidden h-[300px] md:h-[500px] shadow-sm">
<img alt="abstract golden 3d shape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/banani-generated-images/generated-images/0d69c301-1bcc-4ce5-93d4-6294b9fb8d54.jpg"/>
</div>
<div className="mt-4 font-medium text-sm md:text-base">
              Pixelcraft Studio
            </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xs font-medium shadow-xl">
                View
              </div>
</div>
</div>
<div className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] shadow-sm">
<img alt="dark textured organic shape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/banani-generated-images/generated-images/c85b11a8-a72b-48ad-b0ad-b7e6e9a6ce50.jpg"/>
</div>
<div className="mt-4 font-medium text-sm md:text-base">Novaworks</div>
</div>
<div className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] bg-neutral-100 shadow-sm">
<img alt="white bottle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/banani-generated-images/generated-images/4aadf186-e602-490d-ac70-10ac9bafe1a2.jpg"/>
</div>
<div className="mt-4 font-medium text-sm md:text-base">
              Visionary Threads
            </div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
<div className="md:col-span-2 hidden md:block">
<div className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Expertise
          </div>
</div>
<div className="md:col-span-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
<div className="text-xs font-medium tracking-widest uppercase text-muted-foreground md:hidden">
            Expertise
          </div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-tight max-w-md flex-1">
            Your story deserves more than just visuals - we design with meaning
          </h2>
<div className="flex-1 flex gap-6 items-center">
<div className="relative">
<div className="text-7xl md:text-9xl font-extralight leading-none tracking-tighter">
                15
              </div>
<div className="absolute top-2 md:top-4 -right-4 md:-right-6 text-3xl md:text-4xl font-extralight">
                +
              </div>
</div>
<div className="text-sm md:text-base text-muted-foreground max-w-[120px] leading-tight font-light">
              Years of experience
            </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-5 flex flex-col justify-start md:justify-end pb-0 md:pb-12">
<h3 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8 max-w-xs tracking-tight leading-tight">
            We build brands that break the mold
          </h3>
<button className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-normal gap-2 bg-foreground text-background w-fit hover:bg-neutral-800 transition-colors">
            View Services
          </button>
</div>
<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-0">
<div className="bg-background border border-border p-6 md:p-8 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] hover:border-neutral-300 transition-colors cursor-pointer group">
<div>
<div className="flex justify-between items-start mb-4">
<h4 className="font-medium text-sm md:text-base">
                  Branding &amp; Identity
                </h4>
<iconify-icon className="text-neutral-400 group-hover:text-foreground transition-colors" icon="solar:arrow-right-up-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                Strategic positioning and visual identity systems that resonate.
              </p>
</div>
</div>
<div className="bg-background border border-border p-6 md:p-8 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] hover:border-neutral-300 transition-colors cursor-pointer group">
<div className="flex justify-between items-start">
<h4 className="font-medium text-sm md:text-base">
                Web &amp; Digital Design
              </h4>
<iconify-icon className="text-neutral-400 group-hover:text-foreground transition-colors" icon="solar:arrow-right-up-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Immersive digital experiences tailored for conversion.
            </p>
</div>
<div className="sm:col-span-2 bg-foreground text-background p-6 md:p-8 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px]">
<div className="text-xs md:text-sm font-light text-neutral-400">
              Customer satisfaction rate
            </div>
<div className="text-6xl md:text-8xl font-extralight tracking-tighter leading-none">
              95%
            </div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-20 md:py-32 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-center mb-12 md:mb-16 max-w-lg mx-auto leading-tight">
          Modern design and development for real-world solutions
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="bg-accent/90 rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
<img alt="3d rendering" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://storage.googleapis.com/banani-generated-images/generated-images/4330832b-d36e-4ea9-83ba-cf224f04adc6.jpg"/>
</div>
<div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] group cursor-pointer">
<img alt="packaging design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/banani-generated-images/generated-images/71081153-9d38-4bb6-92f0-cc1a6bebe929.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent flex flex-col justify-end p-6 md:p-8">
<h3 className="text-lg md:text-xl font-medium mb-2">
                Packaging design
              </h3>
<p className="text-xs text-white/70 mb-6 max-w-[200px] leading-relaxed">
                Tactile aesthetics that elevate product perception.
              </p>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-neutral-900 transform transition-transform group-hover:scale-110">
<iconify-icon icon="solar:add-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="bg-neutral-800 rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
<img alt="person working" className="w-full h-full object-cover opacity-90" src="https://storage.googleapis.com/banani-generated-images/generated-images/a1373d9d-4009-4446-a398-5baa27b2a772.jpg"/>
</div>
</div>
</div>
</section>

<section className="border-b border-border py-12 md:py-16 bg-neutral-50">
<div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center px-6">
<div>
<div className="text-4xl md:text-5xl font-extralight mb-2 tracking-tight">
            99%
          </div>
<div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Project on time
          </div>
</div>
<div>
<div className="text-4xl md:text-5xl font-extralight mb-2 tracking-tight">
            15+
          </div>
<div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Years of experience
          </div>
</div>
<div>
<div className="text-4xl md:text-5xl font-extralight mb-2 tracking-tight">
            452
          </div>
<div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Completed projects
          </div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16">
<div className="md:col-span-2 hidden md:block">
<div className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Why Choose Us
          </div>
</div>
<div className="md:col-span-10">
<div className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 md:hidden">
            Why Choose Us
          </div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight max-w-2xl leading-tight">
            We design with purpose, build with
            <span className="text-muted-foreground">
              passion, and deliver with impact
            </span>
</h2>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
<div className="lg:col-span-4">
<div className="rounded-2xl overflow-hidden bg-neutral-100 aspect-square shadow-sm">
<img alt="artistic profile" className="w-full h-full object-cover" src="https://storage.googleapis.com/banani-generated-images/generated-images/322548ed-aee9-4417-97da-299efec7700e.jpg"/>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
<div className="bg-background border border-border p-6 md:p-8 rounded-2xl flex flex-col justify-between aspect-auto sm:aspect-square">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 bg-neutral-900 rounded-lg overflow-hidden">
<img alt="skincare bottles" className="w-full h-full object-cover" src="https://storage.googleapis.com/banani-generated-images/generated-images/991ba237-4627-490b-913a-f486c8641835.jpg"/>
</div>
<div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background">
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div>
<h4 className="font-medium text-base md:text-lg mb-2">
                We give brands a visual voice
              </h4>
<p className="text-xs text-muted-foreground leading-relaxed">
                Translating core values into compelling visual narratives that
                command attention.
              </p>
</div>
</div>
<div className="bg-background border border-border p-6 md:p-8 rounded-2xl flex flex-col justify-between aspect-auto sm:aspect-square">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 bg-neutral-100 rounded-lg overflow-hidden">
<img alt="red paint splash" className="w-full h-full object-cover" src="https://storage.googleapis.com/banani-generated-images/generated-images/fd35b17d-adfa-4f56-8fe5-8323aefcc863.jpg"/>
</div>
<div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background">
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div>
<h4 className="font-medium text-base md:text-lg mb-2">
                We design with intention
              </h4>
<p className="text-xs text-muted-foreground leading-relaxed">
                Every pixel placed has a purpose, ensuring form always follows
                function beautifully.
              </p>
</div>
</div>
<div className="bg-neutral-50 border border-border p-6 rounded-2xl flex items-center justify-between">
<div className="text-3xl md:text-4xl font-extralight tracking-tight">
              95%
            </div>
<div className="text-xs text-muted-foreground max-w-[100px] text-right">
              Customer satisfaction rate
            </div>
</div>
<div className="bg-background border border-border p-6 rounded-2xl flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="avatar" className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://storage.googleapis.com/banani-avatars/avatar/male/18-25/European/4"/>
<img alt="avatar" className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://storage.googleapis.com/banani-avatars/avatar/male/18-25/European/5"/>
</div>
<div className="text-xs font-normal max-w-[120px] leading-tight text-muted-foreground">
              Sustainable creativity, timeless appeal.
            </div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto">
<div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[600px] flex items-center justify-center shadow-md group cursor-pointer">
<img alt="office work" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://storage.googleapis.com/banani-generated-images/generated-images/7437eeb8-505e-4a53-a25c-04a5d8264025.jpg"/>
<div className="absolute inset-0 bg-neutral-900/30 transition-colors duration-500 group-hover:bg-neutral-900/40"></div>
<div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110">
<iconify-icon className="ml-1 md:ml-2" icon="solar:play-circle-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</section>

<footer className="bg-background border-t border-border pt-16 md:pt-24 pb-8 px-6 md:px-12">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col items-center mb-16 md:mb-24">
<h3 className="text-lg md:text-xl font-medium mb-6 md:mb-8 tracking-tight">
            Follow us on Instagram
          </h3>
<div className="grid grid-cols-5 gap-2 md:gap-4 w-full">
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer hidden sm:block">
<img alt="yellow bottle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://storage.googleapis.com/banani-generated-images/generated-images/15b147b2-83bb-406e-8e0b-5e794c76bedd.jpg"/>
</div>
<div className="col-span-2 sm:col-span-1 aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="white cosmetic" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://storage.googleapis.com/banani-generated-images/generated-images/b1dc8e70-7850-4a35-b9eb-6ccc138295eb.jpg"/>
</div>
<div className="col-span-2 sm:col-span-1 aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
<img alt="yellow can" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://storage.googleapis.com/banani-generated-images/generated-images/1aa56839-9308-425e-a7fe-3ee755ab2ffd.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
<div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center backdrop-blur-sm">
<iconify-icon icon="solar:camera-minimalistic-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="col-span-1 aspect-square rounded-lg overflow-hidden group cursor-pointer hidden sm:block">
<img alt="white pouch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://storage.googleapis.com/banani-generated-images/generated-images/cd2fc25b-b4ff-4567-ae1a-ff23e5d582b2.jpg"/>
</div>
<div className="col-span-1 aspect-square rounded-lg overflow-hidden group cursor-pointer hidden md:block">
<img alt="organic texture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://storage.googleapis.com/banani-generated-images/generated-images/b4cb934e-4d48-4c02-879e-aa959131c303.jpg"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
<div className="md:col-span-5">
<div className="flex items-center gap-2 mb-4 md:mb-6">
<iconify-icon icon="solar:hexagon-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xl md:text-2xl font-semibold tracking-tighter uppercase">
                Bloomava
              </span>
</div>
<p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8 max-w-sm leading-relaxed">
              Crafting digital solutions that merge robust functionality with
              refined aesthetic principles.
            </p>
<button className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-normal gap-2 bg-foreground text-background hover:bg-neutral-800 transition-colors">
              Say hello!
            </button>
</div>
<div className="md:col-span-7 flex flex-col justify-end">
<div className="space-y-0 w-full max-w-sm md:ml-auto">
<a className="flex justify-between items-center border-b border-border py-4 text-neutral-600 hover:text-foreground transition-colors group" href="#">
<span className="text-base md:text-lg font-normal tracking-tight">
                  Home
                </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex justify-between items-center border-b border-border py-4 text-neutral-600 hover:text-foreground transition-colors group" href="#">
<span className="text-base md:text-lg font-normal tracking-tight">
                  Portfolio
                </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex justify-between items-center border-b border-border py-4 text-neutral-600 hover:text-foreground transition-colors group" href="#">
<span className="text-base md:text-lg font-normal tracking-tight">
                  Services
                </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex justify-between items-center border-b border-border py-4 text-neutral-600 hover:text-foreground transition-colors group" href="#">
<span className="text-base md:text-lg font-normal tracking-tight">
                  About
                </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex justify-between items-center border-b border-border py-4 text-neutral-600 hover:text-foreground transition-colors group" href="#">
<span className="text-base md:text-lg font-normal tracking-tight">
                  Contact
                </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border text-xs md:text-sm mb-12 md:mb-16">
<div>
<div className="font-medium mb-1 md:mb-2 text-foreground">
              Inquiries
            </div>
<a className="text-muted-foreground hover:text-foreground transition-colors" href="mailto:info@example.com">
              info@bloomava.com
            </a>
</div>
<div>
<div className="font-medium mb-1 md:mb-2 text-foreground">
              Contact us
            </div>
<a className="text-muted-foreground hover:text-foreground transition-colors" href="tel:+15551234567">
              (555) 123-4567
            </a>
</div>
<div>
<div className="font-medium mb-1 md:mb-2 text-foreground">Location</div>
<div className="text-muted-foreground">
              456 Sandbox, California 94043, USA
            </div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light">
<div className="text-center md:text-left">
            © 2024 Bloomava. All rights reserved.
          </div>
<div className="flex gap-4 md:gap-6">
<a className="hover:text-foreground transition-colors" href="#">
              License
            </a>
<a className="hover:text-foreground transition-colors" href="#">
              Style guide
            </a>
<a className="hover:text-foreground transition-colors" href="#">
              Privacy
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
