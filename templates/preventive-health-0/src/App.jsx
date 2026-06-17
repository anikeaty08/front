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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
teal: {
400: '#2dd4bf',
500: '#14b8a6',
600: '#0d9488',
}
}
}
}
}



        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const progressBar = document.getElementById('progress-bar');
        const slideCounter = document.getElementById('slide-counter');
        let currentSlide = 0;

        // Initialize Progress Bars
        slides.forEach((_, idx) => {
            const bar = document.createElement('div');
            // Active is teal, inactive is slate-200
            bar.className = `h-1 w-4 md:w-6 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-teal-500' : 'bg-slate-200'}`;
            progressBar.appendChild(bar);
        });

        function updateSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            slides[index].classList.add('active');
            
            // Update nav buttons
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === slides.length - 1;

            // Update Progress
            const bars = progressBar.children;
            for(let i=0; i<bars.length; i++) {
                if(i < index) {
                    bars[i].className = `h-1 w-4 md:w-6 rounded-full transition-all duration-300 bg-slate-900`;
                } else if (i === index) {
                    bars[i].className = `h-1 w-4 md:w-6 rounded-full transition-all duration-300 bg-teal-500`;
                } else {
                    bars[i].className = `h-1 w-4 md:w-6 rounded-full transition-all duration-300 bg-slate-200`;
                }
            }

            // Update Counter
            slideCounter.innerText = `${String(index + 1).padStart(2, '0')} / ${slides.length}`;
            currentSlide = index;
        }

        function next() {
            if (currentSlide < slides.length - 1) updateSlide(currentSlide + 1);
        }

        function prev() {
            if (currentSlide > 0) updateSlide(currentSlide - 1);
        }

        nextBtn.addEventListener('click', next);
        prevBtn.addEventListener('click', prev);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        });

        // Touch Swipe Support
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) next();
            if (touchEndX > touchStartX + 50) prev();
        }

        // Initialize
        updateSlide(0);
    
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
      

<header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100/50">

<div className="flex items-center">
<img alt="Mykare" className="h-8 md:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex gap-1.5" id="progress-bar">

</div>
<div className="text-xs font-semibold tracking-wide text-slate-400 tabular-nums" id="slide-counter">01 / 14</div>
</header>

<main className="flex-grow relative w-full h-full flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden">

<div className="slide active w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center items-start" data-index="0">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto">
<div className="space-y-8 max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-500 shadow-sm">
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                        Seed Stage
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 leading-[1.05] md:leading-[0.95]">
                        The continuous <br/>
<span className="text-slate-400">preventive health OS.</span>
</h1>
<p className="text-lg md:text-2xl text-slate-500 max-w-xl font-normal leading-relaxed">
                        Building India’s first proactive healthcare system. <br className="hidden md:block"/>
                        Moving from sporadic sick-care to continuous well-care.
                    </p>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center" data-index="1">
<div className="slide-content w-full h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-y-auto justify-center py-10">
<div className="w-full lg:w-1/2 space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">The realization.</h2>
<blockquote className="text-xl md:text-2xl text-slate-600 font-normal leading-relaxed border-l-4 border-teal-500 pl-6">
                        "I stood in a hospital corridor realizing we were celebrating a successful surgery for a condition that was detectable—and preventable—three years ago."
                    </blockquote>
<p className="text-sm md:text-base text-slate-400 font-medium">
                        We have built a system excellent at treating sickness, but non-existent at preserving health.
                    </p>
</div>
<div className="w-full lg:w-1/2 h-64 md:h-96 glass-panel rounded-3xl flex items-center justify-center relative overflow-hidden bg-slate-50">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-transparent"></div>
<span className="iconify text-slate-200 w-32 h-32 md:w-48 md:h-48" data-icon="lucide:activity"></span>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
<span className="iconify w-5 h-5" data-icon="lucide:alert-triangle"></span>
</div>
<div>
<div className="text-xs text-slate-400 uppercase font-semibold">Diagnosis</div>
<div className="text-sm font-medium text-slate-900">Stage 3 (Preventable)</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center" data-index="2">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto py-10">
<div className="mb-12 md:mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Healthcare is fundamentally reactive.</h2>
<p className="text-lg text-slate-500 max-w-2xl">The current model relies on the patient crashing before acting. It's a "break-fix" model applied to biology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl flex flex-col gap-4 bg-white hover:border-slate-300 transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
<span className="iconify w-6 h-6" data-icon="lucide:thermometer"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Symptom Driven</h3>
<p className="text-sm text-slate-500 leading-relaxed">Care only begins when pain or dysfunction is already visible. By then, the damage is often irreversible.</p>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col gap-4 bg-white hover:border-slate-300 transition-colors">
<div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
<span className="iconify w-6 h-6" data-icon="lucide:file-x"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Episodic Data</h3>
<p className="text-sm text-slate-500 leading-relaxed">Health data is trapped in disconnected snapshots. Doctors lack the context of your daily baseline.</p>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col gap-4 bg-white hover:border-slate-300 transition-colors">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify w-6 h-6" data-icon="lucide:wallet"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Costly Corrections</h3>
<p className="text-sm text-slate-500 leading-relaxed">Late detection multiplies treatment costs by 10x compared to early intervention and management.</p>
</div>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center" data-index="3">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto py-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-16">Why this matters in India now.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-12">
<div className="space-y-3 border-l-2 border-slate-200 pl-6">
<div className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight">60%</div>
<div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Of Deaths</div>
<p className="text-sm text-slate-600 mt-2">Caused by chronic diseases (heart disease, diabetes) which are largely manageable.</p>
</div>
<div className="space-y-3 border-l-2 border-slate-200 pl-6">
<div className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight">55M+</div>
<div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Families at Risk</div>
<p className="text-sm text-slate-600 mt-2">One medical emergency pushes millions into financial distress annually.</p>
</div>
<div className="space-y-3 border-l-2 border-slate-200 pl-6">
<div className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight">Late</div>
<div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Detection Stage</div>
<p className="text-sm text-slate-600 mt-2">Most Indians discover chronic conditions 5-7 years after onset.</p>
</div>
<div className="space-y-3 border-l-2 border-teal-500 pl-6 bg-teal-50/50 rounded-r-xl py-2 -my-2">
<div className="text-5xl md:text-6xl font-semibold text-teal-600 tracking-tight">Now</div>
<div className="text-sm text-teal-600/80 uppercase tracking-wide font-semibold">The Shift</div>
<p className="text-sm text-teal-700/80 mt-2">Post-pandemic awareness creates the first viable market for prevention.</p>
</div>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center items-center" data-index="4">
<div className="slide-content w-full h-full flex flex-col justify-center items-center overflow-y-auto py-10 w-full">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center">The Broken Flow</h2>
<div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between relative gap-8 md:gap-0">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-slate-200 -z-10"></div>

<div className="md:hidden absolute top-0 left-1/2 w-px h-full border-l-2 border-dashed border-slate-200 -z-10 transform -translate-x-1/2"></div>

<div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm text-center w-48 z-10">
<div className="bg-slate-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-slate-500">
<span className="iconify w-6 h-6" data-icon="lucide:frown"></span>
</div>
<h4 className="text-sm font-semibold text-slate-900">Symptom</h4>
</div>

<span className="iconify md:hidden text-slate-300" data-icon="lucide:arrow-down"></span>

<div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm text-center w-48 z-10">
<div className="bg-slate-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-slate-500">
<span className="iconify w-6 h-6" data-icon="lucide:hospital"></span>
</div>
<h4 className="text-sm font-semibold text-slate-900">Hospital</h4>
</div>

<span className="iconify md:hidden text-slate-300" data-icon="lucide:arrow-down"></span>

<div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm text-center w-48 z-10">
<div className="bg-slate-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-slate-500">
<span className="iconify w-6 h-6" data-icon="lucide:file-text"></span>
</div>
<h4 className="text-sm font-semibold text-slate-900">Report</h4>
</div>

<span className="iconify md:hidden text-slate-300" data-icon="lucide:arrow-down"></span>

<div className="bg-white p-6 border border-red-200 rounded-2xl shadow-[0_4px_20px_-4px_rgba(239,68,68,0.15)] text-center w-48 z-10">
<div className="bg-red-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-red-500">
<span className="iconify w-6 h-6" data-icon="lucide:mic-off"></span>
</div>
<h4 className="text-sm font-semibold text-slate-900">Silence</h4>
</div>
</div>
<p className="mt-16 text-center text-slate-500 max-w-lg text-lg">
                    Once the patient leaves the hospital, the system goes blind. <br/>
<span className="font-medium text-slate-800">Zero follow-up. Zero data. Zero prevention.</span>
</p>
</div>
</div>

<div className="slide w-full h-full max-w-5xl mx-auto px-6 md:px-12 flex-col justify-center text-center" data-index="5">
<div className="w-20 h-20 rounded-full bg-teal-50 mx-auto mb-8 flex items-center justify-center">
<span className="iconify text-teal-600 w-10 h-10" data-icon="lucide:lightbulb"></span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
                Health doesn't happen in the hospital.<br/>
                It happens in the <span className="text-teal-600">364 days</span> between visits.
            </h2>
<p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto">
                To solve chronic illness, we need to own the "Gap Years" between episodes.
            </p>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center items-start" data-index="6">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto py-10">
<div className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-6 bg-teal-50 px-3 py-1 rounded w-fit">The Solution</div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-12 leading-tight">
                    Mykare is the OS for <br/>
<span className="text-slate-400">continuous preventive health.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mt-4">
<div className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mt-1 text-teal-600 shadow-sm">
<span className="iconify w-4 h-4" data-icon="lucide:check"></span>
</div>
<div>
<h4 className="text-xl text-slate-900 font-semibold">Not just a clinic</h4>
<p className="text-base text-slate-500 mt-2 leading-relaxed">We don't just treat symptoms; we monitor baselines. We measure what matters, continuously.</p>
</div>
</div>
<div className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mt-1 text-teal-600 shadow-sm">
<span className="iconify w-4 h-4" data-icon="lucide:check"></span>
</div>
<div>
<h4 className="text-xl text-slate-900 font-semibold">Not just an app</h4>
<p className="text-base text-slate-500 mt-2 leading-relaxed">A clinical team powered by data, intervening before you crash. Real doctors, real time.</p>
</div>
</div>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center" data-index="7">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto py-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-16 text-center">The Continuous Loop</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-14 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -top-6 left-8 bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded border border-teal-200">STEP 01</div>
<div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6 text-teal-600">
<span className="iconify w-6 h-6" data-icon="lucide:activity"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Measure</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Smart diagnostics and wearables track key biomarkers continuously, creating a high-resolution health map.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -top-6 left-8 bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded border border-indigo-200">STEP 02</div>
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
<span className="iconify w-6 h-6" data-icon="lucide:brain-circuit"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Understand</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Our AI + Clinical team analyzes trends to spot deviation from the user's personal baseline before symptoms appear.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -top-6 left-8 bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded border border-rose-200">STEP 03</div>
<div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-6 text-rose-600">
<span className="iconify w-6 h-6" data-icon="lucide:zap"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Act</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Proactive nudges, diet changes, or specialist intervention triggered exactly when needed. No waiting.
                        </p>
</div>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center" data-index="8">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto py-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-12">Hard to replicate.</h2>
<div className="flex flex-col gap-6">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors">
<div className="w-full md:w-1/3 mb-4 md:mb-0">
<h3 className="text-slate-900 font-semibold text-lg">System vs Feature</h3>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">The Depth</p>
</div>
<div className="hidden md:block w-px h-12 bg-slate-200 mx-6"></div>
<div className="w-full md:w-2/3 text-slate-600 text-base leading-relaxed">
                            Competitors offer single tests or consultations. Mykare integrates the entire stack: Lab + Tech + Care Team.
                        </div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors">
<div className="w-full md:w-1/3 mb-4 md:mb-0">
<h3 className="text-slate-900 font-semibold text-lg">Longitudinal Data</h3>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">The Asset</p>
</div>
<div className="hidden md:block w-px h-12 bg-slate-200 mx-6"></div>
<div className="w-full md:w-2/3 text-slate-600 text-base leading-relaxed">
                             Standard care has data points. We build a "Health Movie" for every user, creating sticky, compounding value over time.
                        </div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors">
<div className="w-full md:w-1/3 mb-4 md:mb-0">
<h3 className="text-slate-900 font-semibold text-lg">Trust Bridge</h3>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">The Brand</p>
</div>
<div className="hidden md:block w-px h-12 bg-slate-200 mx-6"></div>
<div className="w-full md:w-2/3 text-slate-600 text-base leading-relaxed">
                            Apps lack clinical authority. Human-in-the-loop design ensures medical credibility, not just algorithm suggestions.
                        </div>
</div>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center" data-index="9">
<div className="slide-content w-full h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 overflow-y-auto justify-center py-10">
<div className="w-full lg:w-1/2 order-2 lg:order-1">
<div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 relative shadow-lg">
<div className="absolute -top-4 -right-4 bg-slate-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">Primary Persona</div>
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-slate-700">
<span className="iconify w-7 h-7" data-icon="lucide:users"></span>
</div>
<h3 className="text-2xl md:text-3xl text-slate-900 font-semibold mb-3">The "Sandwich Generation"</h3>
<p className="text-slate-500 leading-relaxed mb-8 text-lg">
                            Indians aged 30-45 managing their own career stress while caring for aging parents.
                        </p>
<ul className="space-y-4 text-sm md:text-base text-slate-700 font-medium">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0"><span className="iconify w-3 h-3" data-icon="lucide:check"></span></div> 
                                High intent to pay for convenience.
                            </li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0"><span className="iconify w-3 h-3" data-icon="lucide:check"></span></div> 
                                Fear of unexpected medical shocks.
                            </li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0"><span className="iconify w-3 h-3" data-icon="lucide:check"></span></div> 
                                Digitally native but time-poor.
                            </li>
</ul>
</div>
</div>
<div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Why they care.</h2>
<p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed">
                        They have seen the healthcare system fail their parents. They want control, predictability, and a partner who cares <span className="text-teal-600 font-medium">before</span> the emergency strikes.
                    </p>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center" data-index="10">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto py-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-12">Early Signals</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
<div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2 tracking-tight">3</div>
<div className="text-xs text-slate-400 uppercase tracking-wide font-bold">Live Pilots</div>
<p className="text-sm text-slate-600 mt-4 leading-relaxed">Corporate partnerships active with mid-sized tech firms in Bangalore.</p>
</div>
<div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
<div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2 tracking-tight">85%</div>
<div className="text-xs text-slate-400 uppercase tracking-wide font-bold">Retention</div>
<p className="text-sm text-slate-600 mt-4 leading-relaxed">Users engaging weekly with health concierge post-onboarding.</p>
</div>
<div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
<div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2 tracking-tight">400+</div>
<div className="text-xs text-slate-400 uppercase tracking-wide font-bold">Waitlist</div>
<p className="text-sm text-slate-600 mt-4 leading-relaxed">Organic growth through family referrals without paid marketing.</p>
</div>
</div>
<div className="mt-8 p-5 bg-teal-50 border border-teal-100 rounded-xl flex gap-4 items-start md:items-center">
<span className="iconify text-teal-600 w-6 h-6 flex-shrink-0 mt-0.5 md:mt-0" data-icon="lucide:sparkles"></span>
<p className="text-sm md:text-base text-teal-900">
<span className="font-bold">Key Learning:</span> Users don't want just data; they want interpretation. "Tell me what to do" is the killer feature.
                    </p>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center" data-index="11">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto py-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-16">Built by operators &amp; clinicians.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="flex gap-6 items-start group">
<div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:scale-105 transition-transform duration-300">
<span className="iconify text-slate-400 w-10 h-10" data-icon="lucide:user"></span>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900">Founder Name</h3>
<div className="text-sm font-semibold text-teal-600 mb-3">CEO &amp; Product</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                                Ex-Product Lead at [Tech Giant]. Scaled health-tech products to 1M+ users. Deeply understands user behavior and retention mechanics.
                            </p>
</div>
</div>

<div className="flex gap-6 items-start group">
<div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:scale-105 transition-transform duration-300">
<span className="iconify text-slate-400 w-10 h-10" data-icon="lucide:stethoscope"></span>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900">Dr. Co-Founder</h3>
<div className="text-sm font-semibold text-teal-600 mb-3">Chief Medical Officer</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                                15+ years in Internal Medicine. Preventive care specialist. Believes the future of medicine is outside the clinic walls.
                            </p>
</div>
</div>
</div>
</div>
</div>

<div className="slide w-full h-full max-w-5xl mx-auto px-6 md:px-12 flex-col justify-center items-center text-center" data-index="12">
<div className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">The 10 Year View</div>
<h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-10 leading-tight">
                From a preventive service <br/>
                to a <span className="text-teal-500">longevity protocol.</span>
</h2>
<p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Today, we intercept chronic disease. <br/>
                Tomorrow, we optimize human performance and lifespan for millions of Indian families.
            </p>
</div>

<div className="slide w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-col justify-center items-start" data-index="13">
<div className="slide-content w-full h-full flex flex-col justify-center overflow-y-auto">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-slate-900 mb-8">
                    Join us.
                </h1>
<p className="text-xl md:text-2xl text-slate-500 font-normal mb-16 max-w-2xl">
                    Let's build the healthcare system India deserves.
                </p>
<div className="flex flex-col gap-3 text-base text-slate-600">
<div className="flex items-center gap-3">
<span className="iconify text-teal-500" data-icon="lucide:mail"></span>
<a className="hover:text-teal-600 transition-colors" href="mailto:founders@mykare.in">founders@mykare.in</a>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-teal-500" data-icon="lucide:trending-up"></span>
<span>Raising Seed Round</span>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none">
<button className="pointer-events-auto p-3 rounded-full bg-white border border-slate-200 shadow-md text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="prev-btn">
<span className="iconify w-5 h-5" data-icon="lucide:arrow-left"></span>
</button>
<div className="pointer-events-auto flex gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/50 backdrop-blur px-3 py-1 rounded-full border border-slate-100/50">
<span className="hidden md:inline">Use arrows to navigate</span>
<span className="md:hidden">Swipe to navigate</span>
</div>
<button className="pointer-events-auto p-3 rounded-full bg-white border border-slate-200 shadow-md text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="next-btn">
<span className="iconify w-5 h-5" data-icon="lucide:arrow-right"></span>
</button>
</footer>


    </>
  );
}
