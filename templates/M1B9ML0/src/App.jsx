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
      
    // Icon load
    lucide.createIcons({ strokeWidth: 1.5 });

    const steps = [...document.querySelectorAll('#steps > section')];
    const progressBar = document.getElementById('progressBar');
    const stepLabel = document.getElementById('stepLabel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let currentStep = 0;
    const totalSteps = steps.length;

    function showStep(idx) {
      steps.forEach((s, i) => {
        s.classList.toggle('hidden', i !== idx);
        s.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => {
          if (i === idx) {
            s.classList.remove('opacity-0', 'translate-y-2');
            s.classList.add('transition', 'duration-500', 'ease-out');
          }
        }, 20);
      });

      const progress = ((idx + 1) / totalSteps) * 100;
      progressBar.style.width = progress + '%';
      stepLabel.textContent = `Step ${idx + 1} of ${totalSteps}`;

      prevBtn.disabled = idx === 0;
      nextBtn.querySelector('span').textContent = idx === totalSteps - 1 ? 'Finish' : 'Next';
    }

    // Navigation
    nextBtn.addEventListener('click', () => {
      if (currentStep < totalSteps - 1) {
        currentStep++;
        showStep(currentStep);
      } else {
        alert('Onboarding complete! Redirecting...');
      }
    });
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });

    // Step 1: Lookup simulation
    document.getElementById('findBtn').addEventListener('click', () => {
      const val = document.getElementById('companyInput').value.trim();
      if (!val) return;
      const preview = document.getElementById('companyPreview');
      preview.querySelector('#companyName').textContent = val;
      preview.querySelector('#companyDesc').textContent = 'Found in our database';
      preview.classList.remove('hidden', 'opacity-0');
      preview.classList.add('animate-fadeIn');
    });

    // Step 2: Chart
    function initChart() {
      const ctx = document.getElementById('competitorChart').getContext('2d');
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Authority', 'Traffic', 'Keywords', 'Backlinks', 'Speed'],
          datasets: [
            { label: 'You', data: [65, 59, 80, 81, 56], backgroundColor: 'rgba(99,102,241,0.2)', borderColor: '#6366f1', borderWidth: 2 },
            { label: 'Competitor A', data: [28, 48, 40, 19, 96], backgroundColor: 'rgba(217,70,239,0.15)', borderColor: '#d946ef', borderWidth: 2 }
          ]
        },
        options: { plugins: { legend: { labels: { color: '#f3f4f6', font: { size: 10 } } } }, scales: { r: { ticks: { color: '#9ca3af' }, grid: { color: '#374151' }, angleLines: { color: '#374151' }, pointLabels: { color: '#f3f4f6' } } } }
      });
    }

    // Step 3: Persona cards
    function initPersonas() {
      const personas = [
        { name: 'Growth Marketer', desc: 'Data-driven marketer focused on rapid experimentation', img: 'https://source.unsplash.com/200x200/?face,portrait' },
        { name: 'Content Strategist', desc: 'Owns content calendar, editorial guidelines, and SEO alignment', img: 'https://source.unsplash.com/200x200/?face,writer' },
        { name: 'E-commerce Owner', desc: 'Runs online store and cares about product visibility', img: 'https://source.unsplash.com/200x200/?face,business' },
        { name: 'Technical Lead', desc: 'Handles site performance & schema implementation', img: 'https://source.unsplash.com/200x200/?face,engineer' }
      ];
      const grid = document.getElementById('personaGrid');
      personas.forEach((p, idx) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group';
        card.innerHTML = `
          <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" class="w-full h-36 object-cover rounded-md" alt="">
          <div class="text-left">
            <h4 class="font-medium mb-1">${p.name}</h4>
            <p class="text-xs text-neutral-400">${p.desc}</p>
          </div>
        `;
        card.addEventListener('click', () => {
          [...grid.children].forEach(c => c.classList.remove('ring-indigo-600', 'bg-indigo-600/20'));
          card.classList.add('ring-indigo-600', 'bg-indigo-600/20');
        });
        grid.appendChild(card);
      });
    }

    // Init
    document.addEventListener('DOMContentLoaded', () => {
      showStep(0);
      initChart();
      initPersonas();
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
      

<div className="w-full max-w-3xl relative backdrop-blur rounded-xl shadow-lg ring-1 overflow-hidden bg-neutral-100/60 ring-neutral-200" id="wizard">

<div className="h-1 bg-neutral-200">
<div className="h-full w-1/4 bg-indigo-500 transition-all duration-500" id="progressBar" style={{width: '25%'}}></div>
</div>

<header className="flex items-center gap-2 px-8 py-6 border-b border-neutral-200">
<span className="text-lg font-semibold tracking-tight">ASEO</span>
<span className="text-sm pl-4 text-neutral-600" id="stepLabel">Step 1 of 4</span>
</header>

<div className="relative" id="steps">

<section className="px-8 py-10 space-y-8 opacity-0 translate-y-2" data-step="1">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight">Let’s find your company</h2>
<p className="text-neutral-600">Type your website or brand and we’ll pull in the basics.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex-1 relative">
<input className="w-full ring-1 ring-inset focus:ring-indigo-500 placeholder-neutral-500 transition focus:outline-none ring-neutral-300 text-sm bg-neutral-200/50 rounded-lg pt-3 pr-12 pb-3 pl-4" id="companyInput" placeholder="e.g. acme.com" type="text"/>
<svg className="lucide lucide-search absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button className="inline-flex gap-2 hover:bg-indigo-500 active:bg-indigo-700 transition focus:outline-none text-sm font-medium bg-indigo-400 rounded-lg pt-3 pr-5 pb-3 pl-5 items-center" id="findBtn">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="">Lookup</span>
</button>
</div>
<div className="hidden rounded-lg ring-1 p-4 flex items-center gap-4 ring-neutral-200" id="companyPreview">
<img alt="" className="w-16 h-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<h3 className="font-medium" id="companyName">Acme Inc.</h3>
<p className="text-xs text-neutral-600" id="companyDesc">Loading details…</p>
</div>
</div>
</section>

<section className="hidden px-8 py-10 space-y-8 opacity-0 translate-y-2" data-step="2">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight">Scanning your landscape</h2>
<p className="text-neutral-600">Here’s how you stack up against competitors.</p>
</div>
<div className="rounded-lg ring-1 p-4 ring-neutral-200 bg-neutral-200/30">
<div className="w-full">
<div className="relative aspect-[2/1]">
<div className="absolute inset-0 flex items-center justify-center">
<canvas height="0" id="competitorChart" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="hidden px-8 py-10 space-y-8 opacity-0 translate-y-2" data-step="3">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight">Pick your target persona</h2>
<p className="text-neutral-600">We’ve generated personas based on your industry.</p>
</div>
<div className="grid sm:grid-cols-2 gap-4" id="personaGrid">

<button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Growth Marketer</h4>
<p className="text-xs text-neutral-400">Data-driven marketer focused on rapid experimentation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Content Strategist</h4>
<p className="text-xs text-neutral-400">Owns content calendar, editorial guidelines, and SEO alignment</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">E-commerce Owner</h4>
<p className="text-xs text-neutral-400">Runs online store and cares about product visibility</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Technical Lead</h4>
<p className="text-xs text-neutral-400">Handles site performance &amp; schema implementation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Growth Marketer</h4>
<p className="text-xs text-neutral-400">Data-driven marketer focused on rapid experimentation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Content Strategist</h4>
<p className="text-xs text-neutral-400">Owns content calendar, editorial guidelines, and SEO alignment</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">E-commerce Owner</h4>
<p className="text-xs text-neutral-400">Runs online store and cares about product visibility</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Technical Lead</h4>
<p className="text-xs text-neutral-400">Handles site performance &amp; schema implementation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Growth Marketer</h4>
<p className="text-xs text-neutral-400">Data-driven marketer focused on rapid experimentation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Content Strategist</h4>
<p className="text-xs text-neutral-400">Owns content calendar, editorial guidelines, and SEO alignment</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">E-commerce Owner</h4>
<p className="text-xs text-neutral-400">Runs online store and cares about product visibility</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Technical Lead</h4>
<p className="text-xs text-neutral-400">Handles site performance &amp; schema implementation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Growth Marketer</h4>
<p className="text-xs text-neutral-400">Data-driven marketer focused on rapid experimentation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Content Strategist</h4>
<p className="text-xs text-neutral-400">Owns content calendar, editorial guidelines, and SEO alignment</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">E-commerce Owner</h4>
<p className="text-xs text-neutral-400">Runs online store and cares about product visibility</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Technical Lead</h4>
<p className="text-xs text-neutral-400">Handles site performance &amp; schema implementation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Growth Marketer</h4>
<p className="text-xs text-neutral-400">Data-driven marketer focused on rapid experimentation</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Content Strategist</h4>
<p className="text-xs text-neutral-400">Owns content calendar, editorial guidelines, and SEO alignment</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">E-commerce Owner</h4>
<p className="text-xs text-neutral-400">Runs online store and cares about product visibility</p>
</div>
</button><button className="flex flex-col gap-3 p-4 rounded-lg ring-1 ring-neutral-800 hover:ring-indigo-600 hover:bg-neutral-800/40 transition group" type="button">
<img alt="" className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<h4 className="font-medium mb-1">Technical Lead</h4>
<p className="text-xs text-neutral-400">Handles site performance &amp; schema implementation</p>
</div>
</button></div>
</section>

<section className="hidden px-8 py-10 space-y-8 opacity-0 translate-y-2" data-step="4">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight">Choose focus areas</h2>
<p className="text-neutral-600">Select where you’d like us to concentrate first.</p>
</div>
<form className="space-y-4" id="focusForm">
<label className="flex items-center gap-3 p-3 rounded-lg ring-1 cursor-pointer transition ring-neutral-200 hover:bg-neutral-200/40">
<input className="peer opacity-0 absolute w-0 h-0" name="focus" type="checkbox" value="content"/>
<span className="flex h-5 w-5 flex-none items-center justify-center rounded-md ring-1 peer-checked:bg-indigo-600 peer-checked:ring-indigo-600 transition ring-neutral-300"></span>
<span className="text-sm">Content &amp; Keywords</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg ring-1 cursor-pointer transition ring-neutral-200 hover:bg-neutral-200/40">
<input className="peer opacity-0 absolute w-0 h-0" name="focus" type="checkbox" value="technical"/>
<span className="flex h-5 w-5 flex-none items-center justify-center rounded-md ring-1 peer-checked:bg-indigo-600 peer-checked:ring-indigo-600 transition ring-neutral-300"></span>
<span className="text-sm">Technical SEO</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg ring-1 cursor-pointer transition ring-neutral-200 hover:bg-neutral-200/40">
<input className="peer opacity-0 absolute w-0 h-0" name="focus" type="checkbox" value="backlinks"/>
<span className="flex h-5 w-5 flex-none items-center justify-center rounded-md ring-1 peer-checked:bg-indigo-600 peer-checked:ring-indigo-600 transition ring-neutral-300"></span>
<span className="text-sm">Link Building</span>
</label>
</form>
</section>
</div>

<footer className="px-8 py-6 flex justify-between items-center border-t border-neutral-200">
<button className="text-sm transition flex items-center gap-2 disabled:opacity-20 disabled:cursor-not-allowed text-neutral-600 hover:text-neutral-800" disabled="" id="prevBtn">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span>Back</span>
</button>
<button className="inline-flex items-center gap-2 font-medium text-sm hover:bg-indigo-500 active:bg-indigo-700 transition px-6 py-3 rounded-lg focus:outline-none bg-indigo-400" id="nextBtn">
<span>Next</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</footer>
</div>


<style>
    @keyframes fadeIn {from {opacity:0; transform:translateY(8px);} to {opacity:1; transform:translateY(0);} }
    .animate-fadeIn {animation: fadeIn 0.5s ease-out forwards;}
  </style>

    </>
  );
}
