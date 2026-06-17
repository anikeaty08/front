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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-[#0f172a] text-white flex items-center justify-center font-serif text-lg rounded-sm">S</div>
<span className="font-sans-safe font-semibold text-lg tracking-tight text-[#0f172a] uppercase">Sovereign<span className="text-slate-400">Mutual</span></span>
</a>

<div className="hidden md:flex items-center gap-8 font-sans-safe text-sm font-medium text-slate-500">
<a className="hover:text-[#0f172a] transition-colors" href="#about">Who We Are</a>
<a className="hover:text-[#0f172a] transition-colors" href="#services">Solutions</a>
<a className="hover:text-[#0f172a] transition-colors" href="#governance">Governance</a>
<a className="hover:text-[#0f172a] transition-colors" href="#insights">Insights</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-[#0f172a] hover:text-[#D64045] transition-colors" href="#contact">Client Portal</a>
<a className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium px-5 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200" href="#quote">
                    Request Proposal
                </a>
</div>

<button className="md:hidden text-slate-600">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative bg-[#0f172a] text-white pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-xs font-medium text-slate-300 tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-[#D64045]"></span>
                    Excellence since 1924
                </div>
<h1 className="text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
                    Stability in an <br/>
<span className="text-slate-300">Uncertain World.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
                    We provide comprehensive risk management and insurance solutions for institutions, corporations, and discerning individuals. Built on a century of financial strength.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center px-6 py-3 bg-[#D64045] hover:bg-[#b9363a] text-white font-medium text-sm rounded transition-all duration-200 shadow-lg shadow-red-900/20" href="#contact">
                        Speak to an Advisor
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm text-white font-medium text-sm rounded transition-all duration-200" href="#services">
                        Explore Coverage
                    </a>
</div>

<div className="pt-8 flex items-center gap-6 text-sm text-slate-400 font-sans-safe">
<div className="flex items-center gap-2">
<span className="iconify text-[#D64045]" data-icon="lucide:shield-check" data-width="18"></span>
<span>A++ Rated (Superior)</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#D64045]" data-icon="lucide:globe" data-width="18"></span>
<span>Global Compliance</span>
</div>
</div>
</div>

<div className="relative hidden lg:block h-[500px] w-full">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a] via-transparent to-transparent z-10"></div>
<img alt="Corporate Architecture" className="w-full h-full object-cover rounded-sm opacity-90 grayscale-[30%] shadow-2xl shadow-black/50 border border-slate-700/50" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>

<div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-sm max-w-xs z-20 border-l-4 border-[#D64045]">
<div className="flex items-start gap-4">
<div className="bg-slate-50 p-3 rounded-sm">
<span className="iconify text-[#0f172a]" data-icon="lucide:briefcase" data-width="24"></span>
</div>
<div>
<p className="text-2xl font-serif text-[#0f172a] font-medium">$42B+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Assets Under Management</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
<div>
<p className="text-3xl font-serif text-[#0f172a] font-medium">99.8%</p>
<p className="text-xs font-sans-safe font-medium text-slate-500 mt-2 uppercase tracking-wide">Claims Settlement Ratio</p>
</div>
<div>
<p className="text-3xl font-serif text-[#0f172a] font-medium">10M+</p>
<p className="text-xs font-sans-safe font-medium text-slate-500 mt-2 uppercase tracking-wide">Lives Protected</p>
</div>
<div>
<p className="text-3xl font-serif text-[#0f172a] font-medium">100</p>
<p className="text-xs font-sans-safe font-medium text-slate-500 mt-2 uppercase tracking-wide">Years of Service</p>
</div>
<div>
<p className="text-3xl font-serif text-[#0f172a] font-medium">24/7</p>
<p className="text-xs font-sans-safe font-medium text-slate-500 mt-2 uppercase tracking-wide">Global Support</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 relative">
<img alt="Executive Meeting" className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg grayscale-[20%]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1632"/>
<div className="absolute bottom-8 left-8 right-8 bg-[#0f172a]/95 backdrop-blur text-white p-6 rounded-sm border border-slate-700">
<p className="font-serif italic text-lg leading-relaxed">"Our mission is to provide the bedrock of stability upon which our clients can build their futures with absolute confidence."</p>
<p className="mt-4 text-xs font-medium text-[#D64045] uppercase tracking-wider">— Eleanor Sterling, CEO</p>
</div>
</div>
<div className="lg:col-span-7 space-y-8">
<div>
<h4 className="text-[#D64045] font-semibold text-xs tracking-widest uppercase mb-3">Who We Are</h4>
<h2 className="text-3xl lg:text-4xl text-[#0f172a] font-medium tracking-tight mb-6">A Century of Unwavering Commitment</h2>
</div>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                        At Sovereign Mutual, we understand that true partnership is measured by actions, not words. Since our founding, we have navigated global economic shifts, emerging risks, and regulatory landscapes to ensure our clients remain protected.
                    </p>
<p className="text-base text-slate-600 leading-relaxed">
                        We operate with a philosophy of radical transparency and conservative fiscal management. Our portfolio is diverse, our reserves are substantial, and our expertise is unmatched. Whether serving a multinational corporation or a private family estate, our standard of care remains absolute.
                    </p>
<div className="grid sm:grid-cols-2 gap-6 pt-6">
<div className="flex gap-4">
<div className="shrink-0 mt-1">
<span className="iconify text-[#0f172a]" data-icon="lucide:landmark" data-width="20"></span>
</div>
<div>
<h4 className="text-[#0f172a] font-medium mb-1">Financial Stability</h4>
<p className="text-sm text-slate-500">Capital reserves exceeding regulatory requirements by 200%.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 mt-1">
<span className="iconify text-[#0f172a]" data-icon="lucide:scale" data-width="20"></span>
</div>
<div>
<h4 className="text-[#0f172a] font-medium mb-1">Regulatory Compliance</h4>
<p className="text-sm text-slate-500">Adhering to strict international insurance standards.</p>
</div>
</div>
</div>
<div className="pt-6">
<a className="text-[#0f172a] font-medium text-sm border-b border-[#0f172a] pb-0.5 hover:text-[#D64045] hover:border-[#D64045] transition-colors" href="#">
                            Read our Annual Report →
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h4 className="text-[#D64045] font-semibold text-xs tracking-widest uppercase mb-3">Our Expertise</h4>
<h2 className="text-3xl lg:text-4xl text-[#0f172a] font-medium tracking-tight mb-4">Tailored Risk Solutions</h2>
<p className="text-slate-600 font-light">Comprehensive coverage designed for the complexities of modern life and business.</p>
</div>

<div className="bg-white p-1 rounded border border-slate-200 inline-flex shadow-sm">
<button className="px-6 py-2 bg-[#0f172a] text-white text-sm font-medium rounded shadow-sm">Corporate</button>
<button className="px-6 py-2 text-slate-500 hover:text-[#0f172a] text-sm font-medium transition-colors">Private Client</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-sm border border-slate-200 hover:border-[#0f172a] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0f172a] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#0f172a] transition-colors">
<span className="iconify text-[#0f172a] group-hover:text-white transition-colors" data-icon="lucide:building-2" data-width="24"></span>
</div>
<h3 className="text-xl text-[#0f172a] font-medium mb-3 group-hover:translate-x-1 transition-transform">Commercial Property</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Protecting physical assets against natural disasters, theft, and operational interruptions. Customized valuation and risk engineering.
                    </p>
<a className="inline-flex items-center text-xs font-semibold text-[#0f172a] uppercase tracking-wide group-hover:text-[#D64045] transition-colors" href="#">
                        View Details <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-sm border border-slate-200 hover:border-[#0f172a] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0f172a] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#0f172a] transition-colors">
<span className="iconify text-[#0f172a] group-hover:text-white transition-colors" data-icon="lucide:users-2" data-width="24"></span>
</div>
<h3 className="text-xl text-[#0f172a] font-medium mb-3 group-hover:translate-x-1 transition-transform">Executive Liability</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        D&amp;O, E&amp;O, and employment practices liability coverage to safeguard leadership and board members from litigation and regulatory actions.
                    </p>
<a className="inline-flex items-center text-xs font-semibold text-[#0f172a] uppercase tracking-wide group-hover:text-[#D64045] transition-colors" href="#">
                        View Details <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-sm border border-slate-200 hover:border-[#0f172a] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0f172a] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#0f172a] transition-colors">
<span className="iconify text-[#0f172a] group-hover:text-white transition-colors" data-icon="lucide:globe-2" data-width="24"></span>
</div>
<h3 className="text-xl text-[#0f172a] font-medium mb-3 group-hover:translate-x-1 transition-transform">Global Cyber Risk</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Comprehensive cyber resilience solutions including data breach response, ransomware protection, and business continuity support.
                    </p>
<a className="inline-flex items-center text-xs font-semibold text-[#0f172a] uppercase tracking-wide group-hover:text-[#D64045] transition-colors" href="#">
                        View Details <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-sm border border-slate-200 hover:border-[#0f172a] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0f172a] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#0f172a] transition-colors">
<span className="iconify text-[#0f172a] group-hover:text-white transition-colors" data-icon="lucide:ship" data-width="24"></span>
</div>
<h3 className="text-xl text-[#0f172a] font-medium mb-3 group-hover:translate-x-1 transition-transform">Marine &amp; Cargo</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        End-to-end logistics coverage for international trade, hull machinery, and transit risks across global supply chains.
                    </p>
<a className="inline-flex items-center text-xs font-semibold text-[#0f172a] uppercase tracking-wide group-hover:text-[#D64045] transition-colors" href="#">
                        View Details <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-sm border border-slate-200 hover:border-[#0f172a] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0f172a] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#0f172a] transition-colors">
<span className="iconify text-[#0f172a] group-hover:text-white transition-colors" data-icon="lucide:heart-pulse" data-width="24"></span>
</div>
<h3 className="text-xl text-[#0f172a] font-medium mb-3 group-hover:translate-x-1 transition-transform">Employee Benefits</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Strategic group health, life, and pension schemes designed to attract and retain top-tier talent in competitive markets.
                    </p>
<a className="inline-flex items-center text-xs font-semibold text-[#0f172a] uppercase tracking-wide group-hover:text-[#D64045] transition-colors" href="#">
                        View Details <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-[#0f172a] p-8 rounded-sm border border-[#0f172a] shadow-lg flex flex-col justify-center text-center">
<h3 className="text-xl text-white font-serif font-medium mb-3">Custom Underwriting</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Do you have complex or unique risk requirements? Our specialized underwriting team crafts bespoke solutions.
                    </p>
<div>
<a className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#D64045] hover:bg-[#b9363a] text-white text-sm font-medium rounded transition-colors" href="#contact">
                            Contact Underwriters
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div className="space-y-12">
<div>
<h4 className="text-[#D64045] font-semibold text-xs tracking-widest uppercase mb-3">The Sovereign Difference</h4>
<h2 className="text-3xl lg:text-4xl text-[#0f172a] font-medium tracking-tight">Governance &amp; Integrity</h2>
</div>
<div className="flex gap-5">
<div className="w-10 h-10 shrink-0 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center">
<span className="iconify text-[#0f172a]" data-icon="lucide:shield" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium text-[#0f172a] mb-2">Uncompromised Security</h3>
<p className="text-slate-600 text-sm leading-relaxed font-light">
                                Our conservative investment strategy ensures we have the liquidity to pay claims promptly, even during systemic market events.
                            </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-10 h-10 shrink-0 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center">
<span className="iconify text-[#0f172a]" data-icon="lucide:user-check" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium text-[#0f172a] mb-2">Dedicated Advisory</h3>
<p className="text-slate-600 text-sm leading-relaxed font-light">
                                You are never just a policy number. Each corporate client is assigned a dedicated senior risk advisor with sector-specific expertise.
                            </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-10 h-10 shrink-0 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center">
<span className="iconify text-[#0f172a]" data-icon="lucide:file-check" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium text-[#0f172a] mb-2">Streamlined Claims</h3>
<p className="text-slate-600 text-sm leading-relaxed font-light">
                                We utilize proprietary technology to process claims with speed and accuracy, reducing administrative burden on your team.
                            </p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[#0f172a] translate-x-4 translate-y-4 rounded-sm -z-10"></div>
<div className="bg-slate-100 p-8 md:p-12 rounded-sm border border-slate-200">
<span className="iconify text-[#D64045] opacity-20 w-16 h-16 mb-6" data-icon="lucide:quote" data-width="64"></span>
<blockquote className="text-xl md:text-2xl font-serif text-[#0f172a] leading-relaxed mb-8">
                            "Sovereign Mutual has been instrumental in our international expansion. Their understanding of cross-border regulatory compliance and risk mitigation is simply unparalleled in the industry."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div>
<div className="font-semibold text-[#0f172a] text-sm">James Thornton</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">CFO, Apex Logistics Group</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h4 className="text-[#D64045] font-semibold text-xs tracking-widest uppercase mb-3">Leadership</h4>
<h2 className="text-3xl lg:text-4xl text-[#0f172a] font-medium tracking-tight">Guided by Experience</h2>
</div>
<div className="grid md:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 relative">
<img alt="Advisor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-lg font-medium text-[#0f172a]">Sarah Jenkins</h3>
<p className="text-xs text-[#D64045] uppercase tracking-wider font-semibold mb-1">Chief Risk Officer</p>
<p className="text-sm text-slate-500 font-light">20+ years in actuarial science.</p>
</div>

<div className="group">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 relative">
<img alt="Advisor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-lg font-medium text-[#0f172a]">David Chen</h3>
<p className="text-xs text-[#D64045] uppercase tracking-wider font-semibold mb-1">Head of Corporate</p>
<p className="text-sm text-slate-500 font-light">Specialist in M&amp;A insurance.</p>
</div>

<div className="group">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 relative">
<img alt="Advisor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-lg font-medium text-[#0f172a]">Elena Rodriguez</h3>
<p className="text-xs text-[#D64045] uppercase tracking-wider font-semibold mb-1">Senior Legal Counsel</p>
<p className="text-sm text-slate-500 font-light">Compliance &amp; Regulatory expert.</p>
</div>

<div className="group">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 relative">
<img alt="Advisor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-lg font-medium text-[#0f172a]">Michael Ross</h3>
<p className="text-xs text-[#D64045] uppercase tracking-wider font-semibold mb-1">Director of Private Wealth</p>
<p className="text-sm text-slate-500 font-light">High-net-worth portfolio management.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="insights">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h4 className="text-[#D64045] font-semibold text-xs tracking-widest uppercase mb-3">Market Intelligence</h4>
<h2 className="text-3xl lg:text-4xl text-[#0f172a] font-medium tracking-tight">Recent Updates</h2>
</div>
<a className="hidden md:inline-flex items-center text-sm font-semibold text-[#0f172a] border-b border-transparent hover:border-[#0f172a] transition-all" href="#">
                    View All Insights <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="h-48 overflow-hidden rounded-sm mb-4">
<img alt="Chart" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex gap-3 text-xs text-slate-400 mb-2">
<span className="uppercase tracking-wide">Regulatory</span>
<span>•</span>
<span>Oct 12, 2023</span>
</div>
<h3 className="text-lg font-medium text-[#0f172a] mb-2 group-hover:text-[#D64045] transition-colors">Adapting to New ESG Disclosure Standards</h3>
<p className="text-sm text-slate-500 line-clamp-2">How upcoming regulations will impact corporate liability insurance policies in the EU and North America.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-48 overflow-hidden rounded-sm mb-4">
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex gap-3 text-xs text-slate-400 mb-2">
<span className="uppercase tracking-wide">Risk Management</span>
<span>•</span>
<span>Sep 28, 2023</span>
</div>
<h3 className="text-lg font-medium text-[#0f172a] mb-2 group-hover:text-[#D64045] transition-colors">Cybersecurity in Remote Workforces</h3>
<p className="text-sm text-slate-500 line-clamp-2">Key strategies for mitigating data breach risks when managing distributed teams across jurisdictions.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-48 overflow-hidden rounded-sm mb-4">
<img alt="Laptop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex gap-3 text-xs text-slate-400 mb-2">
<span className="uppercase tracking-wide">Corporate</span>
<span>•</span>
<span>Sep 15, 2023</span>
</div>
<h3 className="text-lg font-medium text-[#0f172a] mb-2 group-hover:text-[#D64045] transition-colors">Q3 Financial Stability Report</h3>
<p className="text-sm text-slate-500 line-clamp-2">Sovereign Mutual continues to demonstrate robust capital adequacy ratios amidst market volatility.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-[#0f172a] text-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<h4 className="text-[#D64045] font-semibold text-xs tracking-widest uppercase mb-3">Get in Touch</h4>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Secure Your Future Today</h2>
<p className="text-slate-400 font-light text-lg">
                            Request a consultation with one of our certified risk advisors. We will respond within 24 hours.
                        </p>
</div>
<div className="space-y-6 pt-4">
<div className="flex items-start gap-4">
<span className="iconify text-[#D64045] mt-1" data-icon="lucide:map-pin" data-width="20"></span>
<div>
<h5 className="font-medium text-white mb-1">Global Headquarters</h5>
<p className="text-slate-400 text-sm">100 Financial District Blvd, Suite 4500<br/>New York, NY 10005, USA</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-[#D64045] mt-1" data-icon="lucide:phone" data-width="20"></span>
<div>
<h5 className="font-medium text-white mb-1">Phone</h5>
<p className="text-slate-400 text-sm">+1 (212) 555-0198 (Corporate)<br/>+1 (800) 555-0199 (Claims)</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-[#D64045] mt-1" data-icon="lucide:mail" data-width="20"></span>
<div>
<h5 className="font-medium text-white mb-1">Email</h5>
<p className="text-slate-400 text-sm">advisory@sovereignmutual.com</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-sm p-8 text-slate-600 shadow-2xl">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-slate-500">First Name</label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-sm focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] transition-all bg-slate-50" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Last Name</label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-sm focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] transition-all bg-slate-50" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Business Email</label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-sm focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] transition-all bg-slate-50" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Interest</label>
<div className="relative">
<select className="w-full px-4 py-2 border border-slate-200 rounded-sm focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] transition-all bg-slate-50 appearance-none">
<option>Corporate Risk Insurance</option>
<option>Employee Benefits</option>
<option>Private Wealth Protection</option>
<option>Partnership Inquiry</option>
</select>
<span className="iconify absolute right-4 top-3 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>

<label className="flex items-start gap-3 cursor-pointer custom-checkbox pt-2">
<div className="relative">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded-sm bg-white transition-colors">
<svg className="w-3 h-3 text-white absolute top-1 left-1 hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-xs text-slate-500 leading-tight">I consent to the processing of my personal data in accordance with the <a className="underline hover:text-[#0f172a]" href="#">Privacy Policy</a>.</span>
</label>
<button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium py-3 rounded-sm shadow-md hover:shadow-lg transition-all duration-200 mt-2" type="button">
                            Request Quote
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-[#0f172a] text-white flex items-center justify-center font-serif text-sm rounded-sm">S</div>
<span className="font-sans-safe font-semibold text-base tracking-tight text-[#0f172a] uppercase">Sovereign<span className="text-slate-400">Mutual</span></span>
</a>
<p className="text-slate-500 max-w-xs mb-6 font-light">
                        Providing institutional-grade insurance and risk management solutions since 1924. Rated A++ (Superior) for financial strength.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#0f172a] transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-slate-400 hover:text-[#0f172a] transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-[#0f172a] mb-4">Solutions</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-[#D64045] transition-colors" href="#">Corporate Liability</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Property &amp; Asset</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Employee Benefits</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Cyber Risk</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Private Client</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#0f172a] mb-4">Company</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-[#D64045] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Leadership</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Investor Relations</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Newsroom</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#0f172a] mb-4">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-[#D64045] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Regulatory Info</a></li>
<li><a className="hover:text-[#D64045] transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2024 Sovereign Mutual Insurance Group. All rights reserved.</p>
<div className="mt-4 md:mt-0 flex gap-6">
<p>Licence No. 8944-A2</p>
<p>Sovereign Mutual is authorized and regulated by the Financial Conduct Authority.</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
