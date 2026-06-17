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



        document.addEventListener('DOMContentLoaded', () => {
            // State
            const state = {
                stream: null,
                isShooting: false,
                currentShot: 0,
                capturedImages: [],
                filter: 'none',
                timerDuration: 3,
                cols: 1,
                rows: 4,
                get totalShots() {
                    return this.cols * this.rows;
                }
            };

            // DOM Elements
            const video = document.getElementById('webcam');
            const startBtn = document.getElementById('start-cam-btn');
            const shutterBtn = document.getElementById('shutter-btn');
            const retakeBtn = document.getElementById('retake-btn');
            const downloadBtn = document.getElementById('download-btn');
            const placeholder = document.getElementById('camera-placeholder');
            const countdownOverlay = document.getElementById('countdown-overlay');
            const countdownText = document.getElementById('countdown-text');
            const statusText = document.getElementById('status-text');
            const dateDisplay = document.getElementById('date-display');
            const photosGrid = document.getElementById('photos-grid');
            const resultContainer = document.getElementById('result-container');
            const totalShotsBadge = document.getElementById('total-shots-badge');
            const canvas = document.getElementById('process-canvas');
            const ctx = canvas.getContext('2d');

            // Setup Date
            const now = new Date();
            dateDisplay.textContent = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }).toUpperCase();

            // 1. Initialize Camera
            async function initCamera() {
                try {
                    state.stream = await navigator.mediaDevices.getUserMedia({ 
                        video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" } 
                    });
                    video.srcObject = state.stream;
                    placeholder.classList.add('hidden');
                    shutterBtn.disabled = false;
                    shutterBtn.classList.remove('grayscale');
                    updateStatus("Camera Ready");
                } catch (err) {
                    console.error("Camera Error:", err);
                    updateStatus("Camera access denied");
                }
            }
            startBtn.addEventListener('click', initCamera);

            // 2. Filter Logic
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.filter-btn').forEach(b => {
                        b.classList.remove('bg-white', 'shadow-sm', 'text-slate-900', 'ring-1', 'ring-slate-200');
                        b.classList.add('text-slate-500');
                    });
                    e.target.classList.add('bg-white', 'shadow-sm', 'text-slate-900', 'ring-1', 'ring-slate-200');
                    e.target.classList.remove('text-slate-500');
                    state.filter = e.target.dataset.filter;
                    video.style.filter = state.filter;
                });
            });

            // 3. Timer Logic
            document.querySelectorAll('input[name="timer"]').forEach(input => {
                input.addEventListener('change', (e) => {
                    state.timerDuration = parseInt(e.target.value);
                });
            });

            // 4. Layout Logic (Cols & Rows)
            const updateLayoutState = () => {
                state.cols = parseInt(document.querySelector('input[name="cols"]:checked').value);
                state.rows = parseInt(document.querySelector('input[name="rows"]:checked').value);
                
                // Update badge
                const count = state.totalShots;
                totalShotsBadge.textContent = `${count} Photos`;
                
                renderEmptySlots();
            };

            document.querySelectorAll('input[name="cols"], input[name="rows"]').forEach(input => {
                input.addEventListener('change', updateLayoutState);
            });

            function renderEmptySlots() {
                const count = state.totalShots;
                
                // CSS Logic
                if (state.cols === 2) {
                    photosGrid.className = 'grid grid-cols-2 gap-2';
                    resultContainer.style.width = '300px';
                } else {
                    photosGrid.className = 'flex flex-col gap-3';
                    resultContainer.style.width = '240px';
                }

                photosGrid.innerHTML = '';
                
                for(let i = 0; i < count; i++) {
                    const div = document.createElement('div');
                    // Aspect ratio logic: 4/3.
                    div.className = `aspect-[4/3] bg-slate-100 relative flex items-center justify-center rounded-sm overflow-hidden group`;
                    
                    if (state.capturedImages[i]) {
                        const img = document.createElement('img');
                        img.src = state.capturedImages[i];
                        img.className = 'absolute inset-0 w-full h-full object-cover animate-fade-in';
                        div.appendChild(img);
                    } else {
                        const span = document.createElement('span');
                        span.className = 'text-[10px] text-slate-300 font-medium';
                        span.textContent = i + 1;
                        div.appendChild(span);
                    }
                    photosGrid.appendChild(div);
                }
            }

            // 5. Capture Logic
            shutterBtn.addEventListener('click', async () => {
                if (state.isShooting || !state.stream) return;
                
                startSession();
                
                for (let i = 0; i < state.totalShots; i++) {
                    state.currentShot = i + 1;
                    updateStatus(`Pose ${i+1} of ${state.totalShots}`);
                    
                    await runCountdown(state.timerDuration);
                    await capturePhoto(i);
                    
                    if (i < state.totalShots - 1) {
                        await new Promise(r => setTimeout(r, 1000));
                    }
                }

                endSession();
            });

            function startSession() {
                state.isShooting = true;
                state.capturedImages = [];
                renderEmptySlots();
                
                // Disable controls
                shutterBtn.disabled = true;
                retakeBtn.disabled = true;
                downloadBtn.disabled = true;
                document.querySelectorAll('input[type="radio"]').forEach(el => el.disabled = true);
            }

            function endSession() {
                state.isShooting = false;
                updateStatus("Session Complete!");
                shutterBtn.disabled = true;
                shutterBtn.classList.add('opacity-50', 'cursor-not-allowed');
                retakeBtn.disabled = false;
                downloadBtn.disabled = false;
                document.querySelectorAll('input[type="radio"]').forEach(el => el.disabled = false);
            }

            function runCountdown(seconds) {
                return new Promise(resolve => {
                    let count = seconds;
                    countdownOverlay.classList.remove('hidden');
                    countdownText.textContent = count;
                    
                    const interval = setInterval(() => {
                        count--;
                        if (count > 0) {
                            countdownText.textContent = count;
                            countdownText.style.transform = "scale(1.2)";
                            setTimeout(() => countdownText.style.transform = "scale(1)", 100);
                        } else {
                            clearInterval(interval);
                            countdownOverlay.classList.add('hidden');
                            resolve();
                        }
                    }, 1000);
                });
            }

            async function capturePhoto(index) {
                const flash = document.getElementById('flash-overlay');
                flash.style.opacity = 1;
                flash.classList.add('flash-animation');
                
                setTimeout(() => {
                    flash.style.opacity = 0;
                    flash.classList.remove('flash-animation');
                }, 150);

                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                
                if (state.filter !== 'none') {
                    ctx.filter = state.filter;
                }
                
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.filter = 'none';

                const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
                state.capturedImages[index] = dataUrl;
                
                const slot = photosGrid.children[index];
                slot.innerHTML = '';
                const img = document.createElement('img');
                img.src = dataUrl;
                img.className = 'absolute inset-0 w-full h-full object-cover';
                slot.appendChild(img);
            }

            // 6. Retake
            retakeBtn.addEventListener('click', () => {
                state.capturedImages = [];
                renderEmptySlots();
                shutterBtn.disabled = false;
                shutterBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                downloadBtn.disabled = true;
                retakeBtn.disabled = true;
                updateStatus("Ready");
            });

            // 7. Download
            downloadBtn.addEventListener('click', () => {
                updateStatus("Generating...");
                
                const finalCanvas = document.createElement('canvas');
                const fCtx = finalCanvas.getContext('2d');
                
                const padding = 40;
                const gap = 20;
                const headerHeight = 80;
                const footerHeight = 80;
                
                // Determine dimensions based on columns
                const isTwoCol = state.cols === 2;
                const stripWidth = isTwoCol ? 600 : 360; 
                
                const availableWidth = stripWidth - (padding * 2);
                let imgWidth, imgHeight;

                if (isTwoCol) {
                    imgWidth = (availableWidth - gap) / 2;
                } else {
                    imgWidth = availableWidth;
                }
                imgHeight = imgWidth * 0.75; // 4:3

                // Calculate total height
                const rows = state.rows; // Visual rows
                const totalHeight = headerHeight + (rows * imgHeight) + ((rows - 1) * gap) + footerHeight + padding;

                finalCanvas.width = stripWidth;
                finalCanvas.height = totalHeight;

                // Background
                fCtx.fillStyle = '#FFFFFF';
                fCtx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

                // Header
                fCtx.fillStyle = '#111827';
                fCtx.font = 'bold 24px Inter, sans-serif';
                fCtx.textAlign = 'center';
                fCtx.letterSpacing = '10px';
                fCtx.fillText("FOTOBOOTH", stripWidth / 2, 60);

                // Images
                state.capturedImages.forEach((src, i) => {
                    const img = new Image();
                    img.src = src;
                    
                    let col, row;
                    if (isTwoCol) {
                        col = i % 2;
                        row = Math.floor(i / 2);
                    } else {
                        col = 0;
                        row = i;
                    }
                    
                    const x = padding + (col * (imgWidth + gap));
                    const y = headerHeight + (row * (imgHeight + gap));
                    
                    fCtx.drawImage(img, x, y, imgWidth, imgHeight);
                });

                setTimeout(() => {
                    // Footer
                    fCtx.fillStyle = '#94a3b8';
                    fCtx.font = '16px monospace';
                    fCtx.textAlign = 'left';
                    fCtx.fillText(dateDisplay.textContent, padding, totalHeight - 40);
                    
                    fCtx.textAlign = 'right';
                    fCtx.fillText("#042", stripWidth - padding, totalHeight - 40);

                    const link = document.createElement('a');
                    link.download = `fotobooth-${Date.now()}.jpg`;
                    link.href = finalCanvas.toDataURL('image/jpeg', 0.95);
                    link.click();
                    updateStatus("Saved!");
                }, 200);
            });

            function updateStatus(msg) {
                statusText.textContent = msg;
                statusText.style.opacity = 1;
            }

            // Init
            updateLayoutState();
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
      

<header className="w-full max-w-5xl flex justify-between items-center mb-6 px-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-[#DA005A] rounded-lg flex items-center justify-center text-white shadow-sm">
<svg aria-hidden="true" data-icon="lucide:aperture" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
</div>
<h1 className="text-lg font-medium tracking-tight text-slate-900">FOTOBOOTH</h1>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium px-2 py-1 bg-white border border-slate-200 rounded-md shadow-sm text-slate-500">v2.1</span>
</div>
</header>

<main className="w-full max-w-6xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row min-h-[700px]">

<div className="relative flex-1 bg-slate-50/50 flex flex-col p-6 lg:p-8">

<div className="flex flex-wrap justify-between items-center mb-4 gap-4 z-20">

<div className="flex gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
<button className="filter-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-all text-slate-900 bg-white shadow-sm" data-filter="none">Normal</button>
<button className="filter-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-all text-slate-500 hover:text-slate-900" data-filter="grayscale(100%) contrast(1.1)">B&amp;W</button>
<button className="filter-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-all text-slate-500 hover:text-slate-900" data-filter="sepia(30%) contrast(1.05) saturate(1.1)">Warm</button>
<button className="filter-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-all text-slate-500 hover:text-slate-900" data-filter="contrast(1.2) saturate(1.3)">Vivid</button>
</div>

<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
<span className="px-2 text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Timer</span>
<div className="flex gap-1">
<input checked="" className="hidden" id="t3" name="timer" type="radio" value="3"/>
<label className="px-2.5 py-1 text-xs font-medium rounded-md cursor-pointer text-slate-500 hover:text-slate-900 transition-all" htmlFor="t3">3s</label>
<input className="hidden" id="t5" name="timer" type="radio" value="5"/>
<label className="px-2.5 py-1 text-xs font-medium rounded-md cursor-pointer text-slate-500 hover:text-slate-900 transition-all" htmlFor="t5">5s</label>
<input className="hidden" id="t10" name="timer" type="radio" value="10"/>
<label className="px-2.5 py-1 text-xs font-medium rounded-md cursor-pointer text-slate-500 hover:text-slate-900 transition-all" htmlFor="t10">10s</label>
</div>
</div>
</div>

<div className="relative flex-1 bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-200 flex items-center justify-center group ring-4 ring-transparent transition-all" id="viewfinder-container">
<video autoplay="" className="mirror z-10 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" id="webcam" playsinline=""></video>

<div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 z-0 bg-slate-100" id="camera-placeholder">
<svg aria-hidden="true" data-icon="lucide:camera" data-strokeWidth="1.5" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
<p className="text-sm font-medium opacity-60">Initialize camera to start</p>
<button className="mt-4 px-5 py-2.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors flex items-center gap-2" id="start-cam-btn">
<svg aria-hidden="true" data-icon="lucide:video" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
                        Enable Camera
                    </button>
</div>

<div className="absolute inset-0 z-30 flex items-center justify-center bg-black/10 backdrop-blur-sm hidden" id="countdown-overlay">
<span className="text-9xl font-semibold text-white tracking-tighter drop-shadow-2xl scale-100 transition-transform" id="countdown-text">3</span>
</div>

<div className="absolute inset-0 z-40 bg-white opacity-0 pointer-events-none" id="flash-overlay"></div>

<div className="absolute inset-0 z-20 pointer-events-none opacity-10 flex w-full h-full">
<div className="flex-1 border-r border-white"></div>
<div className="flex-1 border-r border-white"></div>
<div className="flex-1"></div>
</div>
<div className="absolute inset-0 z-20 pointer-events-none opacity-10 flex flex-col w-full h-full">
<div className="flex-1 border-b border-white"></div>
<div className="flex-1 border-b border-white"></div>
<div className="flex-1"></div>
</div>
</div>

<div className="mt-8 flex flex-col items-center justify-center h-24">
<p className="text-xs font-medium text-[#DA005A] mb-4 h-4 uppercase tracking-widest opacity-0 transition-opacity" id="status-text">Ready</p>
<div className="flex items-center gap-8">

<button className="h-16 w-16 rounded-full border-[3px] border-[#F0DEE5] flex items-center justify-center bg-[#DA005A] shadow-xl shadow-[#DA005A]/20 hover:scale-105 active:scale-95 transition-all duration-300 group disabled:opacity-50 disabled:grayscale" disabled="" id="shutter-btn">
<svg aria-hidden="true" data-icon="lucide:camera" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</button>
</div>
</div>
</div>

<div className="w-full lg:w-96 bg-white border-l border-slate-100 flex flex-col overflow-hidden relative z-10">

<div className="p-6 pb-4 border-b border-slate-50 space-y-5">

<div>
<div className="flex justify-between items-center mb-2">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Layout Style</label>
</div>
<div className="segmented-control flex p-1 bg-slate-100 rounded-lg border border-slate-200 select-none">
<input checked="" className="hidden" id="col1" name="cols" type="radio" value="1"/>
<label className="flex-1 py-1.5 text-xs font-medium text-slate-500 rounded-md text-center cursor-pointer transition-all hover:text-slate-900 flex items-center justify-center gap-2" htmlFor="col1">
<svg aria-hidden="true" data-icon="lucide:rectangle-vertical" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="12" x="6" y="2"></rect></svg>
                            Strip (1 Col)
                        </label>
<input className="hidden" id="col2" name="cols" type="radio" value="2"/>
<label className="flex-1 py-1.5 text-xs font-medium text-slate-500 rounded-md text-center cursor-pointer transition-all hover:text-slate-900 flex items-center justify-center gap-2" htmlFor="col2">
<svg aria-hidden="true" data-icon="lucide:layout-grid" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="3" y="3"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="14" y="3"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="14" y="14"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="3" y="14"></rect></svg>
                            Grid (2 Cols)
                        </label>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Number of Rows</label>
<span className="text-[10px] font-bold text-[#DA005A] bg-[#F0DEE5] px-1.5 py-0.5 rounded" id="total-shots-badge">4 Photos</span>
</div>
<div className="segmented-control flex p-1 bg-slate-100 rounded-lg border border-slate-200 select-none">
<input className="hidden" id="row3" name="rows" type="radio" value="3"/>
<label className="flex-1 py-1.5 text-xs font-medium text-slate-500 rounded-md text-center cursor-pointer transition-all hover:text-slate-900" htmlFor="row3">3 Rows</label>
<input checked="" className="hidden" id="row4" name="rows" type="radio" value="4"/>
<label className="flex-1 py-1.5 text-xs font-medium text-slate-500 rounded-md text-center cursor-pointer transition-all hover:text-slate-900" htmlFor="row4">4 Rows</label>
<input className="hidden" id="row5" name="rows" type="radio" value="5"/>
<label className="flex-1 py-1.5 text-xs font-medium text-slate-500 rounded-md text-center cursor-pointer transition-all hover:text-slate-900" htmlFor="row5">5 Rows</label>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-slate-50/50 p-6 flex flex-col items-center justify-start min-h-0 custom-scrollbar">

<div className="bg-white p-3 shadow-lg border border-slate-200 transition-all duration-500 ease-in-out origin-top transform" id="result-container" style={{width: '240px'}}>

<div className="text-center pb-3 pt-1">
<span className="text-[10px] uppercase tracking-[0.3em] text-slate-900 font-bold">Fotobooth</span>
</div>

<div className="flex flex-col gap-3" id="photos-grid">

</div>

<div className="mt-3 pt-2 border-t border-slate-100 flex justify-between items-end">
<div className="text-[8px] text-slate-400 font-mono flex flex-col leading-tight">
<span id="date-display">DEC 11, 25</span>
<span>SESSION #042</span>
</div>
<svg aria-hidden="true" data-icon="lucide:qr-code" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"></path></g></svg>
</div>
</div>
</div>

<div className="p-6 bg-white border-t border-slate-100 z-20">
<div className="flex gap-3">
<button className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="retake-btn">
                        Retake
                    </button>
<button className="flex-[2] py-2.5 rounded-xl bg-slate-900 text-white text-xs font-medium shadow-md shadow-slate-900/10 hover:bg-[#DA005A] hover:shadow-[#DA005A]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="download-btn">
<svg aria-hidden="true" data-icon="lucide:download" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                        Download
                    </button>
</div>
</div>
</div>
</main>

<canvas className="hidden" id="process-canvas"></canvas>
<footer className="mt-8 text-center opacity-40 hover:opacity-100 transition-opacity">
<p className="text-[10px] text-slate-500 font-medium tracking-tight">
            Designed for Memories · 2024
        </p>
</footer>


    </>
  );
}
