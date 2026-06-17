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



        function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.accordion-icon');
            const isExpanded = content.classList.contains('grid-rows-[1fr]');

            const siblings = button.closest('.space-y-4').querySelectorAll('.accordion-content');
            siblings.forEach(sib => {
                if (sib !== content) {
                    sib.classList.remove('grid-rows-[1fr]');
                    sib.classList.add('grid-rows-[0fr]');
                    sib.previousElementSibling.querySelector('.accordion-icon').classList.remove('rotate-180');
                }
            });

            if (isExpanded) {
                content.classList.remove('grid-rows-[1fr]');
                content.classList.add('grid-rows-[0fr]');
                icon.classList.remove('rotate-180');
            } else {
                content.classList.remove('grid-rows-[0fr]');
                content.classList.add('grid-rows-[1fr]');
                icon.classList.add('rotate-180');
            }
        }

        function printSection(button) {
            const section = button.closest('section');
            const printArea = document.getElementById('print-area');
            
            // Clone the section for printing
            const clone = section.cloneNode(true);
            
            // Remove excluded elements (like Video section)
            const excludes = clone.querySelectorAll('.exclude-print');
            excludes.forEach(el => el.remove());
            
            // Format clone: adjust margins/padding for a cleaner print page
            clone.classList.remove('py-20', 'md:py-24', 'pb-20', 'md:pb-24');
            clone.classList.add('py-4');
            
            // Remove the print buttons inside the clone
            const printBtns = clone.querySelectorAll('.print-btn');
            printBtns.forEach(btn => btn.remove());
            
            // Force expand all accordions so the content is visible in the printout
            const accordions = clone.querySelectorAll('.accordion-content');
            accordions.forEach(acc => {
                acc.classList.remove('grid-rows-[0fr]');
                acc.classList.add('grid-rows-[1fr]');
                // Ensure no hidden overflow affects the printed view
                const innerDiv = acc.querySelector('.overflow-hidden');
                if (innerDiv) {
                    innerDiv.classList.remove('overflow-hidden');
                }
            });
            
            // Clean up interactive UI elements from clone
            const icons = clone.querySelectorAll('.accordion-icon');
            icons.forEach(icon => icon.remove());
            
            // Convert accordion buttons to plain divs to remove button styling in print
            // while preserving the print: helper classes attached to the button
            const buttons = clone.querySelectorAll('button');
            buttons.forEach(btn => {
                const div = document.createElement('div');
                div.innerHTML = btn.innerHTML;
                div.className = btn.className.replace('hover:shadow-md', '').replace('focus:outline-none', '');
                btn.parentNode.replaceChild(div, btn);
            });

            // Set clone to print area and print
            printArea.innerHTML = '';
            printArea.appendChild(clone);
            
            window.print();
            
            // Small delay before cleanup
            setTimeout(() => {
                printArea.innerHTML = '';
            }, 500);
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
      

<div className="print:hidden flex flex-col min-h-screen">

<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-3xl text-blue-600" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-2xl font-medium tracking-tight text-slate-900">Erivet</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-slate-600 hover:text-blue-600 transition-colors" href="#">Services</a>
<a className="text-sm font-normal text-slate-600 hover:text-blue-600 transition-colors" href="#">About Us</a>
<a className="text-sm font-normal text-slate-600 hover:text-blue-600 transition-colors" href="#">Team</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 text-sm font-normal text-slate-600">
<iconify-icon className="text-base" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>+372 600 6262</span>
</div>
<a className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-normal text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-sm" href="#">
                        Contact Us
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</header>
<main className="flex-grow pb-24">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-10">
<div className="bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border border-slate-100/50">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-blue-700 text-sm font-normal mb-8">
<iconify-icon className="text-base" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Client Guide
                        </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6">Patient Instructions</h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Important information to help you prepare your pet for procedures, surgery, and rehabilitation at Erivet. Following these guidelines helps ensure the safest treatment and faster recovery.
                        </p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
<div className="mb-10 print:mb-4 relative flex flex-col items-center text-center">
<div className="w-full flex justify-center items-center mb-6 print:mb-2 relative">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-normal">
<iconify-icon className="text-base" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}}></iconify-icon> DIAGNOSTICS
                        </span>
<button className="print-btn absolute right-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-blue-600 hover:shadow transition-all text-sm font-medium focus:outline-none" onclick="printSection(this)">
<iconify-icon className="text-lg" icon="solar:printer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline">Print Section</span>
</button>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6 print:mb-2">Diagnostic Procedures Under Anesthesia</h2>
<p className="text-lg text-slate-600 leading-relaxed print:text-base print:leading-normal">
                        Many diagnostic procedures require general anesthesia. Please follow the instructions carefully before arriving.
                    </p>
</div>
<div className="space-y-4 print:space-y-2">

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group print:border-none print:rounded-none print:shadow-none print:bg-transparent">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors print:p-0 print:mb-1" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4 print:gap-2">
<div className="w-10 h-10 bg-blue-100/50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors print:bg-transparent print:w-auto print:h-auto print:rounded-none">
<iconify-icon className="text-xl" icon="solar:scanner-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 print:text-base">1. MRI Preparation</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform rotate-180 accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[1fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14 print:p-0 print:ml-6">
<ul className="space-y-4 print:space-y-0 text-sm md:text-base">
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Fasting guidelines:</span> No food for 12 hours prior to the procedure.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Water intake:</span> Allow free access to water up until arrival.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:pills-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Medications:</span> Continue regular medication unless instructed otherwise by our team.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Health information:</span> Please inform us of any recent changes in your pet's health.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group print:border-none print:rounded-none print:shadow-none print:bg-transparent">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors print:p-0 print:mb-1" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4 print:gap-2">
<div className="w-10 h-10 bg-blue-100/50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors print:bg-transparent print:w-auto print:h-auto print:rounded-none">
<iconify-icon className="text-xl" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 print:text-base">2. What to Bring to the Clinic</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14 print:p-0 print:ml-6">
<ul className="space-y-4 print:space-y-0 text-sm md:text-base">
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Previous test results and imaging.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Complete medical history from your primary vet.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:user-id-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Your identification and pet passport/documents.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group print:border-none print:rounded-none print:shadow-none print:bg-transparent">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors print:p-0 print:mb-1" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4 print:gap-2">
<div className="w-10 h-10 bg-blue-100/50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors print:bg-transparent print:w-auto print:h-auto print:rounded-none">
<iconify-icon className="text-xl" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 print:text-base">3. Day of Procedure Overview</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14 print:p-0 print:ml-6">
<ul className="space-y-4 print:space-y-0 text-sm md:text-base">
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Duration:</span> The entire process typically takes 3-4 hours.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Anesthesia:</span> Carefully monitored by specialized anesthesiologists.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Pickup info:</span> We will call you as soon as your pet is awake and ready to go home.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
<div className="mb-10 print:mb-4 relative flex flex-col items-center text-center">
<div className="w-full flex justify-center items-center mb-6 print:mb-2 relative">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-normal">
<iconify-icon className="text-base" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon> SURGERY
                        </span>
<button className="print-btn absolute right-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-blue-600 hover:shadow transition-all text-sm font-medium focus:outline-none" onclick="printSection(this)">
<iconify-icon className="text-lg" icon="solar:printer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline">Print Section</span>
</button>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6 print:mb-2">Surgery Preparation and Recovery</h2>
<p className="text-lg text-slate-600 leading-relaxed print:text-base print:leading-normal">
                        Proper preparation and careful wound care are essential for a safe procedure and smooth recovery.
                    </p>
</div>
<div className="space-y-4 print:space-y-2">

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group print:border-none print:rounded-none print:shadow-none print:bg-transparent">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors print:p-0 print:mb-1" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4 print:gap-2">
<div className="w-10 h-10 bg-blue-100/50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors print:bg-transparent print:w-auto print:h-auto print:rounded-none">
<iconify-icon className="text-xl" icon="solar:notes-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 print:text-base">1. Preparing for Surgery</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform rotate-180 accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[1fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14 print:p-0 print:ml-6">
<ul className="space-y-4 print:space-y-0 text-sm md:text-base">
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:bath-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Ensure your pet is clean before arriving.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:walking-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Walk your pet shortly before the visit.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Follow the 12-hour fasting instructions strictly.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Bring any necessary medical information requested.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group print:border-none print:rounded-none print:shadow-none print:bg-transparent">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors print:p-0 print:mb-1" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4 print:gap-2">
<div className="w-10 h-10 bg-amber-100/50 text-amber-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors print:bg-transparent print:w-auto print:h-auto print:rounded-none">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 print:text-base">2. Postoperative Wound Care</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14 print:p-0 print:ml-6">
<ul className="space-y-4 print:space-y-0 text-sm md:text-base">
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-amber-500 mt-0.5 text-lg shrink-0" icon="solar:shield-cross-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Prevent licking:</span> Keep the recovery collar on at all times.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-amber-500 mt-0.5 text-lg shrink-0" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Keep dry:</span> Ensure the wound remains clean and completely dry.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-amber-500 mt-0.5 text-lg shrink-0" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Monitor daily:</span> Check stitches for excessive redness, swelling, or discharge.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-amber-500 mt-0.5 text-lg shrink-0" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Open stitches:</span> If stitches open, cover the area lightly and contact us immediately.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group print:border-none print:rounded-none print:shadow-none print:bg-transparent">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors print:p-0 print:mb-1" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4 print:gap-2">
<div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors print:bg-transparent print:w-auto print:h-auto print:rounded-none">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 print:text-base">3. When to Contact the Clinic</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14 print:p-0 print:ml-6">
<ul className="space-y-4 print:space-y-0 text-sm md:text-base">
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-red-500 mt-0.5 text-lg shrink-0" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Signs of complications:</span> Severe lethargy, refusal to drink, vomiting, or pale gums.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-red-500 mt-0.5 text-lg shrink-0" icon="solar:siren-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Emergency cases:</span> Call us or the nearest 24/7 animal hospital without delay.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
<div className="mb-10 print:mb-4 relative flex flex-col items-center text-center">
<div className="w-full flex justify-center items-center mb-6 print:mb-2 relative">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-normal">
<iconify-icon className="text-base" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon> REHABILITATION
                        </span>
<button className="print-btn absolute right-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-blue-600 hover:shadow transition-all text-sm font-medium focus:outline-none" onclick="printSection(this)">
<iconify-icon className="text-lg" icon="solar:printer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline">Print Section</span>
</button>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6 print:mb-2">Physiotherapy &amp; Rehabilitation</h2>
<p className="text-lg text-slate-600 leading-relaxed print:text-base print:leading-normal">
                        Consistent therapy helps pets recover strength and mobility. Follow these guidelines for successful rehabilitation.
                    </p>
</div>
<div className="space-y-4 print:space-y-2">

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group print:border-none print:rounded-none print:shadow-none print:bg-transparent">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors print:p-0 print:mb-1" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4 print:gap-2">
<div className="w-10 h-10 bg-blue-100/50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors print:bg-transparent print:w-auto print:h-auto print:rounded-none">
<iconify-icon className="text-xl" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 print:text-base">1. Water Treadmill Therapy</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform rotate-180 accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[1fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14 print:p-0 print:ml-6">
<ul className="space-y-4 print:space-y-0 text-sm md:text-base">
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:bath-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Ensure the pet is fully clean prior to the session.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:walking-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Walk your pet briefly before arriving for therapy.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:bag-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Bring specialized diapers if required for your pet.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-blue-500 mt-0.5 text-lg shrink-0" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600">Our team will guide you on what to expect during the session.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group print:border-none print:rounded-none print:shadow-none print:bg-transparent">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors print:p-0 print:mb-1" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4 print:gap-2">
<div className="w-10 h-10 bg-blue-100/50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors print:bg-transparent print:w-auto print:h-auto print:rounded-none">
<iconify-icon className="text-xl" icon="solar:dumbbell-large-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 print:text-base">2. Physiotherapy Exercises</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14 print:p-0 print:ml-6">
<ul className="space-y-4 print:space-y-0 text-sm md:text-base">
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Home exercises:</span> Perform the prescribed movements gently.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Frequency:</span> Usually 2-3 times daily, or as instructed.</span>
</li>
<li className="flex items-start gap-3 print:gap-2">
<iconify-icon className="text-slate-400 mt-0.5 text-lg shrink-0" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-600"><span className="font-medium text-slate-800">Recovery tips:</span> Keep sessions positive and reward your pet.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden group exclude-print print:hidden">
<button className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-blue-100/50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">3. Video Instructions</span>
</div>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 transform accordion-icon" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-all duration-300 accordion-content">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-6 pt-1 sm:ml-14">
<p className="text-slate-600 mb-4">Watch our specialized demonstrations to ensure you perform home care routines correctly.</p>
<div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm hover:border-slate-300 transition-colors cursor-pointer group/video">
<div className="text-center flex flex-col items-center">
<div className="w-12 h-12 bg-blue-50 group-hover/video:bg-blue-100 transition-colors rounded-full flex items-center justify-center shadow-sm mb-3 text-blue-600">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-500 font-medium">Watch Therapy Guide</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-300 rounded-t-[2.5rem] md:rounded-t-[3rem] mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
<div className="space-y-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-3xl" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-2xl font-medium tracking-tight">Erivet</span>
</div>
<p className="text-lg text-slate-400">Specialized veterinary care for your beloved pets.</p>
<div className="flex items-center gap-2 text-white font-normal">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg">+372 600 6262</span>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight text-lg">Services</h4>
<ul className="space-y-4">
<li><a className="text-lg hover:text-white transition-colors" href="#">Neurology</a></li>
<li><a className="text-lg hover:text-white transition-colors" href="#">Orthopedics</a></li>
<li><a className="text-lg hover:text-white transition-colors" href="#">Cardiology</a></li>
<li><a className="text-lg hover:text-white transition-colors" href="#">Rehabilitation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight text-lg">For Owners</h4>
<ul className="space-y-4">
<li><a className="text-lg hover:text-white transition-colors" href="#">Prices</a></li>
<li><a className="text-lg text-white font-normal transition-colors" href="#">Instructions</a></li>
<li><a className="text-lg hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight text-lg">Social</h4>
<ul className="space-y-4">
<li>
<a className="flex items-center gap-2 text-lg hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:earth-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Facebook
                                </a>
</li>
<li>
<a className="flex items-center gap-2 text-lg hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Instagram
                                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">© 2024 Erivet. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>

<div className="hidden print:block w-full bg-white px-4 py-8 max-w-3xl mx-auto" id="print-area"></div>



    </>
  );
}
