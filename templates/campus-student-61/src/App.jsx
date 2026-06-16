import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
hec: {
blue: '#002B5C',
gold: '#C4A05D',
cream: '#FAFAFA'
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
      

<nav className="fixed top-0 w-full z-50 border-b border-black/5 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-hec-blue" href="#">
                HEC.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-hec-blue transition-colors" href="#">Campus Life</a>
<a className="hover:text-hec-blue transition-colors" href="#">The Zinc</a>
<a className="hover:text-hec-blue transition-colors" href="#">Sports</a>
<a className="hover:text-hec-blue transition-colors" href="#">Events</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-slate-500 hover:text-hec-blue" href="#">Log in</a>
<a className="group flex items-center gap-2 bg-hec-blue text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-900 transition-all duration-300" href="#">
<span>Explore Campus</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden subtle-gradient">
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hec-blue/10 bg-hec-blue/5 text-hec-blue text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span>Life beyond the lecture hall</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Step out of your room.<br/>
<span className="text-slate-400">Experience the plateau.</span>
</h1>
<p className="text-lg text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Your time at Jouy-en-Josas is measured in moments, not just grades. Swap the isolation for inspiration, the procrastination for conversation, and the dorm room for the lake.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-hec-blue text-white rounded-full text-sm font-medium hover:bg-slate-900 transition-colors shadow-lg shadow-hec-blue/20 flex items-center justify-center gap-2">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                    This Week's Agenda
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Student POV
                </button>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
<div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 w-[600px] h-[600px] bg-yellow-50 rounded-full blur-3xl opacity-60 -z-10"></div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-medium tracking-tight mb-6">The Campus Rhythm</h2>
<div className="space-y-8">
<div className="flex gap-4 group cursor-default">
<div className="mt-1 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1 group-hover:text-red-600 transition-colors">The Slog</h3>
<p className="text-sm text-slate-500 leading-relaxed">Staring at canvas in a dimly lit room, refreshing emails, and postponing the inevitable group project until 3 AM.</p>
</div>
</div>
<div className="w-px h-8 bg-slate-200 ml-5"></div>
<div className="flex gap-4 group cursor-default">
<div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-hec-blue shadow-sm ring-4 ring-white">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1 text-hec-blue">The Experience</h3>
<p className="text-sm text-slate-500 leading-relaxed">Sunset jogs around the lake, debates at the Zinc, impromptu tennis matches, and POWs that turn colleagues into lifelong friends.</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between h-48 transform translate-y-8">
<div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:glass-water-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-2xl font-semibold tracking-tight">The Zinc</span>
<span className="text-xs text-slate-400">Social Hub • 20:00</span>
</div>
</div>
<div className="bg-hec-blue p-6 rounded-2xl shadow-xl flex flex-col justify-between h-48 text-white">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
<iconify-icon icon="solar:dumbbell-large-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-2xl font-semibold tracking-tight">Gym &amp; Lake</span>
<span className="text-xs text-white/60">Wellness • 07:00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Design your downtime</h2>
<p className="text-slate-500">Academics get you the degree. The ecosystem gets you the life. Don't let the forest pass you by.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500 md:col-span-2">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-blue-500" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">The Lake &amp; Forest</h3>
<p className="text-sm text-slate-500 max-w-sm">Escape the books. 100 hectares of parkland for running, rowing, or simply clearing your mind before finals.</p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-100/50 to-transparent rounded-tl-full translate-x-12 translate-y-12 group-hover:scale-110 transition-transform duration-500"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-yellow-400" icon="solar:music-note-slider-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">POWs</h3>
<p className="text-sm text-slate-400">Legendary Parties of the Week. Where networking happens on the dance floor.</p>
</div>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-purple-500" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">100+ Student Clubs</h3>
<p className="text-sm text-slate-500">From Luxury to Finance, Rugby to Wine tasting. Find your tribe.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500 md:col-span-2">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm">
<iconify-icon className="text-slate-700" icon="solar:city-linear" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">45 min via RER C</span>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Proximity to Paris</h3>
<p className="text-sm text-slate-500 max-w-sm">The best of both worlds. A dedicated campus community with the City of Lights just a train ride away.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-hec-blue text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
<div className="flex flex-col items-center gap-2">
<span className="text-4xl font-medium tracking-tight">130+</span>
<span className="text-sm text-white/60 font-light">Nationalities</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-4xl font-medium tracking-tight">4,500</span>
<span className="text-sm text-white/60 font-light">Students on Campus</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-4xl font-medium tracking-tight">∞</span>
<span className="text-sm text-white/60 font-light">Possibilities</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-4xl font-medium tracking-tight">1</span>
<span className="text-sm text-white/60 font-light">Unique Experience</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">Make every day count.</h2>
<p className="text-lg text-slate-500 mb-10 font-light">
                The library will always be there. But the spontaneous BBQ by the lake? That's happening now.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2" href="#">
                    Explore Events
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<span className="text-xs text-slate-400">or</span>
<a className="text-sm font-medium text-slate-600 hover:text-hec-blue transition-colors" href="#">
                    Book a study room (if you must)
                </a>
</div>
</div>

<div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(#002B5C 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-hec-blue mb-6 block" href="#">HEC.</a>
<p className="text-xs text-slate-500 leading-relaxed">
                        1 Rue de la Libération,<br/>
                        78350 Jouy-en-Josas,<br/>
                        France
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Life</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-hec-blue transition-colors" href="#">Accommodation</a></li>
<li><a className="hover:text-hec-blue transition-colors" href="#">Dining &amp; Bar</a></li>
<li><a className="hover:text-hec-blue transition-colors" href="#">Sports Facilities</a></li>
<li><a className="hover:text-hec-blue transition-colors" href="#">Well-being</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-hec-blue transition-colors" href="#">Student Union</a></li>
<li><a className="hover:text-hec-blue transition-colors" href="#">MBA Council</a></li>
<li><a className="hover:text-hec-blue transition-colors" href="#">Alumni Network</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-hec-blue transition-colors" href="#">Campus Map</a></li>
<li><a className="hover:text-hec-blue transition-colors" href="#">Shuttle Schedule</a></li>
<li><a className="hover:text-hec-blue transition-colors" href="#">Library</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
<p className="text-xs text-slate-400">© 2024 HEC Paris Student Life. Not an official site.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-hec-blue transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-hec-blue transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-hec-blue transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
