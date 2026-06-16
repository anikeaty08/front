import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const yesBtn = document.getElementById('yes-btn');
        const noBtn = document.getElementById('no-btn');
        const noText = document.getElementById('no-text');
        const subText = document.getElementById('sub-text');
        const card = document.getElementById('main-card');
        const questionState = document.getElementById('question-state');
        const successState = document.getElementById('success-state');
        const stage = document.getElementById('gift-stage');

        // Handle "No" Interaction
        noBtn.addEventListener('click', () => {
            // Shake animation
            card.classList.remove('animate-shake');
            void card.offsetWidth; 
            card.classList.add('animate-shake');
            
            // Update UI
            noText.innerText = "Try again";
            subText.innerText = "Pretty please?";
            subText.classList.remove('text-slate-500');
            subText.classList.add('text-rose-500');
        });

        // Handle "Yes" Interaction
        yesBtn.addEventListener('click', () => {
            questionState.style.display = 'none';
            successState.classList.remove('hidden');
            successState.classList.add('flex');
            fireConfetti();
        });

        // Gift Logic
        function revealGift(type) {
            stage.innerHTML = '';
            let content = '';
            
            // Remove previous color classes
            stage.className = "w-full h-48 rounded-2xl border border-dashed flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300";

            if (type === 'bouquet') {
                stage.classList.add('bg-rose-50/50', 'border-rose-200');
                content = `
                    <div class="animate-pop flex flex-col items-center">
                        <div class="relative">
                            <iconify-icon icon="solar:bouquet-linear" class="text-7xl text-rose-500 drop-shadow-sm"></iconify-icon>
                            <iconify-icon icon="solar:heart-bold" class="absolute -top-2 -right-2 text-rose-400 text-xl animate-bounce"></iconify-icon>
                            <iconify-icon icon="solar:heart-bold" class="absolute top-1/2 -left-4 text-rose-300 text-sm animate-pulse"></iconify-icon>
                        </div>
                        <p class="mt-4 text-sm font-semibold text-rose-600">A Bouquet for you!</p>
                    </div>
                `;
            } else if (type === 'teddy') {
                stage.classList.add('bg-indigo-50/50', 'border-indigo-200');
                content = `
                    <div class="animate-pop flex flex-col items-center">
                        <div class="flex items-center -space-x-4">
                             <iconify-icon icon="solar:cat-linear" class="text-6xl text-indigo-500 z-10"></iconify-icon>
                             <iconify-icon icon="solar:heart-angle-bold" class="text-4xl text-indigo-300 animate-pulse"></iconify-icon>
                        </div>
                        <p class="mt-4 text-sm font-semibold text-indigo-600">Big Hugs!</p>
                    </div>
                `;
            } else if (type === 'plants') {
                stage.classList.add('bg-emerald-50/50', 'border-emerald-200');
                content = `
                    <div class="animate-pop flex flex-col items-center">
                        <div class="flex items-end gap-2">
                             <iconify-icon icon="solar:leaf-linear" class="text-4xl text-emerald-400 animate-sway" style="animation-delay:0.1s"></iconify-icon>
                             <iconify-icon icon="solar:leaf-bold" class="text-6xl text-emerald-500 animate-sway"></iconify-icon>
                             <iconify-icon icon="solar:leaf-linear" class="text-4xl text-emerald-400 animate-sway" style="animation-delay:0.2s"></iconify-icon>
                        </div>
                        <p class="mt-4 text-sm font-semibold text-emerald-600">Growing Love!</p>
                    </div>
                `;
            }
            stage.innerHTML = content;
        }

        // Simple Confetti
        function fireConfetti() {
            const colors = ['#e11d48', '#4f46e5', '#10b981'];
            for(let i=0; i<30; i++) {
                const conf = document.createElement('div');
                conf.style.position = 'absolute';
                conf.style.width = Math.random() * 6 + 4 + 'px';
                conf.style.height = Math.random() * 6 + 4 + 'px';
                conf.style.background = colors[Math.floor(Math.random() * colors.length)];
                conf.style.left = Math.random() * 100 + '%';
                conf.style.top = '-10px';
                conf.style.opacity = '0.8';
                document.body.appendChild(conf);

                conf.animate([
                    { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
                    { transform: `translateY(100vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 2000 + 1500,
                    easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
                }).onfinish = () => conf.remove();
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-[100px] -translate-y-1/2"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-[100px] translate-y-1/2"></div>
</div>

<main className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-10 transition-all duration-500" id="main-card">

<div className="flex flex-col items-center text-center space-y-8" id="question-state">

<div className="relative group cursor-default">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-indigo-200 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="relative bg-white p-5 rounded-2xl shadow-sm border border-slate-100 animate-float">
<iconify-icon className="text-5xl text-rose-500" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<div className="absolute -right-8 top-0 animate-sway opacity-80">
<iconify-icon className="text-3xl text-slate-400" icon="solar:cupid-linear"></iconify-icon>
</div>
</div>

<div className="space-y-2">
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-100 rounded-full mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-medium text-rose-600 uppercase tracking-wide">Question for you</span>
</div>
<h1 className="text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
                    Will you be my <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Galentine?</span>
</h1>
<p className="text-slate-500 font-medium pt-2 transition-colors duration-200" id="sub-text">Date - this February?</p>
</div>

<div className="flex flex-col sm:flex-row gap-3 w-full">
<button className="group flex-1 h-12 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all shadow-lg shadow-slate-200 hover:shadow-xl active:scale-[0.98]" id="yes-btn">
<span className="font-medium">Yes, let's go</span>
<iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group flex-1 h-12 flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-200 hover:border-rose-200 rounded-xl transition-all active:scale-[0.98]" id="no-btn">
<span className="font-medium" id="no-text">No thanks</span>
</button>
</div>
</div>

<div className="hidden flex-col items-center w-full space-y-6 animate-pop" id="success-state">

<div className="w-full h-48 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300" id="gift-stage">

<div className="text-center p-6 animate-grow">
<div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3 ring-4 ring-green-50">
<iconify-icon className="text-2xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">You're the best!</h2>
<p className="text-sm text-slate-500 mt-1">Pick a gift to unwrap</p>
</div>
</div>

<div className="grid grid-cols-3 gap-3 w-full">

<button className="group relative flex flex-col items-center gap-3 p-3 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl transition-all active:scale-95" onclick="revealGift('bouquet')">
<div className="w-10 h-10 flex items-center justify-center bg-rose-100 rounded-full text-rose-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:bouquet-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600 group-hover:text-rose-600">Bouquet</span>
</button>

<button className="group relative flex flex-col items-center gap-3 p-3 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-xl transition-all active:scale-95" onclick="revealGift('teddy')">
<div className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:cat-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600 group-hover:text-indigo-600">Teddy</span>
</button>

<button className="group relative flex flex-col items-center gap-3 p-3 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-xl transition-all active:scale-95" onclick="revealGift('plants')">
<div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-full text-emerald-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600 group-hover:text-emerald-600">Plants</span>
</button>
</div>
<p className="text-xs text-slate-400 font-medium">See you soon <span className="text-rose-500">♥</span></p>
</div>
</main>


    </>
  );
}
