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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        function toggleModal(show) {
            const overlay = document.getElementById('modal-overlay');
            const content = document.getElementById('modal-content');
            const form = document.getElementById('modal-form');
            const success = document.getElementById('modal-success');
            
            if (show) {
                // Reset to form state when opening
                form.classList.remove('hidden', 'opacity-0');
                form.classList.add('flex', 'opacity-100');
                
                success.classList.add('hidden', 'opacity-0');
                success.classList.remove('flex', 'opacity-100');

                overlay.classList.remove('overlay-enter');
                overlay.classList.add('overlay-active');
                content.classList.remove('modal-enter');
                content.classList.add('modal-active');
            } else {
                overlay.classList.remove('overlay-active');
                overlay.classList.add('overlay-enter');
                content.classList.remove('modal-active');
                content.classList.add('modal-enter');
            }
        }

        function submitForm() {
            const form = document.getElementById('modal-form');
            const success = document.getElementById('modal-success');

            // Fade out form
            form.classList.remove('opacity-100');
            form.classList.add('opacity-0');

            setTimeout(() => {
                // Hide form, show success container
                form.classList.remove('flex');
                form.classList.add('hidden');
                
                success.classList.remove('hidden');
                success.classList.add('flex');
                
                // Trigger reflow
                void success.offsetWidth;

                // Fade in success
                success.classList.remove('opacity-0');
                success.classList.add('opacity-100');
            }, 300); // Wait for fade out
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
      

<div className="aura-background-component fixed top-0 w-full h-screen opacity-50 -z-10 mix-blend-normal" data-alpha-mask="50" style={{maskImage: `linear-gradient(to bottom, transparent, black 0%, black 50%, transparent)`, webkitMaskImage: `linear-gradient(to bottom, transparent, black 0%, black 50%, transparent)`}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<nav className="flex sticky z-40 transition-all duration-300 bg-[#F9FAFB]/90 w-full max-w-7xl border-transparent border-b pt-4 pr-6 pb-4 pl-6 top-0 backdrop-blur-md items-center justify-between">

<a className="block" href="#">
<img alt="7K Mobile" className="w-auto h-8 object-cover" src="/assets/0b2e12d6-456f-4c10-9db1-e243c0d82ac6_320w.png" />
</a>

<button className="transition-all duration-300 active:scale-95 hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] text-sm font-semibold text-black bg-transparent border-black border-2 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-none" onClick={(e) => { toggleModal(true) }}>
            Join Waitlist
        </button>
</nav>

<main className="md:space-y-20 w-full max-w-7xl pt-8 pr-6 pb-16 pl-6 space-y-12">

<section className="relative">
<div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-16 gap-x-8 gap-y-8 justify-between">

<div className="lg:w-[60%] space-y-4">
<span className="text-[10px] uppercase text-sm font-semibold text-gray-600 tracking-normal bg-white border-gray-200 border rounded-full pt-0.5 pr-3 pb-0.5 pl-3 shadow-sm">Coming q1 2026 - Sui ecosystem</span><h1 className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-[#010101] to-[#989898] scale-100">Universal Reach,<br /> <span className="xl:bg-clip-text xl:text-transparent">with Sui Speed.</span></h1>
</div>

<div className="lg:w-[35%] flex flex-col lg:items-end lg:text-right text-left py-10 space-y-5 items-center">
<p className="leading-relaxed text-lg text-gray-500 tracking-tight max-w-sm">
                        The Non-Custodial Exchange Platform for Internet Capital Markets. Native DeFi OS on Sui.
                    </p>
<button className="bg-blue-600 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] active:scale-95" onClick={(e) => { toggleModal(true) }}>
                        Get Started
                    </button>
</div>
</div>

<div className="flex w-full pb-8 relative backdrop-blur-none scale-100 justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] bg-blue-100 blur-[90px] rounded-full -z-10 opacity-60 pointer-events-none"></div>
<img alt="7K Mobile App Interface" className="md:max-w-[500px] lg:max-w-[540px] transform hover:scale-[1.01] transition-transform duration-500 w-full max-w-[340px] object-contain z-10 relative shadow scale-95" src="/assets/555a77f3-f086-4f6b-9bee-5b5e25d582af_800w.png" style={{maskImage: `linear-gradient(transparent, black 5%, black 75%, transparent)`}} />

<div className="absolute top-[40%] left-[24%] z-50 animate-bounce duration-[3000ms] hidden md:block">
<div className="bg-white border-gray-50 border rounded-xl pt-2 pr-3 pb-2 pl-3 flex !scale-[1.75] origin-right transform-gpu gap-x-2 gap-y-2 items-center shadow-lg">
<div className="text-green-600 bg-green-100 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 flex">
<iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] leading-tight font-medium text-gray-500">Latency</div>
<div className="leading-tight text-xs font-semibold text-gray-900">Lightning</div>
</div>
</div>
</div>

<div className="absolute top-[62%] right-[24%] z-50 animate-bounce duration-[3000ms] delay-500 hidden md:block">
<div className="bg-white border-gray-50 border rounded-xl pt-2 pr-3 pb-2 pl-3 flex !scale-[1.75] origin-left transform-gpu gap-x-2 gap-y-2 items-center shadow-lg">
<div className="text-blue-600 bg-blue-100 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 flex">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] leading-tight font-medium text-gray-500">Security</div>
<div className="leading-tight text-xs font-semibold text-gray-900">Audited</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col items-center">
<div className="text-center space-y-3 mb-10 max-w-2xl">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tighter md:text-6xl">Why 7K Mobile?</h2>
<p className="text-base text-gray-500">
                    Built different. Built native. Built for power users who demand speed.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">

<div className="bg-white rounded-[2rem] p-7 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="20" icon="solar:cpu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Sui Tech Stack</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Infrastructure built with Sui tech stack. Proud to be a builder on the fastest chain.
                        </p>
</div>
<div className="mt-6 h-16 bg-gradient-to-r from-blue-50 to-transparent rounded-lg relative overflow-hidden opacity-70">
<div className="flex opacity-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-blue-200 w-full h-[1px]"></div>
<div className="absolute w-[1px] h-full bg-blue-200"></div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-7 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="20" icon="solar:layers-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">DeFi Suite Built-in</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Swap, LP, Staking & Lending, Margin, Perps, Portfolio Tracking... All included.
                        </p>
</div>
<div className="mt-6 flex gap-2 opacity-50">
<div className="h-12 w-full bg-indigo-50 rounded-t-lg"></div>
<div className="h-8 w-full bg-indigo-100 rounded-t-lg mt-auto"></div>
<div className="h-10 w-full bg-indigo-50 rounded-t-lg mt-auto"></div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-7 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="20" icon="solar:link-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Deep Integration</h3>
<p className="leading-relaxed text-sm text-gray-500">
                            We never walk alone. 7K Mobile integrates partner SDKs directly for seamless use.
                        </p>
</div>
<div className="mt-6 relative h-16 overflow-hidden">
<svg className="absolute bottom-0 text-orange-100 w-full" height="50" preserveaspectratio="none" viewBox="0 0 100 40">
<path className="" d="M0 40 Q 25 10 50 25 T 100 20" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-[2rem] p-7 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="20" icon="solar:lock-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Ika MPC Network</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Non-custodial settlement across chains with secure distributed signing infrastructure (2PC-MPC).
                        </p>
</div>
<div className="mt-6 flex justify-center">
<div className="relative w-24 h-12 overflow-hidden">
<div className="absolute w-20 h-20 border-[8px] border-cyan-50 rounded-full top-0 left-2"></div>
<div className="absolute w-20 h-20 border-[8px] border-transparent border-t-cyan-500 border-l-cyan-500 rounded-full top-0 left-2 rotate-45 transition-all duration-1000 group-hover:rotate-90"></div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-7 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="20" icon="solar:shield-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Non-custodial exchange</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Retain users's custody of assets on native chains while trading with the speed and UX of a centralized platform.
                        </p>
</div>
<div className="mt-6 flex justify-center opacity-60">
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-teal-200"></div>
<div className="w-3 h-3 rounded-full bg-teal-200"></div>
<div className="w-3 h-3 rounded-full bg-teal-500"></div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-7 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="20" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Hand-on Features</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            zkLogin, Address Book, Magic Links, Private Transfer...
                        </p>
</div>
<div className="mt-6 flex justify-end">
<div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center animate-pulse">
<span className="text-[10px] font-bold text-pink-500 uppercase">New</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full border-gray-100 border rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.04)]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center gap-x-8 gap-y-8">
<div className="md:pt-0 pt-4">
<div className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-[#010101] to-[#989898] scale-100">$17B+</div>
<div className="uppercase text-sm font-medium text-gray-500 tracking-normal">Volume Processed</div>
</div>
<div className="pt-4 md:pt-0">
<div className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-[#010101] to-[#989898] scale-100">5.9M</div>
<div className="uppercase text-sm font-medium text-gray-500 tracking-tight">Wallets Served</div>
</div>
<div className="md:pt-0 pt-4">
<div className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-[#010101] to-[#989898] scale-100">#2</div>
<div className="uppercase text-sm font-medium text-gray-500 tracking-tight">DEX Aggregator on Sui</div>
</div>
</div>
</section>

<section className="text-center pt-2 space-y-6">
<div className="space-y-2">
<div className="inline-flex text-[10px] uppercase text-xs font-bold text-blue-600 tracking-normal bg-blue-50 border-blue-100 border rounded-full mb-2 pt-1 pr-3 pb-1 pl-3 items-center">
                    Early Access
                </div>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tighter md:text-6xl">Be First in line!</h2>
<p className="text-base text-gray-500 max-w-md mx-auto">
                    Join the waitlist and get early access when we launch. Limited spots available.
                </p>
</div>
<button className="bg-[#111] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5 active:scale-95" onClick={(e) => { toggleModal(true) }}>
                Join Waitlist
            </button>
</section>
</main>

<footer className="w-full border-t border-gray-200 bg-white py-10 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-sm text-gray-500 font-medium">
                © 2026 7K DeFi. Building the future of DeFi on Sui.
            </div>
<div className="flex gap-8 items-center">

<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<div className="w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full object-contain scale-[0.8] origin-center text-gray-400 hover:text-black transition-colors" fill="currentColor" viewBox="0 0 1226.37 1226.37">
<path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"></path>
</svg>
</div>
</a>

<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<div className="w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full object-contain" fill="currentColor" version="1.1" viewBox="0 0 512 512">
<path d="M433.43,93.222c-32.633-14.973-67.627-26.005-104.216-32.324c-0.666-0.122-1.332,0.183-1.675,0.792   c-4.501,8.005-9.486,18.447-12.977,26.655c-39.353-5.892-78.505-5.892-117.051,0c-3.492-8.39-8.658-18.65-13.179-26.655   c-0.343-0.589-1.009-0.894-1.675-0.792c-36.568,6.298-71.562,17.33-104.216,32.324c-0.283,0.122-0.525,0.325-0.686,0.589   c-66.376,99.165-84.56,195.893-75.64,291.421c0.04,0.467,0.303,0.914,0.666,1.198c43.793,32.161,86.215,51.685,127.848,64.627   c0.666,0.203,1.372-0.04,1.796-0.589c9.848-13.449,18.627-27.63,26.154-42.543c0.444-0.873,0.02-1.909-0.888-2.255   c-13.925-5.282-27.184-11.723-39.939-19.036c-1.009-0.589-1.09-2.032-0.161-2.723c2.684-2.011,5.369-4.104,7.932-6.217   c0.464-0.386,1.11-0.467,1.655-0.224c83.792,38.257,174.507,38.257,257.31,0c0.545-0.264,1.191-0.182,1.675,0.203   c2.564,2.113,5.248,4.226,7.952,6.237c0.928,0.691,0.867,2.134-0.141,2.723c-12.755,7.456-26.014,13.754-39.959,19.016   c-0.908,0.345-1.312,1.402-0.867,2.275c7.689,14.892,16.468,29.073,26.134,42.523c0.404,0.569,1.13,0.813,1.796,0.609   c41.835-12.941,84.257-32.466,128.05-64.627c0.384-0.284,0.626-0.711,0.666-1.178c10.676-110.441-17.881-206.376-75.7-291.421   C433.954,93.547,433.712,93.344,433.43,93.222z M171.094,327.065c-25.227,0-46.014-23.16-46.014-51.604   s20.383-51.604,46.014-51.604c25.831,0,46.417,23.364,46.013,51.604C217.107,303.905,196.723,327.065,171.094,327.065z    M341.221,327.065c-25.226,0-46.013-23.16-46.013-51.604s20.383-51.604,46.013-51.604c25.832,0,46.417,23.364,46.014,51.604   C387.235,303.905,367.054,327.065,341.221,327.065z"></path>
</svg>
</div>
</a>

<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<div className="w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full object-contain" fill="currentColor" viewBox="0 0 112 122">
<path d="M76.4132 0.19725C77.9165 -0.52845 79.5689 0.863691 79.1363 2.49141L66.9239 48.4398C67.1021 48.5292 67.2673 48.6464 67.4129 48.7888L68.5459 49.8966L87.5923 31.5057C87.9551 31.1554 88.4372 30.96 88.9386 30.96H110.046C111.805 30.96 112.665 33.1325 111.392 34.3618L81.8413 62.8956L110.07 90.4953C111.331 91.7285 110.469 93.8886 108.715 93.8886H88.3514C87.8507 93.8886 87.3691 93.6937 87.0065 93.3442L61.5074 68.7688L51.5812 105.776C51.4602 106.227 51.1849 106.62 50.8044 106.885L29.604 121.645C28.1116 122.684 26.1477 121.282 26.6141 119.511L55.1188 11.246C55.2659 10.6871 55.6478 10.2217 56.1636 9.97272L76.4132 0.19725Z" fill="currentColor"></path>
<path d="M27.0095 94.3579C27.8931 94.3579 28.6663 93.7567 28.894 92.8927L44.1065 35.159C44.4367 33.906 43.5035 32.6767 42.2221 32.6767H5.27432C4.39743 32.6767 3.62836 33.2689 3.3946 34.1243L0.0717075 46.2824C-0.271892 47.5396 0.662538 48.7823 1.95143 48.7823H20.2218C21.5006 48.7823 22.4333 50.0069 22.1079 51.2584L11.5447 91.8818C11.2192 93.1333 12.152 94.3579 13.4307 94.3579H27.0095Z" fill="currentColor"></path>
</svg>
</div>
</a>
</div>
</div>
</footer>


<div className="fixed inset-0 z-50 bg-[#F9FAFB]/80 backdrop-blur-md transition-all duration-300 overlay-enter" id="modal-overlay" onClick={(e) => { toggleModal(false) }}></div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-sm px-4 transition-all duration-300 modal-enter" id="modal-content">
<div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden border border-gray-100 min-h-[420px] justify-center">

<div className="w-full flex flex-col items-center transition-opacity duration-300 opacity-100" id="modal-form">

<div className="mb-6">
<img alt="7K" className="h-10 w-auto object-contain" src="/assets/0b2e12d6-456f-4c10-9db1-e243c0d82ac6_320w.png" />
</div>

<h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">mobile.7k.ag/you</h3>

<p className="font-quicksand text-base text-gray-500 font-medium mb-8 leading-snug max-w-[260px]">
                    Enter your info & we'll contact you the instant we launch
                </p>

<div className="w-full space-y-4">
<input className="w-full px-5 py-3.5 rounded-xl border-2 border-black text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:ring-0 transition-colors bg-white" placeholder="Enter your Email" type="email" />
<div className="relative w-full">
<input className="w-full pl-5 pr-14 py-3.5 rounded-xl border-2 border-black text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:ring-0 transition-colors bg-white" placeholder="Your Username" type="text" />
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#111] text-white p-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={(e) => { submitForm() }}>
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="2.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full flex-col items-center hidden opacity-0 transition-opacity duration-300 absolute inset-0 justify-center p-8 text-center" id="modal-success">

<div className="mb-8">
<img alt="7K" className="h-10 w-auto object-contain" src="/assets/0b2e12d6-456f-4c10-9db1-e243c0d82ac6_320w.png" />
</div>

<h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Thank you!</h3>

<p className="font-quicksand text-base text-gray-500 font-medium mb-10 leading-snug max-w-[280px] mx-auto">
                    Your spot in the future of Sui is reserved. We'll send an invite to your inbox as soon as we're ready for you.
                </p>

<button className="transition-all duration-300 active:scale-95 hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] text-sm font-semibold text-black bg-white border-black border-2 rounded-full px-10 py-2.5 shadow-none" onClick={(e) => { toggleModal(false) }}>
                    Close
                </button>
</div>
</div>
</div>


    </>
  );
}
