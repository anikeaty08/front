import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Custom dropdown functionality
    function setupDropdown(btnId, dropdownId, valueId) {
      const btn = document.getElementById(btnId);
      const dropdown = document.getElementById(dropdownId);
      const items = dropdown.querySelectorAll('.dropdown-item');
      const valueDisplay = document.getElementById(valueId);
      
      btn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
      });
      
      items.forEach(item => {
        item.addEventListener('click', () => {
          valueDisplay.textContent = item.textContent;
          dropdown.classList.add('hidden');
          updatePrompt();
        });
      });
      
      document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });
    }
    
    setupDropdown('typeBtn', 'typeDropdown', 'typeValue');
    setupDropdown('easingBtn', 'easingDropdown', 'easingValue');
    
    // Duration slider
    const duration = document.getElementById('duration');
    const durationValue = document.getElementById('durationValue');
    
    duration.addEventListener('input', () => {
      durationValue.textContent = `${duration.value}ms`;
      updatePrompt();
    });
    
    // Handle infinite checkbox
    const infinite = document.getElementById('infinite');
    const iterations = document.getElementById('iterations');
    
    infinite.addEventListener('change', () => {
      iterations.disabled = infinite.checked;
      updatePrompt();
    });
    
    // Update prompt when inputs change
    document.getElementById('delay').addEventListener('input', updatePrompt);
    iterations.addEventListener('input', updatePrompt);
    
    // Generate prompt based on settings
    function updatePrompt() {
      const type = document.getElementById('typeValue').textContent;
      const durationMs = document.getElementById('duration').value;
      const easing = document.getElementById('easingValue').textContent;
      const delayMs = document.getElementById('delay').value;
      const iterationCount = infinite.checked ? 'infinite' : iterations.value;
      
      const prompt = `Create a ${type.toLowerCase()} animation with:
- Duration: ${durationMs}ms
- Easing: ${easing}
- Delay: ${delayMs}ms
- Iterations: ${iterationCount}

The animation should create a smooth ${type.toLowerCase()} effect that feels natural and enhances user experience.`;
      
      document.getElementById('output').textContent = prompt;
    }
    
    // Play animation preview
    document.getElementById('playBtn').addEventListener('click', () => {
      const element = document.getElementById('previewElement');
      const type = document.getElementById('typeValue').textContent.toLowerCase();
      const durationMs = document.getElementById('duration').value;
      const easing = document.getElementById('easingValue').textContent.toLowerCase().replace(' ', '-');
      const delayMs = document.getElementById('delay').value;
      const iterationCount = infinite.checked ? 'infinite' : iterations.value;
      
      // Reset animation
      element.style.animation = 'none';
      element.offsetHeight; // Trigger reflow
      
      // Apply animation
      let animationName;
      switch(type) {
        case 'fade': animationName = 'fadeAnim'; break;
        case 'slide': animationName = 'slideAnim'; break;
        case 'zoom': animationName = 'zoomAnim'; break;
        case 'rotate': animationName = 'rotateAnim'; break;
        case 'bounce': animationName = 'bounceAnim'; break;
        default: animationName = 'fadeAnim';
      }
      
      element.style.animation = `${animationName} ${durationMs}ms ${easing} ${delayMs}ms ${iterationCount}`;
    });
    
    // Copy button
    document.getElementById('copyBtn').addEventListener('click', () => {
      const text = document.getElementById('output').textContent;
      navigator.clipboard.writeText(text);
      
      const copyBtn = document.getElementById('copyBtn');
      copyBtn.innerHTML = '<svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copied';
      setTimeout(() => {
        copyBtn.innerHTML = '<svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>Copy';
      }, 2000);
    });
    
    // Initialize prompt on load
    updatePrompt();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-md mx-auto bg-zinc-900 rounded-lg shadow-xl overflow-hidden border border-zinc-800">
<div className="p-4 border-b border-zinc-800">
<h1 className="text-lg font-medium">Animation Prompt Builder</h1>
</div>
<div className="p-4 space-y-3">

<div>
<label className="block mb-1 text-xs text-zinc-400">Animation Type</label>
<div className="relative">
<button className="w-full bg-zinc-800 py-1.5 px-3 rounded text-left flex justify-between items-center text-xs" id="typeBtn">
<span id="typeValue">Fade</span>
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute z-10 w-full mt-1 bg-zinc-800 rounded shadow-lg hidden" id="typeDropdown">
<div className="p-1">
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="fade">Fade</div>
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="slide">Slide</div>
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="zoom">Zoom</div>
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="rotate">Rotate</div>
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="bounce">Bounce</div>
</div>
</div>
</div>
</div>

<div>
<label className="block mb-1 text-xs text-zinc-400">Duration (ms)</label>
<div className="flex items-center">
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" id="duration" max="3000" min="100" step="100" type="range" value="1000"/>
<span className="ml-2 min-w-[50px] text-right text-xs" id="durationValue">1000ms</span>
</div>
</div>

<div>
<label className="block mb-1 text-xs text-zinc-400">Easing</label>
<div className="relative">
<button className="w-full bg-zinc-800 py-1.5 px-3 rounded text-left flex justify-between items-center text-xs" id="easingBtn">
<span id="easingValue">Ease</span>
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute z-10 w-full mt-1 bg-zinc-800 rounded shadow-lg hidden" id="easingDropdown">
<div className="p-1">
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="linear">Linear</div>
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="ease">Ease</div>
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="ease-in">Ease In</div>
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="ease-out">Ease Out</div>
<div className="px-3 py-1.5 rounded cursor-pointer dropdown-item" data-value="ease-in-out">Ease In Out</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div>
<label className="block mb-1 text-xs text-zinc-400">Delay (ms)</label>
<input className="w-full bg-zinc-800 py-1.5 px-3 rounded text-xs" id="delay" max="2000" min="0" step="50" type="number" value="0"/>
</div>
<div>
<label className="block mb-1 text-xs text-zinc-400">Iterations</label>
<div className="flex space-x-2 items-center">
<input className="w-full bg-zinc-800 py-1.5 px-3 rounded text-xs" id="iterations" max="10" min="1" type="number" value="1"/>
<label className="flex items-center text-xs whitespace-nowrap">
<input className="mr-1 h-3 w-3" id="infinite" type="checkbox"/>
              ∞
            </label>
</div>
</div>
</div>

<div className="pt-2">
<div className="h-28 bg-zinc-800 rounded flex items-center justify-center overflow-hidden">
<div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded flex items-center justify-center text-xs" id="previewElement">
            Preview
          </div>
</div>
<button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 py-1.5 px-3 rounded transition text-xs" id="playBtn">
          Play Animation
        </button>
</div>

<div className="pt-2">
<div className="flex justify-between items-center mb-1">
<label className="text-xs text-zinc-400">Generated Prompt</label>
<button className="text-indigo-400 hover:text-indigo-300 text-xs flex items-center" id="copyBtn">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Copy
          </button>
</div>
<div className="bg-zinc-950 rounded p-2 h-28 overflow-auto">
<pre className="text-emerald-400 text-xs whitespace-pre-wrap" id="output"></pre>
</div>
</div>
</div>
</div>


    </>
  );
}
