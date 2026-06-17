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
      

<div className="max-w-7xl mx-auto mb-12">
<h1 className="text-3xl tracking-tight font-medium text-deep-gray mb-2">AuraSync</h1>
<p className="text-sec-gray text-lg font-light">Product Interface Design • Desktop &amp; Mobile</p>
</div>

<section className="max-w-7xl mx-auto">
<div className="mb-4 flex items-center gap-2">
<span className="bg-gray-200 text-xs text-gray-600 px-2 py-1 rounded-md font-medium uppercase tracking-wider">Screen 01</span>
<h2 className="text-xl font-medium tracking-tight text-deep-gray">Desktop Dashboard</h2>
</div>

<div className="w-full h-[800px] rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-white flex relative bg-[#F0F4F9]">

<aside className="w-64 glass-panel border-r border-white/50 flex flex-col justify-between p-6 z-10">
<div>

<div className="flex items-center gap-2 mb-10">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#5CE1E6] to-[#FF8C94] flex items-center justify-center text-white">
<i className="w-5 h-5 fill-current text-white" data-lucide="zap"></i>
</div>
<span className="text-xl font-medium tracking-tight text-deep-gray">AuraSync</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 text-deep-gray shadow-sm border border-white/60 transition-all" href="#">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="text-sm font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-sec-gray hover:bg-white/40 hover:text-deep-gray transition-all" href="#">
<i className="w-5 h-5" data-lucide="folder-open"></i>
<span className="text-sm font-medium">Library</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-sec-gray hover:bg-white/40 hover:text-deep-gray transition-all" href="#">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="text-sm font-medium">Notifications</span>
<span className="ml-auto w-2 h-2 rounded-full bg-sunburst-pink"></span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-sec-gray hover:bg-white/40 hover:text-deep-gray transition-all" href="#">
<i className="w-5 h-5" data-lucide="users"></i>
<span className="text-sm font-medium">Team</span>
</a>
</nav>
</div>

<div>
<button className="w-full bg-[#5CE1E6] hover:bg-[#4dd0d5] text-deep-gray font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#5CE1E6]/20 transition-all transform hover:-translate-y-0.5">
<i className="w-5 h-5" data-lucide="video"></i>
                        Record Briefing
                    </button>
<div className="mt-6 flex items-center gap-3 px-2">
<img alt="Profile" className="w-8 h-8 rounded-full border border-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1">
<p className="text-xs font-medium text-deep-gray">Alex M.</p>
<p className="text-xs text-sec-gray">Pro Plan</p>
</div>
<i className="w-4 h-4 text-sec-gray cursor-pointer hover:text-deep-gray" data-lucide="settings-2"></i>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto p-8 relative">

<header className="flex justify-between items-center mb-10">
<div className="relative w-96">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sec-gray" data-lucide="search"></i>
<input className="w-full bg-white/50 border border-transparent focus:border-[#5CE1E6] focus:bg-white focus:ring-0 rounded-full py-2.5 pl-10 pr-4 text-sm text-deep-gray placeholder-slate-400 outline-none transition-all" placeholder="Search transcripts..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center hover:bg-white transition-colors text-sec-gray relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-sunburst-pink rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

<div className="col-span-1 glass-panel p-6 rounded-2xl border border-white shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-sunburst-pink/10 rounded-full blur-2xl group-hover:bg-sunburst-pink/20 transition-all"></div>
<div className="flex items-start justify-between">
<div className="bg-sunburst-pink/10 p-2.5 rounded-xl text-sunburst-pink">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12%
                            </span>
</div>
<div>
<h3 className="text-3xl font-medium tracking-tight text-deep-gray mb-1">2h 15m</h3>
<p className="text-sm text-sec-gray">Saved this week vs meetings</p>
</div>
</div>

<div className="col-span-1 glass-panel p-6 rounded-2xl border border-white shadow-sm flex flex-col justify-between h-40">
<div className="flex items-start justify-between">
<div className="bg-[#5CE1E6]/10 p-2.5 rounded-xl text-[#2cb1b6]">
<i className="w-5 h-5" data-lucide="eye"></i>
</div>
</div>
<div>
<h3 className="text-3xl font-medium tracking-tight text-deep-gray mb-1">84%</h3>
<p className="text-sm text-sec-gray">Team engagement rate</p>
</div>
</div>

<div className="col-span-1 bg-gradient-to-br from-white to-[#F0F4F9] border border-dashed border-gray-300 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center h-40 cursor-pointer hover:border-[#5CE1E6] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-[#5CE1E6]" data-lucide="plus"></i>
</div>
<p className="text-sm font-medium text-deep-gray">Create New Space</p>
</div>
</div>

<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-deep-gray">Recent Briefings</h3>
<button className="text-sm text-sec-gray hover:text-deep-gray flex items-center gap-1">View All <i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
<div className="relative aspect-video rounded-xl bg-slate-100 overflow-hidden mb-3">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
<span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md">2:14</span>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
<i className="w-4 h-4 fill-deep-gray text-deep-gray ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div className="px-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-deep-gray line-clamp-1 group-hover:text-[#5CE1E6] transition-colors">Q3 Marketing Roadmap Update</h4>
<span className="w-2 h-2 rounded-full bg-[#5CE1E6] mt-1.5" title="Unwatched"></span>
</div>
<div className="flex items-center gap-2 mt-2">
<img className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<span className="text-xs text-sec-gray">Alex M. • 2h ago</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
<div className="relative aspect-video rounded-xl bg-slate-100 overflow-hidden mb-3">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md">5:03</span>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
<i className="w-4 h-4 fill-deep-gray text-deep-gray ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div className="px-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-deep-gray line-clamp-1 group-hover:text-[#5CE1E6] transition-colors">Client Feedback Review</h4>
</div>
<div className="flex items-center gap-2 mt-2">
<img className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?u=4"/>
<span className="text-xs text-sec-gray">Sarah J. • Yesterday</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
<div className="relative aspect-video rounded-xl bg-slate-100 overflow-hidden mb-3">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md">1:45</span>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
<i className="w-4 h-4 fill-deep-gray text-deep-gray ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div className="px-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-deep-gray line-clamp-1 group-hover:text-[#5CE1E6] transition-colors">New Feature Walkthrough</h4>
<span className="w-2 h-2 rounded-full bg-[#5CE1E6] mt-1.5" title="Unwatched"></span>
</div>
<div className="flex items-center gap-2 mt-2">
<img className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?u=8"/>
<span className="text-xs text-sec-gray">David K. • 2 days ago</span>
</div>
</div>
</div>
</div>
</main>
</div>
</section>

<section className="max-w-7xl mx-auto">
<div className="mb-4 flex items-center gap-2">
<span className="bg-gray-200 text-xs text-gray-600 px-2 py-1 rounded-md font-medium uppercase tracking-wider">Screen 02</span>
<h2 className="text-xl font-medium tracking-tight text-deep-gray">Video Player Experience</h2>
</div>
<div className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-white bg-[#F0F4F9] p-8 min-h-[700px]">

<div className="flex items-center gap-4 mb-6">
<button className="w-8 h-8 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center border border-gray-100 text-sec-gray">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<div>
<h1 className="text-xl font-medium tracking-tight text-deep-gray">Q3 Marketing Roadmap Update</h1>
<p className="text-sm text-sec-gray">Recorded by Alex M. on Oct 24</p>
</div>
<div className="ml-auto flex gap-3">
<button className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-sm font-medium text-deep-gray shadow-sm hover:bg-gray-50 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
                    </button>
<button className="px-4 py-2 rounded-lg bg-deep-gray text-white text-sm font-medium shadow-sm hover:bg-gray-800 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="message-square"></i> Reply
                    </button>
</div>
</div>
<div className="grid grid-cols-12 gap-8 h-[500px]">

<div className="col-span-12 lg:col-span-8 flex flex-col h-full">
<div className="relative flex-1 rounded-2xl overflow-hidden bg-black group shadow-lg">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform border border-white/30">
<i className="w-8 h-8 fill-white text-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">

<div className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer relative group/timeline">
<div className="w-[35%] h-full bg-[#5CE1E6] rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full scale-0 group-hover/timeline:scale-100 transition-transform shadow-md"></div>
</div>
</div>
<div className="flex items-center justify-between text-white">
<div className="flex items-center gap-4">
<button><i className="w-5 h-5 fill-white" data-lucide="pause"></i></button>
<button><i className="w-5 h-5" data-lucide="skip-back"></i></button>
<button><i className="w-5 h-5" data-lucide="skip-forward"></i></button>
<span className="text-xs font-medium opacity-90">1:05 / 2:14</span>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors">1.5x</button>
<button><i className="w-5 h-5" data-lucide="maximize"></i></button>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-4 h-full">

<div className="glass-panel p-5 rounded-2xl border border-white shadow-sm flex-shrink-0">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-sunburst-pink" data-lucide="sparkles"></i>
<h3 className="text-sm font-medium text-deep-gray">AI Summary</h3>
</div>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-sec-gray">
<span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] mt-1.5 flex-shrink-0"></span>
<span>Revenue increased by <strong>15%</strong> QoQ.</span>
</li>
<li className="flex items-start gap-2 text-sm text-sec-gray">
<span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] mt-1.5 flex-shrink-0"></span>
<span>New SEO strategy launching next week.</span>
</li>
</ul>
</div>

<div className="glass-panel flex-1 rounded-2xl border border-white shadow-sm flex flex-col overflow-hidden">
<div className="flex border-b border-gray-100">
<button className="flex-1 py-3 text-sm font-medium text-deep-gray border-b-2 border-[#5CE1E6] bg-white/50">Transcript</button>
<button className="flex-1 py-3 text-sm font-medium text-sec-gray hover:text-deep-gray">Discussion (3)</button>
</div>

<div className="p-5 overflow-y-auto flex-1 relative">
<div className="space-y-4">
<p className="text-sm text-sec-gray">
<span className="text-xs font-mono text-gray-400 mr-2">0:15</span>
                                    Hey everyone, just wanted to quickly run through the Q3 roadmap updates.
                                </p>
<p className="text-sm text-deep-gray font-medium bg-[#5CE1E6]/10 p-2 rounded-lg -mx-2 border-l-2 border-[#5CE1E6]">
<span className="text-xs font-mono text-[#5CE1E6] mr-2">1:05</span>
                                    We noticed a significant uptick in organic traffic, which is great news for the new campaign.
                                </p>
<p className="text-sm text-sec-gray">
<span className="text-xs font-mono text-gray-400 mr-2">1:20</span>
                                    However, conversion rates on the landing page are slightly below target.
                                </p>
<p className="text-sm text-sec-gray">
<span className="text-xs font-mono text-gray-400 mr-2">1:35</span>
                                    I'm proposing we run A/B tests on the CTA placement starting Monday.
                                </p>
<p className="text-sm text-sec-gray">
<span className="text-xs font-mono text-gray-400 mr-2">1:50</span>
                                    Let me know your thoughts in the comments. Thanks!
                                </p>
</div>

<div className="absolute bottom-4 right-4 max-w-[200px] bg-white p-3 rounded-xl shadow-lg border border-gray-100 text-xs animate-bounce">
<div className="flex items-center gap-2 mb-1">
<img className="w-4 h-4 rounded-full" src="https://i.pravatar.cc/150?u=8"/>
<span className="font-medium text-deep-gray">David K.</span>
</div>
<p className="text-gray-600">"Great point on the A/B test!"</p>
<div className="mt-1 text-[#5CE1E6] font-medium text-[10px]">at 1:35</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

<div>
<div className="mb-4 flex items-center gap-2">
<span className="bg-gray-200 text-xs text-gray-600 px-2 py-1 rounded-md font-medium uppercase tracking-wider">Screen 03</span>
<h2 className="text-xl font-medium tracking-tight text-deep-gray">Mobile App (Inbox)</h2>
</div>
<div className="mx-auto md:ml-0 w-[375px] h-[780px] bg-[#F0F4F9] rounded-[3rem] border-8 border-white shadow-2xl relative overflow-hidden flex flex-col">

<div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20">
<span className="text-xs font-semibold text-deep-gray">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-2.5 bg-deep-gray rounded-[1px]"></div>
<div className="w-0.5 h-2.5 bg-deep-gray rounded-[1px]"></div>
</div>
</div>

<div className="px-6 pb-4 flex justify-between items-end">
<h1 className="text-2xl font-medium tracking-tight text-deep-gray">Inbox</h1>
<div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
<img className="w-8 h-8 rounded-full p-0.5 border border-gray-100" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
</div>

<div className="px-6 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
<button className="bg-[#1A202C] text-white px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap">All</button>
<button className="bg-white/60 text-sec-gray px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-white">Mentions</button>
<button className="bg-white/60 text-sec-gray px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-white">Unwatched</button>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-24 space-y-4">

<div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-white">
<div className="relative w-full aspect-video bg-slate-100 rounded-xl overflow-hidden mb-3">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
<i className="w-3 h-3 fill-white text-white ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-deep-gray">Design Sprint Kickoff</h3>
<div className="flex justify-between items-center mt-2">
<div className="flex items-center gap-2">
<img className="w-4 h-4 rounded-full" src="https://i.pravatar.cc/150?u=3"/>
<span className="text-xs text-sec-gray">Mike T.</span>
</div>
<span className="text-xs font-medium text-[#5CE1E6] bg-[#5CE1E6]/10 px-2 py-0.5 rounded-md">New</span>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-white">
<div className="flex gap-3">
<div className="relative w-24 h-20 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 py-1">
<h3 className="text-sm font-medium text-deep-gray leading-tight mb-1">Q4 Budget Review</h3>
<p className="text-xs text-sec-gray mb-2 line-clamp-1">Going over the final numbers for...</p>
<span className="text-[10px] text-gray-400">14 mins ago</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30">
<button className="w-14 h-14 bg-gradient-to-tr from-[#5CE1E6] to-[#4DB6BC] rounded-full shadow-lg shadow-[#5CE1E6]/40 flex items-center justify-center text-white transform hover:scale-105 transition-transform">
<i className="w-6 h-6" data-lucide="video"></i>
</button>
</div>

<div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-100 h-20 px-6 pb-4 flex justify-between items-center z-20">
<div className="flex flex-col items-center gap-1 text-[#5CE1E6]">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<i className="w-5 h-5" data-lucide="search"></i>
<span className="text-[10px] font-medium">Search</span>
</div>
<div className="w-8"></div> 
<div className="flex flex-col items-center gap-1 text-gray-400">
<i className="w-5 h-5" data-lucide="inbox"></i>
<span className="text-[10px] font-medium">Inbox</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-[10px] font-medium">Profile</span>
</div>
</div>
</div>
</div>

<div>
<div className="mb-4 flex items-center gap-2">
<span className="bg-gray-200 text-xs text-gray-600 px-2 py-1 rounded-md font-medium uppercase tracking-wider">Assets</span>
<h2 className="text-xl font-medium tracking-tight text-deep-gray">Design System Components</h2>
</div>
<div className="space-y-8 bg-white/50 p-8 rounded-3xl border border-white">

<div className="space-y-4">
<h3 className="text-xs font-semibold text-sec-gray uppercase tracking-wider">Buttons</h3>
<div className="flex flex-wrap gap-4 items-center">
<button className="bg-[#5CE1E6] hover:bg-[#4dd0d5] text-deep-gray font-medium py-2.5 px-6 rounded-xl shadow-lg shadow-[#5CE1E6]/20 transition-all text-sm">
                            Primary Action
                        </button>
<button className="bg-white border border-gray-200 text-deep-gray font-medium py-2.5 px-6 rounded-xl hover:bg-gray-50 transition-all text-sm shadow-sm">
                            Secondary
                        </button>
<button className="text-sec-gray hover:text-deep-gray font-medium py-2 px-4 text-sm">
                            Ghost Button
                        </button>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold text-sec-gray uppercase tracking-wider">Inputs</h3>
<div className="space-y-3 max-w-sm">
<input className="w-full bg-[#F1F5F9] border-none rounded-xl py-3 px-4 text-sm text-deep-gray placeholder-gray-400 focus:ring-2 focus:ring-[#5CE1E6]/50 outline-none" placeholder="Default Input" type="text"/>
<div className="flex items-center gap-2">
<input checked="" className="w-5 h-5 text-[#5CE1E6] rounded border-gray-300 focus:ring-[#5CE1E6]" type="checkbox"/>
<span className="text-sm text-deep-gray">Custom Checkbox</span>
</div>

<div className="flex items-center gap-3">
<div className="w-11 h-6 bg-[#5CE1E6] rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
<span className="text-sm text-deep-gray">Notifications On</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold text-sec-gray uppercase tracking-wider">Badges &amp; Tags</h3>
<div className="flex flex-wrap gap-3">
<span className="bg-[#5CE1E6]/10 text-[#2cb1b6] px-3 py-1 rounded-full text-xs font-medium">New Feature</span>
<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Completed</span>
<span className="bg-sunburst-pink/10 text-sunburst-pink px-3 py-1 rounded-full text-xs font-medium">Priority High</span>
<span className="bg-gray-100 text-sec-gray px-3 py-1 rounded-full text-xs font-medium">Draft</span>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold text-sec-gray uppercase tracking-wider">Analytics Style</h3>
<div className="w-full h-24 bg-white rounded-xl border border-white shadow-sm p-4 relative overflow-hidden flex items-end justify-between gap-1">

<div className="w-full bg-[#5CE1E6]/20 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-[#5CE1E6]/40 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-[#5CE1E6]/30 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-[#5CE1E6] h-[75%] rounded-t-sm relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-deep-gray text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">75%</div>
</div>
<div className="w-full bg-[#5CE1E6]/30 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-[#5CE1E6]/20 h-[40%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</section>

<div className="text-center pt-10 pb-20">
<p className="text-sm text-sec-gray">© 2024 AuraSync Mockup.</p>
</div>


    </>
  );
}
