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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
fontSize: {
'2xs': '0.625rem',
},
colors: {
background: '#020202',
surface: '#080808',
surfaceHighlight: '#0F0F0F',
border: 'rgba(255,255,255,0.08)',
primary: '#FFFFFF',
secondary: '#888888',
accent: '#3B82F6',
},
animation: {
'scroll': 'scroll 60s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Spotlight Logic
        const wrappers = document.querySelectorAll('.spotlight-wrapper');

        wrappers.forEach(wrapper => {
            wrapper.addEventListener('mousemove', (e) => {
                const rect = wrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                wrapper.querySelectorAll('.spotlight-card').forEach(card => {
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
        });

        // Intersection Observer for Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Auth Logic
        function toggleAuth(action) {
            const modal = document.getElementById('auth-modal');
            if (action === 'login') {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            } else {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Verifying...";
            setTimeout(() => {
                btn.innerText = "Success";
                setTimeout(() => {
                    alert("Welcome back, Abinit.");
                    toggleAuth('close');
                    btn.innerText = originalText;
                }, 500);
            }, 800);
        }
    
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
      
<div className="bg-noise"></div>

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>

<nav className="fixed top-0 w-full z-40 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-5 h-5 flex items-center justify-center">
<div className="absolute inset-0 bg-white rounded-sm opacity-100 group-hover:rotate-90 transition-transform duration-500 ease-out"></div>
<span className="relative text-black font-bold text-[10px] leading-none">A</span>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-400 group-hover:text-white transition-colors">Abinit Kumar</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-1.5 text-xs font-medium text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#about">About</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#projects">Work</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#stack">Stack</a>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" onclick="toggleAuth('login')">Sign In</button>
<a className="px-3 py-1.5 rounded bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors tracking-tight" href="#contact">
                    Contact
                </a>
</div>
</div>
</nav>

<main className="relative pt-36 pb-20 overflow-hidden z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-white/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10"></div>
<section className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

<div className="reveal mb-8">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md transition-colors hover:bg-white/5 cursor-default group">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium tracking-wide text-neutral-400 group-hover:text-neutral-200 transition-colors uppercase">Available for projects</span>
</div>
</div>

<h1 className="reveal stagger-1 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1] mb-8 text-white">
                Designing the
                <br/>
<span className="text-neutral-500">invisible architecture.</span>
</h1>
<p className="reveal stagger-2 text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed mb-10 font-normal">
                Full-stack engineer with a focus on scalable systems and polished user interfaces. Transforming complex requirements into seamless digital experiences.
            </p>

<div className="reveal stagger-3 flex flex-col sm:flex-row items-center gap-3">
<a className="group relative px-6 py-2.5 bg-white text-black rounded-lg text-xs font-medium overflow-hidden transition-all hover:bg-neutral-200" href="#projects">
<span className="relative flex items-center gap-2">
                        View Work 
                        <iconify-icon className="transition-transform group-hover:translate-x-0.5 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<button className="px-6 py-2.5 rounded-lg border border-white/10 bg-transparent text-neutral-300 text-xs font-medium hover:bg-white/5 transition-colors flex items-center gap-2" onclick="document.getElementById('stack').scrollIntoView()">
<iconify-icon className="text-neutral-500 text-base" icon="solar:layers-minimalistic-linear"></iconify-icon>
                    Tech Stack
                </button>
</div>
</section>

<div className="w-full py-24 border-b border-white/[0.02] relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10"></div>
<div className="overflow-hidden opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
<div className="inline-flex w-max animate-scroll">

<div className="flex items-center gap-16 mx-8">
<iconify-icon icon="simple-icons:react" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:nextdotjs" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:tailwindcss" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:typescript" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:nodedotjs" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:postgresql" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:aws" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:docker" width="20"></iconify-icon>
</div>

<div className="flex items-center gap-16 mx-8">
<iconify-icon icon="simple-icons:react" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:nextdotjs" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:tailwindcss" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:typescript" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:nodedotjs" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:postgresql" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:aws" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:docker" width="20"></iconify-icon>
</div>

<div className="flex items-center gap-16 mx-8">
<iconify-icon icon="simple-icons:react" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:nextdotjs" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:tailwindcss" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:typescript" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:nodedotjs" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:postgresql" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:aws" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:docker" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<section className="max-w-5xl mx-auto px-6 py-24" id="about">
<div className="mb-16 reveal">
<h2 className="text-2xl font-medium tracking-tight mb-2 text-white">About Me</h2>
<p className="text-neutral-500 text-sm">Building with precision and purpose.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto md:grid-rows-2 gap-4">

<div className="spotlight-wrapper md:col-span-3 md:row-span-2 reveal">
<div className="spotlight-card rounded-xl h-full">
<div className="card-content p-8 flex flex-col justify-between h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent">
<div>
<div className="w-10 h-10 rounded bg-white text-black flex items-center justify-center font-bold text-sm mb-6">AK</div>
<h3 className="text-lg font-medium text-white mb-3">Abinit Kumar</h3>
<p className="text-neutral-400 text-sm leading-7">
                                    I am a 19-year-old Full-Stack Developer. I merge engineering discipline with creative design to build software that feels intuitive. I specialize in the JavaScript ecosystem but never shy away from low-level challenges.
                                </p>
</div>
<div className="flex gap-4 mt-8 pt-8 border-t border-white/5">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>

<div className="spotlight-wrapper md:col-span-3 md:row-span-1 reveal stagger-1">
<div className="spotlight-card rounded-xl h-full">
<div className="card-content relative overflow-hidden group">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Map" className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/77.2090,28.6139,12,0/500x300?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsZXh5b3UwaG5jMnBwZmJ5YnJ2aG9qIn0.example"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 p-6 flex flex-col justify-end h-full">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide">New Delhi, India (IST)</span>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-wrapper md:col-span-1 md:row-span-1 reveal stagger-2">
<div className="spotlight-card rounded-xl h-full">
<div className="card-content p-6 flex flex-col justify-center items-center text-center">
<h4 className="text-2xl font-medium text-white tracking-tight">3+</h4>
<p className="text-neutral-500 text-[10px] uppercase tracking-wider mt-1">Years</p>
</div>
</div>
</div>

<div className="spotlight-wrapper md:col-span-2 md:row-span-1 reveal stagger-3">
<div className="spotlight-card rounded-xl h-full">
<div className="card-content p-6 flex flex-col justify-between">
<div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center mb-2 bg-white/5">
<iconify-icon className="text-white" icon="solar:code-scan-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Full Stack Arsenal</h4>
<p className="text-neutral-500 text-xs mt-1">React, Node, AWS, Python</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5" id="projects">
<div className="flex flex-col md:flex-row justify-between md:items-end mb-16 reveal">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-2 text-white">Selected Work</h2>
<p className="text-neutral-500 text-sm">A curation of recent developments.</p>
</div>
<a className="hidden md:flex text-xs font-medium text-white hover:text-neutral-300 transition-colors items-center gap-1" href="#">
                    All Projects <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="space-y-12">

<div className="spotlight-wrapper group reveal">
<div className="spotlight-card rounded-xl bg-surface">
<div className="card-content p-1 flex flex-col md:flex-row gap-8">
<div className="w-full md:w-[55%] h-64 md:h-96 bg-neutral-900 rounded-lg overflow-hidden relative border border-white/5">
<div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
<img alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full md:w-[45%] py-4 pr-6 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-white/5 border border-white/10">
<iconify-icon className="text-white text-xs" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">E-Commerce</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Nexus Commerce</h3>
<p className="text-neutral-400 leading-7 text-sm mb-6">
                                    A high-performance e-commerce backend architected with Microservices. Features real-time inventory tracking, secure payment gateways, and AI-driven recommendations tailored for scale.
                                </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-300 bg-white/5 font-mono">Java Spring</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-300 bg-white/5 font-mono">Next.js</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-300 bg-white/5 font-mono">Docker</span>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-1 group/link" href="#">
                                        View Case Study 
                                        <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-wrapper group reveal">
<div className="spotlight-card rounded-xl bg-surface">
<div className="card-content p-1 flex flex-col md:flex-row-reverse gap-8">
<div className="w-full md:w-[55%] h-64 md:h-96 bg-neutral-900 rounded-lg overflow-hidden relative border border-white/5">
<div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
<img alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full md:w-[45%] py-4 pl-6 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-white/5 border border-white/10">
<iconify-icon className="text-white text-xs" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">AI &amp; NLP</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Synapse Chat</h3>
<p className="text-neutral-400 leading-7 text-sm mb-6">
                                    Intelligent customer support agent powered by LLMs. Handles context-aware conversations, integrates with internal knowledge bases via RAG, and self-improves from user feedback interactions.
                                </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-300 bg-white/5 font-mono">Python</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-300 bg-white/5 font-mono">OpenAI API</span>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-300 bg-white/5 font-mono">Redis</span>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-1 group/link" href="#">
                                        View Case Study 
                                        <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5" id="stack">
<div className="reveal">
<h2 className="text-2xl font-medium tracking-tight mb-8 text-white">Technical Arsenal</h2>
<div className="spotlight-wrapper w-full">
<div className="spotlight-card rounded-lg bg-[#050505]">
<div className="card-content p-6 font-mono text-xs md:text-sm text-neutral-400">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="space-y-2">
<p><span className="text-blue-400">const</span> <span className="text-yellow-200">stack</span> = {</p>
<p className="pl-4">frontend: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Tailwind'</span>, <span className="text-green-400">'TypeScript'</span>],</p>
<p className="pl-4">backend: [<span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Python'</span>, <span className="text-green-400">'Java Spring'</span>, <span className="text-green-400">'Go'</span>],</p>
<p className="pl-4">database: [<span className="text-green-400">'PostgreSQL'</span>, <span className="text-green-400">'MongoDB'</span>, <span className="text-green-400">'Redis'</span>],</p>
<p className="pl-4">devops: [<span className="text-green-400">'AWS'</span>, <span className="text-green-400">'Docker'</span>, <span className="text-green-400">'Kubernetes'</span>, <span className="text-green-400">'CI/CD'</span>]</p>
<p>};</p>
<p className="text-neutral-600 animate-pulse">_</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-32 text-center" id="contact">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-white">Ready to collaborate?</h2>
<p className="text-neutral-400 mb-10 max-w-sm mx-auto text-sm leading-relaxed">Currently exploring new opportunities in engineering and product development.</p>
<a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition-transform hover:scale-105" href="mailto:contact@abinit.dev">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                    Start a Conversation
                </a>
</div>
<footer className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 uppercase tracking-widest">
<p>© 2024 Abinit Kumar.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</footer>
</section>
</main>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="auth-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onclick="toggleAuth('close')"></div>
<div className="relative w-full max-w-[360px] bg-[#0A0A0A] border border-white/10 rounded-xl p-6 shadow-2xl animate-fade-in overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Admin Access</h3>
<button className="text-neutral-500 hover:text-white" onclick="toggleAuth('close')"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-[10px] font-medium text-neutral-500 mb-1.5 uppercase tracking-wider">Email</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-neutral-700 focus:border-white/20 focus:outline-none transition-colors" placeholder="name@domain.com" type="email"/>
</div>
<div>
<label className="block text-[10px] font-medium text-neutral-500 mb-1.5 uppercase tracking-wider">Password</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-neutral-700 focus:border-white/20 focus:outline-none transition-colors" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-white text-black font-medium py-2 rounded-lg text-xs hover:bg-neutral-200 transition-colors mt-2" type="submit">
                        Authenticate
                    </button>
</form>
</div>
</div>
</div>


    </>
  );
}
