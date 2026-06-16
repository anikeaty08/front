import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function(){function init(){const knot=document.getElementById('anim-knot');const heart=document.getElementById('anim-heart');const container=document.getElementById('scroll-knot-container');const sideEmojis=document.getElementById('side-emojis');if(!knot||!heart)return;let knotLen=1000;let heartLen=1000;try{knotLen=knot.getTotalLength()||1000;heartLen=heart.getTotalLength()||1000;}catch(e){}knot.style.strokeDasharray=knotLen;heart.style.strokeDasharray=heartLen;function updateAnim(){const scrollY=window.scrollY||document.documentElement.scrollTop;const maxScroll=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);let progress=scrollY/maxScroll;progress=Math.max(0,Math.min(1,progress));if(container){container.style.transform=`rotate(${progress*360}deg)`;}if(progress<=0.5){let p=progress/0.5;knot.style.strokeDashoffset=knotLen*p;knot.style.opacity=1-(p*0.5);heart.style.strokeDashoffset=heartLen;heart.style.opacity=0;heart.classList.remove('heartbeat-pulse');if(sideEmojis)sideEmojis.style.opacity='0';}else{let p=(progress-0.5)/0.5;knot.style.strokeDashoffset=knotLen;knot.style.opacity=0;heart.style.strokeDashoffset=heartLen*(1-p);heart.style.opacity=p;if(progress>0.98){heart.classList.add('heartbeat-pulse');if(sideEmojis)sideEmojis.style.opacity='1';}else{heart.classList.remove('heartbeat-pulse');if(sideEmojis)sideEmojis.style.opacity='0';}}}window.addEventListener('scroll',updateAnim,{passive:true});window.addEventListener('resize',updateAnim,{passive:true});setTimeout(updateAnim,100);updateAnim();}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();
    


      (function() {
        function initDecode() {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
            const decodeElements = document.querySelectorAll('.decode-text');

            decodeElements.forEach((el, idx) => {
                const targetText = el.getAttribute('data-value');
                if (!targetText) return;

                const runEffect = () => {
                    el.classList.remove('heartbeat-text-pulse');
                    setTimeout(() => {
                        let iterations = 0;
                        clearInterval(el.decodeInterval);
                        el.decodeInterval = setInterval(() => {
                            el.innerText = targetText.split('')
                                .map((letter, index) => {
                                    if (index < iterations) {
                                        return targetText[index];
                                    }
                                    return letter === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
                                })
                                .join('');

                            if (iterations >= targetText.length) {
                                clearInterval(el.decodeInterval);
                                el.innerText = targetText;
                                if (targetText.includes('Win')) {
                                    el.classList.add('heartbeat-text-pulse');
                                }
                            }
                            iterations += 0.15;
                        }, 35);
                    }, idx * 400);
                };

                const trigger = el.closest('h1') || el;
                if (!el.dataset.hasTrigger) {
                    trigger.addEventListener('mouseenter', runEffect);
                    trigger.addEventListener('touchstart', runEffect, {passive: true});
                    el.dataset.hasTrigger = 'true';
                }

                setTimeout(runEffect, 300);
            });
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initDecode);
        } else {
            initDecode();
        }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020108]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-30 top-[12%] left-[22%]"></div>
<div className="absolute w-1 h-1 bg-white rounded-full opacity-50 top-[18%] left-[78%] shadow-[0_0_4px_#fff]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-40 top-[28%] left-[52%]"></div>
<div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-60 top-[42%] left-[8%]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-20 top-[62%] left-[88%]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-50 top-[78%] left-[32%] shadow-[0_0_3px_#fff]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-40 top-[82%] left-[68%]"></div>
<div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-30 top-[92%] left-[18%]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 top-[8%] left-[62%]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-50 top-[38%] left-[92%]"></div>
<div className="absolute w-[3px] h-[3px] bg-white rounded-full twinkle-1 top-[22%] left-[38%] shadow-[0_0_5px_#fff]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full twinkle-2 top-[32%] left-[72%] shadow-[0_0_4px_#fff]"></div>
<div className="absolute w-1 h-1 bg-white rounded-full twinkle-3 top-[52%] left-[28%] shadow-[0_0_6px_#fff]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full twinkle-1 top-[68%] left-[58%] shadow-[0_0_4px_#fff]"></div>
<div className="absolute w-[3px] h-[3px] bg-white rounded-full twinkle-2 top-[88%] left-[42%] shadow-[0_0_5px_#fff]"></div>
<div className="absolute w-1 h-1 bg-white rounded-full twinkle-3 top-[48%] left-[82%] shadow-[0_0_6px_#fff]"></div>
<div className="absolute w-[2px] h-[2px] bg-white rounded-full twinkle-1 top-[12%] left-[92%] shadow-[0_0_3px_#fff]"></div>
<div className="absolute w-[3px] h-[3px] bg-white rounded-full twinkle-2 top-[72%] left-[12%] shadow-[0_0_5px_#fff]"></div>
</div>
<div className="absolute inset-[-50%] opacity-[0.85] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'40\' cy=\'40\' r=\'1\' fill=\'%23fff\' opacity=\'0.8\'/%3E%3Ccircle cx=\'150\' cy=\'80\' r=\'1.5\' opacity=\'0.9\'/%3E%3Ccircle cx=\'80\' cy=\'220\' r=\'0.5\' opacity=\'0.5\'/%3E%3Ccircle cx=\'280\' cy=\'160\' r=\'2\' opacity=\'0.6\'/%3E%3Ccircle cx=\'340\' cy=\'280\' opacity=\'0.7\'/%3E%3Ccircle cx=\'120\' cy=\'320\' r=\'1.2\' cx=\'220\' r=\'0.8\' opacity=\'0.4\'/%3E%3Ccircle cx=\'300\' cy=\'350\' cx=\'250\' cy=\'250\' r=\'0.6\' cx=\'50\' cy=\'150\' r=\'1.8\' cx=\'180\' cy=\'180\' cx=\'350\' cy=\'90\' opacity=\'0.3\'/%3E%3Ccircle cx=\'10\' cx=\'190\' cy=\'380\' cx=\'270\' r=\'0.7\' opacity=\'0.4\'/%3E%3C/svg%3E')] bg-[length:160px_160px] animate-[spin_300s_linear_infinite]"></div>
<div className="absolute inset-[-50%] opacity-[0.6] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 300 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'100\' r=\'1\' fill=\'%23fff\' opacity=\'0.6\'/%3E%3Ccircle cx=\'180\' cy=\'50\' r=\'1.5\' opacity=\'0.9\'/%3E%3Ccircle cx=\'100\' cy=\'200\' r=\'1.2\' opacity=\'0.4\'/%3E%3Ccircle cx=\'250\' cy=\'220\' r=\'0.8\' opacity=\'0.7\'/%3E%3Ccircle cx=\'130\' cy=\'280\' r=\'1.8\' opacity=\'0.8\'/%3E%3Ccircle cx=\'280\' cy=\'120\' r=\'0.5\' opacity=\'0.5\'/%3E%3C/svg%3E')] bg-[length:120px_120px] animate-[spin_240s_linear_infinite_reverse]"></div>
<div className="absolute inset-[-50%] pointer-events-none opacity-[0.6] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'30\' r=\'1.5\' fill=\'%23ffffff\' opacity=\'0.8\'/%3E%3Ccircle cx=\'70\' cy=\'80\' r=\'1\' opacity=\'0.6\'/%3E%3Ccircle cx=\'150\' cy=\'40\' r=\'2\' opacity=\'0.9\'/%3E%3Ccircle cx=\'110\' cy=\'120\' opacity=\'0.5\'/%3E%3Ccircle cx=\'40\' cy=\'160\' opacity=\'0.7\'/%3E%3Ccircle cx=\'180\' cy=\'170\' opacity=\'0.4\'/%3E%3Ccircle cx=\'80\' cy=\'190\' r=\'1.2\' cx=\'190\' cy=\'90\' cx=\'10\' cy=\'110\' r=\'0.8\' opacity=\'0.3\'/%3E%3Ccircle cx=\'130\' cy=\'180\' cx=\'90\' cy=\'15\' cx=\'160\' opacity=\'0.6\'/%3E%3C/svg%3E')] bg-[length:120px_120px] animate-[spin_400s_linear_infinite]"></div>
<div className="absolute inset-[-50%] pointer-events-none opacity-[0.4] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 300 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'1\' fill=\'%23ffffff\' opacity=\'0.5\'/%3E%3Ccircle cx=\'150\' cy=\'100\' r=\'0.8\' opacity=\'0.4\'/%3E%3Ccircle cx=\'250\' r=\'1.5\' opacity=\'0.7\'/%3E%3Ccircle cx=\'100\' cy=\'200\' opacity=\'0.3\'/%3E%3Ccircle cx=\'200\' cy=\'250\' r=\'1.2\' opacity=\'0.6\'/%3E%3Ccircle cx=\'280\' cy=\'180\' cx=\'30\' cy=\'280\' opacity=\'0.7\'/%3E%3C/svg%3E')] bg-[length:180px_180px] animate-[spin_500s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 mix-blend-screen pointer-events-none opacity-100" style={{transform: 'rotate(-35deg) scale(1.8)'}}>
<div className="absolute top-[35%] left-[5%] w-[90%] h-[25%] rounded-[100%] blur-[90px]" style={{background: 'radial-gradient(ellipse at center, rgba(76, 29, 149, 0.45) 0%, rgba(30, 27, 75, 0.25) 60%, transparent 100%)'}}></div>
<div className="absolute top-[42%] left-[15%] w-[70%] h-[18%] rounded-[100%] blur-[70px]" style={{background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.35) 0%, rgba(30, 64, 175, 0.2) 50%, transparent 100%)'}}></div>
<div className="absolute top-[47%] left-[25%] w-[50%] h-[10%] rounded-[100%] blur-[50px]" style={{background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, rgba(216, 180, 254, 0.2) 50%, transparent 100%)'}}></div>
<div className="absolute top-[50%] left-[20%] w-[60%] h-[5%] rounded-[100%] blur-[20px] mix-blend-multiply" style={{background: 'rgba(2, 1, 10, 0.8)'}}></div>
</div>
<div className="absolute top-[20%] left-[25%] w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-20 animate-[pulse_8s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(79,70,229,0.5) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="absolute bottom-[20%] right-[20%] w-[50vw] h-[50vw] rounded-full blur-[150px] opacity-10 animate-[pulse_12s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="absolute top-[60%] left-[-5%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-10 animate-[pulse_10s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="star s1"></div>
<div className="star s2"></div>
<div className="star s4"></div>
</div>

<div className="pointer-events-none fixed inset-0 z-50" style={{background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)', mixBlendMode: 'multiply'}}></div>

<nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="uppercase text-lg font-bold text-zinc-100 tracking-tighter cursor-pointer transition-colors hover:text-white" href="#" style={{letterSpacing: '-0.05em'}}>
          WIN
        </a>
<div className="hidden md:flex text-sm font-bold text-zinc-500 tracking-wide gap-x-12 gap-y-12 items-center">
<a className="transition-colors duration-300 hover:text-zinc-200" href="#about">
            About
          </a>
<a className="transition-colors duration-300 hover:text-zinc-200" href="#services">
            Services
          </a>
<a className="transition-colors duration-300 hover:text-zinc-200" href="#work">
            Work
          </a>
<a className="transition-colors duration-300 hover:text-zinc-200" href="#contact">
            Contact
          </a>
</div>
<a className="transition-colors duration-300 flex items-center gap-2 group hover:text-white text-base font-semibold text-zinc-300 tracking-wide" href="#contact">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-20 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500/50"></span>
</span>
          Available
        </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[20%] left-[15%] w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-20 animate-[pulse_4s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(49,46,129,0.8) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full blur-[100px] opacity-20 animate-[pulse_6s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(217,119,6,0.6) 0%, rgba(0,0,0,0) 70%)'}}></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<h1 className="text-5xl md:text-7xl tracking-tight mb-6 drop-shadow-sm text-zinc-50 font-light" style={{fontFamily: '\'Newsreader\', serif'}}>
<strong className="font-bold decode-text cursor-default inline-block text-7xl md:text-9xl mr-2 md:mr-4" data-has-trigger="true" data-value="Win">
            Win
          </strong>
<span className="inline-block text-5xl md:text-6xl font-bold cursor-default mr-2 md:mr-4 align-baseline">
            :
          </span>
<span className="decode-text cursor-default inline-block" data-has-trigger="true" data-value="The Resolver.">
            The Resolver.
          </span>
</h1>
<p className="font-semibold max-w-md mx-auto leading-loose text-zinc-400 text-lg md:text-xl">
          I untangle the complex. Quietly.
        </p>
<div className="mt-20 animate-bounce opacity-30">
<iconify-icon height="20" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 relative" id="about">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-10 animate-[pulse_7s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(79,70,229,0.5) 0%, rgba(0,0,0,0) 70%)'}}></div>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
<div className="md:col-span-5 md:sticky md:top-32">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-zinc-100" style={{fontFamily: '\'Newsreader\', serif'}}>
            The Architect
            <br/>
            of Calm.
          </h2>
<div className="h-px w-16 mt-8 bg-white/10"></div>
</div>
<div className="md:col-span-7 space-y-8 font-semibold leading-loose text-zinc-400 text-base md:text-lg">
<p className="">
            Complexity is rarely the enemy; it is simply a system waiting for
            the right perspective. I step into chaotic environments, dense
            architectures, and fragile operational webs to navigate them with
            calm precision.
          </p>
<p className="">
            My work exists in the space between rigorous logic and intuitive
            leaps. I find the loose threads, pull gently, and watch the noise
            fall away until only the essential structure remains. I don't just
            fix problems; I redesign the paradigm that created them.
          </p>
<p className="italic font-semibold text-zinc-500 pt-4 text-sm">
            * I also make a notoriously precise cup of pour-over hot cocoa.
            Balance, after all, is everything.
          </p>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-white/[0.02] border-y relative border-white/5" id="services">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-10 animate-[pulse_5s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(0,0,0,0) 70%)'}}></div>
</div>
<div className="max-w-6xl mx-auto">
<div className="mb-20 md:mb-32 text-center md:text-left">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-100" style={{fontFamily: '\'Newsreader\', serif'}}>
            Disciplines
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px border rounded-2xl overflow-hidden bg-white/5 border-white/5">

<div className="p-10 md:p-14 group hover:bg-white/[0.02] transition-colors duration-700 bg-[#050505]/60 backdrop-blur-md">
<iconify-icon className="mb-8 group-hover:text-indigo-300 transition-colors duration-500 text-indigo-400/60" height="28" icon="solar:map-point-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-zinc-200" style={{fontFamily: '\'Newsreader\', serif'}}>
              Strategy
            </h3>
<p className="font-semibold leading-loose text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 text-base">
              Charting the course through fog. Identifying the invisible levers
              that move mountains and aligning vision with execution.
            </p>
</div>

<div className="p-10 md:p-14 group hover:bg-white/[0.02] transition-colors duration-700 bg-[#050505]/60 backdrop-blur-md">
<iconify-icon className="mb-8 group-hover:text-indigo-300 transition-colors duration-500 text-indigo-400/60" height="28" icon="solar:server-square-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-zinc-200" style={{fontFamily: '\'Newsreader\', serif'}}>
              Systems
            </h3>
<p className="font-semibold leading-loose text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 text-base">
              Building architecture for sustainable motion. Turning fragmented,
              fragile processes into resilient, silent engines.
            </p>
</div>

<div className="p-10 md:p-14 group hover:bg-white/[0.02] transition-colors duration-700 bg-[#050505]/60 backdrop-blur-md">
<iconify-icon className="mb-8 group-hover:text-indigo-300 transition-colors duration-500 text-indigo-400/60" height="28" icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-zinc-200" style={{fontFamily: '\'Newsreader\', serif'}}>
              Solutions
            </h3>
<p className="font-semibold leading-loose text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 text-base">
              Elegant answers to stubborn questions. Designing interventions
              that feel less like fixes and more like epiphanies.
            </p>
</div>

<div className="p-10 md:p-14 group hover:bg-white/[0.02] transition-colors duration-700 bg-[#050505]/60 backdrop-blur-md">
<iconify-icon className="mb-8 group-hover:text-indigo-300 transition-colors duration-500 text-indigo-400/60" height="28" icon="solar:shield-keyhole-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-zinc-200" style={{fontFamily: '\'Newsreader\', serif'}}>
              Guidance
            </h3>
<p className="font-semibold leading-loose text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 text-base">
              A steady hand when stakes are highest. Providing objective clarity
              to leadership teams navigating critical transitions.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 relative" id="work">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-[0.07] animate-[pulse_8s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(56,189,248,0.5) 0%, rgba(0,0,0,0) 70%)'}}></div>
</div>
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-16 text-zinc-100" style={{fontFamily: '\'Newsreader\', serif'}}>
          Selected Evidence
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] bg-[#0a0a0a] rounded-xl overflow-hidden border cursor-pointer border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10"></div>

<img alt="Project Obsidian" className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-1000 group-hover:scale-105 transform ease-out grayscale group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h4 className="text-xl font-semibold tracking-tight mb-3 text-zinc-200" style={{fontFamily: '\'Newsreader\', serif'}}>
                  Project Obsidian
                </h4>
<p className="font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-loose text-zinc-400 text-sm">
                  Restructured a heavily fragmented international supply chain
                  into a singular, silent flow.
                </p>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] bg-[#0a0a0a] rounded-xl overflow-hidden border cursor-pointer border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10"></div>
<img alt="The Arch Initiative" className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-1000 group-hover:scale-105 transform ease-out grayscale group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h4 className="text-xl font-semibold tracking-tight mb-3 text-zinc-200" style={{fontFamily: '\'Newsreader\', serif'}}>
                  The Arch Initiative
                </h4>
<p className="font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-loose text-zinc-400 text-sm">
                  Translated a chaotic visionary roadmap into an executable,
                  grounded infrastructure.
                </p>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] bg-[#0a0a0a] rounded-xl overflow-hidden border cursor-pointer border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10"></div>
<img alt="Synthesis" className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-1000 group-hover:scale-105 transform ease-out grayscale group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h4 className="text-xl font-semibold tracking-tight mb-3 text-zinc-200" style={{fontFamily: '\'Newsreader\', serif'}}>
                  Synthesis
                </h4>
<p className="font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-loose text-zinc-400 text-sm">
                  Reconciled two fundamentally opposed technical cultures during
                  a hostile merger.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 flex justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
<iconify-icon className="animate-spin-slow" height="400" icon="solar:asterisk-linear" style={{animationDuration: '60s'}} width="400"></iconify-icon>
</div>
<div className="max-w-4xl relative z-10">
<p className="md:text-5xl tracking-tight leading-loose md:leading-loose text-zinc-200 font-normal text-3xl" style={{fontFamily: '\'Newsreader\', serif'}}>
          "Clarity over cleverness.
          <br/>
          Integrity over optics.
          <br/>
          The best solutions feel inevitably obvious, but only after they are
          discovered."
        </p>
</div>
</section>

<section className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-10 rounded-2xl border bg-[#050505]/50 backdrop-blur-sm relative border-white/5">
<iconify-icon className="absolute top-10 left-10 text-zinc-700" height="24" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="font-semibold leading-loose mt-10 mb-8 text-zinc-400 text-base">
              Win stepped into our operational chaos, asked three questions we
              hadn't thought of, and left behind a symphony. It was mildly
              terrifying how quickly everything made sense.
            </p>
<div className="flex items-center gap-3">
<div className="rounded-full flex items-center justify-center font-semibold bg-zinc-800 text-zinc-300 text-sm w-10 h-10">
                C
              </div>
<div>
<div className="font-semibold text-zinc-200 text-sm">CEO</div>
<div className="font-semibold text-zinc-600 text-sm">
                  Global Logistics Firm
                </div>
</div>
</div>
</div>

<div className="p-10 rounded-2xl border bg-[#050505]/50 backdrop-blur-sm relative border-white/5">
<iconify-icon className="absolute top-10 left-10 text-zinc-700" height="24" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="font-semibold leading-loose mt-10 mb-8 text-zinc-400 text-base">
              The ultimate safety net. Win is the person you call when the
              manual ends, the stakes are highest, and conventional wisdom has
              failed.
            </p>
<div className="flex items-center gap-3">
<div className="rounded-full flex items-center justify-center font-semibold bg-zinc-800 text-zinc-300 text-sm w-10 h-10">
                M
              </div>
<div>
<div className="font-semibold text-zinc-200 text-sm">Founder</div>
<div className="font-semibold text-zinc-600 text-sm">
                  Series B FinTech
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 md:py-64 px-6 relative" id="contact">
<div className="max-w-2xl mx-auto text-center flex flex-col items-center">
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 text-zinc-100 font-normal" style={{fontFamily: '\'Newsreader\', serif'}}>
          Initiate Dialogue.
        </h2>
<p className="font-semibold mb-12 max-w-sm leading-loose text-zinc-400 text-base md:text-lg">
          If you have a challenge worth solving, or a knot that refuses to
          untie,
          <strong className="font-bold text-zinc-200">reach out</strong>
          .
        </p>
<a className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-[#050505] text-sm font-semibold transition-all duration-300 overflow-hidden bg-zinc-100 hover:bg-white" href="mailto:avlpcomputers@gmail.com">
<span className="relative z-10 flex items-center gap-2">
            Transmit Signal
            <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>

<div className="absolute inset-0 bg-gradient-to-r translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out from-indigo-200/0 via-indigo-200/30 to-indigo-200/0"></div>
</a>
</div>
</section>

<div className="w-full">
<a aria-label="Call 307.223.2230" className="block w-full cursor-pointer" href="tel:3072232230" title="Call 307.223.2230">
<img alt="Win Dias Digital Business Card" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b5392e2-69fe-4696-a09c-f112e0a6be72_3840w.png"/>
</a>
</div>
<footer className="py-10 px-6 border-t text-center border-white/5">
<div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
<div className="tracking-tighter uppercase text-zinc-600 font-bold text-sm" style={{letterSpacing: '-0.05em'}}>
          WIN
        </div>
<div className="font-semibold text-zinc-600 text-sm">
          © 2026. Elegantly resolved.
        </div>
</div>
</footer>
<div className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center opacity-30 mix-blend-screen" id="scroll-knot-wrapper">
<div className="w-[90vw] md:w-[600px] h-[90vw] md:h-[600px] transition-transform duration-75" id="scroll-knot-container">
<svg className="w-full h-full" viewbox="0 0 100 100">
<defs>
<filter height="140%" id="knot-glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="1.5"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>
<path d="M50,15 C20,15 15,40 30,60 C45,80 75,70 80,45 C85,20 60,10 40,25 C20,40 25,75 50,85 C75,95 90,65 75,40 C60,15 30,25 20,50 C10,75 40,90 60,75 C80,60 85,30 65,15 C45,0 15,20 25,45 C35,70 65,80 80,60 C95,40 70,10 50,15 Z" fill="none" filter="url(#knot-glow)" id="anim-knot" stroke="#818cf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeDasharray: '744.321', strokeDashoffset: '0'}}></path>
<path d="M50,80 C50,80 15,55 15,30 C15,15 35,10 50,25 C65,10 85,15 85,30 C85,55 50,80 50,80 Z" fill="none" filter="url(#knot-glow)" id="anim-heart" stroke="#ec4899" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{opacity: '0'}}></path>
</svg>
</div>
</div>
<div className="fixed inset-0 pointer-events-none z-[2] flex items-center justify-center transition-opacity duration-500 opacity-0" id="side-emojis">
<div className="firework"></div>
<div className="firework"></div>
<div className="firework"></div>
<div className="firework"></div>
</div>



    </>
  );
}
