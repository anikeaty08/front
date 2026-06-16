import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.spotlight-card');
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    });
  


      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.animationPlayState = 'running';
                  observer.unobserve(entry.target);
              }
          });
      }, {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
      });

      document.addEventListener('DOMContentLoaded', () => {
          lucide.createIcons();
          // Observe all elements with the blur-in animation
          document.querySelectorAll('.animate-blur-in').forEach(el => {
              // Ensure they are paused initially (redundant with inline style but safe)
              el.style.animationPlayState = 'paused';
              observer.observe(el);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full flex-grow border border-zinc-800/60 rounded-[32px] sm:rounded-[48px] overflow-hidden bg-black flex flex-col shadow-2xl ring-1 ring-white/5 mx-auto max-w-[1920px]">

<div className="absolute top-0 left-0 p-8 z-50 pointer-events-none opacity-50">
<div className="w-2 h-2 bg-zinc-500/80 rotate-45 mb-2"></div>
<div className="h-24 w-[1px] bg-gradient-to-b from-zinc-500/80 to-transparent"></div>
</div>
<div className="absolute top-0 right-0 p-8 z-50 pointer-events-none flex flex-col items-end opacity-50">
<div className="w-2 h-2 bg-zinc-500/80 rotate-45 mb-2"></div>
<div className="h-24 w-[1px] bg-gradient-to-b from-zinc-500/80 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-50 pointer-events-none flex flex-col-reverse opacity-50">
<div className="w-2 h-2 bg-zinc-500/80 rotate-45 mt-2"></div>
<div className="h-24 w-[1px] bg-gradient-to-t from-zinc-500/80 to-transparent"></div>
</div>
<div className="absolute bottom-0 right-0 p-8 z-50 pointer-events-none flex flex-col-reverse items-end opacity-50">
<div className="w-2 h-2 bg-zinc-500/80 rotate-45 mt-2"></div>
<div className="h-24 w-[1px] bg-gradient-to-t from-zinc-500/80 to-transparent"></div>
</div>

<header className="absolute top-0 left-0 w-full z-40 flex justify-between items-center px-8 py-6 sm:px-12 sm:py-8">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Steve Martin Agency Logo" className="z-10 relative w-[48px] h-[36px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2250a48c-053b-4796-a65d-b47aa333e27b_320w.webp"/>
</div>
<span className="sm:text-xl text-lg text-white tracking-tight font-serif-display">
            Steve Martin Agency
          </span>
</div>
<nav className="hidden md:flex gap-8 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#work">
            Work
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#about">
            About
          </a>
</nav>
<div className="md:hidden p-2 bg-black/20 rounded-full border border-white/5 backdrop-blur-sm">
<svg className="lucide lucide-menu text-white w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>
</header>

<main className="flex flex-col w-full relative h-full overflow-y-auto custom-scrollbar">

<section className="min-h-screen flex flex-col pt-20 pb-20 relative items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full z-0">
<video autoplay="" className="w-full h-full object-cover opacity-90" loop="" muted="" playsinline="" src="https://emerald-quickest-swallow-922.mypinata.cloud/ipfs/bafybeie75yb7xo6l3zy3w6wq7zg3b7cv5ya4auii75b4rlbpriojncmwaq"></video>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
<div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
</div>

<div className="absolute z-10 top-32 left-8 sm:left-12 hidden lg:block animate-blur-in" style={{animationPlayState: 'running', animationDelay: '0.2s'}}>
<h2 className="leading-tight text-lg font-light text-zinc-400 tracking-tight flex flex-col items-start gap-1 text-left">
<span>Code gives it <span className="font-serif-display italic text-white">form</span>.</span>
<span>Design gives it <span className="font-serif-display italic text-white">spirit</span>.</span>
</h2>
</div>

<div className="relative z-20 text-center w-full px-4 mt-12">
<h1 className="text-6xl sm:text-8xl lg:text-[10rem] leading-[0.85] flex flex-col items-center text-white tracking-tighter font-serif-display drop-shadow-2xl">
<span className="relative block transform animate-blur-in" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                Steve
              </span>
<span className="relative block italic font-normal z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 animate-blur-in -my-2 sm:-my-6" style={{animationPlayState: 'running', animationDelay: '0.1s'}}>
                Martin
              </span>
<span className="relative block transform animate-blur-in" style={{animationPlayState: 'running', animationDelay: '0.2s'}}>
                Agency
              </span>
</h1>
</div>
<p className="relative z-20 mt-16 text-xs sm:text-sm text-zinc-300 font-light tracking-[0.2em] uppercase text-center max-w-lg px-6 animate-blur-in" style={{animationPlayState: 'running', animationDelay: '0.4s'}}>
            Bespoke Digital Experiences
          </p>

<div className="absolute bottom-12 flex flex-col items-center gap-4 animate-blur-in z-20" style={{animationPlayState: 'running', animationDelay: '0.6s'}}>
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              Scroll
            </span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-400 animate-bounce" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black z-10 relative">
<div className="max-w-7xl mx-auto px-6 sm:px-12">
<p className="text-center text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-10">
              Trusted by industry leaders
            </p>
<div className="relative w-full overflow-hidden mask-linear-fade h-20 flex items-center">
<div className="flex gap-12 sm:gap-20 w-max animate-marquee items-center opacity-50 mix-blend-screen grayscale">

<img alt="Transistor" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfb45bfe-a1f5-4677-871e-03b61c41d877_320w.webp" style={{}}/>
<img alt="Reform" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d6e73a8-04d7-4d08-985b-faf5fd270a48_320w.png" style={{}}/>
<img alt="Tuple" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1b180a9-2e4a-413a-acaa-afadae41cc38_320w.png"/>
<img alt="SavvyCal" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4a6a0fb-f71c-4c1d-8a44-26bd831d1391_320w.png" style={{}}/>
<img alt="StaticKit" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5316c901-879b-4f13-9e4e-bbffcaaf2968_320w.png" style={{}}/>

<img alt="Transistor" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfb45bfe-a1f5-4677-871e-03b61c41d877_320w.webp" style={{}}/>
<img alt="Reform" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d6e73a8-04d7-4d08-985b-faf5fd270a48_320w.png" style={{}}/>
<img alt="Tuple" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1b180a9-2e4a-413a-acaa-afadae41cc38_320w.png"/>
<img alt="SavvyCal" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4a6a0fb-f71c-4c1d-8a44-26bd831d1391_320w.png" style={{}}/>
<img alt="StaticKit" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5316c901-879b-4f13-9e4e-bbffcaaf2968_320w.png" style={{}}/>
</div>
</div>
</div>
</section><section className="z-10 sm:py-44 overflow-hidden flex group bg-black border-white/5 border-b pt-32 pr-6 pb-32 pl-6 relative items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
<div className="max-w-5xl mx-auto relative z-10 text-center">

<div className="flex justify-center mb-10 animate-blur-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards', animationPlayState: 'running'}}>
<svg className="text-zinc-500 w-5 h-5 animate-pulse" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
</div>
<blockquote className="text-3xl sm:text-5xl md:text-6xl font-serif-display font-normal leading-[1.15] tracking-tight text-zinc-300 animate-blur-in opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards', animationPlayState: 'running'}}>
      “We exist at the intersection of logic and magic. An <span className="italic text-white">expert web agency</span> crafting the future for the <span className="italic text-white">pro</span> visionary.”
    </blockquote>
<div className="mt-10 flex flex-col items-center gap-4 animate-blur-in opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards', animationPlayState: 'running'}}>
<div className="h-px w-12 bg-zinc-700"></div>
<p className="text-[10px] uppercase text-zinc-500 tracking-[0.3em]" style={{}}>Est. 1996</p>
</div>
</div>
</section>

<section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-12 w-full bg-black relative z-10" id="services">
<div className="mb-20">
<h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
              We build
              <span className="font-serif-display italic text-zinc-400">
                digital artifacts
              </span>
              that
              <br/>
              stand the test of time.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] gap-x-6 gap-y-6">

<div className="group relative md:col-span-2 rounded-3xl bg-zinc-900 border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-500 animate-blur-in" style={{animationPlayState: 'running'}}>
<div className="absolute inset-0 z-0">
<img alt="Abstract Tech Background" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1678581231067-644dddeca6dc?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
<svg className="lucide lucide-code-2 text-white w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<span className="px-3 py-1 rounded-full bg-white text-zinc-950 text-[10px] font-bold uppercase tracking-widest shadow-lg">Popular</span>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                    Design &amp; Engineering
                  </h3>
<p className="text-zinc-400 text-sm mb-4 leading-relaxed max-w-sm">
                    Full-stack capabilities. From Figma concept to deployed code with seamless motion and performance.
                  </p>
<ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check text-green-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      React / Next.js
                    </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check text-green-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Interaction &amp; Motion
                    </li>
</ul>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-zinc-900 border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-500 animate-blur-in" style={{animationPlayState: 'running'}}>
<div className="absolute inset-0 z-0">
<img alt="Background pattern" className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 flex flex-col h-full relative justify-between">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-white/5 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pen-tool text-zinc-400 group-hover:text-white transition-colors w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                    Web Design
                  </h3>
<p className="text-zinc-500 text-xs mb-4 leading-relaxed">
                    The foundation. Perfect for brands needing consistent visual language and robust design systems.
                  </p>
<ul className="space-y-1">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<svg className="lucide lucide-check text-zinc-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      UI / UX Design
                    </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<svg className="lucide lucide-check text-zinc-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Design Systems
                    </li>
</ul>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-zinc-900 border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-500 animate-blur-in" style={{animationPlayState: 'paused'}}>
<div className="absolute inset-0 z-0">
<img alt="Abstract Background" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-screen" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/90 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 bg-zinc-800/80 backdrop-blur rounded-full flex items-center justify-center border border-white/5 mb-4 group-hover:rotate-12 transition-transform">
<svg className="lucide lucide-trending-up text-zinc-300 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                    Growth Marketing
                  </h3>
<p className="text-zinc-500 text-xs mb-4 leading-relaxed">
                    Scale your reach with data-driven strategies and high-converting content assets.
                  </p>
<ul className="space-y-1">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<svg className="lucide lucide-check text-zinc-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      SEO / Content
                    </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<svg className="lucide lucide-check text-zinc-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Analytics
                    </li>
</ul>
</div>
</div>
</div>

<div className="group relative md:col-span-2 rounded-3xl bg-zinc-900 border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-500 animate-blur-in" style={{animationPlayState: 'paused'}}>
<div className="absolute inset-0 z-0">
<img alt="Dark Abstract Background" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1673951284213-2a3550681b7d?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-l from-zinc-950 via-zinc-950/70 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
<svg className="lucide lucide-infinity text-white w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>
</div>
<span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-900/40">Full Service</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                      Strategic Partnership
                    </h3>
<p className="text-zinc-300 text-sm max-w-sm mb-4 leading-relaxed">
                      The complete package. Design, Development, and Growth strategy working in sync to scale your product.
                    </p>
<ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check text-blue-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Dedicated Team
                      </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check text-blue-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Priority Support
                      </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-black" id="work">
<div className="sm:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-end justify-between mb-16">
<h2 className="text-4xl sm:text-6xl font-serif-display text-white tracking-tight">
                Selected Work
              </h2>
<a className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                View all projects
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="flex flex-col gap-24 gap-x-24 gap-y-24">

<div className="group cursor-pointer animate-blur-in" style={{animationPlayState: 'paused'}}>
<div className="w-full aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 relative">
<div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-105">
<img alt="Fintech Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-100" src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=2560&amp;q=80" style={{}}/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-serif-display text-4xl italic text-white/10 group-hover:text-white/20 transition-colors">
                        Fintech Dashboard
                      </span>
</div>
</div>
<div className="overflow-hidden bg-zinc-950 w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Project Image" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/146d7fce-6468-4c84-b2b8-1f49ab1be4d8_3840w.webp?w=800&amp;q=80"/>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div className="">
<h3 className="text-2xl text-white font-medium tracking-tight">
                      Eli Zilberstein, Broker
                    </h3>
<p className="text-zinc-500 mt-1">
                      Web Design &amp; Development
                    </p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-zinc-400">
                      React
                    </span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-zinc-400">
                      WebGL
                    </span>
</div>
</div>
</div>

<div className="group cursor-pointer animate-blur-in" style={{animationPlayState: 'paused'}}>
<div className="w-full aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 relative">
<div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-105">
<img alt="Fashion E-commerce" className="absolute inset-0 w-full h-full object-cover opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b73c3db-f55c-48d8-b3b1-fc07d2ef0e87_3840w.webp"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-serif-display text-4xl italic text-white/10 group-hover:text-white/20 transition-colors">
                        Alarm Systems Installation
                      </span>
</div>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight">
                      SafetyCentric
                    </h3>
<p className="text-zinc-500 mt-1">Web Design &amp; Development</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-zinc-400">
                      React
                    </span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-zinc-400">
                      Supabase
                    </span>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative py-32 bg-black border-t border-white/5 overflow-hidden group/section" id="testimonials">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="text-4xl sm:text-6xl font-serif-display text-white tracking-tight mb-6">
          Voices from the 
          <span className="italic text-zinc-500">Industry</span>
</h2>
<p className="text-zinc-400 text-sm max-w-md leading-relaxed">
          We don't just build websites; we build lasting partnerships with visionaries who demand excellence.
        </p>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group" id="prev-testimonial">
<svg className="lucide lucide-arrow-left w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group" id="next-testimonial">
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="testimonial-grid">

<div className="spotlight-card group relative col-span-1 md:col-span-2 bg-zinc-900/40 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500" style={{-MouseX: '99px', -MouseY: '294.5px'}}>
<div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="absolute top-0 right-0 p-8 opacity-20">
<svg className="text-white" fill="currentColor" height="64" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z"></path></svg>
</div>
<div className="relative z-10 p-8 sm:p-12 flex flex-col h-full justify-between min-h-[400px]">
<div className="">
<div className="flex items-center gap-2 mb-8">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-zinc-400">Fintech</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-zinc-400">Strategy</span>
</div>
<p className="text-2xl sm:text-3xl font-serif-display text-zinc-200 leading-tight">
              "Working with Steve Martin Agency was a revelation. They didn't just redesign our platform; they fundamentally reimagined how our users interact with financial data. The result is pure <span className="text-white italic">magic</span>."
            </p>
</div>
<div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?w=320&amp;q=80"/>
<div>
<h4 className="text-white font-medium tracking-tight">David Harrison</h4>
<p className="text-zinc-500 text-xs uppercase tracking-wider">CTO, Apex Finance</p>
</div>
</div>
</div>
</div>

<div className="spotlight-card group relative bg-zinc-900/40 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500 flex flex-col">
<div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'}}></div>

<div className="h-48 relative w-full overflow-hidden">
<img alt="Abstract 3D" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
</div>
<div className="relative z-10 p-8 flex flex-col flex-grow justify-between -mt-12">
<p className="text-lg text-zinc-300 font-light leading-relaxed mb-6">
            "The level of technical execution coupled with their design sensibility is rare. They delivered a complex WebGL experience that runs flawlessly."
          </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1615464684446-95b73066d285?w=320&amp;q=80"/>
<div>
<h4 className="text-white text-sm font-medium tracking-tight">Sarah Jenkins</h4>
<p className="text-zinc-500 text-[10px] uppercase tracking-wider">Founder, Lumin</p>
</div>
</div>
</div>
</div>

<div className="spotlight-card group relative bg-zinc-900/40 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500 flex flex-col" style={{-MouseX: '370px', -MouseY: '87.5px'}}>
<div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="relative z-10 p-8 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
<svg className="lucide lucide-zap text-yellow-500 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div className="flex gap-1">
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
</div>
</div>
<p className="text-lg text-zinc-300 font-light leading-relaxed mb-6">
            "They understood our brand voice immediately. The site isn't just beautiful; it converts. Our leads increased by 40% in the first month."
          </p>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white ring-2 ring-black">MJ</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight">Michael Jones</h4>
<p className="text-zinc-500 text-[10px] uppercase tracking-wider">VP Marketing, Bolt</p>
</div>
</div>
</div>
</div>
</div>
</div>


</section>


<footer className="relative pt-24 pb-12 px-6 sm:px-12 border-t border-white/5 bg-black/60 overflow-hidden">

<div className="absolute bottom-0 left-0 right-0 text-center pointer-events-none select-none overflow-hidden leading-none z-0">
<span className="text-[15vw] font-serif-display text-zinc-900/50 italic tracking-tighter whitespace-nowrap">
              Steve Martin
            </span>
</div>
<div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<div className="max-w-md">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-sm text-zinc-400">
                  Available for new projects
                </span>
</div>
<h2 className="text-3xl sm:text-4xl font-light text-white leading-tight mb-8">
                Ready to elevate your
                <span className="font-serif-display italic">digital presence?</span>
</h2>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:bg-zinc-200" href="#">
<span className="relative text-sm font-medium uppercase tracking-widest">
                  Book a Call
                </span>
<svg className="lucide lucide-arrow-right ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-12 sm:gap-24">
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
                  Sitemap
                </h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                      Home
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#services">
                      Services
                    </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
                  Socials
                </h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                      Twitter X
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                      LinkedIn
                    </a>
</li>
</ul>
</div>
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-zinc-600 uppercase tracking-wider">
<p className="" style={{}}>© 2026 Steve Martin Agency. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</footer>
</main>
</div>



    </>
  );
}
