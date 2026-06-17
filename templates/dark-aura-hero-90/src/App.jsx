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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


  document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('lensTechChart').getContext('2d');
    
    // Gradient for the line
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(220, 38, 38, 0.5)'); // Red-600
    gradient.addColorStop(1, 'rgba(220, 38, 38, 0.0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['День 1', 'День 2', 'День 3', 'День 4', 'День 5', 'День 6', 'День 7'],
        datasets: [
          {
            label: '044 Studio (AI)',
            data: [10, 45, 80, 95, 100, 100, 100], // Fast rise
            borderColor: '#ef4444', // Red-500
            backgroundColor: gradient,
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
            fill: true
          },
          {
            label: 'Classic CGI',
            data: [5, 10, 15, 25, 40, 55, 65], // Slow linear
            borderColor: '#404040', // Neutral-700
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 0,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(10, 10, 10, 0.9)',
            titleColor: '#fff',
            bodyColor: '#a3a3a3',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            titleFont: { family: 'Plus Jakarta Sans', size: 10 },
            bodyFont: { family: 'Plus Jakarta Sans', size: 10 },
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.y + '% готово';
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.03)',
              drawBorder: false
            },
            ticks: {
              color: '#525252',
              font: { family: 'Plus Jakarta Sans', size: 9 },
              maxRotation: 0
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.03)',
              drawBorder: false
            },
            ticks: {
              color: '#525252',
              font: { family: 'Plus Jakarta Sans', size: 9 },
              callback: function(value) { return value + '%' }
            },
            min: 0,
            max: 100
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
      }
    });
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[900px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 mx-auto max-w-7xl grid-lines border-r border-l border-white/[0.03]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--accent-glow),_transparent_70%)] opacity-50 blur-3xl"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0s_both] animate">
<nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/5 bg-[#050505]/80 p-2 pl-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">

<a className="text-white font-bold tracking-tighter text-lg" href="#">044.studio</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#cases">Кейсы</a>
<a className="hover:text-white transition-colors" href="#process">Процесс</a>
<a className="hover:text-white transition-colors" href="#contact">Контакты</a>
</div>
<div className="flex items-center gap-2">
<button className="group relative flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-neutral-800" style={{'--border-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05))', '--border-radius-before': '9999px'}}>
<svg className="" data-icon-set="lucide" data-lucide="mail" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
<span>Обсудить проект</span>
</button>
</div>
</nav>
</div>

<main className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-32 pl-6 relative">

<div className="mx-auto mb-24 max-w-4xl text-center">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.1s_both] mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-950/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-red-200 shadow-[0_0_15px_rgba(204,0,0,0.15)] animate">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
          Next Gen Production
        </div>
<h1 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-6 text-4xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl animate">
          Создаем креативный
          <br/>
<span className="text-neutral-500">AI-видеоконтент</span> для брендов.
        </h1>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-neutral-400 tracking-tight animate">
          Мы не платформа, а полноценный ИИ-видеопродакшн. От креативной идеи и обучения моделей до пост-продакшна и финального рендера.
        </p>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col items-center justify-center gap-4 animate">
<button className="group relative flex items-center gap-2 rounded-full bg-white text-black px-8 py-3 text-sm font-medium transition-all hover:bg-gray-200">
<span className="">Посмотреть шоурил</span>
<svg className="transition-transform group-hover:translate-x-0.5" data-icon-set="lucide" data-lucide="play" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 3l14 9-14 9V3z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 mb-32 relative gap-x-6 gap-y-6" id="services">

<div className="absolute -left-12 top-0 hidden text-[10px] font-mono text-neutral-800 xl:block">
          01
        </div>
<div className="absolute -right-12 top-0 hidden text-[10px] font-mono text-neutral-800 xl:block">
          02
        </div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] relative md:col-span-8 h-[400px] md:h-[500px] group overflow-hidden rounded-3xl border border-white/5 bg-[#080808] animate hover:border-white/10 transition-all">
<img alt="AI Production" className="transition-transform duration-700 group-hover:scale-105 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a94c46b-4f90-40b9-9253-907f918e1e88_1600w.webp"/>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-2 text-red-500 mb-2">
<svg className="" data-icon-set="lucide" data-lucide="cpu" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path></g></svg>
<span className="text-xs font-semibold uppercase tracking-widest">
                Технология
              </span>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">
              Generative AI Video
            </h3>
<p className="text-neutral-400 text-sm max-w-md">
              Синтез видео высокого разрешения с полным контролем над композицией, светом и движением.
            </p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] md:col-span-4 flex flex-col z-10 animate gap-x-6 gap-y-6">

<div className="flex-1 overflow-hidden hover:border-white/10 transition-all group bg-[#080808] border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<img className="group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 opacity-40 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39121ef5-e3fa-47d0-9dbc-0c857e651726_800w.webp"/>
<div className="z-10 flex flex-col h-full relative justify-end">
<div className="mb-auto p-2 bg-white/5 w-fit rounded-lg border border-white/10 backdrop-blur-md">
<svg className="text-white" data-icon-set="lucide" data-lucide="wand" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8L19 13"></path><path d="M15 9h0"></path><path d="M17.8 6.2L19 5"></path><path d="m3 21l9-9"></path><path d="M12.2 6.2L11 5"></path></g></svg>
</div>
<h3 className="text-xl font-normal text-white mt-4">
                Deepfake &amp; VFX
              </h3>
<div className="h-px w-full bg-white/10 my-3"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">Lip-sync и замена лиц</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="arrow-up-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="flex-1 overflow-hidden hover:border-white/10 transition-all group bg-[#080808] border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<img className="group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 opacity-40 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84881032-e239-416a-864e-6e1cc151f3d2_800w.webp"/>
<div className="z-10 flex flex-col h-full relative justify-end">
<div className="mb-auto p-2 bg-white/5 w-fit rounded-lg border border-white/10 backdrop-blur-md">
<svg className="w-[20px] h-[20px]" data-icon-set="lucide" data-lucide="layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>
<h3 className="text-xl font-normal text-white mt-4">Style Transfer</h3>
<div className="h-px w-full bg-white/10 my-3"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">Адаптация под брендбук</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="arrow-up-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] mb-24">
<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4 justify-center">
<button className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 hover:bg-white/[0.05] transition-colors">
<svg className="text-neutral-400 group-hover:text-red-500 transition-colors" data-icon-set="lucide" data-lucide="video" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 8l-6 4l6 4V8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><rect fill="none" height="12" rx="2" ry="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="14" x="2" y="6"></rect></svg>
<span className="text-sm text-neutral-300">Commercials</span>
</button>
<button className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 hover:bg-white/[0.05] transition-colors">
<svg className="text-neutral-400 group-hover:text-red-500 transition-colors" data-icon-set="lucide" data-lucide="music" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="6" cy="18" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="18" cy="16" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
<span className="text-sm text-neutral-300">Music Videos</span>
</button>
<button className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 hover:bg-white/[0.05] transition-colors">
<svg className="text-neutral-400 group-hover:text-red-500 transition-colors" data-icon-set="lucide" data-lucide="monitor" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
<span className="text-sm text-neutral-300">Social Media</span>
</button>
<button className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 hover:bg-white/[0.05] transition-colors">
<svg className="text-neutral-400 group-hover:text-red-500 transition-colors" data-icon-set="lucide" data-lucide="sparkles" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v3m6.366-.366l-2.12 2.12M21 12h-3m.366 6.366l-2.12-2.12M12 21v-3m-6.366.366l2.12-2.12M3 12h3m-.366-6.366l2.12 2.12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-neutral-300">Fashion</span>
</button>
</div>
</div>

<div className="mb-32" id="cases">
<div className="flex animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-12 items-end justify-between">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">
              Избранные кейсы
            </h2>
<p className="text-neutral-500 text-sm">
              Реальные проекты, созданные с использованием нейросетей.
            </p>
</div>
<div className="flex gap-2">
<button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10">
<svg className="" data-icon-set="lucide" data-lucide="chevron-left" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10">
<svg className="" data-icon-set="lucide" data-lucide="chevron-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] group overflow-hidden transition-colors hover:bg-white/[0.03] border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-4 left-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                AI Commercial
              </span>
</div>
<div className="flex z-10 w-full mt-4 mb-8 relative items-center justify-center">
<img alt="Case 1" className="h-full object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2683cb80-b761-47b5-8990-c328c8a6df43_800w.webp"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">Project: Neon City</h3>
<p className="text-sm text-neutral-500 mb-6 font-mono">Cyberpunk Aesthetics</p>
<button className="w-full rounded-full border border-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black">
              Смотреть кейс
            </button>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group overflow-hidden bg-[#0F0F0F] border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="group-hover:opacity-100 transition-opacity bg-red-500/5 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 left-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                Fashion Film
              </span>
</div>
<div className="flex z-10 h-48 mt-4 mb-8 relative items-center justify-center">
<img alt="Case 2" className="h-full object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7cfb2bf-d3f2-4dfc-aa1e-e0ef5c561134_800w.webp"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">Vogue: Digital Skin</h3>
<p className="text-sm text-neutral-500 mb-6 font-mono">Generative Textures</p>
<button className="w-full rounded-full bg-white py-2.5 text-xs font-semibold text-black transition-transform hover:scale-[1.02]">
              Смотреть кейс
            </button>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="absolute top-4 left-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                Music Video
              </span>
</div>
<div className="flex z-10 h-48 mt-4 mb-8 relative items-center justify-center">
<img alt="Case 3" className="h-full object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3237c69-9f10-4fa4-8654-e77b4ad8ac82_800w.webp"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">Soundwave Reality</h3>
<p className="text-sm text-neutral-500 mb-6 font-mono">Reactive Visuals</p>
<button className="w-full rounded-full border border-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black">
              Смотреть кейс
            </button>
</div>
</div>
</div>
</main>

<section className="relative border-t border-white/5 bg-[#030303] py-32 overflow-hidden" id="process">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="mb-20 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl font-medium tracking-tight text-white md:text-5xl">
            Технологии 044
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mt-4 text-neutral-400 font-light">
            Мы не используем стандартные пресеты. Мы обучаем модели под вас.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px] h-auto gap-x-4 gap-y-4">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] col-span-1 md:col-span-2 md:row-span-2 relative rounded-3xl border border-white/5 bg-[#0A0A0A] overflow-hidden group hover:border-red-500/20 transition-colors">
<img alt="Training" className="group-hover:opacity-100 transition-opacity duration-700 opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b4b4ed1-7dc8-4592-a34a-5515be89640b_1600w.webp"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center text-center z-10">
<div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-red-500/30">
<div className="absolute inset-0 rounded-2xl bg-red-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<svg className="text-neutral-400 transition-colors group-hover:text-red-400" data-icon-set="lucide" data-lucide="brain-circuit" height="28" style={{}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46a2 2 0 0 0-1.98 3a2.5 2.5 0 0 0-1.32 4.24a3 3 0 0 0 .34 5.58a2.5 2.5 0 0 0 2.96 3.08a2.5 2.5 0 0 0 4.91.05L12 20V4.5ZM16 8V5c0-1.1.9-2 2-2M12 13h4.5M12 18h6a2 2 0 0 0 2-2v-4M16 16h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-white text-3xl font-medium tracking-tight mb-2">
                Custom Model Training
              </h3>
<p className="text-neutral-500 text-sm max-w-xs mb-6">
                Обучение LoRA и Checkpoint моделей на основе ассетов вашего бренда для сохранения единой стилистики.
              </p>
<button className="bg-red-600 text-white px-6 py-2 rounded-full text-xs font-medium hover:bg-red-500 transition-colors">
                Узнать про обучение
              </button>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] col-span-1 md:col-span-1 overflow-hidden group flex flex-col hover:border-red-500/20 transition-colors z-10 bg-[#0A0A0A] border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative items-center justify-end">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4fa5d11-d2c5-4dd8-8f44-e97b11297f66_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="relative z-10 text-white text-lg font-medium">
              Image to Video
            </h3>
<p className="relative z-10 text-[10px] text-neutral-500">Оживление статики</p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] col-span-1 md:col-span-1 overflow-hidden group flex flex-col bg-[#0A0A0A] hover:border-red-500/20 transition-colors border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative items-center justify-end">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e966bc09-4d95-4a80-ab7b-3c277e65ba15_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="z-10 leading-tight text-lg font-medium text-white text-center relative">
              Text to Video
            </h3>
<p className="z-10 text-[10px] text-neutral-500 relative">Генерация с нуля</p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] col-span-1 md:col-span-1 overflow-hidden group bg-[#0A0A0A] border-white/5 border rounded-3xl relative hover:border-red-500/20 transition-colors">
<img alt="VFX" className="group-hover:opacity-100 transition-opacity duration-700 object-cover absolute top-0 right-0 bottom-0 left-0 opacity-40 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7db323b-b62c-48e9-ba21-8ed554e7d2a8_800w.webp"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 w-full text-center p-4">
<h3 className="text-white text-lg font-medium">Post-Production</h3>
<p className="text-[10px] text-neutral-500">Color Grading &amp; Edit</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] col-span-1 md:col-span-1 overflow-hidden group bg-[#0A0A0A] border-white/5 border rounded-3xl relative hover:border-red-500/20 transition-colors">
<img alt="Workflow" className="group-hover:opacity-100 transition-opacity duration-700 opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd8ed8fa-7d40-48ab-9f0f-83c906166ad2_800w.webp"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 w-full text-center p-4">
<h3 className="text-lg font-medium text-white">Scale</h3>
<p className="text-[10px] text-neutral-500">Высокая скорость</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:mt-28 mt-20 relative" id="technology">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-red-200 mb-6">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
          Pipeline 044
        </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Детали имеют значение</h2>
<p className="leading-relaxed text-neutral-400 max-w-xl">Мы объединяем традиционную режиссуру с нейросетевым синтезом. Каждый кадр проходит через наш уникальный пайплайн, чтобы исключить артефакты и достичь кинематографического качества.</p>
<ul className="mt-8 space-y-6">

<li className="flex items-start gap-4">
<span className="mt-1 h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-white shrink-0">
<svg className="lucide lucide-file-code" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 13 2 2 4-4"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-white">Prompt Engineering</div>
<div className="text-sm text-neutral-500 mt-1">Написание сложных сценариев и промптов для контроля генерации.</div>
</div>
</li>

<li className="flex items-start gap-4">
<span className="mt-1 h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-white shrink-0">
<svg className="lucide lucide-film" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="7" x2="7" y1="3" y2="21"></line><line x1="17" x2="17" y1="3" y2="21"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="7" y1="7" y2="7"></line><line x1="3" x2="7" y1="17" y2="17"></line><line x1="17" x2="21" y1="7" y2="7"></line><line x1="17" x2="21" y1="17" y2="17"></line></svg>
</span>
<div className="">
<div className="text-sm font-medium text-white">Upscaling &amp; Interpolation</div>
<div className="text-sm text-neutral-500 mt-1">Увеличение разрешения до 4K и повышение FPS для плавности.</div>
</div>
</li>

<li className="flex items-start gap-4">
<span className="mt-1 h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-white shrink-0">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-white">ComfyUI &amp; Stable Diffusion</div>
<div className="text-sm text-neutral-500 mt-1">Использование передовых нодовых систем для точной генерации.</div>
</div>
</li>
</ul>
<div className="mt-8 flex gap-4">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105" href="#">
<span>Все услуги</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10" href="#">
<span>Связаться</span>
</a>
</div>
</div>

<div className="relative">

<div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-red-500/10 via-neutral-500/5 to-white/5 blur-2xl opacity-50"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-3 shadow-2xl">
<div className="rounded-xl overflow-hidden relative group">
<img alt="AI Lens Technology" className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a3c1bbf-2150-40db-b41c-341f6b9cc3e7_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3 bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/10">
<div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-aperture" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<div className="">
<div className="text-sm font-medium text-white">044 Render Engine</div>
<div className="text-xs text-neutral-400">99.9% Consistency</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 mt-3">
<div className="relative h-24 w-full overflow-hidden rounded-lg border border-white/10 group cursor-pointer">
<img alt="Detail 1" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/287186c4-6b2e-4e1f-b19c-0bb5c3eebfbb_800w.webp"/>
</div>
<div className="relative h-24 w-full overflow-hidden rounded-lg border border-white/10 group cursor-pointer">
<img alt="Detail 2" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ea8b2fc-10dc-4e2e-a5d2-ae90526f5fe1_800w.jpg"/>
</div>
<div className="relative h-24 w-full overflow-hidden rounded-lg border border-white/10 group cursor-pointer">
<div className="absolute inset-0 bg-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<span className="text-xs font-medium">+40 Моделей</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative border-t border-white/5 bg-[#020202] py-32 overflow-hidden">

<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both]">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-300 mb-6">
<svg className="" data-icon-set="lucide" data-lucide="zap" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          Efficiency Comparison
        </div>
<h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl mb-6">
          Скорость и 
          <span className="text-neutral-500">Креативность.</span>
</h2>
<p className="leading-relaxed font-light text-neutral-400 max-w-lg mb-8">Использование ИИ сокращает время производства в разы, открывая возможности для креатива, которые ранее были невозможны из-за бюджета или сроков.</p>

<div className="relative w-full rounded-2xl border border-white/10 bg-[#080808] p-6 mb-8 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<div>
<div className="text-xs font-semibold text-white">Скорость рендера</div>
<div className="text-[10px] text-neutral-500 font-mono">Сравнение процессов</div>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-[10px] text-neutral-400">044 AI Workflow</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<span className="text-[10px] text-neutral-400">Classic 3D/CGI</span>
</div>
</div>
</div>
<div className="h-[250px] w-full">
<canvas className="" height="500" id="lensTechChart" style={{display: 'block', boxSizing: 'border-box', height: '250px', width: '534px'}} width="1068"></canvas>
</div>
</div>

<div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
<div>
<div className="text-2xl font-medium text-white tracking-tight">4<span className="text-sm text-neutral-500 ml-1">K</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Resolution</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">10<span className="text-sm text-neutral-500 ml-1">x</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Faster</div>
</div>
<div className="">
<div className="text-2xl font-medium text-white tracking-tight">∞<span className="text-sm text-neutral-500 ml-1"></span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Variations</div>
</div>
</div>
</div>

<div className="relative animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both]">

<div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#050505] aspect-[4/5] lg:aspect-square">
<img alt="Abstract AI Art" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87456fcf-5f27-4bb4-8514-65201e1b3921_1600w.webp"/>

<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/5"></div>

<div className="absolute top-8 right-8">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white animate-spin [animation-duration:10s]">
<svg className="" data-icon-set="lucide" data-lucide="loader-2" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8">
<div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-5">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
<svg className="" data-icon-set="lucide" data-lucide="cpu" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<div>
<h4 className="text-sm font-medium text-white">GPU Cluster Rendering</h4>
<p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                    Мощные вычислительные ресурсы для генерации сложных сцен в реальном времени.
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 -top-4 -right-4 w-24 h-24 border-t border-r border-white/10 rounded-tr-3xl"></div>
<div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/10 rounded-bl-3xl"></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pb-12 pt-24" id="contact">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<span className="text-white font-bold text-xl">044.studio</span>
</div>
<p className="text-xs leading-relaxed text-neutral-500">
              Создаем будущее видеоконтента. Полный цикл AI-продакшна для брендов, артистов и медиа.
            </p>
</div>
<div className="flex gap-16 text-xs text-neutral-500">
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Студия</span>
<a className="hover:text-white" href="#">О нас</a>
<a className="hover:text-white" href="#">Вакансии</a>
<a className="hover:text-white" href="#">Для прессы</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Услуги</span>
<a className="hover:text-white" href="#">AI Реклама</a>
<a className="hover:text-white" href="#">Музыкальные клипы</a>
<a className="hover:text-white" href="#">Обучение моделей</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Social</span>
<a className="hover:text-white" href="#">Instagram</a>
<a className="hover:text-white" href="#">Telegram</a>
<a className="hover:text-white" href="#">Behance</a>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-8">
<p className="text-[10px] text-neutral-600">
            © 2025 044.studio. Все права защищены.
          </p>
<div className="flex gap-4 items-center">
<div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] text-neutral-500">
              Принимаем заказы
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
