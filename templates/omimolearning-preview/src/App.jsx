import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Reveal on scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col min-h-screen overflow-hidden">

<header className="fixed z-50 md:px-6 lg:px-8 pt-4 pr-4 pl-4 right-0 left-0">
<div className="max-w-[1680px] mx-auto">
<div className="flex glass-nav rounded-full px-6 py-3 shadow-sm items-center justify-between border border-white/50">

<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-instrument-serif italic text-xl">O</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">omimo</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#methodology">Methodology</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#coaches">Coaches</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2" href="/login">Log in</a>
<a className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105" href="/signup">
                            Start Practicing Free
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<button className="lg:hidden p-2 text-slate-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white opacity-60 -z-10"></div>
<div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-[1680px] mx-auto px-4 md:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="flex-1 text-center lg:text-left reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium uppercase tracking-wide mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                                Now supporting Leadership Interviews
                            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Land Your Dream <br className="hidden lg:block"/>
<span className="font-instrument-serif italic text-blue-600">Product Manager</span> Job.
                            </h1>
<p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Stop preparing in chaos. Omimo gives you a personalized roadmap, 
                                realistic AI mock interviews, and instant feedback to turn interview anxiety into offer letters.
                            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-transform hover:scale-105 flex items-center justify-center gap-2" href="#">
                                    Start Your Prep Plan
                                    <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 group" href="#">
<svg className="text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                    See how it works
                                </a>
</div>
<div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center font-medium text-xs">+2k</div>
</div>
<p>Join 2,000+ PMs hired at Google, Meta, &amp; Amazon</p>
</div>
</div>

<div className="flex-1 w-full max-w-[600px] relative reveal active delay-200">

<div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-100 rounded-2xl rotate-12 blur-sm opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-100 rounded-full blur-sm opacity-60 animate-float" style={{animationDelay: '2s'}}></div>

<div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 animate-float">

<div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="mx-auto bg-white border border-slate-200 px-3 py-1 rounded-md text-[10px] font-medium text-slate-400">omimo.io/onboarding</div>
</div>

<div className="p-8">
<h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">What PM interview topics do you want to focus on?</h2>
<p className="text-slate-500 text-sm mb-6">Product Manager interview questions fall under the following categories. Select all that apply to personalize your plan.</p>
<div className="space-y-3">

<div className="ui-card-selected rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
<span className="font-semibold text-slate-900">Product Sense</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div className="w-6 h-6 rounded-full border border-blue-500 relative ui-radio-selected"></div>
</div>
</div>

<div className="border border-slate-200 hover:border-blue-300 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all bg-white hover:bg-slate-50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
</div>
<span className="font-semibold text-slate-900">Metrics</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div className="w-6 h-6 rounded-full border border-slate-300"></div>
</div>
</div>

<div className="ui-card-selected rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="font-semibold text-slate-900">Strategy</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div className="w-6 h-6 rounded-full border border-blue-500 relative ui-radio-selected"></div>
</div>
</div>

<div className="border border-slate-200 hover:border-blue-300 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all bg-white hover:bg-slate-50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<span className="font-semibold text-slate-900">Technical</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div className="w-6 h-6 rounded-full border border-slate-300"></div>
</div>
</div>
</div>

<div className="mt-6 bg-blue-50 rounded-lg p-4">
<div className="flex items-start gap-3">
<div className="flex-1">
<p className="text-sm font-bold text-blue-700">2 topics selected</p>
<p className="text-sm text-blue-600">We'll prioritize these areas in your daily study plan.</p>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between">
<button className="px-4 py-2 text-slate-500 font-medium hover:text-slate-800 transition-colors flex items-center gap-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
                                            Back
                                        </button>
<button className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2">
                                            Continue
                                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="mt-6 flex justify-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-6 h-1.5 rounded-full bg-blue-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="methodology">
<div className="max-w-[1680px] mx-auto px-4 md:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<span className="text-sm font-medium uppercase tracking-wider text-blue-600 mb-3 block">Our Methodology</span>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight font-instrument-serif">
                            From <span className="italic text-slate-500">Scattered</span> to <span className="italic text-slate-500">Systematic</span>
</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
                            Most candidates fail because they practice randomly. Omimo provides a structured, rigorous approach built by Senior PMs from Uber, Stripe, and Google.
                        </p>
</div>
<div className="grid md:grid-cols-3 gap-8 reveal">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-instrument-serif">Tailored Study Plans</h3>
<p className="text-slate-600 leading-relaxed">
                                Don't waste time on what you already know. We assess your weaknesses across Product Sense, Execution, and Leadership to create a custom daily roadmap.
                            </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-instrument-serif">Real-Time AI Feedback</h3>
<p className="text-slate-600 leading-relaxed">
                                Practice answering out loud. Our AI analyzes your structure, tone, and content quality instantly, offering specific improvements just like a human interviewer.
                            </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-instrument-serif">Story Architecture</h3>
<p className="text-slate-600 leading-relaxed">
                                Build a robust library of behavioral stories using the STAR method. We help you refine your experiences into compelling narratives that stick.
                            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden text-white" id="features">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1680px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<span className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-3 block">Features</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight font-instrument-serif text-white">
                                Everything you need to <span className="italic text-blue-400">Excel</span>
</h2>
</div>
<div className="flex gap-2 mt-6 md:mt-0">

<button className="w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">

<div className="glass-card-dark p-1 rounded-2xl group hover:border-blue-500/50 transition-colors">
<div className="bg-slate-800/50 rounded-xl overflow-hidden aspect-video relative mb-4">
<img alt="Mock Interview" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-blue-600/90 p-3 rounded-full backdrop-blur-sm">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-xl font-semibold mb-2">AI Mock Interviews</h3>
<p className="text-slate-400 text-sm leading-relaxed">Simulate full-length interviews for Strategy, Technical, and Behavioral rounds. The AI adapts follow-up questions based on your answers.</p>
</div>
</div>

<div className="glass-card-dark p-1 rounded-2xl group hover:border-blue-500/50 transition-colors">
<div className="bg-slate-800/50 rounded-xl overflow-hidden aspect-video relative mb-4">
<img alt="Study Plan" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-3 rounded-lg backdrop-blur-sm border border-white/10">
<div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
<div className="bg-green-400 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
<div className="flex justify-between text-xs text-slate-300">
<span>Daily Goal</span>
<span>70%</span>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-xl font-semibold mb-2">Structured Daily Tasks</h3>
<p className="text-slate-400 text-sm leading-relaxed">Stay on track with bite-sized daily exercises. We break down daunting concepts into manageable 20-minute practice sessions.</p>
</div>
</div>

<div className="glass-card-dark p-1 rounded-2xl group hover:border-blue-500/50 transition-colors">
<div className="bg-slate-800/50 rounded-xl overflow-hidden aspect-video relative mb-4">
<img alt="Expert Network" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-200"></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-300"></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-400"></div>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-xl font-semibold mb-2">Human Expert Coaching</h3>
<p className="text-slate-400 text-sm leading-relaxed">Need the final polish? Book 1:1 sessions with PMs from top companies to get insider tips and deeper critiques.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1680px] mx-auto px-4 md:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<span className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-3 block">Results</span>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight font-instrument-serif mb-4">
                            Proven <span className="italic text-slate-500">Success</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 text-center reveal">
<div className="p-6 border-r border-slate-100 last:border-0">
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 font-instrument-serif italic">1,200+</div>
<div className="text-lg font-medium text-slate-900">Offers Received</div>
<p className="text-slate-500 text-sm mt-1">From Associate PM to Director</p>
</div>
<div className="p-6 border-r border-slate-100 last:border-0">
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 font-instrument-serif italic">45%</div>
<div className="text-lg font-medium text-slate-900">Average Salary Increase</div>
<p className="text-slate-500 text-sm mt-1">For candidates using Omimo</p>
</div>
<div className="p-6">
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 font-instrument-serif italic">50k+</div>
<div className="text-lg font-medium text-slate-900">Practice Hours</div>
<p className="text-slate-500 text-sm mt-1">Logged on our platform</p>
</div>
</div>

<div className="mt-20 border-t border-slate-100 pt-16">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Our users have joined</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-8" fill="currentColor" viewbox="0 0 24 24"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.61,2 12.21,2C6.42,2 2.06,6.8 2.06,12.5C2.06,18.19 6.45,23 12.21,23C17.3,23 21.86,19.48 21.86,12.5C21.86,11.83 21.78,11.54 21.35,11.1V11.1Z"></path></svg>

<svg className="h-8" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path></svg>

<span className="text-xl font-bold tracking-tight">amazon</span>

<span className="text-xl font-bold tracking-tight">Uber</span>

<span className="text-xl font-bold tracking-tight">stripe</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-[1680px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium uppercase tracking-wide mb-6">
                                New Feature
                            </div>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight font-instrument-serif mb-6">
                                Know Your <span className="italic text-indigo-500">Omimo Readiness</span> Score
                            </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Are you ready for the onsite? Our proprietary scoring algorithm evaluates your performance across 15+ dimensions—from analytical depth to communication clarity—giving you a definitive "Hire/No Hire" signal before the real thing.
                            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
                                    Detailed breakdown by competency (Product Sense, Execution)
                                </li>
<li className="flex items-center gap-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
                                    Benchmarked against successful candidates
                                </li>
<li className="flex items-center gap-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
                                    Actionable tips to improve your score
                                </li>
</ul>
<a className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors" href="#">
                                Take a diagnostic test <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>
<div className="flex-1 w-full max-w-lg reveal delay-200">

<div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-bold text-slate-900">Readiness Score</h3>
<p className="text-sm text-slate-500">Updated today</p>
</div>
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        8.5
                                    </div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-slate-700">Product Sense</span>
<span className="text-green-600">Strong Hire</span>
</div>
<div className="h-3 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-slate-700">Analytical Metrics</span>
<span className="text-amber-500">Leaning Hire</span>
</div>
<div className="h-3 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-slate-700">Communication</span>
<span className="text-green-600">Strong Hire</span>
</div>
<div className="h-3 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-50">
<p className="text-xs text-slate-400 text-center">Based on 12 mock interviews</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
<div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.1),transparent)]"></div>
<div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[80px]"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium font-instrument-serif text-white mb-6">
                                Don't leave your PM career to chance.
                            </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                                Join the community of aspiring Product Managers turning their preparation into offers. Start for free today.
                            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25" href="#">
                                    Get Started for Free
                                </a>
<a className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-medium hover:bg-white/5 transition-colors" href="#">
                                    View Pricing
                                </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-[1680px] mx-auto px-4 md:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="/">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-instrument-serif italic">O</div>
<span className="text-lg font-semibold text-slate-900">omimo</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                            The all-in-one AI platform for mastering Product Manager interviews. Built by PMs from Google and Uber.
                        </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600" href="#">Mock Interviews</a></li>
<li><a className="hover:text-blue-600" href="#">Study Plans</a></li>
<li><a className="hover:text-blue-600" href="#">Question Bank</a></li>
<li><a className="hover:text-blue-600" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600" href="#">Interview Guide</a></li>
<li><a className="hover:text-blue-600" href="#">Success Stories</a></li>
<li><a className="hover:text-blue-600" href="#">Blog</a></li>
<li><a className="hover:text-blue-600" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600" href="#">About Us</a></li>
<li><a className="hover:text-blue-600" href="#">Coaches</a></li>
<li><a className="hover:text-blue-600" href="#">Careers</a></li>
<li><a className="hover:text-blue-600" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 Omimo Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-600" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
