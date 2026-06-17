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



/* Scroll Animation Logic */
(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
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
}, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // --- View Logic ---
        function setView(view) {
            const container = document.getElementById('projects-container');
            const btnGrid = document.getElementById('btn-grid');
            const btnList = document.getElementById('btn-list');
            const items = document.querySelectorAll('.project-item');
            const imgContainers = document.querySelectorAll('.project-img-container');

            container.classList.add('opacity-0');

            setTimeout(() => {
                if (view === 'list') {
                    container.classList.remove('grid-cols-1', 'lg:grid-cols-2');
                    container.classList.add('flex', 'flex-col', 'gap-12');
                    
                    btnGrid.className = "w-9 h-9 border border-transparent flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-200 transition-all rounded-md";
                    btnList.className = "w-9 h-9 border border-neutral-200 bg-white flex items-center justify-center text-neutral-900 transition-all shadow-sm rounded-md";

                    items.forEach(item => {
                        item.classList.add('lg:flex', 'lg:gap-12', 'lg:items-center');
                        item.classList.remove('lg:mt-24'); 
                    });
                    imgContainers.forEach(div => {
                        div.classList.remove('mb-6');
                        div.classList.add('lg:w-1/2', 'lg:mb-0');
                    });
                } else {
                    container.classList.remove('flex', 'flex-col', 'gap-12');
                    container.classList.add('grid-cols-1', 'lg:grid-cols-2');

                    btnGrid.className = "w-9 h-9 border border-neutral-200 bg-white flex items-center justify-center text-neutral-900 transition-all shadow-sm rounded-md";
                    btnList.className = "w-9 h-9 border border-transparent flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-200 transition-all rounded-md";

                    items.forEach((item, index) => {
                        item.classList.remove('lg:flex', 'lg:gap-12', 'lg:items-center');
                        if (index === 1) item.classList.add('lg:mt-24'); 
                    });
                    imgContainers.forEach(div => {
                        div.classList.add('mb-6');
                        div.classList.remove('lg:w-1/2', 'lg:mb-0');
                    });
                }
                container.classList.remove('opacity-0');
            }, 300);
        }

        // --- Carousel Logic ---
        const cardsData = [
            { 
                title: "Automation", 
                subtitle: "Robotics", 
                img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14422859-2c3e-444b-911b-03aae8342fd5_800w.webp",
                icon: "solar:smart-vacuum-cleaner-bold-duotone"
            },
            { 
                title: "LLM Fine-Tuning", 
                subtitle: "SYS.01", 
                img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e70a40f-3f85-4179-ae7c-ae8ce4783151_800w.webp",
                icon: "solar:cpu-bold-duotone"
            },
            { 
                title: "Governance", 
                subtitle: "Security", 
                img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5323bb36-ee4e-4aa0-a014-ac8c26c0bcf9_800w.webp",
                icon: "solar:shield-check-bold-duotone"
            }
        ];

        let currentIndex = 1;
        let isAnimating = false;

        function updateDOM() {
            const leftIdx = (currentIndex - 1 + cardsData.length) % cardsData.length;
            const centerIdx = currentIndex;
            const rightIdx = (currentIndex + 1) % cardsData.length;

            const leftEl = document.getElementById('card-left');
            const centerEl = document.getElementById('card-center');
            const rightEl = document.getElementById('card-right');

            // Helper
            const apply = (el, idx, isCenter) => {
                const img = el.querySelector('img');
                img.src = cardsData[idx].img;
                
                if(isCenter) {
                    el.querySelector('h3').textContent = cardsData[idx].title;
                    el.querySelector('iconify-icon').setAttribute('icon', cardsData[idx].icon);
                    el.querySelector('.font-mono').textContent = cardsData[idx].subtitle;
                } else {
                    el.querySelector('p').textContent = cardsData[idx].title;
                }
            };

            apply(leftEl, leftIdx, false);
            apply(centerEl, centerIdx, true);
            apply(rightEl, rightIdx, false);
        }

        function rotateCarousel(direction) {
            if (isAnimating) return;
            isAnimating = true;

            const centerEl = document.getElementById('card-center');
            centerEl.style.opacity = '0';
            centerEl.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                if (direction === 'next') {
                    currentIndex = (currentIndex + 1) % cardsData.length;
                } else {
                    currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
                }
                updateDOM();
                centerEl.style.opacity = '1';
                centerEl.style.transform = 'scale(1)';
                isAnimating = false;
            }, 600);
        }
    
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
      

<div className="aura-background-component top-0 w-full h-screen z-10 mix-blend-screen pointer-events-none saturate-0 brightness-50 opacity-40 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-blue-400">
<iconify-icon className="" icon="solar:atom-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white font-dm-sans" style={{}}>Borealis</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-white/60 hover:text-white transition-colors font-dm-sans" href="#" style={{}}>Expertise</a>
<a className="text-xs text-white/60 hover:text-white transition-colors font-dm-sans" href="#" style={{}}>Platform</a>
<a className="text-xs text-white/60 hover:text-white transition-colors font-dm-sans" href="#" style={{}}>Research</a>
</div>
<div className="flex items-center gap-4">
<button className="text-xs text-white/60 hover:text-white transition-colors hidden sm:block font-dm-sans" style={{}}>Login</button>
<button className="btn-beam px-5 py-2 text-white text-xs font-medium rounded-full font-dm-sans" style={{}}>
                Book Consultation
            </button>
<button className="md:hidden text-white/80">
<iconify-icon icon="solar:hamburger-menu-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="w-full">

<section className="relative pt-40 pb-32 px-6 lg:px-12 border-b border-white/5 bg-[#030303] overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">

<div className="flex-1 flex flex-col justify-between min-h-[500px]">
<div className="">
<div className="flex items-center gap-4 mb-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="section-num section-num-dark font-dm-sans" style={{}}>01</span>
<div className="h-px w-12 bg-white/10"></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-dm-sans" style={{}}>AI Consultancy • Measurable Outcomes</span>
</div>
<h1 className="lg:text-8xl leading-[0.9] [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-6xl italic text-white tracking-tight font-newsreader mb-8">Ship AI that <span className="italic text-white/30 font-newsreader">moves metrics</span></h1>
<p className="text-lg text-white/50 max-w-md leading-relaxed font-light mb-12 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-dm-sans" style={{}}>
                            Turn fragmented data into decision-grade intelligence. We identify the highest-ROI use cases, deliver secure production deployments, and improve throughput, quality, and cost in weeks—not quarters.
                        </p>
</div>
<div className="flex items-center gap-8 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-black flex items-center justify-center relative z-30">
<iconify-icon className="text-white/80" icon="simple-icons:openai" width="16"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-black flex items-center justify-center relative z-20">
<iconify-icon className="text-white/80" icon="simple-icons:anthropic" width="16"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-black flex items-center justify-center relative z-10">
<iconify-icon className="text-white/80" icon="simple-icons:nvidia" width="16"></iconify-icon>
</div>
</div>
<span className="text-xs text-white/40 font-dm-sans" style={{}}>Trusted by industry leaders</span>
</div>
</div>

<div className="lg:w-[45%] relative group [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-white/30"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-white/30"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-white/30"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-white/30"></div>
<div className="relative h-[600px] w-full border border-white/10 bg-[#050505] overflow-hidden">
<div className="absolute top-4 left-4 z-20 flex gap-2">
<iconify-icon className="text-white/30" icon="solar:maximize-square-minimalistic-bold-duotone" width="20"></iconify-icon>
</div>
<img alt="Abstract Data" className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2504ba93-81a5-445e-87d3-b8011b43b9e5_1600w.webp"/>

<div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/5 bg-[#030303]/90 backdrop-blur-sm">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl text-white mb-1 tracking-tight font-dm-sans" style={{}}>Predictive Logistics</h3>
<p className="text-xs text-white/40 font-dm-sans" style={{}}>Latency reduced by 40%</p>
</div>
<div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer rounded-full">
<iconify-icon icon="solar:arrow-right-up-bold-duotone" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-neutral-50 relative border-b border-neutral-200">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex justify-between items-end mb-16 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="section-num section-num-light font-dm-sans" style={{}}>02</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-dm-sans" style={{}}>Deployments</span>
</div>
<h2 className="text-4xl lg:text-5xl text-neutral-900 tracking-tight font-newsreader italic" style={{}}>
                            Selected <span className="text-neutral-400 font-newsreader italic" style={{}}>Work</span>
</h2>
</div>
<div className="flex gap-2">
<button className="w-9 h-9 border border-neutral-200 bg-white flex items-center justify-center text-neutral-900 transition-all shadow-sm rounded-md" id="btn-grid" onclick="setView('grid')">
<iconify-icon icon="solar:gallery-grid-bold-duotone" width="18"></iconify-icon>
</button>
<button className="w-9 h-9 border border-transparent flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-200 transition-all rounded-md" id="btn-list" onclick="setView('list')">
<iconify-icon icon="solar:list-bold-duotone" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16" id="projects-container">

<div className="group cursor-pointer project-item [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="relative aspect-[4/3] overflow-hidden border border-neutral-200 bg-white mb-6 project-img-container shadow-sm">
<img alt="Fintech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44fb44b0-bf29-4fdf-bbba-1468abf1d04e_1600w.webp"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-neutral-100 px-3 py-1 text-[10px] uppercase tracking-widest text-neutral-900 font-dm-sans" style={{}}>Fintech</div>
</div>
<div className="flex justify-between items-start project-details border-t border-neutral-200 pt-4">
<div>
<h3 className="text-xl text-neutral-900 mb-1 font-medium tracking-tight font-dm-sans" style={{}}>Project Zenith</h3>
<p className="text-xs text-neutral-500 font-mono font-dm-sans" style={{}}>Zurich, CH</p>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-bold-duotone" width="24"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer project-item lg:mt-24 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="relative aspect-[4/3] overflow-hidden border border-neutral-200 bg-white mb-6 project-img-container shadow-sm">
<img alt="Biotech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb9b217e-05c2-4e6e-8f35-3fcb7f5b5e0c_1600w.webp"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-neutral-100 px-3 py-1 text-[10px] uppercase tracking-widest text-neutral-900 font-dm-sans" style={{}}>Biotech</div>
</div>
<div className="flex justify-between items-start project-details border-t border-neutral-200 pt-4">
<div>
<h3 className="text-xl text-neutral-900 mb-1 font-medium tracking-tight font-dm-sans" style={{}}>Genome Archive</h3>
<p className="text-xs text-neutral-500 font-mono font-dm-sans" style={{}}>Cambridge, MA</p>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-bold-duotone" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 border-b border-white/5 bg-[#050505] overflow-hidden relative">

<div className="absolute top-0 inset-x-0 h-px bg-white/5"></div>
<div className="absolute bottom-0 inset-x-0 h-px bg-white/5"></div>
<div className="max-w-7xl mx-auto flex items-center justify-between mb-20 relative z-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="">
<div className="flex items-center gap-3 mb-6">
<span className="section-num section-num-dark font-dm-sans" style={{}}>03</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-dm-sans" style={{}}>Capability</span>
</div>
<h2 className="text-4xl lg:text-5xl text-white tracking-tight font-newsreader italic" style={{}}>Strategic <span className="text-white/40 font-newsreader italic" style={{}}>Models</span></h2>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-colors" onclick="rotateCarousel('prev')">
<iconify-icon icon="solar:arrow-left-bold-duotone" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-colors" onclick="rotateCarousel('next')">
<iconify-icon icon="solar:arrow-right-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="max-w-7xl mx-auto flex h-[500px] relative items-center justify-center w-full [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll" id="carousel-container">

<div className="absolute top-1/2 left-0 right-0 h-px bg-white/5"></div>

<div className="carousel-card absolute w-[350px] h-[450px] bg-[#0A0A0A] border border-white/10 opacity-40 scale-90 -translate-x-[60%] z-10 p-1" id="card-left">
<div className="w-full h-full relative overflow-hidden bg-black">
<img alt="" className="w-full h-full object-cover opacity-30 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71205a4d-4eb6-446d-bbb8-158b16d694bf_800w.webp"/>
<div className="absolute bottom-6 left-6">
<p className="text-white text-xl font-serif font-dm-sans" style={{}}>Automation</p>
</div>
</div>
</div>

<div className="carousel-card absolute w-[350px] h-[450px] bg-[#0A0A0A] border border-white/20 scale-100 z-20 p-1 shadow-2xl shadow-black" id="card-center">
<div className="w-full h-full relative overflow-hidden bg-black group">
<img alt="" className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-40 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecf9b4d6-7ce1-4e55-b443-05aefdfcff2b_800w.webp"/>
<div className="absolute inset-0 flex flex-col justify-between p-8">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="solar:cpu-bold-duotone" width="32"></iconify-icon>
<span className="text-[10px] font-mono text-white/50 font-dm-sans" style={{}}>SYS.01</span>
</div>
<div>
<h3 className="text-2xl text-white mb-2 tracking-tight font-newsreader italic" style={{}}>LLM Fine-Tuning</h3>
<p className="text-sm text-white/50 leading-relaxed font-dm-sans" style={{}}>Bespoke model training on proprietary datasets for maximum relevance and security.</p>
</div>
</div>
</div>
</div>

<div className="carousel-card absolute w-[350px] h-[450px] bg-[#0A0A0A] border border-white/10 opacity-40 scale-90 translate-x-[60%] z-10 p-1" id="card-right">
<div className="w-full h-full relative overflow-hidden bg-black">
<img alt="" className="w-full h-full object-cover opacity-30 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4db3f641-d7ca-45f4-8fd5-871aef618472_800w.webp"/>
<div className="absolute bottom-6 left-6">
<p className="text-white text-xl font-serif font-dm-sans" style={{}}>Governance</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#080808] border-b border-white/5 text-white">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-12 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="section-num section-num-dark font-dm-sans" style={{}}>04</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-dm-sans" style={{}}>Perspectives</span>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between h-[300px] hover:border-white/20 transition-colors [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div>
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
</div>
<p className="text-lg font-light text-white/80 leading-relaxed font-dm-sans" style={{}}>"The level of strategic insight Borealis provides is unmatched. They don't just implement models; they architect intelligence."</p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-serif italic text-white/60 font-dm-sans" style={{}}>ES</div>
<div>
<h4 className="text-sm font-medium text-white font-dm-sans" style={{}}>Elena S.</h4>
<p className="text-xs text-white/40 font-dm-sans" style={{}}>CTO, Vertex Financial</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between h-[300px] hover:border-white/20 transition-colors [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="">
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
</div>
<p className="text-lg font-light text-white/80 leading-relaxed font-dm-sans" style={{}}>"We reduced our data processing latency by 85% within three months. The ROI was immediate and substantial."</p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-serif italic text-white/60 font-dm-sans" style={{}}>MK</div>
<div className="">
<h4 className="text-sm font-medium text-white font-dm-sans" style={{}}>Marcus K.</h4>
<p className="text-xs text-white/40 font-dm-sans" style={{}}>VP Engineering, Nebulon</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between h-[300px] hover:border-white/20 transition-colors [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div>
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="16"></iconify-icon>
</div>
<p className="text-lg font-light text-white/80 leading-relaxed font-dm-sans" style={{}}>"Security is paramount for us. Borealis delivered an air-gapped solution that outperformed our wildest expectations."</p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-serif italic text-white/60 font-dm-sans" style={{}}>JL</div>
<div>
<h4 className="text-sm font-medium text-white font-dm-sans" style={{}}>James L.</h4>
<p className="text-xs text-white/40 font-dm-sans" style={{}}>Director, HealthCorps</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-white relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
<div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex items-center gap-3 mb-6">
<span className="section-num section-num-light font-dm-sans" style={{}}>05</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-dm-sans" style={{}}>Recognition</span>
</div>
<h2 className="text-4xl text-neutral-900 tracking-tight mb-8 font-newsreader italic" style={{}}>
                        Industry <span className="text-neutral-400 font-newsreader italic" style={{}}>Standards</span>
</h2>
<p className="text-neutral-500 text-sm max-w-sm leading-relaxed mb-12 font-dm-sans" style={{}}>
                        Setting the benchmark for ethical AI deployment and computational efficiency across the Fortune 500.
                    </p>

<div className="grid grid-cols-2 gap-8">
<div className="flex hover:bg-neutral-50 transition-colors group border-neutral-100 border pt-6 pr-6 pb-6 pl-6 items-center justify-center">
<svg className="group-hover:text-neutral-900 transition-colors w-[96px] h-[36px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="techcrunch" height="36" strokeWidth="2" style={{color: 'rgb(23, 23, 23)', width: '96px', height: '36px'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg"><path d="M0 6v4h4v8h4v-8h4V6Zm12 4v8h12v-4h-8v-4zm4 0h8V6h-8z" fill="currentColor"></path></svg>
</div>
<div className="flex hover:bg-neutral-50 transition-colors group border-neutral-100 border pt-6 pr-6 pb-6 pl-6 items-center justify-center">
<svg className="group-hover:text-neutral-900 transition-colors w-[96px] h-[36px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="adidas" height="36" strokeWidth="2" style={{color: 'rgb(23, 23, 23)', width: '96px', height: '36px'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg"><path d="m24 19.535l-8.697-15.07l-4.659 2.687l7.145 12.383Zm-8.287 0L9.969 9.59L5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z" fill="#171717"></path></svg>
</div>
<div className="border border-neutral-100 p-6 flex items-center justify-center hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" height="36" icon="simple-icons:forbes" width="96"></iconify-icon>
</div>
<div className="border border-neutral-100 p-6 flex items-center justify-center hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" height="36" icon="simple-icons:bloomberg" width="96"></iconify-icon>
</div>
</div>
</div>

<div className="relative border border-neutral-200 p-8 bg-neutral-50 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">

<div className="absolute -top-1 -left-1 w-2 h-2 text-neutral-300"><iconify-icon icon="solar:add-square-bold-duotone" width="10"></iconify-icon></div>
<div className="absolute -top-1 -right-1 w-2 h-2 text-neutral-300"><iconify-icon icon="solar:add-square-bold-duotone" width="10"></iconify-icon></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 text-neutral-300"><iconify-icon icon="solar:add-square-bold-duotone" width="10"></iconify-icon></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 text-neutral-300"><iconify-icon icon="solar:add-square-bold-duotone" width="10"></iconify-icon></div>
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="opacity-80 text-blue-500" icon="solar:trophy-bold-duotone" width="32"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between">
<div className="">
<span className="text-xs font-mono mb-2 block text-blue-600 font-dm-sans" style={{}}>## EFFICIENCY_METRIC</span>
<h3 className="text-2xl text-neutral-900 mb-6 tracking-tight font-newsreader italic" style={{}}>Compute Optimization</h3>
</div>
<div className="space-y-8">
<div className="flex items-end gap-4 border-b border-neutral-200 pb-4">
<span className="text-6xl text-neutral-900 tracking-tighter font-newsreader italic" style={{}}>400<span className="text-2xl text-neutral-400 font-newsreader italic" style={{}}>%</span></span>
<span className="text-sm text-neutral-500 mb-2 font-dm-sans" style={{}}>Gain in processing speed</span>
</div>
<div className="flex items-end gap-4 border-b border-neutral-200 pb-4">
<span className="text-6xl text-neutral-900 tracking-tighter font-newsreader italic" style={{}}>8<span className="text-2xl text-neutral-400 font-newsreader italic" style={{}}>PB</span></span>
<span className="text-sm text-neutral-500 mb-2 font-dm-sans" style={{}}>Data analyzed daily</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-[#020202] border-t border-b border-white/5 relative overflow-hidden">

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none">
<div className="w-[600px] h-[600px] border border-white/10 rounded-full flex items-center justify-center">
<div className="w-[400px] h-[400px] border border-white/10 rounded-full"></div>
</div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="text-5xl lg:text-7xl text-white tracking-tight mb-8 font-newsreader italic" style={{}}>
                    Ready to <span className="text-blue-400 font-newsreader italic" style={{}}>ascend?</span>
</h2>
<p className="text-xl text-white/50 mb-12 max-w-xl mx-auto font-light font-dm-sans" style={{}}>
                    Join the forward-thinking enterprises building their future on Borealis infrastructure.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto font-dm-sans" style={{}}>
                        Schedule Demo
                    </button>
<button className="text-white border border-white/20 px-8 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<span className="font-dm-sans" style={{}}>Read Documentation</span>
<iconify-icon icon="solar:arrow-right-up-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 lg:px-12 bg-[#020202] relative">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="max-w-md">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-blue-400">
<iconify-icon icon="solar:atom-bold-duotone" width="14"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-white font-dm-sans" style={{}}>Borealis</span>
</div>
<h3 className="text-2xl text-white mb-8 font-newsreader italic" style={{}}>
                            Start the conversation. 
                            <span className="text-white/40 font-newsreader italic" style={{}}>Build the future.</span>
</h3>
<div className="flex gap-4 border-b border-white/20 pb-2 max-w-xs">
<input className="bg-transparent border-none p-0 text-white focus:outline-none w-full placeholder:text-white/20" placeholder="Enter your email" type="email"/>
<button className="text-white hover:text-white/60 transition-colors">
<iconify-icon icon="solar:arrow-right-bold-duotone" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-16 text-sm">
<ul className="space-y-4">
<li className="text-white/40 font-mono text-xs uppercase tracking-widest mb-4 font-dm-sans" style={{}}>Platform</li>
<li><a className="text-white hover:text-white/60 transition-colors font-dm-sans" href="#" style={{}}>Intelligence</a></li>
<li><a className="text-white hover:text-white/60 transition-colors font-dm-sans" href="#" style={{}}>Security</a></li>
<li><a className="text-white hover:text-white/60 transition-colors font-dm-sans" href="#" style={{}}>API</a></li>
</ul>
<ul className="space-y-4">
<li className="text-white/40 font-mono text-xs uppercase tracking-widest mb-4 font-dm-sans" style={{}}>Company</li>
<li><a className="text-white hover:text-white/60 transition-colors font-dm-sans" href="#" style={{}}>About</a></li>
<li><a className="text-white hover:text-white/60 transition-colors font-dm-sans" href="#" style={{}}>Careers</a></li>
<li><a className="text-white hover:text-white/60 transition-colors font-dm-sans" href="#" style={{}}>Blog</a></li>
</ul>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<p className="font-dm-sans" style={{}}>© 2024 Borealis Intelligence Inc.</p>
<div className="flex gap-6">
<iconify-icon className="hover:text-white transition-colors cursor-pointer" icon="simple-icons:x" width="14"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors cursor-pointer" icon="simple-icons:linkedin" width="14"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors cursor-pointer" icon="simple-icons:github" width="14"></iconify-icon>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
