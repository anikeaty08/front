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



        // Tracker Logic
        function updateTracker() {
            const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
            const total = checkboxes.length;
            let checked = 0;
            let sleepChecked = false;
            let nutritionChecked = false;

            checkboxes.forEach((cb, index) => {
                if(cb.checked) {
                    checked++;
                    // Hardcoded logic for demo based on index positions
                    if(index === 5) sleepChecked = true; // 11 baje soyi
                    if(index === 0 || index === 3) nutritionChecked = true; // Food related
                }
            });

            const percentage = Math.round((checked / total) * 100);
            
            // Update UI
            document.getElementById('score-health').innerText = percentage + '%';
            document.getElementById('score-sleep').innerText = sleepChecked ? 'Good' : '-';
            document.getElementById('score-nutrition').innerText = nutritionChecked ? 'Good' : '-';
            
            // Color logic for health score
            const scoreEl = document.getElementById('score-health');
            if(percentage < 40) scoreEl.className = "text-xl font-semibold text-rose-500";
            else if(percentage < 70) scoreEl.className = "text-xl font-semibold text-amber-500";
            else scoreEl.className = "text-xl font-semibold text-emerald-600";
        }

        // Chat Logic
        const messages = [
            "Salaam! Aaj breakfast liya?",
            "Aaj 11 baje soyi thi?",
            "Paani kitna piya? 2L?",
            "Aap akeli nahi ho. Main yahin hoon.",
            "Yaad rakhna: Allah shifa dene wala hai.",
            "Stress mat lo, sab theek hoga."
        ];
        let msgIndex = 0;

        function toggleChat() {
            const bubble = document.getElementById('chat-bubble');
            bubble.classList.toggle('hidden');
        }

        function nextMessage() {
            msgIndex = (msgIndex + 1) % messages.length;
            document.getElementById('chat-text').innerText = messages[msgIndex];
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
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-stone-200/50">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
<span className="font-semibold text-sm">S</span>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-800">Sadiya Madam</span>
</div>
<div className="hidden md:flex gap-6 text-xs font-medium text-stone-500">
<a className="hover:text-rose-600 transition-colors" href="#habits">Habits</a>
<a className="hover:text-rose-600 transition-colors" href="#schedule">Timeline</a>
<a className="hover:text-rose-600 transition-colors" href="#tracker">Tracker</a>
<a className="hover:text-rose-600 transition-colors" href="#duas">Duas</a>
</div>
</div>
</nav>

<section className="islamic-bg pt-32 pb-20 px-6 min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">

<div className="absolute top-20 left-10 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30 -z-10"></div>
<div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-500 text-[10px] uppercase tracking-wider font-semibold mb-6 animate-fade-in">
<iconify-icon icon="solar:heart-angle-linear"></iconify-icon>
            Welcome Sadiya
        </div>
<h1 className="text-4xl md:text-5xl font-medium text-stone-800 tracking-tight leading-[1.1] mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Healthy Cycle,<br/>
<span className="text-rose-400 font-normal italic">Peaceful Life.</span>
</h1>
<div className="max-w-lg mx-auto space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
<p className="text-lg text-stone-600 leading-relaxed">
                “Sadiya Madam, aap akeli nahi ho. Irregular periods ek common aur treatable condition hai. Aapka rafe aapke saath hai.”
            </p>
<p className="text-sm text-stone-500 font-medium">
                Allah ne shifa rakhi hai, bas thoda routine aur sabr chahiye.
            </p>
</div>
<div className="mt-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
<a className="inline-flex items-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-stone-200" href="#start">
                Begin Journey
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>

<main className="max-w-3xl mx-auto px-6 space-y-24 pb-32" id="start">

<section id="habits">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 bg-rose-50 rounded-lg text-rose-500">
<iconify-icon icon="solar:danger-circle-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-stone-800 tracking-tight">Habits Affecting Your Health</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-5 rounded-2xl border border-rose-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-4">
<div className="bg-rose-50 p-2 rounded-full text-rose-400 shrink-0">
<iconify-icon icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-stone-800 font-medium mb-1">Subah sirf chai</h3>
<p className="text-sm text-stone-500 leading-relaxed">Empty stomach chai creates acidity &amp; hormonal imbalance.</p>
</div>
</div>
</div>

<div className="p-5 rounded-2xl border border-rose-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-4">
<div className="bg-rose-50 p-2 rounded-full text-rose-400 shrink-0">
<iconify-icon icon="solar:moon-stars-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-stone-800 font-medium mb-1">Late night sleep</h3>
<p className="text-sm text-stone-500 leading-relaxed">1 baje sona reduces recovery time, causing irregular periods.</p>
</div>
</div>
</div>

<div className="p-5 rounded-2xl border border-rose-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-4">
<div className="bg-rose-50 p-2 rounded-full text-rose-400 shrink-0">
<iconify-icon icon="solar:battery-charge-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-stone-800 font-medium mb-1">Skipping Breakfast</h3>
<p className="text-sm text-stone-500 leading-relaxed">Causes weak hormones and low energy throughout the day.</p>
</div>
</div>
</div>

<div className="p-5 rounded-2xl border border-rose-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-4">
<div className="bg-rose-50 p-2 rounded-full text-rose-400 shrink-0">
<iconify-icon icon="solar:bus-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-stone-800 font-medium mb-1">Long Travel + Low Rest</h3>
<p className="text-sm text-stone-500 leading-relaxed">Body stress me rehti hai, affecting the cycle.</p>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-3 mb-8">
<div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h2 className="text-2xl font-medium text-stone-800 tracking-tight">Aap Jo Sahi Kar Rahi Ho</h2>
<p className="text-xs text-stone-400 uppercase tracking-wide font-semibold mt-1">MashAllah</p>
</div>
</div>
<div className="bg-emerald-50/50 rounded-3xl p-6 border border-emerald-100">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-stone-700">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium">Fajr namaz + early uthna</span>
</li>
<li className="flex items-center gap-3 text-stone-700">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium">Daily walking + travel movement</span>
</li>
<li className="flex items-center gap-3 text-stone-700">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium">Namaz + spiritual routine</span>
</li>
<li className="flex items-center gap-3 text-stone-700">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium">Studies + discipline</span>
</li>
</ul>
<div className="mt-6 pt-6 border-t border-emerald-200/50 text-center">
<p className="text-emerald-800 font-medium text-sm italic">
                        “Ye sab habits aapki health ke liye bohot achhi hain. Bas thoda sa routine improve karna hai.”
                    </p>
</div>
</div>
</section>

<section id="schedule">
<h2 className="text-2xl font-medium text-stone-800 tracking-tight mb-8">Ideal Daily Schedule</h2>
<div className="relative pl-8 border-l-2 border-stone-200 space-y-10">

<div className="relative">
<div className="absolute -left-[39px] bg-stone-50 border-2 border-sky-200 w-5 h-5 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-sky-400 rounded-full"></div>
</div>
<span className="text-xs font-semibold text-sky-600 uppercase tracking-wide">Morning • 6:30 - 9:00</span>
<div className="mt-2 bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-400" icon="solar:sun-fog-linear"></iconify-icon>
<h4 className="font-medium text-stone-800">Fajr + Start</h4>
</div>
<ul className="text-sm text-stone-500 space-y-2 list-disc list-inside marker:text-stone-300">
<li><strong>6:45:</strong> Garam paani, 5 soaked badam + 1 khajoor / chana.</li>
<li><strong>7:00 (Must):</strong> Banana + peanuts OR Boiled egg OR Apple + chana.</li>
<li className="text-rose-500 list-none flex items-center gap-1 mt-1"><iconify-icon icon="solar:forbidden-circle-linear"></iconify-icon> Sirf chai avoid karein.</li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute -left-[39px] bg-stone-50 border-2 border-stone-200 w-5 h-5 rounded-full"></div>
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Travel &amp; College • 9:00 - 1:00</span>
<div className="mt-2">
<h4 className="font-medium text-stone-800 text-sm mb-2">Mid-Morning Snack (10:30)</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-600">Fruit</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-600">Roasted Chana</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-600">Dry Fruits</span>
</div>
<p className="text-xs text-sky-600 mt-2 flex items-center gap-1"><iconify-icon icon="solar:bottle-linear"></iconify-icon> Drink 2 bottles of water minimum</p>
</div>
</div>

<div className="relative">
<div className="absolute -left-[39px] bg-stone-50 border-2 border-stone-200 w-5 h-5 rounded-full"></div>
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Return &amp; Lunch • 2:30 - 3:30</span>
<div className="mt-2 bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
<h4 className="font-medium text-stone-800 mb-2 text-sm">Proper Plate (3:00 PM)</h4>
<p className="text-sm text-stone-500">Roti/Chawal + Dal/Rajma/Egg/Paneer + Sabzi (Palak/Lauki) + Salad.</p>
</div>
</div>

<div className="relative">
<div className="absolute -left-[39px] bg-stone-50 border-2 border-stone-200 w-5 h-5 rounded-full"></div>
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Evening</span>
<div className="mt-2 text-sm text-stone-600 space-y-1">
<p><strong>4:30:</strong> 20 min rest.</p>
<p><strong>5:30:</strong> Light walk / stretching.</p>
<p>Maghrib + kitchen help <span className="text-emerald-600 text-xs">(Good habit)</span></p>
</div>
</div>

<div className="relative">
<div className="absolute -left-[39px] bg-stone-50 border-2 border-indigo-200 w-5 h-5 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
</div>
<span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">Night • Rest</span>
<div className="mt-2 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
<ul className="text-sm text-stone-600 space-y-2">
<li><strong>8:00:</strong> Light Dinner (Roti + Sabzi + Dal or Soup).</li>
<li><strong>10:30:</strong> Phone OFF + Relax.</li>
<li className="font-medium text-indigo-700"><strong>11:00:</strong> SONA (TARGET).</li>
</ul>
<p className="text-xs text-rose-500 mt-2 flex items-center gap-1"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> 1 baje sona = hormones ka dushman</p>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-medium text-stone-800 tracking-tight mb-6">Nutrition Guide</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="border border-emerald-100 bg-white rounded-2xl p-5">
<div className="flex items-center gap-2 mb-4 text-emerald-600">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
<h3 className="font-medium">Eat More</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Palak / Methi</span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Chana / Rajma</span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Anda / Paneer</span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Banana / Anar</span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Khajoor / Badam</span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Dahi</span>
</div>
</div>

<div className="border border-rose-100 bg-white rounded-2xl p-5">
<div className="flex items-center gap-2 mb-4 text-rose-500">
<iconify-icon icon="solar:forbidden-circle-linear" width="20"></iconify-icon>
<h3 className="font-medium">Avoid / Limit</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded-md">Cold drinks</span>
<span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded-md">Chips / Samosa</span>
<span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded-md">Zyada sugar</span>
<span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded-md">Late night junk</span>
</div>
</div>
</div>

<div className="mt-4 p-4 bg-stone-100 rounded-xl flex items-center gap-4 border border-stone-200">
<div className="p-2 bg-white rounded-full text-rose-400 shadow-sm">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-800">Period Care Tips</h4>
<p className="text-xs text-stone-500 mt-1">Garam paani, Heating pad, Iron rich food, Extra rest.</p>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-white to-stone-50 rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-stone-100" id="duas">
<div className="text-center mb-8">
<iconify-icon className="text-stone-400 text-3xl mb-2" icon="solar:moon-linear"></iconify-icon>
<h2 className="text-2xl font-medium text-stone-800 tracking-tight">Dil aur Dimagh ke liye Sukoon</h2>
<p className="text-sm text-stone-500 mt-2 max-w-md mx-auto">
                    “Irregular periods koi gunah nahi. Ye ek medical issue hai. Allah har marz ke saath shifa bhi deta hai.”
                </p>
</div>
<div className="space-y-4">

<div className="bg-white border border-stone-100 p-5 rounded-2xl text-center shadow-sm">
<p className="text-xs text-stone-400 uppercase tracking-widest mb-2">For Anxiety &amp; Stress</p>
<p className="text-lg font-medium text-stone-700 font-serif italic">"Allahumma inni a’udhu bika minal-hammi wal-hazan"</p>
</div>

<div className="bg-white border border-stone-100 p-5 rounded-2xl text-center shadow-sm">
<p className="text-xs text-stone-400 uppercase tracking-widest mb-2">For Health &amp; Shifa</p>
<p className="text-lg font-medium text-stone-700 font-serif italic">"Allahumma ishfini shifa’an la yughadiru saqama"</p>
</div>

<div className="bg-white border border-stone-100 p-5 rounded-2xl text-center shadow-sm">
<p className="text-xs text-stone-400 uppercase tracking-widest mb-2">For Confidence</p>
<p className="text-lg font-medium text-stone-700 font-serif italic">"Rabbi zidni ilma, warzuqni sabra"</p>
</div>
</div>
</section>

<section id="tracker">
<h2 className="text-2xl font-medium text-stone-800 tracking-tight mb-6">Daily Progress Tracker</h2>
<div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="text-center p-3 bg-stone-50 rounded-xl">
<div className="text-xs text-stone-400 mb-1">Health Score</div>
<div className="text-xl font-semibold text-emerald-600" id="score-health">0%</div>
</div>
<div className="text-center p-3 bg-stone-50 rounded-xl">
<div className="text-xs text-stone-400 mb-1">Streak</div>
<div className="text-xl font-semibold text-amber-500">Day 1</div>
</div>
<div className="text-center p-3 bg-stone-50 rounded-xl">
<div className="text-xs text-stone-400 mb-1">Sleep</div>
<div className="text-xl font-semibold text-indigo-500" id="score-sleep">-</div>
</div>
<div className="text-center p-3 bg-stone-50 rounded-xl">
<div className="text-xs text-stone-400 mb-1">Nutrition</div>
<div className="text-xl font-semibold text-rose-500" id="score-nutrition">-</div>
</div>
</div>

<div className="space-y-3" id="checklist">

<label className="custom-checkbox flex items-center p-4 border border-stone-100 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input className="hidden" onchange="updateTracker()" type="checkbox"/>
<div className="w-6 h-6 border-2 border-stone-300 rounded-full flex items-center justify-center mr-4 transition-all group-hover:border-stone-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-medium text-stone-700">Breakfast liya?</span>
</label>
<label className="custom-checkbox flex items-center p-4 border border-stone-100 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input className="hidden" onchange="updateTracker()" type="checkbox"/>
<div className="w-6 h-6 border-2 border-stone-300 rounded-full flex items-center justify-center mr-4 transition-all group-hover:border-stone-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-medium text-stone-700">2L paani piya?</span>
</label>
<label className="custom-checkbox flex items-center p-4 border border-stone-100 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input className="hidden" onchange="updateTracker()" type="checkbox"/>
<div className="w-6 h-6 border-2 border-stone-300 rounded-full flex items-center justify-center mr-4 transition-all group-hover:border-stone-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-medium text-stone-700">20 min walk?</span>
</label>
<label className="custom-checkbox flex items-center p-4 border border-stone-100 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input className="hidden" onchange="updateTracker()" type="checkbox"/>
<div className="w-6 h-6 border-2 border-stone-300 rounded-full flex items-center justify-center mr-4 transition-all group-hover:border-stone-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-medium text-stone-700">Proper lunch?</span>
</label>
<label className="custom-checkbox flex items-center p-4 border border-stone-100 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input className="hidden" onchange="updateTracker()" type="checkbox"/>
<div className="w-6 h-6 border-2 border-stone-300 rounded-full flex items-center justify-center mr-4 transition-all group-hover:border-stone-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-medium text-stone-700">Namaz on time?</span>
</label>
<label className="custom-checkbox flex items-center p-4 border border-stone-100 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input className="hidden" onchange="updateTracker()" type="checkbox"/>
<div className="w-6 h-6 border-2 border-stone-300 rounded-full flex items-center justify-center mr-4 transition-all group-hover:border-stone-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-medium text-stone-700">11 baje soyi?</span>
</label>
</div>
</div>
</section>

<section>
<div className="bg-stone-800 text-stone-200 rounded-3xl p-6 md:p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-stone-700 rounded-full blur-3xl opacity-50 -z-0"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<h2 className="text-xl font-medium text-white tracking-tight">Prayer Schedule</h2>
<p className="text-xs text-stone-400 mt-1">Spiritual peace is part of the cure.</p>
</div>
<div className="grid grid-cols-5 gap-2 w-full md:w-auto">
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider text-stone-400">Fajr</span>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider text-stone-400">Zuhr</span>
<div className="w-2 h-2 rounded-full bg-stone-600"></div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider text-stone-400">Asr</span>
<div className="w-2 h-2 rounded-full bg-stone-600"></div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider text-stone-400">Maghrib</span>
<div className="w-2 h-2 rounded-full bg-stone-600"></div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider text-stone-400">Isha</span>
<div className="w-2 h-2 rounded-full bg-stone-600"></div>
</div>
</div>
</div>
</div>
</section>

<section className="text-center py-10">
<div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-full text-emerald-600 mb-4">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-stone-800 tracking-tight mb-3">Don't Be Afraid, This Is Treatable</h2>
<p className="text-stone-500 max-w-md mx-auto leading-relaxed">
                “Irregular periods ka matlab ye nahi ki aap normal nahi ho. Ye treatable hai. Lifestyle + dua + patience se sab better hota hai.”
            </p>
</section>
</main>

<footer className="border-t border-stone-200 bg-white py-10 text-center">
<p className="text-sm font-medium text-stone-800">Sadiya Madam's Health Portal</p>
<p className="text-xs text-stone-400 mt-2">Made with care &amp; respect.</p>
</footer>

<div className="fixed bottom-6 right-6 z-50">

<div className="hidden absolute bottom-16 right-0 w-64 bg-white rounded-2xl shadow-xl border border-stone-100 p-4 mb-2 animate-fade-in origin-bottom-right" id="chat-bubble">
<div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-100">
<div className="w-6 h-6 bg-stone-100 rounded-full flex items-center justify-center text-xs">🐱</div>
<span className="text-xs font-bold text-stone-700">Chotu Rafe</span>
</div>
<p className="text-xs text-stone-600 mb-3" id="chat-text">"Salaam! Aaj breakfast liya?"</p>
<div className="flex gap-2">
<button className="flex-1 bg-stone-800 text-white text-[10px] py-1.5 rounded-lg hover:bg-stone-700" onclick="nextMessage()">Yes / Next</button>
</div>
</div>

<button className="group relative w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform active:scale-95" onclick="toggleChat()">
<iconify-icon icon="solar:cat-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
</span>
</button>
</div>


    </>
  );
}
