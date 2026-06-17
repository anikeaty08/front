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
      

<header className="fixed top-0 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md z-50">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-semibold tracking-tighter text-zinc-100 hover:text-zinc-300 transition-colors" href="#">
                JD.
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-100 transition-colors" href="#skills">Skills</a>
<a className="hover:text-zinc-100 transition-colors" href="#projects">Projects</a>
<a className="hover:text-zinc-100 transition-colors" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 h-9 px-4 py-2" href="#contact">
                Say Hello
            </a>

<button className="md:hidden text-zinc-400 hover:text-zinc-100">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-24 pb-12">

<section className="max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start relative">

<div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                10th Grade Student &amp; Developer
            </div>
<h1 className="md:text-7xl bg-clip-text leading-tight text-5xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-zinc-100 to-zinc-500 max-w-3xl mb-6">
                Building the future, <br/> one line of code at a time.
            </h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-zinc-400 max-w-2xl mb-10">Hi, I'm Ayush. I'm a 16-year-old self-taught programmer passionate about creating clean, functional, and well-designed digital experiences. Currently balancing school with my journey into software development.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center transition-colors hover:bg-zinc-200 text-sm font-medium text-zinc-900 bg-zinc-100 h-11 rounded-md pr-8 pl-8" href="#projects">
                    View My Work
                </a>
<a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-zinc-800 bg-transparent hover:bg-zinc-900 text-zinc-300 h-11 px-8 gap-2" href="https://github.com" target="_blank">
<iconify-icon height="20" icon="solar:github-linear" width="20"></iconify-icon>
                    GitHub Profile
                </a>
</div>
</section>

<div className="max-w-5xl mx-auto px-6"><div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div></div>

<section className="max-w-5xl mx-auto px-6 py-24" id="skills">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-100 mb-4">What I Know</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
                        I am constantly learning and exploring new technologies. These are the tools and languages I am currently most comfortable with, focusing on building a strong foundation.
                    </p>
</div>
<div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">

<div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 text-zinc-300">
<iconify-icon height="22" icon="solar:code-square-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">JavaScript</p>
<p className="text-xs text-zinc-500">Logic &amp; Logic</p>
</div>
</div>

<div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 text-zinc-300">
<iconify-icon height="22" icon="solar:document-text-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">HTML5</p>
<p className="text-xs text-zinc-500">Structure</p>
</div>
</div>

<div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 text-zinc-300">
<iconify-icon height="22" icon="solar:pen-new-round-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">CSS3</p>
<p className="text-xs text-zinc-500">Styling</p>
</div>
</div>

<div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 text-zinc-300">
<iconify-icon height="22" icon="solar:programming-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">Python</p>
<p className="text-xs text-zinc-500">Basics</p>
</div>
</div>

<div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 text-zinc-300">
<iconify-icon height="22" icon="solar:server-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">Git</p>
<p className="text-xs text-zinc-500">Version Control</p>
</div>
</div>

<div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 text-zinc-300">
<iconify-icon height="22" icon="solar:monitor-smartphone-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">Design</p>
<p className="text-xs text-zinc-500">UI/UX Basics</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24" id="projects">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-100 mb-4">Featured Projects</h2>
<p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                    A collection of things I've built to practice my skills. Ranging from simple utilities to conceptual web applications.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group flex flex-col justify-between p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/80 text-zinc-100">
<iconify-icon height="24" icon="solar:calculator-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-400">Web App</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-2">Smart Calculator</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            A fully functional calculator built with vanilla JavaScript. Handles complex operations, maintains history, and features a clean, responsive interface.
                        </p>
</div>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800/50">
<a className="text-sm font-medium text-zinc-300 hover:text-zinc-100 flex items-center gap-1 transition-colors" href="#">
                            Live Demo <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors" href="#">
                            Source Code
                        </a>
</div>
</div>

<div className="group flex flex-col justify-between p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300">
<div className="">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/80 text-zinc-100">
<iconify-icon height="24" icon="solar:cloud-sun-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-400">API Integration</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-2">Weather Dashboard</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            A weather application fetching real-time data from a public API. Displays current conditions, forecasts, and changes background based on time of day.
                        </p>
</div>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800/50">
<a className="text-sm font-medium text-zinc-300 hover:text-zinc-100 flex items-center gap-1 transition-colors" href="#">
                            Live Demo <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors" href="#">
                            Source Code
                        </a>
</div>
</div>

<div className="group flex flex-col justify-between p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300 md:col-span-2">
<div className="flex flex-col md:flex-row gap-8">
<div className="md:w-1/2">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/80 text-zinc-100">
<iconify-icon height="24" icon="solar:checklist-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-400">Local Storage</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-2">Taskmaster UI</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                A clean, minimalist task management interface. Allows users to create, edit, delete, and categorize tasks. Data is persisted using browser LocalStorage to ensure no tasks are lost.
                            </p>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-300 hover:text-zinc-100 flex items-center gap-1 transition-colors" href="#">
                                    Live Demo <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors" href="#">
                                    Source Code
                                </a>
</div>
</div>
<div className="md:w-1/2 flex items-center justify-center bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4 relative overflow-hidden">

<div className="w-full h-40 bg-zinc-900 border border-zinc-800 rounded-lg flex flex-col p-4 gap-3 opacity-80">
<div className="h-4 w-1/3 bg-zinc-800 rounded"></div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded border border-zinc-600"></div>
<div className="h-3 w-2/3 bg-zinc-700 rounded"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded border border-zinc-600 bg-zinc-600"></div>
<div className="h-3 w-1/2 bg-zinc-800 rounded line-through"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded border border-zinc-600"></div>
<div className="h-3 w-3/4 bg-zinc-700 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 text-center" id="contact">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-4">Let's connect</h2>
<p className="text-sm md:text-base text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Whether you have a question, want to collaborate on a small project, or just want to say hi, I'll try my best to get back to you!
            </p>
<a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-zinc-100 text-zinc-900 hover:bg-zinc-200 h-11 px-8 gap-2" href="mailto:hello@example.com">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
                Send an Email
            </a>
</section>
</main>

<footer className="border-t border-zinc-800/50 py-8 text-center bg-zinc-950">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500">
                © 2024 JD. Built with passion.
            </p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">
<iconify-icon height="20" icon="solar:github-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-zinc-300 transition-colors" href="#">
<iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-zinc-300 transition-colors" href="#">
<iconify-icon height="20" icon="solar:figma-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
