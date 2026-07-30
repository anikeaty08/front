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



    function showSection(section) {
      document.getElementById('landing').classList.add('hidden');
      document.getElementById('dashboard').classList.add('hidden');
      document.getElementById('onboarding').classList.add('hidden');
      document.getElementById(section).classList.remove('hidden');
    }
    window.onload = () => {
      showSection('landing');
    };
  
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
      

<nav className="bg-white shadow-md sticky top-0 z-30">
<div className="container mx-auto px-4 flex items-center justify-between h-16">
<div className="flex items-center space-x-3">
<img alt="AfriPay Logo" className="w-8 h-8" src="https://svgshare.com/i/13Y7.svg" />
<span className="font-bold text-xl text-indigo-700">AfriPay</span>
</div>
<div className="space-x-6">
<button className="text-gray-700 hover:text-indigo-700 font-medium" onClick={(e) => { showSection('landing') }}>Home</button>
<button className="text-gray-700 hover:text-indigo-700 font-medium" onClick={(e) => { showSection('dashboard') }}>Dashboard</button>
<button className="text-gray-700 hover:text-indigo-700 font-medium" onClick={(e) => { showSection('onboarding') }}>Onboard</button>
<button className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition">Sign In</button>
</div>
</div>
</nav>

<section className="" id="landing">
<div className="bg-gradient-to-br from-indigo-700 via-violet-700 to-indigo-900 relative">
<div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 py-24">
<div className="w-full lg:w-1/2 text-white space-y-8">
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Seamless Payments <span className="text-yellow-300">for Africa</span>
</h1>
<p className="text-xl opacity-90">Orchestrate, unify, and optimize payments across Africa. Empower your business with real-time insights and simple integrations.</p>
<div className="space-x-4">
<button className="bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition" onClick={(e) => { showSection('onboarding') }}>Get Started</button>
<button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition" onClick={(e) => { showSection('dashboard') }}>View Dashboard</button>
</div>
</div>
<div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0 relative">
<img alt="Africa map" className="rounded-2xl shadow-2xl w-80 lg:w-96 border-8 border-white" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" />
<div className="absolute -bottom-8 -right-8 bg-white bg-opacity-80 px-5 py-3 rounded-lg flex items-center gap-2 shadow-lg">
<svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m-4-5v9"></path></svg>
<span className="font-semibold text-indigo-700">Fast Settlements</span>
</div>
</div>
</div>
</div>

<div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
<div className="bg-indigo-100 text-indigo-700 rounded-full p-3 mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-3.314 0-6 2.239-6 5 0 1.657 1.343 3 3 3h6c1.657 0 3-1.343 3-3 0-2.761-2.686-5-6-5z"></path><circle cx="12" cy="8" r="3"></circle></svg>
</div>
<h3 className="font-bold text-lg mb-2">Unified API</h3>
<p className="text-gray-500">Integrate multiple payment providers with a single, powerful API built for African markets.</p>
</div>
<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
<div className="bg-yellow-100 text-yellow-600 rounded-full p-3 mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2">Real-time Analytics</h3>
<p className="text-gray-500">Get actionable insights with dashboards and instant notifications, tailored for your business.</p>
</div>
<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
<div className="bg-green-100 text-green-700 rounded-full p-3 mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2">Secure & Compliant</h3>
<p className="text-gray-500">PCI DSS compliant infrastructure. Your data and transactions are always secure.</p>
</div>
</div>

<div className="container mx-auto px-4 py-12 text-center">
<h2 className="text-2xl font-bold mb-4 text-indigo-800">Ready to simplify payments for your African business?</h2>
<button className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-800 transition" onClick={(e) => { showSection('onboarding') }}>Get Started Now</button>
</div>
</section>

<section className="hidden" id="dashboard">
<div className="container mx-auto px-4 py-10">
<h2 className="text-3xl font-bold text-indigo-800 mb-8">Dashboard</h2>
<div className="grid md:grid-cols-3 gap-8 mb-8">

<div className="bg-white rounded-xl shadow-lg p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-gray-500">Total Volume</div>
<div className="text-2xl font-bold text-indigo-700">$1,250,300</div>
</div>
<div className="bg-indigo-100 p-2 rounded-full">
<svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v8m0 0l3-3m-3 3l-3-3"></path></svg>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-gray-500">Successful Payments</div>
<div className="text-2xl font-bold text-green-600">4,820</div>
</div>
<div className="bg-green-100 p-2 rounded-full">
<svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-gray-500">Failed Payments</div>
<div className="text-2xl font-bold text-red-600">98</div>
</div>
<div className="bg-red-100 p-2 rounded-full">
<svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<h4 className="font-bold text-lg text-indigo-700">Transaction Volume</h4>
<div className="text-sm text-gray-400">Last 7 days</div>
</div>
<img alt="Chart" className="rounded-lg" src="https://quickchart.io/chart?c={type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Volume',data:[150,230,340,180,220,370,300],borderColor:'rgb(99,102,241)',backgroundColor:'rgba(99,102,241,0.1)',fill:true}]}}" />
</div>
<div className="bg-white rounded-xl shadow-lg p-6 flex-1">
<h4 className="font-bold text-lg mb-4 text-indigo-700">Recent Transactions</h4>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-gray-500 text-xs uppercase">
<th className="py-2">Date</th>
<th className="py-2">Merchant</th>
<th className="py-2">Amount</th>
<th className="py-2">Status</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2">2024-06-10</td>
<td>Jumia</td>
<td>$500</td>
<td><span className="bg-green-100 text-green-700 px-2 py-1 rounded">Success</span></td>
</tr>
<tr className="bg-gray-50">
<td className="py-2">2024-06-09</td>
<td>Konga</td>
<td>$2,100</td>
<td><span className="bg-red-100 text-red-700 px-2 py-1 rounded">Failed</span></td>
</tr>
<tr>
<td className="py-2">2024-06-09</td>
<td>Paystack</td>
<td>$320</td>
<td><span className="bg-green-100 text-green-700 px-2 py-1 rounded">Success</span></td>
</tr>
<tr className="bg-gray-50">
<td className="py-2">2024-06-08</td>
<td>Flutterwave</td>
<td>$1,800</td>
<td><span className="bg-green-100 text-green-700 px-2 py-1 rounded">Success</span></td>
</tr>
<tr>
<td className="py-2">2024-06-08</td>
<td>MTN MoMo</td>
<td>$400</td>
<td><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Pending</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="mt-12 bg-gradient-to-r from-indigo-800 via-violet-800 to-indigo-900 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
<div className="text-white mb-4 md:mb-0">
<div className="font-bold text-2xl">Scale your business across Africa</div>
<div className="text-indigo-200">Experience seamless payments in every country, every currency.</div>
</div>
<button className="bg-yellow-300 text-indigo-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition mt-4 md:mt-0" onClick={(e) => { showSection('onboarding') }}>Onboard Now</button>
</div>
</div>
</section>

<section className="hidden min-h-screen bg-white" id="onboarding">
<div className="container mx-auto px-4 py-16 max-w-lg">
<div className="bg-gradient-to-br from-indigo-700 via-violet-700 to-indigo-900 rounded-2xl shadow-2xl p-8 text-white mb-8 flex items-center gap-4">
<svg className="w-12 h-12 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 12l2 2l4-4"></path></svg>
<div>
<div className="font-bold text-2xl">Let's set up your merchant account</div>
<div className="text-indigo-200">Join 10,000+ African businesses powering payments with AfriPay.</div>
</div>
</div>
<form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
<div>
<label className="block text-gray-700 font-bold mb-1">Business Name</label>
<input className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent" placeholder="e.g. Lagos Mart" type="text" />
</div>
<div>
<label className="block text-gray-700 font-bold mb-1">Email Address</label>
<input className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent" placeholder="you@yourbusiness.com" type="email" />
</div>
<div>
<label className="block text-gray-700 font-bold mb-1">Country</label>
<select className="w-full border border-gray-200 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent">
<option>Nigeria</option>
<option>Kenya</option>
<option>South Africa</option>
<option>Ghana</option>
<option>Egypt</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-gray-700 font-bold mb-1">Password</label>
<input className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent" placeholder="Choose a strong password" type="password" />
</div>
<button className="w-full bg-indigo-700 text-white py-3 rounded-lg font-bold hover:bg-indigo-800 transition" type="submit">Create Account</button>
<div className="text-center">
<span className="text-gray-500">Already have an account?</span>
<button className="text-indigo-700 font-semibold hover:underline ml-1" type="button">Sign in</button>
</div>
</form>
<div className="mt-10 text-center text-gray-400 text-sm">© 2024 AfriPay. All rights reserved.</div>
</div>
</section>

    </>
  );
}
