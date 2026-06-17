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



tailwind.config = {
theme: {
extend: {
colors: {
monarch: {
black: '#0D0D0D',
orange: '#FF5E00',
gold: '#FFAA00',
dark: '#111111'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Rajdhani', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll('.count-up');
        const duration = 2000; // Animation duration in milliseconds (2 seconds)

        const startAnimation = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseFloat(counter.getAttribute('data-target'));
                    const isFloat = target % 1 !== 0; // Check if number has decimal
                    
                    let startTime = null;

                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        
                        // Calculate current value based on progress
                        const currentVal = progress * target;

                        // Formatting:
                        // 1. If it's a float (1.9), keep 1 decimal. 
                        // 2. If it's a large int (1020), add commas (1,020) & no decimals.
                        if (isFloat) {
                            counter.innerText = currentVal.toFixed(1);
                        } else {
                            counter.innerText = Math.floor(currentVal).toLocaleString();
                        }

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            // Ensure final value is exact
                            counter.innerText = isFloat ? target.toFixed(1) : target.toLocaleString();
                        }
                    };

                    window.requestAnimationFrame(step);
                    observer.unobserve(counter); // Only animate once
                }
            });
        };

        const observer = new IntersectionObserver(startAnimation, {
            threshold: 0.5 // Trigger when 50% of the element is visible
        });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    });



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="glass-panel border-b border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<img alt="Company Logo" className="w-auto h-10 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58c71d36-f967-474e-ad6a-c3fcfdf94d29_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="hover:text-white transition-colors text-lg text-orange-600" href="#">Models</a>
<a className="hover:text-white transition-colors text-lg text-orange-600" href="#">Technology</a>
<a className="hover:text-white transition-colors text-lg text-orange-600" href="#">Racing</a>
<a className="hover:text-white transition-colors text-lg text-orange-600" href="#">Ownership</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-monarch-orange border border-monarch-orange/30 px-6 py-2 rounded-full hover:bg-monarch-orange hover:text-white transition-all duration-300 group" href="#preorder">
<span className="font-medium tracking-wide">Pre-Order</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Monarch Supercar" className="w-full h-full object-cover opacity-80 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-monarch-black via-monarch-black/40 to-transparent"></div>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57af7313-5e6c-40c4-8c28-21f441322280_3840w.png?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 ease-in-out hover:scale-105">
</div>
</div>

<div className="z-10 bg-center w-full max-w-7xl mt-20 mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-3xl">
<div className="inline-flex gap-2 border-monarch-orange/30 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-monarch-orange animate-pulse"></span>
<span className="text-monarch-orange uppercase tracking-widest text-xs font-semibold">Limited Production Run 01</span>
</div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] uppercase text-glow text-6xl font-semibold text-white tracking-tight font-display mb-8">
<span className="animate-power">
        Ignite Your
    </span>
<span className="typewriter bg-clip-text text-transparent bg-gray-800">
    Reign
</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-light text-neutral-300 mb-10">
                    The apex of aerodynamic brutality and luxury. Built for those who don't just drive the road—they rule it.
                </p>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
<button className="uppercase hover:scale-105 transition-transform flex gap-3 font-semibold text-white tracking-wide bg-gradient-to-br from-[#ffb752] to-[#ff5900] rounded-sm pt-4 pr-8 pb-4 pl-8 shadow-[0_0_30px_-5px_rgba(255,94,0,0.5)] gap-x-3 gap-y-3 items-center">
                        Pre-Order Now
                        <svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="flex items-center gap-3 text-white group hover:text-monarch-orange transition-colors">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-monarch-orange/50 transition-colors">
<svg className="lucide lucide-play w-5 h-5 ml-1 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span className="text-lg font-medium tracking-wide">Watch The Film</span>
</button>
</div>
</div>
</div>

<div className="z-10 bg-gradient-to-t from-monarch-black to-transparent w-full h-32 absolute bottom-0 left-0"></div>
</section>

<div className="-mt-24 max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 relative">
<div className="glass-panel md:p-12 grid grid-cols-1 md:grid-cols-3 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 pt-8 pr-8 pb-8 pl-8 gap-x-8 gap-y-8">
<div className="flex flex-col group text-center pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="text-neutral-400 mb-2 flex items-center gap-2">
<svg className="lucide lucide-timer w-5 h-5 text-monarch-orange" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span className="uppercase tracking-widest text-sm font-medium">0-60 MPH</span>
</div>
<div className="md:text-6xl group-hover:text-monarch-orange transition-colors text-5xl font-semibold text-white font-display">
<span className="count-up" data-target="1.9">0</span><span className="text-3xl">s</span>
</div>
</div>
<div className="flex flex-col items-center justify-center text-center p-4 group">
<div className="text-neutral-400 mb-2 flex items-center gap-2">
<svg className="lucide lucide-zap w-5 h-5 text-monarch-orange" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="uppercase tracking-widest text-sm font-medium">Horsepower</span>
</div>
<div className="font-display font-semibold text-5xl md:text-6xl text-white group-hover:text-monarch-orange transition-colors">
<span className="count-up" data-target="1020">0</span><span className="text-3xl">hp</span>
</div>
</div>
<div className="flex flex-col items-center justify-center text-center p-4 group">
<div className="text-neutral-400 mb-2 flex items-center gap-2">
<svg className="lucide lucide-wind w-5 h-5 text-monarch-orange" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="uppercase tracking-widest text-sm font-medium">Top Speed</span>
</div>
<div className="font-display font-semibold text-5xl md:text-6xl text-white group-hover:text-monarch-orange transition-colors">
<span className="count-up" data-target="250">0</span><span className="text-3xl">mph</span>
</div>
</div>

</div>
</div>

<section className="overflow-hidden pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="">
<span className="text-monarch-orange font-display tracking-widest uppercase text-lg mb-4 block">Philosophy</span>
<h2 className="font-display font-semibold text-5xl md:text-6xl text-white tracking-tight leading-none mb-8">
                        Rule the <span className="text-transparent bg-clip-text bg-gradient-to-r from-monarch-orange to-yellow-500">Rush.</span>
</h2>
<p className="text-xl text-neutral-300 leading-relaxed mb-8 font-light">
                        High-octane engineering meets unmistakable style. The Monarch isn't designed to compete; it's designed to dominate. Every curve serves an aerodynamic purpose, every stitch is placed by hand, and every start-up sounds like a warning shot.
                    </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
<svg className="lucide lucide-shield-check w-6 h-6 text-monarch-orange" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-1">Aerospace Grade Carbon</h3>
<p className="text-neutral-400 text-lg">Chassis sculpted from the same materials used in orbital spacecraft.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
<svg className="lucide lucide-cpu w-6 h-6 text-monarch-orange" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="">
<h3 className="text-white font-medium text-lg mb-1">Neural Handling</h3>
<p className="text-neutral-400 text-lg">AI-assisted suspension that reads the road 500 times per second.</p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="-inset-1 group-hover:opacity-50 transition duration-1000 bg-orange-600 opacity-25 mix-blend-normal rounded-lg absolute blur"></div>
<div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square">
<img alt="Racing Driver" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-center opacity-100 mix-blend-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db84e249-95ab-47b6-bf44-835cae3fa9c3_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 ease-in-out hover:scale-105">
</div>
<div className="absolute bottom-8 left-8">
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#080808] border-white/5 pt-24 pb-24">
<div className="flex max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 items-end justify-between">
<div className="">
<h2 className="font-display font-semibold text-4xl md:text-5xl text-white tracking-tight mb-2">Visual Dominance</h2>
<p className="text-neutral-400 text-lg">Swipe to explore the aggressive geometry.</p>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-monarch-orange hover:border-monarch-orange hover:text-white transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="w-full overflow-x-auto hide-scrollbar pb-12 px-6">
<div className="flex gap-6 min-w-max gap-x-6 gap-y-6 px-6" id="feature-container">
<div className="feature-card relative w-[85vw] md:w-[600px] aspect-[16/9] rounded-lg overflow-hidden group border border-white/10">
<img alt="Front Profile" className="transition-transform duration-700 group-hover:scale-110 bg-center w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/052c83ce-d408-435c-b8d3-1f58ed34ed40_1600w.jpg"/>
<div className="pointer-events-none bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/052c83ce-d408-435c-b8d3-1f58ed34ed40_1600w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0 mix-blend-overlay opacity-60"></div>
<div className="absolute bottom-6 left-6 z-10">
<h3 className="text-2xl font-display font-semibold text-white">Front Profile</h3>
<p className="text-monarch-orange text-sm uppercase tracking-widest">Predator Stance</p>
</div>
</div>
<div className="feature-card relative w-[85vw] md:w-[600px] aspect-[16/9] rounded-lg overflow-hidden group border border-white/10">
<img alt="Rear Profile" className="transition-transform duration-700 group-hover:scale-110 bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f78895e5-a171-4f37-b296-ea23b48a2e91_1600w.png"/>
<div className="pointer-events-none bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89439a59-e5af-4155-8cd1-252152929249_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0 mix-blend-overlay opacity-60"></div>
<div className="absolute bottom-6 left-6 z-10">
<h3 className="text-2xl font-display font-semibold text-white">Rear Architecture</h3>
<p className="text-monarch-orange text-sm uppercase tracking-widest">Hexagonal Exhaust</p>
</div>
</div>
<div className="feature-card relative w-[85vw] md:w-[600px] aspect-[16/9] rounded-lg overflow-hidden group border border-white/10">
<img alt="Side Profile" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ab9075a-2b74-4d04-9074-d7887996f378_1600w.jpg"/>
<div className="pointer-events-none bg-gradient-to-t from-black/90 to-transparent bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 z-10">
<h3 className="text-2xl font-display font-semibold text-white">Silhouette</h3>
<p className="text-monarch-orange text-sm uppercase tracking-widest">Wind-Tunnel Sculpted</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-fixed bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1552176625-e47ff529b595?q=80&amp'}}>
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4391bcb0-8ad4-4172-a9a7-15944e963e4b_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
<div className="md:col-start-2 glass-panel p-10 md:p-14 border-l-4 border-l-monarch-orange">
<h2 className="font-display font-semibold text-4xl md:text-5xl text-white tracking-tight mb-6">The Heart of the Beast</h2>
<div className="space-y-6">
<div className="">
<h4 className="text-white font-medium text-xl">Twin-Turbo V12 Hybrid</h4>
<p className="text-neutral-300 text-lg mt-2">Combining raw combustion emotion with instant electric torque vectoring for unparalleled exit speeds.</p>
</div>
<div className="h-px bg-white/10 w-full"></div>
<div className="">
<h4 className="text-white font-medium text-xl">Titanium Exhaust System</h4>
<p className="text-neutral-300 text-lg mt-2">Tuned to a specific frequency to resonate with the driver's biological rhythm. It doesn't just make noise; it sings.</p>
</div>
<div className="pt-4">
<a className="text-monarch-orange hover:text-white transition-colors flex items-center gap-2 font-medium tracking-wide" href="#">
                            View Full Technical Specs <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="preorder">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-monarch-orange/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-display font-semibold text-5xl md:text-7xl text-white tracking-tight mb-6 uppercase">Secure Your Legacy</h2>
<p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light">
                Allocations for the 2025 Monarch are strictly limited. Reserve your build slot today and define the future of performance.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-black px-10 py-4 rounded-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors">
                    Configure Yours
                </button>
<button className="border border-white/20 text-white px-10 py-4 rounded-sm font-semibold tracking-wide hover:border-monarch-orange hover:text-monarch-orange transition-colors">
                    Contact Specialist
                </button>
</div>
</div>
</section>

<footer className="bg-[#050505] border-white/5 border-t pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<img alt="Monarch Logo" className="w-auto h-8 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58c71d36-f967-474e-ad6a-c3fcfdf94d29_320w.png"/>
</a>
<p className="text-neutral-500 text-sm">
        Defining the absolute edge of automotive possibility.
    </p>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Models</h4>
<ul className="space-y-3 text-neutral-400 text-sm">
<li className=""><a className="hover:text-monarch-orange transition-colors" href="#">The Monarch GT</a></li>
<li className=""><a className="hover:text-monarch-orange transition-colors" href="#">Monarch Track Edition</a></li>
<li className=""><a className="hover:text-monarch-orange transition-colors" href="#">Concept Vision</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Brand</h4>
<ul className="text-sm text-neutral-400 space-y-3">
<li className=""><a className="hover:text-monarch-orange transition-colors" href="#">Philosophy</a></li>
<li className=""><a className="hover:text-monarch-orange transition-colors" href="#">Motorsport</a></li>
<li className=""><a className="hover:text-monarch-orange transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Newsletter</h4>
<form className="flex flex-col gap-3">
<input className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-monarch-orange transition-colors" placeholder="Enter your email" type="email"/>
<button className="hover:bg-monarch-orange transition-colors text-sm font-medium text-white bg-white/10 rounded-sm pt-2 pb-2" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row border-white/5 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs text-orange-600">© 2025 Monarch Automotive. Designed by Allen Dela Cruz. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-[20px] h-[20px] text-orange-600" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-[20px] h-[20px] text-orange-600" data-icon-replaced="true" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-[20px] h-[20px] text-orange-600" data-icon-replaced="true" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
