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



        const modal = document.getElementById('articleModal');

        function openArticle() {
            modal.showModal();
            document.body.style.overflow = 'hidden'; 
        }

        function closeArticle() {
            modal.close();
            document.body.style.overflow = 'auto';
        }

        modal.addEventListener('click', (e) => {
            const dialogDimensions = modal.getBoundingClientRect()
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                closeArticle();
            }
        });

        // Function for January Dropdown State
        function toggleMonth(dropdownId, iconId) {
            const dropdown = document.getElementById(dropdownId);
            const icon = document.getElementById(iconId);
            
            dropdown.classList.toggle('open');
            
            if (dropdown.classList.contains('open')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        }
    
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
      

<header className="w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-sans font-medium tracking-tighter text-lg text-zinc-900 flex items-center gap-2">
                1 FINANCE
            </div>
<nav className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Advisory</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Wealth Management</a>
<a className="text-zinc-900 font-medium" href="#">Insights</a>
</nav>
<button className="bg-zinc-900 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-zinc-800 transition-colors">
                Consult Advisor
            </button>
</div>
</header>
<main className="">

<section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
<h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 leading-tight mb-6">
                Insights That Shape <br className="hidden md:block"/>Financial Thinking
            </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
                Perspectives from our advisors, analysts, and subject experts designed to cut through the noise and build generational wealth.
            </p>
</section>

<div className="w-full border-y border-zinc-200 bg-[#FAFAFA] sticky top-16 z-30">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<ul className="flex overflow-x-auto no-scrollbar text-sm font-medium pt-4 pb-4 gap-x-8 gap-y-8 items-center">
<li className=""><button className="text-zinc-900 border-b border-zinc-900 pb-1 whitespace-nowrap">Latest Insights</button></li>
<li><button className="text-zinc-400 hover:text-zinc-600 transition-colors pb-1 whitespace-nowrap">Tax Strategy</button></li>
<li><button className="text-zinc-400 hover:text-zinc-600 transition-colors pb-1 whitespace-nowrap">Investments</button></li>
<li><button className="text-zinc-400 hover:text-zinc-600 transition-colors pb-1 whitespace-nowrap">Wealth Protection</button></li>
<li className=""><button className="text-zinc-400 hover:text-zinc-600 transition-colors pb-1 whitespace-nowrap">P2P Lending</button></li>
<li className="ml-auto hidden md:block">
<button className="flex gap-2 hover:text-zinc-900 transition-colors text-zinc-400 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-lg" height="18" icon="solar:magnifer-linear" strokeWidth="1.5" style={{color: 'rgb(24, 24, 27)'}} width="18"></iconify-icon>
                            Search
                        </button>
</li>
</ul>
</div>
</div>

<section className="max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-1/2 z-0"></div>

<div className="w-full h-10 mt-8 mb-16 relative">

<div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 z-10">
<span className="whitespace-nowrap text-xs font-medium text-white bg-zinc-900 rounded-full ring-[#FAFAFA] ring-8 pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm">March 2026</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-0 z-20 w-full mb-32 relative gap-x-y-12 gap-y-12">

<div className="md:pl-0 md:pr-[60px] group flex md:justify-end w-full pl-14 relative">

<div className="absolute left-6 md:left-auto md:right-0 top-8 w-2.5 h-2.5 bg-zinc-300 rounded-full md:translate-x-1/2 -translate-x-1/2 ring-8 ring-[#FAFAFA] group-hover:bg-blue-600 transition-colors duration-500 z-10"></div>

<article className="hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white w-full max-w-lg border-zinc-100 border rounded-sm pt-8 pr-8 pb-8 pl-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]" onclick="openArticle()">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium tracking-widest uppercase text-blue-600">Tax Strategy</span>
<span className="uppercase text-xs text-zinc-400 tracking-wider">Mar 2026</span>
</div>
<h2 className="leading-snug group-hover:text-blue-700 transition-colors text-3xl font-medium text-zinc-900 tracking-tight font-serif mb-3">
                            Navigating the New Tax Regime: A High Net-Worth Perspective
                        </h2>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-8 line-clamp-2">
                            An in-depth analysis of how recent changes to the tax code affect capital gains, corporate structuring, and long-term wealth preservation for HNI clients.
                        </p>
<div className="flex gap-3 border-zinc-100 border-t pt-4 gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600">AR</div>
<div className="">
<p className="text-xs font-medium text-zinc-900">Aditi Rao</p>
<p className="text-[0.65rem] text-zinc-400 uppercase tracking-widest mt-0.5">Head of Tax Advisory</p>
</div>
</div>
</article>
</div>

<div className="md:pl-[60px] group flex md:justify-start md:mt-[40px] w-full pl-14 relative">

<div className="absolute left-6 md:left-0 top-8 w-2.5 h-2.5 bg-zinc-300 rounded-full -translate-x-1/2 ring-8 ring-[#FAFAFA] group-hover:bg-blue-600 transition-colors duration-500 z-10"></div>

<article className="hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white w-full max-w-lg border-zinc-100 border rounded-sm pt-8 pr-8 pb-8 pl-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]" onclick="openArticle()">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium tracking-widest uppercase text-blue-600">Investments</span>
<span className="uppercase text-xs text-zinc-400 tracking-wider">Mar 2026</span>
</div>
<h2 className="text-3xl font-serif font-medium tracking-tight text-zinc-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                            The Case for Alternatives in a Volatile Equity Market
                        </h2>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-8 line-clamp-2">
                            Why traditional 60/40 portfolios are failing, and how introducing structured debt and unlisted equity can stabilize returns during macroeconomic shifts.
                        </p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600">VM</div>
<div className="">
<p className="text-xs font-medium text-zinc-900">Vikram Mehta</p>
<p className="text-[0.65rem] text-zinc-400 uppercase tracking-widest mt-0.5">Chief Investment Strategist</p>
</div>
</div>
</article>
</div>
</div><div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-0 z-20 w-full mb-32 relative gap-x-y-12 gap-y-12">

<div className="md:pl-0 md:pr-[60px] group flex md:justify-end w-full pl-14 relative">

<div className="absolute left-6 md:left-auto md:right-0 top-8 w-2.5 h-2.5 bg-zinc-300 rounded-full md:translate-x-1/2 -translate-x-1/2 ring-8 ring-[#FAFAFA] group-hover:bg-blue-600 transition-colors duration-500 z-10"></div>

<article className="hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white w-full max-w-lg border-zinc-100 border rounded-sm pt-8 pr-8 pb-8 pl-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]" onclick="openArticle()">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium tracking-widest uppercase text-blue-600">Tax Strategy</span>
<span className="uppercase text-xs text-zinc-400 tracking-wider">Mar 2026</span>
</div>
<h2 className="leading-snug group-hover:text-blue-700 transition-colors text-3xl font-medium text-zinc-900 tracking-tight font-serif mb-3">
                            Navigating the New Tax Regime: A High Net-Worth Perspective
                        </h2>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-8 line-clamp-2">
                            An in-depth analysis of how recent changes to the tax code affect capital gains, corporate structuring, and long-term wealth preservation for HNI clients.
                        </p>
<div className="flex gap-3 border-zinc-100 border-t pt-4 gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600">AR</div>
<div className="">
<p className="text-xs font-medium text-zinc-900">Aditi Rao</p>
<p className="text-[0.65rem] text-zinc-400 uppercase tracking-widest mt-0.5">Head of Tax Advisory</p>
</div>
</div>
</article>
</div>

<div className="md:pl-[60px] group flex md:justify-start md:mt-[40px] w-full pl-14 relative">

<div className="absolute left-6 md:left-0 top-8 w-2.5 h-2.5 bg-zinc-300 rounded-full -translate-x-1/2 ring-8 ring-[#FAFAFA] group-hover:bg-blue-600 transition-colors duration-500 z-10"></div>

<article className="hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white w-full max-w-lg border-zinc-100 border rounded-sm pt-8 pr-8 pb-8 pl-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]" onclick="openArticle()">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium tracking-widest uppercase text-blue-600">Investments</span>
<span className="uppercase text-xs text-zinc-400 tracking-wider">Mar 2026</span>
</div>
<h2 className="text-3xl font-serif font-medium tracking-tight text-zinc-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                            The Case for Alternatives in a Volatile Equity Market
                        </h2>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-8 line-clamp-2">
                            Why traditional 60/40 portfolios are failing, and how introducing structured debt and unlisted equity can stabilize returns during macroeconomic shifts.
                        </p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600">VM</div>
<div className="">
<p className="text-xs font-medium text-zinc-900">Vikram Mehta</p>
<p className="text-[0.65rem] text-zinc-400 uppercase tracking-widest mt-0.5">Chief Investment Strategist</p>
</div>
</div>
</article>
</div>
</div>


<div className="z-30 w-full h-10 mb-8 relative">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 z-10">
<button className="flex hover:text-zinc-900 whitespace-nowrap transition-colors hover:shadow-md cursor-pointer text-xs font-medium text-zinc-600 bg-white border-zinc-200 border ring-[#FAFAFA] ring-8 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center" onclick="toggleMonth('janDropdown', 'janIcon')">February 2026</button>
</div>
</div><div className="z-30 w-full h-10 mb-8 relative">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 z-10">
<button className="flex hover:text-zinc-900 whitespace-nowrap transition-colors hover:shadow-md cursor-pointer text-xs font-medium text-zinc-600 bg-white border-zinc-200 border ring-[#FAFAFA] ring-8 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center" onclick="toggleMonth('janDropdown', 'janIcon')">January 2026</button>
</div>
</div>

<div className="dropdown-content w-full z-20 relative" id="janDropdown">

</div>
<div className="mt-20 flex justify-center z-10 relative">
</div>
</section>

<section className="py-20 border-t border-zinc-200 bg-white text-center">
<p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-10">Our Experts Featured In</p>
<div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale">
<span className="font-serif italic font-medium text-2xl tracking-tighter text-zinc-900">The Economic Times</span>
<span className="font-sans font-medium text-2xl tracking-tighter text-zinc-900">Mint</span>
<span className="font-serif text-2xl tracking-tight text-zinc-900 uppercase">Financial Express</span>
<span className="font-sans font-medium italic text-xl tracking-tight text-zinc-900">Bloomberg Quint</span>
</div>
</section>

<section className="py-32 bg-zinc-900 text-center px-6">
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Ready to rethink your strategy?
            </h2>
<p className="text-zinc-400 font-light mb-10 text-lg max-w-xl mx-auto">
                Connect with our advisory team to apply these insights directly to your personal financial architecture.
            </p>
<button className="bg-blue-600 text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-blue-700 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] tracking-wide">
                Speak to a Financial Advisor
            </button>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 py-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="font-sans font-medium tracking-tighter text-lg text-zinc-900 mb-4">1 FINANCE</div>
<p className="text-xs text-zinc-500 font-light max-w-xs leading-relaxed">
                    Unbiased, structured, and institutional-grade financial advisory for the modern individual.
                </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-zinc-900 mb-6">Explore</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-blue-600 transition-colors" href="#">Tax Advisory</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Wealth Management</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Corporate Treasury</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-zinc-900 mb-6">Insights</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-blue-600 transition-colors" href="#">Latest Articles</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Market Reports</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
</div>
</div>
</footer>

<dialog className="w-full max-w-4xl mx-auto bg-white border border-zinc-200 rounded-md p-0 shadow-2xl overflow-y-auto max-h-[90vh] m-auto fixed inset-0 z-50" id="articleModal">
<div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-zinc-100 p-4 flex justify-between items-center z-20">
<span className="text-xs font-medium tracking-widest uppercase text-blue-600 ml-4">Tax Strategy</span>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors text-zinc-500" onclick="closeArticle()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-8 md:p-16">
<header className="mb-12 border-b border-zinc-100 pb-12">
<h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-8">
                    Navigating the New Tax Regime: A High Net-Worth Perspective
                </h1>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center font-medium text-zinc-600">AR</div>
<div>
<p className="text-sm font-medium text-zinc-900">Aditi Rao</p>
<p className="text-xs text-zinc-500 font-light mt-1">Head of Tax Advisory • 8 min read</p>
</div>
</div>
<button className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:share-linear" strokeWidth="1.5"></iconify-icon>
                        Share Insight
                    </button>
</div>
</header>
<div className="prose prose-zinc prose-lg max-w-none font-light text-zinc-700 leading-relaxed">
<p className="text-xl text-zinc-500 leading-relaxed mb-10 font-serif italic">
                    The recent shift in the macroeconomic landscape brings an unprecedented overhaul to the tax code. For high-net-worth individuals, understanding these nuances is no longer optional—it is the bedrock of wealth preservation.
                </p>
<h3 className="font-serif text-2xl font-medium text-zinc-900 tracking-tight mt-12 mb-4">The Shift in Capital Gains</h3>
<p className="mb-6">
                    Historically, investors have relied on indexation benefits to soften the blow of long-term capital gains taxes on debt mutual funds and real estate. The removal of this benefit fundamentally alters asset allocation math. We are now seeing a pivot towards instruments that offer tax-free compounding over the long haul.
                </p>
<div className="my-12 p-8 bg-[#FAFAFA] border-l-2 border-blue-600">
<div className="flex items-center gap-3 mb-4 text-blue-700">
<iconify-icon className="text-xl" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Key Insight</span>
</div>
<p className="text-base text-zinc-800 font-serif italic m-0">
                        "The loss of indexation isn't just a slight deduction in returns; it forces a complete re-evaluation of portfolio duration. Short-term parking of capital must now be viewed entirely differently than generational wealth transfer vehicles."
                    </p>
</div>
</div>
<div className="mt-16 p-8 bg-zinc-900 text-center rounded-sm">
<h4 className="font-serif text-2xl text-white mb-3">Discuss your portfolio strategy</h4>
<p className="text-sm text-zinc-400 font-light mb-6">Our advisors are available to contextualize this report for your specific assets.</p>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-sm text-xs font-medium hover:bg-zinc-100 transition-colors">
                    Schedule Consultation
                </button>
</div>
</div>
</dialog>


    </>
  );
}
