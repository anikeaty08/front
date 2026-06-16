import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const textInput = document.getElementById('textInput');
        const colorInput = document.getElementById('colorInput');
        const body = document.getElementById('pageBody');
        const dynamicElements = document.querySelectorAll('.dynamic-text');
        const splitContainer1 = document.getElementById('splitText1');
        const splitContainer2 = document.getElementById('splitText2');

        // Initial State
        const DEFAULT_TEXT = "Insert Text";

        function updateUI(text) {
            const displayText = text.trim() === "" ? DEFAULT_TEXT : text;

            // Update simple text buttons
            dynamicElements.forEach(el => {
                el.textContent = displayText;
            });

            // Update Complex Split Text Button
            updateSplitButton(displayText);
        }

        function updateSplitButton(text) {
            if (!splitContainer1 || !splitContainer2) return;
            
            // Clear current letters
            splitContainer1.innerHTML = '';
            splitContainer2.innerHTML = '';

            const chars = text.split('');
            chars.forEach((char, index) => {
                const span1 = document.createElement('span');
                span1.className = 'btn-letter';
                span1.innerHTML = char === ' ' ? '&nbsp;' : char;
                span1.style.animationDelay = `${index * 0.05}s`;

                const span2 = span1.cloneNode(true);

                splitContainer1.appendChild(span1);
                splitContainer2.appendChild(span2);
            });
        }

        async function copyCode(btn, elementId) {
            const el = document.getElementById(elementId);
            if (!el) return;

            // Get HTML and clean it up slightly
            // We use firstElementChild to grab the button itself, not the wrapper
            let htmlToCopy = el.firstElementChild ? el.firstElementChild.outerHTML : el.innerHTML;
            
            // Very basic formatter to make it not a single line string if copied from inspect
            htmlToCopy = htmlToCopy.replace(/></g, '>\n<');

            try {
                await navigator.clipboard.writeText(htmlToCopy);
                
                // Visual Feedback
                const originalContent = btn.innerHTML;
                const checkIcon = `<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
                
                btn.innerHTML = `${checkIcon}<span>Copied!</span>`;
                btn.classList.remove('text-zinc-500');
                btn.classList.add('text-emerald-400');
                
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.classList.add('text-zinc-500');
                    btn.classList.remove('text-emerald-400');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy', err);
            }
        }

        // Event Listeners
        textInput.addEventListener('input', (e) => updateUI(e.target.value));
        colorInput.addEventListener('input', (e) => {
            body.style.backgroundColor = e.target.value;
        });

        // Initialize
        updateUI("");
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-8 z-50 flex items-center gap-3 p-2 pr-3 bg-zinc-900/50 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl ring-1 ring-black/5">
<div className="relative group">
<input autocomplete="off" className="bg-transparent text-sm text-zinc-200 placeholder-zinc-500 border-none outline-none focus:ring-0 px-4 py-2 min-w-[200px] tracking-tight font-medium" id="textInput" placeholder="Insert Text" type="text"/>
<div className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
</div>
<div className="h-6 w-px bg-white/10 mx-1"></div>
<div className="relative flex items-center">
<input className="w-8 h-8 rounded-full cursor-pointer border-0 p-0 overflow-hidden bg-transparent appearance-none [&amp;::-webkit-color-swatch-wrapper]:p-0 [&amp;::-webkit-color-swatch]:border-none [&amp;::-webkit-color-swatch]:rounded-full shadow-inner ring-1 ring-white/20 hover:ring-white/40 transition-all" id="colorInput" type="color" value="#09090b"/>
</div>
</div>

<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto place-items-start relative z-10 pt-20">

<div className="w-full flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] gap-8 group/card hover:border-white/10 transition-colors">
<div className="flex-1 flex items-center justify-center min-h-[80px]" id="demo-1">
<button className="shiny-cta focus:outline-none">
<span className="dynamic-text tracking-tight text-sm">Insert Text</span>
</button>
</div>
<div className="w-full h-px bg-white/5"></div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-all" onclick="copyCode(this, 'demo-1')">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span>Copy HTML</span>
</button>
</div>

<div className="w-full flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] gap-8 group/card hover:border-white/10 transition-colors">
<div className="flex-1 flex items-center justify-center min-h-[80px]" id="demo-2">
<button className="group hover:bg-white/5 transition-all flex text-sm font-medium text-zinc-200 bg-gradient-to-b from-white/5 via-white/10 to-white/5 rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 items-center" style={{boxShadow: '0 10px 20px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.1)', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '9999px', position: 'relative'}}>
<span className="dynamic-text text-zinc-200/90 tracking-tight">Insert Text</span>
<svg className="text-zinc-400 group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="w-full h-px bg-white/5"></div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-all" onclick="copyCode(this, 'demo-2')">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span>Copy HTML</span>
</button>
</div>

<div className="w-full flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] gap-8 group/card hover:border-white/10 transition-colors">
<div className="flex-1 flex items-center justify-center min-h-[80px]" id="demo-3">
<div className="btn-gen-wrapper">
<button aria-label="Generate" className="btn-gen px-6 py-3 focus:outline-none flex items-center" type="button">
<svg className="btn-svg w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"></path>
<path d="M16 22a2 2 0 0 1-1.5-.7l-1-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4l-1 1.3a2 2 0 0 1-3.2 0l-1-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4l-1 1.3A2 2 0 0 1 2 22"></path>
</svg>
<div className="txt-wrapper text-sm font-medium tracking-tight">
<div className="txt-1" id="splitText1"></div>
<div className="txt-2" id="splitText2"></div>
</div>
</button>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-all" onclick="copyCode(this, 'demo-3')">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span>Copy HTML</span>
</button>
</div>

<div className="w-full flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] gap-8 group/card hover:border-white/10 transition-colors">
<div className="flex-1 flex items-center justify-center min-h-[80px]" id="demo-4">
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-zinc-900 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-sm font-medium text-zinc-400 bg-zinc-900 w-full h-full rounded-full py-3 px-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<span className="relative z-10 dynamic-text tracking-tight">Insert Text</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
<div className="w-full h-px bg-white/5"></div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-all" onclick="copyCode(this, 'demo-4')">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span>Copy HTML</span>
</button>
</div>

<div className="w-full flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] gap-8 group/card hover:border-white/10 transition-colors">
<div className="flex-1 flex items-center justify-center min-h-[80px]" id="demo-5">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.1)] rounded-full relative shadow-[0_8px_40px_rgba(0,0,0,0.5)]" href="#" style={{-Spread: '90deg', -ShimmerColor: 'rgba(255,255,255,0.6)', -Radius: '9999px', -Speed: '4s', -Cut: '1px', -Bg: 'rgba(20, 20, 20, 0.6)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur-xl"></div>
<div className="z-10 flex gap-3 overflow-hidden text-sm font-medium text-white pt-3 pr-5 pb-3 pl-5 relative items-center rounded-full">
<div style={{position: 'absolute', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}></div>
<div style={{position: 'absolute', inset: '1px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="relative z-10 dynamic-text tracking-tight">Insert Text</span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-6 h-6 rounded-full ml-1 relative">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</span>
</div>
</a>
</div>
<div className="w-full h-px bg-white/5"></div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-all" onclick="copyCode(this, 'demo-5')">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span>Copy HTML</span>
</button>
</div>
</main>


    </>
  );
}
