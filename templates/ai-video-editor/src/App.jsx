import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Spotlight Effect
        const spotlight = document.getElementById('spotlight');
        document.addEventListener('mousemove', (e) => {
            spotlight.style.setProperty('--x', e.clientX + 'px');
            spotlight.style.setProperty('--y', e.clientY + 'px');
        });

        // Widget Logic
        document.addEventListener("DOMContentLoaded", () => {
            // Radial Widget (Top)
            const widget = document.getElementById('widget');
            const recordBtn = document.getElementById('recordBtn');
            const statusText = document.getElementById('statusText');
            const timeCode = document.getElementById('timeCode');
            const radialCanvas = document.getElementById('radial-canvas');
            
            if(radialCanvas) {
                const rCtx = radialCanvas.getContext('2d');
                let isRecording = true;
                let startTime = Date.now();
                let timerInterval;
                
                const tickCount = 120;
                const cx = 140;
                const cy = 140;
                const baseRadius = 105;
                const baseTickLength = 4;
                
                function drawRadialTicks() {
                    rCtx.clearRect(0, 0, 280, 280);
                    const time = Date.now() * 0.002;
                    for (let i = 0; i < tickCount; i++) {
                        const angle = (i / tickCount) * Math.PI * 2;
                        let noise = 0;
                        if (isRecording) {
                            noise = Math.sin(i * 0.2 + time) * Math.cos(i * 0.1 - time * 2) * 32;
                            noise += Math.random() * 10;
                        } else {
                            noise = Math.sin(i * 0.1 + time) * 5;
                        }
                        const tickLength = baseTickLength + Math.max(0, noise);
                        rCtx.save();
                        rCtx.translate(cx, cy);
                        rCtx.rotate(angle);
                        rCtx.beginPath();
                        rCtx.moveTo(0, -baseRadius);
                        rCtx.lineTo(0, -baseRadius - tickLength);
                        rCtx.strokeStyle = isRecording ? 'rgba(255,255,255,0.85)' : '#8E9299';
                        rCtx.lineWidth = 1.5;
                        rCtx.stroke();
                        rCtx.restore();
                    }
                }
                
                function updateViz() {
                    drawRadialTicks();
                    requestAnimationFrame(updateViz);
                }
                
                function updateTimer() {
                    const now = Date.now();
                    const diff = now - startTime;
                    const ms = Math.floor((diff % 1000) / 10);
                    const s = Math.floor((diff / 1000) % 60);
                    const m = Math.floor((diff / (1000 * 60)) % 60);
                    const h = Math.floor((diff / (1000 * 60 * 60)));
                    const pad = (n) => n.toString().padStart(2, '0');
                    timeCode.innerText = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(ms)}`;
                }

                widget.classList.add('is-recording');
                statusText.innerHTML = "Secure link established.<br>Capturing input stream...";
                timerInterval = setInterval(updateTimer, 10);
                updateViz();

                recordBtn.addEventListener('click', () => {
                    isRecording = !isRecording;
                    if (isRecording) {
                        widget.classList.add('is-recording');
                        statusText.innerHTML = "Secure link established.<br>Capturing input stream...";
                        startTime = Date.now();
                        timerInterval = setInterval(updateTimer, 10);
                    } else {
                        widget.classList.remove('is-recording');
                        statusText.innerHTML = "Capture stopped.<br>Data encrypted and stored.";
                        clearInterval(timerInterval);
                    }
                });
            }

            // Voice Command Widget (New Section)
            const waveformVoice = document.getElementById('waveform-voice');
            if (waveformVoice) {
                const barCount = 45;
                for (let i = 0; i < barCount; i++) {
                    const bar = document.createElement('div');
                    bar.className = 'wave-bar';
                    if (i < 18) bar.classList.add('active');
                    
                    const h = Math.random() * 24 + 4; // adjusted height for container
                    bar.style.height = h + 'px';
                    
                    waveformVoice.appendChild(bar);
                }
                
                // Simple animation for bars
                setInterval(() => {
                     const bars = waveformVoice.getElementsByClassName('wave-bar');
                     const idx = Math.floor(Math.random() * bars.length);
                     const h = Math.random() * 24 + 4;
                     bars[idx].style.height = h + 'px';
                }, 100);
            }
        });

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Initial Hero Reveal
            const tl = gsap.timeline();
            tl.from(".gsap-header", { y: -20, opacity: 0, duration: 1, ease: "power3.out" })
            .from(".gsap-title-line", { y: 100, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" }, "-=0.5")
            .to(".gsap-hero-el", { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.8")
            .to(".gsap-visual", { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out" }, "-=1");

            // Floating Element Loop
            gsap.to(".gsap-visual-float", { y: -10, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" });

            // List Items Scroll Trigger
            gsap.utils.toArray('.gsap-list-item').forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: { trigger: item, start: "top 90%" },
                    y: 30, opacity: 0, duration: 0.6, delay: i * 0.1, ease: "power2.out"
                });
            });

            // Manifesto Section
            gsap.from(".gsap-manifesto-text", {
                scrollTrigger: { trigger: ".gsap-manifesto-text", start: "top 80%" },
                y: 40, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out"
            });

            // Features Grid
            gsap.from(".gsap-feature-card", {
                scrollTrigger: { trigger: ".gsap-feature-card", start: "top 85%" },
                scale: 0.8, opacity: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)"
            });
            
            // Widget Animation Trigger
            gsap.from(".widget-container", {
                scrollTrigger: { trigger: ".widget-container", start: "top 85%" },
                y: 50, opacity: 0, duration: 1, ease: "power3.out"
            });
            
             // Voice Section Animation
             gsap.from(".gsap-voice-section", {
                scrollTrigger: { trigger: ".gsap-voice-section", start: "top 80%" },
                opacity: 0, y: 30, duration: 1, ease: "power2.out"
            });
             gsap.from("#voiceWidget", {
                scrollTrigger: { trigger: ".gsap-voice-section", start: "top 70%" },
                scale: 0.9, opacity: 0, duration: 0.8, delay: 0.2, ease: "back.out(1.5)"
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen pointer-events-none mix-blend-normal z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="aNQ1HJcO2IvNyDCGls8J"></div>

</div></div>

<div className="spotlight" id="spotlight" style={{-X: '1855px', -Y: '735px'}}></div>
<div className="ambient-glow"></div>
<div className="max-w-[1400px] mx-auto min-h-screen border-x border-[#1a1a1a] relative z-10 bg-[#050505]/80 backdrop-blur-[2px]">

<div className="ticker-wrap border-b border-[#1a1a1a] py-2 bg-black/40 relative z-20">
<div className="ticker-content text-xs font-medium text-gray-500 tracking-wide uppercase font-sans">
<span className="mx-6 font-sans">✨ New: Auto-B-Roll Generation live</span> • 
                <span className="mx-6 font-sans">Creator Fund: $1M Distributed</span> • 
                <span className="mx-6 font-sans">Render speeds up by 40%</span> • 
                <span className="mx-6 font-sans">Collaboration mode now in beta</span> • 
                <span className="mx-6 font-sans">✨ New: Auto-B-Roll Generation live</span> • 
                <span className="mx-6 font-sans">Creator Fund: $1M Distributed</span> • 
                <span className="mx-6 font-sans">Render speeds up by 40%</span> • 
                <span className="mx-6 font-sans">Collaboration mode now in beta</span>
</div>
</div>

<header className="gsap-header flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a] sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="flex items-center gap-2 text-xl font-display font-bold tracking-tight font-sans">
<div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
<iconify-icon icon="solar:scissors-square-linear" width="20"></iconify-icon>
</div>
                CLIPPED
            </div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors relative group font-sans" href="#">
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group font-sans" href="#">
                    Showcase
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group font-sans" href="#">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>
<div className="flex gap-4">
<button className="text-sm font-medium text-gray-400 hover:text-white transition-colors font-sans">Log in</button>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] duration-300 font-sans">Start Creating</button>
</div>
</header>

<div className="grid lg:grid-cols-2 gap-0 border-b border-[#1a1a1a] overflow-hidden">

<div className="p-8 lg:p-16 flex flex-col justify-center border-r border-[#1a1a1a]">
<div className="gsap-hero-el opacity-0 translate-y-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] bg-[#0a0a0a] w-fit mb-8 animate-flicker" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-2 h-2 rounded-full bg-green-500 status-dot"></div>
<span className="text-xs font-medium text-gray-300 uppercase tracking-wider font-sans">AI Model v2.4 Active</span>
</div>
<h1 className="font-display font-extrabold text-6xl lg:text-8xl tracking-tightest leading-[0.9] mb-8 text-white">
<div className="overflow-hidden"><span className="gsap-title-line block font-google-sans-flex font-normal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Shorts.</span></div>
<div className="overflow-hidden"><span className="gsap-title-line block text-gray-600 font-google-sans-flex font-normal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Made.</span></div>
<div className="overflow-hidden"><span className="gsap-title-line block font-google-sans-flex font-normal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Simple.</span></div>
</h1>
<p className="gsap-hero-el opacity-0 translate-y-4 text-lg text-gray-400 max-w-md leading-relaxed mb-10 font-light font-sans" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
                    Transform long-form videos into viral shorts instantly. Our AI identifies the hook, reframes the shot, and captions the speech.
                </p>
<div className="gsap-hero-el opacity-0 translate-y-4 flex flex-col sm:flex-row gap-3 w-full max-w-md" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="flex-grow relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-hover:text-white" icon="solar:link-linear" width="18"></iconify-icon>
<input className="w-full bg-[#0a0a0a] border border-[#222] text-white pl-10 pr-4 py-4 rounded-xl focus:border-white/40 focus:bg-[#111] transition-all text-sm group-hover:border-[#333]" placeholder="Paste YouTube Link..." type="text"/>
</div>
<button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.15)] font-sans">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
                        Generate
                    </button>
</div>
</div>

<div className="p-8 lg:p-12 bg-[#080808] flex items-center justify-center overflow-hidden relative group">

<div className="absolute inset-0 bg-cover bg-center opacity-10 blur-3xl scale-125 animate-pulse bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a37bed4a-3482-4d77-8630-f16831c0d7a9_1600w.webp)]" style={{animationDuration: '4s'}}></div>
<div className="gsap-visual opacity-0 scale-95 relative w-full max-w-sm aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border border-[#222] group cursor-pointer ring-1 ring-white/5" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16391788-f7da-4cd2-88de-e0421c307b8f_800w.webp"/>

<div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="glass-panel px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 text-white font-sans">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                REC
                            </div>
<div className="glass-panel w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:menu-dots-bold"></iconify-icon>
</div>
</div>

<div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-40 h-40 border border-white/40 rounded-2xl flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">

<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -mt-0.5 -ml-0.5"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white -mt-0.5 -mr-0.5"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -mb-0.5 -ml-0.5"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white -mb-0.5 -mr-0.5"></div>
<div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-mono uppercase tracking-widest font-sans">Tracking</div>
</div>

<div className="space-y-2">
<div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-lg transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
<p className="text-xl font-display font-bold text-yellow-400 text-center leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-sans">
                                    "The secret to growth isn't luck..."
                                </p>
</div>
</div>
</div>
</div>

<div className="gsap-visual-float absolute bottom-10 right-10 glass-panel p-4 rounded-2xl flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 z-20" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, -2.9999px, 0px)'}}>
<div className="bg-blue-500/10 p-2 rounded-lg text-blue-400 animate-flicker">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-400 font-sans">Virality Score</div>
<div className="text-lg font-bold text-white tracking-tight font-sans">9.8<span className="text-gray-600 text-sm font-sans">/10</span></div>
</div>
</div>
</div>
</div>

<div className="border-b border-[#1a1a1a] bg-[#080808]">
<div className="flex items-center justify-between p-6 border-b border-[#1a1a1a]">
<h3 className="text-lg font-medium text-white flex items-center gap-2 font-sans">
<iconify-icon className="text-gray-500" icon="solar:folder-with-files-linear"></iconify-icon>
                    Recent Projects
                </h3>
<button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider transition-colors font-sans">View All</button>
</div>

<div className="gsap-list-item grid grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 p-4 hover:bg-[#0f0f0f] transition-all border-b border-[#1a1a1a] group items-center relative overflow-hidden" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>
<div className="flex items-center gap-4">
<div className="w-16 h-10 rounded-lg overflow-hidden relative border border-[#222]">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea7a7453-2b19-4ae5-9308-ab52d3e5e9ae_320w.webp"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
<iconify-icon className="text-white text-xs" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors font-sans">Tech Review: Apple Vision Pro</div>
<div className="text-xs text-gray-500 font-sans">Imported from YouTube • 12m ago</div>
</div>
</div>
<div className="hidden md:flex flex-col gap-1">
<div className="flex justify-between text-xs text-gray-400">
<span className="animate-pulse text-white font-sans">Processing...</span>
<span className="font-sans">84%</span>
</div>
<div className="h-1 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
<div className="h-full bg-white w-[84%] rounded-full shadow-[0_0_10px_white]"></div>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-gray-400 font-sans">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                    Est. 45s left
                </div>
<div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center hover:bg-white hover:text-black transition-colors hover:scale-110">
<iconify-icon icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>

<div className="gsap-list-item grid grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 p-4 hover:bg-[#0f0f0f] transition-all border-b border-[#1a1a1a] group items-center relative overflow-hidden" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>
<div className="flex items-center gap-4">
<div className="w-16 h-10 rounded-lg overflow-hidden relative border border-[#222]">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/267a06f5-e2b9-4d3e-84e9-ce21daa2f260_320w.webp"/>
</div>
<div>
<div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors font-sans">Podcast Ep #42 - Naval Ravikant</div>
<div className="text-xs text-gray-500 font-sans">File Upload • 2h ago</div>
</div>
</div>
<div className="hidden md:flex flex-col gap-1">
<div className="flex justify-between text-xs text-green-400">
<span className="drop-shadow-[0_0_5px_rgba(74,222,128,0.5)] font-sans">Complete</span>
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="h-1 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-full rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
<span className="px-2 py-0.5 rounded bg-[#151515] border border-[#222] text-gray-300 font-sans">4 Shorts</span>
</div>
<div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1.5 rounded-lg border border-[#222] text-xs hover:border-white hover:text-white text-gray-400 transition-colors font-sans">Download</button>
</div>
</div>

<div className="gsap-list-item grid grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 p-4 hover:bg-[#0f0f0f] transition-all group items-center relative overflow-hidden" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>
<div className="flex items-center gap-4">
<div className="w-16 h-10 rounded-lg overflow-hidden relative border border-[#222]">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2a0bb9c-8f84-48d1-a5ac-922fe6efd304_320w.webp"/>
</div>
<div>
<div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors font-sans">Lecture: Quantum Computing</div>
<div className="text-xs text-gray-500 font-sans">Twitch Stream • 5h ago</div>
</div>
</div>
<div className="hidden md:flex flex-col gap-1">
<div className="flex justify-between text-xs text-green-400">
<span className="drop-shadow-[0_0_5px_rgba(74,222,128,0.5)] font-sans">Complete</span>
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="h-1 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-full rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
<span className="px-2 py-0.5 rounded bg-[#151515] border border-[#222] text-gray-300 font-sans">12 Shorts</span>
</div>
<div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1.5 rounded-lg border border-[#222] text-xs hover:border-white hover:text-white text-gray-400 transition-colors font-sans">Download</button>
</div>
</div>
</div>

<div className="lg:p-16 overflow-hidden flex flex-col bg-[#050505]/50 border-[#1a1a1a] border-b px-8 py-8 relative items-center">
<div className="text-center mb-12 max-w-2xl">
<h2 className="font-display font-semibold text-3xl lg:text-4xl leading-tight mb-4 text-white">
<span className="font-google-sans-flex font-normal">Intelligent Audio Processing</span>
</h2>
<p className="text-gray-400 font-light font-sans">Capture, isolate, and enhance voice frequencies in real-time with our neural engine.</p>
</div>

<div className="widget-container w-[380px] h-[520px] bg-[#151619] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col relative overflow-hidden transition-transform duration-300 border border-[#222] is-recording" id="widget" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="widget-header p-6 flex justify-between items-start">
<span className="ref-label widget-font-mono text-[10px] text-gray-500 tracking-[0.1em] opacity-70">W - 01</span>
<span className="ref-label widget-font-mono text-[10px] text-gray-500 tracking-[0.1em] opacity-70">AUDIO_IN</span>
</div>
<div className="visualizer-stage flex-grow relative flex justify-center items-center">
<div className="radial-hud w-[280px] h-[280px] relative z-[2] flex justify-center items-center">
<div className="radial-track absolute w-[176px] h-[176px] border border-dashed border-gray-600 rounded-full"></div>
<canvas className="absolute top-0 left-0" height="280" id="radial-canvas" width="280"></canvas>
<div className="pulse-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
<div className="pulse-circle absolute top-1/2 left-1/2 w-[60px] h-[60px] border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0"></div>
</div>
<button aria-label="Toggle Recording" className="record-trigger w-[60px] h-[60px] rounded-full border border-gray-600 bg-transparent cursor-pointer relative flex justify-center items-center transition-all duration-300 z-10 hover:border-white/60 hover:scale-105 active:scale-95" id="recordBtn">
<div className="trigger-icon w-2 h-2 bg-white rounded-[1px] transition-all duration-300"></div>
</button>
</div>
</div>
<div className="widget-footer p-6 pb-8">
<div className="status-row flex flex-col gap-2 mb-4">
<div className="status-label widget-font-mono text-[10px] tracking-[0.1em] text-gray-500 uppercase">STATUS</div>
<div className="main-readout text-sm text-white leading-[1.4] max-w-[90%]" id="statusText">Secure link established.Capturing input stream...</div>
</div>
<div className="timer-display widget-font-mono text-[11px] text-gray-500 mt-6 tracking-[0.1em] flex justify-between border-t border-white/10 pt-4">
<span id="timeCode">00:00:00:00</span>
<span className="widget-font-mono">44.1 kHz</span>
</div>
</div>
</div>
</div>

<div className="gsap-voice-section overflow-hidden lg:p-24 bg-[#09090b]/50 border-[#1a1a1a] border-b px-8 py-8 relative" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
<div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 w-fit mb-6">
<iconify-icon className="text-blue-400" icon="solar:microphone-2-linear"></iconify-icon>
<span className="text-xs font-medium text-blue-400 uppercase tracking-wider font-sans">Natural Language Engine</span>
</div>
<h2 className="font-display font-semibold text-3xl lg:text-5xl leading-tight mb-6 text-white">
<span className="font-google-sans-flex font-normal">Edit with your voice.</span>
</h2>
<p className="text-gray-400 font-light text-lg mb-8 max-w-md font-sans">
                        Ditch the timeline. Just tell the AI what you want, and watch it happen. "Remove silence", "Add captions", or "Zoom on the laugh".
                    </p>
<ul className="space-y-4 font-sans text-sm text-gray-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Context-aware semantic understanding
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Instant execution of complex cuts
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Supports over 40 languages
                        </li>
</ul>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
<div className="widget-container-voice w-[320px] h-[240px] bg-[#151619] rounded-lg shadow-[0_12px_32px_rgba(0,0,0,0.2)] flex flex-col relative overflow-hidden border border-white/5 group hover:border-white/20 transition-colors" id="voiceWidget" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>

<div className="p-3 flex justify-between items-center border-b border-white/5">
<span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">Session_082</span>
<span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Live
                            </span>
</div>

<div className="flex-grow p-4 flex flex-col gap-3">

<div className="grid grid-cols-2 gap-2">
<div className="flex flex-col gap-0.5">
<span className="font-mono text-[8px] text-gray-500 tracking-wider">COMMAND</span>
<span className="text-[11px] text-white font-medium">"Remove Silence"</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-mono text-[8px] text-gray-500 tracking-wider">CONFIDENCE</span>
<span className="text-[11px] text-green-400">99.8%</span>
</div>
</div>

<div className="h-12 w-full bg-white/5 rounded flex items-center px-1 gap-[2px] relative overflow-hidden" id="waveform-voice">
<div className="absolute left-[40%] top-0 bottom-0 w-[1px] bg-[#FF4444] shadow-[0_0_8px_rgba(255,68,68,0.5)] z-10"></div>

<div className="wave-bar active" style={{height: '8.79225px'}}></div><div className="wave-bar active" style={{height: '11.1209px'}}></div><div className="wave-bar active" style={{height: '26.885px'}}></div><div className="wave-bar active" style={{height: '16.806px'}}></div><div className="wave-bar active" style={{height: '7.14804px'}}></div><div className="wave-bar active" style={{height: '20.8447px'}}></div><div className="wave-bar active" style={{height: '24.755px'}}></div><div className="wave-bar active" style={{height: '27.8239px'}}></div><div className="wave-bar active" style={{height: '9.66323px'}}></div><div className="wave-bar active" style={{height: '12.4288px'}}></div><div className="wave-bar active" style={{height: '6.33418px'}}></div><div className="wave-bar active" style={{height: '24.2861px'}}></div><div className="wave-bar active" style={{height: '6.26485px'}}></div><div className="wave-bar active" style={{height: '27.1837px'}}></div><div className="wave-bar active" style={{height: '9.60574px'}}></div><div className="wave-bar active" style={{height: '25.3406px'}}></div><div className="wave-bar active" style={{height: '25.3038px'}}></div><div className="wave-bar active" style={{height: '13.673px'}}></div><div className="wave-bar" style={{height: '24.9228px'}}></div><div className="wave-bar" style={{height: '20.3885px'}}></div><div className="wave-bar" style={{height: '16.8612px'}}></div><div className="wave-bar" style={{height: '22.6261px'}}></div><div className="wave-bar" style={{height: '8.31745px'}}></div><div className="wave-bar" style={{height: '9.63015px'}}></div><div className="wave-bar" style={{height: '27.3353px'}}></div><div className="wave-bar" style={{height: '9.90329px'}}></div><div className="wave-bar" style={{height: '27.4609px'}}></div><div className="wave-bar" style={{height: '20.1611px'}}></div><div className="wave-bar" style={{height: '17.7329px'}}></div><div className="wave-bar" style={{height: '27.2433px'}}></div><div className="wave-bar" style={{height: '8.07289px'}}></div><div className="wave-bar" style={{height: '6.72459px'}}></div><div className="wave-bar" style={{height: '4.36501px'}}></div><div className="wave-bar" style={{height: '22.2108px'}}></div><div className="wave-bar" style={{height: '4.47759px'}}></div><div className="wave-bar" style={{height: '14.9846px'}}></div><div className="wave-bar" style={{height: '7.97415px'}}></div><div className="wave-bar" style={{height: '17.4124px'}}></div><div className="wave-bar" style={{height: '24.6863px'}}></div><div className="wave-bar" style={{height: '24.0606px'}}></div><div className="wave-bar" style={{height: '27.7073px'}}></div><div className="wave-bar" style={{height: '14.9651px'}}></div><div className="wave-bar" style={{height: '15.7927px'}}></div><div className="wave-bar" style={{height: '4.31678px'}}></div><div className="wave-bar" style={{height: '27.5544px'}}></div></div>

<div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white">
<div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5"></div>
</button>
<div className="flex flex-col justify-center">
<span className="font-mono text-[10px] text-gray-500">00:01:40</span>
<span className="font-mono text-[8px] text-gray-600 tracking-wide">CURRENT</span>
</div>
</div>
<button className="bg-white text-[#151619] border-none font-semibold text-[10px] px-2.5 py-1 rounded font-mono hover:bg-gray-200 transition-colors">
                                    EXECUTE
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-8 lg:p-24 border-b border-[#1a1a1a] bg-gradient-to-b from-[#080808] to-[#111] relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
<h2 className="font-display font-semibold text-4xl lg:text-7xl leading-tight text-center mb-16 relative z-10">
<span className="gsap-manifesto-text inline-block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-600 font-google-sans-flex font-normal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Virality is not luck.</span>
<span className="gsap-manifesto-text inline-block text-gray-600 font-google-sans-flex font-normal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>It's engineering.</span>
</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
<div className="gsap-feature-card flex flex-col items-center gap-4 text-center group cursor-default" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-20 h-20 rounded-2xl bg-[#0f0f0f] border border-[#222] flex items-center justify-center group-hover:border-white/50 group-hover:bg-[#151515] group-hover:scale-110 transition-all duration-300 shadow-2xl relative">
<div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-white transition-colors" icon="solar:crop-minimalistic-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-gray-400 uppercase tracking-wide group-hover:text-white transition-colors font-sans">Smart Crop</span>
</div>
<div className="gsap-feature-card flex flex-col items-center gap-4 text-center group cursor-default" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-20 h-20 rounded-2xl bg-[#0f0f0f] border border-[#222] flex items-center justify-center group-hover:border-white/50 group-hover:bg-[#151515] group-hover:scale-110 transition-all duration-300 shadow-2xl relative">
<div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-white transition-colors" icon="solar:user-speak-rounded-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-gray-400 uppercase tracking-wide group-hover:text-white transition-colors font-sans">Face Detect</span>
</div>
<div className="gsap-feature-card flex flex-col items-center gap-4 text-center group cursor-default" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-20 h-20 rounded-2xl bg-[#0f0f0f] border border-[#222] flex items-center justify-center group-hover:border-white/50 group-hover:bg-[#151515] group-hover:scale-110 transition-all duration-300 shadow-2xl relative">
<div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-white transition-colors" icon="solar:text-square-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-gray-400 uppercase tracking-wide group-hover:text-white transition-colors font-sans">Auto Subs</span>
</div>
<div className="gsap-feature-card flex flex-col items-center gap-4 text-center group cursor-default" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-20 h-20 rounded-2xl bg-[#0f0f0f] border border-[#222] flex items-center justify-center group-hover:border-white/50 group-hover:bg-[#151515] group-hover:scale-110 transition-all duration-300 shadow-2xl relative">
<div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-white transition-colors" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-gray-400 uppercase tracking-wide group-hover:text-white transition-colors font-sans">Score Prediction</span>
</div>
</div>
</div>

<footer className="p-8 lg:p-16 flex flex-col md:flex-row justify-between items-end gap-10 bg-black/40">
<div>
<div className="flex items-center gap-2 text-2xl mb-4 font-google-sans-flex font-normal">
<div className="w-6 h-6 bg-white rounded-md shadow-[0_0_15px_white]"></div>
                    CLIPPED
                </div>
<p className="text-gray-500 text-sm max-w-xs font-sans">
                    The autonomous video editing engine for the modern attention economy.
                </p>
<div className="flex gap-4 mt-6">
<iconify-icon className="text-gray-500 hover:text-white hover:scale-110 transition-all cursor-pointer text-xl" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="text-gray-500 hover:text-white hover:scale-110 transition-all cursor-pointer text-xl" icon="solar:brand-instagram-linear"></iconify-icon>
<iconify-icon className="text-gray-500 hover:text-white hover:scale-110 transition-all cursor-pointer text-xl" icon="solar:brand-discord-linear"></iconify-icon>
</div>
</div>
<div className="flex gap-4">
<button className="border border-[#333] text-gray-300 px-6 py-3 rounded-xl font-medium hover:border-white hover:bg-white/5 transition-all font-sans">
                    Documentation
                </button>
<button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all font-sans">
                    Get Early Access
                </button>
</div>
</footer>
</div>


    </>
  );
}
