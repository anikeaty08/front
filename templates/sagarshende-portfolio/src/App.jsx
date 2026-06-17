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



    // Initialize Lucide Icons
    lucide.createIcons();

    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-mobile-menu');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.nav-link');

    function toggleMenu() {
      const isHidden = menu.classList.contains('translate-y-[-100%]');
      if (isHidden) {
        menu.classList.remove('translate-y-[-100%]');
      } else {
        menu.classList.add('translate-y-[-100%]');
      }
    }

    if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
    links.forEach(l => l.addEventListener('click', toggleMenu));

    // Modal Logic
    const modal = document.getElementById('schedule-modal');
    const modalContent = modal ? modal.querySelector('div') : null;
    const openBtns = [document.getElementById('hero-schedule-btn'), document.getElementById('cta-schedule-btn')];
    const closeBtn = document.getElementById('close-modal');

    function openModal() {
      if(!modal) return;
      modal.classList.remove('hidden');
      requestAnimationFrame(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
      });
    }

    function closeModal(e) {
      if(!modal) return;
      if (e.target === modal || e.target === closeBtn || closeBtn.contains(e.target)) {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        modal.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 300);
      }
    }

    openBtns.forEach(btn => btn?.addEventListener('click', openModal));
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(modal) modal.addEventListener('click', closeModal);

    // Intersection Observer for fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(sec => {
      sec.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(sec);
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
      

<div className="ambient-light">
<div className="light-beam"></div>
<div className="light-beam-2"></div>

<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<div className="fixed inset-0 z-50 bg-[#030305]/95 backdrop-blur-2xl translate-y-[-100%] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" id="mobile-menu">
<div className="flex h-full flex-col">
<div className="flex items-center justify-between p-6 border-b border-white/10">
<span className="text-xs font-semibold text-white tracking-widest uppercase">Navigation</span>
<button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/5" id="close-mobile-menu">
<svg className="lucide lucide-x w-5 h-5 text-gray-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex flex-col gap-1 p-6">
<a className="text-3xl font-light text-gray-400 hover:text-white transition nav-link py-3" href="#projects">Projects</a>
<a className="text-3xl font-light text-gray-400 hover:text-white transition nav-link py-3" href="#about">About</a>
<a className="text-3xl font-light text-gray-400 hover:text-white transition nav-link py-3" href="#experience">Experience</a>
<a className="text-3xl font-light text-gray-400 hover:text-white transition nav-link py-3" href="#skills">Skills</a>
<a className="text-3xl font-light text-gray-400 hover:text-white transition nav-link py-3" href="#contact">Contact</a>
</nav>
<div className="mt-auto p-6 border-t border-white/10">
<a className="w-full flex items-center justify-center gap-2 rounded-lg bg-white text-black px-6 py-4 text-sm font-medium hover:bg-gray-200 transition" download="" href="https://drive.google.com/file/d/1gNZTENsJANVROYZ8xb2y7aTDQKFQ96IH/view?usp=share_link" target="_blank">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
          Download Resume
        </a>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/70 backdrop-blur-lg transition-all duration-300 opacity-0 pointer-events-none" id="schedule-modal" style={{transitionBehavior: 'allow-discrete'}}>
<div className="w-[95%] max-w-lg rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl transform transition-all scale-95 opacity-0 sm:p-8">
<div className="mb-6 flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">Let's Connect</h3>
<p className="text-sm text-gray-500 mt-1">Fill out the details below to start a conversation.</p>
</div>
<button className="p-2 rounded-lg hover:bg-white/5 transition" id="close-modal">
<svg className="lucide lucide-x w-5 h-5 text-gray-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form action="mailto:sagarshende631@gmail.com" className="space-y-5" enctype="text/plain" method="post">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Name</label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition" name="Name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email</label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition" name="Email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Interests</label>
<div className="relative">
<select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition appearance-none" name="Type">
<option className="bg-neutral-900" value="">Select a topic</option>
<option className="bg-neutral-900" value="Project">New Project</option>
<option className="bg-neutral-900" value="Consulting">Consulting</option>
<option className="bg-neutral-900" value="Hiring">Hiring</option>
<option className="bg-neutral-900" value="Other">Other</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3 w-4 h-4 text-gray-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Message</label>
<textarea className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition" name="Message" placeholder="How can I help you?" rows="4"></textarea>
</div>
<button className="group flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition active:scale-[0.98]" type="submit">
          Send Message
          <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-[#030305]/50 backdrop-blur-xl">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group flex items-center gap-3" href="#hero">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 border border-white/10 group-hover:bg-white/20 transition">
<span className="text-xs font-bold text-white font-mono">SS</span>
</div>
<span className="text-sm font-medium text-gray-300 transition group-hover:text-white">Sagar Shende</span>
</a>
<nav className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.02] px-2 py-1 md:flex backdrop-blur-md">
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-gray-400 transition hover:bg-white/10 hover:text-white" href="#projects">Projects</a>
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-gray-400 transition hover:bg-white/10 hover:text-white" href="#about">About</a>
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-gray-400 transition hover:bg-white/10 hover:text-white" href="#experience">Experience</a>
<a className="rounded-full px-4 py-1.5 text-xs font-medium text-gray-400 transition hover:bg-white/10 hover:text-white" href="#skills">Skills</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition" href="#contact">
            Contact
          </a>
<a className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition" download="" href="https://drive.google.com/file/d/1gNZTENsJANVROYZ8xb2y7aTDQKFQ96IH/view?usp=share_link" target="_blank">
<svg className="lucide lucide-download w-3.5 h-3.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
            Resume
          </a>
<button className="md:hidden p-2 rounded-lg text-gray-400 hover:bg-white/10 transition" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden transition-all duration-1000" id="hero">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 max-w-xl">

<div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[11px] font-medium text-green-400 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Available for new opportunities
          </div>
<div className="space-y-4">
<h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
              Building scalable <br/>
<span className="text-gradient-blue">mobile solutions.</span>
</h1>
<p className="text-lg text-gray-400 leading-relaxed font-light">
              I'm <span className="highlight">Sagar Shende</span>, a Senior Flutter Engineer with <span className="highlight">6+ years</span> of experience. I specialize in clean architecture, performance optimization, and shipping pixel-perfect apps for iOS and Android.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition flex items-center gap-2" download="" href="https://drive.google.com/file/d/1gNZTENsJANVROYZ8xb2y7aTDQKFQ96IH/view?usp=share_link" target="_blank">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              Download Resume
            </a>
<a className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition flex items-center gap-2" href="#projects">
              View Projects
              <svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>

<div className="flex items-center gap-6 pt-6 border-t border-white/5">
<div className="flex items-center gap-4">
<a aria-label="Github" className="text-gray-500 hover:text-white transition" href="https://github.com"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a aria-label="LinkedIn" className="text-gray-500 hover:text-white transition" href="https://linkedin.com"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a aria-label="Email" className="text-gray-500 hover:text-white transition" href="mailto:sagarshende631@gmail.com"><svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
<div className="h-4 w-[1px] bg-white/10"></div>
<div className="flex items-center gap-3 text-xs font-mono text-gray-500">
<span>Flutter</span>
<span>•</span>
<span>Dart</span>
<span>•</span>
<span>Native</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full flex items-center justify-center">

<div className="absolute w-[300px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

<div className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl group">

<img alt="Sagar Shende" className="transition duration-700 group-hover:scale-105 group-hover:opacity-50 hover:grayscale-0 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8075aacc-da49-4f4c-9a84-7130da947818_3840w.jpg?w=800&amp;q=80"/>

<div className="bg-gradient-to-t from-[#030305] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-6 right-6">
<div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-code-2 w-5 h-5 text-white" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 bg-[#030305]/60 backdrop-blur-xl">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-white font-medium text-sm">Sagar Shende</p>
<p className="text-xs text-gray-400">Mobile Architect</p>
</div>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-blue-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>

<div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
<div className="text-center">
<p className="text-[10px] text-gray-500 uppercase tracking-wider">Exp</p>
<p className="text-xs font-semibold text-white">6Y+</p>
</div>
<div className="text-center border-l border-white/10">
<p className="text-[10px] text-gray-500 uppercase tracking-wider">Apps</p>
<p className="text-xs font-semibold text-white">20+</p>
</div>
<div className="text-center border-l border-white/10">
<p className="text-[10px] text-gray-500 uppercase tracking-wider">Users</p>
<p className="text-xs font-semibold text-white">1M+</p>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-1/4 p-3 rounded-lg bg-[#111] border border-white/10 shadow-xl hidden sm:block animate-[pulse_4s_ease-in-out_infinite]">
<svg className="lucide lucide-smartphone w-5 h-5 text-gray-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="absolute -left-4 bottom-1/3 p-3 rounded-lg bg-[#111] border border-white/10 shadow-xl hidden sm:block animate-[pulse_5s_ease-in-out_infinite]">
<svg className="lucide lucide-layers w-5 h-5 text-gray-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 transition-all duration-1000 opacity-0 translate-y-10" id="projects">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Selected Work</h2>
<p className="text-gray-400 mt-2 font-light">Highlights from my development portfolio.</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm text-white hover:text-blue-400 transition" href="https://github.com" target="_blank">
          View GitHub <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="space-y-8">

<div className="group relative rounded-3xl border border-white/10 bg-[#080808] overflow-hidden hover:border-white/20 transition duration-500">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
<div className="p-8 sm:p-12 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-medium border border-pink-500/20">Health &amp; Fitness</span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">9 Fit - Women Workout</h3>
<p className="text-gray-400 leading-relaxed mb-8 font-light">
                A comprehensive fitness tracking application designed for women. Features include custom workout plans, progress tracking via SQL database, and fluid animations running at 60fps.
              </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs text-gray-500 border border-white/10 rounded px-2 py-1">Flutter</span>
<span className="text-xs text-gray-500 border border-white/10 rounded px-2 py-1">Clean Architecture</span>
<span className="text-xs text-gray-500 border border-white/10 rounded px-2 py-1">SQLite</span>
</div>
<a className="inline-flex items-center text-sm text-white font-medium gap-2 hover:gap-3 transition-all" href="#">
                View Project <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 relative min-h-[300px] lg:min-h-auto overflow-hidden group-hover:opacity-90 transition">
<img alt="Fitness App" className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition duration-700 ease-in-out" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="group relative rounded-3xl border border-white/10 bg-[#080808] overflow-hidden hover:border-white/20 transition duration-500">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
<div className="order-2 lg:order-1 bg-gradient-to-br from-neutral-900 to-neutral-800 relative min-h-[300px] lg:min-h-auto overflow-hidden">
<img alt="Social App" className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition duration-700 ease-in-out" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2 p-8 sm:p-12 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">Social Network</span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Connect - Social Clone</h3>
<p className="text-gray-400 leading-relaxed mb-8 font-light">
                A robust social media application mimicking Twitter's core functionality. Built to demonstrate scalable architecture using Supabase for realtime data and Bloc for state management.
              </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs text-gray-500 border border-white/10 rounded px-2 py-1">Supabase</span>
<span className="text-xs text-gray-500 border border-white/10 rounded px-2 py-1">Bloc</span>
<span className="text-xs text-gray-500 border border-white/10 rounded px-2 py-1">GetIt</span>
</div>
<a className="inline-flex items-center text-sm text-white font-medium gap-2 hover:gap-3 transition-all" href="#">
                View Project <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="transition-all duration-1000 pt-24 pb-24 relative" id="about">
<div className="mx-auto max-w-6xl px-6 lg:px-8">

<div className="mb-16 max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
            Engineering digital products with <br/> <span className="text-gradient-blue">precision &amp; passion.</span>
</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed">
            I'm a Senior Flutter Developer with over 6 years of experience in the mobile landscape. My journey started with native Android, but I quickly fell in love with the efficiency and beauty of Flutter.
          </p>
</div>

<div className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative min-h-[500px] lg:h-auto order-1 lg:order-2">
<img alt="Portrait" className="opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8075aacc-da49-4f4c-9a84-7130da947818_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl glass-panel flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<svg className="lucide lucide-palette w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<p className="text-xs font-medium text-gray-400">Currently Developing</p>
<p className="text-sm font-medium text-white">AI apps</p>
</div>
</div>
<div className="hidden sm:block">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
</div>
</div>
</div>

<div className="p-10 sm:p-16 flex flex-col justify-center order-2 lg:order-1 bg-[#050505]">
<div className="space-y-10">
<p className="text-gray-400 font-light leading-relaxed text-lg">
                      Currently, I'm helping <span className="text-white font-medium">Rachnaye</span> scale their e-commerce presence. I specialize in architecting apps that are not just functional, but maintainable and testable using SOLID principles and Clean Architecture.
                   </p>
<div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
<div className="space-y-1">
<p className="text-3xl font-bold text-white">6+</p>
<p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Years Exp.</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-bold text-white">20+</p>
<p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Projects</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-bold text-white">30%</p>
<p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Growth</p>
</div>
</div>
<div className="pt-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition group" download="" href="https://drive.google.com/file/d/1gNZTENsJANVROYZ8xb2y7aTDQKFQ96IH/view?usp=share_link" target="_blank">
                         Download Resume
                         <svg className="lucide lucide-arrow-down-to-line w-4 h-4 transition-transform group-hover:translate-y-0.5" data-lucide="arrow-down-to-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17V3"></path><path d="m6 11 6 6 6-6"></path><path d="M19 21H5"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden transition-all duration-1000" id="experience">

<div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="mx-auto max-w-4xl px-6 lg:px-8">
<div className="mb-12 text-center sm:text-left">
<h2 className="text-3xl font-semibold text-white tracking-tight">Experience</h2>
</div>
<div className="relative border-l border-white/10 ml-4 space-y-12">

<div className="relative pl-8 sm:pl-12 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-[#030305] transition group-hover:ring-blue-500/20 group-hover:scale-125"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
<h3 className="text-xl font-medium text-white">Senior Flutter Developer</h3>
<span className="text-xs font-mono text-gray-500">Sep 2021 — Present</span>
</div>
<div className="text-sm text-blue-400 mb-4">Rachnaye Private Limited <span className="text-gray-500 ml-2 font-mono text-xs hidden sm:inline-block">• Remote, Bangalore, India</span></div>
<p className="text-gray-500 text-xs font-mono mb-4 sm:hidden">Remote, Bangalore, India</p>
<ul className="space-y-3 text-gray-400 text-base font-light leading-relaxed list-disc list-outside ml-4">
<li>Architected and maintained scalable Flutter-based e-commerce applications serving thousands of users, increasing engagement by <span className="text-gray-200">35%</span>.</li>
<li>Led end-to-end development of high-impact features, contributing to a <span className="text-gray-200">20% growth</span> in monthly active users.</li>
<li>Designed modular architecture using Clean Architecture and SOLID principles, ensuring scalability and long-term maintainability.</li>
<li>Integrated advanced analytics and performance optimization strategies, driving a <span className="text-gray-200">30% increase</span> in conversion rates and improving overall application stability.</li>
<li>Managed Play Store deployment cycles including release versioning, rollout strategies, and post-release monitoring to ensure stable production releases.</li>
</ul>
</div>

<div className="relative pl-8 sm:pl-12 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-purple-500 ring-4 ring-[#030305] transition group-hover:ring-purple-500/20 group-hover:scale-125"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
<h3 className="text-xl font-medium text-white">Flutter Developer</h3>
<span className="text-xs font-mono text-gray-500">Jan 2020 — Jul 2021</span>
</div>
<div className="text-sm text-purple-400 mb-4">MK Service <span className="text-gray-500 ml-2 font-mono text-xs hidden sm:inline-block">• Remote, Nagpur, India</span></div>
<p className="text-gray-500 text-xs font-mono mb-4 sm:hidden">Remote, Nagpur, India</p>
<ul className="space-y-3 text-gray-400 text-base font-light leading-relaxed list-disc list-outside ml-4">
<li>Led end-to-end development and delivery of high-impact features, contributing to a <span className="text-gray-200">20% growth</span> in monthly active users.</li>
<li>Optimized UI components for better responsiveness across various device sizes, increasing user session duration by <span className="text-gray-200">15%</span>.</li>
<li>Successfully published and maintained multiple client projects on Google Play Store, managing the entire submission process including store listing optimization.</li>
</ul>
</div>

<div className="relative pl-8 sm:pl-12 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-[#030305] transition group-hover:ring-emerald-500/20 group-hover:scale-125"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
<h3 className="text-xl font-medium text-white">Freelance Programmer/App Developer</h3>
<span className="text-xs font-mono text-gray-500">2019 — 2021</span>
</div>
<div className="text-sm text-emerald-400 mb-4">FreelancingGig <span className="text-gray-500 ml-2 font-mono text-xs hidden sm:inline-block">• Remote, Nagpur, India</span></div>
<p className="text-gray-500 text-xs font-mono mb-4 sm:hidden">Remote, Nagpur, India</p>
<ul className="space-y-3 text-gray-400 text-base font-light leading-relaxed list-disc list-outside ml-4">
<li>Completely redesigned the UI for Stunning Presets For Lightroom FREE app, modernizing the interface and fixing critical bugs that improved user retention by <span className="text-gray-200">25%</span>.</li>
<li>Developed BS Traders a comprehensive e-commerce platform specialized for battery sales, including inventory management, order processing, and payment integration.</li>
<li>Optimized memory usage and reduced app launch time by <span className="text-gray-200">20%</span> through efficient coding and implementing best practices.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 transition-all duration-1000 opacity-0 translate-y-10" id="skills">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-white mb-12">Technical Arsenal</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition hover:border-white/10 group">
<svg className="lucide lucide-smartphone w-8 h-8 text-blue-500 mb-4 opacity-80 group-hover:opacity-100 transition" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<h3 className="text-white font-medium mb-2">Mobile</h3>
<p className="text-sm text-gray-500">Flutter, Dart, iOS, Android, Native Integration</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition hover:border-white/10 group">
<svg className="lucide lucide-layout-template w-8 h-8 text-purple-500 mb-4 opacity-80 group-hover:opacity-100 transition" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
<h3 className="text-white font-medium mb-2">Architecture</h3>
<p className="text-sm text-gray-500">Clean Arch, MVVM, SOLID, Bloc, Riverpod</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition hover:border-white/10 group">
<svg className="lucide lucide-server w-8 h-8 text-emerald-500 mb-4 opacity-80 group-hover:opacity-100 transition" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<h3 className="text-white font-medium mb-2">Backend</h3>
<p className="text-sm text-gray-500">Firebase, Supabase, Node.js (Basic), REST, GraphQL</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition hover:border-white/10 group">
<svg className="lucide lucide-workflow w-8 h-8 text-pink-500 mb-4 opacity-80 group-hover:opacity-100 transition" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<h3 className="text-white font-medium mb-2">DevOps</h3>
<p className="text-sm text-gray-500">CI/CD, Git, Codemagic, Play Store Deployment</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative transition-all duration-1000 opacity-0 translate-y-10" id="contact">
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
        Ready to start your project?
      </h2>
<p className="text-xl text-gray-400 font-light mb-10">
        I'm currently accepting new opportunities. Let's discuss how I can add value to your team or project.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2" id="cta-schedule-btn">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
          Get in Touch
        </button>
<a className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition flex items-center justify-center gap-2" href="https://linkedin.com" target="_blank">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020202] py-12">
<div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-white">SS</div>
<p className="text-sm text-gray-500">© 2024 Sagar Shende</p>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-gray-500 hover:text-white transition" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-gray-500 hover:text-white transition" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
