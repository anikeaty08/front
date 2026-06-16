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



      lucide.createIcons({
          strokeWidth: 1.5
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-black/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex-1 flex items-center">
<div className="hidden md:flex items-center space-x-8 text-sm font-normal text-foreground/80">
<a className="text-primary bg-secondary px-4 py-2 rounded-full transition-colors font-sans" href="#">
              Home
            </a>
<a className="hover:text-primary transition-colors font-sans" href="#">
              Our Story
            </a>
<a className="hover:text-primary transition-colors font-sans" href="#">
              Menu
            </a>
<a className="hover:text-primary transition-colors font-sans" href="#">
              Visit
            </a>
</div>
</div>

<div className="flex gap-2 items-center justify-center">
<span className="text-xl tracking-tight font-newsreader font-light">
            Empire Owl Salon
          </span>
<i className="size-5 text-primary/70 -ml-1" data-lucide="feather"></i>
</div>

<div className="flex-1 flex items-center justify-end">
<a className="hidden md:flex items-center gap-2 bg-secondary text-foreground px-5 py-2.5 rounded-full text-sm font-normal hover:bg-secondary/80 transition-colors font-sans" href="#">
<span className="flex items-center justify-center bg-white rounded-full size-6 shadow-sm">
<i className="size-3.5" data-lucide="calendar"></i>
</span>
            Book Your Chair
          </a>
<button className="md:hidden p-2 text-foreground">
<i className="size-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="pt-28 pb-20 px-4 md:px-6">
<div className="max-w-7xl mx-auto">
<div className="relative rounded-[2.5rem] overflow-hidden bg-[#1b120d] min-h-[680px] md:min-h-[720px] flex flex-col items-center justify-center px-6 text-center text-white shadow-2xl shadow-primary/10 border border-white/10">

<img alt="Empire Owl hair salon styling session" className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c62b5438-f75e-4904-bfd1-674ae5303d47_3840w.webp"/>

<div className="relative z-10 max-w-3xl flex flex-col items-center">
<h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1.02] mb-6 max-w-4xl tracking-tight font-newsreader font-light">
              Royal hair, wise hands, homestyle care
            </h1>
<p className="text-lg md:text-xl text-white/80 max-w-xl font-newsreader font-light">
              Empire Owl is a highly rated independent salon in Langford, BC,
              blending elevated cuts, lived-in color, extensions, brows, lashes,
              and micro tattoos with warm, one-on-one attention.
            </p>
<button className="flex gap-2 hover:bg-white/20 transition-all group text-sm font-medium text-white bg-white/10 border-white/20 border rounded-full mt-10 pt-3 pr-6 pb-3 pl-6 backdrop-blur-md gap-x-2 gap-y-2 items-center font-sans">
<span className="flex items-center justify-center bg-white text-black rounded-full size-6">
<i className="size-3.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</span>
              Explore the service menu
            </button>
</div>

<div className="absolute bottom-0 w-[120%] h-1/2 left-[-10%] border-t border-white/20 rounded-t-[100%] border-dashed pointer-events-none opacity-50"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(152,106,62,0.45),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.65))] pointer-events-none"></div>
<div className="absolute left-6 bottom-6 z-20 hidden md:flex items-center gap-4 bg-white/12 backdrop-blur-xl border border-white/20 rounded-3xl p-4 text-left shadow-2xl">
<div className="size-12 rounded-2xl bg-white text-primary flex items-center justify-center">
<i className="size-6" data-lucide="scissors"></i>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-white/60 font-semibold font-sans">
                Cuts from
              </p>
<p className="text-2xl leading-none font-newsreader font-light">
                $35–$60
              </p>
</div>
</div>
<div className="absolute bottom-8 right-8 z-20 hidden md:grid grid-cols-3 gap-2 text-xs font-semibold">
<span className="bg-white/15 backdrop-blur border border-white/20 rounded-full px-3 py-2 font-sans">
              Balayage $220
            </span>
<span className="bg-white/15 backdrop-blur border border-white/20 rounded-full px-3 py-2 font-sans">
              Lashes $85+
            </span>
<span className="bg-white/15 backdrop-blur border border-white/20 rounded-full px-3 py-2 font-sans">
              Brows $300+
            </span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium uppercase tracking-wider text-primary mb-8 font-sans">
<span className="size-1.5 rounded-full bg-primary"></span>
          Independent Langford Salon
        </div>
<h2 className="text-3xl md:text-5xl leading-tight text-foreground font-newsreader font-light">
          We fuse the lion’s royal confidence with the owl’s precision and
          wisdom
          <img alt="Glossy styled hair" className="inline-block h-10 w-10 md:h-14 md:w-14 rounded-full object-cover align-middle mx-2 border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&amp;fit=crop&amp;q=80&amp;w=120"/>
          to create high-end color, cuts, brows, lashes, and beauty details
          inside a cozy
          <img alt="Salon chair" className="inline-block h-10 w-10 md:h-14 md:w-14 rounded-full object-cover align-middle mx-2 border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&amp;fit=crop&amp;q=80&amp;w=120"/>
          homestyle salon.
        </h2>
</div>
</section>

<section className="py-16 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium uppercase tracking-wider text-primary mb-4 font-sans">
<span className="size-1.5 rounded-full bg-primary"></span>
              Inside the Chair
            </div>
<h2 className="text-4xl md:text-5xl tracking-tight leading-tight max-w-2xl font-newsreader font-light">
              Cuts, color and beauty details with a lived-in finish
            </h2>
</div>
<p className="text-foreground/60 text-sm md:text-base font-medium max-w-sm font-sans">
            A quick look at the textures, tones and cozy salon moments clients
            come back for.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
<div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-5">
<div className="relative rounded-[2rem] overflow-hidden min-h-[220px] md:min-h-[300px] shadow-sm group">
<img alt="Precision haircut styling" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;q=80&amp;w=700"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<p className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-1 font-sans">
                  Precision
                </p>
<p className="text-xl tracking-tight font-newsreader font-light">
                  Layered cuts
                </p>
</div>
</div>
<div className="relative rounded-[2rem] overflow-hidden min-h-[220px] md:min-h-[220px] shadow-sm group">
<img alt="Curly hair styling result" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&amp;fit=crop&amp;q=80&amp;w=700"/>
<div className="absolute top-4 left-4 bg-white/85 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold text-primary font-sans">
                Curl care
              </div>
</div>
</div>
<div className="md:col-span-6 relative rounded-[2.5rem] overflow-hidden min-h-[520px] shadow-xl shadow-primary/10 group">
<img alt="Salon color appointment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&amp;fit=crop&amp;q=80&amp;w=1100"/>
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.68),rgba(0,0,0,0.08)),radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.28),transparent_28%)]"></div>
<div className="absolute top-6 right-6 bg-white/15 backdrop-blur-xl border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold flex items-center gap-2 font-sans">
<i className="size-4" data-lucide="sparkles"></i>
              Color in progress
            </div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end md:justify-between gap-5 text-white">
<div className="">
<p className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-2 font-sans">
                  Signature Service
                </p>
<h3 className="text-4xl md:text-5xl tracking-tight leading-none mb-3 font-newsreader font-light">
                  Soft blonding, shiny brunettes, confident cuts
                </h3>
<p className="text-white/75 text-sm font-medium max-w-md font-sans">
                  Consultation-led appointments for color goals, hair health,
                  timing and maintenance.
                </p>
</div>
<div className="bg-white text-foreground rounded-3xl p-4 min-w-[150px] shadow-lg">
<p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1 font-sans">
                  From
                </p>
<p className="text-3xl tracking-tight font-newsreader font-light">
                  $35
                </p>
<p className="text-xs text-foreground/60 font-medium font-sans">
                  cuts &amp; styling
                </p>
</div>
</div>
</div>
<div className="md:col-span-3 grid grid-cols-1 gap-5">
<div className="relative rounded-[2rem] overflow-hidden min-h-[250px] shadow-sm group">
<img alt="Fresh salon blowout" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-2xl tracking-tight font-newsreader font-light">
                  Blowouts
                </p>
<p className="text-xs text-white/70 font-medium font-sans">
                  polished finishing
                </p>
</div>
</div>
<div className="bg-secondary rounded-[2rem] p-6 min-h-[190px] flex flex-col justify-between shadow-sm border border-border/50">
<div className="size-11 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
<i className="size-5" data-lucide="eye"></i>
</div>
<div className="">
<h3 className="text-2xl tracking-tight mb-2 font-newsreader font-light">
                  Brows, lashes &amp; details
                </h3>
<p className="text-sm text-foreground/60 font-medium font-sans">
                  Beauty add-ons that finish the look without feeling overdone.
                </p>
</div>
</div>
<div className="relative rounded-[2rem] overflow-hidden min-h-[210px] shadow-sm group">
<img alt="Brow and lash beauty service" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&amp;fit=crop&amp;q=80&amp;w=700"/>
<div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1 text-xs font-semibold font-sans">
                Beauty
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-background">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col items-center mb-16 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium uppercase tracking-wider text-primary mb-4 font-sans">
<span className="size-1.5 rounded-full bg-primary"></span>
            Service Menu
          </div>
<h2 className="text-4xl md:text-5xl font-newsreader font-light">
            Cuts, color, beauty &amp; finishing
          </h2>
</div>
<div className="space-y-4">

<div className="border border-border bg-white rounded-3xl p-6 md:p-8 shadow-sm transition-all">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center size-12 rounded-full bg-secondary text-primary shrink-0">
<i className="size-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-2xl md:text-3xl font-newsreader font-light">
                  Layered cuts &amp; curl styling
                </h3>
</div>
<div className="md:w-1/2 flex flex-col items-start md:items-end gap-6">
<button className="size-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground self-end md:self-auto shrink-0 transition-transform rotate-180">
<i className="size-5" data-lucide="minus"></i>
</button>
<div className="w-full">
<p className="text-foreground/70 mb-6 text-sm font-medium leading-relaxed font-sans">
                    Kids, men’s, and women’s cuts with special praise from
                    locals for layered shapes, curly styling, and fast, precise
                    finishing.
                  </p>
<a className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors font-sans" href="#">
<span className="flex items-center justify-center bg-white rounded-full size-6 shadow-sm">
<i className="size-3.5" data-lucide="arrow-right"></i>
</span>
                    See haircut pricing
                  </a>
</div>
</div>
</div>
</div>

<div className="border border-border bg-transparent hover:bg-white/50 cursor-pointer rounded-3xl p-6 md:p-8 transition-all flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center size-12 rounded-full bg-secondary text-primary shrink-0">
<svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<h3 className="text-2xl md:text-3xl text-foreground/80 font-newsreader font-light">
                Color, blonding &amp; balayage
              </h3>
</div>
<div className="flex items-center gap-6 text-right">
<p className="hidden md:block text-foreground/50 text-sm max-w-xs pr-4 font-sans">
                Toners, root touch-ups, foils, solid color, lightening
                retouches, color corrections, balayage, and ombre.
              </p>
<button className="size-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground shrink-0 shadow-sm">
<i className="size-5" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="border border-border bg-transparent hover:bg-white/50 cursor-pointer rounded-3xl p-6 md:p-8 transition-all flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center size-12 rounded-full bg-secondary text-primary shrink-0">
<i className="size-6" data-lucide="sun"></i>
</div>
<h3 className="text-2xl md:text-3xl text-foreground/80 font-newsreader font-light">
                Extensions &amp; specialty add-ons
              </h3>
</div>
<div className="flex items-center gap-6 text-right">
<p className="hidden md:block text-foreground/50 text-sm max-w-xs pr-4 font-sans">
                Tape-in, sewn-in, and microbead extensions plus treatments, wash
                and style, tinsel, braids, and occasion up-dos.
              </p>
<button className="size-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground shrink-0 shadow-sm">
<i className="size-5" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="border border-border bg-transparent hover:bg-white/50 cursor-pointer rounded-3xl p-6 md:p-8 transition-all flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center size-12 rounded-full bg-secondary text-primary shrink-0">
<i className="size-6" data-lucide="droplet"></i>
</div>
<h3 className="text-2xl md:text-3xl text-foreground/80 font-newsreader font-light">
                Brows, lashes &amp; micro tattoos
              </h3>
</div>
<div className="flex items-center gap-6 text-right">
<p className="hidden md:block text-foreground/50 text-sm max-w-xs pr-4 font-sans">
                Microblading, ombre brows, powder brows, lash sets, lash lift
                and tints, waxing, and custom micro tattoos.
              </p>
<button className="size-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground shrink-0 shadow-sm">
<i className="size-5" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
<div className="bg-white rounded-[2rem] p-6 border border-border shadow-sm">
<div className="flex items-center justify-between mb-5">
<h3 className="text-2xl tracking-tight font-newsreader font-light">
                  Haircuts
                </h3>
<i className="size-5 text-primary" data-lucide="scissors"></i>
</div>
<ul className="space-y-3 text-sm font-medium text-foreground/70">
<li className="flex justify-between">
<span className="font-sans">Kids</span>
<strong className="font-sans">$30–$45</strong>
</li>
<li className="flex justify-between">
<span className="font-sans">Men’s</span>
<strong className="font-sans">$35</strong>
</li>
<li className="flex justify-between">
<span className="font-sans">Women’s</span>
<strong className="font-sans">$50–$60</strong>
</li>
</ul>
</div>
<div className="bg-primary text-white rounded-[2rem] p-6 shadow-xl shadow-primary/20 relative overflow-hidden">
<div className="absolute -right-10 -top-10 size-32 rounded-full bg-white/10"></div>
<div className="flex items-center justify-between mb-5 relative">
<h3 className="text-2xl tracking-tight font-newsreader font-light">
                  Color
                </h3>
<i className="size-5" data-lucide="palette"></i>
</div>
<ul className="space-y-3 text-sm font-medium text-white/80 relative">
<li className="flex justify-between">
<span className="font-sans">Root touch-up</span>
<strong className="font-sans">$105</strong>
</li>
<li className="flex justify-between">
<span className="font-sans">Full foils</span>
<strong className="font-sans">$150–$200</strong>
</li>
<li className="flex justify-between">
<span className="font-sans">Balayage / Ombre</span>
<strong className="font-sans">$220</strong>
</li>
</ul>
</div>
<div className="bg-white rounded-[2rem] p-6 border border-border shadow-sm">
<div className="flex items-center justify-between mb-5">
<h3 className="text-2xl tracking-tight font-newsreader font-light">
                  Beauty
                </h3>
<i className="size-5 text-primary" data-lucide="sparkles"></i>
</div>
<ul className="space-y-3 text-sm font-medium text-foreground/70">
<li className="flex justify-between">
<span className="font-sans">Classic lashes</span>
<strong className="font-sans">$85</strong>
</li>
<li className="flex justify-between">
<span className="font-sans">Microblading</span>
<strong className="font-sans">$300</strong>
</li>
<li className="flex justify-between">
<span className="font-sans">Micro tattoos</span>
<strong className="font-sans">$60+</strong>
</li>
</ul>
</div>
</div>
<p className="text-center text-xs text-foreground/50 font-medium pt-3 font-sans">
            Prices may change with hair type, density, corrections, extensions,
            and deposit-based consultation services.
          </p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
<div className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden min-h-[520px] shadow-sm bg-secondary">
<img alt="Kristy at Empire Owl salon" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-full px-4 py-2 text-xs font-semibold text-primary flex items-center gap-2 font-sans">
<i className="size-4" data-lucide="crown"></i>
              Independent Langford salon
            </div>
<div className="absolute bottom-0 left-0 w-full p-7 md:p-8">
<div className="bg-white/12 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white">
<div className="flex items-start justify-between gap-4 mb-4">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight mb-1 font-newsreader font-light">
                      Kristy &amp; the Empire Owl team
                    </h3>
<p className="text-white/75 text-sm font-medium font-sans">
                      Blonding, color transitions &amp; precision styling
                    </p>
</div>
<div className="size-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
<i className="size-5" data-lucide="flower-2"></i>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-center">
<div className="rounded-2xl bg-white/15 p-3">
<p className="text-2xl tracking-tight font-newsreader font-light">
                      5.0
                    </p>
<p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold font-sans">
                      Rated
                    </p>
</div>
<div className="rounded-2xl bg-white/15 p-3">
<p className="text-2xl tracking-tight font-newsreader font-light">
                      1:1
                    </p>
<p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold font-sans">
                      Care
                    </p>
</div>
<div className="rounded-2xl bg-white/15 p-3">
<p className="text-2xl tracking-tight font-newsreader font-light">
                      Local
                    </p>
<p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold font-sans">
                      Owned
                    </p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-1 gap-6">
<div className="bg-secondary rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm">
<div className="absolute -top-20 -right-20 size-64 bg-primary/20 blur-[80px] rounded-full"></div>
<div className="absolute -bottom-20 -left-20 size-64 bg-primary/10 blur-[80px] rounded-full"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium uppercase tracking-wider text-primary mb-6 bg-white/50 backdrop-blur-md font-sans">
<span className="size-1.5 rounded-full bg-primary"></span>
                  Royal Results, Wise Care
                </div>
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 leading-tight max-w-2xl font-newsreader font-light">
                  A small independent salon with a big reputation
                </h2>
<p className="text-foreground/70 text-base md:text-lg mb-8 max-w-2xl font-medium leading-relaxed font-sans">
                  Clients describe Empire Owl as a community-focused alternative
                  to corporate chains: elevated results, honest guidance and
                  dedicated attention in a cozy homestyle environment.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
<div className="bg-white/60 border border-white/70 rounded-3xl p-5 shadow-sm">
<div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-4">
<i className="size-5" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl tracking-tight mb-1 font-newsreader font-light">
                      Local care
                    </h3>
<p className="text-xs text-foreground/60 font-medium leading-relaxed font-sans">
                      Two-sisters energy with warm, independent service.
                    </p>
</div>
<div className="bg-white/60 border border-white/70 rounded-3xl p-5 shadow-sm">
<div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-4">
<i className="size-5" data-lucide="award"></i>
</div>
<h3 className="text-xl tracking-tight mb-1 font-newsreader font-light">
                      Color focus
                    </h3>
<p className="text-xs text-foreground/60 font-medium leading-relaxed font-sans">
                      Fast, precise blonding and thoughtful transitions.
                    </p>
</div>
<div className="bg-white/60 border border-white/70 rounded-3xl p-5 shadow-sm">
<div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-4">
<i className="size-5" data-lucide="user-check"></i>
</div>
<h3 className="text-xl tracking-tight mb-1 font-newsreader font-light">
                      Personal plan
                    </h3>
<p className="text-xs text-foreground/60 font-medium leading-relaxed font-sans">
                      Mapped to your texture, density and maintenance.
                    </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
<a className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-md w-fit font-sans" href="#">
<span className="flex items-center justify-center bg-white/20 rounded-full size-6">
<i className="size-3.5" data-lucide="arrow-right"></i>
</span>
                    Meet the Salon
                  </a>
<span className="text-sm text-foreground/60 font-medium font-sans">
                    Open Tuesday to Saturday in Langford.
                  </span>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="rounded-3xl bg-white border border-border p-5 shadow-sm">
<p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1 font-sans">
                  Open Tue
                </p>
<p className="text-2xl tracking-tight font-newsreader font-light">
                  11–7
                </p>
</div>
<div className="rounded-3xl bg-white border border-border p-5 shadow-sm">
<p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1 font-sans">
                  Wed–Fri
                </p>
<p className="text-2xl tracking-tight font-newsreader font-light">
                  9–7
                </p>
</div>
<div className="rounded-3xl bg-white border border-border p-5 shadow-sm">
<p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1 font-sans">
                  Saturday
                </p>
<p className="text-2xl tracking-tight font-newsreader font-light">
                  9–4
                </p>
</div>
<div className="rounded-3xl bg-primary text-white p-5 shadow-sm">
<p className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mb-1 font-sans">
                  Sun / Mon
                </p>
<p className="text-2xl tracking-tight font-newsreader font-light">
                  Closed
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium uppercase tracking-wider text-primary mb-6 font-sans">
<span className="size-1.5 rounded-full bg-primary"></span>
        Why Locals Choose Us
      </div>
<h2 className="text-4xl md:text-5xl mb-16 max-w-xl mx-auto font-newsreader font-light">
        Beauty that feels personal, polished, and never rushed
      </h2>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
<div className="lg:col-span-5 bg-secondary rounded-[2.5rem] p-2 relative overflow-hidden shadow-sm min-h-[560px]">
<div className="absolute inset-2 rounded-[2rem] overflow-hidden">
<div className="absolute inset-0 grid grid-cols-2">
<img alt="Hair before transformation" className="w-full h-full object-cover object-left brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Hair after transformation" className="w-full h-full object-cover object-right contrast-125 saturate-110" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
<div className="absolute top-4 left-4 bg-white/85 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold font-sans">
              Before
            </div>
<div className="absolute top-4 right-4 bg-white/85 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold font-sans">
              After
            </div>
<div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]">
<div className="size-9 rounded-full bg-white shadow-lg flex items-center justify-center text-primary">
<i className="size-4" data-lucide="chevrons-left-right"></i>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-black/45 backdrop-blur-xl rounded-3xl p-6 text-white border border-white/20">
<p className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-2 font-sans">
              Transformation focused
            </p>
<h3 className="text-2xl md:text-3xl tracking-tight mb-4 font-newsreader font-light">
              Real color, cut &amp; curl glow-ups
            </h3>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 text-xs bg-white/20 px-3 py-1.5 rounded-full font-sans">
<i className="size-3.5" data-lucide="clock"></i>
                Same-visit polish
              </span>
<span className="flex items-center gap-1.5 text-xs bg-white/20 px-3 py-1.5 rounded-full font-sans">
<i className="size-3.5" data-lucide="check-circle"></i>
                Blonding + style
              </span>
</div>
</div>
</div>
<div className="lg:col-span-4 grid grid-cols-1 gap-6">
<div className="bg-secondary rounded-[2.5rem] p-8 min-h-[260px] relative overflow-hidden shadow-sm">
<div className="relative z-10 max-w-xs">
<div className="size-12 rounded-full bg-white text-primary flex items-center justify-center shadow-sm mb-5">
<i className="size-5" data-lucide="home"></i>
</div>
<h3 className="text-3xl tracking-tight mb-3 font-newsreader font-light">
                Cozy homestyle experience
              </h3>
<p className="text-foreground/60 text-sm font-medium leading-relaxed font-sans">
                A calm, welcoming chair for big changes, quick trims and beauty
                add-ons.
              </p>
</div>
<img alt="Salon hair tools and styling" className="absolute -bottom-10 -right-12 w-64 h-64 object-cover rounded-full opacity-35 mix-blend-multiply" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="bg-white border border-border rounded-[2.5rem] p-7 shadow-sm flex items-center justify-between gap-5">
<div className="">
<div className="inline-flex text-[0.65rem] uppercase tracking-widest text-primary bg-secondary px-2 py-0.5 rounded-full shadow-sm font-semibold mb-3 font-sans">
                Free
              </div>
<h3 className="text-2xl tracking-tight mb-2 font-newsreader font-light">
                Consultation-first color
              </h3>
<p className="text-foreground/60 text-sm font-medium font-sans">
                Complimentary consults for complex work, corrections and
                extensions.
              </p>
</div>
<a className="bg-primary text-white size-12 rounded-full flex items-center justify-center shrink-0 hover:bg-primary/90 transition-colors shadow-md group" href="#">
<i className="size-5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="bg-secondary rounded-[2.5rem] p-7 shadow-sm text-center">
<div className="flex -space-x-4 mb-5 justify-center">
<img alt="Client with styled hair" className="size-16 rounded-full border-4 border-secondary object-cover z-10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Client haircut" className="size-20 rounded-full border-4 border-secondary object-cover z-20 -translate-y-2 shadow-lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Client color result" className="size-16 rounded-full border-4 border-secondary object-cover z-10" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<h3 className="text-2xl tracking-tight mb-1 text-center font-newsreader font-light">
              Tailored to your texture
            </h3>
<p className="text-foreground/60 text-sm font-medium text-center font-sans">
              Layered cuts, curls, density-aware color and extensions.
            </p>
</div>
</div>
<div className="lg:col-span-3 grid grid-cols-1 gap-6">
<div className="bg-primary text-white rounded-[2.5rem] p-8 shadow-xl shadow-primary/20 relative overflow-hidden">
<div className="absolute -right-10 -top-10 size-32 rounded-full bg-white/10"></div>
<p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-2 font-sans">
              Correction work
            </p>
<h3 className="text-5xl tracking-tight mb-3 font-newsreader font-light">
              $110/hr
            </h3>
<p className="text-white/75 text-sm font-medium mb-6 font-sans">
              Careful resets when your hair needs a plan.
            </p>
<div className="flex flex-wrap gap-2">
<span className="bg-white/15 text-xs font-semibold px-3 py-1.5 rounded-full font-sans">
                Extensions $200–$250
              </span>
<span className="bg-white/15 text-xs font-semibold px-3 py-1.5 rounded-full font-sans">
                Tinsel $5/strand
              </span>
</div>
</div>
<div className="bg-secondary rounded-[2.5rem] p-7 shadow-sm flex flex-col">
<div className="flex text-primary mb-3">
<i className="size-5 fill-current" data-lucide="star"></i>
<i className="size-5 fill-current" data-lucide="star"></i>
<i className="size-5 fill-current" data-lucide="star"></i>
<i className="size-5 fill-current" data-lucide="star"></i>
<i className="size-5 fill-current" data-lucide="star"></i>
</div>
<div className="flex items-end gap-2 mb-4">
<h3 className="text-5xl tracking-tight font-newsreader font-light">
                4.9
              </h3>
<p className="text-sm text-foreground/60 font-medium pb-2 font-sans">
                community rating
              </p>
</div>
<div className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm mt-auto">
<p className="text-sm font-medium leading-relaxed mb-4 font-sans">
                Kristy was fast and precise with my blonde transition. The salon
                felt warm, local and welcoming.
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-border">
<img alt="Maya R." className="size-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<p className="text-sm leading-none mb-1 font-semibold font-sans">
                    Maya R.
                  </p>
<p className="text-xs text-foreground/50 font-medium font-sans">
                    Balayage client
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-secondary overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium uppercase tracking-wider text-primary mb-4 bg-white/50 font-sans">
<span className="size-1.5 rounded-full bg-primary"></span>
              Client Notes
            </div>
<h2 className="text-4xl md:text-5xl tracking-tight max-w-lg font-newsreader font-light">
              What Langford clients say
            </h2>
</div>
<p className="text-foreground/60 text-sm md:text-base font-medium max-w-sm font-sans">
            Warm service, honest pricing and polished hair results from a local
            independent salon.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 flex flex-col min-h-[300px]">
<div className="flex text-primary mb-6">
<i className="size-4 fill-current" data-lucide="star"></i>
<i className="size-4 fill-current" data-lucide="star"></i>
<i className="size-4 fill-current" data-lucide="star"></i>
<i className="size-4 fill-current" data-lucide="star"></i>
<i className="size-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-2xl tracking-tight leading-snug mb-8 font-newsreader font-light">
              “The salon feels nothing like a chain. Calm, welcoming and
              personal — exactly what I wanted for a big hair change.”
            </p>
<div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
<div>
<p className="text-sm font-semibold font-sans">Alyssa T.</p>
<p className="text-xs text-foreground/50 font-medium font-sans">
                  Color transformation
                </p>
</div>
<i className="size-8 text-primary/25" data-lucide="quote"></i>
</div>
</article>
<article className="bg-primary text-white rounded-[2rem] p-8 shadow-xl shadow-primary/20 flex flex-col min-h-[300px] relative overflow-hidden">
<div className="absolute -top-16 -right-16 size-40 rounded-full bg-white/10"></div>
<div className="flex text-white mb-6 relative">
<i className="size-4 fill-current" data-lucide="star"></i>
<i className="size-4 fill-current" data-lucide="star"></i>
<i className="size-4 fill-current" data-lucide="star"></i>
<i className="size-4 fill-current" data-lucide="star"></i>
<i className="size-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-2xl tracking-tight leading-snug mb-8 relative font-newsreader font-light">
              “Kristy nailed my color transition and was so quick. My blonde
              looks expensive, soft and really natural.”
            </p>
<div className="mt-auto flex items-center justify-between pt-6 border-t border-white/20 relative">
<div>
<p className="text-sm font-semibold font-sans">Maya R.</p>
<p className="text-xs text-white/60 font-medium font-sans">
                  Balayage client
                </p>
</div>
<i className="size-8 text-white/30" data-lucide="sparkles"></i>
</div>
</article>
<div className="grid gap-6">
<article className="bg-white rounded-[2rem] p-7 shadow-sm border border-black/5">
<div className="flex items-center gap-4 mb-5">
<img alt="Salon client" className="size-14 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&amp;fit=crop&amp;q=80&amp;w=160"/>
<div>
<div className="flex text-primary mb-1">
<i className="size-3 fill-current" data-lucide="star"></i>
<i className="size-3 fill-current" data-lucide="star"></i>
<i className="size-3 fill-current" data-lucide="star"></i>
<i className="size-3 fill-current" data-lucide="star"></i>
<i className="size-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm font-semibold font-sans">Jenna L.</p>
</div>
</div>
<p className="text-sm font-medium leading-relaxed text-foreground/70 font-sans">
                My curls finally have shape without losing softness. The
                appointment felt relaxed and thoughtful.
              </p>
</article>
<div className="bg-white/55 rounded-[2rem] p-7 border border-white/70 shadow-sm">
<div className="flex items-center justify-between mb-5">
<div>
<p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1 font-sans">
                    Salon rating
                  </p>
<p className="text-5xl tracking-tight font-newsreader font-light">
                    4.9
                  </p>
</div>
<div className="size-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
<i className="size-6" data-lucide="message-circle-heart"></i>
</div>
</div>
<p className="text-sm text-foreground/60 font-medium font-sans">
                Loved for blonding, layered cuts, lashes, brows and friendly
                local care.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="flex flex-col items-center mb-16 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium uppercase tracking-wider text-primary mb-4 bg-secondary font-sans">
<span className="size-1.5 rounded-full bg-primary"></span>
          Style Notes
        </div>
<h2 className="text-4xl md:text-5xl font-newsreader font-light">
          Hair guides and
          <br/>
          beauty inspiration
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<a className="md:col-span-7 group flex flex-col" href="#">
<div className="rounded-[2rem] overflow-hidden mb-6 aspect-[4/3] shadow-sm relative">
<img alt="Hair styling inspiration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="flex items-center gap-3 text-xs font-medium text-foreground/60 mb-3 font-sans">
            Balayage Care
          </div>
<h3 className="text-2xl md:text-3xl group-hover:text-primary transition-colors font-newsreader font-light">
            How to make your salon color last longer
          </h3>
</a>

<div className="md:col-span-5 flex flex-col gap-8 md:pl-6">
<a className="group flex gap-5 items-center" href="#">
<div className="size-32 rounded-2xl overflow-hidden shrink-0 shadow-sm relative">
<img alt="Curly hair guide" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div>
<div className="flex items-center gap-2 text-[10px] font-medium text-foreground/60 mb-2 font-sans">
                Cuts
              </div>
<h3 className="text-lg font-serif leading-tight group-hover:text-primary transition-colors font-sans">
                Layered cuts: what to ask for before you sit down
              </h3>
</div>
</a>
<div className="w-full h-px bg-border/50"></div>
<a className="group flex gap-5 items-center" href="#">
<div className="size-32 rounded-2xl overflow-hidden shrink-0 shadow-sm relative">
<img alt="Hair color consultation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div>
<div className="flex items-center gap-2 text-[10px] font-medium text-foreground/60 mb-2 font-sans">
                Color
              </div>
<h3 className="text-lg font-serif leading-tight group-hover:text-primary transition-colors font-sans">
                When a color correction needs an hourly consult
              </h3>
</div>
</a>
<div className="w-full h-px bg-border/50"></div>
<a className="group flex gap-5 items-center" href="#">
<div className="size-32 rounded-2xl overflow-hidden shrink-0 shadow-sm relative">
<img alt="Brows and lashes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div>
<div className="flex items-center gap-2 text-[10px] font-medium text-foreground/60 mb-2 font-sans">
                Beauty
              </div>
<h3 className="text-lg font-serif leading-tight group-hover:text-primary transition-colors font-sans">
                Brows, lashes, and micro tattoos: choosing the right detail
              </h3>
</div>
</a>
</div>
</div>
</section>


<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium uppercase tracking-wider text-primary mb-6 bg-secondary font-sans">
<span className="size-1.5 rounded-full bg-primary"></span>
              FAQs
            </div>
<h2 className="text-4xl md:text-6xl mb-10 leading-[1.1] font-newsreader font-light">
              Salon questions, answered
            </h2>
</div>

<div className="relative rounded-[2.5rem] overflow-hidden bg-black text-white p-8 mt-12 aspect-[2/1] flex flex-col justify-end font-sans">
            Complex color, extensions, corrections, and microblading start with
            a complimentary consultation.
          </div>
</div>

<div className="lg:col-span-7 space-y-4">

<div className="bg-secondary rounded-[2rem] p-6 md:p-8">
<div className="flex items-center justify-between gap-4 cursor-pointer">
<h3 className="text-xl text-primary pr-8 font-newsreader font-light">
                Do I need a consultation before booking?
              </h3>
<div className="size-8 rounded-full bg-white flex items-center justify-center text-primary shrink-0 transition-transform rotate-45 shadow-sm border border-border/50">
<i className="size-4" data-lucide="plus"></i>
</div>
</div>
<div className="pt-6 font-sans">
              Complimentary consultations are recommended for major changes and
              required for extensions, color corrections, microblading, and
              services needing a deposit before securing your appointment.
            </div>
</div>

<div className="bg-white border border-border/60 hover:bg-secondary/30 rounded-[2rem] p-6 md:p-8 cursor-pointer transition-colors flex items-center justify-between gap-4 shadow-sm">
<h3 className="text-xl text-foreground/80 pr-8 font-newsreader font-light">
              How much will my color service cost?
            </h3>
<div className="size-8 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50">
<i className="size-4" data-lucide="plus"></i>
</div>
</div>

<div className="bg-white border border-border/60 hover:bg-secondary/30 rounded-[2rem] p-6 md:p-8 cursor-pointer transition-colors flex items-center justify-between gap-4 shadow-sm">
<h3 className="text-xl text-foreground/80 pr-8 font-newsreader font-light">
              Can you work with curly or layered hair?
            </h3>
<div className="size-8 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50">
<i className="size-4" data-lucide="plus"></i>
</div>
</div>

<div className="bg-white border border-border/60 hover:bg-secondary/30 rounded-[2rem] p-6 md:p-8 cursor-pointer transition-colors flex items-center justify-between gap-4 shadow-sm">
<h3 className="text-xl text-foreground/80 pr-8 font-newsreader font-light">
              What extension methods do you offer?
            </h3>
<div className="size-8 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50">
<i className="size-4" data-lucide="plus"></i>
</div>
</div>

<div className="bg-white border border-border/60 hover:bg-secondary/30 rounded-[2rem] p-6 md:p-8 cursor-pointer transition-colors flex items-center justify-between gap-4 shadow-sm">
<h3 className="text-xl text-foreground/80 pr-8 font-newsreader font-light">
              What are your weekly hours?
            </h3>
<div className="size-8 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50">
<i className="size-4" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-background border-t border-black/5 mt-20 relative overflow-hidden">
<div className="absolute -bottom-40 -right-40 size-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute -top-40 -left-40 size-96 bg-secondary/50 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-5">
<div className="flex items-center gap-2 mb-6">
<span className="text-2xl tracking-tight font-newsreader font-light">
                Empire Owl Salon
              </span>
<i className="size-5 text-primary/70 -ml-1" data-lucide="feather"></i>
</div>
<p className="text-foreground/70 text-sm max-w-sm mb-8 font-sans leading-relaxed">
              Royal hair, wise hands, homestyle care. A highly rated independent
              salon in Langford, BC blending elevated cuts, color, and beauty
              details.
            </p>
<div className="flex gap-3">
<a className="size-10 rounded-full bg-secondary border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
<i className="size-4" data-lucide="instagram"></i>
</a>
<a className="size-10 rounded-full bg-secondary border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
<i className="size-4" data-lucide="facebook"></i>
</a>
</div>
</div>
<div className="md:col-span-2 md:col-start-8">
<h4 className="font-semibold text-xs mb-5 font-sans tracking-widest uppercase text-foreground">
              Salon
            </h4>
<ul className="space-y-4 text-sm text-foreground/70 font-sans font-medium">
<li>
<a className="hover:text-primary transition-colors" href="#">
                  Service Menu
                </a>
</li>
<li>
<a className="hover:text-primary transition-colors" href="#">
                  Our Story
                </a>
</li>
<li>
<a className="hover:text-primary transition-colors" href="#">
                  Client Notes
                </a>
</li>
<li>
<a className="hover:text-primary transition-colors" href="#">
                  Style Guides
                </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-semibold text-xs mb-5 font-sans tracking-widest uppercase text-foreground">
              Visit
            </h4>
<ul className="space-y-4 text-sm text-foreground/70 font-sans font-medium">
<li>Langford, BC</li>
<li>Open Tue–Sat</li>
<li>
<a className="text-primary hover:underline" href="#">
                  Book a Chair
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-foreground/50 font-sans font-medium">
            © 2026 Empire Owl. All rights reserved.
          </div>
<div className="flex gap-6 text-xs text-foreground/50 font-sans font-medium">
<a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 bg-primary text-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 text-xs tracking-tight hover:-translate-y-1 transition-transform z-50 border border-primary/30 font-semibold font-sans" href="#">
<i className="size-4" data-lucide="scissors"></i>
      Book a Chair
    </a>



    </>
  );
}
