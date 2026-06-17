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



        // Navbar Scroll State
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 80) {
                nav.classList.add('bg-[#1E2420]/95', 'border-[#899678]/15');
                nav.classList.remove('border-transparent');
            } else {
                nav.classList.remove('bg-[#1E2420]/95', 'border-[#899678]/15');
                nav.classList.add('border-transparent');
            }
        });

        // Filter Pill Toggle Logic
        function setFilter(element) {
            const btns = document.querySelectorAll('.filter-btn');
            btns.forEach(btn => {
                // Reset to inactive state
                btn.classList.remove('bg-[#88653D]', 'text-[#F5F2EE]', 'border-transparent');
                btn.classList.add('bg-transparent', 'text-[#F5F2EE]/60', 'border-[#F5F2EE]/15');
            });
            // Set active state
            element.classList.remove('bg-transparent', 'text-[#F5F2EE]/60', 'border-[#F5F2EE]/15');
            element.classList.add('bg-[#88653D]', 'text-[#F5F2EE]', 'border-transparent');
        }
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">

<a className="font-['Oswald'] font-semibold text-[#F5F2EE] text-sm tracking-[0.2em] uppercase" href="#">
                The Hunt For Success
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#F5F2EE]/70 hover:text-[#F5F2EE] transition-colors duration-200" href="#episodes">Episodes</a>
<a className="text-sm text-[#F5F2EE]/70 hover:text-[#F5F2EE] transition-colors duration-200" href="#guests">Guests</a>
<a className="text-sm text-[#F5F2EE]/70 hover:text-[#F5F2EE] transition-colors duration-200" href="#about">About</a>
<a className="text-sm text-[#F5F2EE]/70 hover:text-[#F5F2EE] transition-colors duration-200" href="#apply">Apply</a>
</div>

<div className="flex items-center">
<a className="hidden md:inline-flex bg-[#88653D] text-[#F5F2EE] rounded-full py-2 px-5 font-medium text-sm transition-colors duration-200 items-center justify-center hover:bg-[#C1623F]" href="#listen">
                    Listen Now
                </a>
<button className="md:hidden text-[#F5F2EE] flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full flex flex-col justify-end pb-14 lg:pb-20 pl-6 lg:pl-16 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2420] via-[#1E2420]/70 to-[#1E2420]/30 z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl">
<h1 className="font-['Oswald'] font-semibold text-[#F5F2EE] text-3xl md:text-5xl tracking-tight leading-none mb-2">
                SUCCESS IS NOT AN ACCIDENT.
            </h1>
<h2 className="font-['Oswald'] font-semibold text-[#899678] text-5xl md:text-7xl tracking-tight leading-[0.95]">
                IT'S A HUNT.
            </h2>
<p className="font-['Lora'] text-[#F5F2EE]/65 text-base md:text-lg max-w-[480px] mt-5 leading-relaxed">
                Real conversations with entrepreneurs who built wealth, discipline, and freedom — and designed a life worth living.
            </p>
<div className="flex flex-col md:flex-row gap-3 mt-8 max-w-[480px] md:max-w-none w-full md:w-auto pr-6 md:pr-0">
<a className="bg-[#88653D] text-[#F5F2EE] rounded-full py-3.5 px-8 font-medium text-sm transition-colors duration-200 inline-flex items-center justify-center gap-2 hover:bg-[#C1623F]" href="#listen">
                    Listen Now
                </a>
<a className="bg-transparent text-[#F5F2EE] border border-[#F5F2EE]/35 rounded-full py-3.5 px-8 font-normal text-sm transition-all duration-200 inline-flex items-center justify-center gap-2 hover:bg-[#88653D] hover:border-transparent" href="#about">
                    Meet the Host
                </a>
</div>
</div>
</section>

<section className="bg-[#1E2420] py-16 lg:py-20 px-5 lg:px-8">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 lg:gap-16">

<div>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D] tracking-[0.2em] uppercase block mb-6">NOT FOR EVERYONE.</span>
<div className="h-[2px] w-10 bg-[#88653D] mb-5"></div>
<h3 className="font-['Lora'] italic font-medium text-[#F5F2EE] text-xl md:text-3xl tracking-tight leading-[1.55] max-w-[400px]">
                    "Success should fund a life you actually want — not a self-created prison."
                </h3>
<p className="font-['Lora'] text-[#F5F2EE]/55 text-base mt-5 max-w-[380px] leading-[1.7]">
                    This show exists for the builder who wants both. The business and the life. The discipline and the freedom. The boardroom and the backcountry.
                </p>
</div>

<div className="flex flex-col justify-center">

<div className="flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="font-['JetBrains_Mono'] text-sm text-[#88653D]">✕</span>
<span className="text-[#F5F2EE]/65 text-base">No recycled frameworks.</span>
</div>
<div className="flex items-center gap-3">
<span className="font-['JetBrains_Mono'] text-sm text-[#88653D]">✕</span>
<span className="text-[#F5F2EE]/65 text-base">No hustle theater.</span>
</div>
<div className="flex items-center gap-3">
<span className="font-['JetBrains_Mono'] text-sm text-[#88653D]">✕</span>
<span className="text-[#F5F2EE]/65 text-base">No surface-level advice.</span>
</div>
</div>
<div className="h-[1px] w-full bg-[#F5F2EE]/10 my-5"></div>

<div className="flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="font-['JetBrains_Mono'] text-sm text-[#899678]">✓</span>
<span className="font-medium text-[#F5F2EE] text-base">Real builders.</span>
</div>
<div className="flex items-center gap-3">
<span className="font-['JetBrains_Mono'] text-sm text-[#899678]">✓</span>
<span className="font-medium text-[#F5F2EE] text-base">Real stakes.</span>
</div>
<div className="flex items-center gap-3">
<span className="font-['JetBrains_Mono'] text-sm text-[#899678]">✓</span>
<span className="font-medium text-[#F5F2EE] text-base">Real life design.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#364C61] py-16 lg:py-20 px-5 lg:px-8" id="episodes">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="w-full max-w-[420px] aspect-square bg-[#1A2530] rounded-3xl border border-[#899678]/20 flex items-center justify-center mx-auto lg:mx-0">
<span className="font-['Oswald'] font-semibold text-[#899678] text-5xl tracking-tight">EP. 01</span>
</div>

<div>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D] tracking-[0.2em] uppercase block">LATEST EPISODE</span>
<span className="text-sm text-[#F5F2EE]/45 mt-2 block">Episode 01</span>
<h3 className="font-['Oswald'] font-semibold text-[#F5F2EE] text-4xl md:text-5xl tracking-tight leading-none mt-2">
                    Bill Jordan
                </h3>
<h4 className="font-['Lora'] text-[#899678] text-base md:text-lg mt-2">
                    Building an Empire in the Outdoors Industry
                </h4>
<p className="font-['Lora'] text-[#F5F2EE]/68 text-base mt-5 max-w-[460px] leading-[1.7]">
                    He built one of the most recognized brands in hunting from nothing. What most people don't know is what it cost him — and what it taught him.
                </p>
<div className="h-[1px] w-full bg-[#F5F2EE]/10 my-6"></div>
<div className="flex gap-6 items-center">
<div className="flex gap-2 items-center">
<iconify-icon className="text-[#899678] text-base" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/50">1 hr 32 min</span>
</div>
<div className="flex gap-2 items-center">
<iconify-icon className="text-[#899678] text-base" icon="solar:calendar-linear"></iconify-icon>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/50">Episode 01</span>
</div>
</div>
<div className="flex flex-wrap gap-4 mt-6 items-center">
<a className="bg-[#88653D] text-[#F5F2EE] rounded-full py-3.5 px-8 font-medium text-sm transition-colors duration-200 inline-flex items-center justify-center hover:bg-[#C1623F]" href="#">
                        Listen Now
                    </a>
<a className="font-normal text-sm text-[#88653D] hover:underline flex items-center gap-1 group transition-all" href="#">
                        All Episodes <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#1E2420] py-16 lg:py-20 px-5 lg:px-8" id="about">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 lg:gap-16 items-center">

<div className="w-full max-w-[440px] aspect-[3/4] bg-[#1A2530] rounded-3xl border border-[#899678]/15 border-l-4 border-l-[#88653D] flex items-center justify-center mx-auto lg:mx-0 overflow-hidden relative">

<span className="font-['Oswald'] font-semibold text-[#899678] text-3xl tracking-tight">SAM McGOUGH</span>
</div>

<div>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D] tracking-[0.2em] uppercase block">THE GUIDE</span>
<h2 className="font-['Oswald'] font-semibold text-[#F5F2EE] text-4xl md:text-5xl tracking-tight leading-none mt-4">
                    DR. SAM McGOUGH
                </h2>
<div className="font-['Lora'] italic text-[#899678] text-lg mt-3 leading-[1.9]">
<span className="block">Healthcare executive.</span>
<span className="block">Systems builder.</span>
<span className="block">Founder &amp; CEO.</span>
<span className="block">Elk hunter.</span>
</div>
<div className="h-[2px] w-10 bg-[#88653D] my-5"></div>
<div className="font-['Lora'] text-[#F5F2EE]/68 text-base max-w-[500px] leading-[1.75] space-y-4">
<p>Sam has spent decades building healthcare organizations from the ground up, serving as CEO, and engineering systems that scale without breaking. He knows what it takes to operate at the highest levels of pressure.</p>
<p>He created this show to bypass the surface-level noise of typical business podcasts. The goal is raw, peer-to-peer conversations with those who have actually done the work.</p>
<p>For Sam, the backcountry isn't an escape—it's the ultimate proving ground for leadership, resilience, and clarity.</p>
</div>
<a className="mt-6 bg-transparent text-[#899678] border border-[#899678]/50 rounded-full py-3.5 px-8 font-normal text-sm transition-all duration-200 inline-flex items-center justify-center gap-2 hover:bg-[#88653D] hover:border-transparent hover:text-[#F5F2EE]" href="#">
                    Hear Sam's Story →
                </a>
</div>
</div>
</section>

<section className="bg-[#1A2530] py-16 lg:py-20 px-5 lg:px-8" id="guests">
<div className="max-w-[960px] mx-auto text-center mb-12">
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D] tracking-[0.2em] uppercase block mb-3">THE WALL</span>
<h2 className="font-['Oswald'] font-semibold text-[#F5F2EE] text-4xl md:text-5xl tracking-tight">
                28 conversations. 28 builders.
            </h2>
</div>
<div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="bg-[#1E2420] border border-[#C9A55A]/35 rounded-2xl p-6 h-[160px] flex flex-col transition-all duration-200 hover:border-[#C9A55A]/70 hover:-translate-y-1 group relative" href="#">
<div className="flex justify-between items-start w-full">
<div className="flex items-center gap-2">
<span className="font-['JetBrains_Mono'] text-xs text-[#C9A55A]/60">EP. 28</span>
<span className="bg-[#88653D] text-[#F5F2EE] font-['JetBrains_Mono'] text-xs px-2 py-0.5 rounded-full uppercase scale-[0.85] origin-left">NEW</span>
</div>
<iconify-icon className="text-[#88653D] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-3">
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight truncate">Bill Jordan</h4>
<p className="text-xs text-[#899678]/75 truncate mt-1">Founder, Realtree Outdoors</p>
</div>
<div className="h-[1px] w-full bg-[#C9A55A]/15 my-3"></div>
<p className="font-['Lora'] italic text-[#F5F2EE]/50 text-xs line-clamp-2">"The pattern was always clear, we just had to be quiet enough to see it."</p>
</a>

<a className="bg-[#1E2420] border border-[#C9A55A]/35 rounded-2xl p-6 h-[160px] flex flex-col transition-all duration-200 hover:border-[#C9A55A]/70 hover:-translate-y-1 group" href="#">
<div className="flex justify-between items-start w-full">
<span className="font-['JetBrains_Mono'] text-xs text-[#C9A55A]/60">EP. 27</span>
<iconify-icon className="text-[#88653D] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-3">
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight truncate">Sarah Vance</h4>
<p className="text-xs text-[#899678]/75 truncate mt-1">CEO, Vance Holdings</p>
</div>
<div className="h-[1px] w-full bg-[#C9A55A]/15 my-3"></div>
<p className="font-['Lora'] italic text-[#F5F2EE]/50 text-xs line-clamp-2">"True wealth is the ability to walk away on your own terms."</p>
</a>

<a className="bg-[#1E2420] border border-[#C9A55A]/35 rounded-2xl p-6 h-[160px] flex flex-col transition-all duration-200 hover:border-[#C9A55A]/70 hover:-translate-y-1 group" href="#">
<div className="flex justify-between items-start w-full">
<span className="font-['JetBrains_Mono'] text-xs text-[#C9A55A]/60">EP. 26</span>
<iconify-icon className="text-[#88653D] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-3">
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight truncate">James Caldwell</h4>
<p className="text-xs text-[#899678]/75 truncate mt-1">Outfitter &amp; Guide</p>
</div>
<div className="h-[1px] w-full bg-[#C9A55A]/15 my-3"></div>
<p className="font-['Lora'] italic text-[#F5F2EE]/50 text-xs line-clamp-2">"The mountain doesn't care about your resume. It cares about your lungs."</p>
</a>

<a className="bg-[#1E2420] border border-[#C9A55A]/35 rounded-2xl p-6 h-[160px] flex flex-col transition-all duration-200 hover:border-[#C9A55A]/70 hover:-translate-y-1 group" href="#">
<div className="flex justify-between items-start w-full">
<span className="font-['JetBrains_Mono'] text-xs text-[#C9A55A]/60">EP. 25</span>
<iconify-icon className="text-[#88653D] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-3">
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight truncate">Thomas Merritt</h4>
<p className="text-xs text-[#899678]/75 truncate mt-1">Architect &amp; Designer</p>
</div>
<div className="h-[1px] w-full bg-[#C9A55A]/15 my-3"></div>
<p className="font-['Lora'] italic text-[#F5F2EE]/50 text-xs line-clamp-2">"We construct the boundaries that eventually keep us trapped."</p>
</a>
</div>
<div className="text-center mt-10">
<a className="bg-transparent text-[#F5F2EE] border border-[#F5F2EE]/35 rounded-full py-3.5 px-8 font-normal text-sm transition-all duration-200 inline-flex items-center justify-center gap-2 hover:bg-[#88653D] hover:border-transparent" href="#">
                View All Guests →
            </a>
</div>
</section>

<section className="bg-[#1E2420] py-16 lg:py-20 px-5 lg:px-8">
<div className="max-w-[960px] mx-auto text-center mb-10">
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D] tracking-[0.2em] uppercase block mb-3">THE FIELD NOTES</span>
<h2 className="font-['Oswald'] font-semibold text-[#F5F2EE] text-4xl md:text-5xl tracking-tight">
                Find your next conversation.
            </h2>
</div>

<div className="max-w-[520px] mx-auto relative mb-6">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5F2EE]/40 text-lg pointer-events-none" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-white/5 border border-[#F5F2EE]/15 rounded-xl py-3.5 pl-11 pr-4 font-normal text-sm text-[#F5F2EE] placeholder:text-[#F5F2EE]/30 focus:outline-none focus:border-[#F5F2EE]/45 transition-colors" placeholder="Search episodes..." type="text"/>
</div>

<div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide max-w-full px-2">
<button className="filter-btn bg-[#88653D] text-[#F5F2EE] border border-transparent rounded-full py-2 px-5 font-normal text-sm whitespace-nowrap transition-colors" onclick="setFilter(this)">All</button>
<button className="filter-btn bg-transparent text-[#F5F2EE]/60 border border-[#F5F2EE]/15 rounded-full py-2 px-5 font-normal text-sm whitespace-nowrap transition-colors hover:border-[#F5F2EE]/30" onclick="setFilter(this)">Business</button>
<button className="filter-btn bg-transparent text-[#F5F2EE]/60 border border-[#F5F2EE]/15 rounded-full py-2 px-5 font-normal text-sm whitespace-nowrap transition-colors hover:border-[#F5F2EE]/30" onclick="setFilter(this)">Outdoors</button>
<button className="filter-btn bg-transparent text-[#F5F2EE]/60 border border-[#F5F2EE]/15 rounded-full py-2 px-5 font-normal text-sm whitespace-nowrap transition-colors hover:border-[#F5F2EE]/30" onclick="setFilter(this)">Lifestyle</button>
</div>

<div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F5F2EE]/20 flex flex-col">
<div className="flex justify-between items-center w-full">
<span className="bg-[#364C61] text-[#F5F2EE] font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.5 rounded-full tracking-wider uppercase">Business</span>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D]">Ep. 08</span>
</div>
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight leading-snug mt-4">Scale Without Sacrificing Soil</h4>
<p className="font-['Lora'] text-[#F5F2EE]/50 text-sm mt-1">Chris Hawthorne</p>
<div className="h-[1px] w-full bg-[#F5F2EE]/5 my-4"></div>
<div className="flex justify-between items-center mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#F5F2EE]/35 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/40">· 42 min</span>
</div>
<a className="font-normal text-[#88653D] text-xs hover:underline flex items-center gap-1" href="#">Listen →</a>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F5F2EE]/20 flex flex-col">
<div className="flex justify-between items-center w-full">
<span className="bg-[#899678] text-[#1E2420] font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.5 rounded-full tracking-wider uppercase font-medium">Outdoors</span>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D]">Ep. 07</span>
</div>
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight leading-snug mt-4">The Discipline of the Draw</h4>
<p className="font-['Lora'] text-[#F5F2EE]/50 text-sm mt-1">Daniel Park</p>
<div className="h-[1px] w-full bg-[#F5F2EE]/5 my-4"></div>
<div className="flex justify-between items-center mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#F5F2EE]/35 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/40">· 56 min</span>
</div>
<a className="font-normal text-[#88653D] text-xs hover:underline flex items-center gap-1" href="#">Listen →</a>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F5F2EE]/20 flex flex-col">
<div className="flex justify-between items-center w-full">
<span className="bg-[#88653D] text-[#F5F2EE] font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.5 rounded-full tracking-wider uppercase">Lifestyle</span>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D]">Ep. 06</span>
</div>
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight leading-snug mt-4">Designing the Unbound Life</h4>
<p className="font-['Lora'] text-[#F5F2EE]/50 text-sm mt-1">Thomas Merritt</p>
<div className="h-[1px] w-full bg-[#F5F2EE]/5 my-4"></div>
<div className="flex justify-between items-center mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#F5F2EE]/35 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/40">· 48 min</span>
</div>
<a className="font-normal text-[#88653D] text-xs hover:underline flex items-center gap-1" href="#">Listen →</a>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F5F2EE]/20 flex flex-col">
<div className="flex justify-between items-center w-full">
<span className="bg-[#364C61] text-[#F5F2EE] font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.5 rounded-full tracking-wider uppercase">Business</span>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D]">Ep. 05</span>
</div>
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight leading-snug mt-4">Acquisitions in the Dirt</h4>
<p className="font-['Lora'] text-[#F5F2EE]/50 text-sm mt-1">Ryan Cole</p>
<div className="h-[1px] w-full bg-[#F5F2EE]/5 my-4"></div>
<div className="flex justify-between items-center mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#F5F2EE]/35 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/40">· 61 min</span>
</div>
<a className="font-normal text-[#88653D] text-xs hover:underline flex items-center gap-1" href="#">Listen →</a>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F5F2EE]/20 flex flex-col">
<div className="flex justify-between items-center w-full">
<span className="bg-[#899678] text-[#1E2420] font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.5 rounded-full tracking-wider uppercase font-medium">Outdoors</span>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D]">Ep. 04</span>
</div>
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight leading-snug mt-4">12 Seasons in Wyoming</h4>
<p className="font-['Lora'] text-[#F5F2EE]/50 text-sm mt-1">James Caldwell</p>
<div className="h-[1px] w-full bg-[#F5F2EE]/5 my-4"></div>
<div className="flex justify-between items-center mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#F5F2EE]/35 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/40">· 39 min</span>
</div>
<a className="font-normal text-[#88653D] text-xs hover:underline flex items-center gap-1" href="#">Listen →</a>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F5F2EE]/20 flex flex-col">
<div className="flex justify-between items-center w-full">
<span className="bg-[#364C61] text-[#F5F2EE] font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.5 rounded-full tracking-wider uppercase">Business</span>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D]">Ep. 03</span>
</div>
<h4 className="font-['Oswald'] font-medium text-[#F5F2EE] text-lg tracking-tight leading-snug mt-4">The Terrain of True Wealth</h4>
<p className="font-['Lora'] text-[#F5F2EE]/50 text-sm mt-1">Sarah Vance</p>
<div className="h-[1px] w-full bg-[#F5F2EE]/5 my-4"></div>
<div className="flex justify-between items-center mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#F5F2EE]/35 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/40">· 52 min</span>
</div>
<a className="font-normal text-[#88653D] text-xs hover:underline flex items-center gap-1" href="#">Listen →</a>
</div>
</div>
</div>
</section>

<section className="bg-[#364C61] py-16 lg:py-20 px-5 lg:px-8" id="apply">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div>
<span className="font-['JetBrains_Mono'] text-xs text-[#88653D] tracking-[0.2em] uppercase block">APPLY</span>
<h2 className="font-['Oswald'] font-semibold text-[#F5F2EE] text-4xl md:text-5xl tracking-tight max-w-[380px] leading-[1.1] mt-4">
                    Think you belong in this conversation?
                </h2>
<p className="font-['Lora'] text-[#F5F2EE]/68 text-base mt-5 max-w-[420px] leading-[1.7]">
                    This show is built for people who have actually built something — in business and in life. We're selective because our listeners are.
                </p>
<div className="h-[2px] w-10 bg-[#88653D] my-8"></div>
<h3 className="font-['Lora'] italic font-medium text-[#899678] text-xl tracking-tight max-w-[360px] leading-[1.55]">
                    "The best conversations happen between people who've already done the work."
                </h3>
</div>

<div className="bg-[#1A2530] rounded-3xl p-6 lg:p-8 border border-[#899678]/12">
<form action="#" className="space-y-5">
<div>
<label className="block font-normal text-xs text-[#F5F2EE]/50 uppercase tracking-[0.08em] mb-2">Name</label>
<input className="w-full bg-transparent border-b border-[#899678]/25 py-2 font-['Lora'] text-base text-[#F5F2EE] placeholder:text-[#F5F2EE]/20 focus:outline-none focus:border-[#88653D] transition-colors rounded-none" placeholder="Your full name" type="text"/>
</div>
<div>
<label className="block font-normal text-xs text-[#F5F2EE]/50 uppercase tracking-[0.08em] mb-2">What You've Built</label>
<input className="w-full bg-transparent border-b border-[#899678]/25 py-2 font-['Lora'] text-base text-[#F5F2EE] placeholder:text-[#F5F2EE]/20 focus:outline-none focus:border-[#88653D] transition-colors rounded-none" placeholder="Company, industry, or achievement" type="text"/>
</div>
<div>
<label className="block font-normal text-xs text-[#F5F2EE]/50 uppercase tracking-[0.08em] mb-2">Your Outdoor Pursuit</label>
<input className="w-full bg-transparent border-b border-[#899678]/25 py-2 font-['Lora'] text-base text-[#F5F2EE] placeholder:text-[#F5F2EE]/20 focus:outline-none focus:border-[#88653D] transition-colors rounded-none" placeholder="Hunting, fishing, ranching, other..." type="text"/>
</div>
<div>
<label className="block font-normal text-xs text-[#F5F2EE]/50 uppercase tracking-[0.08em] mb-2">Why This Conversation</label>
<input className="w-full bg-transparent border-b border-[#899678]/25 py-2 font-['Lora'] text-base text-[#F5F2EE] placeholder:text-[#F5F2EE]/20 focus:outline-none focus:border-[#88653D] transition-colors rounded-none" placeholder="What would you bring to the show?" type="text"/>
</div>
<button className="w-full bg-[#88653D] text-[#F5F2EE] font-medium text-sm rounded-xl py-4 mt-7 transition-colors duration-200 hover:bg-[#C1623F]" type="submit">
                        Submit Your Hunt
                    </button>
</form>
</div>
</div>
</section>

<section className="bg-[#1A2530] py-16 lg:py-24 px-5 lg:px-8 flex flex-col items-center text-center">
<div className="max-w-[600px] w-full">
<h2 className="font-['Oswald'] font-semibold text-[#F5F2EE] text-4xl md:text-6xl uppercase tracking-[0.02em] leading-tight">
                SUCCESS IS EARNED.
            </h2>
<h2 className="font-['Oswald'] font-semibold text-[#899678] text-4xl md:text-6xl uppercase tracking-[0.02em] leading-tight">
                FREEDOM IS DESIGNED.
            </h2>
<p className="font-['Lora'] text-[#F5F2EE]/50 text-base md:text-lg mt-4">
                Drop every week. Miss one and you'll feel it.
            </p>
<div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 mt-10 w-full">
<a className="bg-[#F5F2EE] text-[#1E2420] rounded-full py-3.5 px-7 font-medium text-sm transition-colors duration-200 inline-flex items-center justify-center gap-2 hover:bg-[#88653D] hover:text-[#F5F2EE]" href="#">
<iconify-icon className="text-lg" icon="solar:music-note-linear"></iconify-icon>
                    Apple Podcasts
                </a>
<a className="bg-[#F5F2EE] text-[#1E2420] rounded-full py-3.5 px-7 font-medium text-sm transition-colors duration-200 inline-flex items-center justify-center gap-2 hover:bg-[#88653D] hover:text-[#F5F2EE]" href="#">
<iconify-icon className="text-lg" icon="solar:radio-minimalistic-linear"></iconify-icon>
                    Spotify
                </a>
<a className="bg-[#F5F2EE] text-[#1E2420] rounded-full py-3.5 px-7 font-medium text-sm transition-colors duration-200 inline-flex items-center justify-center gap-2 hover:bg-[#88653D] hover:text-[#F5F2EE]" href="#">
<iconify-icon className="text-lg" icon="solar:videocamera-linear"></iconify-icon>
                    YouTube
                </a>
</div>
</div>
</section>

<footer className="bg-[#1A2530] pb-10 px-5 lg:px-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="lg:col-span-2">
<span className="font-['Oswald'] font-semibold text-[#F5F2EE] text-base tracking-[0.15em] uppercase block">
                    THE HUNT FOR SUCCESS
                </span>
<p className="font-['Lora'] text-[#899678] text-sm mt-2">
                    Built by builders. For builders.
                </p>
<div className="flex gap-5 mt-6">
<a className="text-[#F5F2EE]/40 hover:text-[#F5F2EE]/90 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-[#F5F2EE]/40 hover:text-[#F5F2EE]/90 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:videocamera-linear"></iconify-icon>
</a>
<a className="text-[#F5F2EE]/40 hover:text-[#F5F2EE]/90 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:music-note-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<span className="font-['JetBrains_Mono'] text-xs text-[#899678] tracking-[0.2em] uppercase block mb-4">EXPLORE</span>
<div className="flex flex-col gap-2">
<a className="font-normal text-sm text-[#F5F2EE]/50 hover:text-[#F5F2EE]/90 transition-colors leading-[2.2]" href="#episodes">Episodes</a>
<a className="font-normal text-sm text-[#F5F2EE]/50 hover:text-[#F5F2EE]/90 transition-colors leading-[2.2]" href="#guests">Guests</a>
<a className="font-normal text-sm text-[#F5F2EE]/50 hover:text-[#F5F2EE]/90 transition-colors leading-[2.2]" href="#about">About</a>
<a className="font-normal text-sm text-[#F5F2EE]/50 hover:text-[#F5F2EE]/90 transition-colors leading-[2.2]" href="#apply">Apply</a>
</div>
</div>

<div>
<span className="font-['JetBrains_Mono'] text-xs text-[#899678] tracking-[0.2em] uppercase block mb-4">LISTEN ON</span>
<div className="flex flex-col gap-2">
<a className="font-normal text-sm text-[#F5F2EE]/50 hover:text-[#F5F2EE]/90 transition-colors leading-[2.2]" href="#">Apple Podcasts</a>
<a className="font-normal text-sm text-[#F5F2EE]/50 hover:text-[#F5F2EE]/90 transition-colors leading-[2.2]" href="#">Spotify</a>
<a className="font-normal text-sm text-[#F5F2EE]/50 hover:text-[#F5F2EE]/90 transition-colors leading-[2.2]" href="#">YouTube</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto h-[1px] w-full bg-[#899678]/10 my-10"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap">
<span className="font-normal text-xs text-[#F5F2EE]/25 text-center md:text-left">
                © 2025 The Hunt for Success. All rights reserved.
            </span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></div>
<span className="font-['JetBrains_Mono'] text-xs text-[#F5F2EE]/40 tracking-[0.12em] uppercase">
                    SIGNAL STRONG. SEASON OPEN.
                </span>
</div>
</div>
</footer>



    </>
  );
}
