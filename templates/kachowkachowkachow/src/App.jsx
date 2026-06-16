import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // --- State Management ---
        const envelopeStage = document.getElementById('envelope-stage');
        const letterContainer = document.getElementById('letter-container');
        
        // Stages
        const stages = {
            initial: document.getElementById('stage-initial'),
            details: document.getElementById('stage-details'),
            suggestion: document.getElementById('stage-suggestion'),
            final: document.getElementById('stage-final')
        };

        // --- Logic Variables ---
        const initialRejectionTexts = ["Are you sure?", "Don't be mean", "I have snacks...", "Last chance!", "Pretty please?"];
        let initialRejectionIndex = 0;

        let detailsNoCount = 0; // Tracks clicks on the Bowlero "No" button

        // --- Functions ---

        function openLetter() {
            envelopeStage.classList.add('fade-exit-active');
            setTimeout(() => {
                envelopeStage.style.display = 'none';
                letterContainer.classList.remove('hidden');
                // Ensure initial is showing
                switchStage('initial');
            }, 300);
        }

        // Helper to swap views with fade
        function switchStage(stageName) {
            // Hide all
            Object.values(stages).forEach(el => {
                el.classList.remove('fade-enter-active');
                el.classList.add('fade-enter'); // reset to hidden state
                el.style.display = 'none';
            });
            
            // Show target
            const target = stages[stageName];
            target.style.display = 'flex';
            // Slight delay to allow display:flex to apply before opacity transition
            setTimeout(() => {
                target.classList.remove('fade-enter');
                target.classList.add('fade-enter-active');
            }, 10);
        }

        function goToStage(name) {
            if(name === 'final') {
                triggerCelebration();
            }
            switchStage(name);
        }

        // 1. Initial Page "No" Logic (Loops text)
        function handleInitialNo() {
            const btn = document.getElementById('initial-no-btn');
            btn.innerText = initialRejectionTexts[initialRejectionIndex];
            initialRejectionIndex = (initialRejectionIndex + 1) % initialRejectionTexts.length;
            shakeButton(btn);
        }

        // 2. Details (Bowlero) Page "No" Logic (Count based)
        function handleDetailsNo() {
            const btn = document.getElementById('details-no-btn');
            
            if (detailsNoCount === 0) {
                btn.innerText = "You sure?";
                shakeButton(btn);
                detailsNoCount++;
            } else if (detailsNoCount === 1) {
                btn.innerText = "Positive?";
                shakeButton(btn);
                detailsNoCount++;
            } else {
                // Third click -> Go to suggestion
                goToStage('suggestion');
            }
        }

        // 3. Suggestion Form Logic
        function handleSuggestion(e) {
            e.preventDefault();
            goToStage('final');
        }

        // Utils
        function shakeButton(btn) {
            btn.classList.add('translate-x-1', 'bg-red-50', 'border-red-100', 'text-red-500');
            setTimeout(() => {
                btn.classList.remove('translate-x-1');
                btn.classList.add('-translate-x-1');
            }, 50);
            setTimeout(() => {
                btn.classList.remove('-translate-x-1', 'bg-red-50', 'border-red-100', 'text-red-500');
            }, 200);
        }

        // --- Celebration Logic ---
        function triggerCelebration() {
            const overlay = document.getElementById('overlay-container');
            overlay.classList.remove('hidden');
            overlay.innerHTML = ''; // Clear previous

            // Fire Confetti
            fireConfetti();
            

            // Remove everything after 3 seconds
            setTimeout(() => {
                // Fade out content of overlay
                Array.from(overlay.children).forEach(child => {
                    child.style.opacity = '0';
                    child.style.transition = 'opacity 1s ease';
                });
                
                setTimeout(() => {
                    overlay.classList.add('hidden');
                    overlay.innerHTML = '';
                }, 1000);
            }, 3000);
        }

        function fireConfetti() {
            const colors = ['#f43f5e', '#ec4899', '#a78bfa', '#34d399', '#fbbf24'];
            const shapes = ['❤️', '✨', '🎀'];
            
            for (let i = 0; i < 60; i++) {
                const conf = document.createElement('div');
                conf.innerText = shapes[Math.floor(Math.random() * shapes.length)];
                conf.style.position = 'fixed';
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.top = '-5vh';
                conf.style.fontSize = (Math.random() * 20 + 10) + 'px';
                conf.style.transform = `rotate(${Math.random() * 360}deg)`;
                conf.style.zIndex = '50';
                conf.style.pointerEvents = 'none';
                const duration = Math.random() * 3 + 2;
                conf.style.transition = `top ${duration}s ease-in, opacity ${duration}s ease-in`;
                
                document.body.appendChild(conf);

                requestAnimationFrame(() => {
                    conf.style.top = '105vh';
                    conf.style.opacity = '0';
                });

                setTimeout(() => conf.remove(), duration * 1000);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full blur-3xl animate-pulse bg-rose-300/30"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full blur-3xl bg-orange-100/40"></div>
</div>

<img alt="cat" className="absolute top-10 left-10 w-24 opacity-60 mix-blend-multiply pointer-events-none float-anim hidden md:block object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35669f49-fd3d-46ca-b60d-322dc4332ecd_320w.jpg"/>
<img alt="cat" className="absolute bottom-20 right-20 w-20 opacity-60 mix-blend-multiply pointer-events-none float-anim hidden md:block object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e4179e7-359c-4e64-9ff6-2a6ffec37a7d_320w.jpg" style={{animationDelay: '2s'}}/>

<div className="z-20 flex flex-col items-center cursor-pointer group transition-all duration-500" id="envelope-stage" onclick="openLetter()">
<div className="group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-1 transition-all duration-300 text-center w-full max-w-sm border rounded-2xl mr-4 ml-4 pt-12 pr-12 pb-12 pl-12 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white border-zinc-200">
<div className="w-12 h-12 mx-auto rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-rose-50 border-rose-100">
<iconify-icon className="text-rose-500 text-2xl" icon="lucide:mail" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold tracking-tight mb-1 text-zinc-900">Delivery for Amari</h2>
<p className="text-xs font-normal text-zinc-400">Tap to open</p>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-rose-500/10 rounded-b-lg"></div>
</div>
</div>

<main className="relative z-10 w-full max-w-lg px-6 hidden" id="letter-container">
<div className="glass-card w-full rounded-2xl border ring-1 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 sm:p-10 transition-all duration-500 border-white/60 ring-zinc-900/5">

<div className="flex flex-col items-center text-center fade-enter-active" id="stage-initial">
<div className="mb-6 relative">
<div className="absolute inset-0 blur-xl rounded-full bg-rose-200/30"></div>
<div className="relative w-14 h-14 rounded-full bg-gradient-to-b border shadow-sm flex items-center justify-center from-white to-zinc-50 border-zinc-100">
<iconify-icon className="text-rose-500 text-2xl" icon="lucide:calendar-heart" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-zinc-900">
                    Hope you're not busy this Saturday.
                </h1>
<p className="text-sm sm:text-base text-zinc-500 font-normal leading-relaxed mb-8 max-w-md mx-auto">
                    Happy (early) Valentines day! I've really loved talking to you and getting to know you more recently, and I'd love to take you out. Will you be my valentines?
                </p>
<div className="w-full flex flex-col sm:flex-row gap-3 justify-center items-center">
<button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-95 bg-zinc-900 hover:bg-zinc-800 text-zinc-50" onclick="goToStage('details')">
<span>Yes I'd love to</span>
<iconify-icon className="group-hover:text-rose-300 transition-colors text-zinc-400" icon="lucide:heart" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 border text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-600" id="initial-no-btn" onclick="handleInitialNo()">
                        No bum
                    </button>
</div>
</div>

<div className="flex-col items-center text-center fade-enter" id="stage-details">

<div className="relative mb-6 group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-500 from-rose-200 to-orange-100"></div>
<div className="relative w-48 h-48 mx-auto rounded-xl overflow-hidden border-2 shadow-lg rotate-2 group-hover:rotate-0 transition-transform duration-300 border-white">

<img alt="Amari on a roll" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f01d4740-7883-404a-a6a3-8a914eb13b20_3840w.jpg"/>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-max backdrop-blur-md px-3 py-1 rounded-full border bg-black/70 border-white/20">
<span className="text-xs font-medium text-white">Amari, you're on a roll!</span>
</div>
</div>
</div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3 text-zinc-900">
                    Sweet 😝.
                </h2>
<p className="text-sm font-normal leading-relaxed mb-8 max-w-sm mx-auto text-zinc-600">
                    How does the <span className="font-medium text-rose-500">Bowlero in Tamarac</span> at 5pm sound? It's got food, bowling, and an arcade.
                </p>
<div className="w-full flex flex-col sm:flex-row gap-3 justify-center items-center">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm active:scale-95 bg-zinc-900 hover:bg-zinc-800 text-zinc-50" onclick="goToStage('final')">
<span>Yes</span>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-2.5 border text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-600" id="details-no-btn" onclick="handleDetailsNo()">
                        No
                    </button>
</div>
</div>

<div className="flex-col items-center text-center fade-enter" id="stage-suggestion">
<div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center mb-4 bg-orange-50 border-orange-100">
<iconify-icon className="text-orange-500 text-xl" icon="lucide:lightbulb" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight mb-2 text-zinc-900">Okay, you lead the way!</h2>
<p className="text-sm text-zinc-500 mb-6">Where would you prefer to go instead?</p>
<form className="w-full max-w-xs mx-auto" onsubmit="handleSuggestion(event)">
<input className="w-full px-4 py-2.5 border rounded-lg text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all mb-3 bg-white border-zinc-200 text-zinc-900" placeholder="Type a place..." required="" type="text"/>
<button className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 bg-zinc-900 hover:bg-zinc-800 text-zinc-50" type="submit">
                        Let's do that! <iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</button>
</form>
</div>

<div className="flex-col items-center text-center fade-enter" id="stage-final">

<div className="relative mb-6 animate-bounce" style={{animationDuration: '3s'}}>
<div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden border-2 shadow-xl rotate-[-3deg] border-rose-200">

<img alt="Amari on a roll" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f01d4740-7883-404a-a6a3-8a914eb13b20_1600w.jpg"/>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t to-transparent p-2 from-black/60">
<span className="text-[10px] font-medium uppercase tracking-wider text-white">Amari, you're on a roll!</span>
</div>
</div>

<img alt="cat" className="absolute -top-6 -right-8 w-16 rotate-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e966d8c9-5f38-4ec9-abba-3ee6eef31868_3840w.jpg"/>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2 text-zinc-900">
                    Awesome! Can't wait!
                </h2>
<p className="text-sm text-zinc-500 font-normal mb-8">
                    .
                </p>

<div className="w-full rounded-xl border p-4 flex items-center justify-between bg-zinc-50 border-zinc-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center bg-white border-zinc-200 text-zinc-400">
<iconify-icon className="text-lg" icon="lucide:calendar" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Date</div>
<div className="text-sm font-medium text-zinc-900">This Saturday</div>
</div>
</div>
<div className="h-8 w-px mx-2 bg-zinc-200"></div>
<div className="flex items-center gap-2">
<div className="text-right">
<div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Status</div>
<div className="text-[10px] font-semibold px-2 py-0.5 rounded-full border text-emerald-600 bg-emerald-50 border-emerald-100">Confirmed</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 pointer-events-none z-50 hidden" id="overlay-container"></div>
<footer className="absolute bottom-6 w-full text-center z-10 pointer-events-none">
<p className="text-[10px] font-medium text-rose-300">
            Made with <iconify-icon className="inline-block align-text-top mx-0.5 text-rose-400" height="10" icon="lucide:heart"></iconify-icon> just for you
        </p>
</footer>


    </>
  );
}
