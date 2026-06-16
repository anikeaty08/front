import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide text-green-800" data-height="24" data-icon="lucide:leaf" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
<span className="font-serif text-xl tracking-tight text-stone-900 font-medium group-hover:text-green-800 transition-colors">Botanical Guys</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-green-800 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-green-800 transition-colors" href="#ownership">Ownership</a>
<a className="hover:text-green-800 transition-colors" href="#cases">Projects</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-stone-50 bg-stone-900 rounded-full hover:bg-green-900 transition-colors duration-300" href="#contact">
                Get Advice
            </a>

<button className="md:hidden p-2 text-stone-600 hover:text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 rounded-bl-[100px] -z-10 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center p-1.5 bg-stone-200/50 rounded-full border border-stone-200 mb-10 shadow-sm">
<button :className="audience === 'residential' ? 'bg-white text-green-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'" @click="audience = 'residential'" className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none bg-white text-green-900 shadow-sm">
                    Residential
                </button>
<button :className="audience === 'business' ? 'bg-white text-green-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'" @click="audience = 'business'" className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none text-stone-500 hover:text-stone-700">
                    Business
                </button>
</div>

<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-stone-900 mb-8" x-show="audience === 'residential'" x-transition:enter="transition ease-out duration-500" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">
                Bring nature into your <br/><span className="text-green-800 italic pr-2">living space.</span>
</h1>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-stone-900 mb-8" style={{display: 'none'}} x-show="audience === 'business'" x-transition:enter="transition ease-out duration-500" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">
                Sustainable greenery <br/><span className="text-green-800 italic pr-2">for the workplace.</span>
</h1>

<p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
<span x-show="audience === 'residential'">
                    Transform your home with our curated selection of interior plants, moss walls, and garden solutions. Expertly designed for tranquility.
                </span>
<span style={{display: 'none'}} x-show="audience === 'business'">
                    Boost employee well-being and office aesthetics with our full-service corporate planting, green walls, and maintenance leasing options.
                </span>
</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-green-900 text-stone-50 font-medium rounded-full hover:bg-green-800 transition-colors shadow-lg shadow-green-900/10 flex items-center justify-center gap-2" href="#contact">
                    Request Advice
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-700 font-medium rounded-full hover:border-stone-400 hover:text-stone-900 transition-all flex items-center justify-center gap-2" href="#cases">
                    View Projects
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<span className="uppercase block text-sm font-medium text-green-800 tracking-wider mb-2">Our Expertise</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                        Curated green solutions for 
                        <span x-text="audience === 'business' ? 'professionals.' : 'every home.'">every home.</span>
</h2>
</div>
<p className="text-stone-600 max-w-sm text-base leading-relaxed">
                    From vertical gardens to potted statement pieces, we design environments that breathe.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:border-green-800/20 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-800 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:sprout" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-2xl mb-3 text-stone-900">Interior Planting</h3>
<p className="text-stone-600 mb-6 leading-relaxed">
                        Selection and placement of plants that thrive in your specific lighting conditions and aesthetic.
                    </p>
<ul className="space-y-2 text-sm text-stone-500">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-green-700" data-icon="lucide:check" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Air purifying selection</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-green-700" data-icon="lucide:check" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Custom pottery</li>
</ul>
</div>

<div className="group p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:border-green-800/20 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-800 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:align-justify" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M3 12h18M3 18h18M3 6h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-2xl mb-3 text-stone-900">Moss &amp; Green Walls</h3>
<p className="text-stone-600 mb-6 leading-relaxed">
                        Vertical gardens that act as natural sound absorbers and striking visual features.
                    </p>
<ul className="space-y-2 text-sm text-stone-500">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-green-700" data-icon="lucide:check" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 0% Maintenance moss</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-green-700" data-icon="lucide:check" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Acoustic benefits</li>
</ul>
</div>

<div className="group p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:border-green-800/20 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-800 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:sun" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<h3 className="font-serif text-2xl mb-3 text-stone-900">Roof &amp; Exterior</h3>
<p className="text-stone-600 mb-6 leading-relaxed">
                        Green roofs and terrace designs that support biodiversity and insulate your building.
                    </p>
<ul className="space-y-2 text-sm text-stone-500">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-green-700" data-icon="lucide:check" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Biodiversity support</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-green-700" data-icon="lucide:check" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Thermal insulation</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-100 border-y border-stone-200" id="ownership">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Ownership tailored to you</h2>
<p className="text-stone-600">Whether you prefer to own your greenery or enjoy a hassle-free service, we have a plan.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-10 rounded-3xl border border-stone-200 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<h3 className="font-serif text-2xl text-stone-900">Direct Purchase</h3>
<svg aria-hidden="true" className="iconify iconify--lucide text-stone-400" data-icon="lucide:shopping-bag" data-width="28" height="28" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<p className="text-stone-600 mb-8 leading-relaxed">
                            Ideal for <span x-text="audience === 'residential' ? 'homeowners' : 'smaller offices'">homeowners</span> wanting full ownership immediately.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-stone-700">
<svg aria-hidden="true" className="iconify iconify--lucide text-green-700 mt-1" data-icon="lucide:check-circle-2" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>One-time investment</span>
</li>
<li className="flex items-start gap-3 text-stone-700">
<svg aria-hidden="true" className="iconify iconify--lucide text-green-700 mt-1" data-icon="lucide:check-circle-2" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Full customization freedom</span>
</li>
</ul>
</div>
</div>

<div className="bg-green-900 p-10 rounded-3xl text-stone-50 flex flex-col justify-between relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-green-800 rounded-full blur-3xl opacity-50"></div>
<div>
<div className="flex items-center justify-between mb-6 relative z-10">
<h3 className="font-serif text-2xl">Full Service Lease</h3>
<svg aria-hidden="true" className="iconify iconify--lucide text-green-300" data-icon="lucide:refresh-cw" data-width="28" height="28" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></g></svg>
</div>
<p className="text-green-100 mb-8 leading-relaxed relative z-10">
                            Our most popular choice for <span x-text="audience === 'business' ? 'corporate clients' : 'worry-free living'">worry-free living</span>. 
                        </p>
<ul className="space-y-4 mb-8 relative z-10">
<li className="flex items-start gap-3 text-green-50">
<svg aria-hidden="true" className="iconify iconify--lucide text-green-300 mt-1" data-icon="lucide:check-circle-2" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Monthly fee, no capital upfront</span>
</li>
<li className="flex items-start gap-3 text-green-50">
<svg aria-hidden="true" className="iconify iconify--lucide text-green-300 mt-1" data-icon="lucide:check-circle-2" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Includes watering &amp; nutrition</span>
</li>
</ul>
</div>
<div className="relative z-10" style={{display: 'none'}} x-show="audience === 'business'">
<span className="inline-block px-3 py-1 bg-green-800 rounded text-xs font-semibold tracking-wide uppercase text-green-100">Recommended for Business</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="cases">
<div className="max-w-7xl mx-auto">
<div className="flex flex-wrap items-center justify-between mb-12 gap-4">
<h2 className="font-serif text-4xl text-stone-900">Recent Projects</h2>

<div className="flex gap-2 overflow-x-auto pb-2">
<button className="px-4 py-2 bg-stone-900 text-white text-sm rounded-full whitespace-nowrap">All</button>
<button className="px-4 py-2 bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm rounded-full whitespace-nowrap transition-colors">Offices</button>
<button className="px-4 py-2 bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm rounded-full whitespace-nowrap transition-colors">Residential</button>
<button className="px-4 py-2 bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm rounded-full whitespace-nowrap transition-colors">Exteriors</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Office Greenery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<p className="text-green-300 text-sm font-medium mb-1">Corporate</p>
<h4 className="text-white font-serif text-xl">Tech Hub Lobby</h4>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Home Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<p className="text-green-300 text-sm font-medium mb-1">Residential</p>
<h4 className="text-white font-serif text-xl">The Sunken Living Room</h4>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Moss Wall" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<p className="text-green-300 text-sm font-medium mb-1">Feature Wall</p>
<h4 className="text-white font-serif text-xl">Acoustic Moss Panel</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-stone-200/60 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-stone-500">
<span className="text-lg uppercase tracking-widest font-medium opacity-60">Trusted Partners</span>
<div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale">

<span className="font-serif text-2xl italic font-bold">Vogue<span className="font-sans not-italic">Living</span></span>
<span className="font-sans text-2xl font-bold tracking-tighter">ARCH<span className="font-light">DAILY</span></span>
<span className="font-serif text-2xl font-bold">ELLE <span className="text-xs align-top">DECOR</span></span>
<span className="font-sans text-2xl font-extrabold tracking-tight">GARDEN<span className="font-light">ISTA</span></span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="contact">
<div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-stone-200/50 border border-stone-100">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<span className="text-green-800 font-medium text-sm uppercase tracking-wider mb-4 block">Get in touch</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Let's grow something together.</h2>
<p className="text-stone-600 text-lg mb-10">
                        Whether you are looking for a single statement tree or a complete office biophilic design, we are here to advise.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-green-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<p className="text-xs text-stone-500 uppercase tracking-wide">Email us</p>
<p className="text-stone-900 font-medium">hello@botanicalguys.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-green-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs text-stone-500 uppercase tracking-wide">Call us</p>
<p className="text-stone-900 font-medium">+31 (0) 20 123 4567</p>
</div>
</div>
</div>
</div>

<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 md:col-span-1">
<label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
<input className="w-full px-5 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-stone-900" placeholder="Jane" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
<input className="w-full px-5 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-stone-900" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Interest</label>
<select className="w-full px-5 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-stone-900 appearance-none">
<option>General Advice</option>
<option>Office Greenery (Business)</option>
<option>Home Interior (Residential)</option>
<option>Green Walls</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
<textarea className="w-full px-5 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-stone-900" placeholder="Tell us about your space..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-green-900 transition-colors shadow-lg" type="button">
                        Request Consultation
                    </button>
<p className="text-xs text-stone-400 text-center mt-4">We respect your privacy. No spam.</p>
</form>
</div>
</div>
</section>

<footer className="bg-stone-100 pt-20 pb-10 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide text-green-900" data-icon="lucide:leaf" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
<span className="font-serif text-xl tracking-tight text-stone-900 font-bold">Botanical Guys</span>
</a>
<p className="text-stone-500 text-sm leading-relaxed">
                        Bringing life to spaces through sustainable and aesthetic greenery solutions.
                    </p>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-stone-600">
<li><a className="hover:text-green-800 transition-colors" href="#">Interior Planting</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">Green Walls</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-stone-600">
<li><a className="hover:text-green-800 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">Projects</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-600 hover:text-green-800 hover:shadow-md transition-all" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-600 hover:text-green-800 hover:shadow-md transition-all" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
<p>© 2023 Botanical Guys. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-900" href="#">Privacy Policy</a>
<a className="hover:text-stone-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
