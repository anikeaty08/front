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



        function openModal(id) {
            const modal = document.getElementById(id + 'Modal');
            if (modal) {
                modal.classList.remove('hidden');
            }
        }

        function closeModal(id) {
            const modal = document.getElementById(id + 'Modal');
            if (modal) {
                modal.classList.add('hidden');
            }
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-40">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:moon-stars-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900 text-sm">dreamweaver</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Stories</a>
<a className="hover:text-slate-900 transition-colors" href="#">Library</a>
<a className="hover:text-slate-900 transition-colors" href="#" onclick="openModal('pricing')">Pricing</a>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900">Sign In</button>
<button className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-slate-800 transition-all shadow-sm shadow-slate-200" onclick="openModal('pricing')">Upgrade</button>
</div>
</div>
</nav>

<div className="pt-20 pb-12 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-80px)]">

<div className="lg:col-span-4 flex flex-col gap-6 h-full overflow-y-auto no-scrollbar pb-20">
<div className="space-y-1">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Create a Story</h1>
<p className="text-xs text-slate-400">Configure the details to generate a magical tale.</p>
</div>

<div className="space-y-5">

<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Type</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-slate-400 focus:ring-0 transition-all cursor-pointer">
<option>Auto</option>
<option>Fairy Tale</option>
<option>Myth</option>
<option>Fable</option>
<option>Folklore</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Length</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-slate-400 focus:ring-0 transition-all cursor-pointer">
<option>Auto</option>
<option>Short (~2 min)</option>
<option>Medium (~5 min)</option>
<option>Long (~10 min)</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Genre</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-slate-400 focus:ring-0 transition-all cursor-pointer">
<option>Auto</option>
<option>Adventure</option>
<option>Fantasy</option>
<option>Science Fiction</option>
<option>Mystery</option>
<option>Comedy</option>
<option>Educational</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Perspective</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-slate-400 focus:ring-0 transition-all cursor-pointer">
<option>Auto</option>
<option>Third Person</option>
<option>First Person</option>
<option>Second Person</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
<div className="flex justify-between items-center">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Child's Age</label>
<span className="text-xs font-semibold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm" id="ageDisplay">5 Years</span>
</div>
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="12" min="2" oninput="document.getElementById('ageDisplay').innerText = this.value + ' Years'" type="range" value="5"/>
</div>

<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Child Interests &amp; Personality</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-0 transition-all" placeholder="e.g. loves dinosaurs, shy but brave..." type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Educational Themes</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-0 transition-all" placeholder="e.g. sharing, honesty, counting..." type="text"/>
</div>

<div className="h-px bg-slate-100 my-4"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:star-stars-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-900">Advanced Features</span>
</div>


<div className="group relative cursor-pointer" onclick="openModal('pricing')">
<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-1 bg-slate-900 text-white px-2 py-1 rounded shadow-lg">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="12"></iconify-icon>
<span className="text-[10px] font-medium">Upgrade</span>
</div>
</div>
<div className="space-y-1.5 opacity-60">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1">
                            Audio Narration
                            <iconify-icon className="text-amber-500" icon="solar:crown-line-duotone" width="12"></iconify-icon>
</label>
<div className="relative">
<div className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-400 flex justify-between items-center">
<span>Select Voice Actor...</span>
<iconify-icon icon="solar:microphone-2-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="group relative cursor-pointer" onclick="openModal('pricing')">
<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-1 bg-slate-900 text-white px-2 py-1 rounded shadow-lg">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="12"></iconify-icon>
<span className="text-[10px] font-medium">Upgrade</span>
</div>
</div>
<div className="space-y-1.5 opacity-60">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1">
                                Characters
                                <iconify-icon className="text-amber-500" icon="solar:crown-line-duotone" width="12"></iconify-icon>
</label>
<div className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-400 flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Add Custom...</span>
</div>
</div>
</div>
<div className="group relative cursor-pointer" onclick="openModal('pricing')">
<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-1 bg-slate-900 text-white px-2 py-1 rounded shadow-lg">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="12"></iconify-icon>
<span className="text-[10px] font-medium">Upgrade</span>
</div>
</div>
<div className="space-y-1.5 opacity-60">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1">
                                Instructions
                                <iconify-icon className="text-amber-500" icon="solar:crown-line-duotone" width="12"></iconify-icon>
</label>
<div className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-400 flex items-center gap-2">
<iconify-icon icon="solar:document-add-linear" width="14"></iconify-icon>
<span>Advanced...</span>
</div>
</div>
</div>
</div>

<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg py-3 text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-200 mt-4">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Generate Story
                </button>
<div className="text-center">
<p className="text-[10px] text-slate-400">2 free generations remaining this month.</p>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col h-full relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="flex-1 flex flex-col items-center justify-center text-center z-10">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-6">
<iconify-icon className="text-slate-300" icon="solar:book-2-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-slate-900 mb-2">Ready to weave a dream?</h2>
<p className="text-sm text-slate-500 max-w-sm">Adjust the settings on the left to create a personalized bedtime story for your child. The magic happens here.</p>
<div className="mt-8 flex gap-3">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:border-slate-300 transition-colors shadow-sm">
                        View Example
                    </button>

<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-400 flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer group" onclick="openModal('pricing')">
<iconify-icon className="group-hover:text-indigo-500" icon="solar:lock-keyhole-minimalistic-linear" width="12"></iconify-icon>
                        Create Sequel
                    </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="pricingModal">

<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" onclick="closeModal('pricing')"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4">
<div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
<div className="p-6 md:p-8 text-center border-b border-slate-100 relative">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-900" onclick="closeModal('pricing')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-2">Unlock the full magic</h2>
<p className="text-sm text-slate-500">Choose a plan to access voice narration, sequels, and more.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">

<div className="p-6 flex flex-col h-full bg-slate-50/50">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Free</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-2xl font-semibold text-slate-900">$0</span>
<span className="text-xs text-slate-500">/month</span>
</div>
</div>
<ul className="space-y-3 mb-6 flex-1">
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                3 Stories per month
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                Standard customization
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon>
                                No Audio
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon>
                                No Sequels
                            </li>
</ul>
<button className="w-full py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 bg-white hover:bg-slate-50">Current Plan</button>
</div>

<div className="p-6 flex flex-col h-full relative">
<div className="mb-4">
<h3 className="font-medium text-indigo-600">Basic</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-2xl font-semibold text-slate-900">$9</span>
<span className="text-xs text-slate-500">/month</span>
</div>
</div>
<ul className="space-y-3 mb-6 flex-1">
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                20 Stories per month
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                3 Custom characters
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                5 Sequels per story
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                Voice Generation
                            </li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 shadow-md shadow-indigo-100">Upgrade to Basic</button>
</div>

<div className="p-6 flex flex-col h-full">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Pro</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-2xl font-semibold text-slate-900">$19</span>
<span className="text-xs text-slate-500">/month</span>
</div>
</div>
<ul className="space-y-3 mb-6 flex-1">
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-slate-900" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                30 Stories per month
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-slate-900" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                10 Custom characters
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-slate-900" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                Unlimited Sequels
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-slate-900" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                Priority Generation
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-700">
<iconify-icon className="text-slate-900" icon="solar:check-circle-bold" width="14"></iconify-icon>
                                Advanced Instructions*
                            </li>
</ul>
<p className="text-[10px] text-slate-400 mb-2 leading-tight">*Does not include custom character requests via instructions.</p>
<button className="w-full py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-900 bg-white hover:bg-slate-50">Upgrade to Pro</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
