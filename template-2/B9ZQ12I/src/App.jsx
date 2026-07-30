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



    lucide.createIcons();

    /* Theme toggle */
    const themeToggle=document.getElementById('themeToggle'),root=document.documentElement;
    if(localStorage.getItem('theme')==='dark')root.classList.add('dark');
    themeToggle.addEventListener('click',()=>{root.classList.toggle('dark');localStorage.setItem('theme',root.classList.contains('dark')?'dark':'light')});

    /* Radar chart fix */
    const ctx=document.getElementById('skillChart').getContext('2d');
    new Chart(ctx,{type:'radar',
      data:{labels:['Programming','Libraries','Data Eng','ML','Viz','Cloud','Tools'],
        datasets:[{data:[92,87,78,88,82,75,80],
          backgroundColor:'rgba(99,102,241,.12)',
          borderColor:'rgb(99,102,241)',borderWidth:2,
          pointBackgroundColor:'rgb(99,102,241)'}]},
      options:{scales:{r:{angleLines:{color:'#e5e7eb'},grid:{color:'#e5e7eb'},ticks:{display:false},suggestedMin:0,suggestedMax:100}},
        plugins:{legend:{display:false}},responsive:true,maintainAspectRatio:false}
    });

    /* Copy email */
    const emailBtn=document.getElementById('copyEmail'),toast=document.getElementById('toast');
    emailBtn.addEventListener('click',()=>{navigator.clipboard.writeText('segev054@gmail.com');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2000)});

    /* Scroll reveal */
    const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal');observer.unobserve(e.target)}})},{threshold:.2});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  
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
      

<a className="sr-only focus:not-sr-only absolute left-0 top-0 m-2 rounded px-3 py-2 bg-indigo-600 text-white text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400" href="#main">
    Skip to content
  </a>

<header className="w-full fixed top-0 z-50 border-b border-gray-200 dark:border-gray-800 backdrop-blur supports-backdrop-blur:bg-white/60 bg-white/90 dark:bg-gray-900/80">
<div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tight gradient-text">Segev</span>
<nav className="hidden sm:flex gap-6 text-sm">
<a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#projects">Projects</a>
<a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#skills">Skills</a>
<a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#experience">Experience</a>
<a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#education">Education</a>
</nav>
<button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-indigo-500" id="themeToggle">
<i className="h-5 w-5 text-gray-600 dark:hidden" data-lucide="moon"></i>
<i className="h-5 w-5 text-gray-400 hidden dark:inline" data-lucide="sun"></i>
<span className="sr-only">Toggle theme</span>
</button>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 pt-36 reveal" style={{'--d': `.05s`}}>
<div className="flex flex-col-reverse lg:flex-row lg:items-center gap-12">
<div className="flex-1">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2 gradient-text">Segev Ohana</h1>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Data Science & Analytics Specialist</h2>
<p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Turning raw data into directional insights for finance, fraud-detection, and time-series systems. Empowering teams with robust pipelines & ML solutions.
        </p>
<ul className="flex flex-wrap gap-4 mt-6 text-sm">
<li><a className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="tel:+972526558497"><i className="h-4 w-4" data-lucide="phone"></i> +972 52-655-8497</a></li>
<li><button className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" id="copyEmail"><i className="h-4 w-4" data-lucide="mail"></i> segev054@gmail.com</button></li>
<li><a className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="https://linkedin.com/in/segevohana" target="_blank"><i className="h-4 w-4" data-lucide="linkedin"></i> LinkedIn</a></li>
<li><a className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="https://github.com/segevstat/portfolio" target="_blank"><i className="h-4 w-4" data-lucide="github"></i> GitHub</a></li>
<li><a className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="https://rpubs.com/Segev_ohana" target="_blank"><i className="h-4 w-4" data-lucide="folder-open"></i> Portfolio</a></li>
</ul>
</div>
<figure className="relative">
<img alt="Segev smiling" className="h-48 w-48 rounded-full object-cover shadow-md ring-4 ring-indigo-200 dark:ring-indigo-400" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=320&q=80" />
<figcaption className="absolute bottom-2 right-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur px-2 py-0.5 rounded text-xs text-gray-700 dark:text-gray-100">Jerusalem, IL</figcaption>
</figure>
</div>
</section>
<main id="main">
<div className="border-t border-gray-200 dark:border-gray-800 my-16 mx-6"></div>

<section className="max-w-6xl mx-auto px-6 reveal" id="skills" style={{'--d': `.1s`}}>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Technical Skills</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div><h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="code"></i> Programming</h3><p>Python, R, SQL</p></div>
<div><h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="library"></i> Ecosystem</h3><p>Pandas, NumPy, Scikit-learn, PyTorch</p></div>
<div><h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="layers"></i> Data Engineering</h3><p>ETL, Airflow, Spark (acad.)</p></div>
<div><h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="activity"></i> Machine Learning</h3><p>Supervised, Unsupervised, Time-Series</p></div>
<div><h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="bar-chart-3"></i> Visualization</h3><p>Tableau, Matplotlib, Seaborn</p></div>
<div><h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="cloud"></i> Cloud | DB</h3><p>AWS Redshift, Oracle</p></div>
<div><h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="tool"></i> Tooling</h3><p>Git, Jupyter, RStudio</p></div>
</div>

<div className="mt-12">
<h3 className="font-medium flex items-center gap-1 mb-4"><i className="h-4 w-4" data-lucide="gauge"></i> Proficiency Snapshot</h3>
<div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4">
<p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Radar view of competency levels</p>
<div className="relative h-64 sm:h-56">

<div className="absolute inset-0">
<canvas aria-label="Radar chart of competencies" id="skillChart" role="img"></canvas>
</div>
</div>
</div>
</div>
</section>
<div className="border-t border-gray-200 dark:border-gray-800 my-16 mx-6"></div>

<section className="max-w-6xl mx-auto px-6 reveal" id="projects" style={{'--d': `.15s`}}>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Highlighted Projects</h2>
<div className="grid gap-8 md:grid-cols-2">

<article className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/20"></div>
<div className="relative p-6 flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<i className="h-5 w-5 text-indigo-600 dark:text-indigo-400" data-lucide="plane"></i>
<h3 className="font-medium tracking-tight">RandomForest — Flight Price Prediction</h3>
</div>
<p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
              Predicts airline ticket prices using engineered temporal & route features. Grid-searched hyper-parameters achieve 94 % R² on unseen data.
            </p>
<a className="mt-4 inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="https://github.com/segevstat/portfolio/blob/main/Models---ML-DL/RandomForestRegressor%20-%20Flight%20Price%20Prediction.ipynb" target="_blank">
<i className="h-4 w-4" data-lucide="external-link"></i> Repository
            </a>
</div>
</article>

<article className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
<div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent dark:from-rose-900/20"></div>
<div className="relative p-6 flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<i className="h-5 w-5 text-rose-600 dark:text-rose-400" data-lucide="home"></i>
<h3 className="font-medium tracking-tight">DL Linear Regression — Housing Portfolio</h3>
</div>
<p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
              Deep-learning linear regression evaluating housing prices. Explores normalization, regularization, and performance diagnostics.
            </p>
<a className="mt-4 inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-rose-500 rounded" href="https://github.com/segevstat/portfolio/blob/main/Models---ML-DL/DL_Linear_Regression_Model_Housing_portfolio.ipynb" target="_blank">
<i className="h-4 w-4" data-lucide="external-link"></i> Repository
            </a>
</div>
</article>
</div>
</section>
<div className="border-t border-gray-200 dark:border-gray-800 my-16 mx-6"></div>

<section className="max-w-6xl mx-auto px-6 reveal" id="experience" style={{'--d': `.2s`}}>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Professional Journey</h2>
<div className="mb-10">
<div className="flex items-start justify-between flex-wrap gap-y-1">
<h3 className="font-medium">Data Science Analyst — Statutory Authority</h3>
<time className="text-sm text-gray-500 dark:text-gray-400">2022 – Present</time>
</div>
<ul className="list-disc list-inside mt-2 space-y-1">
<li>Automated anomaly detection across 200 M + time-series points, cutting alert noise by 40 %.</li>
<li>Designed Python + SQL ETL flows, reducing latency by 55 %.</li>
<li>Pioneered migration to AWS Redshift and modern BI stack.</li>
</ul>
</div>
<div>
<div className="flex items-start justify-between flex-wrap gap-y-1">
<h3 className="font-medium">Application Coordinator Analyst — TCS</h3>
<time className="text-sm text-gray-500 dark:text-gray-400">2018 – 2019</time>
</div>
<ul className="list-disc list-inside mt-2 space-y-1">
<li>Maintained mission-critical banking apps at 99.9 % uptime.</li>
<li>Acted as data liaison between dev teams and stakeholders.</li>
</ul>
</div>
</section>
<div className="border-t border-gray-200 dark:border-gray-800 my-16 mx-6"></div>

<section className="max-w-6xl mx-auto px-6 reveal" id="education" style={{'--d': `.25s`}}>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Academic Background</h2>
<div className="flex items-start justify-between flex-wrap gap-y-1">
<h3 className="font-medium">B.Sc. Statistics & Data Science • B.A. Middle Eastern History</h3>
<time className="text-sm text-gray-500 dark:text-gray-400">2019 – 2023</time>
</div>
<p className="text-gray-600 dark:text-gray-300">Hebrew University of Jerusalem</p>
<ul className="list-disc list-inside mt-2 space-y-1">
<li>Capstone: Social-network analysis of misinformation during conflicts.</li>
</ul>
</section>
<div className="border-t border-gray-200 dark:border-gray-800 my-16 mx-6"></div>

<section className="max-w-6xl mx-auto px-6 reveal" style={{'--d': `.3s`}}>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Beyond Work</h2>
<div className="grid sm:grid-cols-2 gap-8">
<div>
<h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="flag"></i> Military Service</h3>
<p className="font-medium">Deputy Operations Division Officer<br /><span className="text-sm text-gray-500 dark:text-gray-400">Intelligence Corps, 2014 – 2017</span></p>
<p className="mt-1 text-sm">Led teams of 12 analysts in mission-critical environments.</p>
</div>
<div>
<h3 className="font-medium flex items-center gap-1 mb-2"><i className="h-4 w-4" data-lucide="heart"></i> Community</h3>
<ul className="list-disc list-inside space-y-1">
<li>Mentor, LAHAV STEM Program (2020 – 2021).</li>
<li>Volunteer Data Coach for nonprofit grant analytics.</li>
</ul>
</div>
</div>
</section>
<footer className="max-w-6xl mx-auto px-6 py-16 text-center text-xs text-gray-500 dark:text-gray-400 reveal" style={{'--d': `.35s`}}>
      © 2024 Segev — Hebrew, English
    </footer>
</main>

<div className="toast" id="toast">Email copied!</div>


    </>
  );
}
