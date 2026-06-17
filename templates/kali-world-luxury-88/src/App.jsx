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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-stone-200/50 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-stone-300/40 blur-[120px]"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-6">
<div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-16 flex items-center justify-between px-6 transition-all">
<div className="flex items-center gap-3">
<div className="bg-stone-900 text-white p-1.5 rounded-lg shadow-lg shadow-stone-500/20">
<span className="iconify" data-height="18" data-icon="lucide:hexagon" data-width="18" style={{strokeWidth: '2'}}></span>
</div>
<span className="text-sm font-bold tracking-tight uppercase text-stone-900 text-shadow-sm">KALI WORLD</span>
</div>
<div className="hidden md:flex items-center gap-1">
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 px-4 py-2 rounded-lg hover:bg-stone-100/50 transition-colors" href="#">Vision</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 px-4 py-2 rounded-lg hover:bg-stone-100/50 transition-colors" href="#">Campus</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 px-4 py-2 rounded-lg hover:bg-stone-100/50 transition-colors" href="#">Wellness</a>
<button className="ml-4 bg-gradient-to-b from-stone-800 to-stone-950 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-0.5 transition-all border-t border-white/10">
                    Inquire Membership
                </button>
</div>
</div>
</nav>
<main className="pt-36 px-4 md:px-6 max-w-7xl mx-auto">

<header className="mb-12 max-w-3xl pl-2">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-100 shadow-sm mb-8">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-sm"></span>
</span>
<span className="text-xs font-semibold text-stone-600 tracking-wide uppercase">Strategic Overview</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6 drop-shadow-sm">
                A holistic luxury ecosystem for <span className="text-transparent bg-clip-text bg-gradient-to-br from-stone-600 to-stone-900">living, learning, &amp; healing.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 font-medium leading-relaxed max-w-2xl">
                KALI WORLD integrates premium hospitality with spiritual education and animal welfare, creating a sustainable sanctuary for the modern conscious individual.
            </p>
</header>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-5">

<div className="lg:col-span-1 card-3d rounded-2xl p-6 border border-stone-100/60">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-5">
<div className="icon-box-3d p-2 rounded-xl text-stone-500">
<span className="iconify" data-icon="lucide:handshake" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">Key Partners</h2>
</div>
<ul className="space-y-4 mt-2 flex-grow">
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Spiritual Leaders
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Animal Welfare Ops
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Luxury Hospitality
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Organic Artisans
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Wellness Brands
                        </li>
</ul>
</div>
</div>

<div className="lg:col-span-1 flex flex-col gap-5">

<div className="card-3d rounded-2xl p-6 border border-stone-100/60 flex-grow">
<div className="flex items-center gap-3 mb-5">
<div className="icon-box-3d p-2 rounded-xl text-stone-500">
<span className="iconify" data-icon="lucide:activity" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">Activities</h2>
</div>
<ul className="space-y-3">
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Luxury Living
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Holistic Wellness
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Animal Rescue
                        </li>
</ul>
</div>

<div className="card-3d rounded-2xl p-6 border border-stone-100/60 flex-grow">
<div className="flex items-center gap-3 mb-5">
<div className="icon-box-3d p-2 rounded-xl text-stone-500">
<span className="iconify" data-icon="lucide:layers" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">Resources</h2>
</div>
<ul className="space-y-3">
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Premium Land
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Expert Staff
                        </li>
</ul>
</div>
</div>

<div className="lg:col-span-1 card-dark-3d rounded-2xl p-7 relative overflow-hidden group border border-stone-800">

<div className="absolute -top-[100px] -right-[100px] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-3 mb-8">
<div className="bg-stone-800/50 border border-white/10 p-2 rounded-xl text-orange-200 shadow-inner">
<span className="iconify" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-xs font-bold uppercase tracking-wider text-stone-500">Value Props</h2>
</div>
<div className="space-y-8 flex-grow">
<div>
<h3 className="text-white text-base font-semibold mb-2 tracking-tight flex items-center gap-2">
                                Holistic Campus
                            </h3>
<p className="text-stone-400 text-sm leading-relaxed font-medium">Integrated living, learning, and healing in one exclusive destination.</p>
</div>
<div>
<h3 className="text-white text-base font-semibold mb-2 tracking-tight">Eco Sanctuary</h3>
<p className="text-stone-400 text-sm leading-relaxed font-medium">Sustainable environment merging high-end comfort with nature.</p>
</div>
<div>
<h3 className="text-white text-base font-semibold mb-2 tracking-tight">Exclusive Personalization</h3>
<p className="text-stone-400 text-sm leading-relaxed font-medium">Tailored spiritual and wellness journeys for the affluent.</p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-stone-700 to-transparent opacity-50"></div>
</div>
</div>

<div className="lg:col-span-1 flex flex-col gap-5">

<div className="card-3d rounded-2xl p-6 border border-stone-100/60 flex-grow">
<div className="flex items-center gap-3 mb-5">
<div className="icon-box-3d p-2 rounded-xl text-stone-500">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">Relationships</h2>
</div>
<ul className="space-y-3">
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Concierge Service
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Wellness Checks
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Exclusive Events
                        </li>
</ul>
</div>

<div className="card-3d rounded-2xl p-6 border border-stone-100/60 flex-grow">
<div className="flex items-center gap-3 mb-5">
<div className="icon-box-3d p-2 rounded-xl text-stone-500">
<span className="iconify" data-icon="lucide:share-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">Channels</h2>
</div>
<ul className="space-y-3">
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Digital App/Web
                        </li>
<li className="text-sm font-medium text-stone-700 flex items-start gap-3">
<span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shadow-sm"></span> Luxury Networks
                        </li>
</ul>
</div>
</div>

<div className="lg:col-span-1 card-3d rounded-2xl p-6 border border-stone-100/60">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-5">
<div className="icon-box-3d p-2 rounded-xl text-stone-500">
<span className="iconify" data-icon="lucide:users" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">Segments</h2>
</div>
<div className="space-y-5 mt-2 flex-grow">
<div className="group cursor-default bg-stone-50/50 p-3 rounded-xl border border-stone-100/50 hover:bg-white hover:shadow-md transition-all duration-300">
<h4 className="text-sm font-bold text-stone-900">Affluent Families</h4>
<p className="text-xs text-stone-500 mt-1 font-medium">Seeking holistic living.</p>
</div>
<div className="group cursor-default bg-stone-50/50 p-3 rounded-xl border border-stone-100/50 hover:bg-white hover:shadow-md transition-all duration-300">
<h4 className="text-sm font-bold text-stone-900">Wellness Seekers</h4>
<p className="text-xs text-stone-500 mt-1 font-medium">Spiritual tourists.</p>
</div>
<div className="group cursor-default bg-stone-50/50 p-3 rounded-xl border border-stone-100/50 hover:bg-white hover:shadow-md transition-all duration-300">
<h4 className="text-sm font-bold text-stone-900">Corporate Groups</h4>
<p className="text-xs text-stone-500 mt-1 font-medium">Retreats &amp; teams.</p>
</div>
<div className="group cursor-default bg-stone-50/50 p-3 rounded-xl border border-stone-100/50 hover:bg-white hover:shadow-md transition-all duration-300">
<h4 className="text-sm font-bold text-stone-900">Animal Advocates</h4>
<p className="text-xs text-stone-500 mt-1 font-medium">Donors &amp; volunteers.</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

<div className="card-3d rounded-2xl p-8 border border-stone-100/60">
<div className="flex items-center gap-3 mb-8">
<div className="p-2.5 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl text-stone-600 shadow-inner">
<span className="iconify" data-icon="lucide:credit-card" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-sm font-bold uppercase tracking-widest text-stone-900">Cost Structure</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
<div className="flex items-center justify-between border-b border-stone-100 pb-3">
<span className="text-sm font-medium text-stone-600">Land &amp; Development</span>
<span className="text-[10px] font-bold uppercase bg-stone-100 text-stone-500 px-2 py-1 rounded shadow-sm">Fixed</span>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-3">
<span className="text-sm font-medium text-stone-600">Staff &amp; Experts</span>
<span className="text-[10px] font-bold uppercase bg-stone-100 text-stone-500 px-2 py-1 rounded shadow-sm">Ops</span>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-3">
<span className="text-sm font-medium text-stone-600">Sanctuary Ops</span>
<span className="text-[10px] font-bold uppercase bg-stone-100 text-stone-500 px-2 py-1 rounded shadow-sm">Ops</span>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-3">
<span className="text-sm font-medium text-stone-600">Marketing &amp; Brand</span>
<span className="text-[10px] font-bold uppercase bg-stone-100 text-stone-500 px-2 py-1 rounded shadow-sm">Var</span>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-stone-900 to-black rounded-2xl p-8 border border-stone-800 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2.5 bg-white/10 rounded-xl text-white border border-white/5 shadow-lg">
<span className="iconify" data-icon="lucide:wallet" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-sm font-bold uppercase tracking-widest text-white">Revenue Streams</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<span className="text-sm font-medium text-stone-300">Residential Fees</span>
<span className="text-[10px] font-bold uppercase bg-white/10 text-stone-300 px-2 py-1 rounded shadow-sm border border-white/5">Recurring</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<span className="text-sm font-medium text-stone-300">Retreat Packages</span>
<span className="text-[10px] font-bold uppercase bg-white/10 text-stone-300 px-2 py-1 rounded shadow-sm border border-white/5">Transactional</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<span className="text-sm font-medium text-stone-300">Educational Tuition</span>
<span className="text-[10px] font-bold uppercase bg-white/10 text-stone-300 px-2 py-1 rounded shadow-sm border border-white/5">Recurring</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<span className="text-sm font-medium text-stone-300">Donations &amp; Sponsors</span>
<span className="text-[10px] font-bold uppercase bg-white/10 text-stone-300 px-2 py-1 rounded shadow-sm border border-white/5">Support</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-stone-200/50">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="group">
<span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 group-hover:text-stone-600 transition-colors">Who</span>
<p className="text-sm font-medium text-stone-800 leading-relaxed">Affluent families, wellness seekers, students, animal lovers.</p>
</div>
<div className="group">
<span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 group-hover:text-stone-600 transition-colors">What</span>
<p className="text-sm font-medium text-stone-800 leading-relaxed">Luxury, holistic campus with wellness, education, and rescue.</p>
</div>
<div className="group">
<span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 group-hover:text-stone-600 transition-colors">How</span>
<p className="text-sm font-medium text-stone-800 leading-relaxed">Premium facilities, expert staff, exclusive experiences.</p>
</div>
<div className="group">
<span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 group-hover:text-stone-600 transition-colors">Why</span>
<p className="text-sm font-medium text-stone-800 leading-relaxed">To provide a transformative environment for harmony.</p>
</div>
</div>
<div className="mt-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="text-stone-300 hover:text-stone-400 transition-colors duration-500">
<span className="iconify filter drop-shadow-lg" data-icon="lucide:flower-2" data-width="64" style={{strokeWidth: '0.75'}}></span>
</div>
<div className="flex flex-col items-end gap-5">
<div className="flex items-center gap-4">
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-stone-400 hover:text-orange-600 hover:shadow-lg hover:-translate-y-1 transition-all border border-stone-100" href="https://www.instagram.com/om_sri_matha_mahakali_trust?igsh=MTM4ajg0MHk5ZDYzZg==" rel="noopener noreferrer" target="_blank" title="Instagram">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-stone-400 hover:text-red-600 hover:shadow-lg hover:-translate-y-1 transition-all border border-stone-100" href="https://youtube.com/@tripurafoundationkolar?si=jpsVUPSAanL9mZ2B" rel="noopener noreferrer" target="_blank" title="YouTube">
<span className="iconify" data-icon="lucide:youtube" data-width="18"></span>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-stone-400 hover:text-sky-500 hover:shadow-lg hover:-translate-y-1 transition-all border border-stone-100" href="https://t.me/+FrM4EJS6K_hmYTA1" rel="noopener noreferrer" target="_blank" title="Telegram">
<span className="iconify" data-icon="lucide:send" data-width="18"></span>
</a>
</div>
<p className="text-xs font-medium text-stone-400">© 2024 KALI WORLD. All rights reserved.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
