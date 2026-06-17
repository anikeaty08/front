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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for Scroll Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-item');
            revealElements.forEach(el => observer.observe(el));

            // Parallax Effect
            const heroBg = document.getElementById('hero-bg');
            window.addEventListener('scroll', () => {
                if (!heroBg) return;
                const scrollPosition = window.scrollY;
                // Only apply parallax if within hero view range for performance
                if (scrollPosition < window.innerHeight) {
                    // TranslateY creates the parallax speed difference
                    heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
                }
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
      

<div className="aura-background-component top-0 w-full h-screen mix-blend-screen saturate-0 z-10 pointer-events-none absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="7WRlj4TRuUxuldc6GVDM"></div>

</div></div>

<section className="relative h-screen w-full overflow-hidden bg-stone-900 text-[#F2F0EB]">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Serene Portrait" className="absolute left-0 -top-[10%] h-[120%] w-full object-cover opacity-60 mix-blend-overlay will-change-transform" id="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c55b9091-b0ca-4842-92d7-7be239f76440_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/90"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<nav className="flex md:px-12 w-full z-10 pt-8 pr-6 pb-8 pl-6 relative items-center justify-between">
<div className="flex items-center gap-2 reveal-item delay-100">
<iconify-icon className="text-3xl" height="30" icon="solar:tornado-small-outline" style={{color: 'rgb(242, 240, 235)'}} width="30"></iconify-icon>
<span className="text-2xl text-white font-dm-sans font-light tracking-tighter">Etheria</span>
</div>
<div className="hidden items-center gap-12 text-sm font-medium tracking-wide text-white/80 md:flex">
<a className="hover:text-white transition-colors tracking-tighter font-sans reveal-item delay-200" href="#">Expertise</a>
<a className="hover:text-white transition-colors tracking-tighter font-sans reveal-item delay-300" href="#">Solutions</a>
<a className="hover:text-white transition-colors tracking-tighter font-sans reveal-item delay-400" href="#">Research</a>
<a className="hover:text-white transition-colors tracking-tighter font-sans reveal-item delay-500" href="#">Insights</a>
</div>
<div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/70 md:flex reveal-item delay-500">
<span className="tracking-tighter font-sans">+1-800-ETHERIA</span>
<span className="tracking-tighter font-sans">San Francisco, CA</span>
<a className="group flex items-center gap-1 text-white hover:opacity-80 tracking-tighter font-sans" href="#">
                    Consult With Us
                    <iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<button className="md:hidden text-white reveal-item">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<div className="z-10 flex h-[calc(100vh-100px)] flex-col md:px-12 md:pb-20 pr-6 pb-12 pl-6 relative justify-end">

<div className="mb-auto flex w-full justify-between pt-12 text-xs font-medium tracking-wider text-white/40 reveal-item delay-300">
<span className="uppercase tracking-tighter font-sans">// Exclusive intelligence for the future of business.</span>
<span className="tracking-tighter font-sans">©2026</span>
</div>
<div className="flex flex-col items-end gap-12 md:flex-row md:items-end md:justify-between">

<h1 className="leading-[1.1] md:max-w-4xl md:text-7xl lg:text-8xl text-5xl font-light text-white tracking-tighter font-dm-sans reveal-item delay-100">
                    Ascending Your Enterprise to a State of <span className="text-white/90 font-dm-sans font-light tracking-tighter">Algorithmic Perfection.</span>
</h1>

<div className="flex max-w-sm flex-col gap-8 reveal-item delay-300">
<p className="text-lg leading-relaxed text-white/80 tracking-tighter font-sans">
                        Intelligence is not just data processing—it is an art, a strategy, and the finest investment for your future.
                    </p>
<a className="group flex w-fit items-center gap-3 rounded-full bg-[#F2F0EB] px-8 py-4 text-sm text-stone-900 transition-all hover:bg-white hover:shadow-lg hover:scale-105 tracking-tighter font-sans" href="#">
                        Explore Intelligence
                        <iconify-icon className="text-lg transition-transform group-hover:rotate-45" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="md:px-12 md:py-32 text-stone-800 bg-[#EAE8E2] w-full pt-20 pr-6 pb-20 pl-6 relative">

<div className="mb-12 border-b border-stone-300/50 pb-6 md:mb-24 reveal-item">
<div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tighter font-sans">// Because true power is intelligent foresight.</span>
<button className="rounded-full border border-stone-400/30 p-2 hover:bg-stone-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12">

<div className="flex flex-col gap-4 lg:col-span-4 lg:mt-24 reveal-item delay-100">
<div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
<img alt="Architecture" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c8f3560-bcc7-441d-9d12-6eb2fbb9aeea_800w.webp"/>
</div>
<div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tighter font-sans">[01] Global Research Hub</span>
<span className="tracking-tighter font-sans">©2025</span>
</div>
</div>

<div className="flex flex-col gap-20 lg:col-span-8">

<p className="leading-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.15] text-3xl font-light text-stone-900 tracking-tighter font-dm-sans reveal-item delay-200">
                    At <span className="font-dm-sans font-light tracking-tighter">Etheria</span>, we see artificial intelligence as the ultimate architect of the future. Every element of our approach, from neural architecture to strategic implementation, is curated for impact.
                </p>

<div className="grid grid-cols-1 gap-12 md:grid-cols-2">

<div className="flex flex-col gap-4 reveal-item delay-300">
<div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
<img alt="Therapy Room" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f6c82f7-e18c-4dc9-82dc-96bb615bfa30_800w.webp"/>
</div>
<div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tighter font-sans">[02] Neural Lab</span>
<span className="tracking-tighter font-sans">©2025</span>
</div>
</div>

<div className="flex flex-col justify-between py-4">
<div className="space-y-8 reveal-item delay-400">
<p className="leading-relaxed text-lg text-stone-600 tracking-tighter font-sans">
                                We work with visionaries who embrace the transformative power of machine learning, those who value precision over noise, and believe that the future lives in the intelligence of their data.
                            </p>
<div className="flex gap-1 text-stone-400">
<iconify-icon className="text-xs" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-linear"></iconify-icon>
</div>
</div>

<div className="mt-12 flex items-end justify-between border-t border-stone-300/50 pt-12 reveal-item delay-500">
<div className="flex gap-12">
<div className="">
<span className="text-5xl text-stone-900 font-dm-sans font-light tracking-tighter">96%</span>
<p className="mt-2 text-xs uppercase text-stone-500 tracking-tighter font-sans">Model Accuracy</p>
</div>
<div className="">
<span className="text-5xl text-stone-900 font-dm-sans font-light tracking-tighter">99%</span>
<p className="mt-2 text-xs uppercase text-stone-500 tracking-tighter font-sans">Deployment Success</p>
</div>
</div>
<button className="rounded-full border border-stone-400/30 p-3 hover:bg-stone-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="reveal-item delay-200 border-stone-300/50 border-t mt-24 pt-12">
<p className="uppercase text-xs text-stone-400 tracking-tighter font-sans mb-8">Trusted by teams at</p>
<div className="group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
<div className="flex shrink-0 animate-scroll items-center gap-12 pr-12 opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
<iconify-icon height="30" icon="logos:google" width="96"></iconify-icon>
<iconify-icon className="" height="30" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:microsoft" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:anthropic" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:linear" width="96"></iconify-icon>
</div>
<div aria-hidden="true" className="flex shrink-0 animate-scroll items-center gap-12 pr-12 opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
<iconify-icon height="30" icon="logos:google" width="96"></iconify-icon>
<iconify-icon className="" height="30" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:microsoft" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:anthropic" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:linear" width="96"></iconify-icon>
</div>
</div>
<style>
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .animate-scroll {
            animation: scroll 40s linear infinite;
        }
    </style>
</div>
</section><section className="w-full bg-stone-900 py-24 px-6 md:px-12 md:py-32 relative text-[#F2F0EB]">
<div className="mx-auto max-w-7xl">

<div className="mb-24 max-w-2xl reveal-item">
<h2 className="mb-8 text-4xl font-light tracking-tighter text-white md:text-6xl font-dm-sans">
                The Logic of Operation
            </h2>
<p className="text-lg leading-relaxed text-stone-400 font-sans tracking-tight">
                Etheria is not just a tool; it is a discipline. To bring artificial intelligence to its highest potential, we adhere to a set of immutable laws that govern our engineering, design, and deployment.
            </p>
</div>

<div className="flex flex-col w-full">

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-100">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">01</span>
<span className="font-medium tracking-tight text-white font-sans">Precision First</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                        In the realm of data, accuracy is the only currency. We prioritize exactitude over speed, ensuring that every inference is grounded in verifiable reality.
                    </p>
</div>
</div>

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-200">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">02</span>
<span className="font-medium tracking-tight text-white font-sans">Transparency by Design</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                        Black boxes have no place in critical infrastructure. We architect systems that are explainable, traceable, and accountable to their human operators.
                    </p>
</div>
</div>

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-300">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">03</span>
<span className="font-medium tracking-tight text-white font-sans">Human Amplification</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                        Our intelligence is designed to extend human capability, not replace it. We build tools that handle the computation so you can handle the vision.
                    </p>
</div>
</div>

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-400">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">04</span>
<span className="font-medium tracking-tight text-white font-sans">Security as Axiom</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                        The fortress must be impregnable. We integrate security at the neural level, protecting your proprietary data with the rigor of a nation-state.
                    </p>
</div>
</div>

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-500">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">05</span>
<span className="font-medium tracking-tight text-white font-sans">Iterative Evolution</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                        Static models decay. We build adaptive systems that learn from new inputs, ensuring your intelligence grows sharper with every interaction.
                    </p>
</div>
</div>

<div className="group flex flex-col gap-4 rounded-lg bg-stone-800/50 px-4 py-6 transition-all hover:bg-stone-800 md:flex-row md:items-center md:gap-12 md:-mx-4 mt-8 reveal-item delay-500">
<div className="flex basis-1/3 items-center gap-8 text-sm md:text-base">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-700 text-stone-300">
<iconify-icon className="text-sm" icon="solar:global-linear"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white font-sans">Global Intelligence Network</span>
</div>
<div className="basis-2/3">
<p className="text-stone-400 font-sans leading-relaxed text-base">
                        Access to a decentralized network of insights, allowing your enterprise to operate with the collective wisdom of the global market.
                    </p>
</div>
</div>
</div>
</div>
</section><section className="md:px-12 md:py-32 text-stone-900 bg-[#EAE8E2] w-full pt-24 pr-6 pb-24 pl-6 relative overflow-hidden">
<style>
        @keyframes scroll-cards {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-cards {
            animation: scroll-cards 60s linear infinite;
        }
        .animate-scroll-cards:hover {
            animation-play-state: paused;
        }
    </style>

<div className="absolute inset-0 w-full h-full pointer-events-none select-none">
<div className="mx-auto max-w-7xl h-full border-x border-stone-300/40 relative">
<div className="absolute inset-y-0 left-1/2 w-px bg-stone-300/40 hidden md:block lg:hidden -ml-px"></div>
<div className="absolute inset-y-0 left-1/3 w-px bg-stone-300/40 hidden lg:block -ml-px"></div>
<div className="absolute inset-y-0 left-2/3 w-px bg-stone-300/40 hidden lg:block -ml-px"></div>
</div>
</div>
<div className="z-10 w-full relative">

<div className="mb-20 flex flex-col items-center text-center max-w-7xl mx-auto reveal-item">
<span className="rounded-full border border-stone-300/60 bg-white/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-stone-500 font-sans backdrop-blur-sm mb-8">
                The Friction Point
            </span>
<h2 className="max-w-4xl text-4xl font-light tracking-tighter text-stone-900 md:text-6xl font-dm-sans">
                Is legacy infrastructure stifling your <span className="text-stone-400">cognitive potential?</span>
</h2>
</div>

<div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-6 md:-mx-12 px-6 md:px-12 reveal-item delay-200">
<div className="flex w-max animate-scroll-cards gap-6 py-4">

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-trending-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 17 13.5 8.5 8.5 13.5 2 6"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "We need to reduce our inference latency by <span className="font-medium text-stone-900">40%</span> to meet real-time user demands."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Elena Rodriguez</p>
<p className="text-xs text-stone-500 font-sans">VP of Engineering</p>
</div>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div className="">
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-git-branch" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                             "Managing version control across distributed research teams is becoming <span className="font-medium text-stone-900">impossible</span>."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Marcus Chen</p>
<p className="text-xs text-stone-500 font-sans">Lead AI Architect</p>
</div>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "New model deployment takes <span className="font-medium text-stone-900">weeks</span>. We need a pipeline that delivers in minutes."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Sarah Lin</p>
<p className="text-xs text-stone-500 font-sans">Head of Infrastructure</p>
</div>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-shield-alert" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "Data silos and compliance checks are preventing us from building a truly <span className="font-medium text-stone-900">unified intelligence layer</span>."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">David Korn</p>
<p className="text-xs text-stone-500 font-sans">CISO</p>
</div>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-cpu" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "Processing costs are spiraling. We need to optimize compute usage without sacrificing <span className="font-medium text-stone-900">accuracy</span>."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Jennifer Tso</p>
<p className="text-xs text-stone-500 font-sans">VP of Product</p>
</div>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "Our security team is blocking deployment because we lack <span className="font-medium text-stone-900">granular traceability</span> on model decisions."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Alex Morgan</p>
<p className="text-xs text-stone-500 font-sans">Head of Research</p>
</div>
</div>
</div>


<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-trending-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 17 13.5 8.5 8.5 13.5 2 6"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "We need to reduce our inference latency by <span className="font-medium text-stone-900">40%</span> to meet real-time user demands."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Elena Rodriguez</p>
<p className="text-xs text-stone-500 font-sans">VP of Engineering</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-git-branch" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                             "Managing version control across distributed research teams is becoming <span className="font-medium text-stone-900">impossible</span>."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Marcus Chen</p>
<p className="text-xs text-stone-500 font-sans">Lead AI Architect</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "New model deployment takes <span className="font-medium text-stone-900">weeks</span>. We need a pipeline that delivers in minutes."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Sarah Lin</p>
<p className="text-xs text-stone-500 font-sans">Head of Infrastructure</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-shield-alert" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "Data silos and compliance checks are preventing us from building a truly <span className="font-medium text-stone-900">unified intelligence layer</span>."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">David Korn</p>
<p className="text-xs text-stone-500 font-sans">CISO</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-cpu" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "Processing costs are spiraling. We need to optimize compute usage without sacrificing <span className="font-medium text-stone-900">accuracy</span>."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Jennifer Tso</p>
<p className="text-xs text-stone-500 font-sans">VP of Product</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<svg className="lucide lucide-search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
                            "Our security team is blocking deployment because we lack <span className="font-medium text-stone-900">granular traceability</span> on model decisions."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<p className="text-sm font-medium text-stone-900 font-sans">Alex Morgan</p>
<p className="text-xs text-stone-500 font-sans">Head of Research</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] reveal-item delay-500 max-w-7xl mx-auto">
<div className="flex w-max animate-scroll items-center gap-12 py-2">
<div className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80 font-mono">
<span>Latency Constraints</span>
<span className="text-stone-300/40">•</span>
<span>Data Governance</span>
<span className="text-stone-300/40">•</span>
<span>Model Drift</span>
<span className="text-stone-300/40">•</span>
<span>Compute Costs</span>
<span className="text-stone-300/40">•</span>
<span className="">API Limitations</span>
<span className="text-stone-300/40">•</span>
<span>Security Audits</span>
<span className="text-stone-300/40">•</span>
<span>Version Control</span>
<span className="text-stone-300/40">•</span>
<span>Infrastructure Dept</span>
<span className="text-stone-300/40">•</span>
<span>Cold Starts</span>
<span className="text-stone-300/40">•</span>
</div>

<div aria-hidden="true" className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80 font-mono">
<span>Latency Constraints</span>
<span className="text-stone-300/40">•</span>
<span>Data Governance</span>
<span className="text-stone-300/40">•</span>
<span>Model Drift</span>
<span className="text-stone-300/40">•</span>
<span>Compute Costs</span>
<span className="text-stone-300/40">•</span>
<span>API Limitations</span>
<span className="text-stone-300/40">•</span>
<span>Security Audits</span>
<span className="text-stone-300/40">•</span>
<span>Version Control</span>
<span className="text-stone-300/40">•</span>
<span>Infrastructure Dept</span>
<span className="text-stone-300/40">•</span>
<span>Cold Starts</span>
<span className="text-stone-300/40">•</span>
</div>
</div>
</div>
</div>
</section><section className="relative w-full bg-[#050505] pt-32 pb-12 overflow-hidden text-[#F2F0EB]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-stone-800/20 blur-[100px] rounded-full pointer-events-none select-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-to-tr from-stone-800/30 via-stone-900/10 to-transparent blur-[120px] rounded-full pointer-events-none select-none"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

<div className="mb-32 flex flex-col items-center text-center reveal-item">

<div className="mb-10 relative group">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-stone-700 to-stone-900 opacity-40 blur transition duration-500 group-hover:opacity-100"></div>
<div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-stone-800 bg-[#0A0A0A] shadow-2xl">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
</div>

<h2 className="mb-6 max-w-3xl font-dm-sans text-5xl font-light tracking-tighter text-white md:text-6xl">
                Start Integrating Today.
            </h2>
<p className="mb-10 max-w-lg font-sans text-lg text-stone-400 font-light leading-relaxed">
                Take your web projects to the next level with our AI-powered digital intelligence solution.
            </p>

<div className="flex flex-col items-center gap-4 sm:flex-row">
<a className="group relative flex items-center gap-2 rounded-full bg-[#F2F0EB] px-8 py-3 text-sm font-medium text-stone-950 transition-all hover:bg-white hover:scale-105" href="#">
<span>Get Started</span>
<svg className="transition-transform group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
<a className="group flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/30 px-8 py-3 text-sm font-medium text-stone-300 backdrop-blur-sm transition-colors hover:border-stone-700 hover:bg-stone-800 hover:text-white" href="#">
<span>Read Docs</span>
</a>
</div>
</div>

<div className="border-t border-stone-800/60 pt-16 reveal-item delay-200">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

<div className="flex flex-col justify-between lg:col-span-5">
<div className="space-y-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-3xl" height="30" icon="solar:tornado-small-outline" style={{color: 'rgb(242, 240, 235)'}} width="30"></iconify-icon>
<span className="font-dm-sans text-2xl font-light tracking-tighter text-white">Etheria</span>
</div>
<p className="max-w-xs font-sans text-sm font-normal leading-relaxed text-stone-500">
                            Take your web projects to the next level with our AI-powered digital card solution.
                        </p>
</div>

<div className="mt-8 flex gap-5 md:mt-12">
<a className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>

<div className="hidden lg:col-span-2 lg:block"></div>

<div className="col-span-1 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-5 lg:gap-12">
<div>
<h3 className="mb-6 font-sans text-sm font-medium tracking-tight text-white">Resources</h3>
<ul className="space-y-4 font-sans text-sm text-stone-500">
<li><a className="transition-colors hover:text-stone-300" href="#">About</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">Career</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">Blog</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="mb-6 font-sans text-sm font-medium tracking-tight text-white">Developers</h3>
<ul className="space-y-4 font-sans text-sm text-stone-500">
<li><a className="transition-colors hover:text-stone-300" href="#">Documentation</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">API Reference</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">API Changelog</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">Status</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
