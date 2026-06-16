import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-grid mask-image-gradient"></div>

<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-800/30 rounded-full blur-[120px] animate-drift-slow mix-blend-screen"></div>
<div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] animate-drift-fast mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[30%] w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px] animate-drift-slow mix-blend-screen"></div>

<div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform -rotate-12 blur-sm"></div>
<div className="absolute top-3/4 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent transform rotate-12 blur-sm"></div>
</div>

<nav className="relative z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-white">mira.ai</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-neutral-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-base font-medium text-neutral-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-base font-medium text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-base font-medium text-neutral-400 hover:text-white transition-colors" href="#">Developers</a>
</div>

<div className="flex items-center gap-6">
<a className="text-base font-medium text-neutral-300 hover:text-white transition-colors" href="#">Sign in</a>
<button className="glass-btn border border-white/10 rounded-md px-4 py-2 text-sm font-medium text-white flex items-center gap-2 transition-all hover:border-white/20 group">
                    Try Mira
                    <i className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-32 w-full max-w-7xl mx-auto">

<div className="text-center max-w-5xl mx-auto space-y-8">

<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-medium tracking-tight">
<span className="text-white drop-shadow-lg">Perceive the future</span>
<br/>
<span className="text-white">of</span>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-800">intelligent systems.</span>
</h1>

<p className="text-xl md:text-2xl text-neutral-400 font-normal max-w-3xl mx-auto leading-relaxed antialiased">
                Orchestrate your entire data lifecycle with adaptive AI agents that see, reason, and act in real-time.
            </p>

<div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-lg mx-auto">
<div className="relative w-full">
<input className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3.5 text-base text-white placeholder-neutral-600 outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all shadow-inner" placeholder="name@company.com" type="email"/>
</div>

<button className="shiny-cta group whitespace-nowrap">
<span>
                        Start Building
                        <i className="w-4 h-4 text-white/70 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-300" data-lucide="arrow-right"></i>
</span>
</button>
</div>

<div className="pt-12 flex items-center justify-center gap-2 text-neutral-500">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shield-check"></i>
<span className="text-sm font-medium tracking-wide">ISO 27001 Certified &amp; GDPR Ready</span>
</div>
</div>
</main>



    </>
  );
}
