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



        let currentSlide = 3;
        const totalSlides = 3;

        function switchSlide(slideNum) {
            // Hide all slides
            for (let i = 1; i <= totalSlides; i++) {
                const slide = document.getElementById('slide-' + i);
                const nav = document.getElementById('nav-0' + i);
                if (slide) {
                    slide.classList.add('opacity-0', 'pointer-events-none');
                    slide.classList.remove('opacity-100');
                }
                if (nav) {
                    nav.classList.remove('text-white', 'text-2xl');
                    nav.classList.add('text-slate-600', 'text-sm');
                    nav.innerHTML = '0' + i;
                }
            }

            // Show selected slide
            const activeSlide = document.getElementById('slide-' + slideNum);
            const activeNav = document.getElementById('nav-0' + slideNum);
            if (activeSlide) {
                activeSlide.classList.remove('opacity-0', 'pointer-events-none');
                activeSlide.classList.add('opacity-100');
            }
            if (activeNav) {
                activeNav.classList.add('text-white', 'text-2xl');
                activeNav.classList.remove('text-slate-600', 'text-sm');
                activeNav.innerHTML = '0' + slideNum + '<div class="absolute -right-8 top-1/2 h-[2px] w-6 bg-white transition-all duration-300"></div>';
            }

            currentSlide = slideNum;
        }

        function nextSlide() {
            let next = currentSlide + 1;
            if (next > totalSlides) next = 1;
            switchSlide(next);
        }

        function prevSlide() {
            let prev = currentSlide - 1;
            if (prev < 1) prev = totalSlides;
            switchSlide(prev);
        }

        // Initialize with slide 3 active
        switchSlide(3);
    


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
      

<div className="video-background-container top-0 w-full -z-10 opacity-50 absolute h-[900px]" data-alpha-mask="58" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/f17abd48-a22e-4667-be8c-fa9c621893f7/0.mp4"></video></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#03050C]/80 backdrop-blur-md">
<div className="flex max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<div className="hidden md:flex gap-10 text-sm font-medium">
<a className="text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:shadow-[0_0_10px_cyan]" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Integration</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<button className="border border-white/20 px-6 py-2.5 text-xs font-medium tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 uppercase">
                Access
            </button>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 bg-cyan-600/10"></div>
<div className="blur-[100px] -translate-x-1/4 bg-cyan-600/5 w-[600px] h-[600px] rounded-full absolute bottom-0 left-0 translate-y-1/4"></div>
<div className="grid lg:grid-cols-2 gap-16 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="space-y-8">
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-cyan-500"></div>
<span className="text-cyan-400 font-medium tracking-[0.2em] text-sm uppercase">Redefining The Core</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Unlock The Future <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-300">Of Digital Assets</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                    Deploy scalable blockchain infrastructure with our enterprise-grade consensus protocols. Secure, fast, and built for the decentralized economy.
                </p>
<div className="flex items-center gap-0 w-fit border border-cyan-500/30 group hover:border-cyan-400 transition-colors">
<button className="bg-transparent text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase">Start Building</button>
<div className="h-full px-4 py-4 border-l border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black transition-all">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
<div className="flex h-full relative items-center justify-center">

<div className="lg:w-[500px] lg:h-[500px] w-[400px] h-[400px] relative">
<div className="absolute inset-0 orb-glow animate-pulse"></div>

<div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none" id="slide-1">
<svg className="text-[250px] text-cyan-400 animate-[bounce_6s_infinite]" data-icon-set="solar" data-solar="box-minimalistic-bold-duotone" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z" fill="currentColor"></path><path d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" fill="currentColor" opacity=".7"></path><path d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802" fill="currentColor" opacity=".5"></path></svg>
</div>

<div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none" id="slide-2">
<img alt="Futuristic blue 3D abstract control module" className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] object-contain animate-[bounce_6s_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/826b9179-f358-46f3-ac80-56ae67c2bb98_800w.png"/>
</div>

<div className="flex transition-opacity duration-500 absolute top-0 right-0 bottom-0 left-0 items-center justify-center opacity-100" id="slide-3">
<img alt="3D orange analytics app icon" className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] object-contain animate-[bounce_6s_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8e56a64-7a8b-4604-abff-2cd875b03093_800w.png"/>
</div>

<div className="absolute top-1/4 right-10 animate-[spin_10s_linear_infinite]">
<svg className="text-5xl text-cyan-400" data-icon-set="solar" data-solar="asteroid-bold-duotone" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12q0 .668.085 1.312a6 6 0 0 1 7.297 8.342c.835.226 1.712.346 2.618.346c4.879 0 8.941-3.494 9.823-8.116a6.002 6.002 0 0 1-3.505-9.636A9.96 9.96 0 0 0 12 2" fill="currentColor" opacity=".5"></path><path d="M2.085 13.312a10.01 10.01 0 0 0 7.297 8.342a6 6 0 0 0-7.297-8.342m19.738.573q.175-.916.177-1.885a9.98 9.98 0 0 0-3.682-7.752a6.002 6.002 0 0 0 3.505 9.637M16 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3-7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" fill="currentColor"></path></svg>
</div>
<div className="absolute bottom-20 left-10 animate-[bounce_4s_infinite]">
<svg className="text-6xl text-cyan-200" data-icon-set="solar" data-solar="atom-bold-duotone" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413c-2.469-2.47-8.474-.468-13.413 4.47c-4.939 4.94-6.94 10.945-4.471 13.414c2.47 2.47 8.475.468 13.413-4.47" fill="currentColor" opacity=".3"></path><path d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47c4.939 4.94 6.94 10.945 4.471 13.414c-2.47 2.47-8.475.468-13.413-4.47" fill="currentColor" opacity=".3"></path><path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" fill="currentColor"></path></svg>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-sm font-medium text-slate-600">
<span className="hover:text-white cursor-pointer transition-colors text-slate-600 text-sm" id="nav-01" onclick="switchSlide(1)">01</span>
<span className="hover:text-white cursor-pointer transition-colors text-slate-600 text-sm" id="nav-02" onclick="switchSlide(2)">02</span>
<div className="relative cursor-pointer text-white text-2xl" id="nav-03" onclick="switchSlide(3)">03<div className="absolute -right-8 top-1/2 h-[2px] w-6 bg-white transition-all duration-300"></div></div>
</div>

<div className="absolute bottom-0 right-10 flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all" onclick="prevSlide()">
<svg className="lucide lucide-chevron-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-cyan-500 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all" onclick="nextSlide()">
<svg className="lucide lucide-chevron-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

</div>
</div>
</header><section className="relative bg-[#03050C] border-b border-white/5 z-20">

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 border-x border-white/5 bg-[#03050C]/50 backdrop-blur-sm">

<div className="p-8 lg:p-10 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-300">
<div className="">
<div className="flex items-center gap-3 mb-5">
<div className="flex group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all bg-slate-50/5 w-8 h-8 border-slate-50/10 border items-center justify-center">
<svg className="text-slate-500 text-lg w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="bolt-bold-duotone" height="1em" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" fill="currentColor" opacity=".5"></path></svg>
</div>
<span className="uppercase group-hover:text-cyan-400 transition-colors text-xs font-semibold text-slate-500 tracking-widest">Throughput</span>
</div>
<h3 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-2">120k<span className="text-cyan-500/50 text-3xl align-top ml-1">+</span></h3>
</div>
<p className="text-slate-400 text-sm mt-4 leading-relaxed border-t border-white/5 pt-4">
                    Transactions per second enabled by parallelized execution sharding.
                </p>
</div>

<div className="p-8 lg:p-10 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-300">
<div className="">
<div className="flex items-center gap-3 mb-5">
<div className="flex group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all bg-slate-50/5 w-8 h-8 border-slate-50/10 border items-center justify-center">
<svg className="text-slate-500 text-lg w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="stopwatch-bold-duotone" height="1em" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 23a9 9 0 1 0 0-18a9 9 0 0 0 0 18" fill="currentColor" opacity=".5"></path><path d="M12 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" fill="currentColor"></path><path clip-rule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<span className="uppercase group-hover:text-cyan-400 transition-colors text-xs font-semibold text-slate-500 tracking-widest">Latency</span>
</div>
<h3 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-2">~400<span className="text-2xl text-slate-500 ml-1 font-normal">ms</span></h3>
</div>
<p className="text-slate-400 text-sm mt-4 leading-relaxed border-t border-white/5 pt-4">
                    Time to finality across our globally distributed node network.
                </p>
</div>

<div className="p-8 lg:p-10 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-300">
<div className="">
<div className="flex items-center gap-3 mb-5">
<div className="flex group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all bg-slate-50/5 w-8 h-8 border-slate-50/10 border items-center justify-center">
<svg className="text-slate-500 text-lg w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="wallet-money-bold-duotone" height="1em" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.892 9.614c0-.402.323-.728.722-.728H9.47c.4 0 .723.326.723.728a.726.726 0 0 1-.723.729H5.614a.726.726 0 0 1-.722-.729" fill="currentColor"></path><path clip-rule="evenodd" d="M21.188 10.004q-.094-.005-.2-.004h-2.773C15.944 10 14 11.736 14 14s1.944 4 4.215 4h2.773q.106.001.2-.004c.923-.056 1.739-.757 1.808-1.737c.004-.064.004-.133.004-.197v-4.124c0-.064 0-.133-.004-.197c-.069-.98-.885-1.68-1.808-1.737m-3.217 5.063c.584 0 1.058-.478 1.058-1.067c0-.59-.474-1.067-1.058-1.067s-1.06.478-1.06 1.067c0 .59.475 1.067 1.06 1.067" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M21.14 10.002c0-1.181-.044-2.448-.798-3.355a4 4 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 5 14.644 5 12.806 5h-2.112C8.856 5 7.4 5 6.26 5.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87C2 10.401 2 11.856 2 13.694v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238q.305-.308.526-.66c.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 18 14 16.264 14 14s1.944-4 4.215-4h2.773q.079 0 .151.002" fill="currentColor" opacity=".5"></path><path d="M10.101 2.572L8 3.992l-1.733 1.16C7.405 5 8.859 5 10.694 5h2.112c1.838 0 3.294 0 4.433.153q.344.045.662.114L16 4l-2.113-1.428a3.42 3.42 0 0 0-3.786 0" fill="currentColor"></path></svg>
</div>
<span className="uppercase group-hover:text-cyan-400 transition-colors text-xs font-semibold text-slate-500 tracking-widest">Avg. Cost</span>
</div>
<h3 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-2 whitespace-nowrap"><span className="text-slate-500 text-3xl font-normal">$</span>0.0002</h3>
</div>
<p className="text-slate-400 text-sm mt-4 leading-relaxed border-t border-white/5 pt-4">
                    Median fee per transaction, stabilized by dynamic fee markets.
                </p>
</div>

<div className="p-8 lg:p-10 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-300">
<div className="">
<div className="flex items-center gap-3 mb-5">
<div className="flex group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all bg-slate-50/5 w-8 h-8 border-slate-50/10 border items-center justify-center">
<svg className="text-slate-500 text-lg w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="shield-check-bold-duotone" height="1em" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082" fill="currentColor" opacity=".5"></path><path d="M15.06 10.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" fill="currentColor"></path></svg>
</div>
<span className="uppercase group-hover:text-cyan-400 transition-colors text-xs font-semibold text-slate-500 tracking-widest">Uptime</span>
</div>
<h3 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-2">99.99<span className="text-2xl text-slate-500 ml-1 font-normal">%</span></h3>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4">
<p className="text-slate-400 text-sm leading-relaxed">
                        Mainnet Status
                    </p>
<div className="flex items-center gap-2">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">Operational</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center gap-4 mb-16">
<div className="h-[2px] w-16 bg-cyan-500"></div>
<h2 className="text-4xl font-medium text-white tracking-tight">Core Capabilities</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8 items-center">

<div className="glass-card group hover:-translate-y-2 transition-transform duration-500 flex flex-col bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/10 via-white/0 to-white/10 h-[420px] pt-36 pr-10 pb-10 pl-10 relative justify-between">
<div className="">
<a className="inline-flex items-center justify-center bg-center -left-10 -top-16 -translate-y-4 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-8 group-hover:-rotate-12 transform-gpu w-[260px] h-[160px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11acf8f4-821b-4d2f-b2a4-a8321d5c8b90_800w.png)] bg-cover absolute -rotate-10" href="#"></a>
<h3 className="text-2xl font-medium text-white mb-4 relative z-10">Foundation</h3>
<p className="text-slate-400 leading-relaxed text-lg relative z-10 group-hover:text-slate-300 transition-colors">Build on our high-velocity open source protocol layer designed
            for enterprise scale.</p>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-6 relative z-10">
<span className="text-xs font-semibold tracking-widest uppercase text-white group-hover:text-cyan-400 transition-colors">Explore</span>
<svg className="lucide lucide-play w-3 h-3 text-cyan-400 fill-cyan-400 group-hover:scale-125 transition-transform" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="hover:-translate-y-2 transition-transform duration-500 flex flex-col bg-gradient-to-b from-cyan-400/50 via-cyan-600/5 to-cyan-600/0 h-[500px] pt-36 pr-10 pb-10 pl-10 relative justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(34, 211, 238, 1), rgba(255, 255, 255, 0))'}}>
<div className="">
<a className="inline-flex items-center justify-center bg-center -top-16 w-[280px] h-[200px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/826b9179-f358-46f3-ac80-56ae67c2bb98_800w.png)] bg-cover absolute translate-y-1 rotate-15 scale-100 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-4 transform-gpu" href="#"></a>
<h3 className="text-3xl font-medium text-white mb-4 relative z-10">Ecosystems</h3>
<p className="text-cyan-100/70 leading-relaxed text-lg relative z-10 group-hover:text-white transition-colors">Optimize internal workflows and tokenize assets on our end-to-end proprietary operating system.</p>
</div>
<div className="flex group/btn cursor-pointer hover:bg-cyan-500 hover:text-white transition-all z-10 bg-cyan-500/10 border-cyan-500/40 border relative items-center justify-between">
<span className="text-xs font-semibold tracking-widest uppercase px-6 py-4">Get Started</span>
<div className="h-full px-5 py-4 border-l border-cyan-500/40 group-hover/btn:border-white/20 transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="glass-card group hover:-translate-y-2 transition-transform duration-500 flex flex-col bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/10 via-white/0 to-white/10 h-[420px] pt-36 pr-10 pb-10 pl-10 relative justify-between">
<div className="">
<a className="inline-flex items-center justify-center bg-center -right-1 -top-10 -translate-y-1 w-[220px] h-[140px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af62d2a2-5a9c-4e46-8ac6-ddbcf07769d1_800w.png)] bg-cover absolute -translate-x-2 rotate-20 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-12 group-hover:translate-x-0 transform-gpu" href="#"></a>
<h3 className="text-2xl font-medium text-white mb-4 relative z-10">Assurance</h3>
<p className="text-slate-400 leading-relaxed text-lg relative z-10 group-hover:text-slate-300 transition-colors">Enhance smart contract integrity and prevent costly vulnerabilities with our audit services.</p>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-6 relative z-10">
<span className="text-xs font-semibold tracking-widest uppercase text-white group-hover:text-cyan-400 transition-colors">Explore</span>
<svg className="lucide lucide-play w-3 h-3 text-cyan-400 fill-cyan-400 group-hover:scale-125 transition-transform" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
</div>
</section><section className="bg-[#03050C] border-white/5 border-t pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-20 max-w-2xl">
<div className="flex items-center gap-4 mb-6">
<div className="h-[1px] w-12 bg-cyan-500"></div>
<span className="font-medium tracking-[0.2em] text-sm uppercase text-cyan-400">Innovation</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1]">
                Architected for 
                <span className="text-slate-500">Infinite Scale.</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px] gap-x-6 gap-y-6">

<div className="md:col-span-2 group overflow-hidden bg-[#050814] z-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(34, 211, 238, 0.5), rgba(255, 255, 255, 0))'}}>

<div className="absolute inset-0">
<img alt="Abstract shapes" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbdc5b42-1ade-4607-8a26-3418307156a0_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/40 to-transparent"></div>
</div>

<div className="flex flex-col z-10 h-full pt-10 pr-10 pb-10 pl-10 relative items-start justify-end">
<div className="flex group-hover:bg-white group-hover:text-black transition-all duration-300 text-white bg-white/10 w-14 h-14 border-white/20 border mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-cpu" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect className="" height="16" rx="2" width="16" x="4" y="4"></rect><rect className="" height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<h3 className="text-3xl font-medium text-white mb-3 tracking-tight">Elastic Computation</h3>
<p className="text-slate-400 text-lg max-w-md leading-relaxed">Nodes automatically provision additional resources during network congestion, ensuring consistent gas fees and zero downtime.</p>
</div>
</div>

<div className="md:col-span-1 group overflow-hidden hover:border-white/30 transition-colors duration-300 flex flex-col bg-[#0B101B] z-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))'}}>
<div className="flex flex-col z-10 h-full pt-10 pr-10 pb-10 pl-10 relative">
<div className="flex group-hover:bg-white group-hover:text-black transition-all duration-300 text-white bg-white/10 w-14 h-14 border-white/20 border mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path className="" d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Native Privacy</h3>
<p className="text-slate-400 leading-relaxed text-sm">Built-in ZK-SNARKs allow for confidential transactions without sacrificing verification speed.</p>
</div>
</div>

<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/10 transition-colors"></div>
</div>

<div className="md:col-span-1 group overflow-hidden hover:border-white/30 transition-colors duration-300 flex flex-col bg-[#0B101B] relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))'}}>
<div className="flex flex-col z-10 h-full pt-10 pr-10 pb-10 pl-10 relative">
<div className="flex group-hover:bg-white group-hover:text-black transition-all duration-300 text-white bg-white/10 w-14 h-14 border-white/20 border mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path className="" d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle className="" cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Universal Bridge</h3>
<p className="text-slate-400 leading-relaxed text-sm">Trustless message passing between EVM and non-EVM chains via our decentralized relay network.</p>
</div>
</div>
<div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/10 transition-colors"></div>
</div>

<div className="md:col-span-2 group overflow-hidden bg-[#050814] z-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(34, 211, 238, 0.5), rgba(255, 255, 255, 0))'}}>

<div className="absolute inset-0">
<img alt="Dark curves" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a313a27-afb4-4b94-a44c-3cf29e17dbf1_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/50 to-transparent"></div>
</div>

<div className="flex flex-col z-10 h-full pt-10 pr-10 pb-10 pl-10 relative items-start justify-end">
<div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<svg className="lucide lucide-code-2" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-3xl font-medium text-white mb-3 tracking-tight">Language Agnostic</h3>
<p className="text-slate-400 text-lg max-w-md leading-relaxed">Write smart contracts in Rust, C++, Go, or Solidity. Our VM compiles everything to optimized WASM bytecode for near-native performance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050814] pt-24 pb-24">
<div className="max-w-4xl mx-auto text-center mb-20">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight mb-6 opacity-0" style={{animation: 'fadeInUp 0.8s ease-out forwards'}}>
                Deploying Advanced <br/>
<span className="text-slate-500">Tech to Support Your Scale</span>
</h2>
</div>
<div className="max-w-6xl mx-auto px-6">

<div className="flex justify-center mb-20">
<div className="flex items-center bg-slate-900/50 border border-white/5 p-1 rounded-sm overflow-x-auto">
<button className="px-8 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 whitespace-nowrap transition-all duration-300" onclick="this.classList.add('bg-slate-800', 'text-white'); this.classList.remove('text-slate-400')">Expertise Areas</button>
<div className="h-4 w-[1px] bg-white/10"></div>
<button className="px-8 py-3 text-sm font-medium text-white bg-slate-800 shadow-sm whitespace-nowrap relative transition-all duration-300">
                        Technology Stack
                        <span className="absolute top-1 right-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
</button>
<div className="h-4 w-[1px] bg-white/10"></div>
<button className="px-8 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 whitespace-nowrap transition-all duration-300">Blockchain</button>
<div className="h-4 w-[1px] bg-white/10"></div>
<button className="px-8 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 whitespace-nowrap transition-all duration-300">Applications</button>
</div>
</div>

<div className="flex flex-wrap justify-center gap-12 lg:gap-20">
<div className="flex flex-col gap-6 group gap-x-6 gap-y-6 items-center opacity-0 cursor-pointer" style={{animation: 'fadeInUp 0.6s ease-out 0.1s forwards'}}>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b948f30-36d8-4507-9b28-49dbd343b986_320w.png)] bg-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]" href="#"></a>
<span className="font-medium text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">ProtocolLayer</span>
</div>
<div className="flex flex-col items-center gap-6 opacity-0 cursor-pointer" style={{animation: 'fadeInUp 0.6s ease-out 0.2s forwards'}}>
<div className="relative w-28 h-28 rounded-full border border-cyan-500 flex items-center justify-center bg-gradient-to-b from-cyan-900/20 to-transparent shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:scale-105" style={{animation: 'pulse 3s ease-in-out infinite'}}>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea896e1e-82ff-49c2-bfd2-f0c0dda9c53a_320w.png)] bg-cover" href="#"></a>
</div>
<div className="text-center">
<span className="font-semibold text-lg text-white glow-text">ApplicationLayer</span>
</div>
</div>
<div className="flex flex-col items-center gap-6 group opacity-0 cursor-pointer" style={{animation: 'fadeInUp 0.6s ease-out 0.3s forwards'}}>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e275ca9-d0a8-48bc-9eee-f70ca33f078c_320w.png)] bg-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]" href="#"></a>
<span className="font-medium text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">NetworkLayer</span>
</div>
<div className="flex flex-col items-center gap-6 group opacity-0 cursor-pointer" style={{animation: 'fadeInUp 0.6s ease-out 0.4s forwards'}}>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55352c51-5485-4740-95ae-09b941bb4798_320w.png)] bg-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]" href="#"></a>
<span className="font-medium text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">DataLayer</span>
</div>
<div className="flex flex-col items-center gap-6 group opacity-0 cursor-pointer" style={{animation: 'fadeInUp 0.6s ease-out 0.5s forwards'}}>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ad08aab-fc1b-4ac7-8aed-518f46a2fbd4_320w.png)] bg-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]" href="#"></a>
<span className="font-medium text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">Services &amp;Components</span>
</div>
</div>

<div className="relative mt-16 h-[2px] max-w-4xl mx-auto overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" style={{animation: 'shimmerLine 3s ease-in-out infinite'}}></div>
</div>
</div>
<style>
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes shimmerLine {
                0%, 100% {
                    transform: translateX(-100%);
                    opacity: 0;
                }
                50% {
                    transform: translateX(100%);
                    opacity: 1;
                }
            }
            @keyframes pulse {
                0%, 100% {
                    box-shadow: 0 0 40px rgba(6,182,212,0.4);
                }
                50% {
                    box-shadow: 0 0 60px rgba(6,182,212,0.6);
                }
            }
        </style>
</section><section className="overflow-hidden bg-[#03050C] border-white/5 border-t pt-32 pb-32 relative">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none bg-cyan-500/5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="space-y-10">
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-cyan-500"></div>
<span className="font-medium tracking-[0.2em] text-sm uppercase text-cyan-400">Developer Experience</span>
</div>
<div className="relative">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1]">
                        Integration, 
                        <span className="text-slate-500">Simplified.</span>
</h2>
<div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b to-transparent opacity-0 lg:opacity-100 from-cyan-500"></div>
</div>
<p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                    Focus on your application logic while we handle the network layer. Our unified SDK abstracts away the complexity of consensus mechanisms and cryptographic primitives.
                </p>
<div className="space-y-6">

<div className="flex gap-5 group cursor-pointer">
<div className="flex flex-shrink-0 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 bg-slate-900/50 w-12 h-12 border-white/10 border items-center justify-center">
<svg className="lucide lucide-terminal w-5 h-5 text-cyan-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">Unified CLI</h4>
<p className="text-sm text-slate-500 leading-relaxed">Deploy, test, and monitor your smart contracts from a single, composable command line interface.</p>
</div>
</div>

<div className="flex gap-5 group cursor-pointer">
<div className="flex flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300 group-hover:border-cyan-500/50 bg-slate-900/50 w-12 h-12 border-white/10 border items-center justify-center">
<svg className="lucide lucide-blocks w-5 h-5 text-cyan-400" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1 transition-colors group-hover:text-cyan-400">Pre-built Modules</h4>
<p className="text-sm text-slate-500 leading-relaxed">Bootstrap development with audited libraries for identity, tokenization, and governance.</p>
</div>
</div>
</div>
<div className="pt-4">
<button className="group flex items-center gap-3 text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
<span className="border-b border-white/20 pb-0.5 group-hover:border-cyan-400 transition-colors">Read the Documentation</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 to-cyan-600"></div>
<div className="relative rounded-xl bg-[#0B1121] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">

<div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
<div className="ml-auto text-xs text-slate-500 font-mono flex items-center gap-2">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            nova-deploy.ts
                        </div>
</div>

<div className="p-6 md:p-8 overflow-x-auto custom-scrollbar">
<pre className="font-mono text-xs md:text-sm leading-relaxed text-slate-300"><span className="text-purple-400">import</span> { <span className="text-yellow-200" style={{}}>NovaClient</span>, <span className="text-yellow-200" style={{}}>Wallet</span> } <span className="text-purple-400">from</span> <span className="text-emerald-400">'@nova/sdk'</span>;

<span className="text-slate-500 italic">// Initialize connection to the mainnet</span>
<span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-200" style={{}}>NovaClient</span>({
  network: <span className="text-emerald-400">'mainnet-beta'</span>,
  sharding: <span className="text-orange-400">true</span>,
  apiKey: process.env.<span className="text-blue-400">NOVA_KEY</span>
});

<span className="text-purple-400">async function</span> <span className="text-blue-400">deployAsset</span>() {
  <span className="text-purple-400">const</span> wallet = <span className="text-purple-400">await</span> <span className="text-yellow-200" style={{}}>Wallet</span>.<span className="text-blue-400">connect</span>();
  
  <span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-emerald-400">"Initializing consensus..."</span>);
  
  <span className="text-purple-400">const</span> tx = <span className="text-purple-400">await</span> client.<span className="text-blue-400">deploy</span>({
    contract: <span className="text-emerald-400">"./Artifacts/AssetToken.json"</span>,
    gasLimit: <span className="text-orange-400">21000</span>,
    params: [<span className="text-emerald-400">"NOVA"</span>, <span className="text-emerald-400">"1B"</span>]
  });

  <span className="text-purple-400">return</span> tx.<span className="text-blue-400">hash</span>;
}</pre>
</div>

<div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-white/[0.02] text-[10px] text-slate-500 font-mono">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span>Node Status: Synced</span>
</div>
<span>Ln 14, Col 22</span>
</div>
</div>

<div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-[#0F172A]/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hidden md:block animate-[float_4s_ease-in-out_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Transaction</div>
<div className="text-sm font-medium text-white">Confirmed <span className="text-slate-500">0.4s</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-t pt-32 pb-32 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">

<div className="flex gap-4 order-2 md:order-1">
<button className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] active:scale-95 transition-all duration-300 group" onclick="document.getElementById('partners-grid').scrollBy({left: -300, behavior: 'smooth'})">
<svg className="lucide lucide-chevron-left w-5 h-5 group-hover:-translate-x-0.5 transition-transform" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-cyan-500/50 bg-cyan-950/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95 transition-all duration-300 group" onclick="document.getElementById('partners-grid').scrollBy({left: 300, behavior: 'smooth'})">
<svg className="lucide lucide-chevron-right w-5 h-5 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<h2 className="text-4xl font-medium text-white tracking-tight flex-1 text-center md:text-left md:pl-20 order-1 md:order-2 animate-[fadeIn_0.8s_ease-out]">Strategic Allies</h2>
<p className="text-slate-400 text-lg max-w-xs text-right hidden md:block order-3 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
                    We are proud to serve industry leading institutions.
                </p>
</div>

<div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide" id="partners-grid">

<div className="min-w-[240px] md:min-w-0 w-full snap-center h-48 border border-slate-800 bg-slate-900/20 backdrop-blur-sm flex flex-col items-center justify-center gap-4 group hover:bg-slate-800/60 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-4xl font-bold text-white tracking-tighter relative z-10 group-hover:scale-110 transition-transform duration-300">AR</span>
<span className="text-xs text-cyan-500/70 font-medium relative z-10 group-hover:text-cyan-400 transition-colors">Cyber Dyne</span>
</div>

<div className="min-w-[240px] md:min-w-0 w-full snap-center h-48 border border-slate-800 bg-slate-900/20 backdrop-blur-sm flex flex-col items-center justify-center gap-4 group hover:bg-slate-800/60 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" data-icon-set="solar" data-solar="magnifer-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0" fill="currentColor" opacity=".5"></path><path d="m17.1 18.122l3.666 3.666a.723.723 0 0 0 1.023-1.022L18.122 17.1a9 9 0 0 1-1.022 1.022" fill="currentColor"></path></svg>
<span className="text-xs text-cyan-500/70 font-medium relative z-10 group-hover:text-cyan-400 transition-colors">Query Flow</span>
</div>

<div className="min-w-[240px] md:min-w-0 w-full snap-center h-48 relative border border-cyan-500 bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center gap-4 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] hover:-translate-y-1 transition-all duration-300 rounded-sm z-10">
<div className="absolute inset-0 bg-cyan-500/5 animate-pulse"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent opacity-50"></div>
<div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] relative z-10 group">
<div className="w-8 h-8 border-t-2 border-r-2 border-white rounded-full animate-[spin_3s_linear_infinite]"></div>
</div>
<span className="text-lg font-semibold text-white tracking-widest uppercase z-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Oriona</span>
<span className="text-xs text-cyan-400 font-medium z-10">FWW Inc.</span>

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>
</div>

<div className="min-w-[240px] md:min-w-0 w-full snap-center h-48 border border-slate-800 bg-slate-900/20 backdrop-blur-sm flex flex-col items-center justify-center gap-4 group hover:bg-slate-800/60 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="text-5xl text-cyan-200 group-hover:text-cyan-100 group-hover:scale-110 transition-all duration-300" data-icon-set="solar" data-solar="code-square-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path></svg>
<span className="text-xs text-cyan-500/70 font-medium relative z-10 group-hover:text-cyan-400 transition-colors">GovChain</span>
</div>

<div className="min-w-[240px] md:min-w-0 w-full snap-center h-48 border border-slate-800 bg-slate-900/20 backdrop-blur-sm flex flex-col items-center justify-center gap-4 group hover:bg-slate-800/60 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(103,232,249,0.3)]">
<div className="w-2 h-2 bg-white rounded-full group-hover:bg-cyan-300 transition-colors"></div>
</div>
<span className="text-xs text-cyan-500/70 font-medium relative z-10 group-hover:text-cyan-400 transition-colors">Isle Of Man</span>
</div>
</div>

<div className="mt-20 relative h-[1px] bg-slate-800/50 w-full flex justify-between items-center overflow-hidden">
<div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-[shimmer_3s_infinite_linear] -translate-x-full"></div>
<div className="w-2 h-2 bg-slate-700 rounded-full border border-slate-900 z-10"></div>
<div className="w-2 h-2 bg-slate-700 rounded-full border border-slate-900 z-10"></div>
<div className="relative w-3 h-3 flex items-center justify-center z-10">
<div className="absolute w-full h-full bg-cyan-500 rounded-full opacity-20 animate-ping"></div>
<div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]"></div>
</div>
<div className="w-2 h-2 bg-slate-700 rounded-full border border-slate-900 z-10"></div>
<div className="w-2 h-2 bg-slate-700 rounded-full border border-slate-900 z-10"></div>
</div>
</div>
<style>
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        </style>
</section><section className="overflow-hidden border-white/5 border-t pt-32 pb-32 relative">

<div className="pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-[#03050C] to-[#03050C] absolute top-0 right-0 bottom-0 left-0 from-cyan-900/10"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row md:items-end gap-8 mb-20 justify-between">
<div className="">
<div className="flex gap-4 mb-6 items-center">
<div className="h-[1px] w-12 bg-cyan-500"></div>
<span className="text-cyan-400 font-medium tracking-[0.2em] text-sm uppercase">The Ecosystem</span>
</div>
<h2 className="lg:text-5xl leading-[1.1] text-4xl font-medium text-white tracking-tight">
                    Build Locally, 
                    <span className="text-slate-500">Scale Globally.</span>
</h2>
</div>
<div className="flex gap-4">
<a className="group flex items-center gap-2 hover:text-cyan-400 transition-colors text-sm font-semibold text-white" href="#">
<span className="border-b border-white/20 pb-0.5 group-hover:border-cyan-400 transition-colors">View Network Status</span>
<svg className="lucide lucide-activity w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</a>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6 mb-24 gap-x-6 gap-y-6">

<div className="group transition-all duration-500 ease-out hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.15)] bg-gradient-to-br from-white/10 via-white/0 to-white/10 border-white/10 border pt-8 pr-8 pb-8 pl-8 relative">
<a className="inline-flex items-center justify-center bg-center -top-8 -right-4 w-[120px] h-[126px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19c3b675-89a6-4ee4-a233-98ee8763bf65_320w.png)] bg-cover absolute transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-3 group-hover:rotate-3 transform-gpu" href="#"></a>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="flex bg-slate-50/10 w-12 h-12 rounded-lg mb-6 items-center justify-center transition-all duration-500 group-hover:bg-cyan-500/10 group-hover:scale-110" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '8px'}}>
<svg className="lucide lucide-message-circle w-[24px] h-[24px] text-slate-50/50 group-hover:text-cyan-400 transition-colors duration-300" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Community</h3>
<p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Join 150,000+ developers, validators, and creators discussing the future of Nova.</p>
</div>
<div className="flex gap-4 text-sm font-medium items-center">
<span className="text-white group-hover:text-cyan-400 transition-colors">Discord</span>
<span className="text-slate-600">•</span>
<span className="text-white group-hover:text-cyan-400 transition-colors">Telegram</span>
<span className="text-slate-600">•</span>
<span className="text-white group-hover:text-cyan-400 transition-colors">Forum</span>
</div>
</div>
</div>

<div className="group hover:border-cyan-500/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.15)] bg-gradient-to-br from-white/10 via-white/0 to-white/10 border-white/10 border pt-8 pr-8 pb-8 pl-8 relative">
<a className="inline-flex items-center justify-center bg-center -top-8 -right-4 w-[120px] h-[126px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a55144e0-48c7-44b9-890c-1002e3e45900_320w.png)] bg-cover absolute transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-3 group-hover:-rotate-3 transform-gpu" href="#"></a>
<div className="z-10 flex flex-col h-full relative justify-between">
<div className="mb-8">
<div className="flex bg-slate-50/10 w-12 h-12 rounded-lg mb-6 items-center justify-center transition-all duration-500 group-hover:bg-cyan-500/10 group-hover:scale-110" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '8px'}}>
<svg className="lucide lucide-graduation-cap w-[24px] h-[24px] text-slate-50/50 group-hover:text-cyan-400 transition-colors duration-300" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Academy</h3>
<p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Master Nova development with interactive tutorials, video courses, and certification.</p>
</div>
<a className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-2 duration-300" href="#">
                        Start Learning <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group hover:border-emerald-500/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.15)] bg-gradient-to-br from-white/10 via-white/0 to-white/10 border-white/10 border pt-8 pr-8 pb-8 pl-8 relative">
<a className="inline-flex items-center justify-center bg-center -top-8 -right-4 w-[120px] h-[126px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/609907fc-bc04-4c0f-9c3f-36e653a07cea_320w.png)] bg-cover absolute transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-3 group-hover:rotate-3 transform-gpu" href="#"></a>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="flex bg-slate-50/10 w-12 h-12 rounded-lg mb-6 items-center justify-center transition-all duration-500 group-hover:bg-emerald-500/10 group-hover:scale-110" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '8px'}}>
<svg className="lucide lucide-sprout text-slate-50/50 w-[24px] h-[24px] group-hover:text-emerald-400 transition-colors duration-300" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path className="" d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">Ventures</h3>
<p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Access our $100M ecosystem fund designed to accelerate high-impact projects.</p>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">Open</span>
<span className="text-sm text-slate-400">Applications rolling</span>
</div>
</div>
</div>
</div>

<div className="overflow-hidden bg-gradient-to-b from-slate-900 via-[#050814] to-black border-white/10 border relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="z-10 md:py-24 bg-center text-center pt-20 pr-6 pb-20 pl-6 relative"><img alt="Container background" className="opacity-20 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7416d619-3268-423e-8109-676f678b7806_1600w.jpg" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 10%, transparent)'}}/>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    Mainnet Beta Live
                </div>
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                    Ready to Launch?
                </h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                    Deploy your first smart contract in minutes. Join the developers building the next generation of decentralized finance.
                </p>
<div className="flex flex-col md:flex-row gap-6 gap-x-6 gap-y-6 items-center justify-center">

<div className="group relative flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4 hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all cursor-pointer w-full md:w-auto min-w-[300px]">
<span className="text-cyan-400 font-mono">$</span>
<span className="font-mono text-sm text-slate-300">npx create-nova-app@latest</span>
<div className="ml-auto pl-4 border-l border-white/10 h-4 flex items-center">
<svg className="lucide lucide-copy w-4 h-4 text-slate-500 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</div>
</div>
<button className="w-full md:w-auto bg-cyan-500 text-black px-8 py-4 rounded-lg text-sm font-bold tracking-wide uppercase hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        Get API Keys
                    </button>
</div>
<p className="mt-8 text-xs text-slate-500">
                    Free tier available • No credit card required • 99.9% Uptime SLA
                </p>
</div>
</div>
</div>
</section>

<footer className="bg-[#020308] border-slate-900 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-3">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<p className="text-slate-500 text-sm">© 2024 Nova Systems Inc.</p>
</div>

<div className="lg:col-span-2 space-y-4">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Links</h4>
<a className="block text-white hover:text-cyan-400 transition-colors flex items-center gap-2" href="#">
<div className="w-4 h-[1px] bg-cyan-500"></div> Solutions
                </a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Tools</a>
</div>
<div className="lg:col-span-2 space-y-4 pt-10">
<a className="block text-slate-400 hover:text-white transition-colors" href="#">About</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Insights</a>
</div>

<div className="lg:col-span-5">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Subscribe to our newsletter</h4>
<div className="flex">
<input className="bg-slate-900/50 border border-slate-800 text-slate-300 px-6 py-4 w-full focus:outline-none focus:border-cyan-500 transition-colors" placeholder="writeyour@email.here" type="email"/>
<button className="bg-gradient-to-b from-cyan-500 to-cyan-700 px-6 flex items-center justify-center hover:opacity-90 transition-opacity">
<svg className="lucide lucide-play w-4 h-4 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="flex gap-4 mt-12 justify-end">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest self-center mr-4">Our Socials:</span>
<a className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-800 hover:border-white hover:text-white transition-all" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-800 hover:border-white hover:text-white transition-all" href="#">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-800 hover:border-white hover:text-white transition-all" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 flex justify-between text-xs text-slate-600 border-t border-slate-900 pt-8">
<div className="flex gap-8">
<a className="hover:text-slate-400" href="#">Terms &amp; Conditions</a>
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
</div>
</div>
</footer>


    </>
  );
}
