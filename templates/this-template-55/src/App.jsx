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
void: '#020204',
metallic: '#8888AA',
glass: 'rgba(255, 255, 255, 0.05)',
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['Space Grotesk', 'sans-serif'],
},
backgroundImage: {
'holographic': 'linear-gradient(45deg, #00C6FF, #0072FF, #FF00AA)',
'oil-slick': 'radial-gradient(circle at 50% 50%, rgba(0, 198, 255, 0.15), rgba(0, 114, 255, 0.1), rgba(2, 2, 4, 0))',
},
boxShadow: {
'glass-inset': 'inset 0 0 20px rgba(255, 255, 255, 0.03)',
'glow': '0 0 40px rgba(0, 114, 255, 0.2)',
},
animation: {
'spin-slow': 'spin 10s linear infinite',
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5,
                class: 'lucide'
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-20">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600 rounded-full blur-[150px] animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-800 rounded-full blur-[150px] opacity-60"></div>
<div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-cyan-900 rounded-full blur-[120px] opacity-40 animate-float"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="prism-border backdrop-blur-md">
<div className="bg-void/80 rounded-full px-6 py-3 flex items-center gap-8 border border-white/5">
<div className="hidden md:flex gap-6 text-xs font-medium tracking-widest uppercase text-metallic">
<a className="hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#curriculum">Curriculum</a>
<a className="hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#outcomes">Outcomes</a>
<a className="hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#mentorship">Mentorship</a>
</div>
<div className="h-4 w-px bg-white/10 hidden md:block"></div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white hover:text-cyan-400 transition-colors" href="#">LOGIN</a>
<button className="relative group">
<div className="absolute -inset-0.5 bg-holographic rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
<div className="relative px-5 py-2 bg-black rounded-full border border-white/10 flex items-center gap-2">
<span className="text-xs font-semibold text-transparent bg-clip-text bg-holographic tracking-wider uppercase">Claim Access</span>
</div>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="order-2 lg:order-1 flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-metallic">Wealth 3.0 Protocol</span>
</div>
<h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-tighter mix-blend-screen">
                    THE ALCHEMY <br/>
                    OF THE <span className="text-holo">NEW ERA.</span>
</h1>
<p className="text-metallic text-lg md:text-xl max-w-lg font-light leading-relaxed">
                    The old financial models are dissolving. Master the art of asymmetric upside in the age of Artificial Intelligence.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group relative px-8 py-4 bg-white/5 border border-white/10 overflow-hidden rounded-sm backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-glow hover:border-cyan-500/30">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-white">Begin The Transformation</span>
</button>
<button className="px-8 py-4 flex items-center gap-2 text-metallic hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="play-circle"></i>
<span className="text-sm font-medium tracking-wider uppercase">Watch Manifesto</span>
</button>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full flex items-center justify-center">

<div className="relative w-64 h-64 md:w-96 md:h-96">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[60px] animate-pulse"></div>

<div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,1)] grayscale contrast-125 hover:grayscale-0 transition-all duration-700 group">

<img alt="The Instructor" className="object-cover w-full h-full opacity-80 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-oil-slick opacity-50 mix-blend-overlay"></div>
</div>

<div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-full border border-white/20 animate-float flex items-center justify-center">
<i className="text-white w-8 h-8 opacity-80" data-lucide="barycenter"></i>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-10"></div>
</section>

<section className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden relative z-20">
<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-void to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-void to-transparent z-10"></div>
<div className="container mx-auto px-4 mb-6">
<p className="text-center text-[10px] font-semibold tracking-[0.3em] text-metallic uppercase">Advising Leaders At</p>
</div>
<div className="flex overflow-hidden">
<div className="flex space-x-16 animate-marquee min-w-full items-center">

<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
<i className="w-6 h-6 group-hover:text-cyan-400" data-lucide="cpu"></i>
<span className="font-sans text-xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic">OPENAI</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
<i className="w-6 h-6 group-hover:text-cyan-400" data-lucide="gem"></i>
<span className="font-sans text-xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic">ETHEREUM</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
<i className="w-6 h-6 group-hover:text-cyan-400" data-lucide="blocks"></i>
<span className="font-sans text-xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic">LINEAR</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
<i className="w-6 h-6 group-hover:text-cyan-400" data-lucide="triangle"></i>
<span className="font-sans text-xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic">VERCEL</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
<i className="w-6 h-6 group-hover:text-cyan-400" data-lucide="wallet"></i>
<span className="font-sans text-xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic">COINBASE</span>
</div>

<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
<i className="w-6 h-6 group-hover:text-cyan-400" data-lucide="cpu"></i>
<span className="font-sans text-xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic">OPENAI</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
<i className="w-6 h-6 group-hover:text-cyan-400" data-lucide="gem"></i>
<span className="font-sans text-xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic">ETHEREUM</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
<i className="w-6 h-6 group-hover:text-cyan-400" data-lucide="blocks"></i>
<span className="font-sans text-xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic">LINEAR</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="outcomes" onmousemove="document.documentElement.style.setProperty('--mouse-x', event.clientX + 'px'); document.documentElement.style.setProperty('--mouse-y', event.clientY + 'px');">
<div className="container mx-auto px-4">
<div className="text-center mb-20">
<h2 className="font-serif italic text-4xl md:text-6xl text-white mb-4 tracking-tighter">Crystallize Your <span className="text-white/50">Strategy.</span></h2>
<p className="text-metallic max-w-xl mx-auto text-sm md:text-base">Stop guessing. We provide the mathematical frameworks to predict market liquidity before it moves.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl spotlight-card group hover:border-cyan-500/30 transition-colors duration-500">
<div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-cyan-400 border border-white/10 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="radar"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Alpha Detection</h3>
<p className="text-metallic text-sm leading-relaxed">
                        Identify asymmetric opportunities before retail flow arrives. Use our proprietary on-chain signal dashboard.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl spotlight-card group hover:border-purple-500/30 transition-colors duration-500">
<div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-purple-400 border border-white/10 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Algorithmic Mindset</h3>
<p className="text-metallic text-sm leading-relaxed">
                        Reprogram your decision making. Remove emotion and execute with the cold precision of a HFT bot.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl spotlight-card group hover:border-pink-500/30 transition-colors duration-500">
<div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-pink-400 border border-white/10 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="coins"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Liquidity Engineering</h3>
<p className="text-metallic text-sm leading-relaxed">
                        Understand the physics of money. Learn how to position yourself where capital naturally flows.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="curriculum">
<div className="container mx-auto px-4 relative z-10">
<div className="flex items-end justify-between mb-24 border-b border-white/10 pb-8">
<h2 className="font-serif italic text-4xl text-white">The Syllabus</h2>
<span className="text-xs text-metallic font-mono tracking-widest">Q4 COHORT 2024</span>
</div>
<div className="space-y-32">

<div className="flex flex-col md:flex-row items-center gap-12 group">
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:shadow-glow transition-all duration-700">
<i className="w-32 h-32 text-white/20 group-hover:text-cyan-400 transition-colors duration-500 animate-spin-slow" data-lucide="torus"></i>
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 rounded-full"></div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<div className="text-xs font-bold text-cyan-500 tracking-widest uppercase">Module 01</div>
<h3 className="text-3xl md:text-5xl font-serif italic text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic transition-all duration-300">
                            The Psychology of Cycles
                        </h3>
<p className="text-metallic text-sm md:text-base max-w-md">
                            Markets are biological entities. We dissect the human greed/fear index and map it against historical Bitcoin halving cycles to predict local tops with 94% accuracy.
                        </p>
<div className="pt-4 border-t border-white/5 flex gap-4 text-xs font-mono text-metallic">
<span>VIDEOS: 4</span>
<span>//</span>
<span>DURATION: 2H 45M</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-64 h-64 border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm transform rotate-45 group-hover:rotate-90 transition-all duration-700 group-hover:shadow-glow">
<i className="w-32 h-32 text-white/20 group-hover:text-purple-400 transition-colors duration-500 -rotate-45 group-hover:-rotate-90" data-lucide="pyramid"></i>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6 md:text-right">
<div className="text-xs font-bold text-purple-500 tracking-widest uppercase">Module 02</div>
<h3 className="text-3xl md:text-5xl font-serif italic text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic transition-all duration-300">
                            DeFi Architecture
                        </h3>
<p className="text-metallic text-sm md:text-base max-w-md ml-auto">
                            Beyond trading: Yield farming strategies that hedge against volatility. Constructing a "delta-neutral" portfolio that generates cash flow while you sleep.
                        </p>
<div className="pt-4 border-t border-white/5 flex gap-4 text-xs font-mono text-metallic md:justify-end">
<span>VIDEOS: 6</span>
<span>//</span>
<span>DURATION: 4H 10M</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 group">
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-64 h-64 border border-white/10 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:shadow-glow transition-all duration-700">
<i className="w-32 h-32 text-white/20 group-hover:text-pink-400 transition-colors duration-500 animate-float" data-lucide="infinity"></i>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<div className="text-xs font-bold text-pink-500 tracking-widest uppercase">Module 03</div>
<h3 className="text-3xl md:text-5xl font-serif italic text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-holographic transition-all duration-300">
                            AI-Enhanced Execution
                        </h3>
<p className="text-metallic text-sm md:text-base max-w-md">
                            Leveraging LLMs to parse whitepapers and sentiment analysis scripts to read Twitter/X in real-time. The future of investing is cyborg.
                        </p>
<div className="pt-4 border-t border-white/5 flex gap-4 text-xs font-mono text-metallic">
<span>VIDEOS: 3</span>
<span>//</span>
<span>DURATION: 1H 50M</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 flex items-center justify-center perspective-1000">
<div className="container mx-auto px-4 flex flex-col items-center">
<div className="group relative w-full max-w-md cursor-pointer transform-style-3d transition-transform duration-1000 hover:rotate-y-180 h-[500px]">

<div className="absolute inset-0 bg-void border border-white/10 rounded-2xl p-8 flex flex-col justify-between backface-hidden shadow-2xl glass-panel overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex justify-between items-start z-10">
<i className="text-white w-8 h-8" data-lucide="cpu"></i>
<span className="text-xs font-mono text-metallic border border-white/20 px-2 py-1 rounded">ERC-721</span>
</div>
<div className="z-10 text-center space-y-4">
<h2 className="text-xs font-bold tracking-[0.4em] text-metallic uppercase">Mint Your Access</h2>
<div className="font-serif italic text-4xl text-white">The Genesis Pass</div>
<div className="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
</div>
<div className="z-10 flex justify-between items-end">
<div>
<div className="text-[10px] text-metallic uppercase tracking-widest mb-1">Price</div>
<div className="text-xl font-medium text-white">Ξ 0.5 ETH <span className="text-sm text-metallic">($1,500)</span></div>
</div>
<div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white text-black rounded-2xl p-8 flex flex-col justify-between backface-hidden rotate-y-180 shadow-glow overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-white opacity-50"></div>
<div className="z-10">
<h3 className="font-serif italic text-2xl mb-6">Confirm Transaction</h3>
<ul className="space-y-4 text-sm font-medium">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i> Full Course Library
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i> Private Discord Alpha
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i> Monthly Live Calls
                            </li>
</ul>
</div>
<div className="z-10 text-center space-y-3">
<p className="text-[10px] uppercase tracking-widest text-gray-500">Limited to 500 seats per cohort</p>
<button className="w-full py-4 bg-black text-white font-semibold tracking-widest uppercase hover:bg-gray-900 transition-colors" onclick="this.innerHTML = 'MINTING...'; setTimeout(() =&gt; { this.innerHTML = 'SUCCESS'; this.classList.add('bg-green-600'); }, 1500);">
                            Secure Seat
                        </button>
</div>
</div>
</div>
<p className="mt-8 text-xs text-metallic text-center uppercase tracking-widest opacity-50">Hover card to flip // Click to enroll</p>
</div>
</section>

<section className="py-24 relative z-10 bg-void">
<div className="container mx-auto px-4 max-w-3xl">
<h2 className="text-xs font-bold text-cyan-500 tracking-[0.3em] uppercase mb-12 text-center">Protocols // FAQ</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-lg transition-all duration-300 open:shadow-[0_0_20px_rgba(0,198,255,0.1)]">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<span className="font-medium text-white">Is prior crypto knowledge required?</span>
<span className="text-white/50 group-open:rotate-180 transition-transform">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-metallic text-sm leading-relaxed">
                        No. We strip the complexity and rebuild your understanding from first principles. We assume zero knowledge but infinite intelligence.
                    </div>
</details>
<details className="group glass-panel rounded-lg transition-all duration-300 open:shadow-[0_0_20px_rgba(0,198,255,0.1)]">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<span className="font-medium text-white">What is the time commitment?</span>
<span className="text-white/50 group-open:rotate-180 transition-transform">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-metallic text-sm leading-relaxed">
                        The core curriculum is 12 hours. However, the alpha signals in the Discord require checking in 2-3 times per week for optimal execution.
                    </div>
</details>
<details className="group glass-panel rounded-lg transition-all duration-300 open:shadow-[0_0_20px_rgba(0,198,255,0.1)]">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<span className="font-medium text-white">Do I own the course?</span>
<span className="text-white/50 group-open:rotate-180 transition-transform">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-metallic text-sm leading-relaxed">
                        Yes. Your access is tied to the NFT you mint. You can hold it for lifetime access, or sell it on the secondary market if you decide to exit the ecosystem.
                    </div>
</details>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 bg-gradient-to-b from-void to-[#050510] overflow-hidden">

<div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>
<div className="container mx-auto px-4 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/10 pb-12">
<div>
<h2 className="font-serif italic text-6xl md:text-8xl text-white mb-2 tracking-tighter">Future Proof.</h2>
<p className="text-metallic max-w-sm">Join "SIGNAL" for weekly market intelligence.</p>
</div>
<div className="w-full md:w-auto">
<form className="flex w-full md:w-96 group">
<input className="w-full bg-white/5 border border-white/10 border-r-0 rounded-l-md px-4 py-3 text-white placeholder-white/30 outline-none focus:border-cyan-500 transition-colors" placeholder="Enter your frequency..." type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-r-md font-semibold text-sm hover:bg-cyan-400 transition-colors">
                            JOIN
                        </button>
</form>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 tracking-widest uppercase">
<div className="mb-4 md:mb-0">
                    © 2024 Nebula Ventures Lab.
                </div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Farcaster</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
