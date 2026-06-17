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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
925: '#101012',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.7s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Dark Mode Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
        });

        // Smooth reveal on scroll logic (Simple intersection observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            // Initial state for scroll animation
            // Note: We are doing this lightly to avoid complex CSS in head
            // Ideally, CSS classes handle this, but for this specific request:
            // Just ensuring content fades in nicely.
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b dark:border-gray-900 dark:bg-gray-950/80 backdrop-blur-md border-gray-900 bg-black/80">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-sm font-medium tracking-tight dark:text-white hover:opacity-70 transition-opacity text-gray-100" href="#">
                DVLPR.
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors hover:text-gray-100" href="#about">About</a>
<a className="text-xs font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors hover:text-gray-100" href="#stack">Stack</a>
<a className="text-xs font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors hover:text-gray-100" href="#projects">Projects</a>
<a className="text-xs font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors hover:text-gray-100" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<button className="p-2 rounded-full dark:hover:bg-gray-900 dark:text-gray-400 transition-colors hover:bg-gray-900 text-gray-400" id="theme-toggle">
<svg aria-hidden="true" className="iconify block dark:hidden iconify--lucide" data-icon="lucide:moon" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify hidden dark:block iconify--lucide" data-icon="lucide:sun" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</button>
<a className="hidden sm:flex items-center gap-2 text-xs font-medium dark:bg-white dark:text-gray-950 px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity bg-gray-100 text-black" href="https://github.com" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
<span>GitHub</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-grid">
<div className="absolute inset-0 glow-bg pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="max-w-3xl animate-slide-up">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border dark:border-gray-800 dark:bg-gray-900/50 mb-8 border-gray-800 bg-black">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-600"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium dark:text-gray-300 tracking-tight text-gray-400">Open for collaboration</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight dark:text-white mb-6 leading-[1.1] text-gray-100">
                    Crafting digital <br/>
<span className="dark:text-gray-600 text-gray-600">experiences with code.</span>
</h1>
<p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10 font-light">
                    Full-stack engineer focused on building accessible, pixel-perfect, and performant web applications with modern architecture.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="group flex items-center gap-2 px-5 py-2.5 dark:bg-white dark:text-gray-950 rounded-md text-sm font-medium dark:hover:bg-gray-200 transition-all bg-gray-100 text-black hover:bg-gray-200" href="#projects">
                        View Projects
                        <svg aria-hidden="true" className="iconify transform group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="px-5 py-2.5 border dark:border-gray-800 dark:text-gray-300 rounded-md text-sm font-medium dark:hover:border-gray-700 dark:hover:bg-gray-900 transition-all border-gray-800 text-gray-400 hover:border-gray-700 hover:bg-gray-950" href="#contact">
                        Contact Me
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 border-t dark:border-gray-900 border-gray-900" id="stack">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-sm font-medium dark:text-gray-500 uppercase tracking-widest mb-12 text-gray-600">Technologies</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<div className="group flex items-center gap-4 p-4 rounded-xl border dark:border-gray-900 dark:hover:border-gray-700 dark:bg-gray-925/50 transition-colors border-gray-900 hover:border-gray-700 bg-gray-950/50">
<div className="p-2 rounded-lg dark:bg-gray-800 shadow-sm group-hover:scale-110 transition-transform bg-black">
<svg aria-hidden="true" className="iconify dark:text-white text-gray-100 iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<div>
<h3 className="text-sm font-medium dark:text-gray-200 text-gray-100">Frontend</h3>
<p className="text-xs text-gray-500 mt-0.5">React, Next.js, Vue</p>
</div>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border dark:border-gray-900 dark:hover:border-gray-700 dark:bg-gray-925/50 transition-colors border-gray-900 hover:border-gray-700 bg-gray-950/50">
<div className="p-2 rounded-lg dark:bg-gray-800 shadow-sm group-hover:scale-110 transition-transform bg-black">
<svg aria-hidden="true" className="iconify dark:text-white text-gray-100 iconify--lucide" data-icon="lucide:database" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<div>
<h3 className="text-sm font-medium dark:text-gray-200 text-gray-100">Backend</h3>
<p className="text-xs text-gray-500 mt-0.5">Node, Postgres, Go</p>
</div>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border dark:border-gray-900 dark:hover:border-gray-700 dark:bg-gray-925/50 transition-colors border-gray-900 hover:border-gray-700 bg-gray-950/50">
<div className="p-2 rounded-lg dark:bg-gray-800 shadow-sm group-hover:scale-110 transition-transform bg-black">
<svg aria-hidden="true" className="iconify dark:text-white text-gray-100 iconify--lucide" data-icon="lucide:palette" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
</div>
<div>
<h3 className="text-sm font-medium dark:text-gray-200 text-gray-100">Design</h3>
<p className="text-xs text-gray-500 mt-0.5">Tailwind, Figma</p>
</div>
</div>
<div className="group flex items-center gap-4 p-4 rounded-xl border dark:border-gray-900 dark:hover:border-gray-700 dark:bg-gray-925/50 transition-colors border-gray-900 hover:border-gray-700 bg-gray-950/50">
<div className="p-2 rounded-lg dark:bg-gray-800 shadow-sm group-hover:scale-110 transition-transform bg-black">
<svg aria-hidden="true" className="iconify dark:text-white text-gray-100 iconify--lucide" data-icon="lucide:wrench" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-sm font-medium dark:text-gray-200 text-gray-100">Tools</h3>
<p className="text-xs text-gray-500 mt-0.5">Git, Docker, AWS</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight dark:text-white mb-6 text-gray-100">
                    Obsessed with design systems and clean architecture.
                </h2>
<div className="space-y-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
<p>
                        I've spent the last 5 years building scalable web applications. My philosophy is simple: software should be invisible, intuitive, and incredibly fast.
                    </p>
<p>
                        Currently working on open-source tooling for React ecosystems and helping startups scale their MVP to production-grade applications.
                    </p>
</div>
<div className="mt-8 flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs rounded-full border dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 border-gray-800 bg-gray-950 text-gray-400">System Architecture</span>
<span className="px-3 py-1 text-xs rounded-full border dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 border-gray-800 bg-gray-950 text-gray-400">UI/UX Design</span>
<span className="px-3 py-1 text-xs rounded-full border dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 border-gray-800 bg-gray-950 text-gray-400">Performance Optimization</span>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden dark:bg-gray-900 border dark:border-gray-800 relative group bg-gray-900 border-gray-800">
<div className="absolute inset-0 bg-gradient-to-tr to-transparent dark:from-gray-800/50 from-gray-800/50"></div>

<div className="absolute inset-4 border dark:border-gray-700/30 rounded-xl border-gray-700/30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-2 gap-4 opacity-50">
<div className="w-16 h-16 rounded-lg dark:bg-gray-800 animate-pulse bg-gray-700"></div>
<div className="w-16 h-16 rounded-lg dark:bg-gray-700 bg-gray-800"></div>
<div className="w-16 h-16 rounded-lg dark:bg-gray-700 bg-gray-800"></div>
<div className="w-16 h-16 rounded-lg dark:bg-gray-800 animate-pulse delay-75 bg-gray-700"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 dark:bg-gray-925/30 border-y dark:border-gray-900 bg-gray-950/50 border-gray-900" id="projects">
<div className="max-w-5xl mx-auto px-6">
<div className="flex items-center justify-between mb-16">
<h2 className="text-2xl font-medium tracking-tight dark:text-white text-gray-100">Selected Projects</h2>
<a className="text-xs font-medium text-gray-500 dark:hover:text-white transition-colors flex items-center gap-1 hover:text-gray-100" href="#">
                    View Archive <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative dark:bg-gray-900 rounded-xl border dark:border-gray-800 dark:hover:border-gray-700 overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-gray-900/20 bg-black border-gray-800 hover:border-gray-700">
<div className="aspect-[16/9] dark:bg-gray-800/50 relative overflow-hidden bg-gray-900">
<div className="absolute inset-0 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-gray-100/5"></div>

<div className="absolute inset-x-8 top-8 bottom-0 dark:bg-gray-950 rounded-t-lg shadow-sm border-x border-t dark:border-gray-800 opacity-90 group-hover:translate-y-[-4px] transition-transform duration-500 bg-black border-gray-800">
<div className="p-3 border-b dark:border-gray-900 flex gap-1.5 border-gray-900">
<div className="w-2 h-2 rounded-full dark:bg-gray-800 bg-gray-800"></div>
<div className="w-2 h-2 rounded-full dark:bg-gray-800 bg-gray-800"></div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium dark:text-white text-gray-100">Finance Dashboard</h3>
<p className="text-xs text-gray-500 mt-1">SaaS, Real-time Data</p>
</div>
<div className="flex gap-2">
<a className="p-2 rounded-md dark:hover:bg-gray-800 dark:hover:text-white transition-colors hover:bg-gray-900 text-gray-600 hover:text-gray-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="p-2 rounded-md dark:hover:bg-gray-800 dark:hover:text-white transition-colors hover:bg-gray-900 text-gray-600 hover:text-gray-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                            A comprehensive financial analytics platform providing real-time insights for small businesses using Next.js and Supabase.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-0.5 rounded border dark:border-gray-800 text-gray-500 border-gray-800">Next.js</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded border dark:border-gray-800 text-gray-500 border-gray-800">TypeScript</span>
</div>
</div>
</div>

<div className="group relative dark:bg-gray-900 rounded-xl border dark:border-gray-800 dark:hover:border-gray-700 overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-gray-900/20 bg-black border-gray-800 hover:border-gray-700">
<div className="aspect-[16/9] dark:bg-gray-800/50 relative overflow-hidden bg-gray-900">
<div className="absolute inset-0 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-gray-100/5"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg aria-hidden="true" className="iconify dark:text-gray-700 transform group-hover:scale-110 transition-transform duration-500 text-gray-700 iconify--lucide" data-icon="lucide:command" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium dark:text-white text-gray-100">Command Palette</h3>
<p className="text-xs text-gray-500 mt-1">Open Source Library</p>
</div>
<div className="flex gap-2">
<a className="p-2 rounded-md dark:hover:bg-gray-800 dark:hover:text-white transition-colors hover:bg-gray-900 text-gray-600 hover:text-gray-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
</div>
</div>
<p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                            A headless UI component for building accessible command palettes and modal interfaces. Used by 500+ developers.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-0.5 rounded border dark:border-gray-800 text-gray-500 border-gray-800">React</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded border dark:border-gray-800 text-gray-500 border-gray-800">NPM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium tracking-tight dark:text-white mb-2 text-gray-100">Get in touch</h2>
<p className="text-sm text-gray-500 dark:text-gray-400">Have a project in mind? Let's build something together.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium dark:text-gray-300 text-gray-300" htmlFor="name">Name</label>
<input className="w-full dark:bg-gray-900 border dark:border-gray-800 rounded-md px-3 py-2 text-sm dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-700 transition-all bg-black border-gray-800 text-gray-100" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium dark:text-gray-300 text-gray-300" htmlFor="email">Email</label>
<input className="w-full dark:bg-gray-900 border dark:border-gray-800 rounded-md px-3 py-2 text-sm dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-700 transition-all bg-black border-gray-800 text-gray-100" id="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium dark:text-gray-300 text-gray-300" htmlFor="message">Message</label>
<textarea className="w-full dark:bg-gray-900 border dark:border-gray-800 rounded-md px-3 py-2 text-sm dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-700 transition-all resize-none bg-black border-gray-800 text-gray-100" id="message" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full flex justify-center items-center gap-2 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-950 text-sm font-medium py-2.5 rounded-md transition-colors bg-gray-100 hover:bg-gray-200 text-black" type="button">
                        Send Message
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>
</section>

<footer className="py-12 border-t dark:border-gray-900 border-gray-900">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full dark:bg-gray-700 bg-gray-700"></span>
<span className="text-xs text-gray-500 dark:text-gray-500">© 2024 Developer Portfolio. Built with Tailwind.</span>
</div>
<div className="flex items-center gap-6">
<a className="dark:hover:text-white transition-colors text-gray-600 hover:text-gray-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="dark:hover:text-white transition-colors text-gray-600 hover:text-gray-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="dark:hover:text-white transition-colors text-gray-600 hover:text-gray-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dribbble" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></g></svg>
</a>
</div>
</div>
</footer>



    </>
  );
}
