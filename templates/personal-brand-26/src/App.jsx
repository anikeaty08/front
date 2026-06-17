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



tailwind.config = {
theme: {
extend: {
colors: {
orange: {
450: '#FF5A1F',
500: '#F74E09',
600: '#D93D00',
},
neutral: {
850: '#1a1a1a',
900: '#0a0a0a',
950: '#050505',
}
},
animation: {
'spin-slow': 'spin-slow 12s linear infinite',
}
}
}
}



        // Icons
        lucide.createIcons();

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counters if inside this section
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000; // 2 seconds
                        const increment = target / (duration / 16); 
                        
                        let current = 0;
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target;
                                // Add 'k' or '%' logic if needed based on context, 
                                // currently handled by span next to it in HTML
                            }
                        };
                        updateCounter();
                        counter.classList.remove('counter'); // prevent re-run
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<nav className="fixed top-0 w-full flex justify-between items-center py-4 px-6 lg:px-12 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/5 bg-neutral-900/80">
<div className="flex items-center gap-2 group cursor-pointer">

<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
<span className="font-bold text-white text-lg">S</span>
</div>
<span className="text-xl font-semibold tracking-tight uppercase">SARIKAYA</span>
</div>
<div className="hidden md:flex gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200" href="#">About</a>
<a className="hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200" href="#">Vision</a>
<a className="hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200" href="#">Work</a>
<a className="hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200" href="#">Skills</a>
<a className="hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200" href="#">App</a>
</div>
<a className="flex items-center gap-2 text-sm font-medium group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all" href="#contact">
            Kontakt 
            <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</nav>

<header className="relative pt-32 pb-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">

<div className="relative z-10 mb-20 reveal active">
<h1 className="text-6xl md:text-8xl font-semibold uppercase leading-[0.9] tracking-tight">
<span className="block hover:translate-x-2 transition-transform duration-500 cursor-default">Ich baue</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 hover:translate-x-2 transition-transform duration-500 delay-75 cursor-default">Die Zukunft.</span>
<span className="block hover:translate-x-2 transition-transform duration-500 delay-100 cursor-default text-white">Schon jetzt.</span>
</h1>
</div>
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 flex flex-col gap-10 reveal delay-200">
<p className="text-xl text-neutral-400 max-w-md font-medium leading-relaxed">
                    18 • Fachabi + Jahrespraktikum 2025/26 • Strategisch. Schnell. Mit trockenem Humor.
                </p>
<div className="flex items-center gap-4 group">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg tracking-wide transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(247,78,9,0.3)] hover:shadow-[0_0_30px_rgba(247,78,9,0.5)]">
                        Meine Projekte sehen
                    </button>
<button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group-hover:rotate-45 duration-300">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="pt-8">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-lg font-medium text-neutral-300">Vision &amp; kommende App</span>
</div>
<div className="flex items-center gap-4">
<span className="text-4xl font-semibold tracking-tight counter" data-target="2026">0</span>
<div className="flex -space-x-4">
<img alt="User" className="w-12 h-12 rounded-full border-4 border-neutral-900 transition-transform hover:-translate-y-2 hover:z-10 duration-300" src="https://i.pravatar.cc/100?img=11"/>
<img alt="User" className="w-12 h-12 rounded-full border-4 border-neutral-900 transition-transform hover:-translate-y-2 hover:z-10 duration-300 delay-75" src="https://i.pravatar.cc/100?img=32"/>
<div className="w-12 h-12 rounded-full border-4 border-neutral-900 bg-neutral-800 flex items-center justify-center text-xs font-medium hover:bg-orange-500 transition-colors cursor-pointer">+</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 relative h-[400px] flex justify-center items-center perspective-1000 reveal delay-300">

<div className="absolute w-64 h-96 bg-neutral-800 rounded-3xl border border-white/10 shadow-2xl transform rotate-[15deg] translate-y-12 translate-x-12 flex flex-col p-6 justify-between opacity-60 animate-float-delayed backdrop-blur-sm">
<span className="text-xs text-neutral-500 rotate-90 absolute right-2 top-8">DEV</span>
</div>

<div className="absolute w-64 h-96 bg-neutral-300 rounded-3xl shadow-2xl transform rotate-[5deg] translate-y-6 translate-x-4 flex flex-col p-6 justify-between text-neutral-900 animate-float-reverse hover:z-20 transition-all hover:scale-105 duration-300">
<div className="flex justify-between items-start">
<span className="font-bold text-lg opacity-50">CODE</span>
</div>
<div>
<div className="text-xl font-semibold tracking-tight">Suheyl<br/>Sarikaya</div>
<div className="mt-4 flex justify-between text-xs font-mono opacity-60">
<span>DEV</span>
<span>2026</span>
</div>
</div>
</div>

<div className="absolute w-64 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-[0_20px_50px_rgba(247,78,9,0.3)] transform -rotate-[12deg] -translate-y-4 flex flex-col p-6 justify-between text-white border-t border-white/20 animate-float hover:z-30 transition-all hover:scale-105 duration-300 cursor-pointer group">
<div className="flex justify-between items-start">
<span className="font-bold text-2xl tracking-tighter italic">SARIKAYA</span>
<i className="w-8 h-8 opacity-80 group-hover:text-yellow-200 transition-colors" data-lucide="cpu"></i>
</div>
<div className="w-12 h-8 bg-yellow-400/20 rounded mb-4 border border-yellow-200/30 group-hover:bg-yellow-400/40 transition-colors"></div>
<div>
<div className="text-lg font-mono tracking-widest mb-2 group-hover:tracking-[0.15em] transition-all">**** **** **** 2026</div>
<div className="flex justify-between items-end">
<div>
<p className="text-xs opacity-80 uppercase mb-1">Status</p>
<p className="font-semibold text-lg">Building...</p>
</div>
<span className="font-bold italic text-xl opacity-80">PRO</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col justify-center space-y-2 mt-10 lg:mt-0 reveal delay-400">
<a className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-orange-500/50 transition-colors" href="#">
<span className="text-xl font-medium group-hover:text-orange-500 group-hover:translate-x-2 transition-all">Strategie &amp; Planung</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-orange-500 transition-colors" data-lucide="arrow-up-right"></i>
</a>
<a className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-orange-500/50 transition-colors" href="#">
<span className="text-xl font-medium group-hover:text-orange-500 group-hover:translate-x-2 transition-all">App Development</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-orange-500 transition-colors" data-lucide="arrow-right"></i>
</a>
<a className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-orange-500/50 transition-colors" href="#">
<span className="text-xl font-medium group-hover:text-orange-500 group-hover:translate-x-2 transition-all">Full Stack Learning</span>
<i className="w-5 h-5 text-neutral-500 group-hover:text-orange-500 transition-colors" data-lucide="arrow-down-right"></i>
</a>
</div>
</div>
</header>


<section className="bg-neutral-50 text-neutral-900 py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-20">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
<div>
<p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4 flex items-center gap-2">
<span className="w-8 h-[1px] bg-neutral-400"></span> About
                    </p>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase leading-none">
                        Hey, ich bin <br/>Suheyl.
                    </h2>
</div>
<div className="flex flex-col justify-end gap-4">
<p className="text-xl text-neutral-600 font-medium leading-relaxed max-w-lg">
                        Ich bin 18, mache gerade Fachabitur und ein Jahrespraktikum. Ich habe entschieden, dass "später mal" jetzt ist.
                        Ich liebe es, Probleme strategisch zu zerlegen, schnell zu lernen und saubere Ergebnisse zu liefern.
                        Humor gehört bei mir dazu – ohne wird alles schnell langweilig.
                    </p>
<p className="text-xl font-bold text-neutral-900 leading-relaxed max-w-lg">
                        Ich pack das jetzt schon – und werde noch deutlich besser.
                    </p>
</div>
</div>

<div className="mb-8">
<h3 className="text-3xl font-semibold tracking-tight mb-6">Wo ich in 2–4 Jahren stehen will</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-orange-500 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] text-white relative overflow-hidden group hover-card-rise reveal delay-100 cursor-default">
<div className="absolute -right-10 -top-10 bg-orange-400 w-40 h-40 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
<div className="flex justify-between items-start relative z-10">
<div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="briefcase"></i>
</div>
<i className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" data-lucide="arrow-up-right"></i>
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-semibold tracking-tight">Product</span>
<span className="text-3xl font-medium opacity-80">Builder</span>
</div>
<p className="text-lg opacity-90 font-medium leading-snug">
                            Vollzeit-Entwickler in einem schnell wachsenden Tech-/Startup-Team und langfristig eigene Studio-Struktur.
                        </p>
</div>
</div>

<div className="bg-neutral-950 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] text-white relative overflow-hidden hover-card-rise reveal delay-200">
<div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start relative z-10">
<div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white fill-current animate-pulse" data-lucide="smartphone"></i>
</div>
</div>
<div className="relative z-10">
<div className="flex items-start gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight">Eigene App</span>
</div>
<p className="text-lg text-neutral-400 font-medium leading-snug">
                            Launch eines Produktivitäts-Tools speziell für junge Creator und Maker.
                        </p>
</div>
</div>

<div className="bg-neutral-200/50 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] text-neutral-900 relative hover-card-rise reveal delay-300">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
</div>
<div>
<div className="flex items-start gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight">Netzwerk</span>
</div>
<p className="text-lg text-neutral-600 font-medium leading-snug">
                            Zusammenarbeit mit Menschen, die deutlich schneller denken als der Durchschnitt.
                        </p>
</div>
</div>
</div>
</div>
</section>


<section className="bg-neutral-50 text-neutral-900 pb-24 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 mb-20 reveal">
<div>
<p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4">Work</p>
<h2 className="text-5xl font-semibold tracking-tight uppercase leading-[0.95] max-w-md">
                        Was ich gerade wirklich bewege
                    </h2>
</div>
<div className="flex items-end">
<p className="text-lg text-neutral-600 font-medium max-w-sm">
                        Von interner Prozessautomatisierung bis zu eigenen Produkt-Launches. Hier passiert echte Arbeit.
                    </p>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-0 border-t border-neutral-200">

<div className="lg:col-span-5 reveal delay-100">
<div className="group flex items-center justify-between py-8 border-b border-neutral-200 pr-8 cursor-pointer hover:bg-neutral-100 transition-colors px-4 duration-300">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-400 group-hover:text-orange-500 transition-colors">01</span>
<h3 className="text-xl font-semibold group-hover:translate-x-2 transition-transform">Interne Prozessautomatisierung</h3>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
<i className="w-5 h-5 group-hover:text-orange-500" data-lucide="arrow-right"></i>
</div>
</div>

<div className="flex items-center justify-between py-8 border-b border-neutral-900 pr-8 cursor-pointer bg-neutral-900 text-white -mx-4 px-8 relative shadow-xl rounded-r-lg z-10 transform scale-[1.02] transition-transform">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-500">02</span>
<h3 className="text-xl font-semibold uppercase">UI/UX Redesign<br/>Projekt</h3>
</div>
<div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center animate-bounce">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="group flex items-center justify-between py-8 border-b border-neutral-200 pr-8 cursor-pointer hover:bg-neutral-100 transition-colors px-4 duration-300">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-400 group-hover:text-orange-500 transition-colors">03</span>
<h3 className="text-xl font-semibold group-hover:translate-x-2 transition-transform">Automatisierungs-Tool (Python)</h3>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
<i className="w-5 h-5 group-hover:text-orange-500" data-lucide="arrow-right"></i>
</div>
</div>
<div className="group flex items-center justify-between py-8 border-b border-neutral-200 pr-8 cursor-pointer hover:bg-neutral-100 transition-colors px-4 duration-300">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-400 group-hover:text-orange-500 transition-colors">04</span>
<h3 className="text-xl font-semibold group-hover:translate-x-2 transition-transform">Personal Brand Website</h3>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
<i className="w-5 h-5 group-hover:text-orange-500" data-lucide="arrow-right"></i>
</div>
</div>
<div className="group flex items-center justify-between py-8 border-b border-neutral-200 pr-8 cursor-pointer hover:bg-neutral-100 transition-colors px-4 duration-300">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-400 group-hover:text-orange-500 transition-colors">05</span>
<h3 className="text-xl font-semibold group-hover:translate-x-2 transition-transform">Aktuelles Lernprojekt</h3>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
<i className="w-5 h-5 group-hover:text-orange-500" data-lucide="lock"></i>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-neutral-100 lg:rounded-r-3xl p-12 flex items-center justify-center reveal delay-300">
<div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2">
<div className="flex justify-between items-center mb-6">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
</div>
</div>
<h4 className="text-lg font-bold mb-4">Projekt Status</h4>

<div className="grid grid-cols-3 gap-4 mb-8">
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-xs font-semibold">42%</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 rounded-full progress-bar" style={{'--target-width': '42%'}}></div>
</div>
<span className="text-[10px] text-neutral-400">Time Saved</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-neutral-900"></div>
<span className="text-xs font-semibold">100%</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 rounded-full progress-bar delay-200" style={{'--target-width': '100%'}}></div>
</div>
<span className="text-[10px] text-neutral-400">Redesign</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<span className="text-xs font-semibold">WIP</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-300 rounded-full progress-bar delay-300" style={{'--target-width': '30%'}}></div>
</div>
<span className="text-[10px] text-neutral-400">App</span>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">P</div>
<div>
<p className="text-sm font-semibold">Python Tool</p>
<p className="text-xs text-neutral-400">Automatisierung</p>
</div>
</div>
<span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold uppercase group-hover:bg-orange-500 group-hover:text-white transition-colors">Active</span>
</div>
<div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold">W</div>
<div>
<p className="text-sm font-semibold">Website</p>
<p className="text-xs text-neutral-400">Personal Brand</p>
</div>
</div>
<span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold uppercase group-hover:bg-orange-500 group-hover:text-white transition-colors">Done</span>
</div>
<div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold">L</div>
<div>
<p className="text-sm font-semibold">Lernprojekt</p>
<p className="text-xs text-neutral-400">Coming Soon</p>
</div>
</div>
<span className="text-[10px] bg-neutral-200 text-neutral-600 px-2 py-1 rounded font-bold uppercase">Secret</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-neutral-50 text-neutral-900 pb-32 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

<div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center perspective-1000 reveal">

<div className="absolute w-[280px] h-[440px] bg-gradient-to-bl from-orange-600 to-orange-500 rounded-3xl transform rotate-[-15deg] translate-x-12 translate-y-4 animate-float-delayed"></div>

<div className="absolute w-[280px] h-[440px] bg-gradient-to-tr from-orange-500 to-orange-400 rounded-3xl shadow-2xl flex flex-col justify-between p-6 text-white transform rotate-[-5deg] z-10 animate-float hover:z-20 transition-transform duration-500 hover:rotate-0 hover:scale-105">
<div className="flex justify-between items-start">
<span className="font-bold text-2xl italic tracking-tight rotate-[-90deg] origin-top-left translate-y-36 -translate-x-2 opacity-80">SKILLS</span>
<div className="flex flex-col items-end">
<span className="font-bold text-lg italic">2026</span>
<div className="mt-4 text-xs font-mono text-right opacity-80 leading-relaxed">
                                STRATEGY<br/>CODE<br/>DESIGN
                            </div>
</div>
</div>
<div>
<div className="text-2xl font-semibold mb-2">Suheyl<br/>Sarikaya</div>
<div className="text-xs opacity-70">Januar 2026</div>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-3xl pointer-events-none"></div>
</div>
</div>

<div className="lg:w-1/2 reveal delay-200">
<p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4">Fähigkeiten</p>
<h2 className="text-5xl font-semibold tracking-tight uppercase leading-[0.95] mb-8">
                    Meine aktuelle <br/>Power
                </h2>
<div className="space-y-4 mb-10">
<div className="flex gap-4 items-center group hover:bg-white p-3 rounded-xl transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">93</span>
</div>
<p className="text-lg font-medium text-neutral-700">Strategisches Denken &amp; Planung</p>
</div>
<div className="flex gap-4 items-center group hover:bg-white p-3 rounded-xl transition-colors">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
<span className="font-bold text-xs">96</span>
</div>
<p className="text-lg font-medium text-neutral-700">Extrem schnell lernen &amp; adaptieren</p>
</div>
<div className="flex gap-4 items-center group hover:bg-white p-3 rounded-xl transition-colors">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">91</span>
</div>
<p className="text-lg font-medium text-neutral-700">Probleme strategisch zerlegen</p>
</div>
<div className="flex gap-4 items-center group hover:bg-white p-3 rounded-xl transition-colors">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">88</span>
</div>
<p className="text-lg font-medium text-neutral-700">HTML • CSS • Tailwind</p>
</div>
<div className="flex gap-4 items-center group hover:bg-white p-3 rounded-xl transition-colors">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">80</span>
</div>
<p className="text-lg font-medium text-neutral-700">Python / Automatisierung</p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-1">
                        MEHR DETAILS
                    </button>
<button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-all hover:rotate-45">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</section>


<section className="bg-black text-white py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-20">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10 reveal">
<div>
<p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4">Coming Soon</p>
<h2 className="text-5xl font-semibold tracking-tight uppercase leading-[0.95] max-w-lg">
                        Was als Nächstes kommt
                    </h2>
</div>
<p className="text-lg text-neutral-400 max-w-md font-medium">
                    Ich arbeite gerade an einer Produktivitäts-App speziell für junge Creator, Maker und schnelle Denker.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="flex flex-col justify-between h-full space-y-12">
<div className="bg-neutral-900/50 p-6 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors duration-500 reveal delay-100">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-orange-500" data-lucide="rocket"></i>
</div>
<div className="text-8xl font-semibold tracking-tighter mb-4 flex">
<span className="counter" data-target="2027">0</span>
</div>
<p className="text-neutral-400 font-medium">
                            Geplanter Launch für Ende 2026 / Anfang 2027. Early Feedback oder Kollaboration? Sehr gerne!
                        </p>
</div>

<div className="bg-orange-500 h-[280px] rounded-3xl flex items-center justify-center hover:scale-[1.02] transition-transform duration-500 reveal delay-200">

<div className="text-6xl font-bold italic text-white animate-pulse">
<i className="w-20 h-20" data-lucide="layers"></i>
</div>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-2 gap-6">

<div className="bg-orange-500 h-[280px] rounded-3xl flex items-center justify-center group overflow-hidden relative reveal delay-300">
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col items-center gap-2 text-white group-hover:scale-110 transition-transform duration-500">
<i className="w-12 h-12 fill-current" data-lucide="brain-circuit"></i>
<span className="text-2xl font-semibold tracking-tight">Struktur</span>
</div>
</div>

<div className="bg-orange-500 h-[280px] rounded-3xl flex items-center justify-center group reveal delay-300">
<div className="text-white text-6xl font-bold italic tracking-tighter group-hover:rotate-12 transition-transform duration-500">APP</div>
</div>

<div className="bg-orange-500 h-[280px] rounded-3xl flex items-center justify-center group reveal delay-400">
<div className="flex items-center gap-2 text-white group-hover:scale-110 transition-transform duration-500">
<span className="text-4xl font-bold tracking-tight">Magie</span>
</div>
</div>

<div className="bg-black border border-white/10 h-[280px] rounded-3xl flex flex-col items-center justify-center text-center p-8 hover:bg-neutral-900 transition-colors reveal delay-400">
<h3 className="text-2xl font-bold uppercase leading-tight mb-6">Chaos in Struktur<br/>verwandeln</h3>
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-neutral-200 transition-colors transform hover:-translate-y-1">
                            JOIN WAITLIST
                        </button>
</div>
</div>
</div>
</div>
</section>


<section className="bg-neutral-100 text-neutral-900 py-32 px-6 lg:px-12" id="contact">
<div className="max-w-4xl mx-auto text-center relative reveal">
<p className="text-sm font-semibold tracking-wider uppercase text-orange-500 mb-8">Kontakt</p>
<div className="absolute -top-10 right-0 text-orange-500 opacity-100 animate-spin-slow">
<svg fill="currentColor" height="60" viewbox="0 0 24 24" width="60"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H17.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H8.0166V21H5.0166Z"></path></svg>
</div>
<h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-12 cursor-default hover:text-orange-500 transition-colors duration-500">
                “Lass uns reden. Ohne Bullshit.”
            </h3>
<div className="flex items-center justify-between border-t border-neutral-200 pt-8">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<div className="text-left">
<p className="font-bold text-neutral-900">hi@sarikaya.de</p>
<p className="text-sm text-neutral-500">Discord/X: @sari_kaya</p>
</div>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-orange-500 text-white pt-24 pb-8 overflow-hidden relative">

<div className="absolute bottom-[20%] left-0 right-0 select-none pointer-events-none">
<h1 className="text-[14vw] font-black text-center leading-none text-orange-600 opacity-40 mix-blend-multiply tracking-tighter animate-pulse" style={{animationDuration: '4s'}}>SARIKAYA</h1>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-10 reveal">
<h2 className="text-5xl font-bold uppercase leading-none tracking-tight max-w-lg">
                    Antworte garantiert in &lt;48h
                </h2>
<div className="flex flex-col items-start gap-4">
<button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold tracking-wide hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                        EMAIL SCHREIBEN
                    </button>
<span className="text-sm opacity-80">Sonst darfst du mich beleidigen.</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 text-sm reveal delay-100">
<div>
<h4 className="font-bold mb-6">Navigation</h4>
<ul className="space-y-4 opacity-80 font-medium">
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">About</a></li>
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">Vision</a></li>
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">Work</a></li>
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">Skills</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Socials</h4>
<ul className="space-y-4 opacity-80 font-medium">
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">X (Twitter)</a></li>
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">Discord</a></li>
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">Telegram</a></li>
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Legal</h4>
<ul className="space-y-4 opacity-80 font-medium">
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">Impressum</a></li>
<li><a className="hover:opacity-100 hover:ml-1 transition-all" href="#">Datenschutz</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-xs font-medium opacity-80 reveal delay-200">
<div className="flex gap-4 mb-4 md:mb-0">
<a href="#">© 2026 Suheyl Sarikaya</a>
</div>
<div className="flex gap-4 mb-4 md:mb-0">
<span>All Rights Reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:opacity-100" href="#">Terms</a>
<a className="hover:opacity-100" href="#">Privacy</a>
</div>
</div>
<div className="flex gap-4 mt-8 opacity-60 justify-center md:justify-start">
<i className="w-4 h-4 cursor-pointer hover:opacity-100 hover:scale-125 transition-transform" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer hover:opacity-100 hover:scale-125 transition-transform" data-lucide="linkedin"></i>
<i className="w-4 h-4 cursor-pointer hover:opacity-100 hover:scale-125 transition-transform" data-lucide="github"></i>
</div>
</div>
</footer>


    </>
  );
}
