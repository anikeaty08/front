import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple router to switch between screens
        function nav(targetId) {
            // Hide all screens
            const screens = document.querySelectorAll('.screen');
            screens.forEach(screen => {
                screen.classList.remove('active');
            });
            
            // Show target screen
            const targetScreen = document.getElementById(targetId);
            if (targetScreen) {
                targetScreen.classList.add('active');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md h-[100dvh] sm:h-[800px] bg-slate-50 relative overflow-hidden sm:rounded-[2.5rem] sm:shadow-2xl sm:ring-8 ring-slate-800">


<div className="screen active bg-white" id="s-welcome">
<div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-50 to-white -z-10"></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="mb-8 flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100">
<span className="text-2xl font-semibold tracking-tighter text-indigo-600">FF</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Financial clarity, a phone call away.</h1>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">A guided, unbiased assessment to understand where you stand. No financial data required upfront. No products sold.</p>
<div className="flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-full border border-slate-100 mb-12">
<iconify-icon className="text-indigo-600" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Backed by Institute for Financial Literacy</span>
</div>
</div>
<div className="p-6 bg-white border-t border-slate-100">
<button className="w-full bg-indigo-600 text-white rounded-full py-3.5 px-4 font-medium text-base hover:bg-indigo-700 transition-colors active:scale-[0.98]" onclick="nav('s-details')">
                    Get Started
                </button>
</div>
</div>

<div className="screen bg-white" id="s-details">
<div className="flex items-center p-4 border-b border-slate-100">
<button className="p-2 -ml-2 text-slate-400 hover:text-slate-600" onclick="nav('s-welcome')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="flex-1 text-center font-medium text-sm tracking-tight pr-6">Basic Setup</div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">How can we reach you?</h2>
<p className="text-sm text-slate-500">We only need basics to initiate your assessment call and email your report.</p>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Preferred Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-shadow" placeholder="e.g. Sarah" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Mobile Number (for the assessment call)</label>
<div className="flex gap-2">
<div className="w-20 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-500 flex items-center justify-center shrink-0">
                                +65
                            </div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-shadow" placeholder="8123 4567" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Email (to receive your report)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-shadow" placeholder="sarah@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Age Group</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-700">
<option>Select age group</option>
<option>20 - 29</option>
<option>30 - 39</option>
<option>40 - 49</option>
<option>50 - 59</option>
<option>60+</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="p-6 bg-white border-t border-slate-100">
<button className="w-full bg-indigo-600 text-white rounded-full py-3.5 px-4 font-medium text-base hover:bg-indigo-700 transition-colors active:scale-[0.98]" onclick="nav('s-consent')">
                    Continue
                </button>
</div>
</div>

<div className="screen bg-white" id="s-consent">
<div className="flex items-center p-4 border-b border-slate-100">
<button className="p-2 -ml-2 text-slate-400 hover:text-slate-600" onclick="nav('s-details')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="flex-1 text-center font-medium text-sm tracking-tight pr-6">Privacy &amp; Trust</div>
</div>
<div className="flex-1 overflow-y-auto p-6">
<div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-600" icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Before we connect</h2>
<div className="space-y-6 mb-8">
<div className="flex gap-4">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1">AI-Powered Conversation</h3>
<p className="text-xs text-slate-500 leading-relaxed">Your call will be conducted by our conversational AI. It will ask guided questions about your finances.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Education, not advice</h3>
<p className="text-xs text-slate-500 leading-relaxed">F-FIT provides general educational insights. It does not replace professional financial advice.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:database-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Your data is yours</h3>
<p className="text-xs text-slate-500 leading-relaxed">Inputs are used solely to generate your report. We do not sell data to financial institutions.</p>
</div>
</div>
</div>
<label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer">
<input className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-600" type="checkbox"/>
<span className="text-xs text-slate-600 leading-relaxed">I agree to the <span className="text-indigo-600 font-medium">Terms of Service</span> and <span className="text-indigo-600 font-medium">Privacy Policy</span>.</span>
</label>
</div>
<div className="p-6 bg-white border-t border-slate-100">
<button className="w-full bg-slate-900 text-white rounded-full py-3.5 px-4 font-medium text-base hover:bg-slate-800 transition-colors active:scale-[0.98]" onclick="nav('s-pre-call')">
                    Agree &amp; Proceed
                </button>
</div>
</div>


<div className="screen bg-slate-50" id="s-pre-call">
<div className="flex items-center p-4">
<button className="p-2 -ml-2 text-slate-400 hover:text-slate-600" onclick="nav('s-dashboard')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 flex flex-col items-center justify-center p-8 text-center mt-[-40px]">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
<iconify-icon className="text-indigo-600" icon="solar:phone-calling-linear" width="40"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Ready for your review?</h2>
<p className="text-sm text-slate-500 mb-8 max-w-[280px] leading-relaxed">We will call <span className="font-medium text-slate-700">+65 8123 4567</span>. The conversation takes about 3 minutes.</p>
<div className="bg-white px-4 py-3 rounded-xl border border-slate-200 flex items-center gap-3 w-full mb-8 shadow-sm text-left">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:volume-up-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-600 flex-1">Find a quiet environment to speak naturally.</span>
</div>
</div>
<div className="p-6 pb-8">
<button className="w-full bg-emerald-600 text-white rounded-full py-4 px-4 font-semibold text-base hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 active:scale-[0.98] mb-4 flex items-center justify-center gap-2" onclick="nav('s-voice')">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon> Call Me Now
                </button>
<button className="w-full py-3 px-4 font-medium text-sm text-slate-500 hover:text-slate-800 transition-colors" onclick="nav('s-text')">
                    Prefer typing instead?
                </button>
</div>
</div>

<div className="screen bg-slate-900 text-white" id="s-voice">
<div className="flex items-center p-4">
<div className="flex-1 text-center font-medium text-xs text-emerald-400 tracking-tight pr-6 uppercase tracking-wider flex items-center justify-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> Active Call (01:14)
                </div>
</div>
<div className="flex-1 flex flex-col p-6 pb-0">

<div className="flex-1 flex flex-col justify-end pb-12 space-y-6">
<div className="opacity-40">
<p className="text-sm font-medium text-slate-300">"Got it. About $4,000 take-home pay."</p>
</div>
<div>
<p className="text-2xl font-medium text-white leading-tight">"And roughly how much do you have saved in cash right now, for emergencies?"</p>
</div>
</div>

<div className="h-24 flex items-center justify-center gap-1.5 mb-8">
<div className="w-1.5 h-4 bg-indigo-400 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-8 bg-indigo-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.1s]"></div>
<div className="w-1.5 h-12 bg-indigo-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.2s]"></div>
<div className="w-1.5 h-6 bg-indigo-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite_0.3s]"></div>
<div className="w-1.5 h-10 bg-indigo-500 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.4s]"></div>
</div>

<div className="text-center mb-8 h-6">
<p className="text-sm text-slate-400 italic">"I think around two thousand..."</p>
</div>
</div>
<div className="p-8 flex justify-between items-center bg-slate-900 border-t border-slate-800 pb-10">
<button className="w-12 h-12 flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:microphone-3-linear" width="24"></iconify-icon>
<span className="text-[10px]">Mute</span>
</button>
<button className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-900/50 active:scale-[0.95]" onclick="nav('s-generating')">
<iconify-icon className="rotate-[135deg]" icon="solar:phone-bold" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white transition-colors" onclick="nav('s-text')">
<iconify-icon icon="solar:keyboard-linear" width="24"></iconify-icon>
<span className="text-[10px]">Keypad</span>
</button>
</div>
</div>

<div className="screen bg-white" id="s-text">
<div className="flex items-center p-4 border-b border-slate-100 bg-white shadow-sm z-10">
<button className="p-2 -ml-2 text-slate-400 hover:text-slate-600" onclick="nav('s-voice')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="flex-1 text-center flex flex-col">
<span className="font-medium text-sm tracking-tight text-slate-900">F-FIT Assistant</span>
<span className="text-[10px] text-emerald-500 font-medium">Text Mode</span>
</div>
<button className="text-xs font-medium text-indigo-600 px-2" onclick="nav('s-generating')">End</button>
</div>
<div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
<span className="text-indigo-600 font-semibold text-xs tracking-tighter">FF</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
<p className="text-sm text-slate-700 leading-relaxed">Let's look at your housing. Are you currently paying a mortgage?</p>
</div>
</div>
<div className="flex gap-3 justify-end">
<div className="bg-indigo-600 rounded-2xl rounded-tr-none px-4 py-3 shadow-sm max-w-[85%] text-white">
<p className="text-sm leading-relaxed">Yes, but I use my CPF OA for it. Does that count as a cash expense?</p>
</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
<span className="text-indigo-600 font-semibold text-xs tracking-tighter">FF</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
<p className="text-sm text-slate-700 leading-relaxed mb-3">Great question.</p>
<div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
<div className="flex items-center gap-1.5 mb-1.5">
<iconify-icon className="text-indigo-600" icon="solar:book-bookmark-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold text-slate-900">Educational Note</span>
</div>
<p className="text-[11px] text-slate-600 leading-relaxed">For our cash flow calculation, we only look at <span className="font-medium text-slate-800">cash expenses</span>. If your mortgage is fully paid via CPF Ordinary Account (OA), you don't need to include it in your monthly cash expenses here.</p>
</div>
<p className="text-sm text-slate-700 leading-relaxed mt-3">So, excluding CPF deductions, how much cash do you spend on fixed bills each month?</p>
</div>
</div>
</div>
<div className="p-3 bg-white border-t border-slate-100 pb-safe">
<div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-2 pr-1 focus-within:ring-1 focus-within:ring-indigo-500 transition-shadow">
<textarea className="flex-1 bg-transparent resize-none outline-none text-sm p-2 text-slate-700 placeholder-slate-400" placeholder="Type your answer..." rows="1"></textarea>
<button className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shrink-0" onclick="nav('s-generating')">
<iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="screen bg-white" id="s-generating">
<div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
<iconify-icon className="text-indigo-600 spinner mb-6" icon="solar:refresh-circle-linear" width="48"></iconify-icon>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Analyzing your profile</h2>
<p className="text-sm text-slate-500 mb-8 max-w-[250px]">Our reasoning engine is applying financial benchmarks to your inputs.</p>
<div className="space-y-3 w-full max-w-[200px] text-left">
<div className="flex items-center gap-3 text-xs text-slate-400">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Inputs verified
                    </div>
<div className="flex items-center gap-3 text-xs text-slate-400">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Calculating liquidity
                    </div>
<div className="flex items-center gap-3 text-xs text-slate-800 font-medium">
<div className="w-3.5 h-3.5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div> Generating report...
                    </div>
</div>
</div>

<button className="p-4 text-xs text-slate-300" onclick="nav('s-report')">Skip to report (Prototype)</button>
</div>


<div className="screen bg-slate-50" id="s-report">

<div className="flex items-center justify-between p-4 bg-white sticky top-0 z-10">
<button className="p-2 -ml-2 text-slate-400 hover:text-slate-600" onclick="nav('s-history')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="font-medium text-sm tracking-tight">Your Evaluation</div>
<div className="w-8"></div>
</div>
<div className="flex-1 overflow-y-auto pb-6">

<div className="bg-emerald-50 border-y border-emerald-100 px-4 py-3 flex items-center gap-3">
<iconify-icon className="text-emerald-600" icon="solar:letter-opened-linear" width="20"></iconify-icon>
<p className="text-xs font-medium text-emerald-800 flex-1">A detailed copy of this report has been sent to sarah@example.com.</p>
</div>
<div className="p-5">

<div className="mb-6">
<p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">Generated Today</p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">You are building a foundation.</h2>
<p className="text-sm text-slate-600 leading-relaxed">Sarah, your cash flow is strong, meaning you live within your means. However, your emergency liquidity needs urgent attention to protect you from unexpected shocks.</p>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Executive Summary</h3>

<div className="grid grid-cols-2 gap-3 mb-8">

<div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
<span className="text-xs text-slate-500 mb-1">Net Worth</span>
<span className="text-lg font-semibold text-slate-900 mb-2">$42,500</span>
<span className="text-[10px] text-slate-500 leading-tight mt-auto">Assets minus liabilities.</span>
</div>

<div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 shadow-sm flex flex-col">
<div className="flex justify-between items-start mb-1">
<span className="text-xs text-slate-600 font-medium">Mthly Cash Flow</span>
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold text-emerald-900 mb-2">+$850</span>
<span className="text-[10px] text-emerald-700/80 leading-tight mt-auto">Good surplus for investing.</span>
</div>

<div className="bg-red-50/50 p-4 rounded-2xl border border-red-100 shadow-sm flex flex-col">
<div className="flex justify-between items-start mb-1">
<span className="text-xs text-slate-600 font-medium">Emergency Fund</span>
<iconify-icon className="text-red-500" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold text-red-900 mb-2">0.5 mths</span>
<span className="text-[10px] text-red-700/80 leading-tight mt-auto">Priority: Aim for 3-6 months.</span>
</div>

<div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
<span className="text-xs text-slate-500 mb-1">Retirement</span>
<span className="text-lg font-semibold text-slate-900 mb-2">Age 65</span>
<span className="text-[10px] text-slate-500 leading-tight mt-auto">Projected based on CPF.</span>
</div>
</div>

<h3 className="text-sm font-semibold text-slate-900 mb-3">Key Insights</h3>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-8 space-y-4">
<div className="flex gap-3 items-start">
<div className="mt-0.5 bg-emerald-100 w-5 h-5 rounded flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-600 text-[10px]" icon="solar:arrow-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-0.5">Healthy Debt Ratio</h4>
<p className="text-[11px] text-slate-500 leading-relaxed">Your debt takes up less than 15% of your income, which is well below the risky 30% threshold.</p>
</div>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="flex gap-3 items-start">
<div className="mt-0.5 bg-amber-100 w-5 h-5 rounded flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-600 text-xs" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-0.5">Basic Insurance Gap</h4>
<p className="text-[11px] text-slate-500 leading-relaxed">You mentioned not having a hospitalisation plan. A single medical event could wipe out your savings.</p>
</div>
</div>
</div>

<div className="flex justify-between items-end mb-3">
<h3 className="text-sm font-semibold text-slate-900">Risk Management</h3>
<button className="text-[10px] font-medium text-indigo-600 hover:underline" onclick="nav('s-logic')">How is this calculated?</button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-6 space-y-5">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700">Liquidity Health</span>
<span className="text-red-600 font-medium">Weak (2 weeks)</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700">Protection Coverage</span>
<span className="text-amber-600 font-medium">Insufficient</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-amber-400 h-2 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-slate-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe space-y-3">
<button className="w-full bg-slate-900 text-white rounded-full py-3.5 px-4 font-medium text-sm hover:bg-slate-800 transition-colors" onclick="nav('s-actions')">
                    View Action Plan
                </button>
</div>
</div>

<div className="screen bg-slate-900 text-white" id="s-logic">
<div className="flex items-center p-4 border-b border-slate-800">
<button className="p-2 -ml-2 text-slate-400 hover:text-white" onclick="nav('s-report')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="flex-1 text-center font-medium text-sm tracking-tight pr-6">Methodology</div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div>
<h2 className="text-xl font-semibold tracking-tight mb-2">Transparent Logic</h2>
<p className="text-sm text-slate-400">F-FIT uses standard educational benchmarks. Here is how we evaluated your inputs.</p>
</div>
<div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
<h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:wallet-money-linear"></iconify-icon> Emergency Fund
                    </h3>
<p className="text-xs text-slate-400 mb-3">Calculated as: <span className="text-slate-200 font-mono bg-slate-900 px-1 py-0.5 rounded">Liquid Cash ÷ Fixed Monthly Expenses</span></p>
<div className="text-xs text-slate-300 space-y-1 bg-slate-900/50 p-3 rounded-xl">
<p><span className="w-16 inline-block text-emerald-400">Good:</span> &gt; 6 months</p>
<p><span className="w-16 inline-block text-amber-400">Review:</span> 3-6 months</p>
<p><span className="w-16 inline-block text-red-400">Priority:</span> &lt; 3 months</p>
</div>
</div>
<div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
<h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:shield-check-linear"></iconify-icon> CPF &amp; Retirement
                    </h3>
<p className="text-xs text-slate-400 mb-2">Projections assume standard CPF contribution rates based on your age band (currently 20-29), excluding voluntary top-ups. Investment returns are not assumed.</p>
</div>
</div>
</div>


<div className="screen bg-slate-50" id="s-actions">
<div className="flex items-center p-4 bg-white border-b border-slate-100 z-10 sticky top-0">
<button className="p-2 -ml-2 text-slate-400 hover:text-slate-600" onclick="nav('s-report')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="flex-1 text-center font-medium text-sm tracking-tight pr-6">Your Next Steps</div>
</div>
<div className="flex-1 overflow-y-auto p-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Action Plan</h2>
<p className="text-sm text-slate-500 mb-6">Select 1 or 2 manageable steps to start improving your financial fit this week.</p>
<div className="space-y-4 mb-8">

<label className="block relative cursor-pointer group">
<input className="custom-radio peer sr-only" type="checkbox"/>
<div className="bg-white border border-slate-200 rounded-2xl p-4 transition-all hover:border-indigo-300 flex gap-4 shadow-sm">
<div className="w-5 h-5 rounded-full border border-slate-300 mt-0.5 flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors shrink-0">
<iconify-icon className="text-white opacity-0 text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1.5">
<span className="text-[10px] font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wide">High Priority</span>
<span className="text-[10px] text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 15 mins</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Automate $200 to Savings</h3>
<p className="text-xs text-slate-500 leading-relaxed">Set up a monthly auto-transfer via your banking app on payday. This builds your emergency buffer to 3 months.</p>
</div>
</div>
</label>

<label className="block relative cursor-pointer group">
<input className="custom-radio peer sr-only" type="checkbox"/>
<div className="bg-white border border-slate-200 rounded-2xl p-4 transition-all hover:border-indigo-300 flex gap-4 shadow-sm">
<div className="w-5 h-5 rounded-full border border-slate-300 mt-0.5 flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors shrink-0">
<iconify-icon className="text-white opacity-0 text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1.5">
<span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-wide">Knowledge</span>
<span className="text-[10px] text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 10 mins</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Understand MediShield Life</h3>
<p className="text-xs text-slate-500 leading-relaxed">You noted an insurance gap. Learn how your existing basic national coverage works before buying private plans.</p>
<div className="mt-3 pt-3 border-t border-slate-100">
<a className="flex items-center justify-between text-xs text-indigo-600 font-medium hover:text-indigo-700 bg-indigo-50/50 p-2 rounded-lg" href="#">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:document-text-linear"></iconify-icon> Read IFL Guide</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</label>
</div>
</div>
<div className="p-4 bg-white border-t border-slate-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
<button className="w-full bg-indigo-600 text-white rounded-full py-3.5 px-4 font-medium text-sm hover:bg-indigo-700 transition-colors" onclick="nav('s-dashboard')">
                    Commit &amp; Save to Dashboard
                </button>
</div>
</div>


<div className="screen bg-slate-50" id="s-dashboard">
<div className="flex items-center justify-between p-5 bg-white border-b border-slate-100 sticky top-0 z-10">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-indigo-600">FF</span>
</div>
<div className="flex gap-4 items-center">
<button className="text-slate-400 hover:text-slate-600 relative">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold">
                        S
                    </div>
</div>
</div>
<div className="flex-1 overflow-y-auto pb-20">
<div className="p-6">
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Stay on track</h2>
<p className="text-sm text-slate-500">Your resilience journey over time.</p>
</div>

<div className="bg-indigo-600 rounded-2xl p-5 mb-8 shadow-md shadow-indigo-200">
<div className="flex items-center gap-2 mb-2 text-indigo-200">
<iconify-icon icon="solar:calendar-date-linear" width="18"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide font-medium">Check-in</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Did you automate your savings?</h3>
<p className="text-xs text-indigo-100 mb-4 leading-relaxed">It's been 3 days since you committed to setting up a $200 auto-transfer.</p>
<div className="flex gap-2">
<button className="bg-white text-indigo-600 text-xs font-medium px-4 py-2 rounded-xl shadow-sm hover:bg-slate-50">Yes, done!</button>
<button className="bg-indigo-700 text-white border border-indigo-500 text-xs font-medium px-4 py-2 rounded-xl hover:bg-indigo-800">Need help</button>
</div>
</div>

<div className="flex justify-between items-end mb-3">
<h3 className="text-sm font-semibold text-slate-900">Your Progress</h3>
<button className="text-[10px] font-medium text-indigo-600 flex items-center gap-1 hover:underline" onclick="nav('s-history')">View History <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm mb-6">
<div className="flex items-end justify-between h-28 mb-3 gap-3">

<div className="w-full flex flex-col justify-end items-center gap-2 group">
<span className="text-[10px] text-slate-400">Sep</span>
<div className="w-full bg-slate-100 rounded-t-md h-[40%] transition-all"></div>
</div>
<div className="w-full flex flex-col justify-end items-center gap-2 group">
<span className="text-[10px] text-slate-400">Oct</span>
<div className="w-full bg-slate-100 rounded-t-md h-[45%] transition-all"></div>
</div>
<div className="w-full flex flex-col justify-end items-center gap-2 group">
<span className="text-[10px] text-slate-400">Nov</span>
<div className="w-full bg-slate-200 rounded-t-md h-[55%] transition-all"></div>
</div>
<div className="w-full flex flex-col justify-end items-center gap-2 group">
<span className="text-[10px] text-indigo-600 font-semibold">Latest</span>
<div className="w-full bg-indigo-500 rounded-t-md h-[65%] shadow-sm shadow-indigo-200"></div>
</div>
</div>
<div className="flex justify-between border-t border-slate-100 pt-3">
<span className="text-[10px] text-slate-500">Overall Health Score</span>
<span className="text-[10px] font-medium text-emerald-600 flex items-center gap-0.5"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> Improving</span>
</div>
</div>

<h3 className="text-sm font-semibold text-slate-900 mb-3">Active Focus</h3>
<div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center shrink-0 mt-0.5"></div>
<div>
<p className="text-sm font-medium text-slate-900 mb-0.5">Understand MediShield Life</p>
<p className="text-[10px] text-slate-500">Knowledge module • 10 mins</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-slate-100 px-6 py-2 pb-safe flex justify-between items-center z-20">
<button className="p-2 flex flex-col items-center gap-1 text-indigo-600">
<iconify-icon icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="p-2 flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors" onclick="nav('s-history')">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="p-2 flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors" onclick="nav('s-actions')">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Actions</span>
</button>
</div>
</div>

<div className="screen bg-slate-50" id="s-history">
<div className="flex items-center justify-between p-4 bg-white border-b border-slate-100 sticky top-0 z-10">
<div className="font-medium text-sm tracking-tight pl-2">Report History</div>
</div>
<div className="flex-1 overflow-y-auto pb-20 p-4 space-y-4">

<div className="grid grid-cols-2 gap-3 mb-6">
<button className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-indigo-300 transition-colors" onclick="nav('s-pre-call')">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
<iconify-icon className="text-indigo-600" icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700 text-center">Take a new assessment call</span>
</button>
<button className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-indigo-300 transition-colors" onclick="nav('s-edit-inputs')">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="solar:pen-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700 text-center">Edit latest inputs manually</span>
</button>
</div>
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-1 mb-2">Previous Evaluations</h3>

<button className="w-full bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm text-left hover:bg-slate-50 transition-colors" onclick="nav('s-report')">
<div className="bg-indigo-100 text-indigo-700 p-2.5 rounded-xl shrink-0">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-0.5">
<span className="text-sm font-semibold text-slate-900">Latest Report</span>
<span className="text-[10px] text-indigo-600 font-medium bg-indigo-50 px-2 py-0.5 rounded">Current</span>
</div>
<span className="text-xs text-slate-500">Generated Today</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm text-left opacity-70">
<div className="bg-slate-100 text-slate-500 p-2.5 rounded-xl shrink-0">
<iconify-icon icon="solar:document-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-0.5">
<span className="text-sm font-medium text-slate-900">Initial Assessment</span>
</div>
<span className="text-xs text-slate-500">Generated 14 Nov 2023</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-slate-100 px-6 py-2 pb-safe flex justify-between items-center z-20">
<button className="p-2 flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors" onclick="nav('s-dashboard')">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="p-2 flex flex-col items-center gap-1 text-indigo-600">
<iconify-icon icon="solar:document-text-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="p-2 flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors" onclick="nav('s-actions')">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Actions</span>
</button>
</div>
</div>

<div className="screen bg-white" id="s-edit-inputs">
<div className="flex items-center justify-between p-4 border-b border-slate-100">
<button className="text-sm font-medium text-slate-500" onclick="nav('s-history')">Cancel</button>
<div className="font-medium text-sm tracking-tight">Edit Inputs</div>
<button className="text-sm font-medium text-indigo-600" onclick="nav('s-generating')">Update</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
<p className="text-sm text-slate-500 mb-2">Adjust your numbers to generate an updated version of your report without making a call.</p>
<div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 ml-1">Monthly Take-Home Pay</label>
<div className="relative">
<span className="absolute left-4 top-3.5 text-slate-400 text-sm">$</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-medium text-slate-900 transition-shadow" type="number" value="4000"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 ml-1">Monthly Fixed Cash Expenses</label>
<div className="relative">
<span className="absolute left-4 top-3.5 text-slate-400 text-sm">$</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-medium text-slate-900 transition-shadow" type="number" value="2500"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 ml-1">Total Liquid Cash (Savings)</label>
<div className="relative">
<span className="absolute left-4 top-3.5 text-slate-400 text-sm">$</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-medium text-slate-900 transition-shadow" type="number" value="1200"/>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
