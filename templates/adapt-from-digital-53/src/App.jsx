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



                function switchTab(tabId) {
                    const techTab = document.getElementById('tab-tech');
                    const salesTab = document.getElementById('tab-sales');
                    const btnTech = document.getElementById('btn-tech');
                    const btnSales = document.getElementById('btn-sales');

                    if (tabId === 'tech') {
                        techTab.classList.remove('hidden');
                        techTab.classList.add('grid');
                        salesTab.classList.add('hidden');
                        salesTab.classList.remove('grid');
                        
                        btnTech.className = 'px-1 py-3 text-sm font-medium border-b-2 border-neutral-900 text-neutral-900 whitespace-nowrap transition-colors';
                        btnSales.className = 'px-1 py-3 text-sm font-normal border-b-2 border-transparent text-neutral-500 hover:text-neutral-900 whitespace-nowrap transition-colors';
                    } else {
                        salesTab.classList.remove('hidden');
                        salesTab.classList.add('grid');
                        techTab.classList.add('hidden');
                        techTab.classList.remove('grid');
                        
                        btnSales.className = 'px-1 py-3 text-sm font-medium border-b-2 border-neutral-900 text-neutral-900 whitespace-nowrap transition-colors';
                        btnTech.className = 'px-1 py-3 text-sm font-normal border-b-2 border-transparent text-neutral-500 hover:text-neutral-900 whitespace-nowrap transition-colors';
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
      

<header className="fixed top-0 inset-x-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-neutral-900" href="#">
                Enlighten<span className="text-[#86CCA1]">Schola</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Home</a>
<a className="text-sm font-normal text-neutral-600 hover:text-neutral-900 transition-colors" href="#open-roles">Talent</a>
<a className="text-sm font-normal text-neutral-600 hover:text-neutral-900 transition-colors" href="#">About</a>
<a className="text-sm font-normal text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Resources</a>
</nav>
<a className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-sm" href="#">
                Book a Call
            </a>
</div>
</header>
<main className="pt-32 pb-24 space-y-32">

<section className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 leading-[1.1] max-w-4xl mx-auto mb-6">
                Stable work. Real growth. <br/>
<span className="text-neutral-400">Top-tier clients.</span>
</h1>
<p className="text-base md:text-lg text-neutral-500 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
                Enlighten Schola connects experienced Indian engineers with funded US &amp; EU startups. Work full-time for one client, level up your skills, and build products that matter — with a team that treats you like family, not a resource.
            </p>
<a className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-6 py-3 rounded-full transition-all shadow-sm" href="#open-roles">
                View Open Roles
            </a>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:mb-16">
<p className="text-xs font-medium uppercase tracking-widest text-[#86CCA1] mb-3">Why Join Us</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
                    What makes Enlighten Schola different
                </h2>
<p className="text-sm md:text-base text-neutral-500 font-normal max-w-2xl leading-relaxed">
                    We're not a typical outsourcing company. You're not a "resource" juggling 5 projects. You work full-time for one client, on one product, with real ownership and support.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#86CCA1] transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-5 text-neutral-700 group-hover:text-[#86CCA1] group-hover:bg-[#F0FDF4] transition-colors">
<iconify-icon icon="solar:rocket-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Work with Elite Startups</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Partner with stable, growing US &amp; EU companies building AI products, SaaS platforms, and fintech solutions. Not random client projects, real companies solving real problems.</p>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#86CCA1] transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-5 text-neutral-700 group-hover:text-[#86CCA1] group-hover:bg-[#F0FDF4] transition-colors">
<iconify-icon icon="solar:wallet-money-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Competitive Pay</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Fair, transparent compensation based on your skills and experience. On-time payments, every month. No hidden deductions. What we quote is what you earn.</p>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#86CCA1] transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-5 text-neutral-700 group-hover:text-[#86CCA1] group-hover:bg-[#F0FDF4] transition-colors">
<iconify-icon icon="solar:user-check-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Full-Time, Dedicated Roles</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">You work for ONE client. No juggling multiple projects. No context switching. Deep focus, real ownership, and the chance to actually make an impact.</p>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#86CCA1] transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-5 text-neutral-700 group-hover:text-[#86CCA1] group-hover:bg-[#F0FDF4] transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Career Growth &amp; AI Upskilling</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Level up your skills with modern tech stacks and real-world challenges. We provide ongoing training on AI integration, productivity tools, and best practices.</p>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#86CCA1] transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-5 text-neutral-700 group-hover:text-[#86CCA1] group-hover:bg-[#F0FDF4] transition-colors">
<iconify-icon icon="solar:hand-shake-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Non-Toxic Work Culture</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Daily standups with respectful teams. Clear expectations. No micromanagement. You're part of the client's internal team — treated with dignity and trust.</p>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#86CCA1] transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-5 text-neutral-700 group-hover:text-[#86CCA1] group-hover:bg-[#F0FDF4] transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Flexible Hours</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">4-6 hour overlap with US/EU hours during normal Indian daytime. No all-nighters, no burning out. Work when you're most productive.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:mb-16">
<p className="text-xs font-medium uppercase tracking-widest text-[#86CCA1] mb-3">How It Works</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
                    What to expect when you apply
                </h2>
<p className="text-sm md:text-base text-neutral-500 font-normal max-w-2xl leading-relaxed">
                    No surprises, no hidden steps. Just a clear process to help us find the right fit — for both of us.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative pl-4 border-l border-neutral-200 md:border-none md:pl-0">
<div className="hidden md:block absolute top-5 left-10 right-0 h-px bg-neutral-200 -z-10"></div>
<div className="w-10 h-10 rounded-full border border-[#86CCA1] bg-neutral-50 text-[#86CCA1] flex items-center justify-center text-sm font-medium mb-5 md:mb-6 absolute -left-5 top-0 md:static">1</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Apply</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Submit your resume. We respond within 48 hours.</p>
</div>

<div className="relative pl-4 border-l border-neutral-200 md:border-none md:pl-0 mt-8 md:mt-0">
<div className="hidden md:block absolute top-5 left-10 right-0 h-px bg-neutral-200 -z-10"></div>
<div className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 flex items-center justify-center text-sm font-medium mb-5 md:mb-6 absolute -left-5 top-0 md:static">2</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Screening Call</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">A quick call to understand your skills and goals.</p>
</div>

<div className="relative pl-4 border-l border-neutral-200 md:border-none md:pl-0 mt-8 md:mt-0">
<div className="hidden md:block absolute top-5 left-10 right-0 h-px bg-neutral-200 -z-10"></div>
<div className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 flex items-center justify-center text-sm font-medium mb-5 md:mb-6 absolute -left-5 top-0 md:static">3</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Skill Assessment</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Real-world practical test to verify your experience.</p>
</div>

<div className="relative pl-4 border-l border-neutral-200 md:border-none md:pl-0 mt-8 md:mt-0">
<div className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 flex items-center justify-center text-sm font-medium mb-5 md:mb-6 absolute -left-5 top-0 md:static">4</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Interview</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Live technical + behavioral interview with our team.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:mb-16">
<p className="text-xs font-medium uppercase tracking-widest text-[#86CCA1] mb-3">What Engineers Say</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
                    Hear from engineers already working with us
                </h2>
<p className="text-sm md:text-base text-neutral-500 font-normal max-w-2xl leading-relaxed">
                    Don't just take our word for it. Here's what engineers say about working with Enlighten Schola.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F5F5F5] rounded-2xl p-8 relative flex flex-col justify-between">
<span className="absolute top-6 left-6 text-5xl text-[#86CCA1]/40 font-georgia leading-none">"</span>
<p className="italic text-neutral-600 text-sm relative z-10 pt-6 mb-8 leading-relaxed font-normal">
                        I've been working with a US fintech startup for 8 months through Enlighten Schola. The work is challenging, the team treats me like I'm in their office, and I'm learning more than I ever did at my previous job.
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-[#86CCA1] text-white flex items-center justify-center text-xs font-medium font-mono-custom shrink-0">RK</div>
<div>
<p className="text-sm font-medium text-neutral-900 leading-tight">Rajesh K.</p>
<p className="text-xs text-neutral-500 font-normal mb-0.5">Senior Full-Stack Engineer</p>
<p className="text-[11px] font-medium text-[#5A9673]">8 months with Enlighten Schola</p>
</div>
</div>
</div>

<div className="bg-[#F5F5F5] rounded-2xl p-8 relative flex flex-col justify-between">
<span className="absolute top-6 left-6 text-5xl text-[#86CCA1]/40 font-georgia leading-none">"</span>
<p className="italic text-neutral-600 text-sm relative z-10 pt-6 mb-8 leading-relaxed font-normal">
                        The vetting process was tough, but fair. Once I got placed, everything was smooth — clear expectations, on-time payments, and a supportive team. I actually look forward to Mondays now.
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-[#86CCA1] text-white flex items-center justify-center text-xs font-medium font-mono-custom shrink-0">PS</div>
<div>
<p className="text-sm font-medium text-neutral-900 leading-tight">Priya S.</p>
<p className="text-xs text-neutral-500 font-normal mb-0.5">DevOps Engineer</p>
<p className="text-[11px] font-medium text-[#5A9673]">1 year with Enlighten Schola</p>
</div>
</div>
</div>

<div className="bg-[#F5F5F5] rounded-2xl p-8 relative flex flex-col justify-between">
<span className="absolute top-6 left-6 text-5xl text-[#86CCA1]/40 font-georgia leading-none">"</span>
<p className="italic text-neutral-600 text-sm relative z-10 pt-6 mb-8 leading-relaxed font-normal">
                        I was skeptical about offshore work, but Enlighten Schola is different. The clients are top-tier, the projects are meaningful, and I finally feel like my work matters. Plus, the AI training they provide has been a game-changer.
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-[#86CCA1] text-white flex items-center justify-center text-xs font-medium font-mono-custom shrink-0">AM</div>
<div>
<p className="text-sm font-medium text-neutral-900 leading-tight">Arjun M.</p>
<p className="text-xs text-neutral-500 font-normal mb-0.5">AI Engineer</p>
<p className="text-[11px] font-medium text-[#5A9673]">6 months with Enlighten Schola</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-12" id="open-roles">
<div className="mb-10 text-center md:text-left">
<p className="text-xs font-medium uppercase tracking-widest text-[#86CCA1] mb-3">Open Roles</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
                    We're hiring now
                </h2>
<p className="text-sm md:text-base text-neutral-500 font-normal max-w-2xl leading-relaxed">
                    Browse current openings and apply to roles that match your skills and interests.
                </p>
</div>

<div className="flex gap-6 mb-8 border-b border-neutral-200 overflow-x-auto no-scrollbar">
<button className="px-1 py-3 text-sm font-medium border-b-2 border-neutral-900 text-neutral-900 whitespace-nowrap transition-colors" id="btn-tech" onclick="switchTab('tech')">
                    Engineering &amp; Tech
                </button>
<button className="px-1 py-3 text-sm font-normal border-b-2 border-transparent text-neutral-500 hover:text-neutral-900 whitespace-nowrap transition-colors" id="btn-sales" onclick="switchTab('sales')">
                    Sales &amp; Marketing
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="tab-tech">

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">AI Engineer</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">3+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">Python · LLMs · RAG · Model Training</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Senior Full-Stack Engineer</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">5+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">React · Node.js · PostgreSQL · AWS</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Associate Full-Stack Engineer</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">2-3 years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">React · Node.js · REST APIs · Git</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Mobile Developer</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">3+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">React Native · iOS · Android · APIs</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">DevOps Engineer</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">5+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">AWS/GCP · CI/CD · Docker · Kubernetes</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">AI Consultant</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">10+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">AI Strategy · LLMs · System Design · Consulting</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Tech Lead</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">8+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">Architecture · Team Leadership · System Design</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-[#F0FDF4] border border-dashed border-[#86CCA1] rounded-2xl p-6 flex flex-col justify-between text-center">
<div className="flex flex-col items-center">
<div className="text-2xl text-[#86CCA1] mb-3">
<iconify-icon icon="solar:stars-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Don't see your role?</h3>
<p className="text-sm text-neutral-600 font-normal mb-6">We're always looking for exceptional engineers and professionals.</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors mt-auto" href="#">Submit Your Profile</a>
</div>
</div>

<div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="tab-sales">

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">SDR (Sales Development Rep)</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">3+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">LinkedIn · Apollo.io · Cold Email · CRM</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Digital Marketing Specialist</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">3+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">Google Ads · Meta Ads · SEO · Analytics</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Lead Generation Specialist</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">2+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">Outbound · Lead Qualification · CRM · Reporting</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Social Media Manager</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">Experience</span>
<span className="text-sm text-neutral-700 font-medium">2+ years</span>
</div>
<p className="text-sm text-neutral-500 font-normal mb-6">Content · LinkedIn · Twitter · Analytics</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors" href="#">Apply Now</a>
</div>

<div className="bg-[#F0FDF4] border border-dashed border-[#86CCA1] rounded-2xl p-6 flex flex-col justify-between text-center">
<div className="flex flex-col items-center">
<div className="text-2xl text-[#86CCA1] mb-3">
<iconify-icon icon="solar:stars-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Don't see your role?</h3>
<p className="text-sm text-neutral-600 font-normal mb-6">We're always looking for exceptional professionals.</p>
</div>
<a className="block w-full text-center bg-[#D4AF37] hover:bg-[#C5A334] text-white text-sm font-medium py-2.5 rounded-lg transition-colors mt-auto" href="#">Submit Your Profile</a>
</div>
</div>

</section>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-1">
<a className="text-lg font-medium tracking-tight text-neutral-900 block mb-4" href="#">
                        Enlighten<span className="text-[#86CCA1]">Schola</span>
</a>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">
                        Connecting elite talent with top-tier startups worldwide.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Talent</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Guidelines</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400 font-normal">© 2024 Enlighten Schola. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="simple-icons:x" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
