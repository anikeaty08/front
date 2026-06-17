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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D9E1E8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<a className="text-xl font-semibold tracking-tight text-[#12324A] flex items-center gap-2" href="#">
<iconify-icon className="text-[#2F8F9D] text-2xl" icon="solar:health-linear"></iconify-icon>
                    SpineVoice
                </a>
<span className="hidden md:block text-xs text-[#324C66] font-medium border-l border-[#D9E1E8] pl-4">
                    AI Receptionist for Chiropractic Clinics
                </span>
</div>
<div>
<a className="inline-flex justify-center items-center bg-[#12324A] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#12324A]/90 transition-colors shadow-sm" href="#demo">
                    Get My Personalized Demo
                </a>
</div>
</div>
</header>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

<div className="lg:col-span-7 pr-0 lg:pr-8">
<span className="inline-block text-[#324C66] font-medium text-xs tracking-wide uppercase mb-4">
                    Built for Chiropractic Clinics That Never Want to Miss Another New Patient Call
                </span>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#12324A] leading-[1.15] mb-6">
                    Answers Every Call. Books More New Patients. Keeps Your Clinic Running Smoothly.
                </h1>
<p className="text-lg text-[#4A5D6E] leading-relaxed mb-8 max-w-2xl">
                    SpineVoice helps chiropractic clinics answer calls, book appointments, and support patients with a calm, professional voice—so your team stays focused and your front desk never misses an opportunity.
                </p>
<ul className="space-y-3 mb-10">
<li className="flex items-center gap-3 text-base text-[#12324A] font-medium">
<iconify-icon className="text-[#2F8F9D] text-xl flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Answers calls 24/7
                    </li>
<li className="flex items-center gap-3 text-base text-[#12324A] font-medium">
<iconify-icon className="text-[#2F8F9D] text-xl flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Books appointments automatically
                    </li>
<li className="flex items-center gap-3 text-base text-[#12324A] font-medium">
<iconify-icon className="text-[#2F8F9D] text-xl flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Supports busy hours and after-hours
                    </li>
</ul>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex justify-center items-center bg-[#12324A] text-white text-base font-medium px-8 py-3.5 rounded-lg hover:bg-[#12324A]/90 transition-colors shadow-sm w-full sm:w-auto" href="#demo">
                        Get My Personalized Demo
                    </a>
<span className="text-sm text-[#324C66] flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:stopwatch-linear"></iconify-icon>
                        Hear how your clinic could sound in under 60 seconds.
                    </span>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:max-w-none">

<div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm border border-[#D9E1E8]">
<img alt="Chiropractor with patient" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-white border border-[#D9E1E8] rounded-2xl shadow-sm p-6 sm:p-8" id="demo">
<h3 className="text-xl font-semibold tracking-tight text-[#12324A] mb-2">Get Your Personalized Demo</h3>
<p className="text-sm text-[#4A5D6E] mb-6">Enter your details and hear how SpineVoice could represent your chiropractic clinic.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="sr-only">Clinic Name</label>
<input className="w-full appearance-none bg-transparent border border-[#D9E1E8] text-[#12324A] text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#2F8F9D] focus:border-[#2F8F9D] placeholder-[#4A5D6E]/80 transition-colors" placeholder="Clinic Name" type="text"/>
</div>
<div>
<label className="sr-only">Your Name</label>
<input className="w-full appearance-none bg-transparent border border-[#D9E1E8] text-[#12324A] text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#2F8F9D] focus:border-[#2F8F9D] placeholder-[#4A5D6E]/80 transition-colors" placeholder="Your Name" type="text"/>
</div>
</div>
<div>
<label className="sr-only">Phone Number</label>
<input className="w-full appearance-none bg-transparent border border-[#D9E1E8] text-[#12324A] text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#2F8F9D] focus:border-[#2F8F9D] placeholder-[#4A5D6E]/80 transition-colors" placeholder="Phone Number" type="tel"/>
</div>
<div>
<label className="sr-only">Email Address</label>
<input className="w-full appearance-none bg-transparent border border-[#D9E1E8] text-[#12324A] text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#2F8F9D] focus:border-[#2F8F9D] placeholder-[#4A5D6E]/80 transition-colors" placeholder="Email Address" type="email"/>
</div>
<div>
<label className="sr-only">Website URL</label>
<input className="w-full appearance-none bg-transparent border border-[#D9E1E8] text-[#12324A] text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#2F8F9D] focus:border-[#2F8F9D] placeholder-[#4A5D6E]/80 transition-colors" placeholder="Website URL" type="url"/>
</div>
<button className="w-full bg-[#12324A] text-white text-sm font-medium px-4 py-3 rounded-lg hover:bg-[#12324A]/90 transition-colors shadow-sm mt-2" type="submit">
                            Generate My Demo
                        </button>
<p className="text-xs text-[#4A5D6E] text-center mt-4">
                            No tech skills needed. Just enter your details and hear a personalized demo for your clinic.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-[#D9E1E8] bg-[#FAFCFD]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#324C66] font-medium text-sm tracking-wide mb-3 block">Proof That Responsiveness Matters</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#12324A] mb-4">The Numbers Behind Missed Appointments</h2>
<p className="text-base text-[#4A5D6E]">Phone demand is still real. After-hours demand is real. And missed appointments are more expensive than they look.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

<div className="bg-white border border-[#D9E1E8] rounded-xl p-8 shadow-sm flex flex-col items-center text-center">
<span className="text-5xl font-semibold tracking-tight text-[#12324A] mb-4">40%</span>
<h4 className="text-base font-medium text-[#12324A] mb-2">Appointments are booked after-hours</h4>
<p className="text-sm text-[#4A5D6E]">New appointment demand does not stop when your clinic closes.</p>
</div>

<div className="bg-white border border-[#D9E1E8] rounded-xl p-8 shadow-sm flex flex-col items-center text-center">
<span className="text-5xl font-semibold tracking-tight text-[#12324A] mb-4">85%</span>
<h4 className="text-base font-medium text-[#12324A] mb-2">Consumers still book appointments by phone</h4>
<p className="text-sm text-[#4A5D6E]">Your call experience is still a major patient acquisition channel.</p>
</div>

<div className="bg-white border border-[#D9E1E8] rounded-xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
<iconify-icon className="text-4xl text-[#2F8F9D] mb-5" icon="solar:graph-down-linear"></iconify-icon>
<h4 className="text-base font-medium text-[#12324A] mb-2">Missed appointments cost clinics</h4>
<p className="text-sm text-[#4A5D6E]">Fast, professional response helps protect scheduling momentum and clinic revenue.</p>
</div>
</div>
<p className="text-sm text-center text-[#324C66] font-medium">
                Fast, professional response matters — especially after hours, when new patient opportunities can still be won or lost.
            </p>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="lg:sticky lg:top-32">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#12324A] leading-tight mb-6">
                    The Silent Revenue Killer: Missed Calls, Delayed Follow-Up, and After-Hours Drop-Off
                </h2>
<p className="text-lg text-[#4A5D6E] leading-relaxed mb-10">
                    When calls go unanswered, interest cools off. When follow-up feels delayed, appointments get lost. And when your clinic is closed, new patient inquiries still happen — but too often, nobody is there to catch them.
                </p>
<div className="bg-[#FAFCFD] border border-[#D9E1E8] rounded-xl p-6 flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-2xl text-[#2F8F9D]" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-base text-[#12324A] font-medium leading-snug">
                            A professional patient experience starts before the first visit. SpineVoice helps your clinic sound responsive from the very first call — even after hours.
                        </p>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm border border-[#D9E1E8]">
<img alt="Busy clinic scheduling environment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-cols-1 gap-4">

<div className="bg-white border border-[#D9E1E8] rounded-xl p-5 flex items-start gap-4 shadow-sm border-l-4 border-l-[#2F8F9D]">
<div className="bg-[#D9E1E8]/40 p-2 rounded-lg text-[#12324A]">
<iconify-icon className="text-xl" icon="solar:phone-calling-rounded-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#12324A] mb-1">Calls go unanswered</h4>
<p className="text-sm text-[#4A5D6E]">Prospective patients reach out when interest is highest.</p>
</div>
</div>

<div className="bg-white border border-[#D9E1E8] rounded-xl p-5 flex items-start gap-4 shadow-sm border-l-4 border-l-[#2F8F9D]">
<div className="bg-[#D9E1E8]/40 p-2 rounded-lg text-[#12324A]">
<iconify-icon className="text-xl" icon="solar:hourglass-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#12324A] mb-1">Follow-up slows down</h4>
<p className="text-sm text-[#4A5D6E]">Delayed response lowers trust and cools intent.</p>
</div>
</div>

<div className="bg-white border border-[#D9E1E8] rounded-xl p-5 flex items-start gap-4 shadow-sm border-l-4 border-l-[#2F8F9D]">
<div className="bg-[#D9E1E8]/40 p-2 rounded-lg text-[#12324A]">
<iconify-icon className="text-xl" icon="solar:moon-stars-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#12324A] mb-1">After-hours inquiries get lost</h4>
<p className="text-sm text-[#4A5D6E]">When no one answers after hours, tomorrow’s appointment may never get booked.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFCFD] border-y border-[#D9E1E8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="text-[#324C66] font-medium text-sm tracking-wide mb-3 block">Sample Experience</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#12324A] mb-4">Hear SpineVoice in Action</h2>
<p className="text-base text-[#4A5D6E]">Listen to a sample of how SpineVoice can greet callers, answer professionally, and help secure appointments for a chiropractic clinic like yours. Then generate your own personalized demo in seconds.</p>
</div>

<div className="max-w-4xl mx-auto bg-white border border-[#D9E1E8] p-2 rounded-2xl shadow-md">
<div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden bg-[#12324A] group cursor-pointer">
<img alt="Chiropractic adjustment consultation" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-20 h-20 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all mb-4">
<iconify-icon className="text-5xl text-white" icon="solar:play-circle-linear"></iconify-icon>
</button>
<span className="text-white font-medium text-sm tracking-wide drop-shadow-md">Listen to SpineVoice handle a new patient inquiry</span>
</div>
</div>
</div>
<div className="mt-12 text-center flex flex-col items-center gap-4">
<a className="inline-flex justify-center items-center bg-[#12324A] text-white text-base font-medium px-8 py-3.5 rounded-lg hover:bg-[#12324A]/90 transition-colors shadow-sm" href="#demo">
                    Get My Personalized Demo
                </a>
<span className="text-sm text-[#324C66]">
                    Hear the sample first. Then experience how your own clinic could sound.
                </span>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#324C66] font-medium text-sm tracking-wide mb-3 block">Why Chiropractic Clinics Pay Attention to This</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#12324A]">Protect Revenue. Improve First Impressions.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-[#D9E1E8] bg-white group hover:shadow-md transition-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Receptionist answering calls" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2F8F9D]"></div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-[#12324A] mb-3 leading-snug">Never Let Missed Calls Turn Into Missed New Patients</h3>
<p className="text-sm text-[#4A5D6E] leading-relaxed">
                            When interest is high, fast response matters. SpineVoice helps your clinic answer promptly so more inquiries turn into booked appointments.
                        </p>
</div>
</div>

<div className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-[#D9E1E8] bg-white group hover:shadow-md transition-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Chiropractor smiling with patient" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1604882355165-4450cb6155b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2F8F9D]"></div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-[#12324A] mb-3 leading-snug">Give Every Caller a Professional First Impression</h3>
<p className="text-sm text-[#4A5D6E] leading-relaxed">
                            Your patient experience starts before the first visit. SpineVoice helps your clinic sound calm, helpful, and organized from the first hello.
                        </p>
</div>
</div>

<div className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-[#D9E1E8] bg-white group hover:shadow-md transition-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Clinic front desk and administration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2F8F9D]"></div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-[#12324A] mb-3 leading-snug">Reduce Front Desk Pressure Without Losing Opportunities</h3>
<p className="text-sm text-[#4A5D6E] leading-relaxed">
                            Better responsiveness and smoother call handling help your team stay focused while the clinic still captures new patient demand.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFCFD] border-y border-[#D9E1E8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#12324A] mb-4">Hear How Your Clinic Could Sound to New Patients</h2>
<p className="text-base text-[#4A5D6E]">This is not a generic sample. Your personalized demo is built around your clinic so you can experience how SpineVoice could represent your practice during busy hours and after hours.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[1px] bg-[#D9E1E8] z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-white border border-[#D9E1E8] shadow-sm flex items-center justify-center text-[#12324A] text-3xl mb-6">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-[#12324A] mb-2">Step 1: Enter your clinic details</h4>
<p className="text-sm text-[#4A5D6E]">We use your business information and website to personalize the experience.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center mt-8 md:mt-0">
<div className="w-20 h-20 rounded-full bg-white border border-[#D9E1E8] shadow-sm flex items-center justify-center text-[#12324A] text-3xl mb-6">
<iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-[#12324A] mb-2">Step 2: We generate your demo</h4>
<p className="text-sm text-[#4A5D6E]">SpineVoice is tailored to reflect your services, tone, and patient experience.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center mt-8 md:mt-0">
<div className="w-20 h-20 rounded-full bg-[#12324A] border border-[#12324A] shadow-md flex items-center justify-center text-[#2F8F9D] text-3xl mb-6">
<iconify-icon icon="solar:phone-calling-rounded-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-[#12324A] mb-2">Step 3: Call and experience it</h4>
<p className="text-sm text-[#4A5D6E]">Hear how it greets callers, responds professionally, and supports appointment booking.</p>
</div>
</div>
<div className="text-center flex flex-col items-center gap-4">
<a className="inline-flex justify-center items-center bg-[#12324A] text-white text-base font-medium px-8 py-3.5 rounded-lg hover:bg-[#12324A]/90 transition-colors shadow-sm" href="#demo">
                    Get My Personalized Demo
                </a>
<span className="text-sm text-[#324C66] font-medium">
                    Fast to try. Easy to understand. Built to show the experience, not just describe it.
                </span>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#324C66] font-medium text-sm tracking-wide mb-3 block">Proven Experience</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#12324A] mb-4">Trusted by growing chiropractic clinics focused on patient experience, faster response, and more booked appointments.</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-[#FAFCFD] border border-[#D9E1E8] p-6 rounded-xl flex items-center gap-4">
<iconify-icon className="text-3xl text-[#2F8F9D]" icon="solar:chart-square-linear"></iconify-icon>
<p className="text-sm font-medium text-[#12324A]">Captures after-hours bookings naturally</p>
</div>
<div className="bg-[#FAFCFD] border border-[#D9E1E8] p-6 rounded-xl flex items-center gap-4">
<iconify-icon className="text-3xl text-[#2F8F9D]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<p className="text-sm font-medium text-[#12324A]">Reduces front-desk call fatigue instantly</p>
</div>
<div className="bg-[#FAFCFD] border border-[#D9E1E8] p-6 rounded-xl flex items-center gap-4">
<iconify-icon className="text-3xl text-[#2F8F9D]" icon="solar:shield-check-linear"></iconify-icon>
<p className="text-sm font-medium text-[#12324A]">Maintains a consistent, clinical standard</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white border border-[#D9E1E8] p-8 rounded-2xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-[#2F8F9D] mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#4A5D6E] leading-relaxed mb-6">"We used to miss 3-4 calls every lunch break. Having SpineVoice cover those gaps means we aren't losing new patients to the clinic down the street. It sounds incredibly professional."</p>
</div>
<div>
<h5 className="text-sm font-semibold text-[#12324A]">Dr. Sarah Jenkins</h5>
<p className="text-xs text-[#324C66]">Clinic Director</p>
</div>
</div>

<div className="bg-white border border-[#D9E1E8] p-8 rounded-2xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-[#2F8F9D] mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#4A5D6E] leading-relaxed mb-6">"Our front desk was overwhelmed on Monday mornings. Now, routine questions and appointment requests are handled smoothly before our team even picks up a ringing phone."</p>
</div>
<div>
<h5 className="text-sm font-semibold text-[#12324A]">Mark T.</h5>
<p className="text-xs text-[#324C66]">Practice Manager</p>
</div>
</div>

<div className="bg-white border border-[#D9E1E8] p-8 rounded-2xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-[#2F8F9D] mb-4 text-sm gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#4A5D6E] leading-relaxed mb-6">"The after-hours performance is the real game-changer. Waking up to seeing a new patient booked at 8 PM when the clinic was dark is proof the system pays for itself."</p>
</div>
<div>
<h5 className="text-sm font-semibold text-[#12324A]">Dr. James R.</h5>
<p className="text-xs text-[#324C66]">Lead Chiropractor</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFCFD] border-y border-[#D9E1E8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#12324A] mb-4">Infrastructure for a smoother clinic experience.</h2>
<p className="text-base text-[#4A5D6E]">SpineVoice supports the day-to-day flow of your clinic with fast, consistent, and professional call handling.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#D9E1E8]/30 border border-[#D9E1E8]/50 p-6 rounded-xl hover:bg-white hover:border-[#D9E1E8] transition-colors">
<iconify-icon className="text-2xl text-[#2F8F9D] mb-4 block" icon="solar:clock-circle-linear"></iconify-icon>
<h4 className="text-base font-medium text-[#12324A] mb-2">24/7 Availability</h4>
<p className="text-sm text-[#4A5D6E]">Never send another caller to a static voicemail. Answer promptly around the clock.</p>
</div>

<div className="bg-[#D9E1E8]/30 border border-[#D9E1E8]/50 p-6 rounded-xl hover:bg-white hover:border-[#D9E1E8] transition-colors">
<iconify-icon className="text-2xl text-[#2F8F9D] mb-4 block" icon="solar:calendar-add-linear"></iconify-icon>
<h4 className="text-base font-medium text-[#12324A] mb-2">Appointment Booking Support</h4>
<p className="text-sm text-[#4A5D6E]">Guide patients through scheduling natural workflows without human intervention.</p>
</div>

<div className="bg-[#D9E1E8]/30 border border-[#D9E1E8]/50 p-6 rounded-xl hover:bg-white hover:border-[#D9E1E8] transition-colors">
<iconify-icon className="text-2xl text-[#2F8F9D] mb-4 block" icon="solar:chat-round-check-linear"></iconify-icon>
<h4 className="text-base font-medium text-[#12324A] mb-2">Answers Common Questions</h4>
<p className="text-sm text-[#4A5D6E]">Handle location, pricing, insurance basics, and service inquiries effortlessly.</p>
</div>

<div className="bg-[#D9E1E8]/30 border border-[#D9E1E8]/50 p-6 rounded-xl hover:bg-white hover:border-[#D9E1E8] transition-colors">
<iconify-icon className="text-2xl text-[#2F8F9D] mb-4 block" icon="solar:user-plus-linear"></iconify-icon>
<h4 className="text-base font-medium text-[#12324A] mb-2">New Patient Lead Capture</h4>
<p className="text-sm text-[#4A5D6E]">Ensure contact details and patient intent are gathered neatly for your staff.</p>
</div>

<div className="bg-[#D9E1E8]/30 border border-[#D9E1E8]/50 p-6 rounded-xl hover:bg-white hover:border-[#D9E1E8] transition-colors">
<iconify-icon className="text-2xl text-[#2F8F9D] mb-4 block" icon="solar:moon-sleep-linear"></iconify-icon>
<h4 className="text-base font-medium text-[#12324A] mb-2">After-Hours Coverage</h4>
<p className="text-sm text-[#4A5D6E]">Extend your clinic hours digitally to capture late-night or weekend demand.</p>
</div>

<div className="bg-[#D9E1E8]/30 border border-[#D9E1E8]/50 p-6 rounded-xl hover:bg-white hover:border-[#D9E1E8] transition-colors">
<iconify-icon className="text-2xl text-[#2F8F9D] mb-4 block" icon="solar:verified-check-linear"></iconify-icon>
<h4 className="text-base font-medium text-[#12324A] mb-2">Consistent Patient Experience</h4>
<p className="text-sm text-[#4A5D6E]">Maintain a calm, professional tone on every single call, regardless of volume.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-[#12324A] text-center mb-12">Questions? We’ve Got Answers.</h2>
<div className="space-y-1">
<details className="group border-b border-[#D9E1E8]">
<summary className="cursor-pointer py-5 text-base font-medium text-[#12324A] flex justify-between items-center outline-none">
                        Will it sound robotic?
                        <iconify-icon className="text-[#4A5D6E] text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 pt-1 text-sm text-[#4A5D6E] leading-relaxed pr-8">
                        No. SpineVoice is designed to sound calm, natural, and professional so your clinic maintains a strong first impression.
                    </div>
</details>
<details className="group border-b border-[#D9E1E8]">
<summary className="cursor-pointer py-5 text-base font-medium text-[#12324A] flex justify-between items-center outline-none">
                        Can it answer service-related questions?
                        <iconify-icon className="text-[#4A5D6E] text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 pt-1 text-sm text-[#4A5D6E] leading-relaxed pr-8">
                        Yes. SpineVoice can be tailored around your services and common patient inquiries so callers get helpful answers quickly.
                    </div>
</details>
<details className="group border-b border-[#D9E1E8]">
<summary className="cursor-pointer py-5 text-base font-medium text-[#12324A] flex justify-between items-center outline-none">
                        Can it help reduce missed appointments?
                        <iconify-icon className="text-[#4A5D6E] text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 pt-1 text-sm text-[#4A5D6E] leading-relaxed pr-8">
                        Yes. By answering promptly, capturing inquiries, and supporting follow-up, SpineVoice helps reduce opportunities slipping through the cracks.
                    </div>
</details>
<details className="group border-b border-[#D9E1E8]">
<summary className="cursor-pointer py-5 text-base font-medium text-[#12324A] flex justify-between items-center outline-none">
                        What happens after hours?
                        <iconify-icon className="text-[#4A5D6E] text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 pt-1 text-sm text-[#4A5D6E] leading-relaxed pr-8">
                        SpineVoice can continue answering calls after hours, helping your clinic capture interest even when the office is closed.
                    </div>
</details>
<details className="group border-b border-[#D9E1E8]">
<summary className="cursor-pointer py-5 text-base font-medium text-[#12324A] flex justify-between items-center outline-none">
                        Can it support multiple services?
                        <iconify-icon className="text-[#4A5D6E] text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 pt-1 text-sm text-[#4A5D6E] leading-relaxed pr-8">
                        Yes. It can be structured around multiple services, appointment types, and common patient pathways.
                    </div>
</details>
<details className="group border-b border-[#D9E1E8]">
<summary className="cursor-pointer py-5 text-base font-medium text-[#12324A] flex justify-between items-center outline-none">
                        How long does setup take?
                        <iconify-icon className="text-[#4A5D6E] text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 pt-1 text-sm text-[#4A5D6E] leading-relaxed pr-8">
                        Setup is fast and designed to get you listening to a personalized demo in minutes, not days.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFCFD] border-y border-[#D9E1E8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-14">
<h2 className="text-3xl font-semibold tracking-tight text-[#12324A] mb-4">Simple Pricing. Real ROI.</h2>
<p className="text-base text-[#4A5D6E]">One saved new patient appointment can cover the investment. The real cost is how many calls and opportunities slip through when no one answers — especially after hours.</p>
</div>
<div className="max-w-md mx-auto bg-white border border-[#D9E1E8] rounded-2xl shadow-lg relative overflow-hidden">
<div className="h-2 bg-[#2F8F9D] w-full absolute top-0 left-0"></div>
<div className="p-8">
<h3 className="text-lg font-semibold text-[#12324A] text-center mb-8 pb-6 border-b border-[#D9E1E8]">SpineVoice for Chiropractic Clinics</h3>
<div className="flex justify-between items-center mb-4">
<div>
<span className="block text-3xl font-semibold tracking-tight text-[#12324A]">$499</span>
<span className="text-xs text-[#324C66] font-medium uppercase tracking-wide">Setup</span>
</div>
<div className="text-right max-w-[140px]">
<span className="text-xs text-[#4A5D6E]">One-time onboarding and customization</span>
</div>
</div>
<div className="flex justify-between items-center mb-8 pb-8 border-b border-[#D9E1E8]">
<div>
<span className="block text-3xl font-semibold tracking-tight text-[#12324A]">$199<span className="text-lg text-[#4A5D6E] font-normal"> /mo</span></span>
</div>
<div className="text-right max-w-[140px]">
<span className="text-xs text-[#4A5D6E]">Ongoing access and support</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-[#12324A]">
<iconify-icon className="text-[#2F8F9D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Personalized AI receptionist setup
                        </li>
<li className="flex items-start gap-3 text-sm text-[#12324A]">
<iconify-icon className="text-[#2F8F9D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Chiropractic-specific call handling
                        </li>
<li className="flex items-start gap-3 text-sm text-[#12324A]">
<iconify-icon className="text-[#2F8F9D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Appointment booking support
                        </li>
<li className="flex items-start gap-3 text-sm text-[#12324A]">
<iconify-icon className="text-[#2F8F9D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Lead capture support
                        </li>
<li className="flex items-start gap-3 text-sm text-[#12324A]">
<iconify-icon className="text-[#2F8F9D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            After-hours coverage
                        </li>
<li className="flex items-start gap-3 text-sm text-[#12324A]">
<iconify-icon className="text-[#2F8F9D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Ongoing platform access
                        </li>
</ul>
<div className="bg-[#FAFCFD] border border-[#D9E1E8] rounded-lg p-4 mb-8 text-center">
<p className="text-xs text-[#12324A] font-medium">A single saved new patient appointment can often justify the investment.</p>
</div>
<a className="block w-full text-center bg-[#12324A] text-white text-sm font-medium px-4 py-3.5 rounded-lg hover:bg-[#12324A]/90 transition-colors shadow-sm" href="#demo">
                        Get My Personalized Demo
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#12324A] relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#2F8F9D 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">Ready to Stop Losing New Patient Opportunities?</h2>
<p className="text-lg text-[#D9E1E8] mb-10 max-w-2xl mx-auto leading-relaxed">
                Generate your personalized demo in 60 seconds and hear how SpineVoice could help your clinic sound professional, responsive, and always available — during busy hours and after hours.
            </p>
<a className="inline-flex justify-center items-center bg-white text-[#12324A] text-base font-semibold px-8 py-4 rounded-lg hover:bg-[#D9E1E8] transition-colors shadow-lg" href="#demo">
                Get My Personalized Demo
            </a>
</div>
</section>

<footer className="bg-[#12324A] pt-16 pb-8 border-t border-[#4F6D8A]/30">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="md:col-span-1">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 mb-3" href="#">
<iconify-icon className="text-[#2F8F9D] text-2xl" icon="solar:health-linear"></iconify-icon>
                        SpineVoice
                    </a>
<p className="text-sm text-[#D9E1E8]/90">AI Receptionist for Chiropractic Clinics</p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#D9E1E8]/90 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-[#D9E1E8]/90 hover:text-white transition-colors" href="#demo">Demo</a></li>
<li><a className="text-sm text-[#D9E1E8]/90 hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#D9E1E8]/90 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-[#D9E1E8]/90 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Contact</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#D9E1E8]/90 hover:text-white transition-colors" href="mailto:hello@spinevoice.com">hello@spinevoice.com</a></li>
<li><a className="text-sm text-[#D9E1E8]/90 hover:text-white transition-colors" href="tel:5555555555">(555) 555-5555</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#4F6D8A]/30 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#D9E1E8]/70">
                    © 2024 SpineVoice. All rights reserved.
                </p>
<p className="text-xs text-[#D9E1E8]/70 flex items-center gap-1">
                    A product by <span className="text-white font-medium">Binary Ideas</span>
</p>
</div>
</div>
</footer>

    </>
  );
}
