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



        // Simple Intersection Observer for "On Scroll" Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Trigger once
                    }
                });
            }, observerOptions);

            // Select elements to animate
            document.querySelectorAll('.scroll-reveal').forEach(el => {
                el.classList.add('animate-enter'); // Add base class
                observer.observe(el);
            });
        });

        // Router
        function router(viewName) {
            // Smooth scroll to top
            window.scrollTo({top: 0, behavior: 'smooth'});

            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });

            const navPublic = document.getElementById('nav-actions-public');
            const navPrivate = document.getElementById('nav-actions-private');

            if (viewName === 'dashboard') {
                navPublic.classList.add('hidden');
                navPrivate.classList.remove('hidden');
                navPrivate.classList.add('flex');
            } else if (viewName === 'landing') {
                navPublic.classList.remove('hidden');
                navPrivate.classList.add('hidden');
                navPrivate.classList.remove('flex');
            }

            // Slight delay for opacity transition logic (simplified here for CSS handling)
            setTimeout(() => {
                document.getElementById('view-' + viewName).classList.add('active');
            }, 50);
        }

        // Mock Login
        function simulateAuth() {
            const btn = document.getElementById('login-btn');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="svg-spinners:ring-resize" width="18"></iconify-icon> <span class="ml-2">Verifying...</span>';
            btn.classList.add('opacity-90', 'cursor-wait');
            
            setTimeout(() => {
                router('dashboard');
                btn.innerHTML = originalContent;
                btn.classList.remove('opacity-90', 'cursor-wait');
            }, 1200);
        }

        // Dashboard Tabs
        function switchTab(tabName) {
            const overview = document.getElementById('dash-overview');
            const generator = document.getElementById('dash-generator');
            const btnOver = document.getElementById('tab-overview');
            const btnGen = document.getElementById('tab-generator');

            // Animation reset
            overview.classList.remove('is-visible');
            generator.classList.remove('is-visible');

            if(tabName === 'overview') {
                overview.classList.remove('hidden');
                generator.classList.add('hidden');
                // Re-trigger anim
                setTimeout(() => overview.classList.add('is-visible'), 10);
                
                btnOver.className = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-slate-50 text-indigo-700 transition-all";
                btnGen.className = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all";
            } else {
                overview.classList.add('hidden');
                generator.classList.remove('hidden');
                setTimeout(() => generator.classList.add('is-visible'), 10);

                btnGen.className = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-slate-50 text-indigo-700 transition-all";
                btnOver.className = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all";
            }
        }

        // Generator Logic
        function generateContent() {
            const btn = document.getElementById('gen-btn');
            const emptyState = document.getElementById('out-empty');
            const loadingState = document.getElementById('out-loading');
            const resultState = document.getElementById('out-result');

            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            emptyState.classList.add('hidden');
            resultState.classList.add('hidden');
            loadingState.classList.remove('hidden');

            setTimeout(() => {
                loadingState.classList.add('hidden');
                resultState.classList.remove('hidden');
                resultState.classList.add('animate-fade');
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
            }, 2500);
        }

        function resetGen() {
            document.getElementById('out-result').classList.add('hidden');
            document.getElementById('out-empty').classList.remove('hidden');
            document.getElementById('prompt').value = '';
        }

        // Tone Selection
        document.querySelectorAll('.tone-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.tone-btn').forEach(b => {
                    b.className = "tone-btn px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all bg-white shadow-sm";
                });
                this.className = "tone-btn px-4 py-2.5 border border-indigo-500 rounded-lg text-sm font-medium text-indigo-600 bg-indigo-50 transition-all shadow-sm ring-1 ring-indigo-500";
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">

<div className="flex items-center gap-2.5 cursor-pointer group" onclick="router('landing')">
<div className="w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">KINESIA</span>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Product</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Pricing</a>
</div>

<div className="flex items-center gap-5" id="nav-actions-public">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300" onclick="router('login')">Log in</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full btn-premium shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60" onclick="router('signup')">Get Started</button>
</div>

<div className="hidden items-center gap-4" id="nav-actions-private">
<button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
<div className="w-9 h-9 bg-gradient-to-br from-indigo-50 to-white border border-slate-200 rounded-full flex items-center justify-center text-xs font-semibold text-indigo-900 shadow-sm cursor-pointer hover:border-indigo-200 transition-colors">
                    JD
                </div>
</div>
</div>
</nav>

<main className="view-section active" id="view-landing">

<section className="relative pt-40 pb-24 overflow-hidden hero-glow">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto text-center space-y-8 scroll-reveal">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm animate-enter">
<iconify-icon className="text-indigo-600" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Kinesia 2.0 is live</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] text-balance animate-enter delay-100">
                        Intelligence that <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">speaks your language.</span>
</h1>

<p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light text-balance animate-enter delay-200">
                        Generate enterprise-grade content that adapts to your brand voice. Secure, scalable, and indistinguishable from human writing.
                    </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-enter delay-300">
<button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-medium btn-premium flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10" onclick="router('signup')">
<span>Start Free Trial</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-medium btn-premium transition-all">
                            View Demo
                        </button>
</div>
</div>

<div className="mt-24 relative max-w-5xl mx-auto scroll-reveal delay-200">

<div className="absolute -inset-10 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl -z-10 rounded-[3rem]"></div>
<div className="bg-white border border-slate-200 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">

<div className="h-12 border-b border-slate-100 bg-slate-50/50 backdrop-blur-sm flex items-center px-6 gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>

<div className="p-10 grid grid-cols-12 gap-8 bg-white">

<div className="hidden sm:block col-span-3 space-y-4">
<div className="h-40 rounded-xl bg-slate-50 border border-slate-100 p-5 flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 mb-2"></div>
<div className="space-y-2">
<div className="w-full h-2 bg-slate-200 rounded-full"></div>
<div className="w-2/3 h-2 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="h-24 rounded-xl bg-slate-50 border border-slate-100"></div>
</div>

<div className="col-span-12 sm:col-span-9 rounded-xl bg-slate-50 border border-slate-100 p-8 flex flex-col gap-6 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-50"></div>
<div className="w-1/3 h-4 bg-slate-200 rounded-lg mb-2"></div>
<div className="space-y-3">
<div className="w-full h-2.5 bg-slate-200 rounded-full"></div>
<div className="w-full h-2.5 bg-slate-200 rounded-full"></div>
<div className="w-5/6 h-2.5 bg-slate-200 rounded-full"></div>
<div className="w-4/6 h-2.5 bg-slate-200 rounded-full"></div>
</div>
<div className="mt-auto flex gap-3">
<div className="w-24 h-8 bg-white border border-slate-200 rounded-lg"></div>
<div className="w-24 h-8 bg-slate-900 rounded-lg opacity-10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 scroll-reveal">
<span className="text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-2 block">Why Kinesia</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Built for enterprise scale</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 scroll-reveal delay-100">
<div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 ease-out shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Enterprise Security</h3>
<p className="text-base text-slate-500 leading-relaxed font-light">SOC2 compliant infrastructure designed to keep your proprietary data strictly isolated and encrypted.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 scroll-reveal delay-200">
<div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 ease-out shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Adaptive Tone</h3>
<p className="text-base text-slate-500 leading-relaxed font-light">Our models analyze your previous content to perfectly mimic your brand's unique voice and nuance.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 scroll-reveal delay-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 ease-out shadow-sm">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Predictive Analytics</h3>
<p className="text-base text-slate-500 leading-relaxed font-light">Know how your content will perform before you publish with our proprietary predictive scoring engine.</p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-200 rounded-md flex items-center justify-center">
<div className="w-2 h-2 bg-slate-400 rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-400">KINESIA</span>
</div>
<div className="text-sm text-slate-400">© 2024 Kinesia Inc. All rights reserved.</div>
</div>
</footer>
</main>

<section className="view-section min-h-screen flex items-center justify-center py-20 bg-white" id="view-login">
<div className="w-full max-w-[400px] px-6 scroll-reveal">
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-white mb-6 shadow-lg shadow-slate-200">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Welcome back</h2>
<p className="text-sm text-slate-500 mt-2 font-light">Access your intelligent workspace.</p>
</div>
<div className="space-y-5">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2 ml-1">Work Email</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-slate-300 input-focus-ring transition-all placeholder:text-slate-300 placeholder:font-light" placeholder="name@company.com" type="email"/>
</div>
<div>
<div className="flex justify-between mb-2 ml-1">
<label className="block text-xs font-semibold text-slate-700">Password</label>
<a className="text-xs text-indigo-600 hover:text-indigo-700 font-medium" href="#">Forgot?</a>
</div>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-slate-300 input-focus-ring transition-all placeholder:text-slate-300 placeholder:font-light" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl btn-premium flex justify-center items-center gap-2 mt-2 shadow-lg shadow-slate-200" id="login-btn" onclick="simulateAuth()">
<span>Sign In</span>
<iconify-icon icon="solar:login-2-linear" width="18"></iconify-icon>
</button>
</div>
<div className="my-8 relative flex items-center justify-center">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
<span className="relative bg-white px-4 text-xs font-medium text-slate-400 uppercase tracking-wide">Or continue with</span>
</div>
<button className="w-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2.5">
<iconify-icon icon="flat-color-icons:google" width="18"></iconify-icon>
<span className="text-sm">Google Workspace</span>
</button>
<p className="text-center text-xs text-slate-400 mt-8 cursor-pointer hover:text-slate-600 transition-colors" onclick="router('landing')">← Return to website</p>
</div>
</section>

<div className="view-section min-h-screen bg-[#F8F9FA] pt-20" id="view-dashboard">

<aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-slate-200/60 hidden md:flex flex-col z-40 transition-all duration-300">
<div className="p-6 space-y-1.5">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-4 mt-2">Workspace</div>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-slate-50 text-indigo-700 transition-all" id="tab-overview" onclick="switchTab('overview')">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
                    Overview
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all" id="tab-generator" onclick="switchTab('generator')">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
                    AI Generator
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
                    Schedule
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Audience
                </button>
</div>
<div className="mt-auto p-6 border-t border-slate-100">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                    Settings
                </button>
</div>
</aside>

<div className="md:ml-64 p-8 md:p-12 max-w-6xl mx-auto">

<div className="scroll-reveal" id="dash-overview">
<header className="flex justify-between items-end mb-10">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Overview</h1>
<p className="text-sm text-slate-500 mt-1 font-light">Your content performance at a glance.</p>
</div>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm shadow-indigo-200 btn-premium flex items-center gap-2" onclick="switchTab('generator')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        New Content
                    </button>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">24</div>
<p className="text-sm text-slate-400 mt-1 font-medium">Posts generated</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">+4.5%</span>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">8.2k</div>
<p className="text-sm text-slate-400 mt-1 font-medium">Total views</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">12h</div>
<p className="text-sm text-slate-400 mt-1 font-medium">Time saved</p>
</div>
</div>
</div>

<div className="hidden" id="dash-generator">
<header className="mb-8">
<button className="text-xs font-medium text-slate-400 hover:text-indigo-600 mb-4 flex items-center gap-1 transition-colors" onclick="switchTab('overview')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Overview
                    </button>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">AI Generator</h1>
</header>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="space-y-6 scroll-reveal">
<div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm">
<div className="space-y-6">
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">Topic / Core Idea</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-indigo-400 input-focus-ring transition-all resize-none placeholder:text-slate-400 placeholder:font-light" id="prompt" placeholder="e.g. Announce our new sustainability initiative emphasizing zero-waste packaging..." rows="5"></textarea>
</div>
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">Tone of Voice</label>
<div className="grid grid-cols-3 gap-3">
<button className="tone-btn px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all bg-white shadow-sm">Professional</button>
<button className="tone-btn px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all bg-white shadow-sm">Friendly</button>
<button className="tone-btn px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all bg-white shadow-sm">Urgent</button>
</div>
</div>
<div className="pt-6 border-t border-slate-100">
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 rounded-xl btn-premium shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition-all" id="gen-btn" onclick="generateContent()">
<iconify-icon icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
<span>Generate Draft</span>
</button>
</div>
</div>
</div>
</div>

<div className="relative min-h-[450px]">

<div className="absolute inset-0 bg-slate-50/50 border border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-center p-8 animate-fade" id="out-empty">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-300 shadow-sm">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-900">Ready to create</p>
<p className="text-xs text-slate-500 mt-1.5 font-light">Configure your settings to generate content.</p>
</div>

<div className="hidden absolute inset-0 bg-white border border-indigo-100 rounded-2xl shadow-xl flex flex-col items-center justify-center z-10" id="out-loading">
<div className="w-20 h-20 rounded-full bg-white border border-indigo-50 flex items-center justify-center text-indigo-600 ai-pulse-ring mb-8">
<iconify-icon icon="solar:cpu-bolt-linear" width="36"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-900">Consulting Knowledge Base...</p>
<div className="mt-8 w-56 space-y-2">
<div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-1/2 rounded-full animate-pulse"></div>
</div>
</div>
</div>

<div className="hidden h-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col scroll-reveal" id="out-result">
<div className="h-12 bg-white border-b border-slate-100 flex items-center justify-between px-6">
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                    Draft Preview
                                </span>
<div className="flex gap-3">
<button className="text-slate-400 hover:text-indigo-600 transition-colors" title="Copy"><iconify-icon icon="solar:copy-linear" width="18"></iconify-icon></button>
<button className="text-slate-400 hover:text-indigo-600 transition-colors" onclick="resetGen()" title="Reset"><iconify-icon icon="solar:restart-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="p-8 flex-grow overflow-y-auto">
<div className="flex gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200"></div>
<div>
<div className="w-32 h-3 bg-slate-200 rounded mb-2"></div>
<div className="w-20 h-2 bg-slate-100 rounded"></div>
</div>
</div>
<div className="space-y-4 text-base text-slate-600 leading-relaxed font-light">
<p>We believe the future of retail is circular. 🔄</p>
<p>Today, <strong className="text-slate-900 font-medium">Kinesia</strong> is proud to announce our shift to 100% biodegradable packaging across all product lines. It’s not just about looking good—it’s about doing good.</p>
<p className="text-indigo-600 font-medium">#Sustainability #Innovation #ZeroWaste</p>
</div>
<div className="mt-6 h-48 w-full rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
</div>
<div className="p-4 border-t border-slate-100 bg-slate-50/50">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-3 rounded-lg transition-colors shadow-sm">Schedule Post</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
