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

    const ctx = document.getElementById('skillChart').getContext('2d');
    new Chart(ctx,{
      type:'radar',
      data:{
        labels:['Python','SQL','R','ML','ETL','Visualization'],
        datasets:[{
          label:'Proficiency',
          data:[90,85,80,88,82,87],
          backgroundColor:'rgba(79,70,229,.1)',
          borderColor:'rgb(79,70,229)',
          borderWidth:2,
          pointBackgroundColor:'rgb(79,70,229)'
        }]
      },
      options:{
        scales:{r:{angleLines:{color:'#e5e7eb'},grid:{color:'#e5e7eb'},ticks:{display:false},suggestedMin:0,suggestedMax:100}},
        plugins:{legend:{display:false}},
        responsive:true,
        maintainAspectRatio:false
      }
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
      
<a className="absolute left-0 top-0 m-2 rounded px-3 py-2 bg-indigo-600 text-white text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 sr-only focus:not-sr-only" href="#main">
    Skip to content
  </a>

<section className="max-w-3xl mx-auto px-6 pt-12 animate" style={{'--d': `.1s`}}>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="flex items-center gap-4">
<img alt="Portrait of Segev smiling" className="h-20 w-20 rounded-full object-cover shadow-sm ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=240&q=80" />
<div>
<h1 className="text-3xl font-semibold tracking-tight">Segev</h1>
<p className="text-gray-600">Data Science & Analytics Specialist</p>
</div>
</div>

<nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm">
<a aria-label="Call Segev" className="flex items-center gap-1 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="tel:+972526558497">
<i className="h-4 w-4" data-lucide="phone"></i><span className="sr-only">Phone:</span> 052-6558497
        </a>
<a aria-label="Email Segev" className="flex items-center gap-1 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="mailto:segev054@gmail.com">
<i className="h-4 w-4" data-lucide="mail"></i><span className="sr-only">Email:</span> segev054@gmail.com
        </a>
<a aria-label="LinkedIn profile" className="flex items-center gap-1 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i> LinkedIn
        </a>
<a aria-label="GitHub profile" className="flex items-center gap-1 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="#">
<i className="h-4 w-4" data-lucide="github"></i> GitHub
        </a>
<a aria-label="Project portfolio" className="flex items-center gap-1 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="https://github.com/segevstat/portfolio/tree/main/Models---ML-DL">
<i className="h-4 w-4" data-lucide="folder-open"></i> Portfolio
        </a>
</nav>
</div>
</section>
<main id="main" tabindex="-1">

<section className="max-w-3xl mx-auto px-6 mt-10 animate" style={{'--d': `.2s`}}>
<h2 className="text-xl font-semibold tracking-tight mb-3">Summary</h2>
<p>
        Data Science and Analytics Specialist with hands-on experience in financial data pipelines, fraud detection, and time-series analysis. Skilled in Python, SQL, and R for data processing, model development, and visualization. Proven ability to automate workflows, reduce errors, and generate actionable insights from large datasets.
      </p>
</section>
<div className="border-t border-gray-200 my-10 max-w-3xl mx-auto"></div>

<section className="max-w-3xl mx-auto px-6 animate" style={{'--d': `.3s`}}>
<h2 className="text-xl font-semibold tracking-tight mb-6">Technical Skills</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<h3 className="font-medium mb-2 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="code-2"></i> Programming & Analysis
          </h3>
<p>Python, R, SQL</p>
</div>
<div>
<h3 className="font-medium mb-2 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="library"></i> Libraries & Frameworks
          </h3>
<p>Pandas, NumPy, Scikit-learn, PyTorch, Seaborn, Matplotlib</p>
</div>
<div>
<h3 className="font-medium mb-2 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="database"></i> Data Engineering
          </h3>
<p>ETL, Pipelines, Data Wrangling, Spark (academic)</p>
</div>
<div>
<h3 className="font-medium mb-2 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="line-chart"></i> Machine Learning
          </h3>
<p>Supervised & Unsupervised, Anomaly Detection, Clustering, Time Series</p>
</div>
<div>
<h3 className="font-medium mb-2 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="bar-chart-3"></i> Visualization & BI
          </h3>
<p>Tableau, Salesforce Analytics</p>
</div>
<div>
<h3 className="font-medium mb-2 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="cloud"></i> Cloud & Databases
          </h3>
<p>AWS (Redshift, Tableau Cloud), Oracle DB</p>
</div>
</div>

<div className="mt-10">
<h3 className="font-medium mb-4 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="activity"></i> Competency Overview
        </h3>
<div className="bg-white shadow-sm rounded-lg p-4">
<div>
<div>
<canvas aria-label="Radar chart showing skill proficiency" height="160" id="skillChart" role="img"></canvas>
</div>
</div>
</div>
</div>
</section>
<div className="border-t border-gray-200 my-10 max-w-3xl mx-auto"></div>

<section className="max-w-3xl mx-auto px-6 animate" style={{'--d': `.35s`}}>
<h2 className="text-xl font-semibold tracking-tight mb-6">Featured Projects</h2>
<div className="grid gap-6 md:grid-cols-2">

<article className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 transition-all transform hover:-translate-y-1 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-500">
<div className="flex items-center gap-2 mb-3">
<i className="h-5 w-5 text-indigo-600" data-lucide="cpu"></i>
<h3 className="font-medium tracking-tight">LSTM Time-Series Forecasting</h3>
</div>
<p className="text-sm text-gray-600 leading-snug">
            End-to-end implementation of an LSTM model predicting daily sales with custom data loaders, feature engineering, and model monitoring notebooks.
          </p>
<ul className="list-disc list-inside mt-3 space-y-1 text-sm">
<li>Achieved <span className="font-medium">18 % MAE</span> reduction vs. ARIMA baseline.</li>
<li>Logged experiments with MLflow & visualized results via TensorBoard.</li>
<li>Dockerized pipeline for reproducible deployment.</li>
</ul>
<a aria-label="View LSTM project on GitHub" className="mt-4 inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="https://github.com/segevstat/portfolio/tree/main/Models---ML-DL/LSTM-Time-Series-Forecasting">
<i className="h-4 w-4" data-lucide="external-link"></i> GitHub
          </a>
</article>

<article className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 transition-all transform hover:-translate-y-1 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-500">
<div className="flex items-center gap-2 mb-3">
<i className="h-5 w-5 text-indigo-600" data-lucide="shield-alert"></i>
<h3 className="font-medium tracking-tight">Fraud Detection Autoencoder</h3>
</div>
<p className="text-sm text-gray-600 leading-snug">
            Unsupervised anomaly detection using deep autoencoders to flag fraudulent transactions in financial datasets with extreme class imbalance.
          </p>
<ul className="list-disc list-inside mt-3 space-y-1 text-sm">
<li>Recall improved from <span className="font-medium">0.62 → 0.78</span> versus rule-based system.</li>
<li>Implemented SMOTE + focal-loss variants for robustness.</li>
<li>Packaged as a REST API (FastAPI) with CI/CD via GitHub Actions.</li>
</ul>
<a aria-label="View Autoencoder project on GitHub" className="mt-4 inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" href="https://github.com/segevstat/portfolio/tree/main/Models---ML-DL/Fraud-Detection-Autoencoder">
<i className="h-4 w-4" data-lucide="external-link"></i> GitHub
          </a>
</article>
</div>
</section>
<div className="border-t border-gray-200 my-10 max-w-3xl mx-auto"></div>

<section className="max-w-3xl mx-auto px-6 animate" style={{'--d': `.4s`}}>
<h2 className="text-xl font-semibold tracking-tight mb-6">Professional Experience</h2>
<div className="mb-8">
<div className="flex items-start justify-between flex-wrap gap-y-1">
<h3 className="font-medium">Statutory Authority – Data Science Analyst</h3>
<time className="text-sm text-gray-500">2022 – Present</time>
</div>
<ul className="list-disc list-inside mt-2 space-y-1">
<li>Automated anomaly detection in time-series data from Oracle, improving pipeline efficiency by 50 %.</li>
<li>Built fraud-detection models in Python & SQL, deployed on AWS Redshift.</li>
<li>Spearheaded manual/semi-automated ETL (Oracle & Redshift), ensuring data quality.</li>
<li>Designed Tableau dashboards, lifting reporting accuracy by 25 %.</li>
<li>Applied network science to uncover fraud patterns in large-scale transactions.</li>
<li>Led internal research projects, raising cross-team insight generation by 25 %.</li>
</ul>
</div>
<div>
<div className="flex items-start justify-between flex-wrap gap-y-1">
<h3 className="font-medium">Tata Consultancy Services – Application Coordinator Analyst</h3>
<time className="text-sm text-gray-500">2018 – 2019</time>
</div>
<ul className="list-disc list-inside mt-2 space-y-1">
<li>Bridged end-users and dev teams, coordinating system operations.</li>
<li>Managed data flow and resolved application issues to ensure continuity.</li>
<li>Supported internal analytics projects with data insights and reporting.</li>
</ul>
</div>
</section>
<div className="border-t border-gray-200 my-10 max-w-3xl mx-auto"></div>

<section className="max-w-3xl mx-auto px-6 animate" style={{'--d': `.5s`}}>
<h2 className="text-xl font-semibold tracking-tight mb-6">Education</h2>
<div>
<div className="flex items-start justify-between flex-wrap gap-y-1">
<h3 className="font-medium">B.Sc. Statistics & Data Science, B.A. Middle Eastern History</h3>
<time className="text-sm text-gray-500">2019 – 2023</time>
</div>
<p className="text-gray-600">The Hebrew University of Jerusalem</p>
<ul className="list-disc list-inside mt-2 space-y-1">
<li>Projects: Big Data Analysis, Machine Learning for behavioral trends, Seminar on the Syrian Civil War.</li>
</ul>
</div>
</section>
<div className="border-t border-gray-200 my-10 max-w-3xl mx-auto"></div>

<section className="max-w-3xl mx-auto px-6 animate" style={{'--d': `.6s`}}>
<h2 className="text-xl font-semibold tracking-tight mb-6">Additional Information</h2>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<h3 className="font-medium mb-2 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="shield"></i> Military Service
          </h3>
<p className="font-medium">Deputy Operations Division Officer</p>
<p className="text-sm text-gray-500">Intelligence Division, 2014 – 2017</p>
<p className="mt-1">Led strategic planning, operational analysis, and intelligence reporting in a high-impact unit.</p>
</div>
<div>
<h3 className="font-medium mb-2 flex items-center gap-1">
<i className="h-4 w-4" data-lucide="users"></i> Leadership & Volunteering
          </h3>
<ul className="list-disc list-inside space-y-1">
<li>Students' Union Representative – Statistics & Data Science (2019 – 2022).</li>
<li>Mentor – LAHAV Project (2020 – 2021): Guided high-school students in academic data projects.</li>
</ul>
</div>
</div>
</section>
</main>
<footer className="max-w-3xl mx-auto px-6 py-12 text-center text-sm text-gray-500 animate" style={{'--d': `.7s`}}>
    Jerusalem District • Languages: Hebrew (Native), English (Fluent)
  </footer>



    </>
  );
}
