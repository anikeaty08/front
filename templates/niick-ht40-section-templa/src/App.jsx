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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = false;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
} else {
entry.target.classList.remove("animate");
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        const flashlightSlide = document.getElementById('flashlight-slide');
        flashlightSlide.addEventListener('mousemove', (e) => {
            const rect = flashlightSlide.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            flashlightSlide.style.setProperty('--x', `${x}px`);
            flashlightSlide.style.setProperty('--y', `${y}px`);
            
            const cards = flashlightSlide.querySelectorAll('.flashlight-card');
            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardX = e.clientX - cardRect.left;
                const cardY = e.clientY - cardRect.top;
                card.style.setProperty('--x', `${cardX}px`);
                card.style.setProperty('--y', `${cardY}px`);
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
      

<div className="vertical-lines-container">
<div className="v-line"></div>
<div className="v-line"></div>
<div className="v-line hidden md:block"></div>
<div className="v-line hidden lg:block"></div>
<div className="v-line"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-normal pointer-events-none">
<div className="flex items-center gap-2 pointer-events-auto backdrop-blur-md bg-zinc-950/50 pr-4 py-1 rounded-full border border-zinc-800/50">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
<iconify-icon className="text-black" icon="solar:gamepad-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-white font-manrope font-bold text-lg tracking-tight">@NiiCk HT40</span>
</div>
<a className="pointer-events-auto text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800/50 backdrop-blur-md" href="#">
            Keep anything.!
        </a>
</nav>

<main className="slide-container no-scrollbar">

<section className="slide-section">
<div className="ig-card group justify-center items-center" data-slide="1">

<div className="flex-1 flex flex-col justify-center items-center p-8 text-center relative z-10 w-full max-w-2xl mx-auto">

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] w-24 h-24 mb-12 rounded-[2rem] bg-gradient-orange flex items-center justify-center shadow-orange-glow">
<iconify-icon className="text-zinc-900" icon="solar:crown-bold-duotone" width="48"></iconify-icon>
</div>
<h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-6xl md:text-7xl text-white mb-8 font-manrope font-semibold tracking-tighter">
                        @NiiCk HT40
                        <span className="text-zinc-600 block md:inline">Gameplay</span>
</h1>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-lg text-zinc-400 max-w-[320px] leading-relaxed font-sans">
                        Professional MLBB Player.<br/>Mastering the meta.
                    </p>

<div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="z-[-1] bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute bottom-12 w-full text-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-500 border border-zinc-800 bg-zinc-900/50 backdrop-blur-md px-5 py-2.5 rounded-full uppercase">
<iconify-icon icon="solar:cursor-bold-duotone" width="14"></iconify-icon>
<span className="font-sans">Swipe to watch</span>
</div>
</div>
</div>
</section>

<section className="slide-section">
<div className="ig-card p-4 md:p-20" data-slide="2">
<div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
<div className="mb-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] relative z-20">
<h2 className="text-4xl text-white mb-3 font-manrope font-semibold tracking-tighter">Lane Control</h2>
<p className="text-base text-zinc-500 font-medium">Strategic map dominance.</p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] w-full aspect-video bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden relative flex gap-1 p-1 custom-shadow z-20">

<div className="flex-1 bg-zinc-900/80 rounded-2xl animate-clip-col delay-100 h-full relative overflow-hidden group border border-zinc-800/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90"></div>
<div className="absolute bottom-6 left-6 right-6 h-1 bg-orange-600 rounded-full"></div>
</div>

<div className="flex-1 bg-zinc-900/80 rounded-2xl animate-clip-col delay-200 h-full relative overflow-hidden border border-zinc-800/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90"></div>
<div className="absolute bottom-6 left-6 right-6 h-1 bg-orange-500 rounded-full"></div>
</div>

<div className="flex-1 bg-zinc-900/80 rounded-2xl animate-clip-col delay-300 h-full relative overflow-hidden border border-zinc-800/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90"></div>
<div className="absolute bottom-6 left-6 right-6 h-1 bg-orange-400 rounded-full"></div>
</div>
</div>
<div className="mt-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="inline-flex items-center gap-3 px-4 py-2 glass-panel rounded-full relative z-20">
<iconify-icon className="text-orange-500" icon="solar:code-bold-duotone" width="16"></iconify-icon>
<code className="text-xs text-zinc-400 font-mono">clip-path: inset(100% 0 0 0);</code>
</div>
</div>
</div>
</div>
</section>

<section className="slide-section">
<div className="ig-card justify-center items-center" data-slide="3">
<div className="flex flex-col justify-center items-center p-8 relative max-w-lg mx-auto text-center z-20">
<div className="mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-4xl text-white mb-3 font-manrope font-semibold tracking-tighter">Ranked Mode</h2>
<p className="text-base text-zinc-500 font-medium">Focus on the objective.</p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] scale-150 relative group cursor-pointer">
<div className="relative bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 px-10 py-4 rounded-full overflow-hidden font-medium tracking-tight flex items-center gap-3 shadow-2xl">
<span>Start Match</span>
<iconify-icon className="text-orange-400" icon="solar:arrow-right-bold-duotone" width="16"></iconify-icon>

<div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
<div className="border-beam-light"></div>
</div>
</div>

<div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
</div>
</section>

<section className="slide-section">
<div className="ig-card justify-center items-center p-8" data-slide="4">
<div className="flex flex-col justify-center max-w-2xl w-full relative z-20">
<div className="mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-xl font-medium tracking-tight text-zinc-500 mb-2">Technique</h2>
<p className="text-xs uppercase tracking-wider text-orange-500 font-semibold">Macro &amp; Micro</p>
</div>

<div className="text-6xl md:text-8xl leading-[1.05] font-semibold tracking-tighter text-white animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="char-clip block">
<span className="font-manrope block" style={{animationDelay: '100ms'}}>Draft.</span>
</div>
<div className="char-clip block">
<span className="font-manrope block" style={{animationDelay: '200ms'}}>Build.</span>
</div>
<div className="char-clip block">
<span className="text-gradient-orange font-manrope block" style={{animationDelay: '300ms'}}>Victory.</span>
</div>
</div>
<div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]"></div>
</div>
</div>
</section>

<section className="slide-section">
<div className="ig-card justify-center items-center" data-slide="5">
<div className="flex flex-col justify-center items-center w-full relative z-20">
<div className="mb-16 text-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-4xl text-white mb-2 font-manrope font-semibold tracking-tighter">Sponsors &amp; Tech</h2>
<p className="text-base text-zinc-500 font-medium">Powered by industry leaders.</p>
</div>

<div className="w-full relative py-20 border-y border-zinc-800 bg-zinc-950/80 backdrop-blur-sm mask-fade-sides animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="flex w-max animate-marquee gap-24 items-center">

<div className="flex gap-24 items-center text-zinc-600 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="cib:apple" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:aws" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:nvidia" width="45"></iconify-icon>
<iconify-icon icon="simple-icons:discord" width="40"></iconify-icon>
</div>

<div className="flex gap-24 items-center text-zinc-600 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="cib:apple" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:aws" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:nvidia" width="45"></iconify-icon>
<iconify-icon icon="simple-icons:discord" width="40"></iconify-icon>
</div>

<div className="flex gap-24 items-center text-zinc-600 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="cib:apple" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:aws" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:nvidia" width="45"></iconify-icon>
<iconify-icon icon="simple-icons:discord" width="40"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide-section">
<div className="ig-card items-center justify-center p-8" data-slide="6">
<div className="w-full text-center mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] relative z-20">
<h2 className="text-4xl text-white mb-2 font-manrope font-semibold tracking-tighter">Loadout Switch</h2>
<p className="text-base text-zinc-500 font-medium">Adaptive equipment strategies.</p>
</div>

<div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] z-20">

<div className="switch-card-2 absolute w-80 h-48 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center opacity-40">
<div className="w-full h-full p-6 flex flex-col gap-4 opacity-30">
<div className="w-10 h-10 rounded-full bg-zinc-700"></div>
<div className="w-3/4 h-3 rounded bg-zinc-700"></div>
</div>
</div>

<div className="switch-card-1 absolute w-80 h-48 bg-gradient-orange rounded-2xl shadow-orange-glow flex flex-col p-6 text-zinc-900 relative overflow-hidden custom-shadow">
<div className="absolute inset-0 bg-white/10"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-zinc-900 border border-white/20">
<iconify-icon icon="solar:wallet-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono opacity-60 font-bold uppercase tracking-widest">Diamonds</span>
</div>
<div className="mt-auto relative z-10">
<div className="text-2xl font-bold tracking-tight">5,000</div>
<div className="text-xs opacity-70 mt-1 font-medium">Current Balance</div>
</div>
</div>
</div>

<div className="mt-16 flex gap-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] relative z-20">
<button className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all bg-zinc-900/80 backdrop-blur-sm">
<iconify-icon icon="solar:arrow-left-bold-duotone" width="24"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all bg-zinc-900/80 backdrop-blur-sm">
<iconify-icon icon="solar:arrow-right-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="slide-section">
<div className="ig-card flashlight-bg items-center justify-center" data-slide="7" id="flashlight-slide">
<div className="flex flex-col items-center max-w-5xl w-full p-8 relative z-20">
<div className="mb-16 text-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-4xl text-white mb-2 font-manrope font-semibold tracking-tighter">Performance</h2>
<p className="text-base text-zinc-500 font-medium">Stats that matter.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">

<div className="flashlight-card relative h-48 bg-zinc-950 rounded-3xl border border-zinc-800 p-8 overflow-hidden group custom-shadow">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-orange-500">
<iconify-icon icon="solar:bolt-bold-duotone" width="22"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-200 font-medium">Speed</h3>
<p className="text-xs text-zinc-500 mt-2 uppercase tracking-wider font-semibold">120 FPS</p>
</div>

<div className="flashlight-card relative h-48 bg-zinc-950 rounded-3xl border border-zinc-800 p-8 overflow-hidden group custom-shadow">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-orange-500">
<iconify-icon icon="solar:shield-check-bold-duotone" width="22"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-200 font-medium">Defense</h3>
<p className="text-xs text-zinc-500 mt-2 uppercase tracking-wider font-semibold">Tank Build</p>
</div>

<div className="flashlight-card relative h-48 bg-zinc-950 rounded-3xl border border-zinc-800 p-8 overflow-hidden group custom-shadow">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-orange-500">
<iconify-icon icon="solar:box-bold-duotone" width="22"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-200 font-medium">Items</h3>
<p className="text-xs text-zinc-500 mt-2 uppercase tracking-wider font-semibold">Full Slots</p>
</div>

<div className="flashlight-card relative h-48 bg-zinc-950 rounded-3xl border border-zinc-800 p-8 overflow-hidden group custom-shadow">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-orange-500">
<iconify-icon icon="solar:terminal-bold-duotone" width="22"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-200 font-medium">Winrate</h3>
<p className="text-xs text-zinc-500 mt-2 uppercase tracking-wider font-semibold">75.4%</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide-section">
<div className="ig-card items-center justify-center" data-slide="8">

<div className="absolute inset-0 opacity-10 flex gap-12 justify-center pointer-events-none">
<div className="flex flex-col gap-12 animate-marquee" style={{animationDirection: 'reverse', animationDuration: '40s'}}>
<div className="w-48 h-64 border border-zinc-500 bg-zinc-900/50 rounded-2xl"></div>
<div className="w-48 h-64 border border-zinc-500 bg-zinc-900/50 rounded-2xl"></div>
<div className="w-48 h-64 border border-zinc-500 bg-zinc-900/50 rounded-2xl"></div>
</div>
<div className="flex flex-col gap-12 animate-marquee" style={{animationDuration: '35s'}}>
<div className="w-48 h-64 border border-zinc-500 bg-zinc-900/50 rounded-2xl"></div>
<div className="w-48 h-64 border border-zinc-500 bg-zinc-900/50 rounded-2xl"></div>
<div className="w-48 h-64 border border-zinc-500 bg-zinc-900/50 rounded-2xl"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent"></div>
<div className="relative z-10 text-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="w-28 h-28 bg-zinc-900 rounded-[2.5rem] mx-auto mb-10 flex items-center justify-center border border-zinc-800 shadow-2xl custom-shadow">
<iconify-icon className="text-orange-500" icon="solar:bookmark-bold-duotone" width="48"></iconify-icon>
</div>
<h2 className="text-5xl md:text-6xl text-white mb-4 font-manrope font-semibold tracking-tighter">@NiiCk HT40</h2>
<p className="text-base text-zinc-400 mb-12 font-sans">Professional MLBB Player</p>
<button className="bg-gradient-orange shadow-orange-glow text-zinc-900 px-10 py-4 rounded-full text-sm font-bold hover:-translate-y-0.5 transition-transform flex items-center gap-3 mx-auto">
<span className="font-sans">Keep anything.!</span>
<iconify-icon icon="solar:check-circle-bold-duotone" width="20"></iconify-icon>
</button>
</div>
</div>
</section>
</main>


    </>
  );
}
