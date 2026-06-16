import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
animation: {
'blob': 'blob 10s infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
}
}
}
}
}



        const cards = document.querySelectorAll('.spotlight-card');
        const container = document.getElementById('cards-container');

        if(container) {
            container.onmousemove = e => {
                for(const card of cards) {
                    const rect = card.getBoundingClientRect(),
                          x = e.clientX - rect.left,
                          y = e.clientY - rect.top;

                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                };
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 text-sm font-medium tracking-tight text-white/90 hover:text-white transition-colors" href="#">
<div className="w-5 h-5 bg-white text-black rounded flex items-center justify-center">
<span className="iconify" data-icon="lucide:zap" data-width="12"></span>
</div>
                SpeedWins
            </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#method">Method</a>
<a className="hover:text-white transition-colors" href="#customers">Customers</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-neutral-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full opacity-50 animate-blob mix-blend-screen pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="reveal inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-default" style={{animationDelay: '0.1s'}}>
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
<span>v2.0 Now Available</span>
</div>
<h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.05]" style={{animationDelay: '0.2s'}}>
                Automate your <br/>
<span className="text-neutral-500">entire workflow.</span>
</h1>
<p className="reveal text-lg text-neutral-400 font-light max-w-xl mx-auto mb-10 leading-relaxed tracking-tight" style={{animationDelay: '0.3s'}}>
                Build autonomous AI agents that handle support, sales, and operations. Ship to production in minutes, not months.
            </p>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4" style={{animationDelay: '0.4s'}}>
<button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-neutral-950 transition-all duration-300 hover:bg-neutral-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-950">
<span className="mr-2 text-sm tracking-tight">Start Building</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
<div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] bg-[0%_0%] group-hover:animate-shimmer"></div>
</button>
<button className="group inline-flex h-10 items-center justify-center rounded-md border border-neutral-800 bg-transparent px-8 text-sm font-medium text-neutral-300 transition-all hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-2 focus:ring-offset-neutral-950">
<span className="mr-2 iconify" data-icon="lucide:terminal" data-width="16"></span>
                    Documentation
                </button>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5 bg-neutral-950" id="features">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight mb-12 text-center">Engineered for scale</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="cards-container">

<div className="spotlight-card rounded-xl p-6 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Neural Processing</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Advanced inference engine optimized for low-latency responses across all major LLM providers.</p>
</div>

<div className="spotlight-card rounded-xl p-6 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Enterprise Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">SOC 2 Type II compliant with end-to-end encryption for all data in transit and at rest.</p>
</div>

<div className="spotlight-card rounded-xl p-6 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Real-time Events</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">WebSocket support for streaming responses and bi-directional communication channels.</p>
</div>

<div className="spotlight-card rounded-xl p-6 group md:col-span-2">
<div className="flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Visual Workflow Builder</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light max-w-md">
                                Drag and drop components to create complex logic flows without writing a single line of code. Connect APIs, databases, and AI models instantly.
                            </p>
</div>
<div className="mt-8 relative h-32 bg-neutral-900/50 rounded border border-white/5 overflow-hidden">

<div className="absolute top-4 left-4 right-4 h-2 bg-neutral-800 rounded-full w-3/4"></div>
<div className="absolute top-8 left-4 right-4 h-2 bg-neutral-800 rounded-full w-1/2"></div>
<div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:plus" data-width="16"></span>
</div>
</div>
</div>
</div>

<div className="spotlight-card rounded-xl p-6 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">API First</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Fully documented REST and GraphQL APIs for seamless integration into your existing stack.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div className="px-4">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">99.9%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Uptime</div>
</div>
<div className="px-4">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">50ms</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Latency</div>
</div>
<div className="px-4">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">500+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Integrations</div>
</div>
<div className="px-4">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Support</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-white">Ready to deploy?</h2>
<p className="text-neutral-400 font-light mb-8 text-lg">Join 10,000+ developers building the future of AI automation.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-neutral-600" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-md hover:bg-neutral-200 transition-colors whitespace-nowrap">
                    Get Access
                </button>
</form>
<p className="mt-4 text-[10px] text-neutral-600">No credit card required. Free tier available.</p>
</div>
</section>
<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-neutral-400 text-sm">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
<span>SpeedWins AI Inc.</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>



    </>
  );
}
