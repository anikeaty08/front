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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium tracking-tighter text-xl" href="#">
            SOLVAO
          </a>
<div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#solutions">
              Solutions
            </a>
<a className="hover:text-white transition-colors" href="#benchmark">
              Benchmark
            </a>
<a className="hover:text-white transition-colors" href="#methodology">
              Methodology
            </a>
<a className="hover:text-white transition-colors" href="#esg">
              Sustainability
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
            Login
          </a>
<a className="text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded hover:bg-zinc-200 transition-colors" href="#benchmark">
            Start Diagnosis
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
<div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Intelligence Layer v2.4 Live
          </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
            31–48% hidden energy variance between
            <span className="text-zinc-500">similar warehouses.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light mb-6">
            Most organisations manage energy site by site. Solvao detects the
            abnormal behavior hiding in cross-site variance that traditional
            monitoring misses.
          </p>
<p className="text-sm text-zinc-500 font-medium mb-10">
            Relevant for operations, energy, and sustainability leaders managing
            multi-site portfolios.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-white text-zinc-950 px-6 py-3 rounded font-medium text-sm hover:bg-zinc-200 transition-colors" href="#benchmark">
              See where variance hides
              <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="flex items-center justify-center gap-2 px-6 py-3 rounded font-medium text-sm text-zinc-300 border border-white/10 hover:bg-white/5 transition-colors" href="#methodology">
              How Solvao works
            </a>
</div>
</div>
</div>

<div className="mt-20 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="p-6 md:p-8">
<p className="text-4xl font-medium text-white tracking-tight mb-1">
              4,000+
            </p>
<p className="text-sm text-zinc-500">Facilities analysed</p>
</div>
<div className="p-6 md:p-8">
<p className="text-4xl font-medium text-white tracking-tight mb-1">
              5M+
            </p>
<p className="text-sm text-zinc-500">Work orders processed</p>
</div>
<div className="p-6 md:p-8">
<p className="text-4xl font-medium text-white tracking-tight mb-1">
              2 GW+
            </p>
<p className="text-sm text-zinc-500">Renewable fields benchmarked</p>
</div>
<div className="p-6 md:p-8">
<p className="text-4xl font-medium text-white tracking-tight mb-1">
              $42M
            </p>
<p className="text-sm text-zinc-500">Inefficiency identified</p>
</div>
</div>
</div>
</header>

<section className="py-24 bg-zinc-950 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">
              The silent erosion of margins
            </h2>
<p className="text-zinc-400 mb-6 leading-relaxed">
              In a portfolio of 50 assets, 10 are likely underperforming by
              &gt;20% without triggering BMS alarms. This is because BMS looks
              for faults, not inefficiency. This variance compounds silently
              until it appears in margins, emissions reporting, or both.
            </p>
<p className="text-zinc-400 mb-8 leading-relaxed">
              Solvao normalises data across production lines, environmental
              factors, and operational hours to reveal pure performance
              variance.
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-1" data-icon="lucide:bar-chart-2" data-width="18"></span>
<div>
<strong className="text-zinc-200 font-medium block text-sm">
                    Benchmarks vs Peers
                  </strong>
<span className="text-zinc-500 text-sm">
                    Compare your Site A against the industry top decile.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-1" data-icon="lucide:git-compare" data-width="18"></span>
<div>
<strong className="text-zinc-200 font-medium block text-sm">
                    Internal Benchmarking
                  </strong>
<span className="text-zinc-500 text-sm">
                    Identify why Plant B uses 15% more energy than Plant A for
                    the same output.
                  </span>
</div>
</li>
</ul>
</div>

<div className="relative bg-zinc-900/50 border border-white/10 rounded-lg p-8">
<div className="flex justify-between items-center mb-8">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Normalized Consumption (kWh/Unit)
              </span>
<span className="text-xs text-zinc-500">Live View</span>
</div>

<div className="relative h-64 w-full flex items-end justify-between gap-2">

<div className="absolute top-1/2 w-full h-px border-t border-dashed border-zinc-700"></div>
<div className="absolute top-1/2 right-0 -mt-6 text-xs text-zinc-500">
                Expected Baseline
              </div>

<div className="w-full bg-zinc-800/50 h-[45%] rounded-t-sm relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded border border-zinc-700 whitespace-nowrap">
                  Site A: Normal
                </div>
</div>
<div className="w-full bg-zinc-800/50 h-[48%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 border-t-2 border-indigo-500 h-[75%] rounded-t-sm relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-indigo-400 text-xs font-medium whitespace-nowrap">
                  +32% Variance
                </div>
</div>
<div className="w-full bg-zinc-800/50 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800/50 h-[46%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 border-t-2 border-indigo-500 h-[68%] rounded-t-sm relative"></div>
<div className="w-full bg-zinc-800/50 h-[49%] rounded-t-sm"></div>
</div>
<div className="mt-6 flex items-center justify-between text-xs text-zinc-500 border-t border-white/5 pt-4">
<span>Portfolio Overview</span>
<span className="text-indigo-400">2 Anomalies Detected</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl font-medium text-white mb-2">
            Designed for complex portfolios
          </h2>
<p className="text-zinc-500">
            Select your industry to see specific benchmarking capabilities.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-zinc-950 border border-white/10 p-6 rounded hover:border-indigo-500/30 transition-colors">
<span className="iconify text-zinc-400 mb-6 group-hover:text-indigo-400 transition-colors" data-icon="lucide:container" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">
              Logistics &amp; Warehousing
            </h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Detect HVAC and lighting variance across 50+ distribution centres.
              Correlate with throughput and weather data.
            </p>
<ul className="text-xs text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check"></span>
                Cooling load efficiency
              </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check"></span>
                Charging infrastructure load
              </li>
</ul>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">
              Explore logistics variance patterns →
            </a>
</div>

<div className="group bg-zinc-950 border border-white/10 p-6 rounded hover:border-indigo-500/30 transition-colors">
<span className="iconify text-zinc-400 mb-6 group-hover:text-indigo-400 transition-colors" data-icon="lucide:factory" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Manufacturing</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Isolate production energy per SKU. Identify idle-time consumption
              anomalies in specific assembly lines.
            </p>
<ul className="text-xs text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check"></span>
                Unit energy cost (UEC)
              </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check"></span>
                Shift-over variance
              </li>
</ul>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">
              See typical manufacturing inefficiencies →
            </a>
</div>

<div className="group bg-zinc-950 border border-white/10 p-6 rounded hover:border-indigo-500/30 transition-colors">
<span className="iconify text-zinc-400 mb-6 group-hover:text-indigo-400 transition-colors" data-icon="lucide:zap" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Renewables</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Benchmark geographically dispersed solar/wind assets. Detect
              string-level underperformance invisible to SCADA.
            </p>
<ul className="text-xs text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check"></span>
                Irradiance-adjusted output
              </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check"></span>
                Inverter peer analysis
              </li>
</ul>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">
              Benchmark renewable field performance →
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="benchmark">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            You don't need a demo.
            <br/>
            You need a benchmark.
          </h2>
<p className="text-zinc-400">
            Configure your portfolio to see indicative variance ranges.
          </p>
</div>
<div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
<div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/5">

<div className="space-y-6">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                  Industry
                </label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-white/10 text-white text-sm rounded px-3 py-2.5 appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-500">
<option>Logistics &amp; Distribution</option>
<option>Industrial Manufacturing</option>
<option>Renewable Energy</option>
<option>Data Centres</option>
</select>
<span className="iconify absolute right-3 top-3 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                  Number of Sites
                </label>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="500" min="5" type="range" value="45"/>
<div className="flex justify-between text-xs text-zinc-500 mt-2">
<span>5</span>
<span className="text-white">45 Sites</span>
<span>500+</span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">
                  Annual Energy Spend (Est.)
                </label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-zinc-500 text-sm">
                    $
                  </span>
<input className="w-full bg-zinc-950 border border-white/10 text-white text-sm rounded pl-6 pr-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-zinc-500" type="text" value="2,500,000"/>
</div>
</div>
</div>

<div className="bg-zinc-950 rounded border border-white/5 p-6 flex flex-col justify-between">
<div>
<p className="text-xs text-zinc-500 mb-1">
                  Estimated Annual Recoverable Waste
                </p>
<p className="text-3xl font-medium text-white tracking-tight">
                  $210k – $450k
                </p>
<div className="w-full h-1.5 bg-zinc-800 rounded-full mt-4 overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 w-2/3"></div>
</div>
<p className="text-[10px] text-zinc-500 mt-2 text-right">
                  Based on aggregated data from comparable multi-site portfolios
                  analysed by Solvao.
                </p>
</div>
<div className="space-y-3 mt-8">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Carbon Impact</span>
<span className="text-white">~480 tCO2e / yr</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Data Points Req.</span>
<span className="text-white">Meter + Production Data</span>
</div>
</div>
</div>
</div>

<div className="p-8 bg-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-center md:text-left">
<h3 className="text-sm font-medium text-white">
                Want a portfolio-specific calculation?
              </h3>
<p className="text-xs text-zinc-500 mt-1">
                Receive a detailed PDF benchmark report for your sector.
              </p>
</div>
<form className="flex w-full md:w-auto gap-2">
<input className="bg-zinc-950 border border-white/10 text-white text-sm rounded px-4 py-2 w-full md:w-64 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Work email" type="email"/>
<button className="bg-white text-zinc-950 px-4 py-2 rounded text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="submit">
                Get Report
              </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="methodology">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-16 text-center">
          From raw data to actionable intelligence
        </h2>
<div className="relative">
<div className="absolute left-[19px] top-0 bottom-0 w-px bg-zinc-800 md:left-1/2 md:-ml-px"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
<div className="ml-12 md:ml-0 md:w-5/12 md:text-right md:pr-12">
<h3 className="text-lg font-medium text-white mb-2">
                Ingestion &amp; Integration
              </h3>
<p className="text-sm text-zinc-400">
                We ingest data from utility meters, BMS, SCADA, and ERP systems
                via API or secure flat-file transfer. No hardware required.
              </p>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-5 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-10 text-zinc-400 group-hover:text-white group-hover:border-white transition-colors">
<span className="iconify" data-icon="lucide:database" data-width="18"></span>
</div>
<div className="hidden md:block md:w-5/12 md:pl-12">
<div className="text-xs text-zinc-600 font-mono bg-zinc-950 border border-zinc-800 p-3 rounded">
                POST /api/v1/telemetry
                <br/>
                { "site_id": "LDN-04", "kwh": 412.5 }
              </div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
<div className="hidden md:block md:w-5/12 md:pr-12 md:text-right">
<div className="text-xs text-zinc-600 font-mono bg-zinc-950 border border-zinc-800 p-3 rounded">
                Normalization:
                <span className="text-indigo-400">Active</span>
<br/>
                CDD/HDD Adjustment:
                <span className="text-indigo-400">Applied</span>
</div>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-5 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-10 text-zinc-400 group-hover:text-white group-hover:border-white transition-colors">
<span className="iconify" data-icon="lucide:sliders" data-width="18"></span>
</div>
<div className="ml-12 md:ml-0 md:w-5/12 md:pl-12">
<h3 className="text-lg font-medium text-white mb-2">
                Contextual Normalisation
              </h3>
<p className="text-sm text-zinc-400">
                Solvao aligns energy data with production output, weather
                (HDD/CDD), and shift patterns to ensure fair comparison.
              </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-8 group">
<div className="ml-12 md:ml-0 md:w-5/12 md:text-right md:pr-12">
<h3 className="text-lg font-medium text-white mb-2">
                Variance Detection
              </h3>
<p className="text-sm text-zinc-400">
                Our AI identifies statistical anomalies between similar sites.
                You receive alerts only when variance exceeds the defined
                threshold. No black boxes. All detected anomalies are traceable
                to underlying operational drivers.
              </p>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-5 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-10 text-zinc-400 group-hover:text-white group-hover:border-white transition-colors">
<span className="iconify" data-icon="lucide:alert-circle" data-width="18"></span>
</div>
<div className="hidden md:block md:w-5/12 md:pl-12"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30" id="esg">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
            Sustainability
          </div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">
            Variance is carbon.
          </h2>
<p className="text-zinc-400 mb-6 leading-relaxed">
            Inefficiency isn't just a cost problem; it's an emissions problem.
            Scope 2 reporting requires precision, not estimation.
          </p>
<p className="text-zinc-400 mb-8 leading-relaxed">
            By eliminating unnecessary variance, Solvao customers typically
            reduce Scope 2 emissions by 8-12% in the first year without capital
            expenditure on new equipment.
          </p>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:file-check" data-width="20"></span>
<span className="text-sm text-zinc-300">Auditable Data</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:leaf" data-width="20"></span>
<span className="text-sm text-zinc-300">ISO 50001 Support</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-zinc-950 p-8 border border-white/5 rounded-xl">
<h3 className="text-sm font-medium text-zinc-300 mb-6">
            Emission Reduction Projection
          </h3>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs text-zinc-500 mb-1">
<span>Business as Usual</span>
<span>4,200 tCO2e</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-2">
<div className="bg-zinc-600 h-2 rounded-full w-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-zinc-500 mb-1">
<span>With Solvao (Year 1)</span>
<span className="text-emerald-400">-420 tCO2e</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full w-[90%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm mb-8 text-zinc-300 font-medium">
          Enterprise-grade security and compliance
        </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">

<span className="text-lg font-bold text-zinc-400 tracking-tighter">
            SOC2 Type II
          </span>
<span className="text-lg font-bold text-zinc-400 tracking-tighter">
            GDPR
          </span>
<span className="text-lg font-bold text-zinc-400 tracking-tighter">
            ISO 27001
          </span>
<span className="text-lg font-bold text-zinc-400 tracking-tighter">
            AES-256
          </span>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-white font-medium tracking-tighter text-xl block mb-6" href="#">
              SOLVAO
            </a>
<p className="text-xs text-zinc-500 leading-relaxed">
              Energy intelligence for the industrial enterprise. Identifying
              variance, reducing waste, verifying sustainability.
            </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Benchmarking
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Anomaly Detection
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Security
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Case Studies
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  System Status
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600">
            © 2024 Solvao Inc. All rights reserved.
          </p>
<div className="flex items-center gap-4">
<span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50"></span>
<span className="text-[10px] text-zinc-600">
              Operational: 100% Uptime
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
