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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Countdown Timer Logic
        function updateCountdown() {
            const now = new Date();
            let target = new Date();
            target.setHours(17, 0, 0, 0); // 5:00 PM
            
            if (now > target) {
                target.setDate(target.getDate() + 1);
            }
            
            const diff = target - now;
            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('countdown-timer').innerText =
                `Limited time offer: ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();

        // 2. Urgency Banner Logic
        setTimeout(() => {
            const el = document.getElementById('urgency-count');
            const banner = document.getElementById('urgency-banner');
            if(el && banner) {
                banner.classList.add('bg-orange-50');
                el.style.transform = 'scale(1.2)';
                
                setTimeout(() => {
                    el.innerText = '29';
                    el.style.transform = 'scale(1)';
                    setTimeout(() => {
                        banner.classList.remove('bg-orange-50');
                    }, 300);
                }, 300);
            }
        }, 120000); // 2 minutes

        // 3. FAQ Accordion Logic
        document.querySelectorAll('.faq-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('.faq-icon');
                const isOpen = !content.classList.contains('hidden');

                document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

                if (!isOpen) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(180deg)';
                }
            });
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
      

<div className="bg-[#FAF9F6] border-b border-stone-200 py-2.5 text-center transition-all duration-500 relative z-50" id="urgency-banner">
<p className="text-xs sm:text-sm font-medium text-stone-600 flex items-center justify-center gap-2">
<iconify-icon className="text-base text-orange-500" icon="solar:danger-circle-linear"></iconify-icon>
            Only <span className="font-semibold tabular-nums transition-all duration-300 text-stone-900" id="urgency-count">29</span> of 30 appointment slots remaining this month.
        </p>
</div>

<nav className="bg-white/90 backdrop-blur-md border-b border-stone-100 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center gap-2.5">
<iconify-icon className="text-amber-500 text-3xl" icon="solar:tooth-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter text-stone-900">DENTALPEARL</span>
</div>
<div className="hidden md:flex items-center gap-6 lg:gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors whitespace-nowrap" href="tel:+13055600507">Call (305) 560-0507</a>
<a className="bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm font-semibold px-5 lg:px-6 py-2.5 rounded-full transition-all shadow-sm transform hover:-translate-y-0.5 flex items-center gap-1.5 uppercase tracking-wide whitespace-nowrap" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                        BOOK MY FREE CONSULTATION NOW <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</nav>

<section className="bg-[#FAF9F6] pt-12 pb-20 lg:pt-24 lg:pb-28 overflow-hidden relative border-b border-stone-200">

<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="flex flex-col items-start text-left">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold tracking-wide mb-6 shadow-sm uppercase">
<iconify-icon className="text-amber-600 text-base" icon="solar:star-circle-linear"></iconify-icon>
                        FREE CONSULTATION FOR NEW PATIENTS
                    </div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-900 tracking-tighter mb-6 leading-[1.1]">
                        Same Day Dental Appointments in <span className="text-orange-500">Miami</span>
</h1>

<p className="text-lg md:text-xl text-stone-500 font-light mb-8 max-w-xl leading-relaxed">
                        No Wait Times. All PPO Insurances Accepted. Bilingual Staff — English, Russian &amp; Spanish. Free Consultation for New Patients.
                    </p>

<div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-600 text-xs sm:text-sm font-medium mb-8 shadow-sm">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
<span className="" id="countdown-timer">Limited time offer: 00:47:38</span>
</div>

<div className="flex flex-col items-start gap-4 w-full sm:w-auto">
<a className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-sm sm:text-base transition-all shadow-[0_4px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.35)] transform hover:-translate-y-1 uppercase tracking-wide w-full sm:w-auto" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                            BOOK MY FREE CONSULTATION NOW
                            <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors ml-0 sm:ml-4 group" href="tel:+13055600507">
<div className="w-8 h-8 rounded-full bg-stone-200 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
<iconify-icon className="text-base text-stone-700 group-hover:text-orange-600" icon="solar:phone-calling-linear"></iconify-icon>
</div>
                            Tap to call: (305) 560-0507
                        </a>
</div>

<div className="mt-12 pt-8 border-t border-stone-200 w-full">
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-stone-600">
<span className="flex items-center gap-2"><iconify-icon className="text-amber-500 text-lg" icon="solar:shield-check-linear"></iconify-icon> All PPO Insurances Accepted</span>
<span className="flex items-center gap-2"><iconify-icon className="text-amber-500 text-lg" icon="solar:calendar-linear"></iconify-icon> Same Day Appointments</span>
<span className="flex items-center gap-2"><iconify-icon className="text-amber-500 text-lg" icon="solar:microscope-linear"></iconify-icon> In-House Lab</span>
<span className="flex items-center gap-2"><iconify-icon className="text-amber-500 text-lg" icon="solar:clock-circle-linear"></iconify-icon> No Wait Times</span>
<span className="flex items-center gap-2"><iconify-icon className="text-amber-500 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon> Bilingual Staff</span>
<span className="flex items-center gap-2"><iconify-icon className="text-amber-500 text-lg" icon="solar:siren-rounded-linear"></iconify-icon> Emergency Care Available</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6 w-full max-w-lg mx-auto lg:max-w-none">

<div className="bg-white rounded-[2rem] border border-stone-200 shadow-sm p-2 flex flex-col relative group">
<div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-stone-100">
<iframe allowfullscreen="" className="absolute inset-0 z-10 grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=14771%20Biscayne%20Blvd&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="p-4 bg-white flex flex-col sm:flex-row justify-between items-center gap-4 z-20 rounded-b-[2rem]">
<div className="flex items-center gap-2 text-sm font-semibold text-stone-900 tracking-tight">
<iconify-icon className="text-amber-500 text-xl" icon="solar:map-point-linear"></iconify-icon>
                                Dental Pearl
                            </div>
<a className="w-full sm:w-auto text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-5 py-2.5 rounded-full transition-colors flex justify-center items-center gap-1.5 uppercase tracking-wide border border-orange-200/50" href="https://maps.google.com/?q=14771+Biscayne+Blvd" rel="noopener noreferrer" target="_blank">
                                Get Directions <iconify-icon className="text-sm" icon="solar:routing-2-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-[2rem] border border-stone-200 p-8 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
<iconify-icon className="text-xl" icon="solar:clock-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Dental Clinic Hours</h3>
</div>
<ul className="space-y-3.5 text-sm text-stone-600 font-light mb-8">
<li className="flex justify-between items-center border-b border-stone-100 pb-3.5">
<span className="font-medium text-stone-900">Monday Wednesday Friday</span>
<span>9am - 5pm</span>
</li>
<li className="flex justify-between items-center border-b border-stone-100 pb-3.5">
<span className="font-medium text-stone-900">Tuesday</span>
<span>9am - 5pm</span>
</li>
<li className="flex justify-between items-center border-b border-stone-100 pb-3.5">
<span className="font-medium text-stone-900">Thursday</span>
<span>11am - 7pm</span>
</li>
<li className="flex justify-between items-center border-b border-stone-100 pb-3.5">
<span className="font-medium text-stone-900">Saturday</span>
<span>9am - 2pm</span>
</li>
<li className="flex justify-between items-center">
<span className="text-stone-400">Sunday</span>
<span className="text-stone-400 font-medium">Closed</span>
</li>
</ul>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<a className="flex flex-col p-4 rounded-2xl bg-[#FAF9F6] hover:bg-stone-50 border border-stone-200 transition-colors group" href="tel:+13055600507">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><iconify-icon className="text-amber-500" icon="solar:phone-bold"></iconify-icon> Phone</span>
<span className="text-sm font-medium text-stone-900 group-hover:text-orange-600 transition-colors truncate">(305) 560-0507</span>
</a>
<a className="flex flex-col p-4 rounded-2xl bg-[#FAF9F6] hover:bg-stone-50 border border-stone-200 transition-colors group" href="https://maps.google.com/?q=14771+Biscayne+Blvd" rel="noopener noreferrer" target="_blank">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><iconify-icon className="text-amber-500" icon="solar:map-point-bold"></iconify-icon> Address</span>
<span className="text-sm font-medium text-stone-900 group-hover:text-orange-600 transition-colors truncate">14771 Biscayne Blvd</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-3">Transparent Pricing</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-stone-900 mb-6">Premium Care, Honest Value.</h2>
<p className="text-base text-stone-500 font-light max-w-2xl mx-auto">Experience luxury dental care without the luxury price tag.</p>
</div>

<div className="mb-12 relative bg-gradient-to-br from-amber-50 to-white rounded-3xl border border-amber-200 p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1] z-0"></div>
<div className="relative z-10 flex-1 text-center md:text-left">
<div className="inline-flex bg-amber-500 text-white text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full shadow-sm mb-4 uppercase">
                        New Patient Special
                    </div>
<h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-3">Free Consultation</h3>
<p className="text-base text-stone-600 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                        Meet our doctors, discuss your smile goals, and get a full assessment at no cost. Same day available.
                    </p>
</div>
<div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-right shrink-0 w-full md:w-auto">
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-amber-600 mb-6">$0</div>
<a className="bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-semibold py-4 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 uppercase tracking-wide w-full md:w-auto transform hover:-translate-y-0.5" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                        BOOK MY FREE CONSULTATION NOW
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative bg-[#FAF9F6] rounded-3xl border border-stone-200 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-stone-900 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full border border-stone-200 shadow-sm whitespace-nowrap">
                        Most Popular
                    </div>
<div className="mb-6 mt-2">
<iconify-icon className="text-3xl text-amber-600 bg-white p-3.5 rounded-2xl mb-6 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-300" icon="solar:stethoscope-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-stone-900 tracking-tight">Full Exam + Cleaning</h3>
<div className="mt-3 text-4xl font-semibold tracking-tighter text-amber-600">$129</div>
</div>
<p className="text-sm text-stone-500 font-light mb-10 flex-grow leading-relaxed">Comprehensive exam, digital X-rays, professional cleaning, same day available.</p>
<a className="flex items-center justify-center gap-1.5 w-full text-center bg-white hover:bg-stone-50 text-stone-900 text-xs lg:text-sm font-semibold py-3.5 px-2 rounded-xl border border-stone-200 transition-colors uppercase tracking-wide group-hover:border-stone-300" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                        BOOK MY FREE CONSULTATION NOW <iconify-icon className="text-sm lg:text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative bg-stone-900 rounded-3xl border border-stone-800 p-8 lg:p-10 shadow-xl transform md:-translate-y-4 flex flex-col h-full group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                        Priority Access
                    </div>
<div className="mb-6 mt-2">
<iconify-icon className="text-3xl text-orange-400 bg-white/10 p-3.5 rounded-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300" icon="solar:siren-rounded-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight">Emergency Repair</h3>
<div className="mt-3 text-4xl font-semibold tracking-tighter text-white">Same Day</div>
</div>
<p className="text-sm text-stone-400 font-light mb-10 flex-grow leading-relaxed">Toothache, broken tooth, or lost filling. We prioritize emergencies and see you today.</p>
<a className="flex items-center justify-center gap-1.5 w-full text-center bg-orange-500 hover:bg-orange-400 text-white text-xs lg:text-sm font-semibold py-3.5 px-2 rounded-xl transition-colors shadow-sm uppercase tracking-wide" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                        BOOK MY FREE CONSULTATION NOW <iconify-icon className="text-sm lg:text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative bg-[#FAF9F6] rounded-3xl border border-stone-200 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
<div className="mb-6">
<iconify-icon className="text-3xl text-amber-600 bg-white p-3.5 rounded-2xl mb-6 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-300" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-stone-900 tracking-tight">Exam + Bleaching</h3>
<div className="mt-3 text-4xl font-semibold tracking-tighter text-amber-600">$229</div>
</div>
<p className="text-sm text-stone-500 font-light mb-10 flex-grow leading-relaxed">Professional whitening included with your full exam. Walk out with a brighter smile today.</p>
<a className="flex items-center justify-center gap-1.5 w-full text-center bg-white hover:bg-stone-50 text-stone-900 text-xs lg:text-sm font-semibold py-3.5 px-2 rounded-xl border border-stone-200 transition-colors uppercase tracking-wide group-hover:border-stone-300" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                        BOOK MY FREE CONSULTATION NOW <iconify-icon className="text-sm lg:text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF9F6] border-t border-stone-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-3">Comprehensive Services</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-stone-900">Everything Under One Roof</h2>
</div>
<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
<ul className="divide-y divide-stone-100">
<li className="p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors">
<div className="text-base font-medium text-stone-900">Full Exam + Cleaning</div>
<div className="text-lg font-semibold text-amber-600 tracking-tight">$129</div>
</li>
<li className="p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors">
<div className="text-base font-medium text-stone-900">Full Exam + Bleaching</div>
<div className="text-lg font-semibold text-amber-600 tracking-tight">$229</div>
</li>
<li className="p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors">
<div className="text-base font-medium text-stone-900 flex items-center gap-3">Emergency Dental Repair <span className="bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-full font-semibold tracking-wide uppercase">Priority</span></div>
<div className="text-sm font-medium text-stone-500">Call for pricing</div>
</li>
<li className="p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors">
<div>
<div className="text-base font-medium text-stone-900 flex items-center gap-3">
                                Non Prep No Drill Veneers
                                <span className="bg-amber-100 text-amber-700 text-xs px-2.5 py-1 rounded-full font-semibold tracking-wide flex items-center gap-1.5 uppercase"><iconify-icon className="text-sm" icon="solar:microscope-linear"></iconify-icon> In-House Lab</span>
</div>
<div className="text-sm text-stone-500 font-light mt-1.5">4 teeth $1,199 — 6 teeth $1,699</div>
</div>
<div className="text-lg font-semibold text-amber-600 tracking-tight">$299 <span className="text-sm font-light text-stone-400">per tooth</span></div>
</li>
<li className="p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors">
<div className="text-base font-medium text-stone-900">Flipper / Flexi Partial Denture</div>
<div className="text-lg font-semibold text-amber-600 tracking-tight"><span className="text-sm font-light text-stone-400 mr-2">from</span>$349</div>
</li>
</ul>
<div className="bg-[#FAF9F6] p-5 sm:p-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-sm font-medium text-stone-600">
<span className="flex items-center gap-2"><iconify-icon className="text-amber-500 text-lg" icon="solar:shield-check-linear"></iconify-icon> All PPO insurances accepted</span>
<span className="flex items-center gap-2"><iconify-icon className="text-amber-500 text-lg" icon="solar:wallet-money-linear"></iconify-icon> Financing available via CareCredit &amp; Cherry Credit</span>
</div>
<a className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 transition-colors uppercase tracking-wide" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                        BOOK MY FREE CONSULTATION NOW <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-3">The Dental Pearl Difference</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-stone-900">Elevated Standards.</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
<div className="flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center mb-6 border border-stone-200 text-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">Same Day Appointments</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">We see you today, not next month. Your health shouldn't wait.</p>
</div>
<div className="flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center mb-6 border border-stone-200 text-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">All PPO Insurances Accepted</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">We accept all PPO insurance plans to maximize your benefits.</p>
</div>
<div className="flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center mb-6 border border-stone-200 text-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">Zero Wait Times</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Your time is respected every visit. We run meticulously on schedule.</p>
</div>
<div className="flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center mb-6 border border-stone-200 text-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">Multilingual Clinic</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">We speak English, Russian, and Spanish to ensure perfect communication.</p>
</div>
<div className="flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center mb-6 border border-stone-200 text-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">Accessible Pricing</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">High-quality, premium dental care delivered transparently.</p>
</div>
<div className="flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center mb-6 border border-stone-200 text-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:microscope-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">In-House Lab</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Faster turnarounds and complete quality control for custom prosthetics.</p>
</div>
<div className="flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 border border-orange-100 text-orange-500 group-hover:bg-orange-100 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">Priority Emergency Care</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Broken tooth or severe toothache? We handle it the exact same day.</p>
</div>
<div className="flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center mb-6 border border-stone-200 text-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">Flexible Financing</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Low-stress payment options designed gracefully for every budget. In-network with CareCredit and Cherry Credit.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-stone-950 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-3">Portfolio</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Real Patient Transformations</h2>
<p className="text-base md:text-lg text-stone-400 font-light max-w-2xl mx-auto">Discover our signature results across a variety of premium treatments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

<div className="flex flex-col gap-5">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl group select-none">

<img alt="After" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e07a0da-6a93-480f-84d8-e9cb64ccda6c_800w.png"/>
<div className="absolute top-5 right-5 bg-white/90 backdrop-blur text-stone-900 text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md shadow-sm z-0">AFTER</div>

<img alt="Before" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" id="before-img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1272e19-5be7-4c12-beb6-0d6c19b4a5f4_800w.png" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<div className="absolute top-5 left-5 bg-stone-900/90 backdrop-blur text-white text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md shadow-sm z-0">BEFORE</div>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0" max="100" min="0" oninput="document.getElementById('before-img-1').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; document.getElementById('slider-line-1').style.left = `${this.value}%`;" type="range" value="50"/>

<div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] pointer-events-none z-10" id="slider-line-1" style={{left: '50%', transform: 'translateX(-50%)'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-200">
<iconify-icon className="text-stone-900 text-lg" icon="solar:arrows-right-left-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm font-light text-stone-400 text-center"><span className="font-medium text-white block mb-1">Non-Prep Veneers</span>Complete smile transformation without drilling.</p>
</div>

<div className="flex flex-col gap-5">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl group select-none">
<img alt="After" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a7ec122-5062-4cea-975f-8b64b1a45936_800w.png"/>
<div className="absolute top-5 right-5 bg-white/90 backdrop-blur text-stone-900 text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md shadow-sm z-0">AFTER</div>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" id="before-img-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0896f58f-16dd-4ef8-8bf2-e353e73c135e_800w.png" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<div className="absolute top-5 left-5 bg-stone-900/90 backdrop-blur text-white text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md shadow-sm z-0">BEFORE</div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0" max="100" min="0" oninput="document.getElementById('before-img-2').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; document.getElementById('slider-line-2').style.left = `${this.value}%`;" type="range" value="50"/>
<div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] pointer-events-none z-10" id="slider-line-2" style={{left: '50%', transform: 'translateX(-50%)'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-200">
<iconify-icon className="text-stone-900 text-lg" icon="solar:arrows-right-left-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm font-light text-stone-400 text-center"><span className="font-medium text-white block mb-1">Bleaching</span>Professional whitening for a brilliantly bright smile.</p>
</div>

<div className="flex flex-col gap-5">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl group select-none">
<img alt="After" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da3e07b0-2c71-4566-9a67-fcdcdd706ca8_800w.png"/>
<div className="absolute top-5 right-5 bg-white/90 backdrop-blur text-stone-900 text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md shadow-sm z-0">AFTER</div>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" id="before-img-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48f2c7ad-e2cc-4abb-9e3a-bb8c4868baff_800w.png" style={{clipPath: 'inset(0 50% 0 0)', filter: 'grayscale(10%)'}}/>
<div className="absolute top-5 left-5 bg-stone-900/90 backdrop-blur text-white text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md shadow-sm z-0">BEFORE</div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0" max="100" min="0" oninput="document.getElementById('before-img-3').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; document.getElementById('slider-line-3').style.left = `${this.value}%`;" type="range" value="50"/>
<div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] pointer-events-none z-10" id="slider-line-3" style={{left: '50%', transform: 'translateX(-50%)'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-200">
<iconify-icon className="text-stone-900 text-lg" icon="solar:arrows-right-left-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm font-light text-stone-400 text-center"><span className="font-medium text-white block mb-1">Retainers</span>Keep your perfect smile aligned and secure.</p>
</div>

<div className="flex flex-col gap-5">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl group select-none">
<img alt="After" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b589a316-3436-40fe-a3ee-a1294b053e1c_800w.png"/>
<div className="absolute top-5 right-5 bg-white/90 backdrop-blur text-stone-900 text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md shadow-sm z-0">AFTER</div>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" id="before-img-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4eacf36f-ab0d-479b-a529-5090ce0c7123_800w.png" style={{clipPath: 'inset(0 50% 0 0)', filter: 'grayscale(10%)'}}/>
<div className="absolute top-5 left-5 bg-stone-900/90 backdrop-blur text-white text-xs font-semibold tracking-widest px-3 py-1.5 rounded-md shadow-sm z-0">BEFORE</div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0" max="100" min="0" oninput="document.getElementById('before-img-4').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; document.getElementById('slider-line-4').style.left = `${this.value}%`;" type="range" value="50"/>
<div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] pointer-events-none z-10" id="slider-line-4" style={{left: '50%', transform: 'translateX(-50%)'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-200">
<iconify-icon className="text-stone-900 text-lg" icon="solar:arrows-right-left-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm font-light text-stone-400 text-center"><span className="font-medium text-white block mb-1">Flipper</span>Instantly replace missing teeth with natural-looking results.</p>
</div>
</div>
<div className="mt-20 text-center max-w-2xl mx-auto">
<p className="text-sm font-light text-stone-400 mb-8">Results achieved with our signature treatments, from non-prep veneers to professional bleaching. Ask about our specials starting at $299. </p>
<a className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-sm transition-all shadow-sm uppercase tracking-wide" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                    LEARN MORE ABOUT TREATMENTS <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF9F6] border-y border-stone-200 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20 max-w-2xl mx-auto">
<div className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-3">Seamless Process</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-stone-900 mb-6">Your Perfect Smile in 3 Steps</h2>
<p className="text-base text-stone-500 font-light">Total time: 2 visits. Less than one week.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-stone-300 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center text-2xl font-semibold mb-8 shadow-sm group-hover:border-amber-400 transition-colors duration-300">1</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4 tracking-tight">Consultation</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed px-4">Come in for your free smile consultation. We discuss your needs, assess your oral health, and take digital scans — no messy impressions.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0">
<div className="w-20 h-20 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center text-2xl font-semibold mb-8 shadow-sm group-hover:border-amber-400 transition-colors duration-300">2</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4 tracking-tight">Individual Treatment Plan</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed px-4">Together we design your perfect smile, tailored exactly to your unique goals and clinical needs. Ready in as little as 3 business days.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0">
<div className="w-20 h-20 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center text-2xl font-semibold mb-8 shadow-sm group-hover:border-amber-400 transition-colors duration-300">3</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4 tracking-tight">Service Received</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed px-4">Experience our premium, pain-free dental care and walk out with your revitalized smile. No drilling. No shots. Perfect results.</p>
</div>
</div>
<div className="mt-20 text-center">
<a className="group inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold py-4 px-10 rounded-full text-sm transition-all shadow-md uppercase tracking-wide" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                    BOOK MY FREE CONSULTATION NOW <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-stone-900 text-center mb-20">Patient Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#FAF9F6] rounded-3xl p-10 border border-stone-200">
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-stone-600 font-light mb-8 leading-relaxed">"Got my cleaning and exam done same day for $129. The staff was amazing and spoke Russian which made everything so comfortable for my mother. Highly recommend the boutique feel!"</p>
<div className="text-sm font-semibold tracking-wide text-stone-900 uppercase">— Elena M.</div>
</div>

<div className="bg-[#FAF9F6] rounded-3xl p-10 border border-stone-200">
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-stone-600 font-light mb-8 leading-relaxed">"Had a dental emergency on a Saturday and they saw me within hours. Saved my tooth. Best dentist in Miami, hands down. No waiting around in a clinical lobby."</p>
<div className="text-sm font-semibold tracking-wide text-stone-900 uppercase">— Carlos R.</div>
</div>

<div className="bg-[#FAF9F6] rounded-3xl p-10 border border-stone-200">
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-stone-600 font-light mb-8 leading-relaxed">"The no prep veneers process was exactly as described. Two visits, no drilling, and my smile looks incredible. The in-house lab makes a massive difference in quality."</p>
<div className="text-sm font-semibold tracking-wide text-stone-900 uppercase">— Sarah J.</div>
</div>

<div className="bg-[#FAF9F6] rounded-3xl p-10 border border-stone-200">
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-stone-600 font-light mb-8 leading-relaxed">"First time I actually felt respected at a clinic. No wait times, completely transparent pricing, and they accepted my insurance without any of the usual hassle."</p>
<div className="text-sm font-semibold tracking-wide text-stone-900 uppercase">— David T.</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 text-white border-t border-stone-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="bg-stone-900 border border-stone-800 rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
<iconify-icon className="text-4xl text-amber-500 mb-8" icon="solar:clock-square-linear"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-10">Dental Clinic Hours</h2>
<ul className="space-y-5 text-base font-light text-stone-300 mb-10">
<li className="flex justify-between items-center border-b border-stone-800 pb-4">
<span>Mon, Tue, Wed, Fri</span>
<span className="font-medium text-white">9:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between items-center border-b border-stone-800 pb-4">
<span className="text-amber-400">Thursday</span>
<span className="font-medium text-amber-400">11:00 AM - 7:00 PM</span>
</li>
<li className="flex justify-between items-center border-b border-stone-800 pb-4">
<span>Saturday</span>
<span className="font-medium text-white">9:00 AM - 2:00 PM</span>
</li>
<li className="flex justify-between items-center pb-2 text-stone-500">
<span>Sunday</span>
<span className="font-medium">Closed</span>
</li>
</ul>
<div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 flex items-start gap-4">
<iconify-icon className="text-orange-500 text-xl mt-0.5 shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<p className="text-sm text-stone-300 font-light leading-relaxed">Priority emergency appointments available. Call us immediately if you are experiencing pain.</p>
</div>
</div>

<div className="">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-8">Located at 14771 Biscayne Blvd</h2>
<div className="rounded-[2rem] overflow-hidden shadow-2xl border border-stone-800 aspect-[4/3] bg-stone-900 relative">
<div className="absolute inset-0 flex items-center justify-center text-stone-700">
<iconify-icon className="text-5xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<iframe allowfullscreen="" className="relative z-10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=14771%20Biscayne%20Blvd&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-white transition-colors" href="https://maps.google.com/?q=14771+Biscayne+Blvd" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:routing-2-linear"></iconify-icon> Get Directions to Dental Office
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF9F6] pt-24 pb-24">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-stone-900 text-center mb-16">Questions &amp; Answers</h2>
<div className="space-y-4">

<div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
<button className="faq-btn flex focus:outline-none text-left w-full pt-6 pr-8 pb-6 pl-8 items-center justify-between">
<span className="text-lg font-medium text-stone-900">Do you accept my insurance?</span>
<iconify-icon className="faq-icon text-stone-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content px-8 pb-6 pt-0 text-sm font-light text-stone-500 leading-relaxed">
                        Yes, we accept all PPO insurance plans. Call us or book online and we will verify your coverage before your visit so there are absolutely no surprises.
                    </div>
</div>

<div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-stone-900">Can I get a same day appointment?</span>
<iconify-icon className="faq-icon text-stone-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-8 pb-6 pt-0 text-sm font-light text-stone-500 leading-relaxed">
                        Yes. We offer same day appointments for new and existing patients, including priority emergency care. Book online or call us now to secure your slot.
                    </div>
</div>

<div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-stone-900">Do you speak Spanish or Russian?</span>
<iconify-icon className="faq-icon text-stone-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-8 pb-6 pt-0 text-sm font-light text-stone-500 leading-relaxed">
                        Yes. Our bilingual staff speaks English, Russian, and Spanish fluently to ensure you always feel completely comfortable discussing your care.
                    </div>
</div>

<div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-stone-900">How much does a cleaning and exam cost?</span>
<iconify-icon className="faq-icon text-stone-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-8 pb-6 pt-0 text-sm font-light text-stone-500 leading-relaxed">
                        Our full exam plus professional cleaning is $129. Full exam plus teeth bleaching is $229. We also accept all PPO insurances which may cover these costs entirely.
                    </div>
</div>

<div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-stone-900">What if I have a dental emergency?</span>
<iconify-icon className="faq-icon text-stone-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-8 pb-6 pt-0 text-sm font-light text-stone-500 leading-relaxed">
                        Call us immediately. We prioritize emergency patients and offer same day care for toothaches, broken teeth, lost fillings, and more to get you out of pain fast.
                    </div>
</div>

<div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-stone-900">What are your veneers made of?</span>
<iconify-icon className="faq-icon text-stone-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-8 pb-6 pt-0 text-sm font-light text-stone-500 leading-relaxed">
                        We offer no prep hybrid veneers crafted right here in our in-house lab. This means no drilling, no removing natural tooth structure, and perfect results in less than one week.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-950 text-center px-4 sm:px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 to-stone-950"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Your Premium Experience Awaits</h2>
<p className="text-lg md:text-xl text-stone-400 font-light mb-12">Free Consultation for New Patients. Same day appointments available. All PPO insurances accepted. Zero wait times.</p>
<div className="flex flex-col items-center gap-8">
<a className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 md:px-12 rounded-full text-sm md:text-base transition-all shadow-[0_4px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.35)] w-full sm:w-auto transform hover:-translate-y-1 uppercase tracking-wide" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                    BOOK MY FREE CONSULTATION NOW
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-white font-medium text-base flex items-center gap-2 transition-colors" href="tel:+13055600507">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Prefer to call? (305) 560-0507
                </a>
</div>
</div>
</section>

<footer className="bg-stone-950 text-stone-500 py-16 border-t border-stone-900 text-sm font-light">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
<div className="flex items-center gap-2.5 text-white">
<iconify-icon className="text-2xl text-amber-500" icon="solar:tooth-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg">DENTALPEARL</span>
</div>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
<span className="">14771 Biscayne Blvd</span>
<span className="hidden md:inline text-stone-800">|</span>
<span>All PPO Insurances Accepted</span>
<span className="hidden md:inline text-stone-800">|</span>
<span>Bilingual Staff (EN, RU, ES)</span>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
<p>Hours: Mon-Wed, Fri 9am-5pm • Thu 11am-7pm • Sat 9am-2pm</p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
<a className="hover:text-white transition-colors flex items-center gap-1 font-medium tracking-wide" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">BOOK MY FREE CONSULTATION NOW <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="tel:+13055600507">Call (305) 560-0507</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
