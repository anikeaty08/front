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



    // Initialize Lucide icons
    lucide.createIcons();

    // Update year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  
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
      
<div className="relative min-h-screen overflow-x-hidden">

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-100/40 blur-3xl"></div>
<div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl"></div>
</div>

<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

<header className="mb-12 flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-sm font-semibold text-white shadow-lg shadow-violet-500/30">
            MA
          </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900">Mili Akter</span>
<span className="text-xs font-normal text-slate-600">Data Analyst</span>
</div>
</div>
<nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
<a className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-slate-900" href="#about">About</a>
<a className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-slate-900" href="#skills">Skills</a>
<a className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-slate-900" href="#projects">Projects</a>
<a className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-slate-900" href="#certificates">Certificates</a>
<a className="ml-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-xl hover:shadow-violet-500/40" href="#contact">
            Contact
          </a>
</nav>
<button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden">
          Menu
        </button>
</header>

<section className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center" id="home">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
</span>
            Available for opportunities
          </div>
<div className="space-y-4">
<h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Data Analyst &amp;
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"> BI Specialist</span>
</h1>
<p className="text-lg font-normal leading-relaxed text-slate-700">
              Hi, I'm <span className="font-semibold text-slate-900">Mili Akter</span> — I transform complex datasets into clear insights that drive business decisions. Specialized in SQL, Python, Power BI, and Machine Learning.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-xl hover:shadow-violet-500/40" href="#projects">
<i className="h-4 w-4" data-lucide="folder-open"></i>
              View Projects
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md" href="#contact">
<i className="h-4 w-4" data-lucide="mail"></i>
              Get In Touch
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md" href="#">
<i className="h-4 w-4" data-lucide="download"></i>
              Download CV
            </a>
</div>

<div className="grid grid-cols-3 gap-4 rounded-2xl border border-slate-200/60 bg-white/60 p-6 backdrop-blur-sm">
<div className="text-center">
<div className="text-2xl font-bold text-violet-600">10+</div>
<div className="text-xs text-slate-600">Projects</div>
</div>
<div className="border-x border-slate-200 text-center">
<div className="text-2xl font-bold text-purple-600">6+</div>
<div className="text-xs text-slate-600">Core Skills</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-indigo-600">5+</div>
<div className="text-xs text-slate-600">Certifications</div>
</div>
</div>
</div>

<div className="relative">
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

<div className="mb-6 flex justify-center">
<div className="relative">
<div className="h-48 w-48 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 shadow-lg">
<img alt="Mili Akter" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="absolute -bottom-3 -right-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  Hiring Now
                </div>
</div>
</div>

<div className="space-y-4 text-center">
<div>
<h3 className="text-xl font-bold text-slate-900">Mili Akter</h3>
<p className="text-base text-slate-600">Data Analyst &amp; BI Developer</p>
</div>
<div className="flex items-center justify-center gap-2 text-sm text-slate-600">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span>Bangladesh (Remote-ready)</span>
</div>
<div className="space-y-2 rounded-2xl bg-slate-50 p-4">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-600">Education</span>
<span className="font-semibold text-slate-900">CSE, DIU</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-600">Graduation</span>
<span className="font-semibold text-violet-600">April 2026</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-600">Experience</span>
<span className="font-semibold text-slate-900">Academic + Projects</span>
</div>
</div>

<div className="flex justify-center gap-3 pt-2">
<a className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600" href="#">
<i className="h-4 w-4" data-lucide="github"></i>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20" id="about">
<div className="mb-10 text-center">
<h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">About Me</h2>
<p className="mx-auto max-w-2xl text-lg text-slate-600">
            Passionate about turning data into actionable insights
          </p>
</div>
<div className="grid gap-6 lg:grid-cols-2">
<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
<i className="h-5 w-5" data-lucide="user"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">My Journey</h3>
</div>
<p className="mb-4 text-base leading-relaxed text-slate-700">
              As a final-year Computer Science student at Daffodil International University, I've dedicated myself to mastering data analytics and business intelligence. My academic journey has been complemented by hands-on projects in SQL, Python, and Power BI.
            </p>
<p className="text-base leading-relaxed text-slate-700">
              I specialize in extracting insights from complex datasets, building interactive dashboards, and developing predictive models that help organizations make data-driven decisions.
            </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
<i className="h-5 w-5" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Education &amp; Focus</h3>
</div>
<div className="space-y-4">
<div>
<div className="mb-2 flex items-start justify-between">
<div>
<p className="font-semibold text-slate-900">B.Sc. in Computer Science &amp; Engineering</p>
<p className="text-sm text-violet-600">Daffodil International University</p>
</div>
</div>
<p className="text-sm text-slate-600">Expected: April 2026</p>
</div>
<div className="rounded-xl bg-slate-50 p-4">
<p className="mb-2 text-sm font-semibold text-slate-900">Key Coursework</p>
<div className="flex flex-wrap gap-2">
<span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">Data Structures</span>
<span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">Algorithms</span>
<span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">Database Systems</span>
<span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">Statistics</span>
<span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">Machine Learning</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20" id="skills">
<div className="mb-10 text-center">
<h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">Core Skills &amp; Expertise</h2>
<p className="mx-auto max-w-2xl text-lg text-slate-600">
            Technical proficiencies that drive data-driven solutions
          </p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-violet-300 hover:shadow-lg">
<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-violet-100/50 transition-transform group-hover:scale-150"></div>
<div className="relative">
<div className="mb-4 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30">
<i className="h-6 w-6" data-lucide="code-2"></i>
</div>
<span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">Expert</span>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Python for Data Analysis</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-learn for end-to-end data workflows
              </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Pandas</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">NumPy</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Scikit-learn</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Plotly</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-purple-300 hover:shadow-lg">
<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-purple-100/50 transition-transform group-hover:scale-150"></div>
<div className="relative">
<div className="mb-4 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30">
<i className="h-6 w-6" data-lucide="database"></i>
</div>
<span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Expert</span>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">SQL &amp; Database Management</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Advanced queries, CTEs, window functions, stored procedures, and optimization techniques
              </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">MySQL</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">PostgreSQL</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Optimization</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">ETL</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-lg">
<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-indigo-100/50 transition-transform group-hover:scale-150"></div>
<div className="relative">
<div className="mb-4 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/30">
<i className="h-6 w-6" data-lucide="layout-dashboard"></i>
</div>
<span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">Expert</span>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Power BI &amp; Visualization</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                DAX, data modeling, interactive dashboards, and KPI tracking for business intelligence
              </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">DAX</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Data Modeling</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Dashboards</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">KPIs</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-violet-300 hover:shadow-lg">
<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-violet-100/50 transition-transform group-hover:scale-150"></div>
<div className="relative">
<div className="mb-4 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30">
<i className="h-6 w-6" data-lucide="brain"></i>
</div>
<span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">Advanced</span>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Machine Learning</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Supervised &amp; unsupervised learning, model evaluation, feature engineering, and deployment
              </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Classification</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Regression</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Clustering</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Ensemble</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-purple-300 hover:shadow-lg">
<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-purple-100/50 transition-transform group-hover:scale-150"></div>
<div className="relative">
<div className="mb-4 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30">
<i className="h-6 w-6" data-lucide="bar-chart-3"></i>
</div>
<span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Expert</span>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Statistics &amp; Analytics</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Descriptive &amp; inferential statistics, hypothesis testing, probability, and statistical modeling
              </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Hypothesis Testing</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">A/B Testing</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Distributions</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-lg">
<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-indigo-100/50 transition-transform group-hover:scale-150"></div>
<div className="relative">
<div className="mb-4 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/30">
<i className="h-6 w-6" data-lucide="table"></i>
</div>
<span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">Expert</span>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Microsoft Excel</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Power Query, Power Pivot, advanced formulas, pivot tables, and data analysis tools
              </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Power Query</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Pivot Tables</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">XLOOKUP</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Macros</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20" id="projects">
<div className="mb-10 text-center">
<h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
<p className="mx-auto max-w-2xl text-lg text-slate-600">
            Real-world data analytics projects showcasing technical skills and business impact
          </p>
</div>

<div className="mb-8 flex flex-wrap justify-center gap-2">
<button className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30">All Projects</button>
<button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">SQL</button>
<button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Python</button>
<button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Power BI</button>
<button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Machine Learning</button>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl">
<div className="h-48 overflow-hidden bg-gradient-to-br from-violet-100 to-purple-100">
<img alt="Grocery Sales Dashboard" className="h-full w-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-3 flex items-center justify-between">
<span className="rounded-lg bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">SQL</span>
<a className="text-slate-400 transition-colors hover:text-violet-600" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
</a>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Grocery Sales Analysis</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Analyzed 12 months of grocery sales data to identify revenue drivers, seasonal patterns, and customer segments using advanced SQL queries and window functions.
              </p>
<div className="mb-4 flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">SQL</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Data Analysis</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Segmentation</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-semibold text-slate-900">Impact:</span>
<span className="text-violet-600">+15% Insights</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl">
<div className="h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
<img alt="IPL Cricket Analytics" className="h-full w-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-3 flex items-center justify-between">
<span className="rounded-lg bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Python</span>
<a className="text-slate-400 transition-colors hover:text-purple-600" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
</a>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">IPL Match Insights Dashboard</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Built comprehensive sports analytics platform using Python, analyzing 10+ seasons of IPL data to reveal winning strategies and player performance metrics.
              </p>
<div className="mb-4 flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Python</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Pandas</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Visualization</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-semibold text-slate-900">Dataset:</span>
<span className="text-purple-600">15K+ Records</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl">
<div className="h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100">
<img alt="Pizza Sales Dashboard" className="h-full w-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-3 flex items-center justify-between">
<span className="rounded-lg bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">Power BI</span>
<a className="text-slate-400 transition-colors hover:text-indigo-600" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
</a>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Pizza Sales BI Dashboard</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Created interactive Power BI dashboard tracking sales KPIs, product performance, and customer trends with dynamic DAX measures and drill-through capabilities.
              </p>
<div className="mb-4 flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Power BI</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">DAX</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">KPIs</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-semibold text-slate-900">Revenue Tracked:</span>
<span className="text-indigo-600">$1M+</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl">
<div className="h-48 overflow-hidden bg-gradient-to-br from-violet-100 to-purple-100">
<img alt="Hospital ER Dashboard" className="h-full w-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-3 flex items-center justify-between">
<span className="rounded-lg bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">Power BI</span>
<a className="text-slate-400 transition-colors hover:text-violet-600" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
</a>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Hospital Emergency Room Analytics</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Designed healthcare dashboard monitoring ER visits, wait times, and capacity metrics to identify operational bottlenecks and improve patient care.
              </p>
<div className="mb-4 flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Healthcare</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Power BI</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Optimization</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-semibold text-slate-900">Patients Analyzed:</span>
<span className="text-violet-600">50K+</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl">
<div className="h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
<img alt="Customer Segmentation" className="h-full w-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-3 flex items-center justify-between">
<span className="rounded-lg bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">SQL + ML</span>
<a className="text-slate-400 transition-colors hover:text-purple-600" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
</a>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Customer Segmentation Model</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Implemented RFM analysis and clustering algorithms to segment customers into strategic groups, enabling targeted marketing campaigns and retention strategies.
              </p>
<div className="mb-4 flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">RFM Analysis</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">K-Means</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">SQL</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-semibold text-slate-900">Segments:</span>
<span className="text-purple-600">5 Groups</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl">
<div className="h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100">
<img alt="Fraud Detection" className="h-full w-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-3 flex items-center justify-between">
<span className="rounded-lg bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">SQL + ML</span>
<a className="text-slate-400 transition-colors hover:text-indigo-600" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
</a>
</div>
<h3 className="mb-2 text-xl font-bold text-slate-900">Fraud Detection System</h3>
<p className="mb-4 text-sm leading-relaxed text-slate-600">
                Developed rule-based fraud detection using SQL and machine learning algorithms to flag suspicious transactions with 95% accuracy rate.
              </p>
<div className="mb-4 flex flex-wrap gap-2">
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Anomaly Detection</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">SQL</span>
<span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700">Classification</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-semibold text-slate-900">Accuracy:</span>
<span className="text-indigo-600">95%</span>
</div>
</div>
</article>
</div>
</section>

<section className="mb-20" id="certificates">
<div className="mb-10 text-center">
<h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">Certifications &amp; Training</h2>
<p className="mx-auto max-w-2xl text-lg text-slate-600">
            Professional certifications demonstrating expertise and commitment to continuous learning
          </p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg">
<div className="h-40 bg-gradient-to-br from-violet-500 to-purple-600 p-6">
<img alt="Data Analysis Certificate" className="h-full w-full rounded-lg object-cover opacity-20" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&amp;h=300&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-2 flex items-center justify-between">
<span className="rounded-lg bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">Coursera</span>
<i className="h-5 w-5 text-violet-600" data-lucide="award"></i>
</div>
<h3 className="mb-2 text-lg font-bold text-slate-900">Google Data Analytics Professional Certificate</h3>
<p className="mb-3 text-sm text-slate-600">Comprehensive data analytics training covering SQL, R, Tableau, and data storytelling</p>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Issued: 2024</span>
<a className="text-violet-600 hover:underline" href="#">View Credential</a>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg">
<div className="h-40 bg-gradient-to-br from-purple-500 to-pink-600 p-6">
<img alt="Power BI Certificate" className="h-full w-full rounded-lg object-cover opacity-20" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&amp;h=300&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-2 flex items-center justify-between">
<span className="rounded-lg bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Microsoft</span>
<i className="h-5 w-5 text-purple-600" data-lucide="award"></i>
</div>
<h3 className="mb-2 text-lg font-bold text-slate-900">Microsoft Power BI Data Analyst Associate</h3>
<p className="mb-3 text-sm text-slate-600">Advanced Power BI certification covering DAX, data modeling, and enterprise BI solutions</p>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Issued: 2024</span>
<a className="text-purple-600 hover:underline" href="#">View Credential</a>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg">
<div className="h-40 bg-gradient-to-br from-indigo-500 to-blue-600 p-6">
<img alt="Machine Learning Certificate" className="h-full w-full rounded-lg object-cover opacity-20" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&amp;h=300&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-2 flex items-center justify-between">
<span className="rounded-lg bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">Coursera</span>
<i className="h-5 w-5 text-indigo-600" data-lucide="award"></i>
</div>
<h3 className="mb-2 text-lg font-bold text-slate-900">Machine Learning Specialization</h3>
<p className="mb-3 text-sm text-slate-600">Stanford University course covering supervised learning, neural networks, and ML best practices</p>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Issued: 2024</span>
<a className="text-indigo-600 hover:underline" href="#">View Credential</a>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg">
<div className="h-40 bg-gradient-to-br from-violet-500 to-purple-600 p-6">
<img alt="SQL Certificate" className="h-full w-full rounded-lg object-cover opacity-20" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&amp;h=300&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-2 flex items-center justify-between">
<span className="rounded-lg bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">HackerRank</span>
<i className="h-5 w-5 text-violet-600" data-lucide="award"></i>
</div>
<h3 className="mb-2 text-lg font-bold text-slate-900">SQL Advanced Certification</h3>
<p className="mb-3 text-sm text-slate-600">Advanced SQL skills assessment covering complex queries, optimization, and database design</p>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Issued: 2023</span>
<a className="text-violet-600 hover:underline" href="#">View Credential</a>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg">
<div className="h-40 bg-gradient-to-br from-purple-500 to-pink-600 p-6">
<img alt="Python Certificate" className="h-full w-full rounded-lg object-cover opacity-20" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&amp;h=300&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-2 flex items-center justify-between">
<span className="rounded-lg bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">DataCamp</span>
<i className="h-5 w-5 text-purple-600" data-lucide="award"></i>
</div>
<h3 className="mb-2 text-lg font-bold text-slate-900">Python for Data Science Track</h3>
<p className="mb-3 text-sm text-slate-600">Comprehensive Python training for data manipulation, visualization, and statistical analysis</p>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Issued: 2023</span>
<a className="text-purple-600 hover:underline" href="#">View Credential</a>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg">
<div className="h-40 bg-gradient-to-br from-indigo-500 to-blue-600 p-6">
<img alt="Statistics Certificate" className="h-full w-full rounded-lg object-cover opacity-20" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&amp;h=300&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="mb-2 flex items-center justify-between">
<span className="rounded-lg bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">Udemy</span>
<i className="h-5 w-5 text-indigo-600" data-lucide="award"></i>
</div>
<h3 className="mb-2 text-lg font-bold text-slate-900">Statistics for Data Science &amp; Business Analysis</h3>
<p className="mb-3 text-sm text-slate-600">Statistical foundations including hypothesis testing, regression, and predictive analytics</p>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Issued: 2023</span>
<a className="text-indigo-600 hover:underline" href="#">View Credential</a>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 text-center shadow-2xl shadow-violet-500/40">
<div className="mx-auto max-w-3xl">
<div className="mb-6 flex justify-center">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
<i className="h-8 w-8 text-white" data-lucide="sparkles"></i>
</div>
</div>
<h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Data?
          </h2>
<p className="mb-8 text-lg text-violet-100">
            Let's collaborate on your next data analytics project. I bring technical expertise, analytical thinking, and a passion for uncovering insights that drive business value.
          </p>
<div className="flex flex-wrap justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-violet-600 shadow-xl transition-all hover:scale-105" href="#contact">
<i className="h-5 w-5" data-lucide="mail"></i>
              Contact Me Now
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20" href="#">
<i className="h-5 w-5" data-lucide="download"></i>
              Download Resume
            </a>
</div>
</div>
</section>

<section className="mb-20" id="contact">
<div className="mb-10 text-center">
<h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">Get In Touch</h2>
<p className="mx-auto max-w-2xl text-lg text-slate-600">
            Have a project in mind? Let's discuss how I can help turn your data into actionable insights
          </p>
</div>
<div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">

<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<form className="space-y-6">
<div className="grid gap-6 sm:grid-cols-2">
<div>
<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="name">Full Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="email">Email Address</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="subject">Subject</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20" id="subject" placeholder="Project Inquiry / Job Opportunity" type="text"/>
</div>
<div>
<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="message">Message</label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20" id="message" placeholder="Tell me about your project or opportunity..." rows="6"></textarea>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-xl hover:shadow-violet-500/40" type="submit">
<i className="h-5 w-5" data-lucide="send"></i>
                Send Message
              </button>
</form>
</div>

<div className="space-y-6">
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="mb-4 text-lg font-bold text-slate-900">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
<i className="h-5 w-5" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Email</p>
<a className="text-base text-slate-600 hover:text-violet-600" href="mailto:mili.akter@example.com">
                      mili.akter@example.com
                    </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
<i className="h-5 w-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Phone</p>
<a className="text-base text-slate-600 hover:text-purple-600" href="tel:+8801234567890">
                      +880 1234 567 890
                    </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Location</p>
<p className="text-base text-slate-600">Dhaka, Bangladesh</p>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="mb-4 text-lg font-bold text-slate-900">Connect With Me</h3>
<div className="grid grid-cols-2 gap-3">
<a className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
                  LinkedIn
                </a>
<a className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white" href="#">
<i className="h-4 w-4" data-lucide="github"></i>
                  GitHub
                </a>
<a className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
                  Twitter
                </a>
<a className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600" href="#">
<i className="h-4 w-4" data-lucide="globe"></i>
                  Portfolio
                </a>
</div>
</div>
<div className="rounded-2xl border border-green-200 bg-green-50 p-6">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-green-600" data-lucide="clock"></i>
<div>
<p className="text-sm font-semibold text-green-900">Response Time</p>
<p className="text-sm text-green-700">I typically respond within 24 hours</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="rounded-t-3xl border-t border-slate-200 bg-slate-50 px-8 py-8">
<div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-sm font-semibold text-white">
              MA
            </div>
<div>
<p className="text-sm font-semibold text-slate-900">Mili Akter</p>
<p className="text-xs text-slate-600">Data Analyst &amp; BI Specialist</p>
</div>
</div>
<div className="text-sm text-slate-600">
            © <span id="year"></span> Mili Akter. All rights reserved.
          </div>
</div>
</footer>
</div>
</div>


    </>
  );
}
