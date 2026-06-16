import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function startBoost() {
            const input = document.getElementById('channelInput');
            const simulationArea = document.getElementById('simulationArea');
            const loadingState = document.getElementById('loadingState');
            const successState = document.getElementById('successState');
            const progressBar = document.getElementById('progressBar');
            const consoleLog = document.getElementById('consoleLog');
            
            if(input.value.length < 3) {
                input.classList.add('animate-pulse', 'border-red-500');
                setTimeout(() => input.classList.remove('animate-pulse', 'border-red-500'), 1000);
                return;
            }

            // Reset States
            simulationArea.classList.remove('hidden');
            loadingState.classList.remove('hidden');
            successState.classList.add('hidden');
            progressBar.style.width = '0%';
            
            // Disable button
            const btn = document.getElementById('boostBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="lucide:loader-2" class="animate-spin" width="14"></iconify-icon> Processing`;
            btn.disabled = true;

            // Logs array
            const logs = [
                "Analyzing channel metrics...",
                "Connecting to node us-east-1...",
                "Verifying audience compatibility...",
                "Allocating subscriber pool...",
                "Initiating transfer protocol..."
            ];

            let step = 0;
            const logInterval = setInterval(() => {
                if(step < logs.length) {
                    const p = document.createElement('p');
                    p.innerText = `> ${logs[step]}`;
                    consoleLog.appendChild(p);
                    // keep logs scrolled down
                    if(consoleLog.children.length > 2) consoleLog.removeChild(consoleLog.children[0]);
                    
                    const progress = ((step + 1) / logs.length) * 100;
                    progressBar.style.width = `${progress}%`;
                    step++;
                } else {
                    clearInterval(logInterval);
                    setTimeout(() => {
                        finishLoading();
                    }, 800);
                }
            }, 800);

            function finishLoading() {
                loadingState.classList.add('hidden');
                successState.classList.remove('hidden');
                successState.classList.add('animate-fade-in-up');
                
                // Animate Numbers
                const subCounter = document.getElementById('subCounter');
                const gainedCount = document.getElementById('gainedCount');
                let currentSubs = Math.floor(Math.random() * 5000) + 1000; // Random start
                let gained = 0;
                
                subCounter.innerText = currentSubs.toLocaleString();

                const growthInterval = setInterval(() => {
                    const increment = Math.floor(Math.random() * 5) + 1;
                    currentSubs += increment;
                    gained += increment;
                    subCounter.innerText = currentSubs.toLocaleString();
                    gainedCount.innerText = gained;
                    
                    // Flash effect
                    subCounter.classList.add('text-indigo-400');
                    setTimeout(() => subCounter.classList.remove('text-indigo-400'), 100);
                }, 1500);

                // Reset button after a while or leave it processing
                btn.innerHTML = `<iconify-icon icon="lucide:check" width="14"></iconify-icon> Active`;
                btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-500');
                btn.classList.remove('bg-white', 'text-black');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-rose-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="lucide:zap" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="tracking-tighter font-medium text-lg text-white group-hover:text-white/80 transition-colors">SUBFLOW</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 relative z-10 px-6">
<div className="text-center max-w-4xl mr-auto ml-auto">

<div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 mb-8 hover:border-white/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>System Operational v2.4</span>
</div>

<h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6 pb-2">
                Exponential growth for<br/>content creators.
            </h1>
<p className="animate-fade-in-up delay-200 leading-relaxed text-lg font-light text-neutral-400 max-w-xl mr-auto mb-12 ml-auto">
                Stop waiting for the algorithm. Input your channel identifier and leverage our proprietary distribution network to gain authentic subscribers instantly.
            </p>

<div className="animate-fade-in-up delay-300 w-full max-w-xl mx-auto relative group">

<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative flex items-center bg-[#0A0A0A] border border-white/10 rounded-xl p-1.5 shadow-2xl">
<div className="pl-4 pr-3 text-neutral-500">
<iconify-icon icon="lucide:youtube" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="flex-1 placeholder-neutral-600 focus:outline-none text-sm text-white tracking-tight font-mono bg-transparent pt-3 pb-3" id="channelInput" placeholder="Enter YouTube Channel ID (e.g. UC_x5...)" type="text"/>
<button className="bg-white text-black hover:bg-neutral-200 text-sm font-medium px-6 py-2.5 rounded-lg transition-all active:scale-95 flex items-center gap-2" id="boostBtn" onclick="startBoost()">
<span>Initiate</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</button>
</div>
<div className="mt-3 flex justify-between items-center px-2">
<div className="flex items-center gap-4 text-xs text-neutral-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:shield-check" width="12"></iconify-icon> Secure</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:users" width="12"></iconify-icon> Real Users</span>
</div>
<span className="text-xs text-neutral-600 font-mono">API: CONNECTED</span>
</div>
</div>

<div className="hidden mt-16 max-w-sm mx-auto animate-fade-in-up" id="simulationArea">
<div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden relative">

<div className="space-y-4" id="loadingState">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-mono text-neutral-400">CONNECTING TO NETWORK...</span>
<iconify-icon className="animate-spin text-neutral-400" icon="lucide:loader-2" width="14"></iconify-icon>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 loader-bar" id="progressBar"></div>
</div>
<div className="font-mono text-xs text-left text-neutral-500 space-y-1 h-16 overflow-hidden relative">
<div className="absolute bottom-0 w-full transition-all duration-300" id="consoleLog">

</div>
</div>
</div>

<div className="hidden text-center py-4" id="successState">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="2" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-1">Growth Active</h3>
<p className="text-sm text-neutral-400 mb-6">Subscribers are arriving.</p>
<div className="bg-black/40 rounded-xl p-4 border border-white/5">
<p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider font-semibold">Live Count</p>
<div className="text-3xl font-mono text-white tracking-tighter" id="subCounter">0</div>
<div className="text-xs text-emerald-500 mt-1 flex items-center justify-center gap-1">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
                                +<span id="gainedCount">0</span> in last min
                            </div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-t border-white/5 bg-neutral-900/20 py-24 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Precision Targeting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Our AI analyzes your content niche to find viewers who are genuinely interested in your videos.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Organic Velocity</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Growth mimics natural viral patterns to ensure account safety and high engagement metrics.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        No passwords required. We only use your public channel ID to deliver growth securely.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
<span className="text-sm font-medium tracking-tight">SUBFLOW © 2023</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:discord" width="18"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
