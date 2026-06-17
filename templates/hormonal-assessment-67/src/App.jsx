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



                        const symptomsQs = [
                            { id: 'q5', text: 'Q5. Do you experience hot flashes or sudden feelings of heat?', opts: ['Not at all', 'Rarely', 'Sometimes', 'Often'] },
                            { id: 'q6', text: 'Q6. Do you experience night sweats?', opts: ['Not at all', 'Rarely', 'Sometimes', 'Often'] },
                            { id: 'q7', text: 'Q7. Do you experience sleep difficulties or insomnia?', opts: ['Not at all', 'Rarely', 'Sometimes', 'Often'] },
                            { id: 'q8', text: 'Q8. Have you noticed mood changes, irritability, or emotional ups and downs?', opts: ['Not at all', 'Rarely', 'Sometimes', 'Often'] },
                            { id: 'q9', text: 'Q9. Do you feel fatigue, low energy, or difficulty concentrating?', opts: ['Not at all', 'Rarely', 'Sometimes', 'Often'] },
                            { id: 'q10', text: 'Q10. Do you experience headaches, palpitations, or episodes of dizziness?', opts: ['Not at all', 'Rarely', 'Sometimes', 'Often'] },
                            { id: 'q11', text: 'Q11. Have you noticed vaginal dryness or intimate discomfort?', opts: ['Not at all', 'Mild', 'Moderate', 'Severe'] },
                            { id: 'q12', text: 'Q12. Has your sexual desire decreased compared with the past?', opts: ['Not at all', 'Slightly', 'Moderately', 'Significantly'] },
                            { id: 'q13', text: 'Q13. Have you experienced joint pain or increased stiffness?', opts: ['Not at all', 'Rarely', 'Sometimes', 'Often'] },
                            { id: 'q14', text: 'Q14. Have you noticed changes such as weight gain, hair thinning, or dry skin?', opts: ['Not at all', 'One of these', 'Two of these', 'Three or more'] },
                            { id: 'q15', text: 'Q15. Do you experience urinary frequency, incontinence, or urinary discomfort?', opts: ['Not at all', 'Mild', 'Moderate', 'Severe'] },
                            { id: 'q16', text: 'Q16. Do you experience breast tenderness or breast pain?', opts: ['Not at all', 'Rarely', 'Sometimes', 'Often'] }
                        ];

                        symptomsQs.forEach(q => {
                            document.write(`
                                <div class="question-group" data-id="${q.id}">
                                    <label class="block text-sm font-medium text-gray-900 mb-3">${q.text}</label>
                                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        ${q.opts.map((opt, i) => `
                                            <label class="relative cursor-pointer group">
                                                <input type="radio" name="${q.id}" value="${opt}" data-score="${i}" class="custom-radio-input">
                                                <div class="custom-radio-label flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 text-center h-full">
                                                    <span class="text-sm">${opt}</span>
                                                </div>
                                            </label>
                                        `).join('')}
                                    </div>
                                </div>
                            `);
                        });
                    


        document.addEventListener('DOMContentLoaded', () => {
            const steps = [
                { id: 'step-1', range: [1, 4] },
                { id: 'step-2', range: [5, 16] },
                { id: 'step-3', range: [17, 19] }
            ];
            
            let currentStepIndex = 0;
            const form = document.getElementById('assessment-form');
            const btnNext = document.getElementById('btn-next');
            const btnPrev = document.getElementById('btn-prev');
            const btnSubmit = document.getElementById('btn-submit');
            const errorMsg = document.getElementById('error-msg');
            const introSection = document.getElementById('intro-section');
            const resultsSection = document.getElementById('results-section');

            function updateNavigation() {
                errorMsg.classList.add('hidden');
                
                // Hide all steps, show current
                document.querySelectorAll('.step-container').forEach((el, index) => {
                    if (index === currentStepIndex) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                });

                // Buttons visibility
                btnPrev.classList.toggle('hidden', currentStepIndex === 0);
                
                if (currentStepIndex === steps.length - 1) {
                    btnNext.classList.add('hidden');
                    btnSubmit.classList.remove('hidden');
                } else {
                    btnNext.classList.remove('hidden');
                    btnSubmit.classList.add('hidden');
                }
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            function validateCurrentStep() {
                const currentRange = steps[currentStepIndex].range;
                for (let i = currentRange[0]; i <= currentRange[1]; i++) {
                    const checked = document.querySelector(`input[name="q${i}"]:checked`);
                    if (!checked) return false;
                }
                return true;
            }

            btnNext.addEventListener('click', () => {
                if (validateCurrentStep()) {
                    currentStepIndex++;
                    updateNavigation();
                } else {
                    errorMsg.classList.remove('hidden');
                }
            });

            btnPrev.addEventListener('click', () => {
                if (currentStepIndex > 0) {
                    currentStepIndex--;
                    updateNavigation();
                }
            });

            btnSubmit.addEventListener('click', () => {
                if (validateCurrentStep()) {
                    calculateAndShowResults();
                } else {
                    errorMsg.classList.remove('hidden');
                }
            });

            // Auto-advance logic for radio buttons (optional, but good UX if desired. Kept manual for review)
            // Remove error message on selection
            form.addEventListener('change', () => {
                errorMsg.classList.add('hidden');
            });

            function calculateAndShowResults() {
                const formData = new FormData(form);
                const answers = Object.fromEntries(formData.entries());
                
                let totalScore = 0;
                let flags = {
                    menopause_flag: false,
                    early_stop_flag: false,
                    quality_of_life_flag: false
                };

                // Base scoring and direct flags
                document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
                    totalScore += parseInt(input.dataset.score || 0);
                    
                    if (input.dataset.flag === 'menopause_flag') {
                        flags.menopause_flag = true;
                    }
                    if (input.dataset.flag === 'qol_flag_raw') {
                        flags.quality_of_life_flag = true;
                    }
                });

                // Derived logic flags
                const q1 = answers['q1'];
                const q4 = answers['q4'];
                if (q4 === 'Yes' && (q1 === 'Under 40' || q1 === '40 to 44')) {
                    flags.early_stop_flag = true;
                }

                // Determine Result Type
                let resultTitle = '';
                let resultDesc = '';

                if (flags.early_stop_flag) {
                    resultTitle = 'Evaluation recommended for early or premature loss of periods';
                    resultDesc = 'Your answers suggest that your periods may have stopped earlier than expected. In this case, it is important to speak with a gynecologist or another qualified health professional for proper evaluation.';
                } else if (flags.menopause_flag) {
                    resultTitle = 'Possible menopause or postmenopausal stage';
                    resultDesc = 'Your answers suggest that you may be in menopause or the postmenopausal stage. If you have gone 12 consecutive months without a period, this possibility is stronger. Proper information and personalized medical guidance can be especially helpful during this stage.';
                } else {
                    if (totalScore >= 0 && totalScore <= 12) {
                        resultTitle = 'Low indication of hormonal transition';
                        resultDesc = 'Your answers do not strongly suggest that you are currently in perimenopause or menopause. However, if you are noticing changes in your cycle or new symptoms, it may be helpful to monitor them and speak with your doctor if needed.';
                    } else if (totalScore >= 13 && totalScore <= 27) {
                        resultTitle = 'Possible perimenopause';
                        resultDesc = 'Your answers suggest that you may be in perimenopause, the transitional phase before menopause. During this stage, cycle changes, hot flashes, insomnia, mood shifts, and fatigue are common.';
                    } else {
                        // 28+
                        resultTitle = 'Possible menopause or postmenopausal stage';
                        resultDesc = 'Your answers suggest that you may be in menopause or the postmenopausal stage. Proper information and personalized medical guidance can be especially helpful during this stage.';
                    }
                }

                // Render Results
                document.getElementById('result-title').textContent = resultTitle;
                document.getElementById('result-desc').textContent = resultDesc;
                
                if (flags.quality_of_life_flag) {
                    document.getElementById('extra-msg-container').classList.remove('hidden');
                } else {
                    document.getElementById('extra-msg-container').classList.add('hidden');
                }

                // UI Transition
                introSection.classList.add('hidden');
                form.classList.add('hidden');
                resultsSection.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Init
            updateNavigation();
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
      
<div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8 min-h-screen flex flex-col">

<div className="mb-10 text-center" id="intro-section">
<div className="inline-flex items-center justify-center p-3 bg-gray-50 rounded-full mb-6 ring-1 ring-gray-200">
<iconify-icon className="text-gray-900 text-xl" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Hormonal Transition Assessment</h1>
<p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
                Answer the following questions to see whether your symptoms may be related to perimenopause or menopause.
            </p>
<div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-500 inline-block text-left max-w-md border border-gray-100">
<span className="font-medium text-gray-700 block mb-1">Disclaimer</span>
                This test is for informational purposes only and does not replace medical advice or diagnosis.
            </div>
</div>

<form className="flex-grow" id="assessment-form">

<div className="step-container active" id="step-1">
<div className="mb-8 border-b border-gray-100 pb-4">
<span className="text-xs font-medium text-gray-400 tracking-wider uppercase">Step 1 of 3</span>
<h2 className="text-xl font-medium tracking-tight mt-1">Basic Information</h2>
</div>
<div className="space-y-8">

<div className="question-group" data-id="q1">
<label className="block text-sm font-medium text-gray-900 mb-3">Q1. Which age group do you belong to?</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q1" type="radio" value="Under 40"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">Under 40</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="1" name="q1" type="radio" value="40 to 44"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">40 to 44</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="2" name="q1" type="radio" value="45 to 55"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">45 to 55</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="1" name="q1" type="radio" value="Over 55"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">Over 55</span></div></label>
</div>
</div>

<div className="question-group" data-id="q2">
<label className="block text-sm font-medium text-gray-900 mb-3">Q2. Which of the following best describes your menstrual cycle today?</label>
<div className="grid grid-cols-1 gap-3">
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q2" type="radio" value="Regular"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">My periods are regular</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="2" name="q2" type="radio" value="Irregular"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">My periods have become irregular</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="2" name="q2" type="radio" value="Lighter"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">My periods have become lighter or less frequent</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="4" name="q2" type="radio" value="No period 12m"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">I have not had a period in the last 12 months</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q2" type="radio" value="Other reason"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">I do not have periods for another known reason</span></div></label>
</div>
</div>

<div className="question-group" data-id="q3">
<label className="block text-sm font-medium text-gray-900 mb-3">Q3. Have you gone 12 consecutive months without a period?</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-flag="menopause_flag" data-score="4" name="q3" type="radio" value="Yes"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">Yes</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q3" type="radio" value="No"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">No</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="1" name="q3" type="radio" value="Not sure"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">I am not sure</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q3" type="radio" value="Not applicable"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">Not applicable</span></div></label>
</div>
</div>

<div className="question-group" data-id="q4">
<label className="block text-sm font-medium text-gray-900 mb-3">Q4. Have your periods stopped before the age of 45?</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-flag="early_stop_flag_raw" data-score="0" name="q4" type="radio" value="Yes"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">Yes</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q4" type="radio" value="No"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">No</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="1" name="q4" type="radio" value="Not sure"/><div className="custom-radio-label flex items-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><div className="radio-circle w-4 h-4 rounded-full border border-gray-300 mr-3 relative flex-shrink-0 transition-colors"></div><span className="text-sm">I am not sure</span></div></label>
</div>
</div>
</div>
</div>

<div className="step-container" id="step-2">
<div className="mb-8 border-b border-gray-100 pb-4">
<span className="text-xs font-medium text-gray-400 tracking-wider uppercase">Step 2 of 3</span>
<h2 className="text-xl font-medium tracking-tight mt-1">Symptoms</h2>
</div>
<div className="space-y-8">


</div>
</div>

<div className="step-container" id="step-3">
<div className="mb-8 border-b border-gray-100 pb-4">
<span className="text-xs font-medium text-gray-400 tracking-wider uppercase">Step 3 of 3</span>
<h2 className="text-xl font-medium tracking-tight mt-1">Daily Life</h2>
</div>
<div className="space-y-8">

<div className="question-group" data-id="q17">
<label className="block text-sm font-medium text-gray-900 mb-3">Q17. To what extent do these symptoms affect your daily life?</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q17" type="radio" value="Not at all"/><div className="custom-radio-label flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 h-full"><span className="text-sm">Not at all</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="1" name="q17" type="radio" value="Slightly"/><div className="custom-radio-label flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 h-full"><span className="text-sm">Slightly</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="2" name="q17" type="radio" value="Moderately"/><div className="custom-radio-label flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 h-full"><span className="text-sm">Moderately</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-flag="qol_flag_raw" data-score="3" name="q17" type="radio" value="Significantly"/><div className="custom-radio-label flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 h-full"><span className="text-sm">Significantly</span></div></label>
</div>
</div>

<div className="question-group" data-id="q18">
<label className="block text-sm font-medium text-gray-900 mb-3">Q18. Do you feel these symptoms affect your quality of life?</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q18" type="radio" value="Not at all"/><div className="custom-radio-label flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 h-full"><span className="text-sm">Not at all</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="1" name="q18" type="radio" value="Slightly"/><div className="custom-radio-label flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 h-full"><span className="text-sm">Slightly</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="2" name="q18" type="radio" value="Moderately"/><div className="custom-radio-label flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 h-full"><span className="text-sm">Moderately</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-flag="qol_flag_raw" data-score="3" name="q18" type="radio" value="Significantly"/><div className="custom-radio-label flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300 h-full"><span className="text-sm">Significantly</span></div></label>
</div>
</div>

<div className="question-group" data-id="q19">
<label className="block text-sm font-medium text-gray-900 mb-3">Q19. Would you like to speak with a specialist about what you are experiencing?</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="0" name="q19" type="radio" value="No"/><div className="custom-radio-label flex items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><span className="text-sm">No</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="1" name="q19" type="radio" value="Maybe"/><div className="custom-radio-label flex items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><span className="text-sm">Maybe</span></div></label>
<label className="relative cursor-pointer group"><input className="custom-radio-input" data-score="2" name="q19" type="radio" value="Yes"/><div className="custom-radio-label flex items-center justify-center p-4 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-300"><span className="text-sm">Yes</span></div></label>
</div>
</div>
</div>
</div>

<div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
<button className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center" id="btn-prev" type="button">
<iconify-icon className="mr-1" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
                    Back
                </button>
<div className="flex-grow"></div>
<button className="bg-gray-900 text-white text-sm font-medium py-2.5 px-5 rounded-md hover:bg-gray-800 transition-colors flex items-center shadow-sm" id="btn-next" type="button">
                    Next
                    <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hidden bg-gray-900 text-white text-sm font-medium py-2.5 px-5 rounded-md hover:bg-gray-800 transition-colors flex items-center shadow-sm" id="btn-submit" type="button">
                    View Results
                    <iconify-icon className="ml-1.5" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="hidden mt-4 text-xs text-red-600 text-right" id="error-msg">Please answer all questions on this page to continue.</div>
</form>

<div className="hidden flex-grow flex flex-col justify-center animation-fade-in" id="results-section">
<div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 shadow-sm relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gray-900"></div>
<div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-100">
<iconify-icon className="text-gray-900 text-2xl" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4" id="result-title">Your Result</h2>
<p className="text-base text-gray-600 leading-relaxed mb-6" id="result-desc"></p>
<div className="hidden mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100 flex items-start" id="extra-msg-container">
<iconify-icon className="text-gray-500 text-lg mt-0.5 mr-3 flex-shrink-0" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-gray-600 leading-relaxed">
                        The symptoms you describe appear to be affecting your quality of life significantly. A discussion with a specialist may help you explore suitable support options.
                    </p>
</div>
<div className="mt-8 pt-8 border-t border-gray-100">
<a className="inline-flex justify-center items-center w-full sm:w-auto bg-gray-900 text-white text-sm font-medium py-3 px-6 rounded-md hover:bg-gray-800 transition-colors shadow-sm" href="#">
                        Explore Support Options
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-xs text-gray-400">
                    This test is for informational purposes only and does not replace medical advice or diagnosis.
                </p>
</div>
</div>
</div>


    </>
  );
}
