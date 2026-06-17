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



        document.getElementById('yr').textContent = new Date().getFullYear();
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
      

<div className="fixed md:sticky bottom-0 md:top-0 left-0 right-0 bg-[#f2f1ec]/90 backdrop-blur-xl border-t md:border-t-0 md:border-b border-[#e7e5df] z-50">
<div className="max-w-6xl mx-auto px-5 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
<span className="inline-flex items-center gap-2 bg-[#e7e5df] px-4 py-2 rounded-full text-[#3b332d] font-normal text-sm md:text-base">
                    Creator Mastery AI
                </span>
<span className="text-[#6b635e] text-sm text-center md:text-left">Creator business management, funnels, automations, and CRM included</span>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-base transition-transform hover:-translate-y-0.5 bg-[#1c1917] text-[#f2f1ec] w-full md:w-auto" href="#apply">
                Book A Strategy Call
            </a>
</div>
</div>

<section className="py-16 md:py-24 border-b border-[#e7e5df] relative overflow-hidden">
<div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-16 items-center">
<div className="relative z-10 flex flex-col items-start text-left md:items-center md:text-center md:col-span-2 lg:col-span-1 lg:items-start lg:text-left">
<span className="inline-flex items-center gap-2 bg-[#1c1917] px-5 py-2.5 rounded-full text-[#f2f1ec] font-medium text-sm md:text-base mb-8">
                    For content creators who want more than views
                </span>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6 text-[#3b332d]" style={{fontFamily: '\'Caveat\', cursive'}}>
                    How to Be a Self-Made Content Creator
                </h1>
<p className="text-lg md:text-xl text-[#6b635e] leading-relaxed mb-8 max-w-2xl md:mx-auto lg:mx-0">
                    Build an audience, monetize your content, and create more time, income, and freedom with the hands-on support of a creator business manager, plus the strategy, systems, funnels, automations, and creator software to grow like a real creator business.
                </p>
<div className="flex flex-wrap gap-3 mb-10 justify-start md:justify-center lg:justify-start">
<span className="inline-flex items-center gap-2 bg-white border border-[#e7e5df] text-[#3b332d] px-4 py-2.5 rounded-full font-normal text-sm md:text-base">
                        Human creator business manager
                    </span>
<span className="inline-flex items-center gap-2 bg-white border border-[#e7e5df] text-[#3b332d] px-4 py-2.5 rounded-full font-normal text-sm md:text-base">
                        Funnels + automations built for you
                    </span>
<span className="inline-flex items-center gap-2 bg-white border border-[#e7e5df] text-[#3b332d] px-4 py-2.5 rounded-full font-normal text-sm md:text-base">
                        Creator CRM included
                    </span>
</div>
<div className="flex flex-wrap gap-4 mb-10 justify-start md:justify-center lg:justify-start w-full md:w-auto">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-transform hover:-translate-y-0.5 bg-[#1c1917] text-[#f2f1ec] text-base md:text-lg w-full sm:w-auto" href="#apply">
                        Book A Strategy Call
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full font-normal transition-colors hover:bg-[#e7e5df] bg-transparent border border-[#1c1917] text-[#1c1917] text-base md:text-lg w-full sm:w-auto" href="#proof">
                        See Proof
                    </a>
</div>
<div className="flex flex-wrap gap-3 justify-start md:justify-center lg:justify-start">
<div className="bg-white border border-[#e7e5df] px-4 py-2.5 rounded-xl font-normal text-[#6b635e] text-sm md:text-base">104K+ faceless YouTube subscribers</div>
<div className="bg-white border border-[#e7e5df] px-4 py-2.5 rounded-xl font-normal text-[#6b635e] text-sm md:text-base">11K+ Instagram followers</div>
<div className="bg-white border border-[#e7e5df] px-4 py-2.5 rounded-xl font-normal text-[#6b635e] text-sm md:text-base">Built for creators &amp; info products</div>
</div>
</div>

<div className="w-full h-full min-h-[24rem] py-12 rounded-[2rem] bg-white border border-[#e7e5df] flex items-center justify-center px-8 lg:px-12 relative overflow-hidden shadow-sm md:col-span-2 lg:col-span-1">
<div className="relative z-10 max-w-sm w-full">
<strong className="block text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-8 text-[#3b332d]">
                        You were put on this earth for more than a job that drains your time.
                    </strong>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#3b332d] shrink-0"></div>
<span>Know exactly what to post for your niche</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#3b332d] shrink-0"></div>
<span>Turn content into leads with DM automations</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#3b332d] shrink-0"></div>
<span>Launch digital products without tech headache</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#3b332d] shrink-0"></div>
<span>Get hands-on support behind the scenes</span>
</li>
</ul>
<p className="text-sm md:text-base text-[#6b635e] mt-8 pt-8 border-t border-[#e7e5df]">
                        There is a gap between the creator business you know is possible and the one you have actually built. We help close that gap.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]" id="proof">
<div className="max-w-6xl mx-auto px-5 text-center md:text-left">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-[#3b332d]">Proof this is not theory</h2>
<p className="text-lg md:text-xl text-[#6b635e] max-w-2xl mb-12 mx-auto md:mx-0">Before you trust anyone to help build the business side behind your content, you need proof they have actually done it.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 text-left">
<div className="bg-white border border-[#e7e5df] rounded-3xl p-8 transition-colors hover:bg-[#faf9f5]">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 text-[#3b332d]">10+ years</h3>
<p className="text-[#6b635e] text-base leading-relaxed">Content creation and social media marketing experience.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-3xl p-8 transition-colors hover:bg-[#faf9f5]">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 text-[#3b332d]">104K+ subs</h3>
<p className="text-[#6b635e] text-base leading-relaxed">Built on a faceless YouTube channel without needing to be on camera.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-3xl p-8 transition-colors hover:bg-[#faf9f5]">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 text-[#3b332d]">Quit the 9 to 5</h3>
<p className="text-[#6b635e] text-base leading-relaxed">After creator income became bigger than traditional job income.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-3xl p-8 transition-colors hover:bg-[#faf9f5]">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 text-[#3b332d]">$1,200+/yr value</h3>
<p className="text-[#6b635e] text-base leading-relaxed">Creator-focused CRM included instead of paying for generic stacks.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]">
<div className="max-w-6xl mx-auto px-5">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 text-center text-[#3b332d]">You want a life where:</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white border border-[#e7e5df] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm">
<div className="w-16 h-16 rounded-full bg-[#f2f1ec] flex items-center justify-center mb-6">
<i className="text-[#3b332d] w-7 h-7" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4 text-[#3b332d]">Your content actually grows an audience</h3>
<p className="text-[#6b635e] text-base md:text-lg leading-relaxed">Not random posts with random results. Clear content that pulls the right people in reliably.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm">
<div className="w-16 h-16 rounded-full bg-[#f2f1ec] flex items-center justify-center mb-6">
<i className="text-[#3b332d] w-7 h-7" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4 text-[#3b332d]">Your audience turns into leads &amp; buyers</h3>
<p className="text-[#6b635e] text-base md:text-lg leading-relaxed">So your content starts feeding a real business instead of just feeding the algorithm.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm">
<div className="w-16 h-16 rounded-full bg-[#f2f1ec] flex items-center justify-center mb-6">
<i className="text-[#3b332d] w-7 h-7" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4 text-[#3b332d]">Your business gives you more freedom</h3>
<p className="text-[#6b635e] text-base md:text-lg leading-relaxed">More control over your time, your income, and where you work from.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]">
<div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-[#3b332d]">But right now it still feels harder than it should.</h2>
<p className="text-lg md:text-xl text-[#6b635e] leading-relaxed mb-10">
                    You are posting, planning, editing, trying to figure out your niche, trying to build a lead magnet, trying to set up a funnel, trying to learn software, and still not seeing enough growth or sales.
                </p>
<div className="grid gap-5">
<div className="flex items-start gap-5 bg-[#e7e5df]/50 rounded-2xl p-6">
<i className="text-[#c25e5e] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<div>
<strong className="block font-medium mb-2 text-[#3b332d] text-lg">You know you should be more consistent</strong>
<span className="text-base text-[#6b635e] leading-relaxed">But content takes too long and life keeps interrupting your workflow.</span>
</div>
</div>
<div className="flex items-start gap-5 bg-[#e7e5df]/50 rounded-2xl p-6">
<i className="text-[#c25e5e] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<div>
<strong className="block font-medium mb-2 text-[#3b332d] text-lg">You know you need a better backend</strong>
<span className="text-base text-[#6b635e] leading-relaxed">But pages, automations, emails, and CRM setup feel like another job entirely.</span>
</div>
</div>
<div className="flex items-start gap-5 bg-[#e7e5df]/50 rounded-2xl p-6">
<i className="text-[#c25e5e] w-7 h-7 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<div>
<strong className="block font-medium mb-2 text-[#3b332d] text-lg">You know your audience could buy</strong>
<span className="text-base text-[#6b635e] leading-relaxed">But there is no simple, defined path from content to lead to sale.</span>
</div>
</div>
</div>
</div>
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-10 lg:p-14 shadow-sm relative">
<h3 className="text-sm md:text-base font-normal text-[#6b635e] uppercase tracking-widest mb-5">The Truth</h3>
<p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-10 text-[#3b332d]">Self-made creators are not born with some secret advantage.</p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4 text-[#6b635e] text-lg">
<i className="text-[#1c1917] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>They get the right strategy</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-lg">
<i className="text-[#1c1917] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>They build the right systems</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-lg">
<i className="text-[#1c1917] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>They get real support behind the scenes</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-lg">
<i className="text-[#1c1917] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>They stop trying to do everything alone</span>
</li>
</ul>
<div className="pt-8 border-t border-[#e7e5df]">
<p className="text-lg font-medium text-[#3b332d]">That is where we come in.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]">
<div className="max-w-6xl mx-auto px-5">
<div className="bg-[#f8f7f5] rounded-[2rem] p-10 md:p-16 mb-12 text-center max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-[#3b332d]">This is not just another coaching program.</h2>
<p className="text-lg md:text-xl text-[#6b635e] leading-relaxed">
                    You are not just joining calls and hoping you figure it out. You are getting the hands-on support of a creator business manager who helps you build the business side behind your content.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
<div className="bg-[#e7e5df]/50 rounded-[2rem] p-10">
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-8 text-[#3b332d] flex items-center gap-3">
<i className="text-[#c25e5e] w-6 h-6" data-lucide="x-square" strokeWidth="1.5"></i> What most programs do
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#a39d98] shrink-0"></div>
<span>Give you information</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#a39d98] shrink-0"></div>
<span>Give you software and leave you to learn it</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#a39d98] shrink-0"></div>
<span>Tell you to post more and stay consistent</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#a39d98] shrink-0"></div>
<span>Expect you to build the backend yourself</span>
</li>
</ul>
</div>
<div className="bg-white border border-[#1c1917] rounded-[2rem] p-10 relative shadow-sm">
<div className="absolute top-0 right-0 p-6">
<span className="inline-flex items-center gap-2 bg-[#1c1917] text-[#f2f1ec] px-4 py-1.5 rounded-full text-sm font-medium">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i> The Difference
                        </span>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-8 text-[#3b332d] flex items-center gap-3">
<i className="text-[#1c1917] w-6 h-6" data-lucide="check-square" strokeWidth="1.5"></i> What we do
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div>
<span>Help guide your niche and content strategy</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div>
<span>Help build the lead magnet and funnel path</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div>
<span>Set up your automations and follow-up systems</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div>
<span>Include the creator CRM so the machine can run</span>
</li>
<li className="flex items-start gap-4 text-[#6b635e] text-base md:text-lg">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div>
<span>Help manage the business side so you can create</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]">
<div className="max-w-6xl mx-auto px-5">
<div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-[#3b332d]">How we help you become self-made</h2>
<p className="text-lg md:text-xl text-[#6b635e]">Identity pulls them in. Mechanism closes the gap. Here is the mechanism.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#f2f1ec] flex items-center justify-center font-medium text-[#3b332d] text-lg mb-6">1</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-[#3b332d]">Clarify your niche</h3>
<p className="text-base text-[#6b635e] leading-relaxed">We help identify the right niche, audience angle, and monetization path for your content.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#f2f1ec] flex items-center justify-center font-medium text-[#3b332d] text-lg mb-6">2</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-[#3b332d]">Systemize content</h3>
<p className="text-base text-[#6b635e] leading-relaxed">We help build AI assisted workflows so content creation becomes faster and easier to sustain.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#f2f1ec] flex items-center justify-center font-medium text-[#3b332d] text-lg mb-6">3</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-[#3b332d]">Create lead magnet</h3>
<p className="text-base text-[#6b635e] leading-relaxed">We help turn your best ideas into a free offer that gives people a compelling reason to opt in.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#f2f1ec] flex items-center justify-center font-medium text-[#3b332d] text-lg mb-6">4</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-[#3b332d]">Build your funnel</h3>
<p className="text-base text-[#6b635e] leading-relaxed">Landing pages, opt-in flows, thank you pages, and sales paths that move people toward an offer.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#f2f1ec] flex items-center justify-center font-medium text-[#3b332d] text-lg mb-6">5</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-[#3b332d]">Automate follow-up</h3>
<p className="text-base text-[#6b635e] leading-relaxed">DM automations, email sequences, and lead nurturing that keep working silently after you post.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#f2f1ec] flex items-center justify-center font-medium text-[#3b332d] text-lg mb-6">6</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-[#3b332d]">Support the backend</h3>
<p className="text-base text-[#6b635e] leading-relaxed">We help keep the creator business machine operational so you are not buried in software setup.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]" id="offers">
<div className="max-w-6xl mx-auto px-5">
<div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-[#3b332d]">Choose your level of support</h2>
<p className="text-lg md:text-xl text-[#6b635e]">The dream is becoming self-made. The path is choosing how much support and implementation you need.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-center">

<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-10">
<span className="inline-block bg-[#f2f1ec] text-[#3b332d] px-4 py-2 rounded-full text-sm font-medium mb-8">Start free</span>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-[#3b332d]">Digital Creator AI Network</h3>
<div className="text-5xl font-semibold tracking-tight my-6 text-[#3b332d]">$0</div>
<p className="text-base text-[#6b635e] leading-relaxed mb-8 h-20">Free community and free Instagram AutoDM so creators can start generating leads immediately.</p>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#3b332d] shrink-0"></div> Free community access
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#3b332d] shrink-0"></div> Free IG AutoDM tool
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#3b332d] shrink-0"></div> Great first step if exploring
                        </li>
</ul>
<a className="flex items-center justify-center w-full px-6 py-4 rounded-full font-medium transition-colors hover:bg-[#e7e5df] bg-transparent border border-[#1c1917] text-[#1c1917] text-base" href="#apply">
                        Join Free Network
                    </a>
</div>

<div className="bg-[#faf9f5] border-2 border-[#1c1917] rounded-[2rem] p-10 relative lg:-mt-6 lg:mb-6 lg:z-10 shadow-sm">
<span className="inline-flex items-center gap-2 bg-[#1c1917] text-[#f2f1ec] px-4 py-2 rounded-full text-sm font-medium mb-8">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i> Best fit
                    </span>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-[#3b332d]">Creator Mastery AI Accelerator</h3>
<div className="text-4xl font-semibold tracking-tight my-6 text-[#3b332d]">Yearly Accelerator</div>
<p className="text-base text-[#6b635e] leading-relaxed mb-8 h-20">For creators who want the strategy, systems, software, and hands-on support to turn content into a business.</p>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#1c1917] shrink-0"></div> Content strategy for your niche
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#1c1917] shrink-0"></div> AI powered production workflows
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#1c1917] shrink-0"></div> Lead magnet &amp; funnel buildout
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#1c1917] shrink-0"></div> DM and email automation setup
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#1c1917] shrink-0"></div> Creator CRM included
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#1c1917] shrink-0"></div> Business management support
                        </li>
</ul>
<a className="flex items-center justify-center w-full px-6 py-4 rounded-full font-medium transition-transform hover:-translate-y-0.5 bg-[#1c1917] text-[#f2f1ec] text-base" href="#apply">
                        Book A Strategy Call
                    </a>
</div>

<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-10">
<span className="inline-block bg-[#f2f1ec] text-[#3b332d] px-4 py-2 rounded-full text-sm font-medium mb-8">Fastest implementation</span>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-[#3b332d]">AI Agency Funnel Build</h3>
<div className="text-4xl font-semibold tracking-tight my-6 text-[#3b332d]">DFY Buildout</div>
<p className="text-base text-[#6b635e] leading-relaxed mb-8 h-20">For creators who want a complete AI lead or sales funnel expertly built and launched for them.</p>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#3b332d] shrink-0"></div> Landing page or opt-in page
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#3b332d] shrink-0"></div> Email and automation setup
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#3b332d] shrink-0"></div> Hosted inside your creator CRM
                        </li>
<li className="flex items-start gap-4 text-base text-[#6b635e]">
<div className="w-2 h-2 mt-2 rounded-full bg-[#3b332d] shrink-0"></div> Fastest path to implementation
                        </li>
</ul>
<a className="flex items-center justify-center w-full px-6 py-4 rounded-full font-medium transition-colors hover:bg-[#e7e5df] bg-transparent border border-[#1c1917] text-[#1c1917] text-base" href="#apply">
                        Apply For DFY
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]">
<div className="max-w-6xl mx-auto px-5">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-5 text-[#3b332d]">What creators say</h2>
<p className="text-lg md:text-xl text-[#6b635e] mb-12">Real results from creators who decided to build a business behind their brand.</p>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 md:p-10 shadow-sm">
<div className="flex gap-1 text-[#d4af37] mb-6">
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-[#3b332d] mb-4 text-xl">"I finally knew what to post and how to turn it into leads."</p>
<p className="text-[#6b635e] text-base leading-relaxed">The strategy plus backend support helped me stop guessing and start building a real system that works.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 md:p-10 shadow-sm">
<div className="flex gap-1 text-[#d4af37] mb-6">
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-[#3b332d] mb-4 text-xl">"I did not need to learn a bunch of software."</p>
<p className="text-[#6b635e] text-base leading-relaxed">They helped get the business side moving so I could focus entirely on creating and engaging with my audience.</p>
</div>
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-8 md:p-10 shadow-sm">
<div className="flex gap-1 text-[#d4af37] mb-6">
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<i className="fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-[#3b332d] mb-4 text-xl">"This felt more like support than another course."</p>
<p className="text-[#6b635e] text-base leading-relaxed">It was the first program that actually helped connect content, funnels, follow up, and reliable monetization.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]">
<div className="max-w-3xl mx-auto px-5">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 text-center text-[#3b332d]">Questions creators ask</h2>
<div className="space-y-4">
<details className="group bg-white border border-[#e7e5df] rounded-[2rem] p-6 md:p-8 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex justify-between items-center cursor-pointer font-medium text-lg md:text-xl text-[#3b332d] outline-none">
                        Is this coaching, software, or a service?
                        <i className="text-[#6b635e] transition-transform duration-300 group-open:-rotate-180 w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="text-[#6b635e] text-base md:text-lg leading-relaxed mt-6 pt-6 border-t border-[#e7e5df]">
                        It is a hybrid. You get creator focused software, strategic guidance, and hands-on business management style support so you are not left trying to build everything yourself.
                    </p>
</details>
<details className="group bg-white border border-[#e7e5df] rounded-[2rem] p-6 md:p-8 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex justify-between items-center cursor-pointer font-medium text-lg md:text-xl text-[#3b332d] outline-none">
                        Who is this best for?
                        <i className="text-[#6b635e] transition-transform duration-300 group-open:-rotate-180 w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="text-[#6b635e] text-base md:text-lg leading-relaxed mt-6 pt-6 border-t border-[#e7e5df]">
                        Content creators and non techy entrepreneurs who want to grow an audience, monetize that attention, and build real automated systems behind their personal brand.
                    </p>
</details>
<details className="group bg-white border border-[#e7e5df] rounded-[2rem] p-6 md:p-8 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex justify-between items-center cursor-pointer font-medium text-lg md:text-xl text-[#3b332d] outline-none">
                        Do I need to learn the CRM?
                        <i className="text-[#6b635e] transition-transform duration-300 group-open:-rotate-180 w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="text-[#6b635e] text-base md:text-lg leading-relaxed mt-6 pt-6 border-t border-[#e7e5df]">
                        No. One of the main strengths of this positioning is that you are not expected to become a software operator. We help handle the business side so you can focus more on creating.
                    </p>
</details>
<details className="group bg-white border border-[#e7e5df] rounded-[2rem] p-6 md:p-8 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex justify-between items-center cursor-pointer font-medium text-lg md:text-xl text-[#3b332d] outline-none">
                        Why not just hire an employee?
                        <i className="text-[#6b635e] transition-transform duration-300 group-open:-rotate-180 w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="text-[#6b635e] text-base md:text-lg leading-relaxed mt-6 pt-6 border-t border-[#e7e5df]">
                        Hiring, training, and managing an employee is more expensive and more complex. This gives creators business support plus software and systems without building a full internal team from scratch.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-[#e7e5df]" id="apply">
<div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 leading-[1.1] text-[#3b332d]">
                    You do not become self-made by doing everything alone.
                </h2>
<p className="text-lg md:text-xl text-[#6b635e] leading-relaxed mb-10">
                    You become self-made when you finally get the strategy, systems, support, and structure that let your content turn into a real, scalable business.
                </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-transform hover:-translate-y-0.5 bg-[#1c1917] text-[#f2f1ec] text-base md:text-lg w-full sm:w-auto" href="https://creatormasteryai.com/">
                        Book A Strategy Call
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full font-normal transition-colors hover:bg-[#e7e5df] bg-transparent border border-[#1c1917] text-[#1c1917] text-base md:text-lg w-full sm:w-auto" href="https://solocreatorcrm.com/">
                        See The Software
                    </a>
</div>
</div>
<div className="space-y-6">
<div className="bg-white border border-[#e7e5df] rounded-[2rem] p-10 shadow-sm">
<h3 className="text-2xl font-medium tracking-tight mb-6 text-[#3b332d]">Best fit if you want:</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-base md:text-lg text-[#6b635e]">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div> A real creator business backend, not busywork
                        </li>
<li className="flex items-start gap-4 text-base md:text-lg text-[#6b635e]">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div> Clear guidance on what content to make and why
                        </li>
<li className="flex items-start gap-4 text-base md:text-lg text-[#6b635e]">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div> Funnels and automations built the right way
                        </li>
<li className="flex items-start gap-4 text-base md:text-lg text-[#6b635e]">
<div className="w-2 h-2 mt-2.5 rounded-full bg-[#1c1917] shrink-0"></div> A simpler path to more income and more freedom
                        </li>
</ul>
</div>

<div className="bg-[#f8f7f5] rounded-[2rem] p-8 flex flex-col sm:flex-row gap-6 items-start border border-[#e7e5df]">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#e7e5df]">
<i className="text-[#1c1917] w-7 h-7" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<strong className="block font-medium mb-2 text-xl text-[#3b332d]">30-Day Implementation Guarantee</strong>
<p className="text-base text-[#6b635e] leading-relaxed">If you join, do the onboarding, and we do not help you get your business backend moving in 30 days, we continue working with you at no extra cost until it is live.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 text-center text-base text-[#6b635e]">
<div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-medium tracking-widest text-[#3b332d] uppercase text-sm">CMAI</div>
<p>© <span id="yr"></span> Creator Mastery AI. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
