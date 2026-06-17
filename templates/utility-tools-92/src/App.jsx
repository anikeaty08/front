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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- IP Logic ---
        async function fetchIP() {
            const ipDisplay = document.getElementById('ip-display');
            try {
                const res = await fetch('https://api.ipify.org?format=json');
                const data = await res.json();
                ipDisplay.classList.remove('animate-pulse');
                ipDisplay.innerText = data.ip;
            } catch (err) {
                ipDisplay.classList.remove('animate-pulse');
                ipDisplay.innerText = "Connection Error";
                ipDisplay.classList.add('text-zinc-400');
            }
        }
        fetchIP();

        // --- Image Conversion Logic ---
        const fileInput = document.getElementById('file-input');
        const previewArea = document.getElementById('preview-area');
        const fileNameDisp = document.getElementById('file-name');
        const downloadBtn = document.getElementById('download-btn');
        const canvas = document.getElementById('conversion-canvas');
        const ctx = canvas.getContext('2d');

        let pngUrl = null;

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            // Simple visual feedback for the name
            let displayName = file.name;
            if (displayName.toLowerCase().endsWith('.jpg') || displayName.toLowerCase().endsWith('.jpeg')) {
                displayName = displayName.replace(/\.jpe?g$/i, '.png');
            }
            fileNameDisp.innerText = displayName;
            
            const reader = new FileReader();

            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    
                    pngUrl = canvas.toDataURL('image/png');
                    previewArea.classList.remove('hidden');
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });

        downloadBtn.addEventListener('click', () => {
            if (!pngUrl) return;
            const link = document.createElement('a');
            link.download = fileNameDisp.innerText || 'converted-image.png';
            link.href = pngUrl;
            link.click();
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
      
<header className="border-b border-zinc-200 bg-white/70 backdrop-blur-md sticky top-0 z-20">
<div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter uppercase text-zinc-800">
                UTILIMANT
            </div>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-500 tracking-wide">
<span>Fast</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>Private</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>Free</span>
</div>
</div>
</header>
<main className="flex-grow w-full max-w-3xl mx-auto px-4 py-10 sm:py-16 sm:px-6 space-y-8">

<section className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden group transition-all hover:border-zinc-300">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-zinc-200 to-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:global-linear"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-zinc-600">Public Network Identifer</h2>
</div>
<div className="mb-4">
<div className="text-4xl sm:text-5xl font-medium tracking-tight font-mono text-zinc-800 animate-pulse" id="ip-display">
                    Retrieving...
                </div>
</div>
<p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                This is the external IP address currently broadcasting to the wider internet through your active connection.
            </p>
</section>

<section className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all hover:border-zinc-300">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-800 mb-1">Format Conversion</h2>
<p className="text-sm text-zinc-500">Transform JPG to PNG natively within your browser.</p>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:shield-check-linear"></iconify-icon>
                    Privacy First
                </div>
</div>
<div className="relative group">
<input accept="image/jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="file-input" title="Select a JPG file" type="file"/>
<div className="border border-dashed border-zinc-300 rounded-xl p-10 flex flex-col items-center justify-center bg-[#FAFAFA] group-hover:bg-zinc-50 group-hover:border-zinc-400 transition-all duration-200 h-48">
<div className="bg-white p-3 rounded-xl shadow-sm border border-zinc-100 mb-4 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-zinc-700 text-2xl" icon="solar:gallery-add-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-700 mb-1">Click or drop a JPG here</span>
<span className="text-xs text-zinc-400">Maximum quality preservation</span>
</div>
</div>
<div className="mt-6 hidden animate-[fadeIn_0.3s_ease-out]" id="preview-area">
<canvas className="hidden" id="conversion-canvas"></canvas>
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-50 border border-zinc-200 rounded-xl gap-4">
<div className="flex items-center gap-3 overflow-hidden">
<div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-zinc-600 text-base" icon="solar:file-check-linear"></iconify-icon>
</div>
<div className="flex flex-col min-w-0">
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-0.5">Ready for export</span>
<span className="text-sm font-medium text-zinc-800 truncate max-w-[200px] sm:max-w-xs" id="file-name"></span>
</div>
</div>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-zinc-50" id="download-btn">
<span>Download PNG</span>
<iconify-icon className="text-base opacity-80" icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</main>
<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
