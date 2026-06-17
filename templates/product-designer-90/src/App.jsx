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
bg: {
main: '#0a051e',
secondary: '#0e0725',
},
border: {
subtle: 'rgba(255, 255, 255, 0.08)',
light: 'rgba(255, 255, 255, 0.12)',
active: 'rgba(255, 255, 255, 0.2)',
},
text: {
muted: 'rgba(255, 255, 255, 0.6)',
faint: 'rgba(255, 255, 255, 0.4)',
},
accent: '#c084fc',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
transitionTimingFunction: {
'sakura': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
        
        // Mobile Menu Logic
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const body = document.body;
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                body.style.overflow = 'hidden';
            } else {
                menu.classList.add('hidden');
                body.style.overflow = '';
            }
        }

        // Scroll Observer (SAKURA Step 3)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        // Mouse Tracker (SAKURA Flashlight)
        document.querySelectorAll('.group').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-[1600px] mx-auto px-4 md:px-[6%]">
<div className="w-full h-full border-x border-border-subtle grid grid-cols-4">
<div className="border-r border-border-subtle h-full hidden md:block relative overflow-hidden">

<div className="beam-v opacity-30"></div>
</div>
<div className="border-r border-border-subtle h-full hidden md:block"></div>
<div className="border-r border-border-subtle h-full hidden md:block"></div>
</div>
</div>

<div className="md:px-[6%] max-w-[1600px] z-10 mr-auto ml-auto pr-4 pl-4 relative">

<header className="border-x border-border-subtle bg-bg-main/80 backdrop-blur-md sticky top-0 z-50 animate-reveal delay-100">
<div className="grid grid-cols-1 md:grid-cols-4 border-b border-border-subtle">

<div className="p-6 md:p-8 flex items-center justify-between md:justify-start group border-r border-border-subtle relative" style={{'--mouse-x': '230px', '--mouse-y': '89px'}}>
<div className="relative w-12 h-12 rounded-sm overflow-hidden border border-border-light group-hover:border-accent transition-colors duration-500">
<img alt="Denis Dudar" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b45618e2-478a-4dc9-bf47-068fc90e8c7f_320w.png?w=800&amp;q=80" style={{}}/>
</div>
<button className="md:hidden text-text-muted transition-transform active:scale-95" onclick="toggleMenu()">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<a className="group p-6 md:p-8 flex items-center justify-between hover:bg-white/[0.02] transition-colors border-r border-border-subtle" href="resume.pdf" style={{'--mouse-x': '226.5px', '--mouse-y': '102px'}} target="_blank">
<span className="text-sm font-normal text-text-muted group-hover:text-white transition-colors">Resume/CV</span>
<svg className="lucide lucide-file-text w-4 h-4 text-border-active group-hover:text-accent transition-colors group-hover:translate-x-1 duration-200" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</a>
<a className="group p-6 md:p-8 flex items-center justify-between hover:bg-white/[0.02] transition-colors border-r border-border-subtle" href="#" style={{'--mouse-x': '12px', '--mouse-y': '102px'}}>
<span className="text-sm font-normal text-text-muted group-hover:text-white transition-colors">Portfolio</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-border-active group-hover:text-accent transition-colors group-hover:translate-x-1 duration-200" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group p-6 md:p-8 flex items-center justify-between hover:bg-white/[0.02] transition-colors" href="#" style={{'--mouse-x': '157.5px', '--mouse-y': '102px'}}>
<span className="text-sm font-normal text-text-muted group-hover:text-white transition-colors">About</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-border-active group-hover:text-accent transition-colors group-hover:translate-x-1 duration-200" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="hidden-menu fixed inset-0 bg-bg-main z-[60] flex flex-col p-6 hidden" id="mobile-menu">
<div className="flex justify-end mb-8">
<button className="text-text-muted" onclick="toggleMenu()">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex flex-col gap-6 text-2xl font-medium">
<a className="text-white" href="resume.pdf" target="_blank">Resume/CV</a>
<a className="text-white" href="#">Portfolio</a>
<a className="text-white" href="#">About</a>
</nav>
</div>
</header>

<main className="border-x border-border-subtle bg-bg-main">

<div className="md:py-32 md:px-8 border-border-subtle overflow-hidden border-b pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl relative z-10">
<div className="flex items-center gap-3 mb-8 animate-reveal delay-200">
<span className="text-2xl animate-pulse">👋</span>
<span className="font-normal text-xl text-text-muted">Hi, I'm Denis Dudar</span>
</div>
<h1 className="leading-[1.1] md:text-6xl md:leading-[1] lg:text-5xl animate-reveal delay-300 text-4xl font-medium text-white tracking-tight mb-6">
                        I help startups and enterprises to define, design, and launch digital products.
                    </h1>
</div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-reveal delay-500"></div>
</div>

<section className="" id="projects">

<article className="grid grid-cols-1 lg:grid-cols-2 border-b border-border-subtle group relative overflow-hidden scroll-reveal is-visible" style={{'--mouse-x': '526px', '--mouse-y': '30px'}}>

<div className="flashlight-surface"></div>
<div className="flashlight-border"></div>
<div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-subtle z-10 relative">
<span className="font-mono text-xs uppercase tracking-widest text-text-faint mb-6">Fintech</span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white group-hover:text-accent transition-colors">Payroll management system design</h2>
<p className="text-base md:text-lg font-light text-text-muted leading-relaxed mb-8">
                            Redesigned the payroll experience to prioritize usability. By creating a modular UI library, we accelerated development cycles.
                        </p>
</div>
<div className="md:p-12 lg:p-16 overflow-hidden flex bg-[#0c0621] p-8 relative items-center justify-center">
<div className="aspect-[16/10] w-full rounded-sm relative shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
<img alt="Project" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105 group-hover:saturate-100 saturate-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e653544d-6a75-4821-9c72-3993a12da088_800w.png" style={{}}/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</article>

<article className="grid grid-cols-1 lg:grid-cols-2 border-b border-border-subtle group relative overflow-hidden scroll-reveal" style={{'--mouse-x': '250px', '--mouse-y': '131.625px'}}>

<div className="flashlight-surface"></div>
<div className="flashlight-border"></div>
<div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-subtle z-10 relative">
<span className="font-mono text-xs uppercase tracking-widest text-text-faint mb-6">Real Estate</span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white group-hover:text-accent transition-colors">Sustainable property investment</h2>
<p className="text-base md:text-lg font-light text-text-muted leading-relaxed mb-8">
                            A platform enabling fractional investment in green properties. Focused on transparency and data visualization.
                        </p>
</div>
<div className="md:p-12 lg:p-16 overflow-hidden flex bg-[#0c0621] p-8 relative items-center justify-center">
<div className="aspect-[16/10] w-full rounded-sm relative shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
<img alt="Project" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105 group-hover:saturate-100 saturate-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34947f57-9ab5-41c8-9683-e8d61d153345_800w.png?w=800&amp;q=80" style={{}}/>
<div className="bg-gradient-to-t from-bg-main/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</article>
</section>

<section className="border-b border-border-subtle relative">

<div className="md:p-12 border-border-subtle border-b p-8 scroll-reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Achievements</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 relative">

<div className="md:col-span-5 lg:col-span-4 p-8 flex flex-col gap-6 relative border-b md:border-b-0 md:border-r border-border-subtle z-10 group scroll-reveal delay-100">

<div className="flashlight-surface"></div>
<div className="flashlight-border"></div>

<div className="absolute right-[-1px] top-0 bottom-0 w-px overflow-hidden hidden md:block z-20 pointer-events-none">
<div className="beam-v h-full"></div>
</div>
<div className="aspect-video w-full rounded-sm overflow-hidden border border-border-light relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8bc6078-232a-4526-a5ca-6ea6039c3685_800w.png?w=800&amp;q=80" style={{}}/>
<div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase border border-white/20 tracking-wider">Winner</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">Hackathon Winner</h3>
<p className="text-sm font-light text-text-muted leading-relaxed">
                                On April 26 2025, the Cieden team and the @coax.digital team built a tool that helps engage with clients.
                            </p>
</div>
</div>

<div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2">

<div className="flex flex-col border-b lg:border-b-0 lg:border-r border-border-subtle relative">

<div className="absolute right-[-1px] top-0 bottom-0 w-px overflow-hidden hidden lg:block z-20 pointer-events-none">
<div className="beam-v h-full" style={{animationDelay: '1s'}}></div>
</div>

<div className="relative p-8 border-b border-border-subtle flex-1 flex flex-col justify-center group scroll-reveal delay-200">
<div className="flashlight-surface"></div>
<div className="flashlight-border"></div>

<div className="absolute bottom-[-1px] left-0 right-0 h-px overflow-hidden z-20 pointer-events-none">
<div className="beam-h w-full" style={{animationDelay: '0.5s'}}></div>
</div>
<span className="font-mono text-xs text-text-faint uppercase mb-3 tracking-widest relative z-10">Google</span>
<h4 className="text-base font-medium text-white/90 group-hover:text-white leading-snug relative z-10">Completed Google Prompting Essentials Certificate</h4>
</div>

<div className="relative p-8 flex-1 flex flex-col justify-center group scroll-reveal delay-300">
<div className="flashlight-surface"></div>
<div className="flashlight-border"></div>
<span className="font-mono text-xs text-text-faint uppercase mb-3 tracking-widest relative z-10">Growth.Design</span>
<h4 className="text-base font-medium text-white/90 group-hover:text-white leading-snug relative z-10">Completed Product Psychology Masterclass by Growth.Design Course</h4>
</div>
</div>

<div className="flex flex-col relative">

<div className="relative p-8 border-b border-border-subtle flex-1 flex flex-col justify-center group scroll-reveal delay-200">
<div className="flashlight-surface"></div>
<div className="flashlight-border"></div>

<div className="absolute bottom-[-1px] left-0 right-0 h-px overflow-hidden z-20 pointer-events-none">
<div className="beam-h w-full" style={{animationDelay: '1.5s'}}></div>
</div>
<span className="font-mono text-xs text-text-faint uppercase mb-3 tracking-widest relative z-10">Projector</span>
<h4 className="text-base font-medium text-white/90 group-hover:text-white leading-snug relative z-10">Graduated from Mobile Interfaces Advanced course by Projector</h4>
</div>

<div className="relative p-8 flex-1 flex flex-col justify-center group scroll-reveal delay-300" style={{'--mouse-x': '136.3359375px', '--mouse-y': '141.09375px'}}>
<div className="flashlight-surface"></div>
<div className="flashlight-border"></div>
<span className="font-mono text-xs text-text-faint uppercase mb-3 tracking-widest relative z-10">Google</span>
<h4 className="text-base font-medium text-white/90 group-hover:text-white leading-snug relative z-10">Completed Google UX Design Certificate (7 courses)</h4>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-border-subtle overflow-hidden scroll-reveal">
<div className="absolute inset-0 z-0 bg-black">
<div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] blob"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] blob" style={{animationDelay: '-2s'}}></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20"></div>
</div>
<div className="z-10 md:p-24 lg:p-32 flex flex-col md:flex-row gap-12 pt-12 pr-12 pb-12 pl-12 relative gap-x-12 gap-y-12 items-center justify-between">
<div className="max-w-2xl">
<h2 className="text-5xl font-medium text-white tracking-tight mb-6 drop-shadow-xl md:text-5xl">Have a Great Idea?</h2>
<p className="text-lg font-light text-white/70 max-w-lg">
                            7+ years of experience in interface design. I help both startups and enterprises design and launch successful digital products.
                        </p>
</div>
<div className="w-full md:w-auto">
<button className="group relative overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 px-10 py-6 rounded-sm transition-all duration-300 hover:scale-105" style={{'--mouse-x': '187.9388427734375px', '--mouse-y': '82.995361328125px'}}>
<span className="z-10 uppercase group-hover:text-white flex items-center gap-3 text-xs font-bold text-white tracking-widest relative">
                                Get In Contact
                                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
</button>
</div>
</div>
</section>

<footer className="bg-bg-main relative z-10 scroll-reveal">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border-subtle border-b border-border-subtle">
<a className="p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors" href="https://www.linkedin.com/in/denis-dudar-88274a164/" rel="noopener noreferrer" target="_blank">
<span className="text-sm font-normal text-text-muted group-hover:text-white">Linkedin</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-border-active group-hover:text-accent group-hover:translate-x-1 transition-all" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors" href="https://dribbble.com/" rel="noopener noreferrer" target="_blank">
<span className="text-sm font-normal text-text-muted group-hover:text-white">Dribbble</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-border-active group-hover:text-accent group-hover:translate-x-1 transition-all" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors" href="https://www.instagram.com/den.dudar/" rel="noopener noreferrer" style={{'--mouse-x': '86px', '--mouse-y': '33.9453125px'}} target="_blank">
<span className="text-sm font-normal text-text-muted group-hover:text-white">Instagram</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-border-active group-hover:text-accent group-hover:translate-x-1 transition-all" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors" href="resume.pdf" target="_blank">
<span className="text-sm font-normal text-text-muted group-hover:text-white">Resume/CV</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-border-active group-hover:text-accent group-hover:translate-x-1 transition-all" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-sm font-light text-text-muted">
<div className="flex flex-col gap-2">
<a className="hover:text-white transition-colors" href="mailto:deni.dudar@gmail.com">deni.dudar@gmail.com</a>
<span className="font-mono text-xs opacity-50">+380 63 742 09 82</span>
</div>
<div className="flex flex-col md:items-end gap-2 text-right">
<span>Lviv, Ukraine</span>
<span className="flex items-center gap-2">
                            Work at <span className="text-white font-normal">Cieden</span>
</span>
</div>
</div>
</footer>
</main>
</div>



    </>
  );
}
