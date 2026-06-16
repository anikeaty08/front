import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const scriptArea = document.getElementById('scriptArea');
        const wordCountDisplay = document.getElementById('wordCount');
        const autoToggle = document.getElementById('autoToggle');
        const durationSlider = document.getElementById('durationSlider');
        const durationDisplay = document.getElementById('durationDisplay');
        const sliderContainer = document.getElementById('sliderContainer');
        const previewDuration = document.getElementById('previewDuration');
        const sliderFill = document.getElementById('sliderFill');

        // Logic to calculate reading time (approx 150 words per minute)
        function calculateTime() {
            const text = scriptArea.value.trim();
            const words = text ? text.split(/\s+/).length : 0;
            wordCountDisplay.innerText = `${words} words`;

            if (autoToggle.checked) {
                // Average reading speed: 2.5 words per second
                const seconds = Math.ceil(words / 2.5);
                const displayTime = seconds < 60 ? `${seconds} sec` : `${Math.ceil(seconds/60)} min`;
                
                durationDisplay.innerHTML = `<iconify-icon icon="solar:magic-stick-3-bold" width="12"></iconify-icon> Auto (${displayTime})`;
                previewDuration.innerText = `Auto (${displayTime})`;
                
                // Update slider visual just for show
                let percentage = Math.min((seconds / 60) * 100, 100);
                if(seconds === 0) percentage = 0;
                sliderFill.style.width = percentage + '%';
            }
        }

        function toggleAutoTiming() {
            const isAuto = autoToggle.checked;
            
            if (isAuto) {
                sliderContainer.classList.add('opacity-50', 'pointer-events-none');
                sliderContainer.classList.remove('opacity-100');
                durationSlider.disabled = true;
                calculateTime(); // Recalculate based on script
            } else {
                sliderContainer.classList.remove('opacity-50', 'pointer-events-none');
                sliderContainer.classList.add('opacity-100');
                durationSlider.disabled = false;
                
                // Reset to slider value
                const val = durationSlider.value;
                durationDisplay.innerText = val + " sec";
                previewDuration.innerText = val + " sec";
                
                // Update fill
                const min = durationSlider.min;
                const max = durationSlider.max;
                const percentage = ((val - min) / (max - min)) * 100;
                sliderFill.style.width = percentage + '%';
            }
        }

        // Slider logic for manual mode
        durationSlider.addEventListener('input', function() {
            const val = this.value;
            const min = this.min;
            const max = this.max;
            const percentage = ((val - min) / (max - min)) * 100;
            
            sliderFill.style.width = percentage + '%';
            durationDisplay.innerText = val + " sec";
            previewDuration.innerText = val + " sec";
        });

        // Voice Selection UI Logic
        function selectVoice(element) {
            document.querySelectorAll('.voice-opt').forEach(opt => {
                opt.classList.remove('bg-indigo-50', 'border-indigo-200');
                opt.classList.add('border-slate-200');
                opt.querySelector('.absolute').classList.replace('text-indigo-600', 'text-transparent');
                
                const iconBox = opt.querySelector('.w-10');
                iconBox.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
                iconBox.classList.add('bg-slate-100', 'text-slate-500');
                iconBox.querySelector('iconify-icon').setAttribute('icon', 'solar:play-linear');
            });

            element.classList.remove('border-slate-200');
            element.classList.add('bg-indigo-50', 'border-indigo-200');
            element.querySelector('.absolute').classList.replace('text-transparent', 'text-indigo-600');
            
            const iconBox = element.querySelector('.w-10');
            iconBox.classList.remove('bg-slate-100', 'text-slate-500');
            iconBox.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
            iconBox.querySelector('iconify-icon').setAttribute('icon', 'solar:play-bold');
        }

        // Initialize
        calculateTime();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:clapperboard-edit-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">StoryFlow</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
                    Free Forever
                </span>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors">
                    Log in
                </button>
</div>
</div>
</nav>

<main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">

<div className="max-w-3xl mx-auto text-center mb-12">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4 leading-[1.1]">
                One-Click <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">Story Magic</span>
</h1>
<p className="text-lg text-slate-500 font-normal leading-relaxed max-w-xl mx-auto">
                Paste your script and let our AI handle the rest. Auto-timing, voice syncing, and visual generation in seconds.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 space-y-6">

<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
<div className="flex justify-between items-start mb-4">
<label className="text-sm font-medium text-slate-900 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:document-text-linear" width="18"></iconify-icon>
                            Story Script
                        </label>

<div className="flex bg-slate-100 p-1 rounded-lg">
<button className="px-3 py-1 rounded-md text-xs font-medium bg-white text-indigo-600 shadow-sm transition-all">English</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 transition-all">Hindi</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 transition-all">Gujarati</button>
</div>
</div>
<textarea className="w-full h-40 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none leading-relaxed" id="scriptArea" oninput="calculateTime()" placeholder="Paste your story script here... e.g. 'Once upon a time in a digital forest, a little pixel named Pixie decided to explore beyond the firewall...'"></textarea>
<div className="flex justify-between items-center mt-3 px-1">
<button className="hover:text-indigo-700 flex transition-colors group text-xs font-medium text-indigo-600 gap-x-1 gap-y-1 items-center">
<iconify-icon className="group-hover:animate-pulse" icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
                            Generate script with AI
                        </button>
<span className="text-xs text-slate-400" id="wordCount">0 words</span>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm transition-all duration-300" id="timingCard">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Duration</span>
</div>

<div className="flex items-center gap-3 bg-indigo-50/50 px-3 py-1.5 rounded-full border border-indigo-100/50">
<span className="text-xs font-medium text-indigo-900">Auto-timing from script</span>
<label className="inline-flex relative items-center cursor-pointer" htmlFor="autoToggle">
<input checked="" className="sr-only peer" id="autoToggle" onchange="toggleAutoTiming()" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
</div>
<div className="relative w-full h-10 flex flex-col justify-center transition-opacity duration-300 opacity-50 pointer-events-none" id="sliderContainer">
<input className="z-10 relative" disabled="" id="durationSlider" max="60" min="10" step="1" type="range" value="30"/>
<div className="absolute w-full h-1 bg-slate-100 rounded-full top-1/2 -translate-y-1/2 overflow-hidden">
<div className="h-full bg-indigo-500 w-1/2 transition-all duration-75" id="sliderFill" style={{width: '0%'}}></div>
</div>
</div>
<div className="flex justify-between items-center mt-2">
<div className="flex gap-4 text-xs font-medium text-slate-400" id="sliderLabels">
<span>10s</span>
<span>30s</span>
<span>60s</span>
</div>
<span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100 flex items-center gap-2" id="durationDisplay"><iconify-icon icon="solar:magic-stick-3-bold" width="12"></iconify-icon> Auto (0 sec)</span>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
<label className="text-sm font-medium text-slate-900 flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-500" icon="solar:microphone-3-linear" width="18"></iconify-icon>
                        Narrator
                    </label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="cursor-pointer flex items-center gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-200 transition-all voice-opt relative overflow-hidden" onclick="selectVoice(this)">
<div className="absolute right-0 top-0 p-2 text-indigo-600">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
<iconify-icon icon="solar:play-bold" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Storyteller Sam</p>
<p className="text-[11px] text-slate-500">Soothing &amp; Calm</p>
</div>
</div>
<div className="cursor-pointer flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all voice-opt relative" onclick="selectVoice(this)">
<div className="absolute right-0 top-0 p-2 text-transparent">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-700">Energetic Alex</p>
<p className="text-[11px] text-slate-500">Fun &amp; Fast</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="sticky top-24 space-y-6">

<div className="bg-slate-900 rounded-2xl p-1 shadow-2xl border border-slate-800">
<div className="bg-slate-800/50 rounded-xl p-5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/30 rounded-full blur-[60px] pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 text-slate-400">
<span className="text-xs font-medium uppercase tracking-wider">Preview</span>
<span className="bg-white/10 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">HD 1080p</span>
</div>
<div className="aspect-[16/9] bg-slate-900/80 rounded-lg border border-slate-700/50 flex flex-col items-center justify-center text-center p-6 relative group cursor-pointer">
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex shadow-white/20 group-hover:scale-110 transition-transform bg-white w-12 h-12 rounded-full mb-3 shadow-lg items-center justify-center">
<iconify-icon className="text-slate-900 ml-1" height="20" icon="solar:alt-arrow-down-outline" style={{color: 'rgb(15, 23, 42)'}} width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-300 font-medium">No video generated yet</p>
<p className="text-xs text-slate-500 mt-1">Enter a script to begin</p>
</div>
<div className="mt-6 space-y-3">
<div className="flex justify-between text-xs">
<span className="text-slate-400">Estimated Duration</span>
<span className="text-indigo-400 font-medium" id="previewDuration">Auto (0 sec)</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-400">Scenes to Generate</span>
<span className="text-slate-200 font-medium">Dynamic</span>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<button className="w-full relative group overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 hover:to-slate-700 text-white text-base font-semibold py-4 px-6 rounded-xl shadow-xl shadow-slate-900/20 transition-all transform hover:-translate-y-0.5 border border-slate-700">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
<div className="flex relative gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-bold-duotone" width="22"></iconify-icon>
<span>One-Click Generate</span>
</div>
</button>
<div className="flex items-center justify-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>100% Free - No watermark</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
