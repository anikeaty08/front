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



                function openGalleryModal(src) {
                    const modal = document.getElementById('gallery-modal');
                    const content = document.getElementById('gallery-modal-content');
                    const img = document.getElementById('modal-img');
                    img.src = src.replace('w=600', 'w=1600').replace('q=80', 'q=95');
                    modal.classList.remove('hidden');
                    requestAnimationFrame(() => {
                        modal.classList.remove('opacity-0');
                        content.classList.remove('scale-95');
                        content.classList.add('scale-100');
                    });
                    document.body.style.overflow = 'hidden';
                }

                function closeGalleryModal(e, force) {
                    if (force || e.target.id === 'gallery-modal') {
                        const modal = document.getElementById('gallery-modal');
                        const content = document.getElementById('gallery-modal-content');
                        modal.classList.add('opacity-0');
                        content.classList.remove('scale-100');
                        content.classList.add('scale-95');
                        setTimeout(() => {
                            modal.classList.add('hidden');
                            document.body.style.overflow = '';
                        }, 300);
                    }
                }
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') closeGalleryModal(null, true);
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
      

<nav className="fixed z-50 bg-[#050505]/90 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#E1120F] rounded flex items-center justify-center font-bold text-black italic tracking-tighter shadow-[0_0_15px_rgba(225,18,15,0.4)]">
            TC
        </div>
<span className="font-bold tracking-tight text-white text-sm">TCKICKZ <span className="text-[#E1120F]">REMIX</span></span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-neutral-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#works">The Works</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden sm:flex uppercase hover:bg-neutral-200 transition-colors text-xs font-bold text-black tracking-wide bg-white rounded pt-2 pr-5 pb-2 pl-5" href="https://buy.stripe.com/fZu5kC47N5OI5nLdTi7ok02">
        Reserve Slot
    </a>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-60 contrast-125 blur-[5px] scale-105" loop="" muted="" playsinline="" poster="https://assets.mixkit.co/videos/preview/mixkit-night-city-life-432-large.jpg">
<source src="https://assets.mixkit.co/videos/preview/mixkit-night-city-life-432-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-[#1a0000]/40 mix-blend-multiply"></div>
<div className="bg-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="hero-glow-core"></div>

<div className="sparkle-container" id="sparkle-system"><div className="sparkle" style={{left: '12.6233%', animationDuration: '2.95797s', animationDelay: '0.505231s'}}></div><div className="sparkle" style={{left: '11.2446%', animationDuration: '2.12617s', animationDelay: '1.92198s'}}></div><div className="sparkle" style={{left: '31.8684%', animationDuration: '2.16918s', animationDelay: '1.23257s'}}></div><div className="sparkle" style={{left: '0.236482%', animationDuration: '4.07671s', animationDelay: '1.37188s'}}></div><div className="sparkle" style={{left: '21.8347%', animationDuration: '4.75695s', animationDelay: '1.9133s'}}></div><div className="sparkle" style={{left: '80.9103%', animationDuration: '3.56901s', animationDelay: '1.59147s'}}></div><div className="sparkle" style={{left: '5.52582%', animationDuration: '3.58076s', animationDelay: '1.87609s'}}></div><div className="sparkle" style={{left: '42.5364%', animationDuration: '4.11723s', animationDelay: '0.496055s'}}></div><div className="sparkle" style={{left: '9.55851%', animationDuration: '3.02708s', animationDelay: '0.754413s'}}></div><div className="sparkle" style={{left: '13.9507%', animationDuration: '2.39865s', animationDelay: '1.4137s'}}></div><div className="sparkle" style={{left: '19.9743%', animationDuration: '4.99183s', animationDelay: '1.28194s'}}></div><div className="sparkle" style={{left: '15.7757%', animationDuration: '4.70974s', animationDelay: '1.50978s'}}></div><div className="sparkle" style={{left: '96.3641%', animationDuration: '3.18477s', animationDelay: '0.105414s'}}></div><div className="sparkle" style={{left: '26.8812%', animationDuration: '3.6673s', animationDelay: '1.04536s'}}></div><div className="sparkle" style={{left: '94.7921%', animationDuration: '3.97007s', animationDelay: '1.54402s'}}></div><div className="sparkle" style={{left: '21.6327%', animationDuration: '2.60117s', animationDelay: '0.784146s'}}></div><div className="sparkle" style={{left: '29.3845%', animationDuration: '2.23511s', animationDelay: '1.42858s'}}></div><div className="sparkle" style={{left: '7.38691%', animationDuration: '4.42655s', animationDelay: '0.835111s'}}></div><div className="sparkle" style={{left: '18.9359%', animationDuration: '3.23138s', animationDelay: '1.22281s'}}></div><div className="sparkle" style={{left: '71.7154%', animationDuration: '2.78097s', animationDelay: '1.81093s'}}></div><div className="sparkle" style={{left: '11.1426%', animationDuration: '2.45959s', animationDelay: '1.06253s'}}></div><div className="sparkle" style={{left: '16.0141%', animationDuration: '2.4811s', animationDelay: '0.737513s'}}></div><div className="sparkle" style={{left: '17.5547%', animationDuration: '3.61518s', animationDelay: '0.434808s'}}></div><div className="sparkle" style={{left: '24.8325%', animationDuration: '2.77925s', animationDelay: '0.959008s'}}></div><div className="sparkle" style={{left: '95.7926%', animationDuration: '3.52592s', animationDelay: '0.852459s'}}></div><div className="sparkle" style={{left: '22.2776%', animationDuration: '3.15441s', animationDelay: '1.84461s'}}></div><div className="sparkle" style={{left: '38.6235%', animationDuration: '4.20201s', animationDelay: '0.791692s'}}></div><div className="sparkle" style={{left: '3.8515%', animationDuration: '2.21688s', animationDelay: '0.936859s'}}></div><div className="sparkle" style={{left: '43.4615%', animationDuration: '4.16279s', animationDelay: '0.509102s'}}></div><div className="sparkle" style={{left: '71.3152%', animationDuration: '2.48959s', animationDelay: '1.97183s'}}></div><div className="sparkle" style={{left: '87.787%', animationDuration: '4.90859s', animationDelay: '0.503285s'}}></div><div className="sparkle" style={{left: '81.6399%', animationDuration: '4.21341s', animationDelay: '0.417493s'}}></div><div className="sparkle" style={{left: '99.0971%', animationDuration: '3.31338s', animationDelay: '1.30206s'}}></div><div className="sparkle" style={{left: '46.7938%', animationDuration: '3.81488s', animationDelay: '1.51694s'}}></div><div className="sparkle" style={{left: '81.5823%', animationDuration: '3.01011s', animationDelay: '1.8601s'}}></div><div className="sparkle" style={{left: '97.6888%', animationDuration: '3.30939s', animationDelay: '0.74415s'}}></div><div className="sparkle" style={{left: '98.7952%', animationDuration: '3.25145s', animationDelay: '1.39629s'}}></div><div className="sparkle" style={{left: '72.641%', animationDuration: '3.07087s', animationDelay: '0.000690433s'}}></div><div className="sparkle" style={{left: '69.8039%', animationDuration: '2.03173s', animationDelay: '1.52411s'}}></div><div className="sparkle" style={{left: '21.6767%', animationDuration: '2.48188s', animationDelay: '0.0333107s'}}></div><div className="sparkle" style={{left: '29.0689%', animationDuration: '2.46595s', animationDelay: '1.43646s'}}></div><div className="sparkle" style={{left: '16.4352%', animationDuration: '4.03633s', animationDelay: '1.91337s'}}></div><div className="sparkle" style={{left: '39.1849%', animationDuration: '4.72126s', animationDelay: '1.32708s'}}></div><div className="sparkle" style={{left: '45.5008%', animationDuration: '2.87666s', animationDelay: '0.721498s'}}></div><div className="sparkle" style={{left: '65.9156%', animationDuration: '2.45597s', animationDelay: '1.19433s'}}></div><div className="sparkle" style={{left: '98.0324%', animationDuration: '2.50145s', animationDelay: '1.44508s'}}></div><div className="sparkle" style={{left: '43.0643%', animationDuration: '4.63421s', animationDelay: '0.0111448s'}}></div><div className="sparkle" style={{left: '95.0204%', animationDuration: '4.69531s', animationDelay: '1.06739s'}}></div><div className="sparkle" style={{left: '71.873%', animationDuration: '2.382s', animationDelay: '0.740344s'}}></div><div className="sparkle" style={{left: '86.9257%', animationDuration: '3.50437s', animationDelay: '1.25554s'}}></div><div className="sparkle" style={{left: '67.4908%', animationDuration: '4.70233s', animationDelay: '0.863002s'}}></div><div className="sparkle" style={{left: '82.4963%', animationDuration: '3.22409s', animationDelay: '1.82351s'}}></div><div className="sparkle" style={{left: '86.1469%', animationDuration: '3.13017s', animationDelay: '0.861607s'}}></div><div className="sparkle" style={{left: '77.4605%', animationDuration: '4.69048s', animationDelay: '1.13689s'}}></div><div className="sparkle" style={{left: '85.3733%', animationDuration: '2.29014s', animationDelay: '0.557803s'}}></div><div className="sparkle" style={{left: '89.3309%', animationDuration: '4.90548s', animationDelay: '1.08973s'}}></div><div className="sparkle" style={{left: '12.7641%', animationDuration: '3.10145s', animationDelay: '0.242745s'}}></div><div className="sparkle" style={{left: '14.7951%', animationDuration: '2.27774s', animationDelay: '0.0443927s'}}></div><div className="sparkle" style={{left: '75.856%', animationDuration: '3.98984s', animationDelay: '0.591774s'}}></div><div className="sparkle" style={{left: '43.3055%', animationDuration: '4.93353s', animationDelay: '1.66169s'}}></div><div className="sparkle" style={{left: '17.4375%', animationDuration: '4.78514s', animationDelay: '0.844528s'}}></div><div className="sparkle" style={{left: '55.6432%', animationDuration: '2.81384s', animationDelay: '1.13364s'}}></div><div className="sparkle" style={{left: '90.7657%', animationDuration: '2.37018s', animationDelay: '1.74293s'}}></div><div className="sparkle" style={{left: '42.9447%', animationDuration: '4.38031s', animationDelay: '1.19772s'}}></div><div className="sparkle" style={{left: '92.9447%', animationDuration: '2.05974s', animationDelay: '1.62565s'}}></div><div className="sparkle" style={{left: '49.2103%', animationDuration: '4.48774s', animationDelay: '0.559818s'}}></div><div className="sparkle" style={{left: '23.4459%', animationDuration: '3.97833s', animationDelay: '1.79414s'}}></div><div className="sparkle" style={{left: '42.0755%', animationDuration: '3.95375s', animationDelay: '0.797968s'}}></div><div className="sparkle" style={{left: '21.8548%', animationDuration: '2.93917s', animationDelay: '1.63068s'}}></div><div className="sparkle" style={{left: '94.7439%', animationDuration: '3.4678s', animationDelay: '0.36253s'}}></div><div className="sparkle" style={{left: '33.9545%', animationDuration: '3.27353s', animationDelay: '1.58824s'}}></div><div className="sparkle" style={{left: '69.6348%', animationDuration: '3.39963s', animationDelay: '1.88497s'}}></div><div className="sparkle" style={{left: '80.7479%', animationDuration: '3.59659s', animationDelay: '0.648357s'}}></div><div className="sparkle" style={{left: '0.86293%', animationDuration: '4.84438s', animationDelay: '0.876012s'}}></div><div className="sparkle" style={{left: '65.1241%', animationDuration: '4.11133s', animationDelay: '1.76886s'}}></div><div className="sparkle" style={{left: '34.1642%', animationDuration: '2.70504s', animationDelay: '0.590775s'}}></div><div className="sparkle" style={{left: '2.10729%', animationDuration: '3.48773s', animationDelay: '1.95569s'}}></div><div className="sparkle" style={{left: '36.1042%', animationDuration: '2.75509s', animationDelay: '0.926665s'}}></div><div className="sparkle" style={{left: '34.7682%', animationDuration: '2.39388s', animationDelay: '0.249907s'}}></div><div className="sparkle" style={{left: '79.4903%', animationDuration: '3.59718s', animationDelay: '1.53838s'}}></div></div>

<div className="hero-patent-beam"></div>

<div className="hero-fog-red"></div>

<div className="grid lg:grid-cols-2 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="z-20 relative space-y-8">
<div className="inline-flex items-center gap-2 border border-[#E1120F]/30 bg-[#E1120F]/10 px-3 py-1 rounded-full backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1120F] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#E1120F]"></span>
</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#E1120F]">Campaign Live: Atlanta</span>
</div>
<h1 className="lg:text-7xl leading-[0.95] text-5xl font-bold text-white tracking-tighter">
            BRING YOUR <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1120F] to-[#ff4d4a]">GRAILS</span> BACK
            <br/>
                    TO LIFE.
        </h1>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-md">
            The <span className="text-white font-medium">REVIVAL</span> campaign is here. Lock in "The Works" restoration
            for a <span className="text-white font-medium">$75 reservation</span>. We handle the rest.
        </p>

<div className="bg-white/5 max-w-md border-white/10 border rounded-lg pt-5 pr-5 pb-5 pl-5 backdrop-blur-sm">
<div className="flex justify-between items-center mb-2">
<span className="uppercase text-xs text-white tracking-widest">Daily Capacity</span>
<span className="animate-pulse text-xs font-semibold text-white">ONLY 10 SLOTS / DAY</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#E1120F] h-full w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between items-start mt-1.5 gap-2">
<p className="text-[10px] font-medium text-[#E44D4D]/60 text-left">Full Payment Orders Receive Priority
                    Cleaning</p>
<p className="text-[10px] shrink-0 text-white text-right">Slots Only Available Jan 12th- Jan. 31st</p>
</div>
</div><div className="w-full max-w-md mt-6">
<a className="group flex items-center justify-center overflow-hidden uppercase transition-all duration-300 hover:bg-[#c40f0c] hover:shadow-[0_0_50px_rgba(225,18,15,0.6)] hover:-translate-y-0.5 active:scale-[0.98] text-sm font-semibold text-white tracking-widest bg-[#E1120F] w-full rounded-lg pt-4 pr-6 pb-4 pl-6 relative shadow-[0_0_30px_rgba(225,18,15,0.4)]" href="https://buy.stripe.com/3cI8wO8o33GAcQd4iI7ok06" rel="noopener noreferrer" target="_blank">

<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>

<span className="flex items-center gap-2 relative">
<svg className="lucide lucide-zap fill-white/20" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            Priority Restoration ($120)
        </span>
</a>

<div className="flex text-[10px] uppercase font-medium text-white/40 tracking-wider mt-2.5 gap-x-2 gap-y-2 items-center justify-center">Fastest Turnaround | Priority Cleaning | Limited Spots</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-start">

<div className="flex flex-col sm:w-auto w-full gap-x-3 gap-y-3">
<div className="flex flex-col w-full">
</div>
</div>

<a className="w-full sm:w-auto uppercase hover:bg-white/5 hover:border-white/40 transition-all text-sm font-medium text-white tracking-wide text-center border-white/20 border rounded pt-4 pr-8 pb-4 pl-8 mt-auto sm:mt-[52px]" href="#works">
                See What's Included
            </a>
</div>
<p className="flex items-center gap-2 text-xs font-medium text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
            Trusted by Atlanta's heavy hitters and collectors.
        </p>
</div>

<div className="relative hidden lg:block h-[600px] w-full z-10">

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative w-full aspect-square max-w-[500px]">
<div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]">
</div>
<div className="absolute inset-4 rounded-full border border-[#E1120F]/20 animate-[spin_15s_linear_infinite_reverse]">
</div>

<div className="absolute top-20 right-0 bg-black/80 backdrop-blur border border-white/10 px-4 py-2 rounded text-xs font-medium text-white shadow-xl z-20">
<span className="text-[#E1120F]">•</span> Deadstock Finish
                </div>
<div className="absolute bottom-20 left-0 bg-black/80 backdrop-blur border border-white/10 px-4 py-2 rounded text-xs font-medium text-white shadow-xl z-20">
<span className="text-[#E1120F]">•</span> 100% Hand Cleaned
                </div>
</div>
</div>
</div>
</div>
</header>

<section className="bg-[#0A0A0A] border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">WHY <span className="text-[#E1120F]">REVIVAL</span>?</h2>
<p className="text-neutral-400 max-w-2xl mx-auto font-light">
                    We don't scrub. We restore. This is a technical process designed for the shoes you can't replace.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-900/50 border border-white/5 p-8 rounded hover:border-[#E1120F]/50 transition-colors group patent-gloss">
<div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-[#E1120F] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Factory Fresh Finish</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Our techniques remove deep-set oxidation and grime that regular cleaning misses. We aim for that "just unboxed" look.
                    </p>
</div>


<div className="bg-neutral-900/50 border border-white/5 p-8 rounded hover:border-[#E1120F]/50 transition-colors group patent-gloss">
<div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-[#E1120F] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">All Grails Welcome</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        From Jordan 11 patent leather to Yeezy knits and designer runners. We know materials and we know how to treat them safely.
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] pt-24 pb-24 relative">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,18,15,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
<div className="sparkle-container opacity-30" id="gallery-sparkles"><div className="sparkle" style={{left: '69.1345%', animationDuration: '4.62782s', animationDelay: '0.9223s'}}></div><div className="sparkle" style={{left: '53.4013%', animationDuration: '2.47837s', animationDelay: '1.20387s'}}></div><div className="sparkle" style={{left: '19.7133%', animationDuration: '3.97086s', animationDelay: '1.97307s'}}></div><div className="sparkle" style={{left: '70.1917%', animationDuration: '4.25663s', animationDelay: '1.40179s'}}></div><div className="sparkle" style={{left: '19.4121%', animationDuration: '2.89482s', animationDelay: '1.92211s'}}></div><div className="sparkle" style={{left: '88.9725%', animationDuration: '3.98774s', animationDelay: '1.61983s'}}></div><div className="sparkle" style={{left: '92.3149%', animationDuration: '2.79486s', animationDelay: '1.91473s'}}></div><div className="sparkle" style={{left: '75.8658%', animationDuration: '3.47259s', animationDelay: '0.549743s'}}></div><div className="sparkle" style={{left: '83.078%', animationDuration: '2.72871s', animationDelay: '0.82055s'}}></div><div className="sparkle" style={{left: '48.4342%', animationDuration: '4.25187s', animationDelay: '0.871477s'}}></div><div className="sparkle" style={{left: '13.3297%', animationDuration: '2.24524s', animationDelay: '1.26253s'}}></div><div className="sparkle" style={{left: '55.3263%', animationDuration: '2.29943s', animationDelay: '0.285137s'}}></div><div className="sparkle" style={{left: '23.2147%', animationDuration: '2.45657s', animationDelay: '0.189141s'}}></div><div className="sparkle" style={{left: '8.52024%', animationDuration: '2.39392s', animationDelay: '0.794665s'}}></div><div className="sparkle" style={{left: '65.7639%', animationDuration: '2.6913s', animationDelay: '1.81909s'}}></div><div className="sparkle" style={{left: '29.9439%', animationDuration: '3.73391s', animationDelay: '0.897263s'}}></div><div className="sparkle" style={{left: '72.2116%', animationDuration: '4.72449s', animationDelay: '0.77532s'}}></div><div className="sparkle" style={{left: '9.02375%', animationDuration: '2.41001s', animationDelay: '1.09432s'}}></div><div className="sparkle" style={{left: '78.324%', animationDuration: '2.87863s', animationDelay: '0.445786s'}}></div><div className="sparkle" style={{left: '16.2893%', animationDuration: '3.28637s', animationDelay: '1.69326s'}}></div><div className="sparkle" style={{left: '35.584%', animationDuration: '4.30604s', animationDelay: '1.14965s'}}></div><div className="sparkle" style={{left: '62.7899%', animationDuration: '4.05878s', animationDelay: '1.89169s'}}></div><div className="sparkle" style={{left: '14.7442%', animationDuration: '3.99949s', animationDelay: '0.862822s'}}></div><div className="sparkle" style={{left: '15.1731%', animationDuration: '2.26182s', animationDelay: '1.45078s'}}></div><div className="sparkle" style={{left: '32.3459%', animationDuration: '3.8859s', animationDelay: '1.65582s'}}></div><div className="sparkle" style={{left: '82.4843%', animationDuration: '3.73661s', animationDelay: '0.605921s'}}></div><div className="sparkle" style={{left: '2.37479%', animationDuration: '2.30866s', animationDelay: '1.1018s'}}></div><div className="sparkle" style={{left: '19.2013%', animationDuration: '2.36189s', animationDelay: '0.565753s'}}></div><div className="sparkle" style={{left: '9.17424%', animationDuration: '3.97718s', animationDelay: '0.696739s'}}></div><div className="sparkle" style={{left: '40.553%', animationDuration: '4.27025s', animationDelay: '0.302527s'}}></div><div className="sparkle" style={{left: '85.229%', animationDuration: '4.8719s', animationDelay: '1.30479s'}}></div><div className="sparkle" style={{left: '55.6962%', animationDuration: '4.80438s', animationDelay: '0.410574s'}}></div><div className="sparkle" style={{left: '2.28995%', animationDuration: '2.83463s', animationDelay: '1.05122s'}}></div><div className="sparkle" style={{left: '22.9912%', animationDuration: '4.00456s', animationDelay: '1.70617s'}}></div><div className="sparkle" style={{left: '79.4618%', animationDuration: '2.37955s', animationDelay: '1.42369s'}}></div><div className="sparkle" style={{left: '73.2758%', animationDuration: '3.14445s', animationDelay: '1.00176s'}}></div><div className="sparkle" style={{left: '90.6173%', animationDuration: '4.97838s', animationDelay: '0.677359s'}}></div><div className="sparkle" style={{left: '85.4981%', animationDuration: '2.15534s', animationDelay: '1.04208s'}}></div><div className="sparkle" style={{left: '58.9881%', animationDuration: '3.95402s', animationDelay: '0.246172s'}}></div><div className="sparkle" style={{left: '17.5674%', animationDuration: '2.03117s', animationDelay: '0.702624s'}}></div><div className="sparkle" style={{left: '90.5734%', animationDuration: '2.14044s', animationDelay: '1.24816s'}}></div><div className="sparkle" style={{left: '77.1711%', animationDuration: '2.32366s', animationDelay: '0.946028s'}}></div><div className="sparkle" style={{left: '89.4077%', animationDuration: '2.68469s', animationDelay: '0.47334s'}}></div><div className="sparkle" style={{left: '81.4095%', animationDuration: '2.1619s', animationDelay: '0.314663s'}}></div><div className="sparkle" style={{left: '88.7657%', animationDuration: '2.15354s', animationDelay: '0.404274s'}}></div><div className="sparkle" style={{left: '90.603%', animationDuration: '4.93602s', animationDelay: '0.828416s'}}></div><div className="sparkle" style={{left: '54.5164%', animationDuration: '2.58594s', animationDelay: '1.56169s'}}></div><div className="sparkle" style={{left: '31.5827%', animationDuration: '2.11539s', animationDelay: '0.611143s'}}></div><div className="sparkle" style={{left: '77.5456%', animationDuration: '4.45939s', animationDelay: '1.00126s'}}></div><div className="sparkle" style={{left: '30.4566%', animationDuration: '2.02199s', animationDelay: '0.503103s'}}></div><div className="sparkle" style={{left: '89.6851%', animationDuration: '3.04675s', animationDelay: '1.36355s'}}></div><div className="sparkle" style={{left: '45.9925%', animationDuration: '4.15436s', animationDelay: '1.39987s'}}></div><div className="sparkle" style={{left: '38.682%', animationDuration: '4.94027s', animationDelay: '0.195912s'}}></div><div className="sparkle" style={{left: '12.3383%', animationDuration: '3.79143s', animationDelay: '1.33063s'}}></div><div className="sparkle" style={{left: '85.4757%', animationDuration: '2.40874s', animationDelay: '0.784985s'}}></div><div className="sparkle" style={{left: '94.4207%', animationDuration: '4.15176s', animationDelay: '1.71688s'}}></div><div className="sparkle" style={{left: '10.0274%', animationDuration: '4.46565s', animationDelay: '1.98703s'}}></div><div className="sparkle" style={{left: '93.9499%', animationDuration: '3.22485s', animationDelay: '0.115902s'}}></div><div className="sparkle" style={{left: '29.4761%', animationDuration: '4.99965s', animationDelay: '1.67359s'}}></div><div className="sparkle" style={{left: '7.21447%', animationDuration: '2.71052s', animationDelay: '0.89743s'}}></div><div className="sparkle" style={{left: '10.4657%', animationDuration: '3.98263s', animationDelay: '0.442465s'}}></div><div className="sparkle" style={{left: '51.0763%', animationDuration: '2.96567s', animationDelay: '0.266903s'}}></div><div className="sparkle" style={{left: '3.43637%', animationDuration: '2.57448s', animationDelay: '0.202355s'}}></div><div className="sparkle" style={{left: '72.9977%', animationDuration: '4.1674s', animationDelay: '1.32272s'}}></div><div className="sparkle" style={{left: '84.3578%', animationDuration: '4.98194s', animationDelay: '1.46813s'}}></div><div className="sparkle" style={{left: '99.3321%', animationDuration: '4.60684s', animationDelay: '0.740044s'}}></div><div className="sparkle" style={{left: '59.3135%', animationDuration: '3.71507s', animationDelay: '1.28197s'}}></div><div className="sparkle" style={{left: '17.6958%', animationDuration: '4.17349s', animationDelay: '1.01519s'}}></div><div className="sparkle" style={{left: '83.3398%', animationDuration: '4.06485s', animationDelay: '1.41232s'}}></div><div className="sparkle" style={{left: '70.7771%', animationDuration: '3.16202s', animationDelay: '1.63244s'}}></div><div className="sparkle" style={{left: '71.0697%', animationDuration: '4.26809s', animationDelay: '0.85294s'}}></div><div className="sparkle" style={{left: '25.5041%', animationDuration: '3.2693s', animationDelay: '0.282389s'}}></div><div className="sparkle" style={{left: '38.6682%', animationDuration: '3.82211s', animationDelay: '1.24578s'}}></div><div className="sparkle" style={{left: '21.989%', animationDuration: '4.5979s', animationDelay: '0.544125s'}}></div><div className="sparkle" style={{left: '6.41034%', animationDuration: '4.3039s', animationDelay: '0.519208s'}}></div><div className="sparkle" style={{left: '88.1529%', animationDuration: '4.22725s', animationDelay: '0.327997s'}}></div><div className="sparkle" style={{left: '64.2073%', animationDuration: '2.1346s', animationDelay: '1.91506s'}}></div><div className="sparkle" style={{left: '5.97258%', animationDuration: '3.93117s', animationDelay: '1.84889s'}}></div><div className="sparkle" style={{left: '49.4756%', animationDuration: '2.23807s', animationDelay: '0.850457s'}}></div><div className="sparkle" style={{left: '4.23325%', animationDuration: '2.32546s', animationDelay: '0.268431s'}}></div></div>
<div className="overflow-hidden group/gallery min-h-[800px] flex flex-col bg-[#050505] w-full pt-20 pb-20 relative justify-center">
<style>
                @keyframes filmRowLTR {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes filmRowRTL {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes fogFlow {
                    0% { transform: translateX(10%) translateY(0) scale(1); opacity: 0.05; }
                    50% { transform: translateX(-10%) translateY(5%) scale(1.1); opacity: 0.08; }
                    100% { transform: translateX(10%) translateY(0) scale(1); opacity: 0.05; }
                }
                
                .film-strip-row:hover {
                    animation-play-state: paused;
                }
            </style>


<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
<div className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] bg-[radial-gradient(circle_at_center,#E1120F,transparent_60%)] blur-[100px] animate-[fogFlow_20s_ease-in-out_infinite]"></div>
</div>

<div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
<div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>

<div className="relative z-10 text-center mb-14 px-6">
<h2 className="text-4xl font-bold text-white tracking-wide mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">RESTORATION ARCHIVE</h2>
<p className="text-white/60 text-lg font-light tracking-wide">“A cinematic reel of real transformations.”</p>
</div>

<div className="relative z-10 w-full overflow-hidden flex flex-col gap-10" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>

<div className="flex gap-0 w-max film-strip-row animate-[filmRowLTR_45s_linear_infinite]">

<div className="flex shrink-0">
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 z-10 w-full h-full">
<img alt="Restoration Comparison" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300"></div>
</div>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 1" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 2" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 3" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 4" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&amp;w=600&amp;fit=crop"/>
</div>
</div>

<div className="flex shrink-0">
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 z-10 w-full h-full">
<img alt="Restoration Comparison" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300"></div>
</div>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 1" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 2" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 3" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 4" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&amp;w=600&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex gap-0 w-max film-strip-row animate-[filmRowRTL_45s_linear_infinite]">

<div className="flex shrink-0">
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 11" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 12" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 13" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 14" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 15" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&amp;w=600&amp;fit=crop"/>
</div>
</div>

<div className="flex shrink-0">
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 11" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 12" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 13" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 14" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 15" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&amp;w=600&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md hidden items-center justify-center p-6 opacity-0 transition-opacity duration-300" id="gallery-modal" onclick="closeGalleryModal(event)">
<div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center transform scale-95 transition-transform duration-300" id="gallery-modal-content">
<button className="absolute -top-12 right-0 text-white/60 hover:text-[#E1120F] transition-colors p-2" onclick="closeGalleryModal(null, true)">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<img className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-[0_0_100px_rgba(0,0,0,0.9)] border border-white/10 object-contain" id="modal-img" src=""/>
</div>
</div>

</div>
</section>

<section className="overflow-hidden bg-black pt-24 pb-24 relative" id="works">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E1120F] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
<img alt="Cleaning Process" className="w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white font-bold text-xl tracking-tight">THE WORKS</p>
<p className="text-[#E1120F] text-sm font-medium uppercase tracking-wide">Premium Package</p>
</div>
</div>

<div className="absolute -inset-4 border border-white/5 -z-0 rounded-xl"></div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-2">THE WORKS</h2>
<p className="text-lg text-neutral-400 font-light mb-8">Comprehensive restoration. No detail missed.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Deep Exterior Foam Scrub &amp; Extraction</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Interior Sanitation &amp; Deodorizing</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Midsole Brightening (Remove Oxidation)</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Laces Ironed &amp; Reset</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Scuff Reduction &amp; Material Conditioning</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Protective Shine Finish</span>
</li>
</ul>
<div className="p-6 bg-white/5 rounded border border-white/10">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-neutral-400 uppercase tracking-widest">Total Value</span>
<span className="text-2xl font-bold text-white line-through decoration-[#E1120F] decoration-2">$120.00</span>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-2">
<div className="">
<span className="text-sm font-bold text-white uppercase tracking-widest block">Reserve Today</span>
<span className="text-[10px] text-neutral-400 italic">Credit applied to total service</span>
</div>
<span className="text-4xl font-bold text-[#E1120F]">$75.00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-t pt-24 pb-24" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-white tracking-tight mb-4">THE PROCESS</h2>
<p className="text-neutral-400">Simple. Transparent. Secure.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 relative z-10 group-hover:border-[#E1120F] transition-colors shadow-2xl">
                        1
                        <span className="absolute inset-0 rounded-full border border-[#E1120F]/20 animate-pulse"></span>
</div>
<h3 className="text-lg font-bold text-white mb-3">Reserve Your Slot</h3>
<p className="text-sm text-neutral-400 px-4">
                        Pay $75 to lock in your restoration time. This guarantees your sneaker is one of the 20 accepted that day.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 relative z-10 group-hover:border-[#E1120F] transition-colors shadow-2xl">
                        2
                    </div>
<h3 className="text-lg font-bold text-white mb-3" style={{}}>Ship</h3>
<p className="text-sm text-neutral-400 pr-4 pl-4" style={{}}>You'll get instant instructions upon booking.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 relative z-10 group-hover:border-[#E1120F] transition-colors shadow-2xl">
                        3
                    </div>
<h3 className="text-lg font-bold text-white mb-3">Get The Works</h3>
<p className="text-sm text-neutral-400 pr-4 pl-4" style={{}}>Your sneaker comes back refreshed, cleaned, and revived.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="bg-black/50 p-6 rounded border border-white/5">
<div className="flex text-[#E1120F] mb-3 text-xs gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"></svg></div></div></div></div></section>
    </>
  );
}
