import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Prices: [monthly, annual]
    const prices = {
      basic: ['$9', '$90'],
      pro: ['$29', '$290'],
      premium: ['$59', '$590']
    };
    // Units: [monthly, annual]
    const units = {
      monthly: '/mo',
      annual: '/yr'
    };

    function setPricing(mode) {
      // Update segment control styling and aria-pressed
      document.getElementById('monthlyBtn').classList.toggle('bg-gradient-to-t', mode === 'monthly');
      document.getElementById('monthlyBtn').classList.toggle('from-[#a78bfa]', mode === 'monthly');
      document.getElementById('monthlyBtn').classList.toggle('to-[#6d28d9]', mode === 'monthly');
      document.getElementById('monthlyBtn').classList.toggle('text-white', mode === 'monthly');
      document.getElementById('monthlyBtn').classList.toggle('text-gray-300', mode !== 'monthly');
      document.getElementById('monthlyBtn').classList.toggle('hover:bg-[#23242b]', mode !== 'monthly');
      document.getElementById('monthlyBtn').setAttribute('aria-pressed', mode === 'monthly');

      document.getElementById('annualBtn').classList.toggle('bg-gradient-to-t', mode === 'annual');
      document.getElementById('annualBtn').classList.toggle('from-[#a78bfa]', mode === 'annual');
      document.getElementById('annualBtn').classList.toggle('to-[#6d28d9]', mode === 'annual');
      document.getElementById('annualBtn').classList.toggle('text-white', mode === 'annual');
      document.getElementById('annualBtn').classList.toggle('text-gray-300', mode !== 'annual');
      document.getElementById('annualBtn').classList.toggle('hover:bg-[#23242b]', mode !== 'annual');
      document.getElementById('annualBtn').setAttribute('aria-pressed', mode === 'annual');

      // Set prices and units
      if(mode === 'monthly') {
        document.getElementById('basicPrice').innerText = prices.basic[0];
        document.getElementById('proPrice').innerText = prices.pro[0];
        document.getElementById('premiumPrice').innerText = prices.premium[0];
        document.getElementById('basicUnit').innerText = units.monthly;
        document.getElementById('proUnit').innerText = units.monthly;
        document.getElementById('premiumUnit').innerText = units.monthly;
      } else {
        document.getElementById('basicPrice').innerText = prices.basic[1];
        document.getElementById('proPrice').innerText = prices.pro[1];
        document.getElementById('premiumPrice').innerText = prices.premium[1];
        document.getElementById('basicUnit').innerText = units.annual;
        document.getElementById('proUnit').innerText = units.annual;
        document.getElementById('premiumUnit').innerText = units.annual;
      }
    }
    // Set default mode to monthly
    setPricing('monthly');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="mb-10 text-center">
<h2 className="text-5xl font-bold text-white font-neuemontreal mb-2">Our Pricing Plans</h2>
<p className="text-gray-300 text-base">Choose the plan that fits your needs.</p>
</div>

<div className="mb-10 flex justify-center">
<div className="inline-flex rounded-full bg-[#1a1a25] p-1 shadow-inner">
<button aria-pressed="true" className="relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none bg-gradient-to-t from-[#a78bfa] to-[#6d28d9] text-white shadow hover:scale-[1.05] z-10" id="monthlyBtn" onclick="setPricing('monthly')">
        Monthly
      </button>
<button aria-pressed="false" className="relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none text-gray-300 hover:text-white hover:bg-[#23242b]" id="annualBtn" onclick="setPricing('annual')">
        Annual
      </button>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8">

<div className="relative flex flex-col gap-4 pb-14 pt-6 px-6 w-80 rounded-xl shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#6d28d9_0,transparent_85%),radial-gradient(at_41%_94%,#a78bfa_0,transparent_85%),radial-gradient(at_100%_99%,#4c1d95_0,transparent_85%)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#a78bfa]/20">
<span className="text-5xl font-bold text-white font-neuemontreal">Basic</span>
<p className="text-gray-300 text-sm">For individuals just getting started.</p>
<div className="flex items-end gap-1">
<span className="text-5xl font-light text-white font-neuemontreal" id="basicPrice">$9</span>
<span className="text-gray-400 text-sm mb-[2px] font-neuemontreal" id="basicUnit">/mo</span>
</div>
<hr className="w-full h-[2px] border-0 bg-[#23242b]"/>
<ul className="flex flex-col gap-2 mb-2">
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">1 Project</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Basic Analytics</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Email Support</span>
</li>
</ul>
<div className="mb-[30px]"></div>
<button className="absolute left-6 right-6 bottom-[30px] w-auto py-2 text-sm rounded-full text-white font-semibold shadow-inner bg-gradient-to-t from-[#a78bfa] to-[#6d28d9] focus:outline-none">Choose Basic</button>
</div>

<div className="relative flex flex-col gap-4 pb-14 pt-6 px-6 w-80 rounded-xl shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#6d28d9_0,transparent_85%),radial-gradient(at_41%_94%,#a78bfa_0,transparent_85%),radial-gradient(at_100%_99%,#4c1d95_0,transparent_85%)] border-2 border-[#a78bfa] scale-105 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#a78bfa]/20">
<span className="text-5xl font-semibold text-white font-neuemontreal">Pro</span>
<p className="text-gray-300 text-sm">For growing teams and professionals.</p>
<div className="flex items-end gap-1">
<span className="text-5xl font-light text-white font-neuemontreal" id="proPrice">$29</span>
<span className="text-gray-400 text-sm mb-[2px] font-neuemontreal" id="proUnit">/mo</span>
</div>
<hr className="w-full h-[2px] border-0 bg-[#23242b]"/>
<ul className="flex flex-col gap-2 mb-2">
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">10 Projects</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Advanced Analytics</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Priority Email Support</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Integrations</span>
</li>
</ul>
<div className="mb-[30px]"></div>
<button className="absolute left-6 right-6 bottom-[30px] w-auto py-2 text-sm rounded-full text-white font-semibold shadow-inner bg-gradient-to-t from-[#a78bfa] to-[#6d28d9] focus:outline-none">Choose Pro</button>
</div>

<div className="relative flex flex-col gap-4 pb-14 pt-6 px-6 w-80 rounded-xl shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#6d28d9_0,transparent_85%),radial-gradient(at_41%_94%,#a78bfa_0,transparent_85%),radial-gradient(at_100%_99%,#4c1d95_0,transparent_85%)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#a78bfa]/20">
<span className="text-5xl font-semibold text-white font-neuemontreal">Premium</span>
<p className="text-gray-300 text-sm">For enterprises needing more power.</p>
<div className="flex items-end gap-1">
<span className="text-5xl font-light text-white font-neuemontreal" id="premiumPrice">$59</span>
<span className="text-gray-400 text-sm mb-[2px] font-neuemontreal" id="premiumUnit">/mo</span>
</div>
<hr className="w-full h-[2px] border-0 bg-[#23242b]"/>
<ul className="flex flex-col gap-2 mb-2">
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Unlimited Projects</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Advanced Analytics</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">24/7 Support</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Custom Integrations</span>
</li>
<li className="flex items-center gap-2">
<span className="flex justify-center items-center w-4 h-4 rounded-full bg-[#a78bfa]">
<svg className="w-3 h-3 text-[#181925] fill-current" viewbox="0 0 16 16"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="text-sm text-white">Dedicated Account Manager</span>
</li>
</ul>
<div className="mb-[30px]"></div>
<button className="absolute left-6 right-6 bottom-[30px] w-auto py-2 text-sm rounded-full text-white font-semibold shadow-inner bg-gradient-to-t from-[#a78bfa] to-[#6d28d9] focus:outline-none">Choose Premium</button>
</div>
</div>


    </>
  );
}
