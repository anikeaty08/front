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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll
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
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
                const testimonials = [
                  {
                    text: "Neuro has completely transformed the way we work. It automates the repetitive tasks we used to lose hours on and keeps every workflow organized. Our team moves faster, communicates better, and stays focused on the work that matters.",
                    author: "Emily Labelle",
                    role: "Operations Manager, FlowSync Technologies",
                    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef9d9bb-799c-4f7d-a32d-bdafde13fc98_800w.webp"
                  },
                  {
                    text: "The ability to sync documents across all our platforms instantly has been a game changer. We've cut down meeting times by 30% simply because everyone has the same context before we even start.",
                    author: "Marcus Chen",
                    role: "Product Lead, Orbit Systems",
                    image: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&q=80"
                  },
                  {
                    text: "Implementation was seamless. Within two days, Neuro was categorizing our support tickets and suggesting automated responses that were actually helpful. It feels like we hired a dozen new assistants.",
                    author: "Sarah Jenkins",
                    role: "Head of CX, BrightWave",
                    image: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&q=80"
                  },
                  {
                    text: "It's rare to find a tool that actually delivers on its AI promises. Neuro not only organizes our knowledge base but actively helps us discover insights we didn't even know we had.",
                    author: "David Miller",
                    role: "CTO, Vertex Dynamics",
                    image: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&q=80"
                  }
                ];

                let currentIndex = 0;

                function updateTestimonial() {
                  const t = testimonials[currentIndex];
                  const img = document.getElementById('neuro-t-image');
                  const text = document.getElementById('neuro-t-text');
                  const author = document.getElementById('neuro-t-author');
                  const role = document.getElementById('neuro-t-role');

                  if (!img || !text || !author || !role) return;

                  // Fade out
                  img.style.opacity = '0';
                  text.style.opacity = '0';
                  author.style.opacity = '0';
                  role.style.opacity = '0';

                  setTimeout(() => {
                    img.src = t.image;
                    text.textContent = t.text;
                    author.textContent = t.author;
                    role.textContent = t.role;

                    // Fade in
                    img.style.opacity = '1';
                    text.style.opacity = '1';
                    author.style.opacity = '1';
                    role.style.opacity = '1';
                  }, 300); // Match transition duration
                }

                window.neuroNextTestimonial = function() {
                  currentIndex = (currentIndex + 1) % testimonials.length;
                  updateTestimonial();
                }

                window.neuroPrevTestimonial = function() {
                  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                  updateTestimonial();
                }
              })();
            


                  if (typeof window.neuroToggleFaq === 'undefined') {
                    window.neuroToggleFaq = function(el) {
                      const container = el.closest('.faq-item');
                      const answer = container.querySelector('.faq-answer');
                      const icon = container.querySelector('.faq-icon');
                      const isHidden = answer.classList.contains('hidden');

                      if (isHidden) {
                        answer.classList.remove('hidden');
                        answer.classList.add('block');
                        icon.style.transform = 'rotate(180deg)';
                      } else {
                        answer.classList.add('hidden');
                        answer.classList.remove('block');
                        icon.style.transform = 'rotate(0deg)';
                      }
                    }
                  }
                


      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons();
        const yearEl = document.getElementById("year-span");
        if (yearEl) {
          yearEl.textContent = new Date().getFullYear().toString();
        }
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
      

<div className="aura-background-component w-full absolute top-0 hue-rotate-15 saturate-150 brightness-125 h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="opxjeAzlg0dkUUVGEZri"></div>

</div>
</div>
<div className="relative z-10 flex min-h-screen flex-col">

<header className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<header className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] z-[100] relative">
<div className="flex lg:px-6 max-w-6xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex space-x-0 items-center">
<svg className="w-[120px] h-[40px]" data-icon-replaced="true" fill="none" height="40" strokeWidth="2" style={{color: 'rgb(241, 245, 249)', width: '120px', height: '40px'}} viewbox="0 0 120 40" width="120" xmlns="http://www.w3.org/2000/svg">
<text className="" fill="white" fontFamily="'Inter', sans-serif" fontSize="28" font-weight="600" x="0" y="30">
          Neuro
        </text>
</svg>
<defs>
</defs>
<path className="" d="M10 40 L10 10 L30 40 L30 10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<circle cx="10" cy="10" fill="white" r="3"></circle>
<circle cx="10" cy="40" fill="white" r="3"></circle>
<circle cx="30" cy="10" fill="white" r="3"></circle>
<circle cx="30" cy="40" fill="white" r="3"></circle>
</div>
<div className="flex items-center gap-4">
<div className="relative group hidden md:block">

<button className="flex items-center gap-1 text-base font-medium tracking-tight text-slate-200/80 transition hover:text-white font-geist focus:outline-none py-2.5 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-white/10 hover:border-white/20">
<span className="" style={{}}>Menu</span>
<svg className="transition-transform group-hover:rotate-180 w-[15px] h-[15px]" fill="currentColor" height="15" strokeWidth="2" style={{color: '#f8fafc'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" fill="#f8fafc"></path>
<path d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" fill="#f8fafc" opacity=".5"></path>
</svg>
</button>

<nav className="absolute z-[100] hidden group-hover:block top-full mt-2 right-0 w-48 rounded-xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl backdrop-blur-xl ring-1 ring-white/5" style={{minWidth: 'max-content'}}>
<a className="block px-3 py-2 text-base text-slate-300 transition hover:text-white hover:bg-white/10 rounded-lg" href="#feature" style={{}}>Platform</a>
<a className="block px-3 py-2 text-base text-slate-300 transition hover:text-white hover:bg-white/10 rounded-lg" href="#pricing" style={{}}>Workflows</a>
<a className="block px-3 py-2 text-base text-slate-300 transition hover:text-white hover:bg-white/10 rounded-lg" href="#pricing" style={{}}>Pricing</a>
<a className="block px-3 py-2 text-base text-slate-300 transition hover:text-white hover:bg-white/10 rounded-lg" href="#testimonial" style={{}}>Stories</a>
</nav>
</div>

</div>
</div>
</header>
</header>

<main className="flex-1 z-10 relative">
<div className="flex flex-col lg:flex-row lg:items-center lg:gap-14 lg:px-6 lg:pb-24 lg:pt-24 max-w-6xl mr-auto ml-auto pt-16 pr-4 pb-24 pl-4 gap-x-10 gap-y-10">

<section className="lg:w-[55%] animate-on-scroll animate w-full relative gap-x-10 gap-y-10">

<div className="inline-flex text-[11px] shadow-purple-500/30 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] font-medium text-purple-100 bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-3 pb-1 pl-3 relative shadow-sm gap-x-0 gap-y-0 items-center">
<span className="mr-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" style={{}}></span>
<span className="font-geist" style={{}}>
                Save 9+ hours per teammate each week
              </span>
</div>
<h1 className="sm:text-5xl lg:text-[3.2rem] [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] text-4xl font-light text-slate-50 tracking-tighter font-geist mt-6">
              The AI engine that
              <span className="font-light tracking-tighter font-geist">powers</span>
              your entire workflow
            </h1>
<p className="lg:text-[15px] [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] text-sm text-slate-300/90 font-geist max-w-xl mt-4" style={{}}>
  Neuro connects documents, tools and messages into one searchable
  memory, turning scattered knowledge into answers, next steps and
  ready‑to‑run automations.
</p>


<form className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] max-w-none mt-7">
<div className="flex shadow-slate-900/60 bg-gradient-to-br from-blue-500/10 via-blue-500/0 to-blue-500/10 rounded-3xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-inner items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '24px'}}>
<div className="flex items-center px-2">
<svg className="lucide lucide-mail h-3.5 w-3.5 text-slate-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="h-9 flex-1 bg-transparent text-xs font-normal text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="you@company.com" style={{}} type="email"/>
<button className="inline-flex text-[12px] transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(248,181,129,0.9),0_0_0_1px_rgba(251,191,36,0.7)] text-white font-geist bg-gradient-to-bl from-[#fff370] via-orange-500 to-[#fff370] h-9 rounded-full pr-6 pl-6 items-center" style={{borderRadius: '9999px', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}} type="submit">
                  Get Started Free
                </button>
</div>
</form>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] mt-12 space-y-2">
<p className="text-[10px] uppercase text-slate-500 font-geist" style={{}}>
                Teams already experimenting with NeuroDesk
              </p>
<div className="flex flex-wrap text-[11px] text-slate-400 gap-x-6 gap-y-3 items-center" style={{}}>
<span className="flex items-center space-x-1">
<svg className="w-[92px] h-[36px]" data-icon-replaced="true" data-icon-set="logos" data-logos="adobe" fill="none" height="36" strokeWidth="2" style={{width: '92px', height: '36px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 512 134" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m221.02 88.874l-5.524 17.025c-.152.567-.68.952-1.266.921h-13.327c-.805 0-1.033-.46-.922-1.149l23.005-66.373a20.9 20.9 0 0 0 1.155-7.02a.766.766 0 0 1 .689-.804h18.408c.555 0 .805.116.922.688l26.098 73.626c.228.555.117 1.032-.555 1.032h-14.954a1.16 1.16 0 0 1-1.266-.805l-5.864-17.141zm4.138-14.377h18.18l-1.75-5.633c-2.411-7.66-5.621-17.629-7.34-24.047h-.117c-1.838 7.708-5.98 20.363-8.973 29.68m46.932 4.232c-.005-16.448 12.3-30.252 33.356-30.252c.917 0 2.072.116 3.799.227V26.043a.727.727 0 0 1 .587-.797l14.71-.008c.556 0 .695.227.695.688V93.91a65 65 0 0 0 .46 8.402c0 .444-.074.693-.456.89l-.348.142a57.8 57.8 0 0 1-22.662 4.604c-17.025 0-30.14-9.662-30.14-29.22m37.155-16.337a11.9 11.9 0 0 0-4.26-.555a15.35 15.35 0 0 0-16.465 15.007l.018 1.096c0 11.389 6.558 16.337 15.298 16.337a16.2 16.2 0 0 0 5.409-.689zm81.83 14.32l.041 1.206c0 18.063-11.733 30.024-28.32 30.024c-19.673 0-28.414-14.837-28.414-29.68a28.147 28.147 0 0 1 28.642-29.791c18.044 0 27.574 13.211 28.051 28.24m-40.473 1.306c0 10.123 4.715 16.564 12.422 16.564c6.664 0 11.733-5.753 11.733-16.337c0-8.973-3.681-16.447-12.421-16.447c-6.664 0-11.734 5.98-11.734 16.22m50.654-52.78l14.032-.006c.921 0 1.15.117 1.15.922v23.583a37 37 0 0 1 7.706-1.217l1.955-.049a26.326 26.326 0 0 1 27.63 25.998l-.021 1.383c0 21.512-17.025 32.096-34.506 32.096a60.2 60.2 0 0 1-18.063-2.643a1.36 1.36 0 0 1-.689-1.15v-78.11c0-.555.228-.805.806-.805m22.959 36.79l-.987.014a23.4 23.4 0 0 0-6.785.922v31.174c.93.215 1.876.356 2.828.42l1.43.04a15.83 15.83 0 0 0 16.66-17.252a13.516 13.516 0 0 0-13.146-15.317m51.97 20.371c.555 6.558 5.175 11.966 16.448 11.966c4.847.09 9.662-.811 14.148-2.648c.35-.228.694-.117.694.555V103.2c0 .805-.227 1.15-.805 1.383a38.65 38.65 0 0 1-15.79 3.374l-1.812-.043c-21.623 0-29.22-14.837-29.22-29.102c0-15.479 9.296-29.643 26.498-30.342l1.339-.027a23.455 23.455 0 0 1 24.272 24.85a37 37 0 0 1-.556 7.707a.994.994 0 0 1-.921.921q-4.433.42-8.884.47zm14.954-11.156a37.5 37.5 0 0 0 5.753-.227v-.806a9.357 9.357 0 0 0-9.779-9.09a10.9 10.9 0 0 0-11.045 10.123zM75.314 49.137l35.466 84.148H87.535l-10.611-26.798H50.97zM150.599 0v133.269L94.921 0zM55.701 0L0 133.269V0z" fill="#FA0F00"></path>
</svg>
</span>
<svg className="w-[92px] h-[36px]" data-icon-replaced="true" data-icon-set="logos" data-logos="appcircle" fill="none" height="36" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '92px', height: '36px'}} viewbox="0 0 512 106" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M162.217 44.594c0-5.405-3.621-8.428-10.453-8.428c-3.611 0-7.474 1.004-11.444 2.974a23 23 0 0 0-.487.25a2.86 2.86 0 0 1-3.862-1.188l-.004-.01l-1.93-3.672a2.844 2.844 0 0 1 1.201-3.842a60 60 0 0 1 1.583-.806c5.752-2.794 10.73-3.979 17.546-3.979c12.675 0 20.063 6.412 20.155 17.362l.083 28.786a2.853 2.853 0 0 1-2.85 2.856h-6.591a2.853 2.853 0 0 1-2.857-2.848v-2.254c-3.415 3.712-8.613 5.637-15.12 5.637c-10.29 0-17.193-6.28-17.193-15.22c0-9.184 6.88-14.685 18.629-14.775h13.594zm-11.71 9.42c-6.097 0-8.657 1.627-8.657 5.484c0 3.797 3.07 6.197 8.12 6.197c6.474 0 11.646-3.395 12.247-7.804v-3.876zm57.947-28.032c13.8 0 23.117 10.02 23.117 24.86c0 14.665-9.136 24.501-22.937 24.501c-6.813 0-12.276-2.553-15.928-7.341v21.36a2.853 2.853 0 0 1-2.857 2.848h-6.77a2.853 2.853 0 0 1-2.858-2.849V29.188a2.853 2.853 0 0 1 2.858-2.849h6.77a2.853 2.853 0 0 1 2.857 2.849V33.3c3.567-4.76 9.01-7.319 15.748-7.319m-2.603 38.552c7.665 0 13.056-5.789 13.056-14.05c0-8.184-5.402-13.96-13.056-13.96c-7.73 0-13.145 5.762-13.145 13.96c0 8.332 5.373 14.05 13.145 14.05m59.865-38.552c13.8 0 23.117 10.02 23.117 24.86c0 14.665-9.136 24.501-22.938 24.501c-6.813 0-12.276-2.553-15.928-7.341v21.36a2.853 2.853 0 0 1-2.857 2.848h-6.77a2.853 2.853 0 0 1-2.858-2.849V29.188a2.853 2.853 0 0 1 2.858-2.849h6.77a2.853 2.853 0 0 1 2.857 2.849V33.3c3.567-4.76 9.01-7.319 15.749-7.319m-2.603 38.552c7.665 0 13.055-5.789 13.055-14.05c0-8.184-5.402-13.96-13.055-13.96c-7.73 0-13.146 5.762-13.146 13.96c0 8.332 5.373 14.05 13.146 14.05m66.675-24.046c-2.858-2.303-6.414-3.518-10.54-3.518c-7.515 0-12.697 5.552-12.697 13.693c0 8.294 5.16 13.871 12.697 13.871c3.868 0 7.166-.92 9.742-2.721q.58-.407 1.388-1.194a2.864 2.864 0 0 1 3.818-.163l3.617 2.974a2.84 2.84 0 0 1 .386 4.01l-.05.058q-1.174 1.344-2.034 2.078c-4.415 3.765-10.405 5.767-17.496 5.767c-14.6 0-24.642-10.011-24.642-24.591c0-14.727 10.1-24.77 24.822-24.77c7.845 0 14.434 2.532 18.943 7.193a2.597 2.597 0 0 1-.067 3.68l-.017.017l-3.878 3.66a2.864 2.864 0 0 1-3.82.099q-.09-.078-.172-.143M352.193 6.26c3.903 0 6.691 2.856 6.691 6.832s-2.788 6.833-6.691 6.833s-6.691-2.857-6.691-6.833s2.788-6.832 6.69-6.832m-3.385 20.08h6.77a2.853 2.853 0 0 1 2.857 2.848v42.86a2.853 2.853 0 0 1-2.857 2.849h-6.77a2.853 2.853 0 0 1-2.858-2.848V29.188a2.853 2.853 0 0 1 2.858-2.849m41.814-.145q.34-.057.788-.105a2.855 2.855 0 0 1 3.169 2.831v6.172a2.853 2.853 0 0 1-2.785 2.848q-.602.015-1.01.054c-7.774.73-12.541 5.936-12.541 13.47V72.05a2.853 2.853 0 0 1-2.857 2.848h-6.77a2.853 2.853 0 0 1-2.858-2.848V29.188a2.853 2.853 0 0 1 2.857-2.849h6.77a2.853 2.853 0 0 1 2.858 2.849v5.2c2.79-4.52 7.009-7.312 12.379-8.193m41.44 14.468q-.985-.84-1.672-1.267c-2.564-1.595-5.59-2.426-9.003-2.426c-7.514 0-12.696 5.552-12.696 13.693c0 8.294 5.16 13.871 12.696 13.871c3.62 0 6.744-.806 9.242-2.388q.781-.495 1.885-1.556a2.864 2.864 0 0 1 3.804-.15l3.625 2.982a2.84 2.84 0 0 1 .386 4.01l-.057.067q-1.365 1.55-2.362 2.365c-4.382 3.58-10.245 5.48-17.15 5.48c-14.6 0-24.644-10.012-24.644-24.592c0-14.727 10.102-24.77 24.823-24.77c7.092 0 13.166 2.069 17.607 5.928q.497.432 1.155 1.12a2.84 2.84 0 0 1-.1 4.028l-.005.005l-3.712 3.503a2.864 2.864 0 0 1-3.822.097m16.886-32.797h6.77a2.853 2.853 0 0 1 2.858 2.849v61.334a2.853 2.853 0 0 1-2.858 2.848h-6.77a2.853 2.853 0 0 1-2.857-2.848V10.715a2.853 2.853 0 0 1 2.857-2.849M489.75 65.16c3.826 0 7.43-1.15 10.42-3.322q.244-.176.555-.433a2.864 2.864 0 0 1 3.88.222l2.919 3.026a2.84 2.84 0 0 1-.164 4.105q-1.693 1.496-2.866 2.252c-4.403 2.836-9.772 4.334-15.731 4.334c-15.041 0-25.092-9.915-25.092-24.591c0-14.695 10.16-24.77 24.822-24.77c15.326 0 23.414 9.003 23.507 24.938q.003.562-.022 1.402a2.853 2.853 0 0 1-2.856 2.763h-32.587c1.618 6.29 6.567 10.074 13.215 10.074m10.7-18.651c-.43-6.587-4.963-10.699-11.867-10.699c-6.507 0-11.16 4.07-12.354 10.699z" fill="#FFF"></path>
<path d="M38.503 75.28q12.15 9.876 4.09 20.988c-6.622 8.92-18.88 12.16-29.255 7.142l-.087-.042l-.075-.037C1.512 97.64-3.311 83.608 2.404 71.991l12.934-26.295l7.268-14.775l8.735-17.758C35.585 4.533 44.438-.35 53.5.02c8.754-.033 17.18 4.81 21.289 13.162l28.936 58.828c5.715 11.617.892 25.649-10.772 31.34l-.075.037l-.087.042c-11.592 5.606-25.533.905-31.34-10.508q-4.515-9.458 6.022-17.854h-.002c5.283-4.251 8.662-10.757 8.662-18.048c0-12.807-10.423-23.188-23.28-23.188s-23.28 10.381-23.28 23.188c0 7.414 3.493 14.015 8.93 18.26m14.372-6.109c-6.756 0-12.233-5.454-12.233-12.183s5.477-12.184 12.233-12.184c6.755 0 12.232 5.455 12.232 12.184S59.63 69.17 52.875 69.17" fill="#FF8F34"></path>
</svg>
<svg className="w-[92px] h-[36px]" data-icon-replaced="true" data-icon-set="logos" data-logos="google" fill="none" height="36" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '92px', height: '36px'}} viewbox="0 0 512 168" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m496.052 102.672l14.204 9.469c-4.61 6.79-15.636 18.44-34.699 18.44c-23.672 0-41.301-18.315-41.301-41.614c0-24.793 17.816-41.613 39.308-41.613c21.616 0 32.206 17.193 35.633 26.475l1.869 4.735l-55.692 23.049c4.236 8.348 10.84 12.584 20.183 12.584c9.345 0 15.823-4.61 20.495-11.525M452.384 87.66l37.19-15.45c-2.056-5.17-8.16-8.845-15.45-8.845c-9.281 0-22.176 8.223-21.74 24.295" fill="#FF302F"></path>
<path d="M407.407 4.931h17.94v121.85h-17.94z" fill="#20B15A"></path>
<path d="M379.125 50.593h17.318V124.6c0 30.711-18.128 43.357-39.558 43.357c-20.183 0-32.33-13.58-36.878-24.606l15.885-6.604c2.865 6.79 9.78 14.827 20.993 14.827c13.767 0 22.24-8.535 22.24-24.482v-5.98h-.623c-4.112 4.983-11.961 9.468-21.928 9.468c-20.807 0-39.87-18.128-39.87-41.488c0-23.486 19.063-41.8 39.87-41.8c9.905 0 17.816 4.423 21.928 9.282h.623zm1.245 38.499c0-14.702-9.78-25.417-22.239-25.417c-12.584 0-23.174 10.715-23.174 25.417c0 14.514 10.59 25.042 23.174 25.042c12.46.063 22.24-10.528 22.24-25.042" fill="#3686F7"></path>
<path d="M218.216 88.78c0 23.984-18.688 41.613-41.613 41.613c-22.924 0-41.613-17.691-41.613-41.613c0-24.108 18.689-41.675 41.613-41.675c22.925 0 41.613 17.567 41.613 41.675m-18.19 0c0-14.95-10.84-25.23-23.423-25.23S153.18 73.83 153.18 88.78c0 14.826 10.84 25.23 23.423 25.23c12.584 0 23.423-10.404 23.423-25.23" fill="#FF302F"></path>
<path d="M309.105 88.967c0 23.984-18.689 41.613-41.613 41.613c-22.925 0-41.613-17.63-41.613-41.613c0-24.108 18.688-41.613 41.613-41.613c22.924 0 41.613 17.443 41.613 41.613m-18.253 0c0-14.95-10.839-25.23-23.423-25.23s-23.423 10.28-23.423 25.23c0 14.826 10.84 25.23 23.423 25.23c12.646 0 23.423-10.466 23.423-25.23" fill="#FFBA40"></path>
<path className="" d="M66.59 112.328c-26.102 0-46.534-21.056-46.534-47.158c0-26.101 20.432-47.157 46.534-47.157c14.079 0 24.357 5.544 31.957 12.646l12.522-12.521C100.479 7.984 86.338.258 66.59.258C30.833.259.744 29.414.744 65.17s30.089 64.912 65.846 64.912c19.312 0 33.889-6.354 45.289-18.19c11.711-11.712 15.324-28.158 15.324-41.489c0-4.174-.498-8.472-1.059-11.649H66.59v17.318h42.423c-1.246 10.84-4.672 18.253-9.718 23.298c-6.105 6.168-15.76 12.958-32.705 12.958" fill="#3686F7"></path>
</svg>
<svg className="w-[92px] h-[36px]" data-icon-replaced="true" data-icon-set="logos" data-logos="descript" fill="none" height="36" strokeWidth="2" style={{width: '92px', height: '36px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 512 121" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M0 109.614c0 6.585 4.273 10.856 10.86 10.856h31.732c18.93 0 34.415-6.402 44.943-17.61H0zM42.592.001L10.861 0C4.273 0 0 4.271 0 10.856v6.754h87.535C77.007 6.402 61.522 0 42.592 0m27.693 77.4c0 5.327 3.472 8.783 8.824 8.783h19.014c2.156-5.346 3.604-11.224 4.277-17.567H79.11c-5.353 0-8.825 3.456-8.825 8.784M43.93 43.113c0 5.328 3.471 8.784 8.824 8.784H102.4c-.673-6.343-2.121-12.22-4.277-17.567h-45.37c-5.352 0-8.823 3.455-8.823 8.783m8.818 34.288c0-5.328-3.472-8.784-8.824-8.784H0v17.567h43.924c5.352 0 8.824-3.455 8.824-8.783M26.393 43.113c0-5.328-3.472-8.783-8.825-8.783H0v17.567h17.568c5.353 0 8.825-3.456 8.825-8.784M171.67 78.306c-9.404 0-15.058-6.743-15.058-15.06s5.762-15.058 15.059-15.058c9.296 0 15.058 6.742 15.058 15.059s-5.653 15.059-15.058 15.059M185.706 44.1c-3.756-4.51-9.088-7.276-15.707-7.276c-14.794 0-25.433 11.983-25.433 26.764c0 14.782 10.538 26.764 25.433 26.764c6.62 0 11.951-2.765 15.707-7.276v5.958h13.071V18.07h-13.071zm37.6 14.32c1.415-6.874 5.982-10.37 11.985-10.37c5.952 0 10.304 3.652 11.692 10.37zm12.312-22.28c-15.286 0-24.793 12.239-24.793 27.209c0 15.504 10.16 27.003 25.259 27.003c10.414 0 16.73-4.826 20.64-10.903l-9.72-6.224c-2.445 3.346-6.355 5.114-10.547 5.114c-6.857 0-11.449-3.217-13.014-9.651h25.659l9.347.08c.355-1.693.564-3.442.564-5.42c0-13.039-8.016-27.208-23.395-27.208m63.37 26.217c3.548 2.479 5.797 6.196 5.797 11.102c0 9.914-6.682 16.792-19.176 16.792c-11.757 0-18.062-6.024-20.573-12.109l10.792-6.302l.104.364c.448 1.38 2.511 6.212 9.484 6.212c5.036 0 6.586-2.226 6.586-4.192l-.032-.47c-.136-.95-.81-2.334-3.842-3.533l-1.472-.534c-7.463-2.523-19.641-4.423-19.641-16.561c0-10.622 8.325-16.286 18.594-16.286c9.603 0 15.771 5.974 18.113 10.623l-10.558 6.169l-.224-.476c-.658-1.278-2.827-4.684-7.234-4.684c-5.423 0-5.907 3.137-5.907 4.047c0 2.478 2.358 3.593 7.4 5.127l3.723 1.106c2.184.668 4.41 1.456 6.697 2.753zm36.856 15.148c5.185 0 9.171-2.583 11.186-6.82l10.83 6.485c-4.244 7.774-12.15 13.182-22.016 13.182c-14.962 0-25.422-11.957-25.422-26.705c0-14.75 10.556-26.706 25.422-26.706c9.72 0 17.598 5.32 21.887 12.99l-10.806 6.634c-2.054-4.182-6.008-6.777-11.08-6.777c-7.56 0-12.93 6.204-12.93 13.859c0 7.653 5.32 13.858 12.93 13.858m43.73-30.751c2.342-6.09 7.113-9.573 14.3-9.588v14.472c-8.102-.818-14.041 3.288-14.289 13.003l-.012 1.17v22.611h-12.137v-50.25h12.137zm22.618 41.668V38.171h12.137v50.252zm0-56.958V18.07h12.537v13.394zm50.053 5.199c13.736 0 23.615 11.88 23.615 26.533s-9.785 26.533-23.615 26.533c-6.145 0-11.096-2.741-14.583-7.213v25.907h-12.138V38.07h12.138v5.805c3.487-4.471 8.438-7.212 14.583-7.212m-1.553 12.362c-8.044 0-13.03 6.344-13.03 14.17c0 7.827 4.892 14.172 13.03 14.172c8.139 0 13.031-6.345 13.031-14.171c0-7.827-4.987-14.171-13.03-14.171M512 50.8h-10.944v21.04c0 6.577 6.392 5.16 10.944 5.16v11.836l-1.205.152c-1.104.115-2.938.252-5.38.252l-1.776-.038c-8.465-.376-15.076-3.734-15.076-17.361V50.8h-8.426V38.255h8.426V24.094h12.493v14.162H512z" fill="#0062FF"></path></svg><svg className="w-[92px] h-[36px]" data-icon-replaced="true" data-icon-set="logos" data-logos="replay" fill="none" height="36" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '92px', height: '36px'}} viewbox="0 0 512 160" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M63.397 31.206L11.173.999A7.443 7.443 0 0 0 1 3.73a7.47 7.47 0 0 0-1 3.73v60.414a7.47 7.47 0 0 0 3.725 6.462a7.44 7.44 0 0 0 7.448.001l52.224-30.206a7.46 7.46 0 0 0 3.725-6.463a7.47 7.47 0 0 0-3.725-6.463m0 84.127L11.173 85.127A7.44 7.44 0 0 0 1 87.859a7.47 7.47 0 0 0-1 3.731v60.414a7.47 7.47 0 0 0 3.725 6.462a7.44 7.44 0 0 0 7.448.001l52.224-30.207a7.473 7.473 0 0 0 0-12.926m74.47-42.055L85.645 43.07a7.44 7.44 0 0 0-10.174 2.733a7.47 7.47 0 0 0-.999 3.73v60.413a7.47 7.47 0 0 0 3.725 6.462a7.44 7.44 0 0 0 7.448.002l52.224-30.207a7.46 7.46 0 0 0 3.725-6.463a7.46 7.46 0 0 0-3.725-6.463m70.323 32.573V33.197h24.55q8.514 0 13.977 2.91q5.463 2.873 8.089 7.91q2.625 5.038 2.625 11.46q0 6.42-2.625 11.387q-2.626 4.966-8.053 7.805q-5.428 2.802-13.872 2.802h-19.866v-7.946H232.6q5.817 0 9.365-1.703q3.583-1.702 5.18-4.825q1.632-3.158 1.632-7.52q0-4.364-1.632-7.628t-5.215-5.038q-3.583-1.809-9.472-1.809H216.99v64.85zm34.2-32.637l17.88 32.638h-10.218l-17.596-32.638zm50.828 33.773q-7.875 0-13.588-3.476q-5.676-3.513-8.763-9.792q-3.05-6.314-3.05-14.687q0-8.371 3.05-14.758q3.087-6.42 8.586-10.004q5.534-3.618 12.913-3.619q4.257 0 8.408 1.42q4.15 1.418 7.556 4.611q3.405 3.158 5.428 8.373q2.022 5.215 2.022 12.842v3.547H273.78v-7.236h33.489q0-4.612-1.845-8.23q-1.808-3.62-5.18-5.713q-3.334-2.092-7.875-2.092q-5.002 0-8.656 2.483a16.34 16.34 0 0 0-5.57 6.385q-1.95 3.939-1.951 8.444v4.824q0 6.173 2.128 10.466q2.165 4.257 5.996 6.492q3.83 2.2 8.905 2.2q3.298 0 5.96-.923q2.696-.958 4.647-2.838q1.95-1.916 3.015-4.754l8.089 2.27a17.9 17.9 0 0 1-4.293 7.238q-3.015 3.086-7.45 4.824q-4.435 1.704-9.968 1.703m35.298 19.3V51.36h8.088v8.656h.994l.327-.495q.867-1.29 2.227-3.123q1.668-2.235 4.754-3.974q3.122-1.773 8.443-1.774q6.883 0 12.133 3.442q5.25 3.441 8.195 9.756q2.944 6.315 2.944 14.9q.001 8.655-2.944 15.006q-2.945 6.315-8.16 9.791q-5.214 3.441-12.026 3.441q-5.25 0-8.408-1.738q-3.157-1.774-4.86-4.009q-1.702-2.27-2.625-3.76h-.71v28.806zm8.23-47.68q0 6.172 1.81 10.89q1.809 4.684 5.286 7.344q3.477 2.625 8.514 2.625q5.25 0 8.763-2.767q3.546-2.802 5.32-7.52q1.81-4.755 1.81-10.573q0-5.746-1.774-10.359q-1.737-4.646-5.286-7.343q-3.511-2.731-8.833-2.731q-5.108 0-8.585 2.59q-3.477 2.553-5.25 7.165q-1.775 4.576-1.775 10.678m61.02-45.41v72.655h-8.373V33.196zm31.369 73.932q-5.18 0-9.401-1.95q-4.222-1.989-6.705-5.713q-2.484-3.76-2.484-9.081q0-4.684 1.845-7.592a13 13 0 0 1 4.931-4.612q3.087-1.668 6.812-2.484a83 83 0 0 1 7.556-1.347l3.272-.412q2.784-.34 4.781-.546q3.123-.355 4.541-1.171q1.454-.816 1.454-2.838v-.284q0-5.25-2.873-8.16q-2.838-2.908-8.62-2.908q-5.996 0-9.402 2.625t-4.789 5.605l-7.947-2.838q2.13-4.966 5.677-7.734q3.582-2.803 7.804-3.902q4.257-1.136 8.373-1.136q2.625 0 6.03.639q3.442.603 6.634 2.52q3.229 1.915 5.358 5.781q2.127 3.868 2.128 10.36v35.9h-8.373v-7.378h-.425q-.852 1.774-2.838 3.796t-5.286 3.441t-8.053 1.42m1.277-7.52q4.967 0 8.372-1.952q3.44-1.95 5.18-5.037q1.773-3.087 1.773-6.493v-7.662q-.532.638-2.34 1.17q-1.774.497-4.116.887q-2.307.355-4.505.639l-2.63.313l-.883.112q-3.264.427-6.101 1.384q-2.803.923-4.541 2.803q-1.703 1.845-1.703 5.037q0 4.364 3.228 6.599q3.264 2.2 8.266 2.2m42.42 26.677q-1.862 0-3.371-.271l-.424-.083q-1.668-.32-2.306-.639l2.128-7.379q3.051.78 5.392.568t4.151-2.093q1.846-1.845 3.37-5.996l1.562-4.257l-20.151-54.775h9.082l15.042 43.422h.568l15.041-43.422H512l-23.13 62.438q-1.56 4.222-3.867 6.988q-2.306 2.803-5.357 4.152q-3.015 1.347-6.811 1.347" fill="#F41C52"></path>
</svg>
</div>
</div>
</section>

<section className="lg:w-[45%] group animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] w-full relative animate" onmouseleave="this.querySelector('.tilt-card').style.transform='rotateX(0) rotateY(0)'" onmousemove="const c=this.querySelector('.tilt-card');const r=this.getBoundingClientRect();const x=event.clientX-r.left;const y=event.clientY-r.top;const cx=r.width/2;const cy=r.height/2;const rx=((y-cy)/cy)*5;const ry=((x-cx)/cx)*5;c.style.transform='rotateX('+rx+'deg) rotateY('+ry+'deg)'" style={{perspective: '1200px'}}>
<div className="tilt-card transition-transform duration-300 ease-out will-change-transform w-full h-full relative" style={{transformStyle: 'preserve-3d', transform: 'rotateX(0deg) rotateY(0deg)'}}>
<div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] absolute -inset-4 bg-gradient-to-r from-purple-700/20 via-slate-800/20 to-neutral-700/20 blur-2xl" style={{transform: 'translateZ(-15px)'}}></div>
<div className="font-jakarta bg-[#000000]/80 border-white/10 border rounded-[28px] pt-4 pr-4 pb-4 pl-4 relative shadow-[0_0_0_1px_rgba(15,23,42,0.7),0_40px_120px_rgba(0,0,0,0.95)] backdrop-blur-xl" style={{transform: 'translateZ(10px)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" style={{padding: '1px', background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.5), rgba(251, 146, 60, 0))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent absolute top-0 right-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
</div>
<div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 via-white/0 to-transparent pointer-events-none">
</div>
<div className="flex z-10 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border-white/10 border rounded-2xl pt-3 pr-4 pb-3 pl-4 relative items-center justify-between">
<div className="flex space-x-3 items-center">
<div className="flex flex-col">
<span className="text-[13px] text-slate-50 font-geist" style={{}}>
                        Neuro workspace
                      </span>
<span className="text-[10px] text-slate-500 font-geist" style={{}}>
                        AI hub · Delivery squad
                      </span>
</div>
</div>
<div className="flex text-[11px] text-slate-300 space-x-2 items-center">
<button className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[10px] text-slate-100 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] font-geist hover:bg-slate-800 transition-colors" style={{}}>
<span className="mr-1" style={{}}>+</span>
                      Add shortcut
                    </button>
<button className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[10px] text-slate-100 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] font-geist hover:bg-slate-800 transition-colors" style={{}}>
                      Share with team
                    </button>
<button className="inline-flex bg-slate-900/80 w-7 h-7 border-white/10 border rounded-lg shadow-[0_0_0_1px_rgba(15,23,42,0.9)] items-center justify-center hover:bg-slate-800 transition-colors">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>
<div className="flex z-10 bg-slate-950/50 border-white/10 border rounded-2xl mt-3 pt-2 pr-3 pb-2 pl-3 relative shadow-inner items-center justify-between">
<div className="flex items-center space-x-1 text-[11px] text-slate-400">
<button className="rounded-lg px-3 py-1 text-slate-300 hover:bg-slate-900/60 font-geist transition-colors" style={{}}>
                      Overview
                      <span className="ml-1 rounded-full bg-slate-800 px-1.5 py-0.5 text-[9px] text-slate-200 shadow-sm" style={{}}>
                        6
                      </span>
</button>
<button className="rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 px-3 py-1 text-slate-50 shadow-[0_0_0_1px_rgba(2(0,0,0,0.2)] font-geist" style={{}}>
                      Neuro resources
                      <span className="ml-1 rounded-full bg-slate-700 px-1.5 py-0.5 text-[9px] text-slate-200" style={{}}>
                        9
                      </span>
</button>
<button className="rounded-lg px-3 py-1 text-slate-300 hover:bg-slate-900/60 font-geist transition-colors" style={{}}>
                      Discussions
                      <span className="ml-1 rounded-full bg-slate-800 px-1.5 py-0.5 text-[9px] text-slate-200 shadow-sm" style={{}}>
                        2
                      </span>
</button>
<button className="rounded-lg px-3 py-1 text-slate-300 hover:bg-slate-900/60 font-geist transition-colors" style={{}}>
                      Notes
                    </button>
</div>
</div>
<div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/90 p-3 shadow-inner relative z-10">
<div className="space-y-2.5">
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center space-x-1.5 text-slate-200">
<span className="text-slate-100 font-geist" style={{}}>
                          Neuro suggestions
                        </span>
</div>
<button className="text-[10px] text-slate-500 hover:text-slate-300 font-geist transition-colors" style={{}}>
                        View all suggestions
                      </button>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/50 px-3 py-2 hover:bg-slate-800/50 transition-colors">
<div className="flex items-center space-x-2.5">
<div className="flex text-slate-50 bg-slate-950 w-8 h-8 border border-white/10 rounded-lg shadow-sm items-center justify-center">
<svg className="w-4 h-4 text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-slate-100 font-geist" style={{}}>
                              Onboarding playbook
                            </span>
<div className="flex items-center space-x-2 text-[10px] text-slate-500">
<span className="font-geist" style={{}}>
                                4 docs
                              </span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>
                                Notion
                              </span>
</div>
</div>
</div>
<div className="flex items-center space-x-1.5">
<div className="flex -space-x-1.5">
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc6dc108-07ea-4b25-98fb-c8196765a394_320w.webp"/>
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e54e567-5c30-441a-baee-ee5f1bd4e184_320w.webp"/>
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32bd1b67-735b-4792-bd12-9726c91248d8_320w.webp"/>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/50 px-3 py-2 hover:bg-slate-800/50 transition-colors">
<div className="flex items-center space-x-2.5">
<div className="flex text-slate-50 bg-slate-950 w-8 h-8 border border-white/10 rounded-lg shadow-sm items-center justify-center">
<svg className="w-4 h-4 text-orange-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
</path>
<path d="M12 10v6"></path>
<path d="M9 13h6"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-slate-100 font-geist" style={{}}>
                              Neuro overview deck
                            </span>
<div className="flex items-center space-x-2 text-[10px] text-slate-500">
<span className="font-geist" style={{}}>
                                PowerPoint
                              </span>
</div>
</div>
</div>
<div className="flex items-center space-x-1.5">
<div className="flex -space-x-1.5">
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da6db32c-0d2f-48d3-8267-62eda009f312_320w.webp"/>
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1798060b-f297-4981-a4f3-745854800fb8_320w.jpg"/>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/50 px-3 py-2 hover:bg-slate-800/50 transition-colors">
<div className="flex items-center space-x-2.5">
<div className="flex text-slate-50 bg-slate-950 w-8 h-8 border border-white/10 rounded-lg shadow-sm items-center justify-center">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-slate-100 font-geist" style={{}}>
                              Launch schedule
                            </span>
<div className="flex items-center space-x-2 text-[10px] text-slate-500">
<span className="font-geist" style={{}}>
                                16 tasks
                              </span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>
                                Google Sheets
                              </span>
</div>
</div>
</div>
<div className="flex items-center space-x-1.5">
<div className="flex -space-x-1.5">
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5fb2db0-6611-418c-8354-c7ffd5959c6d_320w.webp"/>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-2.5">
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center space-x-1.5 text-slate-200">
<span className="text-slate-100 font-geist" style={{}}>
                          Team work in progress
                        </span>
</div>
<button className="text-[10px] text-slate-500 hover:text-slate-300 font-geist transition-colors" style={{}}>
                        View all work
                      </button>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/50 px-3 py-2 hover:bg-slate-800/50 transition-colors">
<div className="flex items-center space-x-2.5">
<div className="flex text-slate-50 bg-slate-950 w-8 h-8 border border-white/10 rounded-lg shadow-sm items-center justify-center">
<svg className="w-4 h-4 text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-slate-100 font-geist" style={{}}>
                              Customer feedback – June
                            </span>
<div className="flex items-center space-x-2 text-[10px] text-slate-500">
<span className="font-geist" style={{}}>
                                4 threads
                              </span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>
                                Docs
                              </span>
</div>
</div>
</div>
<div className="flex items-center space-x-1.5">
<div className="flex -space-x-1.5">
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd2478f4-b046-42e8-ada4-3dfb61175c5c_320w.webp"/>
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/50 px-3 py-2 hover:bg-slate-800/50 transition-colors">
<div className="flex items-center space-x-2.5">
<div className="flex text-slate-50 bg-slate-950 w-8 h-8 border border-white/10 rounded-lg shadow-sm items-center justify-center">
<svg className="w-4 h-4 text-sky-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"> <rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-slate-100 font-geist" style={{}}>
                              Release checklist
                            </span>
<div className="flex items-center space-x-2 text-[10px] text-slate-500">
<span className="font-geist" style={{}}>
                                19 items
                              </span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>
                                Sheets
                              </span>
</div>
</div>
</div>
<div className="flex items-center space-x-1.5">
<div className="flex -space-x-1.5">
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="" className="h-5 w-5 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/985c6eb9-fe04-40ea-a141-ee053f273a3c_320w.webp"/>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/95 px-3 py-2 text-[10px] text-slate-400 shadow-lg">
<div className="flex items-center space-x-1.5">
<span className="text-slate-200 font-geist" style={{}}>
                        Neuro links
                      </span>
<span className="h-1 w-4 rounded-full bg-slate-700/70"></span>
<span className="font-geist" style={{}}>
                        Docs, sheets, tickets
                      </span>
</div>
<div className="flex items-center space-x-1.5">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
</span>
<span className="font-geist" style={{}}>
                        Instant sync on
                      </span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>


<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="md:p-8 bg-gradient-to-br from-blue-500/10 via-blue-500/0 to-blue-500/10 rounded-[28px] pt-6 pr-6 pb-6 pl-6 shadow-[0_40px_120px_rgba(0,0,0,0.95)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.2))', '--border-radius-before': '28px'}}>
<section className="animate-on-scroll lg:pb-0 lg:pl-0 lg:pr-0 max-w-6xl mr-auto ml-auto pr-0 pb-0 pl-0" id="pricing">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between gap-x-6 gap-y-6 items-start">
<div className="">
<p className="text-[10px] uppercase text-slate-500 font-geist" style={{}}>
                    Product capabilities
                  </p>
<h2 className="sm:text-3xl text-2xl text-slate-50 mt-2 font-geist font-light tracking-tighter" style={{}}>
                    One workspace, three ways to accelerate work
                  </h2>
<p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl font-geist" style={{}}>
                    NeuroDesk plugs into your existing tools, learns from your
                    documents and turns every workflow into a reusable,
                    searchable playbook.
                  </p>
</div>
<button className="inline-flex text-[12px] transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(248,181,129,0.9),0_0_0_1px_rgba(251,191,36,0.7)] text-white font-geist bg-gradient-to-bl from-[#fff370] via-orange-500 to-[#fff370] h-9 rounded-full pr-6 pl-6 items-center" style={{borderRadius: '9999px', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}} type="submit">
                  Get Started Free
                </button>
</div>
<div className="grid gap-4 md:grid-cols-3 mt-8 gap-x-4 gap-y-4">
<div className="flex flex-col overflow-hidden sm:p-4 font-geist bg-gradient-to-b from-slate-900/90 to-slate-950/95 h-[360px] border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">
<style>
                    @keyframes orbit {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    @keyframes orbit-reverse {
                      from { transform: rotate(360deg); }
                      to { transform: rotate(0deg); }
                    }
                  </style>
<div className="flex flex-col h-full relative gap-4">
<div className="relative flex items-center justify-center rounded-2xl h-48 overflow-hidden bg-[#05030F] w-full shrink-0">
<div className="opacity-60 absolute top-0 right-0 bottom-0 left-0" style="
          background-image: radial-gradient(rgba(30,41,59,0.6) 1px, transparent 0);
          background-size: 18px 18px;
        "></div>
<div className="relative z-10 w-56 h-56 scale-90">
<div className="absolute inset-2 rounded-full border border-slate-900/60"></div>
<div className="absolute inset-2 rounded-full border-t-2 border-t-orange-400/80 border-l-0 border-r-0 border-b-0" style={{transform: 'rotate(40deg)'}}></div>
<div className="absolute inset-10 rounded-full border border-slate-900/60"></div>
<div className="absolute inset-10 rounded-full border-t-2 border-t-orange-300/80 border-l-0 border-r-0 border-b-0" style={{transform: 'rotate(-20deg)'}}></div>
<div className="absolute inset-[86px] rounded-full bg-gradient-to-b from-orange-400 via-orange-500 to-amber-400 shadow-[0_0_80px_rgba(248,181,129,0.65)] flex items-center justify-center z-20">
<svg className="w-6 h-6 text-slate-50" height="24" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0a7.23 7.23 0 0 1 2.455-5.438m10.583-1.124a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0a8.73 8.73 0 0 0-2.962-6.562m-7.601 13.584a.75.75 0 1 0-.374 1.452a8.8 8.8 0 0 0 4.374 0a.75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25a7.3 7.3 0 0 1-1.813-.228" fill="currentColor" opacity=".5"></path>
<path d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0M2.5 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m16 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" fill="currentColor"></path>
</svg>
</div>
<div className="absolute inset-0 z-10 pointer-events-none" style={{animation: 'orbit 40s linear infinite'}}>
<div className="absolute -left-1 top-16 h-9 w-9 rounded-full border border-white/70 overflow-hidden bg-[#05030F] pointer-events-auto" style={{animation: 'orbit-reverse 40s linear infinite'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8deab20-79f0-4568-be6e-c4baeded4050_320w.webp"/>
</div>
<div className="absolute right-2 top-6 h-9 w-9 rounded-full border border-white/70 overflow-hidden bg-[#05030F] pointer-events-auto" style={{animation: 'orbit-reverse 40s linear infinite'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80b61cd8-8abc-4da0-bb0d-3e4d2d961c4f_320w.webp"/>
</div>
<div className="absolute -right-1 bottom-10 h-9 w-9 rounded-full border border-white/70 overflow-hidden bg-[#05030F] pointer-events-auto" style={{animation: 'orbit-reverse 40s linear infinite'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ae8587a-051a-4cf8-b727-f61e05474f40_320w.webp"/>
</div>
<div className="absolute left-5 bottom-3 h-9 w-9 rounded-full border border-white/70 overflow-hidden bg-[#05030F] pointer-events-auto" style={{animation: 'orbit-reverse 40s linear infinite'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e49c05ca-9dac-4be2-81e9-3f55b5165162_320w.webp"/>
</div>
</div>
</div>
</div>
<div className="relative mt-auto pb-1">
<h2 className="md:text-lg text-lg text-slate-50" style={{}}>
                        Align your team on every license
                      </h2>
<p className="text-sm text-slate-400 max-w-sm mt-2" style={{}}>
                        Share context, owners, and usage for each product so
                        every seat is easy to audit.
                      </p>
</div>
</div>
</div>
<div className="flex flex-col overflow-hidden sm:p-4 font-geist bg-gradient-to-b from-slate-900/90 to-slate-950/95 h-[360px] border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">
<div className="flex flex-col h-full relative gap-4">
<div className="flex overflow-hidden h-48 bg-[#05030F] rounded-2xl relative items-center justify-center w-full shrink-0">
<div className="absolute inset-0 h-full w-full pointer-events-none select-none" style="
        background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
        background-size: 20px 20px;
        mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
     "></div>
<div className="grid grid-cols-4 content-center overflow-hidden w-full h-full z-10 pt-4 pr-4 pb-4 pl-4 relative gap-x-3 gap-y-3" style={{maskImage: 'linear-gradient(180deg, transparent, black 40%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 40%, black 70%, transparent)'}}>
<style>
                          @keyframes aura-scroll-down {
                            0% { transform: translateY(-50%); }
                            100% { transform: translateY(0); }
                          }
                          @keyframes aura-scroll-up {
                            0% { transform: translateY(0); }
                            100% { transform: translateY(-50%); }
                          }
                          .animate-col-down { animation: aura-scroll-down 20s linear infinite; }
                          .animate-col-up { animation: aura-scroll-up 20s linear infinite; }
                        </style>
<div className="relative h-full overflow-hidden">
<div className="flex flex-col gap-3 animate-col-down w-full">
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-slate-100/10 via-slate-100/0 to-transparent"></div>
<div className="flex h-full relative items-center justify-center">
<svg className="w-5 h-5" fill="none" viewbox="0 0 256 227" xmlns="http://www.w3.org/2000/svg">
<path d="m128.024 83.527l60.288 143.042h-39.513l-18.038-45.554H86.642zM256 0v226.54L161.353 0zM94.684 0L0 226.54V0z" fill="#FA0F00"></path>
</svg>
</div>
</div>
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-sky-200/15 via-transparent to-transparent"></div>
<div className="flex h-full relative items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 384" xmlns="http://www.w3.org/2000/svg">
<path d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" fill="#0ACF83"></path>
<path d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" fill="#A259FF"></path>
<path d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" fill="#F24E1E"></path>
<path d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" fill="#FF7262"></path>
<path d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" fill="#1ABCFE"></path>
</svg>
</div>
</div>
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-blue-200/15 via-transparent to-transparent"></div>
<div className="relative flex h-full items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 268" xmlns="http://www.w3.org/2000/svg">
<path d="M16.092 11.538L164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188" fill="#FFF"></path>
<path d="M164.09.608L16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608M69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921M212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715c-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585l52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404z"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="relative h-full overflow-hidden">
<div className="flex flex-col gap-3 animate-col-up w-full">
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-rose-200/15 via-transparent to-transparent"></div>
<div className="relative flex h-full items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z" fill="#E01E5A"></path>
<path d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z" fill="#36C5F0"></path>
<path d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z" fill="#2EB67D"></path>
<path d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z" fill="#ECB22E"></path>
</svg>
</div>
</div>
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-emerald-200/15 via-transparent to-transparent"></div>
<div className="flex h-full relative items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2S8.6 193.8 8.6 127.9S62 8.5 128 8.5" fill="#E74D89"></path>
<path d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8s-57.4 127.9-128 127.9m107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7c14.3 39.2 20.1 71.2 21.2 77.8c24.6-16.5 42.1-42.7 46.9-73.1m-65.2 83.2c-1.6-9.6-8-43-23.3-82.8c-.2.1-.5.2-.7.2c-61.7 21.5-83.8 64.2-85.8 68.2c18.5 14.4 41.8 23 67.1 23c15.1.1 29.6-3 42.7-8.6M46.8 201c2.5-4.2 32.5-53.8 88.9-72.1c1.4-.5 2.9-.9 4.3-1.3c-2.7-6.2-5.7-12.4-8.9-18.5c-54.6 16.3-107.6 15.6-112.4 15.5c0 1.1-.1 2.2-.1 3.3c.1 28.1 10.7 53.7 28.2 73.1M21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2C50.9 43.6 28.1 71.8 21 105.6m81.4-83.8c3 4 22.9 31 40.8 63.9c38.9-14.6 55.3-36.6 57.3-39.4c-19.3-17.1-44.7-27.5-72.5-27.5c-8.8 0-17.4 1.1-25.6 3m110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1c2.5 5.2 5 10.5 7.3 15.8c.8 1.9 1.6 3.8 2.4 5.6c36.4-4.6 72.5 2.8 76.1 3.5c-.3-25.7-9.5-49.4-24.8-68" fill="#B2215A"></path>
</svg>
</div>
</div>
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-lime-200/15 via-transparent to-transparent"></div>
<div className="flex h-full relative items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 384" xmlns="http://www.w3.org/2000/svg">
<path d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" fill="#0ACF83"></path>
<path d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" fill="#A259FF"></path>
<path d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" fill="#F24E1E"></path>
<path className="" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" fill="#FF7262"></path>
<path d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" fill="#1ABCFE"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="overflow-hidden h-full relative">
<div className="flex flex-col gap-3 animate-col-down w-full">
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-indigo-200/15 via-transparent to-transparent"></div>
<div className="relative flex h-full items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 268" xmlns="http://www.w3.org/2000/svg">
<path d="M16.092 11.538L164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188" fill="#FFF"></path>
<path d="M164.09.608L16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608M69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921M212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715c-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585l52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404z"></path>
</svg>
</div>
</div>
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-violet-200/15 via-transparent to-transparent"></div>
<div className="relative flex h-full items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z" fill="#E01E5A"></path>
<path d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z" fill="#36C5F0"></path>
<path d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z" fill="#2EB67D"></path>
<path d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z" fill="#ECB22E"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="relative h-full overflow-hidden">
<div className="flex flex-col gap-3 animate-col-up w-full">
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-lime-200/15 via-transparent to-transparent"></div>
<div className="flex h-full relative items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 384" xmlns="http://www.w3.org/2000/svg">
<path d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" fill="#0ACF83"></path>
<path d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" fill="#A259FF"></path>
<path d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" fill="#F24E1E"></path>
<path d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" fill="#FF7262"></path>
<path d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" fill="#1ABCFE"></path>
</svg>
</div>
</div>
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-teal-200/15 via-transparent to-transparent"></div>
<div className="flex h-full relative items-center justify-center">
<svg className="w-5 h-5" fill="none" viewbox="0 0 256 227" xmlns="http://www.w3.org/2000/svg">
<path d="m128.024 83.527l60.288 143.042h-39.513l-18.038-45.554H86.642zM256 0v226.54L161.353 0zM94.684 0L0 226.54V0z" fill="#FA0F00"></path>
</svg>
</div>
</div>
<div className="aspect-square rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 shadow-[0_1px_0_rgba(148,163,184,0.2)] relative overflow-hidden flex-shrink-0">
<div className="absolute inset-x-1 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-orange-200/15 via-transparent to-transparent"></div>
<div className="flex h-full relative items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2S8.6 193.8 8.6 127.9S62 8.5 128 8.5" fill="#E74D89"></path>
<path d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8s-57.4 127.9-128 127.9m107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7c14.3 39.2 20.1 71.2 21.2 77.8c24.6-16.5 42.1-42.7 46.9-73.1m-65.2 83.2c-1.6-9.6-8-43-23.3-82.8c-.2.1-.5.2-.7.2c-61.7 21.5-83.8 64.2-85.8 68.2c18.5 14.4 41.8 23 67.1 23c15.1.1 29.6-3 42.7-8.6M46.8 201c2.5-4.2 32.5-53.8 88.9-72.1c1.4-.5 2.9-.9 4.3-1.3c-2.7-6.2-5.7-12.4-8.9-18.5c-54.6 16.3-107.6 15.6-112.4 15.5c0 1.1-.1 2.2-.1 3.3c.1 28.1 10.7 53.7 28.2 73.1M21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2C50.9 43.6 28.1 71.8 21 105.6m81.4-83.8c3 4 22.9 31 40.8 63.9c38.9-14.6 55.3-36.6 57.3-39.4c-19.3-17.1-44.7-27.5-72.5-27.5c-8.8 0-17.4 1.1-25.6 3m110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1c2.5 5.2 5 10.5 7.3 15.8c.8 1.9 1.6 3.8 2.4 5.6c36.4-4.6 72.5 2.8 76.1 3.5c-.3-25.7-9.5-49.4-24.8-68" fill="#B2215A"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative mt-auto pb-1">
<h2 className="md:text-lg text-lg text-slate-50 font-geist" style={{}}>
                        Connect every product in a single view
                      </h2>
<p className="text-sm text-slate-400 max-w-sm mt-2" style={{}}>
                        Bring billing, ownership, and access into one panel,
                        with each tool living in a clear, dedicated tile.
                      </p>
</div>
</div>
</div>
<div className="flex flex-col overflow-hidden sm:p-4 font-geist bg-gradient-to-b from-slate-900/90 to-slate-950/95 h-[360px] border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">
<style>
                    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
                    @keyframes pulse-glow { 0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(248,181,129,0.6); } 50% { transform: scale(1.05); box-shadow: 0 0 120px rgba(248,181,129,0.8); } }
                    .animate-float-1 { animation: float 4s ease-in-out infinite; }
                    .animate-float-2 { animation: float 5s ease-in-out infinite; animation-delay: 1s; }
                    .animate-float-3 { animation: float 4.5s ease-in-out infinite; animation-delay: 2s; }
                    .animate-pulse-logo { animation: pulse-glow 3s ease-in-out infinite; }
                  </style>
<div className="flex flex-col h-full relative gap-4">
<div className="relative flex items-center justify-center rounded-2xl h-48 overflow-hidden bg-[#05030F] w-full shrink-0">
<div className="opacity-60 absolute top-0 right-0 bottom-0 left-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(30,41,59,0.6) 1px, transparent 0)', backgroundSize: '18px 18px'}}></div>
<div className="flex w-[200px] h-[200px] relative items-center justify-center scale-90">
<svg className="relative w-[260px] h-[220px] z-10 pointer-events-none select-none" viewbox="0 0 260 220">
<circle cx="130" cy="110" fill="rgba(8,9,20,0.95)" r="88"></circle>
<circle cx="130" cy="110" fill="none" r="86" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></circle>
<circle cx="130" cy="110" fill="none" r="56" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></circle>
<g fill="none" strokeLinecap="round" strokeWidth="2">
<path d="M130 110 C 105 90 85 70 76 58" stroke="rgba(252,211,77,0.4)"></path>
<path d="M130 110 C 160 90 188 70 198 58" stroke="rgba(251,146,60,0.4)"></path>
<path d="M130 110 C 132 135 132 155 130 176" stroke="rgba(249,115,22,0.4)"></path>
</g>
<g transform="translate(50,30)">
<g className="animate-float-1">
<rect fill="rgba(15,23,42,0.95)" height="30" rx="10" stroke="rgba(248,250,252,0.15)" width="52"></rect>
<rect fill="#f97316" height="12" rx="4" width="16" x="10" y="9"></rect>
<rect fill="rgba(248,250,252,0.2)" height="12" rx="3" width="10" x="30" y="9"></rect>
</g>
</g>
<g transform="translate(172,32)">
<g className="animate-float-2">
<rect fill="rgba(15,23,42,0.95)" height="30" rx="10" stroke="rgba(248,250,252,0.15)" width="52"></rect>
<rect fill="#fb923c" height="12" rx="4" width="24" x="10" y="9"></rect>
<rect fill="rgba(248,250,252,0.25)" height="12" rx="3" width="6" x="36" y="9"></rect>
</g>
</g>
<g transform="translate(104,172)">
<g className="animate-float-3">
<rect fill="rgba(15,23,42,0.95)" height="30" rx="10" stroke="rgba(248,250,252,0.15)" width="52"></rect>
<rect fill="#facc15" height="12" rx="4" width="32" x="10" y="9"></rect>
</g>
</g>
</svg>
<div className="absolute w-[70px] h-[70px] rounded-full bg-gradient-to-b from-orange-400 via-orange-500 to-amber-400 flex items-center justify-center z-20 animate-pulse-logo">
<svg className="opacity-90 w-8 h-8 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path>
<path d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.061.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06" opacity=".4"></path>
<path d="M8.31 7.488a.75.75 0 0 1-.036 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 0 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.433.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 0 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" opacity=".8"></path>
</svg>
</div>
</div>
</div>
<div className="relative mt-auto pb-1">
<h2 className="md:text-lg text-lg text-slate-50" style={{}}>
                        Route spend to the right budget
                      </h2>
<p className="text-sm text-slate-400 max-w-sm mt-2" style={{}}>
                        Automatically allocate charges to teams, tags, and cost
                        centers the moment they hit your card.
                      </p>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 mt-4 gap-x-4 gap-y-4">
<style>
                  @keyframes aura-spin-chart { from { transform: rotate(-90deg); } to { transform: rotate(270deg); } }
                  @keyframes aura-float-card { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
                  @keyframes aura-pulse-slow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.05); } }
                </style>

<div className="overflow-hidden sm:p-4 font-geist bg-gradient-to-b from-slate-900/90 to-slate-950/95 border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">

<div className="flex-1 flex flex-col gap-5 relative gap-x-5 gap-y-5 justify-between">
<div className="overflow-hidden sm:p-4 font-geist bg-gradient-to-b from-slate-900/90 to-slate-950/95 border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">
<style>
                        @keyframes aura-chart-fill {
                          0% { stroke-dasharray: 0 95; opacity: 0; }
                          15% { opacity: 1; }
                          100% { stroke-dasharray: 18 77; opacity: 1; }
                        }
                        .aura-slice {
                          animation: aura-chart-fill 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                          opacity: 0;
                        }
                      </style>
<div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
<div className="relative w-[180px] h-[180px]">
<svg className="w-[180px] h-[180px]" strokeWidth="3.4" style={{animation: 'aura-spin-chart 60s linear infinite', transform: 'rotate(-90deg)'}} viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" opacity="0.9" r="15" stroke="#020617" strokeWidth="5.5"></circle>
<circle className="aura-slice" cx="18" cy="18" fill="none" r="15" stroke="#facc15" stroke-dasharray="18 77" stroke-dashoffset="2" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.1s'}}></circle>
<circle className="aura-slice" cx="18" cy="18" fill="none" r="15" stroke="#fb923c" stroke-dasharray="18 77" stroke-dashoffset="22" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.2s'}}></circle>
<circle className="aura-slice" cx="18" cy="18" fill="none" r="15" stroke="#f97373" stroke-dasharray="18 77" stroke-dashoffset="42" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.3s'}}></circle>
<circle className="aura-slice" cx="18" cy="18" fill="none" r="15" stroke="#ec4899" stroke-dasharray="18 77" stroke-dashoffset="62" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.4s'}}></circle>
<circle className="aura-slice" cx="18" cy="18" fill="none" r="15" stroke="#8b5cf6" stroke-dasharray="18 77" stroke-dashoffset="82" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.5s'}}></circle>
<circle className="aura-slice" cx="18" cy="18" fill="none" r="15" stroke="#3b82f6" stroke-dasharray="18 77" stroke-dashoffset="102" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.6s'}}></circle>
</svg>
<div className="absolute inset-[32px] rounded-full bg-[#05030F] shadow-[0_0_40px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center text-center">
<span className="text-[11px] text-slate-300" style={{}}>
                              Neural Networks
                            </span>
<span className="mt-1 text-3xl font-medium text-slate-50">
                              27
                            </span>
</div>
</div>
<div className="w-full max-w-[220px] rounded-2xl bg-black/40 border border-slate-800/70 shadow-[0_18px_45px_rgba(0,0,0,0.85)] px-4 py-4">
<div className="flex items-center justify-between text-xs mb-3">
<span className="text-slate-200" style={{}}>
                              AI
                              <span className="text-slate-50" style={{}}>
                                Processing
                              </span>
</span>
</div>
<div className="space-y-2.5 text-[11px]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
<span className="text-slate-200" style={{}}>Learning</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-sky-400"></span>
<span className="text-slate-200" style={{}}>Analysis</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="">
<span className="h-2.5 w-2.5 rounded-full bg-indigo-400"></span>
<span className="text-slate-200" style={{}}>Automation</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
<span className="text-slate-200" style={{}}>Integration</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative">
<h2 className="md:text-xl text-lg text-slate-50 font-geist" style={{}}>
                        Visualize spend by team and purpose
                      </h2>
<p className="mt-2 text-sm text-slate-400 font-geist" style={{}}>
                        Slice your subscriptions across departments to uncover
                        duplication and highlight hidden growth costs.
                      </p>
</div>
</div>
</div>
<div className="overflow-hidden sm:p-4 font-geist bg-gradient-to-b from-slate-900/90 to-slate-950/95 border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">

<div className="overflow-hidden sm:p-5 font-geist h-full border-0 rounded-none pt-4 pr-4 pb-4 pl-4 relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-y-8 right-[-40%] w-[80%] bg-gradient-to-l from-emerald-500/30 via-indigo-500/10 to-transparent blur-3xl" style={{animation: 'aura-pulse-slow 8s ease-in-out infinite'}}></div>
</div>
<div className="flex-1 flex flex-col gap-5 relative gap-x-5 gap-y-5 justify-between">
<div className="space-y-3">
<style>
                          @keyframes aura-typing {
                            0%, 5% { width: 0; }
                            40%, 80% { width: 100%; }
                            90%, 100% { width: 0; }
                          }
                          @keyframes aura-blink {
                            0%, 100% { border-color: transparent; }
                            50% { border-color: #fb923c; }
                          }
                        </style>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-transparent rounded-2xl blur-md" style={{}}></div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<div className="h-4 flex items-center">
<span className="text-[11px] text-slate-300 font-geist whitespace-nowrap overflow-hidden border-r-2 border-orange-400 pr-1" style={{animation: '4s steps(25) 0s infinite normal none running aura-typing, 0.75s step-end 0s infinite normal none running aura-blink', display: 'inline-block', verticalAlign: 'middle'}}>
                                Filter: expiring soon...
                              </span>
</div>
</div>
<div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-3 py-3" style={{animation: 'aura-float-card 5s ease-in-out infinite'}}>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-sky-500/10 border border-sky-400/60 flex items-center justify-center" style={{}}>
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(241, 245, 249)', width: '16px', height: '16px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 7.5A1.5 1.5 0 0 1 6.5 6h6A1.5 1.5 0 0 1 14 7.5v9A1.5 1.5 0 0 1 12.5 18h-6A1.5 1.5 0 0 1 5 16.5Z" fill="#bfdbfe"></path>
<path className="" d="M14 10.5 18.5 8A1 1 0 0 1 20 8.87v7.26a1 1 0 0 1-1.5.87L14 15Z" fill="#3b82f6" opacity="0.9"></path>
</svg>
</div>
<div className="">
<p className="text-sm text-slate-100 font-geist" style={{}}>
                                  Streamframe Studio
                                </p>
<p className="text-[11px] text-slate-400 font-geist" style={{}}>
                                  Trial ends tomorrow
                                </p>
</div>
</div>
<button className="text-[11px] text-emerald-300 hover:text-emerald-200 font-geist" style={{}}>
                              Keep plan
                            </button>
</div>
<div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-3 py-3" style={{animation: 'aura-float-card 5s ease-in-out infinite', animationDelay: '1.5s'}}>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-purple-500/15 border border-purple-400/70 flex items-center justify-center" style={{}}>
<svg className="h-4 w-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.5 7.5A4 4 0 0 1 17 9a3 3 0 0 1 0 6H7A3 3 0 0 1 7 9a4 4 0 0 1 2.5-1.5Z" fill="#e9d5ff"></path>
<path d="M9 18.5h7" stroke="#a855f7" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="">
<p className="text-sm text-slate-100 font-geist" style={{}}>
                                  Nimbus Cloud Pro
                                </p>
<p className="text-[11px] text-slate-400 font-geist" style={{}}>
                                  Usage at 72% of limit
                                </p>
</div>
</div>
<span className="text-[11px] text-amber-300 font-geist" style={{}}>
                              Review quota
                            </span>
</div>
</div>
</div>
<div className="relative">
<h2 className="md:text-xl text-lg text-slate-50 font-geist" style={{}}>
                          Never miss a renewal or trial again
                        </h2>
<p className="mt-2 text-sm text-slate-400 max-w-sm font-geist" style={{}}>
                          Configure rules once and let Orbitflow schedule
                          nudges, approvals, and automatic cancellations in the
                          background.
                        </p>
</div>
</div>
</div>
</div>


</div>
</section>


</div>
</section>
<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:px-6 lg:pt-12 lg:pb-12 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="md:p-8 bg-gradient-to-br from-blue-500/10 via-blue-500/0 to-blue-500/10 rounded-[28px] pt-6 pr-6 pb-6 pl-6 shadow-[0_40px_120px_rgba(0,0,0,0.95)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.2))', '--border-radius-before': '28px'}}>
<div className="flex flex-col gap-8 md:flex-row md:items-stretch md:justify-between md:gap-x-12 gap-y-8">

<div className="flex flex-col md:flex-none max-w-sm justify-between">
<div className="">
<span className="text-[10px] uppercase text-xs text-slate-400 font-geist" style={{}}>
                    Testimonial
                  </span>
<h3 className="sm:text-3xl text-2xl font-light text-slate-50 tracking-tighter font-geist mt-2">
                    Results that speak volumeRead success stories
                  </h3>
<p className="sm:text-base text-sm text-slate-400 mt-3 font-geist" style={{}}>
                    NeuroDesk plugs into your existing tools and turns every
                    scattered document, ticket and thread into one reliable
                    source of truth for your team.
                  </p>

<div className="flex gap-3 mt-6 gap-x-3 gap-y-3 items-start">
<button className="inline-flex hover:bg-white/10 transition text-sm text-slate-100 font-geist bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center" style={{}}>
                      View all reviews
                      <svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" style={{color: 'rgb(241, 245, 249)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="#f1f5f9" fill-rule="evenodd" opacity=".5"></path>
<path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="#f1f5f9"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="w-full md:flex-1 mt-2 md:mt-0">
<div className="overflow-hidden md:h-[360px] bg-gradient-to-br from-blue-500/10 to-blue-500/0 h-[340px] rounded-3xl pt-5 pr-5 pb-5 pl-5 relative shadow-[0_24px_60px_rgba(0,0,0,0.9)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '24px'}}>
<div className="flex flex-col md:flex-row md:items-center gap-8 h-full relative">

<div className="md:w-5/12 w-full h-full">
<div className="overflow-hidden h-full rounded-2xl relative">
<img alt="Happy customer" className="transition-opacity duration-300 w-full h-full object-cover" id="neuro-t-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef9d9bb-799c-4f7d-a32d-bdafde13fc98_800w.webp"/>
</div>
</div>

<div className="md:w-7/12 flex flex-col w-full h-full justify-center">
<div className="relative">

<span className="pointer-events-none select-none -left-4 -top-10 text-[100px] md:text-[120px] leading-none font-light text-slate-500/20 font-geist absolute">
                          “
                        </span>
<span className="select-none -right-2 -bottom-10 text-[100px] leading-none md:text-[120px] font-light text-slate-500/30 font-geist z-10 absolute translate-y-16">
                          ”
                        </span>
<p className="leading-relaxed sm:text-base z-10 text-sm text-slate-100 font-geist mt-0 mb-0 pt-4 pb-4 relative transition-opacity duration-300" id="neuro-t-text" style={{}}>
                          Neuro has completely transformed the way we work. It
                          automates the repetitive tasks we used to lose hours
                          on and keeps every workflow organized. Our team moves
                          faster, communicates better, and stays focused on the
                          work that matters.
                        </p>
</div>
<div className="mt-6 z-10">
<p className="text-base text-slate-50 font-geist transition-opacity duration-300" id="neuro-t-author" style={{}}>
                          Emily Labelle
                        </p>
<p className="sm:text-sm text-xs text-slate-400 font-geist transition-opacity duration-300" id="neuro-t-role" style={{}}>
                          Operations Manager, FlowSync Technologies
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mt-0 gap-x-6 gap-y-6">

<div className="flex gap-4 items-center">
<div className="flex -space-x-2">
<img className="h-10 w-10 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img className="h-10 w-10 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img className="h-10 w-10 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="text-base text-slate-100 font-geist" style={{}}>
                    1500 satisfied clients
                  </span>
<span className="text-sm text-slate-500 font-geist" style={{}}>
                    love our workspace and automations
                  </span>
</div>
</div>

<div className="flex items-center gap-3 mt-2 sm:mt-0">

<button className="h-10 w-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-sm group" onclick="window.neuroPrevTestimonial()">
<svg className="w-[16px] h-[16px] text-slate-300 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M20.75 12a.75.75 0 0 0-.75-.75h-9.25v1.5H20a.75.75 0 0 0 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path d="M10.75 18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53z" fill="currentColor"></path>
</svg>
</button>

<button className="h-10 w-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-sm group" onclick="window.neuroNextTestimonial()">
<svg className="group-hover:text-white transition-colors w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path className="" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>

</div>
</section>
<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:px-6 lg:pt-12 lg:pb-12 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="md:p-8 bg-gradient-to-br from-blue-500/10 via-blue-500/0 to-blue-500/10 rounded-[28px] pt-6 pr-6 pb-6 pl-6 shadow-[0_40px_120px_rgba(0,0,0,0.95)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.2))', '--border-radius-before': '28px'}}>
<section className="lg:pb-0 lg:pl-0 lg:pr-0 max-w-6xl mr-auto ml-auto pr-0 pb-0 pl-0" id="pricing">
<div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
<div className="">
<p className="text-[10px] uppercase text-slate-500 font-geist" style={{}}>
                    Pricing
                  </p>
<h2 className="mt-2 text-2xl sm:text-3xl text-slate-50 font-geist font-light tracking-tighter" style={{}}>
                    Start small, scale to every workflow
                  </h2>
<p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl font-geist" style={{}}>
                    Pick a plan that matches where you are today. All plans
                    include secure search, audit logs and SOC2‑ready controls.
                  </p>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-400 font-geist" style={{}}>
<div className="inline-flex bg-black/70 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 items-center">
<button className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-900 text-[11px] font-geist" style={{}}>
                      Monthly
                    </button>
<button className="px-4 py-1.5 rounded-full text-[11px] text-slate-400 hover:text-slate-200 font-geist" style={{}}>
                      Yearly
                    </button>
</div>
</div>
</div>
<div className="grid gap-4 md:grid-cols-3 mt-8 gap-x-4 gap-y-4">

<div className="group relative flex flex-col bg-gradient-to-br from-blue-500/10 to-blue-500/0 hover:from-orange-500/10 hover:to-orange-500/0 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(251,146,60,0.15)]" style={{'--border-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>

<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{padding: '1px', background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.5), rgba(251, 146, 60, 0))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>

<div className="h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent absolute top-0 right-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-sm sm:text-base text-slate-50 font-geist" style={{}}>
                        Starter
                      </h3>
<p className="mt-1 text-xs text-slate-400 font-geist" style={{}}>
                        For small teams testing AI workflows.
                      </p>
</div>
<span className="inline-flex items-center justify-center text-slate-200 bg-slate-900 w-8 h-8 rounded-xl">
<svg aria-hidden="true" className="iconify text-base iconify--solar" data-icon="solar:stars-minimalistic-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5s1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004s.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83s-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384s-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004z" fill="currentColor"></path>
<path d="M4.868 2.5c.03-.105.217-.106.248 0c.14.482.4 1.194.793 1.585c.393.39 1.108.646 1.59.783c.107.03.107.217.002.248c-.482.14-1.195.4-1.586.793c-.39.393-.645 1.108-.782 1.59c-.03.107-.218.107-.249.002c-.14-.482-.4-1.195-.793-1.586c-.393-.39-1.107-.645-1.59-.782c-.106-.03-.107-.218-.001-.249c.482-.14 1.194-.4 1.585-.793c.39-.393.646-1.107.783-1.59" fill="currentColor" opacity=".5"></path>
<path clip-rule="evenodd" d="M19 3.25a.75.75 0 0 1 .75.75v.25H20a.75.75 0 0 1 0 1.5h-.25V6a.75.75 0 0 1-1.5 0v-.25H18a.75.75 0 0 1 0-1.5h.25V4a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
</svg>
</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-2xl text-slate-50 font-geist font-light tracking-tighter" style={{}}>
                      $29
                    </span>
<span className="text-[11px] text-slate-500 font-geist" style={{}}>
                      seat / month
                    </span>
</div>
<ul className="mt-4 space-y-1.5 text-xs text-slate-400 font-geist flex-1" style={{}}>
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg aria-hidden="true" className="iconify text-[13px] text-emerald-400 iconify--solar" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path>
</svg>
                      Up to 25 teammates
                    </li>
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg aria-hidden="true" className="iconify text-[13px] text-emerald-400 iconify--solar" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path>
</svg>
                      5 core integrations
                    </li>
</ul>
<button className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-100 text-slate-950 text-xs py-2 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 font-geist transition-all duration-300" style={{}}>
                    Start free trial
                  </button>
</div>


<div className="group relative flex flex-col bg-gradient-to-br from-blue-500/10 to-blue-500/0 hover:from-orange-500/10 hover:to-orange-500/0 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(251,146,60,0.15)]" style={{'--border-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>

<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{padding: '1px', background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.5), rgba(251, 146, 60, 0))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>

<div className="h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent absolute top-0 right-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between" style={{}}>
<div className="">
<div className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 border border-amber-400/40 text-[10px] text-amber-100 font-geist" style={{}}>
<svg aria-hidden="true" className="iconify text-xs iconify--solar" data-icon="solar:fire-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" fill="currentColor" opacity=".5"></path>
<path d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445" fill="currentColor"></path>
</svg>
                        Most popular
                      </div>
<h3 className="mt-2 text-sm sm:text-base text-slate-50 font-geist" style={{}}>
                        Scale
                      </h3>
<p className="mt-1 text-xs text-slate-300 font-geist" style={{}}>
                        For teams rolling NeuroDesk out across orgs.
                      </p>
</div>
<span className="inline-flex items-center justify-center text-slate-200 bg-slate-900 w-8 h-8 rounded-xl">
<svg aria-hidden="true" className="iconify iconify--solar text-base w-[16px] h-[16px]" data-icon="solar:stars-minimalistic-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="fire-bold-duotone" height="16" role="img" strokeWidth="2" style={{color: 'rgb(226, 232, 240)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" fill="#e2e8f0" opacity=".5"></path>
<path d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445" fill="#e2e8f0"></path>
</svg>
</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-2xl text-slate-50 font-geist font-light tracking-tighter">
                      $59
                    </span>
<span className="text-[11px] text-slate-400 font-geist" style={{}}>
                      seat / month
                    </span>
</div>
<ul className="mt-4 space-y-1.5 text-xs text-slate-300 font-geist flex-1" style={{}}>
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg aria-hidden="true" className="iconify text-[13px] text-amber-300 iconify--solar" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path>
</svg>
                      Unlimited teammates
                    </li>
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg aria-hidden="true" className="iconify text-[13px] text-amber-300 iconify--solar" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path>
</svg>
                      All integrations + API access
                    </li>
</ul>
<button className="inline-flex text-xs text-slate-950 font-geist bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 w-full rounded-xl mt-4 pt-2 pb-2 items-center justify-center transition-all duration-300" style={{}}>
                    Talk to sales
                  </button>
</div>

<div className="group relative rounded-2xl border border-white/10 hover:border-white/0 bg-slate-950/80 hover:bg-slate-900 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.8)] flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(251,146,60,0.15)]" style={{}}>

<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{padding: '1px', background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.5), rgba(251, 146, 60, 0))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>

<div className="h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent absolute top-0 right-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-sm sm:text-base text-slate-50 font-geist" style={{}}>
                        Enterprise
                      </h3>
<p className="mt-1 text-xs text-slate-400 font-geist" style={{}}>
                        For regulated, global and high‑volume teams.
                      </p>
</div>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-slate-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar text-base w-[16px] h-[16px]" data-icon="solar:buildings-3-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M10.75 2h2c1.886 0 2.828 0 3.414.586S16.75 4.114 16.75 6v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.886 0-2.828.586-3.414S8.864 2 10.75 2M9 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 12m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 15m2.75 3.25a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75M9.25 7a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" fill="currentColor" fill-rule="evenodd"></path>
<path className="" d="M10.75 7a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.55.889c.337.504.337 1.206.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 1 1 0-1.5h.5V8.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 2.537-.332 3.618-.336q-.005.437-.004.91V7.25H4.25a.75.75 0 1 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v6.5h10v-6.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497V5.91q.001-.471-.004-.91c1.081.005 3.17.042 3.612.337a2 2 0 0 1 .552.552" fill="currentColor" opacity=".5"></path>
</svg>
</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-2xl text-slate-50 font-geist font-light tracking-tighter" style={{}}>
                      Custom
                    </span>
</div>
<ul className="mt-4 space-y-1.5 text-xs text-slate-400 font-geist flex-1" style={{}}>
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg aria-hidden="true" className="iconify text-[13px] text-emerald-400 iconify--solar" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path>
</svg>
                      Private cloud or on‑prem options
                    </li>
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg aria-hidden="true" className="iconify text-[13px] text-emerald-400 iconify--solar" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path>
</svg>
                      Custom compliance (SOC2, ISO 27001)
                    </li>
</ul>
<button className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-100 text-slate-950 text-xs py-2 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 font-geist transition-all duration-300" style={{}}>
                    Contact enterprise
                  </button>
</div>
</div>
<div className="mt-10">

<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mt-8 mb-8"></div>
<h3 className="sm:text-base text-sm text-slate-50 font-geist mb-4" style={{}}>
                  FAQ
                </h3>
<div className="space-y-4">

<div className="faq-item flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-2xl pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 cursor-pointer group select-none transition-colors hover:from-blue-500/20 hover:to-blue-500/5" onclick="window.neuroToggleFaq(this)" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>
<div className="flex-1 pr-2">
<p className="text-xs sm:text-sm text-slate-50 font-geist group-hover:text-white transition-colors" style={{}}>
                        What payment methods do you accept?
                      </p>
<p className="faq-answer mt-1 text-xs text-slate-400 font-geist" style={{}}>
                        We accept all major credit cards, including Visa,
                        Mastercard, and American Express. We also support
                        payments through PayPal.
                      </p>
</div>
<div className="faq-icon shrink-0 inline-flex text-slate-300 bg-slate-900 w-7 h-7 rounded-full items-center justify-center transition-transform duration-300 transform rotate-180" style={{position: 'relative', -BorderGradient: 'linear-gradient(315deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px'}}>
<svg className="w-[14px] h-[14px] text-slate-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="faq-item flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-2xl pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 cursor-pointer group select-none transition-colors hover:from-blue-500/20 hover:to-blue-500/5" onclick="window.neuroToggleFaq(this)" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>
<div className="flex-1 pr-2">
<p className="text-xs sm:text-sm text-slate-50 font-geist group-hover:text-white transition-colors" style={{}}>
                        Can I change my plan later?
                      </p>
<p className="faq-answer hidden mt-1 text-xs text-slate-400 font-geist" style={{}}>
                        Yes, you can easily upgrade or downgrade your plan at
                        any time from your account settings. Changes take effect
                        immediately.
                      </p>
</div>
<div className="faq-icon shrink-0 inline-flex text-slate-300 bg-slate-900 w-7 h-7 rounded-full items-center justify-center transition-transform duration-300 transform rotate-0" style={{position: 'relative', -BorderGradient: 'linear-gradient(315deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px'}}>
<svg className="w-[14px] h-[14px] text-slate-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="faq-item flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-2xl pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 cursor-pointer group select-none transition-colors hover:from-blue-500/20 hover:to-blue-500/5" onclick="window.neuroToggleFaq(this)" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>
<div className="flex-1 pr-2">
<p className="text-xs sm:text-sm text-slate-50 font-geist group-hover:text-white transition-colors" style={{}}>
                        Do you offer refunds?
                      </p>
<p className="faq-answer hidden mt-1 text-xs text-slate-400 font-geist" style={{}}>
                        We offer a 30-day money-back guarantee for all new
                        subscriptions. Contact our support team for any billing
                        inquiries.
                      </p>
</div>
<div className="faq-icon shrink-0 inline-flex text-slate-300 bg-slate-900 w-7 h-7 rounded-full items-center justify-center transition-transform duration-300 transform rotate-0" style={{position: 'relative', -BorderGradient: 'linear-gradient(315deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px'}}>
<svg className="w-[14px] h-[14px] text-slate-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
</div>
</section>


</div>
</section>

<div className="w-full max-w-6xl">

</div>
</main>

<footer className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:px-6 lg:pt-12 lg:pb-0 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="footer">
<div className="lg:px-6 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 max-w-6xl rounded-3xl mr-auto mb-8 ml-auto pt-8 pr-4 pb-8 pl-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '24px'}}>

<div className="mb-0 pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight font-geist">
                Let’s talk workflows
                <svg className="inline-block ml-4 w-[48px] h-[48px]" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '48px', height: '48px', color: 'rgb(251, 191, 36)'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</h2>
<button className="inline-flex text-[12px] transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(248,181,129,0.9),0_0_0_1px_rgba(251,191,36,0.7)] text-white font-geist bg-gradient-to-bl from-[#fff370] via-orange-500 to-[#fff370] h-9 rounded-full pr-6 pl-6 items-center" style={{borderRadius: '9999px', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}} type="submit">
                Get In Touch
              </button>
</div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

<div className="flex flex-col gap-12 gap-x-12 gap-y-12">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">

<div className="">
<div className="flex items-center gap-3 mb-4">
<svg className="w-[120px] h-[40px]" data-icon-replaced="true" fill="none" height="40" strokeWidth="2" style={{color: 'rgb(241, 245, 249)', width: '120px', height: '40px'}} viewbox="0 0 120 40" width="120" xmlns="http://www.w3.org/2000/svg">
<text className="" fill="white" fontFamily="'Inter', sans-serif" fontSize="28" font-weight="600" x="0" y="30">
    Neuro
  </text>
</svg>
</div>
<p className="text-xs text-white/60 font-geist max-w-xs" style={{}}>
                  Neuro is your workflow command center. Automate tasks, keep
                  projects in sync, and help your team ship faster with less
                  chaos.
                </p>
</div>

<div className="">
<h4 className="text-sm text-amber-300 mb-4 font-geist" style={{}}>
                  Product
                </h4>
<ul className="space-y-2">
<li>
<a className="text-white/70 hover:text-white transition font-geist" href="#" style={{}}>
                      Overview
                    </a>
</li>
<li>
<a className="text-white/70 hover:text-white transition font-geist" href="#" style={{}}>
                      Workflow Builder
                    </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm text-amber-300 mb-4 font-geist" style={{}}>
                  Resources
                </h4>
<ul className="space-y-2">
<li className="">
<a className="text-white/70 hover:text-white transition font-geist" href="#" style={{}}>
                      Documentation
                    </a>
</li>
<li className="">
<a className="text-white/70 hover:text-white transition font-geist" href="#" style={{}}>
                      Workflow Library
                    </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm text-amber-300 mb-4 font-geist" style={{}}>
                  Company
                </h4>
<ul className="space-y-2 mb-6">
<li>
<a className="hover:text-white transition text-white/70 font-geist" href="#" style={{}}>
                      About Neuro
                    </a>
</li>
<li className="">
<a className="text-white/70 hover:text-white transition font-geist" href="#" style={{}}>
                      Careers
                    </a>
</li>
</ul>
<div className="text-white/70 font-geist font-light tracking-tight text-xs space-y-1">
<p className="text-white" style={{}}>Neuro Studio</p>
<p className="" style={{}}>Remote-first / Montreal, Canada</p>
<p className="" style={{}}>Built for product, design &amp; ops teams.</p>
<p className="" style={{}}>hello@neuro.app</p>
</div>
<div className="flex items-center gap-3 mt-4">

<a className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 hover:bg-amber-400/20 transition" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18.146 2H21l-6.52 7.45L22.5 22H16.3L11.5 15.6 5.94 22H3.09l6.98-7.97L1.5 2h6.36l4.3 5.86L18.15 2z"></path>
</svg>
</a>

<a className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 hover:bg-amber-400/20 transition" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm6.743 5.89a9.46 9.46 0 0 1 2.01 5.414 17.28 17.28 0 0 0-6.397-.295 31.27 31.27 0 0 0-1.066-2.6 9.434 9.434 0 0 0 5.453-2.519zM12 2.07a9.41 9.41 0 0 1 6.002 2.163 7.93 7.93 0 0 1-4.82 2.215 32.21 32.21 0 0 0-3.03-4.9A9.5 9.5 0 0 1 12 2.07zM8.44 3.02a30.68 30.68 0 0 1 3.018 4.84 7.93 7.93 0 0 1-6.19-2.19 9.53 9.53 0 0 1 3.172-2.65zM2.06 12c0-.492.037-.974.107-1.444a9.44 9.44 0 0 1 5.64 1.023 32.63 32.63 0 0 0-2.39 5.98A9.47 9.47 0 0 1 2.06 12zm3.22 6.397a30.8 30.8 0 0 1 2.3-5.7 7.5 7.5 0 0 1 4.18 3.98 7.7 7.7 0 0 1 .42 1.48 9.4 9.4 0 0 1-6.9-1.76zm8.23 1.603a9.6 9.6 0 0 1-.7-2.3 5.9 5.9 0 0 0-.28-1.03 5.9 5.9 0 0 0-3.3-3.48 29.4 29.4 0 0 1 1.65-3.85 29.7 29.7 0 0 1 1.01 2.47c.27.78.5 1.56.7 2.34a29.4 29.4 0 0 1 .42 3.85 9.5 9.5 0 0 1-1.52.8zm2.54-1.32a27.6 27.6 0 0 0-.49-3.34 15.4 15.4 0 0 1 5.1.32 9.5 9.5 0 0 1-4.61 3.02z"></path>
</svg>
</a>

<a className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 hover:bg-amber-400/20 transition" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.23 8.27h4.54V23H.23V8.27zM8.3 8.27h4.35v2.01h.06c.61-1.16 2.12-2.38 4.37-2.38 4.67 0 5.53 3.07 5.53 7.06V23h-4.54v-7.07c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V23H8.3V8.27z"></path>
</svg>
</a>

<a className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 hover:bg-amber-400/20 transition" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm6.406-.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs">
<p className="text-white/70 font-geist" style={{}}>
                © Neuro. All rights reserved.
              </p>
<div className="flex items-center gap-6">
<a className="text-white/70 hover:text-white transition font-geist" href="#" style={{}}>
                  Privacy Policy
                </a>
<span className="text-white/30" style={{}}>/</span>
<a className="text-white/70 hover:text-white transition font-geist" href="#" style={{}}>
                  Terms &amp; Conditions
                </a>
</div>
</div>
</div>
</div>
</footer>
</div>

<div className="gradient-blur" style={{}}>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
      .gradient-blur{position:fixed;z-index:5;inset:auto 0 0 0;height:65%;pointer-events:none}.gradient-blur>div,.gradient-blur::before,.gradient-blur::after{position:absolute;inset:0}.gradient-blur::before{content:"";z-index:1;backdrop-filter:blur(0.5px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 25%,rgba(0,0,0,0) 37.5%)}.gradient-blur>div:nth-of-type(1){z-index:2;backdrop-filter:blur(1px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 12.5%,rgba(0,0,0,1) 25%,rgba(0,0,0,1) 37.5%,rgba(0,0,0,0) 50%)}.gradient-blur>div:nth-of-type(2){z-index:3;backdrop-filter:blur(2px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 37.5%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 62.5%)}.gradient-blur>div:nth-of-type(3){z-index:4;backdrop-filter:blur(4px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 37.5%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 62.5%,rgba(0,0,0,0) 75%)}.gradient-blur>div:nth-of-type(4){z-index:5;backdrop-filter:blur(8px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 62.5%,rgba(0,0,0,1) 75%,rgba(0,0,0,0) 87.5%)}.gradient-blur>div:nth-of-type(5){z-index:6;backdrop-filter:blur(16px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 62.5%,rgba(0,0,0,1) 75%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)}.gradient-blur>div:nth-of-type(6){z-index:7;backdrop-filter:blur(32px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 75%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,1) 100%)}.gradient-blur::after{content:"";z-index:8;backdrop-filter:blur(64px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 87.5%,rgba(0,0,0,1) 100%)}
    </style>

    </>
  );
}
