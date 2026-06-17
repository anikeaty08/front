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
extend: {
fontFamily: {
sans: ['Poppins', 'sans-serif'],
},
colors: {
accent: '#00ff9d',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Theme Toggle Logic
        const toggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        toggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            
            // Interaction effect
            toggleBtn.style.transform = 'scale(0.95)';
            setTimeout(() => toggleBtn.style.transform = 'scale(1)', 150);

            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once visible
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
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
      

<header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-5 py-5 md:px-10">
<div className="flex justify-between items-center max-w-[1400px] mx-auto">
<a className="text-xl font-bold tracking-tighter hover:scale-105 transition-transform duration-300" href="#">D.A.</a>
<button className="border border-white/30 px-4 py-2 rounded-[5px] text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95 flex items-center gap-2 backdrop-blur-sm" id="theme-toggle">
<span>Light/Dark</span>
<i className="w-4 h-4" data-lucide="sun-moon"></i>
</button>
</div>
</header>
<main className="w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-20">

<section className="fade-in-section min-h-[60vh] flex flex-col justify-center mb-24">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-none mb-8 break-words uppercase">
                Devamruth
            </h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-10">
<div className="md:col-span-8 lg:col-span-6">
<p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light mb-8">
                        UI/UX Designer with experience designing user-centric interfaces, crafting wireframes, 
                        and collaborating with cross-functional teams. Worked on impactful projects for brands 
                        like L’Oréal, Nestlé, ACCOR, Al Salam Bank, Ali Bin Ali, and Roya Hotels. Focused on 
                        clean, minimal and futuristic design philosophies.
                    </p>
<div className="flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff9d]"></span>
</span>
<span className="text-xs uppercase tracking-widest font-medium text-gray-500 dark:text-gray-400">Available for work</span>
</div>
</div>
</div>
</section>

<section className="fade-in-section mb-32 border-t border-gray-200 dark:border-gray-800 pt-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-2">
<span className="text-xs uppercase tracking-widest text-gray-400">Socials:</span>
</div>
<div className="md:col-span-10 flex flex-wrap gap-8 md:gap-12">
<a className="hover-link text-sm font-medium uppercase" href="#">Instagram</a>
<a className="hover-link text-sm font-medium uppercase" href="#">Behance</a>
<a className="hover-link text-sm font-medium uppercase" href="#">Dribbble</a>
<a className="hover-link text-sm font-medium uppercase" href="#">LinkedIn</a>
</div>
</div>
</section>

<section className="fade-in-section mb-32">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-12">Featured Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="hover-card group cursor-pointer border border-gray-200 dark:border-gray-800 rounded-[5px] p-4 hover:shadow-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black overflow-hidden relative">
<div className="absolute inset-0 bg-white/5 backdrop-blur-[0px] group-hover:backdrop-blur-[2px] transition-all duration-300 z-0"></div>
<div className="relative z-10">
<div className="w-full aspect-[4/3] overflow-hidden rounded-[5px] mb-4 bg-gray-100 dark:bg-gray-900">
<img alt="Futuristic Dashboard UI" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale" src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&amp;fit=crop&amp;w=900&amp;q=60"/>
</div>
<div className="flex justify-between items-end border-t border-gray-200 dark:border-gray-800 group-hover:border-gray-600 pt-4">
<div>
<h3 className="text-lg font-medium tracking-tight mb-1">Futuristic Dashboard UI</h3>
<p className="text-xs opacity-60 font-light">2024 — UI/UX Design</p>
</div>
<i className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>

<article className="hover-card group cursor-pointer border border-gray-200 dark:border-gray-800 rounded-[5px] p-4 hover:shadow-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black overflow-hidden relative">
<div className="absolute inset-0 bg-white/5 backdrop-blur-[0px] group-hover:backdrop-blur-[2px] transition-all duration-300 z-0"></div>
<div className="relative z-10">
<div className="w-full aspect-[4/3] overflow-hidden rounded-[5px] mb-4 bg-gray-100 dark:bg-gray-900">
<img alt="Mobile Experience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale" src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&amp;fit=crop&amp;w=900&amp;q=60"/>
</div>
<div className="flex justify-between items-end border-t border-gray-200 dark:border-gray-800 group-hover:border-gray-600 pt-4">
<div>
<h3 className="text-lg font-medium tracking-tight mb-1">Mobile Experience Redesign</h3>
<p className="text-xs opacity-60 font-light">2024 — Mobile App</p>
</div>
<i className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>

<article className="hover-card group cursor-pointer border border-gray-200 dark:border-gray-800 rounded-[5px] p-4 hover:shadow-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black overflow-hidden relative">
<div className="absolute inset-0 bg-white/5 backdrop-blur-[0px] group-hover:backdrop-blur-[2px] transition-all duration-300 z-0"></div>
<div className="relative z-10">
<div className="w-full aspect-[4/3] overflow-hidden rounded-[5px] mb-4 bg-gray-100 dark:bg-gray-900">
<img alt="Web Concept" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale" src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&amp;fit=crop&amp;w=900&amp;q=60"/>
</div>
<div className="flex justify-between items-end border-t border-gray-200 dark:border-gray-800 group-hover:border-gray-600 pt-4">
<div>
<h3 className="text-lg font-medium tracking-tight mb-1">Minimalist Web Concept</h3>
<p className="text-xs opacity-60 font-light">2023 — Web Design</p>
</div>
<i className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>
</div>
</section>

<section className="fade-in-section mb-32">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-12">Experience</h2>
<div className="space-y-6">

<div className="group border border-gray-200 dark:border-gray-800 rounded-[5px] p-6 md:p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
<div>
<h3 className="text-xl font-medium tracking-tight">Junior UI/UX Designer</h3>
<p className="text-sm opacity-70 mt-1">Exponential Digital Solutions (10xDS)</p>
</div>
<span className="text-xs font-mono border border-current rounded-[5px] px-2 py-1 mt-2 md:mt-0 w-fit">Sep 2023 – Present</span>
</div>
<ul className="list-none space-y-2 mt-4 text-sm font-light opacity-80 pl-2 border-l border-current">
<li>— Designed intuitive interfaces for complex systems</li>
<li>— Conducted user research to validate design decisions</li>
<li>— Optimized workflows for better user retention</li>
<li>— Ensured brand consistency across all digital touchpoints</li>
</ul>
</div>

<div className="group border border-gray-200 dark:border-gray-800 rounded-[5px] p-6 md:p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
<div>
<h3 className="text-xl font-medium tracking-tight">UI/UX Intern</h3>
<p className="text-sm opacity-70 mt-1">Exponential Digital Solutions (10xDS)</p>
</div>
<span className="text-xs font-mono border border-current rounded-[5px] px-2 py-1 mt-2 md:mt-0 w-fit">Feb 2023 – Aug 2023</span>
</div>
<ul className="list-none space-y-2 mt-4 text-sm font-light opacity-80 pl-2 border-l border-current">
<li>— Wireframing and prototyping for client projects</li>
<li>— Collaborated with developers for handoff</li>
<li>— Assisted in building responsive web experiences</li>
</ul>
</div>

<div className="group border border-gray-200 dark:border-gray-800 rounded-[5px] p-6 md:p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
<div>
<h3 className="text-xl font-medium tracking-tight">Frontend Developer</h3>
<p className="text-sm opacity-70 mt-1">Ambrezent Technologies Pvt Ltd</p>
</div>
<span className="text-xs font-mono border border-current rounded-[5px] px-2 py-1 mt-2 md:mt-0 w-fit">Jun 2022 – Feb 2023</span>
</div>
<ul className="list-none space-y-2 mt-4 text-sm font-light opacity-80 pl-2 border-l border-current">
<li>— Responsive development using modern frameworks</li>
<li>— API integration and state management</li>
<li>— Creating reusable UI components</li>
</ul>
</div>
</div>
</section>

<section className="fade-in-section mb-32">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-12">Education</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="border border-gray-200 dark:border-gray-800 rounded-[5px] p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300">
<div className="mb-4">
<i className="w-6 h-6 text-gray-400" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">B.Tech Computer Science</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">IES College of Engineering</p>
<p className="text-xs text-gray-400 mt-1 font-mono">2018–2022</p>
</div>
<div className="border border-gray-200 dark:border-gray-800 rounded-[5px] p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300">
<div className="mb-4">
<i className="w-6 h-6 text-gray-400" data-lucide="book-open"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">Higher Secondary</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">St. Thomas HSS Vallachira</p>
<p className="text-xs text-gray-400 mt-1 font-mono">2016–2018</p>
</div>
<div className="border border-gray-200 dark:border-gray-800 rounded-[5px] p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300">
<div className="mb-4">
<i className="w-6 h-6 text-gray-400" data-lucide="school"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">High School</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">St. Xavier’s HS Chevoor</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-gray-200 dark:border-gray-800 py-10">
<div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light">© 2025 DEVAMRUTH — UI/UX Designer</p>
<div className="flex items-center gap-6">
<a className="text-xs uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors" href="#">Back to Top</a>
</div>
</div>
</footer>



    </>
  );
}
