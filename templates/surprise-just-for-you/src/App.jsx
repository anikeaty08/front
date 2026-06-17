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



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
850: '#151f32', // Darker slate for high contrast text
}
},
animation: {
'spin-slow': 'spin 3s linear infinite',
}
}
}
}



        function handleAccept() {
            // Trigger confetti
            createConfetti();
            
            // Switch views
            const proposalView = document.getElementById('proposal-view');
            const successView = document.getElementById('success-view');
            
            proposalView.style.opacity = '0';
            proposalView.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                proposalView.classList.add('hidden');
                successView.classList.remove('hidden');
            }, 300);
        }

        let dodgeCount = 0;
        function dodgeNo() {
            const btn = document.getElementById('noBtn');
            const phrases = ["Are you sure?", "Really?", "Think again", "Please?", "Okay, Yes!"];
            
            if (window.innerWidth > 640) { // Only dodge on desktop to avoid mobile frustration
                const x = (Math.random() - 0.5) * 150;
                const y = (Math.random() - 0.5) * 150;
                btn.style.transform = `translate(${x}px, ${y}px)`;
            }
            
            if (dodgeCount < phrases.length) {
                btn.innerText = phrases[dodgeCount];
                dodgeCount++;
            } else {
                btn.innerText = "Yes (Fine)";
                // Reset transform to make it clickable eventually
                btn.style.transform = 'translate(0, 0)';
                btn.onclick = handleAccept;
            }
        }

        function createConfetti() {
            const colors = ['#e11d48', '#ec4899', '#f43f5e', '#fb7185', '#fda4af'];
            
            for (let i = 0; i < 50; i++) {
                const conf = document.createElement('div');
                conf.classList.add('confetti');
                
                // Random properties
                const bg = colors[Math.floor(Math.random() * colors.length)];
                const left = Math.random() * 100 + 'vw';
                const animDuration = Math.random() * 3 + 2 + 's';
                const size = Math.random() * 8 + 4 + 'px';
                
                conf.style.backgroundColor = bg;
                conf.style.left = left;
                conf.style.top = '-10px';
                conf.style.width = size;
                conf.style.height = size;
                conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                conf.style.animationDuration = animDuration;
                
                document.body.appendChild(conf);
                
                // Cleanup
                setTimeout(() => {
                    conf.remove();
                }, 5000);
            }
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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
</div>

<main className="md:py-20 flex flex-col min-h-screen max-w-xl z-10 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative items-center justify-center">

<div className="mb-12 flex items-center gap-2 opacity-80">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-200">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-slate-900 text-sm font-geist-mono">Priority Message</span>
</div>
<div className="transition-all duration-700 ease-in-out w-full" id="proposal-view">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-8 mx-auto self-center">
<iconify-icon className="" height="14" icon="solar:clock-circle-linear" strokeWidth="1.5" style={{color: 'rgb(194, 65, 12)'}} width="14"></iconify-icon>
</div>

<div className="text-center mb-10">
<h1 className="text-4xl md:text-5xl text-slate-900 tracking-tighter mb-4 leading-[1.1] font-geist-mono font-semibold">
                    I know, I missed the date.
                </h1>
<p className="leading-relaxed text-lg text-slate-500 font-geist-mono max-w-md mr-auto ml-auto">"Time slipped away, but my feelings never did. I was foolish to wait this long, but I couldn't let another moment pass without asking..."</p>
</div>

<div className="glass-card rounded-2xl p-6 mb-8 shadow-sm">
<div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider font-geist-mono">Tracking History</span>
<iconify-icon className="text-slate-400" icon="solar:box-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="space-y-6 relative">

<div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-200 z-0"></div>

<div className="relative z-10 flex gap-4 opacity-50">
<div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-400" icon="solar:calendar-date-linear" width="12"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-700 font-geist-mono">Feb 14 - Valentine's Day</p>
<p className="text-xs text-slate-400 font-geist-mono">Scheduled delivery missed (I'm sorry)</p>
</div>
</div>

<div className="relative z-10 flex gap-4">
<div className="w-6 h-6 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
</div>
<div className="">
<p className="text-sm font-medium text-slate-900 font-geist-mono">Today - The Important Part</p>
<p className="text-xs text-slate-500 font-geist-mono">Asking you anyway because I love you.</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-1 shadow-xl shadow-rose-100/50 transform transition-all hover:scale-[1.01] duration-500">
<div className="bg-gradient-to-b from-white to-slate-50 rounded-xl p-8 text-center border border-slate-100">
<div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:heart-shine-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight font-geist-mono mb-2">Will you be my Valentine?</h2>
<p className="text-sm text-slate-500 font-geist-mono mb-8">Offer valid forever. Includes unlimited hugs and an apology dinner when i see you.</p>
<div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
<button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" onclick="handleAccept()">
<span className="font-geist-mono">Yes, obviously</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none" id="noBtn" onclick="handleAccept()" onmouseover="dodgeNo()">
<span className="font-geist-mono">No</span>
</button>
</div>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-8 font-geist-mono">
                By clicking "Yes", you agree to forgive me for being late.
            </p>
</div>

<div className="hidden w-full text-center animate-in fade-in zoom-in duration-500" id="success-view">
<div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-100">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl text-slate-900 tracking-tighter mb-6 font-geist-mono font-semibold">
                It's a date! ❤️
            </h1>
<p className="text-lg text-slate-500 mb-10 max-w-md mx-auto font-geist-mono">
                I promise to make up for the delay. Check your messages for details on dinner.
            </p>
<div className="glass-card rounded-xl p-6 max-w-sm mx-auto border-l-4 border-l-green-500 bg-white shadow-lg">
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-slate-400" icon="solar:ticket-sale-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 font-geist-mono">Official Valentine Ticket</p>
<p className="text-xs text-slate-500 mt-1 font-geist-mono">Status: Redeemed</p>
<p className="text-xs text-slate-500 font-geist-mono">Holder: The most beautiful girl</p>
</div>
</div>
</div>
<button className="mt-12 text-sm text-slate-400 hover:text-slate-600 transition-colors underline underline-offset-4 font-geist-mono" onclick="location.reload()">
                Replay proposal
            </button>
</div>
</main>
<footer className="fixed bottom-6 w-full text-center pointer-events-none">
<p className="text-[10px] text-slate-300 uppercase tracking-widest font-medium font-geist-mono">Made with ❤️ (and panic)</p>
</footer>


    </>
  );
}
