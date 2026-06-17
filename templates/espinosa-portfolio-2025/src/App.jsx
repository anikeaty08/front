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
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

        // --- Dots Animation Logic (Preserved & Adapted) ---
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
            // Smaller, denser grid for "Linear" feel
            const space = 25; 
            const radius = 1.5; 
            const rows = Math.ceil(canvas.height / space);
            const cols = Math.ceil(canvas.width / space);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * space + space / 2;
                    const y = r * space + space / 2;
                    const dist = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
                    const maxDist = 250;
                    
                    // Subtle interaction
                    let alpha = 0.1; 
                    if (dist < maxDist) {
                        alpha += (1 - dist / maxDist) * 0.4;
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

        // --- Horizontal Scroll Logic (Applied to Graphics Section) ---
        // Targeting the specific ID used in the template
        const workSection = document.querySelector('#graphics'); 
        const track = document.querySelector('#carousel-track');
        const progressBar = document.querySelector('#progress-bar');
        
        let currentScroll = 0;
        let targetScroll = 0;
        let currentProgress = 0;
        let targetProgress = 0;

        const ease = 0.08; 

        function animate() {
            currentScroll += (targetScroll - currentScroll) * ease;
            currentProgress += (targetProgress - currentProgress) * ease;
            
            if(track && progressBar) {
                track.style.transform = `translateX(${currentScroll}px)`;
                progressBar.style.width = `${currentProgress * 100}%`;
            }

            requestAnimationFrame(animate);
        }

        function handleScroll() {
            if (!workSection || !track) return;

            const workRect = workSection.getBoundingClientRect();
            // Calculate width based on track content + padding
            const trackWidth = track.scrollWidth;
            const windowWidth = window.innerWidth;
            // The scrollable distance is the height of the section minus the viewport
            const scrollableHeight = workSection.offsetHeight - window.innerHeight;
            const workScrolled = -workRect.top;
            
            // Only scroll horizontally when the section is in view (sticky behavior)
            if (workRect.top <= 0 && workRect.bottom >= 0) {
                const percentage = Math.min(Math.max(workScrolled / scrollableHeight, 0), 1);
                // Move track leftwards
                targetScroll = -(trackWidth - windowWidth + 48) * percentage; // 48px padding buffer
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
      

<nav className="fixed flex md:px-12 md:py-8 text-neutral-900 mix-blend-multiply w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-center justify-between" style={{transition: 'outline 0.1s ease-in-out'}}>
<a className="lowercase hover:opacity-60 transition-opacity cursor-pointer z-50 text-sm font-semibold tracking-tighter" href="#" onclick="lenis.scrollTo('#intro')" style={{}}>thomas espinosa</a>

<div className="hidden md:flex gap-8 text-xs font-medium tracking-wide lowercase glass-panel px-6 py-3 rounded-full border shadow-sm z-50 border-neutral-200/50" style={{}}>
<button className="hover:text-neutral-500 transition-colors cursor-pointer" onclick="lenis.scrollTo('#about')" style={{}}>about</button>
<button className="hover:text-neutral-500 transition-colors cursor-pointer" onclick="lenis.scrollTo('#graphics')" style={{}}>graphics</button>
<button className="hover:text-neutral-500 transition-colors cursor-pointer" onclick="lenis.scrollTo('#logos')" style={{}}>logos</button>
<button className="hover:text-neutral-500 transition-colors cursor-pointer" onclick="lenis.scrollTo('#digital')" style={{}}>digital</button>
<button className="hover:text-neutral-500 transition-colors cursor-pointer" onclick="lenis.scrollTo('#contact')" style={{}}>contact</button>
</div>

<button className="md:hidden p-2">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
</nav>

<header className="flex flex-col md:px-12 overflow-hidden w-full h-screen pr-6 pl-6 relative" id="intro">

<canvas className="absolute top-0 left-0 w-full h-full -z-10 opacity-60" height="653" id="dots-canvas" width="1056"></canvas>
<div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 -z-20 bg-neutral-100" style={{}}></div>
<div className="flex-grow"></div>
<div className="flex flex-col md:flex-row md:pb-16 w-full border-b pb-12 items-end justify-between border-neutral-200/60" style={{}}>
<div className="reveal-text mb-8 md:mb-0 w-full md:w-1/3">
<p className="md:text-sm leading-relaxed lowercase text-xs font-normal text-neutral-500 tracking-wide max-w-xs mb-8" style={{}}>designer, artist, hobbyist with a passion to create</p>
<div className="flex gap-2 text-xs font-medium gap-x-2 gap-y-2 items-center text-neutral-400" style={{}}>based in iloilo city</div>
</div>
<div className="text-left md:text-right reveal-text delay-100">
<h1 className="md:text-8xl lg:text-9xl lowercase leading-[0.9] text-6xl font-semibold tracking-tighter text-neutral-900" style={{}}>
                    crafting
                    digital
                    <span className="text-neutral-400" style={{}}>silence.</span>
</h1>
</div>
</div>
</header>

<section className="md:py-32 md:px-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 gap-x-12 gap-y-12">

<div className="md:col-span-4 relative">
<div className="sticky top-32">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter lowercase mb-6 text-neutral-900" style={{}}>
                        about me
                    </h2>
<div className="w-12 h-px mb-6 bg-neutral-900" style={{}}></div>
<img alt="Profile" className="aspect-[4/5] hidden md:block w-full object-cover bg-center rounded-sm mb-6 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47d792e4-f4a1-47f9-bc53-1f563145a6d7_800w.jpg"/>
</div>
</div>

<div className="md:col-span-7 md:col-start-6 flex flex-col gap-16 gap-x-16 gap-y-16">
<div className="reveal-text delay-200">
<p className="md:text-xl leading-relaxed lowercase text-lg font-normal tracking-tight text-neutral-600" style={{}}>I am a freelance artist with a passion to create and produce quality artwork and graphic materials. I mainly excel in digital art, graphic designing, and a little bit of branding multimedia.</p>
</div>

<div className="border-t pt-12 border-neutral-200" style={{}}>
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-neutral-400" icon="lucide:graduation-cap" style={{}} width="18"></iconify-icon>
<h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-500" style={{}}>Education</h3>
</div>
<div className="space-y-8">

<div className="group grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 border-b pb-8 gap-x-2 gap-y-2 border-neutral-100" style={{}}>
<div className="">
<h4 className="lowercase text-lg font-medium tracking-tight text-neutral-900" style={{}}>west visayas state university - main campus</h4>
<p className="text-xs mt-1 text-neutral-400" style={{}}>la paz, iloilo city</p>
</div>
<div className="flex flex-col items-start md:items-end">
<span className="lowercase text-sm text-right text-neutral-600" style={{}}>bs entertainment and multimedia computing</span>
<span className="text-xs mt-1 text-neutral-400" style={{}}>2022-2026</span>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 pb-8 border-b border-neutral-100" style={{}}>
<div className="">
<h4 className="lowercase text-lg font-medium tracking-tight text-neutral-900" style={{}}>iloilo national high school</h4>
<p className="text-xs mt-1 text-neutral-400" style={{}}>la paz, iloilo city</p>
</div>
<div className="flex flex-col items-start md:items-end">
<span className="lowercase text-sm text-left text-neutral-600" style={{}}>tvl - ict</span>
<span className="text-xs mt-1 text-neutral-400" style={{}}>2020-2022</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-8 pt-4">
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-neutral-400" style={{}}>Focus</h4>
<ul className="text-sm space-y-2 lowercase font-medium text-neutral-700" style={{}}>
<li className="">digital art</li>
<li className="">branding</li>
<li className="">graphic design and illustration</li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-neutral-400" style={{}}>Tools</h4>
<ul className="text-sm space-y-2 lowercase font-medium text-neutral-700" style={{}}>
<li className="">canva / adobe photoshop</li>
<li className="">autodesk sketchbook / krita</li>
<li className="">figma</li>
</ul>
</div>
</div>
</div>
</div>
</section>


<section className="relative h-[400vh] bg-[#fcfbf9] z-10 border-t border-neutral-200" id="graphics" style={{}}>
<div className="sticky overflow-hidden flex flex-col bg-[#fcfbf9] w-full h-screen top-0 justify-center">
<div className="absolute top-0 left-0 w-full px-6 md:px-12 pt-16 flex justify-between items-start z-10 pointer-events-none">
<div className="flex flex-col">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter lowercase text-neutral-900" style={{}}>graphic designs</h2>
<span className="text-xs mt-2 lowercase text-neutral-400" style={{}}>selected layout &amp; print works</span>
</div>
<div className="flex gap-2 text-neutral-300" style={{}}>
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
</div>

<div className="flex md:gap-16 md:pl-12 will-change-transform w-max mt-12 pl-6 gap-x-8 gap-y-8 items-center" id="carousel-track" style={{transform: 'translateX(0px)'}}>

<article className="group relative w-[80vw] md:w-[30vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-[4px] relative shadow-sm transition-transform duration-500 group-hover:-translate-y-2 bg-neutral-100" style={{}}>
<img alt="Editorial Layout" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-neutral-900/5 transition-colors duration-300 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0605f76c-3f62-41d6-9ffd-51b628bfdae5_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 bg-neutral-900/0" style={{}}></div>
</div>
<div className="mt-6 flex justify-between items-end border-t pt-4 border-neutral-200" style={{}}>
<div className="">
<h3 className="lowercase text-xl font-medium tracking-tight text-neutral-900" style={{}}>webinar series</h3>
<p className="lowercase text-xs mt-1 text-neutral-400" style={{}}>event branding</p>
</div>
<iconify-icon className="group-hover:text-neutral-900 transition-colors text-neutral-300" icon="lucide:arrow-up-right" style={{}} width="18"></iconify-icon>
</div>
</article>

<article className="group relative w-[80vw] md:w-[30vw] shrink-0 cursor-pointer">
<div className="w-full aspect-[3/4] overflow-hidden rounded-[4px] relative shadow-sm transition-transform duration-500 group-hover:-translate-y-2 bg-neutral-100" style={{}}>
<img alt="Abstract Poster" className="transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c760abc1-d40e-49e7-91a0-97189926dfc2_800w.png"/>
</div>
<div className="flex border-t mt-6 pt-4 items-end justify-between border-neutral-200" style={{}}>
<div className="">
<h3 className="lowercase text-xl font-medium tracking-tight text-neutral-900" style={{}}>beyblade tournament</h3>
<p className="lowercase text-xs mt-1 text-neutral-400" style={{}}>event branding</p>
</div>
<iconify-icon className="group-hover:text-neutral-900 transition-colors text-neutral-300" icon="lucide:arrow-up-right" style={{}} width="18"></iconify-icon>
</div>
</article>

<article className="group relative w-[80vw] md:w-[30vw] shrink-0 cursor-pointer pr-12">
<div className="w-full aspect-[3/4] overflow-hidden rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[4px] rounded-br-[4px] relative shadow-sm transition-transform duration-500 group-hover:-translate-y-2 bg-neutral-100" style={{}}>
<img alt="Event Branding" className="transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd868cea-281a-498c-bb8f-5fc8c47e5b33_800w.png"/>
</div>
<div className="mt-6 flex justify-between items-end border-t pt-4 border-neutral-200" style={{}}>
<div className="">
<h3 className="lowercase text-xl font-medium tracking-tight text-neutral-900" style={{}}>yu-gi-oh! tournament</h3>
<p className="text-xs mt-1 lowercase text-neutral-400" style={{}}>event branding</p>
</div>
<iconify-icon className="group-hover:text-neutral-900 transition-colors text-neutral-300" icon="lucide:arrow-up-right" style={{}} width="18"></iconify-icon>
</div>
</article>
</div>
<div className="absolute bottom-12 left-6 md:left-12 w-64 h-px overflow-hidden bg-neutral-200" style={{}}>
<div className="h-full w-0 bg-neutral-900" id="progress-bar" style={{width: '0%'}}></div>
</div>
</div>
</section>

<section className="md:py-32 bg-[#fcfbf9] border-t pt-24 pb-24 border-neutral-200" id="logos" style={{}}>
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter lowercase text-neutral-900" style={{}}>
                    logo archive
                </h2>
<p className="lowercase text-xs max-w-xs text-neutral-400" style={{}}>logo design for the hobby communities i currently reside in</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px border gap-x-px gap-y-px bg-neutral-200 border-neutral-200" style={{}}>

<div className="aspect-square flex flex-col group transition-colors bg-center bg-[#fcfbf9] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e023e23b-ed8e-4bd2-88be-2c843e5935aa_800w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 relative items-center justify-center hover:bg-neutral-50" style={{}}>
<span className="text-[10px] group-hover:opacity-100 transition-opacity uppercase tracking-widest opacity-0 absolute bottom-4 left-4 text-neutral-400" style={{}}>iloilo beyblade community</span>
</div>

<div className="aspect-square flex flex-col group transition-colors bg-[#fcfbf9] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61657e73-156f-4eb6-ad1d-d1cd19e1d810_800w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative items-center justify-center hover:bg-neutral-50" style={{}}>
<span className="text-[10px] group-hover:opacity-100 transition-opacity uppercase tracking-widest opacity-0 absolute bottom-4 left-4 text-neutral-400" style={{}}>Iloilo yu-gi-oh! community</span>
</div>

<div className="aspect-square flex flex-col group transition-colors bg-[#fcfbf9] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cce7d8cb-19c2-4292-a706-597776997b23_800w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative items-center justify-center hover:bg-neutral-50" style={{}}>
<span className="text-[10px] group-hover:opacity-100 transition-opacity uppercase tracking-widest opacity-0 absolute bottom-4 left-4 text-neutral-400" style={{}}>Pokemon tcg iloilo</span>
</div>





</div>
</div>
</section>

<section className="md:py-32 md:px-12 max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 border-neutral-200" id="digital" style={{}}>
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter lowercase text-neutral-900" style={{}}>
                digital art
            </h2>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{}}></span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-400" style={{}}>WebGL Experiments</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer bg-neutral-100" style={{}}>
<img alt="3D Render" className="group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f93bec42-f58d-49fa-b78c-000e199027df_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-neutral-900/80" style={{}}>
<p className="text-sm font-medium text-white">Dinagyang Festival</p>
<p className="text-xs text-white/60">2023</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer lg:translate-y-12 bg-neutral-100" style={{}}>
<img alt="Abstract Geometry" className="group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa42a262-4e48-4612-a493-a0fdcc100b19_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-neutral-900/80" style={{}}>
<p className="text-sm font-medium text-white">Shin Kamen Rider</p>
<p className="text-xs text-white/60">2023</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer bg-neutral-100" style={{}}>
<img alt="Dark Matter" className="group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e2e09ad-e6f3-44b1-8c5f-734d0408d363_800w.png"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-neutral-900/80" style={{}}>
<p className="text-sm font-medium text-white">Reina - Tekken 8</p>
<p className="text-xs text-white/60">2025</p>
</div>
</div>
</div>
</section>

<footer className="relative z-20 pt-12 md:pt-24 px-4 md:px-6 pb-6" id="contact">
<div className="md:rounded-3xl overflow-hidden md:py-32 md:px-12 text-[#fcfbf9] rounded-t-3xl pt-24 pr-6 pb-24 pl-6 shadow-2xl bg-neutral-950" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 gap-x-16 gap-y-16">
<div className="flex flex-col justify-between">
<div className="">
<h3 className="md:text-5xl lg:text-6xl lowercase leading-[0.9] text-3xl font-semibold tracking-tighter mb-8 text-neutral-100" style={{}}>get in touch<br/>for some<br/>impossible.</h3>
<div className="w-16 h-px mb-8 bg-neutral-800" style={{}}></div>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center text-neutral-500 transition-all duration-300 border-neutral-800 hover:bg-white hover:text-black hover:border-white" href="#" style={{}}>
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center text-neutral-500 transition-all duration-300 border-neutral-800 hover:bg-white hover:text-black hover:border-white" href="#" style={{}}>
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center text-neutral-500 transition-all duration-300 border-neutral-800 hover:bg-white hover:text-black hover:border-white" href="#" style={{}}>
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col justify-between h-full gap-12">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold" style={{}}>Name</label>
<input className="focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700 bg-transparent w-full border-b pt-2 pb-2 text-neutral-200 border-neutral-800" placeholder="John Doe" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold" style={{}}>Email</label>
<input className="w-full bg-transparent border-b py-2 focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700 border-neutral-800 text-neutral-200" placeholder="john@example.com" style={{}} type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold" style={{}}>Project Details</label>
<textarea className="w-full bg-transparent border-b py-2 focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700 resize-none border-neutral-800 text-neutral-200" placeholder="Tell me about your idea..." rows="3" style={{}}></textarea>
</div>
<button className="group flex items-center gap-3 text-sm font-medium pt-4 text-white" type="button">
                                Send Inquiry
                                <iconify-icon className="group-hover:translate-x-1 transition-transform text-neutral-500 group-hover:text-white" icon="lucide:arrow-right" style={{}} width="16"></iconify-icon>
</button>
</form>
<div className="pt-12 border-t flex justify-between items-end border-neutral-900" style={{}}>
<div className="text-neutral-500 text-sm" style={{}}>
<p className="">thomasdominic1213@gmail.com</p>
<p className="">+63 966 689 7846</p>
</div>
<span className="text-[10px] uppercase font-semibold tracking-widest text-neutral-700" style={{}}>© 2025 Espinosa </span>
</div>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
