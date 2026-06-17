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



{
"@context": "https://schema.org",
"@type": "Person",
"name": "Kirill Rogozin",
"jobTitle": "Global Trade & Logistics Executive",
"knowsAbout": ["Maritime Logistics", "Dry Bulk Trading", "Port Operations", "AI Automation"],
"url": "https://www.linkedin.com/in/kirill-rogozin-logist/"
}



document.addEventListener("DOMContentLoaded", () => {
// Intersection Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
const observeElements = () => {
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
};
observeElements();
// Router
window.router = {
navigate: (pageId) => {
document.querySelectorAll('.page-section').forEach(el => {
el.classList.remove('active');
el.querySelectorAll('.animate').forEach(anim => anim.classList.remove('animate'));
});
const target = document.getElementById(pageId);
if(target) {
target.classList.add('active');
window.scrollTo(0,0);
setTimeout(observeElements, 100);
}
window.closeMobileMenu();
}
};
// Modal Logic
window.openContactModal = () => {
const modal = document.getElementById('contact-modal');
modal.classList.remove('hidden');
modal.classList.add('flex');
document.body.style.overflow = 'hidden';
window.closeMobileMenu();
}
window.closeContactModal = () => {
const modal = document.getElementById('contact-modal');
modal.classList.add('hidden');
modal.classList.remove('flex');
document.body.style.overflow = '';
}
// Mobile Menu Logic
window.toggleMobileMenu = () => {
const menu = document.getElementById('mobile-menu');
const isOpen = !menu.classList.contains('translate-x-full');
if (isOpen) {
window.closeMobileMenu();
} else {
menu.classList.remove('translate-x-full');
menu.classList.remove('opacity-0');
document.body.style.overflow = 'hidden';
}
}
window.closeMobileMenu = () => {
const menu = document.getElementById('mobile-menu');
menu.classList.add('translate-x-full');
menu.classList.add('opacity-0');
document.body.style.overflow = '';
}
});



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Init Lucide Icons
        lucide.createIcons();
        
        // Particles
        particlesJS("particles-js", {
          "particles": {
            "number": { "value": 30, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.3, "random": true },
            "size": { "value": 2, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.4 } } }
          },
          "retina_detect": true
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 opacity-20" id="particles-js"><canvas className="particles-js-canvas-el" height="1262" style={{width: '100%', height: '100%'}} width="1656"></canvas></div>
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen bg-blue-900/20"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full blur-[100px] mix-blend-screen bg-indigo-900/10"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 border-b bg-[#020410]/90 backdrop-blur-md border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#" onclick="router.navigate('home-page'); return false;">
<div className="flex overflow-hidden text-white bg-gradient-to-br from-slate-700 to-slate-900 w-8 h-8 border-white/10 border rounded-lg items-center justify-center">
<span className="text-xs font-bold tracking-wider">KR</span>
</div>
<span className="font-medium tracking-tight text-sm text-white">Kirill Rogozin</span>
</a>

<nav className="hidden md:flex items-center gap-6">
<button className="text-sm font-medium transition-colors text-slate-400 hover:text-white" onclick="router.navigate('home-page')">Portfolio</button>
<button className="transition-colors hover:text-blue-300 flex text-sm font-medium text-blue-400 gap-x-1.5 gap-y-1.5 items-center" onclick="router.navigate('navismart-page')">NaviSmart AI<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg></button>
</nav>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="hidden sm:inline-flex transition-colors text-slate-400 hover:text-white" href="https://www.linkedin.com/in/kirill-rogozin-logist/" target="_blank">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#020410] text-sm font-medium transition-all hover:scale-105 active:scale-95 bg-white hover:bg-slate-200" onclick="openContactModal()">
                    Contact Me
                </button>
</div>

<div className="md:hidden flex items-center">
<button className="p-2 text-slate-300 hover:text-white transition-colors" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 bg-[#020410]/95 backdrop-blur-xl translate-x-full opacity-0 mobile-menu md:hidden flex flex-col pt-24 px-6" id="mobile-menu">
<nav className="flex flex-col gap-6 text-center">
<button className="text-2xl font-medium text-slate-300 hover:text-white transition-colors" onclick="router.navigate('home-page')">Portfolio</button>
<button className="text-2xl font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2" onclick="router.navigate('navismart-page')">
                NaviSmart AI
                <svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</nav>
<div className="mt-12 w-full h-px bg-white/10"></div>
<div className="mt-8 flex flex-col gap-6">
<button className="w-full py-4 rounded-xl bg-white text-[#020410] font-semibold text-lg hover:bg-slate-200 transition-colors" onclick="openContactModal()">
                Start a Conversation
            </button>
<div className="flex justify-center gap-6">
<a className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors" href="https://www.linkedin.com/in/kirill-rogozin-logist/" target="_blank">
<svg className="lucide lucide-linkedin w-6 h-6" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="text-sm">LinkedIn</span>
</a>
</div>
</div>
<button className="absolute top-5 right-6 p-2 text-slate-400 hover:text-white" onclick="closeMobileMenu()">
<svg className="lucide lucide-x w-8 h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<main className="relative z-10 pt-24 min-h-screen">



<div className="page-section active" id="home-page">

<section className="min-h-[85vh] flex flex-col overflow-hidden relative justify-center">
<div className="max-w-7xl mx-auto px-6 relative w-full pb-10 pt-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium mb-8 animate-on-scroll animate text-blue-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                                Executive Portfolio
                            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1] animate-on-scroll [animation-delay:100ms] animate text-white">
                                Scaling Bulk Logistics <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400">&amp; Trade Execution.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10 animate-on-scroll [animation-delay:200ms] animate text-slate-400">
                                30+ years optimizing port operations, chartering, and global supply chains. 
                                Bridging the gap between traditional maritime logistics and AI-driven automation.
                            </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mb-10 animate-on-scroll [animation-delay:300ms] animate">
<div className="border-l pl-4 border-white/10">
<div className="text-2xl font-medium tracking-tight text-white">$3B+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Export Turnover</div>
</div>
<div className="border-l pl-4 border-white/10">
<div className="text-2xl font-medium tracking-tight text-white">7M+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Tons Handled</div>
</div>
<div className="border-l pl-4 border-white/10">
<div className="text-2xl font-medium tracking-tight text-white">300+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Vessels Chartered</div>
</div>
<div className="border-l pl-4 border-white/10">
<div className="text-2xl font-medium tracking-tight text-white">250+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Team Size</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-on-scroll [animation-delay:400ms] animate">
<button className="shiny-cta" onclick="openContactModal()">
<span>
                                        Schedule Consultation
                                        <svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</span>
</button>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end animate-on-scroll [animation-delay:200ms] relative justify-center animate">
<div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border shadow-2xl group border-white/10 shadow-blue-900/20">
<div className="z-10 bg-gradient-to-t from-[#020410] via-transparent to-transparent opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Kirill Rogozin Portrait" className="object-top transform transition-transform duration-700 group-hover:scale-105 filter saturate-[0.95] contrast-[1.1] w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a16dfdd-2e7e-4d2f-b675-5139e0bd4267_1600w.png"/>
<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="glass-panel p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">Strategic Vision</div>
<div className="text-xs text-slate-400">Driving growth &amp; efficiency</div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-blue-500/10 blur-[80px] -z-10 rounded-full mix-blend-screen"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#030614] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd8705c7-97a9-4f00-985d-7517576b5435_3840w.png)] bg-cover bg-center border-t pt-24 pb-24 relative border-white/5" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 animate-on-scroll text-white">
                            Operational Excellence.
                        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col animate-on-scroll [animation-delay:100ms] group transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors text-blue-400">
<svg className="lucide lucide-anchor w-6 h-6" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v16"></path><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path><path d="M9 11h6"></path><circle cx="12" cy="4" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Port &amp; Bulk Operations</h3>
<p className="text-sm mb-6 h-10 text-slate-400">Maximizing throughput and reducing vessel turnaround time.</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Optimization of terminal throughput &amp; SLA</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Bulk-containerization vs Hoppers</span>
</li>
</ul>
</div>

<div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col animate-on-scroll [animation-delay:200ms] group transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors text-indigo-400">
<svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Trade &amp; Chartering</h3>
<p className="text-sm mb-6 h-10 text-slate-400">End-to-end execution from contract to compliance.</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Risk management &amp; claims handling</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Complex cross-border freight structures</span>
</li>
</ul>
</div>

<div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col animate-on-scroll [animation-delay:300ms] group transition-all duration-300 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-50"></div>
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors text-purple-400 relative z-10">
<svg className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white relative z-10">AI &amp; Automation</h3>
<p className="text-sm mb-6 h-10 text-slate-400 relative z-10">Replacing legacy workflows with intelligent agents.</p>
<button className="mt-auto relative z-10 w-full py-3 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2" onclick="router.navigate('navismart-page')">
                                Explore NaviSmart AI <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="bg-[#020410] pt-24 pb-24 relative" id="track-record">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex items-end justify-between">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight animate-on-scroll text-white">
                            Case Highlights.
                        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative group animate-on-scroll [animation-delay:100ms]">
<div className="absolute inset-0 rounded-2xl blur-xl group-hover:bg-blue-900/20 transition-all bg-blue-900/10"></div>
<div className="glass-panel flex flex-col border-l-blue-500 h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1ff097d-da2a-40db-af71-801c465a5e15_800w.png)] bg-cover bg-center rounded-2xl border-l-2 pt-8 pr-8 pb-8 pl-8 relative">
<div className="text-xs font-semibold mb-3 tracking-wider uppercase text-blue-400">Fertilizers</div>
<h3 className="text-xl font-medium mb-2 text-white">Container Logistics at Scale</h3>
<p className="text-sm mb-4 line-clamp-3 text-slate-400">
                                    Implemented a direct "plant-to-ship" scheme using specialized containers, eliminating intermediate warehousing.
                                </p>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="text-2xl font-medium text-white">7M+ Tons</div>
<div className="text-xs text-slate-500">Total volume handled</div>
</div>
</div>
</div>

<div className="relative group animate-on-scroll [animation-delay:200ms]">
<div className="glass-panel flex flex-col border-l-indigo-500 h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/204b5873-cc74-4f47-b611-d2c13f822ce0_800w.png)] bg-cover bg-center rounded-2xl border-l-2 pt-8 pr-8 pb-8 pl-8 relative">
<div className="text-xs font-semibold mb-3 tracking-wider uppercase text-indigo-400">Scrap Metal</div>
<h3 className="text-xl font-medium mb-2 text-white">Global Export Operations</h3>
<p className="text-sm mb-4 line-clamp-3 text-slate-400">
                                    Managed full-cycle export logistics to 25 countries using a chartered fleet of 300+ vessels.
                                </p>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="text-2xl font-medium text-white">$3B+</div>
<div className="text-xs text-slate-500">Total Export Turnover</div>
</div>
</div>
</div>

<div className="relative group animate-on-scroll [animation-delay:300ms]">
<div className="glass-panel flex flex-col border-l-emerald-500 h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99a33c65-4e23-4779-882d-21e75fb62447_800w.png)] bg-cover bg-center rounded-2xl border-l-2 pt-8 pr-8 pb-8 pl-8 relative">
<div className="text-xs font-semibold mb-3 tracking-wider uppercase text-emerald-400">Process Optimization</div>
<h3 className="text-xl font-medium mb-2 text-white">Supply Chain Efficiency</h3>
<p className="text-sm mb-4 line-clamp-3 text-slate-400">
                                    Redesigned direct export models and automated key workflow stages to reduce cycle times.
                                </p>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="text-2xl font-medium text-white">-20%</div>
<div className="text-xs text-slate-500">Reduction in Lead Time</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#030614] border-y border-white/5" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium mb-6 text-blue-300">
                                Proprietary Platform
                            </div>
<h3 className="text-2xl font-medium mb-4 text-white">NaviSmart Brokerage / AI Planner</h3>
<p className="font-light mb-6 text-slate-400">
                                A specialized platform for dry bulk trading and freight planning. Designed to handle the complexity of ETA calculation, risk assessment, and workflow synchronization.
                            </p>
<button className="text-sm font-medium border-b border-blue-500 pb-0.5 transition-colors text-white hover:text-blue-400" onclick="router.navigate('navismart-page')">
                                View Platform Details →
                            </button>
</div>

<div className="animate-on-scroll [animation-delay:200ms]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium mb-6 text-purple-300">
                                Automation
                            </div>
<h3 className="text-2xl font-medium mb-4 text-white">AI Back-Office Agents</h3>
<p className="font-light mb-6 text-slate-400">
                                Deploying autonomous agents to handle high-volume, repetitive back-office tasks. Automating contract generation, reconciliation, and operational reporting.
                            </p>
<button className="text-sm font-medium border-b border-purple-500 pb-0.5 transition-colors text-white hover:text-purple-400" onclick="router.navigate('navismart-page')">
                                See How It Works →
                            </button>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="bio">
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="overflow-hidden bg-slate-800 w-20 h-20 border-white/10 border ring-[#020410] ring-4 rounded-full mr-auto mb-8 ml-auto">
<img alt="Kirill Rogozin" className="bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f41059f1-4336-4f83-8c73-9e6fd979004f_320w.png"/>
</div>
<h2 className="text-3xl font-medium mb-8 animate-on-scroll text-white">Executive Bio</h2>
<div className="leading-relaxed animate-on-scroll md:text-center text-lg font-light text-slate-300 text-left space-y-6">
<p className="">
                            I am a senior executive with over three decades of experience in international trading and maritime logistics. My core expertise lies in orchestrating complex bulk commodity movements, optimizing port terminal operations, and managing large-scale chartered fleets.
                        </p>
<p className="">
                            Beyond traditional logistics, I specialize in the digital transformation of supply chains. I bridge the gap between physical operations and modern technology, implementing AI-driven workflows to reduce latency, ensure compliance, and maximize profitability.
                        </p>
</div>
</div>
</section>
</div>



<div className="page-section" id="navismart-page">

<section className="min-h-[80vh] flex flex-col justify-center relative border-b border-white/5 bg-grid overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#020410] via-transparent to-[#020410]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#020410] via-transparent to-[#020410]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium mb-6 text-blue-300 animate-on-scroll animate">
                            NaviSmart AI V2.0
                        </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 animate-on-scroll [animation-delay:100ms] animate">
                            The OS for Modern<br/>Chartering.
                        </h1>
<p className="text-xl text-slate-400 font-light mb-10 animate-on-scroll [animation-delay:200ms] animate">
                            From fuel curve estimation to automated laytime calculation. 
                            NaviSmart replaces spreadsheets with intelligent agents.
                        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll [animation-delay:300ms] animate">
<button className="shiny-cta" onclick="openContactModal()"><span>Request Access</span></button>
<button className="px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors" onclick="router.navigate('home-page')">Back to Portfolio</button>
</div>
</div>

<div className="glass-panel rounded-2xl border-b-0 p-1 md:p-4 animate-on-scroll [animation-delay:400ms] animate max-w-5xl mx-auto shadow-2xl shadow-blue-900/20 overflow-hidden">
<div className="rounded-xl overflow-hidden bg-[#0B1121] border border-white/5 aspect-[16/9] relative">
<img alt="NaviSmart AI Core Logic" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/170dd467-1ba6-48cf-be9f-5f23cf85512f_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent opacity-30"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020410]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<svg className="lucide lucide-calculator w-6 h-6" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Freight Calculator</h3>
<p className="text-slate-400 leading-relaxed text-sm">
                                Instant calculation of voyage economics. Integrates real-time bunker prices, port D/As, and vessel consumption curves to project TCE with &gt;95% accuracy.
                            </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500/20 transition-colors">
<svg className="lucide lucide-map w-6 h-6" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Voyage Planning</h3>
<p className="text-slate-400 leading-relaxed text-sm">
                                Dynamic routing engine that accounts for weather zones, ECA restrictions, and canal transits. Optimizes for fuel savings vs. time-charter rates.
                            </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500/20 transition-colors">
<svg className="lucide lucide-files w-6 h-6" data-lucide="files" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path><path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"></path><path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Smart Contracts</h3>
<p className="text-slate-400 leading-relaxed text-sm">
                                LLM-powered analysis of Charter Parties (CP). Automatically flags deviations from standard terms, risk clauses, and generates laytime statements.
                            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030614]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6 text-white">Built for Scale.</h2>
<p className="text-slate-400 mb-8 font-light">
                                 NaviSmart is not just a UI; it is a robust backend system designed to handle the data throughput of a $50M+ trading desk.
                             </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
<div className="bg-blue-500 h-2 w-2 rounded-full"></div>
<span className="text-white">Live AIS Vessel Tracking Integration</span>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
<div className="bg-green-500 h-2 w-2 rounded-full"></div>
<span className="text-white">Multi-currency Ledger Reconciliation</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="glass-panel p-6 rounded-xl text-center">
<div className="text-4xl font-semibold text-white mb-1">40%</div>
<div className="text-xs text-slate-500 uppercase">Faster Fixtures</div>
</div>

<div className="glass-panel p-6 rounded-xl text-center">
<div className="text-4xl font-semibold text-white mb-1">Zero</div>
<div className="text-xs text-slate-500 uppercase">Calculation Errors</div>
</div>

<div className="glass-panel p-6 rounded-xl text-center col-span-2">
<div className="text-4xl font-semibold text-white mb-1">24/7</div>
<div className="text-xs text-slate-500 uppercase">Automated Watchkeeping</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="py-24 bg-[#020410] border-t relative border-white/5" id="contact">
<div className="bg-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] via-[#020410] to-[#020410] from-blue-900/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84bc129a-905a-4ebc-a574-6508a81be894_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center max-w-3xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="md:text-4xl animate-on-scroll text-3xl font-medium text-white tracking-tight mb-6" style={{}}>Open to Investors &amp; Strategic Partnerships</h2>
<p className="animate-on-scroll font-light text-slate-400 mb-12">
                    Based in Moscow, Russia. Ready for relocation globally.<br/>
                    Detailed references and NDA-protected case studies available upon request.
                </p>
<div className="glass-panel md:p-12 animate-on-scroll [animation-delay:100ms] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6d1151b-8ea8-49cd-b52e-774e9588d92b_1600w.webp)] bg-cover rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
<div className="">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Email</div>
<a className="transition-colors hover:text-blue-400 text-lg text-white" href="mailto:9300039rogozin@gmail.com" style={{}}>9300039rogozin@gmail.com</a>
</div>
<div className="">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Phone / WhatsApp</div>
<a className="transition-colors hover:text-blue-400 text-lg text-white" href="tel:+79219300039" style={{}}>+7 (921) 930 00 39</a>
</div>
<div className="">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Professional Network</div>
<a className="inline-flex items-center gap-2 transition-colors hover:text-blue-400 text-lg text-white" href="https://www.linkedin.com/in/kirill-rogozin-logist/" target="_blank">
                                LinkedIn Profile <svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<div className="">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Location</div>
<span className="text-lg text-white" style={{}}>Moscow, Russia</span>
</div>
</div>
<div className="mt-10 pt-10 border-t text-center border-white/5">
<button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-[#020410] text-sm font-medium transition-colors w-full md:w-auto bg-white hover:bg-slate-200" onclick="openContactModal()">
                            Initiate Conversation
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t bg-[#020410] py-12 border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br border flex items-center justify-center from-slate-700 to-slate-900 border-white/10 text-white">
<span className="font-bold text-[10px]">KR</span>
</div>
<span className="text-sm text-slate-500" style={{}}>© 2026 Kirill Rogozin. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-slate-500 transition-colors hover:text-white" href="https://www.linkedin.com/in/kirill-rogozin-logist/" target="_blank"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 transition-colors hover:text-white" href="mailto:9300039rogozin@gmail.com"><svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center overflow-y-auto p-4" id="contact-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeContactModal()"></div>

<div className="relative w-full max-w-lg p-0 modal-content my-auto">
<div className="glass-panel rounded-2xl p-6 md:p-8 bg-[#0B1121] border border-white/10 shadow-2xl relative">

<button className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors" onclick="closeContactModal()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<h3 className="text-2xl font-medium text-white mb-2">Start a Conversation</h3>
<p className="text-slate-400 text-sm mb-6">Fill out the form below and I'll get back to you shortly.</p>

<form action="https://formsubmit.co/9300039rogozin@gmail.com" className="space-y-4" method="POST" target="_blank">
<input name="_subject" type="hidden" value="New Contact Request from Portfolio"/>
<input name="_captcha" type="hidden" value="false"/>

<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" name="name" placeholder="Your Name" required="" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" name="email" placeholder="email@company.com" required="" type="email"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 resize-none" name="message" placeholder="Briefly describe your inquiry..." required="" rows="4"></textarea>
</div>

<button className="w-full bg-white text-[#020410] font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors mt-2 active:scale-[0.98]" type="submit">Send Message</button>
</form>
</div>
</div>
</div>



    </>
  );
}
