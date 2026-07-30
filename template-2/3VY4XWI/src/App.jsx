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



    // Clock
    const updateClock = () => {
      const now = new Date();
      document.getElementById('clock').textContent =
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };
    setInterval(updateClock, 1000); updateClock();

    // Toggle selection for tiles
    function toggleTile(el) {
      const pressed = el.getAttribute('aria-pressed') === 'true';
      el.setAttribute('aria-pressed', !pressed);
      el.classList.toggle('ring-2');
      el.classList.toggle('ring-orange-400');
    }

    // Reminder toggle
    function toggleReminder() {
      const toggle = document.getElementById('remToggle');
      const ball   = document.getElementById('remBall');
      const active = toggle.getAttribute('aria-pressed') === 'true';
      toggle.setAttribute('aria-pressed', !active);
      toggle.classList.toggle('bg-orange-400');
      ball.style.transform = active ? 'translateX(0)' : 'translateX(24px)';
    }

    // Task dropdown
    function toggleTaskDropdown() {
      const btn = document.getElementById('taskSelectBtn');
      const dd  = document.getElementById('taskDropdown');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      dd.classList.toggle('hidden');
    }

    function selectTask(el) {
      const value = el.dataset.value;
      const icon  = el.querySelector('svg').outerHTML;
      document.getElementById('taskSelected').innerHTML = icon + ' ' + value;
      toggleTaskDropdown();
    }

    // Close dropdown on outside click
    window.addEventListener('click', e => {
      const dd = document.getElementById('taskDropdown');
      const btn = document.getElementById('taskSelectBtn');
      if (!btn.contains(e.target) && !dd.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        dd.classList.add('hidden');
      }
    });

    // Render lucide icons
    lucide.createIcons();
  
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
      

<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#fff4e8] to-[#ffe6d1] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#ffd7b5] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: `44px`}}>
<div className="w-24 h-4 rounded-b-3xl mt-2 bg-black/10"></div>
</div>

<div className="flex-1 flex flex-col">

<div className="flex justify-between items-center px-3 py-1 text-xs mt-2">
<span className="font-medium" id="clock">12:10</span>
<div className="flex space-x-1 opacity-80">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<header className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center">
<button aria-label="Back" className="h-9 w-9 flex items-center justify-center rounded-full bg-[#ffe8d8] hover:bg-[#ffd9c0] transition-colors">
<svg className="lucide lucide-chevron-left w-5 h-5 text-orange-500" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h1 className="text-3xl font-semibold tracking-tight ml-3">New Pet Task</h1>
</div>
<button aria-label="Settings" className="h-9 w-9 flex items-center justify-center">
<svg className="lucide lucide-settings w-5 h-5 text-orange-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2.18l.04.36a2 2 0 0 1-1.61 2.11l-.32.09a2 2 0 0 0-1.47 2.45l.22.43a2 2 0 0 1-.52 2.23l-.28.28a2 2 0 0 0 0 2.83l.28.28a2 2 0 0 1 .52 2.23l-.22.43a2 2 0 0 0 1.47 2.45l.32.09a2 2 0 0 1 1.61 2.11l-.04.36a2 2 0 0 0 2 2.18h.44a2 2 0 0 0 2-2.18l-.04-.36a2 2 0 0 1 1.61-2.11l.32-.09a2 2 0 0 0 1.47-2.45l-.22-.43a2 2 0 0 1 .52-2.23l.28-.28a2 2 0 0 0 0-2.83l-.28-.28a2 2 0 0 1-.52-2.23l.22-.43a2 2 0 0 0-1.47-2.45l-.32-.09a2 2 0 0 1-1.61-2.11l.04-.36a2 2 0 0 0-2-2.18Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</header>

<main className="px-6 pb-24 flex-1 overflow-y-auto space-y-6">

<section>
<label className="text-sm text-gray-500 mb-2 block">Select Pet(s)</label>
<div className="grid grid-cols-4 gap-3">

<button aria-pressed="false" className="group relative flex flex-col items-center justify-center rounded-xl bg-[#fff2e8] aspect-square gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400" onClick={(e) => { toggleTile(e.currentTarget) }}>
<img alt="Milo" className="w-12 h-12 rounded-full object-cover transition-transform group-aria-pressed:scale-110" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=160&q=80" />
<span className="text-xs">Milo</span>
</button>
<button aria-pressed="false" className="group relative flex flex-col items-center justify-center rounded-xl bg-[#fff2e8] aspect-square gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400" onClick={(e) => { toggleTile(e.currentTarget) }}>
<img alt="Luna" className="w-12 h-12 rounded-full object-cover transition-transform group-aria-pressed:scale-110" src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=160&q=80" />
<span className="text-xs">Luna</span>
</button>
<button aria-pressed="false" className="group relative flex flex-col items-center justify-center rounded-xl bg-[#fff2e8] aspect-square gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400" onClick={(e) => { toggleTile(e.currentTarget) }}>
<img alt="Charlie" className="w-12 h-12 rounded-full object-cover transition-transform group-aria-pressed:scale-110" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80" />
<span className="text-xs">Charlie</span>
</button>

<button aria-label="Add new pet" className="flex flex-col items-center justify-center rounded-xl bg-[#fff2e8] aspect-square gap-2 hover:bg-[#ffe7d5] transition-colors" onClick={(e) => { alert('Coming soon!') }}>
<div className="w-12 h-12 rounded-full bg-[#ffdcca] flex items-center justify-center">
<svg className="lucide lucide-plus w-5 h-5 text-orange-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-xs">Add</span>
</button>
</div>
</section>

<section className="relative">
<label className="text-sm text-gray-500 mb-2 block">Task Type</label>
<button aria-expanded="false" aria-haspopup="listbox" className="w-full h-14 bg-[#fff2e8] rounded-xl px-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-400" id="taskSelectBtn" onClick={(e) => { toggleTaskDropdown() }}>
<span className="flex items-center gap-2" id="taskSelected">
<svg className="lucide lucide-paw-print w-5 h-5 text-orange-500" data-lucide="paw-print" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>
              Walk
            </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<ul className="absolute z-20 left-0 right-0 border rounded-xl shadow-lg mt-2 overflow-hidden hidden bg-white border-black/10" id="taskDropdown" role="listbox">
<li>
<button className="w-full px-4 py-3 flex items-center gap-3 focus:bg-orange-100 hover:bg-orange-50" data-value="Walk" onClick={(e) => { selectTask(e.currentTarget) }} role="option">
<svg className="lucide lucide-paw-print w-5 h-5 text-orange-500" data-lucide="paw-print" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>
                Walk
              </button>
</li>
<li>
<button className="w-full px-4 py-3 flex items-center gap-3 focus:bg-orange-100 hover:bg-orange-50" data-value="Feed" onClick={(e) => { selectTask(e.currentTarget) }} role="option">
<svg className="lucide lucide-utensils w-5 h-5 text-rose-500" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                Feed
              </button>
</li>
<li>
<button className="w-full px-4 py-3 flex items-center gap-3 focus:bg-orange-100 hover:bg-orange-50" data-value="Groom" onClick={(e) => { selectTask(e.currentTarget) }} role="option">
<svg className="lucide lucide-scissors w-5 h-5 text-amber-500" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
                Groom
              </button>
</li>
<li>
<button className="w-full px-4 py-3 flex items-center gap-3 focus:bg-orange-100 hover:bg-orange-50" data-value="Vet" onClick={(e) => { selectTask(e.currentTarget) }} role="option">
<svg className="lucide lucide-stethoscope w-5 h-5 text-red-500" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
                Vet
              </button>
</li>
</ul>
</section>

<section className="grid grid-cols-2 gap-4">
<div>
<label className="text-sm text-gray-500 mb-2 block">Date</label>
<div className="relative">
<input className="w-full h-14 bg-[#fff2e8] rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-orange-400" type="date" />
<svg className="lucide lucide-calendar absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
</div>
<div>
<label className="text-sm text-gray-500 mb-2 block">Time</label>
<div className="relative">
<input className="w-full h-14 bg-[#fff2e8] rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-orange-400" type="time" />
<svg className="lucide lucide-clock absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</section>

<section>
<label className="text-sm text-gray-500 mb-2 block">Notes (optional)</label>
<textarea className="w-full bg-[#fff2e8] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400" placeholder="Add any extra details…" rows="3"></textarea>
</section>

<div className="flex items-center justify-between bg-[#fff2e8] rounded-xl px-4 py-3">
<span>Push reminder</span>
<button aria-pressed="false" className="relative w-12 h-6 rounded-full transition-colors bg-gray-300" id="remToggle" onClick={(e) => { toggleReminder() }}>
<span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all shadow bg-white" id="remBall"></span>
</button>
</div>

<div className="border-t pt-2 border-black/10"></div>

<button className="w-full py-4 rounded-xl bg-gradient-to-r text-lg font-semibold shadow-lg active:scale-95 transition-transform from-orange-400 text-white shadow-orange-400/30 to-rose-400">
          Save Task
        </button>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 rounded-t-3xl py-4 px-6 backdrop-blur bg-white/90">
<div className="flex justify-between items-center">
<div className="flex flex-col items-center opacity-60">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs mt-1">Home</span>
</div>
<div className="flex flex-col items-center opacity-60">
<svg className="lucide lucide-list-checks w-5 h-5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
<span className="text-xs mt-1">Tasks</span>
</div>
<div className="relative -mt-8">

<button aria-label="New" className="w-14 h-14 rounded-full bg-gradient-to-r flex items-center justify-center shadow-lg from-orange-400 shadow-orange-400/30 to-rose-400">
<svg className="lucide lucide-check w-6 h-6 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</button>
</div>
<div className="flex flex-col items-center opacity-60">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs mt-1">Stats</span>
</div>
<div className="flex flex-col items-center opacity-60">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
<span className="text-xs mt-1">More</span>
</div>
</div>
</nav>
</div>



    </>
  );
}
