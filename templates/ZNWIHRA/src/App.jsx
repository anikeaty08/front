import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Reveal dialog
    addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.getElementById('dialog').classList.remove('opacity-0', 'translate-y-6');
        lucide.createIcons();
      }, 100);
    });
    // Close dialog
    document.addEventListener('click', e => {
      if (e.target.id === 'closeBtn' || e.target.closest('#closeBtn')) {
        document.getElementById('dialog').classList.add('opacity-0', 'translate-y-6');
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 pointer-events-none">
<div className="w-full h-full blur-3xl" style={{background: 'radial-gradient(ellipse at 40% 60%,rgba(21,139,224,0.25),transparent 60%)'}}></div>
</div>

<div className="relative w-11/12 max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-xl ring-1 ring-white/20 shadow-2xl transition-all duration-700 opacity-0 translate-y-6" id="dialog">
<button className="absolute top-4 right-4 text-white/70 hover:text-white focus:outline-none" id="closeBtn">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Jellyfish Dialog</h2>
<p className="text-white/80 leading-relaxed mb-6">
      This translucent panel floats above the deep-sea background, softly glowing like a jellyfish in the abyss. Customize its contents or embed forms, media, or notifications here.
    </p>
<div className="flex gap-3">
<button className="flex-1 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-inset ring-white/20 font-medium transition-colors">Cancel</button>
<button className="flex-1 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 font-medium transition-colors">Confirm</button>
</div>

<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-60 h-60 blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle at 50% 50%,rgba(98,199,255,0.35),rgba(0,0,0,0) 70%)'}}></div>
</div>


    </>
  );
}
