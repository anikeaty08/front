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
primary: '#002865',
secondary: '#B89D69',
bgLight: '#F8FAFC',
textPrimary: '#0F172A',
textSecondary: '#475569',
border: '#E2E8F0',
}
}
}
}



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
      

<header className="w-full border-b border-border bg-white sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold font-['Manjari'] text-lg">Q</div>
<span className="text-primary font-bold tracking-tight text-lg uppercase">Portal</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-textSecondary hover:text-primary transition-colors" href="#">Overview</a>
<a className="text-sm font-medium text-textSecondary hover:text-primary transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-textSecondary hover:text-primary transition-colors" href="#">Security</a>
<a className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#001f4d] transition-colors" href="#">Request Demo</a>
</nav>
</div>
</header>

<section className="w-full py-20 md:py-28 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
<i className="w-4 h-4 text-secondary" data-lucide="shield-check"></i>
<span className="text-xs font-semibold text-textSecondary uppercase tracking-wide">Secure. Scalable. SEB-Integrated.</span>
</div>
<h1 className="text-5xl md:text-6xl font-bold text-primary leading-[1.1] tracking-tight">
                    Building Trust Through Transparent Academic Evaluation.
                </h1>
<p className="text-lg text-textSecondary max-w-lg leading-relaxed">
                    A secure quiz platform already used to evaluate 1,000+ students. Designed for academic integrity and administrative ease.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-primary text-white text-base font-semibold px-8 py-3.5 rounded-lg shadow-sm hover:shadow hover:bg-[#001f4d] transition-all">
                        Request a Demo
                    </button>
<button className="text-textPrimary font-medium px-8 py-3.5 rounded-lg border border-border hover:bg-slate-50 transition-all flex items-center gap-2">
<i className="w-5 h-5 text-secondary" data-lucide="play-circle"></i>
                        View Guidelines
                    </button>
</div>
</div>

<div className="relative w-full">

<div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#F0F4FF] rounded-full blur-3xl -z-10"></div>

<div className="bg-white rounded-xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] border border-border overflow-hidden">

<div className="bg-bgLight border-b border-border px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="text-xs text-textSecondary font-medium flex items-center gap-1">
<i className="w-3 h-3 text-secondary" data-lucide="lock"></i> Secure Exam Environment
                        </div>
</div>

<div className="p-6">
<div className="flex justify-between items-end mb-6">
<div>
<h4 className="text-primary font-bold text-lg mb-1">Final Semester Assessment</h4>
<p className="text-xs text-textSecondary">Computer Science • Batch 2024 • ID: CSM-202</p>
</div>
<div className="text-right">
<span className="block text-2xl font-bold text-textPrimary">00:45:12</span>
<span className="text-xs text-secondary font-medium">Time Remaining</span>
</div>
</div>

<div className="w-full border border-border rounded-lg overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-bgLight text-textSecondary font-medium">
<tr>
<th className="px-4 py-3">Student Name</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3">Progress</th>
<th className="px-4 py-3 text-right">Score Estimate</th>
</tr>
</thead>
<tbody className="divide-y divide-border">
<tr>
<td className="px-4 py-3 font-medium text-textPrimary">S. Sharma</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">Active</span></td>
<td className="px-4 py-3">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-primary w-[85%]"></div>
</div>
</td>
<td className="px-4 py-3 text-right text-textSecondary">--</td>
</tr>
<tr>
<td className="px-4 py-3 font-medium text-textPrimary">A. Patel</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">Active</span></td>
<td className="px-4 py-3">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-primary w-[62%]"></div>
</div>
</td>
<td className="px-4 py-3 text-right text-textSecondary">--</td>
</tr>
<tr>
<td className="px-4 py-3 font-medium text-textPrimary">R. Iyer</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">Submitted</span></td>
<td className="px-4 py-3">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-secondary w-full"></div>
</div>
</td>
<td className="px-4 py-3 text-right font-semibold text-textPrimary">92/100</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-16 bg-bgLight border-y border-border">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
<div className="p-3 bg-white rounded-lg shadow-sm border border-border">
<i className="w-6 h-6 text-primary" data-lucide="users"></i>
</div>
<div>
<h3 className="text-xl font-bold text-primary mb-1">1,000+ Students</h3>
<p className="text-sm text-textSecondary">Successfully evaluated in live institutional environments.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border-l-0 md:border-l border-border/50">
<div className="p-3 bg-white rounded-lg shadow-sm border border-border">
<i className="w-6 h-6 text-primary" data-lucide="shield"></i>
</div>
<div>
<h3 className="text-xl font-bold text-primary mb-1">RBAC Security</h3>
<p className="text-sm text-textSecondary">Strict role-based access for admins, faculty, and students.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border-l-0 md:border-l border-border/50">
<div className="p-3 bg-white rounded-lg shadow-sm border border-border">
<i className="w-6 h-6 text-primary" data-lucide="monitor-check"></i>
</div>
<div>
<h3 className="text-xl font-bold text-primary mb-1">SEB Integration</h3>
<p className="text-sm text-textSecondary">Secure exams with Safe Exam Browser technology.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-4xl font-bold text-primary tracking-tight mb-4">Designed for the Academic Ecosystem</h2>
<p className="text-textSecondary text-lg">A unified platform serving every stakeholder in the evaluation process.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white border border-border rounded-xl p-8 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-bgLight flex items-center justify-center mb-6">
<i className="w-5 h-5 text-secondary" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-2xl font-bold text-primary mb-4">Students</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Fair and transparent evaluations</span>
</li>
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Clear exam experience</span>
</li>
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Access to results and performance insights</span>
</li>
</ul>
</div>

<div className="bg-white border border-border rounded-xl p-8 hover:shadow-md transition-shadow relative">
<div className="absolute top-0 inset-x-0 h-1 bg-primary rounded-t-xl"></div>
<div className="w-10 h-10 rounded-full bg-bgLight flex items-center justify-center mb-6">
<i className="w-5 h-5 text-secondary" data-lucide="book-open"></i>
</div>
<h3 className="text-2xl font-bold text-primary mb-4">Faculty</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Structured quiz creation</span>
</li>
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Reduced evaluation workload</span>
</li>
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Detailed academic analytics</span>
</li>
</ul>
</div>

<div className="bg-white border border-border rounded-xl p-8 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-bgLight flex items-center justify-center mb-6">
<i className="w-5 h-5 text-secondary" data-lucide="building-2"></i>
</div>
<h3 className="text-2xl font-bold text-primary mb-4">Institutions</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Centralized academic control</span>
</li>
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Secure assessment infrastructure</span>
</li>
<li className="flex items-start gap-3 text-textSecondary">
<i className="w-4 h-4 text-secondary mt-1" data-lucide="check"></i>
<span className="text-sm">Scalable across departments and batches</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-bgLight border-t border-border">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col">
<div className="h-px w-12 bg-secondary mb-6"></div>
<h3 className="text-2xl font-regular text-primary mb-6">Benefits for Students</h3>
<ul className="space-y-4">
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Transparent evaluation and fair scoring</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Practice through mock and demo quizzes</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Identify weak areas through analysis</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Reduced exam anxiety</span>
</li>
</ul>
</div>

<div className="flex flex-col">
<div className="h-px w-12 bg-secondary mb-6"></div>
<h3 className="text-2xl font-regular text-primary mb-6">Benefits for Faculty</h3>
<ul className="space-y-4">
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Time-saving automated evaluation</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Structured assessments aligned with syllabus</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Manual evaluation for descriptive accuracy</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Insightful performance analytics</span>
</li>
</ul>
</div>

<div className="flex flex-col">
<div className="h-px w-12 bg-secondary mb-6"></div>
<h3 className="text-2xl font-regular text-primary mb-6">Benefits for Institutions</h3>
<ul className="space-y-4">
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Policy-aligned evaluation workflows</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Secure, controlled exam environments</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Role-based accountability</span>
</li>
<li className="flex gap-3 text-textPrimary">
<i className="w-5 h-5 text-secondary shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base">Scales from department to institution</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full py-28 bg-white text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                In the era of digitalization, are you ready to make your assessments secure and transparent?
            </h2>
<p className="text-lg text-textSecondary mb-10">
                Designed for real institutions with guided onboarding and academic support.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="bg-primary text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#001f4d] transition-all transform active:scale-95">
                    Request a Demo
                </button>
<span className="text-sm text-textSecondary font-medium flex items-center gap-1.5 mt-2">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i> Already used by 1,000+ students
                </span>
</div>
</div>
</section>

<section className="w-full py-20 bg-bgLight border-t border-border">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-primary mb-4">Get in Touch with Our Academic Solutions Team</h2>
<p className="text-textSecondary">
                    Have questions or want to explore how the platform fits your academic workflow? Our team will assist you with onboarding and setup.
                </p>
</div>
<form className="bg-white p-8 rounded-xl border border-border shadow-sm space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-textPrimary">Institution Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-textPrimary" placeholder="e.g. State University" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-textPrimary">Contact Person</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-textPrimary" placeholder="Full Name" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-textPrimary">Official Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-textPrimary" placeholder="name@institution.edu" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-textPrimary">Role</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-textPrimary appearance-none bg-white">
<option>Admin</option>
<option>Faculty</option>
<option>Institute Head</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-textPrimary">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-textPrimary resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-primary text-white font-semibold py-3.5 rounded-lg hover:bg-[#001f4d] transition-colors" type="submit">
                    Contact Us
                </button>
</form>
</div>
</section>

<footer className="bg-primary text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-[#1e4075] pb-12">

<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-primary font-bold font-['Manjari'] text-lg">Q</div>
<span className="font-bold tracking-tight text-lg uppercase text-white">Portal</span>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
                        A secure, scalable academic evaluation platform designed for modern educational institutions.
                    </p>
</div>

<div>
<h4 className="font-bold text-secondary mb-6 text-sm uppercase tracking-wider">Platform</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Overview</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">How It Works</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-secondary mb-6 text-sm uppercase tracking-wider">Solutions</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Internal Assessments</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Secure Exams</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Practice Tests</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-secondary mb-6 text-sm uppercase tracking-wider">Institution</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2026 Quiz &amp; Evaluation Portal. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
