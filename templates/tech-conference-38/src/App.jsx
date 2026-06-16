import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#eef2ff',
500: '#6366f1',
600: '#4f46e5',
950: '#09090b', // Zinc 950 base
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
<span className="text-sm font-semibold tracking-tight text-white">LUMINA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#speakers">Speakers</a>
<a className="hover:text-white transition-colors duration-200" href="#schedule">Schedule</a>
<a className="hover:text-white transition-colors duration-200" href="#tickets">Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#exhibitors">Partners</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-brand-950 bg-white rounded-full hover:bg-zinc-200 transition-colors" href="#tickets">
                    Get Tickets
                </a>
</div>
</div>
</nav>

<main className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] hero-glow pointer-events-none -z-10 rounded-full blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-brand-200 mb-8 animate-fade-in-up hover:border-white/20 transition-colors cursor-default">
<span className="flex h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                Oct 24-26, 2024 • San Francisco, CA
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] bg-clip-text text-5xl font-medium text-white tracking-tighter bg-gradient-to-b from-white via-white to-zinc-500 max-w-4xl mx-auto mb-8">
                Architecting the <br/> digital future.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                Join 5,000+ developers, designers, and founders for three days of innovation, connection, and inspiration.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-brand-950 bg-white rounded-full hover:bg-zinc-200 transition-all duration-200 group" href="#tickets">
                    Secure your spot
                    <svg aria-hidden="true" className="iconify iconify--lucide group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-200" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Watch 2023 Recap
                </a>
</div>
</div>
</main>

<section className="py-24 bg-brand-950 border-t border-white/5" id="speakers">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">World-class speakers</h2>
<p className="text-zinc-400 max-w-md text-sm">Learn from the visionaries shaping the industry. From AI pioneers to design legends.</p>
</div>
<a className="text-xs font-medium text-white flex items-center gap-1 hover:text-brand-400 transition-colors border border-white/10 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10" href="#">
                    View all 40+ speakers <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative">
<div className="aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900 mb-4 relative border border-white/5">
<img alt="Sarah Chen" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-brand-500 text-white mb-2 shadow-lg shadow-brand-500/20">Keynote</span>
</div>
</div>
<h3 className="text-base font-medium text-white">Sarah Chen</h3>
<p className="text-xs text-zinc-500">VP of Engineering, Vercel</p>
</div>

<div className="group relative">
<div className="aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900 mb-4 relative border border-white/5">
<img alt="Marcus Cole" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
</div>
<h3 className="text-base font-medium text-white">Marcus Cole</h3>
<p className="text-xs text-zinc-500">Product Designer, Stripe</p>
</div>

<div className="group relative">
<div className="aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900 mb-4 relative border border-white/5">
<img alt="Elena Rodriguez" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
</div>
<h3 className="text-base font-medium text-white">Elena Rodriguez</h3>
<p className="text-xs text-zinc-500">Founder, Linear</p>
</div>

<div className="group relative">
<div className="aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900 mb-4 relative border border-white/5">
<img alt="David Park" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
</div>
<h3 className="text-base font-medium text-white">David Park</h3>
<p className="text-xs text-zinc-500">AI Research, OpenAI</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="schedule">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6">Event Schedule</h2>

<div className="p-1.5 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-full inline-flex items-center gap-1 shadow-2xl">
<button className="px-6 py-2 text-xs font-medium text-brand-950 bg-white shadow-sm rounded-full transition-all hover:shadow-md">Day 1</button>
<button className="px-6 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all">Day 2</button>
<button className="px-6 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all">Day 3</button>
</div>
</div>

<div className="relative space-y-4">

<div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden sm:block"></div>

<div className="group relative flex flex-col sm:flex-row gap-6 items-stretch">
<div className="hidden sm:flex flex-col items-center gap-2 pt-6 w-[54px] shrink-0">
<div className="w-3.5 h-3.5 rounded-full bg-brand-500 live-indicator z-10 relative">
<div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-20"></div>
</div>
</div>
<div className="flex-1 schedule-card p-6 rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-900/10 to-transparent relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-100">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-[10px] font-medium uppercase tracking-wider text-brand-400">Live Now</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-24 shrink-0">
<span className="text-sm font-semibold text-white font-mono">09:00 AM</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">The Age of AI: Opening Keynote</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 max-w-xl">Exploring how artificial intelligence is fundamentally reshaping software architecture.</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-xs text-zinc-300">Sarah Chen</span>
</div>
<div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
<span className="text-xs text-zinc-500 flex items-center gap-1">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4 8 4v14"></path></svg>
                                        Main Stage
                                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row gap-6 items-stretch">
<div className="hidden sm:flex flex-col items-center gap-2 pt-6 w-[54px] shrink-0">
<div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors z-10"></div>
</div>
<div className="flex-1 schedule-card p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-24 shrink-0">
<span className="text-sm font-medium text-zinc-500 font-mono group-hover:text-white transition-colors">10:30 AM</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-zinc-200 mb-2 group-hover:text-white transition-colors">Design Systems at Scale</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4 max-w-xl group-hover:text-zinc-400 transition-colors">Maintaining consistency and velocity without stifling creativity.</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">Marcus Cole</span>
</div>
<div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
<span className="text-xs text-zinc-600 flex items-center gap-1 group-hover:text-zinc-500 transition-colors">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4 8 4v14"></path></svg>
                                        Hall B
                                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row gap-6 items-stretch opacity-60 hover:opacity-100 transition-opacity">
<div className="hidden sm:flex flex-col items-center gap-2 pt-6 w-[54px] shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700 z-10"></div>
</div>
<div className="flex-1 p-4 rounded-xl border border-white/5 bg-white/[0.005] border-dashed">
<div className="flex items-center gap-6">
<div className="w-24 shrink-0">
<span className="text-xs font-medium text-zinc-600 font-mono">12:00 PM</span>
</div>
<div className="flex-1 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-400">Networking Lunch</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">60 min</span>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row gap-6 items-stretch">
<div className="hidden sm:flex flex-col items-center gap-2 pt-6 w-[54px] shrink-0">
<div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors z-10"></div>
</div>
<div className="flex-1 schedule-card p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-24 shrink-0">
<span className="text-sm font-medium text-zinc-500 font-mono group-hover:text-white transition-colors">01:30 PM</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-zinc-200 mb-2 group-hover:text-white transition-colors">Building for the Next Billion</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4 max-w-xl group-hover:text-zinc-400 transition-colors">Optimizing performance and accessibility for emerging global markets.</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">Elena Rodriguez</span>
</div>
<div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
<span className="text-xs text-zinc-600 flex items-center gap-1 group-hover:text-zinc-500 transition-colors">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4 8 4v14"></path></svg>
                                        Main Stage
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-xs font-medium text-zinc-300" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg>
                    Download Full PDF Schedule
                </a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-zinc-950/50" id="tickets">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Simple, transparent pricing</h2>
<p className="text-zinc-400 text-sm max-w-xl mx-auto">Choose the pass that suits you best. All plans include access to recorded sessions.</p>
</div>

<div className="flex justify-center mb-16">
<div className="bg-zinc-900/80 p-1 rounded-lg border border-white/5 inline-flex relative backdrop-blur-sm">
<button className="px-6 py-1.5 rounded-md text-xs font-medium bg-zinc-800 text-white shadow-sm border border-white/5 z-10">Individuals</button>
<button className="px-6 py-1.5 rounded-md text-xs font-medium text-zinc-500 hover:text-zinc-300 z-10 transition-colors">Teams</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="p-8 rounded-xl border border-white/5 card-gradient hover:border-white/10 transition-colors duration-300 flex flex-col h-full bg-white/[0.01]">
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-2">Attendee</h3>
<p className="text-xs text-zinc-500 h-10">Perfect for individuals wanting to experience the core conference.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$299</span>
<span className="text-zinc-500 text-sm">/seat</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Main stage access
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Expo hall entry
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Networking app access
                        </div>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors">Select Plan</button>
</div>

<div className="p-8 rounded-xl card-gradient-pro relative flex flex-col h-full md:-mt-4 md:mb-4">
<div className="absolute top-0 right-0 -mt-3 mr-4">
<span className="bg-brand-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-brand-500/20">Popular</span>
</div>
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-2">Pro Access</h3>
<p className="text-xs text-zinc-400 h-10">For professionals seeking in-depth knowledge and workshops.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$599</span>
<span className="text-zinc-500 text-sm">/seat</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-white">
<svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Everything in Attendee
                        </div>
<div className="flex items-center gap-3 text-sm text-white">
<svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Unlimited Workshops
                        </div>
<div className="flex items-center gap-3 text-sm text-white">
<svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Official Afterparty
                        </div>
<div className="flex items-center gap-3 text-sm text-white">
<svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Priority Support
                        </div>
</div>
<button className="w-full py-3 rounded-lg bg-white hover:bg-zinc-200 text-brand-950 text-xs font-bold transition-colors shadow-lg">Get Pro Pass</button>
</div>

<div className="p-8 rounded-xl border border-white/5 card-gradient hover:border-white/10 transition-colors duration-300 flex flex-col h-full bg-white/[0.01]">
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-2">VIP</h3>
<p className="text-xs text-zinc-500 h-10">The ultimate experience with exclusive networking.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$999</span>
<span className="text-zinc-500 text-sm">/seat</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Everything in Pro
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            VIP Lounge Access
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            Speaker Dinner
                        </div>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors">Select Plan</button>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-24 pb-24" id="exhibitors">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
<div className="">
<h2 className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-2">Our Partners</h2>
<p className="text-3xl text-white font-medium tracking-tight">Powering the future together.</p>
</div>
<a className="text-xs font-medium text-zinc-400 hover:text-white mt-4 md:mt-0 flex items-center gap-2 group" href="#">
                    Become a sponsor 
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-lg">

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg>
<span className="font-bold text-white tracking-tight">Acme</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
<span className="font-semibold text-white tracking-tight font-display">Layers</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span className="font-bold text-white tracking-tight italic">Pixel</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
<span className="font-light text-white tracking-widest uppercase text-sm">Cube</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path></svg>
<span className="font-bold text-white tracking-tighter text-lg">Smile</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path></svg>
<span className="font-medium text-white tracking-tight">Vortex</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
<span className="font-black text-white tracking-tight uppercase">Bolt</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
<span className="font-serif text-white tracking-tight italic">Docu</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
<span className="font-mono text-white tracking-tight">Global</span>
</div>
</div>

<div className="bg-zinc-950 p-8 flex items-center justify-center group hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 19V5"></path><path d="m5 12 7-7 7 7"></path></svg>
<span className="font-bold text-white tracking-tighter uppercase">North</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 transition-colors">
<summary className="flex cursor-pointer list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-sm font-medium text-zinc-200">What is the refund policy?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</summary>
<div className="text-zinc-400 text-sm px-6 pb-6 pt-0 leading-relaxed">
                        Full refunds are available until 30 days prior to the event. After that, tickets are transferable but non-refundable.
                    </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 transition-colors">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none">
<span className="text-sm font-medium text-zinc-200">Are meals included?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</summary>
<div className="text-zinc-400 text-sm px-6 pb-6 pt-0 leading-relaxed">
                        Yes, breakfast and lunch are provided on all three days. Coffee and snacks are available throughout the day.
                    </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 transition-colors">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none">
<span className="text-sm font-medium text-zinc-200">Is there a discount for students?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</summary>
<div className="text-zinc-400 text-sm px-6 pb-6 pt-0 leading-relaxed">
                        Yes, we offer a 50% discount for valid student IDs. Please contact support@lumina.com for your code.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-20 pb-12 bg-zinc-950 relative overflow-hidden">

<div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
<span className="text-[18rem] font-bold leading-none tracking-tighter footer-logo-clip opacity-20">LUMINA</span>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
<span className="text-lg font-bold tracking-tight text-white">LUMINA</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                        The premier event for developers and digital architects. Designing the future, one pixel at a time.
                    </p>
<div className="flex gap-4">
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:scale-110" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path></svg>
</a>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:scale-110" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:scale-110" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
<h3 className="text-sm font-medium text-white mb-2">Stay updated</h3>
<p className="text-xs text-zinc-500 mb-4">Get the latest updates on speakers and workshops.</p>
<div className="flex gap-2">
<input className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all" placeholder="Enter your email" type="email"/>
<button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors">Subscribe</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-white/5 pt-12">
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Conference</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Why Attend</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Speakers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Schedule</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Sponsorship</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Media Kit</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Career Fair</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Code of Conduct</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-zinc-600">© 2024 Lumina Events Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0 px-3 py-1 rounded-full bg-zinc-900/50 border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="text-[10px] font-medium text-zinc-400">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
