import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    let currentDate = new Date();
    let selectedDate = new Date(2024, 11, 15); // December 15, 2024
    let isCalendarOpen = false;

    function toggleCalendar() {
      const dropdown = document.getElementById('calendarDropdown');
      const chevron = document.getElementById('chevronIcon');
      
      isCalendarOpen = !isCalendarOpen;
      
      if (isCalendarOpen) {
        dropdown.classList.remove('opacity-0', 'invisible', 'scale-95');
        dropdown.classList.add('opacity-100', 'visible', 'scale-100');
        chevron.style.transform = 'rotate(180deg)';
        generateCalendar();
      } else {
        dropdown.classList.add('opacity-0', 'invisible', 'scale-95');
        dropdown.classList.remove('opacity-100', 'visible', 'scale-100');
        chevrotate(0deg)';
      }
    }

    function generateCalendar() {
      const calendarDays = document.getElementById('calendarDays');
      const calendarMonth = document.getElementById('calendarMonth');
      
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      
      calendarMonth.textContent = `${monthNames[month]} ${year}`;
      
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      let daysHTML = '';
      
      // Empty cells for days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        daysHTML += '<div class="p-2"></div>';
      }
      
      // Days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const isSelected = selectedDate.getDate() === day && 
                          selectedDate.getMonth() === month && 
                          selectedDate.getFullYear() === year;
        const isToday = new Date().getDate() === day && 
                       new Date().getMonth() === month && 
                       new Date().getFullYear() === year;
        
        let classes = 'p-2 text-center text-sm rounded-lg cursor-pointer transition hover:bg-white/10';
        
        if (isSelected) {
          classes += ' bg-white text-slate-900 font-medium';
        } else if (isToday) {
          classes += ' text-white ring-1 ring-white/20';
        } else {
          classes += ' text-slate-200 hover:text-white';
        }
        
        daysHTML += `<div class="${classes}" onclick="selectDate(${day})">${day}</div>`;
      }
      
      calendarDays.innerHTML = daysHTML;
    }

    function selectDate(day) {
      selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      document.getElementById('checkinDate').textContent = 
        `${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}`;
      
      toggleCalendar();
    }

    function previousMonth() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      generateCalendar();
    }

    function nextMonth() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      generateCalendar();
    }

    // Close calendar when clicking outside
    document.addEventListener('click', function(event) {
      const calendarElement = document.getElementById('aura-emfa51b3d');
      if (!calendarElement.contains(event.target) && isCalendarOpen) {
        toggleCalendar();
      }
    });

    // Initialize calendar on load
    generateCalendar();
  


    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="fixed top-0 w-full h-screen -z-10 opacity-30">
<div className="absolute top-0 left-1/4 w-96 h-32 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 blur-3xl rounded-full" style={{animation: 'aurora 8s ease-in-out infinite'}}></div>
<div className="absolute top-10 right-1/4 w-72 h-24 bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-pink-400/15 blur-3xl rounded-full" style={{animation: 'aurora 6s ease-in-out infinite 2s'}}></div>
</div>

<div className="max-w-7xl sm:px-6 lg:px-8 lg:py-10 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<div className="sm:p-6 lg:p-8 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] bg-white/5 border-white/15 border rounded-3xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl">

<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10 ring-1 ring-blue-300/30">
<svg className="lucide lucide-snowflake h-5 w-5 text-slate-200" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</span>
<span className="text-xl md:text-2xl text-white font-medium tracking-tight">Fjörður</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/90">
<a className="hover:text-white transition" href="#">Lodges</a>
<a className="hover:text-white transition" href="#">Hot Springs</a>
<a className="hover:text-white transition" href="#">Aurora Tours</a>
<a className="hover:text-white transition" href="#">Contact</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex gap-2 hover:bg-white transition font-medium text-slate-900 bg-white/90 rounded-full pt-2 pr-4 pb-2 pl-4 items-center">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Book Stay
          </button>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
<svg className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">

<div className="lg:col-span-7 xl:col-span-8">
<div className="max-w-2xl lg:max-w-3xl">
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[0.95]">
<span className="block text-white">Where Winter</span>
<span className="block text-white/70">Meets</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Wonder</span>
</h1>
<p className="mt-6 text-base sm:text-lg text-slate-200/90">
              Exclusive winter lodges nestled between glacial fjords and volcanic peaks. Experience Iceland's raw beauty with Northern Lights, geothermal springs, and pristine wilderness.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-4">
<div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 ring-1 ring-white/15">
<svg className="lucide lucide-star h-4 w-4 text-slate-200" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-white font-medium">4.9</span>
<span className="text-slate-300/80">from 1,800+ stays</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 ring-1 ring-white/15">
<svg className="lucide lucide-map-pin h-4 w-4 text-slate-200" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-slate-100">Westfjords, Iceland</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 xl:col-span-4">
<div className="relative sm:p-6 lg:p-7 ring-1 ring-white/10 bg-slate-950/80 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/12274be1-66df-4649-b8f4-25371827a1f8_1600w.jpg)] bg-cover rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<button className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
<svg className="lucide lucide-pencil h-4 w-4 text-slate-200" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
<h3 className="text-xl sm:text-2xl text-white font-medium tracking-tight">Aurora Glass Lodge</h3>
<p className="mt-1 text-sm text-slate-300/80">4 bedrooms • Glass ceiling • Private hot tub</p>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 relative cursor-pointer" id="aura-emfa51b3d" onclick="toggleCalendar()">
<label className="flex items-center gap-2 text-slate-300/80 text-xs font-medium">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-200" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
    Check-in
  </label>
<div className="mt-1.5 flex items-center justify-between">
<span className="text-white font-medium" id="checkinDate">Dec 15</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-200 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="chevronIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<p className="mt-1 text-[11px] text-slate-400/80">After 3:00 PM</p>

<div className="absolute top-full left-0 right-0 mt-2 z-50 opacity-0 invisible transition-all duration-200 transform scale-95" id="calendarDropdown">
<div className="bg-slate-950/95 backdrop-blur-xl rounded-2xl p-4 ring-1 ring-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">

<div className="flex items-center justify-between mb-4">
<button className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="previousMonth()">
<svg className="text-slate-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h3 className="text-white font-medium" id="calendarMonth">December 2024</h3>
<button className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" onclick="nextMonth()">
<svg className="text-slate-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="grid grid-cols-7 gap-1 mb-2">
<div className="text-center text-xs font-medium text-slate-400 p-2">Su</div>
<div className="text-center text-xs font-medium text-slate-400 p-2">Mo</div>
<div className="text-center text-xs font-medium text-slate-400 p-2">Tu</div>
<div className="text-center text-xs font-medium text-slate-400 p-2">We</div>
<div className="text-center text-xs font-medium text-slate-400 p-2">Th</div>
<div className="text-center text-xs font-medium text-slate-400 p-2">Fr</div>
<div className="text-center text-xs font-medium text-slate-400 p-2">Sa</div>
</div>
<div className="grid grid-cols-7 gap-1" id="calendarDays">

</div>
</div>
</div>

</div>
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<label className="flex items-center gap-2 text-slate-300/80 text-xs font-medium">
<svg className="lucide lucide-calendar-clock h-4 w-4 text-slate-200" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
                  Check-out
                </label>
<div className="mt-1.5 flex items-center justify-between">
<span className="text-white font-medium">Dec 19</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-200" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<p className="mt-1 text-[11px] text-slate-400/80">Until 11:00 AM</p>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<label className="flex items-center gap-2 text-slate-300/80 text-xs font-medium">
<svg className="lucide lucide-users h-4 w-4 text-slate-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  Guests
                </label>
<div className="mt-1.5 flex items-center justify-between">
<span className="text-white font-medium">2–8 people</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-200" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<label className="flex items-center gap-2 text-slate-300/80 text-xs font-medium">
<svg className="lucide lucide-thermometer h-4 w-4 text-slate-200" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
                  Hot Tub
                </label>
<div className="mt-1.5 flex items-center justify-between">
<span className="text-white font-medium">Included</span>
<svg className="lucide lucide-check h-4 w-4 text-slate-200" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
<div className="mt-6 flex items-end justify-between">
<div className="">
<div className="text-2xl text-white font-medium tracking-tight">€599<span className="text-base font-medium text-slate-300"> / night</span></div>
<div className="text-xs text-slate-400/80">Taxes and fees not included</div>
</div>
<button className="inline-flex gap-2 hover:bg-white/90 transition font-medium text-slate-900 bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center">
                Reserve
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-300/80">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check h-4 w-4 text-slate-200" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Aurora guarantee or full refund</span>
</div>
<span className="hidden sm:inline text-slate-500">•</span>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-zap h-4 w-4 text-slate-200" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Geothermal heated lodges</span>
</div>
</div>

<section className="mt-16 lg:mt-20">
<div className="mb-8">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-3">Choose Your Lodge</h2>
<p className="text-slate-300/80 text-lg max-w-2xl">Each accommodation offers a unique perspective on Iceland's winter landscape, from intimate glass igloos to luxury multi-bedroom lodges.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

<div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/[0.07] transition">
<div className="relative h-48 lg:h-56 overflow-hidden">
<img alt="Aurora Glass Lodge interior" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/117f9c23-7ae1-4076-903e-2c1470137ddd_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-green-400/20 px-2.5 py-1 text-xs text-white ring-1 ring-green-300/40 backdrop-blur-sm">
<svg className="lucide lucide-star h-3.5 w-3.5 text-slate-200" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                Most Popular
              </div>
<div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur-sm">
<svg className="lucide lucide-eye h-3.5 w-3.5 text-slate-200" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                360° Glass
              </div>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<div className="">
<h3 className="text-xl font-medium text-white">Aurora Glass Lodge</h3>
<p className="text-sm text-slate-300/80 mt-0.5">Premium glass-ceiling experience</p>
</div>
<div className="text-right">
<div className="text-lg font-medium text-white">€599</div>
<div className="text-xs text-slate-400">per night</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 mb-4">
<div className="text-center p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-users h-4 w-4 text-slate-200 mx-auto mb-1" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="text-xs text-white font-medium">4-8</div>
<div className="text-[10px] text-slate-400">guests</div>
</div>
<div className="text-center p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-bed h-4 w-4 text-slate-200 mx-auto mb-1" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
<div className="text-xs text-white font-medium">4</div>
<div className="text-[10px] text-slate-400">bedrooms</div>
</div>
<div className="text-center p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-bath h-4 w-4 text-slate-200 mx-auto mb-1" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg>
<div className="text-xs text-white font-medium">2</div>
<div className="text-[10px] text-slate-400">bathrooms</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-droplets h-3.5 w-3.5 text-slate-200" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                  Private hot tub
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-flame h-3.5 w-3.5 text-slate-200" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                  Fireplace
                </span>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-white text-sm font-medium hover:bg-white/15 transition ring-1 ring-white/15">
                View Details
                <svg className="lucide lucide-arrow-right h-4 w-4 text-slate-200" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/[0.07] transition">
<div className="relative h-48 lg:h-56 overflow-hidden">
<img alt="Ice Cave Suite interior" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-blue-400/20 px-2.5 py-1 text-xs text-white ring-1 ring-blue-300/40 backdrop-blur-sm">
<svg className="lucide lucide-snowflake h-3.5 w-3.5 text-slate-200" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
                Unique Design
              </div>
<div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur-sm">
<svg className="lucide lucide-mountain h-3.5 w-3.5 text-slate-200" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
                Ice Architecture
              </div>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-xl font-medium text-white">Ice Cave Suite</h3>
<p className="text-sm text-slate-300/80 mt-0.5">Luxury suite with ice architecture</p>
</div>
<div className="text-right">
<div className="text-lg font-medium text-white">€799</div>
<div className="text-xs text-slate-400">per night</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 mb-4">
<div className="text-center p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-users h-4 w-4 text-slate-200 mx-auto mb-1" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="text-xs text-white font-medium">2-4</div>
<div className="text-[10px] text-slate-400">guests</div>
</div>
<div className="text-center p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-bed h-4 w-4 text-slate-200 mx-auto mb-1" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
<div className="text-xs text-white font-medium">2</div>
<div className="text-[10px] text-slate-400">bedrooms</div>
</div>
<div className="text-center p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-bath h-4 w-4 text-slate-200 mx-auto mb-1" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg>
<div className="text-xs text-white font-medium">1</div>
<div className="text-[10px] text-slate-400">bathroom</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-thermometer h-3.5 w-3.5 text-slate-200" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
                  Heated floors
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-wine h-3.5 w-3.5 text-slate-200" data-lucide="wine" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8"></path><path d="M7 10h10"></path><path d="M12 15v7"></path><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path></svg>
                  Wine cellar
                </span>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-white text-sm font-medium hover:bg-white/15 transition ring-1 ring-white/15">
                View Details
                <svg className="lucide lucide-arrow-right h-4 w-4 text-slate-200" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/[0.07] transition">
<div className="relative h-32 overflow-hidden">
<img alt="Glass Igloo" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3133ed2b-2c5e-4637-80af-026d4565c5a5_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-purple-400/20 px-2 py-0.5 text-xs text-white ring-1 ring-purple-300/40 backdrop-blur-sm">
<svg className="lucide lucide-heart h-3 w-3 text-slate-200" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                Romantic
              </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div>
<h4 className="text-base font-medium text-white">Glass Igloo</h4>
<p className="text-xs text-slate-300/80">Cozy dome for couples</p>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">€299</div>
<div className="text-xs text-slate-400">per night</div>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-300/80 mb-3">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-3 w-3 text-slate-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  2 guests
                </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed h-3 w-3 text-slate-200" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                  1 bedroom
                </span>
</div>
<button className="w-full rounded-lg bg-white/10 px-3 py-2 text-white text-xs font-medium hover:bg-white/15 transition ring-1 ring-white/15">
                View Details
              </button>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/[0.07] transition">
<div className="relative h-32 overflow-hidden">
<img alt="Northern Cabin" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-green-400/20 px-2 py-0.5 text-xs text-white ring-1 ring-green-300/40 backdrop-blur-sm">
<svg className="lucide lucide-trees h-3 w-3 text-slate-200" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
                Traditional
              </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div className="">
<h4 className="text-base font-medium text-white">Northern Cabin</h4>
<p className="text-xs text-slate-300/80">Classic log cabin experience</p>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">€399</div>
<div className="text-xs text-slate-400">per night</div>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-300/80 mb-3">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-3 w-3 text-slate-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  4 guests
                </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed h-3 w-3 text-slate-200" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                  2 bedrooms
                </span>
</div>
<button className="w-full rounded-lg bg-white/10 px-3 py-2 text-white text-xs font-medium hover:bg-white/15 transition ring-1 ring-white/15">
                View Details
              </button>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/[0.07] transition">
<div className="relative h-32 overflow-hidden">
<img alt="Arctic Treehouse" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-2 py-0.5 text-xs text-white ring-1 ring-amber-300/40 backdrop-blur-sm">
<svg className="lucide lucide-tree-pine h-3 w-3 text-slate-200" data-lucide="tree-pine" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path><path d="M12 22v-3"></path></svg>
                Elevated
              </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div>
<h4 className="text-base font-medium text-white">Arctic Treehouse</h4>
<p className="text-xs text-slate-300/80">Elevated forest views</p>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">€449</div>
<div className="text-xs text-slate-400">per night</div>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-300/80 mb-3">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-3 w-3 text-slate-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  6 guests
                </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed h-3 w-3 text-slate-200" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                  3 bedrooms
                </span>
</div>
<button className="w-full rounded-lg bg-white/10 px-3 py-2 text-white text-xs font-medium hover:bg-white/15 transition ring-1 ring-white/15">
                View Details
              </button>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between">
<div className="flex items-center gap-6 text-sm text-slate-300/80">
<span>6 unique accommodations</span>
<span className="hidden sm:inline text-slate-500">•</span>
<span className="hidden sm:inline">All include breakfast &amp; transfers</span>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white text-sm font-medium hover:bg-white/15 transition ring-1 ring-white/15">
            Compare All Lodges
            <svg className="lucide lucide-external-link h-4 w-4 text-slate-200" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</section>

<section className="mt-16 lg:mt-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

<div className="relative group rounded-3xl bg-white/5 p-7 lg:p-8 ring-1 ring-white/15 backdrop-blur-sm overflow-hidden" style={{minHeight: '360px'}}>
<div className="absolute inset-0 opacity-10" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.3) 50%, transparent 100%)', animation: 'shimmer 3s ease-in-out infinite', transform: 'translateX(-100%)'}}></div>
<div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-green-300/20 blur-3xl"></div>
<div className="relative z-10">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 ring-1 ring-green-300/30">
<img alt="Northern Lights over lodge" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur-sm">
<svg className="lucide lucide-zap h-3.5 w-3.5 text-slate-200" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                  Aurora • Views
                </div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Northern Lights</h3>
<p className="text-sm text-slate-300/90">Glass-ceiling bedrooms with unobstructed aurora views. Professional photography equipment available for capture.</p>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-camera h-3.5 w-3.5 text-slate-200" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                  Photo gear
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-moon h-3.5 w-3.5 text-slate-200" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
                  Dark sky
                </span>
</div>
</div>
</div>

<div className="relative group rounded-3xl bg-white/5 p-7 lg:p-8 ring-1 ring-white/15 backdrop-blur-sm overflow-hidden" style={{minHeight: '360px'}}>
<div className="absolute inset-0 opacity-10" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 50%, transparent 100%)', animation: 'shimmer 3s ease-in-out infinite 1s', transform: 'translateX(-100%)'}}></div>
<div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-300/20 blur-3xl"></div>
<div className="relative z-10">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 ring-1 ring-blue-300/30">
<img alt="Geothermal hot spring" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur-sm">
<svg className="lucide lucide-droplets h-3.5 w-3.5 text-slate-200" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                  Natural • Springs
                </div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Geothermal Springs</h3>
<p className="text-sm text-slate-300/90">Private natural hot springs heated by volcanic activity. Soak in mineral-rich waters while watching snowfall.</p>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-thermometer h-3.5 w-3.5 text-slate-200" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
                  38-42°C
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-heart h-3.5 w-3.5 text-slate-200" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                  Mineral rich
                </span>
</div>
</div>
</div>

<div className="relative group rounded-3xl bg-white/5 p-7 lg:p-8 ring-1 ring-white/15 backdrop-blur-sm overflow-hidden" style={{minHeight: '360px'}}>
<div className="absolute inset-0 opacity-10" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.3) 50%, transparent 100%)', animation: 'shimmer 3s ease-in-out infinite 2s', transform: 'translateX(-100%)'}}></div>
<div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-purple-300/20 blur-3xl"></div>
<div className="relative z-10">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 ring-1 ring-purple-300/30">
<img alt="Dog sledding adventure" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur-sm">
<svg className="lucide lucide-mountain h-3.5 w-3.5 text-slate-200" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
                  Arctic • Adventure
                </div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Arctic Adventures</h3>
<p className="text-sm text-slate-300/90">Dog sledding, ice caves, and glacier hikes. Professional guides lead you through Iceland's winter wonderland.</p>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-compass h-3.5 w-3.5 text-slate-200" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Expert guides
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">
<svg className="lucide lucide-shield-check h-3.5 w-3.5 text-slate-200" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  All gear included
                </span>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between">
<p className="text-sm text-slate-300/80">
<span className="font-medium text-white">36 photos</span> • Last updated December 2024
          </p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white text-sm font-medium hover:bg-white/15 transition ring-1 ring-white/15">
            View all photos
            <svg className="lucide lucide-arrow-right h-4 w-4 text-slate-200" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>
</div>
</div>


    </>
  );
}
