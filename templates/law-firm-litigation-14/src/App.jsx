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
      

<nav className="fixed w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-center justify-between h-20">

<a className="font-serif text-xl tracking-tighter uppercase text-stone-200 hover:text-white transition-colors" href="#">
                    Vantage <span className="text-stone-500 mx-1">&amp;</span> Stone
                </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300" href="#expertise">Expertise</a>
<a className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300" href="#philosophy">Philosophy</a>
<a className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300" href="#process">Process</a>
<a className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300" href="#contact">
                        Consult
                    </a>
</div>

<div className="md:hidden text-stone-300 cursor-pointer">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto border-x border-white/5">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 mb-8 border border-stone-800 bg-stone-900/50 px-3 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs text-stone-400 uppercase tracking-wider">Accepting Complex Litigation Cases</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-stone-100 tracking-tight mb-8">
                Protecting legacy through <br/> <span className="italic text-stone-400">strategic</span> counsel.
            </h1>
<p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl leading-relaxed mb-12">
                We provide discreet, high-stakes defense for executives, corporations, and private entities facing critical legal challenges. No public spectacle. Just results.
            </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<a className="group relative inline-flex items-center gap-3 px-8 py-4 bg-stone-100 text-black text-sm uppercase tracking-widest hover:bg-stone-300 transition-all duration-300" href="#contact">
                    Schedule Private Briefing
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<div className="flex items-center gap-4 border-l border-white/10 pl-6">
<span className="iconify text-stone-500" data-icon="lucide:shield-check" data-width="20"></span>
<span className="text-xs text-stone-500 uppercase tracking-wider">Confidentiality Assured</span>
</div>
</div>
</div>

<div className="absolute top-1/2 right-0 -z-10 w-1/3 h-1/2 bg-gradient-to-b from-stone-800/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
</header>

<section className="border-y border-white/5 bg-[#0d0d10]">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div>
<h3 className="font-serif text-3xl text-white mb-1">$2.5B+</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Assets Protected</p>
</div>
<div>
<h3 className="font-serif text-3xl text-white mb-1">20+ Years</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Avg. Partner Experience</p>
</div>
<div>
<h3 className="font-serif text-3xl text-white mb-1">Nationwide</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Federal Jurisdiction</p>
</div>
<div>
<h3 className="font-serif text-3xl text-white mb-1">0</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Media Leaks</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 border-x border-white/5" id="expertise">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4 tracking-tight">Areas of Focus</h2>
<p className="text-stone-400 font-light max-w-md">We decline general counsel work to focus exclusively on pivotal moments where the outcome determines the future of the entity.</p>
</div>
<a className="text-xs text-stone-400 hover:text-white uppercase tracking-widest border-b border-stone-700 hover:border-white pb-1 transition-all" href="#contact">View Full Capabilities</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800 border border-stone-800">

<div className="group bg-[#0a0a0c] p-10 hover:bg-[#0f0f12] transition-colors duration-500">
<span className="iconify text-stone-500 mb-8 group-hover:text-stone-200 transition-colors" data-icon="lucide:scale" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-xl text-stone-200 mb-4 font-medium">Corporate Litigation</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-8">
                    Complex contractual disputes, shareholder actions, and partnership dissolutions. We intervene to secure assets and minimize operational disruption.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> Contract Breaches
                    </li>
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> IP Defense
                    </li>
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> M&amp;A Disputes
                    </li>
</ul>
</div>

<div className="group bg-[#0a0a0c] p-10 hover:bg-[#0f0f12] transition-colors duration-500 relative">
<div className="absolute top-0 right-0 p-4">
<span className="iconify text-stone-700" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<span className="iconify text-stone-500 mb-8 group-hover:text-stone-200 transition-colors" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-xl text-stone-200 mb-4 font-medium">White Collar Defense</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-8">
                    Pre-indictment advocacy and defense against federal investigations. We operate quietly to dismantle allegations before they reach the public court.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> SEC Investigations
                    </li>
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> Internal Audits
                    </li>
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> Regulatory Compliance
                    </li>
</ul>
</div>

<div className="group bg-[#0a0a0c] p-10 hover:bg-[#0f0f12] transition-colors duration-500">
<span className="iconify text-stone-500 mb-8 group-hover:text-stone-200 transition-colors" data-icon="lucide:landmark" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-xl text-stone-200 mb-4 font-medium">Private Client Services</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-8">
                    Protecting the reputation and liberty of high-net-worth individuals. Crisis management for sensitive personal and financial matters.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> Reputation Management
                    </li>
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> Estate Litigation
                    </li>
<li className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wide">
<span className="w-1 h-1 bg-stone-600 rounded-full"></span> Family Governance
                    </li>
</ul>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 bg-[#0e0e11] border-y border-white/5 overflow-hidden" id="philosophy">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="relative z-10">
<div className="mb-6">
<span className="text-xs font-semibold text-stone-500 uppercase tracking-widest border border-stone-800 px-3 py-1 rounded-full">Our Approach</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-8 tracking-tight leading-tight">
                    We do not seek war. <br/>
<span className="text-stone-500">But we are prepared to end it.</span>
</h2>
<div className="space-y-6 text-stone-400 font-light text-lg">
<p>
                        Most firms profit from prolonged conflict. We measure success by how quickly and quietly we can restore your stability.
                    </p>
<p>
                        Our philosophy is grounded in <strong>Preemptive Strategy</strong>. We analyze the chessboard, anticipate the opposition's next three moves, and structure a defense that makes litigation financially or reputationally untenable for the other side.
                    </p>
</div>
<div className="mt-12 flex gap-12">
<div>
<span className="block text-2xl font-serif text-white mb-2">Selective</span>
<span className="text-xs text-stone-500 uppercase tracking-wide">Limited Caseload</span>
</div>
<div>
<span className="block text-2xl font-serif text-white mb-2">Discreet</span>
<span className="text-xs text-stone-500 uppercase tracking-wide">Private Channels</span>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] w-full bg-stone-900 overflow-hidden rounded-sm border border-white/5">

<div className="absolute inset-0 opacity-40">
<div className="absolute top-0 left-1/4 w-px h-full bg-stone-800"></div>
<div className="absolute top-0 left-2/4 w-px h-full bg-stone-800"></div>
<div className="absolute top-0 left-3/4 w-px h-full bg-stone-800"></div>
<div className="absolute top-1/4 left-0 w-full h-px bg-stone-800"></div>
<div className="absolute top-2/4 left-0 w-full h-px bg-stone-800"></div>
<div className="absolute top-3/4 left-0 w-full h-px bg-stone-800"></div>
</div>
<div className="absolute bottom-10 left-10 right-10 p-6 bg-[#0a0a0c]/90 backdrop-blur border border-white/10">
<p className="font-serif italic text-stone-300 text-lg">"In matters of high importance, silence is often the most powerful weapon."</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12" id="process">
<div className="text-center mb-20">
<h2 className="font-serif text-4xl text-stone-100 mb-4 tracking-tight">The Engagement Protocol</h2>
<p className="text-stone-500 text-sm uppercase tracking-widest">From Assessment to Resolution</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-800 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

<div className="relative group">
<div className="w-24 h-24 bg-[#0a0a0c] border border-stone-800 flex items-center justify-center mb-6 group-hover:border-stone-600 transition-colors mx-auto md:mx-0">
<span className="font-serif text-2xl text-stone-300">01</span>
</div>
<h3 className="text-lg text-white mb-3 font-medium text-center md:text-left">Forensic Review</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed text-center md:text-left">
                        We conduct a confidential, deep-dive audit of facts, evidence, and exposure before a formal retainer is signed.
                    </p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-[#0a0a0c] border border-stone-800 flex items-center justify-center mb-6 group-hover:border-stone-600 transition-colors mx-auto md:mx-0">
<span className="font-serif text-2xl text-stone-300">02</span>
</div>
<h3 className="text-lg text-white mb-3 font-medium text-center md:text-left">Strategic Mapping</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed text-center md:text-left">
                        Developing the legal theory and narrative. We identify the swiftest path to dismissal or settlement.
                    </p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-[#0a0a0c] border border-stone-800 flex items-center justify-center mb-6 group-hover:border-stone-600 transition-colors mx-auto md:mx-0">
<span className="font-serif text-2xl text-stone-300">03</span>
</div>
<h3 className="text-lg text-white mb-3 font-medium text-center md:text-left">Execution</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed text-center md:text-left">
                        Aggressive filing, negotiation, or trial preparation. We control the pace and direction of proceedings.
                    </p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-[#0a0a0c] border border-stone-800 flex items-center justify-center mb-6 group-hover:border-stone-600 transition-colors mx-auto md:mx-0">
<span className="font-serif text-2xl text-stone-300">04</span>
</div>
<h3 className="text-lg text-white mb-3 font-medium text-center md:text-left">Resolution</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed text-center md:text-left">
                        Closing the file. Securing assets. Ensuring future protection through binding agreements.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050506] border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

<div>
<h2 className="font-serif text-4xl text-white mb-6 tracking-tight">Initiate Counsel</h2>
<p className="text-stone-400 font-light mb-10 leading-relaxed">
                        To maintain our standards of service, we accept a limited number of new clients annually. Please use the secure form to request a preliminary consultation. All communications are privileged.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<span className="iconify text-stone-600 mt-1" data-icon="lucide:map-pin" data-width="18"></span>
<div>
<p className="text-stone-200 text-sm">Headquarters</p>
<p className="text-stone-500 text-sm">100 Wall Street, Suite 2400<br/>New York, NY 10005</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-stone-600 mt-1" data-icon="lucide:phone" data-width="18"></span>
<div>
<p className="text-stone-200 text-sm">Secure Line</p>
<p className="text-stone-500 text-sm">+1 (212) 555-0198</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-stone-600 mt-1" data-icon="lucide:mail" data-width="18"></span>
<div>
<p className="text-stone-200 text-sm">Electronic Mail</p>
<p className="text-stone-500 text-sm">counsel@vantage-stone.com</p>
</div>
</div>
</div>
</div>

<div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-stone-300 transition-colors">Name</label>
<input className="w-full bg-transparent border-b border-stone-800 py-2 text-stone-200 focus:outline-none focus:border-stone-400 transition-colors rounded-none placeholder-transparent" placeholder="Full Name" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-stone-300 transition-colors">Organization</label>
<input className="w-full bg-transparent border-b border-stone-800 py-2 text-stone-200 focus:outline-none focus:border-stone-400 transition-colors rounded-none placeholder-transparent" placeholder="Company" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-stone-300 transition-colors">Email Address</label>
<input className="w-full bg-transparent border-b border-stone-800 py-2 text-stone-200 focus:outline-none focus:border-stone-400 transition-colors rounded-none placeholder-transparent" placeholder="email@example.com" type="email"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-stone-300 transition-colors">Nature of Inquiry</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-stone-800 py-2 text-stone-400 focus:outline-none focus:border-stone-400 transition-colors appearance-none rounded-none cursor-pointer">
<option>Corporate Litigation</option>
<option>White Collar Defense</option>
<option>Private Client / Estate</option>
<option>Regulatory Investigation</option>
<option>Other / Confidential</option>
</select>
<div className="absolute right-0 top-3 pointer-events-none text-stone-600">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-stone-300 transition-colors">Brief Overview (Optional)</label>
<textarea className="w-full bg-transparent border-b border-stone-800 py-2 text-stone-200 focus:outline-none focus:border-stone-400 transition-colors rounded-none resize-none" rows="2"></textarea>
</div>
<div className="pt-4">
<button className="w-full md:w-auto px-10 py-4 bg-stone-200 text-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3" type="submit">
                                Request Consultation
                                <span className="iconify" data-icon="lucide:lock" data-width="14"></span>
</button>
<p className="mt-4 text-[10px] text-stone-600 text-center md:text-left">
                                By submitting this form, you acknowledge that no attorney-client relationship is formed until a written agreement is signed.
                            </p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-stone-600 text-xs">
                © 2024 Vantage &amp; Stone LLP. All rights reserved.
            </div>
<div className="flex gap-8">
<a className="text-stone-600 hover:text-stone-400 text-xs transition-colors" href="#">Disclaimer</a>
<a className="text-stone-600 hover:text-stone-400 text-xs transition-colors" href="#">Privacy Policy</a>
<a className="text-stone-600 hover:text-stone-400 text-xs transition-colors" href="#">Attorney Advertising</a>
</div>
</div>
</footer>

    </>
  );
}
