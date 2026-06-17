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



        // --- Smooth Scroll Setup (Lenis) ---
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Soft exponential ease
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // --- Dots Animation Logic (Updated for larger, darker dots) ---
        const canvas = document.getElementById('dots-canvas');
        const ctx = canvas.getContext('2d');
        let mouseX = -100;
        let mouseY = -100;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function drawDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const space = 30;
            const radius = 2; // Doubled size from 1 to 2
            const rows = Math.ceil(canvas.height / space);
            const cols = Math.ceil(canvas.width / space);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * space + space / 2;
                    const y = r * space + space / 2;
                    const dist = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
                    const maxDist = 300;
                    
                    // Increased base alpha and interaction alpha for higher contrast
                    let alpha = 0.2; 
                    if (dist < maxDist) {
                        alpha += (1 - dist / maxDist) * 0.8;
                    }
                    
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
                    ctx.fill();
                }
            }
            requestAnimationFrame(drawDots);
        }
        drawDots();

        // --- Work Scroll Logic ---
        const workSection = document.querySelector('#work');
        const track = document.querySelector('#carousel-track');
        const progressBar = document.querySelector('#progress-bar');
        
        let currentScroll = 0;
        let targetScroll = 0;
        let currentProgress = 0;
        let targetProgress = 0;

        const ease = 0.08; 

        function animate() {
            // Work Animation
            currentScroll += (targetScroll - currentScroll) * ease;
            currentProgress += (targetProgress - currentProgress) * ease;
            track.style.transform = `translateX(${currentScroll}px)`;
            progressBar.style.width = `${currentProgress * 100}%`;

            requestAnimationFrame(animate);
        }

        function handleScroll() {
            // Work Logic
            const workRect = workSection.getBoundingClientRect();
            const trackWidth = track.scrollWidth;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const scrollableHeight = workSection.offsetHeight - windowHeight;
            const workScrolled = -workRect.top;
            
            if (workRect.top <= 0 && workRect.bottom >= 0) {
                const percentage = Math.min(Math.max(workScrolled / scrollableHeight, 0), 1);
                targetScroll = -(trackWidth - windowWidth) * percentage;
                targetProgress = percentage;
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        
        animate();
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-[#fcfbf9]">
<a className="lowercase hover:opacity-70 transition-opacity text-base font-semibold tracking-tighter cursor-pointer" href="#" onclick="lenis.scrollTo('#hero')">
            faux.moni
        </a>
<div className="flex gap-8 text-xs font-medium tracking-wide lowercase">
<button className="hover:opacity-60 transition-opacity cursor-pointer" onclick="lenis.scrollTo('#work')">work</button>
<button className="hover:opacity-60 transition-opacity cursor-pointer" onclick="lenis.scrollTo('#goods')">goods</button>
<button className="hover:opacity-60 transition-opacity cursor-pointer" onclick="lenis.scrollTo('#studio')">studio</button>
<button className="hover:opacity-60 transition-opacity cursor-pointer" onclick="lenis.scrollTo('#contact')">contact</button>
</div>
</nav>

<header className="h-screen flex flex-col w-full px-6 md:px-12 relative overflow-hidden" id="hero">

<canvas className="absolute top-0 left-0 w-full h-full -z-10" id="dots-canvas"></canvas>
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-neutral-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 -z-20 opacity-40"></div>

<div className="flex-grow"></div>

<div className="flex flex-col md:flex-row justify-between items-end w-full pb-12 md:pb-16 border-b border-neutral-200">
<div className="reveal-text mb-8 md:mb-0 w-full md:w-auto">
<p className="text-xs md:text-sm font-normal leading-relaxed text-neutral-500 lowercase max-w-xs tracking-wide mb-8">
                    digital craftsman &amp; visual director based in berlin. focusing on interactive experiences and brand identity.
                </p>
<button className="group inline-flex items-center gap-2 text-[10px] md:text-xs font-medium uppercase tracking-widest border-b border-neutral-300 pb-1 transition-colors hover:border-neutral-900 hover:text-neutral-600 cursor-pointer" onclick="lenis.scrollTo('#work')">
                    Selected Projects
                    <iconify-icon className="group-hover:translate-y-0.5 transition-transform" icon="lucide:arrow-down" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="text-left md:text-right reveal-text delay-100">
<h1 className="text-6xl md:text-8xl lg:text-9xl lowercase leading-[0.85] font-semibold text-neutral-900 tracking-tighter">
                    doing art like a<br/>
                    f*cking alien since<br/>
<span className="text-neutral-300">2003</span>
</h1>
</div>
</div>

<div className="w-full py-6 flex justify-between items-center reveal-text delay-200">
<div className="flex gap-12">
<div className="hidden md:block">
<span className="text-xs font-medium lowercase flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        available for work
                    </span>
</div>
</div>
<div className="text-[10px] text-neutral-400 uppercase tracking-widest animate-pulse">
                SCROLL TO EXPLORE
            </div>
</div>
</header>

<section className="relative h-[450vh] bg-[#fcfbf9] z-0" id="work">
<div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#fcfbf9]">
<div className="absolute top-0 left-0 w-full px-6 md:px-12 pt-16 md:pt-24 flex justify-between items-start z-10 pointer-events-none">
<span className="text-[10px] font-medium tracking-widest uppercase opacity-40">Selected Projects</span>
<span className="text-[10px] font-medium tracking-widest uppercase opacity-40">01 — 05</span>
</div>
<div className="flex items-center gap-6 md:gap-12 pl-6 md:pl-12 w-max will-change-transform" id="carousel-track">

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded-tl-[200px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[200px] bg-neutral-100 relative">
<img alt="Monospace" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight lowercase text-neutral-900">monospace</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase">branding / interior</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded-tl-[200px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[200px] bg-neutral-100 relative">
<img alt="Objet Noir" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight lowercase text-neutral-900">objet noir</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase">art direction</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded-tl-[200px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[200px] bg-neutral-100 relative">
<img alt="Vogue Edit" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight lowercase text-neutral-900">vogue edit</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase">editorial</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded-tl-[200px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[200px] bg-neutral-100 relative">
<img alt="Clay Forms" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight lowercase text-neutral-900">clay forms</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase">ceramics / 3d</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[80vw] md:w-[35vw] shrink-0 cursor-pointer pr-12 md:pr-24">
<div className="w-full aspect-[3/4] overflow-hidden rounded-tl-[200px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[200px] bg-neutral-100 relative">
<img alt="Liquid Oil" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight lowercase text-neutral-900">liquid</h3>
<p className="text-xs text-neutral-400 mt-1 lowercase">visual design</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>
</div>
<div className="absolute bottom-8 left-6 md:left-12 w-32 h-0.5 bg-neutral-200 overflow-hidden">
<div className="h-full bg-neutral-900 w-0" id="progress-bar"></div>
</div>
</div>
</section>

<section className="relative h-[200vh] z-10 bg-[#fcfbf9]" id="goods">
<div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
<div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-12 md:py-0">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-4">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter lowercase text-neutral-900">
                        toy archive
                    </h2>
<div className="flex items-center gap-4">
<span className="text-[10px] font-medium tracking-widest uppercase text-neutral-500">Edition 01</span>
<div className="w-16 h-px bg-neutral-200"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-square bg-neutral-100 rounded-[100px] overflow-hidden mb-6">
<img alt="ETZAO Alien" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="absolute top-6 right-6">
<span className="bg-neutral-900 text-[#fcfbf9] text-[10px] uppercase font-semibold tracking-widest px-3 py-1.5 rounded-full">Sold Out</span>
</div>
</div>
<div className="flex justify-between items-baseline px-2">
<h3 className="text-lg font-medium lowercase tracking-tight">etzao</h3>
<span className="text-sm font-normal text-neutral-400 line-through">€100.00</span>
</div>
<p className="text-xs text-neutral-400 mt-1 lowercase px-2">glossy / prototype</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-square bg-neutral-100 rounded-[100px] overflow-hidden mb-6">
<img alt="Designer Toy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-6 right-6">
<span className="bg-neutral-900 text-[#fcfbf9] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full">Sold Out</span>
</div>
</div>
<div className="flex justify-between items-baseline px-2">
<h3 className="text-lg font-medium lowercase tracking-tight">mecha boy v3</h3>
<span className="text-sm font-normal text-neutral-400 line-through">€180.00</span>
</div>
<p className="text-xs text-neutral-400 mt-1 lowercase px-2">resin / hand-painted</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-square bg-neutral-100 rounded-[100px] overflow-hidden mb-6">
<img alt="Neon Abstract" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex justify-between items-baseline px-2">
<h3 className="text-lg font-medium lowercase tracking-tight">astro buddy</h3>
<span className="text-sm font-normal text-neutral-400">€95.00</span>
</div>
<p className="text-xs text-neutral-400 mt-1 lowercase px-2">pvc / soft touch</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 pt-0 -mt-12 md:-mt-24" id="studio">
<div className="studio-card rounded-t-3xl md:rounded-t-[3rem] bg-neutral-950 text-[#fcfbf9] overflow-hidden min-h-screen py-24 md:py-32 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
<div>
<h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter lowercase leading-tight mb-8">
                            design is intelligence made visible.
                        </h3>
<div className="w-16 h-px mb-8 bg-neutral-700"></div>
<p className="text-neutral-500 text-sm tracking-wide uppercase">Manifesto 01</p>
</div>
<div className="flex flex-col justify-between h-full">
<p className="text-base md:text-lg font-light leading-relaxed lowercase text-neutral-400 tracking-wide max-w-lg">
                            we believe in the power of reduction. stripping away the non-essential to reveal the core truth of a brand. our approach is rooted in typographic rigor and spatial awareness.
                        </p>
<div className="grid grid-cols-2 gap-12 mt-20 border-t border-neutral-800 pt-12">
<div>
<span className="block text-[10px] font-semibold tracking-widest text-neutral-500 uppercase mb-6">Services</span>
<ul className="space-y-3 text-sm font-normal lowercase text-neutral-300">
<li className="flex items-center gap-3 group">
<iconify-icon className="opacity-30 group-hover:opacity-100 transition-opacity text-neutral-500 group-hover:text-white" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon> 
                                        art direction
                                    </li>
<li className="flex items-center gap-3 group">
<iconify-icon className="opacity-30 group-hover:opacity-100 transition-opacity text-neutral-500 group-hover:text-white" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon> 
                                        digital design
                                    </li>
<li className="flex items-center gap-3 group">
<iconify-icon className="opacity-30 group-hover:opacity-100 transition-opacity text-neutral-500 group-hover:text-white" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon> 
                                        development
                                    </li>
<li className="flex items-center gap-3 group">
<iconify-icon className="opacity-30 group-hover:opacity-100 transition-opacity text-neutral-500 group-hover:text-white" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon> 
                                        photography
                                    </li>
</ul>
</div>
<div>
<span className="block text-[10px] font-semibold tracking-widest text-neutral-500 uppercase mb-6">Clients</span>
<ul className="space-y-3 text-sm font-normal lowercase text-neutral-300">
<li>linear</li>
<li>vercel</li>
<li>stripe</li>
<li>acme corp</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-32 pt-24 border-t border-neutral-800" id="contact">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
<div className="max-w-3xl">
<h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter lowercase mb-8 text-[#fcfbf9]">
                                have a project<br/>in mind?
                            </h4>
<a className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium transition-all lowercase border-b border-neutral-700 pb-1 text-neutral-400 hover:text-white hover:border-white hover:gap-4 group" href="mailto:hello@faux.moni">
                                hello@faux.moni 
                                <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
<div className="flex gap-4">
<a className="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<span className="text-[10px] font-medium uppercase tracking-widest text-neutral-600">
                                © 2024 faux.moni
                            </span>
</div>
</div>
</div>
</footer>
</div>
</section>



    </>
  );
}
