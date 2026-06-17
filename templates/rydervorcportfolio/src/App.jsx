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



        // Navbar Glassmorphism Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/80', 'backdrop-blur-xl', 'border-white/5', 'h-16');
                navbar.classList.remove('h-20', 'border-transparent');
            } else {
                navbar.classList.remove('bg-black/80', 'backdrop-blur-xl', 'border-white/5', 'h-16');
                navbar.classList.add('h-20', 'border-transparent');
            }
        });

        // Set Current Year
        document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<div className="grain-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="z-50 text-xl font-semibold text-white tracking-tighter mix-blend-difference uppercase" href="#">Aashiq</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-300" href="#about">Profile</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden pt-20 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-4xl px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Available for projects</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[0.9] mb-6">
                Cinematic <br/>
<span className="text-neutral-500">Perspectives.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed mb-10 font-light">
                Digital Designer &amp; Video Editor crafting immersive visual stories from the heart of Kerala to the global stage.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-3 bg-white text-black text-sm font-semibold rounded-full overflow-hidden" href="#work">
<div className="absolute inset-0 w-full h-full bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 flex items-center gap-2">
                        View Selected Work
                        <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</a>
<a className="px-8 py-3 text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#contact">
                    Contact Me
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
</div>
</header>

<section className="border-y border-neutral-900 bg-neutral-950/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">5+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Years Experience</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">40+</span>
<span className="uppercase text-xs text-neutral-500 tracking-wider">Brand Films</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">Kochi</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Based in Kerala</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Client Satisfaction</span>
</div>
</div>
</section>

<section className="bg-neutral-950 pt-32 pr-6 pb-32 pl-6 relative" id="work">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Selected Works</h2>
<p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
                        A curation of video editing, motion graphics, and brand identity projects.
                    </p>
</div>
<div className="flex gap-2">
<button className="p-3 border border-neutral-800 rounded-full hover:bg-neutral-900 text-white transition-colors">
<iconify-icon icon="solar:list-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-3 border border-neutral-800 rounded-full bg-white text-black">
<iconify-icon icon="solar:gallery-wide-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 gap-x-8 gap-y-8">



<div className="group cursor-pointer">
<div className="relative w-full aspect-video overflow-hidden rounded-xl bg-neutral-900 mb-5">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 z-20 border border-white/20">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="28"></iconify-icon>
</div>
<img alt="Night Drive" className="transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[40%] group-hover:grayscale-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium text-white tracking-tight mb-1 group-hover:text-neutral-300 transition-colors">Kochi Nightlife</h3>
<p className="text-xs text-neutral-500">Editing / VFX</p>
</div>
<span className="text-xs border border-neutral-800 px-2 py-1 rounded text-neutral-400">2023</span>
</div>
</div>

</div>
<div className="mt-20 text-center">
<button className="text-sm text-white border-b border-white pb-0.5 hover:text-neutral-300 hover:border-neutral-300 transition-colors">View Complete Archive</button>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">My Workflow</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Blending technical precision with artistic intuition. Every frame is analyzed, every pixel is polished to ensure the final output resonates with the audience.
                    </p>
<div className="flex gap-4">
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:adobe-premiere" width="24"></iconify-icon>
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:adobe-after-effects" width="24"></iconify-icon>
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:figma" width="24"></iconify-icon>
<iconify-icon className="opacity-50 text-white hover:opacity-100 transition-all" icon="simple-icons:davinciresolve" width="24"></iconify-icon>
</div>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Video Editing</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                            Narrative driven cuts for commercials, music videos, and social content. Fast-paced or slow-burn, tailored to the beat.
                        </p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:pallete-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Color Grading</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                            Creating mood and atmosphere. Transforming raw footage into cinematic visuals with industry-standard Davinci Resolve workflows.
                        </p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:object-scan-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Motion Graphics</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                            Title sequences, kinetic typography, and VFX compositing to add that extra layer of polish and engagement.
                        </p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:figma-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">UI/Visual Design</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                            Clean, functional, and aesthetic layouts for digital products, portfolios, and brand identities.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-950 px-6" id="about">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/3">
<div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
</div>
<div className="w-full md:w-2/3">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-6">Origin Story</h3>
<p className="text-neutral-400 leading-relaxed mb-6 font-light">
                    Born and raised in the vibrant landscapes of Kerala, I draw inspiration from the contrast between nature's chaos and the symmetry of modern design. 
                </p>
<p className="text-neutral-400 leading-relaxed mb-8 font-light">
                    My philosophy is simple: <span className="text-white font-normal">Less noise, more signal.</span> Whether it's cutting a film or designing an interface, I strive for clarity, emotion, and purpose. I help brands and creators bridge the gap between idea and reality through compelling visual storytelling.
                </p>
<div className="flex gap-6">
<a className="text-sm text-white flex items-center gap-2 hover:text-neutral-300 transition-colors" href="#">
<iconify-icon icon="solar:download-linear"></iconify-icon> Download Resume
                    </a>
</div>
</div>
</div>
</section>

<footer className="relative py-32 px-6 bg-black overflow-hidden border-t border-neutral-900" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neutral-900/30 rounded-full blur-[100px] pointer-events-none"></div>

<div className="max-w-4xl mx-auto relative z-10">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-8 md:p-20 text-center shadow-2xl shadow-black/50">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="flex flex-col items-center">

<div className="mb-8 p-4 rounded-full border border-white/5 bg-white/5 text-white/80">
<iconify-icon icon="solar:clapperboard-edit-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6 leading-[1.1]">
                        Let’s Work <br className="md:hidden"/> Together.
                    </h2>
<p className="text-neutral-400 text-base md:text-lg mb-12 font-light max-w-lg mx-auto">
                        Have a project in mind? Let’s create something cinematic that leaves a lasting impression.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">

<a className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] w-full sm:w-auto" href="https://wa.me/918111835170" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Chat on WhatsApp</span>
</a>

<a className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 w-full sm:w-auto" href="mailto:AASHIQ5170@GMAIL.COM">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Send Email</span>
</a>
</div>
<div className="mt-12 pt-12 w-full border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500 uppercase tracking-widest">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Vimeo</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<p>© <span id="year">2026</span> Aashiq. Crafted in Kerala.</p>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
