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
      

<div className="w-full flex flex-col">
<div className="bg-[#c24b46] w-full h-3"></div>
<div className="h-3 w-full bg-[#d67035]"></div>
<div className="h-3 w-full bg-[#e8b056]"></div>
<div className="bg-[#2d3235] w-full h-3"></div>
</div>

<nav className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center z-10 relative">
<div className="mb-4 md:mb-0">
<h1 className="text-3xl tracking-tight font-semibold text-[#c24b46] drop-shadow-[2px_2px_0_#2d3235]">
                Importism
            </h1>
</div>
<div className="flex gap-8 text-lg font-medium items-center">
<a className="hover:text-[#c24b46] hover:underline decoration-2 underline-offset-4 transition-all" href="#">Dashboard</a>
<a className="hover:text-[#c24b46] hover:underline decoration-2 underline-offset-4 transition-all" href="#">Pricing</a>
<a className="hover:text-[#c24b46] hover:underline decoration-2 underline-offset-4 transition-all" href="#">Login</a>
<a className="hidden md:inline-block bg-[#2d3235] text-[#efeadd] px-5 py-2 border-2 border-[#2d3235] retro-shadow-hover transition-all" href="#">
                Sign Up
            </a>
</div>
</nav>

<section className="md:py-24 grid md:grid-cols-2 gap-12 w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-12 gap-y-12 items-center">

<div className="space-y-8">
<div className="inline-block border-2 border-[#2d3235] px-3 py-1 bg-[#e8b056] text-[#2d3235] text-sm font-semibold tracking-wide uppercase">
                Now in Public Beta
            </div>
<h2 className="md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight">
                The <span className="italic text-[#c24b46]">lightweight</span> BI tool for Google Sheets.
            </h2>
<p className="text-xl md:text-2xl text-[#5a5f63] leading-relaxed max-w-lg">
                Stop manually copy-pasting CSVs. Automate your sales and business data imports directly into the sheets you already use.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-[#1d8f6d] text-white text-lg px-8 py-4 border-2 border-[#2d3235] retro-shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d3235] transition-all font-semibold flex items-center justify-center gap-3">
                    Start Automating
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="bg-transparent text-[#2d3235] text-lg px-8 py-4 border-2 border-[#2d3235] hover:bg-[#e8b056] transition-colors font-semibold">
                    View Demo
                </button>
</div>
<p className="text-sm text-[#5a5f63]">No credit card required • 14-day free trial</p>
</div>

<div className="relative w-full flex justify-center md:justify-end">

<div className="absolute top-0 right-0 w-3/4 h-full bg-[#d67035] opacity-20 -z-10 translate-x-4 translate-y-4"></div>
<div className="bg-white border-2 border-[#2d3235] p-8 w-full max-w-md shadow-[8px_8px_0px_0px_#e8b056] relative z-0">
<div className="flex items-center justify-between mb-8 border-b-2 border-[#efeadd] pb-4">
<h3 className="text-2xl font-semibold tracking-tight">New Connection</h3>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#c24b46] border border-[#2d3235]"></div>
<div className="w-3 h-3 rounded-full bg-[#e8b056] border border-[#2d3235]"></div>
</div>
</div>
<form className="space-y-6">
<div className="space-y-2">
<label className="block text-lg font-medium">Data Source</label>
<div className="relative">
<select className="w-full bg-white border-2 border-[#2d3235] px-4 py-3 text-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#e8b056] focus:border-[#2d3235]">
<option>Stripe Sales Data</option>
<option>Shopify Orders</option>
<option>PostgreSQL DB</option>
</select>
<i className="absolute right-4 top-4 w-5 h-5 pointer-events-none text-[#2d3235]" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="block text-lg font-medium">Destination Sheet URL</label>
<input className="w-full bg-white border-2 border-[#2d3235] px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#e8b056] focus:border-[#2d3235] text-gray-500 font-mono" type="text" value="docs.google.com/spreadsheets/d/..."/>
</div>
<div className="space-y-2">
<label className="block text-lg font-medium">Sync Schedule</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 border-2 border-[#2d3235] p-3 flex-1 justify-center cursor-pointer bg-[#efeadd]">
<input checked="" className="accent-[#2d3235] w-4 h-4" name="freq" type="radio"/>
<span>Hourly</span>
</label>
<label className="flex items-center gap-2 border-2 border-[#2d3235] p-3 flex-1 justify-center cursor-pointer hover:bg-[#efeadd] transition-colors">
<input className="accent-[#2d3235] w-4 h-4" name="freq" type="radio"/>
<span>Daily</span>
</label>
</div>
</div>
<button className="w-full bg-[#2d3235] text-white font-semibold py-4 mt-4 hover:bg-[#c24b46] transition-colors text-lg border-2 border-[#2d3235]" type="button">
                        Establish Link
                    </button>
</form>
</div>
</div>
</section>

<div className="w-full border-y-2 border-[#2d3235] bg-white overflow-hidden py-4">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#1d8f6d]" data-lucide="sheet"></i>
<span className="text-lg font-semibold uppercase tracking-wide">Native Integration</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#e8b056]" data-lucide="zap"></i>
<span className="text-lg font-semibold uppercase tracking-wide">Real-time Sync</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#c24b46]" data-lucide="lock"></i>
<span className="text-lg font-semibold uppercase tracking-wide">Encrypted Data</span>
</div>
</div>
</div>

<section className="w-full max-w-7xl mx-auto px-6 py-24">
<div className="mb-16">
<h3 className="text-4xl font-semibold tracking-tight mb-4">Why use Importism?</h3>
<p className="text-xl text-[#5a5f63] max-w-2xl">Enterprise BI tools are bloated and expensive. We keep it simple so you can focus on analysis, not configuration.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border-2 border-[#2d3235] p-8 retro-shadow flex flex-col items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300">
<div className="p-3 bg-[#c24b46] text-white border-2 border-[#2d3235] shadow-[4px_4px_0px_0px_#2d3235]">
<i className="w-8 h-8" data-lucide="database"></i>
</div>
<h4 className="text-2xl font-semibold mt-4">Connect Anything</h4>
<p className="text-lg text-[#5a5f63] leading-relaxed">
                    Postgres, MySQL, Stripe, Shopify, or custom APIs. If it has data, we can push it to your sheet.
                </p>
</div>

<div className="bg-white border-2 border-[#2d3235] p-8 retro-shadow flex flex-col items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300">
<div className="p-3 bg-[#e8b056] text-[#2d3235] border-2 border-[#2d3235] shadow-[4px_4px_0px_0px_#2d3235]">
<i className="w-8 h-8" data-lucide="clock"></i>
</div>
<h4 className="text-2xl font-semibold mt-4">Set &amp; Forget</h4>
<p className="text-lg text-[#5a5f63] leading-relaxed">
                    Configure your schedule once. We handle the cron jobs, retries, and error handling automatically.
                </p>
</div>

<div className="bg-white border-2 border-[#2d3235] p-8 retro-shadow flex flex-col items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300">
<div className="p-3 bg-[#1d8f6d] text-white border-2 border-[#2d3235] shadow-[4px_4px_0px_0px_#2d3235]">
<i className="w-8 h-8" data-lucide="dollar-sign"></i>
</div>
<h4 className="text-2xl font-semibold mt-4">Fraction of the Cost</h4>
<p className="text-lg text-[#5a5f63] leading-relaxed">
                    Stop paying $500/mo for features you don't use. Importism is designed for lean teams and SMBs.
                </p>
</div>
</div>
</section>

<section className="w-full bg-[#2d3235] text-[#efeadd] py-24 border-y-2 border-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Your data, where you need it.
                    </h3>
<div className="space-y-8 mt-12">
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#c24b46] border-2 border-[#efeadd] text-xl font-bold">1</div>
<div className="">
<h4 className="text-2xl font-semibold mb-2">Connect Source</h4>
<p className="text-lg text-gray-400">Securely authenticate with your data provider using OAuth or API keys.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#d67035] border-2 border-[#efeadd] text-xl font-bold">2</div>
<div className="">
<h4 className="text-2xl font-semibold mb-2">Map Columns</h4>
<p className="text-lg text-gray-400">Select which fields you want and map them to specific columns in Sheets.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#e8b056] border-2 border-[#efeadd] text-[#2d3235] text-xl font-bold">3</div>
<div>
<h4 className="text-2xl font-semibold mb-2">Automate</h4>
<p className="text-lg text-gray-400">Choose your frequency. We'll email you a summary if anything fails.</p>
</div>
</div>
</div>
</div>

<div className="bg-white text-[#2d3235] p-2 border-2 border-white shadow-[10px_10px_0px_0px_#c24b46]">
<div className="bg-[#f8f9fa] border border-gray-300 h-full p-4 overflow-hidden">

<div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-300">
<div className="w-8 h-8 bg-[#1d8f6d] rounded flex items-center justify-center text-white"><i className="w-5 h-5" data-lucide="table"></i></div>
<span className="text-lg font-semibold">Q3_Sales_Report</span>
</div>

<div className="grid grid-cols-4 gap-px bg-gray-300 border border-gray-300">
<div className="bg-gray-100 p-2 text-sm font-bold">Date</div>
<div className="bg-gray-100 p-2 text-sm font-bold">Product</div>
<div className="bg-gray-100 p-2 text-sm font-bold">Rev</div>
<div className="bg-gray-100 p-2 text-sm font-bold">Status</div>

<div className="bg-white p-2 text-sm font-mono">2023-10-01</div>
<div className="bg-white p-2 text-sm font-mono">Pro Plan</div>
<div className="bg-white p-2 text-sm font-mono">$29.00</div>
<div className="bg-[#ecfdf5] text-green-700 p-2 text-sm font-mono flex items-center">Paid</div>

<div className="bg-white p-2 text-sm font-mono">2023-10-02</div>
<div className="bg-white p-2 text-sm font-mono">Ent. Lic</div>
<div className="bg-white p-2 text-sm font-mono">$499.00</div>
<div className="bg-[#ecfdf5] text-green-700 p-2 text-sm font-mono flex items-center">Paid</div>

<div className="bg-white p-2 text-sm font-mono">2023-10-02</div>
<div className="bg-white p-2 text-sm font-mono">Add-on</div>
<div className="bg-white p-2 text-sm font-mono">$15.00</div>
<div className="bg-[#fffbeb] text-yellow-700 p-2 text-sm font-mono flex items-center">Pending</div>

<div className="bg-white p-2 text-sm font-mono">2023-10-03</div>
<div className="bg-white p-2 text-sm font-mono">Pro Plan</div>
<div className="bg-white p-2 text-sm font-mono">$29.00</div>
<div className="bg-[#ecfdf5] text-green-700 p-2 text-sm font-mono flex items-center">Paid</div>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
<i className="w-4 h-4 text-[#1d8f6d]" data-lucide="check-circle"></i>
                            Last synced: 2 mins ago via Importism
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to ditch the manual CSV exports?</h2>
<p className="text-xl text-[#5a5f63] mb-12">Start your 14-day free trial. No feature limitations.</p>
<div className="bg-white border-2 border-[#2d3235] p-8 max-w-lg mx-auto shadow-[8px_8px_0px_0px_#2d3235]">
<div className="text-lg font-semibold text-[#c24b46] mb-2">Early Adopter Plan</div>
<div className="text-6xl font-semibold mb-6">$19<span className="text-2xl text-[#5a5f63] font-normal">/mo</span></div>
<ul className="text-left space-y-4 mb-8 text-lg">
<li className="flex items-center gap-3"><i className="text-[#1d8f6d] w-6 h-6" data-lucide="check"></i> Unlimited Connections</li>
<li className="flex items-center gap-3"><i className="text-[#1d8f6d] w-6 h-6" data-lucide="check"></i> Hourly Sync Frequency</li>
<li className="flex items-center gap-3"><i className="text-[#1d8f6d] w-6 h-6" data-lucide="check"></i> Email Alerts</li>
</ul>
<button className="w-full bg-[#1d8f6d] text-white text-xl py-4 border-2 border-[#2d3235] font-semibold hover:bg-[#166e51] transition-colors">
                Start Free Trial
            </button>
<div className="mt-4 text-center">
<span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 relative">
                    OR
                    <div className="absolute top-1/2 left-full w-12 h-px bg-gray-300 ml-2"></div>
<div className="absolute top-1/2 right-full w-12 h-px bg-gray-300 mr-2"></div>
</span>
</div>
<button className="w-full bg-white text-[#2d3235] text-lg py-3 mt-4 border-2 border-[#2d3235] font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">

<svg className="w-5 h-5" viewbox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                Sign up with Google
            </button>
</div>
</section>

<footer className="w-full bg-white border-t-2 border-[#2d3235] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<h4 className="text-xl font-bold mb-4">Importism</h4>
<p className="text-lg text-[#5a5f63]">The retro-simple BI tool for modern businesses.</p>
</div>
<div className="flex gap-12 text-lg">
<div className="flex flex-col gap-3">
<span className="font-semibold text-[#2d3235]">Product</span>
<a className="text-[#5a5f63] hover:text-[#c24b46]" href="#">Features</a>
<a className="text-[#5a5f63] hover:text-[#c24b46]" href="#">Pricing</a>
<a className="text-[#5a5f63] hover:text-[#c24b46]" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-semibold text-[#2d3235]">Legal</span>
<a className="text-[#5a5f63] hover:text-[#c24b46]" href="#">Privacy</a>
<a className="text-[#5a5f63] hover:text-[#c24b46]" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 text-center text-[#5a5f63] text-sm">
            © 2023 Importism Inc. Built for Google Sheets™ users.
        </div>
</footer>


    </>
  );
}
