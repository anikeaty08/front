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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-glow"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] animate-glow" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-zinc-100 flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-semibold text-white">R</span>
                Rupesh Rajak
            </a>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-100 transition-colors" href="#experience">Experience</a>
<a className="hover:text-zinc-100 transition-colors" href="#projects">Projects</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50" href="https://drive.google.com/file/d/110digiSmBBOiPyaB2AluNd1-8NsAHK1a/view" target="_blank">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                    Resume
                </a>
<a className="px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-sm font-medium hover:bg-white transition-colors" href="#contact">
                    Contact
                </a>
</div>
</div>
</nav>
<main className="pt-24 pb-20">

<section className="max-w-7xl mx-auto px-6 min-h-[85vh] flex flex-col justify-center relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="flex flex-col items-start z-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Available for new opportunities
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-100 leading-[1.1] mb-6">
                        Senior Flutter <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Developer.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl mb-10">
                        Building scalable, high-performance cross-platform applications. Specializing in Clean Architecture, state management, and seamless UI/UX.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-6 py-3 rounded-full bg-zinc-100 text-zinc-950 text-base font-medium hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]" href="#projects">
                            View Projects
                        </a>
<a className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all" href="https://github.com" target="_blank">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all" href="https://linkedin.com" target="_blank">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div className="relative w-full max-w-md mx-auto lg:ml-auto order-1 lg:order-2">
<div className="aspect-square rounded-full md:rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 relative z-10 shadow-2xl shadow-blue-900/20">

<img alt="Portrait of a Man in Black Sportswear" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5525535-a27b-4e71-9ee1-2b5ee268dd36_800w.png"/>
</div>

<div className="absolute -inset-4 border border-zinc-800 rounded-full md:rounded-[2rem] z-0 opacity-50"></div>
<div className="absolute -inset-8 border border-zinc-800/50 rounded-full md:rounded-[2.5rem] z-0 opacity-30"></div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce hidden md:block">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 relative" id="about">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-6">About Me</h2>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">
                        Senior Flutter Developer with 3.5+ years of experience building scalable mobile and web apps using Flutter and Dart.
                    </p>
<p className="text-lg text-zinc-400 leading-relaxed mb-8">
                        Expert in Clean Architecture, BLoC, REST APIs, and Firebase. Strong focus on performance optimization, intuitive UI/UX, and delivering robust, production-ready deployments.
                    </p>

<div className="grid grid-cols-2 gap-4">
<div className="glass-panel p-5 rounded-2xl">
<div className="text-3xl font-semibold tracking-tight text-zinc-100 mb-1">3.5+</div>
<div className="text-base text-zinc-500 font-medium">Years Experience</div>
</div>
<div className="glass-panel p-5 rounded-2xl">
<div className="text-3xl font-semibold tracking-tight text-zinc-100 mb-1">10+</div>
<div className="text-base text-zinc-500 font-medium">Projects Delivered</div>
</div>
<div className="glass-panel p-5 rounded-2xl">
<div className="text-3xl font-semibold tracking-tight text-zinc-100 mb-1">India</div>
<div className="text-base text-zinc-500 font-medium">Based in</div>
</div>
<div className="glass-panel p-5 rounded-2xl">
<div className="text-3xl font-semibold tracking-tight text-zinc-100 mb-1">25%</div>
<div className="text-base text-zinc-500 font-medium">Performance Boost</div>
</div>
</div>
</div>
<div className="md:col-span-7 md:pl-12">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-8">Technical Arsenal</h3>
<div className="space-y-8">
<div>
<div className="text-base font-medium text-zinc-300 mb-4 flex items-center gap-2">
<svg className="text-blue-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 18h.01"></path><path d="M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"></path></svg>
                                Core &amp; State Management
                            </div>
<div className="flex flex-wrap gap-2.5">
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">Flutter</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">Dart</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">BLoC</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">Provider</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">GetX</span>
</div>
</div>
<div>
<div className="text-base font-medium text-zinc-300 mb-4 flex items-center gap-2">
<svg className="text-purple-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                Architecture &amp; Backend
                            </div>
<div className="flex flex-wrap gap-2.5">
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">Clean Architecture</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">MVVM</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">Repository Pattern</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">Firebase Suite</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">REST APIs / Dio</span>
</div>
</div>
<div>
<div className="text-base font-medium text-zinc-300 mb-4 flex items-center gap-2">
<svg className="text-teal-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                                Tools &amp; Integrations
                            </div>
<div className="flex flex-wrap gap-2.5">
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">CI/CD (GitHub Actions, Codemagic)</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">IoT (ESP32)</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">Azure SDK</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-base text-zinc-300 font-medium">Git</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5" id="experience">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-12 text-center">Work Experience</h2>
<div className="relative border-l border-zinc-800/80 ml-3 md:ml-0 md:pl-8 space-y-12">

<div className="relative pl-8 md:pl-0">
<div className="absolute w-3 h-3 bg-zinc-950 border-2 border-blue-500 rounded-full -left-[1.35rem] md:-left-[2.4rem] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-100">Senior Flutter Developer</h3>
<span className="text-base font-medium text-zinc-500 mt-1 md:mt-0">Vizzhy (Healthcare)</span>
</div>
<div className="glass-panel p-6 rounded-2xl mt-4">
<ul className="space-y-3">
<li className="flex items-start gap-3">
<svg className="text-blue-400 mt-1 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-lg text-zinc-300 leading-relaxed">Engineered robust healthcare applications, achieving a <strong className="text-zinc-100 font-medium">25% improvement in overall performance</strong>.</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-blue-400 mt-1 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-lg text-zinc-300 leading-relaxed">Optimized network layers, successfully <strong className="text-zinc-100 font-medium">reducing API latency by 20%</strong> for real-time data handling.</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-blue-400 mt-1 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-lg text-zinc-300 leading-relaxed">Integrated complex hardware via IoT protocols, enabling seamless connectivity with glucose and BP monitors.</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-blue-400 mt-1 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-lg text-zinc-300 leading-relaxed">Implemented Azure real-time streaming services and managed end-to-end Play Store &amp; App Store deployments.</span>
</li>
</ul>
</div>
</div>

<div className="relative pl-8 md:pl-0">
<div className="absolute w-3 h-3 bg-zinc-950 border-2 border-zinc-600 rounded-full -left-[1.35rem] md:-left-[2.4rem] top-1.5"></div>
<div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-100">Flutter Developer</h3>
<span className="text-base font-medium text-zinc-500 mt-1 md:mt-0">Logimonk Technologies</span>
</div>
<div className="glass-panel p-6 rounded-2xl mt-4">
<ul className="space-y-3">
<li className="flex items-start gap-3">
<svg className="text-zinc-500 mt-1 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-lg text-zinc-300 leading-relaxed">Streamlined coding practices and architecture, resulting in a <strong className="text-zinc-100 font-medium">30% increase in development efficiency</strong>.</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-zinc-500 mt-1 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-lg text-zinc-300 leading-relaxed">Conducted deep code refactoring and utilized Crashlytics to <strong className="text-zinc-100 font-medium">reduce app crash rate by 15%</strong>.</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-zinc-500 mt-1 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-lg text-zinc-300 leading-relaxed">Architected scalable Firebase integrations and heavily optimized REST API consumption.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="projects">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">Featured Projects</h2>
<p className="text-lg text-zinc-400">A selection of production applications I've built and deployed.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="group flex flex-col glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
<div className="p-8 flex-grow">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">Vizzhy Healthcare</h3>
<div className="flex gap-2">
<a className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all" href="https://play.google.com/store/apps/details?id=com.vizzhy.multiomics" target="_blank" title="Play Store">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</a>
<a className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all" href="https://apps.apple.com/in/app/vizzhy/id6677031163" target="_blank" title="App Store">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 1.44C11 6.44 9.22 5 7 5a5 5 0 0 0-5 5c0 4.78 3 12.22 6 12.22 1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5h-2c0-3-1-4-2-5Z"></path></svg>
</a>
</div>
</div>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">
                            A comprehensive multiomics healthcare application featuring real-time vital monitoring through IoT integration, secure patient data handling, and optimized performance architecture.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Flutter</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">IoT (ESP32)</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Azure Stream</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Clean Arch</span>
</div>
</div>
</div>

<div className="group flex flex-col glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
<div className="p-8 flex-grow">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">Octave HI</h3>
<div className="flex gap-2">
<a className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all" href="https://play.google.com/store/apps/details?id=com.octavehi.app" target="_blank" title="Play Store">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</a>
<a className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all" href="https://apps.apple.com/in/app/octavehi/id1592076532" target="_blank" title="App Store">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 1.44C11 6.44 9.22 5 7 5a5 5 0 0 0-5 5c0 4.78 3 12.22 6 12.22 1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5h-2c0-3-1-4-2-5Z"></path></svg>
</a>
</div>
</div>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">
                            Investment and financial technology platform ensuring secure transactions, fast rendering of complex financial charts, and a highly responsive user interface.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Flutter</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">State Management</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">REST APIs</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">FinTech</span>
</div>
</div>
</div>

<div className="group flex flex-col glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
<div className="p-8 flex-grow">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">Aspirant League</h3>
<a className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all" href="https://play.google.com/store/apps/details?id=com.aspirantleague.app" target="_blank">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</a>
</div>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">
                            An EdTech mobile application designed for students. Focused on smooth video playback, offline capabilities, and interactive quizzes with real-time syncing.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Flutter</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Firebase</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Video Streaming</span>
</div>
</div>
</div>

<div className="group flex flex-col glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
<div className="p-8 flex-grow">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">PIMS HQ</h3>
<a className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all" href="https://www.pimshq.com/" target="_blank">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
</a>
</div>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">
                            A robust web dashboard built with Flutter Web for comprehensive management and data visualization, requiring complex state handling across multiple modules.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Flutter Web</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Dashboard UI</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Data Vis</span>
</div>
</div>
</div>

<div className="group flex flex-col glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 md:col-span-1 lg:col-span-2">
<div className="p-8 flex-grow flex flex-col md:flex-row items-center gap-8">
<div className="w-full md:w-2/3">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">Fastguru AI</h3>
<span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold uppercase tracking-wider">AI Integration</span>
</div>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">
                                An intelligent application leveraging AI for enhanced user experiences. Focused on maintaining smooth client-side performance while interfacing with heavy backend AI processing models.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Flutter</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">AI Integration</span>
<span className="px-3 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium">Performance Optimization</span>
</div>
</div>
<div className="w-full md:w-1/3 flex justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="text-zinc-700" fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5 text-center" id="contact">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100 mb-6">Let's build something.</h2>
<p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                I'm always open to discussing product design work or partnership opportunities for modern cross-platform apps.
            </p>
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-zinc-100 text-zinc-950 text-lg font-medium hover:bg-white hover:scale-105 transition-all mb-12" href="mailto:rupeshrajak9211@gmail.com">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                rupeshrajak9211@gmail.com
            </a>
<div className="flex flex-wrap justify-center gap-6">
<a className="flex items-center gap-2 text-base font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="tel:+919516687164">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +91-9516687164
                </a>
<a className="flex items-center gap-2 text-base font-medium text-zinc-400 hover:text-blue-400 transition-colors" href="https://linkedin.com" target="_blank">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                </a>
<a className="flex items-center gap-2 text-base font-medium text-zinc-400 hover:text-white transition-colors" href="https://github.com" target="_blank">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    GitHub
                </a>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-8 text-center bg-zinc-950 relative z-10">
<p className="text-base text-zinc-600 font-medium">
            © 2024 Rupesh Rajak. All rights reserved.
        </p>
</footer>

    </>
  );
}
