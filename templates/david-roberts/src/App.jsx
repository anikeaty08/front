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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="fixed w-full h-full left-0 top-0 -z-10"></div>

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>

<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-3">
<svg className="text-white" fill="none" height="24" viewbox="0 0 92 36" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
<span className="font-semibold tracking-tight text-sm text-white">David W. Roberts</span>
</div>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight" href="#process">Process</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight" href="#about">About</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight" href="#faq">FAQ</a>
</nav>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-4 py-2 transition-colors" href="#calendly">
<span>Talk to David</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-8 pr-6 pb-8 pl-6">

<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border border-white/10 rounded-full px-3 py-1.5 mb-6">
<iconify-icon height="14" icon="solar:map-point-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Royal Palm Yacht &amp; Country Club</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-medium text-neutral-100 tracking-tighter">
            The Only Way Into Royal Palm Is Through the Broker Who's Been There 40 Years.
          </h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-400 max-w-3xl mt-6 mr-auto ml-auto">David W. Roberts has closed over $6 billion in Royal Palm Yacht &amp; Country Club more than every other agent combined. If you're buying or selling here, this is where the conversation starts.</p>

<div className="mt-8">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-8 py-4 transition-colors" href="#calendly">
<span>Talk to David directly</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="mt-16 w-full relative pt-[56.25%] bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm">

</div>
</div>

<div className="mt-10 pt-8 border-t border-white/10">
<div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-xs font-medium text-neutral-400 tracking-wide text-center">
<span>RealTrends Verified — #8 Agent in the Nation (2024)</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 hidden md:block"></span>
<span>#1 Residential Broker, Palm Beach County — The Real Deal</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 hidden lg:block"></span>
<span>$6B+ in career sales, Royal Palm Yacht &amp; Country Club</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 hidden lg:block"></span>
<span>Ranked nationally every year since 2008</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 hidden xl:block"></span>
<span>The only brokerage dedicated exclusively to RPYCC</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="sm:p-10 pt-8 pr-6 pb-8 pl-6 relative">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="p-6 rounded-2xl bg-neutral-900/90 border border-white/10">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon height="20" icon="solar:eye-broken" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100">You're looking at listings everyone else can already see.</h3>
<p className="leading-relaxed text-sm text-neutral-400 mt-3">
              The best properties in Royal Palm never reach Zillow. By the time a listing goes live, the right buyer has already been called. If your agent isn't inside this community, you're shopping the leftovers.
            </p>
</article>
<article className="p-6 rounded-2xl bg-neutral-900/90 border border-white/10">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon height="20" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100">You don't know what this community is actually worth right now.</h3>
<p className="leading-relaxed text-sm text-neutral-400 mt-3">Price per square foot doesn't tell the story here. Waterfront lot, developer, build quality, club proximity these variables move price by millions. Without 40 years of closed data in this one zip code, you're guessing.</p>
</article>
<article className="bg-neutral-900/90 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon height="20" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100">Your listing is reaching the wrong buyers.</h3>
<p className="leading-relaxed text-sm text-neutral-400 mt-3">An outside agent posts to the MLS and waits. Royal Palm buyers don't browse MLS. They call the broker they trust the one who's been their neighbor for decades. If your broker isn't that person, your home is reaching the wrong audience.</p>
</article>
</div>

<div className="mt-16 pt-16 border-t border-white/10 max-w-4xl mx-auto">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300 font-medium tracking-wide uppercase">The Approach</span>
</div>
<h2 className="text-2xl sm:text-3xl text-neutral-100 tracking-tight font-medium mb-6">The only brokerage dedicated exclusively to RPYCC.</h2>
<div className="space-y-4 text-base leading-relaxed text-neutral-400">
<p className="">Royal Palm Properties is the only real estate firm dedicated exclusively to Royal Palm Yacht &amp; Country Club. Not South Florida luxury broadly. Not Palm Beach County. This one community where I have lived, raised my family, and done business for over 40 years.</p>
<p className=""></p>
<p className="">In 2024, I closed $623 million in sales here. I was involved in more than 60% of all transactions in this community. I have represented both buyer and seller in the same transaction repeatedly because when both sides trust the same broker, deals get done faster and cleaner.</p>
<p className="">My team is small and intentional. Managing Partner Kelly Brooks brings over two decades of South Florida luxury experience. Our full-time staff are selected for depth of knowledge, not speed of volume. Every client I take on gets direct access to me not an assistant, not a showing agent, not a name on a team.</p>
<p className="text-neutral-200 font-medium pt-2">
              This isn't a pitch. It's a description of how I work. If it sounds like what you need, call me.
            </p>
</div>
</div>

<div className="mt-16 pt-16 border-t border-white/10">
<h2 className="text-xl sm:text-2xl text-neutral-100 tracking-tight font-medium mb-8">Client Experiences</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 flex flex-col justify-between">
<div className="">
<div className="flex gap-1 text-blue-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-neutral-300 italic">
                  "He is a master at what he does. His sales volume speaks for itself. In addition, he is a thoughtful and kind gentleman."
                </p>
</div>
<div className="mt-6 pt-4 border-t border-white/10">
<p className="text-xs font-medium text-neutral-400">Verified Zillow review</p>
</div>
</article>
<article className="flex flex-col bg-neutral-900/50 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="flex gap-1 text-blue-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-neutral-300 italic">
                  "David's focus is 100% on RPYCC. His integrity, market knowledge, and personal investment in this community are unlike anything else in South Florida real estate."
                </p>
</div>
<div className="mt-6 pt-4 border-t border-white/10">
<p className="text-xs font-medium text-neutral-400">Royal Palm Properties client</p>
</div>
</article>
<article className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 flex flex-col justify-between">
<div className="">
<div className="flex gap-1 text-blue-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm italic text-neutral-300">"We trusted David with the most significant transaction of our lives. He made it feel effortless and the result exceeded everything we expected."</p>
</div>
<div className="mt-6 pt-4 border-t border-white/10">
<p className="text-xs font-medium text-neutral-400">Royal Palm Yacht &amp; Country Club seller</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="process">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-8 pr-6 pb-10 pl-6">

<div className="max-w-3xl mx-auto">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300 font-medium tracking-wide uppercase">How We Work</span>
</div>
<h2 className="text-2xl sm:text-3xl text-neutral-100 tracking-tight font-medium mb-10">The Process</h2>
<ol className="space-y-8">
<li className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-neutral-950 font-semibold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]">1</div>
<div className="pt-2">
<p className="text-base text-neutral-300 leading-relaxed">You call or email. David picks up. No intake form, no assistant, no callback queue.</p>
</div>
</li>
<li className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 bg-neutral-900 text-neutral-100 font-medium flex items-center justify-center text-sm">2</div>
<div className="pt-2">
<p className="text-base text-neutral-300 leading-relaxed">An honest conversation about what you need, what's available, and whether the timing is right. No pressure in either direction.</p>
</div>
</li>
<li className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 bg-neutral-900 text-neutral-100 font-medium flex items-center justify-center text-sm">3</div>
<div className="pt-2">
<p className="leading-relaxed text-base text-neutral-300">Access to the full inventory pipeline active listings, pre-market properties, and off-market opportunities that never reach the public.</p>
</div>
</li>
<li className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 bg-neutral-900 text-neutral-100 font-medium flex items-center justify-center text-sm">4</div>
<div className="pt-2">
<p className="text-base text-neutral-300 leading-relaxed">David represents you through every stage: offer, negotiation, inspection, title, and close. End-to-end, in-house.</p>
</div>
</li>
<li className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 bg-neutral-900 text-neutral-100 font-medium flex items-center justify-center text-sm">5</div>
<div className="pt-2">
<p className="text-base text-neutral-300 leading-relaxed">You close. On time. With the certainty that the broker who handled your transaction knows this neighborhood better than anyone alive.</p>
</div>
</li>
</ol>
</div>

<div className="mt-20 pt-16 border-t border-white/10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="">
<h3 className="text-lg font-medium tracking-tight text-white border-b border-white/10 pb-4 mb-4">For buyers</h3>
<ul className="space-y-4 text-sm text-neutral-400 leading-relaxed">
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Pre-market and off-market inventory access.</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Honest price guidance from 40 years of transaction data.</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Personal representation from offer through close.</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Community orientation — introductions to the clubs, the neighbors, the things you'd only know if you lived here.</li>
</ul>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight text-white border-b border-white/10 pb-4 mb-4">For sellers</h3>
<ul className="space-y-4 text-sm text-neutral-400 leading-relaxed">
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Full property valuation from real closed data, not Zillow estimates.</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Exposure to an active buyer pipeline built over four decades.</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Professional marketing, photography, and listing strategy.</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Negotiation by the broker who has set and broken the Boca Raton price record.</li>
</ul>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight text-white border-b border-white/10 pb-4 mb-4">For both</h3>
<ul className="space-y-4 text-sm text-neutral-400 leading-relaxed">
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Direct access to David Roberts.</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> One broker, one point of contact, full accountability.</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-1 text-white/50" icon="solar:check-circle-linear"></iconify-icon> The only firm in Palm Beach County that works exclusively inside Royal Palm Yacht &amp; Country Club.</li>
</ul>
</div>
</div>
</div>

<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-8 py-4 transition-colors" href="#calendly">
<span>Schedule a call with David</span>
<iconify-icon height="18" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="about">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6">
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-2 space-y-8">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300 font-medium tracking-wide uppercase">The Broker</span>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10">

<img alt="David Roberts" className="w-full h-[320px] sm:h-[400px] object-cover object-top opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=1600&amp;h=900"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white font-medium text-lg tracking-tight">David W. Roberts</div>
</div>
<div className="max-w-2xl space-y-4 text-base leading-relaxed text-neutral-400">
<p className="">David W. Roberts has been the broker and owner of Royal Palm Properties since 1985. He has lived in Royal Palm Yacht &amp; Country Club for over 40 years the same community where he has closed more than $6 billion in real estate, handled more than 60% of all transactions, and set or broken the Boca Raton price record multiple times.</p>
<p>
                He is a member of the Royal Palm Yacht &amp; Country Club, the Boca Raton Club, and the Ocean Reef Club. He served on the St. Andrews School Board of Trustees and is involved in multiple local charitable organizations.
              </p>
<p>
                In 2024, he was ranked #8 in the nation by RealTrends Verified. He has been recognized as Palm Beach County's top residential broker by The Real Deal and a Power Broker by the South Florida Business Journal.
              </p>
<p className="text-neutral-100 font-medium italic pt-2">
                He answers his own phone.
              </p>
</div>
</div>

<div className="lg:col-span-1 pt-8 lg:pt-16">
<ul className="space-y-8 sm:space-y-10">
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 tracking-tighter font-medium">$623M</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2">2024 sales volume</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 tracking-tighter font-medium">$6B+</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2">Career sales in RPYCC</p>
</li>
<li className="">
<div className="text-4xl sm:text-5xl text-neutral-100 tracking-tighter font-medium">60%</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2">Share of all RPYCC transactions</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 tracking-tighter font-medium">40+</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2">Years as a community resident</p>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-16 px-4" id="faq">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-8 pr-6 pb-12 pl-6">

<div className="max-w-3xl mx-auto">
<div className="flex items-center gap-3 mb-6 justify-center">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300 font-medium tracking-wide uppercase">Answers</span>
<span className="h-px w-8 bg-white/20"></span>
</div>
<h2 className="text-2xl sm:text-3xl text-neutral-100 tracking-tight font-medium mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-3">
<details className="group border border-white/10 bg-neutral-900/40 rounded-2xl overflow-hidden hover:bg-neutral-900/60 transition-colors">
<summary className="cursor-pointer flex sm:text-base select-none text-sm font-medium text-neutral-200 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                Do I have to be a club member to live in Royal Palm Yacht &amp; Country Club?
                <iconify-icon className="transition-transform group-open:rotate-180 text-neutral-500" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(115, 115, 115)'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                No. Club membership is completely independent of homeownership. You can live in the community without joining either club, and you can join the clubs without purchasing a home here. If membership interests you, I'm happy to make the appropriate introductions.
              </div>
</details>
<details className="group border border-white/10 bg-neutral-900/40 rounded-2xl overflow-hidden hover:bg-neutral-900/60 transition-colors">
<summary className="cursor-pointer p-6 font-medium text-neutral-200 flex justify-between items-center text-sm sm:text-base select-none">
                I see other agents listing Royal Palm properties. Why does it matter who I work with?
                <iconify-icon className="transition-transform group-open:rotate-180 text-neutral-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                Any licensed agent can list a property here. What they cannot replicate is 40 years of seller relationships, an off-market pipeline, and transaction-level data from over $6 billion in closed deals inside this one community. The agent you choose determines what inventory you see, what price you achieve, and whether your deal closes cleanly. In this market, that difference is worth millions.
              </div>
</details>
<details className="group border border-white/10 bg-neutral-900/40 rounded-2xl overflow-hidden hover:bg-neutral-900/60 transition-colors">
<summary className="cursor-pointer p-6 font-medium text-neutral-200 flex justify-between items-center text-sm sm:text-base select-none">
                What price range do you work in?
                <iconify-icon className="transition-transform group-open:rotate-180 text-neutral-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                All price points within Royal Palm Yacht &amp; Country Club — from the entry level to the record-setting transactions above $30 million. I have closed deals at every tier and have specific knowledge of value at each one.
              </div>
</details>
<details className="group border border-white/10 bg-neutral-900/40 rounded-2xl overflow-hidden hover:bg-neutral-900/60 transition-colors">
<summary className="cursor-pointer p-6 font-medium text-neutral-200 flex justify-between items-center text-sm sm:text-base select-none">
                Will I actually work with David, or be handed to a team member?
                <iconify-icon className="transition-transform group-open:rotate-180 text-neutral-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                David is personally involved in every transaction. Our team is small by design. You will have direct access to him throughout the process.
              </div>
</details>
<details className="group border border-white/10 bg-neutral-900/40 rounded-2xl overflow-hidden hover:bg-neutral-900/60 transition-colors">
<summary className="cursor-pointer flex sm:text-base select-none text-sm font-medium text-neutral-200 pt-6 pr-6 pb-6 pl-6 items-center justify-between">What if I'm not ready to transact  just researching?</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                Call anyway. I will give you an honest read on the market, what's available, and whether the timing makes sense for your situation. There is no obligation and no pitch. This is a long-relationship business and I treat every conversation accordingly.
              </div>
</details>
<details className="group border border-white/10 bg-neutral-900/40 rounded-2xl overflow-hidden hover:bg-neutral-900/60 transition-colors">
<summary className="cursor-pointer p-6 font-medium text-neutral-200 flex justify-between items-center text-sm sm:text-base select-none">
                How is Royal Palm Properties different from a national brokerage?
                <iconify-icon className="transition-transform group-open:rotate-180 text-neutral-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                National brokerages serve hundreds of markets. We serve one — exclusively. That focus means every piece of knowledge, every relationship, and every hour of work we put in is concentrated inside Royal Palm Yacht &amp; Country Club. You cannot get that depth from a generalist firm.
              </div>
</details>
</div>
</div>

<div className="mt-20 max-w-4xl mx-auto pt-16 border-t border-white/10 text-center" id="calendly">
<h2 className="text-2xl sm:text-3xl text-neutral-100 tracking-tight font-medium mb-4">Ready to talk?</h2>
<p className="text-base text-neutral-400 mb-10">Choose a time that works for you. David will be on the call.</p>
<div className="w-full h-[650px] bg-[#1a1a1a] rounded-3xl border border-white/10 flex items-center justify-center text-neutral-500 text-sm shadow-2xl relative overflow-hidden">

<div className="flex flex-col items-center gap-4">
<iconify-icon className="text-neutral-600" height="32" icon="solar:calendar-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span>[ Calendly Embed Placeholder ]</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl sm:px-6 mt-10 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-8 pl-6">
<div className="grid lg:grid-cols-4 gap-10">

<div className="lg:col-span-2 space-y-4 pr-8">
<div className="flex items-center gap-3">
<svg className="text-white" fill="none" height="24" viewbox="0 0 92 36" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
<span className="font-semibold tracking-tight text-lg text-white">Royal Palm Properties</span>
</div>
<p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              The only real estate firm dedicated exclusively to Royal Palm Yacht &amp; Country Club. Over 40 years of market leadership and $6B+ in closed sales.
            </p>
<div className="pt-2">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-neutral-200 rounded-full px-4 py-2 transition-colors" href="#calendly">
<span>Talk to David</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase">Navigation</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#process">The Process</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#about">About David W. Roberts</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#calendly">Schedule Call</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase">Contact</h4>
<ul className="mt-4 space-y-3">
<li className="text-sm text-neutral-400">Royal Palm Yacht &amp; Country Club</li>
<li className="text-sm text-neutral-400">Boca Raton, FL</li>
</ul>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-500">
<a className="hover:text-neutral-300 transition-colors" href="#">Fair Housing Statement</a>
<span className="text-neutral-700 hidden sm:inline">|</span>
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a>
<span className="text-neutral-700 hidden sm:inline">|</span>
<a className="hover:text-neutral-300 transition-colors" href="#">Terms of Use</a>
</nav>
<div className="text-[11px] text-neutral-500">© 2024 Royal Palm Properties. All rights reserved.</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
