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



        // Lucide Icons
        lucide.createIcons();

        // Scroll Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030014]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="flex items-center gap-2.5 group" href="#">

<svg className="text-white" fill="none" height="32" viewbox="0 0 40 40" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 28C6.47715 28 2 23.5228 2 18C2 12.4772 6.47715 8 12 8C15.5 8 18.5 9.5 20 12C21.5 9.5 24.5 8 28 8C33.5228 8 38 12.4772 38 18C38 23.5228 33.5228 28 28 28H12Z" fill="url(#logo_gradient)"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logo_gradient" x1="2" x2="38" y1="8" y2="28">
<stop stop-color="#5B6CF9"></stop>
<stop offset="1" stop-color="#F358B7"></stop>
</lineargradient>
</defs>
</svg>
<span className="text-xl font-bold tracking-tight text-white">Nova AI</span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Benefits</a>
<a className="hover:text-white transition-colors" href="#workflow">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-300 hover:text-white hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full hero-glow pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
</span>
                New: Auto-Replies for Contractors
            </div>

<h1 className="reveal-on-scroll text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]" style={{transitionDelay: '100ms'}}>
                Get more local jobs <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B6CF9] via-[#F358B7] to-white">before the competition.</span>
</h1>

<p className="reveal-on-scroll text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed" style={{transitionDelay: '200ms'}}>
                Nova instantly finds homeowners asking for help in local Facebook groups and texts you immediately. Be the first to quote, every time.
            </p>

<div className="reveal-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4" style={{transitionDelay: '300ms'}}>
<button className="w-full sm:w-auto px-8 py-3.5 brand-gradient text-white rounded-full font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(243,88,183,0.3)] hover:shadow-[0_0_30px_rgba(243,88,183,0.5)]">
                    Start Getting Leads
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 text-white border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all">
                    See How It Works
                </button>
</div>

<div className="reveal-on-scroll mt-20 relative max-w-5xl mx-auto" style={{transitionDelay: '400ms'}}>

<div className="absolute inset-0 bg-gradient-to-r from-[#5B6CF9] to-[#F358B7] blur-3xl rounded-full opacity-10 -z-10"></div>
<div className="glass-card rounded-xl border border-white/10 overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
<div className="ml-4 px-3 py-1 rounded bg-black/20 text-[10px] text-slate-500 font-mono">nova-leads-dashboard.exe</div>
</div>

<div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 text-left bg-[#0a0a0a]">

<div className="space-y-4">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Scanning Local Groups...</h3>
<div className="flex items-center gap-2 text-emerald-400 text-xs">
<span className="animate-pulse">●</span> Live
                                </div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/5 opacity-40 blur-[1px]">
<div className="flex gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="h-2 w-20 bg-slate-700 rounded mb-1"></div>
<div className="h-2 w-12 bg-slate-800 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-800 rounded"></div>
</div>
</div>

<div className="p-4 rounded-lg bg-[#5B6CF9]/5 border border-[#5B6CF9]/30 relative overflow-hidden ring-1 ring-[#5B6CF9]/30">
<div className="absolute top-0 right-0 p-2">
<span className="text-[10px] brand-gradient text-white px-2 py-0.5 rounded-full shadow-lg shadow-[#F358B7]/20">Job Opportunity</span>
</div>
<div className="flex gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-[#5B6CF9]/20 flex items-center justify-center text-[#5B6CF9] text-xs font-bold">JD</div>
<div>
<div className="text-sm text-slate-200 font-medium">John Doe</div>
<div className="text-xs text-slate-500">1 min ago • Local Homeowners</div>
</div>
</div>
<p className="text-sm text-slate-200 mb-3">
                                    "Looking for a reliable plumber to fix a leaking pipe in my master bath ASAP. Anyone available today?"
                                </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-400">#plumber</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-400">#urgent</span>
</div>
</div>
</div>

<div className="space-y-6 flex flex-col justify-center pl-0 md:pl-4 border-l border-white/5 border-dashed md:border-solid">

<div className="flex gap-4 items-start">
<div className="mt-1 p-2 rounded bg-white/5 text-slate-400">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">Lead Detected</h4>
<p className="text-xs text-slate-500 mt-1">Found keyword "plumber" and "ASAP".</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="mt-1 p-2 rounded bg-[#5B6CF9]/10 text-[#5B6CF9]">
<i className="w-4 h-4" data-lucide="smartphone"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">SMS Sent to You</h4>
<p className="text-xs text-slate-500 mt-1">Delivered instantly.</p>
<div className="mt-2 p-3 bg-white/5 rounded-lg border border-white/5 text-xs font-mono text-slate-300">
                                        "New Lead: John Doe needs a plumber ASAP. Click to reply: fb.com/post/..."
                                    </div>
</div>
</div>

<div className="flex gap-4 items-start opacity-70">
<div className="mt-1 p-2 rounded bg-[#F358B7]/10 text-[#F358B7]">
<i className="w-4 h-4" data-lucide="message-circle"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">Auto-Reply Posted</h4>
<p className="text-xs text-slate-500 mt-1">We commented to save your spot.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Win More Jobs, Less Hassle</h2>
<p className="text-slate-400 max-w-xl text-lg font-light">Stop refreshing Facebook all day. Let Nova AI watch the groups while you focus on the work.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal-on-scroll glass-card p-8 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-[#5B6CF9]/10 flex items-center justify-center text-[#5B6CF9] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="trophy"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Be First, Every Time</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Speed wins jobs. We text you the moment a homeowner posts a request, so you can call them before other contractors even see it.
                    </p>
</div>

<div className="reveal-on-scroll glass-card p-8 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-1" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-lg bg-[#F358B7]/10 flex items-center justify-center text-[#F358B7] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="user-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Only Real Leads</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Our smart filter ignores spam and competitors. You only get alerts for real homeowners who are ready to hire right now.
                    </p>
</div>

<div className="reveal-on-scroll glass-card p-8 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-1" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bell-ring"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Instant Text Alerts</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Get a text straight to your phone with a link to the job. One tap to open and message the customer. Simple.
                    </p>
</div>

<div className="reveal-on-scroll glass-card p-8 rounded-2xl group cursor-default transition-all duration-300 md:col-span-2 hover:-translate-y-1" style={{transitionDelay: '300ms'}}>
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="message-square-plus"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">We Reply While You Work</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Busy on a job site? Nova can automatically comment on the homeowner's post for you, tagging them and asking them to check their DMs. You secure the lead without even unlocking your phone.
                            </p>
</div>
<div className="w-full md:w-1/2 bg-[#0a0a0a] rounded-lg p-4 border border-white/5">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full brand-gradient flex items-center justify-center text-white text-xs font-bold">You</div>
<div className="flex-1">
<div className="bg-slate-800/50 rounded-2xl rounded-tl-none p-3 text-xs text-slate-300">
                                        Hi @Homeowner! I specialize in this type of repair. I just sent you a DM with a free quote.
                                    </div>
<div className="text-[10px] text-slate-500 mt-1 ml-1">Just now • Automated by Nova AI</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll glass-card p-8 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-1" style={{transitionDelay: '400ms'}}>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Safe &amp; Secure</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        We use advanced technology to keep your account safe while monitoring groups 24/7.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030014]" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">From Post to Paid</h2>
<p className="text-slate-400">The easiest way to get new customers.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5B6CF9]/30 to-transparent"></div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="reveal-on-scroll text-center" style={{transitionDelay: '0ms'}}>
<div className="w-24 h-24 mx-auto bg-[#030014] border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(91,108,249,0.1)] group hover:border-[#5B6CF9]/50 transition-colors">
<span className="text-2xl font-semibold text-white">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">We Watch</h3>
<p className="text-sm text-slate-400">Nova monitors local community groups 24/7.</p>
</div>

<div className="reveal-on-scroll text-center" style={{transitionDelay: '150ms'}}>
<div className="w-24 h-24 mx-auto bg-[#030014] border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(91,108,249,0.1)] group hover:border-[#F358B7]/50 transition-colors">
<span className="text-2xl font-semibold text-white">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">We Filter</h3>
<p className="text-sm text-slate-400">We find only the people ready to hire.</p>
</div>

<div className="reveal-on-scroll text-center" style={{transitionDelay: '300ms'}}>
<div className="w-24 h-24 mx-auto bg-[#030014] border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(243,88,183,0.1)] group hover:border-[#F358B7]/50 transition-colors">
<span className="text-2xl font-semibold text-white">03</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">We Alert</h3>
<p className="text-sm text-slate-400">You get a text message instantly.</p>
</div>

<div className="reveal-on-scroll text-center" style={{transitionDelay: '450ms'}}>
<div className="w-24 h-24 mx-auto bg-[#030014] border border-[#5B6CF9] rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(91,108,249,0.4)]">
<i className="w-8 h-8 text-[#5B6CF9]" data-lucide="check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">You Close</h3>
<p className="text-sm text-slate-400">Contact them first and win the job.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal-on-scroll text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 text-center">Simple Pricing</h2>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="reveal-on-scroll p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col hover:border-white/20 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-slate-400 text-sm">Perfect for solo contractors.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$49</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-[#5B6CF9]" data-lucide="check"></i>
                            Monitor 5 Local Groups
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-[#5B6CF9]" data-lucide="check"></i>
                            Instant SMS Alerts
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-[#5B6CF9]" data-lucide="check"></i>
                            Spam Filtering
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                        Get Started
                    </button>
</div>

<div className="reveal-on-scroll p-8 rounded-2xl border border-[#5B6CF9]/50 bg-[#5B6CF9]/5 relative flex flex-col shadow-[0_0_50px_rgba(91,108,249,0.1)] hover:shadow-[0_0_70px_rgba(243,88,183,0.15)] transition-shadow" style={{transitionDelay: '150ms'}}>
<div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 brand-gradient text-white text-xs font-medium rounded-full shadow-lg">
                        Best Value
                    </div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Pro</h3>
<p className="text-[#5B6CF9] text-sm opacity-90">For growing businesses.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$99</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-[#F358B7]" data-lucide="check"></i>
                            Monitor Unlimited Groups
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-[#F358B7]" data-lucide="check"></i>
                            Priority Faster SMS
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-[#F358B7]" data-lucide="check"></i>
                            Advanced Lead Filters
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-medium">
<i className="w-4 h-4 text-yellow-400" data-lucide="zap"></i>
                            Auto-Reply Bot Included
                        </li>
</ul>
<button className="w-full py-3 rounded-lg brand-gradient text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#5B6CF9]/20">
                        Get Pro
                    </button>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#030014]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-bold tracking-tight text-white">Nova AI</span>
<span className="text-slate-600 text-sm">© 2023</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
