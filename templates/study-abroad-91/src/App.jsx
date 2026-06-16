import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scheduler State
        let currentWeekStart = getNextMonday(new Date());
        let selectedDate = null;
        let selectedTime = null;

        // Booked slots (simulated - in production, fetch from backend)
        const bookedSlots = {};

        function getNextMonday(d) {
            const date = new Date(d);
            const day = date.getDay();
            if (day === 0) date.setDate(date.getDate() + 1); // Sunday -> Monday
            else if (day > 1) date.setDate(date.getDate() + (8 - day)); // Past Monday
            else {
                // It's Monday or we set to today if Mon
                date.setHours(0,0,0,0);
            }
            // If today is Mon-Sat and within business hours, start from today
            const today = new Date();
            today.setHours(0,0,0,0);
            if (today.getDay() >= 1 && today.getDay() <= 6) {
                return today;
            }
            return date;
        }

        function openScheduler() {
            const modal = document.getElementById('schedulerModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            currentWeekStart = new Date();
            const day = currentWeekStart.getDay();
            if (day === 0) currentWeekStart.setDate(currentWeekStart.getDate() + 1);
            currentWeekStart.setHours(0,0,0,0);
            selectedDate = null;
            selectedTime = null;
            document.getElementById('step1').classList.remove('hidden');
            document.getElementById('step2').classList.add('hidden');
            document.getElementById('step3').classList.add('hidden');
            document.getElementById('timeSection').classList.add('hidden');
            document.getElementById('continueBtn').disabled = true;
            renderDates();
        }

        function closeScheduler() {
            const modal = document.getElementById('schedulerModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }

        function changeWeek(dir) {
            currentWeekStart.setDate(currentWeekStart.getDate() + (dir * 7));
            const today = new Date();
            today.setHours(0,0,0,0);
            if (currentWeekStart < today) currentWeekStart = new Date(today);
            selectedDate = null;
            selectedTime = null;
            document.getElementById('timeSection').classList.add('hidden');
            document.getElementById('continueBtn').disabled = true;
            renderDates();
        }

        function renderDates() {
            const grid = document.getElementById('dateGrid');
            grid.innerHTML = '';
            const today = new Date();
            today.setHours(0,0,0,0);

            const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

            // Find the Monday of the current week
            let weekStart = new Date(currentWeekStart);
            let dayOfWeek = weekStart.getDay();
            if (dayOfWeek === 0) weekStart.setDate(weekStart.getDate() + 1);
            else if (dayOfWeek !== 1) weekStart.setDate(weekStart.getDate() - (dayOfWeek - 1));

            let dates = [];
            for (let i = 0; i < 6; i++) { // Mon-Sat
                let d = new Date(weekStart);
                d.setDate(weekStart.getDate() + i);
                dates.push(d);
            }

            const endDate = dates[dates.length - 1];
            document.getElementById('weekLabel').textContent = `${months[dates[0].getMonth()]} ${dates[0].getDate()} – ${months[endDate.getMonth()]} ${endDate.getDate()}, ${endDate.getFullYear()}`;

            // Limit to 4 weeks ahead
            const maxDate = new Date(today);
            maxDate.setDate(maxDate.getDate() + 28);

            dates.forEach(date => {
                const isPast = date < today;
                const isTooFar = date > maxDate;
                const isSunday = date.getDay() === 0;
                const disabled = isPast || isTooFar || isSunday;
                const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                const isToday = date.toDateString() === today.toDateString();

                const btn = document.createElement('button');
                btn.className = `slot-btn relative flex flex-col items-center gap-0.5 p-3 rounded-xl border text-center transition-all duration-200 ${
                    isSelected ? 'selected' : 
                    disabled ? 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed' :
                    'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer'
                }`;
                btn.disabled = disabled;
                btn.innerHTML = `
                    <span class="text-xs ${isSelected ? 'text-indigo-100' : 'text-slate-400'}">${days[date.getDay()]}</span>
                    <span class="text-lg font-semibold ${isSelected ? 'text-white' : ''}">${date.getDate()}</span>
                    <span class="text-xs ${isSelected ? 'text-indigo-200' : 'text-slate-400'}">${months[date.getMonth()]}</span>
                    ${isToday ? '<span class="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>' : ''}
                `;
                btn.onclick = () => selectDate(date);
                grid.appendChild(btn);
            });
        }

        function selectDate(date) {
            selectedDate = date;
            selectedTime = null;
            document.getElementById('continueBtn').disabled = true;
            renderDates();
            renderTimeSlots();
            document.getElementById('timeSection').classList.remove('hidden');
        }

        function renderTimeSlots() {
            const grid = document.getElementById('timeGrid');
            grid.innerHTML = '';
            const now = new Date();
            const isToday = selectedDate.toDateString() === now.toDateString();

            const slots = [];
            for (let h = 9; h < 19; h++) { // 9 AM to 7 PM (last slot at 6:30)
                slots.push(`${h}:00`);
                if (h < 18 || (h === 18 && true)) {
                    slots.push(`${h}:30`);
                }
            }
            // Remove slots after 6:30 PM since meeting is 20 min
            const filteredSlots = slots.filter(s => {
                const [hh, mm] = s.split(':').map(Number);
                return (hh < 18 || (hh === 18 && mm <= 40));
            });

            const dateKey = selectedDate.toISOString().split('T')[0];
            const dayBooked = bookedSlots[dateKey] || [];

            // Simulate some random booked slots
            if (!bookedSlots[dateKey]) {
                bookedSlots[dateKey] = [];
                filteredSlots.forEach(s => {
                    if (Math.random() < 0.15) bookedSlots[dateKey].push(s);
                });
            }

            filteredSlots.forEach(slot => {
                const [hh, mm] = slot.split(':').map(Number);
                const isPast = isToday && (hh < now.getHours() || (hh === now.getHours() && mm <= now.getMinutes()));
                const isBooked = bookedSlots[dateKey]?.includes(slot);
                const disabled = isPast || isBooked;
                const isSelected = selectedTime === slot;

                const displayTime = formatTime(hh, mm);

                const btn = document.createElement('button');
                btn.className = `slot-btn py-2.5 px-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                    isSelected ? 'selected' :
                    disabled ? 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed line-through' :
                    'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer'
                }`;
                btn.disabled = disabled;
                btn.textContent = displayTime;
                if (isBooked && !isPast) {
                    btn.title = 'Already booked';
                }
                btn.onclick = () => selectTime(slot);
                grid.appendChild(btn);
            });
        }

        function formatTime(h, m) {
            const ampm = h >= 12 ? 'PM' : 'AM';
            const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
            return `${hour}:${m.toString().padStart(2, '0')} ${ampm}`;
        }

        function selectTime(time) {
            selectedTime = time;
            document.getElementById('continueBtn').disabled = false;
            renderTimeSlots();
        }

        function goToStep2() {
            if (!selectedDate || !selectedTime) return;
            document.getElementById('step1').classList.add('hidden');
            document.getElementById('step2').classList.remove('hidden');

            const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            const [hh, mm] = selectedTime.split(':').map(Number);
            const timeStr = formatTime(hh, mm);
            document.getElementById('selectedSummary').textContent = 
                `${days[selectedDate.getDay()]}, ${selectedDate.getDate()} ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()} at ${timeStr}`;
        }

        function backToStep1() {
            document.getElementById('step2').classList.add('hidden');
            document.getElementById('step1').classList.remove('hidden');
        }

        function confirmBooking() {
            const name = document.getElementById('fullName').value.trim();
            const institute = document.getElementById('instituteName').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (!name) { alert('Please enter your full name.'); return; }
            if (!institute) { alert('Please enter your institute name.'); return; }
            if (!phone || phone.length < 10) { alert('Please enter a valid 10-digit phone number.'); return; }

            // Mark slot as booked
            const dateKey = selectedDate.toISOString().split('T')[0];
            if (!bookedSlots[dateKey]) bookedSlots[dateKey] = [];
            bookedSlots[dateKey].push(selectedTime);

            // Show confirmation
            const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            const [hh, mm] = selectedTime.split(':').map(Number);
            
            document.getElementById('confirmDate').textContent = `${days[selectedDate.getDay()]}, ${selectedDate.getDate()} ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
            document.getElementById('confirmTime').textContent = `${formatTime(hh, mm)} (20 minutes)`;
            document.getElementById('confirmName').textContent = name;
            document.getElementById('confirmInstitute').textContent = institute;

            document.getElementById('step2').classList.add('hidden');
            document.getElementById('step3').classList.remove('hidden');

            // Generate Google Calendar link
            const startDate = new Date(selectedDate);
            startDate.setHours(hh, mm, 0);
            const endDate = new Date(startDate);
            endDate.setMinutes(endDate.getMinutes() + 20);

            // Log booking data (in production, send to backend)
            console.log('Booking confirmed:', {
                name, institute, phone,
                email: document.getElementById('email').value,
                students: document.getElementById('studentCount').value,
                date: dateKey,
                time: selectedTime
            });
        }

        // Video player
        function playVideo(container, videoId) {
            container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" class="w-full h-full absolute inset-0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        }

        // Close modal on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeScheduler();
        });

        // Close modal on overlay click
        document.getElementById('schedulerModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeScheduler();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-sm uppercase">GlobalPath Partners</span>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-full transition-colors" href="#book">
                Partner Login
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                From Nashik Classrooms to Global Campuses
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Transform Your Coaching Institute Into a <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Global Career Launchpad</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Partner with us to offer Study Abroad Guidance + Post-Landing Support to your students — without any investment from your side.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200/50" onclick="openScheduler()">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Book a Strategy Meeting
                </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors" onclick="openScheduler()">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Schedule 20-Minute Discussion
                </button>
</div>
</div>
</header>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Your Students Dream of Studying Abroad. <br/>
<span className="text-slate-400">But Who Guides Them Properly?</span>
</h2>
<p className="text-slate-500 mb-8 text-lg font-light">
                        Every year in Nashik, parents search for trusted guidance — and mostly find agents outside the city. You already have their trust. We help you provide them the right international pathway.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg shrink-0">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-medium text-sm">12th Science &amp; Commerce</h3>
<p className="text-slate-500 text-xs mt-1">Students aiming for UK, Australia, Canada, Europe.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="bg-blue-100 text-blue-600 p-2 rounded-lg shrink-0">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-medium text-sm">Engineering &amp; Pharmacy</h3>
<p className="text-slate-500 text-xs mt-1">Looking for specialized Masters &amp; PR pathways.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-white rounded-2xl transform rotate-3"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-slate-200/50">
<div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Trusted Authority</p>
<p className="text-xs text-slate-500">Your Institute</p>
</div>
</div>
<div className="space-y-3">
<div className="h-2 bg-slate-100 rounded w-3/4"></div>
<div className="h-2 bg-slate-100 rounded w-1/2"></div>
<div className="h-2 bg-slate-100 rounded w-5/6"></div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<p className="text-sm text-slate-600 mb-4">Bridging the gap to international success.</p>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center border-2 border-white font-medium">+50</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">We Work As Your International Career Department</h2>
<p className="text-slate-500">You continue running your classes seamlessly while we handle the complex global logistics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6">Your Role</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Focus on Academics</h3>
<p className="text-sm text-slate-500 mb-6">Continue delivering excellence in your core subjects.</p>
</div>
<div className="border-t border-slate-100 pt-6">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Maintain Academic Schedule</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Student Mentorship</li>
</ul>
</div>
</div>
<div className="p-8 bg-white rounded-2xl border border-indigo-100 shadow-xl shadow-indigo-100/50 flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-6">Our Responsibility</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Global Processing</h3>
<p className="text-sm text-slate-500 mb-6">End-to-end management of the study abroad lifecycle.</p>
</div>
<div className="border-t border-indigo-50 pt-6">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Career Counseling</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> 900+ Universities</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> SOP &amp; Documentation</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Visa Guidance</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Education Loans</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Scholarship Aid</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-10">
<iconify-icon icon="solar:plane-linear" strokeWidth="0.5" width="400"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">We Don't Stop At Visa.</h2>
<p className="text-slate-400 text-lg mb-8 max-w-md font-light">Most consultants disappear after the visa is stamped. We build long-term trust by solving the real problems students face upon arrival.</p>
<div className="inline-flex items-center gap-2 text-sm text-indigo-300 bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-500/30">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                        Complete Post-Landing Support
                    </div>
</div>
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
<ul className="space-y-6">
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-100">Accommodation Arrangement</h4>
<p className="text-xs text-slate-400 mt-0.5">Finding safe housing before they fly.</p>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:file-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-100">Local Documentation</h4>
<p className="text-xs text-slate-400 mt-0.5">Bank accounts, IDs, and registration.</p>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:case-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-100">Job Assistance</h4>
<p className="text-xs text-slate-400 mt-0.5">Resume guidance for part-time work.</p>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-100">Community Support</h4>
<p className="text-xs text-slate-400 mt-0.5">Connecting with seniors and alumni.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Grow Your Brand. Increase Admissions.</h2>
<p className="text-slate-500">No infrastructure required. No staff required. No risk.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ranking-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">International Ready</h3>
<p className="text-sm text-slate-500">Position your class as a premium institute that offers global career pathways.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Strengthen Trust</h3>
<p className="text-sm text-slate-500">Parents prefer institutes that provide end-to-end career solutions, increasing retention.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Additional Revenue</h3>
<p className="text-sm text-slate-500">Generate a new revenue stream without any capital investment or operational headache.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Real Stories, Real Results
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Hear From Our Partners &amp; Students</h2>
<p className="text-slate-500">Don't take our word for it. Watch real testimonials from institute owners and students who transformed their futures.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="testimonialGrid">

<div className="group relative">
<div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 cursor-pointer" onclick="playVideo(this, 'dQw4w9WgXcQ')">
<img alt="Partner testimonial" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&amp;h=340&amp;fit=crop&amp;crop=face"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-900 ml-1" icon="solar:play-bold" width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                2:34
                            </div>
</div>
<div className="p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm shrink-0">RK</div>
<div>
<p className="text-sm font-medium text-slate-900">Rajesh Kulkarni</p>
<p className="text-xs text-slate-400">Owner, Kulkarni Science Classes</p>
</div>
</div>
<p className="text-sm text-slate-500 leading-relaxed">"Our admissions grew 40% after we started offering study abroad guidance through GlobalPath. Parents see us as a complete solution now."</p>
<div className="flex items-center gap-0.5 mt-3">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 cursor-pointer" onclick="playVideo(this, 'dQw4w9WgXcQ')">
<img alt="Student testimonial" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&amp;h=340&amp;fit=crop&amp;crop=face"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-900 ml-1" icon="solar:play-bold" width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                3:12
                            </div>
</div>
<div className="p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm shrink-0">PS</div>
<div>
<p className="text-sm font-medium text-slate-900">Priya Sharma</p>
<p className="text-xs text-slate-400">Student, now at University of Melbourne</p>
</div>
</div>
<p className="text-sm text-slate-500 leading-relaxed">"The post-landing support was incredible. They helped me find accommodation and even guided me for part-time jobs. I felt supported every step."</p>
<div className="flex items-center gap-0.5 mt-3">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 cursor-pointer" onclick="playVideo(this, 'dQw4w9WgXcQ')">
<img alt="Parent testimonial" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&amp;h=340&amp;fit=crop&amp;crop=face"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-900 ml-1" icon="solar:play-bold" width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                1:58
                            </div>
</div>
<div className="p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-sm shrink-0">AD</div>
<div>
<p className="text-sm font-medium text-slate-900">Amit Deshmukh</p>
<p className="text-xs text-slate-400">Director, Deshmukh Engineering Academy</p>
</div>
</div>
<p className="text-sm text-slate-500 leading-relaxed">"Zero investment, zero risk. Our students get world-class guidance and we earn additional revenue. It's a win-win partnership."</p>
<div className="flex items-center gap-0.5 mt-3">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span>Verified Partners</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span>100% Authentic Reviews</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:video-frame-linear" width="18"></iconify-icon>
<span>Unscripted Testimonials</span>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-8">We collaborate with</p>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium hover:border-indigo-300 transition-colors">12th Science Classes</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium hover:border-indigo-300 transition-colors">12th Commerce Classes</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium hover:border-indigo-300 transition-colors">Engineering Institutes</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium hover:border-indigo-300 transition-colors">Pharmacy Colleges</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium hover:border-indigo-300 transition-colors">Competitive Exam Academies</span>
</div>
<p className="text-xs text-slate-400 mt-6 italic">Ideally suited if you guide 50+ students yearly.</p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Simple 4-Step Integration</h2>
</div>
<div className="relative">
<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
<div className="group">
<div className="w-12 h-12 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-semibold mb-6 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors mx-auto md:mx-0">1</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 text-center md:text-left">Profile Analysis</h3>
<p className="text-sm text-slate-500 text-center md:text-left">We meet to understand your specific student demographic.</p>
</div>
<div className="group">
<div className="w-12 h-12 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-semibold mb-6 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors mx-auto md:mx-0">2</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 text-center md:text-left">Free Seminar</h3>
<p className="text-sm text-slate-500 text-center md:text-left">We conduct a Study Abroad Seminar at your institute.</p>
</div>
<div className="group">
<div className="w-12 h-12 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-semibold mb-6 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors mx-auto md:mx-0">3</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 text-center md:text-left">Counseling</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Interested students receive dedicated 1-on-1 guidance.</p>
</div>
<div className="group">
<div className="w-12 h-12 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-semibold mb-6 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors mx-auto md:mx-0">4</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 text-center md:text-left">Processing</h3>
<p className="text-sm text-slate-500 text-center md:text-left">We handle complete documentation &amp; support.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-900 text-white border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="p-4">
<p className="text-3xl font-semibold tracking-tight text-indigo-400 mb-1">900+</p>
<p className="text-xs text-slate-400 uppercase tracking-wide">Universities</p>
</div>
<div className="p-4">
<p className="text-3xl font-semibold tracking-tight text-indigo-400 mb-1">100%</p>
<p className="text-xs text-slate-400 uppercase tracking-wide">Transparency</p>
</div>
<div className="p-4">
<p className="text-3xl font-semibold tracking-tight text-indigo-400 mb-1">24/7</p>
<p className="text-xs text-slate-400 uppercase tracking-wide">Student Support</p>
</div>
<div className="p-4">
<p className="text-3xl font-semibold tracking-tight text-indigo-400 mb-1">Ethical</p>
<p className="text-xs text-slate-400 uppercase tracking-wide">Counseling</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="book">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Let's Build Nashik's Most Trusted Study Abroad Ecosystem.</h2>
<p className="text-lg text-slate-500 mb-10 font-light">This is not just consultancy. This is an expansion of your institute's future.</p>
<div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
<div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
<div className="text-left space-y-3">
<div className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-indigo-600" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm">20-minute strategy discussion</span>
</div>
<div className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-indigo-600" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm">In-person meeting in Nashik</span>
</div>
<div className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-indigo-600" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm">Mon–Sat, 9:00 AM – 7:00 PM</span>
</div>
</div>
<button className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-sm font-medium transition-all transform hover:-translate-y-1 shadow-lg" onclick="openScheduler()">
                        Schedule Meeting Now
                    </button>
</div>
<div className="pt-8 border-t border-slate-200 text-left">
<p className="text-xs text-slate-400 flex items-start gap-2">
<iconify-icon className="shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
                        Students who plan early after 12th have up to <span className="text-slate-900 font-medium">30% higher scholarship chances</span> and smoother visa approval rates.
                    </p>
</div>
</div>
<div className="mt-12 text-slate-400 text-sm">
<p>© 2024 GlobalPath Partners. All rights reserved.</p>
<div className="flex justify-center gap-4 mt-2" id="contact">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Contact Support</a>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4 modal-overlay" id="schedulerModal">
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto fade-in">

<div className="flex items-center justify-between p-6 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Schedule Your Strategy Meeting</h3>
<p className="text-xs text-slate-400">Mon–Sat · 9:00 AM – 7:00 PM · 20 minutes</p>
</div>
</div>
<button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors" onclick="closeScheduler()">
<iconify-icon icon="solar:close-circle-linear" width="22"></iconify-icon>
</button>
</div>

<div className="p-6" id="step1">

<div className="mb-6">
<label className="text-sm font-medium text-slate-900 mb-3 block">Select Date</label>
<div className="flex items-center gap-2 mb-3">
<button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors" onclick="changeWeek(-1)">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
<span className="text-sm text-slate-600 font-medium flex-1 text-center" id="weekLabel"></span>
<button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors" onclick="changeWeek(1)">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-3 sm:grid-cols-6 gap-2" id="dateGrid"></div>
</div>

<div className="hidden" id="timeSection">
<label className="text-sm font-medium text-slate-900 mb-3 block">Select Time</label>
<div className="grid grid-cols-3 sm:grid-cols-5 gap-2" id="timeGrid"></div>
</div>
<button className="mt-6 w-full bg-slate-900 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2" disabled="" id="continueBtn" onclick="goToStep2()">
                    Continue
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="p-6 hidden" id="step2">
<button className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4 transition-colors" onclick="backToStep1()">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
                    Back
                </button>
<div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6 flex items-center gap-3">
<iconify-icon className="text-indigo-600" icon="solar:calendar-mark-linear" width="20"></iconify-icon>
<span className="text-sm text-indigo-800 font-medium" id="selectedSummary"></span>
</div>
<div className="space-y-4">
<div>
<label className="text-sm font-medium text-slate-900 mb-1.5 block">Full Name <span className="text-red-400">*</span></label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all" id="fullName" placeholder="e.g. Rajesh Kulkarni" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-slate-900 mb-1.5 block">Institute Name <span className="text-red-400">*</span></label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all" id="instituteName" placeholder="e.g. ABC Science Classes" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-slate-900 mb-1.5 block">Phone Number <span className="text-red-400">*</span></label>
<div className="flex">
<span className="border border-r-0 border-slate-200 rounded-l-xl px-3 py-3 bg-slate-50 text-sm text-slate-500">+91</span>
<input className="w-full border border-slate-200 rounded-r-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all" id="phone" maxlength="10" placeholder="9876543210" type="tel"/>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-900 mb-1.5 block">Email Address</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all" id="email" placeholder="rajesh@institute.com" type="email"/>
</div>
<div>
<label className="text-sm font-medium text-slate-900 mb-1.5 block">Approx. Students per Year</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all" id="studentCount" placeholder="e.g. 100" type="number"/>
</div>
</div>
<button className="mt-6 w-full bg-indigo-600 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" id="confirmBtn" onclick="confirmBooking()">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
                    Confirm Meeting
                </button>
</div>

<div className="p-8 hidden text-center" id="step3">
<div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-bold" width="44"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Meeting Scheduled!</h3>
<p className="text-sm text-slate-500 mb-6">We've confirmed your strategy meeting. You'll receive a confirmation shortly.</p>
<div className="bg-slate-50 rounded-xl p-5 text-left mb-6 space-y-3">
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-indigo-600" icon="solar:calendar-linear" width="18"></iconify-icon>
<span className="text-slate-700" id="confirmDate"></span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-indigo-600" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span className="text-slate-700" id="confirmTime"></span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-indigo-600" icon="solar:user-linear" width="18"></iconify-icon>
<span className="text-slate-700" id="confirmName"></span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-indigo-600" icon="solar:buildings-2-linear" width="18"></iconify-icon>
<span className="text-slate-700" id="confirmInstitute"></span>
</div>
</div>
<div className="flex items-center gap-2 justify-center text-xs text-slate-400 mb-6">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                    We'll call you to confirm within 2 hours
                </div>
<button className="w-full bg-slate-900 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors" onclick="closeScheduler()">
                    Done
                </button>
</div>
</div>
</div>


    </>
  );
}
