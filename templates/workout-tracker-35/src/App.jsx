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



      // Demo plan data
      const plan = [
        {
          day: 1, title: "Full Body Workout", sections: {
            "Warm Up": [
              { name: "Jumping Jacks", sr: "1 × 2 min", thumb: "https://images.unsplash.com/photo-1599586120429-9853f2c6aa53?auto=format&fit=crop&w=1200&q=60" },
              { name: "Arm Circles", sr: "2 × 20", thumb: "https://images.unsplash.com/photo-1548625149-9129dad7f74f?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Workout": [
              { name: "Bodyweight Squats", sr: "4 × 12", thumb: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=60" },
              { name: "Push-Ups", sr: "4 × 10", thumb: "https://images.unsplash.com/photo-1597076537067-0d65d00f2e8f?auto=format&fit=crop&w=1200&q=60" },
              { name: "Bent-Over Rows (Bands)", sr: "3 × 12", thumb: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Cool Down": [
              { name: "Hamstring Stretch", sr: "1 × 60s", thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=60" },
            ]
          }
        },
        {
          day: 2, title: "Upper Body Strength", sections: {
            "Warm Up": [
              { name: "Band Pull-Aparts", sr: "2 × 15", thumb: "https://images.unsplash.com/photo-1571731956672-dd55e9d5b1b0?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Workout": [
              { name: "Incline Push-Ups", sr: "4 × 10", thumb: "https://images.unsplash.com/photo-1594737625785-c6683fc5cd84?auto=format&fit=crop&w=1200&q=60" },
              { name: "One-Arm Row", sr: "3 × 12/side", thumb: "https://images.unsplash.com/photo-1517135399940-2854a1ad3d17?auto=format&fit=crop&w=1200&q=60" },
              { name: "Shoulder Taps", sr: "3 × 20", thumb: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Cool Down": [
              { name: "Chest Stretch", sr: "1 × 60s", thumb: "https://images.unsplash.com/photo-1584467735871-b0a39f7e1b58?auto=format&fit=crop&w=1200&q=60" },
            ]
          }
        },
        {
          day: 3, title: "Leg Day", sections: {
            "Warm Up": [
              { name: "Leg Swings", sr: "2 × 15/side", thumb: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Workout": [
              { name: "Lunges", sr: "4 × 10/side", thumb: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=60" },
              { name: "Glute Bridges", sr: "3 × 15", thumb: "https://images.unsplash.com/photo-1548690312-e3b001734e25?auto=format&fit=crop&w=1200&q=60" },
              { name: "Wall Sit", sr: "3 × 45s", thumb: "https://images.unsplash.com/photo-1546484959-b3d2bcbfbbd6?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Cool Down": [
              { name: "Quad Stretch", sr: "1 × 60s/side", thumb: "https://images.unsplash.com/photo-1571732213301-8c8d7b9a05c3?auto=format&fit=crop&w=1200&q=60" },
            ]
          }
        },
        {
          day: 4, title: "Core + Cardio", sections: {
            "Warm Up": [
              { name: "High Knees", sr: "2 × 45s", thumb: "https://images.unsplash.com/photo-1517638851339-4aa32003c11a?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Workout": [
              { name: "Plank", sr: "4 × 45s", thumb: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=60" },
              { name: "Mountain Climbers", sr: "3 × 40s", thumb: "https://images.unsplash.com/photo-1553531888-a9f9e36fa0f1?auto=format&fit=crop&w=1200&q=60" },
              { name: "Bicycle Crunches", sr: "3 × 20", thumb: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Cool Down": [
              { name: "Spinal Twist", sr: "1 × 60s", thumb: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=60" },
            ]
          }
        },
        {
          day: 5, title: "Mobility & Stretch", sections: {
            "Warm Up": [
              { name: "Cat-Cow", sr: "2 × 10", thumb: "https://images.unsplash.com/photo-1593810450677-5a50d63a8611?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Workout": [
              { name: "World’s Greatest Stretch", sr: "3 × 6/side", thumb: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=60" },
              { name: "Hip Flexor Stretch", sr: "3 × 45s/side", thumb: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=60" },
              { name: "Thoracic Rotation", sr: "2 × 10/side", thumb: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Cool Down": [
              { name: "Box Breathing", sr: "4 × 1 min", thumb: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60" },
            ]
          }
        },
        {
          day: 6, title: "Push + Pull", sections: {
            "Warm Up": [
              { name: "Scapular Push-Ups", sr: "2 × 12", thumb: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Workout": [
              { name: "Diamond Push-Ups", sr: "4 × 8", thumb: "https://images.unsplash.com/photo-1546484959-b3d2bcbfbbd6?auto=format&fit=crop&w=1200&q=60" },
              { name: "Inverted Row (Table)", sr: "4 × 10", thumb: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=60" },
              { name: "Y-T-W Raises", sr: "3 × 12", thumb: "https://images.unsplash.com/photo-1571732213301-8c8d7b9a05c3?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Cool Down": [
              { name: "Shoulder Stretch", sr: "1 × 60s", thumb: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=60" },
            ]
          }
        },
        {
          day: 7, title: "Active Recovery", sections: {
            "Warm Up": [
              { name: "Light Walk", sr: "1 × 10 min", thumb: "https://images.unsplash.com/photo-1552074282-5d2dfc257b36?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Workout": [
              { name: "Yoga Flow", sr: "20 min", thumb: "https://images.unsplash.com/photo-1527933053326-89d1746b76dc?auto=format&fit=crop&w=1200&q=60" },
              { name: "Foam Rolling", sr: "10 min", thumb: "https://images.unsplash.com/photo-1571731956672-dd55e9d5b1b0?auto=format&fit=crop&w=1200&q=60" },
            ],
            "Cool Down": [
              { name: "Breathwork", sr: "5 min", thumb: "https://images.unsplash.com/photo-1540202404-1a5254e94e86?auto=format&fit=crop&w=1200&q=60" },
            ]
          }
        },
      ];

      let activeDayIndex = 0;

      // Elements
      const sidebarDaysEl = document.getElementById('sidebar-days');
      const mobileDaysEl = document.getElementById('mobile-days');
      const contentTitleEl = document.getElementById('content-title');
      const contentSubtitleEl = document.getElementById('content-subtitle');
      const sectionsContainerEl = document.getElementById('sections-container');
      const progressBarEl = document.getElementById('progress-bar');
      const progressLabelEl = document.getElementById('progress-label');

      const modalEl = document.getElementById('video-modal');
      const closeModalBtn = document.getElementById('close-modal');
      const modalTitle = document.getElementById('modal-title');
      const modalSubtitle = document.getElementById('modal-subtitle');
      const modalThumb = document.getElementById('modal-thumb');
      const modalDesc = document.getElementById('modal-desc');

      // Templates
      const dayCardTpl = document.getElementById('day-card-template');
      const mobileDayChipTpl = document.getElementById('mobile-day-chip-template');
      const sectionTpl = document.getElementById('section-template');
      const exerciseCardTpl = document.getElementById('exercise-card-template');

      function totalExercisesOf(dayObj) {
        return Object.values(dayObj.sections).reduce((sum, list) => sum + list.length, 0);
      }

      function setProgress(index) {
        const done = index + 1;
        const total = plan.length;
        const pct = Math.round((done / total) * 100);
        progressBarEl.style.width = pct + '%';
        if (progressLabelEl) progressLabelEl.textContent = `Week Progress — ${done}/${total}`;
      }

      function renderDaysSidebar() {
        sidebarDaysEl.innerHTML = '';
        plan.forEach((d, idx) => {
          const node = dayCardTpl.content.cloneNode(true);
          const root = node.querySelector('button');
          root.setAttribute('data-index', idx);

          node.querySelector('[data-ref="dayNumber"]').textContent = d.day;
          node.querySelector('[data-ref="dayTitle"]').textContent = d.title;
          node.querySelector('[data-ref="exerciseCount"]').textContent = `${totalExercisesOf(d)} exercises`;

          if (idx === activeDayIndex) {
            root.classList.add('bg-white/5', 'ring-[#3B82F6]/40');
          }

          root.addEventListener('click', () => {
            activeDayIndex = idx;
            renderAll();
            scrollToTopIfMobile();
          });

          sidebarDaysEl.appendChild(node);
        });
      }

      function renderDaysMobile() {
        if (!mobileDaysEl) return;
        mobileDaysEl.innerHTML = '';
        plan.forEach((d, idx) => {
          const node = mobileDayChipTpl.content.cloneNode(true);
          const root = node.querySelector('button');
          node.querySelector('[data-ref="dayNumber"]').textContent = `Day ${d.day}`;
          node.querySelector('[data-ref="dayTitle"]').textContent = d.title;

          if (idx === activeDayIndex) {
            root.classList.add('bg-white/10');
            root.classList.add('ring-[#3B82F6]/40');
          }

          root.addEventListener('click', () => {
            activeDayIndex = idx;
            renderAll();
          });

          mobileDaysEl.appendChild(node);
        });
      }

      function renderContent() {
        const d = plan[activeDayIndex];
        contentTitleEl.textContent = `Day ${d.day} – ${d.title}`;
        contentSubtitleEl.textContent = Object.keys(d.sections).join(' • ');
        sectionsContainerEl.innerHTML = '';

        Object.entries(d.sections).forEach(([sectionName, exercises]) => {
          const sNode = sectionTpl.content.cloneNode(true);
          sNode.querySelector('[data-ref="sectionTitle"]').textContent = sectionName;

          const listEl = sNode.querySelector('[data-ref="exerciseList"]');
          exercises.forEach((ex, exIdx) => {
            const eNode = exerciseCardTpl.content.cloneNode(true);
            eNode.querySelector('[data-ref="name"]').textContent = ex.name;
            eNode.querySelector('[data-ref="setsReps"]').textContent = ex.sr;
            const img = eNode.querySelector('[data-ref="thumb"]');
            img.src = ex.thumb;
            img.alt = `${ex.name} thumbnail`;

            const watchBtn = eNode.querySelector('[data-ref="watch"]');
            watchBtn.addEventListener('click', () => openVideo(ex, d, sectionName));

            listEl.appendChild(eNode);
          });

          sectionsContainerEl.appendChild(sNode);
        });
      }

      function openVideo(ex, dayObj, sectionName) {
        modalTitle.textContent = ex.name;
        modalSubtitle.textContent = `${sectionName} • Day ${dayObj.day} – ${dayObj.title}`;
        modalThumb.src = ex.thumb;
        modalDesc.textContent = `You're viewing the tutorial for "${ex.name}". Focus on controlled movement and breathing.`;
        modalEl.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }

      function closeModal() {
        modalEl.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }

      function scrollToTopIfMobile() {
        if (window.innerWidth < 768) window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Modal close handlers
      closeModalBtn.addEventListener('click', closeModal);
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl || e.target.classList.contains('bg-black/70')) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) closeModal();
      });

      function renderAll() {
        renderDaysSidebar();
        renderDaysMobile();
        renderContent();
        setProgress(activeDayIndex);
      }

      // Initial render
      renderAll();
    
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
      

<div className="min-h-screen flex flex-col">

<header className="border-b border-white/10 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#121212]/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-medium tracking-tight text-white/90">WT</span>
</div>
<div className="flex items-baseline gap-2">
<h1 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">Workout Tracker</h1>
<span className="hidden sm:inline-block text-gray-400 text-sm">7-Day Plan</span>
</div>
</div>

<div className="flex items-center gap-4">

<div className="hidden md:flex items-center gap-3">
<div className="flex flex-col">
<div className="text-xs text-gray-400" id="progress-label">Week Progress — 1/7</div>
<div className="w-40 h-2 rounded-full bg-white/10 overflow-hidden ring-1 ring-white/10">
<div className="h-full bg-[#3B82F6] w-[14.28%] transition-[width] duration-300" id="progress-bar"></div>
</div>
</div>
</div>

<nav className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                  Home
                </button>
<button aria-label="Profile" className="inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition">

<svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21a8 8 0 1 0-16 0" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>

<button aria-label="Menu" className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition">

<svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round"></path>
</svg>
</button>
</nav>
</div>
</div>
</div>

<div className="md:hidden border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex gap-3 overflow-x-auto py-3 no-scrollbar" id="mobile-days"></div>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
<div className="lg:flex lg:gap-8">

<aside className="hidden lg:block lg:w-1/3">
<div className="sticky top-[76px] space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold text-white">Weekly Training Plan</h2>
<span className="text-xs text-gray-400">7 Days</span>
</div>
<div className="grid gap-3" id="sidebar-days"></div>
</div>
</aside>

<section className="lg:w-2/3">

<div className="mb-5">
<h3 className="text-2xl tracking-tight font-semibold text-white" id="content-title">Day 1 – Full Body Workout</h3>
<p className="text-sm text-gray-400 mt-1" id="content-subtitle">Warm Up • Workout • Cool Down</p>
</div>

<div className="space-y-8" id="sections-container"></div>
</section>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0f0f0f]/95 border-t border-white/10 backdrop-blur">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-3">
<button className="flex flex-col items-center gap-1 py-3 text-xs text-gray-400 hover:text-white transition">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Home
            </button>
<button className="flex flex-col items-center gap-1 py-3 text-xs text-white">
<svg className="h-5 w-5 text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4M16 2v4M3 10h18M7 14h2m3 0h2m3 0h2M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Days
            </button>
<button className="flex flex-col items-center gap-1 py-3 text-xs text-gray-400 hover:text-white transition">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21a8 8 0 1 0-16 0" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Profile
            </button>
</div>
</div>
</nav>
</div>

<div className="hidden fixed inset-0 z-50" id="video-modal">
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative h-full w-full flex items-center justify-center p-4">
<div className="w-full max-w-3xl rounded-xl bg-[#151515] ring-1 ring-white/10 shadow-2xl overflow-hidden">

<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">

<svg className="h-4 w-4 text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4v16l13-8-13-8Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-base font-semibold tracking-tight text-white" id="modal-title">Exercise Video</p>
<p className="text-xs text-gray-400" id="modal-subtitle">Follow along with proper form</p>
</div>
</div>
<button aria-label="Close video" className="h-9 w-9 inline-flex items-center justify-center rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" id="close-modal">

<svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="px-4 sm:px-5 py-4">
<div className="aspect-video w-full rounded-lg overflow-hidden ring-1 ring-white/10 bg-black/50 relative">
<img alt="Video placeholder" className="h-full w-full object-cover opacity-70" id="modal-thumb" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 ring-1 ring-white/20 hover:bg-white/15 hover:ring-white/30 text-sm text-white transition">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4v16l13-8-13-8Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                  Play Preview
                </button>
</div>
</div>
<p className="mt-3 text-sm text-gray-400" id="modal-desc">Watch this quick guide to ensure correct technique and reduce injury risk.</p>
</div>
</div>
</div>
</div>

<template id="day-card-template">
<button className="group text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition p-4 w-full">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-400">Day <span data-ref="dayNumber"></span></p>
<h4 className="text-base font-semibold tracking-tight text-white" data-ref="dayTitle">Title</h4>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400" data-ref="exerciseCount">0 exercises</span>
<svg className="h-5 w-5 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</button>
</template>
<template id="mobile-day-chip-template">
<button className="shrink-0 rounded-lg px-3 py-2 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition">
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400" data-ref="dayNumber">Day 1</span>
<span className="text-sm font-medium text-white" data-ref="dayTitle">Title</span>
</div>
</button>
</template>
<template id="section-template">
<div className="space-y-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-[#3B82F6] ring-2 ring-[#3B82F6]/30"></span>
<h5 className="text-base font-semibold tracking-tight text-white" data-ref="sectionTitle">Section</h5>
</div>
<div className="grid sm:grid-cols-2 gap-3" data-ref="exerciseList"></div>
</div>
</template>
<template id="exercise-card-template">
<div className="rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition overflow-hidden">
<div className="aspect-[16/9] bg-black/40 relative">
<img alt="Thumbnail" className="absolute inset-0 h-full w-full object-cover opacity-80" data-ref="thumb"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<button className="absolute bottom-2 left-2 inline-flex items-center gap-2 rounded-md bg-[#3B82F6]/90 hover:bg-[#3B82F6] text-white text-xs px-3 py-1.5 ring-1 ring-white/20 transition" data-ref="watch">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4v16l13-8-13-8Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
            Watch Video
          </button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white" data-ref="name">Exercise</p>
<div className="text-xs text-gray-300 inline-flex items-center gap-1">

<svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 6.5 17.5 17.5M3 10l4-4m10 12 4-4M7 17l-3-3m16-4-3-3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span data-ref="setsReps">3 × 12</span>
</div>
</div>
</div>
</div>
</template>



    </>
  );
}
