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



    (function() {
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabGlow = document.getElementById('tabGlow');
      let currentTab = 0;
      
      function updateTabState(index) {
        const percentage = (index * 25);
        tabGlow.style.left = percentage + '%';
        
        tabButtons.forEach((btn, i) => {
          const icon = btn.querySelector('div');
          const svg = btn.querySelector('svg');
          const label = btn.querySelector('span');
          
          if (i === index) {
            // Active state with glow
            icon.classList.remove('bg-transparent');
            icon.classList.add('bg-gradient-to-br', 'from-indigo-500', 'to-purple-600', 'border', 'border-indigo-400/50', 'shadow-lg', 'shadow-indigo-500/30');
            svg.classList.remove('text-neutral-500');
            svg.classList.add('text-white');
            label.classList.remove('text-neutral-500');
            label.classList.add('text-white', 'font-semibold');
          } else {
            // Inactive state
            icon.classList.add('bg-transparent');
            icon.classList.remove('bg-gradient-to-br', 'from-indigo-500', 'to-purple-600', 'border', 'border-indigo-400/50', 'shadow-lg', 'shadow-indigo-500/30');
            svg.classList.add('text-neutral-500');
            svg.classList.remove('text-white');
            label.classList.add('text-neutral-500');
            label.classList.remove('text-white', 'font-semibold');
          }
        });
      }
      
      tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
          if (currentTab !== index) {
            currentTab = index;
            updateTabState(index);
          }
        });
      });
      
      // Initialize first tab as active
      updateTabState(0);
    })();
  


    // Add loading state functionality
    this.addEventListener('click', function(e) {
      if (this.disabled) return;
      
      const originalHTML = this.innerHTML;
      this.innerHTML = '<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Signing in...';
      this.disabled = true;
      
      setTimeout(() => {
        this.innerHTML = originalHTML;
        this.disabled = false;
      }, 2000);
    });
  


      (function() {
        const statsData = {
          week: { totalMin: 142, sessions: 7, streak: 12 },
          month: { totalMin: 620, sessions: 28, streak: 12 },
          year: { totalMin: 7440, sessions: 312, streak: 12 }
        };
        
        const tabButtons = document.querySelectorAll('.stats-tab-btn');
        let currentView = 'week';
        
        function updateStats(view) {
          const data = statsData[view];
          const statCards = document.querySelectorAll('[data-element-id="aura-emg9kr0s0"] .grid-cols-3 > div p.text-2xl');
          
          if (statCards.length === 3) {
            statCards[0].textContent = data.totalMin;
            statCards[1].textContent = data.sessions;
            statCards[2].textContent = data.streak;
          }
        }
        
        function updateTabState(view) {
          currentView = view;
          
          tabButtons.forEach(btn => {
            if (btn.dataset.statsView === view) {
              btn.classList.remove('text-neutral-500', 'bg-transparent');
              btn.classList.add('bg-white/20', 'border', 'border-white/10', 'text-neutral-200', 'backdrop-blur');
            } else {
              btn.classList.add('text-neutral-500', 'bg-transparent');
              btn.classList.remove('bg-white/20', 'border', 'border-white/10', 'text-neutral-200', 'backdrop-blur');
            }
          });
          
          updateStats(view);
        }
        
        tabButtons.forEach(button => {
          button.addEventListener('click', function() {
            const view = this.dataset.statsView;
            if (currentView !== view) {
              updateTabState(view);
            }
          });
        });
        
        updateTabState('week');
      })();
    


    (function() {
      const tabButtons = document.querySelectorAll('.tab-button-3');
      const tabGlow = document.getElementById('tabGlow3');
      let currentTab = 2;
      
      function updateTabState(index) {
        const percentage = (index * 25);
        tabGlow.style.left = percentage + '%';
        
        tabButtons.forEach((btn, i) => {
          const icon = btn.querySelector('div');
          const svg = btn.querySelector('svg');
          const label = btn.querySelector('span');
          
          if (i === index) {
            // Active state with glow
            icon.classList.remove('bg-transparent');
            icon.classList.add('bg-gradient-to-br', 'from-indigo-500', 'to-purple-600', 'border', 'border-indigo-400/50', 'shadow-lg', 'shadow-indigo-500/30');
            svg.classList.remove('text-neutral-500');
            svg.classList.add('text-white');
            label.classList.remove('text-neutral-500');
            label.classList.add('text-white', 'font-semibold');
          } else {
            // Inactive state
            icon.classList.add('bg-transparent');
            icon.classList.remove('bg-gradient-to-br', 'from-indigo-500', 'to-purple-600', 'border', 'border-indigo-400/50', 'shadow-lg', 'shadow-indigo-500/30');
            svg.classList.add('text-neutral-500');
            svg.classList.remove('text-white');
            label.classList.add('text-neutral-500');
            label.classList.remove('text-white', 'font-semibold');
          }
        });
      }
      
      tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
          if (currentTab !== index) {
            currentTab = index;
            updateTabState(index);
          }
        });
      });
      
      // Initialize Stats tab as active
      updateTabState(2);
    })();
  


    document.addEventListener('DOMContentLoaded', () => {
      const canvas = document.getElementById('meditationChart');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(129, 140, 248, 0.35)');
      gradient.addColorStop(1, 'rgba(129, 140, 248, 0)');

      const dataPoints = [12, 15, 18, 20, 25, 22, 28];
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            data: dataPoints,
            borderColor: '#818CF8',
            backgroundColor: gradient,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            cubicInterpolationMode: 'monotone',
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { intersect: false, mode: 'index' },
          plugins: {
            legend: { display: false },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              titleColor: '#E5E7EB',
              bodyColor: '#D1D5DB',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              displayColors: false,
              callbacks: {
                label: ctx => ` ${ctx.parsed.y} min`
              }
            }
          },
          scales: {
            x: {
              display: false,
              grid: { display: false },
              ticks: { display: false }
            },
            y: {
              display: false,
              grid: { display: false },
              ticks: { display: false }
            }
          }
        }
      });
    });

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
      <div className="fixed top-0 w-full -z-10 h-screen blur-3xl bg-cover bg-center" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/996d9d29-d85d-4c45-a1b1-c04bb1479b82_3840w.webp")'}}></div>

<main className="mx-auto max-w-7xl px-6 py-8 md:py-12">
<section className="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-x-12 gap-y-8">

<div className="relative animate-fade-in-left" style={{animationDelay: '0s'}}>
<div className="overflow-hidden bg-black w-[393px] h-[852px] rounded-[40px] relative shadow-2xl">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[24px] z-50"></div>

<div className="absolute top-2 left-6 text-neutral-100 text-sm font-medium z-50 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1 z-50">
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="z-40 bg-gradient-to-b from-black via-black/80 to-transparent pt-14 pr-6 pb-4 pl-6 absolute top-0 right-0 left-0 backdrop-blur-sm">
<div className="flex mb-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105">
<img alt="Profile" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/55c8ab75-5879-421e-82b3-fefaa1032d06_3840w.webp" style={{}}/>
</div>
<div className="">
<p className="text-lg tracking-tight font-light text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Good morning,</p>
<p className="text-lg text-neutral-500 tracking-tight font-light font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Sarah</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center backdrop-blur hover:bg-white/10 transition-colors">
<svg className="w-5 h-5 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</div>
</div>

<div className="overflow-y-auto h-full pt-32 pb-32">
<div className="pr-6 pl-6">

<div className="overflow-hidden animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer bg-white/5 border-white/5 border rounded-3xl mb-6 shadow-2xl backdrop-blur-xl" style={{animationDelay: '0.1s'}}>
<div className="relative h-48 mb-4 overflow-hidden">
<img alt="Morning Peace" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e95522f1-23ec-480b-bdd5-36405197ab97_3840w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="">
<p className="text-neutral-500 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Today's Session</p>
<p className="text-2xl mt-1 tracking-tight text-neutral-100 font-playfair font-medium" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Morning Peace</p>
<p className="text-neutral-500 mt-1 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Guided meditation • 15 min</p>
</div>
<div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-2 rounded-2xl">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
<span className="text-indigo-300 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Recommended</span>
</div>
</div>
<div className="flex gap-3">
<button aria-label="Create Account" className="group inline-flex hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[140px] transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 w-full h-full rounded-2xl pt-3 pr-5 pb-3 pl-5 cursor-pointer" onclick="window.location.href='/video'" role="button">
<span className="font-geist">Start</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<button className="flex-1 flex gap-2 transition-all hover:bg-white/10 hover:border-white/15 font-medium text-neutral-200 bg-white/5 border-white/10 border rounded-2xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
<span className="text-sm font-geist">Repeat</span>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4 animate-fade-in-slide" style={{animationDelay: '0.2s'}}>
<h3 className="text-base font-semibold tracking-tight text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Featured Collections</h3>
<button className="text-neutral-500 text-xs font-medium hover:text-neutral-300 transition-colors font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>View all</button>
</div>
<div className="space-y-3 mb-8">

<div className="border border-white/5 bg-white/5 backdrop-blur-sm flex gap-4 rounded-3xl overflow-hidden animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '0.3s'}}>
<div className="w-20 h-20 flex-shrink-0 overflow-hidden">
<img alt="Sleep Sounds" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7834369-c819-4a24-a18b-55b2f3d5aee7_320w.webp" style={{}}/>
</div>
<div className="flex-1 py-4 pr-4 flex items-center justify-between">
<div className="">
<p className="font-medium text-sm text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Sleep Sounds</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>12 sessions • Relaxation</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="w-4 h-4 text-neutral-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<p className="text-neutral-600 text-xs mt-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>5-30 min</p>
</div>
</div>
</div>

<div className="border border-white/5 bg-white/5 backdrop-blur-sm flex gap-4 rounded-3xl overflow-hidden animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '0.4s'}}>
<div className="w-20 h-20 flex-shrink-0 overflow-hidden">
<img alt="Stress Relief" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f84193a5-2633-43fc-9d46-b7955ec06ffe_320w.jpg" style={{}}/>
</div>
<div className="flex-1 py-4 pr-4 flex items-center justify-between">
<div className="">
<p className="font-medium text-sm text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Stress Relief</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>8 sessions • Breathing</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="w-4 h-4 text-neutral-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
</div>
<p className="text-neutral-600 text-xs mt-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>3-15 min</p>
</div>
</div>
</div>

<div className="border border-white/5 bg-white/5 backdrop-blur-sm flex gap-4 rounded-3xl overflow-hidden animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '0.5s'}}>
<div className="w-20 h-20 flex-shrink-0 overflow-hidden">
<img alt="Focus Flow" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8796db14-2421-4e83-9be8-7c00c6499faf_320w.webp" style={{}}/>
</div>
<div className="flex-1 py-4 pr-4 flex items-center justify-between">
<div className="">
<p className="font-medium text-sm text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Focus Flow</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>15 sessions • Productivity</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="w-4 h-4 text-neutral-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
<p className="text-neutral-600 text-xs mt-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>10-25 min</p>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4 mt-8 animate-fade-in-slide" style={{animationDelay: '0.6s'}}>
<h3 className="text-base font-semibold tracking-tight text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Recent Sessions</h3>
<button className="text-neutral-500 text-xs font-medium hover:text-neutral-300 transition-colors font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>View all</button>
</div>
<div className="space-y-3 mb-8">
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '0.7s'}}>
<div className="grid grid-cols-2 gap-0">
<div className="w-full h-32 overflow-hidden">
<img alt="Ocean Waves" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7834369-c819-4a24-a18b-55b2f3d5aee7_3840w.webp" style={{}}/>
</div>
<div className="p-4 flex flex-col justify-center">
<p className="font-medium text-sm text-neutral-200 mb-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Ocean Waves</p>
<p className="text-neutral-500 text-xs mb-2 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
          Today, 7:30
          AM • 15 min</p>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
<p className="text-indigo-300 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>12 day streak</p>
</div>
</div>
</div>
</div>
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '0.8s'}}>
<div className="grid grid-cols-2 gap-0">
<div className="w-full h-32 overflow-hidden">
<img alt="Body Scan" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/585d9962-7d8c-43da-81c7-190f2e9dc7f2_3840w.jpg" style={{}}/>
</div>
<div className="p-4 flex flex-col justify-center">
<p className="font-medium text-sm text-neutral-200 mb-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Body Scan</p>
<p className="text-neutral-500 text-xs mb-2 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
          Yesterday, 9:15 PM • 20 min</p>
<p className="text-neutral-400 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Before bed
        </p>
</div>
</div>
</div>
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '0.9s'}}>
<div className="grid grid-cols-2 gap-0">
<div className="w-full h-32 overflow-hidden">
<img alt="Breath Work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a03dbf4c-46f6-4c48-ac03-d65bc5c6fa63_3840w.jpg" style={{}}/>
</div>
<div className="p-4 flex flex-col justify-center">
<p className="font-medium text-sm text-neutral-200 mb-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Breath Work</p>
<p className="text-neutral-500 text-xs mb-2 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Mar
          30, 2:45 PM • 10 min</p>
<p className="text-neutral-400 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Midday
          reset</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white/10 border-white/10 border rounded-3xl pt-3 pr-3 pb-3 pl-3 absolute right-4 bottom-8 left-4 backdrop-blur animate-fade-in-slide" style={{animationDelay: '1s'}}>
<div className="flex items-center justify-around py-2 relative">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute h-full w-1/4 bg-indigo-500/40 rounded-2xl blur-xl transition-all duration-500 ease-out" id="tabGlow" style={{left: '0%', opacity: '1'}}></div>
</div>
<button className="flex flex-col items-center gap-1 relative z-10 tab-button hover:scale-105 transition-transform" data-index="0" data-tab="home">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 border border-indigo-400/50 shadow-lg shadow-indigo-500/30 rounded-2xl flex items-center justify-center backdrop-blur transition-all duration-300">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
<span className="text-xs text-white font-semibold transition-colors duration-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Home</span>
</button>
<button className="flex flex-col items-center gap-1 relative z-10 tab-button hover:scale-105 transition-transform" data-index="1" data-tab="explore">
<div className="w-10 h-10 transition-all duration-300 rounded-2xl flex items-center justify-center bg-transparent">
<svg className="w-5 h-5 text-neutral-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<span className="text-xs text-neutral-500 transition-colors duration-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Explore</span>
</button>
<button className="flex flex-col items-center gap-1 relative z-10 tab-button hover:scale-105 transition-transform" data-index="2" data-tab="stats">
<div className="w-10 h-10 transition-all duration-300 rounded-2xl flex items-center justify-center bg-transparent">
<svg className="w-5 h-5 text-neutral-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path></svg>
</div>
<span className="text-xs text-neutral-500 transition-colors duration-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Stats</span>
</button>
<button className="flex flex-col items-center gap-1 relative z-10 tab-button hover:scale-105 transition-transform" data-index="3" data-tab="profile">
<div className="w-10 h-10 transition-all duration-300 rounded-2xl flex items-center justify-center bg-transparent">
<svg className="w-5 h-5 text-neutral-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs text-neutral-500 transition-colors duration-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Profile</span>
</button>
</div>

</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>

<div className="relative animate-fade-in-scale" style={{animationDelay: '0.15s'}}>
<div className="overflow-hidden bg-black rounded-[40px] relative shadow-2xl w-[393px] h-[852px]">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[24px]"></div>

<div className="absolute top-2 left-6 text-neutral-100 text-sm font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1">
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="absolute inset-0">
<img alt="Meditation background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/daf0037d-89fe-44c3-bb9c-92d543b9fa26_3840w.jpg"/>
<div className="absolute inset-0 bg-black/60"></div>
</div>

<div className="z-10 flex flex-col h-full pt-14 pr-6 pl-6 relative">

<div className="flex gap-2 mt-6 items-center justify-center animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
<span className="xl:text-6xl text-2xl font-medium text-white tracking-tight font-playfair" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Serene</span>
</div>
<div className="flex-1 flex flex-col px-4 items-center justify-center">
<div className="text-center mb-12 max-w-sm animate-fade-in-slide" style={{animationDelay: '0.5s'}}>
<h1 className="leading-tight text-5xl tracking-tight mb-6 text-white font-playfair font-medium xl:font-semibold xl:italic xl:text-3xl" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Find your calm</h1>
<p className="leading-relaxed xl:italic text-base text-neutral-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Guided meditations, breathing, and mindfulness
        for inner peace.</p>
</div>

<div className="flex flex-wrap gap-2 justify-center mb-8 animate-fade-in-slide" style={{animationDelay: '0.7s'}}>
<div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur hover:bg-white/15 transition-colors cursor-pointer">
<svg className="w-4 h-4 text-indigo-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
<span className="text-sm font-medium text-white font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Guided sessions</span>
</div>
</div>
</div>

<div className="space-y-3 mb-6 animate-fade-in-slide" style={{animationDelay: '0.9s'}}>
<button className="group flex hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 overflow-hidden xl:py-4 hover:from-indigo-500 hover:to-purple-500 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-white-600 w-full max-w-md border-transparent border rounded-full pt-3 pr-4 pb-3 pl-4 relative justify-center" type="submit">
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-500 ease-out"></div>
<span className="flex items-center pl-3 absolute top-0 bottom-0 left-0">
</span>
<span className="z-10 relative font-geist">Start your 7-day free trial</span>

</button>
<button className="hover:bg-white/20 transition-all cursor-pointer text-base font-medium text-white bg-white/10 w-full border-white/20 border rounded-full pt-4 pb-4 backdrop-blur font-geist" onclick="window.location.href='/login';window.location.href='/log-in';window.location.href='/log-in';window.location.href='/log-in';window.location.href='/log-in';window.location.href='/log-in';window.location.href='/log-in'" role="button" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
                Log in
              </button>
</div>

<p className="text-xs text-neutral-400 text-center mb-6 leading-relaxed animate-fade-in-slide font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif', animationDelay: '1.1s'}}>
    By continuing, you agree to our
    <span className="text-white underline cursor-pointer hover:text-neutral-200 transition-colors font-geist">Terms</span>
    and
    <span className="text-white underline cursor-pointer hover:text-neutral-200 transition-colors font-geist">Privacy Policy</span>
</p>

<div className="w-32 h-1 bg-white/20 rounded-full mx-auto mb-2"></div>
</div>
</div>
</div>

<div className="relative animate-fade-in-right" style={{animationDelay: '0.3s'}}>
<div className="overflow-hidden bg-black rounded-[40px] relative shadow-2xl w-[393px] h-[852px]">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[24px] z-50"></div>

<div className="absolute top-2 left-6 text-neutral-100 text-sm font-medium z-50 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1 z-50">
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-4 h-4 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="z-40 bg-gradient-to-b from-black via-black/80 to-transparent pt-14 pr-6 pb-6 pl-6 absolute top-0 right-0 left-0 backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<button className="w-8 h-8 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur hover:bg-white/10 transition-colors">
<svg className="w-5 h-5 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h1 className="text-base font-semibold tracking-tight text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Sleep Sounds</h1>
<button className="w-8 h-8 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur hover:bg-white/10 transition-colors">
<svg className="w-5 h-5 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="overflow-y-auto h-full pt-32 pb-32">
<div className="pr-6 pl-6">

<div className="relative h-48 rounded-3xl overflow-hidden mb-6 animate-fade-in-slide cursor-pointer group" style={{animationDelay: '0.4s'}}>
<img alt="Deep Sleep" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/14cafb43-31c2-46cf-bac7-91225366bbb3_3840w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0"><img alt="Night meditation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d6420ff2-8c47-4153-90bf-20a28caa476b_3840w.jpg"/></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
<div className="flex-1">
<p className="text-xl font-semibold text-white tracking-tight font-geist" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Deep Sleep Journey</p>
</div>
</div>
<div className="flex items-center gap-3 text-xs">
<div className="flex items-center gap-1 text-white">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>15 min</span>
</div>
<div className="text-white/50 font-geist">•</div>
<div className="flex items-center gap-1 text-white/80">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<span className="font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Guided</span>
</div>
</div>
</div>
</div>

<div className="bg-white/5 border-white/5 border rounded-3xl mb-6 pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all" style={{animationDelay: '0.5s'}}>

<div className="flex items-center justify-between mb-4">
<div className="">
<p className="text-xs text-neutral-500 font-medium mb-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Your Progress</p>
<p className="text-2xl tracking-tight text-neutral-200 font-playfair font-medium" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Weekly Stats</p>
</div>
<div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-2 rounded-2xl">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
<span className="text-indigo-300 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>On Track</span>
</div>
</div>

<div className="h-40 rounded-2xl mb-4 overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
<div className="h-full relative">
<canvas className="w-full h-full" height="252" id="meditationChart" style={{display: 'block', boxSizing: 'border-box', height: '126px', width: '261px'}} width="522"></canvas>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mb-4">
<div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center hover:bg-white/[0.07] transition-colors cursor-pointer">
<p className="text-2xl text-neutral-200 mb-1 font-playfair font-medium" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>142</p>
<p className="text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Total min</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center hover:bg-white/[0.07] transition-colors cursor-pointer">
<p className="text-2xl text-neutral-200 mb-1 font-playfair font-medium" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>7</p>
<p className="text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Sessions</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center hover:bg-white/[0.07] transition-colors cursor-pointer">
<p className="text-2xl text-neutral-200 mb-1 font-playfair font-medium" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>12</p>
<p className="text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Day streak</p>
</div>
</div>

<div className="flex space-x-1 items-center justify-between">
<div className="flex bg-white/10 rounded-2xl p-1 gap-1">
<button className="stats-tab-btn px-4 py-2 text-xs bg-white/20 border border-white/10 text-neutral-200 rounded-xl backdrop-blur font-medium transition-all hover:bg-white/25 font-geist" data-stats-view="week" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Week</button>
<button className="stats-tab-btn px-4 py-2 text-xs text-neutral-500 font-medium rounded-xl transition-all hover:bg-white/5 bg-transparent font-geist" data-stats-view="month" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Month</button>
<button className="stats-tab-btn px-4 py-2 text-xs text-neutral-500 font-medium rounded-xl transition-all hover:bg-white/5 bg-transparent font-geist" data-stats-view="year" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Year</button>
</div>
<button className="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition-colors font-medium text-xs" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
<span className="font-geist">View details</span>
<svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6 animate-fade-in-slide" style={{animationDelay: '0.6s'}}>
<div className="flex flex-col gap-3 text-neutral-200 bg-white/10 border-white/10 border rounded-3xl p-4 backdrop-blur hover:border-white/15 hover:bg-white/[0.12] transition-all cursor-pointer group">
<div className="w-full h-32 rounded-2xl overflow-hidden mb-2">
<img alt="Night meditation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bda7e82-7412-498e-85b2-cb664f33f3cf_3840w.jpg"/>
</div>
<div>
<p className="text-sm font-semibold text-neutral-200 mb-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Evening Calm</p>
<p className="text-xs text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Relaxing session</p>
</div>
<button className="w-full bg-white/20 border border-white/10 rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-white/25 transition-colors">
<svg className="text-neutral-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="text-xs font-medium text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Play</span>
</button>
</div>
<div className="flex flex-col gap-3 text-neutral-200 bg-white/10 border-white/10 border rounded-3xl p-4 backdrop-blur hover:border-white/15 hover:bg-white/[0.12] transition-all cursor-pointer group">
<div className="w-full h-32 rounded-2xl overflow-hidden mb-2">
<img alt="Nature sounds" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d9f3e47-8c3f-4d18-9da7-384cbf14cdf3_320w.jpg"/>
</div>
<div className="">
<p className="text-sm font-semibold text-neutral-200 mb-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Rain Sounds</p>
<p className="text-xs text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>30 min ambient</p>
</div>
<button className="w-full bg-white/20 border border-white/10 rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-white/25 transition-colors">
<svg className="text-neutral-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="text-xs font-medium text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Play</span>
</button>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4 animate-fade-in-slide" style={{animationDelay: '0.7s'}}>
<h3 className="text-base font-semibold tracking-tight text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Related Sessions</h3>
<button className="text-neutral-500 font-medium text-xs hover:text-neutral-300 transition-colors font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>View all</button>
</div>
<div className="space-y-3">
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden flex gap-4 animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '0.8s'}}>
<div className="w-20 h-20 flex-shrink-0 overflow-hidden">
<img alt="Rain on Leaves" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1712505217656-61317699cf79?w=3840&amp;q=80"/>
</div>
<div className="flex-1 py-4 pr-4 flex items-center justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Rain on Leaves</p>
<p className="text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Nature sounds • 30 min</p>
</div>
<div className="text-right">
<p className="text-neutral-200 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>New</p>
</div>
</div>
</div>
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden flex gap-4 animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '0.9s'}}>
<div className="w-20 h-20 flex-shrink-0 overflow-hidden">
<img alt="Moonlight Meditation" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4d83c8d-e097-481c-9655-c95bad075b89_320w.webp"/>
</div>
<div className="flex-1 py-4 pr-4 flex items-center justify-between">
<div className="flex-1">
<p className="font-medium text-sm text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Moonlight Meditation</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Evening calm • 20 min</p>
</div>
<div className="text-right">
<p className="font-medium text-xs text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Popular</p>
</div>
</div>
</div>
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden flex gap-4 animate-fade-in-slide hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer" style={{animationDelay: '1s'}}>
<div className="w-20 h-20 flex-shrink-0 overflow-hidden">
<img alt="Bedtime Stories" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1566732141996-4bd15e53c53b?w=3840&amp;q=80"/>
</div>
<div className="flex-1 py-4 pr-4 flex items-center justify-between">
<div className="flex-1">
<p className="font-medium text-sm text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Bedtime Stories</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Narrated tales • 25 min</p>
</div>
<div className="text-right">
<p className="text-neutral-300 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Relaxing</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white/10 border-white/10 border rounded-3xl pt-3 pr-3 pb-3 pl-3 absolute right-4 bottom-8 left-4 backdrop-blur animate-fade-in-slide" style={{animationDelay: '1.1s'}}>
<div className="flex items-center justify-around py-2 relative">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute h-full w-1/4 bg-indigo-500/40 rounded-2xl blur-xl transition-all duration-500 ease-out" id="tabGlow3" style={{left: '50%', opacity: '1'}}></div>
</div>
<button className="flex flex-col items-center gap-1 relative z-10 tab-button-3 hover:scale-105 transition-transform" data-index="0" data-tab="home">
<div className="w-10 h-10 transition-all duration-300 rounded-2xl flex items-center justify-center bg-transparent">
<svg className="w-5 h-5 text-neutral-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
<span className="text-xs text-neutral-500 transition-colors duration-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Home</span>
</button>
<button className="flex flex-col items-center gap-1 relative z-10 tab-button-3 hover:scale-105 transition-transform" data-index="1" data-tab="explore">
<div className="w-10 h-10 transition-all duration-300 rounded-2xl flex items-center justify-center bg-transparent">
<svg className="w-5 h-5 text-neutral-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<span className="text-xs text-neutral-500 transition-colors duration-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Explore</span>
</button>
<button className="flex flex-col items-center gap-1 relative z-10 tab-button-3 hover:scale-105 transition-transform" data-index="2" data-tab="stats">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 border border-indigo-400/50 shadow-lg shadow-indigo-500/30 rounded-2xl flex items-center justify-center backdrop-blur transition-all duration-300">
<svg className="w-5 h-5 text-white transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path></svg>
</div>
<span className="text-xs text-white font-semibold transition-colors duration-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Stats</span>
</button>
<button className="flex flex-col items-center gap-1 relative z-10 tab-button-3 hover:scale-105 transition-transform" data-index="3" data-tab="profile">
<div className="w-10 h-10 transition-all duration-300 rounded-2xl flex items-center justify-center bg-transparent">
<svg className="w-5 h-5 text-neutral-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs text-neutral-500 transition-colors duration-300 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Profile</span>
</button>
</div>

</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>
</section>
</main>


    </>
  );
}
