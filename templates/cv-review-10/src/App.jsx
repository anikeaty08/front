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



      function refreshIcons() { 
        try { 
          lucide.createIcons({ strokeWidth: 1.5 }); 
        } catch(e) {} 
      }

      // File upload
      const fileInput = document.getElementById('fileInput');
      const fileName = document.getElementById('fileName');
      const dropZone = document.getElementById('dropZone');
      
      dropZone.addEventListener('click', () => fileInput.click());
      
      fileInput.addEventListener('change', () => {
        if (fileInput.files?.[0]) {
          fileName.innerHTML = `
            <span class="flex items-center gap-2 text-white">
              <i data-lucide="file-check" class="w-4 h-4"></i>
              ${fileInput.files[0].name}
            </span>
          `;
          refreshIcons();
        }
      });

      // Language toggle
      const langEN = document.getElementById('langEN');
      const langID = document.getElementById('langID');
      
      function setLang(lang) {
        [langEN, langID].forEach(btn => {
          btn.classList.remove('bg-white', 'text-black', 'bg-neutral-800', 'text-white');
          btn.classList.add('bg-neutral-800', 'text-white');
        });
        
        const activeBtn = lang === 'EN' ? langEN : langID;
        activeBtn.classList.remove('bg-neutral-800', 'text-white');
        activeBtn.classList.add('bg-white', 'text-black');
      }
      
      langEN.addEventListener('click', () => setLang('EN'));
      langID.addEventListener('click', () => setLang('ID'));

      // Purpose selection
      const purposeButtons = document.querySelectorAll('[data-purpose]');
      let currentPurpose = null;
      
      purposeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          currentPurpose = btn.dataset.purpose;
          purposeButtons.forEach(b => {
            b.classList.remove('border-red-500', 'text-white');
            b.classList.add('border-neutral-700', 'text-neutral-400');
          });
          btn.classList.remove('border-neutral-700', 'text-neutral-400');
          btn.classList.add('border-red-500', 'text-white');
        });
      });

      // Analysis data
      const tabs = [
        {
          id: 0, title: 'Content Quality',
          aspects: [
            {
              name: 'Achievement Statements', subtitle: 'Clarity of results and impact statements',
              score: 8.5, status: 'Excellent', 
              feedback: 'Strong outcome-focused statements with room for more quantification.',
              strengths: ['Action-oriented language', 'Clear contribution examples', 'Concise phrasing'],
              recos: ['Add percentage impacts', 'Use consistent tense', 'Prioritize relevant achievements']
            },
            {
              name: 'Keywords & ATS', subtitle: 'Role and industry keyword optimization',
              score: 7.2, status: 'Good',
              feedback: 'Core keywords present but missing some role-specific terms.',
              strengths: ['Industry terminology', 'Clean structure'],
              recos: ['Include job posting keywords', 'Add technical synonyms']
            },
            {
              name: 'Quantification', subtitle: 'Use of metrics to measure results',
              score: 6.8, status: 'Needs Work',
              feedback: 'Several achievements lack quantitative context.',
              strengths: ['Some projects show metrics'],
              recos: ['Add clear KPIs', 'Include before/after baselines']
            }
          ]
        },
        {
          id: 1, title: 'Presentation',
          aspects: [
            {
              name: 'Visual Formatting', subtitle: 'Layout margins, spacing, and bullets',
              score: 8.3, status: 'Good',
              feedback: 'Clean spacing with minor bullet alignment issues.',
              strengths: ['Clear hierarchy'],
              recos: ['Align bullet indentation', 'Consistent line height']
            },
            {
              name: 'Typography', subtitle: 'Font selection, sizing, and weight',
              score: 8.6, status: 'Excellent',
              feedback: 'Professional typography with good readability.',
              strengths: ['Good contrast'],
              recos: ['Consistent heading weights']
            }
          ]
        },
        {
          id: 2, title: 'Relevancy',
          aspects: [
            {
              name: 'Role Alignment', subtitle: 'Content relevance to target position',
              score: 7.4, status: 'Good',
              feedback: 'Good experience match with opportunity for targeted summary.',
              strengths: ['Relevant experience available'],
              recos: ['Focus top 3-4 most relevant points']
            },
            {
              name: 'ATS Optimization', subtitle: 'Applicant tracking system compatibility',
              score: 8.7, status: 'Excellent',
              feedback: 'ATS-friendly structure with minimal complex elements.',
              strengths: ['Standard headings', 'Text-based PDF'],
              recos: ['Avoid icon bullets']
            }
          ]
        }
      ];

      const tabButtons = document.querySelectorAll('.tritab');
      const aspectTitle = document.getElementById('aspectTitle');
      const aspectSubtitle = document.getElementById('aspectSubtitle');
      const aspectScore = document.getElementById('aspectScore');
      const aspectStatus = document.getElementById('aspectStatus');
      const generalFeedback = document.getElementById('generalFeedback');
      const strengthList = document.getElementById('strengthList');
      const recoList = document.getElementById('recoList');
      const aspectList = document.getElementById('aspectList');
      const scoreBar = document.getElementById('scoreBar');

      let currentTab = 0;
      let currentAspect = 0;

      function renderAspects() {
        aspectList.innerHTML = '';
        const items = tabs[currentTab].aspects;
        items.forEach((aspect, idx) => {
          const isActive = idx === currentAspect;
          const btn = document.createElement('button');
          btn.className = `focus-ring w-full px-4 py-4 rounded-lg text-left transition-all ${
            isActive 
              ? 'bg-red-500 text-white' 
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
          }`;
          
          btn.innerHTML = `
            <div class="font-medium text-sm mb-1">${aspect.name}</div>
            <div class="text-xs opacity-70">${aspect.score.toFixed(1)}/10</div>
          `;
          btn.addEventListener('click', () => { 
            currentAspect = idx; 
            updatePanel(); 
            renderAspects(); 
          });
          aspectList.appendChild(btn);
        });
      }

      function updatePanel() {
        const tab = tabs[currentTab];
        const aspect = tab.aspects[currentAspect];
        
        aspectTitle.textContent = aspect.name;
        aspectSubtitle.textContent = aspect.subtitle;
        aspectScore.textContent = aspect.score.toFixed(1);
        aspectStatus.textContent = aspect.status;
        generalFeedback.textContent = aspect.feedback;
        
        strengthList.innerHTML = aspect.strengths.map(s => `
          <li class="flex items-start gap-2 text-sm text-neutral-300">
            <div class="w-1 h-1 bg-red-500 rounded-full mt-2"></div>
            <span>${s}</span>
          </li>
        `).join('');
        
        recoList.innerHTML = aspect.recos.map(r => `
          <li class="flex items-start gap-2 text-sm text-neutral-300">
            <div class="w-1 h-1 bg-white rounded-full mt-2"></div>
            <span>${r}</span>
          </li>
        `).join('');

        scoreBar.style.width = `${aspect.score * 10}%`;

        // Update tabs
        tabButtons.forEach((btn, i) => {
          if (i === currentTab) {
            btn.classList.remove('text-neutral-400', 'bg-transparent');
            btn.classList.add('text-white', 'bg-red-500');
            btn.setAttribute('aria-selected', 'true');
          } else {
            btn.classList.remove('text-white', 'bg-red-500');
            btn.classList.add('text-neutral-400', 'bg-transparent');
            btn.setAttribute('aria-selected', 'false');
          }
        });
        
        refreshIcons();
      }

      // Tab switching
      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          currentTab = Number(btn.dataset.tab);
          currentAspect = 0;
          renderAspects();
          updatePanel();
        });
      });

      // Initialize
      renderAspects();
      updatePanel();
      refreshIcons();
    
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
      

<main className="max-w-6xl mx-auto px-6 py-16">

<header className="mb-20 text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 rounded-full text-sm font-medium text-neutral-400 mb-8">
<div className="w-2 h-2 bg-red-500 rounded-full"></div>
<span>Exclusive AI Analysis</span>
</div>
<h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Review &amp; <span className="text-gradient">Rewrite</span>
</h1>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          Professional CV analysis dengan teknologi AI terdepan
        </p>
</header>

<section className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-3 space-y-16">

<div className="space-y-8 animate-fade-in">
<div className="border-gradient rounded-2xl p-8 bg-neutral-900/50 hover-lift">
<div className="flex items-start gap-6">
<div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
<i className="text-white w-6 h-6" data-lucide="target"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Comprehensive Review</h3>
<p className="text-neutral-400 leading-relaxed">Analisis mendalam 20+ aspek penting CV dengan scoring akurat dan feedback detail</p>
</div>
</div>
</div>
<div className="border-gradient rounded-2xl p-8 bg-neutral-900/50 hover-lift">
<div className="flex items-start gap-6">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
<i className="text-black w-6 h-6" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Instant Processing</h3>
<p className="text-neutral-400 leading-relaxed">Hasil analisis profesional dalam 60 detik dengan akurasi tingkat enterprise</p>
</div>
</div>
</div>
<div className="border-gradient rounded-2xl p-8 bg-neutral-900/50 hover-lift">
<div className="flex items-start gap-6">
<div className="w-12 h-12 border border-red-500 rounded-xl flex items-center justify-center">
<i className="text-red-500 w-6 h-6" data-lucide="crown"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Executive Templates</h3>
<p className="text-neutral-400 leading-relaxed">Koleksi template premium yang digunakan oleh profesional Fortune 500</p>
</div>
</div>
</div>
</div>

<div className="animate-fade-in">
<h2 className="text-3xl font-bold text-white mb-8 tracking-tight">How It Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center">
<div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
<span className="text-white font-bold text-xl">1</span>
</div>
<h4 className="font-semibold text-white mb-2">Upload</h4>
<p className="text-neutral-400 text-sm">Upload CV dalam format PDF atau DOC</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
<span className="text-black font-bold text-xl">2</span>
</div>
<h4 className="font-semibold text-white mb-2">Analyze</h4>
<p className="text-neutral-400 text-sm">AI melakukan analisis komprehensif</p>
</div>
<div className="text-center">
<div className="w-16 h-16 border border-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
<span className="text-red-500 font-bold text-xl">3</span>
</div>
<h4 className="font-semibold text-white mb-2">Optimize</h4>
<p className="text-neutral-400 text-sm">Dapatkan CV yang dioptimasi</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="sticky top-8">
<div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900/50 animate-fade-in">
<div className="mb-8">
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Start Analysis</h3>
<p className="text-neutral-400">Upload your CV to begin</p>
</div>

<div className="mb-6">
<label className="block text-sm font-medium text-white mb-3">Document</label>
<div className="relative">
<input accept=".pdf,.doc,.docx" className="sr-only" id="fileInput" type="file"/>
<div className="border-2 border-dashed border-neutral-700 rounded-xl p-8 text-center hover:border-red-500 transition-colors duration-300 cursor-pointer" id="dropZone">
<div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neutral-800 flex items-center justify-center">
<i className="text-neutral-400 w-6 h-6" data-lucide="upload"></i>
</div>
<p className="text-neutral-400 font-medium mb-1" id="fileName">Click to upload or drag file here</p>
<p className="text-neutral-500 text-sm">PDF, DOC, DOCX • Max 5MB</p>
</div>
</div>
</div>

<div className="mb-6">
<label className="block text-sm font-medium text-white mb-3">Language</label>
<div className="grid grid-cols-2 gap-3">
<button className="focus-ring p-4 rounded-xl text-sm font-medium bg-white text-black transition-all" id="langEN">English</button>
<button className="focus-ring p-4 rounded-xl text-sm font-medium bg-neutral-800 text-white hover:bg-neutral-700 transition-all" id="langID">Indonesia</button>
</div>
</div>

<div className="mb-8">
<label className="block text-sm font-medium text-white mb-3">Purpose</label>
<div className="grid grid-cols-2 gap-3">
<button className="focus-ring group flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-neutral-700 text-neutral-400 hover:border-red-500 hover:text-white transition-all" data-purpose="job">
<i className="w-5 h-5" data-lucide="briefcase"></i>
<span className="text-sm font-medium">Job Search</span>
</button>
<button className="focus-ring group flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-neutral-700 text-neutral-400 hover:border-red-500 hover:text-white transition-all" data-purpose="scholarship">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
<span className="text-sm font-medium">Scholarship</span>
</button>
</div>
</div>

<button className="focus-ring w-full h-14 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300" id="ctaReview">
<span className="flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
                  Start Analysis
                </span>
</button>
<p className="mt-4 text-xs text-neutral-500 text-center">
                Secure processing • Results expire after session
              </p>
</div>
</div>
</div>
</section>

<section className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/50 animate-fade-in">

<div className="border-b border-neutral-800 p-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-bold text-white tracking-tight">Analysis Dashboard</h2>
<p className="text-neutral-400 mt-1">Comprehensive CV evaluation system</p>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-neutral-800 rounded-full text-sm">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-neutral-300">Live</span>
</div>
</div>

<div className="flex gap-1 mt-8 bg-neutral-800 rounded-xl p-1">
<button aria-selected="true" className="tritab focus-ring flex-1 text-sm font-medium text-white py-3 px-4 rounded-lg bg-red-500 transition-all" data-tab="0">
              Content Quality
            </button>
<button aria-selected="false" className="tritab focus-ring flex-1 text-sm font-medium text-neutral-400 py-3 px-4 rounded-lg hover:text-white transition-all" data-tab="1">
              Presentation
            </button>
<button aria-selected="false" className="tritab focus-ring flex-1 text-sm font-medium text-neutral-400 py-3 px-4 rounded-lg hover:text-white transition-all" data-tab="2">
              Relevancy
            </button>
</div>
</div>

<div className="p-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<aside className="lg:col-span-1">
<div className="space-y-2 max-h-96 overflow-y-auto custom-scroll" id="aspectList"></div>
</aside>

<div className="lg:col-span-3">
<div className="border border-neutral-800 rounded-xl p-6">

<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-xl font-bold text-white" id="aspectTitle">Achievement Statements</h3>
<p className="text-neutral-400 text-sm mt-1" id="aspectSubtitle">Clarity of results and impact statements</p>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-white" id="aspectScore">8.5</div>
<div className="text-sm text-red-500 font-medium" id="aspectStatus">Excellent</div>
</div>
</div>

<div className="mb-6">
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full transition-all duration-500" id="scoreBar" style={{width: '85%'}}></div>
</div>
</div>

<div className="mb-6 p-4 bg-neutral-800/50 rounded-lg">
<h5 className="font-medium text-white mb-2 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="message-square"></i>
                    Feedback
                  </h5>
<p className="text-neutral-300 text-sm leading-relaxed" id="generalFeedback">
                    Strong outcome-focused statements with room for more quantification.
                  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h5 className="font-medium text-white mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-red-500" data-lucide="check-circle"></i>
                      Strengths
                    </h5>
<ul className="space-y-2" id="strengthList">
<li className="flex items-start gap-2 text-sm text-neutral-300">
<div className="w-1 h-1 bg-red-500 rounded-full mt-2"></div>
<span>Action-oriented language</span>
</li>
</ul>
</div>
<div>
<h5 className="font-medium text-white mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-white" data-lucide="arrow-up-right"></i>
                      Improvements
                    </h5>
<ul className="space-y-2" id="recoList">
<li className="flex items-start gap-2 text-sm text-neutral-300">
<div className="w-1 h-1 bg-white rounded-full mt-2"></div>
<span>Add percentage impacts</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
