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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-[120px] pointer-events-none -z-10"></div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:infinity-linear"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-zinc-100">Aura</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Log in</a>
<a className="inline-flex items-center justify-center rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors" href="#">
                        Start Growing
                    </a>
</div>
</div>
</div>
</header>
<main>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-zinc-300">Aura AI Model 2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-100 max-w-4xl mx-auto leading-[1.1]">
                Scale your audience. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-orange-400">Organically.</span>
</h1>
<p className="mt-6 text-lg md:text-xl font-normal text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Stop relying on algorithms. Aura connects your profile with real, targeted users who actually care about your content. Sustainable growth, automated.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors" href="#">
                    Start your 7-day trial
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-transparent px-6 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-900 transition-colors" href="#features">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    Watch demo
                </a>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">
<div className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-2 backdrop-blur-xl shadow-2xl shadow-indigo-500/10">
<div className="rounded-lg border border-zinc-800/50 bg-zinc-900/80 aspect-video flex flex-col overflow-hidden relative">

<div className="h-12 border-b border-zinc-800/50 flex items-center px-4 gap-4 bg-zinc-950/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="h-6 w-48 bg-zinc-800/50 rounded-md"></div>
</div>
</div>

<div className="flex-1 p-6 flex gap-6">

<div className="w-48 hidden md:flex flex-col gap-3">
<div className="h-8 bg-zinc-800/40 rounded-md w-full"></div>
<div className="h-8 bg-zinc-800/20 rounded-md w-full"></div>
<div className="h-8 bg-zinc-800/20 rounded-md w-full"></div>
<div className="h-8 bg-zinc-800/20 rounded-md w-full"></div>
</div>

<div className="flex-1 border border-zinc-800/50 rounded-lg bg-zinc-950/50 p-6 flex flex-col justify-end relative overflow-hidden">

<div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none opacity-20">
<div className="border-t border-zinc-700 w-full"></div>
<div className="border-t border-zinc-700 w-full"></div>
<div className="border-t border-zinc-700 w-full"></div>
<div className="border-t border-zinc-700 w-full"></div>
</div>

<svg className="w-full h-full absolute inset-0 text-indigo-500 opacity-80" fill="none" preserveaspectratio="none" stroke="currentColor" viewbox="0 0 100 100">
<path d="M0,80 Q10,75 20,60 T40,40 T60,50 T80,20 T100,10" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,80 Q10,75 20,60 T40,40 T60,50 T80,20 T100,10 L100,100 L0,100 Z" fill="url(#chart-gradient)" stroke="none"></path>
<defs>
<lineargradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="currentColor" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-800/50 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm font-medium text-zinc-500 mb-6">Trusted by creators and modern brands</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon icon="solar:camera-linear"></iconify-icon> Lumina</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon icon="solar:hanger-linear"></iconify-icon> ThreadCo</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon icon="solar:cup-linear"></iconify-icon> DailyRoast</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon icon="solar:dumbbell-linear"></iconify-icon> FitLife</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon icon="solar:buildings-2-linear"></iconify-icon> UrbanEstates</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">Growth without the grind.</h2>
<p className="mt-4 text-base font-normal text-zinc-400 max-w-2xl">Everything you need to build a loyal following, packaged into one intelligent platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-100 group-hover:text-indigo-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Hyper-Targeting</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">Focus on location, interests, competitors, and hashtags to find users who will love your content.</p>
</div>

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-100 group-hover:text-fuchsia-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Account Safety</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">We operate within Instagram's limits. No shadowbans, no blocks, just secure, steady growth.</p>
</div>

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-100 group-hover:text-orange-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Real Engagement</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">No bots, no fake accounts. We connect you with real humans who engage with your stories and posts.</p>
</div>

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-100 group-hover:text-indigo-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Smart Analytics</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">Track your follower growth, engagement rate, and audience demographics in real-time.</p>
</div>

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-100 group-hover:text-fuchsia-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Content Suggestions</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">Our AI analyzes your niche and suggests post formats and timings for maximum reach.</p>
</div>

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-100 group-hover:text-orange-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:chat-round-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Dedicated Support</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">Get 1-on-1 strategy sessions with our growth experts to optimize your profile.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-900/10" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">Set it up in minutes.</h2>
<p className="mt-4 text-base font-normal text-zinc-400">Three simple steps to start growing your audience automatically.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">

<div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 -translate-y-1/2 -z-10"></div>

<div className="relative flex flex-col items-center text-center">
<div className="h-16 w-16 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-xl font-medium text-zinc-100 mb-6 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
                            1
                        </div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-2">Connect Profile</h3>
<p className="text-sm font-normal text-zinc-400">Link your Instagram account securely. We don't store your password.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="h-16 w-16 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-xl font-medium text-zinc-100 mb-6 shadow-[0_0_30px_-5px_rgba(217,70,239,0.3)]">
                            2
                        </div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-2">Define Targets</h3>
<p className="text-sm font-normal text-zinc-400">Tell us your niche, competitors, and ideal follower demographics.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="h-16 w-16 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-xl font-medium text-zinc-100 mb-6 shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]">
                            3
                        </div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-2">Watch it Grow</h3>
<p className="text-sm font-normal text-zinc-400">Our AI engages with your targets, driving relevant traffic back to your page.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">Simple, transparent pricing.</h2>
<p className="mt-4 text-base font-normal text-zinc-400">Choose the plan that fits your growth goals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col">
<h3 className="text-lg font-medium text-zinc-100">Starter</h3>
<p className="text-sm font-normal text-zinc-400 mt-2">Perfect for personal brands starting out.</p>
<div className="mt-6 mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tighter text-zinc-100">$29</span>
<span className="text-sm font-medium text-zinc-500">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Basic AI targeting
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            ~500 followers / month
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Weekly analytics reports
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Standard email support
                        </li>
</ul>
<a className="w-full inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-800 transition-colors" href="#">
                        Get Started
                    </a>
</div>

<div className="rounded-2xl border border-indigo-500/50 bg-indigo-500/5 p-8 flex flex-col relative shadow-[0_0_40px_-15px_rgba(99,102,241,0.2)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-xs font-medium rounded-full tracking-wide">
                        MOST POPULAR
                    </div>
<h3 className="text-lg font-medium text-zinc-100">Creator Pro</h3>
<p className="text-sm font-normal text-zinc-400 mt-2">For creators ready to scale their influence.</p>
<div className="mt-6 mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tighter text-zinc-100">$79</span>
<span className="text-sm font-medium text-zinc-500">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Advanced AI targeting
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            ~1500+ followers / month
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Real-time dashboard
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Content optimization tips
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Priority support
                        </li>
</ul>
<a className="w-full inline-flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors" href="#">
                        Start 7-Day Trial
                    </a>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col">
<h3 className="text-lg font-medium text-zinc-100">Agency</h3>
<p className="text-sm font-normal text-zinc-400 mt-2">Manage multiple accounts for clients.</p>
<div className="mt-6 mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tighter text-zinc-100">$199</span>
<span className="text-sm font-medium text-zinc-500">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Up to 5 accounts
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Maximum growth limits
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            White-label reports
                        </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated account manager
                        </li>
</ul>
<a className="w-full inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-800 transition-colors" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-100 mb-6">
                    Ready to transform your Instagram presence?
                </h2>
<p className="text-base font-normal text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Join thousands of creators who are growing their audience authentically, every single day.
                </p>
<a className="inline-flex items-center justify-center rounded-lg bg-zinc-100 px-8 py-4 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors" href="#">
                    Start growing today
                </a>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:infinity-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-100">Aura</span>
</div>
<p className="text-xs font-normal text-zinc-500">Automated organic growth for the modern creator.</p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Product</h4>
<ul className="flex flex-col gap-2">
<li><a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Features</a></li>
<li><a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Pricing</a></li>
<li><a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Resources</h4>
<ul className="flex flex-col gap-2">
<li><a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
<li><a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Growth Guide</a></li>
<li><a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Legal</h4>
<ul className="flex flex-col gap-2">
<li><a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-normal text-zinc-600">© 2024 Aura Growth. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
