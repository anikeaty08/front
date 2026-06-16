import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Data Store
        const patterns = [
            {
                id: 0,
                tag: "Habit Formation",
                title: "Micro-Commitment Laddering",
                steps: [
                    { label: "Start", desc: "5-min practice (Absurdly easy)", icon: "solar:check-circle-bold", color: "text-emerald-500" },
                    { label: "Build", desc: "Scale to 10m → 15m → 20m over 3 weeks", icon: "solar:stairs-linear", color: "text-violet-500" },
                    { label: "Track", desc: "Completion consistency, not duration", icon: "solar:chart-square-linear", color: "text-blue-500" }
                ],
                signals: [
                    "Completion (Binary)",
                    "Hesitation time (Start delay)",
                    "Self-rated confidence (1-5)"
                ],
                adaptations: [
                    "Reduce duration to 2 mins",
                    "Remove decision fatigue (pre-select task)",
                    "Switch to passive consumption mode"
                ]
            },
            {
                id: 1,
                tag: "Environmental Design",
                title: "Context-Behavior Pairing",
                steps: [
                    { label: "Anchor", desc: "Existing habit (e.g., Morning Coffee)", icon: "solar:cup-hot-linear", color: "text-amber-600" },
                    { label: "Trigger", desc: "New 5-min practice immediately after", icon: "solar:bolt-circle-linear", color: "text-violet-500" },
                    { label: "Reinforce", desc: "Same time & place daily", icon: "solar:repeat-circle-linear", color: "text-blue-500" }
                ],
                signals: [
                    "Time variance (Is it consistent?)",
                    "Missed triggers vs. Abandonment",
                    "User reports 'I forgot'"
                ],
                adaptations: [
                    "Change the anchor event",
                    "Add physical visual cue (Post-it)",
                    "Move practice to lower-friction time"
                ]
            },
            {
                id: 2,
                tag: "Resilience System",
                title: "Struggle-Signal Responsiveness",
                steps: [
                    { label: "Detect", desc: "Hesitation, abandonment, rage-clicks", icon: "solar:eye-scan-linear", color: "text-pink-600" },
                    { label: "Adapt", desc: "Offer easier alternative or break", icon: "solar:magic-stick-3-linear", color: "text-violet-500" },
                    { label: "Guardrail", desc: "Never punish, shame, or ignore", icon: "solar:shield-warning-linear", color: "text-emerald-500" }
                ],
                signals: [
                    "Mid-session pauses (>30s)",
                    "Replays of instructions",
                    "Help-seeking clicks"
                ],
                adaptations: [
                    "Human check-in (Coach)",
                    "Suggest a 'Save Point' & exit",
                    "Normalize difficulty ('This is hard for everyone')"
                ]
            },
            {
                id: 3,
                tag: "Community Dynamics",
                title: "Social Accountability Light",
                steps: [
                    { label: "Share", desc: "Weekly 'What did you practice?'", icon: "solar:chat-round-line-linear", color: "text-blue-500" },
                    { label: "Protect", desc: "No leaderboards, no comparison", icon: "solar:forbidden-circle-linear", color: "text-pink-500" },
                    { label: "Celebrate", desc: "Peer recognition for showing up", icon: "solar:confetti-minimalistic-linear", color: "text-amber-500" }
                ],
                signals: [
                    "Participation rate in cohort",
                    "Sentiment of shared posts",
                    "Reaction speed to others"
                ],
                adaptations: [
                    "Switch to 1-on-1 buddy system",
                    "Make sharing optional/anonymous",
                    "Seed discussion with facilitator examples"
                ]
            },
            {
                id: 4,
                tag: "Cognitive Integration",
                title: "Reflection-Integration Loop",
                steps: [
                    { label: "Prompt", desc: "Weekly: 'What surprised you?'", icon: "solar:question-circle-linear", color: "text-violet-500" },
                    { label: "Identity", desc: "Monthly: 'Who are you becoming?'", icon: "solar:user-id-linear", color: "text-emerald-500" },
                    { label: "Synthesis", desc: "Quarterly: 'What can you do now?'", icon: "solar:notebook-minimalistic-linear", color: "text-blue-500" }
                ],
                signals: [
                    "Word count of reflections",
                    "Use of 'I am' statements",
                    "Connection to past experiences"
                ],
                adaptations: [
                    "Provide multiple choice prompts",
                    "Allow voice-note recording",
                    "Reduce frequency if fatigued"
                ]
            }
        ];

        // Functions
        function selectPattern(index, btnElement) {
            const data = patterns[index];
            
            // 1. Update UI Buttons
            document.querySelectorAll('#pattern-menu button').forEach(b => {
                b.classList.remove('active', 'ring-2', 'ring-violet-400', 'ring-offset-2');
                b.classList.add('bg-white');
            });
            btnElement.classList.add('active', 'ring-2', 'ring-violet-400', 'ring-offset-2');
            
            // 2. Animate Out
            const title = document.getElementById('sim-title');
            const steps = document.getElementById('sim-steps');
            const signals = document.getElementById('sim-signals');
            const adaptations = document.getElementById('sim-adaptations');

            // 3. Update Content
            document.getElementById('sim-tag').innerText = data.tag;
            title.innerText = data.title;
            
            // Render Steps
            steps.innerHTML = data.steps.map((step, i) => `
                <div class="flex items-center gap-4 p-3 rounded-2xl ${i === 0 ? 'bg-slate-50 border border-slate-100' : ''}">
                    <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center ${step.color} text-xl">
                        <iconify-icon icon="${step.icon}"></iconify-icon>
                    </div>
                    <div class="flex-1">
                        <div class="text-xs font-bold uppercase text-slate-400 tracking-wider mb-0.5">${step.label}</div>
                        <div class="text-slate-700 font-medium text-sm md:text-base">${step.desc}</div>
                    </div>
                    ${i < 2 ? '<div class="hidden md:block text-slate-300"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></div>' : ''}
                </div>
            `).join('');

            // Render Signals
            signals.innerHTML = data.signals.map(s => `
                <li class="flex items-start gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-read-linear" class="text-violet-400 mt-1 flex-shrink-0"></iconify-icon>
                    <span>${s}</span>
                </li>
            `).join('');

            // Render Adaptations
            adaptations.innerHTML = data.adaptations.map(a => `
                <li class="flex items-start gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:refresh-circle-linear" class="text-pink-400 mt-1 flex-shrink-0"></iconify-icon>
                    <span>${a}</span>
                </li>
            `).join('');
        }

        // Initialize First Pattern
        window.addEventListener('DOMContentLoaded', () => {
            selectPattern(0, document.querySelector('#pattern-menu button'));
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-violet-400/20 rounded-full blur-[80px] animate-float"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[60vh] h-[60vh] bg-pink-400/15 rounded-full blur-[100px] animate-float-delayed"></div>
<div className="absolute top-[20%] right-[10%] w-[30vh] h-[30vh] bg-sky-400/15 rounded-full blur-[60px] animate-float"></div>
</div>

<main className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">

<header className="mb-16 md:mb-24 relative">
<h1 className="md:text-7xl leading-[1.1] text-gradient text-5xl font-black tracking-tight font-heading max-w-4xl mb-8">
                Practice-Loop <br/> Design Cheat Sheet.
            </h1>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 flex flex-col gap-6">
<div className="flex items-center justify-between px-2">
<h2 className="font-heading font-bold text-2xl text-slate-800">Core Patterns</h2>
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select to Simulate</span>
</div>

<div className="flex flex-col gap-5" id="pattern-menu">

<button className="clay-btn w-full p-6 rounded-[24px] bg-white flex items-center gap-5 text-left group transition-all active ring-2 ring-violet-400 ring-offset-2" onclick="selectPattern(0, this)">
<div className="flex group-hover:scale-110 transition-transform duration-300 text-2xl text-violet-600 bg-gradient-to-br from-violet-100 to-violet-200 w-14 h-14 rounded-2xl shadow-inner items-center justify-center">
<iconify-icon className="" icon="solar:stairs-linear"></iconify-icon>
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="diagram-up-linear" height="24" strokeWidth="2" style={{color: 'rgb(219, 39, 119)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#7c3aed" strokeLinecap="round" strokeWidth="1.5"><path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2"></path><path d="m19 7l-3.118 3.926c-.477.602-.716.903-.99 1.05a1.5 1.5 0 0 1-1.357.029c-.28-.135-.531-.425-1.035-1.005s-.755-.87-1.035-1.005a1.5 1.5 0 0 0-1.356.03c-.274.146-.513.447-.99 1.048L6 15"></path></g></svg></div>
<div className="">
<h3 className="font-heading font-bold text-lg text-slate-800">Micro-Laddering</h3>
<p className="text-sm text-slate-500 font-medium">Absurdly easy starts</p>
</div>
</button>

<button className="clay-btn w-full p-6 rounded-[24px] bg-white flex items-center gap-5 text-left group transition-all" onclick="selectPattern(1, this)">
<div className="flex group-hover:scale-110 transition-transform duration-300 text-2xl text-pink-600 bg-gradient-to-br from-pink-100 to-pink-200 w-14 h-14 rounded-2xl shadow-inner items-center justify-center">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="cup-hot-linear" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(219, 39, 119)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634c.593.633.526 1.633.393 3.632l-.343 5.133c-.177 2.655-.265 3.982-1.13 4.792S13.047 22 10.387 22h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79zM17 17h1a4 4 0 0 0 0-8h-1m-1 9H4"></path><path d="m6.05 5.061l.411-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m7.51 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m-4.49 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575" strokeLinecap="round"></path></g></svg>
</div>
<div className="">
<h3 className="font-heading font-bold text-lg text-slate-800">Context Pairing</h3>
<p className="text-sm text-slate-500 font-medium">Anchoring to habits</p>
</div>
</button>

<button className="clay-btn w-full p-6 rounded-[24px] bg-white flex items-center gap-5 text-left group transition-all" onclick="selectPattern(2, this)">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 text-amber-600 flex items-center justify-center shadow-inner text-2xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div>
<h3 className="font-heading font-bold text-lg text-slate-800">Struggle Response</h3>
<p className="text-sm text-slate-500 font-medium">Detection &amp; Support</p>
</div>
</button>

<button className="clay-btn w-full p-6 rounded-[24px] bg-white flex items-center gap-5 text-left group transition-all" onclick="selectPattern(3, this)">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 text-sky-600 flex items-center justify-center shadow-inner text-2xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<h3 className="font-heading font-bold text-lg text-slate-800">Social Light</h3>
<p className="text-sm text-slate-500 font-medium">Accountability, no shame</p>
</div>
</button>

<button className="clay-btn w-full p-6 rounded-[24px] bg-white flex items-center gap-5 text-left group transition-all" onclick="selectPattern(4, this)">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 flex items-center justify-center shadow-inner text-2xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:mirror-left-linear"></iconify-icon>
</div>
<div>
<h3 className="font-heading font-bold text-lg text-slate-800">Reflection Loop</h3>
<p className="text-sm text-slate-500 font-medium">Identity formation</p>
</div>
</button>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-8">

<div className="clay-card rounded-[40px] p-8 md:p-10 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/40 to-transparent rounded-bl-[100px] pointer-events-none"></div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
<div className="">
<span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2" id="sim-tag">Habit Formation</span>
<h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 tracking-tight" id="sim-title">Micro-Commitment Laddering</h2>
</div>
<div className="clay-pressed rounded-2xl px-4 py-2 flex items-center gap-2 text-violet-600">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
<span className="font-bold text-sm">Active Loop</span>
</div>
</div>

<div className="bg-white/50 rounded-[32px] p-6 mb-8 border border-white/60 shadow-sm relative overflow-hidden">
<h4 className="font-heading font-bold text-slate-700 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
                            Process Simulation
                        </h4>

<div className="flex flex-col gap-4" id="sim-steps">
<div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-500 text-xl">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-0.5">Start</div>
<div className="text-slate-700 font-medium text-sm md:text-base">5-min practice (Absurdly easy)</div>
</div>
<div className="hidden md:block text-slate-300"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></div>
</div>
<div className="flex items-center gap-4 p-3 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-violet-500 text-xl">
<iconify-icon icon="solar:stairs-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-0.5">Build</div>
<div className="text-slate-700 font-medium text-sm md:text-base">Scale to 10m → 15m → 20m over 3 weeks</div>
</div>
<div className="hidden md:block text-slate-300"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></div>
</div>
<div className="flex items-center gap-4 p-3 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-500 text-xl">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-0.5">Track</div>
<div className="text-slate-700 font-medium text-sm md:text-base">Completion consistency, not duration</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-violet-50/50 rounded-[24px] p-6 border border-violet-100">
<div className="flex items-center gap-2 mb-4 text-violet-700">
<iconify-icon className="text-lg" icon="solar:radar-2-linear"></iconify-icon>
<h4 className="font-heading font-bold text-sm uppercase tracking-wide">Signals to Track</h4>
</div>
<ul className="space-y-3" id="sim-signals">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-violet-400 mt-1 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span>Completion (Binary)</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-violet-400 mt-1 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span>Hesitation time (Start delay)</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-violet-400 mt-1 flex-shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span>Self-rated confidence (1-5)</span>
</li>
</ul>
</div>

<div className="bg-pink-50/50 rounded-[24px] p-6 border border-pink-100">
<div className="flex items-center gap-2 mb-4 text-pink-700">
<iconify-icon className="text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
<h4 className="font-heading font-bold text-sm uppercase tracking-wide">If Struggling...</h4>
</div>
<ul className="space-y-3" id="sim-adaptations">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-pink-400 mt-1 flex-shrink-0" icon="solar:refresh-circle-linear"></iconify-icon>
<span>Reduce duration to 2 mins</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-pink-400 mt-1 flex-shrink-0" icon="solar:refresh-circle-linear"></iconify-icon>
<span>Remove decision fatigue (pre-select task)</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-pink-400 mt-1 flex-shrink-0" icon="solar:refresh-circle-linear"></iconify-icon>
<span>Switch to passive consumption mode</span>
</li>
</ul>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-[32px] bg-white/40 border border-white/40">
<div className="min-w-[40px] h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon className="text-xl" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="font-heading font-bold text-slate-800 mb-1">Architectural Ethics</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            This pattern prioritizes <span className="font-bold text-violet-700">human dignity</span> over metrics. 
                            We never optimize for addiction, only for sustainable, consensual behavior change. 
                            The user always retains the right to opt-out or reset without shame.
                        </p>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
