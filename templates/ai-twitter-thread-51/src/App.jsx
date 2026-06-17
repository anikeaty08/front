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



        let currentPage = 'splash';

        // Page Navigation Logic
        function goToPage(pageId) {
            const pages = ['splash', 'onboarding', 'dashboard', 'wizard', 'loading', 'preview', 'export', 'templates', 'analytics', 'settings', 'upgrade'];
            
            pages.forEach(p => {
                const el = document.getElementById(p);
                if (el) {
                    el.classList.add('hidden-page');
                    el.classList.add('hidden');
                }
            });

            const targetPage = document.getElementById(pageId);
            targetPage.classList.remove('hidden');
            setTimeout(() => {
                targetPage.classList.remove('hidden-page');
            }, 50);

            // Toggle Navigation Visibility
            const nav = document.getElementById('bottom-nav');
            const noNavPages = ['splash', 'onboarding', 'loading', 'export', 'upgrade'];
            if (noNavPages.includes(pageId)) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }

            // Update Nav Icons
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.dataset.page === pageId) {
                    item.classList.add('text-blue-500');
                    item.classList.remove('text-slate-400');
                } else {
                    item.classList.remove('text-blue-500');
                    item.classList.add('text-slate-400');
                }
            });

            currentPage = pageId;
        }

        // Splash Transition
        setTimeout(() => {
            document.getElementById('splash-progress').style.width = '100%';
            setTimeout(() => {
                goToPage('onboarding');
            }, 2500);
        }, 100);

        // Onboarding Content
        const slides = [
            {
                icon: "solar:magic-stick-3-linear",
                title: "AI-Powered Creation",
                desc: "Watch your rough ideas transform into polished, high-engagement Twitter threads instantly."
            },
            {
                icon: "solar:tuning-linear",
                title: "Multiple Tones & Styles",
                desc: "Choose from professional, witty, or controversial tones to match your personal brand voice."
            },
            {
                icon: "solar:cloud-upload-linear",
                title: "Export & Share",
                desc: "One-click copy or direct export to Twitter. Your viral journey starts with a single tap."
            }
        ];
        let currentSlide = 0;

        function nextSlide() {
            currentSlide++;
            if (currentSlide < slides.length) {
                const content = document.getElementById('slide-content');
                content.style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('slide-icon').setAttribute('icon', slides[currentSlide].icon);
                    document.getElementById('slide-title').innerText = slides[currentSlide].title;
                    document.getElementById('slide-desc').innerText = slides[currentSlide].desc;
                    content.style.opacity = '1';
                    if (currentSlide === slides.length - 1) {
                        document.getElementById('next-onboarding').innerText = "GET STARTED";
                    }
                }, 400);
            } else {
                goToPage('dashboard');
            }
        }

        // Wizard Steps
        function nextStep(step) {
            document.getElementById('step-1').classList.add('hidden');
            document.getElementById('step-2').classList.add('hidden');
            document.getElementById('step-3').classList.add('hidden');
            document.getElementById('step-' + step).classList.remove('hidden');
            
            const progress = (step / 3) * 100;
            document.getElementById('wizard-progress').style.width = progress + '%';
            document.querySelector('#wizard span').innerText = step + ' / 3';
        }

        // Loading Simulation
        function startLoading() {
            goToPage('loading');
            const statuses = ["Analyzing Topic...", "Crafting Hook...", "Building Narrative...", "Optimizing for Virality..."];
            let s = 0;
            
            const interval = setInterval(() => {
                if (s < statuses.length) {
                    document.getElementById('loader-status').innerText = statuses[s];
                    s++;
                }
            }, 800);

            document.getElementById('loader-bar').style.width = '100%';
            
            setTimeout(() => {
                clearInterval(interval);
                goToPage('preview');
            }, 3200);
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
      

<div className="w-full max-w-md min-h-screen md:min-h-[850px] relative overflow-hidden bg-[#e8ecf1] md:rounded-[40px] md:shadow-2xl">

<section className="absolute inset-0 z-50 flex flex-col items-center justify-center nm-flat bg-gradient-to-br from-[#e8ecf1] to-[#d1d9e6]" id="splash">
<div className="relative animate-scale">
<div className="nm-flat w-24 h-24 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden">
<iconify-icon className="text-4xl text-blue-500" icon="solar:align-bottom-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute inset-0 shimmer opacity-20"></div>
</div>
<div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
</div>
<h1 className="font-syne text-2xl font-semibold tracking-tight text-slate-800">THREADFORGE</h1>
<p className="text-sm text-slate-400 mt-2 tracking-wide animate-pulse">Transform ideas into viral threads</p>
<div className="absolute bottom-16 w-48 h-1 nm-inset rounded-full overflow-hidden">
<div className="h-full bg-blue-500 transition-all duration-[2.5s] ease-linear w-0" id="splash-progress"></div>
</div>
</section>

<section className="hidden-page absolute inset-0 z-40 bg-[#e8ecf1] p-8 flex flex-col" id="onboarding">
<div className="flex justify-end">
<button className="text-xs font-semibold uppercase tracking-widest text-slate-400" onclick="goToPage('dashboard')">Skip</button>
</div>
<div className="flex-1 mt-12 flex flex-col items-center text-center" id="carousel-container">

<div className="animate-scale" id="slide-content">
<div className="nm-flat w-64 h-64 rounded-[40px] mb-12 flex items-center justify-center mx-auto">
<iconify-icon className="text-6xl text-blue-500" icon="solar:magic-stick-3-linear" id="slide-icon"></iconify-icon>
</div>
<h2 className="font-syne text-2xl font-semibold tracking-tight mb-4" id="slide-title">AI-Powered Creation</h2>
<p className="text-sm text-slate-500 leading-relaxed px-4" id="slide-desc">Watch your rough ideas transform into polished, high-engagement Twitter threads instantly.</p>
</div>
</div>
<div className="flex justify-between items-center pb-10">
<div className="flex gap-2">
<div className="w-6 h-2 bg-blue-500 rounded-full"></div>
<div className="w-2 h-2 bg-slate-300 rounded-full"></div>
<div className="w-2 h-2 bg-slate-300 rounded-full"></div>
</div>
<button className="nm-button px-8 py-3 rounded-2xl font-syne font-semibold text-sm text-blue-600" id="next-onboarding" onclick="nextSlide()">NEXT</button>
</div>
</section>

<section className="hidden-page h-full flex flex-col pt-10 px-6 pb-24 overflow-y-auto no-scrollbar" id="dashboard">
<header className="flex justify-between items-start mb-8">
<div>
<h2 className="text-sm font-medium text-slate-400">Welcome back,</h2>
<p className="font-syne text-xl font-semibold tracking-tight">Alex Rivera 👋</p>
</div>
<div className="nm-button p-3 rounded-2xl">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</div>
</header>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="nm-flat p-4 rounded-3xl text-center">
<p className="text-[0.6rem] font-bold uppercase text-slate-400 mb-1">Today</p>
<p className="font-syne text-lg font-semibold text-blue-600">4</p>
</div>
<div className="nm-flat p-4 rounded-3xl text-center">
<p className="text-[0.6rem] font-bold uppercase text-slate-400 mb-1">Total</p>
<p className="font-syne text-lg font-semibold text-blue-600">128</p>
</div>
<div className="nm-flat p-4 rounded-3xl text-center">
<p className="text-[0.6rem] font-bold uppercase text-slate-400 mb-1">Impact</p>
<p className="font-syne text-lg font-semibold text-blue-600">92%</p>
</div>
</div>

<button className="nm-accent w-full py-6 rounded-[30px] text-white flex flex-col items-center gap-2 mb-10 group relative overflow-hidden" onclick="goToPage('wizard')">
<div className="absolute inset-0 shimmer opacity-20"></div>
<iconify-icon className="text-3xl group-active:scale-90 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
<span className="font-syne font-semibold tracking-widest text-xs">CREATE NEW THREAD</span>
</button>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="font-syne text-sm font-semibold tracking-widest uppercase text-slate-400">Recent Threads</h3>
<button className="text-xs font-bold text-blue-500">View All</button>
</div>
<div className="space-y-4">
<div className="nm-flat p-5 rounded-[25px] flex items-center gap-4 border-l-4 border-blue-500">
<div className="nm-inset w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-700 truncate">10 AI Tools for SaaS...</p>
<p className="text-[0.65rem] text-slate-400">Oct 24, 2023 • 8 Tweets</p>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="hidden-page h-full flex flex-col pt-10 px-6 pb-24 overflow-y-auto no-scrollbar" id="wizard">
<div className="flex items-center gap-4 mb-8">
<button className="nm-button p-3 rounded-2xl" onclick="goToPage('dashboard')">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="flex-1 h-2 nm-inset rounded-full overflow-hidden">
<div className="h-full bg-blue-500 transition-all duration-300 w-1/3" id="wizard-progress"></div>
</div>
<span className="text-xs font-bold text-slate-400">1 / 3</span>
</div>

<div className="space-y-6" id="step-1">
<h2 className="font-syne text-xl font-semibold tracking-tight">What's the topic?</h2>
<textarea className="w-full h-48 nm-inset rounded-[30px] p-6 text-sm outline-none focus:ring-2 ring-blue-500/20" placeholder="Paste a link or type your idea..."></textarea>
<div className="space-y-3">
<p className="text-[0.65rem] font-bold uppercase text-slate-400 tracking-widest">Inspiration</p>
<div className="flex flex-wrap gap-2">
<span className="nm-button px-3 py-2 rounded-xl text-xs">Product Launch</span>
<span className="nm-button px-3 py-2 rounded-xl text-xs">Life Hacks</span>
<span className="nm-button px-3 py-2 rounded-xl text-xs">Coding Tips</span>
</div>
</div>
<button className="nm-accent w-full py-5 rounded-2xl text-white font-syne font-semibold text-sm mt-8" onclick="nextStep(2)">NEXT STEP</button>
</div>

<div className="hidden space-y-6" id="step-2">
<h2 className="font-syne text-xl font-semibold tracking-tight">Customize Style</h2>
<div className="space-y-4">
<label className="text-[0.65rem] font-bold uppercase text-slate-400 tracking-widest">Select Tone</label>
<div className="grid grid-cols-2 gap-4">
<div className="nm-inset p-4 rounded-2xl flex items-center gap-3 border-2 border-blue-500">
<span className="text-xl">🎓</span>
<span className="text-xs font-bold">Edu</span>
</div>
<div className="nm-button p-4 rounded-2xl flex items-center gap-3">
<span className="text-xl">🔥</span>
<span className="text-xs font-bold">Hype</span>
</div>
</div>
</div>
<div className="space-y-4 pt-4">
<label className="text-[0.65rem] font-bold uppercase text-slate-400 tracking-widest">Thread Length</label>
<input className="w-full h-2 nm-inset rounded-full accent-blue-500 appearance-none cursor-pointer" type="range"/>
<div className="flex justify-between text-xs font-bold text-slate-400">
<span>Short (5)</span>
<span>Long (15)</span>
</div>
</div>
<button className="nm-accent w-full py-5 rounded-2xl text-white font-syne font-semibold text-sm mt-8" onclick="nextStep(3)">FINALIZE</button>
</div>

<div className="hidden space-y-6" id="step-3">
<h2 className="font-syne text-xl font-semibold tracking-tight">Advanced Options</h2>
<div className="space-y-4">
<div className="nm-flat p-4 rounded-2xl flex justify-between items-center">
<span className="text-xs font-bold">Auto-Emoji Usage</span>
<div className="w-10 h-6 nm-inset rounded-full p-1 relative cursor-pointer">
<div className="w-4 h-4 bg-blue-500 rounded-full translate-x-4"></div>
</div>
</div>
<div className="nm-flat p-4 rounded-2xl flex justify-between items-center">
<span className="text-xs font-bold">Include CTA</span>
<div className="w-10 h-6 nm-inset rounded-full p-1 relative cursor-pointer">
<div className="w-4 h-4 bg-slate-300 rounded-full"></div>
</div>
</div>
</div>
<button className="nm-accent w-full py-5 rounded-2xl text-white font-syne font-semibold text-sm mt-8" onclick="startLoading()">GENERATE MAGIC</button>
</div>
</section>

<section className="hidden-page absolute inset-0 z-50 bg-[#e8ecf1] flex flex-col items-center justify-center p-10" id="loading">
<div className="relative mb-12">
<div className="w-40 h-40 nm-flat rounded-full flex items-center justify-center animate-pulse">
<iconify-icon className="text-6xl text-blue-500 animate-float" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="absolute -inset-8 nm-inset rounded-full -z-10 opacity-50"></div>
</div>
<div className="text-center space-y-4">
<h3 className="font-syne text-lg font-semibold tracking-tight text-blue-600" id="loader-status">Analyzing Topic...</h3>
<div className="w-48 h-1 nm-inset rounded-full overflow-hidden mx-auto">
<div className="h-full bg-blue-500 w-0 transition-all duration-[3s]" id="loader-bar"></div>
</div>
<p className="text-xs text-slate-400 font-medium">Estimated time: 3.2s</p>
</div>
</section>

<section className="hidden-page h-full flex flex-col pt-10 px-6 pb-24 overflow-y-auto no-scrollbar" id="preview">
<div className="flex justify-between items-center mb-6">
<button className="nm-button p-3 rounded-2xl" onclick="goToPage('wizard')">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="nm-flat px-4 py-2 rounded-xl flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-[0.65rem] font-bold text-slate-600">Viral Score: 8.5/10</span>
</div>
</div>
<div className="space-y-6">

<div className="nm-flat p-6 rounded-[25px] relative">
<div className="flex justify-between items-center mb-4">
<span className="nm-accent w-7 h-7 rounded-full flex items-center justify-center text-[0.6rem] font-bold text-white">1</span>
<iconify-icon className="text-slate-300" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="text-sm text-slate-700 outline-none leading-relaxed" contenteditable="true">
                        Thread start: Here's the absolute truth about $TOPIC that most people are completely missing in 2024... 🧵
                    </div>
<div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
<span className="text-[0.6rem] font-bold text-green-500 uppercase tracking-widest">140 / 280</span>
</div>
</div>
<div className="nm-flat p-6 rounded-[25px] relative opacity-80">
<div className="flex justify-between items-center mb-4">
<span className="nm-accent w-7 h-7 rounded-full flex items-center justify-center text-[0.6rem] font-bold text-white">2</span>
</div>
<div className="text-sm text-slate-700 outline-none" contenteditable="true">
                        The key factor is the shift in audience behavior. We've seen a 40% increase in engagement when you focus on depth rather than noise.
                    </div>
</div>
</div>
<div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-full max-w-xs px-6">
<button className="nm-accent flex-1 py-4 rounded-2xl text-white font-syne font-semibold text-xs tracking-widest" onclick="goToPage('export')">EXPORT</button>
<button className="nm-button p-4 rounded-2xl text-slate-400">
<iconify-icon className="text-xl" icon="solar:refresh-linear"></iconify-icon>
</button>
</div>
</section>

<section className="hidden-page absolute inset-0 z-[60] flex items-end" id="export">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="goToPage('preview')"></div>
<div className="w-full nm-flat rounded-t-[40px] p-8 space-y-6 relative animate-scale">
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-4"></div>
<h3 className="font-syne text-lg font-semibold text-center">Export Thread</h3>
<div className="space-y-4">
<button className="w-full nm-button p-5 rounded-2xl flex items-center gap-4 group">
<iconify-icon className="text-2xl text-blue-500" icon="solar:copy-linear"></iconify-icon>
<div className="text-left">
<p className="text-xs font-bold">Copy to Clipboard</p>
<p className="text-[0.6rem] text-slate-400">Ready to paste into Twitter</p>
</div>
</button>
<button className="w-full nm-button p-5 rounded-2xl flex items-center gap-4">
<iconify-icon className="text-2xl text-purple-500" icon="solar:download-linear"></iconify-icon>
<div className="text-left">
<p className="text-xs font-bold">Download as .TXT</p>
<p className="text-[0.6rem] text-slate-400">Saved to local files</p>
</div>
</button>
<button className="w-full nm-accent p-5 rounded-2xl flex items-center gap-4 text-white">
<iconify-icon className="text-2xl" icon="solar:share-linear"></iconify-icon>
<div className="text-left">
<p className="text-xs font-bold">Post Directly</p>
<p className="text-[0.6rem] text-white/70">Requires API connection</p>
</div>
</button>
</div>
</div>
</section>

<section className="hidden-page h-full flex flex-col pt-10 px-6 pb-24 overflow-y-auto no-scrollbar" id="templates">
<h2 className="font-syne text-xl font-semibold tracking-tight mb-6">Frameworks</h2>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-6">
<button className="nm-accent px-5 py-2 rounded-xl text-white text-[0.65rem] font-bold shrink-0">ALL</button>
<button className="nm-button px-5 py-2 rounded-xl text-slate-500 text-[0.65rem] font-bold shrink-0">SAAS</button>
<button className="nm-button px-5 py-2 rounded-xl text-slate-500 text-[0.65rem] font-bold shrink-0">STORY</button>
<button className="nm-button px-5 py-2 rounded-xl text-slate-500 text-[0.65rem] font-bold shrink-0">HACKS</button>
</div>
<div className="grid grid-cols-1 gap-6">
<div className="nm-flat p-6 rounded-[30px] border-l-4 border-purple-500">
<p className="text-[0.65rem] font-bold text-purple-500 uppercase mb-2">The "10 Tips" Hook</p>
<p className="text-xs text-slate-600 leading-relaxed mb-4">Highly effective for educational content and listicles. Optimized for retweets.</p>
<button className="text-xs font-bold text-blue-500 flex items-center gap-1">USE THIS <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="nm-flat p-6 rounded-[30px] border-l-4 border-blue-500">
<p className="text-[0.65rem] font-bold text-blue-500 uppercase mb-2">The Case Study</p>
<p className="text-xs text-slate-600 leading-relaxed mb-4">Perfect for showing transformations and results. Builds high authority.</p>
<button className="text-xs font-bold text-blue-500 flex items-center gap-1">USE THIS <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</section>

<section className="hidden-page h-full flex flex-col pt-10 px-6 pb-24 overflow-y-auto no-scrollbar" id="analytics">
<h2 className="font-syne text-xl font-semibold tracking-tight mb-8">Performance</h2>
<div className="nm-flat p-6 rounded-[30px] mb-8">
<div className="flex justify-between items-end h-32 gap-2 mb-4">
<div className="flex-1 bg-blue-500/10 rounded-t-lg relative group">
<div className="absolute bottom-0 inset-x-0 bg-blue-500 rounded-t-lg h-[40%] group-hover:h-[60%] transition-all"></div>
</div>
<div className="flex-1 bg-blue-500/10 rounded-t-lg relative group">
<div className="absolute bottom-0 inset-x-0 bg-blue-500 rounded-t-lg h-[70%] group-hover:h-[90%] transition-all"></div>
</div>
<div className="flex-1 bg-blue-500/10 rounded-t-lg relative group">
<div className="absolute bottom-0 inset-x-0 bg-blue-500 rounded-t-lg h-[30%] group-hover:h-[50%] transition-all"></div>
</div>
<div className="flex-1 bg-blue-500/10 rounded-t-lg relative group">
<div className="absolute bottom-0 inset-x-0 bg-blue-500 rounded-t-lg h-[85%] group-hover:h-[95%] transition-all"></div>
</div>
<div className="flex-1 bg-blue-500/10 rounded-t-lg relative group">
<div className="absolute bottom-0 inset-x-0 bg-blue-500 rounded-t-lg h-[50%] group-hover:h-[70%] transition-all"></div>
</div>
</div>
<div className="flex justify-between text-[0.6rem] font-bold text-slate-400">
<span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="nm-flat p-5 rounded-[25px]">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase mb-2">Impressions</p>
<p className="font-syne text-lg font-semibold">12.4K</p>
<p className="text-[0.6rem] text-green-500 mt-1">↑ 12% vs LW</p>
</div>
<div className="nm-flat p-5 rounded-[25px]">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase mb-2">Eng. Rate</p>
<p className="font-syne text-lg font-semibold">4.8%</p>
<p className="text-[0.6rem] text-red-500 mt-1">↓ 2% vs LW</p>
</div>
</div>
</section>

<section className="hidden-page h-full flex flex-col pt-10 px-6 pb-24 overflow-y-auto no-scrollbar" id="settings">
<div className="flex items-center gap-6 mb-10">
<div className="w-20 h-20 nm-flat rounded-full p-1">
<img className="w-full h-full rounded-full bg-blue-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"/>
</div>
<div>
<h2 className="font-syne text-lg font-semibold">Alex Rivera</h2>
<p className="text-xs text-slate-400">Pro Plan Member</p>
<button className="text-[0.6rem] font-bold text-blue-500 mt-2 uppercase tracking-widest" onclick="goToPage('upgrade')">Upgrade Account</button>
</div>
</div>
<div className="space-y-4">
<div className="nm-button p-4 rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-400" icon="solar:user-linear"></iconify-icon>
<span className="text-xs font-bold">Profile Details</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="nm-button p-4 rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-400" icon="solar:moon-linear"></iconify-icon>
<span className="text-xs font-bold">Dark Mode</span>
</div>
<div className="w-10 h-6 nm-inset rounded-full p-1 relative cursor-pointer">
<div className="w-4 h-4 bg-slate-300 rounded-full"></div>
</div>
</div>
<div className="nm-button p-4 rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-bold">Privacy &amp; Security</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="pt-10">
<button className="w-full nm-button py-4 rounded-2xl text-red-500 text-xs font-bold uppercase tracking-widest">Sign Out</button>
</div>
</div>
</section>

<section className="hidden-page absolute inset-0 z-[70] bg-[#e8ecf1] p-8 overflow-y-auto" id="upgrade">
<button className="nm-button p-3 rounded-2xl mb-8" onclick="goToPage('settings')">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="text-center mb-10">
<div className="nm-flat w-20 h-20 rounded-[25px] flex items-center justify-center mx-auto mb-6 text-blue-500">
<iconify-icon className="text-4xl" icon="solar:crown-minimalistic-linear"></iconify-icon>
</div>
<h2 className="font-syne text-2xl font-semibold tracking-tight">Level Up Your Reach</h2>
<p className="text-sm text-slate-500 mt-2">Unlock the full power of ThreadForge AI</p>
</div>
<div className="nm-accent p-8 rounded-[40px] text-white relative overflow-hidden mb-8">
<div className="absolute inset-0 shimmer opacity-10"></div>
<div className="flex justify-between items-start mb-6">
<div>
<p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-80">Annual Plan</p>
<p className="text-3xl font-syne font-semibold">$19<span className="text-sm opacity-60">/mo</span></p>
</div>
<span className="bg-white/20 px-3 py-1 rounded-full text-[0.6rem] font-bold">Save 40%</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-xs"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Unlimited AI Generations</li>
<li className="flex items-center gap-2 text-xs"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Advanced Viral Analytics</li>
<li className="flex items-center gap-2 text-xs"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Direct API Publishing</li>
</ul>
<button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-syne font-bold text-xs tracking-widest shadow-lg">UPGRADE NOW</button>
</div>
</section>

<nav className="hidden absolute bottom-0 inset-x-0 h-20 bg-white/40 backdrop-blur-md border-t border-white/20 flex items-center justify-around px-4 z-50" id="bottom-nav">
<button className="nav-item p-3 rounded-2xl text-blue-500" data-page="dashboard" onclick="goToPage('dashboard')">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
</button>
<button className="nav-item p-3 rounded-2xl text-slate-400" data-page="templates" onclick="goToPage('templates')">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</button>

<div className="relative -top-6 w-16 h-16 flex items-center justify-center">
<div className="absolute inset-0 w-full h-full liquid-charcoal opacity-90 transition-transform duration-300"></div>
<div className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] liquid-charcoal-inner transition-transform duration-300 scale-95"></div>
<button className="absolute inset-0 z-10 flex items-center justify-center text-white group outline-none" onclick="goToPage('wizard')">
<iconify-icon className="text-3xl transition-transform duration-300 group-active:scale-75" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<button className="nav-item p-3 rounded-2xl text-slate-400" data-page="analytics" onclick="goToPage('analytics')">
<iconify-icon className="text-2xl" icon="solar:graph-linear"></iconify-icon>
</button>
<button className="nav-item p-3 rounded-2xl text-slate-400" data-page="settings" onclick="goToPage('settings')">
<iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon>
</button>
</nav>
</div>


    </>
  );
}
