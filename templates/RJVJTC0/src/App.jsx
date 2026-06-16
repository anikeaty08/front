import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      // Duration segmented control (removed) - guard for safety
      const durationGroup = document.getElementById('durationGroup');
      if (durationGroup) {
        durationGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.seg-btn');
          if (!btn) return;
          durationGroup.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active','border-orange-500/30','bg-orange-50','text-orange-700'));
          durationGroup.querySelectorAll('.seg-btn').forEach(b => b.classList.add('border-neutral-200','text-neutral-700'));
          btn.classList.remove('border-neutral-200','text-neutral-700');
          btn.classList.add('active','border-orange-500/30','bg-orange-50','text-orange-700');
        });
      }

      // Toggle "Let students choose duration"
      const toggle = document.getElementById('toggleStudentChoice');
      const choices = document.getElementById('studentChoices');
      let toggled = false;
      toggle.addEventListener('click', () => {
        toggled = !toggled;
        toggle.classList.toggle('bg-orange-500', toggled);
        toggle.classList.toggle('bg-neutral-200', !toggled);
        toggle.querySelector('.dot').style.transform = toggled ? 'translateX(2.25rem)' : 'translateX(0.25rem)';
        choices.classList.toggle('hidden', !toggled);
      });

      // Choice chips
      const choiceChips = document.getElementById('choiceChips');
      if (choiceChips) {
        choiceChips.addEventListener('click', (e) => {
          const chip = e.target.closest('.chip');
          if (!chip) return;
          chip.classList.toggle('active');
          chip.classList.toggle('bg-orange-50');
          chip.classList.toggle('text-orange-700');
          chip.classList.toggle('border-orange-500/30');
          chip.classList.toggle('border-neutral-200');
          chip.classList.toggle('text-neutral-700');
        });
      }

      // Buffer dropdown
      const bufferBtn = document.getElementById('bufferBtn');
      const bufferMenu = document.getElementById('bufferMenu');
      const bufferLabel = document.getElementById('bufferLabel');
      bufferBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        bufferMenu.classList.toggle('hidden');
      });
      bufferMenu.addEventListener('click', (e) => {
        const item = e.target.closest('.menu-item');
        if (!item) return;
        bufferLabel.textContent = item.textContent.trim();
        bufferMenu.classList.add('hidden');
      });
      document.addEventListener('click', () => bufferMenu.classList.add('hidden'));

      // Tabs removed - guard to avoid errors
      const tabs = document.getElementById('availTabs');
      if (tabs) {
        const weeklyPanel = document.getElementById('weeklyPanel');
        const specificPanel = document.getElementById('specificPanel');
        tabs.addEventListener('click', (e) => {
          const tab = e.target.closest('.tab');
          if (!tab) return;
          tabs.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active','bg-white','text-orange-700','shadow-sm');
            t.classList.add('text-neutral-700');
          });
          tab.classList.add('active','bg-white','text-orange-700','shadow-sm');
          if (tab.dataset.tab === 'weekly') {
            weeklyPanel.classList.remove('hidden');
            specificPanel.classList.add('hidden');
          } else {
            weeklyPanel.classList.add('hidden');
            specificPanel.classList.remove('hidden');
          }
        });
      }

      // Day chips
      const dayChips = document.getElementById('dayChips');
      dayChips.addEventListener('click', (e) => {
        const day = e.target.closest('.day');
        if (!day) return;
        const active = day.classList.contains('bg-orange-50');
        if (active) {
          day.classList.remove('bg-orange-50','text-orange-700','border-orange-500/30');
          day.classList.add('border-neutral-200','text-neutral-700');
        } else {
          day.classList.add('bg-orange-50','text-orange-700','border-orange-500/30');
          day.classList.remove('border-neutral-200','text-neutral-700');
        }
      });

      // Time sheet
      const timeSheet = document.getElementById('timeSheet');
      const timeList = document.getElementById('timeList');
      const sheetTitle = document.getElementById('sheetTitle');
      let currentTargetBtn = null;

      function openSheet(targetBtn) {
        currentTargetBtn = targetBtn;
        sheetTitle.textContent = targetBtn.dataset.role === 'start' ? 'Select start time' : 'Select end time';
        timeSheet.classList.remove('hidden');
      }
      function closeSheet() {
        timeSheet.classList.add('hidden');
        currentTargetBtn = null;
      }

      // Generate times (every 30 minutes)
      const times = [];
      for (let h = 6; h <= 21; h++) {
        for (let m of [0, 30]) {
          const date = new Date();
          date.setHours(h, m, 0, 0);
          let hour = h % 12 || 12;
          const ampm = h < 12 ? 'AM' : 'PM';
          const label = `${hour}:${String(m).padStart(2,'0')} ${ampm}`;
          times.push(label);
        }
      }
      timeList.innerHTML = times.map(t => `<button class="px-3 py-2 rounded-lg border border-neutral-200 text-[15px] hover:bg-neutral-50 text-left">${t}</button>`).join('');
      timeList.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || !currentTargetBtn) return;
        currentTargetBtn.textContent = btn.textContent.trim();
        closeSheet();
      });

      document.querySelectorAll('[data-dismiss="sheet"]').forEach(el => {
        el.addEventListener('click', closeSheet);
      });

      // Open sheet from any time button
      function delegateTimeButtons(root) {
        root.addEventListener('click', (e) => {
          const tbtn = e.target.closest('.time-btn');
          if (!tbtn) return;
          openSheet(tbtn);
        });
      }
      delegateTimeButtons(document);

      // Add/Remove blocks
      const blocks = document.getElementById('blocks');
      document.getElementById('addBlock').addEventListener('click', () => {
        const row = document.createElement('div');
        row.className = 'block-row flex items-center justify-between gap-2 p-3 rounded-2xl border border-neutral-200';
        row.innerHTML = `
          <div class="flex items-center gap-2">
            <i data-lucide="clock" class="w-4 h-4 text-neutral-500"></i>
            <button data-role="start" class="time-btn px-3 py-2 rounded-lg border border-neutral-200 text-[15px] hover:bg-neutral-50">9:00 AM</button>
            <span class="text-neutral-400 text-[14px]">to</span>
            <button data-role="end" class="time-btn px-3 py-2 rounded-lg border border-neutral-200 text-[15px] hover:bg-neutral-50">12:00 PM</button>
          </div>
          <button class="remove-row text-neutral-400 hover:text-neutral-600 p-2 rounded-lg" aria-label="Remove">
            <i data-lucide="trash-2" class="w-5 h-5"></i>
          </button>
        `;
        blocks.appendChild(row);
        lucide.createIcons(); // refresh icons
      });

      document.addEventListener('click', (e) => {
        const remove = e.target.closest('.remove-row');
        if (!remove) return;
        const row = remove.closest('.block-row');
        if (row && blocks.children.length > 1) row.remove();
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<div className="h-[env(safe-area-inset-top)]"></div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
<button aria-label="Back" className="flex items-center gap-2 text-neutral-600 active:opacity-70">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
<span className="text-[15px]">Back</span>
</button>
<div className="text-[20px] sm:text-[22px] tracking-tight font-semibold">New Availability</div>
<button className="text-neutral-600 opacity-0 pointer-events-none">...</button>
</div>
</header>

<main className="flex-1">
<div className="max-w-md mx-auto px-4 pb-36 pt-4">

<section className="mb-5">
<div className="flex items-center gap-3">
<img alt="Teacher avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[13px] text-neutral-500">You’re setting availability for</p>
<p className="text-[16px] font-medium tracking-tight">1:1 Lessons</p>
</div>
</div>
</section>

<section className="mb-7">
<h2 className="text-[22px] tracking-tight font-semibold mb-3">Class duration</h2>

<label className="block">
<span className="sr-only">Duration</span>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 hover:bg-neutral-50">
<i className="w-4 h-4 text-neutral-500" data-lucide="clock"></i>
<input aria-label="Duration value" className="w-20 bg-transparent outline-none text-[15px] text-neutral-800" id="durationInput" min="5" step="5" type="number" value="60"/>
<div className="h-5 w-px bg-neutral-200"></div>
<select className="bg-transparent outline-none text-[15px] text-neutral-700" id="durationUnit">
<option selected="" value="minutes">minutes</option>
<option value="hours">hours</option>
</select>
</div>
</label>

<div className="mt-4 p-3 rounded-2xl border border-neutral-200">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="sparkles"></i>
<p className="text-[15px]">Let students choose duration</p>
</div>
<button className="toggle relative inline-flex h-8 w-14 items-center rounded-full bg-neutral-200 transition-colors" id="toggleStudentChoice">
<span className="dot h-6 w-6 bg-white rounded-full shadow-sm translate-x-1 transition-transform"></span>
</button>
</div>
<div className="hidden mt-3" id="studentChoices">
<p className="text-[13px] text-neutral-500 mb-2">Allowed options</p>
<div className="flex flex-wrap gap-2" id="choiceChips">
<button className="chip px-3 py-1.5 rounded-full border border-neutral-200 text-[14px] text-neutral-700 hover:bg-neutral-50" data-value="30">30m</button>
<button className="chip px-3 py-1.5 rounded-full border border-neutral-200 text-[14px] text-neutral-700 hover:bg-neutral-50" data-value="45">45m</button>
<button className="chip active px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 text-[14px]" data-value="60">1h</button>
<button className="chip px-3 py-1.5 rounded-full border border-neutral-200 text-[14px] text-neutral-700 hover:bg-neutral-50" data-value="90">1h30</button>
</div>
</div>
</div>

<div className="mt-4">
<label className="text-[15px] text-neutral-700 mb-2 block">Buffer between classes</label>
<div className="relative">
<button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-neutral-200 text-[15px] hover:bg-neutral-50" id="bufferBtn">
<span className="flex items-center gap-2 text-neutral-700">
<i className="w-4 h-4 text-neutral-500" data-lucide="hourglass"></i>
<span id="bufferLabel">10 minutes</span>
</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-30 mt-2 w-full bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden" id="bufferMenu">
<button className="menu-item w-full text-left px-4 py-3 text-[15px] hover:bg-neutral-50" data-mins="0">No buffer</button>
<button className="menu-item w-full text-left px-4 py-3 text-[15px] hover:bg-neutral-50" data-mins="5">5 minutes</button>
<button className="menu-item w-full text-left px-4 py-3 text-[15px] hover:bg-neutral-50" data-mins="10">10 minutes</button>
<button className="menu-item w-full text-left px-4 py-3 text-[15px] hover:bg-neutral-50" data-mins="15">15 minutes</button>
<button className="menu-item w-full text-left px-4 py-3 text-[15px] hover:bg-neutral-50" data-mins="30">30 minutes</button>
</div>
</div>
</div>
</section>

<section className="mb-7">
<h2 className="text-[22px] tracking-tight font-semibold mb-3">Availability</h2>

<div className="mt-1" id="weeklyPanel">
<h3 className="text-[17px] font-medium tracking-tight mb-2">Repeats weekly</h3>
<p className="text-[13px] text-neutral-500 mb-2">Days available</p>
<div className="flex flex-wrap gap-2" id="dayChips">

<button className="day px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 text-[14px]" data-day="Mon">Mon</button>
<button className="day px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 text-[14px]" data-day="Tue">Tue</button>
<button className="day px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 text-[14px]" data-day="Wed">Wed</button>
<button className="day px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 text-[14px]" data-day="Thu">Thu</button>
<button className="day px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 text-[14px]" data-day="Fri">Fri</button>
<button className="day px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-700" data-day="Sat">Sat</button>
<button className="day px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-700" data-day="Sun">Sun</button>
</div>
<div className="mt-4">
<p className="text-[13px] text-neutral-500 mb-2">Time blocks</p>
<div className="space-y-2" id="blocks">

<div className="block-row flex items-center justify-between gap-2 p-3 rounded-2xl border border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="clock"></i>
<button className="time-btn px-3 py-2 rounded-lg border border-neutral-200 text-[15px] hover:bg-neutral-50" data-role="start">8:00 AM</button>
<span className="text-neutral-400 text-[14px]">to</span>
<button className="time-btn px-3 py-2 rounded-lg border border-neutral-200 text-[15px] hover:bg-neutral-50" data-role="end">5:00 PM</button>
</div>
<button aria-label="Remove" className="remove-row text-neutral-400 hover:text-neutral-600 p-2 rounded-lg">
<i className="w-5 h-5" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="mt-2">
<button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-dashed border-neutral-300 text-neutral-700 hover:bg-neutral-50" id="addBlock">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="text-[15px]">Add time block</span>
</button>
</div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-neutral-200"></div>

<div className="mt-4" id="specificPanel">
<h3 className="text-[17px] font-medium tracking-tight mb-2">Specific dates</h3>
<div className="p-3 border border-neutral-200 rounded-2xl">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="calendar"></i>
<p className="text-[15px]">Pick date range</p>
</div>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 text-[15px]">
<span className="text-neutral-500">From</span>
<input className="w-full outline-none bg-transparent text-neutral-800" type="date" />
</input></label>
<label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 text-[15px]">
<span className="text-neutral-500">To</span>
<input className="w-full outline-none bg-transparent text-neutral-800" type="date"/>
</label>
</div>
<div className="mt-3">
<p className="text-[13px] text-neutral-500 mb-2">Time on selected dates</p>
<div className="block-row flex items-center justify-between gap-2 p-3 rounded-2xl border border-neutral-200">
<div className="flex items gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="clock"></i>
<button className="time-btn px-3 py-2 rounded-lg border border-neutral-200 text-[15px] hover:bg-neutral-50" data-role="start">9:00 AM</button>
<span className="text-neutral-400 text-[14px]">to</span>
<button className="time-btn px-3 py2 rounded-lg border border-neutral-200 text-[15px] hover:bg-neutral-50" data-role="end">1:00 PM</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-7">
<label className="text-[15px] text-neutral-700 mb-2 block">Internal note</label>
<div className="relative">
<textarea className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-[15px] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500/50" placeholder="Optional — students won’t see this" rows="3"></textarea>
<div className="absolute bottom-2 right-2 text-neutral-400 text-[12px]">0/140</div>
</div>
</section>
</div>
</main>

<footer className="fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-t border-neutral-200">
<div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
<button className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 text-[15px] text-neutral-800 hover:bg-neutral-50">
          Preview
        </button>
<button className="flex-[2] px-4 py-3 rounded-xl bg-orange-500 text-white text-[16px] font-semibold tracking-tight shadow-sm hover:bg-orange-600 active:translate-y-px flex items-center justify-center gap-2">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i>
          Save &amp; Publish
        </button>
</div>
<div className="h-[env(safe-area-inset-bottom)]"></div>
</footer>
</div>

<div className="fixed inset-0 z-50 hidden" id="timeSheet">
<div className="absolute inset-0 bg-black/30" data-dismiss="sheet"></div>
<div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-2xl">
<div className="mx-auto max-w-md">
<div className="px-5 pt-4 pb-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-500" data-lucide="clock"></i>
<p className="text-[17px] font-medium tracking-tight" id="sheetTitle">Select time</p>
</div>
<button className="p-2 text-neutral-500 hover:text-neutral-700" data-dismiss="sheet">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="px-5 pb-6">
<div className="grid grid-cols-3 gap-2 max-h-[48vh] overflow-y-auto" id="timeList">

</div>
</div>
</div>
</div>
</div>




    </>
  );
}
