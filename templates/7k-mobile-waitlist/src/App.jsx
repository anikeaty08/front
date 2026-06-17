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



        // INSTRUCTIONS FOR GOOGLE SHEET SETUP:
        // 1. Create a new Google Sheet
        // 2. Go to Extensions > Apps Script
        // 3. Paste the code provided in the text response below into Code.gs
        // 4. Click Deploy > New Deployment > Type: Web App
        // 5. Set 'Execute as: Me' and 'Who has access: Anyone'
        // 6. Copy the URL and paste it below where it says 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
        
        const scriptURL = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
        const form = document.forms['submit-to-google-sheet']
        const btn = document.getElementById('submit-btn')
        const btnText = document.getElementById('btn-text')
        const btnIcon = document.getElementById('btn-icon')
        const btnLoading = document.getElementById('btn-loading')
        const successMessage = document.getElementById('success-message')

        form.addEventListener('submit', e => {
            e.preventDefault()
            
            // Loading State
            btn.disabled = true
            btnText.textContent = 'Joining...'
            btnIcon.style.display = 'none'
            btnLoading.classList.remove('hidden')

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    // Success State
                    form.classList.add('hidden')
                    successMessage.classList.remove('hidden')
                    successMessage.classList.add('flex')
                })
                .catch(error => {
                    console.error('Error!', error.message)
                    btnText.textContent = 'Error. Try again.'
                    btn.disabled = false
                    btnLoading.classList.add('hidden')
                })
        })
    
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">

<img alt="7K Logo" className="w-9 h-9 object-contain" src="https://docs.7k.ag/~gitbook/image?url=https%3A%2F%2F2380703610-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Fy7rOL9uvLN542fZi4a7q%252Ficon%252FfnMPhcGSuhqABAZQRGCL%252FSINGLE%2520%282%29.svg%3Falt%3Dmedia%26token%3D72b20322-765b-402d-9192-298f5d49caf0&amp;width=32&amp;dpr=4&amp;quality=100&amp;sign=ac1a645d&amp;sv=2"/>
<span className="font-semibold text-white tracking-tight text-xl">7K Mobile</span>
</div>
<div className="hidden md:flex items-center gap-10 text-base font-normal text-zinc-500">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#manifesto">Manifesto</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
</div>
<button className="text-sm font-medium bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                Get Early Access
            </button>
</div>
</nav>

<main className="relative pt-36 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
<div className="absolute inset-0 vibrant-gradient -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20 lg:gap-32 relative z-10">

<div className="flex-1 text-center lg:text-left">

<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-sm font-normal mb-10 hover:bg-blue-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Native on Sui Network
                </div>

<h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-white mb-8 leading-[1] text-shadow-xl">
<span className="text-zinc-600">Stop Browsing.</span><br/>
                    Start Using <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">DeFi</span>.
                </h1>

<p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-12 font-light leading-relaxed">
                    The first operating system built for capital efficiency. No webviews. No trackers. Just raw native speed.
                </p>


<form className="max-w-lg mx-auto lg:mx-0 flex flex-col sm:flex-row gap-2 p-2 bg-zinc-900/40 border border-white/5 rounded-full shadow-2xl focus-within:ring-1 focus-within:ring-white/10 transition-all mb-8 backdrop-blur-md relative overflow-hidden" name="submit-to-google-sheet">
<input className="flex-1 px-6 py-3.5 bg-transparent border-none outline-none text-white placeholder:text-zinc-600 text-base font-normal rounded-full" name="email" placeholder="email@address.com" required="" type="email"/>
<button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-base hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group whitespace-nowrap min-w-[160px]" id="submit-btn" type="submit">
<span id="btn-text">Join Waitlist</span>
<div className="spinner hidden" id="btn-loading"></div>
<iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" id="btn-icon" strokeWidth="1.5"></iconify-icon>
</button>
</form>

<div className="hidden max-w-lg mx-auto lg:mx-0 items-center gap-3 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-6 py-4 rounded-2xl mb-14" id="success-message">
<iconify-icon className="text-xl" icon="lucide:check-circle"></iconify-icon>
<span className="text-sm font-medium">You're on the list! We'll be in touch soon.</span>
</div>

<div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs font-semibold text-zinc-500 uppercase tracking-widest mt-6 lg:mt-0">
<div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-base text-yellow-400" icon="lucide:zap" strokeWidth="1.5"></iconify-icon>
<span>60 FPS Native</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-base text-emerald-400" icon="lucide:shield-check" strokeWidth="1.5"></iconify-icon>
<span>Audited</span>
</div>
</div>
</div>

<div className="relative flex-none w-full max-w-[380px] lg:max-w-[420px] perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[90%] bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>

<div className="relative bg-[#111] rounded-[3.5rem] p-3 shadow-2xl ring-1 ring-white/10 rotate-0 hover:rotate-1 transition-transform duration-700 ease-out">

<div className="bg-white rounded-[3rem] overflow-hidden h-[780px] relative flex flex-col font-sans shadow-inner selection:bg-blue-100 selection:text-blue-900">

<div className="h-14 w-full flex justify-between items-end px-8 pb-3 z-20">
<span className="text-[15px] font-semibold text-black tracking-tight">9:41</span>
<div className="flex items-center gap-2 text-black">
<iconify-icon icon="lucide:signal" strokeWidth="2" width="16"></iconify-icon>
<iconify-icon icon="lucide:wifi" strokeWidth="2" width="16"></iconify-icon>
<div className="w-6 h-3 border border-black/30 rounded-[4px] relative">
<div className="absolute inset-0.5 bg-black rounded-[2px]"></div>
</div>
</div>
</div>

<div className="px-7 pt-6 pb-2 flex justify-between items-center z-10">
<span className="font-semibold text-2xl text-black tracking-tight">Your Wallet</span>
<div className="flex items-center gap-5 text-zinc-900">
<button className="hover:bg-zinc-100 p-2 -mr-2 rounded-full transition-colors"><iconify-icon icon="lucide:scan-line" strokeWidth="1.5" width="26"></iconify-icon></button>
<button className="hover:bg-zinc-100 p-2 -mr-2 rounded-full transition-colors"><iconify-icon icon="lucide:menu" strokeWidth="1.5" width="26"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-28">

<div className="mx-7 mt-6 p-4 bg-zinc-5 border border-zinc-100 rounded-[24px] flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-indigo-50 overflow-hidden border border-white shadow-sm ring-1 ring-black/5">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex flex-col">
<div className="text-base font-semibold text-zinc-900">7K User 0001</div>
<div className="text-xs text-zinc-400 font-mono mt-0.5">432x...3412</div>
</div>
</div>
<button className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-black transition-colors bg-white rounded-full border border-zinc-100 shadow-sm">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="flex gap-3 px-7 mt-7">
<button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-black/10 active:scale-95 transition-transform">
<iconify-icon icon="lucide:edit-2" strokeWidth="1.5" width="16"></iconify-icon>
                                    Edit
                                </button>
<button className="flex items-center gap-2 bg-zinc-100 text-zinc-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors active:scale-95">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="16"></iconify-icon>
                                    Explorer
                                </button>
<button className="flex items-center gap-2 bg-zinc-100 text-zinc-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors active:scale-95">
<iconify-icon icon="lucide:copy" strokeWidth="1.5" width="16"></iconify-icon>
                                    Copy
                                </button>
</div>

<div className="px-7 mt-10">
<div className="flex items-center gap-2.5 mb-2">
<span className="text-sm font-medium text-zinc-400">Total Balance</span>
<span className="bg-emerald-100/60 text-emerald-700 text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-emerald-200">
<iconify-icon icon="lucide:trending-up" strokeWidth="2" width="12"></iconify-icon> 43%
                                    </span>
</div>
<div className="text-[46px] font-semibold text-zinc-900 tracking-tighter leading-none">
                                    $9,321<span className="text-zinc-300">.32</span>
</div>
</div>

<div className="px-7 mt-10">
<div className="flex items-center justify-between mb-5">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Assets</h3>
<button className="text-xs font-medium text-zinc-900 hover:text-blue-600 transition-colors">View All</button>
</div>
<div className="space-y-5">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg shadow-purple-500/10 group-hover:scale-105 transition-transform">
<iconify-icon icon="cryptocurrency-color:sol" width="22"></iconify-icon>
</div>
<div>
<div className="text-base font-semibold text-zinc-900">Solana</div>
<div className="text-xs font-normal text-zinc-400 mt-0.5">31.21 SOL</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-semibold text-zinc-900">$15,431</div>
<div className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-auto w-fit mt-0.5">+1.56%</div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-[#3781e6] text-white flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform">
<iconify-icon icon="cryptocurrency:sui" width="22"></iconify-icon>
</div>
<div>
<div className="text-base font-semibold text-zinc-900">SUI</div>
<div className="text-xs font-normal text-zinc-400 mt-0.5">3,031.21 SUI</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-semibold text-zinc-900">$15,431</div>
<div className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-auto w-fit mt-0.5">+1.56%</div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-[#F7931A] text-white flex items-center justify-center shadow-lg shadow-orange-500/10 group-hover:scale-105 transition-transform">
<iconify-icon icon="cryptocurrency-color:btc" width="24"></iconify-icon>
</div>
<div>
<div className="text-base font-semibold text-zinc-900">Bitcoin</div>
<div className="text-xs font-normal text-zinc-400 mt-0.5">1.21 BTC</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-semibold text-zinc-900">$45,431</div>
<div className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-auto w-fit mt-0.5">+0.56%</div>
</div>
</div>

<div className="pt-6 flex items-center justify-between mb-3">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Strategies</h3>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-bold italic text-xs">7K</div>
<div>
<div className="text-base font-semibold text-zinc-900">LP-Pro</div>
<div className="text-xs font-normal text-zinc-400 mt-0.5">31.21 USDC</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-semibold text-zinc-900">$1,431</div>
<div className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-auto w-fit mt-0.5">+$1,341</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-[#1A1A1A] rounded-[24px] h-[76px] flex items-center justify-between px-7 shadow-2xl shadow-black/20 z-20 ring-1 ring-white/5">
<button className="flex flex-col items-center gap-1 text-white">
<iconify-icon className="text-2xl" icon="solar:wallet-bold"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:chart-2-linear"></iconify-icon>
</button>

<button className="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-500/40 -mt-8 ring-4 ring-white hover:scale-105 transition-transform">
<iconify-icon icon="lucide:plus" strokeWidth="2"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:compass-linear"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10"></div>
</div>
</div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32" id="features">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">A dedicated OS for <span className="text-indigo-400">Capital Markets</span>.</h2>
<p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                More than a wallet, 7K Mobile is a Super App designed to be the only DeFi headquarter you need.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 p-10 rounded-[32px] glass-card relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
<div className="relative z-10">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Native Code. Zero Lag.</h3>
<p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-md font-light">
                        Built in Rust and Swift. Experience 60fps animations and instant transaction signing without the bloat of web technologies.
                    </p>
</div>
<div className="absolute right-0 bottom-0 w-72 h-72 bg-blue-600/15 rounded-full blur-[90px] group-hover:bg-blue-600/25 transition-all duration-500"></div>
</div>

<div className="p-10 rounded-[32px] glass-card relative overflow-hidden group hover:border-rose-500/30 transition-all duration-500">
<div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-8 text-rose-500 border border-rose-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Burn to Earn</h3>
<p className="text-zinc-400 text-base font-light leading-relaxed">
                    Burn spam tokens effortlessly. Clean your OS and reclaim SUI storage fees instantly.
                </p>
<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-rose-600/15 rounded-full blur-[70px] group-hover:bg-rose-600/25 transition-all"></div>
</div>

<div className="p-10 rounded-[32px] glass-card relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
<div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-500 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:fuel" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Gasless Start</h3>
<p className="text-zinc-400 text-base font-light leading-relaxed">
                    First 5 transactions are on us. Onboard without needing a faucet or centralized exchange.
                </p>
<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-emerald-600/15 rounded-full blur-[70px] group-hover:bg-emerald-600/25 transition-all"></div>
</div>

<div className="md:col-span-2 p-10 rounded-[32px] bg-white text-black relative overflow-hidden group">
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div>
<div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-8 border border-black/10 text-indigo-600">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-black mb-3 tracking-tight">Unified Portfolio Dashboard</h3>
<p className="text-zinc-600 text-base font-normal leading-relaxed max-w-md">
                            All-in-one dashboard for Lending, LPs, and Swaps. Your eyes and capital in one focused view.
                        </p>
</div>

<div className="flex items-end gap-3 h-24">
<div className="w-5 bg-zinc-200 h-10 rounded-t-md group-hover:h-14 transition-all duration-500"></div>
<div className="w-5 bg-indigo-200 h-14 rounded-t-md group-hover:h-20 transition-all duration-500 delay-75"></div>
<div className="w-5 bg-zinc-300 h-12 rounded-t-md group-hover:h-16 transition-all duration-500 delay-100"></div>
<div className="w-5 bg-indigo-600 h-20 rounded-t-md group-hover:h-24 transition-all duration-500 delay-150 shadow-xl shadow-indigo-500/30"></div>
<div className="w-5 bg-zinc-300 h-16 rounded-t-md group-hover:h-12 transition-all duration-500 delay-200"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-center">
<div className="group">
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">~0.4s</div>
<div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Latency</div>
</div>
<div className="group">
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-purple-400 transition-colors">Native</div>
<div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Architecture</div>
</div>
<div className="group">
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-emerald-400 transition-colors">Zero</div>
<div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Trackers</div>
</div>
<div className="group">
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-indigo-400 transition-colors">100%</div>
<div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Self-Custodial</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-white/5 py-16 mt-24">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
<div className="flex items-center gap-3">
<img alt="7K Logo" className="w-7 h-7 object-contain" src="https://docs.7k.ag/~gitbook/image?url=https%3A%2F%2F2380703610-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Fy7rOL9uvLN542fZi4a7q%252Ficon%252FfnMPhcGSuhqABAZQRGCL%252FSINGLE%2520%282%29.svg%3Falt%3Dmedia%26token%3D72b20322-765b-402d-9192-298f5d49caf0&amp;width=32&amp;dpr=4&amp;quality=100&amp;sign=ac1a645d&amp;sv=2"/>
<span className="text-base font-medium text-white">7K Mobile</span>
</div>
<div className="flex items-center gap-10 text-base text-zinc-500 font-normal">
<a className="hover:text-blue-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-indigo-400 transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
</div>
<div className="text-sm text-zinc-600 font-normal">
                © 2025 7K Protocol. Stop Browsing.
            </div>
</div>
</footer>



    </>
  );
}
