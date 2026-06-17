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



        window.addEventListener("load", () => {
            gsap.registerPlugin(ScrollTrigger);

            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true,
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // TIMECODE
            const timecode = document.getElementById('timecode');
            setInterval(() => {
                const now = new Date();
                const ms = Math.floor(now.getMilliseconds() / 10).toString().padStart(2, '0');
                if(timecode) timecode.innerText = now.toLocaleTimeString('en-GB') + ":" + ms;
            }, 40);

            // ENTRANCE
            const tl = gsap.timeline();
            tl.from(".hero-line", { y: 150, duration: 1.5, stagger: 0.15, ease: "power4.out", delay: 0.2 })
              .from(".hero-sub", { opacity: 0, y: 20, duration: 1, ease: "power3.out" }, "-=1")
              .from("nav", { y: -50, opacity: 0, duration: 1, ease: "power3.out" }, "-=1.2")
              .from(".hero-img", { scale: 1.2, opacity: 0, duration: 2, ease: "power2.out" }, "-=2");

            // SKEW TEXT
            let proxy = { skew: 0 }, skewSetter = gsap.quickSetter(".skew-on-scroll", "skewY", "deg"), clamp = gsap.utils.clamp(-10, 10);
            ScrollTrigger.create({
                onUpdate: (self) => {
                    let skew = clamp(self.getVelocity() / -300);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
                    }
                }
            });

            // ARCHIVE CARD HOVER
            document.querySelectorAll('.archive-card').forEach(card => {
                card.addEventListener('mouseenter', () => gsap.to(card.querySelector('.archive-thumb'), { scale: 1.1, duration: 0.5 }));
                card.addEventListener('mouseleave', () => gsap.to(card.querySelector('.archive-thumb'), { scale: 1, duration: 0.5 }));
            });

            // PROCESS INTERACTION
            const bgLayers = document.querySelectorAll('.process-bg-layer');
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>[]";
            
            function scrambleText(element) {
                const originalText = element.getAttribute('data-original') || element.innerText;
                if(!element.getAttribute('data-original')) element.setAttribute('data-original', originalText);
                let iterations = 0;
                const interval = setInterval(() => {
                    element.innerText = originalText.split("").map((l, i) => {
                        if(i < iterations) return originalText[i];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join("");
                    if(iterations >= originalText.length) clearInterval(interval);
                    iterations += 1/2; 
                }, 30);
            }

            document.querySelectorAll('.process-step').forEach(step => {
                step.addEventListener('mouseenter', () => {
                    const targetId = step.getAttribute('data-bg');
                    bgLayers.forEach(layer => layer.classList.remove('active'));
                    const targetBg = document.getElementById(targetId);
                    if(targetBg) targetBg.classList.add('active');
                    const header = step.querySelector('.scramble-text');
                    if(header) scrambleText(header);
                });
            });
            
            document.getElementById('process').addEventListener('mouseleave', () => {
                 bgLayers.forEach(layer => layer.classList.remove('active'));
                 document.querySelector('.process-bg-layer').classList.add('active'); 
            });

            // MANIFESTO FLASHLIGHT
            const flashlight = document.getElementById('flashlight');
            const manifestoSection = document.getElementById('manifesto');
            
            document.addEventListener('mousemove', (e) => {
                gsap.to(flashlight, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
                gsap.to('#preview-img', { x: e.clientX + 20, y: e.clientY + 20, duration: 0.6, ease: "power3.out" });
            });

            manifestoSection.addEventListener('mouseenter', () => gsap.to(flashlight, { opacity: 1, duration: 0.3 }));
            manifestoSection.addEventListener('mouseleave', () => gsap.to(flashlight, { opacity: 0, duration: 0.3 }));
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
      

<div className="noise"></div>
<div className="bg-grid"></div>
<img alt="Preview" className="hover-reveal-img" id="preview-img" src=""/>
<div className="flashlight-mask" id="flashlight"></div>

<nav className="fixed top-0 left-0 w-full px-6 py-5 flex justify-between items-start z-50 mix-blend-difference text-white">
<div className="flex flex-col">
<div className="heading-font text-2xl font-bold tracking-tighter leading-none">CINE—LAB</div>
<div className="mono text-[10px] text-gray-400 mt-1 tracking-widest">EST. 2024</div>
</div>
<div className="hidden md:flex gap-12 mono text-xs uppercase tracking-widest items-center">
<div className="flex items-center gap-2 text-[var(--accent-color)]">
<div className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse"></div>
<span className="">Lab Online</span>
</div>
<a className="hover:text-[var(--accent-color)] transition-colors" href="#process">Process</a>
<a className="hover:text-[var(--accent-color)] transition-colors" href="#stream">Stream</a>
<a className="hover:text-[var(--accent-color)] transition-colors" href="#archive">Archive</a>
<a className="hover:text-[var(--accent-color)] transition-colors" href="#manifesto">Ethos</a>
<a className="btn-lab px-5 py-2 rounded-full text-xs" href="#contact">Start Project <span className="btn-text"></span></a>
</div>
<div className="md:hidden text-xs uppercase mono border border-white/20 px-3 py-1 rounded">Menu</div>
</nav>

<main className="">

<section className="h-screen relative flex flex-col justify-between p-6 overflow-hidden border-b border-white/10 bg-black">
<div className="hero-img-container">
<img alt="Cinema Camera" className="hero-img" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=2560&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#050505_120%)]"></div>
</div>
<div className="absolute top-1/2 left-6 -translate-y-1/2 hidden md:flex flex-col gap-4 z-10 mono text-[10px] text-gray-500 writing-vertical-lr opacity-60">
<span>ISO 500T / 5219</span>
<span className="">TEMP 24.5°C</span>
<span>PROCESS ECN-2</span>
</div>
<div className="absolute right-6 top-1/3 flex flex-col items-end z-10 mono text-xs text-[var(--accent-color)]">
<span id="timecode">00:00:00:00</span>
<span className="text-gray-500 mt-1">REC ●</span>
</div>
<div className="relative z-10 mt-auto mb-10 md:mb-20 ml-0 md:ml-12">
<div className="line-wrapper">
<h1 className="hero-line text-[14vw] leading-[0.8] font-bold tracking-tighter mix-blend-screen text-white">ANALOG</h1>
</div>
<div className="line-wrapper flex items-center gap-4 md:gap-10">
<h1 className="hero-line text-[14vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">RESEARCH</h1>
<div className="hidden md:block w-32 h-[1px] bg-[var(--accent-color)] mt-8"></div>
<p className="hero-sub mono text-xs md:text-sm max-w-xs text-gray-400 mt-4 leading-relaxed uppercase">
                        We bridge the gap between photochemical tradition and digital precision. A full-service cinema laboratory.
                    </p>
</div>
</div>
</section>

<section className="relative min-h-screen py-32 overflow-hidden border-b border-white/5 bg-[#050505]" id="process">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="process-bg-layer active bg-[#050505]"></div>
<img alt="Chemicals" className="process-bg-layer object-cover w-full h-auto" id="bg-step-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3bf2a64-4eb0-40b9-9f2d-2ad4303037aa_3840w.webp" style={{}}/>
<img alt="Laser" className="process-bg-layer object-cover w-full h-auto" id="bg-step-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9ec54d2-3cc5-4bae-ac6d-4b4eef75799f_3840w.webp" style={{}}/>
<img alt="Color" className="process-bg-layer" id="bg-step-3" src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&amp;w=2000"/>
<img alt="Server" className="process-bg-layer object-cover w-full h-auto" id="bg-step-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3bf2a64-4eb0-40b9-9f2d-2ad4303037aa_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
</div>
<div className="relative z-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4 h-full">
<div className="sticky top-32">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-[1px] bg-[var(--accent-color)]"></div>
<span className="mono text-xs text-[var(--accent-color)] uppercase tracking-widest">Workflow</span>
</div>
<h2 className="text-6xl md:text-7xl heading-font mb-6 leading-none text-white">THE<br/>LABORATORY</h2>
<p className="mono text-sm text-gray-400 max-w-xs leading-relaxed">Precision engineering meets artistic intent. Explore our end-to-end analog pipeline.</p>
</div>
</div>
<div className="md:col-span-8 flex flex-col">
<div className="process-step py-8 cursor-pointer group" data-bg="bg-step-1">
<div className="flex justify-between items-baseline mb-2"><h3 className="text-4xl md:text-5xl heading-font text-gray-400 group-hover:text-white transition-colors scramble-text">IMMERSION</h3><span className="step-number mono text-xl text-gray-600 transition-colors">01</span></div>
<p className="mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-[var(--accent-color)] transition-colors">Chemical Development</p>
<div className="step-details">
<p className="text-gray-300 mt-6 max-w-xl leading-relaxed">Your negative enters our Photomec ECN-2 processor. We utilize Kodak-certified chemistry, monitored in real-time.</p>
</div>
</div>
<div className="process-step py-8 cursor-pointer group" data-bg="bg-step-2"><div className="flex justify-between items-baseline mb-2"><h3 className="text-4xl md:text-5xl heading-font text-gray-400 group-hover:text-white transition-colors scramble-text">DIGITIZATION</h3><span className="step-number mono text-xl text-gray-600 transition-colors">02</span></div><p className="mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-[var(--accent-color)] transition-colors">Scanning</p><div className="step-details"><p className="text-gray-300 mt-6 max-w-xl leading-relaxed">6.5K HDR Arriscan XT.</p></div></div>
<div className="process-step py-8 cursor-pointer group" data-bg="bg-step-3"><div className="flex justify-between items-baseline mb-2"><h3 className="text-4xl md:text-5xl heading-font text-gray-400 group-hover:text-white transition-colors scramble-text">MANIPULATION</h3><span className="step-number mono text-xl text-gray-600 transition-colors">03</span></div><p className="mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-[var(--accent-color)] transition-colors">Color Grading</p><div className="step-details"><p className="text-gray-300 mt-6 max-w-xl leading-relaxed">DCI-P3 Color Science.</p></div></div>
<div className="process-step py-8 cursor-pointer group" data-bg="bg-step-4"><div className="flex justify-between items-baseline mb-2"><h3 className="text-4xl md:text-5xl heading-font text-gray-400 group-hover:text-white transition-colors scramble-text">PRESERVATION</h3><span className="step-number mono text-xl text-gray-600 transition-colors">04</span></div><p className="mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-[var(--accent-color)] transition-colors">Archival</p><div className="step-details"><p className="text-gray-300 mt-6 max-w-xl leading-relaxed">LTO-8 Cold Storage.</p></div></div>
</div>
</div>
</section>

<section className="" id="stream">
<div className="absolute top-10 left-6 md:left-20 flex items-center gap-4 z-30 pointer-events-none">
<div className="w-12 h-[1px] bg-[var(--accent-color)]"></div>
<span className="mono text-xs text-[var(--accent-color)] uppercase tracking-widest">Data Stream</span>
</div>

<div className="stream-row row-left">
<div className="stream-track">
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04cf950b-7612-44ac-a767-6b8b9dc3e83b_800w.jpg"/>
<span className="stream-text">RAW DATA</span>
<span className="stream-code">XR-990</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=400"/>
<span className="stream-text">NEGATIVE</span>
<span className="stream-code">KODAK</span>

<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c59ec7be-cfcf-4651-b25c-6f5baded8d17_800w.jpg"/>
<span className="stream-text">RAW DATA</span>
<span className="stream-code">XR-990</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=400"/>
<span className="stream-text">NEGATIVE</span>
<span className="stream-code">KODAK</span>
</div>
</div>

<div className="stream-row row-right">
<div className="stream-track">
<span className="stream-text">DEVELOPMENT</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&amp;w=400"/>
<span className="stream-code">ECN-2</span>
<span className="stream-text">PROCESS</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&amp;w=400"/>

<span className="stream-text">DEVELOPMENT</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&amp;w=400"/>
<span className="stream-code">ECN-2</span>
<span className="stream-text">PROCESS</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&amp;w=400"/>
</div>
</div>

<div className="stream-row row-left">
<div className="stream-track">
<span className="stream-code">SCAN.LOG</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/187a0108-cdee-4c0b-9d37-e438811c787e_800w.jpg"/>
<span className="stream-text">OPTICAL</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6191da6-cb07-4c17-b085-36202e1b172b_800w.jpg"/>
<span className="stream-text">TRANSFER</span>

<span className="stream-code">SCAN.LOG</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=400"/>
<span className="stream-text">OPTICAL</span>
<img className="stream-img object-cover w-[300px] h-[200px] flex-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c03ed2fe-b5ae-4807-b063-a69067689369_800w.jpg"/>
<span className="stream-text">TRANSFER</span>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 bg-[#050505] relative z-20 border-b border-white/5" id="archive">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
<div>
<h2 className="text-6xl md:text-8xl heading-font text-white font-bold -mb-4 skew-on-scroll">ARCHIVE</h2>
<p className="mono text-xs text-gray-500 mt-6">DATABASE ACCESS: LEVEL 4</p>
</div>
<div className="flex gap-4 mono text-[10px] text-gray-400 mt-8 md:mt-0">
<span className="text-[var(--accent-color)] cursor-pointer">[ALL]</span>
<span className="hover:text-white cursor-pointer hover:underline">[16MM]</span>
<span className="hover:text-white cursor-pointer hover:underline">[35MM]</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="archive-card group">
<div className="archive-thumb-wrap">
<img alt="Neon" className="archive-thumb object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14ce38c5-165b-458e-98d6-3b5cbb6b91dc_1600w.webp" style={{}}/>
</div>
<div className="p-6">
<h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">NEON DRIFTER</h3>
<span className="archive-tag mono">16MM / 5219</span>
</div>
</div>

<div className="archive-card group">
<div className="archive-thumb-wrap">
<img alt="Void" className="archive-thumb object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dcf1acc-de58-41a8-a3cd-2bb642c6e66e_1600w.webp" style={{}}/>
</div>
<div className="p-6">
<h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">VOID RUNNER</h3>
<span className="archive-tag mono">35MM / B&amp;W</span>
</div>
</div>

<div className="archive-card group">
<div className="archive-thumb-wrap">
<img alt="Horizon" className="archive-thumb object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6398c31-e7f2-45ea-9396-0967a4ff0c97_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">HORIZON LOST</h3>
<span className="archive-tag mono">65MM / IMAX</span>
</div>
</div>

<div className="archive-card group">
<div className="archive-thumb-wrap">
<img alt="Static" className="archive-thumb object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f447586-99ce-4695-80ef-7e6a5ba06c4d_1600w.webp"/>
</div>
<div className="p-6">
<h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">STATIC NOISE</h3>
<span className="archive-tag mono">S16 / BLEACH</span>
</div>
</div>

<div className="archive-card group">
<div className="archive-thumb-wrap">
<img alt="Tokyo" className="archive-thumb" src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&amp;w=800"/>
</div>
<div className="p-6">
<h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">TOKYO DRIFT</h3>
<span className="archive-tag mono">35MM / 5219</span>
</div>
</div>

<div className="archive-card group">
<div className="archive-thumb-wrap">
<img alt="Desert" className="archive-thumb object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a09bc92-f4bc-4e56-a19f-81c007a9fb04_1600w.webp"/>
</div>
<div className="p-6">
<h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">DESERT ECHO</h3>
<span className="archive-tag mono">16MM / 50D</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black relative flex items-center justify-center z-20" id="manifesto">
<div className="text-center relative z-10 max-w-5xl mx-auto">
<p className="mono text-[var(--accent-color)] text-sm mb-8 tracking-widest">[ THE ETHOS ]</p>
<h2 className="text-5xl md:text-8xl heading-font leading-tight text-[#1a1a1a] manifesto-text">
<span className="manifesto-span">WE</span> <span className="manifesto-span">DO</span> <span className="manifesto-span">NOT</span> <span className="manifesto-span">FIX</span> <span className="manifesto-span">IT</span> <span className="manifesto-span">IN</span> <span className="manifesto-span">POST.</span><br/>
<span className="manifesto-span">WE</span> <span className="manifesto-span">CAPTURE</span> <span className="manifesto-span">IT</span> <span className="manifesto-span">IN</span> <span className="manifesto-span">CAMERA.</span>
</h2>
<div className="mt-16 border-t border-white/10 pt-8 flex justify-center gap-12 mono text-xs text-gray-600">
<span className="">FILM IS FINITE</span>
<span>GRAIN IS TEXTURE</span>
<span>LIGHT IS DATA</span>
</div>
</div>
</section>
</main>

<footer className="bg-[#050505] flex flex-col justify-between p-6 md:p-12 relative overflow-hidden z-20 border-t border-white/5" id="contact">
<div className="footer-bg-text">START NOW</div>
<div className="flex flex-col md:flex-row justify-between items-start z-10 relative">
<div>
<h2 className="text-4xl heading-font uppercase mb-4 text-white">Ready to Develop?</h2>
<p className="mono text-sm text-gray-500 max-w-sm">Send us your reels. We handle logistics worldwide.</p>
</div>
<div className="text-right mt-8 md:mt-0">
<p className="mono text-xs text-[var(--accent-color)] uppercase mb-2">Location</p>
<p className="text-xl font-light text-white">85 N 3rd St, Brooklyn<br/>New York, 11249</p>
</div>
</div>
<div className="flex flex-col items-center justify-center flex-grow z-10 relative mt-24 mb-24">
<a className="group relative inline-block" href="mailto:lab@cine-lab.com">
<span className="heading-font text-[12vw] md:text-[10vw] leading-none text-white group-hover:text-[var(--accent-color)] transition-colors duration-300">
                    GET A QUOTE
                </span>
<div className="w-full h-[4px] bg-[var(--accent-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</a>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6 z-10 relative">
<p className="mono text-xs text-gray-500">© 2025 CINE-LAB.</p>
<div className="flex gap-6 font-mono text-xs uppercase text-gray-400">
<a className="hover:text-white" href="#">Instagram</a>
<a className="hover:text-white" href="#">Vimeo</a>
</div>
</div>
</footer>






    </>
  );
}
