import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function() {
      const bullets = document.querySelectorAll('#bulletList button[data-index]');
      const cards = [
        document.getElementById('card-0'),
        document.getElementById('card-1'),
        document.getElementById('card-2')
      ];
      let currentIndex = 0;

      const slides = [
        { bullet: 'Real‑time collaboration', accent: 'emerald' },
        { bullet: 'Threaded conversations', accent: 'amber' },
        { bullet: 'Quick actions', accent: 'violet' }
      ];

      const accentColors = {
        'emerald': 'bg-emerald-400',
        'amber': 'bg-amber-400',
        'violet': 'bg-violet-400'
      };

      function renderBullets() {
        const bulletList = document.getElementById('bulletList');
        bulletList.innerHTML = '';
        
        slides.forEach((slide, index) => {
          const isActive = index === currentIndex;
          const button = document.createElement('button');
          button.type = 'button';
          button.setAttribute('data-index', index);
          button.className = 'group w-full flex items-center gap-3 sm:gap-4';
          
          const bar = document.createElement('span');
          bar.className = `h-6 w-1 rounded-full transition-colors ${isActive ? accentColors[slide.accent] : 'bg-slate-700'}`;
          
          const text = document.createElement('span');
          text.className = `text-sm sm:text-base font-medium ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`;
          text.textContent = slide.bullet;
          
          button.appendChild(bar);
          button.appendChild(text);
          button.addEventListener('click', () => showCard(index));
          bulletList.appendChild(button);
        });
      }

      function showCard(index) {
        currentIndex = index;
        
        cards.forEach((card, i) => {
          if (i === index) {
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
          } else {
            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
          }
        });

        renderBullets();
      }

      renderBullets();
      showCard(0);
    })();
  


    function toggleFaq(button) { const content = button.nextElementSibling; const icon = button.querySelector('svg'); if (content.classList.contains('hidden')) { content.classList.remove('hidden'); icon.style.transform = 'rotate(180deg)'; } else { content.classList.add('hidden'); icon.style.transform = 'rotate(0deg)'; }}
  


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 overflow-hidden">
<div className="xl:my-70 xl:mx-80 xl:pl-70 xl:pr-7 mt-70 mr-80 mb-70 ml-80 pr-7 pl-70 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
</div>

<header className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="text-xl font-semibold tracking-tight" style={{}}>Webify</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
</div>
</header>

<section className="overflow-hidden pt-20 pr-6 pb-32 pl-6 relative">
<div className="z-10 text-center max-w-5xl mr-auto ml-auto relative">

<div className="inline-flex gap-2 text-sm text-blue-400 bg-blue-500/10 border-blue-500/20 border rounded-full mb-8 px-4 py-2 gap-x-2 gap-y-2 items-center">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Early Access • Limited to 100 founders</span>
</div>

<h1 className="md:text-7xl bg-clip-text leading-tight text-5xl font-bold text-transparent tracking-tight bg-gradient-to-br from-white via-white to-slate-400 mb-6">
                Fix Your Website's SEO<br/>Automatically
            </h1>

<p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Upload your URL → AI fixes everything (SEO, speed, mobile, accessibility) → Preview → Deploy. One click, done.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="group bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 w-full sm:w-auto flex items-center justify-center gap-2">
                    Reserve Your Spot - $50
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 px-8 py-4 rounded-xl text-lg font-medium transition-all w-full sm:w-auto flex items-center justify-center gap-2">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto mb-12">
<div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
</div>

<div className="absolute -top-6 -left-6 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl hidden md:block">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold">SEO Score</div>
<div className="text-2xl font-bold text-green-400">98/100</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl hidden md:block">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold">Page Speed</div>
<div className="text-2xl font-bold text-blue-400">2.1s</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="pt-20 pr-6 pb-20 pl-6" id="features">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
</div>
<section className="relative z-10 max-w-7xl mr-auto ml-auto pb-20 rounded">
<div className="mx-auto max-w-4xl text-center px-6 rounded">
<span className="inline-flex items-center ring-inset text-xs text-white/80 bg-white/5 ring-white/10 ring-1 rounded pt-1 pr-3 pb-1 pl-3 scale-150">Benefits</span>
<h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight rounded">The Key Benefits of AI for Your
      Business Growth</h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 rounded">Discover how AI automation enhances efficiency, reduces
      costs, and drives business growth with smarter, faster processes.</p>
</div>
<div className="mt-10 sm:mt-12 px-6 rounded">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded">

<div className="relative ring-inset overflow-hidden ring-1 pt-5 pr-5 pb-5 pl-5 bg-white/5 ring-white/10 rounded sm:p-6 sm:bg-gradient-to-b sm:from-gray-900 sm:to-black">
<svg className="lucide lucide-zap h-5 w-5 text-white/80 rounded" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight rounded mt-3" style={{}}>Instant Fixes</h3>
<p className="text-sm text-white/70 rounded mt-2" style={{}}>Automatically fix SEO issues including meta tags, haders, alt text, and structured data.</p>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 bg-gradient-to-t to-transparent blur-3xl from-purple-600/30 rounded">
</div>
</div>

<div className="ring-inset overflow-hidden ring-white/10 ring-1 rounded pt-5 pr-5 pb-5 pl-5 relative sm:p-6 sm:bg-gradient-to-r sm:from-gray-900 sm:to-black">
<svg className="lucide lucide-handshake h-5 w-5 text-white/80 rounded" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight rounded mt-3" style={{}}>Speed Boost</h3>
<p className="text-sm text-white/70 rounded mt-2" style={{}}>Optimize images, minify code, and implement caching to improve load times by more than 50%.</p>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 bg-gradient-to-t to-transparent blur-3xl from-purple-600/30 rounded">
</div>
</div>

<div className="ring-inset overflow-hidden bg-white/5 ring-white/10 ring-1 rounded pt-5 pr-5 pb-5 pl-5 relative sm:p-6 sm:bg-gradient-to-b sm:from-gray-900 sm:to-black">
<svg className="lucide lucide-clock h-5 w-5 text-white/80 rounded" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight rounded mt-3" style={{}}>Mobile Ready</h3>
<p className="text-sm text-white/70 rounded mt-2" style={{}}>Ensure your site works perfectly on all devices with response design fixes.</p>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 bg-gradient-to-t to-transparent blur-3xl from-purple-600/30 rounded">
</div>
</div>

<div className="relative ring-1 ring-inset p-5 overflow-hidden bg-white/5 ring-white/10 rounded sm:p-6 sm:bg-gradient-to-b sm:from-gray-900 sm:to-black">
<svg className="lucide lucide-circle-dollar-sign h-5 w-5 text-white/80 rounded" data-lucide="circle-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight rounded mt-3" style={{}}>Preview First</h3>
<p className="text-sm text-white/70 rounded mt-2" style={{}}>Review all changes before deploying. See exactly what will be updated on your site</p>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 bg-gradient-to-t to-transparent blur-3xl from-purple-600/30 rounded">
</div>
</div>

<div className="ring-inset overflow-hidden sm:p-6 sm:bg-gradient-to-b sm:from-gray-900 sm:to-black bg-white/5 ring-white/10 ring-1 rounded pt-5 pr-5 pb-5 pl-5 relative">
<svg className="lucide lucide-pie-chart h-5 w-5 text-white/80 rounded" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight rounded mt-3" style={{}}>Accessibility</h3>
<p className="text-sm text-white/70 rounded mt-2" style={{}}>Make your site accessible to everyone with WCAG compliance fixes</p>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 bg-gradient-to-t to-transparent blur-3xl from-purple-600/30 rounded">
</div>
</div>

<div className="relative ring-1 ring-inset p-5 overflow-hidden bg-white/5 ring-white/10 rounded sm:p-6 sm:bg-gradient-to-b sm:from-gray-900 sm:to-black">
<svg className="lucide lucide-bar-chart-3 h-5 w-5 text-white/80 rounded" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight rounded mt-3" style={{}}>One-Click Deployment</h3>
<p className="text-sm text-white/70 rounded mt-2" style={{}}>Deploy all changes with a single click. No coding or technical knowledge required.</p>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 bg-gradient-to-t to-transparent blur-3xl from-purple-600/30 rounded">
</div>
</div>
</div>
</div>
</section>
</div>
</section>


<section className="pt-20 pr-6 pb-20 pl-6" id="pricing">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="md:text-4xl text-3xl font-bold tracking-tight mb-4">Lock in founder pricing</h2>
<p className="text-lg text-slate-400" style={{}}>Pre-order now and save 50% off forever</p>
</div>
<section className="z-10 sm:px-6 lg:px-8 md:py-24 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative" data-component="feature-rotator">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-white tracking-tight mx-1">Get your website SEO-optimized in minutes </h2>
<div className="mt-10 space-y-5" id="bulletList"><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="0" type="button"><span className="h-6 w-1 rounded-full transition-colors bg-emerald-400"></span><span className="text-sm sm:text-base font-medium text-white">Real‑time collaboration</span></button><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="1" type="button"><span className="h-6 w-1 rounded-full transition-colors bg-slate-700"></span><span className="text-sm sm:text-base font-medium text-slate-500 group-hover:text-slate-300">Threaded conversations</span></button><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="2" type="button"><span className="h-6 w-1 rounded-full transition-colors bg-slate-700"></span><span className="text-sm sm:text-base font-medium text-slate-500 group-hover:text-slate-300">Quick actions</span></button></div>
</div>
<div className="relative">
<div className="card-view relative rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden transition-opacity duration-500" id="card-0" style={{opacity: '1', pointerEvents: 'auto'}}>
<div className="h-12 flex items-center gap-2 px-4 border-b border-slate-800/70 text-slate-400 text-sm">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline className="" points="14 2 14 8 20 8"></polyline>
</svg>
<span className="truncate" style={{}}>Webify</span>
<span className="opacity-50">›</span>
<span className="truncate text-slate-300" style={{}}>Early Access</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<svg className="w-4 h-4" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(148, 163, 184)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="1"></circle><circle className="" cx="12" cy="5" r="1"></circle><circle className="" cx="12" cy="19" r="1"></circle></svg>
</span>
</div>
<div className="md:px-8 md:py-10 pt-8 pr-6 pb-8 pl-6 relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-slate-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-emerald-500/10 text-emerald-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle className="" cx="9" cy="7" r="4"></circle>
<path className="" d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center sm:text-lg text-base text-emerald-200 bg-emerald-500/10 ring-emerald-500/60 ring-1 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" style={{}}>Early Access</span>
<span className="">when we launch</span>
</h3>
</div>
<p className="leading-relaxed text-[17px] sm:text-lg text-slate-400 max-w-prose mt-5" style={{}}>Be among the first to use our SEO optimization tool when we launch in January 2026. As a founding member, you'll be first in line to transform your websites with cutting-edge AI Technology</p>
<div className="mt-6 flex gap-2">
<span className="inline-flex items-center text-xs font-medium text-emerald-200 bg-emerald-500/10 ring-emerald-500/60 ring-1 rounded-md pt-1 pr-2.5 pb-1 pl-2.5" style={{}}>AI Tech</span>
<span className="inline-flex items-center text-xs font-medium text-violet-200 bg-violet-500/10 ring-violet-500/60 ring-1 rounded-md pt-1 pr-2.5 pb-1 pl-2.5" style={{}}>SEO Tool</span>
</div>
<div className="mt-8 space-y-2">
<div className="h-3 rounded-lg bg-slate-800/70 w-2/3"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-5/6"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-1/2"></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent">
</div>
</div>
</div>
<div className="card-view absolute inset-0 rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden transition-opacity duration-500" id="card-1" style={{opacity: '0', pointerEvents: 'none'}}>
<div className="h-12 flex items-center gap-2 px-4 border-b border-slate-800/70 text-slate-400 text-sm">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline className="" points="14 2 14 8 20 8"></polyline>
</svg>
<span className="truncate" style={{}}>Webify</span>
<span className="opacity-50">›</span>
<span className="truncate text-slate-300" style={{}}>Early Pricing</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="1"></circle><circle className="" cx="12" cy="5" r="1"></circle><circle className="" cx="12" cy="19" r="1"></circle></svg>
</span>
</div>
<div className="relative px-6 md:px-8 py-8 md:py-10">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-slate-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-amber-500/10 text-amber-400">
<svg className="lucide lucide-rocket w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(251, 191, 36)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center sm:text-lg text-base text-amber-200 bg-amber-500/10 ring-amber-500/60 ring-1 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" style={{}}>Save 50%</span>
<span className="" style={{}}>with early bird pricing</span>
</h3>
</div>
<p className="leading-relaxed text-[17px] sm:text-lg text-slate-400 max-w-prose mt-5">Secure exclusive founder pricing at 50% off our standard rate. While new customers will pay $50/month after launch, early adopters maintain their discounted rate permanently with no future price increases.</p>
<div className="mt-6 flex gap-2">
<span className="inline-flex items-center text-xs font-medium text-amber-200 bg-amber-500/10 ring-amber-500/60 ring-1 rounded-md pt-1 pr-2.5 pb-1 pl-2.5" style={{}}>Jan 2026</span>
<span className="inline-flex items-center text-xs font-medium text-sky-200 bg-sky-500/10 ring-sky-500/60 ring-1 rounded-md pt-1 pr-2.5 pb-1 pl-2.5" style={{}}>Priority</span>
</div>
<div className="mt-8 space-y-2">
<div className="h-3 rounded-lg bg-slate-800/70 w-2/3"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-5/6"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-1/2"></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent">
</div>
</div>
</div>
<div className="card-view absolute inset-0 rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden transition-opacity duration-500" id="card-2" style={{opacity: '0', pointerEvents: 'none'}}>
<div className="h-12 flex items-center gap-2 px-4 border-b border-slate-800/70 text-slate-400 text-sm">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline className="" points="14 2 14 8 20 8"></polyline>
</svg>
<span className="truncate" style={{}}>Webify</span>
<span className="opacity-50">›</span>
<span className="truncate text-slate-300" style={{}}>Offer</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="1"></circle><circle className="" cx="12" cy="5" r="1"></circle><circle className="" cx="12" cy="19" r="1"></circle></svg>
</span>
</div>
<div className="relative px-6 md:px-8 py-8 md:py-10">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-slate-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-violet-500/10 text-violet-400">
<svg className="lucide lucide-clock w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(167, 139, 250)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center sm:text-lg text-base text-violet-200 bg-violet-500/10 ring-violet-500/60 ring-1 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" style={{}}>First 100</span>
<span className="" style={{}}>customers only<p className="leading-relaxed text-[17px] sm:text-lg text-slate-400 max-w-prose mt-5">This offer is available to the first 100 customers only. When we reach capacity, pricing reverts to standard rates. Secure your spot now to lock in exclusive lifetime benefits</p> <div className="mt-6 flex gap-2">
<span className="inline-flex items-center text-xs font-medium text-violet-200 bg-violet-500/10 ring-violet-500/60 ring-1 rounded-md pt-1 pr-2.5 pb-1 pl-2.5" style={{}}>Exclusive</span>
<span className="inline-flex items-center text-xs font-medium text-emerald-200 bg-emerald-500/10 ring-emerald-500/60 ring-1 rounded-md pt-1 pr-2.5 pb-1 pl-2.5" style={{}}>Deal</span>
</div> <div className="mt-8 space-y-2">
<div className="h-3 rounded-lg bg-slate-800/70 w-2/3"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-5/6"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-1/2"></div>
</div> <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent">
</div></span></h3>
</div>
</div>
</div>
</div>

</div>
</section>
</div>
</section>

<div className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<div className="lg:p-16 border-white/10 border rounded-3xl pt-12 pr-12 pb-12 pl-12" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-center mb-16">
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-manrope font-medium">Frequently Asked Questions</h3>
<p className="text-lg text-white/60 max-w-3xl mr-auto ml-auto" style={{}}>Everything you need to know about the early access offer.</p>
</div>
<div className="max-w-4xl mr-auto ml-auto space-y-6">
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="flex hover:bg-white/5 transition-all duration-300 text-left w-full pt-6 pr-8 pb-6 pl-8 items-center justify-between" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white" style={{}}>When do you launch?</span>
<svg className="transform transition-transform duration-300 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">
              All space travelers must pass a comprehensive medical examination including cardiovascular screening, blood pressure checks, and psychological evaluation. Most healthy adults between 18-65 can qualify. Our medical team will guide you through the entire clearance process, which typically takes 2-4 weeks.
            </p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="flex hover:bg-white/5 transition-all duration-300 text-left w-full pt-6 pr-8 pb-6 pl-8 items-center justify-between" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white" style={{}}>What if you don't build it?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">
              Training duration varies by mission type: 3 days for suborbital flights, 6 weeks for orbital missions, and 6 months for lunar flybys. Training includes zero-gravity simulation, spacecraft familiarization, emergency procedures, and physical conditioning. All training is conducted at our state-of-the-art facilities with experienced astronaut instructors.
            </p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white" style={{}}>What if I'm not happy?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">
              Our spacecraft feature triple-redundant safety systems, automated abort capabilities, and real-time mission monitoring. All vehicles are NASA-certified with a 100% safe return rate. Each mission includes experienced pilot crew, comprehensive insurance coverage, and 24/7 medical support throughout your journey.
            </p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white" style={{}}>What types of websites does this work with?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">
              Yes, you can bring small personal items up to 2kg total weight. Popular choices include family photos, jewelry, or small mementos. All items must pass safety inspection and cannot contain liquids, electronics, or hazardous materials. We provide secure storage compartments and return certificates for items that traveled to space.
            </p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white" style={{}}>Do need coding knowledge?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">
              Launch windows are weather-dependent for safety reasons. If conditions aren't optimal, we'll reschedule to the next available window, typically within 24-72 hours. We provide complimentary accommodation, meals, and entertainment during delays. Your safety is our priority, and we never compromise on weather conditions.
            </p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="flex hover:bg-white/5 transition-all duration-300 text-left w-full pt-6 pr-8 pb-6 pl-8 items-center justify-between" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white" style={{}}>What happens after I pay the $50</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">
              Yes, we offer flexible payment plans with options for 12, 24, or 36-month schedules. A 20% deposit secures your booking, with the remainder spread over your chosen timeline. We also accept cryptocurrency payments and can arrange financing through our premium banking partners for qualified applicants.
            </p>
</div>
</div>
</div>
</div>
</div>

</div>

<section className="mt-10 max-w-5xl">
<div className="overflow-hidden bg-neutral-900 ring-black/10 ring-1 rounded-3xl relative">

<div className="absolute inset-0">
<img alt="Abstract minimal background" className="h-full w-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60668e31-2150-424e-b292-05bfdda254e0_1600w.jpg"/>
<div className="via/50 bg-gradient-to-tr from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 sm:p-8 md:p-12 pt-5 pr-5 pb-5 pl-5 relative translate-x-16">
<div className="grid grid-cols-1 lg:grid-cols-12 translate-x-16 scale-100 gap-x-8 gap-y-8 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-lg p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="">
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Have a question?
                </h3>
</div>
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
<form action="#" className="mt-4 space-y-3" method="POST">
<div className="">
<label className="block text-xs text-neutral-600" htmlFor="ct-name">Your name<span className="text-neutral-400"> *</span></label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs text-neutral-600" htmlFor="ct-email">E‑mail<span className="text-neutral-400"> *</span></label>
<div className="relative mt-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-email" name="email" placeholder="you@solace.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs text-neutral-600" htmlFor="ct-msg">Message</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-msg" name="message" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors" type="submit">
                Send message
                <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="sm:text-6xl leading-[1.05] text-5xl font-semibold text-white tracking-tight">Let's talk.</h2>
<p className="sm:text-lg text-base text-neutral-200 max-w-2xl mt-4" style={{}}>Have Questions about early access? Want to know what happens after you reserve your spot? We respond within 3 hours.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
<svg className="lucide lucide-clock-3 h-4 w-4" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">Quick response</p>
<p className="text-xs text-neutral-300" style={{}}>Most messages receive a reply in under 3h.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
<svg className="lucide lucide-route h-4 w-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">Clear next steps</p>
<p className="text-xs text-neutral-300">We’ll follow up with a concise plan and timeline.</p>
</div>
</div>
</div>

<div className="mt-7">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3">
<img alt="Team lead" className="h-12 w-12 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09f960eb-611f-430b-86b4-1d5a280d6eb8_800w.jpg"/>
<div className="min-w-0">
<p className="text-[11px] leading-none text-neutral-500" style={{}}>Founder</p>
<p className="truncate font-medium text-neutral-900 tracking-tight" style={{}}>Mitran</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors" href="mailto:hello@solace.dev">
                Ask directly
                <svg className="lucide lucide-message-circle w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800 py-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 4.27 9 5.15"></path><path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="text-2xl font-semibold tracking-tight" style={{}}>Webify</div>
</div>
<nav className="flex items-center gap-8 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
<p className="">Copyright © 2025 - Webify. All Rights Reserved</p>
</div>
</div>
</footer>


    </>
  );
}
