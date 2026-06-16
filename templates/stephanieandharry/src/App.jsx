import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Fade-in effects
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative h-screen w-full overflow-hidden flex flex-col justify-between items-center text-center py-8 z-10">

<div className="absolute inset-0 -z-10 bg-stone-900">
<img alt="Hong Kong Streets" className="w-full h-full object-cover opacity-70 animate-ken-burns" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/60"></div>
</div>

<div className="text-stone-200 text-xs tracking-[0.2em] uppercase font-medium mt-4 reveal active">
            Special Edition  |  Vol. 01
        </div>

<div className="flex flex-col items-center justify-center flex-grow w-full px-4">
<h1 className="text-stone-100 font-serif-text text-5xl md:text-8xl italic font-medium tracking-tight leading-tight mix-blend-overlay reveal delay-100">
                They Are Tying<br/>The Knot
            </h1>
</div>

<div className="flex flex-col items-center gap-6 mb-8 reveal delay-200">
<p className="text-stone-200 text-lg md:text-xl font-medium tracking-wide">
                Stephanie <span className="text-stone-400 font-serif-text italic mx-2">&amp;</span> Harry
            </p>
<a className="group flex flex-col items-center gap-2 cursor-pointer animate-soft-pulse" href="#editorial">
<div className="w-12 h-12 rounded-full border border-stone-400/50 flex items-center justify-center backdrop-blur-sm bg-white/10 transition-colors group-hover:bg-white/20">
<i className="text-stone-200 w-5 h-5" data-lucide="arrow-down"></i>
</div>
<span className="text-stone-400 text-xs tracking-widest uppercase">Tap to Open</span>
</a>
</div>
</section>

<section className="min-h-screen w-full px-4 py-16 md:px-12 md:py-24 flex flex-col md:flex-row gap-12 items-center bg-[#F5F4F0]" id="editorial">

<div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative reveal">
<div className="absolute top-4 left-4 right-4 bottom-4 border border-stone-800 z-10 pointer-events-none"></div>
<img alt="Paris Romance" className="w-full h-full object-cover grayscale brightness-110 contrast-125" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&amp;w=2673&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl z-20 hidden md:block">
<p className="font-serif-display text-2xl tracking-tight text-stone-900">Paris, Je t'aime</p>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8 md:pl-12 reveal delay-100">
<span className="inline-block border-b border-stone-900 pb-1 text-xs font-semibold tracking-widest uppercase text-stone-500">
                The Save Date
            </span>
<h2 className="font-serif-text text-5xl md:text-7xl leading-none tracking-tight text-stone-900">
                From the streets of Hong Kong to the romance of Paris.
            </h2>
<div className="flex gap-4">
<div className="w-px bg-stone-300 h-full min-h-[4rem]"></div>
<p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    We invite you to witness the next chapter of our story. An intimate gathering of love, laughter, and forever.
                </p>
</div>
<div className="space-y-1">
<p className="text-sm font-medium uppercase tracking-widest text-stone-500">Saturday</p>
<p className="font-serif-display text-7xl md:text-9xl text-stone-900 tracking-tighter">2026</p>
<div className="flex items-center gap-3">
<p className="text-2xl font-serif-text italic">August 1st</p>
</div>
</div>
<button className="flex items-center gap-3 px-6 py-3 bg-stone-900 text-[#F5F4F0] rounded-full hover:bg-stone-800 transition-all active:scale-95">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
<span className="text-sm font-medium tracking-wide">Add to Calendar</span>
</button>
</div>
</section>

<section className="py-24 px-6 bg-[#EBE9E4] relative">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-16 reveal">
<h3 className="font-serif-display text-4xl md:text-5xl text-stone-900 mb-2">Our Story</h3>
<p className="text-stone-500 italic font-serif-text">How it all began</p>
</div>
<div className="relative border-l border-stone-400 ml-4 md:ml-0 md:pl-0 space-y-16">

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center group reveal">
<div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] top-0 w-2.5 h-2.5 rounded-full bg-stone-900 ring-4 ring-[#EBE9E4]"></div>
<div className="md:text-right md:pr-4">
<span className="text-sm font-semibold tracking-widest text-stone-500 block mb-1">2018</span>
<h4 className="font-serif-text text-2xl text-stone-900">The First Hello</h4>
<p className="text-stone-600 mt-2 text-sm leading-relaxed">Coffee at a small shop in Sheung Wan. It rained, we talked for hours.</p>
</div>
<div className="mt-4 md:mt-0 opacity-80 group-hover:opacity-100 transition-opacity">
<img alt="Coffee" className="w-32 h-32 md:w-48 md:h-48 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center group reveal">
<div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] top-0 w-2.5 h-2.5 rounded-full bg-stone-900 ring-4 ring-[#EBE9E4]"></div>
<div className="order-2 md:pl-4">
<span className="text-sm font-semibold tracking-widest text-stone-500 block mb-1">2024</span>
<h4 className="font-serif-text text-2xl text-stone-900">The Yes</h4>
<p className="text-stone-600 mt-2 text-sm leading-relaxed">Under the Eiffel Tower lights, a promise was made.</p>
</div>
<div className="order-1 md:text-right mt-4 md:mt-0 opacity-80 group-hover:opacity-100 transition-opacity flex md:justify-end">
<img alt="Proposal" className="w-32 h-32 md:w-48 md:h-48 object-cover grayscale" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center group reveal">
<div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] top-0 w-2.5 h-2.5 rounded-full bg-stone-900 ring-4 ring-[#EBE9E4]"></div>
<div className="md:text-right md:pr-4">
<span className="text-sm font-semibold tracking-widest text-stone-500 block mb-1">2026</span>
<h4 className="font-serif-text text-3xl md:text-4xl italic text-stone-900">The "I Do"</h4>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-2 text-stone-400">
<i className="w-8 h-8" data-lucide="infinity"></i>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone-900 text-[#F5F4F0]">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

<div className="relative h-[50vh] md:h-auto overflow-hidden group">
<img alt="The Rosewood" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:text-stone-900 transition-all duration-300">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="uppercase tracking-widest text-xs font-semibold">Navigate Here</span>
</button>
</div>
</div>

<div className="flex flex-col justify-center p-12 md:p-24 space-y-12">
<div className="reveal">
<span className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-4 block">The Location</span>
<h2 className="font-serif-display text-5xl md:text-6xl mb-6">Rosewood<br/>Hong Kong</h2>
<p className="text-stone-400 font-light text-lg leading-relaxed">
                        Victoria Dockside,<br/>18 Salisbury Rd, Tsim Sha Tsui,<br/>Hong Kong
                    </p>
</div>
<div className="border-t border-stone-800 pt-8 reveal delay-100">
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-stone-800/50">
<img alt="Dress Code" className="w-6 h-6 invert opacity-80" src="https://cdn-icons-png.flaticon.com/512/1785/1785250.png"/>
</div>
<div>
<h4 className="text-lg font-serif-text italic mb-1">Dress Code</h4>
<p className="text-stone-400 text-sm font-medium tracking-wide uppercase">Black Tie Optional</p>
<p className="text-stone-500 text-xs mt-2 leading-relaxed">Gentlemen in tuxedos or dark suits.<br/>Ladies in floor-length gowns or cocktail dresses.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-4xl mx-auto bg-[#F5F4F0]">
<div className="text-center mb-16 reveal">
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-900">Order of Events</h2>
</div>
<div className="space-y-0 border-t border-stone-300">

<div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-stone-300 group hover:bg-stone-200/30 transition-colors px-4 reveal">
<div className="flex items-center gap-6">
<span className="font-serif-display text-3xl text-stone-900 w-24">17:00</span>
<div>
<h4 className="uppercase tracking-widest text-sm font-semibold text-stone-900">Ceremony</h4>
<p className="text-stone-500 text-xs mt-1">The Lawn</p>
</div>
</div>
<div className="mt-4 md:mt-0 text-stone-400 group-hover:text-stone-900 transition-colors">
<i className="w-6 h-6" data-lucide="gem"></i>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-stone-300 group hover:bg-stone-200/30 transition-colors px-4 reveal">
<div className="flex items-center gap-6">
<span className="font-serif-display text-3xl text-stone-900 w-24">19:00</span>
<div>
<h4 className="uppercase tracking-widest text-sm font-semibold text-stone-900">Cocktail Reception</h4>
<p className="text-stone-500 text-xs mt-1">Foyer</p>
</div>
</div>
<div className="mt-4 md:mt-0 text-stone-400 group-hover:text-stone-900 transition-colors">
<i className="w-6 h-6" data-lucide="wine"></i>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-stone-300 group hover:bg-stone-200/30 transition-colors px-4 reveal">
<div className="flex items-center gap-6">
<span className="font-serif-display text-3xl text-stone-900 w-24">20:00</span>
<div>
<h4 className="uppercase tracking-widest text-sm font-semibold text-stone-900">Banquet Dinner</h4>
<p className="text-stone-500 text-xs mt-1">Grand Ballroom</p>
</div>
</div>
<div className="mt-4 md:mt-0 text-stone-400 group-hover:text-stone-900 transition-colors">
<i className="w-6 h-6" data-lucide="utensils"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-stone-200 flex justify-center items-center">
<div className="w-full max-w-md bg-[#F5F4F0] rounded-3xl shadow-2xl overflow-hidden reveal">

<div className="bg-stone-900 p-6 flex justify-between items-center text-stone-100">
<span className="uppercase tracking-widest text-xs font-semibold">Love Airways</span>
<i className="w-5 h-5 rotate-45" data-lucide="plane"></i>
</div>

<div className="p-8 relative">
<div className="flex justify-between items-end mb-8">
<div>
<p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Passenger</p>
<p className="font-serif-text text-xl text-stone-900">Honored Guest</p>
</div>
<div className="text-right">
<p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Date</p>
<p className="font-serif-text text-xl text-stone-900">01 Aug 26</p>
</div>
</div>
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="font-serif-display text-4xl text-stone-900">HKG</h3>
<p className="text-[10px] text-stone-500 uppercase tracking-widest">Origin</p>
</div>
<div className="border-t-2 border-dashed border-stone-300 w-16 mx-4 relative top-[-8px]">
<i className="w-4 h-4 text-stone-900 absolute left-1/2 -top-[9px] -ml-2 fill-stone-900" data-lucide="heart"></i>
</div>
<div className="text-right">
<h3 className="font-serif-display text-4xl text-stone-900">PAR</h3>
<p className="text-[10px] text-stone-500 uppercase tracking-widest">Dest</p>
</div>
</div>

<div className="relative flex items-center justify-center my-8">
<div className="absolute -left-12 w-8 h-8 rounded-full bg-stone-200"></div>
<div className="w-full border-b-2 border-dashed border-stone-300"></div>
<div className="absolute -right-12 w-8 h-8 rounded-full bg-stone-200"></div>
</div>
<div className="text-center">
<p className="font-serif-text italic text-lg mb-6 text-stone-700">Are you ready to fly with us?</p>

<button className="w-full py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors flex justify-center items-center gap-2 group">
<span>Reserve Your Seat</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="text-[10px] text-stone-400 mt-3">Powered by Typeform</p>
</div>
</div>

<div className="bg-white p-4 border-t border-stone-100 flex justify-between items-center opacity-50">
<div className="h-8 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')] bg-cover bg-center grayscale"></div>
</div>
</div>
</section>

<section className="h-[50vh] bg-[#F5F4F0] flex flex-col justify-center items-center text-center px-4 relative">
<div className="reveal">
<h2 className="font-serif-text text-4xl md:text-6xl text-stone-900 italic mb-4">
                "I'll choose you,<br/>Always and Forever"
            </h2>
<p className="text-stone-500 text-sm tracking-widest uppercase mt-8">See you in 2026</p>
</div>
<div className="absolute bottom-12 flex items-center gap-3 bg-white pl-2 pr-4 py-2 rounded-full shadow-sm border border-stone-200 cursor-pointer hover:scale-105 transition-transform">
<div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
<div className="text-left">
<p className="text-[10px] uppercase font-bold text-stone-900">Now Playing</p>
<p className="text-[10px] text-stone-500 truncate max-w-[100px]">La Vie En Rose</p>
</div>
<div className="flex gap-0.5 items-end h-3 ml-2">
<div className="w-0.5 bg-stone-400 h-2 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-0.5 bg-stone-400 h-3 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-0.5 bg-stone-400 h-1 animate-[pulse_0.5s_ease-in-out_infinite]"></div>
</div>
</div>
</section>


    </>
  );
}
