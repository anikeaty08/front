import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const collectionInput = document.getElementById('collection');
        const processingInput = document.getElementById('processing');
        const responseInput = document.getElementById('response');
        
        const inputs = [collectionInput, processingInput, responseInput];
        
        const outputEls = {
            collectionText: document.getElementById('collection-text'),
            processingText: document.getElementById('processing-text'),
            responseText: document.getElementById('response-text'),
            scoreDisplay: document.getElementById('score-display'),
            debtMeter: document.getElementById('debt-meter'),
            debtTitle: document.getElementById('debt-title'),
            debtDesc: document.getElementById('debt-desc'),
            quickWins: document.getElementById('quick-wins'),
            planContent: document.getElementById('plan-content')
        };

        const data = {
            collection: {
                low: "Reactive. You only know something is wrong when a support ticket is filed or a user cancels.",
                mid: "Inconsistent. You have heatmaps and basic analytics, but blind spots in user intent remain.",
                high: "Proactive. The system detects hesitation and friction in real-time before frustration sets in."
            },
            processing: {
                low: "Fragmented. You have metrics, but they don't explain *why* behavior is happening.",
                mid: "Correlative. You can link actions to outcomes, but causal emotional drivers are unclear.",
                high: "Predictive. The architecture maps user actions to behavioral models (e.g., anxiety vs. apathy)."
            },
            response: {
                low: "Manual. Interventions require human review, code deployments, or are non-existent.",
                mid: "Generic. The system sends automated nudges, but they are one-size-fits-all.",
                high: "Adaptive. The interface reconfigures itself based on user confidence and competence levels."
            }
        };

        const plans = {
            collection: [
                { stage: "Month 1", task: "Implement 'Frustration Signals' (rage clicks, rapid scrolling)." },
                { stage: "Month 2", task: "Deploy 'Micro-Feedback' questions at drop-off points." },
                { stage: "Month 3", task: "Map 'Silent Churn' pathways to identify hidden friction." }
            ],
            processing: [
                { stage: "Month 1", task: "Audit metrics: Separate 'Vanity' from 'Value' indicators." },
                { stage: "Month 2", task: "Create 'User State Models' (e.g., Learning vs. Executing)." },
                { stage: "Month 3", task: "Integrate behavioral tags into CRM/User profiles." }
            ],
            response: [
                { stage: "Month 1", task: "Automate 'Rescue Interventions' for 3 common errors." },
                { stage: "Month 2", task: "Design 'Celebration Loops' for small progress milestones." },
                { stage: "Month 3", task: "Build adaptive difficulty for onboarding flows." }
            ],
            balanced: [
                { stage: "Month 1", task: "Connect Collection to Response: Automate one feedback loop." },
                { stage: "Month 2", task: "Refine processing logic to reduce false positives." },
                { stage: "Month 3", task: "Scale the architecture to secondary user journeys." }
            ]
        };

        const quickWinsList = {
            collection: [
                "Add a 'Struggle Button' to help docs.",
                "Track 'Time on Task' outliers."
            ],
            processing: [
                "Map behavioral clusters manually.",
                "Define 'Success' beyond conversion."
            ],
            response: [
                "Add reassuring micro-copy to errors.",
                "Remove one decision step."
            ]
        };

        function getLevel(val) {
            if (val < 40) return 'low';
            if (val < 75) return 'mid';
            return 'high';
        }

        function updateAudit() {
            const cVal = parseInt(collectionInput.value);
            const pVal = parseInt(processingInput.value);
            const rVal = parseInt(responseInput.value);
            const avg = Math.round((cVal + pVal + rVal) / 3);

            // Update Descriptions
            outputEls.collectionText.innerText = data.collection[getLevel(cVal)];
            outputEls.processingText.innerText = data.processing[getLevel(pVal)];
            outputEls.responseText.innerText = data.response[getLevel(rVal)];

            // Update Score & Meter
            outputEls.scoreDisplay.innerText = avg;
            // Stroke dasharray 276. Offset goes from 276 (empty) to 0 (full).
            // Logic: 100 score = 0 offset. 0 score = 276 offset.
            const maxOffset = 276;
            const offset = maxOffset - ((avg / 100) * maxOffset);
            outputEls.debtMeter.style.strokeDashoffset = offset;
            
            // Color grading for meter
            if (avg < 40) outputEls.debtMeter.setAttribute('stroke', '#D02020'); // Red
            else if (avg < 75) outputEls.debtMeter.setAttribute('stroke', '#F0C020'); // Yellow
            else outputEls.debtMeter.setAttribute('stroke', '#1040C0'); // Blue

            // Update Diagnosis Title
            if (avg < 30) {
                outputEls.debtTitle.innerText = "System Failure";
                outputEls.debtDesc.innerText = "The architecture is actively repelling users through friction and silence. Immediate structural intervention required.";
            } else if (avg < 50) {
                outputEls.debtTitle.innerText = "Critical Risk";
                outputEls.debtDesc.innerText = "Your system demands high effort from users but offers little guidance. This creates an 'Anxiety Gap' leading to silent churn.";
            } else if (avg < 75) {
                outputEls.debtTitle.innerText = "Functional";
                outputEls.debtDesc.innerText = "The system works for motivated users, but fragile users fall through the cracks. You are relying on their willpower, not your design.";
            } else {
                outputEls.debtTitle.innerText = "Optimized";
                outputEls.debtDesc.innerText = "Your architecture proactively manages user cognitive load and emotional state. The system acts as a partner, not a tool.";
            }

            // Determine Bottleneck (Lowest Score)
            const scores = { collection: cVal, processing: pVal, response: rVal };
            // If the range between lowest and highest is small (<20), treat as balanced
            const minScore = Math.min(cVal, pVal, rVal);
            const maxScore = Math.max(cVal, pVal, rVal);
            let strategyKey = 'balanced';
            
            if ((maxScore - minScore) > 20) {
                strategyKey = Object.keys(scores).reduce((a, b) => scores[a] < scores[b] ? a : b);
            }

            // Update Plan
            let planHTML = '';
            plans[strategyKey].forEach(step => {
                planHTML += `
                    <div class="flex gap-3 items-start">
                        <span class="bg-[#121212] text-white text-[10px] font-bold uppercase px-1 py-0.5 shrink-0 mt-0.5">${step.stage}</span>
                        <p class="text-sm font-medium leading-tight">${step.task}</p>
                    </div>
                `;
            });
            outputEls.planContent.innerHTML = planHTML;

            // Update Quick Wins
            // If balanced, pick one random or default to collection for simplicity
            const winsKey = strategyKey === 'balanced' ? 'response' : strategyKey;
            let winsHTML = '';
            quickWinsList[winsKey].forEach(win => {
                winsHTML += `
                    <li class="flex items-start gap-2 text-sm font-medium">
                        <iconify-icon icon="solar:check-square-linear" class="mt-1 text-[#D02020] shrink-0"></iconify-icon>
                        <span>${win}</span>
                    </li>
                `;
            });
            outputEls.quickWins.innerHTML = winsHTML;
        }

        inputs.forEach(input => input.addEventListener('input', updateAudit));
        
        // Init
        updateAudit();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed pointer-events-none z-0 overflow-hidden opacity-50 top-0 right-0 bottom-0 left-0">
<div className="bg-[#D02020] opacity-10 mix-blend-multiply w-[30vh] h-[30vh] rounded-full absolute top-[-5%] left-[-5%]"></div>
<div className="bg-[#1040C0] opacity-10 mix-blend-multiply w-[40vh] h-[40vh] absolute right-[-5%] bottom-[10%] rotate-12"></div>
<div className="absolute top-[20%] right-[10%] w-0 h-0 border-l-[100px] border-l-transparent border-t-[150px] border-t-[#F0C020] border-r-[100px] border-r-transparent opacity-10"></div>
</div>

<main className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-20">

<header className="max-w-4xl mb-16">
<h1 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] text-5xl font-black tracking-[-0.05em] mb-8">Behavioral Feedback System <br/> <span className="text-[#D02020]">Audit</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-medium max-w-2xl border-[#121212] border-l-4 ml-2 pl-6">
                Evaluate the structural integrity of your user engagement system. 
                Drag the sliders to reflect your current capabilities and reveal the hidden costs of your behavioral architecture.
            </p>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

<div className="lg:col-span-5 space-y-8">

<div className="group bg-white border-4 border-[#121212] p-6 md:p-8 shadow-[8px_8px_0px_0px_black] hover:-translate-y-1 transition-transform duration-200">
<div className="flex mb-6 items-start justify-between">
<div className="flex bg-[#1040C0] w-10 h-10 border-black border-2 items-center justify-center">
<iconify-icon className="text-white text-xl stroke-[1.5]" icon="solar:radar-linear"></iconify-icon>
</div>
<div className="text-right">
<h3 className="uppercase text-2xl font-black tracking-tight">Collection</h3>
<span className="uppercase text-base font-bold text-gray-500 tracking-widest">Signal Capture</span>
</div>
</div>
<div className="mb-8">
<label className="block text-lg font-medium mb-4" htmlFor="collection" id="collection-label">
                            Do you hear user struggle before they churn?
                        </label>
<input className="w-full" id="collection" max="100" min="0" type="range" value="30"/>
<div className="flex uppercase text-base font-bold tracking-wide mt-2 justify-between">
<span className="">Deaf</span>
<span className="">Omniscient</span>
</div>
</div>
<div className="border-dashed text-base bg-[#F0F0F0] border-gray-400 border-2 pt-4 pr-4 pb-4 pl-4">
<span className="block font-bold mb-1 uppercase text-xs">Current State:</span>
<p className="leading-tight" id="collection-text">Reactive. You only know something is wrong when a support ticket is filed or a user cancels.</p>
</div>
</div>

<div className="group bg-white border-4 border-[#121212] p-6 md:p-8 shadow-[8px_8px_0px_0px_black] hover:-translate-y-1 transition-transform duration-200">
<div className="flex justify-between items-start mb-6">
<div className="flex bg-[#D02020] w-10 h-10 border-black border-2 rounded-full items-center justify-center">
<iconify-icon className="stroke-[1.5] text-xl text-white" height="20" icon="solar:cpu-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<div className="text-right">
<h3 className="text-2xl font-black uppercase tracking-tight">Processing</h3>
<span className="uppercase text-base font-bold text-gray-500 tracking-widest">Sense Making</span>
</div>
</div>
<div className="mb-8">
<label className="block text-lg font-medium mb-4" htmlFor="processing" id="processing-label">
                            Does your data tell a coherent story?
                        </label>
<input className="w-full" id="processing" max="100" min="0" type="range" value="50"/>
<div className="flex uppercase text-base font-bold tracking-wide mt-2 justify-between">
<span>Noise</span>
<span className="">Narrative</span>
</div>
</div>
<div className="border-dashed text-base bg-[#F0F0F0] border-gray-400 border-2 px-4 py-4">
<span className="block font-bold mb-1 uppercase text-xs">Current State:</span>
<p className="leading-tight" id="processing-text">Correlative. You can link actions to outcomes, but causal emotional drivers are unclear.</p>
</div>
</div>

<div className="group bg-white border-4 border-[#121212] p-6 md:p-8 shadow-[8px_8px_0px_0px_black] hover:-translate-y-1 transition-transform duration-200">
<div className="flex justify-between items-start mb-6">

<div className="bg-[#F0C020] w-10 h-10 flex items-center justify-center border-2 border-black" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', paddingTop: '5px'}}>
<iconify-icon className="text-black text-sm stroke-[1.5]" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<div className="text-right">
<h3 className="text-2xl font-black uppercase tracking-tight">Response</h3>
<span className="uppercase text-base font-bold text-gray-500 tracking-widest">Closing Loop</span>
</div>
</div>
<div className="mb-8">
<label className="block text-lg font-medium mb-4" htmlFor="response" id="response-label">
                            How fast does the system adapt to the user?
                        </label>
<input className="w-full" id="response" max="100" min="0" type="range" value="40"/>
<div className="flex uppercase text-base font-bold tracking-wide mt-2 justify-between">
<span>Static</span>
<span className="">Adaptive</span>
</div>
</div>
<div className="border-dashed text-base bg-[#F0F0F0] border-gray-400 border-2 px-4 py-4">
<span className="block font-bold mb-1 uppercase text-xs">Current State:</span>
<p className="leading-tight" id="response-text">Generic. The system sends automated nudges, but they are one-size-fits-all.</p>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-8 sticky top-8 gap-x-8 gap-y-8">

<div className="bg-[#121212] text-white border-4 border-[#121212] shadow-[12px_12px_0px_0px_#F0C020] p-6 md:p-10 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#F0C020] rounded-bl-full opacity-20 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">

<div className="shrink-0 text-center">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white flex items-center justify-center relative bg-[#121212]">
<svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="44" stroke="#333" strokeWidth="8"></circle>
<circle className="transition-all duration-700 ease-out" cx="50" cy="50" fill="none" id="debt-meter" r="44" stroke="#F0C020" stroke-dasharray="276" stroke-dashoffset="180" strokeWidth="8" style={{strokeDashoffset: '165.6'}}></circle>
</svg>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-black tracking-tighter" id="score-display">40</span>
<span className="text-[10px] uppercase font-bold tracking-widest mt-1">Score</span>
</div>
</div>
</div>

<div className="flex-1">
<h2 className="text-lg font-bold uppercase tracking-widest text-[#F0C020] mb-2">Behavioral Debt Level</h2>
<h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none mb-4" id="debt-title">Critical Risk</h3>
<p className="leading-relaxed md:text-base text-base text-gray-300 border-[#F0C020] border-l-2 pl-4" id="debt-desc">Your system demands high effort from users but offers little guidance. This creates an 'Anxiety Gap' leading to silent churn.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border-[#121212] border-4 pt-6 pr-6 pb-6 pl-6 shadow-[6px_6px_0px_0px_black]">
<div className="flex gap-3 border-black border-b-2 mb-4 pb-2 items-center">
<iconify-icon className="text-2xl text-[#1040C0]" icon="solar:bolt-linear"></iconify-icon>
<h4 className="uppercase text-xl font-black tracking-tight">Quick Wins</h4>
</div>
<ul className="space-y-3 gap-x-2 gap-y-2" id="quick-wins">
<li className="flex items-start gap-2 text-sm font-medium">
<iconify-icon className="mt-1 text-[#D02020] shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span className="">Add reassuring micro-copy to errors.</span>
</li>
<li className="flex gap-2 text-sm font-medium gap-x-2 gap-y-2 items-start">
<svg className="shrink-0 text-[#D02020] mt-1" data-icon-set="solar" data-solar="check-square-linear" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
<span className="">Remove one decision step.</span>
</li>
</ul>
</div>

<div className="bg-white border-4 border-[#121212] p-6 shadow-[6px_6px_0px_0px_black]">
<div className="flex items-center gap-3 mb-4 border-b-2 border-black pb-2">
<iconify-icon className="text-2xl text-[#1040C0]" icon="solar:calendar-linear"></iconify-icon>
<h4 className="uppercase text-xl font-black tracking-tight">90-Day Plan</h4>
</div>
<div className="space-y-4" id="plan-content">
<div className="flex gap-3 items-start">
<span className="bg-[#121212] text-white text-[10px] font-bold uppercase px-1 py-0.5 shrink-0 mt-0.5">Month 1</span>
<p className="text-sm font-medium leading-tight">Connect Collection to Response: Automate one feedback loop.</p>
</div>
<div className="flex gap-3 items-start">
<span className="bg-[#121212] text-white text-[10px] font-bold uppercase px-1 py-0.5 shrink-0 mt-0.5">Month 2</span>
<p className="text-sm font-medium leading-tight">Refine processing logic to reduce false positives.</p>
</div>
<div className="flex gap-3 items-start">
<span className="bg-[#121212] text-white text-[10px] font-bold uppercase px-1 py-0.5 shrink-0 mt-0.5">Month 3</span>
<p className="text-sm font-medium leading-tight">Scale the architecture to secondary user journeys.</p>
</div>
</div>
</div>
</div>

<div className="md:p-8 flex flex-col md:flex-row bg-[#D02020] border-[#121212] border-4 mt-4 pt-6 pr-6 pb-6 pl-6 shadow-[8px_8px_0px_0px_black] gap-x-6 gap-y-6 items-center justify-between">
<div className="text-white">
<h4 className="font-black uppercase text-xl md:text-2xl tracking-tight mb-1">Need the full architecture?</h4>
<p className="text-sm font-medium opacity-90">I design the systems that close these gaps.</p>
</div>
<button className="bg-white text-[#121212] font-bold uppercase tracking-wider py-3 px-6 border-2 border-black shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:-translate-y-1 transition-all flex items-center gap-2 shrink-0">
<span>View Strategy</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>



    </>
  );
}
