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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        // Application State
        const state = {
            step: 0,
            scores: {
                layer1: 0,
                layer2: 0,
                layer3: 0,
                reviews: 0,
                payments: 0,
                referrals: 0
            }
        };

        // Questions Data
        const questions = [
            {
                id: 'intro',
                text: "Answer a few quick questions to see where your business is losing time and money (under 2 minutes).",
                type: 'intro',
                button: "Start Diagnosis"
            },
            {
                id: 'q1',
                text: "When a new lead contacts your business, do you respond immediately?",
                options: [
                    { label: "Yes, almost always", score: 0, cat: 'layer1' },
                    { label: "Sometimes", score: 1, cat: 'layer1' },
                    { label: "No, often takes too long", score: 2, cat: 'layer1' }
                ]
            },
            {
                id: 'q2',
                text: "Do you miss calls or messages when you’re busy or after hours?",
                options: [
                    { label: "Yes", score: 2, cat: 'layer1' },
                    { label: "Sometimes", score: 1, cat: 'layer1' },
                    { label: "No", score: 0, cat: 'layer1' }
                ]
            },
            {
                id: 'q3',
                text: "Do leads contact you through more than one channel?",
                options: [
                    { label: "Yes (phone, Instagram, Google, etc.)", score: 1, cat: 'layer1' },
                    { label: "Only one channel", score: 0, cat: 'layer1' },
                    { label: "I’m not sure", score: 1, cat: 'layer1' }
                ]
            },
            {
                id: 'q4',
                text: "Do you spend time with people who never end up buying?",
                options: [
                    { label: "Yes, a lot", score: 2, cat: 'layer2' },
                    { label: "Sometimes", score: 1, cat: 'layer2' },
                    { label: "No", score: 0, cat: 'layer2' }
                ]
            },
            {
                id: 'q5',
                text: "What usually happens after you send a quote?",
                options: [
                    { label: "They close quickly", score: 0, cat: 'layer2' },
                    { label: "I need to chase them", score: 1, cat: 'layer2' },
                    { label: "Many disappear", score: 2, cat: 'layer2' },
                    { label: "I don’t follow up", score: 2, cat: 'layer2' }
                ]
            },
            {
                id: 'q6',
                text: "Do you have an automatic way to schedule calls or appointments?",
                options: [
                    { label: "Yes", score: 0, cat: 'layer2' },
                    { label: "No", score: 2, cat: 'layer2' }
                ]
            },
            {
                id: 'q7',
                text: "Do you actively contact past clients to bring them back?",
                options: [
                    { label: "Yes", score: 0, cat: 'layer3' },
                    { label: "Sometimes", score: 1, cat: 'layer3' },
                    { label: "No", score: 2, cat: 'layer3' }
                ]
            },
            {
                id: 'q8',
                text: "Does your business depend mostly on new leads to make money?",
                options: [
                    { label: "Yes", score: 2, cat: 'layer3' },
                    { label: "Mostly", score: 1, cat: 'layer3' },
                    { label: "No", score: 0, cat: 'layer3' }
                ]
            },
            {
                id: 'q9',
                text: "Do you remind customers about repeat services or maintenance?",
                options: [
                    { label: "Yes", score: 0, cat: 'layer3' },
                    { label: "No", score: 2, cat: 'layer3' }
                ]
            },
            {
                id: 'q10',
                text: "Do online reviews help you close more deals?",
                options: [
                    { label: "Yes", score: 2, cat: 'reviews' },
                    { label: "Not really", score: 0, cat: 'reviews' },
                    { label: "I’m not sure", score: 1, cat: 'reviews' }
                ]
            },
            {
                id: 'q11',
                text: "Do clients ever delay payments?",
                options: [
                    { label: "Yes", score: 2, cat: 'payments' },
                    { label: "Sometimes", score: 1, cat: 'payments' },
                    { label: "No", score: 0, cat: 'payments' }
                ]
            },
            {
                id: 'q12',
                text: "Do customers frequently refer new clients to you?",
                options: [
                    { label: "Yes", score: 0, cat: 'referrals' },
                    { label: "Rarely", score: 1, cat: 'referrals' },
                    { label: "No", score: 2, cat: 'referrals' }
                ]
            }
        ];

        // Functions
        function openDiagnosis() {
            state.step = 0;
            state.scores = { layer1:0, layer2:0, layer3:0, reviews:0, payments:0, referrals:0 };
            document.getElementById('diagnosis-modal').classList.remove('hidden');
            renderStep();
        }

        function closeModal() {
            document.getElementById('diagnosis-modal').classList.add('hidden');
        }

        function handleAnswer(score, category) {
            // Update score
            if (category) {
                state.scores[category] += score;
            }
            // Move next
            state.step++;
            renderStep();
        }

        function renderStep() {
            const container = document.getElementById('modal-content');
            const progressContainer = document.getElementById('progress-container');
            const progressBar = document.getElementById('progress-bar');
            
            // Handle Intro
            if (state.step === 0) {
                progressContainer.classList.add('hidden');
                const q = questions[0];
                container.innerHTML = `
                    <div class="text-center animate-in fade-in zoom-in duration-300">
                        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i data-lucide="clipboard-list" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-2xl font-semibold mb-4 tracking-tight text-slate-900">Business Automation Diagnosis</h3>
                        <p class="text-slate-500 mb-8">${q.text}</p>
                        <button onclick="handleAnswer(0, null)" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/10">
                            ${q.button}
                        </button>
                    </div>
                `;
                lucide.createIcons();
                return;
            }

            // Handle Questions
            if (state.step <= 12) {
                progressContainer.classList.remove('hidden');
                // Calculate percentage (12 questions total)
                const pct = ((state.step - 1) / 12) * 100;
                progressBar.style.width = `${pct}%`;

                const q = questions[state.step];
                let buttonsHtml = '';
                
                q.options.forEach(opt => {
                    buttonsHtml += `
                        <button onclick="handleAnswer(${opt.score}, '${opt.cat}')" class="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all font-medium text-slate-700 hover:text-blue-700 mb-3 group flex justify-between items-center">
                            <span>${opt.label}</span>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                        </button>
                    `;
                });

                container.innerHTML = `
                    <div class="animate-in slide-in-from-right-8 fade-in duration-300">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Question ${state.step} of 12</span>
                        <h3 class="text-xl font-semibold mb-8 text-slate-900 leading-snug">${q.text}</h3>
                        <div class="space-y-2">
                            ${buttonsHtml}
                        </div>
                    </div>
                `;
                lucide.createIcons();
                return;
            }

            // Handle Results
            if (state.step > 12) {
                renderResults(container, progressContainer);
            }
        }

        function renderResults(container, progressContainer) {
            progressContainer.classList.add('hidden');

            const s = state.scores;
            let recommendations = '';

            // Logic Rules
            const layer1Rec = true; // Always
            const layer2Rec = s.layer2 >= 2;
            const layer3Rec = s.layer3 >= 2;
            
            // Add-ons
            const showReviews = s.reviews >= 1;
            const showPayments = s.payments >= 1;
            const showReferrals = s.referrals >= 1;

            // HTML Generator Helper
            const itemHtml = (title, desc, type) => `
                <div class="flex gap-3 items-start p-3 bg-slate-50 rounded-lg border border-slate-100 mb-3">
                    <div class="mt-1 ${type === 'core' ? 'text-green-600' : 'text-blue-600'}">
                        <i data-lucide="${type === 'core' ? 'check-circle-2' : 'arrow-up-circle'}" class="w-5 h-5"></i>
                    </div>
                    <div class="text-left">
                        <div class="font-semibold text-sm text-slate-900">${title}</div>
                        <div class="text-xs text-slate-500 mt-0.5">${desc}</div>
                    </div>
                </div>
            `;

            recommendations += itemHtml("Capture & Speed (Layer 1)", "Mandatory foundation. Stop missing leads.", "core");
            
            if (layer2Rec) recommendations += itemHtml("Qualification & Closing (Layer 2)", "You have high lead-waste or follow-up issues.", "rec");
            else recommendations += `<div class="p-3 mb-3 text-xs text-slate-400 text-left italic border border-dashed border-slate-200 rounded-lg">Layer 2 not urgent right now.</div>`;

            if (layer3Rec) recommendations += itemHtml("Recovery & Recurrence (Layer 3)", "You are leaving past revenue on the table.", "rec");
            
            let addonsHtml = '';
            if (showReviews) addonsHtml += `<span class="inline-block px-2 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-bold uppercase tracking-wider rounded border border-yellow-100 mr-2">Reviews</span>`;
            if (showPayments) addonsHtml += `<span class="inline-block px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded border border-green-100 mr-2">Payments</span>`;
            if (showReferrals) addonsHtml += `<span class="inline-block px-2 py-1 bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wider rounded border border-purple-100">Referrals</span>`;

            if (addonsHtml) {
                recommendations += `
                <div class="mt-4 text-left border-t border-slate-100 pt-3">
                    <p class="text-xs text-slate-400 mb-2">Recommended Add-ons:</p>
                    <div>${addonsHtml}</div>
                </div>`;
            }

            container.innerHTML = `
                <div class="animate-in zoom-in fade-in duration-500">
                    <div class="text-center mb-6">
                        <h3 class="text-2xl font-semibold text-slate-900">Your Automation Diagnosis</h3>
                        <p class="text-sm text-slate-500 mt-2">Based on your answers, here is what your business needs:</p>
                    </div>

                    <div class="bg-white mb-6 max-h-[250px] overflow-y-auto">
                        ${recommendations}
                    </div>

                    <div class="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                        <div class="flex gap-2 items-center mb-2">
                            <i data-lucide="trending-up" class="w-4 h-4 text-blue-600"></i>
                            <span class="text-xs font-bold text-blue-700 uppercase">Estimated Impact</span>
                        </div>
                        <p class="text-xs text-blue-900 leading-relaxed">
                            Implementing these systems typically results in meaningful improvements in lead capture speed, close rates, and revenue recovery.
                        </p>
                    </div>

                    <p class="text-[10px] text-slate-400 mb-6 text-center">
                        *These results are estimates based on common business patterns.
                    </p>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-slate-900 mb-2">Ready to automate this?</div>
                        <div class="grid grid-cols-2 gap-3">
                            <a href="tel:+16505150425" class="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-2 rounded-lg transition-all text-sm">
                                <i data-lucide="phone" class="w-4 h-4"></i> Call Now
                            </a>
                            <a href="sms:+16505150425" class="flex items-center justify-center gap-2 w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3 px-2 rounded-lg transition-all text-sm">
                                <i data-lucide="message-square" class="w-4 h-4"></i> Text Me
                            </a>
                        </div>
                        <div class="text-[10px] text-green-600 font-medium pt-1">⚡ Fast response via text message</div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }
    
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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="box"></i>
<span className="font-bold tracking-tighter text-lg uppercase">Virtus System</span>
</div>
<div className="flex items-center gap-4 md:gap-6">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="tel:+16505150425">
<i className="w-4 h-4" data-lucide="phone"></i>
                    +1 (650) 515-0425
                </a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-medium py-2 px-4 rounded-full transition-all flex items-center gap-2" href="sms:+16505150425">
<i className="w-4 h-4" data-lucide="message-square"></i>
<span>Text Me</span>
</a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 border-b border-slate-100 relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Systemize the Stress. Automate Success.
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                Everything is manual.<br/>
<span className="text-slate-400">You are tired of doing everything.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Stop losing leads, close more services, and get paid faster without hiring new staff. We build the systems so you can regain control.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-blue-900/10 transition-all text-center flex items-center justify-center gap-2" href="tel:+16505150425">
<i className="w-4 h-4" data-lucide="phone"></i>
                    Call Now
                </a>
<button className="w-full md:w-auto bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium py-3 px-8 rounded-lg transition-all text-center flex items-center justify-center gap-2" onclick="openDiagnosis()">
<i className="w-4 h-4" data-lucide="activity"></i>
                    Discover Where You’re Losing Money
                </button>
</div>
<div className="mt-8 flex flex-col items-center justify-center gap-2 text-xs text-slate-400">
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="message-square"></i>
<span>Fastest response via Text: +1 (650) 515-0425</span>
</div>
</div>
</div>
</header>

<section className="py-20 bg-slate-50 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">The Manual Trap</h2>
<div className="grid gap-6">

<div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
<i className="w-6 h-6" data-lucide="user-x"></i>
</div>
<div>
<h3 className="font-semibold text-lg mb-1">Everything depends on you</h3>
<p className="text-slate-500 text-sm">If you stop working, the business stops. You are the bottleneck for every quote, reply, and invoice.</p>
</div>
</div>

<div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
<i className="w-6 h-6" data-lucide="message-square-off"></i>
</div>
<div>
<h3 className="font-semibold text-lg mb-1">Leads are slipping away</h3>
<p className="text-slate-500 text-sm">Calls go to voicemail. Messages sit unread for hours. By the time you reply, they've hired someone else.</p>
</div>
</div>

<div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
<i className="w-6 h-6" data-lucide="banknote"></i>
</div>
<div>
<h3 className="font-semibold text-lg mb-1">Money left on the table</h3>
<p className="text-slate-500 text-sm">Quotes die without follow-up. Past clients are forgotten. You are losing revenue that is already yours.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Not a tool. A System.</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Virtus System isn't software you have to learn. It is an infrastructure we build for you to recapture lost time and revenue.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="border border-slate-200 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-200 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
<div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-green-600">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div className="text-xs font-bold text-green-600 tracking-wide uppercase mb-2">Layer 1 (Mandatory)</div>
<h3 className="text-xl font-semibold mb-3">Capture &amp; Speed</h3>
<p className="text-sm text-slate-500 mb-6">Speed to Lead Multichannel. Missed call text-back, instant auto-replies on IG/FB/Google.</p>
<div className="text-xs font-medium text-slate-900 border-t border-slate-100 pt-4">
                        Problem Solved: <span className="text-slate-500 font-normal">Leads get a response in seconds, you stop losing sales.</span>
</div>
<button className="mt-6 w-full py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" onclick="openDiagnosis()">See Requirements</button>
</div>

<div className="border border-slate-200 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-200 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
<div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600">
<i className="w-5 h-5" data-lucide="filter"></i>
</div>
<div className="text-xs font-bold text-blue-600 tracking-wide uppercase mb-2">Layer 2</div>
<h3 className="text-xl font-semibold mb-3">Qualification &amp; Closing</h3>
<p className="text-sm text-slate-500 mb-6">Smart Qualification Engine. Chatbots, price filters, auto-scheduling, quote follow-ups.</p>
<div className="text-xs font-medium text-slate-900 border-t border-slate-100 pt-4">
                        Problem Solved: <span className="text-slate-500 font-normal">Only qualified leads reach you and quotes don't die.</span>
</div>
<button className="mt-6 w-full py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" onclick="openDiagnosis()">See Requirements</button>
</div>

<div className="border border-slate-200 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-200 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
<div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 text-red-600">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<div className="text-xs font-bold text-red-600 tracking-wide uppercase mb-2">Layer 3</div>
<h3 className="text-xl font-semibold mb-3">Recovery &amp; Recurrence</h3>
<p className="text-sm text-slate-500 mb-6">Revenue Recovery Engine. Win-back campaigns, maintenance reminders, reactivation.</p>
<div className="text-xs font-medium text-slate-900 border-t border-slate-100 pt-4">
                        Problem Solved: <span className="text-slate-500 font-normal">Hidden money from old clients starts coming back.</span>
</div>
<button className="mt-6 w-full py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" onclick="openDiagnosis()">See Requirements</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center">Implementation Process</h2>
<div className="space-y-12 relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -ml-px hidden md:block"></div>

<div className="relative md:flex md:justify-between items-center group">
<div className="md:w-[45%] md:text-right mb-4 md:mb-0 order-1">
<h3 className="text-xl font-semibold">Analyze your business</h3>
<p className="text-slate-400 text-sm mt-2">We identify exactly where the leaks are in your current manual process.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-800 border-2 border-blue-500 z-10 -translate-x-1/2 flex items-center justify-center text-xs font-bold">1</div>
<div className="md:w-[45%] order-2"></div>

<div className="pl-12 md:hidden"></div>
</div>

<div className="relative md:flex md:justify-between items-center group">
<div className="md:w-[45%] order-1"></div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-blue-500 transition-colors z-10 -translate-x-1/2 flex items-center justify-center text-xs font-bold">2</div>
<div className="md:w-[45%] md:text-left mb-4 md:mb-0 order-2 pl-12 md:pl-0">
<h3 className="text-xl font-semibold">Build your automation system</h3>
<p className="text-slate-400 text-sm mt-2">We configure the flows, messages, and triggers tailored to your voice.</p>
</div>
</div>

<div className="relative md:flex md:justify-between items-center group">
<div className="md:w-[45%] md:text-right mb-4 md:mb-0 order-1">
<h3 className="text-xl font-semibold">Launch and monitor</h3>
<p className="text-slate-400 text-sm mt-2">We turn it on. You start seeing faster responses and qualified leads instantly.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-blue-500 transition-colors z-10 -translate-x-1/2 flex items-center justify-center text-xs font-bold">3</div>
<div className="md:w-[45%] order-2"></div>
<div className="pl-12 md:hidden"></div>
</div>

<div className="relative md:flex md:justify-between items-center group">
<div className="md:w-[45%] order-1"></div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-blue-500 transition-colors z-10 -translate-x-1/2 flex items-center justify-center text-xs font-bold">4</div>
<div className="md:w-[45%] md:text-left mb-4 md:mb-0 order-2 pl-12 md:pl-0">
<h3 className="text-xl font-semibold">Run with less work</h3>
<p className="text-slate-400 text-sm mt-2">Your business operates 24/7. You step back and focus on growth.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Why this works</h2>
<div className="grid sm:grid-cols-2 gap-8">
<div className="flex gap-3">
<i className="w-5 h-5 text-blue-600 shrink-0 mt-1" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-semibold text-slate-900">Systems, not tools</h4>
<p className="text-sm text-slate-500 mt-1">We don't give you a login and wish you luck. We build the infrastructure.</p>
</div>
</div>
<div className="flex gap-3">
<i className="w-5 h-5 text-blue-600 shrink-0 mt-1" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-semibold text-slate-900">Designed for Owners</h4>
<p className="text-sm text-slate-500 mt-1">Built to reduce your stress and increase your control, not your workload.</p>
</div>
</div>
<div className="flex gap-3">
<i className="w-5 h-5 text-blue-600 shrink-0 mt-1" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-semibold text-slate-900">Works 24/7</h4>
<p className="text-sm text-slate-500 mt-1">Automation doesn't sleep, call in sick, or forget to follow up.</p>
</div>
</div>
<div className="flex gap-3">
<i className="w-5 h-5 text-blue-600 shrink-0 mt-1" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-semibold text-slate-900">Scales without hiring</h4>
<p className="text-sm text-slate-500 mt-1">Handle 10 leads or 100 leads with the same amount of effort.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-slate-100">
<div className="max-w-4xl mx-auto">

<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">How Pricing Works</h2>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                    Automation is not a fixed product. Pricing depends on your business, not on a generic package.
                </p>
</div>

<div className="grid md:grid-cols-2 gap-12 items-start">

<div>
<h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="sliders-horizontal"></i>
                        The Variables
                    </h3>
<p className="text-sm text-slate-500 mb-6">
                        We don't offer cookie-cutter plans because no two businesses operate exactly the same way. Your investment is calculated based on:
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 p-1 bg-slate-100 rounded text-slate-600">
<i className="w-3 h-3" data-lucide="bar-chart-3"></i>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Volume of Leads</span>
<span className="block text-xs text-slate-500">How many contacts need processing per month.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 p-1 bg-slate-100 rounded text-slate-600">
<i className="w-3 h-3" data-lucide="share-2"></i>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Communication Channels</span>
<span className="block text-xs text-slate-500">Connecting SMS, Email, Instagram, Facebook, or Google.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 p-1 bg-slate-100 rounded text-slate-600">
<i className="w-3 h-3" data-lucide="git-branch"></i>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Workflow Complexity</span>
<span className="block text-xs text-slate-500">From simple auto-replies to complex multi-step qualifications.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 p-1 bg-slate-100 rounded text-slate-600">
<i className="w-3 h-3" data-lucide="layers"></i>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">System Depth</span>
<span className="block text-xs text-slate-500">Which layers (Core, Growth, Revenue) are implemented.</span>
</div>
</li>
</ul>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="cpu"></i>
                        System Components
                    </h3>
<div className="space-y-6 relative">

<div className="absolute left-4 top-4 bottom-4 w-px bg-slate-100"></div>

<div className="relative flex gap-4">
<div className="relative z-10 w-8 h-8 rounded-full bg-green-50 border border-green-100 text-green-600 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Core Automation System</h4>
<p className="text-xs text-slate-500 mt-1">This is the foundation. Every business starts here.</p>
</div>
</div>

<div className="relative flex gap-4">
<div className="relative z-10 w-8 h-8 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Growth Automation System</h4>
<p className="text-xs text-slate-500 mt-1">For businesses that want better leads and higher close rates.</p>
</div>
</div>

<div className="relative flex gap-4">
<div className="relative z-10 w-8 h-8 rounded-full bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Revenue Optimization System</h4>
<p className="text-xs text-slate-500 mt-1">For businesses that want predictable revenue without relying only on new leads.</p>
</div>
</div>

<div className="relative flex gap-4">
<div className="relative z-10 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Optional Add-ons</h4>
<p className="text-xs text-slate-500 mt-1">Enhancements added only after the core system is live.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center border-t border-slate-100 pt-10">
<p className="text-slate-600 font-medium mb-8">
                    The goal is not to sell automation.<br/>
                    The goal is to build the right system for your business.
                </p>
<button className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-lg transition-all w-full md:w-auto shadow-lg shadow-slate-900/10" onclick="openDiagnosis()">
                    Get Your Automation Plan
                </button>
<p className="text-xs text-slate-400 mt-4">Diagnosis takes less than 2 minutes</p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50">
<div className="max-w-3xl mx-auto text-center">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-sm">
<i className="w-6 h-6 text-slate-900" data-lucide="shield"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-4">Virtus means strength and excellence.</h2>
<p className="text-slate-500 mb-8">We exist to give business owners control over their time and revenue. We don't just fix technology; we fix the stress of running a business manually.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="https://www.instagram.com/virtussystem/" target="_blank">
<i className="w-4 h-4" data-lucide="instagram"></i>
                Follow us on Instagram
            </a>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-lg p-4 open:ring-1 open:ring-blue-100">
<summary className="font-medium cursor-pointer list-none flex justify-between items-center text-slate-900">
                        Does this work for my business?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="text-sm text-slate-500 mt-3 leading-relaxed">If you receive leads via phone, form, or message and you manually reply to them, yes. It works for any service-based business.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-lg p-4 open:ring-1 open:ring-blue-100">
<summary className="font-medium cursor-pointer list-none flex justify-between items-center text-slate-900">
                        Do I need technical knowledge?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="text-sm text-slate-500 mt-3 leading-relaxed">Zero. We build the system, install it, and manage it. You just handle the qualified customers.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-lg p-4 open:ring-1 open:ring-blue-100">
<summary className="font-medium cursor-pointer list-none flex justify-between items-center text-slate-900">
                        How fast can this be implemented?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="text-sm text-slate-500 mt-3 leading-relaxed">Core systems (Layer 1) can be live in as little as 3-5 days after we analyze your business.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-lg p-4 open:ring-1 open:ring-blue-100">
<summary className="font-medium cursor-pointer list-none flex justify-between items-center text-slate-900">
                        Is it custom?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="text-sm text-slate-500 mt-3 leading-relaxed">The infrastructure is proven, but the messaging, offers, and qualification rules are 100% tailored to your business.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-lg p-4 open:ring-1 open:ring-blue-100">
<summary className="font-medium cursor-pointer list-none flex justify-between items-center text-slate-900">
                        What happens after I contact you?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="text-sm text-slate-500 mt-3 leading-relaxed">We schedule a brief call to see your current process. If we can help, we propose a system plan.</p>
</details>
</div>
</div>
</section>

<footer className="py-24 px-6 bg-slate-900 text-white text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Stop running your business manually.</h2>
<p className="text-slate-400 text-lg mb-10">You already know the problem. Now let's fix it.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 px-10 rounded-lg transition-colors flex items-center justify-center gap-2" href="tel:+16505150425">
<i className="w-5 h-5" data-lucide="phone"></i>
                    Call Now
                </a>
<a className="w-full sm:w-auto bg-transparent border border-slate-700 hover:bg-slate-800 text-white font-medium py-4 px-10 rounded-lg transition-colors flex items-center justify-center gap-2" href="sms:+16505150425">
<i className="w-5 h-5" data-lucide="message-square"></i>
                    Text Me
                </a>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-green-400 font-medium opacity-80">
<i className="w-3 h-3" data-lucide="zap"></i>
<span>Fast response via text message</span>
</div>
<div className="mt-12 pt-12 border-t border-slate-800 text-xs text-slate-600">
                © 2023 Virtus System. All rights reserved. <br/>
                +1 (650) 515-0425
            </div>
</div>
</footer>

<div aria-modal="true" className="hidden fixed inset-0 z-50 overflow-y-auto no-scrollbar" id="diagnosis-modal">

<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="flex min-h-full items-center justify-center p-4 text-center">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all w-full max-w-lg border border-slate-100">

<div className="hidden h-1.5 w-full bg-slate-100" id="progress-container">
<div className="h-full bg-blue-600 transition-all duration-300 ease-out" id="progress-bar" style={{width: '0%'}}></div>
</div>

<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 z-10 p-2" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>

<div className="p-8 md:p-10 min-h-[400px] flex flex-col justify-center" id="modal-content">

</div>
</div>
</div>
</div>



    </>
  );
}
