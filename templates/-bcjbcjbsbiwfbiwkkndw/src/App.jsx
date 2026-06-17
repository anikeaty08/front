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



    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    const pages = {
      home: document.getElementById('page-home'),
      cv: document.getElementById('page-cv'),
      interview: document.getElementById('page-interview'),
      jobs: document.getElementById('page-jobs')
    };

    function showPage(name) {
      Object.keys(pages).forEach(key => {
        if (pages[key]) pages[key].classList.toggle('hidden', key !== name);
      });
      // Nav styling (desktop & mobile)
      document.querySelectorAll('[data-page]').forEach(el => {
        if (el.closest('nav') || el.classList.contains('nav-link-mobile')) {
          const active = el.getAttribute('data-page') === name;
          el.classList.toggle('text-slate-900', active);
          el.classList.toggle('font-semibold', active);
        }
      });
    }

    // Global nav click
    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', () => {
        const page = el.getAttribute('data-page');
        const subpage = el.getAttribute('data-subpage');
        showPage(page);
        if (page === 'cv' && subpage) {
          setCvSubpage(subpage === 'edit' ? 'edit' : 'create');
        }
        if (window.innerWidth < 768) {
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // CV subpages
    const cvCreate = document.getElementById('cv-create');
    const cvEdit = document.getElementById('cv-edit');
    const cvTabs = document.querySelectorAll('[data-cv-subpage]');

    function setCvSubpage(which) {
      if (!cvCreate || !cvEdit) return;
      if (which === 'edit') {
        cvCreate.classList.add('hidden');
        cvEdit.classList.remove('hidden');
      } else {
        cvCreate.classList.remove('hidden');
        cvEdit.classList.add('hidden');
      }
      cvTabs.forEach(tab => {
        const active = tab.getAttribute('data-cv-subpage') === which;
        tab.classList.toggle('bg-blue-600', active);
        tab.classList.toggle('text-white', active);
        tab.classList.toggle('bg-slate-100', !active);
        tab.classList.toggle('text-slate-700', !active);
      });
    }

    cvTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-cv-subpage');
        setCvSubpage(target);
      });
    });

    // Default page
    showPage('home');
    setCvSubpage('create');

    // Mobile menu
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-slate-50/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-xs font-semibold tracking-tight text-white">
            FH
          </div>
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
            FitHire <span className="text-blue-600">AI</span>
</span>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
<button className="nav-link text-slate-900" data-page="home">Home</button>
<button className="nav-link hover:text-slate-900 transition-colors" data-page="cv">CV</button>
<button className="nav-link hover:text-slate-900 transition-colors" data-page="interview">Interview</button>
<button className="nav-link hover:text-slate-900 transition-colors" data-page="jobs">Jobs</button>
</nav>

<div className="hidden sm:flex items-center gap-2">
<button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-transparent hover:border-slate-200 transition-colors">
            Login
          </button>
<button className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl shadow-sm shadow-blue-500/30 transition-colors">
            Sign Up
          </button>
</div>

<div className="md:hidden flex items-center gap-3">
<button className="text-xs font-medium text-slate-700 border border-slate-200 rounded-lg px-2.5 py-1">
            Login
          </button>
<button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-100" id="mobileMenuToggle">
<span className="sr-only">Toggle menu</span>
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden border-t border-slate-200 bg-slate-50/95 backdrop-blur hidden" id="mobileMenu">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-3 items-center justify-between text-xs font-medium text-slate-700">
<div className="flex gap-3">
<button className="nav-link-mobile text-slate-900" data-page="home">Home</button>
<button className="nav-link-mobile" data-page="cv">CV</button>
<button className="nav-link-mobile" data-page="interview">Interview</button>
<button className="nav-link-mobile" data-page="jobs">Jobs</button>
</div>
</div>
</div>
</header>
<main className="flex-1">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 flex flex-col gap-12">

<section className="flex flex-col gap-16" id="page-home">

<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-blue-700">AI-powered career toolkit</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                  Build a Stronger CV. Prepare Smarter. Get Hired Faster.
                </h1>
<p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  AI-powered tools to create professional CVs, practice interviews, and discover best-fit jobs — all in one focused platform built for modern careers.
                </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 shadow-sm shadow-blue-500/30 transition-colors" data-page="cv" data-subpage="create">
                  Create Your CV
                </button>
<button className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-slate-900 px-4 py-2.5 transition-colors" data-page="jobs">
                  Explore Jobs
                </button>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#64748b'}} width="18"></iconify-icon>
<span>Data secure &amp; private</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:sparkles-linear" style={{color: '#64748b'}} width="18"></iconify-icon>
<span>Optimized for ATS &amp; recruiters</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100/70 via-slate-50 to-indigo-100/50 rounded-3xl blur-2xl opacity-80"></div>
<div className="relative rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.45)] p-5 sm:p-6 lg:p-7 flex flex-col gap-5">

<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">CV Fit Score</p>
<p className="text-2xl font-semibold tracking-tight text-slate-900">86 / 100</p>
<p className="text-xs text-slate-500 mt-1">Strong match for product roles in tech.</p>
</div>
<div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center">
<iconify-icon height="30" icon="solar:document-add-linear" style={{color: '#e5edff'}} width="30"></iconify-icon>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between text-xs text-slate-500">
<span>Profile completeness</span>
<span className="font-medium text-slate-700">92%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 text-xs">
<div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 flex flex-col gap-1.5">
<span className="text-slate-500">Experience</span>
<span className="font-semibold text-slate-900 tracking-tight">6 yrs</span>
<span className="text-slate-500">Product &amp; Strategy</span>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 flex flex-col gap-1.5">
<span className="text-slate-500">Interviews</span>
<span className="font-semibold text-slate-900 tracking-tight">12+</span>
<span className="text-slate-500">in last 60 days</span>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 flex flex-col gap-1.5">
<span className="text-slate-500">Saved Jobs</span>
<span className="font-semibold text-slate-900 tracking-tight">18</span>
<span className="text-slate-500">matching profile</span>
</div>
</div>

<div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-600">Live CV preview</span>
<span className="text-[0.65rem] font-medium text-blue-600 bg-blue-50 rounded-full px-2 py-0.5">AI suggestions on</span>
</div>
<div className="bg-white rounded-xl border border-slate-100 p-3 space-y-2">
<div className="h-1 w-10 bg-slate-200 rounded-full"></div>
<div className="space-y-1.5">
<div className="h-1 w-2/3 bg-slate-300 rounded-full"></div>
<div className="h-1 w-1/2 bg-slate-200 rounded-full"></div>
</div>
<div className="space-y-1.5">
<div className="h-1 w-full bg-slate-100 rounded-full"></div>
<div className="h-1 w-11/12 bg-slate-100 rounded-full"></div>
<div className="h-1 w-10/12 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-slate-500">
<span>Optimized for ATS screening</span>
<button className="text-blue-600 font-medium hover:text-blue-700" data-page="cv">
                      Open CV workspace
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between gap-4">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  Everything you need to land your next role.
                </h2>
<p className="mt-1 text-base text-slate-600">
                  From crafting your CV to practicing interviews and tracking opportunities, FitHire AI keeps your job search structured and data-driven.
                </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-3">
<div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center">
<iconify-icon height="22" icon="solar:document-text-linear" style={{color: '#2563eb'}} width="22"></iconify-icon>
</div>
<span className="text-[0.65rem] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
                    Smart CV Builder
                  </span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Smart CV Builder
                </h3>
<p className="text-sm text-slate-600">
                  Create and optimize your CV with AI-suggested bullet points, structure, and keywords tailored to your target roles.
                </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-3">
<div className="h-9 w-9 rounded-xl bg-indigo-50 flex items-center justify-center">
<iconify-icon height="22" icon="solar:chat-round-linear" style={{color: '#4f46e5'}} width="22"></iconify-icon>
</div>
<span className="text-[0.65rem] font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5">
                    AI Interview Prep
                  </span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  AI Interview Preparation
                </h3>
<p className="text-sm text-slate-600">
                  Generate tailored interview questions with structured answer guidance based on the company, role, and job description.
                </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-50 flex items-center justify-center">
<iconify-icon height="22" icon="solar:briefcase-linear" style={{color: '#0ea5e9'}} width="22"></iconify-icon>
</div>
<span className="text-[0.65rem] font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-2 py-0.5">
                    Job Discovery
                  </span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Job Discovery
                </h3>
<p className="text-sm text-slate-600">
                  Search and find jobs that match your skills and experience, with AI highlighting the best-fit opportunities.
                </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">
                Start building your career today.
              </h3>
<p className="mt-1 text-base text-slate-600">
                Set up your profile once and let FitHire AI guide your next move — from CV to offer letter.
              </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 shadow-sm shadow-blue-500/30 transition-colors" data-page="cv">
                Get Started
              </button>
<button className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-900 px-3 py-2 transition-colors">
                No credit card required
              </button>
</div>
</div>
</section>

<section className="hidden flex-col gap-10" id="page-cv">

<div className="space-y-2">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              CV Management
            </h1>
<p className="text-base text-slate-600 max-w-2xl">
              Create a new CV or improve your existing one using AI-driven suggestions, scoring, and formatting feedback.
            </p>
</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center">
<iconify-icon height="22" icon="solar:document-add-linear" style={{color: '#2563eb'}} width="22"></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-900">
                      Create New CV
                    </h2>
<p className="text-xs text-slate-500">
                      Start from scratch using our guided builder.
                    </p>
</div>
</div>
<span className="text-[0.65rem] font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5">
                  Recommended
                </span>
</div>
<p className="text-sm text-slate-600">
                Use templates optimized for hiring managers and Applicant Tracking Systems. Let AI help you phrase responsibilities and achievements clearly.
              </p>
<button className="mt-1 inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 shadow-sm shadow-blue-500/30 transition-colors self-start" data-page="cv" data-subpage="create">
                Start Creating
              </button>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4 shadow-sm shadow-slate-100">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-50 flex items-center justify-center">
<iconify-icon height="22" icon="solar:document-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-900">
                    Edit Existing CV
                  </h2>
<p className="text-xs text-slate-500">
                    Upload your CV for instant AI analysis.
                  </p>
</div>
</div>
<p className="text-sm text-slate-600">
                Receive a detailed score, keyword coverage analysis, and actionable improvements — including structure, clarity, and formatting guidance.
              </p>
<button className="mt-1 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-semibold text-slate-900 px-4 py-2.5 transition-colors self-start" data-page="cv" data-subpage="edit">
                Upload CV
              </button>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-7 flex flex-col gap-8 shadow-sm shadow-slate-100">

<div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600">
<button className="cv-tab inline-flex items-center gap-1 rounded-full bg-blue-600 text-white px-3 py-1.5" data-cv-subpage="create">
<span>Create New CV</span>
</button>
<button className="cv-tab inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-3 py-1.5" data-cv-subpage="edit">
<span>Edit &amp; Analyze CV</span>
</button>
</div>

<div className="grid lg:grid-cols-2 gap-7 items-start" id="cv-create">

<div className="space-y-5">

<div className="space-y-2.5">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Personal Information</h3>
<p className="text-xs text-slate-500">Tell us who you are and how employers can reach you.</p>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Full Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm text-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="Alex Johnson" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Role Title</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm text-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="Product Manager" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Email</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm text-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Location</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm text-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="Berlin, Germany" type="text"/>
</div>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Education</h3>
<p className="text-xs text-slate-500">Summarize your academic background.</p>
</div>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                      + Add entry
                    </button>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Institution</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="University name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Degree</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="B.Sc. in Computer Science" type="text"/>
</div>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Work Experience</h3>
<p className="text-xs text-slate-500">Highlight impact, not just responsibilities.</p>
</div>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                      + Add role
                    </button>
</div>
<div className="space-y-2">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Most recent role</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="e.g. Senior Product Manager at Acme" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 flex items-center justify-between">
<span>Key achievements</span>
<span className="text-[0.65rem] text-slate-500">AI will help rewrite and quantify</span>
</label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="- Led launch of..." rows="3"></textarea>
</div>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Skills</h3>
<p className="text-xs text-slate-500">We’ll cluster and prioritize for you.</p>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Core skills</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="e.g. Product strategy, Roadmapping, SQL, A/B testing" type="text"/>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Certifications</h3>
<p className="text-xs text-slate-500">Optional, but helpful for specialized roles.</p>
</div>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                      + Add certification
                    </button>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Certification</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="e.g. PMP, AWS Solutions Architect" type="text"/>
</div>
</div>

<div className="pt-2 flex items-center justify-between gap-3">
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 shadow-sm shadow-blue-500/30 transition-colors">
<iconify-icon height="18" icon="solar:wand-2-linear" style={{color: '#eff6ff'}} width="18"></iconify-icon>
<span>Generate CV with AI</span>
</button>
<p className="text-[0.65rem] text-slate-500">
                    You’ll be able to edit everything before exporting.
                  </p>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      Live CV Preview
                    </h3>
<p className="text-xs text-slate-500">
                      Your layout updates in real time as you type.
                    </p>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.65rem] font-medium text-slate-700">
<iconify-icon height="15" icon="solar:monitor-smartphone-linear" style={{color: '#0f172a'}} width="15"></iconify-icon>
<span>Export as PDF</span>
</button>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 sm:p-4">
<div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 space-y-4">

<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
<div>
<div className="h-3 w-24 bg-slate-200 rounded-full mb-1.5"></div>
<div className="h-2 w-32 bg-slate-100 rounded-full"></div>
</div>
<div className="space-y-1">
<div className="h-1.5 w-32 bg-slate-100 rounded-full ml-auto"></div>
<div className="h-1.5 w-28 bg-slate-100 rounded-full ml-auto"></div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-2">
<div className="h-1.5 w-16 bg-slate-200 rounded-full"></div>
<div className="space-y-1">
<div className="h-1 w-full bg-slate-100 rounded-full"></div>
<div className="h-1 w-11/12 bg-slate-100 rounded-full"></div>
<div className="h-1 w-10/12 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-14 bg-slate-200 rounded-full"></div>
<div className="space-y-1">
<div className="h-1 w-full bg-slate-100 rounded-full"></div>
<div className="h-1 w-10/12 bg-slate-100 rounded-full"></div>
<div className="h-1 w-9/12 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>

<div className="space-y-2">
<div className="h-1.5 w-20 bg-slate-200 rounded-full"></div>
<div className="space-y-1.5">
<div className="flex gap-1.5 items-start">
<div className="h-1 w-1 rounded-full bg-slate-400 mt-1"></div>
<div className="flex-1 space-y-1">
<div className="h-1 w-full bg-slate-100 rounded-full"></div>
<div className="h-1 w-11/12 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="flex gap-1.5 items-start">
<div className="h-1 w-1 rounded-full bg-slate-400 mt-1"></div>
<div className="flex-1 space-y-1">
<div className="h-1 w-full bg-slate-100 rounded-full"></div>
<div className="h-1 w-9/12 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="space-y-1.5">
<div className="h-1.5 w-16 bg-slate-200 rounded-full"></div>
<div className="flex flex-wrap gap-1.5">
<div className="h-3 w-10 rounded-full bg-slate-100"></div>
<div className="h-3 w-12 rounded-full bg-slate-100"></div>
<div className="h-3 w-14 rounded-full bg-slate-100"></div>
<div className="h-3 w-9 rounded-full bg-slate-100"></div>
</div>
</div>
</div>
</div>
<p className="text-[0.65rem] text-slate-500">
                  Layouts are employer-friendly and optimized for quick scanning.
                </p>
</div>
</div>

<div className="hidden space-y-7" id="cv-edit">

<div className="space-y-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Upload existing CV
                  </h3>
<p className="text-xs text-slate-500">
                    We support PDF and DOCX. Your file is processed securely and never shared.
                  </p>
</div>
<div className="border border-dashed border-slate-300 rounded-2xl bg-slate-50/60 p-6 flex flex-col items-center justify-center text-center gap-2">
<div className="h-10 w-10 rounded-2xl bg-white shadow-sm shadow-slate-200 border border-slate-100 flex items-center justify-center mb-1">
<iconify-icon height="24" icon="solar:cloud-upload-linear" style={{color: '#2563eb'}} width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-800">
                    Drag &amp; drop your CV here
                  </p>
<p className="text-xs text-slate-500">
                    or click to browse files (PDF, DOCX)
                  </p>
<button className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-xs font-medium text-slate-900 px-3 py-1.5 border border-slate-200 hover:bg-slate-100 transition-colors">
                    Choose file
                  </button>
</div>
</div>

<div className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-6">

<div className="space-y-4">
<div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-3">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">CV Score</p>
<p className="text-2xl font-semibold tracking-tight text-slate-900">78 / 100</p>
</div>
<div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center">
<iconify-icon height="24" icon="solar:chart-linear" style={{color: '#2563eb'}} width="24"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-500">
                      Solid core profile. Focus on impact metrics and role-specific keywords to reach 90+.
                    </p>
<div className="space-y-1.5">
<div className="flex justify-between text-[0.65rem] text-slate-500">
<span>ATS readiness</span>
<span className="font-medium text-emerald-600">High</span>
</div>
<div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[82%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3 text-xs">
<p className="text-xs font-semibold tracking-tight text-slate-900">Quick stats</p>
<div className="space-y-2">
<div className="flex items-center justify-between gap-3">
<span className="text-slate-500">Keyword match</span>
<span className="font-medium text-slate-800">71%</span>
</div>
<div className="flex items-center justify-between gap-3">
<span className="text-slate-500">Experience clarity</span>
<span className="font-medium text-slate-800">Good</span>
</div>
<div className="flex items-center justify-between gap-3">
<span className="text-slate-500">Formatting</span>
<span className="font-medium text-slate-800">Needs refinement</span>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="grid sm:grid-cols-2 gap-3">

<div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
<p className="text-xs font-semibold tracking-tight text-emerald-700 flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" style={{color: '#059669'}} width="16"></iconify-icon>
                        Strengths
                      </p>
<ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
<li>Strong progression in product roles.</li>
<li>Clear ownership of features and launches.</li>
<li>Good mix of qualitative and quantitative outcomes.</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
<p className="text-xs font-semibold tracking-tight text-amber-700 flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:warning-triangle-linear" style={{color: '#d97706'}} width="16"></iconify-icon>
                        Weaknesses
                      </p>
<ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
<li>Several bullets lack measurable impact.</li>
<li>Summary section is generic and lengthy.</li>
<li>Formatting is dense on the first page.</li>
</ul>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-3">
<div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
<p className="text-xs font-semibold tracking-tight text-slate-900">
                        Missing Keywords
                      </p>
<p className="text-[0.65rem] text-slate-500 mb-1">
                        Based on typical requirements for your target role.
                      </p>
<div className="flex flex-wrap gap-1.5">
<span className="text-[0.65rem] font-medium px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                          Stakeholder alignment
                        </span>
<span className="text-[0.65rem] font-medium px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                          Roadmapping
                        </span>
<span className="text-[0.65rem] font-medium px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                          Experiment design
                        </span>
<span className="text-[0.65rem] font-medium px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                          User research
                        </span>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
<p className="text-xs font-semibold tracking-tight text-slate-900">
                        Formatting Suggestions
                      </p>
<ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
<li>Increase line spacing slightly in Experience section.</li>
<li>Align dates to the right for consistent scanning.</li>
<li>Limit your CV to two pages for this experience level.</li>
</ul>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 pt-1">
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 shadow-sm shadow-blue-500/30 transition-colors">
<iconify-icon height="18" icon="solar:wand-2-linear" style={{color: '#eff6ff'}} width="18"></iconify-icon>
<span>Apply AI Improvements</span>
</button>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-slate-900 px-4 py-2.5 transition-colors">
<iconify-icon height="18" icon="solar:download-linear" style={{color: '#0f172a'}} width="18"></iconify-icon>
<span>Download Updated CV</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden flex-col gap-8" id="page-interview">

<div className="space-y-2">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              AI Interview Preparation
            </h1>
<p className="text-base text-slate-600 max-w-2xl">
              Generate tailored interview questions and structured answer guidance based on the company, role, and job description you provide.
            </p>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-7 space-y-6 shadow-sm shadow-slate-100">
<div className="grid md:grid-cols-3 gap-4">
<div className="space-y-1.5 md:col-span-1">
<label className="text-xs font-medium text-slate-700">Company Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/70 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="e.g. Acme Technologies" type="text"/>
</div>
<div className="space-y-1.5 md:col-span-1">
<label className="text-xs font-medium text-slate-700">Position Applied</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/70 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="e.g. Senior Product Manager" type="text"/>
</div>
<div className="flex md:items-end">
<button className="w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 mt-5 md:mt-0 shadow-sm shadow-blue-500/30 transition-colors">
<iconify-icon height="18" icon="solar:magic-stick-3-linear" style={{color: '#eff6ff'}} width="18"></iconify-icon>
<span className="ml-1.5">Generate Questions</span>
</button>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 flex items-center justify-between">
<span>Job Description <span className="text-slate-400">(optional)</span></span>
<span className="text-[0.65rem] text-slate-500">Paste from job posting for more precise questions</span>
</label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50/70 focus:bg-white text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="Paste the job description or requirements here..." rows="4"></textarea>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between gap-3">
<h2 className="text-sm font-semibold tracking-tight text-slate-900">
                Sample question set
              </h2>
<span className="text-[0.65rem] text-slate-500">
                These are examples. Your questions will adapt to each role.
              </span>
</div>
<div className="rounded-3xl border border-slate-200 bg-white divide-y divide-slate-100 shadow-sm shadow-slate-100">

<details className="group">
<summary className="list-none cursor-pointer flex items-start justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4">
<div className="space-y-1 flex-1">
<p className="text-xs font-medium text-slate-800">
                      Walk me through a recent product you launched end-to-end. What were your goals and how did you measure success?
                    </p>
<p className="text-[0.65rem] text-slate-500">
                      Evaluates ownership, outcome focus, and decision-making.
                    </p>
</div>
<div className="pt-1">
<iconify-icon className="transition-transform group-open:rotate-180" height="18" icon="solar:alt-arrow-down-linear" style={{color: '#64748b'}} width="18"></iconify-icon>
</div>
</summary>
<div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-slate-600 space-y-2">
<p className="font-medium text-slate-800">Suggested answer structure</p>
<ul className="list-disc list-inside space-y-1.5">
<li><span className="font-medium">Context:</span> Briefly describe the product, audience, and business constraint.</li>
<li><span className="font-medium">Goals:</span> Quantify the primary success metrics (activation, retention, revenue, etc.).</li>
<li><span className="font-medium">Approach:</span> Explain your discovery, prioritization, and trade-off decisions.</li>
<li><span className="font-medium">Execution:</span> Outline collaboration with design, engineering, and stakeholders.</li>
<li><span className="font-medium">Outcomes:</span> Share concrete results and what you would do differently next time.</li>
</ul>
</div>
</details>

<details className="group">
<summary className="list-none cursor-pointer flex items-start justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4">
<div className="space-y-1 flex-1">
<p className="text-xs font-medium text-slate-800">
                      Tell me about a time you had conflicting feedback from stakeholders. How did you move the product forward?
                    </p>
<p className="text-[0.65rem] text-slate-500">
                      Tests stakeholder management and communication.
                    </p>
</div>
<div className="pt-1">
<iconify-icon className="transition-transform group-open:rotate-180" height="18" icon="solar:alt-arrow-down-linear" style={{color: '#64748b'}} width="18"></iconify-icon>
</div>
</summary>
<div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-slate-600 space-y-2">
<p className="font-medium text-slate-800">Suggested answer structure</p>
<ul className="list-disc list-inside space-y-1.5">
<li><span className="font-medium">Situation:</span> Describe the stakeholders and nature of conflict.</li>
<li><span className="font-medium">Options:</span> Outline the trade-offs you considered.</li>
<li><span className="font-medium">Decision:</span> Explain the principle or data you used to decide.</li>
<li><span className="font-medium">Communication:</span> Show how you brought stakeholders along.</li>
<li><span className="font-medium">Outcome:</span> Summarize impact and learning.</li>
</ul>
</div>
</details>

<details className="group">
<summary className="list-none cursor-pointer flex items-start justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4">
<div className="space-y-1 flex-1">
<p className="text-xs font-medium text-slate-800">
                      How do you decide what to build next when you have limited engineering capacity?
                    </p>
<p className="text-[0.65rem] text-slate-500">
                      Explores prioritization frameworks and product sense.
                    </p>
</div>
<div className="pt-1">
<iconify-icon className="transition-transform group-open:rotate-180" height="18" icon="solar:alt-arrow-down-linear" style={{color: '#64748b'}} width="18"></iconify-icon>
</div>
</summary>
<div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-slate-600 space-y-2">
<p className="font-medium text-slate-800">Suggested answer structure</p>
<ul className="list-disc list-inside space-y-1.5">
<li><span className="font-medium">Inputs:</span> Users, business goals, tech constraints.</li>
<li><span className="font-medium">Framework:</span> RICE, impact vs. effort, or similar model.</li>
<li><span className="font-medium">Validation:</span> How you test assumptions pre-build.</li>
<li><span className="font-medium">Communication:</span> How you set expectations with stakeholders.</li>
<li><span className="font-medium">Iteration:</span> Adjusting priorities based on results.</li>
</ul>
</div>
</details>
</div>
</div>
</section>

<section className="hidden flex-col gap-8" id="page-jobs">

<div className="space-y-2">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Find Your Next Opportunity
            </h1>
<p className="text-base text-slate-600 max-w-2xl">
              Discover roles aligned with your skills, experience, and preferences. Save, track, and apply directly from your FitHire AI workspace.
            </p>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-7 space-y-5 shadow-sm shadow-slate-100">
<div className="flex flex-col gap-3">

<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" height="18" icon="solar:magnifier-linear" width="18"></iconify-icon>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/70 focus:bg-white text-sm pl-8 pr-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500" placeholder="Search job title, company, or keyword" type="text"/>
</div>
<button className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 shadow-sm shadow-blue-500/30 transition-colors">
                  Search Jobs
                </button>
</div>

<div className="flex flex-wrap gap-3 text-xs text-slate-600">

<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
<span className="text-slate-500">Location</span>
<select className="bg-transparent text-xs text-slate-800 outline-none">
<option>Any</option>
<option>Remote</option>
<option>On-site</option>
<option>Hybrid</option>
</select>
</div>

<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
<span className="text-slate-500">Experience</span>
<select className="bg-transparent text-xs text-slate-800 outline-none">
<option>All levels</option>
<option>Entry</option>
<option>Mid</option>
<option>Senior</option>
<option>Lead</option>
</select>
</div>

<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
<span className="text-slate-500">Salary</span>
<select className="bg-transparent text-xs text-slate-800 outline-none">
<option>Any</option>
<option>$60k+</option>
<option>$90k+</option>
<option>$120k+</option>
</select>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between gap-3 text-xs text-slate-500">
<span>Showing recommended roles based on your profile.</span>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                Adjust preferences
              </button>
</div>
<div className="space-y-3">

<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex flex-wrap items-start justify-between gap-3">
<div className="space-y-1">
<div className="flex items-center gap-2">
<h2 className="text-sm font-semibold tracking-tight text-slate-900">
                        Senior Product Manager
                      </h2>
<span className="text-[0.65rem] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
                        Strong match
                      </span>
</div>
<p className="text-xs text-slate-600">
                      Atlas Labs • Berlin, Germany • Hybrid
                    </p>
<p className="text-xs text-slate-500">
                      Estimated salary: €90,000 – €115,000
                    </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-1.5 transition-colors">
                      Apply
                    </button>
<button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-[0.65rem] font-medium text-slate-800 px-2.5 py-1 transition-colors">
<iconify-icon height="15" icon="solar:bookmark-linear" style={{color: '#0f172a'}} width="15"></iconify-icon>
<span>Save</span>
</button>
</div>
</div>
<p className="text-xs text-slate-600">
                  Own the roadmap for customer onboarding experiences across web and mobile. You’ll work closely with design, research, and engineering to scale self-serve adoption globally.
                </p>
<div className="flex flex-wrap gap-1.5 text-[0.65rem]">
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">Product strategy</span>
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">B2B SaaS</span>
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">Experimentation</span>
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">User research</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex flex-wrap items-start justify-between gap-3">
<div className="space-y-1">
<div className="flex items-center gap-2">
<h2 className="text-sm font-semibold tracking-tight text-slate-900">
                        Product Lead, Growth
                      </h2>
<span className="text-[0.65rem] font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5">
                        Recommended
                      </span>
</div>
<p className="text-xs text-slate-600">
                      Northwind • Remote (Europe)
                    </p>
<p className="text-xs text-slate-500">
                      Estimated salary: $130,000 – $150,000
                    </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-1.5 transition-colors">
                      Apply
                    </button>
<button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-[0.65rem] font-medium text-slate-800 px-2.5 py-1 transition-colors">
<iconify-icon height="15" icon="solar:bookmark-linear" style={{color: '#0f172a'}} width="15"></iconify-icon>
<span>Save</span>
</button>
</div>
</div>
<p className="text-xs text-slate-600">
                  Lead a cross-functional squad to drive acquisition and activation across multiple channels, working in a data-rich environment with strong experimentation culture.
                </p>
<div className="flex flex-wrap gap-1.5 text-[0.65rem]">
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">Growth</span>
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">Funnels</span>
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">A/B testing</span>
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">Remote-first</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex flex-wrap items-start justify-between gap-3">
<div className="space-y-1">
<h2 className="text-sm font-semibold tracking-tight text-slate-900">
                      Product Manager, Analytics Platform
                    </h2>
<p className="text-xs text-slate-600">
                      Vertex Data • London, United Kingdom • On-site
                    </p>
<p className="text-xs text-slate-500">
                      Salary not disclosed
                    </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-1.5 transition-colors">
                      Apply
                    </button>
<button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-[0.65rem] font-medium text-slate-800 px-2.5 py-1 transition-colors">
<iconify-icon height="15" icon="solar:bookmark-linear" style={{color: '#0f172a'}} width="15"></iconify-icon>
<span>Save</span>
</button>
</div>
</div>
<p className="text-xs text-slate-600">
                  Define and build analytics experiences that help enterprise customers make data-driven decisions across their organizations.
                </p>
<div className="flex flex-wrap gap-1.5 text-[0.65rem]">
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">Analytics</span>
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">Enterprise</span>
<span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">Stakeholder management</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-200 bg-slate-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
<p>© <span id="year"></span> FitHire AI. All rights reserved.</p>
<div className="flex items-center gap-3">
<button className="hover:text-slate-700">Privacy</button>
<button className="hover:text-slate-700">Terms</button>
<button className="hover:text-slate-700 flex items-center gap-1">
<iconify-icon height="14" icon="solar:chat-dots-linear" style={{color: '#64748b'}} width="14"></iconify-icon>
<span>Support</span>
</button>
</div>
</div>
</footer>
</div>


    </>
  );
}
