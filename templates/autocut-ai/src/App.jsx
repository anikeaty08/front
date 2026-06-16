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
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  (function() {
    const rail = document.getElementById('testimonial-rail');
    const prevButton = document.getElementById('testimonial-prev');
    const nextButton = document.getElementById('testimonial-next');
    
    if (rail && prevButton && nextButton) {
      const scrollDistance = 540;
      
      prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        rail.scrollBy({
          left: -scrollDistance,
          behavior: 'smooth'
        });
      });
      
      nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        rail.scrollBy({
          left: scrollDistance,
          behavior: 'smooth'
        });
      });
      
      function updateButtonStates() {
        const scrollLeft = rail.scrollLeft;
        const maxScroll = rail.scrollWidth - rail.clientWidth;
        
        if (scrollLeft <= 10) {
          prevButton.style.opacity = '0.5';
          prevButton.style.pointerEvents = 'none';
        } else {
          prevButton.style.opacity = '1';
          prevButton.style.pointerEvents = 'auto';
        }
        
        if (scrollLeft >= maxScroll - 10) {
          nextButton.style.opacity = '0.5';
          nextButton.style.pointerEvents = 'none';
        } else {
          nextButton.style.opacity = '1';
          nextButton.style.pointerEvents = 'auto';
        }
      }
      
      updateButtonStates();
      rail.addEventListener('scroll', updateButtonStates);
      window.addEventListener('resize', updateButtonStates);
    }
  })();

  window.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) lucide.createIcons();
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="47" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="3eLGLP7pmQS4ozfklmrX"></div>
</div>

<header className="z-20 w-full absolute top-0 left-0 animate-fadeSlideIn">
<nav className="flex max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 relative items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[70px] h-[70px] bg-[url(https://cdn.midjourney.com/b651da59-36ac-4094-8e81-f3819e00b905/0_3.png?w=800&amp;q=80)] bg-cover rounded-full invert-0" href="#"></a>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex rounded-none ring-0 px-3 py-1.5 gap-x-2 gap-y-2 items-center">
<a className="text-sm hover:text-white transition inline-flex items-center gap-2 px-3 py-1 rounded-full text-white/60" href="#">
<span className="font-geist font-light tracking-tight">How it works</span>
</a>
<a className="text-sm hover:text-white transition inline-flex items-center gap-2 px-3 py-1 rounded-full text-white/60" href="#">
<span className="font-geist font-light tracking-tight">Features</span>
</a>
<a className="text-sm hover:text-white transition inline-flex items-center gap-2 px-3 py-1 rounded-full text-white/60" href="#">
<span className="font-geist font-light tracking-tight">Testimonials</span>
</a>
</div>
<a className="relative inline-flex items-center justify-center transition uppercase text-sm font-semibold tracking-wide text-white rounded-full px-7 py-3 shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/20" href="#" style={{willChange: 'transform'}}>
<span className="absolute -inset-4 rounded-[999px] pointer-events-none opacity-70 blur-2xl" style={{background: 'radial-gradient(65% 65% at 50% 50%, rgba(59,130,246,0.70) 0%, rgba(59,130,246,0.35) 40%, rgba(59,130,246,0) 70%)'}}></span>
<span className="rounded-full absolute top-0 right-0 bottom-0 left-0" style={{background: 'linear-gradient(180deg, #6EB7FF 0%, #2B86FF 45%, #0B4ED1 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.45), inset 0 -12px 22px rgba(0,0,0,0.45), 0 10px 32px rgba(30,144,255,0.65)'}}></span>
<span className="absolute inset-0 rounded-full pointer-events-none" style={{background: 'radial-gradient(120% 140% at 50% -10%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.28) 28%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 60%)'}}></span>
<span className="z-10 font-medium tracking-tight font-geist relative">Sign In</span>
</a>
</div>
</nav>
</header>

<section className="relative h-screen flex items-end overflow-hidden" style={{}}>
<div className="w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pb-16 pl-6 relative" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 gap-x-10 gap-y-10 items-center">
<div className="animate-fadeSlideIn animation-delay-100 md:col-span-4 max-w-2xl my-6 space-y-6">
<p className="md:text-5xl text-4xl leading-tight font-geist font-light tracking-tighter">
          Click Play. Watch AI Do the Work.
        </p>
<p className="leading-relaxed md:text-lg font-geist font-light tracking-tight text-white/60">
          Simply upload your video — our AI trims, captions, and enhances it automatically.
          Save hours of editing and turn one video into endless content.
        </p>
<a className="inline-flex items-center justify-center transition-all uppercase focus:outline-none focus:ring-2 focus:ring-white/20 hover:scale-110 text-sm font-semibold text-white tracking-wide rounded-full mt-2 pt-3 pr-8 pb-3 pl-8 relative shadow-lg group" href="#" style={{willChange: 'transform', transitionDuration: '300ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'}}>
<span className="absolute -inset-4 rounded-[999px] pointer-events-none opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70" style={{background: 'radial-gradient(65% 65% at 50% 50%, rgba(59,130,246,0.70) 0%, rgba(59,130,246,0.35) 40%, rgba(59,130,246,0) 70%)'}}></span>
<span className="absolute -inset-6 rounded-[999px] pointer-events-none opacity-0 blur-3xl transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(70% 70% at 50% 50%, rgba(59,130,246,0.95) 0%, rgba(59,130,246,0.60) 35%, rgba(59,130,246,0) 70%)'}}></span>
<span className="rounded-full absolute top-0 right-0 bottom-0 left-0" style={{background: 'linear-gradient(180deg, #6EB7FF 0%, #2B86FF 45%, #0B4ED1 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.45), inset 0 -12px 22px rgba(0,0,0,0.45), 0 10px 32px rgba(30,144,255,0.65)'}}></span>
<span className="absolute inset-0 rounded-full pointer-events-none" style={{background: 'radial-gradient(120% 140% at 50% -10%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.28) 28%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 60%)'}}></span>
<span className="z-10 font-medium tracking-tight font-geist relative">Let AI Edit It</span>
</a>
</div>
<div className="md:col-span-5 relative flex justify-center items-center animate-fadeSlideIn animation-delay-200">
</div>
<div className="md:col-span-3 flex flex-col gap-6 h-auto md:items-end md:text-right w-full animate-fadeSlideIn animation-delay-300">
<div className="">
<p className="md:text-5xl text-4xl font-light tracking-tighter font-geist text-left">175K+</p>
<p className="md:text-base text-sm font-light text-white/60 tracking-tight font-geist text-left">Content Creators
          </p>
</div>
<div className="">
<p className="md:text-5xl text-4xl font-light tracking-tighter font-geist text-left">100K+</p>
<p className="md:text-base text-sm font-light text-white/60 tracking-tight font-geist text-left">Videos Edited</p>
</div>
<div className="">
<p className="md:text-5xl text-4xl font-light tracking-tighter font-geist text-left">150K+</p>
<p className="md:text-base text-sm font-light text-white/60 tracking-tight font-geist text-left">Hours Saved</p>
</div>
</div>
</div>
</div>
</section>

<div className="-mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate origin-top flex min-h-screen [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] md:pt-0 md:pl-6 md:pr-6 max-w-7xl mr-auto ml-auto pt-0 pr-4 pl-4 scale-75 items-center justify-center">
<section className="animate-scaleIn animate-on-scroll sm:p-8 z-10 bg-[#000000]/5 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">

<header className="sm:space-y-0 sm:flex sm:items-end sm:justify-between gap-6 mb-8 space-y-5 gap-x-6 gap-y-6" style={{}}>

<div className="sm:text-left text-center max-w-2xl">
<p className="flex items-center gap-3 text-[13px] font-medium text-white/60 tracking-wide">
<span className="tabular-nums text-white/80 font-semibold text-sm">01</span>
<span className="inline-block w-px h-3 bg-white/20"></span>
<span className="">Feature</span>
</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter font-geist text-left mt-2">AI Chat Video Editor</h2>
<p className="sm:text-base text-sm text-white/70 tracking-tight font-geist text-left mt-3">Drop a video, chat your edits, and let AI trim silence, add captions, and resize automatically.</p>
</div>

<div className="flex sm:justify-end gap-3 text-left gap-x-3 gap-y-3 items-center justify-center">
<a className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white ring-1 ring-white/10 bg-white/10 hover:bg-white/15 transition" href="#get-started">
        Start free
      </a>
<a className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/5 transition" href="#all-features">
        See all features
      </a>
</div>
</header>

<div className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll w-full border-white/10 border rounded-2xl mt-6 relative shadow-2xl backdrop-blur-xl">

<div className="flex border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-slate-400 font-geist tracking-tight">Autocut Editor</span>
</div>
</div>

<div className="flex flex-col h-auto md:grid md:grid-cols-12 md:h-[700px]">

<div className="md:hidden flex flex-col bg-black/20 relative">
<div className="flex text-[10px] text-slate-300 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 gap-2 items-center">
<span className="font-geist tracking-tight">Video</span>
<div className="text-slate-500">•</div>
<span className="font-geist text-slate-400 tracking-tight truncate flex-1">Episode 47</span>
<button className="rounded border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
<div className="p-3">
<div className="bg-black/40 border-white/10 border rounded-lg p-2 backdrop-blur">
<div className="aspect-video overflow-hidden rounded bg-center bg-cover relative" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/18b18fe8-19f0-4475-982c-ab0071200460_1600w.webp\')'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<div className="inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2 py-0.5 ring-1 ring-white/10">
<span className="text-[10px] font-medium text-white font-geist tracking-tight">01:38</span>
<span className="text-[10px] text-white/60 font-geist tracking-tight">/ 01:40</span>
</div>
<div className="flex items-center gap-1">
<button className="w-6 h-6 rounded bg-black/50 backdrop-blur ring-1 ring-white/10 text-white/80 hover:bg-white/10 flex items-center justify-center transition">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="mt-3">
<div className="relative h-8 rounded bg-white/5 ring-1 ring-white/10 overflow-hidden mb-2">
<div className="absolute inset-0 flex items-end px-2 gap-4 text-[8px] text-slate-400 font-geist tracking-tight">
<span>01:00</span><span>01:02</span><span>01:04</span><span>01:06</span><span>01:08</span>
</div>
</div>
<div className="relative rounded-lg bg-black/30 ring-1 ring-white/10 overflow-hidden">
<div className="p-2 space-y-1.5">
<div className="relative h-8 rounded bg-white/5 ring-1 ring-white/10 overflow-hidden flex items-center px-1 gap-1">
<div className="bg-white/10 w-[15%] h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6e27799-045b-419d-bb17-dc3bf93011d8_320w.webp)] bg-cover bg-center ring-white/15 ring-1 rounded"></div>
<div className="bg-white/10 w-[20%] h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cfb4c204-a01b-4f6f-a46f-c884e5c4bae6_320w.webp)] bg-cover bg-center ring-white/15 ring-1 rounded"></div>
<div className="bg-center bg-white/10 w-[18%] h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1a1b3502-c111-4d97-abb7-a443929652e6_320w.webp)] bg-cover ring-2 rounded" style={{-TwRingColor: '#FDE68A', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.35)'}}></div>
</div>
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-1">
<button className="h-6 px-2 rounded bg-white/5 ring-1 ring-white/10 text-[10px] text-slate-200 hover:bg-white/10 font-geist tracking-tight">Split</button>
<button className="h-6 px-2 rounded bg-blue-600 text-white text-[10px] hover:bg-blue-500 font-geist tracking-tight">Trim</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex bg-black/10 border-white/10 border-t pt-2 pr-3 pb-2 pl-3 gap-2 items-center justify-center">
<button className="p-1.5 rounded border border-white/10 bg-blue-600 text-white hover:bg-blue-500">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
<button className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-[11px] text-slate-300 hover:bg-white/10 font-geist tracking-tight flex-1">Cut</button>
<button className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-[11px] text-slate-400 hover:bg-white/10 font-geist tracking-tight flex-1">Captions</button>
</div>
</div>

<aside className="hidden md:flex md:col-span-3 bg-black/30 border-white/10 border-r flex-col">
<div className="border-white/10 border-b pt-3 pr-4 pb-3 pl-4">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 font-geist tracking-tight">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
          AI Assistant
        </div>
</div>
<div className="flex-1 overflow-y-auto pt-4 pr-4 pb-4 pl-4 space-y-4">
<div className="relative">
<p className="text-base sm:text-lg font-geist font-light tracking-tight text-white mb-3">
            Hi Mike! How can I help you?
          </p>
<div className="space-y-2.5">
<button className="w-full flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10 px-3 py-2.5">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 flex-shrink-0">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 8h8"></path><path d="M7 12h10"></path><path d="M7 16h6"></path>
</svg>
</div>
<div className="text-left">
<div className="text-[13px] text-white font-geist tracking-tight">Generate Script</div>
<div className="text-[11px] text-white/60 font-geist tracking-tight">Create video scripts</div>
</div>
</button>
<button className="w-full flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10 px-3 py-2.5">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 flex-shrink-0">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="8.5" cy="8.5" r="2.5"></circle><path d="m21 15-5-5L5 21"></path>
</svg>
</div>
<div className="text-left">
<div className="text-[13px] text-white font-geist tracking-tight">Generate Thumbnail</div>
<div className="text-[11px] text-white/60 font-geist tracking-tight">AI-powered images</div>
</div>
</button>
<button className="w-full flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10 px-3 py-2.5">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 flex-shrink-0">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path>
</svg>
</div>
<div className="text-left">
<div className="text-[13px] text-white font-geist tracking-tight">Suggest Captions</div>
<div className="text-[11px] text-white/60 font-geist tracking-tight">Improve readability</div>
</div>
</button>
</div>
<div className="mt-4 isolate relative">
<div className="space-y-3 max-h-[52vh] overflow-y-auto pr-0">
<div className="flex items-start gap-3">
<div className="max-w-[85%] rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-sm text-white/90 tracking-tight font-geist">
                    Hi Mike! Drop a video or paste a link. I can trim silence, add captions, and resize for 9:16.
                    What do you want to change?
                  </p>
</div>
</div>
<div className="flex items-start gap-3 justify-end">
<div className="max-w-[85%] rounded-xl bg-blue-600/90 ring-1 ring-white/10 p-3">
<p className="text-sm text-white font-geist tracking-tight">
                    Keep it under 60s, cut long pauses, and add dynamic captions. Make a punch-in on key sentences.
                  </p>
</div>
</div>
</div>
<div className="mt-3 relative rounded-2xl ring-1 ring-white/10 bg-white/5">
<textarea className="placeholder-white/40 sm:text-base min-h-[96px] resize-none outline-none text-sm text-slate-200 tracking-tight font-geist bg-transparent w-full pt-4 pr-4 pb-4 pl-4" placeholder="Ask for a change… e.g., 'make it 9:16 and add big captions'" rows="3"></textarea>
<button className="absolute right-2 bottom-2 h-9 w-9 rounded-lg bg-blue-600 hover:bg-blue-500 text-white grid place-items-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-white/10">
<div className="flex items-center gap-2">
<input className="flex-1 rounded-lg bg-white/5 text-slate-200 placeholder-white/40 px-3 py-2 text-xs ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 outline-none font-geist tracking-tight" placeholder="Ask AI anything..." type="text"/>
<button className="h-9 w-9 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center border border-white/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</div>
</div>
</aside>

<main className="hidden md:flex md:col-span-6 flex-col bg-black/20 relative">
<div className="flex text-xs text-slate-300 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center">
<span className="font-geist tracking-tight">Video Editor</span>
<div className="text-slate-500">•</div>
<span className="font-geist text-slate-400 tracking-tight">Podcast Episode 47</span>
<div className="ml-auto flex items-center gap-2">
<div className="text-xs text-emerald-400 font-geist tracking-tight flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Auto-saving
          </div>
<div className="h-3 w-px bg-white/10 mx-1"></div>
<button className="rounded-md border border-white/10 bg-white/5 p-1.5 hover:bg-white/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
<div className="flex bg-black/10 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded border border-white/10 bg-blue-600 text-white hover:bg-blue-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
<button className="p-1.5 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" width="4" x="6" y="4"></rect>
<rect height="16" width="4" x="14" y="4"></rect>
</svg>
</button>
<div className="h-4 w-px bg-white/10 mx-1"></div>
<span className="text-xs text-slate-400 font-geist tracking-tight">3:24 / 8:45</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-geist tracking-tight">Cut</button>
<button className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-geist tracking-tight">Captions</button>
<button className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-geist tracking-tight">Export</button>
</div>
</div>
<div className="flex-1 overflow-y-auto pt-4 pr-4 pb-4 pl-4">
<div className="flex flex-col gap-4 h-full">
<div className="bg-black/40 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur">
<div className="aspect-video overflow-hidden rounded-xl bg-center bg-cover relative" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/18b18fe8-19f0-4475-982c-ab0071200460_1600w.webp\')'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 ring-1 ring-white/10">
<span className="text-xs font-medium text-white font-geist tracking-tight">01:38</span>
<span className="text-xs text-white/60 font-geist tracking-tight">/ 01:40</span>
</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur ring-1 ring-white/10 text-white/80 hover:bg-white/10 flex items-center justify-center transition">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
<button className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur ring-1 ring-white/10 text-white/80 hover:bg-white/10 flex items-center justify-center transition">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 3 21 3 21 9"></polyline>
<polyline points="9 21 3 21 3 15"></polyline>
<line x1="21" x2="14" y1="3" y2="10"></line>
<line x1="3" x2="10" y1="21" y2="14"></line>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="pr-4 pb-6 pl-4">
<div className="relative h-10 rounded-lg bg-white/5 ring-1 ring-white/10 overflow-hidden mb-2">
<div className="absolute inset-0 flex items-end px-2 gap-8 text-[9px] text-slate-400 font-geist tracking-tight">
<span>01:00:00:00</span><span>01:00:02:00</span><span>01:00:04:00</span><span>01:00:06:00</span><span>01:00:08:00</span><span>01:00:10:00</span><span>01:00:12:00</span><span>01:00:14:00</span>
</div>
</div>
<div className="relative rounded-xl bg-black/30 ring-1 ring-white/10 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-10 border-r border-white/10 bg-black/40 flex flex-col">
<button className="h-8 grid place-items-center text-white/70 hover:bg-white/5">
<svg fill="none" height="13" stroke="currentColor" strokeWidth="2" width="13" xmlns="http://www.w3.org/2000/svg"><rect height="8" width="8" x="3" y="3"></rect></svg>
</button>
<button className="h-8 grid place-items-center text-white/70 hover:bg-white/5">
<svg fill="none" height="13" stroke="currentColor" strokeWidth="2" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v6H4z"></path><path d="M4 14h16v6H4z"></path></svg>
</button>
<button className="h-8 grid place-items-center text-white/70 hover:bg-white/5">
<svg fill="none" height="13" stroke="currentColor" strokeWidth="2" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="M6 8v8"></path><path d="M18 8v8"></path></svg>
</button>
</div>
<div className="pl-10 p-2 space-y-2">
<div className="relative h-10 rounded bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="bg-white/10 w-[12%] h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6e27799-045b-419d-bb17-dc3bf93011d8_320w.webp)] bg-cover bg-center ring-white/15 ring-1 rounded absolute top-1 left-[5%]"></div>
<div className="bg-white/10 w-[18%] h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cfb4c204-a01b-4f6f-a46f-c884e5c4bae6_320w.webp)] bg-cover bg-center ring-white/15 ring-1 rounded absolute top-1 left-[20%]"></div>
<div className="bg-center bg-white/10 w-[15%] h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1a1b3502-c111-4d97-abb7-a443929652e6_320w.webp)] bg-cover ring-2 rounded absolute top-1 left-[40%]" style={{-TwRingColor: '#FDE68A', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.35)'}}></div>
<div className="bg-white/10 w-[16%] h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/383a13ae-42ed-4952-91bf-223920abf03c_320w.webp)] bg-cover bg-center ring-white/15 ring-1 rounded absolute top-1 left-[58%]"></div>
<div className="bg-white/10 w-[12%] h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/97e6a233-c087-4bb7-87bb-32d4fe9beba1_320w.webp)] bg-cover bg-center rounded ring-white/15 ring-1 absolute top-1 left-[76%]"></div>
</div>
<div className="relative h-8 rounded bg-purple-500/10 ring-1 ring-purple-400/30 overflow-hidden">
<div className="absolute inset-y-1 left-[6%] w-[30%] rounded bg-purple-500/30">
<div className="absolute inset-y-1 left-[50%] w-[18%] rounded bg-purple-500/30"></div>
</div>
<div className="overflow-hidden bg-emerald-500/10 h-8 ring-emerald-400/30 ring-1 rounded relative">
<div className="bg-emerald-500/30 w-[42%] rounded absolute top-1 bottom-1 left-[22%]"></div>
</div>
<div className="relative h-8 rounded bg-blue-500/10 ring-1 ring-blue-400/30 overflow-hidden">
<div className="absolute inset-y-1 left-[8%] w-[35%] rounded bg-blue-500/40"></div>
<div className="absolute inset-y-1 left-[48%] w-[28%] rounded bg-blue-500/40"></div>
</div>
<div className="relative h-8 rounded bg-blue-500/10 ring-1 ring-blue-400/30 overflow-hidden">
<div className="absolute inset-y-1 left-[60%] w-[26%] rounded bg-blue-500/40"></div>
</div>
<div className="w-px bg-white/90 absolute top-0 bottom-0 left-1/2"></div>
</div>
</div>
<div className="mt-2 rounded-xl bg-black/40 ring-1 ring-white/10 px-2 py-1.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="h-8 w-8 grid place-items-center rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
<svg fill="none" height="15" stroke="currentColor" strokeWidth="2" width="" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M3 12h18"></path><path d="M3 18h18"></path></svg>
</button>
<span className="text-xs text-slate-400 font-geist tracking-tight">Reset All</span>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1.5 h-8 px-2 rounded bg-white/5 ring-1 ring-white/10 text-xs text-slate-200 hover:bg-white/10 font-geist tracking-tight">Split</button>
<button className="inline-flex items-center gap-1.5 h-8 px-2 rounded bg-white/5 ring-1 ring-white/10 text-xs text-slate-300 hover:bg-white/10 font-geist tracking-tight">Detach Audio</button>
<button className="inline-flex items-center gap-1.5 h-8 px-2 rounded bg-white/5 ring-1 ring-white/10 text-xs text-slate-300 hover:bg-white/10 font-geist tracking-tight">Duplicate</button>
<button className="inline-flex items-center gap-1.5 h-8 px-2 rounded bg-blue-600 text-white text-xs hover:bg-blue-500 font-geist tracking-tight">Trim</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:flex md:col-span-3 bg-black/30 border-white/10 border-l flex-col">
<div className="px-4 py-3 border-b border-white/10">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 font-geist tracking-tight">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
          Settings
        </div>
</div>
<div className="flex gap-1 border-white/10 border-b pt-3 pr-4 pb-3 pl-4">
<button className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded font-geist tracking-tight">Video</button>
<button className="px-3 py-1.5 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-geist tracking-tight">AI</button>
<button className="px-3 py-1.5 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-geist tracking-tight">Export</button>
</div>
<div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
<div className="bg-white/5 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300 font-geist tracking-tight">Current Video</span>
<span className="text-xs text-blue-400 font-geist tracking-tight">8:45</span>
</div>
<div className="text-[10px] text-slate-500 space-y-1 font-geist tracking-tight">
<div className="flex justify-between">
<span>Format:</span>
<span>1080p MP4</span>
</div>
<div className="flex justify-between">
<span>Size:</span>
<span>247 MB</span>
</div>
<div className="flex justify-between">
<span>FPS:</span>
<span>30</span>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="text-xs text-slate-300 font-geist tracking-tight">AI Processing</div>
<div className="space-y-2 text-[10px]">
<div className="flex items-center justify-between">
<span className="text-slate-400 font-geist tracking-tight">Auto-captions</span>
<button className="w-8 h-4 bg-blue-600 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-geist tracking-tight">Silence removal</span>
<button className="w-8 h-4 bg-blue-600 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-geist tracking-tight">Audio enhance</span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
</button>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="text-xs text-slate-300 font-geist tracking-tight">Export Format</div>
<div className="space-y-2 text-[10px]">
<select className="w-full bg-white/5 border border-white/10 rounded px-2 py-1.5 text-slate-300 font-geist tracking-tight text-xs">
<option>YouTube (16:9)</option>
<option>Instagram (9:16)</option>
<option>TikTok (9:16)</option>
<option>Twitter (16:9)</option>
</select>
<select className="w-full bg-white/5 border border-white/10 rounded px-2 py-1.5 text-slate-300 font-geist tracking-tight text-xs">
<option>1080p HD</option>
<option>720p</option>
<option>4K</option>
</select>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist tracking-tight">Processing</span>
<span className="rounded-md px-2 py-0.5 text-[10px] font-geist tracking-tight bg-emerald-500/20 text-emerald-400">Complete</span>
</div>
<div className="space-y-2">
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist tracking-tight">Silence Detection</span>
<span className="text-slate-400 font-geist text-[10px] tracking-tight">100%</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-2 bg-emerald-500 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist tracking-tight">Auto Captions</span>
<span className="text-slate-400 font-geist text-[10px] tracking-tight">100%</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-2">
<div className="text-xs text-slate-300 font-geist tracking-tight">Quick Stats</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center gap-2 p-2 rounded bg-blue-500/10 border border-blue-500/20">
<svg className="flex-shrink-0 text-blue-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span className="text-slate-300 font-geist text-[10px] tracking-tight">Time saved: 2.5 hours</span>
</div>
<div className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
<svg className="text-emerald-400 flex-shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-slate-300 font-geist text-[10px] tracking-tight">23 cuts made automatically</span>
</div>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-white/10 flex gap-2">
<button className="flex-1 hover:bg-blue-500 text-xs font-medium text-white bg-blue-600 rounded px-3 py-2 font-geist tracking-tight">Export Video</button>
<button className="px-3 py-2 bg-white/5 text-slate-300 rounded text-xs font-medium border border-white/10 hover:bg-white/10 font-geist tracking-tight">Share</button>
</div>
</aside>
</div>
</div>
</section>
</div><div className="-mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate origin-top flex min-h-screen [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] md:pt-0 md:pl-6 md:pr-6 max-w-7xl mr-auto ml-auto pt-0 pr-4 pl-4 scale-75 items-center justify-center">
<section className="animate-scaleIn animate-on-scroll sm:p-8 z-10 bg-[#000000]/5 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">

<header className="sm:space-y-0 sm:flex sm:items-end sm:justify-between gap-6 mb-8 space-y-5 gap-x-6 gap-y-6">

<div className="text-center sm:text-left max-w-2xl">
<p className="flex items-center gap-3 text-[13px] font-medium tracking-wide text-white/60">
<span className="tabular-nums text-sm font-semibold text-white/80">02</span>
<span className="inline-block w-px h-3 bg-white/20"></span>
<span className="">Workflow</span>
</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter font-geist text-left mt-2">How it works</h2>
<p className="sm:text-base text-sm text-white/70 tracking-tight font-geist text-left mt-3">Three simple steps to automate your
        content — from raw footage to publish-ready clips.</p>
</div>

<div className="flex sm:justify-end gap-3 gap-x-3 gap-y-3 items-center justify-center">
<a className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white ring-1 ring-white/10 bg-white/10 hover:bg-white/15 transition" href="#get-started">
        Start free
      </a>
<a className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/5 transition" href="#all-features">
        See all features
      </a>
</div>
</header>
<div className="h-px bg-white/10 mt-6 sm:mt-8"></div>

<ol className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mt-6 sm:mt-8 lg:mt-12 items-stretch">

<li className="lg:col-span-4 relative">
<div className="sm:p-8 flex flex-col bg-white/5 h-full border border-white/10 rounded-[28px] p-6 relative overflow-visible hover:-translate-y-1 hover:shadow-xl transition-all duration-500" style="mask-image: linear-gradient(140deg, transparent, black 50%, black 50%, transparent);
             -webkit-mask-image: linear-gradient(140deg, transparent, black 50%, black 50%, transparent);">

<div className="relative h-48 sm:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
<div className="absolute inset-0 p-4 sm:p-6">
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-full">
<div className="flex items-center gap-2 mb-3">
<div className="h-2 w-24 bg-white rounded"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/20 rounded"></div>
<div className="h-2 w-4/5 bg-white/20 rounded"></div>
<div className="h-2 w-3/4 bg-white/20 rounded"></div>
</div>
<div className="flex gap-2 mt-3">
<div className="h-6 w-16 bg-blue-500/20 rounded-lg"></div>
<div className="h-6 w-20 bg-white/10 rounded-lg"></div>
</div>
</div>
</div>
</div>
<h3 className="text-3xl text-white tracking-tighter font-geist mt-6 sm:text-3xl">Upload your video</h3>
<p className="leading-relaxed sm:text-base text-sm text-white/60 tracking-tight font-geist max-w-[52ch] mt-2 mb-6">
          Drag and drop your raw footage. Supports all major formats and resolutions.
        </p>

<div className="absolute bottom-4 right-4 z-30">
<span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-geist tracking-tight text-white bg-[#0b0d12]/90 ring-1 ring-white/20 rounded-full px-3.5 py-1.5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-300/90"></span>
<span className="uppercase text-white/70">Step</span>
<span className="tabular-nums font-semibold tracking-wider text-white">01</span>
</span>
</div>
</div>
</li>

<li className="lg:col-span-4 relative">
<div className="sm:p-8 flex flex-col bg-white/5 h-full border border-white/10 rounded-[28px] p-6 relative overflow-visible hover:-translate-y-1 hover:shadow-xl transition-all duration-500" style="mask-image: linear-gradient(140deg, transparent, black 50%, black 50%, transparent);
             -webkit-mask-image: linear-gradient(140deg, transparent, black 50%, black 50%, transparent);">
<div className="relative h-48 sm:h-56 rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-white/5 to-white/10 p-4">
<div className="grid grid-cols-2 gap-3 h-full">
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
<div className="flex items-center gap-2 mb-2">
<div className="h-1.5 w-12 bg-blue-400 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-4/5 bg-white/20 rounded"></div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
<div className="flex items-center gap-2 mb-2">
<div className="h-1.5 w-10 bg-emerald-400 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-5/6 bg-white/20 rounded"></div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
<div className="flex items-center gap-2 mb-2">
<div className="h-1.5 w-14 bg-purple-400 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-4/5 bg-white/20 rounded"></div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
<div className="flex items-center gap-2 mb-2">
<div className="h-1.5 w-8 bg-orange-400 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-3/4 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>
<h3 className="mt-6 text-3xl text-white font-geist tracking-tighter sm:text-3xl">AI processes your video</h3>
<p className="sm:text-base leading-relaxed text-sm text-white/60 tracking-tight font-geist max-w-[52ch] mt-2 mb-6">
          Auto-cuts silence, adds captions, balances audio, and enhances quality — in minutes.
        </p>

<div className="absolute bottom-4 right-4 z-30">
<span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-geist tracking-tight text-white bg-[#0b0d12]/90 ring-1 ring-white/20 rounded-full px-3.5 py-1.5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300/90"></span>
<span className="uppercase text-white/70">Step</span>
<span className="tabular-nums font-semibold tracking-wider text-white">02</span>
</span>
</div>
</div>
</li>

<li className="lg:col-span-4 relative">
<div className="sm:p-8 flex flex-col bg-white/5 h-full border border-white/10 rounded-[28px] p-6 relative overflow-visible hover:-translate-y-1 hover:shadow-xl transition-all duration-500" style="mask-image: linear-gradient(140deg, transparent, black 50%, black 50%, transparent);
             -webkit-mask-image: linear-gradient(140deg, transparent, black 50%, black 50%, transparent);">
<div className="relative h-48 sm:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden p-4">
<div className="w-full h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-3">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-emerald-500/20 rounded-lg grid place-items-center">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="h-2 w-16 bg-white rounded"></div>
</div>
<div className="w-4 h-4 bg-green-400 rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-2 mb-3">
<div className="bg-blue-500/20 border border-blue-400/30 rounded p-2 text-center">
<div className="w-3 h-3 mx-auto mb-1 rounded-sm bg-blue-400/30"></div>
<div className="h-1 w-8 bg-blue-400 rounded mx-auto"></div>
</div>
<div className="bg-emerald-500/20 border border-emerald-400/30 rounded p-2 text-center">
<div className="w-3 h-3 mx-auto mb-1 rounded-sm bg-emerald-400/30"></div>
<div className="h-1 w-6 bg-emerald-400 rounded mx-auto"></div>
</div>
<div className="bg-purple-500/20 border border-purple-400/30 rounded p-2 text-center">
<div className="w-3 h-3 mx-auto mb-1 rounded-sm bg-purple-400/30"></div>
<div className="h-1 w-10 bg-purple-400 rounded mx-auto"></div>
</div>
</div>
</div>
</div>
<h3 className="sm:text-3xl text-3xl text-white tracking-tighter font-geist mt-6">Export &amp; share</h3>
<p className="leading-relaxed sm:text-base text-sm text-white/60 tracking-tight font-geist max-w-[52ch] mt-2 mb-6">
          Download in platform-perfect formats or publish directly to your channels.
        </p>

<div className="absolute bottom-4 right-4 z-30">
<span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-geist tracking-tight text-white bg-[#0b0d12]/90 ring-1 ring-white/20 rounded-full px-3.5 py-1.5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-300/90"></span>
<span className="uppercase text-white/70">Step</span>
<span className="tabular-nums font-semibold tracking-wider text-white">03</span>
</span>
</div>
</div>
</li>
</ol>
</section>
</div><div className="-mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate origin-top flex min-h-screen [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] md:pt-0 md:pl-6 md:pr-6 max-w-7xl mr-auto ml-auto pt-0 pr-4 pl-4 scale-75 items-center justify-center">
<section className="animate-scaleIn animate-on-scroll sm:p-8 z-10 bg-[#000000]/5 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">

<header className="sm:space-y-0 sm:flex sm:items-end sm:justify-between gap-6 mb-8 space-y-5">

<div className="text-center sm:text-left max-w-2xl">
<p className="flex items-center justify-start gap-3 text-[13px] font-medium text-white/60 tracking-wide text-left">
<span className="tabular-nums text-sm font-semibold text-white/80">03</span>
<span className="inline-block w-px h-3 bg-white/20"></span>
<span>Testimonials</span>
<span className="inline-flex items-center gap-1 text-white/70">

<svg className="w-3.5 h-3.5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 17.27-5.18 3.05 1.64-5.64L3 9.97l5.81-.5L12 4l3.19 5.47 5.81.5-5.46 4.71 1.64 5.64L12 17.27z"></path>
</svg>
    4.9/5
  </span>
</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter font-geist text-left mt-2">
      What creators say
    </h2>
<p className="sm:text-base text-sm text-white/70 tracking-tight font-geist text-left mt-3">
      Real results from people using DreamCut every day.
    </p>
</div>

<div className="flex sm:justify-end gap-3 gap-x-3 gap-y-3 items-center justify-center">
<a className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white ring-1 ring-white/10 bg-white/10 hover:bg-white/15 transition" href="#all-testimonials">
    Read more stories
  </a>
<a className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/5 transition" href="#share-feedback">
    Share your experience
  </a>
</div>
</header>
<div className="h-px bg-white/10 mt-6 sm:mt-8"></div>

<ol className="grid grid-cols-1 counter-steps sm:gap-10 sm:mt-8 lg:grid-cols-12 lg:mt-12 z-10 mt-6 relative gap-x-8 gap-y-8 items-stretch">
<li className="lg:col-span-12 p-0 bg-transparent">
<div className="grid grid-cols-1 lg:grid-cols-12 bg-[#ffffff]/5 border-[#ffffff]/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 gap-x-8 gap-y-8 items-start" style={{maskImage: 'linear-gradient(140deg, transparent, black 0%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 0%, black 45%, transparent)'}}>

<div className="lg:col-span-4">
<div className="w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Autocut testimonial portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_800w.webp" style={{filter: 'grayscale(100%)'}}/>
</div>
<div className="mt-6">
<div className="sm:text-3xl text-2xl font-semibold text-[#ffffff] tracking-tight font-geist">
  Maya Chen
</div>
<div className="text-sm sm:text-base font-geist tracking-tight text-white/70 mt-1">
        Content Creator, VisionLab
      </div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col justify-between">
<p className="leading-tight sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist">
      “Autocut saves me hours every week. I just drop my raw video, and it edits itself — captions, silence cuts, everything.”
    </p>
<div className="flex gap-4 mt-10 gap-x-4 gap-y-4 items-center">
<button className="w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-white inline-flex items-center justify-center">
<svg className="lucide lucide-arrow-left" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-left" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-white inline-flex items-center justify-center">
<svg className="lucide lucide-arrow-right" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</li>
</ol>
</section>
</div><div className="-mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate origin-top flex min-h-screen [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] md:pt-0 md:pl-6 md:pr-6 max-w-7xl mr-auto ml-auto pt-0 pr-4 pl-4 scale-75 items-center justify-center">
<section className="animate-scaleIn animate-on-scroll sm:p-8 z-10 bg-[#000000]/5 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">

<header className="sm:space-y-0 sm:flex sm:items-end sm:justify-between gap-6 mb-8 space-y-5">

<div className="text-center sm:text-left max-w-2xl">
<p className="flex items-center justify-start gap-3 text-[13px] font-medium text-white/60 tracking-wide">
<span className="tabular-nums text-sm font-semibold text-white/80">04</span>
<span className="inline-block w-px h-3 bg-white/20"></span>
<span>Pricing</span>
</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter font-geist text-left mt-2">
      Choose your plan
    </h2>
<p className="sm:text-base text-sm text-white/70 tracking-tight font-geist text-left mt-3">
      Simple, transparent pricing — pay only for what you need.
    </p>
</div>

<div className="flex items-center justify-center sm:justify-end gap-3">
<a className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white ring-1 ring-white/10 bg-white/10 hover:bg-white/15 transition" href="#get-started">
      Start free
    </a>
<a className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/5 transition" href="#compare-plans">
      Compare plans
    </a>
</div>
</header>
<div className="h-px bg-white/10 mt-6 sm:mt-8"></div>

<div className="grid grid-cols-1 lg:grid-cols-12 pt-6 gap-x-6 gap-y-6">

<div className="lg:col-span-5 space-y-6">
<div className="sm:p-8 bg-[#ffffff]/5 border-[#ffffff]/10 border ring-0 rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{maskImage: 'linear-gradient(140deg, transparent, black 50%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 50%, black 50%, transparent)'}}>
<div className="flex items-center gap-3">

<div className="grid place-items-center flex-shrink-0 text-white/80 bg-white/20 w-10 h-10 ring-white/30 ring-1 rounded-xl">
<span className="font-geist text-sm font-medium tracking-tight tabular-nums">1</span>
</div>

<h3 className="text-3xl sm:text-4xl text-white font-geist font-light tracking-tighter">Upload</h3>
</div>

<p className="mt-3 text-sm sm:text-base text-white/60 font-geist tracking-tight max-w-[56ch]">
    Drop your raw video footage and let AI take over the editing process.
  </p>
</div>
<div className="sm:p-8 bg-[#ffffff]/5 border-[#ffffff]/10 border rounded-2xl ring-0 pt-6 pr-6 pb-6 pl-6" style={{maskImage: 'linear-gradient(140deg, transparent, black 50%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 50%, black 50%, transparent)'}}>
<div className="flex items-center gap-3">

<div className="grid place-items-center flex-shrink-0 text-white/80 bg-white/20 w-10 h-10 ring-white/30 ring-1 rounded-xl">
<span className="font-geist text-sm font-medium tracking-tight tabular-nums">2</span>
</div>

<h3 className="text-3xl sm:text-4xl text-white font-geist font-light tracking-tighter">Process</h3>
</div>

<p className="mt-3 text-sm sm:text-base text-white/60 font-geist tracking-tight max-w-[56ch]">
          AI automatically cuts, captions, and enhances your video in minutes.
        </p>
</div>
<div className="sm:p-8 bg-[#ffffff]/5 border-[#ffffff]/10 border ring-0 rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{maskImage: 'linear-gradient(140deg, transparent, black 50%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 50%, black 50%, transparent)'}}>
<div className="flex items-center gap-3">

<div className="grid place-items-center flex-shrink-0 text-white/80 bg-white/20 w-10 h-10 ring-white/30 ring-1 rounded-xl">
<span className="font-geist text-sm font-medium tracking-tight tabular-nums">3</span>
</div>

<h3 className="text-3xl sm:text-4xl text-white font-geist font-light tracking-tighter">Export</h3>
</div>

<p className="mt-3 text-sm sm:text-base text-white/60 font-geist tracking-tight max-w-[56ch]">
          Download or publish directly to your favorite platforms instantly.
        </p>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-6">

<article className="sm:p-8 bg-[#ffffff]/5 border-[#ffffff]/10 border ring-0 rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{maskImage: 'linear-gradient(130deg, transparent, black 50%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 50%, black 50%, transparent)'}}>

<div className="flex items-start justify-between">
<h4 className="text-white text-2xl font-geist font-medium tracking-tight">Starter</h4>
<div className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 p-0.5 gap-0.5">
<button className="px-3 py-1 rounded-full text-[11px] font-geist tracking-tight bg-white/10 text-white">Monthly</button>
<button className="px-3 py-1 rounded-full text-[11px] font-geist tracking-tight text-white/60">Yearly</button>
</div>
</div>

<div className="mt-6">
<div className="sm:text-6xl text-4xl font-light text-white tracking-tighter font-geist">$29</div>
<div className="text-white/60 text-sm font-geist tracking-tight mt-1">per month</div>
</div>

<div className="mt-8 flex-1">
<p className="text-white/90 text-sm font-geist font-medium tracking-tight">What's Included:</p>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3">
<span className="grid place-items-center text-white/80 bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist tracking-tight">10 hours of video per month</span>
</li>
<li className="flex items-center gap-3">
<span className="grid place-items-center text-white/80 bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist tracking-tight">AI auto-captions &amp; silence removal</span>
</li>
<li className="flex items-center gap-3">
<span className="grid place-items-center text-white/80 bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist tracking-tight">1080p exports</span>
</li>
</ul>
</div>

<div className="border-white/10 border-t mt-8 pt-4">
<a className="relative w-full inline-flex items-center justify-center transition uppercase hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/20 text-sm font-semibold text-white tracking-wide rounded-full py-4 shadow-lg overflow-hidden" href="#" style={{willChange: 'transform'}}>
<span className="absolute -inset-4 rounded-[999px] pointer-events-none opacity-70 blur-2xl" style={{background: 'radial-gradient(65% 65% at 50% 50%, rgba(59,130,246,0.70) 0%, rgba(59,130,246,0.35) 40%, rgba(59,130,246,0) 70%)'}}></span>
<span className="rounded-full absolute top-0 right-0 bottom-0 left-0" style="background: linear-gradient(180deg, #6EB7FF 0%, #2B86FF 45%, #0B4ED1 100%);
             box-shadow: inset 0 1px 1px rgba(255,255,255,0.45),
                         inset 0 -12px 22px rgba(0,0,0,0.45),
                         0 10px 32px rgba(30,144,255,0.65);"></span>
<span className="absolute inset-0 rounded-full pointer-events-none" style="background: radial-gradient(120% 140% at 50% -10%, rgba(255,255,255,0.85) 0%,
                                         rgba(255,255,255,0.28) 28%,
                                         rgba(255,255,255,0.12) 40%,
                                         rgba(255,255,255,0) 60%);"></span>
<span className="z-10 font-medium tracking-tight font-geist relative">
      Get Started
    </span>
</a>
</div>
</article>

<article className="sm:p-8 bg-[#ffffff]/5 border-[#ffffff]/10 border rounded-2xl ring-0 pt-6 pr-6 pb-6 pl-6" style={{maskImage: 'linear-gradient(130deg, transparent, black 50%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 50%, black 50%, transparent)'}}>

<div className="flex items-start justify-between">
<h4 className="text-white text-2xl font-geist font-medium tracking-tight">Pro</h4>
<div className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 p-0.5 gap-0.5">
<button className="px-3 py-1 rounded-full text-[11px] font-geist tracking-tight bg-white/10 text-white">Monthly</button>
<button className="px-3 py-1 rounded-full text-[11px] font-geist tracking-tight text-white/60">Yearly</button>
</div>
</div>

<div className="mt-6">
<div className="sm:text-6xl text-4xl font-light text-white tracking-tighter font-geist">$79</div>
<div className="text-white/60 text-sm font-geist tracking-tight mt-1">per month</div>
</div>

<div className="mt-8 flex-1">
<p className="text-white/90 text-sm font-geist font-medium tracking-tight">What's Included:</p>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3">
<span className="grid place-items-center text-white/80 bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist tracking-tight">Unlimited video hours</span>
</li>
<li className="flex items-center gap-3">
<span className="grid place-items-center text-white/80 bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist tracking-tight">Priority AI processing</span>
</li>
<li className="flex items-center gap-3">
<span className="grid place-items-center text-white/80 bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist tracking-tight">4K exports &amp; team collaboration</span>
</li>
</ul>
</div>

<div className="border-white/10 border-t mt-8 pt-4">
<a className="relative w-full inline-flex items-center justify-center transition uppercase hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/20 text-sm font-semibold text-white tracking-wide rounded-full py-4 shadow-lg overflow-hidden" href="#" style={{willChange: 'transform'}}>
<span className="absolute -inset-4 rounded-[999px] pointer-events-none opacity-70 blur-2xl" style={{background: 'radial-gradient(65% 65% at 50% 50%, rgba(59,130,246,0.70) 0%, rgba(59,130,246,0.35) 40%, rgba(59,130,246,0) 70%)'}}></span>
<span className="rounded-full absolute top-0 right-0 bottom-0 left-0" style="background: linear-gradient(180deg, #6EB7FF 0%, #2B86FF 45%, #0B4ED1 100%);
             box-shadow: inset 0 1px 1px rgba(255,255,255,0.45),
                         inset 0 -12px 22px rgba(0,0,0,0.45),
                         0 10px 32px rgba(30,144,255,0.65);"></span>
<span className="absolute inset-0 rounded-full pointer-events-none" style="background: radial-gradient(120% 140% at 50% -10%, rgba(255,255,255,0.85) 0%,
                                         rgba(255,255,255,0.28) 28%,
                                         rgba(255,255,255,0.12) 40%,
                                         rgba(255,255,255,0) 60%);"></span>
<span className="z-10 font-medium tracking-tight font-geist relative">
      Get Started
    </span>
</a>
</div>
</article>
</div>
</div>
</section>
</div>



<footer className="z-10 mt-20 relative">
<div className="sm:px-6 lg:pt-12 lg:pb-12 lg:pl-6 lg:pr-6 max-w-7xl mx-auto pt-12 pr-4 pb-12 pl-4">
<div className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-white/5 rounded-3xl ring-white/10 ring-1 relative backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
<footer className="relative overflow-hidden">

<div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)'}}></div>
<div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(168,85,247,0.35) 0%, rgba(168,85,247,0) 70%)'}}></div>
<div className="sm:px-10 lg:px-14 lg:py-16 max-w-7xl mx-auto pt-12 pr-6 pb-12 pl-6 relative">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

<div className="space-y-4">
<a className="inline-flex items-center gap-3" href="#">
</a>
<span className="sm:text-2xl text-xl font-semibold tracking-tight font-geist">Autocut</span>
<p className="text-sm sm:text-base text-white/70 font-geist tracking-tight max-w-[26ch]">
        Edit smarter, not longer. Turn raw videos into ready-to-share content in minutes with AI.
      </p>
</div>

<div className="">
<p className="text-xl font-semibold tracking-tight font-geist text-white">Company</p>
<ul className="mt-4 space-y-3 text-sm sm:text-base text-white/80">
<li><a className="hover:text-white transition font-geist tracking-tight" href="#">About</a></li>
<li><a className="hover:text-white transition font-geist tracking-tight" href="#">Blog</a></li>
<li><a className="hover:text-white transition font-geist tracking-tight" href="#">Contact</a></li>
</ul>
</div>

<div className="">
<p className="text-xl font-semibold tracking-tight font-geist text-white">Product</p>
<ul className="mt-4 space-y-3 text-sm sm:text-base text-white/80">
<li className=""><a className="hover:text-white transition font-geist tracking-tight" href="#">Features</a></li>
<li><a className="hover:text-white transition font-geist tracking-tight" href="#">How it works</a></li>
<li><a className="hover:text-white transition font-geist tracking-tight" href="#">Pricing</a></li>
</ul>
</div>

<div className="">
<p className="text-xl font-semibold tracking-tight font-geist text-white">Contact</p>
<div className="mt-4 space-y-4 text-sm sm:text-base text-white/70 font-geist tracking-tight">
<p className="break-words">hello@autocut.ai</p>
<p className="max-w-[26ch] leading-relaxed">125 Creator Street, Suite 8, Montreal, Canada</p>
</div>
</div>
</div>

<div className="mt-14">
<p aria-hidden="true" className="text-[18vw] sm:text-[16vw] lg:text-[160px] bg-clip-text leading-none select-none font-semibold text-transparent tracking-tighter font-geist text-center bg-gradient-to-t from-blue-600 to-slate-400 opacity-70">
      AUTOCUT</p>
</div>

<div className="mt-10 h-px w-full bg-white/10"></div>

<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs sm:text-sm text-white/60 font-geist tracking-tight">
      © 2025 Autocut. All rights reserved.
    </p>
<div className="flex items-center gap-2">
<a aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a aria-label="TikTok" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<path d="m9 9 12-2"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="YouTube" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<path d="m10 15 5-3-5-3z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>
</div>
</div>
</footer>


    </>
  );
}
