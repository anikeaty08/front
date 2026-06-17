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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      let selectedFile = null;

      function handleFileSelect(event) {
          const file = event.target.files[0];
          if (file && file.type === 'application/pdf') {
              selectedFile = file;
              document.getElementById('uploadPlaceholder').classList.add('hidden');
              document.getElementById('fileSelected').classList.remove('hidden');
              document.getElementById('fileName').textContent = file.name;
              document.getElementById('analyzeBtn').disabled = false;
          }
      }

      function analyzeDocument() {
          if (!selectedFile) return;

          // Show loading state
          document.getElementById('upload').classList.add('hidden');
          document.getElementById('loadingSection').classList.remove('hidden');

          // Simulate API call delay
          setTimeout(() => {
              showResults();
          }, 3000);
      }

      function showResults() {
          document.getElementById('loadingSection').classList.add('hidden');
          document.getElementById('resultsSection').classList.remove('hidden');

          // Sample results data (would come from backend)
          const results = [
              {
                  section: 'Abstract',
                  quality: 'good',
                  issues: [],
                  feedback: 'The abstract provides a clear and concise summary of the research objectives, methodology, and key findings. The structure follows academic conventions effectively.'
              },
              {
                  section: 'Methodology',
                  quality: 'average',
                  issues: ['Baseline Missing', 'Limited Dataset Description'],
                  feedback: 'The methodology section outlines the approach taken but lacks comparison with baseline methods. Consider adding more details about the dataset characteristics and preprocessing steps.'
              },
              {
                  section: 'Results & Evaluation',
                  quality: 'poor',
                  issues: ['Weak Evaluation Metrics', 'No Statistical Significance', 'Missing Error Analysis'],
                  feedback: 'The evaluation section needs significant improvement. Include standard evaluation metrics, statistical significance tests, and comprehensive error analysis to strengthen the validity of your findings.'
              },
              {
                  section: 'Conclusion',
                  quality: 'good',
                  issues: [],
                  feedback: 'The conclusion effectively summarizes the contributions and acknowledges limitations. Future work directions are clearly stated and well-motivated.'
              }
          ];

          renderResults(results);
      }

      function renderResults(results) {
          const container = document.getElementById('resultsContainer');
          container.innerHTML = '';

          results.forEach(result => {
              const qualityConfig = {
                  good: { bg: 'bg-emerald-50', text: 'text-emerald-700', label: 'Good' },
                  average: { bg: 'bg-amber-50', text: 'text-amber-700', label: 'Average' },
                  poor: { bg: 'bg-rose-50', text: 'text-rose-700', label: 'Poor' }
              };

              const q = qualityConfig[result.quality];

              const card = document.createElement('div');
              card.className = 'bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm';
              card.innerHTML = `
                  <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div class="flex items-center gap-3">
                          <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                              <span class="iconify w-4 h-4 text-slate-600" data-icon="lucide:bookmark" data-width="16" style="stroke-width: 1.5;"></span>
                          </div>
                          <h3 class="font-medium text-slate-900">${result.section}</h3>
                      </div>
                      <span class="inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${q.bg} ${q.text} w-fit">
                          ${q.label}
                      </span>
                  </div>
                  ${result.issues.length > 0 ? `
                      <div class="flex flex-wrap gap-2 mb-4">
                          ${result.issues.map(issue => `
                              <span class="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                                  <span class="iconify w-3 h-3" data-icon="lucide:alert-circle" data-width="12" style="stroke-width: 1.5;"></span>
                                  ${issue}
                              </span>
                          `).join('')}
                      </div>
                  ` : ''}
                  <p class="text-sm text-slate-600 leading-relaxed">${result.feedback}</p>
              `;
              container.appendChild(card);
          });
      }

      function resetUpload() {
          selectedFile = null;
          document.getElementById('fileInput').value = '';
          document.getElementById('uploadPlaceholder').classList.remove('hidden');
          document.getElementById('fileSelected').classList.add('hidden');
          document.getElementById('analyzeBtn').disabled = true;
          document.getElementById('resultsSection').classList.add('hidden');
          document.getElementById('upload').classList.remove('hidden');
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 blur-sm hue-rotate-15" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="uR8HtEUgEAOiY69U0vP3"></div>

</div>

<header className="border-b backdrop-blur-sm sticky top-0 z-50 border-slate-800 bg-black/80">
<div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100">
<span className="text-sm font-semibold tracking-tight text-black font-geist" style={{}}>
              PR
            </span>
</div>
<span className="font-medium tracking-tight text-slate-100 font-geist" style={{}}>
            PaperReview
          </span>
</div>
<nav className="hidden sm:flex items-center gap-6">
<a className="text-sm transition-colors text-slate-400 hover:text-slate-100 font-geist" href="#upload" style={{}}>
            Upload
          </a>
<a className="text-sm transition-colors text-slate-400 hover:text-slate-100 font-geist" href="#results" style={{}}>
            Results
          </a>
</nav>
</div>
</header>
<main className="">

<section className="sm:py-24 pt-16 pr-6 pb-16 pl-6">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 bg-slate-900">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
<span className="text-xs font-medium text-slate-400 font-geist" style={{}}>
              Powered by SSUETNotes
            </span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-slate-100 font-geist font-semibold">
            AI-Based Research Paper Review System
          </h1>
<p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-400 font-geist" style={{}}>
            Upload your research paper and receive automated, section-wise
            academic feedback using machine learning.
          </p>
</div>
</section>

<section className="pr-6 pb-16 pl-6" id="upload">
<div className="max-w-xl mx-auto">
<div className="sm:p-8 bg-transparent border border-slate-400 backdrop-blur-md border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex gap-3 mb-6 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900">
<svg aria-hidden="true" data-icon="lucide:file-text" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
</g>
</svg>
</div>
<div>
<h2 className="font-medium text-slate-100 font-geist" style={{}}>
                  Upload Research Paper
                </h2>
<p className="text-sm text-slate-500 font-geist" style={{}}>
                  PDF format only
                </p>
</div>
</div>

<div className="border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer mb-6 border-slate-800 hover:border-slate-700 hover:bg-slate-950/50" id="uploadArea" onclick="document.getElementById('fileInput').click();">
<input accept=".pdf" className="hidden" id="fileInput" onchange="handleFileSelect(event)" type="file"/>
<div id="uploadPlaceholder">
<div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-slate-900">
<svg aria-hidden="true" data-icon="lucide:upload" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm font-medium mb-1 text-slate-300 font-geist" style={{}}>
                  Click to upload or drag and drop
                </p>
<p className="text-xs text-slate-500 font-geist" style={{}}>
                  PDF files up to 10MB
                </p>
</div>
<div className="hidden" id="fileSelected">
<div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-cyan-950">
<svg aria-hidden="true" data-icon="lucide:file-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M9 15l2 2l4-4"></path>
</g>
</svg>
</div>
<p className="text-sm font-medium mb-1 text-slate-300" id="fileName"></p>
<p className="text-xs text-slate-500 font-geist" style={{}}>
                  Ready for analysis
                </p>
</div>
</div>

<button className="w-full py-3 px-4 text-sm font-medium rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/25 font-geist" disabled="" id="analyzeBtn" onclick="analyzeDocument()" style={{}}>
<svg aria-hidden="true" data-icon="lucide:scan-search" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path>
<circle cx="12" cy="12" r="3"></circle>
<path d="m16 16l-1.9-1.9"></path>
</g>
</svg>
              Analyze Paper
            </button>
</div>
</div>
</section>

<section className="hidden pb-16 px-6" id="loadingSection">
<div className="max-w-xl mx-auto">
<div className="rounded-2xl border p-8 shadow-sm text-center bg-black border-slate-800">
<div className="w-16 h-16 mx-auto mb-6 relative">
<div className="absolute inset-0 border-4 rounded-full border-slate-900"></div>
<div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin border-t-slate-100"></div>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-slate-100 font-geist" style={{}}>
              Analyzing your paper
            </h3>
<p className="text-sm text-slate-500 font-geist" style={{}}>
              Please wait while we process your document...
            </p>
<div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-600">
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</g>
</svg>
<span className="font-geist" style={{}}>Running ML analysis</span>
</div>
</div>
</div>
</section>

<section className="hidden pb-16 px-6" id="resultsSection">
<div className="max-w-3xl mx-auto">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-100 font-geist" style={{}}>
              Analysis Results
            </h2>
<button className="text-sm flex items-center gap-1.5 transition-colors text-slate-400 hover:text-slate-100 font-geist" onclick="resetUpload()" style={{}}>
<svg aria-hidden="true" data-icon="lucide:refresh-cw" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M8 16H3v5"></path>
</g>
</svg>
              New Analysis
            </button>
</div>

<div className="space-y-4" id="resultsContainer">

</div>
</div>
</section>
</main>

<footer className="border-t mt-auto border-slate-800 bg-black">
<div className="max-w-5xl mx-auto px-6 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-slate-100">
<span className="text-xs font-semibold tracking-tight text-black font-geist" style={{}}>
                PR
              </span>
</div>
<span className="text-sm text-slate-400 font-geist" style={{}}>
              Semester Machine Learning Project
            </span>
</div>
<div className="flex items-center gap-4 text-xs text-slate-600">
<span className="flex items-center gap-1.5 font-geist" style={{}}>
<svg aria-hidden="true" data-icon="lucide:graduation-cap" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</g>
</svg>
              Academic Use Only
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
