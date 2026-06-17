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



        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('downloadBtn').addEventListener('click', async function() {
                const btn = this;
                const btnText = document.getElementById('downloadText');
                const btnIcon = document.getElementById('downloadIcon');
                
                const originalText = btnText.innerText;
                const originalIcon = btnIcon.getAttribute('icon');
                
                btnText.innerText = 'Initializing...';
                btnIcon.setAttribute('icon', 'solar:spinner-linear');
                btnIcon.classList.add('animate-spin');
                btn.classList.add('opacity-80', 'cursor-not-allowed');
                btn.disabled = true;

                try {
                    const slides = document.querySelectorAll('.slide-target');
                    
                    for (let i = 0; i < slides.length; i++) {
                        btnText.innerText = `Downloading ${i + 1}/${slides.length}...`;
                        
                        // Scroll slightly ahead to ensure elements render fully before capture
                        slides[i].scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' });
                        await new Promise(r => setTimeout(r, 400)); 
                        
                        // htmlToImage renders blurs, gradients, and masks perfectly compared to html2canvas
                        const dataUrl = await htmlToImage.toPng(slides[i], {
                            pixelRatio: 3,
                            backgroundColor: slides[i].classList.contains('bg-[#C5F848]') ? '#C5F848' : '#0a0a0a',
                            style: { margin: '0', transform: 'none' }
                        });

                        // Draw onto standard 1080x1350 Instagram canvas to add seamless padding
                        const img = new Image();
                        img.src = dataUrl;
                        await new Promise(r => { img.onload = r; });

                        const igCanvas = document.createElement('canvas');
                        igCanvas.width = 1080;
                        igCanvas.height = 1350;
                        const ctx = igCanvas.getContext('2d');
                        
                        ctx.fillStyle = '#050505';
                        ctx.fillRect(0, 0, 1080, 1350);
                        
                        const scale = Math.min(1080 / img.width, 1350 / img.height);
                        const w = img.width * scale;
                        const h = img.height * scale;
                        const x = (1080 - w) / 2;
                        const y = (1350 - h) / 2;
                        
                        ctx.imageSmoothingEnabled = true;
                        ctx.imageSmoothingQuality = 'high';
                        ctx.drawImage(img, x, y, w, h);
                        
                        // Trigger individual download instantly
                        const link = document.createElement('a');
                        link.download = `Humble_Slide_${i + 1}.png`;
                        link.href = igCanvas.toDataURL('image/png');
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);

                        // Slight delay to prevent browser multi-download blockers
                        await new Promise(r => setTimeout(r, 600));
                    }

                    // Reset position back to start
                    slides[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                    
                    btnText.innerText = 'Completed!';
                    btnIcon.setAttribute('icon', 'solar:check-circle-linear');
                    btnIcon.classList.remove('animate-spin');
                    btnIcon.classList.add('text-[#32CD32]');
                    
                    setTimeout(() => {
                        btnText.innerText = originalText;
                        btnIcon.setAttribute('icon', originalIcon);
                        btnIcon.classList.remove('text-[#32CD32]');
                        btn.classList.remove('opacity-80', 'cursor-not-allowed');
                        btn.disabled = false;
                    }, 4000);

                } catch (error) {
                    console.error("Download failed:", error);
                    btnText.innerText = 'Error - Check Console';
                    btnIcon.setAttribute('icon', 'solar:danger-triangle-linear');
                    btnIcon.classList.remove('animate-spin');
                    
                    setTimeout(() => {
                        btnText.innerText = originalText;
                        btnIcon.setAttribute('icon', originalIcon);
                        btn.classList.remove('opacity-80', 'cursor-not-allowed');
                        btn.disabled = false;
                    }, 4000);
                }
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
      

<button className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center gap-3 bg-neutral-900/90 hover:bg-neutral-800 text-white px-5 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 group" id="downloadBtn">
<iconify-icon className="text-xl text-[#C5F848] group-hover:-translate-y-0.5 transition-transform" icon="solar:download-minimalistic-linear" id="downloadIcon" mode="svg"></iconify-icon>
<span className="font-sans text-sm font-light tracking-wide" id="downloadText">Download All</span>
</button>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="slide-target relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden group">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] opacity-80 pointer-events-none z-0"></div>
<div className="absolute top-16 -right-12 z-0 transform -rotate-[8deg] opacity-10 pointer-events-none drop-shadow-lg">
<span className="font-serif italic text-[#32CD32] text-sm tracking-widest uppercase whitespace-nowrap">Building Community Wealth</span>
</div>
<div className="flex justify-center pt-2 relative z-10">
<div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 pr-4 pl-2 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-black/20">
<div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:danger-triangle-linear" mode="svg"></iconify-icon>
</div>
<span className="text-sm tracking-widest uppercase font-light text-white/80">Industry Truth</span>
</div>
</div>
<div className="flex flex-col items-center justify-center text-center relative z-10 flex-grow gap-6">
<div className="relative">
<div className="absolute inset-0 bg-red-500 blur-[80px] opacity-15"></div>
<iconify-icon className="text-9xl text-white/90 drop-shadow-2xl mx-auto" icon="solar:shield-warning-linear" mode="svg"></iconify-icon>
</div>
<h1 className="font-sans font-normal text-6xl tracking-tight leading-[0.9] text-white drop-shadow-lg">
                    Most 'gurus'<br/>
<span className="font-serif italic text-red-400 font-light opacity-90">sell dreams.</span>
</h1>
</div>
<div className="flex justify-center pb-2 relative z-10">
<div className="flex flex-col items-center gap-2 animate-bounce duration-[2000ms]">
<span className="text-sm uppercase tracking-widest text-neutral-500 font-light">Why? Swipe</span>
<iconify-icon className="text-xl text-white/40" icon="solar:alt-arrow-down-linear" mode="svg"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="slide-target relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,white,transparent_80%)] opacity-70 pointer-events-none z-0"></div>
<div className="absolute bottom-12 -right-8 z-0 transform -rotate-[8deg] opacity-10 pointer-events-none mix-blend-screen">
<span className="font-serif italic text-[#32CD32] text-xs tracking-widest uppercase whitespace-nowrap">Building Community Wealth</span>
</div>
<div className="flex justify-between items-center z-10 relative">
<div className="w-2 h-2 rounded-full bg-neutral-700 shadow-[0_0_8px_rgba(255,255,255,0.1)]"></div>
<span className="text-xs text-neutral-500 font-mono bg-white/[0.03] px-2 py-1 rounded-md border border-white/5">02 / 08</span>
</div>
<div className="flex flex-col justify-center flex-grow z-10 relative mt-4">
<h2 className="font-sans font-light text-4xl tracking-tight leading-[1.05] text-white mb-8 drop-shadow-md">
                    They promise <br/><span className="text-[#C5F848] font-serif italic text-glow">quick riches.</span>
</h2>
<div className="w-full h-48 bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative flex flex-col justify-end overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-sm">
<div className="absolute inset-0 border-b border-white/5 top-1/2"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute top-4 left-4 z-10">
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1 drop-shadow-md">Reality Check:</div>
<div className="text-base text-white font-light drop-shadow-md">You lose your capital</div>
</div>
<svg className="w-full h-full absolute inset-0 pt-16 z-10" preserveaspectratio="none" viewbox="0 0 300 100">
<path className="opacity-30" d="M0,80 L100,20" fill="none" stroke="#C5F848" stroke-dasharray="2 2" strokeWidth="1"></path>
<path d="M0,80 L150,85 L300,90" fill="none" stroke="#ef4444" strokeWidth="2" style={{filter: 'drop-shadow(0 4px 6px rgba(239, 68, 68, 0.3))'}}></path>
<circle cx="300" cy="90" fill="#ef4444" r="4" style={{filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))'}}></circle>
</svg>
<span className="absolute top-4 right-4 text-xs text-[#C5F848]/50 font-mono uppercase tracking-wider z-10">Hype</span>
<span className="absolute bottom-4 right-4 text-xs text-red-400 font-mono uppercase tracking-wider z-10">Reality</span>
</div>
<p className="mt-8 font-sans text-xl text-neutral-400 leading-snug font-extralight">
                    Then leave you holding the bag when the market corrects.
                </p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="slide-target relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_bottom,white,transparent_80%)] opacity-70 pointer-events-none z-0"></div>
<div className="absolute top-1/2 -right-12 z-0 transform -rotate-[8deg] opacity-10 pointer-events-none mix-blend-screen">
<span className="font-serif italic text-[#32CD32] text-xs tracking-widest uppercase whitespace-nowrap">Building Community Wealth</span>
</div>
<div className="flex justify-between items-center z-10 relative">
<div className="w-2 h-2 rounded-full bg-neutral-700 shadow-[0_0_8px_rgba(255,255,255,0.1)]"></div>
<span className="text-xs text-neutral-500 font-mono bg-white/[0.03] px-2 py-1 rounded-md border border-white/5">03 / 08</span>
</div>
<div className="flex flex-col justify-center flex-grow z-10 relative">
<h2 className="font-sans font-light text-4xl tracking-tight leading-[1.1] text-white mb-6 drop-shadow-md">
                    So you get...
                </h2>
<div className="space-y-4">
<div className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex items-center gap-4 shadow-xl shadow-black/40 backdrop-blur-md transition-all hover:bg-white/[0.05]">
<div className="w-10 h-10 rounded-full bg-neutral-800/80 border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
<iconify-icon className="text-xl text-neutral-400" icon="solar:graph-down-linear" mode="svg"></iconify-icon>
</div>
<span className="font-sans text-lg text-neutral-300 font-light">Blown accounts</span>
</div>
<div className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex items-center gap-4 shadow-xl shadow-black/40 backdrop-blur-md transition-all hover:bg-white/[0.05]">
<div className="w-10 h-10 rounded-full bg-neutral-800/80 border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
<iconify-icon className="text-xl text-neutral-400" icon="solar:clock-circle-linear" mode="svg"></iconify-icon>
</div>
<span className="font-sans text-lg text-neutral-300 font-light">Wasted years</span>
</div>
<div className="w-full bg-red-500/[0.04] border border-red-500/20 rounded-xl p-4 flex items-center gap-4 shadow-xl shadow-black/40 backdrop-blur-md relative overflow-hidden group transition-all hover:bg-red-500/[0.06]">
<div className="absolute inset-0 bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 relative z-10">
<iconify-icon className="text-xl text-red-400" icon="solar:wallet-linear" mode="svg"></iconify-icon>
</div>
<span className="font-sans text-lg text-white font-light relative z-10">And zero wealth.</span>
</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="slide-target relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-center p-10 overflow-hidden">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] opacity-60 pointer-events-none z-0"></div>
<div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-[0.04] blur-[80px] rounded-full z-0"></div>
<div className="absolute bottom-12 -right-4 z-0 transform -rotate-[8deg] opacity-10 pointer-events-none mix-blend-screen">
<span className="font-serif italic text-[#32CD32] text-xs tracking-widest uppercase whitespace-nowrap">Building Community Wealth</span>
</div>
<div className="relative z-10 drop-shadow-md">
<iconify-icon className="text-5xl text-neutral-400 mb-8 drop-shadow-sm" icon="solar:clock-circle-linear" mode="svg"></iconify-icon>
<h2 className="font-sans font-light text-4xl tracking-tight leading-[1.1] text-white">
                    But by the time <br/>
<span className="text-neutral-500">you realize it...</span>
</h2>
<div className="h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent my-8 shadow-[0_1px_4px_rgba(255,255,255,0.1)]"></div>
<h2 className="font-sans font-light text-4xl tracking-tight leading-[1.1] text-white">
                    They’ve already <br/>
<span className="text-white font-serif italic font-light drop-shadow-lg">taken your fees.</span>
</h2>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="slide-target relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_bottom,white,transparent_70%)] opacity-70 pointer-events-none z-0"></div>
<div className="absolute bottom-16 -right-6 z-0 transform -rotate-[8deg] opacity-10 pointer-events-none mix-blend-screen">
<span className="font-serif italic text-[#32CD32] text-xs tracking-widest uppercase whitespace-nowrap">Building Community Wealth</span>
</div>
<div className="flex justify-between items-center z-10 relative">
<div className="w-2 h-2 rounded-full bg-[#C5F848] shadow-[0_0_12px_rgba(197,248,72,0.6)]"></div>
<span className="text-xs text-neutral-500 font-mono bg-white/[0.03] px-2 py-1 rounded-md border border-white/5">05 / 08</span>
</div>
<div className="flex flex-col justify-center flex-grow z-10 relative">
<p className="font-sans text-neutral-400 mb-6 text-base font-extralight">I’ve seen too many people lose their savings.</p>
<h2 className="font-sans font-light text-4xl tracking-tight leading-tight text-white mb-8 drop-shadow-md">
                    If you want a portfolio that <span className="text-[#C5F848] border-b border-[#C5F848]/30 text-glow">actually compounds,</span>
</h2>
<div className="relative w-full h-40 flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent z-0"></div>
<div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)', backgroundSize: '16px 16px', [maskImage: 'radial-gradient(ellipse_at_center,black,transparent_70%)]'}}></div>
<svg className="w-full h-full absolute inset-0 z-10" viewbox="0 0 320 160">
<path d="M20,130 Q100,130 150,90 T300,30" fill="none" stroke="#C5F848" strokeWidth="2" style={{filter: 'drop-shadow(0 4px 6px rgba(197, 248, 72, 0.2))'}}></path>
<circle className="animate-pulse" cx="300" cy="30" fill="#C5F848" r="4" style={{filter: 'drop-shadow(0 0 10px rgba(197, 248, 72, 0.8))'}}></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="slide-target relative w-full md:w-[450px] h-full bg-[#C5F848] rounded-[40px] flex flex-col justify-between p-8 overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_20px_50px_-20px_rgba(197,248,72,0.4)]">
<div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-60 pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-grain mix-blend-overlay opacity-30 z-0 pointer-events-none"></div>
<div className="absolute bottom-12 -right-8 z-0 transform -rotate-[8deg] opacity-10 pointer-events-none mix-blend-multiply">
<span className="font-serif italic text-black text-xs tracking-widest uppercase whitespace-nowrap">Building Community Wealth</span>
</div>
<div className="z-10 h-full flex flex-col justify-center relative drop-shadow-sm px-2">
<iconify-icon className="text-7xl text-black/90 mb-8 drop-shadow-md" icon="solar:safe-square-linear" mode="svg"></iconify-icon>
<h2 className="font-sans font-normal text-4xl tracking-tight leading-[1.05] text-black/80 mb-2">
                    You need a strategy built on the
                </h2>
<h2 className="font-serif italic font-light text-6xl tracking-tight leading-[1] text-black drop-shadow-md">
                    humble truth.
                </h2>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="slide-target relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,white,transparent_75%)] opacity-70 pointer-events-none z-0"></div>
<div className="absolute bottom-16 -right-8 z-0 transform -rotate-[8deg] opacity-10 pointer-events-none mix-blend-screen">
<span className="font-serif italic text-[#32CD32] text-xs tracking-widest uppercase whitespace-nowrap">Building Community Wealth</span>
</div>
<div className="flex justify-between items-center z-10 relative">
<div className="w-2 h-2 rounded-full bg-neutral-700 shadow-[0_0_8px_rgba(255,255,255,0.1)]"></div>
<span className="text-xs text-neutral-500 font-mono bg-white/[0.03] px-2 py-1 rounded-md border border-white/5">07 / 08</span>
</div>
<div className="flex flex-col justify-center flex-grow z-10 relative">
<h3 className="font-sans text-3xl tracking-tight text-white font-light mb-8 leading-tight drop-shadow-md">
                    That’s what we do at <br/><span className="text-[#C5F848]">The Humble Investment.</span>
</h3>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-xl shadow-black/40 backdrop-blur-md transition-all hover:bg-white/[0.04]">
<div className="bg-[#C5F848]/10 w-8 h-8 rounded-full flex items-center justify-center border border-[#C5F848]/20 shrink-0">
<iconify-icon className="text-xl text-[#C5F848]" icon="solar:check-circle-linear" mode="svg"></iconify-icon>
</div>
<span className="font-sans text-white text-lg font-light">No day trading.</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-xl shadow-black/40 backdrop-blur-md transition-all hover:bg-white/[0.04]">
<div className="bg-[#C5F848]/10 w-8 h-8 rounded-full flex items-center justify-center border border-[#C5F848]/20 shrink-0">
<iconify-icon className="text-xl text-[#C5F848]" icon="solar:check-circle-linear" mode="svg"></iconify-icon>
</div>
<span className="font-sans text-white text-lg font-light">No crypto hype.</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-xl shadow-black/40 backdrop-blur-md transition-all hover:bg-white/[0.04]">
<div className="bg-[#C5F848]/10 w-8 h-8 rounded-full flex items-center justify-center border border-[#C5F848]/20 shrink-0">
<iconify-icon className="text-xl text-[#C5F848]" icon="solar:check-circle-linear" mode="svg"></iconify-icon>
</div>
<span className="font-sans text-white text-lg font-light">No fake flexes.</span>
</div>
</div>
<div className="border-t border-white/10 pt-6 relative">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<p className="font-serif italic text-2xl tracking-tight text-white text-center drop-shadow-md font-light">Just real, compounding wealth.</p>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="slide-target relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden group border border-white/10 hover:border-[#C5F848]/30 transition-all duration-500">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] opacity-60 pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-80"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#C5F848] opacity-[0.05] blur-[80px] rounded-t-full pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-[0.08]"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-0 transform -rotate-[6deg] opacity-10 pointer-events-none w-full text-center mix-blend-screen transition-opacity group-hover:opacity-20">
<span className="font-serif italic text-[#32CD32] text-sm tracking-widest uppercase whitespace-nowrap drop-shadow-md">Building Community Wealth</span>
</div>
<div className="flex justify-between items-center z-10 relative opacity-50">
<span className="font-sans font-light text-sm bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">@thehumbleinvestment</span>
</div>
<div className="flex flex-col items-center justify-center flex-grow z-10 text-center relative w-full mt-8">
<h2 className="font-sans font-normal text-4xl tracking-tight leading-[1.1] text-white mb-4 drop-shadow-lg">
                    Want a portfolio that works like an <span className="font-serif italic text-[#C5F848] font-light text-glow">asset?</span>
</h2>
<div className="w-full max-w-[280px] relative mt-8 group-hover:-translate-y-2 transition-transform duration-500">
<div className="bg-neutral-900 border border-white/10 rounded-full h-14 flex items-center px-6 relative z-10 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md">
<span className="text-neutral-300 text-base font-light mr-3">Reply "WEALTH"</span>
<div className="w-0.5 h-4 bg-[#C5F848] animate-pulse drop-shadow-[0_0_8px_rgba(197,248,72,0.8)]"></div>
</div>
<div className="absolute top-0 right-2 h-14 flex items-center z-20">
<div className="w-8 h-8 rounded-full bg-[#C5F848] flex items-center justify-center shadow-[0_4px_12px_rgba(197,248,72,0.3)] hover:scale-105 transition-transform cursor-pointer">
<iconify-icon className="text-base text-black" icon="solar:arrow-right-up-linear" mode="svg"></iconify-icon>
</div>
</div>
<div className="absolute -bottom-4 -right-2 z-30 drop-shadow-2xl animate-[bounce_2s_infinite]">
<iconify-icon className="text-4xl text-white/90" icon="solar:pointer-linear" mode="svg"></iconify-icon>
</div>
</div>
<div className="mt-12">
<p className="text-xs text-neutral-500 uppercase tracking-widest font-light drop-shadow-sm">I'll send you the blueprint</p>
</div>
</div>
<div className="flex justify-between items-end z-10 w-full pt-4 relative">
<div className="flex items-center gap-2 text-white/50 text-sm font-light uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear" mode="svg"></iconify-icon> DM
                </div>
<div className="flex items-center gap-2 text-[#C5F848] text-sm font-light uppercase tracking-wider hover:text-[#d3ff66] transition-colors cursor-pointer text-glow">
                    Follow <iconify-icon className="text-base" icon="solar:user-plus-linear" mode="svg"></iconify-icon>
</div>
</div>
</div>
</div>


    </>
  );
}
