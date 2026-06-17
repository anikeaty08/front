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



        lucide.createIcons();

        function switchTab(tab) {
            const btn1 = document.getElementById('btn-whitelabel');
            const btn2 = document.getElementById('btn-yourself');
            const content1 = document.getElementById('content-whitelabel');
            const content2 = document.getElementById('content-yourself');

            const activeBtnClass = "relative rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 ease-in-out hover:text-slate-900 z-10 w-48 text-center";
            const inactiveBtnClass = "relative rounded-full px-8 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200 ease-in-out z-10 w-48 text-center hover:bg-white/50";

            if(tab === 'whitelabel') {
                btn1.className = activeBtnClass;
                btn2.className = inactiveBtnClass;
                content1.classList.remove('hidden');
                content1.classList.add('fade-enter');
                content2.classList.add('hidden');
                content2.classList.remove('fade-enter');
            } else {
                btn2.className = activeBtnClass;
                btn1.className = inactiveBtnClass;
                content2.classList.remove('hidden');
                content2.classList.add('fade-enter');
                content1.classList.add('hidden');
                content1.classList.remove('fade-enter');
            }
        }

        function switchSolutionTab(step) {
            // Reset all tabs styling
            for(let i=1; i<=3; i++) {
                const btn = document.getElementById(`sol-tab-${i}`);
                const content = document.getElementById(`sol-content-${i}`);
                const progressBar = btn.querySelector('.h-full.bg-blue-600');
                
                // Content Visibility
                if(i === step) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }

                // Button Styling
                if(i === step) {
                    // Active State
                    btn.classList.remove('border-slate-200');
                    btn.classList.add('border-blue-600', 'shadow-xl', 'shadow-blue-900/5');
                    btn.querySelector('.absolute').classList.replace('opacity-0', 'opacity-100');
                    btn.querySelector('span').classList.remove('text-slate-500');
                    btn.querySelector('span').classList.add('text-blue-600');
                    progressBar.classList.remove('w-0');
                    progressBar.classList.add('w-full');
                } else {
                    // Inactive State
                    btn.classList.add('border-slate-200');
                    btn.classList.remove('border-blue-600', 'shadow-xl', 'shadow-blue-900/5');
                    btn.querySelector('.absolute').classList.replace('opacity-100', 'opacity-0');
                    btn.querySelector('span').classList.add('text-slate-500');
                    btn.querySelector('span').classList.remove('text-blue-600');
                    progressBar.classList.add('w-0');
                    progressBar.classList.remove('w-full');
                }
            }
        }

        function switchUseCase(index) {
            // Buttons
            const buttons = document.querySelectorAll('.uc-tab');
            buttons.forEach(btn => {
                const btnIndex = parseInt(btn.getAttribute('data-index'));
                if(btnIndex === index) {
                    btn.classList.remove('text-slate-400', 'hover:text-white', 'bg-transparent');
                    btn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                } else {
                    btn.classList.add('text-slate-400', 'hover:text-white', 'bg-transparent');
                    btn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                }
            });

            // Content
            const contents = document.querySelectorAll('.use-case-content');
            contents.forEach(content => {
                if(content.id === `uc-${index}`) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        }
    
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
      


<main className="lg:pt-32 overflow-hidden pt-20 pb-0 relative bg-white">
<style>
            @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
            @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
            @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
            @property --gradient-shine { syntax: "<color>"; initial-value: #ffffff; inherits: false; }
            
            .shiny-cta {
                --gradient-angle: 0deg;
                --gradient-angle-offset: 0deg;
                --gradient-percent: 20%;
                --gradient-shine: #ffffff;
                position: relative;
                overflow: hidden;
                border-radius: 0.75rem;
                padding: 0 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ffffff;
                background: linear-gradient(#2563eb, #2563eb) padding-box, 
                            conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #60a5fa 5%, var(--gradient-shine) 15%, #60a5fa 30%, transparent 40%, transparent 100% ) border-box;
                border: 1px solid transparent;
                box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2), 0 4px 6px -4px rgba(37, 99, 235, 0.2), inset 0 1px 0 0 rgba(255,255,255,0.2);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
                isolation: isolate;
                animation: border-spin 2.5s linear infinite;
            }
            
            .shiny-cta:hover {
                transform: translateY(-2px);
                box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 8px 10px -6px rgba(37, 99, 235, 0.3);
            }
            
            @keyframes border-spin { to { --gradient-angle: 360deg; } }
            @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} }
            
            .shiny-cta::before {
                content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0;
                --size: calc(100% - 10px); --position: 2px; --space: 4px; width: var(--size); height: var(--size);
                background: radial-gradient(circle at var(--position) var(--position), rgba(255,255,255,0.2) 0.5px, transparent 0) padding-box;
                background-size: var(--space) var(--space); background-repeat: space;
                mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black );
                border-radius: inherit; opacity: 0.4;
            }
            
            .shiny-cta::after {
                content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1;
                width: 100%; aspect-ratio: 1; 
                background: linear-gradient(-50deg, transparent, #93c5fd, transparent);
                mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.3;
                animation: shimmer 4s linear infinite;
            }
        </style>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="flex justify-center mb-8">
<div className="group relative inline-flex items-center gap-x-2 rounded-full bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/10 transition-transform hover:scale-[1.02] cursor-default">
<span className="flex h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                    Built for Agencies Selling AI Services
                </div>
</div>

<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] text-5xl font-bold tracking-tight max-w-5xl mr-auto ml-auto pb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900/10">
                Build &amp; Monetize <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-600 via-blue-600 to-blue-600/10">AI Sales Reps</span> That Work Leads <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-600 via-blue-600 to-blue-600/10">24/7</span>
</h1>

<p className="sm:text-xl leading-relaxed text-lg text-slate-500 max-w-3xl mt-6 mr-auto ml-auto">
                No-Code platform to build and whitelabel AI agents that Speak, Text, and Email to Automate follow-ups, lead reactivation, and appointment scheduling under your own brand.
            </p>

<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="shiny-cta w-full sm:w-auto h-14 text-lg font-medium" href="#">
<span className="">Get Started</span>
</a>
<a className="hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group sm:w-auto text-lg font-medium text-slate-700 bg-white w-full h-14 border-slate-200 border rounded-xl pr-8 pl-8" href="#">
                    Book a 1-1 Demo
                    <svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-12 mb-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<div className="flex text-amber-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-slate-700">4.9/5 rating</span>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="User" className="h-6 w-6 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="h-6 w-6 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://i.pravatar.cc/100?img=8"/>
<img alt="User" className="h-6 w-6 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://i.pravatar.cc/100?img=12"/>
</div>
<span className="text-slate-700">2k+ Agencies</span>
<span className="text-slate-400 hidden sm:inline">•</span>
<span className="text-slate-500">Building AI Agents</span>
</div>
</div>

<div className="max-w-6xl mt-12 mr-auto ml-auto pb-12 relative">
<div className="absolute inset-0 bg-blue-600/5 blur-[100px] -z-10 rounded-full h-full w-3/4 mx-auto translate-y-20"></div>
<div className="relative rounded-2xl bg-white/40 shadow-2xl shadow-blue-900/5 ring-1 ring-slate-900/5 backdrop-blur-sm overflow-hidden">
<div className="flex h-10 items-center gap-2 px-4 border-b border-slate-200/50 bg-white/50">
<div className="h-3 w-3 rounded-full bg-red-400/60"></div>
<div className="h-3 w-3 rounded-full bg-amber-400/60"></div>
<div className="h-3 w-3 rounded-full bg-emerald-400/60"></div>
<div className="ml-2 text-[10px] font-medium text-slate-400">BookedIn Platform Demo</div>
</div>
<div className="" style={{position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', maxHeight: '80svh', width: '100%', aspectRatio: '1.78', padding: '0'}}>
<iframe allow="clipboard-write" allowfullscreen="" className="" frameborder="0" loading="lazy" mozallowfullscreen="true" src="https://app.supademo.com/embed/cmit6la4z3275l821gamks9al?embed_v=2&amp;utm_source=embed" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} title="Bookedin ai product walkthrough" webkitallowfullscreen="true"></iframe>
</div>
</div>
</div>

<div className="w-full max-w-6xl mt-12 mb-24 mx-auto">
<p className="text-center text-xl sm:text-2xl font-semibold text-slate-900 mb-10 tracking-tight">
                    Used daily by hundreds of small and large businesses.
                </p>
<div className="relative w-full overflow-hidden group">
<div className="absolute top-0 left-0 z-10 h-full w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 z-10 h-full w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
<div className="flex animate-scroll gap-16 hover:[animation-play-state:paused] w-max pt-4 pb-4 gap-x-16 gap-y-16 items-center">
<img alt="Google" className="h-8 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
<img alt="DHL" className="h-6 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg"/>
<img alt="Coca Cola" className="h-8 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"/>
<img alt="ERGO" className="h-8 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Ergo_Group_Logo.svg"/>
<div className="flex items-center gap-2 logo-grayscale select-none">
<svg className="h-7 w-7 text-slate-700" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5a7 7 0 0 1 14 0h-4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z"></path></svg>
<span className="font-bold text-slate-700 text-lg leading-none mt-0.5">Talentmagnet</span>
</div>
<img alt="Mercedes" className="h-10 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_Logo_2010.svg"/>
<img alt="Stripe" className="h-8 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"/>

<img alt="Google" className="h-8 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
<img alt="DHL" className="h-6 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg"/>
<img alt="Coca Cola" className="h-8 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"/>
<img alt="ERGO" className="h-8 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Ergo_Group_Logo.svg"/>
<div className="flex items-center gap-2 logo-grayscale select-none">
<svg className="h-7 w-7 text-slate-700" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5a7 7 0 0 1 14 0h-4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z"></path></svg>
<span className="font-bold text-slate-700 text-lg leading-none mt-0.5">Talentmagnet</span>
</div>
<img alt="Mercedes" className="h-10 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_Logo_2010.svg"/>
<img alt="Stripe" className="h-8 w-auto logo-grayscale object-contain" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"/>
</div>
</div>
</div>

<div className="mb-32 w-full mx-auto">
<div className="text-center max-w-4xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.15]">
                        Why Do You Need BookedIn.ai?
                    </h2>
<p className="md:text-xl leading-relaxed text-lg font-medium text-slate-500">Because your clients don’t pay you to create fancy workflows they pay you results. If you’re busy stitching together Vapi, Google Sheets, CRMs with n8n and Zapier for every client. How can you ever scale? BookedIn.ai gives you a centralized location to manage your workflows, build reliable agents and deliver and monetize your with 1/10th the effort</p>
</div>
<div className="relative max-w-5xl mx-auto">
<div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
<div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
<div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-900 aspect-video group cursor-pointer border border-slate-200/20">
<img alt="AI Agent Dashboard" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
<svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3l14 9-14 9V3z"></path></svg>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-center max-w-5xl mx-auto px-4 mb-16">
<div className="flex flex-col items-center group">
<span className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">700%</span>
<div className="flex items-center gap-2 text-slate-900 font-semibold text-lg md:text-xl tracking-tight">
                            Higher Conversion
                            <svg className="lucide lucide-info text-slate-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
</div>
<div className="flex flex-col items-center group">
<span className="md:text-8xl group-hover:text-blue-600 transition-colors text-7xl font-bold text-slate-900 tracking-tighter mb-4">42x</span>
<div className="flex items-center gap-2 text-slate-900 font-semibold text-lg md:text-xl tracking-tight">
                            Faster Building
                            <svg className="lucide lucide-info text-slate-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
</div>
<div className="flex flex-col items-center group">
<span className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">300%</span>
<div className="flex items-center gap-2 text-slate-900 font-semibold text-lg md:text-xl tracking-tight">
                            Better Lead Quality
                            <svg className="lucide lucide-info text-slate-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
</div>
</div>
</div>

<section className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
<div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl mix-blend-multiply opacity-70 pointer-events-none"></div>
<div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-indigo-50/50 blur-3xl mix-blend-multiply opacity-70 pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 tracking-tight mb-12">Who is BookedIn AI for?</h2>
<div className="flex justify-center mb-16">
<div className="bg-slate-100 p-1.5 rounded-full inline-flex items-center relative gap-1 shadow-inner">
<button className="relative rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 ease-in-out hover:text-slate-900 z-10 w-48 text-center" id="btn-whitelabel" onclick="switchTab('whitelabel')">
                                To white label and sell
                            </button>
<button className="hover:text-slate-900 transition-all duration-200 ease-in-out z-10 hover:bg-white/50 text-sm font-medium text-slate-500 text-center w-48 rounded-full pt-3 pr-8 pb-3 pl-8 relative" id="btn-yourself" onclick="switchTab('yourself')">
                                For yourself
                            </button>
</div>
</div>
<div className="max-w-3xl mx-auto bg-white rounded-[2rem] border border-slate-200/60 shadow-xl shadow-slate-200/50 overflow-hidden relative min-h-[500px]">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-20"></div>
<div className="fade-enter p-10 md:p-14" id="content-whitelabel">
<div className="mb-8">
<h3 className="text-lg font-semibold text-slate-900 mb-6">If you:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-slate-600 leading-relaxed">Want to sell AI automation but can't code and don't want to hire developers.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-slate-600 leading-relaxed">Watch other agencies charge  for AI services while you're stuck selling "consulting".</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-slate-600 leading-relaxed">Need a proven AI offer that actually works - not another complicated tool you'll never figure out.</p>
</li>
</ul>
</div>
<div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 mb-8">
<h4 className="text-lg font-semibold text-blue-900 mb-2">If the answer is yes, we can instantly fix that for you.</h4>
<p className="text-slate-600 leading-relaxed mb-4">
                                    Here's what's holding you back: Every client wants AI automation, but building it requires technical skills you don't have. You've tried no-code tools, but they're still too complex. You've considered partnerships, but then you lose control and margins.
                                </p>
<p className="text-slate-600 leading-relaxed">
                                    BookedIn is the done-for-you AI system you sell as your own - a complete lead conversion platform that calls, texts, and messages leads automatically until they book appointments. No coding. No complexity. Just pick a template, slap your logo on it, and charge  per client.
                                </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-slate-100">
<svg className="lucide lucide-arrow-right text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="text-lg font-bold text-slate-900 italic tracking-tight">Stop trying to build AI. Start selling it.</span>
</div>
</div>
<div className="hidden p-10 md:p-14" id="content-yourself">
<div className="mb-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100">
<svg className="lucide lucide-target text-indigo-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 tracking-tight">The last mile of lead generation</h3>
</div>
<p className="text-slate-600 leading-relaxed mb-4">
                                    You are great at running Facebook and Google Ads to get leads for your customers, but getting them to actually show up is harder than ever. As an agency, half of the leads you generate for your customers are wasted.
                                </p>
<p className="text-slate-600 leading-relaxed font-medium">
                                    Bookedin makes it easy for you to get more leads to actually show up in person or virtually.
                                </p>
</div>
<div className="mb-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100">
<svg className="lucide lucide-zap text-indigo-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 tracking-tight">How do we do it?</h3>
</div>
<p className="text-slate-600 leading-relaxed">
                                    We call every lead within seconds, then follow up via SMS, email, and even Instagram/LinkedIn DMs until they book or opt out.
                                </p>
</div>
<div className="flex items-start gap-3 pt-6 border-t border-slate-100">
<svg className="lucide lucide-trending-up text-indigo-600 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
<span className="text-lg font-bold text-slate-900 italic tracking-tight leading-tight">Reduce your cost per lead and make more money for your customers than they are spending.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-t pt-32 pb-32 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mr-auto mb-24 ml-auto">
<div className="flex flex-col items-center gap-3 mb-8"></div>
<h2 className="md:text-5xl leading-[1.15] text-4xl font-semibold text-slate-900 tracking-tight mb-8" style={{}}>The Problem</h2>
<p className="md:text-xl leading-relaxed text-lg font-normal text-slate-500">If you want to implement AI solutions you're forced to stitch together 3-5 separate tools. Each with a massive learning curve. It's a clear bottleneck that eats your time margins and stops you from taking on more clients.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
<div className="flex flex-col items-start group">
<div className="mb-6 p-3 -ml-3 rounded-xl bg-transparent">
<svg className="lucide lucide-arrow-down-to-line text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 17V3"></path><path d="m6 11 6 6 6-6"></path><path d="M19 21H5"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Manual Overload</h3>
<p className="leading-relaxed text-lg text-slate-500">If your team is buried in manual onboarding, debugging workflows,  and chasing payments, you're not building a business—you're becoming a freelancer.</p>
</div>
<div className="flex flex-col group items-start">
<div className="mb-6 p-3 -ml-3 rounded-xl bg-transparent">
<svg className="lucide lucide-wrench text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Duct-Taped Tools</h3>
<p className="leading-relaxed text-lg text-slate-500">Juggling separate agent builders, Zapier, billing software, and random CRMs means that when one piece breaks, your entire service collapses. </p>
</div>
<div className="flex flex-col items-start group">
<div className="mb-6 p-3 -ml-3 rounded-xl bg-transparent">
<svg className="lucide lucide-package text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22v-9"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Unprofessional Delivery</h3>
<p className="leading-relaxed text-lg text-slate-500">Your delivering a valuable work but if you're presenting it in a clunky spreadsheet. Is that really reflective of the level of effort you put in for your clients?</p>
</div>
</div>
<div className="mt-24 w-full h-px bg-slate-100"></div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 pt-32 pb-32 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-blue-600 font-semibold tracking-wide text-sm uppercase mb-4 block">Our Solution</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">One Platform to Build, Deliver, and Monetize</h2>
<p className="text-lg text-slate-500 leading-relaxed">Streamline your entire agency operation with a unified system designed for scale.</p>
</div>

<div className="max-w-6xl mr-auto ml-auto">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
<button className="group flex flex-col items-start p-6 rounded-2xl bg-white border-2 border-blue-600 shadow-xl shadow-blue-900/5 transition-all duration-300 text-left relative overflow-hidden" id="sol-tab-1" onclick="switchSolutionTab(1)">
<div className="absolute inset-0 bg-blue-50/50 opacity-100 transition-opacity duration-300"></div>
<span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 z-10">Step One</span>
<h3 className="text-xl font-semibold text-slate-900 z-10 group-hover:text-blue-700 transition-colors">Build</h3>
<div className="h-1 w-full bg-slate-100 mt-4 rounded-full overflow-hidden z-10">
<div className="h-full bg-blue-600 w-full transition-all duration-500"></div>
</div>
</button>
<button className="group flex flex-col items-start p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-left relative overflow-hidden" id="sol-tab-2" onclick="switchSolutionTab(2)">
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-blue-50/50 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600 mb-2 z-10">Step Two</span>
<h3 className="z-10 group-hover:text-blue-700 transition-colors text-xl font-semibold text-slate-900">Automate</h3>
<div className="h-1 w-full bg-slate-100 mt-4 rounded-full overflow-hidden z-10">
<div className="h-full bg-blue-600 w-0 group-hover:w-1/3 transition-all duration-500"></div>
</div>
</button>
<button className="group flex flex-col items-start p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-left relative overflow-hidden" id="sol-tab-3" onclick="switchSolutionTab(3)">
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-blue-50/50 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600 mb-2 z-10">Step Three</span>
<h3 className="z-10 group-hover:text-blue-700 transition-colors text-xl font-semibold text-slate-900">Deliver</h3>
<div className="h-1 w-full bg-slate-100 mt-4 rounded-full overflow-hidden z-10">
<div className="h-full bg-blue-600 w-0 group-hover:w-1/3 transition-all duration-500"></div>
</div>
</button>
</div>

<div className="relative min-h-[500px]">

<div className="tab-content active" id="sol-content-1">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="relative rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-2xl shadow-slate-200/50 aspect-[4/3] group">
<img alt="No-Code Builder Interface" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]"></div>
</div>

<div className="flex flex-col pt-2">
<span className="text-blue-600 font-semibold tracking-wide text-sm uppercase mb-5">Build</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">No-Code Agent Builder</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-10">Stop starting from scratch. Visually build and test expert-level voice and chat agents in minutes.</p>
<div className="w-full h-px bg-slate-200 mb-10"></div>
<div className="space-y-10">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1 text-slate-900">
<svg className="lucide lucide-wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pre-Built Agent Tools</h3>
<p className="text-slate-500 leading-relaxed">Instantly connect agents to appointment booking tools for Google Calendar, Calendly, and more. No custom code or API wrangling required.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1 text-slate-900">
<svg className="lucide lucide-share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Total Control, No-Code Speed</h3>
<p className="text-slate-500 leading-relaxed">Use our drag-and-drop visual builder to map complex logic, or generate powerful prompts with natural language.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="sol-content-2">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="relative rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-2xl shadow-slate-200/50 aspect-[4/3] group">
<img alt="Workflow Builder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1676299081847-5c3176d70230?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]"></div>
</div>

<div className="flex flex-col pt-2">
<span className="text-blue-600 font-semibold tracking-wide text-sm uppercase mb-5">Automate</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Visual Workflow Builder</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-10">Connect your agents to any app and automate your services—all in one place. Our workflow engine is built for security, reliability, and speed.</p>
<div className="w-full h-px bg-slate-200 mb-10"></div>
<div className="space-y-10">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1 text-slate-900">
<svg className="lucide lucide-layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Eliminate Fragmented Stacks</h3>
<p className="text-slate-500 leading-relaxed">Replace Zapier, Make, and CRMs with one integrated platform. Stop paying for 5 different subscriptions to do one job.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1 text-slate-900">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Native Agent Triggers</h3>
<p className="text-slate-500 leading-relaxed">Instantly run workflows from agent events like "call-ended" or "call-started." No unreliable webhooks or complex setups needed.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="sol-content-3">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="relative rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-2xl shadow-slate-200/50 aspect-[4/3] group">
<img alt="Analytics Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]"></div>
</div>

<div className="flex flex-col pt-2">
<span className="text-emerald-600 font-semibold tracking-wide text-sm uppercase mb-5">Deliver</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Whitelabel Client Portal</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-10">Give your clients a professional, branded dashboard. They see your logo, your colors, and the results you're delivering—real-time.</p>
<div className="w-full h-px bg-slate-200 mb-10"></div>
<div className="space-y-10">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1 text-slate-900">
<svg className="lucide lucide-credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Automated Billing &amp; SaaS Mode</h3>
<p className="text-slate-500 leading-relaxed">Turn your service into a subscription. Automatically rebill clients for usage and monthly seats without sending manual invoices.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1 text-slate-900">
<svg className="lucide lucide-bar-chart-big" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><rect height="7" rx="1" width="4" x="7" y="10"></rect><rect height="12" rx="1" width="4" x="15" y="5"></rect></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Proof of Performance</h3>
<p className="text-slate-500 leading-relaxed">Automatically generate ROI reports showing calls made, appointments booked, and revenue generated to keep clients retained for years.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-4xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Some things agencies are using BookedIn.ai for</h2>
</div>

<div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
<div className="inline-flex items-center p-1.5 rounded-full bg-slate-900 shadow-xl shadow-slate-900/10 gap-1">
<button className="uc-tab px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-white text-slate-900 shadow-sm" data-index="0" onclick="switchUseCase(0)">AI Scheduler</button>
<button className="uc-tab px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white" data-index="1" onclick="switchUseCase(1)">Sales AI</button>
<button className="uc-tab px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white" data-index="2" onclick="switchUseCase(2)">Outbound</button>
<button className="uc-tab px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white" data-index="3" onclick="switchUseCase(3)">Abandoned Carts</button>
<button className="uc-tab px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white" data-index="4" onclick="switchUseCase(4)">Event Reminders</button>
<button className="uc-tab px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white" data-index="5" onclick="switchUseCase(5)">Unified Inbox</button>
</div>
</div>

<div className="relative bg-slate-50/80 rounded-[2.5rem] border border-slate-200/60 p-8 md:p-16 min-h-[600px] shadow-2xl shadow-blue-900/5 backdrop-blur-xl overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-indigo-50/0 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

<div className="use-case-content active grid lg:grid-cols-2 gap-16 items-center" id="uc-0">
<div className="flex flex-col h-full justify-center">
<span className="text-blue-600 font-medium tracking-wide text-sm mb-4">AI Scheduler</span>
<h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Book all appointments</h3>
<div className="space-y-6 mb-10">
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between cursor-default">
<span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Real-time scheduling</span>
<svg className="lucide lucide-chevron-right text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">BookedIn connects directly to your service scheduler, booking customers 24/7 and filling your calendar without added staff.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between cursor-default">
<span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Intelligent Mapping</span>
<svg className="lucide lucide-chevron-right text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Maps customer issues and needs to the right appointment duration automatically.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between cursor-default">
<span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Instant Confirmations</span>
<svg className="lucide lucide-chevron-right text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Sends text confirmations to reduce no-shows and keep your revenue predictable.</p>
</div>
</div>
<div className="flex items-center gap-4 mt-4">
<button className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-900/20">
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Listen to Agent</span>
<span className="text-xs text-slate-500">Scheduling Demo</span>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col p-8 gap-6 max-w-md mx-auto my-auto h-fit">
<div className="flex justify-end">
<div className="bg-blue-100 text-blue-900 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                                I need to book a consultation for next Tuesday.
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm shadow-sm">
                                I can help with that. I have openings at 10:00 AM and 2:00 PM on Tuesday. Which works better for you?
                            </div>
</div>
<div className="flex justify-end">
<div className="bg-blue-100 text-blue-900 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                                Let's go with 2:00 PM.
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm shadow-sm">
                                Perfect. I've booked you for 2:00 PM next Tuesday. You'll receive a confirmation text shortly.
                            </div>
</div>
</div>
</div>
</div>

<div className="use-case-content grid lg:grid-cols-2 gap-16 items-center" id="uc-1">
<div className="flex flex-col h-full justify-center">
<span className="text-blue-600 font-medium tracking-wide text-sm mb-4">Sales AI</span>
<h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Capture every lead</h3>
<div className="space-y-6 mb-10">
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Instant Engagement</span>
<svg className="lucide lucide-check text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Engages sales leads in real time, answering questions instantly to bring more customers to your pipeline.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Inventory Knowledge</span>
<svg className="lucide lucide-check text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Shares service or product availability straight from your database.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Books Meetings</span>
<svg className="lucide lucide-check text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Answers questions about features and options, then books a demo or sales call instantly.</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col p-8 gap-6 max-w-md mx-auto my-auto h-fit">
<div className="flex justify-end">
<div className="bg-blue-100 text-blue-900 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                                Do you have the Premium Plan in stock?
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm shadow-sm">
                                Yes, the Premium Plan is available immediately. It includes all AI features and 24/7 support. Would you like a demo?
                            </div>
</div>
<div className="flex justify-end">
<div className="bg-blue-100 text-blue-900 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                                That sounds great.
                            </div>
</div>
</div>
</div>
</div>

<div className="use-case-content grid lg:grid-cols-2 gap-16 items-center" id="uc-2">
<div className="flex flex-col h-full justify-center">
<span className="text-blue-600 font-medium tracking-wide text-sm mb-4">Outbound Campaigns</span>
<h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Reach more customers</h3>
<div className="space-y-6 mb-10">
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Database Reactivation</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">BookedIn runs outbound campaigns that keep customers coming back and service bays full.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Perfect Delivery</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Calls customers 24/7 and ensures every message is delivered professionally.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Revenue Generation</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Executes recall, retention, and marketing campaigns automatically to drive net new revenue.</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] flex items-center justify-center">
<div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
<div className="bg-slate-50 border-b border-slate-100 p-4 flex justify-between items-center">
<span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Campaign Stats</span>
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">Active</span>
</div>
<div className="p-6">
<div className="flex justify-between items-end mb-2">
<span className="text-3xl font-bold text-slate-900">1,240</span>
<span className="text-sm font-medium text-green-600 mb-1">98% Success</span>
</div>
<span className="text-sm text-slate-500 block mb-6">Calls Completed</span>
<div className="flex justify-between items-end mb-2">
<span className="text-3xl font-bold text-slate-900">342</span>
<span className="text-sm font-medium text-blue-600 mb-1">27% Conversion</span>
</div>
<span className="text-sm text-slate-500">Appointments Booked</span>
</div>
</div>
</div>
</div>

<div className="use-case-content grid lg:grid-cols-2 gap-16 items-center" id="uc-3">
<div className="flex flex-col h-full justify-center">
<span className="text-blue-600 font-medium tracking-wide text-sm mb-4">Abandoned Carts</span>
<h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Recover lost revenue</h3>
<div className="space-y-6 mb-10">
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Instant Follow-up</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">When people abandon the cart but we have their information, AI calls them and texts them within minutes.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Incentive Delivery</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Automatically offer a discount code or answer questions to help you recapture the client.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Multi-Channel</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Uses SMS and Voice simultaneously to maximize contact rates.</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col p-8 gap-6 max-w-md mx-auto my-auto h-fit">
<div className="flex justify-start">
<div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm shadow-sm">
                                Hi John, I noticed you left some items in your cart. Was there anything I could help clarify?
                            </div>
</div>
<div className="flex justify-end">
<div className="bg-blue-100 text-blue-900 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                                I wasn't sure about the shipping time.
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm shadow-sm">
                                We ship within 24 hours! Here is a 10% code to complete your order today: SAVE10.
                            </div>
</div>
</div>
</div>
</div>

<div className="use-case-content grid lg:grid-cols-2 gap-16 items-center" id="uc-4">
<div className="flex flex-col h-full justify-center">
<span className="text-blue-600 font-medium tracking-wide text-sm mb-4">Event Reminders</span>
<h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Drastically reduce no-shows</h3>
<div className="space-y-6 mb-10">
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Proactive Confirmation</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Calls prospects automatically to remind them about their upcoming meeting.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Seamless Links</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Texts meeting links (Zoom, Google Meet) directly to their phone 15 minutes prior.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Smart Rescheduling</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">If they can't make it, the agent handles the rescheduling instantly via Calendly integration.</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] flex items-center justify-center">
<div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg className="lucide lucide-phone-outgoing" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="23 7 23 1 17 1"></polyline><line x1="16" x2="23" y1="8" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Reminder Call</div>
<div className="text-xs text-slate-500">Completed • 24s</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<svg className="lucide lucide-message-square" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Meeting Link Sent</div>
<div className="text-xs text-slate-500">Delivered • SMS</div>
</div>
</div>
</div>
</div>
</div>

<div className="use-case-content grid lg:grid-cols-2 gap-16 items-center" id="uc-5">
<div className="flex flex-col h-full justify-center">
<span className="text-blue-600 font-medium tracking-wide text-sm mb-4">Unified Inbox</span>
<h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Stay on top of every customer</h3>
<div className="space-y-6 mb-10">
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Centralized Command</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">BookedIn gives you one place to see every call, message, and alert so nothing slips through the cracks.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Smart Flags</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Flags unresolved calls, drop-offs, and frustrated customers in real time.</p>
</div>
<div className="group border-b border-slate-200 pb-4">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">Custom Alerts</span>
</div>
<p className="text-slate-500 mt-2 text-sm leading-relaxed">Tracks open requests and lets you choose how alerts are delivered (dashboard, email, slack).</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] flex items-center justify-center">
<div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
<div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
<span className="font-semibold text-slate-700">Priority Inbox</span>
<span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">3 Urgent</span>
</div>
<div className="divide-y divide-slate-100">
<div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex justify-between mb-1">
<span className="font-medium text-slate-900">Sarah M.</span>
<span className="text-xs text-slate-400">2m ago</span>
</div>
<div className="text-sm text-slate-500 truncate">Missed call • Needs rescheduling</div>
</div>
<div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer border-l-2 border-red-500 bg-red-50/10">
<div className="flex justify-between mb-1">
<span className="font-medium text-slate-900">Mike R.</span>
<span className="text-xs text-slate-400">15m ago</span>
</div>
<div className="text-sm text-slate-800 font-medium truncate">Negative Sentiment Detected</div>
</div>
<div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex justify-between mb-1">
<span className="font-medium text-slate-900">Alex T.</span>
<span className="text-xs text-slate-400">1h ago</span>
</div>
<div className="text-sm text-slate-500 truncate">Demo booked for Friday</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#0B0F19] overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<div className="absolute h-full w-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
<style>
            .stars-bg {
                background-image: 
                    radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
                    radial-gradient(1px 1px at 100px 70px, #fff, rgba(0,0,0,0)),
                    radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0)),
                    radial-gradient(1.5px 1.5px at 200px 10px, #fff, rgba(0,0,0,0)),
                    radial-gradient(1.5px 1.5px at 260px 200px, #fff, rgba(0,0,0,0));
                background-size: 350px 350px;
                animation: twinkle 60s infinite linear;
            }
            @keyframes twinkle {
                from { background-position: 0 0; }
                to { background-position: -350px -350px; }
            }
        </style>
<div className="absolute inset-0 stars-bg opacity-40"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Start transforming your agency
        </h2>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Unlock the potential of your business with our next-level SaaS platform. Transform your workflows and achieve new heights today.
        </p>
<div className="flex justify-center">
<a className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#">
                Get started
                <svg className="lucide lucide-chevron-right transition-transform group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
