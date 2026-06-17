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



        const wheel = document.getElementById('wheel');
        const wheelSection = document.getElementById('wheelSection');
        const spinBtn = document.getElementById('spinBtn');
        const modal = document.getElementById('resultModal');
        const modalCard = document.getElementById('modalCard');
        const winItemText = document.getElementById('winItem');
        const winIcon = document.getElementById('winIcon');

        const segments = [
            { name: "Burger", icon: "lucide:beef", min: 0, max: 60 },
            { name: "Frites", icon: "lucide:utensils", min: 60, max: 120 },
            { name: "Boisson", icon: "lucide:cup-soda", min: 120, max: 180 },
            { name: "Naan", icon: "lucide:croissant", min: 180, max: 240 },
            { name: "Dessert", icon: "lucide:ice-cream-2", min: 240, max: 300 },
            { name: "Nuggets", icon: "lucide:drumstick", min: 300, max: 360 }
        ];

        let isSpinning = false;

        spinBtn.addEventListener('click', () => {
            if (isSpinning) return;
            
            // Mobile experience: Scroll to wheel so they see it spinning
            if (window.innerWidth < 1024) {
                wheelSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            isSpinning = true;
            spinBtn.disabled = true;
            spinBtn.classList.add('opacity-80', 'cursor-not-allowed');

            // Logic: Rotate counter-clockwise.
            // Minimum 5 full spins (1800 deg) + random
            const randomDeg = Math.floor(1800 + Math.random() * 1800); 
            wheel.style.transform = `rotate(-${randomDeg}deg)`; 

            setTimeout(() => {
                const actualRotation = randomDeg % 360;
                // Determine winner based on angle at top (0deg)
                const winner = segments.find(seg => actualRotation >= seg.min && actualRotation < seg.max);
                
                if(winner) {
                    showResult(winner);
                }

                isSpinning = false;
                spinBtn.disabled = false;
                spinBtn.classList.remove('opacity-80', 'cursor-not-allowed');
            }, 4000);
        });

        function showResult(item) {
            winItemText.textContent = item.name;
            winIcon.setAttribute('data-icon', item.icon);
            
            modal.classList.remove('pointer-events-none', 'opacity-0');
            modalCard.classList.remove('scale-95');
            modalCard.classList.add('scale-100');
        }

        function closeModal() {
            modal.classList.add('pointer-events-none', 'opacity-0');
            modalCard.classList.add('scale-95');
            modalCard.classList.remove('scale-100');
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
      

<div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white z-0"></div>
<div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-[0.4] z-0 mask-image-b"></div>

<nav className="w-full max-w-6xl mx-auto px-6 py-6 lg:py-8 flex justify-center items-center z-20 relative">
<img alt="Logo" className="h-10 lg:h-12 w-auto object-contain filter drop-shadow-sm hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</nav>

<main className="flex-grow flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto px-6 pb-12 lg:gap-20 relative z-10">

<div className="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left relative z-30 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium shadow-sm ring-1 ring-slate-100">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                Récompense garantie
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.05]">
                Votre fidélité<br/>
<span className="text-slate-400">récompensée.</span>
</h1>
<p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-md font-normal leading-relaxed">
                Tournez la roue gourmande et remportez immédiatement un produit offert pour votre prochaine commande.
            </p>
<div className="flex flex-col w-full sm:w-auto gap-3 pt-2">
<button className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-slate-800 active:scale-95 hover:translate-y-[-2px] transition-all shadow-xl shadow-slate-200 w-full sm:w-auto overflow-hidden touch-manipulation cursor-pointer z-40" id="spinBtn">
<span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></span>
<span className="iconify pointer-events-none" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="18"></span>
<span className="pointer-events-none">Tenter ma chance</span>
</button>
<p className="text-[10px] text-slate-400 text-center">Aucun achat requis pour jouer.</p>
</div>
</div>

<div className="w-full lg:w-7/12 flex justify-center items-center relative py-8 lg:py-0 scale-90 sm:scale-100 z-10" id="wheelSection">

<div className="absolute top-0 lg:-top-2 left-1/2 -translate-x-1/2 z-20 drop-shadow-xl text-slate-800">
<div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-slate-800"></div>
</div>

<div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] bg-white border-4 border-white ring-1 ring-slate-100">

<div className="wheel-container w-full h-full rounded-full relative wheel-bg overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" id="wheel">


<div className="absolute w-full h-full top-0 left-0 flex justify-center pt-8" style={{transform: 'rotate(30deg)'}}>
<div className="flex flex-col items-center gap-2">
<span className="p-2.5 bg-orange-50 text-orange-600 rounded-xl shadow-sm">
<span className="iconify" data-icon="lucide:beef" data-strokeWidth="1.5" data-width="22"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Burger</span>
</div>
</div>

<div className="absolute w-full h-full top-0 left-0 flex justify-center pt-8" style={{transform: 'rotate(90deg)'}}>
<div className="flex flex-col items-center gap-2">
<span className="p-2.5 bg-yellow-50 text-yellow-600 rounded-xl shadow-sm">
<span className="iconify" data-icon="lucide:utensils" data-strokeWidth="1.5" data-width="22"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Fries</span>
</div>
</div>

<div className="absolute w-full h-full top-0 left-0 flex justify-center pt-8" style={{transform: 'rotate(150deg)'}}>
<div className="flex flex-col items-center gap-2">
<span className="p-2.5 bg-sky-50 text-sky-600 rounded-xl shadow-sm">
<span className="iconify" data-icon="lucide:cup-soda" data-strokeWidth="1.5" data-width="22"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Drink</span>
</div>
</div>

<div className="absolute w-full h-full top-0 left-0 flex justify-center pt-8" style={{transform: 'rotate(210deg)'}}>
<div className="flex flex-col items-center gap-2">
<span className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shadow-sm">
<span className="iconify" data-icon="lucide:croissant" data-strokeWidth="1.5" data-width="22"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Naan</span>
</div>
</div>

<div className="absolute w-full h-full top-0 left-0 flex justify-center pt-8" style={{transform: 'rotate(270deg)'}}>
<div className="flex flex-col items-center gap-2">
<span className="p-2.5 bg-rose-50 text-rose-600 rounded-xl shadow-sm">
<span className="iconify" data-icon="lucide:ice-cream-2" data-strokeWidth="1.5" data-width="22"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Dessert</span>
</div>
</div>

<div className="absolute w-full h-full top-0 left-0 flex justify-center pt-8" style={{transform: 'rotate(330deg)'}}>
<div className="flex flex-col items-center gap-2">
<span className="p-2.5 bg-violet-50 text-violet-600 rounded-xl shadow-sm">
<span className="iconify" data-icon="lucide:drumstick" data-strokeWidth="1.5" data-width="22"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Nuggets</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-50 z-10">
<span className="iconify text-slate-900" data-icon="lucide:gift" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300" id="resultModal">

<div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity"></div>

<div className="bg-white w-full max-w-[340px] mx-4 rounded-2xl shadow-2xl border border-slate-100 p-8 transform scale-95 transition-transform duration-300 flex flex-col items-center text-center relative pointer-events-auto" id="modalCard">
<button className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors" onclick="closeModal()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="18"></span>
</button>
<div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-5 animate-pop border border-orange-100/50 shadow-inner">
<span className="iconify" data-icon="lucide:gift" data-strokeWidth="1.5" data-width="24" id="winIcon"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">C'est gagné !</h3>
<p className="text-sm text-slate-500 mb-6 font-medium">Vous remportez : <span className="text-slate-900" id="winItem">Produit</span></p>
<div className="w-full bg-slate-50 border border-slate-200 border-dashed rounded-lg p-3 mb-6 flex justify-between items-center group cursor-pointer hover:border-slate-400 hover:bg-slate-100 transition-all">
<code className="text-xs font-mono font-semibold text-slate-700 tracking-widest">GIFT-2024</code>
<span className="iconify text-slate-400 group-hover:text-slate-700 transition-colors" data-icon="lucide:copy" data-width="14"></span>
</div>
<button className="w-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-lg hover:bg-slate-800 transition-all shadow-md" onclick="closeModal()">
                Utiliser maintenant
            </button>
</div>
</div>


    </>
  );
}
