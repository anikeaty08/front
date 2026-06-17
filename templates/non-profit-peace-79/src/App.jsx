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



        // Slideshow Logic
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide-img');
            const dots = document.querySelectorAll('.slide-dot');
            let currentSlide = 0;
            const totalSlides = slides.length;

            if(totalSlides === 0) return;

            setInterval(() => {
                // Fade out current
                slides[currentSlide].classList.remove('opacity-100');
                slides[currentSlide].classList.add('opacity-0');
                dots[currentSlide].classList.remove('opacity-100');
                dots[currentSlide].classList.add('opacity-40');

                // Move to next
                currentSlide = (currentSlide + 1) % totalSlides;

                // Fade in next
                slides[currentSlide].classList.remove('opacity-0');
                slides[currentSlide].classList.add('opacity-100');
                dots[currentSlide].classList.remove('opacity-40');
                dots[currentSlide].classList.add('opacity-100');
            }, 4500);
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tight text-zinc-900 flex items-center gap-3" href="#">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
                    Holy Trinity Peace Village Kuron
                </a>
<div className="hidden md:flex items-center gap-6 text-base font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#mission">Our Mission</a>
<a className="hover:text-zinc-900 transition-colors" href="#impact">Impact</a>
<a className="hover:text-zinc-900 transition-colors" href="#gallery">Gallery</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-base font-normal text-zinc-600 hover:text-zinc-900 transition-colors" href="#contact">
                    Contact Us
                </a>
<a className="bg-zinc-900 text-white text-base font-normal px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all shadow-sm active:scale-95 flex items-center gap-2" href="#donate">
                    Donate
                    <iconify-icon height="16" icon="solar:heart-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[60vh]">

<div className="flex flex-col gap-6 max-w-xl z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 w-fit text-sm font-normal text-zinc-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Transforming lives in South Sudan
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.05]">
                        Fostering peace through development.
                    </h1>
<p className="text-xl text-zinc-500 font-normal leading-relaxed max-w-md">
                        We are dedicated to building sustainable peace by constructing clean water boreholes, educating communities, and facilitating dialogue.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="bg-zinc-900 text-white text-base font-normal px-6 py-3.5 rounded-full hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2" href="#support">
                            Support Our Work
                        </a>
<a className="bg-white text-zinc-900 border border-zinc-200 text-base font-normal px-6 py-3.5 rounded-full hover:bg-zinc-50 transition-all flex items-center gap-2 shadow-sm" href="#mission">
                            Learn More
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-[50vh] lg:h-[65vh] rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-200/50 group bg-zinc-100">
<div className="w-full h-full relative" id="slideshow">
<img alt="Community gathering" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 slide-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Educational support" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 slide-img" src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Water resources" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 slide-img" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
<div className="w-2 h-2 rounded-full bg-white transition-all duration-300 slide-dot opacity-100"></div>
<div className="w-2 h-2 rounded-full bg-white transition-all duration-300 slide-dot opacity-40"></div>
<div className="w-2 h-2 rounded-full bg-white transition-all duration-300 slide-dot opacity-40"></div>
</div>
</div>
</div>
</div>
</main>

<section className="pt-8 pb-20 bg-[#FAFAFA]" id="mission">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">Our Vision &amp; Commitment</h2>
<div className="text-lg text-zinc-500 font-normal leading-relaxed space-y-6">
<p>
                    The Holy Trinity Peace Village Kuron has continued to work towards its vision of inspiring South Sudan through peaceful co-existence of communities and having Development Programs such as Education, Livelihood and Agriculture, Health, and evangelization projects.
                </p>
<p>
                    We are committed to the course of improving the lives of the people we serve and improving our interventions. Our activities ranging from education program, Peacebuilding and Livelihood, Health and Pastoral are all going on well.
                </p>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">Supported by our generous partners</p>
<p className="text-base text-zinc-500 font-normal max-w-3xl mx-auto mb-14">
                So far we have continued to receive support from Stromme Foundation, FOSE, Norwegian Friends of the Peace Village, Mennonite Central Committee, Norwegian Church Aid, PAX, NCP-SSCC and Caritas Austria thanks for your generosity.
            </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 sm:gap-x-16">
<div className="text-xl sm:text-2xl font-semibold tracking-tighter text-zinc-300 hover:text-zinc-600 transition-colors uppercase cursor-default">Stromme Foundation</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tighter text-zinc-300 hover:text-zinc-600 transition-colors uppercase cursor-default">FOSE</div>
<div className="text-lg sm:text-xl font-semibold tracking-tighter text-zinc-300 hover:text-zinc-600 transition-colors uppercase text-center leading-tight cursor-default">Norwegian Friends<br/><span className="text-xs sm:text-sm tracking-tight">of the Peace Village</span></div>
<div className="text-lg sm:text-xl font-semibold tracking-tighter text-zinc-300 hover:text-zinc-600 transition-colors uppercase text-center leading-tight cursor-default">Mennonite<br/><span className="text-xs sm:text-sm tracking-tight">Central Committee</span></div>
<div className="text-lg sm:text-xl font-semibold tracking-tighter text-zinc-300 hover:text-zinc-600 transition-colors uppercase text-center leading-tight cursor-default">Norwegian<br/><span className="text-xs sm:text-sm tracking-tight">Church Aid</span></div>
<div className="text-xl sm:text-2xl font-semibold tracking-tighter text-zinc-300 hover:text-zinc-600 transition-colors uppercase cursor-default">PAX</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tighter text-zinc-300 hover:text-zinc-600 transition-colors uppercase cursor-default">NCP-SSCC</div>
<div className="text-lg sm:text-xl font-semibold tracking-tighter text-zinc-300 hover:text-zinc-600 transition-colors uppercase text-center leading-tight cursor-default">Caritas<br/><span className="text-xs sm:text-sm tracking-tight">Austria</span></div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="impact">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">Our Core Initiatives</h2>
<p className="text-lg text-zinc-500 font-normal leading-relaxed">By addressing foundational community needs, we lay the groundwork for lasting peace and mutual understanding in the Kuron region.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col gap-10">
<div className="flex gap-5">
<div className="w-14 h-14 rounded-2xl bg-blue-100/50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200/50">
<iconify-icon height="24" icon="solar:waterdrop-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Building Boreholes</h3>
<p className="text-base text-zinc-500 font-normal leading-relaxed">Constructing reliable water sources prevents conflict over scarce resources and dramatically improves community health and sanitation.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-14 h-14 rounded-2xl bg-emerald-100/50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/50">
<iconify-icon height="24" icon="solar:book-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Educating Communities</h3>
<p className="text-base text-zinc-500 font-normal leading-relaxed">Providing foundational and vocational education to empower the next generation, fostering economic stability and broader perspectives.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-14 h-14 rounded-2xl bg-purple-100/50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/50">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Peace Building Programs</h3>
<p className="text-base text-zinc-500 font-normal leading-relaxed">Facilitating structured dialogue, conflict resolution workshops, and inter-community events to heal divisions and build trust.</p>
</div>
</div>
</div>

<div className="flex flex-col gap-6 bg-white p-8 rounded-[2rem] border border-zinc-200/60 shadow-sm">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">Public Reports &amp; Updates</h3>
<p className="text-base text-zinc-500 font-normal mb-4">Access our latest transparency reports and community newsletters to see the direct impact of your support.</p>
<div className="flex flex-col gap-4">
<a className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 bg-[#FAFAFA] hover:bg-zinc-50 hover:border-zinc-200 transition-all group" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white text-zinc-400 flex items-center justify-center border border-zinc-200/50">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-zinc-900">Annual Impact Report 2023</p>
<p className="text-sm text-zinc-500 font-normal">PDF • 2.4 MB</p>
</div>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:download-linear" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 bg-[#FAFAFA] hover:bg-zinc-50 hover:border-zinc-200 transition-all group" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white text-zinc-400 flex items-center justify-center border border-zinc-200/50">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-zinc-900">Q1 Water Initiative Update</p>
<p className="text-sm text-zinc-500 font-normal">PDF • 1.1 MB</p>
</div>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:download-linear" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 bg-[#FAFAFA] hover:bg-zinc-50 hover:border-zinc-200 transition-all group" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white text-zinc-400 flex items-center justify-center border border-zinc-200/50">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-zinc-900">Education Program Overview</p>
<p className="text-sm text-zinc-500 font-normal">PDF • 3.8 MB</p>
</div>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:download-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-3">On the Ground</h2>
<p className="text-lg text-zinc-500 font-normal">Glimpses of our ongoing initiatives in Kuron.</p>
</div>
<a className="text-base font-normal text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-2 pb-1" href="#">
                    View full gallery 
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[240px]">
<div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden group relative bg-zinc-100">
<img alt="Community meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<p className="text-white text-lg font-medium tracking-tight">Community Peace Dialogue</p>
</div>
</div>
<div className="rounded-[2rem] overflow-hidden group relative bg-zinc-100">
<img alt="Volunteers working" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-[2rem] overflow-hidden group relative bg-zinc-100">
<img alt="New borehole site" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 md:col-span-1 md:row-span-2 rounded-[2rem] overflow-hidden group relative bg-zinc-100">
<img alt="School children" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-[2rem] overflow-hidden group relative bg-zinc-100">
<img alt="Agricultural training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl sm:text-6xl font-medium tracking-tight text-white mb-6">
                Help us build a peaceful future.
            </h2>
<p className="text-xl text-zinc-400 mb-12 font-normal">
                Your contribution directly supports our efforts in Kuron—from digging vital water boreholes to running essential education and peace programs.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-zinc-900 text-base font-medium px-8 py-4 rounded-full hover:bg-zinc-100 transition-all shadow-lg shadow-white/5 active:scale-95 text-center flex items-center justify-center gap-2" href="#donate">
                    Donate Today
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-zinc-800 text-white border border-zinc-700 text-base font-normal px-8 py-4 rounded-full hover:bg-zinc-700 hover:border-zinc-600 transition-all active:scale-95 text-center" href="#contact">
                    Get in Touch
                </a>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-zinc-800/50 pb-10 mb-8">
<div className="text-xl font-medium tracking-tight text-white flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon height="14" icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
                    Holy Trinity Peace Village
                </div>
<div className="flex gap-8 text-base text-zinc-400 font-normal">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Projects</a>
<a className="hover:text-white transition-colors" href="#">Partners</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-zinc-500 font-normal">
                    © 2024 Holy Trinity Peace Village Kuron. All rights reserved.
                </div>
<div className="text-sm text-zinc-600 font-normal flex gap-4">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
