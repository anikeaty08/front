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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
lime: '#D3F36B',
dark: '#080808',
card: '#101010',
border: '#1F1F1F'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Modal Logic
        const modal = document.getElementById('gate-modal');
        const backdrop = document.getElementById('modal-backdrop');
        const panel = document.getElementById('modal-panel');

        function openModal() {
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('opacity-0', 'translate-y-8');
            }, 10);
        }

        function closeModal() {
            backdrop.classList.add('opacity-0');
            panel.classList.add('opacity-0', 'translate-y-8');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Auto open after 60s
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(openModal, 60000); 
        });

        // CSS Animation for Marquee
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
        `;
        document.head.appendChild(styleSheet);
    
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
      

<div className="fixed -translate-x-1/2 blur-[120px] pointer-events-none -z-10 w-[800px] h-[600px] rounded-full top-0 left-1/2"></div>


<section className="pt-0 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col text-center max-w-screen-xl mt-40 mr-auto ml-auto items-center">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 animate-pulse bg-orange-600 rounded-full"></div>
<span className="text-[11px] uppercase font-medium text-neutral-300 tracking-widest">Limited time </span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-medium text-white tracking-tight max-w-4xl mr-auto mb-8 ml-auto">
                Stop paying the <br/>
<span className="text-neutral-600">stupid tax.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mb-12">
                Building a fashion legacy isn't about viral moments. It's about structure, clarity, and stopping the financial bleed.
            </p>

<div className="w-full max-w-4xl mx-auto mb-12 relative group cursor-pointer rounded-[24px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
<div className="relative aspect-video bg-neutral-900 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="32"></iconify-icon>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="text-left">
<span className="inline-block px-2 py-1 rounded text-black text-[10px] font-bold uppercase tracking-widest mb-2 bg-orange-500">Preview</span>
<p className="text-white font-medium text-sm">Session 01: The Architecture of Brand</p>
</div>
<div className="text-white/60 text-xs font-mono">02:14 / 45:00</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="sm:w-auto transition-transform hover:-translate-y-1 hover:bg-orange-500 text-xl font-semibold text-black bg-orange-500 w-full rounded-lg pt-6 pr-10 pb-6 pl-10" onclick="openModal()">Get access now</button>
</div>
</div>
</section><div className="fixed z-50 flex w-full pr-4 pl-4 top-7 left-0 justify-center">
<nav className="glass-nav flex shadow-black/50 w-full max-w-[480px] border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-inner items-center justify-between">
<div className="flex z-[100] items-center">
<div className="flex text-[10px] font-semibold text-black bg-white w-8 h-8 rounded-full items-center justify-center">7
      </div>
<span className="text-sm font-medium text-white/90 tracking-tight ml-2">The Black Room</span>
</div>
<div className="flex gap-1 items-center">
<a className="hover:text-white transition-colors text-sm text-neutral-400 pt-2 pr-4 pb-2 pl-4" href="#">Mentorship</a>
<button className="transition-all hover:scale-105 active:scale-95 hover:bg-orange-500 text-sm font-medium text-black bg-orange-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" onclick="openModal()">
                    Join Waitlist
                </button>
</div>
</nav>
</div>

<section className="border-y overflow-hidden border-white/5 pt-12 pb-12">
<div className="max-w-screen-xl mx-auto px-6 mb-8 text-center">
<p className="uppercase text-xs font-medium text-neutral-500 tracking-widest">Industry Experience From</p>
</div>
<div className="flex overflow-x-hidden group relative">
<div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32 px-12 opacity-40 grayscale hover:opacity-100 transition-opacity duration-500">
<span className="text-xl font-serif italic text-white">Vogue</span>
<span className="text-xl font-sans font-semibold text-white">HYPEBEAST</span>
<span className="text-xl font-mono text-white">SSENSE</span>
<span className="text-xl font-serif text-white">GQ</span>
<span className="text-xl font-sans font-bold text-white">OFF-WHITE</span>
<span className="text-xl font-serif italic text-white">Vogue</span>
<span className="text-xl font-sans font-semibold text-white">HYPEBEAST</span>
<span className="text-xl font-mono text-white">SSENSE</span>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-6">
<div className="max-w-5xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
                    Inside The Black Room
                </h2>
<p className="text-sm md:text-base text-neutral-500 max-w-xs text-right md:text-left">
                    Curated environment for refinement.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-[#101010] border border-white/5 rounded-[32px] p-8 md:p-10 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/5 text-orange-500">
<iconify-icon icon="solar:compass-linear" width="24"></iconify-icon>
</div>
<div className="mt-32 relative z-10">
<h3 className="text-2xl font-medium text-white mb-2">Strategic Clarity</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                            We dismantle your current operation and rebuild it with logic. No more guessing. Transform chaos into a linear path.
                        </p>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
</div>

<div className="md:row-span-2 bg-[#101010] border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity"></div>
<div className="relative z-10 p-3 w-fit rounded-full bg-white/10 text-white backdrop-blur-md">
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white mb-2">Legacy</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                            Systems required to scale from a garage project to a multi-million dollar asset.
                        </p>
</div>
</div>

<div className="bg-[#101010] border border-white/5 rounded-[32px] p-8 flex flex-col justify-between hover:bg-[#151515] transition-colors group">
<div className="flex justify-between items-start">
<div className="p-3 rounded-full bg-[#1A1A1A] text-white group-hover:text-[#D3F36B] transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-1">Selective</h3>
<p className="text-neutral-500 text-xs">Builders, not dabblers.</p>
</div>
</div>

<div className="bg-[#101010] border border-white/5 rounded-[32px] p-8 flex flex-col justify-between hover:bg-[#151515] transition-colors group">
<div className="flex justify-between items-start">
<div className="p-3 rounded-full bg-[#1A1A1A] text-white group-hover:text-[#D3F36B] transition-colors">
<iconify-icon icon="solar:scissors-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">No Fluff</h3>
<p className="text-neutral-500 text-xs">Direct feedback. High impact.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative">
<div className="z-10 text-center max-w-screen-xl mr-auto ml-auto relative">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
                Are you ready?
            </h2>
<p className="text-lg text-neutral-500 mb-10 max-w-md mx-auto">
                The door is open for a limited time. Join the environment built for execution.
            </p>
<button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full text-sm font-semibold transition-all duration-300 hover:bg-orange-500" onclick="openModal()">
<span>Request Access</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
</div>
</section>

<footer className="border-white/5 border-t pt-12 pr-6 pb-12 pl-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-bold">7</div>
<span className="text-sm text-neutral-400">The Black Room</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</footer>



    </>
  );
}
