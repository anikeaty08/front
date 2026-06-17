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



        // Simple JS to toggle phone consent visibility when phone input has value
        const phoneInput = document.querySelector('input[type="tel"]');
        const consentBox = document.getElementById('phone-consent');

        if(phoneInput && consentBox) {
            phoneInput.addEventListener('input', (e) => {
                if(e.target.value.length > 0) {
                    consentBox.classList.remove('hidden');
                } else {
                    consentBox.classList.add('hidden');
                }
            });
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
      

<nav className="w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-neutral-900 flex items-center gap-1" href="#">
                MATCH<span className="text-neutral-400">/</span>SA
            </a>
<span className="text-xs font-medium bg-neutral-100 text-neutral-500 px-2 py-1 rounded-full border border-neutral-200">San Antonio, TX</span>
</div>
</nav>

<section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
<div className="absolute top-20 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-7 flex flex-col gap-8 pt-4">
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl font-medium text-neutral-900 tracking-tight leading-[1.1]">
                        Get Matched With a San Antonio Real Estate Agent
                    </h1>
<p className="text-lg text-neutral-500 font-normal leading-relaxed max-w-lg">
                        Share your ZIP and timeline. We’ll email you up to 3 local agent matches to interview, no pressure, no obligation.
                    </p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-600 bg-indigo-50 p-1 rounded-md">
<iconify-icon height="18" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<span className="block text-neutral-900 font-medium text-sm">Up to 3 local matches for your ZIP</span>
<span className="text-xs text-neutral-400">Hyper-local expertise recommended.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-600 bg-indigo-50 p-1 rounded-md">
<iconify-icon height="18" icon="solar:user-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="">
<span className="block text-neutral-900 font-medium text-sm">Human-reviewed recommendations</span>
<span className="text-xs text-neutral-400">Vetted for quality and recent activity.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-600 bg-indigo-50 p-1 rounded-md">
<iconify-icon height="18" icon="solar:stopwatch-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="">
<span className="block text-neutral-900 font-medium text-sm">Fast: takes about a minute</span>
<span className="text-xs text-neutral-400">Save hours of research time.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-600 bg-indigo-50 p-1 rounded-md">
<iconify-icon height="18" icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<span className="block text-neutral-900 font-medium text-sm">Buying or selling, your choice</span>
<span className="text-xs text-neutral-400">Tailored to your specific goals.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-600 bg-indigo-50 p-1 rounded-md">
<iconify-icon height="18" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<span className="block text-neutral-900 font-medium text-sm">Phone is optional (email works)</span>
<span className="text-xs text-neutral-400">We respect your preferred contact method.</span>
</div>
</li>
</ul>
</div>

<div className="lg:col-span-5 w-full">
<div className="md:p-8 bg-white border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="mb-6">
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Get matches by email</h3>
<p className="text-xs text-neutral-400 mt-1">Takes about 60 seconds. No obligation.</p>
</div>

<div className="bg-neutral-100 p-1 rounded-lg flex mb-6">
<label className="flex-1 text-center cursor-pointer">
<input checked="" className="peer hidden" name="type" type="radio" value="buying"/>
<span className="block py-2 text-sm font-medium rounded-md text-neutral-500 peer-checked:bg-white peer-checked:text-neutral-900 peer-checked:shadow-sm transition-all">Buying</span>
</label>
<label className="flex-1 text-center cursor-pointer">
<input className="peer hidden" name="type" type="radio" value="selling"/>
<span className="block py-2 text-sm font-medium rounded-md text-neutral-500 peer-checked:bg-white peer-checked:text-neutral-900 peer-checked:shadow-sm transition-all">Selling</span>
</label>
</div>
<form className="space-y-4">

<div className="space-y-1.5">
<label className="block text-xs font-medium text-neutral-700">ZIP Code</label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors" placeholder="e.g., 78209" type="text"/>
<p className="text-[10px] text-neutral-400">We use this to keep matches local.</p>
</div>

<div className="space-y-1.5 relative">
<label className="block text-xs font-medium text-neutral-700">Timeline</label>
<div className="relative">
<select className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors cursor-pointer">
<option disabled="" selected="" value="">Select one</option>
<option value="0-3">0–3 months</option>
<option value="3-6">3–6 months</option>
<option value="6-12">6–12 months</option>
<option value="researching">Just researching</option>
</select>
<div className="absolute right-3 top-2.5 text-neutral-400 pointer-events-none">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<p className="text-[10px] text-neutral-400">So we don’t send you the wrong type of agent.</p>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-medium text-neutral-700">Email</label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors" placeholder="you@email.com" type="email"/>
<p className="text-[10px] text-neutral-400">We’ll send your matches here.</p>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-medium text-neutral-700">Name</label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors" placeholder="First name" type="text"/>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-medium text-neutral-700">Phone <span className="font-bold text-neutral-400">(optional)</span></label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors" placeholder="(###) ###-####" type="tel"/>
<p className="text-[10px] text-neutral-400">Only if you want faster contact.</p>
</div>

<button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all text-sm mt-4 flex justify-center items-center gap-2" type="submit">
<span>Get My Agent Matches</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<p className="text-[11px] text-center text-neutral-500 leading-tight pt-2">
                            You’re in control. We’ll email your matches, and you choose who to contact.
                            <br/><span className="text-neutral-400 mt-1 block">No obligation. Interview before you decide.</span>
</p>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white py-20">
<div className="max-w-5xl mx-auto px-6">
<div className="max-w-xl mb-12">
<h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-4">How It Works</h2>
<p className="text-neutral-500 text-sm">A transparent process designed to save you time without the sales calls.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="space-y-3">
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 bg-neutral-50 mb-4">
<span className="font-medium text-sm">1</span>
</div>
<h3 className="text-base font-medium text-neutral-900">Tell us your ZIP + timeline</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        So we keep results local and relevant to your specific situation.
                    </p>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 bg-neutral-50 mb-4">
<span className="font-medium text-sm">2</span>
</div>
<h3 className="text-base font-medium text-neutral-900">Get up to 3 agent matches</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        A short list you can actually compare without doom-scrolling online reviews.
                    </p>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 bg-neutral-50 mb-4">
<span className="font-medium text-sm">3</span>
</div>
<h3 className="text-base font-medium text-neutral-900">Interview and pick your favorite</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        No obligation. No “one agent only” trap. You are in the driver's seat.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-neutral-50 py-20">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">

<div className="">
<h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">What You Get <span className="text-neutral-400 font-normal text-lg">(Delivered by Email)</span></h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="text-indigo-600 shrink-0">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Up to 3 local agent matches</p>
<p className="text-sm text-neutral-500 mt-1">Professionals you can reach out to (or not).</p>
</div>
</li>
<li className="flex gap-4">
<div className="text-indigo-600 shrink-0">
<iconify-icon height="24" icon="solar:checklist-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-900">A 1-page next-step checklist</p>
<p className="text-sm text-neutral-500 mt-1">Customized guide for buyers or sellers.</p>
</div>
</li>
<li className="flex gap-4">
<div className="text-indigo-600 shrink-0">
<iconify-icon height="24" icon="solar:sort-by-time-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-900">A simple comparison view</p>
<p className="text-sm text-neutral-500 mt-1">See who fits your timeline and specific area.</p>
</div>
</li>
</ul>
</div>

<div>
<h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-6">Common Concerns</h2>
<div className="grid gap-4">
<div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
<h4 className="text-sm font-medium text-neutral-900 mb-2">“Will I get spammed?”</h4>
<p className="text-sm text-neutral-500">No. Email first. Phone is optional.</p>
</div>
<div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
<h4 className="text-sm font-medium text-neutral-900 mb-2">“Do I have to commit to an agent?”</h4>
<p className="text-sm text-neutral-500">No. This is a shortlist, not a contract.</p>
</div>
<div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
<h4 className="text-sm font-medium text-neutral-900 mb-2">“I’m just researching.”</h4>
<p className="text-sm text-neutral-500">Pick “Just researching” and keep it low-pressure.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white py-20">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
<div className="divide-y divide-neutral-100">

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900 text-sm">
<span>How are matches selected?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                        Based on your ZIP and timeline, then reviewed to keep the list relevant to your specific needs.
                    </p>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900 text-sm">
<span>Do I have to choose one of the matches?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                        No. You choose who to contact, if anyone. You are under no obligation.
                    </p>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900 text-sm">
<span>Is this for buyers and sellers?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                        Yes. The checklist and agent recommendations adapt to your specific situation.
                    </p>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900 text-sm">
<span>How fast will I get results?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                        Typically soon after you submit (sent directly to your email).
                    </p>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900 text-sm">
<span>Do you need my phone number?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                        No. It’s optional. Email works perfectly fine.
                    </p>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900 text-sm">
<span>Will agents contact me directly?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                        If you choose to reach out or if you provide a phone number and consent to contact. Otherwise, you get the list via email.
                    </p>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900 text-sm">
<span>What areas do you cover in San Antonio?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                        We use your ZIP to keep recommendations local across the entire metro area.
                    </p>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900 text-sm">
<span>What if my timeline changes?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-500 text-sm mt-3 leading-relaxed">
                        Submit again with a new timeline to refresh your matches.
                    </p>
</details>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-neutral-50 py-20">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium text-neutral-900 tracking-tight mb-4">Ready for a short list instead of a rabbit hole?</h2>
<div className="mt-8 flex flex-col items-center">
<button className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all text-sm flex items-center gap-2">
                    Send My Matches
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-xs text-neutral-400 mt-3">Takes about 60 seconds. No obligation.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 py-12">
<div className="max-w-5xl mx-auto px-6 text-center">
<a className="text-base font-medium tracking-tighter text-neutral-900 flex items-center justify-center gap-1 mb-6" href="#">
                MATCH<span className="text-neutral-400">/</span>SA
            </a>
<p className="text-xs text-neutral-400 max-w-lg mx-auto mb-6">
                Privacy: We use the info you provide to send your matches and help you connect with a real estate professional if you choose.
            </p>
<div className="flex justify-center gap-6 text-xs text-neutral-500 mb-8">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>

<div className="max-w-xl mx-auto p-4 bg-neutral-50 rounded-lg border border-neutral-100 hidden" id="phone-consent">
<p className="text-[10px] text-neutral-400 leading-normal text-left">
                    By providing your phone number, you agree that FastExpert and real estate professionals may contact you by call or text, including via automated technology. Consent is not a condition of purchase. Msg/data rates may apply. Reply STOP to opt out.
                </p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 p-4 lg:hidden z-50">
<button className="w-full bg-neutral-900 text-white font-medium py-3 rounded-lg shadow-sm flex flex-col items-center justify-center leading-none">
<span className="text-sm">Get Matches</span>
<span className="text-[10px] opacity-70 mt-1 font-normal">Email delivery</span>
</button>
</div>


    </>
  );
}
