import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // FAQ Toggle Logic
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.faq-icon');
            
            // Toggle current
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.classList.add('block', 'mt-3');
                icon.setAttribute('icon', 'solar:minus-circle-bold-duotone');
                icon.classList.add('text-indigo-400');
            } else {
                content.classList.add('hidden');
                content.classList.remove('block', 'mt-3');
                icon.setAttribute('icon', 'solar:add-circle-bold-duotone');
                icon.classList.remove('text-indigo-400');
            }
        });
    });

    // Mobile Menu Logic
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });
    
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/20 absolute inset-0"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>

<div className="gradient-blur"><div></div><div></div></div>

<header className="sticky z-50 top-0 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
<div className="flex max-w-7xl mx-auto px-6 h-16 items-center justify-between">

<a className="inline-flex items-center gap-2 group" href="#">
<iconify-icon className="text-white group-hover:text-indigo-400 transition-colors" height="28" icon="solar:globus-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<span className="font-inter font-bold text-xl tracking-tighter text-white">TravelAI</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white transition-colors" href="#">Features</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Integration</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Customers</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="inline-flex items-center gap-2 transition-all hover:bg-white text-sm font-medium text-slate-950 bg-slate-100 rounded-full px-4 py-2" href="#">
          Get Started 
          <iconify-icon height="16" icon="solar:arrow-right-bold-duotone" width="16"></iconify-icon>
</a>
</div>
<button className="md:hidden text-slate-200" id="menuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-bold-duotone" width="24"></iconify-icon>
</button>
</div>

<aside className="mobile-menu fixed z-50 bg-slate-950 w-full h-screen top-0 left-0 transform translate-x-full transition-transform duration-300" id="mobileMenu">
<div className="p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-8">
<span className="font-inter font-bold text-xl tracking-tighter">TravelAI</span>
<button className="text-slate-200" id="closeMenuBtn">
<iconify-icon height="28" icon="solar:close-circle-bold-duotone" width="28"></iconify-icon>
</button>
</div>
<ul className="space-y-6 text-lg">
<li><a className="block text-white" href="#">Features</a></li>
<li><a className="block text-slate-400" href="#">Integration</a></li>
<li><a className="block text-slate-400" href="#">Customers</a></li>
<li><a className="block text-slate-400" href="#">Pricing</a></li>
</ul>
<div className="mt-auto space-y-4">
<a className="block w-full py-3 text-center rounded-xl bg-white text-slate-950 font-bold" href="#">Get Started</a>
</div>
</div>
</aside>
</header>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h1 className="font-inter font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-8 leading-[0.95]">
        Everything you need <br/>
<span className="text-slate-500">to explore the world.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        From intelligent routing to real-time expense tracking. Our suite of AI-powered tools transforms how you experience travel.
      </p>
<div className="flex flex-wrap items-center justify-center gap-4">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors">
<iconify-icon height="20" icon="solar:rocket-bold-duotone" width="20"></iconify-icon>
          Start Building
        </button>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors">
<iconify-icon height="20" icon="solar:play-circle-bold-duotone" width="20"></iconify-icon>
          View Changelog
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-indigo-500/10">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-900/80">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-medium text-slate-500 font-inter tracking-wide uppercase">TravelAI Workspace</div>
<div className="w-16"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

<div className="hidden lg:flex lg:col-span-2 flex-col border-r border-white/5 bg-slate-950/30 p-4 gap-2">
<div className="text-xs font-semibold text-slate-500 mb-2 px-2 uppercase tracking-wider">Menu</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-medium">
<iconify-icon icon="solar:map-point-bold-duotone" width="18"></iconify-icon> Itinerary
          </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
<iconify-icon icon="solar:wallet-money-bold-duotone" width="18"></iconify-icon> Expenses
          </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
<iconify-icon icon="solar:users-group-rounded-bold-duotone" width="18"></iconify-icon> Team
          </div>
<div className="mt-8 text-xs font-semibold text-slate-500 mb-2 px-2 uppercase tracking-wider">Active Trips</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 text-sm">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div> Kyoto, JP
          </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 text-sm">
<div className="w-2 h-2 rounded-full bg-blue-500"></div> Oslo, NO
          </div>
</div>

<div className="lg:col-span-7 bg-slate-950/50 p-6 md:p-8">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-inter font-semibold text-2xl text-white">Kyoto Expedition</h3>
<p className="text-sm text-slate-400">Oct 24 - Oct 30 • 4 Travelers</p>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-bold text-white">AM</div>
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">JL</div>
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-slate-400">+2</div>
</div>
</div>

<div className="space-y-4">

<div className="group flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/50 hover:border-indigo-500/30 transition-all">
<div className="flex flex-col items-center gap-1">
<span className="text-xs font-bold text-slate-500">09:00</span>
<div className="h-full w-px bg-white/10"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="font-medium text-white">Fushimi Inari Taisha</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Confirmed</span>
</div>
<p className="text-sm text-slate-400 mb-3">Hiking the mountain trails through thousands of vermilion torii gates.</p>
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold-duotone"></iconify-icon> 2h 30m</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-bold-duotone"></iconify-icon> 2.4km walk</span>
</div>
</div>
</div>

<div className="group flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/50 hover:border-indigo-500/30 transition-all">
<div className="flex flex-col items-center gap-1">
<span className="text-xs font-bold text-slate-500">12:30</span>
<div className="h-full w-px bg-white/10"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="font-medium text-white">Omakase Lunch</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Reservation</span>
</div>
<p className="text-sm text-slate-400 mb-3">Sushi Gion Matsudaya. 6-seat counter experience.</p>
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:card-bold-duotone"></iconify-icon> ¥15,000 pp</span>
</div>
</div>
</div>

<div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 flex gap-4 items-start">
<div className="mt-1 text-indigo-400">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-indigo-300 block mb-1">Weather Alert: Rain expected at 15:00</span>
<p className="text-xs text-indigo-200/70">Swapping "Outdoor Garden" for "Kyoto National Museum". Updated route saves 20 mins.</p>
<div className="flex gap-2 mt-3">
<button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-md transition-colors">Apply Change</button>
<button className="text-xs bg-indigo-900/30 text-indigo-300 px-3 py-1.5 rounded-md hover:bg-indigo-900/50 transition-colors">Dismiss</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-3 border-l border-white/5 bg-slate-950/30 p-6">
<div className="mb-6">
<div className="w-full aspect-video rounded-lg bg-slate-800 mb-3 overflow-hidden relative group">
<div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all"></div>

<div className="w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(#4f46e5 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<iconify-icon className="text-indigo-400 text-4xl" icon="solar:map-point-wave-bold-duotone"></iconify-icon>
</div>
</div>
<h4 className="font-inter font-medium text-white mb-1">Kyoto Area</h4>
<p className="text-xs text-slate-500">24°C • Cloudy • Moderate AQI</p>
</div>
<div className="space-y-4">
<div className="p-3 rounded-lg border border-white/5 bg-white/5">
<div className="text-xs text-slate-400 mb-1">Total Budget</div>
<div className="text-xl font-mono font-medium text-white">$4,250.00</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-indigo-500 h-full w-[65%]"></div>
</div>
</div>
<div className="p-3 rounded-lg border border-white/5 bg-white/5">
<div className="text-xs text-slate-400 mb-1">Flights</div>
<div className="flex items-center justify-between">
<span className="text-sm text-white">JAL 006</span>
<span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">On Time</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="font-inter font-semibold text-3xl md:text-5xl tracking-tight text-white mb-6">Built for the modern explorer</h2>
<p className="text-lg text-slate-400">Everything is automated. From finding the best routes to tracking shared expenses, we handle the complexity so you can enjoy the journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-indigo-500 rotate-12" height="200" icon="solar:calendar-date-bold-duotone" width="200"></iconify-icon>
</div>
<div className="p-8 md:p-10 relative z-10 h-full flex flex-col justify-end min-h-[320px]">
<div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:magic-stick-3-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="font-inter font-semibold text-2xl text-white mb-2">Generative Itineraries</h3>
<p className="text-slate-400 leading-relaxed max-w-md">Input your interests and let our LLM construct a minute-by-minute plan. It considers opening hours, travel time, and crowd density to optimize your day.</p>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="p-8 md:p-10 relative z-10 h-full flex flex-col justify-between min-h-[320px]">
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center"><iconify-icon icon="solar:cup-bold-duotone"></iconify-icon></div>
<span className="text-sm font-medium">Coffee</span>
</div>
<span className="text-sm font-mono">-$12.50</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><iconify-icon icon="solar:bus-bold-duotone"></iconify-icon></div>
<span className="text-sm font-medium">Transport</span>
</div>
<span className="text-sm font-mono">-$45.00</span>
</div>
</div>
<div>
<h3 className="font-inter font-semibold text-xl text-white mb-2">Smart Wallet</h3>
<p className="text-slate-400 text-sm">Split bills instantly. Track spending in any currency with real-time conversion.</p>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="p-8 md:p-10 relative z-10 h-full flex flex-col justify-end min-h-[320px]">
<div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:map-point-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="font-inter font-semibold text-xl text-white mb-2">Offline First</h3>
<p className="text-slate-400 text-sm">Download entire regions. Access your itinerary, maps, and tickets without a signal.</p>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-cover opacity-5 mix-blend-overlay bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7984eb2a-0c9a-4cd8-8103-92bcdb2310f5_1600w.webp)]"></div>
<div className="p-8 md:p-10 relative z-10 h-full flex flex-col sm:flex-row items-end sm:items-center justify-between gap-8 min-h-[320px]">
<div className="max-w-md">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:users-group-two-rounded-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="font-inter font-semibold text-2xl text-white mb-2">Real-time Collaboration</h3>
<p className="text-slate-400">Invite friends to your trip board. Vote on activities, assign tasks, and build the perfect plan together in real-time.</p>
</div>

<div className="w-full sm:w-64 bg-slate-800 rounded-xl border border-white/10 p-4 shadow-xl">
<div className="flex gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs">AM</div>
<div className="bg-indigo-500/20 p-2 rounded-lg rounded-tl-none text-xs text-indigo-100">Should we book the museum for 2 PM?</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs">JD</div>
<div className="bg-slate-700 p-2 rounded-lg rounded-tr-none text-xs text-slate-200">Yes! The weather looks good.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl font-inter font-bold text-white mb-2">2.4M+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Itineraries Generated</div>
</div>
<div>
<div className="text-4xl font-inter font-bold text-white mb-2">150+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Countries Supported</div>
</div>
<div>
<div className="text-4xl font-inter font-bold text-white mb-2">4.9/5</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">App Store Rating</div>
</div>
<div>
<div className="text-4xl font-inter font-bold text-white mb-2">$12M</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">User Savings</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-3 gap-12">
<div className="md:col-span-1">
<h2 className="font-inter font-semibold text-3xl tracking-tight text-white mb-4">Common Questions</h2>
<p className="text-slate-400 mb-6">Everything you need to know about the product and billing.</p>
<a className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors" href="#">
                Contact Support <iconify-icon icon="solar:arrow-right-bold-duotone"></iconify-icon>
</a>
</div>
<div className="md:col-span-2 space-y-6">

<div className="faq-item group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all p-6 cursor-pointer">
<div className="flex items-center justify-between mb-3">
<h3 className="font-medium text-white text-lg">Does the offline mode work for maps?</h3>
<iconify-icon className="text-slate-400 group-hover:text-white transition-colors text-2xl faq-icon" icon="solar:add-circle-bold-duotone"></iconify-icon>
</div>
<div className="hidden text-slate-400 leading-relaxed faq-content">
                    Yes, Pro users can download entire city maps, including turn-by-turn navigation and place details, for completely offline use.
                </div>
</div>

<div className="faq-item group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all p-6 cursor-pointer">
<div className="flex items-center justify-between mb-3">
<h3 className="font-medium text-white text-lg">Can I export to Google Calendar?</h3>
<iconify-icon className="text-slate-400 group-hover:text-white transition-colors text-2xl faq-icon" icon="solar:add-circle-bold-duotone"></iconify-icon>
</div>
<div className="hidden text-slate-400 leading-relaxed faq-content">
                    Absolutely. We support 2-way sync with Google Calendar, Outlook, and Apple Calendar so your itinerary is always up to date.
                </div>
</div>

<div className="faq-item group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all p-6 cursor-pointer">
<div className="flex items-center justify-between mb-3">
<h3 className="font-medium text-white text-lg">Is there a free tier?</h3>
<iconify-icon className="text-slate-400 group-hover:text-white transition-colors text-2xl faq-icon" icon="solar:add-circle-bold-duotone"></iconify-icon>
</div>
<div className="hidden text-slate-400 leading-relaxed faq-content">
                    Yes, the "Explorer" plan is free forever and includes 1 active trip, basic AI generation, and online access.
                </div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24">
<div className="relative rounded-3xl overflow-hidden bg-indigo-600 p-8 md:p-16 text-center">

<div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-50"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10">
<h2 className="font-inter font-bold text-3xl md:text-5xl text-white mb-6 tracking-tight">Ready to travel smarter?</h2>
<p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">Join Alex Morgan and 2 million other travelers using TravelAI to discover the world's hidden gems.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                    Get Started Free <iconify-icon icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-indigo-700/50 border border-indigo-400/30 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors">
                    Schedule Demo
                </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950 pt-16 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="space-y-4">
<a className="inline-flex items-center gap-2" href="#">
<iconify-icon className="text-slate-200" height="24" icon="solar:globus-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="font-inter font-bold text-lg tracking-tighter text-white">TravelAI</span>
</a>
<p className="text-sm text-slate-400 max-w-xs">AI-powered travel concierge. Plan perfect trips in seconds.</p>
<div className="flex items-center gap-4 pt-2">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-bold-duotone" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-bold-duotone" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-bold-duotone" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Product</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">© 2024 TravelAI Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-400">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
