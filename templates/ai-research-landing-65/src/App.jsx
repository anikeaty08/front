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



        // --- Custom Particle & Animation Engine (Original Hero) ---
        const canvas = document.getElementById('heroCanvas');
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('parallax-container');

        const horseMatrix = [
            "                                  111   ",
            "                                 1111   ",
            "                                111111  ",
            "                               1111111  ",
            "                              1111111   ",
            "                             111111     ",
            "                           1111111      ",
            "                         11111111       ",
            "         1111111       111111111        ",
            "       111111111111111111111111         ",
            "      111111111111111111111111          ",
            "     111111111111111111111111           ",
            "    111111111111111111111111            ",
            "   111111111111111111111111             ",
            "  11111111111111111111111               ",
            "  1111111111111111111111                ",
            "  11111111111111111111                  ",
            "  111  11111111   1111                  ",
            "  11   111111     111                   ",
            "  11   1111       111                   ",
            "  11   111        11                    ",
            "   1   11         11                    ",
            "       11         11                    ",
            "       11          1                    ",
            "       11                               ",
            "       1                                "
        ];

        let particles = [];
        let mouse = { x: -1000, y: -1000 };
        let mouseTarget = { x: -1000, y: -1000 };
        
        function resize() {
            if(canvas) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
                initParticles();
            }
        }

        function initParticles() {
            particles = [];
            const spacing = Math.min(canvas.width / 50, canvas.height / 35);
            const startX = canvas.width / 2 - (horseMatrix[0].length * spacing) / 2;
            const startY = canvas.height / 2 - (horseMatrix.length * spacing) / 2;

            for (let r = 0; r < horseMatrix.length; r++) {
                for (let c = 0; c < horseMatrix[r].length; c++) {
                    if (horseMatrix[r][c] === '1') {
                        let dots = Math.floor(Math.random() * 2) + 2;
                        for(let i=0; i<dots; i++) {
                            particles.push({
                                baseX: startX + c * spacing + (Math.random() - 0.5) * spacing * 1.5,
                                baseY: startY + r * spacing + (Math.random() - 0.5) * spacing * 1.5,
                                x: 0, y: 0,
                                size: Math.random() * 1.2 + 0.5,
                                phase: Math.random() * Math.PI * 2,
                                speed: Math.random() * 0.02 + 0.01,
                                isHighlight: Math.random() > 0.85,
                                relX: c / horseMatrix[0].length,
                                relY: r / horseMatrix.length
                            });
                        }
                    }
                }
            }
        }

        window.addEventListener('resize', resize);
        
        if(canvas) {
            canvas.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                mouseTarget.x = e.clientX - rect.left;
                mouseTarget.y = e.clientY - rect.top;
            });
            
            canvas.addEventListener('mouseleave', () => {
                mouseTarget.x = -1000;
                mouseTarget.y = -1000;
            });
        }

        let time = 0;
        function animate() {
            if(!ctx) return;
            time += 0.04;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            mouse.x += (mouseTarget.x - mouse.x) * 0.1;
            mouse.y += (mouseTarget.y - mouse.y) * 0.1;

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(time * 0.05);
            ctx.strokeStyle = 'rgba(215, 247, 146, 0.06)';
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 8]);
            
            for(let r = 40; r < canvas.width; r += 60) {
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.restore();

            particles.forEach(p => {
                let legSwing = 0;
                let bodyY = Math.sin(time * 2 + p.relX * 2) * 1.5; 

                if (p.relY > 0.6) { 
                    let isFront = p.relX > 0.5;
                    let legPhase = isFront ? 0 : Math.PI; 
                    legSwing = Math.sin(time * 4 + legPhase) * 12 * (p.relY - 0.5); 
                }

                p.x = p.baseX + legSwing;
                p.y = p.baseY + bodyY;

                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                let opacity = p.isHighlight ? 0.8 : 0.3;
                let scale = 1;

                if (dist < 80) {
                    let force = (80 - dist) / 80;
                    p.x -= (dx / dist) * force * 15;
                    p.y -= (dy / dist) * force * 15;
                    opacity = 1;
                    scale = 2;
                } else {
                    opacity += Math.sin(time * 2 + p.phase) * 0.2;
                }

                ctx.globalAlpha = Math.max(0.05, Math.min(1, opacity));
                ctx.fillStyle = p.isHighlight ? '#D7F792' : '#FFFFFF';
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        resize();
        animate();

        if(container) {
            document.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                container.style.transform = `translate(${x}px, ${y}px)`;
                container.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
            });
        }

        // --- Number Counter Animation ---
        const counters = document.querySelectorAll('.counter');
        const observerOptions = { threshold: 0.5 };

        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(c => counterObserver.observe(c));

        function startCounter(el) {
            const targetText = el.getAttribute('data-target');
            
            if (targetText.includes('-')) {
                let val = 0;
                let interval = setInterval(() => {
                    val++;
                    el.innerText = `2-${val}x`;
                    if (val >= 5) clearInterval(interval);
                }, 150);
            } else if (targetText.includes('%')) {
                let target = parseInt(targetText);
                let current = 0;
                let duration = 1500;
                let start = null;
                
                function updateNumber(time) {
                    if (!start) start = time;
                    let progress = Math.min((time - start) / duration, 1);
                    let ease = 1 - Math.pow(1 - progress, 4);
                    let val = Math.floor(ease * target);
                    el.innerText = val + '%';
                    
                    if (progress < 1) requestAnimationFrame(updateNumber);
                    else el.innerText = targetText;
                }
                requestAnimationFrame(updateNumber);
            }
        }

        // --- NEW: Scroll Reveal for Highlighted Text ---
        const revealBlock = document.getElementById('reveal-block');
        if(revealBlock) {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            revealObserver.observe(revealBlock);
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
      

<div className="relative w-full min-h-screen bg-gradient-to-b from-[#071962] to-[#0D237E]">

<div className="absolute inset-0 z-0 pointer-events-none flex justify-center opacity-[0.15]">
<div className="w-full max-w-[1296px] h-full border-x border-white relative">
<div className="absolute top-[25%] w-[150vw] -left-[25vw] h-[1px] bg-white"></div>
<div className="absolute top-[75%] w-[150vw] -left-[25vw] h-[1px] bg-white"></div>
</div>
</div>

<div className="relative z-10 w-full min-h-screen max-w-[1440px] mx-auto flex flex-col items-center justify-between pb-16 pt-8">

<header className="w-full max-w-[1296px] px-4 flex justify-center mb-8">
<div className="flex border-y border-[#54629C]/50 font-['VT323'] text-xl md:text-2xl text-[#99C1E4]">
<div className="px-6 md:px-12 py-2 border-r border-[#54629C]/50 hover:text-white transition-colors cursor-pointer">HIGHLIGHTS</div>
<div className="px-6 md:px-12 py-2 border-r border-[#54629C]/50 hover:text-white transition-colors cursor-pointer">CEO</div>
<div className="px-6 md:px-12 py-2 border-r border-[#54629C]/50 hover:text-white transition-colors cursor-pointer">CFO</div>
<div className="px-6 md:px-12 py-2 border-r border-[#54629C]/50 hover:text-white transition-colors cursor-pointer">PMO</div>
<div className="px-6 md:px-12 py-2 hover:text-white transition-colors cursor-pointer">ABOUT US</div>
</div>
</header>

<main className="relative w-full flex-1 flex flex-col items-center justify-center my-12" id="parallax-container">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
<span className="font-['VT323'] text-[15rem] md:text-[28rem] leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#183CD2] to-[#1B3A8D] opacity-20 select-none">
                        2025
                    </span>
</div>
<h1 className="relative z-20 font-['VT323'] text-4xl md:text-6xl text-[#99C1E4] tracking-tight mb-8 drop-shadow-lg">
                    The State of AI Adoption
                </h1>

<div className="relative z-10 w-full max-w-[800px] h-[300px] md:h-[450px] pointer-events-auto cursor-crosshair">
<canvas className="absolute inset-0 w-full h-full" id="heroCanvas"></canvas>
</div>
<h2 className="relative z-20 font-['VT323'] text-4xl md:text-6xl text-[#99C1E4] tracking-tight mt-8 drop-shadow-lg">
                    In Indian Startups
                </h2>
</main>

<footer className="relative z-20 w-full max-w-[1032px] px-6 mt-12 flex flex-wrap justify-center md:justify-between items-start gap-12 md:gap-8">
<div className="flex flex-col items-center text-center">
<span className="font-['VT323'] text-5xl md:text-6xl text-[#99C1E4] tracking-tight counter" data-target="2-5x">0-0x</span>
<span className="font-['Space_Mono'] text-xs text-white uppercase tracking-widest mt-3 max-w-[140px] leading-relaxed">improvement in output</span>
</div>
<div className="flex flex-col items-center text-center">
<span className="font-['VT323'] text-5xl md:text-6xl text-[#99C1E4] tracking-tight counter" data-target="83%">0%</span>
<span className="font-['Space_Mono'] text-xs text-white uppercase tracking-widest mt-3 max-w-[160px] leading-relaxed">More excited vs.<br/>12 months ago</span>
</div>
<div className="flex flex-col items-center text-center">
<span className="font-['VT323'] text-5xl md:text-6xl text-[#99C1E4] tracking-tight counter" data-target="86%">0%</span>
<span className="font-['Space_Mono'] text-xs text-white uppercase tracking-widest mt-3 max-w-[160px] leading-relaxed">Planning to increase AI<br/>spend in 2026</span>
</div>
<div className="flex flex-col items-center text-center">
<span className="font-['VT323'] text-5xl md:text-6xl text-[#99C1E4] tracking-tight counter" data-target="85%">0%</span>
<span className="font-['Space_Mono'] text-xs text-white uppercase tracking-widest mt-3 max-w-[160px] leading-relaxed">Engineering functions in AI production</span>
</div>
</footer>
</div>
</div>

<section className="relative w-full bg-[#FEFDFB] text-[#0E0E0E] py-24 md:py-32 z-20 bg-noise border-t-2 border-[#D7F792]/20">

<div className="absolute inset-0 pointer-events-none flex justify-center opacity-[0.03] z-0">
<div className="w-full max-w-[1296px] h-full border-x border-black relative">
<div className="absolute top-0 w-[1px] left-1/3 h-full bg-black"></div>
<div className="absolute top-0 w-[1px] right-1/3 h-full bg-black"></div>
</div>
</div>
<div className="relative z-10 w-full max-w-[1296px] mx-auto px-6">

<div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-24 max-w-[1163px] mx-auto">
<h2 className="font-['VT323'] text-5xl md:text-[64px] leading-[0.9] tracking-tighter text-[#0E0E0E] max-w-[250px]">
                    The story so far
                </h2>
<p className="font-['DM_Sans'] text-base text-[#505569] max-w-[602px] leading-[1.5]">
                    A year ago, the conversation around AI in Indian startups was charged with possibility but tempered by uncertainty. Founders were excited, but cautiously so. Models were impressive in demos but unpredictable in production. The question was never whether AI would matter, but whether it was ready to matter now.<br/><br/>
                    That question has been answered.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1163px] mx-auto mb-32">

<div className="group flex flex-col bg-[#F5F5F7] rounded p-6 h-[332px] justify-between border border-transparent hover:border-gray-200 card-lift relative overflow-hidden">

<div className="absolute -right-4 -top-4 w-24 h-24 rounded bg-gradient-to-br from-gray-200/50 to-transparent float-anim opacity-50"></div>
<div className="absolute right-8 top-8 w-2 h-2 rounded-full bg-gray-300 float-anim" style={{animationDelay: '1s'}}></div>
<p className="font-['VT323'] text-2xl tracking-wide leading-snug text-[#282938] max-w-[340px] relative z-10">
                        What our survey reveals is a landscape that has decisively shifted from experimentation to execution.
                    </p>
<div className="flex items-center justify-between border-t border-gray-300/40 pt-4 mt-auto relative z-10">
<button className="flex items-center gap-3 font-['VT323'] text-base tracking-widest uppercase btn-hover-highlight">
<span className="w-[9px] h-[9px] bg-[#2C2820] btn-square-indicator"></span>
                            see more
                        </button>
<span className="font-['VT323'] text-xl text-[#2C2820]/60 tracking-wider">[ 01 ]</span>
</div>
</div>

<div className="group flex flex-col bg-[#F5F5F7] rounded p-6 h-[332px] justify-between border border-transparent hover:border-gray-200 card-lift relative overflow-hidden" style={{transitionDelay: '50ms'}}>

<div className="absolute -left-6 top-1/2 w-16 h-32 rounded-full border border-dashed border-gray-300 float-anim opacity-40" style={{animationDelay: '2s'}}></div>
<div className="absolute right-12 top-12 w-1 h-1 rounded-full bg-gray-400 float-anim" style={{animationDelay: '0.5s'}}></div>
<p className="font-['VT323'] text-2xl tracking-wide leading-snug text-[#282938] max-w-[340px] relative z-10">
                        The impact of AI has landed unevenly. It has struck hardest—and most visibly—in personal productivity, especially in engineering and product teams.
                    </p>
<div className="flex items-center justify-between border-t border-gray-300/40 pt-4 mt-auto relative z-10">
<button className="flex items-center gap-3 font-['VT323'] text-base tracking-widest uppercase btn-hover-highlight">
<span className="w-[9px] h-[9px] bg-[#2C2820] btn-square-indicator"></span>
                            see more
                        </button>
<span className="font-['VT323'] text-xl text-[#2C2820]/60 tracking-wider">[ 02 ]</span>
</div>
</div>

<div className="group flex flex-col bg-[#F5F5F7] rounded p-6 h-[332px] justify-between border border-transparent hover:border-gray-200 card-lift relative overflow-hidden" style={{transitionDelay: '100ms'}}>

<div className="absolute right-4 bottom-16 w-20 h-20 rotate-45 border-[0.5px] border-gray-300 float-anim opacity-50" style={{animationDelay: '1.5s'}}></div>
<p className="font-['VT323'] text-2xl tracking-wide leading-snug text-[#282938] max-w-[340px] relative z-10">
                        Perhaps the most striking shift is in how AI adoption is happening. Cultural resistance, a top complaint a year ago, has all but vanished.
                    </p>
<div className="flex items-center justify-between border-t border-gray-300/40 pt-4 mt-auto relative z-10">
<button className="flex items-center gap-3 font-['VT323'] text-base tracking-widest uppercase btn-hover-highlight">
<span className="w-[9px] h-[9px] bg-[#2C2820] btn-square-indicator"></span>
                            see more
                        </button>
<span className="font-['VT323'] text-xl text-[#2C2820]/60 tracking-wider">[ 03 ]</span>
</div>
</div>
</div>

<div className="relative w-full max-w-[983px] mx-auto flex flex-col items-center pt-16">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[274px] h-[274px] pointer-events-none z-0 flex items-center justify-center">

<div className="absolute inset-0 rounded-full border-[0.3px] border-[#EAD5AA] spin-slow"></div>

<div className="absolute inset-[20px] rounded-full border-[0.1px] border-[#EAD5AA] spin-slow" style={{animationDirection: 'reverse', animationDuration: '40s'}}></div>

<div className="absolute inset-[40px] rounded-full bg-gradient-to-tr from-[#FAEBCE] to-[#F9F5E8] opacity-40 blur-xl spin-slow"></div>
<div className="absolute inset-[45px] rounded-full border border-dashed border-[#D2B586] opacity-30 float-anim"></div>
</div>

<div className="relative z-10 w-full text-center mt-24 reveal-text" id="reveal-block">

<h3 className="font-['VT323'] text-3xl md:text-[32px] leading-snug tracking-tight text-[#0E0E0E] mb-8 inline-block relative">
<span className="absolute top-[40%] left-0 w-full h-[36px] bg-[#FCBB7C] opacity-80 -z-10 mix-blend-multiply"></span>
                        What emerges from all of this is a startup ecosystem that is firmly past the point of no return on AI. The excitement is real. The money is committed. The early results are encouraging.
                    </h3>
<p className="font-['DM_Sans'] text-base text-[#505569] max-w-[800px] mx-auto leading-relaxed">
                        And the harder questions about business impact beyond productivity, about which functions will transform next, about what this means for how startups are built and scaled are the ones that will define the next twelve months.
                    </p>
</div>
</div>
</div>
</section>


    </>
  );
}
