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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-stone-100">
<div className="px-6 py-5 flex justify-between items-center max-w-5xl mx-auto">
<div className="flex items-center gap-2">

<div className="text-[#6B8E7B]">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl serif-font font-medium tracking-tight text-stone-800">
            YesOnUs
          </span>
</div>

<div className="hidden md:flex items-center gap-6 text-sm text-stone-500">
<span>care@yesonus.com</span>
</div>
</div>
</nav>


<header className="pt-40 pb-20 px-6">
<div className="max-w-3xl mx-auto md:text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-stone-800 serif-font tracking-tight mb-8 leading-[1.15]">
          Healthcare is complicated.
          <br/>
<span className="text-stone-400 italic">You shouldn’t have to navigate it alone.</span>
</h1>
<p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          YesOnUs is a patient-first coordination and planning layer.
          We help patients, families, and care teams make sense of care, coverage, and next steps — without pressure, upselling, or judgment.
        </p>

<div className="flex items-center justify-center gap-4 opacity-30 my-12">
<div className="h-px w-12 bg-stone-400"></div>
<iconify-icon className="text-stone-400" icon="solar:heart-pulse-linear" width="20"></iconify-icon>
<div className="h-px w-12 bg-stone-400"></div>
</div>
</div>
</header>

<section className="py-16 px-6 bg-[#F9F8F6] border-y border-stone-100">
<div className="max-w-4xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl serif-font text-stone-800 mb-2">If You’re Here, It’s Usually Because…</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex gap-4 items-start">
<div className="mt-1 text-[#6B8E7B]">
<iconify-icon icon="solar:user-heart-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-stone-600 leading-relaxed">You or someone you love needs care.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-[#6B8E7B]">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-stone-600 leading-relaxed">You’re trying to understand options, bills, or next steps.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-[#6B8E7B]">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-stone-600 leading-relaxed">You want clarity before, during, or after treatment.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-[#6B8E7B]">
<iconify-icon icon="solar:scale-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-stone-600 leading-relaxed">You’re doing everything you can — and it still feels heavy.</p>
</div>
</div>
</div>
<div className="mt-12 p-6 bg-[#FDFCF8] border border-stone-200 rounded-lg text-center md:text-left">
<p className="text-lg text-stone-700 font-medium serif-font">That’s normal. The system wasn’t built to make this easy.</p>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-4xl mx-auto">
<h2 className="text-3xl serif-font text-stone-800 mb-8">What YesOnUs Is</h2>
<p className="text-lg text-stone-600 mb-10 leading-relaxed">
            YesOnUs exists to give people back clarity, continuity, and control — without telling them what to do.
        </p>
<div className="grid md:grid-cols-2 gap-12">

<div className="space-y-6">
<h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400">We help patients</h3>
<ul className="space-y-4">
<li className="flex gap-3 text-stone-600">
<iconify-icon className="shrink-0 text-[#6B8E7B] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>understand their care options</span>
</li>
<li className="flex gap-3 text-stone-600">
<iconify-icon className="shrink-0 text-[#6B8E7B] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>document what matters to them</span>
</li>
<li className="flex gap-3 text-stone-600">
<iconify-icon className="shrink-0 text-[#6B8E7B] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>get support when dental and medical care overlap</span>
</li>
<li className="flex gap-3 text-stone-600">
<iconify-icon className="shrink-0 text-[#6B8E7B] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>navigate billing questions that are often ignored or mishandled</span>
</li>
<li className="flex gap-3 text-stone-600">
<iconify-icon className="shrink-0 text-[#6B8E7B] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>create continuity between visits, providers, and decisions</span>
</li>
</ul>
</div>

<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 h-fit">
<h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-6">Our Boundaries</h3>
<ul className="space-y-4">
<li className="flex gap-3 text-stone-500">
<iconify-icon className="shrink-0 text-stone-400 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>We don’t diagnose.</span>
</li>
<li className="flex gap-3 text-stone-500">
<iconify-icon className="shrink-0 text-stone-400 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>We don’t replace providers.</span>
</li>
<li className="flex gap-3 text-stone-500">
<iconify-icon className="shrink-0 text-stone-400 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>We don’t push treatments.</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-stone-200">
<p className="serif-font italic text-stone-700 text-lg">We help people think clearly — and be heard.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-stone-100">
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl serif-font text-stone-800 mb-6">Why This Matters</h2>
<div className="space-y-6 text-stone-600">
<p>Most care decisions are made from stress, short visits, incomplete information, and memory—not records.</p>
<p>Patients are asked to explain themselves again and again. Care teams are forced to work without context. Families are left trying to piece everything together.</p>
<p className="font-medium text-stone-800">YesOnUs helps change that.</p>
</div>
</div>
<div className="relative pl-8 border-l border-stone-200">
<div className="space-y-8">
<div>
<h4 className="text-lg serif-font text-stone-800 mb-2">Better Records</h4>
<p className="text-sm text-stone-500">We support the creation of clear records of symptoms, preferences, and outcomes.</p>
</div>
<div>
<h4 className="text-lg serif-font text-stone-800 mb-2">Better Preparation</h4>
<p className="text-sm text-stone-500">Pre-visit and post-visit logs that ensure nothing is missed.</p>
</div>
<div>
<h4 className="text-lg serif-font text-stone-800 mb-2">Shared Context</h4>
<p className="text-sm text-stone-500">Context that follows the patient — not the provider.</p>
</div>
</div>
<div className="mt-10 pt-8 border-t border-stone-100">
<p className="text-lg text-[#6B8E7B] serif-font italic">
                        Better context leads to better conversations.<br/>
                        Better conversations lead to better care.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-4xl mx-auto">
<div className="bg-[#F9F9F8] rounded-2xl p-8 md:p-12 border border-stone-200/50">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#6B8E7B]" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<h2 className="text-2xl serif-font text-stone-800">For Social Workers, Nurses, and Care Advocates</h2>
</div>
<p className="text-stone-600 mb-8 max-w-2xl">
                You carry the hardest parts of care — often without tools, time, or recognition.
                <br/>
<span className="font-medium">YesOnUs is built to support your work, not replace it.</span>
</p>
<div className="grid md:grid-cols-2 gap-8 mb-8">
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-stone-600">
<span className="text-[#6B8E7B] mt-1">•</span>
<span>A safe place to refer patients who need clarity</span>
</li>
<li className="flex items-start gap-2 text-sm text-stone-600">
<span className="text-[#6B8E7B] mt-1">•</span>
<span>No cost to you or your patients</span>
</li>
</ul>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-stone-600">
<span className="text-[#6B8E7B] mt-1">•</span>
<span>Resources that reduce your burden</span>
</li>
<li className="flex items-start gap-2 text-sm text-stone-600">
<span className="text-[#6B8E7B] mt-1">•</span>
<span>Documentation and continuity patients can bring with them</span>
</li>
</ul>
</div>
<p className="text-stone-500 italic serif-font text-lg">
                "You do the human work. We help with the structure."
            </p>
</div>
</section>

<section className="py-20 px-6 border-t border-stone-100">
<div className="max-w-4xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl serif-font text-stone-800 mb-6">How YesOnUs Is Funded</h2>
<div className="grid md:grid-cols-2 gap-10">
<div>
<p className="text-stone-600 mb-4 font-medium">Patients never pay us.</p>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                            YesOnUs is funded through provider-side services that support prepared, informed patients, and medical–dental billing coordination when appropriate.
                        </p>
</div>
<div>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                            If something isn’t right for a patient, we say so.
                            If we can’t help, we don’t pretend we can.
                        </p>
<p className="text-stone-800 font-medium serif-font">Transparency matters here.</p>
</div>
</div>
</div>

<div className="py-12 border-t border-stone-200">
<h2 className="text-3xl serif-font text-stone-800 text-center mb-4">How You Can Start</h2>
<p className="text-stone-500 text-center mb-10 max-w-lg mx-auto">
                    There’s no single “right” entry point. Choose what fits your situation.
                </p>
<div className="grid md:grid-cols-3 gap-6 text-center">

<a className="group p-6 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200" href="/go">
<div className="mb-4 text-stone-400 group-hover:text-[#6B8E7B] transition-colors">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 mb-2 group-hover:underline decoration-[#6B8E7B] underline-offset-4">I’m a patient or family member</h3>
<span className="text-xs text-stone-400 block mt-2">Find support →</span>
</a>

<a className="group p-6 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200" href="/care">
<div className="mb-4 text-stone-400 group-hover:text-[#6B8E7B] transition-colors">
<iconify-icon icon="solar:heart-angle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 mb-2 group-hover:underline decoration-[#6B8E7B] underline-offset-4">I’m a social worker or advocate</h3>
<span className="text-xs text-stone-400 block mt-2">View resources →</span>
</a>

<a className="group p-6 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200" href="/providers">
<div className="mb-4 text-stone-400 group-hover:text-[#6B8E7B] transition-colors">
<iconify-icon icon="solar:stethoscope-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 mb-2 group-hover:underline decoration-[#6B8E7B] underline-offset-4">I’m a clinician or practice</h3>
<span className="text-xs text-stone-400 block mt-2">Partner with us →</span>
</a>
</div>
<p className="text-center text-sm text-stone-400 mt-8">You’ll be guided without pressure.</p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#F5F4F1]">
<div className="max-w-2xl mx-auto text-center">
<iconify-icon className="text-stone-400 mb-6" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
<h3 className="text-xl serif-font font-medium text-stone-800 mb-6">A Note From the Founders</h3>
<div className="space-y-6 text-stone-600 serif-font text-lg leading-relaxed">
<p>We built YesOnUs because too many people were being asked to make life-altering decisions without clarity, continuity, or support.</p>
<p>The level of care coordination usually reserved for the wealthy should be available to everyone.</p>
<p>This is our way of making that standard —<br/>quietly, responsibly, and at scale.</p>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-white border-t border-stone-200">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-stone-800 font-medium serif-font">YesOnUs</span>
<span className="text-stone-300">|</span>
<span className="text-stone-400 text-sm">Privacy • Transparency • Continuity</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 text-sm text-stone-500">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>555-0123-4567</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<span>care@yesonus.com</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
