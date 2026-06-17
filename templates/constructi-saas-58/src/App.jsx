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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-neutral-900" data-icon="lucide:layers" data-width="20"></span>
<span className="text-sm font-semibold tracking-tight text-neutral-900">SITEFLOW</span>
</div>
<div className="hidden md:flex gap-8">
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="text-xs font-medium bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-800 transition-colors" href="#access">
                Request Access
            </a>
</div>
</nav>

<section className="pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="opacity-0 animate-fade-in mb-8 flex justify-center">
<div className="inline-flex items-center gap-2 border border-neutral-200 bg-neutral-50 rounded-full px-3 py-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600">Accepting Early Access Users</span>
</div>
</div>

<h1 className="opacity-0 animate-fade-in delay-100 text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                Site diaries completed <br className="hidden md:block"/>
                via <span className="text-neutral-400">WhatsApp</span> in seconds.
            </h1>

<p className="opacity-0 animate-fade-in delay-200 text-lg text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                Stop chasing incomplete reports. Engineers send photos &amp; notes via text. We automate the weather data, formatting, and PDF generation.
            </p>

<form className="opacity-0 animate-fade-in delay-300 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-6" onsubmit="event.preventDefault();">
<input className="w-full bg-white border border-neutral-200 rounded text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 placeholder:text-neutral-400 transition-all" placeholder="work@company.com" required="" type="email"/>
<button className="bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-neutral-800 transition-colors whitespace-nowrap shadow-sm shadow-neutral-500/20" type="submit">
                    Join Waitlist
                </button>
</form>

<p className="opacity-0 animate-fade-in delay-500 text-xs text-neutral-400">No credit card required. Free during beta.</p>
</div>
</section>

<section className="pb-24 px-6" id="how-it-works">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="relative group opacity-0 animate-fade-in delay-200">
<div className="absolute -inset-1 bg-gradient-to-r from-neutral-200 to-neutral-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">

<div className="bg-neutral-50 border-b border-neutral-100 p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500">
<span className="iconify" data-icon="lucide:bot" data-width="16"></span>
</div>
<div>
<div className="text-xs font-semibold text-neutral-900">SiteBot</div>
<div className="text-[10px] text-neutral-400">Online</div>
</div>
</div>

<div className="p-6 bg-[#efeae2]/30 space-y-4 h-[320px]">

<div className="flex justify-start">
<div className="bg-white border border-neutral-100 rounded-lg rounded-tl-none py-2 px-3 max-w-[85%] shadow-sm">
<p className="text-xs text-neutral-700 leading-relaxed">Good morning! Ready for today's log for Project Alpha?</p>
<span className="text-[10px] text-neutral-300 block mt-1 text-right">08:00 AM</span>
</div>
</div>

<div className="flex justify-end">
<div className="bg-[#d9fdd3] border border-green-100 rounded-lg rounded-tr-none p-1 max-w-[85%] shadow-sm">
<div className="h-24 bg-neutral-200 rounded mb-1 w-full flex items-center justify-center text-neutral-400">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
</div>
<p className="text-xs text-neutral-800 px-1">Foundation pour complete on Section B.</p>
<span className="text-[10px] text-green-700/50 block mt-1 text-right px-1">14:20 PM</span>
</div>
</div>

<div className="flex justify-end">
<div className="bg-[#d9fdd3] border border-green-100 rounded-lg rounded-tr-none py-2 px-3 max-w-[85%] shadow-sm flex items-center gap-2">
<span className="iconify text-neutral-500" data-icon="lucide:mic" data-width="14"></span>
<div className="h-1 w-16 bg-neutral-400/20 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-neutral-500 rounded-full"></div>
</div>
<span className="text-[10px] text-green-700/50">0:15</span>
</div>
</div>
</div>
</div>

<div className="hidden md:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 text-neutral-300">
<span className="iconify" data-icon="lucide:arrow-right" data-width="24"></span>
</div>
</div>

<div className="relative opacity-0 animate-fade-in delay-300">
<div className="absolute -inset-1 bg-gradient-to-l from-neutral-200 to-neutral-100 rounded-2xl blur opacity-25"></div>
<div className="relative bg-white border border-neutral-200 rounded-xl p-6 shadow-sm h-full min-h-[400px]">

<div className="flex justify-between items-start border-b border-neutral-100 pb-4 mb-4">
<div>
<div className="text-sm font-semibold tracking-tight">DAILY SITE LOG</div>
<div className="text-[10px] text-neutral-400 mt-1">Ref: #SL-2023-892</div>
</div>
<div className="text-right">
<div className="text-[10px] font-medium bg-neutral-100 px-2 py-1 rounded text-neutral-600">Generated Automatically</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-neutral-50 p-3 rounded border border-neutral-100">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-neutral-400" data-icon="lucide:cloud-rain" data-width="12"></span>
<span className="text-[10px] uppercase font-medium text-neutral-500">Weather</span>
</div>
<div className="text-xs font-medium">18°C, Light Rain</div>
<div className="text-[10px] text-neutral-400">Wind: 12km/h NW</div>
</div>
<div className="bg-neutral-50 p-3 rounded border border-neutral-100">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-neutral-400" data-icon="lucide:map-pin" data-width="12"></span>
<span className="text-[10px] uppercase font-medium text-neutral-500">Location</span>
</div>
<div className="text-xs font-medium">Project Alpha</div>
<div className="text-[10px] text-neutral-400">Lat: 51.5074, Long: 0.1278</div>
</div>
</div>

<div className="space-y-4">
<div>
<span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide">Log Entry • 14:20</span>
<p className="text-xs text-neutral-700 mt-1">Foundation pour complete on Section B. Concrete mix checked and approved by site supervisor.</p>
</div>
<div className="h-24 bg-neutral-100 rounded border border-neutral-200 flex items-center justify-center">
<span className="text-[10px] text-neutral-400">Attached Photo Evidence</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-b border-neutral-200" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-4">Built for the field, loved by the office.</h2>
<p className="text-sm text-neutral-500">Eliminate the friction of daily reporting. No apps to install, no passwords to forget.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-4 text-neutral-900">
<span className="iconify" data-icon="lucide:message-circle" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-2">Zero-App Submission</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Engineers use WhatsApp or Telegram. No training required. Works even with low connectivity.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-4 text-neutral-900">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-2">Automatic Enrichment</h3>
<p className="text-sm text-neutral-500 leading-relaxed">We automatically fetch historical weather data for the specific site location and timestamp every entry.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-4 text-neutral-900">
<span className="iconify" data-icon="lucide:file-check" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-2">Audit-Ready PDFs</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Daily logs are compiled into professional PDFs and emailed to stakeholders instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-center mb-12">Why switch to automation?</h2>
<div className="overflow-hidden border border-neutral-200 rounded-xl">
<table className="w-full text-left text-sm">
<thead className="bg-neutral-50 text-neutral-900 font-medium border-b border-neutral-200">
<tr>
<th className="px-6 py-4">Feature</th>
<th className="px-6 py-4">Traditional App</th>
<th className="px-6 py-4 bg-neutral-100">SiteFlow</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100 bg-white">
<tr>
<td className="px-6 py-4 text-neutral-500">Field Adoption</td>
<td className="px-6 py-4 text-neutral-500">Low (Complex UI)</td>
<td className="px-6 py-4 font-medium text-neutral-900 bg-neutral-50/50">High (WhatsApp)</td>
</tr>
<tr>
<td className="px-6 py-4 text-neutral-500">Weather Data</td>
<td className="px-6 py-4 text-neutral-500">Manual Entry</td>
<td className="px-6 py-4 font-medium text-neutral-900 bg-neutral-50/50">Automated</td>
</tr>
<tr>
<td className="px-6 py-4 text-neutral-500">Setup Time</td>
<td className="px-6 py-4 text-neutral-500">Days/Weeks</td>
<td className="px-6 py-4 font-medium text-neutral-900 bg-neutral-50/50">Minutes</td>
</tr>
<tr>
<td className="px-6 py-4 text-neutral-500">Cost</td>
<td className="px-6 py-4 text-neutral-500">$$$ Per User</td>
<td className="px-6 py-4 font-medium text-neutral-900 bg-neutral-50/50">Flat Site Fee</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-200" id="faq">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-10 text-center">Frequently asked questions</h2>
<div className="space-y-1">

<details className="group py-4 border-b border-neutral-100 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-800 hover:text-neutral-900 transition-colors">
<span>Do my engineers need to download an app?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-200">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-sm text-neutral-500 mt-3 leading-relaxed pr-8">
                        No. SiteFlow integrates directly with WhatsApp, Telegram, or SMS. Your team simply sends messages to a dedicated number, and our system parses the text and photos into a structured log automatically.
                    </p>
</details>

<details className="group py-4 border-b border-neutral-100 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-800 hover:text-neutral-900 transition-colors">
<span>How accurate is the weather data?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-200">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-sm text-neutral-500 mt-3 leading-relaxed pr-8">
                        We use precise geolocation data from the message metadata to pull historical weather conditions (Temperature, Precipitation, Wind) for that exact timestamp from trusted meteorological APIs.
                    </p>
</details>

<details className="group py-4 border-b border-neutral-100 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-800 hover:text-neutral-900 transition-colors">
<span>Can I customize the PDF report format?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-200">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-sm text-neutral-500 mt-3 leading-relaxed pr-8">
                        Yes. While our standard template adheres to industry standards (NEC/JCT compatible), Enterprise plans allow for custom branding, specific data fields, and layout adjustments to match your company's existing forms.
                    </p>
</details>

<details className="group py-4 border-b border-neutral-100 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-800 hover:text-neutral-900 transition-colors">
<span>Is there a limit on photos or storage?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-200">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-sm text-neutral-500 mt-3 leading-relaxed pr-8">
                        During the beta period, storage is unlimited. Post-beta, our standard plan includes 10GB of high-resolution photo storage per project, which is sufficient for approximately 2 years of daily logs for a typical site.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="access">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-neutral-100 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6">
                Start automating your site logs.
            </h2>
<p className="text-neutral-500 mb-8">
                Join the civil engineers saving 5+ hours a week on documentation.
            </p>
<form className="flex flex-col gap-4 max-w-sm mx-auto" onsubmit="event.preventDefault();">
<div className="flex flex-col text-left gap-1">
<label className="text-xs font-medium text-neutral-700 ml-1">Work Email</label>
<input className="bg-white border border-neutral-200 rounded-md h-10 px-3 focus:ring-1 focus:ring-neutral-400 focus:outline-none transition-shadow" placeholder="name@construction.com" required="" type="email"/>
</div>
<div className="flex items-center gap-2 mb-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-300 rounded bg-white peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors flex items-center justify-center">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-xs text-neutral-500 group-hover:text-neutral-700 select-none">I'm interested in WhatsApp integration</span>
</label>
</div>
<button className="bg-neutral-900 text-white h-10 rounded-md font-medium text-sm hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-500/10" type="submit">
                    Get Early Access
                </button>
</form>
</div>
</section>

<footer className="border-t border-neutral-200 bg-neutral-50 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:layers" data-width="18"></span>
<span className="text-xs font-semibold tracking-tight text-neutral-900">SITEFLOW</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-neutral-900" href="#">Twitter</a>
<a className="hover:text-neutral-900" href="#">LinkedIn</a>
<a className="hover:text-neutral-900" href="#">Privacy</a>
<a className="hover:text-neutral-900" href="#">Terms</a>
</div>
<div className="text-[10px] text-neutral-400">
                © 2023 SiteFlow Automation. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
