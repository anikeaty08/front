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
      

<nav className="fixed w-full top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md py-5 border-b border-[#1A1A1A]/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-8 h-8 text-[#1A1A1A] hover:text-[#38E584] transition-colors duration-300">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="10" viewbox="0 0 100 100">

<path d="M70 25 A 40 40 0 1 1 30 25"></path>

<line x1="50" x2="50" y1="10" y2="35"></line>

<circle cx="35" cy="55" fill="currentColor" r="5" stroke="none"></circle>
<circle cx="65" cy="55" fill="currentColor" r="5" stroke="none"></circle>
</svg>
</div>
<span className="serif-font text-3xl tracking-tight text-[#1A1A1A]">Flux</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#1A1A1A]/70">
<a className="hover:text-[#1A1A1A] transition-colors" href="#">Scraping</a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">Safety</a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">Case Studies</a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-[#1A1A1A] hover:underline decoration-[#38E584] decoration-2 underline-offset-4" href="#">Log in</a>
<button className="px-5 py-2.5 rounded-full bg-[#1A1A1A] text-white hover:bg-[#38E584] hover:text-[#1A1A1A] transition-all duration-300 text-sm font-medium border border-[#1A1A1A]">
                    Start Sending
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">

<div className="space-y-10 relative">

<svg className="absolute -top-16 -left-10 w-32 h-32 text-[#1A1A1A] opacity-10 rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 200 200">
<path className="scribble-anim" d="M20,100 C50,0 150,0 180,100 S50,200 20,100 Z"></path>
</svg>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A1A1A]/10 bg-white shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#38E584] animate-pulse"></span>
<span className="text-xs font-medium text-[#1A1A1A]/60 uppercase tracking-wide">Live Infrastructure</span>
</div>
<h1 className="md:text-8xl leading-[0.9] serif-font text-6xl text-[#1A1A1A] tracking-tight" style={{}}>Send <span className="text-[#38E584]">10,000</span> <br/> <span className="relative inline-block">
<span className="relative z-10 italic">Cold DMs</span>
<svg className="absolute bottom-1 left-0 w-full h-3 text-[#38E584] -z-0 opacity-60" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span> every <br/> single day.</h1>
<p className="text-lg md:text-xl text-[#1A1A1A]/70 font-light max-w-lg leading-relaxed">
                    The only Instagram automation tool built for massive scale. Bypass spam filters, warm up thousands of accounts, and flood your calendar with qualified leads.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:bg-[#38E584] hover:text-[#1A1A1A] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group border border-[#1A1A1A] shadow-lg">
                        Start Campaign
                        <svg className="lucide lucide-send w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
</button>
<button className="px-8 py-4 bg-transparent border border-[#1A1A1A] text-[#1A1A1A] rounded-full text-lg font-medium hover:bg-[#F3F0EB] transition-colors flex items-center justify-center">
                        View ROI Calc
                    </button>
</div>
</div>

<div className="relative">

<div className="absolute -top-10 -right-10 w-64 h-64 bg-[#38E584]/20 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute bottom-10 -left-10 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply"></div>

<div className="relative bg-white border border-[#1A1A1A] rounded-[2.5rem] p-8 oyster-card-shadow rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">

<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A]">jason_leads_v2</h3>
<p className="text-xs text-[#1A1A1A]/50">Active now</p>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-[#38E584] text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">Bot Active</span>
</div>
<div className="space-y-4">
<div className="bg-[#FDFBF7] p-4 rounded-xl rounded-tl-none border border-[#1A1A1A]/5 max-w-[85%]">
<p className="text-sm text-[#1A1A1A]/80">Hey David, saw you run a marketing agency. We're helping owners like you book 30+ calls/mo without ads.</p>
</div>
<div className="bg-[#1A1A1A] text-white p-4 rounded-xl rounded-tr-none ml-auto max-w-[85%]">
<p className="text-sm">Interesting. How exactly do you do that?</p>
</div>
<div className="bg-[#FDFBF7] p-4 rounded-xl rounded-tl-none border border-[#1A1A1A]/5 max-w-[85%]">
<p className="text-sm text-[#1A1A1A]/80">We use a unique volume-based infrastructure. I can send you a quick 2-min breakdown if you're open to it?</p>
<div className="mt-3 flex gap-2">
<button className="px-3 py-1.5 bg-[#38E584] text-[#1A1A1A] text-xs font-bold rounded hover:opacity-80">Send Video</button>
<button className="px-3 py-1.5 bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] text-xs font-bold rounded">Book Call</button>
</div>
</div>
</div>

<div className="absolute -right-6 bottom-12 bg-white px-4 py-3 rounded-xl border border-[#1A1A1A] shadow-xl flex items-center gap-3 transform rotate-3">
<div className="w-8 h-8 rounded-full bg-[#F3F0EB] flex items-center justify-center">
<svg className="lucide lucide-check-circle w-4 h-4 text-[#38E584]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="text-xs font-medium">
<div className="text-[#1A1A1A]">Appointment Set</div>
<div className="text-[#1A1A1A]/50">Calendar Updated</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
<svg className="relative block w-full h-12 text-[#1C1C1C]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="transparent"></path>
</svg>
</div>
</section>

<div className="border-y border-[#1A1A1A]/10 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-[#1A1A1A]/50 mb-8 uppercase tracking-widest">Scaling lead gen for 500+ agencies</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-80 items-baseline">
<span className="text-2xl font-bold tracking-tighter text-[#1A1A1A]">Scale<span className="text-[#38E584]">Up</span></span>
<span className="text-2xl font-serif italic text-[#1A1A1A]">Growth.io</span>
<span className="text-xl font-bold tracking-tight text-[#1A1A1A] border-2 border-[#1A1A1A] px-2">HYPE</span>
<span className="text-2xl font-medium text-[#1A1A1A]">viral</span>
<span className="text-2xl font-serif text-[#1A1A1A]">Outreach</span>
</div>
</div>
</div>

<section className="py-32 bg-[#1C1C1C] text-[#FDFBF7] relative rounded-t-[3rem] -mt-12 overflow-hidden">

<svg className="absolute top-20 right-0 w-64 h-64 text-[#38E584] opacity-20" fill="none" stroke="currentColor" viewbox="0 0 100 100">
<path d="M50,10 A40,40 0 1,1 49,10" stroke-dasharray="4 4" strokeWidth="0.5"></path>
<circle className="opacity-20" cx="50" cy="50" fill="currentColor" r="20"></circle>
</svg>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-5xl md:text-7xl mb-6 serif-font tracking-tight">Volume is the  <span className="text-[#38E584] italic">only strategy.</span></h2>
<p className="text-xl text-[#FDFBF7]/70 font-light">Stop relying on manual DMs. Flux lets you deploy thousands of burner accounts to scrape, qualify, and message prospects at a scale that breaks the algorithm.</p>
</div>

<div className="bg-[#2A2A2A] rounded-t-3xl border border-[#FDFBF7]/10 p-2 flex overflow-x-auto gap-2 md:justify-center mb-0">
<button className="px-6 py-3 bg-[#38E584] text-[#1A1A1A] rounded-xl text-sm font-semibold shadow-lg whitespace-nowrap">Account Farming</button>
<button className="px-6 py-3 bg-transparent text-[#FDFBF7] hover:bg-[#FDFBF7]/5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors">Inbox Rotation</button>
<button className="px-6 py-3 bg-transparent text-[#FDFBF7] hover:bg-[#FDFBF7]/5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors">Target Scraping</button>
<button className="px-6 py-3 bg-transparent text-[#FDFBF7] hover:bg-[#FDFBF7]/5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors">Auto-Booking</button>
</div>

<div className="bg-[#38E584] rounded-[2.5rem] p-8 md:p-16 text-[#1A1A1A] relative overflow-hidden">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h3 className="text-4xl md:text-5xl serif-font leading-none">Uncapped volume. Zero account bans.</h3>
<p className="text-lg font-medium opacity-80 leading-relaxed">
                            Our proprietary 4G proxy network and device farm technology keeps your main brand safe. We use thousands of "satellite" accounts to do the dirty work, funnelling interest straight to you.
                        </p>
<a className="inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity" href="#">
                            See safety protocols <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-[#FDFBF7] rounded-[2rem] p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center">
<svg className="lucide lucide-server w-5 h-5" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div>
<div className="font-bold text-[#1A1A1A]">Campaign Status: Active</div>
<div className="text-xs text-[#1A1A1A]/60">Network Health: 100%</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white border border-[#1A1A1A]/5 rounded-lg">
<span className="text-xs font-medium">DMs Sent (Last Hour)</span>
<span className="text-xs text-[#38E584] font-bold">1,240</span>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-[#1A1A1A]/5 rounded-lg">
<span className="text-xs font-medium">Active Satellite Accounts</span>
<span className="text-xs text-[#38E584] font-bold">450</span>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-[#1A1A1A]/5 rounded-lg border-l-4 border-l-[#1A1A1A]">
<span className="text-xs font-medium">Positive Replies</span>
<span className="text-xs text-[#1A1A1A] font-bold">18 Leads</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 border-[20px] border-[#1A1A1A]/10 rounded-full"></div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFBF7] relative">

<svg className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-48 text-[#1A1A1A]" fill="none" stroke="currentColor" viewbox="0 0 100 200">
<path d="M50,0 Q50,100 50,200" stroke-dasharray="8 8" strokeWidth="2"></path>
<circle cx="50" cy="100" fill="#FDFBF7" r="10" stroke="currentColor" strokeWidth="2"></circle>
</svg>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-20">
<h2 className="text-5xl md:text-6xl text-[#1A1A1A] mb-6 serif-font tracking-tight">Built for businesses that  need to <span className="underline decoration-wavy decoration-[#38E584]">scale now</span>.</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/10 oyster-card-shadow-hover transition-all duration-300 group">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
<span className="serif-font italic text-xl">Ag</span>
</div>
<div>
<div className="font-bold text-[#1A1A1A]">SMMA / Agencies</div>
<div className="text-xs text-[#1A1A1A]/60 font-medium">Lead Generation</div>
</div>
</div>
<p className="text-lg text-[#1A1A1A]/80 font-medium leading-relaxed mb-6">
                        "We used to hire VA teams to send manual DMs. Flux replaced 10 VAs and quadrupled our output overnight. The ROI is insane."
                    </p>
<div className="w-full h-px bg-[#1A1A1A]/10"></div>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-[#1A1A1A] shadow-2xl transform md:-translate-y-4 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<svg className="w-10 h-10 text-[#38E584]" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703C7.91246 16 7.01703 16.8954 7.01703 18L7.01703 21H19.017V18C19.017 16.8954 18.1216 16 17.017 16H16.017V13H18.017V8H12.017V5H9.01703V2.8125L9.01703 2H14.017V8H18.017V13H20.017V18H21.017V21H14.017Z"></path></svg>
</div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-14 h-14 rounded-full bg-[#38E584] flex items-center justify-center text-[#1A1A1A]">
<span className="serif-font italic text-xl">Co</span>
</div>
<div>
<div className="font-bold text-white">High Ticket Coaches</div>
<div className="text-xs text-[#38E584] font-medium">Appointment Setting</div>
</div>
</div>
<p className="text-lg text-white/90 font-medium leading-relaxed mb-6 relative z-10">
                        "I fill my calendar entirely from Instagram DMs. Flux scrapes my competitor's followers and messages them automatically."
                    </p>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/10 oyster-card-shadow-hover transition-all duration-300 group">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
<span className="serif-font italic text-xl">Ec</span>
</div>
<div>
<div className="font-bold text-[#1A1A1A]">E-com Brands</div>
<div className="text-xs text-[#1A1A1A]/60 font-medium">Influencer Outreach</div>
</div>
</div>
<p className="text-lg text-[#1A1A1A]/80 font-medium leading-relaxed mb-6">
                        "Sourcing micro-influencers was a nightmare. Now we just set the criteria, and Flux messages 500 influencers a day for collabs."
                    </p>
<div className="w-full h-px bg-[#1A1A1A]/10"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1C1C1C] text-[#FDFBF7] relative rounded-t-[4rem]">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-20 text-center">
<span className="text-[#38E584] font-mono text-sm uppercase tracking-widest mb-4 block">The Process</span>
<h2 className="text-5xl md:text-7xl serif-font mb-6">From cold DM  to <span className="text-[#38E584] italic">closed deal</span>.</h2>
<p className="text-xl text-white/60 max-w-2xl mx-auto font-light">Flux isn't just a bot. It's a complete ecosystem for scraping, targeting, and converting strangers into clients.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#2A2A2A] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:bg-[#38E584] transition-colors duration-500">
<div className="absolute top-0 right-0 p-8 text-[#38E584] group-hover:text-[#1A1A1A] transition-colors">
<span className="text-6xl serif-font opacity-20">01</span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#38E584] text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-[#38E584] flex items-center justify-center mb-6 transition-colors">
<svg className="lucide lucide-crosshair w-6 h-6" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<h3 className="text-2xl font-bold mb-3 group-hover:text-[#1A1A1A]">Scrape &amp; Target</h3>
<p className="text-white/60 group-hover:text-[#1A1A1A]/70 leading-relaxed">
                            Input a hashtag, a competitor, or a location. Flux scrapes thousands of qualified leads, filtering out bots and inactive users.
                        </p>
</div>
</div>

<div className="bg-[#2A2A2A] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:bg-[#38E584] transition-colors duration-500">
<div className="absolute top-0 right-0 p-8 text-[#38E584] group-hover:text-[#1A1A1A] transition-colors">
<span className="text-6xl serif-font opacity-20">02</span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#38E584] text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-[#38E584] flex items-center justify-center mb-6 transition-colors">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-bold mb-3 group-hover:text-[#1A1A1A]">Mass Blast</h3>
<p className="text-white/60 group-hover:text-[#1A1A1A]/70 leading-relaxed">
                            Deploy your army of warmed-up accounts. Send personalized messages at scale using spintax to bypass detection filters.
                        </p>
</div>
</div>

<div className="bg-[#2A2A2A] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:bg-[#38E584] transition-colors duration-500">
<div className="absolute top-0 right-0 p-8 text-[#38E584] group-hover:text-[#1A1A1A] transition-colors">
<span className="text-6xl serif-font opacity-20">03</span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#38E584] text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-[#38E584] flex items-center justify-center mb-6 transition-colors">
<svg className="lucide lucide-calendar-check w-6 h-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-bold mb-3 group-hover:text-[#1A1A1A]">Auto-Booking</h3>
<p className="text-white/60 group-hover:text-[#1A1A1A]/70 leading-relaxed">
                            When a prospect replies positively, Flux notifies you or uses AI to continue the chat and book a call on your calendar.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFBF7] relative border-t border-[#1A1A1A]/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 space-y-4">
<h2 className="text-5xl md:text-6xl text-[#1A1A1A] serif-font tracking-tight">Pay for  <span className="italic text-[#38E584]">volume</span>.</h2>
<p className="text-lg text-[#1A1A1A]/60 font-light max-w-lg mx-auto">Scale your outreach instantly. No contracts, cancel anytime.</p>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm font-medium text-[#1A1A1A]">Monthly</span>
<label className="relative inline-block w-14 h-8 cursor-pointer" htmlFor="billing-toggle">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 border-[#1A1A1A] top-1 left-1 appearance-none cursor-pointer transition-all duration-300 z-10" id="billing-toggle" type="checkbox"/>
<div className="toggle-label block overflow-hidden h-8 rounded-full bg-[#1A1A1A]/10 cursor-pointer border border-[#1A1A1A]/10 transition-colors duration-300"></div>
</label>
<span className="text-sm font-medium text-[#1A1A1A]/50">Quarterly <span className="text-[#38E584] text-xs font-bold ml-1">-20%</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/10 oyster-card-shadow hover:-translate-y-1 transition-transform duration-300">
<div className="mb-6">
<h3 className="serif-font text-2xl text-[#1A1A1A]">Starter</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-[#1A1A1A]">$199</span>
<span className="ml-1 text-[#1A1A1A]/50">/mo</span>
</div>
<p className="mt-2 text-sm text-[#1A1A1A]/60">Perfect for solo consultants.</p>
</div>
<a className="block w-full py-3 px-4 bg-white border border-[#1A1A1A] rounded-xl text-center font-medium text-[#1A1A1A] hover:bg-[#F3F0EB] transition-colors mb-8" href="#">Get Started</a>
<ul className="space-y-4 text-sm text-[#1A1A1A]/80">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 500 DMs / day</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic Scraper</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 50 Accounts Included</li>
</ul>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-[#1A1A1A] neon-green-shadow transform md:-translate-y-6 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#38E584] text-[#1A1A1A] text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
<div className="mb-6">
<h3 className="serif-font text-2xl text-white">Scaling</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-white">$499</span>
<span className="ml-1 text-white/50">/mo</span>
</div>
<p className="mt-2 text-sm text-white/60">For agencies wanting serious volume.</p>
</div>
<a className="block w-full py-3 px-4 bg-[#38E584] border border-[#38E584] rounded-xl text-center font-bold text-[#1A1A1A] hover:opacity-90 transition-opacity mb-8 shadow-lg" href="#">Start Free Trial</a>
<ul className="space-y-4 text-sm text-white/80">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 5,000 DMs / day</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced Scraper (Competitors)</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Auto-DM Responder</li>
</ul>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/10 oyster-card-shadow hover:-translate-y-1 transition-transform duration-300">
<div className="mb-6">
<h3 className="serif-font text-2xl text-[#1A1A1A]">Whitelabel</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-[#1A1A1A]">Custom</span>
</div>
<p className="mt-2 text-sm text-[#1A1A1A]/60">For resellers and large teams.</p>
</div>
<a className="block w-full py-3 px-4 bg-white border border-[#1A1A1A] rounded-xl text-center font-medium text-[#1A1A1A] hover:bg-[#F3F0EB] transition-colors mb-8" href="#">Contact Sales</a>
<ul className="space-y-4 text-sm text-[#1A1A1A]/80">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 20,000+ DMs / day</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Account Manager</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-[#38E584]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> API Access</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFBF7] flex flex-col items-center justify-center text-center relative overflow-hidden">

<div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#38E584] rounded-full opacity-50"></div>
<div className="absolute bottom-10 right-10 w-32 h-32 bg-[#1A1A1A] rounded-full opacity-5"></div>
<div className="max-w-4xl mx-auto px-6 z-10">
<div className="w-20 h-20 mx-auto mb-8 text-[#1A1A1A]">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="8" viewbox="0 0 100 100">
<path d="M70 25 A 40 40 0 1 1 30 25"></path>
<line x1="50" x2="50" y1="10" y2="35"></line>
<circle cx="35" cy="55" fill="currentColor" r="5" stroke="none"></circle>
<circle cx="65" cy="55" fill="currentColor" r="5" stroke="none"></circle>
</svg>
</div>
<h2 className="text-6xl md:text-8xl text-[#1A1A1A] mb-8 serif-font tracking-tight leading-[0.9]">
                Start sending. 
                <span className="text-[#1A1A1A]/50 italic text-5xl md:text-7xl">Fill your calendar.</span>
</h2>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
<button className="px-10 py-5 bg-[#1A1A1A] text-white rounded-full text-xl font-medium hover:bg-[#38E584] hover:text-[#1A1A1A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 neon-green-shadow border border-[#1A1A1A]">
                    Launch Campaign
                </button>
<a className="group flex items-center gap-2 text-[#1A1A1A] font-medium text-lg hover:underline decoration-2 underline-offset-4" href="#">
                    See safety report <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<footer className="bg-[#1C1C1C] text-white pt-24 pb-12 rounded-t-[3rem] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-4 gap-12 mb-24 text-sm">
<div className="space-y-4">
<h5 className="font-bold text-[#38E584] uppercase tracking-wider mb-4">Features</h5>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">Mass DM</a>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">Scraper</a>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">Auto-Responder</a>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">Pricing</a>
</div>
<div className="space-y-4">
<h5 className="font-bold text-[#38E584] uppercase tracking-wider mb-4">Resources</h5>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">ROI Calculator</a>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">Cold DM Scripts</a>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">Help Center</a>
</div>
<div className="space-y-4">
<h5 className="font-bold text-[#38E584] uppercase tracking-wider mb-4">Company</h5>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">About</a>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">Affiliate Program</a>
<a className="block text-[#FDFBF7]/60 hover:text-white" href="#">Contact</a>
</div>
<div className="space-y-4">
<h5 className="font-bold text-[#38E584] uppercase tracking-wider mb-4">Social</h5>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-end gap-8">

<div className="flex-1 flex items-center gap-4">
<div className="w-16 h-16 text-white">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6" viewbox="0 0 100 100">
<path d="M70 25 A 40 40 0 1 1 30 25"></path>
<line x1="50" x2="50" y1="10" y2="35"></line>
<circle cx="35" cy="55" fill="currentColor" r="5" stroke="none"></circle>
<circle cx="65" cy="55" fill="currentColor" r="5" stroke="none"></circle>
</svg>
</div>
<span className="text-[clamp(4rem,10vw,8rem)] leading-none serif-font font-medium tracking-tighter block text-white">Flux</span>
</div>
<div className="flex items-center gap-2 mb-4 md:mb-8">
<div className="w-2 h-2 rounded-full bg-[#38E584] animate-pulse"></div>
<span className="text-xs text-[#FDFBF7]/40">System Operational • 24/7</span>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between text-xs text-[#FDFBF7]/30 mt-8">
<p>© 2024 Flux Automation Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50">
<button className="w-14 h-14 bg-[#38E584] rounded-full flex items-center justify-center text-[#1A1A1A] shadow-2xl hover:scale-110 transition-transform border-2 border-[#1A1A1A] group">

<svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="10" viewbox="0 0 100 100">
<path d="M70 25 A 40 40 0 1 1 30 25"></path>
<line x1="50" x2="50" y1="10" y2="35"></line>
<circle cx="35" cy="55" fill="currentColor" r="5" stroke="none"></circle>
<circle cx="65" cy="55" fill="currentColor" r="5" stroke="none"></circle>
</svg>
</button>
</div>
</footer>


    </>
  );
}
