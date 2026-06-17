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



        document.addEventListener('DOMContentLoaded', () => {
            const calendarGrid = document.getElementById('calendarGrid');
            const currentMonthEl = document.getElementById('currentMonthYear');
            const prevBtn = document.getElementById('prevMonth');
            const nextBtn = document.getElementById('nextMonth');
            const selectedDateDisplay = document.getElementById('selectedDateDisplay');

            let currentDate = new Date();
            let selectedDate = null;

            // Fake booked dates (using a deterministic random pattern for demo)
            const isDateBooked = (day, month, year) => {
                return (day + month + year) % 7 === 0;
            };

            function renderCalendar() {
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();

                // Update Header
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                currentMonthEl.textContent = `${monthNames[month]} ${year}`;

                // Clear Grid
                calendarGrid.innerHTML = '';

                // First day of month
                const firstDay = new Date(year, month, 1).getDay();
                
                // Days in month
                const daysInMonth = new Date(year, month + 1, 0).getDate();

                // Empty slots for previous month
                for (let i = 0; i < firstDay; i++) {
                    const emptyCell = document.createElement('div');
                    emptyCell.className = 'h-10 w-full';
                    calendarGrid.appendChild(emptyCell);
                }

                // Days
                for (let i = 1; i <= daysInMonth; i++) {
                    const btn = document.createElement('button');
                    btn.className = 'calendar-day h-10 w-full flex items-center justify-center text-sm rounded-md border border-transparent';
                    btn.textContent = i;

                    // Check if booked
                    if (isDateBooked(i, month, year)) {
                        btn.classList.add('booked');
                    } 
                    // Check if selected
                    else if (selectedDate && 
                             selectedDate.getDate() === i && 
                             selectedDate.getMonth() === month && 
                             selectedDate.getFullYear() === year) {
                        btn.classList.add('selected');
                    } else {
                        btn.classList.add('text-[#3A2E2A]');
                        // Click event
                        btn.onclick = () => {
                            // Remove previous selection
                            const prevSelected = document.querySelector('.calendar-day.selected');
                            if (prevSelected) prevSelected.classList.remove('selected', 'bg-[#C8A878]', 'text-white');
                            
                            // Add new selection
                            selectedDate = new Date(year, month, i);
                            btn.classList.add('selected');
                            
                            // Update display text
                            const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(selectedDate);
                            selectedDateDisplay.textContent = formattedDate;
                            
                            // Animate text change
                            selectedDateDisplay.classList.remove('fade-in');
                            void selectedDateDisplay.offsetWidth; // trigger reflow
                            selectedDateDisplay.classList.add('fade-in');
                        };
                    }

                    calendarGrid.appendChild(btn);
                }
            }

            prevBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() - 1);
                renderCalendar();
            });

            nextBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() + 1);
                renderCalendar();
            });

            // Init
            renderCalendar();
        });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#F5F0E8]/95 backdrop-blur-md border-b border-[#3A2E2A]/10 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="uppercase text-2xl text-[#3A2E2A] tracking-tighter font-serif" href="#">
                Kosta’s Hall
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3A2E2A]/80">
<a className="hover:text-[#C8A878] transition-colors" href="#events">Events</a>
<a className="hover:text-[#C8A878] transition-colors" href="#venue">Venue</a>
<a className="hover:text-[#C8A878] transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-[#C8A878] transition-colors" href="#about">About</a>
</div>
<a className="bg-[#3A2E2A] text-[#C8A878] px-6 py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-[#C8A878] hover:text-[#3A2E2A] transition-colors duration-300" href="#reserve">
                Check Availability
            </a>
</div>
</nav>

<header className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&amp;w=2698&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-[#1A1A1A]/50 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent"></div>
<div className="relative z-10 text-center max-w-4xl px-6 fade-in" style={{animationDelay: '0.2s'}}>
<p className="text-[#C8A878] text-xs md:text-sm uppercase tracking-[0.2em] mb-4 font-medium">Est. 1998 • Podgorica</p>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-normal text-white tracking-tight mb-8">
                Where Moments <br/><span className="italic text-[#F5F0E8]">Become Memories</span>
</h1>
<p className="text-[#F5F0E8]/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                An architectural masterpiece designed for timeless weddings, prestigious corporate galas, and intimate gatherings.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#C8A878] text-[#1A1A1A] px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#F5F0E8] transition-colors duration-300 min-w-[160px]" href="#reserve">
                    Plan Your Event
                </a>
<a className="border border-[#F5F0E8]/30 text-[#F5F0E8] px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#F5F0E8] hover:text-[#1A1A1A] transition-colors duration-300 min-w-[160px]" href="#venue">
                    View Venue
                </a>
</div>
</div>
</header>

<section className="py-24 bg-white border-b border-[#3A2E2A]/5 relative -mt-20 z-20 rounded-t-3xl md:rounded-none max-w-7xl mx-auto shadow-2xl" id="reserve">
<div className="px-6 md:px-12">
<div className="flex flex-col lg:flex-row gap-12">

<div className="lg:w-1/2">
<span className="text-[#C8A878] text-xs uppercase tracking-widest font-medium block mb-4">Availability Checker</span>
<h2 className="text-3xl text-[#3A2E2A] font-serif mb-8">Select a Date</h2>
<div className="bg-[#F5F0E8] p-8 border border-[#3A2E2A]/5 select-none">
<div className="flex items-center justify-between mb-6">
<button className="text-[#3A2E2A]/60 hover:text-[#3A2E2A] p-2 hover:bg-[#3A2E2A]/5 rounded-full transition-colors" id="prevMonth">
<svg className="lucide lucide-chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<span className="text-lg font-medium text-[#3A2E2A] min-w-[140px] text-center" id="currentMonthYear">October 2024</span>
<button className="text-[#3A2E2A]/60 hover:text-[#3A2E2A] p-2 hover:bg-[#3A2E2A]/5 rounded-full transition-colors" id="nextMonth">
<svg className="lucide lucide-chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-7 gap-2 text-center mb-2">
<div className="text-xs uppercase tracking-wide text-[#3A2E2A]/40">Sun</div>
<div className="text-xs uppercase tracking-wide text-[#3A2E2A]/40">Mon</div>
<div className="text-xs uppercase tracking-wide text-[#3A2E2A]/40">Tue</div>
<div className="text-xs uppercase tracking-wide text-[#3A2E2A]/40">Wed</div>
<div className="text-xs uppercase tracking-wide text-[#3A2E2A]/40">Thu</div>
<div className="text-xs uppercase tracking-wide text-[#3A2E2A]/40">Fri</div>
<div className="text-xs uppercase tracking-wide text-[#3A2E2A]/40">Sat</div>
</div>

<div className="grid grid-cols-7 gap-2" id="calendarGrid">

</div>
<div className="flex items-center gap-4 mt-6 text-xs text-[#3A2E2A]/60 justify-center">
<div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#C8A878]"></div> Selected</div>
<div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full border border-[#3A2E2A]/20"></div> Available</div>
<div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#3A2E2A]/10"></div> Booked</div>
</div>
</div>
</div>

<div className="lg:w-1/2 flex flex-col justify-center transition-all duration-300">
<h3 className="text-xl font-medium mb-6 text-[#3A2E2A]">Event Details for <span className="text-[#C8A878] transition-all" id="selectedDateDisplay">Select a date</span></h3>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#3A2E2A]/60 font-semibold">Start Time</label>
<div className="relative">
<select className="w-full bg-[#F5F0E8] border border-[#3A2E2A]/10 text-[#3A2E2A] py-3 px-4 text-sm appearance-none focus:outline-none focus:border-[#C8A878]">
<option>09:00 AM</option>
<option>10:00 AM</option>
<option>11:00 AM</option>
<option>12:00 PM</option>
<option>01:00 PM</option>
<option>02:00 PM</option>
<option>03:00 PM</option>
<option selected="">04:00 PM</option>
<option>05:00 PM</option>
<option>06:00 PM</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#3A2E2A]/40">
<svg className="lucide lucide-clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#3A2E2A]/60 font-semibold">End Time</label>
<div className="relative">
<select className="w-full bg-[#F5F0E8] border border-[#3A2E2A]/10 text-[#3A2E2A] py-3 px-4 text-sm appearance-none focus:outline-none focus:border-[#C8A878]">
<option>05:00 PM</option>
<option>06:00 PM</option>
<option>07:00 PM</option>
<option>08:00 PM</option>
<option>09:00 PM</option>
<option>10:00 PM</option>
<option selected="">11:00 PM</option>
<option>12:00 AM</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#3A2E2A]/40">
<svg className="lucide lucide-clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#3A2E2A]/60 font-semibold">Event Type</label>
<div className="relative">
<select className="w-full bg-[#F5F0E8] border border-[#3A2E2A]/10 text-[#3A2E2A] py-3 px-4 text-sm appearance-none focus:outline-none focus:border-[#C8A878]">
<option>Wedding Reception</option>
<option>Corporate Conference</option>
<option>Birthday / Private Party</option>
<option>Gala Dinner</option>
<option>Art Exhibition</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#3A2E2A]/40">
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#3A2E2A]/60 font-semibold">Guest Count (Est.)</label>
<input className="w-full bg-[#F5F0E8] border border-[#3A2E2A]/10 text-[#3A2E2A] py-3 px-4 text-sm focus:outline-none focus:border-[#C8A878]" placeholder="e.g. 150" type="number"/>
</div>
<div className="pt-4">
<button className="w-full bg-[#3A2E2A] text-[#C8A878] py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#C8A878] hover:text-[#3A2E2A] transition-colors duration-300" type="button">
                                Confirm Availability
                            </button>
<p className="text-center text-[#3A2E2A]/40 text-xs mt-3">No payment required to check availability.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#3A2E2A] text-[#F5F0E8]" id="events">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-[#C8A878] text-xs uppercase tracking-widest font-medium block mb-4">What We Host</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-normal">Curated Event Experiences</h2>
</div>
<p className="max-w-md text-[#F5F0E8]/70 font-light leading-relaxed text-sm md:text-base">
                    From intimate gatherings to grand celebrations, our flexible spaces adapt to your vision with flawless execution.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-[#1A1A1A]">
<img alt="Weddings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-normal mb-2 text-[#F5F0E8]">Elegant Weddings</h3>
<p className="text-[#F5F0E8]/60 text-sm mb-4">A romantic setting for your special day, complete with bridal suites and grand staircases.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg className="lucide lucide-heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.28 3-2.5 3-4.74 0-3.26-3-6-6-6-1.5 0-3 .97-3.5 2.5-.5-1.53-2-2.5-3.5-2.5-3 0-6 2.74-6 6 0 2.24 1.5 3.46 3 4.74 2.25 1.89 4.49 3.86 6.5 5.26 2.01-1.4 4.25-3.37 6.5-5.26Z"></path></svg> Custom Decoration
                        </li>
</ul>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-[#1A1A1A]">
<img alt="Corporate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&amp;w=2573&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-normal mb-2 text-[#F5F0E8]">Corporate &amp; Galas</h3>
<p className="text-[#F5F0E8]/60 text-sm mb-4">Professional environments equipped with state-of-the-art AV technology for presentations.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg className="lucide lucide-mic-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path><circle cx="17" cy="7" r="5"></circle></svg> Audio Systems
                        </li>
</ul>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-[#1A1A1A]">
<img alt="Private Parties" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1520854226103-33f9160dfa68?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-normal mb-2 text-[#F5F0E8]">Private Receptions</h3>
<p className="text-[#F5F0E8]/60 text-sm mb-4">Cocktail parties and family reunions hosted in our sophisticated lounge areas.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg className="lucide lucide-glass-water" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5.8 4.32A2 2 0 0 1 7.72 2h8.56a2 2 0 0 1 1.92 2.32L17.2 20.21a2 2 0 0 1-2 1.79Z"></path><path d="M6 10h12"></path></svg> Premium Catering
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F0E8]" id="venue">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-[#C8A878] text-xs uppercase tracking-widest font-medium block mb-4">The Venue</span>
<h2 className="text-4xl md:text-5xl text-[#3A2E2A] leading-tight tracking-tight font-normal mb-6">
                    Designed for acoustics &amp; ambience.
                </h2>
<p className="text-[#3A2E2A]/70 font-light leading-relaxed">
                    Our main hall features high vaulted ceilings, adjustable ambient lighting, and a modular floor plan that can accommodate up to 300 seated guests.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
<div className="p-6 border border-[#3A2E2A]/10 bg-white">
<svg className="lucide lucide-users text-[#C8A878] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<h4 className="text-lg font-serif mb-2 text-[#3A2E2A]">300+ Capacity</h4>
<p className="text-xs text-[#3A2E2A]/60 leading-relaxed">Flexible seating arrangements for both banquet and theater styles.</p>
</div>
<div className="p-6 border border-[#3A2E2A]/10 bg-white">
<svg className="lucide lucide-music text-[#C8A878] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<h4 className="text-lg font-serif mb-2 text-[#3A2E2A]">Acoustic Design</h4>
<p className="text-xs text-[#3A2E2A]/60 leading-relaxed">Engineered soundproofing and premium audio equipment included.</p>
</div>
<div className="p-6 border border-[#3A2E2A]/10 bg-white">
<svg className="lucide lucide-utensils-crossed text-[#C8A878] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path></svg>
<h4 className="text-lg font-serif mb-2 text-[#3A2E2A]">Catering Kitchen</h4>
<p className="text-xs text-[#3A2E2A]/60 leading-relaxed">Full prep area for catering teams to ensure fresh service.</p>
</div>
<div className="p-6 border border-[#3A2E2A]/10 bg-white">
<svg className="lucide lucide-lightbulb text-[#C8A878] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<h4 className="text-lg font-serif mb-2 text-[#3A2E2A]">Smart Lighting</h4>
<p className="text-xs text-[#3A2E2A]/60 leading-relaxed">Dimmable chandeliers and spot lighting to set the perfect mood.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#3A2E2A]/5" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px] mb-24">

<div className="md:col-span-8 h-[300px] md:h-full relative overflow-hidden group">
<img alt="Main Hall Setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-[#3A2E2A]/90 to-transparent w-full">
<h4 className="text-white text-2xl font-serif italic">Grand Ballroom Setup</h4>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6 h-full">
<div className="flex-1 bg-[#F5F0E8] p-8 border border-[#3A2E2A]/5 flex flex-col justify-center items-start">
<svg className="lucide lucide-camera text-[#C8A878] mb-4" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<h4 className="text-xl text-[#3A2E2A] font-serif mb-2">Picture Perfect</h4>
<p className="text-sm text-[#3A2E2A]/60 leading-relaxed">Every corner is designed with photography in mind, ensuring your memories look stunning.</p>
</div>
<div className="flex-1 relative overflow-hidden group">
<img alt="Table Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-[#3A2E2A]/90 to-transparent w-full">
<h4 className="text-white text-xl font-serif italic">Fine Details</h4>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="about">
<div className="space-y-8">
<span className="text-[#C8A878] text-xs uppercase tracking-widest font-medium block">About Us</span>
<h2 className="text-4xl text-[#3A2E2A] leading-tight tracking-tight font-normal">
                        A legacy of celebration.
                    </h2>
<div className="space-y-6 text-[#3A2E2A]/70 font-light leading-relaxed">
<p>
                            Located in the heart of Podgorica, Kosta’s Hall has been the backdrop for the city’s most prestigious events for over two decades. We believe that a venue is more than just a space; it is the canvas upon which life’s most important moments are painted.
                        </p>
<p>
                            Our dedicated team of event coordinators works tirelessly to ensure that every napkin is folded perfectly and every light is dimmed to the exact degree, allowing you to focus on your guests.
                        </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-[#3A2E2A] text-sm font-medium border-b border-[#C8A878] pb-1 hover:text-[#C8A878] transition-colors" href="#">
                            Meet Our Team
                            <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="relative pl-8 border-l border-[#C8A878]/30">
<blockquote className="font-serif text-2xl text-[#3A2E2A] italic leading-relaxed">
                       "The attention to detail was impeccable. Kosta’s Hall didn't just host our wedding; they elevated it to something magical."
                   </blockquote>
<div className="mt-6 flex items-center gap-4">
<div className="w-10 h-10 bg-[#3A2E2A] rounded-full flex items-center justify-center text-[#C8A878] font-serif">M</div>
<div>
<p className="text-sm font-semibold text-[#3A2E2A]">Marko &amp; Elena</p>
<p className="text-xs text-[#3A2E2A]/50 uppercase tracking-widest">Married June 2024</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-[#F5F0E8] pt-20 pb-10 border-t border-[#C8A878]/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<h3 className="font-serif text-3xl mb-6 tracking-tight text-[#C8A878]">Kosta’s Hall</h3>
<p className="text-[#F5F0E8]/50 text-sm leading-relaxed mb-6">
                        Podgorica’s premier event venue. Creating unforgettable memories since 1998.
                    </p>
<div className="flex gap-4">
<a className="text-[#F5F0E8]/50 hover:text-[#C8A878] transition-colors" href="#"><svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-[#F5F0E8]/50 hover:text-[#C8A878] transition-colors" href="#"><svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#C8A878]">Sitemap</h4>
<ul className="space-y-3 text-sm text-[#F5F0E8]/60">
<li><a className="hover:text-white transition-colors" href="#events">Events</a></li>
<li><a className="hover:text-white transition-colors" href="#venue">Venue Details</a></li>
<li><a className="hover:text-white transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-white transition-colors" href="#reserve">Check Availability</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#C8A878]">Contact</h4>
<ul className="space-y-3 text-sm text-[#F5F0E8]/60">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin mt-1 text-[#C8A878]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Aerodromska, Podgorica<br/>Montenegro
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone text-[#C8A878]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            +382 20 656 588
                        </li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#C8A878]">Inquiries</h4>
<p className="text-[#F5F0E8]/50 text-xs mb-4">Send us a direct message for custom quotes.</p>
<form className="flex border-b border-[#F5F0E8]/20 pb-2">
<input className="bg-transparent w-full outline-none text-sm text-white placeholder-[#F5F0E8]/30" placeholder="Your Email" type="email"/>
<button className="text-[#C8A878] text-xs uppercase tracking-widest hover:text-white transition-colors" type="button">Send</button>
</form>
</div>
</div>
<div className="border-t border-[#F5F0E8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#F5F0E8]/30 text-xs">© 2024 Kosta’s Hall. All rights reserved.</p>
<div className="flex gap-6 text-[#F5F0E8]/30 text-xs">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Booking Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
