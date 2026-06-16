import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple simulation logic for the dashboard
        function simulatePrediction() {
            const btn = document.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = '<iconify-icon icon="svg-spinners:ring-resize" width="18"></iconify-icon> Processing...';
            btn.disabled = true;
            btn.classList.add('opacity-75');

            setTimeout(() => {
                // Restore button
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.classList.remove('opacity-75');

                // "Update" the result (Simulated)
                const resultCard = document.getElementById('result-card');
                
                // Add a flash effect
                resultCard.classList.add('ring-4', 'ring-teal-500/30');
                setTimeout(() => resultCard.classList.remove('ring-4', 'ring-teal-500/30'), 500);
                
                // Scroll to result on mobile
                if(window.innerWidth < 1024) {
                    resultCard.scrollIntoView({behavior: 'smooth', block: 'center'});
                }
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 glass-panel">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-teal-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-sm">DELHIPRED</span>
</div>
<div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-teal-700 transition-colors" href="#dashboard">Dashboard</a>
<a className="hover:text-teal-700 transition-colors" href="#visuals">Visualizations</a>
<a className="hover:text-teal-700 transition-colors" href="#insights">Model Insights</a>
<a className="hover:text-teal-700 transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-3">
<a className="text-slate-500 hover:text-slate-900" href="#">
<iconify-icon icon="solar:github-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors shadow-sm">
                        View Notebook
                    </button>
</div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl opacity-50"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                Updated with 2024 NTCC Dataset
            </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6">
                Predict Delhi's Air <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Pollution Levels with AI</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                Forecast pollution groups (Low, Mid, High) using ensemble machine learning models. 
                Upload your CSV data or input values directly to analyze PM2.5 trends and health risks.
            </p>
<div className="flex justify-center gap-4">
<a className="bg-teal-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-teal-800 transition-all shadow-lg shadow-teal-900/10 flex items-center gap-2" href="#dashboard">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
                    Try Prediction
                </a>
<a className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2" href="#insights">
<iconify-icon icon="solar:book-bookmark-linear" width="18"></iconify-icon>
                    Methodology
                </a>
</div>
</div>
</header>

<section className="py-16 bg-white border-y border-slate-200" id="dashboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Live Prediction Console</h2>
<p className="text-slate-500 text-sm mt-1">Input atmospheric parameters to classify air quality.</p>
</div>
<div className="flex gap-3 mt-4 md:mt-0">
<button className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors">
<iconify-icon icon="solar:upload-linear" width="16"></iconify-icon>
                        Batch Upload (CSV)
                    </button>
<button className="flex items-center gap-2 text-xs font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-2 rounded-lg transition-colors">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
                        Reset
                    </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8">
<form id="predict-form" onsubmit="event.preventDefault(); simulatePrediction();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 flex justify-between">
                                    AQI Level
                                    <span className="text-slate-400" id="aqi-val">320</span>
</label>
<input className="w-full" max="500" min="0" oninput="document.getElementById('aqi-val').innerText = this.value" type="range" value="320"/>
<div className="flex justify-between text-[10px] text-slate-400 font-medium">
<span>Good</span>
<span>Hazardous</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">PM 2.5 (µg/m³)</label>
<div className="relative">
<input className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 bg-slate-50/50" type="number" value="145"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span className="text-slate-400 text-xs">µg</span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">PM 10 (µg/m³)</label>
<input className="block w-full rounded-lg border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-teal-600 sm:text-sm bg-slate-50/50" type="number" value="210"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">NO2 (ppb)</label>
<input className="block w-full rounded-lg border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-teal-600 sm:text-sm bg-slate-50/50" type="number" value="45.2"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">SO2 (ppb)</label>
<input className="block w-full rounded-lg border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-teal-600 sm:text-sm bg-slate-50/50" type="number" value="12.5"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Ozone (O3)</label>
<input className="block w-full rounded-lg border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-teal-600 sm:text-sm bg-slate-50/50" type="number" value="38.1"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Region</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2 pl-3 pr-8 text-slate-900 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-teal-600 sm:text-sm bg-slate-50/50 appearance-none">
<option>Delhi (NCR)</option>
<option>North India (Punjab)</option>
<option>Haryana</option>
<option>Uttar Pradesh</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Season</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2 pl-3 pr-8 text-slate-900 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-teal-600 sm:text-sm bg-slate-50/50 appearance-none">
<option>Winter</option>
<option>Pre-Monsoon</option>
<option>Monsoon</option>
<option>Post-Monsoon</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
<button className="bg-teal-900 hover:bg-teal-800 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-md flex items-center gap-2" type="submit">
                                Run Inference Model
                                <iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</div>

<div className="lg:col-span-5 space-y-6">

<div className="bg-slate-900 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden group" id="result-card">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-orange-500/20 blur-3xl transition-opacity opacity-50 group-hover:opacity-70"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Prediction Result</span>
<iconify-icon className="text-orange-400" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-1 text-orange-100">Mid — Unhealthy</h3>
<p className="text-slate-400 text-sm mb-6">Take precautions. Sensitive groups should wear masks.</p>

<div className="space-y-3">
<div>
<div className="flex justify-between text-xs text-slate-400 mb-1">
<span>Low Risk</span>
<span>12%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[12%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-orange-200 mb-1 font-medium">
<span>Mid Risk (Predicted)</span>
<span>78%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[78%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-400 mb-1">
<span>High Risk</span>
<span>10%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-[10%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
<iconify-icon className="text-teal-700" icon="solar:graph-up-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900">Feature Importance (SHAP)</h4>
</div>
<div className="space-y-3">
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600 group-hover:text-slate-900">PM 2.5</span>
<span className="text-slate-500 font-mono">+0.32</span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 bg-blue-100 flex-1 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[85%]"></div>
</div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600 group-hover:text-slate-900">Season (Winter)</span>
<span className="text-slate-500 font-mono">+0.18</span>
</div>
<div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 w-[60%]"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600 group-hover:text-slate-900">Wind Speed</span>
<span className="text-slate-500 font-mono">-0.12</span>
</div>
<div className="h-1.5 bg-rose-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-400 w-[45%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="visuals">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10 text-center md:text-left">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Dataset Analysis</h2>
<p className="text-slate-500 text-sm mt-2 max-w-xl">
                    Exploratory Data Analysis (EDA) on 2000+ samples from the NTCC dataset, highlighting the correlation between meteorological factors and pollutants.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-sm font-semibold text-slate-800 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:widget-linear"></iconify-icon> Correlation Matrix
                    </h3>

<div className="grid grid-cols-5 gap-1 aspect-square">
<div className="bg-blue-600 rounded-sm"></div><div className="bg-blue-400 rounded-sm"></div><div className="bg-blue-200 rounded-sm"></div><div className="bg-blue-100 rounded-sm"></div><div className="bg-slate-100 rounded-sm"></div>
<div className="bg-blue-400 rounded-sm"></div><div className="bg-blue-600 rounded-sm"></div><div className="bg-blue-300 rounded-sm"></div><div className="bg-blue-50 rounded-sm"></div><div className="bg-slate-50 rounded-sm"></div>
<div className="bg-blue-200 rounded-sm"></div><div className="bg-blue-300 rounded-sm"></div><div className="bg-blue-600 rounded-sm"></div><div className="bg-blue-200 rounded-sm"></div><div className="bg-blue-100 rounded-sm"></div>
<div className="bg-blue-100 rounded-sm"></div><div className="bg-blue-50 rounded-sm"></div><div className="bg-blue-200 rounded-sm"></div><div className="bg-blue-600 rounded-sm"></div><div className="bg-blue-300 rounded-sm"></div>
<div className="bg-slate-100 rounded-sm"></div><div className="bg-slate-50 rounded-sm"></div><div className="bg-blue-100 rounded-sm"></div><div className="bg-blue-300 rounded-sm"></div><div className="bg-blue-600 rounded-sm"></div>
</div>
<p className="text-[10px] text-slate-400 mt-3 text-center">High correlation observed between PM2.5 and Winter Season.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-sm font-semibold text-slate-800 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon> Pollution Group Distribution
                    </h3>
<div className="h-64 flex items-end justify-between gap-2 px-2 border-b border-slate-100 pb-2">

<div className="w-full bg-emerald-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-emerald-500 rounded-t-sm transition-all h-[25%] group-hover:bg-emerald-600"></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded">25%</div>
</div>
<div className="w-full bg-orange-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-orange-400 rounded-t-sm transition-all h-[45%] group-hover:bg-orange-500"></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded">45%</div>
</div>
<div className="w-full bg-rose-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-rose-500 rounded-t-sm transition-all h-[30%] group-hover:bg-rose-600"></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded">30%</div>
</div>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-2 px-2">
<span>Low</span>
<span>Mid</span>
<span>High</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Hotspots: North India
                    </h3>
<div className="h-64 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex items-center justify-center relative overflow-hidden">

<div className="absolute w-32 h-32 bg-rose-500/10 rounded-full blur-xl top-1/4 left-1/4"></div>
<div className="absolute w-24 h-24 bg-orange-500/10 rounded-full blur-xl bottom-1/3 right-1/4"></div>
<div className="text-center z-10">
<div className="inline-flex flex-col items-center">
<iconify-icon className="text-rose-500 text-3xl drop-shadow-sm" icon="solar:map-point-bold"></iconify-icon>
<span className="text-xs font-bold text-slate-700 mt-1">Delhi NCR</span>
<span className="text-[10px] text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded mt-1">Avg PM2.5: 280</span>
</div>
</div>
</div>
<p className="text-[10px] text-slate-400 mt-3">Geographic focus on Indo-Gangetic Plain winter inversion.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200" id="insights">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Ensemble Model Performance</h2>
<p className="text-slate-500 text-sm mt-2">Evaluating Random Forest, Gradient Boosting, and MLP classifiers.</p>
</div>
<div className="overflow-hidden rounded-xl border border-slate-200">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider" scope="col">Model</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider" scope="col">Accuracy</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider" scope="col">F1-Macro</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider" scope="col">ROC AUC</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-slate-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Random Forest</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">94.2%</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">0.93</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">0.98</td>
</tr>
<tr className="bg-teal-50/30">
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-900 flex items-center gap-2">
                                Ensemble (Stacked)
                                <span className="bg-teal-100 text-teal-700 text-[10px] px-1.5 py-0.5 rounded font-bold">BEST</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-teal-800 font-semibold">96.5%</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-teal-800 font-semibold">0.95</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-teal-800 font-semibold">0.99</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Gradient Boosting</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">92.1%</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">0.91</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">0.96</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
<div className="space-y-4">
<h3 className="text-lg font-semibold text-slate-900">Why Delhi?</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Delhi faces a unique combination of geographic "bowl effect," winter temperature inversion, and stubble burning from neighboring states. Our models specifically weigh seasonal features heavily to account for the drastic spike in AQI during October-January.
                    </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-linear"></iconify-icon>
<span>Tuned with Optuna for hyperparameters</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-linear"></iconify-icon>
<span>Addresses class imbalance in "High" pollution days</span>
</li>
</ul>
</div>
<div className="bg-slate-900 rounded-xl p-6 text-slate-300 text-sm font-mono">
<div className="flex items-center gap-2 border-b border-slate-700 pb-2 mb-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="ml-auto text-xs opacity-50">inference.py</span>
</div>
<p className="text-teal-400">def predict_pollution(data):</p>
<p className="pl-4"># Load calibrated ensemble</p>
<p className="pl-4">model = load('voting_clf.pkl')</p>
<p className="pl-4">probs = model.predict_proba(data)</p>
<p className="pl-4">return parse_group(probs)</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight">DELHIPRED</span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-sm">
                        An open-source initiative to democratize air quality forecasting using advanced machine learning. Built on the NTCC Dataset with data from CPCB and WHO.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-teal-700" href="#">Download Dataset</a></li>
<li><a className="hover:text-teal-700" href="#">Model Weights (.pkl)</a></li>
<li><a className="hover:text-teal-700" href="#">IEEE Paper Draft</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Contact</h4>
<form className="space-y-2">
<input className="w-full text-sm rounded-lg border-slate-200 focus:ring-teal-600 focus:border-teal-600 bg-white" placeholder="Enter your email" type="email"/>
<button className="w-full bg-slate-200 text-slate-700 text-xs font-medium py-2 rounded-lg hover:bg-slate-300 transition-colors">Subscribe for Updates</button>
</form>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2026 Delhi Pollution Predictor. Updated Feb 2026.
                </p>
<p className="text-xs text-slate-400">
                    Disclaimer: Predictions based on 2024 historical data. For real-time medical advice, consult official government apps.
                </p>
</div>
</div>
</footer>


    </>
  );
}
