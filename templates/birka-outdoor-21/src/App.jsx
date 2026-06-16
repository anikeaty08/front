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



      document.addEventListener('DOMContentLoaded',function(){var els=document.querySelectorAll('section, footer, .grid > div, h1, h2');els.forEach(function(el){el.classList.add('aura-reveal')});var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('aura-visible');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})});
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="absolute top-0 left-0 w-full h-[100vh] min-h-[750px] z-[-1] pointer-events-none">
<div className="absolute inset-0 bg-[url('https://i.pics.rs/KKBaL.png')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/95 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/50"></div>
</div>

<div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-800/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex flex-col gap-0 cursor-pointer gap-x-0 gap-y-0 items-start" onclick="window.location.href='https://i.pics.rs/ttCRX.png'" role="button">
<img alt="BIRKA" className="h-10 w-auto" src="https://i.pics.rs/ttCRX.png"/>
</div>
<nav className="hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-widest text-white/70 uppercase">
<a className="text-[#d8b485] border-b border-[#d8b485] pb-1" href="#home">
            Home
          </a>
<a className="hover:text-[#d8b485] transition-colors" href="#about">
            About Us
          </a>
<a className="hover:text-[#d8b485] transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-[#d8b485] transition-colors" href="#brands">
            Brands
          </a>
<a className="hover:text-[#d8b485] transition-colors" href="#markets">
            Markets
          </a>
<a className="hover:text-[#d8b485] transition-colors" href="#contact">
            Contact
          </a>
</nav>
<div className="flex items-center">
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 text-[10px] font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-colors uppercase" href="#contact">
            Let's Connect →
          </a>
<button className="lg:hidden ml-4 text-zinc-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '24px'}}></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow z-10 relative pt-0 pb-0">

<section className="max-w-[1400px] mx-auto px-6 flex flex-col items-start text-left pt-40 pb-24 relative w-full scroll-mt-24 aura-reveal aura-visible">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-px bg-[#d8b485]"></div>
<p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase leading-relaxed">
            Connecting Brands.
            <br/>
            Building Markets.
          </p>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-2 leading-none uppercase aura-reveal aura-visible">
          BIRKA
        </h1>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 w-full max-w-2xl">
<h2 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-white uppercase whitespace-nowrap aura-reveal aura-visible">
            Sales Agency
          </h2>
<div className="hidden sm:block flex-grow h-px bg-[#d8b485]/50"></div>
</div>
<p className="text-sm md:text-base text-zinc-300 max-w-lg font-light mb-12 leading-relaxed">
          We are your local partner for sales representation
          <br className="hidden md:block"/>
          and market development in Croatia and the Adriatic region.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mb-20">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[10px] font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all uppercase" href="#discover">
            Discover More →
          </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center text-[10px] font-bold tracking-widest text-white uppercase border-b border-white/30 pb-1 hover:border-white transition-colors" href="#about">
            Who We Are
          </a>
</div>
<div className="absolute right-0 top-[60%] -translate-y-1/2 rotate-90 origin-right text-[10px] tracking-[0.5em] text-zinc-500 uppercase hidden xl:block">
          Adriatic Region
        </div>
<div className="absolute right-12 bottom-12 w-32 h-32 rounded-full border border-[#d8b485]/30 hidden lg:flex items-center justify-center backdrop-blur-sm">
<div className="text-center flex flex-col items-center justify-center">
<span className="block text-[#d8b485] text-[10px] tracking-widest mb-1">
              BIRKA
            </span>
<span className="block text-3xl font-serif text-[#d8b485] leading-none mb-1">
              B
            </span>
<span className="block text-zinc-500 text-[8px] tracking-widest">
              EST. 2024
            </span>
</div>
</div>
</section>

<div className="w-full">
<div className="w-full border-y border-white/5 bg-[#09090b]/80 backdrop-blur-md py-8">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex items-start gap-4 aura-reveal aura-visible">
<iconify-icon className="text-3xl text-[#d8b485] shrink-0" icon="solar:mountains-linear"></iconify-icon>
<div>
<h4 className="text-[10px] font-bold text-white tracking-widest mb-1 uppercase">
                  Local Expertise
                </h4>
<p className="text-[11px] text-zinc-400 leading-snug">
                  Deep knowledge of the
                  <br/>
                  market and retailers
                </p>
</div>
</div>
<div className="flex items-start gap-4 aura-reveal aura-visible">
<iconify-icon className="text-3xl text-[#d8b485] shrink-0" icon="solar:hand-shake-linear"></iconify-icon>
<div>
<h4 className="text-[10px] font-bold text-white tracking-widest mb-1 uppercase">
                  Strong Relationships
                </h4>
<p className="text-[11px] text-zinc-400 leading-snug">
                  Trusted by key retailers
                  <br/>
                  across the region
                </p>
</div>
</div>
<div className="flex items-start gap-4 aura-reveal aura-visible">
<iconify-icon className="text-3xl text-[#d8b485] shrink-0" icon="solar:target-linear"></iconify-icon>
<div className="">
<h4 className="text-[10px] font-bold text-white tracking-widest mb-1 uppercase">
                  Focused Results
                </h4>
<p className="text-[11px] text-zinc-400 leading-snug">
                  Growing brands and
                  <br/>
                  long-term partnerships
                </p>
</div>
</div>
<div className="flex items-start gap-4 aura-reveal aura-visible">
<iconify-icon className="text-3xl text-[#d8b485] shrink-0" icon="solar:global-linear"></iconify-icon>
<div className="">
<h4 className="text-[10px] font-bold text-white tracking-widest mb-1 uppercase">
                  Adriatic Coverage
                </h4>
<p className="text-[11px] text-zinc-400 leading-snug">
                  Croatia, Slovenia,
                  <br/>
                  Bosnia &amp; Herzegovina
                </p>
</div>
</div>
</div>
</div>
<section className="max-w-[1400px] mx-auto w-full border-b border-white/5 flex flex-col lg:flex-row mt-0 scroll-mt-24 aura-reveal aura-visible" id="about">
<div className="flex-1 p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5 relative bg-[#0c0c0e]">
<div className="hidden md:block absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-8 h-px bg-[#d8b485]"></div>
<p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase">
                  Our Mission
                </p>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1] max-w-md aura-reveal">
                We help outdoor brands grow in the right way.
              </h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-12 max-w-md">
                Through strong retailer partnerships, market insight and
                dedicated sales execution, we open doors and build sustainable
                growth for your brand.
              </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-[10px] font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all uppercase" href="#about">
                About Us →
              </a>
</div>
</div>
<div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col bg-[#09090b] scroll-mt-24" id="services">
<div className="p-10 lg:p-16 border-b border-white/5 flex-grow">
<div className="flex items-center gap-4 mb-10">
<div className="w-8 h-px bg-[#d8b485]"></div>
<p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase">
                  Our Services
                </p>
</div>
<div className="space-y-8">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#d8b485] shrink-0 mt-0.5" icon="solar:document-text-linear"></iconify-icon>
<div className="">
<h4 className="text-[11px] font-bold text-white tracking-widest mb-1 group-hover:text-[#d8b485] transition-colors uppercase">
                        Sales Representation
                      </h4>
<p className="text-[11px] text-zinc-500">
                        Professional representation with focus on results
                      </p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-[#d8b485] text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#d8b485] shrink-0 mt-0.5" icon="solar:chart-square-linear"></iconify-icon>
<div>
<h4 className="text-[11px] font-bold text-white tracking-widest mb-1 group-hover:text-[#d8b485] transition-colors uppercase">
                        Market Development
                      </h4>
<p className="text-[11px] text-zinc-500">
                        Building brand presence and market share
                      </p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-[#d8b485] text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#d8b485] shrink-0 mt-0.5" icon="solar:shop-linear"></iconify-icon>
<div className="">
<h4 className="text-[11px] font-bold text-white tracking-widest mb-1 group-hover:text-[#d8b485] transition-colors uppercase">
                        Retail Partnerships
                      </h4>
<p className="text-[11px] text-zinc-500">
                        Strong network of specialist retailers
                      </p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-[#d8b485] text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#d8b485] shrink-0 mt-0.5" icon="solar:megaphone-linear"></iconify-icon>
<div className="">
<h4 className="text-[11px] font-bold text-white tracking-widest mb-1 group-hover:text-[#d8b485] transition-colors uppercase">
                        Marketing Support
                      </h4>
<p className="text-[11px] text-zinc-500">
                        In-store, digital and brand activations
                      </p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-[#d8b485] text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col h-full min-h-[300px] lg:h-auto lg:flex-1">
<div className="hidden"></div>
<div className="grid grid-cols-2 flex-1 min-h-[150px]">
<div className="bg-[url('https://images.unsplash.com/photo-1588636400615-56f8f533a1e9?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center border-r border-white/5 aura-reveal"></div>
<div className="bg-[url('https://images.unsplash.com/photo-1549298453-2940e797ab84?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center aura-reveal"></div>
</div>
</div>
</div>
</section>
</div>
<section className="max-w-[1400px] mx-auto w-full border-b border-white/5 py-20 px-6 relative scroll-mt-24 aura-reveal" id="brands">
<div className="flex items-center gap-4 mb-12">
<div className="w-8 h-px bg-[#d8b485]"></div>
<p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase">
            Our Brands
          </p>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-12 leading-[1.1] max-w-2xl aura-reveal">
          Trusted by premium outdoor brands.
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="aspect-[3/2] flex items-center justify-center border border-white/5 bg-[#0c0c0e] hover:bg-[#111114] transition-colors aura-reveal">
<span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">
              Brand 1
            </span>
</div>
<div className="aspect-[3/2] flex items-center justify-center border border-white/5 bg-[#0c0c0e] hover:bg-[#111114] transition-colors aura-reveal">
<span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">
              Brand 2
            </span>
</div>
<div className="aspect-[3/2] flex items-center justify-center border border-white/5 bg-[#0c0c0e] hover:bg-[#111114] transition-colors aura-reveal">
<span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">
              Brand 3
            </span>
</div>
<div className="aspect-[3/2] flex items-center justify-center border border-white/5 bg-[#0c0c0e] hover:bg-[#111114] transition-colors aura-reveal">
<span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">
              Brand 4
            </span>
</div>
</div>
</section>
<section className="max-w-[1400px] mx-auto w-full border-b border-white/5 py-20 px-6 relative scroll-mt-24 aura-reveal" id="markets">
<div className="flex items-center gap-4 mb-12">
<div className="w-8 h-px bg-[#d8b485]"></div>
<p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase">
            Our Markets
          </p>
</div>
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="flex-1">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1] aura-reveal">
              The Adriatic Region.
            </h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-md">
              We provide extensive coverage across the Adriatic region, offering
              deep local market knowledge, cultural understanding, and
              established retail networks in key countries.
            </p>
</div>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
<div className="p-8 border border-white/5 bg-[#0c0c0e] aura-reveal">
<h3 className="text-lg font-medium text-white mb-2">Croatia</h3>
<p className="text-[11px] text-zinc-500">HQ &amp; Primary Market</p>
</div>
<div className="p-8 border border-white/5 bg-[#0c0c0e] aura-reveal">
<h3 className="text-lg font-medium text-white mb-2">Slovenia</h3>
<p className="text-[11px] text-zinc-500">Key Alpine Market</p>
</div>
<div className="p-8 border border-white/5 bg-[#0c0c0e] aura-reveal">
<h3 className="text-lg font-medium text-white mb-2">
                Bosnia &amp; Herzegovina
              </h3>
<p className="text-[11px] text-zinc-500">Growing Retail Sector</p>
</div>
<div className="p-8 border border-white/5 bg-[#0c0c0e] aura-reveal">
<h3 className="text-lg font-medium text-white mb-2">Montenegro</h3>
<p className="text-[11px] text-zinc-500">Emerging Market</p>
</div>
</div>
</div>
</section>
<section className="max-w-[1400px] mx-auto w-full py-20 px-6 relative scroll-mt-24 aura-reveal" id="contact">
<div className="flex flex-col lg:flex-row gap-16">
<div className="flex-1">
<div className="flex items-center gap-4 mb-8">
<div className="w-8 h-px bg-[#d8b485]"></div>
<p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase">
                Let's Connect
              </p>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1] max-w-md aura-reveal">
              Ready to grow your brand?
            </h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-12 max-w-md">
              Get in touch with us to discuss how we can help represent and grow
              your outdoor brand in the Adriatic region.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#d8b485] shrink-0 mt-1" icon="solar:letter-linear"></iconify-icon>
<div>
<h4 className="text-[10px] font-bold text-white tracking-widest mb-2 uppercase">
                    Email
                  </h4>
<a className="text-sm text-zinc-400 hover:text-[#d8b485] transition-colors" href="mailto:hello@birka.com">
                    hello@birka.com
                  </a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#d8b485] shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<h4 className="text-[10px] font-bold text-white tracking-widest mb-2 uppercase">
                    Location
                  </h4>
<p className="text-sm text-zinc-400">Zagreb, Croatia</p>
</div>
</div>
</div>
</div>
<div className="flex-1 lg:max-w-xl w-full">
<form className="space-y-8 bg-[#0c0c0e] p-8 md:p-12 border border-white/5">
<div>
<label className="block text-[10px] font-bold text-white tracking-widest mb-4 uppercase">
                  Name
                </label>
<input className="w-full bg-transparent border-b border-white/10 pb-4 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors placeholder:text-zinc-700" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-[10px] font-bold text-white tracking-widest mb-4 uppercase">
                  Email
                </label>
<input className="w-full bg-transparent border-b border-white/10 pb-4 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors placeholder:text-zinc-700" placeholder="Your email address" type="email"/>
</div>
<div>
<label className="block text-[10px] font-bold text-white tracking-widest mb-4 uppercase">
                  Message
                </label>
<textarea className="w-full bg-transparent border-b border-white/10 pb-4 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors placeholder:text-zinc-700 resize-none h-24" placeholder="How can we help?"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-8 py-5 text-[10px] font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all uppercase mt-4" type="button">
                Send Message →
              </button>
</form>
</div>
</div>
</section>


</main>

<footer className="border-t border-white/5 bg-zinc-950 z-10 relative mt-auto aura-reveal">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-base font-medium tracking-tighter text-zinc-400">
            BIRKA
          </span>
</div>
<div className="flex items-center gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-300 transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#">
            Terms of Service
          </a>
<span>© 2024 BIRKA Agency. All rights reserved.</span>
</div>
</div>
</footer>


    </>
  );
}
