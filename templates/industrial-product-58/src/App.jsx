import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
},
blue: {
600: '#2563eb',
900: '#1e3a8a',
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        function switchTab(tabId) {
            const tabs = ['k3gs', 'ulp40', 'concrete'];
            
            // Reset all button styles
            tabs.forEach(t => {
                const btn = document.getElementById(`tab-${t}`);
                if (t === tabId) {
                    // Active State
                    btn.classList.remove('text-slate-500', 'hover:bg-white/50', 'hover:text-slate-900');
                    btn.classList.add('bg-white', 'text-slate-900', 'shadow-sm', 'ring-1', 'ring-slate-200');
                    // Add icon color highlight if needed
                    const icon = btn.querySelector('svg');
                    if(icon) icon.classList.add('text-blue-600');
                } else {
                    // Inactive State
                    btn.classList.add('text-slate-500', 'hover:bg-white/50', 'hover:text-slate-900');
                    btn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm', 'ring-1', 'ring-slate-200');
                    const icon = btn.querySelector('svg');
                    if(icon) icon.classList.remove('text-blue-600');
                }
            });

            // Note: In a real app, this would also toggle content visibility. 
            // For this design demo, the content remains static as per the visual prompt focus on the main tab.
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full bg-slate-900 border-b border-slate-800 py-4 px-6 lg:px-12 flex justify-between items-center sticky top-0 z-50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<span className="text-white font-semibold tracking-tight text-lg">MARSOL</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#">Products &amp; Solutions</a>
<a className="hover:text-white transition-colors" href="#">Engineering</a>
<a className="hover:text-white transition-colors" href="#">Compliance</a>
</div>
<button className="text-slate-300 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<header className="relative bg-slate-900 py-24 px-6 lg:px-12 overflow-hidden">

<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-30 pointer-events-none"></div>
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex items-center gap-2 text-blue-400 mb-4 text-sm font-medium uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="anchor"></i>
<span>Offshore Fire Protection</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">DIFFS Nozzles</h1>
<p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
                Advanced deck integrated fire fighting systems designed for extreme environments. 
                Ensuring helideck safety through precision engineering and rapid foam distribution.
            </p>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 lg:px-12 -mt-12 relative z-20 pb-24">

<section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-10 mb-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Overview</h2>
<p className="text-lg leading-relaxed text-slate-600 mb-6">
                        The K3GS and ULP series of spray nozzles are especially designed to be used as part of a Deck Integrated Fire Fighting System (DIFFS). An array of these nozzles installed on a heliport / helideck provides an effective spray pattern and distribution of foam/water that covers the entire deck surface even in severe weather conditions.
                    </p>
<div className="flex items-center gap-4 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="wind"></i>
<span>Weather Resistant</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="layers"></i>
<span>Uniform Coverage</span>
</div>
</div>
</div>
<div className="flex justify-center items-center bg-slate-50 rounded-lg p-8 border border-slate-100">

<img alt="K3GS Nozzle" className="w-64 h-auto object-contain drop-shadow-xl mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<div className="mb-10">
<div className="inline-flex bg-slate-100 p-1.5 rounded-xl gap-1 overflow-x-auto max-w-full">
<button className="tab-btn px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-sm bg-white text-slate-900 ring-1 ring-slate-200" id="tab-k3gs" onclick="switchTab('k3gs')">
<i className="w-4 h-4 text-blue-600" data-lucide="disc"></i>
                    K3GS Nozzle
                </button>
<button className="tab-btn px-6 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white/50 transition-all duration-200 flex items-center gap-2" id="tab-ulp40" onclick="switchTab('ulp40')">
<i className="w-4 h-4" data-lucide="cylinder"></i>
                    ULP-40 Series
                </button>
<button className="tab-btn px-6 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white/50 transition-all duration-200 flex items-center gap-2" id="tab-concrete" onclick="switchTab('concrete')">
<i className="w-4 h-4" data-lucide="box"></i>
                    ULP-40 Concrete Deck
                </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-8 space-y-12">

<section>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="cpu"></i>
                        Key Features
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
<div className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">1</span>
<p className="text-base text-slate-600 leading-snug">Marsol K3GS series DIFF system nozzles are manufactured with orifices drilled for horizontal and vertical flow components.</p>
</div>
</div>

<div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
<div className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">2</span>
<p className="text-base text-slate-600 leading-snug">Since it is a non-pop-up nozzle, the condition of a blocked nozzle is not relevant (as required in CAP-437).</p>
</div>
</div>

<div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
<div className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">3</span>
<p className="text-base text-slate-600 leading-snug">The height from the deck surface to top of the nozzle is 13 inches.</p>
</div>
</div>

<div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
<div className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">4</span>
<p className="text-base text-slate-600 leading-snug">If there is a blocked flow (due to heavy object) the foam will continue to flow out from the side orifices of the nozzle.</p>
</div>
</div>

<div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
<div className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">5</span>
<p className="text-base text-slate-600 leading-snug">The nozzles do not 'pop-up' on the deck instead discharge foam from their fixed position.</p>
</div>
</div>

<div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
<div className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">6</span>
<p className="text-base text-slate-600 leading-snug">Marsol's K3GS series Diff Nozzle has simple installation, is easy to handle and has reduced maintenance.</p>
</div>
</div>

<div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group md:col-span-2">
<div className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">7</span>
<p className="text-base text-slate-600 leading-snug">If required quick replacement of nozzles can be done.</p>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="file-text"></i>
                        Technical Documentation
                    </h3>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">

<div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
<div className="col-span-6">Product Line</div>
<div className="col-span-3">Type</div>
<div className="col-span-3 text-right">Action</div>
</div>

<div className="grid grid-cols-12 items-center py-4 px-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="col-span-6">
<p className="text-base font-medium text-slate-900">DIFF System K3GS Series UL CAT</p>
<span className="text-sm text-slate-500">Marsol Technologies</span>
</div>
<div className="col-span-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                    Catalogue
                                </span>
</div>
<div className="col-span-3 flex justify-end gap-3">
<select className="text-sm border-slate-200 rounded text-slate-600 focus:ring-blue-500 focus:border-blue-500">
<option>English</option>
<option>Chinese</option>
</select>
<button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>

<div className="grid grid-cols-12 items-center py-4 px-6 hover:bg-slate-50 transition-colors">
<div className="col-span-6">
<p className="text-base font-medium text-slate-900">DIFF Nozzle</p>
<span className="text-sm text-slate-500">Product Specification</span>
</div>
<div className="col-span-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                    Datasheet
                                </span>
</div>
<div className="col-span-3 flex justify-end gap-3">
<select className="text-sm border-slate-200 rounded text-slate-600 focus:ring-blue-500 focus:border-blue-500">
<option>English</option>
<option>Chinese</option>
</select>
<button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">Gallery</h3>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
<div className="snap-start flex-shrink-0 w-64 h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="snap-start flex-shrink-0 w-64 h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="snap-start flex-shrink-0 w-64 h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="snap-start flex-shrink-0 w-64 h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24">
<div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 text-white">
<div className="p-6 border-b border-slate-700 bg-slate-800/50">
<h3 className="text-lg font-semibold flex items-center gap-2">
<i className="w-5 h-5 text-blue-400" data-lucide="award"></i>
                                Certifications
                            </h3>
</div>
<div className="p-6 grid grid-cols-2 gap-4">

<div className="h-16 bg-white rounded flex items-center justify-center p-2 opacity-90 hover:opacity-100 transition-opacity">
<span className="font-bold text-slate-800 text-lg tracking-tighter border-2 border-slate-800 rounded-full w-10 h-10 flex items-center justify-center">UL</span>
</div>
<div className="h-16 bg-white rounded flex items-center justify-center p-2 opacity-90 hover:opacity-100 transition-opacity">
<span className="font-bold text-slate-800 text-xs flex flex-col items-center leading-none">
<span>ABS</span>
<span className="text-[8px] uppercase mt-0.5">Approved</span>
</span>
</div>
<div className="h-16 bg-white rounded flex items-center justify-center p-2 opacity-90 hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-slate-800" data-lucide="anchor"></i>
</div>
<div className="h-16 bg-white rounded flex items-center justify-center p-2 opacity-90 hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-slate-800" data-lucide="shield-check"></i>
</div>
</div>
<div className="p-6 bg-blue-900/20 border-t border-slate-700">
<p className="text-sm text-slate-300 leading-relaxed">
                                Our patented K3GS Nozzle is certified by leading international authorities, including ABS, CAAI-UK, MED, BV, DCD, USCG, and UL/ULC.
                            </p>
<div className="mt-4 flex items-center gap-2 text-xs text-blue-300 uppercase tracking-wider font-medium">
<i className="w-3 h-3" data-lucide="check-circle"></i>
                                Global Compliance
                            </div>
</div>
</div>

<div className="mt-6 bg-slate-100 rounded-xl p-6 border border-slate-200">
<h4 className="font-semibold text-slate-900 mb-2">Need specifications?</h4>
<p className="text-sm text-slate-600 mb-4">Contact our engineering team for detailed installation guides.</p>
<button className="w-full py-2.5 px-4 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
                            Contact Engineering
                        </button>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 bg-blue-600 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="shield"></i>
</div>
<span className="text-slate-900 font-bold tracking-tight">MARSOL</span>
</div>
<div className="text-sm text-slate-500 space-y-2">
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Houston, Texas - 77095, USA</p>
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Sharjah, UAE</p>
</div>
</div>
<div>
<h5 className="font-semibold text-slate-900 mb-4">Services</h5>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-600" href="#">PFAS-Free Firefighting</a></li>
<li><a className="hover:text-blue-600" href="#">Project Management</a></li>
<li><a className="hover:text-blue-600" href="#">Engineering Services</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-slate-900 mb-4">Policies</h5>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-600" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-600" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex justify-between items-center text-xs text-slate-400">
<p>© 2023 Marsol Technologies. All rights reserved.</p>
<div className="flex gap-4">
<i className="w-4 h-4 hover:text-blue-600 cursor-pointer" data-lucide="linkedin"></i>
<i className="w-4 h-4 hover:text-red-600 cursor-pointer" data-lucide="youtube"></i>
</div>
</div>
</div>
</footer>



    </>
  );
}
