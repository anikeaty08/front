import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
playfair: ['"Playfair Display"', 'serif'],
geist: ['"Geist"', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
},
orange: {
450: '#fb923c',
550: '#ea580c',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'beam': 'beam-drop 7s infinite linear',
'beam-slow': 'beam-drop 10s infinite linear',
'shimmer': 'shimmer 3s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'scale(0.98)' },
'100%': { opacity: '1', transform: 'scale(1)' },
},
'beam-drop': {
'0%': { top: '-20%', opacity: '0' },
'10%': { opacity: '0.5' },
'50%': { opacity: '0.8' },
'90%': { opacity: '0.5' },
'100%': { top: '120%', opacity: '0' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navigation Logic
        let currentStep = 1;
        const totalSteps = 3;
        const indicator = document.getElementById('stepIndicator'); // Mobile only indicator
        
        // Select all prev/next buttons (both desktop and mobile)
        const prevBtns = document.querySelectorAll('.prev-btn');
        const nextBtns = document.querySelectorAll('.next-btn');

        function updateUI(step) {
            // Update Mobile Number Indicator if exists
            if(indicator) {
                indicator.textContent = `0${step}`;
                indicator.animate([
                    { opacity: 0.5, transform: 'translateY(5px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], { duration: 300, easing: 'ease-out' });
            }
        }

        // Attach listeners to all instances of buttons
        prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                } else {
                    currentStep = totalSteps;
                }
                updateUI(currentStep);
            });
        });

        nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep < totalSteps) {
                    currentStep++;
                } else {
                    currentStep = 1;
                }
                updateUI(currentStep);
            });
        });

        // Initialize
        updateUI(1);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-900 pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/60 backdrop-blur-xl">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
<iconify-icon className="text-neutral-950 relative z-10" icon="solar:leaf-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-white font-geist leading-none">Lumina</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
<span className="text-[9px] text-neutral-500 font-mono">v2.3</span>
</div>
</div>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors" href="#">Methodology</a>
<a className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors" href="#">Science</a>
<a className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors" href="#">Membership</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign In</a>
<button className="relative group px-5 py-2 rounded-full bg-white hover:bg-neutral-200 shadow-xl shadow-white/5 transition-all overflow-hidden">
<span className="relative z-10 text-[11px] font-semibold uppercase tracking-widest text-neutral-950 flex items-center gap-2">
                        Get Started
                        <iconify-icon className="text-neutral-950 stroke-[2]" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col lg:flex-row pt-20 relative max-w-[1600px] mx-auto w-full z-10 pb-20">

<div className="absolute inset-0 flex justify-between px-6 lg:px-12 pointer-events-none select-none overflow-hidden h-full">
<div className="h-full w-px bg-white/5 hidden lg:block relative"><div className="beam animate-beam" style={{animationDelay: '0s'}}></div></div>
<div className="h-full w-px bg-white/5 hidden lg:block relative"><div className="beam animate-beam" style={{animationDelay: '4s'}}></div></div>
</div>

<div className="flex-1 flex flex-col lg:pl-12 lg:pr-8 lg:pt-24 z-10 pt-16 pr-6 pb-12 pl-6 relative">
<div className="flex gap-6 mb-10 gap-x-6 gap-y-6 items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
<span className="text-[10px] uppercase font-semibold text-neutral-400 tracking-[0.2em] font-mono">Dr. Craig Fishel • The Wellness Center</span>
</div>
</div>
<h1 className="md:text-7xl xl:text-8xl leading-[0.95] text-6xl font-normal text-white tracking-tight font-playfair mb-8">
                Welcome to<br/>
<span className="italic text-neutral-200">Wellness,</span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-normal text-neutral-400 max-w-md border-l-2 border-orange-500 pl-6 mb-16">
                Curating eco-resilient alternatives for the modern body. We combine data-driven insights with holistic recovery protocols.
            </p>

<div className="grid grid-cols-1 mt-auto gap-x-3 gap-y-3" id="steps-container">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-mono font-bold">Selected Protocol</p>

<div className="flex border rounded-xl p-4 gap-4 items-center opacity-100 bg-neutral-900/40 border-white/10 cursor-default">
<div className="w-8 h-8 rounded-full border border-orange-500 bg-orange-500 text-white flex items-center justify-center text-[10px] font-semibold">01</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white">Physical Foundation</span>
<span className="text-[10px] text-neutral-500 font-mono mt-0.5">Somatic Strength &amp; Conditioning</span>
</div>
<div className="icon-wrapper ml-auto text-orange-500">
<iconify-icon icon="solar:dumbbell-large-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col justify-center w-40 relative z-20 border-l border-white/5 py-12">

<div className="absolute -left-[1px] top-0 bottom-0 overflow-hidden h-full w-2">
<div className="absolute left-0 w-[1px] h-48 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam-slow top-1/4"></div>
</div>

<div className="flex flex-col gap-12 pr-8 pl-8 gap-x-12 gap-y-12 translate-x-[5%] translate-y-[15%]">

<div className="group cursor-pointer">
<span className="block text-5xl font-playfair italic font-medium text-orange-500 text-glow tracking-tight">01</span>
<span className="block text-[9px] tracking-[0.2em] text-orange-500/50 uppercase mt-2 font-mono">Global</span>
</div>

<div className="group cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-300">
<span className="block text-5xl font-playfair italic font-medium text-white tracking-tight">02</span>
<span className="block text-[9px] tracking-[0.2em] text-neutral-500 uppercase mt-2 font-mono">Regional</span>
</div>

<div className="group cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-300">
<span className="block text-5xl font-playfair italic font-medium text-white tracking-tight">03</span>
<span className="block text-[9px] tracking-[0.2em] text-neutral-500 uppercase mt-2 font-mono">Local</span>
</div>
</div>

<div className="absolute bottom-12 w-full flex justify-center px-4">
<div className="flex items-center gap-3">
<button className="prev-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white group">
<i className="w-5 h-5 stroke-[1.5] group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left"></i>
</button>
<button className="next-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white group">
<i className="w-5 h-5 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="flex flex-col lg:w-[45%] lg:pl-12 lg:pr-12 z-10 py-12 px-6 relative justify-center">

<div className="w-full flex lg:hidden items-center mt-12 select-none mb-8">

<div className="flex items-center gap-5">
<button className="prev-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white group">
<i className="w-5 h-5 stroke-[1.5] group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left"></i>
</button>
<button className="next-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white group">
<i className="w-5 h-5 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="h-px bg-white/20 flex-1 mx-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
</div>

<div className="text-4xl font-playfair italic font-medium text-white tracking-tight tabular-nums" id="stepIndicator">01</div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[360px] w-full h-[720px] gap-x-6 gap-y-6 lg:-translate-x-[10%] lg:translate-y-[20%] transition-transform duration-700 ease-out">

<div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
<img alt="Strength" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full flex flex-col justify-end p-8">
<div className="flex flex-col gap-3">
<h2 className="text-2xl text-white font-playfair font-medium tracking-tight">Strength &amp; Form</h2>
<p className="text-neutral-400 text-xs font-geist leading-relaxed line-clamp-3">
                                Analyzing kinetic energy transfer and form optimization in real-time to ensure maximum efficiency during load-bearing exercises.
                            </p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] font-mono text-orange-500 uppercase tracking-wider">Protocol 01</span>
<div className="h-px w-8 bg-white/20"></div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
<div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<img alt="Mindfulness" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full flex flex-col justify-end p-8">
<div className="flex flex-col gap-3">
<h2 className="text-2xl text-white font-playfair font-medium tracking-tight">Mind &amp; Balance</h2>
<p className="text-neutral-400 text-xs font-geist leading-relaxed line-clamp-3">
                                Restore your parasympathetic nervous system through guided core alignment and breath-work analysis.
                            </p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Protocol 02</span>
<div className="h-px w-8 bg-white/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 w-full z-50 border-t border-white/5 bg-neutral-950/80 backdrop-blur-md h-12 flex items-center">
<div className="max-w-[1600px] mx-auto w-full px-6 lg:px-12 flex justify-between items-center">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
<iconify-icon className="text-white w-4 h-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-white">Secure Data</span>
</div>
<div className="hidden sm:flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
<iconify-icon className="text-white w-4 h-4" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-white">Clinical Accuracy</span>
</div>
</div>
<div className="flex items-center gap-4 border-l border-white/10 pl-6">
<button className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors" onclick="location.reload()">
<iconify-icon className="group-hover:-rotate-90 transition-transform duration-500" icon="solar:restart-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-wider">Reset</span>
</button>
</div>
</div>
</div>



    </>
  );
}
