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
      

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-x-2">
<i className="h-6 w-6 text-white" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight text-white">Argus Robotics</span>
</div>
<div className="hidden md:flex items-center gap-x-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#vehicle">The Jetson ONE</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#ownership">Fractional Ownership</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#routes">Abuja Routes</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#training">Pilot Training</a>
</div>
<div>
<a className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors" href="#reserve">
                    Apply for Membership
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
<video autoplay="" className="h-full w-full object-cover opacity-90" loop="" muted="" playsinline="" poster="//s.alicdn.com/@sc04/kf/H515620d53bd845ed958b8225e750de4eN.png_720x720q50.jpg">
<source src="https://gv.videocdn.alibaba.com/icbu_vod_video/video_target/gv99-70db8b5f-a1bf40b6-9953a137-603c/trans/aidc/04mk7m-h264-hd.mp4?bizCode=icbu_vod_video" type="video/mp4"/>
</video>
</div>

<div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950/80 via-zinc-950/30 to-transparent"></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-zinc-950"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-md">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                        Now recruiting for Abuja Syndicate
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 drop-shadow-lg">
                        Personal Flight.<br/>
<span className="text-zinc-300">Shared Freedom.</span>
</h1>
<p className="text-xl leading-relaxed text-zinc-200 mb-10 max-w-lg drop-shadow-md">
                        Own a share of the future with Argus Robotics. Experience the Jetson ONE in Nigeria through our exclusive fractional ownership program. Skip the Abuja traffic and own the sky.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-lg font-medium text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/20" href="#reserve">
                            Check Availability
                            <i className="ml-2 h-5 w-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-medium text-white hover:bg-white/10 transition-all" href="#specs">
                            View Specs
                        </a>
</div>
</div>

<div className="hidden lg:block"></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/30 py-12 backdrop-blur-sm relative z-10" id="specs">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="border-l border-white/10 pl-6">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Top Speed</p>
<p className="text-3xl font-medium text-white tracking-tight">102 km/h</p>
</div>
<div className="border-l border-white/10 pl-6">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Flight Time</p>
<p className="text-3xl font-medium text-white tracking-tight">20 mins</p>
</div>
<div className="border-l border-white/10 pl-6">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Recharge</p>
<p className="text-3xl font-medium text-white tracking-tight">1 Hour</p>
</div>
<div className="border-l border-white/10 pl-6">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Weight</p>
<p className="text-3xl font-medium text-white tracking-tight">86 kg</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="vehicle">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">The Formula 1 Car for the Sky</h2>
<p className="text-xl text-zinc-400">
                    The Jetson ONE is an ultralight eVTOL designed for safety and fun. With an aluminum spaceframe and 8 powerful electric motors, it offers a redundant propulsion system that keeps you safe.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative rounded-2xl bg-zinc-900/50 border border-white/5 p-8 hover:border-indigo-500/50 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
<i className="h-6 w-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Safety First</h3>
<p className="text-lg text-zinc-500">Features a ballistic parachute, lidar sensors for terrain tracking, and hands-free hover functions. If you let go of the joystick, it simply stops and hovers.</p>
</div>

<div className="group relative rounded-2xl bg-zinc-900/50 border border-white/5 p-8 hover:border-indigo-500/50 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
<i className="h-6 w-6" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Pure Electric</h3>
<p className="text-lg text-zinc-500">Zero emissions. Silent operation compared to helicopters. Powered by high-discharge Tesla-grade lithium-ion batteries tailored for the Nigerian climate.</p>
</div>

<div className="group relative rounded-2xl bg-zinc-900/50 border border-white/5 p-8 hover:border-indigo-500/50 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
<i className="h-6 w-6" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Intuitive Control</h3>
<p className="text-lg text-zinc-500">A 3-axis joystick controls the flight computer. It takes minutes to learn, not years. Argus Robotics provides comprehensive simulator training in Abuja.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-white/5" id="ownership">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">Smart Ownership. <br/>Managed by Argus.</h2>
<p className="text-xl text-zinc-400 mb-8">
                        Why buy the whole aircraft when you only need it a few hours a week? Our syndicate model allows 8 members to share ownership of one Jetson ONE unit, drastically reducing costs while maximizing utility.
                    </p>
<ul className="space-y-6">
<li className="flex items-start">
<i className="h-6 w-6 text-indigo-500 mt-1 mr-4 flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-white">Full Maintenance &amp; Hangarage</h4>
<p className="text-zinc-500 mt-1">We store the vehicle in our secure facility in Maitama. Charging, cleaning, and technical maintenance are all included.</p>
</div>
</li>
<li className="flex items-start">
<i className="h-6 w-6 text-indigo-500 mt-1 mr-4 flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-white">Scheduling App</h4>
<p className="text-zinc-500 mt-1">Book your flight slots instantly via the Argus App. Guaranteed weekend slots on rotation.</p>
</div>
</li>
<li className="flex items-start">
<i className="h-6 w-6 text-indigo-500 mt-1 mr-4 flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-white">Insurance Included</h4>
<p className="text-zinc-500 mt-1">Comprehensive hull and liability insurance is part of your monthly subscription.</p>
</div>
</li>
</ul>
</div>
<div className="relative bg-zinc-950 rounded-3xl border border-white/5 p-8 lg:p-12">
<div className="absolute top-0 right-0 p-8 opacity-20">
<i className="h-32 w-32 text-white" data-lucide="credit-card" strokeWidth="1"></i>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Founding Member Syndicate</h3>
<p className="text-zinc-500 mb-8">Abuja Chapter - Limited to 8 slots</p>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<span className="text-lg text-zinc-400">One-time Share Purchase</span>
<span className="text-2xl font-medium text-white">₦ 12,500,000</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<span className="text-lg text-zinc-400">Monthly Management</span>
<span className="text-2xl font-medium text-white">₦ 350,000</span>
</div>
</div>
<button className="w-full rounded-lg bg-white py-4 text-center text-lg font-medium text-zinc-950 hover:bg-zinc-200 transition-colors">
                        Request Syndicate Packet
                    </button>
<p className="text-center text-sm text-zinc-600 mt-4">Includes pilot training certification.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="routes">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Approved Flight Corridors</h2>
<p className="text-xl text-zinc-400 max-w-2xl">
                    Argus Robotics has worked with local aviation authorities to establish safe, recreational flight corridors around Abuja.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-24">

<div className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium text-white">The Maitama Loop</h3>
<span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">Scenic</span>
</div>
<p className="text-zinc-500 mb-6 text-lg">A stunning 15-minute recreational loop offering views of the Millennium Park and Aso Rock. Perfect for sunset flights.</p>
<div className="flex items-center text-sm text-zinc-400">
<i className="h-4 w-4 mr-2" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Departs: Argus Hangar, Maitama</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium text-white">Jabi Lake Sprint</h3>
<span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 border border-indigo-500/20">Performance</span>
</div>
<p className="text-zinc-500 mb-6 text-lg">Open water flying experience over Jabi Lake. Experience the speed of the Jetson ONE in a safe, obstacle-free environment.</p>
<div className="flex items-center text-sm text-zinc-400">
<i className="h-4 w-4 mr-2" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Departs: Jabi Boat Club Platform</span>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-zinc-800/50 border border-white/5 p-8 lg:p-12 flex flex-col md:flex-row items-center gap-12" id="training">
<div className="flex-1">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">No License? No Problem.</h2>
<p className="text-xl text-zinc-400 mb-6">
                        The Jetson ONE is classified as an ultralight vehicle. In Nigeria, we provide a mandatory 2-day "Argus Pilot Certification" course as part of your membership.
                    </p>
<ul className="space-y-3 mb-8 text-lg text-zinc-400">
<li className="flex items-center"><i className="h-5 w-5 mr-3 text-indigo-400" data-lucide="check" strokeWidth="1.5"></i> Virtual Reality Simulator Training</li>
<li className="flex items-center"><i className="h-5 w-5 mr-3 text-indigo-400" data-lucide="check" strokeWidth="1.5"></i> Tethered Flight Practice</li>
<li className="flex items-center"><i className="h-5 w-5 mr-3 text-indigo-400" data-lucide="check" strokeWidth="1.5"></i> Emergency Protocols</li>
</ul>
<a className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center" href="#">
                        Learn about the curriculum <i className="ml-2 h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="w-full md:w-1/3 flex justify-center">
<i className="h-48 w-48 text-zinc-700" data-lucide="award" strokeWidth="0.5"></i>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-zinc-500" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-lg font-medium tracking-tight text-zinc-500">Argus Robotics</span>
</div>
<div className="text-sm text-zinc-600">
                © 2024 Argus Robotics Nigeria. All rights reserved. Jetson ONE is a trademark of Jetson Aero.
            </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>


    </>
  );
}
