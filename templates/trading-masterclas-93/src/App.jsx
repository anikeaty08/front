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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center transition-all duration-300 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<a className="flex items-center gap-3 group" href="#">
<img alt="Logo" className="bg-neutral-800 w-8 h-8 border-white/10 border rounded-full" onerror="this.style.display='none'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="group-hover:text-[#C7A368] transition-colors text-lg text-white tracking-tight font-serif">
                SiempreInvertir<span className="text-[#C7A368]">.com</span>
</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#learn">What You'll Learn</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#C7A368] hover:bg-[#e0b979] px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(199,163,104,0.4)]" href="#pricing">
            Reserve Seat
        </a>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 pr-4 pl-4 relative items-center justify-center">

<div className="absolute inset-0 z-0 bg-noise opacity-50 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C7A368]/10 via-[#050505] to-[#050505] pointer-events-none"></div>

<div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7A368]/20 to-transparent blur-sm"></div>
<div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7A368]/10 to-transparent blur-sm rotate-3"></div>
<div className="relative z-10 max-w-4xl w-full text-center space-y-10">

<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#C7A368]/20 bg-[#C7A368]/5 text-xs font-medium text-[#C7A368] mb-4 reveal-on-scroll">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7A368] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7A368]"></span>
</span>
                Live Event • Beginners • Limited Seats
            </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1] text-white reveal-on-scroll">
                [EVENT_NAME]
                <span className="block text-2xl md:text-3xl font-sans font-light text-neutral-400 mt-6 tracking-normal">
                    The path to consistent, calm trading results starts here.
                </span>
</h1>

<div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-neutral-300 reveal-on-scroll delay-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> No Experience Needed
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> Risk Management First
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> Live Walkthrough
                </div>
</div>

<div className="reveal-on-scroll delay-200 py-6">
<div className="inline-grid grid-cols-4 gap-4 md:gap-8">
<div className="text-center">
<div className="countdown-box w-16 h-20 md:w-20 md:h-24 rounded-lg flex items-center justify-center text-3xl md:text-4xl font-serif text-[#C7A368]">03</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Days</div>
</div>
<div className="text-center">
<div className="countdown-box w-16 h-20 md:w-20 md:h-24 rounded-lg flex items-center justify-center text-3xl md:text-4xl font-serif text-[#C7A368]">12</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Hours</div>
</div>
<div className="text-center">
<div className="countdown-box w-16 h-20 md:w-20 md:h-24 rounded-lg flex items-center justify-center text-3xl md:text-4xl font-serif text-[#C7A368]">45</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Mins</div>
</div>
<div className="text-center">
<div className="countdown-box w-16 h-20 md:w-20 md:h-24 rounded-lg flex items-center justify-center text-3xl md:text-4xl font-serif text-[#C7A368]">20</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Secs</div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-4 reveal-on-scroll delay-300">
<a className="group relative px-10 py-5 bg-[#C7A368] hover:bg-[#d4b47d] text-[#050505] font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_50px_-10px_rgba(199,163,104,0.4)]" href="#pricing">
                    Secure Your Spot
                    <iconify-icon className="inline-block ml-2 -mr-1 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<p className="text-xs text-neutral-500">
                    Event starts [EVENT_DATE] at [EVENT_TIME] [TIMEZONE]
                </p>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 animate-bounce">
<iconify-icon icon="lucide:chevrons-down" width="20"></iconify-icon>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black/50 overflow-hidden relative z-20" id="results">
<div className="flex justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-neutral-400 font-serif text-xl"><iconify-icon icon="lucide:trending-up"></iconify-icon> Proven System</div>
<div className="flex items-center gap-2 text-neutral-400 font-serif text-xl"><iconify-icon icon="lucide:shield-check"></iconify-icon> Capital Protection</div>
<div className="flex items-center gap-2 text-neutral-400 font-serif text-xl"><iconify-icon icon="lucide:users"></iconify-icon> [SEATS_LIMIT] Members</div>
</div>
</section>

<section className="py-32 px-4 relative z-10" id="learn">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 space-y-4 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl text-white font-serif">
                    From Confusion to <span className="text-[#C7A368] italic">Clarity</span>
</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">
                    Most beginners lose money because they lack a plan. In [DURATION], we will build your foundation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="gold-border-gradient p-8 rounded-2xl reveal-on-scroll group bg-[#0A0A0A]">
<div className="w-12 h-12 bg-[#C7A368]/10 rounded-full flex items-center justify-center text-[#C7A368] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:compass" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-serif mb-3">Market Structure</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Learn how to read the charts like a professional, identifying trends without relying on complex indicators.
                    </p>
</div>

<div className="gold-border-gradient p-8 rounded-2xl reveal-on-scroll delay-100 group bg-[#0A0A0A]">
<div className="w-12 h-12 bg-[#C7A368]/10 rounded-full flex items-center justify-center text-[#C7A368] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-serif mb-3">Ironclad Risk Management</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        The secret to longevity. How to protect your capital so you can survive the learning curve and thrive.
                    </p>
</div>

<div className="gold-border-gradient p-8 rounded-2xl reveal-on-scroll delay-200 group bg-[#0A0A0A]">
<div className="w-12 h-12 bg-[#C7A368]/10 rounded-full flex items-center justify-center text-[#C7A368] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:list-checks" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-serif mb-3">The Daily Checklist</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        A step-by-step routine to follow every morning. No guessing. You either have a trade, or you don't.
                    </p>
</div>

<div className="gold-border-gradient p-8 rounded-2xl reveal-on-scroll delay-300 group bg-[#0A0A0A]">
<div className="w-12 h-12 bg-[#C7A368]/10 rounded-full flex items-center justify-center text-[#C7A368] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-serif mb-3">Trader Psychology</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Why 90% fail and how to be the 10%. Mastering your emotions when money is on the line.
                    </p>
</div>

<div className="gold-border-gradient p-8 rounded-2xl reveal-on-scroll delay-400 group bg-[#0A0A0A] md:col-span-2">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
<div className="flex-1">
<div className="w-12 h-12 bg-[#C7A368]/10 rounded-full flex items-center justify-center text-[#C7A368] mb-6">
<iconify-icon icon="lucide:monitor-play" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-serif mb-3">Live Execution Strategy</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                                Watch me analyze the market in real-time. I'll show you exactly where to enter, where to place your stop-loss, and where to take profits.
                            </p>
</div>
<div className="w-full md:w-1/3 bg-[#050505] border border-white/5 rounded-lg p-4 flex flex-col gap-2 opacity-80">

<div className="flex justify-between text-[10px] text-neutral-500">
<span>EUR/USD</span>
<span className="text-green-500">+1.2%</span>
</div>
<div className="h-12 w-full flex items-end gap-1">
<div className="w-1/6 h-[40%] bg-[#C7A368]/20"></div>
<div className="w-1/6 h-[60%] bg-[#C7A368]/40"></div>
<div className="w-1/6 h-[30%] bg-[#C7A368]/20"></div>
<div className="w-1/6 h-[80%] bg-[#C7A368]"></div>
<div className="w-1/6 h-[50%] bg-[#C7A368]/40"></div>
<div className="w-1/6 h-[70%] bg-[#C7A368]/60"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-neutral-900/20 border-y border-white/5">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 space-y-8 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                    My method is 
                    <span className="text-[#C7A368]">radically simple.</span>
</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-[#C7A368] text-[#050505] flex items-center justify-center font-bold text-sm shrink-0">1</div>
<div className="">
<h4 className="text-white font-medium mb-1">Wait for the setup</h4>
<p className="text-neutral-500 text-sm">We don't chase the market. We let the price come to our zone of interest.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#C7A368] text-[#C7A368] flex items-center justify-center font-bold text-sm shrink-0">2</div>
<div className="">
<h4 className="text-white font-medium mb-1">Execute with precision</h4>
<p className="text-neutral-500 text-sm">Use the limit orders and stop losses calculated beforehand. No emotions.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#C7A368] text-[#C7A368] flex items-center justify-center font-bold text-sm shrink-0">3</div>
<div className="">
<h4 className="text-white font-medium mb-1">Walk away</h4>
<p className="text-neutral-500 text-sm">Trading shouldn't take all day. Once the trade is set, live your life.</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="text-white border-b border-[#C7A368] pb-1 hover:text-[#C7A368] transition-colors inline-flex items-center gap-2" href="#pricing">
                        Start Learning the Method <iconify-icon className="" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 grid grid-cols-2 gap-4 reveal-on-scroll delay-100">
<div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl">
<p className="text-3xl font-serif text-white mb-1">15m</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Analysis Time</p>
</div>
<div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl">
<p className="text-3xl font-serif text-[#C7A368] mb-1">1:3</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Risk Reward Aim</p>
</div>
<div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl col-span-2">
<p className="text-3xl font-serif text-white mb-1">$100 - $500</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Daily Goal Aspiration*</p>
<p className="text-[10px] text-neutral-600 mt-2">*Results vary based on capital &amp; discipline.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="overflow-hidden reveal-on-scroll w-full h-[600px] rounded-2xl relative">
<div className="animate-pulse bg-neutral-800 absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='/home'" role="button">

<img alt="Hector Zavala" className="hover:grayscale-0 transition-all duration-700 cursor-pointer opacity-80 w-full h-full object-cover grayscale" onclick="window.location.href='https://storage.googleapis.com/msgsndr/yA7PKPG3RL5iZVCttxP4/media/6854ebb5ac94581b70ab5853.png'" onerror="this.src='https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17c1be1a-27ec-400f-a295-7d7f17c74e14_1600w.png"/>
</div>
<div className="bg-gradient-to-t from-black to-transparent w-full h-1/2 absolute bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="font-serif text-2xl">[HOST_NAME]</p>
<p className="text-[#C7A368] text-sm">Founder, SiempreInvertir</p>
</div>
</div>
<div className="space-y-8 reveal-on-scroll delay-100">
<h2 className="text-4xl md:text-5xl font-serif text-white">
                    "I used to stare at charts for 12 hours a day..."
                </h2>
<div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
<p className="">
                        I know what it feels like to be overwhelmed. To buy when you should sell. To watch a winning trade turn into a loss because of greed.
                    </p>
<p className="">
                        Through years of trial and error, I discovered that trading isn't about knowing <i>everything</i>—it's about mastering a <i>few</i> things very well.
                    </p>
<p className="">
                        My goal with [EVENT_NAME] is to shortcut your learning curve by 2 years. I'll hand you the exact system I use, stripped of all the noise.
                    </p>
</div>
<div className="border-l-2 border-[#C7A368] pl-6 py-2 italic text-white/90">
                    "Trading is 10% strategy and 90% psychology. We will master both."
                </div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-neutral-900/10">
<div className="max-w-6xl mx-auto">
<h2 className="text-center text-3xl md:text-4xl font-serif text-white mb-16 reveal-on-scroll">What students are saying</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl reveal-on-scroll">
<div className="flex text-[#C7A368] mb-4 text-sm">★★★★★</div>
<p className="text-neutral-400 mb-6 text-sm">"[TESTIMONIAL_1_QUOTE] The clarity Hector provides is unmatched. I finally stopped blowing accounts."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full"></div>
<div className="text-sm">
<div className="text-white font-medium">[TESTIMONIAL_1_NAME]</div>
<div className="text-neutral-600 text-xs">Student</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl reveal-on-scroll delay-100">
<div className="flex text-[#C7A368] mb-4 text-sm">★★★★★</div>
<p className="text-neutral-400 mb-6 text-sm">"[TESTIMONIAL_2_QUOTE] Simple, effective, and straight to the point. The risk management section alone is worth the price."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full"></div>
<div className="text-sm">
<div className="text-white font-medium">[TESTIMONIAL_2_NAME]</div>
<div className="text-neutral-600 text-xs">Student</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl reveal-on-scroll delay-200">
<div className="flex text-[#C7A368] mb-4 text-sm">★★★★★</div>
<p className="text-neutral-400 mb-6 text-sm">"[TESTIMONIAL_3_QUOTE] I made my investment back in my first week applying the checklist."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full"></div>
<div className="text-sm">
<div className="text-white font-medium">[TESTIMONIAL_3_NAME]</div>
<div className="text-neutral-600 text-xs">Student</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-10" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 space-y-4 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl text-white font-serif">Select your tier</h2>
<p className="text-neutral-400">Invest in yourself. Spaces are strictly limited.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="border border-white/10 bg-[#0A0A0A] p-8 rounded-2xl relative reveal-on-scroll hover:border-white/20 transition-colors">
<h3 className="text-xl text-white font-medium mb-2">Live Masterclass</h3>
<div className="text-4xl font-serif text-white mb-6">$97</div>
<p className="text-sm text-neutral-500 mb-8 border-b border-white/5 pb-8">
                        Perfect for those who want to attend the live session and get the core materials.
                    </p>
<ul className="space-y-4 text-sm text-neutral-300 mb-8">
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> Live Virtual Access</li>
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> PDF Strategy Guide</li>
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> Q&amp;A Session</li>
<li className="flex gap-3 text-neutral-600"><iconify-icon className="text-neutral-700" icon="lucide:x"></iconify-icon> No Replay Access</li>
</ul>
<a className="block w-full py-3 text-center border border-white/20 rounded-lg text-white hover:bg-white hover:text-black transition-all" href="[CHECKOUT_LINK_97]">Select Ticket</a>
</div>

<div className="border border-[#C7A368] bg-[#0F0F0F] p-8 rounded-2xl relative reveal-on-scroll delay-100 transform md:-translate-y-4 shadow-[0_0_50px_-20px_rgba(199,163,104,0.15)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C7A368] text-[#050505] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-xl text-white font-medium mb-2">Live + Replay</h3>
<div className="text-4xl font-serif text-[#C7A368] mb-6">$147</div>
<p className="text-sm text-neutral-400 mb-8 border-b border-white/10 pb-8">
                        Maximize learning with lifetime access to the recording and bonus resources.
                    </p>
<ul className="space-y-4 text-sm text-white mb-8">
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> Live Virtual Access</li>
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> PDF Strategy Guide</li>
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> Extended Q&amp;A Session</li>
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> </li>
</ul>
<a className="block w-full py-4 text-center bg-[#C7A368] rounded-lg text-[#050505] font-bold hover:bg-[#e0b979] transition-all hover:scale-[1.02]" href="[CHECKOUT_LINK_147]">Secure Access</a>
</div>

<div className="border border-white/10 bg-[#0A0A0A] p-8 rounded-2xl relative reveal-on-scroll delay-200 hover:border-white/20 transition-colors">
<h3 className="text-xl text-white font-medium mb-2">VIP Experience</h3>
<div className="text-4xl font-serif text-white mb-6">$247</div>
<p className="text-sm text-neutral-500 mb-8 border-b border-white/5 pb-8">
                        For the serious trader. Attend in-person or get VIP virtual perks.
                    </p>
<ul className="space-y-4 text-sm text-neutral-300 mb-8">
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> Everything in Replay Tier</li>
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> In-Person Seat at [VENUE_PANAMA]</li>
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> VIP Networking Dinner</li>
<li className="flex gap-3"><iconify-icon className="text-[#C7A368]" icon="lucide:check"></iconify-icon> 1-on-1 Strategy Call (15min)</li>
</ul>
<a className="block w-full py-3 text-center border border-white/20 rounded-lg text-white hover:bg-white hover:text-black transition-all" href="[CHECKOUT_LINK_247]">Join VIP</a>
</div>
</div>
<div className="mt-12 text-center text-xs text-neutral-600 reveal-on-scroll">
<p>Payment is secure. By purchasing you agree to our terms.</p>
<p className="mt-2 text-red-900/50 uppercase tracking-widest font-semibold">Strict No Refund Policy</p>
<p className="mt-1">Due to the digital/live nature of this event, all sales are final.</p>
</div>
</div>
</section>

<section className="py-24 px-4 bg-neutral-900/20" id="faq">
<div className="max-w-3xl mx-auto space-y-6">
<h2 className="text-3xl font-serif text-white text-center mb-10">Frequently Asked Questions</h2>
<details className="glass-panel rounded-lg p-6 cursor-pointer group">
<summary className="flex justify-between items-center font-medium text-white">
                    What is included in the ticket?
                    <span className="text-[#C7A368] transition-transform group-open:rotate-180"><iconify-icon icon="lucide:chevron-down"></iconify-icon></span>
</summary>
<div className="pt-4 text-neutral-400 text-sm leading-relaxed">
                    Depending on your tier, you get access to the live virtual event, PDF guides, and Q&amp;A. The $147 tier includes the replay, which we highly recommend for reviewing the material.
                </div>
</details>
<details className="glass-panel rounded-lg p-6 cursor-pointer group">
<summary className="flex justify-between items-center font-medium text-white">
                    Do I need trading experience?
                    <span className="text-[#C7A368] transition-transform group-open:rotate-180"><iconify-icon icon="lucide:chevron-down"></iconify-icon></span>
</summary>
<div className="pt-4 text-neutral-400 text-sm leading-relaxed">
                    No. This event is designed for beginners. We start with the foundations and build up to the strategy. If you are advanced, you will appreciate the simplicity of the system.
                </div>
</details>
<details className="glass-panel rounded-lg p-6 cursor-pointer group">
<summary className="flex justify-between items-center font-medium text-white">
                    What if I can't attend live?
                    <span className="text-[#C7A368] transition-transform group-open:rotate-180"><iconify-icon icon="lucide:chevron-down"></iconify-icon></span>
</summary>
<div className="pt-4 text-neutral-400 text-sm leading-relaxed">
                    If you purchase the "Live + Replay" ($147) or VIP ticket, you will receive a recording of the entire event within 24 hours. The $97 ticket does NOT include a replay.
                </div>
</details>
<details className="glass-panel rounded-lg p-6 cursor-pointer group">
<summary className="flex justify-between items-center font-medium text-white">
                    Is there a refund policy?
                    <span className="text-[#C7A368] transition-transform group-open:rotate-180"><iconify-icon icon="lucide:chevron-down"></iconify-icon></span>
</summary>
<div className="pt-4 text-neutral-400 text-sm leading-relaxed">
                    No. As this is a live knowledge event with digital deliverables, we do not offer refunds under any circumstances. Please only purchase if you are committed.
                </div>
</details>
</div>
</section>

<section className="py-20 text-center">
<h3 className="text-white font-serif text-2xl mb-6">Still have questions?</h3>
<a className="inline-flex items-center gap-2 text-[#C7A368] hover:text-white transition-colors border border-[#C7A368]/30 px-6 py-3 rounded-full hover:bg-[#C7A368]/10" href="[WHATSAPP_LINK]">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
            Chat on WhatsApp
        </a>
</section>

<footer className="py-12 px-6 border-t border-white/10 bg-black relative z-10 text-center md:text-left">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
<div className="space-y-4">
<div className="flex items-center justify-center md:justify-start gap-2">
<span className="text-white font-serif text-lg">SiempreInvertir<span className="text-[#C7A368]">.com</span></span>
</div>
<p className="text-neutral-600 text-xs max-w-sm mx-auto md:mx-0">
                    Empowering beginners to navigate the financial markets with confidence and discipline.
                </p>
<div className="flex justify-center md:justify-start gap-6 text-neutral-500">
<a className="hover:text-[#C7A368] transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="hover:text-[#C7A368] transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-[#C7A368] transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="18"></iconify-icon></a>
</div>
</div>
<div className="text-neutral-600 text-[10px] space-y-4 max-w-lg">
<p className="uppercase font-bold tracking-widest text-neutral-500">Disclaimer</p>
<p>
                    All content presented in this event is for educational purposes only and does not constitute financial advice. Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results.
                </p>
<p>
                    You should carefully consider your investment objectives, level of experience, and risk appetite before deciding to invest in foreign exchange. There is a possibility that you may sustain a loss of some or all of your initial investment.
                </p>
<p>
                    © 2024 SiempreInvertir. All rights reserved. | <a className="underline" href="#">Terms</a> | <a className="underline" href="#">Privacy</a> | <a className="underline" href="#">No Refunds</a>
</p>
</div>
</div>
</footer>



    </>
  );
}
