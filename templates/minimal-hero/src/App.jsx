import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        // Rotating Typewriter Logic
        const words = ["landing page.", "SaaS dashboard.", "mobile app.", "portfolio."];
        let wordIndex = 0;
        const typewriterEl = document.getElementById('typewriter');
        
        setInterval(() => {
            wordIndex = (wordIndex + 1) % words.length;
            typewriterEl.style.opacity = 0;
            setTimeout(() => {
                typewriterEl.textContent = words[wordIndex];
                typewriterEl.style.opacity = 1;
            }, 200);
        }, 3000);

        // Input Reactivity Simulation
        const inputEl = document.getElementById('promptInput');
        const submitBtn = document.getElementById('submitBtn');
        const btnIcon = submitBtn.querySelector('iconify-icon');
        
        inputEl.addEventListener('input', (e) => {
            if(e.target.value.trim().length > 0) {
                submitBtn.classList.remove('bg-white/5', 'text-slate-500');
                submitBtn.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25', 'scale-105');
                btnIcon.classList.remove('group-hover:text-slate-300');
                btnIcon.classList.add('text-white');
            } else {
                submitBtn.classList.add('bg-white/5', 'text-slate-500');
                submitBtn.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25', 'scale-105');
                btnIcon.classList.add('group-hover:text-slate-300');
                btnIcon.classList.remove('text-white');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed inset-0 w-full h-full -z-20">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-screen bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]/80 pointer-events-none -z-10"></div>

<nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative z-20">
<div className="flex items-center gap-2 text-white font-semibold text-xl cursor-pointer tracking-tight">
<iconify-icon className="w-6 h-6 rotate-45 text-blue-400 text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<span>originator</span>
<span className="text-xs bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded border border-blue-500/30 uppercase tracking-widest self-start mt-0.5 font-medium">Beta</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full shadow-sm">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1" href="#">Pricing</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1" href="#">Careers</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1" href="#">
                Resources 
                <iconify-icon className="text-base mt-0.5" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<button className="bg-white text-slate-900 px-5 py-2 rounded-xl font-medium text-sm hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Sign in / Sign up
        </button>
</nav>

<main className="max-w-5xl mx-auto px-6 pt-24 pb-32 relative z-10 flex flex-col items-center text-center">

<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Think It. Type It. <br/>
<span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Launch It.</span>
</h1>
<p className="text-xl tracking-tight text-slate-400 mb-14 max-w-2xl mx-auto font-light">
            Build production-ready <span className="text-white border-b border-blue-500/50 pb-0.5 inline-flex items-center"><span className="font-normal" id="typewriter">landing page.</span><span className="blinker ml-[1px] font-light text-blue-400">|</span></span>
</p>

<div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl shadow-blue-900/10 mb-20 relative">
<div className="bg-[#0f172a]/90 rounded-2xl p-6 text-left border border-white/5">
<textarea className="w-full bg-transparent border-none focus:ring-0 text-slate-200 placeholder-slate-500 resize-none h-24 text-lg outline-none font-light" id="promptInput" placeholder="What can I build for you today?"></textarea>
<div className="flex items-center justify-between mt-4 pt-2 border-t border-white/5">
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:paperclip-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-slate-300 transition-colors">
<iconify-icon className="text-purple-400 text-sm" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
                            Import
                        </button>
</div>
<button className="p-2 rounded-xl transition-all duration-300 bg-white/5 text-slate-500 flex items-center justify-center w-10 h-10 group" id="submitBtn">
<iconify-icon className="text-xl group-hover:text-slate-300 transition-colors" icon="solar:arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-lg">
<p className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-8">Supported Frameworks</p>
<div className="flex gap-6 sm:gap-8">
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">React</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Next.js</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Vue</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Native</span>
</div>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center overflow-hidden relative shadow-lg">
<p className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-8 relative z-10">Powerful Integrations</p>

<div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#070b19] to-transparent z-10 pointer-events-none rounded-l-3xl"></div>
<div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#070b19] to-transparent z-10 pointer-events-none rounded-r-3xl"></div>
<div className="flex w-[200%] animate-marquee">

<div className="flex gap-6 sm:gap-8 justify-around w-1/2 px-4">
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:code-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Github</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Vercel</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">OpenAI</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Stripe</span>
</div>
</div>

<div className="flex gap-6 sm:gap-8 justify-around w-1/2 px-4">
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:code-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Github</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Vercel</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">OpenAI</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-white transition-colors" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">Stripe</span>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="absolute bottom-0 right-0 w-[40vw] h-[60vh] opacity-20 pointer-events-none overflow-hidden z-0">
<div className="absolute bottom-0 right-20 w-1 h-[80%] bg-gradient-to-t from-blue-500 via-transparent to-transparent shadow-[0_0_60px_rgba(59,130,246,0.6)]"></div>
<div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
</div>



    </>
  );
}
