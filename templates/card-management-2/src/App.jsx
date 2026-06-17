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



        // Elements
        const freezeToggle = document.getElementById('freeze-toggle');
        const blockBtn = document.getElementById('block-btn');
        const statusBadge = document.getElementById('status-badge');
        const statusDot = document.getElementById('status-dot');
        const statusText = document.getElementById('status-text');
        const cardOverlay = document.getElementById('card-overlay');

        // Modals
        const modalFreeze = document.getElementById('modal-freeze');
        const modalUnfreeze = document.getElementById('modal-unfreeze');
        const modalBlock = document.getElementById('modal-block');

        // State (Simulated)
        let isFrozen = false;
        let isBlocked = false;

        // Toggle Logic (Freeze/Unfreeze)
        freezeToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Stop toggle immediate change
            
            if (isBlocked) return; // Do nothing if blocked

            if (!isFrozen) {
                // Open Freeze Modal
                modalFreeze.classList.remove('hidden');
            } else {
                // Open Unfreeze Modal
                modalUnfreeze.classList.remove('hidden');
            }
        });

        // Block Button Logic
        blockBtn.addEventListener('click', () => {
            if (isBlocked) return;
            modalBlock.classList.remove('hidden');
        });

        // --- Action Handlers ---

        // 1. Confirm Freeze
        document.getElementById('confirm-freeze').addEventListener('click', () => {
            isFrozen = true;
            updateUIState();
            closeAllModals();
        });

        // 2. Confirm Unfreeze
        document.getElementById('confirm-unfreeze').addEventListener('click', () => {
            isFrozen = false;
            updateUIState();
            closeAllModals();
        });

        // 3. Confirm Block
        document.getElementById('confirm-block').addEventListener('click', () => {
            isBlocked = true;
            // Also freeze conceptually
            isFrozen = true;
            updateUIState();
            closeAllModals();
        });

        // --- Cancel Handlers ---
        document.getElementById('cancel-freeze').addEventListener('click', closeAllModals);
        document.getElementById('cancel-unfreeze').addEventListener('click', closeAllModals);
        document.getElementById('cancel-block').addEventListener('click', closeAllModals);

        // Helper: Close Modals
        function closeAllModals() {
            modalFreeze.classList.add('hidden');
            modalUnfreeze.classList.add('hidden');
            modalBlock.classList.add('hidden');
        }

        // Helper: Update UI
        function updateUIState() {
            // Checkbox visual
            freezeToggle.checked = isFrozen;

            if (isBlocked) {
                // Blocked State
                statusBadge.className = "inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full transition-colors duration-300";
                statusDot.className = "w-2 h-2 rounded-full bg-red-500";
                statusText.className = "text-xs font-medium text-red-700";
                statusText.textContent = "Card Blocked";
                
                freezeToggle.disabled = true;
                
                cardOverlay.classList.remove('hidden');
                cardOverlay.classList.add('flex');
                cardOverlay.innerHTML = '<span class="iconify text-white/80 mb-2" data-icon="lucide:ban" data-width="32" data-height="32"></span><span class="text-sm font-semibold tracking-wide text-white">BLOCKED PERMANENTLY</span>';
                
            } else if (isFrozen) {
                // Frozen State
                statusBadge.className = "inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full transition-colors duration-300";
                statusDot.className = "w-2 h-2 rounded-full bg-blue-500";
                statusText.className = "text-xs font-medium text-blue-700";
                statusText.textContent = "Temporarily Frozen";
                
                cardOverlay.classList.remove('hidden');
                cardOverlay.classList.add('flex');
                cardOverlay.innerHTML = '<span class="iconify text-white/80 mb-2" data-icon="lucide:lock" data-width="32" data-height="32"></span><span class="text-sm font-semibold tracking-wide text-white">CARD FROZEN</span>';

            } else {
                // Active State
                statusBadge.className = "inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full transition-colors duration-300";
                statusDot.className = "w-2 h-2 rounded-full bg-green-500 animate-pulse";
                statusText.className = "text-xs font-medium text-green-700";
                statusText.textContent = "Card is Active";

                cardOverlay.classList.add('hidden');
                cardOverlay.classList.remove('flex');
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
      

<div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative z-0">

<div className="flex items-center justify-between px-6 pt-6 pb-4">
<div className="flex items-center gap-3">
<button className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:arrow-left" data-strokeWidth="1.5" data-width="20"></span>
</button>
<h1 className="text-lg font-semibold tracking-tight text-gray-900">Manage Card</h1>
</div>
<button className="p-2 -mr-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:more-horizontal" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>

<div className="overflow-y-auto max-h-[80vh] pb-8">

<div className="px-6 mb-8">
<div className="relative w-full aspect-[1.586/1] rounded-2xl bg-gray-900 text-white shadow-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02]" id="card-visual">

<div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] z-10 hidden flex-col items-center justify-center transition-all duration-300" id="card-overlay">
<span className="iconify text-white/80 mb-2" data-height="32" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="32"></span>
<span className="text-sm font-semibold tracking-wide text-white">CARD FROZEN</span>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>

<div className="relative h-full flex flex-col justify-between p-6 z-0">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-white/80"></div>
</div>
<span className="text-sm font-medium tracking-tight opacity-90">NEXUS BANK</span>
</div>
<span className="text-xs font-medium bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/10">Debit</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 opacity-90">
<div className="w-10 h-8 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md border border-yellow-600/30 flex items-center justify-center">
<div className="w-full h-[1px] bg-black/10"></div>
</div>
<span className="iconify text-white/70" data-height="20" data-icon="lucide:wifi" data-rotate="90" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex items-center gap-3 text-lg font-medium tracking-widest font-mono text-white/90">
<span>••••</span>
<span>••••</span>
<span>••••</span>
<span>4289</span>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] uppercase tracking-wider text-white/50 mb-0.5">Card Holder</p>
<p className="text-sm font-medium tracking-tight">Alex Morgan</p>
</div>
<div className="flex flex-col items-end">
<p className="text-[10px] uppercase tracking-wider text-white/50 mb-0.5">Expires</p>
<p className="text-sm font-medium tracking-tight">09/28</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 flex justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full transition-colors duration-300" id="status-badge">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" id="status-dot"></div>
<span className="text-xs font-medium text-green-700" id="status-text">Card is Active</span>
</div>
</div>
</div>

<div className="px-6 mb-8">
<h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3 ml-1">Temporary Actions</h2>
<div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 shadow-sm">

<label className="flex items-center justify-between p-4 cursor-pointer group hover:bg-gray-50/50 transition-colors rounded-xl">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:snowflake" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Freeze Card</span>
<span className="text-xs text-gray-500 mt-0.5 max-w-[200px] leading-relaxed">Temporarily disable all transactions.</span>
</div>
</div>
<div className="relative inline-flex items-center cursor-pointer">

<input className="sr-only peer" id="freeze-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</div>
</label>
</div>
</div>

<div className="px-6">
<h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3 ml-1">Permanent Block</h2>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

<button className="w-full flex items-center justify-between p-4 text-left hover:bg-red-50/50 transition-colors group border-b border-gray-100 last:border-0" id="block-btn">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-100 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:shield-alert" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900 group-hover:text-red-700 transition-colors">Block &amp; Replace</span>
<span className="text-xs text-gray-500 mt-0.5">Permanently block this card immediately.</span>
</div>
</div>
<span className="iconify text-gray-400 group-hover:text-red-400" data-height="20" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="20"></span>
</button>

<button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors group">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:credit-card" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Reissue Card</span>
<span className="text-xs text-gray-500 mt-0.5">Card damaged? Order a replacement.</span>
</div>
</div>
<span className="iconify text-gray-400" data-height="20" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>

<div className="mt-8 text-center">
<a className="text-xs font-medium text-blue-600 hover:text-blue-700 mt-1 inline-block" href="#">Contact Support</a>
</div>
</div>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-freeze" role="dialog">

<div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity opacity-0 opacity-100-transition"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm border border-gray-100 scale-95 scale-100-transition">
<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
<div className="sm:flex sm:items-start">
<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
<span className="iconify text-blue-600" data-height="20" data-icon="lucide:snowflake" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
<h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Freeze Card?</h3>
<div className="mt-2">
<p className="text-sm text-gray-500">Your card will be temporarily disabled. You can unfreeze it at any time from this dashboard.</p>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
<button className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto" id="confirm-freeze" type="button">Freeze Card</button>
<button className="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" id="cancel-freeze" type="button">Cancel</button>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-unfreeze" role="dialog">
<div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm border border-gray-100">
<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
<div className="sm:flex sm:items-start">
<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
<span className="iconify text-green-600" data-height="20" data-icon="lucide:unlock" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
<h3 className="text-base font-semibold leading-6 text-gray-900">Reactivate Card?</h3>
<div className="mt-2">
<p className="text-sm text-gray-500">Your card will be active immediately for all transactions.</p>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
<button className="inline-flex w-full justify-center rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" id="confirm-unfreeze" type="button">Reactivate</button>
<button className="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" id="cancel-unfreeze" type="button">Cancel</button>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-block" role="dialog">
<div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm border border-gray-100">
<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
<div className="sm:flex sm:items-start">
<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
<span className="iconify text-red-600" data-height="20" data-icon="lucide:alert-triangle" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
<h3 className="text-base font-semibold leading-6 text-gray-900">Permanently Block?</h3>
<div className="mt-2">
<p className="text-sm text-gray-500">This action cannot be undone. Your current card will be destroyed and a new one will be mailed to your address.</p>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
<button className="inline-flex w-full justify-center rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" id="confirm-block" type="button">Block Card</button>
<button className="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" id="cancel-block" type="button">Cancel</button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
