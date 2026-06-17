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
      

<nav className="flex fixed md:px-8 transition-all z-50 bg-white/95 w-full border-zinc-100 border-b pt-4 pr-4 pb-4 pl-4 top-0 backdrop-blur-md items-center justify-between">

<div className="flex items-center gap-3 md:gap-5 scale-[0.7] sm:scale-90 lg:scale-100 origin-left whitespace-nowrap select-none">

<div className="flex items-center gap-2.5">
<svg className="w-12 h-12 text-[#0060b6]" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd" viewbox="0 0 100 100">
<path d="M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 
                             M -10,24 L 46,24 L 58,33 L 46,42 L -10,42 Z 
                             M -10,46 L 62,46 L 74,55 L 62,64 L -10,64 Z 
                             M -10,68 L 46,68 L 58,77 L 46,86 L -10,86 Z"></path>
</svg>
<div className="flex flex-col text-black font-bold text-[19px] leading-[1.05] tracking-tight font-sans">
<span className="">Economy</span>
<span>League</span>
</div>
</div>
<div className="w-[1.5px] h-10 bg-zinc-200 ml-1"></div>

<div className="flex flex-col text-[#7d7d7d] text-[11px] leading-[1.25] tracking-[0.15em] uppercase font-sans font-medium mr-1">
<span className="">Greater</span>
<span>Philadelphia</span>
</div>
<div className="w-[1.5px] h-10 bg-zinc-200"></div>

<div className="flex items-center gap-2.5 pl-1">
<svg className="w-12 h-12 text-[#2f78f9]" fill="currentColor" viewbox="0 0 100 100">
<path className="" d="M 15 15 L 35 15 L 35 50 C 35 25 65 25 65 50 L 65 15 L 85 15 L 85 85 L 65 85 L 65 60 C 65 40 35 40 35 60 L 35 85 L 15 85 Z"></path>
</svg>
<div className="flex flex-col font-bold text-[20px] leading-[1.05] tracking-tight font-sans">
<span className="text-[#2f78f9] uppercase">Bridge</span>
<span className="text-[#202937]">Civic</span>
</div>
</div>
</div>
<div className="hidden xl:flex items-center gap-10">
<div className="flex items-center gap-8">
<a className="text-base font-semibold text-zinc-900" href="#">Home</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">About Us</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Explore Datasets</a>
<button className="flex items-center gap-1.5 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                    Insights <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-1.5 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                    Help Center <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
</div>
<div className="flex items-center gap-4">
<button className="border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 px-6 py-2.5 rounded-full text-base font-medium transition-colors">Login</button>
<button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5 rounded-full text-base font-medium transition-colors">Sign Up</button>
</div>
</div>
<button className="xl:hidden text-zinc-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</nav>

<section className="min-h-[80vh] flex flex-col overflow-hidden pt-40 pr-6 pb-20 pl-6 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl -z-10 opacity-30 pointer-events-none">
<div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent -translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-end mt-12">
<div className="md:col-span-8">
<h1 className="md:text-7xl lg:text-[100px] leading-none uppercase text-5xl text-zinc-900 tracking-tighter font-mono">Uncover public insights,<br/>tELL POWERFUL STORIES_</h1>
</div>
<div className="md:col-span-4 flex flex-col items-start gap-8 md:pb-4">
<p className="text-lg text-zinc-700 max-w-sm">A one-stop shop for data to help build trust through data democracy.</p>
<button className="bg-[#2f78f9] text-white px-6 py-3 rounded text-sm font-mono flex items-center gap-2 hover:bg-blue-600 transition-colors">
                    see how it works <span>-&gt;</span>
</button>
</div>
</div>
</section>

<section className="flex flex-col w-full">

<div className="border-y overflow-x-auto hide-scrollbar bg-zinc-50/50 border-zinc-200 pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-12 md:gap-24 min-w-max max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-baseline">
<div className="flex items-baseline gap-2">
<span className="md:text-5xl text-4xl text-zinc-900 tracking-tight font-mono">30+</span>
<span className="uppercase leading-tight text-xs text-zinc-500 font-mono w-24">Datasets</span>
</div>
<div className="flex items-baseline gap-2">
<span className="md:text-5xl text-4xl text-zinc-900 tracking-tight font-mono">14+</span>
<span className="uppercase leading-tight text-xs text-zinc-500 font-mono w-24">Civic<br/>Topics</span>
</div>
<div className="flex items-baseline gap-2">
<span className="md:text-5xl text-4xl text-zinc-900 tracking-tight font-mono">10+</span>
<span className="uppercase leading-tight text-xs text-zinc-500 font-mono w-24">Data<br/>Partners</span>
</div>
</div>
</div>

<div className="flex flex-col w-full pt-28 pr-6 pb-36 pl-6 relative items-center justify-center" style={{background: 'linear-gradient(180deg, #a7d5e6 0%, #fbfaf6 45%, #f6e0d3 100%)'}}>
<h1 className="md:text-7xl text-5xl font-medium text-yellow-400 tracking-tight text-center mb-6">Explore Datasets by Themes</h1>
<p className="md:text-2xl leading-relaxed text-xl font-light text-zinc-700 text-center max-w-3xl mb-12">Bridge Civic lets you build various types of visualizations tailored to your needs in minutes.</p>

<div className="w-full max-w-[800px] relative mb-16">
<div className="flex flex-col bg-[#fefdfc] h-[180px] border-white border rounded-[2rem] pt-6 pr-6 pb-6 pl-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
<textarea className="resize-none outline-none md:text-2xl placeholder-zinc-400 text-xl font-light text-zinc-800 bg-transparent w-full h-full" placeholder="Des" spellcheck="false">Des</textarea>
<div className="flex justify-end mt-auto">
<button className="hover:bg-[#e04b1e] transition-colors flex text-white bg-yellow-400 w-12 h-12 rounded-full shadow-sm items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-arrow-up w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-8 w-full">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-[0.15em] text-center">Not sure where to start? Try one of these:</p>
<div className="flex flex-wrap gap-4 max-w-4xl gap-x-4 gap-y-4 justify-center">
<button className="hover:bg-white transition-all text-base font-normal text-zinc-700 bg-[#fdfcfb] border-zinc-200/80 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm">Data Dashboard</button>
<button className="hover:bg-white transition-all text-base font-normal text-zinc-700 bg-[#fdfcfb] border-zinc-200/80 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm">Impact Story Blogs</button>
<button className="hover:bg-white transition-all text-base font-normal text-zinc-700 bg-[#fdfcfb] border-zinc-200/80 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm">User Portal</button>
<button className="hover:bg-white transition-all text-base font-normal text-zinc-700 bg-[#fdfcfb] border-zinc-200/80 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm">ELGP Data Reports</button>
<button className="hover:bg-white transition-all text-base font-normal text-zinc-700 bg-[#fdfcfb] border-zinc-200/80 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm">Analysis Series</button>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-gray-50 bg-gray-50 pt-24 pr-6 pb-32 pl-6 relative">

<div className="flex flex-col md:flex-row max-w-7xl mr-auto mb-32 ml-auto gap-x-12 gap-y-12 items-start justify-between">
<div className="md:w-1/2 w-full">
<h2 className="md:text-4xl leading-snug text-3xl text-blue-800 tracking-tight font-mono mb-8">Your Portal to Public Data &amp; Civic Impact</h2>
<p className="text-base text-blue-800 tracking-tight font-mono">BRIDGE Civic is your gateway to credible, easy-to-explore civic data. Developed by the Economy League of Greater Philadelphia, BRDIGE Civic brings together public datasets, data visualizations, and storytelling tools--so that journalists, researchers, advocates, and everyday citizens can understand the region's most pressing challenges. Whether you're uncovering trends in education, health, or public safety, BRIDGE Civic helps you transform raw data into powerful narratives that drive awareness and change.</p>
</div>
</div>
<div className="max-w-7xl border-zinc-800 border-t mr-auto ml-auto pt-12">
<p className="text-5xl text-yellow-400 tracking-tight font-inter mb-16">Why Bridge Civic</p>
<div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-x-12 gap-y-12">

<div className="flex flex-col bg-blue-800 border-yellow-400 border rounded-xl gap-x-6 gap-y-6">
<div className="flex w-16 h-16 border-zinc-800 border-0 rounded items-center justify-center">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="map"></i>
</div>
<h3 className="text-xl font-bold italic text-gray-50 tracking-tight font-mono">01 Find Data</h3>
<p className="text-lg font-bold text-yellow-400">Browse credible datasets by theme, region, or keyword.</p>
</div>

<div className="flex flex-col bg-yellow-400 border-blue-800 border rounded-xl gap-x-6 gap-y-6">
<div className="flex w-16 h-16 border-zinc-800 border-0 rounded items-center justify-center">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="network"></i>
</div>
<h3 className="text-xl font-bold italic text-gray-50 tracking-tight font-mono">02 Visaulize Trends</h3>
<p className="text-lg font-bold text-blue-800">Use our built-in tools to turn raw numbers into powerful visuals.</p>
</div>

<div className="flex flex-col bg-yellow-400 border-blue-800 border-2 rounded-3xl [--fx-filter:blur(10px)_liquid-glass(1.5,10)_saturate(1.25)_noise(0.5,1,0.05)] gap-x-3 gap-y-3">
<div className="flex w-16 h-16 border-zinc-800 border-0 rounded items-center justify-center">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-bold italic text-gray-50 tracking-tight font-mono"> 03 Analyze with Insight</h3><p className="text-lg font-bold text-blue-800">Compare, filter, and explore data over time, geography, or demography.</p>
</div>

<div className="flex flex-col gap-6 bg-blue-800 border-yellow-400 border rounded-xl gap-x-6 gap-y-6">
<div className="flex w-16 h-16 border-zinc-800 border-0 rounded items-center justify-center">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="database"></i>
</div>
<h3 className="text-xl font-bold italic text-gray-50 tracking-tight font-mono">04 Share Impact Stories</h3>
<p className="text-lg font-bold text-yellow-400">Craft and submit your own stories based on the data--and get featured.</p>
</div>
</div>
</div>

<div className="flex flex-col text-center max-w-5xl mt-40 mr-auto ml-auto gap-x-6 gap-y-6">
<p className="text-5xl font-semibold italic text-blue-800 tracking-tight font-poppins mb-4">Explore Datasets in...</p>
<h2 className="md:text-4xl hover:text-[#2f78f9] transition-colors cursor-default text-2xl text-yellow-400 tracking-tight font-mono">Budget/Finance</h2>
<h2 className="md:text-4xl hover:text-[#2f78f9] transition-colors cursor-default text-2xl text-yellow-400 tracking-tight font-mono">Business</h2>
<h2 className="md:text-4xl hover:text-[#2f78f9] transition-colors cursor-default text-2xl text-yellow-400 tracking-tight font-mono">Civix Engagement</h2>
<h2 className="md:text-4xl hover:text-[#2f78f9] transition-colors cursor-default text-2xl text-yellow-400 tracking-tight font-mono">Crime &amp; Justic</h2>
</div>

</section>


<div className="px-6 pb-24 bg-zinc-50">
<section className="md:p-12 bg-blue-50/50 max-w-7xl border-blue-100 border rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<div className="flex gap-4 mb-12 gap-x-4 gap-y-4 items-center">
<h2 className="md:text-4xl text-3xl text-zinc-900 tracking-tight font-mono">Impact Stories</h2>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x">

<div className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl p-6 snap-start shadow-sm border border-zinc-100">
<h3 className="text-xl text-zinc-900 tracking-tight font-mono h-16 mb-6">Regional transport...</h3>
<div className="h-32 rounded-lg bg-gradient-to-br from-blue-100 to-sky-50 mb-6 relative overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')]"></div>
<div className="absolute w-32 h-32 bg-blue-500 blur-2xl rounded-full -top-10 -left-10 mix-blend-overlay"></div>
</div>
<p className="text-lg font-light text-zinc-600">Economic benefits of implementing inter-city travel via state infrastructure rails...</p>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl p-6 snap-start shadow-sm border border-zinc-100">
<h3 className="text-xl text-zinc-900 tracking-tight font-mono h-16 mb-6">......</h3>
<div className="h-32 rounded-lg bg-zinc-100 mb-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')]"></div>
<div className="absolute w-full h-full bg-gradient-to-t from-zinc-200 to-transparent opacity-50"></div>
</div>
<p className="text-lg font-light text-zinc-600">..........</p>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl p-6 snap-start shadow-sm border border-zinc-100">
<h3 className="font-mono text-xl tracking-tight text-zinc-900 mb-6 h-16">Healthcare provider verifies insurance</h3>
<div className="h-32 rounded-lg bg-slate-50 mb-6 flex items-center justify-center overflow-hidden border border-slate-100">
<i className="w-16 h-16 text-blue-300 stroke-[1]" data-lucide="activity"></i>
</div>
<p className="text-lg text-zinc-600 font-light text-sm">Uses API to instantly ping state health registries to verify coverage status during patient onboarding.</p>
</div>
</div>
</section>
</div>



<div className="px-6 pb-24 bg-white">
</div>

<section className="bg-zinc-950 text-white py-32 px-6 relative">
<div className="absolute bottom-0 left-0 w-full h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjx0ZXh0IHg9IjAiIHk9IjgiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCI+JDwvdGV4dD48L3N2Zz4=')] opacity-20 pointer-events-none" style={{maskImage: 'linear-gradient(to top, black, transparent)'}}></div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
<h2 className="md:text-5xl lg:text-6xl leading-none md:w-1/2 text-4xl tracking-tighter font-mono w-full">Ready to build<br/>better cities?</h2>
<div className="w-full md:w-1/3 flex flex-col items-start gap-8">
<p className="text-lg text-zinc-300 font-light">
                    Let's talk about how Bridge Civic can power your next civic initiative.
                </p>
<button className="bg-[#2f78f9] text-white px-6 py-3 rounded text-sm font-mono font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors">
                    get in touch <span>-&gt;</span>
</button>
</div>
</div>
</section>

<footer className="bg-[#050505] text-zinc-400 py-12 px-6 border-t border-zinc-900/50">
<div className="max-w-7xl mx-auto flex flex-col gap-12">
<div className="flex flex-col lg:flex-row justify-between gap-12 text-[10px] md:text-xs leading-relaxed font-light text-zinc-600">
<div className="w-full lg:w-1/3 flex flex-col gap-6">
<div className="flex gap-4">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms and Conditions</a>
<a className="hover:text-zinc-400" href="#">Security</a>
</div>
<p>© 2024 Economy League &amp; Bridge Civic. All rights reserved.</p>
</div>
<div className="w-full lg:w-1/2 flex flex-col gap-4 text-justify">
<p>Bridge Civic Technologies LLC is a technology infrastructure provider working alongside the Economy League of Greater Philadelphia. The digital services are provided in accordance with national regulations. Bridge Civic is neither a government entity nor affiliated directly with standard banking institutions.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
