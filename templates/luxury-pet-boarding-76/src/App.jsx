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
colors: {
cream: {
DEFAULT: '#FAF8F3',
dark: '#EBE7DE'
},
forest: {
DEFAULT: '#1A2E26',
light: '#2A4338'
},
caramel: {
DEFAULT: '#B88A59',
light: '#D4AD86'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
      lucide.createIcons({
          attributes: {
              'stroke-width': 1.5
          }
      });

      // Mobile Menu Toggle
      const menuBtn = document.getElementById('menu-btn');
      const closeMenuBtn = document.getElementById('close-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function toggleMenu() {
          const isClosed = mobileMenu.classList.contains('translate-x-full');
          if (isClosed) {
              mobileMenu.classList.remove('translate-x-full');
              document.body.style.overflow = 'hidden'; // Prevent scrolling
          } else {
              mobileMenu.classList.add('translate-x-full');
              document.body.style.overflow = '';
          }
      }

      menuBtn.addEventListener('click', toggleMenu);
      closeMenuBtn.addEventListener('click', toggleMenu);
      mobileLinks.forEach(link => {
          link.addEventListener('click', toggleMenu);
      });

      // FAQ Accordion Toggle
      function toggleFAQ(button) {
          const content = button.nextElementSibling;
          const icon = button.querySelector('i');

          // Close others (optional, remove if you want multiple open)
          document.querySelectorAll('.faq-content').forEach(el => {
              if(el !== content && !el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  el.previousElementSibling.querySelector('i').classList.remove('rotate-180');
              }
          });

          content.classList.toggle('hidden');
          icon.classList.toggle('rotate-180');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 bg-forest w-[260px] h-[220px] rounded-br-[120px] z-30 hidden lg:block pointer-events-none"></div>

<nav className="absolute top-0 w-full z-40 px-6 lg:px-12 py-8 flex items-center justify-between pointer-events-auto">

<div className="relative z-50 flex items-center gap-3 group cursor-pointer lg:w-[240px] lg:justify-center">
<div className="flex flex-col items-center">

<svg className="mb-2 lg:stroke-caramel stroke-forest lg:fill-none fill-forest/10" fill="none" height="48" viewbox="0 0 40 48" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 2L4 16V46H36V16L20 2Z" strokeWidth="1.5"></path>
<path d="M12 46V24C12 19.5817 15.5817 16 20 16C24.4183 16 28 19.5817 28 24V46" strokeWidth="1.5"></path>
<circle cx="20" cy="30" r="4" strokeWidth="1.5"></circle>
<path d="M16 36C16 33.7909 17.7909 32 20 32C22.2091 32 24 33.7909 24 36" strokeWidth="1.5"></path>
</svg>
<div className="text-center">
<span className="block text-sm tracking-[0.2em] uppercase lg:text-caramel text-forest font-medium">
              Haven &amp; Hound
            </span>
<span className="block text-xs tracking-[0.1em] uppercase lg:text-caramel/70 text-forest/70 mt-1">
              Luxury Pet Boarding
            </span>
</div>
</div>
</div>

<div className="hidden lg:flex items-center space-x-10">
<a className="text-sm tracking-wide hover:text-caramel transition-colors" href="#experience">
          Our Experience
        </a>
<a className="text-sm tracking-wide hover:text-caramel transition-colors" href="#suites">
          Suites &amp; Amenities
        </a>
<a className="text-sm tracking-wide hover:text-caramel transition-colors" href="#wellness">
          Care &amp; Wellness
        </a>
<a className="text-sm tracking-wide hover:text-caramel transition-colors" href="#gallery">
          Gallery
        </a>
<a className="text-sm tracking-wide hover:text-caramel transition-colors" href="#about">
          About Us
        </a>
</div>

<div className="flex items-center gap-4 z-50">
<a className="hidden md:flex items-center gap-2 bg-caramel text-white px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-caramel-light transition-colors group" href="#book">
          BOOK A STAY
          <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<button className="p-2.5 border border-forest/20 rounded-full hover:bg-forest/5 transition-colors lg:bg-transparent bg-white" id="menu-btn">
<i className="w-5 h-5 text-forest" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-forest z-50 transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-center items-center" id="mobile-menu">
<button className="absolute top-8 right-6 p-2 text-cream hover:text-caramel transition-colors" id="close-menu-btn">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<div className="flex flex-col items-center gap-8 text-cream">
<a className="font-serif text-3xl tracking-tight hover:text-caramel transition-colors mobile-link" href="#experience">
          Our Experience
        </a>
<a className="font-serif text-3xl tracking-tight hover:text-caramel transition-colors mobile-link" href="#suites">
          Suites &amp; Amenities
        </a>
<a className="font-serif text-3xl tracking-tight hover:text-caramel transition-colors mobile-link" href="#wellness">
          Care &amp; Wellness
        </a>
<a className="font-serif text-3xl tracking-tight hover:text-caramel transition-colors mobile-link" href="#gallery">
          Gallery
        </a>
<a className="font-serif text-3xl tracking-tight hover:text-caramel transition-colors mobile-link" href="#about">
          About Us
        </a>
<a className="mt-8 border border-caramel text-caramel px-8 py-3 rounded-full text-base tracking-wide hover:bg-caramel hover:text-white transition-colors mobile-link" href="#book">
          BOOK A STAY
        </a>
</div>
</div>

<section className="relative min-h-screen pt-32 lg:pt-0 flex items-center lg:items-stretch flex-col lg:flex-row">

<div className="w-full lg:w-[50%] px-6 lg:pl-32 lg:pr-8 flex flex-col justify-center relative z-10 py-12 lg:pt-40 lg:pb-32">
<div className="flex items-center gap-4 mb-8 mt-12 lg:mt-0">
<div className="w-12 h-[1px] bg-caramel"></div>
<span className="text-xs uppercase tracking-[0.15em] text-caramel font-medium">
            More than a stay. It's their retreat.
          </span>
</div>
<h1 className="font-serif text-5xl lg:text-7xl xl:text-[5rem] tracking-tight text-forest leading-[1.1] mb-8 font-normal">
          Luxury boarding.
          <br/>
          Tailored to
          <span className="italic text-caramel">them.</span>
</h1>
<p className="text-base lg:text-lg text-forest/70 max-w-md mb-12 leading-relaxed font-light">
          A calm, caring environment where every detail is designed for comfort,
          enrichment and peace of mind.
        </p>
<div className="flex items-center gap-4 mb-20 lg:mb-32 group cursor-pointer w-max">
<div className="w-12 h-12 rounded-full bg-caramel flex items-center justify-center text-white group-hover:bg-forest transition-colors duration-300">
<i className="w-5 h-5" data-lucide="arrow-down-right"></i>
</div>
<span className="text-xs uppercase tracking-widest font-medium group-hover:text-caramel transition-colors duration-300">
            Discover the Haven
          </span>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-forest/10 lg:border-none lg:pt-0 relative w-max mx-auto lg:mx-0">
<div className="flex flex-col items-center lg:items-start gap-4 px-4 border-r border-forest/10 last:border-none">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="text-forest" fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 32" width="32">
<path d="M4 12L16 3L28 12V29H4V12Z"></path>
<path d="M16 12C18.2091 12 20 13.7909 20 16C20 18.2091 16 22 16 22C16 22 12 18.2091 12 16C12 13.7909 13.7909 12 16 12Z"></path>
</svg>
</div>
<span className="text-xs tracking-wider uppercase text-center lg:text-left leading-tight text-forest/80">
              Luxury Suites
            </span>
</div>
<div className="flex flex-col items-center lg:items-start gap-4 px-4 border-r border-forest/10 last:border-none">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="text-forest" fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 32" width="32">
<path d="M16 4C16 4 11 8 11 14C11 19 16 28 16 28C16 28 21 19 21 14C21 8 16 4 16 4Z"></path>
<path d="M16 28C16 28 8 26 5 20C2 14 6 10 6 10C6 10 10 14 11 14"></path>
<path d="M16 28C16 28 24 26 27 20C30 14 26 10 26 10C26 10 22 14 21 14"></path>
</svg>
</div>
<span className="text-xs tracking-wider uppercase text-center lg:text-left leading-tight text-forest/80">
              Wellness
              <br/>
              &amp; Spa
            </span>
</div>
<div className="flex flex-col items-center lg:items-start gap-4 px-4 border-r border-forest/10 last:border-none">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="text-forest" fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 32" width="32">
<circle cx="16" cy="16" r="12"></circle>
<path d="M16 4C16 4 20 9 20 16C20 23 16 28 16 28C16 28 12 23 12 16C12 9 16 4 16 4Z"></path>
<path d="M4 16H28"></path>
</svg>
</div>
<span className="text-xs tracking-wider uppercase text-center lg:text-left leading-tight text-forest/80">
              Enrichment
              <br/>
              Programs
            </span>
</div>
<div className="flex flex-col items-center lg:items-start gap-4 px-4">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="text-forest" fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 32" width="32">
<rect height="18" rx="2" width="24" x="4" y="8"></rect>
<circle cx="16" cy="17" r="4"></circle>
<path d="M12 8V6C12 4.89543 12.8954 4 14 4H18C19.1046 4 20 4.89543 20 6V8"></path>
</svg>
</div>
<span className="text-xs tracking-wider uppercase text-center lg:text-left leading-tight text-forest/80">
              24/7 Care
              <br/>
              &amp; Supervision
            </span>
</div>
</div>
</div>

<div className="w-full lg:w-[50%] relative lg:absolute lg:right-0 lg:top-0 h-[60vh] lg:h-full overflow-hidden mt-12 lg:mt-0">

<div className="absolute inset-0 lg:rounded-tl-[250px] lg:rounded-bl-[50px] overflow-hidden bg-cream-dark">
<img alt="Golden Retriever relaxing on a dark green dog bed in a bright luxury room" className="w-full h-full object-cover object-center lg:object-[center_20%] opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>

<div className="absolute top-[15%] lg:top-[25%] right-[10%] lg:right-[20%] text-center opacity-80">
<svg className="mx-auto mb-2 stroke-caramel" fill="none" height="40" viewbox="0 0 40 40" width="40">
<path d="M8 24L20 8L32 24" strokeWidth="1.5"></path>
<path d="M12 24V32H28V24" strokeWidth="1.5"></path>
<circle cx="20" cy="16" r="2" strokeWidth="1.5"></circle>
</svg>
<p className="text-xs tracking-widest text-caramel font-medium leading-loose uppercase">
              Comfort
              <br/>
              Care
              <br/>
              Companionship
              <br/>
              — Always
            </p>
</div>
</div>

<div className="absolute bottom-[-20px] lg:bottom-[10%] right-[10%] lg:right-[15%] z-20 flex items-center justify-center">

<div className="absolute -right-8 -bottom-8 w-32 h-32 text-caramel/40">
<svg height="100%" viewbox="0 0 100 100" width="100%">
<pattern height="20" id="dots" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="currentColor" r="2"></circle>
</pattern>
<rect fill="url(#dots)" height="100" width="100" x="0" y="0"></rect>
</svg>
</div>

<div className="w-48 h-48 lg:w-56 lg:h-56 bg-forest rounded-full flex flex-col items-center justify-center text-center p-6 relative shadow-2xl">
<p className="text-cream text-lg lg:text-xl font-serif leading-snug tracking-tight mb-4 font-light">
              Where happy
              <br/>
              tails feel
              <br/>
              at home.
            </p>
<i className="w-6 h-6 text-caramel" data-lucide="heart"></i>
</div>
</div>
</div>
</section>

<section className="py-32 bg-forest text-cream relative overflow-hidden" id="experience">
<div className="absolute top-0 right-0 w-1/2 h-full bg-forest-light/20 rounded-l-full blur-3xl transform translate-x-1/4"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<span className="text-caramel uppercase tracking-widest text-xs font-medium block mb-6">
            Our Philosophy
          </span>
<h2 className="font-serif text-4xl lg:text-6xl tracking-tight mb-8 font-normal leading-tight">
            Elevating pet care to an art form.
          </h2>
<p className="text-base lg:text-lg text-cream/80 mb-8 font-light leading-relaxed">
            We believe that boarding shouldn't be stressful for you or your pet.
            Haven &amp; Hound was born from a desire to create an environment
            that mimics the comforts of home, enhanced with luxury amenities and
            expert care.
          </p>
<p className="text-base lg:text-lg text-cream/80 mb-12 font-light leading-relaxed">
            Every guest receives a personalized itinerary, balancing active
            play, mental enrichment, and serene downtime in their private suite.
          </p>
<a className="inline-flex items-center gap-4 text-caramel uppercase tracking-widest text-xs font-medium group" href="#about">
            Read our story
            <span className="w-10 h-[1px] bg-caramel group-hover:w-16 transition-all duration-300"></span>
</a>
</div>
<div className="relative h-[600px] w-full">

<div className="absolute top-0 right-0 w-3/4 h-[80%] rounded-[2rem] overflow-hidden shadow-2xl">
<img alt="Staff member cuddling a dog" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="absolute bottom-0 left-0 w-3/5 h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-forest">
<img alt="Dogs playing in outdoor area" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cream" id="suites">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-caramel uppercase tracking-widest text-xs font-medium block mb-4">
              Accommodations
            </span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-forest font-normal">
              Suites designed
              <br/>
              for serenity.
            </h2>
</div>
<a className="border border-forest text-forest px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-forest hover:text-cream transition-colors" href="#book">
            View All Suites
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
<div className="h-64 overflow-hidden relative">
<img alt="Standard Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                From $75/nt
              </div>
</div>
<div className="p-8">
<h3 className="font-serif text-2xl tracking-tight text-forest mb-3">
                The Classic Haven
              </h3>
<p className="text-base text-forest/70 mb-6 font-light">
                A cozy, private retreat featuring orthopaedic bedding, climate
                control, and soothing ambient music.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  40 sq ft private space
                </li>
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  3 daily play sessions
                </li>
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  Daily photo update
                </li>
</ul>
<a className="block w-full text-center bg-cream-dark text-forest py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-caramel hover:text-white transition-colors" href="#book">
                Reserve
              </a>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group relative">
<div className="absolute top-0 left-0 w-full h-1 bg-caramel z-10"></div>
<div className="h-64 overflow-hidden relative">
<img alt="Signature Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                From $110/nt
              </div>
<div className="absolute top-4 left-4 bg-caramel text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-medium">
                Popular
              </div>
</div>
<div className="p-8">
<h3 className="font-serif text-2xl tracking-tight text-forest mb-3">
                Signature Suite
              </h3>
<p className="text-base text-forest/70 mb-6 font-light">
                Spacious accommodation with a private window, premium elevated
                bed, and interactive TV.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  65 sq ft corner space
                </li>
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  All-day group play access
                </li>
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  24/7 Webcam access
                </li>
</ul>
<a className="block w-full text-center bg-caramel text-white py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-forest transition-colors" href="#book">
                Reserve
              </a>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
<div className="h-64 overflow-hidden relative">
<img alt="Grand Penthouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                From $165/nt
              </div>
</div>
<div className="p-8">
<h3 className="font-serif text-2xl tracking-tight text-forest mb-3">
                The Grand Penthouse
              </h3>
<p className="text-base text-forest/70 mb-6 font-light">
                Our most exclusive offering. A room mimicking a luxury bedroom
                with human-sized furniture and ultimate privacy.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  120 sq ft premium room
                </li>
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  Personal concierge
                </li>
<li className="flex items-center gap-3 text-sm text-forest/80">
<i className="w-4 h-4 text-caramel" data-lucide="check"></i>
                  Daily spa treatment
                </li>
</ul>
<a className="block w-full text-center bg-cream-dark text-forest py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-caramel hover:text-white transition-colors" href="#book">
                Reserve
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="wellness">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">

<div className="aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden bg-cream">
<img alt="Dog getting a bath" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-caramel rounded-full hidden lg:flex items-center justify-center p-6 text-center text-white">
<p className="font-serif text-lg tracking-tight leading-snug">
              Holistic treatments for body &amp; mind.
            </p>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-caramel uppercase tracking-widest text-xs font-medium block mb-4">
            Wellness &amp; Spa
          </span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-forest mb-8 font-normal leading-tight">
            Rejuvenation goes
            <br/>
            beyond a simple wash.
          </h2>
<p className="text-base lg:text-lg text-forest/70 mb-12 font-light leading-relaxed">
            Our in-house spa and wellness center provides a tranquil escape.
            From gentle grooming to specialized therapeutic treatments, our
            certified staff ensures your pet looks and feels their absolute
            best.
          </p>

<div className="space-y-6">
<div className="pb-6 border-b border-forest/10 flex items-start gap-6">
<div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0 text-caramel">
<i className="w-5 h-5" data-lucide="droplets"></i>
</div>
<div>
<h4 className="font-serif text-xl tracking-tight text-forest mb-2">
                  Aromatherapy Bath
                </h4>
<p className="text-sm text-forest/70 font-light">
                  Calming essential oils blended with oatmeal shampoos to soothe
                  the skin and reduce anxiety.
                </p>
</div>
</div>
<div className="pb-6 border-b border-forest/10 flex items-start gap-6">
<div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0 text-caramel">
<i className="w-5 h-5" data-lucide="scissors"></i>
</div>
<div>
<h4 className="font-serif text-xl tracking-tight text-forest mb-2">
                  Gentle Grooming
                </h4>
<p className="text-sm text-forest/70 font-light">
                  Breed-specific cuts, deshedding treatments, and nail detailing
                  performed in a stress-free environment.
                </p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0 text-caramel">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div>
<h4 className="font-serif text-xl tracking-tight text-forest mb-2">
                  Massage Therapy
                </h4>
<p className="text-sm text-forest/70 font-light">
                  Canine massage to improve circulation, relieve joint
                  stiffness, and promote deep relaxation.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-forest text-cream">
<div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-20">
<span className="text-caramel uppercase tracking-widest text-xs font-medium block mb-4">
          Enrichment
        </span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-normal">
          A Day in the Haven
        </h2>
<p className="text-base text-cream/70 max-w-2xl mx-auto mt-6 font-light">
          Routine is comforting, but enrichment is essential. Our daily schedule
          provides the perfect balance of physical activity, mental stimulation,
          and rest.
        </p>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-cream/10 hidden lg:block -translate-y-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

<div className="text-center group">
<div className="w-24 h-24 mx-auto rounded-full border border-cream/20 bg-forest flex items-center justify-center mb-6 group-hover:border-caramel transition-colors duration-300 relative">
<span className="absolute -top-3 bg-forest px-2 text-caramel text-xs tracking-widest font-medium">
                08:00
              </span>
<i className="w-8 h-8 text-cream group-hover:text-caramel transition-colors" data-lucide="sun"></i>
</div>
<h4 className="font-serif text-xl tracking-tight mb-3">
              Morning Stretch
            </h4>
<p className="text-sm text-cream/60 font-light px-4">
              Breakfast served in-suite followed by gentle outdoor sniffing and
              stretching in the garden.
            </p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto rounded-full border border-cream/20 bg-forest flex items-center justify-center mb-6 group-hover:border-caramel transition-colors duration-300 relative">
<span className="absolute -top-3 bg-forest px-2 text-caramel text-xs tracking-widest font-medium">
                10:30
              </span>
<i className="w-8 h-8 text-cream group-hover:text-caramel transition-colors" data-lucide="users"></i>
</div>
<h4 className="font-serif text-xl tracking-tight mb-3">Social Play</h4>
<p className="text-sm text-cream/60 font-light px-4">
              Supervised group play tailored to size and temperament, or
              one-on-one time for independent souls.
            </p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto rounded-full border border-cream/20 bg-forest flex items-center justify-center mb-6 group-hover:border-caramel transition-colors duration-300 relative">
<span className="absolute -top-3 bg-forest px-2 text-caramel text-xs tracking-widest font-medium">
                14:00
              </span>
<i className="w-8 h-8 text-cream group-hover:text-caramel transition-colors" data-lucide="puzzle"></i>
</div>
<h4 className="font-serif text-xl tracking-tight mb-3">
              Mental Enrichment
            </h4>
<p className="text-sm text-cream/60 font-light px-4">
              Puzzle toys, agility basics, or scent work games to keep their
              minds sharp and engaged.
            </p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto rounded-full border border-cream/20 bg-forest flex items-center justify-center mb-6 group-hover:border-caramel transition-colors duration-300 relative">
<span className="absolute -top-3 bg-forest px-2 text-caramel text-xs tracking-widest font-medium">
                19:00
              </span>
<i className="w-8 h-8 text-cream group-hover:text-caramel transition-colors" data-lucide="moon"></i>
</div>
<h4 className="font-serif text-xl tracking-tight mb-3">
              Evening Wind Down
            </h4>
<p className="text-sm text-cream/60 font-light px-4">
              Dinner, a final stroll, and calming classical music as the lights
              dim for a peaceful night.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cream-dark">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<span className="text-caramel uppercase tracking-widest text-xs font-medium block mb-4">
            Guest Book
          </span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-forest font-normal">
            Notes from the owners.
          </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-2xl shadow-sm relative">
<i className="absolute top-6 right-6 w-12 h-12 text-cream stroke-[1]" data-lucide="quote"></i>
<div className="flex gap-1 mb-6 text-caramel">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-forest/80 font-serif italic leading-relaxed mb-8 relative z-10">
              "Leaving Bella has always been stressful, but Haven &amp; Hound
              changed everything. The daily updates and photos showed her
              relaxed and happy. She came back smelling like lavender!"
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest font-serif font-medium text-lg">
                S
              </div>
<div>
<p className="text-sm font-medium text-forest">Sarah Jenkins</p>
<p className="text-xs text-forest/60">
                  Owner of Bella (Labradoodle)
                </p>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm relative">
<i className="absolute top-6 right-6 w-12 h-12 text-cream stroke-[1]" data-lucide="quote"></i>
<div className="flex gap-1 mb-6 text-caramel">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-forest/80 font-serif italic leading-relaxed mb-8 relative z-10">
              "The Grand Penthouse is incredible. Max is a senior dog who needs
              quiet and special care. The staff here are true professionals.
              It's the only place we trust."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest font-serif font-medium text-lg">
                M
              </div>
<div>
<p className="text-sm font-medium text-forest">Michael Chen</p>
<p className="text-xs text-forest/60">
                  Owner of Max (Golden Retriever)
                </p>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm relative md:hidden lg:block">
<i className="absolute top-6 right-6 w-12 h-12 text-cream stroke-[1]" data-lucide="quote"></i>
<div className="flex gap-1 mb-6 text-caramel">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-forest/80 font-serif italic leading-relaxed mb-8 relative z-10">
              "The facilities are spotless and beautiful, but it's the staff's
              genuine love for animals that sets them apart. The enrichment
              programs kept our high-energy pointer very happy."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest font-serif font-medium text-lg">
                E
              </div>
<div>
<p className="text-sm font-medium text-forest">Emma Thompson</p>
<p className="text-xs text-forest/60">Owner of Duke (GSP)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-caramel uppercase tracking-widest text-xs font-medium block mb-4">
              A Look Inside
            </span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-forest font-normal">
              Glimpses of the Haven.
            </h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Lobby area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="rounded-2xl overflow-hidden relative group">
<img alt="Happy dog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="rounded-2xl overflow-hidden relative group">
<img alt="Grooming" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="col-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Outdoor play" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cream">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-forest font-normal mb-6">
            Common Questions
          </h2>
<p className="text-base text-forest/70 font-light">
            Everything you need to know about boarding with us.
          </p>
</div>
<div className="space-y-4">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm">
<button className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none" onclick="toggleFAQ(this)">
<span className="font-serif text-xl tracking-tight text-forest">
                What are the vaccination requirements?
              </span>
<i className="w-5 h-5 text-caramel transition-transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6 text-base text-forest/70 font-light leading-relaxed">
              For the safety of all guests, we require up-to-date vaccinations
              for Rabies, DHPP (Distemper, Hepatitis, Parvovirus,
              Parainfluenza), and Bordetella. Records must be submitted prior to
              check-in.
            </div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm">
<button className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none" onclick="toggleFAQ(this)">
<span className="font-serif text-xl tracking-tight text-forest">
                Should I bring my dog's own food?
              </span>
<i className="w-5 h-5 text-caramel transition-transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6 text-base text-forest/70 font-light leading-relaxed">
              Yes, we highly recommend bringing your pet's regular food to
              prevent digestive upset. Please pre-portion meals in individual
              bags or containers labeled with your pet's name. We provide
              premium bowls.
            </div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm">
<button className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none" onclick="toggleFAQ(this)">
<span className="font-serif text-xl tracking-tight text-forest">
                Can I check on my pet while I'm away?
              </span>
<i className="w-5 h-5 text-caramel transition-transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6 text-base text-forest/70 font-light leading-relaxed">
              Absolutely. We send daily photo and video updates via our secure
              app. Additionally, guests in our Signature and Penthouse suites
              have 24/7 webcam access so you can peek in anytime.
            </div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm">
<button className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none" onclick="toggleFAQ(this)">
<span className="font-serif text-xl tracking-tight text-forest">
                What is the cancellation policy?
              </span>
<i className="w-5 h-5 text-caramel transition-transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6 text-base text-forest/70 font-light leading-relaxed">
              We require a 72-hour notice for cancellations during regular
              periods, and a 2-week notice during peak holiday seasons. Deposits
              are fully refundable if cancelled within these timeframes.
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-caramel relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg height="100%" width="100%">
<pattern height="40" id="pattern-circles" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<circle cx="20" cy="20" fill="currentColor" r="1"></circle>
</pattern>
<rect fill="url(#pattern-circles)" height="100%" width="100%" x="0" y="0"></rect>
</svg>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
<h2 className="font-serif text-5xl lg:text-6xl tracking-tight mb-8 font-normal">
          Give them the retreat
          <br/>
          they deserve.
        </h2>
<p className="text-lg lg:text-xl text-white/80 mb-12 font-light">
          Spaces are limited to ensure personalized care for every guest.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="bg-forest text-cream px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-forest-light transition-colors w-full sm:w-auto" href="#book">
            Reserve a Suite
          </a>
<a className="flex items-center gap-2 text-white hover:text-forest transition-colors text-sm uppercase tracking-widest font-medium" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
            (555) 123-4567
          </a>
</div>
</div>
</section>

<footer className="bg-forest text-cream/70 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-cream/10 pb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-3 mb-6">
<svg className="stroke-caramel" fill="none" height="28" viewbox="0 0 40 48" width="24">
<path d="M20 2L4 16V46H36V16L20 2Z" strokeWidth="2"></path>
<path d="M12 46V24C12 19.5817 15.5817 16 20 16C24.4183 16 28 19.5817 28 24V46" strokeWidth="2"></path>
</svg>
<span className="text-sm tracking-[0.2em] uppercase text-cream font-medium">
                Haven &amp; Hound
              </span>
</div>
<p className="text-sm font-light leading-relaxed mb-6">
              Redefining pet boarding through uncompromising luxury, expert
              care, and an environment that feels like home.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-caramel hover:border-caramel hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-caramel hover:border-caramel hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
</div>
</div>

<div>
<h5 className="text-cream text-xs uppercase tracking-widest font-medium mb-6">
              Explore
            </h5>
<ul className="space-y-4 text-sm font-light">
<li>
<a className="hover:text-caramel transition-colors" href="#">
                  Our Suites
                </a>
</li>
<li>
<a className="hover:text-caramel transition-colors" href="#">
                  Spa Services
                </a>
</li>
<li>
<a className="hover:text-caramel transition-colors" href="#">
                  Daily Schedule
                </a>
</li>
<li>
<a className="hover:text-caramel transition-colors" href="#">
                  Gallery
                </a>
</li>
<li>
<a className="hover:text-caramel transition-colors" href="#">
                  About Us
                </a>
</li>
</ul>
</div>

<div>
<h5 className="text-cream text-xs uppercase tracking-widest font-medium mb-6">
              Information
            </h5>
<ul className="space-y-4 text-sm font-light">
<li>
<a className="hover:text-caramel transition-colors" href="#">FAQ</a>
</li>
<li>
<a className="hover:text-caramel transition-colors" href="#">
                  Requirements
                </a>
</li>
<li>
<a className="hover:text-caramel transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-caramel transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>

<div>
<h5 className="text-cream text-xs uppercase tracking-widest font-medium mb-6">
              Visit Us
            </h5>
<ul className="space-y-4 text-sm font-light">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-caramel shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>
                  123 Luxury Lane, Estate District
                  <br/>
                  Beverly Hills, CA 90210
                </span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-caramel shrink-0" data-lucide="phone"></i>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-caramel shrink-0" data-lucide="mail"></i>
<span>concierge@havenhound.com</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p>
            © 2024 Haven &amp; Hound Luxury Pet Boarding. All rights reserved.
          </p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-cream transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-cream transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
