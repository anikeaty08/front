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



        // --- Comparison Slider Logic ---
        const container = document.getElementById('compare-container');
        const overlay = document.getElementById('compare-overlay');
        const handle = document.getElementById('compare-handle');
        let isDragging = false;

        const updateSlider = (x) => {
            const rect = container.getBoundingClientRect();
            // Calculate position within container (constrained 0 to 100%)
            let position = ((x - rect.left) / rect.width) * 100;
            position = Math.max(0, Math.min(100, position));
            
            overlay.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        };

        // Mouse Events
        container.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);
        container.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            updateSlider(e.clientX);
        });

        // Touch Events
        container.addEventListener('touchstart', () => isDragging = true);
        window.addEventListener('touchend', () => isDragging = false);
        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            updateSlider(e.touches[0].clientX);
        });

        // Click to jump
        container.addEventListener('click', (e) => {
            updateSlider(e.clientX);
        });


        // --- Upload Simulation Logic ---
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('file-input');
        const stateInitial = document.getElementById('upload-state-initial');
        const stateProcessing = document.getElementById('upload-state-processing');
        const stateSuccess = document.getElementById('upload-state-success');

        // Drag Hover Effects
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('border-orange-500', 'bg-white/[0.05]');
        });
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('border-orange-500', 'bg-white/[0.05]');
        });
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-orange-500', 'bg-white/[0.05]');
            if (e.dataTransfer.files.length) startProcessing();
        });

        // Click Select
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length) startProcessing();
        });

        function startProcessing() {
            // Switch to processing state
            stateInitial.style.opacity = '0';
            setTimeout(() => {
                stateInitial.classList.add('hidden');
                stateProcessing.classList.remove('hidden');
            }, 300);

            // Simulate AI delay (3 seconds)
            setTimeout(() => {
                stateProcessing.classList.add('hidden');
                stateSuccess.classList.remove('hidden');
            }, 3000);
        }

        function resetUpload() {
            // Reset UI
            stateSuccess.classList.add('hidden');
            stateInitial.classList.remove('hidden');
            stateInitial.style.opacity = '1';
            fileInput.value = ''; // clear input
            
            // Reset Button State
            const btn = document.getElementById('download-btn');
            btn.innerHTML = `<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon> Download HD`;
        }

        // --- Download Logic ---
        async function downloadImage() {
            const btn = document.getElementById('download-btn');
            const originalContent = btn.innerHTML;
            
            // Loading State
            btn.innerHTML = `<iconify-icon icon="solar:restart-linear" class="animate-spin" width="18"></iconify-icon> Downloading...`;
            
            try {
                // Fetch the clean demo image as a blob
                const imageUrl = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                
                // Create temporary link and click it
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'clean-image-hd.jpg';
                document.body.appendChild(a);
                a.click();
                
                // Cleanup
                window.URL.revokeObjectURL(url);
                
                // Success State
                btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Saved!`;
                
                // Revert after delay
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                }, 2000);
            } catch (error) {
                console.error("Download failed, opening in new tab", error);
                // Fallback
                window.open('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', '_blank');
                btn.innerHTML = originalContent
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] rounded-full pointer-events-none z-0 bg-orange-600/10"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] blur-[100px] rounded-full pointer-events-none z-0 bg-red-900/10"></div>

<nav className="fixed w-full z-50 top-0 border-b bg-[#0B0F14]/80 backdrop-blur-md border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-semibold tracking-tight text-lg flex items-center gap-2 font-sans text-white" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-orange-500 flex items-center justify-center text-[#0B0F14] to-red-400">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
                REMOVER
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors font-sans hover:text-white" href="#how-it-works">How it works</a>
<a className="transition-colors font-sans hover:text-white" href="#features">Features</a>
<a className="transition-colors font-sans hover:text-white" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium transition-colors hidden sm:block font-sans hover:text-white" href="#">Log in</a>
<a className="text-[#0B0F14] px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)] font-sans bg-white hover:bg-stone-200" href="#upload">Get Started</a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 px-6">
<div className="text-center max-w-4xl mr-auto ml-auto">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-medium mb-8 animate-fade-in-up font-sans text-orange-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                New: AI Upscaling Model v2.0 Live
            </div>
<h1 className="text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b font-google-sans-flex font-normal text-white from-white to-white/60">
                Remove Watermarks<br/>Instantly with AI
            </h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-stone-400 font-sans max-w-2xl mb-10">
                Clean images in seconds using advanced neural networks. Download in full resolution and upscale without quality loss.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="group relative px-8 py-3.5 bg-gradient-to-r rounded-full font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 w-full sm:w-auto overflow-hidden from-orange-600 to-pink-600 text-white" onclick="document.getElementById('upload').scrollIntoView({behavior: 'smooth'})">
<div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/20"></div>
<span className="relative flex items-center justify-center gap-2 font-sans">
<iconify-icon icon="solar:upload-linear" width="20"></iconify-icon>
                        Upload Image
                    </span>
</button>
<button className="px-8 py-3.5 rounded-full font-medium border transition-all w-full sm:w-auto font-sans text-white border-white/10 hover:bg-white/5" onclick="document.getElementById('upload').scrollIntoView({behavior: 'smooth'})">
                    Try Free
                </button>
</div>

<div className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl border overflow-hidden shadow-2xl group select-none border-white/10 shadow-black/50 cursor-ew-resize touch-none" id="compare-container">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80')] bg-cover bg-center"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80')] bg-cover bg-center w-[50%] border-r backdrop-grayscale border-white/50 overflow-hidden will-change-[width]" id="compare-overlay">
<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none w-[1000px]"> 
<div className="transform -rotate-45 text-4xl border-4 p-4 font-google-sans-flex font-normal text-white/50 border-white/50 whitespace-nowrap">WATERMARK</div>
</div>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="absolute inset-y-0 left-[50%] -ml-[16px] w-[32px] flex items-center justify-center z-20 pointer-events-none will-change-[left]" id="compare-handle">
<div className="w-8 h-8 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center bg-white text-orange-900">
<iconify-icon icon="solar:double-alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="absolute top-4 left-4 px-3 py-1 backdrop-blur rounded text-xs font-medium z-20 font-sans bg-black/60 text-white/80">Original</div>
<div className="absolute top-4 right-4 px-3 py-1 backdrop-blur rounded text-xs font-medium z-20 font-sans bg-orange-600/80 text-white">Clean AI</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden border-white/5">
<div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br border flex items-center justify-center mb-6 shadow-lg from-stone-800 to-stone-900 border-white/10 text-white">
<iconify-icon icon="solar:gallery-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 font-sans text-white">1. Upload Image</h3>
<p className="text-sm leading-relaxed font-sans text-stone-400">Drag &amp; drop your file. We support JPG, PNG, and WebP up to 50MB.</p>
</div>

<div className="group p-6 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden border-white/5">
<div className="absolute top-0 right-0 p-32 bg-pink-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br border flex items-center justify-center mb-6 shadow-lg from-orange-900 to-pink-900 border-white/10 text-orange-300 shadow-orange-900/20">
<iconify-icon className="animate-pulse" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 font-sans text-white">2. AI Processing</h3>
<p className="text-sm leading-relaxed font-sans text-stone-400">Our neural engine detects and removes watermarks instantly.</p>
</div>

<div className="group p-6 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden border-white/5">
<div className="absolute top-0 right-0 p-32 bg-red-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br border flex items-center justify-center mb-6 shadow-lg from-stone-800 to-stone-900 border-white/10 text-white">
<iconify-icon icon="solar:file-download-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 font-sans text-white">3. Download</h3>
<p className="text-sm leading-relaxed font-sans text-stone-400">Save your clean image in original quality or 2x upscale.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-y bg-black/20 border-white/5" id="features">
<div className="bg-grid absolute inset-0 opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-google-sans-flex font-normal text-white">Precision Engineered</h2>
<p className="max-w-xl mx-auto font-sans text-stone-400">Designed for creators who need professional results without the manual work.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
<div className="flex items-center gap-3 mb-3">
<div className="text-orange-400">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium font-sans text-white">AI-Powered Removal</h3>
</div>
<p className="text-sm font-sans text-stone-400">Advanced in-painting algorithms fill the gaps seamlessly.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
<div className="flex items-center gap-3 mb-3">
<div className="text-red-400">
<iconify-icon icon="solar:maximize-square-3-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium font-sans text-white">4x Smart Upscaling</h3>
</div>
<p className="text-sm font-sans text-stone-400">Increase resolution without pixelation or blur artifacts.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
<div className="flex items-center gap-3 mb-3">
<div className="text-red-400">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium font-sans text-white">Original Quality</h3>
</div>
<p className="text-sm font-sans text-stone-400">We preserve your color profile and metadata on export.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
<div className="flex items-center gap-3 mb-3">
<div className="text-stone-400">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium font-sans text-white">Secure &amp; Private</h3>
</div>
<p className="text-sm font-sans text-stone-400">Images are processed in memory and deleted after 1 hour.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
<div className="flex items-center gap-3 mb-3">
<div className="text-pink-400">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium font-sans text-white">Lightning Fast</h3>
</div>
<p className="text-sm font-sans text-stone-400">GPU-accelerated processing takes less than 3 seconds.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
<div className="flex items-center gap-3 mb-3">
<div className="text-rose-400">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium font-sans text-white">Complex Backgrounds</h3>
</div>
<p className="text-sm font-sans text-stone-400">Works on gradients, textures, and detailed photographs.</p>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative" id="upload">
<div className="max-w-4xl mx-auto px-6">
<div className="relative rounded-3xl p-1 bg-gradient-to-b to-transparent from-white/10">
<div className="bg-[#0e1217] rounded-[22px] p-8 md:p-16 text-center border relative overflow-hidden border-white/5 min-h-[400px] flex flex-col justify-center">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

<div className="transition-opacity duration-300" id="upload-state-initial">
<h2 className="text-3xl mb-4 font-google-sans-flex font-normal text-white">Start Removing Watermarks</h2>
<p className="mb-10 font-sans text-stone-400">Drag and drop an image or click to browse</p>
<div className="group relative w-full max-w-lg mx-auto h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all hover:border-orange-500/50 hover:bg-white/[0.02] cursor-pointer border-white/10" id="drop-zone">
<input accept="image/png, image/jpeg, image/webp" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="file-input" type="file"/>
<div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300 mb-4 bg-white/5 text-stone-400">
<iconify-icon icon="solar:cloud-upload-linear" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium group-hover:text-orange-300 font-sans text-white">Drop your image here</p>
<p className="text-xs text-stone-500 mt-2 font-sans">JPG, PNG, WEBP (Max 10MB)</p>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-xs text-stone-500">
<span className="flex items-center gap-1 font-sans"><iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon> Secure Transfer</span>
<span className="flex items-center gap-1 font-sans"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Auto-Deletion</span>
</div>
</div>

<div className="hidden absolute inset-0 bg-[#0e1217] z-20 flex flex-col items-center justify-center" id="upload-state-processing">
<div className="relative w-64 h-64 rounded-xl overflow-hidden border border-white/10 mb-6 bg-black">

<img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="scan-line"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-orange-500 animate-pulse" icon="solar:magic-stick-3-bold" width="48"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-google-sans-flex">Removing Watermark...</h3>
<p className="text-stone-400 text-sm font-sans">Detecting patterns and filling textures</p>
</div>

<div className="hidden absolute inset-0 bg-[#0e1217] z-20 flex flex-col items-center justify-center p-8" id="upload-state-success">
<div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mb-6 border border-green-500/20">
<iconify-icon icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2 font-google-sans-flex">Image Cleaned Successfully!</h3>
<p className="text-stone-400 text-sm font-sans mb-8">Your image is ready for download in high resolution.</p>
<div className="flex gap-4">
<button className="px-6 py-2.5 rounded-full text-sm font-medium border border-white/10 text-stone-300 hover:bg-white/5 transition-colors font-sans" onclick="resetUpload()">
                                Upload Another
                            </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-stone-200 transition-colors font-sans flex items-center gap-2" id="download-btn" onclick="downloadImage()">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                                Download HD
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-3xl mx-auto relative z-10">
<h2 className="text-2xl mb-10 text-center font-google-sans-flex font-normal text-white">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-lg border bg-white/[0.02] overflow-hidden border-white/5">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium transition hover:bg-white/[0.02] font-sans text-stone-200">
                    Does it reduce image quality?
                    <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm leading-relaxed font-sans text-stone-400">
                    No. The AI reconstructs the area behind the watermark while preserving the surrounding pixels. If you choose the "Upscale" option, quality is actually improved.
                </div>
</details>
<details className="group rounded-lg border bg-white/[0.02] overflow-hidden border-white/5">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium transition hover:bg-white/[0.02] font-sans text-stone-200">
                    Is this free to try?
                    <span className="transition group-open:rotate-180">
<iconify-icon className="" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm leading-relaxed font-sans text-stone-400">
                    Yes, you can process up to 3 images for free per day with the standard resolution model.
                </div>
</details>
<details className="group rounded-lg border bg-white/[0.02] overflow-hidden border-white/5">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium transition hover:bg-white/[0.02] font-sans text-stone-200">
                    Are my images stored?
                    <span className="transition group-open:rotate-180">
<iconify-icon className="" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm leading-relaxed font-sans text-stone-400">
                    We value your privacy. Images are processed on secure servers and permanently deleted within 60 minutes of processing.
                </div>
</details>
</div>
</section>

<footer className="bg-[#080a0e] z-10 border-white/5 border-t pt-12 pr-6 pb-12 pl-6 relative">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2 font-semibold tracking-tight font-sans text-stone-300">
<div className="w-5 h-5 rounded bg-gradient-to-tr from-orange-500 flex items-center justify-center text-[#0B0F14] to-red-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon>
</div>
                AWR
            </div>
<div className="flex gap-8 text-sm text-slate-300 gap-x-8 gap-y-8">
<a className="transition-colors font-sans hover:text-stone-300" href="#">Privacy</a>
<a className="transition-colors font-sans hover:text-stone-300" href="#">Terms</a>
<a className="transition-colors font-sans hover:text-stone-300" href="#">Contact</a>
</div>
<div className="text-xs text-zinc-300 font-sans">© 2026 Built by Alif Hassan | All rights reserved.</div>
</div>
</footer>


    </>
  );
}
