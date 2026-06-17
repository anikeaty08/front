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
      
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="mb-20 text-center max-w-2xl mx-auto">
<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6">
<span>Smart Protection</span>
</div>
<h1 className="animate-enter delay-100 text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Revenue protection infrastructure
            </h1>
<p className="animate-enter delay-200 text-lg text-gray-400 leading-relaxed">
                Prevent coupon leakage, optimize checkout scripts, and control your brand's pricing logic without engineering dependencies.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-0 lg:gap-x-0 relative border-t border-b border-white/5">

<div className="hidden lg:block beam-container left-1/3">
<div className="beam-light delay-300"></div>
</div>

<div className="hidden lg:block beam-container left-2/3">
<div className="beam-light delay-500"></div>
</div>

<div className="animate-enter delay-300 group lg:p-10 lg:border-b-0 lg:border-r hover:bg-white/[0.02] transition-colors duration-500 border-white/5 border-b pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex items-center gap-3 mb-6">
<span className="font-mono text-xs text-blue-400/80">01</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Extensions no longer work</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-8 h-12">
                    Without public coupon codes, extensions like Honey or CapitalOne have nothing to leak. Stop paying affiliate fees on organic traffic.
                </p>

<div className="relative w-full h-48 bg-[#0F0F0F] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"></div>

<div className="absolute top-4 left-4 right-4 h-8 bg-white/5 rounded-md flex items-center px-3 gap-2">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
</div>
<div className="flex-1 text-[10px] text-gray-600 font-mono text-center">secure-checkout.com</div>
</div>

<div className="absolute top-16 right-6 bg-[#151515] border border-white/10 rounded-lg p-3 shadow-xl flex items-center gap-3 z-10 translate-y-2">
<div className="w-8 h-8 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center">
<iconify-icon icon="solar:shield-warning-bold-duotone" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Injection Blocked</div>
<div className="text-[10px] text-gray-500">No coupons found</div>
</div>
</div>

<div className="absolute bottom-6 left-8 p-2 bg-orange-500 rounded-lg shadow-lg opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
<iconify-icon className="text-white" icon="solar:tag-horizontal-bold-duotone" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="animate-enter delay-400 group relative p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/[0.02] transition-colors duration-500">
<div className="flex items-center gap-3 mb-6">
<span className="font-mono text-xs text-blue-400/80">02</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">No leftover code</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-8 h-12">
                    Once a campaign is over, the scripts disappear instantly. No leftover JS slowing down your site or causing conflicts.
                </p>

<div className="relative w-full h-48 flex items-center justify-center">

<div className="absolute w-32 h-32 rounded-full border border-dashed border-white/10 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-40 h-40 rounded-full border border-white/5"></div>

<div className="relative w-16 h-16 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center z-10">
<iconify-icon className="text-white" icon="solar:bolt-bold-duotone" width="32"></iconify-icon>
</div>

<div className="absolute top-8 right-12 w-8 h-8 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center text-yellow-400 text-[10px] font-bold shadow-lg animate-bounce">JS</div>
<div className="absolute bottom-8 left-12 w-8 h-8 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center text-blue-400 text-[10px] font-bold shadow-lg delay-100 animate-pulse">TS</div>
</div>
</div>

<div className="animate-enter delay-500 group relative p-8 lg:p-10 hover:bg-white/[0.02] transition-colors duration-500">
<div className="flex items-center gap-3 mb-6">
<span className="font-mono text-xs text-blue-400/80">03</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Stop manual codes</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-8 h-12">
                    Automatically apply discounts and change pricing dynamically. Increase conversions by removing friction at checkout.
                </p>

<div className="relative w-full h-48 bg-[#0F0F0F] rounded-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6">

<div className="w-full bg-[#151515] border border-white/5 rounded-lg h-10 flex items-center px-3 justify-between mb-3 opacity-50">
<span className="text-xs text-gray-600">Promo Code</span>
<iconify-icon className="text-gray-600" icon="solar:close-circle-bold-duotone" width="14"></iconify-icon>
</div>

<div className="w-full bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex items-center justify-between animate-enter delay-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:check-circle-bold-duotone" width="16"></iconify-icon>
<span className="text-xs font-medium text-green-400">Offer Applied</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] text-gray-500 line-through">$120.00</span>
<span className="text-sm font-bold text-white">$89.50</span>
</div>
</div>

<div className="w-full mt-3 h-9 bg-white rounded-md flex items-center justify-center text-xs font-semibold text-black hover:bg-gray-200 transition-colors cursor-pointer">
                        Checkout
                    </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 border-white/5 border-b relative">

<div className="hidden lg:block beam-container left-1/2">
<div className="beam-light delay-200"></div>
</div>

<div className="animate-enter delay-500 group lg:p-12 lg:border-b-0 lg:border-r hover:bg-white/[0.02] transition-colors duration-500 border-white/5 border-b pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex items-center gap-3 mb-6">
<span className="font-mono text-xs text-blue-400/80">04</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Create scripts in minutes</h3>
<p className="text-base text-gray-400 leading-relaxed mb-10 max-w-md">
                    Create and auto-apply scripts to your site or share links with your customers in just 7 clicks. No dev required.
                </p>

<div className="relative w-full aspect-[16/9] bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-4 rounded-full bg-blue-500/20 relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-blue-400 rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div className="p-6 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-red-400" icon="solar:forbidden-circle-bold-duotone" width="18"></iconify-icon>
<span className="text-xs font-medium text-gray-300">Block Competitor Codes</span>
</div>
<div className="flex gap-2">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">HONEY20</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">SAVE10</span>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/[0.05] border border-blue-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 blur-sm"></div>
<div className="relative z-10 flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:magic-stick-3-bold-duotone" width="18"></iconify-icon>
<div>
<div className="text-xs font-medium text-white">Auto-Apply Welcome</div>
<div className="text-[10px] text-blue-400/70">Highest priority</div>
</div>
</div>
<div className="relative z-10 w-8 h-4 rounded-full bg-blue-500/30">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-blue-400 rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 bg-[#151515] border border-white/10 p-2 rounded-lg shadow-xl flex gap-3 items-center">
<div className="bg-black p-1.5 rounded-md border border-white/10">
<iconify-icon className="text-white" icon="solar:code-square-bold-duotone" width="16"></iconify-icon>
</div>
<div className="text-[10px] text-gray-400">
                            Script Active<br/><span className="text-green-400">● Live on site</span>
</div>
</div>
</div>
</div>

<div className="animate-enter delay-600 group lg:p-12 hover:bg-white/[0.02] transition-colors duration-500 pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex items-center gap-3 mb-6">
<span className="font-mono text-xs text-blue-400/80">05</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Sell anywhere</h3>
<p className="text-base text-gray-400 leading-relaxed mb-10 max-w-md">
                    Generate shoppable links that allow you to sell anywhere your customers are. Embedded logic ensures consistent pricing.
                </p>

<div className="relative w-full aspect-[16/9] bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">

<div className="w-full max-w-sm bg-[#151515] border border-white/10 rounded-full h-10 flex items-center px-4 gap-3 mb-6 shadow-lg group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-gray-500" icon="solar:link-circle-bold-duotone" width="16"></iconify-icon>
<span className="text-xs text-blue-400 font-medium">brand.com/welcome-575</span>
<div className="ml-auto w-px h-3 bg-white/10"></div>
<iconify-icon className="text-gray-500 cursor-pointer hover:text-white" icon="solar:copy-bold-duotone" width="14"></iconify-icon>
</div>

<div className="w-full max-w-sm bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-3">
<div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Active Rules</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:check-read-bold-duotone" width="12"></iconify-icon>
</div>
<div className="">
<div className="text-xs font-medium text-white">FREESHIPPING</div>
<div className="text-[10px] text-gray-500">Applied to entire order • One use</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:sale-bold-duotone" width="12"></iconify-icon>
</div>
<div className="">
<div className="text-xs font-medium text-white">HELLO15</div>
<div className="text-[10px] text-gray-500">15% off first order</div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewbox="0 0 24 24"><path d="M5.5 3.21l10.8 15.65a.5.5 0 01-.76.64l-3.32-2.58-2.6 5.92a.5.5 0 01-.92-.4l2.6-5.91-4.22.45a.5.5 0 01-.52-.8L5.5 3.21z"></path></svg>
</div>
</div>
</div><section className="lg:p-12 group hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden w-full h-full border-white/5 border-b pt-12 pr-12 pb-12 pl-12 relative">
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

<div className="flex-1 max-w-lg">
<div className="flex items-center gap-3 mb-6">
<span className="font-mono text-xs text-orange-400/80">01</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
<iconify-icon icon="solar:wad-of-money-bold-duotone" width="12"></iconify-icon>
<span>Make Money</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-3">Sell Platform Templates</h3>
<p className="text-base text-gray-400 leading-relaxed mb-8">
        Pre-built revenue protection templates you can deploy to any stack in minutes. Secure your checkout without
        writing code.
      </p>
<div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 border border-white/10 text-white text-xs font-medium rounded-md hover:bg-white hover:text-black transition-all cursor-pointer">
        View all templates
      </div>
</div>

<div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 gap-3">

<div className="bg-[#151515] border border-white/5 rounded-xl p-4 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group/item">
<div className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/5 flex items-center justify-center mb-3 text-green-400">
<iconify-icon icon="solar:cart-large-bold-duotone" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-white mb-0.5">Shopify</div>
<div className="text-[10px] text-gray-500">App Block</div>
</div>

<div className="bg-[#151515] border border-white/5 rounded-xl p-4 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 delay-75 group/item">
<div className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/5 flex items-center justify-center mb-3 text-purple-400">
<iconify-icon icon="solar:card-bold-duotone" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-white mb-0.5">Stripe</div>
<div className="text-[10px] text-gray-500">Checkout</div>
</div>

<div className="bg-[#151515] border border-white/5 rounded-xl p-4 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 delay-100 group/item">
<div className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/5 flex items-center justify-center mb-3 text-blue-400">
<iconify-icon icon="solar:bag-bold-duotone" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-white mb-0.5">WooCommerce</div>
<div className="text-[10px] text-gray-500">Plugin</div>
</div>

<div className="bg-[#151515] border border-white/5 rounded-xl p-4 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group/item">
<div className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/5 flex items-center justify-center mb-3 text-cyan-400">
<iconify-icon icon="solar:cloud-bold-duotone" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-white mb-0.5">Salesforce</div>
<div className="text-[10px] text-gray-500">Cartridge</div>
</div>

<div className="bg-[#151515] border border-white/5 rounded-xl p-4 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 delay-75 group/item">
<div className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/5 flex items-center justify-center mb-3 text-orange-400">
<iconify-icon icon="solar:box-bold-duotone" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-white mb-0.5">Magento</div>
<div className="text-[10px] text-gray-500">Module</div>
</div>

<div className="bg-[#151515] border border-white/5 rounded-xl p-4 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 delay-100 group/item">
<div className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/5 flex items-center justify-center mb-3 text-gray-400">
<iconify-icon icon="solar:code-file-bold-duotone" width="16">Custom</iconify-icon>
</div>
<div className="text-[10px] text-gray-500">API</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/[0.03] to-transparent pointer-events-none">
</div>
</section><div className="grid grid-cols-1 lg:grid-cols-2 relative">

<div className="hidden lg:block beam-container left-1/2">
<div className="beam-light delay-500"></div>
</div>

<div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 relative group hover:bg-white/[0.02] transition-colors duration-500">
<div className="flex items-center gap-3 mb-6">
<span className="font-mono text-xs text-orange-400/80">02</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="inline-flex items-center gap-2 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
<iconify-icon icon="solar:code-square-bold-duotone"></iconify-icon>
<span>Easy-to-use API</span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Build apps yourself</h3>
<p className="text-base text-gray-400 leading-relaxed mb-8">
    Integrate payment, membership, and fulfillment logic directly with a few lines of code.
  </p>

<div className="w-full bg-[#0F0F0F] rounded-lg border border-white/10 p-5 font-mono text-[10px] leading-relaxed text-gray-400 relative overflow-hidden group-hover:border-orange-500/20 transition-colors shadow-2xl">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="flex gap-2 mb-4 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<div className="space-y-1">
<div><span className="text-purple-400">import</span> { App } <span className="text-purple-400">from</span>
<span className="text-green-400">'@sdk/core'</span></div>
<div className="h-2"></div>
<div><span className="text-blue-400">const</span> result = <span className="text-blue-400">await</span>
        App.<span className="text-yellow-400">verify</span>({</div>
<div className="pl-4">line_item_id: <span className="text-green-400">'li_9s8d7f'</span>,</div>
<div className="pl-4">rules: [<span className="text-green-400">'block_extensions'</span>]</div>
<div>});</div>
</div>
</div>
<div className="mt-8">
<button className="text-xs font-medium text-white border border-white/10 bg-white/5 rounded px-3 py-1.5 hover:bg-white/10 transition-colors">Read the docs</button>
</div>
</div>

<div className="lg:p-12 group hover:bg-white/[0.02] transition-colors duration-500 pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex items-center gap-3 mb-6">
<span className="font-mono text-xs text-orange-400/80">03</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="inline-flex items-center gap-2 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
<iconify-icon icon="solar:users-group-rounded-bold-duotone"></iconify-icon>
<span>Developers at your service-tight mb-3"&gt;Get your app idea built
            <p className="text-base text-gray-400 leading-relaxed mb-8">
                Have a complex pricing rule or app idea? Reach out to us below, and we'll engineer the logic for free.
            </p>

<div className="relative w-full bg-[#0F0F0F] rounded-xl border border-white/10 h-44 p-5 flex flex-col justify-end overflow-hidden shadow-2xl">

<div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-400" icon="solar:user-circle-bold-duotone" width="20"></iconify-icon>
</div>

<div className="bg-white/5 border border-white/5 rounded-2xl rounded-tr-sm p-3 mb-3 max-w-[90%] self-end">
<div className="text-[10px] text-gray-300">I can't find an app template that works for my bundle logic?</div>
</div>
<div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl rounded-tl-sm p-3 max-w-[85%] relative animate-enter delay-200">
<div className="text-[10px] text-orange-200 font-medium">No problem. We've just deployed that custom rule to your dashboard.</div>

<div className="absolute -bottom-6 -right-6 flex flex-col items-center pointer-events-none group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700">
<svg className="w-4 h-4 text-orange-500 drop-shadow-md mb-1 fill-current" viewbox="0 0 24 24"><path d="M5.5 3.21l10.8 15.65a.5.5 0 01-.76.64l-3.32-2.58-2.6 5.92a.5.5 0 01-.92-.4l2.6-5.91-4.22.45a.5.5 0 01-.52-.8L5.5 3.21z"></path></svg>
<div className="px-2 py-0.5 bg-orange-500 text-[8px] font-bold text-white rounded-full whitespace-nowrap">Your Developer</div>
</div>
</div>
</div>
<div className="mt-8">
<button className="text-xs font-medium text-white border border-white/10 bg-white/5 rounded px-3 py-1.5 hover:bg-white/10 transition-colors">Schedule a call</button>
</div>
</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
