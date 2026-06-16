import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



    (function() {
        const initScrollSpy = () => {
            const steps = document.querySelectorAll('.karnak-step');
            const phoneMockup = document.getElementById('karnak-phone-mockup');
            const phoneBadgeText = document.getElementById('karnak-phone-badge-text');
            const phoneBadgeDot = document.getElementById('karnak-phone-badge-dot');
            
            if (!steps.length) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const stepIndex = entry.target.getAttribute('data-step');
                        
                        // Deactivate all steps
                        steps.forEach(s => {
                            s.classList.remove('opacity-100', 'scale-100', 'grayscale-0', 'border-l-[#C09C6E]');
                            s.classList.add('opacity-30', 'scale-95', 'grayscale', 'border-l-transparent');
                            
                            const dot = s.querySelector('.step-dot');
                            if(dot) {
                                dot.classList.remove('bg-[#C09C6E]', 'text-black', 'border-[#C09C6E]');
                                dot.classList.add('bg-[#0a0a0a]', 'text-neutral-500', 'border-white/10');
                            }
                        });

                        // Activate current step
                        entry.target.classList.remove('opacity-30', 'scale-95', 'grayscale', 'border-l-transparent');
                        entry.target.classList.add('opacity-100', 'scale-100', 'grayscale-0', 'border-l-[#C09C6E]');
                        
                        // Activate internal dot
                        const activeDot = entry.target.querySelector('.step-dot');
                        if(activeDot) {
                            activeDot.classList.remove('bg-[#0a0a0a]', 'text-neutral-500', 'border-white/10');
                            activeDot.classList.add('bg-[#C09C6E]', 'text-black', 'border-[#C09C6E]');
                        }

                        // Animate RHS Phone based on active step
                        if(phoneMockup) {
                            // Reset base transforms
                            phoneMockup.classList.remove('rotate-y-12', '-rotate-y-12', 'rotate-0', 'scale-105', 'scale-100');
                            
                            if (stepIndex === '1') {
                                // Step 1: Speak - Listening Mode (Tilt Left)
                                phoneMockup.classList.add('-rotate-y-12', 'scale-100');
                                if(phoneBadgeText) phoneBadgeText.innerText = "Listening...";
                                if(phoneBadgeDot) {
                                    phoneBadgeDot.className = "w-2 h-2 bg-red-500 rounded-full relative z-10 animate-pulse";
                                }
                            } else if (stepIndex === '2') {
                                // Step 2: Orchestrate - Processing Mode (Tilt Right)
                                phoneMockup.classList.add('rotate-y-12', 'scale-100');
                                if(phoneBadgeText) phoneBadgeText.innerText = "Processing...";
                                if(phoneBadgeDot) {
                                    phoneBadgeDot.className = "w-2 h-2 bg-yellow-500 rounded-full relative z-10 animate-pulse";
                                }
                            } else if (stepIndex === '3') {
                                // Step 3: Execute - Success Mode (Front & Center)
                                phoneMockup.classList.add('rotate-0', 'scale-105');
                                if(phoneBadgeText) phoneBadgeText.innerText = "Confirmed";
                                if(phoneBadgeDot) {
                                    phoneBadgeDot.className = "w-2 h-2 bg-green-500 rounded-full relative z-10";
                                }
                            }
                        }
                    }
                });
            }, {
                root: null,
                rootMargin: '-40% 0px -40% 0px', // Adjusted to trigger animation exactly when centrally aligned
                threshold: 0.2
            });

            steps.forEach(step => observer.observe(step));
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initScrollSpy);
        } else {
            setTimeout(initScrollSpy, 100);
        }
    })();
    


        lucide
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#080808]/80 backdrop-blur-xl transition-all duration-500">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-[#C09C6E] rounded-full opacity-80"></div>
<div className="text-sm tracking-widest-custom font-medium text-white/90">KARNAK</div>
</div>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="text-[11px] uppercase hover:text-white transition-colors text-neutral-500 tracking-widest" href="#solution">Solution</a>
<a #how-it-works"="" className="text-[11px] uppercase tracking-wid=" href="/#howitworks">How it Works</a>
<a className="text-[11px] uppercase hover:text-white transition-colors text-neutral-500 tracking-widest" href="#ecosystem">Ecosystem</a>
<a className="text-[11px] uppercase hover:text-white transition-colors text-neutral-500 tracking-widest" href="#traction">Traction</a>
<a className="text-[11px] uppercase hover:text-white transition-colors text-neutral-500 tracking-widest" href="#roadmap">Roadmap</a>
</div>
<a className="text-[10px] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-500 text-neutral-300 tracking-widest border-white/10 border pt-2.5 pr-5 pb-2.5 pl-5" href="#invest">
    Book a call
</a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden bg-[#080808] pt-32 pb-20 relative items-center justify-start">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-spot pointer-events-none opacity-40"></div>
<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C09C6E]/10 via-transparent to-transparent opacity-40 w-[1000px] h-[600px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

<div className="flex flex-col z-10 w-full h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="flex flex-col fade-in-up z-20 text-center max-w-4xl mr-auto ml-auto items-center">
<h1 className="leading-[0.9] text-6xl font-semibold text-white tracking-tighter mb-5 md:text-8xl md:mb-6 lg:text-[110px]">
                    Your world opens
                </h1>
<p className="md:text-lg leading-relaxed text-base font-light text-neutral-400 tracking-wide max-w-lg mr-auto ml-auto">
                    The intelligent luxury concierge that remembers every preference, handles every request, delivers instantly.
                </p>
<button className="inline-flex hover:bg-[#8C7A63] transition-colors shadow-[#9E8B75]/10 cursor-pointer text-sm font-medium text-white bg-[#9E8B75] rounded-full mt-4 mb-20 pt-3 pr-8 pb-3 pl-8 shadow-lg items-center justify-center" onclick="window.location.href='https://calendly.com/d/ctkr-74g-dpb/karnak-backer-s-circle-intro-call'" role="button">Book a call</button></div>

<div className="w-full mt-12 mb-8 z-20 relative fade-in-up delay-200">
<div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] relative w-full aspect-video group">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://pub-08d30e47c28c41188d492405f65a1557.r2.dev/v4%20-%20Only%20footages.mov"></video>

<div className="absolute inset-0 bg-gradient-to-t from-[#080808]/20 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="md:max-w-[360px] md:mt-8 z-10 fade-in-up delay-300 group w-full max-w-[300px] mt-8 relative perspective-normal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-[#C09C6E]/10 blur-[80px] rounded-full pointer-events-none opacity-60 mix-blend-screen transition-opacity duration-700 group-hover:opacity-80"></div>

<div className="animate-float transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1 -ml-[20%] w-[140%] relative">


<div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 rounded-[40px]"></div>
</div>
</div>

<div className="mt-[-40px] md:mt-[-60px] relative z-30 fade-in-up delay-500 pointer-events-auto">
<div className="flex flex-col md:flex-row items-center justify-center mx-auto gap-6 md:gap-10 bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] px-8 py-6 md:px-10 md:py-5 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-white/20 hover:scale-[1.01] hover:shadow-[0_40px_80px_-12px_rgba(0,0,0,0.9)] cursor-default md:w-fit w-full">

<div className="flex items-center gap-3 md:pr-4">
<div className="w-2 h-2 rounded-full bg-[#C09C6E] animate-pulse"></div>
<span className="text-neutral-500 font-medium text-xs uppercase tracking-[0.2em] whitespace-nowrap">Quantum Temple</span>
</div>

<div className="h-12 w-px bg-white/10 hidden md:block"></div>

<div className="h-px w-full bg-white/10 md:hidden"></div>

<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto justify-between">

<div className="flex flex-col items-center md:items-start gap-0.5">
<span className="text-white font-semibold text-2xl md:text-3xl tracking-tight leading-none">$5.78M</span>
<span className="text-neutral-500 text-[10px] md:text-xs font-medium uppercase tracking-widest">Revenue</span>
</div>

<div className="h-10 w-px bg-white/10 hidden md:block"></div>

<div className="flex flex-col items-center md:items-start gap-0.5">
<span className="text-white font-semibold text-2xl md:text-3xl tracking-tight leading-none">Government</span>
<span className="text-neutral-500 text-[10px] md:text-xs font-medium uppercase tracking-widest">Backed</span>
</div>

<div className="h-10 w-px bg-white/10 hidden md:block"></div>

<div className="flex flex-col items-center md:items-start gap-0.5">
<span className="text-white font-semibold text-2xl md:text-3xl tracking-tight leading-none">Zero</span>
<span className="text-neutral-500 text-[10px] md:text-xs font-medium uppercase tracking-widest">CAC</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
</div>
</section>

<section className="border-white/[0.03] bg-[#0a0a0a] border-t pt-32 pr-6 pb-20 pl-6" id="philosophy">
<div className="flex flex-col max-w-6xl mr-auto ml-auto">

<div className="grid md:grid-cols-2 gap-20 w-full items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] glass-panel rounded-sm relative overflow-hidden flex items-center justify-center p-8 group">
<div className="absolute inset-0 z-20 h-full w-full bg-[#050505]">
<img alt="Stressed business traveler overwhelmed by logistics" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecd63c10-a394-45a6-b469-6a2100a6ed6b_1600w.png"/>
<div className="bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute inset-0 overflow-hidden pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent z-10"></div>

<div className="absolute inset-0 opacity-80 z-0">

<div className="absolute -top-6 -left-6 w-52 h-36 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-lg transform -rotate-12 flex flex-col p-4 shadow-2xl opacity-60">
<div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
<div className="ml-auto w-12 h-1 bg-white/10 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="w-1/2 h-1.5 bg-white/20 rounded-full"></div>
<div className="w-full h-12 bg-white/5 rounded-sm border border-white/5 flex items-center justify-center">
<svg className="text-white/20" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
</div>
</div>
</div>

<div className="absolute top-24 -right-8 w-44 h-auto bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-lg transform rotate-6 p-3 shadow-xl flex flex-col gap-2 opacity-70">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
<svg className="text-red-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4"></path><path d="M12 16h.01"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="h-1.5 w-16 bg-white/30 rounded-full"></div>
</div>
<div className="h-1 w-full bg-white/10 rounded-full"></div>
<div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
</div>

<div className="absolute bottom-24 -left-8 w-48 h-48 bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 rounded-xl transform rotate-3 p-4 shadow-2xl opacity-50">
<div className="flex justify-between items-center mb-3">
<div className="w-8 h-1.5 bg-white/30 rounded-full"></div>
<div className="w-12 h-1.5 bg-white/10 rounded-full"></div>
</div>
<div className="grid grid-cols-4 gap-2">
<div className="h-8 bg-white/5 rounded-sm border border-white/5"></div>
<div className="h-8 bg-white/5 rounded-sm border border-white/5"></div>
<div className="h-8 bg-red-500/10 rounded-sm border border-red-500/20 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(239,68,68,0.1)_2px,rgba(239,68,68,0.1)_4px)]"></div>
</div>
<div className="h-8 bg-white/5 rounded-sm border border-white/5"></div>
<div className="h-8 bg-white/5 rounded-sm border border-white/5"></div>
<div className="h-8 bg-white/5 rounded-sm border border-white/5"></div>
</div>
</div>

<div className="absolute -bottom-10 right-0 w-64 h-48 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg transform -rotate-3 p-1 overflow-hidden opacity-40">
<div className="w-full h-full rounded bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
<div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
<div className="relative w-3 h-3">
<div className="absolute inset-0 bg-red-500 rounded-full opacity-50 animate-ping"></div>
<div className="relative w-3 h-3 bg-red-500 rounded-full"></div>
</div>
</div>

<svg className="absolute top-1/2 left-1/3 w-32 h-16 pointer-events-none" style={{transform: 'translate(6px, 6px)'}}>
<path d="M0 0 Q 15 15, 30 5 T 60 10" fill="none" stroke="rgba(255,255,255,0.2)" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
<div className="relative z-10 w-full max-w-[280px] space-y-4">
<div className="bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 p-4 rounded-sm flex items-center gap-4 shadow-2xl transform transition-transform group-hover:scale-105 duration-500">
<svg className="lucide lucide-alert-octagon w-4 h-4 text-neutral-400 stroke-[1.5]" data-lucide="alert-octagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M12 8v4"></path><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"></path></svg>
<div className="space-y-1.5">
<p className="text-[10px] uppercase tracking-widest text-neutral-500">Error</p>
<p className="text-xs text-white font-light">Optimization Failed: Too many apps.</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-[10px] uppercase block flex items-center gap-3 font-semibold text-[#C09C6E] tracking-[0.2em] mb-6">
<span className="w-8 h-px bg-[#C09C6E]/40"></span>
                        The Friction
                    </span>
<h2 className="md:text-5xl leading-[1.1] text-3xl font-semibold text-white tracking-tight-custom mb-8">You didn't build wealth  <span className="text-neutral-500">to travel like anyone else.</span></h2>
<div className="md:text-lg leading-relaxed text-base font-normal text-neutral-400 max-w-md space-y-6">
<p className="">Move $10M with a text. Travel still takes 6 apps, 20 tabs, 5 hours lost before departure.
Luxury travel trapped in the email era. You've automated everything. Except this.</p>
</div>
</div>
</div>

<div className="overflow-hidden min-h-[480px] flex group text-center w-full z-0 rounded-2xl ring-white/10 ring-1 relative items-center justify-center">

<div className="bg-center transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-40 mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="flex flex-col overflow-hidden z-20 text-center pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Airport Terminal" className="block bg-center z-0 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2fc5bfc-8383-437d-a2f5-1a701b90f49d_1600w.png"/>
<div className="z-0 bg-center pointer-events-none opacity-60 mix-blend-overlay w-full h-full absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp'}}></div>
<div className="-translate-x-1/2 -translate-y-1/2 blur-[120px] pointer-events-none z-0 w-[600px] h-[600px] rounded-full absolute top-1/2 left-1/2"></div>
<div className="z-10 fade-in-up max-w-5xl mr-auto ml-auto relative space-y-8">
<h2 className="md:text-6xl lg:text-7xl leading-[1.05] text-4xl font-medium text-white tracking-tighter">
            You're not tired of traveling.
            <span className="text-neutral-500">You're tired of traveling like everyone else.</span>
</h2>
<p className="text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-xl mx-auto tracking-wide">
            Travel was not built for people operating at your speed.
        </p>
</div>
</div>

<div className="z-10 fade-in-up delay-100 max-w-3xl pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 mb-6 border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#C09C6E]"></span>
<span className="text-[10px] uppercase tracking-widest text-white/80">Philosophy</span>
</div>
<h3 className="relative -mx-6 w-[calc(100%+3rem)] min-h-[80vh] flex flex-col items-center justify-center rounded-3xl overflow-hidden mb-6 group isolate shadow-2xl ring-1 ring-white/10">

<img alt="Background Texture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 -z-20 opacity-80" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 -z-10 backdrop-blur-[1px]"></div>

<div className="-z-10 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0"></div>

<div className="transform transition-all duration-700 group-hover:-translate-y-2 text-center max-w-4xl pr-8 pl-8 space-y-8">
<span className="inline-block text-[11px] uppercase font-medium text-white/90 tracking-[0.2em] bg-white/10 border-white/10 border rounded-full mb-4 pt-1.5 pr-4 pb-1.5 pl-4 shadow-lg backdrop-blur-md">
            The Philosophy
        </span>
<div className="space-y-4">
<span className="block md:text-5xl text-3xl font-light text-white/60 tracking-tight">
                You're not tired of traveling.
            </span>
<span className="block md:text-7xl lg:text-8xl leading-[0.9] text-5xl font-semibold text-white tracking-tighter drop-shadow-2xl">
                You're tired of traveling <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C09C6E] via-[#e5cba6] to-[#C09C6E]">like everyone else.</span>
</span>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-light max-w-xl mx-auto leading-relaxed pt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
            Reclaim your sovereignty. The world is waiting for your command.
        </p>
</div>
</h3>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#080808] pt-0 pb-32 relative" id="solution">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C09C6E] opacity-[0.04] blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight-custom mb-6">Your personal OS for <span className="text-[#C09C6E]">travel</span></h2>
<p className="md:text-base text-sm font-normal text-neutral-500 max-w-xl mr-auto ml-auto">KARNAK is command infrastructure for UHNW lifestyles. The network you wish you had, compressed into an intelligent operating system.</p>
<img alt="Karnak Interface" className="block w-full h-auto object-contain z-10 relative drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbdb4b72-fa6e-49b9-9fe1-17a98c60daee_800w.png"/></div>

<div className="w-full relative fade-in-up delay-100">

<div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-20 pointer-events-none md:block hidden"></div>
<div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-20 pointer-events-none md:block hidden"></div>
<div className="hidden"></div>
</div>
</div>
</section>

<section className="border-white/[0.03] overflow-hidden bg-[#080808] border-t pt-0 pr-6 pl-6" id="benefits">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="text-[10px] uppercase block font-semibold text-[#C09C6E] tracking-[0.2em] mb-4">BENEFITS</span>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight-custom">Your personal command O.S across everything that matters </h2>
</div>
</div>


<div className="fade-in-up delay-200">


<div className="flex overflow-x-auto gap-6 snap-x snap-mandatory no-scrollbar -mx-6 md:mx-0 md:px-0 pr-6 pb-12 pl-6 gap-x-6 gap-y-6">

<div className="relative flex-none w-[85vw] md:w-[420px] h-[600px] rounded-[2rem] overflow-hidden group snap-center border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

<img alt="Move" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

<div className="flex flex-col z-10 bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f38d14c6-4899-4c93-bf20-68a3a962d9a7_1600w.jpg)] bg-cover pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-lg group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-gem text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>
</div>
<div className="">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C09C6E] font-medium mb-4 block">Anticipation</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-8 drop-shadow-lg">We predict before you ask.</h3>
<div className="w-12 h-px bg-white/40 mb-6"></div>
<p className="leading-relaxed text-base font-light text-neutral-200 drop-shadow-md">Flight delays detected. Reservations adjusted. Gifts coordinated from conversations months ago. AI-powered behavioral learning.</p>
</div>
</div>
</div>

<div className="relative flex-none w-[85vw] md:w-[420px] h-[600px] rounded-[2rem] overflow-hidden group snap-center border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<img alt="Access" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="flex flex-col z-10 bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7deace-5ecb-46e8-8c46-4802248f91e4_1600w.jpg)] bg-cover pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-lg group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-key text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg>
</div>
<div className="">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C09C6E] font-medium mb-4 block">Exclusivity</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-8 drop-shadow-lg">Access wealth alone cannot buy.</h3>
<div className="w-12 h-px bg-white/40 mb-6"></div>
<p className="leading-relaxed text-base font-light text-neutral-200 drop-shadow-md">Government clearances. UNESCO sites. Vatican dinners. Pyramid sunrise ceremonies. Institutional relationships built over 5+ years.</p>
</div>
</div>
</div>

<div className="relative flex-none w-[85vw] md:w-[420px] h-[600px] rounded-[2rem] overflow-hidden group snap-center border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<img alt="Dine" className="transition-transform duration-700 group-hover:scale-105 opacity-80 w-full h-full z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="flex flex-col z-10 bg-center bg-slate-900 h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1721b6ad-7afa-4568-aa10-8d8d352e1d78_1600w.jpg)] bg-cover pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-lg group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-utensils text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<div className="">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C09C6E] font-medium mb-4 block">Intelligence</span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-8 drop-shadow-lg">Vectorized memory of your rhythm</h3>
<div className="w-12 h-px bg-white/40 mb-6"></div>
<p className="leading-relaxed text-lg font-light text-neutral-200 drop-shadow-md">Room preferences. Dietary needs. Celebration dates. Every interaction informs the next. Compounding intelligence that learns you.</p>
</div>
</div>
</div>

<div className="relative flex-none w-[85vw] md:w-[420px] h-[600px] rounded-[2rem] overflow-hidden group snap-center border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<img alt="Recover" className="transition-transform duration-700 group-hover:scale-105 opacity-80 w-full h-full z-10 absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="flex flex-col z-10 h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d66c8240-cde4-4133-b0ba-50f088d3ca96_1600w.webp)] bg-cover bg-center pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-lg group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-activity text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<div className="">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C09C6E] font-medium mb-4 block">Infrastructure</span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-8 drop-shadow-lg">Seamless execution across continents.</h3>
<div className="w-12 h-px bg-white/40 mb-6"></div>
<p className="leading-relaxed text-base font-light text-neutral-200 drop-shadow-md">Multi-timezone coordination. Ministry relationships across 10+ countries. Instant delivery anywhere. Infrastructure that scales impossible access</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/[0.03] bg-[#050505] border-t pt-9 pr-6 pb-0 pl-6" id="howitworks">
<div className="max-w-7xl mr-auto ml-auto">

<div className="mb-24 max-w-2xl">
<span className="text-[10px] uppercase block font-semibold text-[#C09C6E] tracking-[0.2em] mb-4">HOW IT WORKS</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                One conversation. 
                <span className="text-neutral-500">Everything handled.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 lg:gap-24 mb-32 relative items-start">


<div className="flex flex-col pt-0 pb-20 relative">

<div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

<div className="space-y-[60vh]">

<div className="karnak-step relative flex gap-10 transition-all duration-700 ease-out border-l-4 pl-6 -ml-7" data-step="1">
<div className="flex-none flex flex-col items-center pt-2">
<div className="step-dot w-14 h-14 rounded-full border flex items-center justify-center text-sm font-medium z-10 shadow-[0_0_30px_rgba(192,156,110,0.1)] relative transition-colors duration-500">
                        01
                    </div>
</div>
<div className="pt-3 w-full">
<h3 className="text-3xl text-white font-medium mb-6 tracking-tight">Speak</h3>

<div className="p-6 bg-white/[0.03] border border-white/[0.05] rounded-3xl backdrop-blur-md mb-8 group-hover:border-[#C09C6E]/30 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full animate-[pulse_3s_ease-in-out_infinite]"></div>
<div className="flex items-center gap-5 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#C09C6E]/10 flex items-center justify-center text-[#C09C6E] animate-pulse">
<svg className="lucide lucide-mic" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<div className="space-y-2">
<div className="h-1.5 w-40 bg-[#C09C6E]/40 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="h-1.5 w-24 bg-[#C09C6E]/20 rounded-full animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
</div>
</div>
<p className="text-[#C09C6E] text-base italic font-light tracking-wide leading-relaxed mt-6 pl-4 border-l-2 border-[#C09C6E]/30">"Italy, September 15-25, anniversary trip—want something special."</p>
</div>
<p className="text-neutral-400 text-base leading-relaxed max-w-md font-light">No forms. No search. Just natural language via voice note or text. We ingest intent, not just dates.</p>
</div>
</div>

<div className="karnak-step relative flex gap-10 transition-all duration-700 ease-out border-l-4 pl-6 -ml-7" data-step="2">
<div className="flex-none flex flex-col items-center pt-2">
<div className="step-dot w-14 h-14 rounded-full border flex items-center justify-center text-sm font-medium z-10 relative transition-colors duration-500">
                        02
                    </div>
</div>
<div className="pt-3 w-full">
<h3 className="text-3xl text-white font-medium mb-6 tracking-tight">Orchestrate</h3>

<div className="mb-8 relative h-24 w-full max-w-sm overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
<div className="absolute inset-0 flex items-center justify-around opacity-50">
<div className="w-px h-full bg-white/5"></div>
<div className="w-px h-full bg-white/5"></div>
<div className="w-px h-full bg-white/5"></div>
</div>
<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C09C6E] to-transparent shadow-[0_0_10px_#C09C6E]"></div>
<div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#C09C6E] rounded-full -translate-y-1/2 shadow-[0_0_15px_#C09C6E]"></div>
<div className="absolute top-1/2 left-3/4 w-2 h-2 bg-[#C09C6E] rounded-full -translate-y-1/2 shadow-[0_0_15px_#C09C6E]"></div>
</div>
<p className="text-neutral-400 text-base leading-relaxed max-w-md font-light">ARIA coordinates across time zones, inventory, and partnerships simultaneously. 3-5 hours of traditional booking compressed into seconds of computation.</p>
</div>
</div>

<div className="karnak-step relative flex gap-10 transition-all duration-700 ease-out border-l-4 pl-6 -ml-7" data-step="3">
<div className="flex-none flex flex-col items-center pt-2">
<div className="step-dot w-14 h-14 rounded-full border flex items-center justify-center text-sm font-medium z-10 relative transition-colors duration-500">
                        03
                    </div>
</div>
<div className="pt-3 w-full">
<h3 className="text-3xl text-white font-medium mb-6 tracking-tight">Execute</h3>
<div className="flex items-center gap-4 mb-8">
<div className="px-4 py-2 rounded-lg bg-[#C09C6E]/10 border border-[#C09C6E]/20 text-[#C09C6E] text-xs font-medium tracking-wider uppercase">Confirmed</div>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-white/40 text-xs font-mono">0.4s latency</span>
</div>
<p className="text-neutral-400 text-base leading-relaxed max-w-md font-light">Access Quantum Temple's network: $3.1M in hotel power, cultural partnerships, and government clearances.</p>
</div>
</div>
</div>
</div>


<div className="hidden md:flex sticky h-[60vh] top-[20vh] items-center justify-center">
<div className="group w-[380px] relative perspective-dramatic">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C09C6E]/20 via-[#C09C6E]/5 to-transparent blur-[120px] rounded-full pointer-events-none opacity-60 mix-blend-screen"></div>

<div className="absolute top-20 -right-10 w-24 h-24 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm animate-[float_6s_ease-in-out_infinite] delay-700"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm animate-[float_8s_ease-in-out_infinite_reverse]"></div>

<div className="z-10 transform transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-[1.02] transform-style-preserve-3d relative" id="karnak-phone-mockup">
<img alt="Karnak App in Hand" className="w-full h-auto object-contain relative drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7168fa7-6eb3-43ff-b76c-dbd7ab42a7eb_800w.png"/>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-[3rem]"></div>
</div>

<div className="-translate-x-1/2 z-20 flex gap-3 transition-all duration-300 bg-[#0a0a0a]/80 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 absolute bottom-12 left-1/2 shadow-2xl backdrop-blur-xl gap-x-3 gap-y-3 items-center" id="karnak-phone-badge">
<div className="relative">
<div className="w-2 h-2 bg-green-500 rounded-full relative z-10" id="karnak-phone-badge-dot"></div>
<div className="absolute inset-0 bg-current rounded-full animate-ping opacity-50"></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-white font-medium min-w-[80px] text-center" id="karnak-phone-badge-text">Confirmed</span>
</div>
</div>
</div>
</div>

<div className="border-white/5 border-t pt-320" id="ecosystem">
<div className="max-w-4xl mx-auto text-center mb-24">
<h2 className="md:text-5xl leading-[1.1] text-3xl font-medium text-white tracking-tight mb-6">
                    We built the first regenerative travel ecosystem. 
                    <span className="text-neutral-500">Now we're unlocking agentic AI to scale it.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-16 relative gap-x-8 gap-y-8 items-stretch">

<div className="group md:p-10 hover:border-white/20 transition-colors flex flex-col overflow-hidden bg-[#0a0a0a] h-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">

<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl pointer-events-none"></div>

<div className="z-10 flex flex-col h-full relative">

<div className="flex mb-8 items-start justify-between">

<div className="inline-flex gap-2 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-1.5 gap-x-2 gap-y-2 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#10b981] ml-1 animate-pulse"></div>
<span className="text-[10px] uppercase font-medium text-neutral-300 tracking-widest">ECOSYSTEM</span>
</div>

<div className="text-right">
</div>
</div>

<h3 className="text-4xl text-white tracking-tight font-playfair mb-6">Quantum Temple</h3>
<p className="leading-relaxed text-sm font-light text-neutral-400 max-w-2xl mb-8">5+ years of institutional trust &amp; ministerial endorsements

$4.5M in tourism revenue routed on-chain to real-world communities. B2G access to closed-door cultural sites. B2B expeditions for HNWs. Curated hotels with exclusive access.

Government partnerships across Indonesia, Cambodia, Egypt. UNESCO clearances.</p>

<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-10 shadow-2xl bg-[#030303] group select-none">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] opacity-80"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.15]">
<svg className="text-white w-[120%] h-[120%] blur-[1px]" fill="currentColor" viewbox="0 0 800 400">
<path d="M150,150 C130,120 160,80 190,100 C220,120 250,180 230,220 C210,240 170,200 150,150 Z"></path> 
<path d="M240,250 C260,240 350,250 390,270 C410,280 350,300 240,270 Z"></path> 
<path d="M270,180 C280,140 330,130 370,150 C380,200 350,220 320,230 C290,220 270,180 270,180 Z"></path> 
<path d="M400,190 C410,160 440,150 460,170 C470,200 450,220 420,220 C430,200 400,190 400,190 Z"></path> 
<path d="M550,200 C590,180 670,190 690,230 C670,250 590,240 550,200 Z"></path> 

<circle cx="420" cy="275" r="4"></circle>
<circle cx="440" cy="275" r="4"></circle>
<circle cx="460" cy="272" r="4"></circle>
</svg>
</div>

<div className="absolute inset-0 z-0 pointer-events-none">
<svg className="w-full h-full stroke-white/10" fill="none" strokeWidth="1">

<path d="M200 200 C 200 180, 150 150, 150 120" stroke-dasharray="4 4"></path>
<path d="M400 250 C 400 200, 400 180, 400 100" stroke-dasharray="4 4"></path>
<path d="M600 220 C 600 180, 650 150, 650 120" stroke-dasharray="4 4"></path>

<circle cx="200" cy="200" fill="#1a1a1a" r="3" stroke="#C09C6E" strokeWidth="1.5"></circle>
<circle cx="400" cy="250" fill="#1a1a1a" r="3" stroke="#C09C6E" strokeWidth="1.5"></circle>
<circle cx="600" cy="220" fill="#1a1a1a" r="3" stroke="#C09C6E" strokeWidth="1.5"></circle>
</svg>
</div>

<div className="z-10 flex flex-col md:p-8 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="relative w-full h-full max-w-5xl flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full text-white/5 fill-current pointer-events-none transform scale-90 md:scale-100" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 500">

<path d="M120 180 L160 140 L220 160 L240 240 L180 280 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<path d="M230 290 L380 270 L420 290 L400 330 L250 320 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<path d="M320 120 L420 110 L450 160 L430 220 L350 230 L310 180 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<path d="M470 160 L500 140 L520 180 L500 210 L540 230 L480 240 L460 200 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<path d="M650 180 L750 160 L800 200 L760 250 L680 240 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<path d="M430 310 L550 300 L580 320 L540 330 L440 330 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
</svg>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 500">
<defs>
<lineargradient id="lineGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(255,255,255,0)"></stop>
<stop offset="20%" stop-color="rgba(255,255,255,0.2)"></stop>
<stop offset="100%" stop-color="#C09C6E"></stop>
</lineargradient>
</defs>

<path className="opacity-50" d="M220 200 L 220 260 L 300 300" fill="none" stroke="url(#lineGradient)" stroke-dasharray="2 4" strokeWidth="1"></path>
<circle className="animate-pulse" cx="300" cy="300" fill="#C09C6E" r="3"></circle>

<path className="opacity-50" d="M500 180 L 500 280 L 480 310" fill="none" stroke="url(#lineGradient)" stroke-dasharray="2 4" strokeWidth="1"></path>
<circle className="animate-pulse" cx="480" cy="310" fill="#C09C6E" r="3"></circle>

<path className="opacity-50" d="M780 200 L 780 260 L 550 315" fill="none" stroke="url(#lineGradient)" stroke-dasharray="2 4" strokeWidth="1"></path>
<circle className="animate-pulse" cx="550" cy="315" fill="#C09C6E" r="3"></circle>
</svg>

<div className="flex z-20 pointer-events-auto w-full h-full absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<style className="">
        /* Hide the Quantum Temple text overlay which is the next sibling */
        [data-element-id="aura-emkbj2sb12ll58s7q"] + div { display: none !important; }
    </style>

<svg className="pointer-events-none z-0 overflow-visible w-full h-full absolute top-0 right-0 bottom-0 left-0">
<defs className="">
<lineargradient className="" id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(192, 156, 110, 0)"></stop>
<stop offset="50%" stop-color="rgba(192, 156, 110, 0.3)"></stop>
<stop offset="100%" stop-color="rgba(192, 156, 110, 0)"></stop>
</lineargradient>
<marker id="dot" markerheight="5" markerwidth="5" refx="5" refy="5" viewbox="0 0 10 10">
<circle cx="5" cy="5" fill="#C09C6E" r="3"></circle>
</marker>
</defs>

<path className="opacity-60" d="M250,300 Q400,250 500,320" fill="none" stroke="url(#lineGradient)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="opacity-60" d="M500,320 Q650,280 800,250" fill="none" stroke="url(#lineGradient)" stroke-dasharray="4 4" strokeWidth="1"></path>

<line className="" stroke="rgba(255,255,255,0.05)" stroke-dasharray="2 2" strokeWidth="1" x1="250" x2="250" y1="300" y2="400"></line>
<line className="" stroke="rgba(255,255,255,0.05)" stroke-dasharray="2 2" strokeWidth="1" x1="500" x2="500" y1="320" y2="420"></line>
<line stroke="rgba(255,255,255,0.05)" stroke-dasharray="2 2" strokeWidth="1" x1="800" x2="800" y1="250" y2="350"></line>
</svg>

<div className="absolute top-[40%] left-[10%] md:left-[15%] group cursor-pointer z-10 flex items-center">
<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-[#C09C6E]/10 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center shadow-2xl group-hover:border-[#C09C6E] transition-colors duration-300">
<svg className="lucide lucide-landmark w-4 h-4 text-neutral-400 group-hover:text-[#C09C6E] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
</div>
</div>

<div className="-translate-x-1/2 group cursor-pointer z-20 flex flex-col absolute top-[60%] left-1/2 items-center">
<div className="flex w-16 h-16 relative items-center justify-center">

<div className="absolute inset-0 border border-dashed border-[#C09C6E]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>

<div className="border-white/5 border rounded-full absolute top-[-4px] right-[-4px] bottom-[-4px] left-[-4px]"></div>
<div className="flex group-hover:shadow-[0_0_40px_rgba(192,156,110,0.3)] group-hover:border-[#C09C6E] transition-all duration-300 bg-[#0A0A0A] w-12 h-12 border-[#C09C6E]/40 border rounded-full relative shadow-[0_0_30px_rgba(192,156,110,0.15)] items-center justify-center">
<svg className="lucide lucide-crown w-[20px] h-[20px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(192, 156, 110)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
</div>
</div>

<div className="md:right-[15%] group cursor-pointer z-10 flex flex-row-reverse absolute top-[35%] right-[10%] items-center">
<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center shadow-2xl group-hover:border-blue-400/50 transition-colors duration-300">
<svg className="lucide lucide-mountain w-4 h-4 text-neutral-400 group-hover:text-blue-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</div>
</div>
</div>

<div className="absolute top-[40%] left-[10%] w-1.5 h-1.5 bg-[#C09C6E] rounded-full shadow-[0_0_8px_#C09C6E] animate-[movePath1_4s_linear_infinite]" style={{animationName: 'movePath1'}}>
<style>
            @keyframes movePath1 {
                0% { top: 40%; left: 15%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 60%; left: 50%; opacity: 0; }
            }
        </style>
</div>
</div>

<div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-30 flex flex-col items-center pointer-events-none fade-in-up delay-200">

<svg className="w-64 h-12 overflow-visible mb-2" viewbox="0 0 200 40">
<path className="opacity-30" d="M0 0 C 40 40, 90 40, 100 40 C 110 40, 160 40, 200 0" fill="none" stroke="url(#lineGradient)" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<circle cx="100" cy="40" fill="#C09C6E" r="1.5"></circle>
</svg>
<div className="text-center space-y-2">
<div className="flex items-center justify-center gap-3">
<span className="h-px w-8 bg-gradient-to-r from-transparent to-white/30"></span>
<h2 className="text-xl md:text-3xl font-normal tracking-[0.4em] text-white uppercase font-sans">Quantum Temple</h2>
<span className="h-px w-8 bg-gradient-to-l from-transparent to-white/30"></span>
</div>
<p className="text-[8px] md:text-[10px] tracking-[0.3em] text-[#C09C6E] uppercase font-medium opacity-90">Ecosystem Network</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none z-0">
<span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">Quantum Temple Ecosystem</span>
<div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
</div>
</div>

<div className="border-white/10 border-t mt-auto">
<p className="text-[10px] tracking-widest uppercase text-neutral-500 mb-4 font-semibold">Partners</p>
<div className="flex flex-wrap gap-2 gap-x-2 gap-y-2">
<span className="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] text-[10px] text-neutral-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-default whitespace-nowrap">Studio Mirai</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] text-[10px] text-neutral-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-default whitespace-nowrap">Ta'aktana, Luxury Collection</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] text-[10px] text-neutral-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-default whitespace-nowrap">Wonderful Indonesia</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] text-[10px] text-neutral-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-default whitespace-nowrap">Ministry of Creative Economy</span>
<span className="text-[10px] hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-default whitespace-nowrap text-neutral-400 border-white/10 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3">Garuda</span>
</div>
</div>
</div>
</div>

<div className="group md:p-10 hover:border-white/20 transition-colors flex flex-col overflow-hidden bg-[#0a0a0a] h-full border-white/10 border rounded-3xl pt-10 pr-10 pb-10 pl-10 relative">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C09C6E]/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
<div className="z-10 flex flex-col h-full relative">

<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-[#C09C6E]/10 flex items-center justify-center border border-[#C09C6E]/20 text-[#C09C6E]">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
</div>
<span className="text-[10px] uppercase font-semibold text-[#C09C6E] tracking-[0.2em]">PRODUCT</span>
</div>

<h3 className="leading-tight text-3xl font-medium text-white tracking-tight mb-6">The AI layer that makes it instant.</h3>
<p className="leading-relaxed text-sm font-light text-neutral-400 max-w-sm mb-12">The front-facing concierge superapp. <span className="text-white">Agentic AI</span> trained on real traveler behavior. Voice-first execution: One voice note → full itinerary

Same-day confirmations, zero manual work

Compounding memory across every trip</p>

<div className="mt-auto relative w-full aspect-[4/3] rounded-2xl bg-[#0F0F0F] border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors flex items-center justify-center">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0F0F0F] overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<img alt="Karnak App Mockup" className="z-10 transition-transform duration-700 hover:scale-[1.15] w-full h-full object-contain relative scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/637f10a9-3800-4e36-84f9-6b621c10cb14_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none"></div>
</div>

<div className="relative w-[85%] h-full top-8 bg-[#111] rounded-t-xl border-t border-x border-white/10 shadow-2xl p-4 flex flex-col gap-3 opacity-80">
<div className="flex items-center justify-between">
<div className="w-1/3 h-2 bg-white/10 rounded-full"></div>
<div className="w-6 h-6 rounded-full bg-white/5"></div>
</div>
<div className="flex bg-white/5 w-full h-32 border-white/5 border rounded-lg items-center justify-center">
<svg className="text-neutral-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
<div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="border-white/[0.03] bg-[#050505] border-t pt-32 pr-6 pb-0 pl-6" id="roadmap">
<div className="max-w-7xl mr-auto ml-auto">
<div className="mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight-custom text-white mb-2 leading-[1.15]">
                    We're not building a concierge app. <br/>
<span className="text-neutral-500">We're building the OS.</span>
</h2>
</div>
<div className="relative mb-40">
<div className="hidden md:block absolute top-[15px] left-0 w-full h-px bg-gradient-to-r from-[#C09C6E] via-white/20 to-transparent"></div>
<div className="block md:hidden absolute left-[15px] top-0 w-px h-full bg-gradient-to-b from-[#C09C6E] via-white/20 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 gap-x-16 gap-y-16">

<div className="md:pl-0 md:pt-12 pl-12 relative">
<div className="absolute top-0 left-[15px] -translate-x-1/2 md:left-0 md:top-[15px] md:-translate-y-1/2 w-8 h-8 bg-[#050505] border border-[#C09C6E] rounded-full z-10 flex items-center justify-center shadow-[0_0_15px_rgba(192,156,110,0.3)]">
<div className="w-2 h-2 bg-[#C09C6E] rounded-full animate-pulse"></div>
</div>
<div className="space-y-3">
<span className="text-[10px] uppercase tracking-widest text-[#C09C6E] block">12 Months</span>
<h3 className="text-lg text-white font-medium">Consumer Layer</h3>
<p className="text-sm text-neutral-400 leading-relaxed min-h-[80px]">
                                Karnak becomes the AI concierge layer for HNW travelers. 100K+ active travelers.
                            </p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:pt-12">
<div className="absolute top-0 left-0 w-8 h-8 md:-translate-y-1/2 md:-translate-x-1/2 bg-[#050505] border border-white/20 rounded-full z-10 flex items-center justify-center group-hover:border-white transition-colors">
<div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
</div>
<div className="space-y-3">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 block">24 Months</span>
<h3 className="text-lg text-white font-medium">Infrastructure Layer</h3>
<p className="text-sm text-neutral-400 leading-relaxed min-h-[80px]">
                                Every Web3 platform, private bank, and luxury brand that wants to do travel licenses our infrastructure.
                            </p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:pt-12">
<div className="absolute top-0 left-0 w-8 h-8 md:-translate-y-1/2 md:-translate-x-1/2 bg-[#050505] border border-white/20 rounded-full z-10 flex items-center justify-center group-hover:border-white transition-colors">
<div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
</div>
<div className="space-y-3">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 block">36 Months</span>
<h3 className="text-lg text-white font-medium">Regenerative Layer</h3>
<p className="text-sm text-neutral-400 leading-relaxed min-h-[80px]">
                                Governments use our platform to activate destinations. Revenue-share models. Tourism boards pay us.
                            </p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:pt-12">
<div className="absolute top-0 left-0 w-8 h-8 md:-translate-y-1/2 md:-translate-x-1/2 bg-[#050505] border border-white/20 rounded-full z-10 flex items-center justify-center group-hover:border-white transition-colors">
<svg className="lucide lucide-flag w-3 h-3 text-white" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</div>
<div className="space-y-3">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Eventually</span>
<h3 className="text-lg text-white font-medium">The Standard</h3>
<p className="text-sm text-neutral-400 leading-relaxed min-h-[80px]">
                                When you think 'luxury travel, done right,' you think one word: Karnak.
                            </p>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-20 md:pl-0 border-white/5 border-t mt-20 mb-20 pt-32 pl-6 gap-x-20 gap-y-20 items-center">

<div className="max-w-xl">
<div className="flex gap-3 mb-6 items-center">
<span className="w-8 h-px bg-white/20"></span>
<span className="text-[10px] uppercase font-semibold text-white/60 tracking-[0.2em]">INVENTORY</span>
</div>
<h3 className="md:text-5xl leading-[1.1] text-3xl font-medium text-white tracking-tight mb-6">Access to the world's most exclusive <span className="text-neutral-500">properties</span></h3>
<p className="leading-relaxed text-lg font-light text-neutral-400 mb-8">Direct partnerships with 100+ Tier-1 hospitality brands give you privileged access, preferential rates, and experiences you won't find anywhere else</p>
<div className="flex flex-wrap gap-2 text-xs font-medium text-white/50">
<span className="px-3 py-1 border border-white/10 rounded-full bg-white/5">Orient Express</span>
<span className="px-3 py-1 border border-white/10 rounded-full bg-white/5">Clinique La Prairie</span>
<span className="px-3 py-1 border border-white/10 rounded-full bg-white/5">Aman</span>
</div>
</div>

<div className="lg:mt-0 group flex flex-col gap-0 w-full max-w-md mt-12 mr-auto ml-auto relative gap-x-0 gap-y-0 items-center">

<div className="relative w-full z-10">
<div className="group/card border-white/[0.08] transition-all duration-300 hover:border-[#C09C6E]/30 bg-[#080808] w-full border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">


<div className="flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="w-1 h-1 rounded-full bg-[#C09C6E]"></div>
<span className="text-[10px] uppercase text-[#C09C6E] tracking-widest font-mono">LUXURY PROPERTIES</span>
</div>
<div className="flex items-baseline gap-1">
<h3 className="text-3xl font-medium text-white tracking-tight">1,800</h3>
<span className="text-xl text-[#C09C6E] font-light">+</span>
</div>
<p className="text-xs font-light text-neutral-500 mt-0.5">Luxury Properties</p>
</div>
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-neutral-400 group-hover/card:text-[#C09C6E] group-hover/card:border-[#C09C6E]/20 transition-all">
<svg className="lucide lucide-building-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
</div>
</div>
</div>

<div className="h-8 w-px bg-white/[0.06] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#C09C6E]/50 to-transparent -translate-y-full animate-[drop_2s_infinite]"></div>
</div>

<div className="relative w-full z-10">

<div className="absolute -top-3 -right-3 z-20">
<div className="w-7 h-7 bg-[#080808] border border-white/[0.08] rounded-full flex items-center justify-center shadow-lg">
<svg className="text-[#C09C6E] animate-spin" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>
<div className="group/card relative w-full bg-[#080808] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/30 shadow-2xl">


<div className="flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="w-1 h-1 rounded-full bg-[#C09C6E]"></div>
<span className="text-[10px] uppercase text-[#C09C6E] tracking-widest font-mono">GLOBAL AIRLINES INTEGRATED</span>
</div>
<div className="flex items-baseline gap-1">
<h3 className="text-3xl font-medium text-white tracking-tight">380</h3>
<span className="text-xl text-[#C09C6E] font-light">+</span>
</div>
<p className="text-xs font-light text-neutral-500 mt-0.5">Global Airlines</p>
</div>
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-neutral-400 group-hover/card:text-[#C09C6E] group-hover/card:border-[#C09C6E]/20 transition-all">
<svg className="lucide lucide-plane" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="m20.2 20.2-2.9-2.9"></path><path d="m20.2 5 2.9 2.9"></path><path d="a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><path d="M12 12 2 2"></path></svg>
</div>
</div>
</div>
</div>

<div className="hidden"></div>
<style>
        @keyframes drop {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
    </style>
<div className="group/card border-white/[0.08] transition-all duration-300 hover:border-blue-500/30 bg-[#080808] w-full border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">


<div className="flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="w-1 h-1 rounded-full bg-[#C09C6E]"></div>
<span className="text-[10px] uppercase text-[#C09C6E] tracking-widest font-mono">PRE-LAUNCH REVENUE</span>
</div>
<div className="flex items-baseline gap-1">
<h3 className="text-3xl font-medium text-white tracking-tight">$697K</h3>
<span className="text-xl text-[#C09C6E] font-light">+</span>
</div>
<p className="text-xs font-light text-neutral-500 mt-0.5">IN 5-MONTHS</p>
</div>
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-neutral-400 group-hover/card:text-[#C09C6E] group-hover/card:border-[#C09C6E]/20 transition-all">
<svg className="lucide lucide-plane" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="m20.2 20.2-2.9-2.9"></path><path d="m20.2 5 2.9 2.9"></path><path d="a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><path d="M12 12 2 2"></path></svg>
</div>
</div>
</div></div>
</div>

<div className="grid lg:grid-cols-2 gap-20 md:pl-0 border-white/5 border-t mb-40 pt-0 pl-6 gap-x-20 gap-y-20 items-center">

<div className="order-1">
<div className="flex gap-3 mb-6 items-center">
<span className="w-8 h-px bg-white/20"></span>
<span className="text-[10px] uppercase font-semibold text-white/60 tracking-[0.2em]">OUR ADVANTAGE</span>
</div>
<h3 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
                        Data is our <span className="text-neutral-500">next play.</span>
</h3>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
                        We guide high-value travelers through personalized trips—capturing behavior, preferences, and spending across B2C, B2B, and B2G. This creates an intent-rich, high-value dataset that no one else has.
                    </p>
<div className="space-y-8">

<div className="bg-white/5 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<h4 className="uppercase text-xs font-medium text-white tracking-widest mb-4">The QT Data Flywheel</h4>
<div className="flex flex-col gap-3 relative">
<div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10"></div>
<div className="flex items-start gap-4">
<div className="w-3.5 h-3.5 mt-0.5 rounded-full bg-[#C09C6E] flex-shrink-0 border-2 border-[#0A0A0A] relative z-10"></div>
<div className="">
<p className="text-sm font-medium text-white">High-value traveller behaviour</p>
<p className="text-xs text-neutral-500 mt-1">User data + AI-assisted data + Stakeholder data</p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="w-3.5 h-3.5 mt-0.5 rounded-full bg-neutral-700 flex-shrink-0 border-2 border-[#0A0A0A] relative z-10"></div>
<div className="">
<p className="text-sm font-medium text-white">Intent-rich high value datasets</p>
<p className="text-xs text-neutral-500 mt-1">Feeds into contextual intelligence engine</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-3.5 h-3.5 mt-0.5 rounded-full bg-neutral-700 flex-shrink-0 border-2 border-[#0A0A0A] relative z-10"></div>
<div className="">
<p className="text-sm font-medium text-white">Value Creation</p>
<p className="text-xs text-neutral-500 mt-1">Better AI personalization + experiences + partner conversion</p>
</div>
</div>
</div>
</div>

<div className="">
<h4 className="text-[10px] uppercase font-semibold text-neutral-500 tracking-widest mb-4">Monetization Channels</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
<div className="group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-[#C09C6E] transition-colors flex items-center gap-2">
<svg className="lucide lucide-arrow-up-right w-3 h-3 text-neutral-600 group-hover:text-[#C09C6E] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                        Governments
                                    </div>
<div className="text-xs text-neutral-500 leading-relaxed">Economic planning, regenerative tourism, HNW travel strategies</div>
</div>
<div className="group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-[#C09C6E] transition-colors flex items-center gap-2">
<svg className="lucide lucide-arrow-up-right w-3 h-3 text-neutral-600 group-hover:text-[#C09C6E] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                        Luxury Brands
                                    </div>
<div className="text-xs text-neutral-500 leading-relaxed">Intent-based HNW user profiling, targeted activations</div>
</div>
<div className="group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-[#C09C6E] transition-colors flex items-center gap-2">
<svg className="lucide lucide-arrow-up-right w-3 h-3 text-neutral-600 group-hover:text-[#C09C6E] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                        Hospitality Groups
                                    </div>
<div className="text-xs text-neutral-500 leading-relaxed">Personalized experiences, premium upselling</div>
</div>
<div className="group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-[#C09C6E] transition-colors flex items-center gap-2">
<svg className="lucide lucide-arrow-up-right w-3 h-3 text-neutral-600 group-hover:text-[#C09C6E] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                        Investment &amp; Real Estate
                                    </div>
<div className="text-xs text-neutral-500 leading-relaxed">Capital allocation trends from traveling investors</div>
</div>
</div>
</div>
<div className="border-white/5 border-t pt-6">
</div>
</div>
</div>

<div className="order-2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#C09C6E]/10 via-transparent to-transparent blur-[80px] rounded-full pointer-events-none"></div>

<div className="relative aspect-square w-full max-w-md mx-auto">

<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-8 border border-white/5 rounded-full border-dashed opacity-50"></div>
<div className="absolute inset-24 border border-white/5 rounded-full opacity-30"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#111] border border-[#C09C6E]/40 shadow-[0_0_40px_rgba(192,156,110,0.15)] flex flex-col items-center justify-center z-20">
<div className="w-16 h-16 rounded-full bg-[#C09C6E]/10 flex items-center justify-center mb-2">
<svg className="lucide lucide-database w-6 h-6 text-[#C09C6E]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<span className="text-[10px] font-semibold text-white uppercase tracking-widest text-center">KarnakIntelligence</span>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#0A0A0A] border border-white/10 rounded-full flex flex-col items-center justify-center z-20 shadow-xl group hover:border-[#C09C6E]/50 transition-colors">
<svg className="lucide lucide-users w-4 h-4 text-white mb-1 group-hover:text-[#C09C6E] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="text-[8px] text-neutral-400 uppercase tracking-widest text-center group-hover:text-white transition-colors">UserData</span>
</div>

<div className="absolute bottom-[15%] right-[5%] w-20 h-20 bg-[#0A0A0A] border border-white/10 rounded-full flex flex-col items-center justify-center z-20 shadow-xl group hover:border-[#C09C6E]/50 transition-colors">
<svg className="lucide lucide-cpu w-4 h-4 text-white mb-1 group-hover:text-[#C09C6E] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
<span className="text-[8px] text-neutral-400 uppercase tracking-widest text-center group-hover:text-white transition-colors">AIAnalysis</span>
</div>

<div className="absolute bottom-[15%] left-[5%] w-20 h-20 bg-[#0A0A0A] border border-white/10 rounded-full flex flex-col items-center justify-center z-20 shadow-xl group hover:border-[#C09C6E]/50 transition-colors">
<svg className="lucide lucide-building-2 w-4 h-4 text-white mb-1 group-hover:text-[#C09C6E] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="text-[8px] text-neutral-400 uppercase tracking-widest text-center group-hover:text-white transition-colors">StakeholderInput</span>
</div>

<div className="animate-[spin_10s_linear_infinite] absolute top-0 right-0 bottom-0 left-0">
<div className="w-2 h-2 bg-[#C09C6E] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#C09C6E]"></div>
</div>
</div>

<div className="mt-12 relative max-w-sm mx-auto">
<div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C09C6E] to-transparent opacity-50"></div>
<p className="text-sm text-neutral-400 font-light italic leading-relaxed pl-4">
                             "Trained on years of high-value traveler behavior—B2C to B2G—to deliver truly contextual intelligence."
                         </p>
</div>
</div>
</div>

<div className="overflow-hidden flex flex-col bg-[#080808] border-white/10 border-t pt-0 pb-0 relative items-center" id="invest">
<div className="z-10 flex flex-col text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<h2 className="md:text-7xl leading-[0.95] text-4xl font-semibold text-white tracking-tighter mb-6">
            Exclusive invitation to be our
            <span className="block text-white/30">backer's circle.</span>
</h2>
<p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto mb-12">
            We're optimizing for strategic capital—investors who can open doors in luxury, crypto, travel, or Web3 infrastructure.
        </p>
<button className="inline-flex hover:bg-[#8C7A63] transition-colors shadow-[#9E8B75]/10 cursor-pointer text-sm font-medium text-white bg-[#9E8B75] rounded-full mb-20 pt-3 pr-8 pb-3 pl-8 shadow-lg items-center justify-center" onclick="window.location.href='https://calendly.com/d/ctkr-74g-dpb/karnak-backer-s-circle-intro-call'" role="button">Book a call</button>
<div className="w-full mx-auto group relative perspective-dramatic">
<img alt="App Mockup" className="z-10 w-full h-auto object-contain relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7168fa7-6eb3-43ff-b76c-dbd7ab42a7eb_800w.png"/>
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent z-20 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#080808] border-white/5 border-t pt-0 pb-12">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-12 md:gap-8 mb-16 gap-x-10 gap-y-10">
<div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col gap-6 gap-x-6 gap-y-6">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-[#C09C6E] rounded-full opacity-80"></div>
<span className="text-[11px] tracking-[0.2em] font-semibold text-white/90 uppercase">Karnak</span>
</div>
<p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs">
                        The intelligent concierge layer for the sovereign individual.
                    </p>
</div>
<div className="col-span-1 md:col-span-2 lg:col-span-2">
<h4 className="text-[10px] font-semibold text-white uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-3">
<li className=""><a className="hover:text-[#C09C6E] transition-colors text-xs text-neutral-500" href="/#solution">SOLUTION</a></li>
<li className=""><a className="hover:text-[#C09C6E] transition-colors text-xs text-neutral-500" href="#capabilities">HOW IT WORKS</a></li><li className=""><a className="hover:text-[#C09C6E] transition-colors text-xs text-neutral-500" href="#capabilities">ECOSYSTEM</a></li>
</ul>
<li className=""></li></div>
<div className="col-span-1 md:col-span-2 lg:col-span-2">
<h4 className="text-[10px] font-semibold text-white uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3">
<li className=""><a className="hover:text-[#C09C6E] transition-colors text-xs text-neutral-500" href="#invest">TRACTION</a></li>
<li className=""><a className="hover:text-[#C09C6E] transition-colors text-xs text-neutral-500" href="#">rOADMAP</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-white/5 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2024 Karnak Systems Inc. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
