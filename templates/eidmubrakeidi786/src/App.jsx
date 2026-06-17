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



        let currentAmount = 0;

        function selectAmount(amount, btn) {
            currentAmount = amount;
            document.getElementById('selectedAmount').value = amount;
            
            document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            document.getElementById('amountError').classList.add('hidden');
        }

        // Confetti Engine
        function fireConfetti() {
            const colors = ['#10B981', '#F59E0B', '#3B82F6', '#EC4899', '#ffffff'];
            const container = document.getElementById('confetti-container');
            container.innerHTML = ''; // clear previous

            // Create explosion
            for (let i = 0; i < 60; i++) {
                const conf = document.createElement('div');
                conf.classList.add('confetti');
                
                // Random styles
                const bg = colors[Math.floor(Math.random() * colors.length)];
                const left = Math.random() * 100 + '%';
                const animDuration = (Math.random() * 2 + 2) + 's'; // 2-4s
                const delay = (Math.random() * 0.5) + 's';
                
                conf.style.backgroundColor = bg;
                conf.style.left = left;
                conf.style.top = '-10px';
                conf.style.animationDuration = animDuration;
                conf.style.animationDelay = delay;
                
                // Random rotation start
                conf.style.transform = `rotate(${Math.random() * 360}deg)`;

                container.appendChild(conf);
            }
        }

        function switchView(hideId, showId) {
            const hideEl = document.getElementById(hideId);
            const showEl = document.getElementById(showId);

            hideEl.style.opacity = '0';
            hideEl.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                hideEl.classList.add('hidden-view');
                showEl.classList.remove('hidden-view');
                
                // Trigger reflow
                void showEl.offsetWidth;
                
                showEl.style.opacity = '1';
                showEl.style.transform = 'scale(1)';
            }, 500);
        }

        function handleSend(e) {
            e.preventDefault();
            
            if (!currentAmount) {
                document.getElementById('amountError').classList.remove('hidden');
                return;
            }

            // 1. Switch to Loading
            switchView('view-form', 'view-loading');

            // 2. Simulate App Processing (2 seconds)
            setTimeout(() => {
                // In real scenario: window.location.href = 'easypaisa://...';
                
                // 3. Simulate Return & Success
                switchView('view-loading', 'view-success');
                
                // 4. Blast Confetti
                setTimeout(() => {
                    fireConfetti();
                    // Play a second burst slightly later
                    setTimeout(fireConfetti, 1500);
                }, 400);

            }, 2500);
        }

        function resetForm() {
            document.getElementById('eidiForm').reset();
            currentAmount = 0;
            document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
            document.getElementById('confetti-container').innerHTML = '';
            
            switchView('view-success', 'view-form');
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
      

<div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" id="confetti-container"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute top-[20%] left-[5%] opacity-80 animate-float" style={{animationDuration: '8s'}}>
<div className="text-4xl filter drop-shadow-lg grayscale-[30%] hover:grayscale-0 transition-all">🐑</div>
</div>

<div className="absolute bottom-[15%] right-[8%] opacity-80 animate-graze">
<div className="text-5xl filter drop-shadow-lg grayscale-[20%] hover:grayscale-0 transition-all">🐐</div>
</div>

<div className="absolute top-[15%] right-[15%] opacity-60 animate-walk" style={{animationDelay: '1s'}}>
<div className="text-2xl blur-[1px]">🐐</div>
</div>

<iconify-icon className="absolute top-10 right-8 text-amber-200/10 text-9xl rotate-12" icon="solar:moon-stars-bold"></iconify-icon>
<iconify-icon className="absolute top-1/3 left-1/4 text-emerald-400/20 text-xl animate-pulse" icon="solar:star-fall-linear"></iconify-icon>
</div>

<main className="w-full max-w-md relative z-10 flex flex-col gap-6">

<div className="view-section flex flex-col gap-6" id="view-form">

<div className="text-center space-y-2 relative">
<div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-emerald-950/50 to-slate-900/50 border border-emerald-500/20 mb-2 shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-float">
<iconify-icon className="text-emerald-400 text-3xl" icon="solar:mosque-linear"></iconify-icon>
</div>
<h1 className="text-5xl md:text-6xl font-arabic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 pb-2 leading-tight drop-shadow-sm">
                    عيد مبارك
                </h1>
<p className="text-xs font-semibold text-emerald-500/80 tracking-[0.2em] uppercase">Eid Ul Adha Special</p>
</div>

<form className="glass-panel rounded-3xl p-6 md:p-8 space-y-5 relative overflow-hidden" id="eidiForm" onsubmit="handleSend(event)">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

<div className="space-y-1.5">
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">From</label>
<div className="input-group flex items-center gap-3 bg-slate-950/50 border border-slate-800 rounded-2xl px-4 py-3 transition-all duration-300">
<div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:user-circle-linear"></iconify-icon>
</div>
<input className="bg-transparent border-none outline-none text-slate-200 text-sm w-full placeholder-slate-700 font-medium tracking-wide" id="sender" pattern="[0-9]{11}" placeholder="03XXXXXXXXX" required="" type="tel"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">To</label>
<div className="input-group flex items-center gap-3 bg-slate-950/50 border border-slate-800 rounded-2xl px-4 py-3 transition-all duration-300">
<div className="w-7 h-7 rounded-full bg-amber-500/10 flex items-center justify-center">
<iconify-icon className="text-amber-400 text-lg" icon="solar:gift-linear"></iconify-icon>
</div>
<input className="bg-transparent border-none outline-none text-slate-200 text-sm w-full placeholder-slate-700 font-medium tracking-wide" id="receiver" pattern="[0-9]{11}" placeholder="03XXXXXXXXX" required="" type="tel"/>
</div>
</div>

<div className="space-y-2">
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1 flex justify-between">
<span>Eidi Amount</span>
</label>
<div className="grid grid-cols-2 gap-2.5">
<button className="amount-btn bg-slate-900/40 border border-slate-800 rounded-xl py-3.5 hover:bg-slate-800/40 transition-all duration-300 group" onclick="selectAmount(1000, this)" type="button">
<span className="text-sm font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">Rs. 1000</span>
</button>
<button className="amount-btn bg-slate-900/40 border border-slate-800 rounded-xl py-3.5 hover:bg-slate-800/40 transition-all duration-300 group" onclick="selectAmount(2000, this)" type="button">
<span className="text-sm font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">Rs. 2000</span>
</button>
<button className="amount-btn bg-slate-900/40 border border-slate-800 rounded-xl py-3.5 hover:bg-slate-800/40 transition-all duration-300 group" onclick="selectAmount(5000, this)" type="button">
<span className="text-sm font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">Rs. 5000</span>
</button>
<button className="amount-btn bg-slate-900/40 border border-slate-800 rounded-xl py-3.5 hover:bg-slate-800/40 transition-all duration-300 group" onclick="selectAmount(10000, this)" type="button">
<span className="text-sm font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">Rs. 10k</span>
</button>
</div>
<input id="selectedAmount" type="hidden"/>
<p className="text-[10px] text-red-400 hidden mt-1 flex items-center gap-1 pl-1" id="amountError">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Please select an amount
                    </p>
</div>

<button className="group relative w-full rounded-xl p-[1px] overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.98] mt-2" type="submit">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 animate-[spin_3s_linear_infinite]"></div>
<div className="relative bg-slate-950 rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 transition-all group-hover:bg-slate-900">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-amber-200 font-bold text-sm tracking-wide">SEND EIDI</span>
<iconify-icon className="text-emerald-400 text-lg group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</div>
</button>
</form>
</div>

<div className="hidden-view view-section flex-col items-center justify-center text-center space-y-6 py-10" id="view-loading">
<div className="relative">
<div className="w-24 h-24 rounded-full border-4 border-slate-800 border-t-emerald-500 animate-spin"></div>
<div className="absolute inset-0 flex items-center justify-center animate-pulse">
<iconify-icon className="text-3xl text-amber-400" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-xl font-semibold text-white">Connecting to Easypaisa</h3>
<p className="text-sm text-slate-400">Processing your Eidi transfer...</p>
</div>
</div>

<div className="hidden-view view-section flex-col items-center justify-center text-center w-full" id="view-success">
<div className="animate-pop w-full">
<div className="glass-panel rounded-3xl p-8 w-full flex flex-col items-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-amber-500/10 pointer-events-none"></div>
<div className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] mb-6 animate-float">
<iconify-icon className="text-white text-4xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h2 className="text-4xl font-arabic text-amber-400 mb-2 drop-shadow-md">عيد مبارك</h2>
<h3 className="text-xl font-semibold text-white mb-1">Eidi Sent Successfully!</h3>
<p className="text-slate-400 text-sm mb-8 max-w-[200px] leading-relaxed">May your sacrifice be accepted and your life be filled with joy.</p>

<div className="flex items-center gap-4 mb-8 text-3xl">
<span className="animate-bounce" style={{animationDelay: '0.1s'}}>🐐</span>
<span className="animate-bounce" style={{animationDelay: '0.3s'}}>🐑</span>
<span className="animate-bounce" style={{animationDelay: '0.5s'}}>🐐</span>
</div>
<button className="w-full bg-slate-800/50 border border-slate-700 text-slate-300 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" onclick="resetForm()">
<iconify-icon className="text-lg" icon="solar:restart-circle-linear"></iconify-icon>
                        Send Another Eidi
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
