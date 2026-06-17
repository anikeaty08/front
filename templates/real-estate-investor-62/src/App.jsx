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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
      

<nav className="absolute top-0 w-full z-20 py-6 px-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="text-white font-medium tracking-tight flex items-center gap-2">
<span className="font-semibold text-xl">Fundable</span>
<span className="text-slate-400 text-sm font-normal">Investor System</span>
</div>
<a className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors" href="#">
                Get Instant Access
            </a>
</div>
</nav>

<header className="relative bg-slate-900 pt-32 pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 opacity-80 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6">
                For New Real Estate Investors
            </span>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Approach Any <br/>
                Lender <span className="text-orange-400">Like a <br/> Seasoned Pro</span>
</h1>
<p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The step-by-step system that helps new real estate investors organize everything lenders need to see. So you present yourself like a seasoned pro, even on your first deal.
                <br/><br/>
<span className="italic text-slate-500 text-base">Created by an experienced Realtor who works on both sides of the table, with direct input from real lenders.</span>
</p>
<div className="flex flex-col items-center gap-4">
<button className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-medium px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center gap-2">
                    Get Instant Access — $249
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="flex flex-wrap justify-center gap-6 mt-4 text-xs font-medium text-slate-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-500" data-lucide="check-circle-2"></i> One-time payment</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-500" data-lucide="check-circle-2"></i> Lifetime access</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-500" data-lucide="check-circle-2"></i> 3 presentations included</span>
</div>
</div>
</div>

<div className="mt-16 relative max-w-5xl mx-auto px-4 perspective-[2000px] opacity-40">
<div className="w-full h-64 bg-slate-800 rounded-t-xl border-t border-l border-r border-slate-700 shadow-2xl rotate-x-[20deg] origin-bottom scale-90 mx-auto"></div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-20"></div>
</header>

<section className="bg-slate-50 py-24 px-6 relative z-10">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Getting Financing Shouldn't Be the<br/>Hardest Part
                </h2>
<p className="text-lg text-slate-500 font-light">
                    You've done the research. You've analyzed the deal. You know the numbers work.<br/>
                    But when it comes time to approach a lender...
                </p>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm">
<div className="shrink-0 mt-1 p-1 bg-red-50 rounded-md">
<i className="w-5 h-5 text-red-500" data-lucide="alert-triangle"></i>
</div>
<p className="text-base text-slate-600">You're worried lenders won't take you seriously because you don't have a track record yet</p>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm">
<div className="shrink-0 mt-1 p-1 bg-red-50 rounded-md">
<i className="w-5 h-5 text-red-500" data-lucide="help-circle"></i>
</div>
<p className="text-base text-slate-600">You don't know what documents lenders actually need or how to organize them.</p>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm">
<div className="shrink-0 mt-1 p-1 bg-red-50 rounded-md">
<i className="w-5 h-5 text-red-500" data-lucide="frown"></i>
</div>
<p className="text-base text-slate-600">You're afraid of looking unprepared and getting rejected</p>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm">
<div className="shrink-0 mt-1 p-1 bg-red-50 rounded-md">
<i className="w-5 h-5 text-red-500" data-lucide="trending-down"></i>
</div>
<p className="text-base text-slate-600">You've seen other investors get funded, but you don't know what they did differently</p>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm">
<div className="shrink-0 mt-1 p-1 bg-red-50 rounded-md">
<i className="w-5 h-5 text-red-500" data-lucide="clock"></i>
</div>
<p className="text-base text-slate-600">You're spending more time worrying about financing than actually finding deals</p>
</div>
</div>
<div className="mt-10 bg-slate-900 rounded-lg p-6 text-center shadow-lg">
<p className="text-white text-lg font-medium">
                    It's not just about the deal. <span className="text-orange-400">It's about how you present it.</span>
</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3 block">The Solution</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Introducing the Fundable Investor System
                </h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto font-light mb-4">
                    A complete preparation system that changes how lenders see you. Go from "inexperienced beginner" to "organized, professional investor worth funding."
                </p>
<p className="text-xs text-slate-400 italic max-w-lg mx-auto">
                    Designed by a Realtor who has helped investors navigate the lending process firsthand, and shaped by feedback from the lenders who decide which investors get funded every day
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="border border-slate-100 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow bg-slate-50/50">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-600" data-lucide="book-open"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Clear Framework</h3>
<p className="text-base text-slate-500 leading-relaxed">Understand exactly how lenders evaluate borrowers, so you know what to strengthen before you apply</p>
</div>

<div className="border border-slate-100 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow bg-slate-50/50">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-600" data-lucide="file-text"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Step-by-Step Guidance</h3>
<p className="text-base text-slate-500 leading-relaxed">Organize your financial profile, deal details, and supporting documents with confidence</p>
</div>

<div className="border border-slate-100 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow bg-slate-50/50">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-600" data-lucide="wand-2"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Automated Wizard</h3>
<p className="text-base text-slate-500 leading-relaxed">Build a polished, professional borrower presentation packet you can submit to any lender</p>
</div>

<div className="border border-slate-100 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow bg-slate-50/50">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-600" data-lucide="box"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Bonus Tools</h3>
<p className="text-base text-slate-500 leading-relaxed">Extra tools to help you stay organized and confident throughout your deal, from lender prep to contractor vetting to renovation budgeting.</p>
</div>
</div>
<div className="mt-12 flex flex-wrap justify-center gap-8">
<div className="flex items-center gap-2 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-400" data-lucide="check-circle"></i> No more guessing
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-400" data-lucide="check-circle"></i> No more scrambling
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-400" data-lucide="check-circle"></i> No more showing up unprepared
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-3xl mx-auto">
<div className="flex justify-center mb-6">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="target"></i>
</div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-900 tracking-tight mb-2">
                Built For New Real Estate Investors
            </h2>
<p className="text-center text-slate-500 mb-10 text-base">The Fundable Investor System is specifically designed for investors who:</p>
<div className="space-y-3">
<div className="bg-white px-6 py-4 rounded-lg border border-slate-200 flex items-center gap-3">
<i className="w-5 h-5 text-orange-400 shrink-0" data-lucide="check-circle"></i>
<span className="text-base text-slate-600">Are pursuing Fix-and-Flip or Buy-and-Hold/BRRRR strategies</span>
</div>
<div className="bg-white px-6 py-4 rounded-lg border border-slate-200 flex items-center gap-3">
<i className="w-5 h-5 text-orange-400 shrink-0" data-lucide="check-circle"></i>
<span className="text-base text-slate-600">Will need financing from hard money lenders, private lenders, or traditional banks</span>
</div>
<div className="bg-white px-6 py-4 rounded-lg border border-slate-200 flex items-center gap-3">
<i className="w-5 h-5 text-orange-400 shrink-0" data-lucide="check-circle"></i>
<span className="text-base text-slate-600">Want to be taken seriously by lenders despite limited experience</span>
</div>
<div className="bg-white px-6 py-4 rounded-lg border border-slate-200 flex items-center gap-3">
<i className="w-5 h-5 text-orange-400 shrink-0" data-lucide="check-circle"></i>
<span className="text-base text-slate-600">Are tired of courses that only teach deal analysis but never show how to actually approach a lender prepared</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Built From the Inside Out
                </h2>
<p className="text-base text-slate-400 uppercase tracking-widest font-medium text-xs">Not theory. Not guesswork. Built from real conversations on real deals.</p>
</div>
<div className="prose prose-slate prose-lg max-w-none text-slate-500 font-light space-y-6">
<p>
                    This system was created by an experienced Realtor who has worked directly with new investors on real transactions. Through years of helping investors find and close on properties, one problem kept showing up: investors who had solid deals and the ability to execute were getting passed over by lenders. Not because of the numbers. Because of how they presented themselves.
                </p>
<p>
                    Working on both sides of the table meant hearing what lenders were saying in conversations that investors never got to be part of. The same concerns came up over and over: missing documents, disorganized financials, no clear plan for how the deal would play out. Capable investors were being seen as high-risk simply because they didn't know how to package what they had.
                </p>
<p>
                    The Fundable Investor System was built to close that gap. Every section, every question in the wizard, and every piece of guidance in this system is based on what lenders actually look for when they evaluate a borrower. Multiple lenders reviewed and contributed feedback during development to make sure the final product reflects what they want to see on their desk.
                </p>
</div>
<div className="mt-10">
<p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Proven Edge</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-orange-400" data-lucide="check-circle-2"></i> Drawn from real lender rejections/requirements
                    </li>
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-orange-400" data-lucide="check-circle-2"></i> Vetted by active hard money and private lenders
                    </li>
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-orange-400" data-lucide="check-circle-2"></i> Tailored for 0-3 deal investors like you
                    </li>
</ul>
</div>
<div className="mt-12 bg-slate-900 rounded-xl p-8 md:p-10 relative overflow-hidden">
<i className="w-12 h-12 text-slate-700 absolute top-6 left-6 opacity-50" data-lucide="quote"></i>
<div className="relative z-10 pl-8">
<p className="text-white text-xl font-medium italic mb-4 leading-relaxed">
                        "I have never seen anything like this, but it is very helpful to all parties within the transaction."
                    </p>
<div className="text-slate-400 text-sm font-medium">— Private Lender</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3 block">What's Inside</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">
                    Everything You Need to Present Like a Pro
                </h2>
<p className="text-base text-slate-500">Complete system + bonus tools included</p>
</div>
<div className="space-y-8">

<div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
<div className="shrink-0 flex flex-col items-center pt-2">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-2">
<i className="w-6 h-6 text-white" data-lucide="presentation"></i>
</div>
<span className="text-6xl font-bold text-slate-100 -mt-2 leading-none">1</span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">Funding Readiness Framework</h3>
<p className="text-xs text-blue-500 font-medium mb-3">Educational Deck</p>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                            Understand exactly how lenders evaluate borrowers. This visual framework breaks down the four pillars of fundability: Borrower Profile, Financial Strength, Deal Quality, and Exit Strategy.
                        </p>
<div className="grid md:grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> The Fundability Formula</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> High-impact behaviors</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Self-assessment tool</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Lender types comparison</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
<div className="shrink-0 flex flex-col items-center pt-2">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-2">
<i className="w-6 h-6 text-white" data-lucide="file-check"></i>
</div>
<span className="text-6xl font-bold text-slate-100 -mt-2 leading-none">2</span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">Wizard Reference Guide</h3>
<p className="text-xs text-blue-500 font-medium mb-3">Field-by-Field Companion</p>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                           Your field-by-field companion for completing the automated wizard. This guide explains exactly what information to enter, provides sample responses, and gives you pro tips for each section.
                        </p>
<div className="grid md:grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Documentation checklists</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Strategy-specific instructions</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Pro tips &amp; examples</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Team guidance</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
<div className="shrink-0 flex flex-col items-center pt-2">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-2">
<i className="w-6 h-6 text-white" data-lucide="wand-2"></i>
</div>
<span className="text-6xl font-bold text-slate-100 -mt-2 leading-none">3</span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">Automated Borrower Packet Wizard</h3>
<p className="text-xs text-blue-500 font-medium mb-3">The Heart of the System</p>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                            Answer the guided questions, and the wizard automatically generates a polished, professional Offering Memorandum. This is the exact document lenders want to see.
                        </p>
<div className="grid md:grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Deal Summary and Financials</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Investment Rationale</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Borrower Profile</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Risk Mitigation Plan</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Market Comps &amp; ARV Support</div>
<div className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-400" data-lucide="check"></i> Exit Strategy</div>
</div>
</div>
</div>
</div>
<div className="mt-8 bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-center text-sm text-slate-500">
                Your purchase includes <span className="font-semibold text-slate-700">3 complete presentations</span>. Need more? Add additional packets anytime.
            </div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">
                Bonus Tools <span className="text-orange-400">(Included Free)</span>
</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="border border-dashed border-slate-300 rounded-xl p-6 flex gap-4">
<div className="shrink-0 w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-yellow-600" data-lucide="file-text"></i>
</div>
<div>
<span className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1 block">Bonus</span>
<h4 className="font-semibold text-slate-900 text-lg mb-1">Investor Document Checklist</h4>
<p className="text-sm text-slate-500">Every document lenders typically request, organized by category</p>
</div>
</div>

<div className="border border-dashed border-slate-300 rounded-xl p-6 flex gap-4">
<div className="shrink-0 w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-yellow-600" data-lucide="message-square"></i>
</div>
<div>
<span className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1 block">Bonus</span>
<h4 className="font-semibold text-slate-900 text-lg mb-1">Lender Conversation Prep Guide</h4>
<p className="text-sm text-slate-500">Know exactly what to say in lender conversations</p>
</div>
</div>

<div className="border border-dashed border-slate-300 rounded-xl p-6 flex gap-4">
<div className="shrink-0 w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-yellow-600" data-lucide="shield-check"></i>
</div>
<div>
<span className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1 block">Bonus</span>
<h4 className="font-semibold text-slate-900 text-lg mb-1">Contractor Vetting Guide</h4>
<p className="text-sm text-slate-500">Interview questions, red flags, and contract essentials</p>
</div>
</div>

<div className="border border-dashed border-slate-300 rounded-xl p-6 flex gap-4">
<div className="shrink-0 w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-yellow-600" data-lucide="calculator"></i>
</div>
<div>
<span className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1 block">Bonus</span>
<h4 className="font-semibold text-slate-900 text-lg mb-1">Renovation Cost Estimator</h4>
<p className="text-sm text-slate-500">Estimate and organize your renovation budget by category</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg shadow-lg transition-all inline-flex items-center gap-2">
                    Get Instant Access — $249
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-100">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<span className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3 block">FAQ</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                    Frequently Asked Questions
                </h2>
</div>
<div className="space-y-4">
<details className="group border-b border-slate-100 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        I haven't done any deals yet. Will this still help me?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-base text-slate-500 font-light leading-relaxed">
                        Absolutely. This system was designed specifically for new investors. It provides the structure and terminology you need to look experienced, even if you're just starting.
                    </p>
</details>
<details className="group border-b border-slate-100 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        What types of lenders does this work for?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-base text-slate-500 font-light leading-relaxed">
                        It works for hard money lenders, private money lenders, and local bank commercial departments. The fundamentals of a good borrower package are universal.
                    </p>
</details>
<details className="group border-b border-slate-100 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        What investment strategies does this support?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-base text-slate-500 font-light leading-relaxed">
                        The primary focus is on Fix-and-Flip and BRRRR (Buy, Rehab, Rent, Refinance, Repeat) strategies that involve renovation and value-add components.
                    </p>
</details>
<details className="group border-b border-slate-100 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        What do I get with my purchase?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-base text-slate-500 font-light leading-relaxed">
                        You get lifetime access to the educational materials, the automated wizard, 3 presentation credits (generates the PDF), and all 4 bonus tools/checklists.
                    </p>
</details>
<details className="group border-b border-slate-100 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        How long does it take to complete a presentation?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-base text-slate-500 font-light leading-relaxed">
                        If you have your deal numbers ready, you can complete the wizard in about 20-30 minutes.
                    </p>
</details>
<details className="group border-b border-slate-100 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        Who created this system?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-base text-slate-500 font-light leading-relaxed">
                        A licensed Realtor experienced in investment transactions, developed with direct feedback from active lenders.
                    </p>
</details>
<details className="group border-b border-slate-100 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        What's your refund policy?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-base text-slate-500 font-light leading-relaxed">
                        We offer a 30-day satisfaction guarantee. If you don't feel the system helps you present yourself more professionally, we'll refund your purchase.
                    </p>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-32 pb-12 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                Stop Worrying About Financing. <span className="text-orange-400">Start <br/> Impressing Lenders.</span>
</h2>
<p className="text-slate-400 text-lg mb-12 font-light max-w-2xl mx-auto">
                Get the complete system to organize your documents, understand lender expectations, and present yourself like the professional investor you want to be.
            </p>

<div className="bg-white rounded-2xl shadow-2xl max-w-md mx-auto p-8 md:p-10 relative overflow-hidden">
<h3 className="text-slate-900 font-semibold text-lg mb-1">Fundable Investor System</h3>
<div className="flex justify-center items-baseline my-4">
<span className="text-5xl font-bold text-slate-900 tracking-tight">$249</span>
</div>
<p className="text-xs text-slate-500 mb-8 border-b border-slate-100 pb-6">One-time payment • Lifetime access • 3 presentations included</p>
<div className="text-left space-y-3 mb-8">
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Here's everything you get:</p>
<div className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" data-lucide="check"></i> Funding Readiness Framework (Educational Deck)
                    </div>
<div className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" data-lucide="check"></i> Wizard Reference Guide
                    </div>
<div className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" data-lucide="check"></i> Automated Borrower Packet Wizard (3 presentations)
                    </div>
<div className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" data-lucide="check"></i> BONUS: Investor Document Checklist
                    </div>
<div className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" data-lucide="check"></i> BONUS: Lender Conversation Prep Guide
                    </div>
<div className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" data-lucide="check"></i> BONUS: Contractor Vetting Guide
                    </div>
<div className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" data-lucide="check"></i> BONUS: Renovation Cost Estimator
                    </div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg shadow-md transition-colors flex justify-center items-center gap-2">
                    Get Instant Access Now
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-24 text-slate-500 text-xs text-center border-t border-slate-800 pt-8">
<p className="font-medium text-slate-400 mb-2">Fundable Investor System</p>
<p className="mb-4">© 2024 Fundable Investor System. All rights reserved.</p>
<div className="flex justify-center gap-6">
<a className="hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
