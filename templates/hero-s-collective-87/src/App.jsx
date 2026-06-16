import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-item').forEach(item => {
                observer.observe(item);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="min-h-screen flex flex-col bg-stone-950 pr-6 pl-6 relative items-center justify-center">
<div className="absolute inset-0 z-0 hero-bg bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89e698d0-41b6-4ffd-9aef-d505f0e043a7_3840w.jpg)] bg-cover opacity-70 pointer-events-none">
</div>
<div className="z-0 pointer-events-none bg-gradient-to-t from-black to-transparent w-full h-3/4 absolute bottom-0 left-0">
</div>
<div className="flex reveal-item is-visible md:top-8 z-20 w-full h-20 absolute top-8 left-0 justify-center">
<img alt="Hero's Collective Logo" className="h-16" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2430b552-f2c5-483e-a9ee-629ff40e323c_320w.png"/>
</div>
<div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center mt-12 md:mt-0">
<h1 className="uppercase reveal-item is-visible md:text-6xl lg:text-9xl text-4xl font-bold text-white mb-6">
            HERO'S COLLECTIVE!
        </h1>
<p className="text-sm md:text-base lowercase text-delay: 100ms;">
            a community for filipino men centered around purpose.
        </p>
</div>
<div className="flex animate-bounce reveal-item z-10 text-zinc-500 absolute bottom-12 justify-center" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-2xl" height="24" icon="solar:arrow-down-linear" strokeWidth="1.5" style={{color: 'rgb(113, 113, 122)'}} width="24"></iconify-icon>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto text-center">
<h2 className="md:text-4xl uppercase text-2xl font-semibold text-white tracking-tight mb-6 reveal-item">WE SEE YOUR DESIRE FOR PURPOSE!</h2>
<p className="text-sm md:text-base lowercase text-zinc-400 max-w-2xl mx-auto leading-relaxed reveal-item" style={{transitionDelay: '100ms'}}>
                and we’re here to make that journey more alive, purposeful, and connecting - as filipino men together.
            </p>

<div className="mt-16 aspect-video bg-[#050505] border border-zinc-800/80 rounded-2xl flex items-center justify-center relative overflow-hidden group glow-purple cursor-pointer transition-all duration-500 hover:border-[#3A07F8]/50 reveal-item" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#3A07F8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-colors duration-300">
<iconify-icon className="text-2xl text-white group-hover:text-black transition-colors duration-300 ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="mb-16 md:mb-24 text-center md:text-left max-w-2xl">
<h2 className="text-xl md:text-3xl font-semibold uppercase tracking-tight text-white mb-6 reveal-item">
            THE COMMUNITY: WHAT DOES IT ENTAIL!
        </h2>
<p className="text-sm lowercase text-zinc-400 leading-relaxed reveal-item" style={{transitionDelay: '100ms'}}>
            hero’s collective consists of multiple elements that collectively help filipino men pursue their purpose.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6">

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#19B75C]/50 hover:-translate-y-2 reveal-item bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{transitionDelay: '150ms'}}>
<svg className="lucide lucide-sprout mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(25, 183, 92)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 20h10"></path>
<path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
<path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z">
</path>
<path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
</svg>
<h3 className="uppercase text-sm font-semibold text-white mb-4">1. THE PLAYGROUND. </h3>
<p className="text-xs lowercase text-zinc-400 leading-relaxed mb-4">want to create what is truly in alignment with your purpose?
</p>
<p className="text-xs lowercase text-zinc-500 leading-relaxed mt-auto">
            join a purpose-creation incubator to help you bring forward what is meant to come through you.
        </p>
</div>

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#3A07F8]/50 hover:-translate-y-2 bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 reveal-item" style={{transitionDelay: '300ms'}}>
<svg className="lucide lucide-users mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(58, 7, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<h3 className="uppercase text-sm font-semibold text-white mb-4">2. THE CONNECTION!</h3>
<p className="text-xs lowercase text-zinc-400 leading-relaxed mb-4">
        feeling overwhelmed, stressed or not like yourself while pursuing your purpose?
    </p>
<p className="text-xs lowercase text-zinc-500 leading-relaxed mt-auto">
        join a men’s circle to receive support from your peers who face similar challenges.
    </p>
</div>

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#19B75C]/50 hover:-translate-y-2 bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 reveal-item" style={{transitionDelay: '450ms'}}>
<svg className="lucide lucide-bird mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(25, 183, 92)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h.01"></path>
<path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
<path d="m20 7 2 .5-2 .5"></path>
<path d="M10 18v3"></path>
<path d="M14 17.75V21"></path>
<path d="M7 18a6 6 0 0 0 3.84-10.61"></path>
</svg>
<h3 className="uppercase text-sm font-semibold text-white mb-4">3. THE FREEDOM!</h3>
<p className="text-xs lowercase text-zinc-400 leading-relaxed mb-4">
                feeling stuck after countless attempts to better yourself or create along your purpose?
            </p>
<p className="text-xs lowercase text-zinc-500 leading-relaxed mt-auto">
                join a systemic constellation workshop to help you return to inner peace and freedom.
            </p>
</div>

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#3A07F8]/50 hover:-translate-y-2 bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 reveal-item" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-globe mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(58, 7, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
</path>
</svg>
<h3 className="uppercase text-sm font-semibold text-white mb-4">4. THE COMMUNAL!</h3>
<p className="text-xs lowercase text-zinc-400 leading-relaxed mb-4">
    happy where you are and want to enjoy the company of others who feel, understand and know you?
</p>
<p className="text-xs lowercase text-zinc-500 leading-relaxed mt-auto">
                join an online open space to connect to others freely.
            </p>
</div>

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#19B75C]/50 hover:-translate-y-2 bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 reveal-item" style={{transitionDelay: '750ms'}}>
<svg className="lucide lucide-mountain mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(25, 183, 92)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
</svg>
<h3 className="uppercase text-sm font-semibold text-white mb-4">5. THE ENJOYMENT!</h3>
<p className="text-xs lowercase text-zinc-400 leading-relaxed mb-4">
                wanting a break from purpose?
            </p>
<p className="text-xs lowercase text-zinc-500 leading-relaxed mt-auto">
                join the enjoyment for hikes, international trips and other events for the purpose of joy - together.
            </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-[#000000] border-zinc-900/50 border-t pt-24 pr-6 pb-24 pl-6">
<div className="mr-auto ml-auto">
<div className="md:mb-24 text-center mb-16">
<h2 className="md:text-3xl uppercase reveal-item text-xl font-semibold text-white tracking-tight mb-6">
                THE JOURNEY: HOW DO I JOIN THE COLLECTIVE!
            </h2>
<p className="lowercase leading-relaxed text-sm text-zinc-400 reveal-item" style={{transitionDelay: '100ms'}}>
                we want you to be here with us.<br/>
                    yet, there is a journey everyone follows.
            </p>
</div>

<div className="flex flex-col gap-6 gap-x-6 gap-y-6">

<div className="md:py-20 flex flex-col md:flex-row md:gap-16 w-full max-w-7xl border-zinc-900 border-b mr-auto ml-auto pb-16 relative gap-x-8 gap-y-8 items-start justify-start">
<div className="md:top-20 bg-[#19B75C] w-1 h-24 rounded-r-full absolute top-16 left-0 shadow-[0_0_12px_rgba(25,183,92,0.6)]">
</div>
<div className="md:w-5/12 shrink-0 md:pl-8 reveal-item pl-8 gap-x-8 gap-y-8 justify-start">
<span className="uppercase block text-xs font-semibold text-[#19B75C] tracking-widest mb-3">STEP 1!</span>
<h3 className="md:text-4xl uppercase text-3xl font-semibold text-white tracking-tight mb-4">JOIN AN HC EVENT!</h3>
<p className="md:text-base lowercase leading-relaxed text-sm text-zinc-400">
            join one of our events &amp; explore what it is.
        </p>
</div>
</div>
<div className="flex flex-col md:flex-row md:gap-16 -mt-6 w-full mr-auto ml-auto pt-2 pb-8 relative gap-x-8 gap-y-8 justify-center">
<div className="md:px-0 overflow-hidden w-full max-w-7xl pr-6 pl-6 relative gap-x-8 gap-y-8">
<div className="flex md:pr-0 reveal-item mb-8 pr-6 items-center justify-between">
<h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500">LATEST ENTRIES</h4>
<div className="flex items-center gap-2">
<button aria-label="Previous" className="w-8 h-8 rounded-full border border-zinc-800 bg-[#050505] flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-left" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next" className="w-8 h-8 rounded-full border border-zinc-800 bg-[#050505] flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m13 19 7-7-7-7"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:pr-0 w-full pr-0 pb-12 pl-0 gap-x-6 gap-y-6" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="snap-start shrink-0 w-[85vw] sm:w-[400px] bg-[#050505] rounded-2xl flex flex-col relative border border-zinc-800/80 overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:border-zinc-700 group reveal-item">
<div className="w-full h-48 sm:h-56 overflow-hidden border-b border-zinc-800/80 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="Holding our reputation" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<div className="sm:p-8 flex flex-col flex-grow z-10 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex text-[12px] uppercase text-base text-zinc-500 tracking-widest font-sans border-zinc-800/80 border-b mb-6 pt-0 pb-6 items-end justify-between">
<div className="">
<span className="block text-zinc-300 mb-1">april 15th – wednesday</span>
<span className="block">time: 6:30–9:00 pm</span>
</div>
<span className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded">online</span>
</div><h4 className="md:text-xl leading-[1.15] uppercase text-lg font-semibold text-white mb-6">
        HOLDING OUR REPUTATION.<br/>THE COST OF CONSTANT PURSUIT.
    </h4>
<div "="" className="leading-[1.8] flex-grow font to you.&lt;/p&gt; &lt;p class= text-sm text-zinc-400 tracking-wide space-y-4">yet, a quiet stillness follows your achievement.<br/>a feeling of it not being enough.<p></p>
<p className="">you decide to move on &amp; chase the next.</p>
<p className="">sounds familiar?<br/>what if there's pain waiting to be explored?</p>
</div>
<button className="text-[10px] uppercase hover:bg-zinc-200 transition-colors duration-300 text-base font-semibold text-black tracking-widest bg-white w-full rounded mt-6 py-3">
        FIND OUT MORE
    </button>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[400px] bg-[#050505] rounded-2xl flex flex-col relative border border-zinc-800/80 overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:border-zinc-700 group reveal-item" style={{transitionDelay: '100ms'}}>
<div className="w-full h-48 sm:h-56 overflow-hidden border-b border-zinc-800/80 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="The hope for impact" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<div className="sm:p-8 flex flex-col flex-grow z-10 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex text-[10px] uppercase text-base text-zinc-500 tracking-widest font-sans border-zinc-800/80 border-b mb-6 pb-6 items-end justify-between">
<div className="">
<span className="block mb-1 text-zinc-300">may 13th – wednesday</span>
<span className="block">time: 6:30–9:00 pm</span>
</div>
<span className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded">online</span>
</div><h4 className="md:text-xl leading-[1.15] uppercase text-lg font-semibold text-white mb-6">
                        THE HOPE FOR IMPACT.<br/>A SILENT LONGING FOR PURPOSE.
                    </h4>
<div className="leading-[1.8] flex-grow lowercase text-sm text-zinc-400 tracking-wide font-sans space-y-4">
<p className="">the hope for meaning.<br/>wanting to be impactful.<br/>a constant desire to be of importance.</p>
<p className="">it's real.<br/>that desire is there &amp; it is to be proud of.</p>
<p className="">but what if there's something deeper within you calling?<br/>a pain that is hiding.</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[400px] bg-[#050505] rounded-2xl flex flex-col relative border border-zinc-800/80 overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:border-zinc-700 group reveal-item" style={{transitionDelay: '200ms'}}>
<div className="w-full h-48 sm:h-56 overflow-hidden border-b border-zinc-800/80 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="The constant state of improvement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<div className="sm:p-8 flex flex-col flex-grow z-10 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex text-[10px] uppercase text-base text-zinc-500 tracking-widest font-sans border-zinc-800/80 border-t mb-6 pb-6 items-end justify-between">
<div className="">
<span className="block mb-1 text-zinc-300">june 24th – wednesday</span>
<span className="block">time: 6:30–9:00 pm</span>
</div>
<span className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded">online</span>
</div><h4 className="md:text-xl leading-[1.15] uppercase text-lg font-semibold text-white mb-6">
                        THE CONSTANT STATE OF IMPROVEMENT.<br/>THE SUBTLE DESIRE TO BE BETTER EVERY DAY.
                    </h4>
<div className="text-sm text-zinc-400 leading-[1.8] tracking-wide space-y-4 flex-grow font-sans lowercase">
<p className="">taking extra classes.<br/>reading self-help books.<br/>optimizing routines.</p>
<p className="">all for us to be ‘better’ or more efficient.</p>
<p className="">what if there's a deeper pain in you hiding?<br/>something driving this constant need to improve.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:py-20 flex flex-col md:flex-row md:gap-16 w-full h-screen border-zinc-900 pt-16 pb-16 relative gap-x-8 gap-y-8 items-center justify-center">
<div className="md:top-20 text-[#19B75C] bg-[#19B75C] w-1 h-24 rounded-r-full absolute top-16 left-0 gap-x-8 gap-y-8"></div>
<div className="md:w-5/12 shrink-0 md:pl-8 pl-6 reveal-item">
<span className="uppercase block text-xs font-semibold text-[#19B75C] tracking-widest mb-3">STEP 2!</span>
<h3 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white mb-4">MEET WITH
            FOUNDER RYAN FOR AN INTAKE CONVERSATION!</h3>
<p className="md:text-base lowercase leading-relaxed text-sm text-zinc-400">
            discover whether the inner hero program and the collective truly aligns with your potential
            &amp; what you’re searching for in life.
        </p>
</div>
<div className="md:w-7/12 w-full pr-6 pl-6 md:px-0 reveal-item" style={{transitionDelay: '100ms'}}>
<div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-zinc-800/80 group">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="Intake Conversation" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
<div className="-translate-x-1/2 flex flex-col gap-2 animate-bounce hover:text-white transition-colors duration-300 cursor-pointer text-zinc-500 absolute bottom-8 left-1/2 gap-x-2 gap-y-2 items-center">
<span className="text-[10px] font-medium uppercase tracking-widest">scroll</span>
<svg className="lucide lucide-arrow-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div><div className="md:py-20 flex flex-col md:flex-row md:gap-16 w-full h-screen max-h-screen border-zinc-900 pt-16 pb-16 relative gap-x-8 gap-y-8 items-center">
<div className="md:top-20 bg-[#19B75C] w-1 h-24 rounded-r-full absolute top-16 left-0 gap-x-8 gap-y-8"></div>
<div className="md:w-5/12 shrink-0 pl-6 md:pl-8 reveal-item">
<span className="uppercase block text-xs font-semibold text-[#19B75C] tracking-widest mb-3">STEP 3!</span>
<h3 className="md:text-4xl uppercase text-3xl font-semibold text-white tracking-tight mb-4">JOIN THE INNER HERO PROGRAM.</h3>
<p className="md:text-base lowercase leading-relaxed text-sm text-zinc-400">an intensive 1.5 year program (including breaks) that help you return to your inner purpose and gifts with the company of 7 other Filipino Men on the same journey as you. </p>
</div>
<div className="md:w-7/12 w-full pr-6 pl-6 md:px-0 reveal-item" style={{transitionDelay: '100ms'}}>
<div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-zinc-800/80 group">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="Intake Conversation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
</div><div className="md:py-20 flex flex-col md:flex-row md:gap-16 w-full h-screen border-zinc-900 pt-16 pb-16 relative gap-x-8 gap-y-8 items-center">
<div className="md:top-20 bg-[#19B75C] w-1 h-24 rounded-r-full absolute top-16 left-0 gap-x-8 gap-y-8"></div>
<div className="md:w-5/12 shrink-0 pl-6 md:pl-8 reveal-item">
<span className="uppercase block text-xs font-semibold text-[#19B75C] tracking-widest mb-3">STEP 4!</span>
<h3 className="md:text-4xl uppercase text-3xl font-semibold text-white tracking-tight mb-4">CELEBRATE COMPLETION.</h3>
<p className="md:text-base lowercase leading-relaxed text-sm text-zinc-400">come together with existing and soon-to-be members of the collective to celebrate you joining the collective for life!</p>
</div>
<div className="md:w-7/12 w-full pr-6 pl-6 md:px-0 reveal-item" style={{transitionDelay: '100ms'}}>
<div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-zinc-800/80 group">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="Intake Conversation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
</div><div className="md:py-20 flex flex-col md:flex-row md:gap-16 w-full h-screen border-zinc-900 pt-16 pb-16 relative items-center">
<div className="md:top-20 bg-[#19B75C] w-1 h-24 rounded-r-full absolute top-16 left-0"></div>
<div className="md:w-5/12 shrink-0 md:pl-8 pl-6 reveal-item">
<span className="uppercase block text-xs font-semibold text-[#19B75C] tracking-widest mb-3">STEP 5!</span>
<h3 className="md:text-4xl uppercase text-3xl font-semibold text-white tracking-tight mb-4">BE WARMLY WELCOMED INTO THE
      COLLECTIVE. </h3>
<p className="md:text-base lowercase leading-relaxed text-sm text-zinc-400">a space you can always return to.
whatever you’re facing along your journey of purpose.
and beyond. 

the connection holds.
</p>
</div>
<div className="md:w-7/12 w-full pr-6 pl-6 md:px-0 reveal-item" style={{transitionDelay: '100ms'}}>
<div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-zinc-800/80 group">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none">
</div>
<img alt="Intake Conversation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
</div>

</div>
</div>
</section>

<footer className="py-24 border-t border-zinc-900 flex flex-col items-center justify-center px-6">
<a className="text-2xl font-semibold uppercase tracking-tighter text-white mb-8 hover:text-zinc-300 transition-colors reveal-item" href="#">
            HC!
        </a>
<div className="text-center mb-8 reveal-item" style={{transitionDelay: '100ms'}}>
<p className="text-sm lowercase text-zinc-500 mb-1">be welcomed, ready when you are.</p>
<p className="text-sm lowercase text-zinc-600">follow us on our socials.</p>
</div>
<div className="flex items-center gap-6 reveal-item" style={{transitionDelay: '200ms'}}>
<a className="text-zinc-500 hover:text-white transition-colors duration-300" href="https://www.youtube.com/@HEROs-COLLECTIVE" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors duration-300" href="https://www.tiktok.com/@heroscollective" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors duration-300" href="https://www.instagram.com/hero.s_collective/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</footer>



    </>
  );
}
