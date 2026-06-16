import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        const state = {
            mediaType: null, // 'image' or 'video'
            file: null,
            isPlaying: false,
            scale: 2,
            sharpen: 25,
            denoise: 15,
            fps: 30,
            originalWidth: 0,
            originalHeight: 0,
            duration: 0
        };

        // DOM Elements
        const els = {
            fileInput: document.getElementById('file-input'),
            emptyState: document.getElementById('empty-state'),
            mediaContainer: document.getElementById('media-container'),
            previewCanvas: document.getElementById('preview-canvas'),
            sourceVideo: document.getElementById('source-video'),
            sourceImage: document.getElementById('source-image'),
            videoControls: document.getElementById('video-controls'),
            playPauseBtn: document.getElementById('play-pause-btn'),
            processBtn: document.getElementById('process-btn'),
            modal: document.getElementById('processing-modal'),
            progressRing: document.getElementById('progress-ring'),
            progressText: document.getElementById('progress-text'),
            downloadSection: document.getElementById('download-section'),
            downloadBtn: document.getElementById('download-btn'),
            outputRes: document.getElementById('output-res').querySelector('span'),
            timeDisplay: document.getElementById('time-display'),
            sliders: {
                scale: document.getElementById('scale-slider'),
                sharpen: document.getElementById('sharpen-slider'),
                denoise: document.getElementById('denoise-slider'),
                detail: document.getElementById('detail-slider')
            }
        };

        const ctx = els.previewCanvas.getContext('2d', { willReadFrequently: true });
        let animationFrame;

        // --- Initialization ---

        els.fileInput.addEventListener('change', handleFileSelect);
        
        // Model Selector Logic
        document.querySelectorAll('.model-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.model-btn').forEach(b => {
                    b.classList.remove('border-white/20', 'bg-white/5');
                    b.classList.add('border-white/5', 'bg-transparent');
                    b.querySelector('iconify-icon').classList.replace('text-white', 'text-neutral-400');
                    b.querySelector('span').classList.replace('text-white', 'text-neutral-400');
                });
                btn.classList.add('border-white/20', 'bg-white/5');
                btn.classList.remove('border-white/5', 'bg-transparent');
                btn.querySelector('iconify-icon').classList.replace('text-neutral-400', 'text-white');
                btn.querySelector('span').classList.replace('text-neutral-400', 'text-white');
            });
        });

        // Sliders Logic
        Object.entries(els.sliders).forEach(([key, slider]) => {
            slider.addEventListener('input', (e) => {
                const val = e.target.value;
                document.getElementById(`${key}-val`).innerText = key === 'scale' ? `${val}x` : `${val}%`;
                
                if (key === 'scale') {
                    state.scale = parseFloat(val);
                    updateOutputRes();
                } else if (key === 'sharpen') state.sharpen = parseInt(val);
                
                // Real-time preview update for images
                if (state.mediaType === 'image') drawFrame();
            });
        });

        function handleFileSelect(e) {
            const file = e.target.files[0];
            if (!file) return;

            state.file = file;
            const url = URL.createObjectURL(file);

            els.emptyState.classList.add('hidden');
            els.mediaContainer.classList.remove('hidden');

            if (file.type.startsWith('video')) {
                setupVideo(url);
            } else {
                setupImage(url);
            }
        }

        function setupVideo(url) {
            state.mediaType = 'video';
            els.sourceVideo.src = url;
            els.videoControls.classList.remove('hidden');
            
            els.sourceVideo.onloadedmetadata = () => {
                state.originalWidth = els.sourceVideo.videoWidth;
                state.originalHeight = els.sourceVideo.videoHeight;
                state.duration = els.sourceVideo.duration;
                
                els.previewCanvas.width = state.originalWidth;
                els.previewCanvas.height = state.originalHeight;
                
                updateOutputRes();
                drawFrame();
            };

            els.sourceVideo.onplay = () => {
                state.isPlaying = true;
                els.playPauseBtn.innerHTML = '<iconify-icon icon="solar:pause-linear" class="text-xl"></iconify-icon>';
                loop();
            };

            els.sourceVideo.onpause = () => {
                state.isPlaying = false;
                els.playPauseBtn.innerHTML = '<iconify-icon icon="solar:play-linear" class="text-xl"></iconify-icon>';
                cancelAnimationFrame(animationFrame);
            };

            els.playPauseBtn.onclick = () => {
                if (state.isPlaying) els.sourceVideo.pause();
                else els.sourceVideo.play();
            };
        }

        function setupImage(url) {
            state.mediaType = 'image';
            els.sourceImage.src = url;
            els.videoControls.classList.add('hidden');

            els.sourceImage.onload = () => {
                state.originalWidth = els.sourceImage.naturalWidth;
                state.originalHeight = els.sourceImage.naturalHeight;
                
                els.previewCanvas.width = state.originalWidth;
                els.previewCanvas.height = state.originalHeight;

                updateOutputRes();
                drawFrame();
            };
        }

        function updateOutputRes() {
            if (!state.originalWidth) return;
            const w = Math.round(state.originalWidth * state.scale);
            const h = Math.round(state.originalHeight * state.scale);
            els.outputRes.innerText = `${w} × ${h}`;
        }

        // --- Core Render Logic ---

        function loop() {
            if (!state.isPlaying && state.mediaType === 'video') return;
            drawFrame();
            
            // Update time
            if (state.mediaType === 'video') {
                const curr = formatTime(els.sourceVideo.currentTime);
                const total = formatTime(state.duration);
                els.timeDisplay.innerText = `${curr} / ${total}`;
            }

            animationFrame = requestAnimationFrame(loop);
        }

        function drawFrame() {
            const w = els.previewCanvas.width;
            const h = els.previewCanvas.height;

            // Clear
            ctx.clearRect(0, 0, w, h);

            // Apply filters (Simulation of Enhancement)
            // In a real scenario, this would be WebGL shaders. 
            // For CSS filters on context:
            const contrast = 100 + (state.detail / 5);
            const saturate = 100 + (state.denoise / 5); // Just mapping for visual effect
            ctx.filter = `contrast(${contrast}%) saturate(${saturate}%) brightness(105%)`;

            if (state.mediaType === 'video') {
                ctx.drawImage(els.sourceVideo, 0, 0, w, h);
            } else {
                ctx.drawImage(els.sourceImage, 0, 0, w, h);
            }

            ctx.filter = 'none';

            // Simulate sharpening via raw pixel manipulation (Simplified Unsharp Mask)
            // Only doing this heavily on export due to performance, light version here
            if (state.mediaType === 'image' && state.sharpen > 0) {
               // Visual simulation via overlay for performance in preview
               // Real processing happens on export
            }
        }

        function formatTime(s) {
            const m = Math.floor(s / 60);
            const sec = Math.floor(s % 60);
            return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
        }

        // --- Export & Processing Logic ---

        els.processBtn.onclick = async () => {
            if (!state.file) return;
            
            els.modal.classList.remove('hidden');
            els.downloadSection.classList.add('hidden');
            els.progressText.innerText = '0%';
            setCircleProgress(0);

            // Simulate "Initializing AI Models"
            await wait(1000);

            if (state.mediaType === 'image') {
                await processImage();
            } else {
                await processVideo();
            }
        };

        async function processImage() {
            const finalW = state.originalWidth * state.scale;
            const finalH = state.originalHeight * state.scale;
            
            // Create an offline canvas for high-res processing
            const offCanvas = document.createElement('canvas');
            offCanvas.width = finalW;
            offCanvas.height = finalH;
            const offCtx = offCanvas.getContext('2d');

            // High quality smoothing
            offCtx.imageSmoothingEnabled = true;
            offCtx.imageSmoothingQuality = 'high';

            // 1. Resize/Upscale (Bicubic simulation via canvas)
            offCtx.drawImage(els.sourceImage, 0, 0, finalW, finalH);

            // 2. Apply Filters
            // Enhancing contrast and saturation to "pop" like Topaz
            const contrast = 100 + (document.getElementById('detail-slider').value / 2); // stronger effect
            offCtx.filter = `contrast(${contrast}%) saturate(110%) brightness(102%)`;
            
            // Draw over itself to apply filter
            offCtx.drawImage(offCanvas, 0, 0);
            offCtx.filter = 'none';
            
            // 3. Simulation of Real-ESGAN / Sharpening details
            // We simulate the time it takes to run inference
            for(let i=0; i<=100; i+=5) {
                setCircleProgress(i);
                els.progressText.innerText = `${i}%`;
                await wait(50); 
            }

            // Prepare download
            offCanvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                setupDownload(url, `lumina_enhanced_${Date.now()}.png`);
            }, 'image/png', 1.0);
        }

        async function processVideo() {
            const finalW = state.originalWidth * state.scale;
            const finalH = state.originalHeight * state.scale;
            
            const offCanvas = document.createElement('canvas');
            offCanvas.width = finalW;
            offCanvas.height = finalH;
            const offCtx = offCanvas.getContext('2d');
            
            // Audio Stream
            const audioCtx = new AudioContext();
            const source = audioCtx.createMediaElementSource(els.sourceVideo);
            const dest = audioCtx.createMediaStreamDestination();
            source.connect(dest);
            
            // Video Stream from Canvas
            const stream = offCanvas.captureStream(document.getElementById('fps-toggle').checked ? 60 : 30);
            
            // Merge Audio
            if(els.sourceVideo.audioTracks || els.sourceVideo.webkitAudioDecodedByteCount > 0) {
                 const audioTrack = dest.stream.getAudioTracks()[0];
                 if(audioTrack) stream.addTrack(audioTrack);
            }

            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: MediaRecorder.isTypeSupported('video/webm;codecs=vp9') ? 'video/webm;codecs=vp9' : 'video/webm'
            });

            const chunks = [];
            mediaRecorder.ondataavailable = (e) => { if(e.data.size > 0) chunks.push(e.data); };
            
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'video/mp4' }); // Saving as mp4 container for compatibility
                const url = URL.createObjectURL(blob);
                setupDownload(url, `lumina_enhanced_${Date.now()}.mp4`);
            };

            mediaRecorder.start();

            // Process frame by frame
            const v = els.sourceVideo;
            v.pause();
            v.currentTime = 0;
            
            const totalDuration = v.duration;
            const step = 1/30; // Processing step

            // Enhance settings
            offCtx.imageSmoothingEnabled = true;
            offCtx.imageSmoothingQuality = 'high';
            
            const processLoop = async () => {
                if (v.currentTime >= totalDuration) {
                    mediaRecorder.stop();
                    setCircleProgress(100);
                    els.progressText.innerText = "100%";
                    return;
                }

                // Draw resized frame
                offCtx.drawImage(v, 0, 0, finalW, finalH);
                
                // Apply "AI" Filters
                offCtx.filter = `contrast(105%) saturate(105%)`;
                offCtx.drawImage(offCanvas, 0, 0); // Apply filter
                offCtx.filter = 'none';

                // Simulate processing time per frame for "Realness"
                // await wait(10); 

                // Move to next frame
                v.currentTime += step;
                
                // Update Progress
                const pct = Math.round((v.currentTime / totalDuration) * 100);
                setCircleProgress(pct);
                els.progressText.innerText = `${pct}%`;

                // Wait for seek to complete
                await new Promise(r => {
                    const onSeek = () => {
                        v.removeEventListener('seeked', onSeek);
                        r();
                    };
                    v.addEventListener('seeked', onSeek);
                });

                requestAnimationFrame(processLoop);
            };

            processLoop();
        }

        function setupDownload(url, filename) {
            els.downloadSection.classList.remove('hidden');
            els.downloadBtn.onclick = () => {
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.click();
            };
            document.getElementById('close-modal').onclick = () => {
                els.modal.classList.add('hidden');
                URL.revokeObjectURL(url);
            };
        }

        function setCircleProgress(percent) {
            const circumference = 283;
            const offset = circumference - (percent / 100) * circumference;
            els.progressRing.style.strokeDashoffset = offset;
        }

        function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-white/5 bg-[#050505] z-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<span className="font-medium text-white tracking-tight">LUMINA</span>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-neutral-500 hover:text-white transition-colors">History</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10"></div>
</div>
</header>

<main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">

<div className="flex-1 relative bg-[#080808] flex items-center justify-center overflow-hidden group" id="viewport">

<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="text-center p-8 transition-all duration-300" id="empty-state">
<div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-3xl text-neutral-400" icon="solar:gallery-add-linear"></iconify-icon>
</div>
<h2 className="text-white font-medium mb-2">Import Media</h2>
<p className="text-neutral-500 max-w-xs mx-auto text-xs leading-relaxed">
                    Drag and drop images or videos.<br/>Supports ProRes, MP4, PNG, HEIC.
                </p>
<label className="mt-6 inline-flex h-9 items-center justify-center rounded-lg bg-white px-4 text-xs font-medium text-black hover:bg-neutral-200 transition cursor-pointer">
                    Browse Files
                    <input accept="image/*,video/*" className="hidden" id="file-input" type="file"/>
</label>
</div>

<div className="hidden relative w-full h-full flex items-center justify-center p-4 md:p-8" id="media-container">
<canvas className="max-w-full max-h-full object-contain shadow-2xl shadow-black rounded-sm border border-white/5" id="preview-canvas"></canvas>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden" id="video-controls">
<button className="text-white hover:text-neutral-300" id="play-pause-btn">
<iconify-icon className="text-xl" icon="solar:play-linear"></iconify-icon>
</button>
<div className="text-xs font-mono text-neutral-400" id="time-display">00:00 / 00:00</div>
</div>
</div>

<video className="hidden" crossorigin="anonymous" id="source-video" playsinline="" webkit-playsinline=""></video>
<img className="hidden" crossorigin="anonymous" id="source-image"/>
</div>

<aside className="w-full md:w-[320px] lg:w-[360px] bg-[#050505] border-t md:border-t-0 md:border-l border-white/5 flex flex-col h-[50vh] md:h-full z-40 glass-panel">

<div className="flex border-b border-white/5">
<button className="flex-1 h-12 text-xs font-medium text-white border-b border-white bg-white/5">Enhance</button>
<button className="flex-1 h-12 text-xs font-medium text-neutral-500 hover:text-white transition-colors">Export</button>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-8 hide-scrollbar">

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-neutral-400">AI Model</label>
<iconify-icon className="text-neutral-600" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="model-btn active h-20 rounded-lg border border-white/20 bg-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all" data-model="esgan">
<iconify-icon className="text-xl text-white" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-[10px] text-white">Real-ESGAN</span>
</button>
<button className="model-btn h-20 rounded-lg border border-white/5 bg-transparent flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-all" data-model="proteus">
<iconify-icon className="text-xl text-neutral-400" icon="solar:videocamera-linear"></iconify-icon>
<span className="text-[10px] text-neutral-400">Proteus V3</span>
</button>
</div>
</div>

<div className="space-y-6">

<div className="space-y-3">
<div className="flex justify-between">
<label className="text-xs font-medium text-neutral-300">Upscale Factor</label>
<span className="text-xs text-white font-mono" id="scale-val">2.0x</span>
</div>
<input id="scale-slider" max="4" min="1" step="0.5" type="range" value="2"/>
<div className="flex justify-between text-[10px] text-neutral-600 font-mono">
<span>1x</span><span>4x</span>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between">
<label className="text-xs font-medium text-neutral-300">Detail Recovery</label>
<span className="text-xs text-white font-mono" id="detail-val">40%</span>
</div>
<input id="detail-slider" max="100" min="0" type="range" value="40"/>
</div>

<div className="space-y-3">
<div className="flex justify-between">
<label className="text-xs font-medium text-neutral-300">Sharpen</label>
<span className="text-xs text-white font-mono" id="sharpen-val">25%</span>
</div>
<input id="sharpen-slider" max="100" min="0" type="range" value="25"/>
</div>

<div className="space-y-3">
<div className="flex justify-between">
<label className="text-xs font-medium text-neutral-300">De-Noise</label>
<span className="text-xs text-white font-mono" id="denoise-val">15%</span>
</div>
<input id="denoise-slider" max="100" min="0" type="range" value="15"/>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-white/5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-400">Video Stabilization</span>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-neutral-600 border-4 appearance-none cursor-pointer border-transparent transition-all duration-300" id="stabilize-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer border border-white/10" htmlFor="stabilize-toggle"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-400">Frame Interpolation (60fps)</span>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-neutral-600 border-4 appearance-none cursor-pointer border-transparent transition-all duration-300" id="fps-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer border border-white/10" htmlFor="fps-toggle"></label>
</input></div>
</div>
</div>
</div>

<div className="p-5 border-t border-white/5 bg-[#050505]">
<div className="flex justify-between items-center mb-3">
<div className="text-[10px] text-neutral-500">
<span id="est-time">Est. Time: <span className="text-white">--:--</span></span>
</div>
<div className="text-[10px] text-neutral-500">
<span id="output-res">Output: <span className="text-white">Original</span></span>
</div>
</div>
<button className="w-full h-10 bg-white text-black text-xs font-semibold rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="process-btn">
<span id="btn-text">Start Processing</span>
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon>
</button>
</div>
</aside>

<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center hidden" id="processing-modal">
<div className="w-64 space-y-6 text-center">
<div className="relative w-20 h-20 mx-auto">
<svg className="w-full h-full" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#333" strokeWidth="2"></circle>
<circle className="transition-all duration-300" cx="50" cy="50" fill="none" id="progress-ring" r="45" stroke="#fff" stroke-dasharray="283" stroke-dashoffset="283" strokeWidth="2" transform="rotate(-90 50 50)"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-sm font-bold text-white font-mono" id="progress-text">0%</span>
</div>
</div>
<div>
<h3 className="text-white font-medium mb-1 tracking-tight">Enhancing Media</h3>
<p className="text-neutral-500 text-xs">Applying AI models &amp; upscaling...</p>
</div>
<div className="hidden" id="download-section">
<button className="w-full h-9 bg-white text-black text-xs font-semibold rounded-lg hover:bg-neutral-200 transition flex items-center justify-center gap-2" id="download-btn">
                        Save to Files
                        <iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
<button className="mt-3 text-xs text-neutral-400 hover:text-white" id="close-modal">Close</button>
</div>
</div>
</div>
</main>


    </>
  );
}
