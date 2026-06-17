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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Screen Management
        const screens = {
            overview: document.getElementById('screen-overview'),
            progress: document.getElementById('screen-progress'),
            results: document.getElementById('screen-results')
        };

        function switchScreen(screenName) {
            // Hide all
            Object.values(screens).forEach(el => {
                el.classList.remove('active-screen');
                el.classList.add('hidden-screen');
            });
            // Show target
            const target = screens[screenName];
            target.classList.remove('hidden-screen');
            target.classList.add('active-screen');
            
            // Re-init icons just in case dynamics need it (rarely needed but safe)
            lucide.createIcons();
        }

        function resetFlow() {
            switchScreen('overview');
            resetProgress();
        }

        // Progress Animation Logic
        function startAnalysis() {
            switchScreen('progress');
            
            const steps = [
                { id: 'step-1', delay: 800 },
                { id: 'step-2', delay: 1800 },
                { id: 'step-3', delay: 3200 },
                { id: 'step-4', delay: 4200 }
            ];

            let completedCount = 0;

            steps.forEach((step, index) => {
                setTimeout(() => {
                    activateStep(step.id);
                    
                    // If it's the last step, transition to results after a pause
                    if (index === steps.length - 1) {
                        setTimeout(() => {
                            switchScreen('results');
                        }, 1200);
                    }
                }, step.delay);
            });
        }

        function activateStep(elementId) {
            const el = document.getElementById(elementId);
            const iconContainer = el.querySelector('.step-icon');
            const text = el.querySelector('.step-text');

            // Reset previous active steps to "Done" state visually if needed, 
            // but for this design we just mark them complete as we go down.
            
            // Update current step to active/done
            el.classList.remove('opacity-40');
            
            // Change Icon to Check
            iconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            iconContainer.classList.remove('bg-slate-100', 'text-slate-400', 'ring-4', 'ring-indigo-50', 'bg-indigo-100', 'text-indigo-600');
            iconContainer.classList.add('bg-emerald-500', 'text-white', 'scale-110'); // Success state

            // Animate text color
            text.classList.remove('text-slate-700');
            text.classList.add('text-slate-900');
        }

        function resetProgress() {
            const steps = ['step-1', 'step-2', 'step-3', 'step-4'];
            steps.forEach((id, index) => {
                const el = document.getElementById(id);
                const iconContainer = el.querySelector('.step-icon');
                
                // Reset Opacity (first one visible, others dimmed)
                if(index === 0) el.classList.remove('opacity-40');
                else el.classList.add('opacity-40');

                // Reset Icon
                iconContainer.classList.remove('bg-emerald-500', 'text-white', 'scale-110');
                
                if(index === 0) {
                     // Loading state for first
                     iconContainer.classList.add('bg-indigo-100', 'text-indigo-600', 'ring-4', 'ring-indigo-50');
                     iconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>';
                } else {
                    // Pending state for others
                    iconContainer.classList.add('bg-slate-100', 'text-slate-400');
                    iconContainer.classList.remove('ring-4', 'ring-indigo-50');
                    iconContainer.innerHTML = '<div class="w-2 h-2 rounded-full bg-slate-300"></div>';
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
      

<div className="relative w-full h-full max-w-md bg-slate-50 shadow-2xl overflow-hidden sm:rounded-3xl border border-slate-200/60">

<div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-50/80 via-white/50 to-transparent pointer-events-none z-0"></div>

<div className="screen active-screen z-10 flex flex-col hide-scrollbar" id="screen-overview">

<header className="relative z-10 px-6 pt-12 pb-4 flex items-center justify-between">
<button className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<span className="text-sm font-medium tracking-tight text-slate-500 uppercase">New Analysis</span>
<button className="p-2 -mr-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal"></i>
</button>
</header>

<main className="flex-1 px-6 pb-32 relative z-10">

<div className="w-full aspect-[9/16] max-h-[420px] bg-slate-200 rounded-3xl overflow-hidden shadow-sm relative mb-8 group">

<img alt="Reel Thumbnail" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
<div className="flex items-center gap-2 text-white/90 mb-1">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span className="text-sm font-medium">0:45</span>
</div>
<h2 className="text-white font-medium text-lg tracking-tight leading-snug">
                            How to design better UI components in 2024
                        </h2>
</div>
</div>

<div className="grid grid-cols-3 gap-y-6 gap-x-4 mb-8">
<div className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
<i className="w-5 h-5 text-indigo-500 mb-2" data-lucide="eye"></i>
<span className="text-lg font-semibold tracking-tight text-slate-900">12.4k</span>
<span className="text-xs text-slate-400">Views</span>
</div>
<div className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
<i className="w-5 h-5 text-rose-500 mb-2" data-lucide="heart"></i>
<span className="text-lg font-semibold tracking-tight text-slate-900">842</span>
<span className="text-xs text-slate-400">Likes</span>
</div>
<div className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
<i className="w-5 h-5 text-blue-500 mb-2" data-lucide="message-circle"></i>
<span className="text-lg font-semibold tracking-tight text-slate-900">124</span>
<span className="text-xs text-slate-400">Comments</span>
</div>
<div className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
<i className="w-5 h-5 text-emerald-500 mb-2" data-lucide="bookmark"></i>
<span className="text-lg font-semibold tracking-tight text-slate-900">450</span>
<span className="text-xs text-slate-400">Saves</span>
</div>
<div className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
<i className="w-5 h-5 text-amber-500 mb-2" data-lucide="share-2"></i>
<span className="text-lg font-semibold tracking-tight text-slate-900">89</span>
<span className="text-xs text-slate-400">Shares</span>
</div>
<div className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
<i className="w-5 h-5 text-slate-400 mb-2" data-lucide="calendar"></i>
<span className="text-lg font-semibold tracking-tight text-slate-900">2d</span>
<span className="text-xs text-slate-400">Ago</span>
</div>
</div>
</main>

<div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-slate-100 p-6 z-20">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-lg py-4 rounded-2xl shadow-lg shadow-slate-900/10 flex items-center justify-center gap-3 transition-all active:scale-[0.98]" onclick="startAnalysis()">
<i className="w-5 h-5 text-indigo-300" data-lucide="sparkles"></i>
                    Analyze with AI
                </button>
<p className="text-center text-slate-400 text-sm mt-4 leading-relaxed">
                    Deep analysis takes ~90 seconds. <br/>You can leave and we’ll finish in the background.
                </p>
</div>
</div>

<div className="screen hidden-screen z-10 flex flex-col hide-scrollbar bg-slate-50" id="screen-progress">
<header className="px-6 pt-12 pb-4 flex items-center justify-center relative">
<button className="absolute left-6 p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors" onclick="resetFlow()">
<i className="w-6 h-6" data-lucide="arrow-left"></i>
</button>
<span className="text-base font-medium text-slate-800 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    AI Processing
                </span>
</header>
<main className="flex-1 px-6 pb-12 flex flex-col items-center justify-center">

<div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md mb-10 border-2 border-white ring-1 ring-slate-100 animate-float">
<img alt="Reel Thumbnail" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-full max-w-sm space-y-6">

<div className="flex items-center gap-4 step-item" id="step-1">
<div className="step-icon flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 ring-4 ring-indigo-50 transition-all duration-500">
<i className="w-4 h-4 animate-spin" data-lucide="loader-2"></i>
</div>
<span className="text-slate-700 text-lg font-medium step-text opacity-100 transition-opacity">Extracting reel data</span>
</div>

<div className="flex items-center gap-4 step-item opacity-40" id="step-2">
<div className="step-icon flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-400 transition-all duration-500">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>
<span className="text-slate-700 text-lg font-medium step-text">Reading transcript</span>
</div>

<div className="flex items-center gap-4 step-item opacity-40" id="step-3">
<div className="step-icon flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-400 transition-all duration-500">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>
<span className="text-slate-700 text-lg font-medium step-text">Analyzing hook signals</span>
</div>

<div className="flex items-center gap-4 step-item opacity-40" id="step-4">
<div className="step-icon flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-400 transition-all duration-500">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>
<span className="text-slate-700 text-lg font-medium step-text">Generating suggestions</span>
</div>
</div>
<div className="mt-auto pt-16 text-center">
<p className="text-slate-400 text-sm">
                        You can go back. Analysis will continue in the background.
                    </p>
</div>
</main>
</div>

<div className="screen hidden-screen z-10 flex flex-col hide-scrollbar" id="screen-results">

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 pt-12 pb-4 flex items-center justify-between">
<button className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors" onclick="resetFlow()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900 tracking-tight">How to design...</span>
<span className="text-[10px] text-slate-500">2d ago • 12.4k views</span>
</div>
</div>
<button className="p-2 -mr-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
<i className="w-6 h-6" data-lucide="share"></i>
</button>
</header>
<main className="flex-1 px-6 pt-6 pb-32">

<section className="mb-10">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-5 flex items-center gap-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="microscope"></i>
                        Observations
                    </h3>

<div className="bg-white rounded-2xl p-5 border-l-4 border-emerald-400 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mb-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-semibold text-slate-800">Strong Visual Hook</h4>
<span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">Working</span>
</div>
<p className="text-slate-600 text-base leading-relaxed mb-3">
                            The rapid cuts in the first 3 seconds effectively stopped the scroll. Retention is high initially.
                        </p>
<div className="flex gap-2">
<span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Visuals</span>
<span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Pacing</span>
</div>
</div>

<div className="bg-white rounded-2xl p-5 border-l-4 border-amber-400 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-semibold text-slate-800">Low Save Rate</h4>
<span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full font-medium">Needs Focus</span>
</div>
<p className="text-slate-600 text-base leading-relaxed mb-3">
                            Viewers are watching but not saving. The value payload is too abstract and hard to reference later.
                        </p>
<div className="flex gap-2">
<span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Script</span>
<span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">CTA</span>
</div>
</div>
</section>

<section className="mb-10">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-5 flex items-center gap-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="bar-chart-2"></i>
                        Metric Deep Dive
                    </h3>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-6">
<div className="bg-slate-50/50 p-4 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-600">
<i className="w-4 h-4" data-lucide="bookmark"></i>
</div>
<span className="font-semibold text-slate-900">Saves Analysis</span>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Below Avg</span>
</div>
<div className="p-5">
<p className="text-slate-600 text-sm mb-4">
                                The middle section is conversational but lacks dense, save-worthy information.
                            </p>
<div className="space-y-4">
<div>
<div className="flex items-center gap-2 mb-1.5">
<i className="w-3 h-3 text-slate-400" data-lucide="quote"></i>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Original Audio</span>
</div>
<div className="p-3 bg-red-50/50 rounded-xl border border-red-100 text-slate-600 text-base italic relative">
                                        "So basically you just need to ensure the spacing is right, it makes it look better."
                                    </div>
</div>
<div className="flex justify-center -my-2 relative z-10">
<div className="bg-white border border-slate-200 rounded-full p-1 shadow-sm">
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-down"></i>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1.5">
<i className="w-3 h-3 text-indigo-500" data-lucide="wand-2"></i>
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Better Alternative</span>
</div>
<div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 text-slate-800 text-base font-medium relative">
                                        "Use the 4-point grid system. Multiples of 4 for spacing creates instant visual harmony."
                                    </div>
<p className="text-xs text-indigo-500 mt-2 ml-1">
<i className="w-3 h-3 inline mr-1" data-lucide="check"></i>
                                        Specific rules trigger saves.
                                    </p>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl shadow-slate-900/20 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
<h3 className="text-lg font-semibold mb-6 flex items-center gap-2 relative z-10">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="zap"></i>
                            Action Plan: Next Reel
                        </h3>
<ul className="space-y-5 relative z-10">
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold border border-white/10">1</span>
<div>
<p className="font-medium text-base text-slate-100">Specific over General</p>
<p className="text-sm text-slate-400 mt-1 leading-snug">Replace "good spacing" with "4px grid system" to drive authority.</p>
</div>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold border border-white/10">2</span>
<div>
<p className="font-medium text-base text-slate-100">Visual Save Trigger</p>
<p className="text-sm text-slate-400 mt-1 leading-snug">Display a checklist summary at 0:45 for 3 seconds.</p>
</div>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold border border-white/10">3</span>
<div>
<p className="font-medium text-base text-slate-100">Reduce Intro Pause</p>
<p className="text-sm text-slate-400 mt-1 leading-snug">Cut the breath at 0:02. Start speaking immediately.</p>
</div>
</li>
</ul>
</div>
</section>
</main>
</div>
</div>


    </>
  );
}
