import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = 'running';
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.animate-entry').forEach((el) => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


    document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.carousel-slide');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let currentIndex = 0;
      let intervalId;

      const showSlide = (index, direction = 'next') => {
        // Reset all slides
        slides.forEach(slide => {
          slide.classList.remove('active', 'prev');
          slide.style.transform = ''; // Clear inline styles if any
        });
        
        // Handle Previous Slide Animation
        const prevIndex = direction === 'next' 
          ? (index === 0 ? slides.length - 1 : index - 1)
          : (index === slides.length - 1 ? 0 : index + 1);

        // Apply classes
        slides[index].classList.add('active');
      };

      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex, 'next');
      };

      const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex, 'prev');
      };

      // Event Listeners
      nextBtn.addEventListener('click', () => {
        clearInterval(intervalId);
        nextSlide();
        startAutoPlay();
      });

      prevBtn.addEventListener('click', () => {
        clearInterval(intervalId);
        prevSlide();
        startAutoPlay();
      });

      // Auto Play
      const startAutoPlay = () => {
        intervalId = setInterval(nextSlide, 5000);
      };

      startAutoPlay();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component opacity-80 w-full h-screen absolute top-0 hue-rotate-90 saturate-200 brightness-125" data-alpha-mask="42" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 42%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 42%, transparent)'}}>
<div className="aura-background-component -z-10 w-full h-full absolute top-0">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
<div className="w-full max-w-7xl h-full border-x border-white/5 vertical-lines"></div>
</div>

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-indigo-950/20 blur-[120px] rounded-full mix-blend-screen">
</div>
</div>

<div className="gradient-blur">
<div></div>
<div className=""></div>
<div></div>
<div className=""></div>
<div></div>
<div></div>
</div>


<div className="fixed flex z-50 w-full pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-8 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '9999px'}}>
<div className="flex gap-2 shrink-0 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='/home'" role="button">
<span className="text-base font-medium text-white tracking-tight">Nebula</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400" href="#">Product</a>
<a "="" className="hover:text-white transition-colors text-xs font-medium text-gray-400" href="">Docs</a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400" href="#">Customers</a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4 shrink-0">
<a className="hidden md:block hover:text-white transition-colors text-xs font-medium text-gray-300" href="#">Sign in</a>
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center" onclick="window.location.href='/request'" role="button">

<span className="animate-[spin_3s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute top-[-100%] right-[-100%] bottom-[-100%] left-[-100%]"></span>

<span className="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute top-0 right-0 bottom-0 left-0" style={{}}></span>

<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
<span className="relative z-10" style={{}}>Request Demo</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)'}}>

<div className="absolute inset-0 -z-20">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-zinc-900/20 to-black">
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay">
</div>
</div>

<div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-7 gap-0 -z-10 pointer-events-none">
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-1">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]">
</div>
</div>
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-2">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]">
</div>
</div>
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-3">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]">
</div>
</div>
<div className="relative h-full border-r border-white/5 md:border-none col-anim delay-4">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[45%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]">
</div>
<div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none">
</div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-5">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]">
</div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-6">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]">
</div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-7">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]">
</div>
</div>
</div>

<div className="text-center max-w-5xl z-10 mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 relative">

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-gradient-to-br from-white/10 to-white/0 rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '9999px'}}>
<span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] group-hover:animate-pulse"></span>
<span className="text-xs font-medium text-orange-100/80 tracking-wide group-hover:text-white transition-colors font-sans">New release: Nebula Protocol v2.0</span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-8">

<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">Scale</span>

<span className="group inline-flex flex-wrap justify-center gap-x-[0.25em] cursor-pointer select-none">

<span className="inline-flex">
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '0ms'}}>y</span>
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400 absolute top-0 left-0 translate-y-full" style={{transitionDelay: '0ms'}}>y</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '25ms'}}>o</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '25ms'}}>o</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '50ms'}}>u</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '50ms'}}>u</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '75ms'}}>r</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '75ms'}}>r</span>
</span>
</span>

<span className="inline-flex">
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '100ms'}}>p</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '100ms'}}>p</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '125ms'}}>r</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '125ms'}}>r</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '150ms'}}>o</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '150ms'}}>o</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '175ms'}}>t</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '175ms'}}>t</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '200ms'}}>o</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '200ms'}}>o</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '225ms'}}>c</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '225ms'}}>c</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '250ms'}}>o</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '250ms'}}>o</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '275ms'}}>l</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '275ms'}}>l</span>
</span>
</span>
</span>

<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">with</span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">smart</span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">infrastructure</span>
</h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl text-xl text-gray-400 tracking-normal max-w-3xl mr-auto mb-12 ml-auto animate font-manrope font-medium" style={{}}>
      The essential toolkit for deploying secure dApps. From writing your first smart contract to governing a global
      DAO, build it all on one unified layer.
    </p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row gap-6 animate mb-12 gap-x-6 gap-y-6 items-center justify-center">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center" onclick="window.location.href='/signin'" role="button">
<style>
        @keyframes beam-spin { to { transform: rotate(360deg); } }
        @keyframes dots-move { 
            0% { background-position: 0 0; } 
            100% { background-position: 24px 24px; } 
        }
    </style>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="relative z-10 text-white/90 transition-colors group-hover:text-white font-sans">Start Building</span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.6s_both] animate-on-scroll flex flex-col animate mt-32 mb-20 gap-x-4 gap-y-4 items-center">
<p className="text-xs text-gray-500 font-medium uppercase tracking-widest font-sans">Trusted by the modern web3
        ecosystem</p>
<a className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5 group font-sans" href="#">
        Read the manifesto
        <svg className="lucide lucide-arrow-right w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll relative z-20 w-full max-w-6xl mx-auto px-6 pb-12 md:pb-20 animate">
<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-40 grayscale hover:grayscale-0 transition-all duration-700 group">
<style>
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }

        /* Pause animation on hover */
        .group:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
      </style>
<div className="flex items-center justify-center md:justify-start [&amp;_div]:mx-8 w-max animate-infinite-scroll">

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor">
</path>
</svg>
<span className="font-medium text-lg text-white font-sans">git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor">
</path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">Lucidchart</span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg text-white font-sans">wrike</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor">
</path>
</svg>
<span className="font-medium text-lg text-white font-sans">jQuery</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor">
</path>
</svg>
<span className="font-medium text-lg text-white font-sans">openstack</span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg text-white tracking-tight font-sans">servicenow</span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl text-white tracking-tight font-sans">paysafe:</span>
</div>

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor">
</path>
</svg>
<span className="font-medium text-lg text-white font-sans">git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor">
</path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">Lucidchart</span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg text-white font-sans">wrike</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor">
</path>
</svg>
<span className="font-medium text-lg text-white font-sans">jQuery</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor">
</path>
</svg>
<span className="font-medium text-lg text-white font-sans">openstack</span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg text-white tracking-tight font-sans">servicenow</span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl text-white tracking-tight font-sans">paysafe:</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mr-auto ml-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="animate-entry bg-[#080808] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-center relative group overflow-hidden" style={{animationDelay: '100ms', animationPlayState: 'running'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
</div>
<div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-orange-500">
<iconify-icon icon="solar:server-square-bold-duotone" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-manrope font-medium">
            High-Performance API Integration
          </h2>
<p className="text-gray-400 leading-relaxed mb-8 font-sans">
            Connect to the decentralized web with Nebula's unified API surface. Designed for speed, reliability, and
            infinite scale. Our SDKs provide type-safe access.
          </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold-duotone" width="20"></iconify-icon>
<span className="font-sans">Instant global state sync</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold-duotone" width="20"></iconify-icon>
<span className="font-sans">Sub-millisecond latency</span>
</div>
</div>
</div>

<div className="animate-entry bg-[#080808] border border-white/5 rounded-[2rem] p-8 min-h-[500px] relative overflow-hidden flex items-center justify-center" style={{animationDelay: '200ms', animationPlayState: 'running'}}>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 p-8 font-mono text-xs leading-6 text-gray-700 opacity-20 pointer-events-none select-none font-sans">
<span className="text-purple-800 font-sans">import</span> { Nebula }
            <span className="text-purple-800 font-sans">from</span> "@nebula/sdk";
            <span className="text-blue-800 font-sans">const</span> client = <span className="text-blue-800 font-sans">new</span>
            Nebula({
              apiKey: "neb_live_8x...",
              region: "us-west-2"
            });
            <span className="text-blue-800 font-sans">await</span> client.connect();
          </div>

<div className="relative w-[320px] bg-[#0F0F0F]/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="text-xs font-bold text-white uppercase tracking-wider font-sans">System Optimal</span>
</div>
<iconify-icon className="text-gray-500" icon="solar:settings-minimalistic-bold-duotone"></iconify-icon>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-orange-400" icon="solar:bolt-bold-duotone" width="18"></iconify-icon>
<div>
<div className="text-xs font-semibold text-white font-sans">REST Gateway</div>
<div className="text-[10px] text-gray-500 font-sans">us-east-1</div>
</div>
</div>
<span className="text-xs font-mono text-green-400 font-sans">14ms</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:database-bold-duotone" width="18"></iconify-icon>
<div>
<div className="text-xs font-semibold text-white font-sans">GraphQL Node</div>
<div className="text-[10px] text-gray-500 font-sans">eu-central</div>
</div>
</div>
<span className="text-xs font-mono text-green-400 font-sans">22ms</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20 reveal delay-100">
<div className="inline-flex gap-2 btn-gradient uppercase text-nebula-accent text-xs font-medium tracking-widest rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center font-sans">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
            Testimonials
          </div>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-4 font-manrope font-medium">Proven results,
            delivered</h2>
<p className="text-xl text-neutral-400 font-manrope font-medium">See how leading protocols are scaling their
            infrastructure.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 flex flex-col gap-6">

<div className="group relative rounded-[32px] bg-neutral-800 p-[1px] overflow-hidden lg:h-[342px] reveal delay-200" onmousemove="updateSpotlight(event)" style={{-X: '719px', -Y: '165px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.2), transparent 40%)'}}>
</div>
<div className="flex flex-col overflow-hidden bg-[#0a0a0a] h-full rounded-[31px] pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="relative z-10">
<div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-8">
<div className="flex items-start">
<span className="text-7xl tracking-tighter text-white leading-none font-manrope font-medium">14</span>
<span className="text-lg font-medium text-neutral-500 mt-1 font-sans">ms</span>
</div>
<h3 className="text-xl text-neutral-300 max-w-sm leading-relaxed font-manrope font-medium">Global
                      latency reduction on edge nodes.</h3>
</div>
</div>
<div className="relative z-10 flex items-center gap-4 mt-auto">
<img alt="David Chen" className="w-10 h-10 rounded-full grayscale opacity-80 border border-white/10" src="https://i.pravatar.cc/100?img=33"/>
<div>
<div className="text-white font-medium text-sm font-sans">David Chen</div>
<div className="text-neutral-500 text-xs font-mono uppercase font-sans">CTO, Gradient</div>
</div>
<svg className="ml-auto w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="star-circle-bold-duotone" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(38, 38, 38)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#262626" opacity=".5"></path>
<path className="" d="m10.413 8.498l.164-.294C11.21 7.068 11.527 6.5 12 6.5s.79.568 1.423 1.704l.164.294c.18.323.27.484.41.59c.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888c.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59c-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253c-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226c-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504c-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73c-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941c.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225c.14-.107.23-.268.41-.59" fill="#262626"></path>
</svg>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-[32px] bg-neutral-800 p-[1px] overflow-hidden lg:h-[307px] reveal delay-300" onmousemove="updateSpotlight(event)">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.2), transparent 40%)'}}>
</div>
<div className="relative h-full bg-[#0a0a0a] rounded-[31px] p-8 flex flex-col justify-between overflow-hidden">
<div className="relative z-10">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-neutral-400">
<iconify-icon icon="solar:quote-up-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6 font-sans">"The automation tools took our
                      personalization to the end level. Truly effortless."</p>
</div>
<div className="relative z-10 flex items-center gap-3">
<img alt="Sarah K" className="opacity-80 w-8 h-8 object-cover bg-center rounded-full grayscale border border-white/10" src="https://i.pravatar.cc/100?img=11"/>
<div>
<div className="text-white font-medium text-sm font-sans">Sarah K. Hudson</div>
<div className="text-neutral-500 text-xs font-mono uppercase font-sans">Hudson Algo</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-[32px] bg-neutral-200 p-[1px] overflow-hidden lg:h-[307px] reveal delay-400">
<div className="relative h-full bg-white rounded-[31px] p-8 flex flex-col justify-between overflow-hidden">
<div className="relative z-10">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-neutral-400">
<iconify-icon className="text-black" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-900 font-medium text-sm leading-relaxed mb-6 font-sans">"The team nailed our
                      MVP design with a fast turnaround. The final product felt polished."</p>
</div>
<div className="relative z-10 flex items-center gap-3">
<img alt="Jeanne D" className="w-8 h-8 rounded-full border border-neutral-200" src="https://i.pravatar.cc/100?img=5"/>
<div>
<div className="text-neutral-900 font-bold text-sm font-sans">Jeanne Grey</div>
<div className="text-neutral-500 text-xs font-mono uppercase font-sans">Uniswap</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 lg:h-[673px]">

<div className="group relative rounded-[32px] bg-neutral-800 p-[1px] h-full overflow-hidden reveal delay-500" onmousemove="updateSpotlight(event)">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.2), transparent 40%)'}}>
</div>
<div className="relative h-full bg-[#0a0a0a] rounded-[31px] p-10 flex flex-col overflow-hidden">
<div className="relative z-10 mb-12">
<div className="flex items-start mb-8">
<span className="text-7xl tracking-tighter text-white leading-none font-manrope font-medium">12</span>
<span className="leading-none text-7xl text-orange-500 tracking-tighter font-manrope font-medium">x</span>
</div>
<div className="pl-6 border-l-2 border-orange-500">
<h3 className="text-xl text-neutral-200 leading-relaxed font-manrope font-medium">Increase in
                      transaction throughput after migrating to Nebula L2 rollups.</h3>
</div>
</div>
<div className="relative z-10 mt-auto">
<p className="text-lg text-neutral-400 leading-relaxed mb-10 font-sans">"We needed scalable infrastructure
                    that didn't compromise on decentralization. Nebula delivered exactly that. Our gas fees dropped by
                    90%."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-xs text-white font-mono border border-white/5 font-sans">
                      M</div>
<div>
<div className="text-white font-medium text-sm font-sans">Elena Rodriguez</div>
<div className="text-neutral-500 text-xs font-mono uppercase font-sans">Lead Protocol Eng, Monad</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal delay-700">
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-1/3 animate-entry" style={{animationDelay: '100ms', animationPlayState: 'paused'}}>
<h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight font-manrope font-medium">
          Unmatched
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 tracking-tight font-manrope font-medium">Control &amp;</span>
<span className="text-orange-500 tracking-tight font-manrope font-medium">Insight</span>
</h2>
<p className="text-gray-400 text-lg mb-8 font-sans">Monitor your infrastructure on the go with the Nebula mobile
          dashboard.</p>
<button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors font-sans">
<iconify-icon icon="solar:download-bold-duotone" width="16"></iconify-icon> Download App
        </button>
</div>
<div className="lg:w-2/3 w-full relative flex items-center justify-center lg:justify-end animate-entry" style={{animationDelay: '300ms', animationPlayState: 'paused'}}>

<div className="relative z-20 w-[300px] h-[600px] bg-[#050505] rounded-[3rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-30"></div>

<div className="pt-14 px-6 h-full flex flex-col bg-gradient-to-b from-[#0a0a0a] to-black">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-800 border border-white/5"></div>
<div>
<div className="text-[10px] text-gray-400 uppercase font-sans">Welcome back</div>
<div className="text-xs font-bold text-white font-sans">Alex Doe</div>
</div>
</div>
<iconify-icon className="text-gray-400" icon="solar:bell-bold-duotone"></iconify-icon>
</div>

<div className="bg-[#111] border border-white/5 p-4 rounded-2xl mb-4">
<div className="text-xs text-gray-500 mb-1 font-sans">Total Requests</div>
<div className="text-2xl text-white tracking-tight font-manrope font-medium">8.2M</div>
<div className="flex items-center gap-1 mt-2 text-[10px] text-green-400 font-sans">
<iconify-icon icon="solar:graph-up-bold-duotone"></iconify-icon> +12.4%
              </div>
</div>

<div className="flex-1 bg-gradient-to-t from-orange-500/5 to-transparent rounded-2xl border border-white/5 relative p-4 mb-6">
<div className="text-xs text-gray-500 mb-4 font-sans">Latency (24h)</div>
<div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-4 pb-4 gap-1">
<div className="w-2 bg-orange-500/20 h-10 rounded-t-sm"></div>
<div className="w-2 bg-orange-500/30 h-16 rounded-t-sm"></div>
<div className="w-2 bg-orange-500/40 h-12 rounded-t-sm"></div>
<div className="w-2 bg-orange-500/20 h-8 rounded-t-sm"></div>
<div className="w-2 bg-orange-500/50 h-20 rounded-t-sm"></div>
<div className="w-2 bg-orange-500/30 h-14 rounded-t-sm"></div>
<div className="w-2 bg-orange-500 h-24 rounded-t-sm"></div>
<div className="w-2 bg-orange-500/40 h-16 rounded-t-sm"></div>
</div>
</div>

<div className="mt-auto py-6 border-t border-white/5 flex justify-between px-4">
<iconify-icon className="text-white text-xl" icon="solar:home-smile-bold-duotone"></iconify-icon>
<iconify-icon className="text-gray-600 text-xl" icon="solar:wallet-bold-duotone"></iconify-icon>
<iconify-icon className="text-gray-600 text-xl" icon="solar:pie-chart-bold-duotone"></iconify-icon>
<iconify-icon className="text-gray-600 text-xl" icon="solar:user-circle-bold-duotone"></iconify-icon>
</div>
</div>
</div>

<div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-[360px] shadow-2xl z-10 scale-90">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:planet-bold-duotone" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-white font-sans">Mainnet Status</div>
<div className="text-[10px] text-gray-500 flex items-center gap-1 font-sans">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Operational
              </div>
</div>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="bg-[#111] rounded-lg p-3 text-center border border-white/5">
<div className="text-[10px] text-gray-500 mb-1 font-sans">Uptime</div>
<div className="text-sm font-mono text-white font-sans">99.9%</div>
</div>
<div className="bg-[#111] rounded-lg p-3 text-center border border-white/5">
<div className="text-[10px] text-gray-500 mb-1 font-sans">Peers</div>
<div className="text-sm font-mono text-white font-sans">420</div>
</div>
<div className="bg-[#111] rounded-lg p-3 text-center border border-white/5">
<div className="text-[10px] text-gray-500 mb-1 font-sans">Block</div>
<div className="text-sm font-mono text-white font-sans">#92M</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 border-t border-white/5 bg-[#020202]">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16 animate-entry" style={{animationDelay: '100ms', animationPlayState: 'paused'}}>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-4 font-sans">
<iconify-icon icon="solar:star-bold-duotone"></iconify-icon> Testimonials
        </div>
<h2 className="text-4xl md:text-6xl text-white mb-4 tracking-tight font-manrope font-medium">
          Proven results, <span className="text-gray-500 tracking-tight font-manrope font-medium">delivered.</span>
</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="animate-entry bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 relative overflow-hidden group" style={{animationDelay: '200ms', animationPlayState: 'paused'}}>
<div className="absolute top-6 right-6 opacity-20 text-orange-500 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:bolt-circle-bold-duotone" width="48"></iconify-icon>
</div>
<div className="flex items-start gap-1 mb-2">
<span className="text-7xl text-white tracking-tight font-manrope font-medium">14</span>
<span className="text-lg font-semibold text-gray-500 mt-2 font-sans">ms</span>
</div>
<div className="text-sm text-gray-400 mb-8 border-l-2 border-orange-500 pl-3 font-sans">Global latency reduction
              on edge nodes.</div>
<p className="text-lg text-gray-300 font-light leading-relaxed mb-8 font-sans">
              "From branding to execution, the Nebula API suite is flawless. The latency on our oracle updates dropped
              significantly, giving us a competitive edge."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-800 ring-2 ring-black overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?u=12"/>
</div>
<div>
<div className="text-sm font-bold text-white font-sans">David Chen</div>
<div className="text-xs text-gray-500 font-sans">CTO, Chainlink</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="animate-entry bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between" style={{animationDelay: '300ms', animationPlayState: 'paused'}}>
<div>
<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-gray-400">
<iconify-icon icon="solar:heart-bold-duotone" width="20"></iconify-icon>
</div>
<p className="text-xs text-gray-300 leading-relaxed mb-6 font-sans">
                  "The team truly understands user experience and storytelling. It just works."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-800 overflow-hidden"><img className="w-full h-full object-cover grayscale" src="https://i.pravatar.cc/150?u=22"/>
</div>
<div>
<div className="text-xs font-bold text-white font-sans">Stani K.</div>
<div className="text-[10px] text-gray-500 font-sans">Aave</div>
</div>
</div>
</div>

<div className="animate-entry bg-[#E5E5E5] rounded-[2rem] p-8 text-black flex flex-col justify-between" style={{animationDelay: '400ms', animationPlayState: 'paused'}}>
<div>
<div className="w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center mb-4 text-black/60">
<iconify-icon icon="solar:star-bold-duotone" width="20"></iconify-icon>
</div>
<p className="text-xs text-gray-800 font-semibold leading-relaxed mb-6 font-sans">
                  "Nebula nailed our MVP design with incredible attention to detail. Polished."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"><img className="w-full h-full object-cover grayscale" src="https://i.pravatar.cc/150?u=33"/>
</div>
<div>
<div className="text-xs font-bold text-black font-sans">Jeanne G.</div>
<div className="text-[10px] text-gray-600 font-sans">Polkadot</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 animate-entry" style={{animationDelay: '500ms', animationPlayState: 'paused'}}>
<div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 h-full min-h-[400px] relative overflow-hidden flex flex-col">

<div className="relative flex-1 w-full h-full" id="testimonial-carousel">

<div className="carousel-slide flex flex-col h-full justify-between" data-index="0">
<div>
<div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="solar:chat-round-line-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white mb-4 font-manrope font-medium">"Scalability at its finest"</h3>
<p className="text-gray-400 leading-relaxed font-sans">
                    We migrated our entire validator infrastructure to Nebula over a weekend. The transition was
                    seamless, and the uptime has been 100% since day one.
                  </p>
</div>
<div className="flex items-center gap-3 mt-8 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden"><img className="w-full h-full object-cover grayscale" src="https://i.pravatar.cc/150?u=44"/>
</div>
<div>
<div className="text-sm font-bold text-white font-sans">Sarah Jenkins</div>
<div className="text-xs text-gray-500 font-sans">DevRel, Polygon</div>
</div>
</div>
</div>

<div className="carousel-slide flex flex-col h-full justify-between" data-index="1">
<div>
<div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
<iconify-icon icon="solar:documents-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white mb-4 font-manrope font-medium">"World-class documentation"</h3>
<p className="text-gray-400 leading-relaxed font-sans">
                    Finally, a web3 platform that treats developer experience as a first-class citizen. The SDKs are
                    intuitive and the docs are comprehensive.
                  </p>
</div>
<div className="flex items-center gap-3 mt-8 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden"><img className="w-full h-full object-cover grayscale" src="https://i.pravatar.cc/150?u=55"/>
</div>
<div>
<div className="text-sm font-bold text-white font-sans">Mike Ross</div>
<div className="text-xs text-gray-500 font-sans">Engineer, Solana</div>
</div>
</div>
</div>

<div className="carousel-slide flex flex-col h-full justify-between" data-index="2">
<div>
<div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 text-green-400">
<iconify-icon icon="solar:headphones-round-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white mb-4 font-manrope font-medium">"Incredible Support"</h3>
<p className="text-gray-400 leading-relaxed font-sans">
                    When we hit a critical bug during our mainnet launch, the Nebula team was there within minutes. They
                    helped us fix it and ship in record time.
                  </p>
</div>
<div className="flex items-center gap-3 mt-8 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden"><img className="w-full h-full object-cover grayscale" src="https://i.pravatar.cc/150?u=66"/>
</div>
<div>
<div className="text-sm font-bold text-white font-sans">Jessica L.</div>
<div className="text-xs text-gray-500 font-sans">Core Team, Uniswap</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 right-8 flex gap-3 z-20">
<button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors" id="prevBtn">
<iconify-icon icon="solar:arrow-left-bold-duotone"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors" id="nextBtn">
<iconify-icon icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 bg-[#020202]">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 animate-entry" style={{animationDelay: '100ms', animationPlayState: 'paused'}}>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-4 font-sans">
<iconify-icon icon="solar:wallet-bold-duotone"></iconify-icon> Pricing
        </div>
<h2 className="text-4xl md:text-6xl mb-8 text-white tracking-tight font-manrope font-medium">
          Flexible pricing for scaling
          <span className="text-gray-500 tracking-tight font-manrope font-medium">protocols</span>
</h2>
<div className="inline-flex bg-[#0A0A0A] p-1 rounded-full border border-white/10">
<button className="px-6 py-2 rounded-full bg-white/10 text-white text-xs font-semibold shadow-sm font-sans">Monthly</button>
<button className="px-6 py-2 rounded-full text-gray-500 text-xs font-semibold hover:text-gray-300 transition-colors font-sans">Annual</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

<div className="animate-entry bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col min-h-[480px]" style={{animationDelay: '200ms', animationPlayState: 'paused'}}>
<div className="w-12 h-12 bg-[#141414] rounded-2xl flex items-center justify-center mb-8 text-white border border-white/5">
<iconify-icon icon="solar:box-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2 font-sans">Core</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl text-white tracking-tight font-manrope font-medium">$49</span>
<span className="text-sm text-gray-500 font-sans">/mo</span>
</div>
<p className="text-xs text-gray-500 mb-8 font-sans">Best for solo developers.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-gray-400 font-sans">
<iconify-icon className="text-gray-600" icon="solar:check-circle-bold-duotone"></iconify-icon> 100k API
              requests/mo
            </li>
<li className="flex items-center gap-3 text-xs text-gray-400 font-sans">
<iconify-icon className="text-gray-600" icon="solar:check-circle-bold-duotone"></iconify-icon> 3 Shared Nodes
            </li>
<li className="flex items-center gap-3 text-xs text-gray-400 font-sans">
<iconify-icon className="text-gray-600" icon="solar:check-circle-bold-duotone"></iconify-icon> Community
              Support
            </li>
</ul>
<button className="w-full py-3.5 rounded-xl border border-white/10 bg-[#111] text-xs font-semibold hover:bg-white/5 transition-colors text-gray-300 hover:text-white font-sans">Start Building</button>
</div>

<div className="animate-entry bg-[#0A0A0A] border border-orange-500/30 rounded-[2rem] p-8 relative min-h-[520px] flex flex-col z-10 shadow-[0_0_50px_-20px_rgba(249,115,22,0.15)]" style={{animationDelay: '300ms', animationPlayState: 'paused'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-orange-500/20 text-orange-400 text-[9px] font-bold px-4 py-1 rounded-full uppercase tracking-wider font-sans">
            Most Popular</div>
<div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 text-black shadow-lg shadow-orange-500/20">
<iconify-icon icon="solar:rocket-2-bold-duotone" width="24"></iconify-icon>
</div>
<div className="text-[10px] font-bold text-orange-400 tracking-widest uppercase mb-2 font-sans">Growth</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl text-white tracking-tight font-manrope font-medium">$199</span>
<span className="text-sm text-gray-500 font-sans">/mo</span>
</div>
<p className="text-xs text-gray-500 mb-8 font-sans">For scaling dApps.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-gray-300 font-sans">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold-duotone"></iconify-icon> 5M API
              requests/mo
            </li>
<li className="flex items-center gap-3 text-xs text-gray-300 font-sans">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold-duotone"></iconify-icon> 1 Dedicated
              Node
            </li>
<li className="flex items-center gap-3 text-xs text-gray-300 font-sans">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Priority
              Support (24/7)
            </li>
</ul>
<button className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black text-xs font-bold transition-all shadow-lg shadow-orange-500/20 font-sans">Get Started</button>
</div>

<div className="animate-entry bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col min-h-[480px]" style={{animationDelay: '400ms', animationPlayState: 'paused'}}>
<div className="w-12 h-12 bg-[#141414] rounded-2xl flex items-center justify-center mb-8 text-white border border-white/5">
<iconify-icon icon="solar:case-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2 font-sans">Enterprise</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl text-white tracking-tight font-manrope font-medium">Custom</span>
</div>
<p className="text-xs text-gray-500 mb-8 font-sans">For high-volume networks.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-gray-400 font-sans">
<iconify-icon className="text-gray-600" icon="solar:check-circle-bold-duotone"></iconify-icon> Unlimited API
              requests
            </li>
<li className="flex items-center gap-3 text-xs text-gray-400 font-sans">
<iconify-icon className="text-gray-600" icon="solar:check-circle-bold-duotone"></iconify-icon> Custom Node
              Clusters
            </li>
<li className="flex items-center gap-3 text-xs text-gray-400 font-sans">
<iconify-icon className="text-gray-600" icon="solar:check-circle-bold-duotone"></iconify-icon> SLA 99.99%
              Guaranteed
            </li>
</ul>
<button className="w-full py-3.5 rounded-xl border border-white/10 bg-[#111] text-xs font-semibold hover:bg-white/5 transition-colors text-gray-300 hover:text-white font-sans">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 pt-24 pb-12 px-6 bg-[#020202]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-white to-gray-500"></div>
<span className="text-sm font-bold text-white font-sans">Nebula</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed mb-6 font-sans">
            Empowering the next generation of decentralized applications with robust infrastructure.
          </p>
<div className="flex gap-4">
<iconify-icon className="text-gray-500 hover:text-white transition-colors cursor-pointer" icon="simple-icons:x"></iconify-icon>
<iconify-icon className="text-gray-500 hover:text-white transition-colors cursor-pointer" icon="simple-icons:github"></iconify-icon>
<iconify-icon className="text-gray-500 hover:text-white transition-colors cursor-pointer" icon="simple-icons:discord"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 font-sans">Product</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">Features</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">Integrations</a>
</li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 font-sans">Resources</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">Documentation</a>
</li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">API Reference</a>
</li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">Community</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 font-sans">Company</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">About</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">Blog</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors font-sans" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-600 uppercase tracking-widest font-sans">© 2024 Nebula Infrastructure. All
          rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] text-gray-500 uppercase tracking-wide font-sans">All Systems Normal</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
