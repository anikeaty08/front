import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
lucide.createIcons();
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="uFY4IYPs2LU8fWm96Im2"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[60vh] bg-gradient-to-b from-zinc-400/30 via-zinc-500/5 to-transparent z-10"></div>
<div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-48 h-56 bg-zinc-400/10 blur-[100px] rounded-full z-10"></div>
<div className="absolute -top-[50vh] w-[150vw] h-[100vh] rounded-[100%] border border-zinc-500/10 shadow-[0_0_120px_rgba(161,161,170,0.1)]"></div>
<div className="absolute top-[20vh] w-[120vw] h-[120vh] rounded-[100%] border border-zinc-600/5 shadow-[0_0_80px_rgba(161,161,170,0.05)]"></div>
<div className="absolute top-[30%] left-[15%] w-64 h-64 bg-zinc-500/5 blur-[80px] rounded-full"></div>
<div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-zinc-400/5 blur-[100px] rounded-full"></div>
</div>

<header className="fixed flex md:px-12 z-50 pointer-events-auto pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 items-center justify-between">
<a className="flex items-center gap-2.5 text-xl tracking-tight font-medium text-white hover:opacity-80 transition-opacity" href="#">
<iconify-icon className="text-white w-5 h-5 flex items-center justify-center" icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Prince Gaur
        </a>
<nav className="hidden md:flex items-center gap-10 text-base font-normal text-zinc-400">
<a className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors group" href="#work">
                Work <iconify-icon className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors group" href="#about">
                About <iconify-icon className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors group" href="#services">
                Services <iconify-icon className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="text-base font-normal text-zinc-300 hover:text-white transition-colors px-4 py-2 bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-full" href="https://x.com/_GaurPrince" target="_blank">Twitter</a>

<a className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-normal text-zinc-300 tracking-tight bg-[#09090b]/80 backdrop-blur-md border border-zinc-700/80 rounded-full px-5 py-2.5 items-center justify-center text-sm" href="https://www.instagram.com/gaursesunooo/" target="_blank">

<span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
                    Let's Talk
                    <iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>

<span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 rounded-full blur-md">
                    Let's Talk
                    <iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</a>
</div>
</header>

<main className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center pt-32 pb-10 md:pb-16 pointer-events-none">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 pointer-events-auto min-h-[70vh] gap-x-16 gap-y-16 items-center">

<div className="flex flex-col gap-8 lg:pr-8 text-left gap-x-10 gap-y-10">
<h1 className="sm:text-6xl md:text-7xl leading-[1.1] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-5xl font-medium text-white/95 tracking-tight uppercase">
                    Cinematic Films <br/>
                    Powerful AI <br/>
<span className="text-zinc-500">Made With Soul</span>
</h1>
<p className="text-lg text-zinc-400 font-normal leading-relaxed max-w-xl [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
                    Bangalore based video editor, filmmaker &amp; AI creative director focusing on cinematic films, commercial ads &amp; AI video generation.
                </p>
<div className="flex flex-wrap items-center gap-6 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">

<a className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-normal text-zinc-300 tracking-tight bg-zinc-900 border border-zinc-700/80 rounded-full px-8 py-3.5 items-center justify-center text-lg" href="https://www.instagram.com/gaursesunooo/" target="_blank">

<span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
                            Get in Touch
                            <iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>

<span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md">
                            Get in Touch
                            <iconify-icon className="flex items-center justify-center w-5 h-5" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)'}}></iconify-icon>
</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</a>

<div className="hidden md:flex items-center gap-2 text-zinc-500 font-medium text-base ml-2 animate-pulse">
                        View Selected Work
                        <iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-4 pt-2 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex items-start gap-4 text-base font-normal text-zinc-400 group">
<iconify-icon className="w-5 h-5 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className=""><span className="text-zinc-200 font-medium">Video Editing :</span> rhythm and pacing</span>
</div>
<div className="flex items-start gap-4 text-base font-normal text-zinc-400 group">
<iconify-icon className="w-5 h-5 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className=""><span className="text-zinc-200 font-medium">Cinematic :</span> tailored for impact</span>
</div>
<div className="flex items-start gap-4 text-base font-normal text-zinc-400 group">
<iconify-icon className="w-5 h-5 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className=""><span className="text-zinc-200 font-medium">AI Direction :</span> the future of storytelling</span>
</div>
</div>
</div>

<div className="lg:h-[650px] hidden md:block [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate w-full h-[500px] z-50 pointer-events-auto relative">
<a className="glass-card block absolute top-[5%] left-[5%] w-40 lg:w-48 aspect-[4/3] rotate-[-4deg] p-2 md:p-3 z-[61] transition-all duration-500 ease-out hover:scale-105 hover:z-[100] group" href="#">
<div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<img alt="WokTok" className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700" src="https://framerusercontent.com/images/IEZfKYaYlMD4sF92tJYDfU8V63s.png?scale-down-to=512"/>
<div className="bg-gradient-to-tr from-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><iconify-icon className="w-4 h-4 ml-1" icon="solar:play-bold"></iconify-icon></div>
</div>
</div>
<div className="glass-highlight"></div>
</a>
<a className="glass-card block absolute top-[15%] right-[5%] w-48 lg:w-56 aspect-[4/3] rotate-[3deg] p-2 md:p-3 z-[62] transition-all duration-500 ease-out hover:scale-105 hover:z-[100] group" href="#">
<div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<img alt="TDI Ducati" className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700" src="https://framerusercontent.com/images/HH1F2eqLFAHHTRzwkfts5H2fabc.png?scale-down-to=512"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><iconify-icon className="w-4 h-4 ml-1" icon="solar:play-bold"></iconify-icon></div>
</div>
</div>
<div className="glass-highlight"></div>
</a>
<a className="glass-card block lg:w-44 aspect-[4/3] md:p-3 w-36 z-[63] pt-2 pr-2 pb-2 pl-2 absolute top-[40%] left-[0%] rotate-[-2deg] transition-all duration-500 ease-out hover:scale-105 hover:z-[100] group" href="#">
<div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<img alt="AI Speaks" className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700" src="https://framerusercontent.com/images/NDXwOzcYenNx6owjitm5Tas03E.png?scale-down-to=512"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><iconify-icon className="w-4 h-4 ml-1" icon="solar:play-bold"></iconify-icon></div>
</div>
</div>
<div className="glass-highlight"></div>
</a>
<a className="glass-card block absolute top-[35%] right-[15%] w-52 lg:w-64 aspect-[4/3] rotate-[2deg] p-2 md:p-3 z-[64] transition-all duration-500 ease-out hover:scale-105 hover:z-[100] group" href="#">
<div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<img alt="Typography" className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700" src="https://framerusercontent.com/images/SatrHQ6HyTlGnoAw83cqmCiB9GA.png?scale-down-to=512"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><iconify-icon className="w-4 h-4 ml-1" icon="solar:play-bold"></iconify-icon></div>
</div>
</div>
<div className="glass-highlight"></div>
</a>
<a className="glass-card block absolute bottom-[5%] left-[20%] w-44 lg:w-52 aspect-[4/3] rotate-[4deg] p-2 md:p-3 z-[62] transition-all duration-500 ease-out hover:scale-105 hover:z-[100] group" href="#">
<div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<img alt="Hoopr" className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700" src="https://framerusercontent.com/images/fYCqyJi7CLauCqjWqNmIBCzZpVI.png?scale-down-to=512"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><iconify-icon className="w-4 h-4 ml-1" icon="solar:play-bold"></iconify-icon></div>
</div>
</div>
<div className="glass-highlight"></div>
</a>
<a className="glass-card block absolute bottom-[0%] right-[10%] w-36 lg:w-44 aspect-[4/3] rotate-[-3deg] p-2 md:p-3 z-[61] transition-all duration-500 ease-out hover:scale-105 hover:z-[100] group" href="#">
<div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<img alt="Urban Company" className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700" src="https://framerusercontent.com/images/35YrAk8JRcJnUVzJ2PcmQXObno.png?scale-down-to=512"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><iconify-icon className="w-4 h-4 ml-1" icon="solar:play-bold"></iconify-icon></div>
</div>
</div>
<div className="glass-highlight"></div>
</a>
</div>
</div>
</main>

<section className="z-20 container md:px-12 pointer-events-auto mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative" id="services">
<div className="flex flex-col items-center justify-center text-center mb-16 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Services &amp; Expertise
            </h2>
<p className="text-lg font-normal text-zinc-400 max-w-2xl">
                Every frame deserves a soul.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
<div className="relative w-[85%] max-w-[260px] bg-[#09090b] border border-white/10 rounded-xl p-4 shadow-2xl z-10 flex flex-col group-hover:-translate-y-1 transition-transform duration-500">
<div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="scissors" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-zinc-200">Timeline</span>
</div>
<span className="text-[10px] bg-emerald-400/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-400/20 font-medium">Syncing</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-[11px] text-zinc-400 font-medium">Pacing &amp; Rhythm</span>
<i className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-500 delay-100" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="flex items-center justify-between">
<span className="text-[11px] text-zinc-400 font-medium">Seamless Transitions</span>
<i className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-500 delay-200" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="flex items-center justify-between">
<span className="text-[11px] text-zinc-400 font-medium">Narrative Flow</span>
<i className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-500 delay-300" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="flex items-center justify-between">
<span className="text-[11px] text-zinc-400 font-medium">Multi-cam Edit</span>
<i className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-500 delay-400" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">Video Editing</h3>
<p className="text-base font-normal text-zinc-400 leading-relaxed">Precision cutting and pacing to create a compelling narrative flow.</p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
<div className="relative w-[85%] max-w-[260px] flex flex-col gap-2 z-10 group-hover:-translate-y-1 transition-transform duration-500">
<div className="bg-[#09090b] border border-white/10 rounded-xl p-3.5 shadow-2xl relative">
<div className="flex items-center gap-2 mb-3">
<div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center">
<i className="w-3 h-3 text-zinc-300" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="text-[11px] font-medium text-zinc-200">AI Generator</span>
</div>
<div className="bg-[#131316] border border-white/5 rounded-lg p-2.5 flex items-center justify-between text-xs">
<span className="text-zinc-300 font-medium">Prompting scene 04...</span>
<i className="w-3.5 h-3.5 text-zinc-500 animate-spin" data-lucide="loader-2" strokeWidth="2"></i>
</div>
</div>
<div className="flex flex-col items-center justify-center h-4 relative">
<div className="absolute w-px h-full bg-gradient-to-b from-white/20 to-transparent"></div>
<div className="absolute w-2 h-2 rounded-full border border-white/20 bg-[#09090b] shadow-[0_0_8px_rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="bg-[#09090b] border border-white/10 rounded-xl p-3 shadow-2xl flex items-center gap-3 w-4/5 mx-auto relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 -translate-x-full"></div>
<div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-purple-400" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">Output</span>
<span className="text-[11px] font-medium text-zinc-200">High-Fidelity Render</span>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">AI Video Generation</h3>
<p className="text-base font-normal text-zinc-400 leading-relaxed">The future of storytelling, pushing the boundaries of what is possible.</p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
<div className="relative w-[90%] max-w-[280px] bg-[#09090b] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col group-hover:-translate-y-1 transition-transform duration-500">
<div className="grid grid-cols-4 gap-2 p-3 border-b border-white/5 bg-white/[0.02]">
<div className="col-span-2 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Format</div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">4K</div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">RAW</div>
</div>
<div className="flex flex-col p-2 gap-1 bg-[#0e0e11]">
<div className="grid grid-cols-4 gap-2 p-2 items-center hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer">
<div className="col-span-2 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="film" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-zinc-300 truncate">Short Film</span>
</div>
<div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i></div></div>
<div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i></div></div>
</div>
<div className="grid grid-cols-4 gap-2 p-2 items-center hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer bg-white/[0.02]">
<div className="col-span-2 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="video" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-zinc-300 truncate">Commercial</span>
</div>
<div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i></div></div>
<div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i></div></div>
</div>
<div className="grid grid-cols-4 gap-2 p-2 items-center hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer">
<div className="col-span-2 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="monitor-play" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-zinc-300 truncate">Documentary</span>
</div>
<div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i></div></div>
<div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i></div></div>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">Cinematic Filmmaking</h3>
<p className="text-base font-normal text-zinc-400 leading-relaxed">Directing and producing visually stunning pieces tailored for impact.</p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
<div className="relative w-[90%] max-w-[280px] bg-[#09090b] border border-white/10 rounded-xl p-3 shadow-2xl z-10 flex flex-col gap-4 group-hover:-translate-y-1 transition-transform duration-500">
<div className="flex items-center gap-3 p-2 bg-white/[0.03] border border-white/5 rounded-lg">
<div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 font-medium text-xs shadow-inner"><i className="w-4 h-4" data-lucide="palette"></i></div>
<div className="flex flex-col">
<span className="text-[12px] font-medium text-zinc-200">Color Match</span>
<span className="text-[10px] text-zinc-500">Rec.709 Space</span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider px-1">Applied LUTs</div>
<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-2 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-[11px] font-medium text-blue-400 shadow-sm">
                                Teal &amp; Orange
                            </div>
<div className="flex items-center gap-1.5 px-2 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-medium text-zinc-300 shadow-sm">
                                Cinematic Pop
                            </div>
<div className="flex items-center gap-1.5 px-2 py-1.5 border border-dashed border-white/20 rounded-md text-[11px] font-medium text-zinc-500 hover:text-zinc-300 hover:border-white/40 cursor-pointer transition-colors bg-[#0e0e11]">
<i className="w-3 h-3" data-lucide="plus" strokeWidth="2"></i> Add Node
                            </div>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">Color Grading</h3>
<p className="text-base font-normal text-zinc-400 leading-relaxed">Setting the mood and elevating the visuals with professional color science.</p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
<div className="relative w-[85%] max-w-[240px] z-10 flex flex-col group-hover:-translate-y-1 transition-transform duration-500">
<div className="bg-[#09090b] border border-white/10 rounded-xl p-2.5 flex items-center justify-between shadow-lg mb-2 relative z-20 hover:border-white/20 transition-colors cursor-pointer">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[11px] font-bold shadow-inner"><i className="w-3 h-3" data-lucide="layers"></i></div>
<span className="text-xs font-medium text-zinc-200">Keyframe Animation</span>
</div>
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="chevrons-up-down" strokeWidth="1.5"></i>
</div>
<div className="bg-[#0e0e11] border border-white/10 rounded-xl p-1.5 shadow-2xl flex flex-col gap-0.5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-2xl"></div>
<div className="text-[10px] font-medium text-zinc-500 px-2.5 py-2 uppercase tracking-wider relative z-10">Select Layer</div>
<div className="flex items-center gap-2.5 p-2 bg-white/[0.04] rounded-lg border border-white/[0.02] relative z-10">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[11px] font-bold shadow-sm">T</div>
<span className="text-xs font-medium text-zinc-200">Text Title</span>
<i className="w-3.5 h-3.5 text-white ml-auto" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="flex items-center gap-2.5 p-2 hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer relative z-10 group/item">
<div className="w-6 h-6 rounded-md bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 text-[11px] font-bold group-hover/item:text-zinc-200 transition-colors">S</div>
<span className="text-xs font-medium text-zinc-400 group-hover/item:text-zinc-300 transition-colors">Shape Outline</span>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">Motion Graphics</h3>
<p className="text-base font-normal text-zinc-400 leading-relaxed">Dynamic titles, smooth lower thirds, and complex visual effects.</p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
<div className="relative w-[90%] max-w-[280px] bg-[#000] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col font-mono group-hover:-translate-y-1 transition-transform duration-500">
<div className="bg-[#18181b] border-b border-white/5 px-3 py-2 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<span className="text-[10px] text-zinc-500 ml-2">Audio Mixer</span>
</div>
<div className="p-3.5 flex flex-col gap-2 text-[11px] leading-relaxed bg-gradient-to-b from-transparent to-[#18181b]/30">
<div className="flex gap-2 text-zinc-300">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="volume-2"></i>
<span>SFX Layer 1 - Whoosh</span>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="text-emerald-400 font-medium">[-3dB]</span> Compressing peaks
                        </div>
<div className="flex flex-col gap-1.5 mt-1">
<div className="text-zinc-500 flex justify-between">
<span>Master Bus</span>
<span className="text-emerald-400">Peak: -1dB</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-[10%]" style={{animation: 'loadBar 2s ease-out forwards'}}></div>
<style>
                                    @keyframes loadBar {
                                        0% { width: 10%; }
                                        50% { width: 85%; }
                                        100% { width: 95%; }
                                    }
                                </style>
</div>
</div>
<div className="text-emerald-400 mt-1 opacity-0" style={{animation: 'fadeInText 0.5s ease-out 2s forwards'}}>Dolby Atmos mixed</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">Sound Design</h3>
<p className="text-base font-normal text-zinc-400 leading-relaxed">Immersive audioscapes that anchor the emotion of your visual story.</p>
</div>
</div>
</div>
</section>

<section className="relative z-20 container mx-auto px-6 md:px-8 py-24 pointer-events-auto" id="about">
<div className="flex flex-col items-center justify-center text-center mb-16 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="absolute -top-8 -left-4 md:left-12 flex flex-col gap-2 opacity-80">
<div className="w-2 h-6 bg-zinc-400 rounded-full rotate-45 origin-bottom-right"></div>
<div className="w-2 h-4 bg-zinc-400 rounded-full rotate-45 origin-bottom-right ml-4"></div>
<div className="w-2 h-3 bg-zinc-400 rounded-full rotate-45 origin-bottom-right ml-8"></div>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Hello there, I'm Prince Gaur
            </h2>
<p className="text-lg font-normal text-zinc-400 max-w-2xl">
                I don't just edit footage — I give it a soul. Trained at the LIT School, Bangalore.
            </p>
</div>

<div className="w-full max-w-[1300px] mx-auto bg-[#0e0e11]/80 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-1px_1px_rgba(0,0,0,0.3)] flex flex-col md:flex-row overflow-hidden min-h-[850px] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">

<div className="w-full md:w-24 bg-transparent flex md:flex-col items-center justify-between py-6 px-4 border-b md:border-b-0 md:border-r border-white/5 relative z-10">
<div className="flex md:flex-col items-center gap-10 md:gap-12 w-full md:w-auto overflow-x-auto md:overflow-visible no-scrollbar">
<a className="relative w-12 h-12 flex-shrink-0 group rounded-full overflow-hidden border border-white/10" href="#">
<img alt="Prince Gaur" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://framerusercontent.com/images/0uwABNy5TRleiBRoT7V8TZ2M.jpg"/>
</a>
<div className="flex md:flex-col items-center gap-8 text-zinc-500">
<button className="hover:text-white transition-colors"><iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
<button className="hover:text-white transition-colors"><iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
<button className="hover:text-white transition-colors"><iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
<button className="hover:text-white transition-colors relative">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full border border-[#18181b] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
</button>
<button className="hover:text-white transition-colors"><iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:music-note-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
</div>
</div>
<a className="hidden md:flex group relative w-12 h-12 cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden bg-zinc-900 border border-zinc-700/80 rounded-full items-center justify-center text-zinc-300 flex-shrink-0 mt-8" href="mailto:contact@example.com">
<span className="relative z-10 flex items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 rounded-full blur-md">
<iconify-icon className="w-6 h-6 flex items-center justify-center text-white" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>
</div>

<div className="flex-1 flex flex-col lg:flex-row p-6 md:p-8 gap-8 overflow-y-auto dash-scroll">

<div className="flex-1 flex flex-col gap-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Prince Gaur — Ai Creative Director &amp; Editor</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="w-5 h-5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors" icon="solar:clapperboard-edit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Premiere Pro</span>
</div>
<div className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="w-5 h-5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">After Effects</span>
</div>
<div className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="w-5 h-5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors" icon="solar:palette-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">DaVinci Resolve</span>
</div>
<div className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="w-5 h-5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Midjourney AI</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
<div className="w-14 h-14 rounded-xl bg-[#18181b] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center text-zinc-200">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-zinc-400">Years Experience</span>
<span className="text-2xl font-semibold tracking-tight text-white">2+</span>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
<div className="w-14 h-14 rounded-xl bg-[#18181b] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center text-zinc-200">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-zinc-400">Projects Delivered</span>
<span className="text-2xl font-semibold tracking-tight text-white">50+</span>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
<div className="w-14 h-14 rounded-xl bg-[#18181b] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center text-zinc-200">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-zinc-400">Terabytes Rendered</span>
<span className="text-2xl font-semibold tracking-tight text-white">10 TB</span>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
<div className="w-14 h-14 rounded-xl bg-[#18181b] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center text-zinc-200">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-zinc-400">Happy Clients</span>
<span className="text-2xl font-semibold tracking-tight text-white">40+</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-4">

<div className="xl:col-span-2 flex flex-col gap-6">
<h3 className="text-xl font-medium text-white">Selected Projects &amp; Clients</h3>
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<div className="flex gap-8">
<button className="text-sm font-medium text-white relative pb-4 -mb-4 border-b-2 border-white">Brands</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 pb-4 -mb-4 border-b-2 border-transparent">Agencies</button>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-zinc-500">Commercial Ads</span>
<div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
<div className="flex items-center gap-4 w-1/3 min-w-[180px]">
<div className="text-zinc-500"><iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Urban Company</span>
<span className="text-xs text-zinc-500">Brand in Motion</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/3">
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Editing &amp; Color</span>
</div>
</div>
<div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
<div className="flex items-center gap-4 w-1/3 min-w-[180px]">
<div className="text-zinc-500"><iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">WokTok</span>
<span className="text-xs text-zinc-500">Food That Moves You</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/3">
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Editing</span>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-zinc-500">Cinematic &amp; AI Films</span>
<div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
<div className="flex items-center gap-4 w-1/3 min-w-[180px]">
<div className="text-zinc-300"><iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">AI Speaks</span>
<span className="text-xs text-zinc-500">Living Objects</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/3">
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">AI Direction</span>
</div>
</div>
<div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
<div className="flex items-center gap-4 w-1/3 min-w-[180px]">
<div className="text-zinc-500"><iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:film-board-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">TDI Ducati</span>
<span className="text-xs text-zinc-500">After Movie</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/3">
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Editing</span>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-1 flex flex-col justify-between gap-4 bg-white/[0.02] p-6 rounded-3xl border border-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
<div className="">
<h4 className="text-sm font-medium text-zinc-400 mb-2">Output Quality</h4>
<span className="text-3xl font-semibold tracking-tight text-white">4K 60fps</span>
</div>
<div className="flex-1 flex flex-col justify-end mt-4">
<div className="flex justify-end mb-2">
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Render Efficiency</span>
</div>
<div className="h-32 w-full flex items-end justify-between gap-1 pb-2 border-b border-white/5 relative mt-auto">
<div className="absolute left-0 top-0 bottom-2 flex flex-col justify-between text-xs text-zinc-600 w-6">
<span>High</span><span>Med</span><span>Low</span>
</div>
<div className="flex-1 flex items-end justify-between gap-1 ml-8 h-full">
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{height: '20%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{height: '35%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{height: '25%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm opacity-50" style={{height: '45%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{height: '60%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm opacity-70" style={{height: '80%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.4)]" style={{height: '90%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{height: '100%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm opacity-60" style={{height: '60%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{height: '40%'}}></div>
<div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{height: '30%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 container md:px-12 pointer-events-auto mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 relative" id="work">
<div className="flex flex-col [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-center mb-16 relative items-center justify-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Production Packages
        </h2>
<p className="text-lg font-normal text-zinc-400 max-w-2xl">
            Built for brands, musicians and creators who believe every frame deserves a soul.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors relative shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Reels &amp; Shorts</h3>
<p className="text-sm text-zinc-400 mb-6 h-10">High impact vertical storytelling.</p>
<div className="mb-6">
<span className="text-3xl font-medium text-white tracking-tight">Custom</span>
</div>
<a className="w-full px-4 py-2.5 rounded-full border border-zinc-800 bg-transparent text-sm font-medium text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors mb-8 text-center block" href="https://www.instagram.com/gaursesunooo/" target="_blank">
                Let's Talk
            </a>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
                    Vertical formatting
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
                    Fast-paced editing
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
                    Basic color grading
                </div>
</div>
</div>
<div className="flex flex-col bg-[#131316] border border-white/10 rounded-3xl p-8 relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform md:-translate-y-4">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
<div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent"></div>
<div className="flex justify-between items-center mb-2">
<h3 className="text-xl font-medium text-white tracking-tight">Ai Commercial Ads</h3>
<span className="text-[10px] uppercase tracking-wider font-medium bg-white/10 text-zinc-200 px-2 py-1 rounded-full border border-white/5">Popular</span>
</div>
<p className="text-sm text-zinc-400 mb-6 h-10">Premium AI-driven edits for brand campaigns.</p>
<div className="mb-6">
<span className="text-3xl font-medium text-white tracking-tight">Custom</span>
</div>
<a className="w-full px-4 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center block" href="https://www.instagram.com/gaursesunooo/" target="_blank">
                Get a Quote
            </a>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
                    AI Scene Generation
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
                    Custom AI Voiceovers
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
                    Cinematic Color Grading
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
                    Up to 4K Upscaling
                </div>
</div>
</div>
<div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors relative shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Cinematic Films</h3>
<p className="text-sm text-zinc-400 mb-6 h-10">Full scale production &amp; AI direction.</p>
<div className="mb-6">
<span className="text-3xl font-medium text-white tracking-tight">Custom</span>
</div>
<a className="w-full px-4 py-2.5 rounded-full border border-zinc-800 bg-transparent text-sm font-medium text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors mb-8 text-center block" href="mailto:contact@example.com">
                Contact Sales
            </a>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
                    Creative direction
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
                    AI generation &amp; VFX
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
                    Raw footage mastery
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
                    Unlimited revisions
                </div>
</div>
</div>
</div>
</section>

    </>
  );
}
