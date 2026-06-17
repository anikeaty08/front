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



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            // Ideally would select more elements, simplified for demo
            document.querySelectorAll('section h2').forEach(el => {
                el.classList.add('opacity-0', 'transform', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
                observer.observe(el);
            });
            
            // Custom observer for headers to trigger class change
            const headerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                })
            });
            
            document.querySelectorAll('section h2').forEach(el => headerObserver.observe(el));
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-[#F2F0EB]">
<div className="text-sm font-medium tracking-widest uppercase opacity-90">S &amp; C</div>
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
<a className="hover:opacity-60 transition-opacity" href="#">Inventory</a>
<a className="hover:opacity-60 transition-opacity" href="#">Journal</a>
<a className="hover:opacity-60 transition-opacity" href="#">Atelier</a>
</div>
<button className="group flex items-center gap-2">
<span className="text-xs tracking-widest uppercase hidden md:block group-hover:opacity-60 transition-opacity">Enquire</span>
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Vintage Porsche driving on coastal road" className="w-full h-full object-cover opacity-90 brightness-[0.7] scale-105 animate-[pulse_10s_ease-in-out_infinite] grayscale-[30%]" src="https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10"></div>
<div className="relative z-20 text-center text-[#F2F0EB] px-4">
<p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 opacity-80 reveal-up">Curators of Kinetic Art — Est. 1998</p>
<h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight mb-8 leading-[0.9] reveal-up delay-100">
                STRADA <br className="md:hidden"/> <span className="text-4xl md:text-6xl align-middle font-thin italic font-sans">&amp;</span> CORSA
            </h1>
<div className="mt-12 reveal-up delay-300">
<a className="group relative inline-flex items-center gap-4 text-sm tracking-widest uppercase pb-2 overflow-hidden" href="#inventory">
<span className="relative z-10">Explore Inventory</span>
<span className="iconify transform group-hover:translate-x-1 transition-transform duration-500" data-icon="lucide:arrow-right" data-width="16"></span>
<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#F2F0EB]/30 group-hover:w-0 transition-all duration-500"></span>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F2F0EB] group-hover:w-full transition-all duration-500 delay-75"></span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#F2F0EB]/50 animate-bounce duration-[3000ms]">
<span className="iconify" data-icon="lucide:arrow-down" data-width="20"></span>
</div>
</header>
<main>

<section className="relative px-6 py-24 md:px-12 md:py-32 max-w-[1600px] mx-auto" id="inventory">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#1C1C1C]/10 pb-6">
<h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-[#1C1C1C]">Current Highlights</h2>
<div className="text-right mt-4 md:mt-0">
<p className="text-xs uppercase tracking-widest text-neutral-500">Selected for provenance</p>
<p className="text-xs uppercase tracking-widest text-neutral-500">and mechanical purity</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-8 lg:gap-x-12">

<div className="md:col-span-8 relative group cursor-pointer">
<div className="img-scale-container aspect-[16/9] w-full relative z-0">
<img alt="Classic Ferrari Rear" className="img-scale w-full h-full object-cover grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-4 flex justify-between items-baseline pr-4">
<div>
<h3 className="text-2xl font-serif italic text-[#1C1C1C]">Ferrari 250 GT Lusso</h3>
<p className="text-xs tracking-widest text-neutral-500 mt-1 uppercase">1963 — Maranello, Italy</p>
</div>
<span className="text-xs border border-[#1C1C1C]/20 rounded-full px-3 py-1">Inquire</span>
</div>

<div className="hidden md:block absolute -right-12 -bottom-12 w-64 aspect-square z-10 shadow-2xl img-scale-container border-4 border-[#F2F0EB]">
<img alt="Interior Detail Stitching" className="img-scale w-full h-full object-cover" src="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="hidden md:block md:col-span-4"></div>

<div className="md:col-span-1"></div> 
<div className="md:col-span-4 relative mt-0 md:-mt-32 z-20 group cursor-pointer">
<div className="img-scale-container aspect-[3/4] w-full">
<img alt="Custom Ducati Cafe Racer" className="img-scale w-full h-full object-cover grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-4">
<h3 className="text-2xl font-serif italic text-[#1C1C1C]">Ducati Paul Smart 1000 LE</h3>
<p className="text-xs tracking-widest text-neutral-500 mt-1 uppercase">2006 — Bologna, Italy</p>
</div>
</div>
<div className="md:col-span-6 flex items-center justify-center md:justify-start px-8 md:pl-16">
<div className="max-w-xs">
<p className="font-serif text-2xl md:text-3xl leading-snug text-[#1C1C1C] mb-6">
                            "Every scratch tells a story, every engine note sings a history. We don't sell transport; we transfer stewardship."
                        </p>
<a className="text-xs uppercase tracking-widest border-b border-[#1C1C1C] pb-1 hover:text-[#2A382E] hover:border-[#2A382E] transition-colors" href="#">View Full Inventory</a>
</div>
</div>
</div>
</section>

<section className="bg-[#EAE8E2] text-[#1C1C1C] overflow-hidden">
<div className="flex flex-col lg:flex-row min-h-[80vh]">

<div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto">
<img alt="Mechanic Workshop Artisan" className="absolute inset-0 w-full h-full object-cover grayscale-[40%] contrast-[1.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-[#2A382E]/10 mix-blend-multiply"></div>
</div>

<div className="w-full lg:w-1/2 px-8 py-20 lg:p-24 flex flex-col justify-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#2A382E] mb-4">The Workshop</span>
<h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-12 text-balance">The Vetting Standard.</h2>
<div className="space-y-12">

<div className="flex gap-6 group">
<span className="font-serif text-3xl text-[#2A382E]/40 group-hover:text-[#2A382E] transition-colors">01.</span>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">Historical Verification</h4>
<p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
                                    We trace the lineage of every machine. Factory build sheets, service records, and previous ownership are scrutinized to ensure absolute authenticity.
                                </p>
</div>
</div>

<div className="flex gap-6 group">
<span className="font-serif text-3xl text-[#2A382E]/40 group-hover:text-[#2A382E] transition-colors">02.</span>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">Mechanical Auditing</h4>
<p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
                                    A 140-point inspection by marque specialists. Compression tests, fluid analysis, and chassis alignment. Nothing is assumed; everything is measured.
                                </p>
</div>
</div>

<div className="flex gap-6 group">
<span className="font-serif text-3xl text-[#2A382E]/40 group-hover:text-[#2A382E] transition-colors">03.</span>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">Preservation &amp; Detailing</h4>
<p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
                                    Sympathetic restoration. We correct paint imperfections while preserving original patina, ensuring the vehicle presents as a time capsule, not a plastic toy.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-4 md:px-0">
<div className="max-w-[1800px] mx-auto relative">

<div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
<img alt="Lifestyle Aston Martin at Villa" className="w-full h-full object-cover object-[center_30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/40 to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-[#F2F0EB]">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between max-w-7xl mx-auto">
<div className="mb-8 md:mb-0">
<h2 className="text-5xl md:text-7xl font-serif italic mb-4">Beyond the Machine.</h2>
<p className="max-w-md text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                                Owning the vehicle is just the entry point. We offer global sourcing, climate-controlled bonded storage, and access to exclusive European rallies and track events.
                            </p>
</div>
<div className="flex flex-col gap-4">
<a className="group flex items-center gap-3 text-sm tracking-widest uppercase hover:text-neutral-300 transition-colors" href="#">
<span className="w-2 h-2 bg-[#F2F0EB] rounded-full group-hover:bg-neutral-400 transition-colors"></span>
                                Global Sourcing
                            </a>
<a className="group flex items-center gap-3 text-sm tracking-widest uppercase hover:text-neutral-300 transition-colors" href="#">
<span className="w-2 h-2 bg-[#F2F0EB] rounded-full group-hover:bg-neutral-400 transition-colors"></span>
                                Secure Storage
                            </a>
<a className="group flex items-center gap-3 text-sm tracking-widest uppercase hover:text-neutral-300 transition-colors" href="#">
<span className="w-2 h-2 bg-[#F2F0EB] rounded-full group-hover:bg-neutral-400 transition-colors"></span>
                                Private Events
                            </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#1C1C1C] text-[#F2F0EB] px-6 py-16 md:px-12 md:py-24 border-t border-neutral-800">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start">
<div className="mb-12 md:mb-0">
<h3 className="font-serif text-3xl md:text-4xl mb-6">Strada <span className="italic text-neutral-500">&amp;</span> Corsa</h3>
<div className="flex gap-4 text-neutral-500 hover:text-white transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-xs tracking-widest uppercase">
<div className="flex flex-col gap-4">
<span className="text-neutral-500 mb-2">Explore</span>
<a className="hover:text-neutral-400 transition-colors" href="#">Inventory</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Services</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Journal</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-neutral-500 mb-2">Legal</span>
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Imprint</a>
</div>
<div className="flex flex-col gap-4 col-span-2 md:col-span-1">
<span className="text-neutral-500 mb-2">Locations</span>
<p className="text-neutral-300">London</p>
<p className="text-neutral-300">Dubai</p>
<p className="text-neutral-300">Los Angeles</p>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 Strada &amp; Corsa. All rights reserved.</p>
<p className="mt-4 md:mt-0 tracking-widest uppercase">Viewing by appointment only</p>
</div>
</footer>


    </>
  );
}
