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



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
}
}
}
}



        // State
        let currentStep = 1;
        const totalSteps = 3;
        const onboardingFlow = document.getElementById('onboarding-flow');
        const progressBar = document.getElementById('progress-bar');
        
        // Onboarding Navigation
        document.getElementById('next-btn').addEventListener('click', () => {
            if (currentStep < totalSteps) {
                // Hide current
                document.getElementById(`step-${currentStep}`).classList.add('hidden');
                currentStep++;
                // Show next
                document.getElementById(`step-${currentStep}`).classList.remove('hidden');
                // Update Progress
                progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;
                
                if (currentStep === totalSteps) {
                    document.getElementById('next-btn').innerHTML = `Finish Setup <span class="iconify" data-icon="lucide:check" data-width="16"></span>`;
                }
            } else {
                finishOnboarding();
            }
        });

        // Add class to preference buttons on click
        document.querySelectorAll('.pref-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('bg-neutral-900');
                this.classList.toggle('text-white');
                this.classList.toggle('border-neutral-900');
                this.classList.toggle('bg-white');
                this.classList.toggle('text-neutral-600');
            });
        });

        function finishOnboarding() {
            // Fade out
            onboardingFlow.style.opacity = '0';
            onboardingFlow.style.pointerEvents = 'none';
            
            // Show Loader
            const loader = document.getElementById('ai-loader');
            loader.classList.remove('hidden');

            // Simulate AI generation delay
            setTimeout(() => {
                loader.classList.add('hidden');
                onboardingFlow.style.display = 'none'; // Remove from DOM flow
                
                // Set Date
                const date = new Date();
                const options = { weekday: 'long', month: 'short', day: 'numeric' };
                document.getElementById('home-date').innerText = date.toLocaleDateString('en-US', options);
                
                renderCalendar();
            }, 1500);
        }

        // Tab Switching
        function switchTab(tabName) {
            // Update Sidebar State
            document.querySelectorAll('.nav-btn').forEach(btn => {
                if(btn.dataset.target.includes(tabName)) {
                    btn.classList.add('bg-neutral-100', 'text-neutral-900');
                    btn.classList.remove('text-neutral-500', 'hover:bg-neutral-50');
                    // Find icon inside
                    const icon = btn.querySelector('.iconify');
                    if(icon) {
                        icon.classList.remove('text-neutral-400');
                        icon.classList.add('text-neutral-900');
                    }
                } else {
                    btn.classList.remove('bg-neutral-100', 'text-neutral-900');
                    btn.classList.add('text-neutral-500', 'hover:bg-neutral-50');
                     const icon = btn.querySelector('.iconify');
                    if(icon) {
                        icon.classList.add('text-neutral-400');
                        icon.classList.remove('text-neutral-900');
                    }
                }
            });

            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            // Show target
            document.getElementById(`${tabName}-view`).classList.remove('hidden');
        }

        // Calendar Logic
        function renderCalendar() {
            const grid = document.getElementById('calendar-grid');
            grid.innerHTML = '';
            const daysInMonth = 30;
            const startDayOffset = 2; // Start on Tuesday
            
            // Empty slots
            for(let i=0; i<startDayOffset; i++) {
                const div = document.createElement('div');
                grid.appendChild(div);
            }

            const today = new Date().getDate();

            for(let i=1; i<=daysInMonth; i++) {
                const dayBtn = document.createElement('button');
                dayBtn.innerText = i;
                
                // Base classes
                let classes = "w-10 h-10 rounded-full flex items-center justify-center text-sm mx-auto transition-all ";
                
                if (i === today) {
                    classes += "bg-neutral-900 text-white shadow-md font-medium";
                } else if (i < today) {
                     classes += "text-neutral-300 cursor-default";
                } else {
                    classes += "text-neutral-600 hover:bg-neutral-100 cursor-pointer";
                }
                
                dayBtn.className = classes;

                if (i >= today) {
                    dayBtn.onclick = () => selectDate(dayBtn, i);
                }
                
                grid.appendChild(dayBtn);
            }
        }

        function selectDate(element, date) {
            // Visual reset logic would go here
            document.getElementById('selected-date-label').innerText = `Oct ${date}`;
        }

        // Meal Details
        function openMealDetail(type) {
            const overlay = document.getElementById('meal-detail-overlay');
            const backdrop = document.getElementById('meal-detail-backdrop');
            
            backdrop.classList.remove('hidden');
            // Small timeout to allow transition to work
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                overlay.style.transform = 'translateX(0)';
            }, 10);
        }

        function closeMealDetail() {
            const overlay = document.getElementById('meal-detail-overlay');
            const backdrop = document.getElementById('meal-detail-backdrop');
            
            overlay.style.transform = 'translateX(100%)';
            backdrop.classList.add('opacity-0');
            
            setTimeout(() => {
                backdrop.classList.add('hidden');
            }, 300);
        }

        // Initialize first tab state
        switchTab('home');

    
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
      

<div className="fixed inset-0 z-50 bg-white flex items-center justify-center transition-transform duration-700 ease-in-out" id="onboarding-flow">
<div className="w-full max-w-xl p-12">

<div className="w-full h-1 bg-neutral-100 rounded-full mb-10">
<div className="h-full bg-neutral-900 rounded-full transition-all duration-300 w-1/3" id="progress-bar"></div>
</div>

<div className="step-content flex flex-col fade-in" id="step-1">
<h1 className="text-3xl font-semibold tracking-tight mb-3">Tell us about yourself</h1>
<p className="text-neutral-500 text-sm mb-10 font-normal">We need this to calculate your nutritional needs.</p>
<div className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs text-neutral-500 mb-2 ml-1">Age</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all placeholder-neutral-400" id="input-age" placeholder="25" type="number"/>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-2 ml-1">Gender</label>
<select className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all text-neutral-900" id="input-gender">
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="relative">
<label className="block text-xs text-neutral-500 mb-2 ml-1">Height (cm)</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all" id="input-height" placeholder="175" type="number"/>
</div>
<div className="relative">
<label className="block text-xs text-neutral-500 mb-2 ml-1">Weight (kg)</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all" id="input-weight" placeholder="70" type="number"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-2 ml-1">Activity Level</label>
<select className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all text-neutral-900" id="input-activity">
<option value="sedentary">Sedentary (Office job)</option>
<option value="light">Lightly Active (1-3 days/week)</option>
<option value="moderate">Moderately Active (3-5 days/week)</option>
<option value="high">Very Active (6-7 days/week)</option>
</select>
</div>
</div>
</div>

<div className="step-content flex flex-col hidden fade-in" id="step-2">
<h1 className="text-3xl font-semibold tracking-tight mb-3">What is your goal?</h1>
<p className="text-neutral-500 text-sm mb-10 font-normal">The AI will optimize your calories based on this.</p>
<div className="space-y-4">
<label className="cursor-pointer group">
<input checked="" className="custom-radio hidden" name="goal" type="radio" value="lose"/>
<div className="p-5 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center justify-between group-hover:border-neutral-300">
<div>
<h3 className="font-medium text-sm">Lose Weight</h3>
<p className="text-xs text-neutral-400 mt-1">Deficit based meal plan</p>
</div>
<div className="radio-circle w-5 h-5 rounded-full border border-neutral-300 transition-all"></div>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="goal" type="radio" value="maintain"/>
<div className="p-5 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center justify-between group-hover:border-neutral-300">
<div>
<h3 className="font-medium text-sm">Maintain Weight</h3>
<p className="text-xs text-neutral-400 mt-1">Balanced nutrition</p>
</div>
<div className="radio-circle w-5 h-5 rounded-full border border-neutral-300 transition-all"></div>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="goal" type="radio" value="gain"/>
<div className="p-5 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all flex items-center justify-between group-hover:border-neutral-300">
<div>
<h3 className="font-medium text-sm">Gain Muscle</h3>
<p className="text-xs text-neutral-400 mt-1">High protein &amp; surplus</p>
</div>
<div className="radio-circle w-5 h-5 rounded-full border border-neutral-300 transition-all"></div>
</div>
</label>
</div>
</div>

<div className="step-content flex flex-col hidden fade-in" id="step-3">
<h1 className="text-3xl font-semibold tracking-tight mb-3">Any dietary preferences?</h1>
<p className="text-neutral-500 text-sm mb-10 font-normal">We will filter out ingredients you don't like.</p>
<div className="space-y-8">
<div>
<label className="block text-xs text-neutral-500 mb-3 ml-1">Diet Type</label>
<div className="flex flex-wrap gap-3">
<button className="pref-btn px-6 py-2.5 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors bg-white focus:ring-1 focus:ring-neutral-900 focus:bg-neutral-900 focus:text-white">Vegan</button>
<button className="pref-btn px-6 py-2.5 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors bg-white focus:ring-1 focus:ring-neutral-900 focus:bg-neutral-900 focus:text-white">Keto</button>
<button className="pref-btn px-6 py-2.5 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors bg-white focus:ring-1 focus:ring-neutral-900 focus:bg-neutral-900 focus:text-white">Paleo</button>
<button className="pref-btn px-6 py-2.5 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors bg-white focus:ring-1 focus:ring-neutral-900 focus:bg-neutral-900 focus:text-white">None</button>
</div>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-3 ml-1">Allergies</label>
<div className="flex flex-wrap gap-3">
<button className="pref-btn px-6 py-2.5 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors bg-white focus:ring-1 focus:ring-neutral-900 focus:bg-neutral-900 focus:text-white">Nuts</button>
<button className="pref-btn px-6 py-2.5 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors bg-white focus:ring-1 focus:ring-neutral-900 focus:bg-neutral-900 focus:text-white">Dairy</button>
<button className="pref-btn px-6 py-2.5 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors bg-white focus:ring-1 focus:ring-neutral-900 focus:bg-neutral-900 focus:text-white">Gluten</button>
</div>
</div>
</div>
</div>

<div className="mt-12">
<button className="w-full bg-neutral-900 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-neutral-200" id="next-btn">
                    Continue
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>


<aside className="w-64 bg-white border-r border-neutral-200 flex flex-col flex-shrink-0 z-20" id="sidebar">
<div className="p-6">
<div className="flex items-center gap-2 text-neutral-900 mb-8">
<div className="w-6 h-6 bg-neutral-900 rounded-md flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<span className="font-semibold tracking-tight text-sm">AI PLANNER</span>
</div>
<nav className="space-y-1">
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-900 bg-neutral-50 hover:bg-neutral-50 transition-all text-left group" data-target="home-view" onclick="switchTab('home')">
<span className="iconify text-neutral-500 group-hover:text-neutral-900" data-icon="lucide:layout-grid" data-width="18"></span>
                    Dashboard
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all text-left group" data-target="calendar-view" onclick="switchTab('calendar')">
<span className="iconify text-neutral-400 group-hover:text-neutral-900" data-icon="lucide:calendar" data-width="18"></span>
                    Schedule
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all text-left group" data-target="profile-view" onclick="switchTab('profile')">
<span className="iconify text-neutral-400 group-hover:text-neutral-900" data-icon="lucide:user" data-width="18"></span>
                    Profile
                </button>
</nav>
</div>
<div className="mt-auto p-4 border-t border-neutral-100">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center font-medium text-xs">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900 truncate">John Doe</p>
<p className="text-xs text-neutral-400 truncate">Free Plan</p>
</div>
<span className="iconify text-neutral-400" data-icon="lucide:more-vertical" data-width="16"></span>
</div>
</div>
</aside>

<main className="flex-1 relative flex flex-col h-full overflow-hidden bg-neutral-50/50">

<div className="absolute inset-0 z-40 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center hidden" id="ai-loader">
<div className="loader ease-linear rounded-full border-2 border-t-2 border-neutral-200 h-8 w-8 mb-4"></div>
<p className="text-sm font-medium text-neutral-600 animate-pulse">Generating your personalized plan...</p>
</div>

<div className="flex-1 overflow-y-auto p-8 lg:p-12 scroll-smooth" id="main-content">

<div className="view-section max-w-6xl mx-auto fade-in" id="home-view">
<header className="flex justify-between items-end mb-8">
<div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Overview</p>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900" id="home-date">Wednesday, Oct 24</h2>
</div>
<button className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1.5 transition-colors">
                        Edit Preferences <span className="iconify" data-icon="lucide:settings-2" data-width="14"></span>
</button>
</header>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="space-y-6">

<div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-xl shadow-neutral-200/50 relative overflow-hidden h-64 flex flex-col justify-between">
<div className="relative z-10 flex justify-between items-start">
<div>
<p className="text-xs text-neutral-400 mb-1">Daily Target</p>
<h3 className="text-4xl font-semibold tracking-tight">1,840 <span className="text-lg font-normal text-neutral-500">kcal</span></h3>
</div>
<div className="bg-white/10 p-2 rounded-lg">
<span className="iconify" data-icon="lucide:flame" data-width="20"></span>
</div>
</div>
<div className="relative z-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
<div>
<p className="text-[10px] text-neutral-400 uppercase tracking-wide mb-1">Protein</p>
<p className="font-medium">140g</p>
</div>
<div>
<p className="text-[10px] text-neutral-400 uppercase tracking-wide mb-1">Carbs</p>
<p className="font-medium">180g</p>
</div>
<div>
<p className="text-[10px] text-neutral-400 uppercase tracking-wide mb-1">Fat</p>
<p className="font-medium">60g</p>
</div>
</div>

<div className="absolute -right-10 -top-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-200">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-neutral-900">Hydration</h3>
<span className="text-xs text-neutral-500">1.5 / 2.5 L</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-2 mb-4">
<div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg border border-neutral-200 text-xs font-medium hover:bg-neutral-50 transition-colors">+ 250ml</button>
<button className="flex-1 py-2 rounded-lg border border-neutral-200 text-xs font-medium hover:bg-neutral-50 transition-colors">+ 500ml</button>
</div>
</div>
</div>

<div className="lg:col-span-2">
<h3 className="text-sm font-medium text-neutral-900 mb-4">Today's Meals</h3>
<div className="space-y-4">

<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all cursor-pointer flex gap-5 items-center group" onclick="openMealDetail('breakfast')">
<div className="w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 group-hover:bg-neutral-50 group-hover:text-neutral-600 transition-colors">
<span className="iconify" data-icon="lucide:coffee" data-width="28"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Breakfast</p>
<span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">450 kcal</span>
</div>
<h4 className="font-semibold text-neutral-900 text-lg leading-tight truncate">Oatmeal with Berries &amp; Honey</h4>
<p className="text-sm text-neutral-500 mt-1 line-clamp-1">Rich in fiber and antioxidants. Quick prep.</p>
</div>
<div className="text-neutral-300 group-hover:text-neutral-900 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all cursor-pointer flex gap-5 items-center group" onclick="openMealDetail('lunch')">
<div className="w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 group-hover:bg-neutral-50 group-hover:text-neutral-600 transition-colors">
<span className="iconify" data-icon="lucide:utensils" data-width="28"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Lunch</p>
<span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">620 kcal</span>
</div>
<h4 className="font-semibold text-neutral-900 text-lg leading-tight truncate">Grilled Chicken Quinoa Bowl</h4>
<p className="text-sm text-neutral-500 mt-1 line-clamp-1">High protein with mixed veggies.</p>
</div>
<div className="text-neutral-300 group-hover:text-neutral-900 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all cursor-pointer flex gap-5 items-center group" onclick="openMealDetail('dinner')">
<div className="w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 group-hover:bg-neutral-50 group-hover:text-neutral-600 transition-colors">
<span className="iconify" data-icon="lucide:moon" data-width="28"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Dinner</p>
<span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">580 kcal</span>
</div>
<h4 className="font-semibold text-neutral-900 text-lg leading-tight truncate">Baked Salmon &amp; Asparagus</h4>
<p className="text-sm text-neutral-500 mt-1 line-clamp-1">Healthy fats and light dinner.</p>
</div>
<div className="text-neutral-300 group-hover:text-neutral-900 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all cursor-pointer flex gap-5 items-center group opacity-80" onclick="openMealDetail('snack')">
<div className="w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 group-hover:bg-neutral-50 group-hover:text-neutral-600 transition-colors">
<span className="iconify" data-icon="lucide:apple" data-width="28"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Snack</p>
<span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">190 kcal</span>
</div>
<h4 className="font-semibold text-neutral-900 text-lg leading-tight truncate">Greek Yogurt Cup</h4>
<p className="text-sm text-neutral-500 mt-1 line-clamp-1">Protein boost.</p>
</div>
<div className="text-neutral-300 group-hover:text-neutral-900 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden max-w-5xl mx-auto fade-in" id="calendar-view">
<header className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Meal Schedule</h2>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50"><span className="iconify" data-icon="lucide:chevron-left"></span></button>
<span className="text-sm font-medium w-24 text-center">October 2023</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50"><span className="iconify" data-icon="lucide:chevron-right"></span></button>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm h-fit">
<div className="grid grid-cols-7 gap-y-6 text-center text-xs font-medium text-neutral-400 mb-4 uppercase tracking-wider">
<div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
</div>
<div className="grid grid-cols-7 gap-4 text-center text-sm font-medium text-neutral-700" id="calendar-grid">

</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Plan for <span className="text-neutral-900" id="selected-date-label">Today</span></p>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">Regenerate Day</button>
</div>
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
<div className="flex gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-colors">B</div>
<div className="flex-1 border-b border-neutral-100 pb-4">
<h5 className="text-sm font-medium text-neutral-900">Avocado Toast &amp; Eggs</h5>
<p className="text-xs text-neutral-500 mt-1">450 kcal • 20g Protein</p>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-colors">L</div>
<div className="flex-1 border-b border-neutral-100 pb-4">
<h5 className="text-sm font-medium text-neutral-900">Turkey Wrap</h5>
<p className="text-xs text-neutral-500 mt-1">600 kcal • 45g Protein</p>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-colors">D</div>
<div className="flex-1">
<h5 className="text-sm font-medium text-neutral-900">Lean Steak &amp; Salad</h5>
<p className="text-xs text-neutral-500 mt-1">550 kcal • 50g Protein</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden max-w-3xl mx-auto fade-in" id="profile-view">
<header className="mb-10 flex items-center gap-6">
<div className="w-24 h-24 rounded-full bg-neutral-900 text-white flex items-center justify-center text-3xl font-medium shadow-lg">JD</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">John Doe</h2>
<div className="flex gap-2 mt-2">
<span className="px-2.5 py-1 bg-neutral-100 rounded-md text-xs font-medium text-neutral-600 border border-neutral-200">Goal: Lose Weight</span>
<span className="px-2.5 py-1 bg-green-50 rounded-md text-xs font-medium text-green-700 border border-green-100">Pro Member</span>
</div>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<section>
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-3 ml-1">Personal Details</h3>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
<div className="p-4 border-b border-neutral-100 flex justify-between items-center hover:bg-neutral-50 transition-colors">
<span className="text-sm text-neutral-600">Height</span>
<span className="text-sm font-medium">175 cm</span>
</div>
<div className="p-4 border-b border-neutral-100 flex justify-between items-center hover:bg-neutral-50 transition-colors">
<span className="text-sm text-neutral-600">Weight</span>
<span className="text-sm font-medium">70 kg</span>
</div>
<div className="p-4 flex justify-between items-center hover:bg-neutral-50 transition-colors">
<span className="text-sm text-neutral-600">Age</span>
<span className="text-sm font-medium">25</span>
</div>
</div>
</section>
<section>
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-3 ml-1">Preferences</h3>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
<div className="p-4 border-b border-neutral-100 flex justify-between items-center cursor-pointer hover:bg-neutral-50 transition-colors">
<span className="text-sm text-neutral-600">Dietary Type</span>
<div className="flex items-center gap-2">
<span className="text-sm font-medium">None</span>
<span className="iconify text-neutral-400" data-icon="lucide:chevron-right" data-width="14"></span>
</div>
</div>
<div className="p-4 flex justify-between items-center cursor-pointer hover:bg-neutral-50 transition-colors">
<span className="text-sm text-neutral-600">Dislikes &amp; Allergies</span>
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Nuts</span>
<span className="iconify text-neutral-400" data-icon="lucide:chevron-right" data-width="14"></span>
</div>
</div>
</div>
</section>
</div>
<div className="mt-10 flex justify-end">
<button className="px-6 py-2.5 text-sm text-red-600 border border-red-200 bg-red-50 hover:bg-red-100 rounded-lg font-medium transition-colors">Log Out</button>
</div>
</div>
</div>
</main>

<div className="fixed inset-y-0 right-0 z-50 w-full md:w-[480px] bg-white shadow-2xl translate-x-full transition-transform duration-300 ease-out border-l border-neutral-200 flex flex-col" id="meal-detail-overlay">
<div className="relative h-72 bg-neutral-100 w-full shrink-0 group">

<div className="absolute inset-0 flex items-center justify-center text-neutral-300">
<span className="iconify" data-icon="lucide:image" data-width="64"></span>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<button className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-white border border-white/30 hover:bg-white/30 transition-all" onclick="closeMealDetail()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="2" data-width="20"></span>
</button>
<div className="absolute bottom-6 left-6 right-6">
<span className="px-2.5 py-1 bg-white/90 backdrop-blur text-indigo-900 text-[10px] font-bold uppercase tracking-wider rounded-md mb-2 inline-block shadow-sm">Breakfast</span>
<h1 className="text-2xl font-semibold tracking-tight text-white shadow-sm">Oatmeal with Berries &amp; Honey</h1>
</div>
</div>
<div className="flex-1 overflow-y-auto p-8">

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="bg-neutral-50 rounded-xl p-4 text-center border border-neutral-100">
<p className="text-[10px] text-neutral-500 uppercase tracking-wide mb-1">Protein</p>
<p className="text-lg font-semibold text-neutral-900">12g</p>
</div>
<div className="bg-neutral-50 rounded-xl p-4 text-center border border-neutral-100">
<p className="text-[10px] text-neutral-500 uppercase tracking-wide mb-1">Carbs</p>
<p className="text-lg font-semibold text-neutral-900">64g</p>
</div>
<div className="bg-neutral-50 rounded-xl p-4 text-center border border-neutral-100">
<p className="text-[10px] text-neutral-500 uppercase tracking-wide mb-1">Fats</p>
<p className="text-lg font-semibold text-neutral-900">8g</p>
</div>
</div>
<div className="space-y-8">
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-4 flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:shopping-bag" data-width="16"></span> 
                        Ingredients
                    </h3>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm text-neutral-600 border-b border-neutral-50 pb-2">
<span>Rolled Oats</span>
<span className="font-medium text-neutral-900">1/2 cup</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-600 border-b border-neutral-50 pb-2">
<span>Almond Milk</span>
<span className="font-medium text-neutral-900">1 cup</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-600 border-b border-neutral-50 pb-2">
<span>Mixed Berries</span>
<span className="font-medium text-neutral-900">1/4 cup</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-600 border-b border-neutral-50 pb-2">
<span>Honey</span>
<span className="font-medium text-neutral-900">1 tbsp</span>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-4 flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:chef-hat" data-width="16"></span>
                         Preparation
                    </h3>
<div className="space-y-6 relative pl-2">

<div className="absolute left-[11px] top-2 bottom-4 w-[2px] bg-neutral-100"></div>
<div className="flex gap-5 relative">
<span className="shrink-0 w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">1</span>
<p className="text-sm text-neutral-600 leading-relaxed pt-0.5">Combine oats and milk in a small pot over medium heat.</p>
</div>
<div className="flex gap-5 relative">
<span className="shrink-0 w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">2</span>
<p className="text-sm text-neutral-600 leading-relaxed pt-0.5">Bring to a simmer and cook for 5-7 minutes until thickened, stirring occasionally.</p>
</div>
<div className="flex gap-5 relative">
<span className="shrink-0 w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">3</span>
<p className="text-sm text-neutral-600 leading-relaxed pt-0.5">Transfer to a bowl and top with fresh berries and a drizzle of honey.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 hidden transition-opacity duration-300 opacity-0" id="meal-detail-backdrop" onclick="closeMealDetail()"></div>


    </>
  );
}
