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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none">
<a className="font-editorial text-2xl tracking-tighter uppercase pointer-events-auto" href="#">Rita</a>
<div className="hidden md:flex gap-8 items-center pointer-events-auto">
<a className="text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity" href="#">Editorials</a>
<a className="text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity" href="#">Portraits</a>
<a className="text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity" href="#">Journal</a>
<a className="text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity" href="#">Contact</a>
</div>
<button className="md:hidden pointer-events-auto flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>

<header className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-24 pt-32">
<div className="absolute inset-0 z-[-1]">
<img alt="Cover Editorial" className="w-full h-full object-cover object-center scale-105 motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2640&amp;auto=format&amp;fit=crop" style={{filter: 'brightness(0.8) contrast(1.1)'}}/>
</div>
<div className="max-w-4xl text-white">
<p className="text-xs uppercase tracking-[0.3em] mb-4 opacity-80">Volume I — The Visual Arts</p>
<h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-6">
                Aesthetic<br/>
<span className="italic font-light">Narratives</span>
</h1>
<p className="max-w-md text-sm md:text-base font-light opacity-90 leading-relaxed mb-8">
                Exploring the delicate balance between light, shadow, and human emotion through fine art portraiture and fashion editorials.
            </p>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors" href="#gallery">
                Explore the Archive
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</header>

<main className="py-24 md:py-32" id="gallery">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-stone-200 pb-6">
<h2 className="font-editorial text-3xl md:text-4xl tracking-tight">Curated Selection</h2>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-4 md:mt-0">Paris / Milan / New York</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 lg:gap-x-12">

<div className="md:col-span-7 group cursor-pointer">
<div className="overflow-hidden bg-stone-100 aspect-[4/5] md:aspect-[3/4]">
<img alt="Editorial Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2564&amp;auto=format&amp;fit=crop" style={{filter: 'grayscale(20%)'}}/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="font-editorial text-xl tracking-tight mb-1">Silent Echoes</h3>
<p className="text-xs text-stone-500">Editorial Issue 04</p>
</div>
<span className="text-xs font-medium">01</span>
</div>
</div>

<div className="md:col-span-5 flex flex-col justify-between">
<div className="mb-12 md:mt-24">
<h4 className="font-editorial text-2xl tracking-tight mb-4">The Philosophy of Observation</h4>
<p className="text-sm text-stone-600 leading-relaxed font-light">
                            Every photograph is a conversation. It speaks of the space between the subject and the lens, a fleeting moment crystallized into permanence. My work seeks out the quiet spaces within the noise of contemporary life.
                        </p>
</div>
<div className="group cursor-pointer">
<div className="overflow-hidden bg-stone-100 aspect-[3/4]">
<img alt="Fashion Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="font-editorial text-xl tracking-tight mb-1">Texture &amp; Form</h3>
<p className="text-xs text-stone-500">Studio Series</p>
</div>
<span className="text-xs font-medium">02</span>
</div>
</div>
</div>

<div className="md:col-span-12 group cursor-pointer md:mt-12">
<div className="overflow-hidden bg-stone-100 aspect-video lg:aspect-[21/9]">
<img alt="Landscape Editorial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="font-editorial text-xl tracking-tight mb-1">Nomadic State</h3>
<p className="text-xs text-stone-500">On Location</p>
</div>
<span className="text-xs font-medium">03</span>
</div>
</div>

<div className="md:col-span-6 group cursor-pointer md:mt-12">
<div className="overflow-hidden bg-stone-100 aspect-square">
<img alt="Abstract Art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="md:col-span-6 group cursor-pointer md:mt-12 md:pt-24">
<div className="overflow-hidden bg-stone-100 aspect-square">
<img alt="Portrait Close Up" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'sepia(30%)'}}/>
</div>
</div>
</div>
</div>
</main>

<section className="bg-stone-900 text-stone-50 py-24 md:py-32">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/3">
<div className="sticky top-32">
<p className="text-xs uppercase tracking-widest text-stone-400 mb-6">Profile</p>
<h2 className="font-editorial text-4xl md:text-5xl tracking-tight mb-8">The<br/>Director's<br/><span className="italic text-stone-400">Gaze</span></h2>
<div className="flex gap-4 mb-12 lg:mb-0">
<a className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-50 hover:text-stone-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-50 hover:text-stone-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 font-light text-sm text-stone-300 leading-loose">
<div>
<p className="mb-6"><span className="float-left text-6xl font-editorial text-stone-50 leading-none mr-3 mt-1">B</span>ased between major creative capitals, Rita brings over a decade of experience to the realm of high-end photography. Her background in fine arts deeply informs her approach to lighting and composition, resulting in imagery that feels both classic and distinctly contemporary.</p>
<p>She collaborates with leading publications, luxury brands, and discerning private clients to create visual narratives that transcend simple documentation. Her work is characterized by its emotional resonance and meticulous attention to detail.</p>
</div>
<div className="flex flex-col gap-8">
<img alt="Photographer Portrait" className="w-full aspect-[3/4] object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-editorial text-xl text-stone-50 tracking-tight mb-2">Exhibitions &amp; Features</h4>
<ul className="space-y-2 text-xs">
<li className="flex justify-between border-b border-stone-800 pb-2"><span>Vogue Italia</span> <span className="text-stone-500">2023</span></li>
<li className="flex justify-between border-b border-stone-800 pb-2"><span>Le Galerie, Paris</span> <span className="text-stone-500">2022</span></li>
<li className="flex justify-between border-b border-stone-800 pb-2"><span>Kinfolk Magazine</span> <span className="text-stone-500">2021</span></li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#e8e6e1]">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-editorial text-3xl md:text-5xl tracking-tight mb-6">Commission a Project</h2>
<p className="text-sm text-stone-600 font-light mb-12 max-w-lg mx-auto">Currently accepting select commercial and editorial commissions for the upcoming season. For rates and availability, please submit an inquiry.</p>
<form className="max-w-md mx-auto space-y-6 text-left">
<div className="relative">
<input className="block w-full border-b border-stone-400 bg-transparent py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors peer placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-3 text-xs text-stone-500 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-stone-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="block w-full border-b border-stone-400 bg-transparent py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors peer placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-3 text-xs text-stone-500 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-stone-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs" htmlFor="email">Email Address</label>
</div>
<div className="relative">
<select className="block w-full border-b border-stone-400 bg-transparent py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors appearance-none text-stone-800 cursor-pointer">
<option disabled="" selected="" value="">Select Inquiry Type</option>
<option value="editorial">Editorial Campaign</option>
<option value="portrait">Private Portraiture</option>
<option value="commercial">Commercial/Brand</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-stone-500 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<button className="w-full bg-stone-900 text-white text-xs uppercase tracking-widest py-4 mt-8 hover:bg-stone-800 transition-colors" type="button">Submit Inquiry</button>
</form>
</div>
</section>

<footer className="bg-[#faf9f8] pt-16 pb-8 px-6 md:px-12 border-t border-stone-200">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-editorial text-2xl tracking-tighter uppercase">Rita</div>
<div className="flex gap-6 items-center">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="text-[10px] uppercase tracking-widest text-stone-400 flex flex-col md:flex-row gap-4 items-center">
<span>© 2024 Rita Photography</span>
<span className="hidden md:inline">—</span>
<a className="hover:text-stone-900" href="#">Legal Notice</a>
</div>
</div>
</footer>

    </>
  );
}
