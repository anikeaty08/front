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



        const container = document.getElementById('preview-container');
        const heroLayout = document.querySelector('.hero-layout');
        const techStack = document.querySelector('.tech-stack-container');

        // Theme Logic
        function updateTheme(theme) {
            if (theme === 'light') {
                container.classList.remove('bg-black', 'text-white');
                container.classList.add('bg-white', 'text-black');
                
                // Grays
                container.querySelectorAll('.text-neutral-400').forEach(el => el.classList.replace('text-neutral-400', 'text-neutral-500'));
                container.querySelectorAll('.text-white').forEach(el => el.classList.replace('text-white', 'text-neutral-900'));
                
                // Borders & Backgrounds
                container.querySelectorAll('.border-white\\/10').forEach(el => el.classList.replace('border-white/10', 'border-black/5'));
                container.querySelectorAll('.border-white\\/5').forEach(el => el.classList.replace('border-white/5', 'border-black/5'));
                container.querySelectorAll('.bg-white\\/5').forEach(el => el.classList.replace('bg-white/5', 'bg-black/5'));
                
                // Fix for Gradient text in light mode
                const gradients = container.querySelectorAll('.bg-clip-text');
                gradients.forEach(el => {
                     el.classList.replace('from-white', 'from-neutral-900');
                     el.classList.replace('via-white', 'via-neutral-900');
                     el.classList.replace('to-white/60', 'to-neutral-900/60');
                });

                // Cards
                container.querySelectorAll('.card-icon-bg').forEach(el => {
                    el.classList.replace('bg-neutral-900', 'bg-white');
                    el.classList.add('shadow-sm');
                });

                // Secondary Buttons
                 container.querySelectorAll('.sec-btn').forEach(el => {
                    el.classList.replace('text-white', 'text-black');
                });
                
            } else {
                container.classList.remove('bg-white', 'text-black');
                container.classList.add('bg-black', 'text-white');
                 
                // Grays
                container.querySelectorAll('.text-neutral-500').forEach(el => el.classList.replace('text-neutral-500', 'text-neutral-400'));
                container.querySelectorAll('.text-neutral-900').forEach(el => el.classList.replace('text-neutral-900', 'text-white'));

                // Borders & Backgrounds
                container.querySelectorAll('.border-black\\/5').forEach(el => {
                    if(el.classList.contains('nav-border') || el.classList.contains('tech-border') || el.classList.contains('feat-section')) {
                         el.classList.replace('border-black/5', 'border-white/5');
                    } else {
                         el.classList.replace('border-black/5', 'border-white/10');
                    }
                });
                
                container.querySelectorAll('.bg-black\\/5').forEach(el => el.classList.replace('bg-black/5', 'bg-white/5'));
                
                 // Restore Gradient text for dark mode
                 const gradients = container.querySelectorAll('.bg-clip-text');
                gradients.forEach(el => {
                     el.classList.replace('from-neutral-900', 'from-white');
                     el.classList.replace('via-neutral-900', 'via-white');
                     el.classList.replace('to-neutral-900/60', 'to-white/60');
                });

                // Cards
                container.querySelectorAll('.card-icon-bg').forEach(el => {
                    el.classList.replace('bg-white', 'bg-neutral-900');
                    el.classList.remove('shadow-sm');
                });

                 // Secondary Buttons
                 container.querySelectorAll('.sec-btn').forEach(el => {
                    el.classList.replace('text-black', 'text-white');
                });
            }
        }

        // Design Style Logic
        function updateDesign(design) {
            // Update Checkmark Visuals
            const buttons = document.querySelectorAll('input[name="design"]');
            buttons.forEach(btn => {
                 const indicator = btn.parentElement.querySelector('.check-indicator');
                 if(indicator) indicator.classList.add('opacity-0');
                 if(btn.checked && indicator) indicator.classList.remove('opacity-0');
            });

            // Set Data Attribute on Container to Trigger Tailwind Group Modifiers
            container.setAttribute('data-design', design);
        }

        // Accent Logic
        function updateAccent(color) {
            document.querySelectorAll('.active-dot').forEach(el => el.classList.add('opacity-0'));
            const selectedInput = document.querySelector(`input[name="accent"][value="${color}"]`);
            if(selectedInput) selectedInput.parentElement.querySelector('.active-dot').classList.remove('opacity-0');

            container.setAttribute('data-accent', color);

            const colors = ['indigo', 'emerald', 'rose', 'amber'];
            
            // Text accents
            const textElements = container.querySelectorAll('.accent-text');
            textElements.forEach(el => {
                colors.forEach(c => el.classList.remove(`text-${c}-500`));
                el.classList.add(`text-${color}-500`);
            });

            // BG accents
            const bgElements = container.querySelectorAll('.accent-bg');
            bgElements.forEach(el => {
                colors.forEach(c => el.classList.remove(`bg-${c}-500`));
                el.classList.add(`bg-${color}-500`);
            });

            // Soft BG accents
            const softBgElements = container.querySelectorAll('.accent-soft-bg');
            softBgElements.forEach(el => {
                colors.forEach(c => {
                    el.classList.remove(`bg-${c}-500/10`);
                    el.classList.remove(`border-${c}-500/10`);
                });
                el.classList.add(`bg-${color}-500/10`);
                el.classList.add(`border-${color}-500/10`);
            });

            // Soft Shadow accents
            const softShadowElements = container.querySelectorAll('.accent-soft-shadow');
            softShadowElements.forEach(el => {
                colors.forEach(c => el.classList.remove(`shadow-${c}-500/30`));
                el.classList.add(`shadow-${color}-500/30`);
            });


            // Gradient accents
            const gradElements = container.querySelectorAll('.accent-gradient');
            gradElements.forEach(el => {
                colors.forEach(c => el.classList.remove(`from-${c}-500/5`));
                el.classList.add(`from-${color}-500/5`);
            });

            // Glow Effect
            const glow = container.querySelector('.accent-glow');
            colors.forEach(c => glow.classList.remove(`bg-${c}-500/10`));
            glow.classList.add(`bg-${color}-500/10`);
        }

        // Layout Logic
        function updateLayout(align) {
            if (align === 'left') {
                heroLayout.classList.remove('items-center', 'text-center');
                heroLayout.classList.add('items-start', 'text-left');
                techStack.classList.remove('items-center');
                techStack.classList.add('items-start');
                techStack.querySelector('div').classList.remove('justify-center');
                techStack.querySelector('div').classList.add('justify-start');
            } else {
                heroLayout.classList.remove('items-start', 'text-left');
                heroLayout.classList.add('items-center', 'text-center');
                techStack.classList.remove('items-start');
                techStack.classList.add('items-center');
                techStack.querySelector('div').classList.remove('justify-start');
                techStack.querySelector('div').classList.add('justify-center');
            }
        }

        // Font Logic
        function updateFont(font) {
            container.classList.remove('font-serif-custom', 'font-sans', 'font-mono-custom');
            if(font === 'serif') container.classList.add('font-serif-custom');
            else if(font === 'mono') container.classList.add('font-mono-custom');
            else container.classList.add('font-sans');
        }

        // Initialize
        document.querySelector('.active-dot').classList.remove('opacity-0');
        document.querySelector('.check-indicator').classList.remove('opacity-0');
    
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
      

<aside className="w-80 border-r border-white/5 flex flex-col h-full bg-black/40 backdrop-blur-xl z-20 flex-shrink-0 relative">

<div className="h-16 border-b border-white/5 flex items-center px-6 justify-between flex-shrink-0">
<div className="flex items-center gap-2 text-white font-medium tracking-tight text-sm">
<div className="w-4 h-4 bg-white rounded flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
</div>
                DESIGNER
            </div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8">

<div className="space-y-3">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-600">Appearance</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" name="theme" onchange="updateTheme(this.value)" type="radio" value="dark"/>
<div className="h-16 rounded-md border border-white/10 bg-neutral-900 group-hover:border-white/20 transition-all flex items-center justify-center relative overflow-hidden peer-checked:ring-1 ring-indigo-500 ring-offset-2 ring-offset-black">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
<span className="text-xs font-medium text-white z-10">Dark</span>
</div>
</label>
<label className="cursor-pointer group">
<input name="theme" onchange="updateTheme(this.value)" type="radio" value="light"/>
<div className="h-16 rounded-md border border-white/10 bg-white group-hover:border-white/20 transition-all flex items-center justify-center relative overflow-hidden peer-checked:ring-1 ring-indigo-500 ring-offset-2 ring-offset-black">
<span className="text-xs font-medium text-neutral-900 z-10">Light</span>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-600">Design Style</label>
<div className="space-y-2">

<label className="flex items-center justify-between p-3 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:layout-template"></iconify-icon>
<span className="text-xs font-medium text-neutral-400 group-hover:text-white">Default</span>
</div>
<input checked="" name="design" onchange="updateDesign('default')" type="radio" value="default"/>
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity check-indicator"></div>
</label>

<label className="flex items-center justify-between p-3 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:square"></iconify-icon>
<span className="text-xs font-medium text-neutral-400 group-hover:text-white">Brutal</span>
</div>
<input name="design" onchange="updateDesign('brutal')" type="radio" value="brutal"/>
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity check-indicator"></div>
</label>

<label className="flex items-center justify-between p-3 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:circle"></iconify-icon>
<span className="text-xs font-medium text-neutral-400 group-hover:text-white">Soft</span>
</div>
<input name="design" onchange="updateDesign('soft')" type="radio" value="soft"/>
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity check-indicator"></div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-600">Accent</label>
<div className="flex gap-3 justify-between">

<label className="cursor-pointer">
<input checked="" name="accent" onchange="updateAccent('indigo')" type="radio" value="indigo"/>
<div className="w-8 h-8 rounded-full bg-indigo-500 ring-1 ring-white/10 hover:scale-110 transition-transform relative flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 active-dot transition-opacity"></div>
</div>
</label>

<label className="cursor-pointer">
<input name="accent" onchange="updateAccent('emerald')" type="radio" value="emerald"/>
<div className="w-8 h-8 rounded-full bg-emerald-500 ring-1 ring-white/10 hover:scale-110 transition-transform flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 active-dot transition-opacity"></div>
</div>
</label>

<label className="cursor-pointer">
<input name="accent" onchange="updateAccent('rose')" type="radio" value="rose"/>
<div className="w-8 h-8 rounded-full bg-rose-500 ring-1 ring-white/10 hover:scale-110 transition-transform flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 active-dot transition-opacity"></div>
</div>
</label>

<label className="cursor-pointer">
<input name="accent" onchange="updateAccent('amber')" type="radio" value="amber"/>
<div className="w-8 h-8 rounded-full bg-amber-500 ring-1 ring-white/10 hover:scale-110 transition-transform flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full opacity-0 active-dot transition-opacity"></div>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-600">Structure</label>
<div className="grid grid-cols-2 gap-2">
<label className="flex flex-col items-center gap-2 p-3 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="lucide:align-center"></iconify-icon>
<input checked="" name="layout" onchange="updateLayout('center')" type="radio" value="center"/>
<span className="text-[10px] text-neutral-500">Center</span>
</label>
<label className="flex flex-col items-center gap-2 p-3 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="lucide:align-left"></iconify-icon>
<input name="layout" onchange="updateLayout('left')" type="radio" value="left"/>
<span className="text-[10px] text-neutral-500">Left</span>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-600">Typography</label>
<div className="grid grid-cols-3 gap-2">
<label className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
<input checked="" name="font" onchange="updateFont('sans')" type="radio" value="sans"/>
<span className="text-base font-sans text-white">Ag</span>
<span className="text-[9px] text-neutral-500">Inter</span>
</label>
<label className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
<input name="font" onchange="updateFont('serif')" type="radio" value="serif"/>
<span className="text-base font-serif-custom text-white italic">Ag</span>
<span className="text-[9px] text-neutral-500">Serif</span>
</label>
<label className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
<input name="font" onchange="updateFont('mono')" type="radio" value="mono"/>
<span className="text-base font-mono-custom text-white">Ag</span>
<span className="text-[9px] text-neutral-500">Mono</span>
</label>
</div>
</div>
</div>

<div className="p-6 border-t border-white/5">
<button className="w-full py-2.5 rounded bg-white text-black font-medium text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:code-2" width="14"></iconify-icon>
                Export Code
            </button>
</div>
</aside>

<main className="flex-1 bg-black relative overflow-y-auto overflow-x-hidden">

<div className="group relative min-h-full w-full bg-black text-white transition-colors duration-500" data-accent="indigo" data-design="default" id="preview-container">

<div className="absolute inset-0 opacity-[0.15] pointer-events-none grid-bg transition-opacity duration-500 group-data-[design=soft]:opacity-0" style={{backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>

<div className="absolute inset-0 opacity-0 group-data-[design=soft]:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-rose-500/10 pointer-events-none accent-gradient-bg"></div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/5 nav-border group-data-[design=brutal]:border-b-2 group-data-[design=brutal]:border-neutral-800 group-data-[design=soft]:border-transparent group-data-[design=soft]:bg-transparent">
<div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 font-semibold tracking-tight text-sm logo-text cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center accent-bg group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border group-data-[design=brutal]:border-white group-data-[design=soft]:rounded-xl group-data-[design=soft]:shadow-lg">
<iconify-icon className="text-white" icon="lucide:layers" width="16"></iconify-icon>
</div>
<span className="tracking-tight text-lg group-data-[design=brutal]:uppercase group-data-[design=brutal]:font-bold">KALEIDO</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400 group-data-[design=brutal]:text-neutral-200">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Method</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>

<a className="px-4 py-2 rounded bg-white text-black text-[10px] font-semibold uppercase tracking-wide hover:bg-neutral-200 transition-all group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border group-data-[design=brutal]:border-black group-data-[design=brutal]:shadow-[2px_2px_0px_0px_currentColor] group-data-[design=brutal]:hover:shadow-none group-data-[design=brutal]:hover:translate-x-[1px] group-data-[design=brutal]:hover:translate-y-[1px] group-data-[design=soft]:rounded-xl group-data-[design=soft]:shadow-lg group-data-[design=soft]:shadow-indigo-500/20 group-data-[design=soft]:hover:-translate-y-0.5" href="#">Start</a>
</div>
</div>
</nav>

<section className="pt-24 pb-24 px-8 relative overflow-hidden">

<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none accent-glow opacity-50 group-data-[design=brutal]:opacity-0"></div>
<div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center text-center hero-layout transition-all">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in hover:border-white/20 transition-all cursor-default badge-el group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-2 group-data-[design=brutal]:border-current group-data-[design=brutal]:bg-transparent group-data-[design=soft]:rounded-xl group-data-[design=soft]:bg-indigo-500/10 group-data-[design=soft]:border-indigo-500/10 accent-soft-bg">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 accent-bg group-data-[design=brutal]:rounded-none"></span>
<span className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest group-data-[design=brutal]:text-white">Public Beta</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 pb-2 group-data-[design=brutal]:text-white group-data-[design=brutal]:bg-none group-data-[design=brutal]:font-bold group-data-[design=brutal]:uppercase">
                        Designed for the <br/>
                        future of work.
                    </h1>
<p className="text-base md:text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed font-light group-data-[design=brutal]:font-medium group-data-[design=brutal]:text-neutral-300">
                        Experience a new standard of performance. Beautifully crafted components that scale with your ambition.
                    </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-2 group-data-[design=brutal]:border-current group-data-[design=brutal]:shadow-[4px_4px_0px_0px_currentColor] group-data-[design=brutal]:hover:shadow-none group-data-[design=brutal]:hover:translate-x-[2px] group-data-[design=brutal]:hover:translate-y-[2px] group-data-[design=soft]:rounded-2xl group-data-[design=soft]:shadow-xl group-data-[design=soft]:shadow-indigo-500/30 group-data-[design=soft]:hover:-translate-y-1 accent-soft-shadow">
                            Get Started
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>

<button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 sec-btn group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-2 group-data-[design=brutal]:border-neutral-700 group-data-[design=brutal]:bg-transparent group-data-[design=brutal]:hover:bg-white group-data-[design=brutal]:hover:text-black group-data-[design=soft]:rounded-2xl group-data-[design=soft]:border-0 group-data-[design=soft]:bg-white/5 group-data-[design=soft]:hover:bg-white/10">
<iconify-icon className="text-neutral-400 group-hover:text-current transition-colors" icon="lucide:play-circle" width="16"></iconify-icon>
                            Watch Demo
                        </button>
</div>

<div className="mt-24 w-full flex flex-col items-center gap-6 tech-stack-container border-t border-white/5 pt-8 tech-border group-data-[design=brutal]:border-white/20 group-data-[design=brutal]:border-t-2">
<p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest group-data-[design=brutal]:text-neutral-300">Powering next-gen teams</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale transition-all duration-500 group-data-[design=brutal]:opacity-100 group-data-[design=brutal]:grayscale-0">
<div className="flex items-center gap-2"><iconify-icon icon="lucide:triangle" width="18"></iconify-icon> <span className="font-bold text-xs tracking-widest">DELTA</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="lucide:circle-dashed" width="18"></iconify-icon> <span className="font-bold text-xs tracking-widest">ORBIT</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="lucide:hexagon" width="18"></iconify-icon> <span className="font-bold text-xs tracking-widest">NEXUS</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="lucide:command" width="18"></iconify-icon> <span className="font-bold text-xs tracking-widest">CORE</span></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 border-t border-white/5 bg-white/[0.01] feat-section group-data-[design=brutal]:border-t-2 group-data-[design=brutal]:border-neutral-800 group-data-[design=brutal]:bg-white/[0.02]">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 group-data-[design=brutal]:gap-0 group-data-[design=brutal]:border-2 group-data-[design=brutal]:border-neutral-800">

<div className="group relative p-8 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all hover:-translate-y-1 card-el overflow-hidden group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-r-2 group-data-[design=brutal]:border-b-0 group-data-[design=brutal]:border-l-0 group-data-[design=brutal]:border-t-0 group-data-[design=brutal]:border-neutral-800 group-data-[design=brutal]:hover:translate-y-0 group-data-[design=brutal]:bg-transparent group-data-[design=brutal]:hover:bg-white group-data-[design=brutal]:hover:text-black group-data-[design=soft]:rounded-3xl group-data-[design=soft]:border-0 group-data-[design=soft]:bg-white/5 group-data-[design=soft]:hover:bg-white/10 group-data-[design=soft]:hover:shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity accent-gradient group-data-[design=brutal]:hidden"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-neutral-900 border border-white/10 flex items-center justify-center mb-5 text-white card-icon-bg transition-colors group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-2 group-data-[design=brutal]:border-current group-data-[design=brutal]:bg-transparent group-data-[design=brutal]:group-hover:text-black group-data-[design=soft]:rounded-2xl group-data-[design=soft]:shadow-inner">
<iconify-icon className="accent-text text-indigo-500 group-data-[design=brutal]:text-current" icon="lucide:zap" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2 group-data-[design=brutal]:group-hover:text-black">Instant Sync</h3>
<p className="text-xs text-neutral-400 leading-relaxed group-data-[design=brutal]:group-hover:text-black">
                                    Real-time data synchronization across all devices with zero latency.
                                </p>
</div>
</div>

<div className="group relative p-8 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all hover:-translate-y-1 card-el overflow-hidden group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-r-2 group-data-[design=brutal]:border-b-0 group-data-[design=brutal]:border-l-0 group-data-[design=brutal]:border-t-0 group-data-[design=brutal]:border-neutral-800 group-data-[design=brutal]:hover:translate-y-0 group-data-[design=brutal]:bg-transparent group-data-[design=brutal]:hover:bg-white group-data-[design=brutal]:hover:text-black group-data-[design=soft]:rounded-3xl group-data-[design=soft]:border-0 group-data-[design=soft]:bg-white/5 group-data-[design=soft]:hover:bg-white/10 group-data-[design=soft]:hover:shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity accent-gradient group-data-[design=brutal]:hidden"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-neutral-900 border border-white/10 flex items-center justify-center mb-5 text-white card-icon-bg transition-colors group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-2 group-data-[design=brutal]:border-current group-data-[design=brutal]:bg-transparent group-data-[design=brutal]:group-hover:text-black group-data-[design=soft]:rounded-2xl group-data-[design=soft]:shadow-inner">
<iconify-icon className="accent-text text-indigo-500 group-data-[design=brutal]:text-current" icon="lucide:lock" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2 group-data-[design=brutal]:group-hover:text-black">Encrypted</h3>
<p className="text-xs text-neutral-400 leading-relaxed group-data-[design=brutal]:group-hover:text-black">
                                    End-to-end encryption ensures your data remains exclusively yours.
                                </p>
</div>
</div>

<div className="group relative p-8 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all hover:-translate-y-1 card-el overflow-hidden group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-none group-data-[design=brutal]:hover:translate-y-0 group-data-[design=brutal]:bg-transparent group-data-[design=brutal]:hover:bg-white group-data-[design=brutal]:hover:text-black group-data-[design=soft]:rounded-3xl group-data-[design=soft]:border-0 group-data-[design=soft]:bg-white/5 group-data-[design=soft]:hover:bg-white/10 group-data-[design=soft]:hover:shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity accent-gradient group-data-[design=brutal]:hidden"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-neutral-900 border border-white/10 flex items-center justify-center mb-5 text-white card-icon-bg transition-colors group-data-[design=brutal]:rounded-none group-data-[design=brutal]:border-2 group-data-[design=brutal]:border-current group-data-[design=brutal]:bg-transparent group-data-[design=brutal]:group-hover:text-black group-data-[design=soft]:rounded-2xl group-data-[design=soft]:shadow-inner">
<iconify-icon className="accent-text text-indigo-500 group-data-[design=brutal]:text-current" icon="lucide:activity" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2 group-data-[design=brutal]:group-hover:text-black">Analytics</h3>
<p className="text-xs text-neutral-400 leading-relaxed group-data-[design=brutal]:group-hover:text-black">
                                    Gain deep insights with our integrated and privacy-focused dashboard.
                                </p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<div className="hidden text-indigo-500 bg-indigo-500 bg-indigo-500/10 from-indigo-500/5 shadow-indigo-500/20 shadow-indigo-500/30 border-indigo-500/10 text-emerald-500 bg-emerald-500 bg-emerald-500/10 from-emerald-500/5 shadow-emerald-500/20 shadow-emerald-500/30 border-emerald-500/10 text-rose-500 bg-rose-500 bg-rose-500/10 from-rose-500/5 shadow-rose-500/20 shadow-rose-500/30 border-rose-500/10 text-amber-500 bg-amber-500 bg-amber-500/10 from-amber-500/5 shadow-amber-500/20 shadow-amber-500/30 border-amber-500/10 items-start items-center text-left text-center justify-start justify-center font-serif-custom font-sans font-mono-custom bg-white text-black bg-neutral-50 border-neutral-200 bg-neutral-100 rounded-none rounded-xl rounded-2xl rounded-3xl shadow-sm shadow-md shadow-lg shadow-xl shadow-2xl border-0 border border-2 border-b-2 from-neutral-900 via-neutral-900 to-neutral-900/60"></div>


    </>
  );
}
