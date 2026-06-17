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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/80 border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white">
<iconify-icon icon="solar:book-2-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">Lecturio<span className="ml-0.5 text-blue-600">AI</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition-colors hover:text-blue-600" href="#features">Capabilities</a>
<a className="text-sm font-medium transition-colors hover:text-blue-600" href="#institutions">Institutions</a>
<a className="text-sm font-medium transition-colors hover:text-blue-600" href="#pricing">Enterprise</a>
<a className="px-4 py-2 text-sm font-medium rounded-md transition-colors shadow-sm text-white bg-blue-600 hover:bg-blue-700 shadow-blue-600/20" href="#demo">
                        Request Access
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden hero-gradient">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 bg-blue-50 border-blue-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wide text-blue-700">New: USMLE Step 1 Integration</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-tight text-slate-900">
                Automate Medical Curriculum<br className="hidden sm:block"/> Planning with Precision AI
            </h1>
<p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed text-slate-500">
                Generate LCME-accredited lesson plans, learning objectives, and assessment items in seconds. Designed exclusively for medical faculty and administration.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium rounded-lg transition-all shadow-md flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 shadow-blue-600/20" href="#demo">
                    Start Generating
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium border rounded-lg transition-all flex items-center justify-center gap-2 bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300" href="#how-it-works">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch Workflow
                </a>
</div>

<div className="relative max-w-5xl mx-auto rounded-xl shadow-2xl border overflow-hidden ring-1 bg-white border-slate-200/60 ring-slate-900/5">
<div className="border-b p-4 flex items-center gap-4 border-slate-100 bg-slate-50/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-cyan-400/80"></div>
<div className="w-3 h-3 rounded-full bg-blue-400/80"></div>
<div className="w-3 h-3 rounded-full bg-blue-400/80"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 border rounded-md text-xs font-medium shadow-sm bg-white text-slate-500 border-slate-200">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> lecturio.com/ai-generator
                        </div>
</div>
</div>
<div className="grid grid-cols-12 divide-x h-[400px] divide-slate-100">

<div className="col-span-3 p-4 hidden md:block text-left bg-slate-50/30">
<div className="text-xs font-medium uppercase tracking-wider mb-4 text-slate-400">Input Parameters</div>
<div className="space-y-4">
<div className="p-3 rounded-lg border shadow-sm bg-white border-slate-200">
<label className="block text-xs mb-1 text-slate-500">Topic</label>
<div className="text-sm font-medium text-slate-800">Cardiovascular Physiology</div>
</div>
<div className="p-3 rounded-lg border shadow-sm bg-white border-slate-200">
<label className="block text-xs mb-1 text-slate-500">Standard</label>
<div className="text-sm font-medium text-slate-800">USMLE Step 1</div>
</div>
<div className="p-3 rounded-lg border shadow-sm bg-white border-slate-200">
<label className="block text-xs mb-1 text-slate-500">Duration</label>
<div className="text-sm font-medium text-slate-800">60 Minutes</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-8 text-left relative bg-white">

<div className="absolute top-8 right-8 text-xs font-medium px-2 py-1 rounded border flex items-center gap-1 text-slate-600 bg-slate-50 border-slate-100">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Generated in 4.2s
                        </div>
<h3 className="text-xl font-medium mb-2 text-slate-900">Lesson Plan: Cardiac Output &amp; Regulation</h3>
<p className="text-sm mb-6 max-w-2xl text-slate-500">Based on <span className="px-1 rounded text-blue-600 bg-blue-50">Guyton and Hall</span> and aligned with <span className="px-1 rounded text-blue-600 bg-blue-50">NBME Standards</span>.</p>
<div className="space-y-6">
<div>
<h4 className="text-sm font-medium mb-3 flex items-center gap-2 text-slate-900">
<iconify-icon className="text-blue-600" icon="solar:target-linear"></iconify-icon> Learning Objectives
                                </h4>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:check-square-linear"></iconify-icon>
                                        Define cardiac output, stroke volume, and heart rate relationships.
                                    </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:check-square-linear"></iconify-icon>
                                        Analyze Frank-Starling curves under preload variations.
                                    </li>
</ul>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div>
<h4 className="text-sm font-medium mb-3 flex items-center gap-2 text-slate-900">
<iconify-icon className="text-blue-600" icon="solar:document-text-linear"></iconify-icon> Suggested Quiz Items
                                </h4>
<div className="p-3 rounded-lg border text-sm italic bg-slate-50 border-slate-100 text-slate-600">
                                    "A 65-year-old male presents with..."
                                </div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent from-white"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm font-medium mb-8 uppercase tracking-widest text-slate-500">Trusted by 250+ Medical Institutions Worldwide</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex justify-center text-lg font-semibold font-serif tracking-tight text-slate-800">HARVARD</div>
<div className="flex justify-center text-lg font-semibold tracking-tighter text-slate-800">Yale <span className="font-light">Medicine</span></div>
<div className="flex justify-center text-lg font-bold tracking-tight text-slate-800">JOHNS HOPKINS</div>
<div className="flex justify-center text-lg font-serif italic text-slate-800">Charité</div>
<div className="flex justify-center text-lg font-medium tracking-tight text-slate-800">UCL Medical</div>
<div className="flex justify-center text-lg font-bold text-slate-800">STANFORD</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-slate-900">Engineered for Academic Rigor</h2>
<p className="text-lg max-w-2xl text-slate-500">Our AI engine is trained on high-yield medical textbooks, Qbank data, and accredited curricular standards.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/30 bg-slate-50 border-slate-100">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform bg-white text-blue-600 border-slate-200">
<iconify-icon icon="solar:diploma-verified-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-slate-900">Accreditation Ready</h3>
<p className="text-sm leading-relaxed text-slate-600">
                        Automatically map lesson content to LCME, ACGME, and GMC competencies. Generate documentation for accreditation reviews instantly.
                    </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/30 bg-slate-50 border-slate-100">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform bg-white text-blue-600 border-slate-200">
<iconify-icon icon="solar:library-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-slate-900">Resource Integration</h3>
<p className="text-sm leading-relaxed text-slate-600">
                        Connects proprietary university lectures with Lecturio’s vast video library and 3D anatomy models to create rich, multi-modal lesson plans.
                    </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/30 bg-slate-50 border-slate-100">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform bg-white text-blue-600 border-slate-200">
<iconify-icon icon="solar:user-plus-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-slate-900">Assessment Generation</h3>
<p className="text-sm leading-relaxed text-slate-600">
                        Create formative and summative assessment items, including clinical vignettes, based on the specific learning objectives of the day.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden text-white bg-slate-900" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">From Keyword to Curriculum in Three Steps</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-blue-500 bg-blue-500/10 flex items-center justify-center text-sm font-medium text-blue-400">1</div>
<div className="h-full w-px my-2 bg-slate-800"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-medium mb-2 text-slate-100">Define Scope &amp; Objectives</h3>
<p className="text-sm leading-relaxed text-slate-400">Input your topic (e.g., "Renal Pharmacology"), target student year, and specific competencies required.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium border-slate-700 bg-slate-800 text-slate-300">2</div>
<div className="h-full w-px my-2 bg-slate-800"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-medium mb-2 text-slate-100">AI Curriculum Synthesis</h3>
<p className="text-sm leading-relaxed text-slate-400">Our model analyzes 10,000+ medical concepts to structure a logical flow, integrating Lecturio videos and recall questions.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium border-slate-700 bg-slate-800 text-slate-300">3</div>
</div>
<div>
<h3 className="text-lg font-medium mb-2 text-slate-100">Export &amp; Integrate</h3>
<p className="text-sm leading-relaxed text-slate-400">Export directly to your LMS (Canvas, Blackboard, Moodle) or as a formatted PDF syllabus document.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
<div className="relative border rounded-xl p-6 shadow-2xl bg-slate-800 border-slate-700">
<div className="flex items-center justify-between mb-6 border-b pb-4 border-slate-700">
<div className="text-sm font-medium text-slate-300">Generated Output</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-slate-600"></span>
<span className="w-2 h-2 rounded-full bg-slate-600"></span>
</div>
</div>
<div className="space-y-3">
<div className="h-2 rounded w-3/4 bg-slate-700"></div>
<div className="h-2 rounded w-1/2 bg-slate-700"></div>
<div className="h-2 rounded w-5/6 bg-slate-700"></div>
<div className="mt-4 p-4 rounded border flex items-center gap-3 bg-slate-700/50 border-slate-600">
<iconify-icon className="text-blue-400" icon="solar:file-download-linear" width="24"></iconify-icon>
<div>
<div className="text-sm font-medium text-slate-200">Renal_Pharm_Syllabus.pdf</div>
<div className="text-xs text-slate-500">2.4 MB • Ready for download</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="demo">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="rounded-2xl shadow-xl border overflow-hidden flex flex-col md:flex-row bg-white border-slate-200">

<div className="md:w-5/12 p-8 flex flex-col justify-between bg-blue-600 text-white">
<div>
<h2 className="text-2xl font-medium mb-4">Transform Your Curriculum Today</h2>
<p className="text-sm leading-relaxed mb-6 text-blue-100">
                            Join forward-thinking medical educators. Schedule a personalized walkthrough of the AI Generator customized for your institution's specific needs.
                        </p>
<ul className="space-y-3 text-sm text-blue-50">
<li className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                                Custom LMS Integration Check
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                                Full Content Library Access
                            </li>
</ul>
</div>
<div className="mt-8 text-xs text-blue-200">
                        *Institutional email required for demo access.
                    </div>
</div>

<div className="md:w-7/12 p-8 lg:p-12">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900">Request Access</h3>
<p className="text-sm text-slate-500">Fill out the form below to connect with our academic partnerships team.</p>
</div>

<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1 text-slate-700" htmlFor="first-name">First name</label>
<input className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white placeholder-slate-400 border-slate-300" id="first-name" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-slate-700" htmlFor="last-name">Last name</label>
<input className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white placeholder-slate-400 border-slate-300" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-slate-700" htmlFor="email">Institutional Email</label>
<input className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white placeholder-slate-400 border-slate-300" id="email" placeholder="jane.doe@university.edu" type="email"/>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-slate-700" htmlFor="role">Role / Job Title</label>
<div className="relative">
<select className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none bg-white border-slate-300 text-slate-600" id="role">
<option>Select your role...</option>
<option>Dean / Administrator</option>
<option>Course Director</option>
<option>Faculty Member</option>
<option>Instructional Designer</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-slate-700" htmlFor="institution">Institution Name</label>
<input className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white placeholder-slate-400 border-slate-300" id="institution" type="text"/>
</div>
<div className="flex items-start">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded focus:ring-blue-500 text-blue-600 border-slate-300" id="consent" type="checkbox"/>
</div>
<div className="ml-3 text-xs">
<label className="font-medium text-slate-600" htmlFor="consent">I agree to receive communications from Lecturio.</label>
<p className="text-slate-400">You can unsubscribe at any time.</p>
</div>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all text-white bg-blue-600 hover:bg-blue-700" type="button">
                            Submit Request
                        </button>
</form>
</div>
</div>
<p className="mt-6 text-center text-xs text-slate-400">
                © 2023 Lecturio GmbH. All rights reserved. <a className="underline hover:text-slate-500" href="#">Privacy Policy</a>
</p>
</div>
</section>

<footer className="border-t py-12 bg-white border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-6 h-6 rounded text-white bg-slate-900">
<iconify-icon icon="solar:book-2-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Lecturio</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="transition-colors hover:text-blue-600" href="#">Medical Schools</a>
<a className="transition-colors hover:text-blue-600" href="#">Nursing</a>
<a className="transition-colors hover:text-blue-600" href="#">Faculty Resources</a>
<a className="transition-colors hover:text-blue-600" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="transition-colors hover:text-blue-600 text-slate-400" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-blue-600 text-slate-400" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
