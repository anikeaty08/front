import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const urlInput = document.getElementById('urlInput');
        const processBtn = document.getElementById('processBtn');
        const processingState = document.getElementById('processingState');
        const controlsArea = document.getElementById('controlsArea');
        const videoTitle = document.getElementById('videoTitle');
        const videoChannel = document.getElementById('videoChannel');
        const downloadActionBtn = document.getElementById('downloadActionBtn');
        const progressArea = document.getElementById('progressArea');
        const progressBar = document.getElementById('progressBar');
        const progressPercent = document.getElementById('progressPercent');
        const progressText = document.getElementById('progressText');
        const thumbContainer = document.getElementById('thumbContainer');
        const videoThumb = document.getElementById('videoThumb');
        const skeleton = document.getElementById('skeleton');

        // Mock Data for simulation
        const mockVideoData = {
            title: "Building Advanced Interfaces with Tailwind CSS",
            channel: "Frontend Mastery",
            img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
        };

        processBtn.addEventListener('click', () => {
            if(!urlInput.value) {
                urlInput.focus();
                return;
            }

            // Reset UI
            processingState.classList.remove('hidden');
            controlsArea.classList.add('opacity-50', 'pointer-events-none');
            progressArea.classList.add('hidden');
            videoThumb.classList.add('hidden');
            skeleton.classList.remove('hidden');
            videoTitle.innerText = "Resolving stream...";
            videoChannel.innerText = "Handshaking";

            // Simulate Network Request
            setTimeout(() => {
                videoTitle.innerText = mockVideoData.title;
                videoChannel.innerText = mockVideoData.channel;
                
                // Show Thumbnail
                skeleton.classList.add('hidden');
                videoThumb.src = mockVideoData.img;
                videoThumb.classList.remove('hidden');
                
                // Enable Controls
                controlsArea.classList.remove('opacity-50', 'pointer-events-none');
            }, 1500);
        });

        downloadActionBtn.addEventListener('click', () => {
            controlsArea.classList.add('opacity-50', 'pointer-events-none');
            progressArea.classList.remove('hidden');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 5;
                if(progress > 100) progress = 100;
                
                progressBar.style.width = `${progress}%`;
                progressPercent.innerText = `${Math.floor(progress)}%`;

                if(progress < 30) progressText.innerText = "Demuxing stream...";
                else if(progress < 70) progressText.innerText = "Transcoding audio...";
                else if(progress < 99) progressText.innerText = "Assembling container...";
                else progressText.innerText = "Finalizing blob...";

                if(progress === 100) {
                    clearInterval(interval);
                    progressText.innerText = "Complete";
                    setTimeout(() => {
                        alert("Download Simulation Complete! (In a real app, file would save now)");
                        // Reset for demo
                        processingState.classList.add('hidden');
                        urlInput.value = '';
                    }, 500);
                }
            }, 100);
        });

        // Allow Enter key to trigger
        urlInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                processBtn.click();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-white/[0.03] blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-500/[0.02] blur-[100px]"></div>
</div>

<main className="relative z-10 w-full max-w-2xl px-6 py-12 flex flex-col gap-10">

<header className="flex flex-col items-center gap-4 text-center animate-enter" style={{animationDelay: '0ms'}}>
<div className="flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-900 border border-white/10 shadow-lg shadow-black/50">
<iconify-icon className="text-white" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h1 className="text-3xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 pb-1">Local Stream</h1>
<p className="text-sm text-zinc-500 font-normal">Browser-based video processor. No server required.</p>
</div>
</header>

<div className="w-full animate-enter" style={{animationDelay: '100ms'}}>
<div className="group relative flex items-center w-full">
<div className="absolute left-4 text-zinc-500 transition-colors group-focus-within:text-zinc-300">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<input autocomplete="off" className="w-full h-14 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-xl pl-12 pr-32 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all shadow-xl shadow-black/20" id="urlInput" placeholder="Paste YouTube link here..." type="text"/>
<div className="absolute right-2 flex items-center">
<button className="flex items-center gap-2 h-10 px-4 bg-zinc-100 hover:bg-white text-zinc-900 text-xs font-medium rounded-lg transition-all active:scale-95" id="processBtn">
<span>Analyze</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center justify-center gap-6 mt-6">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-8 h-4 rounded-full bg-zinc-800 border border-white/5 transition-colors group-hover:border-white/10">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-zinc-500 rounded-full transition-all peer-checked:bg-white peer-checked:translate-x-4"></div>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">WASM Engine</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-8 h-4 rounded-full bg-zinc-800 border border-white/5 transition-colors group-hover:border-white/10">
<input className="peer sr-only" type="checkbox"/>
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-zinc-500 rounded-full transition-all peer-checked:bg-white peer-checked:translate-x-4"></div>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Metadata Only</span>
</label>
</div>
</div>

<div className="hidden w-full bg-zinc-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm animate-enter" id="processingState">

<div className="flex items-start justify-between mb-6">
<div className="flex gap-4">

<div className="w-32 h-20 bg-zinc-800 rounded-lg overflow-hidden border border-white/5 relative" id="thumbContainer">
<img className="w-full h-full object-cover hidden opacity-80" id="videoThumb" src=""/>
<div className="w-full h-full flex items-center justify-center text-zinc-600" id="skeleton">
<iconify-icon icon="solar:videocamera-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-sm font-medium text-zinc-200 line-clamp-1 tracking-tight" id="videoTitle">Analyzing source...</h3>
<p className="text-xs text-zinc-500 mt-1" id="videoChannel">Please wait</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-white/5">HD</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-white/5">CC</span>
</div>
</div>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<hr className="border-t border-white/5 mb-6"/>

<div className="opacity-50 pointer-events-none transition-opacity duration-500" id="controlsArea">
<div className="grid grid-cols-2 gap-4 mb-6">

<div className="relative group">
<label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-2 font-semibold">Format</label>
<div className="relative flex items-center">
<select className="w-full h-10 bg-zinc-950 border border-white/10 rounded-lg px-3 text-xs text-zinc-300 appearance-none focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer">
<option>MP4 (Video)</option>
<option>MP3 (Audio)</option>
<option>WEBM</option>
</select>
<iconify-icon className="absolute right-3 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>

<div className="relative group">
<label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-2 font-semibold">Quality</label>
<div className="relative flex items-center">
<select className="w-full h-10 bg-zinc-950 border border-white/10 rounded-lg px-3 text-xs text-zinc-300 appearance-none focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer">
<option>1080p (High)</option>
<option>720p (Medium)</option>
<option>480p (Low)</option>
</select>
<iconify-icon className="absolute right-3 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<button className="w-full h-11 bg-white text-black text-xs font-semibold tracking-tight rounded-lg hover:bg-zinc-200 transition-all active:scale-[0.99] flex items-center justify-center gap-2" id="downloadActionBtn">
<iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
<span>Download to Disk</span>
</button>
</div>

<div className="hidden mt-6" id="progressArea">
<div className="flex justify-between text-[10px] text-zinc-400 mb-2">
<span id="progressText">Transcoding...</span>
<span id="progressPercent">0%</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-0 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,255,255,0.3)]" id="progressBar"></div>
</div>
</div>
</div>

<div className="w-full border-t border-white/5 pt-8 flex flex-col gap-4 animate-enter" style={{animationDelay: '200ms'}}>
<div className="flex items-center justify-between text-zinc-500">
<span className="text-xs font-medium tracking-tight">Recent Activity</span>
<button className="text-[10px] hover:text-zinc-300 transition-colors">Clear</button>
</div>
<div className="flex flex-col gap-2">

<div className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all cursor-default">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-white/5 text-zinc-600">
<iconify-icon icon="solar:file-check-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300">Design System Tutorial.mp4</span>
<span className="text-[10px] text-zinc-600">24MB • Local Blob</span>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 text-zinc-500 hover:text-white transition-all">
<iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
