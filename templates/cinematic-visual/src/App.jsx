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



        // Initialize Lenis for Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Horizontal Scroll Logic
        const stickySection = document.querySelector('#films');
        const track = document.querySelector('#film-track');
        const progressBar = document.querySelector('#progress-bar');

        function transformScroll() {
            if(!stickySection || !track) return;
            
            const offsetTop = stickySection.parentElement.offsetTop;
            // Get position relative to viewport using Lenis's scroll position would be ideal, 
            // but native getBoundingClientRect works well with Sticky positioning 
            const sectionTop = stickySection.getBoundingClientRect().top;
            const scrollDistance = stickySection.offsetHeight - window.innerHeight;
            
            // Calculate how far we've scrolled into the section
            // When sectionTop is 0, we are at start. When sectionTop is -scrollDistance, we are at end.
            let rawPercent = -sectionTop / scrollDistance;
            let percent = Math.min(Math.max(rawPercent, 0), 1);
            
            const x = percent * (track.scrollWidth - window.innerWidth);
            
            // If we are within the scroll boundaries
            if (percent >= 0 && percent <= 1) {
                track.style.transform = `translate3d(${-x}px, 0, 0)`;
                progressBar.style.width = `${percent * 100}%`;
            }
        }

        // Hook scroll events
        window.addEventListener('scroll', transformScroll);
        window.addEventListener('resize', transformScroll);
        // Also listen to Lenis scroll
        lenis.on('scroll', transformScroll);


        // Reveal Animation on Scroll
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

    
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-10 md:py-8 flex justify-between items-center mix-blend-difference text-white">
<a className="text-sm font-medium tracking-tight uppercase flex items-center gap-2" href="#">
<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Kairos
        </a>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-neutral-400">
<a className="hover:text-white transition-colors" href="#films">Films</a>
<a className="hover:text-white transition-colors" href="#journal">Journal</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<button className="md:hidden">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<header className="relative h-screen w-full flex flex-col justify-end pb-12 px-6 md:px-10 overflow-hidden border-b border-neutral-900">

<div className="absolute inset-0 z-0 opacity-40">
<img alt="Background" className="w-full h-full object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&amp;w=2774&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-[1800px] mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between gap-12">
<div className="reveal active delay-100">
<p className="text-neutral-400 text-xs font-medium tracking-widest uppercase mb-4 flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:globe" width="14"></iconify-icon>
                        Based in Kyoto, Roaming Everywhere
                    </p>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-white">
                        Visuals <br/>
<span className="text-neutral-600">of the</span> Unknown
                    </h1>
</div>
<div className="reveal active delay-200 max-w-sm mb-2">
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                        A cinematic archive of planet Earth. Documenting cultures, landscapes, and the silent moments in between through a digital lens.
                    </p>
<div className="mt-8 flex items-center gap-4">
<a className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-all" href="#films">
                            Latest Showreel
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</header>


<section className="relative h-[400vh] bg-[#0a0a0a]" id="films">
<div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
<div className="absolute top-8 left-6 md:left-10 z-10">
<span className="text-xs font-medium tracking-widest uppercase text-neutral-500">Selected Works (04)</span>
</div>

<div className="flex items-center gap-8 md:gap-24 pl-6 md:pl-10 w-max will-change-transform" id="film-track">

<div className="group relative w-[85vw] md:w-[45vw] shrink-0 cursor-pointer">
<div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-900">
<img alt="Alps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2162&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-1" icon="lucide:play" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-1">High Altitude</h3>
<p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Swiss Alps • 04:23</p>
</div>
<span className="text-4xl font-light text-neutral-800">01</span>
</div>
</div>

<div className="group relative w-[85vw] md:w-[45vw] shrink-0 cursor-pointer">
<div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-900">
<img alt="Tokyo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-1" icon="lucide:play" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-1">Neon Rain</h3>
<p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Tokyo, Japan • 03:12</p>
</div>
<span className="text-4xl font-light text-neutral-800">02</span>
</div>
</div>

<div className="group relative w-[85vw] md:w-[45vw] shrink-0 cursor-pointer">
<div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-900">
<img alt="Desert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-1" icon="lucide:play" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-1">Dune Silence</h3>
<p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Sahara • 05:45</p>
</div>
<span className="text-4xl font-light text-neutral-800">03</span>
</div>
</div>

<div className="group relative w-[85vw] md:w-[45vw] shrink-0 cursor-pointer pr-10">
<div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-900">
<img alt="Iceland" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-1" icon="lucide:play" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-1">Black Sand</h3>
<p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Iceland • 06:01</p>
</div>
<span className="text-4xl font-light text-neutral-800">04</span>
</div>
</div>
</div>

<div className="absolute bottom-10 left-6 md:left-10 w-full max-w-[200px]">
<div className="h-[1px] w-full bg-neutral-800 overflow-hidden">
<div className="h-full bg-white w-0 transition-all duration-75" id="progress-bar"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-10 max-w-[1800px] mx-auto bg-[#0a0a0a] relative z-20" id="journal">
<div className="flex flex-col md:flex-row justify-between items-start mb-24 reveal">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">Travel Log</h2>
<div className="mt-6 md:mt-0 text-right">
<p className="text-sm text-neutral-400 font-light max-w-xs">
                    Written thoughts and photo essays from the road. Capturing the essence of place beyond the video frame.
                </p>
</div>
</div>
<div className="space-y-0 border-t border-neutral-800">

<article className="group relative py-12 border-b border-neutral-800 transition-colors hover:bg-neutral-900/30 cursor-pointer reveal">
<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10">
<div className="md:w-1/3">
<span className="text-xs font-mono text-neutral-500">01 / OCT 2023</span>
</div>
<div className="md:w-1/3">
<h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">Finding Silence in Kyoto</h3>
</div>
<div className="md:w-1/3 flex justify-end items-center gap-2">
<span className="text-sm text-neutral-500 group-hover:text-white transition-colors">Read Story</span>
<iconify-icon className="text-neutral-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>

<img alt="Kyoto" className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-64 h-40 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 rotate-3 rounded hidden lg:block" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</article>

<article className="group relative py-12 border-b border-neutral-800 transition-colors hover:bg-neutral-900/30 cursor-pointer reveal">
<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10">
<div className="md:w-1/3">
<span className="text-xs font-mono text-neutral-500">02 / SEP 2023</span>
</div>
<div className="md:w-1/3">
<h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">The Train to Ella</h3>
</div>
<div className="md:w-1/3 flex justify-end items-center gap-2">
<span className="text-sm text-neutral-500 group-hover:text-white transition-colors">Read Story</span>
<iconify-icon className="text-neutral-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
<img alt="Sri Lanka" className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-64 h-40 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 -rotate-2 rounded hidden lg:block" src="https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&amp;w=1961&amp;auto=format&amp;fit=crop"/>
</article>

<article className="group relative py-12 border-b border-neutral-800 transition-colors hover:bg-neutral-900/30 cursor-pointer reveal">
<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10">
<div className="md:w-1/3">
<span className="text-xs font-mono text-neutral-500">03 / AUG 2023</span>
</div>
<div className="md:w-1/3">
<h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">Coffee Culture in Melbourne</h3>
</div>
<div className="md:w-1/3 flex justify-end items-center gap-2">
<span className="text-sm text-neutral-500 group-hover:text-white transition-colors">Read Story</span>
<iconify-icon className="text-neutral-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
<img alt="Melbourne" className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-64 h-40 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 rotate-6 rounded hidden lg:block" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</article>
</div>
</section>

<section className="py-24 px-6 md:px-10 border-t border-neutral-900 bg-[#0c0c0c] relative z-20">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900">

<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between h-64 group hover:bg-[#0f0f0f] transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="lucide:camera" width="24"></iconify-icon>
<div>
<h4 className="text-3xl font-medium text-white tracking-tight">Sony FX3</h4>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Main Body</p>
</div>
</div>

<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between h-64 group hover:bg-[#0f0f0f] transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="lucide:aperture" width="24"></iconify-icon>
<div>
<h4 className="text-3xl font-medium text-white tracking-tight">24mm GM</h4>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Primary Lens</p>
</div>
</div>

<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between h-64 group hover:bg-[#0f0f0f] transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="lucide:plane" width="24"></iconify-icon>
<div>
<h4 className="text-3xl font-medium text-white tracking-tight">42</h4>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Countries</p>
</div>
</div>

<div className="bg-[#0a0a0a] p-10 flex flex-col justify-between h-64 group hover:bg-[#0f0f0f] transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="lucide:hard-drive" width="24"></iconify-icon>
<div>
<h4 className="text-3xl font-medium text-white tracking-tight">24TB</h4>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Footage</p>
</div>
</div>
</div>
</section>

<footer className="bg-white text-black py-24 px-6 md:px-10 relative z-20" id="about">
<div className="max-w-[1800px] mx-auto flex flex-col justify-between min-h-[50vh]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.85] mb-8">
                        Let's film<br/>the world.
                    </h2>
<p className="text-neutral-500 text-lg font-light max-w-md">
                        Available for freelance directing, color grading, and travel documentation. Open to collaborations worldwide.
                    </p>
</div>
<div className="flex flex-col items-start md:items-end justify-between">
<div className="flex gap-6">
<a className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300" href="#">
<iconify-icon icon="lucide:youtube" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300" href="#">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</a>
</div>
<div className="mt-12 md:mt-0 text-right">
<a className="text-2xl md:text-3xl font-medium tracking-tight hover:opacity-50 transition-opacity" href="mailto:hello@kairos.film">hello@kairos.film</a>
<p className="text-neutral-400 text-xs uppercase tracking-widest mt-2">© 2024 Kairos Studio</p>
</div>
</div>
</div>
<div className="mt-24 pt-8 border-t border-neutral-200 flex justify-between items-center text-xs font-medium uppercase tracking-widest text-neutral-400">
<span>Kyoto, Japan</span>
<span className="hidden md:inline">Local Time: 14:02 PM</span>
<button className="hover:text-black transition-colors" onclick="window.scrollTo({top:0, behavior:'smooth'})">Back to Top</button>
</div>
</div>
</footer>


    </>
  );
}
