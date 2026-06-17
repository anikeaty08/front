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



        // --- Custom Routing Logic ---
        function navigate(targetId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(sec => {
                sec.classList.remove('active');
                // Reset scroll position for the incoming section
                if(sec.id === targetId) {
                    window.scrollTo(0,0);
                }
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.classList.add('active');
                
                // Re-trigger reveal animations for elements inside the new section
                setTimeout(() => {
                    const reveals = targetSection.querySelectorAll('.reveal-up');
                    reveals.forEach(el => {
                        el.classList.remove('is-visible');
                        // Small delay to ensure css reset
                        setTimeout(() => {
                            checkReveal(el);
                        }, 50);
                    });
                }, 100);
            }

            // Update Nav Active State (Desktop)
            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                // simple hack: if onclick string contains targetId
                if(link.getAttribute('onclick').includes(targetId)) {
                    link.classList.add('text-[#FF3B00]');
                } else {
                    link.classList.remove('text-[#FF3B00]');
                }
            });
        }

        // --- Mobile Menu Toggle ---
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const btn = document.getElementById('mobile-menu-btn');
            
            if(menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                btn.innerText = 'CLOSE';
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                btn.innerText = 'MENU';
            }
        }
        document.getElementById('mobile-menu-btn').addEventListener('click', toggleMenu);

        // --- Heavy Scroll Reveal Animation ---
        function checkReveal(element) {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100; // Trigger threshold

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('is-visible');
            }
        }

        function handleScrollReveal() {
            const reveals = document.querySelectorAll('.page-section.active .reveal-up');
            reveals.forEach(reveal => checkReveal(reveal));
        }

        window.addEventListener('scroll', handleScrollReveal);
        
        // Initial check on load
        window.addEventListener('load', () => {
            handleScrollReveal();
            // Set initial nav state
            navigate('index');
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
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 flex flex-col justify-between p-6 md:p-12">

<div className="flex justify-between items-start pointer-events-auto">

<button className="font-sans-heavy text-2xl md:text-4xl tracking-tighter uppercase leading-none hover:text-[#FF3B00] transition-colors duration-500" onclick="navigate('index')">
                TRM<span className="text-[#FF3B00] text-xs align-top">®</span>
</button>

<nav className="hidden md:flex flex-col text-right gap-2 text-xs font-bold uppercase tracking-widest">
<button className="nav-link hover:text-[#FF3B00] transition-colors relative group text-right" onclick="navigate('archive')">
<span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 text-[#FF3B00] transition-opacity">[01]</span> THE ARCHIVE
                </button>
<button className="nav-link hover:text-[#FF3B00] transition-colors relative group text-right" onclick="navigate('method')">
<span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 text-[#FF3B00] transition-opacity">[02]</span> THE METHOD
                </button>
<button className="nav-link hover:text-[#FF3B00] transition-colors relative group text-right" onclick="navigate('inquiry')">
<span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 text-[#FF3B00] transition-opacity">[03]</span> INITIATE
                </button>
</nav>

<button className="md:hidden text-xs uppercase tracking-widest font-bold border-b border-[#0D0D0D] pb-1 hover:text-[#FF3B00] transition-colors" id="mobile-menu-btn">
                MENU
            </button>
</div>

<div className="flex justify-between items-end text-xs uppercase tracking-widest opacity-50">
<span className="hidden md:block">LAT: 40.7128° N<br/>LNG: 74.0060° W</span>
<span className="text-right w-full md:w-auto">VOL. IV<br/>©2024</span>
</div>
</div>

<div className="fixed inset-0 bg-[#0D0D0D] text-[#E8E5DF] z-40 hidden flex-col justify-center items-center gap-12 text-2xl font-sans-heavy uppercase tracking-tighter" id="mobile-menu">
<button className="hover:text-[#FF3B00] transition-colors" onclick="navigate('index'); toggleMenu()">HOME</button>
<button className="hover:text-[#FF3B00] transition-colors" onclick="navigate('archive'); toggleMenu()">THE ARCHIVE</button>
<button className="hover:text-[#FF3B00] transition-colors" onclick="navigate('method'); toggleMenu()">THE METHOD</button>
<button className="hover:text-[#FF3B00] transition-colors text-[#FF3B00]" onclick="navigate('inquiry'); toggleMenu()">INITIATE</button>
</div>

<main className="w-full min-h-screen">

<section className="page-section active relative w-full h-screen flex items-center justify-center overflow-hidden" id="index">

<div className="absolute inset-0 w-full h-full img-container p-4 md:p-12 pb-24 md:pb-12">
<img alt="Monolith Villa" className="w-full h-full object-cover img-heavy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>

<h1 className="relative z-10 font-sans-heavy text-[15vw] leading-[0.8] text-center uppercase tracking-tighter text-[#E8E5DF] pointer-events-none blend-exclusion reveal-up">
                SPATIAL<br/>EXCELLENCE
            </h1>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-[#E8E5DF] blend-exclusion flex flex-col items-center gap-4 animate-pulse">
<span className="text-xs uppercase tracking-widest hidden md:block">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="page-section w-full min-h-screen pt-32 md:pt-48 pb-24 px-6 md:px-12" id="archive">
<div className="max-w-[1400px] mx-auto">
<header className="mb-24 md:mb-48 reveal-up">
<h2 className="font-sans-heavy text-5xl md:text-9xl tracking-tighter uppercase leading-none mb-8">THE<br/>ARCHIVE</h2>
<p className="text-xs md:text-sm max-w-md uppercase tracking-widest border-l-2 border-[#FF3B00] pl-4">A curated selection of brutalist interventions and monolithic constructs.</p>
</header>
<div className="flex flex-col gap-32 md:gap-64">

<article className="flex flex-col md:flex-row gap-8 md:gap-16 items-start reveal-up">
<div className="w-full md:w-7/12 img-container overflow-hidden">
<img alt="Project 1" className="w-full aspect-[4/3] object-cover img-heavy" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-5/12 flex flex-col justify-start pt-4 border-t border-[#0D0D0D]">
<h3 className="font-sans-heavy text-3xl md:text-5xl tracking-tighter uppercase mb-8">RESIDENCE V</h3>
<ul className="text-xs space-y-4 uppercase tracking-widest flex flex-col">
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>VOL</span> <span>4500 SQFT</span></li>
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>MAT</span> <span>CAST CONCRETE / OAK</span></li>
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>LOC</span> <span>12.97° N / 77.59° E</span></li>
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>STAT</span> <span className="text-[#FF3B00]">COMPLETED 2023</span></li>
</ul>
</div>
</article>

<article className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-start md:justify-end reveal-up">
<div className="w-full md:w-4/12 flex flex-col justify-start pt-4 border-t border-[#0D0D0D]">
<h3 className="font-sans-heavy text-3xl md:text-5xl tracking-tighter uppercase mb-8">THE VAULT</h3>
<ul className="text-xs space-y-4 uppercase tracking-widest flex flex-col">
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>VOL</span> <span>8200 SQFT</span></li>
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>MAT</span> <span>CORTEN STEEL / BASALT</span></li>
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>LOC</span> <span>45.46° N / 9.19° E</span></li>
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>STAT</span> <span>ARCHIVED</span></li>
</ul>
</div>
<div className="w-full md:w-6/12 img-container overflow-hidden">
<img alt="Project 2" className="w-full aspect-square object-cover img-heavy" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
</article>

<article className="relative w-full reveal-up mt-12 md:mt-32">
<div className="w-full md:w-10/12 ml-auto img-container overflow-hidden">
<img alt="Project 3" className="w-full aspect-video object-cover img-heavy" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 bg-[#E8E5DF] p-6 md:p-12 w-[90%] md:w-[40%] border border-[#0D0D0D] transform translate-y-12 md:translate-y-24 translate-x-4 md:translate-x-12">
<h3 className="font-sans-heavy text-4xl md:text-6xl tracking-tighter uppercase mb-8">PAVILION X</h3>
<ul className="text-xs space-y-4 uppercase tracking-widest flex flex-col">
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>VOL</span> <span>1200 SQFT</span></li>
<li className="flex justify-between border-b border-[#0D0D0D]/20 pb-2"><span>MAT</span> <span>GLASS / RAW IRON</span></li>
<li className="flex justify-between pb-2"><span>LOC</span> <span>51.50° N / 0.12° W</span></li>
</ul>
</div>
</article>
</div>
</div>
</section>

<section className="page-section w-full min-h-screen pt-32 md:pt-48 pb-24 px-6 md:px-12 bg-[#0D0D0D] text-[#E8E5DF]" id="method">
<div className="max-w-[1400px] mx-auto">
<header className="mb-24 md:mb-32 reveal-up">
<h2 className="font-sans-heavy text-5xl md:text-[10vw] tracking-tighter uppercase leading-none mb-12 text-[#E8E5DF]">SOLID<br/><span className="text-[#FF3B00]">VS</span> VOID</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 border-t border-[#E8E5DF]/30 pt-12">
<p className="text-base md:text-xl uppercase leading-relaxed font-bold tracking-tight">
                            We reject the superfluous. Our methodology is rooted in the physical weight of materials. We do not decorate; we carve space from solid matter. Every angle is calculated. Every texture is raw.
                        </p>
<div className="text-xs uppercase tracking-widest space-y-8 opacity-70">
<p>01 / REDUCTION TO ESSENCE</p>
<p>02 / TRUTH TO MATERIALS</p>
<p>03 / SPATIAL DOMINANCE</p>
<p>04 / PERMANENCE</p>
</div>
</div>
</header>

<div className="mt-32 md:mt-48 reveal-up">
<h3 className="font-sans-heavy text-3xl md:text-5xl tracking-tighter uppercase mb-16 border-b border-[#E8E5DF]/30 pb-8">ELEMENTAL<br/>PALETTE</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group cursor-crosshair">
<div className="w-full aspect-[3/4] overflow-hidden bg-white/5 mb-6 relative">
<img alt="Concrete Texture" className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-1000" src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-[#E8E5DF]/20 group-hover:border-[#FF3B00] transition-colors"></div>
</div>
<div className="flex justify-between items-end">
<span className="font-sans-heavy text-2xl tracking-tighter">BÉTON BRUT</span>
<span className="text-xs text-[#FF3B00]">[001]</span>
</div>
</div>

<div className="group cursor-crosshair md:mt-16">
<div className="w-full aspect-[3/4] overflow-hidden bg-white/5 mb-6 relative">
<img alt="Steel Texture" className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-1000" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-[#E8E5DF]/20 group-hover:border-[#FF3B00] transition-colors"></div>
</div>
<div className="flex justify-between items-end">
<span className="font-sans-heavy text-2xl tracking-tighter">CORTEN</span>
<span className="text-xs text-[#FF3B00]">[002]</span>
</div>
</div>

<div className="group cursor-crosshair md:mt-32">
<div className="w-full aspect-[3/4] overflow-hidden bg-white/5 mb-6 relative">
<img alt="Stone Texture" className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-1000" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-[#E8E5DF]/20 group-hover:border-[#FF3B00] transition-colors"></div>
</div>
<div className="flex justify-between items-end">
<span className="font-sans-heavy text-2xl tracking-tighter">BASALT</span>
<span className="text-xs text-[#FF3B00]">[003]</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section w-full min-h-screen pt-32 md:pt-48 pb-24 px-6 md:px-12 flex flex-col justify-center" id="inquiry">
<div className="max-w-[1000px] w-full mx-auto reveal-up">
<header className="mb-16 md:mb-24">
<h2 className="font-sans-heavy text-6xl md:text-[8vw] tracking-tighter uppercase leading-none">INITIATE<br/>PROJECT<span className="text-[#FF3B00]">.</span></h2>
</header>
<form className="space-y-12 md:space-y-20">

<div className="relative group w-full">
<label className="absolute -top-4 left-0 text-xs font-bold text-[#FF3B00] uppercase tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">Entity / Principal</label>
<input className="w-full bg-transparent border-b-2 border-[#0D0D0D] py-4 text-2xl md:text-5xl font-sans-heavy uppercase tracking-tighter text-[#0D0D0D] outline-none rounded-none placeholder:text-[#0D0D0D]/20 focus:border-[#FF3B00] transition-colors" placeholder="ENTER NAME" type="text"/>
</div>

<div className="relative group w-full">
<label className="absolute -top-4 left-0 text-xs font-bold text-[#FF3B00] uppercase tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">Site Location</label>
<input className="w-full bg-transparent border-b-2 border-[#0D0D0D] py-4 text-2xl md:text-5xl font-sans-heavy uppercase tracking-tighter text-[#0D0D0D] outline-none rounded-none placeholder:text-[#0D0D0D]/20 focus:border-[#FF3B00] transition-colors" placeholder="COORDINATES / CITY" type="text"/>
</div>

<div className="relative group w-full">
<label className="absolute -top-4 left-0 text-xs font-bold text-[#FF3B00] uppercase tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">Budget Range</label>
<div className="relative w-full">
<select className="w-full bg-transparent border-b-2 border-[#0D0D0D] py-4 text-2xl md:text-5xl font-sans-heavy uppercase tracking-tighter text-[#0D0D0D] outline-none rounded-none focus:border-[#FF3B00] transition-colors cursor-pointer pr-12">
<option className="text-[#0D0D0D]/20" disabled="" selected="" value="">SCALE OF AMBITION</option>
<option className="text-sm bg-[#E8E5DF]" value="5">5CR+ / RESIDENTIAL</option>
<option className="text-sm bg-[#E8E5DF]" value="10">10CR+ / COMPOUND</option>
<option className="text-sm bg-[#E8E5DF]" value="commercial">COMMERCIAL / INSTITUTIONAL</option>
</select>

<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
<iconify-icon className="text-[#0D0D0D] group-focus-within:text-[#FF3B00] transition-colors" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>

<div className="pt-12 flex justify-end">
<button className="group flex items-center gap-6 hover:gap-10 transition-all duration-500" type="button">
<span className="font-sans-heavy text-3xl md:text-5xl tracking-tighter uppercase group-hover:text-[#FF3B00] transition-colors">TRANSMIT</span>
<iconify-icon className="text-[#0D0D0D] group-hover:text-[#FF3B00] transition-colors" icon="solar:arrow-right-linear" strokeWidth="1.5" width="48"></iconify-icon>
</button>
</div>
</form>
</div>
</section>
</main>


    </>
  );
}
