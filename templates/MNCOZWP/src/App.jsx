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
      
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            kaya: {
              50: '#f5f4fe',
              100: '#ebe9fd',
              200: '#d6d3fb',
              300: '#beb7f8',
              400: '#a193f4',
              500: '#7b6ef6',
              600: '#6758e9',
              700: '#5748c4',
              800: '#453a9d',
              900: '#3a327f',
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  
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
      

<header className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-md z-50 shadow-sm border-b border-kaya-100">
<div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
<div className="flex items-center gap-3">
<div className="bg-kaya-100 rounded-full p-2">
<svg className="w-7 h-7 text-kaya-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 15.5l3.5-3.5 3.5 3.5"></path></svg>
</div>
<span className="text-xl font-extrabold text-kaya-700 tracking-tight">Kaya AI</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-md font-medium">
<a className="hover:text-kaya-600 transition" href="#product">Product</a>
<a className="hover:text-kaya-600 transition" href="#how">How it works</a>
<a className="hover:text-kaya-600 transition" href="#benefits">Benefits</a>
<a className="hover:text-kaya-600 transition" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-block bg-kaya-500 text-white px-5 py-2 rounded-xl font-semibold shadow hover:bg-kaya-600 transition" href="#early">Request Access</a>
</div>
</header>

<section className="pt-32 pb-20 bg-gradient-to-b from-white via-kaya-50 to-kaya-100">
<div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
<span className="bg-kaya-100 text-kaya-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">AI Quoting Agent for AEC Teams</span>
<h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
        Effortless Quotes.<br/>
        Instant Decisions.
      </h1>
<p className="text-xl text-gray-700 max-w-xl mb-7">
        Kaya AI automates supplier quotes for construction and architecture, so you can focus on winning work—not paperwork.
      </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="bg-kaya-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-kaya-600 transition text-lg" href="#early">Request Early Access</a>
<a className="bg-white border border-kaya-200 text-kaya-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-kaya-100 text-lg transition" href="#product">See Product</a>
</div>
<div className="shadow-2xl rounded-3xl overflow-hidden border-4 border-white mt-8 w-full max-w-2xl">
<img alt="Kaya AI Quoting UI" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-5 py-20" id="product">
<div className="bg-white rounded-3xl shadow-xl p-9 md:p-14 flex flex-col md:flex-row gap-10 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Quoting, Without the Busywork</h2>
<p className="text-lg text-gray-600 mb-4">Kaya AI’s agent reads your project data, specs, and historical quotes to generate and send RFQs, chase suppliers, and analyze responses—no more copying, pasting, or manual tracking.</p>
<ul className="space-y-4 text-base">
<li className="flex items-center gap-3">
<span className="bg-kaya-100 text-kaya-600 rounded-full p-1.5">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</span>
            Auto-generates compliant, branded quote requests
          </li>
<li className="flex items-center gap-3">
<span className="bg-kaya-100 text-kaya-600 rounded-full p-1.5">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 15.5l3.5-3.5 3.5 3.5"></path></svg>
</span>
            Direct supplier outreach, reminders &amp; follow-ups
          </li>
<li className="flex items-center gap-3">
<span className="bg-kaya-100 text-kaya-600 rounded-full p-1.5">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
            One-click quote comparison and analytics
          </li>
</ul>
</div>
<div className="flex-1 flex justify-center">
<img alt="Quoting with Kaya AI" className="rounded-2xl shadow-lg w-72 h-52 object-cover" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-br from-kaya-50 via-white to-kaya-100" id="how">
<div className="max-w-4xl mx-auto px-5">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">How Kaya Works</h2>
<p className="text-center text-lg text-gray-600 mb-12">AI handles the quoting cycle—so you never manually build an RFQ again.</p>
<div className="grid md:grid-cols-4 gap-7">
<div className="bg-white rounded-2xl shadow p-5 flex flex-col items-center">
<div className="bg-kaya-200 text-kaya-700 w-11 h-11 flex items-center justify-center rounded-full mb-3 font-bold text-lg">1</div>
<div className="font-semibold mb-1">Upload or Sync</div>
<div className="text-gray-600 text-sm text-center">Connect plans, specs, or Excel. Kaya learns your standards instantly.</div>
</div>
<div className="bg-white rounded-2xl shadow p-5 flex flex-col items-center">
<div className="bg-kaya-200 text-kaya-700 w-11 h-11 flex items-center justify-center rounded-full mb-3 font-bold text-lg">2</div>
<div className="font-semibold mb-1">Request</div>
<div className="text-gray-600 text-sm text-center">Kaya generates and sends supplier RFQs—fully branded, error-free.</div>
</div>
<div className="bg-white rounded-2xl shadow p-5 flex flex-col items-center">
<div className="bg-kaya-200 text-kaya-700 w-11 h-11 flex items-center justify-center rounded-full mb-3 font-bold text-lg">3</div>
<div className="font-semibold mb-1">Track</div>
<div className="text-gray-600 text-sm text-center">Follow-ups and responses tracked automatically in one dashboard.</div>
</div>
<div className="bg-white rounded-2xl shadow p-5 flex flex-col items-center">
<div className="bg-kaya-200 text-kaya-700 w-11 h-11 flex items-center justify-center rounded-full mb-3 font-bold text-lg">4</div>
<div className="font-semibold mb-1">Decide</div>
<div className="text-gray-600 text-sm text-center">Compare quotes instantly. Make decisions, share results, move forward.</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-5 py-20" id="benefits">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">Why Teams Choose Kaya AI</h2>
<div className="grid md:grid-cols-3 gap-8 mt-10">
<div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
<div className="bg-kaya-100 p-3 rounded-full mb-4">
<svg className="w-7 h-7 text-kaya-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<div className="font-semibold text-lg mb-2">Save Days, Every Project</div>
<div className="text-gray-600 text-center">Automated quoting means less admin, faster bids, and more time for your clients.</div>
</div>
<div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
<div className="bg-kaya-100 p-3 rounded-full mb-4">
<svg className="w-7 h-7 text-kaya-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 15.5l3.5-3.5 3.5 3.5"></path></svg>
</div>
<div className="font-semibold text-lg mb-2">No More Errors</div>
<div className="text-gray-600 text-center">AI ensures every quote matches your specs and brand, every time—no mistakes.</div>
</div>
<div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
<div className="bg-kaya-100 p-3 rounded-full mb-4">
<svg className="w-7 h-7 text-kaya-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="font-semibold text-lg mb-2">Seamless Integration</div>
<div className="text-gray-600 text-center">Works with your current workflows and files—no new systems, zero learning curve.</div>
</div>
</div>
</section>

<section className="bg-kaya-100 py-20">
<div className="max-w-3xl mx-auto px-5">
<h2 className="text-3xl font-bold text-center mb-9 text-gray-900">Manual vs Kaya AI</h2>
<div className="overflow-x-auto">
<table className="min-w-full bg-white rounded-2xl shadow text-base">
<thead>
<tr className="bg-kaya-50 text-gray-600">
<th className="px-6 py-4 text-left font-semibold rounded-tl-2xl">Manual Quoting</th>
<th className="px-6 py-4 text-left font-semibold rounded-tr-2xl">With Kaya AI</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border-t px-6 py-4">Spreadsheet copy-paste, endless emails</td>
<td className="border-t px-6 py-4 bg-kaya-50">One-click, automated RFQs</td>
</tr>
<tr>
<td className="border-t px-6 py-4 bg-kaya-50">Chasing suppliers for responses</td>
<td className="border-t px-6 py-4 bg-kaya-50">AI follow-ups and reminders</td>
</tr>
<tr>
<td className="border-t px-6 py-4">Inconsistent, error-prone submissions</td>
<td className="border-t px-6 py-4 bg-kaya-50">Compliant, branded, accurate</td>
</tr>
<tr>
<td className="border-t px-6 py-4 bg-kaya-50">No visibility on supplier speed</td>
<td className="border-t px-6 py-4 bg-kaya-50">Performance analytics built-in</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-5 py-20" id="early">
<div className="bg-gradient-to-tr from-kaya-500 via-kaya-700 to-kaya-400 rounded-3xl shadow-2xl px-10 py-14 text-center text-white">
<h2 className="text-3xl font-bold mb-3">Ready for Effortless Quoting?</h2>
<p className="mb-7 text-lg">Kaya AI is onboarding select AEC teams.<br/>
        Want to accelerate your quotes and win more work?</p>
<a className="inline-block bg-white text-kaya-700 font-semibold px-10 py-4 rounded-xl shadow-xl hover:bg-kaya-100 text-xl transition" href="mailto:hello@usekaya.ai">Request Early Access</a>
</div>
</section>

<footer className="bg-white border-t border-kaya-100 text-gray-400 py-8 text-center text-sm">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<span className="font-semibold text-kaya-700">Kaya AI</span>
<span>© 2024 Kaya AI. All rights reserved.</span>
<a className="hover:text-kaya-700 transition" href="mailto:hello@usekaya.ai">hello@usekaya.ai</a>
</div>
</footer>

    </>
  );
}
