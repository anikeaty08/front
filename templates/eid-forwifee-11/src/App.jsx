import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
dark: '#050a14',
gold: '#ffd700',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Global State
        let currentScreenId = 1;
        let audioInit = false;

        // Init Intro Animations
        window.onload = () => {
            gsap.to("#intro-eid", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 });
            gsap.to("#intro-tap", { opacity: 1, duration: 1, delay: 1.5 });
            
            // First interaction listener
            document.body.addEventListener('click', initExperience, { once: true });
        };

        function initExperience() {
            if (!audioInit) {
                const audio = document.getElementById('bg-music');
                audio.volume = 0.4;
                audio.play().catch(e => console.log("Audio autoplay blocked, requires user interaction."));
                audioInit = true;
            }
            if(currentScreenId === 1) nextScreen(2);
        }

        // Generic Transition Function
        function nextScreen(targetScreenNum) {
            const current = document.getElementById(`screen-${currentScreenId}`);
            const next = document.getElementById(`screen-${targetScreenNum}`);
            
            gsap.to(current, { 
                opacity: 0, 
                scale: 0.95,
                duration: 0.6, 
                ease: "power2.inOut",
                onComplete: () => {
                    current.classList.add('hidden');
                    current.classList.remove('flex');
                    
                    next.classList.remove('hidden');
                    next.classList.add('flex');
                    
                    gsap.fromTo(next, 
                        { opacity: 0, scale: 1.05 }, 
                        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
                    );
                    
                    currentScreenId = targetScreenNum;
                    triggerScreenLogic(targetScreenNum);
                }
            });
        }

        // --- Logic Routines ---
        function triggerScreenLogic(screenNum) {
            if (screenNum === 7) runScanner();
        }

        // Screen 2: Clouds
        let cloudsCleared = 0;
        const totalClouds = 4;
        function clearCloud(el) {
            if(el.style.pointerEvents === 'none') return;
            el.style.pointerEvents = 'none';
            gsap.to(el, { opacity: 0, scale: 0, duration: 0.5, ease: "back.in(1.7)" });
            cloudsCleared++;
            if (cloudsCleared === totalClouds) {
                gsap.to("#the-moon", { opacity: 1, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.3 });
                gsap.to("#btn-next-2", { opacity: 1, pointerEvents: "auto", y: -10, duration: 0.5, delay: 1 });
            }
        }

        // Screen 3: Hugs
        let hugCount = 0;
        function sendHug(e) {
            if (hugCount >= 3) return;
            
            // Visual feedback on button
            gsap.fromTo(e.currentTarget, {scale: 0.9}, {scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)"});

            // Update dots
            const dots = document.getElementById('hug-dots').children;
            dots[hugCount].classList.remove('bg-white/20');
            dots[hugCount].classList.add('bg-gold');

            // Spawn floating hug
            const container = document.getElementById('hug-container');
            const hug = document.createElement('div');
            hug.innerHTML = '<iconify-icon icon="solar:heart-linear" stroke-width="1.5"></iconify-icon>';
            hug.className = 'absolute left-1/2 top-2/3 text-4xl text-gold -translate-x-1/2 -translate-y-1/2';
            
            // Slight random X offset
            const randomX = (Math.random() - 0.5) * 60;
            
            container.appendChild(hug);
            
            gsap.to(hug, {
                y: -300,
                x: randomX,
                opacity: 0,
                scale: 1.5,
                duration: 1.5,
                ease: "power1.out",
                onComplete: () => hug.remove()
            });

            hugCount++;
            if (hugCount === 3) {
                setTimeout(() => nextScreen(4), 1000);
            }
        }

        // Screen 4: Gift Box
        let giftOpened = false;
        function openGift() {
            if (giftOpened) return;
            giftOpened = true;
            const box = document.getElementById('gift-box');
            
            // Squash and stretch
            gsap.timeline()
                .to(box, { scaleX: 1.2, scaleY: 0.8, duration: 0.15 })
                .to(box, { scaleX: 0.9, scaleY: 1.1, duration: 0.15 })
                .to(box, { scaleX: 1, scaleY: 1, duration: 0.5, ease: "elastic.out(1, 0.3)", onComplete: () => {
                    gsap.to(box, { opacity: 0, scale: 0.5, duration: 0.4, display: 'none' });
                    gsap.to("#gift-title", { opacity: 0, duration: 0.4, display: 'none' });
                    
                    const msg = document.getElementById('gift-message');
                    msg.classList.remove('opacity-0');
                    gsap.fromTo(msg, 
                        { opacity: 0, y: 20 }, 
                        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
                    );
                }});
        }

        // Screen 5: Dua Randomizer
        const duas = ["Rehmat", "Khushi", "Barakah", "Sukoon", "Sehat", "Hidayah", "Kamyabi"];
        let isRandomizing = false;
        function generateDua() {
            if (isRandomizing) return;
            isRandomizing = true;
            
            const display = document.getElementById('dua-display');
            const btn = document.getElementById('btn-dua');
            gsap.to(btn, {opacity: 0, pointerEvents: 'none', duration: 0.3});

            let cycles = 0;
            const maxCycles = 20;
            const interval = setInterval(() => {
                display.innerText = duas[Math.floor(Math.random() * duas.length)];
                cycles++;
                if (cycles >= maxCycles) {
                    clearInterval(interval);
                    // Pick final randomly
                    const finalDua = duas[Math.floor(Math.random() * duas.length)];
                    display.innerText = finalDua;
                    
                    // Pop effect
                    gsap.fromTo(display, {scale: 0.8}, {scale: 1.1, duration: 0.3, yoyo: true, repeat: 1});
                    
                    // Show next button
                    gsap.to("#btn-next-5", { opacity: 1, pointerEvents: "auto", y: -10, duration: 0.5, delay: 0.5 });
                }
            }, 100);
        }

        // Screen 6: Food
        let foodsEaten = 0;
        function eatFood(el) {
            if (el.dataset.eaten === "true") return;
            el.dataset.eaten = "true";
            
            const icon = el.querySelector('iconify-icon');
            const text = el.querySelector('.status-text');
            
            gsap.to(icon, {scale: 0, opacity: 0, duration: 0.3, ease: "back.in(2)"});
            
            setTimeout(() => {
                text.innerText = "Nom nom!";
                text.classList.remove('text-white/30');
                text.classList.add('text-gold');
                gsap.to(el, { opacity: 0.5, duration: 0.3 });
                
                foodsEaten++;
                if (foodsEaten === 3) {
                    setTimeout(() => nextScreen(7), 800);
                }
            }, 300);
        }

        // Screen 7: Scanner
        function runScanner() {
            gsap.to("#loading-bar", {
                width: "100%",
                duration: 3,
                ease: "power1.inOut",
                onComplete: () => {
                    // Hide scanner, show final
                    gsap.to("#scanner-phase", { opacity: 0, scale: 0.9, duration: 0.5, display: "none" });
                    
                    const finalPhase = document.getElementById('final-phase');
                    finalPhase.classList.remove('pointer-events-none');
                    gsap.fromTo(finalPhase, 
                        { opacity: 0, y: 20 }, 
                        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
                    );
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<audio id="bg-music" loop="" preload="auto">
<source src="https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3?filename=ambient-piano-amp-strings-10711.mp3" type="audio/mpeg"/>
</audio>

<main className="relative w-full max-w-md h-[100dvh] bg-dark overflow-hidden shadow-2xl mx-auto sm:border sm:border-white/5 sm:rounded-2xl" id="app-container">

<section className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10 w-full h-full" id="screen-1">
<h1 className="text-xl font-medium text-white/80">And it's finally...</h1>
<h2 className="text-5xl font-semibold tracking-tight mt-2 text-gold opacity-0 translate-y-4" id="intro-eid">Eid.</h2>
<p className="absolute bottom-12 text-xs text-white/40 tracking-widest uppercase font-medium animate-pulse opacity-0" id="intro-tap">Tap anywhere to begin</p>
</section>

<section className="absolute inset-0 hidden flex-col items-center justify-center w-full h-full bg-gradient-to-b from-[#02040a] to-dark" id="screen-2">
<h2 className="absolute top-20 text-lg font-medium tracking-tight text-white/90 text-center px-6">Clear the clouds to find the moon</h2>
<div className="relative w-full h-2/3 mt-20 flex items-center justify-center" id="sky-container">

<div className="cloud cursor-pointer absolute top-[10%] left-[15%] transition-transform hover:scale-105" onclick="clearCloud(this)">
<iconify-icon className="text-6xl text-white/80" icon="solar:cloud-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="cloud cursor-pointer absolute top-[25%] right-[10%] transition-transform hover:scale-105" onclick="clearCloud(this)">
<iconify-icon className="text-7xl text-white/70" icon="solar:cloud-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="cloud cursor-pointer absolute top-[50%] left-[25%] transition-transform hover:scale-105" onclick="clearCloud(this)">
<iconify-icon className="text-5xl text-white/90" icon="solar:cloud-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="cloud cursor-pointer absolute top-[40%] right-[30%] transition-transform hover:scale-105" onclick="clearCloud(this)">
<iconify-icon className="text-6xl text-white/60" icon="solar:cloud-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="absolute opacity-0 scale-50 pointer-events-none flex flex-col items-center" id="the-moon">
<div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-gold/5 blur-xl absolute inset-0"></div>
<iconify-icon className="text-7xl text-gold relative z-10" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<button className="opacity-0 pointer-events-none absolute bottom-12 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-sm font-medium hover:bg-white/20 transition-colors" id="btn-next-2" onclick="nextScreen(3)">
                Continue
            </button>
</section>

<section className="absolute inset-0 hidden flex-col items-center justify-center w-full h-full" id="screen-3">
<div className="text-center z-10 relative pointer-events-none">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Give me 3 Eid hugs</h2>
<p className="text-sm text-white/50 mb-8">Tap the button below to send hugs</p>
<div className="flex gap-3 justify-center mb-12" id="hug-dots">
<div className="w-2 h-2 rounded-full bg-white/20 transition-colors duration-300"></div>
<div className="w-2 h-2 rounded-full bg-white/20 transition-colors duration-300"></div>
<div className="w-2 h-2 rounded-full bg-white/20 transition-colors duration-300"></div>
</div>
</div>
<button className="relative z-20 w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95" id="btn-hug" onclick="sendHug(event)">
<iconify-icon className="text-4xl text-white/80" icon="solar:emoji-funny-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute inset-0 pointer-events-none overflow-hidden" id="hug-container"></div>
</section>

<section className="absolute inset-0 hidden flex-col items-center justify-center w-full h-full px-6" id="screen-4">
<h2 className="text-xl font-medium tracking-tight mb-16 text-white/90" id="gift-title">A little Eidi for you</h2>
<div className="cursor-pointer transition-transform hover:scale-105" id="gift-box" onclick="openGift()">
<iconify-icon className="text-8xl text-gold" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="opacity-0 translate-y-4 absolute flex flex-col items-center text-center max-w-[80%]" id="gift-message">
<p className="text-base font-medium leading-relaxed text-white/90">
                    My Eidi for you is simple...<br/><br/>
<span className="text-gold">Endless hugs, sweet moments, and many more Eids together.</span> ❤️
                </p>
<button className="mt-8 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-sm font-medium hover:bg-white/20 transition-colors" onclick="nextScreen(5)">
                    Accept Eidi
                </button>
</div>
</section>

<section className="absolute inset-0 hidden flex-col items-center justify-center w-full h-full px-6" id="screen-5">
<h2 className="text-sm font-medium text-white/50 tracking-widest uppercase mb-12">Your Eid Blessing</h2>
<div className="h-20 flex items-center justify-center w-full mb-12">
<h3 className="text-4xl font-semibold tracking-tight text-gold" id="dua-display">?</h3>
</div>
<button className="px-8 py-4 rounded-full bg-white text-dark font-semibold text-sm hover:bg-white/90 transition-transform active:scale-95" id="btn-dua" onclick="generateDua()">
                Send an Eid Dua
            </button>
<button className="opacity-0 pointer-events-none absolute bottom-12 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-sm font-medium hover:bg-white/20 transition-colors" id="btn-next-5" onclick="nextScreen(6)">
                Continue
            </button>
</section>

<section className="absolute inset-0 hidden flex-col items-center justify-center w-full h-full px-6" id="screen-6">
<h2 className="text-2xl font-semibold tracking-tight mb-2 text-center">Sweeten the moment</h2>
<p className="text-sm text-white/50 mb-12 text-center">Tap to eat the Eid specials</p>
<div className="flex flex-col gap-6 w-full max-w-[250px]">
<div className="food-item flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors" onclick="eatFood(this)">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-gold" icon="solar:cup-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Sheer Khurma</span>
</div>
<span className="status-text text-xs text-white/30">Eat</span>
</div>
<div className="food-item flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors" onclick="eatFood(this)">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-gold" icon="solar:pie-chart-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Gulab Jamun</span>
</div>
<span className="status-text text-xs text-white/30">Eat</span>
</div>
<div className="food-item flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors" onclick="eatFood(this)">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-gold" icon="solar:soup-bowl-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Biryani</span>
</div>
<span className="status-text text-xs text-white/30">Eat</span>
</div>
</div>
</section>

<section className="absolute inset-0 hidden flex-col items-center justify-center w-full h-full px-6" id="screen-7">

<div className="flex flex-col items-center w-full max-w-[80%]" id="scanner-phase">
<iconify-icon className="text-5xl text-white/50 mb-6" icon="solar:face-scan-square-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-white/80 text-center mb-6">Checking how amazing you look today...</p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-0 bg-gold rounded-full" id="loading-bar"></div>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none px-6 text-center" id="final-phase">

<div className="absolute top-0 w-full flex justify-between px-12 pt-4 opacity-40">
<div className="lantern-sway flex flex-col items-center">
<div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
<iconify-icon className="text-3xl text-gold -mt-1" icon="solar:lamp-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="lantern-sway-delayed flex flex-col items-center">
<div className="w-px h-24 bg-gradient-to-b from-white/50 to-transparent"></div>
<iconify-icon className="text-3xl text-gold -mt-1" icon="solar:lamp-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-4 leading-snug">
                        Mere Dil E Chand Ko<br/>
<span className="text-gold text-3xl">Eid Ka Chand Mubarak 🌙</span>
</h1>
<p className="text-sm text-white/60 font-medium max-w-[250px] mx-auto leading-relaxed">
                        Wishing you an Eid filled with love, laughter, and endless blessings.
                    </p>
</div>
</div>
</section>
</main>


    </>
  );
}
