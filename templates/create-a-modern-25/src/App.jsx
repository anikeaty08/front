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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Generic Upload Handler
            const setupUpload = (inputId, displayId, placeholderId) => {
                const input = document.getElementById(inputId);
                const display = document.getElementById(displayId);
                const placeholder = document.getElementById(placeholderId);

                input.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            display.style.backgroundImage = `url(${event.target.result})`;
                            display.classList.remove('hidden');
                            placeholder.style.opacity = '0';
                            input.dataset.uploaded = 'true';
                        };
                        reader.readAsDataURL(file);
                    }
                });
            };

            // Initialize uploads
            setupUpload('logo-input', 'logo-display', 'logo-placeholder');
            setupUpload('id-input', 'id-display', 'id-placeholder');
            setupUpload('sig-input', 'sig-display', 'sig-placeholder');
            setupUpload('toar-input', 'toar-display', 'toar-placeholder');

            // Modal Logic
            const processBtn = document.getElementById('process-btn');
            const modalOverlay = document.getElementById('modal-overlay');
            const errorModal = document.getElementById('error-modal');
            const successModal = document.getElementById('success-modal');
            const closeBtns = document.querySelectorAll('.close-modal');

            const openModal = (isSuccess) => {
                modalOverlay.classList.remove('hidden');
                modalOverlay.classList.add('flex');
                
                // Small delay for transition effect
                setTimeout(() => {
                    modalOverlay.style.opacity = '1';
                    const activeModal = isSuccess ? successModal : errorModal;
                    activeModal.classList.remove('hidden');
                    activeModal.classList.remove('scale-95');
                    activeModal.classList.add('scale-100');
                    
                    const inactiveModal = isSuccess ? errorModal : successModal;
                    inactiveModal.classList.add('hidden');
                }, 10);
            };

            const closeModal = () => {
                modalOverlay.style.opacity = '0';
                errorModal.classList.remove('scale-100');
                errorModal.classList.add('scale-95');
                successModal.classList.remove('scale-100');
                successModal.classList.add('scale-95');
                
                setTimeout(() => {
                    modalOverlay.classList.add('hidden');
                    modalOverlay.classList.remove('flex');
                    errorModal.classList.add('hidden');
                    successModal.classList.add('hidden');
                }, 300);
            };

            processBtn.addEventListener('click', () => {
                const toarInput = document.getElementById('toar-input');
                const isToarUploaded = toarInput.dataset.uploaded === 'true';
                openModal(isToarUploaded);
            });

            closeBtns.forEach(btn => {
                btn.addEventListener('click', closeModal);
            });
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
      

<div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0 select-none">
<span className="text-[7vw] font-semibold text-slate-900/[0.025] whitespace-nowrap transform -rotate-[10deg] tracking-tighter">
            EverTrack Auto Logistics
        </span>
</div>

<header className="relative z-10 flex-none bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex justify-between items-center shadow-sm">
<div className="flex items-center gap-5">

<label className="w-14 h-14 rounded-lg border border-slate-200 border-dashed flex items-center justify-center bg-slate-50 cursor-pointer hover:bg-slate-100 hover:border-blue-300 transition-all duration-200 relative overflow-hidden group shrink-0 shadow-sm">
<div className="absolute inset-0 z-10 pointer-events-none bg-white hidden" id="logo-display" style={{backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
<div className="text-center flex flex-col items-center transition-opacity duration-200" id="logo-placeholder">
<iconify-icon className="text-slate-400 text-lg group-hover:text-blue-500" icon="solar:gallery-add-linear"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400 mt-0.5 tracking-tight leading-none text-center px-1">Upload<br/>Logo</span>
</div>
<input accept="image/*" className="hidden" id="logo-input" type="file"/>
</label>
<div>
<h1 className="text-base font-semibold text-slate-900 tracking-tight leading-tight">EverTrack Auto Logistics</h1>
<p className="text-xs text-slate-500 font-medium">Vehicle Shipping Across Canada</p>
<p className="text-[11px] text-slate-400 mt-0.5">info@evertracklogistics.com</p>
</div>
</div>
<div className="text-right">
<p className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase mb-1">Shipping Invoice</p>
<p className="text-sm font-semibold text-slate-800 tracking-tight">EVTRK-87435-CA</p>
<p className="text-xs text-slate-500 font-medium mt-0.5">Ref: EV-CA-87435</p>
</div>
</header>

<main className="relative z-10 flex-1 flex flex-col p-6 gap-5 h-full min-h-0">

<div className="grid grid-cols-2 gap-5 flex-none">

<div className="bg-white rounded-xl border border-slate-200/60 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] p-4 flex flex-col hover:border-blue-100 transition-colors">
<div className="flex items-center gap-2.5 mb-3">
<div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
<iconify-icon className="text-lg" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<h2 className="text-sm font-semibold tracking-tight text-slate-800">Bill To</h2>
</div>
<div className="text-xs text-slate-600 space-y-1 leading-relaxed">
<p className="font-semibold text-slate-900 text-sm mb-1">Mary Lefthand</p>
<p>Eden Valley 216, Alberta</p>
<p>PO Box 82, T0L 2R0</p>
<p>House #82</p>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200/60 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] p-4 flex flex-col hover:border-blue-100 transition-colors">
<div className="flex items-center gap-2.5 mb-3">
<div className="p-1.5 bg-slate-100 text-slate-600 rounded-md">
<iconify-icon className="text-lg" icon="solar:car-linear"></iconify-icon>
</div>
<h2 className="text-sm font-semibold tracking-tight text-slate-800">Vehicle Details</h2>
</div>
<div className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
<p className="font-semibold text-slate-900 text-sm mb-1 truncate">2022 Chevrolet Silverado 1500 RST</p>
<div className="grid grid-cols-2 gap-2">
<p>VIN: <span className="font-medium text-slate-800">3GCUYED7NG154872</span></p>
<p>Color: <span className="font-medium text-slate-800">Red</span></p>
<p>Odometer: <span className="font-medium text-slate-800">50,000 miles</span></p>
</div>
<p className="pt-1 border-t border-slate-50 mt-1"><span className="text-slate-400">Mods:</span> <span className="font-medium text-slate-700">Lift kit, off-road tires, aftermarket wheels, side steps</span></p>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200/60 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] p-4 flex flex-col hover:border-blue-100 transition-colors">
<div className="flex items-center gap-2.5 mb-3">
<div className="p-1.5 bg-slate-100 text-slate-600 rounded-md">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<h2 className="text-sm font-semibold tracking-tight text-slate-800">Shipping Details</h2>
</div>
<div className="text-xs text-slate-600 space-y-2 leading-relaxed">
<div className="flex justify-between items-center border-b border-slate-50 pb-1.5">
<span className="text-slate-400">Route</span>
<span className="font-medium text-slate-800 flex items-center gap-1.5">Edmonton, AB <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon> Calgary, AB</span>
</div>
<div className="grid grid-cols-2 gap-2 pt-0.5">
<p><span className="text-slate-400">Distance:</span> <span className="font-medium text-slate-800">~300 km</span></p>
<p><span className="text-slate-400">Transport:</span> <span className="font-medium text-slate-800">Enclosed Container</span></p>
<p className="col-span-2"><span className="text-slate-400">Status:</span> <span className="font-medium text-blue-600">Secured</span></p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-white to-slate-50/50 rounded-xl border border-slate-200/60 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] p-4 flex flex-col hover:border-blue-100 transition-colors">
<div className="flex items-center gap-2.5 mb-2">
<div className="p-1.5 bg-slate-100 text-slate-600 rounded-md">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h2 className="text-sm font-semibold tracking-tight text-slate-800">Charges</h2>
</div>
<div className="flex-1 flex flex-col justify-center">
<p className="text-xs text-slate-500 font-medium mb-0.5">Total Shipment Cost</p>
<div className="flex items-end justify-between">
<p className="text-3xl tracking-tight font-semibold text-slate-900">$1,450 <span className="text-base text-slate-400 font-medium">CAD</span></p>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold shadow-sm">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
                            PAID
                        </div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-5 flex-1 min-h-0">

<label className="relative flex flex-col items-center justify-center w-full h-full bg-white border border-slate-200 border-dashed rounded-xl cursor-pointer hover:bg-slate-50/80 hover:border-blue-400 hover:shadow-sm transition-all duration-200 group overflow-hidden">
<div className="absolute inset-0 w-full h-full z-10 pointer-events-none bg-white hidden" id="id-display" style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
<div className="flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300" id="id-placeholder">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-xl text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:id-card-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700 mb-1">Upload Receiver ID</p>
<p className="text-xs text-slate-400">Click to browse or drag file</p>
</div>
<input accept="image/*" className="hidden" id="id-input" type="file"/>
</label>

<label className="relative flex flex-col items-center justify-center w-full h-full bg-white border border-slate-200 border-dashed rounded-xl cursor-pointer hover:bg-slate-50/80 hover:border-blue-400 hover:shadow-sm transition-all duration-200 group overflow-hidden">
<div className="absolute inset-0 w-full h-full z-10 pointer-events-none bg-white hidden" id="sig-display" style={{backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
<div className="flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300" id="sig-placeholder">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-xl text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:pen-new-round-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700 mb-1">Receiver Signature</p>
<p className="text-xs text-slate-400">Click to browse or drag file</p>
</div>
<input accept="image/*" className="hidden" id="sig-input" type="file"/>
</label>

<label className="relative flex flex-col items-center justify-center w-full h-full bg-slate-50 border border-slate-200 border-dashed rounded-xl cursor-pointer hover:bg-slate-100/50 hover:border-blue-400 hover:shadow-sm transition-all duration-200 group overflow-hidden">
<div className="absolute inset-0 w-full h-full z-10 pointer-events-none bg-white hidden" id="toar-display" style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
<div className="flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300" id="toar-placeholder">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-blue-50 group-hover:shadow-none border border-slate-100 transition-all">
<iconify-icon className="text-xl text-slate-500 group-hover:text-blue-500 transition-colors" icon="solar:document-text-linear"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-800 mb-1 leading-tight px-2">Transport Ownership<br/>Acknowledgment Record</p>
<p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">(TOAR)</p>
</div>
<input accept="image/*" className="hidden" data-uploaded="false" id="toar-input" type="file"/>
</label>
</div>

<div className="flex-none pt-2 pb-2 flex justify-center">
<button className="bg-[#0A2540] hover:bg-[#113255] text-white px-8 py-3 rounded-lg text-sm font-semibold tracking-wide shadow-[0_4px_14px_0_rgba(10,37,64,0.39)] hover:shadow-[0_6px_20px_rgba(10,37,64,0.23)] transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540]" id="process-btn">
                Confirm to Process Receipt
            </button>
</div>
</main>

<div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm hidden items-center justify-center transition-opacity duration-300 opacity-0" id="modal-overlay" style={{opacity: '0'}}>

<div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-6 hidden transform scale-95 transition-transform duration-300" id="error-modal">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4 mx-auto">
<iconify-icon className="text-2xl text-red-500" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center text-slate-900 tracking-tight mb-2">Unable to process receipt</h3>
<p className="text-sm text-center text-slate-500 leading-relaxed mb-6">
                Transport Ownership Acknowledgment Record (TOAR) is required to proceed.
            </p>
<button className="close-modal w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-lg text-sm transition-colors">
                Go Back
            </button>
</div>

<div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-6 hidden transform scale-95 transition-transform duration-300" id="success-modal">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-4 mx-auto">
<iconify-icon className="text-2xl text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center text-slate-900 tracking-tight mb-2">Receipt Processed</h3>
<p className="text-sm text-center text-slate-500 leading-relaxed mb-6">
                The receipt has been successfully processed and recorded in the system.
            </p>
<button className="close-modal w-full bg-[#0A2540] hover:bg-[#113255] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors shadow-sm">
                Done
            </button>
</div>
</div>


    </>
  );
}
