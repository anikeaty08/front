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
      

<header className="w-full absolute top-0 left-0 z-50 border-b border-white/5 backdrop-blur-md bg-[#1A1A2E]/80">
<div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-4 justify-between items-center">
<div className="text-lg font-semibold tracking-tighter text-white uppercase flex items-center gap-2">
<iconify-icon className="text-[#E85D04] text-xl" icon="solar:fire-linear"></iconify-icon>
                FIREHUMANS
            </div>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="text-[#B0B0C0] hover:text-[#00D4FF] transition-colors" href="#how-it-works">How it Works</a>
<a className="text-[#B0B0C0] hover:text-[#00D4FF] transition-colors" href="#use-cases">Use Cases</a>
<a className="text-[#B0B0C0] hover:text-[#00D4FF] transition-colors" href="#pricing">Pricing</a>
</nav>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden px-6">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#E85D04] rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">

<span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E85D04] mb-4 border border-[#E85D04]/30 bg-[#E85D04]/10 px-3 py-1 rounded-full">
                AI-Native Talent Marketplace
            </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 text-balance">
                Fire Humans. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B0B0C0]">Hire Centaurs.</span>
</h1>

<p className="text-base md:text-lg text-[#B0B0C0] max-w-xl mx-auto mb-10 leading-relaxed text-balance">
                One AI-powered specialist. 500 leads/day. Matched in 48 hours.
            </p>
<div className="flex flex-col items-center justify-center space-y-4 max-w-sm mx-auto w-full">
<a className="w-full bg-[#E85D04] text-white rounded-lg min-h-[48px] py-4 px-8 font-medium transition-all duration-300 btn-glow border border-[#E85D04]/50 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(232,93,4,0.3)]" href="#contact">
                    Get Your Centaur
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-xs text-[#B0B0C0] font-normal tracking-wide">
                    From $500/mo <span className="mx-1.5 opacity-50">•</span> Cancel anytime <span className="mx-1.5 opacity-50">•</span> First leads in 5 days
                </p>
</div>

<div className="mt-20 relative max-w-3xl mx-auto opacity-90">
<svg className="w-full h-auto drop-shadow-2xl" viewbox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="bodyGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"></stop>
<stop offset="100%" stop-color="#B0B0C0" stop-opacity="0.2"></stop>
</lineargradient>
<lineargradient id="glowLineRight" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#00D4FF" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#00D4FF" stop-opacity="1"></stop>
</lineargradient>
<lineargradient id="glowLineLeft" x1="100%" x2="0%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#E85D04" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#E85D04" stop-opacity="1"></stop>
</lineargradient>
</defs>


<circle cx="400" cy="140" fill="#16213E" r="35" stroke="url(#bodyGrad)" strokeWidth="3"></circle>

<path d="M 320 230 C 320 180, 480 180, 480 230 L 480 340 L 320 340 Z" fill="#16213E" stroke="url(#bodyGrad)" strokeWidth="3"></path>
<path d="M 400 175 L 400 340" fill="none" stroke="#FFFFFF" stroke-dasharray="4 4" stroke-opacity="0.2" strokeWidth="1"></path>


<path d="M 340 200 Q 200 130 150 100" fill="none" stroke="url(#glowLineLeft)" strokeWidth="2.5"></path>
<circle cx="150" cy="100" fill="#E85D04" r="6"></circle>
<text fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="14" font-weight="500" text-anchor="end" x="135" y="104">ICP Parser</text>

<path d="M 320 240 Q 150 240 120 240" fill="none" stroke="url(#glowLineLeft)" strokeWidth="2.5"></path>
<circle cx="120" cy="240" fill="#E85D04" r="6"></circle>
<text fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="14" font-weight="500" text-anchor="end" x="105" y="244">Copywriter</text>

<path d="M 330 280 Q 200 350 160 360" fill="none" stroke="url(#glowLineLeft)" strokeWidth="2.5"></path>
<circle cx="160" cy="360" fill="#E85D04" r="6"></circle>
<text fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="14" font-weight="500" text-anchor="end" x="145" y="364">Lead Scorer</text>


<path d="M 460 200 Q 600 130 650 100" fill="none" stroke="url(#glowLineRight)" strokeWidth="2.5"></path>
<circle cx="650" cy="100" fill="#00D4FF" r="6"></circle>
<text fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="14" font-weight="500" text-anchor="start" x="665" y="104">Data Enrichment</text>

<path d="M 480 240 Q 650 240 680 240" fill="none" stroke="url(#glowLineRight)" strokeWidth="2.5"></path>
<circle cx="680" cy="240" fill="#00D4FF" r="6"></circle>
<text fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="14" font-weight="500" text-anchor="start" x="695" y="244">Email + LinkedIn</text>

<path d="M 470 280 Q 600 350 640 360" fill="none" stroke="url(#glowLineRight)" strokeWidth="2.5"></path>
<circle cx="640" cy="360" fill="#00D4FF" r="6"></circle>
<text fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="14" font-weight="500" text-anchor="start" x="655" y="364">CRM Sync</text>
</svg>
</div>

<div className="mt-4 border-t border-white/5 pt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm text-[#B0B0C0] font-medium">
<span className="flex items-center gap-2"><iconify-icon className="text-[#00D4FF]" icon="solar:chart-line-up-linear"></iconify-icon> 500+ touches/day</span>
<span className="hidden md:inline opacity-30">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#E85D04]" icon="solar:rocket-linear"></iconify-icon> 10x faster than traditional SDR</span>
<span className="hidden md:inline opacity-30">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#00C48C]" icon="solar:shield-check-linear"></iconify-icon> Verified AI stacks</span>
</div>
</div>
</section>

<section className="py-20 md:py-24 px-6 border-t border-white/5 bg-[#1A1A2E]/50">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">
                Tried AI? Didn't work? <span className="text-[#B0B0C0]">Join the club.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#16213E] rounded-2xl p-6 md:p-8 border border-white/5 shadow-lg">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl mb-6">
                        💸
                    </div>
<h3 className="text-lg font-medium text-white mb-2">The Expensive SDR</h3>
<p className="text-sm text-[#B0B0C0] leading-relaxed">
                        You hired a sales rep for $3-4K/month. They send 50 template emails a day with a 1% reply rate.
                    </p>
</div>

<div className="bg-[#16213E] rounded-2xl p-6 md:p-8 border border-white/5 shadow-lg">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl mb-6">
                        🤖
                    </div>
<h3 className="text-lg font-medium text-white mb-2">The DIY Experiment</h3>
<p className="text-sm text-[#B0B0C0] leading-relaxed">
                        You spent two weeks learning ChatGPT prompts and built some workflows. Got generic output and went back to square one.
                    </p>
</div>

<div className="bg-[#16213E] rounded-2xl p-6 md:p-8 border border-white/5 shadow-lg">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl mb-6">
                        😵
                    </div>
<h3 className="text-lg font-medium text-white mb-2">The Shiny Tool</h3>
<p className="text-sm text-[#B0B0C0] leading-relaxed">
                        You paid $500/month for an AI outreach platform that nobody knew how to configure. Cancelled after month two.
                    </p>
</div>
</div>

<div className="mt-16 text-center max-w-3xl mx-auto">
<p className="text-xl md:text-2xl text-[#E85D04] font-semibold tracking-tight leading-snug text-balance">
                    The problem isn't AI.<br className="hidden md:block"/> It's that you need someone who actually knows how to weaponize it.
                </p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Meet Your Centaur</h2>
<p className="text-sm md:text-base text-[#B0B0C0] leading-relaxed mb-4">
                    A centaur is an AI-native specialist with a verified stack of AI agents. 
                </p>

<p className="text-sm md:text-base text-white/80 font-medium leading-relaxed">
                    These aren't prompts in ChatGPT. These are production-grade agent workflows built, tested, and maintained by specialists.
                </p>
</div>

<div className="relative max-w-4xl mx-auto">
<div className="solution-grid grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-12 md:gap-x-32 relative z-10">

<div className="solution-left agent-node bg-[#16213E] p-6 rounded-xl border border-white/5 flex gap-4 items-start md:text-right md:flex-row-reverse group transition-all hover:bg-[#16213E]/80">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:scanner-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium text-white mb-1">ICP Parser</h4>
<p className="text-xs text-[#B0B0C0] leading-relaxed">Finds your ideal customers across vast databases with precision filters.</p>
</div>
</div>

<div className="solution-right agent-node bg-[#16213E] p-6 rounded-xl border border-white/5 flex gap-4 items-start group transition-all hover:bg-[#16213E]/80 mt-0 md:mt-12">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium text-white mb-1">Data Enrichment</h4>
<p className="text-xs text-[#B0B0C0] leading-relaxed">Adds valid emails, LinkedIn profiles, phone numbers, and company metadata.</p>
</div>
</div>

<div className="solution-left agent-node bg-[#16213E] p-6 rounded-xl border border-white/5 flex gap-4 items-start md:text-right md:flex-row-reverse group transition-all hover:bg-[#16213E]/80">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E85D04]/10 flex items-center justify-center text-[#E85D04] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium text-white mb-1">Copywriter Agent</h4>
<p className="text-xs text-[#B0B0C0] leading-relaxed">Writes highly personalized messages tailored to each specific lead's profile.</p>
</div>
</div>

<div className="solution-right agent-node bg-[#16213E] p-6 rounded-xl border border-white/5 flex gap-4 items-start group transition-all hover:bg-[#16213E]/80 mt-0 md:mt-12">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E85D04]/10 flex items-center justify-center text-[#E85D04] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium text-white mb-1">Multichannel Sender</h4>
<p className="text-xs text-[#B0B0C0] leading-relaxed">Automates Email + LinkedIn + follow-up sequences naturally.</p>
</div>
</div>

<div className="solution-left agent-node bg-[#16213E] p-6 rounded-xl border border-white/5 flex gap-4 items-start md:text-right md:flex-row-reverse group transition-all hover:bg-[#16213E]/80">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:sort-vertical-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium text-white mb-1">Response Qualifier</h4>
<p className="text-xs text-[#B0B0C0] leading-relaxed">Reads replies, scores sentiment, and instantly identifies hot leads.</p>
</div>
</div>

<div className="solution-right agent-node bg-[#16213E] p-6 rounded-xl border border-white/5 flex gap-4 items-start group transition-all hover:bg-[#16213E]/80 mt-0 md:mt-12">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:sync-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium text-white mb-1">CRM Sync</h4>
<p className="text-xs text-[#B0B0C0] leading-relaxed">Pushes clean, qualified lead data directly into your sales pipeline.</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-16 max-w-sm mx-auto w-full">
<a className="w-full bg-[#E85D04] text-white rounded-lg min-h-[48px] py-4 px-8 font-medium transition-all duration-300 btn-glow border border-[#E85D04]/50 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(232,93,4,0.3)]" href="#contact">
                    Get Your Centaur
                </a>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-t border-white/5 bg-[#1A1A2E]/50" id="use-cases">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">Choose Your Mission</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<a className="group block bg-[#16213E] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-colors duration-300 cursor-pointer flex flex-col h-full" data-track="usecase_cold_outreach" href="#contact">
<iconify-icon className="text-[#00D4FF] text-3xl mb-4" icon="solar:rocket-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-3">Cold Outreach to New Markets</h3>
<p className="text-sm text-white/70 mb-3">
                        You have a B2B product and need to break into a new segment.
                    </p>
<p className="text-sm text-[#B0B0C0] leading-relaxed mb-5 flex-grow">
                        Your centaur parses databases matching your ICP, writes 500+ personalized emails daily, and manages multi-step follow-up sequences to hand you warm leads ready for a call.
                    </p>
<p className="text-sm font-bold text-[#00D4FF]">
                        Result: Full outbound pipeline from scratch in 5 days.
                    </p>
</a>

<a className="group block bg-[#16213E] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-colors duration-300 cursor-pointer flex flex-col h-full" data-track="usecase_dead_crm" href="#contact">
<iconify-icon className="text-[#00D4FF] text-3xl mb-4" icon="solar:database-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-3">Resurrect Your Dead CRM</h3>
<p className="text-sm text-white/70 mb-3">
                        5,000 contacts sitting in your CRM doing nothing.
                    </p>
<p className="text-sm text-[#B0B0C0] leading-relaxed mb-5 flex-grow">
                        Your centaur enriches the outdated data, re-segments lists by new criteria, and launches highly personalized reactivation sequences.
                    </p>
<p className="text-sm font-bold text-[#00D4FF]">
                        Result: 5-15% of "dead" leads come back to life.
                    </p>
</a>

<a className="group block bg-[#16213E] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-colors duration-300 cursor-pointer flex flex-col h-full" data-track="usecase_linkedin" href="#contact">
<iconify-icon className="text-[#00D4FF] text-3xl mb-4" icon="solar:network-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-3">LinkedIn Lead Machine</h3>
<p className="text-sm text-white/70 mb-3">
                        Your ideal clients live on LinkedIn but manual outreach is painfully slow.
                    </p>
<p className="text-sm text-[#B0B0C0] leading-relaxed mb-5 flex-grow">
                        Your centaur parses by your exact filters, sends personalized connection requests, and nurtures prospects naturally through conversational engagement.
                    </p>
<p className="text-sm font-bold text-[#00D4FF]">
                        Result: Consistent weekly flow of qualified conversations.
                    </p>
</a>

<a className="group block bg-[#16213E] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-colors duration-300 cursor-pointer flex flex-col h-full" data-track="usecase_instant_response" href="#contact">
<iconify-icon className="text-[#00D4FF] text-3xl mb-4" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-3">Instant Lead Response</h3>
<p className="text-sm text-white/70 mb-3">
                        Inbound leads sit for hours before anyone calls back.
                    </p>
<p className="text-sm text-[#B0B0C0] leading-relaxed mb-5 flex-grow">
                        Your centaur sets up instant multi-channel qualification. The AI agent responds in 60 seconds, qualifies, scores, and routes hot leads straight to your phone.
                    </p>
<p className="text-sm font-bold text-[#00D4FF]">
                        Result: Drastic increase in inbound conversion rates.
                    </p>
</a>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6" id="how-it-works">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16">
                3 Steps. <span className="text-[#00D4FF]">First Leads in 5 Days.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">

<div className="hidden md:block absolute top-[14px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#00D4FF] via-[#E85D04] to-[#00C48C] opacity-30 z-0"></div>

<div className="md:hidden absolute top-[14px] bottom-[14px] left-[13px] w-[1px] bg-gradient-to-b from-[#00D4FF] via-[#E85D04] to-[#00C48C] opacity-30 z-0"></div>

<div className="relative z-10 pl-10 md:pl-0 md:text-center">
<div className="absolute md:relative left-0 top-0 md:mx-auto w-7 h-7 bg-[#1A1A2E] border-2 border-[#00D4FF] text-[#00D4FF] rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,212,255,0.4)] md:mb-6">1</div>
<div className="flex flex-col md:items-center gap-2 mb-3 mt-1 md:mt-0">
<span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wide text-[#00D4FF] border border-[#00D4FF]/30 bg-[#00D4FF]/10 rounded-full w-fit">Day 1</span>
<h3 className="text-base md:text-lg font-bold text-white">Tell us your ICP</h3>
</div>
<p className="text-sm text-[#B0B0C0] leading-relaxed">
                        Fill a 5-minute brief. Who's your ideal client? What's your product? What channels do you want?
                    </p>
</div>

<div className="relative z-10 pl-10 md:pl-0 md:text-center">
<div className="absolute md:relative left-0 top-0 md:mx-auto w-7 h-7 bg-[#1A1A2E] border-2 border-[#E85D04] text-[#E85D04] rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(232,93,4,0.4)] md:mb-6">2</div>
<div className="flex flex-col md:items-center gap-2 mb-3 mt-1 md:mt-0">
<span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wide text-[#E85D04] border border-[#E85D04]/30 bg-[#E85D04]/10 rounded-full w-fit">48 hours</span>
<h3 className="text-base md:text-lg font-bold text-white">We match your centaur</h3>
</div>
<p className="text-sm text-[#B0B0C0] leading-relaxed">
                        We select a verified AI-native specialist whose agent stack fits your task. You approve.
                    </p>
</div>

<div className="relative z-10 pl-10 md:pl-0 md:text-center">
<div className="absolute md:relative left-0 top-0 md:mx-auto w-7 h-7 bg-[#1A1A2E] border-2 border-[#00C48C] text-[#00C48C] rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,196,140,0.4)] md:mb-6">3</div>
<div className="flex flex-col md:items-center gap-2 mb-3 mt-1 md:mt-0">
<span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wide text-[#00C48C] border border-[#00C48C]/30 bg-[#00C48C]/10 rounded-full w-fit">Day 5</span>
<h3 className="text-base md:text-lg font-bold text-white">Leads start flowing</h3>
</div>
<p className="text-sm text-[#B0B0C0] leading-relaxed">
                        Your centaur builds the pipeline and launches. Qualified leads arrive in your inbox.
                    </p>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-sm text-[#00C48C] font-medium mb-6 flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
                    Not happy? First 5 hours are risk-free. Full refund, no questions.
                </p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-t border-white/5 bg-[#1A1A2E]/50 relative overflow-hidden" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-[#E85D04] blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">Simple Pricing. Cancel Anytime.</h2>

<div className="bg-[#16213E] border border-[#E85D04]/50 rounded-2xl p-8 max-w-sm mx-auto shadow-[0_0_30px_rgba(232,93,4,0.1)] relative overflow-hidden md:hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E85D04] to-[#00D4FF]"></div>
<div className="text-4xl font-bold text-white mb-2">$50<span className="text-lg text-[#B0B0C0] font-normal">/hour</span></div>
<p className="text-sm font-bold text-[#00D4FF] mb-2">From $500/month</p>
<p className="text-xs text-[#B0B0C0] mb-8 pb-6 border-b border-white/10">Minimum 10 hours/month</p>
<ul className="space-y-4 text-sm text-[#B0B0C0] mb-8">
<li className="flex items-start gap-3"><iconify-icon className="text-[#00C48C] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Monthly billing, prepaid</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#00C48C] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Cancel anytime, no lock-in</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#00C48C] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> First 5 hours risk-free (money back)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#00C48C] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Matching: free, 48 hours</li>
</ul>
<a className="block w-full min-h-[48px] text-center bg-[#E85D04] text-white rounded-lg py-3.5 font-medium transition-all duration-300 btn-glow border border-[#E85D04]/50" href="#contact">
                    Get Your Centaur
                </a>
</div>

<div className="hidden md:block overflow-x-auto pb-4">
<div className="min-w-[800px] grid grid-cols-4 gap-0 text-sm">

<div className="p-4 border-b border-white/5"></div>
<div className="p-4 text-[#B0B0C0] font-medium border-b border-white/5 text-center">Hire SDR In-House</div>
<div className="p-4 text-[#B0B0C0] font-medium border-b border-white/5 text-center">Upwork Freelancer</div>
<div className="relative p-4 text-[#E85D04] font-bold border-b border-[#E85D04]/50 bg-[#16213E] rounded-t-xl border-x border-t text-center shadow-[0_-10px_30px_rgba(232,93,4,0.1)]">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E85D04] to-[#00D4FF] rounded-t-xl"></div>
                        FireHumans Centaur
                    </div>

<div className="p-4 text-[#B0B0C0] border-b border-white/5 flex items-center">Monthly cost</div>
<div className="p-4 border-b border-white/5 text-center text-white">$3,000-4,000</div>
<div className="p-4 border-b border-white/5 text-center text-white">$1,500-3,000</div>
<div className="p-4 border-b border-[#E85D04]/30 bg-[#16213E] border-x text-center text-white font-bold">From $500</div>

<div className="p-4 text-[#B0B0C0] border-b border-white/5 flex items-center">Touches/day</div>
<div className="p-4 border-b border-white/5 text-center text-white">50</div>
<div className="p-4 border-b border-white/5 text-center text-white">50-100</div>
<div className="p-4 border-b border-[#E85D04]/30 bg-[#16213E] border-x text-center text-[#00D4FF] font-bold">500+</div>

<div className="p-4 text-[#B0B0C0] border-b border-white/5 flex items-center">Personalization</div>
<div className="p-4 border-b border-white/5 text-center text-white">Template</div>
<div className="p-4 border-b border-white/5 text-center text-white">Semi-manual</div>
<div className="p-4 border-b border-[#E85D04]/30 bg-[#16213E] border-x text-center text-white font-bold">AI-personalized each</div>

<div className="p-4 text-[#B0B0C0] border-b border-white/5 flex items-center">Ramp-up time</div>
<div className="p-4 border-b border-white/5 text-center text-white">2-4 weeks</div>
<div className="p-4 border-b border-white/5 text-center text-white">1-2 weeks</div>
<div className="p-4 border-b border-[#E85D04]/30 bg-[#16213E] border-x text-center text-[#00C48C] font-bold">5 days</div>

<div className="p-4 text-[#B0B0C0] border-b border-white/5 flex items-center">AI agents included</div>
<div className="p-4 border-b border-white/5 text-center text-white/50">No</div>
<div className="p-4 border-b border-white/5 text-center text-white/70">Maybe</div>
<div className="p-4 border-b border-[#E85D04]/30 bg-[#16213E] border-x text-center text-white font-bold">Verified stack</div>

<div className="p-4 text-[#B0B0C0] flex items-center border-b border-white/5 md:border-transparent">Risk</div>
<div className="p-4 text-center text-white border-b border-white/5 md:border-transparent">Salary commitment</div>
<div className="p-4 text-center text-white border-b border-white/5 md:border-transparent">Quality lottery</div>
<div className="p-4 bg-[#16213E] border-x border-b border-[#E85D04]/50 rounded-b-xl text-center text-[#00C48C] font-bold shadow-[0_10px_30px_rgba(232,93,4,0.1)]">
                        Cancel anytime
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-[#16213E]/80">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#E85D04]/50 to-transparent"></div>
<div className="max-w-xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 text-balance">
                Your Competitors Already Hired Their Centaurs.
            </h2>
<p className="text-base font-medium text-[#E85D04] mb-10">
                First 10 clients get priority matching. Spots are limited.
            </p>

<form className="flex flex-col gap-3 mb-8 w-full" id="contact">
<input className="w-full bg-[#1A1A2E] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] transition-all" placeholder="Your name" required="" type="text"/>
<input className="w-full bg-[#1A1A2E] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] transition-all" placeholder="Company / what you sell" required="" type="text"/>
<input className="w-full bg-[#1A1A2E] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] transition-all" placeholder="Email address" required="" type="email"/>
<button className="w-full bg-[#E85D04] text-white rounded-lg min-h-[56px] py-4 px-10 text-base font-medium transition-all duration-300 btn-glow border border-[#E85D04]/50 shadow-[0_0_30px_rgba(232,93,4,0.2)] mt-2" type="submit">
                    Get My Centaur Now
                </button>
</form>
<div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-[#B0B0C0] font-medium">
<span>Free matching</span>
<span className="opacity-30">•</span>
<span>48-hour turnaround</span>
<span className="opacity-30">•</span>
<span>Cancel anytime</span>
</div>
</div>
</section>

<footer className="mt-auto border-t border-white/5 py-10 px-6 bg-[#1A1A2E]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#B0B0C0]">
<div className="flex items-center gap-2 tracking-tighter font-semibold text-white/50 text-sm">
<iconify-icon className="text-white/30 text-lg" icon="solar:fire-linear"></iconify-icon>
                FIREHUMANS
            </div>
<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center">
<span>© 2026 FireHumans • firehumans.com</span>
<a className="hover:text-white transition-colors" href="mailto:hello@firehumans.com">hello@firehumans.com</a>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
