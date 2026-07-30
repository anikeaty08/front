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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({attrs:{strokeWidth:1.5}});
    // Fade-in on scroll
    const faders = document.querySelectorAll('[style*="opacity:0"]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, {threshold: .15});
    faders.forEach(el => io.observe(el));

    // Sketchbook carousel arrows
    const carousel = document.getElementById('sketchCarousel');
    document.getElementById('prevSketch').onclick = () => carousel.scrollBy({left:-320,behavior:'smooth'});
    document.getElementById('nextSketch').onclick = () => carousel.scrollBy({left:320,behavior:'smooth'});
  
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
      

<header className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
<div className="text-2xl font-semibold tracking-tight">INK LORE</div>
<nav className="hidden md:flex gap-6 text-sm">
<a className="hover:text-rose-400 transition-colors" href="#flash">Flash Sheets</a>
<a className="hover:text-rose-400 transition-colors" href="#prints">Prints</a>
<a className="hover:text-rose-400 transition-colors" href="#booking">Booking</a>
<a className="hover:text-rose-400 transition-colors" href="#designs">Designs</a>
</nav>
<button className="md:hidden p-2 rounded hover:bg-neutral-800">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</header>

<section className="relative overflow-hidden">
<img alt="" className="w-full h-[60vh] object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s ease-out,transform .6s ease-out`}}>
        Neo-Traditional Flash & Fine Art
      </h1>
<p className="text-neutral-300 max-w-md mx-auto mb-6" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .1s ease-out,transform .6s .1s ease-out`}}>
        Original designs, limited prints and a direct path to your next tattoo appointment.
      </p>
<a className="px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded text-sm font-medium transition-colors" href="#designs" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .2s ease-out,transform .6s .2s ease-out`}}>
        See Available Designs
      </a>
</div>
</section>

<section className="px-6 md:px-12 py-16" id="flash">
<h2 className="text-3xl font-semibold tracking-tight mb-8">Flash Sheets</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="border border-neutral-800 rounded-lg overflow-hidden" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s ease-out,transform .6s ease-out`}}>
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="p-5">
<h3 className="font-medium mb-2">Mythic Creatures Vol. 1</h3>
<p className="text-sm text-neutral-400 mb-4">9×12" archival paper, signed.</p>
<div className="flex items-center justify-between">
<span className="font-medium">$60</span>
<button className="px-3 py-1.5 text-xs bg-rose-500 hover:bg-rose-600 rounded transition-colors">
              Add to Cart
            </button>
</div>
</div>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .1s ease-out,transform .6s .1s ease-out`}}>
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="p-5">
<h3 className="font-medium mb-2">Botanical Souls</h3>
<p className="text-sm text-neutral-400 mb-4">Full-color flash sheet.</p>
<div className="flex items-center justify-between">
<span className="font-medium">$55</span>
<button className="px-3 py-1.5 text-xs bg-rose-500 hover:bg-rose-600 rounded transition-colors">
              Add to Cart
            </button>
</div>
</div>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .2s ease-out,transform .6s .2s ease-out`}}>
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="p-5">
<h3 className="font-medium mb-2">Sacred Symbols</h3>
<p className="text-sm text-neutral-400 mb-4">Limited to 50 copies.</p>
<div className="flex items-center justify-between">
<span className="font-medium">$70</span>
<button className="px-3 py-1.5 text-xs bg-rose-500 hover:bg-rose-600 rounded transition-colors">
              Add to Cart
            </button>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16 border-t border-neutral-800" id="prints">
<h2 className="text-3xl font-semibold tracking-tight mb-8">Art Prints</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="border border-neutral-800 rounded-lg overflow-hidden" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s ease-out,transform .6s ease-out`}}>
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="p-5">
<h3 className="font-medium mb-2">Eternal Serpent</h3>
<p className="text-sm text-neutral-400 mb-4">Giclée on cotton rag, 11″×17″.</p>
<div className="flex items-center justify-between">
<span className="font-medium">$80</span>
<button className="px-3 py-1.5 text-xs bg-rose-500 hover:bg-rose-600 rounded transition-colors">
              Add to Cart
            </button>
</div>
</div>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .1s ease-out,transform .6s .1s ease-out`}}>
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="p-5">
<h3 className="font-medium mb-2">Winged Herald</h3>
<p className="text-sm text-neutral-400 mb-4">Edition of 100.</p>
<div className="flex items-center justify-between">
<span className="font-medium">$65</span>
<button className="px-3 py-1.5 text-xs bg-rose-500 hover:bg-rose-600 rounded transition-colors">
              Add to Cart
            </button>
</div>
</div>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .2s ease-out,transform .6s .2s ease-out`}}>
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="p-5">
<h3 className="font-medium mb-2">Bloom & Blade</h3>
<p className="text-sm text-neutral-400 mb-4">Fine-line illustration.</p>
<div className="flex items-center justify-between">
<span className="font-medium">$70</span>
<button className="px-3 py-1.5 text-xs bg-rose-500 hover:bg-rose-600 rounded transition-colors">
              Add to Cart
            </button>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16" id="booking">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Book a Session</h2>
<div className="bg-neutral-800 rounded-lg p-8 flex flex-col lg:flex-row gap-8">
<img alt="" className="w-full lg:w-1/2 h-64 lg:h-auto object-cover rounded" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div>
<p className="text-neutral-300 mb-6">
          Ready to bring a design to life? Choose a date that works for you and let’s ink.
        </p>
<form className="grid grid-cols-1 gap-4 max-w-sm">
<input className="bg-neutral-900 border border-neutral-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-rose-500" placeholder="Full Name" type="text" />
<input className="bg-neutral-900 border border-neutral-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-rose-500" placeholder="Email" type="email" />
<input className="bg-neutral-900 border border-neutral-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-rose-500" type="date" />
<button className="mt-2 bg-rose-500 hover:bg-rose-600 rounded px-4 py-2 text-sm font-medium transition-colors" type="submit">
            Request Appointment
          </button>
</form>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16 border-t border-neutral-800" id="designs">
<h2 className="text-3xl font-semibold tracking-tight mb-8">Available Designs</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative group" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s ease-out,transform .6s ease-out`}}>
<img alt="" className="w-full h-60 object-cover rounded-md" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-md transition-opacity">
<button className="px-4 py-2 bg-rose-500 hover:bg-rose-600 rounded text-xs font-medium">
            Reserve Design
          </button>
</div>
</div>

<div className="relative group" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .1s ease-out,transform .6s .1s ease-out`}}>
<img alt="" className="w-full h-60 object-cover rounded-md" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-md transition-opacity">
<button className="px-4 py-2 bg-rose-500 hover:bg-rose-600 rounded text-xs font-medium">
            Reserve Design
          </button>
</div>
</div>
<div className="relative group" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .2s ease-out,transform .6s .2s ease-out`}}>
<img alt="" className="w-full h-60 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-md transition-opacity">
<button className="px-4 py-2 bg-rose-500 hover:bg-rose-600 rounded text-xs font-medium">
            Reserve Design
          </button>
</div>
</div>
<div className="relative group" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity .6s .3s ease-out,transform .6s .3s ease-out`}}>
<img alt="" className="w-full h-60 object-cover rounded-md" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-md transition-opacity">
<button className="px-4 py-2 bg-rose-500 hover:bg-rose-600 rounded text-xs font-medium">
            Reserve Design
          </button>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16">
<h2 className="text-3xl font-semibold tracking-tight mb-8">Sketchbook</h2>
<div className="relative">
<div className="flex overflow-x-auto gap-6 snap-x snap-mandatory" id="sketchCarousel">

<img alt="" className="snap-start shrink-0 w-80 h-52 object-cover rounded-lg border border-neutral-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="" className="snap-start shrink-0 w-80 h-52 object-cover rounded-lg border border-neutral-800" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="" className="snap-start shrink-0 w-80 h-52 object-cover rounded-lg border border-neutral-800" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<img alt="" className="snap-start shrink-0 w-80 h-52 object-cover rounded-lg border border-neutral-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>

<button className="absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-800/70 p-2 rounded-full hover:bg-neutral-800 hidden md:block" id="prevSketch">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 bg-neutral-800/70 p-2 rounded-full hover:bg-neutral-800 hidden md:block" id="nextSketch">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<footer className="px-6 md:px-12 py-10 border-t border-neutral-800">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="text-sm text-neutral-400">© 2024 Ink Lore. All rights reserved.</div>
<div className="flex gap-4">
<a className="hover:text-rose-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-rose-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-rose-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</footer>



    </>
  );
}
