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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: stop observing once animated
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-up, .fade-in').forEach((elem) => {
                observer.observe(elem);
            });
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
      

<nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-nav transition-all duration-300">
<a className="flex items-center gap-1 group" href="#">
<span className="font-display text-2xl md:text-3xl tracking-tighter">edit</span>
<div className="flex gap-[0.1rem] mt-1">
<div className="w-1.5 h-1.5 bg-[#C1232E] rounded-none"></div>
<div className="w-1.5 h-1.5 bg-[#C1232E] rounded-none"></div>
<div className="w-1.5 h-1.5 bg-[#C1232E] rounded-none"></div>
<div className="w-1.5 h-1.5 bg-[#C1232E] rounded-none"></div>
<div className="w-1.5 h-1.5 bg-[#C1232E] rounded-none"></div>
</div>
</a>
<div className="hidden md:flex gap-8">
<a className="font-display text-xs tracking-widest hover:text-[#C1232E] transition-colors duration-300" href="#prologue">The Story</a>
<a className="font-display text-xs tracking-widest hover:text-[#C1232E] transition-colors duration-300" href="#ethos">Our Ethos</a>
<a className="font-display text-xs tracking-widest hover:text-[#C1232E] transition-colors duration-300" href="#movement">Movement</a>
</div>
<button className="md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="prologue">
<div className="absolute inset-0 w-full h-full">

<img alt="Athlete training" className="w-full h-full object-cover object-center filter grayscale contrast-125 scale-105 transform origin-center animate-[pulse_20s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 solid-overlay z-10"></div>
<div className="vignette z-10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-20 w-full px-6 md:px-12 text-center flex flex-col items-center mt-16">
<span className="font-display text-[#C1232E] text-xs md:text-sm tracking-widest mb-6 fade-up">1.4 Billion Heartbeats. One Rhythm.</span>
<h1 className="font-display text-white text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-8 fade-up" style={{animationDelay: '100ms'}}>
                FORGED IN <br/><span className="text-transparent" style={{WebkitTextStroke: '1px white'}}>THE FIRE</span>
</h1>
<p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-12 fade-up" style={{animationDelay: '200ms'}}>
                We don't inherit perfect conditions. We build them from the dust of the maidans to the glare of the global stage. Indian athletics is a story of relentless, unapologetic effort.
            </p>
<div className="fade-up" style={{animationDelay: '300ms'}}>
<iconify-icon className="text-white/50 text-3xl animate-bounce" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
</div>
</header>

<section className="relative bg-white text-black" id="story">
<div className="flex flex-col lg:flex-row relative">

<div className="lg:w-1/2 lg:sticky top-0 h-[50vh] lg:h-screen overflow-hidden order-1 lg:order-none">
<img alt="Running on track" className="w-full h-full object-cover filter grayscale contrast-125" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=1500&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>

<div className="absolute top-0 left-0 w-2 h-full bg-[#C1232E]"></div>
</div>

<div className="lg:w-1/2 px-6 py-24 lg:px-20 lg:py-32 flex flex-col gap-32 order-2 lg:order-none z-10 bg-white">

<div className="fade-up">
<div className="flex items-center gap-4 mb-8">
<span className="text-[#C1232E] font-display text-xs tracking-widest">CHAPTER 01</span>
<div className="h-px bg-black/20 flex-1"></div>
</div>
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-8 leading-[1.1]">
                        BORN ON <br/>UNEVEN GROUND
                    </h2>
<p className="text-black/70 text-sm md:text-base leading-relaxed font-medium mb-6">
                        The Indian athlete's journey doesn't start in state-of-the-art facilities. It begins in the narrow gullies, on cracked asphalt, and in fields hardened by the sun. 
                    </p>
<p className="text-black/70 text-sm md:text-base leading-relaxed font-medium">
                        It's an environment that demands more than just talent—it demands absolute resilience. Here, effort isn't a choice; it's the only currency that matters.
                    </p>
</div>

<div className="fade-up">
<div className="flex items-center gap-4 mb-8">
<span className="text-[#C1232E] font-display text-xs tracking-widest">CHAPTER 02</span>
<div className="h-px bg-black/20 flex-1"></div>
</div>
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-8 leading-[1.1]">
                        THE ALCHEMY <br/>OF HUSTLE
                    </h2>
<p className="text-black/70 text-sm md:text-base leading-relaxed font-medium mb-6">
                        We possess a unique cultural DNA: the ability to make do, to push through, to find a way when there is none. But EDIT isn't about making do. It's about taking that raw, unyielding spirit and engineering it for greatness.
                    </p>
<p className="text-black/70 text-sm md:text-base leading-relaxed font-medium">
                        We design gear that honors your grind. Technical, durable, and crafted for the bodies that refuse to quit.
                    </p>
</div>

<div className="fade-up bg-black p-10 text-white relative overflow-hidden">
<iconify-icon className="absolute -right-4 -top-4 text-white/5 text-9xl" icon="solar:quote-right-linear"></iconify-icon>
<h3 className="font-display text-2xl md:text-3xl leading-snug mb-6 relative z-10">
                        "THE WORLD SEES THE MEDAL. WE SEE THE THOUSAND SILENT MORNINGS IN THE DUST."
                    </h3>
<div className="w-12 h-1 bg-[#C1232E]"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] text-white relative overflow-hidden" id="ethos">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 fade-up">
<div>
<div className="flex items-center gap-4 mb-6">
<span className="text-[#C1232E] font-display text-xs tracking-widest">CHAPTER 03</span>
<div className="w-12 h-px bg-[#C1232E]"></div>
</div>
<h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-none">
                        THE MECHANICS <br/>OF PROGRESS
                    </h2>
</div>
<p className="text-white/60 max-w-sm text-sm font-medium">
                    Five indigenous pillars that construct the foundation of the modern Indian athlete. 
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="border border-white/10 bg-black/50 p-8 hover:bg-[#C1232E] hover:border-[#C1232E] transition-all duration-500 group fade-up">
<span className="font-display text-white/20 text-4xl group-hover:text-white/40 transition-colors">01</span>
<h4 className="font-display text-xl mt-8 mb-4">Discipline</h4>
<p className="text-white/50 text-xs leading-relaxed group-hover:text-white/90 transition-colors font-medium">The architecture of success. Waking up before the city does.</p>
</div>

<div className="border border-white/10 bg-black/50 p-8 hover:bg-[#C1232E] hover:border-[#C1232E] transition-all duration-500 group fade-up" style={{animationDelay: '100ms'}}>
<span className="font-display text-white/20 text-4xl group-hover:text-white/40 transition-colors">02</span>
<h4 className="font-display text-xl mt-8 mb-4">Passion</h4>
<p className="text-white/50 text-xs leading-relaxed group-hover:text-white/90 transition-colors font-medium">The internal fire. Turning a societal hobby into an absolute obsession.</p>
</div>

<div className="border border-white/10 bg-black/50 p-8 hover:bg-[#C1232E] hover:border-[#C1232E] transition-all duration-500 group fade-up" style={{animationDelay: '200ms'}}>
<span className="font-display text-white/20 text-4xl group-hover:text-white/40 transition-colors">03</span>
<h4 className="font-display text-xl mt-8 mb-4">Focus</h4>
<p className="text-white/50 text-xs leading-relaxed group-hover:text-white/90 transition-colors font-medium">Tunnel vision. Eliminating the noise of doubt and lack of resources.</p>
</div>

<div className="border border-white/10 bg-black/50 p-8 hover:bg-[#C1232E] hover:border-[#C1232E] transition-all duration-500 group fade-up" style={{animationDelay: '300ms'}}>
<span className="font-display text-white/20 text-4xl group-hover:text-white/40 transition-colors">04</span>
<h4 className="font-display text-xl mt-8 mb-4">Vigour</h4>
<p className="text-white/50 text-xs leading-relaxed group-hover:text-white/90 transition-colors font-medium">Explosive, raw energy. Approaching every barrier with intent to break.</p>
</div>

<div className="border border-white/10 bg-black/50 p-8 hover:bg-[#C1232E] hover:border-[#C1232E] transition-all duration-500 group fade-up" style={{animationDelay: '400ms'}}>
<span className="font-display text-white/20 text-4xl group-hover:text-white/40 transition-colors">05</span>
<h4 className="font-display text-xl mt-8 mb-4">Respect</h4>
<p className="text-white/50 text-xs leading-relaxed group-hover:text-white/90 transition-colors font-medium">Honoring the soil, the opponent, and the sacrifices made to be here.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 text-white text-center overflow-hidden" id="movement">
<div className="absolute inset-0 w-full h-full">
<img alt="Team huddle" className="w-full h-full object-cover filter grayscale contrast-150" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-[#C1232E]/90 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/60"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 fade-up">
<span className="font-display text-white/80 text-xs tracking-widest mb-6 block">CHAPTER 04: THE UPRISING</span>
<h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 leading-none">
                THIS IS OUR <br/>TURF NOW
            </h2>
<p className="text-white/90 text-sm md:text-base max-w-xl mx-auto mb-10 font-medium">
                The narrative is shifting. Indian athletes are no longer the underdogs; we are the contenders. Equip yourself with gear engineered for the new era. Join the collective.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 font-display text-xs tracking-widest px-10 py-5 flex items-center justify-center gap-3 w-fit mx-auto sm:mx-0 rounded-none" href="#shop">
                    ARM YOURSELF
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="md:px-12 text-white bg-black border-[#1E1E1E] border-t pt-20 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 fade-up">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-1 mb-8" href="#">
<span className="font-display text-4xl tracking-tighter">edit</span>
<div className="flex gap-[0.1rem] mt-2">
<div className="w-2 h-2 bg-[#C1232E] rounded-none"></div>
<div className="w-2 h-2 bg-[#C1232E] rounded-none"></div>
<div className="w-2 h-2 bg-[#C1232E] rounded-none"></div>
<div className="w-2 h-2 bg-[#C1232E] rounded-none"></div>
<div className="w-2 h-2 bg-[#C1232E] rounded-none"></div>
</div>
</a>
<p className="text-white/50 text-xs md:text-sm max-w-sm mb-8 font-medium leading-relaxed">
                    Premium athletic wear engineered for the Indian grit. We demand more from ourselves. Effort Does It.
                </p>
<div className="flex gap-3">
<a className="w-10 h-10 border border-white/10 hover:border-[#C1232E] hover:bg-[#C1232E] transition-all duration-300 flex items-center justify-center" href="#">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 hover:border-[#C1232E] hover:bg-[#C1232E] transition-all duration-300 flex items-center justify-center" href="#">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-display text-sm tracking-widest mb-6 text-[#C1232E]">THE GEAR</h4>
<ul className="space-y-4 text-xs font-medium text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Men's Collection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Women's Collection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pro Equipment</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-sm tracking-widest mb-6 text-[#C1232E]">HQ</h4>
<ul className="space-y-4 text-xs font-medium text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Our Manifesto</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Support</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium fade-up">
<p>© 2024 EDIT Athletics India. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
