import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        !function(){var e=function(){window.UnicornStudio&&!window.UnicornStudio.isInitialized&&(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)};window.UnicornStudio?e():(window.UnicornStudio={isInitialized:!1},function(){var n=document.createElement("script");n.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",n.onload=e,(document.head||document.body).appendChild(n)}())}();
      


                (function() {
                        const needle = document.getElementById('gauge-needle');
                        const progress = document.getElementById('gauge-progress');
                        const valEl = document.getElementById('speed-value');
                        const decEl = document.getElementById('speed-decimal');
                        const btn = document.getElementById('stop-test-btn');
                        const btnText = document.getElementById('stop-btn-text');
                        const btnIcon = document.getElementById('stop-btn-icon');

                        // Gauge Configuration
                        const MAX_SPEED = 1000;
                        const MAX_STROKE = 612; // 270 degrees arc length for r=130
                        const START_ANGLE = 135;
                        const RANGE_ANGLE = 270;

                        let isTesting = true;
                        let animationId;
                        let currentSmoothedSpeed = null; // For smoothing

                        function updateGauge(speed) {
                            // Clamp speed between 0 and MAX_SPEED
                            const clampedSpeed = Math.min(Math.max(speed, 0), MAX_SPEED);
                            const normalized = clampedSpeed / MAX_SPEED;

                            // Calculate rotation
                            const rotation = START_ANGLE + (normalized * RANGE_ANGLE);

                            // Apply transforms
                            if(needle) needle.setAttribute('transform', `rotate(${rotation} 150 150)`);

                            // Calculate stroke
                            const dash = normalized * MAX_STROKE;
                            if(progress) progress.style.strokeDasharray = `${dash} 1000`;

                            // Update Text
                            if(valEl) valEl.textContent = Math.floor(clampedSpeed);
                            if(decEl) decEl.textContent = Math.floor((clampedSpeed % 1) * 10);
                        }

                        function loop(timestamp) {
                            if (!isTesting) return;

                            // Continuous Sine Wave Animation for looping effect
                            const time = timestamp / 2000;

                            // Generate a wave that oscillates between 0 and 1
                            const wave = (Math.sin(time) + 1) / 2;

                            // Add randomized noise
                            const noise = (Math.random() * 10 - 5);

                            // Calculate current speed
                            let targetSpeed = (wave * MAX_SPEED) + noise;

                            // Initialize on first frame
                            if (currentSmoothedSpeed === null) currentSmoothedSpeed = targetSpeed;

                            // Apply linear interpolation for smoothing
                            currentSmoothedSpeed += (targetSpeed - currentSmoothedSpeed) * 0.05;

                            updateGauge(Math.max(0, Math.min(MAX_SPEED, currentSmoothedSpeed)));
                            animationId = requestAnimationFrame(loop);
                        }

                        // Button Event Listener
                        if(btn) {
                            btn.addEventListener('click', () => {
                                isTesting = !isTesting;

                                if (isTesting) {
                                    // Start Testing State
                                    btnText.textContent = 'Stop Testing';
                                    // Pause Icon
                                    if(btnIcon) btnIcon.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1" ry="1"></rect><rect x="14" y="4" width="4" height="16" rx="1" ry="1"></rect>';

                                    // Resume/Start Loop
                                    loop(performance.now());
                                } else {
                                    // Stop Testing State (Paused)
                                    btnText.textContent = 'Start New Test';
                                    // Play Icon
                                    if(btnIcon) btnIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';

                                    // Stop Animation Loop (Pauses visual state)
                                    if(animationId) cancelAnimationFrame(animationId);
                                }
                            });
                        }

                        // Initialize
                        loop(performance.now());
                    })();
              


          (function() {
            // Intersection Observer with a tight margin to detect middle of viewport
            const options = {
              root: null,
              rootMargin: '-45% 0px -45% 0px',
              threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const index = entry.target.getAttribute('data-index');
                  updateActiveState(index);
                }
              });
            }, options);

            // Observe all testimonial items
            const items = document.querySelectorAll('.testimonial-item');
            items.forEach(item => observer.observe(item));

            // Click to scroll functionality for avatars
            const avatars = document.querySelectorAll('.avatar-indicator');
            avatars.forEach(avatar => {
              avatar.addEventListener('click', () => {
                const targetIndex = avatar.getAttribute('data-target');
                const targetItem = document.querySelector(`.testimonial-item[data-index="${targetIndex}"]`);
                if (targetItem) {
                  targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  updateActiveState(targetIndex);
                }
              });
            });

            function updateActiveState(index) {
              // Toggle active class on text items
              items.forEach(item => {
                if (item.getAttribute('data-index') === index) {
                  item.classList.add('active');
                } else {
                  item.classList.remove('active');
                }
              });

              // Toggle active class on avatars
              avatars.forEach(avatar => {
                if (avatar.getAttribute('data-target') === index) {
                  avatar.classList.add('active');
                } else {
                  avatar.classList.remove('active');
                }
              });
            }

            // Initialize first item as active
            setTimeout(() => updateActiveState('0'), 100);
          })();
        


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        document.querySelectorAll('.aura-reveal').forEach((el) => {
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter(c => c.classList.contains('aura-reveal'));
            const index = siblings.indexOf(el);
            if (index > 0) el.style.animationDelay = `${index * 100}ms`;
          }
          observer.observe(el);
        });

        document.querySelectorAll('.flashlight-card').forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          });
        });
      });
    


      const initReveal=()=>{gsap.registerPlugin(ScrollTrigger);const t=document.querySelectorAll(".staggered-reveal");t.forEach(e=>{const r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),n=[];let l;for(;l=r.nextNode();)l.textContent.trim().length>0&&n.push(l);n.forEach(r=>{const n=r.textContent.split(/\s+/).filter(e=>e.trim().length>0),l=document.createDocumentFragment();n.forEach((e,r)=>{const n=document.createElement("span");n.className="reveal-word-mask",n.innerHTML=`<span class="reveal-word-inner">${e}</span>`,l.appendChild(n),r<n.length-1&&l.appendChild(document.createTextNode(" "))}),r.parentNode.replaceChild(l,r)}),gsap.fromTo(e.querySelectorAll(".reveal-word-inner"),{y:"110%"},{y:"0%",duration:1,ease:"power4.out",stagger:.03,scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none reverse"}})})};const check=()=>{window.gsap&&window.ScrollTrigger?initReveal():setTimeout(check,50)};check();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 left-0 w-full h-[800px] z-0" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)'}}>
<div className="relative w-full h-full">
<div className="absolute inset-0" data-us-project="bKN5upvoulAmWvInmHza"></div>
</div>

</div>

<div className="fixed inset-0 bg-stripes pointer-events-none z-0"></div>


<nav className="fixed flex [animation:animationIn_0.8s_ease-out_0.1s_both] z-50 pr-4 pl-4 top-6 right-0 left-0 justify-center">
<nav className="fixed flex z-50 pr-4 pl-4 top-0 right-0 left-0 justify-center">
<div className="flex shadow-black/50 bg-black/50 w-full max-w-7xl border-white/10 border rounded-none pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://cdn.midjourney.com/a3840b63-36c4-4a6b-80dd-5c41d0f4a259/0_0.png?w=800&amp;q=80)] bg-cover rounded" href="/home"></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="/benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="/features">Features</a>
<a className="hover:text-white transition-colors" href="/plans">Plans</a>
<a className="hover:text-white transition-colors" href="/contact">Contact</a>
</div>
<a className="hover:bg-zinc-200 transition-colors text-sm font-semibold text-black bg-white rounded-full px-6 py-2.5" href="/getstarted">
      Get Started
    </a>
</div>
</nav>
</nav>
<main className="z-10 relative">

<div className="container border-x flex flex-col [animation:animationIn_0.8s_ease-out_0.2s_both] text-center max-w-7xl border-white/10 mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 gap-x-2 gap-y-2 items-center">

<div className="inline-flex gap-2 uppercase aura-reveal is-visible text-xs font-medium text-zinc-300 tracking-wider bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-zap" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
          Version 2.0 Now Live
        </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 max-w-5xl mx-auto leading-[1.1] staggered-reveal">
          Unleash Maximum
          <br/>
          Internet Speed
        </h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal aura-reveal is-visible" style={{animationDelay: '100ms'}}>
          Optimize your connection with advanced routing, reduced latency, and
          packet loss prevention for gaming and streaming.
        </p>

<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(34,211,238,0.35)] aura-reveal is-visible rounded-full relative shadow-[0_8px_40px_rgba(34,211,238,0.25)]" href="#" style={{-Spread: '90deg', -ShimmerColor: 'rgba(255,255,255,0.6)', -Radius: '9999px', -Speed: '4s', -Cut: '1px', -Bg: 'rgba(255, 255, 255, 0.05)', animationDelay: '200ms'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative items-center" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10,11,20,0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="relative z-10 whitespace-nowrap font-sans">
              Boost Connection
            </span>
<span className="relative z-10 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 ml-1 group-hover:bg-white/20 transition-colors">
<svg className="" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<style>
              @keyframes borderBeamRotation {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
              }
            </style>
</div>
</a>
</div>
<div className="container border-x [animation:animationIn_0.8s_ease-out_0.3s_both] max-w-7xl border-white/10 border-b mr-auto ml-auto pt-0 pr-6 pb-24 pl-6 gap-x-8 gap-y-8">
<div className="flex flex-col overflow-hidden group font-sans bg-[#0A0A0A] h-full border-white/10 border rounded-xl relative shadow-2xl gap-x-8 gap-y-8">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

<header className="flex z-20 border-white/5 border-b pt-5 pr-6 pb-5 pl-6 backdrop-blur-sm items-center justify-between">

<div className="flex items-center gap-3 select-none cursor-pointer group/logo">
<span className="group-hover/logo:text-cyan-50 transition-colors text-lg font-semibold text-white tracking-tight">
                FINEX
              </span>
</div>

<nav className="hidden md:flex items-center p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-white/10 shadow-sm transition-all hover:bg-white/15">
                Dashboard
              </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                History
              </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                Settings
              </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                Network
              </button>
</nav>

<div className="flex items-center gap-5">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer group/status">
<div className="relative">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 blur-[2px] opacity-50"></div>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover/status:text-zinc-200">
                  Online
                </span>
</div>
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10 flex items-center justify-center text-xs font-bold text-white shadow-inner cursor-pointer hover:border-zinc-500 transition-all">
                N
              </div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 flex-1 z-10 lg:p-8 gap-8 pt-6 pr-6 pb-6 pl-6 relative gap-x-8 gap-y-8">

<div className="lg:col-span-3 flex flex-col h-full">
<div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6 px-1">
                Connection
              </div>
<div className="flex flex-col gap-3">

<div className="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover/item:text-cyan-400 group-hover/item:border-cyan-400/20 transition-all">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div className="">
<div className="text-white text-sm font-medium tracking-tight">
                      Frankfurt, DE
                    </div>
<div className="text-zinc-500 text-xs">Server Location</div>
</div>
</div>

<div className="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover/item:text-cyan-400 group-hover/item:border-cyan-400/20 transition-all">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<div className="">
<div className="text-white text-sm font-medium tracking-tight tracking-normal font-mono">
                      1.119.389.99
                    </div>
<div className="text-zinc-500 text-xs">Public IP Address</div>
</div>
</div>

<div className="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover/item:text-cyan-400 group-hover/item:border-cyan-400/20 transition-all">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
<path d="M8.5 8.5v.01"></path>
<path d="M16 15.5v.01"></path>
<path d="M12 12v.01"></path>
<path d="M11 17v.01"></path>
<path d="M7 14v.01"></path>
</svg>
</div>
<div className="">
<div className="text-white text-sm font-medium tracking-tight">
                      Starlink
                    </div>
<div className="text-zinc-500 text-xs">ISP Provider</div>
</div>
</div>
</div>

<div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-white">
                    System Optimal
                  </span>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">
                  Your connection routing is currently optimized for low-latency
                  gaming.
                </p>
</div>
</div>

<div className="lg:col-span-6 flex flex-col relative items-center justify-center">

<div className="blur-[60px] pointer-events-none transform bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full absolute top-0 right-0 bottom-0 left-0 scale-75"></div>
<h1 className="text-sm font-medium text-zinc-400 uppercase tracking-[0.2em] mb-8 relative z-10">
                Bandwidth Performance
              </h1>

<div className="aspect-square flex z-10 w-full max-w-[420px] relative items-center justify-center">
<svg className="w-full h-full" viewbox="0 0 300 300">
<defs>
<lineargradient id="gaugeGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.2"></stop>
<stop offset="50%" stop-color="#22d3ee" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#22d3ee"></stop>
</lineargradient>
<filter height="200%" id="needleGlow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<circle className="" cx="150" cy="150" fill="none" r="130" stroke="#27272a" stroke-dasharray="4 6" stroke-dashoffset="0" strokeWidth="1" style={{strokeDasharray: '612, 1000'}} transform="rotate(135 150 150)"></circle>

<circle className="drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]" cx="150" cy="150" fill="none" id="gauge-progress" r="130" stroke="url(#gaugeGradient)" stroke-dasharray="546 1000" strokeLinecap="round" strokeWidth="5" style={{strokeDasharray: '321.262, 1000'}} transform="rotate(135 150 150)"></circle>

<g className="" transform="translate(150, 150)">
<rect fill="#3f3f46" height="1.5" transform="rotate(45)" width="8" x="115" y="-1"></rect>
<rect className="" fill="#3f3f46" height="1.5" transform="rotate(90)" width="8" x="115" y="-1"></rect>
<rect fill="#3f3f46" height="1.5" transform="rotate(135)" width="8" x="115" y="-1"></rect>
<rect fill="#3f3f46" height="1.5" transform="rotate(180)" width="8" x="115" y="-1"></rect>
<rect className="" fill="#3f3f46" height="1.5" transform="rotate(225)" width="8" x="115" y="-1"></rect>
<rect fill="#3f3f46" height="1.5" transform="rotate(270)" width="8" x="115" y="-1"></rect>
<rect fill="#3f3f46" height="1.5" transform="rotate(315)" width="8" x="115" y="-1"></rect>
</g>

<g className="" filter="url(#needleGlow)" id="gauge-needle" transform="rotate(276.73336955670254 150 150)">
<line className="" opacity="0.9" stroke="white" strokeLinecap="round" strokeWidth="1.5" x1="150" x2="270" y1="150" y2="150"></line>
<circle cx="150" cy="150" fill="white" r="4"></circle>
<circle cx="150" cy="150" fill="#020202" r="2"></circle>
</g>
</svg>
<div className="flex flex-col absolute bottom-[12%] left-0 right-0 items-center justify-end">
<div className="text-[64px] leading-none tabular-nums text-white tracking-tighter font-extralight drop-shadow-2xl">
<span className="" id="speed-value">524</span>
<span className="text-3xl text-zinc-500">
                      .
                      <span className="" id="speed-decimal">9</span>
</span>
</div>
</div>
</div>

<div className="flex flex-wrap gap-4 mt-8 items-center">
<button className="group/btn inline-flex hover:scale-105 transition-all duration-300 items-center gap-2 py-4 px-8 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<svg className="lucide lucide-square w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="stop-circle-bold-duotone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#ffffff" opacity=".5"></path>
<path d="M8.586 8.586C8 9.172 8 10.114 8 12s0 2.828.586 3.414S10.114 16 12 16s2.828 0 3.414-.586S16 13.886 16 12s0-2.828-.586-3.414S13.886 8 12 8s-2.828 0-3.414.586" fill="#ffffff"></path>
</svg>
<span className="text-sm font-semibold text-white tracking-wide uppercase">
                    Stop Testing
                  </span>
</button>
<button className="group/btn inline-flex hover:scale-105 transition-all duration-300 items-center gap-2 py-4 px-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
<svg className="lucide lucide-download text-cyan-400 w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="file-download-bold-duotone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(34, 211, 238)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" fill="#22d3ee" fill-rule="evenodd" opacity=".5"></path>
<path d="M9.013 19.047a.75.75 0 0 1-1.026 0l-2-1.875a.75.75 0 0 1 1.026-1.094l.737.69V13.5a.75.75 0 0 1 1.5 0v3.269l.737-.691a.75.75 0 0 1 1.026 1.094zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z" fill="#22d3ee"></path>
</svg>
<span className="text-sm font-semibold text-cyan-400 tracking-wide uppercase">
                    Mbps Download
                  </span>
</button>
</div>

</div>

<div className="lg:col-span-3 flex flex-col gap-6 justify-center">

<div className="group/stat relative overflow-hidden bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.02]">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Download
                  </span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-light text-white tracking-tight tabular-nums">
                    892.4
                  </span>
<span className="text-xs text-zinc-500">Mbps</span>
</div>

<div className="h-8 mt-4 w-full opacity-50 group-hover/stat:opacity-100 transition-opacity">
<svg className="w-full h-full text-cyan-500/40" fill="none" preserveaspectratio="none" viewbox="0 0 100 24">
<path d="M0 18 L10 14 L20 16 L30 10 L40 12 L50 8 L60 14 L70 10 L80 6 L90 8 L100 4" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="" d="M0 18 L10 14 L20 16 L30 10 L40 12 L50 8 L60 14 L70 10 L80 6 L90 8 L100 4 V 24 H 0 Z" fill="currentColor" fillOpacity="0.2"></path>
</svg>
</div>
</div>

<div className="group/stat relative overflow-hidden bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-purple-500/30 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.02]">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Upload
                  </span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-light text-white tracking-tight tabular-nums">
                    452.1
                  </span>
<span className="text-xs text-zinc-500">Mbps</span>
</div>
<div className="h-8 mt-4 w-full opacity-50 group-hover/stat:opacity-100 transition-opacity">
<svg className="w-full h-full text-purple-500/40" fill="none" preserveaspectratio="none" viewbox="0 0 100 24">
<path d="M0 20 L15 18 L30 14 L45 16 L60 10 L75 12 L90 8 L100 12" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="group/stat relative overflow-hidden bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-emerald-500/30 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.02]">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h5"></path>
<path d="M17 12h5"></path>
<path d="M7 12v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5"></path>
<path d="M7 12V7a5 5 0 0 1 10 0v5"></path>
</svg>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Ping
                  </span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-light text-white tracking-tight tabular-nums">
                    4
                  </span>
<span className="text-xs text-zinc-500">ms</span>
</div>
<div className="w-full bg-zinc-800 h-1 mt-6 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[15%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>

<section className="container border-x [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
<div className="flex-1">
<h2 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] text-6xl text-white tracking-tight font-oswald staggered-reveal">
              WIN ON EVERY MILLISECOND
            </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="leading-relaxed lg:text-left text-lg text-zinc-400 text-left">
              lobal infrastructure, tuned for real-time performance.
            </p>
<div className="w-full flex justify-end">
<span className="text-sm text-zinc-500 font-mono">001 — 003</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-black/40 border-white/10 border rounded-none backdrop-blur-sm">
<div className="lg:col-span-7 flex flex-col flashlight-card aura-reveal is-visible" style={{-MouseX: '660px', -MouseY: '443px'}}>
<div className="md:p-12 group bg-gradient-to-br from-white/[0.02] to-transparent border-white/10 border-b pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex flex-col md:flex-row items-center gap-12 h-full">
<div className="relative w-full max-w-xs shrink-0">
<div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative z-20 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
<div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 shadow-lg shadow-white/10">
<svg className="lucide lucide-shield-check w-6 h-6 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="text-sm font-medium text-white mb-0.5">
                      Optimized
                    </div>
<div className="text-xs text-zinc-500 mb-6 font-mono">
                      Ping: 14ms
                    </div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 via-white to-red-600 shadow-inner"></div>
<div className="text-xs text-zinc-400">Frankfurt, DE</div>
<svg className="lucide lucide-chevron-right w-3 h-3 text-zinc-600 ml-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
<div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full z-10 opacity-50"></div>
</div>
<div className="text-left">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                    Low Latency
                  </h3>
<p className="text-base text-zinc-400 leading-relaxed mb-6">
                    Experience gaming and streaming without interruptions. Our
                    smart routing finds the shortest path to game servers.
                  </p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors group" href="#">
                    See our plans
                    <svg className="lucide lucide-arrow-right w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 flex-grow">
<div className="md:p-10 overflow-hidden group bg-gradient-to-br from-transparent to-white/[0.02] pt-8 pr-8 pb-8 pl-8 relative">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 relative z-10">
                  Packet Loss Fix
                </h3>
<p className="text-sm text-zinc-400 relative z-10">
                  Stabilize your connection instantly.
                </p>
</div>
<div className="p-8 md:p-10 flex flex-col justify-center bg-black">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-1">
                  -40%
                </div>
<div className="text-sm text-zinc-400">Average Ping Reduction</div>
</div>
</div>
</div>
<div className="lg:col-span-5 md:p-12 flex flex-col flashlight-card aura-reveal is-visible bg-zinc-900/20 pt-8 pr-8 pb-8 pl-8 justify-between" style={{animationDelay: '100ms', -MouseX: '18.671875px', -MouseY: '321px'}}>
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
                Competitive Edge In Every Game
              </h3>
<p className="text-base text-zinc-400 leading-relaxed mb-10">
                Don't let your ISP's bad routing cost you the match. Finex
                ensures your packets take the most direct route.
              </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<svg className="lucide lucide-zap w-5 h-5 text-white shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<span className="text-sm text-zinc-300">
                    Reduce Latency &amp; Jitter
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-shield w-5 h-5 text-white shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-sm text-zinc-300">
                    DDoS Protection Included
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-route w-5 h-5 text-white shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="19" r="3"></circle>
<path className="" d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
<circle cx="18" cy="5" r="3"></circle>
</svg>
<span className="text-sm text-zinc-300">
                    Smart Traffic Routing
                  </span>
</li>
</ul>
</div>
<button className="hover:bg-zinc-200 transition-colors text-sm font-semibold text-black bg-white w-fit rounded-full pt-2.5 pr-6 pb-2.5 pl-6">
              Get Started
            </button>
</div>
</div>

</section>
<section className="container border-x [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="flex flex-col lg:flex-row lg:items-end gap-12 mb-16 gap-x-12 gap-y-12 justify-between">
<div className="flex-1">
<h2 className="text-6xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9] text-white staggered-reveal">
              WIN ON EVERY MILLISECOND
            </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
              Your connection, supercharged by our global node network.
            </p>
<div className="flex w-full justify-end">
<span className="text-sm text-zinc-500 font-mono">002 — 003</span>
</div>
</div>
</div>

<div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden group shadow-purple-900/20 aura-reveal [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-[#0A0A0A] w-full z-10 border-white/10 border mb-10 relative shadow-2xl">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-800/20 blur-[120px] rounded-full pointer-events-none"></div>

<div className="z-10 bg-gradient-to-t from-[#020202] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-10 md:inset-16 flex border border-white/5 bg-[#050505] shadow-2xl z-20">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-black/20 backdrop-blur-md">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<div className="w-8 h-8 bg-purple-600/20 flex items-center justify-center border-l-2 border-purple-500">
<svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div className="w-8 h-8 flex items-center justify-center opacity-50">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="flex-1 p-8 relative overflow-hidden">

<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<span className="text-sm font-mono text-zinc-300 tracking-wider">
                    OPTIMIZATION_ACTIVE
                  </span>
</div>
<div className="flex gap-3">
<div className="px-3 py-1 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer">
                    Protocol: Wireguard
                  </div>
<div className="px-3 py-1 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer">
                    IP: 192.168.X.X
                  </div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 aura-reveal">

<div className="border border-white/10 bg-white/[0.02] p-4 group/card hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-purple-500/10 border border-purple-500/20">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path className="" d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
<path className="" d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
<path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 font-mono">
                      Reduced from 45ms
                    </span>
</div>
<div className="text-lg text-white font-medium">12ms</div>
<div className="text-xs text-zinc-500 mt-1">
                    Military grade standard
                  </div>
</div>

<div className="border border-white/10 bg-white/[0.02] p-4 group/card hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-blue-500/10 border border-blue-500/20">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
<path d="M8.5 8.5v.01"></path>
<path d="M16 15.5v.01"></path>
<path d="M12 12v.01"></path>
<path d="M11 17v.01"></path>
<path d="M7 14v.01"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 font-mono">
                      No Packet Loss
                    </span>
</div>
<div className="text-lg text-white font-medium">100%</div>
<div className="text-xs text-zinc-500 mt-1">Latency: 14ms</div>
</div>

<div className="col-span-2 mt-4">
<div className="text-xs text-zinc-500 font-mono mb-3 uppercase tracking-wider">
                    Recent Activity
                  </div>
<div className="space-y-1">
<div className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-green-500"></div>
<span className="text-sm text-zinc-300">
                          Route Re-optimized
                        </span>
</div>
<span className="text-xs text-zinc-600 font-mono">
                        00:00:05
                      </span>
</div>
<div className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-blue-500"></div>
<span className="text-sm text-zinc-400">
                          Jitter Spike Mitigated
                        </span>
</div>
<span className="text-xs text-zinc-600 font-mono">
                        00:01:12
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-transparent to-transparent z-30 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent z-30 pointer-events-none"></div>

<div className="absolute right-[5%] top-[20%] w-24 h-24 border border-white/5 bg-white/[0.02] backdrop-blur-sm z-10 rotate-45 opacity-20"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll border-white/10 border-t">
<div className="group cursor-pointer pt-6 pr-4">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Smart Pathing
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              We find the fastest physical path to the game server.
            </p>
</div>
<div className="relative pt-6 pr-4 px-0 md:px-4 cursor-pointer">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.7)]"></div>
<h3 className="text-sm font-semibold text-white mb-2">FPS Boost</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
              Free up system resources and optimize network drivers.
            </p>
</div>
<div className="group pt-6 pr-4 px-0 md:px-4 cursor-pointer">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Packet Loss Fix
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Redundant data transmission ensures 0% packet loss.
            </p>
</div>
<div className="group pt-6 px-0 md:px-4 cursor-pointer">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Game Support
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Custom profiles for over 1000+ competitive titles.
            </p>
</div>
</div>
</section>

<section className="container border-x [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<style>
          .testimonial-item {
            transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
            opacity: 0.15;
            filter: blur(4px);
            transform: scale(0.96) translateX(-10px);
          }
          .testimonial-item.active {
            opacity: 1;
            filter: blur(0);
            transform: scale(1) translateX(0);
          }
          .avatar-indicator {
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            opacity: 0.3;
            filter: grayscale(100%);
            transform: scale(1);
            border-color: rgba(255, 255, 255, 0.05);
            box-shadow: none;
          }
          .avatar-indicator.active {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1.4);
            border-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 40px -5px rgba(168, 85, 247, 0.4);
            z-index: 20;
          }
          .avatar-indicator::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
          }
        </style>

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 relative z-10">
<div className="flex-1">
<h2 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] text-6xl text-white tracking-tight font-oswald">
              What They Said
            </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12">
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
              Voices of our satisfied clients from around the globe.
            </p>
<div className="flex w-full justify-end">
<span className="text-sm text-zinc-500 font-mono">003 — 004</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative min-h-[800px]">

<div className="lg:col-span-9 flex flex-col gap-40 lg:pb-40 py-12">

<div className="testimonial-item group relative aura-reveal" data-index="0">
<div className="md:pl-12 relative">

<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tight mb-8">
                  My ping dropped from 80ms to 35ms instantly. I can finally
                  compete at a high level without lag spikes.
                </blockquote>
<div className="flex items-center gap-4">

<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Alex Chen
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Semi-Pro Valorant Player
                    </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="1">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tight mb-8">
                  Incredible reliability and encryption standards. Highly
                  recommended for enterprise usage!
                </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Sarah Jenkins
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Director at Style Vision
                    </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="2">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tight mb-8">
                  Transformed our connectivity across borders into a seamless
                  experience. Superb!
                </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Marcus Thorne
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Freelance Journalist
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-3 sticky top-[40vh] flex-col items-end gap-8 pr-4 h-fit">
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="0">
<img className="w-full h-full object-cover transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="1">
<img className="w-full h-full object-cover transition-all" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="2">
<img className="w-full h-full object-cover transition-all" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
</div>
</div>

</section><section className="container border-x [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="flex flex-col lg:flex-row lg:items-end mb-16 gap-x-12 gap-y-12 justify-between">
<div className="flex-1">
<h2 className="text-6xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9] text-white staggered-reveal">
              WIN ON EVERY MILLISECOND
            </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
              No hourly rates. No surprise charges. No scope creep penalties. Just transparent pricing for transformational work.
            </p>
<div className="flex w-full justify-end">
<span className="text-sm text-zinc-500 font-mono">004 — 004</span>
</div>
</div>
</div>

<div className="container border-x [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll max-w-7xl border-white/10 border border-b mr-auto ml-auto pt-0 pr-6 pb-0 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-white/10 border-b bg-black/20">

<div className="group relative flex flex-col md:p-12 p-8 h-full flashlight-card aura-reveal transition-all duration-300 ease-out hover:z-20 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:bg-zinc-900/80 bg-[#020202]" style={{-MouseX: '558px', -MouseY: '307.609375px'}}>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="mb-16">
<h2 className="text-3xl font-normal mb-6 tracking-tight text-white/80 group-hover:text-white transition-colors">
          Monthly Pass
        </h2>
<p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed max-w-lg">
          Full access to our global infrastructure. Ideal for climbing
          the ranks during a specific competitive season.
        </p>
</div>
<div className="border-t border-white/10 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<span className="block text-zinc-600 group-hover:text-zinc-500 text-sm mb-6 font-medium uppercase tracking-wider transition-colors">
              Includes
            </span>
<ul className="space-y-4 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
<li className="flex items-start gap-3">
<span className="text-zinc-700 group-hover:text-zinc-500 transition-colors">—</span>
                AI Smart Path Routing
              </li>
<li className="flex items-start gap-3">
<span className="text-zinc-700 group-hover:text-zinc-500 transition-colors">—</span>
                50+ Global Node Locations
              </li>
<li className="flex items-start gap-3">
<span className="text-zinc-700 group-hover:text-zinc-500 transition-colors">—</span>
                Ultra-fast WireGuard Protocol
              </li>
</ul>
<div className="mt-24">
<div className="text-4xl lg:text-5xl font-normal tracking-tight text-white/70 group-hover:text-white transition-colors duration-300">
                $19.99
              </div>
<span className="text-xs text-zinc-600 group-hover:text-zinc-500 font-mono transition-colors">
                Billed monthly
              </span>
</div>
</div>
<div className="flex flex-col h-full">
<div className="mb-10">
<span className="block text-zinc-600 group-hover:text-zinc-500 text-sm mb-2 font-medium uppercase tracking-wider transition-colors">
                Activation
              </span>
<div className="text-zinc-300 group-hover:text-white transition-colors">Instant Access</div>
</div>
<div className="mb-12">
<span className="block text-zinc-600 group-hover:text-zinc-500 text-sm mb-2 font-medium uppercase tracking-wider transition-colors">
                Guarantee
              </span>
<div className="text-zinc-300 group-hover:text-white leading-relaxed text-sm transition-colors">
                30-Day Money Back Guarantee
              </div>
</div>
<div className="mt-auto pt-6">
<button className="w-full rounded-full border border-white/10 bg-zinc-900 pt-4 pr-6 pb-4 pl-6 text-sm text-zinc-300 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:border-transparent group-hover:scale-[1.02]">
                Start Monthly Plan
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col p-8 md:p-12 h-full flashlight-card aura-reveal transition-all duration-300 ease-out hover:z-20 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:bg-zinc-900/80 bg-[#020202]" style={{animationDelay: '100ms', -MouseX: '554px', -MouseY: '498.609375px'}}>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="mb-16">
<div className="flex justify-between items-center mb-6">
<h2 className="text-3xl font-normal tracking-tight text-white/80 group-hover:text-white transition-colors">
            Annual Pro
          </h2>

<span className="text-[10px] uppercase font-bold border px-2 py-0.5 rounded bg-zinc-900 border-white/10 text-zinc-500 group-hover:bg-cyan-400/10 group-hover:text-cyan-300 group-hover:border-cyan-400/20 transition-all duration-300">
            Popular
          </span>
</div>
<p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed max-w-lg">
          The ultimate choice for serious gamers. Includes high-priority
          server nodes and early access to beta optimizations.
        </p>
</div>
<div className="border-t border-white/10 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<span className="block text-zinc-600 group-hover:text-zinc-500 text-sm mb-6 font-medium uppercase tracking-wider transition-colors">
              Includes
            </span>
<ul className="space-y-4 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
<li className="flex items-start gap-3">
<span className="text-zinc-700 group-hover:text-cyan-400/50 transition-colors">—</span>
<span className="group-hover:text-white text-zinc-400 transition-colors">Priority Node Access</span>
</li>
<li className="flex items-start gap-3">
<span className="text-zinc-700 group-hover:text-cyan-400/50 transition-colors">—</span>
<span className="group-hover:text-white text-zinc-400 transition-colors">
                  Zero Packet Loss Guarantee
                </span>
</li>
<li className="flex items-start gap-3">
<span className="text-zinc-700 group-hover:text-cyan-400/50 transition-colors">—</span>
<span className="group-hover:text-white text-zinc-400 transition-colors">Multi-Device Support (3)</span>
</li>
</ul>
<div className="mt-24">
<div className="text-4xl lg:text-5xl font-normal tracking-tight text-white/70 group-hover:text-white transition-colors duration-300">
                $199.99
              </div>
<span className="text-xs text-zinc-600 group-hover:text-cyan-500/70 font-mono transition-colors">
                Approx. $16.60/mo
              </span>
</div>
</div>
<div className="flex flex-col h-full">
<div className="mb-10">
<span className="block text-zinc-600 group-hover:text-cyan-400/70 text-sm mb-2 font-medium uppercase tracking-wider transition-colors">
                Savings
              </span>
<div className="text-zinc-400 group-hover:text-cyan-400 transition-colors">Save over $40 yearly</div>
</div>
<div className="mb-12">
<span className="block text-zinc-600 group-hover:text-zinc-500 text-sm mb-2 font-medium uppercase tracking-wider transition-colors">
                VIP Support
              </span>
<div className="text-zinc-300 group-hover:text-white leading-relaxed text-sm transition-colors">
                Dedicated Network Engineer, Priority Queue
              </div>
</div>
<div className="mt-auto pt-6">
<button className="w-full rounded-full border border-white/10 bg-zinc-900 pt-4 pr-6 pb-4 pl-6 text-sm text-zinc-300 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:border-transparent group-hover:scale-[1.02]">
                Get Annual Access
              </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="text-white bg-black w-full border-white/10 border-b relative">

<div className="container border-x [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-white/10 mr-auto ml-auto pr-6 pl-6">
</div>

<section className="container border-x overflow-hidden [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-7xl border-white/10 border-b mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 staggered-reveal"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner">Ready</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner">to</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner">feel</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner">the</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner"><span className="reveal-word-mask"><span className="reveal-word-inner">difference?</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h2>
<p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto aura-reveal" style={{animationDelay: '100ms'}}>
            Stop blaming the lag. Start optimizing your connection today with
            our 14-day money-back guarantee.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 aura-reveal" style={{animationDelay: '100ms'}}>
<a className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-full transition-transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]" href="#">
<span className="relative z-10 flex items-center gap-2">
                Get Started Now
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 bg-transparent border border-white/10 text-white text-lg font-medium rounded-full hover:bg-white/5 transition-colors" href="#">
              View Pricing
            </a>
</div>
<p className="mt-8 text-xs text-zinc-600 font-mono">
            NO CREDIT CARD REQUIRED FOR TRIAL • CANCEL ANYTIME
          </p>
</section>
</section>
</main>
<footer className="overflow-hidden [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-white font-sans bg-black border-white/10 border-t relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto border-x border-white/10 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
</svg>
<span className="text-sm font-medium text-white">YouTube</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
<span className="text-sm font-medium text-white">Twitter</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span className="text-sm font-medium text-white">Instagram</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
<span className="text-sm font-medium text-white">Facebook</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 min-h-[300px]">

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Product
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Technology
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Integrations
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Releases
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Resources
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Docs
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  API Reference
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Tutorials
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Company
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Team
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Culture
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Jobs
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Legal
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Imprint
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Data Policy
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Cookie Policy
                </a>
</li>
</ul>
</div>
</div>

<div className="px-8 md:px-12 pb-24 pt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">

<span className="text-3xl font-semibold tracking-tighter text-white">
                FINEX.
              </span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs font-medium">
              Optimizing the internet for the next generation of competitive
              gaming.
            </p>
</div>
<div className="lg:w-auto flex flex-col md:flex-row gap-0 w-full">
<div className="relative w-full md:w-80 group">
<input className="placeholder:text-black/50 outline-none uppercase transition-colors text-xs font-medium text-black font-mono bg-white w-full h-full rounded-l-full pt-4 pr-5 pb-4 pl-6" placeholder="GAMER@EMAIL.COM" type="email"/>
</div>
<button className="text-[11px] hover:bg-zinc-800 transition-colors uppercase whitespace-nowrap font-semibold text-white tracking-wide bg-zinc-900 border-zinc-800 border pt-4 pr-8 pb-4 pl-8 rounded-r-full">
              Subscribe
            </button>
</div>
</div>
</div>
</footer>




    </>
  );
}
