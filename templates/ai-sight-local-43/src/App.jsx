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



    document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
        const target = document.getElementById('rotating-profession');
        if (target) {
            const items = ["plumber", "HVAC", "electrician", "restaurant", "auto repair", "contractor", "bakery", "cafe"];
            let i = 0;
            const rotate = () => {
                target.textContent = items[i];
                i = (i + 1) % items.length;
            };
            rotate();
            setInterval(rotate, 2500);
        }
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
    });
    
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
      

<header className="fixed top-0 w-full bg-[#0A1828]/95 backdrop-blur-sm z-50 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35] flex items-center justify-center">
<svg className="lucide lucide-eye w-5 h-5 text-[#0A1828]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white">AI Sight</span>
</div>
<a className="hidden md:block text-white hover:text-[#FF6B35] transition-colors font-medium tracking-tight" href="tel:+18885551234">
                (888) 555-1234
            </a>
<a className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-6 py-2.5 rounded-lg font-medium text-sm tracking-tight transition-all hover:shadow-lg hover:shadow-[#FF6B35]/20" href="#cta">
                Get Started
            </a>
</div>
</header>

<section className="gradient-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
<div className="max-w-5xl mx-auto text-center">
<div className="mb-8">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35] flex items-center justify-center">
<svg className="lucide lucide-eye w-6 h-6 text-[#0A1828]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-3xl font-bold tracking-tight text-white">AI Sight</span>
</div>
</div>
<div className="mb-6 flex flex-col items-center">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight space-y-2">
<span className="block">When customers ask ChatGPT</span>
<span className="block text-[#E5E5E5] underline decoration-white/20 underline-offset-4">
                        "Best <span className="text-[#FF6B35] profession-text inline-block" id="rotating-profession">plumber</span> Near me,"
                    </span>
<span className="block">does it say your name?</span>
</h1>
</div>
<p className="text-lg sm:text-xl text-[#E5E5E5] mb-10 max-w-3xl mx-auto leading-relaxed">
                Your customers stopped Googling. They're asking ChatGPT now.<br className="hidden sm:block"/>
                If it doesn't know you, you're invisible.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<a className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30 hover:scale-105" href="#cta">
                    Show Me What ChatGPT Says About My Business
                </a>
<a className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:bg-white/5" href="#how-it-works">
                    See How It Works
                </a>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-5 h-5 text-[#F4B740]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-[#F4B740] font-medium tracking-tight">100+ Local Businesses</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-trending-up w-5 h-5 text-[#F4B740]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-[#F4B740] font-medium tracking-tight">290% Avg ROI</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-dollar-sign w-5 h-5 text-[#F4B740]" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="text-[#F4B740] font-medium tracking-tight">$2.3M+ Revenue Generated</span>
</div>
</div>
</div>
</section>

<section className="bg-[#132035] py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Your customers have stopped Googling</h2>
<p className="text-[#E5E5E5] text-lg sm:text-xl mt-3">They're asking ChatGPT, Claude, and Perplexity for recommendations.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F4B740]/15 flex items-center justify-center">
<svg className="lucide lucide-bot w-5 h-5 text-[#F4B740]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div>
<p className="text-white font-semibold">People now ask AI directly</p>
<p className="text-[#E5E5E5] text-sm mt-1">Real conversations replace search.</p>
</div>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F4B740]/15 flex items-center justify-center">
<svg className="lucide lucide-list-ordered w-5 h-5 text-[#F4B740]" data-lucide="list-ordered" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 5h10"></path><path d="M11 12h10"></path><path d="M11 19h10"></path><path d="M4 4h1v5"></path><path d="M4 9h2"></path><path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"></path></svg>
</div>
<div>
<p className="text-white font-semibold">AI returns just 3–5 names</p>
<p className="text-[#E5E5E5] text-sm mt-1">Not pages of links—just picks.</p>
</div>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F4B740]/15 flex items-center justify-center">
<svg className="lucide lucide-help-circle w-5 h-5 text-[#F4B740]" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div>
<p className="text-white font-semibold">Are you one of them?</p>
<p className="text-[#E5E5E5] text-sm mt-1">If not, you're invisible.</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-6 py-3 rounded-lg font-semibold text-sm tracking-tight transition-all" href="#cta">
<svg className="lucide lucide-search-check w-5 h-5 text-white" data-lucide="search-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                    See What AI Says About You
                </a>
</div>
</div>
</section>

<section className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    Get Your Name in ChatGPT's Mouth
                </h2>
<p className="text-xl text-[#E5E5E5] max-w-2xl mx-auto">
                    We make ChatGPT recommend YOUR business when people search.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#132035] rounded-xl p-8 border-t-4 border-[#FF6B35]">
<div className="w-14 h-14 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-6">
<svg className="lucide lucide-map-pin w-7 h-7 text-[#F4B740]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Own Your Territory</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                        ChatGPT says your name for "best HVAC in [your city]"
                    </p>
</div>
<div className="bg-[#132035] rounded-xl p-8 border-t-4 border-[#FF6B35]">
<div className="w-14 h-14 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-6">
<svg className="lucide lucide-phone-call w-7 h-7 text-[#F4B740]" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Grab Emergency Calls</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                        Show up for "emergency plumber near me open now"
                    </p>
</div>
<div className="bg-[#132035] rounded-xl p-8 border-t-4 border-[#FF6B35]">
<div className="w-14 h-14 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-6">
<svg className="lucide lucide-star w-7 h-7 text-[#F4B740]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Your Reviews Work Harder</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                        ChatGPT quotes your 5-star reviews as proof
                    </p>
</div>
<div className="bg-[#132035] rounded-xl p-8 border-t-4 border-[#FF6B35]">
<div className="w-14 h-14 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-6">
<svg className="lucide lucide-shield w-7 h-7 text-[#F4B740]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Protect Your Turf</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                        Stop losing to competitors who got there first
                    </p>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 bg-[#132035] pt-20 pr-4 pb-20 pl-4" id="how-it-works">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    Dead Simple. We Do Everything.
                </h2>
<p className="text-xl text-[#FF6B35] font-semibold tracking-tight">4 Steps, 60 Days</p>
</div>
<div className="relative">
<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FF6B35] hidden md:block"></div>
<div className="space-y-12">
<div className="flex gap-6 relative">
<div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 z-10">
                            1
                        </div>
<div className="flex-1 pt-2">
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">We Check Where You Stand</h3>
<p className="leading-relaxed text-lg text-[#E5E5E5]">Search ChatGPT and 15 other AI tools. Show you what customers see. (Spoiler: usually your competitor!)</p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 z-10">
                            2
                        </div>
<div className="flex-1 pt-2">
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">We Build Your Foundation</h3>
<p className="leading-relaxed text-lg text-[#E5E5E5]">Set up your presence where AI looks for answers.</p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 z-10">
                            3
                        </div>
<div className="flex-1 pt-2">
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">We Make You #1</h3>
<p className="leading-relaxed text-lg text-[#E5E5E5]">Get your business recommended for your services.</p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 z-10">
                            4
                        </div>
<div className="flex-1 pt-2">
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">We Keep You There</h3>
<p className="leading-relaxed text-lg text-[#E5E5E5]">Monthly reports showing exactly where you show up. </p>
</div>
</div>
</div>
</div>
<div className="mt-16 bg-[#0A1828] rounded-2xl p-8 flex items-center justify-center gap-4 border border-[#FF6B35]/30">
<div className="w-20 h-20 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
<svg className="lucide lucide-play w-[40px] h-[40px]" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(255, 107, 53)', width: '40px', height: '40px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="">
<p className="text-white font-semibold text-lg mb-1">Watch How It Works</p>
<p className="text-[#E5E5E5]">1:02 - Real client walkthrough</p>
</div>
</div>
<p className="text-center text-[#E5E5E5] text-lg mt-8">
                Zero tech knowledge needed. We handle it all.
            </p>
</div>
</section>

<section className="gradient-bg sm:px-6 lg:px-8 pt-20 pr-4 pb-20 pl-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Real Businesses, Real Results
            </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#132035] rounded-xl overflow-hidden border-t-4 border-[#F4B740]">
<div className="p-8">
<div className="text-6xl font-bold text-[#FF6B35] mb-2 tracking-tight">428%</div>
<p className="text-xl text-white font-semibold mb-6">more customer calls in 90 days</p>
<div className="flex gap-3 mb-6">
<svg className="lucide lucide-quote w-6 h-6 text-[#F4B740] flex-shrink-0" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-[#E5E5E5] italic leading-relaxed">
                                "ChatGPT recommends us now. Booked 3 weeks out. Had to hire 2 more guys."
                            </p>
</div>
<p className="text-[#F4B740] font-medium">Anderson's HVAC - Phoenix</p>
</div>
<div className="bg-[#0A1828] p-6">
<div className="h-32 flex items-end gap-2">
<div className="flex-1 bg-[#FF6B35]/30 rounded-t" style={{height: '30%'}}></div>
<div className="flex-1 bg-[#FF6B35] rounded-t" style={{height: '100%'}}></div>
</div>
<div className="flex justify-between mt-2 text-xs text-[#E5E5E5]">
<span>Before</span>
<span>After</span>
</div>
</div>
</div>
<div className="bg-[#132035] rounded-xl overflow-hidden border-t-4 border-[#F4B740]">
<div className="p-8">
<div className="text-6xl font-bold text-[#FF6B35] mb-2 tracking-tight">$47K</div>
<p className="text-xl text-white font-semibold mb-6">in new jobs (first 60 days)</p>
<div className="flex gap-3 mb-6">
<svg className="lucide lucide-quote w-6 h-6 text-[#F4B740] flex-shrink-0" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-[#E5E5E5] italic leading-relaxed">
                                "People literally call saying 'ChatGPT sent me.' This is wild."
                            </p>
</div>
<p className="text-[#F4B740] font-medium">Riverside Plumbing - Austin</p>
</div>
<div className="bg-[#0A1828] p-6">
<svg className="w-full h-32" viewbox="0 0 200 80">
<polyline fill="none" points="0,60 50,55 100,40 150,25 200,10" stroke="#FF6B35" strokeWidth="3"></polyline>
<polyline fill="url(#gradient)" opacity="0.2" points="0,60 50,55 100,40 150,25 200,10"></polyline>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#FF6B35', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#FF6B35', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
<div className="bg-[#132035] rounded-xl overflow-hidden border-t-4 border-[#F4B740]">
<div className="p-8">
<div className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-full text-lg font-bold mb-4">#1 Pick</div>
<p className="text-xl text-white font-semibold mb-6">ChatGPT's top recommendation for date night</p>
<div className="flex gap-3 mb-6">
<svg className="lucide lucide-quote w-6 h-6 text-[#F4B740] flex-shrink-0" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-[#E5E5E5] italic leading-relaxed">
                                "Went from empty tables to fully booked weekends."
                            </p>
</div>
<p className="text-[#F4B740] font-medium">Bella's Bistro - Denver</p>
</div>
<div className="bg-[#0A1828] p-6">
<div className="h-32 flex items-end gap-1">
<div className="flex-1 bg-[#FF6B35]/30 rounded-t" style={{height: '40%'}}></div>
<div className="flex-1 bg-[#FF6B35]/50 rounded-t" style={{height: '60%'}}></div>
<div className="flex-1 bg-[#FF6B35]/70 rounded-t" style={{height: '80%'}}></div>
<div className="flex-1 bg-[#FF6B35] rounded-t" style={{height: '100%'}}></div>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-4 mt-12">
<div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-[#132035] overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35]"></div>
</div>
<div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-[#132035] overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-[#F4B740]"></div>
</div>
<div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-[#132035] overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35]"></div>
</div>
<div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-[#132035] overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-[#F4B740]"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#132035] py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Why Switch to AI Sight?
            </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-6">
<div className="text-center md:text-left mb-8">
<span className="text-[#E5E5E5] text-2xl font-semibold">Old Way</span>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<svg className="lucide lucide-x w-6 h-6 text-[#E5E5E5] flex-shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<p className="text-[#E5E5E5] text-lg">Google Ads: Pay every click</p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<svg className="lucide lucide-x w-6 h-6 text-[#E5E5E5] flex-shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<p className="text-[#E5E5E5] text-lg">SEO: 6-12 months, dying</p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<svg className="lucide lucide-x w-6 h-6 text-[#E5E5E5] flex-shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<p className="text-[#E5E5E5] text-lg">Facebook Ads: Cold leads</p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="text-center md:text-left mb-8">
<span className="text-[#FF6B35] text-2xl font-semibold">AI Sight</span>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border-2 border-[#FF6B35]">
<div className="flex items-start gap-4">
<svg className="lucide lucide-check w-6 h-6 text-[#FF6B35] flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-white text-lg font-medium">ChatGPT: They call you direct</p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border-2 border-[#FF6B35]">
<div className="flex items-start gap-4">
<svg className="lucide lucide-check w-6 h-6 text-[#FF6B35] flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-white text-lg font-medium">AI Sight: 60 days, future-proof</p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border-2 border-[#FF6B35]">
<div className="flex items-start gap-4">
<svg className="lucide lucide-check w-6 h-6 text-[#FF6B35] flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-white text-lg font-medium">Ready-to-buy customers</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Built For
            </h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-flame w-10 h-10 text-[#F4B740]" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<p className="text-white font-semibold text-lg">HVAC &amp; Electrical</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-droplet w-10 h-10 text-[#F4B740]" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<p className="text-white font-semibold text-lg">Plumbers</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-utensils w-10 h-10 text-[#F4B740]" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<p className="text-white font-semibold text-lg">Restaurants &amp; Cafes</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-cookie w-10 h-10 text-[#F4B740]" data-lucide="cookie" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
</div>
<p className="text-white font-semibold text-lg">Bakeries &amp; Food</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-wrench w-10 h-10 text-[#F4B740]" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<p className="text-white font-semibold text-lg">Auto Repair</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-hammer w-10 h-10 text-[#F4B740]" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<p className="text-white font-semibold text-lg">Contractors</p>
</div>
</div>
<p className="text-[#E5E5E5] text-xl text-center mt-12 max-w-2xl mx-auto">
                Already doing $500K+? We make sure ChatGPT knows who you are.
            </p>
</div>
</section>

<section className="sm:px-6 lg:px-8 bg-[#132035] pt-20 pr-4 pb-20 pl-4">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<div className="inline-block bg-[#F4B740] text-[#0A1828] px-6 py-2 rounded-full font-bold text-sm tracking-tight mb-6">
                    AI SIGHT PLANS
                </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    Straightforward Pricing
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<div className="bg-[#0A1828] rounded-2xl p-8 border-t-4 border-[#FF6B35]">
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Single Location</h3>
<div className="mb-6">
<span className="text-5xl font-bold text-white tracking-tight">$249</span>
<span className="text-[#E5E5E5] text-xl">/mo</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[#E5E5E5] text-base">10+ AI platforms</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[#E5E5E5] text-base">Monthly reports</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[#E5E5E5] text-base">All the setup</span>
</div>
</div>
<a className="block w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-center px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30" href="#cta">
                        Get Started
                    </a>
</div>
<div className="bg-[#0A1828] rounded-2xl p-8 border-4 border-[#FF6B35] relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-6 py-2 rounded-full font-bold text-sm tracking-tight whitespace-nowrap">
                        MOST POPULAR
                    </div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Multi-Location</h3>
<div className="mb-6">
<span className="text-5xl font-bold text-white tracking-tight">$149</span>
<span className="text-xl text-[#E5E5E5]">/mo/location</span>
</div>
<div className="mb-8 space-y-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[#E5E5E5] text-base">20+ AI platforms</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[#E5E5E5] text-base">Weekly updates</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[#E5E5E5] text-base">Dedicated person on your account</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[#E5E5E5] text-base">Competitor defense</span>
</div>
</div>
<a className="block w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-center px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30" href="#cta">
                        Book a Call
                    </a>
</div>
</div>
<div className="mt-12 bg-[#0A1828] rounded-xl p-6 max-w-4xl mx-auto border-2 border-[#F4B740]">
<div className="flex items-start gap-4">
<svg className="lucide lucide-shield-check w-8 h-8 text-[#F4B740] flex-shrink-0" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<p className="text-white font-semibold text-lg mb-2">60-Day Guarantee</p>
<p className="text-[#E5E5E5]">Show up in 5+ AI platforms or we refund your first month and work free.</p>
</div>
</div>
</div>
</div>
</section>

<section className="gradient-bg sm:px-6 lg:px-8 pt-20 pr-4 pb-20 pl-4">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Common Questions
            </h2>
<div className="space-y-4">
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-lg font-semibold text-white pr-4">I rank on Google. Why do I need this?</span>
<svg className="lucide lucide-chevron-down flex-shrink-0 group-open:rotate-180 transition-transform w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(255, 107, 53)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">Google is yesterday's game. Your customers are switching to ChatGPT because it's faster and easier. If ChatGPT doesn't know you, your Google ranking means nothing.</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">How fast will I see results?</span>
<svg className="lucide lucide-chevron-down w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">Most clients show up in 5+ AI platforms within 60 days. You'll get weekly updates so you know exactly what's happening.</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">Do I need to know tech stuff?</span>
<svg className="lucide lucide-chevron-down w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">Zero. We handle everything. You just answer the phone when new customers call.</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">What if I don't have many reviews?</span>
<svg className="lucide lucide-chevron-down w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">We work with what you've got and help you build more. AI platforms look at more than just reviews.</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">How do I know it's working?</span>
<svg className="lucide lucide-chevron-down w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">You get monthly reports showing exactly where you show up and what ChatGPT says about you. Plus, you'll start getting calls from people who say "ChatGPT sent me."</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">Can I cancel anytime?</span>
<svg className="lucide lucide-chevron-down w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">Yes. Month-to-month. No contracts. But once you see ChatGPT recommending you, you won't want to stop.</p>
</div>
</details>
</div>
</div>
</section>

<section className="gradient-bg pattern-bg py-20 px-4 sm:px-6 lg:px-8" id="cta">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    See What ChatGPT Says<br/>About You Right Now
                </h2>
<p className="text-xl text-[#E5E5E5] max-w-2xl mx-auto">
                    We'll search 15 AI platforms and show you exactly what your customers see.<br/>
                    Most owners are shocked.
                </p>
</div>
<div className="bg-[#132035] rounded-2xl p-8 sm:p-12 border-2 border-[#FF6B35]">
<form className="space-y-6">
<div>
<label className="block text-white font-medium mb-2 text-sm">Business Name</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="Your Business Name" required="" type="text"/>
</div>
<div>
<label className="block text-white font-medium mb-2 text-sm">What You Do</label>
<select className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B35] transition-colors" required="">
<option value="">Select Your Industry</option>
<option value="hvac">HVAC</option>
<option value="plumbing">Plumbing</option>
<option value="electrical">Electrical</option>
<option value="restaurant">Restaurant</option>
<option value="cafe">Cafe</option>
<option value="bakery">Bakery</option>
<option value="auto">Auto Repair</option>
<option value="contractor">Contractor</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label className="block text-white font-medium mb-2 text-sm">City</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="e.g., Phoenix" required="" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-white font-medium mb-2 text-sm">Your Name</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="block text-white font-medium mb-2 text-sm">Email</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="you@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-white font-medium mb-2 text-sm">Phone</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="(555) 555-5555" required="" type="tel"/>
</div>
<button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30" type="submit">
                        Run My Free AI Visibility Report
                    </button>
</form>
</div>
</div>
</section>
<footer className="bg-[#0A1828] border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35] flex items-center justify-center">
<svg className="lucide lucide-eye w-5 h-5 text-[#0A1828]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-white font-semibold tracking-tight">AI Sight</span>
</div>
<p className="text-[#E5E5E5] text-sm">© <span id="year">2025</span> AI Sight. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
