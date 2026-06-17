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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed brightness-200 opacity-80 hue-rotate-90" data-alpha-mask="100" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="VHdphegF30v2j1bserOH"></div>
</div>
<div className="bg-noise"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[20%] left-[5%] text-[#94C11F] animate-float opacity-30">
<i className="w-24 h-24" data-lucide="calculator" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="absolute bottom-[20%] right-[5%] text-[#2F4538] animate-float-delayed opacity-10">
<i className="w-32 h-32" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bg-[#F5F6F3]/95 backdrop-blur-md hard-shadow rounded-full px-3 py-2 flex items-center gap-4 max-w-5xl w-full justify-between transition-all">
<a className="flex items-center gap-2 group text-[#1E2B22] rounded-full pt-1 pr-2 pb-1 pl-2" href="#">
<div className="bg-[#2F4538] text-[#94C11F] p-2 rounded-full group-hover:rotate-12 transition-transform">
<i className="w-5 h-5" data-lucide="landmark" style={{strokeWidth: '1.5'}}></i>
</div>
</a>
<div className="hidden md:flex gap-2 items-center">
<a className="hover:bg-[#E8EDDF] transition-colors text-base font-medium text-[#1E2B22] tracking-tight rounded-full pt-2 pr-4 pb-2 pl-4" href="#services">Services</a>
<a className="px-4 py-2 rounded-full text-base font-medium hover:bg-[#E8EDDF] text-[#1E2B22] transition-colors tracking-tight" href="#process">How It Works</a>
<a className="px-4 py-2 rounded-full text-base font-medium hover:bg-[#E8EDDF] text-[#1E2B22] transition-colors tracking-tight" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-[#1E2B22] px-4 py-2 rounded-full text-base font-semibold hover:bg-[#E8EDDF] transition-colors tracking-tight" href="#login">
<i className="w-4 h-4" data-lucide="user" style={{strokeWidth: '1.5'}}></i> Client Login
                </a>
<button className="bg-[#94C11F] hover:bg-[#85b01c] text-[#1E2B22] px-6 py-2.5 rounded-full text-base font-semibold border-2 border-[#1E2B22] shadow-[2px_2px_0px_0px_#1E2B22] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2 tracking-tight">
                    Get Started
                </button>
</div>
</div>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden pt-32 pb-16 relative items-center justify-center">
<div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col items-center">

<div className="animate-bounce-subtle mb-10">
<div className="bg-[#2F4538] text-[#F5F6F3] pl-6 pr-2 py-2 rounded-full border-2 border-[#1E2B22] shadow-[4px_4px_0px_0px_#94C11F] font-semibold text-base tracking-tight uppercase inline-flex items-center gap-4">
                    Tax Deadline Approaching
                    <span className="bg-[#FF6B4A] text-[#1E2B22] px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar-clock" style={{strokeWidth: '1.5'}}></i> APRIL 15
                    </span>
</div>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.05] group cursor-default text-5xl font-bold text-[#1E2B22] tracking-tight mb-6 relative">
                File Your Taxes With a <br/>
<span className="font-serif italic text-[#2F4538] relative inline-block mt-2">
                    Real Expert,
                    <i className="absolute -top-6 -right-10 text-[#94C11F] w-12 h-12 -z-10 rotate-12 animate-pulse" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
</span>
                Not Software.
            </h1>
<div className="mt-6 mb-12 max-w-2xl mx-auto">
<p className="text-xl md:text-2xl font-medium text-[#1E2B22]/80 leading-relaxed tracking-tight">
                    Get your maximum refund guaranteed. We prepare your return exactly how you prefer:
                    <span className="bg-[#94C11F] text-[#1E2B22] px-2 py-0.5 rounded italic font-serif border border-[#1E2B22]">Over the phone</span> or 
                    <span className="bg-[#94C11F] text-[#1E2B22] px-2 py-0.5 rounded italic font-serif border border-[#1E2B22]">Face-to-face</span>.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
<button className="bg-[#94C11F] text-[#1E2B22] px-10 py-5 rounded-full text-xl font-semibold hard-shadow hard-shadow-hover transition-all flex items-center gap-3 tracking-tight w-full sm:w-auto justify-center">
                    Get Started
                    <i className="w-6 h-6" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="bg-[#F5F6F3] text-[#1E2B22] px-10 py-5 rounded-full text-xl font-semibold hard-shadow hard-shadow-hover transition-all flex items-center gap-3 tracking-tight w-full sm:w-auto justify-center">
<i className="w-6 h-6" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
                    Schedule Consult
                </button>
</div>
</div>

<div className="absolute bottom-24 left-10 md:left-20 animate-float hidden lg:block z-0">
<div className="bg-white p-4 rounded-xl hard-shadow-sm rotate-[-4deg] w-56 flex items-center gap-4">
<div className="bg-[#E8EDDF] p-3 rounded-full text-[#2F4538]">
<i className="w-8 h-8" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-bold text-base tracking-tight leading-tight">100% Accuracy</div>
<div className="text-sm text-[#1E2B22]/60 font-medium">Guaranteed</div>
</div>
</div>
</div>
<div className="absolute top-40 right-10 md:right-20 animate-float-delayed hidden lg:block z-0">
<div className="bg-[#2F4538] text-white p-4 rounded-xl hard-shadow-sm rotate-[6deg] w-64 flex items-center gap-4 border-2 border-[#1E2B22]">
<div className="bg-[#94C11F] p-3 rounded-full text-[#1E2B22]">
<i className="w-8 h-8" data-lucide="badge-dollar-sign" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-bold text-base tracking-tight leading-tight text-[#94C11F]">Max Refund</div>
<div className="text-sm text-white/80 font-medium tracking-tight">We find every deduction</div>
</div>
</div>
</div>
</header>

<div className="relative py-8 bg-[#2F4538] -rotate-1 scale-105 border-y-4 border-[#1E2B22] z-20 overflow-hidden shadow-lg">
<div className="flex animate-marquee whitespace-nowrap">
<span className="text-3xl md:text-4xl font-bold text-[#F5F6F3] px-8 tracking-tight flex items-center gap-8">
                No Stress Filing <i className="w-3 h-3 fill-[#94C11F] text-[#94C11F]" data-lucide="circle"></i> 
                Max Refund Guaranteed <i className="w-3 h-3 fill-[#94C11F] text-[#94C11F]" data-lucide="circle"></i>
                100% Accuracy <i className="w-3 h-3 fill-[#94C11F] text-[#94C11F]" data-lucide="circle"></i>
                Expert Support <i className="w-3 h-3 fill-[#94C11F] text-[#94C11F]" data-lucide="circle"></i>
</span>
<span className="text-3xl md:text-4xl font-bold text-[#F5F6F3] px-8 tracking-tight flex items-center gap-8">
                No Stress Filing <i className="w-3 h-3 fill-[#94C11F] text-[#94C11F]" data-lucide="circle"></i> 
                Max Refund Guaranteed <i className="w-3 h-3 fill-[#94C11F] text-[#94C11F]" data-lucide="circle"></i>
                100% Accuracy <i className="w-3 h-3 fill-[#94C11F] text-[#94C11F]" data-lucide="circle"></i>
                Expert Support <i className="w-3 h-3 fill-[#94C11F] text-[#94C11F]" data-lucide="circle"></i>
</span>
</div>
</div>

<section className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto" id="services">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<div className="inline-block bg-[#E8EDDF] text-[#2F4538] font-bold px-4 py-1.5 rounded-full border-2 border-[#1E2B22] mb-6 shadow-[2px_2px_0px_0px_#1E2B22] text-sm tracking-tight flex items-center gap-2 w-fit">
<i className="w-4 h-4" data-lucide="alert-circle" style={{strokeWidth: '1.5'}}></i> STOP GUESSING
                </div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1E2B22] mb-6 leading-[1.1]">
                    Tired of Doing Your Taxes Alone and <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F4538] to-[#94C11F] italic font-serif relative">
                        Worried About Money?
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#94C11F]" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</span>
</h2>
<p className="text-xl text-[#1E2B22]/80 font-medium mb-8 leading-relaxed">
                    Most people find tax season stressful because software can't answer real questions, and mistakes cause big problems later. No more second guessing—get clarity and the biggest refund you qualify for.
                </p>

<div className="bg-white p-8 rounded-2xl hard-shadow-sm">
<h3 className="font-bold text-2xl tracking-tight mb-6 flex items-center gap-2">
<i className="w-6 h-6 text-[#94C11F]" data-lucide="clipboard-signature" style={{strokeWidth: '1.5'}}></i> Start Your Application
                    </h3>
<form className="space-y-5">
<div>
<label className="block text-base font-semibold mb-2 tracking-tight">Full Name</label>
<input className="w-full bg-[#F5F6F3] border-2 border-[#1E2B22] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#94C11F]/30 text-[#1E2B22] font-medium transition-all text-lg" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-base font-semibold mb-2 tracking-tight">Email Address</label>
<input className="w-full bg-[#F5F6F3] border-2 border-[#1E2B22] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#94C11F]/30 text-[#1E2B22] font-medium transition-all text-lg" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-base font-semibold mb-2 tracking-tight">Phone Number</label>
<input className="w-full bg-[#F5F6F3] border-2 border-[#1E2B22] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#94C11F]/30 text-[#1E2B22] font-medium transition-all text-lg" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<button className="w-full bg-[#94C11F] text-[#1E2B22] px-8 py-4 rounded-xl font-semibold hover:bg-[#85b01c] transition-colors shadow-[4px_4px_0px_0px_#1E2B22] hover:shadow-[2px_2px_0px_0px_#1E2B22] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none text-xl tracking-tight mt-4" type="button">
                            Start My Professional Filing
                        </button>
</form>
</div>
</div>

<div className="relative h-full min-h-[500px] w-full lg:order-2 rounded-2xl overflow-hidden hard-shadow transform rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Tax Professional at work" className="w-full h-full object-cover absolute inset-0" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2F4538]/90 via-transparent to-transparent flex items-end p-8">
<div className="bg-white/95 backdrop-blur-sm p-5 rounded-xl border-2 border-[#1E2B22] shadow-lg">
<div className="flex items-center gap-3 mb-2">
<i className="text-[#94C11F] w-6 h-6" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span className="font-bold text-lg tracking-tight">Dedicated Pro</span>
</div>
<p className="text-base font-medium text-[#1E2B22]/70 leading-snug">You're not just buying prep software. You get a tax expert dedicated entirely to you.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#2F4538] relative overflow-hidden text-[#F5F6F3] border-y-4 border-[#1E2B22]">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                We are taking only <br className="md:hidden"/>
<span className="text-[#94C11F] border-b-4 border-[#94C11F] pb-1">50 clients per week</span>
</h2>
<p className="text-xl text-[#F5F6F3]/80 font-medium max-w-2xl mx-auto mb-10">
                Each certified tax pro has limited capacity. Once weekly slots fill, new clients are automatically waitlisted to ensure quality service.
            </p>
<div className="flex flex-wrap justify-center gap-4">
<div className="bg-[#94C11F] text-[#1E2B22] px-8 py-3 rounded-xl font-bold border-2 border-[#1E2B22] shadow-[4px_4px_0px_0px_#1E2B22] text-lg tracking-tight">
                    File In Person
                </div>
<div className="bg-[#94C11F] text-[#1E2B22] px-8 py-3 rounded-xl font-bold border-2 border-[#1E2B22] shadow-[4px_4px_0px_0px_#1E2B22] text-lg tracking-tight">
                    File Over Phone
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 relative max-w-5xl mx-auto" id="process">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1E2B22] mb-4">
                How Our <span className="text-[#2F4538] font-serif italic relative">Process <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#94C11F]" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg></span> Works
            </h2>
<p className="text-xl text-[#1E2B22]/70 font-medium">Our simple, stress-free 3-step timeline.</p>
</div>
<div className="space-y-6 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-[#E8EDDF]">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#F5F6F3] bg-[#94C11F] text-[#1E2B22] font-bold text-2xl hard-shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    01
                </div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-white p-6 rounded-2xl hard-shadow-sm group-hover:-translate-y-1 transition-transform">
<h3 className="font-bold text-2xl tracking-tight mb-2 text-[#1E2B22]">Start Your Application</h3>
<p className="text-[#1E2B22]/70 text-lg font-medium">Provide your basic info to get started. Choose whether you want to file over the phone or face-to-face.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#F5F6F3] bg-[#E8EDDF] text-[#2F4538] font-bold text-2xl hard-shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    02
                </div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-white p-6 rounded-2xl hard-shadow-sm group-hover:-translate-y-1 transition-transform">
<h3 className="font-bold text-2xl tracking-tight mb-2 text-[#1E2B22]">Get Approved &amp; Reviewed</h3>
<p className="text-[#1E2B22]/70 text-lg font-medium">Your dedicated expert double-checks everything to ensure 100% accuracy and maximum refund.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#F5F6F3] bg-[#2F4538] text-white font-bold text-2xl hard-shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    03
                </div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-white p-6 rounded-2xl hard-shadow-sm group-hover:-translate-y-1 transition-transform">
<h3 className="font-bold text-2xl tracking-tight mb-2 text-[#1E2B22]">File &amp; Relax</h3>
<p className="text-[#1E2B22]/70 text-lg font-medium">We file it. You can log in anytime to our portal to check your return date and status stress-free.</p>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-6xl mx-auto bg-[#E8EDDF] rounded-3xl p-8 md:p-12 border-4 border-[#1E2B22] flex flex-col md:flex-row items-center justify-between gap-8 hard-shadow">
<div className="flex items-center gap-6">
<div className="bg-white p-4 rounded-full border-2 border-[#1E2B22] shadow-[4px_4px_0px_0px_#2F4538]">
<i className="w-10 h-10 text-[#2F4538]" data-lucide="layout-dashboard" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Track Your Return 24/7</h3>
<p className="text-lg font-medium text-[#1E2B22]/70">Log in to your secure portal to see live updates on your tax return date.</p>
</div>
</div>
<a className="bg-[#1E2B22] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2F4538] transition-colors shadow-[4px_4px_0px_0px_#94C11F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none text-xl tracking-tight whitespace-nowrap flex items-center gap-2" href="#login">
                Client Login <i className="w-5 h-5" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</section>

<section className="overflow-hidden bg-[#1E2B22] border-[#F5F6F3] border-t-4 pt-24 pb-24 relative" id="reviews">
<div className="flex justify-between items-end px-6 md:px-12 max-w-7xl mx-auto mb-16">
<div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F6F3] mb-2">Trusted by Thousands</h2>
<p className="text-[#94C11F] font-serif italic text-2xl">of local filers every year</p>
</div>
</div>

<div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-16 snap-x no-scrollbar items-center">

<div className="flex-shrink-0 snap-center relative group">
<div className="w-[320px] md:w-[380px] bg-[#F5F6F3] p-5 pb-8 rounded-xl rotate-[-2deg] hard-shadow group-hover:rotate-0 transition-transform duration-300">
<i className="text-[#94C11F] w-10 h-10 mb-4 opacity-50" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
<p className="text-lg font-medium text-[#1E2B22] leading-relaxed mb-6">
          "I've been going to KNK for more than 7 years and I would never trust anyone with my taxes besides this
          office... they are the absolute best."
        </p>
<div className="flex items-center gap-4 pt-4 border-t-2 border-[#1E2B22]/10">
<div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-[#1E2B22]">
<img alt="Client" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="font-bold tracking-tight text-[#1E2B22] text-lg">Danielle Harris</span>
</div>
</div>
</div>

<div className="flex-shrink-0 snap-center relative group mt-8">
<div className="w-[300px] bg-white p-3 pb-6 rounded-xl rotate-[3deg] hard-shadow group-hover:rotate-0 transition-transform duration-300">
<div className="bg-gray-200 w-full h-48 rounded-lg border-2 border-[#1E2B22] overflow-hidden mb-4 relative">
<img alt="Happy client" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-[#94C11F] text-[#1E2B22] text-xs font-bold px-2 py-1 rounded border border-[#1E2B22] flex items-center gap-1">
<i className="w-3 h-3 fill-current" data-lucide="star" style={{strokeWidth: '1.5'}}></i> 5.0
          </div>
</div>
<p className="text-base font-medium text-[#1E2B22] italic mb-2">"Fast, friendly, and got me a huge return over the
          phone."</p>
<span className="font-bold tracking-tight text-[#1E2B22] text-sm uppercase">M. Anderson</span>
</div>
</div>

<div className="flex-shrink-0 snap-center relative group">
<div className="w-[320px] md:w-[380px] bg-[#E8EDDF] p-5 pb-8 rounded-xl rotate-[1deg] hard-shadow group-hover:rotate-0 transition-transform duration-300">
<i className="text-[#2F4538] w-10 h-10 mb-4 opacity-30" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
<p className="text-lg font-medium text-[#1E2B22] leading-relaxed mb-6">
          "The experts here helped me understand my deductions face-to-face. First time I felt zero stress during tax
          season. Highly recommended!"
        </p>
<div className="flex items-center gap-4 pt-4 border-t-2 border-[#1E2B22]/10">
<div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-[#1E2B22]">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="font-bold tracking-tight text-[#1E2B22] text-lg">Emily Carter</span>
</div>
</div>
</div>

<div className="w-6 shrink-0"></div>
</div>
</section>

<footer className="bg-[#F5F6F3] text-[#1E2B22] pt-20 pb-10 px-6 border-t-4 border-[#1E2B22]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-3 group uppercase text-3xl font-bold text-[#1E2B22] tracking-tight w-fit mb-6" href="#">K Tax Solutions<div className="bg-[#2F4538] text-[#94C11F] p-2 rounded-xl border-2 border-[#1E2B22] shadow-[2px_2px_0px_0px_#1E2B22] group-hover:rotate-6 transition-transform">
<i className="w-6 h-6" data-lucide="landmark" style={{strokeWidth: '1.5'}}></i>
</div></a>
<p className="text-[#1E2B22]/70 max-w-sm text-lg font-medium leading-relaxed mb-6">
                    Professional tax filing with guaranteed maximum returns. Face-to-face or over the phone, we make taxes stress-free.
                </p>
<button className="bg-[#1E2B22] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2F4538] transition-colors shadow-[4px_4px_0px_0px_#94C11F] tracking-tight text-lg">
                    Schedule Consult
                </button>
</div>
<div className="">
<h4 className="text-[#2F4538] font-bold mb-6 uppercase tracking-tight text-base border-b-2 border-[#1E2B22] pb-2 w-fit">Services</h4>
<ul className="space-y-4 text-[#1E2B22]/80 font-medium text-lg">
<li><a className="hover:text-[#94C11F] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i> Personal Tax Filing</a></li>
<li><a className="hover:text-[#94C11F] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i> Business Taxes</a></li>
<li><a className="hover:text-[#94C11F] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i> Audit Support</a></li>
<li><a className="hover:text-[#94C11F] transition-colors flex items-center gap-2 font-bold" href="#"><i className="w-4 h-4" data-lucide="log-in" style={{strokeWidth: '1.5'}}></i> Client Portal Login</a></li>
</ul>
</div>
<div>
<h4 className="text-[#2F4538] font-bold mb-6 uppercase tracking-tight text-base border-b-2 border-[#1E2B22] pb-2 w-fit">Contact</h4>
<ul className="space-y-4 text-[#1E2B22]/80 font-medium text-lg mb-6">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#94C11F]" data-lucide="phone" style={{strokeWidth: '1.5'}}></i> <a href="tel:(877) 421-3423">(877) 421-3423</a></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#94C11F]" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i> 11200 Crenshaw Blvd</li>
</ul>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-xl bg-white border-2 border-[#1E2B22] flex items-center justify-center hover:bg-[#94C11F] hover:-translate-y-1 transition-all shadow-[2px_2px_0px_0px_#1E2B22]" href="#">
<i className="w-5 h-5" data-lucide="facebook" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-12 h-12 rounded-xl bg-white border-2 border-[#1E2B22] flex items-center justify-center hover:bg-[#94C11F] hover:-translate-y-1 transition-all shadow-[2px_2px_0px_0px_#1E2B22]" href="#">
<i className="w-5 h-5" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t-2 border-[#1E2B22]/10 text-center md:text-left flex flex-col md:flex-row justify-between text-[#1E2B22]/60 text-base font-semibold">
<p className=""></p>
<p className="mt-2 md:mt-0 flex items-center justify-center gap-4">
<a className="hover:text-[#1E2B22] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#1E2B22] transition-colors" href="#">Terms of Service</a>
</p>
</div>
</footer>



    </>
  );
}
