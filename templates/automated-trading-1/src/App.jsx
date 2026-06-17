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
      

<div className="bg-slate-900 text-white py-3 px-4 text-center text-sm font-medium tracking-wide">
<span>Exclusive access to Gold EA now open for new members. <span className="text-white/70">Limited spots available.</span></span>
<a className="ml-4 underline underline-offset-2 hover:text-blue-400 transition-colors" href="#">Join Waitlist</a>
</div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-slate-900">Altara</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Performance</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pairs EA</a>
<a className="hover:text-slate-900 transition-colors" href="#">Gold EA</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-blue-700" href="#">Login</a>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="pt-20 pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<a className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm mb-8 hover:underline" href="#">
                Verified by Myfxbook Audits
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
                Step 1: Create an account &amp; connect to our bot<br/>
                Step 2: Earn 4–8% per month passively
            </h1>
<div className="flex justify-center mb-16">
<a className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-slate-900/20" href="#">
                    Start Automating Now
                </a>
</div>
</div>

<div className="max-w-6xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative bg-[#0B1120] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex flex-col md:flex-row">

<div className="hidden md:flex w-64 border-r border-slate-800 flex-col p-6 gap-6">
<div className="space-y-4">
<div className="flex items-center gap-3 text-white font-medium">
<i className="text-blue-500 w-5 h-5" data-lucide="layout-dashboard"></i> Dashboard
                        </div>
<div className="flex items-center gap-3 text-slate-400">
<i className="w-5 h-5" data-lucide="zap"></i> Pairs EA
                        </div>
<div className="flex items-center gap-3 text-slate-400">
<i className="w-5 h-5" data-lucide="gem"></i> Gold EA
                        </div>
<div className="flex items-center gap-3 text-slate-400">
<i className="w-5 h-5" data-lucide="history"></i> History
                        </div>
</div>
<div className="mt-auto p-4 bg-slate-900/50 rounded-xl border border-slate-800">
<p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Monthly Target</p>
<p className="text-2xl text-white font-medium">6.4% <span className="text-green-500 text-sm">On Track</span></p>
</div>
</div>

<div className="flex-1 p-8 flex flex-col">
<div className="flex justify-between items-end mb-10">
<div>
<h3 className="text-slate-400 text-sm font-medium mb-1">Total Net Profit</h3>
<div className="text-4xl text-white font-medium tracking-tight">$124,592.00</div>
</div>
<div className="text-right">
<div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm font-medium">
<i className="w-4 h-4" data-lucide="trending-up"></i> +8.2% This Month
                            </div>
</div>
</div>

<div className="flex-1 w-full relative">

<div className="absolute inset-0 flex flex-col justify-between text-slate-700 text-xs">
<div className="border-t border-slate-800 w-full pt-1"></div>
<div className="border-t border-slate-800 w-full pt-1"></div>
<div className="border-t border-slate-800 w-full pt-1"></div>
<div className="border-t border-slate-800 w-full pt-1"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<path className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" d="M0 150 C 100 140, 200 160, 300 100 C 400 40, 500 80, 600 50 C 700 20, 800 30, 900 10" fill="none" stroke="#3b82f6" strokeWidth="3"></path>
<path d="M0 150 L 900 150" opacity="0.5" stroke="#ef4444" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
<div className="absolute top-10 right-20 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl">
<div className="text-xs text-slate-400">Current Trade: XAUUSD</div>
<div className="text-white font-medium">Buy 0.5 Lots</div>
<div className="text-green-400 text-xs mt-1">+$240.50</div>
</div>
</div>
</div>

<div className="hidden lg:block w-72 bg-slate-900/50 border-l border-slate-800 p-6">
<h4 className="text-white font-medium mb-6">Recent Activity</h4>
<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-slate-300">EURUSD Close</span>
</div>
<span className="text-green-400">+$124</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-slate-300">GBPUSD Close</span>
</div>
<span className="text-green-400">+$89</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-slate-300">XAUUSD SL</span>
</div>
<span className="text-red-400">-$42</span>
</div>
<div className="mt-6 pt-6 border-t border-slate-800">
<div className="text-center text-slate-400 text-xs mb-2">Win Rate</div>
<div className="flex justify-center items-center gap-2">
<div className="w-16 h-16 rounded-full border-4 border-blue-600 flex items-center justify-center text-white text-sm font-medium">76%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-blue-600 font-medium mb-2">Live Verified Results</p>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Verified by institutional grade audits</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-900 font-medium text-lg mb-6">"You have transparency in all trading, the people that are attracted to Altara are investors looking for steady, low-drawdown growth. It's not about gambling."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full" src="https://ui-avatars.com/api/?name=Alex+H&amp;background=0D1117&amp;color=fff"/>
<div>
<div className="text-slate-900 font-semibold">Alex Hormozi</div>
<div className="text-slate-500 text-sm">Acquisition.com</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-900 font-medium text-lg mb-6">"Altara is the only attribution tool we trust. From Pairs EA to the Gold EA — it's a must-have to know exactly how risk is being managed."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">iClosed</div>
<div>
<div className="text-slate-900 font-semibold">iClosed.io</div>
<div className="text-blue-500 text-sm">#1 sales bot built for high ticket</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-900 font-medium text-lg mb-6">"Altara has had a massive impact when tracking our compounding returns. Crunching the data of our 500k+ active portfolio, we noticed an immediate stabilization."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white"><i className="w-6 h-6" data-lucide="activity"></i></div>
<div>
<div className="text-slate-900 font-semibold">Whop</div>
<div className="text-slate-500 text-sm">Whop.com</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-900 font-medium text-lg mb-6">"Altara has been critical for figuring out where our best returns are really coming from. These days the path from deposit to profit is a mess, but with Altara, we finally know."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold">PT</div>
<div>
<div className="text-slate-900 font-semibold">Playboy Team</div>
<div className="text-blue-500 text-sm">International Lifestyle Magazine</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-900 font-medium text-lg mb-6">"In just 6 months, Altara allowed us to scale our account by 63%. The ROI increase from increased tracking accuracy outweighs the cost. It's a simple math decision."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full" src="https://ui-avatars.com/api/?name=Sam+O&amp;background=random"/>
<div>
<div className="text-slate-900 font-semibold">Sam Ovens</div>
<div className="text-slate-500 text-sm">Skool.com</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-900 font-medium text-lg mb-6">"If you don't use Altara you aren't even awake. Use Pairs EA. The discipline is unmatched compared to manual trading."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full" src="https://ui-avatars.com/api/?name=Frank+K&amp;background=333&amp;color=fff"/>
<div>
<div className="text-slate-900 font-semibold">Frank Kern</div>
<div className="text-slate-500 text-sm">FrankKern.com</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-xl font-medium text-slate-900 mb-10">Used by over 4,000 traders &amp; funds like</h3>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">

<div className="h-8 w-32 bg-slate-200 rounded"></div>
<div className="h-8 w-32 bg-slate-200 rounded"></div>
<div className="h-8 w-32 bg-slate-200 rounded"></div>
<div className="h-8 w-32 bg-slate-200 rounded"></div>
<div className="h-8 w-32 bg-slate-200 rounded"></div>
<div className="h-8 w-32 bg-slate-200 rounded"></div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto text-center px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-12">Trusted by the biggest authorities in finance</h2>
<div className="grid grid-cols-4 md:grid-cols-8 gap-4">

<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=Dean+G&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs font-medium text-slate-600">Dean G.</span>
</div>
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=Floyd+M&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs font-medium text-slate-600">Floyd M.</span>
</div>
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=Click+F&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs font-medium text-slate-600">Tony R.</span>
</div>
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=Mike+T&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs font-medium text-slate-600">Mike T.</span>
</div>
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=Grant+C&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs font-medium text-slate-600">Grant C.</span>
</div>
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=Daymond&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs font-medium text-slate-600">Daymond</span>
</div>
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=Jay+S&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs font-medium text-slate-600">Jay S.</span>
</div>
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=Pudgy&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs font-medium text-slate-600">Pudgy</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 space-y-32">

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Trusted by 7-8 figure e-commerce brands investing surplus cash</h3>
<p className="text-lg mb-8 leading-relaxed">
                        Altara is a GAME CHANGER. I can see which pairs are performing well and scale without guesswork.
                        <br/><br/>
                        Before Altara, tracking the performance of our weekly manual trades was a guessing game. Altara changed the game for us. It gave us clear insights into the bot's performance, allowing us to simply check Myfxbook to see successful ones.
                    </p>
<div className="flex items-center gap-4 text-sm text-slate-500">
<img className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=Jason+W&amp;background=random"/>
<div>
<div className="font-semibold text-slate-900">Jason West</div>
<div>⭐⭐⭐⭐⭐</div>
</div>
</div>
</div>
<div className="relative">
<div className="bg-white p-4 rounded-xl shadow-xl border border-slate-200 transform rotate-2">

<div className="bg-slate-100 rounded h-64 w-full flex items-center justify-center flex-col gap-3">
<div className="w-3/4 h-32 bg-slate-200 rounded relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-20 bg-green-500/20"></div>
<svg className="w-full h-full" preserveaspectratio="none"><path d="M0 100 L 50 80 L 100 90 L 150 40 L 200 60 L 250 20 L 300 10" fill="none" stroke="#22c55e" strokeWidth="2"></path></svg>
</div>
<div className="flex gap-2 w-3/4">
<div className="h-4 w-1/3 bg-slate-300 rounded"></div>
<div className="h-4 w-1/3 bg-slate-300 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="bg-white p-4 rounded-xl shadow-xl border border-slate-200 transform -rotate-1">

<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-900 rounded-lg aspect-[9/16] p-4 flex flex-col">
<div className="text-white text-xs mb-4">Altara VIP Signals</div>
<div className="bg-slate-800 p-2 rounded mb-2">
<div className="text-green-400 text-[10px]">XAUUSD BUY NOW</div>
<div className="h-1 w-10 bg-slate-600 rounded mt-1"></div>
</div>
<div className="bg-slate-800 p-2 rounded mb-2">
<div className="text-blue-400 text-[10px]">TP HIT +40 Pips</div>
</div>
</div>
<div className="bg-white border border-slate-100 rounded-lg aspect-[9/16] p-4 shadow-inner flex flex-col justify-center items-center">
<div className="text-3xl font-bold text-slate-900">8%</div>
<div className="text-xs text-slate-500">Last Month</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">"I would say we are seeing 50% less stress just using the software"</h3>
<p className="text-lg mb-8 leading-relaxed">
                        We used Altara to track our highest spending e-commerce Accounts. When we aggressively scaled a fragrance brand to multiple 8-figure days, we used real-time decision that allowed us to passively cut losing EA pairs and double down on the winners.
                        <br/><br/>
                        I would say that we are seeing 50% less chart-watching time by just using the software.
                    </p>
<div className="flex items-center gap-4 text-sm text-slate-500">
<div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">S</div>
<div>
<div className="font-semibold text-slate-900">Sultan of Style</div>
<div>⭐⭐⭐⭐⭐</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Altara has been a pivotal factor in transforming our investing strategy... propelled us towards unprecedented levels of advertising success.</h3>
<p className="text-lg mb-8 leading-relaxed">
                        This insight was a game changer, especially during the volatile markets of 2023. Thanks to Altara, we were able to identify which trading bots were actually delivering profit, focusing our resources on the Gold EA.
                    </p>
<div className="flex items-center gap-4 text-sm text-slate-500">
<img className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=Noah+V&amp;background=random"/>
<div>
<div className="font-semibold text-slate-900">Noah Verbeke</div>
<div>⭐⭐⭐⭐⭐</div>
</div>
</div>
</div>
<div className="relative">
<div className="bg-white p-4 rounded-xl shadow-xl border border-slate-200 transform rotate-1">

<div className="grid grid-cols-2 gap-2">
<div className="bg-slate-100 h-32 rounded"></div>
<div className="bg-slate-100 h-32 rounded"></div>
<div className="bg-slate-100 h-32 rounded"></div>
<div className="bg-slate-100 h-32 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">Passive Income Realized and Verified<br/>by thousands of customers</h2>
<p className="text-slate-500 mb-16">Don't take our word for it.</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

<div className="group cursor-pointer">
<div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video mb-4 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
<i className="w-5 h-5 text-white fill-white" data-lucide="play"></i>
</div>
</div>
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Pairs EA Scaled My Account 25%</h4>
<p className="text-sm text-slate-500">"With Altara you get better data with more precision"</p>
</div>

<div className="group cursor-pointer">
<div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video mb-4 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
<i className="w-5 h-5 text-white fill-white" data-lucide="play"></i>
</div>
</div>
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Altara for High Net Worth</h4>
<p className="text-sm text-slate-500">"See your profits exactly, it's not a mess, but verified calls"</p>
</div>

<div className="group cursor-pointer">
<div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video mb-4 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
<i className="w-5 h-5 text-white fill-white" data-lucide="play"></i>
</div>
</div>
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Can't imagine manual trading now</h4>
<p className="text-sm text-slate-500">"See what bots are actually driving your highest ROI (with 90% accuracy)."</p>
</div>

<div className="group cursor-pointer">
<div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video mb-4 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
<i className="w-5 h-5 text-white fill-white" data-lucide="play"></i>
</div>
</div>
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Stop losing money to emotion</h4>
<p className="text-sm text-slate-500">"Get clarity where the profit comes from and cut the bad trades."</p>
</div>

<div className="group cursor-pointer">
<div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video mb-4 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
<i className="w-5 h-5 text-white fill-white" data-lucide="play"></i>
</div>
</div>
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Altara: Helping you scale to 5 figures</h4>
<p className="text-sm text-slate-500">"Since integrating with Altara, we scaled to $25k/mo without spending time."</p>
</div>

<div className="group cursor-pointer">
<div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video mb-4 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
<i className="w-5 h-5 text-white fill-white" data-lucide="play"></i>
</div>
</div>
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Stop manually trading with bad risk</h4>
<p className="text-sm text-slate-500">"Altara doesn't just work for running bots, be able to map out full client journey."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-20">Why Altara?</h2>
<div className="grid md:grid-cols-3 gap-12">
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-blue-600">
<i className="w-8 h-8" data-lucide="fingerprint"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Superior Tracking</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Altara tracks trades significantly better than ad platforms or manual journals.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-blue-600">
<i className="w-8 h-8" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Smarter Decisions</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Better data means better ad buying decisions and risk management.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-blue-600">
<i className="w-8 h-8" data-lucide="bot"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI-Driven Bot</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">We use this data with AI optimization to improve your passive income targeting.</p>
</div>
</div>
<div className="mt-20">
<p className="font-semibold text-slate-900">The result: more sales for less ad spend &amp; stress.</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-16">How do I know it works?</h2>
<div className="flex flex-col md:flex-row justify-center items-start gap-8 relative">

<div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10"></div>
<div className="flex-1 flex flex-col items-center">
<div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-6 z-10">1</div>
<h4 className="font-semibold text-slate-900 mb-2">Trusted by thousands</h4>
<p className="text-sm text-slate-500">Thousands of businesses use Altara daily.</p>
</div>
<div className="flex-1 flex flex-col items-center">
<div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-6 z-10">2</div>
<h4 className="font-semibold text-slate-900 mb-2">Used by top brands</h4>
<p className="text-sm text-slate-500">Major well known 7-8 figure brands use us.</p>
</div>
<div className="flex-1 flex flex-col items-center">
<div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-6 z-10">3</div>
<h4 className="font-semibold text-slate-900 mb-2">Guaranteed results</h4>
<p className="text-sm text-slate-500">We GUARANTEE it works for you or you don't pay a cent.</p>
</div>
</div>
<div className="mt-20 flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white">
<i className="w-8 h-8" data-lucide="bar-chart-2"></i>
</div>
<p className="text-sm text-slate-500">To be blunt: ALTARA is proven to work.</p>
</div>
<div className="mt-16">
<p className="text-blue-500 font-medium mb-4">What do you mean you GUARANTEE it works?</p>
<h3 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
                    We literally GUARANTEE you see an increase in ad ROI/results you are happy with or you do not pay. the end.
                </h3>
</div>
</div>
</section>

<section className="bg-black py-32 px-6">
<div className="max-w-5xl mx-auto bg-[#050505] border border-white/10 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8">
                    Our tracking AI will give you a boost<br/>in AD ROI... or you don't pay
                </h2>
<p className="text-slate-400 mb-10 text-lg">
                    Let us show you how. Book a 5-minute<br/>demo below.
                </p>
<a className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-200 transition-colors inline-block" href="#">
                    Book your demo
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
</div>
<div className="flex gap-2 mb-4">
<div className="w-32 h-10 bg-black rounded border border-slate-800 flex items-center justify-center text-white text-xs gap-1 cursor-pointer">
<i className="w-4 h-4 fill-white" data-lucide="apple"></i> App Store
                    </div>
<div className="w-32 h-10 bg-black rounded border border-slate-800 flex items-center justify-center text-white text-xs gap-1 cursor-pointer">
<i className="w-4 h-4 fill-white" data-lucide="play"></i> Google Play
                    </div>
</div>
<div className="flex gap-2">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><span className="font-bold text-xs">SOC2</span></div>
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><span className="font-bold text-xs">GDPR</span></div>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">Product</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">AI Tracking</a></li>
<li><a className="hover:text-slate-900" href="#">Ad Reporting</a></li>
<li><a className="hover:text-slate-900" href="#">Results</a></li>
<li><a className="hover:text-slate-900" href="#">Agency</a></li>
<li><a className="hover:text-slate-900" href="#">Updates</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">About us</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">What we do</a></li>
<li><a className="hover:text-slate-900" href="#">Pricing</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Terms of service</a></li>
<li><a className="hover:text-slate-900" href="#">Privacy</a></li>
<li><a className="hover:text-slate-900" href="#">Cookies</a></li>
<li><a className="hover:text-slate-900" href="#">Trust center</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">Support</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Documentation</a></li>
<li><a className="hover:text-slate-900" href="#">Community Hub</a></li>
<li><a className="hover:text-slate-900" href="#">API</a></li>
<li><a className="hover:text-slate-900" href="#">Contact Support</a></li>
<li><a className="hover:text-slate-900" href="#">Affiliate program</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2024 Altara Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a href="#">Facebook Community</a>
<a href="#">X</a>
<a href="#">LinkedIn</a>
</div>
</div>
</footer>


    </>
  );
}
