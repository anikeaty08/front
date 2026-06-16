import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    /* Fade-in global elements */
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-animate]').forEach((el, idx) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, idx * 120);
      });
    });

    /* Calendar generation with enhanced visuals */
    const monthLabel  = document.getElementById('monthLabel');
    const calendar    = document.getElementById('calendarGrid');
    const dateInput   = document.getElementById('dateInput');
    let currentDate   = new Date(2024, 11, 1); // Dec 2024

    function renderCalendar() {
      const year  = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const today = new Date();
      monthLabel.textContent = currentDate.toLocaleDateString('en-US', { month:'long', year:'numeric' });

      calendar.innerHTML = '';
      const firstIdx = (new Date(year, month, 1).getDay() + 6) % 7; // Monday-start
      const lastDay  = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstIdx; i++) calendar.appendChild(document.createElement('span'));

      for (let d = 1; d <= lastDay; d++) {
        const dateObj = new Date(year, month, d);
        const dayIdx  = (dateObj.getDay() + 6) % 7; // 0=Mon
        const btn = document.createElement('button');
        btn.textContent = d;
        btn.className = 'w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition';

        // Weekend color
        if (dayIdx >= 5) btn.classList.add('text-gray-400');

        // Today ring
        if (dateObj.toDateString() === today.toDateString()) {
          btn.classList.add('ring-2','ring-indigo-600');
        }

        // Pre-selected example highlight
        if (month===11 && year===2024 && d===10) {
          btn.classList.add('bg-indigo-600','text-white','font-medium','selected');
        }

        // Example with dot
        if (month===11 && year===2024 && d===22){
          const dot = document.createElement('span');
          dot.className = 'absolute bottom-1.5 left-1/2 -translate-x-1/2 block w-1.5 h-1.5 rounded-full bg-black';
          btn.classList.add('relative');
          btn.appendChild(dot);
        }

        btn.addEventListener('click', () => {
          calendar.querySelectorAll('.selected').forEach(s => s.classList.remove('bg-indigo-600','text-white','font-medium','selected'));
          btn.classList.add('bg-indigo-600','text-white','font-medium','selected');
          const sel = new Date(year, month, d);
          dateInput.value = sel.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
        });

        calendar.appendChild(btn);
      }
    }

    document.getElementById('prevMonth').addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth()-1); renderCalendar(); });
    document.getElementById('nextMonth').addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth()+1); renderCalendar(); });

    renderCalendar();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="video-background-container fixed top-0 w-full h-screen -z-10"><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/8ce4d123-70b9-4746-8c84-3e733e79667b/1.mp4"></video></div>

<header className="w-full backdrop-blur border-b sticky top-0 z-20 bg-black/80 border-gray-800" data-animate="" style={{opacity: '0', transform: 'translateY(-8px)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 font-semibold text-lg tracking-tight" href="#">
<svg className="lucide lucide-calendar w-5 h-5 stroke-[2]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        Scheduler
      </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-indigo-400" href="#">Features</a>
<a className="hover:text-indigo-400" href="#">Pricing</a>
<a className="hover:text-indigo-400" href="#">Blog</a>
<a className="hover:text-indigo-400" href="#">Login</a>
</nav>
<button className="md:hidden p-2 rounded-full hover:bg-gray-900">
<svg className="lucide lucide-menu w-5 h-5 stroke-[2]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="w-full relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-6 text-center mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 items-center" data-animate="" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold max-w-3xl">Plan smarter. Meet happier.</h1>
<p className="max-w-xl text-gray-300">A next-gen scheduling platform built for fast-moving teams. Sync calendars, automate invites, and make every meeting count.</p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-black hover:bg-gray-200 text-sm font-medium text-slate-50 bg-gradient-to-br from-[#190bda] to-[#dab3ff] rounded-lg pt-3 pr-6 pb-3 pl-6">Get Started</button>
<button className="px-6 py-3 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-black bg-gray-800 hover:bg-gray-700">Learn More</button>
</div>
</div>
</section>

<main className="flex-1 w-full flex sm:px-8 pr-4 pb-16 pl-4 items-start justify-center">
<div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8" data-animate-parent="">

<div className="w-full lg:w-1/2 overflow-hidden transform opacity-0 transition-all duration-700 bg-black/60 border-white/20 border rounded-xl shadow-sm backdrop-blur-md translate-y-5" data-animate="" style={{opacity: '1', transform: 'translateY(0px)'}}>

<div className="bg-gradient-to-r px-6 py-4 flex items-center justify-between border-b from-indigo-950/70 to-black/70 border-gray-800/70">
<button className="p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 hover:bg-indigo-900/60" id="prevMonth">
<svg className="lucide lucide-chevron-left w-5 h-5 stroke-[2]" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="font-semibold tracking-tight text-base sm:text-lg text-white/90" id="monthLabel">December 2024</h2>
<button className="p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 hover:bg-indigo-900/60" id="nextMonth">
<svg className="lucide lucide-chevron-right w-5 h-5 stroke-[2]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="px-6 pt-4">
<label className="sr-only" htmlFor="dateInput">Selected date</label>
<div className="flex items-center w-full rounded-lg ring-1 px-4 py-3 gap-2 shadow-sm bg-white/10 ring-white/20 backdrop-blur-sm">
<svg className="lucide lucide-calendar w-5 h-5 stroke-[2] text-white/60" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<input className="flex-1 bg-transparent outline-none text-sm text-white/90 placeholder-white/50" id="dateInput" readonly="" type="text" value="Dec 8 2024"/>
</div>
</div>

<div className="px-6 pt-4 flex flex-wrap gap-3">
<button className="px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 bg-indigo-400 text-black hover:bg-indigo-300">Today</button>
<button className="px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 bg-white/10 text-white hover:bg-white/20">Yesterday</button>
<button className="px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 bg-white/10 text-white hover:bg-white/20">This Week</button>
<button className="px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 bg-white/10 text-white hover:bg-white/20">Next Week</button>
</div>

<div className="p-6">
<div className="grid grid-cols-7 text-center text-xs font-medium text-white/70 mb-3">
<span>Mo</span><span>Tu</span><span className="">We</span><span>Th</span><span className="">Fr</span><span className="text-white/50">Sa</span><span className="text-white/50">Su</span>
</div>
<div className="grid grid-cols-7 gap-y-3 text-center" id="calendarGrid"><span></span><span></span><span></span><span></span><span></span><span></span><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">1</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">2</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">3</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">4</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">5</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">6</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">7</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">8</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">9</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition bg-indigo-600 text-white font-medium selected">10</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">11</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">12</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">13</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">14</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">15</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">16</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">17</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">18</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">19</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">20</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">21</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400 relative">22<span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 block w-1.5 h-1.5 rounded-full bg-black"></span></button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">23</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">24</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">25</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">26</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">27</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">28</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">29</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">30</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">31</button></div>
</div>
</div>

<div className="w-full lg:w-1/2 overflow-hidden transform opacity-0 transition-all duration-700 bg-black/60 border-white/20 border rounded-xl shadow-sm backdrop-blur-md translate-y-5" data-animate="" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative pt-6 pr-6 pb-4 pl-6">

<h2 className="text-lg font-semibold tracking-tight">Quarterly Product Review</h2>
<button aria-label="Dismiss" className="absolute top-6 right-6 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black hover:bg-gray-900/40">
<svg className="lucide lucide-x w-5 h-5 stroke-[2]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>


<div className="flex items-center gap-2 mt-6 text-white/90">
<svg className="lucide lucide-users w-4 h-4 stroke-[2]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm">4 guests from Acme Inc + Partners</span>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-lg px-3 py-2 bg-indigo-400/20 backdrop-blur-sm bg-opacity-20 border border-indigo-400/30">
<div className="flex items-center gap-3">
<img alt="Evelyn Harper" className="w-8 h-8 rounded-full border border-white/20" src="https://randomuser.me/api/portraits/women/22.jpg"/>
<span className="text-sm font-medium text-white/90">Evelyn Harper</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-indigo-400/30 text-indigo-200 backdrop-blur-sm">Product Lead</span>
</div>
<div className="flex bg-amber-500/20 border-amber-500/30 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur-sm items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Michael Chen" className="w-8 h-8 rounded-full border border-white/20" src="https://randomuser.me/api/portraits/men/79.jpg"/>
<span className="text-sm font-medium text-white/90">Michael Chen</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-amber-500/30 text-amber-200 backdrop-blur-sm">QA</span>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2 bg-teal-400/20 backdrop-blur-sm bg-opacity-20 border border-teal-400/30">
<div className="flex items-center gap-3">
<img alt="Sara Martinez" className="w-8 h-8 rounded-full border border-white/20" src="https://randomuser.me/api/portraits/women/55.jpg"/>
<span className="text-sm font-medium text-white/90">Sara Martinez</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-teal-400/30 text-teal-200 backdrop-blur-sm">Marketing</span>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2 bg-blue-400/20 backdrop-blur-sm bg-opacity-20 border border-blue-400/30">
<div className="flex items-center gap-3">
<img alt="David Wilson" className="w-8 h-8 rounded-full border border-white/20" src="https://randomuser.me/api/portraits/men/36.jpg"/>
<span className="text-sm font-medium text-white/90">David Wilson</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-blue-400/30 text-blue-200 backdrop-blur-sm">Engineering</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6 rounded-lg px-3 py-2 bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700">
<div className="flex items-center gap-2 text-white/90">
<svg className="lucide lucide-clock w-4 h-4 stroke-[2]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm">Mon • Jan 15 2025</span>
</div>
<span className="hidden sm:inline text-white/90">–</span>
<span className="text-sm text-white/90">2:00 – 3:30 pm (EST)</span>
</div>


<div className="mt-6">
</div>

<button className="w-full mt-6 flex items-center gap-2 justify-center rounded-lg py-3 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-black bg-gradient-to-br from-[#190bda] to-[#dab3ff] text-black hover:bg-indigo-300">
<svg className="lucide lucide-video w-4 h-4 stroke-[2]" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
            Join Zoom Call
          </button>
<button className="w-full mt-3 flex items-center gap-2 rounded-lg px-3 py-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 hover:bg-gray-800">
<svg className="lucide lucide-file-plus w-4 h-4 stroke-[2]" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
            Attach files or notes
          </button>
</div>

<div className="border-t border-gray-800/60"></div>

<div className="flex flex-col sm:flex-row gap-4 pt-6 pr-6 pb-6 pl-6">
<button className="sm:flex-1 py-2 rounded-lg border text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-black border-gray-700 hover:bg-gray-950 bg-black bg-opacity-30 backdrop-blur-sm">Delete</button>
<button className="sm:flex-1 py-2 rounded-lg border text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-black border-gray-700 hover:bg-gray-950 bg-black bg-opacity-30 backdrop-blur-sm">Reschedule</button>
<button className="sm:flex-1 py-2 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 bg-indigo-400 bg-opacity-90 text-black hover:bg-indigo-300">Save Changes</button>
</div>
</div>
</div>
</main>





    </>
  );
}
