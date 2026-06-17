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
darkMode: 'class',
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
fontSize: {
xxs: '0.65rem',
}
}
}
}



        // --- Mock Data for History ---
        const historyData = [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1531297461136-82072713b904?auto=format&fit=crop&q=80&w=600",
                prompt: "Cyberpunk neon city street at night, wet pavement reflection, blue and pink lights, futuristic skyscrapers, cinematic lighting, highly detailed, photorealistic, 8k resolution, unreal engine 5 render --ar 16:9",
                model: "Prompto V4 (Fast)",
                depth: 75,
                style: "cinematic",
                notes: "Make sure the neon signs are readable and the mood is melancholic."
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
                prompt: "Abstract oil painting of a storm at sea, heavy strokes, dark blue and gold color palette, turbulent waves, dramatic lighting, masterpiece, artstation trends --v 6.0",
                model: "Prompto Cinema",
                depth: 90,
                style: "photoreal", // Using photoreal button for painting for demo
                notes: "Focus on texture."
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1620641788427-b11e69965d17?auto=format&fit=crop&q=80&w=600",
                prompt: "Minimalist vector logo of a fox, geometric shapes, orange gradient, white background, clean lines, professional design, adobe illustrator style",
                model: "Stable Diffusion XL",
                depth: 40,
                style: "vector",
                notes: "Flat design, no shadows."
            }
        ];

        // --- Core UI Elements ---
        const dropZoneContent = document.getElementById('drop-zone-content');
        const previewImage = document.getElementById('preview-image');
        const clearImageBtn = document.getElementById('clear-image-btn');
        const inputMethods = document.getElementById('input-methods');
        const promptOutput = document.getElementById('prompt-output');
        
        // --- Function to Load History Item ---
        function loadHistoryItem(item) {
            // 1. Image Preview
            previewImage.src = item.image;
            previewImage.classList.remove('hidden');
            dropZoneContent.classList.add('hidden');
            dropZoneContent.parentElement.classList.remove('border-dashed');
            dropZoneContent.parentElement.classList.add('border-solid');
            clearImageBtn.classList.remove('hidden');
            inputMethods.classList.add('hidden'); // Hide buttons below image

            // 2. Populate Prompt
            document.getElementById('initial-state').classList.add('hidden');
            document.getElementById('loading-state').classList.add('hidden');
            const resultState = document.getElementById('result-state');
            resultState.classList.remove('hidden');
            promptOutput.value = item.prompt;
            
            // 3. Update Settings Sidebar
            // Model
            selectModel(item.model);
            
            // Depth
            const range = document.getElementById('depth-range');
            range.value = item.depth;
            updateDepth(item.depth);
            
            // Style
            selectStyle(item.style);
            
            // Notes
            document.getElementById('notes-input').value = item.notes;

            // Close History Sidebar on Mobile/Desktop for better view
            const historySidebar = document.getElementById('history-sidebar');
            if (window.innerWidth < 1024) {
                historySidebar.classList.add('translate-x-full');
            }
        }

        // --- Configuration Functions ---
        function selectModel(name) {
            document.getElementById('selected-model').innerText = name;
            document.getElementById('model-list').classList.add('hidden');
        }

        function updateDepth(val) {
            document.getElementById('depth-value').innerText = (val / 100).toFixed(2);
        }

        function selectStyle(styleId) {
            // Reset all styles
            const buttons = document.querySelectorAll('.style-btn');
            buttons.forEach(btn => {
                // Reset to default zinc-900 border-white/10 text-zinc-400
                btn.className = 'style-btn flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium rounded-lg transition-all hover:bg-zinc-800 hover:text-white';
            });

            // Activate selected
            const activeBtn = document.getElementById(`style-${styleId}`);
            if(activeBtn) {
                // Change to active state: darker bg/border or accent color
                activeBtn.classList.remove('text-zinc-400', 'bg-zinc-900', 'border-white/10');
                activeBtn.classList.add('bg-zinc-800', 'border-indigo-500/50', 'text-white', 'shadow-sm');
            }
        }

        function resetDefaults() {
            document.getElementById('notes-input').value = '';
            selectModel('Prompto V4 (Fast)');
            document.getElementById('depth-range').value = 75;
            updateDepth(75);
            selectStyle('photoreal');
        }

        // --- Image Handling ---
        function clearImage(e) {
            if(e) e.stopPropagation();
            previewImage.src = '';
            previewImage.classList.add('hidden');
            dropZoneContent.classList.remove('hidden');
            dropZoneContent.parentElement.classList.add('border-dashed');
            dropZoneContent.parentElement.classList.remove('border-solid');
            clearImageBtn.classList.add('hidden');
            inputMethods.classList.remove('hidden');
            
            // Reset Result View
            document.getElementById('result-state').classList.add('hidden');
            document.getElementById('initial-state').classList.remove('hidden');
            promptOutput.value = '';
        }

        // --- Standard UI Interaction ---
        function toggleDropdown(id) {
            document.getElementById(id).classList.toggle('hidden');
        }

        window.addEventListener('click', (e) => {
            if (!document.getElementById('model-dropdown').contains(e.target)) {
                document.getElementById('model-list').classList.add('hidden');
            }
        });

        const historyBtn = document.getElementById('history-toggle');
        const closeHistoryBtn = document.getElementById('close-history');
        const historySidebar = document.getElementById('history-sidebar');

        function toggleHistory() {
            historySidebar.classList.toggle('translate-x-full');
        }

        historyBtn.addEventListener('click', toggleHistory);
        closeHistoryBtn.addEventListener('click', toggleHistory);

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeSidebarBtn = document.getElementById('close-sidebar');
        const leftSidebar = document.getElementById('left-sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        function toggleMobileSidebar() {
            leftSidebar.classList.toggle('-translate-x-full');
            if (leftSidebar.classList.contains('-translate-x-full')) {
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            } else {
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMobileSidebar);
        closeSidebarBtn.addEventListener('click', toggleMobileSidebar);
        overlay.addEventListener('click', toggleMobileSidebar);

        function startGeneration() {
            const generateBtn = document.getElementById('generate-btn');
            const initialState = document.getElementById('initial-state');
            const loadingState = document.getElementById('loading-state');
            const resultState = document.getElementById('result-state');

            initialState.classList.add('hidden');
            resultState.classList.add('hidden');
            loadingState.classList.remove('hidden');
            generateBtn.disabled = true;
            generateBtn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="18"></span> Processing...`;
            generateBtn.classList.add('opacity-75', 'cursor-not-allowed');

            setTimeout(() => {
                loadingState.classList.add('hidden');
                resultState.classList.remove('hidden');
                resultState.classList.add('fade-enter');
                setTimeout(() => resultState.classList.add('fade-enter-active'), 10);
                
                // Set default text if empty
                if(promptOutput.value === '') {
                    promptOutput.value = "Cinematic shot of a futuristic neon city in rain, cyberpunk aesthetic, wet streets reflecting vibrant pink and blue lights, towering glass skyscrapers, atmospheric fog, intricate details, photorealistic --ar 16:9";
                }

                generateBtn.disabled = false;
                generateBtn.innerHTML = `<span class="iconify" data-icon="lucide:sparkles" data-width="18"></span> Generate Prompt`;
                generateBtn.classList.remove('opacity-75', 'cursor-not-allowed');
            }, 1500);
        }
        
        function copyToClipboard() {
             promptOutput.select();
             document.execCommand('copy');
             // Could add a toast notification here
        }
        
        // Initialize Default Style
        selectStyle('photoreal');

    
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
      

<header className="h-16 flex items-center justify-between px-4 lg:px-6 glass z-50 relative shrink-0">

<div className="flex items-center gap-3">
<button className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors relative" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<div className="flex items-center gap-2 group cursor-pointer" onclick="window.location.reload()">
<div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:aperture" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-lg font-medium tracking-tight text-white">Prompto</span>
</div>
</div>

<div className="hidden md:flex items-center gap-3 bg-zinc-900 border border-white/5 px-4 py-1.5 rounded-full">
<span className="iconify text-zinc-500" data-icon="lucide:sparkles" data-width="14"></span>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
<span className="text-zinc-200">234</span> Tokens used
                <span className="w-px h-3 bg-zinc-700"></span>
<span className="text-zinc-500">76 Remaining</span>
</div>
</div>

<div className="flex items-center gap-2">
<button className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" title="Toolkit">
<span className="iconify" data-icon="lucide:life-buoy" data-width="18"></span>
</button>
<button className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all relative" id="history-toggle" title="History">
<span className="iconify" data-icon="lucide:history" data-width="18"></span>
</button>
<div className="h-6 w-px bg-white/10 mx-1"></div>
<div className="relative group">
<button className="flex items-center gap-2 pl-2 pr-1 py-1 hover:bg-white/5 rounded-full transition-all border border-transparent hover:border-white/5">
<div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
<img alt="User" className="w-full h-full opacity-80 hover:opacity-100 transition-opacity" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</div>
</header>

<main className="flex flex-1 overflow-hidden relative">

<aside className="absolute lg:relative z-40 w-72 h-full bg-zinc-950 border-r border-white/5 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 flex flex-col" id="left-sidebar">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 lg:hidden">
<span className="text-sm font-medium text-zinc-400">Configuration</span>
<button className="text-zinc-500" id="close-sidebar"><span className="iconify" data-icon="lucide:x" data-width="18"></span></button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-8">

<div className="p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-lg flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:sliders-horizontal" data-width="16"></span>
<div>
<h4 className="text-xs font-semibold text-indigo-200 mb-0.5">Settings</h4>
<p className="text-xxs text-zinc-400">Current configuration for the generated prompt.</p>
</div>
</div>

<div className="space-y-3 relative">
<div className="flex items-center gap-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Model</label>
</div>
<div className="relative group" id="model-dropdown">
<button className="w-full flex items-center justify-between bg-zinc-900 border border-white/10 hover:border-zinc-700 text-zinc-300 text-sm px-3 py-2.5 rounded-lg transition-all shadow-sm" onclick="toggleDropdown('model-list')">
<span className="flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:cpu" data-width="16"></span>
<span id="selected-model">Prompto V4 (Fast)</span>
</span>
<span className="iconify text-zinc-600" data-icon="lucide:chevrons-up-down" data-width="14"></span>
</button>
<div className="hidden absolute top-full left-0 w-full mt-1 bg-zinc-900 border border-white/10 rounded-lg shadow-xl z-20 overflow-hidden" id="model-list">
<div className="p-1">
<div className="px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 rounded cursor-pointer flex justify-between group" onclick="selectModel('Prompto V4 (Fast)')">
                                    Prompto V4
                                </div>
<div className="px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 rounded cursor-pointer" onclick="selectModel('Prompto Cinema')">Prompto Cinema</div>
<div className="px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 rounded cursor-pointer" onclick="selectModel('Stable Diffusion XL')">Stable Diffusion XL</div>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Creativity Depth</label>
<span className="text-xxs text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-white/5" id="depth-value">0.75</span>
</div>
<div className="relative h-6 flex items-center">
<input className="z-10 relative" id="depth-range" max="100" min="0" oninput="updateDepth(this.value)" type="range" value="75"/>
</div>
<div className="flex justify-between text-xxs text-zinc-600 font-medium px-0.5">
<span>Literal</span>
<span>Balanced</span>
<span>Creative</span>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Output Style</label>
<div className="grid grid-cols-2 gap-2">
<button className="style-btn flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-medium rounded-lg transition-all hover:bg-zinc-800 hover:text-white" id="style-photoreal" onclick="selectStyle('photoreal')">
<span className="iconify" data-icon="lucide:image" data-width="14"></span>
                            Photoreal
                        </button>
<button className="style-btn flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium rounded-lg transition-all hover:bg-zinc-800 hover:text-zinc-200" id="style-vector" onclick="selectStyle('vector')">
<span className="iconify" data-icon="lucide:pen-tool" data-width="14"></span>
                            Vector
                        </button>
<button className="style-btn flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium rounded-lg transition-all hover:bg-zinc-800 hover:text-zinc-200" id="style-3d" onclick="selectStyle('3d')">
<span className="iconify" data-icon="lucide:box" data-width="14"></span>
                            3D Render
                        </button>
<button className="style-btn flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium rounded-lg transition-all hover:bg-zinc-800 hover:text-zinc-200" id="style-cinematic" onclick="selectStyle('cinematic')">
<span className="iconify" data-icon="lucide:film" data-width="14"></span>
                            Cinematic
                        </button>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Context / Notes</label>
<textarea className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-all resize-none h-24" id="notes-input" placeholder="Add specific details..."></textarea>
</div>
</div>

<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" onclick="resetDefaults()">
<span className="iconify" data-icon="lucide:rotate-ccw" data-width="14"></span> Reset Defaults
                </button>
</div>
</aside>

<section className="flex-1 grid md:grid-cols-2 relative bg-zinc-950">

<div className="relative h-full border-r border-white/5 p-8 flex flex-col">
<div className="flex-1 flex flex-col items-center justify-center">

<div className="w-full max-w-md aspect-[4/3] rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-600 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden" id="drop-zone">

<div className="relative z-10 flex flex-col items-center space-y-4 text-center p-6" id="drop-zone-content">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-zinc-300 transition-colors">
<span className="iconify" data-icon="lucide:upload-cloud" data-strokeWidth="1.5" data-width="32"></span>
</div>
<div>
<h3 className="text-zinc-200 font-medium mb-1">Upload Reference Image</h3>
<p className="text-sm text-zinc-500">Drag &amp; drop or <span className="text-zinc-400 border-b border-zinc-600 pb-0.5">browse</span></p>
</div>
<p className="text-xs text-zinc-600">Supports JPG, PNG, WEBP up to 10MB</p>
</div>

<img alt="Preview" className="hidden absolute inset-0 w-full h-full object-cover" id="preview-image" src=""/>

<button className="hidden absolute top-3 right-3 p-1.5 bg-zinc-900/80 hover:bg-red-500/80 text-white rounded-lg backdrop-blur-sm transition-colors border border-white/10 z-20" id="clear-image-btn" onclick="clearImage(event)">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>
</div>

<div className="mt-8 flex items-center gap-4" id="input-methods">
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg border border-white/5 text-sm text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:link" data-width="16"></span> Paste URL
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg border border-white/5 text-sm text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:clipboard" data-width="16"></span> Clipboard
                        </button>
</div>
</div>

<div className="mt-auto pt-6 flex justify-center w-full">
<button className="w-full max-w-md bg-white text-black hover:bg-zinc-200 py-3.5 px-6 rounded-lg font-medium tracking-tight text-sm flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0" id="generate-btn" onclick="startGeneration()">
<span className="iconify" data-icon="lucide:sparkles" data-width="18"></span>
                        Generate Prompt
                    </button>
</div>
</div>

<div className="relative h-full bg-zinc-900/20 p-8 flex flex-col overflow-hidden">

<div className="flex-1 flex flex-col items-center justify-center text-center opacity-40" id="initial-state">
<span className="iconify text-zinc-700 mb-4" data-icon="lucide:terminal-square" data-strokeWidth="1" data-width="48"></span>
<p className="text-zinc-500 font-light">Prompt output will appear here</p>
</div>

<div className="hidden flex-1 flex flex-col gap-6 py-10" id="loading-state">
<div className="flex items-center gap-3 mb-2">
<div className="w-4 h-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
<span className="text-sm text-zinc-400 font-medium animate-pulse">Processing image...</span>
</div>
<div className="w-full h-full rounded-lg bg-zinc-900 border border-white/5 animate-shimmer opacity-50"></div>
</div>

<div className="hidden flex-col h-full fade-enter-active" id="result-state">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-white tracking-tight">Generated Prompt</h2>
<div className="flex gap-2">
<span className="text-xs text-zinc-500 py-2">Editable</span>
</div>
</div>

<div className="flex-1 relative group mb-4">
<textarea className="w-full h-full bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-sm font-mono text-zinc-300 leading-relaxed resize-none focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all no-scrollbar" id="prompt-output" placeholder="Your prompt will be generated here..." spellcheck="false"></textarea>

<div className="absolute top-3 right-3 flex gap-1">
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/10 rounded-md transition-colors" onclick="copyToClipboard()" title="Copy Prompt">
<span className="iconify" data-icon="lucide:copy" data-width="14"></span>
</button>
</div>
</div>

</div>
</div>
</section>

<aside className="fixed inset-y-0 right-0 z-50 w-80 bg-zinc-950 border-l border-white/10 transform translate-x-full transition-transform duration-300 ease-out flex flex-col pt-16" id="history-sidebar">
<div className="p-4 border-b border-white/5 flex items-center justify-between">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:clock" data-width="16"></span>
                    History
                </h3>
<button className="p-1 text-zinc-500 hover:text-white rounded-md transition-colors" id="close-history">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">

<div className="group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors border border-transparent hover:border-white/5" onclick="loadHistoryItem(historyData[0])">
<div className="aspect-video bg-zinc-900 rounded-md border border-white/5 overflow-hidden relative mb-2">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<p className="text-xs text-zinc-400 line-clamp-2 group-hover:text-white transition-colors">Cyberpunk neon city street at night, wet pavement reflection, blue and pink lights...</p>
</div>
<div className="mt-2 flex items-center gap-2">
<span className="text-xxs text-zinc-600 bg-zinc-900 px-1.5 rounded">Prompto V4</span>
<span className="text-xxs text-zinc-600">2m ago</span>
</div>
</div>

<div className="group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors border border-transparent hover:border-white/5" onclick="loadHistoryItem(historyData[1])">
<div className="aspect-video bg-zinc-900 rounded-md border border-white/5 overflow-hidden relative mb-2">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex justify-between items-start">
<p className="text-xs text-zinc-400 line-clamp-2 group-hover:text-white transition-colors">Abstract oil painting of a storm at sea, heavy strokes, dark blue and gold...</p>
</div>
<div className="mt-2 flex items-center gap-2">
<span className="text-xxs text-zinc-600 bg-zinc-900 px-1.5 rounded">Cinema</span>
<span className="text-xxs text-zinc-600">1h ago</span>
</div>
</div>

<div className="group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors border border-transparent hover:border-white/5" onclick="loadHistoryItem(historyData[2])">
<div className="aspect-video bg-zinc-900 rounded-md border border-white/5 overflow-hidden relative mb-2">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<p className="text-xs text-zinc-400 line-clamp-2 group-hover:text-white transition-colors">Minimalist vector logo of a fox, geometric shapes, orange gradient...</p>
</div>
<div className="mt-2 flex items-center gap-2">
<span className="text-xxs text-zinc-600 bg-zinc-900 px-1.5 rounded">SD XL</span>
<span className="text-xxs text-zinc-600">3h ago</span>
</div>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 hidden opacity-0 transition-opacity duration-300 lg:hidden" id="sidebar-overlay"></div>
</main>


    </>
  );
}
