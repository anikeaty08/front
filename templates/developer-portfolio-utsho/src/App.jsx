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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('transform', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
            observer.observe(el);
        });

        // Live Time
        function updateTime() {
            const now = new Date();
            document.getElementById('time').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        }
        setInterval(updateTime, 1000);
        updateTime();
    
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
      

<div className="fixed inset-0 pointer-events-none bg-grid z-0"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto cursor-pointer group">
<span className="text-sm font-medium tracking-tighter text-neutral-300 group-hover:text-white transition-colors duration-300">Rakibul Islam</span>
</div>
<div className="pointer-events-auto flex gap-6 glass-panel px-6 py-2 rounded-full">
<a className="text-xs text-neutral-400 hover:text-white transition-colors tracking-tight" href="#work">Work</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors tracking-tight" href="#education">Education</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors tracking-tight" href="#stack">Stack</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors tracking-tight" href="#about">About</a>
</div>
<div className="pointer-events-auto">
<a className="text-xs text-neutral-400 hover:text-white transition-colors tracking-tight flex items-center gap-1" href="mailto:hello@rakibul.dev">
                Contact
                <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
</nav>

<main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-32">

<section className="min-h-[70vh] flex flex-col justify-center items-start">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 animate-fade-up">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-neutral-400 font-medium tracking-tight">Open to new opportunities</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] text-white animate-fade-up delay-100">
                    Full-stack <br/>
<span className="text-neutral-500">Engineering.</span>
</h1>
<p className="max-w-xl text-base md:text-lg text-neutral-400 font-light leading-relaxed animate-fade-up delay-200">
                    I'm Rakibul Islam, a full-stack engineer with 2 years of experience crafting scalable web applications with meticulous attention to performance and architecture. Specializing in the React ecosystem and Go.
                </p>
<div className="flex flex-wrap gap-3 pt-4 animate-fade-up delay-300">
<button className="btn-hover px-6 py-3 bg-white text-black rounded-full text-sm font-medium tracking-tight hover:bg-neutral-200">
                        View Projects
                    </button>
<button className="btn-hover px-6 py-3 glass-panel text-neutral-300 rounded-full text-sm font-medium tracking-tight hover:bg-neutral-800/50 hover:text-white border border-neutral-800 transition-colors">
                        Github
                    </button>
</div>
</div>
</section>

<section className="animate-on-scroll opacity-0 transition-opacity duration-1000" id="stack">
<div className="flex items-center gap-2 mb-8">
<i className="text-neutral-500 w-4 h-4" data-lucide="layers"></i>
<h2 className="text-sm font-medium text-neutral-400 tracking-tight uppercase">Technologies</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group glass-panel p-6 rounded-2xl hover:bg-neutral-900 transition-all duration-500 border border-neutral-900 hover:border-neutral-800">
<i className="text-neutral-400 group-hover:text-yellow-200 transition-colors mb-4 w-8 h-8" data-lucide="code-2" strokeWidth="1.5"></i>
<h3 className="text-sm font-medium text-white mb-1">JavaScript</h3>
<p className="text-xs text-neutral-500">ES6+ &amp; TypeScript</p>
</div>

<div className="group glass-panel p-6 rounded-2xl hover:bg-neutral-900 transition-all duration-500 border border-neutral-900 hover:border-neutral-800">
<i className="text-neutral-400 group-hover:text-cyan-200 transition-colors mb-4 w-8 h-8" data-lucide="atom" strokeWidth="1.5"></i>
<h3 className="text-sm font-medium text-white mb-1">React &amp; Next.js</h3>
<p className="text-xs text-neutral-500">SSR &amp; Server Components</p>
</div>

<div className="group glass-panel p-6 rounded-2xl hover:bg-neutral-900 transition-all duration-500 border border-neutral-900 hover:border-neutral-800">
<i className="text-neutral-400 group-hover:text-green-200 transition-colors mb-4 w-8 h-8" data-lucide="server" strokeWidth="1.5"></i>
<h3 className="text-sm font-medium text-white mb-1">Node &amp; Express</h3>
<p className="text-xs text-neutral-500">Scalable APIs</p>
</div>

<div className="group glass-panel p-6 rounded-2xl hover:bg-neutral-900 transition-all duration-500 border border-neutral-900 hover:border-neutral-800">
<i className="text-neutral-400 group-hover:text-blue-200 transition-colors mb-4 w-8 h-8" data-lucide="zap" strokeWidth="1.5"></i>
<h3 className="text-sm font-medium text-white mb-1">Go</h3>
<p className="text-xs text-neutral-500">High Performance</p>
</div>

<div className="col-span-2 group glass-panel p-6 rounded-2xl hover:bg-neutral-900 transition-all duration-500 border border-neutral-900 hover:border-neutral-800 flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-white mb-1">Data persistence</h3>
<p className="text-xs text-neutral-500">MongoDB, MySQL, Firebase, Postgres</p>
</div>
<i className="text-neutral-400 group-hover:text-purple-200 transition-colors w-8 h-8" data-lucide="database" strokeWidth="1.5"></i>
</div>

<div className="col-span-2 group glass-panel p-6 rounded-2xl hover:bg-neutral-900 transition-all duration-500 border border-neutral-900 hover:border-neutral-800 flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-white mb-1">Design Engineering</h3>
<p className="text-xs text-neutral-500">Tailwind CSS, Framer Motion</p>
</div>
<i className="text-neutral-400 group-hover:text-pink-200 transition-colors w-8 h-8" data-lucide="palette" strokeWidth="1.5"></i>
</div>
</div>
</section>

<section className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-200" id="work">
<div className="flex justify-between items-end mb-8">
<div className="flex items-center gap-2">
<i className="text-neutral-500 w-4 h-4" data-lucide="folder-open"></i>
<h2 className="text-sm font-medium text-neutral-400 tracking-tight uppercase">Selected Work</h2>
</div>
<span className="text-xs text-neutral-600">01 — 03</span>
</div>
<div className="space-y-12">

<article className="group relative grid md:grid-cols-2 gap-8 items-center border-t border-neutral-900 pt-8 transition-all hover:border-neutral-800">
<div className="order-2 md:order-1 space-y-4">
<div className="flex items-center gap-3">
<h3 className="text-2xl font-medium text-white tracking-tight group-hover:text-neutral-200 transition-colors">Vortex SaaS</h3>
<a className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-400 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                            A comprehensive dashboard for monitoring cloud infrastructure metrics in real-time. Built with Next.js and Go for high-throughput data processing.
                        </p>
<ul className="flex gap-3 pt-2">
<li className="text-xs text-neutral-500 border border-neutral-800 rounded-md px-2 py-0.5">Next.js</li>
<li className="text-xs text-neutral-500 border border-neutral-800 rounded-md px-2 py-0.5">Go</li>
<li className="text-xs text-neutral-500 border border-neutral-800 rounded-md px-2 py-0.5">Tailwind</li>
</ul>
</div>
<div className="order-1 md:order-2 relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/20 to-neutral-800/0"></div>
<div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="w-3/4 h-3/4 border border-neutral-800 rounded flex flex-col p-4 bg-black/40 backdrop-blur-sm">
<div className="w-full h-2 bg-neutral-800 rounded mb-2"></div>
<div className="w-2/3 h-2 bg-neutral-800 rounded mb-8"></div>
<div className="flex-1 grid grid-cols-3 gap-2">
<div className="bg-neutral-800/50 rounded"></div>
<div className="bg-neutral-800/50 rounded"></div>
<div className="bg-neutral-800/50 rounded"></div>
</div>
</div>
</div>
</div>
</article>

<article className="group relative grid md:grid-cols-2 gap-8 items-center border-t border-neutral-900 pt-8 transition-all hover:border-neutral-800">
<div className="order-2 md:order-1 space-y-4">
<div className="flex items-center gap-3">
<h3 className="text-2xl font-medium text-white tracking-tight group-hover:text-neutral-200 transition-colors">Lumina Commerce</h3>
<a className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-400 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                            Headless e-commerce solution using React and Node.js. Features complex state management, custom cart logic, and Stripe integration.
                        </p>
<ul className="flex gap-3 pt-2">
<li className="text-xs text-neutral-500 border border-neutral-800 rounded-md px-2 py-0.5">React</li>
<li className="text-xs text-neutral-500 border border-neutral-800 rounded-md px-2 py-0.5">Node.js</li>
<li className="text-xs text-neutral-500 border border-neutral-800 rounded-md px-2 py-0.5">MongoDB</li>
</ul>
</div>
<div className="order-1 md:order-2 relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-bl from-neutral-800/20 to-neutral-800/0"></div>
<div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="w-1/2 h-1/2 rounded-full border border-neutral-700/50 flex items-center justify-center">
<div className="w-2/3 h-2/3 rounded-full border border-neutral-600/50"></div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-200 border-t border-neutral-900 pt-16" id="education">
<div className="grid md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-5 lg:col-span-4 space-y-6 sticky top-32">
<h2 className="text-5xl font-semibold tracking-tighter text-white leading-[0.95]">
                        Educational <br/>
<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Journey</span>
</h2>
<p className="text-neutral-400 text-sm leading-relaxed">
                        A snapshot of my academic background and the path that shaped my skills.
                    </p>
</div>

<div className="md:col-span-7 lg:col-span-8 flex flex-col gap-4">

<div className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-300 rounded-2xl p-6">
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="shrink-0 h-12 w-12 rounded-full bg-blue-950/50 border border-blue-900/50 flex items-center justify-center">
<i className="text-blue-400 w-6 h-6" data-lucide="graduation-cap"></i>
</div>
<div className="flex-1 w-full space-y-1">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
<h3 className="text-base font-medium text-white tracking-tight">Jahangirnagar University</h3>
<span className="text-xs text-neutral-500 font-mono">Jan 2026 - Jan 2027</span>
</div>
<p className="text-xs text-neutral-400">Master of Science - M.Sc.</p>
<p className="text-sm font-semibold text-neutral-200 mt-2">Computer Science</p>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-300 rounded-2xl p-6">
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="shrink-0 h-12 w-12 rounded-full bg-emerald-950/50 border border-emerald-900/50 flex items-center justify-center">
<i className="text-emerald-400 w-6 h-6" data-lucide="book-open"></i>
</div>
<div className="flex-1 w-full space-y-1">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
<h3 className="text-base font-medium text-white tracking-tight">Bangladesh University of Business &amp; Technology - BUBT</h3>
<span className="text-xs text-neutral-500 font-mono">Feb 2020 - Dec 2023</span>
</div>
<p className="text-xs text-neutral-400">Bachelor of Science - B.Sc.</p>
<p className="text-sm font-semibold text-neutral-200 mt-2">Computer Science and Engineering (CSE)</p>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-300 rounded-2xl p-6">
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="shrink-0 h-12 w-12 rounded-full bg-teal-950/50 border border-teal-900/50 flex items-center justify-center">
<i className="text-teal-400 w-6 h-6" data-lucide="award"></i>
</div>
<div className="flex-1 w-full space-y-1">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
<h3 className="text-base font-medium text-white tracking-tight">Bogura Cantonmnent Public School and College</h3>
<span className="text-xs text-neutral-500 font-mono">Apr 2017 - Feb 2019</span>
</div>
<p className="text-xs text-neutral-400">Higher Secondary Certificate (HSC)</p>
<p className="text-sm font-semibold text-neutral-200 mt-2">Science</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-200 grid md:grid-cols-2 gap-12 border-t border-neutral-900 pt-16" id="about">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Let's build the future.</h2>
<p className="text-sm text-neutral-400 leading-relaxed mb-8">
                    I believe in software that is not only functional but also intuitive and beautiful. My approach combines technical depth in backend systems (Go, Node) with a passion for frontend fluidity (React, Tailwind).
                </p>
<div className="flex flex-col gap-4">
<a className="group flex items-center justify-between w-full max-w-xs p-4 glass-panel rounded-lg hover:bg-neutral-900 transition-colors border border-neutral-800" href="mailto:hello@rakibul.dev">
<div className="flex items-center gap-3">
<div className="p-2 bg-neutral-800 rounded-md group-hover:bg-neutral-700 transition-colors">
<i className="text-white w-5 h-5" data-lucide="mail"></i>
</div>
<span className="text-sm text-neutral-200">Email Me</span>
</div>
<i className="text-neutral-500 group-hover:translate-x-1 transition-transform w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="group flex items-center justify-between w-full max-w-xs p-4 glass-panel rounded-lg hover:bg-neutral-900 transition-colors border border-neutral-800" href="#">
<div className="flex items-center gap-3">
<div className="p-2 bg-neutral-800 rounded-md group-hover:bg-neutral-700 transition-colors">
<i className="text-white w-5 h-5" data-lucide="calendar"></i>
</div>
<span className="text-sm text-neutral-200">Schedule Call</span>
</div>
<i className="text-neutral-500 group-hover:translate-x-1 transition-transform w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="bg-neutral-900/30 rounded-2xl p-8 border border-neutral-900 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-xs text-neutral-500 uppercase tracking-widest">Status</span>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
</div>
<p className="text-xl font-medium text-neutral-200 tracking-tight">Currently working on a SaaS platform for logistics. Available for freelance projects starting next month.</p>
</div>
<div className="mt-8 pt-8 border-t border-neutral-800">
<p className="text-xs text-neutral-600">Local Time: <span className="text-neutral-400" id="time">00:00</span></p>
</div>
</div>
</section>
<footer className="flex justify-between items-center py-8 border-t border-neutral-900 mt-12">
<span className="text-xs text-neutral-600">© 2024 Rakibul Islam.</span>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</footer>
</main>


    </>
  );
}
