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
      <div className="video-background-container fixed top-0 w-full h-screen -z-10"><video autoplay="" className="w-full h-full object-cover" id="aura-video" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/917e6671-73a2-4096-86f8-65a4ec1616c4/1.mp4"></video></div>

<header className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-20" data-animate="" style={{opacity: '0', transform: 'translateY(-8px)', transition: 'all .6s'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 font-semibold text-lg tracking-tight" href="#">
<svg className="lucide lucide-calendar w-5 h-5 stroke-[2]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        Scheduler
      </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-indigo-600" href="#">Features</a>
<a className="hover:text-indigo-600" href="#">Pricing</a>
<a className="hover:text-indigo-600" href="#">Blog</a>
<a className="hover:text-indigo-600" href="#">Login</a>
</nav>
<button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
<svg className="lucide lucide-menu w-5 h-5 stroke-[2]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="w-full relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center gap-6" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.7s 120ms'}}>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold max-w-3xl">Plan smarter. Meet happier.</h1>
<p className="text-gray-600 max-w-xl">A next-gen scheduling platform built for fast-moving teams. Sync calendars, automate invites, and make every meeting count.</p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black">Get Started</button>
<button className="px-6 py-3 rounded-lg bg-gray-200 text-sm font-medium hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black">Learn More</button>
</div>
</div>
</section>

<main className="flex-1 w-full flex sm:px-8 pr-4 pb-16 pl-4 items-start justify-center">
<div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8" data-animate-parent="">

<div className="w-full lg:w-1/2 bg-white rounded-xl shadow-sm overflow-hidden transform opacity-0 translate-y-5 transition-all duration-700" data-animate="" style={{transitionDelay: '180ms', opacity: '1', transform: 'translateY(0px)'}}>

<div className="bg-gradient-to-r from-indigo-50 to-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
<button className="p-2 hover:bg-indigo-100 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="prevMonth">
<svg className="lucide lucide-chevron-left w-5 h-5 stroke-[2]" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="font-semibold tracking-tight text-base sm:text-lg" id="monthLabel">December 2024</h2>
<button className="p-2 hover:bg-indigo-100 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="nextMonth">
<svg className="lucide lucide-chevron-right w-5 h-5 stroke-[2]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="px-6 pt-4">
<label className="sr-only" htmlFor="dateInput">Selected date</label>
<div className="flex items-center w-full rounded-lg bg-white ring-1 ring-gray-200 px-4 py-3 gap-2 shadow-sm">
<svg className="lucide lucide-calendar w-5 h-5 stroke-[2] text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<input className="flex-1 bg-transparent outline-none text-sm" id="dateInput" readonly="" type="text" value="Dec 8 2024"/>
</div>
</div>

<div className="px-6 pt-4 flex flex-wrap gap-3">
<button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">Today</button>
<button className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">Yesterday</button>
<button className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">This Week</button>
<button className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">Next Week</button>
</div>

<div className="p-6">
<div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-3">
<span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span className="text-gray-400">Sa</span><span className="text-gray-400">Su</span>
</div>
<div className="grid grid-cols-7 gap-y-3 text-center" id="calendarGrid"><span></span><span className=""></span><span></span><span></span><span></span><span></span><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">1</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">2</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">3</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">4</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">5</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">6</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">7</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">8</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">9</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition bg-indigo-600 text-white font-medium selected">10</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">11</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">12</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">13</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">14</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">15</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">16</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">17</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">18</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">19</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">20</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">21</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400 relative">22<span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 block w-1.5 h-1.5 rounded-full bg-black"></span></button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">23</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">24</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">25</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">26</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">27</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">28</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition text-gray-400">29</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">30</button><button className="w-10 h-10 flex items-center justify-center rounded-full text-sm hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition">31</button></div>
</div>
</div>

<div className="w-full lg:w-1/2 bg-white rounded-xl shadow-sm overflow-hidden transform opacity-0 translate-y-5 transition-all duration-700" data-animate="" style={{transitionDelay: '360ms', opacity: '1', transform: 'translateY(0px)'}}>
<div className="p-6 pb-4 relative">

<h2 className="text-lg font-semibold tracking-tight">Quarterly Product Review</h2>
<button aria-label="Dismiss" className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black">
<svg className="lucide lucide-x w-5 h-5 stroke-[2]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>


<div className="flex items-center gap-2 mt-6">
<svg className="lucide lucide-users w-4 h-4 stroke-[2]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm">4 guests from Acme Inc + Partners</span>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between bg-indigo-600/10 rounded-lg px-3 py-2">
<div className="flex items-center gap-3">
<img alt="Evelyn Harper" className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/women/22.jpg"/>
<span className="text-sm font-medium">Evelyn Harper</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-indigo-600/20 text-indigo-800">Product Lead</span>
</div>
<div className="flex items-center justify-between bg-amber-500/10 rounded-lg px-3 py-2">
<div className="flex items-center gap-3">
<img alt="Michael Chen" className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/79.jpg"/>
<span className="text-sm font-medium">Michael Chen</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-800">QA</span>
</div>
<div className="flex items-center justify-between bg-teal-600/10 rounded-lg px-3 py-2">
<div className="flex items-center gap-3">
<img alt="Sara Martinez" className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/women/55.jpg"/>
<span className="text-sm font-medium">Sara Martinez</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-teal-600/20 text-teal-800">Marketing</span>
</div>
<div className="flex items-center justify-between bg-blue-600/10 rounded-lg px-3 py-2">
<div className="flex items-center gap-3">
<img alt="David Wilson" className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/36.jpg"/>
<span className="text-sm font-medium">David Wilson</span>
</div>
<span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-800">Engineering</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6 bg-gray-100 rounded-lg px-3 py-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 stroke-[2]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm">Mon • Jan 15 2025</span>
</div>
<span className="hidden sm:inline">–</span>
<span className="text-sm">2:00 – 3:30 pm (EST)</span>
</div>


<div className="mt-6">
</div>

<button className="w-full mt-6 flex items-center gap-2 justify-center bg-black text-white rounded-lg py-3 text-sm font-medium hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black">
<svg className="lucide lucide-video w-4 h-4 stroke-[2]" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
            Join Zoom Call
          </button>
<button className="w-full mt-3 flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-3 text-sm hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black">
<svg className="lucide lucide-file-plus w-4 h-4 stroke-[2]" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
            Attach files or notes
          </button>
</div>

<div className="border-t border-gray-200"></div>

<div className="p-6 flex flex-col sm:flex-row gap-4">
<button className="sm:flex-1 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black">Delete</button>
<button className="sm:flex-1 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black">Reschedule</button>
<button className="sm:flex-1 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800">Save Changes</button>
</div>
</div>
</div>
</main>





    </>
  );
}
