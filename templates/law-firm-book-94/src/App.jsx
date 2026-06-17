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
      

<div className="bg-[#2C2420] text-[#EBE9E1] text-center py-3 px-4">
<p className="text-xs md:text-sm font-medium tracking-wide uppercase">Attention Lawyers &amp; Law Firm Owners</p>
</div>

<header className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-64 h-64 bg-[#D8C3A5] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="absolute top-40 right-10 w-72 h-72 bg-[#8E8D8A] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">

<div className="flex justify-center mb-8">
<div className="glass-panel px-6 py-2 rounded-full flex items-center gap-2">
<i className="w-5 h-5 text-stone-700" data-lucide="scale"></i>
<span className="serif text-lg font-medium tracking-tight text-stone-800">Lawking Advocacy</span>
</div>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-[#2C2420] tracking-tight leading-[1.1]">
                Grab the Exact Blueprint Law Firm Owners Are Using to <span className="italic text-stone-600">Scale Fast</span> and Win Back Their Time
            </h1>
<p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Get the Audiobook &amp; Ebook <strong className="font-semibold text-stone-800">FREE</strong> — or pay just $7.95 shipping and receive the printed book at your doorstep.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="group bg-transparent border border-stone-400 text-stone-700 px-8 py-4 rounded-xl font-medium hover:bg-stone-200 transition-all flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="download"></i>
<span>Get Free Audiobook &amp; eBook</span>
</button>
<button className="group bg-[#2C2420] text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2">
<span>I Want The Physical Book</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
<p className="text-sm text-stone-500 pt-2">Plus ALL the Bonuses. Just Cover $7.95 for Shipping</p>

<div className="pt-10 border-t border-stone-300/50 mt-10">
<p className="text-xs uppercase tracking-widest text-stone-500 mb-6 font-medium">Recognized By</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale">
<div className="h-8 flex items-center font-bold text-xl text-stone-800">LAW.COM</div>
<div className="h-8 flex items-center font-bold text-xl text-stone-800">Forbes</div>
<div className="h-8 flex items-center font-bold text-xl text-stone-800">ABA Journal</div>
<div className="h-8 flex items-center font-bold text-xl text-stone-800">Attorney at Law</div>
</div>
</div>
</div>
</header>

<section className="py-16 px-4 relative z-10">
<div className="max-w-5xl mx-auto">
<h2 className="text-center text-2xl font-medium text-[#2C2420] mb-10">Choose which version you want ⬇️</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full border-t-4 border-transparent hover:border-stone-300 transition-all">
<div className="mb-6">
<span className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-xs font-medium tracking-wide">DIGITAL ONLY</span>
<h3 className="text-2xl font-semibold mt-4 mb-2">Get the Free Audiobook &amp; Ebook</h3>
<p className="text-stone-500 text-sm">Instant access to the blueprint.</p>
</div>
<div className="space-y-4 mb-8 flex-grow">
<p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Here's Everything You'll Get...</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-stone-700">
<i className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span><span className="font-semibold">FREE Ebook</span> of the Law Firm Growth Accelerator Book ($997 Value)</span>
</li>
<li className="flex items-start gap-3 text-stone-700">
<i className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span><span className="font-semibold">FREE Audiobook</span> of the Law Firm Growth Accelerator Book ($197 Value)</span>
</li>
</ul>
</div>
<div className="pt-6 border-t border-stone-200">
<div className="flex justify-between items-end mb-4">
<div className="text-sm text-stone-500 line-through">Value: $1,194.00</div>
<div className="text-right">
<div className="text-xs text-stone-500">Limited Time</div>
<div className="text-3xl font-semibold text-[#2C2420]">FREE</div>
</div>
</div>
<button className="w-full bg-stone-200 hover:bg-stone-300 text-stone-800 py-3 rounded-lg font-medium transition-colors">
                            Give Me The Free Version
                        </button>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full border-t-4 border-[#2C2420] shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#2C2420] text-white text-[10px] px-3 py-1 rounded-bl-lg uppercase font-medium tracking-wider">Most Popular</div>
<div className="mb-6">
<span className="bg-[#D8C3A5]/30 text-[#5D4E3F] px-3 py-1 rounded-full text-xs font-medium tracking-wide">PHYSICAL + BONUSES</span>
<h3 className="text-2xl font-semibold mt-4 mb-2">Get a Copy Shipped</h3>
<p className="text-stone-500 text-sm">The full physical experience + digital access.</p>
</div>
<div className="space-y-4 mb-8 flex-grow">
<p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Here's Everything You'll Get...</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-stone-800">
<i className="w-5 h-5 text-[#2C2420] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span><span className="font-semibold">PHYSICAL COPY</span> of the Law Firm Growth Accelerator Book shipped to you ($47 Value)</span>
</li>
<li className="flex items-start gap-3 text-stone-700">
<i className="w-5 h-5 text-[#2C2420] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span><span className="font-semibold">FREE Ebook</span> version ($997 Value)</span>
</li>
<li className="flex items-start gap-3 text-stone-700">
<i className="w-5 h-5 text-[#2C2420] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span><span className="font-semibold">FREE Audiobook</span> version ($197 Value)</span>
</li>
</ul>
</div>
<div className="pt-6 border-t border-stone-200">
<div className="flex justify-between items-end mb-4">
<div className="text-sm text-stone-500 line-through">Value: $1,241.00</div>
<div className="text-right">
<div className="text-xs text-stone-500">Limited Time</div>
<div className="text-3xl font-semibold text-[#2C2420]">$7.95</div>
</div>
</div>
<button className="w-full bg-[#2C2420] hover:bg-stone-800 text-white py-3 rounded-lg font-medium transition-colors shadow-lg shadow-stone-900/10">
                            Give Me A Physical Copy
                        </button>
<p className="text-center text-xs text-stone-500 mt-3">Just Cover $7.95 for Shipping</p>
</div>
</div>
</div>

<div className="mt-8 glass-panel p-6 rounded-xl flex gap-4 items-start max-w-3xl mx-auto">
<div className="p-2 bg-stone-200 rounded-lg shrink-0">
<i className="w-6 h-6 text-[#2C2420]" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-1">100% Money Back Guarantee</h4>
<p className="text-sm text-stone-600 leading-relaxed">
                        This book is free, all you have to do is cover shipping. However, if after reading the book you don't like it for any reason, send us an email and we will refund your shipping and handling fees, but you can still keep the book!
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 bg-white/40 backdrop-blur-sm border-t border-white/60">
<div className="max-w-2xl mx-auto space-y-8 text-lg text-stone-700 leading-relaxed">
<div className="text-center space-y-4 mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-[#2C2420] tracking-tight">
                    How Do You Grow Your Firm Without Sacrificing Your Sanity, Your Health, and Your Family?
                </h2>
<div className="flex items-center justify-center gap-3 text-sm font-medium text-stone-500">
<span className="h-px w-8 bg-stone-300"></span>
<span>From The Desk of [Your Name]</span>
<span className="text-stone-300">•</span>
<span className="text-stone-400">[Your Location]</span>
<span className="h-px w-8 bg-stone-300"></span>
</div>
</div>
<div className="p-4 bg-red-50 border-l-4 border-red-800 text-stone-900 text-base font-medium rounded-r-lg shadow-sm">
                ALERT: If you're an ambitious, forward-thinking lawyer... READ THIS CAREFULLY.
            </div>
<p>You're about to discover the fastest path to growing your law firm—<span className="font-semibold">without</span> the crushing stress and endless sacrifice you've come to expect.</p>
<p>After working with law firm owners for over a decade, we've witnessed the same painful pattern repeat itself hundreds of times.</p>
<h3 className="text-2xl font-semibold text-[#2C2420] pt-6">Tell us if this sounds familiar…</h3>
<p>It's Saturday afternoon.</p>
<p>Instead of being on the sidelines cheering at your kid's soccer game, you're hunched over your desk, buried in case files, prepping for Monday's hearing.</p>
<p>A wave of sadness washes over you as you realize you can't remember your last <span className="italic">real</span> vacation.</p>
<p>You know the kind—where you actually put away your phone and laptop and just <span className="italic">be present</span> with your spouse and kids.</p>
<p>But how could you possibly do that?</p>
<p>Your team can't be fully trusted to run things without you. They're competent enough not to get fired… but that's about where it ends.</p>
<h3 className="text-xl font-semibold text-[#2C2420] pt-6">Then there's the financial pressure.</h3>
<p>In the early days, you worried about getting enough clients just to stay afloat.</p>
<p>Now you're getting leads—but the quality is wildly inconsistent.</p>
<ul className="space-y-3 pl-4 border-l border-stone-300 text-stone-600 italic my-6">
<li>Some prospects are ideal clients you'd love to work with.</li>
<li>Others are absolute nightmares—blowing up your phone, sending texts at midnight, emailing demands about their case every few hours.</li>
</ul>
<p>So your revenue plateaus.</p>
<p>Which means you can't give yourself—or your loyal staff—the raises you know they've earned.</p>
<p>And with inflation eating away at your margins, you're technically <span className="italic">losing</span> money.</p>
<div className="glass-panel p-6 rounded-xl my-8 italic text-stone-600 border-l-4 border-[#8E8D8A]">
<p className="font-medium text-lg text-stone-800 mb-2">Slowly, the freedom you dreamed about when you opened your firm…</p>
<p>…has become a trap. A quiet dread that follows you everywhere.</p>
<div className="mt-4 text-base space-y-1">
<p>You lie awake at 2 AM, wondering:</p>
<p className="text-stone-500">"What happens if my top associate leaves?"</p>
<p className="text-stone-500">"What if my biggest referral source dries up?"</p>
<p className="text-stone-500">"How long can I keep running at this pace before something breaks?"</p>
</div>
</div>
<h2 className="text-2xl md:text-3xl font-semibold text-[#2C2420] pt-8 tracking-tight">The Real Reason You're Stuck in This Reality?</h2>
<h3 className="text-xl font-medium text-stone-800 pt-2">Law School Trained You to Be an Exceptional Lawyer—NOT a Successful Law Firm Owner.</h3>
<p>Critical thinking. Legal analysis. Advocacy.</p>
<p>That's what you mastered in law school, and you've only sharpened those skills in practice.</p>
<p><span className="font-semibold text-stone-900">As a lawyer, you're exceptional.</span> But that excellence has created an unexpected trap.</p>
<p>You refuse to sacrifice client results—so you won't hand off cases to just anyone. You—and <span className="italic">only</span> you—can handle the complex work your clients need.</p>
<p>But since you're also responsible for managing every other aspect of the firm... <span className="font-semibold text-red-700">You're completely overwhelmed.</span></p>
<div className="bg-stone-100 p-6 rounded-lg border border-stone-200 text-center space-y-2">
<p className="font-medium text-stone-800">This is why 95% of lawyers grow revenues by only 5-10% per year—if they grow at all.</p>
<p className="text-sm text-stone-600">Research shows that nearly <span className="font-semibold text-stone-800">50% of attorneys are living paycheck to paycheck</span>… While working harder than they ever have before.</p>
</div>
<h2 className="text-2xl md:text-3xl font-semibold text-[#2C2420] pt-8 tracking-tight">But for the Lawyers Who've Discovered the "Law Firm Growth Acceleration Model"?</h2>
<p>They're adding <span className="font-semibold text-[#2C2420]">$1M, $2M, even $5M+</span> to their firms in record time…</p>
<p><span className="font-semibold">All while reclaiming their freedom and being present for their families.</span></p>
<p>They've learned how to:</p>
<ul className="space-y-3 mt-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-700 shrink-0 mt-1" data-lucide="check-circle"></i>
<span><strong className="font-semibold text-stone-800">Attract premium clients</strong> who respect their time and pay without haggling</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-700 shrink-0 mt-1" data-lucide="check-circle"></i>
<span><strong className="font-semibold text-stone-800">Build systems</strong> that run without their constant oversight</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-700 shrink-0 mt-1" data-lucide="check-circle"></i>
<span><strong className="font-semibold text-stone-800">Delegate with confidence</strong> to a team that actually performs</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-700 shrink-0 mt-1" data-lucide="check-circle"></i>
<span><strong className="font-semibold text-stone-800">Scale revenue</strong> without scaling their stress</span>
</li>
</ul>
<h3 className="text-xl font-semibold text-[#2C2420] pt-8 border-t border-stone-200">Here's How You Can Join Them</h3>
<p>We've put together a comprehensive resource that reveals the exact framework these successful attorneys are using to escape the time-for-money trap and build firms that generate wealth <span className="italic">and</span> freedom.</p>

<div className="flex flex-col gap-4 pt-6">
<button className="w-full bg-stone-100 border border-stone-300 hover:bg-stone-200 text-stone-800 p-4 rounded-xl font-medium transition-all group text-center">
<span className="flex items-center justify-center gap-2 text-lg">
                        GIVE ME THE FREE VERSION
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
<span className="block text-xs text-stone-500 font-normal mt-1">Includes Audiobook, eBook, &amp; Bonus Resources</span>
</button>
<button className="w-full bg-[#2C2420] text-white p-4 rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-stone-800 transition-all group text-center">
<span className="flex items-center justify-center gap-2 text-lg">
                        I WANT A PHYSICAL COPY MAILED TO ME
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
<span className="block text-xs text-stone-300 font-normal mt-1">Get the Physical Book, Audiobook, eBook + Bonus Materials. Just cover $7.95 shipping.</span>
</button>
</div>
<div className="pt-8 text-center">
<p className="text-lg font-medium text-stone-800">The firm you dreamed of building is still possible.</p>
<p className="text-stone-600 mt-2">But only if you stop running it like an overworked employee—and start leading it like an owner.</p>
<p className="font-serif italic text-2xl text-[#2C2420] mt-6">Your next chapter starts here.</p>
</div>
</div>
</section>

<section className="py-20 px-4 relative overflow-hidden bg-stone-50">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold text-center text-[#2C2420] mb-16 tracking-tight">Real Results from Real Attorneys</h2>

<div className="glass-panel rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-10 items-center">
<div className="md:w-1/2 space-y-4">
<div className="inline-flex items-center gap-2 bg-stone-200 px-3 py-1 rounded-full text-xs font-semibold text-stone-700 uppercase tracking-wide">
<i className="w-3 h-3" data-lucide="trending-up"></i> Case Study
                    </div>
<h3 className="text-3xl font-semibold text-[#2C2420]">Marco Flores</h3>
<p className="text-lg text-stone-600">
                        At the end of 2022, Marco’s firm was stuck doing just over $1.5M. He was working 80+ hour weeks. He was close to burnout.
                    </p>
<div className="p-4 bg-white/50 rounded-lg border border-white/60">
<p className="font-medium text-stone-800 mb-2">After The Accelerator:</p>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Doubled revenue to $3M+</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Pays for cars in CASH</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Put 40% down on dream house</li>
</ul>
</div>
</div>
<div className="md:w-1/2 relative h-64 w-full bg-[#D8C3A5] rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
<span className="text-[#2C2420]/40 font-serif text-6xl italic">M.F.</span>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-10 items-center">
<div className="md:w-1/2 space-y-4">
<div className="inline-flex items-center gap-2 bg-stone-200 px-3 py-1 rounded-full text-xs font-semibold text-stone-700 uppercase tracking-wide">
<i className="w-3 h-3" data-lucide="trending-up"></i> Case Study
                    </div>
<h3 className="text-3xl font-semibold text-[#2C2420]">Diana Cachaya</h3>
<p className="text-lg text-stone-600">
                        Diana's firm was constantly in the RED. Every decision had to go through her. She was overwhelmed.
                    </p>
<div className="p-4 bg-white/50 rounded-lg border border-white/60">
<p className="font-medium text-stone-800 mb-2">The Transformation:</p>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Found extra $500K without new hires</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Works only 40-45 hours/week</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> On track to hit $3M (3x revenue)</li>
</ul>
</div>
</div>
<div className="md:w-1/2 relative h-64 w-full bg-[#8E8D8A] rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
<span className="text-white/40 font-serif text-6xl italic">D.C.</span>
</div>
</div>
<p className="text-center mt-10 text-stone-500 italic">Adding $1,000,000+ while getting more free time is TYPICAL for lawyers using this formula.</p>
</div>
</section>

<section className="py-20 px-4">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-[#2C2420] tracking-tight mb-4">What Is This 4-Step "Law Firm Growth Acceleration Model"?</h2>
<p className="text-stone-600 max-w-2xl mx-auto">It solves the 4 biggest problems lawyers face:</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-red-600" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Inconsistent Marketing Results</h3>
<p className="text-stone-600 text-sm">Struggling to get enough high-quality leads consistently.</p>
</div>

<div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-orange-600" data-lucide="filter"></i>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Rocky Intake System</h3>
<p className="text-stone-600 text-sm">You know good leads are slipping through the cracks and not signing up.</p>
</div>

<div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-blue-600" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Hiring Struggles</h3>
<p className="text-stone-600 text-sm">You can’t seem to find ROCKSTAR employees you can trust.</p>
</div>

<div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-stone-200 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-stone-700" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Unpredictable Profit Margins</h3>
<p className="text-stone-600 text-sm">You get a ton of revenue but wonder where your money went at the end of the year.</p>
</div>
</div>
<div className="mt-12 text-center max-w-3xl mx-auto">
<p className="text-lg text-stone-800 font-medium mb-6">You Can PERMANENTLY Solve All 4 Problems With The Brand-New "Law Firm Growth Accelerator" Book!</p>
<div className="glass-panel inline-block px-8 py-4 rounded-xl text-[#2C2420] font-semibold border border-[#D8C3A5]">
                    Average client grows revenue by a minimum of 81%
                </div>
</div>
</div>
</section>

<section className="py-16 bg-stone-100 border-y border-stone-200">
<div className="max-w-5xl mx-auto px-4">
<h2 className="text-2xl font-semibold text-center text-[#2C2420] mb-12">Here's Why The NEW Book Is So Powerful...</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
<div className="flex gap-4">
<div className="shrink-0 mt-1"><i className="w-5 h-5 text-[#8E8D8A]" data-lucide="book-open"></i></div>
<div>
<h4 className="font-semibold text-stone-900">Attract High-Quality Leads</h4>
<p className="text-sm text-stone-600 mt-1">Effortlessly attract leads on Google, Facebook, YouTube. [Chapter 5]</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 mt-1"><i className="w-5 h-5 text-[#8E8D8A]" data-lucide="video"></i></div>
<div>
<h4 className="font-semibold text-stone-900">Killer Video Scripts</h4>
<p className="text-sm text-stone-600 mt-1">Position your firm as the #1 "go-to" law firm. [Chapter 8]</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 mt-1"><i className="w-5 h-5 text-[#8E8D8A]" data-lucide="phone-call"></i></div>
<div>
<h4 className="font-semibold text-stone-900">"Auto-Pilot" Intake</h4>
<p className="text-sm text-stone-600 mt-1">Sign up 35-50% more clients without being on the phone 24/7. [Chapter 6]</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 mt-1"><i className="w-5 h-5 text-[#8E8D8A]" data-lucide="briefcase"></i></div>
<div>
<h4 className="font-semibold text-stone-900">Run Like a CEO</h4>
<p className="text-sm text-stone-600 mt-1">Transform into a law firm CEO and run your practice like a Fortune 500. [Chapter 3]</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 mt-1"><i className="w-5 h-5 text-[#8E8D8A]" data-lucide="shield-alert"></i></div>
<div>
<h4 className="font-semibold text-stone-900">Pre-Screen Leads</h4>
<p className="text-sm text-stone-600 mt-1">NEVER deal with nightmare clients again. [Chapter 9]</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 mt-1"><i className="w-5 h-5 text-[#8E8D8A]" data-lucide="heart-handshake"></i></div>
<div>
<h4 className="font-semibold text-stone-900">Hire Rockstars</h4>
<p className="text-sm text-stone-600 mt-1">Get top-notch employees begging to work at your firm. [Chapter 10]</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="font-medium text-stone-800 mb-2">Works for ALL Law Firms: Criminal Defense, PI, Family, Bankruptcy, Estate Planning, Immigration, Tax &amp; more.</p>
</div>
</div>
</section>

<section className="py-20 px-4">
<div className="max-w-4xl mx-auto text-center space-y-8">
<h2 className="text-4xl font-semibold text-[#2C2420] serif">Send Us Your Address…</h2>
<p className="text-xl text-stone-600 max-w-2xl mx-auto">
                We'd like to rush a FREE copy of our new book to your doorstep ASAP! Just pay for the shipping.
            </p>
<div className="grid md:grid-cols-2 gap-6 mt-10 text-left max-w-3xl mx-auto">
<button className="glass-panel p-6 rounded-xl hover:bg-stone-50 transition-colors group flex items-center justify-between">
<div>
<div className="font-semibold text-stone-900 group-hover:text-[#2C2420]">Give Me The Free Version</div>
<div className="text-xs text-stone-500 mt-1">Includes Audiobook, eBook, &amp; AI Bonus</div>
</div>
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-right"></i>
</button>
<button className="bg-[#2C2420] text-white p-6 rounded-xl shadow-xl hover:bg-stone-800 transition-colors flex items-center justify-between">
<div>
<div className="font-semibold">I Want A Copy Mailed To Me</div>
<div className="text-xs text-stone-300 mt-1">Physical Copy + All Bonuses. Just $7.95 shipping.</div>
</div>
<i className="w-5 h-5 text-white" data-lucide="chevron-right"></i>
</button>
</div>

<div className="pt-8 border-t border-stone-300 mt-12 max-w-2xl mx-auto">
<div className="flex items-center justify-center gap-2 mb-2 text-[#2C2420] font-medium">
<i className="w-4 h-4" data-lucide="lock"></i>
<span>100% Money Back Guarantee</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed">
                    If you don't like it, we refund your shipping fees and you keep the book. No questions asked.
                </p>
</div>
</div>
</section>

<footer className="bg-stone-200 py-12 text-center">
<div className="max-w-7xl mx-auto px-4">
<div className="glass-panel inline-block px-4 py-2 rounded-full mb-6">
<span className="serif font-medium text-stone-700">Lawking Advocacy</span>
</div>
<p className="text-xs text-stone-500">© 2023 Law Firm Growth Accelerator. All rights reserved.</p>
<div className="flex justify-center gap-4 mt-4 text-xs text-stone-500">
<a className="hover:underline" href="#">Privacy Policy</a>
<a className="hover:underline" href="#">Terms of Service</a>
<a className="hover:underline" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
