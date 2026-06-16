import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Interactivity logic mapping to the new design
    const generateBtn = document.getElementById('generateBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const videoGrid = document.getElementById('videoGrid');
    const promptInput = document.getElementById('prompt');
    const emptyState = document.getElementById('emptyState');
    
    // File upload logic
    const fileInput = document.getElementById('imageUpload');
    const filePreview = document.getElementById('filePreviewContainer');
    const fileNameDisplay = document.getElementById('fileName');
    const removeFileBtn = document.getElementById('removeFileBtn');

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            fileNameDisplay.textContent = e.target.files[0].name;
            filePreview.classList.remove('hidden');
        }
    });

    removeFileBtn.addEventListener('click', () => {
        fileInput.value = '';
        filePreview.classList.add('hidden');
    });

    // Sync hero input with generator
    const heroPrompt = document.getElementById('heroPrompt');
    const scrollToGenBtn = document.getElementById('scrollToGenBtn');

    scrollToGenBtn.addEventListener('click', () => {
        if (heroPrompt.value) {
            promptInput.value = heroPrompt.value;
        }
        document.getElementById('generatorSection').scrollIntoView({ behavior: 'smooth' });
        promptInput.focus();
    });

    // Mock API Generation
    generateBtn.addEventListener('click', async () => {
      const prompt = promptInput.value;
      const style = document.getElementById('style').value;
      const duration = document.getElementById('duration').value;
      const resolution = document.getElementById('resolution').value;

      if(!prompt) {
          // Highlight textarea if empty
          promptInput.classList.add('ring-2', 'ring-red-500/50', 'border-red-500');
          setTimeout(() => promptInput.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500'), 1500);
          return;
      }

      // UI Loading State
      generateBtn.disabled = true;
      generateBtn.classList.replace('bg-white', 'bg-slate-800');
      generateBtn.classList.replace('text-slate-950', 'text-slate-400');
      generateBtn.classList.replace('hover:bg-slate-200', 'hover:bg-slate-800');
      btnText.classList.add('hidden');
      btnLoader.classList.remove('hidden');

      // Simulate API Call delay (similar to original async function)
      try {
          await new Promise(resolve => setTimeout(resolve, 2500)); 
          
          if(emptyState) {
              emptyState.remove();
          }

          // Generate UI Card
          const card = document.createElement('div');
          card.className = 'bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:border-slate-700 transition-colors group flex flex-col';
          
          // Badge text based on settings
          const styleName = style.charAt(0).toUpperCase() + style.slice(1);
          
          card.innerHTML = `
            <div class="relative aspect-video bg-slate-950 border-b border-slate-800">
                <video src="https://www.w3schools.com/html/mov_bbb.mp4" class="w-full h-full object-cover" loop muted playsinline></video>
                <div class="absolute top-3 left-3 flex gap-2">
                    <span class="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-medium text-white uppercase tracking-wider border border-white/10">${styleName}</span>
                    <span class="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-medium text-white uppercase tracking-wider border border-white/10">${duration}s</span>
                </div>
                <button class="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg">
                        <iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
                    </div>
                </button>
            </div>
            <div class="p-4 flex flex-col flex-grow">
              <p class="text-sm text-slate-300 line-clamp-2 mb-4 flex-grow">${prompt}</p>
              <div class="flex items-center justify-between pt-4 border-t border-slate-800/60 mt-auto">
                  <div class="text-xs text-slate-500 font-medium">${resolution}</div>
                  <div class="flex gap-2">
                    <button class="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors" title="Download">
                        <iconify-icon icon="solar:download-minimalistic-linear" width="18"></iconify-icon>
                    </button>
                    <button class="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors" title="Share">
                        <iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
                    </button>
                    <button class="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors" title="More">
                        <iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
                    </button>
                  </div>
              </div>
            </div>
          `;
          
          // Insert at top of grid
          videoGrid.insertBefore(card, videoGrid.firstChild);

          // Simple play on hover logic for the new card
          const videoEl = card.querySelector('video');
          card.addEventListener('mouseenter', () => videoEl.play().catch(e=>console.log(e)));
          card.addEventListener('mouseleave', () => { videoEl.pause(); videoEl.currentTime = 0; });

      } catch (error) {
          console.error("Generation failed", error);
          alert("Generation failed. Please try again.");
      } finally {
          // Reset UI
          generateBtn.disabled = false;
          generateBtn.classList.replace('bg-slate-800', 'bg-white');
          generateBtn.classList.replace('text-slate-400', 'text-slate-950');
          generateBtn.classList.replace('hover:bg-slate-800', 'hover:bg-slate-200');
          btnText.classList.remove('hidden');
          btnLoader.classList.add('hidden');
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-lg font-medium tracking-tighter text-white flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:play-stream-linear" strokeWidth="1.5" width="24"></iconify-icon>
        MUZAS
      </div>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium">
<li className="hover:text-white transition-colors cursor-pointer text-white">Dashboard</li>
<li className="hover:text-white transition-colors cursor-pointer">My Videos</li>
<li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
</ul>
<div className="flex items-center gap-4">
<button className="text-sm font-medium hover:text-white transition-colors hidden sm:block">Log in</button>
<button className="bg-white text-slate-950 text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">Sign up</button>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:sparkles-linear" strokeWidth="1.5"></iconify-icon>
        New: Runway Gen-2 Integration
      </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
        Create AI Videos from <br className="hidden sm:block"/> Text or Images
      </h1>
<p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl">
        Turn your ideas into stunning AI videos in seconds. Generate cinematic footage, animations, and realistic renders with simple prompts.
      </p>
<div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-1.5 flex flex-col sm:flex-row items-center focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:border-indigo-500/50 transition-all shadow-sm">
<div className="flex-grow flex items-center w-full px-3 py-2 sm:py-0">
<iconify-icon className="text-slate-500 mr-2" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-slate-500 h-10" id="heroPrompt" placeholder="Describe the video you want to generate..." type="text"/>
</div>
<button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap flex items-center justify-center gap-2" id="scrollToGenBtn">
          Start Creating
          <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-12" id="generatorSection">
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-white">Generation Settings</h2>
<iconify-icon className="text-slate-500" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="space-y-6">

<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Source Image (Optional)</label>
<label className="group relative flex flex-col items-center justify-center w-full h-32 border border-slate-700 border-dashed rounded-xl cursor-pointer bg-slate-950/50 hover:bg-slate-800/50 hover:border-slate-600 transition-all" htmlFor="imageUpload">
<div className="flex flex-col items-center justify-center pt-5 pb-6">
<div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm border border-slate-800">
<iconify-icon className="text-slate-400 group-hover:text-white transition-colors" icon="solar:gallery-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="mb-1 text-sm text-slate-400 group-hover:text-slate-300"><span className="font-medium text-indigo-400 group-hover:text-indigo-300">Click to upload</span> or drag and drop</p>
<p className="text-xs text-slate-500">PNG, JPG or WEBP (MAX. 10MB)</p>
</div>
<input accept="image/*" id="imageUpload" type="file"/>
</label>
<div className="hidden mt-3 flex items-center gap-3 p-2 border border-slate-800 bg-slate-950 rounded-lg" id="filePreviewContainer">
<iconify-icon className="text-indigo-400 ml-2" icon="solar:file-image-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-300 truncate flex-grow" id="fileName">filename.jpg</span>
<button className="p-1 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors" id="removeFileBtn">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<label className="block text-sm font-medium text-slate-300" htmlFor="prompt">Video Prompt</label>
<button className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:magic-stick-linear" width="14"></iconify-icon> Enhance
              </button>
</div>
<textarea className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" id="prompt" placeholder="A cinematic tracking shot of a futuristic city at sunset, neon lights reflecting on wet streets..." rows="3"></textarea>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="style">Style</label>
<div className="relative">
<select className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all cursor-pointer" id="style">
<option value="cinematic">Cinematic</option>
<option value="anime">Anime</option>
<option value="cartoon">Cartoon</option>
<option value="3d">3D Animation</option>
<option value="realistic">Realistic</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="duration">Duration</label>
<div className="relative">
<select className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all cursor-pointer" id="duration">
<option value="5">5 Seconds</option>
<option value="10">10 Seconds</option>
<option value="15">15 Seconds</option>
<option value="30">30 Seconds</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="resolution">Resolution</label>
<div className="relative">
<select className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all cursor-pointer" id="resolution">
<option value="720p">720p HD</option>
<option value="1080p">1080p FHD</option>
<option value="4k">4K Ultra HD</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
<span className="text-sm text-slate-400">Advanced settings</span>
<button aria-pressed="false" className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-slate-900">
<span className="inline-block h-3 w-3 translate-x-1 rounded-full bg-slate-400 transition transform"></span>
</button>
</div>
<button className="w-full bg-white hover:bg-slate-200 text-slate-950 font-medium py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group relative overflow-hidden" id="generateBtn">
<span className="flex items-center gap-2" id="btnText">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
              Generate Video
            </span>
<iconify-icon className="hidden animate-spin" icon="solar:refresh-circle-linear" id="btnLoader" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12" id="resultsSection">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-white">Your Generations</h2>
<div className="flex gap-2">
<button className="p-2 border border-slate-800 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-slate-400">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="18"></iconify-icon>
</button>
<button className="p-2 border border-slate-800 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-slate-400">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="videoGrid">

<div className="col-span-full py-20 flex flex-col items-center justify-center border border-slate-800 border-dashed rounded-2xl bg-slate-900/30" id="emptyState">
<div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 text-slate-500">
<iconify-icon icon="solar:video-frame-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-slate-400 text-sm font-medium">No videos generated yet.</p>
<p className="text-slate-500 text-xs mt-1">Fill out the form above to get started.</p>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-800/60 bg-slate-950 py-8 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm tracking-tighter font-medium text-slate-500">MUZAS © 2023</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">API docs</a>
</div>
</div>
</footer>


    </>
  );
}
