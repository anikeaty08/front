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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b', // Custom dark
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // State Management
        let currentSignature = null;
        let isDrawing = false;
        
        // Navigation
        function goToStep(stepName) {
            document.getElementById('step-upload').classList.add('hidden');
            document.getElementById('step-editor').classList.add('hidden');
            document.getElementById('step-download').classList.add('hidden');
            
            const target = document.getElementById(`step-${stepName}`);
            target.classList.remove('hidden');
            
            // Animation reset
            target.classList.remove('animate-fade-in');
            void target.offsetWidth; // trigger reflow
            target.classList.add('animate-fade-in');
        }

        // Signature Modal
        function openSignatureModal() {
            document.getElementById('signature-modal').classList.remove('hidden');
            initCanvas();
        }

        function closeSignatureModal() {
            document.getElementById('signature-modal').classList.add('hidden');
        }

        // Canvas Drawing Logic
        const canvas = document.getElementById('sign-canvas');
        const ctx = canvas.getContext('2d');
        
        function initCanvas() {
            // Resize canvas to parent
            const parent = canvas.parentElement;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            clearCanvas();
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        // Mouse Events for Drawing
        canvas.addEventListener('mousedown', (e) => { isDrawing = true; draw(e); });
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);

        // Touch Events
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isDrawing = true;
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, { passive: false });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, { passive: false });

        canvas.addEventListener('touchend', (e) => {
             e.preventDefault();
             isDrawing = false;
        });

        function draw(e) {
            if (!isDrawing) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
        
        // Reset path when starting new stroke
        canvas.addEventListener('mousedown', (e) => {
            ctx.beginPath();
            const rect = canvas.getBoundingClientRect();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        });


        // Save Signature and place on PDF
        function saveSignature() {
            // In a real app, this would convert canvas to image
            // For this UI demo, we simulate placing an element
            const dataUrl = canvas.toDataURL();
            createDraggableElement(dataUrl, 'image');
            closeSignatureModal();
        }

        // Add Date Stamp
        function addDateStamp() {
            const now = new Date();
            const dateString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            createDraggableElement(dateString, 'text');
        }

        // Draggable Logic
        function createDraggableElement(content, type) {
            const dropZone = document.getElementById('drop-zone');
            const el = document.createElement('div');
            el.className = 'draggable absolute p-1 border border-transparent hover:border-slate-300 rounded cursor-move group';
            
            // Randomish start position
            el.style.left = '50px';
            el.style.top = '100px';

            if (type === 'image') {
                el.innerHTML = `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="h-12 pointer-events-none" alt="Signature">
                                <button onclick="this.parentElement.remove()" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">×</button>`;
            } else {
                el.innerHTML = `<div class="text-xs font-mono bg-transparent pointer-events-none text-slate-900">${content}</div>
                                <button onclick="this.parentElement.remove()" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">×</button>`;
            }

            // Simple Drag Logic
            let isDragging = false;
            let startX, startY, initialLeft, initialTop;

            el.addEventListener('mousedown', (e) => {
                if(e.target.tagName === 'BUTTON') return; // Don't drag if clicking delete
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialLeft = el.offsetLeft;
                initialTop = el.offsetTop;
                el.classList.add('z-50');
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                el.style.left = `${initialLeft + dx}px`;
                el.style.top = `${initialTop + dy}px`;
            });

            window.addEventListener('mouseup', () => {
                isDragging = false;
                el.classList.remove('z-50');
            });

            dropZone.appendChild(el);
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tighter text-slate-900">ESIGN.</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">How it works</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#security">Security</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<div>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                Sign PDF Instantly.<br/>
<span className="text-slate-400">No Account Required.</span>
</h1>
<p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto mb-8 font-normal leading-relaxed">
                Upload, sign, and download your PDF securely in seconds. <br className="hidden md:block"/>Files are never stored on our servers and are deleted immediately.
            </p>
</div>

<div className="max-w-5xl mx-auto bg-white rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_20px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden min-h-[600px] flex flex-col relative animate-fade-in" id="app-container">

<div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center p-8 transition-opacity duration-300" id="step-upload">
<div className="w-full max-w-lg border-2 border-dashed border-slate-200 rounded-lg p-12 flex flex-col items-center justify-center text-center hover:border-slate-400 hover:bg-slate-50 transition-all cursor-pointer group" onclick="goToStep('editor')">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-600" height="24" icon="lucide:upload-cloud" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Click to upload or drag &amp; drop</h3>
<p className="text-xs text-slate-500 mb-6">Maximum file size 10MB.</p>
<div className="flex gap-3">
<span className="px-2 py-1 rounded border border-slate-200 text-[10px] font-medium text-slate-400">PDF</span>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="14"></iconify-icon>
<span>Files processed securely on your device</span>
</div>
</div>

<div className="hidden absolute inset-0 z-20 bg-slate-50 flex flex-col h-full" id="step-editor">

<div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6">
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-900 transition-colors" onclick="goToStep('upload')">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<span className="text-xs font-medium text-slate-500 truncate max-w-[150px]">document-contract-v1.pdf</span>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition-colors" onclick="openSignatureModal()">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium">Add Signature</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition-colors" onclick="addDateStamp()">
<iconify-icon icon="lucide:calendar-clock" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium">Add Date</span>
</button>
</div>
<div className="flex items-center gap-3">
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-md transition-colors shadow-sm flex items-center gap-2" onclick="goToStep('download')">
<span>Finish &amp; Sign</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scroll p-8 flex justify-center bg-slate-100/50 relative">
<div className="bg-white shadow-lg w-full max-w-[600px] aspect-[1/1.414] relative p-12 text-slate-800 text-xs leading-relaxed select-none" id="pdf-page">

<div className="w-full h-full border-l-4 border-slate-100 pl-8 flex flex-col justify-between pointer-events-none">
<div className="space-y-4">
<div className="h-8 w-32 bg-slate-100 mb-8"></div>
<div className="h-2 w-full bg-slate-100"></div>
<div className="h-2 w-5/6 bg-slate-100"></div>
<div className="h-2 w-4/6 bg-slate-100"></div>
<div className="h-2 w-full bg-slate-100 mt-6"></div>
<div className="h-2 w-full bg-slate-100"></div>
<div className="h-2 w-3/4 bg-slate-100"></div>
</div>
<div className="space-y-6">
<p className="font-semibold uppercase tracking-wider text-[10px] text-slate-400">Signatures</p>
<div className="flex justify-between items-end pb-8">
<div className="w-5/12 border-b border-slate-300 pb-2">
<p className="text-[10px] text-slate-400">Client Signature</p>
</div>
<div className="w-5/12 border-b border-slate-300 pb-2">
<p className="text-[10px] text-slate-400">Date</p>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-10" id="drop-zone"></div>
</div>
</div>
</div>

<div className="hidden absolute inset-0 z-30 bg-white flex flex-col items-center justify-center p-8 text-center" id="step-download">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 animate-slide-up">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-900 mb-2">Successfully Signed!</h2>
<p className="text-sm text-slate-500 mb-8 max-w-sm">Your document is ready. It will be automatically deleted from our servers in 5 minutes.</p>
<div className="flex flex-col gap-3 w-full max-w-xs">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="16"></iconify-icon>
                        Download PDF
                    </button>
<button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium px-4 py-2.5 rounded-md transition-colors flex items-center justify-center gap-2" onclick="location.reload()">
                        Sign Another Document
                    </button>
</div>
</div>

<div className="hidden absolute inset-0 z-50 bg-slate-900/20 backdrop-blur-sm flex items-center justify-center p-4" id="signature-modal">
<div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-slide-up">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Create Signature</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeSignatureModal()">
<iconify-icon icon="lucide:x" width="18"></iconify-icon>
</button>
</div>
<div className="p-6">

<div className="flex gap-4 mb-4 border-b border-slate-100">
<button className="pb-2 text-xs font-medium text-slate-900 border-b-2 border-slate-900">Draw</button>
<button className="pb-2 text-xs font-medium text-slate-400 hover:text-slate-600">Upload Image</button>
</div>

<div className="border border-slate-200 rounded-md bg-slate-50 relative h-40 w-full cursor-crosshair mb-4 touch-none">
<canvas className="w-full h-full" id="sign-canvas"></canvas>
<div className="absolute bottom-2 right-2">
<button className="text-[10px] text-slate-400 hover:text-red-500 font-medium bg-white px-2 py-1 rounded shadow-sm border border-slate-100" onclick="clearCanvas()">Clear</button>
</div>
</div>
<div className="flex justify-end gap-2">
<button className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-md" onclick="closeSignatureModal()">Cancel</button>
<button className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-sm" onclick="saveSignature()">Add Signature</button>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8" id="features">
<div className="p-6 rounded-lg border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-md flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:shield-off" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">No Storage</h3>
<p className="text-xs text-slate-500 leading-relaxed">We don't keep your files. Documents are processed temporarily and deleted immediately after download.</p>
</div>
<div className="p-6 rounded-lg border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-md flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Instant &amp; Fast</h3>
<p className="text-xs text-slate-500 leading-relaxed">No registration, no emails, no waiting. Just upload, sign, and go in seconds.</p>
</div>
<div className="p-6 rounded-lg border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-md flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Secure</h3>
<p className="text-xs text-slate-500 leading-relaxed">Your data travels through an encrypted connection. Privacy is our default setting.</p>
</div>
</div>
</main>

<footer className="border-t border-slate-200 bg-white pt-12 pb-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<span className="text-sm font-bold tracking-tighter text-slate-900 block mb-2">ESIGN.</span>
<p className="text-xs text-slate-500">Secure, instant PDF signing for everyone.</p>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
<a className="hover:text-slate-900" href="#">Disclaimer</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-12 text-[10px] text-slate-400 text-center md:text-left">
            © 2023 Esign Digital. All rights reserved.
        </div>
</footer>



    </>
  );
}
