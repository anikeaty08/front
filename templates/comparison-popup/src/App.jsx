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



        // Icon Initialization
        lucide.createIcons();

        // Modal Logic
        const overlay = document.getElementById('modal-overlay');
        const content = document.getElementById('modal-content');
        const body = document.body;

        function openModal() {
            // Show overlay
            overlay.classList.remove('opacity-0', 'invisible');
            
            // Animate content in
            setTimeout(() => {
                content.classList.remove('opacity-0', 'scale-95');
                content.classList.add('opacity-100', 'scale-100');
            }, 10);

            // Lock scroll
            body.classList.add('no-scroll');
        }

        function closeModal() {
            // Animate content out
            content.classList.remove('opacity-100', 'scale-100');
            content.classList.add('opacity-0', 'scale-95');

            // Hide overlay after animation
            setTimeout(() => {
                overlay.classList.add('opacity-0', 'invisible');
                body.classList.remove('no-scroll');
            }, 200);
        }

        // Close on Click Outside
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });

        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !overlay.classList.contains('invisible')) {
                closeModal();
            }
        });

        // Open modal on load for preview
        window.addEventListener('load', () => {
             setTimeout(openModal, 300);
        });
    
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
      

<button className="bg-stone-900 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-stone-800 transition-colors shadow-lg" onclick="openModal()">
        Compare Sleepal
    </button>

<div aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-900/40 backdrop-blur-sm opacity-0 invisible" id="modal-overlay">

<div className="relative w-full max-w-5xl bg-[#FCFAF7] rounded-xl shadow-2xl flex flex-col max-h-[85vh] opacity-0 scale-95 ring-1 ring-black/5 overflow-hidden" id="modal-content">

<div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-white/80 backdrop-blur shrink-0 z-20">
<div>
<h2 className="text-lg font-semibold tracking-tight text-stone-900">Compare Features</h2>
<p className="text-sm text-stone-500 mt-0.5">See why Sleepal is the advanced choice.</p>
</div>
<button className="text-stone-400 hover:text-stone-900 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-200" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="overflow-y-auto scrollbar-hide flex-1 bg-[#FCFAF7]">

<div className="hidden md:block p-8">
<table className="w-full text-left border-collapse table-fixed">
<thead>
<tr>
<th className="w-[30%] pb-6 pl-2 text-sm font-medium text-stone-500">Features</th>

<th className="w-[25%] pb-6 px-4 text-center align-bottom bg-stone-100/50 rounded-t-lg border-x border-t border-stone-200/50 relative">
<div className="text-lg font-semibold tracking-tight text-stone-900 mb-1">Sleepal</div>
<div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">Recommended</div>
</th>
<th className="w-[22%] pb-6 px-4 text-center align-bottom text-sm font-medium text-stone-500">Wearables</th>
<th className="w-[22%] pb-6 px-4 text-center align-bottom text-sm font-medium text-stone-500 leading-tight">Under-Mattress<br/>Tracker</th>
</tr>
</thead>
<tbody className="text-sm text-stone-700">

<tr className="group">
<td className="py-4 pl-2 border-b border-stone-200/60 font-medium text-stone-900">Contact-Free Use</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60 bg-stone-100/30 border-x border-stone-100">
<i className="w-5 h-5 text-stone-900 fill-stone-200 mx-auto" data-lucide="check-circle-2"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="x"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-400 mx-auto" data-lucide="check"></i>
</td>
</tr>

<tr className="group">
<td className="py-4 pl-2 border-b border-stone-200/60 font-medium text-stone-900 flex items-center gap-1.5">
                                    Motion &amp; Breathing Precision
                                    <div className="group/tooltip relative inline-flex items-center justify-center cursor-help">
<i className="w-3.5 h-3.5 text-stone-400 hover:text-stone-600" data-lucide="info"></i>
<div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-stone-900 text-white text-xs rounded-md shadow-xl hidden group-hover/tooltip:block z-50 leading-relaxed font-normal">
                                            Detects micro-movements and respiration rates without body contact.
                                        </div>
</div>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60 bg-stone-100/30 border-x border-stone-100">
<i className="w-5 h-5 text-stone-900 fill-stone-200 mx-auto" data-lucide="check-circle-2"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<div className="group/tip relative inline-block">
<i className="w-5 h-5 text-stone-300 hover:text-stone-500 transition-colors mx-auto cursor-help" data-lucide="help-circle"></i>
</div>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="x"></i>
</td>
</tr>

<tr className="group">
<td className="py-4 pl-2 border-b border-stone-200/60 font-medium text-stone-900 flex items-center gap-1.5">
                                    Clinical-Grade Accuracy (PSG)
                                    <div className="group/tooltip relative inline-flex items-center justify-center cursor-help">
<i className="w-3.5 h-3.5 text-stone-400 hover:text-stone-600" data-lucide="info"></i>
<div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-52 p-2 bg-stone-900 text-white text-xs rounded-md shadow-xl hidden group-hover/tooltip:block z-50 leading-relaxed font-normal">
                                            Polysomnography equivalent data tracking for deep health insights.
                                        </div>
</div>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60 bg-stone-100/30 border-x border-stone-100">
<i className="w-5 h-5 text-stone-900 fill-stone-200 mx-auto" data-lucide="check-circle-2"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="help-circle"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="x"></i>
</td>
</tr>

<tr className="group">
<td className="py-4 pl-2 border-b border-stone-200/60 font-medium text-stone-900">Adaptive Sleep Support (Light + Sound)</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60 bg-stone-100/30 border-x border-stone-100">
<i className="w-5 h-5 text-stone-900 fill-stone-200 mx-auto" data-lucide="check-circle-2"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="x"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="x"></i>
</td>
</tr>

<tr className="group">
<td className="py-4 pl-2 border-b border-stone-200/60 font-medium text-stone-900">AI-Timed Wake Window</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60 bg-stone-100/30 border-x border-stone-100">
<i className="w-5 h-5 text-stone-900 fill-stone-200 mx-auto" data-lucide="check-circle-2"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="x"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200/60">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="x"></i>
</td>
</tr>

<tr className="group">
<td className="py-4 pl-2 border-b border-stone-200 font-medium text-stone-900">Smart Home Integration</td>
<td className="py-4 px-4 text-center border-b border-stone-200 bg-stone-100/30 border-x border-stone-100">
<i className="w-5 h-5 text-stone-900 fill-stone-200 mx-auto" data-lucide="check-circle-2"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200">
<i className="w-5 h-5 text-stone-400 mx-auto" data-lucide="check"></i>
</td>
<td className="py-4 px-4 text-center border-b border-stone-200">
<i className="w-5 h-5 text-stone-300 mx-auto" data-lucide="x"></i>
</td>
</tr>

<tr className="group">
<td className="pt-6 pl-2 text-sm font-medium text-stone-500 align-top">One-time Investment</td>
<td className="pt-6 px-4 text-center bg-stone-100/50 rounded-b-lg border-x border-b border-stone-200/50 pb-6">
<div className="text-xl font-semibold text-stone-900 tracking-tight">$499.00</div>
<div className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                                        All features included<br/>No subscription required
                                    </div>
</td>
<td className="pt-6 px-4 text-center align-top">
<div className="text-lg font-medium text-stone-500">$449.00</div>
</td>
<td className="pt-6 px-4 text-center align-top">
<div className="text-lg font-medium text-stone-500">$299.00</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="md:hidden flex flex-col gap-6 p-6">

<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden ring-1 ring-stone-900/5">
<div className="bg-stone-50 p-5 border-b border-stone-100 flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Sleepal</h3>
<div className="mt-1 text-sm font-medium text-emerald-700">Recommended Choice</div>
</div>
<div className="text-right">
<div className="text-lg font-bold text-stone-900">$499</div>
<div className="text-[10px] text-stone-500 font-medium">No subscription</div>
</div>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center gap-3 text-sm text-stone-700">
<i className="w-4 h-4 text-stone-900 fill-stone-100 shrink-0" data-lucide="check-circle-2"></i>
                                Contact-Free Use
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<i className="w-4 h-4 text-stone-900 fill-stone-100 shrink-0" data-lucide="check-circle-2"></i>
                                Motion &amp; Breathing Precision
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<i className="w-4 h-4 text-stone-900 fill-stone-100 shrink-0" data-lucide="check-circle-2"></i>
                                Clinical-Grade Accuracy (PSG)
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<i className="w-4 h-4 text-stone-900 fill-stone-100 shrink-0" data-lucide="check-circle-2"></i>
                                Adaptive Sleep Support
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<i className="w-4 h-4 text-stone-900 fill-stone-100 shrink-0" data-lucide="check-circle-2"></i>
                                AI-Timed Wake Window
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<i className="w-4 h-4 text-stone-900 fill-stone-100 shrink-0" data-lucide="check-circle-2"></i>
                                Smart Home Integration
                            </div>
</div>
</div>

<div className="bg-stone-50/50 rounded-xl border border-stone-200 p-5 opacity-90 grayscale-[0.3]">
<div className="flex justify-between items-center mb-4 border-b border-stone-200/60 pb-3">
<h3 className="text-base font-medium text-stone-600">Wearables</h3>
<span className="text-sm font-medium text-stone-500">$449</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-stone-500">
<i className="w-4 h-4 text-stone-300 shrink-0" data-lucide="x"></i>
                                Contact-Free Use
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-500">
<i className="w-4 h-4 text-stone-400 shrink-0" data-lucide="help-circle"></i>
                                Clinical Accuracy
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-500">
<i className="w-4 h-4 text-stone-400 shrink-0" data-lucide="check"></i>
                                Smart Home Integration
                            </div>
</div>
</div>

<div className="bg-stone-50/50 rounded-xl border border-stone-200 p-5 opacity-90 grayscale-[0.3]">
<div className="flex justify-between items-center mb-4 border-b border-stone-200/60 pb-3">
<h3 className="text-base font-medium text-stone-600">Under-Mattress</h3>
<span className="text-sm font-medium text-stone-500">$299</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-stone-500">
<i className="w-4 h-4 text-stone-400 shrink-0" data-lucide="check"></i>
                                Contact-Free Use
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-500">
<i className="w-4 h-4 text-stone-300 shrink-0" data-lucide="x"></i>
                                Adaptive Sleep Support
                            </div>
<div className="flex items-center gap-3 text-sm text-stone-500">
<i className="w-4 h-4 text-stone-300 shrink-0" data-lucide="x"></i>
                                Clinical Accuracy
                            </div>
</div>
</div>
</div>
</div>

<div className="p-4 md:px-6 md:py-5 border-t border-stone-200 bg-white z-30 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 shrink-0">
<button className="w-full sm:w-auto text-stone-500 hover:text-stone-900 font-medium text-sm transition-colors py-2.5">
                    Learn how it works
                </button>
<button className="w-full sm:w-auto bg-stone-900 hover:bg-black text-white px-8 py-2.5 rounded-lg font-medium text-sm transition-all shadow-sm hover:shadow active:scale-[0.98] flex items-center justify-center gap-2">
                    Choose Sleepal <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>


    </>
  );
}
