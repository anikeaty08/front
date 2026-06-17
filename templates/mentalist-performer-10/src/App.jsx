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
      

<nav className="fixed z-50 bg-zinc-950/70 w-full border-zinc-800/50 border-b top-0 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter text-zinc-100 uppercase font-geist font-semibold" href="#">
                FLORIAN DOLAR
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors font-geist" href="#experience">The Experience</a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors font-geist" href="#services">Concepts</a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors font-geist" href="#reviews">References</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-[#e5ba5a] text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d4a849] transition-all font-geist" href="#inquiry">
                Inquire Now
            </a>

<button className="md:hidden text-zinc-400">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="md:pt-52 md:pb-32 flex flex-col overflow-hidden text-center pt-40 pr-6 pb-24 pl-6 relative saturate-50 items-center">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2f4a42]/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-[#e5ba5a]"></span>
            Now booking for late 2024
        </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-zinc-50 tracking-tighter font-geist max-w-4xl">
            Not Just Magic. An Unforgettable <br className="hidden md:block"/> Psychological Experience.
        </h1>
<p className="md:text-xl leading-relaxed text-lg font-semibold text-zinc-400 font-geist max-w-2xl mt-8">
            Elevate your corporate events and exclusive weddings with high-end mentalism that engages, surprises, and creates profound connections.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#e5ba5a] text-zinc-950 text-sm font-medium hover:bg-[#d4a849] transition-all text-center font-geist" href="#inquiry">
                Check Availability
            </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-100 text-sm font-medium hover:bg-zinc-800 transition-all text-center font-geist" href="#services">
                Explore Concepts
            </a>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black relative aspect-video group">
<div className="absolute inset-0 bg-zinc-900 animate-pulse hidden"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full relative z-10" frameborder="0" src="https://www.youtube.com/embed/pgt7BTPzhjM?controls=0&amp;modestbranding=1&amp;rel=0" title="Florian Dolar Showreel"></iframe>
</div>
</header>

<section className="border-y bg-zinc-950/50 border-zinc-800/50 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium tracking-widest text-zinc-500 uppercase mb-8 font-geist">Trusted by Visionary Brands &amp; High-Profile Clients</p>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-50 grayscale">

<span className="text-xl tracking-tighter text-zinc-300 uppercase font-geist font-semibold">Aura</span>
<span className="text-xl tracking-tighter text-zinc-300 uppercase font-geist font-semibold">Nexus Group</span>
<span className="text-xl tracking-tighter text-zinc-300 uppercase font-geist font-semibold">Lumina</span>
<span className="text-xl tracking-tighter text-zinc-300 uppercase font-geist font-semibold">Equinox</span>
<span className="text-xl tracking-tighter text-zinc-300 uppercase font-geist font-semibold">Vanguard</span>
</div>
</div>
</section>

<section className="py-32 bg-[#2f4a42] relative overflow-hidden" id="experience">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#e5ba5a 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="grid md:grid-cols-2 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-[#e5ba5a] text-xs tracking-widest uppercase font-medium mb-4 font-geist">The Artist</h2>
<h3 className="md:text-5xl leading-tight text-3xl font-semibold text-zinc-50 tracking-tighter font-geist mb-6">
                    Redefining Entertainment for Discerning Audiences.
                </h3>
<p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed mb-8 font-geist">
                    I do not perform standard magic tricks. My focus is on the human mind—reading thoughts, predicting behavior, and creating moments that challenge reality. Whether on stage or up close, the experience is sophisticated, interactive, and completely tailored to your event.
                </p>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<div className="mt-0.5 w-6 h-6 rounded-full border border-[#e5ba5a]/30 flex items-center justify-center bg-[#e5ba5a]/10 shrink-0">
<iconify-icon className="text-[#e5ba5a] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-50 font-geist">Intelligent Interaction</h4>
<p className="text-xs text-zinc-300/80 mt-1 font-geist">Engaging the audience with respect, wit, and psychological depth.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 w-6 h-6 rounded-full border border-[#e5ba5a]/30 flex items-center justify-center bg-[#e5ba5a]/10 shrink-0">
<iconify-icon className="text-[#e5ba5a] text-sm" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-50 font-geist">Premium Positioning</h4>
<p className="text-xs text-zinc-300/80 mt-1 font-geist">Designed specifically for high-end corporate events and exclusive private parties.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 w-6 h-6 rounded-full border border-[#e5ba5a]/30 flex items-center justify-center bg-[#e5ba5a]/10 shrink-0">
<iconify-icon className="text-[#e5ba5a] text-sm" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-50 font-geist">Emotional Impact</h4>
<p className="text-xs text-zinc-300/80 mt-1 font-geist">Leaving a lasting impression that your guests will talk about for years.</p>
</div>
</li>
</ul>
</div>
<div className="relative">

<div className="aspect-[4/5] rounded-2xl bg-zinc-950/40 border border-zinc-800/30 overflow-hidden flex flex-col items-center justify-center relative backdrop-blur-sm group">
<div className="absolute inset-0 bg-gradient-to-tr from-[#09090b] to-transparent opacity-80"></div>
<iconify-icon className="text-4xl text-zinc-500/50 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500" icon="solar:camera-minimalistic-linear"></iconify-icon>
<span className="text-xs tracking-widest uppercase text-zinc-500/50 font-medium relative z-10 font-geist">Portrait Florian Dolar</span>

<div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#e5ba5a]/30 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e5ba5a] rounded-2xl -z-10 opacity-20 blur-xl"></div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-[#e5ba5a] text-xs tracking-widest uppercase font-medium mb-3 font-geist">Tailored Concepts</h2>
<h3 className="text-3xl md:text-4xl tracking-tighter text-zinc-50 font-geist font-semibold">Experiences Designed for Your Audience</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#2f4a42] transition-colors duration-300 overflow-hidden flex flex-col h-full">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#2f4a42]/10 rounded-bl-full -z-10 group-hover:bg-[#2f4a42]/20 transition-colors duration-300"></div>
<iconify-icon className="text-3xl text-[#e5ba5a] mb-6" icon="solar:buildings-linear"></iconify-icon>
<h4 className="text-xl tracking-tight text-zinc-100 mb-3 font-geist font-semibold">Corporate Events</h4>
<p className="text-sm font-light text-zinc-400 mb-8 flex-grow font-geist">
                        Transform galas, trade shows, and team events into memorable brand experiences. Sophisticated networking and intelligent entertainment that reflects your company's high standards.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:text-[#e5ba5a] transition-colors mt-auto font-geist" href="#inquiry">
                        Learn more <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#2f4a42] transition-colors duration-300 overflow-hidden flex flex-col h-full">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#2f4a42]/10 rounded-bl-full -z-10 group-hover:bg-[#2f4a42]/20 transition-colors duration-300"></div>
<iconify-icon className="text-3xl text-[#e5ba5a] mb-6" icon="solar:hearts-linear"></iconify-icon>
<h4 className="text-xl tracking-tight text-zinc-100 mb-3 font-geist font-semibold">Exclusive Weddings</h4>
<p className="text-sm font-light text-zinc-400 mb-8 flex-grow font-geist">
                        For modern couples seeking something beyond the ordinary. I connect your guests during the reception or dinner, creating elegant, romantic, and truly unexplainable moments.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:text-[#e5ba5a] transition-colors mt-auto font-geist" href="#inquiry">
                        Learn more <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#2f4a42] transition-colors duration-300 overflow-hidden flex flex-col h-full">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#2f4a42]/10 rounded-bl-full -z-10 group-hover:bg-[#2f4a42]/20 transition-colors duration-300"></div>
<iconify-icon className="text-3xl text-[#e5ba5a] mb-6" icon="solar:glass-wine-linear"></iconify-icon>
<h4 className="text-xl tracking-tight text-zinc-100 mb-3 font-geist font-semibold">Private Gatherings</h4>
<p className="text-sm font-light text-zinc-400 mb-8 flex-grow font-geist">
                        Intimate performances for exclusive parties and VIP events. An up-close psychological experience that makes your gathering the talk of the year.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:text-[#e5ba5a] transition-colors mt-auto font-geist" href="#inquiry">
                        Learn more <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-[#e5ba5a] text-xs tracking-widest uppercase font-medium mb-3 font-geist">Client Feedback</h2>
<h3 className="text-3xl tracking-tighter text-zinc-50 font-geist font-semibold">Words from the Audience</h3>
</div>
<div className="flex items-center gap-2">
<div className="flex text-[#e5ba5a]">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300 ml-2 font-geist">5.0 Based on Google Reviews</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80">
<div className="flex text-[#e5ba5a] mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-6 font-geist">
                        "Florian's performance at our annual corporate gala was nothing short of extraordinary. He didn't just perform; he engaged our executives in a way that left everyone speechless. Highly sophisticated."
                    </p>
<div>
<p className="text-sm font-medium text-zinc-100 tracking-tight font-geist">Alexander M.</p>
<p className="text-xs text-zinc-500 mt-0.5 font-geist">CEO, Tech Innovations</p>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80">
<div className="flex text-[#e5ba5a] mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-6 font-geist">
                        "We wanted something unique for our wedding, avoiding the typical cliché magic. Florian delivered a mysterious, elegant, and deeply personal experience. Our guests are still trying to figure it out."
                    </p>
<div>
<p className="text-sm font-medium text-zinc-100 tracking-tight font-geist">Sarah &amp; Julian</p>
<p className="text-xs text-zinc-500 mt-0.5 font-geist">Wedding Clients</p>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80">
<div className="flex text-[#e5ba5a] mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-6 font-geist">
                        "A masterclass in psychology and entertainment. Booking Florian elevated our entire brand launch event. He perfectly integrates the brand message into mind-bending moments."
                    </p>
<div>
<p className="text-sm font-medium text-zinc-100 tracking-tight font-geist">Marcus V.</p>
<p className="text-xs text-zinc-500 mt-0.5 font-geist">Event Director</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="inquiry">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-[#2f4a42]/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl tracking-tighter text-zinc-50 mb-4 font-geist font-semibold">Secure Your Date</h2>
<p className="text-zinc-400 font-light text-base font-geist">Please provide details about your event to check availability and receive a customized proposal.</p>
</div>
<form className="space-y-6 bg-zinc-900/50 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-zinc-800 shadow-2xl">
<div className="grid md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider font-geist">Full Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#e5ba5a] focus:ring-1 focus:ring-[#e5ba5a] transition-all" placeholder="John Doe" type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider font-geist">Email Address</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#e5ba5a] focus:ring-1 focus:ring-[#e5ba5a] transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="space-y-2 relative">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider font-geist">Event Type</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-[#e5ba5a] focus:ring-1 focus:ring-[#e5ba5a] transition-all cursor-pointer">
<option className="text-zinc-600 font-geist" disabled="" selected="" value="">Select event type...</option>
<option className="font-geist" value="corporate">Corporate Event / Trade Show</option>
<option className="font-geist" value="wedding">Exclusive Wedding</option>
<option className="font-geist" value="private">Private Gathering</option>
<option className="font-geist" value="other">Other</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider font-geist">Estimated Date</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-[#e5ba5a] focus:ring-1 focus:ring-[#e5ba5a] transition-all [color-scheme:dark]" type="date"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider font-geist">Additional Details</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#e5ba5a] focus:ring-1 focus:ring-[#e5ba5a] transition-all resize-none" placeholder="Tell me about your vision, venue, and estimated number of guests..." rows="4"></textarea>
</div>
<button className="w-full bg-[#e5ba5a] text-zinc-950 font-medium text-sm py-4 rounded-lg hover:bg-[#d4a849] transition-all flex items-center justify-center gap-2 font-geist" type="submit">
                    Request Proposal <iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-500 mt-4 font-geist">Responses typically within 24 hours.</p>
</form>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
<div className="text-center md:text-left">
<a className="text-xl tracking-tighter text-zinc-100 uppercase block mb-2 font-geist font-semibold" href="#">
                        FLORIAN DOLAR
                    </a>
<p className="text-xs text-zinc-500 font-light font-geist">Mentalist &amp; Psychological Entertainer</p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#e5ba5a] hover:border-[#e5ba5a] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#e5ba5a] hover:border-[#e5ba5a] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#e5ba5a] hover:border-[#e5ba5a] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-900">
<p className="text-xs text-zinc-600 font-light font-geist">© 2024 Florian Dolar. All rights reserved.</p>
<div className="flex gap-4 text-xs text-zinc-600 font-light">
<a className="hover:text-zinc-300 transition-colors font-geist" href="#">Imprint</a>
<a className="hover:text-zinc-300 transition-colors font-geist" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
