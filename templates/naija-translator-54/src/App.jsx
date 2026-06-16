import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
burgundy: {
900: '#2d050d',
950: '#1a0306', // Deep background
800: '#520816',
700: '#750b20',
600: '#9f1239', // Action
100: '#ffe4e6',
50: '#fff1f2',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



function toggleModal() {
const modal = document.getElementById('profile-modal');
modal.classList.toggle('active');
if(modal.classList.contains('active')) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = 'auto';
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/85 dark:bg-burgundy-950/85 backdrop-blur-md border-b border-stone-200/60 dark:border-rose-900/30 transition-colors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-rose-700 dark:bg-rose-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-rose-900/20">
<span className="font-semibold text-lg tracking-tighter">N</span>
</div>
<span className="dark:text-white text-lg font-semibold text-stone-900 tracking-tight">Naija<span className="dark:text-rose-200/50 font-normal text-stone-400">Translators</span></span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-rose-200/70 dark:hover:text-white transition-colors" href="#">Find Translators</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-rose-200/70 dark:hover:text-white transition-colors" href="#">How it Works</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-rose-200/70 dark:hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-600 dark:text-rose-200 hover:text-stone-900 dark:hover:text-white" href="#">Log in</a>
<a className="bg-stone-900 dark:bg-rose-100 hover:bg-stone-800 dark:hover:bg-white text-white dark:text-rose-950 text-sm font-medium py-2 px-4 rounded-lg shadow-sm transition-all flex items-center gap-2" href="#">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                        Add Listing
                    </a>
</div>
</div>
</div>
</header>
<main className="pt-24 pb-20">

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto mb-20 ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mr-auto mb-10 ml-auto pt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-900/30 border border-rose-100 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600 dark:bg-rose-400"></span>
</span>
                    50+ Verified Translators Added This Week
                </div>
<h1 className="text-4xl md:text-6xl font-medium text-stone-900 dark:text-white tracking-tight mb-6 leading-tight">
                    Find Verified Language <br/>
<span className="text-stone-400 dark:text-rose-200/50">Translators in Nigeria</span>
</h1>
<p className="text-lg text-stone-500 dark:text-rose-200/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Connect with certified experts for legal, medical, and academic translation. 
                    English, French, Hausa, Yoruba, Igbo, and more.
                </p>

<div className="bg-white dark:bg-burgundy-900 p-2 rounded-2xl shadow-lg dark:shadow-black/40 border border-stone-200/60 dark:border-rose-900/50 max-w-4xl mx-auto flex flex-col md:flex-row gap-2 transition-colors">
<div className="flex-1 relative group">
<div className="absolute left-3 top-3.5 text-stone-400 dark:text-rose-300/50">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
<select className="custom-select w-full bg-stone-50 dark:bg-burgundy-950 hover:bg-stone-100 dark:hover:bg-burgundy-800 border border-transparent hover:border-stone-200 dark:hover:border-rose-900 text-stone-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 focus:border-rose-300 dark:focus:border-rose-700 block pl-10 p-3 transition-all cursor-pointer outline-none">
<option value="">Select Language Pair</option>
<option value="en-fr">English ↔ French</option>
<option value="en-ha">English ↔ Hausa</option>
<option value="en-yo">English ↔ Yoruba</option>
</select>
</div>
<div className="flex-1 relative group">
<div className="absolute left-3 top-3.5 text-stone-400 dark:text-rose-300/50">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<select className="custom-select w-full bg-stone-50 dark:bg-burgundy-950 hover:bg-stone-100 dark:hover:bg-burgundy-800 border border-transparent hover:border-stone-200 dark:hover:border-rose-900 text-stone-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 focus:border-rose-300 dark:focus:border-rose-700 block pl-10 p-3 transition-all cursor-pointer outline-none">
<option value="">Location / City</option>
<option value="lagos">Lagos</option>
<option value="abuja">Abuja</option>
<option value="ph">Port Harcourt</option>
</select>
</div>
<div className="flex-1 relative group">
<div className="absolute left-3 top-3.5 text-stone-400 dark:text-rose-300/50">
<iconify-icon className="" icon="solar:diploma-linear" width="20"></iconify-icon>
</div>
<select className="custom-select w-full bg-stone-50 dark:bg-burgundy-950 hover:bg-stone-100 dark:hover:bg-burgundy-800 border border-transparent hover:border-stone-200 dark:hover:border-rose-900 text-stone-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 focus:border-rose-300 dark:focus:border-rose-700 block pl-10 p-3 transition-all cursor-pointer outline-none">
<option value="">Specialization</option>
<option value="legal">Legal &amp; Court</option>
<option value="medical">Medical</option>
<option value="academic">Academic/Transcripts</option>
</select>
</div>
<button className="bg-rose-700 hover:bg-rose-800 dark:bg-rose-600 dark:hover:bg-rose-500 text-white font-medium py-3 px-8 rounded-xl transition-all shadow-md shadow-rose-200 dark:shadow-rose-900/30 flex items-center justify-center gap-2">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
<span className="">Search</span>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
<div className="flex justify-between items-end mb-8">
<h2 className="text-xl font-medium text-stone-900 dark:text-white tracking-tight">Browse by Language</h2>
<a className="text-sm font-medium text-rose-700 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 flex items-center gap-1" href="#">View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group p-4 bg-white dark:bg-burgundy-900 rounded-xl border border-stone-200 dark:border-rose-900/30 hover:border-rose-200 dark:hover:border-rose-700 hover:shadow-md hover:shadow-rose-50 dark:hover:shadow-rose-900/10 transition-all" href="#">
<div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">FR</span>
</div>
<h3 className="font-medium text-stone-900 dark:text-rose-50 mb-1">French</h3>
<p className="text-xs text-stone-500 dark:text-rose-200/50">240+ Translators</p>
</a>
<a className="group p-4 bg-white dark:bg-burgundy-900 rounded-xl border border-stone-200 dark:border-rose-900/30 hover:border-rose-200 dark:hover:border-rose-700 hover:shadow-md hover:shadow-rose-50 dark:hover:shadow-rose-900/10 transition-all" href="#">
<div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">HA</span>
</div>
<h3 className="font-medium text-stone-900 dark:text-rose-50 mb-1">Hausa</h3>
<p className="text-xs text-stone-500 dark:text-rose-200/50">180+ Translators</p>
</a>
<a className="group p-4 bg-white dark:bg-burgundy-900 rounded-xl border border-stone-200 dark:border-rose-900/30 hover:border-rose-200 dark:hover:border-rose-700 hover:shadow-md hover:shadow-rose-50 dark:hover:shadow-rose-900/10 transition-all" href="#">
<div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">YO</span>
</div>
<h3 className="font-medium text-stone-900 dark:text-rose-50 mb-1">Yoruba</h3>
<p className="text-xs text-stone-500 dark:text-rose-200/50">150+ Translators</p>
</a>
<a className="group p-4 bg-white dark:bg-burgundy-900 rounded-xl border border-stone-200 dark:border-rose-900/30 hover:border-rose-200 dark:hover:border-rose-700 hover:shadow-md hover:shadow-rose-50 dark:hover:shadow-rose-900/10 transition-all" href="#">
<div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">ZH</span>
</div>
<h3 className="font-medium text-stone-900 dark:text-rose-50 mb-1">Chinese</h3>
<p className="text-xs text-stone-500 dark:text-rose-200/50">85+ Translators</p>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="hidden lg:block w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="font-medium text-stone-900 dark:text-white mb-4">Filters</h3>
<div className="space-y-3 mb-6">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-stone-300 dark:border-rose-900 bg-stone-50 dark:bg-burgundy-900 shadow-sm transition-all checked:border-rose-600 dark:checked:border-rose-500 checked:bg-rose-600 dark:checked:bg-rose-500 hover:border-rose-500 dark:hover:border-rose-600" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-600 dark:text-rose-200/80 group-hover:text-stone-900 dark:group-hover:text-white">Verified Only</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-stone-300 dark:border-rose-900 bg-stone-50 dark:bg-burgundy-900 shadow-sm transition-all checked:border-rose-600 dark:checked:border-rose-500 checked:bg-rose-600 dark:checked:bg-rose-500 hover:border-rose-500 dark:hover:border-rose-600" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-600 dark:text-rose-200/80 group-hover:text-stone-900 dark:group-hover:text-white">Featured</span>
</label>
</div>
<div className="mb-6">
<h4 className="text-xs font-semibold text-stone-400 dark:text-rose-200/50 uppercase tracking-wider mb-3">Service Type</h4>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer">
<input checked="" className="h-4 w-4 text-rose-600 focus:ring-rose-500 bg-stone-100 dark:bg-burgundy-900 border-stone-300 dark:border-rose-900" name="service" type="radio"/>
<span className="text-sm text-stone-600 dark:text-rose-200/80">All</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="h-4 w-4 text-rose-600 focus:ring-rose-500 bg-stone-100 dark:bg-burgundy-900 border-stone-300 dark:border-rose-900" name="service" type="radio"/>
<span className="text-sm text-stone-600 dark:text-rose-200/80">Remote</span>
</label>
</div>
</div>
<div className="mb-6">
<h4 className="text-xs font-semibold text-stone-400 dark:text-rose-200/50 uppercase tracking-wider mb-3">Price Range</h4>
<input className="w-full h-1.5 bg-stone-200 dark:bg-burgundy-800 rounded-lg appearance-none cursor-pointer accent-rose-600 dark:accent-rose-500" type="range"/>
<div className="flex justify-between text-xs text-stone-400 dark:text-rose-200/50 mt-2">
<span>₦1k</span>
<span>₦50k+</span>
</div>
</div>
</div>
</aside>

<div className="flex-1 space-y-4">
<div className="flex mb-4 items-center justify-between">
<p className="text-sm text-stone-500 dark:text-rose-200/60">Showing <span className="font-medium text-stone-900 dark:text-white">6</span> of <span className="font-medium text-stone-900 dark:text-white">248</span> translators</p>
<div className="flex items-center gap-2">
<span className="text-xs text-stone-500 dark:text-rose-200/60">Sort by:</span>
<select className="text-xs font-medium bg-transparent border-none text-stone-900 dark:text-white cursor-pointer focus:ring-0">
<option className="dark:bg-burgundy-900">Recommended</option>
<option className="dark:bg-burgundy-900">Rating: High to Low</option>
</select>
</div>
</div>

<article className="bg-white dark:bg-burgundy-900 rounded-xl border border-stone-200 dark:border-rose-900/30 p-5 hover:border-rose-300 dark:hover:border-rose-700 hover:shadow-sm transition-all relative overflow-hidden group">

<div className="absolute top-0 right-0 bg-rose-50 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider border-b border-l border-rose-100 dark:border-rose-900/50">
                            Featured
                        </div>
<div className="flex flex-col sm:flex-row gap-5">

<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-burgundy-800 overflow-hidden ring-4 ring-white dark:ring-burgundy-950 shadow-sm mx-auto sm:mx-0">
<img alt="Chioma Adebayo" className="hover:opacity-100 transition-opacity opacity-95 w-full h-full object-cover" src="https://i.pravatar.cc/150?u=chioma"/>
</div>
<div className="mt-2 text-center sm:text-left">
<div className="inline-flex items-center gap-1 text-[10px] font-medium text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-900/30 px-2 py-0.5 rounded-full border border-rose-100 dark:border-rose-800/40">
<iconify-icon icon="solar:verified-check-bold" width="10"></iconify-icon> Verified
                                    </div>
</div>
</div>

<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 text-center sm:text-left">
<div className="">
<h3 className="text-lg font-semibold text-stone-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                                            Chioma Adebayo
                                        </h3>
<p className="text-sm text-stone-500 dark:text-rose-200/60">Certified Legal Translator • Lekki, Lagos</p>
</div>
<div className="mt-2 sm:mt-0 text-right">
<p className="text-lg font-semibold text-stone-900 dark:text-white">₦5,000<span className="text-xs font-normal text-stone-400 dark:text-rose-200/40">/page</span></p>
</div>
</div>
<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
<span className="px-2 py-1 rounded-md bg-stone-50 dark:bg-burgundy-800 border border-stone-200 dark:border-rose-900/40 text-xs font-medium text-stone-700 dark:text-rose-100">English ↔ French</span>
<span className="px-2 py-1 rounded-md bg-stone-50 dark:bg-burgundy-800 border border-stone-200 dark:border-rose-900/40 text-xs font-medium text-stone-700 dark:text-rose-100">English ↔ Igbo</span>
</div>
<div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-stone-500 dark:text-rose-200/50 justify-center sm:justify-start">
<span className="flex items-center gap-1"><iconify-icon className="text-stone-400 dark:text-rose-300/50" icon="solar:briefcase-linear"></iconify-icon> 8 Years Exp.</span>
<span className="flex items-center gap-1"><iconify-icon className="text-stone-400 dark:text-rose-300/50" icon="solar:file-check-linear"></iconify-icon> Notary Public</span>
<span className="flex items-center gap-1"><iconify-icon className="text-stone-400 dark:text-rose-300/50" icon="solar:clock-circle-linear"></iconify-icon> 24hr Turnaround</span>
</div>
<p className="text-sm text-stone-600 dark:text-rose-200/80 mb-5 line-clamp-2 text-center sm:text-left">
                                    Specialized in legal contracts, immigration documents, and academic transcripts. Former translator for the French Embassy in Nigeria.
                                </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="flex-1 bg-stone-900 dark:bg-rose-100 text-white dark:text-rose-950 text-sm font-medium py-2 px-4 rounded-lg hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm" onclick="toggleModal()">View Profile</button>
<button className="flex-1 bg-white dark:bg-burgundy-950/50 border border-stone-200 dark:border-rose-900/50 text-stone-700 dark:text-rose-200 text-sm font-medium py-2 px-4 rounded-lg hover:bg-stone-50 dark:hover:bg-burgundy-800 hover:border-stone-300 dark:hover:border-rose-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="" icon="solar:phone-linear"></iconify-icon> WhatsApp
                                    </button>
</div>
</div>
</div>
</article>

<article className="bg-white dark:bg-burgundy-900 rounded-xl border border-stone-200 dark:border-rose-900/30 p-5 hover:border-rose-300 dark:hover:border-rose-700 hover:shadow-sm transition-all">
<div className="flex flex-col sm:flex-row gap-5">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-burgundy-800 overflow-hidden ring-4 ring-white dark:ring-burgundy-950 shadow-sm mx-auto sm:mx-0">
<img alt="Ibrahim Musa" className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=ibrahim"/>
</div>
<div className="mt-2 text-center sm:text-left">
<div className="inline-flex items-center gap-1 text-[10px] font-medium text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-900/30 px-2 py-0.5 rounded-full border border-rose-100 dark:border-rose-800/40">
<iconify-icon icon="solar:verified-check-bold" width="10"></iconify-icon> Verified
                                    </div>
</div>
</div>
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 text-center sm:text-left">
<div>
<h3 className="text-lg font-semibold text-stone-900 dark:text-white">Ibrahim Musa</h3>
<p className="text-sm text-stone-500 dark:text-rose-200/60">Medical Interpreter • Abuja, FCT</p>
</div>
<div className="mt-2 sm:mt-0 text-right">
<p className="text-lg font-semibold text-stone-900 dark:text-white">₦7,500<span className="text-xs font-normal text-stone-400 dark:text-rose-200/40">/hr</span></p>
</div>
</div>
<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
<span className="px-2 py-1 rounded-md bg-stone-50 dark:bg-burgundy-800 border border-stone-200 dark:border-rose-900/40 text-xs font-medium text-stone-700 dark:text-rose-100">English ↔ Arabic</span>
<span className="px-2 py-1 rounded-md bg-stone-50 dark:bg-burgundy-800 border border-stone-200 dark:border-rose-900/40 text-xs font-medium text-stone-700 dark:text-rose-100">English ↔ Hausa</span>
</div>
<div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-stone-500 dark:text-rose-200/50 justify-center sm:justify-start">
<span className="flex items-center gap-1"><iconify-icon className="text-stone-400 dark:text-rose-300/50" icon="solar:briefcase-linear"></iconify-icon> 12 Years Exp.</span>
<span className="flex items-center gap-1"><iconify-icon className="text-stone-400 dark:text-rose-300/50" icon="solar:hospital-linear"></iconify-icon> Medical Cert.</span>
</div>
<p className="text-sm text-stone-600 dark:text-rose-200/80 mb-5 line-clamp-2 text-center sm:text-left">
                                    Expert in medical terminology translation. Offering remote interpretation for telehealth consultations.
                                </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="flex-1 bg-stone-900 dark:bg-rose-100 text-white dark:text-rose-950 text-sm font-medium py-2 px-4 rounded-lg hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm">View Profile</button>
<button className="flex-1 bg-white dark:bg-burgundy-950/50 border border-stone-200 dark:border-rose-900/50 text-stone-700 dark:text-rose-200 text-sm font-medium py-2 px-4 rounded-lg hover:bg-stone-50 dark:hover:bg-burgundy-800 hover:border-stone-300 dark:hover:border-rose-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon> WhatsApp
                                    </button>
</div>
</div>
</div>
</article>

<article className="bg-white dark:bg-burgundy-900 rounded-xl border border-stone-200 dark:border-rose-900/30 p-5 hover:border-rose-300 dark:hover:border-rose-700 hover:shadow-sm transition-all">
<div className="flex flex-col sm:flex-row gap-5">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-burgundy-800 overflow-hidden ring-4 ring-white dark:ring-burgundy-950 shadow-sm mx-auto sm:mx-0">
<img alt="Kunle Afolayan" className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=kunle"/>
</div>
<div className="mt-2 text-center sm:text-left">

<div className="h-4"></div>
</div>
</div>
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 text-center sm:text-left">
<div>
<h3 className="text-lg font-semibold text-stone-900 dark:text-white">Kunle Afolayan</h3>
<p className="text-sm text-stone-500 dark:text-rose-200/60">General Translator • Ibadan, Oyo</p>
</div>
<div className="mt-2 sm:mt-0 text-right">
<p className="text-lg font-semibold text-stone-900 dark:text-white">₦3,000<span className="text-xs font-normal text-stone-400 dark:text-rose-200/40">/page</span></p>
</div>
</div>
<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
<span className="px-2 py-1 rounded-md bg-stone-50 dark:bg-burgundy-800 border border-stone-200 dark:border-rose-900/40 text-xs font-medium text-stone-700 dark:text-rose-100">English ↔ Yoruba</span>
</div>
<p className="text-sm text-stone-600 dark:text-rose-200/80 mb-5 line-clamp-2 text-center sm:text-left">
                                    Providing fast and accurate Yoruba to English translations for books, scripts, and general correspondence.
                                </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="flex-1 bg-stone-900 dark:bg-rose-100 text-white dark:text-rose-950 text-sm font-medium py-2 px-4 rounded-lg hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm">View Profile</button>
<button className="flex-1 bg-white dark:bg-burgundy-950/50 border border-stone-200 dark:border-rose-900/50 text-stone-700 dark:text-rose-200 text-sm font-medium py-2 px-4 rounded-lg hover:bg-stone-50 dark:hover:bg-burgundy-800 hover:border-stone-300 dark:hover:border-rose-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon> WhatsApp
                                    </button>
</div>
</div>
</div>
</article>
<div className="pt-6 flex justify-center">
<button className="bg-white dark:bg-burgundy-900 border border-stone-200 dark:border-rose-900/40 text-stone-600 dark:text-rose-300 text-sm font-medium py-3 px-6 rounded-xl hover:bg-stone-50 dark:hover:bg-burgundy-800 transition-colors w-full sm:w-auto">
                            Load More Translators
                        </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
<div className="bg-stone-900 dark:bg-burgundy-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-rose-900/20">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,228,230,0.4) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,228,230,0.4) 0%, transparent 20%)'}}></div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Are you a Professional Translator?</h2>
<p className="text-stone-300 mb-8 max-w-xl mx-auto text-lg">Join the largest directory of language experts in Nigeria.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-rose-600 hover:bg-rose-500 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg shadow-rose-900/50">
                        Create Free Listing
                    </button>
</div>
</div>
</section>

<footer className="mt-24 border-t border-stone-200 dark:border-rose-900/30 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-900 dark:bg-rose-100 rounded-md flex items-center justify-center text-white dark:text-rose-900 text-xs">
<span className="font-bold">N</span>
</div>
<span className="text-stone-900 dark:text-white font-semibold text-sm tracking-tight">Naija Translators</span>
</div>
<div className="text-sm text-stone-400 dark:text-rose-200/40">
                    © 2023 Naija Translators Directory.
                </div>
</div>
</footer>
</main>

<div className="modal fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" id="profile-modal">

<div className="absolute inset-0 bg-stone-900/40 dark:bg-burgundy-950/80 backdrop-blur-sm transition-opacity" onclick="toggleModal()"></div>

<div className="modal-content relative bg-white dark:bg-burgundy-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl shadow-rose-900/20 border border-stone-200 dark:border-rose-900/30 flex flex-col">

<div className="sticky top-0 z-10 bg-white/95 dark:bg-burgundy-900/95 backdrop-blur-md border-b border-stone-200 dark:border-rose-900/30 p-6 flex justify-between items-start">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-burgundy-800 overflow-hidden ring-2 ring-rose-600/20">
<img alt="Chioma Adebayo" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=chioma"/>
</div>
<div>
<h3 className="text-xl font-semibold text-stone-900 dark:text-white flex items-center gap-2">
                            Chioma Adebayo
                            <iconify-icon className="text-rose-600 dark:text-rose-400" icon="solar:verified-check-bold" width="16"></iconify-icon>
</h3>
<p className="text-sm text-stone-500 dark:text-rose-200/60">Certified Legal Translator • Lekki, Lagos</p>
<div className="flex items-center gap-1 mt-1 text-xs text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-stone-400 dark:text-rose-200/40 ml-1">(24 Reviews)</span>
</div>
</div>
</div>
<button className="text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors" onclick="toggleModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-6 space-y-8">

<div className="grid grid-cols-3 gap-4 p-4 bg-stone-50 dark:bg-burgundy-950/50 rounded-xl border border-stone-100 dark:border-rose-900/20">
<div className="text-center">
<p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Rate</p>
<p className="font-semibold text-stone-900 dark:text-white">₦5k<span className="text-xs font-normal opacity-60">/pg</span></p>
</div>
<div className="text-center border-l border-stone-200 dark:border-rose-900/20">
<p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Exp.</p>
<p className="font-semibold text-stone-900 dark:text-white">8 Yrs</p>
</div>
<div className="text-center border-l border-stone-200 dark:border-rose-900/20">
<p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Jobs</p>
<p className="font-semibold text-stone-900 dark:text-white">142</p>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-stone-900 dark:text-white mb-3">About Chioma</h4>
<p className="text-sm text-stone-600 dark:text-rose-200/80 leading-relaxed">
                        I am a certified translator with over 8 years of experience working with law firms and the French Embassy in Lagos. I specialize in translating legal contracts, birth certificates for immigration (USCIS/IRCC), and academic transcripts. My work is accurate, confidential, and I am a registered Notary Public in Nigeria. I am available for both remote document translation and in-person interpretation in the Lekki/VI axis.
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold text-stone-900 dark:text-white mb-3">Languages &amp; Expertise</h4>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-burgundy-800 text-xs font-medium text-stone-700 dark:text-rose-100">English (Native)</span>
<span className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-burgundy-800 text-xs font-medium text-stone-700 dark:text-rose-100">French (Fluent/C2)</span>
<span className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-burgundy-800 text-xs font-medium text-stone-700 dark:text-rose-100">Igbo (Native)</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-rose-900/40 text-xs text-stone-600 dark:text-rose-200/80">
<iconify-icon icon="solar:diploma-verified-linear"></iconify-icon> Legal Translation
                        </span>
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-rose-900/40 text-xs text-stone-600 dark:text-rose-200/80">
<iconify-icon icon="solar:passport-linear"></iconify-icon> Immigration Docs
                        </span>
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-rose-900/40 text-xs text-stone-600 dark:text-rose-200/80">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Notary Services
                        </span>
</div>
</div>

<div className="bg-stone-50 dark:bg-burgundy-950 rounded-xl p-5 border border-stone-200 dark:border-rose-900/20">
<h4 className="text-sm font-semibold text-stone-900 dark:text-white mb-4">Send a Message</h4>
<form className="space-y-3" onsubmit="event.preventDefault();">
<input className="w-full bg-white dark:bg-burgundy-900 border border-stone-200 dark:border-rose-900/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20" placeholder="Your Name" type="text"/>
<textarea className="w-full bg-white dark:bg-burgundy-900 border border-stone-200 dark:border-rose-900/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20" placeholder="Describe your translation needs..." rows="3"></textarea>
<button className="w-full bg-rose-700 hover:bg-rose-800 text-white font-medium py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-rose-900/20">
                            Request Quote
                        </button>
</form>
</div>
</div>
</div>
</div>

    </>
  );
}
