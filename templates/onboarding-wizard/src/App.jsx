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



        // Initialize Icons
        lucide.createIcons();

        // State
        const state = {
            step: 0,
            data: {
                name: "",
                email: "",
                password: "",
                role: "",
                usage: ""
            }
        };

        const totalSteps = 3; 

        // Elements
        const nextBtn = document.getElementById('btn-next');
        const backBtn = document.getElementById('btn-back');
        
        // Input Elements
        const inputs = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            password: document.getElementById('password')
        };

        // Review Elements
        const review = {
            name: document.getElementById('review-name'),
            email: document.getElementById('review-email'),
            role: document.getElementById('review-role'),
            usage: document.getElementById('review-usage'),
            avatar: document.getElementById('avatar-initials'),
            roleIcon: document.getElementById('role-icon')
        };

        // UI Helpers
        function updateStepper() {
            for (let i = 0; i < totalSteps; i++) {
                const indicator = document.getElementById(`ind-${i}`);
                const label = document.getElementById(`label-${i}`);
                const line = document.getElementById(`line-${i}`);

                if (i < state.step) {
                    // Completed
                    indicator.className = "flex items-center justify-center w-7 h-7 rounded-full border border-zinc-900 bg-zinc-900 text-white text-xs font-medium transition-all duration-300";
                    indicator.innerHTML = '<i data-lucide="check" width="14" height="14"></i>';
                    
                    label.className = "text-sm font-medium text-zinc-900 transition-colors duration-300";
                    
                    if(line) line.style.width = "100%";
                } else if (i === state.step) {
                    // Active
                    indicator.className = "flex items-center justify-center w-7 h-7 rounded-full border border-zinc-900 bg-white text-zinc-900 text-xs font-medium transition-all duration-300 shadow-[0_0_0_1px_rgba(24,24,27,0.1)]";
                    indicator.textContent = i + 1;
                    
                    label.className = "text-sm font-medium text-zinc-900 transition-colors duration-300";
                    
                    if(line) line.style.width = "0%";
                } else {
                    // Inactive
                    indicator.className = "flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white text-zinc-400 text-xs font-medium transition-all duration-300";
                    indicator.textContent = i + 1;
                    
                    label.className = "text-sm font-medium text-zinc-400 transition-colors duration-300";
                    
                    if(line) line.style.width = "0%";
                }
            }
            lucide.createIcons();
        }

        function updateButtons() {
            // Back Button Visibility
            if (state.step === 0) {
                backBtn.classList.add('opacity-0', 'pointer-events-none');
            } else {
                backBtn.classList.remove('opacity-0', 'pointer-events-none');
            }

            // Next/Finish Text
            const nextBtnText = nextBtn.querySelector('span');
            if (state.step === totalSteps - 1) {
                nextBtnText.textContent = "Complete Setup";
                nextBtn.innerHTML = `<span>Complete Setup</span> <i data-lucide="check" width="16" height="16" class="ml-2"></i>`;
            } else {
                nextBtnText.textContent = "Next Step";
                nextBtn.innerHTML = `<span>Next Step</span> <i data-lucide="arrow-right" width="16" height="16" class="ml-2"></i>`;
            }
            lucide.createIcons();
            validateStep();
        }

        function validateStep() {
            let isValid = false;
            if (state.step === 0) {
                isValid = state.data.name.trim().length > 1 && 
                          state.data.email.includes('@') && 
                          state.data.password.length >= 8;
            } else if (state.step === 1) {
                isValid = state.data.role !== "" && state.data.usage !== "";
            } else if (state.step === 2) {
                isValid = true;
            }
            nextBtn.disabled = !isValid;
        }

        function showStep(stepIndex) {
            // Hide all steps
            document.querySelectorAll('.step-content').forEach(el => {
                el.classList.remove('active-step');
                el.classList.add('hidden-step');
            });

            // Show current step
            const currentStepEl = document.getElementById(`step-${stepIndex}`);
            currentStepEl.classList.remove('hidden-step');
            currentStepEl.classList.add('active-step');
        }

        function selectRole(element, roleName) {
            document.querySelectorAll('.role-card').forEach(card => card.classList.remove('selected'));
            element.classList.add('selected');
            state.data.role = roleName;
            validateStep();
        }

        function selectUsage(element, usageType) {
            document.querySelectorAll('.usage-card').forEach(card => card.classList.remove('selected'));
            element.classList.add('selected');
            state.data.usage = usageType;
            validateStep();
        }

        function updateReviewData() {
            review.name.textContent = state.data.name;
            review.email.textContent = state.data.email;
            review.role.textContent = state.data.role;
            review.usage.textContent = state.data.usage + (state.data.usage === 'Personal' ? ' Plan' : ' Plan');
            
            // Initials
            const initials = state.data.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
            review.avatar.textContent = initials;
            
            // Icon Logic
            const iconMap = {
                'Developer': 'code-2',
                'Designer': 'pen-tool',
                'Product Manager': 'bar-chart-3',
                'Founder': 'rocket'
            };
            // Replace the icon element to ensure lucide picks it up
            const newIconName = iconMap[state.data.role] || 'briefcase';
            
            // Update icons
            lucide.createIcons();
        }
        
        window.editStep = function(stepIndex) {
            state.step = stepIndex;
            updateStepper();
            showStep(state.step);
            updateButtons();
        }

        // Event Listeners
        Object.keys(inputs).forEach(key => {
            inputs[key].addEventListener('input', (e) => {
                state.data[key] = e.target.value;
                validateStep();
            });
        });

        nextBtn.addEventListener('click', () => {
            if (state.step < totalSteps - 1) {
                state.step++;
                updateStepper();
                showStep(state.step);
                updateButtons();
                if(state.step === 2) updateReviewData();
            } else {
                // Submit
                document.getElementById('success-name').textContent = state.data.name.split(' ')[0];
                document.getElementById('wizard-container').classList.add('hidden');
                document.getElementById('success-view').classList.remove('hidden');
            }
        });

        backBtn.addEventListener('click', () => {
            if (state.step > 0) {
                state.step--;
                updateStepper();
                showStep(state.step);
                updateButtons();
            }
        });

        // Initialize
        updateStepper();
        validateStep();

    
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
      

<div className="fixed top-0 w-full h-screen -z-10 bg-white">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
</div>
<div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm sm:border sm:border-zinc-100 sm:shadow-xl sm:shadow-zinc-200/40 rounded-2xl p-6 sm:p-10 relative overflow-hidden">

<div className="space-y-8 relative z-10" id="wizard-container">

<nav aria-label="Progress" className="pb-6 border-b border-zinc-100">
<ol className="flex items-center w-full">

<li className="flex items-center relative pr-4 sm:pr-0 flex-1">
<div className="flex items-center relative z-10 group cursor-default">
<div className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-900 bg-white text-zinc-900 text-xs font-medium transition-all duration-300 shadow-sm" id="ind-0">1</div>
<div className="flex flex-col ml-3">
<span className="text-sm font-medium text-zinc-900 transition-colors duration-300" id="label-0">Account</span>
<span className="text-[10px] text-zinc-400 font-medium hidden sm:block">Login details</span>
</div>
</div>
<div className="flex-1 hidden sm:block h-[1px] bg-zinc-100 mx-4 transition-colors duration-300 relative overflow-hidden rounded-full">
<div className="absolute left-0 top-0 bottom-0 w-0 bg-zinc-900 transition-all duration-500 ease-in-out" id="line-0"></div>
</div>
</li>

<li className="flex items-center relative px-4 sm:px-0 flex-1 justify-center sm:justify-start">
<div className="flex items-center relative z-10 group cursor-default">
<div className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white text-zinc-400 text-xs font-medium transition-all duration-300" id="ind-1">2</div>
<div className="flex flex-col ml-3">
<span className="transition-colors duration-300 text-sm font-medium text-zinc-400" id="label-1">Profile</span>
<span className="text-[10px] text-zinc-400/60 font-medium hidden sm:block">Personalize</span>
</div>
</div>
<div className="flex-1 hidden sm:block h-[1px] bg-zinc-100 mx-4 transition-colors duration-300 relative overflow-hidden rounded-full">
<div className="absolute left-0 top-0 bottom-0 w-0 bg-zinc-900 transition-all duration-500 ease-in-out" id="line-1"></div>
</div>
</li>

<li className="flex items-center relative pl-4 sm:pl-0">
<div className="flex items-center relative z-10 group cursor-default">
<div className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 bg-white text-zinc-400 text-xs font-medium transition-all duration-300" id="ind-2">3</div>
<div className="flex flex-col ml-3">
<span className="text-sm font-medium text-zinc-400 transition-colors duration-300" id="label-2">Review</span>
<span className="text-[10px] text-zinc-400/60 font-medium hidden sm:block">Confirm</span>
</div>
</div>
</li>
</ol>
</nav>

<div className="min-h-[420px] relative">

<div className="step-content active-step space-y-6" id="step-0">
<div className="space-y-1">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Create your account</h2>
<p className="text-sm text-zinc-500">Enter your credentials to get started.</p>
</div>
<div className="space-y-4 max-w-sm">

<div className="space-y-1.5 group">
<label className="text-xs font-medium text-zinc-700 transition-colors group-focus-within:text-zinc-900" htmlFor="name">Full Name</label>
<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-zinc-900">
<i data-lucide="user" height="16" width="16"></i>
</div>
<input className="flex h-10 w-full rounded-md border border-zinc-200 bg-white pl-9 pr-3 py-1 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 focus-visible:border-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 hover:border-zinc-300" id="name" placeholder="John Doe" type="text"/>
</div>
</div>

<div className="space-y-1.5 group">
<label className="text-xs font-medium text-zinc-700 transition-colors group-focus-within:text-zinc-900" htmlFor="email">Email Address</label>
<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-zinc-900">
<i data-lucide="mail" height="16" width="16"></i>
</div>
<input className="flex h-10 w-full rounded-md border border-zinc-200 bg-white pl-9 pr-3 py-1 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 focus-visible:border-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 hover:border-zinc-300" id="email" placeholder="name@company.com" type="email"/>
</div>
</div>

<div className="space-y-1.5 group">
<label className="text-xs font-medium text-zinc-700 transition-colors group-focus-within:text-zinc-900" htmlFor="password">Password</label>
<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-zinc-900">
<i data-lucide="lock" height="16" width="16"></i>
</div>
<input className="flex h-10 w-full rounded-md border border-zinc-200 bg-white pl-9 pr-3 py-1 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 focus-visible:border-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 hover:border-zinc-300" id="password" placeholder="••••••••" type="password"/>
</div>
<p className="text-[10px] text-zinc-400">Must be at least 8 characters.</p>
</div>
</div>
</div>

<div className="step-content hidden-step space-y-6" id="step-1">
<div className="space-y-1">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Customize your experience</h2>
<p className="text-sm text-zinc-500">We'll adapt the interface based on your role.</p>
</div>
<div className="space-y-6">

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700 block">What is your primary role?</label>
<div className="grid grid-cols-2 gap-3" id="role-selector">

<button className="role-card group relative flex flex-col items-start gap-2 rounded-xl border border-zinc-200 bg-white p-3 sm:p-4 text-left shadow-sm hover:border-zinc-300 hover:bg-zinc-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950" onclick="selectRole(this, 'Developer')" type="button">
<div className="rounded-lg bg-zinc-100 p-2 text-zinc-500 group-hover:text-zinc-900 transition-colors">
<i data-lucide="code-2" height="18" width="18"></i>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Developer</div>
<div className="text-[11px] text-zinc-500 leading-tight mt-0.5">Engineering &amp; Code</div>
</div>
</button>

<button className="role-card group relative flex flex-col items-start gap-2 rounded-xl border border-zinc-200 bg-white p-3 sm:p-4 text-left shadow-sm hover:border-zinc-300 hover:bg-zinc-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950" onclick="selectRole(this, 'Designer')" type="button">
<div className="rounded-lg bg-zinc-100 p-2 text-zinc-500 group-hover:text-zinc-900 transition-colors">
<i data-lucide="pen-tool" height="18" width="18"></i>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Designer</div>
<div className="text-[11px] text-zinc-500 leading-tight mt-0.5">UI/UX &amp; Brand</div>
</div>
</button>

<button className="role-card group relative flex flex-col items-start gap-2 rounded-xl border border-zinc-200 bg-white p-3 sm:p-4 text-left shadow-sm hover:border-zinc-300 hover:bg-zinc-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950" onclick="selectRole(this, 'Product Manager')" type="button">
<div className="rounded-lg bg-zinc-100 p-2 text-zinc-500 group-hover:text-zinc-900 transition-colors">
<i data-lucide="bar-chart-3" height="18" width="18"></i>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Product</div>
<div className="text-[11px] text-zinc-500 leading-tight mt-0.5">Strategy &amp; Roadmap</div>
</div>
</button>

<button className="role-card group relative flex flex-col items-start gap-2 rounded-xl border border-zinc-200 bg-white p-3 sm:p-4 text-left shadow-sm hover:border-zinc-300 hover:bg-zinc-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950" onclick="selectRole(this, 'Founder')" type="button">
<div className="rounded-lg bg-zinc-100 p-2 text-zinc-500 group-hover:text-zinc-900 transition-colors">
<i data-lucide="rocket" height="18" width="18"></i>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Founder</div>
<div className="text-[11px] text-zinc-500 leading-tight mt-0.5">Business &amp; Ops</div>
</div>
</button>
</div>
</div>

<div className="space-y-2 pt-2">
<label className="text-xs font-medium text-zinc-700 block">How do you plan to use this?</label>
<div className="grid grid-cols-2 gap-3">
<button className="usage-card group flex items-center gap-3 p-3 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 text-left" onclick="selectUsage(this, 'Personal')" type="button">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500 group-hover:text-zinc-900 group-hover:bg-zinc-100 transition-colors">
<i data-lucide="user" height="14" width="14"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900">For myself</span>
<span className="text-[10px] text-zinc-400">Individual use</span>
</div>
</button>
<button className="usage-card group flex items-center gap-3 p-3 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 text-left" onclick="selectUsage(this, 'Team')" type="button">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500 group-hover:text-zinc-900 group-hover:bg-zinc-100 transition-colors">
<i data-lucide="users" height="14" width="14"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900">With my team</span>
<span className="text-[10px] text-zinc-400">Collaboration</span>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="step-content hidden-step space-y-6" id="step-2">
<div className="space-y-1">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Ready to launch?</h2>
<p className="text-sm text-zinc-500">Confirm your details to access your workspace.</p>
</div>

<div className="relative group mx-auto w-full max-w-[340px]">
<div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-200 to-zinc-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col">

<div className="h-24 bg-zinc-50/80 p-5 flex items-center justify-between border-b border-dashed border-zinc-200 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="h-12 w-12 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-700 flex items-center justify-center text-white font-medium text-lg shadow-md ring-4 ring-white" id="avatar-initials">
                                        JD
                                    </div>
<div>
<div className="text-sm font-semibold text-zinc-900" id="review-name">John Doe</div>
<div className="text-xs text-zinc-500" id="review-email">john@example.com</div>
</div>
</div>
<button className="relative z-10 text-zinc-400 hover:text-zinc-900 transition-colors" onclick="editStep(0)">
<i data-lucide="pencil" height="14" width="14"></i>
</button>
</div>

<div className="relative h-px bg-zinc-200">
<div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-white border border-zinc-200 z-20"></div>
<div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-white border border-zinc-200 z-20"></div>
</div>

<div className="p-5 space-y-4 bg-white">
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-1">Role</div>
<div className="flex items-center gap-1.5 text-zinc-900 text-sm font-medium">
<i className="text-zinc-500" data-lucide="briefcase" height="14" id="role-icon" width="14"></i>
<span id="review-role">Developer</span>
</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-1">Plan Type</div>
<div className="flex items-center gap-1.5 text-zinc-900 text-sm font-medium">
<i className="text-zinc-500" data-lucide="user" height="14" id="usage-icon" width="14"></i>
<span id="review-usage">Personal</span>
</div>
</div>
</div>
<div className="pt-2">
<div className="w-full bg-zinc-100 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-zinc-900 h-1.5 rounded-full w-[90%]"></div>
</div>
<p className="text-[10px] text-zinc-400 text-center">Setup 90% Complete</p>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-2">
<span className="text-[10px] text-zinc-400">Secure connection via SSL</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-6 mt-8 border-t border-zinc-100">
<button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 text-zinc-500 hover:text-zinc-900 h-10 px-4 py-2 opacity-0 pointer-events-none hover:bg-zinc-50" id="btn-back">
<i className="mr-2" data-lucide="arrow-left" height="16" width="16"></i>
                    Back
                </button>
<button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-800 h-10 px-6 py-2 shadow-md shadow-zinc-900/10 active:scale-[0.98]" disabled="" id="btn-next">
<span>Next Step</span>
<i className="ml-2" data-lucide="arrow-right" height="16" width="16"></i>
</button>
</div>
</div>

<div className="hidden absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in fade-in zoom-in duration-500" id="success-view">
<div className="relative">
<div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
<div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-zinc-100 to-white border border-zinc-200 shadow-sm">
<i className="text-zinc-900" data-lucide="check" height="24" width="24"></i>
</div>
</div>
<div className="space-y-2 max-w-xs mx-auto">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">You're all set!</h2>
<p className="text-zinc-500 text-sm">Welcome aboard, <span className="font-medium text-zinc-900" id="success-name">User</span>. Your personal workspace is ready.</p>
</div>
<div className="w-full max-w-xs space-y-3">
<button className="w-full inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 bg-zinc-900 text-white hover:bg-zinc-800 h-10 px-8 py-2 shadow-sm" onclick="location.reload()">
                    Enter Workspace
                </button>
<button className="w-full text-xs text-zinc-400 hover:text-zinc-600">
                    Explore Documentation
                </button>
</div>
</div>
</div>


    </>
  );
}
