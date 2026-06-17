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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
850: '#1f1f1f',
950: '#0a0a0a',
},
shadow: {
500: '#6366f1', // Indigo base
600: '#4f46e5',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Simple interaction for the CTA button to show simulated load state
        const btns = document.querySelectorAll('button');
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(!btn.classList.contains('no-anim')) {
                    const originalText = btn.innerHTML;
                    // Visual feedback only
                    btn.style.opacity = '0.7';
                    setTimeout(() => {
                        btn.style.opacity = '1';
                    }, 200);
                }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tighter text-lg">SHADOWDEVS</span>
<span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded">BETA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200 flex items-center gap-1.5" href="#sage">
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="sparkles"></i>
                    SageAI
                </a>
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm text-neutral-400 hover:text-white transition-colors">Login</button>
<button className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Start Project
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting New Clients
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Constructing the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 to-indigo-600">Digital Shadow.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                We build immersive web experiences, intelligent Discord bots, and cutting-edge applications using high-performance technologies.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-6 py-3 bg-neutral-900 text-white rounded-lg border border-neutral-700 hover:border-neutral-500 transition-all overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="flex items-center gap-2 text-sm font-medium">
                        Explore Services <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-6 py-3 text-neutral-400 hover:text-white text-sm font-medium transition-colors">
                    View Portfolio
                </button>
</div>

<div className="mt-20 relative h-64 w-full max-w-4xl mx-auto perspective-1000">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
<div className="w-full h-full border border-white/10 rounded-xl bg-neutral-900/40 backdrop-blur-sm transform rotate-x-12 scale-95 shadow-2xl flex items-center justify-center overflow-hidden animate-float">

<div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-50">
<div className="bg-white/5 rounded-lg h-32 w-full"></div>
<div className="bg-white/5 rounded-lg h-32 w-full col-span-2"></div>
<div className="bg-white/5 rounded-lg h-40 w-full col-span-3"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent"></div>
<div className="z-30 text-center">
<i className="w-12 h-12 text-indigo-400 mx-auto mb-2 opacity-80" data-lucide="box"></i>
<span className="text-sm font-mono text-indigo-300 tracking-widest">INITIALIZING RENDER...</span>
</div>
</div>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-neutral-950/50 backdrop-blur-sm py-8">
<div className="max-w-7xl mx-auto px-6 flex justify-center gap-12 flex-wrap opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><i className="w-5 h-5 fill-current" data-lucide="triangle"></i> <span className="font-semibold text-sm">Vercel</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="flame"></i> <span className="font-semibold text-sm">Firebase</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="atom"></i> <span className="font-semibold text-sm">React</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="box-select"></i> <span className="font-semibold text-sm">Three.js</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="gem"></i> <span className="font-semibold text-sm">Gemini AI</span></div>
</div>
</div>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-neutral-400 max-w-xl">We transform complex requirements into seamless digital solutions using the modern stack.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative p-6 bg-neutral-900/30 border border-white/5 hover:border-indigo-500/50 rounded-xl transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-indigo-600 transition-colors">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Discord Bots</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Advanced automation, moderation tools, and interactive gaming bots tailored for your community.</p>
</div>

<div className="group relative p-6 bg-neutral-900/30 border border-white/5 hover:border-indigo-500/50 rounded-xl transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-indigo-600 transition-colors">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Web Development</h3>
<p className="text-sm text-neutral-500 leading-relaxed">High-performance, responsive websites built with Next.js and React. SEO optimized and fast.</p>
</div>

<div className="group relative p-6 bg-neutral-900/30 border border-white/5 hover:border-indigo-500/50 rounded-xl transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-indigo-600 transition-colors">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">App Development</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Cross-platform mobile applications that provide native-like experiences on iOS and Android.</p>
</div>

<div className="group relative p-6 bg-neutral-900/30 border border-white/5 hover:border-indigo-500/50 rounded-xl transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-indigo-600 transition-colors">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Graphic Design</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Modern branding, UI/UX design, and visual assets that define your digital identity.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="sage">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs mb-4">
<i className="w-4 h-4" data-lucide="cpu"></i> POWERED BY GEMINI FREE API
                </div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">Meet SageAI.<br/>Your Intelligent Assistant.</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Integrated directly into our platform, SageAI leverages the power of advanced LLMs to guide you through our services, answer technical queries, and provide instant support.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-neutral-300">Real-time answers about our development stack.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-neutral-300">Instant quotes estimation via chat.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-neutral-300">Optimized for Firebase Spark hosting plan.</span>
</li>
</ul>
<button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Try SageAI Beta <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
<div className="glass rounded-2xl p-6 relative border border-white/10">

<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
<div>
<div className="text-sm font-medium text-white">SageAI</div>
<div className="text-[10px] text-green-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                                </div>
</div>
</div>
<i className="text-neutral-500 w-5 h-5" data-lucide="more-horizontal"></i>
</div>

<div className="space-y-4 h-64 overflow-hidden relative">

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-3 h-3 text-indigo-400" data-lucide="bot"></i>
</div>
<div className="bg-neutral-800/50 rounded-lg rounded-tl-none p-3 text-sm text-neutral-300 max-w-[85%] border border-white/5">
                                Hello! I'm SageAI. How can I assist you with ShadowDevs services today?
                            </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
<i className="w-3 h-3 text-neutral-400" data-lucide="user"></i>
</div>
<div className="bg-indigo-600 rounded-lg rounded-tr-none p-3 text-sm text-white max-w-[85%]">
                                Can you build a custom Discord bot with moderation?
                            </div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-3 h-3 text-indigo-400" data-lucide="bot"></i>
</div>
<div className="bg-neutral-800/50 rounded-lg rounded-tl-none p-3 text-sm text-neutral-300 max-w-[85%] border border-white/5 flex items-center gap-1">
<span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce"></span>
<span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.1s]"></span>
<span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
</div>

<div className="mt-4 relative">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-neutral-600" placeholder="Ask Sage..." type="text"/>
<button className="absolute right-2 top-2 p-1 bg-indigo-600 rounded text-white hover:bg-indigo-500">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-6 right-6 z-50">
<button className="group relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform">
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500 border-2 border-neutral-950"></span>
</span>
<i className="w-5 h-5 text-neutral-900 group-hover:text-indigo-600 transition-colors" data-lucide="message-square"></i>
</button>
</div>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Ready to elevate your digital presence?</h2>
<p className="text-neutral-400 mb-8">Join the list of forward-thinking brands working with ShadowDevs.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="enter@email.com" type="email"/>
<button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors" type="button">
                    Get Proposal
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
<div>
<span className="text-white font-semibold tracking-tighter text-lg block mb-2">SHADOWDEVS</span>
<p className="text-xs text-neutral-500">Premium Development &amp; AI Solutions</p>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 pt-8 border-t border-white/5">
<p>© 2024 ShadowDevs. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
