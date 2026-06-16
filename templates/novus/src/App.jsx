import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
// Interactive Stats Logic
const stats = document.querySelectorAll('.stat-item');
const mainImage = document.getElementById('main-image');
// Image data map
const images = {
1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/960d4d9c-2584-47bb-9b1c-418e0d46e730_800w.webp", // Dark/Oval
2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7a2dd9-504b-4462-9e25-8f9322d8a718_1600w.webp", // Concrete Detail
3: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37e53262-839c-4555-837c-45698b65611b_800w.webp" // Abstract
};
stats.forEach(stat => {
stat.addEventListener('click', () => {
// Remove active class from all
stats.forEach(s => s.classList.remove('active'));
// Add active to clicked
stat.classList.add('active');
// Get image ID
const imgId = stat.dataset.imgId;
// Fade out image
mainImage.classList.add('fade-out');
setTimeout(() => {
// Change src
mainImage.src = images[imgId];
// Fade in
mainImage.onload = () => {
mainImage.classList.remove('fade-out');
};
}, 500); // Match CSS transition time
});
});
});
})();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 mix-blend-screen saturate-0 brightness-50 absolute opacity-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div></div>

<nav className="w-full px-6 py-6 lg:px-12 flex justify-between items-center relative z-50 [animation:fadeSlideIn_0.8s_ease-out_0s_both] animate-on-scroll">

<div className="beam-border-h"></div>
<div className="flex gap-12 gap-x-12 gap-y-12 items-center">

<div className="flex items-center gap-3 text-white hover:text-[#FACC15] transition-colors cursor-pointer">
<svg className="w-[24px] h-[24px]" height="24" strokeWidth="2" style={{color: 'currentColor', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0" fill="currentColor" opacity=".5"></path><path d="M18.521 4.418L4.418 18.521a10 10 0 0 0 1.06 1.061L19.583 5.479a10 10 0 0 0-1.06-1.06" fill="currentColor"></path></svg>
</div>

<div className="hidden md:block h-5 w-[1px] bg-neutral-800"></div>

<button className="hidden md:flex items-center gap-2 text-lg font-normal text-neutral-400 hover:text-white transition-colors group">
                Expertise
                <svg className="text-xl opacity-70 group-hover:opacity-100 transition-all" data-icon-set="solar" data-solar="alt-arrow-down-bold-duotone" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" fill="currentColor"></path><path d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>

<div className="flex items-center gap-6">
<span className="text-sm font-medium tracking-widest uppercase hidden sm:block text-neutral-400">Get in touch</span>
<button className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#FACC15] transition-colors duration-300">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="arrow-right-up-bold-duotone" height="24" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path>
</svg>
</button>
</div>
</nav>

<main className="flex-grow grid grid-cols-1 lg:px-12 lg:grid-cols-12 my-32 pb-12 relative gap-x-8 gap-y-8">

<div className="lg:col-span-5 flex flex-col lg:pt-10 z-20 relative justify-center">
<h1 className="text-6xl lg:text-[5rem] leading-[0.9] font-normal tracking-tighter text-white mb-6 uppercase [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
                Shaping<br/>
                Void<br/>
                Into<br/>
                Matter
            </h1>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed mb-12 font-light [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
                Constructing the ethereal through parametric design and brutalist principles. We redefine the skyline one artifact at a time.
            </p>
<div className="flex flex-col items-start gap-3 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">

<a className="btn-wrapper" href="#" style={{-DotSize: '6px', -LineWeight: '1px', -LineDistance: '0.8rem 1rem', -AnimationSpeed: '0.35s', -DotColor: '#FACC15', -LineColor: '#FACC15', -GridColor: '#fff3', position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: 'auto', height: 'auto', padding: 'var(--line-distance)', userSelect: 'none'}}>
<div className="line horizontal top"></div>
<div className="line vertical right"></div>
<div className="line horizontal bottom"></div>
<div className="line vertical left"></div>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<button className="btn">
<span className="btn-text tracking-tight">Start Creating</span>
<svg className="btn-svg" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</a>
<span className="text-xs text-neutral-500 uppercase tracking-widest pl-4 opacity-70">View Showreel (01:20)</span>
</div>
</div>

<div className="lg:col-span-4 relative flex items-center justify-center py-20 lg:py-0 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">

<div className="absolute inset-0 grid-bg opacity-100 z-0 mx-[-2rem] mask-image-linear-gradient(to bottom, black, transparent)"></div>

<div className="absolute top-1/4 right-0 text-neutral-700 text-2xl font-light z-10">+</div>
<div className="absolute bottom-20 left-0 text-neutral-700 text-2xl font-light z-10">+</div>

<div className="relative z-10 w-full aspect-[3/4] rounded-[50%] overflow-hidden shadow-2xl border border-white/10 group">
<img alt="Architectural Detail" className="group-hover:grayscale-0 opacity-90 w-full h-full object-cover grayscale scale-110" id="main-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5f2766e-81d8-4036-baed-e613aa1fcca4_1600w.webp"/>
</div>
</div>

<div className="lg:col-span-3 flex flex-col relative z-20 pt-10 pl-6 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="beam-border-v"></div>
<div className="flex-1 flex flex-col justify-between h-full pb-10">

<div className="stat-item mt-10" data-img-id="1">
<span className="stat-value text-7xl font-light tracking-tighter text-neutral-700 block transition-colors">142</span>
<span className="text-sm text-neutral-500 uppercase tracking-widest mt-2 block pl-2 group-hover:text-white">Global Awards</span>
</div>

<div className="stat-item py-12 border-t border-white/5 border-dashed" data-img-id="2">
<span className="stat-value text-7xl font-light tracking-tighter text-neutral-700 block transition-colors">08</span>
<span className="text-sm text-neutral-500 uppercase tracking-widest mt-2 block pl-2 group-hover:text-white">Regional Offices</span>
</div>

<div className="stat-item border-t border-white/5 border-dashed pt-12" data-img-id="3">
<div className="flex items-start gap-4 mb-4">
<div className="relative group cursor-pointer">
<img alt="Lead Architect" className="w-14 h-14 rounded-full border border-neutral-800 object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63a6abea-fa7c-44e7-b134-9d70239f3d3f_320w.webp"/>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FACC15] rounded-full flex items-center justify-center z-0 translate-x-full -ml-6 transition-transform group-hover:translate-x-[110%]">
<svg className="text-black text-xl" data-icon-set="solar" data-solar="arrow-right-up-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>
<p className="text-base font-normal text-neutral-300 uppercase leading-relaxed tracking-tight max-w-[200px] mt-6 pointer-events-none">
                        Redefining urban landscapes since 2024
                    </p>
</div>
</div>
</div>
</main>

<section className="relative w-full border-t border-white/5 bg-[#080808]">
<div className="w-full px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden">

<div className="lg:col-span-3 relative h-48 lg:h-full w-full [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">

<div className="w-full h-full overflow-hidden relative opacity-50 hover:opacity-100 transition-opacity duration-700 border border-white/5">
<img alt="Architecture Detail" className="w-full h-full object-cover lg:absolute lg:inset-0 grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7a2dd9-504b-4462-9e25-8f9322d8a718_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-50"></div>
</div>
</div>

<div className="lg:col-span-5 space-y-8 relative z-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:pl-8">
<p className="text-lg lg:text-xl text-neutral-400 leading-relaxed font-light">
                    Novus Arc creates environments that challenge perception. We fuse <span className="text-white font-medium">brutalist principles</span> with organic fluidity to build the monuments of tomorrow.
                </p>
<div className="flex gap-4">
<span className="inline-block border border-white/10 text-neutral-400 text-xs font-medium py-2 px-4 rounded-full uppercase tracking-wider hover:border-[#FACC15] hover:text-[#FACC15] transition-colors cursor-default">
                        #Minimalism
                    </span>
<span className="inline-block border border-white/10 text-neutral-400 text-xs font-medium py-2 px-4 rounded-full uppercase tracking-wider hover:border-[#FACC15] hover:text-[#FACC15] transition-colors cursor-default">
                        #Futurism
                    </span>
</div>
</div>

<div className="lg:col-span-4 relative z-10 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:text-right">
<h2 className="text-3xl lg:text-4xl font-light text-white tracking-tight leading-tight">
                    Architecture for thepost-digital era.
                </h2>
</div>
</div><section className="w-full bg-[#050505] relative py-24 lg:py-32 border-t border-white/5 overflow-hidden">

<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px'}}>
</div>
<div className="w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">

<div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none flex items-center justify-center [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">

<div className="relative w-64 h-64 sm:w-80 sm:h-80">

<div className="absolute inset-0 z-0 translate-y-24 transition-transform duration-700 hover:translate-y-28 group">
<div className="w-full h-full border border-white/10 bg-white/[0.02] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-[#FACC15]/30"></div>

<div className="absolute top-1/2 -right-12 sm:-right-24 -translate-y-1/2 translate-x-4 flex items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-300">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">04. Fabricate</span>
<div className="w-8 h-4 bg-neutral-800 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-green-500 rounded-full"></div>
</div>
</div>
<div className="w-12 h-[1px] bg-white/10 origin-left -rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-10 translate-y-12 transition-transform duration-700 hover:translate-y-14 group">
<div className="w-full h-full border border-white/10 bg-white/[0.04] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-[#FACC15]/30"></div>

<div className="absolute top-1/2 -left-12 sm:-left-24 -translate-y-1/2 -translate-x-4 flex flex-row-reverse items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-200">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<div className="w-8 h-4 bg-neutral-800 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-white/20 rounded-full"></div>
</div>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">03. Engineer</span>
</div>
<div className="w-12 h-[1px] bg-white/10 origin-right rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-20 translate-y-0 transition-transform duration-700 hover:-translate-y-2 group">
<div className="w-full h-full border border-white/10 bg-white/[0.06] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-[#FACC15]/30"></div>

<div className="absolute top-1/2 -right-12 sm:-right-24 -translate-y-1/2 translate-x-4 flex items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-100">
<div className="px-3 flex items-center gap-2 shadow-xl">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">02. Simulate</span>
<div className="w-8 h-4 bg-[#FACC15] rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-black rounded-full"></div>
</div>
</div>
<div className="w-12 h-[1px] bg-white/10 origin-left -rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-30 -translate-y-12 transition-transform duration-700 hover:-translate-y-16 group">
<div className="w-full h-full border border-white/10 bg-white/[0.08] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-[#FACC15]/50 hover:bg-white/10"></div>

<div className="absolute top-1/2 -left-12 sm:-left-24 -translate-y-1/2 -translate-x-4 flex flex-row-reverse items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<div className="w-8 h-4 bg-[#FACC15] rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-black rounded-full"></div>
</div>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">01. Analyze</span>
</div>
<div className="w-12 h-[1px] bg-white/10 origin-right rotate-[25deg]"></div>
</div>
</div>

<div className="absolute left-1/2 top-[-20%] bottom-[-20%] w-px border-l border-dashed border-white/20 -translate-x-1/2 z-[-1]"></div>
</div>
</div>

<div className="flex flex-col justify-center [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<h2 className="text-4xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
                From Algorithm
                <span className="text-neutral-500">to Artifact</span>
</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-16 max-w-md font-light">
                We strip away the unnecessary, focusing on structural purity and parametric efficiency to deliver timeless monuments.
            </p>

<div className="relative space-y-12 pl-2">

<div className="bg-gradient-to-b from-[#FACC15] via-white/10 to-transparent opacity-30 w-[1px] absolute top-4 bottom-4 left-[27px]"></div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15] group-hover:text-[#FACC15] transition-all duration-300">
<iconify-icon icon="solar:magnifer-bold-duotone" width="20"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-xl text-white font-normal mb-2 group-hover:text-[#FACC15] transition-colors">Site &amp; Context Analysis</h3>
<p className="text-neutral-500 font-light leading-relaxed">
                            We decode the genius loci, analyzing environmental data and urban flows to establish the project's constraints.
                        </p>
</div>
</div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15] group-hover:text-[#FACC15] transition-all duration-300">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="20"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-xl text-white font-normal mb-2 group-hover:text-[#FACC15] transition-colors">Parametric Synthesis</h3>
<p className="text-neutral-500 font-light leading-relaxed">
                            Algorithms generate optimized form factors, balancing structural integrity with our brutalist aesthetic code.
                        </p>
</div>
</div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15] group-hover:text-[#FACC15] transition-all duration-300">
<iconify-icon icon="solar:ruler-pen-bold-duotone" width="20"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-xl text-white font-normal mb-2 group-hover:text-[#FACC15] transition-colors">BIM Integration</h3>
<p className="text-neutral-500 font-light leading-relaxed">
                            Every joint and surface is modeled with sub-millimeter precision, ensuring the digital vision translates perfectly.
                        </p>
</div>
</div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15] group-hover:text-[#FACC15] transition-all duration-300">
<iconify-icon icon="solar:buildings-bold-duotone" width="20"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-xl text-white font-normal mb-2 group-hover:text-[#FACC15] transition-colors">Robotic Fabrication</h3>
<p className="text-neutral-500 font-light leading-relaxed">
                            Automated construction methods realize the design, turning digital void into concrete matter.
                        </p>
</div>
</div>
</div>

<div className="mt-16 pt-10 border-t border-white/5">
<p className="text-xs uppercase tracking-widest text-neutral-600 mb-6">Powered by</p>
<div className="flex flex-wrap gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:autodesk" width="24"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:rhinoceros" width="28"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:unrealengine" width="24"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:blender" width="24"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="cib:adobe-creative-cloud" width="26"></iconify-icon>
</div>
</div>
</div>
</div><section className="overflow-hidden lg:py-32 bg-[#050505] w-full z-10 border-white/5 border-t my-12 pt-24 pb-24 relative">

<div className="w-full px-6 lg:px-12 flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-5xl lg:text-7xl font-normal text-white tracking-tighter leading-[0.9] uppercase">
            System 2.0.
            <span className="text-neutral-500">New Logic.</span>
</h2>
<a className="group flex items-center gap-4 text-xs font-medium text-white hover:text-[#FACC15] transition-colors uppercase tracking-widest pb-2 border-b border-white/10 hover:border-[#FACC15]" href="#">
            Explore Interface
            <iconify-icon icon="solar:arrow-right-up-bold-duotone" width="12"></iconify-icon>
</a>
</div>

<div className="w-full overflow-x-auto pb-12 px-6 lg:px-12 flex gap-6 snap-x snap-mandatory scrollbar-hide [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>

<div className="snap-center shrink-0 w-[300px] md:w-[360px] group cursor-default">
<div className="aspect-[4/5] overflow-hidden transition-all duration-500 hover:border-white/20 bg-[#080808] w-full border-white/10 border relative">

<div className="opacity-20 mix-blend-screen absolute top-0 right-0 bottom-0 left-0">
<img alt="Abstract" className="filter contrast-125 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92f79571-c9ab-4ba6-827b-8845c8060486_800w.webp"/>
</div>

<div className="flex flex-col gap-4 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex gap-4">
<div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white shadow-2xl hover:bg-white/10 transition-colors">
<iconify-icon className="opacity-70" icon="solar:shield-check-bold-duotone" width="24"></iconify-icon>
</div>
<div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white shadow-2xl hover:bg-white/10 transition-colors">
<iconify-icon className="opacity-70" icon="solar:layers-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
</div>
<div className="w-48 h-12 bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-between px-3 shadow-2xl z-10">
<div className="w-8 h-8 bg-white/10 flex items-center justify-center text-white">
<iconify-icon className="" icon="solar:moon-bold-duotone" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-300 uppercase tracking-wider mr-auto ml-3">Analysis</span>
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-bold-duotone"></iconify-icon>
</div>
</div>

<div className="pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="mt-6 border-l border-white/10 pl-4">
<h3 className="text-sm text-white font-medium uppercase tracking-widest mb-2">Liquid Interface</h3>
<p className="text-neutral-500 font-light text-xs leading-relaxed max-w-[90%]">
                    Refracts project data in real time. Dynamically adapting workflow.
                </p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[360px] group cursor-default">
<div className="w-full aspect-[4/5] bg-[#080808] border border-white/10 overflow-hidden relative flex items-center justify-center transition-all duration-500 hover:border-white/20">

<div className="w-[70%] h-[85%] border border-white/10 bg-[#030303] overflow-hidden relative shadow-2xl">
<img alt="Building Render" className="opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b89a5fb-be9e-41e8-8e44-6630812764c9_800w.webp"/>

<div className="absolute top-6 left-0 w-full flex flex-col items-center z-10 px-6">
<div className="w-full flex justify-between items-center border-b border-white/5 pb-2 mb-4">
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest">Site 04</span>
<div className="w-1 h-1 bg-[#FACC15]"></div>
</div>
<span className="text-4xl font-light text-white tracking-tighter">09:41</span>
</div>
<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
</div>
</div>
<div className="mt-6 border-l border-white/10 pl-4">
<h3 className="text-sm text-white font-medium uppercase tracking-widest mb-2">Immersive Twin</h3>
<p className="text-neutral-500 font-light text-xs leading-relaxed max-w-[90%]">
                    Synchronizes with physical site. Structural subject in view.
                </p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[360px] group cursor-default">
<div className="w-full aspect-[4/5] bg-[#080808] border border-white/10 overflow-hidden relative flex flex-col items-center justify-center transition-all duration-500 hover:border-white/20">

<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative w-[85%] bg-[#050505] border border-white/10 p-6 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-1">
<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#FACC15]"></div>
<span className="text-[10px] font-bold text-white tracking-widest uppercase">Active</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono">02m ago</span>
</div>
<p className="text-sm text-white font-normal mb-2 tracking-tight">+1 (408) Load Shift</p>
<p className="text-[10px] text-neutral-500 leading-relaxed font-mono">
                        &gt; REPORTING NOMINAL STRESS LEVELS
                        &gt; SECTOR 07 OK
                        &gt; NO ANOMALIES
                    </p>
</div>
</div>
<div className="mt-6 border-l border-white/10 pl-4">
<h3 className="text-sm text-white font-medium uppercase tracking-widest mb-2">Auto Screening</h3>
<p className="text-neutral-500 font-light text-xs leading-relaxed max-w-[90%]">
                    Filters noise from sensor data. Detects critical load shifts.
                </p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[360px] group cursor-default">
<div className="w-full aspect-[4/5] bg-[#080808] border border-white/10 overflow-hidden relative flex flex-col items-center justify-center transition-all duration-500 hover:border-white/20">

<div className="relative w-full px-8">
<div className="text-center mb-8">
<h4 className="text-white font-normal uppercase tracking-widest text-xs">Remote Deploy</h4>
<div className="h-px w-12 bg-white/10 mx-auto my-3"></div>
<p className="text-[10px] text-neutral-500 font-mono">FLEET STATUS: READY</p>
</div>
<div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 max-w-[200px] mx-auto">

<div className="aspect-square bg-[#050505] hover:bg-white/5 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer group/btn">
<iconify-icon className="text-neutral-500 group-hover/btn:text-white text-xl transition-colors" icon="solar:satellite-bold-duotone"></iconify-icon>
<span className="text-[9px] text-neutral-600 font-medium uppercase tracking-widest">Scan</span>
</div>

<div className="aspect-square bg-[#050505] hover:bg-white/5 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer group/btn">
<iconify-icon className="text-neutral-500 group-hover/btn:text-white text-xl transition-colors" icon="solar:videocamera-record-bold-duotone"></iconify-icon>
<span className="text-[9px] text-neutral-600 font-medium uppercase tracking-widest">Feed</span>
</div>

<div className="aspect-square bg-[#050505] hover:bg-white/5 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer group/btn">
<iconify-icon className="text-neutral-500 group-hover/btn:text-white text-xl transition-colors" icon="solar:menu-dots-bold-duotone"></iconify-icon>
<span className="text-[9px] text-neutral-600 font-medium uppercase tracking-widest">Logs</span>
</div>

<div className="aspect-square bg-[#050505] hover:bg-red-900/10 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer group/btn">
<iconify-icon className="text-neutral-500 group-hover/btn:text-red-500 text-xl transition-colors" icon="solar:stop-bold-duotone"></iconify-icon>
<span className="text-[9px] text-neutral-600 group-hover/btn:text-red-500 font-medium uppercase tracking-widest">Halt</span>
</div>
</div>
</div>
</div>
<div className="mt-6 border-l border-white/10 pl-4">
<h3 className="text-sm text-white font-medium uppercase tracking-widest mb-2">Site Assist</h3>
<p className="text-neutral-500 font-light text-xs leading-relaxed max-w-[90%]">
                    Operational continuity. Automatic robotics deployment.
                </p>
</div>
</div>
</div>

<div className="absolute bottom-12 right-6 lg:right-12 flex gap-px border border-white/10 bg-[#080808]">
<button className="w-12 h-12 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 transition-all border-r border-white/10">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</section><footer className="w-full bg-[#050505] relative pt-32 pb-0 overflow-hidden">

<div className="absolute top-12 left-0 right-0 flex justify-center z-30 px-6">
<div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-full py-3 pl-6 pr-3 flex items-center gap-4 shadow-2xl max-w-lg w-full group transition-all hover:border-white/20 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<span className="text-neutral-500 text-sm font-light font-mono hidden sm:block">Redefining spaces, one voxel at a time.</span>
<input className="bg-transparent border-none outline-none text-white text-sm w-full sm:w-auto placeholder:text-neutral-700 font-mono" placeholder="Enter email for access..." type="text"/>
<button className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#FACC15] transition-colors shrink-0">
<iconify-icon icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</div>

<div className="max-w-[90%] mx-auto flex items-end gap-4 relative z-10 translate-y-2 opacity-50 hover:opacity-100 transition-opacity duration-500">

<div className="h-16 w-48 bg-[#080808] border-t border-x border-white/10 rounded-t-2xl flex items-center justify-center gap-2 relative z-20">
<iconify-icon className="text-white" icon="solar:code-square-bold-duotone"></iconify-icon>
<span className="text-xs font-semibold text-white uppercase tracking-widest">System</span>
</div>

<div className="h-12 w-40 bg-[#050505] border-t border-x border-white/5 rounded-t-xl flex items-center justify-center gap-2 relative z-10 hover:bg-[#080808] hover:h-14 transition-all cursor-pointer group">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:users-group-rounded-bold-duotone"></iconify-icon>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest group-hover:text-white transition-colors">Studio</span>
</div>

<div className="h-12 w-40 bg-[#050505] border-t border-x border-white/5 rounded-t-xl flex items-center justify-center gap-2 relative z-10 hover:bg-[#080808] hover:h-14 transition-all cursor-pointer group">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:document-text-bold-duotone"></iconify-icon>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest group-hover:text-white transition-colors">Legal</span>
</div>
</div>

<div className="w-full bg-[#080808] border-t border-white/10 rounded-t-[3rem] relative z-20 overflow-hidden">
<div className="w-full px-6 lg:px-12 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-20">

<div className="lg:col-span-7 flex flex-col justify-center">
<h2 className="text-6xl lg:text-[7rem] leading-[0.85] font-normal text-white tracking-tighter mb-12">
                    Systematic.
                    <span className="text-neutral-600">Parametric.</span>
                    Adaptive.
                </h2>

<div className="flex flex-wrap gap-8 items-center mt-auto opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:framer" width="24"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:github" width="24"></iconify-icon>
<div className="h-6 w-px bg-white/10"></div>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:x" width="22"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:discord" width="24"></iconify-icon>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end items-center">
<div className="w-full max-w-md bg-[#FACC15] p-8 lg:p-12 rounded-xl relative overflow-hidden group rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">

<iconify-icon className="absolute -right-8 -top-8 text-black/10 text-[12rem] rotate-12 group-hover:rotate-45 transition-transform duration-700" icon="solar:settings-bold-duotone"></iconify-icon>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-black tracking-tight leading-tight mb-6">
                            Optimized structures,at every node.
                        </h3>
<p className="text-black/70 text-sm font-medium leading-relaxed mb-10 font-mono">
                            // Where every constraint is met with calculation and every blueprint is a revolution.
                        </p>
<div className="flex items-center justify-between border-t border-black/10 pt-6">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-black/50 font-semibold">Status</span>
<span className="text-xs font-semibold text-black mt-1">Operational</span>
</div>
<button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform group/btn">
<iconify-icon className="group-hover/btn:rotate-45 transition-transform" icon="solar:arrow-right-up-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden pointer-events-none select-none pt-20">
<h1 className="text-[22vw] leading-none font-bold text-white/5 text-center -mb-12 lg:-mb-24 tracking-tighter font-space-grotesk">
                NOVUS
            </h1>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080808] to-transparent"></div>
</div>

<div className="absolute bottom-6 w-full flex justify-center z-30">
<p className="text-[10px] text-neutral-700 font-mono uppercase tracking-widest hover:text-neutral-500 transition-colors cursor-default">© 2024 Novus Arc Systems. All rights reserved.</p>
</div>
</div>
</footer>
</section>
</section>

    </>
  );
}
