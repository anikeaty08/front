import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        let currentStepId = null;
        let completedSteps = [1];
        let currentTab = 'context';
        let sliderValue = 50;

        // Content Data
        const stepsData = {
            2: {
                title: "Identify Forces",
                context: `
                    <div class="space-y-4">
                        <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/5">
                            <h4 class="text-xs font-semibold text-white mb-2">The Objective</h4>
                            <p class="text-[11px] text-neutral-400 leading-relaxed">Before moving forward, we must calculate the drag. Inertia is not just a lack of movement; it is an active force holding you in place.</p>
                        </div>
                        <div class="flex items-center gap-3 p-3 rounded-xl border border-white/5">
                             <iconify-icon icon="solar:info-circle-linear" class="text-red-500" width="18"></iconify-icon>
                             <p class="text-[10px] text-neutral-300">You cannot overcome a force you haven't named.</p>
                        </div>
                    </div>
                `,
                theory: `
                    <div class="space-y-4">
                         <h4 class="text-xs font-medium text-white">Newton's Third Law Applied</h4>
                         <p class="text-[11px] text-neutral-400 leading-relaxed">For every desire to change, there is an equal and opposite commitment to remain the same. This is your "Immunity to Change".</p>
                         <div class="h-32 w-full rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 bg-noise opacity-20"></div>
                            <div class="flex items-center gap-4 opacity-50">
                                <div class="w-8 h-8 rounded border border-white/20 flex items-center justify-center">→</div>
                                <div class="w-px h-12 bg-red-500/50"></div>
                                <div class="w-8 h-8 rounded border border-white/20 flex items-center justify-center">←</div>
                            </div>
                         </div>
                    </div>
                `,
                action: `
                    <div class="space-y-6">
                        <div>
                            <div class="flex justify-between items-end mb-4">
                                <label class="text-xs font-medium text-white">Friction Audit</label>
                                <span class="text-[10px] font-mono text-red-400" id="slider-val">50% Resistance</span>
                            </div>
                            <div class="p-4 bg-neutral-900 rounded-xl border border-white/5 relative">
                                <input type="range" min="0" max="100" value="50" oninput="updateSlider(this.value)" class="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white">
                                <div class="flex justify-between mt-3 text-[9px] text-neutral-500 uppercase tracking-wider">
                                    <span>Effortless</span>
                                    <span>Impossible</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                            <p class="text-[10px] text-red-200">Adjust the slider to match your internal resistance level to unlock completion.</p>
                        </div>
                    </div>
                `
            },
            3: {
                title: "Generate Options",
                context: `
                    <div class="space-y-4">
                        <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/5">
                            <h4 class="text-xs font-semibold text-white mb-2">The Pivot Point</h4>
                            <p class="text-[11px] text-neutral-400 leading-relaxed">Diagnosis is complete. Friction is mapped. Now we diverge. What are the possible trajectories?</p>
                        </div>
                    </div>
                `,
                theory: `
                    <div class="space-y-4">
                         <h4 class="text-xs font-medium text-white">Optionality</h4>
                         <p class="text-[11px] text-neutral-400 leading-relaxed">The system fails when it perceives only one path. We must artificially generate competition between multiple good ideas.</p>
                    </div>
                `,
                action: `
                    <div class="space-y-3">
                        <label class="text-xs font-medium text-white block mb-1">Select Strategy</label>
                        
                        <label class="block cursor-pointer group">
                            <input type="radio" name="strategy" class="hidden checkbox-custom" onchange="enableComplete()">
                            <div class="p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-all flex items-center gap-3">
                                <iconify-icon icon="solar:bolt-linear" class="text-neutral-500" width="18"></iconify-icon>
                                <div>
                                    <div class="text-[11px] text-white font-medium">Brute Force</div>
                                    <div class="text-[9px] text-neutral-500">High energy, immediate execution.</div>
                                </div>
                            </div>
                        </label>

                        <label class="block cursor-pointer group">
                            <input type="radio" name="strategy" class="hidden checkbox-custom" onchange="enableComplete()">
                            <div class="p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-all flex items-center gap-3">
                                <iconify-icon icon="solar:tuning-linear" class="text-neutral-500" width="18"></iconify-icon>
                                <div>
                                    <div class="text-[11px] text-white font-medium">Leverage</div>
                                    <div class="text-[9px] text-neutral-500">Remove friction, low energy input.</div>
                                </div>
                            </div>
                        </label>
                    </div>
                `
            }
        };

        // Functions
        function openStep(id) {
            currentStepId = id;
            const data = stepsData[id];
            
            // Set Headers
            document.getElementById('detail-title').innerText = data.title;
            
            // Show View
            document.getElementById('view-dashboard').classList.add('hidden');
            document.getElementById('view-detail').classList.remove('hidden');
            document.getElementById('main-header').classList.add('-translate-y-full'); // Hide main header
            
            // Reset Tab
            switchTab('context');
        }

        function closeStep() {
            document.getElementById('view-detail').classList.add('hidden');
            document.getElementById('view-dashboard').classList.remove('hidden');
            document.getElementById('view-dashboard').classList.add('fade-in');
            document.getElementById('main-header').classList.remove('-translate-y-full');
            
            // Reset button
            document.getElementById('btn-complete').classList.add('translate-y-20', 'opacity-0');
        }

        function switchTab(tabName) {
            currentTab = tabName;
            const contentDiv = document.getElementById('detail-content');
            
            // Update Tab Styles
            ['context', 'theory', 'action'].forEach(t => {
                const btn = document.getElementById(`tab-${t}`);
                if (t === tabName) {
                    btn.className = "flex-1 py-1.5 text-[10px] font-medium rounded text-black bg-white shadow-sm transition-all";
                } else {
                    btn.className = "flex-1 py-1.5 text-[10px] font-medium rounded text-neutral-500 hover:text-white transition-all";
                }
            });

            // Inject Content
            contentDiv.innerHTML = stepsData[currentStepId][tabName];
            contentDiv.classList.remove('fade-in');
            void contentDiv.offsetWidth; // trigger reflow
            contentDiv.classList.add('fade-in');

            // Logic for showing complete button
            if (tabName === 'action') {
                if(currentStepId === 2) {
                     // Step 2 shows button immediately
                     setTimeout(() => {
                        document.getElementById('btn-complete').classList.remove('translate-y-20', 'opacity-0');
                     }, 300);
                } else {
                    // Step 3 requires selection, hide initially
                    document.getElementById('btn-complete').classList.add('translate-y-20', 'opacity-0');
                }
            } else {
                document.getElementById('btn-complete').classList.add('translate-y-20', 'opacity-0');
            }
        }

        function updateSlider(val) {
            document.getElementById('slider-val').innerText = `${val}% Resistance`;
        }

        function enableComplete() {
            document.getElementById('btn-complete').classList.remove('translate-y-20', 'opacity-0');
        }

        function completeCurrentStep() {
            // Add to completed
            if (!completedSteps.includes(currentStepId)) {
                completedSteps.push(currentStepId);
            }

            // Close View
            closeStep();

            // Update UI State in Dashboard
            if (currentStepId === 2) {
                // Transform Step 2 to Checked
                const marker = document.getElementById('marker-2');
                marker.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>';
                marker.className = "w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center z-10 relative text-neutral-400";
                
                document.getElementById('step-card-2').querySelector('.glass-panel').classList.remove('active-glow');
                document.getElementById('step-card-2').querySelector('h3').classList.add('line-through', 'decoration-neutral-700', 'text-neutral-400');
                
                // Unlock Step 3
                const step3 = document.getElementById('step-card-3');
                step3.classList.remove('pointer-events-none', 'opacity-40');
                step3.classList.add('cursor-pointer');
                
                const marker3 = document.getElementById('marker-3');
                marker3.className = "w-6 h-6 rounded-full bg-white border border-white flex items-center justify-center z-10 relative text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all";
                marker3.innerHTML = '<span class="text-[10px] font-bold">3</span>';
                step3.querySelector('h3').classList.remove('text-neutral-500');
                step3.querySelector('h3').classList.add('text-white');
                step3.querySelector('p').innerText = "Action Required: Select Strategy";
                step3.querySelector('p').classList.add('text-red-400');

                // Update Progress
                document.getElementById('global-progress').style.width = '66%';
                document.getElementById('progress-text').innerText = '66%';

            } else if (currentStepId === 3) {
                // Final Completion
                 const marker3 = document.getElementById('marker-3');
                marker3.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>';
                marker3.className = "w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center z-10 relative text-neutral-400";
                
                 // Update Progress
                document.getElementById('global-progress').style.width = '100%';
                document.getElementById('progress-text').innerText = '100%';
                document.getElementById('progress-text').classList.add('text-white', 'font-bold');

                // Trigger Finish Screen
                setTimeout(() => {
                    document.getElementById('view-completion').classList.remove('hidden');
                }, 800);
            }
        }

        function resetFlow() {
            location.reload();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[400px] h-[860px] bg-[#050505] rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-[#1a1a1a] ring-1 ring-white/10 flex flex-col transition-all duration-500">

<div className="absolute inset-0 bg-noise opacity-40 pointer-events-none z-0"></div>
<div className="absolute top-[-10%] right-[-30%] w-[80%] h-[40%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="absolute bottom-[-10%] left-[-20%] w-[80%] h-[40%] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

<div className="absolute top-0 w-full px-8 pt-5 pb-2 z-50 flex justify-between items-center text-white mix-blend-difference">
<span className="text-xs font-semibold tracking-wide" id="clock">10:42</span>
<div className="flex gap-2 items-center">
<iconify-icon icon="solar:signal-stream-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="18"></iconify-icon>
</div>
</div>

<div className="px-6 pt-16 pb-4 sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="main-header">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-medium tracking-widest uppercase text-red-500 transition-all" id="phase-label">Phase 1: Diagnosis</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors" onclick="resetFlow()">
<iconify-icon className="text-neutral-500 hover:text-white" icon="solar:restart-linear" width="18"></iconify-icon>
</button>
</div>
<h1 className="text-xl font-medium text-white tracking-tight transition-all" id="main-title">The Upgrade Process</h1>

<div className="flex items-center gap-3 mt-3">
<div className="h-1 flex-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-white transition-all duration-700 ease-out" id="global-progress"></div>
</div>
<span className="text-[10px] text-neutral-500 tabular-nums" id="progress-text">33%</span>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar relative z-10 flex flex-col pb-24 fade-in" id="view-dashboard">
<div className="px-6 relative flex-1 pt-6">

<div className="absolute left-[38px] top-0 bottom-0 w-[1px] timeline-line z-0"></div>

<div className="relative z-10 mb-8 opacity-50 hover:opacity-100 transition-opacity cursor-default group">
<div className="flex items-start gap-4">
<div className="relative shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center z-10 relative text-neutral-400">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-sm font-medium text-neutral-400 line-through decoration-neutral-700">Establish Baseline</h3>
<div className="mt-2 text-[10px] text-neutral-500">Completed 2h ago</div>
</div>
</div>
</div>

<div className="relative z-10 mb-8 cursor-pointer group" id="step-card-2" onclick="openStep(2)">
<div className="flex items-start gap-4">
<div className="relative shrink-0 mt-1">
<div className="absolute -inset-2 bg-red-500/10 rounded-full blur-md animate-pulse"></div>
<div className="w-6 h-6 rounded-full bg-white border border-white flex items-center justify-center z-10 relative text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all" id="marker-2">
<span className="text-[10px] font-bold">2</span>
</div>
</div>
<div className="flex-1 w-full glass-panel p-4 rounded-xl active-glow group-hover:bg-neutral-900/60 transition-all border-neutral-800 group-hover:border-neutral-700">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-semibold text-white">Identify Forces</h3>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">Map the opposing vectors. What stops the motion?</p>
<div className="mt-3 flex gap-2">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Action Required</span>
</div>
</div>
</div>
</div>

<div className="relative z-10 pointer-events-none opacity-40 transition-all duration-500" id="step-card-3" onclick="if(!this.classList.contains('pointer-events-none')) openStep(3)">
<div className="flex items-start gap-4">
<div className="relative shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center z-10 relative text-neutral-600 transition-colors" id="marker-3">
<iconify-icon icon="solar:lock-keyhole-linear" width="12"></iconify-icon>
</div>
</div>
<div className="pt-1 w-full">
<h3 className="text-sm font-medium text-neutral-500 transition-colors group-hover:text-white">Generate Options</h3>
<p className="text-xs text-neutral-600 mt-1">Locked until Phase 2 is complete.</p>
</div>
</div>
</div>

<div className="relative z-10 mt-8 pointer-events-none opacity-30" id="step-card-4">
<div className="flex items-start gap-4">
<div className="relative shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center z-10 relative text-neutral-700">
<span className="text-[10px] font-bold">4</span>
</div>
</div>
<div className="pt-1 w-full">
<h3 className="text-sm font-medium text-neutral-600">Commitment</h3>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 overflow-y-auto no-scrollbar relative z-20 flex-col bg-[#050505] absolute inset-x-0 bottom-0 top-[140px] rounded-t-[2rem] shadow-2xl border-t border-white/10 slide-up" id="view-detail">

<div className="px-6 py-4 border-b border-white/5 flex items-center gap-3 bg-[#050505]/95 backdrop-blur sticky top-0 z-30">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-900 border border-white/5 hover:bg-neutral-800 transition-colors" onclick="closeStep()">
<iconify-icon className="text-white" icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<div>
<span className="text-[9px] text-red-500 uppercase tracking-widest font-medium block">Current Step</span>
<h2 className="text-sm font-semibold text-white" id="detail-title">Identify Forces</h2>
</div>
</div>
<div className="p-6 pb-32">

<div className="flex p-1 bg-neutral-900 rounded-lg mb-6 gap-1">
<button className="flex-1 py-1.5 text-[10px] font-medium rounded text-black bg-white shadow-sm transition-all" id="tab-context" onclick="switchTab('context')">Context</button>
<button className="flex-1 py-1.5 text-[10px] font-medium rounded text-neutral-500 hover:text-white transition-all" id="tab-theory" onclick="switchTab('theory')">Theory</button>
<button className="flex-1 py-1.5 text-[10px] font-medium rounded text-neutral-500 hover:text-white transition-all" id="tab-action" onclick="switchTab('action')">Action</button>
</div>

<div className="fade-in min-h-[300px]" id="detail-content">

</div>

<div className="fixed bottom-24 left-0 right-0 px-10 pointer-events-none">
<button className="w-full pointer-events-auto py-3.5 bg-white text-black rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] translate-y-20 opacity-0 transition-all duration-500" id="btn-complete" onclick="completeCurrentStep()">
<span>Mark Complete</span>
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-8 hidden fade-in" id="view-completion">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
<iconify-icon className="text-black" icon="solar:flag-bold" width="32"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-white text-center mb-2 tracking-tight">System Upgraded</h2>
<p className="text-sm text-neutral-400 text-center mb-8 max-w-[200px]">The sequence is complete. New baseline established.</p>
<button className="px-6 py-2 bg-neutral-800 border border-white/10 rounded-full text-xs text-white hover:bg-neutral-700 transition-colors" onclick="resetFlow()">
                Restart Sequence
            </button>
</div>

<div className="absolute bottom-6 left-6 right-6 z-50">
<div className="glass-nav rounded-2xl p-1.5 flex justify-between items-center shadow-2xl">
<button className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl group" onclick="closeStep()">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:widget-2-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-neutral-500 group-hover:text-white transition-colors">Dashboard</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl bg-neutral-800/80 border border-white/10 shadow-inner relative">
<div className="absolute top-1 right-4 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
<iconify-icon className="text-white" icon="solar:roadmap-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-white">Journey</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl group">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:notebook-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-neutral-500 group-hover:text-white transition-colors">Log</span>
</button>
</div>
</div>
</div>


    </>
  );
}
