import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6', // Teal
600: '#0d9488',
900: '#134e4a',
},
slate: {
850: '#1e293b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">AIR<span className="text-brand-600">DELHI</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#">Map View</a>
<a className="hover:text-brand-600 transition-colors" href="#">Predictions</a>
<a className="hover:text-brand-600 transition-colors" href="#">Health Tips</a>
</div>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">
                Emergency SOS
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-map-pattern opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
<span>Powered by Random Forest Ensemble ML</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tighter mb-6 leading-tight">
                Predict Your Local AQI &amp; <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">Protect Your Lungs</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Real-time hyperlocal air quality monitoring for Delhi. Enter your PIN code to analyze PM2.5 levels and get personalized respiratory health advice.
            </p>

<div className="max-w-md mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<form className="relative bg-white rounded-xl shadow-xl p-2 flex items-center gap-2 border border-slate-100">
<div className="pl-4 text-slate-400">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 h-10 text-sm font-medium focus:ring-0" placeholder="Enter PIN Code" type="text" value="110001"/>
<button className="bg-brand-600 hover:bg-brand-700 text-white h-10 px-6 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm" type="button">
                        Analyze
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
<p className="mt-4 text-xs text-slate-400">Data updated: Feb 2026 • Source: CPCB &amp; OpenAQ</p>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 pb-24">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-medium text-slate-900 tracking-tight flex items-center gap-2">
                    Connaught Place, Delhi
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-md border border-slate-200">110001</span>
</h2>
<p className="text-sm text-slate-500 mt-1">Prediction valid for next 6 hours</p>
</div>
<div className="flex gap-3">
<button className="text-xs font-medium bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg hover:bg-slate-50">Export Report</button>
<button className="text-xs font-medium bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg hover:bg-slate-50">Share</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute top-0 w-full h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"></div>
<h3 className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">Air Quality Index</h3>

<div className="relative w-48 h-48 mb-4">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">

<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>

<path className="text-red-500 gauge-circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="65, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-5xl font-semibold text-slate-900 tracking-tighter">165</span>
<span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full mt-2">Unhealthy</span>
</div>
</div>
<div className="w-full grid grid-cols-2 gap-4 mt-2">
<div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
<div className="text-xs text-slate-500 mb-1">PM2.5</div>
<div className="text-lg font-semibold text-slate-800">75 <span className="text-xs font-normal text-slate-400">µg/m³</span></div>
</div>
<div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
<div className="text-xs text-slate-500 mb-1">PM10</div>
<div className="text-lg font-semibold text-slate-800">182 <span className="text-xs font-normal text-slate-400">µg/m³</span></div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="grid grid-cols-2 gap-6 h-full">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<iconify-icon className="text-orange-400" icon="solar:cloud-sun-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-slate-400">Live</span>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">32°C</div>
<div className="text-sm text-slate-500">Haze &amp; Smoke</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<iconify-icon className="text-blue-400" icon="solar:wind-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-slate-400">Wind</span>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">8 <span className="text-base font-normal text-slate-500">km/h</span></div>
<div className="text-sm text-slate-500">NW Direction</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-slate-900">Pollutant Levels vs WHO Limits</h3>
<iconify-icon className="text-slate-400" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="space-y-5">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-slate-700">PM2.5</span>
<span className="text-red-500 font-medium">4x Safe Limit</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[75%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-slate-700">NO2</span>
<span className="text-orange-400 font-medium">Moderate</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-400 w-[45%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-slate-700">Ozone (O3)</span>
<span className="text-brand-500 font-medium">Good</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 w-[20%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-slate-900 text-white rounded-2xl p-6 shadow-lg flex flex-col relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
<div className="flex items-center gap-2 mb-6 text-brand-400">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest">Health Risk</span>
</div>
<div className="flex-1">
<div className="text-5xl font-light mb-2">High</div>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Lung Vulnerability Score is elevated. Respiratory risks increased by <strong>20%</strong> today.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
<p className="text-xs text-slate-300">Asthma patients should avoid outdoor exertion.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></div>
<p className="text-xs text-slate-300">Children and elderly wear masks outdoors.</p>
</div>
</div>
</div>
<button className="mt-8 w-full py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    Consult Pulmonologist
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-200 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">Pollution Hotspots</h2>
<p className="text-sm text-slate-500 mb-6">Real-time station data from CPCB across Delhi NCR.</p>
<div className="aspect-video bg-slate-100 rounded-2xl border border-slate-200 relative overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/77.2090,28.6139,10,0/800x600?access_token=placeholder')] bg-cover bg-center grayscale opacity-60"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md animate-pulse"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[10px] font-bold whitespace-nowrap">You</div>
</div>
</div>
<div className="absolute top-1/3 left-1/3">
<div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-md"></div>
</div>
<div className="absolute bottom-1/4 right-1/4">
<div className="w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-md"></div>
</div>

<div className="absolute bottom-4 right-4 flex flex-col gap-2">
<button className="w-8 h-8 bg-white rounded-lg shadow text-slate-600 flex items-center justify-center hover:bg-slate-50">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
<button className="w-8 h-8 bg-white rounded-lg shadow text-slate-600 flex items-center justify-center hover:bg-slate-50">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">Recommended Solutions</h2>
<p className="text-sm text-slate-500 mb-8">AI-driven suggestions to lower your exposure.</p>
<div className="space-y-4">

<div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Timing Matters</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Pollution peaks between 7 AM - 9 AM. Shift outdoor activities to late afternoon (3 PM - 5 PM) when PM levels drop.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Dietary Defense</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Consume ginger tea and jaggery to help clear respiratory tracts. Increases immunity against oxidative stress.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Indoor Purification</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Use HEPA filters. Keep windows closed during peak traffic hours. Introduce Snake Plants for natural filtration.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="flex items-center gap-2 justify-center md:justify-start mb-2">
<div className="w-6 h-6 bg-slate-200 rounded text-slate-500 flex items-center justify-center">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-700">Delhi AQI Predictor</span>
</div>
<p className="text-xs text-slate-400 max-w-sm">
                    Predictions generated using Random Forest Ensemble models trained on NTCC Dataset (2020-2025). Accuracy rate: 94%. Not a substitute for medical advice.
                </p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
