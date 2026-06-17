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



        // Navbar blur effect optimization
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('border-white/10');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('border-white/10');
                navbar.classList.add('border-transparent');
            }
        });

        // Intersection Observer for Reveal Animations
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
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
      
<div className="grain"></div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tight text-lg group flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
<span className="font-bold text-sm">Z</span>
</span>
<span className="opacity-90 group-hover:opacity-100 transition-opacity">ZDKIEL</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#projects">Work</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95" href="#contact">
                Let's Talk
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>

<button aria-label="Menu" className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="relative z-10">

<section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 relative overflow-hidden">
<div className="glow-bg absolute w-full h-full top-0 left-0 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Available for new projects
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up delay-100">
                    Architecting <br/>
<span className="text-gradient-primary">Digital Clarity.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                    I build accessible, pixel-perfect, and performant web experiences using modern architecture. Transforming complex problems into minimal, elegant solutions.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
<a className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto text-center shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#projects">
                        View Selected Work
                    </a>
<a className="px-8 py-3.5 rounded-full glass-card text-white font-medium text-sm hover:bg-white/10 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2" href="https://github.com/zdkiel" target="_blank">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
                        GitHub Profile
                    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-white" icon="lucide:chevrons-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-black/20" id="stack">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center reveal">
<span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Technologies</span>
</div>
<div className="marquee-container relative overflow-hidden w-full">
<div className="marquee-content flex gap-12 w-max items-center">

<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:code-2" width="24"></iconify-icon> <span className="text-lg font-medium">React</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:box" width="24"></iconify-icon> <span className="text-lg font-medium">Next.js</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:wind" width="24"></iconify-icon> <span className="text-lg font-medium">Tailwind CSS</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:database" width="24"></iconify-icon> <span className="text-lg font-medium">PostgreSQL</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:server" width="24"></iconify-icon> <span className="text-lg font-medium">Node.js</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:cpu" width="24"></iconify-icon> <span className="text-lg font-medium">TypeScript</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:layers" width="24"></iconify-icon> <span className="text-lg font-medium">Framer Motion</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:globe" width="24"></iconify-icon> <span className="text-lg font-medium">WebGL</span></div>

<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:code-2" width="24"></iconify-icon> <span className="text-lg font-medium">React</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:box" width="24"></iconify-icon> <span className="text-lg font-medium">Next.js</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:wind" width="24"></iconify-icon> <span className="text-lg font-medium">Tailwind CSS</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:database" width="24"></iconify-icon> <span className="text-lg font-medium">PostgreSQL</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:server" width="24"></iconify-icon> <span className="text-lg font-medium">Node.js</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:cpu" width="24"></iconify-icon> <span className="text-lg font-medium">TypeScript</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:layers" width="24"></iconify-icon> <span className="text-lg font-medium">Framer Motion</span></div>
<div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="lucide:globe" width="24"></iconify-icon> <span className="text-lg font-medium">WebGL</span></div>
</div>
</div>
</section>

<section className="py-32 px-6" id="about">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Crafting intelligence.</h2>
<p className="text-lg text-neutral-400 max-w-2xl">A deeper look into my workflow, philosophy, and what drives my development process.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

<div className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-neutral-700 transition-colors reveal">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="lucide:user" width="32"></iconify-icon>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-white" icon="lucide:arrow-up-right" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">The Developer</h3>
<p className="text-neutral-400 leading-relaxed">
                                I'm ZDKiel, a developer obsessed with details. I bridge the gap between design and engineering, ensuring that every interaction is smooth and every line of code serves a purpose.
                            </p>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:border-neutral-700 transition-colors reveal delay-100">
<div className="relative w-full h-full flex flex-col items-center justify-center">
<div className="text-6xl font-semibold text-white mb-2 tracking-tighter">3+</div>
<div className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Years Experience</div>
<div className="mt-6 flex -space-x-3 overflow-hidden">
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] bg-neutral-800 flex items-center justify-center text-[10px] text-white">TS</div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] bg-neutral-700 flex items-center justify-center text-[10px] text-white">JS</div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] bg-neutral-600 flex items-center justify-center text-[10px] text-white">PY</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-neutral-700 transition-colors reveal">
<iconify-icon className="text-white" icon="lucide:map-pin" width="32"></iconify-icon>
<div>
<h3 className="text-xl font-semibold text-white">Global Reach</h3>
<p className="text-neutral-400 text-sm mt-1">Remote Capable &amp; Available Worldwide</p>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-neutral-700 transition-colors reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<iconify-icon className="text-white" icon="lucide:zap" width="32"></iconify-icon>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Performance First</h3>
<p className="text-neutral-400">
                                    A pretty site that loads slowly is a failed product. I prioritize Core Web Vitals, accessibility standards, and SEO optimization in every build.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-900/20 border-y border-white/5" id="projects">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Selected Work.</h2>
<p className="text-lg text-neutral-400">Digital products built for the modern web.</p>
</div>
<a className="text-white hover:text-indigo-400 transition-colors text-sm font-medium flex items-center gap-2" href="https://github.com/zdkiel">
                        View all repositories <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="space-y-20">

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
<div className="relative overflow-hidden rounded-2xl bg-neutral-900 aspect-video border border-white/5 group-hover:border-white/20 transition-all">

<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-white" icon="lucide:layout-template" width="64"></iconify-icon>
</div>
</div>
<div>
<span className="text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2 block">Fintech</span>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">Nova Dashboard</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                                A high-performance financial analytics dashboard featuring real-time data visualization via WebSockets, dark mode toggling, and complex data grid manipulation.
                            </p>
<ul className="flex flex-wrap gap-2 mb-8">
<li className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">Next.js</li>
<li className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">TypeScript</li>
<li className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">Tailwind</li>
</ul>
<a className="inline-flex items-center gap-2 text-white font-medium text-sm hover:underline underline-offset-4" href="#">
                                Case Study <iconify-icon icon="lucide:external-link" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
<div className="md:order-2 relative overflow-hidden rounded-2xl bg-neutral-900 aspect-video border border-white/5 group-hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/20 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-white" icon="lucide:shopping-bag" width="64"></iconify-icon>
</div>
</div>
<div className="md:order-1">
<span className="text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2 block">E-Commerce</span>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">Lumina Market</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                                A headless e-commerce solution built for speed. Integrated with Stripe for payments and a custom CMS for inventory management. 
                            </p>
<ul className="flex flex-wrap gap-2 mb-8">
<li className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">React</li>
<li className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">Node.js</li>
<li className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">Stripe</li>
</ul>
<a className="inline-flex items-center gap-2 text-white font-medium text-sm hover:underline underline-offset-4" href="#">
                                Live Demo <iconify-icon icon="lucide:external-link" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="contact">
<div className="max-w-3xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Let's build something <span className="text-neutral-500">exceptional.</span></h2>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
                    Currently open for freelance opportunities and collaborations. Have a project in mind? Let's discuss the details.
                </p>
<form className="text-left max-w-md mx-auto space-y-4 mb-12">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-transparent" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-indigo-500 cursor-text" htmlFor="email">Email Address</label>
</div>
<div className="relative group">
<textarea className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-transparent resize-none h-12" id="msg" placeholder=" " rows="1"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-indigo-500 cursor-text" htmlFor="msg">Message</label>
</div>
<button className="w-full mt-6 py-4 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all active:scale-95 flex items-center justify-center gap-2" type="button">
                        Send Message <iconify-icon icon="lucide:send" width="14"></iconify-icon>
</button>
</form>
<div className="flex items-center justify-center gap-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="mailto:contact@zdkiel.xyz">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="https://twitter.com/zdkiel">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="https://linkedin.com/in/zdkiel">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-8 bg-[#030303]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 zdkiel.xyz. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-neutral-500">
<span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Systems Operational</span>
<span>UTC+00:00</span>
</div>
</div>
</footer>


    </>
  );
}
