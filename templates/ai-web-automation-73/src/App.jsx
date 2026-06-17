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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
extend: {
colors: {
orange: {
400: '#FB923C',
500: '#F97316',
600: '#EA580C',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none grid-bg bg-grid-pattern opacity-[0.15]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 mb-6">
<div className="flex bg-orange-500 w-5 h-5 rounded-sm items-center justify-center">
<i className="text-black w-4 h-4" data-lucide="layers"></i>
</div>
<span className="font-medium text-white tracking-tight">WebRunner</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-400 hover:text-white font-medium hidden sm:block" href="#">Sign In</a>
<a className="bg-orange-500 hover:bg-orange-400 text-black text-xs font-semibold px-4 py-2 rounded transition-all shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)]" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-mono mb-8">
<span className="">Introducing Browser Use 1.0</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-6">
<style>
                @keyframes aura-reveal {
                    to {
                        opacity: 1;
                    }
                }

                @keyframes aura-blink {

                    0%,
                    100% {
                        opacity: 1;
                    }

                    50% {
                        opacity: 0;
                    }
                }

                .aura-char {
                    opacity: 0;
                    animation: aura-reveal 0.01s forwards;
                }

                .aura-cursor {
                    display: inline-block;
                    width: 0.1em;
                    height: 1em;
                    background-color: #f97316;
                    margin-left: 0.05em;
                    vertical-align: text-bottom;
                    animation: aura-blink 1s step-end infinite;
                }
            </style>
<span className="sr-only">AUTOMATE THE WEB </span>
<span aria-hidden="true" className="">
<span className="aura-char" style={{animationDelay: '0.12s'}}>A</span><span className="aura-char" style={{animationDelay: '0.24s'}}>U</span><span className="aura-char" style={{animationDelay: '0.36s'}}>T</span><span className="aura-char" style={{animationDelay: '0.48s'}}>O</span><span className="aura-char" style={{animationDelay: '0.60s'}}>M</span><span className="aura-char" style={{animationDelay: '0.72s'}}>A</span><span className="aura-char" style={{animationDelay: '0.84s'}}>T</span><span className="aura-char" style={{animationDelay: '0.96s'}}>E</span>

<span className="md:hidden"><span className="aura-char" style={{animationDelay: '1.08s'}}> </span></span>
<br className="hidden md:block"/>
<span className="aura-char" style={{animationDelay: '1.20s'}}>T</span><span className="aura-char" style={{animationDelay: '1.32s'}}>H</span><span className="aura-char" style={{animationDelay: '1.44s'}}>E</span>
<span className="aura-char" style={{animationDelay: '1.56s'}}> </span>
<span className="aura-char" style={{animationDelay: '1.68s'}}>W</span><span className="aura-char" style={{animationDelay: '1.80s'}}>E</span><span className="aura-char" style={{animationDelay: '1.92s'}}>B</span>
</span><span className="aura-cursor"></span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-tight">
<style>
        @keyframes tw-reveal { to { max-width: 1.5em; opacity: 1; } }
        @keyframes tw-cursor-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .tw-char {
            display: inline-block;
            overflow: hidden;
            max-width: 0;
            opacity: 0;
            vertical-align: bottom;
            white-space: pre;
            animation: tw-reveal 0.1s forwards;
            line-height: inherit;
        }
        .tw-cursor {
            display: inline-block;
            width: 3px;
            height: 1.1em;
            background-color: #fb923c;
            margin-left: 1px;
            vertical-align: text-bottom;
            animation: tw-cursor-blink 1s step-end infinite;
        }
    </style><span className="tw-char" style={{animationDelay: '0.00s'}}>B</span><span className="tw-char" style={{animationDelay: '0.12s'}}>u</span><span className="tw-char" style={{animationDelay: '0.24s'}}>i</span><span className="tw-char" style={{animationDelay: '0.36s'}}>l</span><span className="tw-char" style={{animationDelay: '0.48s'}}>d</span><span className="tw-char" style={{animationDelay: '0.60s'}}> </span><span className="tw-char" style={{animationDelay: '0.72s'}}>A</span><span className="tw-char" style={{animationDelay: '0.84s'}}>I</span><span className="tw-char" style={{animationDelay: '0.96s'}}> </span><span className="tw-char" style={{animationDelay: '1.08s'}}>a</span><span className="tw-char" style={{animationDelay: '1.20s'}}>g</span><span className="tw-char" style={{animationDelay: '1.32s'}}>e</span><span className="tw-char" style={{animationDelay: '1.44s'}}>n</span><span className="tw-char" style={{animationDelay: '1.56s'}}>t</span><span className="tw-char" style={{animationDelay: '1.68s'}}>s</span><span className="tw-char" style={{animationDelay: '1.80s'}}> </span><span className="tw-char" style={{animationDelay: '1.92s'}}>t</span><span className="tw-char" style={{animationDelay: '2.04s'}}>h</span><span className="tw-char" style={{animationDelay: '2.16s'}}>a</span><span className="tw-char" style={{animationDelay: '2.28s'}}>t</span><span className="tw-char" style={{animationDelay: '2.40s'}}> </span><span className="tw-char" style={{animationDelay: '2.52s'}}>n</span><span className="tw-char" style={{animationDelay: '2.64s'}}>a</span><span className="tw-char" style={{animationDelay: '2.76s'}}>v</span><span className="tw-char" style={{animationDelay: '2.88s'}}>i</span><span className="tw-char" style={{animationDelay: '3.00s'}}>g</span><span className="tw-char" style={{animationDelay: '3.12s'}}>a</span><span className="tw-char" style={{animationDelay: '3.24s'}}>t</span><span className="tw-char" style={{animationDelay: '3.36s'}}>e</span><span className="tw-char" style={{animationDelay: '3.48s'}}> </span><span className="tw-char" style={{animationDelay: '3.60s'}}>w</span><span className="tw-char" style={{animationDelay: '3.72s'}}>e</span><span className="tw-char" style={{animationDelay: '3.84s'}}>b</span><span className="tw-char" style={{animationDelay: '3.96s'}}>s</span><span className="tw-char" style={{animationDelay: '4.08s'}}>i</span><span className="tw-char" style={{animationDelay: '4.20s'}}>t</span><span className="tw-char" style={{animationDelay: '4.32s'}}>e</span><span className="tw-char" style={{animationDelay: '4.44s'}}>s</span><span className="tw-char" style={{animationDelay: '4.56s'}}>,</span><span className="tw-char" style={{animationDelay: '4.68s'}}> </span><span className="tw-char" style={{animationDelay: '4.80s'}}>e</span><span className="tw-char" style={{animationDelay: '4.92s'}}>x</span><span className="tw-char" style={{animationDelay: '5.04s'}}>t</span><span className="tw-char" style={{animationDelay: '5.16s'}}>r</span><span className="tw-char" style={{animationDelay: '5.28s'}}>a</span><span className="tw-char" style={{animationDelay: '5.40s'}}>c</span><span className="tw-char" style={{animationDelay: '5.52s'}}>t</span><span className="tw-char" style={{animationDelay: '5.64s'}}> </span><span className="tw-char" style={{animationDelay: '5.76s'}}>d</span><span className="tw-char" style={{animationDelay: '5.88s'}}>a</span><span className="tw-char" style={{animationDelay: '6.00s'}}>t</span><span className="tw-char" style={{animationDelay: '6.12s'}}>a</span><span className="tw-char" style={{animationDelay: '6.24s'}}>,</span><span className="tw-char" style={{animationDelay: '6.36s'}}> </span><span className="tw-char" style={{animationDelay: '6.48s'}}>a</span><span className="tw-char" style={{animationDelay: '6.60s'}}>n</span><span className="tw-char" style={{animationDelay: '6.72s'}}>d</span><span className="tw-char" style={{animationDelay: '6.84s'}}> </span><span className="tw-char" style={{animationDelay: '6.96s'}}>h</span><span className="tw-char" style={{animationDelay: '7.08s'}}>a</span><span className="tw-char" style={{animationDelay: '7.20s'}}>n</span><span className="tw-char" style={{animationDelay: '7.32s'}}>d</span><span className="tw-char" style={{animationDelay: '7.44s'}}>l</span><span className="tw-char" style={{animationDelay: '7.56s'}}>e</span><span className="tw-char" style={{animationDelay: '7.68s'}}> </span><span className="tw-char" style={{animationDelay: '7.80s'}}>c</span><span className="tw-char" style={{animationDelay: '7.92s'}}>o</span><span className="tw-char" style={{animationDelay: '8.04s'}}>m</span><span className="tw-char" style={{animationDelay: '8.16s'}}>p</span><span className="tw-char" style={{animationDelay: '8.28s'}}>l</span><span className="tw-char" style={{animationDelay: '8.40s'}}>e</span><span className="tw-char" style={{animationDelay: '8.52s'}}>x</span><span className="tw-char" style={{animationDelay: '8.64s'}}> </span><span className="tw-char" style={{animationDelay: '8.76s'}}>b</span><span className="tw-char" style={{animationDelay: '8.88s'}}>r</span><span className="tw-char" style={{animationDelay: '9.00s'}}>o</span><span className="tw-char" style={{animationDelay: '9.12s'}}>w</span><span className="tw-char" style={{animationDelay: '9.24s'}}>s</span><span className="tw-char" style={{animationDelay: '9.36s'}}>e</span><span className="tw-char" style={{animationDelay: '9.48s'}}>r</span><span className="tw-char" style={{animationDelay: '9.60s'}}> </span><span className="tw-char" style={{animationDelay: '9.72s'}}>i</span><span className="tw-char" style={{animationDelay: '9.84s'}}>n</span><span className="tw-char" style={{animationDelay: '9.96s'}}>t</span><span className="tw-char" style={{animationDelay: '10.08s'}}>e</span><span className="tw-char" style={{animationDelay: '10.20s'}}>r</span><span className="tw-char" style={{animationDelay: '10.32s'}}>a</span><span className="tw-char" style={{animationDelay: '10.44s'}}>c</span><span className="tw-char" style={{animationDelay: '10.56s'}}>t</span><span className="tw-char" style={{animationDelay: '10.68s'}}>i</span><span className="tw-char" style={{animationDelay: '10.80s'}}>o</span><span className="tw-char" style={{animationDelay: '10.92s'}}>n</span><span className="tw-char" style={{animationDelay: '11.04s'}}>s</span><span className="tw-char" style={{animationDelay: '11.16s'}}> </span><span className="tw-char" style={{animationDelay: '11.28s'}}>s</span><span className="tw-char" style={{animationDelay: '11.40s'}}>e</span><span className="tw-char" style={{animationDelay: '11.52s'}}>a</span><span className="tw-char" style={{animationDelay: '11.64s'}}>m</span><span className="tw-char" style={{animationDelay: '11.76s'}}>l</span><span className="tw-char" style={{animationDelay: '11.88s'}}>e</span><span className="tw-char" style={{animationDelay: '12.00s'}}>s</span><span className="tw-char" style={{animationDelay: '12.12s'}}>s</span><span className="tw-char" style={{animationDelay: '12.24s'}}>l</span><span className="tw-char" style={{animationDelay: '12.36s'}}>y</span><span className="tw-char" style={{animationDelay: '12.48s'}}>.</span><span className="tw-cursor"></span>
</p>

<div className="max-w-2xl mx-auto glass-card rounded-xl p-2 relative group focus-within:border-orange-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent rounded-xl pointer-events-none">
</div>
<div className="flex items-center justify-between bg-black/40 rounded-lg p-1 pl-4 border border-white/5">
<div className="flex-1 font-mono text-sm text-neutral-500 flex items-center gap-2">
<span className="text-orange-500">$</span>
<input className="bg-transparent border-none outline-none w-full text-neutral-300 placeholder-neutral-600 h-10" placeholder="Go to amazon and find the cheapest gaming monitor..." type="text"/>
</div>
<button className="bg-orange-500 hover:bg-orange-400 text-black font-semibold text-xs px-4 py-2.5 rounded shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
                        Run Task
                    </button>
</div>

<div className="absolute -top-10 left-0 w-full flex justify-center opacity-0">

</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5">
<p className="text-xs font-mono text-neutral-600 mb-6 uppercase tracking-widest">Trusted by engineering teams at
            </p>
<div className="group relative flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<style>
                    @keyframes infinite-scroll {
                        from {
                            transform: translateX(0);
                        }

                        to {
                            transform: translateX(-100%);
                        }
                    }
                </style>

<div className="flex min-w-full shrink-0 animate-[infinite-scroll_40s_linear_infinite] items-center justify-around gap-16 px-8 group-hover:[animation-play-state:paused]">
<span className="text-lg font-medium tracking-tight font-sans">Airbnb</span>
<span className="text-lg font-medium tracking-tight font-serif italic">Amazon</span>
<span className="text-lg font-medium tracking-tight font-mono">ANTHROPIC</span>
<span className="text-lg font-medium tracking-tight">Datadog</span>
<span className="text-lg font-medium tracking-tight font-mono">Vercel</span>
<span className="text-lg font-medium tracking-tight font-sans">Airbnb</span>
<span className="text-lg font-medium tracking-tight font-serif italic">Amazon</span>
<span className="text-lg font-medium tracking-tight font-mono">ANTHROPIC</span>
<span className="text-lg font-medium tracking-tight">Datadog</span>
<span className="text-lg font-medium tracking-tight font-mono">Vercel</span>
<span className="text-lg font-medium tracking-tight font-sans">Airbnb</span>
<span className="text-lg font-medium tracking-tight font-serif italic">Amazon</span>
<span className="text-lg font-medium tracking-tight font-mono">ANTHROPIC</span>
<span className="text-lg font-medium tracking-tight">Datadog</span>
<span className="text-lg font-medium tracking-tight font-mono">Vercel</span>
</div>

<div aria-hidden="true" className="flex min-w-full shrink-0 animate-[infinite-scroll_40s_linear_infinite] items-center justify-around gap-16 px-8 group-hover:[animation-play-state:paused]">
<span className="text-lg font-medium tracking-tight font-sans">Airbnb</span>
<span className="text-lg font-medium tracking-tight font-serif italic">Amazon</span>
<span className="text-lg font-medium tracking-tight font-mono">ANTHROPIC</span>
<span className="text-lg font-medium tracking-tight">Datadog</span>
<span className="text-lg font-medium tracking-tight font-mono">Vercel</span>
<span className="text-lg font-medium tracking-tight font-sans">Airbnb</span>
<span className="text-lg font-medium tracking-tight font-serif italic">Amazon</span>
<span className="text-lg font-medium tracking-tight font-mono">ANTHROPIC</span>
<span className="text-lg font-medium tracking-tight">Datadog</span>
<span className="text-lg font-medium tracking-tight font-mono">Vercel</span>
<span className="text-lg font-medium tracking-tight font-sans">Airbnb</span>
<span className="text-lg font-medium tracking-tight font-serif italic">Amazon</span>
<span className="text-lg font-medium tracking-tight font-mono">ANTHROPIC</span>
<span className="text-lg font-medium tracking-tight">Datadog</span>
<span className="text-lg font-medium tracking-tight font-mono">Vercel</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">What We Offer</h2>
<p className="text-lg text-neutral-400">Everything you need to automate the modern web.</p>
</div>
<div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

<div className="hover:bg-neutral-900/50 transition-colors group bg-black/90 px-10 py-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<i className="text-orange-500 w-5 h-5" data-lucide="cloud"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cloud-Hosted Agents <span className="text-[10px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded ml-2 align-middle">NEW</span></h3>
<p className="text-neutral-400 leading-relaxed">Deploy your scrapers instantly without managing infrastructure. We handle the scaling.</p>
</div>

<div className="bg-black/90 p-10 hover:bg-neutral-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<i className="text-orange-500 w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Advanced Stealth Browsers</h3>
<p className="text-neutral-400 leading-relaxed">Bypass complex anti-bot systems automatically. Fingerprint management included.</p>
</div>

<div className="bg-black/90 p-10 hover:bg-neutral-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<i className="text-orange-500 w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Specialized LLMs</h3>
<p className="text-neutral-400 leading-relaxed">Models fine-tuned for HTML understanding and DOM manipulation tasks.</p>
</div>

<div className="bg-black/90 p-10 hover:bg-neutral-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<i className="text-orange-500 w-5 h-5" data-lucide="terminal-square"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Robust API</h3>
<p className="text-neutral-400 leading-relaxed">Simple REST and WebSocket APIs to control browser sessions from any language.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-xl blur-lg opacity-50"></div>
<div className="glass-card rounded-xl border border-white/10 p-1 relative overflow-hidden">
<div className="bg-[#0A0A0A] rounded-lg overflow-hidden flex flex-col h-[340px]">

<div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="ml-4 h-5 w-2/3 bg-white/5 rounded text-[10px] flex items-center px-2 text-neutral-600 font-mono">browser-use.com/data-extraction</div>
</div>

<div className="flex-1 p-6 relative">

<div className="space-y-4 opacity-50">
<div className="h-4 w-1/3 bg-white/20 rounded"></div>
<div className="h-32 w-full bg-white/5 rounded border border-white/5"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/10 rounded"></div>
<div className="h-2 w-5/6 bg-white/10 rounded"></div>
<div className="h-2 w-4/6 bg-white/10 rounded"></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
<div className="bg-black border border-orange-500/30 rounded-lg p-4 shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)] flex flex-col items-center gap-3">
<div className="w-8 h-8 rounded-full border-2 border-orange-500 border-t-transparent animate-spin"></div>
<span className="text-xs font-mono text-orange-400">Extracting structured data...</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="text-orange-500 text-xs font-mono mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    DATA EXTRACTION
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Extract Data Easily.</h2>
<p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    No scripts to maintain. Our AI adapts to DOM changes instantly. Just define the schema, and the agent handles the rest, keeping your pipelines unbreakable.
                </p>
<button className="group flex items-center gap-2 text-white font-medium hover:text-orange-400 transition-colors">
                    Start Scraping <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="text-orange-500 text-xs font-mono mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    SDK + INFRA
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Developer First Platform.</h2>
<p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    Send us a task, we'll handle the infrastructure, proxies, and captcha solving. Available in Python and Node.js.
                </p>
<div className="flex gap-4 mb-8">
<div className="pl-4 border-l border-white/10">
<span className="block text-2xl font-mono text-white mb-1">99%</span>
<span className="text-sm text-neutral-500">Success Rate</span>
</div>
<div className="pl-4 border-l border-white/10">
<span className="block text-2xl font-mono text-white mb-1">&lt;300ms</span>
<span className="text-sm text-neutral-500">Latency</span>
</div>
</div>
<button className="bg-white text-black hover:bg-neutral-200 font-semibold px-5 py-2.5 rounded text-sm transition-colors">
                    Read Documentation
                </button>
</div>

<div className="glass-card rounded-xl p-1 relative shadow-2xl">

<div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 bg-black/40 rounded-t-lg">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="flex gap-4 ml-4">
<div className="text-xs text-orange-400 font-mono flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded border border-white/5">
<i className="w-3 h-3" data-lucide="file-code"></i> main.py
                        </div>
<div className="text-xs text-neutral-500 font-mono flex items-center gap-1.5 hover:text-neutral-300 cursor-pointer">
<i className="w-3 h-3" data-lucide="file-json"></i> config.json
                        </div>
</div>
</div>

<div className="bg-[#0D0D0D] p-6 rounded-b-lg overflow-x-auto">
<pre className="font-mono text-xs md:text-sm leading-relaxed text-neutral-300"><span className="code-syntax-keyword">from</span> browser_use_sdk <span className="code-syntax-keyword">import</span> BrowserUse

<span className="code-syntax-comment"># Initialize the client</span>
client = BrowserUse(api_key=<span className="code-syntax-string">"bu_sk_..."</span>)

<span className="code-syntax-comment"># Define the task</span>
task = client.tasks.create_task(
    task=<span className="code-syntax-string">"Search for top 10 Hacker News posts"</span>,
    llm=<span className="code-syntax-string">"browser-use-llm"</span>,
    stealth=<span className="code-syntax-keyword">True</span>
)

<span className="code-syntax-comment"># Get structured results</span>
result = task.complete()
<span className="code-syntax-func">print</span>(result.output)
</pre>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 grid grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
<div className="bg-black/80 p-6">
<span className="text-[10px] text-neutral-500 font-mono block mb-2">STEP 01</span>
<div className="text-white font-medium mb-1">Install SDK</div>
<div className="text-xs font-mono text-neutral-500 bg-white/5 p-2 rounded border border-white/5">$ pip install browser-use-sdk</div>
</div>
<div className="bg-black/80 p-6">
<span className="text-[10px] text-neutral-500 font-mono block mb-2">STEP 02</span>
<div className="text-white font-medium mb-1">Get API Key</div>
<div className="text-xs font-mono text-neutral-500 bg-white/5 p-2 rounded border border-white/5">cloud.browser-use.com/keys</div>
</div>
<div className="bg-black/80 p-6">
<span className="text-[10px] text-neutral-500 font-mono block mb-2">STEP 03</span>
<div className="text-white font-medium mb-1">Start Building</div>
<div className="text-xs font-mono text-neutral-500 bg-white/5 p-2 rounded border border-white/5">from browser_use import...</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="text-orange-500 text-xs font-mono mb-4">[ stealth cdp infra ]</div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">Stealth Browser Infrastructure</h2>
<p className="text-lg text-neutral-400 mb-8">
                        Browse the web like a human. Most compatible browser infrastructure built for browser-use. We handle fingerprinting so you don't have to.
                    </p>
<a className="inline-flex items-center text-sm font-mono border border-white/10 rounded px-4 py-2 hover:bg-white/5 w-fit transition-colors" href="#">
                        LEARN MORE <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">

<div className="bg-neutral-900/40 border border-white/10 p-6 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="mb-4 text-white font-mono text-sm border-b border-white/5 pb-2">STEALTH_MODE</div>
<p className="text-sm text-neutral-400">Bypass any captcha or anti-bot systems automatically. Rotating user-agents.</p>
</div>

<div className="bg-neutral-900/40 border border-white/10 p-6 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="mb-4 text-white font-mono text-sm border-b border-white/5 pb-2">[US] [GB] [DE]</div>
<p className="text-sm text-neutral-400">Global proxies covering 195+ countries. Residential rotation enabled.</p>
</div>

<div className="bg-neutral-900/40 border border-white/10 p-6 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="mb-4 text-white font-mono text-sm border-b border-white/5 pb-2">PERSISTENT_SESSIONS</div>
<p className="text-sm text-neutral-400">Login to any website. Stay authenticated across multiple runs.</p>
</div>

<div className="bg-neutral-900/40 border border-white/10 p-6 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="mb-4 text-white font-mono text-sm border-b border-white/5 pb-2">FAST_SPIN_UP</div>
<p className="text-sm text-neutral-400">Sub-second browser initialization. Scale instantly to thousands of concurrents.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<div className="inline-block text-orange-500 text-xs font-mono mb-4 border border-orange-500/20 bg-orange-500/5 px-2 py-1 rounded">
                    [ bu 1.0 llm ]
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Custom LLM for Browser Use</h2>
<p className="text-lg text-neutral-400">
                    Custom-trained LLM for browser-use. Unmatched cost efficiency. 53 tasks per dollar.
                </p>
</div>

<div className="glass-card p-8 rounded-xl border border-white/10 relative">

<div className="absolute top-4 right-4 text-[10px] font-mono text-neutral-600">METRIC: EFFICIENCY</div>
<div className="space-y-6">

<div className="group">
<div className="flex justify-between text-xs font-mono text-neutral-500 mb-2">
<span>CLAUDE_SONNET_3.5</span>
</div>
<div className="h-8 bg-white/5 rounded-sm w-[70%] border border-white/5 group-hover:bg-white/10 transition-colors"></div>
</div>

<div className="group">
<div className="flex justify-between text-xs font-mono text-neutral-500 mb-2">
<span>GPT_4o</span>
</div>
<div className="h-8 bg-white/5 rounded-sm w-[65%] border border-white/5 group-hover:bg-white/10 transition-colors"></div>
</div>

<div className="group">
<div className="flex justify-between text-xs font-mono text-neutral-500 mb-2">
<span>GEMINI_FLASH_LATEST</span>
</div>
<div className="h-8 bg-white/5 rounded-sm w-[75%] border border-white/5 group-hover:bg-white/10 transition-colors"></div>
</div>

<div className="group relative">
<div className="flex justify-between text-xs font-mono text-orange-500 mb-2 font-bold">
<span>BROWSER_USE_1.0</span>
<span className="bg-orange-500 text-black px-1 rounded text-[10px]">10x CHEAPER</span>
</div>
<div className="h-10 bg-orange-600 rounded-sm w-[95%] shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] flex items-center px-4 relative overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,#000_25%,#000_50%,transparent_50%,transparent_75%,#000_75%,#000_100%)] bg-[size:10px_10px]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-6xl mx-auto">
<div className="flex justify-center mb-12">
<button className="bg-orange-500 hover:bg-orange-400 text-black font-semibold px-6 py-3 rounded text-sm transition-all">
                    Get Started Free
                </button>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="md:col-span-1 flex flex-col justify-end pb-2">
<div className="text-orange-500 text-xs font-mono mb-2">[ community ]</div>
<h3 className="text-xl font-medium text-white">Join our community</h3>
<p className="text-sm text-neutral-400 mt-2">Ask questions, share ideas and get inspired.</p>
</div>

<div className="bg-neutral-900/30 border border-white/10 p-6 rounded-lg text-center hover:bg-neutral-900/50 transition-colors group">
<i className="w-6 h-6 text-neutral-500 mx-auto mb-4 group-hover:text-white transition-colors" data-lucide="message-circle"></i>
<div className="text-2xl font-mono text-white mb-1">23.2k</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Discord</div>
</div>
<div className="bg-neutral-900/30 border border-white/10 p-6 rounded-lg text-center hover:bg-neutral-900/50 transition-colors group">
<i className="w-6 h-6 text-neutral-500 mx-auto mb-4 group-hover:text-white transition-colors" data-lucide="twitter"></i>
<div className="text-2xl font-mono text-white mb-1">27.0k</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Twitter</div>
</div>
<div className="bg-neutral-900/30 border border-white/10 p-6 rounded-lg text-center hover:bg-neutral-900/50 transition-colors group">
<i className="w-6 h-6 text-neutral-500 mx-auto mb-4 group-hover:text-white transition-colors" data-lucide="github"></i>
<div className="text-2xl font-mono text-white mb-1">78,235</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Github Stars</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6 relative z-10 text-sm">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">

<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="flex bg-orange-500 w-5 h-5 rounded-sm items-center justify-center">
<i className="text-black w-3 h-3" data-lucide="layers"></i>
</div>
<span className="font-medium text-white tracking-tight">WebRunner</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-2 text-neutral-500 font-mono text-xs">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                            All systems operational
                        </div>
</div>
</div>

<div className="flex flex-col gap-3">
<h4 className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-2">Documentation</h4>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Quickstart</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Guides</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-2">Company</h4>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-2">Legal</h4>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">SOC 2</a>
</div>
<div className="flex flex-col justify-start">
<div className="border border-white/10 rounded p-4 flex flex-col items-center justify-center text-center w-24 h-24 bg-neutral-900/50">
<i className="w-6 h-6 text-neutral-400 mb-2" data-lucide="shield"></i>
<span className="text-[10px] text-neutral-500 font-mono leading-tight">SOC 2<br/>Type 2</span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
<p className="text-xs text-neutral-600">© 2026 WebRunner. All rights reserved.</p>
<div className="text-neutral-600 text-xs font-mono mt-4 md:mt-0">
                    [ API FOR ANYTHING ]
                </div>
</div>
</div>
</footer>


    </>
  );
}
