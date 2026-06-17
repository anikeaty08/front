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
      

<header className="sticky top-0 z-50 bg-white border-b border-[#EAEAEA]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="font-medium tracking-tighter text-xl uppercase">Brief</div>

<nav className="hidden md:flex space-x-6 h-full text-sm text-[#777777]">
<a className="h-full flex items-center border-b-2 border-[#CDA996] text-black font-medium" href="#">For You</a>
<a className="h-full flex items-center border-b-2 border-transparent hover:text-black transition-colors duration-150" href="#">World</a>
<a className="h-full flex items-center border-b-2 border-transparent hover:text-black transition-colors duration-150" href="#">India</a>
<a className="h-full flex items-center border-b-2 border-transparent hover:text-black transition-colors duration-150" href="#">Business</a>
<a className="h-full flex items-center border-b-2 border-transparent hover:text-black transition-colors duration-150" href="#">Technology</a>
<a className="h-full flex items-center border-b-2 border-transparent hover:text-black transition-colors duration-150" href="#">Science</a>
<a className="h-full flex items-center border-b-2 border-transparent hover:text-black transition-colors duration-150" href="#">Sports</a>
</nav>

<div className="flex items-center space-x-4 text-[#444444]">
<button aria-label="Saved Articles" className="hover:text-black transition-colors duration-150 flex items-center">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button aria-label="Profile" className="hover:text-black transition-colors duration-150 flex items-center">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button aria-label="Menu" className="md:hidden hover:text-black transition-colors duration-150 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<section className="lg:col-span-4">
<h2 className="text-xl tracking-tight font-medium mb-6">Today in 2 Minutes</h2>
<div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-4 flex flex-col gap-4 shadow-sm">

<div className="flex items-start gap-4 pb-4 border-b border-[#EAEAEA] last:border-0 last:pb-0">
<span className="text-[#CDA996] font-medium text-sm mt-0.5">1</span>
<div>
<h3 className="text-base font-medium text-black">Global markets stabilize after recent tech sector volatility</h3>
<p className="text-sm text-[#777777] mt-1">Tech stocks rebounded 2% following strong earnings reports from major semiconductor manufacturers.</p>
</div>
</div>

<div className="flex items-start gap-4 pb-4 border-b border-[#EAEAEA] last:border-0 last:pb-0">
<span className="text-[#CDA996] font-medium text-sm mt-0.5">2</span>
<div>
<h3 className="text-base font-medium text-black">New climate accord reached in Geneva</h3>
<p className="text-sm text-[#777777] mt-1">Delegates agreed on a framework to reduce maritime shipping emissions by 30% before the end of the decade.</p>
</div>
</div>

<div className="flex items-start gap-4 pb-4 border-b border-[#EAEAEA] last:border-0 last:pb-0">
<span className="text-[#CDA996] font-medium text-sm mt-0.5">3</span>
<div>
<h3 className="text-base font-medium text-black">Breakthrough in solid-state battery research</h3>
<p className="text-sm text-[#777777] mt-1">Researchers at MIT published findings demonstrating a new electrolyte material that prevents dendrite formation.</p>
</div>
</div>
</div>
</section>

<section className="lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl tracking-tight font-medium">Your Briefing</h2>
<span className="text-sm text-[#777777]">Updated 12m ago</span>
</div>
<div className="flex flex-col gap-8">

<article className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-6 transition-colors duration-150 ease-out hover:bg-[#F7EFEA] group relative shadow-sm">
<button aria-label="Save Article" className="absolute top-6 right-6 text-[#AAAAAA] hover:text-[#CDA996] transition-colors duration-150 z-10">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<div className="text-xs uppercase text-[#777777] tracking-wider mb-2">Technology</div>
<a className="block group-hover:cursor-pointer" href="#article-view">
<h3 className="text-lg font-medium tracking-tight mb-2 pr-10 text-black">AI Regulation Framework Proposed by European Commission</h3>
<p className="text-base text-[#444444] mb-4">A new draft proposal outlines strict requirements for high-risk artificial intelligence systems, aiming to protect fundamental rights while fostering technological innovation across member states.</p>
</a>
<ul className="text-sm text-[#444444] space-y-2 mb-5">
<li className="flex items-start gap-2">
<span className="text-[#CDA996] mt-0.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon></span>
<span>Applies to systems used in critical infrastructure, law enforcement, and employment.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#CDA996] mt-0.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon></span>
<span>Fines for non-compliance could reach up to 6% of a company's global annual revenue.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#CDA996] mt-0.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon></span>
<span>Specific exemptions are included for open-source models under certain research conditions.</span>
</li>
</ul>
<div className="flex items-center text-sm text-[#AAAAAA] pt-4 border-t border-[#EAEAEA]">
<span className="font-medium text-[#777777]">Reuters, Tech Policy</span>
<span className="mx-2">•</span>
<span>2h ago</span>
</div>
</article>

<article className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-6 transition-colors duration-150 ease-out hover:bg-[#F7EFEA] group relative shadow-sm">
<button aria-label="Save Article" className="absolute top-6 right-6 text-[#AAAAAA] hover:text-[#CDA996] transition-colors duration-150 z-10">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<div className="text-xs uppercase text-[#777777] tracking-wider mb-2">Business</div>
<a className="block group-hover:cursor-pointer" href="#article-view">
<h3 className="text-lg font-medium tracking-tight mb-2 pr-10 text-black">Central Banks Signal Pause on Interest Rate Hikes</h3>
<p className="text-base text-[#444444] mb-4">Following months of aggressive monetary tightening, major central banks indicate a holding pattern as core inflation measures show consistent signs of cooling in Western economies.</p>
</a>
<ul className="text-sm text-[#444444] space-y-2 mb-5">
<li className="flex items-start gap-2">
<span className="text-[#CDA996] mt-0.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon></span>
<span>The Federal Reserve left rates unchanged at 5.25%-5.50% for the third consecutive meeting.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#CDA996] mt-0.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon></span>
<span>European Central Bank officials suggest current levels are sufficient to reach target inflation.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#CDA996] mt-0.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon></span>
<span>Bond yields dropped sharply in response to the synchronized guidance shift.</span>
</li>
</ul>
<div className="flex items-center text-sm text-[#AAAAAA] pt-4 border-t border-[#EAEAEA]">
<span className="font-medium text-[#777777]">Financial Times, Bloomberg</span>
<span className="mx-2">•</span>
<span>4h ago</span>
</div>
</article>
</div>
</section>
</main>

<div className="max-w-7xl mx-auto w-full border-t border-[#EAEAEA] my-12" id="article-view"></div>

<article className="max-w-5xl mx-auto px-6 pb-24">

<header className="mb-8">
<div className="text-xs uppercase text-[#777777] tracking-wider mb-4">Technology</div>
<h1 className="text-2xl font-medium tracking-tight text-black mb-4">AI Regulation Framework Proposed by European Commission</h1>
<p className="text-lg text-[#444444] mb-6 leading-relaxed">A new draft proposal outlines strict requirements for high-risk artificial intelligence systems, aiming to protect fundamental rights while fostering technological innovation across member states.</p>
<div className="flex flex-wrap items-center text-sm text-[#777777] gap-x-4 gap-y-2">
<span className="text-black font-medium">By Editorial Board</span>
<span>•</span>
<span>October 24, 2023</span>
<span>•</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> 4 min read</span>
</div>
</header>

<figure className="mb-8">
<div className="w-full aspect-[21/9] bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl flex items-center justify-center text-[#AAAAAA]">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<figcaption className="text-xs text-[#777777] mt-2 text-right">Illustration of network nodes. Source: Getty Images</figcaption>
</figure>

<div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-6 mb-10 shadow-sm">
<h3 className="text-sm font-medium uppercase tracking-wider text-[#777777] mb-4">Why it matters</h3>
<ul className="text-base text-[#444444] space-y-3">
<li className="flex items-start gap-3">
<span className="text-[#CDA996] mt-0.5"><iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon></span>
<span>This marks the world's first comprehensive legal framework specifically targeting artificial intelligence.</span>
</li>
<li className="flex items-start gap-3">
<span className="text-[#CDA996] mt-0.5"><iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon></span>
<span>Companies operating within the EU will need to undergo conformity assessments before launching high-risk products.</span>
</li>
</ul>
</div>

<div className="prose prose-lg max-w-none text-[#000000] text-lg leading-relaxed space-y-6">
<p>The European Commission has formally introduced its highly anticipated Artificial Intelligence Act, a sweeping legislative proposal intended to govern the development and deployment of AI systems. The framework adopts a risk-based approach, categorizing AI applications based on their potential to cause harm to citizens' rights and safety.</p>
<p>Under the proposed rules, AI systems deemed to pose an "unacceptable risk," such as social scoring systems or subliminal manipulation techniques, would be strictly banned within the European Union. The core focus of the legislation, however, rests on systems classified as "high-risk."</p>
<h2 className="text-xl font-medium tracking-tight mt-10 mb-4 text-black">Defining High-Risk Systems</h2>
<p>High-risk categories include AI utilized in critical infrastructure, educational access, employment and human resources, and law enforcement. Developers of these systems will be subjected to rigorous obligations prior to market entry.</p>
<p>These requirements mandate the implementation of adequate risk assessment and mitigation systems, the use of high-quality datasets to minimize discriminatory outcomes, logging of activity to ensure traceability, and detailed documentation providing all necessary information on the system and its purpose.</p>
<p>Furthermore, human oversight measures must be integrated into high-risk systems to prevent automation bias and ensure human intervention remains possible. The framework also demands a high level of robustness, security, and accuracy throughout the system's lifecycle.</p>
<h2 className="text-xl font-medium tracking-tight mt-10 mb-4 text-black">Global Implications</h2>
<p>Industry analysts note that this legislation is likely to establish a global standard, often referred to as the "Brussels Effect." Multinational corporations developing AI technologies may find it more practical to align their global operations with the EU's stringent standards rather than developing fragmented systems for different regulatory environments.</p>
<p>The proposal will now proceed to the European Parliament and the Council of the European Union for debate and potential amendments. If passed, member states will be granted a transitional period to implement the necessary national structures to enforce the regulation.</p>
</div>
</article>

    </>
  );
}
