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



        lucide.createIcons();
    
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
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto right-0">
<div className="flex items-center gap-2 opacity-80 text-white">
<i className="w-6 h-6 text-[#C9A668]" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-wide uppercase">Renew Biologics</span>
</div>
<div className="hidden md:flex gap-6 text-sm font-medium text-white/70">
<a className="transition-colors hover:text-white" href="#">Full Integration</a>
<a className="transition-colors hover:text-white" href="#">Staff Training</a>
<a className="transition-colors hover:text-white" href="#">On-Site Support</a>
</div>
<a className="hidden md:flex items-center gap-2 hover:bg-[#B89557] transition-all text-sm font-medium text-white bg-[#C9A668] rounded-md pt-2 pr-5 pb-2 pl-5" href="#apply">
            Apply for Seminar <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden text-white bg-[#1A2622] pt-32 pb-20 relative">
<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="max-w-2xl">
<h1 className="lg:text-6xl leading-[1.1] text-4xl font-medium tracking-tight mb-6">
      We Don't Teach <span className="text-white/60">Regenerative Medicine.</span> <br/>
                    We Install It.
    </h1>
<p className="text-lg lg:text-xl mb-8 font-light leading-relaxed text-stone-300">
      Most courses and information are not installing a full clinical and revenue-generating system inside your
      practice. We deliver on-site and fully supported regenerative medicine programs.
    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#C9A668] hover:bg-[#B89557] px-8 py-3.5 rounded-md text-base font-medium transition-all shadow-lg flex items-center justify-center gap-2 text-white shadow-orange-900/20">
                        Set Up In Weeks <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="bg-transparent border px-8 py-3.5 rounded-md text-base font-medium transition-all flex items-center justify-center gap-2 border-white/20 hover:bg-white/5 text-white">
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i> Why Most Seminars Fail
                    </button>
</div>
</div>
<div className="relative gap-x-12 gap-y-12">
<div className="overflow-hidden aspect-video bg-stone-800/50 border-white/10 border rounded-xl relative shadow-2xl gap-x-12 gap-y-12">
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowfullscreen="" className="w-full h-full object-cover" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1152224504?h=ace1a7d300&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"></iframe>
<div className="bg-white/10 border-white/10 border rounded-lg pt-4 pr-4 pb-4 pl-4 absolute right-6 bottom-6 left-6 backdrop-blur-md">
<div className="flex gap-3 items-start">
<div className="bg-[#C9A668] p-2 rounded-full">
<i className="w-4 h-4 text-white" data-lucide="quote" strokeWidth="1.5"></i>
</div>
<p className="text-sm font-medium italic leading-snug text-white">"Unlike just taking a weekend course, this
            program changed our entire clinical flow on Day 1."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F0F2EF]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
<div className="grid grid-cols-2 gap-4">
<img alt="Medical Discussion" className="w-full h-48 object-cover rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87f83657-dbae-4f3e-b438-dfa13b9f1dcb_800w.jpg"/>
<img alt="Medical Office" className="rounded-lg shadow-sm w-full h-48 object-cover mt-8" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Doctor Writing" className="rounded-lg shadow-sm w-full h-48 object-cover" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Team Meeting" className="w-full h-48 object-cover rounded-lg mt-8 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7868bf2e-391e-4aa7-8aca-7af5ae59bc5d_800w.jpg"/>
</div>
<div className="">
<h2 className="text-3xl font-medium text-stone-900 tracking-tight mb-6">We deliver a transformational regenerative medicine program.</h2>
<p className="leading-relaxed text-lg text-stone-600 mb-6">
                        Most doctors interested in regenerative medicine already have access to information. What they <span className="font-medium text-stone-900">don't have is an installed, proven system</span> with real world clinical workflows, staffing models, applications and results.
                    </p>
<p className="text-lg mb-8 leading-relaxed text-stone-600">
                        Regenerative medicine falls when knowledge stays theoretical. We don't add a protocol. We change how you practice.
                    </p>
<button className="font-medium border-b transition-colors pb-1 flex items-center gap-2 text-stone-900 border-stone-300 hover:border-stone-900">
                        See the Failure Points <i className="w-4 h-4" data-lucide="arrow-down" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-stone-900">Why Weekend Courses Fail You</h2>
<p className="text-lg text-stone-600">Doctors don't fall short because they lack skills. They fall short when they lack connection and structure.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-xl shadow-sm border bg-white border-stone-200/60">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-stone-100 text-stone-700">
<i className="w-5 h-5" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-stone-900">Procedural Anxiety</h3>
<p className="text-lg leading-relaxed text-stone-600">
                        Unproven methods lead to hesitation. Systems offer less access unless they are doing it really leading to execution.
                    </p>
</div>

<div className="p-8 rounded-xl shadow-sm border bg-white border-stone-200/60">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-stone-100 text-stone-700">
<i className="w-5 h-5" data-lucide="ban" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-stone-900">No Turnkey System</h3>
<p className="text-lg leading-relaxed text-stone-600">
                        Needing how-to often fails enough. Without patient outcomes, screeners, and pricing workflows, immunuents never get offered.
                    </p>
</div>

<div className="p-8 rounded-xl shadow-sm border bg-white border-stone-200/60">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-stone-100 text-stone-700">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-stone-900">Revenue Leakage</h3>
<p className="text-lg leading-relaxed text-stone-600">
                        If you want to just understand the value, patients don't convert. No B2B your sighing and onsteel protects.
                    </p>
</div>

<div className="p-8 rounded-xl shadow-sm border bg-white border-stone-200/60">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-stone-100 text-stone-700">
<i className="w-5 h-5" data-lucide="alert-triangle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-stone-900">Isolation at the First Case</h3>
<div className="relative">
<p className="text-lg leading-relaxed text-stone-600">
                            The last and eatlable where medicine is damaged. Most courses send you home alone to figure it out.
                        </p>
</div>
</div>
</div>
<div className="mt-12 p-6 bg-[#C9A668]/10 rounded-lg border border-[#C9A668]/30 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h4 className="text-lg font-medium text-stone-900">Physician-Led. Implementation-Focused. Limited Enrollment.</h4>
</div>
<button className="bg-[#1A2622] px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center gap-2 text-white hover:bg-stone-800">
                    Request Syllabus <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="bg-[#1F2B26] pt-24 pb-24 text-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Practice Integration</h2>
<p className="text-lg text-stone-400">A complete ecosystem supporting clinical care, patient experience, and the
                business that sustains it.</p>
</div>
<div className="space-y-4">

<div className="group transition-colors cursor-pointer border rounded-lg pt-6 pr-6 pb-6 pl-6 hover:bg-white/10 bg-white/5 border-white/10">
<div className="flex items-start justify-between">
<div className="flex gap-4">
<div className="pt-1 text-[#C9A668]">
<i className="w-5 h-5" data-lucide="circle-check" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">Clinical Mastery</h3>
<p className="text-lg leading-relaxed max-w-2xl text-stone-400">Hands on coding in ultrasound
                                imaging, experience, and PRP regimen, protocol, designed for real patients outcomes.</p>
</div>
</div>
<i className="w-5 h-5 text-stone-500 group-hover:text-white" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="group border rounded-lg p-6 transition-colors cursor-pointer border-white/10 bg-white/5 hover:bg-white/10">
<div className="flex items-start justify-between">
<div className="flex gap-4">
<div className="pt-1 text-[#C9A668]">
<i className="w-5 h-5" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">Practice Implementation</h3>
<p className="text-lg leading-relaxed max-w-2xl text-stone-400">Turnkey workflows for
                                consultations, office pulling, packaging, and even strategies with your sending model.
                            </p>
</div>
</div>
<i className="w-5 h-5 text-stone-500 group-hover:text-white" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="group border rounded-lg p-6 transition-colors cursor-pointer border-white/10 bg-white/5 hover:bg-white/10">
<div className="flex items-start justify-between">
<div className="flex gap-4">
<div className="pt-1 text-[#C9A668]">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">Staff &amp; Manager Training</h3>
<p className="text-lg leading-relaxed max-w-2xl text-stone-400">Trust shot and clinical manager
                                confidence. If the staff can't fulfill it, the process differs have it.</p>
</div>
</div>
<i className="w-5 h-5 text-stone-500 group-hover:text-white" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="group border rounded-lg p-6 transition-colors cursor-pointer border-white/10 bg-white/5 hover:bg-white/10">
<div className="flex items-start justify-between">
<div className="flex gap-4">
<div className="pt-1 text-[#C9A668]">
<i className="w-5 h-5" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">On-Site Physician Support</h3>
<p className="text-lg leading-relaxed max-w-2xl text-stone-400">Our choicest differentiation: an
                                experienced Pro physician comes to your office for your first test case.</p>
</div>
</div>
<i className="w-5 h-5 text-stone-500 group-hover:text-white" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F0F2EF]">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-stone-900">You Will Not Be Alone</h2>
<p className="text-lg mb-16 text-stone-600">We flip the emotional story from "I hope I can do this" to <br/> <span className="font-medium text-stone-900">"I know I can do this."</span></p>
<div className="space-y-12 text-left">

<div className="flex items-center gap-6">
<img alt="Eric" className="w-20 h-20 rounded-full object-cover border-2 shadow-md border-white" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="">
<h3 className="text-xl font-medium text-stone-900">Eric Kephart</h3>
<p className="text-sm font-medium text-[#C9A668] uppercase tracking-wide mb-1">Lead Instructor</p>
<p className="text-lg text-stone-600">We stand behind this clinically. We care about outcomes, not attendance.</p>
</div>
</div>

<div className="flex items-center gap-6">
<img alt="Instructor" className="w-20 h-20 rounded-full object-cover border-2 shadow-md border-white" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="">
<h3 className="text-xl font-medium text-stone-900">[Name]</h3>
<p className="text-sm font-medium text-[#C9A668] uppercase tracking-wide mb-1">Practice Integration</p>
<p className="text-lg text-stone-600">Helping you install systems so you don't use up "reading" resources to touring.</p>
</div>
</div>

<div className="flex items-center gap-6">
<img alt="Educator" className="w-20 h-20 rounded-full object-cover border-2 shadow-md border-white" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="">
<h3 className="text-xl font-medium text-stone-900">[Name]</h3>
<p className="text-sm font-medium text-[#C9A668] uppercase tracking-wide mb-1">Patient Education</p>
<p className="text-lg text-stone-600">Teaching your billers the frameworks to convert experts with confidence.</p>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-stone-200">
<p className="font-medium mb-6 text-stone-900">Join the physicians who value safety, consistency, and reputation.</p>
<button className="bg-[#1A2622] px-8 py-3 rounded-md text-base font-medium transition-colors inline-flex items-center gap-2 text-white hover:bg-stone-800">
                    Meet the Faculty <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-stone-900">From Interested to Operational</h2>
<p className="text-lg text-stone-600">Streamlined systems for immediate launch.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#F9FAF8] rounded-xl overflow-hidden border border-stone-100">
<div className="px-6 py-4 border-b bg-stone-200/50 border-stone-200">
<h3 className="text-lg font-medium text-stone-900">The Training</h3>
</div>
<div className="p-6">
<p className="text-lg leading-relaxed text-stone-600">
                            With stories, 4 days clue into HIP APP gathering patient rollout, and code arrangement.
                        </p>
</div>
</div>

<div className="bg-[#F9FAF8] rounded-xl overflow-hidden border border-stone-100">
<div className="px-6 py-4 border-b bg-stone-200/50 border-stone-200">
<h3 className="text-lg font-medium text-stone-900">The Systems</h3>
</div>
<div className="p-6">
<p className="text-lg leading-relaxed text-stone-600">
                            We loaded the business high; practice, consulting, and management. We are your own heat data and message via the modifiable case elasticities.
                        </p>
</div>
</div>

<div className="bg-[#F9FAF8] rounded-xl overflow-hidden border border-stone-100">
<div className="px-6 py-4 border-b bg-stone-200/50 border-stone-200">
<h3 className="text-lg font-medium text-stone-900">The First Case</h3>
</div>
<div className="p-6">
<p className="text-lg leading-relaxed text-stone-600">
                            We revive to you. First done guidance and clinical all around. Regional dome more that continue in. No guessing. No occurring guessing.
                        </p>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-3 py-3 px-4 rounded-lg inline-block w-full bg-stone-100">
<span className="px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-stone-200 text-stone-600">Feature</span>
<span className="text-sm font-medium text-stone-700">Success is measured by implementation—not completion certificates.</span>
</div>
</div>
</section>

<section className="py-24 bg-[#1F2B26] text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight">Stats</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
<div className="border rounded-lg p-8 text-center border-white/20 bg-white/5">
<h3 className="text-lg font-medium mb-2">The Renew Difference</h3>
<p className="text-sm leading-relaxed text-stone-400">Look responsible charters are formed to cover differences, emotional resonance is designed to sudo solemn.</p>
</div>
<div className="border border-[#C9A668] rounded-lg p-8 text-center bg-[#C9A668]/10 relative">
<span className="text-4xl font-semibold text-[#C9A668] block mb-2">100%</span>
<span className="text-sm font-medium text-white/90">Focus on execution</span>
</div>
<div className="border rounded-lg p-8 text-center border-white/20 bg-white/5">
<div className="flex justify-center mb-4 text-[#C9A668]">
<i className="w-8 h-8" data-lucide="video" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium mb-2">The First Case</h3>
<p className="text-sm text-stone-400">See what our one support feels be.</p>
</div>
</div>
<div className="bg-[#F0F2EF] rounded-2xl p-12 lg:p-16 text-stone-900">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4">What Certainty Looks Like</h2>
<p className="text-lg text-stone-600">Hear from peers who stopped "trying" regenerative medicine and started doing it.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-xl shadow-sm bg-white">
<img alt="Doctor" className="w-12 h-12 rounded-full mb-4 object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<p className="text-lg font-medium mb-6 leading-relaxed text-stone-800">
                            "I didn't need another factum. I needed like to work in my practice. Renewbiologix make that happen."
                        </p>
<div>
<p className="font-semibold text-stone-900">Dr. [Name]</p>
<p className="text-stone-500 text-sm">Orthopedic Surgeon</p>
</div>
</div>

<div className="p-8 rounded-xl shadow-sm bg-white">
<img alt="Doctor" className="w-12 h-12 rounded-full mb-4 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<p className="text-lg font-medium mb-6 leading-relaxed text-stone-800">
                            "The on-site support changed everything. I can't teach clins, and then gose we the confidence to build the program."
                        </p>
<div className="">
<p className="font-semibold text-stone-900">Dr. [Name]</p>
<p className="text-stone-500 text-sm">Sports Medicine</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#151C19] text-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8 leading-tight">
                    Install Regenerative Medicine the Right Way—The First Time.
                </h2>
<p className="text-lg mb-8 leading-relaxed text-stone-400">
                    Apply to RenewBiologix: Reserve your practice deserves more than another weekend course.
                </p>
<ul className="space-y-4 mb-10 text-stone-300">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A668] mt-2.5"></div>
<span className="text-lg">Content, process, and deploy with confidence.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A668] mt-2.5"></div>
<span className="text-lg">Train your staff to execute and convert minimally.</span>
</li>
</ul>
<button className="bg-[#C9A668] hover:bg-[#B89557] px-8 py-3.5 rounded-md text-base font-medium transition-all shadow-lg flex items-center gap-2 text-white">
                    Apply for the Program <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="relative">
<div className="aspect-square bg-gradient-to-br rounded-2xl flex items-center justify-center p-12 border from-stone-800 to-stone-900 border-white/5">
<div className="text-center">
<div className="relative inline-block">
<img alt="Hand holding syringe" className="rounded-lg shadow-2xl opacity-90 max-w-xs mx-auto" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<p className="mt-8 text-xl font-medium tracking-wide">We don't teach. We install.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F0F2EF] pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-stone-900">Invest in Certainty</h2>
<p className="text-lg text-stone-600">You aren't paying for information. You are paying for a fully installed service line.</p>
</div>
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">

<div className="rounded-xl p-8 border shadow-sm bg-white border-stone-200">
<h3 className="text-xl font-medium mb-1 text-stone-900">The Program</h3>
<p className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-6">The Implementation System</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg">Clinical Mastery (Fix &amp; PRP)</span>
</li>
<li className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg">Turnkey Practice Workflows</span>
</li>
</ul>
<div className="p-6 rounded-lg text-center border mt-auto bg-stone-50 border-stone-100">
<h4 className="text-lg font-medium mb-4 text-stone-900">Inquire for Pricing</h4>
<button className="w-full bg-[#1A2622] px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 mb-3 text-white hover:bg-stone-800">
                        Inquire for Pricing <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="text-xs text-stone-500">Limited Enrollment | Physician-Led</p>
</div>
</div>

<div className="bg-[#EAECE9] border-stone-200 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-inner">
<h3 className="text-xl font-medium mb-6 text-stone-900">Is This For You?</h3>
<div className="mb-8">
<p className="font-medium text-stone-900 mb-3">This Program IS For You If:</p>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-stone-700">
<div className="w-1.5 h-1.5 rounded-full mt-2.5 bg-stone-400"></div>
<span className="text-lg">You want regenerative medicine to be more than an add-on — you want it as a thriving, fully integrated service line that drives patient outcomes and practice growth.</span>
</li>
<li className="flex items-start gap-2 text-stone-700">
<div className="w-1.5 h-1.5 rounded-full mt-2.5 bg-stone-400"></div>
<span className="text-lg">You value hands-on implementation over theory alone, and you’re ready to apply what you learn from day one.</span>
</li>
</ul>
</div>
<div className="mb-8">
<p className="font-medium text-red-900 mb-3">This Program is <span className="font-bold text-red-600">NOT</span> For You If:
    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-stone-700">
<div className="w-1.5 h-1.5 rounded-full mt-2.5 bg-red-400"></div>
<span className="text-lg">You are looking for the cheapest CME option.</span>
</li>
<li className="flex items-start gap-2 text-stone-700">
<div className="w-1.5 h-1.5 rounded-full mt-2.5 bg-red-400"></div>
<span className="text-lg">You must likely without responsibility.</span>
</li>
</ul>
</div>
<button className="w-full px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-stone-800 text-white hover:bg-stone-700">
                     Download Additional Info <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<footer className="py-24 bg-[#111816] border-t text-white border-white/5" id="apply">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight mb-4">Limited Enrollment.</h2>
<p className="text-lg mb-12 text-stone-400">We limit seats to ensure every partner maintains life on the support they count on when converting our systems.</p>
<form className="text-left space-y-4 max-w-xl mx-auto p-8 rounded-2xl border bg-white/5 border-white/5">
<div className="grid grid-cols-2 gap-4">
<div>
<input className="w-full border-none placeholder-stone-500 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C9A668] outline-none bg-stone-200 text-stone-900" placeholder="First Name" type="text"/>
</div>
<div>
<input className="w-full border-none placeholder-stone-500 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C9A668] outline-none bg-stone-200 text-stone-900" placeholder="Last Name" type="text"/>
</div>
</div>
<div>
<input className="w-full border-none placeholder-stone-500 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C9A668] outline-none bg-stone-200 text-stone-900" placeholder="Email Address" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<input className="w-full border-none placeholder-stone-500 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C9A668] outline-none bg-stone-200 text-stone-900" placeholder="Practice Name" type="text"/>
</div>
<div>
<input className="w-full border-none placeholder-stone-500 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C9A668] outline-none bg-stone-200 text-stone-900" placeholder="Practice Website" type="text"/>
</div>
</div>
<div className="flex items-center gap-3 py-2">
<div className="w-5 h-5 rounded border border-stone-500 flex items-center justify-center cursor-pointer hover:border-[#C9A668]">

</div>
<span className="text-sm text-stone-400">I am ready to implement</span>
</div>
<button className="w-full bg-[#C9A668] hover:bg-[#B89557] font-medium py-3.5 rounded-md transition-all shadow-lg mt-4 text-white" type="submit">
                    Submit Application
                </button>
</form>
</div>
</footer>


    </>
  );
}
