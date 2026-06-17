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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Conversion Logic
        const RATE = 91;
        const usdtInput = document.getElementById('usdt-input');
        const inrInput = document.getElementById('inr-input');

        function formatCurrency(val) {
            return new Intl.NumberFormat('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(val);
        }

        usdtInput.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val)) {
                inrInput.value = formatCurrency(val * RATE);
            } else {
                inrInput.value = "0.00";
            }
        });

        // Mouse Parallax Logic
        document.addEventListener('mousemove', (e) => {
            const items = document.querySelectorAll('.parallax-item');
            const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
            const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

            items.forEach(item => {
                const speed = parseFloat(item.getAttribute('data-speed'));
                const xOffset = x * 100 * speed;
                const yOffset = y * 100 * speed;
                item.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(var(--rot))`;
            });
        });
    
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
      

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0" id="parallax-container">

<div className="parallax-item absolute left-[10%] top-[20%] opacity-40 blur-[2px] animate-float" data-speed="0.02" style={{'--rot': '-15deg'}}>
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-300 border-4 border-emerald-200/50 shadow-xl flex items-center justify-center transform scale-75">
<div className="absolute inset-2 rounded-full border border-emerald-400/30"></div>
<span className="text-6xl font-serif font-semibold text-emerald-600/50">T</span>
</div>
</div>

<div className="parallax-item absolute left-[85%] top-[15%] opacity-40 blur-[1px] animate-float" data-speed="-0.03" style={{'--rot': '15deg', animationDelay: '2s'}}>
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-300 border-4 border-emerald-200/50 shadow-xl flex items-center justify-center transform scale-110">
<div className="absolute inset-2 rounded-full border border-emerald-400/30"></div>
<span className="text-6xl font-serif font-semibold text-emerald-600/50">T</span>
</div>
</div>

<div className="parallax-item absolute left-[50%] top-[50%] opacity-30 blur-[4px] animate-float" data-speed="0.01" style={{'--rot': '5deg', animationDelay: '4s'}}>
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-300 border-4 border-emerald-200/50 shadow-xl flex items-center justify-center transform scale-50">
<div className="absolute inset-2 rounded-full border border-emerald-400/30"></div>
<span className="text-6xl font-serif font-semibold text-emerald-600/50">T</span>
</div>
</div>
</div>
<div className="relative z-10 container mx-auto px-4 py-4 md:py-8 lg:py-12">

<div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-2xl shadow-sky-900/5 overflow-hidden reveal">

<nav className="flex items-center justify-between px-6 py-4 lg:px-10 lg:py-6 border-b border-white/10">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="bg-emerald-900 text-white p-1.5 rounded-lg shadow-sm">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-800 group-hover:text-emerald-700 transition-colors">
                        USDT Marketplace
                    </span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-emerald-600 transition-colors" href="#">About</a>
<a className="hover:text-emerald-600 transition-colors" href="#">FAQs</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Contact Us</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block bg-lime-400 hover:bg-lime-500 text-emerald-950 font-semibold px-6 py-2.5 rounded-full transition-all active:scale-95 shadow-sm hover:shadow-md text-sm">
                        Login
                    </button>
<button className="md:hidden text-slate-700">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center px-6 pb-16 pt-8 lg:px-16 lg:py-20">

<div className="flex flex-col items-start space-y-8 reveal delay-100">

<div className="flex flex-wrap gap-4 text-emerald-800 text-sm font-semibold">
<div className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full border border-emerald-100">
<i className="text-emerald-600 w-4 h-4 fill-emerald-600/20" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>Zero Hidden Fee</span>
</div>
<div className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full border border-emerald-100">
<i className="text-emerald-600 w-4 h-4 fill-emerald-600/20" data-lucide="zap" strokeWidth="1.5"></i>
<span>Instant Conversion</span>
</div>
</div>

<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Instant Onramp <br/>
<span className="text-slate-900">Offramp,</span> <br/>
<span className="text-slate-500">secure,</span> <br/>
<span className="text-slate-500">transparent.</span>
</h1>

<p className="text-lg text-slate-600 max-w-md leading-relaxed font-medium">
                        Your one-stop marketplace to buy, sell, and manage USDT with fast transactions and zero hidden fees.
                    </p>

<button className="group flex items-center gap-3 bg-lime-400 hover:bg-lime-500 text-emerald-950 font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-lg shadow-lime-400/20 active:translate-y-0.5">
                        Log in Now
                        <div className="bg-emerald-950/10 rounded-full p-1 group-hover:bg-emerald-950/20 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</div>
</button>

<div className="pt-4 flex items-center gap-6 text-xs font-medium text-slate-400">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i> AES-256 Encryption
                        </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="refresh-ccw" strokeWidth="1.5"></i> 24/7 Support
                        </div>
</div>
</div>

<div className="flex justify-center lg:justify-end w-full reveal delay-200">
<div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto relative z-10 border border-slate-100/80">
<div className="flex flex-col items-center mb-6">
<div className="flex items-center gap-2 text-emerald-800 text-sm font-semibold mb-2">
<i className="w-3.5 h-3.5" data-lucide="lock" strokeWidth="1.5"></i>
<span>Conversion Rate</span>
</div>
<div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                                1 USDT = <span id="rate-display">91</span> INR
                            </div>
</div>
<div className="space-y-4">

<div className="relative">
<label className="text-xs font-medium text-slate-500 ml-1 mb-1 block">You Send</label>
<div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
<span className="text-lg font-bold text-slate-800 w-16">USDT</span>
<input className="w-full bg-transparent text-right text-xl font-semibold text-slate-800 outline-none placeholder:text-slate-300" id="usdt-input" placeholder="0" type="number" value="100"/>
</div>
</div>

<div className="flex justify-center -my-3 relative z-10">
<div className="bg-lime-100 text-emerald-700 p-1.5 rounded-full border-2 border-white shadow-sm">
<i className="w-4 h-4" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="relative">
<label className="text-xs font-medium text-slate-500 ml-1 mb-1 block">You Receive</label>
<div className="flex items-center bg-emerald-50/50 border border-emerald-100 rounded-xl px-4 py-3">
<span className="text-lg font-bold text-slate-800 w-16">INR</span>
<input className="w-full bg-transparent text-right text-xl font-semibold text-slate-800 outline-none" id="inr-input" readonly="" type="text" value="9,100.00"/>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500 bg-sky-50 p-2.5 rounded-lg border border-sky-100">
<i className="text-sky-500 w-3.5 h-3.5 fill-sky-500" data-lucide="zap" strokeWidth="1.5"></i>
<span>Should convert instantly</span>
</div>
<button className="w-full mt-6 bg-lime-400 hover:bg-lime-500 text-emerald-950 font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-lime-200 active:scale-[0.98] text-base">
                            Convert Now
                        </button>
</div>
</div>
</main>
</div>
</div>

<div className="w-full py-16 bg-white/50 backdrop-blur-sm border-t border-white/50 reveal delay-300">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<h3 className="text-2xl font-semibold tracking-tight text-slate-800 mb-2">
                Compatible with 100+ India’s Leading Banks
            </h3>
<p className="text-slate-500 text-lg">
                Powering seamless USDT off-ramp with India’s most trusted banking
            </p>
</div>
<div className="relative flex overflow-hidden w-full mask-gradient">

<div className="flex gap-16 items-center whitespace-nowrap py-4 animate-marquee">

<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">SBI Bank</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">HDFC Bank</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">ICICI Bank</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">Axis Bank</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">Kotak</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">IndusInd</span>
</div>

<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">SBI Bank</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">HDFC Bank</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">ICICI Bank</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">Axis Bank</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">Kotak</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">IndusInd</span>
</div>

<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center"><i className="text-slate-500 w-5 h-5" data-lucide="landmark"></i></div>
<span className="text-xl font-bold text-slate-700">SBI Bank</span>
</div>
</div>
</div>
</div>



    </>
  );
}
