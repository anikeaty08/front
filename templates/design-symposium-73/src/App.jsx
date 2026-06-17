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



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Slide-up Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-block').forEach((el) => {
            observer.observe(el);
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
      

<section className="min-h-screen bg-[#F03823] text-white flex flex-col justify-between border-b-[4px] border-black relative reveal-block active">

<nav className="grid grid-cols-2 md:grid-cols-12 gap-0 border-b-[4px] border-white/20">
<div className="col-span-1 md:col-span-2 p-4 md:p-6 border-r-[4px] border-white/20">
<span className="block text-sm font-semibold tracking-tight">BASEL, CH</span>
</div>
<div className="col-span-1 md:col-span-2 p-4 md:p-6 border-r-0 md:border-r-[4px] border-white/20">
<span className="block text-sm font-semibold tracking-tight">15.05.2026</span>
</div>
<div className="hidden md:block col-span-8 p-6 text-right">
<span className="text-sm font-semibold tracking-tight uppercase">International Typographic Style</span>
</div>
</nav>

<div className="flex-grow flex flex-col justify-center px-4 md:px-6 z-10 pt-12 md:pt-0">
<h1 className="font-bold text-massive uppercase break-words">
                Grid &amp;<br/>Grotesk
            </h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 border-t-[4px] border-white/20">
<div className="col-span-1 md:col-span-4 p-4 md:p-6 border-b-[4px] md:border-b-0 md:border-r-[4px] border-white/20">
<p className="text-lg font-normal leading-snug">
                    A symposium on structure,<br/>geometry, and the void.
                </p>
</div>
<div className="col-span-1 md:col-span-2 p-4 md:p-6 border-b-[4px] md:border-b-0 md:border-r-[4px] border-white/20 flex items-center">
<i className="w-8 h-8" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
<div className="col-span-1 md:col-span-6 p-4 md:p-6 flex items-center justify-end">
<span className="text-sm font-semibold tracking-tight">SCROLL TO EXPLORE</span>
</div>
</div>
</section>

<section className="min-h-screen w-full relative">
<div className="grid grid-cols-1 md:grid-cols-12 h-full min-h-screen">

<div className="hidden md:block md:col-span-6 border-r-[4px] border-black bg-white relative">
<div className="absolute bottom-6 left-6 reveal-block">
<span className="block text-9xl font-bold tracking-tighter text-[#F03823] opacity-20">01</span>
</div>
</div>

<div className="col-span-1 md:col-span-6 flex flex-col justify-center p-6 md:p-12 lg:p-20 reveal-block">
<h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.9] mb-12">
                    The grid is not a prison. It is a map.
                </h2>
<div className="w-full h-[4px] bg-black mb-12"></div>
<div className="prose max-w-none">
<p className="text-xl md:text-2xl font-normal leading-relaxed text-left mb-8">
                        Design is the organization of information. There is no such thing as boring content, only boring structure. We return to the fundamentals of the Swiss Style to strip away the decorative and reveal the essential.
                    </p>
<p className="text-xl md:text-2xl font-normal leading-relaxed text-left">
                        Objective photography. Sans-serif typography. Asymmetrical organization. These are not limitations; they are the tools of clarity in a chaotic world.
                    </p>
</div>
<div className="mt-20 flex gap-4 items-center">
<span className="uppercase text-xs font-bold tracking-widest border-black border rounded-full pt-2 pr-4 pb-2 pl-4">register now</span>
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="w-full border-t-[4px] border-black bg-black">
<div className="grid grid-cols-1 md:grid-cols-3">

<div className="relative h-[80vh] md:h-screen border-b-[4px] md:border-b-0 md:border-r-[4px] border-black group overflow-hidden reveal-block">
<img alt="Brutalist Architecture" className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 left-0 p-6">
<span className="text-8xl md:text-9xl font-bold text-white mix-blend-difference tracking-tighter">01</span>
</div>
<div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t-[4px] border-black">
<span className="text-xs font-bold uppercase tracking-widest text-black">Fig. 01 — Structure</span>
</div>
</div>

<div className="relative h-[80vh] md:h-screen border-b-[4px] md:border-b-0 md:border-r-[4px] border-black group overflow-hidden reveal-block" style={{transitionDelay: '100ms'}}>
<img alt="Geometric Pattern" className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 left-0 p-6">
<span className="text-8xl md:text-9xl font-bold text-white mix-blend-difference tracking-tighter">02</span>
</div>
<div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t-[4px] border-black">
<span className="text-xs font-bold uppercase tracking-widest text-black">Fig. 02 — Rhythm</span>
</div>
</div>

<div className="relative h-[80vh] md:h-screen group overflow-hidden reveal-block" style={{transitionDelay: '200ms'}}>
<img alt="Concrete Detail" className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-0 left-0 p-6">
<span className="text-8xl md:text-9xl font-bold text-white mix-blend-difference tracking-tighter">03</span>
</div>
<div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t-[4px] border-black">
<span className="text-xs font-bold uppercase tracking-widest text-black">Fig. 03 — Texture</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t-[4px] border-black">
<div className="container mx-auto px-6 max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-12 mb-12 reveal-block">
<div className="col-span-12 md:col-span-4">
<h3 className="text-sm font-bold uppercase tracking-widest mb-4">Speakers</h3>
</div>
</div>
<div className="flex flex-col border-t-[4px] border-black reveal-block">

<div className="group relative grid grid-cols-1 md:grid-cols-12 py-8 md:py-12 border-b-[4px] border-black hover:bg-[#F03823] hover:text-white transition-colors duration-200 cursor-pointer">
<div className="md:col-span-1 flex items-center mb-4 md:mb-0">
<span className="text-sm font-bold tracking-widest">10:00</span>
</div>
<div className="md:col-span-8">
<h4 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">Massimo Vignelli</h4>
</div>
<div className="md:col-span-3 flex items-center justify-start md:justify-end mt-4 md:mt-0">
<span className="text-lg font-normal">Modernist Canon</span>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 py-8 md:py-12 border-b-[4px] border-black hover:bg-[#F03823] hover:text-white transition-colors duration-200 cursor-pointer">
<div className="md:col-span-1 flex items-center mb-4 md:mb-0">
<span className="text-sm font-bold tracking-widest">12:30</span>
</div>
<div className="md:col-span-8">
<h4 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">Josef Müller-Brockmann</h4>
</div>
<div className="md:col-span-3 flex items-center justify-start md:justify-end mt-4 md:mt-0">
<span className="text-lg font-normal">Grid Systems</span>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 py-8 md:py-12 border-b-[4px] border-black hover:bg-[#F03823] hover:text-white transition-colors duration-200 cursor-pointer">
<div className="md:col-span-1 flex items-center mb-4 md:mb-0">
<span className="text-sm font-bold tracking-widest">15:00</span>
</div>
<div className="md:col-span-8">
<h4 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">Armin Hofmann</h4>
</div>
<div className="md:col-span-3 flex items-center justify-start md:justify-end mt-4 md:mt-0">
<span className="text-lg font-normal">Graphic Design Manual</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#F03823] text-white border-t-[4px] border-black">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-8 md:p-16 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black flex flex-col justify-between h-full reveal-block">
<div>
<h2 className="text-6xl md:text-8xl font-semibold tracking-[-0.05em] leading-[0.85] mb-8">
                        SECURE<br/>YOUR<br/>PLACE.
                    </h2>
</div>
<div className="mt-12">
<p className="text-xl max-w-md font-normal">
                        Limited capacity for the dedicated. <br/>Join the movement towards clarity.
                    </p>
</div>
</div>

<div className="p-8 md:p-16 bg-white text-black reveal-block">
<form className="flex flex-col space-y-8">
<div className="flex flex-col space-y-2">
<label className="text-xs font-bold uppercase tracking-widest">Designation / Name</label>
<input className="w-full bg-transparent border-[4px] border-black p-4 text-xl font-bold focus:outline-none focus:bg-[#F03823] focus:text-white transition-colors placeholder:text-gray-400" placeholder="Enter full name" type="text"/>
</div>
<div className="flex flex-col space-y-2">
<label className="text-xs font-bold uppercase tracking-widest">Contact / Email</label>
<input className="w-full bg-transparent border-[4px] border-black p-4 text-xl font-bold focus:outline-none focus:bg-[#F03823] focus:text-white transition-colors placeholder:text-gray-400" placeholder="email@studio.com" type="email"/>
</div>
<div className="pt-4">
<button className="w-full bg-black text-white p-6 text-xl font-bold uppercase tracking-widest hover:bg-[#F03823] transition-colors border-[4px] border-black hover:border-black flex justify-between items-center group" type="button">
<span>Register</span>
<i className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</form>
</div>
</div>

<div className="border-t-[4px] border-black bg-black text-white p-4 flex justify-between items-center text-xs font-bold tracking-widest uppercase">
<span>© 2026 Grid &amp; Grotesk</span>
<div className="flex gap-6">
<a className="hover:text-[#F03823] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#F03823] transition-colors" href="#">Twitter</a>
<a className="hover:text-[#F03823] transition-colors" href="#">Legal</a>
</div>
</div>
</footer>


    </>
  );
}
