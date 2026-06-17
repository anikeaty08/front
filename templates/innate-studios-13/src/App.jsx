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
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b', // Slightly richer black
}
},
animation: {
'blob': 'blob 10s infinite',
'shine-move': 'shine-move 2s linear infinite',
'fade-in-up': 'fadeInUp 1s ease-out forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
'shine-move': {
'0%': { backgroundPosition: '100% 100%' },
'100%': { backgroundPosition: '0% 0%' }
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        lucide.createIcons();

        // --- Custom Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        const body = document.body;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

            const target = e.target;
            if (target.closest('.interactable') || target.closest('a') || target.closest('button') || target.closest('input') || target.closest('textarea') || target.closest('summary')) {
                body.classList.add('hovering');
            } else {
                body.classList.remove('hovering');
            }
        });

        // Smooth ring follow
        function animateRing() {
            // Lerp
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;

            requestAnimationFrame(animateRing);
        }
        animateRing();

        document.addEventListener('mousedown', () => {
            cursorRing.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });

        document.addEventListener('mouseup', () => {
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        // --- Scroll Reveal Animation ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => {
            observer.observe(el);
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
      

<div className="cursor-dot" id="cursor-dot"></div>
<div className="cursor-ring" id="cursor-ring"></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
<div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full blur-[120px] animate-blob"></div>
<div className="absolute bottom-[0%] right-[-5%] w-[35rem] h-[35rem] bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#030304]/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-2 interactable group cursor-pointer">
<div className="w-6 h-6 rounded flex items-center justify-center bg-white text-black font-bold text-xs">
                    I
                </div>
<span className="text-sm font-medium text-white tracking-tight font-display group-hover:text-zinc-300 transition-colors">Innate Studios</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[11px] font-medium text-zinc-500 uppercase tracking-widest">
<a className="text-white interactable hover:opacity-70 transition-opacity" href="#">Work</a>
<a className="hover:text-white transition-colors interactable" href="#about">Studio</a>
<a className="hover:text-white transition-colors interactable" href="#services">Services</a>
<a className="hover:text-white transition-colors interactable" href="#contact">Contact</a>
</div>
<button className="interactable text-xs text-white border border-white/10 bg-white/5 px-4 py-1.5 rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
                Available
            </button>
</div>
</nav>

<section className="min-h-screen pt-32 pb-20 relative flex flex-col justify-center">
<div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
<div className="relative z-10 space-y-2 mb-20">
<h1 className="text-[clamp(3rem,8vw,9rem)] leading-[0.9] font-display font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-600 reveal-text">
                    Innate<br/>Intelligence.
                </h1>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 reveal-text" style={{animationDelay: '0.1s'}}>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-md leading-relaxed tracking-tight">
                        We craft digital experiences that feel intuitive, seamless, and undeniably human.
                    </p>
<div className="flex gap-4">
<div className="text-right">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Projects</div>
<div className="text-2xl font-light text-white font-display">42+</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="text-right">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Awards</div>
<div className="text-2xl font-light text-white font-display">18</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px] reveal-text" style={{animationDelay: '0.2s'}}>

<div className="md:col-span-8 glass-card rounded-2xl p-2 group relative overflow-hidden interactable">
<div className="border-shine"></div>
<div className="w-full h-full rounded-xl overflow-hidden relative">
<img alt="Architecture" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6">
<span className="px-2 py-1 border border-white/20 rounded-full text-[10px] text-white backdrop-blur-md">Architecture</span>
<h3 className="text-xl text-white mt-2 font-display font-light tracking-tight">Spatial Awareness</h3>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6">
<div className="flex-1 glass-card rounded-2xl p-6 relative overflow-hidden group interactable flex flex-col justify-between">
<div className="border-shine"></div>
<div className="flex justify-between items-start">
<span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white">
<svg className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></svg>
</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">Latest</span>
</div>
<div>
<h3 className="text-lg text-white font-display font-light">Void &amp; Form</h3>
<p className="text-xs text-zinc-400 mt-1">Digital Brutalism</p>
</div>
</div>
<div className="flex-1 glass-card rounded-2xl p-2 relative overflow-hidden group interactable">
<div className="border-shine"></div>
<div className="w-full h-full rounded-xl overflow-hidden relative">
<img alt="Abstract" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<svg className="w-4 h-4 text-white fill-white" data-lucide="play" strokeWidth="1.5"></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="services">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start mb-16 reveal-text">
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-white max-w-2xl font-display">
                    We distill complexity into <br/> <span className="text-zinc-500">elegant systems.</span>
</h2>
<div className="mt-8 lg:mt-0 max-w-sm">
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                        Our methodology is rooted in the belief that digital products should feel natural. We strip away the unnecessary to reveal the essential.
                    </p>
<a className="inline-flex items-center gap-2 mt-6 text-xs text-white border-b border-white/20 pb-1 hover:border-white transition-colors interactable" href="#">
                        Explore Methodology <svg className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-2xl group interactable relative overflow-hidden reveal-text">
<div className="border-shine"></div>
<div className="mb-12">
<svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" data-lucide="layers" strokeWidth="1.5"></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-display">Strategy</h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                        Brand positioning, user research, and digital roadmapping to ensure foundations are solid.
                    </p>
<ul className="mt-6 space-y-2 text-[10px] text-zinc-400 uppercase tracking-wider">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Art Direction</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Content Strategy</li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl group interactable relative overflow-hidden reveal-text" style={{animationDelay: '0.1s'}}>
<div className="border-shine"></div>
<div className="mb-12">
<svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" data-lucide="pen-tool" strokeWidth="1.5"></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-display">Design</h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                        Visual identity and interface design that communicates values through aesthetic precision.
                    </p>
<ul className="mt-6 space-y-2 text-[10px] text-zinc-400 uppercase tracking-wider">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>UI/UX Design</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Motion Graphics</li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl group interactable relative overflow-hidden reveal-text" style={{animationDelay: '0.2s'}}>
<div className="border-shine"></div>
<div className="mb-12">
<svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" data-lucide="code-2" strokeWidth="1.5"></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-display">Development</h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                        Robust engineering using modern frameworks to create performant, scalable applications.
                    </p>
<ul className="mt-6 space-y-2 text-[10px] text-zinc-400 uppercase tracking-wider">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Frontend</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Creative Coding</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-end justify-between mb-12 reveal-text">
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-white font-display">Selected<br/>Works</h2>
<button className="hidden md:flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors interactable">
                    View Archive <svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</button>
</div>
<div className="space-y-32">

<div className="group reveal-text">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 relative order-2 lg:order-1 interactable">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] glass-card p-1">
<div className="w-full h-full overflow-hidden rounded-xl">
<img alt="Project" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
<div className="flex items-center gap-3">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-zinc-400">01</span>
<span className="h-px w-12 bg-white/10"></span>
<span className="text-[10px] text-zinc-400 uppercase tracking-widest">Retail</span>
</div>
<h3 className="text-4xl font-light text-white tracking-tight font-display">Lumina Haus</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
                                A minimal e-commerce experience for a high-end lighting manufacturer. We focused on the interplay of light and shadow in the digital space.
                            </p>
<div className="flex flex-wrap gap-2 pt-4">
<span className="text-[10px] text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Shopify</span>
<span className="text-[10px] text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">3D WebGL</span>
</div>
</div>
</div>
</div>

<div className="group reveal-text">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5 space-y-6 lg:pl-10">
<div className="flex items-center gap-3">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-zinc-400">02</span>
<span className="h-px w-12 bg-white/10"></span>
<span className="text-[10px] text-zinc-400 uppercase tracking-widest">Editorial</span>
</div>
<h3 className="text-4xl font-light text-white tracking-tight font-display">Chrono Review</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
                                Redefining the digital reading experience for a watch enthusiast publication. Typography-driven design with micro-interactions.
                            </p>
<div className="flex flex-wrap gap-2 pt-4">
<span className="text-[10px] text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Next.js</span>
<span className="text-[10px] text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Contentful</span>
</div>
</div>
<div className="lg:col-span-7 relative interactable">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] glass-card p-1">
<div className="w-full h-full overflow-hidden rounded-xl">
<img alt="Project" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-white/2 skew-y-3 transform origin-bottom-right pointer-events-none"></div>
<div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center reveal-text">
<svg className="w-12 h-12 mx-auto text-zinc-700 mb-8" data-lucide="quote" strokeWidth="1"></svg>
<h3 className="text-2xl md:text-4xl font-light leading-tight text-white mb-10 tracking-tight font-display">
                "Innate Studios didn't just design a website; they architected a digital identity that feels completely authentic to who we are. The precision is unmatched."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-white/10">
<img alt="Client" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<div className="text-sm text-white font-medium">Marcus Chen</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Founder, Aether Tech</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 reveal-text">
<h2 className="text-3xl font-light text-white tracking-tight mb-4 font-display">Common<br/>Inquiries</h2>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                    Understanding our process and how we collaborate to build exceptional products.
                </p>
</div>
<div className="lg:col-span-8 space-y-4 reveal-text" style={{animationDelay: '0.1s'}}>

<div className="glass-card rounded-lg px-6 py-4 interactable group">
<details className="group/detail">
<summary className="flex items-center justify-between cursor-none text-sm font-medium text-zinc-200 list-none select-none">
                            What is your typical project timeline?
                            <svg className="w-4 h-4 text-zinc-500 group-open/detail:rotate-45 transition-transform" data-lucide="plus" strokeWidth="1.5"></svg>
</summary>
<div className="pt-4 text-xs text-zinc-400 font-light leading-relaxed pr-8">
                            Timelines vary by scope. A branding project typically takes 3-4 weeks, while a full web experience ranges from 6-10 weeks. We value pace without compromising precision.
                        </div>
</details>
</div>

<div className="glass-card rounded-lg px-6 py-4 interactable group">
<details className="group/detail">
<summary className="flex items-center justify-between cursor-none text-sm font-medium text-zinc-200 list-none select-none">
                            Do you work with startups?
                            <svg className="w-4 h-4 text-zinc-500 group-open/detail:rotate-45 transition-transform" data-lucide="plus" strokeWidth="1.5"></svg>
</summary>
<div className="pt-4 text-xs text-zinc-400 font-light leading-relaxed pr-8">
                            Yes, we partner with ambitious early-stage companies that value design as a differentiator. We offer tailored engagement models for high-growth startups.
                        </div>
</details>
</div>

<div className="glass-card rounded-lg px-6 py-4 interactable group">
<details className="group/detail">
<summary className="flex items-center justify-between cursor-none text-sm font-medium text-zinc-200 list-none select-none">
                            What tech stack do you use?
                            <svg className="w-4 h-4 text-zinc-500 group-open/detail:rotate-45 transition-transform" data-lucide="plus" strokeWidth="1.5"></svg>
</summary>
<div className="pt-4 text-xs text-zinc-400 font-light leading-relaxed pr-8">
                            We specialize in the React ecosystem (Next.js), Tailwind CSS for styling, and headless CMS solutions like Sanity or Contentful. For animation, we utilize GSAP and Framer Motion.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-[1400px] mx-auto px-6">
<div className="glass-card rounded-3xl p-1 md:p-2 relative overflow-hidden reveal-text">
<div className="border-shine"></div>
<div className="bg-[#0a0a0c] rounded-2xl p-8 md:p-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-between">
<div>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6 font-display">Let's create something <br/><span className="text-zinc-500">innate.</span></h2>
<p className="text-sm text-zinc-400 font-light max-w-md">
                                Tell us about your project. We respond to all inquiries within 24 hours.
                            </p>
</div>
<div className="mt-12 space-y-4">
<div className="flex items-center gap-4 text-sm text-zinc-300">
<span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<svg className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></svg>
</span>
                                hello@innatestudios.com
                            </div>
<div className="flex items-center gap-4 text-sm text-zinc-300">
<span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<svg className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></svg>
</span>
                                198 West St, Brooklyn, NY
                            </div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors interactable" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors interactable" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors interactable" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Project Details</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors interactable resize-none" placeholder="Tell us about your vision..." rows="4"></textarea>
</div>

<div className="flex items-center gap-3 py-2">
<label className="relative inline-flex items-center cursor-none interactable">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white/20 peer-checked:after:bg-white"></div>
</label>
<span className="text-[10px] text-zinc-500">Subscribe to our newsletter</span>
</div>
<button className="w-full py-4 mt-2 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-zinc-200 transition-colors interactable" type="button">
                            Send Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded flex items-center justify-center bg-white text-black font-bold text-[10px]">I</div>
<span className="text-sm font-medium text-white tracking-tight font-display">Innate Studios</span>
</div>
<p className="text-[10px] text-zinc-600">© 2024 Innate Studios.<br/>All Rights Reserved.</p>
</div>
<div>
<h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4">Sitemap</h4>
<ul className="space-y-2 text-[11px] text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors interactable" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors interactable" href="#">Work</a></li>
<li><a className="hover:text-white transition-colors interactable" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors interactable" href="#">Agency</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4">Socials</h4>
<ul className="space-y-2 text-[11px] text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors interactable" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors interactable" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors interactable" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors interactable" href="#">Awwwards</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4">Legal</h4>
<ul className="space-y-2 text-[11px] text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors interactable" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors interactable" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/5 pt-8">
<h1 className="text-[12vw] leading-none font-display font-light text-zinc-900 select-none pointer-events-none tracking-tighter">INNATE</h1>
</div>
</div>
</footer>


    </>
  );
}
