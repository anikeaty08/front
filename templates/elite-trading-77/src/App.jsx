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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
gold: {
50: '#fffbf0',
100: '#fef5d6',
200: '#fceeb0',
300: '#fae07d',
400: '#f7cf4a',
500: '#f3b61f',
600: '#d79412',
700: '#b26e10',
800: '#925615',
900: '#7a4616',
950: '#462306',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
}
}
}
}
}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        const body = document.getElementById('main-body');
        const spotlightGroups = document.querySelectorAll('.spotlight-group');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            body.style.setProperty('--mouse-x', `${x}px`);
            body.style.setProperty('--mouse-y', `${y}px`);

            spotlightGroups.forEach(group => {
                const rect = group.getBoundingClientRect();
                const relX = x - rect.left;
                const relY = y - rect.top;
                
                group.style.setProperty('--mouse-x-rel', `${relX}px`);
                group.style.setProperty('--mouse-y-rel', `${relY}px`);
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
      

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(243,182,31,0.03), transparent 40%)'}}></div>

<div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-200 z-50 opacity-40"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/5 h-full">
<div className="border-r border-white/5 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-gold-500 to-transparent animate-beam" style={{animationDuration: '7s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-yellow-300 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-md shrink-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-gold-400 text-2xl" data-icon="lucide:gem"></span>
<span className="text-lg font-semibold tracking-tight text-white uppercase">Billionaire</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#signals">Signals</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#courses">Masterclass</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#lifestyle">Lifestyle</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-6">
<button className="relative rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-semibold tracking-wide text-white hover:bg-white/10 transition-all duration-300 overflow-hidden group">
<span className="relative z-10 uppercase flex items-center gap-2">
<span className="iconify" data-icon="lucide:send" style={{width: '12px'}}></span>
                        Join Telegram
                    </span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>
</nav>

<main className="relative pt-12">

<section className="flex flex-col w-full max-w-7xl z-10 mt-20 mr-auto mb-32 ml-auto px-6 relative" id="hero">

<div className="w-full flex justify-center mb-12 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<div className="relative z-10 group flex items-center gap-3 rounded-full border border-gold-500/20 bg-gold-950/20 pr-4 pl-2 py-1.5 backdrop-blur-sm">
<span className="rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-bold text-black tracking-wide uppercase">
                        LIMITED
                    </span>
<span className="text-sm font-medium text-gold-200">
<span className="line-through text-gray-500 mr-2">$3,000 Value</span>
<span className="text-white">Now Completely Free</span>
</span>
</div>
</div>

<div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto z-20">
<h1 className="md:text-7xl text-5xl font-semibold text-white tracking-tight [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate leading-[1.1]">
                    Replicate our trades. <br/>
<span className="font-serif italic font-light text-gray-400">Secure your wealth.</span>
</h1>
<p className="text-lg text-gray-400 max-w-2xl leading-relaxed [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
                    Join the best trading community aimed at daring individuals. Make profits on the stock markets without prior experience.
                </p>

<div className="mt-8 [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">
<button className="group relative inline-flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
<div className="relative flex items-center gap-3 h-14 rounded-full bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-500 px-8 text-black shadow-xl transform transition hover:scale-[1.02] active:scale-[0.98]">
<span className="iconify text-xl" data-icon="lucide:send" data-rotate="315deg"></span>
<span className="text-base font-bold tracking-tight uppercase">Join My Telegram</span>
</div>
</button>
<p className="mt-4 text-xs text-gray-500 font-mono">No payment required. Instant access.</p>
</div>
</div>

<div className="z-20 w-full mt-24 relative [animation:animationIn_0.8s_ease-out_0.9s_both] animate-on-scroll animate">
<p className="uppercase text-[10px] font-semibold text-gray-600 tracking-widest font-mono text-center mb-8">Featured In &amp; Lifestyle Partners</p>
<div className="relative flex overflow-hidden group marquee-mask opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-20 items-center">
<span className="text-2xl font-serif text-gray-500">Forbes</span>
<span className="text-2xl font-serif text-gray-500">Bloomberg</span>
<span className="text-2xl font-serif text-gray-500">JLC Family</span>
<span className="text-2xl font-serif text-gray-500">ABTalks</span>
<span className="text-2xl font-serif text-gray-500">Dubai Watch</span>
<span className="text-2xl font-serif text-gray-500">CryptoDaily</span>
</div>
<div aria-hidden="true" className="flex gap-20 animate-marquee whitespace-nowrap items-center min-w-full absolute top-0 left-full pl-20">
<span className="text-2xl font-serif text-gray-500">Forbes</span>
<span className="text-2xl font-serif text-gray-500">Bloomberg</span>
<span className="text-2xl font-serif text-gray-500">JLC Family</span>
<span className="text-2xl font-serif text-gray-500">ABTalks</span>
<span className="text-2xl font-serif text-gray-500">Dubai Watch</span>
<span className="text-2xl font-serif text-gray-500">CryptoDaily</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-20 mx-auto px-6 relative" id="courses">
<div className="text-center max-w-2xl mx-auto px-6 mb-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-serif italic text-white tracking-tight mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">Unlock the Elite</span>
<span className="text-gold-400">Ecosystem</span>
</h2>
<p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                    Normally valued at over $3,000, now offered completely free to help you achieve financial independence.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(243,182,31,0.06), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
<span className="iconify text-gold-400 text-5xl" data-icon="lucide:candlestick-chart"></span>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-mono text-gold-500 border border-gold-500/20 bg-gold-500/5 px-2 py-0.5 rounded uppercase">Masterclass</span>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Trading Masterclass</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            +12h of comprehensive courses covering technical analysis, risk management, and profitable strategies.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(243,182,31,0.06), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
<span className="iconify text-gold-400 text-5xl" data-icon="lucide:bitcoin"></span>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-mono text-gold-500 border border-gold-500/20 bg-gold-500/5 px-2 py-0.5 rounded uppercase">Crypto</span>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Crypto Masterclass</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            +10h of deep dive into blockchain, altcoins, and long-term portfolio construction for maximum yield.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(243,182,31,0.06), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
<span className="iconify text-gold-400 text-5xl" data-icon="lucide:users"></span>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-mono text-gold-500 border border-gold-500/20 bg-gold-500/5 px-2 py-0.5 rounded uppercase">Community</span>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Mindset &amp; Wealth</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Exclusive community area with other members. Develop the winning mindset required for 7-figure success.
                        </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mx-auto px-6 relative" id="lifestyle">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full items-center">

<div className="flex flex-col justify-center [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<span className="text-xs font-mono tracking-widest uppercase text-gold-500">The Mentor</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-6 leading-[1]">
<span className="italic block text-gray-500 font-light">My name is Laurent.</span>
<span className="font-medium">Also known as Billionaire.</span>
</h2>
<div className="space-y-6 text-base text-gray-400 font-light leading-relaxed">
<p>
                            Thanks to my investments, I am a young French-Portuguese multimillionaire, and I have decided to share my knowledge with the general public.
                        </p>
<p>
                            Leveraging my financial journey, I share my advice and strategies within the community, aiming to help everyone seize opportunities in the financial market.
                        </p>
<p className="text-white font-medium">
                            Join our group to explore financial market possibilities together.
                        </p>
</div>
<div className="mt-8 flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><span className="iconify text-xl" data-icon="lucide:instagram"></span></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><span className="iconify text-xl" data-icon="lucide:youtube"></span></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><span className="iconify text-xl" data-icon="lucide:twitter"></span></a>
</div>
</div>

<div className="relative [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-gray-800 to-black border border-white/10 relative overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]"></div>
<div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center pb-10">

<div className="w-2/3 h-2/3 bg-gradient-to-t from-gold-900/40 to-transparent rounded-t-full blur-3xl"></div>
<span className="text-9xl font-serif italic text-white/5 absolute bottom-10 z-0">Billionaire</span>
</div>

<div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col gap-3">
<div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-gold-500 flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:map-pin"></span>
</div>
<div>
<div className="text-xs text-gray-400 font-mono uppercase">Current Location</div>
<div className="text-sm text-white font-medium">Dubai, UAE</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mx-auto px-6 relative" id="signals">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

<div className="order-2 lg:order-1 flex justify-center [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="w-[320px] h-[600px] border border-white/10 bg-black rounded-[3rem] p-3 shadow-2xl relative overflow-hidden">

<div className="w-full h-full bg-[#0e1621] rounded-[2.5rem] overflow-hidden flex flex-col relative">

<div className="bg-[#17212b] p-4 flex items-center gap-3 border-b border-black/20 z-10">
<div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-[10px] font-bold text-black">B</div>
<div>
<div className="text-xs text-white font-bold">Billionaire Signals 🦁</div>
<div className="text-[10px] text-gray-400">145,203 subscribers</div>
</div>
</div>

<div className="flex-1 p-3 flex flex-col gap-3 overflow-hidden relative">

<div className="flex justify-center"><span className="bg-[#00000040] text-gray-400 text-[9px] px-2 py-0.5 rounded-full">Today</span></div>

<div className="bg-[#182533] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[90%] self-start border-l-2 border-gold-500">
<div className="text-[10px] text-gold-400 font-bold mb-1">GOLD BUY NOW @ 2034.50</div>
<div className="text-[10px] text-white space-y-1">
<p>TP1: 2038.00 ✅</p>
<p>TP2: 2042.00</p>
<p>SL: 2029.00</p>
</div>
<div className="text-[8px] text-gray-500 text-right mt-1">10:42 AM</div>
</div>

<div className="bg-[#182533] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[90%] self-start">
<div className="text-[10px] text-white">
                                        TP1 Hit on GOLD! +35 Pips secured 💰<br/>
                                        Move SL to Entry. Enjoy profits family!
                                    </div>
<div className="h-24 mt-2 bg-gradient-to-t from-gold-500/20 to-transparent rounded border border-gold-500/20 relative">

<svg className="absolute bottom-0 w-full h-full" preserveaspectratio="none">
<path d="M0,80 Q20,70 40,75 T80,50 T120,40 T160,20 T200,10" fill="none" stroke="#f3b61f" strokeWidth="2"></path>
</svg>
</div>
<div className="text-[8px] text-gray-500 text-right mt-1">11:15 AM</div>
</div>
</div>

<div className="absolute bottom-6 left-0 w-full flex justify-center z-20">
<div className="bg-[#1c2a38] text-gold-400 text-xs py-2 px-8 rounded uppercase font-bold tracking-wider shadow-lg animate-pulse">
                                    Join Channel
                                </div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-gold-500" data-icon="lucide:trending-up"></span>
<span className="text-xs font-mono tracking-widest uppercase text-gold-500">Daily Profit</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-6">
                        Get Powerful <br/>
<span className="italic text-gray-500">Signals Delivered Daily.</span>
</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                        Receive a multitude of impactful and entirely complimentary Forex &amp; Crypto signals daily via our exclusive Telegram channel.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="border-l border-white/10 pl-4">
<div className="text-3xl font-medium text-white mb-1">100%</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Free Access</div>
</div>
<div className="border-l border-white/10 pl-4">
<div className="text-3xl font-medium text-white mb-1">24/7</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Support Team</div>
</div>
<div className="border-l border-white/10 pl-4">
<div className="text-3xl font-medium text-white mb-1">417+</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">5 Star Reviews</div>
</div>
<div className="border-l border-white/10 pl-4">
<div className="text-3xl font-medium text-white mb-1">No</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Subscription</div>
</div>
</div>
<div className="mt-10">
<button className="hover:bg-white/5 transition-all flex h-12 text-sm font-medium text-gray-200 bg-white/[0.03] rounded-full px-8 items-center justify-center group relative overflow-hidden" style={{'--border-gradient': 'linear-gradient(180deg, rgba(243, 182, 31, 0.5), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', '--border-radius-before': '9999px'}}>
<span className="text-gold-400 font-bold uppercase tracking-tight group-hover:text-white transition-colors">Join My Telegram</span>
</button>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-4xl z-20 mt-32 mx-auto px-6 mb-32 relative" id="faq">
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-12 text-center">
                The answers to your questions.
            </h2>
<div className="flex flex-col gap-4">

<div className="group border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden hover:bg-white/[0.04] transition-colors">
<details className="p-6 cursor-pointer">
<summary className="flex justify-between items-center text-white font-medium list-none">
<span>How to join the Telegram channel?</span>
<span className="iconify text-gray-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-gray-400 text-sm font-light leading-relaxed">
                            Simply download the Telegram app on your phone or computer, then click any of the "Join My Telegram" buttons on this page. It will instantly open the channel.
                        </p>
</details>
</div>

<div className="group border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden hover:bg-white/[0.04] transition-colors">
<details className="p-6 cursor-pointer">
<summary className="flex justify-between items-center text-white font-medium list-none">
<span>Who can join the Telegram group?</span>
<span className="iconify text-gray-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-gray-400 text-sm font-light leading-relaxed">
                            The group is open to everyone! Whether you are a complete beginner or an experienced trader, our community is designed to help you grow.
                        </p>
</details>
</div>

<div className="group border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden hover:bg-white/[0.04] transition-colors">
<details className="p-6 cursor-pointer">
<summary className="flex justify-between items-center text-white font-medium list-none">
<span>Are there charges for signals?</span>
<span className="iconify text-gray-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-gray-400 text-sm font-light leading-relaxed">
                            No. Access to the Telegram channel, the signals, and the educational modules is currently 100% free, replacing the previous $3,000 value.
                        </p>
</details>
</div>
</div>
</section>

<section className="w-full relative py-24 overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-gold-900/10 to-black pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-5xl md:text-[80px] font-serif text-white tracking-tight leading-none mb-8">
                    Start your <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600">journey.</span>
</h2>
<p className="text-xl text-gray-400 font-light max-w-xl mb-12">
                    Don't miss out on the opportunity to change your life. Join thousands of members making daily profits.
                </p>
<div className="flex flex-col md:flex-row gap-4 items-center">
<button className="h-14 px-12 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">
                        JOIN FOR FREE
                        <span className="iconify text-xl" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<footer className="w-full border-t border-white/10 bg-black pt-20 pb-12 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="col-span-1 md:col-span-6 flex flex-col gap-6">
<div className="flex items-center gap-2 text-white">
<span className="iconify text-gold-400 text-2xl" data-icon="lucide:gem"></span>
<span className="text-lg font-semibold tracking-tight uppercase">Billionaire</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                            Make sure you are prepared to accept financial risk, as we are not responsible for any losses to your wallet. Trading involves significant risk.
                        </p>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-white mb-6">Explore</h4>
<ul className="flex flex-col gap-4 text-sm text-gray-500">
<li><a className="hover:text-gold-400 transition-colors" href="#">Trading</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Crypto</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Lifestyle</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-4">
<h4 className="text-sm font-medium text-white mb-6">Contact</h4>
<ul className="flex flex-col gap-4 text-sm text-gray-500">
<li><a className="hover:text-gold-400 transition-colors" href="#">Support</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Telegram</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-gray-600 font-mono">
                        © 2024 Billionaire Group. All rights reserved.
                    </div>
</div>
</div>
</footer>
</main>



    </>
  );
}
