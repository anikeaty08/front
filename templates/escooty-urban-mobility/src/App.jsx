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
      

<nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-zinc-200/60 rounded-full px-5 h-14 flex items-center justify-between shadow-sm transition-all hover:shadow-md">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-zinc-900 text-white p-1 rounded-md transition-transform group-hover:scale-105">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="2"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">Escooty</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Platform</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Fleet</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Safety</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-3">
<a className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white transition-all bg-zinc-900 rounded-full hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/10 active:scale-95" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#dcfce7,transparent)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

<div className="opacity-0 animate-fade-in inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-zinc-600 bg-white rounded-full border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors cursor-pointer group">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 relative">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
</span>
<span>New: Corporate Fleet Management V2.0</span>
<i className="w-3 h-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>

<h1 className="opacity-0 animate-fade-in delay-100 max-w-4xl text-5xl sm:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-8">
                Automate your daily <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">urban commute.</span>
</h1>

<p className="opacity-0 animate-fade-in delay-200 text-lg text-zinc-500 leading-relaxed mb-10 max-w-xl">
                The all-in-one platform for personal rides and fleet management. 
                Experience seamless unlocking, real-time GPS tracking, and automated billing.
            </p>

<div className="opacity-0 animate-fade-in delay-200 flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
<a className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white transition-all bg-zinc-900 rounded-full hover:bg-zinc-800 shadow-lg shadow-zinc-900/10 active:scale-95" href="#">
                    Start Riding Free
                    <i className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</a>
<a className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-600 transition-colors bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 hover:text-zinc-900 active:scale-95" href="#">
<i className="w-4 h-4 mr-2 group-hover:text-emerald-500 transition-colors" data-lucide="play-circle"></i>
                    Watch Demo
                </a>
</div>

<div className="opacity-0 animate-fade-in delay-200 relative w-full max-w-5xl group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

<div className="relative rounded-xl border border-zinc-200 bg-white/50 backdrop-blur-sm shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)] overflow-hidden">

<div className="h-10 bg-white border-b border-zinc-100 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
</div>
<div className="mx-auto bg-zinc-50 text-[10px] text-zinc-400 px-3 py-1 rounded-md border border-zinc-100 font-mono">escooty.app/dashboard</div>
</div>

<div className="flex h-[500px] bg-zinc-50/50">

<div className="w-64 bg-white border-r border-zinc-100 hidden md:flex flex-col p-4">
<div className="space-y-1 mb-8">
<div className="flex items-center gap-3 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
                                    Overview
                                </div>
<div className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:bg-zinc-50 rounded-lg text-sm font-medium cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="map"></i>
                                    Live Map
                                </div>
<div className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:bg-zinc-50 rounded-lg text-sm font-medium cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="history"></i>
                                    History
                                </div>
<div className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:bg-zinc-50 rounded-lg text-sm font-medium cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="wallet"></i>
                                    Billing
                                </div>
</div>
<div className="mt-auto">
<div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Monthly Pass</span>
<span className="text-xs font-semibold text-emerald-600">Active</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-1.5 mb-2">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<p className="text-[10px] text-zinc-400">22 days remaining</p>
</div>
</div>
</div>

<div className="flex-1 relative bg-white">

<img alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

<div className="relative z-10 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl shadow-sm border border-zinc-200/80 p-5 hover:border-emerald-200 transition-colors duration-300">
<div className="flex justify-between items-start mb-6">
<div>
<p className="text-xs font-medium text-zinc-500 mb-1">Current Session</p>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">00:14:23</h3>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-full border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-emerald-700">Live</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-zinc-100 pt-4">
<div>
<p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Speed</p>
<p className="text-sm font-medium text-zinc-900">18 km/h</p>
</div>
<div>
<p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Dist</p>
<p className="text-sm font-medium text-zinc-900">2.4 km</p>
</div>
<div>
<p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Cost</p>
<p className="text-sm font-medium text-zinc-900">$3.50</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-zinc-200/80 p-5 flex flex-col justify-between hover:border-emerald-200 transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<p className="text-xs font-medium text-zinc-500">Nearest Scooter</p>
<i className="w-4 h-4 text-zinc-400" data-lucide="navigation"></i>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="2"></i>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Scooter S-402</p>
<p className="text-xs text-zinc-500">98% Battery • 150m away</p>
</div>
<button className="ml-auto w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors text-zinc-600">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-zinc-100 bg-zinc-50/50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Trusted by efficient teams worldwide</p>
</div>
<div className="relative w-full mask-gradient">
<div className="flex w-max animate-scroll pause-on-hover">

<div className="flex items-center gap-16 px-8 grayscale opacity-40">
<div className="flex items-center gap-2"><div className="w-6 h-6 bg-zinc-800 rounded-sm"></div><span className="font-bold text-xl text-zinc-800">Acme</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full border-2 border-zinc-800"></div><span className="font-bold text-xl text-zinc-800">Sphere</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 bg-zinc-800 transform rotate-45"></div><span className="font-bold text-xl text-zinc-800">Kite</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 border-2 border-zinc-800 rounded-sm"></div><span className="font-bold text-xl text-zinc-800">Bolt</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 bg-zinc-800 rounded-tr-xl"></div><span className="font-bold text-xl text-zinc-800">Feather</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 border-2 border-zinc-800 rounded-full border-dashed"></div><span className="font-bold text-xl text-zinc-800">Orbit</span></div>
</div>

<div className="flex items-center gap-16 px-8 grayscale opacity-40">
<div className="flex items-center gap-2"><div className="w-6 h-6 bg-zinc-800 rounded-sm"></div><span className="font-bold text-xl text-zinc-800">Acme</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full border-2 border-zinc-800"></div><span className="font-bold text-xl text-zinc-800">Sphere</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 bg-zinc-800 transform rotate-45"></div><span className="font-bold text-xl text-zinc-800">Kite</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 border-2 border-zinc-800 rounded-sm"></div><span className="font-bold text-xl text-zinc-800">Bolt</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 bg-zinc-800 rounded-tr-xl"></div><span className="font-bold text-xl text-zinc-800">Feather</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 border-2 border-zinc-800 rounded-full border-dashed"></div><span className="font-bold text-xl text-zinc-800">Orbit</span></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Everything you need to move</h2>
<p className="text-zinc-500">Powerful features built for the modern commuter. From automated payments to predictive maintenance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="w-12 h-12 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
<i className="w-6 h-6 text-zinc-700 group-hover:text-emerald-600" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">AI Route Optimization</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Our algorithms analyze traffic patterns to suggest the safest and fastest scooter lanes in real-time.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="w-12 h-12 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
<i className="w-6 h-6 text-zinc-700 group-hover:text-emerald-600" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Enterprise Security</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Bank-grade encryption for your payment data and ride history. Compliant with global safety standards.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="w-12 h-12 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
<i className="w-6 h-6 text-zinc-700 group-hover:text-emerald-600" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Impact Analytics</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Track your carbon footprint savings. Visualize your contribution to a greener city with detailed reports.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6 space-y-24">

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 space-y-8">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
<i className="w-5 h-5" data-lucide="battery-charging"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Always charged,<br/>always ready.</h2>
<p className="text-zinc-500 text-lg leading-relaxed">
                        Our swappable battery network ensures you never face downtime. Locate a swap station within 2 minutes of any location in the city center.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span>48h battery life on a single charge</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span>Instant swap stations at every corner</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span>Smart energy regeneration braking</span>
</li>
</ul>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-white aspect-square lg:aspect-[4/3] group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-zinc-100"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 bg-white rounded-full shadow-[0_0_80px_-20px_rgba(16,185,129,0.3)] flex items-center justify-center border border-zinc-100 relative">
<i className="w-24 h-24 text-emerald-500 absolute z-10" data-lucide="zap"></i>
<div className="absolute w-full h-full rounded-full border border-emerald-100 animate-[ping_3s_linear_infinite]"></div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur border border-zinc-100 p-4 rounded-xl shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-zinc-900">Battery Health</span>
<span className="text-xs font-mono text-emerald-600">98.4%</span>
</div>
<div className="w-full bg-zinc-100 h-1.5 rounded-full mt-2">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
<div className="flex-1 space-y-8">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Unlock with a tap.<br/>Ride in seconds.</h2>
<p className="text-zinc-500 text-lg leading-relaxed">
                        Forget clumsy QR codes. Use NFC tap-to-unlock or set up auto-unlock when you approach your reserved scooter.
                    </p>
<div className="flex gap-4 pt-2">
<div className="px-4 py-2 rounded-lg bg-white border border-zinc-200 shadow-sm text-sm font-medium text-zinc-700">iOS App Clip</div>
<div className="px-4 py-2 rounded-lg bg-white border border-zinc-200 shadow-sm text-sm font-medium text-zinc-700">Android Instant</div>
</div>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-900 aspect-square lg:aspect-[4/3] group">
<img alt="App Usage" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="flex items-center gap-3 text-white mb-2">
<i className="w-5 h-5 text-emerald-400" data-lucide="wifi"></i>
<span className="font-medium">Connected</span>
</div>
<p className="text-zinc-400 text-sm">Signal strength strong. GPS locked.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Urban Exploration</h2>
<p className="text-zinc-500">See how our community moves through the city.</p>
</div>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group" href="#">
                    Follow on Instagram
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
<img alt="Gallery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
</div>

<div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group">
<img alt="Gallery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>

<div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group">
<img alt="Gallery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556316384-12c35d30afa4?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>

<div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group">
<img alt="Gallery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>

<div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-white p-6 text-center group-hover:bg-emerald-600 transition-colors duration-300 cursor-pointer">
<div>
<span className="block text-3xl font-bold mb-1">10k+</span>
<span className="text-xs text-white/70 uppercase tracking-widest">Daily Rides</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-16">Loved by daily commuters</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 mb-4 text-emerald-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<blockquote className="text-zinc-700 mb-6 leading-relaxed">
                        "I sold my car three months ago and haven't looked back. Escooty makes the last-mile problem nonexistent. The app is incredibly polished."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-semibold text-sm">JD</div>
<div>
<div className="text-sm font-semibold text-zinc-900">James D.</div>
<div className="text-xs text-zinc-500">Product Designer</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-transparent rounded-bl-full opacity-50"></div>
<div className="flex items-center gap-1 mb-4 text-emerald-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<blockquote className="text-zinc-700 mb-6 leading-relaxed">
                        "The subscription model is a game changer for students. I save about $150 a month compared to ridesharing services."
                    </blockquote>
<div className="flex items-center gap-3">
</div></div></div></div></section>
    </>
  );
}
