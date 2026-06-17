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
      
    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({strokeWidth:1.5});

      /* Card observer (existing) */
      const cardObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('in-view');
            cardObserver.unobserve(entry.target);
          }
        });
      },{threshold:.15});
      document.querySelectorAll('.card-animate').forEach((el,idx)=>{
        el.style.transitionDelay=`${idx*120}ms`;
        cardObserver.observe(el);
      });

      /* ===== Tabs (desktop) ===== */
      const tabButtons=document.querySelectorAll('.tab-btn');
      const panels=document.querySelectorAll('[data-panel]');
      function activateTab(id){
        tabButtons.forEach(btn=>{
          const active=btn.dataset.tab===id;
          btn.classList.toggle('text-[#1A202C]',active);
          btn.classList.toggle('font-semibold',active);
          btn.classList.toggle('border-[#3182CE]',active);
          btn.classList.toggle('bg-[#E8F2FC]',active);
          btn.classList.toggle('text-[#718096]',!active);
        });
        panels.forEach(panel=>{
          const active=panel.dataset.panel===id;
          panel.style.opacity=active?1:0;
          panel.style.pointerEvents=active?'auto':'none';
        });
      }
      tabButtons.forEach(btn=>btn.addEventListener('click',()=>activateTab(btn.dataset.tab)));
      activateTab('pillar1');

      /* ===== Mobile Accordion ===== */
      const accButtons=document.querySelectorAll('.accordion-btn');
      accButtons.forEach(btn=>{
        btn.addEventListener('click',()=>{
          const open=btn.nextElementSibling.classList.contains('hidden')===false;
          document.querySelectorAll('.accordion-content').forEach(c=>c.classList.add('hidden'));
          document.querySelectorAll('.accordion-btn').forEach(b=>{
            b.classList.remove('font-semibold','text-[#1A202C]');
            b.classList.add('text-[#718096]');
            b.querySelector('[data-lucide]').style.transform='';
          });
          if(!open){
            btn.nextElementSibling.classList.remove('hidden');
            btn.classList.add('font-semibold','text-[#1A202C]');
            btn.querySelector('[data-lucide]').style.transform='rotate(180deg)';
          }
        });
      });
      /* open first by default */
      document.querySelector('[data-acc="pillar1"]').click();
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
      


<section className="w-full md:py-32 text-[#1A202C] bg-[#F7FAFC] pt-24 pb-24" id="blueprint">
<div className="max-w-3xl mx-auto px-6 text-center">
<p className="animate-element uppercase text-xs tracking-wider font-semibold text-[#718096]" style={{animationDelay: '100ms'}}>
        THE BLUEPRINT FOR GROWTH
      </p>
<h2 className="animate-element text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mt-3" style={{animationDelay: '200ms'}}>
        The Business Acceleration Framework
      </h2>
<p className="animate-element text-base md:text-lg text-[#4A5568] mt-4" style={{animationDelay: '300ms'}}>
        Your detailed blueprint for engineering a high-performance growth machine. We build the system that drives revenue acceleration.
      </p>
</div>
<div className="mt-16 px-4 flex justify-center">
<img alt="Structured Business Acceleration Framework Blueprint" className="animate-element max-w-5xl w-full rounded-lg shadow-xl ring-1 ring-slate-200/40" src="https://images.unsplash.com/photo-1581092580496-37ceeb3bb7dd?auto=format&amp;fit=crop&amp;w=1800&amp;q=80" style={{animationDelay: '400ms'}}/>
</div>
</section>

<section className="w-full py-24 md:py-32 bg-[#F7FAFC] text-[#1A202C]" id="solution-framework">
<div className="max-w-6xl mx-auto px-6">

<h2 className="animate-element text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-3" style={{animationDelay: '100ms'}}>
        The Four Pillars of Your High-Performance Engine
      </h2>
<p className="animate-element text-base md:text-lg text-[#4A5568] mb-12 max-w-3xl" style={{animationDelay: '200ms'}}>
        We systematically upgrade the core components of your business to handle growth without the chaos.
      </p>

<div className="hidden lg:grid grid-cols-12 gap-10">

<div className="col-span-4">
<ul className="space-y-2 lg:sticky lg:top-24">
<li className=""><button className="tab-btn flex w-full items-center gap-3 rounded-md py-3 px-4 text-left transition-colors duration-200 border-l-4 border-transparent hover:bg-[#E8F2FC] text-[#718096]" data-tab="pillar1">
<span className="font-semibold text-[#1A202C]">Revenue &amp; Growth Engine</span>
</button></li>
<li className=""><button className="tab-btn flex w-full gap-3 transition-colors duration-200 hover:bg-[#E8F2FC] text-left border-transparent rounded-md border-l-4 pt-3 pr-4 pb-3 pl-4 items-center text-[#718096]" data-tab="pillar2">
              Streamlined Operating System
            </button></li>
<li className=""><button className="tab-btn flex w-full gap-3 transition-colors duration-200 hover:bg-[#E8F2FC] text-left border-transparent rounded-md border-l-4 pt-3 pr-4 pb-3 pl-4 items-center text-[#718096]" data-tab="pillar3">
              Leadership Enablement
            </button></li>
<li className=""><button className="tab-btn flex w-full gap-3 transition-colors duration-200 hover:bg-[#E8F2FC] font-semibold text-[#1A202C] text-left bg-[#E8F2FC] border-transparent rounded-md border-l-4 pt-3 pr-4 pb-3 pl-4 items-center" data-tab="pillar4">
              Financial Operating System
            </button></li>
</ul>
</div>

<div className="col-span-8 relative min-h-[320px]">

<div className="fade-panel absolute inset-0 flex flex-col gap-6 opacity-100" data-panel="pillar1" style={{opacity: '0', pointerEvents: 'none'}}>
<h3 className="text-2xl font-semibold">Revenue &amp; Growth Engine</h3>
<p className="text-[#4A5568]">
              Map your entire customer journey from first click to renewal, optimizing Sales, Marketing, and Client Success processes.
            </p>

<svg className="w-full max-w-md" viewbox="0 0 320 120">
<path d="M20 100 Q80 20 140 100 T300 100" fill="none" stroke="#3182CE" strokeWidth="3"></path>
<circle cx="20" cy="100" fill="#3182CE" r="6"></circle>
<text fill="#4A5568" fontSize="10" x="0" y="115">Awareness</text>
<circle cx="140" cy="100" fill="#3182CE" r="6"></circle>
<text fill="#4A5568" fontSize="10" x="120" y="115">Sales</text>
<circle cx="300" cy="100" fill="#3182CE" r="6"></circle>
<text fill="#4A5568" fontSize="10" x="270" y="115">Success</text>
</svg>
</div>

<div className="fade-panel absolute inset-0 flex flex-col gap-6 opacity-0 pointer-events-none" data-panel="pillar2" style={{opacity: '0', pointerEvents: 'none'}}>
<h3 className="text-2xl font-semibold">Streamlined Operating System</h3>
<p className="text-[#4A5568]">
              Build core infrastructure, integrate your tech stack, and automate workflows to handle 2× client volume without chaos.
            </p>
<svg className="w-full max-w-md" viewbox="0 0 300 160">
<circle cx="150" cy="80" fill="#3182CE" opacity=".2" r="25"></circle>
<rect fill="#3182CE" height="40" opacity=".15" width="40" x="30" y="30"></rect>
<rect fill="#3182CE" height="40" opacity=".15" width="40" x="230" y="30"></rect>
<rect fill="#3182CE" height="40" opacity=".15" width="40" x="30" y="110"></rect>
<rect fill="#3182CE" height="40" opacity=".15" width="40" x="230" y="110"></rect>
<line stroke="#3182CE" strokeWidth="2" x1="55" x2="150" y1="50" y2="80"></line>
<line stroke="#3182CE" strokeWidth="2" x1="255" x2="150" y1="50" y2="80"></line>
<line stroke="#3182CE" strokeWidth="2" x1="55" x2="150" y1="130" y2="80"></line>
<line stroke="#3182CE" strokeWidth="2" x1="255" x2="150" y1="130" y2="80"></line>
</svg>
</div>

<div className="fade-panel absolute inset-0 flex flex-col gap-6 opacity-0 pointer-events-none" data-panel="pillar3" style={{opacity: '0', pointerEvents: 'none'}}>
<h3 className="text-2xl font-semibold">Leadership Enablement</h3>
<p className="text-[#4A5568]">
              Automate low-level tasks to recapture your time for strategic deals, key relationships, and company vision.
            </p>
<svg className="w-full max-w-md" viewbox="0 0 320 120">
<rect fill="#718096" height="20" opacity=".2" width="260" x="20" y="20"></rect>
<rect fill="#718096" height="20" opacity=".2" width="100" x="20" y="50"></rect>
<rect fill="#718096" height="20" opacity=".2" width="60" x="20" y="80"></rect>
<rect fill="#3182CE" height="20" width="260" x="20" y="20"></rect>
<text fill="white" fontSize="10" x="25" y="35">Strategic Work</text>
</svg>
</div>

<div className="fade-panel absolute inset-0 flex flex-col gap-6 opacity-0 pointer-events-none" data-panel="pillar4" style={{opacity: '1', pointerEvents: 'auto'}}>
<h3 className="text-2xl font-semibold">Financial Operating System</h3>
<p className="text-[#4A5568]">
              Build systems for real-time financial clarity. Know precisely which levers increase profit and cash flow.
            </p>
<svg className="w-full max-w-md" viewbox="0 0 320 160">
<rect fill="#E2E8F0" height="160" rx="8" width="320" x="0" y="0"></rect>
<polyline fill="none" points="30,120 80,90 130,100 180,60 230,70 290,30" stroke="#3182CE" strokeWidth="3"></polyline>
<circle cx="290" cy="30" fill="#3182CE" r="4"></circle>
<text fill="#4A5568" fontSize="10" x="240" y="50">Profit</text>
<rect fill="#3182CE" height="30" opacity=".15" rx="4" width="60" x="20" y="20"></rect>
<text fill="#1A202C" fontSize="10" x="25" y="40">Cash Flow</text>
</svg>
</div>
</div>
</div>

<div className="lg:hidden space-y-4">

<div className="border border-[#E2E8F0] rounded-md">
<button className="accordion-btn w-full flex justify-between items-center p-4 text-[#718096]" data-acc="pillar1">
<span className="font-semibold text-[#1A202C]">Revenue &amp; Growth Engine</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content px-4 pb-4 pt-0 hidden">
<p className="text-[#4A5568] mb-4">
              Map your entire customer journey from first click to renewal, optimizing Sales, Marketing, and Client Success processes.
            </p>
<svg className="w-full max-w-md mx-auto" viewbox="0 0 320 120">
<path d="M20 100 Q80 20 140 100 T300 100" fill="none" stroke="#3182CE" strokeWidth="3"></path>
<circle cx="20" cy="100" fill="#3182CE" r="6"></circle>
<circle cx="140" cy="100" fill="#3182CE" r="6"></circle>
<circle cx="300" cy="100" fill="#3182CE" r="6"></circle>
</svg>
</div>
</div>

<div className="border border-[#E2E8F0] rounded-md">
<button className="accordion-btn w-full flex justify-between items-center p-4 text-[#718096]" data-acc="pillar2">
<span>Streamlined Operating System</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content px-4 pb-4 pt-0 hidden">
<p className="text-[#4A5568] mb-4">
              Build core infrastructure, integrate your tech stack, and automate workflows to handle 2× client volume without chaos.
            </p>
<svg className="w-full max-w-md mx-auto" viewbox="0 0 300 160">
<circle cx="150" cy="80" fill="#3182CE" opacity=".2" r="25"></circle>
<rect fill="#3182CE" height="40" opacity=".15" width="40" x="30" y="30"></rect>
<rect fill="#3182CE" height="40" opacity=".15" width="40" x="230" y="30"></rect>
<rect fill="#3182CE" height="40" opacity=".15" width="40" x="30" y="110"></rect>
<rect fill="#3182CE" height="40" opacity=".15" width="40" x="230" y="110"></rect>
<line stroke="#3182CE" strokeWidth="2" x1="55" x2="150" y1="50" y2="80"></line>
<line stroke="#3182CE" strokeWidth="2" x1="255" x2="150" y1="50" y2="80"></line>
<line stroke="#3182CE" strokeWidth="2" x1="55" x2="150" y1="130" y2="80"></line>
<line stroke="#3182CE" strokeWidth="2" x1="255" x2="150" y1="130" y2="80"></line>
</svg>
</div>
</div>

<div className="border border-[#E2E8F0] rounded-md">
<button className="accordion-btn w-full flex justify-between items-center p-4 text-[#718096]" data-acc="pillar3">
<span>Leadership Enablement</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content px-4 pb-4 pt-0 hidden">
<p className="text-[#4A5568] mb-4">
              Automate low-level tasks to recapture your time for strategic deals, key relationships, and company vision.
            </p>
<svg className="w-full max-w-md mx-auto" viewbox="0 0 320 120">
<rect fill="#718096" height="20" opacity=".2" width="260" x="20" y="20"></rect>
<rect fill="#718096" height="20" opacity=".2" width="100" x="20" y="50"></rect>
<rect fill="#718096" height="20" opacity=".2" width="60" x="20" y="80"></rect>
<rect fill="#3182CE" height="20" width="260" x="20" y="20"></rect>
</svg>
</div>
</div>

<div className="border border-[#E2E8F0] rounded-md">
<button className="accordion-btn w-full flex justify-between items-center p-4 text-[#718096]" data-acc="pillar4">
<span>Financial Operating System</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content px-4 pb-4 pt-0 hidden">
<p className="text-[#4A5568] mb-4">
              Build systems for real-time financial clarity. Know precisely which levers increase profit and cash flow.
            </p>
<svg className="w-full max-w-md mx-auto" viewbox="0 0 320 160">
<rect fill="#E2E8F0" height="160" rx="8" width="320" x="0" y="0"></rect>
<polyline fill="none" points="30,120 80,90 130,100 180,60 230,70 290,30" stroke="#3182CE" strokeWidth="3"></polyline>
<circle cx="290" cy="30" fill="#3182CE" r="4"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
