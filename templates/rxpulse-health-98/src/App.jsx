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
darkMode: 'class',
theme: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
extend: {
colors: {
slate: { 850: '#151F2E', 950: '#020617' },
indigo: { 550: '#565add' }
},
animation: {
'fade-in': 'fadeIn 0.2s ease-out forwards',
'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
}
}
}
}



        const state = {
            role: 'patient', 
            history: ['screen-onboarding'],
            currentScreen: 'screen-onboarding'
        };

        const router = {
            push: (screenId) => {
                state.history.push(screenId);
                showScreen(screenId);
            },
            back: () => {
                if (state.history.length > 1) {
                    state.history.pop();
                    showScreen(state.history[state.history.length - 1]);
                }
            }
        };

        function showScreen(screenId) {
            document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById(screenId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.remove('animate-slide-up');
                void target.offsetWidth; 
                target.classList.add('animate-slide-up');
            }
            state.currentScreen = screenId;
            updateBottomNav(screenId);
        }

        function selectLanguage(btn) {
            document.querySelectorAll('.lang-btn').forEach(b => {
                b.className = 'lang-btn flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs font-medium transition-colors';
            });
            btn.className = 'lang-btn flex-1 py-2.5 rounded-xl border border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium transition-colors';
        }

        function selectRole(role) {
            state.role = role;
            document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('border-indigo-600', 'bg-indigo-50'));
            router.push('screen-auth');
        }

        function handleLogin() {
            const btn = document.querySelector('#screen-auth button');
            const original = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="line-md:loading-loop" width="24"></iconify-icon>';
            setTimeout(() => {
                btn.innerHTML = original;
                if (state.role === 'patient') {
                    router.push('screen-home');
                } else {
                    router.push('screen-doctor-home');
                }
            }, 1000);
        }

        function switchTab(tabName) {
            let screenId = 'screen-' + tabName;
            document.querySelectorAll('.nav-btn-patient, .nav-btn-doctor').forEach(btn => {
                btn.classList.remove('text-indigo-600');
                const icon = btn.querySelector('iconify-icon');
                if(icon) {
                    let iconName = icon.getAttribute('icon');
                    if(iconName.includes('-bold')) icon.setAttribute('icon', iconName.replace('-bold', '-linear'));
                }
            });
            const activeBtn = document.querySelector(`button[data-target="${tabName}"]`);
            if (activeBtn) {
                activeBtn.classList.add('text-indigo-600');
                const icon = activeBtn.querySelector('iconify-icon');
                let iconName = icon.getAttribute('icon');
                if(iconName.includes('-linear')) icon.setAttribute('icon', iconName.replace('-linear', '-bold'));
            }
            router.push(screenId);
        }

        function updateBottomNav(screenId) {
            const nav = document.getElementById('bottom-nav');
            const patientScreens = ['screen-home', 'screen-prescriptions', 'screen-schedule', 'screen-reports', 'screen-profile'];
            const doctorScreens = ['screen-doctor-home', 'screen-doctor-patients', 'screen-doctor-settings'];
            const allNavScreens = [...patientScreens, ...doctorScreens];

            if (allNavScreens.includes(screenId)) {
                nav.classList.remove('hidden');
                nav.classList.add('flex');
                
                if (state.role === 'patient') {
                    document.querySelectorAll('.nav-btn-patient').forEach(el => { el.classList.remove('hidden'); el.classList.add('flex'); });
                    document.querySelectorAll('.nav-btn-doctor').forEach(el => { el.classList.add('hidden'); el.classList.remove('flex'); });
                } else {
                    document.querySelectorAll('.nav-btn-patient').forEach(el => { el.classList.add('hidden'); el.classList.remove('flex'); });
                    document.querySelectorAll('.nav-btn-doctor').forEach(el => { el.classList.remove('hidden'); el.classList.add('flex'); });
                }
            } else {
                nav.classList.add('hidden');
                nav.classList.remove('flex');
            }
        }

        function markDone(btn) {
            btn.innerHTML = '<iconify-icon icon="line-md:loading-loop" width="20"></iconify-icon>';
            setTimeout(() => {
                btn.classList.remove('bg-indigo-50', 'text-indigo-600', 'hover:bg-indigo-600', 'hover:text-white');
                btn.classList.add('bg-emerald-500', 'text-white');
                btn.innerHTML = '<iconify-icon icon="solar:check-bold" width="16"></iconify-icon>';
                showToast("Dose recorded successfully");
                btn.closest('.group').classList.add('opacity-50');
            }, 600);
        }

        function simulateUpload() {
            document.getElementById('add-step-1').classList.add('hidden');
            document.getElementById('add-step-loading').classList.remove('hidden');
            document.getElementById('add-step-loading').classList.add('flex');
            setTimeout(() => {
                document.getElementById('add-step-1').classList.remove('hidden');
                document.getElementById('add-step-loading').classList.add('hidden');
                document.getElementById('add-step-loading').classList.remove('flex');
                router.push('screen-prescription-details');
                showToast("Prescription Digitized!");
            }, 2000);
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = msg;
            toast.classList.remove('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
            }, 3000);
        }

        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
        }

        showScreen('screen-onboarding');
    
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
      

<div className="relative w-full sm:max-w-[400px] h-[100dvh] sm:h-[850px] bg-white dark:bg-slate-950 shadow-2xl sm:rounded-[3rem] overflow-hidden sm:border-[8px] border-slate-900/5 dark:border-slate-800/50 flex flex-col" id="app-frame">

<div className="h-12 w-full flex justify-between items-center px-6 pt-3 select-none z-50 absolute top-0 left-0 bg-gradient-to-b from-white/90 to-transparent dark:from-slate-950/90 pointer-events-none backdrop-blur-[2px]">
<span className="text-xs font-semibold tracking-wide text-slate-900 dark:text-white">9:41</span>
<div className="flex gap-1.5 items-center text-slate-900 dark:text-white">
<iconify-icon icon="solar:signal-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="16"></iconify-icon>
</div>
</div>

<main className="flex-1 relative w-full h-full overflow-hidden" id="screen-container">

<div className="screen absolute inset-0 flex flex-col bg-white dark:bg-slate-950 z-30 overflow-y-auto" id="screen-onboarding">

<div className="h-64 w-full relative">
<img alt="Medical" className="w-full h-full object-cover opacity-90 dark:opacity-60 mask-image-b" src="https://images.unsplash.com/photo-1631549916768-4119b2d5f926?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-950"></div>
<div className="absolute top-14 right-8">
<button className="p-2 rounded-full bg-white/50 backdrop-blur-md dark:bg-black/20 text-slate-800 dark:text-slate-200" onclick="toggleTheme()">
<iconify-icon icon="solar:sun-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="px-8 pb-8 pt-2 flex flex-col flex-1">
<div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mb-6 shadow-xl shadow-indigo-600/20 -mt-10 relative z-10 border-4 border-white dark:border-slate-950">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="2" width="32"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight mb-3">
                        Health care,<br/><span className="text-indigo-600">reimagined.</span>
</h1>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                        Manage prescriptions, track adherence, and connect with your doctor seamlessly.
                    </p>
<div className="space-y-6">
<label className="block">
<span className="text-xs font-medium text-slate-500 mb-3 block">Select Language</span>
<div className="flex gap-2">
<button className="lang-btn flex-1 py-2.5 rounded-xl border border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium transition-colors" onclick="selectLanguage(this)">English</button>
<button className="lang-btn flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs font-medium transition-colors" onclick="selectLanguage(this)">বাংলা</button>
<button className="lang-btn flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs font-medium transition-colors" onclick="selectLanguage(this)">हिंदी</button>
</div>
</label>
<label className="block">
<span className="text-xs font-medium text-slate-500 mb-3 block">I am a</span>
<div className="grid grid-cols-2 gap-3">
<button className="role-btn p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-500 group text-left relative overflow-hidden transition-colors" onclick="selectRole('patient')">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 mb-2 transition-colors" icon="solar:user-heart-linear" width="24"></iconify-icon>
<div className="font-medium text-sm">Patient</div>
</button>
<button className="role-btn p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-500 group text-left relative overflow-hidden transition-colors" onclick="selectRole('doctor')">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 mb-2 transition-colors" icon="solar:stethoscope-linear" width="24"></iconify-icon>
<div className="font-medium text-sm">Doctor</div>
</button>
</div>
</label>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-indigo-600 text-white font-medium py-4 rounded-2xl shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2" onclick="router.push('screen-auth')">
                            Continue
                        </button>
</div>
</div>
</div>

<div className="screen hidden absolute inset-0 flex flex-col p-6 pt-20 bg-white dark:bg-slate-950 z-30" id="screen-auth">
<button className="absolute top-12 left-6 p-2 -ml-2 text-slate-400 hover:text-slate-900 dark:hover:text-white" onclick="router.back()"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<h2 className="text-2xl font-semibold tracking-tight mb-2 dark:text-white mt-4">Login</h2>
<p className="text-xs text-slate-500 mb-8">We'll send you a verification code.</p>
<div className="space-y-4">
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium border-r border-slate-200 pr-3">+880</span>
<input className="w-full pl-20 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:text-white font-mono tracking-wide" type="tel" value="1712 345 678"/>
</div>
</div>
<button className="w-full mt-6 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-medium py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2" onclick="handleLogin()">
                    Send Code
                </button>
</div>


<div className="screen hidden absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 pb-20 overflow-y-auto no-scrollbar" id="screen-home">
<div className="px-6 pt-14 pb-4 bg-white dark:bg-slate-900 sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800">
<div className="flex justify-between items-center">
<div>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Today, 24 Oct</p>
<h2 className="text-lg font-semibold text-slate-900 dark:text-white">Good Morning, Rahim</h2>
</div>
<button className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700" onclick="router.push('screen-profile')">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahim"/>
</button>
</div>
</div>
<div className="p-6 space-y-6">
<div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 p-4 rounded-2xl flex items-start gap-3">
<div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-full text-rose-600"><iconify-icon icon="solar:alarm-linear" width="16"></iconify-icon></div>
<div>
<h4 className="text-sm font-semibold text-rose-700 dark:text-rose-400">Missed Dose</h4>
<p className="text-[11px] text-rose-600/80 dark:text-rose-500">You missed 'Napa Extra' yesterday night.</p>
</div>
</div>
<div className="bg-indigo-600 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg shadow-indigo-600/20 card-interactive" onclick="switchTab('schedule')">
<div className="relative z-10 flex justify-between items-end">
<div>
<p className="text-xs font-medium opacity-70 mb-1">Upcoming Dose</p>
<h3 className="text-2xl font-bold tracking-tight">2:00 PM</h3>
<p className="text-sm mt-1 font-medium">Omeprazole 20mg</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 opacity-10" icon="solar:clock-circle-bold" width="120"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 shadow-sm card-interactive" onclick="router.push('screen-add-prescription')">
<div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:camera-add-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium">Add Rx</span>
</button>
<button className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 shadow-sm card-interactive" onclick="switchTab('reports')">
<div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium">Report</span>
</button>
</div>
<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold">Today's Timeline</h3>
<button className="text-[10px] text-indigo-600 font-medium" onclick="switchTab('schedule')">View All</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-indigo-200 dark:border-indigo-900 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
<div className="w-10 text-center text-[10px] text-slate-900 dark:text-white font-bold">14:00</div>
<div className="h-8 w-[2px] bg-slate-200 dark:bg-slate-700 rounded-full"></div>
<div className="flex-1">
<h4 className="text-xs font-medium">Omeprazole</h4>
<p className="text-[10px] text-slate-500">Before Meal</p>
</div>
<button className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors" onclick="markDone(this)">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="screen hidden absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 pb-20" id="screen-prescriptions">
<div className="px-6 pt-14 pb-4 bg-white dark:bg-slate-900 sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h2 className="text-lg font-semibold">Prescriptions</h2>
<button className="text-indigo-600" onclick="router.push('screen-add-prescription')"><iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon></button>
</div>
<div className="p-6 space-y-4 overflow-y-auto no-scrollbar">
<div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-indigo-100 dark:border-slate-800 shadow-sm card-interactive relative overflow-hidden" onclick="router.push('screen-prescription-details')">
<div className="absolute top-0 right-0 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 text-[10px] font-medium rounded-bl-xl">Active</div>
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 text-xs font-bold">DA</div>
<div>
<h3 className="text-sm font-semibold">Dr. Anjali</h3>
<p className="text-[10px] text-slate-500">Cardiologist • Apollo Hospital</p>
</div>
</div>
<div className="flex gap-2 mb-3 flex-wrap">
<span className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg text-[10px] text-slate-600 dark:text-slate-400">Napa Extra</span>
<span className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg text-[10px] text-slate-600 dark:text-slate-400">Bizoran</span>
</div>
</div>
</div>
</div>
<div className="screen hidden absolute inset-0 flex flex-col bg-white dark:bg-slate-950 z-30 overflow-y-auto pb-24" id="screen-prescription-details">
<div className="px-6 pt-14 pb-4 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-20 flex items-center gap-4 border-b border-slate-100 dark:border-slate-800">
<button className="p-2 -ml-2 text-slate-600 dark:text-slate-300" onclick="router.back()"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<h2 className="text-sm font-semibold">Prescription #8821</h2>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 font-bold">DA</div>
<div><h3 className="font-semibold text-base">Dr. Anjali</h3><p className="text-xs text-slate-500">Cardiologist</p></div>
</div>
<button className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600"><iconify-icon icon="solar:phone-linear" width="20"></iconify-icon></button>
</div>
<div className="w-full h-32 rounded-2xl bg-slate-100 dark:bg-slate-900 overflow-hidden mb-8 relative border border-slate-200 dark:border-slate-800">
<img alt="Rx" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10">
<button className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg text-xs font-medium shadow-sm flex items-center gap-2"><iconify-icon icon="solar:eye-linear"></iconify-icon> View Original</button>
</div>
</div>
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Medicines</h3>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
<div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-600 shadow-sm"><iconify-icon icon="solar:pill-linear" width="20"></iconify-icon></div>
<div className="flex-1">
<div className="flex justify-between items-start"><h4 className="font-semibold text-sm">Napa Extra</h4><span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">500mg</span></div>
<p className="text-xs text-slate-500 mt-1">1 - 0 - 1 • After Meal</p>
</div>
</div>
</div>
</div>
</div>


<div className="screen hidden absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 pb-20" id="screen-doctor-home">
<div className="px-6 pt-14 pb-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-20">
<div className="flex justify-between items-center">
<div>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Welcome,</p>
<h2 className="text-lg font-semibold text-slate-900 dark:text-white">Dr. Anjali</h2>
</div>
<div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
<img alt="Doctor" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali&amp;hair=long01"/>
</div>
</div>
<div className="flex gap-3 mt-6">
<div className="flex-1 bg-indigo-50 dark:bg-slate-800 rounded-2xl p-3 border border-indigo-100 dark:border-slate-700">
<p className="text-[10px] text-slate-500 dark:text-slate-400 mb-1">Today</p>
<p className="text-xl font-bold text-indigo-900 dark:text-indigo-300">24 Patients</p>
</div>
<div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-3 border border-slate-200 dark:border-slate-700">
<p className="text-[10px] text-slate-500 dark:text-slate-400 mb-1">Total</p>
<p className="text-xl font-bold text-slate-900 dark:text-white">1,204</p>
</div>
</div>
</div>
<div className="p-6 space-y-6 overflow-y-auto no-scrollbar">
<button className="w-full bg-indigo-600 text-white p-5 rounded-2xl shadow-lg shadow-indigo-600/20 flex items-center justify-between group active:scale-[0.98] transition-all" onclick="router.push('screen-create-prescription')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<h3 className="font-medium text-sm">Create Prescription</h3>
<p className="text-[10px] opacity-80">Digital &amp; Instant</p>
</div>
</div>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
<button className="text-[10px] text-indigo-600 font-medium" onclick="switchTab('doctor-patients')">View All</button>
</div>
<div className="space-y-3">
<div className="bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full bg-slate-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"/>
<div><h4 className="text-xs font-medium">Rahul Kumar</h4><p className="text-[10px] text-slate-400">10:30 AM • Checkup</p></div>
</div>
<span className="text-[10px] text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">Completed</span>
</div>
<div className="bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full bg-slate-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div><h4 className="text-xs font-medium">Sarah Kabir</h4><p className="text-[10px] text-slate-400">09:15 AM • Report</p></div>
</div>
<span className="text-[10px] text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">New Lab</span>
</div>
</div>
</div>
</div>
</div>

<div className="screen hidden absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 pb-20" id="screen-doctor-patients">
<div className="px-6 pt-14 pb-4 bg-white dark:bg-slate-900 sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800">
<h2 className="text-lg font-semibold mb-4">My Patients</h2>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="Search patients..." type="text"/>
</div>
</div>
<div className="p-6 space-y-3 overflow-y-auto no-scrollbar">
<div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between card-interactive">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"/>
<div><h4 className="text-sm font-medium">Rahul Kumar</h4><p className="text-[10px] text-slate-400">Last visit: 2 days ago</p></div>
</div>
<button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400"><iconify-icon icon="solar:phone-linear"></iconify-icon></button>
</div>
<div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between card-interactive">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima"/>
<div><h4 className="text-sm font-medium">Fatima Begum</h4><p className="text-[10px] text-slate-400">Last visit: 1 week ago</p></div>
</div>
<button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400"><iconify-icon icon="solar:phone-linear"></iconify-icon></button>
</div>
<div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between card-interactive">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"/>
<div><h4 className="text-sm font-medium">John Doe</h4><p className="text-[10px] text-slate-400">Last visit: 3 weeks ago</p></div>
</div>
<button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400"><iconify-icon icon="solar:phone-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="screen hidden absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 pb-20" id="screen-doctor-settings">
<div className="px-6 pt-14 pb-4 bg-white dark:bg-slate-900 sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800">
<h2 className="text-lg font-semibold">Settings</h2>
</div>
<div className="p-6 space-y-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali&amp;hair=long01"/>
</div>
<div>
<h3 className="text-lg font-bold">Dr. Anjali</h3>
<p className="text-xs text-indigo-600 font-medium">Cardiologist • MBBS, FCPS</p>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Set Availability</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:hospital-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Clinic Details</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<button className="w-full py-4 text-rose-600 text-sm font-medium bg-rose-50 dark:bg-rose-900/10 rounded-2xl" onclick="router.push('screen-onboarding')">Log Out</button>
</div>
</div>

<div className="screen hidden absolute inset-0 flex flex-col bg-white dark:bg-slate-950 z-40" id="screen-add-prescription">
<div className="px-6 pt-14 pb-4 flex items-center gap-4">
<button className="p-2 -ml-2 text-slate-600 dark:text-slate-300" onclick="router.back()"><iconify-icon icon="solar:close-linear" width="24"></iconify-icon></button>
<h2 className="text-lg font-semibold">Add Prescription</h2>
</div>
<div className="flex-1 flex flex-col p-6" id="add-step-1">
<div className="flex-1 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 group cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" onclick="simulateUpload()">
<div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:camera-linear" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-900 dark:text-white">Tap to Scan</p>
<p className="text-xs text-slate-500 mt-1">or upload from gallery</p>
</div>
<div className="mt-6 text-center">
<button className="text-xs text-indigo-600 font-medium" onclick="router.push('screen-prescriptions')">Enter Manually</button>
</div>
</div>
<div className="hidden flex-1 flex flex-col items-center justify-center p-6" id="add-step-loading">
<iconify-icon className="text-indigo-600 mb-4" icon="line-md:loading-loop" width="48"></iconify-icon>
<p className="text-sm font-medium">Analyzing prescription...</p>
</div>
</div>
<div className="screen hidden absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 pb-20" id="screen-schedule">
<div className="px-6 pt-14 pb-4 bg-white dark:bg-slate-900 sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h2 className="text-lg font-semibold">Schedule</h2>
<div className="flex gap-2"><button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500"><iconify-icon icon="solar:calendar-linear"></iconify-icon></button></div>
</div>
<div className="px-6 py-4 flex justify-between items-center bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
<div className="flex flex-col items-center gap-1 opacity-50"><span className="text-[10px] font-medium text-slate-500">Mon</span><span className="text-xs font-semibold">23</span></div>
<div className="flex flex-col items-center gap-1 bg-indigo-600 text-white px-3 py-2 rounded-xl shadow-md"><span className="text-[10px] font-medium opacity-80">Tue</span><span className="text-xs font-semibold">24</span></div>
<div className="flex flex-col items-center gap-1 opacity-50"><span className="text-[10px] font-medium text-slate-500">Wed</span><span className="text-xs font-semibold">25</span></div>
<div className="flex flex-col items-center gap-1 opacity-50"><span className="text-[10px] font-medium text-slate-500">Thu</span><span className="text-xs font-semibold">26</span></div>
</div>
<div className="p-6 space-y-6 overflow-y-auto no-scrollbar pb-24">
<div>
<h3 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">Morning</h3>
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 mb-3 opacity-60">
<div className="flex justify-between items-center">
<div><h4 className="font-medium text-sm line-through decoration-slate-400">Paracetamol</h4><p className="text-[10px] text-slate-500">500mg • After Breakfast</p></div>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">Afternoon</h3>
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-indigo-200 dark:border-indigo-900 p-4 mb-3 shadow-sm relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
<div className="flex justify-between items-center">
<div><h4 className="font-medium text-sm">Omeprazole</h4><p className="text-[10px] text-slate-500">20mg • Before Lunch</p></div>
<div className="flex gap-2">
<button className="p-2 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100"><iconify-icon icon="solar:close-linear"></iconify-icon></button>
<button className="p-2 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100" onclick="markDone(this)"><iconify-icon icon="solar:check-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="screen hidden absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 pb-20" id="screen-reports">
<div className="px-6 pt-14 pb-4 bg-white dark:bg-slate-900 sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800"><h2 className="text-lg font-semibold">Reports</h2></div>
<div className="p-6 space-y-6 overflow-y-auto no-scrollbar">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800"><p className="text-[10px] text-slate-500 uppercase">Weekly Adherence</p><p className="text-2xl font-bold text-indigo-600 mt-1">92%</p></div>
<div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800"><p className="text-[10px] text-slate-500 uppercase">Doses Taken</p><p className="text-2xl font-bold text-emerald-600 mt-1">24/26</p></div>
</div>
<div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
<h3 className="text-sm font-semibold mb-6">Weekly Overview</h3>
<div className="flex justify-between items-end h-32 gap-2">
<div className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-t-lg relative group h-[80%]"><div className="absolute bottom-0 w-full bg-emerald-500 rounded-t-lg h-[90%]"></div><span className="absolute -bottom-6 w-full text-center text-[10px] text-slate-400">M</span></div>
<div className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-t-lg relative group h-[80%]"><div className="absolute bottom-0 w-full bg-emerald-500 rounded-t-lg h-[100%]"></div><span className="absolute -bottom-6 w-full text-center text-[10px] text-slate-400">T</span></div>
<div className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-t-lg relative group h-[80%]"><div className="absolute bottom-0 w-full bg-rose-500 rounded-t-lg h-[60%]"></div><span className="absolute -bottom-6 w-full text-center text-[10px] text-slate-400">W</span></div>
<div className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-t-lg relative group h-[80%]"><div className="absolute bottom-0 w-full bg-emerald-500 rounded-t-lg h-[100%]"></div><span className="absolute -bottom-6 w-full text-center text-[10px] text-slate-400">T</span></div>
<div className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-t-lg relative group h-[80%]"><div className="absolute bottom-0 w-full bg-emerald-500 rounded-t-lg h-[95%]"></div><span className="absolute -bottom-6 w-full text-center text-[10px] text-slate-400">F</span></div>
<div className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-t-lg relative group h-[80%]"><div className="absolute bottom-0 w-full bg-slate-200 rounded-t-lg h-[0%]"></div><span className="absolute -bottom-6 w-full text-center text-[10px] text-slate-400">S</span></div>
<div className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-t-lg relative group h-[80%]"><div className="absolute bottom-0 w-full bg-slate-200 rounded-t-lg h-[0%]"></div><span className="absolute -bottom-6 w-full text-center text-[10px] text-slate-400">S</span></div>
</div>
</div>
</div>
</div>
<div className="screen hidden absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 pb-20" id="screen-profile">
<div className="px-6 pt-14 pb-4 bg-white dark:bg-slate-900 sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800"><h2 className="text-lg font-semibold">Profile</h2></div>
<div className="p-6 space-y-6 overflow-y-auto no-scrollbar">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahim"/></div>
<div><h3 className="text-lg font-bold">Rahim Ahmed</h3><p className="text-xs text-slate-500">+880 1712 345 678</p></div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:user-linear" width="20"></iconify-icon><span className="text-sm font-medium">Personal Information</span></div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<div className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:settings-linear" width="20"></iconify-icon><span className="text-sm font-medium">General Settings</span></div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<button className="w-full py-4 text-rose-600 text-sm font-medium bg-rose-50 dark:bg-rose-900/10 rounded-2xl" onclick="router.push('screen-onboarding')">Log Out</button>
</div>
</div>
<div className="screen hidden absolute inset-0 flex flex-col bg-white dark:bg-slate-950 z-30" id="screen-create-prescription">
<div className="px-6 pt-14 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-20">
<button className="p-2 -ml-2 text-slate-600 dark:text-slate-300" onclick="router.back()"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<h2 className="text-sm font-semibold">New Prescription</h2>
</div>
<div className="p-6 space-y-6 overflow-y-auto no-scrollbar pb-24">
<div>
<label className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Patient Mobile</label>
<input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm outline-none focus:border-indigo-500" placeholder="Search..." type="tel"/>
</div>
<div className="p-4 rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/50">
<div className="flex justify-between mb-2"><h3 className="text-xs font-bold">Add Medicine</h3></div>
<input className="w-full px-3 py-2 bg-white rounded-lg text-sm mb-2 border border-slate-200" placeholder="Name (e.g. Napa)" type="text"/>
<button className="w-full mt-2 py-2 bg-indigo-600 text-white text-xs font-medium rounded-lg" onclick="showToast('Medicine Added')">Add to List</button>
</div>
</div>
<div className="p-4 border-t border-slate-100 dark:border-slate-800 mt-auto bg-white dark:bg-slate-950">
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl shadow-lg" onclick="showToast('Sent Successfully'); router.back()">Send Prescription</button>
</div>
</div>
</main>

<nav className="hidden absolute bottom-0 left-0 w-full bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-6 py-3 pb-8 z-40 justify-between items-center text-slate-400" id="bottom-nav">

<button className="nav-btn-patient flex flex-col items-center gap-1 text-indigo-600" data-target="home" onclick="switchTab('home')">
<iconify-icon icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-btn-patient flex flex-col items-center gap-1 hover:text-slate-600 dark:hover:text-slate-200" data-target="prescriptions" onclick="switchTab('prescriptions')">
<iconify-icon icon="solar:file-text-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Rx</span>
</button>
<button className="nav-btn-patient flex flex-col items-center gap-1 hover:text-slate-600 dark:hover:text-slate-200" data-target="schedule" onclick="switchTab('schedule')">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Schedule</span>
</button>
<button className="nav-btn-patient flex flex-col items-center gap-1 hover:text-slate-600 dark:hover:text-slate-200" data-target="reports" onclick="switchTab('reports')">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Reports</span>
</button>
<button className="nav-btn-patient flex flex-col items-center gap-1 hover:text-slate-600 dark:hover:text-slate-200" onclick="router.push('screen-profile')">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>

<button className="nav-btn-doctor hidden flex-col items-center gap-1 text-indigo-600 w-1/3" data-target="doctor-home" onclick="switchTab('doctor-home')">
<iconify-icon icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Dashboard</span>
</button>
<button className="nav-btn-doctor hidden flex-col items-center gap-1 w-1/3" data-target="doctor-patients" onclick="switchTab('doctor-patients')">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Patients</span>
</button>
<button className="nav-btn-doctor hidden flex-col items-center gap-1 w-1/3" data-target="doctor-settings" onclick="switchTab('doctor-settings')">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</nav>

<div className="absolute top-16 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs font-medium z-50 opacity-0 pointer-events-none transition-all duration-300 translate-y-[-10px] w-[90%] justify-center" id="toast">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span id="toast-msg">Operation successful</span>
</div>
</div>


    </>
  );
}
