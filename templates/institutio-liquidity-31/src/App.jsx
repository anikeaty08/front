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
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<a className="text-xl font-semibold tracking-tight text-gray-900" href="#home">ZINK</a>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="#investors">Investors</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="#partners">Partners</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" href="#contact">Contact</a>
</div>
<button className="md:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden gradient-bg" id="home">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-4xl mx-auto animate-fade-in">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
                    Institutional Liquidity for SME Finance
                </h1>
<p className="text-xl md:text-2xl text-gray-600 mb-10 font-light leading-relaxed">
                    Zink provides licensed lenders with stablecoin-based liquidity, delivering cheaper capital and seamless cross-border settlement.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#investors">
                        For Investors
                        <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center px-8 py-4 rounded-full bg-white border-2 border-gray-200 text-gray-900 text-base font-medium hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#partners">
                        For Lenders
                        <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto">
<div className="relative rounded-3xl border border-gray-100 overflow-hidden" style={{background: 'linear-gradient(90deg, rgba(0,194,255,0.08) 0%, rgba(255,255,255,0.0) 70%), #F8FAFC'}}>
<div className="px-5 sm:px-8 py-10">
<div className="-mx-4 overflow-x-auto">
<div className="min-w-[880px] px-4">
<div className="relative">

<svg className="absolute inset-0 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 36">

<path d="M 12.5 18 C 19 14, 31 14, 37.5 18" style={{fill: 'none', stroke: 'rgba(0,194,255,0.85)', strokeWidth: '0.8', strokeLinecap: 'round', strokeDasharray: '4 6', animation: 'arrowDash 2.2s linear infinite', filter: 'drop-shadow(0 0 6px rgba(0,194,255,0.35))'}}></path>

<path d="M 37.5 18 l -1.4 -1.8 m 1.4 1.8 l -1.4 1.8" style={{fill: 'none', stroke: 'rgba(0,194,255,0.85)', strokeWidth: '0.8', strokeLinecap: 'round'}}></path>

<path d="M 37.5 18 C 44 14, 56 14, 62.5 18" style={{fill: 'none', stroke: 'rgba(0,194,255,0.85)', strokeWidth: '0.8', strokeLinecap: 'round', strokeDasharray: '4 6', animation: 'arrowDash 2.2s linear infinite', animationDelay: '0.2s', filter: 'drop-shadow(0 0 6px rgba(0,194,255,0.35))'}}></path>
<path d="M 62.5 18 l -1.4 -1.8 m 1.4 1.8 l -1.4 1.8" style={{fill: 'none', stroke: 'rgba(0,194,255,0.85)', strokeWidth: '0.8', strokeLinecap: 'round'}}></path>

<path d="M 62.5 18 C 69 14, 81 14, 87.5 18" style={{fill: 'none', stroke: 'rgba(0,194,255,0.85)', strokeWidth: '0.8', strokeLinecap: 'round', strokeDasharray: '4 6', animation: 'arrowDash 2.2s linear infinite', animationDelay: '0.4s', filter: 'drop-shadow(0 0 6px rgba(0,194,255,0.35))'}}></path>
<path d="M 87.5 18 l -1.4 -1.8 m 1.4 1.8 l -1.4 1.8" style={{fill: 'none', stroke: 'rgba(0,194,255,0.85)', strokeWidth: '0.8', strokeLinecap: 'round'}}></path>
</svg>

<div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-stretch">

<div className="relative bg-white rounded-2xl px-5 py-6 sm:px-6 sm:py-7" style={{boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 194, 255, 0.25), 0 0 20px rgba(0,194,255,0.10)'}}>
<div className="flex flex-col items-center justify-center h-full text-center" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', color: '#1A1A1A'}}>
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #00C2FF 0%, #3B82F6 100%)', boxShadow: '0 8px 20px rgba(0,194,255,0.25)'}}>
<i className="w-6 h-6 sm:w-7 sm:h-7 text-white" data-lucide="wallet" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm sm:text-base font-medium tracking-tight">LP Investors</p>
</div>
</div>

<div className="relative bg-white rounded-2xl px-5 py-6 sm:px-6 sm:py-7" style={{boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 194, 255, 0.25), 0 0 20px rgba(0,194,255,0.10)'}}>
<div className="flex flex-col items-center justify-center h-full text-center" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', color: '#1A1A1A'}}>
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #00C2FF 0%, #3B82F6 100%)', boxShadow: '0 8px 20px rgba(0,194,255,0.25)'}}>
<i className="w-6 h-6 sm:w-7 sm:h-7 text-white" data-lucide="database" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm sm:text-base font-medium tracking-tight">ZINK Pool</p>
</div>
</div>

<div className="relative bg-white rounded-2xl px-5 py-6 sm:px-6 sm:py-7" style={{boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 194, 255, 0.25), 0 0 20px rgba(0,194,255,0.10)'}}>
<div className="flex flex-col items-center justify-center h-full text-center" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', color: '#1A1A1A'}}>
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #00C2FF 0%, #3B82F6 100%)', boxShadow: '0 8px 20px rgba(0,194,255,0.25)'}}>
<i className="w-6 h-6 sm:w-7 sm:h-7 text-white" data-lucide="building-2" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm sm:text-base font-medium tracking-tight">SME Lenders</p>
</div>
</div>

<div className="relative bg-white rounded-2xl px-5 py-6 sm:px-6 sm:py-7" style={{boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 194, 255, 0.25), 0 0 20px rgba(0,194,255,0.10)'}}>
<div className="flex flex-col items-center justify-center h-full text-center" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', color: '#1A1A1A'}}>
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #00C2FF 0%, #3B82F6 100%)', boxShadow: '0 8px 20px rgba(0,194,255,0.25)'}}>
<i className="w-6 h-6 sm:w-7 sm:h-7 text-white" data-lucide="briefcase" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm sm:text-base font-medium tracking-tight">SME Businesses</p>
</div>
</div>
</div>
</div>

<p className="mt-8 text-center text-xs sm:text-sm" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', color: '#1A1A1A'}}>
                                    USDC-based liquidity flows from LPs → ZINK Pool → SME Lenders → Real Economy.
                                </p>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Why ZINK</h2>
<p className="text-xl text-gray-600 font-light">Bridging global capital with licensed local lenders</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-blue-500" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-3xl font-semibold text-gray-900 mb-3">$200B+</h3>
<p className="text-base text-gray-600 leading-relaxed">ASEAN SME funding gap represents a massive opportunity for institutional capital deployment</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-blue-500" data-lucide="percent" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-3xl font-semibold text-gray-900 mb-3">12–18% → Lower</h3>
<p className="text-base text-gray-600 leading-relaxed">Local capital costs reduced significantly via stablecoin-based liquidity infrastructure</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-blue-500" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-3xl font-semibold text-gray-900 mb-3">&lt;1% Cost</h3>
<p className="text-base text-gray-600 leading-relaxed">Minimal conversion cost with instant cross-border settlement via stablecoin rails</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">How It Works</h2>
<p className="text-xl text-gray-600 font-light">Seamless liquidity flow from global capital to local SMEs</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">
<div className="relative">
<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow h-full">
<div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-6 font-semibold text-lg">1</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">LP Investment</h3>
<p className="text-base text-gray-600 leading-relaxed">Investors deploy capital in stablecoins (USDC/USDT) into the ZINK liquidity pool</p>
</div>
</div>
<div className="relative">
<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow h-full">
<div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-6 font-semibold text-lg">2</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Pool Management</h3>
<p className="text-base text-gray-600 leading-relaxed">ZINK aggregates and manages liquidity via licensed exchanges and SPV structure</p>
</div>
</div>
<div className="relative">
<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow h-full">
<div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-6 font-semibold text-lg">3</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Lender Drawdown</h3>
<p className="text-base text-gray-600 leading-relaxed">Licensed lenders access capital for SME financing with instant settlement</p>
</div>
</div>
<div className="relative">
<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow h-full">
<div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-6 font-semibold text-lg">4</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Returns Flow</h3>
<p className="text-base text-gray-600 leading-relaxed">Repayments from SMEs flow back to LPs with full transparency and reporting</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Governance &amp; Structure</h2>
<p className="text-xl text-gray-600 font-light">Capital always routed via licensed entities, under audited SPV structure</p>
</div>
<div className="max-w-5xl mx-auto">
<div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-12 border border-gray-100">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1 text-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<i className="w-8 h-8 text-blue-500" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm font-medium text-gray-900">Holding Entity</p>
</div>
<div className="hidden md:block">
<i className="w-6 h-6 text-gray-400" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 text-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<i className="w-8 h-8 text-blue-500" data-lucide="file-check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm font-medium text-gray-900">Licensed SPV</p>
</div>
<div className="hidden md:block">
<i className="w-6 h-6 text-gray-400" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 text-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<i className="w-8 h-8 text-blue-500" data-lucide="repeat" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm font-medium text-gray-900">Licensed Exchange</p>
</div>
<div className="hidden md:block">
<i className="w-6 h-6 text-gray-400" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 text-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<i className="w-8 h-8 text-blue-500" data-lucide="building-2" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm font-medium text-gray-900">Licensed Lender</p>
</div>
<div className="hidden md:block">
<i className="w-6 h-6 text-gray-400" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 text-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<i className="w-8 h-8 text-blue-500" data-lucide="briefcase" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm font-medium text-gray-900">SME Borrower</p>
</div>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="text-center p-6">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
<i className="w-6 h-6 text-blue-500" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<h4 className="font-medium text-gray-900 mb-2">Regulated Custody</h4>
<p className="text-sm text-gray-600">All assets held in licensed exchange custody</p>
</div>
<div className="text-center p-6">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
<i className="w-6 h-6 text-blue-500" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
</div>
<h4 className="font-medium text-gray-900 mb-2">Audited Structure</h4>
<p className="text-sm text-gray-600">Regular third-party audits and compliance reviews</p>
</div>
<div className="text-center p-6">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
<i className="w-6 h-6 text-blue-500" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
</div>
<h4 className="font-medium text-gray-900 mb-2">Full Transparency</h4>
<p className="text-sm text-gray-600">Blockchain-tracked settlements and reporting</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-gray-50" id="investors">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Stable Yields. Institutional Transparency.</h2>
<p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">Earn 5–10% APY through licensed SME lending exposure, fully tracked via blockchain settlement</p>
</div>

<div className="grid md:grid-cols-4 gap-6 mb-16">
<div className="bg-white rounded-2xl p-6 border border-gray-100">
<p className="text-sm font-medium text-gray-600 mb-2">Gross Yield</p>
<p className="text-3xl font-semibold text-gray-900">12–15%</p>
</div>
<div className="bg-white rounded-2xl p-6 border border-gray-100">
<p className="text-sm font-medium text-gray-600 mb-2">Platform Fees</p>
<p className="text-3xl font-semibold text-gray-900">2–3%</p>
</div>
<div className="bg-white rounded-2xl p-6 border border-gray-100">
<p className="text-sm font-medium text-gray-600 mb-2">Risk Buffer</p>
<p className="text-3xl font-semibold text-gray-900">2%</p>
</div>
<div className="bg-white rounded-2xl p-6 border border-blue-200 bg-blue-50">
<p className="text-sm font-medium text-blue-700 mb-2">Net APY</p>
<p className="text-3xl font-semibold text-blue-600">7–10%</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="bg-white rounded-2xl p-8 border border-gray-100">
<div className="flex items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-6 h-6 text-blue-500" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Control</h3>
<p className="text-base text-gray-600 leading-relaxed">Licensed lenders only, diversified allocation across multiple SME portfolios, continuously monitored by ZINK's risk team</p>
</div>
</div>
<ul className="space-y-3">
<li className="flex items-center text-sm text-gray-600">
<i className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                            Diversified across 10+ licensed lenders
                        </li>
<li className="flex items-center text-sm text-gray-600">
<i className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                            Real-time monitoring and reporting
                        </li>
<li className="flex items-center text-sm text-gray-600">
<i className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                            2% first-loss capital buffer
                        </li>
</ul>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-100">
<div className="flex items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-6 h-6 text-blue-500" data-lucide="file-check" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance</h3>
<p className="text-base text-gray-600 leading-relaxed">Structured through licensed SPV, with exchange custody and regular third-party audits ensuring institutional-grade standards</p>
</div>
</div>
<ul className="space-y-3">
<li className="flex items-center text-sm text-gray-600">
<i className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                            SPV structure (ADGM/IFZA jurisdiction)
                        </li>
<li className="flex items-center text-sm text-gray-600">
<i className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                            Licensed exchange custody partners
                        </li>
<li className="flex items-center text-sm text-gray-600">
<i className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                            Quarterly audits and compliance reviews
                        </li>
</ul>
</div>

<div className="flex items-start">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-6 h-6 text-blue-500" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-gray-900 mb-2">Institutional Reporting</h3>
<p className="text-base text-gray-600 leading-relaxed mb-6">Monthly statements, real-time dashboard access, and on-chain settlement tracking for complete transparency</p>
<div className="grid md:grid-cols-3 gap-6">
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mr-3">
<i className="w-5 h-5 text-gray-600" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Monthly Reports</p>
<p className="text-xs text-gray-500">Detailed performance</p>
</div>
</div>
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mr-3">
<i className="w-5 h-5 text-gray-600" data-lucide="monitor" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Live Dashboard</p>
<p className="text-xs text-gray-500">Real-time tracking</p>
</div>
</div>
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mr-3">
<i className="w-5 h-5 text-gray-600" data-lucide="link" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">On-Chain Data</p>
<p className="text-xs text-gray-500">Blockchain verified</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="mailto:investors@zink.global">
                    Request Investor Access
                    <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white" id="partners">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Access Cheaper Liquidity for Your SME Portfolio</h2>
<p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">ZINK provides stablecoin-based liquidity lines with seamless local settlement</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-500" data-lucide="trending-down" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Lower Funding Cost</h3>
<p className="text-sm text-gray-600 leading-relaxed">Access capital at 6–9% vs 12–18% traditional rates</p>
</div>
<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-500" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Settlement</h3>
<p className="text-sm text-gray-600 leading-relaxed">Same-day USDC to local currency conversion</p>
</div>
<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-500" data-lucide="plug" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Integration</h3>
<p className="text-sm text-gray-600 leading-relaxed">Dashboard portal or API integration available</p>
</div>
<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-500" data-lucide="activity" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Reporting</h3>
<p className="text-sm text-gray-600 leading-relaxed">Real-time tracking of all transactions and settlements</p>
</div>
</div>
<div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-12 border border-gray-100 mb-16">
<h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Partnership Process</h3>
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<span className="text-xl font-semibold text-blue-500">1</span>
</div>
<h4 className="font-medium text-gray-900 mb-2">Apply</h4>
<p className="text-sm text-gray-600">Submit partnership inquiry and company details</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<span className="text-xl font-semibold text-blue-500">2</span>
</div>
<h4 className="font-medium text-gray-900 mb-2">Due Diligence</h4>
<p className="text-sm text-gray-600">License verification and credit assessment</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<span className="text-xl font-semibold text-blue-500">3</span>
</div>
<h4 className="font-medium text-gray-900 mb-2">Onboard</h4>
<p className="text-sm text-gray-600">Contract execution and system integration</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 mx-auto border border-gray-100">
<span className="text-xl font-semibold text-blue-500">4</span>
</div>
<h4 className="font-medium text-gray-900 mb-2">Draw Liquidity</h4>
<p className="text-sm text-gray-600">Access capital for SME lending</p>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
<h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Settlement Infrastructure</h3>
<div className="max-w-3xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-center gap-8">
<div className="flex-1 text-center">
<div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 mx-auto">
<i className="w-10 h-10 text-blue-500" data-lucide="dollar-sign" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="font-medium text-gray-900 mb-1">USDC/USDT</p>
<p className="text-sm text-gray-600">Stablecoin liquidity</p>
</div>
<div>
<i className="w-8 h-8 text-blue-400" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 text-center">
<div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 mx-auto">
<i className="w-10 h-10 text-blue-500" data-lucide="repeat" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="font-medium text-gray-900 mb-1">Licensed Exchange</p>
<p className="text-sm text-gray-600">Instant conversion</p>
</div>
<div>
<i className="w-8 h-8 text-blue-400" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 text-center">
<div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 mx-auto">
<i className="w-10 h-10 text-blue-500" data-lucide="coins" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="font-medium text-gray-900 mb-1">Local Currency</p>
<p className="text-sm text-gray-600">PHP, IDR, VND, etc.</p>
</div>
</div>
<p className="text-center text-sm text-gray-500 mt-8">
                        Settlement typically completes within 24 hours with &lt;1% conversion cost
                    </p>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="mailto:partners@zink.global">
                    Apply as Lending Partner
                    <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">About ZINK Capital</h2>
<p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                    ZINK bridges global liquidity with emerging-market SME lenders, leveraging stablecoin rails for speed, transparency, and compliance.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-12 mb-20">
<div className="bg-white rounded-2xl p-8 border border-gray-100">
<h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
<p className="text-base text-gray-600 leading-relaxed mb-4">
                        We're building the infrastructure layer that connects institutional capital markets with frontier SME lending opportunities, using stablecoin technology to eliminate friction, reduce costs, and increase transparency.
                    </p>
<p className="text-base text-gray-600 leading-relaxed">
                        By partnering exclusively with licensed lenders and operating through regulated structures, we deliver institutional-grade risk management while maintaining the speed and efficiency of blockchain settlement.
                    </p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-100">
<h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h3>
<ul className="space-y-4">
<li className="flex items-start">
<i className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-base text-gray-600">Work only with licensed, vetted SME lenders</span>
</li>
<li className="flex items-start">
<i className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-base text-gray-600">Maintain all capital in regulated custody</span>
</li>
<li className="flex items-start">
<i className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-base text-gray-600">Provide full transparency via blockchain settlement</span>
</li>
<li className="flex items-start">
<i className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-base text-gray-600">Structure all operations through audited SPVs</span>
</li>
</ul>
</div>
</div>
<div className="mb-20">
<h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Leadership Team</h3>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
<div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-6"></div>
<h4 className="text-lg font-semibold text-gray-900 mb-1">Alex Chen</h4>
<p className="text-sm text-blue-600 mb-3">Co-Founder &amp; CEO</p>
<p className="text-sm text-gray-600 leading-relaxed">15+ years in fintech and structured finance. Previously at Goldman Sachs and Stripe.</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
<div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-6"></div>
<h4 className="text-lg font-semibold text-gray-900 mb-1">Sarah Martinez</h4>
<p className="text-sm text-blue-600 mb-3">Co-Founder &amp; COO</p>
<p className="text-sm text-gray-600 leading-relaxed">Former Head of Operations at Circle. Expert in stablecoin infrastructure and compliance.</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
<div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-6"></div>
<h4 className="text-lg font-semibold text-gray-900 mb-1">David Tan</h4>
<p className="text-sm text-blue-600 mb-3">Head of Risk</p>
<p className="text-sm text-gray-600 leading-relaxed">20+ years in credit risk management across APAC markets. Previously at Standard Chartered.</p>
</div>
</div>
</div>
<div>
<h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Advisory Board</h3>
<div className="grid md:grid-cols-4 gap-6">
<div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
<div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Michael Lee</h4>
<p className="text-xs text-gray-600">Legal &amp; Compliance</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
<div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Jennifer Wong</h4>
<p className="text-xs text-gray-600">Blockchain Technology</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
<div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Robert Singh</h4>
<p className="text-xs text-gray-600">SME Lending Expert</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
<div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Patricia Kim</h4>
<p className="text-xs text-gray-600">Institutional Markets</p>
</div>
</div>
</div>
<div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
<div className="flex flex-wrap items-center justify-center gap-12">
<div className="text-center">
<p className="text-xs font-medium text-gray-500 mb-2">SPV JURISDICTION</p>
<p className="text-sm font-semibold text-gray-900">ADGM / IFZA</p>
</div>
<div className="text-center">
<p className="text-xs font-medium text-gray-500 mb-2">PARTNER EXCHANGES</p>
<p className="text-sm font-semibold text-gray-900">Licensed &amp; Regulated</p>
</div>
<div className="text-center">
<p className="text-xs font-medium text-gray-500 mb-2">AUDIT FREQUENCY</p>
<p className="text-sm font-semibold text-gray-900">Quarterly</p>
</div>
<div className="text-center">
<p className="text-xs font-medium text-gray-500 mb-2">CUSTODY</p>
<p className="text-sm font-semibold text-gray-900">Institutional Grade</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Unlock Cheaper SME Liquidity</h2>
<p className="text-xl text-gray-600 font-light mb-12">Join institutional investors and licensed lenders building the future of SME finance</p>
<div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
<form className="max-w-lg mx-auto space-y-6">
<div className="text-left">
<label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John Smith" type="text"/>
</div>
<div className="text-left">
<label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@company.com" type="email"/>
</div>
<div className="text-left">
<label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
<option>Institutional Investor / LP</option>
<option>Licensed SME Lender</option>
<option>Other</option>
</select>
</div>
<div className="text-left">
<label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Tell us about your interest..." rows="4"></textarea>
</div>
<button className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300" type="submit">
                        Submit Inquiry
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-400 py-16 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div>
<h3 className="text-white text-lg font-semibold tracking-tight mb-4">ZINK</h3>
<p className="text-sm leading-relaxed">Institutional liquidity infrastructure for emerging market SME finance.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Governance</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Investors</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#investors">LP Portal</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Reporting</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="mailto:investors@zink.global">investors@zink.global</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Partners</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#partners">Apply</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">API Documentation</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="mailto:partners@zink.global">partners@zink.global</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500 text-center md:text-left">
                        ZINK Capital SPV (ADGM / IFZA) — All rights reserved. Past performance does not guarantee future results.
                    </p>
<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
