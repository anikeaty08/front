import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Setup Background ---
        const starContainer = document.getElementById('stars-container');
        const lanternContainer = document.getElementById('lanterns-container');

        // Create Static Stars
        for(let i=0; i<100; i++) {
            const s = document.createElement('div');
            s.className = 'star animate-twinkle';
            s.style.width = Math.random() * 2 + 1 + 'px';
            s.style.height = s.style.width;
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            s.style.animationDelay = Math.random() * 5 + 's';
            s.style.opacity = Math.random();
            starContainer.appendChild(s);
        }

        // Shooting Star Logic
        setInterval(() => {
            const shoot = document.createElement('div');
            shoot.className = 'shooting-star';
            shoot.style.top = Math.random() * 50 + '%';
            shoot.style.left = Math.random() * 100 + '%';
            shoot.style.animation = 'shoot 2s linear forwards';
            starContainer.appendChild(shoot);
            setTimeout(() => shoot.remove(), 2000);
        }, 4000);

        // Background Lanterns
        function createBgLantern() {
            const l = document.createElement('div');
            l.className = 'lantern-bg animate-rise';
            const size = Math.random() * 10 + 4;
            l.style.width = size + 'px';
            l.style.height = (size * 1.5) + 'px';
            l.style.left = Math.random() * 100 + '%';
            l.style.animationDuration = (Math.random() * 10 + 15) + 's';
            l.style.opacity = Math.random() * 0.5 + 0.2;
            lanternContainer.appendChild(l);
            
            setTimeout(() => l.remove(), 25000); 
        }
        setInterval(createBgLantern, 2000);

        // --- Navigation Logic ---
        function goToStage(id) {
            document.querySelectorAll('section').forEach(el => {
                if(!el.classList.contains('hidden')) {
                    el.style.opacity = '0';
                    setTimeout(() => el.classList.add('hidden'), 500);
                }
            });
            
            const next = document.getElementById(id);
            setTimeout(() => {
                next.classList.remove('hidden');
                next.classList.add('flex'); 
                void next.offsetWidth; 
                next.style.opacity = '1';
                
                if(id === 'stage-know') initCardStack();
                if(id === 'stage-final') triggerFlowerBloom();
            }, 500);
        }

        function triggerFlowerBloom() {
            // Reset animation
            const flower = document.getElementById('final-flower');
            flower.classList.remove('bloomed');
            void flower.offsetWidth;
            flower.classList.add('bloomed');
        }

        // --- Stage 2: LDR Connect ---
        function connectHearts() {
            const line = document.getElementById('active-line');
            const plane = document.getElementById('plane');
            
            line.style.transition = 'stroke-dashoffset 2s ease-in-out';
            line.style.strokeDashoffset = '0';
            
            plane.style.opacity = '1';
            plane.style.transition = 'all 2s ease-in-out';
            plane.style.left = '90%'; 
            plane.style.top = '40%'; 

            document.getElementById('connect-btn').innerText = "Connected ❤️";
            document.getElementById('connect-btn').classList.add('bg-rose-500/20', 'border-rose-500');

            setTimeout(() => {
                confetti({
                    particleCount: 60,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#f43f5e', '#fb7185']
                });
                setTimeout(() => goToStage('stage-know'), 1500);
            }, 2100);
        }

        // --- Stage 3: Do You Know Cards ---
        const reasons = [
            { text: "Your smile lights up my darkest nights.", icon: "lucide:sun" },
            { text: "Even across the distance, I feel your warmth.", icon: "lucide:flame" },
            { text: "I love how strong you are for both of us.", icon: "lucide:shield" },
            { text: "Hearing your voice is my favorite sound.", icon: "lucide:mic" },
            { text: "I'm counting down the seconds to hold you.", icon: "lucide:clock" }
        ];
        let cardIndex = 0;

        function initCardStack() {
            renderCard(0);
        }

        function renderCard(index) {
            const container = document.getElementById('card-stack');
            const content = reasons[index];
            
            const html = `
                <div class="absolute inset-0 glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 transform animate-in fade-in slide-in-from-bottom-4">
                    <div class="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center mb-4 text-rose-300">
                        <span class="iconify" data-icon="${content.icon}" data-width="24"></span>
                    </div>
                    <p class="text-lg font-medium text-slate-100 leading-snug">"${content.text}"</p>
                    <span class="absolute bottom-6 text-xs text-slate-500 font-mono">${index + 1} / ${reasons.length}</span>
                </div>
            `;
            container.innerHTML = html;
        }

        function nextReason() {
            if (cardIndex < reasons.length - 1) {
                cardIndex++;
                renderCard(cardIndex);
            } else {
                goToStage('stage-lantern');
            }
        }

        // --- Stage 4: Lantern Release ---
        function releaseLantern() {
            const lantern = document.getElementById('main-lantern');
            
            lantern.style.transition = "all 3s ease-in";
            lantern.style.transform = "translateY(-600px) scale(0.5)";
            lantern.style.opacity = "0";

            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.8 },
                colors: ['#fbbf24', '#f59e0b'],
                shapes: ['circle'],
                scalar: 0.8
            });

            setTimeout(() => {
                goToStage('stage-final');
                setInterval(createBgLantern, 200); 
            }, 1500);
        }

        // --- Audio Control ---
        const audio = document.getElementById('bg-music');
        const btn = document.getElementById('music-toggle');
        let playing = false;
        
        btn.addEventListener('click', () => {
            if(!playing) {
                audio.volume = 0.4;
                audio.play();
                btn.innerHTML = '<span class="iconify animate-spin" data-icon="lucide:disc-3" data-width="20"></span>';
                btn.classList.add('bg-rose-500', 'border-rose-500', 'text-white');
                btn.classList.remove('bg-white/10');
            } else {
                audio.pause();
                btn.innerHTML = '<span class="iconify" data-icon="lucide:music" data-width="20"></span>';
                btn.classList.remove('bg-rose-500', 'border-rose-500', 'text-white', 'animate-spin');
                btn.classList.add('bg-white/10');
            }
            playing = !playing;
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 pointer-events-none z-0" id="stars-container"></div>
<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="lanterns-container"></div>

<div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]"></div>

<button className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all border border-white/10 text-rose-200" id="music-toggle">
<span className="iconify" data-height="20" data-icon="lucide:music" data-width="20"></span>
</button>
<audio id="bg-music" loop="">
<source src="https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3" type="audio/mp3"/>
</audio>
<main className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full px-6">

<section className="flex flex-col items-center w-full max-w-md transition-all duration-1000" id="stage-intro">
<div className="relative w-64 h-64 mb-8 flex items-center justify-center animate-float-slow">

<div className="absolute w-48 h-48 bg-rose-500/20 rounded-full blur-[60px] animate-pulse"></div>

<div className="relative w-40 h-40 animate-heartbeat drop-shadow-[0_0_25px_rgba(244,63,94,0.5)]">
<svg className="w-full h-full text-rose-500 overflow-visible" viewbox="0 0 24 24">
<defs>
<lineargradient id="heartGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#f43f5e', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#be123c', stopOpacity: '1'}}></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="1.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#heartGradient)" filter="url(#glow)"></path>
</svg>

<div className="absolute top-4 right-8 w-6 h-6 bg-white/40 blur-md rounded-full"></div>
</div>
</div>
<div className="glass-panel p-8 rounded-3xl text-center w-full max-w-sm animate-float">
<h1 className="font-hand text-4xl text-rose-200 mb-2 tracking-wide">My Love</h1>
<p className="text-rose-100/70 text-sm font-light leading-relaxed mb-6">Even when miles apart, my heart beats only for you.</p>
<button className="group px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full font-medium shadow-lg shadow-rose-900/50 hover:shadow-rose-900/80 transition-all hover:-translate-y-1 w-full flex items-center justify-center gap-2" onclick="goToStage('stage-ldr')">
<span className="tracking-wide text-sm">Begin Journey</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</button>
</div>
</section>

<section className="hidden flex-col items-center w-full max-w-md" id="stage-ldr">
<div className="glass-panel w-full p-8 rounded-3xl mb-4 relative overflow-hidden">
<h2 className="text-center font-medium text-rose-100 mb-8 tracking-tight">Connecting Hearts...</h2>

<div className="h-32 w-full relative mb-6">

<div className="absolute left-[10%] top-[40%] flex flex-col items-center z-10">
<div className="w-3 h-3 bg-white rounded-full animate-ping absolute opacity-50"></div>
<div className="w-3 h-3 bg-white rounded-full relative shadow-[0_0_10px_white]"></div>
<span className="text-[10px] mt-2 text-slate-400 font-medium">Me</span>
</div>

<div className="absolute right-[10%] top-[40%] flex flex-col items-center z-10">
<div className="w-3 h-3 bg-rose-400 rounded-full animate-ping absolute opacity-50"></div>
<div className="w-3 h-3 bg-rose-400 rounded-full relative shadow-[0_0_10px_#fb7185]"></div>
<span className="text-[10px] mt-2 text-rose-300 font-medium">You</span>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<path className="opacity-50" d="M50,45 Q150,-10 270,45" fill="none" id="connection-line" stroke="#64748b" stroke-dasharray="6 4" strokeWidth="1.5"></path>
<path d="M50,45 Q150,-10 270,45" fill="none" id="active-line" stroke="#f43f5e" stroke-dasharray="300" stroke-dashoffset="300" strokeWidth="2"></path>
</svg>

<div className="absolute left-[10%] top-[40%] -ml-3 -mt-3 text-white transition-all duration-[2000ms] ease-in-out opacity-0" id="plane">
<span className="iconify rotate-45" data-icon="lucide:plane" data-width="24"></span>
</div>
</div>
<button className="w-full py-3 border border-rose-500/30 text-rose-300 rounded-xl hover:bg-rose-500/10 transition-colors text-sm font-medium" id="connect-btn" onclick="connectHearts()">
                    Bridge the Distance
                </button>
</div>
</section>

<section className="hidden flex-col items-center w-full max-w-md" id="stage-know">
<div className="mb-4">
<span className="text-xs font-semibold tracking-widest text-purple-300 uppercase">Do you know?</span>
</div>
<div className="relative w-full h-64" id="card-stack">

</div>
<div className="flex gap-4 mt-6 w-full">
<button className="flex-1 py-3 bg-white text-slate-900 rounded-full font-medium text-sm shadow-lg hover:bg-rose-50 transition-colors" onclick="nextReason()">
                    Next <span className="ml-1">→</span>
</button>
</div>
</section>

<section className="hidden flex-col items-center w-full max-w-md text-center" id="stage-lantern">
<h2 className="font-hand text-3xl text-amber-200 mb-2">Make a Wish</h2>
<p className="text-slate-300 text-xs mb-8">Tap the lantern to release it to me.</p>
<div className="relative h-64 w-full flex items-end justify-center pb-4">

<div className="absolute bottom-0 w-32 h-8 bg-slate-800 rounded-b-full border-b border-slate-700 z-10 flex justify-center items-center">
<div className="w-24 h-1 bg-slate-900/50 absolute top-1 rounded-full"></div>
</div>

<div className="cursor-pointer relative z-20 transition-transform duration-300 hover:scale-105 group" id="main-lantern" onclick="releaseLantern()">
<div className="w-16 h-24 bg-gradient-to-b from-amber-100 via-amber-400 to-orange-500 rounded-t-xl rounded-b-md shadow-[0_0_30px_rgba(251,191,36,0.6)] flex items-center justify-center relative">

<div className="absolute inset-0 bg-amber-300 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
<span className="iconify text-amber-900/50" data-icon="lucide:flame" data-width="24"></span>
</div>
</div>

<div className="absolute -bottom-4 w-full h-4 bg-gradient-to-b from-slate-800/50 to-transparent blur-sm"></div>
</div>
</section>

<section className="hidden flex-col items-center justify-center text-center w-full max-w-md" id="stage-final">

<div className="relative w-72 h-72 mb-8 flex items-center justify-center">

<div className="absolute w-56 h-56 bg-pink-500/20 rounded-full blur-[80px] animate-pulse"></div>
<svg className="w-full h-full overflow-visible bloomed" id="final-flower" viewbox="0 0 200 200">
<defs>
<lineargradient id="petalGradient" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#fff1f2"></stop>
<stop offset="50%" stop-color="#fda4af"></stop>
<stop offset="100%" stop-color="#e11d48"></stop>
</lineargradient>
<filter id="softGlow">
<fegaussianblur result="coloredBlur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<g transform="translate(100,100)">

<g className="flower-layer layer-1">
<path d="M0,0 C-40,-50 -50,-80 0,-90 C50,-80 40,-50 0,0" fill="url(#petalGradient)" opacity="0.9" transform="rotate(0) scale(1)"></path>
<path d="M0,0 C-40,-50 -50,-80 0,-90 C50,-80 40,-50 0,0" fill="url(#petalGradient)" opacity="0.9" transform="rotate(60) scale(1)"></path>
<path d="M0,0 C-40,-50 -50,-80 0,-90 C50,-80 40,-50 0,0" fill="url(#petalGradient)" opacity="0.9" transform="rotate(120) scale(1)"></path>
<path d="M0,0 C-40,-50 -50,-80 0,-90 C50,-80 40,-50 0,0" fill="url(#petalGradient)" opacity="0.9" transform="rotate(180) scale(1)"></path>
<path d="M0,0 C-40,-50 -50,-80 0,-90 C50,-80 40,-50 0,0" fill="url(#petalGradient)" opacity="0.9" transform="rotate(240) scale(1)"></path>
<path d="M0,0 C-40,-50 -50,-80 0,-90 C50,-80 40,-50 0,0" fill="url(#petalGradient)" opacity="0.9" transform="rotate(300) scale(1)"></path>
</g>

<g className="flower-layer layer-2">
<path d="M0,0 C-30,-40 -40,-60 0,-70 C40,-60 30,-40 0,0" fill="url(#petalGradient)" opacity="0.95" transform="rotate(30) scale(0.8)"></path>
<path d="M0,0 C-30,-40 -40,-60 0,-70 C40,-60 30,-40 0,0" fill="url(#petalGradient)" opacity="0.95" transform="rotate(90) scale(0.8)"></path>
<path d="M0,0 C-30,-40 -40,-60 0,-70 C40,-60 30,-40 0,0" fill="url(#petalGradient)" opacity="0.95" transform="rotate(150) scale(0.8)"></path>
<path d="M0,0 C-30,-40 -40,-60 0,-70 C40,-60 30,-40 0,0" fill="url(#petalGradient)" opacity="0.95" transform="rotate(210) scale(0.8)"></path>
<path d="M0,0 C-30,-40 -40,-60 0,-70 C40,-60 30,-40 0,0" fill="url(#petalGradient)" opacity="0.95" transform="rotate(270) scale(0.8)"></path>
<path d="M0,0 C-30,-40 -40,-60 0,-70 C40,-60 30,-40 0,0" fill="url(#petalGradient)" opacity="0.95" transform="rotate(330) scale(0.8)"></path>
</g>

<g className="flower-layer layer-3">
<path d="M0,0 C-20,-30 -25,-45 0,-50 C25,-45 20,-30 0,0" fill="#fb7185" transform="rotate(0) scale(0.6)"></path>
<path d="M0,0 C-20,-30 -25,-45 0,-50 C25,-45 20,-30 0,0" fill="#fb7185" transform="rotate(72) scale(0.6)"></path>
<path d="M0,0 C-20,-30 -25,-45 0,-50 C25,-45 20,-30 0,0" fill="#fb7185" transform="rotate(144) scale(0.6)"></path>
<path d="M0,0 C-20,-30 -25,-45 0,-50 C25,-45 20,-30 0,0" fill="#fb7185" transform="rotate(216) scale(0.6)"></path>
<path d="M0,0 C-20,-30 -25,-45 0,-50 C25,-45 20,-30 0,0" fill="#fb7185" transform="rotate(288) scale(0.6)"></path>
</g>

<g className="flower-layer center-core">
<circle fill="#fef9c3" filter="url(#softGlow)" r="8"></circle>
<circle fill="#fcd34d" opacity="0.8" r="4"></circle>
</g>
</g>
</svg>
</div>
<div className="glass-panel p-8 rounded-2xl border-white/5 shadow-2xl animate-float">
<h1 className="font-hand text-4xl text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-purple-200 mb-4 leading-tight">
                    I Love You
                </h1>
<p className="text-slate-300 text-sm font-light leading-relaxed opacity-90 max-w-xs mx-auto mb-6">
                    "This flower might not be real and just virtual, but my love is real."
                </p>
<div className="grid grid-cols-2 gap-3 w-full">
<button className="py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/5" onclick="alert('Virtual Hug Sent! 🫂')">
<span className="iconify text-rose-300" data-icon="lucide:smile"></span>
<span className="text-xs font-medium">Send Hug</span>
</button>
<button className="py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/5" onclick="alert('Virtual Kiss Sent! 💋')">
<span className="iconify text-rose-300" data-icon="lucide:heart"></span>
<span className="text-xs font-medium">Send Kiss</span>
</button>
</div>
</div>
</section>
</main>


    </>
  );
}
