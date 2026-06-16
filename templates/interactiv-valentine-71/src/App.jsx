import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let currentStep = 1;
        const totalSteps = 5;
        const btnNo = document.getElementById('btn-no');
        const noText = document.getElementById('no-text');
        const audio = document.getElementById('bg-music');
        let moveCount = 0;

        function nextStep(step) {
            // Hide current
            document.querySelector('.screen.active').classList.remove('active');
            
            // Show next
            setTimeout(() => {
                document.getElementById(`screen-${step}`).classList.add('active');
                currentStep = step;
                document.getElementById('step-indicator').innerText = `Step ${currentStep} of ${totalSteps}`;
            }, 500); // Wait for transition
        }

        function playMusic() {
            // Attempt to play audio on first user interaction
            if (audio) {
                audio.volume = 0.4;
                audio.play().catch(e => console.log("Audio play failed (interaction needed):", e));
            }
        }

        // Logic for Dodge Button
        function dodgeButton() {
            moveCount++;
            const phrases = [
                "Oops… missed it 😜",
                "Not so easy 😏",
                "Try again, cutie 👀❤️",
                "Almost had it! 😂",
                "Nice try! 👻",
                "Okay, I'll stop... JK 🏃"
            ];

            // Update text
            if (moveCount <= phrases.length) {
                noText.innerText = phrases[(moveCount - 1) % phrases.length];
            }

            // Move button
            const screen2 = document.getElementById('screen-2');
            const rect = screen2.getBoundingClientRect();
            const btnRect = btnNo.getBoundingClientRect();

            // Calculate random position within the container/viewport safety
            // We set position absolute to container
            btnNo.style.position = 'absolute';
            
            // Random X and Y
            const maxX = window.innerWidth - btnRect.width - 40;
            const maxY = 300; // Limit vertical movement to keep it visible
            
            const randomX = Math.random() * (maxX > 0 ? maxX : 20);
            const randomY = Math.random() * (maxY) - (maxY/2); // Move up or down from center

            // For mobile safety, keep it more centered
            if(window.innerWidth < 640) {
                 btnNo.style.left = (Math.random() * (window.innerWidth - 150)) + 'px';
                 btnNo.style.top = (Math.random() * 200) + 'px';
            } else {
                // Desktop - just move it somewhere wild but visible
                btnNo.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
            }
        }

        // Option Selection in Screen 4
        function selectOption(type) {
            const msg = document.getElementById('deal-msg');
            msg.style.opacity = '1';
            
            // Wait a bit then go to final screen
            setTimeout(() => {
                nextStep(5);
                fireConfetti(); // More confetti for the grand finale
            }, 1500);
        }

        // Confetti Logic
        function fireConfetti() {
            const icons = ['heart-bold', 'star-bold', 'music-note-bold', 'confetti-minimalistic-bold'];
            const colors = ['#f43f5e', '#fb7185', '#fda4af', '#e11d48'];

            const interval = setInterval(() => {
                const heart = document.createElement('div');
                const randomIcon = icons[Math.floor(Math.random() * icons.length)];

                heart.innerHTML = `<iconify-icon icon="solar:${randomIcon}"></iconify-icon>`;
                heart.className = 'confetti-heart';

                // Random positioning
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = -50 + 'px';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';

                // Random duration
                heart.style.animationDuration = (Math.random() * 2 + 2) + 's';

                document.body.appendChild(heart);

                // Cleanup
                setTimeout(() => heart.remove(), 4000);
            }, 100);

            // Stop generating after 3 seconds
            setTimeout(() => clearInterval(interval), 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<audio id="bg-music" loop="">
<source src="https://pixabay.com/music/download/music-10884.mp3?filename=romantic-piano-10884.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
    </audio>

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-[10%] left-[5%] text-rose-200/40 text-7xl floating-icon" style={{animationDelay: '0s'}}>
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-[20%] right-[10%] text-rose-200/40 text-6xl floating-icon" style={{animationDelay: '-2s'}}>
<iconify-icon icon="solar:heart-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[40%] right-[25%] text-rose-200/30 text-4xl floating-icon" style={{animationDelay: '-4s'}}>
<iconify-icon icon="solar:cupid-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<nav className="w-full flex justify-center py-6 z-40 fixed top-0">
<div className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm shadow-rose-100/20 px-6 py-2.5 rounded-full flex items-center gap-3">
<span className="text-[10px] font-semibold tracking-widest uppercase text-rose-900/80">
                Special Delivery
            </span>
<div className="h-1 w-1 rounded-full bg-rose-400"></div>
<span className="text-[10px] font-semibold tracking-widest uppercase text-rose-900/80" id="step-indicator">
                Step 1 of 5
            </span>
</div>
</nav>

<main className="w-full max-w-3xl z-10 flex flex-col items-center min-h-[50vh] justify-center relative">

<div className="screen active" id="screen-1">
<div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-rose-100 text-slate-600 shadow-sm shadow-rose-100/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-medium tracking-wide">One new message</span>
</div>
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 text-center mb-8 leading-tight">
                Hey… can I ask you<br/>something important? 🥺❤️
            </h1>
<button className="group relative px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg shadow-rose-200 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden" onclick="nextStep(2); playMusic()">
<div className="btn-shine"></div>
<div className="flex items-center gap-2 relative z-10">
<span className="text-sm font-medium tracking-wide">Okay</span>
<iconify-icon className="text-lg" icon="solar:heart-angle-linear"></iconify-icon>
</div>
</button>
</div>

<div className="screen" id="screen-2">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 text-center mb-12 leading-tight">
                Will you be my<br/>
<span className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
                    Valentine?
                </span> 🌹✨
            </h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full relative h-32 sm:h-auto">
<button className="w-full sm:w-40 px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl shadow-lg shadow-rose-200/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2" onclick="nextStep(3); fireConfetti()">
<span className="text-sm font-semibold tracking-wide">Yes</span>
<iconify-icon className="text-lg" icon="solar:smile-circle-linear"></iconify-icon>
</button>
<button className="w-full sm:w-40 px-6 py-3.5 bg-white border border-slate-200 text-slate-500 rounded-xl hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2 absolute sm:relative" id="btn-no" onmouseover="dodgeButton()" ontouchstart="dodgeButton()">
<span className="text-sm font-medium tracking-wide" id="no-text">No 😅</span>
</button>
</div>
</div>

<div className="screen text-center" id="screen-3">
<div className="w-24 h-24 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-8 border border-rose-100 shadow-sm animate-[bounce_2s_infinite]">
<iconify-icon className="text-5xl" icon="solar:heart-bold"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
                YAYYY!! 💖🥹
            </h2>
<p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed mb-10">
                You just made my Valentine’s Day unforgettable ✨
            </p>
<button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 hover:text-rose-500 hover:border-rose-200 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto" onclick="nextStep(4)">
<span className="text-sm font-medium">Continue</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="screen w-full" id="screen-4">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 text-center mb-8">
                But wait… one last thing 👀💕
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">

<button className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-rose-200 hover:-translate-y-1 transition-all duration-300 text-left" onclick="selectOption('hug')">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:heart-circle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">A Warm Hug</h3>
<p className="text-xs text-slate-400">Unlimited supply included</p>
</button>

<button className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 hover:-translate-y-1 transition-all duration-300 text-left" onclick="selectOption('coffee')">
<div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Coffee Date</h3>
<p className="text-xs text-slate-400">On me, obviously</p>
</button>

<button className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-pink-200 hover:-translate-y-1 transition-all duration-300 text-left" onclick="selectOption('chocolate')">
<div className="h-10 w-10 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:donut-bitten-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Chocolate Treat</h3>
<p className="text-xs text-slate-400">Sweetness overload</p>
</button>
</div>
<div className="mt-8 text-center h-6 text-sm font-medium text-rose-500 opacity-0 transition-opacity duration-300" id="deal-msg">
                Deal sealed 🤝 Valentine confirmed 💘
            </div>
</div>

<div className="screen text-center" id="screen-5">
<div className="mb-6">
<iconify-icon className="text-6xl text-rose-400" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                So… it’s a date then ❤️
            </h2>
<p className="text-lg text-slate-500 mb-12">
                Happy Valentine’s Day 💖
            </p>
<div className="relative inline-block">
<span className="font-['Inter'] text-slate-400 italic text-lg tracking-wide opacity-80">
                    — Niranjan 😌
                </span>
<div className="absolute -right-6 -top-4 text-rose-300 animate-pulse">
<iconify-icon className="text-xl" icon="solar:heart-bold"></iconify-icon>
</div>
</div>
</div>
</main>

<footer className="w-full py-6 text-center z-10 fixed bottom-0 pointer-events-none">
<p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase opacity-40">
            Made with ❤️ for you
        </p>
</footer>


    </>
  );
}
