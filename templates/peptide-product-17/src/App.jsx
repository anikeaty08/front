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



document.addEventListener("DOMContentLoaded", () => {
const setupToggle = (selector) => {
const buttons = document.querySelectorAll(selector);
buttons.forEach((btn) => {
btn.addEventListener("click", () => {
buttons.forEach((b) => {
if (b.dataset.type === "outline") {
b.classList.remove("border-[#017eff]", "text-[#017eff]", "bg-white", "shadow-sm");
b.classList.add("border-transparent", "text-gray-500", "hover:text-gray-700");
} else {
b.classList.remove("bg-[#017eff]", "text-white");
b.classList.add("text-[#292e4c]", "hover:bg-gray-100");
}
});
if (btn.dataset.type === "outline") {
btn.classList.add("border-[#017eff]", "text-[#017eff]", "bg-white", "shadow-sm");
btn.classList.remove("border-transparent", "text-gray-500", "hover:text-gray-700");
} else {
btn.classList.add("bg-[#017eff]", "text-white");
btn.classList.remove("text-[#292e4c]", "hover:bg-gray-100");
}
});
});
};
setupToggle(".vial-toggle");
setupToggle(".dose-toggle");
setupToggle(".coa-toggle");
setupToggle(".coa-dose");
const infoItems = document.querySelectorAll(".info-accordion-item");
infoItems.forEach((item) => {
item.addEventListener("click", () => {
const answer = item.querySelector(".info-accordion-answer");
const iconWrapper = item.querySelector(".icon-wrapper");
const isOpen = !answer.classList.contains("hidden");
document
.querySelectorAll(".info-accordion-answer")
.forEach((a) => a.classList.add("hidden"));
document
.querySelectorAll(".info-accordion-item .icon-wrapper")
.forEach((i) => (i.style.transform = "rotate(0deg)"));
if (!isOpen) {
answer.classList.remove("hidden");
iconWrapper.style.transform = "rotate(45deg)";
}
});
});
const faqs = document.querySelectorAll(".faq-item");
faqs.forEach((faq) => {
faq.addEventListener("click", () => {
const answer = faq.querySelector(".faq-answer");
const icon = faq.querySelector('iconify-icon');
const isOpen = !answer.classList.contains("hidden");
document
.querySelectorAll(".faq-answer")
.forEach((a) => a.classList.add("hidden"));
document
.querySelectorAll(".faq-item iconify-icon")
.forEach((i) => (i.style.transform = "rotate(0deg)"));
if (!isOpen) {
answer.classList.remove("hidden");
icon.style.transform = "rotate(180deg)";
}
});
});
});



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
      

<div className="w-full bg-[#292e4c] py-2 px-4 text-center border-b border-[#1a1d36]">
<p className="text-xs sm:text-sm font-medium tracking-wide text-white">
<span className="text-[#017eff] uppercase tracking-wider">
          Research Use Only
        </span>
<span className="opacity-60 mx-1">•</span>
<span className="opacity-90 font-normal">
          All products listed are for research purposes ONLY.
        </span>
</p>
</div>

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-6xl mx-auto px-4 lg:px-8 h-12 lg:h-14 flex items-center justify-between">
<a className="flex-shrink-0 hover:opacity-80 transition-opacity" href="#">
<img alt="Direct Peptides" className="h-5 lg:h-6 w-auto" src="https://framerusercontent.com/images/Quu7jNUwfMYHDVnHrj0m4QMVlo4.svg"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs lg:text-sm font-medium text-[#292e4c] hover:text-[#017eff] transition-colors" href="#">
            Home
          </a>
<a className="text-xs lg:text-sm font-medium text-[#292e4c] hover:text-[#017eff] transition-colors" href="#">
            Products
          </a>
<a className="text-xs lg:text-sm font-medium text-[#292e4c] hover:text-[#017eff] transition-colors" href="#">
            Blog
          </a>
<a className="text-xs lg:text-sm font-medium text-[#292e4c] hover:text-[#017eff] transition-colors" href="#">
            COA
          </a>
</div>
<div className="flex items-center gap-4 lg:gap-5">
<div className="hidden md:flex items-center gap-2 text-xs lg:text-sm">
<span className="text-gray-400 font-normal">Need help?</span>
<a className="font-medium text-[#292e4c] hover:text-[#017eff] transition-colors" href="sms:+19729190219">
              +1 (972) 919-0219
            </a>
</div>
<div className="w-px h-4 bg-gray-200 hidden md:block"></div>
<button className="flex items-center gap-1 bg-white hover:bg-gray-50 transition-all border border-gray-200 shadow-sm rounded-lg px-2 lg:px-3 py-1 lg:py-1.5 text-xs font-medium text-[#292e4c]">
<iconify-icon className="text-[#017eff]" height="14" icon="solar:global-linear" strokeWidth="1.5" width="14"></iconify-icon>
            EN
            <iconify-icon className="text-gray-400 ml-0.5" height="14" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="max-w-6xl mx-auto px-4 lg:px-8 py-4 lg:py-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4 lg:gap-10 items-start lg:items-center">

<div className="block lg:hidden w-full px-1">
<div className="flex items-center justify-between mb-1">
<h1 className="text-2xl font-medium tracking-tight text-[#292e4c]">
            BPC-157
          </h1>
<div className="flex items-center gap-1.5 bg-green-50 px-2 py-0.5 rounded-full border border-green-100 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium tracking-wide uppercase text-green-700">
              In Stock
            </span>
</div>
</div>
<p className="text-xs font-normal text-gray-500">
          Research Recovery Compound
        </p>
</div>

<div className="w-full h-52 sm:h-72 lg:h-auto lg:aspect-square bg-gradient-to-b from-[#f5f5f7] to-[#f0f0f4] border border-gray-100/80 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative flex items-center justify-center p-4 lg:p-8 group shadow-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,126,255,0.06),transparent_50%)]"></div>
<img alt="BPC-157 Vial" className="w-full h-full object-contain object-center drop-shadow-xl lg:drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105 relative z-10 mix-blend-multiply" src="https://framerusercontent.com/images/N2fs4ojQAjXKI8o6YLN4keorkII.png"/>
</div>

<div className="flex flex-col w-full max-w-md mx-auto lg:mx-0 lg:w-full gap-4 lg:gap-5 pt-0">

<div className="hidden lg:block">
<div className="flex items-center justify-between mb-2">
<h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-[#292e4c]">
              BPC-157
            </h1>
<div className="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-full border border-green-100 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium tracking-wide uppercase text-green-700">
                In Stock
              </span>
</div>
</div>
<p className="text-xs lg:text-sm font-normal text-gray-500">
            Research Recovery Compound
          </p>
</div>

<div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#017eff] to-[#5aabff]"></div>

<div>
<div className="flex justify-between items-center mb-2 px-1">
<span className="text-xs font-medium text-[#292e4c]">
                Select Dose
              </span>
<span className="text-xs font-normal text-gray-400">Per vial</span>
</div>
<div className="flex items-center bg-[#f3f3f8] p-1 rounded-lg w-full border border-gray-200/60 shadow-inner">
<button className="dose-toggle flex-1 flex flex-col items-center justify-center py-1.5 rounded-md bg-[#017eff] text-white transition-all shadow-sm">
<span className="text-xs font-medium">5mg</span>
</button>
<button className="dose-toggle flex-1 flex flex-col items-center justify-center py-1.5 rounded-md text-xs font-medium text-[#292e4c] hover:bg-gray-100 border-transparent transition-all">
<span className="text-xs font-medium">10mg</span>
</button>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2 px-1">
<span className="text-xs font-medium text-[#292e4c]">Quantity</span>
<span className="text-xs font-medium tracking-wide uppercase text-[#017eff] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/50">
                Save 15%
              </span>
</div>
<div className="flex items-center bg-[#f3f3f8] p-1 rounded-lg w-full border border-gray-200/60 shadow-inner">
<button className="vial-toggle flex-1 text-center py-1.5 rounded-md text-xs font-medium bg-[#017eff] text-white transition-all shadow-sm">
                Single Vial
              </button>
<button className="vial-toggle flex-1 text-center py-1.5 rounded-md text-xs font-medium text-[#292e4c] border-transparent hover:bg-gray-100 transition-all">
                Pack of 10
              </button>
</div>
</div>
<div className="w-full h-px bg-gray-100 mt-1"></div>

<div className="flex items-end justify-between">
<div>
<p className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">
                One-time purchase
              </p>
<div className="flex items-baseline gap-2">
<span className="text-2xl lg:text-3xl font-medium tracking-tight text-[#292e4c] leading-none">
                  $39.00
                </span>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium tracking-wide uppercase text-[#017eff] flex items-center justify-end gap-1 bg-[#017eff]/10 px-2 py-1 rounded-md">
<iconify-icon height="14" icon="solar:box-linear" strokeWidth="1.5" width="14"></iconify-icon>
                Ships Today
              </p>
</div>
</div>

<button className="w-full bg-[#017eff] hover:bg-[#006bd6] text-white rounded-xl py-2.5 lg:py-3 text-xs lg:text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(1,126,255,0.39)] hover:shadow-[0_6px_20px_rgba(1,126,255,0.23)] hover:-translate-y-0.5 mt-1">
            Add To Cart
            <iconify-icon height="16" icon="solar:cart-large-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>

<div className="flex items-center justify-between px-1 text-xs font-medium text-gray-500 mt-1">
<span className="flex items-center gap-1">
<iconify-icon className="text-[#017eff]" height="14" icon="solar:shield-check-linear" strokeWidth="1.5" width="14"></iconify-icon>
              99%+ Purity
            </span>
<span className="flex items-center gap-1">
<iconify-icon className="text-[#017eff]" height="14" icon="solar:test-tube-linear" strokeWidth="1.5" width="14"></iconify-icon>
              Lab Tested
            </span>
<span className="flex items-center gap-1">
<iconify-icon className="text-[#017eff]" height="14" icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="14"></iconify-icon>
              Secure Pay
            </span>
</div>
</div>

<div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4 relative overflow-hidden group">

<div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
<div className="flex items-center gap-1 bg-gray-50/70 p-1 rounded-lg border border-gray-100/80">
<button className="coa-toggle px-3 py-1.5 text-xs font-medium rounded-md border border-[#017eff] text-[#017eff] bg-white shadow-sm transition-all" data-type="outline">
                Purity
              </button>
<button className="coa-toggle px-3 py-1.5 text-xs font-medium rounded-md border border-transparent text-gray-500 hover:text-gray-700 transition-all" data-type="outline">
                Endotoxin
              </button>
</div>
<div className="flex items-center gap-1 bg-gray-50/70 p-1 rounded-lg border border-gray-100/80">
<button className="coa-dose px-3 py-1.5 text-xs font-medium rounded-md border border-[#017eff] text-[#017eff] bg-white shadow-sm transition-all" data-type="outline">
                5mg
              </button>
<button className="coa-dose px-3 py-1.5 text-xs font-medium rounded-md border border-transparent text-gray-500 hover:text-gray-700 transition-all" data-type="outline">
                10mg
              </button>
</div>
</div>

<div className="flex flex-col gap-1 relative z-10">
<h2 className="text-sm lg:text-base font-medium tracking-tight text-[#292e4c]">
              Certificate of Analysis
            </h2>
<p className="text-xs font-normal text-gray-500">
              Third-party tested for 99% purity, ID, quantity.
            </p>
</div>

<div className="flex items-center flex-wrap gap-2 relative z-10 mt-1">
<a className="bg-[#017eff] text-white text-xs font-medium px-4 py-2 rounded-md flex items-center justify-center tracking-wide hover:bg-[#006ce6] transition-colors shadow-sm" href="#">
              DPS-3664990
            </a>
<a className="bg-[#017eff] text-white text-xs font-medium px-4 py-2 rounded-md flex items-center justify-center tracking-wide hover:bg-[#006ce6] transition-colors shadow-sm" href="#">
              DPS-4261568
            </a>
<a className="text-xs font-medium text-gray-400 hover:text-[#017eff] ml-1 transition-colors" href="#">
              View all
            </a>
</div>
</div>

<div className="bg-[#f8f9fb] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 rounded-2xl lg:rounded-[1.5rem] p-5 lg:p-6 relative overflow-hidden group h-full min-h-[240px]">
<div className="relative z-10 w-full">
<h3 className="text-lg lg:text-xl font-semibold tracking-tight text-[#292e4c] mb-1.5">
              Made in the USA
            </h3>
<p className="text-sm font-normal text-gray-500 leading-relaxed">
              Quality controlled from start to finish.
              <br/>
              No outsourcing.
            </p>
</div>
<div className="absolute bottom-3 right-3 w-[85%] sm:w-[75%] max-w-[240px] transition-transform duration-700 ease-out group-hover:-translate-y-1 flex justify-end">
<img alt="Product Box" className="w-full h-auto object-contain object-right-bottom drop-shadow-sm" onerror="this.style.opacity='0';" src="https://framerusercontent.com/images/XmIxJ4a6LTfjMR99Kb5CvORat5A.png"/>
</div>
</div>

<div className="mt-6" style={{fontFamily: '-apple-system, BlinkMacSystemFont, \'SF Pro Display\', \'SF Pro Text\', \'Helvetica Neue\', Helvetica, Arial, sans-serif'}}>

<div className="mb-6">
<h2 style={{fontSize: '21px', fontWeight: '600', letterSpacing: '-0.4px', lineHeight: '1.3em', color: '#292e4c', textAlign: 'left', margin: '0 0 12px'}}>BPC-157 Overview</h2>
<div style={{fontSize: '12px', fontWeight: '400', letterSpacing: '-0.2px', lineHeight: '1.6em', color: 'rgba(41,46,76,0.7)', textAlign: 'left'}}>
<p style={{margin: '0 0 12px'}}>BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide composed of 15 amino acids. It was originally derived from a naturally occurring protein fragment identified in gastric tissue. Since its discovery in the early 1990s, BPC-157 has been studied extensively in laboratory and animal models for its potential influence on cellular protection, structural repair, and angiogenic processes.</p>
<p style={{margin: '0 0 12px'}}>In research settings, it is investigated for its interactions with angiogenic and inflammatory pathways, making it a subject of interest in studies on cellular response and recovery models.</p>
<p style={{margin: '0'}}><a href="https://pubmed.ncbi.nlm.nih.gov/8298609/" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Sikiric P. et al. (1993).</a></p>
</div>
</div>

<div className="mb-6">
<h2 style={{fontSize: '21px', fontWeight: '600', letterSpacing: '-0.4px', lineHeight: '1.3em', color: '#292e4c', textAlign: 'left', margin: '0 0 12px'}}>History</h2>
<div style={{fontSize: '12px', fontWeight: '400', letterSpacing: '-0.2px', lineHeight: '1.6em', color: 'rgba(41,46,76,0.7)', textAlign: 'left'}}>
<p style={{margin: '0 0 12px'}}>The peptide was first synthesized by researchers investigating cytoprotective proteins found in gastric juice. Early experiments focused on its ability to support structural integrity in gastrointestinal models. Over time, studies broadened into musculoskeletal, vascular, and dermal systems, where BPC-157 consistently demonstrated properties of interest in the context of tissue regeneration and biological resilience.</p>
<p style={{margin: '0'}}><a href="https://acta-arhiv.chem-soc.si/52/52-1-34.pdf" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Pflaum, M., &amp; Ručman, R. (2005).</a></p>
</div>
</div>

<div className="mb-4" style={{border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '18px 24px 24px'}}>
<div style={{marginBottom: '16px'}}>
<h2 style={{fontSize: '21px', fontWeight: '600', letterSpacing: '-0.4px', lineHeight: '1.3em', color: '#292e4c', textAlign: 'left', margin: '0'}}>BPC-157 Structure</h2>
</div>

<div style={{marginBottom: '16px'}}>
<img alt="BPC-157 Structure" src="https://framerusercontent.com/images/kBd8tk5ivuR42yn3bbTMfhuk.svg?width=977&amp;height=581" style={{width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain'}}/>
</div>

<div style={{fontSize: '10px', fontWeight: '600', letterSpacing: '-0.2px', lineHeight: '1.6em', color: '#292e4c'}}>
<p style={{margin: '0 0 4px'}}>CAS #: 137525-51-0</p>
<p style={{margin: '0 0 4px'}}>Molecular Formula: C₆₂H₉₈N₁₆O₂₂</p>
<p style={{margin: '0 0 4px'}}>Molecular Weight: 1419.556 g/mol</p>
<p style={{margin: '0'}}>PubChem ID: 108101</p>
</div>
</div>

<div className="mb-6">
<h2 style={{fontSize: '21px', fontWeight: '600', letterSpacing: '-0.4px', lineHeight: '1.3em', color: '#292e4c', textAlign: 'left', margin: '0 0 12px'}}>Research Findings</h2>
<div style={{fontSize: '12px', fontWeight: '400', letterSpacing: '-0.2px', lineHeight: '1.6em', color: 'rgba(41,46,76,0.7)', textAlign: 'left'}}>
<p style={{margin: '0 0 12px'}}>BPC-157 has been studied in structural, vascular, dermatological, and systemic models, with reports of activity in collagen regulation, extracellular matrix remodeling, angiogenesis, and wound closure. Research also highlights protective roles in preclinical systems, supporting cellular integrity and recovery processes.</p>
<p style={{margin: '0 0 8px', fontWeight: '600', color: '#292e4c'}}>Key Areas of Research:</p>
<p style={{margin: '0 0 4px'}}>    • Structural: Collagen, matrix, tendon</p>
<p style={{margin: '0 0 4px'}}>    • Vascular: Angiogenesis, nitric oxide, repair</p>
<p style={{margin: '0 0 4px'}}>    • Dermatological: Wound closure, vessel growth, cells</p>
<p style={{margin: '0 0 12px'}}>    • Systemic: Protection, viability, recovery</p>
<p style={{margin: '0 0 12px'}}>Together, these findings suggest broad experimental utility for BPC-157 across multiple biological pathways. Its activity in structural, vascular, dermatological, and systemic models provides a foundation for exploring diverse aspects of regenerative biology. By influencing processes such as collagen regulation, vascular growth, and cellular protection, BPC-157 offers a versatile platform for research into tissue repair, recovery, and systemic resilience within experimental settings.</p>
<p style={{margin: '0'}}><a href="https://doi.org/10.2174/1381612826666200121145711" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Sikiric P. et al., Current Pharmaceutical Design, 2020</a></p>
</div>
</div>

<div style={{border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '18px 24px 24px'}}>
<div style={{marginBottom: '16px'}}>
<h2 style={{fontSize: '21px', fontWeight: '600', letterSpacing: '-0.4px', lineHeight: '1.3em', color: '#292e4c', textAlign: 'left', margin: '0'}}>References</h2>
</div>
<div style={{borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px'}}>
<div style={{fontSize: '10px', fontWeight: '400', letterSpacing: '-0.1px', lineHeight: '1.8em', color: 'rgba(41,46,76,0.7)'}}>
<p style={{margin: '0 0 6px'}}><a href="https://pubmed.ncbi.nlm.nih.gov/8298609/" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Sikiric P. et al. (1993). <em>A new gastric juice peptide, including BPC-157, characterized and synthesized.</em></a></p>
<p style={{margin: '0 0 6px'}}><a href="https://pubmed.ncbi.nlm.nih.gov/14554208/" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Pavlovic I. et al. (2003). <em>The promoting effect of pentadecapeptide BPC-157 on tendon healing involves tendon outgrowth, cell survival and cell migration.</em></a></p>
<p style={{margin: '0 0 6px'}}><a href="https://www.sciencedirect.com/science/article/abs/pii/S0736026603001104" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Staresinic M. et al. (2003). <em>Effects of BPC-157 on ligament and tendon repair in experimental models.</em></a></p>
<p style={{margin: '0 0 6px'}}><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5752708/" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Chang CH. et al. (2009). <em>Protective effects of BPC-157 in experimental colitis models.</em></a></p>
<p style={{margin: '0 0 6px'}}><a href="https://pubmed.ncbi.nlm.nih.gov/25995620/" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Hsieh MJ. et al. (2015). <em>Therapeutic potential of pro-angiogenic BPC-157 in wound healing and burn models.</em></a></p>
<p style={{margin: '0 0 6px'}}><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7096228/" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Seiwerth S. et al. (2018). <em>Mechanisms of angiogenic activity and NO-system modulation by BPC-157</em></a></p>
<p style={{margin: '0'}}><a href="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full" onmouseout="this.style.textDecoration='none'" onmouseover="this.style.textDecoration='underline'" rel="noopener" style={{color: '#017eff', textDecoration: 'none'}} target="_blank">Kang EA. et al. (2025). <em>Protective effects of BPC-157 on liver, kidney, and lung in ischemia–reperfusion injury models.</em></a></p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="max-w-6xl mx-auto px-4 lg:px-8 mb-8 mt-2 lg:mt-0">
</section>

<section className="max-w-6xl mx-auto px-4 lg:px-8 mb-12 lg:mb-16 mt-6 lg:mt-8">
</section>


<section className="max-w-3xl mx-auto px-4 lg:px-8 mb-12 lg:mb-16">
</section>

<section className="max-w-6xl mx-auto px-4 lg:px-8 mb-10 lg:mb-12">
</section>


    </>
  );
}
