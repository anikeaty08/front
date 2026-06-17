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
      

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-black/80 border-zinc-900">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-zinc-50">EquityPandit</span>
<div className="border-l pl-2 border-zinc-700">
<span className="text-xs uppercase font-medium tracking-widest leading-none block text-green-300">Investment<br/>Advisor</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="flex items-center gap-2 text-base font-medium text-zinc-50" href="#">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i> Home
                </a>
<a className="flex items-center gap-2 text-base font-medium transition-colors text-zinc-400 hover:text-zinc-50" href="#">
<i className="w-4 h-4" data-lucide="layout-grid" strokeWidth="1.5"></i> Plans &amp; Pricing
                </a>
<a className="flex items-center gap-2 text-base font-medium transition-colors text-zinc-400 hover:text-zinc-50" href="#">
<i className="w-4 h-4" data-lucide="phone-call" strokeWidth="1.5"></i> Contact Us
                </a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden sm:flex items-center gap-2 text-base font-medium text-zinc-50" href="#">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i> Login
                </a>
<a className="px-5 py-2.5 rounded-lg text-base font-medium transition-colors shadow-sm bg-zinc-50 text-black hover:bg-zinc-200" href="#">
                    Get Started
                </a>
</div>
</div>
</header>

<section className="text-center max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-50">Start Your Wealth Creation Journey</h1>
<p className="text-lg max-w-2xl mx-auto text-zinc-400">Invest with conviction using strategies built for growth, stability, and opportunity.</p>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col border rounded-2xl overflow-hidden transition-shadow hover:shadow-md border-indigo-900 bg-indigo-950/30">
<div className="p-6 border-b bg-indigo-900/60 border-indigo-900">
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-8 h-8 rounded font-semibold text-lg tracking-tighter bg-zinc-50 text-black">EP</div>
<h2 className="text-2xl font-semibold tracking-tight uppercase text-zinc-50">Alpha India</h2>
</div>
<p className="text-base text-zinc-300">Best Stocks portfolio to invest in 2026</p>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-base font-medium mb-3 text-zinc-50">Key Features</h3>
<p className="text-base mb-6 text-zinc-400">A carefully curated list of 18-20 high-potential stocks, backed by 20+ years of market expertise, designed to create long-term wealth.</p>
<h3 className="text-base font-medium mb-4 text-zinc-50">What you get:</h3>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">Diversified Portfolio comprising of Largecap, Midcap &amp; Smallcap stocks</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">Quarterly Re-balancing</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">Personalized Dashboard with real-time updates</span>
</li>
</ul>
<p className="text-base mb-6 border-b pb-6 text-zinc-400 border-zinc-800">Minimum Investment: ₹2 Lacs</p>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-black">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-600" data-lucide="circle" strokeWidth="1.5"></i>
<span className="text-base font-medium text-zinc-400">6 Months</span>
</div>
<span className="text-base font-semibold text-zinc-50">₹19,000</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border-2 border-indigo-500 bg-indigo-950/50">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-indigo-400" data-lucide="circle-dot" strokeWidth="1.5"></i>
<span className="text-base font-medium text-zinc-50">12 Months</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-900 text-green-300">Saved ₹10,000</span>
<span className="text-base font-semibold text-zinc-50">₹29,000</span>
</div>
</div>
</div>
<p className="text-sm text-center text-zinc-500 mb-3">This service is suitable to your profile.</p>
<button className="w-full py-3.5 rounded-xl text-base font-medium transition-colors shadow-sm mb-6 bg-zinc-50 text-black hover:bg-zinc-200">
                    Subscribe Now
                </button>
<div className="text-center text-sm flex items-center justify-center gap-2 border-t pt-5 mt-auto text-zinc-400 border-zinc-800/80">
                    For any query Contact: <i className="w-3.5 h-3.5 text-green-400" data-lucide="phone" strokeWidth="1.5"></i> <span className="font-medium text-zinc-50">91+ 8000 816 688</span>
</div>
</div>
</div>

<div className="flex flex-col border rounded-2xl overflow-hidden transition-shadow hover:shadow-md border-sky-900 bg-sky-950/30">
<div className="p-6 border-b bg-sky-900/60 border-sky-900">
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-8 h-8 rounded font-semibold text-lg tracking-tighter bg-zinc-50 text-black">EP</div>
<h2 className="text-2xl font-semibold tracking-tight uppercase text-zinc-50">Multibagger</h2>
</div>
<p className="text-base text-zinc-300">Mid-term Investing, Proven Results, Real Wealth</p>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-base font-medium mb-3 text-zinc-50">Key Features</h3>
<p className="text-base mb-6 text-zinc-400">One high-growth stock every month for mid-term holding, focused on fundamentally strong businesses.</p>
<h3 className="text-base font-medium mb-4 text-zinc-50">What you get:</h3>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">One High-Growth Stock Every Month</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">Detailed Research Report</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">Mid-term Investment</span>
</li>
</ul>
<p className="text-base mb-6 border-b pb-6 text-zinc-400 border-zinc-800">Minimum Investment: ₹20,000 per stock</p>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-black">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-600" data-lucide="circle" strokeWidth="1.5"></i>
<span className="text-base font-medium text-zinc-400">6 Months</span>
</div>
<span className="text-base font-semibold text-zinc-50">₹19,000</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border-2 border-sky-500 bg-sky-950/50">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-sky-400" data-lucide="circle-dot" strokeWidth="1.5"></i>
<span className="text-base font-medium text-zinc-50">12 Months</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-900 text-green-300">Saved ₹10,000</span>
<span className="text-base font-semibold text-zinc-50">₹29,000</span>
</div>
</div>
</div>
<p className="text-sm text-center text-zinc-500 mb-3">This service is suitable to your profile.</p>
<button className="w-full py-3.5 rounded-xl text-base font-medium transition-colors shadow-sm mb-6 bg-zinc-50 text-black hover:bg-zinc-200">
                    Subscribe Now
                </button>
<div className="text-center text-sm flex items-center justify-center gap-2 border-t pt-5 mt-auto text-zinc-400 border-zinc-800/80">
                    For any query Contact: <i className="w-3.5 h-3.5 text-green-400" data-lucide="phone" strokeWidth="1.5"></i> <span className="font-medium text-zinc-50">91+ 8000 816 688</span>
</div>
</div>
</div>

<div className="flex flex-col border rounded-2xl overflow-hidden transition-shadow hover:shadow-md border-amber-800 bg-amber-950/30">
<div className="p-6 border-b bg-amber-900/60 border-amber-800">
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-8 h-8 rounded font-semibold text-lg tracking-tighter bg-zinc-50 text-black">EP</div>
<h2 className="text-2xl font-semibold tracking-tight uppercase text-zinc-50">WealthX</h2>
</div>
<p className="text-base text-zinc-300">Combination of Short and Long Term Investments.</p>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-base font-medium mb-3 text-zinc-50">Key Features</h3>
<p className="text-base mb-6 text-zinc-400">Opportunities Don't Wait. Neither Should You. WealthX is a comprehensive equity investing service built to keep you aligned with opportunities across market cycles.</p>
<h3 className="text-base font-medium mb-4 text-zinc-50">What you get:</h3>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">Curated Stocks Portfolio for long-term wealth creation</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">Monthly Stock Ideas backed by research and market structure</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-green-400" data-lucide="check-square-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-200">ETF Recommendations to capture sectoral, thematic, and macro opportunities</span>
</li>
</ul>
<div className="space-y-3 mb-6 mt-auto">
<div className="flex items-center justify-between p-3 rounded-lg border mt-4 border-zinc-800 bg-black">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-600" data-lucide="circle" strokeWidth="1.5"></i>
<span className="text-base font-medium text-zinc-400">12 Months</span>
</div>
<span className="text-base font-semibold text-zinc-50">₹21,000</span>
</div>
</div>
<p className="text-sm text-center text-zinc-500 mb-3 mt-4">This service is suitable to your profile.</p>
<button className="w-full py-3.5 rounded-xl text-base font-medium transition-colors shadow-sm mb-6 bg-zinc-50 text-black hover:bg-zinc-200">
                    Subscribe Now
                </button>
<div className="text-center text-sm flex items-center justify-center gap-2 border-t pt-5 text-zinc-400 border-zinc-800/80">
                    For any query Contact: <i className="w-3.5 h-3.5 text-green-400" data-lucide="phone" strokeWidth="1.5"></i> <span className="font-medium text-zinc-50">91+ 8000 816 688</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="border rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative bg-zinc-950 border-zinc-800/60">
<div className="flex-1 z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-zinc-50">Real-Time Delivery: Your Exclusive App</h2>
<p className="text-lg mb-10 leading-relaxed text-zinc-400">All your premium recommendations are delivered instantly and securely via the official EquityPandit App (Android &amp; iOS).</p>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-green-300" data-lucide="bell" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-zinc-50">Instant Alerts</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-green-300" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-zinc-50">Timely Entry &amp; Exit</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-green-300" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-zinc-50">Secure &amp; Private Access</span>
</li>
</ul>
</div>
<div className="flex-1 relative z-10 w-full flex justify-center mt-10 md:mt-0">

<div className="relative border-[8px] rounded-[3rem] h-[580px] w-[280px] shadow-2xl flex-shrink-0 border-zinc-100 bg-zinc-100">

<div className="absolute top-0 inset-x-0 h-6 flex justify-center">
<div className="w-24 h-5 rounded-b-xl bg-zinc-100"></div>
</div>
<div className="rounded-[2.5rem] overflow-hidden w-full h-full flex flex-col bg-zinc-950">

<div className="pt-10 px-5 pb-5 bg-green-300 text-black">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded flex items-center justify-center font-bold text-xs tracking-tighter bg-black text-green-300">EP</div>
<span className="text-[10px] font-semibold uppercase tracking-wider leading-tight">Investment<br/>Advisor</span>
</div>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-black/20"><i className="w-3 h-3 text-black" data-lucide="bell"></i></div>
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-black/20"><i className="w-3 h-3 text-black" data-lucide="user"></i></div>
</div>
</div>
<div className="p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm bg-green-200/60">
<div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-zinc-800">
<i className="w-5 h-5 text-zinc-500" data-lucide="user"></i>
</div>
<div className="flex-1">
<div className="text-sm font-medium">Ankit Dabhekar</div>
<div className="text-xs opacity-80 mt-0.5 text-green-900">dabhekar...</div>
</div>
<i className="w-4 h-4 text-green-800" data-lucide="chevron-right"></i>
</div>
</div>

<div className="p-5 flex-1 space-y-3 overflow-y-auto bg-zinc-950">
<div className="flex items-center gap-4 p-3.5 rounded-xl shadow-sm border bg-black border-zinc-900">
<i className="w-5 h-5 text-zinc-600" data-lucide="home"></i>
<span className="text-sm font-medium text-zinc-300">Home</span>
</div>
<div className="flex items-center gap-4 p-3.5 rounded-xl shadow-sm border bg-black border-zinc-900">
<i className="w-5 h-5 text-zinc-600" data-lucide="bar-chart-2"></i>
<span className="text-sm font-medium text-zinc-300">Previous Calls</span>
</div>
<div className="flex items-center gap-4 p-3.5 rounded-xl shadow-sm border bg-black border-zinc-900">
<i className="w-5 h-5 text-zinc-600" data-lucide="settings"></i>
<span className="text-sm font-medium text-zinc-300">My Service</span>
</div>
<div className="flex items-center gap-4 p-3.5 border rounded-xl shadow-sm relative overflow-hidden bg-sky-950 border-sky-900">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500"></div>
<i className="w-5 h-5 text-sky-400" data-lucide="file-text"></i>
<span className="text-sm font-medium text-sky-100">Multibagger Report</span>
</div>
<div className="pt-4 space-y-3">
<div className="flex items-center gap-4 p-3.5 rounded-xl border bg-black border-zinc-900">
<i className="w-4 h-4 text-zinc-600" data-lucide="info"></i>
<span className="text-xs font-medium text-zinc-400">About Us</span>
</div>
<div className="flex items-center gap-4 p-3.5 rounded-xl border bg-black border-zinc-900">
<i className="w-4 h-4 text-zinc-600" data-lucide="headphones"></i>
<span className="text-xs font-medium text-zinc-400">Contact Us</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl -z-10 bg-green-900/50"></div>
</div>
</section>

<footer className="border-t-4 pt-16 pb-8 px-6 bg-black border-t-green-300">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

<div className="md:col-span-4 pr-6">
<div className="flex items-center gap-2 mb-6">
<span className="text-xl font-semibold tracking-tight text-zinc-50">EquityPandit</span>
<div className="border-l pl-2 border-zinc-700">
<span className="text-xs uppercase font-medium tracking-widest leading-none block text-green-300">Investment<br/>Advisor</span>
</div>
</div>
<div className="space-y-4 text-base text-zinc-400">
<p>Address: A-488, Vidhyut Nagar, Ajmer Road,<br/>Jaipur, Rajasthan - 302019</p>
<p>Phone: +91 8000 816 688</p>
<p>Email: support@equitypandit.com</p>
</div>
<div className="flex items-center gap-4 mt-6">
<a className="text-blue-500 transition-colors hover:text-blue-400" href="#"><i className="w-5 h-5 fill-current" data-lucide="twitter" strokeWidth="0"></i></a>
<a className="transition-colors text-blue-400 hover:text-blue-300" href="#"><i className="w-5 h-5 fill-current" data-lucide="facebook" strokeWidth="0"></i></a>
<a className="transition-colors text-pink-400 hover:text-pink-300" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="2"></i></a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="text-base font-semibold mb-5 text-zinc-50">Company</h4>
<ul className="space-y-3 text-base text-zinc-400">
<li><a className="transition-colors hover:text-zinc-50" href="#">Home</a></li>
<li><a className="transition-colors hover:text-zinc-50" href="#">About Us</a></li>
<li><a className="transition-colors hover:text-zinc-50" href="#">Careers</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-base font-semibold mb-5 text-zinc-50">Services</h4>
<ul className="space-y-3 text-base text-zinc-400">
<li><a className="transition-colors hover:text-zinc-50" href="#">Plan &amp; Pricing</a></li>
<li><a className="transition-colors hover:text-zinc-50" href="#">Investing &amp; Trading</a></li>
<li><a className="transition-colors hover:text-zinc-50" href="#">HNI Services</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-base font-semibold mb-5 text-zinc-50">Download App</h4>
<ul className="space-y-3 text-base text-zinc-400">
<li><a className="transition-colors hover:text-zinc-50" href="#">Android</a></li>
<li><a className="transition-colors hover:text-zinc-50" href="#">IOS</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-base font-semibold mb-5 text-zinc-50">Legal &amp; Privacy</h4>
<ul className="space-y-3 text-base text-zinc-400">
<li><a className="transition-colors hover:text-zinc-50" href="#">Terms and Conditions</a></li>
<li><a className="transition-colors leading-snug hover:text-zinc-50" href="#">Grievance Redressal /<br/>Escalation Matrix</a></li>
<li><a className="transition-colors hover:text-zinc-50" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 pb-8 border-zinc-800">
<p className="text-base text-zinc-200">For any grievances/support, contact our support team at <span className="font-medium text-zinc-50">support@equitypandit.com</span> or call us at <span className="font-medium text-zinc-50">8000 816 688</span></p>
</div>
<div className="border-t pt-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm border-zinc-800 text-zinc-400">
<div>
<h5 className="font-semibold mb-3 text-zinc-50">SEBI Registered Investment Advisor Details:</h5>
<p className="mb-1">Registered Name: Equitypandit Financial Services Private Limited</p>
<p className="mb-1">Type of registration: Non-Individual</p>
<p className="mb-1">Registration No.: INA000006688</p>
<p>Validity: Perpetual</p>
</div>
<div className="md:col-span-2">
<p className="mb-4">Principal Officer: Kamlesh Sachar | Email: po@equitypandit.in | Contact No.: +91 8000816688 | SEBI L.O.: Ground Floor, Jeevan Nidhi 2 LIC Building, Ambedkar Circle, Bhawani Singh Rd, Jaipur, Rajasthan 302005</p>
<h5 className="font-semibold mb-2 text-zinc-50">Disclaimers:</h5>
<ol className="list-decimal pl-4 space-y-2">
<li>Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</li>
<li>The securities quoted, if any are for illustration only and are not recommendatory.</li>
<li>Investments in securities market are subject to market risks. Read all the related documents carefully before investing.</li>
</ol>
</div>
</div>
</div>
</footer>


    </>
  );
}
