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
Sequence animation on scroll when visible.
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
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            // Toggle slide class
            mobileMenu.classList.toggle('translate-x-full');
            // Prevent background scrolling when menu is open
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 pt-6 px-6">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">

<a className="flex items-center gap-2 group z-50" href="#">
<img className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41728bf7-d774-43c0-9c42-c7a01d649d66_3840w.png" width="130"/>
</a>

<div className="hidden md:flex gap-1 bg-white/60 border-[#0D1114]/5 border rounded-full pt-1.5 pr-2 pb-1.5 pl-2 shadow-sm backdrop-blur-md gap-x-2 gap-y-2 items-center">
<a className="px-5 py-2 text-sm text-[#566774] hover:text-[#0D1114] hover:bg-[#0D1114]/5 rounded-full transition-all font-medium" href="#about" style={{}}>Om os</a>
<a className="px-5 py-2 text-sm text-[#566774] hover:text-[#0D1114] hover:bg-[#0D1114]/5 rounded-full transition-all font-medium" href="#services" style={{}}>Ydelser</a>
<a className="px-5 py-2 text-sm text-[#566774] hover:text-[#0D1114] hover:bg-[#0D1114]/5 rounded-full transition-all font-medium" href="#cases" style={{}}>Cases</a>
<a className="px-5 py-2 bg-[#0D1114] text-white text-sm font-medium rounded-full hover:bg-[#2B3335] transition-all shadow-lg ml-1" href="#contact" style={{}}>
                    Kontakt
                </a>
</div>

<button className="md:hidden p-2 text-[#0D1114] z-50 hover:bg-black/5 rounded-full transition-colors" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-white transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-center items-center" id="mobile-menu">

<button className="absolute top-8 right-8 p-2 text-[#0D1114] hover:bg-black/5 rounded-full transition-colors" id="close-menu-btn">
<svg className="lucide lucide-x" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</button>

<nav className="flex flex-col gap-8 text-center">
<a className="text-3xl font-semibold text-[#0D1114] hover:text-[#566774] transition-colors mobile-link" href="#about">Om os</a>
<a className="text-3xl font-semibold text-[#0D1114] hover:text-[#566774] transition-colors mobile-link" href="#services">Ydelser</a>
<a className="text-3xl font-semibold text-[#0D1114] hover:text-[#566774] transition-colors mobile-link" href="#cases">Cases</a>
<a className="text-3xl font-semibold text-[#0D1114] hover:text-[#566774] transition-colors mobile-link" href="#contact">Kontakt</a>
</nav>

<div className="absolute bottom-12 flex gap-6 text-[#566774]">
<span className="text-sm">Aarhus, DK</span>
<span className="text-sm">•</span>
<span className="text-sm">hello@benfa.dk</span>
</div>
</div>

<main className="z-10 min-h-[95vh] overflow-hidden flex flex-col md:pb-24 text-[#0D1114] bg-white w-full pt-32 pb-12 relative justify-end">

<div className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-[#9AD9CF] opacity-30 rounded-full blur-[150px] animate-pulse-glow pointer-events-none mix-blend-multiply"></div>
<div className="absolute bottom-[0%] right-[10%] w-[40vw] h-[40vw] bg-[#FF7A39] opacity-20 rounded-full blur-[130px] pointer-events-none mix-blend-multiply"></div>
<div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-[#EDC063] opacity-20 rounded-full blur-[150px] pointer-events-none mix-blend-multiply"></div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="mb-6 md:mb-10 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<p className="md:text-sm uppercase flex items-center gap-3 text-xs font-medium text-[#566774] tracking-[0.2em]" style={{}}>
<span className="w-2 h-2 rounded-full bg-[#FF7A39]"></span>
                    Digitalt Performance Bureau
                </p>
</div>

<div className="relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">

<div className="flex items-center gap-4 md:gap-8 flex-wrap">
<svg className="lucide lucide-asterisk lucide-sparkle md:w-12 md:h-12 fill-[#EDC063]/20 w-[50px] h-[50px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="asterisk" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" strokewidth="1.5" style={{width: '50px', height: '50px', color: 'rgb(237, 192, 99)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
<h1 className="md:text-8xl lg:text-[7rem] leading-[0.9] uppercase text-5xl font-semibold text-[#0D1114] tracking-tight">
                        RODFÆSTET I
                    </h1>
</div>

<div className="flex items-center flex-wrap gap-x-6 md:gap-x-10">
<h1 className="md:text-8xl lg:text-[7rem] leading-[0.9] uppercase text-5xl font-semibold text-[#0D1114] tracking-tight">
                        DATA <span className="text-[#566774] lowercase font-semibold" style={{}}>skabt til</span>
</h1>
</div>

<div className="flex flex-wrap gap-x-4 gap-y-4 items-center">
<h1 className="leading-[0.9] bg-clip-text uppercase md:text-9xl lg:text-[8rem] text-6xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-[#0D1114] via-[#2A9D8F] to-[#0D1114]/80">
                        VÆKST
                    </h1>
<div className="relative">
<svg className="lucide lucide-asterisk md:w-20 md:h-20 stroke-1 spin-slow w-[50px] h-[50px]" data-icon-replaced="true" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" strokewidth="1.5" style={{width: '50px', height: '50px', color: 'rgb(255, 122, 57)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
</div>
</div>

<div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-[#0D1114]/10 pt-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">

<div className="col-span-1 md:col-span-2">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#0D1114]/20 flex items-center justify-center group cursor-pointer hover:bg-[#0D1114] hover:border-[#0D1114] transition-all duration-500">
<svg className="lucide lucide-move-up-right md:w-10 md:h-10 group-hover:text-white transition-colors duration-300 w-[32px] h-[32px] text-slate-950" data-icon-replaced="true" data-lucide="move-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" strokewidth="1.5" style={{width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5H19V11"></path><path d="M19 5L5 19"></path></svg>
</div>
</div>

<div className="col-span-1 md:col-span-6">
<p className="text-sm md:text-base text-[#566774] leading-relaxed font-light max-w-xl" style={{}}>
                        Vi er et kollektiv af specialister, strateger og vækstmarkedsførere dedikeret til at transformere ambitiøse visioner til højtydende brands gennem data og kreativitet.
                    </p>
</div>

<div className="col-span-1 md:col-span-4 flex justify-start md:justify-end gap-12">
<div className="flex flex-col gap-1">
<span className="text-xs text-[#2A9D8F] uppercase tracking-wider font-semibold" style={{}}>Lokation</span>
<span className="text-sm text-[#0D1114]" style={{}}>Thisted, Danmark</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-[#d97706] uppercase tracking-wider font-semibold" style={{}}>Kontakt</span>
<span className="text-sm text-[#0D1114]" style={{}}>hello@benfa.dk</span>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 md:py-32 bg-white relative z-10 border-b border-[#566774]/10" id="about">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 lg:mb-32">

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-5xl md:text-6xl lg:text-7xl text-[#0D1114] tracking-tight leading-[1.1] font-semibold" style={{}}>
                        HVEM ER VI, OG <br/>
<span className="flex items-center gap-2 mt-2 font-semibold" style={{}}>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-16 md:h-16 stroke-[1] text-[#0D1114]" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
                            HVAD DER DRIVER OS
                        </span>
</h2>
</div>

<div className="space-y-8 text-lg md:text-xl font-light text-[#566774] leading-relaxed animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<p className="" style={{}}>
                        Vi er et lille, kreativt team, der arbejder med startups, livsstilsbrands og virksomheder ledet af grundlæggere, der ønsker at vokse med omtanke. Uanset om du lancerer noget nyt eller gentænker dit brand indefra og ud, samarbejder vi med dig for at skabe klarhed, personlighed og skarp eksekvering i hvert trin.
                    </p>
<p className="" style={{}}>
                        Vi startede BENFA efter at have set for mange gode idéer falde til jorden – ikke fordi produktet ikke var godt, men fordi historien var uklar. Grundlæggere gjorde enten det hele selv eller var låst fast hos store bureauer, der overså nuancerne.
                    </p>
<p style={{}}>
                        Så vi byggede det bureau, vi selv ønskede fandtes – slankt, samarbejdsorienteret og menneskecentreret. Vi er her for at forstærke din stemme, ikke erstatte den.
                    </p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">

<div className="border-t border-[#0D1114] pt-6 flex flex-col justify-start">
<div className="flex items-baseline gap-2">
<span className="text-4xl lg:text-5xl text-[#0D1114] tracking-tight font-semibold" style={{}}>3X</span>
<span className="text-xs font-medium text-[#566774] leading-tight max-w-[80px]" style={{}}>højere engagement</span>
</div>
</div>

<div className="border-t border-[#0D1114] pt-6 flex flex-col justify-start">
<div className="flex items-baseline gap-2">
<span className="text-4xl lg:text-5xl text-[#0D1114] tracking-tight font-semibold" style={{}}>28%</span>
<span className="text-xs font-medium text-[#566774] leading-tight max-w-[80px]" style={{}}>lavere annonceforbrug</span>
</div>
</div>

<div className="border-t border-[#0D1114] pt-6 flex flex-col justify-start">
<div className="flex items-baseline gap-2">
<span className="text-4xl lg:text-5xl text-[#0D1114] tracking-tight font-semibold" style={{}}>90%</span>
<span className="text-xs font-medium text-[#566774] leading-tight max-w-[80px]" style={{}}>fastholdelsesrate</span>
</div>
</div>

<div className="border-t border-[#0D1114] pt-6 flex flex-col justify-start">
<div className="flex items-baseline gap-2">
<span className="text-4xl lg:text-5xl text-[#0D1114] tracking-tight font-semibold" style={{}}>12+</span>
<span className="text-xs font-medium text-[#566774] leading-tight max-w-[80px]" style={{}}>brands lanceret</span>
</div>
</div>

<div className="border-t border-[#0D1114] pt-6 flex flex-col justify-start col-span-2 md:col-span-1">
<div className="flex items-baseline gap-2">
<span className="text-4xl lg:text-5xl text-[#0D1114] tracking-tight font-semibold" style={{}}>100%</span>
<span className="text-xs font-medium text-[#566774] leading-tight max-w-[80px]" style={{}}>succesrate</span>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden select-none animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] bg-white z-10 border-[#566774]/10 border-b pt-20 pb-20 relative">

<style>
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
            .animate-marquee:hover {
                animation-play-state: paused;
            }
        </style>

<div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#FF7A39]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#9AD9CF]/5 blur-[120px] rounded-full pointer-events-none"></div>

<div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

<div className="flex whitespace-nowrap relative z-10">

<div className="flex items-center animate-marquee">
<div className="flex group items-center">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>ROAS</span>
<svg className="lucide lucide-asterisk md:w-20 md:h-20 opacity-80 w-[48px] h-[48px]" data-icon-replaced="true" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '48px', height: '48px', color: 'rgb(13, 17, 20)'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 6v12"></path><path className="" d="M17.196 9 6.804 15"></path><path className="" d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="flex items-center group">
<span className="md:text-9xl md:px-16 group-hover:text-[#566774] transition-colors duration-500 text-7xl font-semibold text-[#0D1114] tracking-tight pr-8 pl-8">FASTHOLDELSE</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="flex items-center group">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>KONVERTERING</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="flex items-center group">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>SKALERBARHED</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="flex items-center group">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>ENGAGEMENT</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
</div>

<div className="flex items-center animate-marquee">
<div className="flex items-center group">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>ROAS</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="flex items-center group">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>FASTHOLDELSE</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="flex items-center group">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>KONVERTERING</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="flex items-center group">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>SKALERBARHED</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="flex items-center group">
<span className="text-7xl md:text-9xl text-[#0D1114] tracking-tight px-8 md:px-16 group-hover:text-[#566774] transition-colors duration-500 font-semibold" style={{}}>ENGAGEMENT</span>
<svg className="lucide lucide-asterisk w-12 h-12 md:w-20 md:h-20 text-[#0D1114] opacity-80" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden bg-white z-10 border-[#566774]/10 border-b pt-24 pb-24 relative">

<div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#9AD9CF]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col">

<div className="mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-5xl md:text-6xl lg:text-7xl text-[#0D1114] tracking-tight leading-[0.95] font-semibold" style={{}}>
                            HVAD GØR OS 
                            <span className="flex items-center gap-4 mt-2 font-semibold" style={{}}>
<svg className="lucide lucide-sparkle w-10 h-10 md:w-14 md:h-14 font-light text-[#0D1114] stroke-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962l6.135-1.582a2 2 0 0 0 1.437-1.437l1.582-6.135a.5.5 0 0 1 .963 0l1.582 6.135a2 2 0 0 0 1.437 1.437l6.135 1.582a.5.5 0 0 1 0 .962l-6.135 1.582a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
                                ANDERLEDES
                            </span>
</h2>
</div>

<div className="flex flex-col animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">

<div className="group border-t border-[#566774]/10 py-10 transition-colors hover:bg-gray-50/50 -mx-4 px-4 rounded-xl">
<div className="flex gap-6 md:gap-8 items-start">
<div className="shrink-0 pt-1">

<svg className="lucide lucide-asterisk md:w-10 md:h-10 w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" style={{width: '32px', height: '32px', color: 'rgb(99, 102, 241)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path className="" d="M17.196 9 6.804 15"></path><path className="" d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="space-y-3">
<h3 className="text-lg font-medium text-[#0D1114] uppercase tracking-wider" style={{}}>Bevidst små</h3>
<p className="text-[#566774] font-light leading-relaxed max-w-md text-lg" style={{}}>
                                        Vi forbliver bevidst små, så vi kan arbejde tæt sammen med hver enkelt kunde, hvilket sikrer dedikeret opmærksomhed og agilitet.
                                    </p>
</div>
</div>
</div>

<div className="group border-t border-[#566774]/10 py-10 transition-colors hover:bg-gray-50/50 -mx-4 px-4 rounded-xl">
<div className="flex gap-6 md:gap-8 gap-x-6 gap-y-6 items-start">
<div className="shrink-0 pt-1">

<svg className="lucide lucide-flower md:w-10 md:h-10 w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" style={{width: '32px', height: '32px', color: 'rgb(236, 72, 153)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="3"></circle><path className="" d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path className="" d="M16.5 12H15"></path><path className="" d="M12 16.5V15"></path><path d="M8 8l1.5 1.5"></path><path className="" d="M16 16l-1.5-1.5"></path><path d="M8 16l1.5-1.5"></path><path d="M16 8l-1.5 1.5"></path></svg>
</div>
<div className="space-y-3">
<h3 className="text-lg font-medium text-[#0D1114] uppercase tracking-wider" style={{}}>Historien først</h3>
<p className="text-[#566774] font-light leading-relaxed max-w-md text-lg" style={{}}>
                                        Vi kigger ikke kun på data – vi ser på mennesker. At forbinde følelser med målinger er der, hvor magien opstår.
                                    </p>
</div>
</div>
</div>

<div className="group border-t border-[#566774]/10 py-10 transition-colors hover:bg-gray-50/50 -mx-4 px-4 rounded-xl">
<div className="flex gap-6 md:gap-8 items-start">
<div className="shrink-0 pt-1">

<svg className="lucide lucide-crosshair md:w-10 md:h-10 w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" style={{width: '32px', height: '32px', color: 'rgb(255, 122, 57)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<div className="space-y-3">
<h3 className="text-lg font-medium text-[#0D1114] uppercase tracking-wider" style={{}}>Ægte partnerskaber</h3>
<p className="text-[#566774] font-light leading-relaxed max-w-md text-lg" style={{}}>
                                        Vi tænker langsigtet, ikke kun på hurtige gevinster. Vi bygger infrastruktur til bæredygtig vækst.
                                    </p>
</div>
</div>
</div>

<div className="group border-t border-[#566774]/10 py-10 border-b transition-colors hover:bg-gray-50/50 -mx-4 px-4 rounded-xl">
<div className="flex gap-6 md:gap-8 items-start">
<div className="shrink-0 pt-1">

<svg className="lucide lucide-target md:w-10 md:h-10 w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" style={{width: '32px', height: '32px', color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="space-y-3">
<h3 className="text-lg font-medium text-[#0D1114] uppercase tracking-wider" style={{}}>Kreativitet + Strategi</h3>
<p className="text-[#566774] font-light leading-relaxed max-w-md text-lg" style={{}}>
                                        Vores arbejde ser ikke bare godt ud – det skaber resultater for din virksomhed gennem dokumenterede rammer.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[600px] hidden lg:block animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="absolute inset-0 bg-gray-100 overflow-hidden">
<img alt="Creative office space" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="absolute inset-0 border border-[#0D1114]/5 pointer-events-none"></div>
</div>

<div className="relative h-[400px] lg:hidden rounded-2xl overflow-hidden mt-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<img alt="Creative office space" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-white z-10 border-[#566774]/10 border-b pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-16 md:mb-24 max-w-4xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0D1114] tracking-tight leading-[1.1] font-semibold" style={{}}>
                    VI ARBEJDER MED MENNESKER FRA
                    <span className="flex items-center gap-3 mt-2 md:mt-4 text-[#566774] font-semibold" style={{}}>
<svg className="lucide lucide-asterisk w-8 h-8 md:w-12 md:h-12 text-[#0D1114] spin-slow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
                        HELE VERDEN
                    </span>
</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#566774]/10 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Google" className="h-8 md:h-9 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg"/>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Amazon" className="h-7 md:h-8 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Airbnb" className="h-8 md:h-9 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://cdn.worldvectorlogo.com/logos/airbnb-1.svg"/>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Uber" className="h-6 md:h-7 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://cdn.worldvectorlogo.com/logos/uber-2.svg"/>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Mapbox" className="h-7 md:h-8 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<span className="font-jakarta text-2xl tracking-tighter opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 font-semibold" style={{}}>CHIEF</span>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Tory Burch" className="h-10 md:h-12 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Grammarly" className="h-7 md:h-8 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://cdn.worldvectorlogo.com/logos/grammarly-1.svg"/>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<span className="font-mono text-xl tracking-widest opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" style={{}}>B-REEL</span>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Cisco" className="h-10 md:h-12 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://cdn.worldvectorlogo.com/logos/cisco-2.svg"/>
</div>

<div className="group flex md:h-48 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair h-40 border-[#566774]/10 border-r border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<img alt="Linear" className="h-7 md:h-8 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>

<div className="group flex items-center justify-center h-40 md:h-48 border-r border-b border-[#566774]/10 p-8 hover:bg-gray-50/50 transition-all duration-500 cursor-crosshair">
<img alt="Stripe" className="h-8 md:h-10 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg"/>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden z-10 font-inter bg-[#0D1114] w-full pt-32 pb-16 relative">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-[#0D1114]"></div>

<div className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-[#2B3335] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.4]">
</div>

<div className="absolute top-[-30%] right-[0%] w-[80vw] h-[80vw] bg-[#2B3335] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.3]">
</div>

<div className="absolute bottom-[-10%] right-[-10%] w-[100vw] h-[60vw] bg-[#0D1114] rounded-full mix-blend-normal filter blur-[80px] opacity-90">
</div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}>
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-white animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">

<div className="mb-32">
<h2 className="md:text-7xl lg:text-[5.5rem] leading-[1.05] text-5xl tracking-tight max-w-4xl mb-10 font-semibold" style={{}}>
                Klar til at aktivere <br/>
<span className="text-white/80 font-semibold" style={{}}>dine data?</span>
</h2>
<a className="inline-flex items-center justify-center bg-white text-[#0D1114] px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-white/5 hover:scale-105" href="#contact" style={{}}>
                Kontakt os
            </a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">

<div className="lg:col-span-5 space-y-6">
<h3 className="text-xl font-medium tracking-tight" style={{}}>Nyhedsbrev
                </h3>
<p className="text-white/60 font-light text-base leading-relaxed max-w-md" style={{}}>
                    Vi vil elske at dele vores passion for digital vækst med dig i vores månedlige nyhedsbrev. Ingen spam, kun værdi.
                </p>
<div className="flex gap-3 pt-2 max-w-md items-center">
<input className="w-full px-5 py-3.5 bg-white/[0.08] border border-white/5 rounded-lg text-base text-white placeholder-white/40 focus:outline-none focus:bg-white/[0.12] focus:border-white/10 transition-all backdrop-blur-sm" placeholder="Indtast din email" type="email"/>
<button className="px-6 py-3.5 bg-white/[0.15] hover:bg-white/[0.25] border border-white/5 rounded-lg text-base font-medium transition-all backdrop-blur-md text-white whitespace-nowrap" style={{}}>
                            Tilmeld
                        </button>
</div>
</div>

<div className="lg:col-span-1"></div>

<div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10">

<div className="space-y-6">
<h4 className="font-medium text-lg tracking-tight" style={{}}>
                        Navigation</h4>
<ul className="space-y-4 text-sm text-white/60 font-light">
<li className=""><a className="hover:text-white transition-colors duration-200" href="#about" style={{}}>Om os</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#services" style={{}}>Ydelser</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200" href="#cases" style={{}}>Cases</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#contact" style={{}}>Kontakt</a></li>
</ul>
</div>

<div className="space-y-6">
<h4 className="font-medium text-lg tracking-tight" style={{}}>
                        Ydelser</h4>
<ul className="space-y-4 text-sm text-white/60 font-light">
<li><a className="hover:text-white transition-colors duration-200" href="#services" style={{}}>Paid Social</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#services" style={{}}>Google Ads</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#services" style={{}}>Email Marketing</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#services" style={{}}>Strategi</a></li>
</ul>
</div>

<div className="space-y-6">
<h4 className="font-medium text-lg tracking-tight" style={{}}>Juridisk
                    </h4>
<ul className="space-y-4 text-sm text-white/60 font-light">
<li><a className="hover:text-white transition-colors duration-200" href="#" style={{}}>Privatlivspolitik</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#" style={{}}>Handelsbetingelser</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#" style={{}}>Cookiepolitik</a></li>
</ul>

<div className="pt-8 flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.2] flex items-center justify-center transition-all duration-300 backdrop-blur-sm group" href="#">
<svg className="lucide lucide-mail w-5 h-5 text-white/70 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.2] flex items-center justify-center transition-all duration-300 backdrop-blur-sm group" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-white/70 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
</path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</div>

<div className="text-center">
<p className="text-white/40 text-sm font-light tracking-wide" style={{}}>
                © 2025 BENFA. Alle rettigheder forbeholdes.
            </p>
</div>
</div>
</footer>


    </>
  );
}
