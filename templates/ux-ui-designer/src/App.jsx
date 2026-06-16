import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();


    // Initialize Parallax and Chart when this section loads
    (function() {
      // 1. Chart.js Initialization
      const ctx = document.getElementById('financeChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [{
              data: [65, 59, 80, 81, 56, 85, 90],
              borderColor: '#10b981', // Emerald 500
              backgroundColor: (context) => {
                const bg = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
                bg.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
                bg.addColorStop(1, 'rgba(16, 185, 129, 0)');
                return bg;
              },
              fill: true,
              tension: 0.4,
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
              x: { display: false },
              y: { display: false, min: 40 }
            },
            layout: { padding: 0 }
          }
        });
      }

      // 2. Custom Parallax Logic
      const section = document.getElementById('mobile-apps');
      const bg = document.getElementById('apps-bg-parallax');
      const columns = section.querySelectorAll('.parallax-column');

      function handleParallax() {
        const scrolled = window.scrollY;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const screenHeight = window.innerHeight;

        // Check if section is in view
        if (scrolled + screenHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
          const relativeScroll = scrolled - sectionTop;
          
          // Animate Background
          if(bg) {
             bg.style.transform = `translateY(${relativeScroll * 0.1}px) scale(1.1)`;
          }

          // Animate Columns
          columns.forEach(col => {
            const speed = parseFloat(col.getAttribute('data-speed') || 0);
            // Apply translation based on scroll speed factor
            col.style.transform = `translateY(${relativeScroll * speed}px)`;
          });
        }
      }

      window.addEventListener('scroll', () => requestAnimationFrame(handleParallax));
    })();
  


      window.addEventListener('DOMContentLoaded', () => {
        // Parallax scrolling effect
        let ticking = false;
        
        function updateParallax() {
          const scrolled = window.pageYOffset;
          const viewportHeight = window.innerHeight;
          
          // Main hero background
          const parallaxBg = document.getElementById('parallax-bg');
          if (parallaxBg) {
            const speed = 0.5;
            parallaxBg.style.transform = `translateY(${scrolled * speed}px)`;
          }
          
          // Hero decorative crosses
          const parallaxCrosses = document.getElementById('parallax-crosses');
          if (parallaxCrosses) {
            const speed = 0.3;
            parallaxCrosses.style.transform = `translateY(${scrolled * speed}px)`;
          }
          
          // Hero wordmark
          const parallaxWordmark = document.getElementById('parallax-wordmark');
          if (parallaxWordmark) {
            const speed = 0.7;
            parallaxWordmark.style.transform = `translateY(${scrolled * speed}px)`;
          }
          
          // Second section background
          const parallaxBg2 = document.getElementById('parallax-bg2');
          if (parallaxBg2) {
            const rect = parallaxBg2.getBoundingClientRect();
            if (rect.bottom >= 0 && rect.top <= viewportHeight) {
              const speed = 0.4;
              const offset = (scrolled - parallaxBg2.parentElement.offsetTop) * speed;
              parallaxBg2.style.transform = `translateY(${offset}px)`;
            }
          }
          
          // Second section crosses
          const parallaxCrosses2 = document.getElementById('parallax-crosses2');
          if (parallaxCrosses2) {
            const rect = parallaxCrosses2.getBoundingClientRect();
            if (rect.bottom >= 0 && rect.top <= viewportHeight) {
              const speed = 0.2;
              const offset = (scrolled - parallaxCrosses2.parentElement.offsetTop) * speed;
              parallaxCrosses2.style.transform = `translateY(${offset}px)`;
            }
          }
          
          // Second section wordmark
          const parallaxWordmark2 = document.getElementById('parallax-wordmark2');
          if (parallaxWordmark2) {
            const rect = parallaxWordmark2.getBoundingClientRect();
            if (rect.bottom >= 0 && rect.top <= viewportHeight) {
              const speed = 0.6;
              const offset = (scrolled - parallaxWordmark2.parentElement.offsetTop) * speed;
              parallaxWordmark2.style.transform = `translateY(${offset}px)`;
            }
          }
          
          ticking = false;
        }
        
        function requestTick() {
          if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
          }
        }
        
        window.addEventListener('scroll', requestTick);
        
        // Initial call
        updateParallax();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="90" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 90%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NaoyTHRiquOhW7PvwNgE"></div></div>
<div className="gradient-blur">
<div className=""></div>
<div className=""></div>
<div className=""></div>
<div className=""></div>
<div className=""></div>
<div className=""></div>
</div>
<style className="">
    .gradient-blur {
      position: fixed;
      z-index: 5;
      inset: 0 0 auto 0;
      height: 12%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>
<main className="min-h-screen overflow-hidden relative">

<div className="group absolute top-0 right-0 bottom-0 left-0" id="parallax-bg" style={{transform: 'translateY(0px)'}}>
<img alt="Abstract interface background" className="opacity-20 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56c4d3ce-3414-4deb-9b0c-c425ea1a8492_3840w.png"/>
<video aria-hidden="true" autoplay="" className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700" loop="" muted="" playsinline="" preload="metadata">
<source src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-keyboard-close-up-9106/1080p.mp4" type="video/mp4"/>
</video>
<div className="bg-gradient-to-tr from-black/90 via-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="pointer-events-none absolute inset-0" id="parallax-crosses" style={{transform: 'translateY(0px)'}}>
<div className="absolute left-6 top-16 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute left-1/3 top-1/4 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute right-10 top-14 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute right-1/4 top-1/2 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute left-12 bottom-24 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute right-8 bottom-12 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
</div>

<header className="flex fixed transition-all duration-300 md:px-10 z-50 bg-black/5 w-full border-white/5 border-b pt-5 pr-6 pb-5 pl-6 top-0 backdrop-blur-md items-center justify-between">
<div className="flex gap-3 z-50 relative items-center">
<div className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
<span className="md:text-base cursor-pointer text-sm font-semibold text-white tracking-tight" onclick="window.location.href='/home'" role="button">ALEX</span>
</div>

<nav className="hidden md:flex gap-8 text-sm font-medium text-white/80 tracking-tight items-center">
<a className="hover:text-white transition-colors duration-200" href="/work">Work</a>
<a className="hover:text-white transition-colors duration-200" href="/services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="/about">About</a>
<a className="hover:text-white transition-colors duration-200" href="/contact">Contact</a>
<div className="h-5 w-px bg-white/10"></div>
<div className="flex gap-4 text-white/70 items-center">
<a aria-label="X" className="hover:text-white transition-colors" href="#"><iconify-icon className="" icon="ri:twitter-x-line" width="16"></iconify-icon></a>
<a aria-label="Dribbble" className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:basketball-linear" width="18"></iconify-icon></a>
<a aria-label="LinkedIn" className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon></a>
<a aria-label="Email" className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></a>
</div>
</nav>

<button className="md:hidden inline-flex hover:bg-white/10 transition-all active:scale-95 z-50 text-sm text-white/90 bg-white/5 border-white/10 border rounded-full pt-2 pr-3 pb-2 pl-3 relative backdrop-blur-sm items-center justify-center" onclick="const m=document.getElementById('mobile-menu'); const icon=this.querySelector('iconify-icon'); if(m.classList.contains('opacity-0')){m.classList.remove('opacity-0','pointer-events-none');icon.setAttribute('icon','solar:close-circle-linear');}else{m.classList.add('opacity-0','pointer-events-none');icon.setAttribute('icon','solar:hamburger-menu-linear');}">
<iconify-icon className="" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>

<div className="fixed transition-all duration-500 flex flex-col md:hidden bg-zinc-950/98 opacity-0 mt-auto mb-auto pt-28 pr-0 pb-10 pl-0 top-0 right-0 bottom-0 left-0 backdrop-blur-3xl" id="mobile-menu">

<div className="blur-[80px] -translate-y-1/2 pointer-events-none bg-blue-500/10 w-64 h-64 rounded-full absolute top-0 right-0 translate-x-1/2 gap-x-6 gap-y-6"></div>
<div className="blur-[80px] -translate-x-1/2 pointer-events-none bg-purple-500/10 w-64 h-64 rounded-full absolute bottom-0 left-0 translate-y-1/2 gap-x-6 gap-y-6"></div>
<nav className="flex flex-col z-10 bg-[#000000] pt-4 pr-4 pb-4 pl-4 relative gap-y-6">
<a className="hover:text-blue-500 transition-colors text-2xl font-semibold text-white tracking-tight" href="/work" onclick="document.querySelector('header button').click()">Work</a>
<a className="hover:text-blue-500 transition-colors text-2xl font-semibold text-white tracking-tight" href="/services" onclick="document.querySelector('header button').click()">Services</a>
<a className="hover:text-blue-500 transition-colors text-2xl font-semibold text-white tracking-tight" href="/about" onclick="document.querySelector('header button').click()">About</a>
<a className="hover:text-blue-500 transition-colors text-2xl font-semibold text-white tracking-tight" href="/contact" onclick="document.querySelector('header button').click()">Contact</a>
</nav>
<div className="z-10 bg-[#000000] pr-4 pl-4 relative space-y-3 my-0 gap-y-3">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full gap-y-3"></div>
<div className="flex z-10 gap-y-3 items-center justify-between">
<span className="text-sm font-medium text-zinc-500">Socials</span>
<div className="flex items-center gap-6 text-white/60">
<a className="hover:text-white hover:scale-110 transition-all p-2" href="#"><iconify-icon className="" icon="ri:twitter-x-line" width="22"></iconify-icon></a>
<a className="hover:text-white hover:scale-110 transition-all p-2" href="#"><iconify-icon className="" icon="solar:basketball-linear" width="24"></iconify-icon></a>
<a className="hover:text-white hover:scale-110 transition-all p-2" href="#"><iconify-icon className="" icon="solar:link-circle-linear" width="24"></iconify-icon></a>
<a className="hover:text-white hover:scale-110 transition-all p-2" href="#"><iconify-icon className="" icon="solar:letter-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
</div>
</header>

<section className="z-10 relative" style={{}}>
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:px-10 lg:pb-36 lg:pt-20 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-28 pl-6 items-center">
<div className="max-w-xl mt-36">
<h1 className="sm:text-5xl lg:text-6xl xl:text-7xl text-4xl font-semibold tracking-tight">Crafting digital experiences &amp; user interfaces</h1>
<p className="mt-5 text-base sm:text-lg text-white/80">
              Specializing in complex web applications, design systems, and mobile interfaces for high-growth startups and enterprise clients.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition" href="#work">
                View case studies
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/10 transition" href="#contact">
                Book consultation
                <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="select-none absolute right-0 left-0" id="parallax-wordmark" style={{transform: 'translateY(0px)'}}>
<div className="md:px-10 max-w-full mr-auto ml-auto pr-6 pl-6 items-center justify-center">
<div className="whitespace-nowrap text-[18vw] leading-none font-semibold text-blue-500/95 tracking-tight text-center opacity-20 mix-blend-overlay">INTERFACE</div>
</div>
</div>

<aside className="hidden md:block z-10 absolute right-6 bottom-6" style={{}}>
</aside>
</main><main className="min-h-screen overflow-hidden relative">

<div className="absolute top-0 right-0 bottom-0 left-0" id="parallax-bg2" style={{transform: 'translateY(0px)'}}>
<img alt="Multiple device mockup collage" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/faef3732-0024-406d-be3c-f7cb0ea9b88a_3840w.png" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div className="bg-gradient-to-b from-slate-900/0 to-[#000000]/60 absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
</div>

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0" id="parallax-crosses2" style={{transform: 'translateY(0px)'}}>
<div className="absolute left-6 top-16 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute left-1/3 top-1/4 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute right-10 top-14 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute right-1/4 top-1/2 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute left-12 bottom-24 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
<div className="absolute right-8 bottom-12 text-white/30"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></div>
</div>

<section className="z-10 relative">
<div className="grid grid-cols-1 md:grid-cols-2 md:px-10 lg:pb-36 lg:pt-20 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-28 pl-6 gap-x-8 gap-y-8 items-center">
</div>
</section>

<div className="pointer-events-none z-0 select-none absolute right-0 bottom-0 left-0" id="parallax-wordmark2">
<div className="md:px-10 max-w-full mr-auto ml-auto pr-6 pl-6 items-center justify-center">
<div className="whitespace-nowrap text-[18vw] leading-none font-semibold text-blue-500/95 tracking-tight text-center opacity-20 mix-blend-overlay">PROJECTS</div>
</div>
</div>

<aside className="hidden md:block z-10 absolute right-6 bottom-6">
</aside>
</main><section className="overflow-hidden lg:py-48 bg-black pt-32 pb-32 relative" id="mobile-apps">

<div className="absolute inset-0 z-0 opacity-40 mix-blend-color-dodge pointer-events-none" id="apps-bg-parallax" style={{willChange: 'transform'}}>
<img alt="Background texture" className="h-full w-full object-cover opacity-30 blur-3xl scale-125" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>

<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
<div className="mb-24 md:max-w-3xl">
<h2 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight">
        Native performance.
        <span className="text-zinc-500">Uncompromised design.</span>
</h2>
<p className="mt-6 text-lg text-zinc-400 md:text-xl max-w-xl leading-relaxed">
        Building fluid, gesture-driven mobile experiences that feel natural on every device. From fintech to media, every interaction is meticulously crafted.
      </p>
</div>

<div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">

<div className="flex flex-col gap-12 pt-0 lg:pt-20 parallax-column" data-speed="0.05">

<div className="group relative">
<div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-b from-blue-500/20 to-purple-500/20 opacity-0 blur transition duration-500 group-hover:opacity-100"></div>

<div className="relative mx-auto h-[680px] w-[340px] overflow-hidden rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-950 shadow-2xl ring-1 ring-white/10">

<div className="absolute left-1/2 top-0 z-50 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-zinc-900"></div>

<div className="flex h-full flex-col bg-zinc-950 pt-12 text-white">

<div className="flex items-center justify-between px-6 pb-6">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-400">JM</div>
<span className="text-sm font-medium">Hello, James</span>
</div>
<button className="rounded-full bg-zinc-900 p-2 text-zinc-400 hover:text-white">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
</button>
</div>

<div className="px-6">
<div className="text-sm text-zinc-500">Total Balance</div>
<div className="mt-1 text-3xl font-semibold tracking-tight">$24,039.52</div>
<div className="mt-2 flex items-center gap-1 text-sm text-emerald-500">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="font-medium">+$1,204 (4.2%)</span>
</div>
</div>

<div className="relative mt-8 h-48 w-full px-2">
<canvas className="" height="300" id="financeChart" style={{display: 'block', boxSizing: 'border-box', height: '150px', width: '308px'}} width="616"></canvas>

<div className="absolute left-1/2 top-10 flex -translate-x-1/2 flex-col items-center rounded-lg border border-white/10 bg-zinc-900/90 px-3 py-1.5 backdrop-blur">
<span className="text-[10px] text-zinc-400">Sep 24</span>
<span className="text-sm font-bold">$23,800</span>
</div>
</div>

<div className="mt-6 flex justify-around border-t border-white/5 px-4 pt-6">
<div className="flex flex-col items-center gap-2">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-900/20">
<iconify-icon icon="lucide:arrow-up" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400">Send</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition">
<iconify-icon icon="lucide:arrow-down" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400">Request</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400">More</span>
</div>
</div>

<div className="mt-8 flex-1 rounded-t-[2rem] bg-zinc-900/50 p-6 backdrop-blur-sm">
<h4 className="mb-4 text-sm font-medium text-zinc-400">Recent Activity</h4>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white">
<iconify-icon className="" icon="lucide:shopping-bag" width="18"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium">Apple Store</div>
<div className="text-xs text-zinc-500">Today, 2:40 PM</div>
</div>
</div>
<div className="text-sm font-medium text-white">-$129.00</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white">
<iconify-icon icon="lucide:coffee" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Starbucks</div>
<div className="text-xs text-zinc-500">Yesterday</div>
</div>
</div>
<div className="text-sm font-medium text-white">-$4.50</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 md:pl-8">
<h3 className="text-2xl font-semibold text-white">Nova Finance</h3>
<p className="mt-2 text-zinc-400">A high-performance trading wallet with real-time websocket data and biometric security.</p>
<div className="mt-4 flex gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">iOS</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">SwiftUI</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-12 parallax-column" data-speed="0.12">

<div className="group relative">
<div className="absolute -inset-1 rounded-[3rem] bg-gradient-to0 blur transition duration-500 group-hover:opacity-100"></div>

<div className="relative mx-auto h-[680px] w-[340px] overflow-hidden rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-950 shadow-2xl ring-1 ring-white/10">

<div className="absolute left-1/2 top-0 z-50 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-zinc-900"></div>

<img alt="Album Art" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8aa0d98a-387e-492b-9bea-7172f4ea0c1a_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

<div className="relative flex h-full flex-col justify-end p-6 text-white">

<div className="absolute right-4 top-16 flex flex-col gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
<iconify-icon icon="lucide:share-2" width="20"></iconify-icon>
</div>
</div>
<div className="mb-8 space-y-2">
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
<span className="text-xs font-medium uppercase tracking-wider text-green-400">Now Playing</span>
</div>
<h2 className="text-3xl font-bold leading-none tracking-tight">MidnightEchoes</h2>
<p className="text-zinc-300">The Abstract Collective</p>
</div>

<div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/10">
<div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-white/20">
<div className="h-full w-2/3 bg-white"></div>
</div>
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-zinc-400">2:14</div>
<div className="flex items-center gap-6">
<iconify-icon className="text-zinc-300" icon="lucide:skip-back" width="24"></iconify-icon>
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-300" icon="lucide:skip-forward" width="24"></iconify-icon>
</div>
<div className="text-xs font-medium text-zinc-400">3:45</div>
</div>
</div>

<div className="mt-8 flex justify-between px-4 text-zinc-500">
<iconify-icon className="text-white" icon="lucide:home" width="24"></iconify-icon>
<iconify-icon icon="lucide:search" width="24"></iconify-icon>
<iconify-icon icon="lucide:library" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="mt-8 md:pl-8">
<h3 className="text-2xl font-semibold text-white">Echo Stream</h3>
<p className="mt-2 text-zinc-400">Social music discovery platform focusing on shared listening experiences and visualizers.</p>
<div className="mt-4 flex gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">React Native</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">Node.js</span>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<div className="flex flex-col overflow-hidden bg-slate-50 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-8 gap-y-8" style={{background: 'radial-gradient(circle at top left, #111, #000)', position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
<div className="flex flex-col md:flex-row md:items-end text-center mt-20 mb-10 pr-2 pl-2 gap-x-6 gap-y-6 items-center justify-center">
<div className="text-center space-y-2 items-center justify-center">
<h2 className="md:text-4xl lg:text-5xl text-3xl font-semibold tracking-tight mb-6">Interface Studies</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">A deep dive into functional aesthetics, design systems, and interaction patterns across enterprise platforms. Each panel represents a distinct module in our 2024 UI study.</p>
</div>
<div className="flex items-center gap-3">
<div className="group relative">
<button className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-medium text-white hover:bg-white/5 transition flex items-center gap-2">
          Product Modules <iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
<button className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200 transition flex items-center gap-2">
        Case Studies <iconify-icon icon="lucide:arrow-up-right" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-hidden w-full h-[700px] rounded-2xl gap-x-2 gap-y-2 items-stretch">
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-[4] relative group bg-zinc-900 rounded-sm items-center justify-center">
<img alt="SaaS Dashboard UI" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37e18797-a6da-4246-9868-7ae06d1d06a1_1600w.png"/>
<div className="card-overlay absolute inset-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 rounded-sm p-6 justify-end">
<h3 className="text-white text-xl font-semibold mb-1 tracking-tight">Enterprise Core</h3>
<p className="text-zinc-300 text-sm">Complex data orchestration dashboard</p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10">SaaS</span>
</div>
</div>
</div>
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-[4] group bg-zinc-900 rounded-sm relative items-center justify-center">
<img alt="Fintech App UI" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b30ed36c-fa0a-48df-8d21-175beda06c03_1600w.png" style={{}}/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 rounded-sm pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Nexus Wallet</h3>
<p className="text-zinc-300 text-sm">Biometric-first mobile banking</p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10">Fintech</span>
</div>
</div>
</div>
<div className="card-panel h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-zinc-900 flex justify-center items-center hover:flex-[4] relative group">
<img alt="Analytics Platform UI" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7448262-5258-4cf4-9b57-d8980c7ab406_800w.webp" style={{}}/>
<div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm flex flex-col justify-end p-6">
<h3 className="text-white text-xl font-semibold mb-1 tracking-tight">MetricFlow</h3>
<p className="text-zinc-300 text-sm">Advanced visualization &amp; tracking</p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10">Analytics</span>
</div>
</div>
</div>
<div className="card-panel h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-zinc-900 flex justify-center items-center hover:flex-[4] relative group">
<img alt="Architecture UI Study" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9fafcbc-4d96-425a-a1fd-cb169399875b_1600w.webp"/>
<div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm flex flex-col justify-end p-6">
<h3 className="text-white text-xl font-semibold mb-1 tracking-tight">System 01</h3>
<p className="text-zinc-300 text-sm">Component-driven architectural tool</p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10">Design System</span>
</div>
</div>
</div>
<div className="card-panel h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-zinc-900 flex justify-center items-center hover:flex-[4] relative group">
<img alt="Mockup Collection" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1089fd3-4ee0-45a5-a682-917472e74824_1600w.png" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm flex flex-col justify-end p-6">
<h3 className="text-white text-xl font-semibold mb-1 tracking-tight">Global Connect</h3>
<p className="text-zinc-300 text-sm">Collaborative workspace integration</p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10">Productivity</span>
</div>
</div>
</div>
</div>
</div><main className="z-10 pt-32 pb-20 relative">

<div className="md:px-10 flex flex-col md:flex-row gap-12 lg:gap-24 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12">

<aside className="md:w-1/3 lg:w-1/4">
<div className="md:sticky md:top-32 space-y-12">
<div className="space-y-4">
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500">Available for 2024</span>
<h1 className="lg:text-6xl md:text-4xl text-4xl font-semibold text-white tracking-tight">DesignServices</h1>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Specialized in crafting digital experiences that blend aesthetic precision with functional depth for
            startups and enterprise.
          </p>
</div>

<div className="space-y-6 pt-4 border-t border-white/10">
<h3 className="text-xs font-medium text-white uppercase tracking-wider">Expertise</h3>
<div className="flex flex-col gap-3 items-start text-sm">
<button className="text-white flex items-center gap-3 group w-full">
<span className="h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)] bg-blue-500"></span>
<span className="">All Services</span>
<span className="ml-auto text-zinc-600 text-xs">04</span>
</button>
<button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-3 group w-full">
<span className="h-1.5 w-1.5 rounded-full bg-transparent border border-zinc-700 group-hover:border-zinc-500 transition-colors"></span>
<span className="">Product Design</span>
<span className="ml-auto text-zinc-600 text-xs">UX/UI</span>
</button>
<button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-3 group w-full">
<span className="h-1.5 w-1.5 rounded-full bg-transparent border border-zinc-700 group-hover:border-zinc-500 transition-colors"></span>
<span>Design Systems</span>
<span className="ml-auto text-zinc-600 text-xs">Ops</span>
</button>
<button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-3 group w-full">
<span className="h-1.5 w-1.5 rounded-full bg-transparent border border-zinc-700 group-hover:border-zinc-500 transition-colors"></span>
<span className="">Web Development</span>
<span className="ml-auto text-zinc-600 text-xs">Code</span>
</button>
</div>
</div>

<div className="pt-8 hidden md:block">
<a className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm group hover:border-blue-500/50" href="mailto:hello@alex.design">
<iconify-icon className="transition-colors text-blue-500 group-hover:text-blue-400" icon="solar:calendar-add-linear"></iconify-icon>
            Book a Discovery Call
          </a>
</div>
</div>
</aside>

<div className="md:w-2/3 lg:w-3/4 space-y-24">

<div className="group cursor-pointer">
<div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-zinc-900 w-full border-white/5 border rounded-sm mb-6 relative">
<img alt="Product Design" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b60e0d50-e5e1-4516-8629-6565f3bc1919_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
<h2 className="md:text-5xl lg:text-4xl text-4xl font-medium text-white tracking-tight">Product Design</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-lg">From complex SaaS dashboards to consumer mobile apps.
              I focus on retention, clarity, and delight.</p>
</div>
<div className="absolute top-6 right-6">
<div className="bg-black/40 backdrop-blur-md text-white border border-white/10 rounded-full h-10 w-10 flex items-center justify-center group-hover:text-black transition-all group-hover:bg-blue-500 group-hover:border-blue-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 rounded-sm border border-white/5">
<img alt="Marketing Sites" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/286dcc4a-3b11-43d3-af80-a7b1c3aaaad1_1600w.webp"/>
<div className="absolute top-4 left-4 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider bg-blue-500">
              Popular
            </div>
</div>
<div className="flex flex-col gap-1 border-t border-white/10 pt-4 transition-colors group-hover:border-blue-500/50">
<div className="flex justify-between items-center">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Marketing Websites</h3>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:laptop-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-500">High-conversion landing pages with Framer/Webflow.</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 rounded-sm border border-white/5">
<img alt="Design Systems" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2785f53a-a46a-4482-9c3e-d09a2ddf4494_1600w.png"/>
</div>
<div className="flex flex-col gap-1 border-t border-white/10 pt-4 transition-colors group-hover:border-blue-500/50">
<div className="flex justify-between items-center">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Design Systems</h3>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:layers-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-500">Scalable Figma component libraries &amp; documentation.</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 rounded-sm border border-white/5">
<img alt="Mobile Apps" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb1b1152-57d5-4b49-b944-3a944ae87f0b_1600w.webp"/>
</div>
<div className="flex flex-col gap-1 border-t border-white/10 pt-4 transition-colors group-hover:border-blue-500/50">
<div className="flex justify-between items-center">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Mobile Apps</h3>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:smartphone-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-500">Native iOS &amp; Android interface design.</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 rounded-sm border border-white/5">
<img alt="Strategy" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7ffe8db-0c0b-4425-9c8a-a797d97e266e_1600w.webp"/>
</div>
<div className="flex flex-col gap-1 border-t border-white/10 pt-4 transition-colors group-hover:border-blue-500/50">
<div className="flex justify-between items-center">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Brand Strategy</h3>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:flag-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-500">Visual identity, logos, and art direction.</p>
</div>
</div>
</div>

<div className="pt-12 border-t border-white/10">
<div className="flex justify-between items-end mb-8">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-1">Design Process</h2>
<button className="text-sm text-zinc-500 hover:text-white transition flex items-center gap-1 group">
              View Detailed Guide 
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col text-sm">

<div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
<div className="col-span-5 md:col-span-4">Phase</div>
<div className="col-span-4 md:col-span-5">Deliverables</div>
<div className="col-span-3 md:col-span-3 text-right">Est. Time</div>
</div>

<div className="group grid grid-cols-12 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors -mx-2 px-2 rounded cursor-pointer">
<div className="col-span-5 md:col-span-4 transition-colors flex font-medium text-white gap-x-2 gap-y-2 items-center group-hover:text-blue-500">
<span className="text-xs text-zinc-600 font-mono">01</span>
              Discovery &amp; Strategy
            </div>
<div className="col-span-4 md:col-span-5 text-zinc-400">User Research, Audit, Roadmap</div>
<div className="col-span-3 md:col-span-3 text-right text-zinc-600 font-mono">1 Week</div>
</div>

<div className="group grid grid-cols-12 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors -mx-2 px-2 rounded cursor-pointer">
<div className="col-span-5 md:col-span-4 text-white font-medium transition-colors flex items-center gap-2 group-hover:text-blue-500">
<span className="text-xs text-zinc-600 font-mono">02</span>
              UX &amp; Wireframing
            </div>
<div className="col-span-4 md:col-span-5 text-zinc-400">User Flows, Low-fi Prototypes</div>
<div className="col-span-3 md:col-span-3 text-right text-zinc-600 font-mono">2 Weeks</div>
</div>

<div className="group grid grid-cols-12 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors -mx-2 px-2 rounded cursor-pointer">
<div className="col-span-5 md:col-span-4 text-white font-medium transition-colors flex items-center gap-2 group-hover:text-blue-500">
<span className="text-xs text-zinc-600 font-mono">03</span>
              Visual Design
            </div>
<div className="col-span-4 md:col-span-5 text-zinc-400">High-fidelity UI, Interactions</div>
<div className="col-span-3 md:col-span-3 text-right text-zinc-600 font-mono">2 Weeks</div>
</div>

<div className="group grid grid-cols-12 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors -mx-2 px-2 rounded cursor-pointer">
<div className="col-span-5 md:col-span-4 text-white font-medium transition-colors flex items-center gap-2 group-hover:text-blue-500">
<span className="text-xs text-zinc-600 font-mono">04</span>
              Handoff &amp; Support
            </div>
<div className="col-span-4 md:col-span-5 text-zinc-400">Figma Assets, QA, Dev Sync</div>
<div className="col-span-3 md:col-span-3 text-right text-zinc-600 font-mono">1 Week</div>
</div>
</div>
</div>

<div className="flex justify-center pt-8">
<button className="text-zinc-500 hover:text-white transition-colors text-sm flex flex-col items-center gap-2">
<iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon>
<span>Download Rate Card</span>
</button>
</div>
</div>
</div>
</main><section className="bg-zinc-50 border-gray-200 border-t relative" id="work">
<div className="md:px-10 lg:py-28 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-4xl lg:text-5xl text-3xl font-semibold text-gray-900 tracking-tight mb-6">Selected Works</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Featured case studies demonstrating problem-solving across fintech, healthcare, and e-commerce sectors.</p>
</div>
<div className="grid gap-8 md:gap-12 lg:gap-16">

<div className="overflow-hidden relative bg-white rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="grid lg:grid-cols-2 items-center">
<div className="lg:h-[500px] overflow-hidden h-96 relative top-0 right-0 bottom-0 left-0 bg-gray-100 flex items-center justify-center">
<img alt="Fintech dashboard UI" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1042d62-4402-4150-a295-c82f622f7b03_1600w.webp" style={{}}/>
<div className="lg:to-white/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-8 lg:p-12">
<div className="flex items-center gap-3 mb-4">
<div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
<span className="text-sm font-medium text-blue-600">Featured Case Study</span>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4 text-gray-900">Nova Fintech Dashboard</h3>
<p className="text-gray-700 mb-6">Complete redesign of an institutional trading platform. Focused on data visualization clarity, reducing cognitive load for traders, and implementing a scalable design system.</p>
<div className="flex flex-wrap gap-3 mb-6">
<span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">UX Research</span>
<span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">UI Design</span>
<span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">Design System</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition" href="#">
              View details
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 top-0 right-0 bottom-0 left-0">
<div className="group overflow-hidden bg-white rounded-xl relative top-0 right-0 bottom-0 left-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="overflow-hidden h-64 relative top-0 right-0 bottom-0 left-0 bg-gray-100">
<img alt="Mobile app interface" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb9b217e-05c2-4e6e-8f35-3fcb7f5b5e0c_800w.webp" style={{}}/>
<div className="bg-gradient-to-t from-white/90 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-2">
<div className="h-1 w-1 rounded-full bg-blue-600"></div>
<span className="text-xs font-medium text-blue-600">Mobile Health</span>
</div>
<h4 className="font-semibold text-gray-900 mb-1">HealthTrack App</h4>
<p className="text-sm text-gray-700">Patient monitoring iOS &amp; Android</p>
</div>
</div>
<div className="group overflow-hidden bg-white rounded-xl relative top-0 right-0 bottom-0 left-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="overflow-hidden h-64 relative top-0 right-0 bottom-0 left-0 bg-gray-100">
<img alt="E-commerce analytics" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9497e84f-cd43-4bed-8735-bbc8bfb0606f_800w.webp" style={{}}/>
<div className="bg-gradient-to-t from-white/90 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-2">
<div className="h-1 w-1 rounded-full bg-blue-600"></div>
<span className="text-xs font-medium text-blue-600">SaaS Platform</span>
</div>
<h4 className="font-semibold text-gray-900 mb-1">MetricFlow Analytics</h4>
<p className="text-sm text-gray-700">Data visualization dashboard</p>
</div>
</div>
<div className="group relative overflow-hidden md:col-span-2 lg:col-span-1 bg-white rounded-xl top-0 right-0 bottom-0 left-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="overflow-hidden h-64 relative top-0 right-0 bottom-0 left-0 bg-gray-100">
<img alt="Web design layout" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa91f7af-c0ee-487e-9b71-34905a5f7414_800w.webp" style={{}}/>
<div className="bg-gradient-to-t from-white/90 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-2">
<div className="h-1 w-1 rounded-full bg-blue-600"></div>
<span className="text-xs font-medium text-blue-600">Web Design</span>
</div>
<h4 className="font-semibold text-gray-900 mb-1">Architectural Digest</h4>
<p className="text-sm text-gray-700">Interactive portfolio website</p>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-12 border-t border-gray-200">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-blue-600 mb-2">80+</div>
<div className="text-sm text-gray-600">Projects Shipped</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-blue-600 mb-2">6+</div>
<div className="text-sm text-gray-600">Years Experience</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-blue-600 mb-2">12</div>
<div className="text-sm text-gray-600">Design Systems</div>
</div>
<div className="text-center lg:border-l lg:border-gray-200">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-blue-600 mb-2">4</div>
<div className="text-sm text-gray-600">Design Awards</div>
</div>
</div>
</div>
</div>
</section><section className="bg-zinc-950 border-white/5 border-t relative cursor-pointer" id="testimonials" onclick="window.location.href='/#testimonials'" role="button">
<div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
<div className="text-center mb-16">
<h2 className="md:text-4xl lg:text-5xl text-3xl font-semibold tracking-tight mb-6">Client Feedback</h2>
<p className="text-lg text-white/60 max-w-2xl mx-auto">Trusted by startups, agencies, and enterprise product teams worldwide.</p>
</div>

<div className="overflow-hidden bg-zinc-900/50 ring-slate-50/10 ring-1 rounded-2xl mb-12 relative backdrop-blur">
<div className="grid lg:grid-cols-2 items-center">
<div className="lg:p-12 order-2 lg:order-1 pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-3 mb-6">
<div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
<span className="text-sm font-medium text-blue-400">Head of Product</span>
</div>
<blockquote className="lg:text-2xl leading-relaxed text-xl font-medium text-white/90 mb-6">"Alex transformed our complex data requirements into an intuitive dashboard. The design system delivered scaled our development speed by 2x."</blockquote>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="text-sm font-medium text-white">MR</span>
</div>
<div className="">
<div className="font-medium text-white">Marco Rodriguez</div>
<div className="text-sm text-white/60">Product Director, TechCorp</div>
</div>
</div>
</div>
<div className="relative h-80 lg:h-96 overflow-hidden order-1 lg:order-2">
<img alt="Team meeting" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7c6e255-e784-4bd2-9b3e-d2b7246949e7_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/80 lg:to-zinc-900/50"></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
<div className="overflow-hidden bg-zinc-900/50 ring-slate-50/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="mb-6">
<div className="flex items-center gap-1 mb-4 text-blue-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-white/90 mb-4">"Incredibly professional and detailed. The mobile app redesign completely revitalized our user engagement metrics."</blockquote>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="text-xs font-medium text-white">SL</span>
</div>
<div className="">
<div className="text-sm font-medium text-white">Sarah Laurent</div>
<div className="text-xs text-white/60">Founder, HealthStart</div>
</div>
</div>
</div>
<div className="overflow-hidden bg-zinc-900/50 ring-slate-50/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="mb-6">
<div className="flex items-center gap-1 mb-4 text-blue-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-white/90 mb-4">"Alex's ability to bridge the gap between design and engineering is rare. A true partner in product building."</blockquote>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="text-xs font-medium text-white">JC</span>
</div>
<div className="">
<div className="text-sm font-medium text-white">James Chen</div>
<div className="text-xs text-white/60">CTO, FinFlow</div>
</div>
</div>
</div>
<div className="overflow-hidden bg-zinc-900/50 ring-slate-50/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="mb-6">
<div className="flex items-center gap-1 mb-4 text-blue-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-white/90 mb-4">"Exceptional quality of work. The prototyping phase helped us validate our ideas before writing a single line of code."</blockquote>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="text-xs font-medium text-white">AN</span>
</div>
<div>
<div className="text-sm font-medium text-white">Amelia Noir</div>
<div className="text-xs text-white/60">Creative Director</div>
</div>
</div>
</div>
</div>

<div className="text-center">
<h3 className="text-xl font-semibold text-white/90 tracking-tight mb-10">Featured In</h3>
<div className="flex flex-wrap gap-10 lg:gap-24 opacity-50 items-center justify-center text-white">
<iconify-icon className="hover:text-white transition-colors duration-300" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
</div>
</div>
</div>
</section><section className="relative bg-zinc-100 border-gray-200 border-t" id="contact">
<div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
<span className="text-sm font-medium text-blue-600">Let's Work Together</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-gray-900">Ready to build something great?</h2>
<p className="text-lg text-gray-600 mb-8 max-w-lg">Whether you need a complete product redesign, a new mobile app, or design system consulting, I'm here to help bring your vision to life.</p>

<div className="space-y-4 mb-8">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-white backdrop-blur border border-gray-200 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Email</div>
<div className="text-sm text-gray-600">alex@designstudio.com</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-white backdrop-blur border border-gray-200 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Availability</div>
<div className="text-sm text-gray-600">Open for Q3 2024</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-white backdrop-blur border border-gray-200 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Based in</div>
<div className="text-sm text-gray-600">San Francisco, CA (Remote)</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
<div className="">
<div className="text-xl font-semibold text-gray-900 mb-1">24h</div>
<div className="text-xs text-gray-600">Response time</div>
</div>
<div className="">
<div className="text-xl font-semibold text-gray-900 mb-1">Remote</div>
<div className="text-xs text-gray-600">Preferred</div>
</div>
<div className="">
<div className="text-xl font-semibold text-gray-900 mb-1">Figma</div>
<div className="text-xs text-gray-600">Expertise</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative overflow-hidden rounded-2xl bg-white backdrop-blur border border-gray-200 p-8 shadow-sm">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="firstName">First Name</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition focus:bg-white" id="firstName" name="firstName" placeholder="Enter your first name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="lastName">Last Name</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition focus:bg-white" id="lastName" name="lastName" placeholder="Enter your last name" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition focus:bg-white" id="email" name="email" placeholder="your.email@example.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="company">Company</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition focus:bg-white" id="company" name="company" placeholder="Your company name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="projectType">Project Type</label>
<select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition focus:bg-white" id="projectType" name="projectType">
<option value="">Select project type</option>
<option value="webapp">Web Application</option>
<option value="mobile">Mobile App</option>
<option value="system">Design System</option>
<option value="marketing">Marketing Website</option>
<option value="branding">Branding &amp; Identity</option>
<option value="other">Other</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition resize-none focus:bg-white" id="message" name="message" placeholder="Tell me about your project, timeline, and budget..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-500 transition-colors" type="submit">
              Send Message
              <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-blue-500/20 blur-xl"></div>
<div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-blue-500/10 blur-2xl"></div>
</div>
</div>
</div>
</section><footer className="z-10 bg-black/95 border-white/10 border-t relative backdrop-blur">
<div className="md:px-10 lg:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

<div className="space-y-8">
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
<span className="text-lg font-semibold tracking-tight cursor-pointer" onclick="window.location.href='/home'" role="button">ALEX</span>
</div>
<p className="text-white/60 max-w-md">
            Senior Product Designer crafting clean, functional, and scalable digital experiences for the modern web.
          </p>
</div>
<div className="flex items-center gap-4 text-white/60">
<a className="hover:text-white transition" href="#">
<iconify-icon icon="ri:twitter-x-line" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition" href="#">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition" href="#">
<iconify-icon icon="solar:figma-linear" width="20"></iconify-icon>
</a>
</div>
<div className="space-y-3">
<p className="text-sm font-medium text-white/90">Start a project?</p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-500 transition" href="#contact">
              Get in touch
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 transition" href="#">
              Download Resume
            </a>
</div>
</div>
</div>

<div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
<div className="">
<h3 className="text-sm font-medium text-white mb-4">Services</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Product Design</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Design Systems</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Mobile Apps</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Web Development</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">UX Consulting</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-medium text-white mb-4">Sitemap</h3>
<ul className="space-y-3">
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/work">Work</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/services">Services</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/about">About</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/blog">Blog</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/contact">Contact</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-white/60">
        © 2024 ALEX Design. All rights reserved.
      </p>
<div className="flex items-center gap-6 text-sm text-white/60">
<a className="hover:text-white transition" href="#">Case Studies</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Privacy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
