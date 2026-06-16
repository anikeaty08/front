import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function toggleAccordion(id) {
            const allItems = ['item-1', 'item-2', 'item-3', 'item-4'];
            const content = document.getElementById(`content-${id}`);
            const iconWrapper = document.getElementById(`icon-${id}`);
            
            // Determine if currently closed (based on height being 0)
            const isClosed = content.style.maxHeight === '0px' || !content.style.maxHeight;

            // Close all items first
            allItems.forEach(itemId => {
                const el = document.getElementById(`content-${itemId}`);
                const ic = document.getElementById(`icon-${itemId}`);
                if (el) {
                    el.style.maxHeight = '0px';
                    el.style.opacity = '0';
                }
                if (ic) {
                    ic.classList.remove('bg-white', 'border-white');
                    ic.classList.add('border-gray-700');
                    // Reset icons
                    const plus = ic.querySelector('.icon-plus');
                    const minus = ic.querySelector('.icon-minus');
                    if (plus && minus) {
                        plus.style.opacity = '1';
                        plus.style.transform = 'rotate(0deg) scale(1)';
                        minus.style.opacity = '0';
                        minus.style.transform = 'rotate(90deg) scale(0)';
                    }
                }
            });

            // If it was closed, open it now
            if (isClosed) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                
                iconWrapper.classList.remove('border-gray-700');
                iconWrapper.classList.add('bg-white', 'border-white');

                const plus = iconWrapper.querySelector('.icon-plus');
                const minus = iconWrapper.querySelector('.icon-minus');
                if (plus && minus) {
                    plus.style.opacity = '0';
                    plus.style.transform = 'rotate(90deg) scale(0)';
                    minus.style.opacity = '1';
                    minus.style.transform = 'rotate(0deg) scale(1)';
                }
            }
        }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed flex transition-all duration-200 z-50 bg-transparent w-full h-20 border-gray-100 border-b top-0 left-0 items-center mb-[10px]">
<div className="px-4 lg:px-20 flex w-full mr-auto ml-auto items-center justify-between">

<div className="flex items-center flex-shrink-0 cursor-pointer select-none">
<img alt="Funnelz Logo" className="h-8 w-auto object-contain block" src="https://storage.googleapis.com/msgsndr/ybbZgmGJTpNCdjLzIzKR/media/6939e68eb26327c07da62678.png?w=800&amp;q=80"/>
</div>

<div className="flex items-center gap-3 sm:gap-4">
<button className="items-center justify-center px-4 py-2 text-sm font-semibold transition-all bg-[#EF5323] rounded-lg hover:bg-[#d84a1e] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF5323] flex text-white">
        Get Started
      </button>
</div>
</div>
</header>

<main className="border-dashed flex flex-col bg-[#F3F4F6] w-full max-w-fit border-gray-300 border mt-16 mr-auto ml-auto">

<div className="grid grid-cols-1 lg:grid-cols-2 border-dashed border-gray-300 border-b">

<div className="flex flex-col border-dashed lg:p-16 lg:border-r xl:pt-0 xl:pb-0 xl:pl-16 xl:pr-16 pt-8 pr-8 pb-8 pl-8 justify-center border-gray-300">

<div className="mb-8">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm text-xs font-medium tracking-wide uppercase border-green-200 bg-green-50/50 text-green-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
              Available for June
            </span>
</div>

<h1 className="leading-[1.05] lg:text-[4.5rem] text-5xl font-semibold tracking-tight mb-8 text-gray-900">
            Fueling
            <span className="inline-block relative -top-1 mx-1 transform -rotate-6 shadow-xl shadow-orange-500/20 rounded-2xl overflow-hidden align-middle">
<div className="lg:w-16 lg:h-16 flex bg-gradient-to-br w-12 h-12 items-center justify-center from-orange-400 to-orange-600">
<style className="">
        @keyframes rock-side-to-side {

            0%,
            100% {
                transform: rotate(-8deg);
            }

            50% {
                transform: rotate(8deg);
            }
        }
    </style>
<img alt="Logo" className="lg:w-10 lg:h-10 cursor-pointer w-[32px] h-[32px] object-contain drop-shadow-sm" onclick="window.location.href='https://storage.googleapis.com/msgsndr/ybbZgmGJTpNCdjLzIzKR/media/6939d96ab26327fc76a41469.png'" role="button" src="https://storage.googleapis.com/msgsndr/ybbZgmGJTpNCdjLzIzKR/media/6939d96ab26327fc76a41469.png?w=800&amp;q=80"/>
</div>
</span>
            growth
            <br className="hidden lg:block"/>
            with every click
          </h1>

<p className="leading-relaxed text-lg font-normal text-gray-500 max-w-md mb-12">From high-converting ads and landing pages to nurturing automations, we craft lead funnels that grow your business on autopilot.</p>

<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="px-8 py-3.5 rounded-xl font-medium shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base bg-gray-900 hover:bg-black text-white shadow-gray-900/10">
              Drive results now
            </button>
<button className="border px-6 py-3.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-base shadow-sm bg-white border-gray-200 hover:bg-gray-50 text-gray-700">
<svg className="lucide lucide-play-circle w-5 h-5 text-gray-500 stroke-[1.5]" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Learn more
            </button>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 border-dashed border-t pt-8 gap-x-6 gap-y-6 items-start border-gray-300">
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Trusted Partners
              </span>
<div className="flex -space-x-3">
<img alt="User" className="w-9 h-9 rounded-full border-2 border-[#F3F4F6]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-9 h-9 rounded-full border-2 border-[#F3F4F6]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-9 h-9 rounded-full border-2 border-[#F3F4F6]" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-9 h-9 rounded-full border-2 border-[#F3F4F6]" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
</div>
<div className="hidden sm:block w-px h-10 border-r border-dashed bg-gray-300 border-gray-300"></div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Rated Excellent: 5/5
              </span>
<div className="flex gap-1 text-yellow-400">
<svg className="lucide lucide-star w-5 h-5 fill-current stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>

<div className="lg:h-auto overflow-hidden lg:p-12 xl:p-16 flex w-full h-[800px] pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">

<div className="absolute inset-0 mask-gradient-y w-full h-full pointer-events-none z-10"></div>

<div className="w-full max-w-md mx-auto">
<div className="animate-scroll-y pt-0 pb-0 space-y-6">


<div className="z-10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_4px_20px_rgb(0,0,0,0.03)] bg-white border-gray-100">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Mon
                  </span>
<span className="text-xs font-medium text-gray-400">18 Jul</span>
</div>
<div className="flex items-center gap-4">
<img alt="Client" className="w-11 h-11 rounded-full object-cover border border-gray-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1 min-w-0">
<h4 className="truncate text-sm font-semibold text-gray-900">
          New client call: Edward
        </h4>
<p className="text-xs text-gray-500 mt-0.5 font-medium">
          9:30 AM – 10:30 AM
        </p>
</div>
<span className="text-xs font-medium text-gray-400">1hr</span>
</div>
</div>

<div className="rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border bg-white border-gray-100">
<div className="flex justify-between items-center mb-4 border-b border-dashed pb-3 border-gray-100">
<span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Tue
                  </span>
<span className="text-xs font-medium text-gray-400">19 Jul</span>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<img alt="Client" className="w-11 h-11 rounded-full object-cover border border-gray-100" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold truncate text-gray-900">
            New client call: Sarah
          </h4>
<p className="text-xs text-gray-500 mt-0.5 font-medium">
            9:30 AM – 10:30 AM
          </p>
</div>
<span className="text-xs font-medium text-gray-400">1hr</span>
</div>
<div className="border-t border-dashed border-gray-100"></div>
<div className="flex items-center gap-4">
<img alt="Client" className="w-11 h-11 rounded-full object-cover border border-gray-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold truncate text-gray-900">
            New client call: Leah
          </h4>
<p className="text-xs text-gray-500 mt-0.5 font-medium">
            12:45 PM – 1:15 AM
          </p>
</div>
<span className="text-xs font-medium text-gray-400">30m</span>
</div>
</div>
</div>


<div className="rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border bg-white border-gray-100">
<div className="flex justify-between items-center mb-4 border-b border-dashed pb-3 border-gray-100">
<span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Mon
                  </span>
<span className="text-xs font-medium text-gray-400">25 Jul</span>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<img alt="Client" className="w-11 h-11 rounded-full object-cover border border-gray-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold truncate text-gray-900">
            New client call: Edward
          </h4>
<p className="text-xs text-gray-500 mt-0.5 font-medium">
            9:30 AM – 10:30 AM
          </p>
</div>
<span className="text-xs font-medium text-gray-400">1hr</span>
</div>
</div>
</div>

<div className="rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border bg-white border-gray-100">
<div className="flex justify-between items-center mb-4 border-b border-dashed pb-3 border-gray-100">
<span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Thu
                  </span>
<span className="text-xs font-medium text-gray-400">28 Jul</span>
</div>
<div className="flex items-center gap-4">
<img alt="Client" className="w-11 h-11 rounded-full object-cover border border-gray-100" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold truncate text-gray-900">
          New client call: Mirielle
        </h4>
<p className="text-xs text-gray-500 mt-0.5 font-medium">
          9:30 AM – 10:30 AM
        </p>
</div>
<span className="text-xs font-medium text-gray-400">1hr</span>
</div>
</div>

<div className="rounded-2xl p-6 border opacity-60 bg-white border-gray-100">
<div className="flex justify-between items-center mb-4 border-b border-dashed pb-3 border-gray-100">
<span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Fri
                  </span>
<span className="text-xs font-medium text-gray-400">29 Jul</span>
</div>
<div className="flex items-center gap-4">
<img alt="Client" className="w-11 h-11 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold truncate text-gray-900">
          New client call: Natalie
        </h4>
<p className="text-xs text-gray-500 mt-0.5 font-medium">
          9:30 AM – 10:30 AM
        </p>
</div>
<span className="text-xs font-medium text-gray-400">1hr</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:p-16 flex flex-col gap-16 w-full pt-8 pr-8 pb-8 pl-8 gap-x-16 gap-y-16">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
<div className="flex flex-col gap-4 gap-x-4 gap-y-4 items-start">
<span className="px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase border-orange-200 bg-white text-orange-600">
              Mission
            </span>
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-gray-400">
              Our focus is simple
              <span className="text-gray-900">Design to convert</span>
</h2>
</div>
<p className="text-gray-500 text-lg max-w-xs leading-relaxed lg:text-right font-medium">
            We promise to deliver beyond your expectations for your business.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex flex-col gap-6">

<div className="rounded-2xl p-5 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-center justify-between bg-white border-gray-200">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold border-white bg-orange-100 text-orange-600">
                  +
                </div>
</div>
<span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                40+ Partners
              </span>
</div>

<div className="rounded-2xl p-8 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[240px] bg-white border-gray-200">
<p className="text-base font-medium leading-snug text-gray-800">
                Earn back on your investment within 30 days
              </p>
<div className="mt-8">
<span className="block text-6xl lg:text-7xl font-semibold tracking-tighter mb-1 text-gray-900">
                  90
                  <span className="text-4xl lg:text-5xl text-gray-400">%</span>
</span>
<span className="text-sm font-medium text-gray-500">
                  Return on investment (ROI)
                </span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex flex-col min-h-[240px] h-full border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] justify-between bg-white border-gray-200">
<p className="text-base font-medium leading-snug text-gray-800">
                Through our custom-tailored funnel systems
              </p>
<div className="mt-8">
<span className="block lg:text-7xl text-6xl font-semibold tracking-tighter mb-1 text-gray-900">$57M <span className="text-4xl lg:text-5xl text-gray-400">+</span></span>
<span className="text-sm font-medium text-gray-500">
                  Revenue generated
                </span>
</div>
</div>

<div className="rounded-2xl p-5 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-center gap-3 bg-white border-gray-200">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                Available for June
              </span>
</div>
</div>

<div className="lg:col-span-2">
<div className="lg:p-10 flex flex-col overflow-hidden group bg-[#1C1C1C] h-full border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl justify-between border-gray-800">

<div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-500">
<img alt="Background Graphic" className="w-[400px] h-[400px] object-contain" src="https://storage.googleapis.com/msgsndr/ybbZgmGJTpNCdjLzIzKR/media/6939eb8ce03e9d1471b8a9c8.png"/>
</div>
<p className="text-xl lg:text-2xl font-medium leading-relaxed max-w-md relative z-10 text-gray-300">
                We delivered 50+ projects worldwide, helping service-based
                companies secure more clients
              </p>
<div className="mt-12 flex items-end justify-between relative z-10">
<div className="">
<span className="block lg:text-7xl text-6xl font-semibold tracking-tighter mb-2 text-white">5 <span className="lg:text-4xl text-3xl font-normal text-gray-500">/5 Rating</span></span>
</div>
<div className="flex flex-col items-end gap-2 mb-2">
<div className="flex gap-1">
<svg className="w-5 h-5 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<span className="text-[10px] font-bold uppercase tracking-wider text-right text-gray-400">
                    Trusted by clients worldwide
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-dashed flex sm:px-8 w-full border-t pt-20 pr-6 pb-20 pl-6 justify-center border-gray-300">
<div className="max-w-2xl w-full flex flex-col gap-8">

<div className="flex justify-center mb-4">
<div className="w-16 h-16 border rounded-2xl flex items-center justify-center shadow-sm bg-white border-gray-200">
<svg className="text-orange-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
</div>

<h3 className="text-3xl sm:text-4xl font-semibold text-center tracking-tight leading-tight text-gray-900">
            Stop losing leads to
            
            confusing funnels
          </h3>

<p className="text-lg text-gray-500 font-medium -mt-2 text-center">
            Dear Growth Leader,
          </p>

<ul className="space-y-4 mt-2">
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-red-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<p className="text-base leading-relaxed text-gray-600">
                Are you tired of watching your ad spend evaporate with little
                return?
              </p>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-red-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<p className="text-base leading-relaxed text-gray-600">
                Does your current landing page fail to communicate your true
                value?
              </p>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-red-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<p className="text-base leading-relaxed text-gray-600">
                Is the complexity of building a proper funnel slowing you down?
              </p>
</li>
</ul>

<p className="leading-relaxed text-base sm:text-lg text-gray-600">
            We understand the frustration. You've built an incredible product,
            but the bridge between you and your customers feels broken. Most
            agencies overcomplicate the process with flashy designs that don't
            convert. You need a streamlined system that works tirelessly to turn
            visitors into loyal advocates.
          </p>

<div className="flex items-center gap-4 p-5 rounded-2xl border shadow-sm mt-2 bg-white border-gray-200">
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border bg-gray-100 border-gray-200">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="">
<p className="text-sm font-semibold italic text-gray-900">
                "The ROI we've seen in just 3 months is undeniable."
              </p>
<p className="text-xs text-gray-500 font-medium mt-1">
                🚀 David K., CEO at ScaleUp
              </p>
</div>
</div>

<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-8 text-gray-900">
            For 5 Years, We've Helped Over 150+ SaaS Founders Scale Predictably
          </h3>

<p className="leading-relaxed text-base text-gray-600">
            Our methodology isn't based on guesswork. We analyze data points
            from thousands of successful campaigns to build a funnel that fits
            your specific market needs.
          </p>

<div className="space-y-8 mt-4">
<div className="">
<h4 className="text-lg font-semibold mb-2 text-gray-900">
                Precision-Engineered Copy
              </h4>
<p className="leading-relaxed text-gray-600">
                Words that sell without sounding salesy. We tap into the
                psychological triggers that drive action, ensuring your message
                lands with impact every time.
              </p>
</div>
<div className="">
<h4 className="text-lg font-semibold mb-2 text-gray-900">
                Frictionless User Journeys
              </h4>
<p className="leading-relaxed text-gray-600">
                We remove every obstacle standing between your prospect and the
                checkout button. A smooth experience means higher conversion
                rates.
              </p>
</div>
<div className="">
<h4 className="text-lg font-semibold mb-2 text-gray-900">
                Automated Nurture Sequences
              </h4>
<p className="leading-relaxed text-gray-600">
                Don't let leads go cold. Our systems follow up automatically,
                providing value and keeping your brand top-of-mind until they
                are ready to buy.
              </p>
</div>
</div>

<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3">
<div className="p-1 rounded-full bg-green-100 text-green-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium text-gray-800">
                Achieve 3x ROI in 90 days
              </span>
</li>
<li className="flex items-center gap-3">
<div className="p-1 rounded-full bg-green-100 text-green-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium text-gray-800">
                Automate 80% of your sales process
              </span>
</li>
<li className="flex items-center gap-3">
<div className="p-1 rounded-full bg-green-100 text-green-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium text-gray-800">
                Secure consistent, high-quality leads
              </span>
</li>
</ul>

<div className="space-y-4 leading-relaxed mt-4 text-gray-600">
<p className="">
              The opportunity to dominate your niche is right in front of you.
              Don't let another month go by wondering "what if."
            </p>
<p className="">
              Click the button below to schedule your strategy session. We'll
              audit your current setup and show you exactly where the hidden
              revenue lies.
            </p>
</div>

<div className="mt-2">
<p className="font-medium text-gray-900">To your success,</p>
<div className="mt-4 flex items-center gap-4">
<div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<p className="text-base font-bold text-gray-900">James Anderson</p>
<p className="text-sm text-gray-500">Founder, Funnelz Home</p>
</div>
</div>
</div>

<div className="mt-8">
<button className="w-full text-lg font-semibold py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white shadow-gray-900/10">
              BUILD MY FUNNEL NOW
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-center text-[10px] mt-3 font-semibold uppercase tracking-widest text-gray-400">
              Eliminate Friction of the Click
            </p>
</div>
</div>
</div>

<div className="lg:p-16 border-dashed w-full border-t pt-8 pr-8 pb-8 pl-8 border-gray-300">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
<div className="flex flex-col items-start gap-4">
<span className="px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase border-orange-200 bg-white text-orange-600">
              Projects
            </span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[0.95] text-gray-400">
              Proven results
              <span className="block text-gray-900">Global impact</span>
</h2>
</div>
<p className="text-gray-500 text-lg font-medium max-w-sm lg:text-right leading-relaxed">
            Helping service-based businesses attract, convert, and grow on autopilot.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-md">
<img alt="Hydrox Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;w=800&amp;h=1000&amp;q=80"/>
<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-black/80 via-black/20"></div>
<div className="absolute bottom-0 w-full p-8 flex flex-col items-center text-center">
<h3 className="text-3xl font-semibold tracking-tight mb-2 text-white">Hydrox</h3>
<p className="mb-8 font-medium text-gray-300">52% increase in customers</p>
<div className="flex gap-3 flex-wrap justify-center">
<span className="border rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border-white/30 text-white bg-white/5">
                  90% Increase in CTR
                </span>
<span className="border rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border-white/30 text-white bg-white/5">
                  78% Decline in Bounce Rate
                </span>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-md">
<img alt="Ganache Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-black/80 via-black/20"></div>
<div className="absolute bottom-0 w-full p-8 flex flex-col items-center text-center">
<h3 className="text-3xl font-semibold tracking-tight mb-2 text-white">Ganache</h3>
<p className="mb-8 font-medium text-gray-300">From 100 to 500 sales per month</p>
<div className="flex gap-3 flex-wrap justify-center">
<span className="border rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border-white/30 text-white bg-white/5">
                  84% Increase in CTR
                </span>
<span className="border rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border-white/30 text-white bg-white/5">
                  50% Decrease in CAC
                </span>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-md">
<img alt="Glow Terra Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20"></div>
<div className="absolute bottom-0 w-full p-8 flex flex-col items-center text-center">
<h3 className="text-3xl font-semibold tracking-tight mb-2 text-white">Glow Terra</h3>
<p className="mb-8 font-medium text-gray-300">52% increase in customers</p>
<div className="flex gap-3 flex-wrap justify-center">
<span className="border rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border-white/30 text-white bg-white/5">
                  90% Increase in CTR
                </span>
<span className="border rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border-white/30 text-white bg-white/5">
                  78% Decline in Bounce Rate
                </span>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-md">
<img alt="Lumina Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&amp;fit=crop&amp;w=800&amp;h=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20"></div>
<div className="absolute bottom-0 w-full p-8 flex flex-col items-center text-center">
<h3 className="text-3xl font-semibold tracking-tight mb-2 text-white">Lumina</h3>
<p className="mb-8 font-medium text-gray-300">3x Revenue Growth in Q4</p>
<div className="flex gap-3 flex-wrap justify-center">
<span className="border rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border-white/30 text-white bg-white/5">
                  65% Higher Conversion
                </span>
<span className="border rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border-white/30 text-white bg-white/5">
                  4.8/5 Customer Rating
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:p-16 border-dashed text-white bg-[#111111] w-full border-gray-700 rounded-b-none border-t pt-8 pr-8 pb-8 pl-8">

<div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-20 justify-between">
<div className="flex flex-col gap-6 items-start">
<span className="px-4 py-1.5 rounded-full border text-orange-500 text-[10px] font-semibold tracking-widest uppercase border-orange-900/50 bg-orange-900/10">
                Services
            </span>
<h2 className="lg:text-6xl leading-[0.95] text-4xl font-medium text-gray-500 tracking-tight">
        How can we help
        <span className="text-white">Your business grow</span>
</h2>
</div>
<p className="text-lg font-normal max-w-xs lg:text-right leading-relaxed hidden lg:block text-gray-400">
      We work with your data systems to

      ensure correct tracking and only

      optimise your campaigns for

      QUALIFIED leads &amp; buyers.
    </p>
</div>

<div className="flex flex-col border-gray-800 border-t" id="accordion-wrapper">

<div className="border-gray-800 border-b">
<button className="flex focus:outline-none group text-left w-full pt-8 pb-8 items-center justify-between -multi" onclick="toggleAccordion('item-1')">
<div className="flex items-center gap-6 lg:gap-8">
<span className="font-mono text-sm text-gray-600">001</span>
<span className="lg:text-3xl group-hover:text-orange-500 transition-colors text-2xl font-medium tracking-tight text-white">Market Research &amp; Strategy</span>
</div>
<div className="flex transition-all duration-300 group-hover:border-gray-500 w-10 h-10 border rounded-full relative items-center justify-center" id="icon-item-1">
<svg className="transition-all duration-300 icon-plus absolute w-[20px] h-[20px] edit-mode-selected-multi" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(156, 163, 175)', width: '20px', height: '20px', opacity: '1', transform: 'rotate(0deg) scale(1)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 absolute transition-all duration-300 opacity-0 scale-0 icon-minus rotate-90 text-black edit-mode-selected-multi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{opacity: '0', transform: 'rotate(90deg) scale(0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path></svg>
</div>
</button>
<div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out" id="content-item-1" style={{maxHeight: '0px', opacity: '0'}}>
<div className="pb-10 pt-2 pl-4 lg:pl-[4.5rem] pr-4 flex flex-col lg:flex-row gap-10 items-start justify-between">
<div className="flex flex-col gap-4 items-start text-left max-w-lg pt-2">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                            12 Projects Delivered
                        </span>
<p className="text-lg leading-relaxed font-normal text-gray-400">
              We hack your competitors, research your market &amp; survey your customers to uncover why people buy.
            </p>
</div>
<div className="relative w-full lg:w-96 aspect-video flex-shrink-0 rounded-lg overflow-hidden border group border-white/10">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="border-b border-gray-800">
<button className="flex focus:outline-none group text-left w-full pt-8 pb-8 items-center justify-between" onclick="toggleAccordion('item-2')">
<div className="flex items-center gap-6 lg:gap-8">
<span className="font-mono text-sm text-gray-600">002</span>
<span className="lg:text-3xl group-hover:text-orange-500 transition-colors text-2xl font-medium tracking-tight text-white">Data Tracking &amp; Analysis</span>
</div>
<div className="flex transition-all duration-300 group-hover:border-gray-500 w-10 h-10 border rounded-full relative items-center justify-center" id="icon-item-2">
<svg className="w-5 h-5 absolute transition-all duration-300 icon-plus text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{opacity: '1', transform: 'rotate(0deg) scale(1)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 absolute transition-all duration-300 opacity-0 scale-0 icon-minus rotate-90 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{opacity: '0', transform: 'rotate(90deg) scale(0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</button>
<div className="overflow-hidden transition-all duration-500 ease-in-out opacity-0 max-h-0" id="content-item-2" style={{maxHeight: '0px', opacity: '0'}}>
<div className="lg:pl-[4.5rem] flex flex-col lg:flex-row gap-10 pt-2 pr-4 pb-10 pl-4 items-start justify-between">
<div className="flex flex-col gap-4 items-start text-left max-w-lg pt-2">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                            28 Campaigns Managed
                        </span>
<p className="text-lg leading-relaxed font-normal text-gray-400">
              We hack your competitors, research your market &amp; survey your customers to uncover why people buy.
            </p>
<a className="inline-flex items-center gap-2 text-sm border-b pb-0.5 transition-colors mt-2 text-white border-white/20 hover:border-white" href="#">
              View Ad Gallery
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</a>
</div>
<div className="relative w-full lg:w-96 aspect-video flex-shrink-0 rounded-lg overflow-hidden border group border-white/10">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="border-b border-gray-800">
<button className="w-full py-8 flex items-center justify-between text-left focus:outline-none group -multi" onclick="toggleAccordion('item-3')">
<div className="flex items-center gap-6 lg:gap-8">
<span className="font-mono text-sm text-gray-600">003</span>
<span className="text-2xl lg:text-3xl font-medium tracking-tight group-hover:text-orange-500 transition-colors text-white">Landing Pages</span>
</div>
<div className="relative w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-gray-500" id="icon-item-3">
<svg className="w-5 h-5 absolute transition-all duration-300 icon-plus text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{opacity: '1', transform: 'rotate(0deg) scale(1)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 absolute transition-all duration-300 opacity-0 scale-0 icon-minus rotate-90 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{opacity: '0', transform: 'rotate(90deg) scale(0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</button>
<div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out" id="content-item-3" style={{maxHeight: '0px', opacity: '0'}}>
<div className="pb-10 pt-2 pl-4 lg:pl-[4.5rem] pr-4 flex flex-col lg:flex-row gap-10 items-start justify-between">
<div className="flex flex-col gap-4 items-start text-left max-w-lg pt-2">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                            45 Sequences Built
                        </span>
<p className="text-lg leading-relaxed font-normal text-gray-400">
              Stop wasting traffic and start capturing qualified leads on autopilot. We build conversion-optimized
              funnels that guide
              every visitor to take action – so you get more leads without chasing them.
            </p>
<a className="inline-flex items-center gap-2 text-sm border-b pb-0.5 transition-colors mt-2 text-white border-white/20 hover:border-white" href="#">
              See Examples
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</a>
</div>
<div className="relative w-full lg:w-96 aspect-video flex-shrink-0 rounded-lg overflow-hidden border group border-white/10">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="border-b border-gray-800">
<button className="flex focus:outline-none group text-left w-full pt-8 pb-8 items-center justify-between -multi" onclick="toggleAccordion('item-4')">
<div className="flex items-center gap-6 lg:gap-8">
<span className="font-mono text-sm text-gray-600">004</span>
<span className="text-2xl lg:text-3xl font-medium tracking-tight group-hover:text-orange-500 transition-colors text-white">Email &amp; SMS Automations</span>
</div>
<div className="flex transition-all duration-300 group-hover:border-gray-500 w-10 h-10 border rounded-full relative items-center justify-center" id="icon-item-4">
<svg className="w-5 h-5 absolute transition-all duration-300 icon-plus text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{opacity: '1', transform: 'rotate(0deg) scale(1)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 absolute transition-all duration-300 opacity-0 scale-0 icon-minus rotate-90 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{opacity: '0', transform: 'rotate(90deg) scale(0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</button>
<div className="overflow-hidden transition-all duration-500 ease-in-out opacity-0 max-h-0" id="content-item-4" style={{maxHeight: '0px', opacity: '0'}}>
<div className="pb-10 pt-2 pl-4 lg:pl-[4.5rem] pr-4 flex flex-col lg:flex-row gap-10 items-start justify-between">
<div className="flex flex-col gap-4 items-start text-left max-w-lg pt-2">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                            18 Systems Deployed
                        </span>
<p className="text-lg leading-relaxed font-normal text-gray-400">
              Speed up sales cycles, improve

              show up-rates and close more

              deals with advanced email &amp; SMS

              automations.
            </p>
<a className="inline-flex items-center gap-2 text-sm border-b pb-0.5 transition-colors mt-2 text-white border-white/20 hover:border-white" href="#">
              View Integrations
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</a>
</div>
<div className="relative w-full lg:w-96 aspect-video flex-shrink-0 rounded-lg overflow-hidden border group border-white/10">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform rotate-180" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>

<button className="flex focus:outline-none group -multi text-left w-full pt-8 pb-8 items-center justify-between" onclick="toggleAccordion('item-1')">
<div className="flex items-center gap-6 lg:gap-8">
<span className="text-sm text-gray-600 font-mono">005</span>
<span className="text-2xl lg:text-3xl font-medium tracking-tight group-hover:text-orange-500 transition-colors text-white">Google Ads</span>
</div>
<div className="flex transition-all duration-300 group-hover:border-gray-500 w-10 h-10 border rounded-full relative items-center justify-center border-gray-700" id="icon-item-1">
<svg className="transition-all duration-300 icon-plus absolute w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(156, 163, 175)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 absolute transition-all duration-300 opacity-0 scale-0 icon-minus rotate-90 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</button>
</div>

<div className="lg:p-16 border-dashed bg-[#F9FAFB] w-full border-t pt-8 pr-8 pb-8 pl-8 border-gray-300">

<div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16 gap-x-10 gap-y-10 justify-between">
<div className="flex flex-col items-start gap-4">
<span className="px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase border-red-200 bg-white text-red-600">
              Testimonials
            </span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[0.95] text-gray-400">
              40+ partners
              <span className="block text-gray-900">One outcome: Growth</span>
</h2>
</div>
<p className="text-gray-500 text-lg font-medium max-w-xs lg:text-right leading-relaxed">
            Real stories from real businesses who scaled with our funnel systems.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="rounded-2xl p-8 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[280px] bg-white border-gray-200">
<div className="flex justify-between items-start mb-6">
<svg className="transform rotate-180 text-gray-900" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<div className="flex gap-0.5 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">
              "Mapped out our goals into an easy-to-follow growth system. The clarity we gained was worth every penny."
            </p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Cameron Bell" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<h4 className="text-sm font-bold text-gray-900">Cameron Bell</h4>
<p className="text-xs text-gray-500 font-medium">Ultimus</p>
</div>
</div>
<svg className="w-5 h-5 opacity-40" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
</div>
</div>

<div className="rounded-2xl p-8 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[280px] bg-white border-gray-200">
<div className="flex justify-between items-start mb-6">
<svg className="transform rotate-180 text-gray-900" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<div className="flex gap-0.5 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path className="" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">
              "Funnelz made our ad strategy crystal clear! Highly recommend! We've finally stopped guessing."
            </p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Maya Lennox" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="">
<h4 className="text-sm font-bold text-gray-900">Maya Lennox</h4>
<p className="text-xs text-gray-500 font-medium">Ganche</p>
</div>
</div>
<svg className="w-5 h-5 opacity-40" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
</div>
</div>

<div className="rounded-2xl p-8 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[280px] bg-white border-gray-200">
<div className="flex justify-between items-start mb-6">
<svg className="transform rotate-180 text-gray-900" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<div className="flex gap-0.5 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">
              "I would highly recommend for companies looking to grow quick! The best team I've ever worked with."
            </p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Ryan Smith" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<h4 className="text-sm font-bold text-gray-900">Ryan Smith</h4>
<p className="text-xs text-gray-500 font-medium">Ryanzz</p>
</div>
</div>
<svg className="w-5 h-5 opacity-40" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
</div>
</div>


</div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-x-6 gap-y-6">

<div className="rounded-2xl p-8 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[280px] bg-white border-gray-200">
<div className="flex justify-between items-start mb-6">
<svg className="transform rotate-180 text-gray-900" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<div className="flex gap-0.5 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">
              "Mapped out our goals into an easy-to-follow growth system. The clarity we gained was worth every penny."
            </p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Cameron Bell" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<h4 className="text-sm font-bold text-gray-900">Cameron Bell</h4>
<p className="text-xs text-gray-500 font-medium">Ultimus</p>
</div>
</div>
<svg className="w-5 h-5 opacity-40" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
</div>
</div>

<div className="rounded-2xl p-8 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[280px] bg-white border-gray-200">
<div className="flex justify-between items-start mb-6">
<svg className="transform rotate-180 text-gray-900" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<div className="flex gap-0.5 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path className="" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">
              "Funnelz made our ad strategy crystal clear! Highly recommend! We've finally stopped guessing."
            </p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Maya Lennox" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="">
<h4 className="text-sm font-bold text-gray-900">Maya Lennox</h4>
<p className="text-xs text-gray-500 font-medium">Ganche</p>
</div>
</div>
<svg className="w-5 h-5 opacity-40" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
</div>
</div>

<div className="rounded-2xl p-8 border shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[280px] bg-white border-gray-200">
<div className="flex justify-between items-start mb-6">
<svg className="transform rotate-180 text-gray-900" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<div className="flex gap-0.5 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">
              "I would highly recommend for companies looking to grow quick! The best team I've ever worked with."
            </p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Ryan Smith" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<h4 className="text-sm font-bold text-gray-900">Ryan Smith</h4>
<p className="text-xs text-gray-500 font-medium">Ryanzz</p>
</div>
</div>
<svg className="w-5 h-5 opacity-40" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
</div>
</div>


</div></div></main>
    </>
  );
}
