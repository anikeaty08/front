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



        function toggleFormSections() {
            const selectedStage = document.querySelector('input[name="project_stage"]:checked');
            const dynamicContainer = document.getElementById('dynamicFormContainer');
            const fullQuestionnaire = document.getElementById('fullQuestionnaireSection');

            if (selectedStage) {
                // Always show the container once a choice is made
                dynamicContainer.classList.remove('hidden');
                
                // Determine if we show the full section based on value
                if (selectedStage.value === 'full') {
                    fullQuestionnaire.classList.remove('hidden');
                } else {
                    fullQuestionnaire.classList.add('hidden');
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
      
<div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 sm:p-12">

<div className="mb-12">
<span className="text-sm font-medium tracking-tighter text-blue-600 uppercase">INTAKE</span>
</div>
<form className="space-y-10" id="intakeForm" onsubmit="event.preventDefault();">

<div className="space-y-6">
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">What stage are you at?</h1>
<div className="grid sm:grid-cols-2 gap-4">

<label className="relative flex flex-col cursor-pointer group">
<input className="peer hidden" name="project_stage" onchange="toggleFormSections()" type="radio" value="preview"/>
<div className="h-full border border-gray-200 rounded-xl p-6 group-hover:border-gray-300 group-hover:bg-gray-50/50 peer-checked:border-blue-600 peer-checked:bg-blue-50/40 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-gray-900 mb-1.5">Free preview</h3>
<p className="text-sm text-gray-500 leading-relaxed">Get a basic concept using just your core business details.</p>
</div>
</label>

<label className="relative flex flex-col cursor-pointer group">
<input className="peer hidden" name="project_stage" onchange="toggleFormSections()" type="radio" value="full"/>
<div className="h-full border border-gray-200 rounded-xl p-6 group-hover:border-gray-300 group-hover:bg-gray-50/50 peer-checked:border-blue-600 peer-checked:bg-blue-50/40 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-gray-900 mb-1.5">Full build</h3>
<p className="text-sm text-gray-500 leading-relaxed">Ready to start? Fill out the comprehensive questionnaire.</p>
</div>
</label>
</div>
</div>

<div className="hidden space-y-10 pt-4 border-t border-gray-100" id="dynamicFormContainer">

<div className="space-y-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">1. Business Information</h2>
<div className="space-y-5">
<div className="grid sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700" htmlFor="fullName">Full Name</label>
<input className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-colors placeholder:text-gray-400 bg-white" id="fullName" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700" htmlFor="email">Work Email</label>
<input className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-colors placeholder:text-gray-400 bg-white" id="email" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700" htmlFor="industry">Industry</label>
<div className="relative">
<select className="w-full border border-gray-200 rounded-lg pl-3.5 pr-10 py-2.5 text-sm text-gray-900 appearance-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-colors bg-white cursor-pointer" id="industry">
<option disabled="" selected="" value="">Select an industry...</option>
<option value="saas">SaaS / Software</option>
<option value="ecommerce">E-commerce</option>
<option value="agency">Agency / Services</option>
<option value="healthcare">Healthcare</option>
<option value="other">Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6 pt-4 border-t border-gray-100" id="fullQuestionnaireSection">
<h2 className="text-xl font-medium tracking-tight text-gray-900">2. Project Details</h2>
<div className="space-y-6">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700" htmlFor="description">Project Description</label>
<textarea className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-colors placeholder:text-gray-400 resize-y bg-white" id="description" placeholder="Tell us about the problem you are trying to solve..." rows="4"></textarea>
</div>
<div className="space-y-3">
<label className="block text-sm font-medium text-gray-700">Estimated Budget</label>
<div className="space-y-2.5">

<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" name="budget" type="radio" value="small"/>
<div className="absolute inset-0 rounded-full border border-gray-300 peer-checked:border-blue-600 peer-checked:border-[4.5px] transition-all bg-white"></div>
</div>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Under $5k</span>
</label>

<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" name="budget" type="radio" value="medium"/>
<div className="absolute inset-0 rounded-full border border-gray-300 peer-checked:border-blue-600 peer-checked:border-[4.5px] transition-all bg-white"></div>
</div>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">$5k - $15k</span>
</label>

<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" name="budget" type="radio" value="large"/>
<div className="absolute inset-0 rounded-full border border-gray-300 peer-checked:border-blue-600 peer-checked:border-[4.5px] transition-all bg-white"></div>
</div>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">$15k+</span>
</label>
</div>
</div>
<div className="pt-2">

<label className="flex items-start cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 shrink-0">
<input className="peer sr-only" name="urgent" type="checkbox"/>
<div className="absolute inset-0 rounded border border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors bg-white"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity z-10" icon="solar:check-read-linear" style={{fontSize: '12px', strokeWidth: '2'}}></iconify-icon>
</div>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">This project is urgent and needs to be completed within 30 days.</span>
</label>
</div>
</div>
</div>

<div className="pt-6">
<button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 outline-none" type="submit">
                        Submit Request
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</form>
</div>


    </>
  );
}
