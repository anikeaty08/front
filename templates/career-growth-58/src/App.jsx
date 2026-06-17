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
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
900: '#1e3a8a',
}
}
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold tracking-tighter text-sm">UP</span>
</div>
<span className="text-slate-900 font-medium tracking-tight text-sm">Life at Upgaming</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Culture</a>
<a className="text-slate-900" href="#">Growth</a>
<a className="hover:text-slate-900 transition-colors" href="#">Benefits</a>
<a className="hover:text-slate-900 transition-colors" href="#">Open Roles</a>
</div>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">
                Join the LineUP
            </button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-60"></div>
<div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-40"></div>
</div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Investing in your future
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Growth Inside the <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">LineUP</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                At Upgaming, we believe the collective thrives when every individual evolves. 
                From early-career acceleration to continuous leadership training, your trajectory is uncapped.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all hover:scale-[1.01] shadow-lg shadow-slate-200">
                    Explore Opportunities
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                    View Education Policy
                </button>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-slate-100 bg-white">
<div className="max-w-7xl mx-auto">
<div className="mb-12 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Talent Growth Program</h2>
<p className="text-slate-500">
                    Our tailored tracks for early-career professionals. We don't just hire interns; 
                    we build future leaders through mentorship, real-world challenges, and structured learning.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Engineering</span>
<h3 className="text-xl font-medium text-slate-900 mt-1">Development Intern</h3>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Master modern frontend frameworks and backend architecture. Contribute to the core product from week one.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-slate-100">
<span className="text-xs font-medium text-slate-400">6 Months • Paid</span>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Apply <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:bug" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-violet-600">Quality Assurance</span>
<h3 className="text-xl font-medium text-slate-900 mt-1">QA Engineer Intern</h3>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Learn automation strategies, performance testing, and how to maintain high standards in a high-velocity environment.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-slate-100">
<span className="text-xs font-medium text-slate-400">4 Months • Paid</span>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Apply <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-pink-600">Product Design</span>
<h3 className="text-xl font-medium text-slate-900 mt-1">Design Intern</h3>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Deep dive into UI/UX systems. Create user-centric interfaces and work directly with product managers.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-slate-100">
<span className="text-xs font-medium text-slate-400">3 Months • Paid</span>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Apply <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Internal Training Sessions</h2>
<p className="text-slate-500">
                        Knowledge is best when shared. Our internal "Tech &amp; Talk" sessions allow team members to present on topics they are passionate about, fostering a culture of continuous learning.
                    </p>
</div>
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1" href="#">
                    View Archive <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col h-full">
<div className="mb-4">
<span className="inline-block px-2 py-1 bg-green-50 text-green-700 text-[10px] font-semibold uppercase tracking-wide rounded-md">Technical</span>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Advanced React Patterns</h4>
<p className="text-xs text-slate-500 line-clamp-3 mb-4 flex-grow">
                        Exploring compound components, render props, and custom hooks to build scalable UI libraries.
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">AL</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Alex L.</span>
<span className="text-[10px] text-slate-400">Frontend Lead</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col h-full">
<div className="mb-4">
<span className="inline-block px-2 py-1 bg-orange-50 text-orange-700 text-[10px] font-semibold uppercase tracking-wide rounded-md">Leadership</span>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Feedback Loops</h4>
<p className="text-xs text-slate-500 line-clamp-3 mb-4 flex-grow">
                        How to give and receive radical candor without losing empathy. Building psychological safety.
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">SJ</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Sarah J.</span>
<span className="text-[10px] text-slate-400">VP People</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col h-full">
<div className="mb-4">
<span className="inline-block px-2 py-1 bg-purple-50 text-purple-700 text-[10px] font-semibold uppercase tracking-wide rounded-md">Product</span>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Data-Driven Design</h4>
<p className="text-xs text-slate-500 line-clamp-3 mb-4 flex-grow">
                        Using Mixpanel analytics to inform UI decisions and reduce churn rates in the onboarding flow.
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">MK</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Mike K.</span>
<span className="text-[10px] text-slate-400">Product Designer</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col h-full relative overflow-hidden group">
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition flex items-center justify-center">
<div className="bg-white px-4 py-2 rounded-full shadow-sm text-xs font-medium text-slate-900 flex items-center gap-2">
                            Explore All
                            <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>

<div className="opacity-30 blur-[1px]">
<div className="mb-4">
<span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-semibold uppercase tracking-wide rounded-md">Security</span>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Securing APIs</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-slate-300">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 text-white">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        Education Support
                    </h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                        We invest in your curiosity. Upgaming provides an annual budget for every employee to pursue courses, certifications, and conferences that fuel their career growth.
                    </p>
<div className="flex flex-col gap-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-1" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm">Full reimbursement for role-relevant certifications (AWS, Google, etc.)</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-1" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm">Access to premium learning platforms (Udemy, Coursera, Masterclass)</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-1" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm">Tickets and travel accommodation for international tech conferences</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#">
                        Learn How It Works <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>

<div className="relative">

<div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-5 rounded-2xl">
<iconify-icon className="text-brand-400 mb-3" icon="lucide:video" width="24"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-1">Technical Courses</h4>
<p className="text-xs text-slate-500">Deep dives into new stacks.</p>
</div>
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-5 rounded-2xl">
<iconify-icon className="text-orange-400 mb-3" icon="lucide:users" width="24"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-1">Soft Skills</h4>
<p className="text-xs text-slate-500">Communication &amp; mgmt.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-5 rounded-2xl">
<iconify-icon className="text-yellow-400 mb-3" icon="lucide:award" width="24"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-1">Certifications</h4>
<p className="text-xs text-slate-500">Official accreditations.</p>
</div>
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-5 rounded-2xl">
<iconify-icon className="text-pink-400 mb-3" icon="lucide:ticket" width="24"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-1">Conferences</h4>
<p className="text-xs text-slate-500">Global networking events.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="font-bold text-[10px]">UP</span>
</div>
<span className="text-slate-900 font-medium text-sm tracking-tight">Upgaming</span>
</div>
<div className="text-slate-400 text-xs font-medium">
                © 2023 Upgaming Life. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
