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



        document.addEventListener('DOMContentLoaded', () => {
            const elClips = document.getElementById('input-clips');
            const elViews = document.getElementById('input-views');
            const elCpm = document.getElementById('input-cpm');

            const valClips = document.getElementById('val-clips');
            const valViews = document.getElementById('val-views');
            const valCpm = document.getElementById('val-cpm');

            const resMonthly = document.getElementById('result-monthly');
            const resTotalViews = document.getElementById('result-total-views');
            const resYearly = document.getElementById('result-yearly');
            const resNet = document.getElementById('result-net');

            const proCost = 27;

            function formatCurrency(num) {
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
            }

            function formatNumber(num) {
                return new Intl.NumberFormat('en-US').format(num);
            }

            function calculate() {
                const clips = parseInt(elClips.value);
                const views = parseInt(elViews.value);
                const cpm = parseFloat(elCpm.value);

                // Update UI values
                valClips.textContent = formatNumber(clips);
                valViews.textContent = formatNumber(views);
                valCpm.textContent = formatCurrency(cpm);

                // Math
                const totalViews = clips * views;
                const monthlyEarnings = (totalViews / 1000) * cpm;
                const yearlyEarnings = monthlyEarnings * 12;
                let netProfit = monthlyEarnings - proCost;
                if (netProfit < 0) netProfit = 0;

                // Update Results
                resTotalViews.textContent = formatNumber(totalViews);
                resMonthly.textContent = formatCurrency(monthlyEarnings);
                resYearly.textContent = formatCurrency(yearlyEarnings);
                
                if (monthlyEarnings > proCost) {
                    resNet.textContent = formatCurrency(netProfit) + '/mo';
                    resNet.className = "text-sm font-semibold text-green-400";
                } else {
                    resNet.textContent = formatCurrency(0) + '/mo';
                    resNet.className = "text-sm font-medium text-zinc-500";
                }
            }

            elClips.addEventListener('input', calculate);
            elViews.addEventListener('input', calculate);
            elCpm.addEventListener('input', calculate);

            // Initial calculation
            calculate();
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-stone-950/80 border-b border-stone-800/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-semibold text-xs">K</div>
<span className="text-white font-semibold tracking-tighter text-lg">KLIPVEE</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-stone-400">
<a className="hover:text-white transition-colors" href="#calculator">Calculator</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-white text-black hover:bg-stone-200 text-sm font-medium px-4 py-2 rounded-full transition-colors" href="#">Start Free</a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-40 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-stone-800/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-xs font-medium text-stone-300 mb-8">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
                Perfect for beginners looking for side income
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6">
                Turn Videos Into <br className="hidden sm:block"/> Simple Side Income.
            </h1>
<p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                No editing skills needed. Upload a video. AI automatically creates short, engaging clips. You publish and monetize on YouTube Shorts and TikTok.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black hover:bg-stone-200 font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2" href="#">
                    Start Free
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-stone-900 border border-stone-800 text-white hover:bg-stone-800 font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2" href="#calculator">
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon>
                    See How Much I Can Earn
                </a>
</div>
<div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-stone-800 bg-stone-900/50 p-2 backdrop-blur-sm overflow-hidden shadow-2xl">

<div className="aspect-[16/9] rounded-xl bg-stone-950 border border-stone-800/50 flex flex-col relative overflow-hidden">
<div className="h-10 border-b border-stone-800/50 flex items-center px-4 gap-2 bg-stone-900/30">
<div className="w-3 h-3 rounded-full bg-stone-700"></div>
<div className="w-3 h-3 rounded-full bg-stone-700"></div>
<div className="w-3 h-3 rounded-full bg-stone-700"></div>
</div>
<div className="flex-1 p-8 flex items-center justify-center relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="flex flex-col items-center gap-4 z-10">
<iconify-icon className="text-6xl text-stone-700" icon="solar:video-frame-play-linear"></iconify-icon>
<p className="text-stone-500 text-sm font-medium">Generating 15 highly-engaging clips...</p>
<div className="w-64 h-1.5 bg-stone-800 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-stone-400 rounded-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-900 bg-stone-950/50 py-10">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-stone-500 mb-6 tracking-wide uppercase">Built to help you earn from platforms like</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon> Shorts</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:music-note-linear" width="24"></iconify-icon> TikTok</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:camera-linear" width="24"></iconify-icon> Reels</span>
</div>
</div>
</section>

<section className="py-24 relative" id="calculator">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Calculate Your Potential Income</h2>
<p className="text-stone-400 text-base max-w-xl mx-auto">Your earnings depend on how many clips you post, average views, and platform CPM. Keep consistency high to see results.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

<div className="lg:col-span-3 bg-stone-900 border border-stone-800 rounded-2xl p-6 md:p-8">
<div className="space-y-8">

<div>
<div className="flex justify-between items-end mb-4">
<div>
<label className="block text-sm font-medium text-white mb-1">Clips Published Per Month</label>
<p className="text-xs text-stone-500">More clips = more chances to go viral.</p>
</div>
<span className="text-xl font-semibold text-white bg-stone-950 px-3 py-1 rounded-lg border border-stone-800" id="val-clips">30</span>
</div>
<input className="w-full" id="input-clips" max="300" min="10" step="5" type="range" value="30"/>
<div className="flex justify-between text-xs text-stone-600 mt-2 font-medium">
<span>10</span>
<span>300</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<div>
<label className="block text-sm font-medium text-white mb-1">Average Views Per Clip</label>
<p className="text-xs text-stone-500">Conservative estimate for beginners.</p>
</div>
<span className="text-xl font-semibold text-white bg-stone-950 px-3 py-1 rounded-lg border border-stone-800" id="val-views">2,500</span>
</div>
<input className="w-full" id="input-views" max="50000" min="500" step="500" type="range" value="2500"/>
<div className="flex justify-between text-xs text-stone-600 mt-2 font-medium">
<span>500</span>
<span>50k+</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<div>
<label className="block text-sm font-medium text-white mb-1">Estimated CPM (RPM)</label>
<p className="text-xs text-stone-500">Earnings per 1,000 views. Varies by niche.</p>
</div>
<span className="text-xl font-semibold text-white bg-stone-950 px-3 py-1 rounded-lg border border-stone-800" id="val-cpm">$2.50</span>
</div>
<input className="w-full" id="input-cpm" max="8" min="1" step="0.1" type="range" value="2.5"/>
<div className="flex justify-between text-xs text-stone-600 mt-2 font-medium">
<span>$1.00</span>
<span>$8.00</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col gap-4">
<div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 md:p-8 flex flex-col justify-center h-full relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-stone-800/20 to-transparent pointer-events-none"></div>
<h3 className="text-sm font-medium text-stone-400 mb-2 relative z-10">Estimated Monthly Earnings</h3>
<div className="text-5xl font-semibold tracking-tighter text-white mb-6 relative z-10" id="result-monthly">$187.50</div>
<div className="space-y-4 relative z-10">
<div className="flex justify-between items-center py-3 border-t border-stone-800/50">
<span className="text-sm text-stone-400">Total Monthly Views</span>
<span className="text-sm font-medium text-white" id="result-total-views">75,000</span>
</div>
<div className="flex justify-between items-center py-3 border-t border-stone-800/50">
<span className="text-sm text-stone-400">Estimated Yearly Income</span>
<span className="text-sm font-medium text-white" id="result-yearly">$2,250.00</span>
</div>
<div className="flex justify-between items-center py-3 border-t border-stone-800/50">
<span className="text-sm text-stone-400">KlipVee Pro Cost</span>
<span className="text-sm font-medium text-stone-500">-$27.00/mo</span>
</div>
<div className="flex justify-between items-center py-3 border-t border-stone-800/50">
<span className="text-sm font-medium text-stone-300">Net Projected Profit</span>
<span className="text-sm font-semibold text-green-400" id="result-net">$160.50/mo</span>
</div>
</div>
</div>
<p className="text-xs text-stone-500 text-center px-4">
                        *This is an estimate. Actual earnings vary based on content quality, audience location, and platform algorithms.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 border-t border-stone-900" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">As Simple As 1-2-3</h2>
<p className="text-stone-400 text-base max-w-xl mx-auto">You don't need to learn complicated editing software. Our AI handles the heavy lifting.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-6 group-hover:border-stone-700 transition-colors shadow-lg">
<iconify-icon className="text-4xl text-stone-300" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-stone-500 mb-2 uppercase tracking-wider">Step 1</div>
<h3 className="text-xl font-medium text-white mb-2">Upload Long Video</h3>
<p className="text-sm text-stone-400 max-w-xs">Drop in a podcast, interview, or any long-form content. YouTube links work too.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-6 group-hover:border-stone-700 transition-colors shadow-lg">
<iconify-icon className="text-4xl text-stone-300" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-stone-500 mb-2 uppercase tracking-wider">Step 2</div>
<h3 className="text-xl font-medium text-white mb-2">AI Creates Clips</h3>
<p className="text-sm text-stone-400 max-w-xs">Our AI finds the most engaging moments, crops them, and adds viral captions instantly.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-6 group-hover:border-stone-700 transition-colors shadow-lg">
<iconify-icon className="text-4xl text-stone-300" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-stone-500 mb-2 uppercase tracking-wider">Step 3</div>
<h3 className="text-xl font-medium text-white mb-2">Publish &amp; Earn</h3>
<p className="text-sm text-stone-400 max-w-xs">Download your ready-to-post clips, upload them to Shorts or TikTok, and collect CPM revenue.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-900 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Why Beginners Win With Short-Form Content</h2>
<p className="text-stone-400 text-base mb-8 leading-relaxed">
                        The creator economy used to require expensive cameras, heavy editing, and years to build an audience. Short-form algorithms changed the rules. Now, algorithms reward consistency and engaging content over huge follower counts.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">No editing experience required</h4>
<p className="text-xs text-stone-500 mt-1">If you can click a button, you can create professional clips.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Zero upfront hardware costs</h4>
<p className="text-xs text-stone-500 mt-1">Everything runs in your browser. No fancy computer needed.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">You don't need thousands of followers</h4>
<p className="text-xs text-stone-500 mt-1">Shorts platforms push good content to new audiences immediately.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-800/20 to-transparent rounded-2xl blur-2xl"></div>
<div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl relative z-10 shadow-2xl">
<div className="flex items-center gap-4 mb-8 pb-8 border-b border-stone-800">
<div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-stone-400" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">New Creator Account</div>
<div className="text-xs text-stone-500">Started 3 weeks ago</div>
</div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-stone-400">Views this month</span>
<span className="text-white font-medium">84,200</span>
</div>
<div className="w-full h-1.5 bg-stone-950 rounded-full overflow-hidden">
<div className="w-[70%] h-full bg-white rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-stone-400">Clips Published</span>
<span className="text-white font-medium">42 / 50 Goal</span>
</div>
<div className="w-full h-1.5 bg-stone-950 rounded-full overflow-hidden">
<div className="w-[84%] h-full bg-stone-400 rounded-full"></div>
</div>
</div>
<div className="pt-4 flex items-end justify-between">
<div>
<div className="text-xs text-stone-500 mb-1">Estimated Revenue</div>
<div className="text-2xl font-semibold tracking-tight text-white">$210.50</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> Steady growth
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-900">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Everything You Need To Start</h2>
<p className="text-stone-400 text-base max-w-xl mx-auto">Stripped down to just the essentials. No confusing menus, just results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:bg-stone-900 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:scissors-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Auto Clip Creation</h3>
<p className="text-sm text-stone-400">AI finds the best moments and trims them perfectly for vertical screens.</p>
</div>
<div className="bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:bg-stone-900 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:text-square-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Ready-to-Post Captions</h3>
<p className="text-sm text-stone-400">Dynamic, animated captions are added automatically to keep viewers hooked.</p>
</div>
<div className="bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:bg-stone-900 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:lightbulb-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Viral Hooks</h3>
<p className="text-sm text-stone-400">The AI suggests titles and descriptions optimized for platform algorithms.</p>
</div>
<div className="bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:bg-stone-900 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:layers-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Bulk Generation</h3>
<p className="text-sm text-stone-400">Turn one 60-minute podcast into 30+ clips with a single click. Save hours.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-900 bg-stone-950/50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Real Beginners, Real Results</h2>
<p className="text-stone-400 text-base max-w-xl mx-auto">No overnight millionaire promises. Just realistic side income from consistency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-red-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-300 mb-6 leading-relaxed">"I have a full-time job and zero editing skills. KlipVee let me create 90 clips in one month by just uploading interviews I like. It takes me 10 minutes a day to schedule them."</p>
</div>
<div className="flex items-center gap-3 border-t border-stone-800 pt-4">
<div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-medium text-stone-400">M</div>
<div>
<div className="text-sm font-medium text-white">Mark T.</div>
<div className="text-xs text-stone-500">Side Hustler</div>
</div>
</div>
</div>
<div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-red-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-300 mb-6 leading-relaxed">"I started posting 2 clips a day on TikTok. Within a few weeks, some took off. Reached 45,000 views total so far. It's small, but seeing actual numbers is super motivating."</p>
</div>
<div className="flex items-center gap-3 border-t border-stone-800 pt-4">
<div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-medium text-stone-400">S</div>
<div>
<div className="text-sm font-medium text-white">Sarah J.</div>
<div className="text-xs text-stone-500">Student</div>
</div>
</div>
</div>
<div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-red-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-300 mb-6 leading-relaxed">"Earned my first $120 in 30 days from YouTube Shorts monetization. The subscription paid for itself multiple times over. Best tool for beginners hands down."</p>
</div>
<div className="flex items-center gap-3 border-t border-stone-800 pt-4">
<div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-medium text-stone-400">D</div>
<div>
<div className="text-sm font-medium text-white">David L.</div>
<div className="text-xs text-stone-500">Retail Worker</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-900" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Simple Pricing. Start Earning.</h2>
<p className="text-stone-400 text-base max-w-xl mx-auto">Choose a plan that fits your side income goals. Cancel anytime.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-stone-900/50 border border-stone-800 p-8 rounded-3xl">
<h3 className="text-lg font-medium text-white mb-2">Free</h3>
<div className="text-stone-400 text-sm mb-6">Test the waters</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">$0</span>
</div>
<a className="block w-full text-center bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium py-2.5 rounded-full transition-colors mb-8" href="#">Get Started</a>
<ul className="space-y-3 text-sm text-stone-400">
<li className="flex items-center gap-3"><iconify-icon className="text-stone-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> 5 clips total</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> KlipVee Watermark</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Auto Captions</li>
</ul>
</div>

<div className="bg-stone-900 border border-stone-700 p-8 rounded-3xl relative shadow-2xl transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Best for serious side earners
                    </div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="text-stone-400 text-sm mb-6">Maximize your earnings</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$27</span>
<span className="text-sm text-stone-500">/mo</span>
</div>
<a className="block w-full text-center bg-white hover:bg-stone-200 text-black text-sm font-medium py-2.5 rounded-full transition-colors mb-8 shadow-sm" href="#">Start Pro Trial</a>
<ul className="space-y-3 text-sm text-stone-300">
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> 250 clips per month</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> No Watermarks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Advanced analytics</li>
</ul>
</div>

<div className="bg-stone-900/50 border border-stone-800 p-8 rounded-3xl">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-stone-400 text-sm mb-6">Hobbyist creator</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$9.99</span>
<span className="text-sm text-stone-500">/mo</span>
</div>
<a className="block w-full text-center bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium py-2.5 rounded-full transition-colors mb-8" href="#">Choose Starter</a>
<ul className="space-y-3 text-sm text-stone-400">
<li className="flex items-center gap-3"><iconify-icon className="text-stone-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> 100 clips per month</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> No Watermarks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Basic analytics</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-900/20 border-t border-stone-900 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-stone-800/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Start Building Your Side Income Today.</h2>
<p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">Join beginners who are already turning simple videos into passive views and earnings.</p>
<a className="inline-flex items-center justify-center bg-white text-black hover:bg-stone-200 font-medium px-8 py-4 rounded-full transition-colors gap-2 text-lg" href="#">
                Create My First Clips
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-6 text-xs text-stone-500">No credit card required for the free plan.</p>
</div>
</section>

<footer className="border-t border-stone-900 bg-stone-950 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80">
<div className="w-5 h-5 rounded-md bg-white text-black flex items-center justify-center font-semibold text-[10px]">K</div>
<span className="text-white font-semibold tracking-tighter text-sm">KLIPVEE</span>
</div>
<div className="flex gap-6 text-sm text-stone-500">
<a className="hover:text-stone-300 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-300 transition-colors" href="#">Contact</a>
</div>
<p className="text-xs text-stone-600">© 2024 KlipVee. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
