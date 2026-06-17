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



        // State
        let state = {
            model: 'kling',
            ratio: '16:9',
            duration: 5,
            prompt: '',
            history: [
                { id: 1, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600', prompt: 'Cyberpunk City', ratio: '16:9' },
                { id: 2, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600', prompt: 'Space Nebula', ratio: '21:9' },
                { id: 3, img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600', prompt: 'Golden Ocean', ratio: '9:16' }
            ]
        };

        // --- Functions ---

        // UI Initialization
        window.onload = () => {
            renderHistory();
            
            // Random Prompt
            const prompts = [
                "A futuristic city with flying cars in rain, neon lights, 8k",
                "A cute cat astronaut floating in space, pixar style",
                "Drone shot of Iceland waterfalls, cinematic lighting",
                "Cyberpunk street food vendor, detailed smoke effects"
            ];
            document.getElementById('randomPromptBtn').onclick = () => {
                document.getElementById('promptInput').value = prompts[Math.floor(Math.random() * prompts.length)];
            };
        };

        // Model Selection
        function selectModel(element, modelName) {
            state.model = modelName;
            // Reset styling
            document.querySelectorAll('.model-option').forEach(el => {
                el.classList.remove('active', 'border-indigo-500/40', 'bg-indigo-500/5');
                el.classList.add('border-white/5', 'bg-zinc-900/40');
                el.querySelector('iconify-icon[icon="solar:check-circle-bold"]').style.opacity = '0';
                el.querySelector('.text-sm').classList.remove('text-indigo-100');
            });
            // Apply styling to selected
            element.classList.add('active', 'border-indigo-500/40', 'bg-indigo-500/5');
            element.classList.remove('border-white/5', 'bg-zinc-900/40');
            element.querySelector('iconify-icon[icon="solar:check-circle-bold"]').style.opacity = '1';
            element.querySelector('.text-sm').classList.add('text-indigo-100');
        }

        // Custom Dropdown Logic
        function toggleDropdown(id) {
            const el = document.getElementById(id);
            if (el.style.display === 'block') {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
                // Close on click outside
                const close = (e) => {
                    if (!e.target.closest('#' + id) && !e.target.closest('#ratioBtn')) {
                        el.style.display = 'none';
                        document.removeEventListener('click', close);
                    }
                };
                setTimeout(() => document.addEventListener('click', close), 10);
            }
        }

        // Ratio Selection
        function selectRatio(ratio, label, icon) {
            state.ratio = ratio;
            
            // Update UI Button
            document.getElementById('currentRatioText').innerHTML = `${ratio} ${label}`;
            const btnIcon = document.querySelector('#ratioBtn iconify-icon');
            btnIcon.setAttribute('icon', `solar:${icon}`);
            
            // Update Preview Aspect Ratio
            const frame = document.getElementById('videoFrame');
            const ratioVal = ratio.replace(':', '/');
            frame.style.aspectRatio = ratioVal;
            
            // Adjust width based on ratio to fit container nicely
            if (ratio === '9:16') {
                frame.style.width = '40%';
            } else if (ratio === '1:1') {
                frame.style.width = '50%';
            } else if (ratio === '21:9') {
                frame.style.width = '95%';
            } else {
                frame.style.width = '80%';
            }

            document.getElementById('ratioDropdown').style.display = 'none';
        }

        // Duration Slider
        function updateDuration(val) {
            state.duration = val;
            document.getElementById('durationValue').innerText = `${val}s`;
        }

        // Generate Logic
        function generateVideo() {
            const prompt = document.getElementById('promptInput').value;
            if (!prompt) {
                document.getElementById('promptInput').focus();
                document.getElementById('promptInput').classList.add('ring-2', 'ring-red-500/50');
                setTimeout(() => document.getElementById('promptInput').classList.remove('ring-2', 'ring-red-500/50'), 1000);
                return;
            }

            // UI State: Loading
            const btn = document.getElementById('generateBtn');
            const btnText = document.getElementById('btnText');
            const btnLoading = document.getElementById('btnLoading');
            const placeholder = document.getElementById('placeholderState');
            const loadingOverlay = document.getElementById('loadingOverlay');
            const resultImg = document.getElementById('resultImage');
            const controls = document.getElementById('videoControls');

            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-wait');
            btnText.style.display = 'none';
            btnLoading.style.display = 'flex';
            
            placeholder.style.display = 'none';
            resultImg.style.display = 'none';
            controls.style.display = 'none';
            loadingOverlay.style.display = 'flex';

            // Simulate Generation Delay (3s)
            setTimeout(() => {
                // Determine image based on keywords or random
                let imgUrl = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200'; // default
                if (prompt.includes('cat')) imgUrl = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200';
                if (prompt.includes('city')) imgUrl = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200';
                if (prompt.includes('space')) imgUrl = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200';

                // Success State
                loadingOverlay.style.display = 'none';
                resultImg.src = imgUrl;
                resultImg.style.display = 'block';
                controls.style.display = 'flex';
                
                // Reset Button
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-wait');
                btnText.style.display = 'flex';
                btnLoading.style.display = 'none';

                // Add to history
                addToHistory(imgUrl, prompt, state.ratio);

            }, 3000);
        }

        // History Management
        function renderHistory() {
            const container = document.getElementById('historyList');
            container.innerHTML = state.history.map(item => `
                <div onclick="loadFromHistory('${item.img}', '${item.ratio}')" class="relative flex-shrink-0 w-40 h-24 rounded-lg bg-zinc-800 border border-white/5 overflow-hidden group cursor-pointer hover:ring-1 hover:ring-indigo-500/50 transition-all">
                    <img src="${item.img}" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div class="absolute bottom-2 left-2 right-2">
                        <p class="text-[10px] text-zinc-200 truncate font-medium">${item.prompt}</p>
                        <p class="text-[9px] text-zinc-500">${item.ratio}</p>
                    </div>
                </div>
            `).join('');
        }

        function addToHistory(img, prompt, ratio) {
            state.history.unshift({ id: Date.now(), img, prompt, ratio });
            renderHistory();
        }

        function loadFromHistory(img, ratio) {
            // Update Ratio
            let icon = 'monitor-linear';
            let label = 'Landscape';
            if (ratio === '9:16') { icon = 'smartphone-linear'; label = 'Portrait'; }
            if (ratio === '1:1') { icon = 'instagram-linear'; label = 'Square'; }
            if (ratio === '21:9') { icon = 'clapperboard-linear'; label = 'Cinema'; }
            
            selectRatio(ratio, label, icon);

            // Show Image
            const placeholder = document.getElementById('placeholderState');
            const resultImg = document.getElementById('resultImage');
            const controls = document.getElementById('videoControls');

            placeholder.style.display = 'none';
            resultImg.src = img;
            resultImg.style.display = 'block';
            controls.style.display = 'flex';
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-zinc-100 font-medium tracking-tighter text-lg flex items-center gap-2" href="#" onclick="location.reload()">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-linear" strokeWidth="2.5" width="16"></iconify-icon>
</div>
                    VELOCITY <span className="text-zinc-500 font-normal">AI</span>
</a>
<div className="hidden md:flex gap-1 p-1 bg-zinc-900 rounded-lg border border-white/5">
<button className="px-3 py-1 text-xs font-medium text-white bg-zinc-800 rounded-md shadow-sm border border-white/5">Create</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Showcase</button>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
                    Free Unlimited Plan
                </div>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors text-white text-xs font-semibold">
                    JD
                </button>
</div>
</div>
</nav>

<main className="flex-1 pt-14 flex h-screen">

<div className="w-[400px] flex-shrink-0 flex flex-col border-r border-white/5 bg-zinc-950 h-full overflow-y-auto custom-scrollbar relative z-20">
<div className="p-5 space-y-6 pb-24">

<div className="p-1 bg-zinc-900 rounded-xl border border-white/5 grid grid-cols-2 gap-1">
<button className="py-2 px-2 rounded-lg bg-zinc-800 text-zinc-100 shadow-sm border border-white/5 text-[10px] font-medium flex items-center justify-center gap-1.5 transition-all">
<iconify-icon icon="solar:text-field-linear" width="14"></iconify-icon>
                        Text to Video
                    </button>
<button className="py-2 px-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-all text-[10px] font-medium flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:gallery-linear" width="14"></iconify-icon>
                        Image to Video
                    </button>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Prompt</label>
<button className="text-[10px] text-zinc-500 hover:text-indigo-400 transition-colors flex items-center gap-1" id="randomPromptBtn">
<iconify-icon icon="solar:shuffle-linear" width="12"></iconify-icon>
                            Random
                        </button>
</div>
<div className="relative group">
<textarea className="w-full h-32 bg-zinc-900/40 text-sm text-zinc-200 p-3 rounded-xl border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none resize-none transition-all placeholder:text-zinc-700 leading-relaxed" id="promptInput" placeholder="Describe your video... e.g., A cinematic drone shot of a futuristic cyberpunk city in rain..."></textarea>
</div>
</div>
<hr className="border-white/5"/>

<div className="space-y-3">
<label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
<span>AI Model</span>
</label>
<div className="grid gap-2" id="modelSelector">

<div className="model-option relative flex items-center gap-3 p-3 rounded-xl border border-indigo-500/40 bg-indigo-500/5 cursor-pointer hover:bg-indigo-500/10 transition-all group active" onclick="selectModel(this, 'kling')">
<div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-white shadow-lg group-[.active]:shadow-indigo-500/20">
<span className="font-bold text-xs tracking-tighter">KL</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-100 group-[.active]:text-indigo-100">Kling AI</div>
<iconify-icon className="text-indigo-400 opacity-0 group-[.active]:opacity-100 transition-opacity" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div className="text-[11px] text-zinc-500 group-[.active]:text-indigo-300/70">Realistic motion</div>
</div>
</div>

<div className="model-option relative flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-zinc-900/40 cursor-pointer hover:bg-zinc-800/40 hover:border-white/10 transition-all group" onclick="selectModel(this, 'gen3')">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-300">Gen-3 Alpha</div>
<iconify-icon className="text-indigo-400 opacity-0 group-[.active]:opacity-100 transition-opacity" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div className="text-[11px] text-zinc-600">High fidelity</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative z-50">
<div className="space-y-2 relative">
<label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Ratio</label>
<div className="relative">
<button className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 text-zinc-200 text-xs rounded-lg px-3 py-2.5 flex items-center justify-between transition-colors" id="ratioBtn" onclick="toggleDropdown('ratioDropdown')">
<span className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:monitor-linear" width="14"></iconify-icon>
<span id="currentRatioText">16:9 Landscape</span>
</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="hidden-custom absolute top-full left-0 w-full mt-1 bg-zinc-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in duration-200" id="ratioDropdown">
<div className="p-1 space-y-0.5">
<button className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-800 rounded-md flex items-center gap-2" onclick="selectRatio('16:9', 'Landscape', 'monitor-linear')">
<iconify-icon icon="solar:monitor-linear" width="14"></iconify-icon> 16:9 Landscape
                                    </button>
<button className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-800 rounded-md flex items-center gap-2" onclick="selectRatio('9:16', 'Portrait', 'smartphone-linear')">
<iconify-icon icon="solar:smartphone-linear" width="14"></iconify-icon> 9:16 Portrait
                                    </button>
<button className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-800 rounded-md flex items-center gap-2" onclick="selectRatio('1:1', 'Square', 'instagram-linear')">
<iconify-icon icon="solar:instagram-linear" width="14"></iconify-icon> 1:1 Square
                                    </button>
<button className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-800 rounded-md flex items-center gap-2" onclick="selectRatio('21:9', 'Cinema', 'clapperboard-linear')">
<iconify-icon icon="solar:clapperboard-linear" width="14"></iconify-icon> 21:9 Cinema
                                    </button>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Quality</label>
<div className="relative">
<button className="w-full bg-zinc-900 border border-white/10 text-zinc-200 text-xs rounded-lg px-3 py-2.5 flex items-center justify-between cursor-default">
<span className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:medal-star-linear" width="14"></iconify-icon>
<span>1080p HD</span>
</span>
</button>
</div>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="flex justify-between items-center">
<label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Duration</label>
<span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20" id="durationValue">5s</span>
</div>
<div className="px-1 relative">
<input className="w-full z-20 relative" id="durationInput" max="60" min="5" oninput="updateDuration(this.value)" step="5" type="range" value="5"/>
<div className="flex justify-between mt-2 text-[10px] text-zinc-600 font-medium">
<span>5s</span>
<span>30s</span>
<span>60s</span>
</div>
</div>
</div>

<div className="pt-4">
<button className="group relative w-full h-12 rounded-xl font-semibold text-white overflow-hidden isolate shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all active:scale-[0.98]" id="generateBtn" onclick="generateVideo()">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 transition-opacity"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<span className="relative flex items-center justify-center gap-2 text-sm tracking-wide" id="btnText">
<iconify-icon className="animate-pulse" icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
                            Generate Video
                        </span>

<span className="hidden-custom relative flex items-center justify-center gap-2 text-sm tracking-wide" id="btnLoading">
<iconify-icon className="animate-spin" icon="solar:restart-circle-linear" width="18"></iconify-icon>
                            Dreaming...
                        </span>
</button>
<p className="text-center text-[10px] text-zinc-600 mt-3 flex items-center justify-center gap-1">
<iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
                        Takes ~5-10 seconds
                    </p>
</div>
</div>
</div>

<div className="flex-1 bg-zinc-950 flex flex-col min-w-0 z-10 relative">

<div className="flex-1 p-8 flex flex-col items-center justify-center overflow-hidden bg-zinc-950 relative">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative w-full max-w-4xl max-h-full transition-all duration-500 ease-in-out flex items-center justify-center p-4" id="previewContainer">
<div className="relative w-full bg-zinc-900 rounded-2xl border border-white/5 shadow-2xl overflow-hidden group transition-all duration-500" id="videoFrame" style={{aspectRatio: '16/9', width: '80%'}}>

<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-zinc-900" id="placeholderState">
<div className="w-20 h-20 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-4 shadow-inner">
<iconify-icon className="text-zinc-600" icon="solar:clapperboard-play-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-300">Ready to Create</h3>
<p className="text-sm text-zinc-500 mt-2 max-w-xs">Configure your settings on the left and hit generate.</p>
</div>

<div className="hidden-custom absolute inset-0 bg-zinc-900 z-20 flex flex-col items-center justify-center" id="loadingOverlay">
<div className="w-full h-1 absolute top-0 shimmer bg-indigo-500/20"></div>
<iconify-icon className="text-indigo-500 animate-spin-slow mb-4" icon="solar:black-hole-line-duotone" width="48"></iconify-icon>
<span className="text-xs font-mono text-zinc-400 animate-pulse">RENDERING PIXELS...</span>
</div>

<img alt="Generated Content" className="hidden-custom absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700" id="resultImage" src=""/>

<div className="hidden-custom absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="videoControls">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
</button>
<div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-indigo-500"></div>
</div>
<span className="text-xs font-mono text-white/80">00:05</span>
<button className="text-white/80 hover:text-white">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="h-[160px] border-t border-white/5 bg-zinc-900/30 backdrop-blur-sm p-5 overflow-hidden">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:history-linear" width="12"></iconify-icon>
                        Recent Generations
                    </h3>
</div>
<div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar scroll-smooth" id="historyList">

</div>
</div>
</div>
</main>


    </>
  );
}
