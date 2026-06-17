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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-blue-600 text-white p-1 rounded-md">
<span className="font-semibold text-lg px-1">C</span>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">CorpTrainer.ai</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#">Features</a>
<a className="hover:text-blue-600 transition-colors" href="#">How it Works</a>
<a className="hover:text-blue-600 transition-colors" href="#">Pricing</a>
</div>
<a className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all" href="#">
                Request Demo
            </a>
</div>
</nav>

<header className="pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-4">
<span className="text-blue-600">CorpTrainer.ai</span> is like a
            </h1>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6">
<span className="text-slate-300">Private Brain</span><br/>
<span className="text-slate-900">For Your Company</span>
</h2>
<p className="text-lg text-slate-500 font-medium mb-10 max-w-xl mx-auto">
                AI-Powered Learning Management System
            </p>
<div className="flex justify-center mb-16">
<a className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1" href="#">
                    Request a Demo
                </a>
</div>
<div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
<img alt="Platform Dashboard" className="w-full h-auto object-cover opacity-90" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center group-hover:bg-slate-900/5 transition-colors">
<button className="bg-white text-blue-600 rounded-full p-5 shadow-xl hover:scale-105 transition-transform">
<i className="w-8 h-8 fill-blue-600" data-lucide="play"></i>
</button>
</div>
</div>
</div>
</header>

<section className="py-16 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div>
<div className="text-5xl lg:text-6xl font-semibold text-blue-600 tracking-tight mb-2">10x</div>
<p className="text-lg text-slate-500 font-medium">Faster course creation using AI</p>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold text-blue-600 tracking-tight mb-2">95%</div>
<p className="text-lg text-slate-500 font-medium">Average course completion rate</p>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold text-blue-600 tracking-tight mb-2">24/7</div>
<p className="text-lg text-slate-500 font-medium">AI assistant available to employees</p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">
                    Meet Your Company's <br/>
<span className="text-blue-600">Private Brain</span>
</h2>
<p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                    Train your employees using AI that is built only on your company's data.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-600">
<i data-lucide="upload-cloud" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Upload your documents</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Policies, SOPs, and training material are securely ingested.
                    </p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-600">
<i data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Auto-generated courses</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        The system builds structured lessons and quizzes automatically.
                    </p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-600">
<i data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">AI answers anytime</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Employees can ask the AI questions at any time, anywhere.
                    </p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-600">
<i data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">100% Private</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        No public data is used. No company information is shared outside.
                    </p>
</div>
</div>
<div className="flex justify-center mt-12">
<a className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-6 py-3 rounded-full transition-all" href="#">
                    Request a Demo
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-900 tracking-tight mb-20">
                How It Works
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="relative group">
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<span className="text-7xl font-bold text-slate-100 absolute -top-8 right-0 -z-10 select-none">01</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Create Your Course</h3>
<p className="text-base text-slate-500">Upload your internal documents or training materials easily.</p>
</div>

<div className="relative group">
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
<i className="w-5 h-5" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<span className="text-7xl font-bold text-slate-100 absolute -top-8 right-0 -z-10 select-none">02</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">AI Trains on Your Data</h3>
<p className="text-base text-slate-500">The system builds structured lessons and learning paths instantly.</p>
</div>

<div className="relative group">
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
<i className="w-5 h-5" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<span className="text-7xl font-bold text-slate-100 absolute -top-8 right-0 -z-10 select-none">03</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Employees Take the Course</h3>
<p className="text-base text-slate-500">Track progress, completion rates, and performance analytics.</p>
</div>

<div className="relative group">
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<span className="text-7xl font-bold text-slate-100 absolute -top-8 right-0 -z-10 select-none">04</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">AI Tutor Supports</h3>
<p className="text-base text-slate-500">Employees can ask questions based only on your company's data.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Powerful Features
                </h2>
<p className="text-lg text-slate-500">Everything you need to train your team effectively</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="bg-blue-100/50 w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-blue-600">
<i className="w-5 h-5" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Private AI Training</h3>
<p className="text-base text-slate-500">AI is trained only on your internal company content securely.</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="bg-blue-100/50 w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-blue-600">
<i className="w-5 h-5" data-lucide="server" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Secure Infrastructure</h3>
<p className="text-base text-slate-500">Built for enterprise-level data protection and compliance.</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="bg-blue-100/50 w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-blue-600">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Rapid Course Builder</h3>
<p className="text-base text-slate-500">Generate full training programs in minutes, not weeks.</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="bg-blue-100/50 w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-blue-600">
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Unified Content Support</h3>
<p className="text-base text-slate-500">Supports PDFs, videos, documents, and presentation slides.</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="bg-blue-100/50 w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-blue-600">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Verification &amp; Tracking</h3>
<p className="text-base text-slate-500">Monitor completion rates and employee progress in real-time.</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="bg-blue-100/50 w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-blue-600">
<i className="w-5 h-5" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">AI Assistant</h3>
<p className="text-base text-slate-500">Employees receive instant answers based on internal knowledge.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-4">
                    A Dedicated AI Assistant<br/>
<span className="text-blue-600">Built for Your Company</span>
</h2>
<p className="text-lg text-slate-500 mb-8 max-w-lg">
                    This is not a general chatbot. The AI understands your internal policies, processes, and documentation.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<span className="bg-blue-100 text-blue-600 p-1.5 rounded-full"><i className="w-4 h-4" data-lucide="help-circle"></i></span>
<span className="text-base text-slate-700 font-medium">Ask policy questions</span>
</li>
<li className="flex items-center gap-3">
<span className="bg-blue-100 text-blue-600 p-1.5 rounded-full"><i className="w-4 h-4" data-lucide="git-branch"></i></span>
<span className="text-base text-slate-700 font-medium">Get step-by-step process guidance</span>
</li>
<li className="flex items-center gap-3">
<span className="bg-blue-100 text-blue-600 p-1.5 rounded-full"><i className="w-4 h-4" data-lucide="search"></i></span>
<span className="text-base text-slate-700 font-medium">Find internal information instantly</span>
</li>
<li className="flex items-center gap-3">
<span className="bg-blue-100 text-blue-600 p-1.5 rounded-full"><i className="w-4 h-4" data-lucide="message-square"></i></span>
<span className="text-base text-slate-700 font-medium">Reduce repetitive support requests</span>
</li>
</ul>
<p className="text-sm text-blue-600 mt-8 font-medium">All responses are based only on your company's data.</p>
</div>

<div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-w-md mx-auto w-full">
<div className="border-b border-slate-100 p-4 flex items-center gap-3 bg-slate-50/50">
<div className="bg-blue-600 p-1.5 rounded-md text-white">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<span className="font-medium text-slate-900 text-sm">AI Assistant</span>
</div>
<div className="p-6 h-[400px] flex flex-col justify-end bg-slate-50/30">
<div className="space-y-4">
<div className="flex justify-end">
<div className="bg-slate-100 text-slate-700 text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                                What's the process for requesting time off?
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-blue-600 text-white text-sm p-4 rounded-2xl rounded-tl-sm max-w-[90%] shadow-md">
<p className="mb-2">Based on your company's HR policy, here are the steps to request time off:</p>
<ol className="list-decimal pl-4 space-y-1">
<li>Log into the HR portal</li>
<li>Navigate to "Time Off Requests"</li>
<li>Select your dates and reason</li>
<li>Submit for manager approval</li>
</ol>
</div>
</div>
<div className="flex justify-end">
<div className="bg-slate-100 text-slate-700 text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                                How many days do I have left?
                            </div>
</div>
</div>
<div className="mt-4 relative">
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm" placeholder="Ask anything about company policies..." type="text"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    The <span className="text-blue-600">"Closed-Gap"</span><br/>
                    Security Guarantee
                </h2>
<p className="text-lg text-slate-500 max-w-xl mx-auto">
                    Your data does not train external AI models. Your data is not shared with other companies. Access is controlled by your organization.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900 p-8 rounded-2xl text-center group hover:bg-slate-800 transition-colors">
<div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-900/50">
<i data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Zero-Leak Architecture</h3>
<p className="text-base text-slate-400">No external data exposure</p>
</div>
<div className="bg-slate-900 p-8 rounded-2xl text-center group hover:bg-slate-800 transition-colors">
<div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-900/50">
<i data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data Isolation</h3>
<p className="text-base text-slate-400">Each company's data remains separate</p>
</div>
<div className="bg-slate-900 p-8 rounded-2xl text-center group hover:bg-slate-800 transition-colors">
<div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-900/50">
<i data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Full Access Control</h3>
<p className="text-base text-slate-400">You control permissions and visibility</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Get <span className="text-blue-600">Started</span> Today
                </h2>
<p className="text-lg text-slate-500">Choose a plan based on your team size</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<p className="text-sm text-slate-500 mt-1 mb-6">Perfect for small teams</p>
<div className="flex items-baseline mb-8">
<span className="text-4xl font-bold text-slate-900 tracking-tight">$499</span>
<span className="text-slate-500 ml-1">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Up to 50 employees
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> 10 GB storage
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Basic analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Email support
                        </li>
</ul>
<a className="block w-full text-center bg-blue-50 text-blue-600 font-medium py-3 rounded-lg hover:bg-blue-100 transition-colors" href="#">
                        Get Started
                    </a>
</div>

<div className="bg-blue-600 p-8 rounded-2xl border border-blue-600 shadow-xl shadow-blue-900/20 flex flex-col relative transform md:-translate-y-4">
<h3 className="text-lg font-semibold text-white">Professional</h3>
<p className="text-sm text-blue-100 mt-1 mb-6">For growing companies</p>
<div className="flex items-baseline mb-8">
<span className="text-4xl font-bold text-white tracking-tight">$1,499</span>
<span className="text-blue-100 ml-1">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-200" data-lucide="check"></i> Up to 500 employees
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-200" data-lucide="check"></i> 100 GB storage
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-200" data-lucide="check"></i> Advanced analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-200" data-lucide="check"></i> Priority support
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-200" data-lucide="check"></i> Custom branding
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-200" data-lucide="check"></i> API access
                        </li>
</ul>
<a className="block w-full text-center bg-white text-blue-600 font-medium py-3 rounded-lg hover:bg-blue-50 transition-colors" href="#">
                        Get Started
                    </a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
<h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
<p className="text-sm text-slate-500 mt-1 mb-6">For large organizations</p>
<div className="flex items-baseline mb-8">
<span className="text-4xl font-bold text-slate-900 tracking-tight">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Unlimited employees
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Unlimited storage
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Full analytics suite
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Dedicated support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> On-premise option
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-600" data-lucide="check"></i> SLA guarantee
                        </li>
</ul>
<a className="block w-full text-center bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors" href="#">
                        Get Started
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4 leading-tight">
                Ready to Build Your<br/>
<span className="text-blue-600">Company's Private AI Brain?</span>
</h2>
<p className="text-lg text-slate-500 mb-10">See how CorpTrainer.ai works in a live demo.</p>
<a className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/20 transition-all" href="#">
                Request a Demo <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-blue-600 text-white p-1 rounded-md">
<span className="font-semibold text-sm px-1">C</span>
</div>
<span className="text-white font-semibold">CorpTrainer.ai</span>
</div>
<div className="flex gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-slate-600">
                © 2024 CorpTrainer.ai. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
