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



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-sm uppercase">FoundationFlow</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Capabilities</a>
<a className="hover:text-slate-900 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<a className="btn-shine bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-lg shadow-slate-900/20 flex items-center gap-2 group" href="#">
                    Book a Demo
                    <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none -z-10 h-[800px]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/60 rounded-full blur-3xl -z-20 opacity-70"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -z-20 opacity-50"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-slate-200/60 backdrop-blur-sm text-slate-600 text-xs font-medium mb-10 shadow-sm animate-fade-in-up hover:border-indigo-200 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: AI-Powered Call Qualification
            </div>

<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-8">
                The First Company To Respond <br className="hidden md:block"/> Wins the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">$20K Job.</span>
</h1>

<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                We help foundation repair companies book high-severity settlement inspections by responding to missed calls and web inquiries within 60 seconds.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-medium shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
<i className="w-5 h-5 fill-yellow-400/20 text-yellow-300" data-lucide="zap"></i>
                    Get Instant Response System
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                    See How It Works
                </button>
</div>

<p className="text-sm text-slate-400 font-medium mb-6">TRUSTED BY INDUSTRY LEADERS</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-slate-800 text-lg"><div className="w-6 h-6 bg-slate-800 rounded"></div>TitanFoundations</div>
<div className="flex items-center gap-2 font-bold text-slate-800 text-lg"><div className="w-6 h-6 bg-slate-800 rounded-full"></div>SolidGround</div>
<div className="flex items-center gap-2 font-bold text-slate-800 text-lg"><div className="w-6 h-6 border-2 border-slate-800 rounded rotate-45"></div>LevelUp</div>
<div className="flex items-center gap-2 font-bold text-slate-800 text-lg"><div className="w-6 h-6 bg-slate-800 rounded-tr-xl"></div>BaseGuard</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative border-t border-slate-100" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="lg:sticky lg:top-32">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Stop Leaking <br/> <span className="text-indigo-600">Revenue</span> Through <br/> Missed Calls.
                    </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Foundation repair isn't just about technical skill—it's about speed to lead. Our AI acts as your 24/7 sales development rep, ensuring no homeowner goes to a competitor.
                    </p>
<a className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors group" href="#">
                        Learn about our technology
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="space-y-12">

<div className="group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
<i className="w-5 h-5" data-lucide="phone-call"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Respond Instantly</h3>
</div>
<p className="text-slate-500 leading-relaxed pl-14">
                            90% of leads expect an instant reply. Our AI employee replies to calls and web forms via SMS within 10 seconds, engaging the homeowner while they are still thinking about their foundation problem.
                        </p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
<i className="w-5 h-5" data-lucide="filter"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Qualify Automatically</h3>
</div>
<p className="text-slate-500 leading-relaxed pl-14">
                            Don't waste gas on tire kickers. The AI asks key structural questions (cracks, doors sticking, age of home) to ensure your sales team only visits high-value opportunities.
                        </p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Save 10+ Hours/Week</h3>
</div>
<p className="text-slate-500 leading-relaxed pl-14">
                            Eliminate the game of phone tag. The system handles the back-and-forth scheduling coordination and books inspections directly into your calendar.
                        </p>
</div>
<div className="pl-14 pt-4">
<button className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                            View Case Study
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 border-y border-slate-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="text-indigo-600 font-medium text-sm mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="message-square"></i>
                        CONVERSATIONAL AI
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                        Turn Missed Calls <br/> into <span className="text-indigo-600">Scheduled Jobs.</span>
</h2>
<p className="text-lg text-slate-500 mb-8">
                        Overwhelmed with calls during rainy seasons? Our AI text-back system engages every missed caller immediately, asking the right questions to secure the inspection before they call the next contractor on Google.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            Responds in under 60 seconds
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            Collects photos of damage automatically
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            Differentiates between slab and pier &amp; beam
                        </li>
</ul>
</div>

<div className="order-1 lg:order-2 relative">

<div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-60"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 p-6 max-w-sm mx-auto lg:ml-auto">

<div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<div>
<div className="font-semibold text-slate-900 text-sm">FoundationFlow AI</div>
<div className="text-xs text-slate-400">Replying instantly...</div>
</div>
</div>

<div className="space-y-4 text-sm font-medium">
<div className="flex gap-3">
<div className="bg-slate-100 text-slate-600 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                                    Hi there! I saw you just called. Are you seeing cracks in your walls or having trouble with doors sticking?
                                </div>
</div>
<div className="flex gap-3 justify-end">
<div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-md shadow-indigo-200">
                                    Yes, big stair-step crack on the exterior brick. Worried about it.
                                </div>
</div>
<div className="flex gap-3">
<div className="bg-slate-100 text-slate-600 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                                    I understand. We specialize in stabilizing exterior brick movement. Can you send a quick photo? I can have an inspector out Tuesday at 10am.
                                </div>
</div>
</div>

<div className="mt-6 relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 px-4 text-xs" disabled="" placeholder="Type a message..." type="text"/>
<div className="absolute right-1 top-1 w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="relative">
<div className="absolute -inset-10 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-[3rem] -z-10"></div>

<div className="relative space-y-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/40 transform translate-x-4">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">JW</div>
<div>
<div className="text-sm font-semibold text-slate-900">John Williams</div>
<div className="text-xs text-slate-500">Slab Repair • High Severity</div>
</div>
</div>
<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-semibold rounded uppercase tracking-wider border border-green-100">Booked</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-full"></div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-indigo-100 shadow-2xl shadow-indigo-100 transform -translate-x-2 scale-105 relative z-10">
<div className="absolute top-0 right-0 p-2">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
</div>
</div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">SK</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Klein</div>
<div className="text-xs text-slate-500">Water Intrusion • Medium</div>
</div>
</div>
<span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-semibold rounded uppercase tracking-wider border border-indigo-100">AI Active</span>
</div>
<div className="space-y-2 mt-4">
<div className="flex gap-2 items-center text-xs text-slate-500 bg-slate-50 p-2 rounded">
<i className="w-3 h-3 text-indigo-500" data-lucide="check-circle"></i>
                                    Address Verified
                                </div>
<div className="flex gap-2 items-center text-xs text-slate-500 bg-slate-50 p-2 rounded">
<i className="w-3 h-3 text-indigo-500 animate-spin" data-lucide="loader"></i>
                                    Booking Inspection...
                                </div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-lg shadow-slate-200/30 transform translate-x-2 opacity-60">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="space-y-1">
<div className="h-3 w-24 bg-slate-200 rounded"></div>
<div className="h-2 w-16 bg-slate-200 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="text-indigo-600 font-medium text-sm mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="kanban"></i>
                        PIPELINE AUTOMATION
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                        Complete Visibility on <br/> Every <span className="text-indigo-600">Opportunity.</span>
</h2>
<p className="text-lg text-slate-500 mb-8">
                        Never wonder where a lead went. Our dashboard gives you a real-time view of every homeowner interacting with your company, prioritized by potential job size and urgency.
                    </p>
<div className="flex gap-4">
<button className="px-6 py-3 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
                            Explore Dashboard
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white">Streamline Your Entire Operation</h2>
<p className="text-slate-400 text-lg">Beyond just answering calls, we provide the infrastructure to scale your foundation repair business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all group overflow-hidden relative">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Revenue Analytics</h3>
<p className="text-slate-400 max-w-sm">Track cost-per-lead, booking rates, and projected revenue from automated bookings in one centralized view.</p>
</div>

<div className="absolute bottom-0 right-0 w-64 h-32 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="flex items-end gap-2 h-full px-4 pb-4">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-t"></div>
<div className="w-full bg-indigo-500/40 h-[70%] rounded-t"></div>
<div className="w-full bg-indigo-500/60 h-[50%] rounded-t"></div>
<div className="w-full bg-indigo-500 h-[85%] rounded-t shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<i className="w-5 h-5" data-lucide="bell"></i>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">Instant Alerts</h3>
<p className="text-sm text-slate-400">Get SMS notifications instantly when a high-value job is booked.</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">CRM Sync</h3>
<p className="text-sm text-slate-400">Two-way sync with ServiceTitan, Jobber, or your custom CRM.</p>
</div>

<div className="md:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all group overflow-hidden relative">
<div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Call Recording &amp; Analysis</h3>
<p className="text-slate-400">Every automated call is recorded and transcribed. Our AI summarizes the structural issue for your inspector before they arrive.</p>
</div>
<div className="w-full md:w-1/2 bg-slate-900/50 rounded-xl p-4 border border-slate-700">
<div className="flex items-center gap-3 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs text-slate-400 font-mono">REC 00:42</span>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-slate-500 w-[60%]"></div>
</div>
<div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[80%]"></div>
</div>
<div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-slate-500 w-[40%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-500 text-lg">Start converting more traffic today. No long-term contracts.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors relative">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Growth</h3>
<p className="text-slate-500 text-sm mb-6">Perfect for local companies doing &lt; $2M/yr.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold text-slate-900">$297</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i>
                            24/7 AI Call Answering
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i>
                            Instant SMS Follow-up
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i>
                            Basic Lead Qualification
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i>
                            Email Support
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-center font-medium rounded-lg border border-slate-200 transition-colors" href="#">
                        Get Started
                    </a>
</div>

<div className="p-8 rounded-2xl border border-indigo-200 bg-slate-900 relative shadow-2xl shadow-indigo-900/10">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                        Most Popular
                    </div>
<h3 className="text-xl font-semibold text-white mb-2">Scale</h3>
<p className="text-indigo-200 text-sm mb-6">For multi-crew operations looking to dominate.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold text-white">$497</span>
<span className="text-slate-400">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
                            Everything in Growth
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
                            Full Calendar Booking Integration
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
                            Advanced CRM Sync
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
                            Dedicated Success Manager
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-medium rounded-lg shadow-lg shadow-indigo-900/20 transition-all btn-shine" href="#">
                        Start Free Trial
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-xl font-semibold text-slate-900 mb-12">Proven Results That Drive Growth</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div className="px-6 py-4">
<div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">35%</div>
<p className="text-sm text-slate-500 font-medium">Increase in Booking Rate</p>
<p className="text-xs text-slate-400 mt-2">Average improvement in first 30 days</p>
</div>
<div className="px-6 py-4">
<div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">&lt; 60s</div>
<p className="text-sm text-slate-500 font-medium">Average Response Time</p>
<p className="text-xs text-slate-400 mt-2">24/7/365 coverage for all leads</p>
</div>
<div className="px-6 py-4">
<div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">$42k</div>
<p className="text-sm text-slate-500 font-medium">Recovered Revenue</p>
<p className="text-xs text-slate-400 mt-2">Average monthly value of saved leads</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-60"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Ready to stop leaking revenue?</h2>
<p className="text-slate-500 mb-10 text-lg">
                Your competitors are responding in minutes. You can respond in seconds.
            </p>
<form className="max-w-md mx-auto space-y-4 mb-8">
<div className="relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" data-lucide="mail"></i>
<input className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400 text-sm shadow-sm" placeholder="Enter your work email" type="email"/>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 btn-shine" type="submit">
                    See the System in Action
                </button>
</form>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400 font-medium">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                    No Credit Card Required
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="hammer"></i>
                    Foundation Industry Focused
                </div>
</div>
</div>
</section>

<footer className="border-t border-slate-100 py-12 bg-white text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="layers"></i>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-xs uppercase">FoundationFlow</span>
</div>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
<div className="text-slate-400 text-xs">
                © 2024 FoundationFlow Automation.
            </div>
</div>
</footer>


    </>
  );
}
