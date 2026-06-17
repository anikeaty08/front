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



        // --- Shared Logic ---
        const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE'; 

        // --- 1. Calendar/Booking Logic ---
        const date = new Date();
        let currentMonth = date.getMonth();
        let currentYear = date.getFullYear();
        let selectedDate = null;
        let selectedTime = null;

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"];

        function renderCalendar() {
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
            const daysContainer = document.getElementById("calendarDays");
            const monthYearText = document.getElementById("currentMonthYear");
            
            daysContainer.innerHTML = "";
            monthYearText.innerText = `${months[currentMonth]} ${currentYear}`;

            for (let i = 0; i < firstDay; i++) {
                daysContainer.appendChild(document.createElement("div"));
            }

            for (let i = 1; i <= lastDate; i++) {
                const dayBtn = document.createElement("button");
                dayBtn.innerText = i;
                dayBtn.className = "w-8 h-8 rounded-full text-xs hover:bg-slate-100 flex items-center justify-center mx-auto transition-colors text-slate-600";
                if (selectedDate && selectedDate.getDate() === i && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear) {
                    dayBtn.className = "w-8 h-8 rounded-full text-xs bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md";
                }
                dayBtn.onclick = () => selectDate(i);
                daysContainer.appendChild(dayBtn);
            }
        }

        function changeMonth(dir) {
            currentMonth += dir;
            if (currentMonth < 0) { currentMonth = 11; currentYear--; }
            if (currentMonth > 11) { currentMonth = 0; currentYear++; }
            renderCalendar();
        }

        function selectDate(day) {
            selectedDate = new Date(currentYear, currentMonth, day);
            renderCalendar();
            document.getElementById("selectedDateDisplay").innerHTML = `
                <iconify-icon icon="solar:calendar-bold" class="text-teal-600"></iconify-icon>
                <span>${selectedDate.toDateString()}</span>
            `;
            generateTimeSlots();
        }

        function generateTimeSlots() {
            const container = document.getElementById("timeSlots");
            container.innerHTML = "";
            timeSlots.forEach(time => {
                const btn = document.createElement("button");
                btn.innerText = time;
                btn.className = "py-2 px-4 rounded-lg border border-slate-200 text-sm text-slate-600 hover:border-teal-500 hover:text-teal-600 transition-all";
                if (selectedTime === time) {
                    btn.className = "py-2 px-4 rounded-lg bg-teal-50 border border-teal-500 text-teal-700 font-medium text-sm";
                }
                btn.onclick = () => selectTime(time, btn);
                container.appendChild(btn);
            });
        }

        function selectTime(time, btn) {
            selectedTime = time;
            generateTimeSlots();
            if(selectedDate) {
                document.getElementById("timeStep").classList.add("hidden");
                document.getElementById("detailsStep").classList.remove("hidden");
                document.getElementById("detailsStep").classList.add("fade-in-up");
            } else {
                alert("Please select a date from the calendar first.");
            }
        }

        function backToTime() {
            document.getElementById("detailsStep").classList.add("hidden");
            document.getElementById("timeStep").classList.remove("hidden");
        }

        function openBookingModal() {
            document.getElementById("bookingModal").classList.remove("hidden");
            renderCalendar();
            generateTimeSlots();
        }

        function closeBookingModal() {
            document.getElementById("bookingModal").classList.add("hidden");
            setTimeout(() => {
                document.getElementById("successMessage").classList.add("hidden");
                document.getElementById("bookingContent").classList.remove("hidden");
                backToTime();
            }, 300);
        }

        function submitBooking(e) {
            e.preventDefault();
            const btn = document.getElementById("submitBtn");
            const originalText = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="line-md:loading-loop" width="20"></iconify-icon> Processing...`;
            btn.disabled = true;

            const form = e.target;
            const data = new FormData(form);
            data.append("Date", selectedDate ? selectedDate.toDateString() : "");
            data.append("Time", selectedTime);
            data.append("Type", "Appointment Booking");

            // Mock Submission - In production uncomment fetch
             /*
            fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: data })
                .then(() => showBookingSuccess())
                .catch(err => console.error(err));
            */

            setTimeout(() => {
                showBookingSuccess();
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
            }, 1500);
        }

        function showBookingSuccess() {
            document.getElementById("bookingContent").classList.add("hidden");
            document.getElementById("successMessage").classList.remove("hidden");
            document.getElementById("successMessage").classList.add("fade-in-up");
        }

        // --- 2. Plan Membership Logic ---

        function openPlanModal(planName) {
            document.getElementById("planNameDisplay").innerText = "Join " + planName;
            document.getElementById("selectedPlanInput").value = planName;
            document.getElementById("planModal").classList.remove("hidden");
            document.getElementById("planFormContainer").classList.remove("hidden");
            document.getElementById("planSuccessMessage").classList.add("hidden");
        }

        function closePlanModal() {
            document.getElementById("planModal").classList.add("hidden");
            // Reset form slightly later to avoid flickering while closing
            setTimeout(() => {
                document.getElementById("planForm").reset();
            }, 300);
        }

        function submitPlan(e) {
            e.preventDefault();
            const btn = document.getElementById("planSubmitBtn");
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = `<iconify-icon icon="line-md:loading-loop" width="20"></iconify-icon> Sending...`;
            btn.disabled = true;

            const form = e.target;
            const data = new FormData(form);
            data.append("Type", "Membership Application");
            
            const planName = document.getElementById("selectedPlanInput").value;

            // Mock Submission
             /*
            fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: data })
                .then(() => showPlanSuccess(planName))
                .catch(err => console.error(err));
            */

            setTimeout(() => {
                showPlanSuccess(planName);
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
            }, 1500);
        }

        function showPlanSuccess(planName) {
            document.getElementById("planFormContainer").classList.add("hidden");
            document.getElementById("successPlanName").innerText = planName;
            document.getElementById("planSuccessMessage").classList.remove("hidden");
            document.getElementById("planSuccessMessage").classList.add("fade-in-up");
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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg group-hover:text-teal-700 transition-colors">The Wraysbury Clinic</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#treatments">Treatments</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#membership">Membership</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#fees">Fees &amp; Finance</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="tel:01784614800">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
<span>01784 614 800</span>
</a>
<button className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl flex items-center gap-2 cursor-pointer" onclick="openBookingModal()">
                    Book Consultation
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
<div className="absolute top-20 -left-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Accepting New Patients</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tighter leading-[1.1] mb-6">
                    Premium cosmetic &amp; <br/> <span className="text-teal-600">preventative care.</span>
</h1>
<p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed mb-10">
                    Personalised dentistry focused on long-term oral health, comfort, and confidence. Located in the heart of Wraysbury.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="bg-teal-600 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-teal-700 transition-all shadow-lg shadow-teal-100 w-full sm:w-auto text-center cursor-pointer" onclick="openBookingModal()">
                        Book a Consultation
                    </button>
<a className="bg-white text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 group" href="#treatments">
                        Explore Treatments
                        <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
</div>
</div>

<div className="mt-20 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in-up delay-200">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">10+ Years</p>
<p className="text-xs text-slate-500">Clinical Excellence</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Founder Led</p>
<p className="text-xs text-slate-500">Dr. Gurs Sehmi</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Gentle Care</p>
<p className="text-xs text-slate-500">Patient Centred</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Local Clinic</p>
<p className="text-xs text-slate-500">Serving Wraysbury</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="treatments">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">Comprehensive Dental Care</h2>
<p className="text-slate-500 max-w-md">From routine hygiene to complex smile makeovers, we provide modern dentistry under one roof.</p>
</div>
<a className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1 group" href="#">
                    View all treatments <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Hygiene &amp; Routine</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Regular check-ups, stain removal and therapist-led cleaning for lasting oral health.</p>
<span className="text-xs font-semibold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Smile Improvement</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Transform your confidence with porcelain veneers, whitening, and teeth straightening.</p>
<span className="text-xs font-semibold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Dental Implants</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Restore function with single implants to All-On-4 full arch reconstructions.</p>
<span className="text-xs font-semibold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Preventative Care</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">A proactive approach focused on education and early detection to save you costs.</p>
<span className="text-xs font-semibold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200/50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute inset-0 bg-teal-600 rounded-3xl rotate-3 opacity-10"></div>
<img alt="Modern Dental Clinic" className="relative rounded-3xl shadow-2xl shadow-slate-200 object-cover h-[500px] w-full" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Why Wraysbury choose us.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        We believe that visiting the dentist should be a calm, positive experience. Our practice is built on a foundation of preventative care.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-teal-600" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Preventative-First Philosophy</h4>
<p className="text-sm text-slate-500 mt-1">We focus on stopping problems before they start.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-teal-600" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Expert Team of Therapists</h4>
<p className="text-sm text-slate-500 mt-1">Dedicated hygiene and restorative care.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-teal-600" icon="solar:sofa-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Comfortable Environment</h4>
<p className="text-sm text-slate-500 mt-1">Modern, airy clinic with on-site parking.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-teal-900 relative overflow-hidden" id="membership">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-teal-300 font-medium tracking-wide uppercase text-xs mb-3 block">Membership</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">A Smile For Life.</h2>
<p className="text-teal-100/80 font-light">Join our membership plan to spread the cost of your preventative care.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-teal-800/50 backdrop-blur-sm border border-teal-700 p-8 rounded-2xl flex flex-col">
<div className="mb-6">
<h3 className="text-white font-semibold text-lg">Essential Care</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-bold text-white">£28</span>
<span className="text-teal-300 text-sm">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-teal-100"><iconify-icon className="text-teal-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>2 Check-ups per year</li>
<li className="flex items-start gap-3 text-sm text-teal-100"><iconify-icon className="text-teal-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>2 Hygiene Visits</li>
<li className="flex items-start gap-3 text-sm text-teal-100"><iconify-icon className="text-teal-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>10% Discount</li>
</ul>
<button className="w-full block text-center py-3 rounded-xl bg-teal-700 text-white text-sm font-medium hover:bg-teal-600 transition-colors shadow-lg cursor-pointer" onclick="openPlanModal('Essential Care')">Join Plan</button>
</div>

<div className="bg-white border border-teal-200 p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-2xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</div>
<div className="mb-6">
<h3 className="text-slate-900 font-semibold text-lg">Premium Care</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-bold text-slate-900">£34</span>
<span className="text-slate-500 text-sm">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600"><iconify-icon className="text-teal-600 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>2 Check-ups per year</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><iconify-icon className="text-teal-600 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>4 Hygiene Visits</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><iconify-icon className="text-teal-600 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>Accident Insurance</li>
</ul>
<button className="w-full block text-center py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg cursor-pointer" onclick="openPlanModal('Premium Care')">Join Plan</button>
</div>

<div className="bg-teal-800/50 backdrop-blur-sm border border-teal-700 p-8 rounded-2xl flex flex-col">
<div className="mb-6">
<h3 className="text-white font-semibold text-lg">Complete Care</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-bold text-white">£40</span>
<span className="text-teal-300 text-sm">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-teal-100"><iconify-icon className="text-teal-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>2 Extensive Check-ups</li>
<li className="flex items-start gap-3 text-sm text-teal-100"><iconify-icon className="text-teal-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>4 Extended Hygiene</li>
<li className="flex items-start gap-3 text-sm text-teal-100"><iconify-icon className="text-teal-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>Airflow Polishing</li>
</ul>
<button className="w-full block text-center py-3 rounded-xl bg-teal-700 text-white text-sm font-medium hover:bg-teal-600 transition-colors shadow-lg cursor-pointer" onclick="openPlanModal('Complete Care')">Join Plan</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Start your journey today.</h2>
<p className="text-slate-500 mb-10">Whether you need a routine check-up or a smile makeover consultation, booking takes less than 2 minutes.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<button className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all group cursor-pointer" onclick="openBookingModal()">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Book Online</h3>
<p className="text-xs text-slate-500">Instant access to our diary</p>
</button>
<a className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all group" href="tel:01784614800">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Call to Book</h3>
<p className="text-xs text-slate-500">Speak to our reception team</p>
</a>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight">The Wraysbury Clinic</span>
</a>
<p className="text-sm text-slate-500 mb-6">Premium dental care focusing on longevity, aesthetics and patient comfort.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-teal-600 transition-colors" href="https://instagram.com/thewraysburyclinic" rel="noopener noreferrer" target="_blank"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-teal-600 transition-colors" href="https://facebook.com/thewraysburyclinic" rel="noopener noreferrer" target="_blank"><iconify-icon icon="mdi:facebook" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Clinic</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#membership">Smile For Life Plan</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#fees">Fees &amp; Finance</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Treatments</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Invisalign®</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Composite Bonding</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Hygiene Services</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Visit Us</h4>
<address className="not-italic text-sm text-slate-500 space-y-3 mb-4">
<p>45 Station Road,<br/>Wraysbury, Staines,<br/>TW19 5ND, UK</p>
<p><a className="hover:text-teal-600 transition-colors" href="mailto:smile@thewraysburyclinic.co.uk">smile@thewraysburyclinic.co.uk</a></p>
<p><a className="hover:text-teal-600 transition-colors" href="tel:01784614800">01784 614 800</a></p>
</address>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-2 rounded-lg border border-teal-100 hover:bg-teal-100 transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=The+Wraysbury+Clinic+45+Station+Road+Wraysbury" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                        Get Directions on Maps
                    </a>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 The Wraysbury Clinic. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">GDC Info</a>
</div>
</div>
</div>
</footer>

<div aria-modal="true" className="fixed inset-0 z-50 hidden" id="bookingModal" role="dialog">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closeBookingModal()"></div>
<div className="flex items-center justify-center min-h-screen p-4">
<div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden max-h-[90vh]">

<div className="w-full md:w-1/3 bg-slate-50 border-r border-slate-100 p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-slate-900">Select Date</h3>
<div className="flex gap-1">
<button className="p-1 hover:bg-slate-200 rounded text-slate-500" onclick="changeMonth(-1)"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="p-1 hover:bg-slate-200 rounded text-slate-500" onclick="changeMonth(1)"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="text-sm font-medium text-slate-900 mb-4 text-center" id="currentMonthYear"></div>
<div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-400 mb-2">
<span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
</div>
<div className="grid grid-cols-7 gap-1 text-center" id="calendarDays"></div>
<div className="mt-auto pt-6 border-t border-slate-200">
<p className="text-xs text-slate-400 mb-2">Selected Date:</p>
<div className="text-sm font-medium text-slate-900 flex items-center gap-2" id="selectedDateDisplay">
<iconify-icon className="text-teal-600" icon="solar:calendar-linear"></iconify-icon>
<span>Please select a date</span>
</div>
</div>
</div>

<div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col overflow-y-auto no-scrollbar">
<button className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10" onclick="closeBookingModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div id="bookingContent">
<div className="mb-8" id="timeStep">
<h3 className="text-xl font-semibold text-slate-900 mb-4">Available Times</h3>
<div className="grid grid-cols-3 sm:grid-cols-4 gap-3" id="timeSlots"></div>
</div>
<div className="hidden" id="detailsStep">
<button className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 mb-4" onclick="backToTime()">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to times
                            </button>
<h3 className="text-xl font-semibold text-slate-900 mb-6">Your Details</h3>
<form className="space-y-4" id="bookingForm" onsubmit="submitBooking(event)">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="firstName" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="lastName" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="phone" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Reason for Visit</label>
<select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 transition-all text-slate-600 bg-white" name="reason">
<option>General Check-up</option>
<option>Hygienist Appointment</option>
<option>Smile Makeover Consultation</option>
<option>Invisalign Consultation</option>
<option>Dental Emergency</option>
<option>Other</option>
</select>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl mt-4 hover:bg-slate-800 transition-colors flex justify-center items-center gap-2 cursor-pointer" id="submitBtn" type="submit">
                                    Confirm Booking
                                </button>
</form>
</div>
</div>
<div className="hidden flex-col items-center justify-center h-full text-center py-10" id="successMessage">
<div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6">
<iconify-icon icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Booking Requested!</h3>
<p className="text-slate-500 text-sm max-w-sm mx-auto mb-8">We have received your request. Our team will contact you shortly to confirm your appointment.</p>
<button className="text-slate-900 font-medium hover:text-teal-600 text-sm cursor-pointer" onclick="closeBookingModal()">Close window</button>
</div>
</div>
</div>
</div>
</div>

<div aria-modal="true" className="fixed inset-0 z-50 hidden" id="planModal" role="dialog">

<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closePlanModal()"></div>

<div className="flex items-center justify-center min-h-screen p-4">
<div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative flex flex-col overflow-hidden animate-fade-in-up">

<div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-start">
<div>
<span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">Membership Application</span>
<h3 className="text-xl font-semibold text-slate-900 mt-1" id="planNameDisplay">Join Plan</h3>
<p className="text-xs text-slate-500 mt-1">Complete the details below to join this plan.</p>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-1" onclick="closePlanModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-8 overflow-y-auto max-h-[70vh] no-scrollbar">
<div id="planFormContainer">
<form className="space-y-5" id="planForm" onsubmit="submitPlan(event)">
<input id="selectedPlanInput" name="selectedPlan" type="hidden"/>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="firstName" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="lastName" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Date of Birth</label>
<input className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all text-slate-600" name="dob" required="" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
<input className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="phone" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Postcode</label>
<input className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" name="postcode" required="" type="text"/>
</div>
<div className="pt-2">
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 hover:shadow-xl flex justify-center items-center gap-2 cursor-pointer group" id="planSubmitBtn" type="submit">
<span>Proceed to Payment Setup</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-slate-400 text-center mt-3">Your data is secure. A member of our team will contact you to finalise the direct debit.</p>
</div>
</form>
</div>

<div className="hidden flex-col items-center justify-center py-8 text-center" id="planSuccessMessage">
<div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4 animate-bounce">
<iconify-icon icon="solar:clipboard-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Application Received</h3>
<p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">Thank you for joining. We have received your details for the <span className="font-semibold text-teal-600" id="successPlanName"></span> plan.</p>
<button className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors cursor-pointer" onclick="closePlanModal()">Close</button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
