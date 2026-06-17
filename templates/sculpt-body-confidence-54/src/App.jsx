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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-zinc-900" href="#">SCULPT.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-[#8e24aa] transition-colors" href="#program">Program</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#8e24aa] rounded-full hover:bg-[#7b1fa2] transition-colors" href="#book">
                Book Consultation
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-100/40 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-purple-50 border border-purple-100 text-[#8e24aa] text-xs font-medium">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5"></span>
<span>The Future of Body Confidence</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Transform Your Body. <br className="hidden md:block"/>
<span className="text-zinc-400">Elevate Your Confidence.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Advanced, non-invasive body sculpting treatments designed to help you feel strong, confident, and comfortable in your skin.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full md:w-auto px-8 py-3.5 bg-[#8e24aa] text-white text-sm font-medium rounded-full hover:bg-[#7b1fa2] transition-all flex items-center justify-center gap-2" href="#book">
                    Book a Free Consultation
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
<a className="w-full md:w-auto px-8 py-3.5 bg-white text-zinc-600 border border-zinc-200 text-sm font-medium rounded-full hover:bg-zinc-50 transition-all" href="#program">
                    Explore Treatments
                </a>
</div>
<p className="text-xs text-zinc-400 flex items-center justify-center gap-6">
<span className="flex items-center gap-1.5"><span className="iconify text-[#8e24aa]" data-icon="lucide:check-circle" data-strokeWidth="1.5"></span> No surgery</span>
<span className="flex items-center gap-1.5"><span className="iconify text-[#8e24aa]" data-icon="lucide:check-circle" data-strokeWidth="1.5"></span> No downtime</span>
<span className="flex items-center gap-1.5"><span className="iconify text-[#8e24aa]" data-icon="lucide:check-circle" data-strokeWidth="1.5"></span> Personalized care</span>
</p>
</div>
</header>

<section className="py-24 bg-zinc-50/50 border-y border-zinc-100" id="program">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Signature Body Sculpting Experience</h2>
<p className="text-zinc-500 leading-relaxed">
                        A customized body contouring program designed to target stubborn fat, tone muscle, and enhance natural definition.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-[#8e24aa] mt-0.5 shrink-0" data-icon="lucide:zap" data-strokeWidth="1.5"></span>
                            Non-invasive technology
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-[#8e24aa] mt-0.5 shrink-0" data-icon="lucide:armchair" data-strokeWidth="1.5"></span>
                            Comfortable, in-office sessions
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-[#8e24aa] mt-0.5 shrink-0" data-icon="lucide:flask-conical" data-strokeWidth="1.5"></span>
                            Clinically tested methods
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-[#8e24aa] mt-0.5 shrink-0" data-icon="lucide:target" data-strokeWidth="1.5"></span>
                            Tailored to your goals
                        </li>
</ul>
</div>
<div className="w-full md:w-80 shrink-0 bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex flex-col items-center text-center">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Pricing</span>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-sm text-zinc-500">Starting at</span>
<span className="text-3xl font-semibold text-zinc-900">$249</span>
<span className="text-sm text-zinc-500">/session</span>
</div>
<button className="w-full py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors shadow-sm">
                        Get Started
                    </button>
<p className="mt-4 text-xs text-zinc-400">Free consultation included.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
                    Advanced Technology. <br/>Real Results.
                </h2>
<p className="text-zinc-500 leading-relaxed mb-8">
                    Our treatments use modern, clinically supported technology to safely sculpt the body without surgery. Each session is designed to support natural processes that help reduce fat, improve tone, and enhance overall body confidence.
                </p>
<div className="grid gap-4">
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
<div className="p-2 bg-white rounded-lg border border-zinc-100 text-[#8e24aa]">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-zinc-900">FDA-cleared technology</h4>
<p className="text-sm text-zinc-500">Rigorous safety standards.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
<div className="p-2 bg-white rounded-lg border border-zinc-100 text-[#8e24aa]">
<span className="iconify" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-zinc-900">Safe for all skin types</h4>
<p className="text-sm text-zinc-500">Inclusive and effective.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
<div className="p-2 bg-white rounded-lg border border-zinc-100 text-[#8e24aa]">
<span className="iconify" data-icon="lucide:badge-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-zinc-900">Trained specialists</h4>
<p className="text-sm text-zinc-500">Performed by experts.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] bg-zinc-100 rounded-3xl overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-white"></div>
<div className="relative w-64 h-64 border border-purple-200/50 rounded-full flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
<div className="w-48 h-48 border border-purple-300/50 rounded-full flex items-center justify-center">
<div className="w-32 h-32 bg-gradient-to-br from-[#8e24aa] to-purple-400 rounded-full opacity-10 blur-xl"></div>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
<div className="flex items-center gap-3">
<span className="iconify text-[#8e24aa]" data-icon="lucide:activity" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium text-zinc-700">Precision Targeting Active</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="benefits">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Why Clients Choose Us</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-[#8e24aa] mb-4">
<span className="iconify" data-icon="lucide:feather" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900 mb-2">Non-Surgical Approach</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Achieve visible results without needles, anesthesia, or recovery time.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-[#8e24aa] mb-4">
<span className="iconify" data-icon="lucide:scan-search" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900 mb-2">Targeted Sculpting</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Focus on areas that don’t respond to diet or exercise.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-[#8e24aa] mb-4">
<span className="iconify" data-icon="lucide:biceps-flexed" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900 mb-2">Muscle Definition</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Support firmer, more toned muscle appearance.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-[#8e24aa] mb-4">
<span className="iconify" data-icon="lucide:timer" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900 mb-2">No Downtime</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Return to daily activities immediately after treatment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-100" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Real People. Real Results.</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="flex flex-col h-full justify-between p-8 bg-zinc-50 rounded-2xl">
<div>
<div className="flex text-[#8e24aa] mb-4 space-x-0.5">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
</div>
<p className="text-zinc-600 mb-6 italic">“I felt comfortable from my first visit, and the results exceeded my expectations.”</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-[#8e24aa]">V</div>
<span className="text-sm font-medium text-zinc-900">Verified Client</span>
</div>
</div>
<div className="flex flex-col h-full justify-between p-8 bg-zinc-50 rounded-2xl">
<div>
<div className="flex text-[#8e24aa] mb-4 space-x-0.5">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
</div>
<p className="text-zinc-600 mb-6 italic">“This experience helped me regain confidence in my body.”</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-[#8e24aa]">C</div>
<span className="text-sm font-medium text-zinc-900">Client Feedback</span>
</div>
</div>
<div className="flex flex-col h-full justify-between p-8 bg-zinc-50 rounded-2xl">
<div>
<div className="flex text-[#8e24aa] mb-4 space-x-0.5">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-stroke="none"></span>
</div>
<p className="text-zinc-600 mb-6 italic">“Professional, supportive, and truly results-driven.”</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-[#8e24aa]">H</div>
<span className="text-sm font-medium text-zinc-900">Happy Client</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#8e24aa] text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">More Than a Treatment — A Confidence Reset</h2>
<p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                We believe body sculpting is about how you feel, not just how you look. Our approach is designed to empower you with confidence through personalized care and realistic, natural-looking results.
            </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-16 text-center">What to Expect From Your Journey</h2>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-100 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="bg-white p-4 md:text-center group">
<div className="w-12 h-12 mx-auto bg-purple-50 text-[#8e24aa] rounded-full flex items-center justify-center font-semibold mb-4 border border-purple-100 group-hover:scale-110 transition-transform">1</div>
<h4 className="font-medium text-zinc-900 text-sm mb-1">Consultation</h4>
<p className="text-xs text-zinc-500">Complimentary &amp; thorough</p>
</div>

<div className="bg-white p-4 md:text-center group">
<div className="w-12 h-12 mx-auto bg-purple-50 text-[#8e24aa] rounded-full flex items-center justify-center font-semibold mb-4 border border-purple-100 group-hover:scale-110 transition-transform">2</div>
<h4 className="font-medium text-zinc-900 text-sm mb-1">Plan</h4>
<p className="text-xs text-zinc-500">Personalized treatment</p>
</div>

<div className="bg-white p-4 md:text-center group">
<div className="w-12 h-12 mx-auto bg-purple-50 text-[#8e24aa] rounded-full flex items-center justify-center font-semibold mb-4 border border-purple-100 group-hover:scale-110 transition-transform">3</div>
<h4 className="font-medium text-zinc-900 text-sm mb-1">Session</h4>
<p className="text-xs text-zinc-500">Comfortable in-office</p>
</div>

<div className="bg-white p-4 md:text-center group">
<div className="w-12 h-12 mx-auto bg-purple-50 text-[#8e24aa] rounded-full flex items-center justify-center font-semibold mb-4 border border-purple-100 group-hover:scale-110 transition-transform">4</div>
<h4 className="font-medium text-zinc-900 text-sm mb-1">Results</h4>
<p className="text-xs text-zinc-500">Gradual &amp; natural</p>
</div>

<div className="bg-white p-4 md:text-center group">
<div className="w-12 h-12 mx-auto bg-purple-50 text-[#8e24aa] rounded-full flex items-center justify-center font-semibold mb-4 border border-purple-100 group-hover:scale-110 transition-transform">5</div>
<h4 className="font-medium text-zinc-900 text-sm mb-1">Support</h4>
<p className="text-xs text-zinc-500">Ongoing guidance</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

<div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm flex flex-col justify-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">Simple &amp; Transparent Pricing</h2>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#8e24aa]"></span>
<span className="text-zinc-600">Single sessions starting at <strong className="text-zinc-900">$249</strong></span>
</li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#8e24aa]"></span>
<span className="text-zinc-600">Package options available</span>
</li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#8e24aa]"></span>
<span className="text-zinc-600">Custom plans based on individual goals</span>
</li>
</ul>
<div className="mt-auto pt-6 border-t border-zinc-100">
<p className="text-sm text-zinc-400">No hidden fees. No unnecessary treatments.</p>
</div>
</div>

<div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100 shadow-sm flex flex-col justify-center text-center md:text-left">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#8e24aa] mb-6 mx-auto md:mx-0">
<span className="iconify" data-icon="lucide:gift" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">Give the Gift of Confidence</h2>
<p className="text-zinc-600 mb-8 leading-relaxed">
                    Our digital gift cards make it easy to surprise someone special with a confidence-boosting experience they’ll love.
                </p>
<button className="px-6 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors w-full md:w-fit self-start">
                    Purchase Gift Card
                </button>
</div>
</div>
</section>

<div className="bg-zinc-100 py-12">
<div className="max-w-4xl mx-auto px-6 text-center">
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Results You Can Feel</h3>
<p className="text-xs text-zinc-500 leading-relaxed max-w-2xl mx-auto">
                Individual results may vary based on body type, lifestyle, and treatment plan. A consultation is recommended to determine suitability.
            </p>
</div>
</div>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:ring-1 open:ring-black/5 transition-all">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 font-medium">
<span className="text-lg">Is the treatment painful?</span>
<span className="iconify transition-transform group-open:rotate-180 text-zinc-400" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-600 text-sm">
                        Most clients describe it as comfortable with mild sensations. It is non-invasive and generally pain-free.
                    </p>
</details>
<details className="group bg-zinc-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:ring-1 open:ring-black/5 transition-all">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 font-medium">
<span className="text-lg">How many sessions are needed?</span>
<span className="iconify transition-transform group-open:rotate-180 text-zinc-400" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-600 text-sm">
                        Many clients see visible results within a few sessions, though a full plan will be customized to your goals.
                    </p>
</details>
<details className="group bg-zinc-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:ring-1 open:ring-black/5 transition-all">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 font-medium">
<span className="text-lg">Is there downtime?</span>
<span className="iconify transition-transform group-open:rotate-180 text-zinc-400" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-600 text-sm">
                        No downtime is required. You can return to your daily activities immediately after treatment.
                    </p>
</details>
<details className="group bg-zinc-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:ring-1 open:ring-black/5 transition-all">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 font-medium">
<span className="text-lg">Is it safe?</span>
<span className="iconify transition-transform group-open:rotate-180 text-zinc-400" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-600 text-sm">
                        Yes, our treatments use FDA-cleared technology and are performed by trained specialists.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="book">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50/50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Ready to Begin Your Transformation?</h2>
<p className="text-xl text-zinc-500 mb-10">Schedule your free consultation and take the first step toward feeling confident in your body.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-[#8e24aa] text-white text-base font-medium rounded-full hover:bg-[#7b1fa2] transition-all shadow-lg shadow-purple-200">
                    Book Free Consultation
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 text-base font-medium rounded-full hover:bg-zinc-50 transition-all">
                    Contact Our Team
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div className="mb-6 md:mb-0">
<span className="text-lg font-semibold tracking-tighter text-zinc-900">SCULPT.</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
<a className="hover:text-zinc-900" href="#">Instagram</a>
</div>
</div>
<div className="text-center md:text-left flex flex-col md:flex-row justify-between items-end border-t border-zinc-100 pt-8">
<p className="text-xs text-zinc-400">© 2023 Sculpt Body Confidence. All rights reserved.</p>
<p className="text-sm text-[#8e24aa] mt-4 md:mt-0 font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5"></span>
                    Have questions? Our team is here to support you.
                </p>
</div>
</div>
</footer>

    </>
  );
}
