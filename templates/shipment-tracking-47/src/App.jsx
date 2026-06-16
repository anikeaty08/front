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
background: '#030303',
surface: '#0A0A0B',
accent: '#FFFFFF',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
}
}
}
}



        // Check for saved theme preference or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    


        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Toggle Logic
        const themeToggle = document.getElementById('theme-toggle');
        const themeKnob = document.getElementById('theme-knob');
        
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            
            // Save preference
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/20 dark:from-blue-900/10 via-transparent to-transparent blur-[120px]"></div>
<div className="bg-grid absolute inset-0"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200 dark:border-white/5 bg-white/70 dark:bg-background/70 backdrop-blur-xl h-14 flex items-center transition-colors duration-300">
<div className="max-w-6xl mx-auto w-full px-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-5 h-5 bg-neutral-100 dark:bg-white/10 rounded flex items-center justify-center border border-neutral-200 dark:border-white/10">
<i className="w-3 h-3 text-neutral-900 dark:text-white" data-lucide="package"></i>
</div>
<span className="text-sm font-medium tracking-tight">Trace</span>
</div>

<div className="hidden md:flex items-center bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-md px-3 py-1.5 w-64 focus-within:border-neutral-300 dark:focus-within:border-white/20 transition-colors">
<i className="w-3 h-3 text-neutral-400 dark:text-neutral-600 mr-2" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-[11px] text-neutral-900 dark:text-white w-full placeholder-neutral-500 dark:placeholder-neutral-600 font-mono" placeholder="Track another shipment..." type="text"/>
</div>
<div className="flex items-center gap-4">

<button aria-label="Toggle Dark Mode" className="relative w-9 h-5 rounded-full bg-neutral-200 dark:bg-white/10 transition-colors focus:outline-none ring-offset-2 focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-700 dark:ring-offset-[#030303]" id="theme-toggle">
<div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center transform translate-x-0 dark:translate-x-4" id="theme-knob">
<i className="w-2.5 h-2.5 text-orange-400 dark:hidden" data-lucide="sun"></i>
<i className="w-2.5 h-2.5 text-indigo-500 hidden dark:block" data-lucide="moon"></i>
</div>
</button>
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-medium cursor-pointer ring-2 ring-white dark:ring-[#030303] shadow-sm">
                    JD
                </div>
</div>
</div>
</nav>

<main className="relative z-10 pt-28 pb-24 px-6 max-w-5xl mx-auto">

<div className="animate-fade-up flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Shipments</a>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-neutral-900 dark:text-white font-mono">1Z999AA10123456784</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-neutral-200 dark:bg-white/10 text-neutral-900 dark:text-white font-medium ml-2">UPS</span>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 text-neutral-600 dark:text-neutral-300 text-xs font-medium hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors flex items-center gap-2 shadow-sm dark:shadow-none">
<i className="w-3 h-3" data-lucide="share"></i> Share
                </button>
<button className="h-8 px-3 rounded-md border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 text-neutral-600 dark:text-neutral-300 text-xs font-medium hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors flex items-center gap-2 shadow-sm dark:shadow-none">
<i className="w-3 h-3" data-lucide="bell"></i> Updates
                </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="animate-fade-up delay-100 glass rounded-xl p-6 md:p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="flex items-start justify-between mb-6">
<div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    In Transit
                                </div>
<h1 className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-white tracking-tight">Arriving Tomorrow</h1>
<p className="text-neutral-500 mt-1">Expected between 2:00 PM - 6:00 PM</p>
</div>
<div className="text-right hidden md:block">
<div className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-mono mb-1">Last Update</div>
<div className="text-sm text-neutral-900 dark:text-white">Austin, TX • 26m ago</div>
</div>
</div>

<div className="relative h-1.5 w-full bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden mb-6">
<div className="absolute top-0 left-0 h-full w-[75%] bg-neutral-900 dark:bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
</div>

<div className="relative w-full h-32 md:h-48 rounded-lg bg-gray-50 dark:bg-[#0A0A0B] border border-neutral-200 dark:border-white/5 overflow-hidden flex items-center justify-center transition-colors duration-300">

<div className="absolute inset-0 opacity-20 map-grid-overlay"></div>

<svg className="absolute inset-0" height="100%" preserveaspectratio="none" viewbox="0 0 600 200" width="100%">

<path className="map-path-bg" d="M 50 150 C 150 150, 200 50, 300 100 S 550 50, 550 50" fill="none" stroke-dasharray="6 6" strokeWidth="2"></path>
<path d="M 50 150 C 150 150, 200 50, 300 100 S 550 50, 550 50" fill="none" id="route-path" stroke="url(#gradient-stroke)" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient-stroke" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(16, 185, 129, 0)', stopOpacity: '1'}}></stop>
<stop offset="75%" style={{stopColor: 'rgba(16, 185, 129, 0.8)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(16, 185, 129, 0)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<circle className="map-dot-origin" cx="50" cy="150" r="3"></circle>

<circle className="map-dot-dest" cx="550" cy="50" r="3"></circle>

<circle fill="#10b981" r="4">
<animatemotion calcmode="spline" dur="4s" keysplines="0.4 0 0.2 1" keytimes="0;1" repeatcount="indefinite">
<mpath href="#route-path"></mpath>
</animatemotion>
<animate attributename="opacity" dur="4s" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>
</svg>

<div className="absolute left-4 bottom-4 px-2 py-1 rounded bg-white/80 dark:bg-black/80 backdrop-blur border border-neutral-200 dark:border-white/10 text-[10px] font-mono text-neutral-600 dark:text-neutral-400 shadow-sm">
                                ORIGIN: NEW YORK, NY
                            </div>
<div className="absolute right-4 top-4 px-2 py-1 rounded bg-neutral-900 dark:bg-white text-white dark:text-black text-[10px] font-mono font-medium shadow-lg">
                                DEST: SAN FRANCISCO, CA
                            </div>
</div>
</div>
</div>

<div className="animate-fade-up delay-200">
<h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-4">Shipment Progress</h3>
<div className="glass rounded-xl p-0 overflow-hidden">

<div className="timeline-item relative flex gap-6 p-6 hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors group">
<div className="timeline-connector"></div>
<div className="w-16 text-right pt-0.5 shrink-0">
<div className="text-xs font-medium text-neutral-900 dark:text-white">09:41 AM</div>
<div className="text-[10px] text-neutral-500 font-mono mt-1">Today</div>
</div>
<div className="relative z-10 pt-1">
<div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_0_4px_rgba(16,185,129,0.2)] transition-all"></div>
</div>
<div className="flex-1 pb-2">
<div className="text-sm font-medium text-neutral-900 dark:text-white">Departed Processing Center</div>
<div className="text-xs text-neutral-500 mt-1">Austin, TX, United States</div>
</div>
</div>

<div className="timeline-item relative flex gap-6 p-6 hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors group">
<div className="timeline-connector"></div>
<div className="w-16 text-right pt-0.5 shrink-0">
<div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">06:20 AM</div>
<div className="text-[10px] text-neutral-500 font-mono mt-1">Today</div>
</div>
<div className="relative z-10 pt-1">
<div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-[#1A1A1C] border border-white/20 group-hover:border-neutral-400 dark:group-hover:border-white/40 transition-colors"></div>
</div>
<div className="flex-1 pb-2">
<div className="text-sm text-neutral-700 dark:text-neutral-300">Arrived at Facility</div>
<div className="text-xs text-neutral-500 mt-1">Austin, TX, United States</div>
</div>
</div>

<div className="timeline-item relative flex gap-6 p-6 hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors group">
<div className="timeline-connector"></div>
<div className="w-16 text-right pt-0.5 shrink-0">
<div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">08:00 PM</div>
<div className="text-[10px] text-neutral-500 font-mono mt-1">Oct 24</div>
</div>
<div className="relative z-10 pt-1">
<div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-[#1A1A1C] border border-white/20 group-hover:border-neutral-400 dark:group-hover:border-white/40 transition-colors"></div>
</div>
<div className="flex-1 pb-2">
<div className="text-sm text-neutral-700 dark:text-neutral-300">In Transit to Next Facility</div>
<div className="text-xs text-neutral-500 mt-1">Dallas, TX, United States</div>
</div>
</div>

<div className="timeline-item relative flex gap-6 p-6 hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors group">
<div className="timeline-connector"></div>
<div className="w-16 text-right pt-0.5 shrink-0">
<div className="text-xs font-medium text-neutral-400 dark:text-neutral-500">10:00 AM</div>
<div className="text-[10px] text-neutral-500 dark:text-neutral-600 font-mono mt-1">Oct 23</div>
</div>
<div className="relative z-10 pt-1">
<div className="w-3 h-3 rounded-full bg-neutral-200 dark:bg-[#1A1A1C] border border-neutral-300 dark:border-white/10"></div>
</div>
<div className="flex-1 pb-2">
<div className="text-sm text-neutral-500">Shipment Ready for UPS</div>
<div className="text-xs text-neutral-500 dark:text-neutral-600 mt-1">New York, NY, United States</div>
</div>
</div>
</div>
<button className="w-full mt-2 py-2 text-[11px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center justify-center gap-1">
<span>View all history</span>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="lg:col-span-1 space-y-6 animate-fade-up delay-300">

<div className="glass rounded-xl p-5">
<h3 className="text-xs font-medium text-neutral-900 dark:text-white mb-4 uppercase tracking-wider">Shipment Facts</h3>
<div className="space-y-4">
<div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-white/5">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="weight"></i>
<span className="text-xs">Weight</span>
</div>
<span className="text-xs text-neutral-900 dark:text-white font-mono">2.4 lbs</span>
</div>
<div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-white/5">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
<span className="text-xs">Dimensions</span>
</div>
<span className="text-xs text-neutral-900 dark:text-white font-mono">12x9x4 in</span>
</div>
<div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-white/5">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="truck"></i>
<span className="text-xs">Service</span>
</div>
<span className="text-xs text-neutral-900 dark:text-white">UPS Ground</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="tag"></i>
<span className="text-xs">Reference</span>
</div>
<span className="text-xs text-neutral-900 dark:text-white font-mono">ORDER-8821</span>
</div>
</div>
</div>

<div className="glass rounded-xl p-5">
<div className="relative pl-4 border-l border-neutral-300 dark:border-white/10 space-y-4">
<div>
<div className="text-[10px] text-neutral-500 uppercase font-mono mb-1">From</div>
<div className="text-xs text-neutral-900 dark:text-white leading-relaxed">
                                TechLogistics Inc.<br/>
                                142 W 57th St<br/>
                                New York, NY 10019
                            </div>
</div>
<div>
<div className="text-[10px] text-neutral-500 uppercase font-mono mb-1">To</div>
<div className="text-xs text-neutral-900 dark:text-white leading-relaxed">
                                John Doe<br/>
                                4001 N 1st St<br/>
                                San Jose, CA 95134
                            </div>
</div>
</div>
</div>

<div className="rounded-xl border border-dashed border-neutral-300 dark:border-white/10 p-5 flex flex-col items-center text-center">
<div className="w-8 h-8 rounded bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-3">
<i className="w-4 h-4 text-neutral-500 dark:text-neutral-400" data-lucide="shield-check"></i>
</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">Want delivery updates via SMS?</p>
<button className="w-full py-1.5 rounded bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors">
                        Enable Notifications
                    </button>
</div>
</div>
</div>
</main>

<footer className="border-t border-neutral-200 dark:border-white/5 mt-auto bg-white dark:bg-transparent transition-colors duration-300">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-[11px] text-neutral-500 dark:text-neutral-600 font-mono">
                ID: req_8a7d9f9a • <span className="text-emerald-600 dark:text-emerald-500/80">API Operational</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Report Issue</a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Carrier Info</a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Trace Home</a>
</div>
</div>
</footer>


    </>
  );
}
