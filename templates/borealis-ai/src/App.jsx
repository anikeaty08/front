import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
},
{ threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
);
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      function toggleMenu() {
        const menu = document.getElementById("mobile-menu");
        if (menu.classList.contains("translate-x-full")) {
          menu.classList.remove("translate-x-full");
        } else {
          menu.classList.add("translate-x-full");
        }
      }

      function setView(view) {
        const container = document.getElementById("projects-container");
        const btnGrid = document.getElementById("btn-grid");
        const btnList = document.getElementById("btn-list");
        const items = document.querySelectorAll(".project-item");
        const imgContainers = document.querySelectorAll(".project-img-container");

        container.classList.add("opacity-0");

        setTimeout(() => {
          if (view === "list") {
            container.classList.remove("grid-cols-1", "lg:grid-cols-2");
            container.classList.add("flex", "flex-col", "gap-8");

            btnGrid.className =
              "w-10 h-10 rounded-lg border border-[#D4D4D8] flex items-center justify-center hover:bg-[#18181B] hover:text-white bg-white text-[#18181B] transition-colors shadow-sm";
            btnList.className =
              "w-10 h-10 rounded-lg border border-[#E4E4E7] flex items-center justify-center bg-[#18181B] text-white transition-colors shadow-sm";

            items.forEach((item) => {
              item.classList.add("lg:flex", "lg:gap-8", "lg:items-center");
              item.classList.remove("lg:mt-24");
            });
            imgContainers.forEach((div) => {
              div.classList.remove("mb-6");
              div.classList.add("lg:w-1/3", "lg:mb-0");
            });
          } else {
            container.classList.remove("flex", "flex-col", "gap-8");
            container.classList.add("grid-cols-1", "lg:grid-cols-2");

            btnGrid.className =
              "w-10 h-10 rounded-lg border border-[#E4E4E7] flex items-center justify-center bg-[#18181B] text-white transition-colors shadow-sm";
            btnList.className =
              "w-10 h-10 rounded-lg border border-[#D4D4D8] flex items-center justify-center hover:bg-[#18181B] hover:text-white bg-white text-[#18181B] transition-colors shadow-sm";

            items.forEach((item, index) => {
              item.classList.remove("lg:flex", "lg:gap-8", "lg:items-center");
              if (index === 1) item.classList.add("lg:mt-24");
            });
            imgContainers.forEach((div) => {
              div.classList.add("mb-6");
              div.classList.remove("lg:w-1/3", "lg:mb-0");
            });
          }

          container.classList.remove("opacity-0");

          if (window.initInViewAnimations) {
            window.initInViewAnimations();
          }
        }, 300);
      }

      const cards = [
        { title: "Data Ingestion", img: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=800&auto=format&fit=crop", category: "Phase I" },
        { title: "Model Training", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop", category: "Phase II" },
        { title: "Deployment", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", category: "Phase III" }
      ];

      let currentIndex = 1;
      let isAnimating = false;

      function updateDOM() {
        const leftIdx = (currentIndex - 1 + cards.length) % cards.length;
        const centerIdx = currentIndex;
        const rightIdx = (currentIndex + 1) % cards.length;

        const leftEl = document.getElementById("card-left");
        const centerEl = document.getElementById("card-center");
        const rightEl = document.getElementById("card-right");

        const setContent = (el, idx, isCenter) => {
          const img = el.querySelector("img");
          img.src = cards[idx].img;
          if (isCenter) {
            el.querySelector("h3").textContent = cards[idx].title;
            el.querySelector("span").textContent = cards[idx].category;
          } else {
            el.querySelector("p").textContent = cards[idx].title;
          }
        };

        setContent(leftEl, leftIdx, false);
        setContent(centerEl, centerIdx, true);
        setContent(rightEl, rightIdx, false);
      }

      function rotateCarousel(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const centerEl = document.getElementById("card-center");

        centerEl.style.opacity = "0";
        centerEl.style.transform = "scale(0.95)";

        setTimeout(() => {
          if (direction === "next") {
            currentIndex = (currentIndex + 1) % cards.length;
          } else {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
          }

          updateDOM();

          centerEl.style.opacity = "1";
          centerEl.style.transform = "scale(1)";

          isAnimating = false;
        }, 600);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute saturate-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="oJJV0b99N8Anzws8nSO8"></div>

</div></div>
<div id="wrapper">
<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>
<style>
        .gradient-blur {
          position: fixed;
          z-index: 30;
          inset: 0 0 auto 0;
          height: 12%;
          pointer-events: none;
        }
        .gradient-blur > div,
        .gradient-blur::before,
        .gradient-blur::after {
          position: absolute;
          inset: 0;
        }
        .gradient-blur::before {
          content: "";
          z-index: 1;
          backdrop-filter: blur(0.5px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 0%,
            rgba(5, 5, 5, 1) 12.5%,
            rgba(5, 5, 5, 1) 25%,
            rgba(0, 0, 0, 0) 37.5%
          );
        }
        .gradient-blur > div:nth-of-type(1) {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 12.5%,
            rgba(5, 5, 5, 1) 25%,
            rgba(5, 5, 5, 1) 37.5%,
            rgba(0, 0, 0, 0) 50%
          );
        }
        .gradient-blur > div:nth-of-type(2) {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 25%,
            rgba(5, 5, 5, 1) 37.5%,
            rgba(5, 5, 5, 1) 50%,
            rgba(0, 0, 0, 0) 62.5%
          );
        }
        .gradient-blur > div:nth-of-type(3) {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 37.5%,
            rgba(5, 5, 5, 1) 50%,
            rgba(5, 5, 5, 1) 62.5%,
            rgba(0, 0, 0, 0) 75%
          );
        }
        .gradient-blur > div:nth-of-type(4) {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 50%,
            rgba(5, 5, 5, 1) 62.5%,
            rgba(5, 5, 5, 1) 75%,
            rgba(0, 0, 0, 0) 87.5%
          );
        }
        .gradient-blur > div:nth-of-type(5) {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 62.5%,
            rgba(5, 5, 5, 1) 75%,
            rgba(5, 5, 5, 1) 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .gradient-blur > div:nth-of-type(6) {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 75%,
            rgba(5, 5, 5, 1) 87.5%,
            rgba(5, 5, 5, 1) 100%
          );
        }
        .gradient-blur::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(5, 5, 5, 1) 100%);
        }
      </style>
</div>
<div className="fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-[60] transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center gap-8" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-[#E4E4E7]" onclick="toggleMenu()">
<iconify-icon className="text-3xl" icon="solar:close-circle-bold-duotone"></iconify-icon>
</button>
<a className="text-3xl text-[#E4E4E7] hover:text-white font-medium tracking-tight" href="#">Solutions</a>
<a className="text-3xl text-[#E4E4E7] hover:text-white font-medium tracking-tight" href="#">Research</a>
<a className="text-3xl text-[#E4E4E7] hover:text-white font-medium tracking-tight" href="#">Company</a>
</div>
<nav className="fixed lg:px-12 flex z-50 bg-gradient-to-b from-black/20 to-transparent mix-blend-exclusion w-full pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-center justify-between">
<div className="flex group cursor-pointer animate-on-scroll [animation:animationIn_0.8s_ease-out_0.05s_both] gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-xl text-[#E4E4E7]" icon="solar:star-fall-bold-duotone"></iconify-icon>
</div>
<span className="text-lg font-semibold text-[#E4E4E7] tracking-tight">Borealis<span className="text-[#A1A1AA] font-serif-italic font-normal ml-1">AI</span></span>
</div>
<div className="hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] md:flex bg-neutral-950 border-white/10 border rounded-xl pt-1 pr-1 pb-1 pl-1 shadow-inner backdrop-blur-md gap-x-1 gap-y-1 items-center">
<a className="transition-all text-xs font-medium text-white bg-white/10 border-white/5 border rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-sm" href="#">Solutions</a>
<a className="hover:text-[#E4E4E7] hover:bg-white/5 transition-all text-xs font-medium text-slate-50 rounded-lg pt-2 pr-5 pb-2 pl-5" href="#">Research</a>
<a className="hover:text-[#E4E4E7] hover:bg-white/5 transition-all text-xs font-medium text-slate-50 rounded-lg px-5 py-2" href="#">Insights</a>
</div>
<div className="flex items-center gap-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">
<button className="relative p-2 text-[#A1A1AA] hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-bold-duotone"></iconify-icon>
</button>
<button className="hidden md:flex px-4 py-2 bg-white text-black rounded-lg text-xs font-semibold hover:bg-gray-200 transition-colors">
          Book Consultation
        </button>
<button className="md:hidden p-2 text-[#E4E4E7]" onclick="toggleMenu()">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-bold-duotone"></iconify-icon>
</button>
</div>
</nav>
<section className="flex flex-col lg:flex-row lg:px-12 lg:gap-20 border-white/5 border-b pt-32 pr-6 pb-20 pl-6 relative gap-x-12 gap-y-12">
<div className="flex-1 flex flex-col z-10 justify-center">
<div className="flex lg:mt-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.05s_both] mt-4 mb-10 gap-x-4 gap-y-4 items-center">
<span className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]">Series A</span>
<div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent"></div>
<span className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]">Neural &amp; Symbolic</span>
</div>
<h1 className="text-5xl lg:text-7xl leading-[1.05] mb-8 text-[#E4E4E7] font-medium tracking-tight animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
    Intelligence beyond <br/>
<span className="font-serif-italic text-white/40 font-light">algorithms</span>
</h1>
<p className="text-lg text-[#A1A1AA] max-w-md leading-relaxed font-light mb-12 border-l border-white/10 pl-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">
    Redefining enterprise capabilities through bespoke neural architectures. We bridge the gap between theoretical
    models and revenue-generating reality.
  </p>
<div className="mt-auto grid grid-cols-3 gap-4">
<div className="group cursor-pointer animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="aspect-square rounded-xl overflow-hidden mb-3 relative border border-white/10 bg-[#111]">
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
<img alt="Data" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab00173f-36af-4fac-b520-c2492f3d8db9_800w.webp"/>
</div>
<p className="text-xs text-[#E4E4E7] font-medium">Predictive Core</p>
<p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">v.2.4</p>
</div>
<div className="group cursor-pointer animate-on-scroll [animation:animationIn_0.8s_ease-out_0.25s_both]">
<div className="aspect-square rounded-xl overflow-hidden mb-3 relative border border-white/10 bg-[#111]">
<div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>
<img alt="Network" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91eb3e35-da41-4e14-936d-223af7b74ef5_800w.webp"/>
</div>
<p className="text-xs text-[#E4E4E7] font-medium">Vision Labs</p>
<p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">Analysis</p>
</div>
</div>
</div>
<div className="lg:w-[50%] flex flex-col z-10 lg:mt-0 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both] mt-12 relative justify-center">
<div className="overflow-hidden group w-full h-[600px] border-white/10 border rounded-3xl relative shadow-2xl">
<img alt="Abstract AI" className="transition-transform duration-[1.5s] group-hover:scale-105 w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2d788c8-7a85-45a5-b298-a7fb2ce26c66_1600w.webp"/>
<div className="bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex gap-3 items-center">
<div className="flex -space-x-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-white/80">System Operational</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-10">
<div className="flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-widest bg-blue-500/20 text-blue-200 border border-blue-500/30 backdrop-blur-md">Case Study</span>
</div>
<h2 className="text-3xl text-[#E4E4E7] mb-2 font-medium tracking-tight">FinTech Risk Engine</h2>
<p className="text-[#A1A1AA] text-sm font-light max-w-[280px]">
                  Real-time anomaly detection processing $4B daily volume with 99.9% accuracy.
                </p>
</div>
<button className="px-5 py-2.5 bg-[#E4E4E7] text-[#050505] text-xs font-semibold rounded-lg hover:bg-white transition-colors flex items-center gap-2">
                Read Report
                <iconify-icon className="text-sm" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#F4F4F5] text-[#18181B] py-24 px-6 lg:px-12">
<div className="flex flex-col lg:flex-row justify-between items-end mb-16">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.05s_both]">
<h2 className="lg:text-5xl leading-none text-4xl font-medium text-[#18181B] mb-4 tracking-tight">Enterprise Solutions</h2>
<p className="text-[#52525B] max-w-sm text-sm leading-relaxed">Scalable intelligence frameworks designed for high-compliance industries.</p>
</div>
<div className="flex gap-4 mt-8 lg:mt-0 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<button className="w-10 h-10 rounded-lg border border-[#E4E4E7] flex items-center justify-center bg-[#18181B] text-white transition-colors shadow-sm" id="btn-grid" onclick="setView('grid')">
<iconify-icon className="text-lg" icon="solar:widget-4-bold-duotone"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-lg border border-[#D4D4D8] flex items-center justify-center hover:bg-[#18181B] hover:text-white bg-white text-[#18181B] transition-colors shadow-sm" id="btn-list" onclick="setView('list')">
<iconify-icon className="text-lg" icon="solar:list-bold-duotone"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="projects-container">
<div className="group cursor-pointer project-item animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-white border border-gray-200 project-img-container shadow-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent opacity-50"></div>
<img alt="Analysis" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e13f2ca-7986-4882-9d8c-9df127af1ae2_1600w.webp"/>
<div className="absolute top-4 right-4 px-2.5 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest rounded-md text-[#18181B] border border-gray-100">
              Automated Reasoning
            </div>
</div>
<div className="flex justify-between items-start border-t border-[#E4E4E7] pt-5 project-details">
<div>
<h3 className="text-xl text-[#18181B] mb-1 group-hover:text-blue-600 transition-colors font-medium tracking-tight">
                Supply Chain Optimization
              </h3>
<p className="text-xs text-[#71717A] font-mono uppercase tracking-wider">Logistics • Global</p>
</div>
<div className="text-right">
<iconify-icon className="text-[#D4D4D8] group-hover:text-blue-600 transition-colors text-xl" icon="solar:arrow-up-right-bold-duotone"></iconify-icon>
</div>
</div>
</div>
<div className="group cursor-pointer lg:mt-24 project-item animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">
<div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-white border border-gray-200 project-img-container shadow-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent opacity-50"></div>
<img alt="Bio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e8aafa6-ac2a-49d2-9210-669e81a00e21_1600w.webp"/>
<div className="absolute top-4 right-4 px-2.5 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest rounded-md text-[#18181B] border border-gray-100">
              Bio-Informatics
            </div>
</div>
<div className="flex justify-between items-start border-t border-[#E4E4E7] pt-5 project-details">
<div className="">
<h3 className="text-xl text-[#18181B] mb-1 group-hover:text-blue-600 transition-colors font-medium tracking-tight">Diagnostic Neural Net</h3>
<p className="text-xs text-[#71717A] font-mono uppercase tracking-wider">Healthcare • Geneva</p>
</div>
<div className="text-right">
<iconify-icon className="text-[#D4D4D8] group-hover:text-blue-600 transition-colors text-xl" icon="solar:arrow-up-right-bold-duotone"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden flex flex-col text-[#E4E4E7] bg-[#0A0A0A] pt-32 pr-0 pb-32 pl-0 relative justify-center border-t border-white/5">
<div className="px-6 lg:px-12 mb-12 flex justify-between items-end">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.05s_both]">
<span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            The Borealis Engine
          </span>
<h2 className="text-3xl lg:text-4xl text-[#E4E4E7] font-medium tracking-tight">Active Deployments</h2>
</div>
<div className="flex gap-2 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<button className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center text-[#E4E4E7]" onclick="rotateCarousel('prev')">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-bold-duotone"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center text-[#E4E4E7]" onclick="rotateCarousel('next')">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-visible animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both] w-full h-[500px] relative items-center justify-center" id="carousel-container">
<div className="carousel-card absolute w-[300px] lg:w-[400px] h-[450px] bg-[#121212] rounded-2xl shadow-2xl opacity-40 scale-90 -translate-x-[60%] z-10 overflow-hidden cursor-pointer border border-white/5" id="card-left" onclick="rotateCarousel('prev')">
<img alt="Plan" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e479cd92-3772-4be2-b51d-187b9c01f221_800w.webp"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
<p className="text-white font-serif-italic text-2xl">Data Ingestion</p>
</div>
</div>
<div className="carousel-card absolute w-[300px] lg:w-[400px] h-[450px] bg-[#121212] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] scale-100 z-20 overflow-hidden border border-white/10" id="card-center">
<img alt="Plan" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f78131e-65e9-49b2-aa1f-ccc33e28df9f_800w.webp"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-black/80 backdrop-blur-md border-t border-white/10">
<div className="flex justify-between items-center">
<div className="">
<span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1 block">Phase II</span>
<h3 className="text-2xl text-white font-medium tracking-tight">Model Training</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white" icon="solar:cpu-bold-duotone"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="carousel-card absolute w-[300px] lg:w-[400px] h-[450px] bg-[#121212] rounded-2xl shadow-2xl opacity-40 scale-90 translate-x-[60%] z-10 overflow-hidden cursor-pointer border border-white/5" id="card-right" onclick="rotateCarousel('next')">
<img alt="Plan" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bd4da16-0bd4-4a47-a860-e20148b111c5_800w.webp"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
<p className="text-white font-serif-italic text-2xl">Deployment</p>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
</div>
</section>
<section className="lg:px-12 text-[#18181B] bg-white border-b border-gray-100 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.05s_both]">
<span className="text-xs font-bold uppercase tracking-widest text-[#71717A] mb-4 flex items-center gap-2">
<iconify-icon className="text-lg text-[#18181B]" icon="solar:chart-square-bold-duotone"></iconify-icon>
            Performance Metrics
          </span>
<h2 className="text-4xl lg:text-5xl mb-6 text-[#18181B] leading-[1.05] font-medium tracking-tight">
            Quantifiable <span className="font-serif-italic font-normal text-gray-400">superiority</span>
</h2>
<p className="text-[#52525B] text-lg leading-relaxed font-light mb-12 max-w-md">
            We don't just build models; we impact the bottom line. Our algorithms are rigorously tested against legacy systems.
          </p>
<div className="w-full">
<div className="flex justify-between text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
<span>Sector</span>
<span>Optimization</span>
</div>
<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#18181B] font-semibold text-lg">
<iconify-icon className="text-xl text-gray-400" icon="solar:wallet-money-bold-duotone"></iconify-icon>
<span>FinTech</span>
</div>
<span className="text-xs text-[#71717A]">Fraud detection latency</span>
</div>
<span className="font-mono text-sm text-green-600 bg-green-50 px-2 py-1 rounded">-400ms</span>
</div>
<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#18181B] font-semibold text-lg">
<iconify-icon className="text-xl text-gray-400" icon="solar:bolt-bold-duotone"></iconify-icon>
<span>Energy</span>
</div>
<span className="text-xs text-[#71717A]">Grid load balancing efficiency</span>
</div>
<span className="font-mono text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+18%</span>
</div>
<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#18181B] font-semibold text-lg">
<iconify-icon className="text-xl text-gray-400" icon="solar:delivery-bold-duotone"></iconify-icon>
<span>Logistics</span>
</div>
<span className="text-xs text-[#71717A]">Route planning cost reduction</span>
</div>
<span className="font-mono text-sm text-green-600 bg-green-50 px-2 py-1 rounded">-22%</span>
</div>
</div>
</div>
<div className="bg-[#FAFAFA] rounded-[2rem] overflow-hidden border border-gray-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="h-72 w-full overflow-hidden relative group">
<img alt="Chip" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dac9be07-4103-4e79-a807-a3e40f1945bf_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 to-transparent"></div>
<div className="absolute bottom-6 left-8 text-white">
<span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block border border-white/20">Breakthrough</span>
<h3 className="text-3xl font-medium tracking-tight">Project Titan</h3>
</div>
</div>
<div className="p-8 lg:p-10">
<div className="mb-10">
<h4 className="text-xl text-[#18181B] mb-3 font-semibold">Generative Design Core</h4>
<p className="text-[#52525B] text-sm leading-relaxed">
                Our flagship architectural AI reduced blueprint generation time from weeks to minutes, maintaining structural compliance across 40 jurisdictions.
              </p>
</div>
<div className="space-y-8">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#18181B] group-hover:bg-[#18181B] group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:clock-circle-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#18181B]">Time Saved</span>
<span className="text-xs text-[#71717A]">Per project cycle</span>
</div>
</div>
<span className="text-3xl text-[#18181B] font-medium tracking-tight">320h</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#18181B] group-hover:bg-[#18181B] group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:check-circle-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#18181B]">Compliance</span>
<span className="text-xs text-[#71717A]">Automated checks</span>
</div>
</div>
<span className="text-3xl text-[#18181B] font-medium tracking-tight">100%</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="flex flex-col lg:pl-12 lg:pr-12 lg:pt-24 lg:pb-48 text-[#18181B] text-center bg-white z-20 pt-24 pr-12 pb-48 pl-12 relative items-center">
<h2 className="text-3xl lg:text-4xl mb-4 font-medium tracking-tight animate-on-scroll [animation:animationIn_0.8s_ease-out_0.05s_both]">Stay ahead of the curve</h2>
<p className="text-[#71717A] text-sm lg:text-base max-w-lg mb-10 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
        Receive our quarterly whitepaper on the state of Applied Artificial Intelligence.
      </p>
<div className="w-full max-w-md flex flex-col sm:flex-row gap-3 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-[#A1A1AA] text-lg" icon="solar:letter-bold-duotone"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#18181B]/10 transition-all placeholder:text-[#A1A1AA] bg-gray-50 focus:bg-white" placeholder="Enter business email" type="email"/>
</div>
<button className="bg-[#18181B] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-lg shadow-gray-200">
          Subscribe
        </button>
</div>
<div className="flex items-center gap-3 mt-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<span className="text-xs text-[#A1A1AA] font-medium">Trusted by teams at</span>
<div className="flex gap-4 opacity-50 grayscale">
<iconify-icon className="text-lg" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="text-lg" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-lg" icon="simple-icons:ibm"></iconify-icon>
</div>
</div>
</section>
<div className="bg-[#050505] relative">
<div className="relative z-30 mx-4 lg:mx-auto max-w-6xl -mt-16 transform lg:-translate-y-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.05s_both]">
<div className="bg-gradient-to-r from-[#111] to-[#0A0A0A] rounded-[2rem] p-8 lg:p-16 overflow-hidden relative shadow-2xl border border-white/10 ring-1 ring-white/5">
<div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-30">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px', maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'}}></div>
</div>
<div className="relative z-10 max-w-xl">
<h3 className="text-3xl lg:text-5xl text-white mb-6 leading-tight font-medium tracking-tight">
              Transform your <span className="font-serif-italic text-blue-400">future</span> today.
            </h3>
<p className="text-[#A1A1AA] text-sm lg:text-base mb-8">
              Schedule a discovery call with our lead engineers to assess your data infrastructure maturity.
            </p>
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
              Start Integration
              <iconify-icon className="text-sm" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>
<footer className="pt-12 lg:pt-24 pb-12 px-6 lg:px-12 text-[#E4E4E7]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-20">
<div className="lg:w-1/3 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.05s_both]">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-xl text-white" icon="solar:star-fall-bold-duotone"></iconify-icon>
<span className="text-lg font-semibold text-white tracking-tight">Borealis</span>
</div>
<div className="space-y-4 text-sm">
<p className="text-[#A1A1AA] max-w-xs">Pioneering the intersection of deep learning and industrial application.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-[#71717A]">Systems Operational</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 lg:flex-1 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div>
<h4 className="text-white font-medium text-xs uppercase tracking-widest mb-6 opacity-60">Platform</h4>
<ul className="space-y-3 text-sm text-[#A1A1AA]">
<li><a className="hover:text-white transition-colors" href="#">Neural Core</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vision Labs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise API</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs uppercase tracking-widest mb-6 opacity-60">Company</h4>
<ul className="space-y-3 text-sm text-[#A1A1AA]">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs uppercase tracking-widest mb-6 opacity-60">Legal</h4>
<ul className="space-y-3 text-sm text-[#A1A1AA]">
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ethics Policy</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both]">
<p className="text-xs text-[#52525B]">© 2024 Borealis AI Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-[#52525B] hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:twitter-bold-duotone" width="16"></iconify-icon>
</a>
<a className="text-[#52525B] hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:linkedin-bold-duotone" width="16"></iconify-icon>
</a>
<a className="text-[#52525B] hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:code-bold-duotone" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
