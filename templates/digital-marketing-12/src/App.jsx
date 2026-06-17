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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scroll-progress').style.width = scrolled + '%';
            
            // Navbar Glass effect enhancement on scroll
            const navbar = document.getElementById('navbar');
            if(winScroll > 50) {
                navbar.classList.add('shadow-lg', 'shadow-black/50');
            } else {
                navbar.classList.remove('shadow-lg', 'shadow-black/50');
            }
        });

        // Intersection Observer for Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counters if they are inside the revealed element
                    const counters = entry.target.querySelectorAll('.counter');
                    if (counters.length > 0) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; // 2 seconds
                            const increment = target / (duration / 16); // 60fps
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                            // Remove class so it doesn't trigger again
                            counter.classList.remove('counter');
                        });
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Lead Capture Popup Logic
        const popup = document.getElementById('lead-popup');
        
        setTimeout(() => {
            // Check if already closed in this session (optional, simplified here)
            if(!sessionStorage.getItem('popupClosed')) {
                popup.classList.remove('opacity-0', 'pointer-events-none');
                popup.children[0].classList.remove('scale-95');
                popup.children[0].classList.add('scale-100');
            }
        }, 8000); // Show after 8 seconds

        function closePopup() {
            popup.classList.add('opacity-0', 'pointer-events-none');
            popup.children[0].classList.remove('scale-100');
            popup.children[0].classList.add('scale-95');
            sessionStorage.setItem('popupClosed', 'true');
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
      

<div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-yellow-400 z-[60] w-0 transition-all duration-150" id="scroll-progress" style={{width: '9.43058%'}}></div>

<a className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:bg-green-400 transition-all duration-300 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" href="#">
<iconify-icon className="text-3xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>

<div className="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500 bg-black/60 backdrop-blur-sm px-4" id="lead-popup">
<div className="glass-panel w-full max-w-md p-8 rounded-3xl border border-white/10 relative transform scale-95 transition-transform duration-500 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
<button className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors" onclick="closePopup()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6 mx-auto">
<iconify-icon className="text-2xl" icon="solar:gift-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl tracking-tight font-medium text-white text-center mb-2">Unlock Free Masterclass</h3>
<p className="text-sm text-slate-400 text-center mb-6">Enter your details to get instant access to our "First $1000 Online" blueprint video.</p>
<form className="space-y-4">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Your Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Email Address" type="email"/>
<button className="w-full bg-orange-500 text-white text-sm font-medium py-3.5 rounded-xl hover:bg-orange-400 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)]" type="button">
                    Get Instant Access
                </button>
</form>
<p className="text-xs text-slate-500 text-center mt-4 flex items-center justify-center gap-1">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> 100% Secure &amp; Spam-free
            </p>
</div>
</div>

<header className="fixed top-0 w-full z-40 bg-[#030712]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
<iconify-icon className="text-white text-sm" icon="solar:lightbulb-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
                EDMI
            </a>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#offer">Programs</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center gap-2 text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Batch filling fast
                </div>
<a className="bg-orange-500 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-orange-400 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]" href="#pricing">
                    Book Demo
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-32 pb-40 px-6 min-h-screen flex items-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20"></div>
<div className="z-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/60 to-[#030712] absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen animate-float delay-700"></div>
<div className="max-w-5xl mx-auto text-center relative z-10 w-full mt-10">
<div className="reveal active">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-400 mb-8 backdrop-blur-md">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                        100+ Students Trained &amp; Earning
                    </div>
</div>
<h1 className="reveal delay-100 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] active text-5xl font-medium text-white tracking-tight mb-6">
                    Master the Digital Game. <br className="hidden md:block"/>
<span className="text-gradient-blue">Earn on Your Terms.</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto mb-10 leading-relaxed active">
                    The premium roadmap from complete beginner to high-income digital professional. Live campaigns. Real budgets. 100% placement focus.
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-5 active">
<a className="w-full sm:w-auto bg-orange-500 text-white text-base font-medium px-8 py-4 rounded-full hover:bg-orange-400 transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2" href="#pricing">
                        Claim Your Spot
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto glass-panel text-white text-base font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 group" href="#">
<iconify-icon className="group-hover:text-blue-400 transition-colors" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Watch Free Demo
                    </a>
</div>

<div className="reveal delay-300 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10 pt-8 text-left active">
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-white mb-1" data-target="92">1</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">% Placement</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-white mb-1"><span className="" data-target="15">1</span>M+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Ad Spend Managed</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-white mb-1"><span className="" data-target="500">4</span>+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Global Clients</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-white mb-1">4.9/5</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Student Rating</span>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<p className="text-xs font-medium text-center text-slate-500 uppercase tracking-widest mb-10">Premium Stack You Will Master</p>
<div className="flex flex-wrap gap-10 md:gap-20 gap-x-10 gap-y-10 justify-center">
<div className="tool-icon flex flex-col items-center gap-3 cursor-pointer">
<iconify-icon className="text-4xl text-white" icon="solar:infinity-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wider">META ADS</span>
</div>
<div className="tool-icon flex flex-col items-center gap-3 cursor-pointer">
<iconify-icon className="text-4xl text-white" icon="solar:global-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wider">GOOGLE ADS</span>
</div>
<div className="tool-icon flex flex-col items-center gap-3 cursor-pointer">
<iconify-icon className="text-4xl text-white" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wider">OPEN AI</span>
</div>
<div className="tool-icon flex flex-col items-center gap-3 cursor-pointer">
<iconify-icon className="text-4xl text-white" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wider">CANVA PRO</span>
</div>
<div className="tool-icon flex flex-col items-center gap-3 cursor-pointer">
<iconify-icon className="text-4xl text-white" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wider">ANALYTICS</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="offer">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Architect your digital empire.</h2>
<p className="text-base text-slate-400 max-w-2xl mx-auto">Three elite pathways designed to make you highly employable, freelance-ready, or capable of scaling a six-figure agency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal delay-100 glass-panel hover-glow-blue rounded-3xl p-10 flex flex-col transition-all duration-500 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Performance Marketing</h3>
<p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">Master the algorithm. Advanced Media Buying on Meta &amp; Google, complex funnel architecture, and conversion rate optimization.</p>
<div className="pt-6 border-t border-white/5 mt-auto">
<span className="text-xs font-medium text-blue-400 flex items-center gap-2">
<iconify-icon icon="solar:target-linear"></iconify-icon> Outcome: Senior Media Buyer
                            </span>
</div>
</div>

<div className="reveal delay-200 glass-panel hover-glow-gold rounded-3xl p-10 flex flex-col transition-all duration-500 relative overflow-hidden group border-white/10">
<div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-8 text-yellow-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">AI &amp; Content Scaling</h3>
<p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">Leverage generative AI to script, shoot, edit, and distribute viral content at scale. Dominate short-form platforms.</p>
<div className="pt-6 border-t border-white/5 mt-auto">
<span className="text-xs font-medium text-yellow-400 flex items-center gap-2">
<iconify-icon icon="solar:target-linear"></iconify-icon> Outcome: Elite Content Creator
                            </span>
</div>
</div>

<div className="reveal delay-300 glass-panel hover-glow-blue rounded-3xl p-10 flex flex-col transition-all duration-500 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Data Analytics &amp; BI</h3>
<p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">Turn raw numbers into strategy. Master predictive modeling, data visualization, and advanced analytics tracking setups.</p>
<div className="pt-6 border-t border-white/5 mt-auto">
<span className="text-xs font-medium text-purple-400 flex items-center gap-2">
<iconify-icon icon="solar:target-linear"></iconify-icon> Outcome: Data Strategist
                            </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-y border-white/5 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_100%)]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Not theory. Pure execution.</h2>
<p className="text-base text-slate-400">We train you exactly like we train our agency employees.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
<div className="reveal flex flex-col group cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform group-hover:-translate-y-2">
<iconify-icon className="text-2xl" icon="solar:monitor-camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-3">Live Practical Training</h3>
<p className="text-sm text-slate-400 leading-relaxed">No outdated recorded slides. Interactive live sessions where we build high-converting campaigns together.</p>
</div>
<div className="reveal delay-100 flex flex-col group cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 transform group-hover:-translate-y-2">
<iconify-icon className="text-2xl" icon="solar:briefcase-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-3">Real Client Projects</h3>
<p className="text-sm text-slate-400 leading-relaxed">Work on live ad accounts with actual budgets to build a portfolio that undeniably proves your skills.</p>
</div>
<div className="reveal delay-200 flex flex-col group cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-green-500 group-hover:border-green-400 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 transform group-hover:-translate-y-2">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-3">Earn While Learning</h3>
<p className="text-sm text-slate-400 leading-relaxed">Learn freelancing platforms and cold outreach frameworks alongside core skills to monetize early.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-24 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Your path to independence.</h2>
<p className="text-base text-slate-400">A proven 4-step framework used by 500+ successful alumni.</p>
</div>
<div className="relative flex flex-col md:flex-row items-start justify-between">

<div className="absolute top-8 left-0 w-full h-px bg-white/10 hidden md:block z-0"></div>
<div className="absolute top-8 left-0 w-3/4 h-px bg-gradient-to-r from-blue-500 to-orange-500 hidden md:block z-0"></div>

<div className="reveal flex flex-col items-center text-center w-full md:w-1/4 mb-12 md:mb-0 relative z-10 group">
<div className="w-16 h-16 rounded-full bg-[#0f172a] border-2 border-blue-500 flex items-center justify-center text-xl font-medium text-blue-400 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">1</div>
<h4 className="text-xl tracking-tight font-medium text-white mb-3">Strategic Setup</h4>
<p className="text-sm text-slate-400 max-w-[220px]">Master the foundations, set up your tracking, and understand market psychology.</p>
</div>
<div className="reveal delay-100 flex flex-col items-center text-center w-full md:w-1/4 mb-12 md:mb-0 relative z-10 group">
<div className="w-16 h-16 rounded-full bg-[#0f172a] border-2 border-blue-500 flex items-center justify-center text-xl font-medium text-blue-400 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">2</div>
<h4 className="text-xl tracking-tight font-medium text-white mb-3">Campaign Execution</h4>
<p className="text-sm text-slate-400 max-w-[220px]">Build and launch live campaigns across Meta, Google, and TikTok.</p>
</div>
<div className="reveal delay-200 flex flex-col items-center text-center w-full md:w-1/4 mb-12 md:mb-0 relative z-10 group">
<div className="w-16 h-16 rounded-full bg-[#0f172a] border-2 border-orange-500 flex items-center justify-center text-xl font-medium text-orange-400 mb-6 shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform">3</div>
<h4 className="text-xl tracking-tight font-medium text-white mb-3">Client Acquisition</h4>
<p className="text-sm text-slate-400 max-w-[220px]">Use our exact scripts and funnels to land your first high-paying retainer.</p>
</div>
<div className="reveal delay-300 flex flex-col items-center text-center w-full md:w-1/4 relative z-10 group">
<div className="w-16 h-16 rounded-full bg-orange-500 border-2 border-orange-400 flex items-center justify-center text-white mb-6 shadow-[0_0_40px_rgba(249,115,22,0.6)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h4 className="text-xl tracking-tight font-medium text-white mb-3">Scale &amp; Earn</h4>
<p className="text-sm text-slate-400 max-w-[220px]">Automate delivery, optimize results, and scale your income exponentially.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/5 bg-[#02040a]" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20 reveal">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-medium text-orange-400 mb-6 animate-pulse">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Next Batch Starting Soon. Only 4 Seats Left.
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Invest in your earning potential.</h2>
<p className="text-base text-slate-400">Choose the roadmap that matches your ambition.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="reveal glass-panel rounded-[2rem] p-10 flex flex-col h-full hover:border-white/20 transition-colors">
<h3 className="text-2xl tracking-tight font-medium text-white mb-2">Core Foundation</h3>
<p className="text-sm text-slate-400 mb-8 h-10">The essential framework for modern digital marketing.</p>
<div className="mb-10 border-b border-white/10 pb-8">
<span className="text-5xl font-medium tracking-tight text-white">₹34,999</span>
</div>
<div className="flex-grow mb-10">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> 3 Months Intensive
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> SEO &amp; SEM Mastery
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Social Media Architecture
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Placement Assistance
                                </li>
</ul>
</div>
<a className="w-full bg-white/5 border border-white/10 text-white text-sm font-medium py-4 rounded-xl hover:bg-white/10 transition-all text-center" href="#">
                            Enroll in Core
                        </a>
</div>

<div className="reveal delay-100 bg-[#0f172a] border border-yellow-500/50 rounded-[2.5rem] p-10 flex flex-col h-[105%] relative shadow-[0_0_50px_rgba(234,179,8,0.15)] z-20 hover:scale-105 hover:shadow-[0_0_60px_rgba(234,179,8,0.25)] transition-all duration-500">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold px-6 py-1.5 rounded-full tracking-wide uppercase shadow-lg">
                            Most Popular
                        </div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-2">Creator &amp; Marketer Stack</h3>
<p className="text-sm text-yellow-200/60 mb-8 h-10">The ultimate bundle for dominating as a freelancer.</p>
<div className="mb-10 border-b border-white/10 pb-8 flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">₹49,999</span>
</div>
<div className="flex-grow mb-10">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-200">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> 5 Months Duration
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> AI Prompt Engineering
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Advanced Video Editing
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Client Acquisition Scripts
                                </li>
</ul>
</div>
<a className="w-full bg-orange-500 text-white text-base font-medium py-4 rounded-xl hover:bg-orange-400 transition-all text-center shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]" href="#">
                            Claim Your Seat
                        </a>
</div>

<div className="reveal delay-200 glass-panel rounded-[2rem] p-10 flex flex-col h-full hover:border-white/20 transition-colors">
<h3 className="text-2xl tracking-tight font-medium text-white mb-2">Agency Mastery</h3>
<p className="text-sm text-slate-400 mb-8 h-10">For advanced analytical roles and scaling businesses.</p>
<div className="mb-10 border-b border-white/10 pb-8">
<span className="text-5xl font-medium tracking-tight text-white">₹89,999</span>
</div>
<div className="flex-grow mb-10">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> 8 Months Mentorship
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Python &amp; Data Science
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Advanced Predictive Models
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Premium Agency Setup
                                </li>
</ul>
</div>
<a className="w-full bg-white/5 border border-white/10 text-white text-sm font-medium py-4 rounded-xl hover:bg-white/10 transition-all text-center" href="#">
                            Apply for Mastery
                        </a>
</div>
</div>
</div>
</section>

<section className="py-32 px-0 border-y border-white/5 bg-[#030712] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Proof, not promises.</h2>
<p className="text-base text-slate-400">Join hundreds of students currently dominating the digital space.</p>
</div>
<div className="marquee-container reveal delay-200">
<div className="marquee-content gap-6 px-3">

<div className="w-[400px] glass-panel p-8 rounded-3xl shrink-0">
<div className="flex text-yellow-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-300 mb-8 leading-relaxed">"The AI content creation module blew my mind. I went from spending 5 hours on a video to 45 minutes. Now managing 3 YouTube channels as a freelancer."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=12"/>
<div>
<div className="text-sm font-medium text-white">Priya M.</div>
<div className="text-xs text-orange-400">Earning $2k/mo</div>
</div>
</div>
</div>
<div className="w-[400px] glass-panel p-8 rounded-3xl shrink-0">
<div className="flex text-yellow-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-300 mb-8 leading-relaxed">"I had zero technical background. The step-by-step Meta Ads training helped me secure an internship in month 2, which converted into a full-time role."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
<div>
<div className="text-sm font-medium text-white">Ankit D.</div>
<div className="text-xs text-blue-400">Placed at Tier-1 Agency</div>
</div>
</div>
</div>
<div className="w-[400px] glass-panel p-8 rounded-3xl shrink-0">
<div className="flex text-yellow-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-300 mb-8 leading-relaxed">"The best part is the live client projects. Actually spending budget and seeing ROI gave me the confidence to pitch my own services. Worth every penny."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=68"/>
<div>
<div className="text-sm font-medium text-white">Sneha K.</div>
<div className="text-xs text-orange-400">Agency Founder</div>
</div>
</div>
</div>

<div className="w-[400px] glass-panel p-8 rounded-3xl shrink-0">
<div className="flex text-yellow-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-300 mb-8 leading-relaxed">"The AI content creation module blew my mind. I went from spending 5 hours on a video to 45 minutes. Now managing 3 YouTube channels as a freelancer."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=12"/>
<div>
<div className="text-sm font-medium text-white">Priya M.</div>
<div className="text-xs text-orange-400">Earning $2k/mo</div>
</div>
</div>
</div>
<div className="w-[400px] glass-panel p-8 rounded-3xl shrink-0">
<div className="flex text-yellow-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-300 mb-8 leading-relaxed">"I had zero technical background. The step-by-step Meta Ads training helped me secure an internship in month 2, which converted into a full-time role."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
<div>
<div className="text-sm font-medium text-white">Ankit D.</div>
<div className="text-xs text-blue-400">Placed at Tier-1 Agency</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative max-w-4xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Common Questions.</h2>
</div>
<div className="space-y-4 reveal delay-100">
<details className="group glass-panel rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white text-lg">
<span>Do I need prior technical experience?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-2 p-6 pt-0 text-sm leading-relaxed">
                        Not at all. Our curriculums are designed from scratch. We start with absolute basics and scale up to advanced strategies.
                    </div>
</details>
<details className="group glass-panel rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white text-lg">
<span>How does the 100% Job Guarantee work?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-2 p-6 pt-0 text-sm leading-relaxed">
                        For students in our 'Creator &amp; Marketer Stack', if you follow all modules and complete assignments, we guarantee placement through our network of 50+ agency partners.
                    </div>
</details>
<details className="group glass-panel rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white text-lg">
<span>Can I learn while managing my college/job?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-2 p-6 pt-0 text-sm leading-relaxed">
                        Yes! Live sessions are scheduled in the evenings/weekends, and all recordings are available on your dashboard immediately after.
                    </div>
</details>
</div>
</section>

<section className="py-40 px-6 relative border-t border-white/5 overflow-hidden">
<div className="absolute inset-0 z-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 glass-panel p-12 md:p-20 rounded-[3rem] border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<h2 className="text-4xl md:text-6xl tracking-tight font-medium text-white mb-6">Ready to change your financial trajectory?</h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">Stop watching tutorials. Start building highly monetizable skills. Join the elite network of digital professionals today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
<a className="w-full sm:w-auto bg-orange-500 text-white text-lg font-medium px-10 py-5 rounded-full hover:bg-orange-400 transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:-translate-y-1" href="#pricing">
                        Enroll Now
                    </a>
<a className="w-full sm:w-auto bg-[#0a2e16] border border-green-500/50 text-green-400 text-lg font-medium px-10 py-5 rounded-full hover:bg-[#0c3c1d] transition-colors flex items-center justify-center gap-3" href="#">
<iconify-icon className="text-2xl" icon="solar:whatsapp-linear"></iconify-icon>
                        Chat with Advisor
                    </a>
</div>
<p className="text-sm text-orange-400 font-medium animate-pulse flex items-center justify-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Enrollment closes in 48 hours
                </p>
</div>
</section>
</main>

<footer className="border-t border-white/5 pt-20 pb-10 px-6 bg-black relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<a className="text-2xl font-medium tracking-tighter text-white flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:lightbulb-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
                    EDMI
                </a>
<p className="text-sm text-slate-500 max-w-sm mb-8 leading-relaxed">
                    Elevating the standard of digital education. Learn modern skills, execute on real projects, and earn online independence.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-wide mb-6">Programs</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-orange-400 transition-colors" href="#">Core Foundation</a></li>
<li><a className="text-sm text-slate-500 hover:text-orange-400 transition-colors" href="#">Creator Stack</a></li>
<li><a className="text-sm text-slate-500 hover:text-orange-400 transition-colors" href="#">Agency Mastery</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-wide mb-6">Institute</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Student Results</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-wide mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-slate-600">
                © 2024 Elite Digital Marketing Institute. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
