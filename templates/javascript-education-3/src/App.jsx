import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-4xl aspect-square sm:aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-white/5 flex flex-col">

<div className="h-10 bg-gray-800/40 border-b border-white/5 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="bg-gray-950/50 px-8 py-1 rounded-md text-[0.65rem] text-white/30 tracking-widest uppercase">
                setup.workspace.internal
            </div>
<div className="w-12"></div>
</div>

<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2">

<div className="p-8 border-b border-r border-white/5 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-500">
<div className="text-lg tracking-tighter font-semibold">
<span className="animate-word" style={{animationDelay: '0.1s'}}>A</span><span className="animate-word" style={{animationDelay: '0.15s'}}>S</span>
</div>
<div>
<h2 className="text-2xl tracking-tight font-light mb-2">
<span className="animate-word" style={{animationDelay: '0.2s'}}>Welcome</span>
<span className="animate-word" style={{animationDelay: '0.3s'}}>to</span>
<span className="animate-word" style={{animationDelay: '0.4s'}}>the</span>
<span className="animate-word" style={{animationDelay: '0.5s'}}>Studio.</span>
</h2>
<p className="text-xs text-white/40 leading-relaxed max-w-xs">
                        Prepare your creative environment with a few essential configurations.
                    </p>
</div>
</div>

<div className="p-8 border-b border-white/5 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500">
<div className="flex justify-end">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-gray-800">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" style={{fontSize: '1.25rem', color: 'white'}}></iconify-icon>
</div>
</div>
<div>
<h3 className="text-lg tracking-tight font-light mb-4">
<span className="animate-word" style={{animationDelay: '0.6s'}}>Personalize</span>
<span className="animate-word" style={{animationDelay: '0.7s'}}>Identity.</span>
</h3>
<div className="space-y-3">
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20" placeholder="Display name" type="text"/>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
<span className="text-[0.65rem] text-white/30 uppercase tracking-widest">Awaiting input</span>
</div>
</div>
</div>
</div>

<div className="p-8 border-r border-white/5 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500">
<div>
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" style={{fontSize: '1.25rem', color: 'white'}}></iconify-icon>
</div>
<div className="space-y-4">
<h3 className="text-lg tracking-tight font-light">
<span className="animate-word" style={{animationDelay: '0.8s'}}>Visual</span>
<span className="animate-word" style={{animationDelay: '0.9s'}}>Interface.</span>
</h3>
<div className="flex gap-4">
<button className="flex-1 py-4 border border-white/20 rounded-lg flex flex-col items-center gap-2 group/btn hover:bg-white hover:text-black transition-all duration-300">
<iconify-icon icon="solar:moon-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-widest font-medium">Dark</span>
</button>
<button className="flex-1 py-4 border border-white/5 rounded-lg flex flex-col items-center gap-2 text-white/30 hover:border-white/20 transition-all duration-300">
<iconify-icon icon="solar:sun-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-widest font-medium">Light</span>
</button>
</div>
</div>
</div>

<div className="p-8 flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500">
<div className="flex justify-between items-start">
<div className="text-[0.65rem] text-white/20 uppercase tracking-[0.2em] leading-tight">
                        Step 04/04<br/>Finalize
                    </div>
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" style={{fontSize: '1.25rem', color: 'white'}}></iconify-icon>
</div>
<div className="space-y-6">
<p className="text-xs text-white/40 italic">
                        "The details are not the details. They make the design."
                    </p>
<button className="w-full bg-white text-gray-950 py-3 rounded-md text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                        Enter Workspace
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]"></div>
</div>

    </>
  );
}
