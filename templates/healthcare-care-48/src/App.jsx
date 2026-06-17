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



tailwind.config = {
theme: {
extend: {
colors: {
stone: {
50: '#FAFAF9',
100: '#F5F5F4',
200: '#E7E5E4',
300: '#D6D3D1',
400: '#A8A29E',
500: '#78716C',
600: '#57534E',
800: '#292524',
900: '#1C1917',
},
sage: {
500: '#5D7B75', // Muted accent
600: '#4A6761',
50: '#F2F6F5',
}
},
fontFamily: {
display: ['"Inter Tight"', 'sans-serif'],
body: ['"Inter"', 'sans-serif'],
serif: ['"Lora"', 'serif'],
},
letterSpacing: {
tight: '-0.025em',
},
}
}
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
      

<nav className="w-full pt-8 pb-4 px-6 md:px-12 mb-12 md:mb-20">
<div className="max-w-4xl mx-auto flex justify-between items-center">
<span className="font-display font-semibold text-xl tracking-tight text-stone-900">YesOnUs</span>
</div>
</nav>

<section className="px-6 md:px-12 mb-24 md:mb-32">
<div className="max-w-3xl mx-auto">
<h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1] mb-8">
                Healthcare is complicated.<br/>
<span className="text-stone-500">You shouldn’t have to navigate it alone.</span>
</h1>
<div className="max-w-xl">
<p className="font-body text-lg md:text-xl text-stone-600 leading-relaxed">
                    YesOnUs is a patient-first coordination and planning layer. 
                    We help patients, families, and care teams make sense of care, coverage, and next steps — without pressure, upselling, or judgment.
                </p>
</div>

</div>
</section>

<section className="px-6 md:px-12 mb-24">
<div className="max-w-3xl mx-auto">
<h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-8">If You’re Here, It’s Usually Because…</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
<div className="bg-white p-6 rounded-lg border border-stone-200">
<p className="font-body text-stone-700">You or someone you love needs care.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-stone-200">
<p className="font-body text-stone-700">You’re trying to understand options, bills, or next steps.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-stone-200">
<p className="font-body text-stone-700">You want clarity before, during, or after treatment.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-stone-200">
<p className="font-body text-stone-700">You’re doing everything you can — and it still feels heavy.</p>
</div>
</div>
<div className="border-l-2 border-sage-500 pl-6 py-2">
<p className="font-display text-lg text-stone-900">That’s normal.</p>
<p className="font-body text-stone-500">The system wasn’t built to make this easy.</p>
</div>
</div>
</section>

<section className="bg-white py-20 px-6 md:px-12 border-y border-stone-200">
<div className="max-w-3xl mx-auto">
<h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-6">What YesOnUs Is</h2>
<p className="font-body text-lg text-stone-600 leading-relaxed mb-12 max-w-2xl">
                YesOnUs exists to give people back clarity, continuity, and control — without telling them what to do.
            </p>
<div className="mb-16">
<p className="font-display font-medium text-stone-900 mb-6">We help patients:</p>
<ul className="space-y-4">
<li className="flex gap-4 items-start">
<iconify-icon className="text-sage-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-stone-600">understand their care options</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-sage-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-stone-600">document what matters to them</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-sage-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-stone-600">get support when dental and medical care overlap</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-sage-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-stone-600">navigate billing questions that are often ignored or mishandled</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-sage-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-stone-600">create continuity between visits, providers, and decisions</span>
</li>
</ul>
</div>

<div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
<div className="flex flex-col gap-2">
<iconify-icon className="text-stone-400" icon="solar:forbidden-circle-linear" width="24"></iconify-icon>
<span className="font-body text-sm text-stone-600">We don’t diagnose.</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-stone-400" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="font-body text-sm text-stone-600">We don’t replace providers.</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-stone-400" icon="solar:hand-stars-linear" width="24"></iconify-icon>
<span className="font-body text-sm text-stone-600">We don’t push treatments.</span>
</div>
</div>
<p className="font-display text-lg text-stone-900 border-t border-stone-200 pt-6">We help people think clearly — and be heard.</p>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24">
<div className="max-w-3xl mx-auto">
<h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-8">Why This Matters</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
<div>
<p className="font-body text-stone-600 mb-4">Most care decisions are made from:</p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-stone-500 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> stress
                        </li>
<li className="flex items-center gap-3 text-stone-500 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> short visits
                        </li>
<li className="flex items-center gap-3 text-stone-500 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> incomplete information
                        </li>
<li className="flex items-center gap-3 text-stone-500 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> memory, not records
                        </li>
</ul>
</div>
<div>
<p className="font-body text-stone-600 leading-relaxed">
                        Patients are asked to explain themselves again and again.<br/>
                        Care teams are forced to work without context.<br/>
                        Families are left trying to piece everything together.
                    </p>
</div>
</div>
<div className="bg-white p-8 border-l-4 border-sage-500 shadow-sm">
<h3 className="font-display text-xl text-stone-900 mb-4">YesOnUs helps change that.</h3>
<p className="font-body text-stone-600 mb-4">We support the creation of:</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3 text-stone-600">
<iconify-icon className="text-sage-500" icon="solar:document-text-linear" width="18"></iconify-icon>
                        clear records of symptoms, preferences, and outcomes
                    </li>
<li className="flex items-center gap-3 text-stone-600">
<iconify-icon className="text-sage-500" icon="solar:calendar-date-linear" width="18"></iconify-icon>
                        pre-visit and post-visit logs
                    </li>
<li className="flex items-center gap-3 text-stone-600">
<iconify-icon className="text-sage-500" icon="solar:link-circle-linear" width="18"></iconify-icon>
                        shared context that follows the patient — not the provider
                    </li>
</ul>
<p className="font-display text-lg text-stone-900">
                    Better context leads to better conversations.<br/>
<span className="text-stone-500">Better conversations lead to better care.</span>
</p>
</div>
</div>
</section>

<section className="bg-sage-50 py-20 px-6 md:px-12">
<div className="max-w-3xl mx-auto">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-sage-600" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest text-sage-600">Professional Partners</span>
</div>
<h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-6">For Social Workers, Nurses, and Care Advocates</h2>
<p className="font-body text-lg text-stone-600 mb-8 leading-relaxed">
                You carry the hardest parts of care — often without tools, time, or recognition.
                <br/>YesOnUs is built to support your work, not replace it.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div>
<h3 className="font-display font-medium text-stone-900 mb-4">We provide:</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-stone-600 text-sm">
<span className="mt-1.5 w-1 h-1 bg-sage-500 rounded-full"></span>
                            a safe place to refer patients who need clarity or help navigating care
                        </li>
<li className="flex items-start gap-3 text-stone-600 text-sm">
<span className="mt-1.5 w-1 h-1 bg-sage-500 rounded-full"></span>
                            no cost to you or your patients
                        </li>
<li className="flex items-start gap-3 text-stone-600 text-sm">
<span className="mt-1.5 w-1 h-1 bg-sage-500 rounded-full"></span>
                            resources that reduce your burden instead of adding to it
                        </li>
<li className="flex items-start gap-3 text-stone-600 text-sm">
<span className="mt-1.5 w-1 h-1 bg-sage-500 rounded-full"></span>
                            documentation and continuity patients can bring with them
                        </li>
</ul>
</div>
<div className="flex flex-col justify-center border-l border-sage-200 pl-8">
<p className="font-display text-xl text-stone-800 mb-2">You do the human work.</p>
<p className="font-body text-stone-500">We help with the structure.</p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 border-b border-stone-200">
<div className="max-w-3xl mx-auto">
<h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-8">How YesOnUs Is Funded</h2>
<div className="bg-white border border-stone-200 rounded-lg p-8 mb-8">
<p className="font-display text-xl text-stone-900 mb-6">Patients never pay us.</p>
<p className="font-body text-stone-600 mb-4">YesOnUs is funded through:</p>
<ul className="space-y-2 mb-8 ml-1">
<li className="flex items-center gap-3 text-stone-600">
<iconify-icon className="text-stone-400" icon="solar:wallet-linear" width="20"></iconify-icon>
                        provider-side services that support prepared, informed patients
                    </li>
<li className="flex items-center gap-3 text-stone-600">
<iconify-icon className="text-stone-400" icon="solar:file-check-linear" width="20"></iconify-icon>
                        medical–dental billing coordination when appropriate
                    </li>
</ul>
<div className="pt-6 border-t border-stone-100 text-stone-600 text-sm">
<p className="mb-2">If something isn’t right for a patient, we say so.</p>
<p className="mb-2">If we can’t help, we don’t pretend we can.</p>
<p className="font-medium text-stone-800 mt-4">Transparency matters here.</p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 bg-stone-50">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-4">How You Can Start</h2>
<p className="font-body text-stone-600">There’s no single “right” entry point. Choose what fits your situation.</p>
</div>
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group bg-white p-8 rounded-lg border border-stone-200 hover:border-sage-500 hover:shadow-md transition-all text-center flex flex-col items-center" href="/go">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-sage-50 transition-colors">
<iconify-icon className="text-stone-500 group-hover:text-sage-600" icon="solar:user-circle-linear" width="28"></iconify-icon>
</div>
<span className="font-display font-medium text-stone-900 mb-2">I’m a patient or<br/>family member</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 group-hover:text-sage-600 mt-auto pt-4">Start Here →</span>
</a>

<a className="group bg-white p-8 rounded-lg border border-stone-200 hover:border-sage-500 hover:shadow-md transition-all text-center flex flex-col items-center" href="/care">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-sage-50 transition-colors">
<iconify-icon className="text-stone-500 group-hover:text-sage-600" icon="solar:hands-linear" width="28"></iconify-icon>
</div>
<span className="font-display font-medium text-stone-900 mb-2">I’m a social worker or<br/>care provider</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 group-hover:text-sage-600 mt-auto pt-4">Resources →</span>
</a>

<a className="group bg-white p-8 rounded-lg border border-stone-200 hover:border-sage-500 hover:shadow-md transition-all text-center flex flex-col items-center" href="/providers">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-sage-50 transition-colors">
<iconify-icon className="text-stone-500 group-hover:text-sage-600" icon="solar:stethoscope-linear" width="28"></iconify-icon>
</div>
<span className="font-display font-medium text-stone-900 mb-2">I’m a clinician or<br/>practice</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 group-hover:text-sage-600 mt-auto pt-4">Connect →</span>
</a>
</div>
<div className="text-center mt-12">
<p className="font-body text-stone-500 italic">You’ll be guided without pressure.</p>
</div>
</section>

<section className="px-6 md:px-12 py-24 bg-white border-t border-stone-200">
<div className="max-w-2xl mx-auto">
<div className="mb-6">
<span className="font-display font-medium text-sm uppercase tracking-wider text-stone-400">A Note From the Founders</span>
</div>
<div className="prose prose-stone prose-lg">
<p className="font-serif text-stone-700 italic leading-relaxed mb-6">
                    "We built YesOnUs because too many people were being asked to make life-altering decisions without clarity, continuity, or support.
                </p>
<p className="font-serif text-stone-700 italic leading-relaxed mb-6">
                    The level of care coordination usually reserved for the wealthy should be available to everyone.
                </p>
<p className="font-serif text-stone-700 italic leading-relaxed">
                    This is our way of making that standard —<br/>
                    quietly, responsibly, and at scale."
                </p>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 py-12 px-6 md:px-12">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex flex-col gap-2">
<span className="font-display font-bold text-stone-900">YesOnUs</span>
<div className="flex gap-4 text-xs font-mono text-stone-500 uppercase tracking-wide">
<span>Privacy</span>
<span>Transparency</span>
<span>Continuity</span>
</div>
</div>
<div className="text-stone-600 text-sm font-body">
                Contact: <a className="border-b border-stone-300 hover:border-stone-800 transition-colors pb-0.5" href="#">help@yesonus.org</a> | <span className="tracking-wide">1-800-555-0123</span>
</div>
</div>
</footer>

    </>
  );
}
