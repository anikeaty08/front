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



        // Initialize Lucide icons with custom stroke width based on design specifications
        lucide.createIcons({
            strokeWidth: 1.5
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
      

<div className="bg-[#3b0a1d] text-white py-2 text-center text-sm font-medium">
        Dots raised a Series A to scale global payouts. <a className="underline hover:text-gray-200 transition-colors" href="#">Read the blog <span aria-hidden="true">→</span></a>
</div>

<div className="max-w-[1440px] mx-auto border-x border-gray-200 bg-white relative shadow-sm min-h-screen">

<nav className="sticky top-0 z-50 bg-[#F3F4F6]/95 backdrop-blur border-b border-gray-200 h-20 flex items-center justify-between px-6 lg:px-12">
<div className="flex items-center">
<a href="#"><img alt="Dots Logo" className="h-6" src="https://usedots.com/assets/branding/Dots_Black/Dots_Logo_Black.svg"/></a>
</div>
<div className="hidden lg:flex items-center space-x-8 text-base font-medium text-gray-800">
<a className="flex items-center gap-1 hover:text-black transition-colors" href="#">Platform <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></a>
<a className="flex items-center gap-1 hover:text-black transition-colors" href="#">Solutions <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></a>
<a className="hover:text-black transition-colors" href="#">Pricing</a>
<a className="hover:text-black transition-colors" href="#">Careers</a>
<a className="hover:text-black transition-colors" href="#">Blog</a>
<a className="hover:text-black transition-colors" href="#">Docs</a>
</div>
<div className="hidden md:flex items-center space-x-4 text-sm">
<a className="px-5 py-2.5 border border-gray-300 rounded font-semibold hover:bg-gray-50 transition-colors" href="#">LOGIN</a>
<a className="px-5 py-2.5 bg-black text-white rounded font-semibold btn-maroon-bg" href="#">SIGN UP</a>
<a className="px-5 py-2.5 bg-[#fdf05e] text-black rounded font-semibold flex items-center gap-2 hover:bg-[#fce932] transition-colors shadow-sm" href="#">SCHEDULE DEMO <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<button className="lg:hidden p-2"><i className="w-6 h-6" data-lucide="menu"></i></button>
</nav>

<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-200 relative">

<div className="p-8 lg:p-16 flex flex-col justify-center relative border-r border-gray-200 min-h-[600px] lg:min-h-[700px]">
<div className="max-w-md mx-auto lg:mx-0 w-full pb-32">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">Pay out people<br/>at scale.</h1>
<p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">Send money by any method, anywhere, automatically.</p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3.5 bg-black text-white rounded font-semibold text-base btn-maroon-bg">SIGN UP</button>
<button className="px-6 py-3.5 bg-[#fdf05e] text-black rounded font-semibold text-base flex items-center gap-2 hover:bg-[#fce932] transition-colors shadow-sm">SCHEDULE DEMO <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[#3b0a1d] text-white p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 relative overflow-hidden">
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="absolute inset-0 opacity-40 pointer-events-none" style={{backgroundImage: 'url(\'https://usedots.com/assets/images/backgrounds/maroon_blobs.webp\')', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay'}}></div>
<div className="relative z-10 border-l border-white/20 pl-4 sm:border-l-0 sm:pl-0">
<div className="text-3xl font-semibold tracking-tight mb-1">$1bn+</div>
<div className="text-sm text-white/70 uppercase tracking-wider font-medium">volume</div>
</div>
<div className="relative z-10 border-l border-white/20 pl-4">
<div className="text-3xl font-semibold tracking-tight mb-1">1m+ Payees</div>
<div className="text-sm text-white/70 uppercase tracking-wider font-medium">using Dots</div>
</div>
<div className="relative z-10 border-l border-white/20 pl-4">
<div className="text-3xl font-semibold tracking-tight mb-1">190+ Countries</div>
<div className="text-sm text-white/70 uppercase tracking-wider font-medium">supported</div>
</div>
</div>
</div>

<div className="bg-[#F3F4F6] relative overflow-hidden flex items-center justify-center p-8 lg:p-20 min-h-[500px]">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://usedots.com/_astro/blue-pink3.DR8L5A9D_ZFzDDm.webp"/>

<div className="relative z-10 w-full max-w-sm bg-[#fafafa]/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="p-6 text-center border-b border-gray-200/50 bg-white/50">
<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Payor</div>
<div className="w-20 h-20 mx-auto border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center mb-4 bg-white shadow-sm relative">
<div className="w-6 h-6 border-t-2 border-l-2 border-gray-300 absolute top-2 left-2"></div>
<div className="w-6 h-6 border-b-2 border-r-2 border-gray-300 absolute bottom-2 right-2"></div>
<div className="w-6 h-6 bg-yellow-400 rounded-full shadow-inner"></div>
</div>
<div className="font-semibold tracking-tight text-xl">Dots API</div>
</div>
<div className="p-5 bg-white/70">
<div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Payout Rail</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white transition-colors cursor-default">
<div className="flex items-center gap-3 text-sm font-medium text-gray-700"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-right"></i> PayPal</div>
<div className="w-5 h-5 bg-blue-100 rounded text-blue-800 font-bold italic flex items-center justify-center text-xs">P</div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white transition-colors cursor-default">
<div className="flex items-center gap-3 text-sm font-medium text-gray-700"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-right"></i> Venmo (US)</div>
<div className="w-5 h-5 bg-blue-50 rounded text-blue-500 font-bold italic flex items-center justify-center text-xs">V</div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white transition-colors cursor-default">
<div className="flex items-center gap-3 text-sm font-medium text-gray-700"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-right"></i> ACH (US)</div>
<div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center"><div className="w-3 h-1.5 border-b-2 border-r-2 border-gray-500 transform rotate-45 mb-1"></div></div>
</div>
<div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-100 cursor-default ring-1 ring-black/5">
<div className="flex items-center gap-3 text-sm font-semibold text-black"><i className="w-3.5 h-3.5 text-black" data-lucide="chevron-right"></i> Cash App (US)</div>
<div className="w-5 h-5 bg-green-100 rounded text-green-600 font-bold flex items-center justify-center text-xs">$</div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white transition-colors cursor-default">
<div className="flex items-center gap-3 text-sm font-medium text-gray-700"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-right"></i> RTP (US)</div>
<div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center"><i className="w-3 h-3 text-purple-600 fill-current" data-lucide="zap"></i></div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white transition-colors cursor-default">
<div className="flex items-center gap-3 text-sm font-medium text-gray-700"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-right"></i> USDC (Global)</div>
<div className="w-5 h-5 bg-blue-50 rounded text-blue-500 font-bold flex items-center justify-center text-xs">($)</div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white transition-colors cursor-default">
<div className="flex items-center gap-3 text-sm font-medium text-gray-700"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-right"></i> USDT (Global)</div>
<div className="w-5 h-5 bg-teal-50 rounded text-teal-500 font-bold flex items-center justify-center text-xs">T</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F3F4F6] py-24 px-6 border-b border-gray-200 flex justify-center text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl text-gray-900 leading-[1.2]">
                End-to-end payouts platform that's easy to integrate and customize.
            </h2>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-[#F3F4F6]">

<div className="p-10 lg:p-14 border-b md:border-b-0 md:border-r border-gray-200 bg-white m-0 md:m-4 md:mb-0 md:border-t md:border-l flex flex-col items-start relative group">
<div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-sm">
<img alt="Onboard Icon" className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://usedots.com/_astro/id.Cl25UTNu_Zm5LbI.svg"/>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-gray-900">Dots Onboard</h3>
<p className="text-gray-600 mb-10 flex-grow leading-relaxed">Fully white-labeled UI that can screen payees against sanctions lists, verify identity, and collect payout information.</p>
<button className="px-5 py-2.5 bg-black text-white rounded text-sm font-semibold btn-maroon-bg mt-auto w-full md:w-auto">LEARN MORE</button>
</div>

<div className="p-10 lg:p-14 border-b md:border-b-0 md:border-r border-gray-200 bg-white m-0 md:m-4 md:mb-0 md:border-t md:border-l flex flex-col items-start relative group">
<div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-sm">
<img alt="Payouts Icon" className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://usedots.com/_astro/globe.BRYSzDTe_Zm5LbI.svg"/>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-gray-900">Dots Payouts</h3>
<p className="text-gray-600 mb-10 flex-grow leading-relaxed">Pay through any of our 300+ rails domestically or internationally.</p>
<button className="px-5 py-2.5 bg-black text-white rounded text-sm font-semibold btn-maroon-bg mt-auto w-full md:w-auto">LEARN MORE</button>
</div>

<div className="p-10 lg:p-14 bg-white m-0 md:m-4 md:mb-0 md:border-t md:border-l md:border-r border-gray-200 flex flex-col items-start relative group">
<div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-sm">
<img alt="Tax Icon" className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://usedots.com/_astro/target.CG9jw11__Zm5LbI.svg"/>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-gray-900">Dots Tax</h3>
<p className="text-gray-600 mb-10 flex-grow leading-relaxed">Detect when tax information needs to be collected, then collect and validate it. File tax forms in the US and Canada.</p>
<button className="px-5 py-2.5 bg-black text-white rounded text-sm font-semibold btn-maroon-bg mt-auto w-full md:w-auto">LEARN MORE</button>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 relative">

<div className="lg:col-span-4 border-r border-gray-200 bg-[#F3F4F6] p-8 lg:p-16">
<div className="lg:sticky lg:top-32">
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">Dots Payouts</h2>
<p className="text-xl text-gray-600 mb-10 leading-relaxed">Meet our all-in-one, customizable, API-first platform.</p>
<nav className="space-y-6 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-gray-300">
<a className="flex items-center gap-4 group relative z-10" href="#global-payouts">
<div className="w-3 h-3 rounded-full bg-black ring-4 ring-[#F3F4F6]"></div>
<span className="font-semibold text-gray-900">Global Payouts</span>
</a>
<a className="flex items-center gap-4 group relative z-10" href="#payee-experience">
<div className="w-3 h-3 rounded-full bg-gray-300 ring-4 ring-[#F3F4F6] group-hover:bg-gray-400 transition-colors"></div>
<span className="font-medium text-gray-400 group-hover:text-gray-600 transition-colors">Best-in-class Payee Experience</span>
</a>
<a className="flex items-center gap-4 group relative z-10" href="#tax-compliance">
<div className="w-3 h-3 rounded-full bg-gray-300 ring-4 ring-[#F3F4F6] group-hover:bg-gray-400 transition-colors"></div>
<span className="font-medium text-gray-400 group-hover:text-gray-600 transition-colors">Automated Tax Compliance</span>
</a>
<a className="flex items-center gap-4 group relative z-10" href="#white-labeled">
<div className="w-3 h-3 rounded-full bg-gray-300 ring-4 ring-[#F3F4F6] group-hover:bg-gray-400 transition-colors"></div>
<span className="font-medium text-gray-400 group-hover:text-gray-600 transition-colors">White-labeled Integration</span>
</a>
</nav>
</div>
</div>

<div className="lg:col-span-8 bg-[#F3F4F6] p-8 lg:p-20">
<div className="max-w-3xl mx-auto space-y-32">

<div className="scroll-mt-32" id="global-payouts">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-semibold mb-8 text-gray-700 shadow-sm">
<div className="w-2 h-2 rounded-full bg-black"></div> Global Payouts
                        </div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900 leading-[1.1]">Pay &amp; track payments globally, all in one place.</h3>
<p className="text-xl text-gray-600 mb-8 leading-relaxed">One place to track all of your payouts, whether you're wiring funds to Tanzania or sending funds via GPay to the Philippines. Let Dots handle currency conversion on the fly seamlessly.</p>
<a className="text-base font-semibold text-gray-900 flex items-center gap-1.5 mb-10 hover:underline underline-offset-4" href="#">See more <i className="w-4 h-4" data-lucide="chevron-down"></i></a>

<div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#002f6c] rounded-lg shadow-lg border border-black/10 overflow-hidden relative">

<div className="absolute inset-x-0 top-0 h-12 border-b border-white/10 bg-black/20 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
</div>
</div>

<div className="scroll-mt-32" id="payee-experience">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-semibold mb-8 text-gray-700 shadow-sm">
<div className="w-2 h-2 rounded-full bg-black"></div> Best-in-class Payee Experience
                        </div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900 leading-[1.1]">Modern, easy to use UI with built-in customer support.</h3>
<p className="text-xl text-gray-600 mb-8 leading-relaxed">Dots' UI has been battle tested and optimized to improve payee conversion. Backed by our 24/7 global support we take care of managing payouts, so you don't have to.</p>
<a className="text-base font-semibold text-gray-900 flex items-center gap-1.5 mb-10 hover:underline underline-offset-4" href="#">See more <i className="w-4 h-4" data-lucide="chevron-down"></i></a>

<div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#0c3c26] rounded-lg shadow-lg border border-black/10"></div>
</div>

<div className="scroll-mt-32" id="tax-compliance">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-semibold mb-8 text-gray-700 shadow-sm">
<div className="w-2 h-2 rounded-full bg-black"></div> Automated Tax Compliance
                        </div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900 leading-[1.1]">When tax season comes around, you'll be prepared.</h3>
<p className="text-xl text-gray-600 mb-8 leading-relaxed">Dots will automatically collect and verify the necessary information as payees withdraw funds, balancing user experience with compliance. During tax season, file 1099s with the click of a button.</p>
<a className="text-base font-semibold text-gray-900 flex items-center gap-1.5 mb-10 hover:underline underline-offset-4" href="#">See more <i className="w-4 h-4" data-lucide="chevron-down"></i></a>

<div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#0f4a2f] rounded-lg shadow-lg border border-black/10"></div>
</div>

<div className="scroll-mt-32" id="white-labeled">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-semibold mb-8 text-gray-700 shadow-sm">
<div className="w-2 h-2 rounded-full bg-[#fdf05e]"></div> White-labeled Integration
                        </div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900 leading-[1.1]">Seamlessly embed Dots into your product.</h3>
<p className="text-xl text-gray-600 mb-8 leading-relaxed">Choose the perfect level of white labeling for your needs.</p>
<a className="text-base font-semibold text-gray-900 flex items-center gap-1.5 mb-10 hover:underline underline-offset-4" href="#">See more <i className="w-4 h-4" data-lucide="chevron-down"></i></a>

<div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#8a7f5d] rounded-lg shadow-lg border border-transparent p-6 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-4 border border-dashed border-white/40 pointer-events-none"></div>

<div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/60"></div>
<div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/60"></div>
<div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/60"></div>
<div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/60"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-[#F3F4F6] overflow-hidden">
<div className="py-16 md:py-24 text-center border-b border-gray-200 px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Why our customers love us</h2>
</div>
<div className="relative w-full">
<div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 lg:px-20 py-16 gap-8 items-stretch">

<div className="min-w-[85vw] md:min-w-[450px] w-[450px] shrink-0 snap-center flex flex-col relative">
<div className="h-full flex flex-col">
<p className="text-2xl md:text-3xl mb-6 text-black leading-snug" style={{fontFamily: '\'PT Serif\', serif'}}>"We love Dots so much we're trying to add it to more stuff!</p>
<p className="text-gray-600 mb-10 flex-grow text-xl leading-relaxed">They're incredibly responsive and add requested features quickly."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Brett Kushner" className="w-14 h-14 rounded-full object-cover bg-gray-200 border border-gray-300" src="https://usedots.com/_astro/zach-schmid.C7ocogNg_Z1Xbye4.webp"/>
<div>
<div className="font-semibold text-gray-900">Brett Kushner</div>
<div className="text-gray-600 text-base">COO, Don't Tell Comedy</div>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] w-[450px] shrink-0 snap-center flex flex-col relative">
<div className="h-full flex flex-col">
<p className="text-2xl md:text-3xl mb-6 text-black leading-snug" style={{fontFamily: '\'PT Serif\', serif'}}>"Dots for us has been phenomenal.</p>
<p className="text-gray-600 mb-10 flex-grow text-xl leading-relaxed">I had to dedicate at least three to 6 hours a week just to process the day to day payments to drivers. After implementing Dots, it's a 1 hour a week thing."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Daniel Willson" className="w-14 h-14 rounded-full object-cover bg-gray-200 border border-gray-300" src="https://usedots.com/_astro/daniel-willson.DvwK6ABP_2mnwDW.webp"/>
<div>
<div className="font-semibold text-gray-900">Daniel Willson</div>
<div className="text-gray-600 text-base">Director of Operations, Table22</div>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] w-[450px] shrink-0 snap-center flex flex-col relative pl-6">
<div className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#fdf05e] rounded-full"></div>
<div className="h-full flex flex-col">
<p className="text-2xl md:text-3xl mb-6 text-black leading-snug" style={{fontFamily: '\'PT Serif\', serif'}}>"Dots integrations increased conversion by 20% for a few reasons...</p>
<p className="text-gray-600 mb-10 flex-grow text-xl leading-relaxed">Being able to pay people across their first pay period without them changing forms..."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Clayton Rannard" className="w-14 h-14 rounded-full object-cover bg-gray-200 border border-gray-300" src="https://usedots.com/_astro/clayton-rannard.BuWPVnpd_Z14OcdY.webp"/>
<div>
<div className="font-semibold text-gray-900">Clayton Rannard</div>
<div className="text-gray-600 text-base">Co-founder, Payouts</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2.5 pb-16">
<div className="w-16 h-1.5 bg-[#3b0a1d] rounded-full"></div>
<div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
<div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
<div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
</div>
</section>

<section className="border-b border-gray-200 bg-[#F3F4F6] py-24 px-6 lg:px-12">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-20 text-gray-900">It's not even competition</h2>
<div className="max-w-[1000px] mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[700px]">
<thead>
<tr>
<th className="p-6 md:p-8 font-semibold text-gray-900 border-b border-r border-gray-200 bg-white w-1/3 text-lg">Features</th>
<th className="p-6 md:p-8 text-center border-b border-r border-gray-200 bg-[#fafafa]">
<div className="flex flex-col items-center gap-3">
<img alt="Dots" className="w-8 h-8" src="https://usedots.com/_astro/Icon_Black.DsBrGKMh_1gxqi.webp"/>
<span className="font-semibold text-xl text-gray-900">Dots</span>
</div>
</th>
<th className="p-6 md:p-8 text-center border-b border-r border-gray-200 bg-white">
<div className="flex flex-col items-center gap-3">
<img alt="Stripe" className="w-8 h-8 opacity-70" src="https://usedots.com/_astro/stripe-connect.DVpPTIGC.svg"/>
<span className="font-medium text-gray-500 text-lg">Stripe</span>
</div>
</th>
<th className="p-6 md:p-8 text-center border-b border-r border-gray-200 bg-white">
<div className="flex flex-col items-center gap-3">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center font-serif font-bold rounded shadow-sm opacity-70">t</div>
<span className="font-medium text-gray-500 text-lg">Trolley</span>
</div>
</th>
<th className="p-6 md:p-8 text-center border-b border-gray-200 bg-white">
<div className="flex flex-col items-center gap-3">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center font-serif font-bold rounded shadow-sm opacity-70">T</div>
<span className="font-medium text-gray-500 text-lg">Tipalti</span>
</div>
</th>
</tr>
</thead>
<tbody className="text-base text-gray-700">

<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">Customizable Onboarding</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">ID Verification &amp; Background Checks</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 border-b border-r border-gray-200 text-center text-sm font-medium text-gray-500 leading-tight">Partially<br/>Supported</td>
<td className="p-5 border-b border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">Tax Compliance</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">Instant Payouts</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center text-sm font-medium text-gray-500">Additional</td>
<td className="p-5 border-b border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 border-b border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">RTP/FedNow</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 border-b border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">Venmo, PayPal and CashApp</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 border-b border-r border-gray-200 text-center text-sm font-medium text-gray-500">Additional</td>
<td className="p-5 border-b border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">Global Bank Transfers</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">Global Wallet Payouts</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 border-b border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">Fraud Monitoring</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-b border-r border-gray-200 font-medium">Developer Tools</td>
<td className="p-5 border-b border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-r border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-b border-gray-200 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-5 px-8 border-r border-gray-200 font-medium">Multi-tenancy</td>
<td className="p-5 border-r border-gray-200 text-center bg-[#fafafa]"><i className="w-6 h-6 mx-auto text-black" data-lucide="check-circle-2"></i></td>
<td className="p-5 border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 border-r border-gray-200 text-center"><span className="text-gray-300 font-bold text-xl">—</span></td>
<td className="p-5 text-center"><i className="w-6 h-6 mx-auto text-gray-300" data-lucide="check-circle-2"></i></td>
</tr>

<tr>
<td className="p-0 border-t border-gray-200 bg-white"></td>
<td className="p-6 border-t border-r border-gray-200 bg-[#fafafa] text-center">
<button className="px-5 py-2.5 bg-[#fdf05e] text-black rounded text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#fce932] transition-colors shadow-sm whitespace-nowrap">GET STARTED <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</td>
<td className="p-0 border-t border-r border-gray-200 bg-white"></td>
<td className="p-0 border-t border-r border-gray-200 bg-white"></td>
<td className="p-0 border-t border-gray-200 bg-white"></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200">
<div className="p-10 lg:p-20 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-200 bg-[#F3F4F6]">
<div className="lg:sticky lg:top-32">
<h2 className="text-5xl md:text-6xl mb-6 text-gray-900 tracking-tight" style={{fontFamily: '\'PT Serif\', serif'}}>FAQs</h2>
<p className="text-xl text-gray-600 leading-relaxed max-w-sm">A payouts platform that's self-explanatory. But just in case.</p>
</div>
</div>
<div className="lg:col-span-8 p-6 lg:p-12 bg-white">
<div className="max-w-3xl mx-auto divide-y divide-gray-100">
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">Can I send payouts to hundreds or thousands of people at once?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">Can I pay international users or contractors easily?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">What countries can I send payouts to?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">What payment methods does Dots support?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">How does tax compliance work with Dots?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">How long do payouts typically take?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">What are Dots' fees?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">How can I automate payouts without adding more operations work?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">How do I integrate Dots into my platform?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">How fast can I go live with automated payouts?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">Is Dots secure and compliant?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
<div className="py-6 flex justify-between items-center cursor-pointer group border-b border-gray-100">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-black pr-8 leading-snug">Can I white-label the payout experience?</h3>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center border-b border-gray-200 bg-[#F3F4F6] flex flex-col items-center justify-center">
<h2 className="text-4xl md:text-5xl text-gray-900 mb-10 tracking-tight" style={{fontFamily: '\'PT Serif\', serif'}}>Unmatched flexibility to meet you where you are.</h2>
<button className="px-7 py-3.5 bg-[#fdf05e] text-black rounded font-semibold text-base inline-flex items-center gap-2 hover:bg-[#fce932] transition-colors shadow-sm">SCHEDULE A FREE DEMO <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</section>

<section className="grid grid-cols-1 lg:grid-cols-4 border-b border-gray-200 min-h-[500px]">

<div className="p-10 lg:p-14 lg:col-span-1 bg-[#3b0a1d] text-white/70 flex flex-col gap-8 relative overflow-hidden">
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="absolute inset-0 opacity-40 pointer-events-none" style={{backgroundImage: 'url(\'https://usedots.com/assets/images/backgrounds/maroon_blobs.webp\')', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay'}}></div>
<div className="relative z-10 text-white font-semibold text-xl cursor-pointer hover:text-white transition-colors">Create User</div>
<div className="relative z-10 font-medium text-xl cursor-pointer hover:text-white transition-colors">Send Payout</div>
<div className="relative z-10 font-medium text-xl cursor-pointer hover:text-white transition-colors">Create Transfer</div>
</div>

<div className="p-6 md:p-10 lg:p-14 lg:col-span-3 bg-[#F3F4F6] flex flex-col">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-6">
<div className="flex bg-gray-200/80 p-1 rounded-lg border border-gray-300/50 w-full sm:w-auto overflow-x-auto hide-scrollbar">
<button className="px-5 py-2 bg-white shadow-sm rounded-md text-sm font-semibold text-gray-900 whitespace-nowrap">cURL</button>
<button className="px-5 py-2 text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors whitespace-nowrap">Python</button>
<button className="px-5 py-2 text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors whitespace-nowrap">Node.js</button>
</div>
<button className="px-6 py-2.5 bg-[#fdf05e] text-black rounded text-sm font-semibold flex items-center gap-2 hover:bg-[#fce932] transition-colors shadow-sm shrink-0">TRY IT OUT <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
<div className="bg-[#1e1e1e] rounded-xl p-8 shadow-xl flex-grow border border-gray-800 overflow-hidden relative group">

<div className="absolute top-4 left-4 flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="mt-4 overflow-x-auto hide-scrollbar text-[15px] leading-[1.6]">
<pre className="font-mono text-gray-300"><code><span className="text-pink-400">curl</span> -X POST https://api.dots.dev/v2/users \
  -H <span className="text-green-300">"Authorization: Bearer YOUR_API_KEY"</span> \
  -H <span className="text-green-300">"Content-Type: application/json"</span> \
  -d <span className="text-yellow-200">'{
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane.doe@example.com",
    "phone_number": "+14155551234",
    "date_of_birth": "1990-01-15"
  }'</span></code></pre>
</div>
</div>
</div>
</section>

<footer className="bg-[#F3F4F6] relative overflow-hidden pt-24 pb-12 border-b border-gray-200 z-0">

<div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[130%] opacity-[0.03] pointer-events-none flex justify-center -z-10 select-none">
<img alt="" className="w-full h-auto" src="https://usedots.com/assets/branding/Dots_Black/Dots_Logo_Black.svg"/>
</div>
<div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-8 px-8 lg:px-16 mx-auto mb-24">
<div className="col-span-1">
<h4 className="font-semibold text-gray-900 mb-6 text-xl">Platform</h4>
<ul className="space-y-3.5 text-base text-gray-600 font-medium">
<li><a className="hover:text-black transition-colors" href="#">Dots Payouts</a></li>
<li><a className="hover:text-black transition-colors" href="#">Dots Onboard</a></li>
<li><a className="hover:text-black transition-colors" href="#">Dots Tax</a></li>
<li><a className="hover:text-black transition-colors" href="#">Payout Links</a></li>
<li><a className="hover:text-black transition-colors" href="#">Comprehensive Security</a></li>
<li><a className="hover:text-black transition-colors" href="#">Payouts API</a></li>
<li><a className="hover:text-black transition-colors" href="#">Payouts Automation</a></li>
<li><a className="hover:text-black transition-colors" href="#">Dots API Docs</a></li>
<li><a className="hover:text-black transition-colors" href="#">API Status</a></li>
<li><a className="hover:text-black transition-colors" href="#">Coverage Map</a></li>
<li><a className="hover:text-black transition-colors" href="#">International Payments</a></li>
<li><a className="hover:text-black transition-colors" href="#">Dots vs Stripe Connect</a></li>
<li><a className="hover:text-black transition-colors" href="#">Dots vs Stripe Payouts</a></li>
<li><a className="hover:text-black transition-colors" href="#">Dots vs Trolley</a></li>
<li><a className="hover:text-black transition-colors" href="#">Dots vs Tipalti</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-semibold text-gray-900 mb-6 text-xl">Solutions</h4>
<ul className="space-y-3.5 text-base text-gray-600 font-medium">
<li><a className="hover:text-black transition-colors" href="#">Marketplaces</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contractor Payments</a></li>
<li><a className="hover:text-black transition-colors" href="#">eSports</a></li>
<li><a className="hover:text-black transition-colors" href="#">Affiliate Programs</a></li>
<li><a className="hover:text-black transition-colors" href="#">Influencer Marketing</a></li>
<li><a className="hover:text-black transition-colors" href="#">Gig Economy</a></li>
<li><a className="hover:text-black transition-colors" href="#">Class Action Settlements</a></li>
<li><a className="hover:text-black transition-colors" href="#">Expert Networks</a></li>
<li><a className="hover:text-black transition-colors" href="#">Music Royalties</a></li>
<li><a className="hover:text-black transition-colors" href="#">Telehealth</a></li>
<li><a className="hover:text-black transition-colors" href="#">Freelancers</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-semibold text-gray-900 mb-6 text-xl">Company</h4>
<ul className="space-y-3.5 text-base text-gray-600 font-medium">
<li><a className="hover:text-black transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div className="hidden lg:block col-span-1"></div>
<div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
<button className="px-6 py-3.5 bg-black text-white rounded font-semibold w-full text-center hover:bg-gray-900 transition-colors shadow-sm">LOGIN</button>
<button className="px-6 py-3.5 bg-[#fdf05e] text-black rounded font-semibold w-full flex justify-center items-center gap-2 hover:bg-[#fce932] transition-colors shadow-sm">SCHEDULE DEMO <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="relative z-10 px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center text-sm font-medium text-gray-500 mx-auto gap-4">
<div>© 2024 Dots. All rights reserved.</div>
<div className="space-x-4 flex items-center">
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<span className="text-gray-300">•</span>
<a className="hover:text-black transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
