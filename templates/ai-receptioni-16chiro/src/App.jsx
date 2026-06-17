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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.getElementById('demo-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            
            // Loading state
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Processing Data...';
            btn.classList.add('opacity-90', 'cursor-not-allowed');
            
            // Simulate API call and processing
            setTimeout(() => {
                // Generate fake number based on standard format
                const areaCode = Math.floor(200 + Math.random() * 800);
                const prefix = Math.floor(200 + Math.random() * 800);
                const line = Math.floor(1000 + Math.random() * 9000);
                document.getElementById('dynamic-number').innerText = `(${areaCode}) ${prefix}-${line}`;
                
                // Hide form, show success
                document.getElementById('form-container').classList.add('hidden');
                document.getElementById('success-container').classList.remove('hidden');
                
                // Update URL to active number
                document.querySelector('#success-container a[href^="tel:"]').href = `tel:${areaCode}${prefix}${line}`;
            }, 1800);
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
      

<nav className="absolute top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
                AURA
            </div>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors hidden sm:block" href="#demo">
                Get Demo
            </a>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6 border border-blue-100/50 w-fit">
<iconify-icon className="text-sm" icon="solar:stars-linear"></iconify-icon>
                        Built exclusively for Chiropractic Clinics
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-semibold text-slate-900 leading-[1.1] mb-6">
                        Answers Every Call. <br className="hidden sm:block"/>
                        Books Appointments. <span className="text-blue-600">Eliminates Chaos.</span>
</h1>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mb-8">
                        In 60 seconds, we'll set up a personalized demo using your real chiropractic services. Call the number. Hear how your AI receptionist sounds answering calls about YOUR treatments. No generic demo. Just YOUR AI, ready to work.
                    </p>
<div className="flex items-center gap-6 text-sm font-medium text-slate-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Setup in 60s
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            No credit card
                        </div>
</div>
</div>

<div className="lg:col-span-5 relative" id="demo">

<div className="absolute -inset-1 bg-gradient-to-b from-blue-100 to-transparent rounded-3xl blur-xl opacity-50"></div>
<div className="relative bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">

<div className="p-8" id="form-container">
<div className="mb-6">
<h2 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">Get Your Personalized Demo</h2>
<p className="text-sm text-slate-500">Enter your practice info. We'll train the AI on your treatments and send you a phone number to call instantly.</p>
</div>
<form className="space-y-4" id="demo-form">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Practice Name</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="Wellness Chiropractic" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Your Name</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="Dr. Smith" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email Address</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="doctor@practice.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Your Website</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="https://yourpractice.com" required="" type="url"/>
<p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                                        We'll pull your services automatically
                                    </p>
</div>
<button className="w-full mt-2 bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm" id="submit-btn" type="submit">
                                    GET MY PERSONALIZED DEMO
                                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Secure</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Takes 1 min</span>
</div>
</div>

<div className="hidden p-8 bg-blue-50/50 border-l-4 border-blue-600 h-full flex flex-col justify-center" id="success-container">
<div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:confetti-linear"></iconify-icon>
</div>
<h2 className="text-2xl tracking-tight font-semibold text-slate-900 mb-3">Your Demo is Ready!</h2>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                                We've pulled your services and trained your AI receptionist. Call the number below right now to hear it answer with your practice name.
                            </p>
<div className="bg-white border border-blue-100 rounded-lg p-4 mb-6 text-center shadow-sm">
<p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Your Demo Number</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight" id="dynamic-number">(555) ...</p>
</div>
<div className="space-y-3 mb-8">
<p className="text-xs font-medium text-slate-900 uppercase tracking-wider">What to expect:</p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                        It answers: "Hi, thanks for calling [Your Practice]"
                                    </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                        Ask about a specific treatment or pricing
                                    </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                        Ask to book an appointment
                                    </li>
</ul>
</div>
<a className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm text-center" href="tel:5550000000">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                                CALL MY DEMO NOW
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Real Chiropractors. Real Results.</h2>
<p className="text-base text-slate-500">Join clinics nationwide who have eliminated missed calls and scheduling chaos.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
<div className="flex gap-1 text-amber-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">"We were losing 5-8 new patient calls every week because nobody was at the desk. Now the AI books them automatically. First month, we booked 12 new consultations. That's $2,400+ in new revenue."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">MT</div>
<div>
<p className="text-sm font-semibold text-slate-900">Dr. Michael T.</p>
<p className="text-xs text-slate-500">Wellness Chiropractic</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
<div className="flex gap-1 text-amber-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">"Double-bookings were killing us. Two patients showing up for the same slot. The AI receptionist syncs perfectly with our calendar. Zero double-bookings in 3 months. Staff is happier."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">SL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Dr. Sarah L.</p>
<p className="text-xs text-slate-500">Peak Performance Chiro</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
<div className="flex gap-1 text-amber-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">"My front desk was spending 60% of their time on the phone. Now they focus on patient care. The AI handles all the calls and bookings. We've increased our patient capacity by 30%."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">JR</div>
<div>
<p className="text-sm font-semibold text-slate-900">Dr. James R.</p>
<p className="text-xs text-slate-500">Family Chiropractic</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-blue-50/50 rounded-xl p-6 text-center border border-blue-100/50">
<p className="text-3xl font-semibold text-blue-600 tracking-tight mb-1">12+</p>
<p className="text-xs font-medium text-slate-600 uppercase tracking-wide">New Consults / Mo</p>
</div>
<div className="bg-blue-50/50 rounded-xl p-6 text-center border border-blue-100/50">
<p className="text-3xl font-semibold text-blue-600 tracking-tight mb-1">Zero</p>
<p className="text-xs font-medium text-slate-600 uppercase tracking-wide">Double-Bookings</p>
</div>
<div className="bg-blue-50/50 rounded-xl p-6 text-center border border-blue-100/50">
<p className="text-3xl font-semibold text-blue-600 tracking-tight mb-1">30%</p>
<p className="text-xs font-medium text-slate-600 uppercase tracking-wide">More Capacity</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-6">The Silent Revenue Killer: Scheduling Chaos &amp; Missed Calls</h2>
<div className="prose prose-slate prose-sm sm:prose-base text-slate-600">
<p className="mb-4">Here's what happens every day at chiropractic clinics:</p>
<ul className="space-y-2 mb-6 list-none pl-0">
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 mt-1 text-lg" icon="solar:close-circle-linear"></iconify-icon> A new patient calls during peak hours</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 mt-1 text-lg" icon="solar:close-circle-linear"></iconify-icon> Front desk is busy with existing patients</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 mt-1 text-lg" icon="solar:close-circle-linear"></iconify-icon> Call goes to voicemail</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 mt-1 text-lg" icon="solar:close-circle-linear"></iconify-icon> Patient calls a competitor instead</li>
</ul>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
<p className="font-medium text-slate-900 mb-3">The math is brutal:</p>
<div className="space-y-2 text-sm">
<div className="flex justify-between border-b border-slate-200 pb-2"><span>Avg. new patient value:</span> <span className="font-medium text-slate-900">$200-$500</span></div>
<div className="flex justify-between border-b border-slate-200 pb-2"><span>Missed calls per week:</span> <span className="font-medium text-slate-900">5-10</span></div>
<div className="flex justify-between pt-1"><span>Lost revenue per month:</span> <span className="font-medium text-red-500">$1,000-$20,000</span></div>
</div>
</div>
<p>And it's not just the money. It's the double-bookings. Two patients showing up for the same 2 PM slot. One waited three weeks. The other drove 40 minutes. Treatment rooms sit empty while staff is overwhelmed sorting it out.</p>
</div>
</div>

<div className="relative lg:pl-12">
<div className="absolute left-[27px] lg:left-[75px] top-6 bottom-6 w-px bg-slate-200"></div>
<div className="space-y-8 relative">
<div className="flex gap-6 relative">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 z-10 text-slate-500">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="pt-3">
<h3 className="text-base font-semibold text-slate-900 mb-1">Call comes in</h3>
<p className="text-sm text-slate-500">Patient is in pain and needs an appointment.</p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center shrink-0 z-10 text-slate-400">
<iconify-icon className="text-2xl" icon="solar:user-cross-linear"></iconify-icon>
</div>
<div className="pt-3">
<h3 className="text-base font-semibold text-slate-900 mb-1">Nobody answers</h3>
<p className="text-sm text-slate-500">Staff is busy treating patients or on another line.</p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 z-10 text-amber-500">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<div className="pt-3">
<h3 className="text-base font-semibold text-slate-900 mb-1">Calls competitor</h3>
<p className="text-sm text-slate-500">They move down the Google search results.</p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-14 h-14 rounded-full bg-red-50 border border-red-100 shadow-sm flex items-center justify-center shrink-0 z-10 text-red-500">
<iconify-icon className="text-2xl" icon="solar:graph-down-linear"></iconify-icon>
</div>
<div className="pt-3">
<h3 className="text-base font-semibold text-red-600 mb-1">Lost Revenue</h3>
<p className="text-sm text-slate-500">Another $300+ consultation lost forever.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Your AI Receptionist. Personalized. Professional. Always Available.</h2>
<p className="text-base text-slate-500 leading-relaxed">This isn't a generic AI. This is YOUR AI receptionist. It knows YOUR services. It knows YOUR pricing. It sounds like YOUR practice. When a patient calls, it answers with your name and books directly into your calendar.</p>
</div>

<div className="max-w-4xl mx-auto mb-20 relative aspect-[16/9] bg-slate-900 rounded-2xl overflow-hidden shadow-xl group cursor-pointer border border-slate-200">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-slate-900/40 mix-blend-multiply"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-full h-full flex flex-wrap gap-1 p-4">
<div className="w-1/3 h-1/4 bg-slate-700 rounded animate-pulse"></div>
<div className="w-1/4 h-1/4 bg-slate-700 rounded animate-pulse delay-75"></div>
<div className="w-1/2 h-1/4 bg-slate-700 rounded animate-pulse delay-150"></div>
<div className="w-full h-1/2 bg-slate-700 rounded animate-pulse delay-300"></div>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center transition-transform group-hover:scale-105 duration-500">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4 shadow-lg group-hover:bg-white/20 transition-colors">
<iconify-icon className="text-white text-4xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
<p className="text-white font-medium text-sm tracking-wide">See your AI receptionist in action (90s)</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-slate-200 z-0"></div>
<div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
<iconify-icon className="text-3xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">1. Enter Info</h3>
<p className="text-sm text-slate-500 leading-relaxed">Give us your practice name, email, and website. We pull your services automatically.</p>
</div>
<div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
<iconify-icon className="text-3xl" icon="solar:phone-calling-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">2. Get Demo Number</h3>
<p className="text-sm text-slate-500 leading-relaxed">In 60 seconds, we send you a personalized phone number trained on YOUR specific services.</p>
</div>
<div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
<iconify-icon className="text-3xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">3. Experience It</h3>
<p className="text-sm text-slate-500 leading-relaxed">Call it. Hear it answer with your name, explain treatments, and handle bookings perfectly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-12 text-center">Why Chiropractors Love the Personalized Demo</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow bg-slate-50/50">
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:target-linear"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mb-2">It's NOT Generic</h3>
<p className="text-sm text-slate-500 leading-relaxed">Most demos are fake scenarios. Ours uses YOUR website data. You experience exactly what your patients will.</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow bg-slate-50/50">
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mb-2">It's Instant</h3>
<p className="text-sm text-slate-500 leading-relaxed">60 seconds setup. No scheduling a sales call. No waiting days for a configuration. Test it immediately.</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow bg-slate-50/50">
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:verified-check-linear"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mb-2">It's Proof</h3>
<p className="text-sm text-slate-500 leading-relaxed">Hearing is believing. No pitch, no promises. Just the tangible result of an AI handling your practice's calls.</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow bg-slate-50/50">
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mb-2">It's Risk-Free</h3>
<p className="text-sm text-slate-500 leading-relaxed">Try the demo for free. If you upgrade and don't like the full service, we have a 30-day money-back guarantee.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[100px]"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl tracking-tight font-semibold text-white mb-16 text-center">Everything Your AI Receptionist Does</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-3xl text-teal-400 mb-5" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">24/7 Availability</h3>
<p className="text-sm text-slate-400 leading-relaxed">Never miss a call. Works nights, weekends, holidays. Capture the 40% higher conversion rate of after-hours calls.</p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-3xl text-teal-400 mb-5" icon="solar:user-speak-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">Sounds Like a Person</h3>
<p className="text-sm text-slate-400 leading-relaxed">Not a robotic phone tree. A natural-sounding conversation that builds trust. Patients feel heard and cared for.</p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-3xl text-teal-400 mb-5" icon="solar:medical-kit-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">Knows YOUR Services</h3>
<p className="text-sm text-slate-400 leading-relaxed">Answers questions about adjustments, decompression, massage, or specific pricing accurately based on your data.</p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-3xl text-teal-400 mb-5" icon="solar:calendar-mark-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">Books Directly</h3>
<p className="text-sm text-slate-400 leading-relaxed">Syncs with Google Calendar, Outlook, or EHR systems. Appointments appear instantly. Zero double-bookings.</p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-3xl text-teal-400 mb-5" icon="solar:database-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">CRM Integration</h3>
<p className="text-sm text-slate-400 leading-relaxed">Every call logged. Transcripts generated. Summaries attached to patient files automatically.</p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-3xl text-teal-400 mb-5" icon="solar:filter-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">Qualifies New Patients</h3>
<p className="text-sm text-slate-400 leading-relaxed">Asks about symptoms, insurance types, and availability before booking. You only deal with qualified leads.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-10 text-center">Questions? We've Got Answers.</h2>
<div className="space-y-4">
<details className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
                        How does the personalized demo work?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100 mt-2">
                        You enter your practice name, email, phone, and website. We pull your services from your website. In 60 seconds, we train the AI on your treatments and send you a phone number. Call it and hear your AI receptionist answer with YOUR name and YOUR services.
                    </div>
</details>
<details className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
                        Will patients know it's AI?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100 mt-2">
                        No. Our AI sounds remarkably natural. It uses inflections, pauses appropriately, and handles interruptions smoothly. Most patients compliment the "new receptionist" on being so helpful.
                    </div>
</details>
<details className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
                        What if the AI can't answer a question?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100 mt-2">
                        It transfers the call to your actual front desk or a designated emergency number, providing a quick summary of the context to whoever picks up.
                    </div>
</details>
<details className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
                        How does it prevent double-bookings?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100 mt-2">
                        The AI reads your calendar in real-time. If a slot is taken by a manual entry or another online booking, the AI sees it immediately and will only offer available times to the caller.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Simple Pricing. Real ROI.</h2>
<p className="text-base text-slate-500">Stop losing thousands in missed consultations.</p>
</div>
<div className="max-w-lg mx-auto bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative">
<div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>
<div className="p-8 sm:p-10">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">$199</span>
<span className="text-slate-500 font-medium pb-1">/month</span>
</div>
<p className="text-sm text-slate-500 mb-8">+ $499 one-time setup &amp; optimization fee</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            24/7 AI Receptionist &amp; Unlimited Calls
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Direct Calendar Appointment Booking
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            EHR / CRM Integration &amp; Call Transcripts
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Elimination of Double-Bookings
                        </div>
</div>
<div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8">
<p className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">The ROI Math</p>
<p className="text-sm text-teal-900 mb-2">One new consult = <strong>$200-$500 revenue</strong></p>
<p className="text-sm text-teal-900 mb-2">Your cost = <strong>$199/month</strong></p>
<div className="mt-3 pt-3 border-t border-teal-200/50 flex justify-between items-center font-semibold text-teal-800">
<span>Payback:</span>
<span>ONE CONSULTATION</span>
</div>
</div>
<a className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3.5 px-4 rounded-xl transition-all shadow-sm" href="#demo">
                        START YOUR FREE DEMO
                    </a>
<p className="text-center text-xs text-slate-400 mt-4">30-day money-back guarantee. Cancel anytime.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-600 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl sm:text-4xl tracking-tighter font-semibold text-white mb-6">Ready to Stop Losing Revenue to Scheduling Chaos?</h2>
<p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">Get your personalized demo in 60 seconds. Hear your AI receptionist answer with YOUR name and YOUR services. No credit card required.</p>
<a className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-slate-900 font-semibold text-base py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto" href="#demo">
                GET MY PERSONALIZED DEMO
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-blue-200 font-medium">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 60 Second Setup</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> 30-Day Guarantee</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> No Contracts</span>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
                        AURA
                    </div>
<p className="text-sm text-slate-400 leading-relaxed">
                        The intelligent voice receptionist built exclusively for chiropractic practices to eliminate missed calls and double-bookings.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-wide">Product</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#demo">Free Demo</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-wide">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-wide">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                            hello@aura.build
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                            (800) 555-0199
                        </li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<p>© 2025 Aura Build. All rights reserved.</p>
<p>Designed for modern chiropractors.</p>
</div>
</div>
</footer>



    </>
  );
}
