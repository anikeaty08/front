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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- View Navigation ---
        function navigateTo(viewId) {
            // Hide all views
            document.querySelectorAll('.view-page').forEach(el => {
                el.classList.remove('view-visible');
                el.classList.add('view-hidden');
            });
            // Show target view
            const target = document.getElementById('view-' + viewId);
            target.classList.remove('view-hidden');
            // Small timeout to allow display:block to apply before animating opacity
            setTimeout(() => {
                target.classList.add('view-visible');
            }, 10);
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Reset wizard if opening onboarding
            if(viewId === 'onboarding') {
                currentStep = 1;
                updateWizardUI();
            }
        }

        // --- Pricing Toggle ---
        let isAnnual = false;
        function togglePricing() {
            isAnnual = !isAnnual;
            const knob = document.getElementById('toggle-knob');
            const bg = document.getElementById('billing-toggle');
            const lblMonthly = document.getElementById('label-monthly');
            const lblPkg = document.getElementById('label-package');
            
            if (isAnnual) {
                knob.classList.add('translate-x-6');
                knob.classList.remove('translate-x-1');
                lblMonthly.classList.replace('text-slate-900', 'text-slate-500');
                lblPkg.classList.replace('text-slate-500', 'text-slate-900');
            } else {
                knob.classList.remove('translate-x-6');
                knob.classList.add('translate-x-1');
                lblMonthly.classList.replace('text-slate-500', 'text-slate-900');
                lblPkg.classList.replace('text-slate-900', 'text-slate-500');
            }

            document.querySelectorAll('.price-val').forEach(el => {
                el.textContent = isAnnual ? el.getAttribute('data-package') : el.getAttribute('data-monthly');
            });
        }

        // --- Onboarding Wizard Logic ---
        let currentStep = 1;
        const totalSteps = 4;
        
        const stepTitles = [
            "", // index 0 unused
            "Let's personalize your experience",
            "Identify the challenges",
            "Parent Contact Details",
            "Schedule & Confirm"
        ];
        const stepDescs = [
            "",
            "Tell us about your child's basic needs.",
            "Select areas where support is needed most.",
            "Where should we send the confirmation?",
            "Pick a time that works for you."
        ];

        function updateWizardUI() {
            // Update progress bar
            const progress = (currentStep / totalSteps) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;
            document.getElementById('step-counter').textContent = `Step ${currentStep} of ${totalSteps}`;
            
            // Update Text
            document.getElementById('step-title').textContent = stepTitles[currentStep];
            document.getElementById('step-desc').textContent = stepDescs[currentStep];

            // Hide all steps, show current
            for(let i=1; i<=totalSteps; i++) {
                document.getElementById(`step-${i}`).classList.add('hidden');
            }
            document.getElementById(`step-${currentStep}`).classList.remove('hidden');

            // Controls logic
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');
            const btnSubmit = document.getElementById('btn-submit');
            const spacer = document.getElementById('spacer');

            if (currentStep === 1) {
                btnPrev.classList.add('hidden');
                spacer.classList.remove('hidden');
            } else {
                btnPrev.classList.remove('hidden');
                spacer.classList.add('hidden');
            }

            if (currentStep === totalSteps) {
                btnNext.classList.add('hidden');
                btnSubmit.classList.remove('hidden');
                btnSubmit.classList.add('flex');
            } else {
                btnNext.classList.remove('hidden');
                btnNext.classList.add('flex');
                btnSubmit.classList.add('hidden');
                btnSubmit.classList.remove('flex');
            }
        }

        function nextStep() {
            if (currentStep < totalSteps) {
                currentStep++;
                updateWizardUI();
            }
        }

        function prevStep() {
            if (currentStep > 1) {
                currentStep--;
                updateWizardUI();
            }
        }

        function submitForm() {
            // Hide wizard, show success
            document.getElementById('onboarding-header').classList.add('hidden');
            for(let i=1; i<=totalSteps; i++) {
                document.getElementById(`step-${i}`).classList.add('hidden');
            }
            document.getElementById('wizard-controls').classList.add('hidden');
            
            const successScreen = document.getElementById('step-success');
            successScreen.classList.remove('hidden');
            // Confetti simulation / basic animation
            successScreen.animate([
                { opacity: 0, transform: 'scale(0.95)' },
                { opacity: 1, transform: 'scale(1)' }
            ], { duration: 400, easing: 'ease-out' });
        }

        // --- Exit Intent Logic ---
        let exitIntentShown = false;
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY < 0 && !exitIntentShown && document.getElementById('view-home').classList.contains('view-visible')) {
                const modal = document.getElementById('exit-intent');
                const inner = document.getElementById('exit-modal');
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                // slight delay for animation
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    inner.classList.remove('scale-95');
                }, 10);
                exitIntentShown = true;
            }
        });

        function closeExitIntent() {
            const modal = document.getElementById('exit-intent');
            const inner = document.getElementById('exit-modal');
            modal.classList.add('opacity-0');
            inner.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300);
        }

        // Initialize UI
        updateWizardUI();

    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="navigateTo('home')">
<span className="text-xl tracking-tight font-semibold text-slate-900">e<span className="text-blue-600">Tutor</span>World</span>
</div>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="navigateTo('home')">Programs</button>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="document.getElementById('how-it-works').scrollIntoView({behavior: 'smooth'})">How It Works</button>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="navigateTo('pricing')">Pricing</button>
</div>

<div className="flex items-center">
<button className="hidden md:flex items-center gap-2 bg-[#FF7A00] hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm shadow-orange-500/20 hover:shadow-md hover:shadow-orange-500/30 hover:-translate-y-0.5" onclick="navigateTo('onboarding')">
                        Book Free Trial Class
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>

<button className="md:hidden p-2 text-slate-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>



<main className="view-page view-visible pt-16" id="view-home">

<section className="relative pt-20 pb-32 overflow-hidden bg-white">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                    Top 1% Tutors Nationwide
                </div>
<h1 className="text-4xl md:text-6xl tracking-tight font-semibold text-slate-900 max-w-4xl mx-auto leading-tight mb-6">
                    Improve Your Child's Grades by <span className="text-blue-600">1+ Level</span> in 90 Days
                </h1>
<p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Personalized 1:1 online tutoring for Math, Science &amp; Test Prep. We match your child with expert tutors to build confidence and deliver measurable results.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF7A00] hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl text-base font-medium transition-all shadow-sm shadow-orange-500/20 hover:shadow-md hover:-translate-y-0.5" onclick="navigateTo('onboarding')">
                        Book Free Trial Class
                    </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-xl text-base font-medium transition-all" onclick="document.getElementById('how-it-works').scrollIntoView({behavior: 'smooth'})">
                        See How It Works
                        <iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                        4.8/5 Average Rating
                    </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400 text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                        50,000+ Students Tutored
                    </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400 text-lg" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
                        Vetted Expert Educators
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Is your child struggling to keep up?</h2>
<p className="text-slate-600">Traditional classrooms often leave students behind. We fix the gaps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Falling Behind</h3>
<p className="text-sm text-slate-600 leading-relaxed">Missed foundational concepts make new topics harder to grasp, leading to frustration and lower grades.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:sad-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Low Confidence</h3>
<p className="text-sm text-slate-600 leading-relaxed">Fear of making mistakes or asking questions in a crowded room severely limits their potential.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">No Personal Attention</h3>
<p className="text-sm text-slate-600 leading-relaxed">A 1-to-30 teacher ratio means your child's unique learning style is completely ignored.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">How eTutorWorld Works</h2>
<p className="text-slate-600">A simple, proven process to get your child back on track.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-slate-200 border-t border-dashed border-slate-300"></div>

<div className="relative text-center">
<div className="w-16 h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 text-xl font-semibold mx-auto mb-6 relative z-10 shadow-sm">1</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Take Assessment</h3>
<p className="text-sm text-slate-600">A quick diagnostic test helps us identify exact knowledge gaps and learning goals.</p>
</div>

<div className="relative text-center">
<div className="w-16 h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 text-xl font-semibold mx-auto mb-6 relative z-10 shadow-sm">2</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Get Matched</h3>
<p className="text-sm text-slate-600">We handpick a specialized tutor whose teaching style matches your child's needs.</p>
</div>

<div className="relative text-center">
<div className="w-16 h-16 bg-blue-600 border-2 border-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold mx-auto mb-6 relative z-10 shadow-md shadow-blue-500/20">3</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Start Learning</h3>
<p className="text-sm text-slate-600">Begin 1:1 sessions on our interactive platform and watch their confidence soar.</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 bg-[#FF7A00] hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all shadow-sm" onclick="navigateTo('onboarding')">
                        Start Free Trial
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Tailored Learning Paths</h2>
<p className="text-slate-600">Programs designed for every stage of your child's academic journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 transition-colors cursor-pointer">
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">School Support</h3>
<p className="text-sm text-slate-600 mb-4">Help with homework, assignments, and reinforcing classroom concepts.</p>
<span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">Learn more <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
<div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 transition-colors cursor-pointer">
<iconify-icon className="text-3xl text-orange-500 mb-4" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Test Prep (SAT/ACT)</h3>
<p className="text-sm text-slate-600 mb-4">Targeted strategies and practice to maximize scores on standardized tests.</p>
<span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">Learn more <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
<div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 transition-colors cursor-pointer">
<iconify-icon className="text-3xl text-purple-500 mb-4" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Advanced Learners</h3>
<p className="text-sm text-slate-600 mb-4">Enrichment programs for gifted students looking to get ahead of the curve.</p>
<span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">Learn more <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-600 relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white mb-6">Start Your Child's Learning Transformation Today</h2>
<p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of parents who have seen their children's confidence and grades skyrocket.</p>
<button className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-xl text-base font-medium transition-all shadow-lg hover:-translate-y-0.5" onclick="navigateTo('onboarding')">
                    Book Free Trial Class Now
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="mt-4 text-sm text-blue-200">No credit card required. Cancel anytime.</p>
</div>
</section>
</main>



<main className="view-page view-hidden pt-16" id="view-pricing">
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-4xl tracking-tight font-semibold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
<p className="text-lg text-slate-600">Choose a plan that fits your child's learning needs and schedule.</p>

<div className="mt-10 flex items-center justify-center gap-3">
<span className="text-sm font-medium text-slate-900" id="label-monthly">Monthly</span>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none" id="billing-toggle" onclick="togglePricing()">
<span className="sr-only">Toggle billing</span>
<span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white transition-transform" id="toggle-knob"></span>
</button>
<span className="text-sm font-medium text-slate-500" id="label-package">Package (Save 15%)</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6">Perfect for focused help on specific subjects.</p>
<div className="mb-6">
<span className="text-4xl tracking-tight font-semibold text-slate-900 price-val" data-monthly="$23" data-package="$19">$23</span>
<span className="text-sm text-slate-500">/ session</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                4 sessions per month
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                1 subject focus
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Basic progress tracking
                            </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors" onclick="navigateTo('onboarding')">Start Free Trial</button>
</div>

<div className="bg-white rounded-3xl border-2 border-blue-600 p-8 shadow-lg shadow-blue-500/10 flex flex-col relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Most Popular</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Growth</h3>
<p className="text-sm text-slate-500 mb-6">Comprehensive support to see significant grade jumps.</p>
<div className="mb-6">
<span className="text-4xl tracking-tight font-semibold text-slate-900 price-val" data-monthly="$18" data-package="$15">$18</span>
<span className="text-sm text-slate-500">/ session</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                8 sessions per month
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Up to 2 subjects
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Detailed weekly reports
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Priority tutor matching
                            </li>
</ul>
<button className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm" onclick="navigateTo('onboarding')">Start Free Trial</button>
</div>

<div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Pro</h3>
<p className="text-sm text-slate-500 mb-6">Intensive prep for competitive exams and acceleration.</p>
<div className="mb-6">
<span className="text-4xl tracking-tight font-semibold text-slate-900">Custom</span>
<span className="text-sm text-slate-500 block mt-1">Tailored packages</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                12+ sessions per month
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Unlimited subjects
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Top 0.1% Master Tutors
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                24/7 academic counselor
                            </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors" onclick="navigateTo('onboarding')">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl tracking-tight font-semibold text-center mb-10">Compare Features</h2>
<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="p-4 font-medium text-slate-600 w-2/5">Feature</th>
<th className="p-4 font-medium text-slate-900 text-center">Starter</th>
<th className="p-4 font-medium text-blue-600 text-center bg-blue-50/50">Growth</th>
<th className="p-4 font-medium text-slate-900 text-center">Pro</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-4 text-slate-600">1:1 Live Interactive Sessions</td>
<td className="p-4 text-center"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 text-center bg-blue-50/30"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 text-center"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 text-slate-600">Session Recording Access</td>
<td className="p-4 text-center"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 text-center bg-blue-50/30"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 text-center"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 text-slate-600">Customized Lesson Plans</td>
<td className="p-4 text-center"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 text-center bg-blue-50/30"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 text-center"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 text-slate-600">Test Prep Materials Included</td>
<td className="p-4 text-center"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 text-center bg-blue-50/30"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 text-center"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>



<main className="view-page view-hidden pt-16 min-h-screen bg-slate-50" id="view-onboarding">
<div className="max-w-2xl mx-auto px-4 py-12">

<div className="mb-8" id="onboarding-header">
<button className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1 mb-6 transition-colors" onclick="navigateTo('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                </button>
<div className="flex justify-between items-end mb-3">
<div>
<h1 className="text-2xl tracking-tight font-semibold text-slate-900" id="step-title">Let's personalize your experience</h1>
<p className="text-sm text-slate-500 mt-1" id="step-desc">Tell us about your child's needs.</p>
</div>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md" id="step-counter">Step 1 of 4</span>
</div>

<div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-600 h-1.5 rounded-full transition-all duration-500 ease-out" id="progress-bar" style={{width: '25%'}}></div>
</div>
</div>

<div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden" id="wizard-container">

<div className="wizard-step block" id="step-1">
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Student's Grade Level</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer">
<option disabled="" selected="" value="">Select grade...</option>
<option value="elementary">Elementary School (K-5)</option>
<option value="middle">Middle School (6-8)</option>
<option value="high">High School (9-12)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Primary Subject Need</label>
<div className="grid grid-cols-2 gap-3">

<label className="relative flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 transition-all">
<input className="peer sr-only" name="subject" type="radio" value="math"/>
<span className="text-sm font-medium">Math</span>
</label>
<label className="relative flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 transition-all">
<input className="peer sr-only" name="subject" type="radio" value="science"/>
<span className="text-sm font-medium">Science</span>
</label>
<label className="relative flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 transition-all">
<input className="peer sr-only" name="subject" type="radio" value="english"/>
<span className="text-sm font-medium">English</span>
</label>
<label className="relative flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 transition-all">
<input className="peer sr-only" name="subject" type="radio" value="testprep"/>
<span className="text-sm font-medium">Test Prep</span>
</label>
</div>
</div>
</div>
</div>

<div className="wizard-step hidden" id="step-2">
<div className="space-y-6">
<label className="block text-sm font-medium text-slate-700 mb-4">What are the main challenges? (Select all that apply)</label>
<div className="grid grid-cols-1 gap-3">

<label className="relative flex cursor-pointer items-start gap-4 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 transition-all">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<iconify-icon className="text-white text-sm opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Core concepts are unclear</span>
<span className="block text-xs text-slate-500 mt-0.5">Struggling with fundamentals.</span>
</div>
</label>
<label className="relative flex cursor-pointer items-start gap-4 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 transition-all">
<input className="peer sr-only" type="checkbox"/>
<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<iconify-icon className="text-white text-sm opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Homework help needed</span>
<span className="block text-xs text-slate-500 mt-0.5">Needs daily/weekly assignment support.</span>
</div>
</label>
<label className="relative flex cursor-pointer items-start gap-4 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 transition-all">
<input className="peer sr-only" type="checkbox"/>
<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<iconify-icon className="text-white text-sm opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Exam preparation</span>
<span className="block text-xs text-slate-500 mt-0.5">Upcoming finals or standardized tests.</span>
</div>
</label>
</div>
</div>
</div>

<div className="wizard-step hidden" id="step-3">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Parent's Full Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Email Address</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Phone Number (Optional, for SMS reminders)</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
</div>

<div className="wizard-step hidden" id="step-4">
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-3">Preferred Time for Trial Class</label>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
<label className="relative flex cursor-pointer items-center justify-center rounded-lg border border-slate-200 p-2 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 transition-all">
<input className="peer sr-only" name="time" type="radio"/>
<span className="text-xs font-medium">Weekday Afternoons</span>
</label>
<label className="relative flex cursor-pointer items-center justify-center rounded-lg border border-slate-200 p-2 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 transition-all">
<input checked="" className="peer sr-only" name="time" type="radio"/>
<span className="text-xs font-medium">Weekday Evenings</span>
</label>
<label className="relative flex cursor-pointer items-center justify-center rounded-lg border border-slate-200 p-2 hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 transition-all">
<input className="peer sr-only" name="time" type="radio"/>
<span className="text-xs font-medium">Weekends</span>
</label>
</div>
<p className="text-xs text-slate-400 mt-2 flex items-center gap-1"><iconify-icon icon="solar:global-linear"></iconify-icon> Auto-detected timezone: Local Time</p>
</div>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Summary</h4>
<ul className="text-sm text-slate-600 space-y-1">
<li>• Free 45-minute assessment &amp; trial</li>
<li>• Expert tutor matching included</li>
<li>• No credit card required to book</li>
</ul>
</div>
</div>
</div>

<div className="hidden text-center py-8" id="step-success">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<h2 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">Your Free Trial is Booked!</h2>
<p className="text-sm text-slate-600 mb-8">We've sent a confirmation email with the next steps. One of our academic counselors will reach out shortly to finalize the perfect tutor match.</p>
<button className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors" onclick="navigateTo('home')">Return to Home</button>
</div>

<div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between" id="wizard-controls">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 hidden px-4 py-2" id="btn-prev" onclick="prevStep()">Back</button>

<div className="flex-1" id="spacer"></div>
<button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm" id="btn-next" onclick="nextStep()">
                        Next Step
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="hidden items-center gap-2 bg-[#FF7A00] hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm" id="btn-submit" onclick="submitForm()">
                        Get My Free Trial
                        <iconify-icon icon="solar:rocket-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<div className="flex items-center gap-2">
<span className="font-semibold text-slate-900">e<span className="text-blue-600">Tutor</span>World</span>
                © 2024. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm hidden items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="exit-intent">
<div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative transform scale-95 transition-transform duration-300" id="exit-modal">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="closeExitIntent()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl mb-4">
<iconify-icon icon="solar:gift-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Wait! Don't leave empty-handed.</h3>
<p className="text-sm text-slate-600 mb-6">Get a <span className="font-semibold text-slate-900">Free Assessment Report</span> to see exactly where your child stands academically, no strings attached.</p>
<div className="space-y-3">
<input className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" placeholder="Enter your email" type="email"/>
<button className="w-full bg-[#FF7A00] text-white py-3 rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors" onclick="closeExitIntent(); navigateTo('onboarding')">Claim Free Report</button>
</div>
</div>
</div>

<div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
<button className="w-full flex items-center justify-center gap-2 bg-[#FF7A00] text-white px-5 py-3.5 rounded-xl text-sm font-medium shadow-lg shadow-orange-500/30" onclick="navigateTo('onboarding')">
            Book Free Trial Class
        </button>
</div>


    </>
  );
}
