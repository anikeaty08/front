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
    AOS.init({once:true,duration:700,easing:'ease-out-cubic'});

    const navToggle=document.getElementById('navToggle');
    const mobileNav=document.getElementById('mobileNav');
    navToggle.addEventListener('click',()=>{const exp=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',(!exp).toString());mobileNav.classList.toggle('hidden');});

    function animateValue(el,start,end,duration,fmt,cb){const t0=performance.now();function tick(now){const p=Math.min((now-t0)/duration,1);el.textContent=fmt(start+(end-start)*p);if(p<1)requestAnimationFrame(tick);else cb&&cb();}requestAnimationFrame(tick);}
    window.addEventListener('DOMContentLoaded',()=>{const steps=[{id:'percentVisual',s:0,e:82,f:v=>Math.round(v)},{id:'countTools',s:0,e:250,f:v=>Math.round(v)},{id:'countDownloads',s:0,e:1.2,f:v=>v.toFixed(1)}];(function run(i){if(i>=steps.length)return;const{x:id,s,e,f}=steps[i];animateValue(document.getElementById(id),s,e,800,f,()=>run(i+1));})(0);});

    document.getElementById('subscribeForm').addEventListener('submit',e=>{e.preventDefault();const input=e.target.querySelector('input');if(!input.checkValidity()){input.reportValidity();return;}input.disabled=true;const btn=e.target.querySelector('button');btn.innerHTML='<svg data-lucide="loader" class="animate-spin w-4 h-4 mx-auto"></svg>';lucide.createIcons();setTimeout(()=>{btn.innerHTML='Welcome ✔';btn.classList.replace('bg-cyan-500','bg-cyan-700');input.value='';input.disabled=false;},1400);});

    const ctxD=document.getElementById('chartDOWNLOADS').getContext('2d');
    const grad=ctxD.createLinearGradient(0,0,0,120);grad.addColorStop(0,'rgba(255,255,255,0.45)');grad.addColorStop(1,'rgba(255,255,255,0)');
    new Chart(ctxD,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],datasets:[{data:[65,82,97,102,131,158,176,194,210,223,240,260],borderColor:'rgba(255,255,255,0.95)',backgroundColor:grad,borderWidth:2,tension:0.35,pointRadius:0,fill:true}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}});

    new Chart(document.getElementById('chartCATEGORIES').getContext('2d'),{type:'bar',data:{labels:['Communication','Design','Automation','Planning','Analytics'],datasets:[{data:[54,38,46,29,63],backgroundColor:['rgba(236,72,153,0.7)','rgba(79,70,229,0.7)','rgba(16,185,129,0.7)','rgba(251,191,36,0.7)','rgba(2,132,199,0.7)'],borderRadius:6,hoverBackgroundColor:['rgba(236,72,153,1)','rgba(79,70,229,1)','rgba(16,185,129,1)','rgba(251,191,36,1)','rgba(2,132,199,1)']}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{grid:{display:false},ticks:{color:'rgba(148,163,184,0.8)',font:{family:'Inter'}}},y:{beginAtZero:true,grid:{color:'rgba(30,41,59,0.4)'},ticks:{color:'rgba(148,163,184,0.8)'}}},plugins:{legend:{display:false},tooltip:{backgroundColor:'rgba(15,23,42,0.9)',titleFont:{family:'Inter',weight:'600'},bodyFont:{family:'Inter',weight:'400'},cornerRadius:4,padding:8}}}});

    new Chart(document.getElementById('chartASSETS').getContext('2d'),{type:'doughnut',data:{labels:['Illustrations','Icons','UI Kits','Fonts'],datasets:[{data:[32,25,18,25],backgroundColor:['#d946ef','#34d399','#38bdf8','#fbbf24'],borderWidth:0,hoverOffset:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},cutout:'68%'}});
  
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
      

<div className="w-full space-y-5" data-aos="fade-in" style={{padding: '30px'}}>

<header className="rounded-3xl bg-[#0f172a] ring-1 ring-white/10 px-6 py-4 md:px-8 md:py-5" data-aos="fade-down">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<svg className="w-5 h-5 stroke-cyan-400" data-lucide="briefcase"></svg>
<span className="text-lg font-semibold tracking-tight">RemoteCraft</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" href="#">Home</a>
<a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" href="#">Tools</a>
<a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" href="#">Templates</a>
<a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" href="#">Blog</a>
<a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" href="#">Community</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:inline-block rounded-full bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 px-5 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" href="#subscribeForm">
            Subscribe
          </a>
<button aria-controls="mobileNav" aria-expanded="false" aria-label="Toggle menu" className="md:hidden p-2 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" id="navToggle">
<svg className="w-5 h-5" data-lucide="menu"></svg>
</button>
</div>
</div>
<nav className="md:hidden pt-4 space-y-2 hidden" id="mobileNav">
<a className="block px-4 py-2 rounded-md hover:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" href="#">Home</a>
<a className="block px-4 py-2 rounded-md hover:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" href="#">Tools</a>
<a className="block px-4 py-2 rounded-md hover:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" href="#">Templates</a>
<a className="block px-4 py-2 rounded-md hover:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" href="#">Blog</a>
<a className="block px-4 py-2 rounded-md hover:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" href="#">Community</a>
<a className="block px-4 py-2 rounded-md bg-cyan-500 text-slate-900 text-sm font-medium hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" href="#subscribeForm">Subscribe</a>
</nav>
</header>

<div className="grid grid-cols-1 md:grid-cols-7 gap-5">

<aside className="bg-[#0f172a] rounded-3xl p-8 flex flex-col justify-between ring-1 ring-white/10 md:col-span-3" data-aos="fade-right" data-aos-delay="80">
<div>
<div className="flex items-center gap-2 mb-10">
<svg className="w-6 h-6 stroke-cyan-400" data-lucide="briefcase"></svg>
<span className="text-xl font-semibold tracking-tight">RemoteCraft</span>
</div>
<p className="uppercase tracking-widest text-xs text-cyan-400 mb-4">Remote weekly</p>
<h1 className="text-4xl md:text-5xl leading-tight mb-6 tracking-tight">
            The best tools &amp; templates <br className="hidden sm:block"/>for productive remote work.
          </h1>
<p className="text-sm text-slate-400/80 mb-8">
            Every Monday, get hand-picked resources used by high-performing freelancers and distributed teams.
          </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 stroke-cyan-400 mt-0.5" data-lucide="zap"></svg>
<span><span className="font-medium text-slate-100">Actionable picks</span> you can use instantly.</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 stroke-cyan-400 mt-0.5" data-lucide="shield-check"></svg>
<span><span className="font-medium text-slate-100">No spam</span>, just value every week.</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 stroke-cyan-400 mt-0.5" data-lucide="sun"></svg>
<span><span className="font-medium text-slate-100">Lifetime access</span> to our resource vault.</span>
</li>
</ul>
<form aria-label="Email sign-up" className="flex flex-col sm:flex-row gap-3" id="subscribeForm">
<label className="sr-only" htmlFor="emailInput">Your email</label>
<input className="flex-1 rounded-full bg-slate-800/60 border border-slate-700 placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" id="emailInput" placeholder="you@remote.work" required="" type="email"/>
<button aria-label="Join newsletter" className="rounded-full bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 transition px-6 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500" type="submit">
              Join Free
            </button>
</form>
</div>
<div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
<div className="flex items-center gap-1">
<svg className="w-4 h-4 stroke-yellow-400 fill-yellow-400/90" data-lucide="star"></svg>
<span>4.9 avg rating</span>
</div>
<span className="hidden sm:inline">·</span>
<div className="flex items-center gap-1">
<svg className="w-4 h-4" data-lucide="globe"></svg>
<span>22 k subscribers</span>
</div>
</div>
<p className="text-xs text-slate-600 mt-8">© 2024 RemoteCraft. Built by remote pros, for remote pros.</p>
</aside>

<section className="md:col-span-4 grid grid-cols-2 gap-5">
<div className="col-span-2 md:col-span-1 row-span-2 relative ring-1 ring-white/10 bg-[#0f172a] overflow-hidden flex flex-col rounded-3xl p-6 md:p-8" data-aos="zoom-in" data-aos-delay="120">
<h2 className="text-lg font-semibold tracking-tight">Asset Distribution</h2>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-full" style={{maxWidth: '170px'}}>
<div className="relative h-44">
<canvas id="chartASSETS"></canvas>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-2xl font-semibold tracking-tight"><span id="percentVisual">0</span><span className="text-sm">%</span></span>
<span className="text-[10px] uppercase tracking-widest text-slate-400">Visual</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-6 text-xs">
<div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500 block"></span><span>Illustrations</span></div>
<div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block"></span><span>Icons</span></div>
<div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-sky-400 block"></span><span>UI Kits</span></div>
<div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-300 block"></span><span>Fonts</span></div>
</div>
</div>
<div className="bg-gradient-to-br from-amber-300 via-amber-200 to-amber-100 text-slate-900 rounded-3xl p-6 flex flex-col justify-between ring-1 ring-amber-200/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl" data-aos="fade-up" data-aos-delay="160">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/70 rounded-full ring-1 ring-amber-300">
<svg className="w-5 h-5 stroke-amber-700" data-lucide="box"></svg>
</div>
<span className="text-3xl font-semibold tracking-tight"><span id="countTools">0</span>+</span>
</div>
<p className="text-sm mt-2">Curated tools catalogued</p>
</div>
<div className="flex ring-1 ring-fuchsia-400/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl text-white bg-gradient-to-br from-fuchsia-600 to-fuchsia-500 rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-between flex-col" data-aos="fade-up" data-aos-delay="200">
<div className="flex items-center justify-between">
<div>
<p className="text-3xl font-semibold tracking-tight"><span id="countDownloads">0</span> M</p>
<p className="text-sm">Template downloads</p>
</div>
<svg className="w-8 h-8 stroke-white" data-lucide="download-cloud"></svg>
</div>
<div className="mt-4 h-28 w-full"><canvas id="chartDOWNLOADS"></canvas></div>
</div>
<div className="col-span-2 bg-[#0f172a] ring-1 ring-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="340">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">Trending Categories</h2>
<p className="text-sm text-slate-400 max-w-md">Here’s where the community is focusing this week. Use these insights to spot opportunities and guide your own growth.</p>
</div>
<div className="w-full md:w-2/3">
<div className="h-48"><canvas id="chartCATEGORIES"></canvas></div>
</div>
</div>
</div>
</section>
</div>
</div>






    </>
  );
}
