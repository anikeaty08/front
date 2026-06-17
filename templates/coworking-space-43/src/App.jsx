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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded text-xs font-bold">C</div>
                CLAPHAM
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#home">Workspace</a>
<a className="hover:text-zinc-900 transition-colors" href="#events">Events</a>
<a className="hover:text-zinc-900 transition-colors" href="#meeting">Meeting</a>
<a className="hover:text-zinc-900 transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors hover:shadow-lg hover:shadow-zinc-200" href="#contact">
                    Book a Space
                </a>
<button className="md:hidden text-zinc-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 border-b border-zinc-100 bg-grid-pattern relative" id="home">

<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open 24/7 for members
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6">
                    The premier flexible <br/> workspace in Medan.
                </h1>
<p className="text-lg md:text-xl text-zinc-500 font-normal leading-relaxed max-w-2xl">
                    Clapham provides a productive ecosystem for creators, startups, and professionals. Experience high-speed internet, ergonomic comfort, and a vibrant community.
                </p>
<div className="mt-8 flex flex-wrap gap-4">
<button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all hover:gap-3">
                        Get Started <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all">
                        View Pricing
                    </button>
</div>
</div>

<div className="mb-20 border-t border-zinc-100 pt-8">
<p className="text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">Trusted by innovative teams</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-zinc-900">
<iconify-icon className="text-zinc-900" icon="lucide:triangle" width="24"></iconify-icon> VERSEL
                    </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-zinc-900">
<iconify-icon className="text-zinc-900" icon="lucide:hexagon" width="24"></iconify-icon> ACME
                    </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-zinc-900">
<iconify-icon className="text-zinc-900" icon="lucide:circle-dashed" width="24"></iconify-icon> ORBIT
                    </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-zinc-900">
<iconify-icon className="text-zinc-900" icon="lucide:zap" width="24"></iconify-icon> BOLT
                    </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-zinc-900">
<iconify-icon className="text-zinc-900" icon="lucide:layers" width="24"></iconify-icon> STACK
                    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-all bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1">
<div className="h-48 overflow-hidden bg-zinc-100 relative">
<img alt="Private Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-zinc-900 shadow-sm">
<iconify-icon icon="lucide:briefcase" width="16"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight mb-2">Private Office</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Secure, enclosed office space perfect for growing teams needing privacy.</p>
<div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400">Monthly</span>
<span className="text-xs font-semibold text-zinc-900">Ask for Quote</span>
</div>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-all bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1">
<div className="h-48 overflow-hidden bg-zinc-100 relative">
<img alt="Day Pass" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-zinc-900 shadow-sm">
<iconify-icon icon="lucide:ticket" width="16"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight mb-2">Day Pass</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Flexible daily access for travelers and digital nomads in our lounge.</p>
<div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400">Daily</span>
<span className="text-xs font-semibold text-zinc-900">IDR 100k</span>
</div>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-all bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1">
<div className="h-48 overflow-hidden bg-zinc-100 relative">
<img alt="Flexible Desk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-zinc-900 shadow-sm">
<iconify-icon icon="lucide:armchair" width="16"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight mb-2">Flexible Desk</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Hot desk solution. Pick any open spot and start working immediately.</p>
<div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400">Monthly</span>
<span className="text-xs font-semibold text-zinc-900">IDR 1.2jt</span>
</div>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-all bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1">
<div className="h-48 overflow-hidden bg-zinc-100 relative">
<img alt="Dedicated Desk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-zinc-900 shadow-sm">
<iconify-icon icon="lucide:monitor" width="16"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight mb-2">Dedicated Desk</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Your own reserved desk. Leave your monitor and gear safely overnight.</p>
<div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400">Monthly</span>
<span className="text-xs font-semibold text-zinc-900">IDR 2.0jt</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-b border-zinc-100" id="events">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-600 mb-6 shadow-sm">
<iconify-icon icon="lucide:calendar" width="14"></iconify-icon> Event Space
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
                        Host events that inspire <br/> and connect.
                    </h2>
<p className="text-base text-zinc-500 leading-relaxed mb-8">
                        Our versatile event spaces are designed to accommodate everything from intimate workshops to large corporate gatherings. Equipped with modern technology to ensure your event runs smoothly.
                    </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex flex-col gap-1 p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors shadow-sm">
<iconify-icon className="text-zinc-900 mb-2" icon="lucide:mic-2" width="20"></iconify-icon>
<span className="text-sm font-semibold text-zinc-900">Seminars</span>
<span className="text-xs text-zinc-500">Theater style setup</span>
</div>
<div className="flex flex-col gap-1 p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors shadow-sm">
<iconify-icon className="text-zinc-900 mb-2" icon="lucide:pencil" width="20"></iconify-icon>
<span className="text-sm font-semibold text-zinc-900">Workshops</span>
<span className="text-xs text-zinc-500">Classroom style setup</span>
</div>
</div>
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
                        Request a Quote
                    </button>
</div>
<div className="lg:w-1/2 w-full order-1 lg:order-2">
<div className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50 transform md:rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="h-64 relative">
<img alt="Event Space" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<span className="block text-2xl font-semibold tracking-tight">Start from 75k</span>
<span className="text-xs font-medium opacity-90">per pax / session</span>
</div>
</div>

<div className="p-8">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Full Venue Package</h3>
<p className="text-sm text-zinc-500">Includes all premium amenities.</p>
</div>
<div className="bg-zinc-100 p-2 rounded-full">
<iconify-icon className="text-zinc-900" icon="lucide:star" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-green-600 mt-0.5" icon="lucide:check-circle" width="16"></iconify-icon>
<div className="text-sm text-zinc-600">Capacity up to 50+ Pax (Flexible Layout)</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-600 mt-0.5" icon="lucide:check-circle" width="16"></iconify-icon>
<div className="text-sm text-zinc-600">High-lumen Projector &amp; Sound System</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-600 mt-0.5" icon="lucide:check-circle" width="16"></iconify-icon>
<div className="text-sm text-zinc-600">Free Flow Coffee &amp; Tea</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-100" id="meeting">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
                    Focus where it matters.
                </h2>
<p className="text-base text-zinc-500">
                    Private meeting spaces optimized for team collaboration, client presentations, and confidential interviews.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="col-span-1 md:col-span-2 relative rounded-3xl overflow-hidden min-h-[400px] border border-zinc-200 group">
<img alt="Meeting Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center hover:bg-white/20 transition-colors cursor-default">
<iconify-icon className="text-white mb-2" icon="lucide:tv" width="20"></iconify-icon>
<span className="block text-xs font-medium text-white">4K Display</span>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center hover:bg-white/20 transition-colors cursor-default">
<iconify-icon className="text-white mb-2" icon="lucide:presentation" width="20"></iconify-icon>
<span className="block text-xs font-medium text-white">Whiteboard</span>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center hover:bg-white/20 transition-colors cursor-default">
<iconify-icon className="text-white mb-2" icon="lucide:wifi" width="20"></iconify-icon>
<span className="block text-xs font-medium text-white">Fast WiFi</span>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center hover:bg-white/20 transition-colors cursor-default">
<iconify-icon className="text-white mb-2" icon="lucide:cup-soda" width="20"></iconify-icon>
<span className="block text-xs font-medium text-white">Free Drink</span>
</div>
</div>
<div className="flex gap-3 flex-wrap">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md text-xs text-white rounded-full border border-white/10">Ideal for Team Meetings</span>
<span className="px-3 py-1 bg-white/20 backdrop-blur-md text-xs text-white rounded-full border border-white/10">Client Pitches</span>
</div>
</div>
</div>

<div className="col-span-1 bg-zinc-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl shadow-zinc-300/50 ring-1 ring-zinc-800">
<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-semibold tracking-tight">Reserve a Room</h3>
<iconify-icon className="text-zinc-400" icon="lucide:calendar-clock" width="20"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm mb-8 leading-relaxed">Choose the duration that fits your schedule. Instant confirmation.</p>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-center py-3 border-b border-zinc-800">
<span className="text-sm text-zinc-300">Hourly Rate</span>
<span className="font-medium">IDR 100k</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-zinc-800">
<span className="text-sm text-zinc-300">Half Day (4h)</span>
<div className="text-right">
<span className="block font-medium">IDR 350k</span>
<span className="block text-[10px] text-zinc-500">Save 12%</span>
</div>
</div>
<div className="flex justify-between items-center py-3 border-b border-zinc-800">
<span className="text-sm text-zinc-300">Full Day (8h)</span>
<div className="text-right">
<span className="block font-medium">IDR 600k</span>
<span className="block text-[10px] text-zinc-500">Best Value</span>
</div>
</div>
</div>
</div>
<button className="w-full py-3 bg-white text-zinc-900 font-medium text-sm rounded-full hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 group">
                        Book Meeting Room <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12">
<div className="md:w-1/3 space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
                            Connected to everything.
                        </h2>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Located strategically in the business district of Medan. Clapham offers accessibility and convenience for both your team and your clients.
                        </p>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100">
<iconify-icon className="text-zinc-900" icon="lucide:map" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Strategic Location</h4>
<p className="text-xs text-zinc-500 mt-1">Easy access from major roads with ample parking space available.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100">
<iconify-icon className="text-zinc-900" icon="lucide:briefcase" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Business Ready</h4>
<p className="text-xs text-zinc-500 mt-1">Practical for client meetings, surrounded by the city's business hub.</p>
</div>
</div>
</div>
</div>
<div className="md:w-2/3">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-5 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors cursor-default">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-zinc-900">Food &amp; Dining</span>
<iconify-icon className="text-zinc-400" icon="lucide:utensils" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-500">Surrounded by top-rated cafes and restaurants for lunch breaks.</p>
</div>
<div className="p-5 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors cursor-default">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-zinc-900">Finance</span>
<iconify-icon className="text-zinc-400" icon="lucide:credit-card" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-500">Major banks and ATMs within walking distance.</p>
</div>
<div className="p-5 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors cursor-default">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-zinc-900">Accommodation</span>
<iconify-icon className="text-zinc-400" icon="lucide:bed" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-500">Close proximity to business hotels for visiting partners.</p>
</div>
<div className="p-5 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors cursor-default">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-zinc-900">Convenience</span>
<iconify-icon className="text-zinc-400" icon="lucide:shopping-bag" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-500">Minimarkets and essential services nearby.</p>
</div>
</div>

<div className="mt-4 w-full h-48 bg-zinc-100 rounded-xl border border-zinc-200 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

<div className="absolute top-10 left-10 w-20 h-1 bg-zinc-200 rotate-45"></div>
<div className="absolute bottom-10 right-20 w-32 h-1 bg-zinc-200 -rotate-12"></div>
<div className="relative bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-medium text-zinc-900 flex items-center gap-2 z-10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                            Clapham Medan
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to elevate your workflow?
            </h2>
<p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Join a community of innovators. Book a tour today and see why Clapham is the preferred workspace in Medan.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-100 transition-colors w-full sm:w-auto" href="#contact">
                    Schedule a Visit
                </a>
<a className="px-8 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-full font-medium hover:bg-zinc-700 transition-colors w-full sm:w-auto flex items-center justify-center gap-2" href="https://wa.me/">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon> WhatsApp Us
                </a>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-white font-semibold tracking-tighter text-xl flex items-center gap-2">
                    CLAPHAM
                </div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-zinc-600">
                    © 2023 Clapham Coworking Space.
                </div>
</div>
</div>
</footer>

    </>
  );
}
