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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Countdown Timer Logic
        let timeInSecs = 14 * 60 + 59;
        
        function updateTimer() {
            if (timeInSecs <= 0) return; // Stop at 0
            
            timeInSecs--;
            let m = Math.floor(timeInSecs / 60);
            let s = timeInSecs % 60;
            
            document.getElementById('mins').innerText = m < 10 ? '0' + m : m;
            document.getElementById('secs').innerText = s < 10 ? '0' + s : s;
        }
        
        setInterval(updateTimer, 1000);

        // Content Locker Modal Logic
        const modal = document.getElementById('locker-modal');
        const modalContent = document.getElementById('locker-content');

        function openLocker() {
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
            
            // Trigger reflow to ensure transitions work
            void modal.offsetWidth; 
            
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }

        function closeLocker() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.classList.remove('no-scroll');
            }, 300); // Matches duration-300
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
      

<header className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white font-medium tracking-tighter text-lg">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span>RWRD<span className="text-zinc-600">SYS</span></span>
</div>
<nav className="flex items-center gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#">How it works</a>
<a className="hover:text-white transition-colors duration-200" href="#">Support</a>
</nav>
</div>
</header>
<main className="flex-grow pt-32 pb-24 px-6 flex flex-col items-center">

<div className="max-w-3xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Live Offers Available Now
            </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                Unlock Premium Shopping Rewards Today.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Participate in our exclusive partner programs and claim high-value rewards. Verification takes less than 2 minutes.
            </p>

<div className="flex flex-col items-center justify-center gap-3 mb-8">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Offers Expire In</p>
<div className="flex items-center gap-4 text-white">
<div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-w-[4rem]">
<span className="text-2xl font-semibold tracking-tight" id="mins">14</span>
<span className="text-xs text-zinc-500 mt-1">MIN</span>
</div>
<span className="text-xl font-medium text-zinc-600">:</span>
<div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-w-[4rem]">
<span className="text-2xl font-semibold tracking-tight" id="secs">59</span>
<span className="text-xs text-zinc-500 mt-1">SEC</span>
</div>
</div>
</div>
</div>

<div className="w-full max-w-md mx-auto mb-24 relative z-10" id="offer-section">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
<div className="animate-float relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
<div className="relative h-48 w-full bg-zinc-800">
<img alt="Retail Store" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
                        Verified
                    </div>
</div>
<div className="p-6 md:p-8 flex flex-col items-center text-center">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Get $750 Costco Reward</h2>
<p className="text-sm text-zinc-400 mb-8">Complete a quick survey and sponsor deals to qualify for your reward card.</p>
<button className="w-full group relative inline-flex items-center justify-center gap-2 bg-white text-black font-medium text-sm px-6 py-4 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]" onclick="openLocker()">
<span>Claim Reward Now</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-xs text-zinc-600 mt-4 flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        Secure 256-bit encryption
                    </p>
</div>
</div>
</div>

<div className="w-full max-w-4xl mx-auto border-t border-white/5 pt-12 mb-24">
<p className="text-center text-xs font-medium text-zinc-600 tracking-widest uppercase mb-8">Trusted By Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-semibold tracking-tighter text-white">GLOBE<span className="text-zinc-500">NET</span></span>
<span className="text-xl font-semibold tracking-tighter text-white">VERTEX</span>
</div>
</div>

<div className="w-full max-w-5xl mx-auto">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight text-center mb-12">Recent Activity</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
<div className="flex text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Process was incredibly smooth. Took about 10 minutes to complete the deals and received my digital card details shortly after."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs text-white font-medium">JD</div>
<div>
<p className="text-sm font-medium text-white">James D.</p>
<p className="text-xs text-zinc-500">Verified User</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
<div className="flex text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"I was skeptical at first, but following the instructions exactly worked. Used the reward for my monthly groceries. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs text-white font-medium">SM</div>
<div>
<p className="text-sm font-medium text-white">Sarah M.</p>
<p className="text-xs text-zinc-500">Verified User</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
<div className="flex text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Legit program. You do have to complete specific partner offers to unlock the final reward, but the payout is exactly as advertised."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs text-white font-medium">RK</div>
<div>
<p className="text-sm font-medium text-white">Robert K.</p>
<p className="text-xs text-zinc-500">Verified User</p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 mt-auto bg-[#0a0a0a] py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2023 Reward System. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="locker-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl shadow-black overflow-hidden transform scale-95 transition-transform duration-300" id="locker-content">
<div className="p-6 md:p-8 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Verification Required</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                        To prevent abuse and ensure genuine users receive the <strong className="text-white font-medium">$750 Costco Reward</strong>, we require a brief human verification step.
                    </p>
<div className="w-full space-y-3 mb-8">
<div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-lg text-left">
<iconify-icon className="text-green-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-300">Click the verify button below</span>
</div>
<div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-lg text-left">
<iconify-icon className="text-zinc-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-500">Complete standard sponsor deals</span>
</div>
<div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-lg text-left">
<iconify-icon className="text-zinc-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-500">Receive your reward access</span>
</div>
</div>

<a className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-medium text-sm px-6 py-4 rounded-xl hover:bg-zinc-200 transition-colors" href="https://www.af9m8trk.com/4AQ123MB/NB9123XG/">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Verify &amp; Unlock Reward
                    </a>
<button className="mt-6 text-xs text-zinc-500 hover:text-white transition-colors underline-offset-4 hover:underline" onclick="closeLocker()">
                        Cancel and return
                    </button>
</div>

<div className="w-full h-1 bg-white/5">
<div className="h-full bg-blue-500 w-1/3 animate-pulse rounded-r-full"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
