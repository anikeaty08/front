import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Roboto"', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
850: '#1c1b19',
900: '#0c0a09',
950: '#040302'
},
sand: {
50: '#f7f6f2',
100: '#e3e1d7',
200: '#c7c4b6',
300: '#a8a493',
400: '#8a8573'
}
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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-grain opacity-20 mix-blend-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-stone-200 dark:border-white/5 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-full border border-stone-300 dark:border-sand-200/30 flex items-center justify-center group-hover:border-stone-900 dark:group-hover:border-sand-200 transition-colors">
<div className="w-3 h-3 bg-stone-900 dark:bg-sand-200 rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-sm uppercase text-stone-900 dark:text-sand-200">
            DC Atlas
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500 dark:text-sand-300">
<a className="hover:text-stone-900 dark:hover:text-sand-50 transition-colors" href="#map">
            Map
          </a>
<a className="hover:text-stone-900 dark:hover:text-sand-50 transition-colors" href="#facilities">
            Facilities
          </a>
<a className="hover:text-stone-900 dark:hover:text-sand-50 transition-colors" href="#operators">
            Operators
          </a>
<a className="hover:text-stone-900 dark:hover:text-sand-50 transition-colors" href="#intelligence">
            Intelligence
          </a>
<a className="text-sm font-medium px-4 py-2 rounded-full transition-colors bg-teal-600 dark:bg-teal-500 text-white dark:text-white hover:bg-teal-700 dark:hover:bg-teal-400 shadow-lg shadow-teal-500/20" href="#">
            Get Access
          </a>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/10 text-stone-600 dark:text-sand-200 transition-colors" onclick="document.documentElement.classList.toggle('dark')">
<span className="iconify block dark:hidden" data-icon="lucide:sun" data-width="18"></span>
<span className="iconify hidden dark:block" data-icon="lucide:moon" data-width="18"></span>
</button>
<a className="text-sm font-medium text-stone-500 dark:text-sand-300 hover:text-stone-900 dark:hover:text-sand-50 transition-colors hidden sm:block" href="#">
            Log in
          </a>
<a className="text-sm font-medium px-4 py-2 rounded-full transition-colors bg-indigo-600 dark:bg-indigo-500 text-white dark:text-white hover:bg-indigo-700 dark:hover:bg-indigo-400 shadow-lg shadow-indigo-500/20" href="#">
            Get Access
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b to-transparent rounded-full blur-[100px] -z-10 opacity-60 dark:opacity-40 pointer-events-none transition-colors duration-300 from-teal-300 dark:from-teal-900"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-stone-600 dark:text-sand-300 uppercase">
            Now tracking 800+ global facilities
          </span>
</div>
<h1 className="font-sans font-medium text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.05] tracking-tight text-stone-900 dark:text-sand-50 mb-8">
          The operating system for
          <br/>
<span className="italic text-stone-500 dark:text-sand-300">
            digital infrastructure.
          </span>
</h1>
<p className="text-lg md:text-xl text-stone-600 dark:text-sand-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Map, analyze, and plan the future of the cloud. From physical assets
          to market intelligence, DC Atlas is the unified lens for the data
          center ecosystem.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 bg-teal-600 dark:bg-teal-500 text-white dark:text-white shadow-lg shadow-teal-500/20" href="#map">
            Explore the Map
            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 border rounded-full font-medium transition-colors flex items-center justify-center gap-2 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20" href="#atlas-ai">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
            Ask Atlas AI
          </a>
</div>
</div>
</header>

<section className="px-4 md:px-6 py-24 max-w-7xl mx-auto" id="map">
<div className="mb-10 text-center md:text-left">
<div className="inline-block px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-300">
          Interactive Map
        </div>
<h2 className="font-sans text-3xl md:text-4xl font-medium text-stone-900 dark:text-white mb-2 tracking-tight">
          The world's data centers, mapped
        </h2>
<p className="text-stone-500 dark:text-sand-300 max-w-xl">
          Navigate the global data center landscape visually. Filter facilities
          by power capacity, operator, certifications, and dozens of other
          attributes.
        </p>
</div>
<div className="relative rounded-3xl overflow-hidden border border-stone-200 dark:border-white/10 bg-stone-900 aspect-[4/3] md:aspect-[16/9] group shadow-2xl">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 dark:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>

<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur border border-stone-200 dark:border-white/10 p-4 rounded-xl max-w-xs hidden md:block shadow-lg">
<div className="text-xs text-stone-500 dark:text-sand-400 uppercase tracking-widest mb-2 font-bold">
                Active Filters
              </div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-stone-100 dark:bg-white/5 rounded text-xs border border-stone-200 dark:border-white/10 text-stone-700 dark:text-sand-200">
                  Region: APAC
                </span>
<span className="px-2 py-1 bg-stone-100 dark:bg-white/5 rounded text-xs border border-stone-200 dark:border-white/10 text-stone-700 dark:text-sand-200">
                  Cap: &gt;50MW
                </span>
<span className="px-2 py-1 bg-stone-100 dark:bg-white/5 rounded text-xs border border-stone-200 dark:border-white/10 text-stone-700 dark:text-sand-200">
                  Status: Active
                </span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-white/90 dark:bg-stone-900/90 border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-700 dark:text-sand-200 hover:scale-105 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</button>
<button className="w-10 h-10 rounded-full bg-white/90 dark:bg-stone-900/90 border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-700 dark:text-sand-200 hover:scale-105 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:maximize" data-width="20"></span>
</button>
</div>
</div>

<div className="flex items-center gap-4 text-xs font-bold text-stone-400 dark:text-sand-400 uppercase tracking-wider bg-stone-900/80 p-3 rounded-full w-fit backdrop-blur-md border border-white/5">
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Live
            </span>
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Construction
            </span>
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Planned
            </span>
</div>
</div>

<div className="absolute top-1/3 left-1/4 animate-glow">
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
</div>
<div className="absolute top-1/2 left-2/3 animate-glow" style={{animationDelay: '1s'}}>
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 dark:border-white/5 bg-white dark:bg-stone-900 transition-colors duration-300" id="facilities">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="bg-stone-50 dark:bg-stone-850 rounded-2xl p-6 border border-stone-200 dark:border-white/5 shadow-xl relative z-10">
<div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-200 dark:border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-stone-200 dark:bg-stone-700 flex items-center justify-center">
<span className="iconify text-stone-500 dark:text-stone-300" data-icon="lucide:server" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-bold text-stone-900 dark:text-white">
                    LD6 - London Slough
                  </h3>
<p className="text-xs text-stone-500">Equinix Inc.</p>
</div>
</div>
<span className="px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase">
                Operational
              </span>
</div>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-white dark:bg-stone-900 rounded border border-stone-100 dark:border-white/5">
<span className="text-[10px] text-stone-400 uppercase tracking-wide">
                    IT Capacity
                  </span>
<div className="text-lg font-medium text-stone-800 dark:text-stone-200">
                    24 MW
                  </div>
</div>
<div className="p-3 bg-white dark:bg-stone-900 rounded border border-stone-100 dark:border-white/5">
<span className="text-[10px] text-stone-400 uppercase tracking-wide">
                    Gross Area
                  </span>
<div className="text-lg font-medium text-stone-800 dark:text-stone-200">
                    86,000 sqft
                  </div>
</div>
</div>
<div className="p-3 bg-white dark:bg-stone-900 rounded border border-stone-100 dark:border-white/5">
<span className="text-[10px] text-stone-400 uppercase tracking-wide mb-2 block">
                  Certifications
                </span>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-stone-600 dark:text-stone-400">
                    SOC2
                  </span>
<span className="text-xs px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-stone-600 dark:text-stone-400">
                    ISO 27001
                  </span>
<span className="text-xs px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-stone-600 dark:text-stone-400">
                    LEED Gold
                  </span>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 w-full h-full bg-stone-200 dark:bg-stone-800 rounded-2xl -z-0"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-300">
            Facilities Database
          </div>
<h2 className="font-sans text-4xl text-stone-900 dark:text-sand-100 mb-4 tracking-tight font-medium">
            Every spec. Every facility. One place.
          </h2>
<p className="text-stone-600 dark:text-sand-400 text-lg leading-relaxed mb-6">
            The most comprehensive data center database available. Every
            facility includes power specs, building details, certifications,
            connectivity data, and ownership history.
          </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-stone-600 dark:text-sand-300">
<div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span>Technical Power &amp; Cooling Specs</span>
</li>
<li className="flex items-center gap-3 text-stone-600 dark:text-sand-300">
<div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span>Fiber Connectivity Providers</span>
</li>
<li className="flex items-center gap-3 text-stone-600 dark:text-sand-300">
<div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span>Sustainability Metrics (PUE/WUE)</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 dark:border-white/5 bg-stone-50 dark:bg-stone-950 transition-colors duration-300" id="operators">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-300">
            Operator Profiles
          </div>
<h2 className="font-sans text-4xl text-stone-900 dark:text-sand-100 mb-4 tracking-tight font-medium">
            Know every operator inside out
          </h2>
<p className="text-stone-600 dark:text-sand-400 text-lg leading-relaxed mb-6">
            Understand the competitive landscape. See which operators dominate
            which markets, track portfolio growth over time, analyze ownership
            structures, and identify acquisition patterns.
          </p>
<a className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-sand-200 hover:text-teal-600 dark:hover:text-white transition-colors" href="#">
            View Operator Directory
            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="relative">

<div className="bg-white dark:bg-stone-900 rounded-2xl p-8 border border-stone-200 dark:border-white/5 shadow-xl">
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-xl font-bold text-stone-700 dark:text-sand-200 border border-stone-200 dark:border-white/10">
                DR
              </div>
<div>
<h3 className="text-lg font-bold text-stone-900 dark:text-white">
                  Digital Realty
                </h3>
<div className="flex gap-2 mt-1">
<span className="text-xs bg-stone-100 dark:bg-white/10 px-2 py-0.5 rounded text-stone-600 dark:text-sand-300">
                    NYSE: DLR
                  </span>
<span className="text-xs bg-stone-100 dark:bg-white/10 px-2 py-0.5 rounded text-stone-600 dark:text-sand-300">
                    HQ: Austin, TX
                  </span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="text-center">
<div className="text-2xl font-bold text-stone-900 dark:text-white">
                  300+
                </div>
<div className="text-[10px] uppercase text-stone-400 tracking-wide mt-1">
                  Data Centers
                </div>
</div>
<div className="text-center border-l border-stone-100 dark:border-white/5">
<div className="text-2xl font-bold text-stone-900 dark:text-white">
                  50+
                </div>
<div className="text-[10px] uppercase text-stone-400 tracking-wide mt-1">
                  Metros
                </div>
</div>
<div className="text-center border-l border-stone-100 dark:border-white/5">
<div className="text-2xl font-bold text-stone-900 dark:text-white">
                  2.4GW
                </div>
<div className="text-[10px] uppercase text-stone-400 tracking-wide mt-1">
                  Capacity
                </div>
</div>
</div>
<div>
<div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">
                Top Markets
              </div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs text-stone-600 dark:text-sand-300 mb-1">
<span>Northern Virginia</span>
<span>450 MW</span>
</div>
<div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full">
<div className="h-1.5 rounded-full bg-teal-500" style={{width: '85%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-stone-600 dark:text-sand-300 mb-1">
<span>London</span>
<span>210 MW</span>
</div>
<div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full">
<div className="h-1.5 rounded-full bg-teal-500" style={{width: '60%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-stone-600 dark:text-sand-300 mb-1">
<span>Frankfurt</span>
<span>180 MW</span>
</div>
<div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full">
<div className="h-1.5 rounded-full bg-teal-500" style={{width: '50%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 dark:border-white/5 bg-white dark:bg-stone-900 transition-colors duration-300" id="intelligence">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">

<div className="bg-stone-50 dark:bg-stone-850 rounded-2xl p-8 border border-stone-200 dark:border-white/5 shadow-xl">
<div className="flex justify-between items-center mb-8">
<h4 className="font-medium text-stone-900 dark:text-white">
                Absorption vs. Supply (FLAP)
              </h4>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-stone-800 dark:bg-sand-200"></span>
<span className="w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-600"></span>
</div>
</div>
<div className="flex items-end gap-4 h-48 w-full">
<div className="flex-1 flex flex-col justify-end gap-1 h-full">
<div className="w-full h-[40%] rounded-sm relative group">
<div className="absolute bottom-0 w-full h-[70%] rounded-sm bg-teal-500 dark:bg-teal-400 shadow-lg shadow-teal-500/20"></div>
</div>
<span className="text-[10px] text-center text-stone-400">Q1</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 h-full">
<div className="w-full bg-stone-300 dark:bg-stone-700 h-[50%] rounded-sm relative bg-teal-100 dark:bg-teal-900/20">
<div className="absolute bottom-0 w-full bg-stone-800 dark:bg-sand-200 h-[65%] rounded-sm"></div>
</div>
<span className="text-[10px] text-center text-stone-400">Q2</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 h-full">
<div className="w-full bg-stone-300 dark:bg-stone-700 h-[60%] rounded-sm relative">
<div className="absolute bottom-0 w-full bg-stone-800 dark:bg-sand-200 h-[80%] rounded-sm"></div>
</div>
<span className="text-[10px] text-center text-stone-400">Q3</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 h-full">
<div className="w-full bg-stone-300 dark:bg-stone-700 h-[85%] rounded-sm relative">
<div className="absolute bottom-0 w-full bg-stone-800 dark:bg-sand-200 h-[60%] rounded-sm"></div>
</div>
<span className="text-[10px] text-center text-stone-400">Q4</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-stone-200 dark:border-white/5 flex justify-between text-xs text-stone-500 dark:text-sand-400">
<span>
                Vacancy Rate:
                <span className="text-stone-900 dark:text-white font-bold">
                  3.2%
                </span>
</span>
<span>
                Rental Growth:
                <span className="text-teal-600 dark:text-teal-400 font-bold">
                  +12%
                </span>
</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-300">
            Market Intelligence
          </div>
<h2 className="font-sans text-4xl text-stone-900 dark:text-sand-100 mb-4 tracking-tight font-medium">
            Data-driven market insights
          </h2>
<p className="text-stone-600 dark:text-sand-400 text-lg leading-relaxed mb-6">
            Make informed decisions with comprehensive market analytics. Monitor
            capacity growth by region, track supply and demand dynamics, and
            identify emerging markets before your competitors.
          </p>
<div className="flex gap-2">
<span className="px-3 py-1 border border-stone-200 dark:border-white/10 rounded-full text-xs font-medium text-stone-600 dark:text-sand-300">
              Vacancy Rates
            </span>
<span className="px-3 py-1 border border-stone-200 dark:border-white/10 rounded-full text-xs font-medium text-stone-600 dark:text-sand-300">
              Power Costs
            </span>
<span className="px-3 py-1 border border-stone-200 dark:border-white/10 rounded-full text-xs font-medium text-stone-600 dark:text-sand-300">
              Land Value
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-stone-200 dark:border-white/5 bg-stone-900 text-white relative overflow-hidden" id="planning">
<div className="absolute inset-0 bg-stone-900 z-0"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="inline-block px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-teal-900/40 border-teal-500/20 text-teal-300">
            Cost Estimator
          </div>
<h2 className="font-sans text-4xl md:text-5xl text-sand-50 mb-6 tracking-tight font-medium">
            Know your costs before you build
          </h2>
<p className="text-sand-300 text-lg font-light mb-8">
            Model your next data center investment with our cost estimator.
            Input your IT load, redundancy tier, and target market—get
            construction costs, annual OpEx projections, and exportable reports.
          </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border flex-shrink-0 flex items-center justify-center bg-teal-900/30 border-teal-500/20 text-teal-400">
<span className="iconify" data-icon="lucide:calculator" data-width="18"></span>
</div>
<div>
<h4 className="text-sand-100 font-medium mb-1">Cost Estimation</h4>
<p className="text-sm text-sand-400">
                  Real-time cost modeling based on regional power and real
                  estate rates.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-800 border border-white/10 flex-shrink-0 flex items-center justify-center text-sand-200">
<span className="iconify" data-icon="lucide:git-compare" data-width="18"></span>
</div>
<div>
<h4 className="text-sand-100 font-medium mb-1">
                  Market Comparison
                </h4>
<p className="text-sm text-sand-400">
                  Side-by-side analysis of FLAP markets vs. emerging hubs.
                </p>
</div>
</div>
</div>
</div>

<div className="relative bg-stone-800 rounded-xl border border-white/10 p-8 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<span className="text-sm font-medium text-sand-200">
              Deployment Scenario A
            </span>
<span className="text-xs text-sand-400">Draft</span>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs text-sand-400 mb-2">
<span>Target Capacity</span>
<span>12 MW</span>
</div>
<div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
<div className="w-3/4 h-full rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-stone-900/50 p-4 rounded-lg border border-white/5">
<span className="block text-xs text-sand-400 mb-1">Region</span>
<span className="text-sm text-sand-100">Frankfurt (FRA)</span>
</div>
<div className="bg-stone-900/50 p-4 rounded-lg border border-white/5">
<span className="block text-xs text-sand-400 mb-1">OpEx / Mo</span>
<span className="text-sm text-sand-100">$1.2M est.</span>
</div>
</div>
<div className="pt-4 border-t border-white/5 flex justify-end">
<button className="text-xs px-4 py-2 rounded shadow transition font-medium bg-teal-500 text-white hover:bg-teal-400 shadow-lg shadow-teal-500/20">
                Generate Report
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-white dark:bg-stone-950 transition-colors duration-300" id="atlas-ai">
<div className="absolute inset-0 bg-white dark:bg-stone-950">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r to-stone-200 dark:to-stone-800/20 rounded-full blur-[120px] from-teal-200 dark:from-teal-900/30"></div>
</div>
<div className="max-w-3xl mx-auto relative z-10 text-center">
<div className="inline-block px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-300">
          Atlas AI
        </div>
<h2 className="font-sans text-5xl md:text-6xl text-stone-900 dark:text-sand-50 mb-6 tracking-tight font-medium">
          Ask anything. Get answers instantly.
        </h2>
<p className="text-stone-600 dark:text-sand-300 text-lg mb-10 font-light">
          Skip the manual research. Ask Atlas AI questions like "Which operators
          have the most capacity in Northern Virginia?" or "Show me Tier III
          certified facilities in APAC under 10MW"—and get accurate answers in
          seconds.
        </p>

<div className="bg-white/60 dark:bg-stone-800/40 backdrop-blur-xl border border-stone-200 dark:border-white/10 rounded-2xl p-2 md:p-3 shadow-2xl flex flex-col gap-4 text-left">

<div className="px-4 pt-6 pb-2 space-y-4">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-stone-200 dark:bg-sand-200/20 flex items-center justify-center text-xs text-stone-600 dark:text-sand-200 font-bold">
                U
              </div>
<p className="text-stone-800 dark:text-sand-100 text-sm py-1">
                Who has the most available capacity in Frankfurt right now?
              </p>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-500/20 flex items-center justify-center text-xs text-teal-600 dark:text-teal-300">
<span className="iconify" data-icon="lucide:bot" data-width="14"></span>
</div>
<div className="text-stone-600 dark:text-sand-300 text-sm leading-relaxed py-1 space-y-2">
<p>
                  Based on current operational data,
                  <span className="text-stone-900 dark:text-white font-medium">
                    Digital Realty
                  </span>
                  holds the largest available capacity in the Frankfurt market
                  with approximately
                  <span className="text-stone-900 dark:text-white">45MW</span>
                  across 3 facilities.
                </p>
<p>Equinix follows with 32MW across their FR campus.</p>
<div className="flex gap-2 mt-2">
<span className="text-[10px] border border-stone-200 dark:border-white/10 px-2 py-1 rounded hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer text-stone-500 dark:text-sand-400">
                    View FR Campus
                  </span>
<span className="text-[10px] border border-stone-200 dark:border-white/10 px-2 py-1 rounded hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer text-stone-500 dark:text-sand-400">
                    Compare Rates
                  </span>
</div>
</div>
</div>
</div>

<div className="relative">
<input className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl px-5 py-4 text-stone-800 dark:text-sand-100 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 dark:focus:border-sand-400/50 transition-colors" placeholder="Ask about operators, regions, or trends..." type="text"/>
<button className="absolute right-2 top-2 p-2 bg-stone-900 dark:bg-sand-100 text-white dark:text-stone-900 rounded-lg hover:scale-105 transition-all">
<span className="iconify" data-icon="lucide:arrow-up" data-width="18"></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 dark:border-white/5 bg-stone-50 dark:bg-stone-850/30 transition-colors duration-300" id="learning">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-300">
            Learning Center
          </div>
<h2 className="font-sans text-4xl text-stone-900 dark:text-sand-100 mb-4 tracking-tight font-medium">
            Master data centers, your way
          </h2>
<p className="text-stone-600 dark:text-sand-400 text-lg leading-relaxed mb-6">
            Whether you're new to the industry or deepening your expertise, our
            learning paths take you from foundational concepts to advanced
            topics with interactive lessons and real-world examples.
          </p>
<a className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-sand-200 hover:text-teal-600 dark:hover:text-white transition-colors" href="#">
            View Learning Paths
            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="relative bg-white dark:bg-stone-900 rounded-2xl p-8 border border-stone-200 dark:border-white/5 shadow-xl min-h-[300px] flex items-center justify-center">
<div className="text-center space-y-4">
<div className="inline-flex gap-2">
<span className="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full text-xs font-medium text-stone-500">
                Power Systems 101
              </span>
<span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/20 rounded-full text-xs font-medium text-teal-600 dark:text-teal-400">
                Active
              </span>
</div>
<h3 className="text-xl font-medium text-stone-900 dark:text-white">
              Cooling Fundamentals
            </h3>
<div className="w-64 h-2 bg-stone-100 dark:bg-stone-800 rounded-full mx-auto overflow-hidden">
<div className="w-2/3 h-full bg-teal-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 dark:border-white/5 bg-white dark:bg-stone-950 transition-colors duration-300">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-10">
<h2 className="font-sans font-medium text-3xl text-stone-900 dark:text-sand-100 tracking-tight">
            Market Insights
          </h2>
<a className="text-sm text-stone-500 dark:text-sand-300 hover:text-stone-900 dark:hover:text-white transition-colors" href="#">
            Read all updates →
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<article className="flex flex-col gap-6 group cursor-pointer hover:-translate-y-2 transition-all duration-300">
<div className="w-full aspect-[16/10] bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden border border-stone-200 dark:border-white/5 relative shadow-sm group-hover:shadow-2xl transition-all">
<div className="w-full h-full bg-stone-300 dark:bg-stone-800 group-hover:scale-105 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0"></div>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Market Report
              </span>
<h3 className="text-2xl font-bold text-stone-900 dark:text-sand-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-tight">
                The rise of secondary markets in APAC
              </h3>
<p className="text-base text-stone-500 dark:text-sand-400 line-clamp-2 leading-relaxed">
                Why investors are looking beyond Singapore and Tokyo towards
                Jakarta and Johor Bahru.
              </p>
</div>
</article>
<article className="flex flex-col gap-6 group cursor-pointer hover:-translate-y-2 transition-all duration-300">
<div className="w-full aspect-[16/10] bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden border border-stone-200 dark:border-white/5 relative shadow-sm group-hover:shadow-2xl transition-all">
<div className="w-full h-full bg-stone-300 dark:bg-stone-800 group-hover:scale-105 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0"></div>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Technology
              </span>
<h3 className="text-2xl font-bold text-stone-900 dark:text-sand-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-tight">
                Liquid cooling: Retrofit vs New Build
              </h3>
<p className="text-base text-stone-500 dark:text-sand-400 line-clamp-2 leading-relaxed">
                Analyzing the cost implications of transitioning legacy
                facilities to support AI workloads.
              </p>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-stone-50 dark:bg-stone-900 pt-20 pb-10 px-6 border-t border-stone-200 dark:border-white/10 transition-colors duration-300">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-5 h-5 rounded-full border border-stone-300 dark:border-sand-200/30 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-stone-900 dark:bg-sand-200 rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-sm uppercase text-stone-900 dark:text-sand-200">
                DC Atlas
              </span>
</a>
<p className="text-sm text-stone-500 dark:text-sand-400 max-w-xs">
              The unified intelligence platform for the global data center
              industry.
            </p>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-sand-100 mb-4">
              Product
            </h4>
<ul className="space-y-3 text-sm text-stone-500 dark:text-sand-400">
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Map
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Facilities
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Companies
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Atlas AI
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-sand-100 mb-4">
              Solutions
            </h4>
<ul className="space-y-3 text-sm text-stone-500 dark:text-sand-400">
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Investors
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Operators
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Enterprises
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Brokers
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-sand-100 mb-4">
              Resources
            </h4>
<ul className="space-y-3 text-sm text-stone-500 dark:text-sand-400">
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Learning Center
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Glossary
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Standards
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Blog
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-sand-100 mb-4">
              Company
            </h4>
<ul className="space-y-3 text-sm text-stone-500 dark:text-sand-400">
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-stone-900 dark:hover:text-sand-200 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 dark:border-white/5 text-xs text-stone-400 dark:text-sand-400">
<div className="flex gap-6 mb-4 md:mb-0">
<span>© 2023 DC Atlas Inc.</span>
<a className="hover:text-stone-600 dark:hover:text-sand-200" href="#">
              Privacy
            </a>
<a className="hover:text-stone-600 dark:hover:text-sand-200" href="#">
              Terms
            </a>
</div>
<div className="flex gap-4">
<span className="iconify hover:text-stone-900 dark:hover:text-white cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify hover:text-stone-900 dark:hover:text-white cursor-pointer transition-colors" data-icon="lucide:linkedin" data-width="16"></span>
<span className="iconify hover:text-stone-900 dark:hover:text-white cursor-pointer transition-colors" data-icon="lucide:github" data-width="16"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
