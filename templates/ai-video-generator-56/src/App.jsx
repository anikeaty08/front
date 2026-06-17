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



        document.addEventListener('DOMContentLoaded', () => {
            const promptInput = document.getElementById('prompt-input');
            const generateBtn = document.getElementById('generate-btn');
            const btnIcon = document.getElementById('btn-icon');
            const btnText = document.getElementById('btn-text');
            const errorMessage = document.getElementById('error-message');
            const generatorContainer = document.getElementById('generator-container');
            
            const defaultState = document.getElementById('default-state');
            const loadingState = document.getElementById('loading-state');
            const resultState = document.getElementById('result-state');
            const videoWrapper = document.getElementById('video-wrapper');
            
            const progressBarFill = document.getElementById('progress-bar-fill');
            const progressText = document.getElementById('progress-text');
            const loadingStatus = document.getElementById('loading-status');
            
            const generatedVideo = document.getElementById('generated-video');
            const playPauseBtn = document.getElementById('play-pause-btn');

            const statusMessages = [
                "Analyzing prompt semantics...",
                "Configuring scene parameters...",
                "Generating keyframes...",
                "Applying cinematic lighting...",
                "Rendering final sequence..."
            ];

            generateBtn.addEventListener('click', () => {
                const promptVal = promptInput.value.trim();
                
                // Form validation / Error shake
                if (!promptVal) {
                    generatorContainer.classList.add('shake-animation');
                    errorMessage.classList.remove('opacity-0');
                    setTimeout(() => {
                        generatorContainer.classList.remove('shake-animation');
                    }, 300);
                    return;
                }
                
                errorMessage.classList.add('opacity-0');
                
                // Scroll to video view
                videoWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Set UI to loading state
                generateBtn.disabled = true;
                btnIcon.setAttribute('icon', 'solar:spinner-linear');
                btnIcon.classList.add('animate-spin');
                btnText.textContent = 'Generating...';

                // Switch preview panel to loading
                defaultState.classList.add('hidden');
                resultState.classList.add('hidden');
                loadingState.classList.remove('hidden');

                // Simulate progress
                let progress = 0;
                let statusIndex = 0;
                
                const interval = setInterval(() => {
                    // Random progress jumps
                    progress += Math.random() * 8;
                    if (progress >= 100) progress = 100;

                    progressBarFill.style.width = `${progress}%`;
                    progressText.textContent = `${Math.floor(progress)}%`;

                    // Update fake status messages
                    if (progress > (statusIndex + 1) * 20 && statusIndex < statusMessages.length - 1) {
                        statusIndex++;
                        loadingStatus.textContent = statusMessages[statusIndex];
                    }

                    if (progress >= 100) {
                        clearInterval(interval);
                        
                        // Finish process
                        setTimeout(() => {
                            loadingState.classList.add('hidden');
                            resultState.classList.remove('hidden');
                            
                            // Reset Button
                            generateBtn.disabled = false;
                            btnIcon.setAttribute('icon', 'solar:clapperboard-play-linear');
                            btnIcon.classList.remove('animate-spin');
                            btnText.textContent = 'Generate Again';
                            
                            // Play mock video
                            generatedVideo.play();
                        }, 500);
                    }
                }, 400);
            });

            // Video Play/Pause controls
            playPauseBtn.addEventListener('click', () => {
                if (generatedVideo.paused) {
                    generatedVideo.play();
                    playPauseBtn.innerHTML = '<iconify-icon icon="solar:pause-circle-linear" width="28" height="28" style="stroke-width: 1.5;"></iconify-icon>';
                } else {
                    generatedVideo.pause();
                    playPauseBtn.innerHTML = '<iconify-icon icon="solar:play-circle-linear" width="28" height="28" style="stroke-width: 1.5;"></iconify-icon>';
                }
            });
            
            // Clear error on input
            promptInput.addEventListener('input', () => {
                if (promptInput.value.trim()) {
                    errorMessage.classList.add('opacity-0');
                }
            });
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
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-14">
<a className="text-lg font-medium tracking-tighter text-white" href="#">TXTVID</a>
<div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Gallery</a>
<a className="hover:text-white transition-colors" href="#">API</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Login</button>
<button className="text-sm font-medium bg-white text-black px-3 py-1.5 rounded-md hover:bg-neutral-200 transition-colors shadow-sm">Sign Up</button>
</div>
</div>
</nav>

<main className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden flex-grow">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                Free forever, no credit card required
            </div>
<h1 className="text-4xl sm:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 max-w-3xl mx-auto leading-tight">
                Generate cinematic videos <br className="hidden sm:block"/> from text in seconds.
            </h1>
<p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
                Describe your scene, set the mood, and watch our AI create stunning, high-quality video clips instantly. Bring your ideas to life without complex software.
            </p>

<div className="max-w-3xl mx-auto text-left relative group" id="generator-container">
<div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl flex flex-col focus-within:border-white/30 transition-colors duration-300">
<div className="p-1 relative">
<textarea className="w-full bg-transparent border-none text-white text-base p-4 resize-none outline-none placeholder:text-neutral-600 min-h-[140px] leading-relaxed transition-all duration-300" id="prompt-input" placeholder="A sweeping drone shot over a glowing cyberpunk city at night, rain falling, neon signs reflecting in puddles, cinematic lighting, highly detailed..."></textarea>
<div className="absolute bottom-2 left-4 text-xs text-red-400 font-medium opacity-0 transition-opacity duration-200" id="error-message">
                            Please describe your scene first.
                        </div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 border-t border-white/5 bg-[#0a0a0a]/50 rounded-b-2xl gap-4 sm:gap-0">
<div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/10 text-xs font-medium text-neutral-400 hover:text-white transition-colors whitespace-nowrap border border-transparent hover:border-white/10">
<iconify-icon height="16" icon="solar:monitor-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                16:9
                                <iconify-icon className="opacity-50" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
<div className="w-px h-4 bg-white/10"></div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/10 text-xs font-medium text-neutral-400 hover:text-white transition-colors whitespace-nowrap border border-transparent hover:border-white/10">
<iconify-icon height="16" icon="solar:magic-stick-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                Cinematic
                                <iconify-icon className="opacity-50" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
<div className="w-px h-4 bg-white/10"></div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/10 text-xs font-medium text-neutral-400 hover:text-white transition-colors whitespace-nowrap border border-transparent hover:border-white/10">
<iconify-icon height="16" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                4s Duration
                                <iconify-icon className="opacity-50" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.05)] disabled:opacity-70 disabled:cursor-not-allowed" id="generate-btn">
<iconify-icon height="18" icon="solar:clapperboard-play-linear" id="btn-icon" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span id="btn-text">Generate</span>
</button>
</div>
</div>
</div>
</div>
</main>

<section className="max-w-5xl mx-auto px-6 pb-24 w-full">
<div className="aspect-video w-full rounded-2xl bg-[#050505] border border-white/10 shadow-2xl relative overflow-hidden group flex items-center justify-center transition-all duration-500" id="video-wrapper">

<div className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer" id="default-state">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="relative z-10 w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300 shadow-xl">
<iconify-icon className="ml-1 opacity-80 group-hover:opacity-100" height="24" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="absolute top-4 left-4 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded border border-white/5 text-xs text-neutral-300 font-medium flex items-center gap-1.5 tracking-tight">
<iconify-icon height="14" icon="solar:video-frame-linear" width="14"></iconify-icon>
                    Sample Generation
                </div>
</div>

<div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a] z-20 hidden" id="loading-state">
<div className="relative w-16 h-16 flex items-center justify-center mb-6">
<div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
<div className="absolute inset-0 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
<iconify-icon className="text-white opacity-80" height="20" icon="solar:magic-stick-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-white mb-2">Synthesizing Video...</h3>
<p className="text-xs text-neutral-500 mb-8 font-mono" id="loading-status">Initializing render pipeline</p>
<div className="w-64 max-w-[80%]">
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white w-0 rounded-full transition-all duration-300 ease-out" id="progress-bar-fill"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 font-medium font-mono tracking-tight mt-2 uppercase">
<span>Progress</span>
<span id="progress-text">0%</span>
</div>
</div>
</div>

<div className="absolute inset-0 w-full h-full z-30 bg-black hidden" id="result-state">

<video className="w-full h-full object-cover" id="generated-video" loop="" muted="" playsinline="">
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4"/>
</video>

<div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center justify-between">
<button className="text-white hover:text-neutral-300 transition-colors" id="play-pause-btn">
<iconify-icon height="28" icon="solar:pause-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded text-xs font-medium text-white transition-colors">
<iconify-icon height="14" icon="solar:download-linear" width="14"></iconify-icon>
                                Download
                            </button>
</div>
</div>
</div>
<div className="absolute top-4 left-4 px-2.5 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20 text-xs text-white font-medium flex items-center gap-1.5 tracking-tight shadow-lg">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                    Generated Successfully
                </div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#0a0a0a] py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">Professional output, zero friction.</h2>
<p className="text-base text-neutral-400 max-w-xl">Everything you need to create compelling visual narratives, built entirely for speed and quality without subscriptions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 shadow-sm">
<iconify-icon height="20" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Instant Rendering</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Our optimized compute network generates initial frames in seconds, letting you iterate on prompts rapidly.</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 shadow-sm">
<iconify-icon height="20" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Granular Control</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Direct the camera movement, lighting, and aspect ratio. Build exactly what your project requires.</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 shadow-sm">
<iconify-icon height="20" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Completely Free</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Access our base models without cost. No hidden watermarks, no restrictive trial periods, just creativity.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-8 mt-auto bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tighter text-white text-sm">TXTVID</span>
<span>© 2024</span>
</div>
<div className="flex gap-6 font-medium">
<a className="hover:text-neutral-300 transition-colors" href="#">Documentation</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
