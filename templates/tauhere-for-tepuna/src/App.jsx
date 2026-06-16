import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const envelopeWrapper = document.getElementById('envelope-wrapper');
            const envelope = document.getElementById('envelope');
            const instruction = document.getElementById('instruction');
            const expandedLetter = document.getElementById('expanded-letter');
            const poemContainer = document.getElementById('poem-container');
            const finalQuestion = document.getElementById('final-question');
            const responseButtons = document.getElementById('response-buttons');
            const btnNo = document.getElementById('btn-no');
            const btnYes = document.getElementById('btn-yes');
            const musicBtn = document.getElementById('music-btn');
            const bgMusic = document.getElementById('bg-music');
            const successOverlay = document.getElementById('success-overlay');

            let isEnvelopeOpen = false;
            let isMusicPlaying = false;

            // --- 1. Background Effects (Hearts & Particles) ---
            
            // Create CSS Floating Hearts
            const heartsContainer = document.getElementById('hearts-bg');
            const icons = ['solar:heart-linear', 'solar:heart-bold', 'solar:stars-minimalistic-linear'];
            
            function createHeart() {
                const el = document.createElement('div');
                el.classList.add('floating-heart');
                el.style.left = Math.random() * 100 + 'vw';
                el.style.animationDuration = (Math.random() * 5 + 5) + 's';
                el.style.fontSize = (Math.random() * 20 + 10) + 'px';
                el.style.color = Math.random() > 0.5 ? '#fbcfe8' : '#fda4af'; // rose-200 or rose-300
                
                const icon = document.createElement('iconify-icon');
                icon.setAttribute('icon', icons[Math.floor(Math.random() * icons.length)]);
                el.appendChild(icon);
                
                heartsContainer.appendChild(el);
                
                setTimeout(() => {
                    el.remove();
                }, 11000);
            }

            setInterval(createHeart, 800);

            // Canvas Gold Particles
            const canvas = document.getElementById('canvas-particles');
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }
            window.addEventListener('resize', resize);
            resize();

            class Particle {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.vx = Math.random() * 0.5 - 0.25;
                    this.vy = Math.random() * 0.5 - 0.25;
                    this.size = Math.random() * 2;
                    this.alpha = Math.random();
                }
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.x < 0) this.x = width;
                    if (this.x > width) this.x = 0;
                    if (this.y < 0) this.y = height;
                    if (this.y > height) this.y = 0;
                    this.alpha += (Math.random() - 0.5) * 0.02;
                    if (this.alpha < 0.1) this.alpha = 0.1;
                    if (this.alpha > 0.8) this.alpha = 0.8;
                }
                draw() {
                    ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`; // Goldish
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            for(let i=0; i<60; i++) particles.push(new Particle());

            function animateParticles() {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
                requestAnimationFrame(animateParticles);
            }
            animateParticles();


            // --- 2. Music Logic ---
            musicBtn.addEventListener('click', () => {
                if(isMusicPlaying) {
                    bgMusic.pause();
                    musicBtn.querySelector('iconify-icon').setAttribute('icon', 'solar:music-note-linear');
                    musicBtn.classList.remove('bg-rose-100');
                } else {
                    bgMusic.volume = 0.3;
                    bgMusic.play().catch(e => console.log("Auto-play prevented"));
                    musicBtn.querySelector('iconify-icon').setAttribute('icon', 'solar:music-note-bold');
                    musicBtn.classList.add('bg-rose-100');
                }
                isMusicPlaying = !isMusicPlaying;
            });


            // --- 3. Envelope Interaction ---
            const poemLines = [
                "Dans le tumulte des jours,",
                "tu es mon calme, ma lumière,",
                "celle qui transforme l’ordinaire en douceur.",
                "<br>",
                "Alors aujourd’hui, mon cœur",
                "a quelque chose à te murmurer..."
            ];

            function typeWriter(lines, index = 0) {
                if (index < lines.length) {
                    const line = lines[index];
                    const p = document.createElement('p');
                    p.innerHTML = ""; 
                    p.className = "mb-2 opacity-0 transform translate-y-2 transition-all duration-500";
                    poemContainer.appendChild(p);

                    // Fade in the line
                    setTimeout(() => {
                        p.classList.remove('opacity-0', 'translate-y-2');
                        p.innerHTML = line; // Simple fade in for blocks, or char by char if needed
                    }, 100);

                    // Wait slightly before next line
                    setTimeout(() => {
                        typeWriter(lines, index + 1);
                    }, 1500);
                } else {
                    // Finished typing
                    setTimeout(() => {
                        finalQuestion.classList.remove('opacity-0', 'translate-y-4');
                        responseButtons.classList.remove('opacity-0');
                        responseButtons.classList.add('flex');
                    }, 1000);
                }
            }

            envelopeWrapper.addEventListener('click', () => {
                if (isEnvelopeOpen) return;
                isEnvelopeOpen = true;

                // Sound Effect (Simulated via visual feedback mostly)
                // If we had a paper sound, we'd play it here.

                // 1. Hide instruction
                instruction.style.opacity = 0;

                // 2. Open Flap
                envelope.classList.add('is-open');

                // 3. Show Expanded Letter Overlay
                setTimeout(() => {
                    expandedLetter.classList.remove('hidden');
                    // Force reflow
                    void expandedLetter.offsetWidth; 
                    expandedLetter.style.opacity = 1;
                    
                    // Start Typing
                    setTimeout(() => {
                        typeWriter(poemLines);
                    }, 1000);

                }, 800);
            });


            // --- 4. Buttons Interaction ---

            // "No" Button Logic (Runaway)
            btnNo.addEventListener('mouseover', (e) => {
                const x = Math.random() * 150 - 75; // -75 to 75
                const y = Math.random() * 100 - 50; // -50 to 50
                
                btnNo.style.transform = `translate(${x}px, ${y}px)`;
            });

            btnNo.addEventListener('click', (e) => {
                e.preventDefault(); // Just in case
            });

            // "Yes" Button Logic
            btnYes.addEventListener('click', () => {
                // Celebration!
                
                // 1. Burst of hearts (Confetti-like)
                for(let i=0; i<50; i++) {
                    setTimeout(createHeart, i * 50);
                }

                // 2. Transition to Success Screen
                expandedLetter.style.opacity = 0;
                setTimeout(() => {
                    expandedLetter.classList.add('hidden');
                    successOverlay.classList.remove('pointer-events-none');
                    successOverlay.style.opacity = 1;
                }, 800);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="absolute inset-0 w-full h-full pointer-events-none z-0" height="905" id="canvas-particles" width="1432"></canvas>

<div className="absolute inset-0 pointer-events-none overflow-hidden z-0" id="hearts-bg">

</div>

<div className="cupid text-rose-300">
<iconify-icon icon="solar:cupid-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>

<button className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-rose-800 hover:bg-white/70 transition-all duration-300 shadow-sm group" id="music-btn">
<iconify-icon icon="solar:music-note-linear" id="music-icon" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded text-xs text-rose-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Mettre l'ambiance
        </span>
</button>
<audio id="bg-music" loop="">

<source src="https://cdn.pixabay.com/download/audio/2022/10/25/audio_10852895e6.mp3?filename=romantic-piano-125026.mp3" type="audio/mpeg"/>
</audio>

<main className="z-10 flex flex-col w-full h-full pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">

<div className="absolute top-1/4 animate-pulse text-rose-800/60 font-title tracking-widest text-sm mb-8 transition-opacity duration-1000" id="instruction">
            Une lettre t'attend...
        </div>

<div className="envelope-wrapper w-[300px] h-[200px] cursor-pointer group select-none" id="envelope-wrapper">
<div className="envelope w-full h-full bg-rose-200 shadow-xl relative rounded-sm" id="envelope">

<div className="flap top border-rose-300"></div>
<div className="flap right"></div>
<div className="flap left"></div>
<div className="flap bottom"></div>

<div className="absolute left-2 right-2 top-2 bottom-2 bg-white shadow-sm z-20 flex items-center justify-center opacity-0 transition-opacity duration-500" id="letter-preview">
<div className="w-full h-full border border-rose-100 m-1 flex items-center justify-center">
<span className="font-handwriting text-2xl text-rose-300">Pour toi</span>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40 flex items-center justify-center bg-rose-900/10 backdrop-blur-[2px] transition-all duration-1000 opacity-0" id="expanded-letter">
<div className="relative bg-[#fffdf9] w-[90%] max-w-[480px] p-8 md:p-12 shadow-2xl rounded-sm border border-stone-100 text-center flex flex-col items-center overflow-hidden">

<div className="absolute top-4 left-4 w-16 h-16 border-l border-t border-rose-200"></div>
<div className="absolute top-4 right-4 w-16 h-16 border-r border-t border-rose-200"></div>
<div className="absolute bottom-4 left-4 w-16 h-16 border-l border-b border-rose-200"></div>
<div className="absolute bottom-4 right-4 w-16 h-16 border-r border-b border-rose-200"></div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none opacity-50"></div>

<div className="relative z-10 w-full flex flex-col items-center">
<iconify-icon className="text-rose-300 mb-6 animate-pulse" icon="solar:heart-linear" width="32"></iconify-icon>
<div className="font-title text-rose-800 text-lg md:text-xl leading-relaxed tracking-tight min-h-[180px] flex flex-col justify-center items-center mb-8" id="poem-container">

</div>

<h2 className="font-handwriting text-4xl md:text-5xl text-rose-600 mb-10 opacity-0 transition-all duration-1000 transform translate-y-4" id="final-question">
                        Veux-tu être ma Valentine ?
                    </h2>

<div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center opacity-0 transition-all duration-1000 delay-500" id="response-buttons">
<button className="heart-beat group relative px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-title font-semibold text-lg tracking-wide rounded-full shadow-lg hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300 overflow-hidden" id="btn-yes">
<span className="relative z-10 flex items-center gap-2">
                                Oui <iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<button className="px-6 py-2 bg-stone-100 text-stone-500 font-title text-sm tracking-wide rounded-full hover:bg-stone-200 transition-colors shadow-sm cursor-not-allowed relative" id="btn-no">
                            Non <span className="text-base">😢</span>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-rose-900/90 text-white flex flex-col items-center justify-center text-center p-6 opacity-0 pointer-events-none transition-opacity duration-1000" id="success-overlay">
<iconify-icon className="text-yellow-200 mb-6 animate-spin-slow" icon="solar:stars-minimalistic-linear" width="60"></iconify-icon>
<h1 className="font-handwriting text-5xl md:text-7xl mb-6 text-rose-100">Luuuiiiaaaa ktieerr</h1>
<p className="font-title text-lg md:text-xl text-rose-200 max-w-md leading-relaxed tracking-wide">
                Taleur chérie:)<br/>
<span className="text-white mt-4 block text-sm opacity-80 uppercase tracking-widest border-t border-white/20 pt-4 w-1/2 mx-auto">Je t'aime mon amour&lt;3</span>
</p>
</div>
</main>


    </>
  );
}
