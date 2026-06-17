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
      

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-baseline gap-0.5 select-none" href="#">
<span className="text-3xl font-normal text-[#1E74C6] tracking-tight">ROCKET</span>
<span className="text-xl font-normal text-gray-400 tracking-tight">tools.io</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#team">Our Team</a>
<a className="hover:text-white transition-colors duration-200 flex items-center gap-1" href="#">
                    Insights <i className="w-3 h-3 text-gray-600" data-lucide="arrow-up-right"></i>
</a>
<a className="hover:text-white transition-colors duration-200" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="bg-white text-[#0B0E14] text-xs font-medium px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#contact">
                    Book a Conversation
                </a>
</div>

<div className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</div>
</div>
</nav>

<main className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#1E74C6]/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E74C6]/20 bg-[#1E74C6]/5 text-[10px] font-medium text-[#60A5FA] mb-8 animate-up">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
                Strategy &amp; Intelligence for Health Tech
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 leading-[1.1] animate-up delay-100 max-w-5xl mx-auto">
                We help health tech companies <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">sell to health plans.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10 animate-up delay-200">
                And hospitals. And employers. We spent 30 years inside the largest healthcare organizations in America. We know how they buy, what they fear, and what gets a "yes."
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-up delay-300">
<a className="w-full sm:w-auto bg-[#1E74C6] hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-all shadow-[0_0_25px_rgba(30,116,198,0.4)] flex items-center justify-center gap-2" href="#contact">
                    Talk to Our Team <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto bg-[#151921] hover:bg-[#1E232E] border border-white/10 text-gray-300 px-8 py-3.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2" href="#solutions">
                    See How We Work
                </a>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-[#0D1016]/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

<div className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-blue-500/80" data-lucide="shield-check"></i>
<span className="text-2xl md:text-3xl font-medium text-white tracking-tight">30+ Years</span>
</div>
<div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest pl-1">Executive Payer Experience</div>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-blue-500/80" data-lucide="bar-chart-2"></i>
<span className="text-2xl md:text-3xl font-medium text-white tracking-tight">$10B+</span>
</div>
<div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest pl-1">P&amp;L Responsibility Managed</div>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-blue-500/80" data-lucide="users"></i>
<span className="text-2xl md:text-3xl font-medium text-white tracking-tight">Top 5</span>
</div>
<div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest pl-1">Health Plan Leadership</div>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-blue-500/80" data-lucide="stethoscope"></i>
<span className="text-2xl md:text-3xl font-medium text-white tracking-tight">100%</span>
</div>
<div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest pl-1">Physician Executive Led</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-[#EF4444] font-medium text-xs tracking-widest uppercase mb-4 block">The Challenge</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Great products<br/>still lose.</h2>
<p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                        You built something that solves a real problem. But health plans aren't returning your calls. When you do get a meeting, you can't figure out who actually makes the decision. Your pitch lands flat because you're speaking product features while they're thinking budget cycles, internal politics, and risk.
                    </p>
</div>
<div className="space-y-4">

<div className="bg-[#151921] border border-red-500/10 p-6 rounded-xl flex gap-4 hover:border-red-500/20 transition-colors">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-red-500" data-lucide="x"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-1">Gatekeepers &amp; Ghosting</h3>
<p className="text-gray-400 text-sm leading-relaxed">Can't get in the room with the right decision-makers who actually control the budget.</p>
</div>
</div>

<div className="bg-[#151921] border border-red-500/10 p-6 rounded-xl flex gap-4 hover:border-red-500/20 transition-colors">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-red-500" data-lucide="x"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-1">Endless Sales Cycles</h3>
<p className="text-gray-400 text-sm leading-relaxed">Deals stretch to 18+ months with no clear path to signature or implementation.</p>
</div>
</div>

<div className="bg-[#151921] border border-red-500/10 p-6 rounded-xl flex gap-4 hover:border-red-500/20 transition-colors">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-red-500" data-lucide="x"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-1">Mismatched Messaging</h3>
<p className="text-gray-400 text-sm leading-relaxed">Messaging doesn't connect with how buyers actually measure risk and ROI.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D1016] border-y border-white/5" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-blue-500 font-medium text-xs tracking-widest uppercase mb-4 block">How We Help</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter">We've been the buyers.<br/>Now we help you sell.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative bg-[#151921] rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400">
<i className="w-6 h-6" data-lucide="compass"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Strategic Advisory</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                            We work with your leadership team to fix positioning, sharpen your narrative, and build relationships with the people who sign contracts. Health plans, hospitals, employers — we know how they evaluate vendors because we used to be the ones evaluating.
                        </p>

<div className="bg-[#0B0E14] border border-white/5 rounded-lg p-4 mt-auto">
<div className="flex items-center justify-between mb-3 text-xs text-gray-500 uppercase tracking-wider">
<span>Procurement Scorecard</span>
<span className="text-green-500">Pass</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-[#1F2937] rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[90%]"></div>
</div>
<div className="h-1.5 w-full bg-[#1F2937] rounded-full overflow-hidden">
<div className="h-full bg-blue-400 w-[85%]"></div>
</div>
<div className="h-1.5 w-full bg-[#1F2937] rounded-full overflow-hidden">
<div className="h-full bg-blue-300 w-[95%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#151921] rounded-2xl border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20 text-purple-400">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">AI &amp; Automation</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                            We're not just advising on AI — we build it. Voice agents, content automation, multi-agent workflows. Our current R&amp;D includes agentic systems and robotic process automation. We bring hands-on experience to help you separate signal from noise.
                        </p>

<div className="bg-[#0B0E14] border border-white/5 rounded-lg p-4 mt-auto font-mono text-xs">
<div className="flex items-center gap-2 text-purple-400 mb-2">
<i className="w-3 h-3" data-lucide="bot"></i> Agent Active
                            </div>
<div className="text-gray-500 space-y-1">
<p>&gt; Analyzing patient calls...</p>
<p>&gt; Extracting intent: <span className="text-white">"Appointment Reschedule"</span></p>
<p>&gt; Automating response (14ms)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<span className="text-gray-500 font-medium text-xs tracking-widest uppercase mb-4 block">Who We Are</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Three physician executives.<br/>30 years inside the system.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#151921] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-colors">
<div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full mb-6 border-2 border-[#151921] shadow-lg flex items-center justify-center text-xl font-serif text-white/20">DM</div>
<h3 className="text-xl font-medium text-white">Dan McCoy, MD</h3>
<p className="text-blue-400 text-xs uppercase tracking-wide font-medium mb-4">Founder &amp; CEO</p>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Former President and CMO, Blue Cross and Blue Shield of Texas. Physician, entrepreneur, and AI builder. Leads RocketTools' strategic advisory practice and technology development.
                    </p>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>

<div className="bg-[#151921] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-colors">
<div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full mb-6 border-2 border-[#151921] shadow-lg flex items-center justify-center text-xl font-serif text-white/20">PH</div>
<h3 className="text-xl font-medium text-white">Paul Hain, MD</h3>
<p className="text-blue-400 text-xs uppercase tracking-wide font-medium mb-4">Senior Advisor</p>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Former CMO and President of Market Delivery, Blue Cross and Blue Shield of Texas. Known for supporting both clinical leadership and sales teams navigating complex healthcare deals.
                    </p>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>

<div className="bg-[#151921] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-colors">
<div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full mb-6 border-2 border-[#151921] shadow-lg flex items-center justify-center text-xl font-serif text-white/20">RM</div>
<h3 className="text-xl font-medium text-white">Robert Morrow, MD</h3>
<p className="text-blue-400 text-xs uppercase tracking-wide font-medium mb-4">Senior Advisor</p>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Former Market President, Blue Cross and Blue Shield of Texas. Expertise in value-based care, employer strategy, and healthcare system transformation.
                    </p>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D1016] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-green-500 font-medium text-xs tracking-widest uppercase mb-4 block">Proven Results</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter">Transforming how<br/>healthcare gets sold.</h2>
</div>
<div className="hidden md:block w-px h-16 bg-white/10"></div>
<p className="text-gray-400 max-w-xs text-sm">Real outcomes across point solutions, employer benefits, and AI implementation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col border-t border-white/10 pt-6">
<div className="flex items-center gap-3 mb-4 text-white">
<i className="w-5 h-5 text-gray-500" data-lucide="target"></i>
<span className="font-medium">Point Solutions</span>
</div>
<h3 className="text-xl text-white mb-3">Health Plan Market Entry</h3>
<p className="text-gray-400 text-sm mb-6 flex-grow">Helped a digital health company refine their value proposition and navigate procurement at a top-10 health plan.</p>
<div className="bg-[#151921] p-4 rounded-lg border border-white/5">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Impact</div>
<div className="text-green-400 font-medium">6 mo. → First Contract</div>
<div className="text-gray-400 text-xs mt-1">3 Health Plans in Pipeline</div>
</div>
</div>

<div className="flex flex-col border-t border-white/10 pt-6">
<div className="flex items-center gap-3 mb-4 text-white">
<i className="w-5 h-5 text-gray-500" data-lucide="building-2"></i>
<span className="font-medium">Employers</span>
</div>
<h3 className="text-xl text-white mb-3">Benefits Strategy Redesign</h3>
<p className="text-gray-400 text-sm mb-6 flex-grow">Advised a Fortune 500 company on consolidating point solution vendors and renegotiating health plan relationships.</p>
<div className="bg-[#151921] p-4 rounded-lg border border-white/5">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Impact</div>
<div className="text-green-400 font-medium">12 Vendors → 4</div>
<div className="text-gray-400 text-xs mt-1">Reduced Complexity</div>
</div>
</div>

<div className="flex flex-col border-t border-white/10 pt-6">
<div className="flex items-center gap-3 mb-4 text-white">
<i className="w-5 h-5 text-gray-500" data-lucide="mic"></i>
<span className="font-medium">AI Implementation</span>
</div>
<h3 className="text-xl text-white mb-3">Voice AI for Scheduling</h3>
<p className="text-gray-400 text-sm mb-6 flex-grow">Built and deployed a multilingual voice agent for a healthcare organization, handling appointment scheduling 24/7.</p>
<div className="bg-[#151921] p-4 rounded-lg border border-white/5">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Impact</div>
<div className="text-green-400 font-medium">40% Automated Calls</div>
<div className="text-gray-400 text-xs mt-1">24/7 Availability</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#151921]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
<div className="mb-6"><i className="w-6 h-6 text-blue-500 fill-blue-500/20" data-lucide="quote"></i></div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Working with Dan is like earning a PhD in Healthcare Economics. His insights into strategy, marketing, and engagement are unparalleled."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs">
<div className="text-white font-medium">James Fitzpatrick</div>
</div>
</div>
</div>

<div className="bg-[#151921]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
<div className="mb-6"><i className="w-6 h-6 text-blue-500 fill-blue-500/20" data-lucide="quote"></i></div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Dr. McCoy has been a mentor who seamlessly moves across industries, anticipates strategic needs, and communicates them clearly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs">
<div className="text-white font-medium">Travis Bias</div>
</div>
</div>
</div>

<div className="bg-[#151921]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
<div className="mb-6"><i className="w-6 h-6 text-blue-500 fill-blue-500/20" data-lucide="quote"></i></div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Bob Morrow is a physician executive who is in the top percentile of his peer group. He has the prerequisite medical knowledge to be a change agent."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs">
<div className="text-white font-medium">Debora Simmons, PhD</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#0B0E14]" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-[#151921] rounded-3xl border border-white/5 overflow-hidden flex flex-col md:flex-row">

<div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">Ready to start a conversation?</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                            We begin every engagement by understanding where you are and where you're trying to go. No pitch deck, no pressure — just a conversation about your business.
                        </p>
<div className="space-y-4 mt-8">
<div className="flex items-center gap-3 text-sm text-gray-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-4 h-4 text-blue-400" data-lucide="map-pin"></i>
</div>
<span>Based in Texas. Working nationally.</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-4 h-4 text-blue-400" data-lucide="mail"></i>
</div>
<span>hello@rockettools.io</span>
</div>
</div>
</div>
</div>

<div className="p-10 md:p-16 md:w-1/2 bg-[#0D1016] border-t md:border-t-0 md:border-l border-white/5">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium text-gray-500 tracking-wider">First Name</label>
<input className="w-full bg-[#151921] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium text-gray-500 tracking-wider">Last Name</label>
<input className="w-full bg-[#151921] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium text-gray-500 tracking-wider">Work Email</label>
<input className="w-full bg-[#151921] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium text-gray-500 tracking-wider">Company</label>
<input className="w-full bg-[#151921] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium text-gray-500 tracking-wider">Message</label>
<textarea className="w-full bg-[#151921] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us what you're working on..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-[#0B0E14] font-medium py-3 rounded-lg hover:bg-gray-200 transition-colors text-sm mt-4">
                            Send Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0B0E14] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

<div className="max-w-xs">
<a className="flex items-baseline gap-0.5 select-none mb-6" href="#">
<span className="text-xl font-normal text-[#1E74C6] tracking-tight">ROCKET</span>
<span className="text-sm font-normal text-gray-400 tracking-tight">tools.io</span>
</a>
<p className="text-xs text-gray-500 leading-relaxed">
                        © 2025 RocketTools.io<br/>
                        Based in Texas.<br/>
                        Transforming healthcare sales through experience and AI.
                    </p>
</div>

<div className="grid grid-cols-2 gap-12">
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#solutions">Solutions</a></li>
<li><a className="hover:text-white transition-colors" href="#team">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Insights</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
<div className="text-[10px] text-gray-600 border-t border-white/5 pt-4">
<div className="mb-2">We also build AI tools:</div>
<div className="flex gap-3">
<span className="hover:text-blue-400 cursor-pointer transition-colors">Organic Video</span>
<span className="hover:text-blue-400 cursor-pointer transition-colors">Voice AI</span>
<span className="hover:text-blue-400 cursor-pointer transition-colors">PublishRocket</span>
</div>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
