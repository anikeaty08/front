import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Progress Bar Logic
        const form = document.getElementById('assessmentForm');
        const progressBar = document.getElementById('progressBar');
        const totalQuestions = 20;

        function updateProgress() {
            // Count how many groups/inputs have a value
            // This is a simplified check for the demo
            let answered = 0;
            // Get all unique names from the form
            const formData = new FormData(form);
            const uniqueNames = new Set();
            for(let pair of formData.entries()) {
                if(pair[0] !== 'user_email') { // Don't count email as a question
                    uniqueNames.add(pair[0]);
                }
            }
            answered = uniqueNames.size;
            
            // Calculate percentage
            // We know roughly how many unique names exist (20 questions)
            const percent = Math.min(100, (answered / totalQuestions) * 100);
            progressBar.style.width = percent + '%';
        }

        form.addEventListener('input', updateProgress);
        form.addEventListener('change', updateProgress);

        // Submission Logic
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const btn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const btnIcon = document.getElementById('btnIcon');
            const loadingIcon = document.getElementById('loadingIcon');

            // UI Loading State
            btn.disabled = true;
            btnText.textContent = "Analyzing Profile...";
            btnIcon.classList.add('hidden');
            loadingIcon.classList.remove('hidden');

            // Collect Data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Add Timestamp
            data.submittedAt = new Date().toISOString();

            try {
                // Mock Backend Call
                // Replace '/api/submit-assessment' with your actual endpoint
                const response = await fetch('/api/submit-assessment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                // Simulate network delay for effect
                await new Promise(resolve => setTimeout(resolve, 1500));

                if (response.ok || true) { // allowing true for demo purposes
                    // Success State
                    btnText.textContent = "Analysis Complete";
                    loadingIcon.classList.add('hidden');
                    btn.classList.replace('bg-indigo-600', 'bg-green-600');
                    
                    // Optional: Redirect or Show Modal
                    alert("Assessment submitted successfully! Check your email for results.");
                    // window.location.href = "/dashboard";
                } else {
                    throw new Error('Submission failed');
                }

            } catch (error) {
                console.error('Error:', error);
                btnText.textContent = "Error. Try Again.";
                btn.disabled = false;
                loadingIcon.classList.add('hidden');
                btnIcon.classList.remove('hidden');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-1 z-[60] bg-neutral-100">
<div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-600 transition-all duration-300" id="progressBar" style={{width: '0%'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all bg-white/80 border-neutral-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 transition-all duration-300 from-cyan-600 to-blue-600 text-white">
<span className="iconify" data-icon="lucide:brain-circuit" data-inline="false" data-width="18"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold tracking-tight leading-none text-neutral-900">Mindful</span>
<span className="text-[10px] font-medium tracking-wide uppercase mt-0.5 text-indigo-600">Academy</span>
</div>
</a>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/50 border border-neutral-200">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-500">Live Assessment</span>
</div>
<button className="hidden sm:flex gap-2 transition-colors hover:text-neutral-900 text-sm font-medium text-neutral-600 items-center">
<span className="iconify" data-icon="lucide:lock" data-width="14"></span>
                    Login
                </button>
</div>
</div>
</nav>

<main className="flex-grow sm:px-6 overflow-hidden pt-32 pr-4 pb-24 pl-4 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b to-transparent -z-10 pointer-events-none from-indigo-50/80"></div>
<div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70 bg-cyan-100/40"></div>
<div className="absolute top-40 left-0 w-72 h-72 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70 bg-blue-100/40"></div>

<div className="animate-fade-in text-center max-w-2xl mx-auto mb-12">
<h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-neutral-900">
                Trading <span className="text-gradient">Psychology</span> Matrix
            </h1>
<p className="text-neutral-500 text-base leading-relaxed max-w-xl mx-auto">
                Complete all 20 questions to generate your detailed trader profile. Our AI will analyze your risk tolerance, emotional resilience, and cognitive biases.
            </p>
</div>

<form className="max-w-2xl mx-auto space-y-6 animate-fade-in" id="assessmentForm" style={{animationDelay: '0.1s'}}>


<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="1">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">1. Time Horizon</h3>
<span className="text-xs font-mono text-neutral-400">01/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">How long can you comfortably hold a position before anxiety sets in?</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q1_horizon" required="" type="radio" value="scalp"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-300 radio-circle flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-transparent radio-dot transition-opacity opacity-0"></div></div>
<span className="text-sm font-medium text-neutral-700">Minutes (Scalping)</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q1_horizon" type="radio" value="day"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-300 radio-circle flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-transparent radio-dot transition-opacity opacity-0"></div></div>
<span className="text-sm font-medium text-neutral-700">Hours (Intraday)</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q1_horizon" type="radio" value="swing"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-300 radio-circle flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-transparent radio-dot transition-opacity opacity-0"></div></div>
<span className="text-sm font-medium text-neutral-700">Days (Swing)</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q1_horizon" type="radio" value="position"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-300 radio-circle flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-transparent radio-dot transition-opacity opacity-0"></div></div>
<span className="text-sm font-medium text-neutral-700">Weeks+ (Position)</span>
</div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="2">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">2. Risk Appetite</h3>
<span className="text-xs font-mono text-neutral-400">02/20</span>
</div>
<p className="text-sm text-neutral-500 mb-6">Balance between capital preservation and aggressive growth.</p>
<input className="range-slider mb-2" max="100" min="0" name="q2_risk" type="range"/>
<div className="flex justify-between text-xs font-medium text-neutral-400">
<span>Safety First</span>
<span>Aggressive Growth</span>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="3">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">3. Reaction to Sudden Loss</h3>
<span className="text-xs font-mono text-neutral-400">03/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">The market drops sharply against you instantly.</p>
<div className="space-y-2">
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q3_reaction" type="radio" value="freeze"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:snowflake" data-width="16"></span>
<span className="text-sm text-neutral-700">I freeze and hope it recovers.</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q3_reaction" type="radio" value="add"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:trending-down" data-width="16"></span>
<span className="text-sm text-neutral-700">I add to the position (average down).</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q3_reaction" type="radio" value="cut"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:scissors" data-width="16"></span>
<span className="text-sm text-neutral-700">I cut immediately based on plan.</span>
</div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="4">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">4. Rule Adherence</h3>
<span className="text-xs font-mono text-neutral-400">04/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">How often do you break your own trading rules?</p>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q4_rules" type="radio" value="often"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center">
<span className="text-sm font-medium text-neutral-700">Often</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q4_rules" type="radio" value="sometimes"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center">
<span className="text-sm font-medium text-neutral-700">Sometimes</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q4_rules" type="radio" value="never"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center">
<span className="text-sm font-medium text-neutral-700">Never</span>
</div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="5">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">5. Preparation</h3>
<span className="text-xs font-mono text-neutral-400">05/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">Do you have a written trading plan for today?</p>
<div className="flex gap-4">
<label className="cursor-pointer flex-1">
<input className="custom-radio sr-only" name="q5_prep" type="radio" value="no"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center transition-all">
<span className="text-sm font-medium text-neutral-700">No, I wing it</span>
</div>
</label>
<label className="cursor-pointer flex-1">
<input className="custom-radio sr-only" name="q5_prep" type="radio" value="yes"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center transition-all">
<span className="text-sm font-medium text-neutral-700">Yes, Detailed</span>
</div>
</label>
</div>
</div>


<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">6. FOMO Sensitivity</h3>
<span className="text-xs font-mono text-neutral-400">06/20</span>
</div>
<p className="text-sm text-neutral-500 mb-6">You see an asset pumping 20% in an hour without you.</p>
<input className="range-slider mb-2" max="100" min="0" name="q6_fomo" type="range"/>
<div className="flex justify-between text-xs font-medium text-neutral-400">
<span>Indifferent</span>
<span>Must Enter Now</span>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="7">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">7. Dealing with Winning Streaks</h3>
<span className="text-xs font-mono text-neutral-400">07/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">After 5 wins in a row, you usually:</p>
<div className="space-y-2">
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q7_streak" type="radio" value="confidence"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:trophy" data-width="16"></span>
<span className="text-sm text-neutral-700">Increase size (Overconfidence)</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q7_streak" type="radio" value="caution"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:shield" data-width="16"></span>
<span className="text-sm text-neutral-700">Decrease size (Expect pullback)</span>
</div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">8. Revenge Trading</h3>
<span className="text-xs font-mono text-neutral-400">08/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">After a bad loss, do you try to make it back immediately?</p>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q8_revenge" type="radio" value="yes"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">Usually Yes</span></div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q8_revenge" type="radio" value="no"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">I walk away</span></div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="9">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">9. Sleep Quality</h3>
<span className="text-xs font-mono text-neutral-400">09/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">Do open positions affect your sleep?</p>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q9_sleep" type="radio" value="bad"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">Yes, I wake up to check</span></div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q9_sleep" type="radio" value="good"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">No, I sleep soundly</span></div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="10">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">10. Information Processing</h3>
<span className="text-xs font-mono text-neutral-400">10/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">How do you make trading decisions?</p>
<div className="space-y-2">
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q10_info" type="radio" value="gut"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:heart-pulse" data-width="16"></span>
<span className="text-sm text-neutral-700">Mostly Gut Feeling</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q10_info" type="radio" value="data"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:bar-chart-2" data-width="16"></span>
<span className="text-sm text-neutral-700">Strictly Data / Systems</span>
</div>
</label>
</div>
</div>


<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="11">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">11. Stop Losses</h3>
<span className="text-xs font-mono text-neutral-400">11/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">What is your relationship with Stop Losses?</p>
<div className="space-y-2">
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q11_stop" type="radio" value="hard"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="text-sm text-neutral-700">Hard stop in system always</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q11_stop" type="radio" value="mental"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="text-sm text-neutral-700">"Mental" stops (manual exit)</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q11_stop" type="radio" value="none"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="text-sm text-neutral-700">I don't use stops</span>
</div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="12">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">12. Journaling</h3>
<span className="text-xs font-mono text-neutral-400">12/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">Do you keep a trading journal?</p>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q12_journal" type="radio" value="yes"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">Yes, consistently</span></div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q12_journal" type="radio" value="no"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">No / Rarely</span></div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="13">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">13. Leverage Usage</h3>
<span className="text-xs font-mono text-neutral-400">13/20</span>
</div>
<p className="text-sm text-neutral-500 mb-6">How much leverage do you typically use relative to your account?</p>
<input className="range-slider mb-2" max="100" min="1" name="q13_leverage" type="range"/>
<div className="flex justify-between text-xs font-medium text-neutral-400">
<span>1:1 (Spot)</span>
<span>100:1 (Degen)</span>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="14">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">14. Profit Taking</h3>
<span className="text-xs font-mono text-neutral-400">14/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">Your usual exit behavior on winning trades:</p>
<div className="space-y-2">
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q14_profit" type="radio" value="early"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="text-sm text-neutral-700">Too early (fear of reversal)</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q14_profit" type="radio" value="target"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="text-sm text-neutral-700">At pre-determined target</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q14_profit" type="radio" value="late"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="text-sm text-neutral-700">Too late (greed for more)</span>
</div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="15">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">15. Analysis Paralysis</h3>
<span className="text-xs font-mono text-neutral-400">15/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">Do you hesitate when your setup appears?</p>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q15_hesitate" type="radio" value="yes"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">Yes, often</span></div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q15_hesitate" type="radio" value="no"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">No, I execute</span></div>
</label>
</div>
</div>


<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="16">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">16. Financial Dependence</h3>
<span className="text-xs font-mono text-neutral-400">16/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">Is trading your primary income source?</p>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q16_income" type="radio" value="full"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">Yes (Full Time)</span></div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q16_income" type="radio" value="part"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">No (Side Hustle)</span></div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="17">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">17. News Influence</h3>
<span className="text-xs font-mono text-neutral-400">17/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">When big news hits (CPI, NFP), you:</p>
<div className="space-y-2">
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q17_news" type="radio" value="avoid"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="text-sm text-neutral-700">Stay out (Avoid volatility)</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q17_news" type="radio" value="trade"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="text-sm text-neutral-700">Trade the volatility</span>
</div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="18">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">18. Social Influence</h3>
<span className="text-xs font-mono text-neutral-400">18/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">Do you follow "calls" from Twitter/Telegram/Discord?</p>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q18_social" type="radio" value="yes"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">Yes, frequently</span></div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q18_social" type="radio" value="no"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">No, I trade alone</span></div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="19">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">19. Drawdown Tolerance</h3>
<span className="text-xs font-mono text-neutral-400">19/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">What % loss of total account causes you to panic?</p>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q19_dd" type="radio" value="low"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">5%</span></div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q19_dd" type="radio" value="med"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">20%</span></div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="q19_dd" type="radio" value="high"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-center"><span className="text-sm font-medium text-neutral-700">50%+</span></div>
</label>
</div>
</div>

<div className="question-card rounded-2xl border bg-white border-neutral-200 shadow-sm p-6 sm:p-8" data-question="20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-semibold text-neutral-900">20. Primary Motivation</h3>
<span className="text-xs font-mono text-neutral-400">20/20</span>
</div>
<p className="text-sm text-neutral-500 mb-4">Why are you really doing this?</p>
<div className="space-y-2">
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q20_goal" type="radio" value="money"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:banknote" data-width="16"></span>
<span className="text-sm text-neutral-700">Fast Money / Luxury</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q20_goal" type="radio" value="freedom"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:plane" data-width="16"></span>
<span className="text-sm text-neutral-700">Time &amp; Location Freedom</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio sr-only" name="q20_goal" type="radio" value="mastery"/>
<div className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:swords" data-width="16"></span>
<span className="text-sm text-neutral-700">Challenge &amp; Mastery</span>
</div>
</label>
</div>
</div>

<div className="rounded-2xl border bg-indigo-50/50 border-indigo-100 p-6 sm:p-8">
<h3 className="text-sm font-semibold text-indigo-900 mb-2">Final Step</h3>
<p className="text-xs text-indigo-700 mb-4">Enter your email to attach these results to your profile.</p>
<input className="w-full bg-white border border-indigo-200 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 outline-none placeholder:text-neutral-400" name="user_email" placeholder="name@example.com" required="" type="email"/>
</div>

<div className="pt-6 pb-12">
<button className="w-full relative overflow-hidden rounded-xl shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 group text-white bg-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed" id="submitBtn" type="submit">
<div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-indigo-500 to-purple-600"></div>
<div className="relative px-6 py-4 flex items-center justify-center gap-3">
<span className="text-sm font-semibold tracking-wide" id="btnText">Generate Profile Analysis</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18" id="btnIcon"></span>
<span className="hidden iconify animate-spin" data-icon="lucide:loader-2" data-width="18" id="loadingIcon"></span>
</div>
</button>
</div>
</form>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded flex items-center justify-center bg-neutral-100 text-neutral-400">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="14"></span>
</div>
<p className="text-xs font-medium text-neutral-400">© 2023 Mindful Trading Academy</p>
</div>
<div className="flex items-center gap-6">
<a className="transition-colors text-xs font-medium text-neutral-400 hover:text-indigo-600" href="#">Privacy</a>
<a className="transition-colors text-xs font-medium text-neutral-400 hover:text-indigo-600" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
